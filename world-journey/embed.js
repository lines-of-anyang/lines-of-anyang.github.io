(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  const session = params.get('session') || '';
  const embedded = window.parent !== window && params.get('embed') === '1' && /^[A-Za-z0-9_-]{8,128}$/.test(session);
  if (!embedded) return;
  document.documentElement.dataset.embedded = 'true';
  const channel = 'anyang-world-journey';
  const origin = location.origin;
  const config = JSON.parse(document.getElementById('embed-runtime').textContent);
  const copy=key=>config.copy['site.05.embed.'+key];
  const sceneIds = config.sceneEntries.map(scene=>scene.id);
  const readIds = config.readIds;
  const nativeMatchMedia = window.matchMedia.bind(window);
  const media = nativeMatchMedia('(prefers-reduced-motion: reduce)');
  let forcedLowMotion = params.get('lowMotion') === '1';
  let restoring = false;
  let initialized = false;
  let lastSerialized = '';
  let commandEpoch = 0;
  const motion = new EventTarget();
  Object.defineProperties(motion,{matches:{get:()=>forcedLowMotion || media.matches},media:{value:media.media}});
  motion.onchange = null;
  motion.addListener = callback => motion.addEventListener('change',callback);
  motion.removeListener = callback => motion.removeEventListener('change',callback);
  function notifyMotion() {
    const event = new Event('change');
    Object.defineProperties(event,{matches:{value:motion.matches},media:{value:motion.media}});
    motion.dispatchEvent(event);if(typeof motion.onchange==='function')motion.onchange(event);
  }
  media.addEventListener('change',notifyMotion);
  window.matchMedia = query => /prefers-reduced-motion\s*:\s*reduce/.test(query) ? motion : nativeMatchMedia(query);
  const send = (type,fields={}) => window.parent.postMessage({channel,version:1,session,type,...fields},origin);
  function snapshot() {
    const raw = window.journey?.state();
    if(!raw?.ready)return null;
    return {timeline:raw.timeline,duration:raw.duration,mode:raw.mode,speed:raw.speed,
      read:raw.read.filter(id=>readIds.includes(id)),visited:raw.visited.filter(id=>sceneIds.includes(id)),
      playing:raw.playing,loading:raw.loading,observation:raw.observation,scene:raw.scene,
      lowMotion:raw.reducedMotion,pausedAll:raw.pausedAll,restoring};
  }
  function publish(force=false) {
    const state=snapshot();if(!state||restoring||!initialized)return;
    const serialized=JSON.stringify(state);
    if(force||serialized!==lastSerialized){lastSerialized=serialized;send('state',{state});}
  }
  function pause() {
    const j=window.journey;if(!j?.ready)return;
    j.closeObservation();j.pause();j.pauseAll(true);publish(true);
  }
  function focusCanvas(){window.journey?.canvas.focus({preventScroll:true});}
  async function restore(value) {
    const j=window.journey;if(!j?.ready||!value||typeof value!=='object')return;
    const timeline=Number(value.timeline);
    if(!Number.isFinite(timeline)||timeline<0||timeline>j.duration)return;
    const epoch=++commandEpoch;
    restoring=true;document.documentElement.dataset.restoring='true';
    j.closeObservation();j.pause();j.pauseAll(true);j.replay();j.pause();j.pauseAll(true);
    j.setMode(value.mode==='auto'?'auto':'manual');j.pause();
    j.setSpeed(Number.isFinite(value.speed)?value.speed:1);
    const visited=Array.isArray(value.visited)?value.visited.filter(id=>sceneIds.includes(id)):[];
    // Public journey API reconstructs its own Sets; no access to private renderer state.
    for(const scene of visited){
      if(epoch!==commandEpoch)return;
      await j.seekAsync(config.sceneEntries.find(entry=>entry.id===scene).timeline);
    }
    if(epoch!==commandEpoch)return;
    await j.seekAsync(timeline);
    if(epoch!==commandEpoch)return;
    for(const id of Array.isArray(value.read)?value.read:[])if(readIds.includes(id)){j.openObservation(id);j.closeObservation();}
    j.pause();j.pauseAll(false);restoring=false;initialized=true;document.documentElement.dataset.embedReady='true';delete document.documentElement.dataset.restoring;
    publish(true);focusCanvas();
  }
  let translation={},frameLocale='zh-CN';const originals=new WeakMap(),originalAttrs=new WeakMap();let framePatterns=[];
  function frameText(text){
    if(frameLocale==='zh-CN')return text;
    const key=text.trim();
    if(Object.hasOwn(translation,key))return text.replace(key,()=>translation[key]);
    const numbered=key.match(/^(\d{2})\s+(.+)$/);
    if(numbered)return numbered[1]+' '+frameText(numbered[2]);
    for(const p of framePatterns){const m=key.match(p.regex);if(m)return p.target.replace(/\{(\w+)\}/g,(all,k)=>{const i=p.names.indexOf(k);return i<0?all:(translation[m[i+1]]??m[i+1]);});}
    if(key.includes(' · '))return key.split(' · ').map(frameText).join(' · ');
    return text;
  }
  function localizeFrame(){if(!document.body)return;const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){if(['SCRIPT','STYLE'].includes(node.parentElement?.tagName))continue;const prior=originals.get(node);if(!prior||node.nodeValue!==prior.last)originals.set(node,{source:node.nodeValue,last:node.nodeValue});const record=originals.get(node),next=frameText(record.source);if(node.nodeValue!==next)node.nodeValue=next;record.last=next;}for(const el of document.querySelectorAll('[aria-label],[aria-valuetext],[title],[alt],[placeholder]')){let attrs=originalAttrs.get(el);if(!attrs){attrs={};originalAttrs.set(el,attrs);}for(const key of ['aria-label','aria-valuetext','title','alt','placeholder']){if(!el.hasAttribute(key))continue;const prior=attrs[key],now=el.getAttribute(key);if(!prior||now!==prior.last)attrs[key]={source:now,last:now};const rec=attrs[key],next=frameText(rec.source);if(now!==next)el.setAttribute(key,next);rec.last=next;}}}
  const fillText=CanvasRenderingContext2D.prototype.fillText;CanvasRenderingContext2D.prototype.fillText=function(text,...args){return fillText.call(this,frameText(String(text)),...args);};
  document.addEventListener('DOMContentLoaded',()=>{new MutationObserver(localizeFrame).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-label','aria-valuetext','title','alt','placeholder']});localizeFrame();});
  window.addEventListener('message',event=>{
    const d=event.data;
    if(event.source!==window.parent||event.origin!==origin||!d||d.channel!==channel||d.version!==1||d.session!==session||d.type!=='control')return;
    if(d.action==='locale'&&['en','zh-CN','fr','ar','ja'].includes(d.locale)){frameLocale=d.locale;translation=d.dictionary&&typeof d.dictionary==='object'?d.dictionary:{};framePatterns=Object.entries(translation).filter(([key])=>/\{\w+\}/.test(key)).map(([key,target])=>{const names=[];const regex=key.split(/(\{\w+\})/).map(p=>/^\{\w+\}$/.test(p)?(names.push(p.slice(1,-1)),'(.+?)'):p.replace(/[.*+?^$()|[\]\\]/g,'\\$&')).join('');return {regex:new RegExp('^'+regex+'$'),names,target,specificity:key.replace(/\{\w+\}/g,'').length};}).sort((a,b)=>b.specificity-a.specificity);document.documentElement.lang=frameLocale;document.documentElement.dir=frameLocale==='ar'?'rtl':'ltr';document.documentElement.style.setProperty('--journey-restoring-copy',JSON.stringify(frameText(copy('restoring'))));localizeFrame();return;}
    const j=window.journey;if(!j?.ready)return;
    if(d.action==='pause'){commandEpoch++;restoring=false;delete document.documentElement.dataset.restoring;pause();}
    else if(d.action==='viewport'&&typeof d.active==='boolean'){j.pauseAll(!d.active);publish(true);}
    else if(d.action==='resume'){j.pause();j.pauseAll(false);publish(true);focusCanvas();}
    else if(d.action==='restore')restore(d.state).catch(error=>{restoring=false;delete document.documentElement.dataset.restoring;pause();send('error',{message:error.message});});
    else if(d.action==='restart'){commandEpoch++;restoring=false;delete document.documentElement.dataset.restoring;j.replay();j.pause();j.pauseAll(false);publish(true);focusCanvas();}
    else if(d.action==='low-motion'&&typeof d.value==='boolean'){forcedLowMotion=d.value;notifyMotion();publish(true);}
    else if(d.action==='snapshot')publish(true);
  });
  window.addEventListener('error',event=>send('error',{message:String(event.message||'画卷运行异常').slice(0,200)}));
  window.addEventListener('unhandledrejection',event=>send('error',{message:String(event.reason?.message||'画卷暂时未能载入').slice(0,200)}));
  function configure() {
    // CSS layout changes only: renderer keeps its original world, anchor and hit coordinates.
    let layoutFrame=0;
    const reportLayout=()=>{cancelAnimationFrame(layoutFrame);layoutFrame=requestAnimationFrame(()=>send('layout',{height:document.querySelector('.journey').getBoundingClientRect().height}));};
    new ResizeObserver(reportLayout).observe(document.querySelector('.journey'));
    const fullscreen=()=>{document.documentElement.dataset.fullscreen=String(Boolean(document.fullscreenElement||window.parent.document.fullscreenElement));reportLayout();};
    window.parent.document.addEventListener('fullscreenchange',fullscreen);
    window.addEventListener('pagehide',()=>window.parent.document.removeEventListener('fullscreenchange',fullscreen),{once:true});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!document.querySelector('dialog[open]')&&window.parent.document.fullscreenElement?.contains(window.frameElement))void window.parent.document.exitFullscreen().catch(()=>{});});
    const dialog=document.getElementById('observation');
    const placeReading=()=>{if(!dialog.open)return;const rect=window.frameElement.getBoundingClientRect(),scale=rect.height/window.frameElement.clientHeight||1;const head=window.parent.document.fullscreenElement?8:84;dialog.style.marginTop=Math.max(8,(head-rect.top)/scale)+'px';dialog.style.maxHeight=Math.max(180,Math.min(innerHeight-24,(window.parent.innerHeight-head-16)/scale))+'px';};
    new MutationObserver(placeReading).observe(dialog,{attributes:true,attributeFilter:['open']});
    window.parent.addEventListener('scroll',placeReading,{passive:true});window.parent.addEventListener('resize',placeReading);
    window.addEventListener('pagehide',()=>{window.parent.removeEventListener('scroll',placeReading);window.parent.removeEventListener('resize',placeReading);},{once:true});
    fullscreen();reportLayout();
    for(const id of ['mode-manual','mode-auto','forward','assist','play','pause-all','replay','resources-retry','continue','end-replay','stage-message']){const el=document.getElementById(id);if(el)el.textContent=copy(id);}
    for(const [selector,key]of [['label[for="speed"]','speed-label'],['#speed option[value="0.5"]','speed-05'],['#speed option[value="1"]','speed-1'],['#speed option[value="1.5"]','speed-15'],['#arrival>span','arrival-label'],['#sources>p','source-note']]){const el=document.querySelector(selector);if(el)el.textContent=copy(key);}
    for(const [selector,key]of [['#film','canvas-aria'],['#speed','speed-aria'],['.mode-switch','mode-aria'],['#scene-nav','scene-aria'],['#close-observation','close-aria']])document.querySelector(selector)?.setAttribute('aria-label',copy(key));
    document.querySelector('#observation-more')?.parentElement?.querySelector('summary')?.replaceChildren(document.createTextNode(copy('more-summary')));
    document.querySelectorAll('#observation-sources,#sources').forEach(el=>{const summary=(el.id==='sources'?el:el.parentElement)?.querySelector('summary');if(summary)summary.textContent=copy('source-summary');});
    document.documentElement.style.setProperty('--journey-restoring-copy',JSON.stringify(copy('restoring')));
    const entry=document.getElementById('return-anyang');
    if(entry){entry.textContent=copy('return-anyang');entry.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();pause();send('archive',{state:snapshot()});},true);}
    const title=document.querySelector('#arrival>p');if(title)title.textContent=copy('arrival-title');
    const note=document.getElementById('arrival-note');if(note)note.remove();
  }
  document.addEventListener('DOMContentLoaded',configure,{once:true});
  window.addEventListener('journeyready',()=>{window.journey.pause();send('ready',{state:snapshot()});focusCanvas();},{once:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
  window.addEventListener('pagehide',pause,{once:true});
  const timer=setInterval(()=>publish(),250);
  window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
})();
