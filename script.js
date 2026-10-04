/* ===== СУРООЛОР: [суроо, туура жооп, ката, ката, ката] ===== */
const Q={
html:[
["HTML эмнени билдирет?","Hyper Text Markup Language","High Tech Modern Language","Hyper Tool Multi Language","Home Text Markup Language"],
["Барактын көрүнүүчү мазмуну кайсы тегдин ичине жазылат?","<body>","<head>","<title>","<meta>"],
["Браузер өтмөгүнүн аталышы кайсы тегде жазылат?","<title>","<head>","<h1>","<header>"],
["Эң чоң баш тег кайсы?","<h1>","<h6>","<head>","<heading>"],
["Абзац (параграф) кайсы тег менен жазылат?","<p>","<para>","<pg>","<text>"],
["Шилтеме түзүү үчүн кайсы тег колдонулат?","<a>","<link>","<href>","<url>"],
["Шилтеменин дарегин кайсы атрибут көрсөтөт?","href","src","link","url"],
["Сүрөт кошуу үчүн кайсы тег колдонулат?","<img>","<image>","<pic>","<src>"],
["Сүрөттүн файл жолун кайсы атрибут көрсөтөт?","src","href","file","path"],
["Номерсиз тизме кайсы тег менен түзүлөт?","<ul>","<ol>","<li>","<list>"],
["Номерленген тизме кайсы тег менен түзүлөт?","<ol>","<ul>","<dl>","<nl>"],
["Тизменин бир элементи кайсы тег менен жазылат?","<li>","<item>","<lt>","<l>"],
["Жалпы блок контейнер кайсы тег?","<div>","<br>","<hr>","<b>"],
["Форма түзүү үчүн кайсы тег колдонулат?","<form>","<data>","<frm>","<submit>"],
["Текст киргизүү талаасы кандай түзүлөт?","<input type=\"text\">","<textinput>","<text>","<input text>"],
["Басылуучу баскыч кайсы тег менен түзүлөт?","<button>","<click>","<btn>","<press>"],
["HTML барактын түпкү элементи кайсы?","<html>","<head>","<body>","<root>"],
["alt атрибуту эмне үчүн керек?","Сүрөттүн альтернативдик тексти үчүн","Сүрөттүн өлчөмү үчүн","Сүрөттүн чек арасы үчүн","Сүрөттүн шилтемеси үчүн"],
["Жаңы сапка өтүү үчүн кайсы тег колдонулат?","<br>","<lb>","<nl>","<ln>"],
["Семантикалык тег кайсы?","<header>","<div>","<span>","<b>"]],
css:[
["CSS эмнени билдирет?","Cascading Style Sheets","Creative Style System","Computer Style Sheets","Colorful Style Syntax"],
["box классын кандай тандайбыз?",".box","#box","*box","@box"],
["main id'син кандай тандайбыз?","#main",".main","&main","$main"],
["Текст түсүн өзгөртүүчү касиет кайсы?","color","text-color","font-color","fgcolor"],
["Фон түсүн өзгөртүүчү касиет кайсы?","background-color","bg","bgcolor","back-color"],
["Шрифт өлчөмүн кайсы касиет өзгөртөт?","font-size","text-size","size","font-style"],
["Шрифт түрүн кайсы касиет көрсөтөт?","font-family","font-name","text-font","typeface"],
["Чек арадан тышкы боштукту кайсы касиет берет?","margin","padding","border","outline"],
["Чек арадан ичиндеги боштукту кайсы касиет берет?","padding","margin","spacing","offset"],
["Чек ара сызыгын кайсы касиет түзөт?","border","frame","edge","line"],
["Элементтин туурасын кайсы касиет берет?","width","length","size-w","span"],
["Элементтин бийиктигин кайсы касиет берет?","height","vertical","tall","length-y"],
["Flexbox кантип иштетилет?","display: flex","flex: on","layout: flex","box: flex"],
["CSS grid кантип иштетилет?","display: grid","grid: enable","table: grid","layout: cols"],
["Кайсы мааниси position үчүн туура?","relative","middle","center","inside"],
["Чычкан үстүнө келгенде стиль берүүчү селектор?",":hover","::hover","@hover",".hover"],
["Media query эмне үчүн колдонулат?","Адаптивдүү дизайн үчүн","Маалымат базасы үчүн","Форма жөнөтүү үчүн","Медиа ойнотуу үчүн"],
["Media query кайсы эреже менен башталат?","@media","@query","@screen","@responsive"],
["Flex элементтерин горизонталдуу ортого коюу?","justify-content: center","text-flex: center","align-text: center","flex-center: true"],
["CSS'те комментарий кандай жазылат?","/* комментарий */","// комментарий","<!-- комментарий -->","# комментарий"]],
python:[
["Python деген эмне?","Программалоо тили","Маалымат базасы","Веб браузер","Операциялык система"],
["Экранга чыгаруучу функция кайсы?","print()","echo()","write()","display()"],
["Колдонуучудан маалымат алуучу функция кайсы?","input()","get()","read()","scan()"],
["x өзгөрмөсүнө 5 санын кантип беребиз?","x = 5","int x = 5","var x = 5","let x = 5"],
["Кайсысы сап (string)?","\"Салам\"","42","3.14","True"],
["Кайсысы бүтүн сан (integer)?","10","\"10\"","10.5","[10]"],
["Кайсысы бөлчөк сан (float)?","3.14","314","\"3.14\"","(3, 14)"],
["Кайсысы тизме (list)?","[1, 2, 3]","(1, 2, 3)","{1: 2}","<1, 2, 3>"],
["Кайсысы кортеж (tuple)?","(1, 2, 3)","[1, 2, 3]","{1: 2}","<1, 2, 3>"],
["Кайсысы сөздүк (dictionary)?","{\"a\": 1}","[\"a\", 1]","(\"a\", 1)","<a: 1>"],
["Шартты кантип баштайбыз?","if x > 5:","if (x > 5) then","if x > 5 {","when x > 5:"],
["\"else if\" Python'до кандай жазылат?","elif","elseif","else if","elsif"],
["Удаалаштык боюнча кайталоону кайсы сөз баштайт?","for","loop","foreach","repeat"],
["Шарт аткарылганча кайсы цикл иштейт?","while","until","when","during"],
["Функцияны аныктоочу сөз кайсы?","def","function","func","fun"],
["Функциядан маанини кайтаруучу сөз кайсы?","return","send","back","exit"],
["Python'до комментарий кандай жазылат?","# комментарий","// комментарий","/* комментарий */","<!-- комментарий -->"],
["2 ** 3 канча болот?","8","6","5","9"],
["len(\"abc\") эмнени кайтарат?","3","2","4","abc"],
["10 % 3 канча болот?","1","3","0","10"]]};
const QUOTES=["Код юмор сыяктуу. Аны түшүндүрүүгө туура келсе, анда ал начар.","Адегенде маселени чеч. Андан кийин кодду жаз.","Программалар адамдар окушу үчүн жазылышы керек, ал эми машина аны кокустан гана аткарат.","Код иштеп жатабы? Тийбе!","Ар бир күчтүү программист бир кезде башталгыч болгон.","Үйрөнүүнү токтотпо. Код жазууну токтотпо."];
const MOTIVE=["Бүгүнкү жыйынтык — эртеңки ийгиликтин башталышы.","Ката кетирүүдөн коркпо. Ар бир ката — жаңы нерсе үйрөнүүгө мүмкүнчүлүк.","Код жазууну улант. Сенин эң күчтүү версияң алдыда!","Үйрөнүүнү токтотпо. Код жазууну токтотпо."];
const NAMES={all:"БААРДЫК ТЕМА",html:"HTML",css:"CSS",python:"PYTHON"};

