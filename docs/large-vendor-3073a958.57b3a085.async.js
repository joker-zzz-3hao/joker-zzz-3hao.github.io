(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5998],{246956:function(K,f,r){"use strict";var F=r(354332).default,D=["dataName","notAppend","parent","uniq"],a=r(262144),E=function(d){return document.querySelector('[data-name="'.concat(d,'"]'))},V=a(function(I,d,h){return I.setAttribute(h,d[h])}),p=a(function(I,d,h){return I[h]=d[h]}),G=a(function(I,d){return!I(d)}),R=function(d){return d!=d.toLowerCase()};K.exports=function(I){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=d.dataName,b=d.notAppend,y=d.parent,_=y===void 0?document.body:y,u=d.uniq,te=u===void 0?!0:u,C=F(d,D),P=J(h);if(te&&P)return P;var T=document.createElement(I);return h&&(T.dataset.name=h),Object.keys(C).filter(R).map(p(T,d)),Object.keys(C).filter(G(R)).map(V(T,d)),b||_.appendChild(T),T},K.exports.isElementPresent=J;function J(I){if(!!I)return E(I)}},284399:function(K,f,r){"use strict";var F=r(400869),D=r(393740),a=r(934893),E=r(654915),V=r(20952),p=r(400252),G=r(306205),R=r(167029),J=F.Z.extend({scene:null,camera:null,renderer:null},function(){this._ray=new D.Z,this._ndc=new a.Z},{pick:function(d,h,b){var y=this.pickAll(d,h,[],b);return y[0]||null},pickAll:function(d,h,b,y){return this.renderer.screenToNDC(d,h,this._ndc),this.camera.castRay(this._ndc,this._ray),b=b||[],this._intersectNode(this.scene,b,y||!1),b.sort(this._intersectionCompareFunc),b},_intersectNode:function(d,h,b){d instanceof p.Z&&d.isRenderable()&&(!d.ignorePicking||b)&&(d.mode===G.Z.TRIANGLES&&d.geometry.isUseIndices()||d.geometry.pickByRay||d.geometry.pick)&&this._intersectRenderable(d,h);for(var y=0;y<d._children.length;y++)this._intersectNode(d._children[y],h,b)},_intersectRenderable:function(){var I=new E.Z,d=new E.Z,h=new E.Z,b=new D.Z,y=new V.Z;return function(_,u){var te=_.isSkinnedMesh();b.copy(this._ray),V.Z.invert(y,_.worldTransform),te||b.applyTransform(y);var C=_.geometry,P=te?_.skeleton.boundingBox:C.boundingBox;if(!(P&&!b.intersectBoundingBox(P))){if(C.pick){C.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,_,u);return}else if(C.pickByRay){C.pickByRay(b,_,u);return}var T=_.cullFace===G.Z.BACK&&_.frontFace===G.Z.CCW||_.cullFace===G.Z.FRONT&&_.frontFace===G.Z.CW,w,O=C.indices,N=C.attributes.position,W=C.attributes.weight,x=C.attributes.joint,n,e=[];if(!(!N||!N.value||!O)){if(te){n=_.skeleton.getSubSkinMatrices(_.__uid__,_.joints);for(var t=0;t<_.joints.length;t++){e[t]=e[t]||[];for(var l=0;l<16;l++)e[t][l]=n[t*16+l]}var A=[],o=[],L=[],B=[],v=[],Z=C.attributes.skinnedPosition;(!Z||!Z.value)&&(C.createAttribute("skinnedPosition","f",3),Z=C.attributes.skinnedPosition,Z.init(C.vertexCount));for(var t=0;t<C.vertexCount;t++){N.get(t,A),W.get(t,o),x.get(t,L),o[3]=1-o[0]-o[1]-o[2],R.Z.set(B,0,0,0);for(var l=0;l<4;l++)L[l]>=0&&o[l]>1e-4&&(R.Z.transformMat4(v,A,e[L[l]]),R.Z.scaleAndAdd(B,B,v,o[l]));Z.set(t,B)}}for(var t=0;t<O.length;t+=3){var Q=O[t],X=O[t+1],ee=O[t+2],j=te?C.attributes.skinnedPosition:N;if(j.get(Q,I.array),j.get(X,d.array),j.get(ee,h.array),T?w=b.intersectTriangle(I,d,h,_.culling):w=b.intersectTriangle(I,h,d,_.culling),w){var k=new E.Z;te?E.Z.copy(k,w):E.Z.transformMat4(k,w,_.worldTransform),u.push(new J.Intersection(w,k,_,[Q,X,ee],t/3,E.Z.dist(k,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(d,h){return d.distance-h.distance}});J.Intersection=function(I,d,h,b,y,_){this.point=I,this.pointWorld=d,this.target=h,this.triangle=b,this.triangleIndex=y,this.distance=_},f.Z=J},566911:function(K,f,r){"use strict";r.d(f,{Z:function(){return I}});var F=r(10681),D=r(117866),a=r(305302),E=r(405905),V=r(791912),p=r(678533),G=r(20952),R=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;a.Z.import(R);var J=F.Z.extend(function(){var d=new a.Z({vertex:a.Z.source("clay.skybox.vertex"),fragment:a.Z.source("clay.skybox.fragment")}),h=new E.Z({shader:d,depthMask:!1});return{scene:null,geometry:new D.Z,material:h,environmentMap:null,culling:!1,_dummyCamera:new p.Z}},function(){var d=this.scene;d&&this.attachScene(d),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(h){this.scene&&this.detachScene(),h.skybox=this,this.scene=h,h.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(h){this.detachScene(),this.geometry.dispose(h)},setEnvironmentMap:function(h){h.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),h.minFilter=V.Z.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",h)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(h,b,y){this.renderSkybox(h,y)},renderSkybox:function(h,b){var y=this._dummyCamera;y.aspect=h.getViewportAspect(),y.fov=b.fov||50,y.updateProjectionMatrix(),G.Z.invert(y.invProjectionMatrix,y.projectionMatrix),y.worldTransform.copy(b.worldTransform),y.viewMatrix.copy(b.viewMatrix),this.position.copy(b.getWorldPosition()),this.update(),h.gl.disable(h.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),h.renderPass([this],y)}}),I=J},740032:function(K,f,r){"use strict";var F=r(566911);f.Z=F.Z},644421:function(K,f,r){"use strict";var F=r(400869),D=r(654915),a=r(678533),E=r(540478),V=["px","nx","py","ny","pz","nz"],p=F.Z.extend(function(){var G={position:new D.Z,far:1e3,near:.1,texture:null,shadowMapPass:null},R=G._cameras={px:new a.Z({fov:90}),nx:new a.Z({fov:90}),py:new a.Z({fov:90}),ny:new a.Z({fov:90}),pz:new a.Z({fov:90}),nz:new a.Z({fov:90})};return R.px.lookAt(D.Z.POSITIVE_X,D.Z.NEGATIVE_Y),R.nx.lookAt(D.Z.NEGATIVE_X,D.Z.NEGATIVE_Y),R.py.lookAt(D.Z.POSITIVE_Y,D.Z.POSITIVE_Z),R.ny.lookAt(D.Z.NEGATIVE_Y,D.Z.NEGATIVE_Z),R.pz.lookAt(D.Z.POSITIVE_Z,D.Z.NEGATIVE_Y),R.nz.lookAt(D.Z.NEGATIVE_Z,D.Z.NEGATIVE_Y),G._frameBuffer=new E.Z,G},{getCamera:function(R){return this._cameras[R]},render:function(R,J,I){var d=R.gl;I||J.update();for(var h=this.texture.width,b=2*Math.atan(h/(h-.5))/Math.PI*180,y=0;y<6;y++){var _=V[y],u=this._cameras[_];if(D.Z.copy(u.position,this.position),u.far=this.far,u.near=this.near,u.fov=b,this.shadowMapPass){u.update();var te=J.getBoundingBox();te.applyTransform(u.viewMatrix),J.viewBoundingBoxLastFrame.copy(te),this.shadowMapPass.render(R,J,u,!0)}this._frameBuffer.attach(this.texture,d.COLOR_ATTACHMENT0,d.TEXTURE_CUBE_MAP_POSITIVE_X+y),this._frameBuffer.bind(R),R.render(J,u,!0),this._frameBuffer.unbind(R)}},dispose:function(R){this._frameBuffer.dispose(R)}});f.Z=p},234040:function(K,f,r){"use strict";r.d(f,{Z:function(){return W}});var F=r(400869),D=r(306205),a=r(654915),E=r(223263),V=r(921652),p=r(20952),G=r(343042),R=r(305302),J=r(405905),I=r(540478),d=r(791912),h=r(660126),b=r(333900),y=r(678533),_=r(513315),u=r(361491),te=r(742386),C=r(526698),P=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,T=["px","nx","py","ny","pz","nz"];R.Z.import(P);function w(x,n,e){if(e==="alphaMap")return x.material.get("diffuseMap");if(e==="alphaCutoff"){if(x.material.isDefined("fragment","ALPHA_TEST")&&x.material.get("diffuseMap")){var t=x.material.get("alphaCutoff");return t||0}return 0}else return e==="uvRepeat"?x.material.get("uvRepeat"):e==="uvOffset"?x.material.get("uvOffset"):n.get(e)}function O(x,n){var e=x.material,t=n.material;return e.get("diffuseMap")!==t.get("diffuseMap")||(e.get("alphaCutoff")||0)!==(t.get("alphaCutoff")||0)}var N=F.Z.extend(function(){return{softShadow:N.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new I.Z,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new te.Z}},function(){this._gaussianPassH=new u.Z({fragment:R.Z.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new u.Z({fragment:R.Z.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new u.Z({fragment:R.Z.source("clay.sm.debug_depth")})},{render:function(n,e,t,l){t||(t=e.getMainCamera()),this.trigger("beforerender",this,n,e,t),this._renderShadowPass(n,e,t,l),this.trigger("afterrender",this,n,e,t)},renderDebug:function(n,e){n.saveClear();var t=n.viewport,l=0,A=0,o=e||t.width/4,L=o;this.softShadow===N.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var B in this._textures){var v=this._textures[B];n.setViewport(l,A,o*v.width/v.height,L),this._outputDepthPass.setUniform("depthMap",v),this._outputDepthPass.render(n),l+=o*v.width/v.height}n.setViewport(t),n.restoreClear()},_updateReceivers:function(n,e){if(e.receiveShadow?(this._receivers.push(e),e.material.set("shadowEnabled",1),e.material.set("pcfKernel",this.kernelPCF)):e.material.set("shadowEnabled",0),this.softShadow===N.VSM)e.material.define("fragment","USE_VSM"),e.material.undefine("fragment","PCF_KERNEL_SIZE");else{e.material.undefine("fragment","USE_VSM");var t=this.kernelPCF;t&&t.length?e.material.define("fragment","PCF_KERNEL_SIZE",t.length/2):e.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(n,e){var t=this;e.traverse(function(o){o.isRenderable()&&t._updateReceivers(n,o)});for(var l=0;l<e.lights.length;l++){var A=e.lights[l];A.castShadow&&!A.invisible&&this._lightsCastShadow.push(A)}},_renderShadowPass:function(n,e,t,l){for(var A in this._shadowMapNumber)this._shadowMapNumber[A]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var o=n.gl;if(l||e.update(),t&&t.update(),e.updateLights(),this._update(n,e),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,o.enable(o.DEPTH_TEST),o.depthMask(!0),o.disable(o.BLEND),o.clearColor(1,1,1,1);for(var L=[],B=[],v=[],Z=[],Q=[],X=[],ee,j=0;j<this._lightsCastShadow.length;j++){var k=this._lightsCastShadow[j];if(k.type==="DIRECTIONAL_LIGHT"){if(ee){console.warn("Only one direectional light supported with shadow cascade");continue}if(k.shadowCascade>4){console.warn("Support at most 4 cascade");continue}k.shadowCascade>1&&(ee=k),this.renderDirectionalLightShadow(n,e,t,k,Q,Z,v)}else k.type==="SPOT_LIGHT"?this.renderSpotLightShadow(n,e,k,B,L):k.type==="POINT_LIGHT"&&this.renderPointLightShadow(n,e,k,X);this._shadowMapNumber[k.type]++}for(var ie in this._shadowMapNumber)for(var le=this._shadowMapNumber[ie],ce=ie+"_SHADOWMAP_COUNT",j=0;j<this._receivers.length;j++){var q=this._receivers[j],re=q.material;re.fragmentDefines[ce]!==le&&(le>0?re.define("fragment",ce,le):re.isDefined("fragment",ce)&&re.undefine("fragment",ce))}for(var j=0;j<this._receivers.length;j++){var q=this._receivers[j],re=q.material;ee?re.define("fragment","SHADOW_CASCADE",ee.shadowCascade):re.undefine("fragment","SHADOW_CASCADE")}var z=e.shadowUniforms;function ue(he){return he.height}if(v.length>0){var De=v.map(ue);if(z.directionalLightShadowMaps={value:v,type:"tv"},z.directionalLightMatrices={value:Z,type:"m4v"},z.directionalLightShadowMapSizes={value:De,type:"1fv"},ee){var ve=Q.slice(),ne=Q.slice();ve.pop(),ne.shift(),ve.reverse(),ne.reverse(),Z.reverse(),z.shadowCascadeClipsNear={value:ve,type:"1fv"},z.shadowCascadeClipsFar={value:ne,type:"1fv"}}}if(L.length>0){var Ee=L.map(ue),z=e.shadowUniforms;z.spotLightShadowMaps={value:L,type:"tv"},z.spotLightMatrices={value:B,type:"m4v"},z.spotLightShadowMapSizes={value:Ee,type:"1fv"}}X.length>0&&(z.pointLightShadowMaps={value:X,type:"tv"})},renderDirectionalLightShadow:function(){var x=new V.Z,n=new p.Z,e=new E.Z,t=new p.Z,l=new p.Z,A=new p.Z,o=new p.Z;return function(L,B,v,Z,Q,X,ee){var j=this._getDepthMaterial(Z),k={getMaterial:function(Me){return Me.shadowDepthMaterial||j},isMaterialChanged:O,getUniform:w,ifRender:function(Me){return Me.castShadow},sortCompare:G.Z.opaqueSortCompare};if(!B.viewBoundingBoxLastFrame.isFinite()){var ie=B.getBoundingBox();B.viewBoundingBoxLastFrame.copy(ie).applyTransform(v.viewMatrix)}var le=Math.min(-B.viewBoundingBoxLastFrame.min.z,v.far),ce=Math.max(-B.viewBoundingBoxLastFrame.max.z,v.near),q=this._getDirectionalLightCamera(Z,B,v),re=A.array;o.copy(q.projectionMatrix),C.Z.invert(l.array,q.worldTransform.array),C.Z.multiply(l.array,l.array,v.worldTransform.array),C.Z.multiply(re,o.array,l.array);for(var z=[],ue=v instanceof y.Z,De=(v.near+v.far)/(v.near-v.far),ve=2*v.near*v.far/(v.near-v.far),ne=0;ne<=Z.shadowCascade;ne++){var Ee=ce*Math.pow(le/ce,ne/Z.shadowCascade),he=ce+(le-ce)*ne/Z.shadowCascade,_e=Ee*Z.cascadeSplitLogFactor+he*(1-Z.cascadeSplitLogFactor);z.push(_e),Q.push(-(-_e*De+ve)/-_e)}var me=this._getTexture(Z,Z.shadowCascade);ee.push(me);var be=L.viewport,ye=L.gl;this._frameBuffer.attach(me),this._frameBuffer.bind(L),ye.clear(ye.COLOR_BUFFER_BIT|ye.DEPTH_BUFFER_BIT);for(var ne=0;ne<Z.shadowCascade;ne++){var Ae=z[ne],Pe=z[ne+1];ue?C.Z.perspective(n.array,v.fov/180*Math.PI,v.aspect,Ae,Pe):C.Z.ortho(n.array,v.left,v.right,v.bottom,v.top,Ae,Pe),x.setFromProjection(n),x.getTransformedBoundingBox(e,l),e.applyProjection(o);var Te=e.min.array,pe=e.max.array;Te[0]=Math.max(Te[0],-1),Te[1]=Math.max(Te[1],-1),pe[0]=Math.min(pe[0],1),pe[1]=Math.min(pe[1],1),t.ortho(Te[0],pe[0],Te[1],pe[1],1,-1),q.projectionMatrix.multiplyLeft(t);var we=Z.shadowResolution||512;L.setViewport((Z.shadowCascade-ne-1)*we,0,we,we,1);var Le=B.updateRenderList(q);L.renderPass(Le.opaque,q,k),this.softShadow===N.VSM&&this._gaussianFilter(L,me,me.width);var Ne=new p.Z;Ne.copy(q.viewMatrix).multiplyLeft(q.projectionMatrix),X.push(Ne.array),q.projectionMatrix.copy(o)}this._frameBuffer.unbind(L),L.setViewport(be)}}(),renderSpotLightShadow:function(n,e,t,l,A){var o=this._getTexture(t),L=this._getSpotLightCamera(t),B=n.gl;this._frameBuffer.attach(o),this._frameBuffer.bind(n),B.clear(B.COLOR_BUFFER_BIT|B.DEPTH_BUFFER_BIT);var v=this._getDepthMaterial(t),Z={getMaterial:function(j){return j.shadowDepthMaterial||v},isMaterialChanged:O,getUniform:w,ifRender:function(j){return j.castShadow},sortCompare:G.Z.opaqueSortCompare},Q=e.updateRenderList(L);n.renderPass(Q.opaque,L,Z),this._frameBuffer.unbind(n),this.softShadow===N.VSM&&this._gaussianFilter(n,o,o.width);var X=new p.Z;X.copy(L.worldTransform).invert().multiplyLeft(L.projectionMatrix),A.push(o),l.push(X.array)},renderPointLightShadow:function(n,e,t,l){var A=this._getTexture(t),o=n.gl;l.push(A);var L=this._getDepthMaterial(t),B={getMaterial:function(re){return re.shadowDepthMaterial||L},getUniform:w,sortCompare:G.Z.opaqueSortCompare},v={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},Z=new E.Z,Q=t.getWorldPosition().array,X=new E.Z,ee=t.range;X.min.setArray(Q),X.max.setArray(Q);var j=new a.Z(ee,ee,ee);X.max.add(j),X.min.sub(j);var k={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};e.traverse(function(q){if(q.isRenderable()&&q.castShadow){var re=q.geometry;if(!re.boundingBox){for(var z=0;z<T.length;z++)v[T[z]].push(q);return}if(Z.transformFrom(re.boundingBox,q.worldTransform),!Z.intersectBoundingBox(X))return;Z.updateVertices();for(var z=0;z<T.length;z++)k[T[z]]=!1;for(var z=0;z<8;z++){var ue=Z.vertices[z],De=ue[0]-Q[0],ve=ue[1]-Q[1],ne=ue[2]-Q[2],Ee=Math.abs(De),he=Math.abs(ve),_e=Math.abs(ne);Ee>he?Ee>_e?k[De>0?"px":"nx"]=!0:k[ne>0?"pz":"nz"]=!0:he>_e?k[ve>0?"py":"ny"]=!0:k[ne>0?"pz":"nz"]=!0}for(var z=0;z<T.length;z++)k[T[z]]&&v[T[z]].push(q)}});for(var ie=0;ie<6;ie++){var le=T[ie],ce=this._getPointLightCamera(t,le);this._frameBuffer.attach(A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ie),this._frameBuffer.bind(n),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),n.renderPass(v[le],ce,B)}this._frameBuffer.unbind(n)},_getDepthMaterial:function(n){var e=this._lightMaterials[n.__uid__],t=n.type==="POINT_LIGHT";if(!e){var l=t?"clay.sm.distance.":"clay.sm.depth.";e=new J.Z({precision:this.precision,shader:new R.Z(R.Z.source(l+"vertex"),R.Z.source(l+"fragment"))}),this._lightMaterials[n.__uid__]=e}return n.shadowSlopeScale!=null&&e.setUniform("slopeScale",n.shadowSlopeScale),n.shadowBias!=null&&e.setUniform("bias",n.shadowBias),this.softShadow===N.VSM?e.define("fragment","USE_VSM"):e.undefine("fragment","USE_VSM"),t&&(e.set("lightPosition",n.getWorldPosition().array),e.set("range",n.range)),e},_gaussianFilter:function(n,e,t){var l={width:t,height:t,type:d.Z.FLOAT},A=this._texturePool.get(l);this._frameBuffer.attach(A),this._frameBuffer.bind(n),this._gaussianPassH.setUniform("texture",e),this._gaussianPassH.setUniform("textureWidth",t),this._gaussianPassH.render(n),this._frameBuffer.attach(e),this._gaussianPassV.setUniform("texture",A),this._gaussianPassV.setUniform("textureHeight",t),this._gaussianPassV.render(n),this._frameBuffer.unbind(n),this._texturePool.put(A)},_getTexture:function(n,e){var t=n.__uid__,l=this._textures[t],A=n.shadowResolution||512;return e=e||1,l||(n.type==="POINT_LIGHT"?l=new b.Z:l=new h.Z,l.width=A*e,l.height=A,this.softShadow===N.VSM?(l.type=d.Z.FLOAT,l.anisotropic=4):(l.minFilter=D.Z.NEAREST,l.magFilter=D.Z.NEAREST,l.useMipmap=!1),this._textures[t]=l),l},_getPointLightCamera:function(n,e){this._lightCameras.point||(this._lightCameras.point={px:new y.Z,nx:new y.Z,py:new y.Z,ny:new y.Z,pz:new y.Z,nz:new y.Z});var t=this._lightCameras.point[e];switch(t.far=n.range,t.fov=90,t.position.set(0,0,0),e){case"px":t.lookAt(a.Z.POSITIVE_X,a.Z.NEGATIVE_Y);break;case"nx":t.lookAt(a.Z.NEGATIVE_X,a.Z.NEGATIVE_Y);break;case"py":t.lookAt(a.Z.POSITIVE_Y,a.Z.POSITIVE_Z);break;case"ny":t.lookAt(a.Z.NEGATIVE_Y,a.Z.NEGATIVE_Z);break;case"pz":t.lookAt(a.Z.POSITIVE_Z,a.Z.NEGATIVE_Y);break;case"nz":t.lookAt(a.Z.NEGATIVE_Z,a.Z.NEGATIVE_Y);break}return n.getWorldPosition(t.position),t.update(),t},_getDirectionalLightCamera:function(){var x=new p.Z,n=new E.Z,e=new E.Z;return function(t,l,A){this._lightCameras.directional||(this._lightCameras.directional=new _.Z);var o=this._lightCameras.directional;n.copy(l.viewBoundingBoxLastFrame),n.intersection(A.frustum.boundingBox),o.position.copy(n.min).add(n.max).scale(.5).transformMat4(A.worldTransform),o.rotation.copy(t.rotation),o.scale.copy(t.scale),o.updateWorldTransform(),p.Z.invert(x,o.worldTransform),p.Z.multiply(x,x,A.worldTransform),e.copy(n).applyTransform(x);var L=e.min.array,B=e.max.array;return o.position.set((L[0]+B[0])/2,(L[1]+B[1])/2,B[2]).transformMat4(o.worldTransform),o.near=0,o.far=-L[2]+B[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=L[0],o.right=B[0],o.top=B[1],o.bottom=L[1],o.update(!0),o}}(),_getSpotLightCamera:function(n){this._lightCameras.spot||(this._lightCameras.spot=new y.Z);var e=this._lightCameras.spot;return e.fov=n.penumbraAngle*2,e.far=n.range,e.worldTransform.copy(n.worldTransform),e.updateProjectionMatrix(),C.Z.invert(e.viewMatrix.array,e.worldTransform.array),e},dispose:function(n){var e=n.gl||n;this._frameBuffer&&this._frameBuffer.dispose(e);for(var t in this._textures)this._textures[t].dispose(e);this._texturePool.clear(n.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var l=0;l<this._receivers.length;l++){var A=this._receivers[l];if(A.material){var o=A.material;o.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),o.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),o.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),o.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});N.VSM=1,N.PCF=2;var W=N},428851:function(K,f,r){"use strict";r.d(f,{Z:function(){return y}});var F=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,D=r(145878),a=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,E=r(770754),V=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,p=r(264882),G=r(624744),R=r(872232),J=r(893101),I=r(173271),d=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,h=r(674838),b=r(456087);function y(_){_.import(F),_.import(D.Z),_.import(a),_.import(E.Z),_.import(V),_.import(p.Z),_.import(G.Z),_.import(R.Z),_.import(J.Z),_.import(I.Z),_.import(d),_.import(h.Z),_.import(b.Z)}},674838:function(K,f){"use strict";f.Z=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`},145878:function(K,f){"use strict";f.Z=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`},624744:function(K,f){"use strict";f.Z=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`},872232:function(K,f){"use strict";f.Z=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`},456087:function(K,f){"use strict";f.Z=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`},173271:function(K,f){"use strict";f.Z=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`},770754:function(K,f){"use strict";f.Z=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`},264882:function(K,f){"use strict";f.Z=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`},893101:function(K,f){"use strict";f.Z=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`},881474:function(K,f){"use strict";f.Z=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`},300494:function(K,f,r){"use strict";r.d(f,{Z:function(){return G}});var F=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,D="uniform vec3 ",a="uniform float ",E="@export clay.header.",V="@end",p=":unconfigurable;",G=[E+"directional_light",D+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+p,D+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+p,V,E+"ambient_light",D+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+p,V,E+"ambient_sh_light",D+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+p,D+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+p,F,V,E+"ambient_cubemap_light",D+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+p,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+p,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+p,V,E+"point_light",D+"pointLightPosition[POINT_LIGHT_COUNT]"+p,a+"pointLightRange[POINT_LIGHT_COUNT]"+p,D+"pointLightColor[POINT_LIGHT_COUNT]"+p,V,E+"spot_light",D+"spotLightPosition[SPOT_LIGHT_COUNT]"+p,D+"spotLightDirection[SPOT_LIGHT_COUNT]"+p,a+"spotLightRange[SPOT_LIGHT_COUNT]"+p,a+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+p,a+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+p,a+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+p,D+"spotLightColor[SPOT_LIGHT_COUNT]"+p,V].join(`
`)},113425:function(K,f){"use strict";f.Z=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`},434272:function(K,f){"use strict";f.Z=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`},121530:function(K,f,r){"use strict";r.d(f,{Z:function(){return te}});var F=r(660126),D=r(333900),a=r(791912),E=r(540478),V=r(361491),p=r(405905),G=r(305302),R=r(566911),J=r(409244),I=r(644421),d=r(969807),h=r(503810),b=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,y=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,_={},u=["px","nx","py","ny","pz","nz"];_.prefilterEnvironmentMap=function(C,P,T,w,O){(!O||!w)&&(w=_.generateNormalDistribution(),O=_.integrateBRDF(C,w)),T=T||{};var N=T.width||64,W=T.height||64,x=T.type||P.type,n=new D.Z({width:N,height:W,type:x,flipY:!1,mipmaps:[]});n.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var e=Math.min(N,W),t=Math.log(e)/Math.log(2)+1,l=new p.Z({shader:new G.Z({vertex:G.Z.source("clay.skybox.vertex"),fragment:y})});l.set("normalDistribution",w),T.encodeRGBM&&l.define("fragment","RGBM_ENCODE"),T.decodeRGBM&&l.define("fragment","RGBM_DECODE");var A=new J.Z,o;if(P.textureType==="texture2D"){var L=new D.Z({width:N,height:W,type:x===a.Z.FLOAT?a.Z.HALF_FLOAT:x});h.Z.panoramaToCubeMap(C,P,L,{encodeRGBM:T.decodeRGBM}),P=L}o=new R.Z({scene:A,material:l}),o.material.set("environmentMap",P);var B=new I.Z({texture:n});T.encodeRGBM&&(x=n.type=a.Z.UNSIGNED_BYTE);for(var v=new F.Z({width:N,height:W,type:x}),Z=new E.Z({depthBuffer:!1}),Q=d.Z[x===a.Z.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],X=0;X<t;X++){n.mipmaps[X]={pixels:{}},o.material.set("roughness",X/(t-1));for(var ee=v.width,j=2*Math.atan(ee/(ee-.5))/Math.PI*180,k=0;k<u.length;k++){var ie=new Q(v.width*v.height*4);Z.attach(v),Z.bind(C);var le=B.getCamera(u[k]);le.fov=j,C.render(A,le),C.gl.readPixels(0,0,v.width,v.height,a.Z.RGBA,x,ie),Z.unbind(C),n.mipmaps[X].pixels[u[k]]=ie}v.width/=2,v.height/=2,v.dirty()}return Z.dispose(C),v.dispose(C),o.dispose(C),w.dispose(C),{environmentMap:n,brdfLookup:O,normalDistribution:w,maxMipmapLevel:t}},_.integrateBRDF=function(C,P){P=P||_.generateNormalDistribution();var T=new E.Z({depthBuffer:!1}),w=new V.Z({fragment:b}),O=new F.Z({width:512,height:256,type:a.Z.HALF_FLOAT,wrapS:a.Z.CLAMP_TO_EDGE,wrapT:a.Z.CLAMP_TO_EDGE,minFilter:a.Z.NEAREST,magFilter:a.Z.NEAREST,useMipmap:!1});return w.setUniform("normalDistribution",P),w.setUniform("viewportSize",[512,256]),w.attachOutput(O),w.render(C,T),T.dispose(C),O},_.generateNormalDistribution=function(C,P){for(var C=C||256,P=P||1024,T=new F.Z({width:C,height:P,type:a.Z.FLOAT,minFilter:a.Z.NEAREST,magFilter:a.Z.NEAREST,wrapS:a.Z.CLAMP_TO_EDGE,wrapT:a.Z.CLAMP_TO_EDGE,useMipmap:!1}),w=new Float32Array(P*C*4),O=[],N=0;N<C;N++){for(var W=N/C,x=W*W,n=0;n<P;n++){var e=(n<<16|n>>>16)>>>0;e=((e&1431655765)<<1|(e&2863311530)>>>1)>>>0,e=((e&858993459)<<2|(e&3435973836)>>>2)>>>0,e=((e&252645135)<<4|(e&4042322160)>>>4)>>>0,e=(((e&16711935)<<8|(e&4278255360)>>>8)>>>0)/4294967296;var t=Math.sqrt((1-e)/(1+(x*x-1)*e));O[n]=t}for(var n=0;n<P;n++){var l=(n*C+N)*4,t=O[n],A=Math.sqrt(1-t*t),o=n/P,L=2*Math.PI*o;w[l]=A*Math.cos(L),w[l+1]=t,w[l+2]=A*Math.sin(L),w[l+3]=1}}return T.pixels=w,T};var te=_},293301:function(K,f,r){"use strict";r.d(f,{Z:function(){return C}});var F=r(791912),D=r(540478),a=r(660126),E=r(361491),V=r(969807),p=r(566911),G=r(740032),R=r(644421),J=r(409244),I=r(167029),d=`uniform samplerCube environmentMap;
varying vec2 v_Texcoord;
#define TEXTURE_SIZE 16
mat3 front = mat3(
 1.0, 0.0, 0.0,
 0.0, 1.0, 0.0,
 0.0, 0.0, 1.0
);
mat3 back = mat3(
 -1.0, 0.0, 0.0,
 0.0, 1.0, 0.0,
 0.0, 0.0, -1.0
);
mat3 left = mat3(
 0.0, 0.0, -1.0,
 0.0, 1.0, 0.0,
 1.0, 0.0, 0.0
);
mat3 right = mat3(
 0.0, 0.0, 1.0,
 0.0, 1.0, 0.0,
 -1.0, 0.0, 0.0
);
mat3 up = mat3(
 1.0, 0.0, 0.0,
 0.0, 0.0, 1.0,
 0.0, -1.0, 0.0
);
mat3 down = mat3(
 1.0, 0.0, 0.0,
 0.0, 0.0, -1.0,
 0.0, 1.0, 0.0
);
float harmonics(vec3 normal){
 int index = int(gl_FragCoord.x);
 float x = normal.x;
 float y = normal.y;
 float z = normal.z;
 if(index==0){
 return 1.0;
 }
 else if(index==1){
 return x;
 }
 else if(index==2){
 return y;
 }
 else if(index==3){
 return z;
 }
 else if(index==4){
 return x*z;
 }
 else if(index==5){
 return y*z;
 }
 else if(index==6){
 return x*y;
 }
 else if(index==7){
 return 3.0*z*z - 1.0;
 }
 else{
 return x*x - y*y;
 }
}
vec3 sampleSide(mat3 rot)
{
 vec3 result = vec3(0.0);
 float divider = 0.0;
 for (int i = 0; i < TEXTURE_SIZE * TEXTURE_SIZE; i++) {
 float x = mod(float(i), float(TEXTURE_SIZE));
 float y = float(i / TEXTURE_SIZE);
 vec2 sidecoord = ((vec2(x, y) + vec2(0.5, 0.5)) / vec2(TEXTURE_SIZE)) * 2.0 - 1.0;
 vec3 normal = normalize(vec3(sidecoord, -1.0));
 vec3 fetchNormal = rot * normal;
 vec3 texel = textureCube(environmentMap, fetchNormal).rgb;
 result += harmonics(fetchNormal) * texel * -normal.z;
 divider += -normal.z;
 }
 return result / divider;
}
void main()
{
 vec3 result = (
 sampleSide(front) +
 sampleSide(back) +
 sampleSide(left) +
 sampleSide(right) +
 sampleSide(up) +
 sampleSide(down)
 ) / 6.0;
 gl_FragColor = vec4(result, 1.0);
}`,h={},b=["px","nx","py","ny","pz","nz"];function y(P,T){var w=new Texture2D({width:9,height:1,type:Texture.FLOAT}),O=new Pass({fragment:projectEnvMapShaderCode});O.material.define("fragment","TEXTURE_SIZE",T.width),O.setUniform("environmentMap",T);var N=new FrameBuffer;N.attach(w),O.render(P,N),N.bind(P);var W=new vendor.Float32Array(9*4);P.gl.readPixels(0,0,9,1,Texture.RGBA,Texture.FLOAT,W);for(var x=new vendor.Float32Array(9*3),n=0;n<9;n++)x[n*3]=W[n*4],x[n*3+1]=W[n*4+1],x[n*3+2]=W[n*4+2];return N.unbind(P),N.dispose(P),O.dispose(P),x}function _(P,T){var w=P[0],O=P[1],N=P[2];return T===0?1:T===1?w:T===2?O:T===3?N:T===4?w*N:T===5?O*N:T===6?w*O:T===7?3*N*N-1:w*w-O*O}var u={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function te(P,T,w,O){for(var N=new V.Z.Float32Array(9*3),W=I.Z.create(),x=I.Z.create(),n=I.Z.create(),e=0;e<9;e++){for(var t=I.Z.create(),l=0;l<b.length;l++){for(var A=T[b[l]],o=I.Z.create(),L=0,B=0,v=u[b[l]],Z=0;Z<O;Z++)for(var Q=0;Q<w;Q++){W[0]=Q/(w-1)*2-1,W[1]=Z/(O-1)*2-1,W[2]=-1,I.Z.normalize(W,W),n[0]=W[v[0]]*v[3],n[1]=W[v[1]]*v[4],n[2]=W[v[2]]*v[5],x[0]=A[B++]/255,x[1]=A[B++]/255,x[2]=A[B++]/255;var X=A[B++]/255*8.12;x[0]*=X,x[1]*=X,x[2]*=X,I.Z.scaleAndAdd(o,o,x,_(n,e)*-W[2]),L+=-W[2]}I.Z.scaleAndAdd(t,t,o,1/L)}N[e*3]=t[0]/6,N[e*3+1]=t[1]/6,N[e*3+2]=t[2]/6}return N}h.projectEnvironmentMap=function(P,T,w){w=w||{},w.lod=w.lod||0;var O,N=new J.Z,W=64;T.textureType==="texture2D"?O=new G.Z({scene:N,environmentMap:T}):(W=T.image&&T.image.px?T.image.px.width:T.width,O=new p.Z({scene:N,environmentMap:T}));var x=Math.ceil(W/Math.pow(2,w.lod)),n=Math.ceil(W/Math.pow(2,w.lod)),e=new a.Z({width:x,height:n}),t=new D.Z;O.material.define("fragment","RGBM_ENCODE"),w.decodeRGBM&&O.material.define("fragment","RGBM_DECODE"),O.material.set("lod",w.lod);for(var l=new R.Z({texture:e}),A={},o=0;o<b.length;o++){A[b[o]]=new Uint8Array(x*n*4);var L=l.getCamera(b[o]);L.fov=90,t.attach(e),t.bind(P),P.render(N,L),P.gl.readPixels(0,0,x,n,F.Z.RGBA,F.Z.UNSIGNED_BYTE,A[b[o]]),t.unbind(P)}return O.dispose(P),t.dispose(P),e.dispose(P),te(P,A,x,n)};var C=h},503810:function(K,f,r){"use strict";r.d(f,{Z:function(){return Me}});var F=r(660126),D=r(333900),a=r(969807),E=r(644421),V=r(740032),p=r(409244),G=r(791912),R=542327876,J=1,I=2,d=4,h=8,b=4096,y=131072,_=524288,u=8388608,te=8,C=4194304,P=4096,T=512,w=1024,O=2048,N=4096,W=8192,x=16384,n=32768,e=2097152,t=1,l=2,A=4,o=64,L=512,B=131072;function v(S){return S.charCodeAt(0)+(S.charCodeAt(1)<<8)+(S.charCodeAt(2)<<16)+(S.charCodeAt(3)<<24)}function Z(S){return String.fromCharCode(S&255,S>>8&255,S>>16&255,S>>24&255)}var Q=31,X=v("DXT1"),ee=v("DXT3"),j=v("DXT5"),k=0,ie=1,le=2,ce=3,q=4,re=7,z=20,ue=21,De=27,ve=28,ne=29,Ee=30,he={parse:function(s,i){var g=new Int32Array(s,0,Q);if(g[k]!==R||!g(z)&A)return null;var c=g(ue),m=g[q],M=g[ce],U=g[ve]&T,Y=g[le]&y,H,ae;switch(c){case X:H=8,ae=G.Z.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ee:H=16,ae=G.Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case j:H=16,ae=G.Z.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var oe=g[ie]+4,xe=U?6:1,ge=1;Y&&(ge=Math.max(1,g[re]));for(var $=[],se=0;se<xe;se++){var de=m,fe=M;$[se]=new F.Z({width:de,height:fe,format:ae});for(var Ce=[],Ie=0;Ie<ge;Ie++){var Re=Math.max(4,de)/4*Math.max(4,fe)/4*H,Oe=new Uint8Array(s,oe,Re);oe+=Re,de*=.5,fe*=.5,Ce[Ie]=Oe}$[se].pixels=Ce[0],Y&&($[se].mipmaps=Ce)}if(i)i.width=$[0].width,i.height=$[0].height,i.format=$[0].format,i.pixels=$[0].pixels,i.mipmaps=$[0].mipmaps;else return $[0]}},_e=he,me=String.fromCharCode,be=8,ye=32767;function Ae(S,s,i,g){if(S[3]>0){var c=Math.pow(2,S[3]-128-8+g);s[i+0]=S[0]*c,s[i+1]=S[1]*c,s[i+2]=S[2]*c}else s[i+0]=0,s[i+1]=0,s[i+2]=0;return s[i+3]=1,s}function Pe(S,s,i){for(var g="",c=s;c<i;c++)g+=me(S[c]);return g}function Te(S,s){s[0]=S[0],s[1]=S[1],s[2]=S[2],s[3]=S[3]}function pe(S,s,i,g){for(var c=0,m=0,M=g;M>0;)if(S[m][0]=s[i++],S[m][1]=s[i++],S[m][2]=s[i++],S[m][3]=s[i++],S[m][0]===1&&S[m][1]===1&&S[m][2]===1){for(var U=S[m][3]<<c>>>0;U>0;U--)Te(S[m-1],S[m]),m++,M--;c+=8}else m++,M--,c=0;return i}function we(S,s,i,g){if(g<be|g>ye)return pe(S,s,i,g);var c=s[i++];if(c!=2)return pe(S,s,i-1,g);if(S[0][1]=s[i++],S[0][2]=s[i++],c=s[i++],(S[0][2]<<8>>>0|c)>>>0!==g)return null;for(var c=0;c<4;c++)for(var m=0;m<g;){var M=s[i++];if(M>128){M=(M&127)>>>0;for(var U=s[i++];M--;)S[m++][c]=U}else for(;M--;)S[m++][c]=s[i++]}return i}var Le={parseRGBE:function(s,i,g){g==null&&(g=0);var c=new Uint8Array(s),m=c.length;if(Pe(c,0,2)==="#?"){for(var M=2;M<m&&!(me(c[M])===`
`&&me(c[M+1])===`
`);M++);if(!(M>=m)){M+=2;for(var U="";M<m;M++){var Y=me(c[M]);if(Y===`
`)break;U+=Y}var H=U.split(" "),ae=parseInt(H[1]),oe=parseInt(H[3]);if(!(!oe||!ae)){for(var xe=M+1,ge=[],$=0;$<oe;$++){ge[$]=[];for(var se=0;se<4;se++)ge[$][se]=0}for(var de=new Float32Array(oe*ae*4),fe=0,Ce=0;Ce<ae;Ce++){var xe=we(ge,c,xe,oe);if(!xe)return null;for(var $=0;$<oe;$++)Ae(ge[$],de,fe,g),fe+=4}return i||(i=new F.Z),i.width=oe,i.height=ae,i.pixels=de,i.type=G.Z.FLOAT,i}}}},parseRGBEFromPNG:function(s){}},Ne=Le,Se={loadTexture:function(s,i,g,c){var m;if(typeof i=="function"?(g=i,c=g,i={}):i=i||{},typeof s=="string"){if(s.match(/.hdr$/)||i.fileType==="hdr")return m=new F.Z({width:0,height:0,sRGB:!1}),Se._fetchTexture(s,function(M){Ne.parseRGBE(M,m,i.exposure),m.dirty(),g&&g(m)},c),m;s.match(/.dds$/)||i.fileType==="dds"?(m=new F.Z({width:0,height:0}),Se._fetchTexture(s,function(M){_e.parse(M,m),m.dirty(),g&&g(m)},c)):(m=new F.Z,m.load(s),m.success(g),m.error(c))}else typeof s=="object"&&typeof s.px!="undefined"&&(m=new D.Z,m.load(s),m.success(g),m.error(c));return m},loadPanorama:function(s,i,g,c,m,M){var U=this;typeof c=="function"?(m=c,M=m,c={}):c=c||{},Se.loadTexture(i,c,function(Y){Y.flipY=c.flipY||!1,U.panoramaToCubeMap(s,Y,g,c),Y.dispose(s),m&&m(g)},M)},panoramaToCubeMap:function(s,i,g,c){var m=new E.Z,M=new V.Z({scene:new p.Z});return M.setEnvironmentMap(i),c=c||{},c.encodeRGBM&&M.material.define("fragment","RGBM_ENCODE"),g.sRGB=i.sRGB,m.texture=g,m.render(s,M.scene),m.texture=null,m.dispose(s),g},heightToNormal:function(s,i){var g=document.createElement("canvas"),c=g.width=s.width,m=g.height=s.height,M=g.getContext("2d");M.drawImage(s,0,0,c,m),i=i||!1;for(var U=M.getImageData(0,0,c,m),Y=M.createImageData(c,m),H=0;H<U.data.length;H+=4){if(i){var ae=U.data[H],oe=U.data[H+1],xe=U.data[H+2],ge=Math.abs(ae-oe)+Math.abs(oe-xe);if(ge>20)return console.warn("Given image is not a height map"),s}var $,se,de,fe;H%(c*4)==0?($=U.data[H],de=U.data[H+4]):H%(c*4)==(c-1)*4?($=U.data[H-4],de=U.data[H]):($=U.data[H-4],de=U.data[H+4]),H<c*4?(se=U.data[H],fe=U.data[H+c*4]):H>c*(m-1)*4?(se=U.data[H-c*4],fe=U.data[H]):(se=U.data[H-c*4],fe=U.data[H+c*4]),Y.data[H]=$-de+127,Y.data[H+1]=se-fe+127,Y.data[H+2]=255,Y.data[H+3]=255}return M.putImageData(Y,0,0),g},isHeightImage:function(s,i,g){if(!s||!s.width||!s.height)return!1;var c=document.createElement("canvas"),m=c.getContext("2d"),M=i||32;g=g||20,c.width=c.height=M,m.drawImage(s,0,0,M,M);for(var U=m.getImageData(0,0,M,M),Y=0;Y<U.data.length;Y+=4){var H=U.data[Y],ae=U.data[Y+1],oe=U.data[Y+2],xe=Math.abs(H-ae)+Math.abs(ae-oe);if(xe>g)return!1}return!0},_fetchTexture:function(s,i,g){a.Z.request.get({url:s,responseType:"arraybuffer",onload:i,onerror:g})},createChessboard:function(s,i,g,c){s=s||512,i=i||64,g=g||"black",c=c||"white";var m=Math.ceil(s/i),M=document.createElement("canvas");M.width=s,M.height=s;var U=M.getContext("2d");U.fillStyle=c,U.fillRect(0,0,s,s),U.fillStyle=g;for(var Y=0;Y<m;Y++)for(var H=0;H<m;H++){var ae=H%2?Y%2:Y%2-1;ae&&U.fillRect(Y*i,H*i,i,i)}var oe=new F.Z({image:M,anisotropic:8});return oe},createBlank:function(s){var i=document.createElement("canvas");i.width=1,i.height=1;var g=i.getContext("2d");g.fillStyle=s,g.fillRect(0,0,1,1);var c=new F.Z({image:i});return c}},Me=Se},148340:function(K,f,r){"use strict";function F(a){var E,V,p="";if(typeof a=="string"||typeof a=="number")p+=a;else if(typeof a=="object")if(Array.isArray(a))for(E=0;E<a.length;E++)a[E]&&(V=F(a[E]))&&(p&&(p+=" "),p+=V);else for(E in a)a[E]&&(p&&(p+=" "),p+=E);return p}function D(){for(var a,E,V=0,p="";V<arguments.length;)(a=arguments[V++])&&(E=F(a))&&(p&&(p+=" "),p+=E);return p}f.Z=D},500971:function(K){K.exports=function(r,F){for(var D=[],a=0;a<r.length;a++){var E=F(r[a],a);f(E)?D.push.apply(D,E):D.push(E)}return D};var f=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"}},660383:function(K,f,r){function F(u){return Array.isArray?Array.isArray(u):_(u)==="[object Array]"}f.isArray=F;function D(u){return typeof u=="boolean"}f.isBoolean=D;function a(u){return u===null}f.isNull=a;function E(u){return u==null}f.isNullOrUndefined=E;function V(u){return typeof u=="number"}f.isNumber=V;function p(u){return typeof u=="string"}f.isString=p;function G(u){return typeof u=="symbol"}f.isSymbol=G;function R(u){return u===void 0}f.isUndefined=R;function J(u){return _(u)==="[object RegExp]"}f.isRegExp=J;function I(u){return typeof u=="object"&&u!==null}f.isObject=I;function d(u){return _(u)==="[object Date]"}f.isDate=d;function h(u){return _(u)==="[object Error]"||u instanceof Error}f.isError=h;function b(u){return typeof u=="function"}f.isFunction=b;function y(u){return u===null||typeof u=="boolean"||typeof u=="number"||typeof u=="string"||typeof u=="symbol"||typeof u=="undefined"}f.isPrimitive=y,f.isBuffer=r(125750).Buffer.isBuffer;function _(u){return Object.prototype.toString.call(u)}}}]);
