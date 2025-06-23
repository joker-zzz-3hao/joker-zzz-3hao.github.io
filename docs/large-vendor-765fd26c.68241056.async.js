(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6416],{702199:function(te,G,p){"use strict";p.d(G,{Z:function(){return l}});var E=p(670492),I=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function N(f,v){if(f&&f[v]&&(f[v].normal||f[v].emphasis)){var n=f[v].normal,t=f[v].emphasis;n&&(f[v]=n),t&&(f.emphasis=f.emphasis||{},f.emphasis[v]=t)}}function O(f){N(f,"itemStyle"),N(f,"lineStyle"),N(f,"areaStyle"),N(f,"label")}function a(f){!f||(f instanceof Array||(f=[f]),E.D5.each(f,function(v){if(v.axisLabel){var n=v.axisLabel;Object.assign(n,n.textStyle),n.textStyle=null}}))}function l(f){E.D5.each(f.series,function(v){E.D5.indexOf(I,v.type)>=0&&(O(v),v.coordinateSystem==="mapbox"&&(v.coordinateSystem="mapbox3D",f.mapbox3D=f.mapbox))}),a(f.xAxis3D),a(f.yAxis3D),a(f.zAxis3D),a(f.grid3D),N(f.geo3D)}},951851:function(te,G,p){"use strict";var E=p(400869),I=p(934893),N=p(654915),O=p(950578),a=p(136164),l=a.Z.firstNotNull,f={left:0,middle:1,right:2};function v(t){return t instanceof Array||(t=[t,t]),t}var n=E.Z.extend(function(){return{zr:null,viewGL:null,_center:new N.Z,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-Infinity,maxBeta:Infinity,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new I.Z,_panVelocity:new I.Z,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(t){this[t]=this[t].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,o){o=o||{};var s=o.baseDistance||0,u=o.baseOrthoSize||1,y=e.get("projection");y!=="perspective"&&y!=="orthographic"&&y!=="isometric"&&(y="perspective"),this._projection=y,this.viewGL.setProjection(y);var D=e.get("distance")+s,Z=e.get("orthographicSize")+u;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-Infinity],["maxBeta",Infinity],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(M){this[M[0]]=l(e.get(M[0]),M[1])},this),this.minDistance+=s,this.maxDistance+=s,this.minOrthographicSize+=u,this.maxOrthographicSize+=u;var x=e.ecModel,w={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(M){w[M]=l(e.get(M),x&&x.get(M))});var z=l(o.alpha,e.get("alpha"))||0,V=l(o.beta,e.get("beta"))||0,C=l(o.center,e.get("center"))||[0,0,0];w.animation&&w.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:z,beta:V,center:C,distance:D,orthographicSize:Z,easing:w.animationEasingUpdate,duration:w.animationDurationUpdate}):(this.setDistance(D),this.setAlpha(z),this.setBeta(V),this.setCenter(C),this.setOrthographicSize(Z)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var o=this.zr,s=this,u={},y={};return e.distance!=null&&(u.distance=this.getDistance(),y.distance=e.distance),e.orthographicSize!=null&&(u.orthographicSize=this.getOrthographicSize(),y.orthographicSize=e.orthographicSize),e.alpha!=null&&(u.alpha=this.getAlpha(),y.alpha=e.alpha),e.beta!=null&&(u.beta=this.getBeta(),y.beta=e.beta),e.center!=null&&(u.center=this.getCenter(),y.center=e.center),this._addAnimator(o.animation.animate(u).when(e.duration||1e3,y).during(function(){u.alpha!=null&&s.setAlpha(u.alpha),u.beta!=null&&s.setBeta(u.beta),u.distance!=null&&s.setDistance(u.distance),u.center!=null&&s.setCenter(u.center),u.orthographicSize!=null&&s.setOrthographicSize(u.orthographicSize),s._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var o=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=o*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),!!this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var o=this._rotateVelocity;this._phi=o.y*e/20+this._phi,this._theta=o.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(o,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var o=this.getCamera(),s=this._orthoSize,u=s/this.viewGL.viewport.height*this.viewGL.viewport.width;o.left=-u/2,o.right=u/2,o.top=s/2,o.bottom=-s/2},_updatePan:function(e){var o=this._panVelocity,s=this._distance,u=this.getCamera(),y=u.worldTransform.y,D=u.worldTransform.x;this._center.scaleAndAdd(D,-o.x*s/200).scaleAndAdd(y,-o.y*s/200),this._vectorDamping(o,0)},_updateTransform:function(){var e=this.getCamera(),o=new N.Z,s=this._theta+Math.PI/2,u=this._phi+Math.PI/2,y=Math.sin(s);o.x=y*Math.cos(u),o.y=-Math.cos(s),o.z=y*Math.sin(u),e.position.copy(this._center).scaleAndAdd(o,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,o=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){o._rotating=!0},e*1e3))},_vectorDamping:function(e,o){var s=e.len();s=s*o,s<1e-4&&(s=0),e.normalize().scale(s)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,o=Math.asin(e.y),s=Math.atan2(e.x,e.z);this._theta=o,this._phi=-s,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var o=e.offsetX,s=e.offsetY;this.viewGL&&!this.viewGL.containPoint(o,s)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===f[this.rotateMouseButton]?this._mode="rotate":e.event.button===f[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var o=v(this.panSensitivity),s=v(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*s[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*s[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*o[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*o[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var o=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,o)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,o){if(o!==0){var s=e.offsetX,u=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(s,u))){var y;this._projection==="perspective"?y=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):y=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(o>0?-1:1)*y*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var o=this._animators;return o.push(e),e.done(function(){var s=o.indexOf(e);s>=0&&o.splice(s,1)}),e}});Object.defineProperty(n.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}}),G.Z=n},634982:function(te,G){"use strict";function p(O,a,l){var f=O[a];O[a]=O[l],O[l]=f}function E(O,a,l,f,v){var n=l,t=O[a];p(O,a,f);for(var e=l;e<f;e++)v(O[e],t)<0&&(p(O,e,n),n++);return p(O,f,n),n}function I(O,a,l,f){if(l<f){var v=Math.floor((l+f)/2),n=E(O,v,l,f,a);I(O,a,l,n-1),I(O,a,n+1,f)}}function N(){this._parts=[]}N.prototype.step=function(O,a,l){var f=O.length;if(l===0){this._parts=[],this._sorted=!1;var v=Math.floor(f/2);this._parts.push({pivot:v,left:0,right:f-1}),this._currentSortPartIdx=0}if(!this._sorted){var n=this._parts;if(n.length===0)return this._sorted=!0,!0;if(n.length<512){for(var t=0;t<n.length;t++)n[t].pivot=E(O,n[t].pivot,n[t].left,n[t].right,a);for(var e=[],t=0;t<n.length;t++){var o=n[t].left,s=n[t].pivot-1;s>o&&e.push({pivot:Math.floor((s+o)/2),left:o,right:s});var o=n[t].pivot+1,s=n[t].right;s>o&&e.push({pivot:Math.floor((s+o)/2),left:o,right:s})}n=this._parts=e}else for(var t=0;t<Math.floor(n.length/10);t++){var u=n.length-1-this._currentSortPartIdx;if(I(O,a,n[u].left,n[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===n.length)return this._sorted=!0,!0}return!1}},N.sort=I,G.Z=N},782212:function(te,G,p){"use strict";var E=p(400869),I=p(136164),N=E.Z.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var a=this.zr;a.on("mousedown",this._mouseDownHandler),a.on("mousewheel",this._mouseWheelHandler),a.on("globalout",this._mouseUpHandler),a.animation.on("frame",this._update)},setTarget:function(a){this._target=a},setZoom:function(a){this._zoom=Math.max(Math.min(a,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(a){this._dx=a[0],this._dy=a[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(!!this._target&&!!this._needsUpdate){var a=this._target,l=this._zoom;a.position.x=this._dx,a.position.y=this._dy,a.scale.set(l,l,l),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(a){if(!a.target){var l=a.offsetX,f=a.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(l,f))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var v=this._convertPos(l,f);this._x=v.x,this._y=v.y}}},_convertPos:function(a,l){var f=this.viewGL.camera,v=this.viewGL.viewport;return{x:(a-v.x)/v.width*(f.right-f.left)+f.left,y:(l-v.y)/v.height*(f.bottom-f.top)+f.top}},_mouseMoveHandler:function(a){var l=this._convertPos(a.offsetX,a.offsetY);this._dx+=l.x-this._x,this._dy+=l.y-this._y,this._x=l.x,this._y=l.y,this._needsUpdate=!0},_mouseUpHandler:function(a){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(a){a=a.event;var l=a.wheelDelta||-a.detail;if(l!==0){var f=a.offsetX,v=a.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(f,v))){var n=l>0?1.1:.9,t=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=t/this._zoom;var e=this._convertPos(f,v),o=(e.x-this._dx)*(n-1),s=(e.y-this._dy)*(n-1);this._dx-=o,this._dy-=s,this._zoom=t,this._needsUpdate=!0}}},dispose:function(){var a=this.zr;a.off("mousedown",this._mouseDownHandler),a.off("mousemove",this._mouseMoveHandler),a.off("mouseup",this._mouseUpHandler),a.off("mousewheel",this._mouseWheelHandler),a.off("globalout",this._mouseUpHandler),a.animation.off("frame",this._update)}});G.Z=N},79581:function(te,G,p){"use strict";var E=p(670492),I=p(660126);function N(a,l,f,v,n,t,e){this._zr=a,this._x=0,this._y=0,this._rowHeight=0,this.width=v,this.height=n,this.offsetX=l,this.offsetY=f,this.dpr=e,this.gap=t}N.prototype={constructor:N,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(l,f,v){var n=l.getBoundingRect();f==null&&(f=n.width),v==null&&(v=n.height),f*=this.dpr,v*=this.dpr,this._fitElement(l,f,v);var t=this._x,e=this._y,o=this.width*this.dpr,s=this.height*this.dpr,u=this.gap;if(t+f+u>o&&(t=this._x=0,e+=this._rowHeight+u,this._y=e,this._rowHeight=0),this._x+=f+u,this._rowHeight=Math.max(this._rowHeight,v),e+v+u>s)return null;l.x+=this.offsetX*this.dpr+t,l.y+=this.offsetY*this.dpr+e,this._zr.add(l);var y=[this.offsetX/this.width,this.offsetY/this.height],D=[[t/o+y[0],e/s+y[1]],[(t+f)/o+y[0],(e+v)/s+y[1]]];return D},_fitElement:function(l,f,v){var n=l.getBoundingRect(),t=f/n.width,e=v/n.height;l.x=-n.x*t,l.y=-n.y*e,l.scaleX=t,l.scaleY=e,l.update()}};function O(a){a=a||{},a.width=a.width||512,a.height=a.height||512,a.devicePixelRatio=a.devicePixelRatio||1,a.gap=a.gap==null?2:a.gap;var l=document.createElement("canvas");l.width=a.width*a.devicePixelRatio,l.height=a.height*a.devicePixelRatio,this._canvas=l,this._texture=new I.Z({image:l,flipY:!1});var f=this;this._zr=E.x_.init(l);var v=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){v.call(this),f._texture.dirty(),f.onupdate&&f.onupdate()},this._dpr=a.devicePixelRatio,this._coords={},this.onupdate=a.onupdate,this._gap=a.gap,this._textureAtlasNodes=[new N(this._zr,0,0,a.width,a.height,this._gap,this._dpr)],this._nodeWidth=a.width,this._nodeHeight=a.height,this._currentNodeIdx=0}O.prototype={clear:function(){for(var l=0;l<this._textureAtlasNodes.length;l++)this._textureAtlasNodes[l].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var l=4096/this._dpr,f=this._textureAtlasNodes,v=f.length,n=v*this._nodeWidth%l,t=Math.floor(v*this._nodeWidth/l)*this._nodeHeight;if(!(t>=l)){var e=(n+this._nodeWidth)*this._dpr,o=(t+this._nodeHeight)*this._dpr;try{this._zr.resize({width:e,height:o})}catch(u){this._canvas.width=e,this._canvas.height=o}var s=new N(this._zr,n,t,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(l,f,v){if(this._coords[l.id])return this._coords[l.id];var n=this._getCurrentNode().add(l,f,v);if(!n){var t=this._expand();if(!t)return;n=t.add(l,f,v)}return this._coords[l.id]=n,n},getCoordsScale:function(){var l=this._dpr;return[this._nodeWidth/this._canvas.width*l,this._nodeHeight/this._canvas.height*l]},getCoords:function(l){return this._coords[l]},dispose:function(){this._zr.dispose()}},G.Z=O},399071:function(te,G){"use strict";G.Z=p;function p(i,c,r){r=r||2;var d=c&&c.length,h=d?c[0]*r:i.length,m=E(i,0,h,r,!0),_=[];if(!m)return _;var L,R,K,Q,q,k,j;if(d&&(m=v(i,c,m,r)),i.length>80*r){L=K=i[0],R=Q=i[1];for(var re=r;re<h;re+=r)q=i[re],k=i[re+1],q<L&&(L=q),k<R&&(R=k),q>K&&(K=q),k>Q&&(Q=k);j=Math.max(K-L,Q-R)}return N(m,_,r,L,R,j),_}function E(i,c,r,d,h){var m,_;if(h===H(i,c,r,d)>0)for(m=c;m<r;m+=d)_=X(m,i[m],i[m+1],_);else for(m=r-d;m>=c;m-=d)_=X(m,i[m],i[m+1],_);return _&&w(_,_.next)&&(Y(_),_=_.next),_}function I(i,c){if(!i)return i;c||(c=i);var r=i,d;do if(d=!1,!r.steiner&&(w(r,r.next)||x(r.prev,r,r.next)===0)){if(Y(r),r=c=r.prev,r===r.next)return null;d=!0}else r=r.next;while(d||r!==c);return c}function N(i,c,r,d,h,m,_){if(!!i){!_&&m&&o(i,d,h,m);for(var L=i,R,K;i.prev!==i.next;){if(R=i.prev,K=i.next,m?a(i,d,h,m):O(i)){c.push(R.i/r),c.push(i.i/r),c.push(K.i/r),Y(i),i=K.next,L=K.next;continue}if(i=K,i===L){_?_===1?(i=l(i,c,r),N(i,c,r,d,h,m,2)):_===2&&f(i,c,r,d,h,m):N(I(i),c,r,d,h,m,1);break}}}}function O(i){var c=i.prev,r=i,d=i.next;if(x(c,r,d)>=0)return!1;for(var h=i.next.next;h!==i.prev;){if(D(c.x,c.y,r.x,r.y,d.x,d.y,h.x,h.y)&&x(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function a(i,c,r,d){var h=i.prev,m=i,_=i.next;if(x(h,m,_)>=0)return!1;for(var L=h.x<m.x?h.x<_.x?h.x:_.x:m.x<_.x?m.x:_.x,R=h.y<m.y?h.y<_.y?h.y:_.y:m.y<_.y?m.y:_.y,K=h.x>m.x?h.x>_.x?h.x:_.x:m.x>_.x?m.x:_.x,Q=h.y>m.y?h.y>_.y?h.y:_.y:m.y>_.y?m.y:_.y,q=u(L,R,c,r,d),k=u(K,Q,c,r,d),j=i.nextZ;j&&j.z<=k;){if(j!==i.prev&&j!==i.next&&D(h.x,h.y,m.x,m.y,_.x,_.y,j.x,j.y)&&x(j.prev,j,j.next)>=0)return!1;j=j.nextZ}for(j=i.prevZ;j&&j.z>=q;){if(j!==i.prev&&j!==i.next&&D(h.x,h.y,m.x,m.y,_.x,_.y,j.x,j.y)&&x(j.prev,j,j.next)>=0)return!1;j=j.prevZ}return!0}function l(i,c,r){var d=i;do{var h=d.prev,m=d.next.next;!w(h,m)&&z(h,d,d.next,m)&&C(h,m)&&C(m,h)&&(c.push(h.i/r),c.push(d.i/r),c.push(m.i/r),Y(d),Y(d.next),d=i=m),d=d.next}while(d!==i);return d}function f(i,c,r,d,h,m){var _=i;do{for(var L=_.next.next;L!==_.prev;){if(_.i!==L.i&&Z(_,L)){var R=P(_,L);_=I(_,_.next),R=I(R,R.next),N(_,c,r,d,h,m),N(R,c,r,d,h,m);return}L=L.next}_=_.next}while(_!==i)}function v(i,c,r,d){var h=[],m,_,L,R,K;for(m=0,_=c.length;m<_;m++)L=c[m]*d,R=m<_-1?c[m+1]*d:i.length,K=E(i,L,R,d,!1),K===K.next&&(K.steiner=!0),h.push(y(K));for(h.sort(n),m=0;m<h.length;m++)t(h[m],r),r=I(r,r.next);return r}function n(i,c){return i.x-c.x}function t(i,c){if(c=e(i,c),c){var r=P(c,i);I(r,r.next)}}function e(i,c){var r=c,d=i.x,h=i.y,m=-Infinity,_;do{if(h<=r.y&&h>=r.next.y&&r.next.y!==r.y){var L=r.x+(h-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(L<=d&&L>m){if(m=L,L===d){if(h===r.y)return r;if(h===r.next.y)return r.next}_=r.x<r.next.x?r:r.next}}r=r.next}while(r!==c);if(!_)return null;if(d===m)return _.prev;var R=_,K=_.x,Q=_.y,q=Infinity,k;for(r=_.next;r!==R;)d>=r.x&&r.x>=K&&d!==r.x&&D(h<Q?d:m,h,K,Q,h<Q?m:d,h,r.x,r.y)&&(k=Math.abs(h-r.y)/(d-r.x),(k<q||k===q&&r.x>_.x)&&C(r,i)&&(_=r,q=k)),r=r.next;return _}function o(i,c,r,d){var h=i;do h.z===null&&(h.z=u(h.x,h.y,c,r,d)),h.prevZ=h.prev,h.nextZ=h.next,h=h.next;while(h!==i);h.prevZ.nextZ=null,h.prevZ=null,s(h)}function s(i){var c,r,d,h,m,_,L,R,K=1;do{for(r=i,i=null,m=null,_=0;r;){for(_++,d=r,L=0,c=0;c<K&&(L++,d=d.nextZ,!!d);c++);for(R=K;L>0||R>0&&d;)L!==0&&(R===0||!d||r.z<=d.z)?(h=r,r=r.nextZ,L--):(h=d,d=d.nextZ,R--),m?m.nextZ=h:i=h,h.prevZ=m,m=h;r=d}m.nextZ=null,K*=2}while(_>1);return i}function u(i,c,r,d,h){return i=32767*(i-r)/h,c=32767*(c-d)/h,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,c=(c|c<<8)&16711935,c=(c|c<<4)&252645135,c=(c|c<<2)&858993459,c=(c|c<<1)&1431655765,i|c<<1}function y(i){var c=i,r=i;do c.x<r.x&&(r=c),c=c.next;while(c!==i);return r}function D(i,c,r,d,h,m,_,L){return(h-_)*(c-L)-(i-_)*(m-L)>=0&&(i-_)*(d-L)-(r-_)*(c-L)>=0&&(r-_)*(m-L)-(h-_)*(d-L)>=0}function Z(i,c){return i.next.i!==c.i&&i.prev.i!==c.i&&!V(i,c)&&C(i,c)&&C(c,i)&&M(i,c)}function x(i,c,r){return(c.y-i.y)*(r.x-c.x)-(c.x-i.x)*(r.y-c.y)}function w(i,c){return i.x===c.x&&i.y===c.y}function z(i,c,r,d){return w(i,c)&&w(r,d)||w(i,d)&&w(r,c)?!0:x(i,c,r)>0!=x(i,c,d)>0&&x(r,d,i)>0!=x(r,d,c)>0}function V(i,c){var r=i;do{if(r.i!==i.i&&r.next.i!==i.i&&r.i!==c.i&&r.next.i!==c.i&&z(r,r.next,i,c))return!0;r=r.next}while(r!==i);return!1}function C(i,c){return x(i.prev,i,i.next)<0?x(i,c,i.next)>=0&&x(i,i.prev,c)>=0:x(i,c,i.prev)<0||x(i,i.next,c)<0}function M(i,c){var r=i,d=!1,h=(i.x+c.x)/2,m=(i.y+c.y)/2;do r.y>m!=r.next.y>m&&r.next.y!==r.y&&h<(r.next.x-r.x)*(m-r.y)/(r.next.y-r.y)+r.x&&(d=!d),r=r.next;while(r!==i);return d}function P(i,c){var r=new U(i.i,i.x,i.y),d=new U(c.i,c.x,c.y),h=i.next,m=c.prev;return i.next=c,c.prev=i,r.next=h,h.prev=r,d.next=r,r.prev=d,m.next=d,d.prev=m,d}function X(i,c,r,d){var h=new U(i,c,r);return d?(h.next=d.next,h.prev=d,d.next.prev=h,d.next=h):(h.prev=h,h.next=h),h}function Y(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function U(i,c,r){this.i=i,this.x=c,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}p.deviation=function(i,c,r,d){var h=c&&c.length,m=h?c[0]*r:i.length,_=Math.abs(H(i,0,m,r));if(h)for(var L=0,R=c.length;L<R;L++){var K=c[L]*r,Q=L<R-1?c[L+1]*r:i.length;_-=Math.abs(H(i,K,Q,r))}var q=0;for(L=0;L<d.length;L+=3){var k=d[L]*r,j=d[L+1]*r,re=d[L+2]*r;q+=Math.abs((i[k]-i[re])*(i[j+1]-i[k+1])-(i[k]-i[j])*(i[re+1]-i[k+1]))}return _===0&&q===0?0:Math.abs((q-_)/_)};function H(i,c,r,d){for(var h=0,m=c,_=r-d;m<r;m+=d)h+=(i[_]-i[m])*(i[m+1]+i[_+1]),_=m;return h}},60717:function(te,G,p){"use strict";var E=p(670492),I={};I.getFormattedLabel=function(N,O,a,l,f){a=a||"normal";var v=N.getData(l),n=v.getItemModel(O),t=N.getDataParams(O,l);f!=null&&t.value instanceof Array&&(t.value=t.value[f]);var e=n.get(a==="normal"?["label","formatter"]:["emphasis","label","formatter"]);e==null&&(e=n.get(["label","formatter"]));var o;return typeof e=="function"?(t.status=a,o=e(t)):typeof e=="string"&&(o=E.WU.formatTpl(e,t)),o},I.normalizeToArray=function(N){return N instanceof Array?N:N==null?[]:[N]},G.Z=I},502616:function(te,G,p){"use strict";var E=p(670492),I=p(959101),N=p(13538),O=p(318586),a=p(372541),l=a.Z.vec3,f=a.Z.mat3,v=O.Z.extend(function(){return{attributes:{position:new O.Z.Attribute("position","float",3,"POSITION"),normal:new O.Z.Attribute("normal","float",3,"NORMAL"),color:new O.Z.Attribute("color","float",4,"COLOR"),prevPosition:new O.Z.Attribute("prevPosition","float",3),prevNormal:new O.Z.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(t){var e=this.enableNormal,o=this.getBarVertexCount()*t,s=this.getBarTriangleCount()*t;this.vertexCount!==o&&(this.attributes.position.init(o),e?this.attributes.normal.init(o):this.attributes.normal.value=null,this.attributes.color.init(o)),this.triangleCount!==s&&(this.indices=o>65535?new Uint32Array(s*3):new Uint16Array(s*3),this._dataIndices=new Uint32Array(o))},getBarVertexCount:function(){var t=this.bevelSize>0?this.bevelSegments:0;return t>0?this._getBevelBarVertexCount(t):this.enableNormal?24:8},getBarTriangleCount:function(){var t=this.bevelSize>0?this.bevelSegments:0;return t>0?this._getBevelBarTriangleCount(t):12},_getBevelBarVertexCount:function(t){return(t+1)*4*(t+1)*2},_getBevelBarTriangleCount:function(t){var e=t*4+3,o=t*2+1;return(e+1)*o*2+4},setColor:function(t,e){for(var o=this.getBarVertexCount(),s=o*t,u=o*(t+1),y=s;y<u;y++)this.attributes.color.set(y,e);this.dirtyAttribute("color")},getDataIndexOfVertex:function(t){return this._dataIndices?this._dataIndices[t]:null},addBar:function(){for(var n=l.create,t=l.scaleAndAdd,e=n(),o=n(),s=n(),u=n(),y=n(),D=n(),Z=n(),x=[],w=[],z=0;z<8;z++)x[z]=n();for(var V=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],C=[0,1,2,0,2,3],M=[],z=0;z<V.length;z++)for(var P=V[z],X=0;X<2;X++){for(var Y=[],U=0;U<3;U++)Y.push(P[C[X*3+U]]);M.push(Y)}return function(H,i,c,r,d,h){var m=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(H,i,c,r,this.bevelSize,this.bevelSegments,d);else{l.copy(s,i),l.normalize(s,s),l.cross(u,c,s),l.normalize(u,u),l.cross(o,s,u),l.normalize(u,u),l.negate(y,o),l.negate(D,s),l.negate(Z,u),t(x[0],H,o,r[0]/2),t(x[0],x[0],u,r[2]/2),t(x[1],H,o,r[0]/2),t(x[1],x[1],Z,r[2]/2),t(x[2],H,y,r[0]/2),t(x[2],x[2],Z,r[2]/2),t(x[3],H,y,r[0]/2),t(x[3],x[3],u,r[2]/2),t(e,H,s,r[1]),t(x[4],e,o,r[0]/2),t(x[4],x[4],u,r[2]/2),t(x[5],e,o,r[0]/2),t(x[5],x[5],Z,r[2]/2),t(x[6],e,y,r[0]/2),t(x[6],x[6],Z,r[2]/2),t(x[7],e,y,r[0]/2),t(x[7],x[7],u,r[2]/2);var _=this.attributes;if(this.enableNormal){w[0]=o,w[1]=y,w[2]=s,w[3]=D,w[4]=u,w[5]=Z;for(var L=this._vertexOffset,R=0;R<V.length;R++){for(var K=this._triangleOffset*3,Q=0;Q<6;Q++)this.indices[K++]=L+C[Q];L+=4,this._triangleOffset+=2}for(var R=0;R<V.length;R++)for(var q=w[R],Q=0;Q<4;Q++){var k=V[R][Q];_.position.set(this._vertexOffset,x[k]),_.normal.set(this._vertexOffset,q),_.color.set(this._vertexOffset++,d)}}else{for(var R=0;R<M.length;R++){for(var K=this._triangleOffset*3,Q=0;Q<3;Q++)this.indices[K+Q]=M[R][Q]+this._vertexOffset;this._triangleOffset++}for(var R=0;R<x.length;R++)_.position.set(this._vertexOffset,x[R]),_.color.set(this._vertexOffset++,d)}}for(var j=this._vertexOffset,R=m;R<j;R++)this._dataIndices[R]=h}}(),_addBevelBar:function(){var n=l.create(),t=l.create(),e=l.create(),o=f.create(),s=[],u=[1,-1,-1,1],y=[1,1,-1,-1],D=[2,0];return function(Z,x,w,z,V,C,M){l.copy(t,x),l.normalize(t,t),l.cross(e,w,t),l.normalize(e,e),l.cross(n,t,e),l.normalize(e,e),o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=t[0],o[4]=t[1],o[5]=t[2],o[6]=e[0],o[7]=e[1],o[8]=e[2],V=Math.min(z[0],z[2])/2*V;for(var P=0;P<3;P++)s[P]=Math.max(z[P]-V*2,0);for(var X=(z[0]-s[0])/2,Y=(z[1]-s[1])/2,U=(z[2]-s[2])/2,H=[],i=[],c=this._vertexOffset,r=[],P=0;P<2;P++){r[P]=r[P]=[];for(var d=0;d<=C;d++)for(var h=0;h<4;h++){(d===0&&P===0||P===1&&d===C)&&r[P].push(c);for(var m=0;m<=C;m++){var _=m/C*Math.PI/2+Math.PI/2*h,L=d/C*Math.PI/2+Math.PI/2*P;i[0]=X*Math.cos(_)*Math.sin(L),i[1]=Y*Math.cos(L),i[2]=U*Math.sin(_)*Math.sin(L),H[0]=i[0]+u[h]*s[0]/2,H[1]=i[1]+Y+D[P]*s[1]/2,H[2]=i[2]+y[h]*s[2]/2,Math.abs(X-Y)<1e-6&&Math.abs(Y-U)<1e-6||(i[0]/=X*X,i[1]/=Y*Y,i[2]/=U*U),l.normalize(i,i),l.transformMat3(H,H,o),l.transformMat3(i,i,o),l.add(H,H,Z),this.attributes.position.set(c,H),this.enableNormal&&this.attributes.normal.set(c,i),this.attributes.color.set(c,M),c++}}}for(var R=C*4+3,K=C*2+1,Q=R+1,h=0;h<K;h++)for(var P=0;P<=R;P++){var q=h*Q+P+this._vertexOffset,k=h*Q+(P+1)%Q+this._vertexOffset,j=(h+1)*Q+(P+1)%Q+this._vertexOffset,re=(h+1)*Q+P+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[j,q,k]),this.setTriangleIndices(this._triangleOffset++,[j,re,q])}this.setTriangleIndices(this._triangleOffset++,[r[0][0],r[0][2],r[0][1]]),this.setTriangleIndices(this._triangleOffset++,[r[0][0],r[0][3],r[0][2]]),this.setTriangleIndices(this._triangleOffset++,[r[1][0],r[1][1],r[1][2]]),this.setTriangleIndices(this._triangleOffset++,[r[1][0],r[1][2],r[1][3]]),this._vertexOffset=c}}()});E.D5.defaults(v.prototype,I.Z),E.D5.defaults(v.prototype,N.Z),G.Z=v},220914:function(te,G,p){"use strict";var E=p(318586),I=p(670492),N=p(959101),O=p(372541),a=O.Z.vec2,l=[[0,0],[1,1]],f=E.Z.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new E.Z.Attribute("position","float",2,"POSITION"),normal:new E.Z.Attribute("normal","float",2),offset:new E.Z.Attribute("offset","float",1),color:new E.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(n){var t=this.attributes;this.vertexCount!==n&&(t.position.init(n),t.color.init(n),this.useNativeLine||(t.offset.init(n),t.normal.init(n)),n>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(n){this.triangleCount!==n&&(n===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(n*3):new Uint16Array(n*3))},_getCubicCurveApproxStep:function(n,t,e,o){var s=a.dist(n,t)+a.dist(e,t)+a.dist(o,e),u=1/(s+1)*this.segmentScale;return u},getCubicCurveVertexCount:function(n,t,e,o){var s=this._getCubicCurveApproxStep(n,t,e,o),u=Math.ceil(1/s);return this.useNativeLine?u*2:u*2+2},getCubicCurveTriangleCount:function(n,t,e,o){var s=this._getCubicCurveApproxStep(n,t,e,o),u=Math.ceil(1/s);return this.useNativeLine?0:u*2},getLineVertexCount:function(){return this.getPolylineVertexCount(l)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(l)},getPolylineVertexCount:function(n){var t;if(typeof n=="number")t=n;else{var e=typeof n[0]!="number";t=e?n.length:n.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(n){var t;if(typeof n=="number")t=n;else{var e=typeof n[0]!="number";t=e?n.length:n.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(n,t,e,o,s,u){u==null&&(u=1);for(var y=n[0],D=n[1],Z=t[0],x=t[1],w=e[0],z=e[1],V=o[0],C=o[1],M=this._getCubicCurveApproxStep(n,t,e,o),P=M*M,X=P*M,Y=3*M,U=3*P,H=6*P,i=6*X,c=y-Z*2+w,r=D-x*2+z,d=(Z-w)*3-y+V,h=(x-z)*3-D+C,m=y,_=D,L=(Z-y)*Y+c*U+d*X,R=(x-D)*Y+r*U+h*X,K=c*H+d*i,Q=r*H+h*i,q=d*i,k=h*i,j=0,re=0,fe=Math.ceil(1/M),se=new Float32Array((fe+1)*3),se=[],le=0,re=0;re<fe+1;re++)se[le++]=m,se[le++]=_,m+=L,_+=R,L+=K,R+=Q,K+=q,Q+=k,j+=M,j>1&&(m=L>0?Math.min(m,V):Math.max(m,V),_=R>0?Math.min(_,C):Math.max(_,C));this.addPolyline(se,s,u)},addLine:function(n,t,e,o){this.addPolyline([n,t],e,o)},addPolyline:function(){var v=a.create(),n=a.create(),t=a.create(),e=a.create(),o=[],s=[],u=[];return function(y,D,Z,x,w){if(!!y.length){var z=typeof y[0]!="number";if(w==null&&(w=z?y.length:y.length/2),!(w<2)){x==null&&(x=0),Z==null&&(Z=1),this._itemVertexOffsets.push(this._vertexOffset);for(var V=z?typeof D[0]!="number":D.length/4===w,C=this.attributes.position,M=this.attributes.color,P=this.attributes.offset,X=this.attributes.normal,Y=this.indices,U=this._vertexOffset,H,i=0;i<w;i++){if(z)o=y[i+x],V?H=D[i+x]:H=D;else{var c=i*2+x;if(o=o||[],o[0]=y[c],o[1]=y[c+1],V){var r=i*4+x;H=H||[],H[0]=D[r],H[1]=D[r+1],H[2]=D[r+2],H[3]=D[r+3]}else H=D}if(this.useNativeLine)i>1&&(C.copy(U,U-1),M.copy(U,U-1),U++);else{var d;if(i<w-1){if(z)a.copy(s,y[i+1]);else{var c=(i+1)*2+x;s=s||[],s[0]=y[c],s[1]=y[c+1]}if(i>0){a.sub(v,o,u),a.sub(n,s,o),a.normalize(v,v),a.normalize(n,n),a.add(e,v,n),a.normalize(e,e);var h=Z/2*Math.min(1/a.dot(v,e),2);t[0]=-e[1],t[1]=e[0],d=h}else a.sub(v,s,o),a.normalize(v,v),t[0]=-v[1],t[1]=v[0],d=Z/2}else a.sub(v,o,u),a.normalize(v,v),t[0]=-v[1],t[1]=v[0],d=Z/2;X.set(U,t),X.set(U+1,t),P.set(U,d),P.set(U+1,-d),a.copy(u,o),C.set(U,o),C.set(U+1,o),M.set(U,H),M.set(U+1,H),U+=2}if(this.useNativeLine)M.set(U,H),C.set(U,o),U++;else if(i>0){var m=this._faceOffset*3,Y=this.indices;Y[m]=U-4,Y[m+1]=U-3,Y[m+2]=U-2,Y[m+3]=U-3,Y[m+4]=U-1,Y[m+5]=U-2,this._faceOffset+=2}}this._vertexOffset=U}}}}(),setItemColor:function(n,t){for(var e=this._itemVertexOffsets[n],o=n<this._itemVertexOffsets.length-1?this._itemVertexOffsets[n+1]:this._vertexOffset,s=e;s<o;s++)this.attributes.color.set(s,t);this.dirty("color")}});I.D5.defaults(f.prototype,N.Z),G.Z=f},581408:function(te,G,p){"use strict";var E=p(318586),I=p(670492),N=p(959101),O=p(372541),a=O.Z.vec3,l=[[0,0],[1,1]],f=E.Z.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new E.Z.Attribute("position","float",3,"POSITION"),positionPrev:new E.Z.Attribute("positionPrev","float",3),positionNext:new E.Z.Attribute("positionNext","float",3),prevPositionPrev:new E.Z.Attribute("prevPositionPrev","float",3),prevPosition:new E.Z.Attribute("prevPosition","float",3),prevPositionNext:new E.Z.Attribute("prevPositionNext","float",3),offset:new E.Z.Attribute("offset","float",1),color:new E.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(n){var t=this.attributes;this.vertexCount!==n&&(t.position.init(n),t.color.init(n),this.useNativeLine||(t.positionPrev.init(n),t.positionNext.init(n),t.offset.init(n)),n>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(n){this.triangleCount!==n&&(n===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(n*3):new Uint16Array(n*3))},_getCubicCurveApproxStep:function(n,t,e,o){var s=a.dist(n,t)+a.dist(e,t)+a.dist(o,e),u=1/(s+1)*this.segmentScale;return u},getCubicCurveVertexCount:function(n,t,e,o){var s=this._getCubicCurveApproxStep(n,t,e,o),u=Math.ceil(1/s);return this.useNativeLine?u*2:u*2+2},getCubicCurveTriangleCount:function(n,t,e,o){var s=this._getCubicCurveApproxStep(n,t,e,o),u=Math.ceil(1/s);return this.useNativeLine?0:u*2},getLineVertexCount:function(){return this.getPolylineVertexCount(l)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(l)},getPolylineVertexCount:function(n){var t;if(typeof n=="number")t=n;else{var e=typeof n[0]!="number";t=e?n.length:n.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(n){var t;if(typeof n=="number")t=n;else{var e=typeof n[0]!="number";t=e?n.length:n.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(n,t,e,o,s,u){u==null&&(u=1);for(var y=n[0],D=n[1],Z=n[2],x=t[0],w=t[1],z=t[2],V=e[0],C=e[1],M=e[2],P=o[0],X=o[1],Y=o[2],U=this._getCubicCurveApproxStep(n,t,e,o),H=U*U,i=H*U,c=3*U,r=3*H,d=6*H,h=6*i,m=y-x*2+V,_=D-w*2+C,L=Z-z*2+M,R=(x-V)*3-y+P,K=(w-C)*3-D+X,Q=(z-M)*3-Z+Y,q=y,k=D,j=Z,re=(x-y)*c+m*r+R*i,fe=(w-D)*c+_*r+K*i,se=(z-Z)*c+L*r+Q*i,le=m*d+R*h,_e=_*d+K*h,ge=L*d+Q*h,Ce=R*h,Te=K*h,ye=Q*h,pe=0,he=0,de=Math.ceil(1/U),ce=new Float32Array((de+1)*3),ce=[],me=0,he=0;he<de+1;he++)ce[me++]=q,ce[me++]=k,ce[me++]=j,q+=re,k+=fe,j+=se,re+=le,fe+=_e,se+=ge,le+=Ce,_e+=Te,ge+=ye,pe+=U,pe>1&&(q=re>0?Math.min(q,P):Math.max(q,P),k=fe>0?Math.min(k,X):Math.max(k,X),j=se>0?Math.min(j,Y):Math.max(j,Y));return this.addPolyline(ce,s,u)},addLine:function(n,t,e,o){return this.addPolyline([n,t],e,o)},addPolyline:function(n,t,e,o,s){if(!!n.length){var u=typeof n[0]!="number";if(s==null&&(s=u?n.length:n.length/3),!(s<2)){o==null&&(o=0),e==null&&(e=1),this._itemVertexOffsets.push(this._vertexOffset);var u=typeof n[0]!="number",y=u?typeof t[0]!="number":t.length/4===s,D=this.attributes.position,Z=this.attributes.positionPrev,x=this.attributes.positionNext,w=this.attributes.color,z=this.attributes.offset,V=this.indices,C=this._vertexOffset,M,P;e=Math.max(e,.01);for(var X=o;X<s;X++){if(u)M=n[X],y?P=t[X]:P=t;else{var Y=X*3;if(M=M||[],M[0]=n[Y],M[1]=n[Y+1],M[2]=n[Y+2],y){var U=X*4;P=P||[],P[0]=t[U],P[1]=t[U+1],P[2]=t[U+2],P[3]=t[U+3]}else P=t}if(this.useNativeLine?X>1&&(D.copy(C,C-1),w.copy(C,C-1),C++):(X<s-1&&(Z.set(C+2,M),Z.set(C+3,M)),X>0&&(x.set(C-2,M),x.set(C-1,M)),D.set(C,M),D.set(C+1,M),w.set(C,P),w.set(C+1,P),z.set(C,e/2),z.set(C+1,-e/2),C+=2),this.useNativeLine)w.set(C,P),D.set(C,M),C++;else if(X>0){var H=this._triangleOffset*3,V=this.indices;V[H]=C-4,V[H+1]=C-3,V[H+2]=C-2,V[H+3]=C-3,V[H+4]=C-1,V[H+5]=C-2,this._triangleOffset+=2}}if(!this.useNativeLine){var i=this._vertexOffset,c=this._vertexOffset+s*2;Z.copy(i,i+2),Z.copy(i+1,i+3),x.copy(c-1,c-3),x.copy(c-2,c-4)}return this._vertexOffset=C,this._vertexOffset}}},setItemColor:function(n,t){for(var e=this._itemVertexOffsets[n],o=n<this._itemVertexOffsets.length-1?this._itemVertexOffsets[n+1]:this._vertexOffset,s=e;s<o;s++)this.attributes.color.set(s,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});I.D5.defaults(f.prototype,N.Z),G.Z=f},563029:function(te,G,p){"use strict";var E=p(318586),I=p(670492),N=p(959101),O=p(372541),a=O.Z.vec3,l=E.Z.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new E.Z.Attribute("position","float",3,"POSITION"),normal:new E.Z.Attribute("normal","float",3,"NORMAL"),color:new E.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(v){var n=this.attributes,t=this.getQuadVertexCount()*v,e=this.getQuadTriangleCount()*v;this.vertexCount!==t&&(n.position.init(t),n.normal.init(t),n.color.init(t)),this.triangleCount!==e&&(this.indices=t>65535?new Uint32Array(e*3):new Uint16Array(e*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var f=a.create(),v=a.create(),n=a.create(),t=[0,3,1,3,2,1];return function(e,o){var s=this.attributes.position,u=this.attributes.normal,y=this.attributes.color;a.sub(f,e[1],e[0]),a.sub(v,e[2],e[1]),a.cross(n,f,v),a.normalize(n,n);for(var D=0;D<4;D++)s.set(this._vertexOffset+D,e[D]),y.set(this._vertexOffset+D,o),u.set(this._vertexOffset+D,n);for(var Z=this._faceOffset*3,D=0;D<6;D++)this.indices[Z+D]=t[D]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});I.D5.defaults(l.prototype,N.Z),G.Z=l},959101:function(te,G){"use strict";G.Z={convertToDynamicArray:function(E){E&&this.resetOffset();var I=this.attributes;for(var N in I)E||!I[N].value?I[N].value=[]:I[N].value=Array.prototype.slice.call(I[N].value);E||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var E=this.attributes;for(var I in E)E[I].value&&E[I].value.length>0?E[I].value=new Float32Array(E[I].value):E[I].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}}},13538:function(te,G,p){"use strict";var E=p(634982),I=p(372541),N=I.Z.vec3,O=N.create(),a=N.create(),l=N.create();G.Z={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(v,n){var t=this.indices;if(n===0){var e=this.attributes.position,v=v.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new t.constructor(t.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var o=0,s,u=0;u<t.length;){e.get(t[u++],O),e.get(t[u++],a),e.get(t[u++],l);var y=N.sqrDist(O,v),D=N.sqrDist(a,v),Z=N.sqrDist(l,v),x=Math.min(y,D);x=Math.min(x,Z),u===3?(s=x,x=0):x=x-s,this._triangleZList[o++]=x}}for(var w=this._sortedTriangleIndices,u=0;u<w.length;u++)w[u]=u;if(this.triangleCount<2e4)n===0&&this._simpleSort(!0);else for(var u=0;u<3;u++)this._progressiveQuickSort(n*3+u);for(var z=this._indicesTmp,V=this._triangleZListTmp,C=this._triangleZList,u=0;u<this.triangleCount;u++){var M=w[u]*3,P=u*3;z[P++]=t[M++],z[P++]=t[M++],z[P]=t[M],V[u]=C[w[u]]}var X=this._indicesTmp;this._indicesTmp=this.indices,this.indices=X;var X=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=X,this.dirtyIndices()},_simpleSort:function(v){var n=this._triangleZList,t=this._sortedTriangleIndices;function e(o,s){return n[s]-n[o]}v?Array.prototype.sort.call(t,e):E.Z.sort(t,e,0,t.length-1)},_progressiveQuickSort:function(v){var n=this._triangleZList,t=this._sortedTriangleIndices;this._quickSort=this._quickSort||new E.Z,this._quickSort.step(t,function(e,o){return n[o]-n[e]},v)}}},67634:function(te,G,p){"use strict";var E=p(634982),I=p(372541),N=I.Z.vec3;G.Z={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(a,l){var f=this.indices,v=N.create();if(!f){f=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<f.length;n++)f[n]=n}if(l===0){var t=this.attributes.position,a=a.array,e=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var o,n=0;n<this.vertexCount;n++){t.get(n,v);var s=N.sqrDist(v,a);isNaN(s)&&(s=1e7,e++),n===0?(o=s,s=0):s=s-o,this._zList[n]=s}this._noneCount=e}if(this.vertexCount<2e4)l===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(l*3+n);this.dirtyIndices()},_simpleSort:function(a){var l=this._zList,f=this.indices;function v(n,t){return l[t]-l[n]}a?Array.prototype.sort.call(f,v):E.Z.sort(f,v,0,f.length-1)},_progressiveQuickSort:function(a){var l=this._zList,f=this.indices;this._quickSort=this._quickSort||new E.Z,this._quickSort.step(f,function(v,n){return l[n]-l[v]},a)}}},586632:function(te,G,p){"use strict";p.d(G,{Z:function(){return De}});var E=p(10681),I=p(343042),N=p(660126),O=p(791912),a=p(305302),l=p(405905),f=p(370846),v=p(318586),n=p(670492),t=p(409244),e=p(685626),o=p(503810),s=p(654915),u=p(934893),y=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function D(g){return"_on"+g}var Z=function(T){var A=this;this._texture=new N.Z({anisotropic:32,flipY:!1,surface:this,dispose:function(b){A.dispose(),N.Z.prototype.dispose.call(this,b)}}),y.forEach(function(S){this[D(S)]=function(b){!b.triangle||this._meshes.forEach(function($){this.dispatchEvent(S,$,b.triangle,b.point)},this)}},this),this._meshes=[],T&&this.setECharts(T),this.onupdate=null};Z.prototype={constructor:Z,getTexture:function(){return this._texture},setECharts:function(T){this._chart=T;var A=T.getDom();if(!(A instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),A=document.createElement("canvas");else{var S=this,b=T.getZr(),$=b.__oldRefreshImmediately||b.refreshImmediately;b.refreshImmediately=function(){$.call(this),S._texture.dirty(),S.onupdate&&S.onupdate()},b.__oldRefreshImmediately=$}this._texture.image=A,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var g=new s.Z,T=new s.Z,A=new s.Z,S=new u.Z,b=new u.Z,$=new u.Z,B=new u.Z,J=new s.Z;return function(ne,W,ie,ee){var oe=W.geometry,ue=oe.attributes.position,ae=oe.attributes.texcoord0,ve=s.Z.dot,Ee=s.Z.cross;ue.get(ie[0],g.array),ue.get(ie[1],T.array),ue.get(ie[2],A.array),ae.get(ie[0],S.array),ae.get(ie[1],b.array),ae.get(ie[2],$.array),Ee(J,T,A);var Oe=ve(g,J),Ie=ve(ee,J)/Oe;Ee(J,A,g);var Le=ve(ee,J)/Oe;Ee(J,g,T);var we=ve(ee,J)/Oe;u.Z.scale(B,S,Ie),u.Z.scaleAndAdd(B,B,b,Le),u.Z.scaleAndAdd(B,B,$,we);var Se=B.x*this._chart.getWidth(),be=B.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(ne,{zrX:Se,zrY:be})}}(),attachToMesh:function(T){this._meshes.indexOf(T)>=0||(y.forEach(function(A){T.on(A,this[D(A)],this)},this),this._meshes.push(T))},detachFromMesh:function(T){var A=this._meshes.indexOf(T);A>=0&&this._meshes.splice(A,1),y.forEach(function(S){T.off(S,this[D(S)])},this)},dispose:function(){this._meshes.forEach(function(T){this.detachFromMesh(T)},this)}};var x=Z,w=p(994931),z=p(202806),V=p(293301),C=p(136164),M=p(439159),P=p(251643),X=p(117866),Y=p(858690),U=p(255974),H=p(77796),i=p(867313),c=p(678533),r=p(513315),d=p(723104),h=p(950578),m=p(62520),_=p(517468),L=p(372515),R=p(20952),K=p(820001),Q=p(393740),q=p(223263),k=p(921652),j=p(713395),re={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(T,A){this._animators=this._animators||[];var S=this,b;if(T){for(var $=T.split("."),B=S,J=0,ne=$.length;J<ne;J++)!B||(B=B[$[J]]);B&&(b=B)}else b=S;if(b==null)throw new Error("Target "+T+" not exists");var W=this._animators,ie=new j.Z(b,A),ee=this;return ie.during(function(){ee.__zr&&ee.__zr.refresh()}).done(function(){var oe=W.indexOf(ie);oe>=0&&W.splice(oe,1)}),W.push(ie),this.__zr&&this.__zr.animation.addAnimator(ie),ie},stopAnimation:function(T){this._animators=this._animators||[];for(var A=this._animators,S=A.length,b=0;b<S;b++)A[b].stop(T);return A.length=0,this},addAnimatorsToZr:function(T){if(this._animators)for(var A=0;A<this._animators.length;A++)T.animation.addAnimator(this._animators[A])},removeAnimatorsFromZr:function(T){if(this._animators)for(var A=0;A<this._animators.length;A++)T.animation.removeAnimator(this._animators[A])}},fe=re,se=p(434272),le=p(113425),_e=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,ge=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Ce=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Te=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ye=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,pe=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(f.Z.prototype,fe),a.Z.import(se.Z),a.Z.import(le.Z),a.Z.import(_e),a.Z.import(ge),a.Z.import(Ce),a.Z.import(Te),a.Z.import(ye),a.Z.import(pe);function he(g){return!g||g==="none"}function de(g){return g instanceof HTMLCanvasElement||g instanceof HTMLImageElement||g instanceof Image}function ce(g){return g.getZr&&g.setOption}var me=t.Z.prototype.addToScene,Ne=t.Z.prototype.removeFromScene;t.Z.prototype.addToScene=function(g){if(me.call(this,g),this.__zr){var T=this.__zr;g.traverse(function(A){A.__zr=T,A.addAnimatorsToZr&&A.addAnimatorsToZr(T)})}},t.Z.prototype.removeFromScene=function(g){Ne.call(this,g),g.traverse(function(T){var A=T.__zr;T.__zr=null,A&&T.removeAnimatorsFromZr&&T.removeAnimatorsFromZr(A)})},l.Z.prototype.setTextureImage=function(g,T,A,S){if(!!this.shader){var b=A.getZr(),$=this,B;return $.autoUpdateTextureStatus=!1,$.disableTexture(g),he(T)||(B=F.loadTexture(T,A,S,function(J){$.enableTexture(g),b&&b.refresh()}),$.set(g,B)),B}};var F={};F.Renderer=I.Z,F.Node=f.Z,F.Mesh=E.Z,F.Shader=a.Z,F.Material=l.Z,F.Texture=O.Z,F.Texture2D=N.Z,F.Geometry=v.Z,F.SphereGeometry=M.Z,F.PlaneGeometry=P.Z,F.CubeGeometry=X.Z,F.AmbientLight=Y.Z,F.DirectionalLight=U.Z,F.PointLight=H.Z,F.SpotLight=i.Z,F.PerspectiveCamera=c.Z,F.OrthographicCamera=r.Z,F.Vector2=u.Z,F.Vector3=s.Z,F.Vector4=d.Z,F.Quaternion=h.Z,F.Matrix2=m.Z,F.Matrix2d=_.Z,F.Matrix3=L.Z,F.Matrix4=R.Z,F.Plane=K.Z,F.Ray=Q.Z,F.BoundingBox=q.Z,F.Frustum=k.Z;var xe=null;function Pe(){return xe!==null||(xe=o.Z.createBlank("rgba(255,255,255,0)").image),xe}function Ae(g){return Math.pow(2,Math.round(Math.log(g)/Math.LN2))}function Me(g){if((g.wrapS===O.Z.REPEAT||g.wrapT===O.Z.REPEAT)&&g.image){var T=Ae(g.width),A=Ae(g.height);if(T!==g.width||A!==g.height){var S=document.createElement("canvas");S.width=T,S.height=A;var b=S.getContext("2d");b.drawImage(g.image,0,0,T,A),g.image=S}}}F.loadTexture=function(g,T,A,S){typeof A=="function"&&(S=A,A={}),A=A||{};for(var b=Object.keys(A).sort(),$="",B=0;B<b.length;B++)$+=b[B]+"_"+A[b[B]]+"_";var J=T.__textureCache=T.__textureCache||new e.ZP(20);if(ce(g)){var ne=g.__textureid__,W=J.get($+ne);if(W)W.texture.surface.setECharts(g),S&&S(W.texture);else{var ie=new x(g);ie.onupdate=function(){T.getZr().refresh()},W={texture:ie.getTexture()};for(var B=0;B<b.length;B++)W.texture[b[B]]=A[b[B]];ne=g.__textureid__||"__ecgl_ec__"+W.texture.__uid__,g.__textureid__=ne,J.put($+ne,W),S&&S(W.texture)}return W.texture}else if(de(g)){var ne=g.__textureid__,W=J.get($+ne);if(!W){W={texture:new F.Texture2D({image:g})};for(var B=0;B<b.length;B++)W.texture[b[B]]=A[b[B]];ne=g.__textureid__||"__ecgl_image__"+W.texture.__uid__,g.__textureid__=ne,J.put($+ne,W),Me(W.texture),S&&S(W.texture)}return W.texture}else{var W=J.get($+g);if(W)W.callbacks?W.callbacks.push(S):S&&S(W.texture);else if(g.match(/.hdr$|^data:application\/octet-stream/)){W={callbacks:[S]};var ee=o.Z.loadTexture(g,{exposure:A.exposure,fileType:"hdr"},function(){ee.dirty(),W.callbacks.forEach(function(ae){ae&&ae(ee)}),W.callbacks=null});W.texture=ee,J.put($+g,W)}else{for(var ee=new F.Texture2D({image:new Image}),B=0;B<b.length;B++)ee[b[B]]=A[b[B]];W={texture:ee,callbacks:[S]};var oe=ee.image;oe.onload=function(){ee.image=oe,Me(ee),ee.dirty(),W.callbacks.forEach(function(ve){ve&&ve(ee)}),W.callbacks=null},oe.crossOrigin="Anonymous",oe.src=g,ee.image=Pe(),J.put($+g,W)}return W.texture}},F.createAmbientCubemap=function(g,T,A,S){g=g||{};var b=g.texture,$=C.Z.firstNotNull(g.exposure,1),B=new w.Z({intensity:C.Z.firstNotNull(g.specularIntensity,1)}),J=new z.Z({intensity:C.Z.firstNotNull(g.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return B.cubemap=F.loadTexture(b,A,{exposure:$},function(){if(B.cubemap.flipY=!1,!1)var ne;if(B.prefilter(T,32),!1)var W;J.coefficients=V.Z.projectEnvironmentMap(T,B.cubemap,{lod:1}),S&&S()}),{specular:B,diffuse:J}},F.createBlankTexture=o.Z.createBlank,F.isImage=de,F.additiveBlend=function(g){g.blendEquation(g.FUNC_ADD),g.blendFunc(g.SRC_ALPHA,g.ONE)},F.parseColor=function(g,T){return g instanceof Array?(T||(T=[]),T[0]=g[0],T[1]=g[1],T[2]=g[2],g.length>3?T[3]=g[3]:T[3]=1,T):(T=n.$_.parse(g||"#000",T)||[0,0,0,0],T[0]/=255,T[1]/=255,T[2]/=255,T)},F.directionFromAlphaBeta=function(g,T){var A=g/180*Math.PI+Math.PI/2,S=-T/180*Math.PI+Math.PI/2,b=[],$=Math.sin(A);return b[0]=$*Math.cos(S),b[1]=-Math.cos(A),b[2]=$*Math.sin(S),b},F.getShadowResolution=function(g){var T=1024;switch(g){case"low":T=512;break;case"medium":break;case"high":T=2048;break;case"ultra":T=4096;break}return T},F.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"],F.createShader=function(g){g==="ecgl.shadow"&&(g="ecgl.displayShadow");var T=a.Z.source(g+".vertex"),A=a.Z.source(g+".fragment");T||console.error("Vertex shader of '%s' not exits",g),A||console.error("Fragment shader of '%s' not exits",g);var S=new a.Z(T,A);return S.name=g,S},F.createMaterial=function(g,T){T instanceof Array||(T=[T]);var A=F.createShader(g),S=new l.Z({shader:A});return T.forEach(function(b){typeof b=="string"&&S.define(b)}),S},F.setMaterialFromModel=function(g,T,A,S){T.autoUpdateTextureStatus=!1;var b=A.getModel(g+"Material"),$=b.get("detailTexture"),B=C.Z.firstNotNull(b.get("textureTiling"),1),J=C.Z.firstNotNull(b.get("textureOffset"),0);typeof B=="number"&&(B=[B,B]),typeof J=="number"&&(J=[J,J]);var ne=B[0]>1||B[1]>1?F.Texture.REPEAT:F.Texture.CLAMP_TO_EDGE,W={anisotropic:8,wrapS:ne,wrapT:ne};if(g==="realistic"){var ie=b.get("roughness"),ee=b.get("metalness");ee!=null?isNaN(ee)&&(T.setTextureImage("metalnessMap",ee,S,W),ee=C.Z.firstNotNull(b.get("metalnessAdjust"),.5)):ee=0,ie!=null?isNaN(ie)&&(T.setTextureImage("roughnessMap",ie,S,W),ie=C.Z.firstNotNull(b.get("roughnessAdjust"),.5)):ie=.5;var oe=b.get("normalTexture");T.setTextureImage("detailMap",$,S,W),T.setTextureImage("normalMap",oe,S,W),T.set({roughness:ie,metalness:ee,detailUvRepeat:B,detailUvOffset:J})}else if(g==="lambert")T.setTextureImage("detailMap",$,S,W),T.set({detailUvRepeat:B,detailUvOffset:J});else if(g==="color")T.setTextureImage("detailMap",$,S,W),T.set({detailUvRepeat:B,detailUvOffset:J});else if(g==="hatching"){var ue=b.get("hatchingTextures")||[];ue.length<6;for(var ae=0;ae<6;ae++)T.setTextureImage("hatch"+(ae+1),ue[ae],S,{anisotropic:8,wrapS:F.Texture.REPEAT,wrapT:F.Texture.REPEAT});T.set({detailUvRepeat:B,detailUvOffset:J})}},F.updateVertexAnimation=function(g,T,A,S){var b=S.get("animation"),$=S.get("animationDurationUpdate"),B=S.get("animationEasingUpdate"),J=A.shadowDepthMaterial;if(b&&T&&$>0&&T.geometry.vertexCount===A.geometry.vertexCount){A.material.define("vertex","VERTEX_ANIMATION"),A.ignorePreZ=!0,J&&J.define("vertex","VERTEX_ANIMATION");for(var ne=0;ne<g.length;ne++)A.geometry.attributes[g[ne][0]].value=T.geometry.attributes[g[ne][1]].value;A.geometry.dirty(),A.__percent=0,A.material.set("percent",0),A.stopAnimation(),A.animate().when($,{__percent:1}).during(function(){A.material.set("percent",A.__percent),J&&J.set("percent",A.__percent)}).done(function(){A.ignorePreZ=!1,A.material.undefine("vertex","VERTEX_ANIMATION"),J&&J.undefine("vertex","VERTEX_ANIMATION")}).start(B)}else A.material.undefine("vertex","VERTEX_ANIMATION"),J&&J.undefine("vertex","VERTEX_ANIMATION")};var De=F},261169:function(te,G,p){"use strict";p.d(G,{Z:function(){return n}});var E=p(586632),I=p(670492),N=p(318586),O=p(959101),a=[0,1,2,0,2,3],l=N.Z.extend(function(){return{attributes:{position:new N.Z.Attribute("position","float",3,"POSITION"),texcoord:new N.Z.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new N.Z.Attribute("offset","float",2),color:new N.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var o=e*4,s=e*2;this.vertexCount!==o&&(this.attributes.position.init(o),this.attributes.offset.init(o),this.attributes.color.init(o)),this.triangleCount!==s&&(this.indices=o>65535?new Uint32Array(s*3):new Uint16Array(s*3))},setSpriteAlign:function(e,o,s,u,y){s==null&&(s="left"),u==null&&(u="top");var D,Z,x,w;switch(y=y||0,s){case"left":D=y,x=o[0]+y;break;case"center":case"middle":D=-o[0]/2,x=o[0]/2;break;case"right":D=-o[0]-y,x=-y;break}switch(u){case"bottom":Z=y,w=o[1]+y;break;case"middle":Z=-o[1]/2,w=o[1]/2;break;case"top":Z=-o[1]-y,w=-y;break}var z=e*4,V=this.attributes.offset;V.set(z,[D,w]),V.set(z+1,[x,w]),V.set(z+2,[x,Z]),V.set(z+3,[D,Z])},addSprite:function(e,o,s,u,y,D){var Z=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,o,s,u,y,D);for(var x=0;x<a.length;x++)this.indices[this._faceOffset*3+x]=a[x]+Z;return this._faceOffset+=2,this._vertexOffset+=4,Z/4},setSprite:function(e,o,s,u,y,D,Z){for(var x=e*4,w=this.attributes,z=0;z<4;z++)w.position.set(x+z,o);var V=w.texcoord;V.set(x,[u[0][0],u[0][1]]),V.set(x+1,[u[1][0],u[0][1]]),V.set(x+2,[u[1][0],u[1][1]]),V.set(x+3,[u[0][0],u[1][1]]),this.setSpriteAlign(e,s,y,D,Z)}});I.D5.defaults(l.prototype,O.Z);var f=l,v=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;E.Z.Shader.import(v);var n=E.Z.Mesh.extend(function(){var t=new f({dynamic:!0}),e=new E.Z.Material({shader:E.Z.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:t,material:e,culling:!1,castShadow:!1,ignorePicking:!0}})},136164:function(te,G,p){"use strict";var E=p(670492),I={firstNotNull:function(){for(var O=0,a=arguments.length;O<a;O++)if(arguments[O]!=null)return arguments[O]},queryDataIndex:function(O,a){if(a.dataIndexInside!=null)return a.dataIndexInside;if(a.dataIndex!=null)return E.D5.isArray(a.dataIndex)?E.D5.map(a.dataIndex,function(l){return O.indexOfRawIndex(l)}):O.indexOfRawIndex(a.dataIndex);if(a.name!=null)return E.D5.isArray(a.name)?E.D5.map(a.name,function(l){return O.indexOfName(l)}):O.indexOfName(a.name)}};G.Z=I},286052:function(te,G){"use strict";G.Z=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`},262489:function(te,G){"use strict";G.Z=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`},631108:function(te,G){"use strict";G.Z=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`},511390:function(te,G){"use strict";G.Z=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`},300723:function(te,G,p){"use strict";var E=p(670492);function I(l,f,v){var f=f||document.createElement("canvas");f.width=l,f.height=l;var n=f.getContext("2d");return v&&v(n),f}function N(l,f,v,n){E.D5.isArray(f)||(f=[f,f]);var t=a.getMarginByStyle(v,n),e=f[0]+t.left+t.right,o=f[1]+t.top+t.bottom,s=E._y.createSymbol(l,0,0,f[0],f[1]),u=Math.max(e,o);s.x=t.left,s.y=t.top,e>o?s.y+=(u-o)/2:s.x+=(u-e)/2;var y=s.getBoundingRect();return s.x-=y.x,s.y-=y.y,s.setStyle(v),s.update(),s.__size=u,s}function O(l,f,v){var n=f.width,t=f.height,e=l.canvas.width,o=l.canvas.height,s=n/e,u=t/o;function y(M){return M<128?1:-1}function D(M,P){var X=Infinity;M=Math.floor(M*s),P=Math.floor(P*u);for(var Y=P*n+M,U=f.data[Y*4],H=y(U),i=Math.max(P-v,0);i<Math.min(P+v,t);i++)for(var c=Math.max(M-v,0);c<Math.min(M+v,n);c++){var Y=i*n+c,r=f.data[Y*4],d=y(r),h=c-M,m=i-P;if(H!==d){var _=h*h+m*m;_<X&&(X=_)}}return H*Math.sqrt(X)}for(var Z=l.createImageData(e,o),x=0;x<o;x++)for(var w=0;w<e;w++){var z=D(w,x),V=z/v*.5+.5,C=(x*e+w)*4;Z.data[C++]=(1-V)*255,Z.data[C++]=(1-V)*255,Z.data[C++]=(1-V)*255,Z.data[C++]=255}return Z}var a={getMarginByStyle:function(f){var v=f.minMargin||0,n=0;f.stroke&&f.stroke!=="none"&&(n=f.lineWidth==null?1:f.lineWidth);var t=f.shadowBlur||0,e=f.shadowOffsetX||0,o=f.shadowOffsetY||0,s={};return s.left=Math.max(n/2,-e+t,v),s.right=Math.max(n/2,e+t,v),s.top=Math.max(n/2,-o+t,v),s.bottom=Math.max(n/2,o+t,v),s},createSymbolSprite:function(f,v,n,t){var e=N(f,v,n),o=a.getMarginByStyle(n);return{image:I(e.__size,t,function(s){E.z$(s,e)}),margin:o}},createSDFFromCanvas:function(f,v,n,t){return I(v,t,function(e){var o=f.getContext("2d"),s=o.getImageData(0,0,f.width,f.height);e.putImageData(O(e,s,n),0,0)})},createSimpleSprite:function(f,v){return I(f,v,function(n){var t=f/2;n.beginPath(),n.arc(t,t,60,0,Math.PI*2,!1),n.closePath();var e=n.createRadialGradient(t,t,0,t,t,t);e.addColorStop(0,"rgba(255, 255, 255, 1)"),e.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),e.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=e,n.fill()})}};G.Z=a},979729:function(te,G){"use strict";var p=Math.PI,E=Math.sin,I=Math.cos,N=Math.tan,O=Math.asin,a=Math.atan2,l=p/180,f=1e3*60*60*24,v=2440588,n=2451545;function t(C){return C.valueOf()/f-.5+v}function e(C){return t(C)-n}var o=l*23.4397;function s(C,M){return a(E(C)*I(o)-N(M)*E(o),I(C))}function u(C,M){return O(E(M)*I(o)+I(M)*E(o)*E(C))}function y(C,M,P){return a(E(C),I(C)*E(M)-N(P)*I(M))}function D(C,M,P){return O(E(M)*E(P)+I(M)*I(P)*I(C))}function Z(C,M){return l*(280.16+360.9856235*C)-M}function x(C){return l*(357.5291+.98560028*C)}function w(C){var M=l*(1.9148*E(C)+.02*E(2*C)+3e-4*E(3*C)),P=l*102.9372;return C+M+P+p}function z(C){var M=x(C),P=w(M);return{dec:u(P,0),ra:s(P,0)}}var V={};V.getPosition=function(C,M,P){var X=l*-P,Y=l*M,U=e(C),H=z(U),i=Z(U,X)-H.ra;return{azimuth:y(i,Y,H.dec),altitude:D(i,Y,H.dec)}},G.Z=V},906253:function(te,G,p){"use strict";p.d(G,{NA:function(){return E},gj:function(){return I},BM:function(){return N},Jk:function(){return O}});function E(a){var l=a.getVisual("style");if(l){var f=a.getVisual("drawType");return l[f]}}function I(a){var l=a.getVisual("style");return l.opacity}function N(a,l){var f=a.getItemVisual(l,"style");if(f){var v=a.getVisual("drawType");return f[v]}}function O(a,l){var f=a.getItemVisual(l,"style");return f&&f.opacity}}}]);