/* ===== КӨМӨКЧҮЛӨР ===== */
const $=s=>document.querySelector(s);
let S=null,tid=null,muted=false,actx=null;
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function buildQuestions(t){
  const pool=t==="all"?[...shuffle(Q.html).slice(0,7),...shuffle(Q.css).slice(0,7),...shuffle(Q.python).slice(0,6)]:Q[t];
  // туура жооп текст катары сакталат, ошондуктан аралаштыргандан кийин да туура
  return shuffle(pool).map(([q,c,...w])=>({q,c,o:shuffle([c,...w])}));
}
function beep(f,d){if(muted)return;try{actx=actx||new AudioContext();const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(actx.destination);o.start();o.stop(actx.currentTime+d)}catch(e){}}

/* ===== ЭКЗАМЕН ===== */
function startQuiz(t){
  resetQuiz();
  S={t,qs:buildQuestions(t),i:0,ok:0,bad:0,none:0,locked:false,done:false,t0:Date.now()};
  document.body.classList.add("exam-mode");
  $("#idle").hidden=true;$("#result").hidden=true;$("#quiz").hidden=false;
  loadQuestion();$("#exam").scrollIntoView();
}
function loadQuestion(){
  const q=S.qs[S.i];S.locked=false;
  $("#qText").textContent=q.q;$("#qCat").textContent=NAMES[S.t];
  const box=$("#opts");box.innerHTML="";
  q.o.forEach((txt,k)=>{const b=document.createElement("button");b.className="opt";b.textContent="ABCD"[k]+". "+txt;b.dataset.v=txt;b.onclick=()=>selectAnswer(b);box.appendChild(b)});
  $("#fb").textContent="";$("#nextBtn").disabled=true;
  $("#nextBtn").textContent=S.i===19?"ЖЫЙЫНТЫКТЫ КӨРҮҮ":"КИЙИНКИ СУРОО →";
  updateProgress();startTimer();
}
function revealCorrect(){document.querySelectorAll(".opt").forEach(b=>{b.disabled=true;if(b.dataset.v===S.qs[S.i].c){b.classList.add("ok");b.textContent+="  ✓"}})}
function selectAnswer(btn){
  if(!S||S.locked)return;
  S.locked=true;stopTimer();
  const right=btn.dataset.v===S.qs[S.i].c;revealCorrect();
  if(right){S.ok++;$("#fb").textContent="ТУУРА ЖООП! ✓";$("#fb").style.color="var(--g)";beep(660,.2)}
  else{S.bad++;btn.classList.add("bad");btn.textContent+="  ✗";$("#fb").textContent="ТУУРА ЭМЕС! ✗";$("#fb").style.color="var(--red)";beep(200,.3)}
  $("#nextBtn").disabled=false;updateProgress();
  const s=S,idx=S.i;setTimeout(()=>{if(S===s&&s.i===idx)nextQuestion()},1800);
}
function timeUp(){
  if(!S||S.locked)return;
  S.locked=true;S.none++;revealCorrect();
  $("#fb").textContent="УБАКЫТ БҮТТҮ ⏱ — жооп берилген жок";$("#fb").style.color="var(--org)";
  updateProgress();
  const s=S,idx=S.i;setTimeout(()=>{if(S===s&&s.i===idx)nextQuestion()},2000);
}
function nextQuestion(){
  if(!S||!S.locked)return;
  stopTimer();S.i++;
  if(S.i>=20)showResult();else loadQuestion();
}

