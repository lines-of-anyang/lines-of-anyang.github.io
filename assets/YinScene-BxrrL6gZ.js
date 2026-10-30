import{a as b,u as be,j as h,e as k}from"./index-BvsNqcqB.js";import{u as F,b as Te,C as Ct}from"./react-three-fiber.esm-BQvktIXZ.js";import{j as Rt,V as M,k as Qe,Q as Je,O as _e,h as B,P as me,l as J,m as ee,n as zt,o as Ut,I as It,F as ge,p as Oe,q as te,W as Nt,r as De,s as ut,t as Bt,U as et,u as tt,v as Ht,w as ne,L as Wt,x as Ft,y as kt,g as Yt,B as Gt,z as Vt,C as Zt,R as Xt,S as Kt}from"./three.module-C-OeewK0.js";import{r as nt,f as je,c as $t}from"./LaterChapters-DD23O2Cr.js";import"./index-BDP2SNti.js";import"./index-xgxdCp6f.js";import"./ScrollTrigger-ak1EnQU5.js";import"./integrated-history-v2c1-ui-Co3ElSeZ.js";import"./App-BUncBKYZ.js";import"./IntegratedExhibition-uCrU8m25.js";function re(){return re=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)({}).hasOwnProperty.call(o,e)&&(r[e]=o[e])}return r},re.apply(null,arguments)}const dt=parseInt(Rt.replace(/\D+/g,"")),ft=dt>=125?"uv1":"uv2";var qt=Object.defineProperty,Qt=(r,n,o)=>n in r?qt(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,Jt=(r,n,o)=>(Qt(r,n+"",o),o);class en{constructor(){Jt(this,"_listeners")}addEventListener(n,o){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[n]===void 0&&(e[n]=[]),e[n].indexOf(o)===-1&&e[n].push(o)}hasEventListener(n,o){if(this._listeners===void 0)return!1;const e=this._listeners;return e[n]!==void 0&&e[n].indexOf(o)!==-1}removeEventListener(n,o){if(this._listeners===void 0)return;const i=this._listeners[n];if(i!==void 0){const s=i.indexOf(o);s!==-1&&i.splice(s,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const e=this._listeners[n.type];if(e!==void 0){n.target=this;const i=e.slice(0);for(let s=0,v=i.length;s<v;s++)i[s].call(this,n);n.target=null}}}var tn=Object.defineProperty,nn=(r,n,o)=>n in r?tn(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,f=(r,n,o)=>(nn(r,typeof n!="symbol"?n+"":n,o),o);const de=new zt,ot=new Ut,on=Math.cos(70*(Math.PI/180)),it=(r,n)=>(r%n+n)%n;let sn=class extends en{constructor(n,o){super(),f(this,"object"),f(this,"domElement"),f(this,"enabled",!0),f(this,"target",new M),f(this,"minDistance",0),f(this,"maxDistance",1/0),f(this,"minZoom",0),f(this,"maxZoom",1/0),f(this,"minPolarAngle",0),f(this,"maxPolarAngle",Math.PI),f(this,"minAzimuthAngle",-1/0),f(this,"maxAzimuthAngle",1/0),f(this,"enableDamping",!1),f(this,"dampingFactor",.05),f(this,"enableZoom",!0),f(this,"zoomSpeed",1),f(this,"enableRotate",!0),f(this,"rotateSpeed",1),f(this,"enablePan",!0),f(this,"panSpeed",1),f(this,"screenSpacePanning",!0),f(this,"keyPanSpeed",7),f(this,"zoomToCursor",!1),f(this,"autoRotate",!1),f(this,"autoRotateSpeed",2),f(this,"reverseOrbit",!1),f(this,"reverseHorizontalOrbit",!1),f(this,"reverseVerticalOrbit",!1),f(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),f(this,"mouseButtons",{LEFT:J.ROTATE,MIDDLE:J.DOLLY,RIGHT:J.PAN}),f(this,"touches",{ONE:ee.ROTATE,TWO:ee.DOLLY_PAN}),f(this,"target0"),f(this,"position0"),f(this,"zoom0"),f(this,"_domElementKeyEvents",null),f(this,"getPolarAngle"),f(this,"getAzimuthalAngle"),f(this,"setPolarAngle"),f(this,"setAzimuthalAngle"),f(this,"getDistance"),f(this,"getZoomScale"),f(this,"listenToKeyEvents"),f(this,"stopListenToKeyEvents"),f(this,"saveState"),f(this,"reset"),f(this,"update"),f(this,"connect"),f(this,"dispose"),f(this,"dollyIn"),f(this,"dollyOut"),f(this,"getScale"),f(this,"setScale"),this.object=n,this.domElement=o,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=t=>{let c=it(t,2*Math.PI),g=u.phi;g<0&&(g+=2*Math.PI),c<0&&(c+=2*Math.PI);let S=Math.abs(c-g);2*Math.PI-S<S&&(c<g?c+=2*Math.PI:g+=2*Math.PI),y.phi=c-g,e.update()},this.setAzimuthalAngle=t=>{let c=it(t,2*Math.PI),g=u.theta;g<0&&(g+=2*Math.PI),c<0&&(c+=2*Math.PI);let S=Math.abs(c-g);2*Math.PI-S<S&&(c<g?c+=2*Math.PI:g+=2*Math.PI),y.theta=c-g,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",Se),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),l=a.NONE},this.update=(()=>{const t=new M,c=new M(0,1,0),g=new Je().setFromUnitVectors(n.up,c),S=g.clone().invert(),C=new M,V=new Je,K=2*Math.PI;return function(){const qe=e.object.position;g.setFromUnitVectors(n.up,c),S.copy(g).invert(),t.copy(qe).sub(e.target),t.applyQuaternion(g),u.setFromVector3(t),e.autoRotate&&l===a.NONE&&ve(gt()),e.enableDamping?(u.theta+=y.theta*e.dampingFactor,u.phi+=y.phi*e.dampingFactor):(u.theta+=y.theta,u.phi+=y.phi);let Z=e.minAzimuthAngle,X=e.maxAzimuthAngle;isFinite(Z)&&isFinite(X)&&(Z<-Math.PI?Z+=K:Z>Math.PI&&(Z-=K),X<-Math.PI?X+=K:X>Math.PI&&(X-=K),Z<=X?u.theta=Math.max(Z,Math.min(X,u.theta)):u.theta=u.theta>(Z+X)/2?Math.max(Z,u.theta):Math.min(X,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(R,e.dampingFactor):e.target.add(R),e.zoomToCursor&&L||e.object.isOrthographicCamera?u.radius=we(u.radius):u.radius=we(u.radius*_),t.setFromSpherical(u),t.applyQuaternion(S),qe.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(y.theta*=1-e.dampingFactor,y.phi*=1-e.dampingFactor,R.multiplyScalar(1-e.dampingFactor)):(y.set(0,0,0),R.set(0,0,0));let ie=!1;if(e.zoomToCursor&&L){let se=null;if(e.object instanceof me&&e.object.isPerspectiveCamera){const ae=t.length();se=we(ae*_);const ue=ae-se;e.object.position.addScaledVector(O,ue),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const ae=new M(j.x,j.y,0);ae.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/_)),e.object.updateProjectionMatrix(),ie=!0;const ue=new M(j.x,j.y,0);ue.unproject(e.object),e.object.position.sub(ue).add(ae),e.object.updateMatrixWorld(),se=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;se!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(se).add(e.object.position):(de.origin.copy(e.object.position),de.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(de.direction))<on?n.lookAt(e.target):(ot.setFromNormalAndCoplanarPoint(e.object.up,e.target),de.intersectPlane(ot,e.target))))}else e.object instanceof _e&&e.object.isOrthographicCamera&&(ie=_!==1,ie&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/_)),e.object.updateProjectionMatrix()));return _=1,L=!1,ie||C.distanceToSquared(e.object.position)>m||8*(1-V.dot(e.object.quaternion))>m?(e.dispatchEvent(i),C.copy(e.object.position),V.copy(e.object.quaternion),ie=!1,!0):!1}})(),this.connect=t=>{e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Ke),e.domElement.addEventListener("pointerdown",Ze),e.domElement.addEventListener("pointercancel",oe),e.domElement.addEventListener("wheel",Xe)},this.dispose=()=>{var t,c,g,S,C,V;e.domElement&&(e.domElement.style.touchAction="auto"),(t=e.domElement)==null||t.removeEventListener("contextmenu",Ke),(c=e.domElement)==null||c.removeEventListener("pointerdown",Ze),(g=e.domElement)==null||g.removeEventListener("pointercancel",oe),(S=e.domElement)==null||S.removeEventListener("wheel",Xe),(C=e.domElement)==null||C.ownerDocument.removeEventListener("pointermove",Ee),(V=e.domElement)==null||V.ownerDocument.removeEventListener("pointerup",oe),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Se)};const e=this,i={type:"change"},s={type:"start"},v={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const m=1e-6,u=new Qe,y=new Qe;let _=1;const R=new M,T=new B,D=new B,A=new B,P=new B,N=new B,w=new B,x=new B,p=new B,d=new B,O=new M,j=new B;let L=!1;const E=[],ce={};function gt(){return 2*Math.PI/60/60*e.autoRotateSpeed}function $(){return Math.pow(.95,e.zoomSpeed)}function ve(t){e.reverseOrbit||e.reverseHorizontalOrbit?y.theta+=t:y.theta-=t}function ze(t){e.reverseOrbit||e.reverseVerticalOrbit?y.phi+=t:y.phi-=t}const Ue=(()=>{const t=new M;return function(g,S){t.setFromMatrixColumn(S,0),t.multiplyScalar(-g),R.add(t)}})(),Ie=(()=>{const t=new M;return function(g,S){e.screenSpacePanning===!0?t.setFromMatrixColumn(S,1):(t.setFromMatrixColumn(S,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(g),R.add(t)}})(),Q=(()=>{const t=new M;return function(g,S){const C=e.domElement;if(C&&e.object instanceof me&&e.object.isPerspectiveCamera){const V=e.object.position;t.copy(V).sub(e.target);let K=t.length();K*=Math.tan(e.object.fov/2*Math.PI/180),Ue(2*g*K/C.clientHeight,e.object.matrix),Ie(2*S*K/C.clientHeight,e.object.matrix)}else C&&e.object instanceof _e&&e.object.isOrthographicCamera?(Ue(g*(e.object.right-e.object.left)/e.object.zoom/C.clientWidth,e.object.matrix),Ie(S*(e.object.top-e.object.bottom)/e.object.zoom/C.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ye(t){e.object instanceof me&&e.object.isPerspectiveCamera||e.object instanceof _e&&e.object.isOrthographicCamera?_=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function le(t){ye(_/t)}function xe(t){ye(_*t)}function Ne(t){if(!e.zoomToCursor||!e.domElement)return;L=!0;const c=e.domElement.getBoundingClientRect(),g=t.clientX-c.left,S=t.clientY-c.top,C=c.width,V=c.height;j.x=g/C*2-1,j.y=-(S/V)*2+1,O.set(j.x,j.y,1).unproject(e.object).sub(e.object.position).normalize()}function we(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function Be(t){T.set(t.clientX,t.clientY)}function bt(t){Ne(t),x.set(t.clientX,t.clientY)}function He(t){P.set(t.clientX,t.clientY)}function vt(t){D.set(t.clientX,t.clientY),A.subVectors(D,T).multiplyScalar(e.rotateSpeed);const c=e.domElement;c&&(ve(2*Math.PI*A.x/c.clientHeight),ze(2*Math.PI*A.y/c.clientHeight)),T.copy(D),e.update()}function yt(t){p.set(t.clientX,t.clientY),d.subVectors(p,x),d.y>0?le($()):d.y<0&&xe($()),x.copy(p),e.update()}function xt(t){N.set(t.clientX,t.clientY),w.subVectors(N,P).multiplyScalar(e.panSpeed),Q(w.x,w.y),P.copy(N),e.update()}function wt(t){Ne(t),t.deltaY<0?xe($()):t.deltaY>0&&le($()),e.update()}function Et(t){let c=!1;switch(t.code){case e.keys.UP:Q(0,e.keyPanSpeed),c=!0;break;case e.keys.BOTTOM:Q(0,-e.keyPanSpeed),c=!0;break;case e.keys.LEFT:Q(e.keyPanSpeed,0),c=!0;break;case e.keys.RIGHT:Q(-e.keyPanSpeed,0),c=!0;break}c&&(t.preventDefault(),e.update())}function We(){if(E.length==1)T.set(E[0].pageX,E[0].pageY);else{const t=.5*(E[0].pageX+E[1].pageX),c=.5*(E[0].pageY+E[1].pageY);T.set(t,c)}}function Fe(){if(E.length==1)P.set(E[0].pageX,E[0].pageY);else{const t=.5*(E[0].pageX+E[1].pageX),c=.5*(E[0].pageY+E[1].pageY);P.set(t,c)}}function ke(){const t=E[0].pageX-E[1].pageX,c=E[0].pageY-E[1].pageY,g=Math.sqrt(t*t+c*c);x.set(0,g)}function St(){e.enableZoom&&ke(),e.enablePan&&Fe()}function Mt(){e.enableZoom&&ke(),e.enableRotate&&We()}function Ye(t){if(E.length==1)D.set(t.pageX,t.pageY);else{const g=Me(t),S=.5*(t.pageX+g.x),C=.5*(t.pageY+g.y);D.set(S,C)}A.subVectors(D,T).multiplyScalar(e.rotateSpeed);const c=e.domElement;c&&(ve(2*Math.PI*A.x/c.clientHeight),ze(2*Math.PI*A.y/c.clientHeight)),T.copy(D)}function Ge(t){if(E.length==1)N.set(t.pageX,t.pageY);else{const c=Me(t),g=.5*(t.pageX+c.x),S=.5*(t.pageY+c.y);N.set(g,S)}w.subVectors(N,P).multiplyScalar(e.panSpeed),Q(w.x,w.y),P.copy(N)}function Ve(t){const c=Me(t),g=t.pageX-c.x,S=t.pageY-c.y,C=Math.sqrt(g*g+S*S);p.set(0,C),d.set(0,Math.pow(p.y/x.y,e.zoomSpeed)),le(d.y),x.copy(p)}function _t(t){e.enableZoom&&Ve(t),e.enablePan&&Ge(t)}function Lt(t){e.enableZoom&&Ve(t),e.enableRotate&&Ye(t)}function Ze(t){var c,g;e.enabled!==!1&&(E.length===0&&((c=e.domElement)==null||c.ownerDocument.addEventListener("pointermove",Ee),(g=e.domElement)==null||g.ownerDocument.addEventListener("pointerup",oe)),Tt(t),t.pointerType==="touch"?Ot(t):At(t))}function Ee(t){e.enabled!==!1&&(t.pointerType==="touch"?jt(t):Pt(t))}function oe(t){var c,g,S;Dt(t),E.length===0&&((c=e.domElement)==null||c.releasePointerCapture(t.pointerId),(g=e.domElement)==null||g.ownerDocument.removeEventListener("pointermove",Ee),(S=e.domElement)==null||S.ownerDocument.removeEventListener("pointerup",oe)),e.dispatchEvent(v),l=a.NONE}function At(t){let c;switch(t.button){case 0:c=e.mouseButtons.LEFT;break;case 1:c=e.mouseButtons.MIDDLE;break;case 2:c=e.mouseButtons.RIGHT;break;default:c=-1}switch(c){case J.DOLLY:if(e.enableZoom===!1)return;bt(t),l=a.DOLLY;break;case J.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;He(t),l=a.PAN}else{if(e.enableRotate===!1)return;Be(t),l=a.ROTATE}break;case J.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;Be(t),l=a.ROTATE}else{if(e.enablePan===!1)return;He(t),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&e.dispatchEvent(s)}function Pt(t){if(e.enabled!==!1)switch(l){case a.ROTATE:if(e.enableRotate===!1)return;vt(t);break;case a.DOLLY:if(e.enableZoom===!1)return;yt(t);break;case a.PAN:if(e.enablePan===!1)return;xt(t);break}}function Xe(t){e.enabled===!1||e.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(t.preventDefault(),e.dispatchEvent(s),wt(t),e.dispatchEvent(v))}function Se(t){e.enabled===!1||e.enablePan===!1||Et(t)}function Ot(t){switch($e(t),E.length){case 1:switch(e.touches.ONE){case ee.ROTATE:if(e.enableRotate===!1)return;We(),l=a.TOUCH_ROTATE;break;case ee.PAN:if(e.enablePan===!1)return;Fe(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(e.touches.TWO){case ee.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;St(),l=a.TOUCH_DOLLY_PAN;break;case ee.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Mt(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&e.dispatchEvent(s)}function jt(t){switch($e(t),l){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;Ye(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;Ge(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;_t(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Lt(t),e.update();break;default:l=a.NONE}}function Ke(t){e.enabled!==!1&&t.preventDefault()}function Tt(t){E.push(t)}function Dt(t){delete ce[t.pointerId];for(let c=0;c<E.length;c++)if(E[c].pointerId==t.pointerId){E.splice(c,1);return}}function $e(t){let c=ce[t.pointerId];c===void 0&&(c=new B,ce[t.pointerId]=c),c.set(t.pageX,t.pageY)}function Me(t){const c=t.pointerId===E[0].pointerId?E[1]:E[0];return ce[c.pointerId]}this.dollyIn=(t=$())=>{xe(t),e.update()},this.dollyOut=(t=$())=>{le(t),e.update()},this.getScale=()=>_,this.setScale=t=>{ye(t),e.update()},this.getZoomScale=()=>$(),o!==void 0&&this.connect(o),this.update()}};const st=new De,fe=new M;class Ce extends It{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const n=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],o=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],e=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(e),this.setAttribute("position",new ge(n,3)),this.setAttribute("uv",new ge(o,2))}applyMatrix4(n){const o=this.attributes.instanceStart,e=this.attributes.instanceEnd;return o!==void 0&&(o.applyMatrix4(n),e.applyMatrix4(n),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(n){let o;n instanceof Float32Array?o=n:Array.isArray(n)&&(o=new Float32Array(n));const e=new Oe(o,6,1);return this.setAttribute("instanceStart",new te(e,3,0)),this.setAttribute("instanceEnd",new te(e,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(n,o=3){let e;n instanceof Float32Array?e=n:Array.isArray(n)&&(e=new Float32Array(n));const i=new Oe(e,o*2,1);return this.setAttribute("instanceColorStart",new te(i,o,0)),this.setAttribute("instanceColorEnd",new te(i,o,o)),this}fromWireframeGeometry(n){return this.setPositions(n.attributes.position.array),this}fromEdgesGeometry(n){return this.setPositions(n.attributes.position.array),this}fromMesh(n){return this.fromWireframeGeometry(new Nt(n.geometry)),this}fromLineSegments(n){const o=n.geometry;return this.setPositions(o.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new De);const n=this.attributes.instanceStart,o=this.attributes.instanceEnd;n!==void 0&&o!==void 0&&(this.boundingBox.setFromBufferAttribute(n),st.setFromBufferAttribute(o),this.boundingBox.union(st))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ut),this.boundingBox===null&&this.computeBoundingBox();const n=this.attributes.instanceStart,o=this.attributes.instanceEnd;if(n!==void 0&&o!==void 0){const e=this.boundingSphere.center;this.boundingBox.getCenter(e);let i=0;for(let s=0,v=n.count;s<v;s++)fe.fromBufferAttribute(n,s),i=Math.max(i,e.distanceToSquared(fe)),fe.fromBufferAttribute(o,s),i=Math.max(i,e.distanceToSquared(fe));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(n){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(n)}}class pt extends Ce{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(n){const o=n.length-3,e=new Float32Array(2*o);for(let i=0;i<o;i+=3)e[2*i]=n[i],e[2*i+1]=n[i+1],e[2*i+2]=n[i+2],e[2*i+3]=n[i+3],e[2*i+4]=n[i+4],e[2*i+5]=n[i+5];return super.setPositions(e),this}setColors(n,o=3){const e=n.length-o,i=new Float32Array(2*e);if(o===3)for(let s=0;s<e;s+=o)i[2*s]=n[s],i[2*s+1]=n[s+1],i[2*s+2]=n[s+2],i[2*s+3]=n[s+3],i[2*s+4]=n[s+4],i[2*s+5]=n[s+5];else for(let s=0;s<e;s+=o)i[2*s]=n[s],i[2*s+1]=n[s+1],i[2*s+2]=n[s+2],i[2*s+3]=n[s+3],i[2*s+4]=n[s+4],i[2*s+5]=n[s+5],i[2*s+6]=n[s+6],i[2*s+7]=n[s+7];return super.setColors(i,o),this}fromLine(n){const o=n.geometry;return this.setPositions(o.attributes.position.array),this}}class Re extends Bt{constructor(n){super({type:"LineMaterial",uniforms:et.clone(et.merge([tt.common,tt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new B(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${dt>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(o){this.uniforms.diffuse.value=o}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(o){o===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(o){this.uniforms.linewidth.value=o}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(o){!!o!="USE_DASH"in this.defines&&(this.needsUpdate=!0),o===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(o){this.uniforms.dashScale.value=o}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(o){this.uniforms.dashSize.value=o}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(o){this.uniforms.dashOffset.value=o}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(o){this.uniforms.gapSize.value=o}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(o){this.uniforms.opacity.value=o}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(o){this.uniforms.resolution.value.copy(o)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(o){!!o!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),o===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(n)}}const Le=new ne,at=new M,rt=new M,z=new ne,U=new ne,H=new ne,Ae=new M,Pe=new Ft,I=new Wt,ct=new M,pe=new De,he=new ut,W=new ne;let G,q;function lt(r,n,o){return W.set(0,0,-n,1).applyMatrix4(r.projectionMatrix),W.multiplyScalar(1/W.w),W.x=q/o.width,W.y=q/o.height,W.applyMatrix4(r.projectionMatrixInverse),W.multiplyScalar(1/W.w),Math.abs(Math.max(W.x,W.y))}function an(r,n){const o=r.matrixWorld,e=r.geometry,i=e.attributes.instanceStart,s=e.attributes.instanceEnd,v=Math.min(e.instanceCount,i.count);for(let a=0,l=v;a<l;a++){I.start.fromBufferAttribute(i,a),I.end.fromBufferAttribute(s,a),I.applyMatrix4(o);const m=new M,u=new M;G.distanceSqToSegment(I.start,I.end,u,m),u.distanceTo(m)<q*.5&&n.push({point:u,pointOnLine:m,distance:G.origin.distanceTo(u),object:r,face:null,faceIndex:a,uv:null,[ft]:null})}}function rn(r,n,o){const e=n.projectionMatrix,s=r.material.resolution,v=r.matrixWorld,a=r.geometry,l=a.attributes.instanceStart,m=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),y=-n.near;G.at(1,H),H.w=1,H.applyMatrix4(n.matrixWorldInverse),H.applyMatrix4(e),H.multiplyScalar(1/H.w),H.x*=s.x/2,H.y*=s.y/2,H.z=0,Ae.copy(H),Pe.multiplyMatrices(n.matrixWorldInverse,v);for(let _=0,R=u;_<R;_++){if(z.fromBufferAttribute(l,_),U.fromBufferAttribute(m,_),z.w=1,U.w=1,z.applyMatrix4(Pe),U.applyMatrix4(Pe),z.z>y&&U.z>y)continue;if(z.z>y){const w=z.z-U.z,x=(z.z-y)/w;z.lerp(U,x)}else if(U.z>y){const w=U.z-z.z,x=(U.z-y)/w;U.lerp(z,x)}z.applyMatrix4(e),U.applyMatrix4(e),z.multiplyScalar(1/z.w),U.multiplyScalar(1/U.w),z.x*=s.x/2,z.y*=s.y/2,U.x*=s.x/2,U.y*=s.y/2,I.start.copy(z),I.start.z=0,I.end.copy(U),I.end.z=0;const D=I.closestPointToPointParameter(Ae,!0);I.at(D,ct);const A=kt.lerp(z.z,U.z,D),P=A>=-1&&A<=1,N=Ae.distanceTo(ct)<q*.5;if(P&&N){I.start.fromBufferAttribute(l,_),I.end.fromBufferAttribute(m,_),I.start.applyMatrix4(v),I.end.applyMatrix4(v);const w=new M,x=new M;G.distanceSqToSegment(I.start,I.end,x,w),o.push({point:x,pointOnLine:w,distance:G.origin.distanceTo(x),object:r,face:null,faceIndex:_,uv:null,[ft]:null})}}}class ht extends Ht{constructor(n=new Ce,o=new Re({color:Math.random()*16777215})){super(n,o),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const n=this.geometry,o=n.attributes.instanceStart,e=n.attributes.instanceEnd,i=new Float32Array(2*o.count);for(let v=0,a=0,l=o.count;v<l;v++,a+=2)at.fromBufferAttribute(o,v),rt.fromBufferAttribute(e,v),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+at.distanceTo(rt);const s=new Oe(i,2,1);return n.setAttribute("instanceDistanceStart",new te(s,1,0)),n.setAttribute("instanceDistanceEnd",new te(s,1,1)),this}raycast(n,o){const e=this.material.worldUnits,i=n.camera;i===null&&!e&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=n.params.Line2!==void 0&&n.params.Line2.threshold||0;G=n.ray;const v=this.matrixWorld,a=this.geometry,l=this.material;q=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),he.copy(a.boundingSphere).applyMatrix4(v);let m;if(e)m=q*.5;else{const y=Math.max(i.near,he.distanceToPoint(G.origin));m=lt(i,y,l.resolution)}if(he.radius+=m,G.intersectsSphere(he)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),pe.copy(a.boundingBox).applyMatrix4(v);let u;if(e)u=q*.5;else{const y=Math.max(i.near,pe.distanceToPoint(G.origin));u=lt(i,y,l.resolution)}pe.expandByScalar(u),G.intersectsBox(pe)!==!1&&(e?an(this,o):rn(this,i,o))}onBeforeRender(n){const o=this.material.uniforms;o&&o.resolution&&(n.getViewport(Le),this.material.uniforms.resolution.value.set(Le.z,Le.w))}}class cn extends ht{constructor(n=new pt,o=new Re({color:Math.random()*16777215})){super(n,o),this.isLine2=!0,this.type="Line2"}}const Y=b.forwardRef(function({points:n,color:o=16777215,vertexColors:e,linewidth:i,lineWidth:s,segments:v,dashed:a,...l},m){var u,y;const _=F(P=>P.size),R=b.useMemo(()=>v?new ht:new cn,[v]),[T]=b.useState(()=>new Re),D=(e==null||(u=e[0])==null?void 0:u.length)===4?4:3,A=b.useMemo(()=>{const P=v?new Ce:new pt,N=n.map(w=>{const x=Array.isArray(w);return w instanceof M||w instanceof ne?[w.x,w.y,w.z]:w instanceof B?[w.x,w.y,0]:x&&w.length===3?[w[0],w[1],w[2]]:x&&w.length===2?[w[0],w[1],0]:w});if(P.setPositions(N.flat()),e){o=16777215;const w=e.map(x=>x instanceof Yt?x.toArray():x);P.setColors(w.flat(),D)}return P},[n,v,e,D]);return b.useLayoutEffect(()=>{R.computeLineDistances()},[n,R]),b.useLayoutEffect(()=>{a?T.defines.USE_DASH="":delete T.defines.USE_DASH,T.needsUpdate=!0},[a,T]),b.useEffect(()=>()=>{A.dispose(),T.dispose()},[A]),b.createElement("primitive",re({object:R,ref:m},l),b.createElement("primitive",{object:A,attach:"geometry"}),b.createElement("primitive",re({object:T,attach:"material",color:o,vertexColors:!!e,resolution:[_.width,_.height],linewidth:(y=i??s)!==null&&y!==void 0?y:1,dashed:a,transparent:D===4},l)))}),ln=b.forwardRef(({makeDefault:r,camera:n,regress:o,domElement:e,enableDamping:i=!0,keyEvents:s=!1,onChange:v,onStart:a,onEnd:l,...m},u)=>{const y=F(d=>d.invalidate),_=F(d=>d.camera),R=F(d=>d.gl),T=F(d=>d.events),D=F(d=>d.setEvents),A=F(d=>d.set),P=F(d=>d.get),N=F(d=>d.performance),w=n||_,x=e||T.connected||R.domElement,p=b.useMemo(()=>new sn(w),[w]);return Te(()=>{p.enabled&&p.update()},-1),b.useEffect(()=>(s&&p.connect(s===!0?x:s),p.connect(x),()=>{p.dispose()}),[s,x,o,p,y]),b.useEffect(()=>{const d=L=>{y(),o&&N.regress(),v&&v(L)},O=L=>{a&&a(L)},j=L=>{l&&l(L)};return p.addEventListener("change",d),p.addEventListener("start",O),p.addEventListener("end",j),()=>{p.removeEventListener("start",O),p.removeEventListener("end",j),p.removeEventListener("change",d)}},[v,a,l,p,y,D]),b.useEffect(()=>{if(r){const d=P().controls;return A({controls:p}),()=>A({controls:d})}},[r,p]),b.createElement("primitive",re({ref:u,object:p,enableDamping:i},m))});function mt(){const r=document.createElement("canvas");r.width=r.height=256;const n=r.getContext("2d"),o=n.createImageData(256,256);let e=741;for(let s=0;s<o.data.length;s+=4){e=e*16807%2147483647;const v=e/2147483647*42;o.data[s]=81+v,o.data[s+1]=73+v,o.data[s+2]=61+v,o.data[s+3]=255}n.putImageData(o,0,0);const i=new Zt(r);return i.wrapS=i.wrapT=Xt,i.repeat.set(9,9),i.colorSpace=Kt,i}function un(){be();const r=b.useMemo(mt,[]),n=b.useMemo(()=>{const o=[],e=[];for(let a=0;a<=48;a++)for(let l=0;l<=48;l++){const m=l/48*34-17,u=a/48*30-15;o.push(m,-.09+.035*Math.sin(m*.71)*Math.cos(u*.62),u)}for(let a=0;a<48;a++)for(let l=0;l<48;l++){const m=a*49+l;e.push(m,m+48+1,m+1,m+1,m+48+1,m+48+2)}const s=new Gt;s.setAttribute("position",new ge(o,3)),s.setIndex(e);const v=[];for(let a=0;a<=48;a++)for(let l=0;l<=48;l++)v.push(l/48,a/48);return s.setAttribute("uv",new ge(v,2)),s.computeVertexNormals(),s},[]);return b.useEffect(()=>()=>{n.dispose(),r.dispose()},[n,r]),h.jsxs(h.Fragment,{children:[h.jsx("mesh",{geometry:n,children:h.jsx("meshStandardMaterial",{map:r,roughness:1,color:"#766c5b"})}),h.jsxs("mesh",{position:[0,-.32,0],children:[h.jsx("boxGeometry",{args:[34,.45,30]}),h.jsx("meshStandardMaterial",{color:"#24201b",roughness:1})]}),h.jsx(Y,{points:[[-11,-.015,8],[-10,-.02,2],[-10.5,-.01,-4],[-8.8,-.015,-10],[-2,-.02,-11.7],[8,-.01,-11]],color:"#191612",lineWidth:8}),h.jsx(Y,{points:[[-10.6,.005,8],[-9.6,.005,2],[-10.1,.005,-4],[-8.4,.005,-9.8],[-2,.005,-11.3],[8,.005,-10.6]],color:"#746552",opacity:.35,transparent:!0,lineWidth:1})]})}function dn({index:r,selected:n,dim:o}){be();const e=je[r],i=b.useMemo(mt,[]),s=b.useRef(null);Te((l,m)=>{s.current&&(s.current.material.opacity+=((n?.8:.22)-s.current.material.opacity)*(1-Math.exp(-m*4)))}),b.useEffect(()=>()=>i.dispose(),[i]);const v=b.useMemo(()=>{const l=new Vt,m=e.w/2,u=e.d/2;return l.moveTo(-m+.12,-u),l.lineTo(m-.14,-u+.035),l.lineTo(m,-u+.17),l.lineTo(m-.025,u-.11),l.lineTo(m-.18,u),l.lineTo(-m,u-.07),l.lineTo(-m+.035,-u+.18),l.closePath(),l},[e]),a=[[-e.w/2,e.h+.015,-e.d/2],[e.w/2,e.h+.015,-e.d/2],[e.w/2,e.h+.015,e.d/2],[-e.w/2,e.h+.015,e.d/2],[-e.w/2,e.h+.015,-e.d/2]];return h.jsxs("group",{position:[e.x,0,e.z],rotation:[0,e.angle,0],children:[h.jsxs("mesh",{position:[0,.02,0],rotation:[-Math.PI/2,0,0],children:[h.jsx("extrudeGeometry",{args:[v,{depth:e.h,bevelEnabled:!1,steps:1}]}),h.jsx("meshStandardMaterial",{color:o?"#625849":"#c2b49b",map:i,bumpMap:i,bumpScale:.09,roughness:1,flatShading:!0})]}),k([.22,.51,.78].map((l,m)=>h.jsx(Y,{points:a.map(u=>[u[0]*(1-m*.006),e.h*l,u[2]]),color:"#393127",opacity:.32,transparent:!0,lineWidth:.75},l))),h.jsx(Y,{ref:s,points:a,color:n?"#d8c5a5":"#a69579",opacity:.22,transparent:!0,lineWidth:n?1.3:.6}),k(r<3&&[-1,1].flatMap(l=>[-1,0,1].map(m=>h.jsxs("mesh",{position:[l*e.w*.37,e.h+.055,m*e.d*.35],children:[h.jsx("cylinderGeometry",{args:[.13,.16,.11,10]}),h.jsx("meshStandardMaterial",{color:o?"#5c5347":"#c1b49d",roughness:1})]},`${l}-${m}`)))),h.jsxs("mesh",{position:[0,-.03,0],rotation:[-Math.PI/2,0,0],children:[h.jsx("planeGeometry",{args:[e.w+.38,e.d+.38]}),h.jsx("meshBasicMaterial",{color:"#0a0806",transparent:!0,opacity:.22,depthWrite:!1})]})]})}function fn(r){be();const n=b.useRef(null),o=b.useRef(null),{camera:e,gl:i,size:s}=F(),v=b.useMemo(()=>[new M(-4.6,.8,2.3),new M(4.8,.65,-.7),new M(-1.8,.65,-5.2)],[]),a=b.useMemo(()=>new M,[]);b.useEffect(()=>{e instanceof me&&(e.fov=s.width<450?55:43,e.updateProjectionMatrix())},[e,s.width]);const l=b.useRef(0),m=b.useRef(!1),u=b.useRef(0),y=b.useRef(!1),_=b.useRef(!1),R=b.useRef(!1),T=b.useRef(new M(10,8,12)),D=b.useRef(new M(0,0,-1)),A=b.useRef(nt(0,!1)),P=b.useRef({count:0,elapsed:0}),N=b.useRef(0),w=x=>{const p=x==="foundation"?[7,6.5,10]:x==="space"?[8,13,12]:x==="absence"?[10,7,12]:[10,8,12];T.current.set(p[0],p[1],p[2]),D.current.set(x==="foundation"?-1.7:0,0,-1)};return b.useEffect(()=>{w(r.point),u.current=0,y.current=!r.reduced,r.reduced&&(e.position.copy(T.current),n.current?.target.copy(D.current),n.current?.update())},[r.point,r.reduced,e]),b.useEffect(()=>{!r.active||R.current||(R.current=!0,r.reduced||(e.position.set(12,9,15),y.current=!0,u.current=0))},[r.active,r.reduced,e]),b.useEffect(()=>{l.current=0,m.current=!1},[r.reconstruct]),b.useEffect(()=>{const x=i.domElement,p=d=>{d.preventDefault(),r.onFailure()};return x.addEventListener("webglcontextlost",p),()=>x.removeEventListener("webglcontextlost",p)},[i,r.onFailure]),Te((x,p)=>{if(_.current||(_.current=!0,r.onReady()),y.current&&n.current){u.current+=Math.min(p,.05);const d=1-Math.exp(-Math.min(p,.05)*2.5);e.position.lerp(T.current,d),n.current.target.lerp(D.current,d),n.current.update(),u.current>2.6&&(y.current=!1)}r.reconstruct&&(l.current+=Math.min(p,.05),A.current=nt(r.completed?5.3:l.current,r.reduced),o.current&&o.current.children.forEach(d=>{d.children[0].scale.y=Math.max(.001,A.current.columns),d.children[1].scale.x=Math.max(.001,A.current.beams),d.children[2].scale.y=Math.max(.001,A.current.volume),d.children[0].visible=A.current.columns>0,d.children[1].visible=A.current.beams>0,d.children[2].visible=A.current.volume>0}),A.current.complete&&!m.current&&(m.current=!0,r.onComplete())),i.domElement.dataset.distance=e.position.distanceTo(n.current?.target??new M).toFixed(2),i.domElement.dataset.camera=e.position.toArray().map(d=>d.toFixed(2)).join(","),i.domElement.dataset.triangles=String(i.info.render.triangles),i.domElement.dataset.calls=String(i.info.render.calls),i.domElement.dataset.frames=String(++N.current),v.forEach((d,O)=>{a.copy(d).project(e);const j=r.markerLayer.current?.children[O];j&&(j.hidden=a.z>1||Math.abs(a.x)>1||Math.abs(a.y)>1,j.style.transform=`translate(${(a.x+1)*s.width/2-22}px,${(1-a.y)*s.height/2-22}px)`)}),p<.2&&(P.current.count++,P.current.elapsed+=p),P.current.elapsed>=1&&(i.domElement.dataset.fps=(P.current.count/P.current.elapsed).toFixed(1),P.current={count:0,elapsed:0})}),h.jsxs(h.Fragment,{children:[h.jsx("color",{attach:"background",args:["#12110e"]}),h.jsx("fog",{attach:"fog",args:["#12110e",23,47]}),h.jsx("ambientLight",{intensity:.9,color:"#c9baa3"}),h.jsx("directionalLight",{position:[-7,12,5],intensity:2.8,color:"#e1d5bb"}),h.jsx("directionalLight",{position:[8,6,-10],intensity:.7,color:"#8d8374"}),h.jsx(un,{}),k(je.map((x,p)=>h.jsx(dn,{index:p,selected:(r.point==="foundation"||r.reconstruct)&&p===0,dim:r.point==="absence"&&p>1},p))),k(r.point==="space"&&h.jsx(Y,{points:[[-3.5,.42,1],[3.9,.32,-.6],[-2,.3,-5],[-3.5,.42,1]],color:"#c5b89e",opacity:.3,transparent:!0,dashed:!0,dashSize:.15,gapSize:.17,lineWidth:1})),h.jsx("group",{ref:o,visible:r.reconstruct&&r.view==="interpretation",children:k([0,1,2].map(x=>{const p=je[x],d=p.w*.37,O=p.d*.35,j=x===0?2.7:2.1;return h.jsxs("group",{position:[p.x,p.h+.12,p.z],rotation:[0,p.angle,0],children:[h.jsx("group",{children:k([-d,d].flatMap(L=>[-O,0,O].map(E=>h.jsx(Y,{points:[[L,0,E],[L,j,E]],color:"#dfceb2",transparent:!0,opacity:.65,lineWidth:1.1},`${L}-${E}`))))}),h.jsxs("group",{children:[k([-O,0,O].map(L=>h.jsx(Y,{points:[[-d,j,L],[d,j,L]],color:"#c9b48e",transparent:!0,opacity:.58,lineWidth:1},L))),k([-d,d].map(L=>h.jsx(Y,{points:[[L,j,-O],[L,j,O]],color:"#c9b48e",transparent:!0,opacity:.58,lineWidth:1},L)))]}),h.jsxs("group",{position:[0,j,0],children:[h.jsx(Y,{points:[[-d-.32,.95,-O-.32],[d+.32,.95,-O-.32],[d+.32,.95,O+.32],[-d-.32,.95,O+.32],[-d-.32,.95,-O-.32]],color:"#dbc9aa",transparent:!0,opacity:.4,lineWidth:.8}),k([-d-.32,d+.32].flatMap(L=>[-O-.32,O+.32].map(E=>h.jsx(Y,{points:[[L,0,E],[L,.95,E]],color:"#c8b18b",transparent:!0,opacity:.3,lineWidth:.8},`${L}-${E}`)))),h.jsxs("mesh",{position:[0,.48,0],children:[h.jsx("boxGeometry",{args:[d*2+.65,.96,O*2+.65]}),h.jsx("meshBasicMaterial",{color:"#dbc9aa",transparent:!0,opacity:.025,depthWrite:!1})]})]})]},x)}))}),h.jsx(ln,{ref:n,makeDefault:!0,target:[0,0,-1],enablePan:!1,enableDamping:!0,dampingFactor:.09,rotateSpeed:.45,zoomSpeed:.5,...$t,onStart:()=>{y.current=!1}})]})}function _n(r){be();const n=b.useMemo(()=>matchMedia("(max-width:760px)").matches||navigator.hardwareConcurrency<=4?1:1.4,[]);return h.jsx(Ct,{camera:{position:[10,8,12],fov:43,near:.1,far:70},dpr:n,frameloop:r.active?"always":"never",gl:{antialias:!0,powerPreference:"low-power",alpha:!1},fallback:h.jsx("p",{className:"yin-load",children:k("此浏览器无法显示三维空间，请使用支持 WebGL 的浏览器。")}),children:h.jsx(fn,{...r})})}export{_n as default};
