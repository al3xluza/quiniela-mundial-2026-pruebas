// Netlify Function: proxy a ESPN para el Mundial 2026.
// FALLBACK (solo summary): si ESPN falla, intenta API-Football.
// Requiere APIFOOTBALL_KEY en variables de entorno de Netlify.

const ESPN_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world';
const APIFOOTBALL_BASE = 'https://v3.football.api-sports.io';
const APIFOOTBALL_KEY = process.env.APIFOOTBALL_KEY;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=15'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };

  const q = event.queryStringParameters || {};
  const type = (q.type || '').toLowerCase();

  if (type === 'scoreboard') {
    const dates = (q.dates || '').replace(/[^0-9]/g, '');
    const url = `${ESPN_BASE}/scoreboard${dates ? `?dates=${dates}` : ''}`;
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; QuinielaMundial/1.0)', 'Accept': 'application/json' } });
      if (!r.ok) return { statusCode: r.status, headers, body: JSON.stringify({ error: 'espn ' + r.status }) };
      return { statusCode: 200, headers, body: await r.text() };
    } catch (e) { return { statusCode: 502, headers, body: JSON.stringify({ error: String(e) }) }; }
  }

  if (type === 'summary') {
    const id = (q.event || '').replace(/[^0-9A-Za-z]/g, '');
    if (!id) return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing event id' }) };
    let espnErr = null;
    try {
      const r = await fetch(`${ESPN_BASE}/summary?event=${id}`, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; QuinielaMundial/1.0)', 'Accept': 'application/json' } });
      if (r.ok) return { statusCode: 200, headers, body: await r.text() };
      espnErr = 'espn ' + r.status;
    } catch (e) { espnErr = String(e); }

    if (!APIFOOTBALL_KEY) return { statusCode: 502, headers, body: JSON.stringify({ error: espnErr, fallback: 'APIFOOTBALL_KEY no configurada' }) };
    try {
      const r = await fetch(`${APIFOOTBALL_BASE}/fixtures?id=${id}`, { method: 'GET', headers: { 'x-apisports-key': APIFOOTBALL_KEY, 'x-rapidapi-host': 'v3.football.api-sports.io' } });
      if (!r.ok) return { statusCode: 502, headers, body: JSON.stringify({ error: espnErr, fallback: 'api-football ' + r.status }) };
      const apiData = await r.json();
      const converted = convertAPIFootballToESPN(apiData);
      return { statusCode: 200, headers: { ...headers, 'X-Data-Source': 'API-Football (ESPN unavailable)' }, body: JSON.stringify(converted) };
    } catch (e) { return { statusCode: 502, headers, body: JSON.stringify({ error: espnErr, fallback: String(e) }) }; }
  }

  return { statusCode: 400, headers, body: JSON.stringify({ error: 'invalid type (use scoreboard|summary)' }) };
};

function convertAPIFootballToESPN(resp) {
  try {
    const f = resp?.response?.[0];
    if (!f) return {};
    const home = f.teams.home, away = f.teams.away;
    const stats = f.statistics || [];
    const hS = stats.find(s => s.team.id === home.id) || {};
    const aS = stats.find(s => s.team.id === away.id) || {};
    const cv = (s) => !s.statistics ? [] : s.statistics.filter(x => x.value !== null).map(x => ({ name: statName(x.type), displayValue: String(x.value) }));
    const sh = f.fixture.status.short;
    const st = { type: { id: statusType(sh), name: f.fixture.status.long, state: (sh === 'FT' || sh === 'AET' || sh === 'PEN') ? 'post' : 'in' }, displayClock: f.fixture.status.elapsed ? `${f.fixture.status.elapsed}'` : "0'", short: sh };
    return {
      header: { id: `fifa_wc_${f.fixture.id}`, uid: `s:soccer:e:${f.fixture.id}`, status: st,
        competitions: [{ id: '1', uid: 'fifa_wc_2026', type: 'match', status: st, competitors: [
          { id: `${home.id}`, homeAway: 'home', team: { id: `${home.id}`, name: home.name, displayName: home.name, logos: home.logo ? [{ href: home.logo }] : [] }, score: f.goals.home, statistics: cv(hS) },
          { id: `${away.id}`, homeAway: 'away', team: { id: `${away.id}`, name: away.name, displayName: away.name, logos: away.logo ? [{ href: away.logo }] : [] }, score: f.goals.away, statistics: cv(aS) }
        ] }] },
      keyEvents: cvEvents(f.events || []), rosters: cvRosters(f.lineups || []), _source: 'API-Football (fallback)'
    };
  } catch (e) { return {}; }
}
function statName(t) { const m = { 'Shots on Goal': 'shotsOnTarget', 'Total Shots': 'totalShots', 'Blocked Shots': 'blockedShots', 'Fouls': 'foulsCommitted', 'Offsides': 'offsides', 'Ball Possession': 'possessionPct', 'Yellow Cards': 'yellowCards', 'Red Cards': 'redCards', 'Goalkeeper Saves': 'saves', 'Total passes': 'passes', 'Passes accurate': 'completedPasses', 'Passes %': 'passesAccuracyPct', 'Corner Kicks': 'wonCorners' }; return m[t] || t; }
function cvEvents(ev) { if (!Array.isArray(ev)) return []; return ev.filter(e => ['Goal', 'Card', 'subst', 'Subst'].includes(e.type)).map(e => { let type = 'other', text = ''; if (e.type === 'Goal') { type = 'goal'; text = `Goal: ${e.player?.name || ''}`; if (e.detail === 'Penalty') text += ' (Penalty)'; if (e.detail === 'Own Goal') text += ' (Own Goal)'; } else if (e.type === 'Card') { type = (e.detail === 'Yellow Card') ? 'yellow' : 'red'; text = `${e.detail || 'Card'}: ${e.player?.name || ''}`; } else { type = 'substitution'; text = `Substitution: ${e.player?.name || ''} on, ${e.assist?.name || ''} off`; } return { id: `${e.team?.id || 'x'}_${e.time?.elapsed || 0}`, text, clock: { displayValue: `${e.time?.elapsed || 0}'` }, type: { id: type, text: type }, participants: [{ athlete: { id: `${e.player?.id || ''}`, displayName: e.player?.name || '', shortName: e.player?.name || '' } }], team: { id: `${e.team?.id || ''}`, name: e.team?.name || '', displayName: e.team?.name || '' } }; }); }
function cvRosters(lu) { if (!Array.isArray(lu) || !lu.length) return []; return lu.map(l => ({ team: { id: `${l.team.id}`, name: l.team.name, displayName: l.team.name, logos: l.team.logo ? [{ href: l.team.logo }] : [] }, roster: (l.startXI || []).concat(l.substitutes || []).map((p, i) => ({ starter: i < (l.startXI || []).length, jersey: p.player.number, athlete: { id: `${p.player.id}`, displayName: p.player.name, shortName: p.player.name, jersey: p.player.number } })) })); }
function statusType(s) { const m = { 'TBD': '0', 'NS': '1', '1H': '2', 'HT': '3', '2H': '4', 'ET': '5', 'BT': '6', 'P': '7', 'FT': '8', 'AET': '8', 'PEN': '8', 'PST': '8', 'SUSP': '1', 'INT': '1', 'AWD': '8', 'WO': '8', 'CANC': '1' }; return m[s] || '0'; }