/* ===== ТАЙМЕР (бир гана interval) ===== */
function startTimer(){
  stopTimer();S.left=60;drawTimer();
  tid=setInterval(()=>{S.left--;drawTimer();if(S.left<=10&&S.left>0)beep(880,.08);if(S.left<=0){stopTimer();timeUp()}},1000);
}
function stopTimer(){if(tid){clearInterval(tid);tid=null}}
function drawTimer(){
  const l=S.left,t=$("#timer");
  t.textContent="⏱ "+(l===60?"01:00":"00:"+String(l).padStart(2,"0"));
  t.className="timer"+(l<=10?" danger":l<=30?" warn":"");
  t.style.color=(l>10&&l<=15)?"var(--red)":"";
}
function updateProgress(){
  const done=S.i+(S.locked?1:0),pct=Math.round(done/20*100);
  $("#qCount").textContent=`СУРОО ${Math.min(S.i+1,20)} / 20 (${pct}%)`;
  $("#fill").style.width=pct+"%";$("#dev").style.left=Math.max(2,Math.min(96,pct))+"%";
  $("#sOk").textContent=S.ok;$("#sBad").textContent=S.bad;$("#sLeft").textContent=20-done;
}

/* ===== ЖЫЙЫНТЫК ===== */
function level(p){
  if(p>=90)return["SENIOR","Укмуш! Сенин билимиң абдан жогорку деңгээлде!"];
  if(p>=75)return["MIDDLE","Абдан жакшы! Сенин программалоо боюнча билимиң жакшы деңгээлде."];
  if(p>=50)return["JUNIOR","Молодец! Сен программисттик жолдун баштапкы деңгээлин ийгиликтүү басып өттүң."];
  return["Башталгыч","Кайра аракет кыл! Ар бир күчтүү программист бир кезде башталгыч болгон."];
}
function showResult(){
  if(S.done)return;S.done=true;stopTimer();
  const p=Math.round(S.ok/20*100),[lv,msg]=level(p),sec=Math.round((Date.now()-S.t0)/1000);
  const tm=String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0");
  document.body.classList.remove("exam-mode");
  $("#quiz").hidden=true;$("#result").hidden=false;
  $("#rScore").textContent=`${S.ok} / 20`;$("#rOk").textContent=S.ok;$("#rBad").textContent=S.bad;$("#rNone").textContent=S.none;$("#rTime").textContent=tm;
  $("#badge").textContent=lv;$("#badge").className="badge l-"+lv;$("#lvlMsg").textContent=msg;
  animateRing(p);typeText($("#motive"),MOTIVE[Math.floor(Math.random()*MOTIVE.length)]);
  saveHistory({date:new Date().toLocaleString(),cat:NAMES[S.t],score:S.ok,pct:p,ok:S.ok,bad:S.bad,none:S.none,lv});
  $("#exam").scrollIntoView();
}
let ringIv=null,typeIv=null;
function animateRing(p){clearInterval(ringIv);let n=0;const r=$("#ring");ringIv=setInterval(()=>{n=Math.min(p,n+2);r.style.setProperty("--p",n);$("#pct").textContent=n+"%";if(n>=p)clearInterval(ringIv)},25)}
function typeText(el,txt){clearInterval(typeIv);el.textContent="";let i=0;typeIv=setInterval(()=>{el.textContent+=txt[i++];if(i>=txt.length)clearInterval(typeIv)},40)}
function resetQuiz(){stopTimer();S=null;document.body.classList.remove("exam-mode")}
function exitQuiz(){if(confirm("Экзаменден чыгасызбы? Жыйынтык сакталбайт.")){resetQuiz();$("#quiz").hidden=true;$("#idle").hidden=false;$("#home").scrollIntoView()}}

