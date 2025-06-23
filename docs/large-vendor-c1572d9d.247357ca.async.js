(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8694],{111571:function(Q,z,n){"use strict";var c=n(670492),y=n(162241),S=n(702199);function D(E){this._layers={},this._zr=E}D.prototype.update=function(E,w){var T=this,i=w.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function _(P){i.setSleepAfterStill(0);var a;P.coordinateSystem&&P.coordinateSystem.model,a=P.get("zlevel");var x=T._layers,g=x[a];if(!g){if(g=x[a]=new y.Z("gl-"+a,i),i.painter.isSingleCanvas()){g.virtual=!0;var L=new c.Q.Image({z:1e4,style:{image:g.renderer.canvas},silent:!0});g.__hostImage=L,i.add(L)}i.painter.insertLayer(a,g)}return g.__hostImage&&g.__hostImage.setStyle({width:g.renderer.getWidth(),height:g.renderer.getHeight()}),g}function A(P,a){P&&P.traverse(function(x){x.isRenderable&&x.isRenderable()&&(x.ignorePicking=x.$ignorePicking!=null?x.$ignorePicking:a)})}for(var f in this._layers)this._layers[f].removeViewsAll();E.eachComponent(function(P,a){if(P!=="series"){var x=w.getViewOfComponentModel(a),g=a.coordinateSystem;if(x.__ecgl__){var L;if(g){if(!g.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+a.id);return}L=g.viewGL}else{if(!a.viewGL){console.error("Can't find viewGL of component "+a.id);return}L=g.viewGL}var L=g.viewGL,C=_(a);C.addView(L),x.afterRender&&x.afterRender(a,E,w,C),A(x.groupGL,a.get("silent"))}}}),E.eachSeries(function(P){var a=w.getViewOfSeriesModel(P),x=P.coordinateSystem;if(a.__ecgl__){if(x&&!x.viewGL&&!a.viewGL){console.error("Can't find viewGL of series "+a.id);return}var g=x&&x.viewGL||a.viewGL,L=_(P);L.addView(g),a.afterRender&&a.afterRender(P,E,w,L),A(a.groupGL,P.get("silent"))}})},c.sq(function(E){var w=E.getZr(),T=w.painter.dispose;w.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof y.Z&&i.dispose()}),T.call(this)},w.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var _=document.createElement("canvas"),A=i.pixelRatio||this.dpr;_.width=this.getWidth()*A,_.height=this.getHeight()*A;var f=_.getContext("2d");f.dpr=A,f.clearRect(0,0,_.width,_.height),i.backgroundColor&&(f.fillStyle=i.backgroundColor,f.fillRect(0,0,_.width,_.height));var P=this.storage.getDisplayList(!0),a={},x,g=this;function L(U,ee){var k=g._zlevelList;U==null&&(U=-Infinity);for(var K,I=0;I<k.length;I++){var X=k[I],Z=g._layers[X];if(!Z.__builtin__&&X>U&&X<ee){K=Z;break}}K&&K.renderToCanvas&&(f.save(),K.renderToCanvas(f),f.restore())}for(var C={ctx:f},G=0;G<P.length;G++){var M=P[G];M.zlevel!==x&&(L(x,M.zlevel),x=M.zlevel),this._doPaintEl(M,C,!0,null,a)}return L(x,Infinity),_}}),c.Br(function(E,w){var T=w.getZr(),i=T.__egl=T.__egl||new D(T);i.update(E,w)}),c.ds(S.Z);var R=null},518260:function(Q,z,n){"use strict";n.d(z,{Z:function(){return Te}});var c=n(305302),y=n(660126),S=n(791912),D=n(540478),R=n(633879),E=n(20952),w=n(654915),T=n(361491),i=n(850383),_=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;c.Z.import(_);function A(e){for(var t=new Uint8Array(e*e*4),r=0,o=new w.Z,l=0;l<e;l++)for(var u=0;u<e;u++)o.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(o.x*.5+.5)*255,t[r++]=(o.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function f(e){return new y.Z({pixels:A(e),wrapS:S.Z.REPEAT,wrapT:S.Z.REPEAT,width:e,height:e})}function P(e,t,r){var o=new Float32Array(e*3);t=t||0;for(var l=0;l<e;l++){var u=(0,i.Z)(l+t,2)*(r?1:2)*Math.PI,h=(0,i.Z)(l+t,3)*Math.PI,p=Math.random(),v=Math.cos(u)*Math.sin(h)*p,d=Math.cos(h)*p,b=Math.sin(u)*Math.sin(h)*p;o[l*3]=v,o[l*3+1]=d,o[l*3+2]=b}return o}function a(e){e=e||{},this._ssaoPass=new T.Z({fragment:c.Z.source("ecgl.ssao.estimate")}),this._blurPass=new T.Z({fragment:c.Z.source("ecgl.ssao.blur")}),this._framebuffer=new D.Z({depthBuffer:!1}),this._ssaoTexture=new y.Z,this._blurTexture=new y.Z,this._blurTexture2=new y.Z,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}a.prototype.setDepthTexture=function(e){this._depthTex=e},a.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)},a.prototype.update=function(e,t,r){var o=e.getWidth(),l=e.getHeight(),u=this._ssaoPass,h=this._blurPass;u.setUniform("kernel",this._kernels[r%this._kernels.length]),u.setUniform("depthTex",this._depthTex),this._normalTex!=null&&u.setUniform("normalTex",this._normalTex),u.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var p=new E.Z;E.Z.transpose(p,t.worldTransform),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("viewInverseTranspose",p.array);var v=this._ssaoTexture,d=this._blurTexture,b=this._blurTexture2;v.width=o/2,v.height=l/2,d.width=o,d.height=l,b.width=o,b.height=l,this._framebuffer.attach(v),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),u.render(e),h.setUniform("textureSize",[o/2,l/2]),h.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(d),h.setUniform("direction",0),h.setUniform("ssaoTexture",v),h.render(e),this._framebuffer.attach(b),h.setUniform("textureSize",[o,l]),h.setUniform("direction",1),h.setUniform("ssaoTexture",d),h.render(e),this._framebuffer.unbind(e);var m=e.clearColor;e.gl.clearColor(m[0],m[1],m[2],m[3])},a.prototype.getTargetTexture=function(){return this._blurTexture2},a.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)},a.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=P(e,t*e,!!this._normalTex)},a.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=A(e),t.width=t.height=e,t.dirty()):(t=f(e),this._ssaoPass.setUniform("noiseTex",f(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])},a.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var x=a,g=n(121530),L=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;c.Z.import(L);function C(e){e=e||{},this._ssrPass=new T.Z({fragment:c.Z.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new T.Z({fragment:c.Z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new T.Z({fragment:c.Z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new T.Z({fragment:c.Z.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new y.Z({type:S.Z.HALF_FLOAT}),this._texture2=new y.Z({type:S.Z.HALF_FLOAT}),this._texture3=new y.Z({type:S.Z.HALF_FLOAT}),this._prevTexture=new y.Z({type:S.Z.HALF_FLOAT}),this._currentTexture=new y.Z({type:S.Z.HALF_FLOAT}),this._frameBuffer=new D.Z({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}C.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")},C.prototype.update=function(e,t,r,o){var l=e.getWidth(),u=e.getHeight(),h=this._ssrTexture,p=this._texture2,v=this._texture3;h.width=this._prevTexture.width=this._currentTexture.width=l/this._downScale,h.height=this._prevTexture.height=this._currentTexture.height=u/this._downScale,p.width=v.width=l,p.height=v.height=u;var d=this._frameBuffer,b=this._ssrPass,m=this._blurPass1,H=this._blurPass2,N=this._blendPass,O=new E.Z,j=new E.Z;E.Z.transpose(O,t.worldTransform),E.Z.transpose(j,t.viewMatrix),b.setUniform("sourceTexture",r),b.setUniform("projection",t.projectionMatrix.array),b.setUniform("projectionInv",t.invProjectionMatrix.array),b.setUniform("toViewSpace",O.array),b.setUniform("toWorldSpace",j.array),b.setUniform("nearZ",t.near);var W=o/this._totalSamples*this._samplePerFrame;if(b.setUniform("jitterOffset",W),b.setUniform("sampleOffset",o*this._samplePerFrame),m.setUniform("textureSize",[h.width,h.height]),H.setUniform("textureSize",[l,u]),H.setUniform("sourceTexture",r),m.setUniform("projection",t.projectionMatrix.array),H.setUniform("projection",t.projectionMatrix.array),d.attach(h),d.bind(e),b.render(e),this._physicallyCorrect&&(d.attach(this._currentTexture),N.setUniform("texture1",this._prevTexture),N.setUniform("texture2",h),N.material.set({weight1:o>=1?.95:0,weight2:o>=1?.05:1}),N.render(e)),d.attach(p),m.setUniform("texture",this._physicallyCorrect?this._currentTexture:h),m.render(e),d.attach(v),H.setUniform("texture",p),H.render(e),d.unbind(e),this._physicallyCorrect){var F=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=F}},C.prototype.getTargetTexture=function(){return this._texture3},C.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)},C.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=g.Z.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e},C.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")},C.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0},C.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var G=C,M=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],U=n(586632),ee=n(405905),k=n(503810),K=n(511390);c.Z.import(K.Z);function I(e,t,r,o,l){var u=e.gl;t.setUniform(u,"1i",r,l),u.activeTexture(u.TEXTURE0+l),o.isRenderable()?o.bind(e):o.unbind(e)}function X(e,t,r,o,l){var u,h,p,v,d=e.gl;return function(b,m,H){if(!(v&&v.material===b.material)){var N=b.material,O=b.__program,j=N.get("roughness");j==null&&(j=1);var W=N.get("normalMap")||t,F=N.get("roughnessMap"),B=N.get("bumpMap"),Y=N.get("uvRepeat"),$=N.get("uvOffset"),J=N.get("detailUvRepeat"),q=N.get("detailUvOffset"),ne=!!B&&N.isTextureEnabled("bumpMap"),oe=!!F&&N.isTextureEnabled("roughnessMap"),ie=N.isDefined("fragment","DOUBLE_SIDED");B=B||r,F=F||o,H!==m?(m.set("normalMap",W),m.set("bumpMap",B),m.set("roughnessMap",F),m.set("useBumpMap",ne),m.set("useRoughnessMap",oe),m.set("doubleSide",ie),Y!=null&&m.set("uvRepeat",Y),$!=null&&m.set("uvOffset",$),J!=null&&m.set("detailUvRepeat",J),q!=null&&m.set("detailUvOffset",q),m.set("roughness",j)):(O.setUniform(d,"1f","roughness",j),u!==W&&I(e,O,"normalMap",W,0),h!==B&&B&&I(e,O,"bumpMap",B,1),p!==F&&F&&I(e,O,"roughnessMap",F,2),Y!=null&&O.setUniform(d,"2f","uvRepeat",Y),$!=null&&O.setUniform(d,"2f","uvOffset",$),J!=null&&O.setUniform(d,"2f","detailUvRepeat",J),q!=null&&O.setUniform(d,"2f","detailUvOffset",q),O.setUniform(d,"1i","useBumpMap",+ne),O.setUniform(d,"1i","useRoughnessMap",+oe),O.setUniform(d,"1i","doubleSide",+ie)),u=W,h=B,p=F,v=b}}}function Z(e){e=e||{},this._depthTex=new y.Z({format:S.Z.DEPTH_COMPONENT,type:S.Z.UNSIGNED_INT}),this._normalTex=new y.Z({type:S.Z.HALF_FLOAT}),this._framebuffer=new D.Z,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,D.Z.DEPTH_ATTACHMENT),this._normalMaterial=new ee.Z({shader:new c.Z(c.Z.source("ecgl.normal.vertex"),c.Z.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=k.Z.createBlank("#000"),this._defaultBumpMap=k.Z.createBlank("#000"),this._defaultRoughessMap=k.Z.createBlank("#000"),this._debugPass=new T.Z({fragment:c.Z.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Z.prototype.getDepthTexture=function(){return this._depthTex},Z.prototype.getNormalTexture=function(){return this._normalTex},Z.prototype.update=function(e,t,r){var o=e.getWidth(),l=e.getHeight(),u=this._depthTex,h=this._normalTex,p=this._normalMaterial;u.width=o,u.height=l,h.width=o,h.height=l;var v=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(v,r,{getMaterial:function(){return p},ifRender:function(b){return b.renderNormal},beforeRender:X(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)},Z.prototype.renderDebug=function(e){this._debugPass.render(e)},Z.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};var ae=Z;function V(e){e=e||{},this._edgePass=new T.Z({fragment:c.Z.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new y.Z({type:S.Z.HALF_FLOAT}),this._frameBuffer=new D.Z,this._frameBuffer.attach(this._targetTexture)}V.prototype.update=function(e,t,r,o){var l=e.getWidth(),u=e.getHeight(),h=this._targetTexture;h.width=l,h.height=u;var p=this._frameBuffer;p.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[l,u]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),p.unbind(e)},V.prototype.getTargetTexture=function(){return this._targetTexture},V.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)},V.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var se=V,le={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},ue=n(145878),he=n(770754),ce=n(264882),pe=n(624744),fe=n(872232),de=n(893101),me=n(173271),_e=n(674838),xe=n(456087),ge=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,ve=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;c.Z.import(ue.Z),c.Z.import(he.Z),c.Z.import(ce.Z),c.Z.import(pe.Z),c.Z.import(fe.Z),c.Z.import(de.Z),c.Z.import(me.Z),c.Z.import(_e.Z),c.Z.import(xe.Z),c.Z.import(ge),c.Z.import(ve);function re(e,t){return{color:{parameters:{width:e,height:t}}}}var te=["composite","FXAA"];function s(){this._width,this._height,this._dpr,this._sourceTexture=new y.Z({type:S.Z.HALF_FLOAT}),this._depthTexture=new y.Z({format:S.Z.DEPTH_COMPONENT,type:S.Z.UNSIGNED_INT}),this._framebuffer=new D.Z,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,D.Z.DEPTH_ATTACHMENT),this._normalPass=new ae,this._compositor=(0,R.Z)(le);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(o){return this._compositor.getNodeByName(o)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=te.map(function(o){return this._compositor.getNodeByName(o)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new x(r),this._ssrPass=new G(r),this._edgePass=new se(r)}s.prototype.resize=function(e,t,r){r=r||1;var e=e*r,t=t*r,o=this._sourceTexture,l=this._depthTexture;o.width=e,o.height=t,l.width=e,l.height=t;var u={getWidth:function(){return e},getHeight:function(){return t},getDevicePixelRatio:function(){return r}};function h(p,v){if(typeof p[v]=="function"){var d=p[v].__original||p[v];p[v]=function(b){return d.call(this,u)},p[v].__original=d}}this._compositor.nodes.forEach(function(p){for(var v in p.outputs){var d=p.outputs[v].parameters;d&&(h(d,"width"),h(d,"height"))}for(var b in p.parameters)h(p.parameters,b)}),this._width=e,this._height=t,this._dpr=r},s.prototype.getWidth=function(){return this._width},s.prototype.getHeight=function(){return this._height},s.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR},s.prototype._getPrevNode=function(e){for(var t=te.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r},s.prototype._getNextNode=function(e){for(var t=te.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r},s.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=re(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))},s.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=re(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))},s.prototype.updateNormal=function(e,t,r,o){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)},s.prototype.updateSSAO=function(e,t,r,o){this._ssaoPass.update(e,r,o)},s.prototype.enableSSAO=function(){this._enableSSAO=!0},s.prototype.disableSSAO=function(){this._enableSSAO=!1},s.prototype.enableSSR=function(){this._enableSSR=!0},s.prototype.disableSSR=function(){this._enableSSR=!1},s.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()},s.prototype.getSourceFrameBuffer=function(){return this._framebuffer},s.prototype.getSourceTexture=function(){return this._sourceTexture},s.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)},s.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)},s.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()},s.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()},s.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()},s.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()},s.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0},s.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1},s.prototype.enableEdge=function(){this._enableEdge=!0},s.prototype.disableEdge=function(){this._enableEdge=!1},s.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)},s.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break;default:}},s.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var o={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=o;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",o);this._dofBlurKernel=new Float32Array(o*2);break;default:}},s.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,o={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",o);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}},s.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)},s.prototype.setEdgeColor=function(e){var t=U.Z.parseColor(e);this._edgePass.setParameter("edgeColor",t)},s.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))},s.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:U.Z.Texture.NEAREST,magFilter:U.Z.Texture.NEAREST,flipY:!1})},s.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)},s.prototype.isSSREnabled=function(){return this._enableSSR},s.prototype.composite=function(e,t,r,o,l){var u=this._sourceTexture,h=u;this._enableEdge&&(this._edgePass.update(e,r,u,l),u=h=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,u,l),h=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=h,this._cocNode.setParameter("depth",this._depthTexture);for(var p=this._dofBlurKernel,v=this._dofBlurKernelSize,d=Math.floor(M.length/2/v),b=l%d,m=0;m<v*2;m++)p[m]=M[m+b*v*2];for(var m=0;m<this._dofBlurNodes.length;m++)this._dofBlurNodes[m].setParameter("percent",l/30),this._dofBlurNodes[m].setParameter("poissonKernel",p);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,o)},s.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};var Te=s},548716:function(Q,z,n){"use strict";var c=n(850383),y=n(361491),S=n(540478),D=n(660126),R=n(305302),E=n(20952);function w(T){for(var i=[],_=0;_<30;_++)i.push([(0,c.Z)(_,2),(0,c.Z)(_,3)]);this._haltonSequence=i,this._frame=0,this._sourceTex=new D.Z,this._sourceFb=new S.Z,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new D.Z,this._outputTex=new D.Z;var A=this._blendPass=new y.Z({fragment:R.Z.source("clay.compositor.blend")});A.material.disableTexturesAll(),A.material.enableTexture(["texture1","texture2"]),this._blendFb=new S.Z({depthBuffer:!1}),this._outputPass=new y.Z({fragment:R.Z.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(f){f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.ONE,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA)}}w.prototype={constructor:w,jitterProjection:function(i,_){var A=i.viewport,f=A.devicePixelRatio||i.getDevicePixelRatio(),P=A.width*f,a=A.height*f,x=this._haltonSequence[this._frame%this._haltonSequence.length],g=new E.Z;g.array[12]=(x[0]*2-1)/P,g.array[13]=(x[1]*2-1)/a,E.Z.mul(_.projectionMatrix,g,_.projectionMatrix),E.Z.invert(_.invProjectionMatrix,_.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(i,_){this._prevFrameTex.width=i,this._prevFrameTex.height=_,this._outputTex.width=i,this._outputTex.height=_,this._sourceTex.width=i,this._sourceTex.height=_,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(i,_,A){var f=this._blendPass;this._frame===0?(f.setUniform("weight1",0),f.setUniform("weight2",1)):(f.setUniform("weight1",.9),f.setUniform("weight2",.1)),f.setUniform("texture1",this._prevFrameTex),f.setUniform("texture2",_||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(i),f.render(i),this._blendFb.unbind(i),A||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(i));var P=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=P,this._frame++},dispose:function(i){this._sourceFb.dispose(i),this._blendFb.dispose(i),this._prevFrameTex.dispose(i),this._outputTex.dispose(i),this._sourceTex.dispose(i),this._outputPass.dispose(i),this._blendPass.dispose(i)}},z.Z=w},850383:function(Q,z){"use strict";function n(c,y){for(var S=0,D=1/y,R=c;R>0;)S=S+D*(R%y),R=Math.floor(R/y),D=D/y;return S}z.Z=n},46491:function(Q,z,n){"use strict";var c=n(111571),y=n(137033),S=n(690902),D=n(214116),R=n(864604),E=n(439761),w=n(680623),T=n(948571),i=n(488418),_=n(583936),A=n(823989),f=n(272936),P=n(10606),a=n(766553),x=n(137453),g=n(764409),L=n(294799)}}]);
