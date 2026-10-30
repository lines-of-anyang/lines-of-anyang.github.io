const __journeyCopy={"site.05.world-chapter.001":"放大：{p0}","site.05.world-chapter.002":"展开图像 ↗","site.05.world-chapter.003":"图像放大 ","site.05.world-chapter.004":"图像放大","site.05.world-chapter.005":"恢复全图","site.05.world-chapter.006":"放大后拖动 · 双击复位","site.05.world-chapter.007":"图像查看区域","site.05.world-chapter.009":"资料出处与图像署名","site.05.world-chapter.011":"{p0}图像","site.05.world-chapter.012":"打开卷宗，继续阅读","site.05.world-chapter.013":"将不同的年代并列，比较各自留下的材料。","site.05.world-chapter.014":"公元前1700年","site.05.world-chapter.015":"公元前1300年","site.05.world-chapter.016":"公元前1000年","site.05.world-chapter.017":"时间尺聚焦重叠区间，完整时期见各条展签。","site.05.world-chapter.018":"怎样阅读比较展板","site.05.world-chapter.019":"S07 / 从研究室打开世界档案","site.05.world-chapter.020":"七幕旅程最后一幕的现代研究室插画","site.05.world-chapter.021":"国际传播档案主题","site.05.world-chapter.022":"画卷暂时未能展开。可以重试，也可以先阅读研究档案。","site.05.world-chapter.023":"画卷载入较慢。可以重试，也可以先阅读研究档案。","site.05.world-chapter.025":"05 一线连世界","site.05.world-chapter.026":"05 / WORLD, IN PARALLEL","site.05.world-chapter.027":"已走过七个文明世界","site.05.world-chapter.028":"从安阳出发","site.05.world-chapter.029":"与不同世界并行","site.05.world-chapter.030":"回到今天的研究","site.05.world-chapter.031":"走过七个文明世界","site.05.world-chapter.032":"按住前进，松开停步；也可以自动观看。","site.05.world-chapter.033":"七个文明世界：A01旅者的自主探索与自动观看","site.05.world-chapter.034":"旅程已停在原地。返回画面后，可继续前进。","site.05.world-chapter.035":"你的行走位置已保留。","site.05.world-chapter.036":"展开画卷，继续探索 →","site.05.world-chapter.037":"正在展开画卷……","site.05.world-chapter.038":"重试展开画卷","site.05.world-chapter.039":"进入研究档案","site.05.world-chapter.040":"行走位置与阅读记录保存在本机；退出旅程后，画卷停止运行。","site.05.world-chapter.041":"← 回看器物与人","site.05.player.001":"正在展开下一段画卷…","site.05.player.002":"这一段画卷未能载入。请重试。","site.05.player.003":"再读 · {p0}","site.05.player.004":"停止前进","site.05.player.005":"持续前进","site.05.player.006":"暂停行走","site.05.player.007":"重新观看","site.05.player.008":"开始观看","site.05.player.009":"继续全部动画","site.05.player.010":"暂停全部动画","site.05.player.011":"{p0} / {p1}秒","site.05.player.012":"已减少环境动态。按住前进，或选择自动观看。","site.05.player.013":"按住空格、右方向键或“前进”按钮行走，松开停下。","site.05.player.014":"跟随旅者，走过七幅文明画卷。可随时暂停或切换自主探索。","site.05.player.015":"旅程结束，欢迎从下方的安阳入口回看甲骨与青铜。","site.05.player.016":"画卷暂时未能载入。请检查连接后重试。","site.05.embed.mode-manual":"自主探索","site.05.embed.mode-auto":"自动观看","site.05.embed.forward":"按住前进 →","site.05.embed.assist":"持续前进","site.05.embed.play":"开始观看","site.05.embed.pause-all":"暂停全部动画","site.05.embed.replay":"重新开始","site.05.embed.resources-retry":"重试载入","site.05.embed.continue":"合上记录，继续探索","site.05.embed.end-replay":"重新启程","site.05.embed.return-anyang":"进入研究档案","site.05.embed.stage-message":"正在展开画卷…","site.05.embed.speed-05":"慢速 0.5×","site.05.embed.speed-1":"正常 1×","site.05.embed.speed-15":"快速 1.5×","site.05.embed.speed-label":"速度","site.05.embed.speed-aria":"播放速度","site.05.embed.canvas-aria":"七幕文明穿越画卷","site.05.embed.mode-aria":"观看方式","site.05.embed.scene-aria":"回看已经经过的文明","site.05.embed.close-aria":"关闭并继续探索","site.05.embed.arrival-title":"从七个世界，走进今天的研究档案","site.05.embed.arrival-label":"现代 · 世界的研究与传播","site.05.embed.more-summary":"继续阅读","site.05.embed.source-summary":"来源与说明","site.05.embed.restoring":"正在回到上次的画卷…","site.05.embed.source-note":"从晚商安阳出发，比较不同地区部分同时期的文化，再回到今天的研究与传播。","site.05.embed.error":"画卷暂时未能载入"};function v(id, values = {}) {
  return String(__journeyCopy[id] ?? "").replace(/\{(\w+)\}/g, (all, key) => Object.hasOwn(values, key) ? String(values[key]) : all);
};
const $ = id => document.getElementById(id);
const canvas = $('film');
const context = canvas.getContext('2d', { alpha: false });
const ui = Object.fromEntries(['stage','stage-message','mode-manual','mode-auto','manual-controls','auto-controls','forward','assist','play','pause-all','replay','speed','seek','time','previous-frame','next-frame','playback-note','world-name','world-date','scene-nav','observe','observe-label','arrival','observation','observation-title','observation-subtitle','observation-body','observation-more','observation-object','observation-sources','observation-notes','close-observation','continue','source-links','status','resources-retry','return-anyang','arrival-note'].map(id => [id, $(id)]));
const images = new Map();
const imagePromises = new Map();
const loadedScenes = new Set();
const scenePromises = new Map();
const visited = new Set();
const assetBase = new URL('./assets/', import.meta.url);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const diagnostics = { errors: [], renders: 0, frameIntervals: [] };
const inputs = new Set();
const encountered = new Set();
const read = new Set();
const waterBuffers = new Map();
let manifest, metadata, observations = [];
let ready = false, timeline = 0, envTime = 0, mode = 'manual', autoPlaying = false, assist = false, pausedAll = false, speed = 1;
let lastTick = 0, latestState, raf = 0, stoppedAt = -1, observation = null, nearest = null, paintControlsAt = -1;
let stepping = false, previousMoving = false;
let sequence = [], cycleWeight = 0;
let loading = false, loadEpoch = 0, pendingTime = null, lastSceneId = null;
const language = new URLSearchParams(location.search).get('lang') || 'zh-CN';
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const num = (v, fallback) => Number.isFinite(Number(v)) ? Number(v) : fallback;
const assetURL = path => new URL(path, assetBase).href;
const duration = () => num(manifest?.duration, 12);
const smooth = v => { const a = clamp(v, 0, 1); return a*a*(3-2*a); };
function isMoving() { return ready && !loading && !pausedAll && !observation && timeline < duration() && (mode === 'auto' ? autoPlaying : assist || inputs.size > 0); }
function clearInputs() { inputs.clear(); assist = false; ui.forward.classList.remove('is-held'); }
async function json(url) { const response = await fetch(url); if (!response.ok) throw Error(`资料读取失败 (${response.status})`); return response.json(); }
async function image(path) {
  if (images.has(path)) return images.get(path);
  if (imagePromises.has(path)) return imagePromises.get(path);
  const pending=(async()=>{const img=new Image();img.decoding='async';img.src=assetURL(path);await img.decode();images.set(path,img);return img;})();
  imagePromises.set(path,pending);
  try{return await pending;}finally{imagePromises.delete(path);}
}
const sceneNames={S01:'殷墟安阳',S02:'两河流域',S03:'古埃及',S04:'迈锡尼',S05:'早期吠陀文化',S06:'早期奥尔梅克文化',S07:'现代世界研究'};
function sceneAt(rootX){return manifest.scenes.find(s=>rootX>=s.x&&rootX<s.x+s.width)??(rootX<manifest.scenes[0].x?manifest.scenes[0]:manifest.scenes.at(-1));}
function localized(item){const texts=item.translations??item.locales;const text=texts?.[language]??texts?.['zh-CN'];return text?{...item,...text}:item;}
function assetsForScene(scene){
  const intersects=l=>num(l.x,0)<scene.x+scene.width&&num(l.x,0)+num(l.width,1672)>scene.x;
  return [...new Set([scene.file,...[...bridges(),...(manifest.layers??[]),...environments()].filter(intersects).flatMap(l=>[l.file,l.maskFile])].filter(Boolean))];
}
function neededScenes(seconds,includeNext=false){
  const state=computeState(seconds),left=state.cameraX,right=left+manifest.canvas[0];
  const required=manifest.scenes.filter(s=>s.x<right+1&&s.x+s.width>left-1);
  if(includeNext){const current=sceneAt(state.rootX),i=manifest.scenes.indexOf(current);const next=manifest.scenes[i+1];if(next&&!required.includes(next))required.push(next);}
  return required;
}
function sceneReady(scene){return loadedScenes.has(scene.id)&&assetsForScene(scene).every(file=>images.has(file));}
async function loadScenes(scenes){
  await Promise.all(scenes.map(scene=>{
    if(sceneReady(scene))return Promise.resolve();
    if(scenePromises.has(scene.id))return scenePromises.get(scene.id);
    const p=Promise.all(assetsForScene(scene).map(image)).then(()=>{loadedScenes.add(scene.id);}).finally(()=>scenePromises.delete(scene.id));
    scenePromises.set(scene.id,p);return p;
  }));
}
function trimCache(){
  const current=manifest.scenes.indexOf(sceneAt(latestState?.rootX??manifest.character.startX));
  const keepScenes=manifest.scenes.filter((s,i)=>Math.abs(i-current)<=2);
  const keep=new Set([...manifest.character.frames,manifest.character.idle?.file,...keepScenes.flatMap(assetsForScene)]);
  for(const file of images.keys())if(!keep.has(file)&&!imagePromises.has(file))images.delete(file);
  for(const scene of manifest.scenes)if(!keepScenes.includes(scene))loadedScenes.delete(scene.id);
  for(const [key]of waterBuffers)if(!environments().some(l=>keep.has(l.file)&&(l.id??l.file)===key))waterBuffers.delete(key);
}
function updateScene(){
  const scene=sceneAt(latestState?.rootX??manifest.character.startX);visited.add(scene.id);
  if(lastSceneId!==scene.id){lastSceneId=scene.id;trimCache();loadScenes(neededScenes(timeline,true)).catch(()=>{});}
  for(const button of ui['scene-nav'].querySelectorAll('button')){button.disabled=!visited.has(button.dataset.scene)||loading;button.setAttribute('aria-current',button.dataset.scene===scene.id?'step':'false');}
}
async function requestTime(seconds,applySeek=false){
  const requested=clamp(num(seconds,0),0,duration()),epoch=++loadEpoch;
  pendingTime=requested;loading=true;ui.stage.setAttribute('aria-busy','true');ui['stage-message'].textContent=v("site.05.player.001");ui['stage-message'].classList.remove('error');ui['stage-message'].classList.add('is-loading');ui['stage-message'].hidden=false;ui['resources-retry'].hidden=true;
  updateControls(true);
  try{
    await loadScenes(neededScenes(requested,true));
    if(epoch!==loadEpoch)return latestState;
    loading=false;pendingTime=null;ui.stage.setAttribute('aria-busy','false');ui['stage-message'].hidden=true;
    if(applySeek)timeline=requested;
    lastTick=performance.now();const state=paint();updateScene();updateObservation(state);updateControls(true);return state;
  }catch(error){
    if(epoch!==loadEpoch)return latestState;
    diagnostics.errors.push(error.message);clearInputs();autoPlaying=false;
    ui['stage-message'].textContent=v("site.05.player.002");ui['stage-message'].classList.add('error');ui['resources-retry'].hidden=false;status('画卷载入暂停，请重试。');return null;
  }
}
function configureGait() {
  let boundary = 0;
  sequence = metadata.frames.map((frame, i) => {
    const weight = Math.max(1, num(frame.durationMs, num(metadata.frameDurationMs, 80)));
    const item = { frame, i, weight, boundary };
    boundary += weight;
    return item;
  });
  cycleWeight = boundary;
}
function gaitAt(time) {
  const scale = num(manifest.character.scale, .42);
  const cycleDistance = num(manifest.character.motion?.cycleDistance, num(metadata.rootMotion?.cycleSpritePx, 360)) * scale;
  const travel = num(manifest.character.travelDistance, 2835) * time / duration();
  const cycles = travel / cycleDistance;
  const position = (cycles % 1) * cycleWeight;
  let item = sequence[sequence.length - 1];
  for (const candidate of sequence) {
    if (position < candidate.boundary + candidate.weight) { item = candidate; break; }
  }
  return { pose: item.i, cycles, cycleDistance, position, item };
}
function pathHeight(scene,rootX){
  const points=scene.path??[[0,num(manifest.groundY,819)],[scene.width,num(manifest.groundY,819)]];
  const x=clamp(rootX-scene.x,0,scene.width);
  for(let i=1;i<points.length;i++){if(x<=points[i][0]){const a=points[i-1],b=points[i];return a[1]+(b[1]-a[1])*smooth((x-a[0])/(b[0]-a[0]));}}
  return points.at(-1)[1];
}
function groundAt(rootX){
  const s=sceneAt(rootX);let y=pathHeight(s,rootX);
  for(let i=1;i<manifest.scenes.length;i++){const next=manifest.scenes[i],prev=manifest.scenes[i-1],d=rootX-next.x;if(Math.abs(d)<190){const a=pathHeight(prev,next.x-190),b=pathHeight(next,next.x+190);y=a+(b-a)*smooth((d+190)/380);break;}}
  return y;
}
function computeState(seconds) {
  const time = clamp(seconds, 0, duration());
  const scale = num(manifest.character.scale, .42);
  const start = num(manifest.character.startX, 240);
  const distance = num(manifest.character.travelDistance, 2835);
  const rootX = start + time / duration() * distance;
  const gait = gaitAt(time);
  const cycleProgress = gait.cycles;
  const pose = gait.pose;
  const grounded = metadata.frames[pose];
  const worldWidth = Math.max(...manifest.scenes.map(scene => scene.x + scene.width));
  const maxCamera = Math.max(0, worldWidth - manifest.canvas[0]);
  const travel = rootX - num(manifest.camera?.followAt, 680);
  const feather = num(manifest.camera?.feather, 220);
  const ramp = v => v <= 0 ? 0 : v < feather ? v*v/(2*feather) : v-feather/2;
  let cameraX = clamp(ramp(travel) - ramp(travel-maxCamera), 0, maxCamera);
  // A short compositional ease at the material boundary stays deterministic
  // in both modes; stopping travel also stops the camera immediately.
  const boundaries=manifest.camera?.boundaries??manifest.scenes.slice(1).map(s=>({x:s.x,width:760,offset:num(manifest.camera?.boundaryOffset,27)}));
  for(const boundary of boundaries){
    const width=num(boundary.width,760),startAt=num(boundary.start,num(boundary.x,0)-422);
    cameraX += Math.sin(smooth((rootX-startAt)/width)*Math.PI)*num(boundary.offset,27);
  }
  cameraX = clamp(cameraX, 0, maxCamera);
  const moving = isMoving();
  const settled = !moving && !stepping && (stoppedAt < 0 || performance.now()-stoppedAt >= 85);
  const idleAsset = settled && manifest.character.idle?.file && images.has(manifest.character.idle.file);
  const contact = idleAsset ? manifest.character.idle.contactInFrame ?? metadata.anchor : grounded.contactInFrame;
  const groundY = groundAt(rootX);
  return { time, timeline: time, envTime, pose, frame: pose+1, cycle: Math.floor(cycleProgress), phaseProgress: cycleProgress%1,
    rootX, groundY, cameraX, scale, screenX: rootX-cameraX,
    spriteLeft: rootX-metadata.anchor[0]*scale, spriteTop: groundY-contact[1]*scale,
    contactX: rootX+(contact[0]-metadata.anchor[0])*scale, contactY: groundY,
    supportFoot: idleAsset ? 'both' : grounded.supportFoot, phase: idleAsset ? 'stand' : grounded.phase,
    idle: Boolean(idleAsset), moving, sprite: idleAsset ? manifest.character.idle.file : manifest.character.frames[pose],
  };
}
function dimensions(layer, img) { return [num(layer.width,img.naturalWidth),num(layer.height,img.naturalHeight)]; }
function layerPosition(layer,state) {
  const parallax = num(layer.parallax,0);
  const reference = num(layer.parallaxOrigin, manifest.canvas[0]/2);
  return [num(layer.x,0)-state.cameraX-(state.cameraX-reference)*parallax, num(layer.y,0)];
}
function drawLayer(layer,state) {
  if (!layer?.file) return;
  const img = images.get(layer.file); if (!img) return;
  const [w,h] = dimensions(layer,img), [x,y] = layerPosition(layer,state);
  if (x+w < -50 || x > manifest.canvas[0]+50) return;
  context.save(); context.globalAlpha = num(layer.opacity,1)*(layer.revealAfter===undefined?1:smooth((state.rootX-layer.revealAfter)/180));
  context.drawImage(img,x,y,w,h); context.restore();
}
// Local junction plates have depth bands and matching foreground silhouettes.
// They move with journey position, so release/reading never drifts the crossing.
function drawJunction(layer,state,front=false) {
  const img=images.get(layer.file),j=layer.junction;if(!img||!j)return;
  const [w,h]=dimensions(layer,img),[x,y]=layerPosition(layer,state);
  if(x+w<0||x>manifest.canvas[0])return;
  const progress=smooth((state.rootX-j.boundary+420)/840);
  const movement=reducedMotion.matches?0:Math.sin(progress*Math.PI*2);
  const offsetAt=v=>{const bands=j.bands;for(let i=1;i<bands.length;i++){if(v<=bands[i][0]){const a=bands[i-1],b=bands[i];return movement*(a[1]+(b[1]-a[1])*smooth((v-a[0])/(b[0]-a[0])));}}return 0;};
  context.save();
  if(front){
    if(!j.foreground?.length){context.restore();return;}
    context.beginPath();for(const polygon of j.foreground){polygon.forEach(([px,py],i)=>{const xx=x+px+offsetAt(py);if(i)context.lineTo(xx,y+py);else context.moveTo(xx,y+py);});context.closePath();}context.clip();
  }
  // Row registration keeps the walk surface fixed and the upper planes slower.
  for(let row=0;row<h;row+=4){const sh=Math.min(4,h-row);context.drawImage(img,0,row/h*img.naturalHeight,img.naturalWidth,sh/h*img.naturalHeight,x+offsetAt(row+sh/2),y+row,w,sh);}
  context.restore();
}
function drawDeformed(layer,state) {
  const img = images.get(layer.file); if (!img) return;
  const [w,h] = dimensions(layer,img), [x,y] = layerPosition(layer,state);
  if (x+w < -50 || x > manifest.canvas[0]+50) return;
  const amount = reducedMotion.matches ? 0 : num(layer.amplitude, layer.kind === 'cloth' ? 3 : 2.8);
  if (!amount) { drawLayer(layer,state); return; }
  const phase = state.envTime*num(layer.frequency,1.1)+num(layer.phase,0);
  const step = Math.max(3,Math.ceil(img.naturalHeight/75));
  context.save(); context.globalAlpha = num(layer.opacity,1);
  for (let sy=0; sy<img.naturalHeight; sy+=step) {
    const sh = Math.min(step+1,img.naturalHeight-sy), t = sy/img.naturalHeight;
    // Rooted leaf tips move; hanging cloth remains attached along its top.
    const weight = layer.kind === 'cloth' ? Math.pow(t,2) : Math.pow(1-t,2.2);
    const dx = Math.sin(phase+t*.9)*amount*weight;
    const dy = layer.kind === 'cloth' ? Math.sin(phase*.73+t)*amount*.16*weight : 0;
    context.drawImage(img,0,sy,img.naturalWidth,sh,x+dx,y+sy/img.naturalHeight*h+dy,w,sh/img.naturalHeight*h);
  }
  context.restore();
}
function drawWater(layer,state) {
  const img=images.get(layer.file); if(!img)return;
  const [w,h]=dimensions(layer,img),[x,y]=layerPosition(layer,state);
  if(x+w<0||x>manifest.canvas[0])return;
  if(reducedMotion.matches) { drawLayer(layer,state); return; }
  const amp=num(layer.amplitude,2.4), phase=state.envTime*num(layer.frequency,.75)+num(layer.phase,0);
  let buffer=waterBuffers.get(layer.id??layer.file);
  if(!buffer){ buffer=document.createElement('canvas');buffer.width=img.naturalWidth;buffer.height=img.naturalHeight;waterBuffers.set(layer.id??layer.file,buffer); }
  const c=buffer.getContext('2d');c.clearRect(0,0,buffer.width,buffer.height);
  const dx=Math.sin(phase)*amp,dy=Math.cos(phase*.73)*amp*.22;
  c.drawImage(img,dx,dy);
  if(layer.maskFile && images.has(layer.maskFile)){ c.globalCompositeOperation='destination-in';c.drawImage(images.get(layer.maskFile),0,0,buffer.width,buffer.height);c.globalCompositeOperation='source-over'; }
  context.save();context.globalAlpha=num(layer.opacity,.7);context.drawImage(buffer,x,y,w,h);context.restore();
}
function drawEnvironment(layer,state) {
  const kind=layer.kind??layer.type;
  if(kind==='light'||kind==='smoke'||kind==='screen') {
    const img=images.get(layer.maskFile??layer.file);if(!img)return;
    const [w,h]=dimensions(layer,img),[x,y]=layerPosition(layer,state);
    if(x+w<0||x>manifest.canvas[0])return;
    const phase=reducedMotion.matches?0:state.envTime*num(layer.frequency,.65)+num(layer.phase,0);
    const dx=kind==='smoke'&&!reducedMotion.matches?Math.sin(phase)*1.8:0;
    const dy=kind==='smoke'&&!reducedMotion.matches?Math.cos(phase*.7)*1.5:0;
    context.save();context.globalCompositeOperation='soft-light';context.globalAlpha=num(layer.opacity,.22)*(reducedMotion.matches?.35:.55+.45*Math.sin(phase));context.drawImage(img,x+dx,y+dy,w,h);context.restore();return;
  }
  if(kind==='leaf'||kind==='cloth') return drawDeformed({...layer,kind},state);
  if(kind==='water') return drawWater(layer,state);
  if(kind==='bird') {
    const img=images.get(layer.file);if(!img)return;
    const [w,h]=dimensions(layer,img),[x,y]=layerPosition(layer,state);
    const a=reducedMotion.matches?0:Math.sin(state.envTime*num(layer.frequency,.8)+num(layer.phase,0));
    context.drawImage(img,x+a*num(layer.amplitude,6),y+a*2,w,h);return;
  }
  drawLayer(layer,state);
}
function drawShadow(state) {
  const weight=state.idle?1:.87+.13*Math.cos(state.phaseProgress*Math.PI*4);
  const center=state.contactX-state.cameraX;
  context.save();context.translate(center,state.groundY+1.8);context.scale((state.idle?25:22)*weight,3.1+weight*.8);
  const grad=context.createRadialGradient(0,0,0,0,0,1);grad.addColorStop(0,`rgba(57,37,23,${.28*weight})`);grad.addColorStop(.6,'rgba(57,37,23,.10)');grad.addColorStop(1,'rgba(57,37,23,0)');context.fillStyle=grad;context.fillRect(-1,-1,2,2);context.restore();
}
function environments(){return manifest.environment??manifest.environments??[];}
function bridges(){return Array.isArray(manifest.bridge)?manifest.bridge:manifest.bridge?[manifest.bridge]:[];}
function paint(seconds=timeline) {
  if(!ready)return null;
  const state=computeState(seconds),[w,h]=manifest.canvas;
  context.setTransform(canvas.width/w,0,0,canvas.height/h,0,0);context.fillStyle='#b8956c';context.fillRect(0,0,w,h);context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';
  for(const scene of manifest.scenes)drawLayer(scene,state);
  for(const item of bridges())if(item.order!=='front')drawLayer(item,state);
  for(const layer of manifest.layers??[])if(layer.order==='behind'){if(layer.junction)drawJunction(layer,state);else drawLayer(layer,state);}
  for(const layer of environments())if(layer.order!=='front')drawEnvironment(layer,state);
  drawShadow(state);
  const sprite=images.get(state.sprite);context.drawImage(sprite,state.spriteLeft-state.cameraX,state.spriteTop,metadata.canvas[0]*state.scale,metadata.canvas[1]*state.scale);
  for(const layer of manifest.layers??[])if(layer.junction)drawJunction(layer,state,true);
  for(const layer of manifest.layers??[])if(layer.order!=='behind')drawLayer(layer,state);
  for(const layer of environments())if(layer.order==='front')drawEnvironment(layer,state);
  for(const item of bridges())if(item.order==='front')drawLayer(item,state);
  latestState=state;diagnostics.renders++;return {...state};
}
function status(text){ui.status.textContent=text;}
function updateObservation(state, allowStop=false) {
  nearest=observations.find(item=>Math.abs(state.rootX-num(item.worldX,0))<=num(item.radius,190))??null;
  ui.observe.hidden=!nearest||Boolean(observation)||timeline>=duration();
  if(nearest)ui['observe-label'].textContent=read.has(nearest.id)?v("site.05.player.003", {p0:(nearest.title)}):nearest.title;
  if(allowStop&&mode==='manual'&&nearest&&!encountered.has(nearest.id)){
    encountered.add(nearest.id);clearInputs();stoppedAt=performance.now();status('发现一处观察点。可以阅读，也可以继续前进。');
  }
}
function updateControls(force=false){
  if(!ready)return;const now=performance.now();if(!force&&now-paintControlsAt<75)return;paintControlsAt=now;
  const moving=isMoving();ui['mode-manual'].setAttribute('aria-pressed',String(mode==='manual'));ui['mode-auto'].setAttribute('aria-pressed',String(mode==='auto'));
  ui['manual-controls'].hidden=mode!=='manual';ui['auto-controls'].hidden=mode!=='auto';ui.forward.classList.toggle('is-held',mode==='manual'&&moving);
  ui.assist.setAttribute('aria-pressed',String(assist));ui.assist.textContent=assist?v("site.05.player.004"):v("site.05.player.005");ui.play.textContent=autoPlaying?v("site.05.player.006"):timeline>=duration()?v("site.05.player.007"):v("site.05.player.008");
  ui['pause-all'].textContent=pausedAll?v("site.05.player.009"):v("site.05.player.010");ui['pause-all'].setAttribute('aria-pressed',String(pausedAll));
  ui.seek.value=String(timeline);ui.time.textContent=v("site.05.player.011", {p0:(timeline.toFixed(1)), p1:(duration())});ui.seek.setAttribute('aria-valuetext',`${timeline.toFixed(1)}秒，共${duration()}秒`);
  const scene=localized(sceneAt(latestState?.rootX??manifest.character.startX));
  ui['world-name'].textContent=scene.title??sceneNames[scene.id]??scene.id;
  ui['world-date'].textContent=scene.dateRange??scene.date??'';
  ui.arrival.hidden=timeline<duration()||Boolean(observation);
  ui['playback-note'].textContent=reducedMotion.matches?v("site.05.player.012"):mode==='manual'?v("site.05.player.013"):v("site.05.player.014");
  ui.forward.disabled=loading;ui.assist.disabled=loading;ui.play.disabled=loading;
}
function seek(seconds){
  if(!ready)return null;const requested=clamp(num(seconds,0),0,duration());
  if(!neededScenes(requested).every(sceneReady)){requestTime(requested,true);return latestState;}
  ++loadEpoch;loading=false;pendingTime=null;ui['stage-message'].hidden=true;ui['resources-retry'].hidden=true;ui.stage.setAttribute('aria-busy','false');timeline=requested;
  if(timeline>=duration()){autoPlaying=false;clearInputs();}lastTick=performance.now();const state=paint();updateScene();updateObservation(state);updateControls(true);return state;
}
async function seekAsync(seconds){const requested=clamp(num(seconds,0),0,duration());if(neededScenes(requested).every(sceneReady))return seek(requested);return requestTime(requested,true);}
function pause(){autoPlaying=false;clearInputs();stoppedAt=performance.now();stepping=false;paint();updateControls(true);return latestState?{...latestState}:null;}
function play(){if(!ready||observation)return;if(timeline>=duration())seek(0);pausedAll=false;stepping=false;if(mode==='auto')autoPlaying=true;else assist=true;lastTick=performance.now();updateControls(true);}
function replay(){closeObservation();clearInputs();encountered.clear();read.clear();visited.clear();pausedAll=false;stepping=false;envTime=0;stoppedAt=-1;autoPlaying=mode==='auto'&&!reducedMotion.matches;lastTick=performance.now();seek(0);status('重新启程。');}
function setMode(value){if(!['manual','auto'].includes(value))return mode;clearInputs();mode=value;stepping=false;autoPlaying=value==='auto'&&!pausedAll&&!observation&&timeline<duration();stoppedAt=performance.now();lastTick=performance.now();paint();updateControls(true);return mode;}
function pauseAll(value=!pausedAll){pausedAll=Boolean(value);clearInputs();stoppedAt=performance.now();lastTick=performance.now();paint();updateControls(true);return pausedAll;}
function step(direction){
  if(!ready)return;
  pauseAll(true);autoPlaying=false;stepping=true;
  const gait=gaitAt(timeline), cycle=Math.floor(gait.cycles);
  const next=direction>=0?gait.pose+1:gait.pose-1;
  let targetCycle=cycle, target=next;
  if(target>=sequence.length){target=0;targetCycle++;}
  if(target<0){target=sequence.length-1;targetCycle--;}
  // Inspect a real drawing rather than assuming all exposures are 80 ms.
  // A tiny in-pose offset avoids floating-point selection of the previous one.
  const phase=(sequence[target].boundary+.001)/cycleWeight;
  const distance=(targetCycle+phase)*gait.cycleDistance;
  return seek(distance/num(manifest.character.travelDistance,2835)*duration());
}
function appendParagraphs(node,items){node.replaceChildren();for(const text of(Array.isArray(items)?items:[items]).filter(Boolean)){const p=document.createElement('p');p.textContent=text;node.append(p);}}
function safeLink(label,url){const a=document.createElement('a');try{const u=new URL(url);if(!['https:','http:'].includes(u.protocol))return document.createTextNode(label);a.href=u.href;}catch{return document.createTextNode(label);}a.textContent=label;a.target='_blank';a.rel='noopener noreferrer';return a;}
function sourceList(node,sources){node.replaceChildren();for(const s of sources??[]){const p=document.createElement('p');p.append(safeLink(s.label??s.title??s.url,s.url));node.append(p);}}
function openObservation(id=nearest?.id){const raw=observations.find(o=>o.id===id);if(!raw||!ready||loading)return false;const item=localized(raw);pause();observation=item.id;encountered.add(item.id);read.add(item.id);ui['observation-title'].textContent=item.title;ui['observation-subtitle'].textContent=item.subtitle??'';appendParagraphs(ui['observation-body'],item.body);appendParagraphs(ui['observation-more'],item.extended??item.more??[]);ui['observation-more'].parentElement.hidden=!(item.extended?.length||item.more?.length);const o=item.object;ui['observation-object'].replaceChildren();if(o){appendParagraphs(ui['observation-object'],[o.name,[o.date,o.museum,o.accession].filter(Boolean).join(' · ')]);if(o.url)ui['observation-object'].append(safeLink('查看馆藏记录',o.url));}sourceList(ui['observation-sources'],item.sources);appendParagraphs(ui['observation-notes'],item.notes);if(!ui.observation.open)ui.observation.showModal();ui.observe.hidden=true;paint();updateControls(true);return true;}
function closeObservation(){if(!observation&&!ui.observation.open)return;observation=null;clearInputs();stoppedAt=-1;if(ui.observation.open)ui.observation.close();if(ready){paint();updateObservation(latestState);updateControls(true);}canvas.focus({preventScroll:true});}
async function visitScene(id){const scene=manifest.scenes.find(s=>s.id===id);if(!scene||!visited.has(id))return false;closeObservation();pause();pausedAll=false;const root=clamp(scene.x+num(scene.entranceX,240),manifest.character.startX,manifest.character.startX+manifest.character.travelDistance);const time=(root-manifest.character.startX)/manifest.character.travelDistance*duration();await seekAsync(time);canvas.focus({preventScroll:true});return true;}
function tick(now){
  const elapsed=(now-lastTick)/1000;
  if(ready&&elapsed>=0&&elapsed<.5){
    const moving=isMoving();
    if(!pausedAll&&!document.hidden&&!reducedMotion.matches)envTime+=elapsed;
    if(moving){const nextTime=Math.min(duration(),timeline+elapsed*speed);if(neededScenes(nextTime).every(sceneReady)){timeline=nextTime;stepping=false;diagnostics.frameIntervals.push(elapsed*1000);if(diagnostics.frameIntervals.length>5000)diagnostics.frameIntervals.shift();}else{requestTime(nextTime);}}
    if(previousMoving&&!moving)stoppedAt=now;
    if(timeline>=duration()){autoPlaying=false;clearInputs();}
    previousMoving=isMoving();const state=paint();if(!loading){updateScene();updateObservation(state,moving);}updateControls();
  }
  lastTick=now;raf=requestAnimationFrame(tick);
}
function resize(){if(!manifest)return;const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2),width=Math.max(320,Math.min(3344,Math.round(rect.width*dpr))),height=Math.round(width*manifest.canvas[1]/manifest.canvas[0]);if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}if(ready)paint();}
function addInput(key){if(!ready||mode!=='manual'||observation||timeline>=duration())return;pausedAll=false;stepping=false;inputs.add(key);stoppedAt=-1;lastTick=performance.now();updateControls(true);}
function removeInput(key){inputs.delete(key);if(!isMoving())stoppedAt=performance.now();updateControls(true);}
ui.forward.addEventListener('pointerdown',event=>{if(event.button!==0)return;event.preventDefault();ui.forward.setPointerCapture(event.pointerId);addInput(`p${event.pointerId}`);});
for(const eventName of ['pointerup','pointercancel','lostpointercapture'])ui.forward.addEventListener(eventName,event=>{event.preventDefault();removeInput(`p${event.pointerId}`);});
ui.forward.addEventListener('contextmenu',event=>event.preventDefault());
ui.forward.addEventListener('dragstart',event=>event.preventDefault());
ui.assist.addEventListener('click',()=>{if(mode!=='manual'||observation)return;assist=!assist;pausedAll=false;stepping=false;stoppedAt=assist?-1:performance.now();updateControls(true);});
ui['mode-manual'].addEventListener('click',()=>setMode('manual'));ui['mode-auto'].addEventListener('click',()=>setMode('auto'));
ui.play.addEventListener('click',()=>autoPlaying?pause():play());ui['pause-all'].addEventListener('click',()=>pauseAll());ui.replay.addEventListener('click',replay);$('end-replay').addEventListener('click',replay);
ui['previous-frame'].addEventListener('click',()=>step(-1));ui['next-frame'].addEventListener('click',()=>step(1));
ui.seek.addEventListener('pointerdown',()=>pauseAll(true));ui.seek.addEventListener('input',()=>{const requested=ui.seek.value;pauseAll(true);stepping=true;seek(requested);});
ui.speed.addEventListener('change',()=>window.journey.setSpeed(ui.speed.value));ui.observe.addEventListener('click',()=>openObservation());ui['close-observation'].addEventListener('click',closeObservation);ui.continue.addEventListener('click',closeObservation);
ui.observation.addEventListener('cancel',event=>{event.preventDefault();closeObservation();});
ui['resources-retry'].addEventListener('click',()=>ready?requestTime(pendingTime??timeline,true):location.reload());
ui['return-anyang'].addEventListener('click',()=>{ui['arrival-note'].hidden=false;ui['arrival-note'].textContent=v("site.05.player.015");});
function textTarget(target){return target instanceof HTMLElement&&target.matches('input,select,textarea,[contenteditable],summary,a');}
document.addEventListener('keydown',event=>{if(observation||textTarget(event.target))return;if((event.code==='Space'||event.code==='ArrowRight')&&mode==='manual'){if(event.target instanceof HTMLButtonElement&&event.target!==ui.forward&&event.code==='Space')return;event.preventDefault();if(!event.repeat)addInput(event.code);}else if(event.code==='Space'&&mode==='auto'){if(event.target instanceof HTMLButtonElement)return;event.preventDefault();if(!event.repeat)autoPlaying?pause():play();}else if(event.code==='KeyR'&&!event.repeat)replay();});
document.addEventListener('keyup',event=>{if(['Space','ArrowRight'].includes(event.code)){if(!textTarget(event.target))event.preventDefault();removeInput(event.code);}});
window.addEventListener('blur',()=>{clearInputs();autoPlaying=false;stoppedAt=performance.now();updateControls(true);});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInputs();autoPlaying=false;pausedAll=true;stoppedAt=performance.now();}lastTick=performance.now();updateControls(true);});
window.addEventListener('resize',resize);window.addEventListener('pagehide',()=>cancelAnimationFrame(raf),{once:true});
reducedMotion.addEventListener('change',()=>{pause();paint();updateControls(true);});
window.journey={get ready(){return ready;},get duration(){return duration();},get canvas(){return canvas;},pause,play,replay,seek,seekAsync,step,setMode,pauseAll,openObservation,closeObservation,visitScene,
  async waitForScene(id){const scene=manifest.scenes.find(s=>s.id===id);if(!scene)throw Error('Unknown scene');await loadScenes([scene]);return true;},
  renderAt(seconds,environmentSeconds=seconds){pauseAll(true);stepping=true;envTime=num(environmentSeconds,seconds);return seek(seconds);},
  async renderAtAsync(seconds,environmentSeconds=seconds){pauseAll(true);stepping=true;envTime=num(environmentSeconds,seconds);return seekAsync(seconds);},
  setSpeed(value){speed=clamp(num(value,1),.1,2);ui.speed.value=String(speed);lastTick=performance.now();return speed;},
  state(){return{ready,mode,playing:isMoving(),autoPlaying,holding:inputs.size>0,inputs:[...inputs],assist,pausedAll,speed,timeline,envTime,duration:duration(),reducedMotion:reducedMotion.matches,observation,nearest:nearest?.id??null,encountered:[...encountered],read:[...read],...latestState,loading,pendingTime,scene:ready?sceneAt(latestState?.rootX??manifest.character.startX).id:null,visited:[...visited],loadedScenes:[...loadedScenes],cachedAssets:images.size,canvas:[canvas.width,canvas.height],errors:[...diagnostics.errors]};},
  performance(){const a=diagnostics.frameIntervals.slice().sort((x,y)=>x-y);return{renders:diagnostics.renders,samples:a.length,averageFrameMs:a.reduce((n,v)=>n+v,0)/Math.max(a.length,1),p95FrameMs:a[Math.floor(a.length*.95)]??0,over50ms:a.filter(v=>v>50).length};}
};
async function initialise(){
  if(!context)throw Error('浏览器不支持 Canvas 2D');manifest=await json(assetURL('manifest.json'));metadata=await json(assetURL(manifest.character.metadata));
  if(metadata.frames.length!==manifest.character.frames.length)throw Error('人物帧与接地数据不一致');
  if(!metadata.frames.length||!metadata.frames.every(frame=>Array.isArray(frame.contactInFrame)&&frame.contactInFrame.length===2&&frame.contactInFrame.every(Number.isFinite)))throw Error('人物接地点资料不完整');
  configureGait();
  const content=await json(new URL('./content/observations.json',import.meta.url));observations=Array.isArray(content)?content:content.observations??[];
  const paths=[...manifest.character.frames,manifest.character.idle?.file].filter(Boolean);
  await Promise.all([Promise.all([...new Set(paths)].map(image)),loadScenes(neededScenes(0,true))]);
  const allSources=observations.flatMap(o=>o.sources??[]);sourceList(ui['source-links'],allSources.filter((s,i)=>allSources.findIndex(a=>a.url===s.url)===i));
  ui['scene-nav'].replaceChildren();for(const scene of manifest.scenes){const button=document.createElement('button');button.type='button';button.dataset.scene=scene.id;button.textContent=`${scene.id.slice(1)} ${scene.shortTitle??sceneNames[scene.id]??scene.id}`;button.title='回看已经经过的文明';button.addEventListener('click',()=>visitScene(scene.id));ui['scene-nav'].append(button);}
  ui.seek.max=String(duration());ready=true;resize();paint();updateObservation(latestState);ui['stage-message'].hidden=true;ui.stage.setAttribute('aria-busy','false');
  for(const el of document.querySelectorAll('button:disabled,input:disabled,select:disabled'))el.disabled=false;
  $('inspection').hidden=!new URLSearchParams(location.search).has('debug');updateScene();updateControls(true);lastTick=performance.now();raf=requestAnimationFrame(tick);window.dispatchEvent(new CustomEvent('journeyready'));
}
initialise().catch(error=>{diagnostics.errors.push(error.message);console.error(error);ui['stage-message'].hidden=false;ui['stage-message'].classList.add('error');ui['stage-message'].textContent=v("site.05.player.016");ui['resources-retry'].hidden=false;ui.stage.setAttribute('aria-busy','false');});
