(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3383],{231432:function(le,ae,I){"use strict";I.r(ae);var N=I(46491)},680623:function(le,ae,I){"use strict";var N=I(670492),V=I(111571),W=I(654915),G=I(372541),B=G.Z.vec3,j=N._y.dataStack.isDimensionStacked;function U(v){var d=v[0],m=v[1];return!(d>0&&m>0||d<0&&m<0)}function Q(v,d){var m=v.getData(),x=v.get("barSize");if(x==null){var w=d.size,L,C,t=d.getAxis("x"),e=d.getAxis("y");t.type==="category"?L=t.getBandWidth()*.7:L=Math.round(w[0]/Math.sqrt(m.count()))*.6,e.type==="category"?C=e.getBandWidth()*.7:C=Math.round(w[1]/Math.sqrt(m.count()))*.6,x=[L,C]}else N.D5.isArray(x)||(x=[x,x]);var i=d.getAxis("z").scale.getExtent(),s=U(i),h=["x","y","z"].map(function(T){return v.coordDimToDataDim(T)[0]}),u=j(m,h[2]),c=u?m.getCalculationInfo("stackResultDimension"):h[2];m.each(h,function(T,a,n,o){var l=m.get(c,o),g=u?l-n:s?0:i[0],y=d.dataToPoint([T,a,g]),E=d.dataToPoint([T,a,l]),F=B.dist(y,E),H=[0,E[1]<y[1]?-1:1,0];Math.abs(F)===0&&(F=.1);var X=[x[0],F,x[1]];m.setItemLayout(o,[y,H,X])}),m.setLayout("orient",[1,0,0])}var $=Q;function K(v,d,m){for(var x=v.getDataExtent(d),w=v.getDataExtent(m),L=x[1]-x[0]||x[0],C=w[1]-w[0]||w[0],t=50,e=new Uint8Array(t*t),i=0;i<v.count();i++){var s=v.get(d,i),h=v.get(m,i),u=Math.floor((s-x[0])/L*(t-1)),c=Math.floor((h-w[0])/C*(t-1)),T=c*t+u;e[T]=e[T]||1}for(var a=0,i=0;i<e.length;i++)e[i]&&a++;return a/e.length}var P=G.Z.vec3,Y=N._y.dataStack.isDimensionStacked;function J(v,d){var m=v.getData(),x=v.get("minHeight")||0,w=v.get("barSize"),L=["lng","lat","alt"].map(function(i){return v.coordDimToDataDim(i)[0]});if(w==null){var C=d.radius*Math.PI,t=K(m,L[0],L[1]);w=[C/Math.sqrt(m.count()/t),C/Math.sqrt(m.count()/t)]}else N.D5.isArray(w)||(w=[w,w]);var e=oe(m,L);m.each(L,function(i,s,h,u){var c=m.get(e.dimension,u),T=e.isStacked?c-h:d.altitudeAxis.scale.getExtent()[0],a=Math.max(d.altitudeAxis.dataToCoord(h),x),n=d.dataToPoint([i,s,T]),o=d.dataToPoint([i,s,c]),l=P.sub([],o,n);P.normalize(l,l);var g=[w[0],a,w[1]];m.setItemLayout(u,[n,l,g])}),m.setLayout("orient",W.Z.UP.array)}function ie(v,d){var m=v.getData(),x=v.get("barSize"),w=v.get("minHeight")||0,L=["lng","lat","alt"].map(function(s){return v.coordDimToDataDim(s)[0]});if(x==null){var C=Math.min(d.size[0],d.size[2]),t=K(m,L[0],L[1]);x=[C/Math.sqrt(m.count()/t),C/Math.sqrt(m.count()/t)]}else N.D5.isArray(x)||(x=[x,x]);var e=[0,1,0],i=oe(m,L);m.each(L,function(s,h,u,c){var T=m.get(i.dimension,c),a=i.isStacked?T-u:d.altitudeAxis.scale.getExtent()[0],n=Math.max(d.altitudeAxis.dataToCoord(u),w),o=d.dataToPoint([s,h,a]),l=[x[0],n,x[1]];m.setItemLayout(c,[o,e,l])}),m.setLayout("orient",[1,0,0])}function q(v,d){var m=v.getData(),x=v.coordDimToDataDim("lng")[0],w=v.coordDimToDataDim("lat")[0],L=v.coordDimToDataDim("alt")[0],C=v.get("barSize"),t=v.get("minHeight")||0;if(C==null){var e=m.getDataExtent(x),i=m.getDataExtent(w),s=d.dataToPoint([e[0],i[0]]),h=d.dataToPoint([e[1],i[1]]),u=Math.min(Math.abs(s[0]-h[0]),Math.abs(s[1]-h[1]))||1,c=K(m,x,w);C=[u/Math.sqrt(m.count()/c),u/Math.sqrt(m.count()/c)]}else N.D5.isArray(C)||(C=[C,C]),C[0]/=d.getScale()/16,C[1]/=d.getScale()/16;var T=[0,0,1],a=[x,w,L],n=oe(m,a);m.each(a,function(o,l,g,y){var E=m.get(n.dimension,y),F=n.isStacked?E-g:0,H=d.dataToPoint([o,l,F]),X=d.dataToPoint([o,l,E]),re=Math.max(X[2]-H[2],t),te=[C[0],re,C[1]];m.setItemLayout(y,[H,T,te])}),m.setLayout("orient",[1,0,0])}function oe(v,d){var m=Y(v,d[2]);return{dimension:m?v.getCalculationInfo("stackResultDimension"):d[2],isStacked:m}}function ee(v){v.registerLayout(function(d,m){d.eachSeriesByType("bar3D",function(x){var w=x.coordinateSystem,L=w&&w.type;L==="globe"?J(x,w):L==="cartesian3D"?$(x,w):L==="geo3D"?ie(x,w):(L==="mapbox3D"||L==="maptalks3D")&&q(x,w)})})}var k=I(25204),R=I(60717),D=I(605716),O=I(176683),z=N.wJ.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(d,m){return(0,O.Z)(this)},getFormattedLabel:function(d,m,x,w){var L=R.Z.getFormattedLabel(this,d,m,x,w);return L==null&&(L=this.getData().get("z",d)),L},formatTooltip:function(d){return(0,D.Z)(this,d)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});N.D5.merge(z.prototype,k.Z);var A=z,M=I(586632),S=I(136164),r=I(502616),f=I(984234),b=I(906253),p=G.Z.vec3,_=N.TA.extend({type:"bar3D",__ecgl__:!0,init:function(d,m){this.groupGL=new M.Z.Node,this._api=m,this._labelsBuilder=new f.Z(256,256,m);var x=this;this._labelsBuilder.getLabelPosition=function(w,L,C){if(x._data){var t=x._data.getItemLayout(w),e=t[0],i=t[1],s=t[2][1];return p.scaleAndAdd([],e,i,C+s)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(d,m,x){var w=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=w,this._barMesh||(this._barMesh=new M.Z.Mesh({geometry:new r.Z,shadowDepthMaterial:new M.Z.Material({shader:new M.Z.Shader(M.Z.Shader.source("ecgl.sm.depth.vertex"),M.Z.Shader.source("ecgl.sm.depth.fragment"))}),culling:d.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var L=d.coordinateSystem;if(this._doRender(d,x),L&&L.viewGL){L.viewGL.add(this.groupGL);var C=L.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[C]("fragment","SRGB_DECODE")}this._data=d.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(d)},_updateAnimation:function(d){M.Z.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,d)},_doRender:function(d,m){var x=d.getData(),w=d.get("shading"),L=w!=="color",C=this,t=this._barMesh,e="ecgl."+w;(!t.material||t.material.shader.name!==e)&&(t.material=M.Z.createMaterial(e,["VERTEX_COLOR"])),M.Z.setMaterialFromModel(w,t.material,d,m),t.geometry.enableNormal=L,t.geometry.resetOffset();var i=d.get("bevelSize"),s=d.get("bevelSmoothness");t.geometry.bevelSegments=s,t.geometry.bevelSize=i;var h=[],u=new Float32Array(x.count()*4),c=0,T=0,a=!1;x.each(function(g){if(!!x.hasValue(g)){var y=(0,b.BM)(x,g),E=(0,b.Jk)(x,g);E==null&&(E=1),M.Z.parseColor(y,h),h[3]*=E,u[c++]=h[0],u[c++]=h[1],u[c++]=h[2],u[c++]=h[3],h[3]>0&&(T++,h[3]<.99&&(a=!0))}}),t.geometry.setBarCount(T);var n=x.getLayout("orient"),o=this._barIndexOfData=new Int32Array(x.count()),T=0;x.each(function(g){if(!x.hasValue(g)){o[g]=-1;return}var y=x.getItemLayout(g),E=y[0],F=y[1],H=y[2],X=g*4;h[0]=u[X++],h[1]=u[X++],h[2]=u[X++],h[3]=u[X++],h[3]>0&&(C._barMesh.geometry.addBar(E,F,n,H,h,g),o[g]=T++)}),t.geometry.dirty(),t.geometry.updateBoundingBox();var l=t.material;l.transparent=a,l.depthMask=!a,t.geometry.sortTriangles=a,this._initHandler(d,m)},_initHandler:function(d,m){var x=d.getData(),w=this._barMesh,L=d.coordinateSystem.type==="cartesian3D";w.seriesIndex=d.seriesIndex;var C=-1;w.off("mousemove"),w.off("mouseout"),w.on("mousemove",function(t){var e=w.geometry.getDataIndexOfVertex(t.triangle[0]);e!==C&&(this._downplay(C),this._highlight(e),this._labelsBuilder.updateLabels([e]),L&&m.dispatchAction({type:"grid3DShowAxisPointer",value:[x.get("x",e),x.get("y",e),x.get("z",e,!0)]})),C=e,w.dataIndex=e},this),w.on("mouseout",function(t){this._downplay(C),this._labelsBuilder.updateLabels(),C=-1,w.dataIndex=-1,L&&m.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(d){var m=this._data;if(!!m){var x=this._barIndexOfData[d];if(!(x<0)){var w=m.getItemModel(d),L=w.getModel("emphasis.itemStyle"),C=L.get("color"),t=L.get("opacity");if(C==null){var e=(0,b.BM)(m,d);C=N.$_.lift(e,-.4)}t==null&&(t=(0,b.Jk)(m,d));var i=M.Z.parseColor(C);i[3]*=t,this._barMesh.geometry.setColor(x,i),this._api.getZr().refresh()}}},_downplay:function(d){var m=this._data;if(!!m){var x=this._barIndexOfData[d];if(!(x<0)){var w=(0,b.BM)(m,d),L=(0,b.Jk)(m,d),C=M.Z.parseColor(w);C[3]*=L,this._barMesh.geometry.setColor(x,C),this._api.getZr().refresh()}}},highlight:function(d,m,x,w){this._toggleStatus("highlight",d,m,x,w)},downplay:function(d,m,x,w){this._toggleStatus("downplay",d,m,x,w)},_toggleStatus:function(d,m,x,w,L){var C=m.getData(),t=S.Z.queryDataIndex(C,L),e=this;t!=null?N.D5.each(R.Z.normalizeToArray(t),function(i){d==="highlight"?this._highlight(i):this._downplay(i)},this):C.each(function(i){d==="highlight"?e._highlight(i):e._downplay(i)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Z(v){v.registerChartView(_),v.registerSeriesModel(A),ee(v),v.registerProcessor(function(d,m){d.eachSeriesByType("bar3d",function(x){var w=x.getData();w.filterSelf(function(L){return w.hasValue(L)})})})}(0,N.D$)(Z)},345106:function(le,ae,I){"use strict";var N=I(501214),V=I(47818);function W(G){this.viewGL=G}W.prototype.reset=function(G,B){this._updateCamera(B.getWidth(),B.getHeight(),B.getDevicePixelRatio()),this._viewTransform=N.create(),this.updateTransform(G,B)},W.prototype.updateTransform=function(G,B){var j=G.coordinateSystem;j.getRoamTransform&&(N.invert(this._viewTransform,j.getRoamTransform()),this._setCameraTransform(this._viewTransform),B.getZr().refresh())},W.prototype.dataToPoint=function(G,B,j){j=G.dataToPoint(B,null,j);var U=this._viewTransform;U&&V.applyTransform(j,j,U)},W.prototype.removeTransformInPoint=function(G){return this._viewTransform&&V.applyTransform(G,G,this._viewTransform),G},W.prototype.getZoom=function(){if(this._viewTransform){var G=this._viewTransform;return 1/Math.max(Math.sqrt(G[0]*G[0]+G[1]*G[1]),Math.sqrt(G[2]*G[2]+G[3]*G[3]))}return 1},W.prototype._setCameraTransform=function(G){var B=this.viewGL.camera;B.position.set(G[4],G[5],0),B.scale.set(Math.sqrt(G[0]*G[0]+G[1]*G[1]),Math.sqrt(G[2]*G[2]+G[3]*G[3]),1)},W.prototype._updateCamera=function(G,B,j){this.viewGL.setViewport(0,0,G,B,j);var U=this.viewGL.camera;U.left=U.top=0,U.bottom=B,U.right=G,U.near=0,U.far=100},ae.Z=W},398974:function(le,ae,I){"use strict";I.d(ae,{Z:function(){return k}});var N=I(670492),V=I(586632),W=I(300723),G=I(67634),B=I(372541),j=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`,U=B.Z.vec4;V.Z.Shader.import(j);var Q=V.Z.Mesh.extend(function(){var R=new V.Z.Geometry({dynamic:!0,attributes:{color:new V.Z.Geometry.Attribute("color","float",4,"COLOR"),position:new V.Z.Geometry.Attribute("position","float",3,"POSITION"),size:new V.Z.Geometry.Attribute("size","float",1),prevPosition:new V.Z.Geometry.Attribute("prevPosition","float",3),prevSize:new V.Z.Geometry.Attribute("prevSize","float",1)}});Object.assign(R,G.Z);var D=new V.Z.Material({shader:V.Z.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});D.enableTexture("sprite"),D.define("both","VERTEX_COLOR"),D.define("both","VERTEX_SIZE");var O=new V.Z.Texture2D({image:document.createElement("canvas"),flipY:!1});return D.set("sprite",O),R.pick=this._pick.bind(this),{geometry:R,material:D,mode:V.Z.Mesh.POINTS,sizeScale:1}},{_pick:function(D,O,z,A,M,S){var r=this._positionNDC;if(!!r)for(var f=z.viewport,b=2/f.width,p=2/f.height,_=this.geometry.vertexCount-1;_>=0;_--){var Z;this.geometry.indices?Z=this.geometry.indices[_]:Z=_;var v=r[Z*2],d=r[Z*2+1],m=this.geometry.attributes.size.get(Z)/this.sizeScale,x=m/2;if(D>v-x*b&&D<v+x*b&&O>d-x*p&&O<d+x*p){var w=new V.Z.Vector3,L=new V.Z.Vector3;this.geometry.attributes.position.get(Z,w.array),V.Z.Vector3.transformMat4(L,w,this.worldTransform),S.push({vertexIndex:Z,point:w,pointWorld:L,target:this,distance:L.distance(A.getWorldPosition())})}}},updateNDCPosition:function(D,O,z){var A=this._positionNDC,M=this.geometry;(!A||A.length/2!==M.vertexCount)&&(A=this._positionNDC=new Float32Array(M.vertexCount*2));for(var S=U.create(),r=0;r<M.vertexCount;r++)M.attributes.position.get(r,S),S[3]=1,U.transformMat4(S,S,D.array),U.scale(S,S,1/S[3]),A[r*2]=S[0],A[r*2+1]=S[1]}}),$=Q,K=I(984234),P=I(20952),Y=I(136164),J=I(906253),ie=20,q=-10;function oe(R,D){return R&&D&&R[0]===D[0]&&R[1]===D[1]}function ee(R,D){this.rootNode=new V.Z.Node,this.is2D=R,this._labelsBuilder=new K.Z(256,256,D),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=D,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}ee.prototype={constructor:ee,highlightOnMouseover:!0,update:function(D,O,z,A,M){var S=this._prevMesh;this._prevMesh=this._mesh,this._mesh=S;var r=D.getData();if(A==null&&(A=0),M==null&&(M=r.count()),this._startDataIndex=A,this._endDataIndex=M-1,!this._mesh){var f=this._prevMesh&&this._prevMesh.material;this._mesh=new $({renderOrder:10,frustumCulling:!1}),f&&(this._mesh.material=f)}var f=this._mesh.material,b=this._mesh.geometry,p=b.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var _=this._getSymbolInfo(D,A,M),Z=z.getDevicePixelRatio(),v=D.getModel("itemStyle").getItemStyle(),d=D.get("large"),m=1;_.maxSize>2?(m=this._updateSymbolSprite(D,v,_,Z),f.enableTexture("sprite")):f.disableTexture("sprite"),p.position.init(M-A);var x=[];if(d){f.undefine("VERTEX_SIZE"),f.undefine("VERTEX_COLOR");var w=(0,J.NA)(r),L=(0,J.gj)(r);V.Z.parseColor(w,x),x[3]*=L,f.set({color:x,u_Size:_.maxSize*this._sizeScale})}else f.set({color:[1,1,1,1]}),f.define("VERTEX_SIZE"),f.define("VERTEX_COLOR"),p.size.init(M-A),p.color.init(M-A),this._originalOpacity=new Float32Array(M-A);for(var C=r.getLayout("points"),t=p.position.value,e=!1,i=0;i<M-A;i++){var s=i*3,h=i*2;if(this.is2D?(t[s]=C[h],t[s+1]=C[h+1],t[s+2]=q):(t[s]=C[s],t[s+1]=C[s+1],t[s+2]=C[s+2]),!d){var w=(0,J.BM)(r,i),L=(0,J.Jk)(r,i);V.Z.parseColor(w,x),x[3]*=L,p.color.set(i,x),x[3]<.99&&(e=!0);var u=r.getItemVisual(i,"symbolSize");u=u instanceof Array?Math.max(u[0],u[1]):u,isNaN(u)&&(u=0),p.size.value[i]=u*m*this._sizeScale,this._originalOpacity[i]=x[3]}}this._mesh.sizeScale=m,b.updateBoundingBox(),b.dirty(),this._updateMaterial(D,v);var c=D.coordinateSystem;if(c&&c.viewGL){var T=c.viewGL.isLinearSpace()?"define":"undefine";f[T]("fragment","SRGB_DECODE")}d||this._updateLabelBuilder(D,A,M),this._updateHandler(D,O,z),this._updateAnimation(D),this._api=z},getPointsMesh:function(){return this._mesh},updateLabels:function(D){this._labelsBuilder.updateLabels(D)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(D,O,z,A){z.maxSize=Math.min(z.maxSize*2,200);var M=[];return z.aspect>1?(M[0]=z.maxSize,M[1]=z.maxSize/z.aspect):(M[1]=z.maxSize,M[0]=z.maxSize*z.aspect),M[0]=M[0]||1,M[1]=M[1]||1,(this._symbolType!==z.type||!oe(this._symbolSize,M)||this._lineWidth!==O.lineWidth)&&(W.Z.createSymbolSprite(z.type,M,{fill:"#fff",lineWidth:O.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(M[0]/2,10)},this._spriteImageCanvas),W.Z.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),ie,this._mesh.material.get("sprite").image),this._symbolType=z.type,this._symbolSize=M,this._lineWidth=O.lineWidth),this._spriteImageCanvas.width/z.maxSize*A},_updateMaterial:function(D,O){var z=D.get("blendMode")==="lighter"?V.Z.additiveBlend:null,A=this._mesh.material;A.blend=z,A.set("lineWidth",O.lineWidth/ie);var M=V.Z.parseColor(O.stroke);A.set("strokeColor",M),A.transparent=!0,A.depthMask=!1,A.depthTest=!this.is2D,A.sortVertices=!this.is2D},_updateLabelBuilder:function(D,O,z){var A=D.getData(),M=this._mesh.geometry,S=M.attributes.position.value,O=this._startDataIndex,r=this._mesh.sizeScale;this._labelsBuilder.updateData(A,O,z),this._labelsBuilder.getLabelPosition=function(f,b,p){var _=(f-O)*3;return[S[_],S[_+1],S[_+2]]},this._labelsBuilder.getLabelDistance=function(f,b,p){var _=M.attributes.size.get(f-O)/r;return _/2+p},this._labelsBuilder.updateLabels()},_updateAnimation:function(D){V.Z.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,D)},_updateHandler:function(D,O,z){var A=D.getData(),M=this._mesh,S=this,r=-1,f=D.coordinateSystem&&D.coordinateSystem.type==="cartesian3D",b;f&&(b=D.coordinateSystem.model),M.seriesIndex=D.seriesIndex,M.off("mousemove"),M.off("mouseout"),M.on("mousemove",function(p){var _=p.vertexIndex+S._startDataIndex;_!==r&&(this.highlightOnMouseover&&(this.downplay(A,r),this.highlight(A,_),this._labelsBuilder.updateLabels([_])),f&&z.dispatchAction({type:"grid3DShowAxisPointer",value:[A.get(D.coordDimToDataDim("x")[0],_),A.get(D.coordDimToDataDim("y")[0],_),A.get(D.coordDimToDataDim("z")[0],_)],grid3DIndex:b.componentIndex})),M.dataIndex=_,r=_},this),M.on("mouseout",function(p){var _=p.vertexIndex+S._startDataIndex;this.highlightOnMouseover&&(this.downplay(A,_),this._labelsBuilder.updateLabels()),r=-1,M.dataIndex=-1,f&&z.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:b.componentIndex})},this)},updateLayout:function(D,O,z){var A=D.getData();if(!!this._mesh){var M=this._mesh.geometry.attributes.position.value,S=A.getLayout("points");if(this.is2D)for(var r=0;r<S.length/2;r++){var f=r*3,b=r*2;M[f]=S[b],M[f+1]=S[b+1],M[f+2]=q}else for(var r=0;r<S.length;r++)M[r]=S[r];this._mesh.geometry.dirty(),z.getZr().refresh()}},updateView:function(D){if(!!this._mesh){var O=new P.Z;P.Z.mul(O,D.viewMatrix,this._mesh.worldTransform),P.Z.mul(O,D.projectionMatrix,O),this._mesh.updateNDCPosition(O,this.is2D,this._api)}},highlight:function(D,O){if(!(O>this._endDataIndex||O<this._startDataIndex)){var z=D.getItemModel(O),A=z.getModel("emphasis.itemStyle"),M=A.get("color"),S=A.get("opacity");if(M==null){var r=(0,J.BM)(D,O);M=N.$_.lift(r,-.4)}S==null&&(S=(0,J.Jk)(D,O));var f=V.Z.parseColor(M);f[3]*=S,this._mesh.geometry.attributes.color.set(O-this._startDataIndex,f),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(D,O){if(!(O>this._endDataIndex||O<this._startDataIndex)){var z=(0,J.BM)(D,O),A=(0,J.Jk)(D,O),M=V.Z.parseColor(z);M[3]*=A,this._mesh.geometry.attributes.color.set(O-this._startDataIndex,M),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(D){if(this._originalOpacity){for(var O=this._mesh.geometry,z=0;z<O.vertexCount;z++){var A=this._originalOpacity[z]*D;O.attributes.color.value[z*4+3]=A}O.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(D){this._mesh&&this._setPositionTextureToMesh(this._mesh,D),this._positionTexture=D},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(D){if(D!==this._sizeScale){if(this._mesh){var O=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",O/this._sizeScale*D);var z=this._mesh.geometry.attributes;if(z.size.value)for(var A=0;A<z.size.value.length;A++)z.size.value[A]=z.size.value[A]/this._sizeScale*D}this._sizeScale=D}},_setPositionTextureToMesh:function(D,O){O&&D.material.set("positionTexture",O),D.material[O?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(D,O,z){if(D.get("large")){var A=Y.Z.firstNotNull(D.get("symbolSize"),1),p,S;return A instanceof Array?(p=Math.max(A[0],A[1]),S=A[0]/A[1]):(p=A,S=1),{maxSize:A,type:D.get("symbol"),aspect:S}}for(var M=D.getData(),S,r=!1,f=M.getItemVisual(0,"symbol")||"circle",b=!1,p=0,_=O;_<z;_++){var A=M.getItemVisual(_,"symbolSize"),Z=M.getItemVisual(_,"symbol"),v;if(A instanceof Array)v=A[0]/A[1],p=Math.max(Math.max(A[0],A[1]),p);else{if(isNaN(A))continue;v=1,p=Math.max(A,p)}f=Z,S=v}return{maxSize:p,type:f,aspect:S}}};var k=ee},176683:function(le,ae,I){"use strict";I.d(ae,{Z:function(){return V}});var N=I(670492);function V(W,G,B){B=B||W.getSource();var j=G||N.wL(W.get("coordinateSystem"))||["x","y","z"],U=N._y.createDimensions(B,{dimensionsDefine:B.dimensionsDefine||W.get("dimensions"),encodeDefine:B.encodeDefine||W.get("encode"),coordDimensions:j.map(function(K){var P=W.getReferringComponents(K+"Axis3D").models[0];return{type:P&&P.get("type")==="category"?"ordinal":"float",name:K}})});W.get("coordinateSystem")==="cartesian3D"&&U.forEach(function(K){if(j.indexOf(K.coordDim)>=0){var P=W.getReferringComponents(K.coordDim+"Axis3D").models[0];P&&P.get("type")==="category"&&(K.ordinalMeta=P.getOrdinalMeta())}});var Q=N._y.dataStack.enableDataStack(W,U,{byIndex:!0,stackedCoordDimension:"z"}),$=new N.aV(U,W);return $.setCalculationInfo(Q),$.initData(B),$}},605716:function(le,ae,I){"use strict";I.d(ae,{Z:function(){return G}});var N=I(670492),V=I(906253);function W(B,j){var U=[];return N.D5.each(B.dimensions,function(Q){var $=B.getDimensionInfo(Q),K=$.otherDims,P=K[j];P!=null&&P!==!1&&(U[P]=$.name)}),U}function G(B,j,U){function Q(oe){var ee=!0,k=[],R=W($,"tooltip");R.length?N.D5.each(R,function(O){D($.get(O,j),O)}):N.D5.each(oe,D);function D(O,z){var A=$.getDimensionInfo(z);if(!(!A||A.otherDims.tooltip===!1)){var M=A.type,S=(ee?"- "+(A.tooltipName||A.name)+": ":"")+(M==="ordinal"?O+"":M==="time"?U?"":N.WU.formatTime("yyyy/MM/dd hh:mm:ss",O):N.WU.addCommas(O));S&&k.push(N.WU.encodeHTML(S))}}return(ee?"<br/>":"")+k.join(ee?"<br/>":", ")}var $=B.getData(),K=B.getRawValue(j),P=N.D5.isArray(K)?Q(K):N.WU.encodeHTML(N.WU.addCommas(K)),Y=$.getName(j),J=(0,V.BM)($,j);N.D5.isObject(J)&&J.colorStops&&(J=(J.colorStops[0]||{}).color),J=J||"transparent";var ie=N.WU.getTooltipMarker(J),q=B.name;return q==="\0-"&&(q=""),q=q?N.WU.encodeHTML(q)+(U?": ":"<br/>"):"",U?ie+q+P:q+ie+(Y?N.WU.encodeHTML(Y)+": "+P:P)}},764409:function(le,ae,I){"use strict";var N=I(670492),V=I(111571),W=N.wJ.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(r,f){var b=this.get("coordinateSystem"),p=b==="geo"?["lng","lat"]:N.wL(b)||["x","y"];p.push("vx","vy");var _=N._y.createDimensions(this.getSource(),{coordDimensions:p,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),Z=new N.aV(_,this);return Z.initData(this.getSource()),Z},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}}),G=I(586632),B=I(136164),j=I(843122),U=I(361491),Q=I(318586),$=I(10681),K=I(405905),P=I(305302),Y=I(660126),J=I(791912),ie=I(513315),q=I(251643),oe=I(540478),ee=Q.Z.extend(function(){return{dynamic:!0,attributes:{position:new Q.Z.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(r){var f=this.attributes,b=4*r,p=2*r;this.vertexCount!==b&&f.position.init(b),this.triangleCount!==p&&(p===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(p*3):new Uint16Array(p*3))},addLine:function(r){var f=this._vertexOffset;this.attributes.position.set(f,[r[0],r[1],1]),this.attributes.position.set(f+1,[r[0],r[1],-1]),this.attributes.position.set(f+2,[r[0],r[1],2]),this.attributes.position.set(f+3,[r[0],r[1],-2]),this.setTriangleIndices(this._faceOffset++,[f,f+1,f+2]),this.setTriangleIndices(this._faceOffset++,[f+1,f+2,f+3]),this._vertexOffset+=4}}),k=ee,R=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;P.Z.import(R);function D(S){var r=document.createElement("canvas");r.width=r.height=S;var f=r.getContext("2d");return f.fillStyle="#fff",f.arc(S/2,S/2,S/2,0,Math.PI*2),f.fill(),r}var O=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new Y.Z({type:J.Z.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};O.prototype={constructor:O,init:function(){var r={type:J.Z.FLOAT,minFilter:J.Z.NEAREST,magFilter:J.Z.NEAREST,useMipmap:!1};this._spawnTexture=new Y.Z(r),this._particleTexture0=new Y.Z(r),this._particleTexture1=new Y.Z(r),this._frameBuffer=new oe.Z({depthBuffer:!1}),this._particlePass=new U.Z({fragment:P.Z.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new U.Z({fragment:P.Z.source("clay.compositor.downsample")});var f=new $.Z({renderOrder:10,material:new K.Z({shader:new P.Z(P.Z.source("ecgl.vfParticle.renderPoints.vertex"),P.Z.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:$.Z.POINTS,geometry:new Q.Z({dynamic:!0,mainAttribute:"texcoord0"})}),b=new $.Z({renderOrder:10,material:new K.Z({shader:new P.Z(P.Z.source("ecgl.vfParticle.renderLines.vertex"),P.Z.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new k,culling:!1}),p=new $.Z({material:new K.Z({shader:new P.Z(P.Z.source("ecgl.color.vertex"),P.Z.source("ecgl.color.fragment"))}),geometry:new q.Z});p.material.enableTexture("diffuseMap"),this._particlePointsMesh=f,this._particleLinesMesh=b,this._lastFrameFullQuadMesh=p,this._camera=new ie.Z,this._thisFrameTexture=new Y.Z,this._lastFrameTexture=new Y.Z},setParticleDensity:function(r,f){for(var b=r*f,p=new Float32Array(b*4),_=0,Z=this.particleLife,v=0;v<r;v++)for(var d=0;d<f;d++,_++){p[_*4]=Math.random(),p[_*4+1]=Math.random(),p[_*4+2]=Math.random();var m=(Z[1]-Z[0])*Math.random()+Z[0];p[_*4+3]=m}this._particleType==="line"?this._setLineGeometry(r,f):this._setPointsGeometry(r,f),this._spawnTexture.width=r,this._spawnTexture.height=f,this._spawnTexture.pixels=p,this._particleTexture0.width=this._particleTexture1.width=r,this._particleTexture0.height=this._particleTexture1.height=f,this._particlePass.setUniform("textureSize",[r,f])},_setPointsGeometry:function(r,f){var b=r*f,p=this._particlePointsMesh.geometry,_=p.attributes;_.texcoord0.init(b);for(var Z=0,v=0;v<r;v++)for(var d=0;d<f;d++,Z++)_.texcoord0.value[Z*2]=v/r,_.texcoord0.value[Z*2+1]=d/f;p.dirty()},_setLineGeometry:function(r,f){var b=r*f,p=this._getParticleMesh().geometry;p.setLineCount(b),p.resetOffset();for(var _=0;_<r;_++)for(var Z=0;Z<f;Z++)p.addLine([_/r,Z/f]);p.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(r,f,b,p){var _=this._getParticleMesh(),Z=this._frameBuffer,v=this._particlePass;p&&this._updateDownsampleTextures(r,f),_.material.set("size",this._particleSize*this._supersampling),_.material.set("color",this.particleColor),v.setUniform("speedScaling",this.particleSpeedScaling),Z.attach(this._particleTexture1),v.setUniform("firstFrameTime",p?(this.particleLife[1]+this.particleLife[0])/2:0),v.setUniform("particleTexture",this._particleTexture0),v.setUniform("deltaTime",b),v.setUniform("elapsedTime",this._elapsedTime),v.render(r,Z),_.material.set("particleTexture",this._particleTexture1),_.material.set("prevParticleTexture",this._particleTexture0),Z.attach(this._thisFrameTexture),Z.bind(r),r.gl.clear(r.gl.DEPTH_BUFFER_BIT|r.gl.COLOR_BUFFER_BIT);var d=this._lastFrameFullQuadMesh;d.material.set("diffuseMap",this._lastFrameTexture),d.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),r.renderPass([d,_],this._camera),Z.unbind(r),this._downsample(r),this._swapTexture(),this._elapsedTime+=b},_downsample:function(r){var f=this._downsampleTextures;if(f.length!==0)for(var b=0,p=this._thisFrameTexture,_=f[b];_;)this._frameBuffer.attach(_),this._downsamplePass.setUniform("texture",p),this._downsamplePass.setUniform("textureSize",[p.width,p.height]),this._downsamplePass.render(r,this._frameBuffer),p=_,_=f[++b]},getSurfaceTexture:function(){var r=this._downsampleTextures;return r.length>0?r[r.length-1]:this._lastFrameTexture},setRegion:function(r){this._particlePass.setUniform("region",r)},resize:function(r,f){this._lastFrameTexture.width=r*this._supersampling,this._lastFrameTexture.height=f*this._supersampling,this._thisFrameTexture.width=r*this._supersampling,this._thisFrameTexture.height=f*this._supersampling,this._width=r,this._height=f},setParticleSize:function(r){var f=this._getParticleMesh();if(r<=2){f.material.disableTexture("spriteTexture"),f.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new Y.Z),(!this._spriteTexture.image||this._spriteTexture.image.width!==r)&&(this._spriteTexture.image=D(r),this._spriteTexture.dirty()),f.material.transparent=!0,f.material.enableTexture("spriteTexture"),f.material.set("spriteTexture",this._spriteTexture),this._particleSize=r},setGradientTexture:function(r){var f=this._getParticleMesh().material;f[r?"enableTexture":"disableTexture"]("gradientTexture"),f.setUniform("gradientTexture",r)},setColorTextureImage:function(r,f){var b=this._getParticleMesh().material;b.setTextureImage("colorTexture",r,f,{flipY:!0})},setParticleType:function(r){this._particleType=r},clearFrame:function(r){var f=this._frameBuffer;f.attach(this._lastFrameTexture),f.bind(r),r.gl.clear(r.gl.DEPTH_BUFFER_BIT|r.gl.COLOR_BUFFER_BIT),f.unbind(r)},setSupersampling:function(r){this._supersampling=r,this.resize(this._width,this._height)},_updateDownsampleTextures:function(r,f){for(var b=this._downsampleTextures,p=Math.max(Math.floor(Math.log(this._supersampling/f.getDevicePixelRatio())/Math.log(2)),0),_=2,Z=this._width*this._supersampling,v=this._height*this._supersampling,d=0;d<p;d++)b[d]=b[d]||new Y.Z,b[d].width=Z/_,b[d].height=v/_,_*=2;for(;d<b.length;d++)b[d].dispose(r);b.length=p},_swapTexture:function(){var r=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=r;var r=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=r},dispose:function(r){r.disposeFrameBuffer(this._frameBuffer),r.disposeTexture(this.vectorFieldTexture),r.disposeTexture(this._spawnTexture),r.disposeTexture(this._particleTexture0),r.disposeTexture(this._particleTexture1),r.disposeTexture(this._thisFrameTexture),r.disposeTexture(this._lastFrameTexture),r.disposeGeometry(this._particleLinesMesh.geometry),r.disposeGeometry(this._particlePointsMesh.geometry),r.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&r.disposeTexture(this._spriteTexture),this._particlePass.dispose(r),this._downsamplePass.dispose(r),this._downsampleTextures.forEach(function(f){f.dispose(r)})}};var z=O,A=N.TA.extend({type:"flowGL",__ecgl__:!0,init:function(r,f){this.viewGL=new j.Z("orthographic"),this.groupGL=new G.Z.Node,this.viewGL.add(this.groupGL),this._particleSurface=new z;var b=new G.Z.Mesh({geometry:new G.Z.PlaneGeometry,material:new G.Z.Material({shader:new G.Z.Shader({vertex:G.Z.Shader.source("ecgl.color.vertex"),fragment:G.Z.Shader.source("ecgl.color.fragment")}),transparent:!0})});b.material.enableTexture("diffuseMap"),this.groupGL.add(b),this._planeMesh=b},render:function(r,f,b){var p=this._particleSurface;p.setParticleType(r.get("particleType")),p.setSupersampling(r.get("supersampling")),this._updateData(r,b),this._updateCamera(b.getWidth(),b.getHeight(),b.getDevicePixelRatio());var _=B.Z.firstNotNull(r.get("particleDensity"),128);p.setParticleDensity(_,_);var Z=this._planeMesh,v=+new Date,d=this,m=!0;Z.__percent=0,Z.stopAnimation(),Z.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var L=+new Date,C=Math.min(L-v,20);v=v+C,d._renderer&&(p.update(d._renderer,b,C/1e3,m),Z.material.set("diffuseMap",p.getSurfaceTexture())),m=!1}).start();var x=r.getModel("itemStyle"),w=G.Z.parseColor(x.get("color"));w[3]*=B.Z.firstNotNull(x.get("opacity"),1),Z.material.set("color",w),p.setColorTextureImage(r.get("colorTexture"),b),p.setParticleSize(r.get("particleSize")),p.particleSpeedScaling=r.get("particleSpeed"),p.motionBlurFactor=1-Math.pow(.1,r.get("particleTrail"))},updateTransform:function(r,f,b){this._updateData(r,b)},afterRender:function(r,f,b,p){var _=p.renderer;this._renderer=_},_updateData:function(r,f){var b=r.coordinateSystem,p=b.dimensions.map(function(u){return r.coordDimToDataDim(u)[0]}),_=r.getData(),Z=_.getDataExtent(p[0]),v=_.getDataExtent(p[1]),d=r.get("gridWidth"),m=r.get("gridHeight");if(d==null||d==="auto"){var x=(Z[1]-Z[0])/(v[1]-v[0]);d=Math.round(Math.sqrt(x*_.count()))}(m==null||m==="auto")&&(m=Math.ceil(_.count()/d));var w=this._particleSurface.vectorFieldTexture,L=w.pixels;if(!L||L.length!==m*d*4)L=w.pixels=new Float32Array(d*m*4);else for(var C=0;C<L.length;C++)L[C]=0;var t=0,e=Infinity,i=new Float32Array(_.count()*2),s=0,h=[[Infinity,Infinity],[-Infinity,-Infinity]];_.each([p[0],p[1],"vx","vy"],function(u,c,T,a){var n=b.dataToPoint([u,c]);i[s++]=n[0],i[s++]=n[1],h[0][0]=Math.min(n[0],h[0][0]),h[0][1]=Math.min(n[1],h[0][1]),h[1][0]=Math.max(n[0],h[1][0]),h[1][1]=Math.max(n[1],h[1][1]);var o=Math.sqrt(T*T+a*a);t=Math.max(t,o),e=Math.min(e,o)}),_.each(["vx","vy"],function(u,c,T){var a=Math.round((i[T*2]-h[0][0])/(h[1][0]-h[0][0])*(d-1)),n=m-1-Math.round((i[T*2+1]-h[0][1])/(h[1][1]-h[0][1])*(m-1)),o=(n*d+a)*4;L[o]=u/t*.5+.5,L[o+1]=c/t*.5+.5,L[o+3]=1}),w.width=d,w.height=m,r.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(w),w.dirty(),this._updatePlanePosition(h[0],h[1],r,f),this._updateGradientTexture(_.getVisual("visualMeta"),[e,t])},_fillEmptyPixels:function(r){var f=r.pixels,b=r.width,p=r.height;function _(i,s,h){i=Math.max(Math.min(i,b-1),0),s=Math.max(Math.min(s,p-1),0);var u=(s*(b-1)+i)*4;return f[u+3]===0?!1:(h[0]=f[u],h[1]=f[u+1],!0)}function Z(i,s,h){h[0]=i[0]+s[0],h[1]=i[1]+s[1]}for(var v=[],d=[],m=[],x=[],w=[],L=0,C=0;C<p;C++)for(var t=0;t<b;t++){var e=(C*(b-1)+t)*4;f[e+3]===0&&(L=v[0]=v[1]=0,_(t-1,C,d)&&(L++,Z(d,v,v)),_(t+1,C,m)&&(L++,Z(m,v,v)),_(t,C-1,x)&&(L++,Z(x,v,v)),_(t,C+1,w)&&(L++,Z(w,v,v)),v[0]/=L,v[1]/=L,f[e]=v[0],f[e+1]=v[1]),f[e+3]=1}},_updateGradientTexture:function(r,f){if(!r||!r.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new G.Z.Texture2D({image:document.createElement("canvas")});var b=this._gradientTexture,p=b.image;p.width=200,p.height=1;var _=p.getContext("2d"),Z=_.createLinearGradient(0,.5,p.width,.5);r[0].stops.forEach(function(v){var d;f[1]===f[0]?d=0:(d=v.value/f[1],d=Math.min(Math.max(d,0),1)),Z.addColorStop(d,v.color)}),_.fillStyle=Z,_.fillRect(0,0,p.width,p.height),b.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(r,f,b,p){var _=this._limitInViewportAndFullFill(r,f,b,p);r=_.leftTop,f=_.rightBottom,this._particleSurface.setRegion(_.region),this._planeMesh.position.set((r[0]+f[0])/2,p.getHeight()-(r[1]+f[1])/2,0);var Z=f[0]-r[0],v=f[1]-r[1];this._planeMesh.scale.set(Z/2,v/2,1),this._particleSurface.resize(Math.max(Math.min(Z,2048),1),Math.max(Math.min(v,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(r,f,b,p){var _=[Math.max(r[0],0),Math.max(r[1],0)],Z=[Math.min(f[0],p.getWidth()),Math.min(f[1],p.getHeight())];if(b.get("coordinateSystem")==="bmap"){var v=b.getData().getDataExtent(b.coordDimToDataDim("lng")[0]),d=Math.floor(v[1]-v[0])>=359;d&&(_[0]>0&&(_[0]=0),Z[0]<p.getWidth()&&(Z[0]=p.getWidth()))}var m=f[0]-r[0],x=f[1]-r[1],w=Z[0]-_[0],L=Z[1]-_[1],C=[(_[0]-r[0])/m,1-L/x-(_[1]-r[1])/x,w/m,L/x];return{leftTop:_,rightBottom:Z,region:C}},_updateCamera:function(r,f,b){this.viewGL.setViewport(0,0,r,f,b);var p=this.viewGL.camera;p.left=p.bottom=0,p.top=f,p.right=r,p.near=0,p.far=100,p.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function M(S){S.registerChartView(A),S.registerSeriesModel(W)}(0,N.D$)(M)},137453:function(le,ae,I){"use strict";var N=I(670492),V=I(111571),W=I(585446),G=I(63978),B=I(136164);function j(t,e,i,s,h){for(var u=new W.ZP(s),c=0;c<t.length;c++)u.addNode(B.Z.firstNotNull(t[c].id,t[c].name,c),c);for(var T=[],a=[],n=0,c=0;c<e.length;c++){var o=e[c],l=o.source,g=o.target;u.addEdge(l,g,n)&&(a.push(o),T.push(B.Z.firstNotNull(o.id,l+" > "+g)),n++)}var y,E=N._y.createDimensions(t,{coordDimensions:["value"]});y=new N.aV(E,i),y.initData(t);var F=new N.aV(["value"],i);return F.initData(a,T),h&&h(y,F),(0,G.Z)({mainData:y,struct:u,structAttr:"graph",datas:{node:y,edge:F},datasAttr:{node:"data",edge:"edgeData"}}),u.update(),u}var U=I(60717),Q=N.wJ.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){Q.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){Q.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,i,s,h){var u=U.Z.getFormattedLabel(this,e,i,s,h);if(u==null){var c=this.getData(),T=c.dimensions[c.dimensions.length-1];u=c.get(T,e)}return u},getInitialData:function(e,i){var s=e.edges||e.links||[],h=e.data||e.nodes||[],u=this;if(h&&s)return j(h,s,this,!0,c).data;function c(T,a){T.wrapMethod("getItemModel",function(g){var y=u._categoriesModels,E=g.getShallow("category"),F=y[E];return F&&(F.parentModel=g.parentModel,g.parentModel=F),g});var n=i.getModel([]).getModel;function o(g,y){var E=n.call(this,g,y);return E.resolveParentPath=l,E}a.wrapMethod("getItemModel",function(g){return g.resolveParentPath=l,g.getModel=o,g});function l(g){if(g&&(g[0]==="label"||g[1]==="label")){var y=g.slice();return g[0]==="label"?y[0]="edgeLabel":g[1]==="label"&&(y[1]="edgeLabel"),y}return g}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,i,s){if(s==="edge"){var h=this.getData(),u=this.getDataParams(e,s),c=h.graph.getEdgeByIndex(e),T=h.getName(c.node1.dataIndex),a=h.getName(c.node2.dataIndex),n=[];return T!=null&&n.push(T),a!=null&&n.push(a),n=N.WU.encodeHTML(n.join(" > ")),u.value&&(n+=" : "+N.WU.encodeHTML(u.value)),n}else return Q.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(s){return s.value!=null?s:Object.assign({value:0},s)}),i=new N.aV(["value"],this);i.initData(e),this._categoriesData=i,this._categoriesModels=i.mapArray(function(s){return i.getItemModel(s,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var i=0;i<e.length/2;i++){var s=e[i*2],h=e[i*2+1],u=this.getData().getRawDataItem(i);u.x=s,u.y=h}},isAnimationEnabled:function(){return Q.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),$=Q,K=I(576172),P=I(586632),Y=I(843122),J=I(220914),ie=I(361491),q=I(540478),oe=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;P.Z.Shader.import(oe);var ee={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function k(t){var e={type:P.Z.Texture.FLOAT,minFilter:P.Z.Texture.NEAREST,magFilter:P.Z.Texture.NEAREST};this._positionSourceTex=new P.Z.Texture2D(e),this._positionSourceTex.flipY=!1,this._positionTex=new P.Z.Texture2D(e),this._positionPrevTex=new P.Z.Texture2D(e),this._forceTex=new P.Z.Texture2D(e),this._forcePrevTex=new P.Z.Texture2D(e),this._weightedSumTex=new P.Z.Texture2D(e),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new P.Z.Texture2D(e),this._globalSpeedPrevTex=new P.Z.Texture2D(e),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new ie.Z({fragment:P.Z.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new ie.Z({fragment:P.Z.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new ie.Z({fragment:P.Z.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new ie.Z({fragment:P.Z.Shader.source("clay.compositor.output")});var i=function(h){h.blendEquation(h.FUNC_ADD),h.blendFunc(h.ONE,h.ONE)};this._edgeForceMesh=new P.Z.Mesh({geometry:new P.Z.Geometry({attributes:{node1:new P.Z.Geometry.Attribute("node1","float",2),node2:new P.Z.Geometry.Attribute("node2","float",2),weight:new P.Z.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new P.Z.Material({transparent:!0,shader:P.Z.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:i,depthMask:!1,depthText:!1}),mode:P.Z.Mesh.POINTS}),this._weightedSumMesh=new P.Z.Mesh({geometry:new P.Z.Geometry({attributes:{node:new P.Z.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new P.Z.Material({transparent:!0,shader:P.Z.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:i,depthMask:!1,depthText:!1}),mode:P.Z.Mesh.POINTS}),this._framebuffer=new q.Z({depthBuffer:!1}),this._dummyCamera=new P.Z.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}k.prototype.updateOption=function(t){for(var e in ee)this[e]=ee[e];var i=this._nodes.length;if(i>5e4?this.jitterTolerence=10:i>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,i>100?this.scaling=2:this.scaling=10,t)for(var e in ee)t[e]!=null&&(this[e]=t[e]);if(this.repulsionByDegree)for(var s=this._positionSourceTex.pixels,h=0;h<this._nodes.length;h++)s[h*4+2]=(this._nodes[h].degree||0)+1},k.prototype._updateGravityCenter=function(t){var e=this._nodes,i=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var s=[Infinity,Infinity],h=[-Infinity,-Infinity],u=0;u<e.length;u++)s[0]=Math.min(e[u].x,s[0]),s[1]=Math.min(e[u].y,s[1]),h[0]=Math.max(e[u].x,h[0]),h[1]=Math.max(e[u].y,h[1]);this._gravityCenter=[(s[0]+h[0])*.5,(s[1]+h[1])*.5]}for(var u=0;u<i.length;u++){var c=i[u].node1,T=i[u].node2;e[c].degree=(e[c].degree||0)+1,e[T].degree=(e[T].degree||0)+1}},k.prototype.initData=function(t,e){this._nodes=t,this._edges=e,this._updateGravityCenter();var i=Math.ceil(Math.sqrt(t.length)),s=i,h=new Float32Array(i*s*4);this._resize(i,s);for(var u=0,c=0;c<t.length;c++){var T=t[c];h[u++]=T.x||0,h[u++]=T.y||0,h[u++]=T.mass||1,h[u++]=T.size||1}this._positionSourceTex.pixels=h;var a=this._edgeForceMesh.geometry,n=e.length;a.attributes.node1.init(n*2),a.attributes.node2.init(n*2),a.attributes.weight.init(n*2);for(var o=[],c=0;c<e.length;c++){var l=a.attributes,g=e[c].weight;g==null&&(g=1),l.node1.set(c,this.getNodeUV(e[c].node1,o)),l.node2.set(c,this.getNodeUV(e[c].node2,o)),l.weight.set(c,g),l.node1.set(c+n,this.getNodeUV(e[c].node2,o)),l.node2.set(c+n,this.getNodeUV(e[c].node1,o)),l.weight.set(c+n,g)}var y=this._weightedSumMesh.geometry;y.attributes.node.init(t.length);for(var c=0;c<t.length;c++)y.attributes.node.set(c,this.getNodeUV(c,o));a.dirty(),y.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",t.length),this._nodeRepulsionPass.material.setUniform("textureSize",[i,s]),this._inited=!1,this._frame=0},k.prototype.getNodes=function(){return this._nodes},k.prototype.getEdges=function(){return this._edges},k.prototype.step=function(t){this._inited||(this._initFromSource(t),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(t);var e=this._nodeRepulsionPass;e.setUniform("strongGravityMode",this.strongGravityMode),e.setUniform("gravity",this.gravity),e.setUniform("gravityCenter",this._gravityCenter),e.setUniform("scaling",this.scaling),e.setUniform("preventOverlap",this.preventOverlap),e.setUniform("positionTex",this._positionPrevTex),e.render(t);var i=this._edgeForceMesh;i.material.set("linLogMode",this.linLogMode),i.material.set("edgeWeightInfluence",this.edgeWeightInfluence),i.material.set("preventOverlap",this.preventOverlap),i.material.set("positionTex",this._positionPrevTex),t.gl.enable(t.gl.BLEND),t.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT),t.gl.enable(t.gl.BLEND);var s=this._weightedSumMesh;s.material.set("positionTex",this._positionPrevTex),s.material.set("forceTex",this._forceTex),s.material.set("forcePrevTex",this._forcePrevTex),t.renderPass([s],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var h=this._globalSpeedPass;h.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),h.setUniform("weightedSumTex",this._weightedSumTex),h.setUniform("jitterTolerence",this.jitterTolerence),t.gl.disable(t.gl.BLEND),h.render(t);var u=this._positionPass;this._framebuffer.attach(this._positionTex),u.setUniform("globalSpeedTex",this._globalSpeedTex),u.setUniform("positionTex",this._positionPrevTex),u.setUniform("forceTex",this._forceTex),u.setUniform("forcePrevTex",this._forcePrevTex),u.render(t),this._framebuffer.unbind(t),this._swapTexture()},k.prototype.update=function(t,e,i){e==null&&(e=1),e=Math.max(e,1);for(var s=0;s<e;s++)this.step(t);i&&i()},k.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex},k.prototype.getNodeUV=function(t,e){e=e||[];var i=this._positionTex.width,s=this._positionTex.height;return e[0]=t%i/(i-1),e[1]=Math.floor(t/i)/(s-1)||0,e},k.prototype.getNodePosition=function(t,e){var i=this._positionArr,s=this._positionTex.width,h=this._positionTex.height,u=s*h;(!i||i.length!==u*4)&&(i=this._positionArr=new Float32Array(u*4)),this._framebuffer.bind(t),this._framebuffer.attach(this._positionPrevTex),t.gl.readPixels(0,0,s,h,t.gl.RGBA,t.gl.FLOAT,i),this._framebuffer.unbind(t),e||(e=new Float32Array(this._nodes.length*2));for(var c=0;c<this._nodes.length;c++)e[c*2]=i[c*4],e[c*2+1]=i[c*4+1];return e},k.prototype.getTextureData=function(t,e){var i=this["_"+e+"Tex"],s=i.width,h=i.height;this._framebuffer.bind(t),this._framebuffer.attach(i);var u=new Float32Array(s*h*4);return t.gl.readPixels(0,0,s,h,t.gl.RGBA,t.gl.FLOAT,u),this._framebuffer.unbind(t),u},k.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}},k.prototype.isFinished=function(t){return this._frame>t},k.prototype._swapTexture=function(){var t=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=t;var t=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=t;var t=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=t},k.prototype._initFromSource=function(t){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(t),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(t),t.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(t)},k.prototype._resize=function(t,e){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(i){this[i].width=t,this[i].height=e,this[i].dirty()},this)},k.prototype.dispose=function(t){this._framebuffer.dispose(t),this._copyPass.dispose(t),this._nodeRepulsionPass.dispose(t),this._positionPass.dispose(t),this._globalSpeedPass.dispose(t),this._edgeForceMesh.geometry.dispose(t),this._weightedSumMesh.geometry.dispose(t),this._positionSourceTex.dispose(t),this._positionTex.dispose(t),this._positionPrevTex.dispose(t),this._forceTex.dispose(t),this._forcePrevTex.dispose(t),this._weightedSumTex.dispose(t),this._globalSpeedTex.dispose(t),this._globalSpeedPrevTex.dispose(t)};var R=k,D=I(660126),O=I(791912);function z(){var t={create:function(){return new Float32Array(2)},dist:function(n,o){var l=o[0]-n[0],g=o[1]-n[1];return Math.sqrt(l*l+g*g)},len:function(n){var o=n[0],l=n[1];return Math.sqrt(o*o+l*l)},scaleAndAdd:function(n,o,l,g){return n[0]=o[0]+l[0]*g,n[1]=o[1]+l[1]*g,n},scale:function(n,o,l){return n[0]=o[0]*l,n[1]=o[1]*l,n},add:function(n,o,l){return n[0]=o[0]+l[0],n[1]=o[1]+l[1],n},sub:function(n,o,l){return n[0]=o[0]-l[0],n[1]=o[1]-l[1],n},normalize:function(n,o){var l=o[0],g=o[1],y=l*l+g*g;return y>0&&(y=1/Math.sqrt(y),n[0]=o[0]*y,n[1]=o[1]*y),n},negate:function(n,o){return n[0]=-o[0],n[1]=-o[1],n},copy:function(n,o){return n[0]=o[0],n[1]=o[1],n},set:function(n,o,l){return n[0]=o,n[1]=l,n}};function e(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var i=e.prototype;i.beforeUpdate=function(){for(var a=0;a<this.nSubRegions;a++)this.subRegions[a].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},i.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var a=0;a<this.nSubRegions;a++)this.subRegions[a].afterUpdate()},i.addNode=function(a){if(this.nSubRegions===0)if(this.node==null){this.node=a;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(a),this._updateCenterOfMass(a)},i.findSubRegion=function(a,n){for(var o=0;o<this.nSubRegions;o++){var l=this.subRegions[o];if(l.contain(a,n))return l}},i.contain=function(a,n){return this.bbox[0]<=a&&this.bbox[2]>=a&&this.bbox[1]<=n&&this.bbox[3]>=n},i.setBBox=function(a,n,o,l){this.bbox[0]=a,this.bbox[1]=n,this.bbox[2]=o,this.bbox[3]=l,this.size=(o-a+l-n)/2},i._newSubRegion=function(){var a=this.subRegions[this.nSubRegions];return a||(a=new e,this.subRegions[this.nSubRegions]=a),this.nSubRegions++,a},i._addNodeToSubRegion=function(a){var n=this.findSubRegion(a.position[0],a.position[1]),o=this.bbox;if(!n){var l=(o[0]+o[2])/2,g=(o[1]+o[3])/2,y=(o[2]-o[0])/2,E=(o[3]-o[1])/2,F=a.position[0]>=l?1:0,H=a.position[1]>=g?1:0,n=this._newSubRegion();n.setBBox(F*y+o[0],H*E+o[1],(F+1)*y+o[0],(H+1)*E+o[1])}n.addNode(a)},i._updateCenterOfMass=function(a){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var n=this.centerOfMass[0]*this.mass,o=this.centerOfMass[1]*this.mass;n+=a.position[0]*a.mass,o+=a.position[1]*a.mass,this.mass+=a.mass,this.centerOfMass[0]=n/this.mass,this.centerOfMass[1]=o/this.mass};function s(){this.position=new Float32Array(2),this.force=t.create(),this.forcePrev=t.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function h(a,n){this.source=a,this.target=n,this.weight=1}function u(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new e,this.rootRegion.centerOfMass=t.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var c=u.prototype;c.initNodes=function(a,n,o){var l=n.length;this.nodes.length=0;for(var g=typeof o!="undefined",y=0;y<l;y++){var E=new s;E.position[0]=a[y*2],E.position[1]=a[y*2+1],E.mass=n[y],g&&(E.size=o[y]),this.nodes.push(E)}this._massArr=n,this._swingingArr=new Float32Array(l),g&&(this._sizeArr=o)},c.initEdges=function(a,n){var o=a.length/2;this.edges.length=0;for(var l=0;l<o;l++){var g=a[l*2],y=a[l*2+1],E=this.nodes[g],F=this.nodes[y];if(!E||!F){console.error("Node not exists, try initNodes before initEdges");return}E.outDegree++,F.inDegree++;var H=new h(E,F);n&&(H.weight=n[l]),this.edges.push(H)}},c.updateSettings=function(){if(this.repulsionByDegree)for(var a=0;a<this.nodes.length;a++){var n=this.nodes[a];n.mass=n.inDegree+n.outDegree+1}else for(var a=0;a<this.nodes.length;a++){var n=this.nodes[a];n.mass=this._massArr[a]}},c.update=function(){var a=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var n=0;n<a;n++)this.rootRegion.addNode(this.nodes[n]);this.rootRegion.afterUpdate()}for(var n=0;n<a;n++){var o=this.nodes[n];t.copy(o.forcePrev,o.force),t.set(o.force,0,0)}for(var n=0;n<a;n++){var l=this.nodes[n];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,l);else for(var g=n+1;g<a;g++){var y=this.nodes[g];this.applyNodeToNodeRepulsion(l,y,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(l):this.applyNodeGravity(l))}for(var n=0;n<this.edges.length;n++)this.applyEdgeAttraction(this.edges[n]);for(var E=0,F=0,H=t.create(),n=0;n<a;n++){var o=this.nodes[n],X=t.dist(o.force,o.forcePrev);E+=X*o.mass,t.add(H,o.force,o.forcePrev);var re=t.len(H)*.5;F+=re*o.mass,this._swingingArr[n]=X}var te=this.jitterTolerence*this.jitterTolerence*F/E;this._globalSpeed>0&&(te=Math.min(te/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=te;for(var n=0;n<a;n++){var o=this.nodes[n],X=this._swingingArr[n],se=.1*te/(1+te*Math.sqrt(X)),he=t.len(o.force);he>0&&(se=Math.min(he*se,10)/he,t.scaleAndAdd(o.position,o.position,o.force,se))}},c.applyRegionToNodeRepulsion=function(){var a=t.create();return function(o,l){if(o.node)this.applyNodeToNodeRepulsion(o.node,l,!0);else{t.sub(a,l.position,o.centerOfMass);var g=a[0]*a[0]+a[1]*a[1];if(g>this.barnesHutTheta*o.size*o.size){var y=this.scaling*l.mass*o.mass/g;t.scaleAndAdd(l.force,l.force,a,y)}else for(var E=0;E<o.nSubRegions;E++)this.applyRegionToNodeRepulsion(o.subRegions[E],l)}}}(),c.applyNodeToNodeRepulsion=function(){var a=t.create();return function(o,l,g){if(o!=l){t.sub(a,o.position,l.position);var y=a[0]*a[0]+a[1]*a[1];if(y!==0){var E;if(this.preventOverlap){var F=Math.sqrt(y);if(F=F-o.size-l.size,F>0)E=this.scaling*o.mass*l.mass/(F*F);else if(F<0)E=this.scaling*100*o.mass*l.mass;else return}else E=this.scaling*o.mass*l.mass/y;t.scaleAndAdd(o.force,o.force,a,E),t.scaleAndAdd(l.force,l.force,a,-E)}}}}(),c.applyEdgeAttraction=function(){var a=t.create();return function(o){var l=o.source,g=o.target;t.sub(a,l.position,g.position);var y=t.len(a),E;this.edgeWeightInfluence===0?E=1:this.edgeWeightInfluence===1?E=o.weight:E=Math.pow(o.weight,this.edgeWeightInfluence);var F;this.preventOverlap&&(y=y-l.size-g.size,y<=0)||(this.linLogMode?F=-E*Math.log(y+1)/(y+1):F=-E,t.scaleAndAdd(l.force,l.force,a,F),t.scaleAndAdd(g.force,g.force,a,-F))}}(),c.applyNodeGravity=function(){var a=t.create();return function(n){t.sub(a,this.gravityCenter,n.position);var o=t.len(a);t.scaleAndAdd(n.force,n.force,a,this.gravity*n.mass/(o+1))}}(),c.applyNodeStrongGravity=function(){var a=t.create();return function(n){t.sub(a,this.gravityCenter,n.position),t.scaleAndAdd(n.force,n.force,a,this.gravity*n.mass)}}(),c.updateBBox=function(){for(var a=Infinity,n=Infinity,o=-Infinity,l=-Infinity,g=0;g<this.nodes.length;g++){var y=this.nodes[g].position;a=Math.min(a,y[0]),n=Math.min(n,y[1]),o=Math.max(o,y[0]),l=Math.max(l,y[1])}this.bbox[0]=a,this.bbox[1]=n,this.bbox[2]=o,this.bbox[3]=l},c.getGlobalSpeed=function(){return this._globalSpeed};var T=null;self.onmessage=function(a){switch(a.data.cmd){case"init":T=new u,T.initNodes(a.data.nodesPosition,a.data.nodesMass,a.data.nodesSize),T.initEdges(a.data.edges,a.data.edgesWeight);break;case"updateConfig":if(T)for(var n in a.data.config)T[n]=a.data.config[n];break;case"update":var o=a.data.steps;if(T){for(var l=0;l<o;l++)T.update();for(var g=T.nodes.length,y=new Float32Array(g*2),l=0;l<g;l++){var E=T.nodes[l];y[l*2]=E.position[0],y[l*2+1]=E.position[1]}self.postMessage({buffer:y.buffer,globalSpeed:T.getGlobalSpeed()},[y.buffer])}else{var F=new Float32Array;self.postMessage({buffer:F.buffer,globalSpeed:T.getGlobalSpeed()},[F.buffer])}break}}}var A=z,M=A.toString();M=M.slice(M.indexOf("{")+1,M.lastIndexOf("}"));var S={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},r=function(e){for(var i in S)this[i]=S[i];if(e)for(var i in e)this[i]=e[i];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new D.Z({type:O.Z.FLOAT,flipY:!1,minFilter:O.Z.NEAREST,magFilter:O.Z.NEAREST})};r.prototype.initData=function(t,e){var i=new Blob([M]),s=window.URL.createObjectURL(i);this._worker=new Worker(s),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=t,this._edges=e,this._frame=0;for(var h=t.length,u=e.length,c=new Float32Array(h*2),T=new Float32Array(h),a=new Float32Array(h),n=new Float32Array(u*2),o=new Float32Array(u),l=0;l<t.length;l++){var g=t[l];c[l*2]=g.x,c[l*2+1]=g.y,T[l]=g.mass==null?1:g.mass,a[l]=g.size==null?1:g.size}for(var l=0;l<e.length;l++){var y=e[l],E=y.node1,F=y.node2;n[l*2]=E,n[l*2+1]=F,o[l]=y.weight==null?1:y.weight}var H=Math.ceil(Math.sqrt(t.length)),X=H,re=new Float32Array(H*X*4),te=this._positionTex;te.width=H,te.height=X,te.pixels=re,this._worker.postMessage({cmd:"init",nodesPosition:c,nodesMass:T,nodesSize:a,edges:n,edgesWeight:o}),this._globalSpeed=Infinity},r.prototype.updateOption=function(t){var e={};for(var i in S)e[i]=S[i];var s=this._nodes,h=this._edges,u=s.length;if(u>5e4?e.jitterTolerence=10:u>5e3?e.jitterTolerence=1:e.jitterTolerence=.1,u>100?e.scaling=2:e.scaling=10,u>1e3?e.barnesHutOptimize=!0:e.barnesHutOptimize=!1,t)for(var i in S)t[i]!=null&&(e[i]=t[i]);if(!e.gravityCenter){for(var c=[Infinity,Infinity],T=[-Infinity,-Infinity],a=0;a<s.length;a++)c[0]=Math.min(s[a].x,c[0]),c[1]=Math.min(s[a].y,c[1]),T[0]=Math.max(s[a].x,T[0]),T[1]=Math.max(s[a].y,T[1]);e.gravityCenter=[(c[0]+T[0])*.5,(c[1]+T[1])*.5]}for(var a=0;a<h.length;a++){var n=h[a].node1,o=h[a].node2;s[n].degree=(s[n].degree||0)+1,s[o].degree=(s[o].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:e})},r.prototype.update=function(t,e,i){e==null&&(e=1),e=Math.max(e,1),this._frame+=e,this._onupdate=i,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(e)})},r.prototype._$onupdate=function(t){if(!this._disposed){var e=new Float32Array(t.data.buffer);this._globalSpeed=t.data.globalSpeed,this._positionArr=e,this._updateTexture(e),this._onupdate&&this._onupdate()}},r.prototype.getNodePositionTexture=function(){return this._positionTex},r.prototype.getNodeUV=function(t,e){e=e||[];var i=this._positionTex.width,s=this._positionTex.height;return e[0]=t%i/(i-1),e[1]=Math.floor(t/i)/(s-1),e},r.prototype.getNodes=function(){return this._nodes},r.prototype.getEdges=function(){return this._edges},r.prototype.isFinished=function(t){return this._frame>t},r.prototype.getNodePosition=function(t,e){if(e||(e=new Float32Array(this._nodes.length*2)),this._positionArr)for(var i=0;i<this._positionArr.length;i++)e[i]=this._positionArr[i];return e},r.prototype._updateTexture=function(t){for(var e=this._positionTex.pixels,i=0,s=0;s<t.length;)e[i++]=t[s++],e[i++]=t[s++],e[i++]=1,e[i++]=1;this._positionTex.dirty()},r.prototype.dispose=function(t){this._disposed=!0,this._worker=null};var f=r,b=I(491565),p=I(372541),_=I(906253),Z=I(782212),v=I(398974),d=I(262489),m=p.Z.vec2;P.Z.Shader.import(d.Z);var x=1,w=N.TA.extend({type:"graphGL",__ecgl__:!0,init:function(e,i){this.groupGL=new P.Z.Node,this.viewGL=new Y.Z("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new v.Z(!0,i),this._forceEdgesMesh=new P.Z.Mesh({material:new P.Z.Material({shader:P.Z.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new P.Z.Geometry({attributes:{node:new P.Z.Geometry.Attribute("node","float",2),color:new P.Z.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:P.Z.Mesh.LINES}),this._edgesMesh=new P.Z.Mesh({material:new P.Z.Material({shader:P.Z.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new J.Z({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Z.Z({zr:i.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,i,s){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=s,this._initLayout(e,i,s),this._pointsBuilder.update(e,i,s),this._forceLayoutInstance instanceof R||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,s),this._control.off("update"),this._control.on("update",function(){s.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(B.Z.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var h=this._pointsBuilder.getPointsMesh();if(h.off("mousemove",this._mousemoveHandler),h.off("mouseout",this._mouseOutHandler,this),s.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var u=e.get("focusNodeAdjacencyOn");u==="click"?s.getZr().on("click",this._clickHandler):u==="mouseover"&&(h.on("mousemove",this._mousemoveHandler,this),h.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var i=this._pointsBuilder.getPointsMesh().dataIndex;i>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:i}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var i=this._pointsBuilder.getPointsMesh().dataIndex;i>=0?i!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:i}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=i}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,i){var s=this._forceEdgesMesh.geometry,h=i.getEdgeData(),u=0,c=this._forceLayoutInstance,T=h.count()*2;s.attributes.node.init(T),s.attributes.color.init(T),h.each(function(a){var n=e[a];s.attributes.node.set(u,c.getNodeUV(n.node1)),s.attributes.node.set(u+1,c.getNodeUV(n.node2));var o=(0,_.BM)(h,n.dataIndex),l=P.Z.parseColor(o);l[3]*=B.Z.firstNotNull((0,_.Jk)(h,n.dataIndex),1),s.attributes.color.set(u,l),s.attributes.color.set(u+1,l),u+=2}),s.dirty()},_updateMeshLinesGeometry:function(){var e=this._model.getEdgeData(),i=this._edgesMesh.geometry,e=this._model.getEdgeData(),s=this._model.getData().getLayout("points");i.resetOffset(),i.setVertexCount(e.count()*i.getLineVertexCount()),i.setTriangleCount(e.count()*i.getLineTriangleCount());var h=[],u=[],c=["lineStyle","width"];this._originalEdgeColors=new Float32Array(e.count()*4),this._edgeIndicesMap=new Float32Array(e.count()),e.each(function(T){var a=e.graph.getEdgeByIndex(T),n=a.node1.dataIndex*2,o=a.node2.dataIndex*2;h[0]=s[n],h[1]=s[n+1],u[0]=s[o],u[1]=s[o+1];var l=(0,_.BM)(e,a.dataIndex),g=P.Z.parseColor(l);g[3]*=B.Z.firstNotNull((0,_.Jk)(e,a.dataIndex),1);var y=e.getItemModel(a.dataIndex),E=B.Z.firstNotNull(y.get(c),1)*this._api.getDevicePixelRatio();i.addLine(h,u,g,E);for(var F=0;F<4;F++)this._originalEdgeColors[a.dataIndex*4+F]=g[F];this._edgeIndicesMap[a.dataIndex]=T},this),i.dirty()},_updateForceNodesGeometry:function(e){for(var i=this._pointsBuilder.getPointsMesh(),s=[],h=0;h<e.count();h++)this._forceLayoutInstance.getNodeUV(h,s),i.geometry.attributes.position.set(h,s);i.geometry.dirty("position")},_initLayout:function(e,i,s){var h=e.get("layout"),u=e.getGraph(),c=e.getBoxLayoutParams(),T=(0,K.ME)(c,{width:s.getWidth(),height:s.getHeight()});h==="force"&&(h="forceAtlas2"),this.stopLayout(e,i,s,{beforeLayout:!0});var a=e.getData(),n=e.getData();if(h==="forceAtlas2"){var o=e.getModel("forceAtlas2"),l=this._forceLayoutInstance,g=[],y=[],E=a.getDataExtent("value"),F=n.getDataExtent("value"),H=B.Z.firstNotNull(o.get("edgeWeight"),1),X=B.Z.firstNotNull(o.get("nodeWeight"),1);typeof H=="number"&&(H=[H,H]),typeof X=="number"&&(X=[X,X]);var re=0,te={},se=new Float32Array(a.count()*2);if(u.eachNode(function(de){var ce=de.dataIndex,ve=a.get("value",ce),ne,ue;if(a.hasItemOption){var ge=a.getItemModel(ce);ne=ge.get("x"),ue=ge.get("y")}ne==null&&(ne=T.x+Math.random()*T.width,ue=T.y+Math.random()*T.height),se[re*2]=ne,se[re*2+1]=ue,te[de.id]=re++;var fe=N.Rx.linearMap(ve,E,X);isNaN(fe)&&(isNaN(X[0])?fe=1:fe=X[0]),g.push({x:ne,y:ue,mass:fe,size:a.getItemVisual(ce,"symbolSize")})}),a.setLayout("points",se),u.eachEdge(function(de){var ce=de.dataIndex,ve=a.get("value",ce),ne=N.Rx.linearMap(ve,F,H);isNaN(ne)&&(isNaN(H[0])?ne=1:ne=H[0]),y.push({node1:te[de.node1.id],node2:te[de.node2.id],weight:ne,dataIndex:ce})}),!l){var he=o.get("GPU");this._forceLayoutInstance&&(he&&!(this._forceLayoutInstance instanceof R)||!he&&!(this._forceLayoutInstance instanceof f))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),l=this._forceLayoutInstance=he?new R:new f}l.initData(g,y),l.updateOption(o.option),this._updateForceEdgesGeometry(l.getEdges(),e),this._updatePositionTexture(),s.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var se=new Float32Array(a.count()*2),re=0;u.eachNode(function(ve){var ne=ve.dataIndex,ue,ge;if(a.hasItemOption){var fe=a.getItemModel(ne);ue=fe.get("x"),ge=fe.get("y")}se[re++]=ue,se[re++]=ge}),a.setLayout("points",se),this._updateAfterLayout(e,i,s)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,i,s,h){if(!(h&&h.from!=null&&h.from!==this.uid)){var u=this.viewGL,s=this._api,c=this._forceLayoutInstance,T=this._model.getData(),a=this._model.getModel("forceAtlas2");if(!!c&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var n=this,o=this._layoutId=x++,l=a.getShallow("maxSteps"),g=a.getShallow("steps"),y=0,E=Math.max(g*2,20),F=function H(X){if(X===n._layoutId){if(c.isFinished(l)){s.dispatchAction({type:"graphGLStopLayout",from:n.uid}),s.dispatchAction({type:"graphGLFinishLayout",points:T.getLayout("points"),from:n.uid});return}c.update(u.layer.renderer,g,function(){n._updatePositionTexture(),y+=g,y>=E&&(n._syncNodePosition(e),y=0),s.getZr().refresh(),(0,b.Z)(function(){H(X)})})}};(0,b.Z)(function(){n._forceLayoutInstanceToDispose&&(n._forceLayoutInstanceToDispose.dispose(u.layer.renderer),n._forceLayoutInstanceToDispose=null),F(o)}),this._layouting=!0}}},stopLayout:function(e,i,s,h){h&&h.from!=null&&h.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),!!this._forceLayoutInstance&&(!this.viewGL.layer||(h&&h.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,i,s)),this._api.getZr().refresh(),this._layouting=!1)))},_syncNodePosition:function(e){var i=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",i),e.setNodePosition(i)},_updateAfterLayout:function(e,i,s){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,i,s),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,i,s,h){var u=this._model.getData();this._downplayAll();var c=h.dataIndex,T=u.graph,a=[],n=T.getNodeByIndex(c);a.push(n),n.edges.forEach(function(l){l.dataIndex<0||(l.node1!==n&&a.push(l.node1),l.node2!==n&&a.push(l.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),a.forEach(function(l){this._pointsBuilder.highlight(u,l.dataIndex)},this),this._pointsBuilder.updateLabels(a.map(function(l){return l.dataIndex}));var o=[];n.edges.forEach(function(l){l.dataIndex>=0&&(this._highlightEdge(l.dataIndex),o.push(l))},this),this._focusNodes=a,this._focusEdges=o},unfocusNodeAdjacency:function(e,i,s,h){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var i=this._model.getEdgeData().getItemModel(e),s=P.Z.parseColor(i.get("emphasis.lineStyle.color")||i.get("lineStyle.color")),h=B.Z.firstNotNull(i.get("emphasis.lineStyle.opacity"),i.get("lineStyle.opacity"),1);s[3]*=h,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],s)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var i=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],i)},_setEdgeFade:function(){var t=[];return function(e,i){this._getColor(e,t),t[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)}}(),_getColor:function(e,i){for(var s=0;s<4;s++)i[s]=this._originalEdgeColors[e*4+s];return i},_fadeOutEdgesAll:function(e){var i=this._model.getData().graph;i.eachEdge(function(s){this._setEdgeFade(s.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,i){this.viewGL.setViewport(0,0,i.getWidth(),i.getHeight(),i.getDevicePixelRatio());for(var s=this.viewGL.camera,h=e.getData(),u=h.getLayout("points"),c=m.create(Infinity,Infinity),T=m.create(-Infinity,-Infinity),a=[],n=0;n<u.length;)a[0]=u[n++],a[1]=u[n++],m.min(c,c,a),m.max(T,T,a);var o=(T[1]+c[1])/2,l=(T[0]+c[0])/2;if(!(l>s.left&&l<s.right&&o<s.bottom&&o>s.top)){var g=Math.max(T[0]-c[0],10),y=g/i.getWidth()*i.getHeight();g*=1.4,y*=1.4,c[0]-=g*.2,s.left=c[0],s.top=o-y/2,s.bottom=o+y/2,s.right=g+c[0],s.near=0,s.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function L(t){return t instanceof Array||(t=[t,t]),t}function C(t){t.registerChartView(w),t.registerSeriesModel($),t.registerVisual(function(i){var s={};i.eachSeriesByType("graphGL",function(h){var u=h.getCategoriesData(),c=h.getData(),T={};u.each(function(a){var n=u.getName(a);T["ec-"+n]=a;var o=u.getItemModel(a),l=o.getModel("itemStyle").getItemStyle();l.fill||(l.fill=h.getColorFromPalette(n,s)),u.setItemVisual(a,"style",l);for(var g=["symbol","symbolSize","symbolKeepAspect"],y=0;y<g.length;y++){var E=o.getShallow(g[y],!0);E!=null&&u.setItemVisual(a,g[y],E)}}),u.count()&&c.each(function(a){var n=c.getItemModel(a),o=n.getShallow("category");if(o!=null){typeof o=="string"&&(o=T["ec-"+o]);var l=u.getItemVisual(o,"style"),g=c.ensureUniqueItemVisual(a,"style");N.D5.extend(g,l);for(var y=["symbol","symbolSize","symbolKeepAspect"],E=0;E<y.length;E++)c.setItemVisual(a,y[E],u.getItemVisual(o,y[E]))}})})}),t.registerVisual(function(i){i.eachSeriesByType("graphGL",function(s){var h=s.getGraph(),u=s.getEdgeData(),c=L(s.get("edgeSymbol")),T=L(s.get("edgeSymbolSize"));u.setVisual("drawType","stroke"),u.setVisual("fromSymbol",c&&c[0]),u.setVisual("toSymbol",c&&c[1]),u.setVisual("fromSymbolSize",T&&T[0]),u.setVisual("toSymbolSize",T&&T[1]),u.setVisual("style",s.getModel("lineStyle").getLineStyle()),u.each(function(a){var n=u.getItemModel(a),o=h.getEdgeByIndex(a),l=L(n.getShallow("symbol",!0)),g=L(n.getShallow("symbolSize",!0)),y=n.getModel("lineStyle").getLineStyle(),E=u.ensureUniqueItemVisual(a,"style");switch(N.D5.extend(E,y),E.stroke){case"source":{var F=o.node1.getVisual("style");E.stroke=F&&F.fill;break}case"target":{var F=o.node2.getVisual("style");E.stroke=F&&F.fill;break}}l[0]&&o.setVisual("fromSymbol",l[0]),l[1]&&o.setVisual("toSymbol",l[1]),g[0]&&o.setVisual("fromSymbolSize",g[0]),g[1]&&o.setVisual("toSymbolSize",g[1])})})}),t.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(i,s){s.eachComponent({mainType:"series",query:i},function(h){h.setView(i)})});function e(){}t.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},e),t.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},e),t.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},e),t.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},e)}(0,N.D$)(C)}}]);
