<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiniela Mundial 2026 — Fase 2 (Knockouts)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
:root{
  --pitch:#0E2B20;
  --pitch-2:#143828;
  --grass:#22A565;
  --board:#0A1F17;
  --gold:#F2C14E;
  --cream:#EFF5F0;
  --line:rgba(255,255,255,.10);
  --red:#E0574F;
  --ok:#3BC47C;
}
*{margin:0;padding:0;box-sizing:border-box}
body{
  background:var(--pitch);
  background-image:repeating-linear-gradient(90deg, rgba(255,255,255,.018) 0 64px, transparent 64px 128px);
  color:var(--cream);
  font-family:'Inter',system-ui,sans-serif;
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
}
.wrap{max-width:920px;margin:0 auto;padding:0 14px 80px}
header{padding:26px 0 14px;text-align:center}
.kicker{font-family:'Saira Condensed';font-weight:600;letter-spacing:.28em;font-size:12px;color:var(--grass);text-transform:uppercase}
h1{font-family:'Saira Condensed';font-weight:800;font-size:clamp(34px,7vw,52px);line-height:.95;text-transform:uppercase;letter-spacing:.01em;margin:6px 0 2px}
h1 .y{color:var(--gold)}
.sub{font-size:12.5px;color:#FFFFFF}
.statusbar{display:flex;gap:8px;justify-content:center;align-items:center;flex-wrap:wrap;margin:16px 0 6px}
button{font-family:'Saira Condensed';font-weight:600;font-size:15px;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);border-radius:8px;background:var(--pitch-2);color:var(--cream);padding:10px 16px;cursor:pointer;transition:transform .08s, background .15s}
button:hover{background:#1A4633}
button:active{transform:scale(.97)}
button:focus-visible{outline:2px solid var(--gold);outline-offset:2px}
button.primary{background:var(--grass);color:#06291A;border-color:transparent}
button.primary:hover{background:#2BBE76}
button:disabled{opacity:.5;cursor:wait}
.note{font-size:12px;color:rgba(255,255,255,.5);text-align:center;min-height:16px;margin-bottom:8px}
.note.err{color:var(--red)}
.note.ok{color:var(--ok)}
.tabs{display:flex;gap:6px;justify-content:center;margin:10px 0 18px;flex-wrap:wrap}
.tab{flex:1;min-width:120px;font-size:13px}
@media(min-width:600px){.tab{flex:0 1 180px;font-size:14px}}
.tab.active{background:var(--gold);color:#3A2C06;border-color:transparent}
.tab.tab-envivo{display:none}

/* ----- Cards & Leaderboard ----- */
.boardcard{background:var(--board);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.boardhead{display:grid;grid-template-columns:40px 1fr 70px 56px;gap:8px;padding:12px 16px;border-bottom:1px solid var(--line);font-family:'Saira Condensed';font-weight:600;letter-spacing:.14em;font-size:14px;color:#FFFFFF;text-transform:uppercase}
.boardhead .r{text-align:right}
.rowp{display:grid;grid-template-columns:40px 1fr 70px 56px;gap:8px;align-items:center;padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.05)}
.rowp:last-child{border-bottom:none}
.pos{font-family:'JetBrains Mono';font-weight:700;font-size:14px;text-align:center;color:#FFFFFF}
.rowp.top3 .pos{color:var(--gold)}
.pname{font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pts{font-family:'JetBrains Mono';font-weight:700;font-size:18px;text-align:center}
.exa{font-family:'JetBrains Mono';font-size:12px;text-align:center;color:rgba(255,255,255,.45)}
.ptlive{font-family:'JetBrains Mono';font-weight:700;font-size:10px;color:var(--red);vertical-align:super;margin-left:2px}
.livebanner{display:flex;align-items:center;gap:8px;justify-content:center;background:#5A1714;border:1px solid rgba(224,87,79,.55);color:#FFFFFF;border-radius:10px;padding:9px 14px;margin-bottom:12px;font-family:'Saira Condensed';font-weight:600;letter-spacing:.12em;font-size:13px;text-transform:uppercase;animation:livepulse 1.4s ease-in-out infinite}
.livedot{color:var(--red);font-size:11px}
.livetag{color:var(--red);font-weight:700;letter-spacing:.08em}

/* ----- Partidos ----- */
.dayhdr{font-family:'Saira Condensed';font-weight:700;font-size:14px;color:#FFFFFF;text-transform:uppercase;letter-spacing:.12em;margin:20px 0 10px;padding:0 4px}
.daymatches{padding:0 4px;margin-bottom:12px;display:grid;grid-template-columns:1fr;gap:10px}
@media(min-width:640px){.daymatches{grid-template-columns:1fr 1fr}}
.match{background:var(--board);border:1px solid var(--line);border-left:3px solid var(--line);border-radius:12px;overflow:hidden;cursor:pointer}
.match.is-final{border-left-color:var(--ok)}
.match.is-live{border-left-color:var(--red)}
.mrow{display:grid;grid-template-columns:1fr 80px 1fr;align-items:center;gap:9px;padding:16px 14px 12px}
.match-team{font-family:'Saira Condensed';font-weight:600;font-size:16px;letter-spacing:.02em;text-transform:uppercase;line-height:1.12;display:flex;align-items:center;gap:7px;min-width:0}
.match-team.t1{text-align:right;justify-content:flex-end}
.match-team .tname{min-width:0;overflow-wrap:break-word;white-space:normal}
.score{font-family:'JetBrains Mono';font-weight:700;font-size:22px;text-align:center;background:#05140D;border:1px solid var(--line);border-radius:8px;padding:6px 0;color:var(--gold)}
.score.pending{color:#FFFFFF;font-size:16px;letter-spacing:.1em}
.score.live{color:#FFFFFF;background:#5A1714;border-color:rgba(224,87,79,.55);animation:livepulse 1.4s ease-in-out infinite}
.score .min-txt{font-size:12px;color:rgba(255,255,255,.7);font-weight:500;display:block;margin-top:2px}
.minfo{display:flex;justify-content:space-between;align-items:center;padding:0 14px 12px;font-size:11.5px;color:#FFFFFF}
.gtag{font-family:'JetBrains Mono';font-weight:700;color:#FFFFFF}
.mexp{border-top:1px solid var(--line);background:#081A12;padding:10px 14px 14px;display:none;pointer-events:none}
.match.open .mexp{display:block;pointer-events:auto}

.predrow{display:grid;grid-template-columns:1fr 64px 36px;gap:8px;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:13px}
.predrow:last-child{border:none}
.predscore{font-family:'JetBrains Mono';font-weight:500;text-align:center;color:rgba(255,255,255,.75)}
.predpts{font-family:'JetBrains Mono';font-weight:700;text-align:right}
.p7{color:var(--gold)} .p43{color:var(--ok)} .p1{color:#8FB8A4} .p0{color:rgba(255,255,255,.28)}

/* ----- Goleadores & Tarjetas ----- */
.scorer-row{display:grid;grid-template-columns:40px 1fr 1fr 50px;gap:8px;align-items:center;padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.05)}
.scorer-row:last-child{border-bottom:none}
.scorer-name{font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.scorer-team{font-size:12px;color:#FFFFFF;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;gap:5px}
.scorer-goals{font-family:'JetBrains Mono';font-weight:700;font-size:18px;text-align:center;color:var(--gold)}

.card-row{display:grid;grid-template-columns:1fr 1fr 70px 70px;gap:8px;align-items:center;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.05)}
.card-row:last-child{border-bottom:none}
.card-name{font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.card-country{display:flex;align-items:center;gap:5px;font-size:11px;color:#FFFFFF;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.card-badge{display:flex;align-items:center;justify-content:center;gap:3px;font-family:'JetBrains Mono';font-weight:700;font-size:12px;height:28px;border-radius:4px}
.card-badge-yellow{background:rgba(255,215,0,.2);color:#FFD700}
.card-badge-red{background:rgba(255,107,107,.2);color:#FF6B6B}
.card-badge.empty{opacity:.3}

.flag{width:20px;height:20px;object-fit:cover;border-radius:50%;margin-right:6px;vertical-align:middle;box-shadow:0 0 0 1.5px var(--line),0 1px 2px rgba(0,0,0,.45)}
.flag-r{margin-right:0;margin-left:6px}

/* ----- Simulador ----- */
#toggleSimulation{margin-bottom:12px;padding:8px 12px;background:rgba(99,190,123,.2);border:1px solid rgba(99,190,123,.4);color:#fff;border-radius:6px;font-size:12px;cursor:pointer;font-weight:500;width:100%;transition:all .3s}
#simulationPanel{background:#0A1F14;border:1px solid var(--line);border-radius:8px;padding:12px 14px;margin-bottom:12px;font-size:13px;max-height:0px;opacity:0;overflow:hidden;transition:max-height .3s;display:block}
#simulationPanel.open{max-height:500px;opacity:1}

@keyframes livepulse{0%,100%{box-shadow:0 0 0 0 rgba(224,87,79,.45)}50%{box-shadow:0 0 0 4px rgba(224,87,79,0)}}
@media (max-width:520px){
  .boardhead,.rowp{grid-template-columns:32px 1fr 56px 44px;padding-left:12px;padding-right:12px}
  .scorer-row{grid-template-columns:32px 1fr 76px 40px;padding:10px 12px}
  .card-row{grid-template-columns:1fr 1fr 65px 65px;gap:6px;padding:9px 12px}
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {-webkit-appearance:none;margin:0}
input[type="number"]{-moz-appearance:textfield}
</style>
</head>
<body>
<div class="wrap">
<header>
  <div class="kicker">Canadá · México · USA</div>
  <h1>Quiniela Mundial <span class="y">2026</span></h1>
  <div class="sub">Fase 2 — Eliminatorias — 24 participantes</div>
</header>

<div class="statusbar">
  <button class="primary" id="btnFetch">⟳ Actualizar</button>
</div>
<div class="note" id="note" aria-live="polite" aria-atomic="true">Los resultados se cargan desde la hoja del promotor.</div>

<div class="tabs" role="tablist" aria-label="Vistas de la quiniela">
  <button class="tab active" data-v="tabla" role="tab" id="tab-tabla" aria-controls="vTabla" aria-selected="true">Posiciones</button>
  <button class="tab tab-envivo" data-v="envivo" role="tab" id="tab-envivo" aria-controls="vEnvivo" aria-selected="false"><span class="livedot" style="margin-right:5px">●</span>En Vivo</button>
  <button class="tab" data-v="partidos" role="tab" id="tab-partidos" aria-controls="vPartidos" aria-selected="false">Partidos</button>
  <button class="tab" data-v="goleadores" role="tab" id="tab-goleadores" aria-controls="vGoleadores" aria-selected="false">Goleadores</button>
  <button class="tab" data-v="tarjetas" role="tab" id="tab-tarjetas" aria-controls="vTarjetas" aria-selected="false">Tarjetas</button>
  <button class="tab" data-v="instrucciones" role="tab" id="tab-instrucciones" aria-controls="vInstrucciones" aria-selected="false">Instrucciones</button>
</div>

<div id="vTabla" role="tabpanel" aria-labelledby="tab-tabla" tabindex="0"></div>
<div id="vEnvivo" role="tabpanel" aria-labelledby="tab-envivo" tabindex="0" style="display:none"></div>
<div id="vPartidos" role="tabpanel" aria-labelledby="tab-partidos" tabindex="0" style="display:none"></div>
<div id="vGoleadores" role="tabpanel" aria-labelledby="tab-goleadores" tabindex="0" style="display:none"></div>
<div id="vTarjetas" role="tabpanel" aria-labelledby="tab-tarjetas" tabindex="0" style="display:none"></div>
<div id="vInstrucciones" role="tabpanel" aria-labelledby="tab-instrucciones" tabindex="0" style="display:none"></div>

</div>

<script>
// ==========================================
// CONFIG
// ==========================================
const SHEET_ID = "1rlfScbfGZdte0JxGwA3NmHr_08wFgmLTk-c2SyvlLzA";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwVtJzpnfBjfqH-YCx_y7JuN6hJIYlq6GbCKq7KYu2XsmRST448gjlI7wscXC5Bdn5p/exec";

let DATA = { matches: [] };
let RESULTS = {};
let LIVE = {};
let MINUTOS = {};
let GOLEADORES = [];
let TARJETAS = [];
let PREDICCIONES = {};
let lastUpdate = null;
let activeTab = 'tabla';
let gruposFilterDate = null;
let SIMULATED_RESULTS = {};
let OPEN_PREDICTIONS_ID = null;
// ==========================================
// EN VIVO — ESPN API + Netlify Proxy
// ==========================================
const ESPN_PROXY = '/.netlify/functions/espn';
const ESPN_NAMES = {
  'COREA DEL SUR':['south korea','korea republic','korea'],'MEXICO':['mexico'],
  'REP. CHECA':['czechia','czech republic'],'SUDAFRICA':['south africa'],
  'BOSNIA-HERZEGOVINA':['bosnia','bosnia and herzegovina'],'CANADA':['canada'],'QATAR':['qatar'],'SUIZA':['switzerland'],
  'BRASIL':['brazil'],'ESCOCIA':['scotland'],'HAITI':['haiti'],'MARRUECOS':['morocco'],
  'AUSTRALIA':['australia'],'PARAGUAY':['paraguay'],'TURQUIA':['turkey','türkiye'],'USA':['united states','usa'],
  'ALEMANIA':['germany'],'COSTA DE MARFIL':['ivory coast','cote divoire'],'CURAZAO':['curacao','curaçao'],'ECUADOR':['ecuador'],
  'HOLANDA':['netherlands','holland'],'JAPON':['japan'],'SUECIA':['sweden'],'TUNEZ':['tunisia'],
  'BELGICA':['belgium'],'EGIPTO':['egypt'],'IRAN':['iran','ir iran'],'NUEVA ZELANDA':['new zealand'],
  'ARABIA SAUDITA':['saudi arabia'],'CABO VERDE':['cape verde'],'ESPANA':['spain'],'URUGUAY':['uruguay'],
  'FRANCIA':['france'],'IRAQ':['iraq'],'NORUEGA':['norway'],'SENEGAL':['senegal'],
  'ARGELIA':['algeria'],'ARGENTINA':['argentina'],'AUSTRIA':['austria'],'JORDANIA':['jordan'],
  'COLOMBIA':['colombia'],'PORTUGAL':['portugal'],'RD CONGO':['dr congo'],'UZBEKISTAN':['uzbekistan'],
  'CROACIA':['croatia'],'GHANA':['ghana'],'INGLATERRA':['england'],'PANAMA':['panama']
};

let ENVIVO_EVENT = null;
let ENVIVO_TIMER = null;
let ENVIVO_ACTIVE = false;

function norm(s){ return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z ]/g,'').trim(); }
function matchesTeam(quinielaName, espnName){
  const variants = ESPN_NAMES[String(quinielaName||'').toUpperCase().trim()] || [];
  const en = norm(espnName);
  return variants.some(v => en===norm(v) || en.includes(norm(v)));
}

function lvSetStatus(txt, err, panelId='vEnvivo'){
  const el=document.getElementById(panelId); if(!el) return;
  el.style.color=err?'var(--red)':'var(--ok)';
  el.textContent=txt||'';
}

function lvFlag(name){
  const iso = FLAGS[String(name||'').toUpperCase().trim()];
  return iso ? `https://flagcdn.com/w80/${iso}.png` : '';
}

async function findLiveEvents(){
  const d=new Date();
  const ymd=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
  try{
    const res=await fetch(`${ESPN_PROXY}?type=scoreboard&dates=${ymd}`);
    if(!res.ok) throw new Error('scoreboard');
    const js=await res.json();
    const events=js.events||[];
    const live=events.filter(e=>{
      const st=e.status&&e.status.type&&e.status.type.state;
      return st==='in';
    });
    return live;
  }catch(e){
    console.error('ESPN error:',e);
    return [];
  }
}

async function fetchSummary(eventId){
  try{
    const res=await fetch(`${ESPN_PROXY}?type=summary&event=${eventId}`);
    if(!res.ok) throw new Error('summary');
    return await res.json();
  }catch(e){
    console.error('ESPN summary error:',e);
    return null;
  }
}

function renderEnvivo(sum, panelId='vEnvivo'){
  const el=document.getElementById(panelId); if(!el) return;
  const comp=sum?.header?.competitions?.[0];
  if(!comp){
    el.innerHTML=`<div style="padding:20px;text-align:center;color:rgba(255,255,255,.5)">No hay datos disponibles.</div>`;
    return;
  }
  
  const cs=comp.competitors||[];
  const home=cs.find(c=>c.homeAway==='home')||cs[0]||{};
  const away=cs.find(c=>c.homeAway==='away')||cs[1]||{};
  const hName=(home.team?.displayName||home.team?.name)||'';
  const aName=(away.team?.displayName||away.team?.name)||'';
  const hLogo=(home.team?.logos?.[0]?.href)||(home.team?.logo)||lvFlag(hName);
  const aLogo=(away.team?.logos?.[0]?.href)||(away.team?.logo)||lvFlag(aName);
  const hScore=home.score!=null?home.score:'0';
  const aScore=away.score!=null?away.score:'0';
  
  const st=comp.status||{};
  const stType=st.type||{};
  const isFinal=stType.completed===true||stType.state==='post';
  const clockTxt=isFinal?'Final':(st.displayClock||'En juego');
  
  let h=`<div style="padding:20px">`;
  h+=`<div style="display:grid;grid-template-columns:1fr 100px 1fr;gap:20px;align-items:center;margin-bottom:30px">`;
  h+=`<div style="text-align:right"><img src="${hLogo}" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-bottom:10px" alt=""><div style="font-weight:600;font-size:16px">${hName}</div></div>`;
  h+=`<div style="text-align:center"><div style="font-family:'JetBrains Mono';font-size:48px;font-weight:700;color:var(--gold)">${hScore} - ${aScore}</div><div style="font-size:13px;color:rgba(255,255,255,.7);margin-top:8px">${isFinal?'Final':'<span style="color:var(--red)">● EN VIVO</span>'}</div><div style="font-size:12px;color:rgba(255,255,255,.5)">${clockTxt}</div></div>`;
  h+=`<div style="text-align:left"><img src="${aLogo}" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-bottom:10px" alt=""><div style="font-weight:600;font-size:16px">${aName}</div></div>`;
  h+=`</div>`;
  
  const events=comp.videos||comp.articles||[];
  if(events.length){
    h+=`<div style="background:var(--board);border:1px solid var(--line);border-radius:8px;padding:15px">`;
    h+=`<div style="font-weight:600;margin-bottom:10px;font-size:13px;text-transform:uppercase;letter-spacing:.08em">Eventos</div>`;
    events.slice(0,10).forEach(e=>{
      const desc=e.description||e.headline||'Evento';
      h+=`<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px">${desc}</div>`;
    });
    h+=`</div>`;
  }
  
  h+=`</div>`;
  el.innerHTML=h;
}

async function updateEnvivo(){
  try{
    const live=await findLiveEvents();
    if(!live.length){
      if(ENVIVO_ACTIVE){
        ENVIVO_ACTIVE=false;
        document.getElementById('tab-envivo').style.display='none';
        clearInterval(ENVIVO_TIMER);
      }
      return;
    }
    
    if(!ENVIVO_ACTIVE){
      ENVIVO_ACTIVE=true;
      document.getElementById('tab-envivo').style.display='block';
    }
    
    ENVIVO_EVENT=live[0].id;
    const sum=await fetchSummary(ENVIVO_EVENT);
    if(sum) renderEnvivo(sum,'vEnvivo');
  }catch(e){
    console.error('EN VIVO error:',e);
  }
}

function startEnvivoRefresh(){
  clearInterval(ENVIVO_TIMER);
  updateEnvivo();
  ENVIVO_TIMER=setInterval(updateEnvivo, 20*1000);
}

// Mapa de banderas
const FLAGS = {
  'COREA DEL SUR':'kr','KOREA':'kr','SOUTH KOREA':'kr',
  'MEXICO':'mx','REP. CHECA':'cz','SUDAFRICA':'za',
  'BOSNIA-HERZEGOVINA':'ba','CANADA':'ca','QATAR':'qa','SUIZA':'ch',
  'BRASIL':'br','ESCOCIA':'gb-sct','HAITI':'ht','MARRUECOS':'ma',
  'AUSTRALIA':'au','PARAGUAY':'py','TURQUIA':'tr','USA':'us',
  'ALEMANIA':'de','COSTA DE MARFIL':'ci','CURAZAO':'cw','CURAÇAO':'cw','ECUADOR':'ec',
  'HOLANDA':'nl','JAPON':'jp','SUECIA':'se','TUNEZ':'tn',
  'BELGICA':'be','EGIPTO':'eg','IRAN':'ir','NUEVA ZELANDA':'nz',
  'ARABIA SAUDITA':'sa','CABO VERDE':'cv','ESPANA':'es','URUGUAY':'uy',
  'FRANCIA':'fr','IRAQ':'iq','NORUEGA':'no','SENEGAL':'sn',
  'ARGELIA':'dz','ARGENTINA':'ar','AUSTRIA':'at','JORDANIA':'jo',
  'COLOMBIA':'co','PORTUGAL':'pt','RD CONGO':'cd','UZBEKISTAN':'uz',
  'CROACIA':'hr','GHANA':'gh','INGLATERRA':'gb-eng','PANAMA':'pa'
};

function flagImg(name, side){
  const iso = FLAGS[String(name||'').toUpperCase().trim()];
  if(!iso) return '';
  const cls = side==='right' ? 'flag flag-r' : 'flag';
  return `<img class="${cls}" src="https://flagcdn.com/w80/${iso}.png" alt="" loading="lazy">`;
}

// Parser para fechas: el Sheet/gviz puede devolver "Date(2026,5,28)" (mes base-0) o "M/D/AA"
function parseFechaToDate(raw){
  if(!raw) return null;
  const s=String(raw);
  const gv=s.match(/^Date\((\d+),(\d+),(\d+)\)/);
  if(gv){
    return new Date(parseInt(gv[1],10), parseInt(gv[2],10), parseInt(gv[3],10));
  }
  const parts=s.split('/');
  if(parts.length===3){
    let mo=parseInt(parts[0],10), da=parseInt(parts[1],10), yr=parseInt(parts[2],10);
    if(yr<100) yr+=2000;
    if(mo&&da&&yr) return new Date(yr,mo-1,da);
  }
  return null;
}
function formatFechaDisplay(raw){
  const dt=parseFechaToDate(raw);
  if(!dt) return String(raw||'');
  return `${dt.getDate()}/${dt.getMonth()+1}`;
}
function parseSheetDateSort(s){
  const dt=parseFechaToDate(s);
  return dt?dt.getTime():0;
}

// ==========================================
// CARGAR DATOS DESDE GOOGLE SHEETS
// ==========================================
async function loadPartidos(){
  try{
    const base=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1`;
    const txt=await (await fetch(base+'&sheet=RESULTADOS')).text();
    if(txt.indexOf('"errors"')!==-1) throw new Error('No hay datos');
    
    const js=JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')));
    const matches=[];
    (js.table.rows||[]).forEach((row,idx)=>{
      const c=row.c||[];
      const id=c[0]&&c[0].v!=null?Number(c[0].v):null;
      const fecha=c[1]&&c[1].v!=null?String(c[1].v):'';
      const round=c[2]&&c[2].v!=null?String(c[2].v):'R32';
      const t1=c[3]&&c[3].v!=null?String(c[3].v):'';
      const t2=c[4]&&c[4].v!=null?String(c[4].v):'';
      
      if(id!=null && t1 && t2){
        matches.push({id, date:fecha, time:'', t1, t2, round, stadium:''});
      }
    });
    DATA.matches=matches;
  }catch(e){
    console.error('Error loading partidos:',e);
  }
}

async function loadPredicciones(){
  try{
    const base=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1`;
    const txt=await (await fetch(base+'&sheet=PREDICCIONES_FASE2')).text();
    if(txt.indexOf('"errors"')!==-1) throw new Error('No hay predicciones');
    
    const js=JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')));
    const preds={};
    const headerRow=js.table.rows[0]?.c||[];
    const participantes=headerRow.slice(1).map(h=>h?.v||'').filter(x=>x);
    
    (js.table.rows||[]).forEach((row,rowIdx)=>{
      if(rowIdx===0) return;
      const c=row.c||[];
      const matchId=c[0]&&c[0].v!=null?Number(c[0].v):null;
      if(matchId===null) return;
      
      participantes.forEach((pname,colIdx)=>{
        if(!preds[pname]) preds[pname]={};
        const predStr=c[colIdx+1]&&c[colIdx+1].v!=null?String(c[colIdx+1].v):'';
        const [g1,g2]=predStr.split('-').map(x=>parseInt(x.trim())||0);
        if(Number.isFinite(g1)&&Number.isFinite(g2)){
          preds[pname][matchId]=[g1,g2];
        }
      });
    });
    PREDICCIONES=preds;
  }catch(e){
    console.error('Error loading predicciones:',e);
  }
}

async function loadResults(showNote=true){
  try{
    const base=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1`;
    
    // Cargar RESULTADOS
    const txt=await (await fetch(base+'&sheet=RESULTADOS')).text();
    if(txt.indexOf('"errors"')!==-1) throw new Error('No hay datos');
    
    const js=JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')));
    const nuevo={}, vivo={}, minutos={};
    (js.table.rows||[]).forEach(row=>{
      const c=row.c||[];
      const id=c[0]&&c[0].v!=null?Number(c[0].v):null;
      const g1=c[5]&&c[5].v!=null?Number(c[5].v):null;
      const g2=c[6]&&c[6].v!=null?Number(c[6].v):null;
      const estado=c[7]&&c[7].v!=null?String(c[7].v).toUpperCase().trim():'';
      if(id!=null && Number.isInteger(g1) && Number.isInteger(g2)){
        if(estado==='FINAL') nuevo[id]=[g1,g2];
        else if(estado==='EN VIVO') vivo[id]=[g1,g2];
      }
    });
    RESULTS=nuevo;
    LIVE=vivo;
    lastUpdate=new Date();
    renderAll();
    setNote(`${Object.keys(RESULTS).length} resultado(s) final(es).`,'ok');
    loadGoleadores();
    loadTarjetas();
  }catch(e){
    console.error('Error:',e);
    if(showNote) setNote('No se pudo cargar. Verifica que el Sheet esté compartido correctamente.','err');
  }
}

function setNote(t, cls){
  const n=document.getElementById('note');
  n.textContent=t;
  n.className='note '+(cls||'');
}

function renderAll(){
  renderTabla();
  renderPartidos();
  renderGoleadores();
  renderTarjetas();
}

// ==========================================
// TABS
// ==========================================
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  activeTab=t.dataset.v;
  document.querySelectorAll('.tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});
  t.classList.add('active');
  t.setAttribute('aria-selected','true');
  document.getElementById('vTabla').style.display=t.dataset.v==='tabla'?'block':'none';
  document.getElementById('vEnvivo').style.display=t.dataset.v==='envivo'?'block':'none';
  document.getElementById('vPartidos').style.display=t.dataset.v==='partidos'?'block':'none';
  document.getElementById('vGoleadores').style.display=t.dataset.v==='goleadores'?'block':'none';
  document.getElementById('vTarjetas').style.display=t.dataset.v==='tarjetas'?'block':'none';
  document.getElementById('vInstrucciones').style.display=t.dataset.v==='instrucciones'?'block':'none';
}));

document.getElementById('btnFetch').addEventListener('click',()=>loadResults(false));

// ==========================================
// RENDER POSICIONES (con Simulador)
// ==========================================
function renderTabla(){
  const st=standings();
  const played=Object.keys(RESULTS).length;
  const nLive=Object.keys(LIVE).length;
  let liveDetail='';
  if(nLive>0){
    const liveMatches=DATA.matches.filter(m=>LIVE[m.id]);
    if(liveMatches.length>0){
      liveDetail=liveMatches.map(match=>{
        const sc=LIVE[match.id];
        const minTxt=MINUTOS[match.id]?` (${MINUTOS[match.id]}')`:'';
        return `<div class="livebanner"><span class="livedot">●</span> EN VIVO · ⚽ <strong>${match.t1} ${sc[0]} - ${sc[1]} ${match.t2}</strong>${minTxt}</div>`;
      }).join('');
    }
  }
  
  let h=nLive>0?liveDetail:'';
  
  // Simulador — el Sheet guarda fechas como M/D/AA (ej: 6/30/26)
  const todayMs=new Date(new Date().toDateString()).getTime();
  let todaysMatches=DATA.matches.filter(m=>{
    if(RESULTS[m.id]) return false;
    return parseSheetDateSort(m.date)===todayMs;
  });
  
  if(todaysMatches.length>0){
    h+=`<button id="toggleSimulation" onclick="toggleSimulationPanel()" style="margin-bottom:12px;padding:8px 12px;background:rgba(99,190,123,.2);border:1px solid rgba(99,190,123,.4);color:#fff;border-radius:6px;font-size:12px;cursor:pointer;font-weight:500;width:100%;transition:all .3s">🎲 Simular Resultados ▶</button>
    <div id="simulationPanel" style="background:#0A1F14;border:1px solid var(--line);border-radius:8px;padding:12px 14px;margin-bottom:12px;font-size:13px;max-height:0px;opacity:0;overflow:hidden;transition:max-height .3s;display:block">
      <div style="color:rgba(255,255,255,.7);margin-bottom:12px;font-weight:600">Próximos partidos de hoy - Ingresa goles y simula</div>`;
    todaysMatches.forEach(m=>{
      const cur=SIMULATED_RESULTS[m.id]||LIVE[m.id]||[0,0];
      const isLive=LIVE[m.id]?true:false;
      const liveDot=isLive?`<span style="color:var(--red);font-size:8px;margin-right:6px">●</span>`:'';
      h+=`<div style="margin-bottom:14px;padding:10px;background:rgba(99,190,123,.08);border-radius:6px;border:1px solid rgba(99,190,123,.2)${isLive?';border-left:3px solid var(--red)':''}">
        <div style="display:flex;gap:6px;align-items:center;margin-bottom:8px;font-size:12px;color:rgba(255,255,255,.8)">
          ${liveDot}
          <span style="font-weight:600">${m.round||''}</span>
          <span style="color:rgba(255,255,255,.5)">·</span>
          <span style="flex:1">${m.t1} vs ${m.t2}</span>
          <span style="color:rgba(255,255,255,.5)">${formatFechaDisplay(m.date)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between">
          <div style="display:flex;gap:6px;align-items:center;flex:1;min-width:200px">
            <span style="font-size:12px;font-weight:500;min-width:50px">${m.t1}</span>
            <input type="number" min="0" max="20" value="${cur[0]}" id="g1_${m.id}" style="width:40px;padding:5px;background:#05140D;border:1px solid var(--line);color:#fff;border-radius:4px;font-size:12px;text-align:center">
            <span style="color:rgba(255,255,255,.5)">-</span>
            <input type="number" min="0" max="20" value="${cur[1]}" id="g2_${m.id}" style="width:40px;padding:5px;background:#05140D;border:1px solid var(--line);color:#fff;border-radius:4px;font-size:12px;text-align:center">
            <span style="font-size:12px;font-weight:500;min-width:50px">${m.t2}</span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;width:100%">
            <button onclick="applySimulation(${m.id})" style="padding:5px 10px;background:rgba(99,190,123,.3);border:1px solid rgba(99,190,123,.5);color:#fff;border-radius:4px;font-size:11px;cursor:pointer;font-weight:500;flex:1;min-width:80px">Simular</button>
            <button onclick="clearSimulation(${m.id})" style="padding:5px 10px;background:rgba(255,255,255,.1);border:1px solid var(--line);color:#fff;border-radius:4px;font-size:11px;cursor:pointer;font-weight:500;flex:1;min-width:80px">Limpiar</button>
          </div>
        </div>
      </div>`;
    });
    h+=`<div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:8px">Ingresa los goles y haz clic en "Simular" para ver cómo cambian las posiciones</div></div>`;
  }
  
  h+=`<div class="boardcard"><div class="boardhead"><div style="text-align:center">#</div><div>Participante</div><div style="text-align:center">Pts</div><div style="text-align:center">Exactos</div></div>`;
  const vals=st.map(s=>s.tot);
  const hasSimulation=Object.keys(SIMULATED_RESULTS).length>0;
  st.forEach((s,k)=>{
    const activo=played>0||nLive>0;
    const col=activo?ptsColor(s.tot,vals):null;
    const italicStyle=hasSimulation?'font-style:italic;':'';
    const pill=col?`style="${italicStyle}background:${col};color:#15321F;border-radius:6px;padding:2px 0"`:`style="${italicStyle}"`;
    const liveTag=s.live>0?`<span class="ptlive" title="${s.live} pts provisionales del partido en vivo">+${s.live}</span>`:'';
    const posColor=!activo?'':(s.rank===1?'color:var(--gold)':s.rank===2?'color:#C9CDD3':s.rank===3?'color:#CD7F32':'');
    h+=`<div class="rowp ${s.rank<=3&&activo?'top3':''}">
      <div class="pos" style="${posColor}">${activo?s.rank:'-'}</div>
      <div class="pname">${s.name}</div>
      <div class="pts" ${pill}>${s.tot}${liveTag}</div>
      <div class="exa">${s.exact}</div></div>`;
  });
  const upd=lastUpdate?` · actualizado ${lastUpdate.toLocaleTimeString('es-VE',{hour:'2-digit',minute:'2-digit'})}`:'';
  const liveNote=nLive>0?` · <span class="livetag">● ${nLive} en vivo</span> (posiciones provisionales)`:'';
  h+=`</div><div class="note" style="margin-top:10px">Fase 2 Knockouts · Desempate: resultados exactos${liveNote}${upd}</div>`;
  document.getElementById('vTabla').innerHTML=h;
}

function ptsColor(pts, vals){
  if(!vals.length) return null;
  const max=Math.max(...vals);
  const min=Math.min(...vals);
  if(pts===max) return 'rgba(242,193,78,.3)';
  if(pts===min) return 'rgba(224,87,79,.2)';
  return null;
}

function toggleSimulationPanel(){
  const panel=document.getElementById('simulationPanel');
  const btn=document.getElementById('toggleSimulation');
  panel.classList.toggle('open');
  btn.textContent=panel.classList.contains('open')?'🎲 Simular Resultados ▼':'🎲 Simular Resultados ▶';
}

function applySimulation(matchId){
  const g1=parseInt(document.getElementById(`g1_${matchId}`).value)||0;
  const g2=parseInt(document.getElementById(`g2_${matchId}`).value)||0;
  SIMULATED_RESULTS[matchId]=[g1,g2];
  renderTabla();
}

function clearSimulation(matchId){
  delete SIMULATED_RESULTS[matchId];
  renderTabla();
}

function standings(){
  const scores={};
  const exactCount={};
  
  return Object.entries(PREDICCIONES).map(([name,preds])=>{
    let tot=0,exact=0,live=0;
    Object.entries(preds).forEach(([mId,pred])=>{
      const mIdNum=Number(mId);
      const result=SIMULATED_RESULTS[mIdNum]||RESULTS[mIdNum]||LIVE[mIdNum];
      if(result){
        const pts=calcPoints(pred,result);
        tot+=pts;
        if(pts===7) exact++;
        if(LIVE[mIdNum] && !RESULTS[mIdNum]) live+=pts;
      }
    });
    return {name,tot,exact,live};
  }).sort((a,b)=>b.tot-a.tot||b.exact-a.exact).map((s,i)=>({...s,rank:i+1}));
}

function calcPoints(pred,result){
  if(!pred||!result) return 0;
  const[p1,p2]=pred;
  const[r1,r2]=result;
  if(p1===r1&&p2===r2) return 7;
  if((p1>p2)===(r1>r2)){
    if(p1===r1||p2===r2) return 4;
    return 3;
  }
  if(p1===r1||p2===r2) return 1;
  return 0;
}

// ==========================================
// RENDER PARTIDOS (con banderas) - SOLO FASE 2
// ==========================================
function renderPartidos(){
  const byDate={};
  const fechasSet=new Set();
  // Filtrar solo Fase 2 (IDs >= 72)
  DATA.matches.filter(m=>m.id>=72).forEach(m=>{
    (byDate[m.date]=byDate[m.date]||[]).push(m);
    fechasSet.add(m.date);
  });
  const fechas=Array.from(fechasSet).sort((a,b)=>{
    const da=parseSheetDateSort(a), db=parseSheetDateSort(b);
    return da-db;
  });
  let h=`<div style="padding:0 4px"><div style="margin-bottom:12px"><div style="font-size:11px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Filtrar por fecha</div><div style="display:flex;flex-wrap:wrap;gap:6px">`;
  h+=`<button onclick="gruposFilterDate=null;renderPartidos()" style="background:${gruposFilterDate?'rgba(255,255,255,.1)':'var(--ok)'};color:${gruposFilterDate?'#FFFFFF':'#15321F'};border:none;border-radius:6px;padding:6px 10px;font-size:11px;font-weight:600;cursor:pointer;text-transform:uppercase;letter-spacing:.06em">Todas</button>`;
  fechas.forEach(f=>{
    const isActive=gruposFilterDate===f;
    h+=`<button onclick="gruposFilterDate='${f}';renderPartidos()" style="background:${isActive?'var(--ok)':'rgba(255,255,255,.1)'};color:${isActive?'#15321F':'#FFFFFF'};border:none;border-radius:6px;padding:6px 10px;font-size:11px;font-weight:600;cursor:pointer">${formatFechaDisplay(f)}</button>`;
  });
  h+=`</div></div>`;
  
  const fechasAMostrar=gruposFilterDate?[gruposFilterDate]:fechas;
  fechasAMostrar.forEach(d=>{
    if(!byDate[d]) return;
    h+=`<div class="dayhdr">${formatFechaDisplay(d)}</div><div class="daymatches">`;
    byDate[d].forEach(m=>{
      const r=RESULTS[m.id];
      const lv=(!r&&LIVE[m.id])?LIVE[m.id]:null;
      const sc=r||lv;
      const scls=r?'':(lv?'live':'pending');
      const estTxt=r?'Final':(lv?'<span class="livetag">● EN VIVO</span>':'Por jugar');
      const mst=r?'is-final':(lv?'is-live':'');
      const minHtml=lv&&MINUTOS[m.id]?`<div class="min-txt">${MINUTOS[m.id]}'</div>`:'';
      h+=`<div class="match ${mst}" id="m${m.id}"><div class="mrow" onclick="toggle(${m.id})"><div class="match-team t1"><span class="tname">${m.t1}</span>${flagImg(m.t1,'right')}</div><div class="score ${scls}">${sc?`${sc[0]} - ${sc[1]}${minHtml}`:'vs'}</div><div class="match-team">${flagImg(m.t2)}<span class="tname">${m.t2}</span></div></div><div class="minfo"><span class="gtag">${m.round||'R32'}</span><span>${estTxt} · toca para ver predicciones</span></div><div class="mexp" id="x${m.id}"></div></div>`;
    });
    h+=`</div>`;
  });
  h+=`</div>`;
  document.getElementById('vPartidos').innerHTML=h;
  if(OPEN_PREDICTIONS_ID){
    setTimeout(()=>{
      const openEl=document.getElementById('m'+OPEN_PREDICTIONS_ID);
      if(openEl) toggle(OPEN_PREDICTIONS_ID);
    },10);
  }
}

function toggle(id){
  const el=document.getElementById('m'+id);
  if(!el) return;
  el.classList.toggle('open');
  OPEN_PREDICTIONS_ID=el.classList.contains('open')?id:null;
  if(el.classList.contains('open')){
    const expEl=document.getElementById('x'+id);
    const preds=Object.entries(PREDICCIONES).filter(([name,p])=>p[id]);
    if(!preds.length){
      expEl.innerHTML='<div style="color:rgba(255,255,255,.5);text-align:center;padding:10px">Sin predicciones cargadas</div>';
      return;
    }
    let h='';
    preds.forEach(([name,p])=>{
      const pred=p[id];
      const result=SIMULATED_RESULTS[id]||RESULTS[id]||LIVE[id];
      const pts=result?calcPoints(pred,result):'-';
      const predTxt=pred?`${pred[0]} - ${pred[1]}`:'?';
      h+=`<div class="predrow"><div class="pname" style="font-size:12px">${name}</div><div class="predscore">${predTxt}</div><div class="predpts p${pts||'0'}">${pts}</div></div>`;
    });
    expEl.innerHTML=h;
  }
}

// ==========================================
// GOLEADORES
// ==========================================
async function loadGoleadores(){
  try{
    const base=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1`;
    const txt=await (await fetch(base+'&sheet=GOLEADORES')).text();
    if(txt.indexOf('"errors"')!==-1){ GOLEADORES=[]; return; }
    const js=JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')));
    const arr=[];
    (js.table.rows||[]).forEach(row=>{
      const c=row.c||[];
      const jugador=c[0]&&c[0].v!=null?String(c[0].v):'';
      const sel=c[1]&&c[1].v!=null?String(c[1].v):'';
      const goles=c[2]&&c[2].v!=null?Number(c[2].v):null;
      if(jugador && Number.isFinite(goles)) arr.push({jugador, sel, goles});
    });
    arr.sort((a,b)=>b.goles-a.goles||a.jugador.localeCompare(b.jugador));
    GOLEADORES=arr;
    renderGoleadores();
  }catch(e){ GOLEADORES=[]; }
}

function renderGoleadores(){
  const el=document.getElementById('vGoleadores'); if(!el) return;
  if(!GOLEADORES.length){
    el.innerHTML=`<div class="note" style="margin-top:8px">Aún no hay goleadores cargados. La tabla se llena sola desde la hoja a medida que se juegan los partidos.</div>`;
    return;
  }
  let h=`<div class="boardcard"><div class="boardhead" style="grid-template-columns:40px 1fr 1fr 50px"><div style="text-align:center">#</div><div>Jugador</div><div>Selección</div><div style="text-align:center">Goles</div></div>`;
  GOLEADORES.forEach(g=>{
    const rank=1+GOLEADORES.filter(x=>x.goles>g.goles).length;
    const posColor=rank===1?'color:var(--gold)':rank===2?'color:#C9CDD3':rank===3?'color:#CD7F32':'';
    h+=`<div class="scorer-row">
      <div class="pos" style="${posColor}">${rank}</div>
      <div class="scorer-name">${g.jugador}</div>
      <div class="scorer-team">${flagImg(g.sel)}${g.sel}</div>
      <div class="scorer-goals">${g.goles}</div>
    </div>`;
  });
  h+=`</div>`;
  el.innerHTML=h;
}

// ==========================================
// TARJETAS
// ==========================================
async function loadTarjetas(){
  try{
    const base=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1`;
    const txt=await (await fetch(base+'&sheet=TARJETAS')).text();
    if(txt.indexOf('"errors"')!==-1){ TARJETAS=[]; return; }
    const js=JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')));
    const arr=[];
    (js.table.rows||[]).forEach(row=>{
      const c=row.c||[];
      const jugador=c[0]&&c[0].v!=null?String(c[0].v):'';
      const sel=c[1]&&c[1].v!=null?String(c[1].v):'';
      const amarillas=c[2]&&c[2].v!=null?Number(c[2].v):0;
      const rojas=c[3]&&c[3].v!=null?Number(c[3].v):0;
      if(jugador && (amarillas+rojas>0)) arr.push({jugador, sel, amarillas, rojas});
    });
    arr.sort((a,b)=>(b.amarillas+b.rojas)-(a.amarillas+a.rojas));
    TARJETAS=arr;
    renderTarjetas();
  }catch(e){ TARJETAS=[]; }
}

function renderTarjetas(){
  const el=document.getElementById('vTarjetas'); if(!el) return;
  if(!TARJETAS.length){
    el.innerHTML=`<div class="note" style="margin-top:8px">Aún no hay tarjetas cargadas. La tabla se llena sola desde la hoja a medida que se juegan los partidos.</div>`;
    return;
  }
  let h=`<div style="padding:0 4px"><div class="boardcard"><div class="boardhead" style="grid-template-columns:1fr 1fr 70px 70px"><div>Jugador</div><div>País</div><div style="text-align:center">🟨</div><div style="text-align:center">🟥</div></div>`;
  TARJETAS.forEach(tj=>{
    const amarillasClass=tj.amarillas>0?'card-badge card-badge-yellow':'card-badge card-badge-yellow empty';
    const rojasClass=tj.rojas>0?'card-badge card-badge-red':'card-badge card-badge-red empty';
    h+=`<div class="card-row">
      <div class="card-name">${tj.jugador}</div>
      <div class="card-country">${flagImg(tj.sel)}${tj.sel}</div>
      <div class="${amarillasClass}">🟨 ${tj.amarillas||'0'}</div>
      <div class="${rojasClass}">🟥 ${tj.rojas||'0'}</div>
    </div>`;
  });
  h+=`</div></div>`;
  el.innerHTML=h;
}

// ==========================================
// INSTRUCCIONES
// ==========================================
function renderInstrucciones(){
  const el=document.getElementById('vInstrucciones'); if(!el) return;
  let h=`<div class="boardcard" style="padding:24px">
    <h2 style="font-family:'Saira Condensed';font-weight:800;font-size:24px;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);margin-bottom:20px">Instrucciones de la Quiniela — Fase 2</h2>
    <div style="color:#FFFFFF;line-height:1.8;font-size:14px">
      <h3 style="font-family:'Saira Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.08em;margin-top:20px;margin-bottom:10px;color:var(--gold)">📋 Especificaciones Generales</h3>
      <p><strong>FASE 2:</strong> Comprende todos los partidos de la ronda de knockouts desde Dieciseisavos hasta la Final.</p>
      <p><strong>PARTICIPANTES:</strong> 24 jugadores predecirán los resultados de cada ronda.</p>
      
      <h3 style="font-family:'Saira Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.08em;margin-top:20px;margin-bottom:10px;color:var(--gold)">🎯 Sistema de Puntuación</h3>
      <ul style="margin-left:20px;margin-top:10px">
        <li><strong>7 pts:</strong> Resultado exacto (ej: 2-1)</li>
        <li><strong>4 pts:</strong> Gol correcto + ganador correcto (ej: predijo 2-0, resultado 2-1)</li>
        <li><strong>3 pts:</strong> Ganador correcto sin goles exactos (ej: predijo 3-2, resultado 1-0)</li>
        <li><strong>1 pt:</strong> Acierta 1 gol de un equipo (ej: predijo 2-1, resultado 2-0)</li>
        <li><strong>0 pts:</strong> Fallo completamente</li>
      </ul>
      
      <h3 style="font-family:'Saira Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.08em;margin-top:20px;margin-bottom:10px;color:var(--gold)">⚖️ Desempate</h3>
      <p>Si dos o más participantes terminan con los mismos puntos totales, gana quien tenga más <strong>resultados exactos (7 pts)</strong>.</p>
      
      <h3 style="font-family:'Saira Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.08em;margin-top:20px;margin-bottom:10px;color:var(--gold)">⚽ Reglas Especiales</h3>
      <p><strong>Penales:</strong> Si un partido va a penales, se cuenta el resultado del tiempo regular. La tirada de penales determina el ganador pero NO afecta los goles finales.</p>
      <p><strong>En Vivo:</strong> Las posiciones se actualizan en tiempo real durante los partidos. El +N en rojo muestra puntos provisionales que aún pueden cambiar.</p>
    </div>
  </div>`;
  el.innerHTML=h;
}

// ==========================================
// STARTUP
// ==========================================
window.addEventListener('load',async ()=>{
  setNote('Cargando datos...','');
  await loadPartidos();
  await loadPredicciones();
  await loadResults(true);
  renderInstrucciones();
  startEnvivoRefresh();
});

setInterval(()=>loadResults(false),60*1000);
setInterval(updateEnvivo,20*1000);

</script>

</body>
</html>