/* ===== ТАРЫХ (localStorage) ===== */
const KEY="itadis_history";
const getHistory=()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return[]}};
function saveHistory(r){const h=getHistory();h.unshift(r);localStorage.setItem(KEY,JSON.stringify(h));loadHistory()}
function loadHistory(){
  const h=getHistory(),box=$("#histList");
  box.innerHTML=h.length?"":'<p class="center">Азырынча экзамен жок. Биринчи экзаменди тапшыр!</p>';
  h.forEach(r=>{const d=document.createElement("div");d.className="glass hcard";
    d.innerHTML=`<b>${r.cat}</b> — ${r.lv}<br>${r.score} / 20 · ${r.pct}%<br>${r.ok} туура · ${r.bad} ката · ${r.none} жооп берилген жок<br><small>${r.date}</small>`;box.appendChild(d)});
  updateStats(h);
}
function clearHistory(){if(confirm("Бардык тарыхты өчүрөсүзбү?")){localStorage.removeItem(KEY);loadHistory()}}
function countTo(el,v,suf=""){let n=0;const st=Math.max(1,Math.ceil(v/30));const iv=setInterval(()=>{n=Math.min(v,n+st);el.textContent=n+suf;if(n>=v)clearInterval(iv)},30)}
function updateStats(h){
  const n=h.length,best=n?Math.max(...h.map(r=>r.score)):0,avg=n?Math.round(h.reduce((a,r)=>a+r.pct,0)/n):0,tot=h.reduce((a,r)=>a+r.ok,0);
  countTo($("#tExams"),n);countTo($("#tAvg"),avg,"%");countTo($("#tOk"),tot);
  $("#tBest").textContent=best+" / 20";$("#avgBar").style.width=avg+"%";
}

/* ===== ТЕМА, МЕНЮ, ЭФФЕКТТЕР ===== */
function toggleTheme(){const d=document.documentElement,t=d.dataset.theme==="dark"?"light":"dark";d.dataset.theme=t;localStorage.setItem("itadis_theme",t);$("#themeBtn").textContent=t==="dark"?"🌙":"☀️"}
function initQuotes(){let i=0;const el=$("#quote"),show=()=>{el.textContent="“"+QUOTES[i]+"”";el.classList.remove("fade");void el.offsetWidth;el.classList.add("fade");i=(i+1)%QUOTES.length};show();setInterval(show,5000)}
function initTerminal(){const L="> initializing exam_system...\n> loading questions...\n> checking programmer skills...\n> system ready. ";let i=0;const el=$("#termText"),iv=setInterval(()=>{el.textContent+=L[i++];if(i>=L.length)clearInterval(iv)},50)}
function initBackground(){const sy=["< >","{ }","( )","/*","//","#","$","_"],bg=$("#bg");
  for(let i=0;i<24;i++){const s=document.createElement("span");s.textContent=sy[i%sy.length];s.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*20}px;opacity:${.1+Math.random()*.2};animation-duration:${14+Math.random()*18}s;animation-delay:-${Math.random()*20}s`;bg.appendChild(s)}}

/* ===== ИШКЕ КИРГИЗҮҮ ===== */
document.addEventListener("DOMContentLoaded",()=>{
  const th=localStorage.getItem("itadis_theme")||"dark";
  document.documentElement.dataset.theme=th;$("#themeBtn").textContent=th==="dark"?"🌙":"☀️";
  $("#themeBtn").onclick=toggleTheme;
  $("#burger").onclick=()=>{const o=$("#menu").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
  document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("open"));
  document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>startQuiz(b.dataset.topic));
  $("#nextBtn").onclick=nextQuestion;$("#exitBtn").onclick=exitQuiz;
  let last="all";document.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>last=b.dataset.topic));
  $("#retake").onclick=()=>startQuiz(last);
  $("#clearBtn").onclick=clearHistory;
  $("#muteBtn").onclick=()=>{muted=!muted;$("#muteBtn").textContent=muted?"🔇":"🔊"};
  initQuotes();initTerminal();initBackground();loadHistory();
});
