(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{"45y5":function(gn,ve,Y){"use strict";var w=Y("ProS");function Ve(t,e,r){typeof e=="object"&&(r=e,e=null);var i=this,n;if(!(t instanceof Function)){n=[];for(var a in t)t.hasOwnProperty(a)&&n.push(a)}var o=function l(u){if(i.apply(this,arguments),t instanceof Function?tt(this,t.call(this,u)):xe(this,t,n),this.constructor===l)for(var h=l.__initializers__,f=0;f<h.length;f++)h[f].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],e&&o.__initializers__.push(e);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,tt(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function tt(t,e){if(!!e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}function xe(t,e,r){for(var i=0;i<r.length;i++){var n=r[i];t[n]=e[n]}}var dt={extend:Ve,derive:Ve};function xt(t,e){this.action=t,this.context=e}var Vt={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var r=this.__handlers__[e],i=r.length,n=-1,a=arguments;switch(a.length){case 1:for(;++n<i;)r[n].action.call(r[n].context);return;case 2:for(;++n<i;)r[n].action.call(r[n].context,a[1]);return;case 3:for(;++n<i;)r[n].action.call(r[n].context,a[1],a[2]);return;case 4:for(;++n<i;)r[n].action.call(r[n].context,a[1],a[2],a[3]);return;case 5:for(;++n<i;)r[n].action.call(r[n].context,a[1],a[2],a[3],a[4]);return;default:for(;++n<i;)r[n].action.apply(r[n].context,Array.prototype.slice.call(a,1));return}}},on:function(e,r,i){if(!(!e||!r)){var n=this.__handlers__||(this.__handlers__={});if(!n[e])n[e]=[];else if(this.has(e,r))return;var a=new xt(r,i||this);return n[e].push(a),this}},once:function(e,r,i){if(!e||!r)return;var n=this;function a(){n.off(e,a),r.apply(this,arguments)}return this.on(e,a,i)},before:function(e,r,i){if(!(!e||!r))return e="before"+e,this.on(e,r,i)},after:function(e,r,i){if(!(!e||!r))return e="after"+e,this.on(e,r,i)},success:function(e,r){return this.once("success",e,r)},error:function(e,r){return this.once("error",e,r)},off:function(e,r){var i=this.__handlers__||(this.__handlers__={});if(!r){i[e]=[];return}if(i[e]){for(var n=i[e],a=[],o=0;o<n.length;o++)r&&n[o].action!==r&&a.push(n[o]);i[e]=a}return this},has:function(e,r){var i=this.__handlers__;if(!i||!i[e])return!1;for(var n=i[e],a=0;a<n.length;a++)if(n[a].action===r)return!0}},Wt=Vt,_n=0,El=Array.prototype,wl=El.forEach,Zr={genGUID:function(){return++_n},relative2absolute:function(e,r){if(!r||e.match(/^\//))return e;for(var i=e.split("/"),n=r.split("/"),a=i[0];a==="."||a==="..";)a===".."&&n.pop(),i.shift(),a=i[0];return n.join("/")+"/"+i.join("/")},extend:function(e,r){if(r)for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i]);return e},defaults:function(e,r){if(r)for(var i in r)e[i]===void 0&&(e[i]=r[i]);return e},extendWithPropList:function(e,r,i){if(r)for(var n=0;n<i.length;n++){var a=i[n];e[a]=r[a]}return e},defaultsWithPropList:function(e,r,i){if(r)for(var n=0;n<i.length;n++){var a=i[n];e[a]==null&&(e[a]=r[a])}return e},each:function(e,r,i){if(!!(e&&r))if(e.forEach&&e.forEach===wl)e.forEach(r,i);else if(e.length===+e.length)for(var n=0,a=e.length;n<a;n++)r.call(i,e[n],n,e);else for(var o in e)e.hasOwnProperty(o)&&r.call(i,e[o],o,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Zr.isObject(e)){if(Zr.isArray(e))return e.slice();if(Zr.isArrayLike(e)){for(var r=new e.constructor(e.length),i=0;i<e.length;i++)r[i]=e[i];return r}else return Zr.extend({},e)}else return e}},Ke=Zr,Ei=function(){this.__uid__=Ke.genGUID()};Ei.__initializers__=[function(t){Ke.extend(this,t)}],Ke.extend(Ei,dt),Ke.extend(Ei.prototype,Wt);var nt=Ei,za=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Ha=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Al(t){for(var e={},r={},i=0;i<za.length;i++){var n=za[i];o(n)}for(var i=0;i<Ha.length;i++){var a=Ha[i];r[a]=t.getParameter(t[a])}this.getExtension=function(s){return s in e||o(s),e[s]},this.getParameter=function(s){return r[s]};function o(s){if(t.getExtension){var l=t.getExtension(s);l||(l=t.getExtension("MOZ_"+s)),l||(l=t.getExtension("WEBKIT_"+s)),e[s]=l}}}var bl=Al,R={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444},Me=Y("YgoH"),We=function(){this.head=null,this.tail=null,this._length=0};We.prototype.insert=function(t){var e=new We.Entry(t);return this.insertEntry(e),e},We.prototype.insertAt=function(t,e){if(!(t<0)){for(var r=this.head,i=0;r&&i!=t;)r=r.next,i++;if(r){var n=new We.Entry(e),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(e)}},We.prototype.insertBeforeEntry=function(t,e){var r=new We.Entry(t),i=e.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=e,e.prev=r,this._length++},We.prototype.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):this.head=this.tail=t,this._length++},We.prototype.remove=function(t){var e=t.prev,r=t.next;e?e.next=r:this.head=r,r?r.prev=e:this.tail=e,t.next=t.prev=null,this._length--},We.prototype.removeAt=function(t){if(!(t<0)){for(var e=this.head,r=0;e&&r!=t;)e=e.next,r++;if(e)return this.remove(e),e.value}},We.prototype.getHead=function(){if(this.head)return this.head.value},We.prototype.getTail=function(){if(this.tail)return this.tail.value},We.prototype.getAt=function(t){if(!(t<0)){for(var e=this.head,r=0;e&&r!=t;)e=e.next,r++;return e.value}},We.prototype.indexOf=function(t){for(var e=this.head,r=0;e;){if(e.value===t)return r;e=e.next,r++}},We.prototype.length=function(){return this._length},We.prototype.isEmpty=function(){return this._length===0},We.prototype.forEach=function(t,e){for(var r=this.head,i=0,n=typeof e!="undefined";r;)n?t.call(e,r.value,i):t(r.value,i),r=r.next,i++},We.prototype.clear=function(){this.tail=this.head=null,this._length=0},We.Entry=function(t){this.value=t,this.next=null,this.prev=null};var Dl=We,Tr=function(e){this._list=new Dl,this._map={},this._maxSize=e||10};Tr.prototype.setMaxSize=function(t){this._maxSize=t},Tr.prototype.put=function(t,e){if(!this._map.hasOwnProperty(t)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(e);n.key=t,this._map[t]=n}},Tr.prototype.get=function(t){var e=this._map[t];if(this._map.hasOwnProperty(t))return e!==this._list.tail&&(this._list.remove(e),this._list.insertEntry(e)),e.value},Tr.prototype.remove=function(t){var e=this._map[t];typeof e!="undefined"&&(delete this._map[t],this._list.remove(e))},Tr.prototype.clear=function(){this._list.clear(),this._map={}};var Va=Tr,we={},Wa={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Dt(t){return t=Math.round(t),t<0?0:t>255?255:t}function Ll(t){return t=Math.round(t),t<0?0:t>360?360:t}function Yr(t){return t<0?0:t>1?1:t}function yn(t){return t.length&&t.charAt(t.length-1)==="%"?Dt(parseFloat(t)/100*255):Dt(parseInt(t,10))}function Sr(t){return t.length&&t.charAt(t.length-1)==="%"?Yr(parseFloat(t)/100):Yr(parseFloat(t))}function xn(t,e,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?t+(e-t)*r*6:r*2<1?e:r*3<2?t+(e-t)*(2/3-r)*6:t}function kt(t,e,r){return t+(e-t)*r}function Lt(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function Tn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var ka=new Va(20),wi=null;function Er(t,e){wi&&Tn(wi,e),wi=ka.put(t,wi||e.slice())}we.parse=function(t,e){if(!!t){e=e||[];var r=ka.get(t);if(r)return Tn(e,r);t=t+"";var i=t.replace(/ /g,"").toLowerCase();if(i in Wa)return Tn(e,Wa[i]),Er(t,e),e;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){Lt(e,0,0,0,1);return}return Lt(e,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),Er(t,e),e}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){Lt(e,0,0,0,1);return}return Lt(e,(n&16711680)>>16,(n&65280)>>8,n&255,1),Er(t,e),e}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){Lt(e,0,0,0,1);return}u=Sr(l.pop());case"rgb":if(l.length!==3){Lt(e,0,0,0,1);return}return Lt(e,yn(l[0]),yn(l[1]),yn(l[2]),u),Er(t,e),e;case"hsla":if(l.length!==4){Lt(e,0,0,0,1);return}return l[3]=Sr(l[3]),Sn(l,e),Er(t,e),e;case"hsl":if(l.length!==3){Lt(e,0,0,0,1);return}return Sn(l,e),Er(t,e),e;default:return}}Lt(e,0,0,0,1)}},we.parseToFloat=function(t,e){if(e=we.parse(t,e),!!e)return e[0]/=255,e[1]/=255,e[2]/=255,e};function Sn(t,e){var r=(parseFloat(t[0])%360+360)%360/360,i=Sr(t[1]),n=Sr(t[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return e=e||[],Lt(e,Dt(xn(o,a,r+1/3)*255),Dt(xn(o,a,r)*255),Dt(xn(o,a,r-1/3)*255),1),t.length===4&&(e[3]=t[3]),e}function Cl(t){if(!!t){var e=t[0]/255,r=t[1]/255,i=t[2]/255,n=Math.min(e,r,i),a=Math.max(e,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var h=((a-e)/6+o/2)/o,f=((a-r)/6+o/2)/o,c=((a-i)/6+o/2)/o;e===a?l=c-f:r===a?l=1/3+h-c:i===a&&(l=2/3+f-h),l<0&&(l+=1),l>1&&(l-=1)}var d=[l*360,u,s];return t[3]!=null&&d.push(t[3]),d}}we.lift=function(t,e){var r=we.parse(t);if(r){for(var i=0;i<3;i++)e<0?r[i]=r[i]*(1-e)|0:r[i]=(255-r[i])*e+r[i]|0;return we.stringify(r,r.length===4?"rgba":"rgb")}},we.toHex=function(t){var e=we.parse(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)},we.fastLerp=function(t,e,r){if(!(!(e&&e.length)||!(t>=0&&t<=1))){r=r||[];var i=t*(e.length-1),n=Math.floor(i),a=Math.ceil(i),o=e[n],s=e[a],l=i-n;return r[0]=Dt(kt(o[0],s[0],l)),r[1]=Dt(kt(o[1],s[1],l)),r[2]=Dt(kt(o[2],s[2],l)),r[3]=Yr(kt(o[3],s[3],l)),r}},we.fastMapToColor=we.fastLerp,we.lerp=function(t,e,r){if(!(!(e&&e.length)||!(t>=0&&t<=1))){var i=t*(e.length-1),n=Math.floor(i),a=Math.ceil(i),o=we.parse(e[n]),s=we.parse(e[a]),l=i-n,u=we.stringify([Dt(kt(o[0],s[0],l)),Dt(kt(o[1],s[1],l)),Dt(kt(o[2],s[2],l)),Yr(kt(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}},we.mapToColor=we.lerp,we.modifyHSL=function(t,e,r,i){if(t=we.parse(t),t)return t=Cl(t),e!=null&&(t[0]=Ll(e)),r!=null&&(t[1]=Sr(r)),i!=null&&(t[2]=Sr(i)),we.stringify(Sn(t),"rgba")},we.modifyAlpha=function(t,e){if(t=we.parse(t),t&&e!=null)return t[3]=Yr(e),we.stringify(t,"rgba")},we.stringify=function(t,e){if(!(!t||!t.length)){var r=t[0]+","+t[1]+","+t[2];return(e==="rgba"||e==="hsva"||e==="hsla")&&(r+=","+t[3]),e+"("+r+")"}};var Ml=we,Pl=Ml.parseToFloat,En={};function Xa(t){var e=Object.keys(t);e.sort();for(var r=[],i=0;i<e.length;i++){var n=e[i],a=t[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function Rl(t,e,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Xa(t)+`
`+Xa(e)+`
`+i.join(`
`);if(En[o])return En[o];var s=Ke.genGUID();return En[o]=s,s}var Nl=nt.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,r){r===void 0&&console.warn('Uniform value "'+e+'" is undefined');var i=this.uniforms[e];i&&(typeof r=="string"&&(r=Pl(r)||r),i.value=r,this.autoUpdateTextureStatus&&i.type==="t"&&(r?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var r in e){var i=e[r];this.setUniform(r,i)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,r){if(typeof e=="object")for(var i in e){var n=e[i];this.setUniform(i,n)}else this.setUniform(e,r)},get:function(e){var r=this.uniforms[e];if(r)return r.value},attachShader:function(e,r){var i=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(h){var f=this.uniforms[h].type;return f==="t"||f==="tv"},this);var a=this.vertexDefines,o=this.fragmentDefines;if(this.vertexDefines=Ke.clone(e.vertexDefines),this.fragmentDefines=Ke.clone(e.fragmentDefines),r){for(var s in i)n[s]&&(n[s].value=i[s].value);Ke.defaults(this.vertexDefines,a),Ke.defaults(this.fragmentDefines,o)}var l={};for(var u in e.textures)l[u]={shaderType:e.textures[u].shaderType,type:e.textures[u].type,enabled:r&&this._textureStatus[u]?this._textureStatus[u].enabled:!1};this._textureStatus=l,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var r in this.uniforms)e.uniforms[r].value=this.uniforms[r].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ke.clone(this.vertexDefines),e.fragmentDefines=Ke.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,r,i){var n=this.vertexDefines,a=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(i=r,r=e,e="both"),i=i!=null?i:null,(e==="vertex"||e==="both")&&n[r]!==i&&(n[r]=i,this._programKey=""),(e==="fragment"||e==="both")&&a[r]!==i&&(a[r]=i,e!=="both"&&(this._programKey=""))},undefine:function(e,r){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(r=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",r)&&(delete this.vertexDefines[r],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",r)&&(delete this.fragmentDefines[r],e!=="both"&&(this._programKey=""))},isDefined:function(e,r){switch(e){case"vertex":return this.vertexDefines[r]!==void 0;case"fragment":return this.fragmentDefines[r]!==void 0}},getDefine:function(e,r){switch(e){case"vertex":return this.vertexDefines[r];case"fragment":return this.fragmentDefines[r]}},enableTexture:function(e){if(Array.isArray(e)){for(var r=0;r<e.length;r++)this.enableTexture(e[r]);return}var i=this._textureStatus[e];if(i){var n=i.enabled;n||(i.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var r in e)e[r].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var r=0;r<e.length;r++)this.disableTexture(e[r]);return}var i=this._textureStatus[e];if(i){var n=!i.enabled;n||(i.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var r in e)e[r].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var r=this._textureStatus;return!!r[e]&&r[e].enabled},getEnabledTextures:function(){var e=[],r=this._textureStatus;for(var i in r)r[i].enabled&&e.push(i);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Rl(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Tt=Nl,Ai=1e-6,Qe=Array,wr=Math.random,$={};$.create=function(){var t=new Qe(2);return t[0]=0,t[1]=0,t},$.clone=function(t){var e=new Qe(2);return e[0]=t[0],e[1]=t[1],e},$.fromValues=function(t,e){var r=new Qe(2);return r[0]=t,r[1]=e,r},$.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},$.set=function(t,e,r){return t[0]=e,t[1]=r,t},$.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t},$.subtract=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t},$.sub=$.subtract,$.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t},$.mul=$.multiply,$.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t},$.div=$.divide,$.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t},$.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t},$.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t},$.scaleAndAdd=function(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t},$.distance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(r*r+i*i)},$.dist=$.distance,$.squaredDistance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1];return r*r+i*i},$.sqrDist=$.squaredDistance,$.length=function(t){var e=t[0],r=t[1];return Math.sqrt(e*e+r*r)},$.len=$.length,$.squaredLength=function(t){var e=t[0],r=t[1];return e*e+r*r},$.sqrLen=$.squaredLength,$.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},$.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},$.normalize=function(t,e){var r=e[0],i=e[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),t[0]=e[0]*n,t[1]=e[1]*n),t},$.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},$.cross=function(t,e,r){var i=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=i,t},$.lerp=function(t,e,r,i){var n=e[0],a=e[1];return t[0]=n+i*(r[0]-n),t[1]=a+i*(r[1]-a),t},$.random=function(t,e){e=e||1;var r=GLMAT_RANDOM()*2*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t},$.transformMat2=function(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t},$.transformMat2d=function(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n+r[4],t[1]=r[1]*i+r[3]*n+r[5],t},$.transformMat3=function(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[3]*n+r[6],t[1]=r[1]*i+r[4]*n+r[7],t},$.transformMat4=function(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t},$.forEach=function(){var t=$.create();return function(e,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,e.length):l=e.length,s=i;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],a(t,t,o),e[s]=t[0],e[s+1]=t[1];return e}}();var Z=$,ie=function(e,r){e=e||0,r=r||0,this.array=Z.fromValues(e,r),this._dirty=!0};if(ie.prototype={constructor:ie,add:function(e){return Z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,r){return this.array[0]=e,this.array[1]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new ie(this.x,this.y)},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,r){return Z.cross(e.array,this.array,r.array),e._dirty=!0,this},dist:function(e){return Z.dist(this.array,e.array)},distance:function(e){return Z.distance(this.array,e.array)},div:function(e){return Z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return Z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return Z.dot(this.array,e.array)},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(e,r,i){return Z.lerp(this.array,e.array,r.array,i),this._dirty=!0,this},min:function(e){return Z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return Z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return Z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return Z.random(this.array,e),this._dirty=!0,this},scale:function(e){return Z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,r){return Z.scaleAndAdd(this.array,this.array,e.array,r),this._dirty=!0,this},sqrDist:function(e){return Z.sqrDist(this.array,e.array)},squaredDistance:function(e){return Z.squaredDistance(this.array,e.array)},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},sub:function(e){return Z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return Z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return Z.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return Z.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return Z.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return Z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},Object.defineProperty){var ja=ie.prototype;Object.defineProperty(ja,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(ja,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}ie.add=function(t,e,r){return Z.add(t.array,e.array,r.array),t._dirty=!0,t},ie.set=function(t,e,r){return Z.set(t.array,e,r),t._dirty=!0,t},ie.copy=function(t,e){return Z.copy(t.array,e.array),t._dirty=!0,t},ie.cross=function(t,e,r){return Z.cross(t.array,e.array,r.array),t._dirty=!0,t},ie.dist=function(t,e){return Z.distance(t.array,e.array)},ie.distance=ie.dist,ie.div=function(t,e,r){return Z.divide(t.array,e.array,r.array),t._dirty=!0,t},ie.divide=ie.div,ie.dot=function(t,e){return Z.dot(t.array,e.array)},ie.len=function(t){return Z.length(t.array)},ie.lerp=function(t,e,r,i){return Z.lerp(t.array,e.array,r.array,i),t._dirty=!0,t},ie.min=function(t,e,r){return Z.min(t.array,e.array,r.array),t._dirty=!0,t},ie.max=function(t,e,r){return Z.max(t.array,e.array,r.array),t._dirty=!0,t},ie.mul=function(t,e,r){return Z.multiply(t.array,e.array,r.array),t._dirty=!0,t},ie.multiply=ie.mul,ie.negate=function(t,e){return Z.negate(t.array,e.array),t._dirty=!0,t},ie.normalize=function(t,e){return Z.normalize(t.array,e.array),t._dirty=!0,t},ie.random=function(t,e){return Z.random(t.array,e),t._dirty=!0,t},ie.scale=function(t,e,r){return Z.scale(t.array,e.array,r),t._dirty=!0,t},ie.scaleAndAdd=function(t,e,r,i){return Z.scaleAndAdd(t.array,e.array,r.array,i),t._dirty=!0,t},ie.sqrDist=function(t,e){return Z.sqrDist(t.array,e.array)},ie.squaredDistance=ie.sqrDist,ie.sqrLen=function(t){return Z.sqrLen(t.array)},ie.squaredLength=ie.sqrLen,ie.sub=function(t,e,r){return Z.subtract(t.array,e.array,r.array),t._dirty=!0,t},ie.subtract=ie.sub,ie.transformMat2=function(t,e,r){return Z.transformMat2(t.array,e.array,r.array),t._dirty=!0,t},ie.transformMat2d=function(t,e,r){return Z.transformMat2d(t.array,e.array,r.array),t._dirty=!0,t},ie.transformMat3=function(t,e,r){return Z.transformMat3(t.array,e.array,r.array),t._dirty=!0,t},ie.transformMat4=function(t,e,r){return Z.transformMat4(t.array,e.array,r.array),t._dirty=!0,t};var vt=ie,Za=1,Ya=2,wn=3,qa={};function Il(t){for(var e=t.split(`
`),r=0,i=e.length;r<i;r++)e[r]=r+1+": "+e[r];return e.join(`
`)}function Ka(t,e,r){if(!t.getShaderParameter(e,t.COMPILE_STATUS))return[t.getShaderInfoLog(e),Il(r)].join(`
`)}var Qa=new Me.a.Float32Array(16),Ol=nt.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var r=this._locations[e];return r!=null},useTextureSlot:function(e,r,i){r&&(e.gl.activeTexture(e.gl.TEXTURE0+i),r.isRenderable()?r.bind(e):r.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,r){var i=this._textureSlot;return this.useTextureSlot(e,r,i),this._textureSlot++,i},setUniform:function(e,r,i,n){var a=this._locations,o=a[i];if(o==null)return!1;switch(r){case"m4":if(!(n instanceof Float32Array)){for(var s=0;s<n.length;s++)Qa[s]=n[s];n=Qa}e.uniformMatrix4fv(o,!1,n);break;case"2i":e.uniform2i(o,n[0],n[1]);break;case"2f":e.uniform2f(o,n[0],n[1]);break;case"3i":e.uniform3i(o,n[0],n[1],n[2]);break;case"3f":e.uniform3f(o,n[0],n[1],n[2]);break;case"4i":e.uniform4i(o,n[0],n[1],n[2],n[3]);break;case"4f":e.uniform4f(o,n[0],n[1],n[2],n[3]);break;case"1i":e.uniform1i(o,n);break;case"1f":e.uniform1f(o,n);break;case"1fv":e.uniform1fv(o,n);break;case"1iv":e.uniform1iv(o,n);break;case"2iv":e.uniform2iv(o,n);break;case"2fv":e.uniform2fv(o,n);break;case"3iv":e.uniform3iv(o,n);break;case"3fv":e.uniform3fv(o,n);break;case"4iv":e.uniform4iv(o,n);break;case"4fv":e.uniform4fv(o,n);break;case"m2":case"m2v":e.uniformMatrix2fv(o,!1,n);break;case"m3":case"m3v":e.uniformMatrix3fv(o,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var l=new Me.a.Float32Array(n.length*16),u=0,s=0;s<n.length;s++)for(var h=n[s],f=0;f<16;f++)l[u++]=h[f];e.uniformMatrix4fv(o,!1,l)}else e.uniformMatrix4fv(o,!1,n);break}return!0},setUniformOfSemantic:function(e,r,i){var n=this.uniformSemantics[r];return n?this.setUniform(e,n.type,n.symbol,i):!1},enableAttributes:function(e,r,i){var n=e.gl,a=this._program,o=this._locations,s;i?s=i.__enabledAttributeList:s=qa[e.__uid__],s||(i?s=i.__enabledAttributeList=[]:s=qa[e.__uid__]=[]);for(var l=[],u=0;u<r.length;u++){var h=r[u];if(!this.attributes[h]){l[u]=-1;continue}var f=o[h];if(f==null){if(f=n.getAttribLocation(a,h),f===-1){l[u]=-1;continue}o[h]=f}l[u]=f,s[f]?s[f]=Ya:s[f]=Za}for(var u=0;u<s.length;u++)switch(s[u]){case Za:n.enableVertexAttribArray(u),s[u]=wn;break;case Ya:s[u]=wn;break;case wn:n.disableVertexAttribArray(u),s[u]=0;break}return l},getAttribLocation:function(e,r){var i=this._locations,n=i[r];return n==null&&(n=e.getAttribLocation(this._program,r),i[r]=n),n},buildProgram:function(e,r,i,n){var a=e.createShader(e.VERTEX_SHADER),o=e.createProgram();e.shaderSource(a,i),e.compileShader(a);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,n),e.compileShader(s);var l=Ka(e,a,i);if(l||(l=Ka(e,s,n),l))return l;if(e.attachShader(o,a),e.attachShader(o,s),r.attributeSemantics.POSITION)e.bindAttribLocation(o,0,r.attributeSemantics.POSITION.symbol);else{var u=Object.keys(this.attributes);e.bindAttribLocation(o,0,u[0])}if(e.linkProgram(o),e.deleteShader(a),e.deleteShader(s),this._program=o,this.vertexCode=i,this.fragmentCode=n,!e.getProgramParameter(o,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(o);for(var h=0;h<r.uniforms.length;h++){var f=r.uniforms[h];this._locations[f]=e.getUniformLocation(o,f)}}}),Bl=Ol,Fl=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Ja(t,e,r){function i(o,s,l,u){var h="";isNaN(s)&&(s in e?s=e[s]:s=n[s]),isNaN(l)&&(l in e?l=e[l]:l=n[l]);for(var f=parseInt(s);f<parseInt(l);f++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,f.toFixed(1)).replace(/_idx_/g,f)+"}";return h}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return t.replace(Fl,i)}function An(t,e,r){var i=[];if(e)for(var n in e){var a=e[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in t){var l=t[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function Ul(t){for(var e=[],r=0;r<t.length;r++)e.push("#extension GL_"+t[r]+" : enable");return e.join(`
`)}function Gl(t){return["precision",t,"float"].join(" ")+`;
`+["precision",t,"int"].join(" ")+`;
`+["precision",t,"sampler2D"].join(" ")+`;
`}function $a(t){this._renderer=t,this._cache={}}$a.prototype.getProgram=function(t,e,r){var i=this._cache,n=t.isSkinnedMesh&&t.isSkinnedMesh(),a=t.isInstancedMesh&&t.isInstancedMesh(),o="s"+e.shader.shaderID+"m"+e.getProgramKey();r&&(o+="se"+r.getProgramKey(t.lightGroup)),n&&(o+=",sk"+t.joints.length),a&&(o+=",is");var s=i[o];if(s)return s;var l=r?r.getLightsNumbers(t.lightGroup):{},u=this._renderer,h=u.gl,f=e.getEnabledTextures(),c="";if(n){var d={SKINNING:null,JOINT_COUNT:t.joints.length};t.joints.length>u.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+An(d)+`
`}a&&(c+=`
#define INSTANCING
`);var v=c+An(e.vertexDefines,l,f),p=c+An(e.fragmentDefines,l,f),m=v+`
`+e.shader.vertex,g=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(E){return u.getGLExtension(E)!=null});g.indexOf("EXT_shader_texture_lod")>=0&&(p+=`
#define SUPPORT_TEXTURE_LOD`),g.indexOf("OES_standard_derivatives")>=0&&(p+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=Ul(g)+`
`+Gl(e.precision)+`
`+p+`
`+e.shader.fragment,y=Ja(m,e.vertexDefines,l),S=Ja(_,e.fragmentDefines,l),s=new Bl;s.uniformSemantics=e.shader.uniformSemantics,s.attributes=e.shader.attributes;var x=s.buildProgram(h,e.shader,y,S);return s.__error=x,i[o]=s,s};var zl=$a,eo=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Hl=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,to=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Vl={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function It(t){for(var e=[],r=0;r<t;r++)e[r]=0;return e}var ro={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return It(2)},vec3:function(){return It(3)},vec4:function(){return It(4)},ivec2:function(){return It(2)},ivec3:function(){return It(3)},ivec4:function(){return It(4)},mat2:function(){return It(4)},mat3:function(){return It(9)},mat4:function(){return It(16)},array:function(){return[]}},bn=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],io=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],no=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Wl={vec4:4,vec3:3,vec2:2,float:1},Dn={},ao={};function kl(t,e){var r="vertex:"+t+"fragment:"+e;if(Dn[r])return Dn[r];var i=Ke.genGUID();return Dn[r]=i,ao[i]={vertex:t,fragment:e},i}function oo(t){return t.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Ar(){console.error("Wrong uniform/attributes syntax")}function so(t,e){for(var r=/[,=\(\):]/,i=e.replace(/:\s*\[\s*(.*)\s*\]/g,"="+t+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,h=4,f=5,c=o,d={},v=null,p;m(i[0]);function m(y){y||Ar();var S=y.match(/\[(.*?)\]/);p=y.replace(/\[(.*?)\]/,""),d[p]={},S&&(d[p].isArray=!0,d[p].arraySize=S[1])}for(var a=1;a<i.length;a++){var g=i[a];if(!!g){if(g==="="){if(c!==o&&c!==u){Ar();break}c=s;continue}else if(g===":"){c=h;continue}else if(g===","){if(c===l){if(!(v instanceof Array)){Ar();break}v.push(+i[++a])}else c=f;continue}else if(g===")"){d[p].value=new Me.a.Float32Array(v),v=null,c=f;continue}else if(g==="("){if(c!==l){Ar();break}if(!(v instanceof Array)){Ar();break}v.push(+i[++a]);continue}else if(g.indexOf("vec")>=0){if(c!==s&&c!==h){Ar();break}c=l,v=[];continue}else if(c===s){t==="bool"?d[p].value=g==="true":d[p].value=parseFloat(g),v=null;continue}else if(c===h){var _=g;bn.indexOf(_)>=0||io.indexOf(_)>=0||no.indexOf(_)>=0?d[p].semantic=_:_==="ignore"||_==="unconfigurable"?d[p].ignore=!0:t==="bool"?d[p].value=_==="true":d[p].value=parseFloat(_);continue}m(g),c=o}}return d}function Fe(t,e){typeof t=="object"&&(e=t.fragment,t=t.vertex),t=oo(t),e=oo(e),this._shaderID=kl(t,e),this._vertexCode=Fe.parseImport(t),this._fragmentCode=Fe.parseImport(e),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}Fe.prototype={constructor:Fe,createUniforms:function(){var e={};for(var r in this.uniformTemplates){var i=this.uniformTemplates[r];e[r]={type:i.type,value:i.value()}}return e},_parseImport:function(){this._vertexCode=Fe.parseImport(this.vertex),this._fragmentCode=Fe.parseImport(this.fragment)},_addSemanticUniform:function(e,r,i){if(bn.indexOf(i)>=0)this.attributeSemantics[i]={symbol:e,type:r};else if(no.indexOf(i)>=0){var n=!1,a=i;i.match(/TRANSPOSE$/)&&(n=!0,a=i.slice(0,-9)),this.matrixSemantics[i]={symbol:e,type:r,isTranspose:n,semanticNoTranspose:a}}else io.indexOf(i)>=0&&(this.uniformSemantics[i]={symbol:e,type:r})},_addMaterialUniform:function(e,r,i,n,a,o){o[e]={type:i,value:a?ro.array:n||ro[r],semantic:null}},_parseUniforms:function(){var e={},r=this,i="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(eo,a),i="fragment",this._fragmentCode=this._fragmentCode.replace(eo,a),r.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(o){return o!=null?function(){return o}:null}function a(o,s,l){var u=so(s,l),h=[];for(var f in u){var c=u[f],d=c.semantic,v=f,p=Vl[s],m=n(u[f].value);u[f].isArray&&(v+="["+u[f].arraySize+"]",p+="v"),h.push(v),r._uniformList.push(f),c.ignore||((s==="sampler2D"||s==="samplerCube")&&(r.textures[f]={shaderType:i,type:s}),d?r._addSemanticUniform(f,p,d):r._addMaterialUniform(f,s,p,m,u[f].isArray,e))}return h.length>0?"uniform "+s+" "+h.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},r=this;this._vertexCode=this._vertexCode.replace(Hl,i);function i(n,a,o){var s=so(a,o),l=Wl[a]||1,u=[];for(var h in s){var f=s[h].semantic;if(e[h]={type:"float",size:l,semantic:f||null},f){if(bn.indexOf(f)<0)throw new Error('Unkown semantic "'+f+'"');r.attributeSemantics[f]={symbol:h,type:a}}u.push(h)}return"attribute "+a+" "+u.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,r="vertex";this._vertexCode=this._vertexCode.replace(to,i),r="fragment",this._fragmentCode=this._fragmentCode.replace(to,i);function i(n,a,o){var s=r==="vertex"?e.vertexDefines:e.fragmentDefines;return s[a]||(o==="false"?s[a]=!1:o==="true"?s[a]=!0:s[a]=o?isNaN(parseFloat(o))?o.trim():parseFloat(o):null),""}},clone:function(){var e=ao[this._shaderID],r=new Fe(e.vertex,e.fragment);return r}},Object.defineProperty&&(Object.defineProperty(Fe.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(Fe.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(Fe.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(Fe.prototype,"uniforms",{get:function(){return this._uniformList}}));var Xl=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;Fe.parseImport=function(t){return t=t.replace(Xl,function(e,r,i){var e=Fe.source(i);return e?Fe.parseImport(e):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),t};var jl=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;Fe.import=function(t){t.replace(jl,function(e,r,i,n){var n=n.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(n){for(var a=i.split("."),o=Fe.codes,s=0,l;s<a.length-1;)l=a[s++],o[l]||(o[l]={}),o=o[l];l=a[s],o[l]=n}return n})},Fe.codes={},Fe.source=function(t){for(var e=t.split("."),r=Fe.codes,i=0;r&&i<e.length;){var n=e[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+t+'" not existed in library'),""):r};var F=Fe,lo=`@export clay.prez.vertex
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
@end`,me={};me.create=function(){var t=new Qe(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},me.clone=function(t){var e=new Qe(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},me.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},me.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},me.transpose=function(t,e){if(t===e){var r=e[1],i=e[2],n=e[3],a=e[6],o=e[7],s=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=a,t[11]=e[14],t[12]=n,t[13]=o,t[14]=s}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},me.invert=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],f=e[9],c=e[10],d=e[11],v=e[12],p=e[13],m=e[14],g=e[15],_=r*s-i*o,y=r*l-n*o,S=r*u-a*o,x=i*l-n*s,E=i*u-a*s,D=n*u-a*l,L=h*p-f*v,b=h*m-c*v,M=h*g-d*v,N=f*m-c*p,C=f*g-d*p,B=c*g-d*m,P=_*B-y*C+S*N+x*M-E*b+D*L;return P?(P=1/P,t[0]=(s*B-l*C+u*N)*P,t[1]=(n*C-i*B-a*N)*P,t[2]=(p*D-m*E+g*x)*P,t[3]=(c*E-f*D-d*x)*P,t[4]=(l*M-o*B-u*b)*P,t[5]=(r*B-n*M+a*b)*P,t[6]=(m*S-v*D-g*y)*P,t[7]=(h*D-c*S+d*y)*P,t[8]=(o*C-s*M+u*L)*P,t[9]=(i*M-r*C-a*L)*P,t[10]=(v*E-p*S+g*_)*P,t[11]=(f*S-h*E-d*_)*P,t[12]=(s*b-o*N-l*L)*P,t[13]=(r*N-i*b+n*L)*P,t[14]=(p*y-v*x-m*_)*P,t[15]=(h*x-f*y+c*_)*P,t):null},me.adjoint=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],f=e[9],c=e[10],d=e[11],v=e[12],p=e[13],m=e[14],g=e[15];return t[0]=s*(c*g-d*m)-f*(l*g-u*m)+p*(l*d-u*c),t[1]=-(i*(c*g-d*m)-f*(n*g-a*m)+p*(n*d-a*c)),t[2]=i*(l*g-u*m)-s*(n*g-a*m)+p*(n*u-a*l),t[3]=-(i*(l*d-u*c)-s*(n*d-a*c)+f*(n*u-a*l)),t[4]=-(o*(c*g-d*m)-h*(l*g-u*m)+v*(l*d-u*c)),t[5]=r*(c*g-d*m)-h*(n*g-a*m)+v*(n*d-a*c),t[6]=-(r*(l*g-u*m)-o*(n*g-a*m)+v*(n*u-a*l)),t[7]=r*(l*d-u*c)-o*(n*d-a*c)+h*(n*u-a*l),t[8]=o*(f*g-d*p)-h*(s*g-u*p)+v*(s*d-u*f),t[9]=-(r*(f*g-d*p)-h*(i*g-a*p)+v*(i*d-a*f)),t[10]=r*(s*g-u*p)-o*(i*g-a*p)+v*(i*u-a*s),t[11]=-(r*(s*d-u*f)-o*(i*d-a*f)+h*(i*u-a*s)),t[12]=-(o*(f*m-c*p)-h*(s*m-l*p)+v*(s*c-l*f)),t[13]=r*(f*m-c*p)-h*(i*m-n*p)+v*(i*c-n*f),t[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),t[15]=r*(s*c-l*f)-o*(i*c-n*f)+h*(i*l-n*s),t},me.determinant=function(t){var e=t[0],r=t[1],i=t[2],n=t[3],a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],f=t[10],c=t[11],d=t[12],v=t[13],p=t[14],m=t[15],g=e*o-r*a,_=e*s-i*a,y=e*l-n*a,S=r*s-i*o,x=r*l-n*o,E=i*l-n*s,D=u*v-h*d,L=u*p-f*d,b=u*m-c*d,M=h*p-f*v,N=h*m-c*v,C=f*m-c*p;return g*C-_*N+y*M+S*b-x*L+E*D},me.multiply=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=e[9],d=e[10],v=e[11],p=e[12],m=e[13],g=e[14],_=e[15],y=r[0],S=r[1],x=r[2],E=r[3];return t[0]=y*i+S*s+x*f+E*p,t[1]=y*n+S*l+x*c+E*m,t[2]=y*a+S*u+x*d+E*g,t[3]=y*o+S*h+x*v+E*_,y=r[4],S=r[5],x=r[6],E=r[7],t[4]=y*i+S*s+x*f+E*p,t[5]=y*n+S*l+x*c+E*m,t[6]=y*a+S*u+x*d+E*g,t[7]=y*o+S*h+x*v+E*_,y=r[8],S=r[9],x=r[10],E=r[11],t[8]=y*i+S*s+x*f+E*p,t[9]=y*n+S*l+x*c+E*m,t[10]=y*a+S*u+x*d+E*g,t[11]=y*o+S*h+x*v+E*_,y=r[12],S=r[13],x=r[14],E=r[15],t[12]=y*i+S*s+x*f+E*p,t[13]=y*n+S*l+x*c+E*m,t[14]=y*a+S*u+x*d+E*g,t[15]=y*o+S*h+x*v+E*_,t},me.multiplyAffine=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[4],s=e[5],l=e[6],u=e[8],h=e[9],f=e[10],c=e[12],d=e[13],v=e[14],p=r[0],m=r[1],g=r[2];return t[0]=p*i+m*o+g*u,t[1]=p*n+m*s+g*h,t[2]=p*a+m*l+g*f,p=r[4],m=r[5],g=r[6],t[4]=p*i+m*o+g*u,t[5]=p*n+m*s+g*h,t[6]=p*a+m*l+g*f,p=r[8],m=r[9],g=r[10],t[8]=p*i+m*o+g*u,t[9]=p*n+m*s+g*h,t[10]=p*a+m*l+g*f,p=r[12],m=r[13],g=r[14],t[12]=p*i+m*o+g*u+c,t[13]=p*n+m*s+g*h+d,t[14]=p*a+m*l+g*f+v,t},me.mul=me.multiply,me.mulAffine=me.multiplyAffine,me.translate=function(t,e,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,h,f,c,d,v,p,m,g;return e===t?(t[12]=e[0]*i+e[4]*n+e[8]*a+e[12],t[13]=e[1]*i+e[5]*n+e[9]*a+e[13],t[14]=e[2]*i+e[6]*n+e[10]*a+e[14],t[15]=e[3]*i+e[7]*n+e[11]*a+e[15]):(o=e[0],s=e[1],l=e[2],u=e[3],h=e[4],f=e[5],c=e[6],d=e[7],v=e[8],p=e[9],m=e[10],g=e[11],t[0]=o,t[1]=s,t[2]=l,t[3]=u,t[4]=h,t[5]=f,t[6]=c,t[7]=d,t[8]=v,t[9]=p,t[10]=m,t[11]=g,t[12]=o*i+h*n+v*a+e[12],t[13]=s*i+f*n+p*a+e[13],t[14]=l*i+c*n+m*a+e[14],t[15]=u*i+d*n+g*a+e[15]),t},me.scale=function(t,e,r){var i=r[0],n=r[1],a=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},me.rotate=function(t,e,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,h,f,c,d,v,p,m,g,_,y,S,x,E,D,L,b,M,N,C,B,P,j;return Math.abs(s)<Ai?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),h=1-u,f=e[0],c=e[1],d=e[2],v=e[3],p=e[4],m=e[5],g=e[6],_=e[7],y=e[8],S=e[9],x=e[10],E=e[11],D=n*n*h+u,L=a*n*h+o*l,b=o*n*h-a*l,M=n*a*h-o*l,N=a*a*h+u,C=o*a*h+n*l,B=n*o*h+a*l,P=a*o*h-n*l,j=o*o*h+u,t[0]=f*D+p*L+y*b,t[1]=c*D+m*L+S*b,t[2]=d*D+g*L+x*b,t[3]=v*D+_*L+E*b,t[4]=f*M+p*N+y*C,t[5]=c*M+m*N+S*C,t[6]=d*M+g*N+x*C,t[7]=v*M+_*N+E*C,t[8]=f*B+p*P+y*j,t[9]=c*B+m*P+S*j,t[10]=d*B+g*P+x*j,t[11]=v*B+_*P+E*j,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},me.rotateX=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],f=e[10],c=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+u*i,t[5]=o*n+h*i,t[6]=s*n+f*i,t[7]=l*n+c*i,t[8]=u*n-a*i,t[9]=h*n-o*i,t[10]=f*n-s*i,t[11]=c*n-l*i,t},me.rotateY=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),a=e[0],o=e[1],s=e[2],l=e[3],u=e[8],h=e[9],f=e[10],c=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-u*i,t[1]=o*n-h*i,t[2]=s*n-f*i,t[3]=l*n-c*i,t[8]=a*i+u*n,t[9]=o*i+h*n,t[10]=s*i+f*n,t[11]=l*i+c*n,t},me.rotateZ=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),a=e[0],o=e[1],s=e[2],l=e[3],u=e[4],h=e[5],f=e[6],c=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+u*i,t[1]=o*n+h*i,t[2]=s*n+f*i,t[3]=l*n+c*i,t[4]=u*n-a*i,t[5]=h*n-o*i,t[6]=f*n-s*i,t[7]=c*n-l*i,t},me.fromRotationTranslation=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=i+i,l=n+n,u=a+a,h=i*s,f=i*l,c=i*u,d=n*l,v=n*u,p=a*u,m=o*s,g=o*l,_=o*u;return t[0]=1-(d+p),t[1]=f+_,t[2]=c-g,t[3]=0,t[4]=f-_,t[5]=1-(h+p),t[6]=v+m,t[7]=0,t[8]=c+g,t[9]=v-m,t[10]=1-(h+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},me.fromQuat=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,f=i*s,c=n*o,d=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return t[0]=1-f-v,t[1]=h+g,t[2]=c-m,t[3]=0,t[4]=h-g,t[5]=1-u-v,t[6]=d+p,t[7]=0,t[8]=c+m,t[9]=d-p,t[10]=1-u-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},me.frustum=function(t,e,r,i,n,a,o){var s=1/(r-e),l=1/(n-i),u=1/(a-o);return t[0]=a*2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*l,t[6]=0,t[7]=0,t[8]=(r+e)*s,t[9]=(n+i)*l,t[10]=(o+a)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*a*2*u,t[15]=0,t},me.perspective=function(t,e,r,i,n){var a=1/Math.tan(e/2),o=1/(i-n);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*i*o,t[15]=0,t},me.ortho=function(t,e,r,i,n,a,o){var s=1/(e-r),l=1/(i-n),u=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*s,t[13]=(n+i)*l,t[14]=(o+a)*u,t[15]=1,t},me.lookAt=function(t,e,r,i){var n,a,o,s,l,u,h,f,c,d,v=e[0],p=e[1],m=e[2],g=i[0],_=i[1],y=i[2],S=r[0],x=r[1],E=r[2];return Math.abs(v-S)<Ai&&Math.abs(p-x)<Ai&&Math.abs(m-E)<Ai?me.identity(t):(h=v-S,f=p-x,c=m-E,d=1/Math.sqrt(h*h+f*f+c*c),h*=d,f*=d,c*=d,n=_*c-y*f,a=y*h-g*c,o=g*f-_*h,d=Math.sqrt(n*n+a*a+o*o),d?(d=1/d,n*=d,a*=d,o*=d):(n=0,a=0,o=0),s=f*o-c*a,l=c*n-h*o,u=h*a-f*n,d=Math.sqrt(s*s+l*l+u*u),d?(d=1/d,s*=d,l*=d,u*=d):(s=0,l=0,u=0),t[0]=n,t[1]=s,t[2]=h,t[3]=0,t[4]=a,t[5]=l,t[6]=f,t[7]=0,t[8]=o,t[9]=u,t[10]=c,t[11]=0,t[12]=-(n*v+a*p+o*m),t[13]=-(s*v+l*p+u*m),t[14]=-(h*v+f*p+c*m),t[15]=1,t)},me.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))};var I=me,q={};q.create=function(){var t=new Qe(3);return t[0]=0,t[1]=0,t[2]=0,t},q.clone=function(t){var e=new Qe(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},q.fromValues=function(t,e,r){var i=new Qe(3);return i[0]=t,i[1]=e,i[2]=r,i},q.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},q.set=function(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t},q.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},q.subtract=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t},q.sub=q.subtract,q.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t},q.mul=q.multiply,q.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t},q.div=q.divide,q.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t},q.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t},q.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},q.scaleAndAdd=function(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t},q.distance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+i*i+n*n)},q.dist=q.distance,q.squaredDistance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n},q.sqrDist=q.squaredDistance,q.length=function(t){var e=t[0],r=t[1],i=t[2];return Math.sqrt(e*e+r*r+i*i)},q.len=q.length,q.squaredLength=function(t){var e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i},q.sqrLen=q.squaredLength,q.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},q.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},q.normalize=function(t,e){var r=e[0],i=e[1],n=e[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t},q.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},q.cross=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=r[0],s=r[1],l=r[2];return t[0]=n*l-a*s,t[1]=a*o-i*l,t[2]=i*s-n*o,t},q.lerp=function(t,e,r,i){var n=e[0],a=e[1],o=e[2];return t[0]=n+i*(r[0]-n),t[1]=a+i*(r[1]-a),t[2]=o+i*(r[2]-o),t},q.random=function(t,e){e=e||1;var r=wr()*2*Math.PI,i=wr()*2-1,n=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t[2]=i*e,t},q.transformMat4=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,t[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,t[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,t[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,t},q.transformMat3=function(t,e,r){var i=e[0],n=e[1],a=e[2];return t[0]=i*r[0]+n*r[3]+a*r[6],t[1]=i*r[1]+n*r[4]+a*r[7],t[2]=i*r[2]+n*r[5]+a*r[8],t},q.transformQuat=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,f=u*n+l*i-o*a,c=u*a+o*n-s*i,d=-o*i-s*n-l*a;return t[0]=h*u+d*-o+f*-l-c*-s,t[1]=f*u+d*-s+c*-o-h*-l,t[2]=c*u+d*-l+h*-s-f*-o,t},q.rotateX=function(t,e,r,i){var n=[],a=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},q.rotateY=function(t,e,r,i){var n=[],a=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},q.rotateZ=function(t,e,r,i){var n=[],a=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},q.forEach=function(){var t=q.create();return function(e,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,e.length):l=e.length,s=i;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}(),q.angle=function(t,e){var r=q.fromValues(t[0],t[1],t[2]),i=q.fromValues(e[0],e[1],e[2]);q.normalize(r,r),q.normalize(i,i);var n=q.dot(r,i);return n>1?0:Math.acos(n)};var A=q;F.import(lo);var Te=I.create,uo={};function ho(t){return t.material}function Zl(t,e,r){return e.uniforms[r].value}function Yl(t,e,r,i){return r!==i}function ql(t){return!0}function fo(){}var co={float:R.FLOAT,byte:R.BYTE,ubyte:R.UNSIGNED_BYTE,short:R.SHORT,ushort:R.UNSIGNED_SHORT};function Kl(t,e,r){this.availableAttributes=t,this.availableAttributeSymbols=e,this.indicesBuffer=r,this.vao=null}function Ql(t){var e,r;this.bind=function(i){e||(e=Me.a.createCanvas(),e.width=e.height=1,e.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Xt=nt.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window!="undefined"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=Me.a.createCanvas());var t=this.canvas;try{var e={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),!this.gl)throw new Error;this._glinfo=new bl(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new zl(this),this._placeholderTexture=new Ql(this)},{resize:function(e,r){var i=this.canvas,n=this.devicePixelRatio;e!=null?(i.style&&(i.style.width=e+"px",i.style.height=r+"px"),i.width=e*n,i.height=r*n,this._width=e,this._height=r):(this._width=i.width/n,this._height=i.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,r,i,n,a){if(typeof e=="object"){var o=e;e=o.x,r=o.y,i=o.width,n=o.height,a=o.devicePixelRatio}a=a||this.devicePixelRatio,this.gl.viewport(e*a,r*a,i*a,n*a),this.viewport={x:e,y:r,width:i,height:n,devicePixelRatio:a}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,r,i,n){var a=this.gl,o=this.clearColor;if(this.clearBit){a.colorMask(!0,!0,!0,!0),a.depthMask(!0);var s=this.viewport,l=!1,u=s.devicePixelRatio;(s.width!==this._width||s.height!==this._height||u&&u!==this.devicePixelRatio||s.x||s.y)&&(l=!0,a.enable(a.SCISSOR_TEST),a.scissor(s.x*u,s.y*u,s.width*u,s.height*u)),a.clearColor(o[0],o[1],o[2],o[3]),a.clear(this.clearBit),l&&a.disable(a.SCISSOR_TEST)}if(i||e.update(!1),e.updateLights(),r=r||e.getMainCamera(),!r){console.error("Can't find camera in the scene.");return}r.update();var h=e.updateRenderList(r,!0);this._sceneRendering=e;var f=h.opaque,c=h.transparent,d=e.material;e.trigger("beforerender",this,e,r,h),n?(this.renderPreZ(f,e,r),a.depthFunc(a.LEQUAL)):a.depthFunc(a.LESS);for(var v=Te(),p=A.create(),m=0;m<c.length;m++){var g=c[m];I.multiplyAffine(v,r.viewMatrix.array,g.worldTransform.array),A.transformMat4(p,g.position.array,v),g.__depth=p[2]}this.renderPass(f,r,{getMaterial:function(y){return d||y.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,r,{getMaterial:function(y){return d||y.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,r,h),this._sceneRendering=null},getProgram:function(e,r,i){return r=r||e.material,this._programMgr.getProgram(e,r,i)},validateProgram:function(e){if(e.__error){var r=e.__error;if(uo[e.__uid__])return;if(uo[e.__uid__]=!0,this.throwError)throw new Error(r);this.trigger("error",r)}},updatePrograms:function(e,r,i){var n=i&&i.getMaterial||ho;r=r||null;for(var a=0;a<e.length;a++){var o=e[a],s=n.call(this,o);if(a>0){var l=e[a-1],u=l.joints?l.joints.length:0,h=o.joints?o.joints.length:0;if(h===u&&o.material===l.material&&o.lightGroup===l.lightGroup){o.__program=l.__program;continue}}var f=this._programMgr.getProgram(o,s,r);this.validateProgram(f),o.__program=f}},renderPass:function(e,r,i){this.trigger("beforerenderpass",this,e,r,i),i=i||{},i.getMaterial=i.getMaterial||ho,i.getUniform=i.getUniform||Zl,i.isMaterialChanged=i.isMaterialChanged||Yl,i.beforeRender=i.beforeRender||fo,i.afterRender=i.afterRender||fo;var n=i.ifRender||ql;this.updatePrograms(e,this._sceneRendering,i),i.sortCompare&&e.sort(i.sortCompare);var a=this.viewport,o=a.devicePixelRatio,s=[a.x*o,a.y*o,a.width*o,a.height*o],l=this.devicePixelRatio,u=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*l,this._height*l],h=[s[2],s[3]],f=Date.now();r?(I.copy(Se.VIEW,r.viewMatrix.array),I.copy(Se.PROJECTION,r.projectionMatrix.array),I.copy(Se.VIEWINVERSE,r.worldTransform.array)):(I.identity(Se.VIEW),I.identity(Se.PROJECTION),I.identity(Se.VIEWINVERSE)),I.multiply(Se.VIEWPROJECTION,Se.PROJECTION,Se.VIEW),I.invert(Se.PROJECTIONINVERSE,Se.PROJECTION),I.invert(Se.VIEWPROJECTIONINVERSE,Se.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,v,p,m,g,_,y,S,x,E,D,L,b,M=null,N=0;N<e.length;N++){var C=e[N],B=C.worldTransform!=null,P;if(!!n(C)){B&&(P=C.isSkinnedMesh&&C.isSkinnedMesh()?C.offsetMatrix?C.offsetMatrix.array:Se.IDENTITY:C.worldTransform.array);var j=C.geometry,G=i.getMaterial.call(this,C),H=C.__program,V=G.shader,U=j.__uid__+"-"+H.__uid__,de=U!==D;D=U,de&&M&&M.bindVertexArrayOES(null),B&&(I.copy(Se.WORLD,P),I.multiply(Se.WORLDVIEWPROJECTION,Se.VIEWPROJECTION,P),I.multiplyAffine(Se.WORLDVIEW,Se.VIEW,P),(V.matrixSemantics.WORLDINVERSE||V.matrixSemantics.WORLDINVERSETRANSPOSE)&&I.invert(Se.WORLDINVERSE,P),(V.matrixSemantics.WORLDVIEWINVERSE||V.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&I.invert(Se.WORLDVIEWINVERSE,Se.WORLDVIEW),(V.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||V.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&I.invert(Se.WORLDVIEWPROJECTIONINVERSE,Se.WORLDVIEWPROJECTION)),C.beforeRender&&C.beforeRender(this),i.beforeRender.call(this,C,G,v);var W=H!==p;W?(H.bind(this),H.setUniformOfSemantic(c,"VIEWPORT",s),H.setUniformOfSemantic(c,"WINDOW_SIZE",u),r&&(H.setUniformOfSemantic(c,"NEAR",r.near),H.setUniformOfSemantic(c,"FAR",r.far)),H.setUniformOfSemantic(c,"DEVICEPIXELRATIO",o),H.setUniformOfSemantic(c,"TIME",f),H.setUniformOfSemantic(c,"VIEWPORT_SIZE",h),d&&d.setLightUniforms(H,C.lightGroup,this)):H=p,(W||i.isMaterialChanged(C,m,G,v))&&(G.depthTest!==g&&(G.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),g=G.depthTest),G.depthMask!==_&&(c.depthMask(G.depthMask),_=G.depthMask),G.transparent!==E&&(G.transparent?c.enable(c.BLEND):c.disable(c.BLEND),E=G.transparent),G.transparent&&(G.blend?G.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),b=this._bindMaterial(C,G,H,m||null,v||null,p||null,i.getUniform),v=G);var Ee=V.matrixSemanticKeys;if(B)for(var fe=0;fe<Ee.length;fe++){var ye=Ee[fe],be=V.matrixSemantics[ye],ae=Se[ye];if(be.isTranspose){var et=Se[be.semanticNoTranspose];I.transpose(ae,et)}H.setUniform(c,be.type,be.symbol,ae)}C.cullFace!==S&&(S=C.cullFace,c.cullFace(S)),C.frontFace!==x&&(x=C.frontFace,c.frontFace(x)),C.culling!==y&&(y=C.culling,y?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(C,H,b),de&&(L=this._bindVAO(M,V,j,H)),this._renderObject(C,L,H),i.afterRender(this,C),C.afterRender&&C.afterRender(this),p=H,m=C}}M&&M.bindVertexArrayOES(null),this.trigger("afterrenderpass",this,e,r,i)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,r,i){var n=this.gl,a=e.skeleton;if(a)if(a.update(),e.joints.length>this.getMaxJointNumber()){var o=a.getSubSkinMatricesTexture(e.__uid__,e.joints);r.useTextureSlot(this,o,i),r.setUniform(n,"1i","skinMatricesTexture",i),r.setUniform(n,"1f","skinMatricesTextureSize",o.width)}else{var s=a.getSubSkinMatrices(e.__uid__,e.joints);r.setUniformOfSemantic(n,"SKIN_MATRIX",s)}},_renderObject:function(e,r,i){var n=this.gl,a=e.geometry,o=e.mode;o==null&&(o=4);var s=null,l=e.isInstancedMesh&&e.isInstancedMesh();if(l&&(s=this.getGLExtension("ANGLE_instanced_arrays"),!s)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var u;if(l&&(u=this._bindInstancedAttributes(e,i,s)),r.indicesBuffer){var h=this.getGLExtension("OES_element_index_uint"),f=h&&a.indices instanceof Uint32Array,c=f?n.UNSIGNED_INT:n.UNSIGNED_SHORT;l?s.drawElementsInstancedANGLE(o,r.indicesBuffer.count,c,0,e.getInstanceCount()):n.drawElements(o,r.indicesBuffer.count,c,0)}else l?s.drawArraysInstancedANGLE(o,0,a.vertexCount,e.getInstanceCount()):n.drawArrays(o,0,a.vertexCount);if(l)for(var d=0;d<u.length;d++)n.disableVertexAttribArray(u[d])},_bindInstancedAttributes:function(e,r,i){for(var n=this.gl,a=e.getInstancedAttributesBuffers(this),o=[],s=0;s<a.length;s++){var l=a[s],u=r.getAttribLocation(n,l.symbol);if(!(u<0)){var h=co[l.type]||n.FLOAT;n.enableVertexAttribArray(u),n.bindBuffer(n.ARRAY_BUFFER,l.buffer),n.vertexAttribPointer(u,l.size,h,!1,0,0),i.vertexAttribDivisorANGLE(u,l.divisor),o.push(u)}}return o},_bindMaterial:function(e,r,i,n,a,o,s){for(var l=this.gl,u=o===i,h=i.currentTextureSlot(),f=r.getEnabledUniforms(),c=r.getTextureUniforms(),d=this._placeholderTexture,v=0;v<c.length;v++){var p=c[v],m=s(e,r,p),g=r.uniforms[p].type;if(g==="t"&&m)m.__slot=-1;else if(g==="tv")for(var _=0;_<m.length;_++)m[_]&&(m[_].__slot=-1)}d.__slot=-1;for(var v=0;v<f.length;v++){var p=f[v],y=r.uniforms[p],m=s(e,r,p),g=y.type,S=g==="t";if(S&&(!m||!m.isRenderable())&&(m=d),a&&u){var x=s(n,a,p);if(S&&(!x||!x.isRenderable())&&(x=d),x===m){if(S)i.takeCurrentTextureSlot(this,null);else if(g==="tv"&&m)for(var _=0;_<m.length;_++)i.takeCurrentTextureSlot(this,null);continue}}if(m!=null)if(S)if(m.__slot<0){var E=i.currentTextureSlot(),D=i.setUniform(l,"1i",p,E);D&&(i.takeCurrentTextureSlot(this,m),m.__slot=E)}else i.setUniform(l,"1i",p,m.__slot);else if(Array.isArray(m)){if(m.length===0)continue;if(g==="tv"){if(!i.hasUniform(p))continue;for(var L=[],_=0;_<m.length;_++){var b=m[_];if(b.__slot<0){var E=i.currentTextureSlot();L.push(E),i.takeCurrentTextureSlot(this,b),b.__slot=E}else L.push(b.__slot)}i.setUniform(l,"1iv",p,L)}else i.setUniform(l,y.type,p,m)}else i.setUniform(l,y.type,p,m)}var M=i.currentTextureSlot();return i.resetTextureSlot(h),M},_bindVAO:function(e,r,i,n){var a=!i.dynamic,o=this.gl,s=this.__uid__+"-"+n.__uid__,l=i.__vaoCache[s];if(!l){var u=i.getBufferChunks(this);if(!u||!u.length)return;for(var h=u[0],f=h.attributeBuffers,x=h.indicesBuffer,S=[],c=[],d=0;d<f.length;d++){var v=f[d],p=v.name,m=v.semantic,g;if(m){var _=r.attributeSemantics[m];g=_&&_.symbol}else g=p;g&&n.attributes[g]&&(S.push(v),c.push(g))}l=new Kl(S,c,x),a&&(i.__vaoCache[s]=l)}var y=!0;e&&a&&(l.vao==null?l.vao=e.createVertexArrayOES():y=!1,e.bindVertexArrayOES(l.vao));var S=l.availableAttributes,x=l.indicesBuffer;if(y){for(var E=n.enableAttributes(this,l.availableAttributeSymbols,e&&a&&l),d=0;d<S.length;d++){var D=E[d];if(D!==-1){var v=S[d],L=v.buffer,b=v.size,M=co[v.type]||o.FLOAT;o.bindBuffer(o.ARRAY_BUFFER,L),o.vertexAttribPointer(D,b,M,!1,0,0)}}i.isUseIndices()&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,x.buffer)}return l},renderPreZ:function(e,r,i){var n=this.gl,a=this._prezMaterial||new Tt({shader:new F(F.source("clay.prez.vertex"),F.source("clay.prez.fragment"))});this._prezMaterial=a,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(e,i,{ifRender:function(s){return!s.ignorePreZ},isMaterialChanged:function(s,l){var u=s.material,h=l.material;return u.get("diffuseMap")!==h.get("diffuseMap")||(u.get("alphaCutoff")||0)!==(h.get("alphaCutoff")||0)},getUniform:function(s,l,u){if(u==="alphaMap")return s.material.get("diffuseMap");if(u==="alphaCutoff"){if(s.material.isDefined("fragment","ALPHA_TEST")&&s.material.get("diffuseMap")){var h=s.material.get("alphaCutoff");return h||0}return 0}else return u==="uvRepeat"?s.material.get("uvRepeat"):u==="uvOffset"?s.material.get("uvOffset"):l.get(u)},getMaterial:function(){return a},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,r,i){e.getParent()&&e.getParent().remove(e);var n={};e.traverse(function(a){var o=a.material;if(a.geometry&&r&&a.geometry.dispose(this),i&&o&&!n[o.__uid__]){for(var s=o.getTextureUniforms(),l=0;l<s.length;l++){var u=s[l],h=o.uniforms[u].value,f=o.uniforms[u].type;if(!!h){if(f==="t")h.dispose&&h.dispose(this);else if(f==="tv")for(var c=0;c<h.length;c++)h[c]&&h[c].dispose&&h[c].dispose(this)}}n[o.__uid__]=!0}a.dispose&&a.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,r,i){i||(i=new vt),r=this._height-r;var n=this.viewport,a=i.array;return a[0]=(e-n.x)/n.width,a[0]=a[0]*2-1,a[1]=(r-n.y)/n.height,a[1]=a[1]*2-1,i}});Xt.opaqueSortCompare=Xt.prototype.opaqueSortCompare=function(t,e){return t.renderOrder===e.renderOrder?t.__program===e.__program?t.material===e.material?t.geometry.__uid__-e.geometry.__uid__:t.material.__uid__-e.material.__uid__:t.__program&&e.__program?t.__program.__uid__-e.__program.__uid__:0:t.renderOrder-e.renderOrder},Xt.transparentSortCompare=Xt.prototype.transparentSortCompare=function(t,e){return t.renderOrder===e.renderOrder?t.__depth===e.__depth?t.__program===e.__program?t.material===e.material?t.geometry.__uid__-e.geometry.__uid__:t.material.__uid__-e.material.__uid__:t.__program&&e.__program?t.__program.__uid__-e.__program.__uid__:0:t.__depth-e.__depth:t.renderOrder-e.renderOrder};var Se={IDENTITY:Te(),WORLD:Te(),VIEW:Te(),PROJECTION:Te(),WORLDVIEW:Te(),VIEWPROJECTION:Te(),WORLDVIEWPROJECTION:Te(),WORLDINVERSE:Te(),VIEWINVERSE:Te(),PROJECTIONINVERSE:Te(),WORLDVIEWINVERSE:Te(),VIEWPROJECTIONINVERSE:Te(),WORLDVIEWPROJECTIONINVERSE:Te(),WORLDTRANSPOSE:Te(),VIEWTRANSPOSE:Te(),PROJECTIONTRANSPOSE:Te(),WORLDVIEWTRANSPOSE:Te(),VIEWPROJECTIONTRANSPOSE:Te(),WORLDVIEWPROJECTIONTRANSPOSE:Te(),WORLDINVERSETRANSPOSE:Te(),VIEWINVERSETRANSPOSE:Te(),PROJECTIONINVERSETRANSPOSE:Te(),WORLDVIEWINVERSETRANSPOSE:Te(),VIEWPROJECTIONINVERSETRANSPOSE:Te(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:Te()};Xt.COLOR_BUFFER_BIT=R.COLOR_BUFFER_BIT,Xt.DEPTH_BUFFER_BIT=R.DEPTH_BUFFER_BIT,Xt.STENCIL_BUFFER_BIT=R.STENCIL_BUFFER_BIT;var qr=Xt,K=function(e,r,i){e=e||0,r=r||0,i=i||0,this.array=A.fromValues(e,r,i),this._dirty=!0};K.prototype={constructor:K,add:function(e){return A.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,r,i){return this.array[0]=e,this.array[1]=r,this.array[2]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new K(this.x,this.y,this.z)},copy:function(e){return A.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,r){return A.cross(this.array,e.array,r.array),this._dirty=!0,this},dist:function(e){return A.dist(this.array,e.array)},distance:function(e){return A.distance(this.array,e.array)},div:function(e){return A.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return A.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return A.dot(this.array,e.array)},len:function(){return A.len(this.array)},length:function(){return A.length(this.array)},lerp:function(e,r,i){return A.lerp(this.array,e.array,r.array,i),this._dirty=!0,this},min:function(e){return A.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return A.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return A.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return A.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return A.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return A.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return A.random(this.array,e),this._dirty=!0,this},scale:function(e){return A.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,r){return A.scaleAndAdd(this.array,this.array,e.array,r),this._dirty=!0,this},sqrDist:function(e){return A.sqrDist(this.array,e.array)},squaredDistance:function(e){return A.squaredDistance(this.array,e.array)},sqrLen:function(){return A.sqrLen(this.array)},squaredLength:function(){return A.squaredLength(this.array)},sub:function(e){return A.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return A.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return A.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return A.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return A.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var r=this.array;if(e=e.array,e[15]===0){var i=-1/r[2];r[0]=e[0]*r[0]*i,r[1]=e[5]*r[1]*i,r[2]=(e[10]*r[2]+e[14])*i}else r[0]=e[0]*r[0]+e[12],r[1]=e[5]*r[1]+e[13],r[2]=e[10]*r[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,r){K.eulerFromQuat(this,e,r)},eulerFromMat3:function(e,r){K.eulerFromMat3(this,e,r)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var bi=Object.defineProperty;if(bi){var Ln=K.prototype;bi(Ln,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),bi(Ln,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),bi(Ln,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}K.add=function(t,e,r){return A.add(t.array,e.array,r.array),t._dirty=!0,t},K.set=function(t,e,r,i){A.set(t.array,e,r,i),t._dirty=!0},K.copy=function(t,e){return A.copy(t.array,e.array),t._dirty=!0,t},K.cross=function(t,e,r){return A.cross(t.array,e.array,r.array),t._dirty=!0,t},K.dist=function(t,e){return A.distance(t.array,e.array)},K.distance=K.dist,K.div=function(t,e,r){return A.divide(t.array,e.array,r.array),t._dirty=!0,t},K.divide=K.div,K.dot=function(t,e){return A.dot(t.array,e.array)},K.len=function(t){return A.length(t.array)},K.lerp=function(t,e,r,i){return A.lerp(t.array,e.array,r.array,i),t._dirty=!0,t},K.min=function(t,e,r){return A.min(t.array,e.array,r.array),t._dirty=!0,t},K.max=function(t,e,r){return A.max(t.array,e.array,r.array),t._dirty=!0,t},K.mul=function(t,e,r){return A.multiply(t.array,e.array,r.array),t._dirty=!0,t},K.multiply=K.mul,K.negate=function(t,e){return A.negate(t.array,e.array),t._dirty=!0,t},K.normalize=function(t,e){return A.normalize(t.array,e.array),t._dirty=!0,t},K.random=function(t,e){return A.random(t.array,e),t._dirty=!0,t},K.scale=function(t,e,r){return A.scale(t.array,e.array,r),t._dirty=!0,t},K.scaleAndAdd=function(t,e,r,i){return A.scaleAndAdd(t.array,e.array,r.array,i),t._dirty=!0,t},K.sqrDist=function(t,e){return A.sqrDist(t.array,e.array)},K.squaredDistance=K.sqrDist,K.sqrLen=function(t){return A.sqrLen(t.array)},K.squaredLength=K.sqrLen,K.sub=function(t,e,r){return A.subtract(t.array,e.array,r.array),t._dirty=!0,t},K.subtract=K.sub,K.transformMat3=function(t,e,r){return A.transformMat3(t.array,e.array,r.array),t._dirty=!0,t},K.transformMat4=function(t,e,r){return A.transformMat4(t.array,e.array,r.array),t._dirty=!0,t},K.transformQuat=function(t,e,r){return A.transformQuat(t.array,e.array,r.array),t._dirty=!0,t};function St(t,e,r){return t<e?e:t>r?r:t}var pe=Math.atan2,Et=Math.asin,br=Math.abs;K.eulerFromQuat=function(t,e,r){t._dirty=!0,e=e.array;var i=t.array,n=e[0],a=e[1],o=e[2],s=e[3],l=n*n,u=a*a,h=o*o,f=s*s,r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":i[0]=pe(2*(n*s-a*o),f-l-u+h),i[1]=Et(St(2*(n*o+a*s),-1,1)),i[2]=pe(2*(o*s-n*a),f+l-u-h);break;case"YXZ":i[0]=Et(St(2*(n*s-a*o),-1,1)),i[1]=pe(2*(n*o+a*s),f-l-u+h),i[2]=pe(2*(n*a+o*s),f-l+u-h);break;case"ZXY":i[0]=Et(St(2*(n*s+a*o),-1,1)),i[1]=pe(2*(a*s-o*n),f-l-u+h),i[2]=pe(2*(o*s-n*a),f-l+u-h);break;case"ZYX":i[0]=pe(2*(n*s+o*a),f-l-u+h),i[1]=Et(St(2*(a*s-n*o),-1,1)),i[2]=pe(2*(n*a+o*s),f+l-u-h);break;case"YZX":i[0]=pe(2*(n*s-o*a),f-l+u-h),i[1]=pe(2*(a*s-n*o),f+l-u-h),i[2]=Et(St(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=pe(2*(n*s+a*o),f-l+u-h),i[1]=pe(2*(n*o+a*s),f+l-u-h),i[2]=Et(St(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+r)}return t},K.eulerFromMat3=function(t,e,r){var i=e.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],h=i[2],f=i[5],c=i[8],d=t.array,r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":d[1]=Et(St(o,-1,1)),br(o)<.99999?(d[0]=pe(-u,c),d[2]=pe(-a,n)):(d[0]=pe(f,l),d[2]=0);break;case"YXZ":d[0]=Et(-St(u,-1,1)),br(u)<.99999?(d[1]=pe(o,c),d[2]=pe(s,l)):(d[1]=pe(-h,n),d[2]=0);break;case"ZXY":d[0]=Et(St(f,-1,1)),br(f)<.99999?(d[1]=pe(-h,c),d[2]=pe(-a,l)):(d[1]=0,d[2]=pe(s,n));break;case"ZYX":d[1]=Et(-St(h,-1,1)),br(h)<.99999?(d[0]=pe(f,c),d[2]=pe(s,n)):(d[0]=0,d[2]=pe(-a,l));break;case"YZX":d[2]=Et(St(s,-1,1)),br(s)<.99999?(d[0]=pe(-u,l),d[1]=pe(-h,n)):(d[0]=0,d[1]=pe(o,c));break;case"XZY":d[2]=Et(-St(a,-1,1)),br(a)<.99999?(d[0]=pe(f,l),d[1]=pe(o,n)):(d[0]=pe(-u,c),d[1]=0);break;default:console.warn("Unkown order: "+r)}return t._dirty=!0,t},Object.defineProperties(K,{POSITIVE_X:{get:function(){return new K(1,0,0)}},NEGATIVE_X:{get:function(){return new K(-1,0,0)}},POSITIVE_Y:{get:function(){return new K(0,1,0)}},NEGATIVE_Y:{get:function(){return new K(0,-1,0)}},POSITIVE_Z:{get:function(){return new K(0,0,1)}},NEGATIVE_Z:{get:function(){return new K(0,0,-1)}},UP:{get:function(){return new K(0,1,0)}},ZERO:{get:function(){return new K}}});var O=K,Cn=1e-5,Di=function(e,r){this.origin=e||new O,this.direction=r||new O};Di.prototype={constructor:Di,intersectPlane:function(e,r){var i=e.normal.array,n=e.distance,a=this.origin.array,o=this.direction.array,s=A.dot(i,o);if(s===0)return null;r||(r=new O);var l=(A.dot(i,a)-n)/s;return A.scaleAndAdd(r.array,a,o,-l),r._dirty=!0,r},mirrorAgainstPlane:function(e){var r=A.dot(e.normal.array,this.direction.array);A.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-r*2),this.direction._dirty=!0},distanceToPoint:function(){var t=A.create();return function(e){A.sub(t,e,this.origin.array);var r=A.dot(t,this.direction.array);if(r<0)return A.distance(this.origin.array,e);var i=A.lenSquared(t);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var t=A.create();return function(e,r,i){var n=this.origin.array,a=this.direction.array;e=e.array,A.sub(t,e,n);var o=A.dot(t,a),s=A.squaredLength(t),l=s-o*o,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),f=o-h,c=o+h;return i||(i=new O),f<0?c<0?null:(A.scaleAndAdd(i.array,n,a,c),i):(A.scaleAndAdd(i.array,n,a,f),i)}}}(),intersectBoundingBox:function(e,r){var i=this.direction.array,n=this.origin.array,a=e.min.array,o=e.max.array,s=1/i[0],l=1/i[1],u=1/i[2],h,f,c,d,v,p;if(s>=0?(h=(a[0]-n[0])*s,f=(o[0]-n[0])*s):(f=(a[0]-n[0])*s,h=(o[0]-n[0])*s),l>=0?(c=(a[1]-n[1])*l,d=(o[1]-n[1])*l):(d=(a[1]-n[1])*l,c=(o[1]-n[1])*l),h>d||c>f||((c>h||h!==h)&&(h=c),(d<f||f!==f)&&(f=d),u>=0?(v=(a[2]-n[2])*u,p=(o[2]-n[2])*u):(p=(a[2]-n[2])*u,v=(o[2]-n[2])*u),h>p||v>f)||((v>h||h!==h)&&(h=v),(p<f||f!==f)&&(f=p),f<0))return null;var m=h>=0?h:f;return r||(r=new O),A.scaleAndAdd(r.array,n,i,m),r},intersectTriangle:function(){var t=A.create(),e=A.create(),r=A.create(),i=A.create();return function(n,a,o,s,l,u){var h=this.direction.array,f=this.origin.array;n=n.array,a=a.array,o=o.array,A.sub(t,a,n),A.sub(e,o,n),A.cross(i,e,h);var c=A.dot(t,i);if(s){if(c>-Cn)return null}else if(c>-Cn&&c<Cn)return null;A.sub(r,f,n);var d=A.dot(i,r)/c;if(d<0||d>1)return null;A.cross(i,t,r);var v=A.dot(h,i)/c;if(v<0||v>1||d+v>1)return null;A.cross(i,t,e);var p=-A.dot(r,i)/c;return p<0?null:(l||(l=new O),u&&O.set(u,1-d-v,d,v),A.scaleAndAdd(l.array,f,h,p),l)}}(),applyTransform:function(e){O.add(this.direction,this.direction,this.origin),O.transformMat4(this.origin,this.origin,e),O.transformMat4(this.direction,this.direction,e),O.sub(this.direction,this.direction,this.origin),O.normalize(this.direction,this.direction)},copy:function(e){O.copy(this.origin,e.origin),O.copy(this.direction,e.direction)},clone:function(){var e=new Di;return e.copy(this),e}};var Li=Di,te={};te.create=function(){var t=new Qe(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},te.clone=function(t){var e=new Qe(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},te.fromValues=function(t,e,r,i){var n=new Qe(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n},te.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},te.set=function(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t},te.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t},te.subtract=function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t},te.sub=te.subtract,te.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t},te.mul=te.multiply,te.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t},te.div=te.divide,te.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t},te.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t},te.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t},te.scaleAndAdd=function(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t},te.distance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(r*r+i*i+n*n+a*a)},te.dist=te.distance,te.squaredDistance=function(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return r*r+i*i+n*n+a*a},te.sqrDist=te.squaredDistance,te.length=function(t){var e=t[0],r=t[1],i=t[2],n=t[3];return Math.sqrt(e*e+r*r+i*i+n*n)},te.len=te.length,te.squaredLength=function(t){var e=t[0],r=t[1],i=t[2],n=t[3];return e*e+r*r+i*i+n*n},te.sqrLen=te.squaredLength,te.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},te.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},te.normalize=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t[3]=e[3]*o),t},te.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},te.lerp=function(t,e,r,i){var n=e[0],a=e[1],o=e[2],s=e[3];return t[0]=n+i*(r[0]-n),t[1]=a+i*(r[1]-a),t[2]=o+i*(r[2]-o),t[3]=s+i*(r[3]-s),t},te.random=function(t,e){return e=e||1,t[0]=wr(),t[1]=wr(),t[2]=wr(),t[3]=wr(),te.normalize(t,t),te.scale(t,t,e),t},te.transformMat4=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3];return t[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,t[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,t[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,t[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,t},te.transformQuat=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,f=u*n+l*i-o*a,c=u*a+o*n-s*i,d=-o*i-s*n-l*a;return t[0]=h*u+d*-o+f*-l-c*-s,t[1]=f*u+d*-s+c*-o-h*-l,t[2]=c*u+d*-l+h*-s-f*-o,t},te.forEach=function(){var t=te.create();return function(e,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,e.length):l=e.length,s=i;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();var z=te,Ue={};Ue.create=function(){var t=new Qe(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},Ue.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},Ue.clone=function(t){var e=new Qe(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},Ue.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},Ue.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},Ue.transpose=function(t,e){if(t===e){var r=e[1],i=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=i,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},Ue.invert=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],f=h*o-s*u,c=-h*a+s*l,d=u*a-o*l,v=r*f+i*c+n*d;return v?(v=1/v,t[0]=f*v,t[1]=(-h*i+n*u)*v,t[2]=(s*i-n*o)*v,t[3]=c*v,t[4]=(h*r-n*l)*v,t[5]=(-s*r+n*a)*v,t[6]=d*v,t[7]=(-u*r+i*l)*v,t[8]=(o*r-i*a)*v,t):null},Ue.adjoint=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8];return t[0]=o*h-s*u,t[1]=n*u-i*h,t[2]=i*s-n*o,t[3]=s*l-a*h,t[4]=r*h-n*l,t[5]=n*a-r*s,t[6]=a*u-o*l,t[7]=i*l-r*u,t[8]=r*o-i*a,t},Ue.determinant=function(t){var e=t[0],r=t[1],i=t[2],n=t[3],a=t[4],o=t[5],s=t[6],l=t[7],u=t[8];return e*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)},Ue.multiply=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=r[0],d=r[1],v=r[2],p=r[3],m=r[4],g=r[5],_=r[6],y=r[7],S=r[8];return t[0]=c*i+d*o+v*u,t[1]=c*n+d*s+v*h,t[2]=c*a+d*l+v*f,t[3]=p*i+m*o+g*u,t[4]=p*n+m*s+g*h,t[5]=p*a+m*l+g*f,t[6]=_*i+y*o+S*u,t[7]=_*n+y*s+S*h,t[8]=_*a+y*l+S*f,t},Ue.mul=Ue.multiply,Ue.translate=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=r[0],d=r[1];return t[0]=i,t[1]=n,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t[6]=c*i+d*o+u,t[7]=c*n+d*s+h,t[8]=c*a+d*l+f,t},Ue.rotate=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=Math.sin(r),d=Math.cos(r);return t[0]=d*i+c*o,t[1]=d*n+c*s,t[2]=d*a+c*l,t[3]=d*o-c*i,t[4]=d*s-c*n,t[5]=d*l-c*a,t[6]=u,t[7]=h,t[8]=f,t},Ue.scale=function(t,e,r){var i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},Ue.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},Ue.fromQuat=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,f=i*s,c=n*o,d=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return t[0]=1-f-v,t[3]=h-g,t[6]=c+m,t[1]=h+g,t[4]=1-u-v,t[7]=d-p,t[2]=c-m,t[5]=d+p,t[8]=1-u-f,t},Ue.normalFromMat4=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],f=e[9],c=e[10],d=e[11],v=e[12],p=e[13],m=e[14],g=e[15],_=r*s-i*o,y=r*l-n*o,S=r*u-a*o,x=i*l-n*s,E=i*u-a*s,D=n*u-a*l,L=h*p-f*v,b=h*m-c*v,M=h*g-d*v,N=f*m-c*p,C=f*g-d*p,B=c*g-d*m,P=_*B-y*C+S*N+x*M-E*b+D*L;return P?(P=1/P,t[0]=(s*B-l*C+u*N)*P,t[1]=(l*M-o*B-u*b)*P,t[2]=(o*C-s*M+u*L)*P,t[3]=(n*C-i*B-a*N)*P,t[4]=(r*B-n*M+a*b)*P,t[5]=(i*M-r*C-a*L)*P,t[6]=(p*D-m*E+g*x)*P,t[7]=(m*S-v*D-g*y)*P,t[8]=(v*E-p*S+g*_)*P,t):null},Ue.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))};var oe=Ue,ue={};ue.create=function(){var t=new Qe(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},ue.rotationTo=function(){var t=A.create(),e=A.fromValues(1,0,0),r=A.fromValues(0,1,0);return function(i,n,a){var o=A.dot(n,a);return o<-.999999?(A.cross(t,e,n),A.length(t)<1e-6&&A.cross(t,r,n),A.normalize(t,t),ue.setAxisAngle(i,t,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(A.cross(t,n,a),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+o,ue.normalize(i,i))}}(),ue.setAxes=function(){var t=oe.create();return function(e,r,i,n){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],ue.normalize(e,ue.fromMat3(e,t))}}(),ue.clone=z.clone,ue.fromValues=z.fromValues,ue.copy=z.copy,ue.set=z.set,ue.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},ue.setAxisAngle=function(t,e,r){r=r*.5;var i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t},ue.add=z.add,ue.multiply=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=r[0],l=r[1],u=r[2],h=r[3];return t[0]=i*h+o*s+n*u-a*l,t[1]=n*h+o*l+a*s-i*u,t[2]=a*h+o*u+i*l-n*s,t[3]=o*h-i*s-n*l-a*u,t},ue.mul=ue.multiply,ue.scale=z.scale,ue.rotateX=function(t,e,r){r*=.5;var i=e[0],n=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=i*l+o*s,t[1]=n*l+a*s,t[2]=a*l-n*s,t[3]=o*l-i*s,t},ue.rotateY=function(t,e,r){r*=.5;var i=e[0],n=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=i*l-a*s,t[1]=n*l+o*s,t[2]=a*l+i*s,t[3]=o*l-n*s,t},ue.rotateZ=function(t,e,r){r*=.5;var i=e[0],n=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=i*l+n*s,t[1]=n*l-i*s,t[2]=a*l+o*s,t[3]=o*l-a*s,t},ue.calculateW=function(t,e){var r=e[0],i=e[1],n=e[2];return t[0]=r,t[1]=i,t[2]=n,t[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),t},ue.dot=z.dot,ue.lerp=z.lerp,ue.slerp=function(t,e,r,i){var n=e[0],a=e[1],o=e[2],s=e[3],l=r[0],u=r[1],h=r[2],f=r[3],c,d,v,p,m;return d=n*l+a*u+o*h+s*f,d<0&&(d=-d,l=-l,u=-u,h=-h,f=-f),1-d>1e-6?(c=Math.acos(d),v=Math.sin(c),p=Math.sin((1-i)*c)/v,m=Math.sin(i*c)/v):(p=1-i,m=i),t[0]=p*n+m*l,t[1]=p*a+m*u,t[2]=p*o+m*h,t[3]=p*s+m*f,t},ue.invert=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return t[0]=-r*s,t[1]=-i*s,t[2]=-n*s,t[3]=a*s,t},ue.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},ue.length=z.length,ue.len=ue.length,ue.squaredLength=z.squaredLength,ue.sqrLen=ue.squaredLength,ue.normalize=z.normalize,ue.fromMat3=function(t,e){var r=e[0]+e[4]+e[8],i;if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(e[n*3+n]-e[a*3+a]-e[o*3+o]+1),t[n]=.5*i,i=.5/i,t[3]=(e[a*3+o]-e[o*3+a])*i,t[a]=(e[a*3+n]+e[n*3+a])*i,t[o]=(e[o*3+n]+e[n*3+o])*i}return t};var J=ue,_e=function(){this._axisX=new O,this._axisY=new O,this._axisZ=new O,this.array=I.create(),this._dirty=!0};_e.prototype={constructor:_e,setArray:function(e){for(var r=0;r<this.array.length;r++)this.array[r]=e[r];return this._dirty=!0,this},adjoint:function(){return I.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new _e().copy(this)},copy:function(e){return I.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return I.determinant(this.array)},fromQuat:function(e){return I.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,r){return I.fromRotationTranslation(this.array,e.array,r.array),this._dirty=!0,this},fromMat2d:function(e){return _e.fromMat2d(this,e),this},frustum:function(e,r,i,n,a,o){return I.frustum(this.array,e,r,i,n,a,o),this._dirty=!0,this},identity:function(){return I.identity(this.array),this._dirty=!0,this},invert:function(){return I.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,r,i){return I.lookAt(this.array,e.array,r.array,i.array),this._dirty=!0,this},mul:function(e){return I.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return I.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return I.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return I.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,r,i,n,a,o){return I.ortho(this.array,e,r,i,n,a,o),this._dirty=!0,this},perspective:function(e,r,i,n){return I.perspective(this.array,e,r,i,n),this._dirty=!0,this},rotate:function(e,r){return I.rotate(this.array,this.array,e,r.array),this._dirty=!0,this},rotateX:function(e){return I.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return I.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return I.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return I.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return I.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return I.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var t=A.create(),e=A.create(),r=A.create(),i=oe.create();return function(n,a,o){var s=this.array;A.set(t,s[0],s[1],s[2]),A.set(e,s[4],s[5],s[6]),A.set(r,s[8],s[9],s[10]);var l=A.length(t),u=A.length(e),h=A.length(r),f=this.determinant();f<0&&(l=-l),n&&n.set(l,u,h),o.set(s[12],s[13],s[14]),oe.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,J.fromMat3(a.array,i),J.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ci=Object.defineProperty;if(Ci){var Mn=_e.prototype;Ci(Mn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var r=this.array;e=e.array,r[8]=e[0],r[9]=e[1],r[10]=e[2],this._dirty=!0}}),Ci(Mn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var r=this.array;e=e.array,r[4]=e[0],r[5]=e[1],r[6]=e[2],this._dirty=!0}}),Ci(Mn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var r=this.array;e=e.array,r[0]=e[0],r[1]=e[1],r[2]=e[2],this._dirty=!0}})}_e.adjoint=function(t,e){return I.adjoint(t.array,e.array),t._dirty=!0,t},_e.copy=function(t,e){return I.copy(t.array,e.array),t._dirty=!0,t},_e.determinant=function(t){return I.determinant(t.array)},_e.identity=function(t){return I.identity(t.array),t._dirty=!0,t},_e.ortho=function(t,e,r,i,n,a,o){return I.ortho(t.array,e,r,i,n,a,o),t._dirty=!0,t},_e.perspective=function(t,e,r,i,n){return I.perspective(t.array,e,r,i,n),t._dirty=!0,t},_e.lookAt=function(t,e,r,i){return I.lookAt(t.array,e.array,r.array,i.array),t._dirty=!0,t},_e.invert=function(t,e){return I.invert(t.array,e.array),t._dirty=!0,t},_e.mul=function(t,e,r){return I.mul(t.array,e.array,r.array),t._dirty=!0,t},_e.multiply=_e.mul,_e.fromQuat=function(t,e){return I.fromQuat(t.array,e.array),t._dirty=!0,t},_e.fromRotationTranslation=function(t,e,r){return I.fromRotationTranslation(t.array,e.array,r.array),t._dirty=!0,t},_e.fromMat2d=function(t,e){t._dirty=!0;var e=e.array,t=t.array;return t[0]=e[0],t[4]=e[2],t[12]=e[4],t[1]=e[1],t[5]=e[3],t[13]=e[5],t},_e.rotate=function(t,e,r,i){return I.rotate(t.array,e.array,r,i.array),t._dirty=!0,t},_e.rotateX=function(t,e,r){return I.rotateX(t.array,e.array,r),t._dirty=!0,t},_e.rotateY=function(t,e,r){return I.rotateY(t.array,e.array,r),t._dirty=!0,t},_e.rotateZ=function(t,e,r){return I.rotateZ(t.array,e.array,r),t._dirty=!0,t},_e.scale=function(t,e,r){return I.scale(t.array,e.array,r.array),t._dirty=!0,t},_e.transpose=function(t,e){return I.transpose(t.array,e.array),t._dirty=!0,t},_e.translate=function(t,e,r){return I.translate(t.array,e.array,r.array),t._dirty=!0,t};var k=_e,ce=function(e,r,i,n){e=e||0,r=r||0,i=i||0,n=n===void 0?1:n,this.array=J.fromValues(e,r,i,n),this._dirty=!0};ce.prototype={constructor:ce,add:function(e){return J.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return J.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,r,i,n){return this.array[0]=e,this.array[1]=r,this.array[2]=i,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ce(this.x,this.y,this.z,this.w)},conjugate:function(){return J.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return J.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return J.dot(this.array,e.array)},fromMat3:function(e){return J.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var t=oe.create();return function(e){return oe.fromMat4(t,e.array),oe.transpose(t,t),J.fromMat3(this.array,t),this._dirty=!0,this}}(),identity:function(){return J.identity(this.array),this._dirty=!0,this},invert:function(){return J.invert(this.array,this.array),this._dirty=!0,this},len:function(){return J.len(this.array)},length:function(){return J.length(this.array)},lerp:function(e,r,i){return J.lerp(this.array,e.array,r.array,i),this._dirty=!0,this},mul:function(e){return J.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return J.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return J.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return J.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return J.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return J.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return J.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return J.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,r){return J.rotationTo(this.array,e.array,r.array),this._dirty=!0,this},setAxes:function(e,r,i){return J.setAxes(this.array,e.array,r.array,i.array),this._dirty=!0,this},setAxisAngle:function(e,r){return J.setAxisAngle(this.array,e.array,r),this._dirty=!0,this},slerp:function(e,r,i){return J.slerp(this.array,e.array,r.array,i),this._dirty=!0,this},sqrLen:function(){return J.sqrLen(this.array)},squaredLength:function(){return J.squaredLength(this.array)},fromEuler:function(e,r){return ce.fromEuler(this,e,r)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Kr=Object.defineProperty;if(Kr){var Mi=ce.prototype;Kr(Mi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Kr(Mi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Kr(Mi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Kr(Mi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ce.add=function(t,e,r){return J.add(t.array,e.array,r.array),t._dirty=!0,t},ce.set=function(t,e,r,i,n){J.set(t.array,e,r,i,n),t._dirty=!0},ce.copy=function(t,e){return J.copy(t.array,e.array),t._dirty=!0,t},ce.calculateW=function(t,e){return J.calculateW(t.array,e.array),t._dirty=!0,t},ce.conjugate=function(t,e){return J.conjugate(t.array,e.array),t._dirty=!0,t},ce.identity=function(t){return J.identity(t.array),t._dirty=!0,t},ce.invert=function(t,e){return J.invert(t.array,e.array),t._dirty=!0,t},ce.dot=function(t,e){return J.dot(t.array,e.array)},ce.len=function(t){return J.length(t.array)},ce.lerp=function(t,e,r,i){return J.lerp(t.array,e.array,r.array,i),t._dirty=!0,t},ce.slerp=function(t,e,r,i){return J.slerp(t.array,e.array,r.array,i),t._dirty=!0,t},ce.mul=function(t,e,r){return J.multiply(t.array,e.array,r.array),t._dirty=!0,t},ce.multiply=ce.mul,ce.rotateX=function(t,e,r){return J.rotateX(t.array,e.array,r),t._dirty=!0,t},ce.rotateY=function(t,e,r){return J.rotateY(t.array,e.array,r),t._dirty=!0,t},ce.rotateZ=function(t,e,r){return J.rotateZ(t.array,e.array,r),t._dirty=!0,t},ce.setAxisAngle=function(t,e,r){return J.setAxisAngle(t.array,e.array,r),t._dirty=!0,t},ce.normalize=function(t,e){return J.normalize(t.array,e.array),t._dirty=!0,t},ce.sqrLen=function(t){return J.sqrLen(t.array)},ce.squaredLength=ce.sqrLen,ce.fromMat3=function(t,e){return J.fromMat3(t.array,e.array),t._dirty=!0,t},ce.setAxes=function(t,e,r,i){return J.setAxes(t.array,e.array,r.array,i.array),t._dirty=!0,t},ce.rotationTo=function(t,e,r){return J.rotationTo(t.array,e.array,r.array),t._dirty=!0,t},ce.fromEuler=function(t,e,r){t._dirty=!0,e=e.array;var i=t.array,n=Math.cos(e[0]/2),a=Math.cos(e[1]/2),o=Math.cos(e[2]/2),s=Math.sin(e[0]/2),l=Math.sin(e[1]/2),u=Math.sin(e[2]/2),r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};var vo=ce,jt=A.set,Pi=A.copy,Ri=function(e,r){this.min=e||new O(Infinity,Infinity,Infinity),this.max=r||new O(-Infinity,-Infinity,-Infinity),this.vertices=null};Ri.prototype={constructor:Ri,updateFromVertices:function(e){if(e.length>0){var r=this.min,i=this.max,n=r.array,a=i.array;Pi(n,e[0]),Pi(a,e[0]);for(var o=1;o<e.length;o++){var s=e[o];s[0]<n[0]&&(n[0]=s[0]),s[1]<n[1]&&(n[1]=s[1]),s[2]<n[2]&&(n[2]=s[2]),s[0]>a[0]&&(a[0]=s[0]),s[1]>a[1]&&(a[1]=s[1]),s[2]>a[2]&&(a[2]=s[2])}r._dirty=!0,i._dirty=!0}},union:function(e){var r=this.min,i=this.max;return A.min(r.array,r.array,e.min.array),A.max(i.array,i.array,e.max.array),r._dirty=!0,i._dirty=!0,this},intersection:function(e){var r=this.min,i=this.max;return A.max(r.array,r.array,e.min.array),A.min(i.array,i.array,e.max.array),r._dirty=!0,i._dirty=!0,this},intersectBoundingBox:function(e){var r=this.min.array,i=this.max.array,n=e.min.array,a=e.max.array;return!(r[0]>a[0]||r[1]>a[1]||r[2]>a[2]||i[0]<n[0]||i[1]<n[1]||i[2]<n[2])},containBoundingBox:function(e){var r=this.min.array,i=this.max.array,n=e.min.array,a=e.max.array;return r[0]<=n[0]&&r[1]<=n[1]&&r[2]<=n[2]&&i[0]>=a[0]&&i[1]>=a[1]&&i[2]>=a[2]},containPoint:function(e){var r=this.min.array,i=this.max.array,n=e.array;return r[0]<=n[0]&&r[1]<=n[1]&&r[2]<=n[2]&&i[0]>=n[0]&&i[1]>=n[1]&&i[2]>=n[2]},isFinite:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this.min.array,e=this.max.array;return isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])&&isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])}),applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var t=A.create(),e=A.create(),r=A.create(),i=A.create(),n=A.create(),a=A.create();return function(o,s){var l=o.min.array,u=o.max.array,h=s.array;return t[0]=h[0]*l[0],t[1]=h[1]*l[0],t[2]=h[2]*l[0],e[0]=h[0]*u[0],e[1]=h[1]*u[0],e[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],n[0]=h[8]*l[2],n[1]=h[9]*l[2],n[2]=h[10]*l[2],a[0]=h[8]*u[2],a[1]=h[9]*u[2],a[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(t[0],e[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+h[12],l[1]=Math.min(t[1],e[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+h[13],l[2]=Math.min(t[2],e[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+h[14],u[0]=Math.max(t[0],e[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+h[12],u[1]=Math.max(t[1],e[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+h[13],u[2]=Math.max(t[2],e[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var r=this.min.array,i=this.max.array,n=e.array,a=r[0],o=r[1],s=r[2],l=i[0],u=i[1],h=r[2],f=i[0],c=i[1],d=i[2];if(n[15]===1)r[0]=n[0]*a+n[12],r[1]=n[5]*o+n[13],i[2]=n[10]*s+n[14],i[0]=n[0]*f+n[12],i[1]=n[5]*c+n[13],r[2]=n[10]*d+n[14];else{var v=-1/s;r[0]=n[0]*a*v,r[1]=n[5]*o*v,i[2]=(n[10]*s+n[14])*v,v=-1/h,i[0]=n[0]*l*v,i[1]=n[5]*u*v,v=-1/d,r[2]=(n[10]*d+n[14])*v}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var r=0;r<8;r++)e[r]=A.fromValues(0,0,0);this.vertices=e}var i=this.min.array,n=this.max.array;return jt(e[0],i[0],i[1],i[2]),jt(e[1],i[0],n[1],i[2]),jt(e[2],n[0],i[1],i[2]),jt(e[3],n[0],n[1],i[2]),jt(e[4],i[0],i[1],n[2]),jt(e[5],i[0],n[1],n[2]),jt(e[6],n[0],i[1],n[2]),jt(e[7],n[0],n[1],n[2]),this},copy:function(e){var r=this.min,i=this.max;return Pi(r.array,e.min.array),Pi(i.array,e.max.array),r._dirty=!0,i._dirty=!0,this},clone:function(){var e=new Ri;return e.copy(this),e}};var at=Ri,Jl=0,$l=nt.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Jl++),this.position||(this.position=new O),this.rotation||(this.rotation=new vo),this.scale||(this.scale=new O(1,1,1)),this.worldTransform=new k,this.localTransform=new k,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var r=this._scene;if(r){var i=r._nodeRepository;delete i[this.name],i[e]=this}this.name=e},add:function(e){var r=e._parent;if(r!==this){r&&r.remove(e),e._parent=this,this._children.push(e);var i=this._scene;i&&i!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var r=this._children,i=r.indexOf(e);i<0||(r.splice(i,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,r=0;r<e.length;r++)e[r]._parent=null,this._scene&&e[r].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var r=e._parent;r;){if(r===this)return!0;r=r._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var r=this._children,i=0;i<r.length;i++)if(r[i].name===e)return r[i]},getDescendantByName:function(e){for(var r=this._children,i=0;i<r.length;i++){var n=r[i];if(n.name===e)return n;var a=n.getDescendantByName(e);if(a)return a}},queryNode:function(e){if(!!e){for(var r=e.split("/"),i=this,n=0;n<r.length;n++){var a=r[n];if(!!a){for(var o=!1,s=i._children,l=0;l<s.length;l++){var u=s[l];if(u.name===a){i=u,o=!0;break}}if(!o)return}}return i}},getPath:function(e){if(!this._parent)return"/";for(var r=this._parent,i=this.name;r._parent&&(i=r.name+"/"+i,r._parent!=e);)r=r._parent;return!r._parent&&e?null:i},traverse:function(e,r){e.call(r,this);for(var i=this._children,n=0,a=i.length;n<a;n++)i[n].traverse(e,r)},eachChild:function(e,r){for(var i=this._children,n=0,a=i.length;n<a;n++){var o=i[n];e.call(r,o,n)}},setLocalTransform:function(e){I.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var r=e?null:this.scale;this.localTransform.decomposeMatrix(r,this.rotation,this.position)},setWorldTransform:function(e){I.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var t=I.create();return function(e){var r=this.localTransform,i=this.worldTransform;this._parent?(I.invert(t,this._parent.worldTransform.array),I.multiply(r.array,t,i.array)):I.copy(r.array,i.array);var n=e?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,r=this.rotation,i=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;I.fromRotationTranslation(n,r.array,e.array),I.scale(n,n,i.array),r._dirty=!1,i._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,r=this.worldTransform.array;this._parent?I.multiplyAffine(r,this._parent.worldTransform.array,e):I.copy(r,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].update(e)},getBoundingBox:function(){function t(n){return!n.invisible&&n.geometry}var e=new at,r=new k,i=new k;return function(n,a){return a=a||new at,n=n||t,this._parent?k.invert(i,this._parent.worldTransform):k.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(e.copy(o.geometry.boundingBox),k.multiply(r,i,o.worldTransform),e.applyTransform(r),a.union(e))},this,t),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var r=this.worldTransform.array;if(e){var i=e.array;return i[0]=r[12],i[1]=r[13],i[2]=r[14],e}else return new O(r[12],r[13],r[14])},clone:function(){var e=new this.constructor,r=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var i=0;i<r.length;i++)e.add(r[i].clone());return e},rotateAround:function(){var t=new O,e=new k;return function(r,i,n){t.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),e.fromRotationTranslation(this.rotation,t),a.multiply(e),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var t=new k;return function(e,r){t.lookAt(this.position,e,r||this.localTransform.y).invert(),this.setLocalTransform(t),this.target=e}}()}),Pt=$l,pt=Pt.extend({material:null,geometry:null,mode:R.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:R.BACK,frontFace:R.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,r){},getBoundingBox:function(e,r){return r=Pt.prototype.getBoundingBox.call(this,e,r),this.geometry&&this.geometry.boundingBox&&r.union(this.geometry.boundingBox),r},clone:function(){var t=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var e=Pt.prototype.clone.call(this);e.geometry=this.geometry,e.material=this.material;for(var r=0;r<t.length;r++){var i=t[r];e[i]!==this[i]&&(e[i]=this[i])}return e}}()});pt.POINTS=R.POINTS,pt.LINES=R.LINES,pt.LINE_LOOP=R.LINE_LOOP,pt.LINE_STRIP=R.LINE_STRIP,pt.TRIANGLES=R.TRIANGLES,pt.TRIANGLE_STRIP=R.TRIANGLE_STRIP,pt.TRIANGLE_FAN=R.TRIANGLE_FAN,pt.BACK=R.BACK,pt.FRONT=R.FRONT,pt.FRONT_AND_BACK=R.FRONT_AND_BACK,pt.CW=R.CW,pt.CCW=R.CCW;var Pn=pt,Rn=nt.extend({scene:null,camera:null,renderer:null},function(){this._ray=new Li,this._ndc=new vt},{pick:function(e,r,i){var n=this.pickAll(e,r,[],i);return n[0]||null},pickAll:function(e,r,i,n){return this.renderer.screenToNDC(e,r,this._ndc),this.camera.castRay(this._ndc,this._ray),i=i||[],this._intersectNode(this.scene,i,n||!1),i.sort(this._intersectionCompareFunc),i},_intersectNode:function(e,r,i){e instanceof Pn&&e.isRenderable()&&(!e.ignorePicking||i)&&(e.mode===R.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,r);for(var n=0;n<e._children.length;n++)this._intersectNode(e._children[n],r,i)},_intersectRenderable:function(){var t=new O,e=new O,r=new O,i=new Li,n=new k;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),k.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var h=a.cullFace===R.BACK&&a.frontFace===R.CCW||a.cullFace===R.FRONT&&a.frontFace===R.CW,f,c=l.indices,d=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,g=[];if(!(!d||!d.value||!c)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var _=0;_<a.joints.length;_++){g[_]=g[_]||[];for(var y=0;y<16;y++)g[_][y]=m[_*16+y]}var S=[],x=[],E=[],D=[],L=[],b=l.attributes.skinnedPosition;(!b||!b.value)&&(l.createAttribute("skinnedPosition","f",3),b=l.attributes.skinnedPosition,b.init(l.vertexCount));for(var _=0;_<l.vertexCount;_++){d.get(_,S),v.get(_,x),p.get(_,E),x[3]=1-x[0]-x[1]-x[2],A.set(D,0,0,0);for(var y=0;y<4;y++)E[y]>=0&&x[y]>1e-4&&(A.transformMat4(L,S,g[E[y]]),A.scaleAndAdd(D,D,L,x[y]));b.set(_,D)}}for(var _=0;_<c.length;_+=3){var M=c[_],N=c[_+1],C=c[_+2],B=s?l.attributes.skinnedPosition:d;if(B.get(M,t.array),B.get(N,e.array),B.get(C,r.array),h?f=i.intersectTriangle(t,e,r,a.culling):f=i.intersectTriangle(t,r,e,a.culling),f){var P=new O;s?O.copy(P,f):O.transformMat4(P,f,a.worldTransform),o.push(new Rn.Intersection(f,P,a,[M,N,C],_/3,O.dist(P,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,r){return e.distance-r.distance}});Rn.Intersection=function(t,e,r,i,n,a){this.point=t,this.pointWorld=e,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var eu=Rn,Qr="__dt__",Ni=function(){this._contextId=0,this._caches=[],this._context={}};Ni.prototype={use:function(e,r){var i=this._caches;i[e]||(i[e]={},r&&(i[e]=r())),this._contextId=e,this._context=i[e]},put:function(e,r){this._context[e]=r},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var r=Qr+e;this.put(r,!0)},dirtyAll:function(e){e=e||"";for(var r=Qr+e,i=this._caches,n=0;n<i.length;n++)i[n]&&(i[n][r]=!0)},fresh:function(e){e=e||"";var r=Qr+e;this.put(r,!1)},freshAll:function(e){e=e||"";for(var r=Qr+e,i=this._caches,n=0;n<i.length;n++)i[n]&&(i[n][r]=!1)},isDirty:function(e){e=e||"";var r=Qr+e,i=this._context;return!i.hasOwnProperty(r)||i[r]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,r){var i=Object.keys(this._caches);i.forEach(function(n){e&&e.call(r,n)})},miss:function(e){return!this._context.hasOwnProperty(e)}},Ni.prototype.constructor=Ni;var Nn=Ni,se=nt.extend({width:512,height:512,type:R.UNSIGNED_BYTE,format:R.RGBA,wrapS:R.REPEAT,wrapT:R.REPEAT,minFilter:R.LINEAR_MIPMAP_LINEAR,magFilter:R.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Nn},{getWebGLTexture:function(e){var r=e.gl,i=this._cache;return i.use(e.__uid__),i.miss("webgl_texture")&&i.put("webgl_texture",r.createTexture()),this.dynamic?this.update(e):i.isDirty()&&(this.update(e),i.fresh()),i.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var r=e.gl;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,this.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===R.DEPTH_COMPONENT&&(this.useMipmap=!1);var i=e.getGLExtension("EXT_sRGB");this.format===se.SRGB&&!i&&(this.format=se.RGB),this.format===se.SRGB_ALPHA&&!i&&(this.format=se.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?R.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?R.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===R.NEAREST_MIPMAP_NEAREST||e===R.NEAREST_MIPMAP_LINEAR?R.NEAREST:e===R.LINEAR_MIPMAP_LINEAR||e===R.LINEAR_MIPMAP_NEAREST?R.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var r=1;r<32;r<<=1)e=e|e>>r;return e+1},dispose:function(e){var r=this._cache;r.use(e.__uid__);var i=r.get("webgl_texture");i&&e.gl.deleteTexture(i),r.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(se.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}}),Object.defineProperty(se.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}}),se.BYTE=R.BYTE,se.UNSIGNED_BYTE=R.UNSIGNED_BYTE,se.SHORT=R.SHORT,se.UNSIGNED_SHORT=R.UNSIGNED_SHORT,se.INT=R.INT,se.UNSIGNED_INT=R.UNSIGNED_INT,se.FLOAT=R.FLOAT,se.HALF_FLOAT=36193,se.UNSIGNED_INT_24_8_WEBGL=34042,se.DEPTH_COMPONENT=R.DEPTH_COMPONENT,se.DEPTH_STENCIL=R.DEPTH_STENCIL,se.ALPHA=R.ALPHA,se.RGB=R.RGB,se.RGBA=R.RGBA,se.LUMINANCE=R.LUMINANCE,se.LUMINANCE_ALPHA=R.LUMINANCE_ALPHA,se.SRGB=35904,se.SRGB_ALPHA=35906,se.COMPRESSED_RGB_S3TC_DXT1_EXT=33776,se.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777,se.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778,se.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779,se.NEAREST=R.NEAREST,se.LINEAR=R.LINEAR,se.NEAREST_MIPMAP_NEAREST=R.NEAREST_MIPMAP_NEAREST,se.LINEAR_MIPMAP_NEAREST=R.LINEAR_MIPMAP_NEAREST,se.NEAREST_MIPMAP_LINEAR=R.NEAREST_MIPMAP_LINEAR,se.LINEAR_MIPMAP_LINEAR=R.LINEAR_MIPMAP_LINEAR,se.REPEAT=R.REPEAT,se.CLAMP_TO_EDGE=R.CLAMP_TO_EDGE,se.MIRRORED_REPEAT=R.MIRRORED_REPEAT;var X=se,mt=Pn.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Pn.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});mt.POINTS=R.POINTS,mt.LINES=R.LINES,mt.LINE_LOOP=R.LINE_LOOP,mt.LINE_STRIP=R.LINE_STRIP,mt.TRIANGLES=R.TRIANGLES,mt.TRIANGLE_STRIP=R.TRIANGLE_STRIP,mt.TRIANGLE_FAN=R.TRIANGLE_FAN,mt.BACK=R.BACK,mt.FRONT=R.FRONT,mt.FRONT_AND_BACK=R.FRONT_AND_BACK,mt.CW=R.CW,mt.CCW=R.CCW;var ir=mt,Ii={};Ii.isPowerOfTwo=function(t){return(t&t-1)==0},Ii.nextPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t++,t},Ii.nearestPowerOfTwo=function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))};var po=Ii,mo=po.isPowerOfTwo;function go(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))}function tu(t,e){var r=go(t.width),i=go(t.height);e=e||document.createElement("canvas"),e.width=r,e.height=i;var n=e.getContext("2d");return n.drawImage(t.image,0,0,r,i),e}var In=X.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var r=e.gl;r.bindTexture(r.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var i=this.format,n=this.type,a=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===X.REPEAT||this.wrapT===X.REPEAT)&&this.NPOT);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,a?this.wrapS:this.getAvailableWrapS()),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,a?this.wrapT:this.getAvailableWrapT()),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,a?this.magFilter:this.getAvailableMagFilter()),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,a?this.minFilter:this.getAvailableMinFilter());var o=e.getGLExtension("EXT_texture_filter_anisotropic");if(o&&this.anisotropic>1&&r.texParameterf(r.TEXTURE_2D,o.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var s=e.getGLExtension("OES_texture_half_float");s||(n=R.FLOAT)}if(this.mipmaps.length)for(var l=this.width,u=this.height,h=0;h<this.mipmaps.length;h++){var f=this.mipmaps[h];this._updateTextureData(r,f,h,l,u,i,n,!1),l/=2,u/=2}else this._updateTextureData(r,this,0,this.width,this.height,i,n,a),this.useMipmap&&(!this.NPOT||a)&&r.generateMipmap(r.TEXTURE_2D);r.bindTexture(r.TEXTURE_2D,null)},_updateTextureData:function(e,r,i,n,a,o,s,l){if(r.image){var u=r.image;l&&(this._potCanvas=tu(this,this._potCanvas),u=this._potCanvas),e.texImage2D(e.TEXTURE_2D,i,o,o,s,u)}else o<=X.COMPRESSED_RGBA_S3TC_DXT5_EXT&&o>=X.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,i,o,n,a,0,r.pixels):e.texImage2D(e.TEXTURE_2D,i,o,n,a,0,o,s,r.pixels)},generateMipmap:function(e){var r=e.gl;this.useMipmap&&!this.NPOT&&(r.bindTexture(r.TEXTURE_2D,this._cache.get("webgl_texture")),r.generateMipmap(r.TEXTURE_2D))},isPowerOfTwo:function(){return mo(this.width)&&mo(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,r){var i=Me.a.createImage();r&&(i.crossOrigin=r);var n=this;return i.onload=function(){n.dirty(),n.trigger("success",n)},i.onerror=function(){n.trigger("error",n)},i.src=e,this.image=i,this}});Object.defineProperty(In.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}}),Object.defineProperty(In.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var ee=In;function _o(t){return{byte:Me.a.Int8Array,ubyte:Me.a.Uint8Array,short:Me.a.Int16Array,ushort:Me.a.Uint16Array}[t]||Me.a.Float32Array}function On(t){return"attr_"+t}function Dr(t,e,r,i){switch(this.name=t,this.type=e,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}Dr.prototype.init=function(t){if(!this.value||this.value.length!==t*this.size){var e=_o(this.type);this.value=new e(t*this.size)}},Dr.prototype.fromArray=function(t){var e=_o(this.type),r;if(t[0]&&t[0].length){var i=0,n=this.size;r=new e(t.length*n);for(var a=0;a<t.length;a++)for(var o=0;o<n;o++)r[i++]=t[a][o]}else r=new e(t);this.value=r},Dr.prototype.clone=function(t){var e=new Dr(this.name,this.type,this.size,this.semantic);return t&&console.warn("todo"),e};function yo(t,e,r,i,n){this.name=t,this.type=e,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function xo(t){this.buffer=t,this.count=0}var Ot=nt.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Nn,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),r=0;r<e.length;r++)this.dirtyAttribute(e[r]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(On(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,r){if(e<this.triangleCount&&e>=0){r||(r=[]);var i=this.indices;return r[0]=i[e*3],r[1]=i[e*3+1],r[2]=i[e*3+2],r}},setTriangleIndices:function(e,r){var i=this.indices;i[e*3]=r[0],i[e*3+1]=r[1],i[e*3+2]=r[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var r,i=this.vertexCount>65535?Me.a.Uint32Array:Me.a.Uint16Array;if(e[0]&&e[0].length){var n=0,a=3;r=new i(e.length*a);for(var o=0;o<e.length;o++)for(var s=0;s<a;s++)r[n++]=e[o][s]}else r=new i(e);this.indices=r},createAttribute:function(e,r,i,n){var a=new Dr(e,r,i,n);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=a,this._attributeList.push(e),a},removeAttribute:function(e){var r=this._attributeList,i=r.indexOf(e);return i>=0?(r.splice(i,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,r=this._attributeList;if(e)return e;for(var i=[],n=this.vertexCount,a=0;a<r.length;a++){var o=r[a],s=this.attributes[o];s.value&&s.value.length===n*s.size&&i.push(o)}return this._enabledAttributes=i,i},getBufferChunks:function(e){var r=this._cache;r.use(e.__uid__);var i=r.isDirty("attributes"),n=r.isDirty("indices");if(i||n){this._updateBuffer(e.gl,i,n);for(var a=this.getEnabledAttributes(),o=0;o<a.length;o++)r.fresh(On(a[o]));r.fresh("attributes"),r.fresh("indices")}return r.fresh("any"),r.get("chunks")},_updateBuffer:function(e,r,i){var n=this._cache,a=n.get("chunks"),o=!1;a||(a=[],a[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",a),o=!0);var s=a[0],l=s.attributeBuffers,u=s.indicesBuffer;if(r||o){var h=this.getEnabledAttributes(),f={};if(!o)for(var c=0;c<l.length;c++)f[l[c].name]=l[c];for(var d=0;d<h.length;d++){var v=h[d],p=this.attributes[v],m;o||(m=f[v]);var g;m?g=m.buffer:g=e.createBuffer(),n.isDirty(On(v))&&(e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),l[d]=new yo(v,p.type,g,p.size,p.semantic)}for(var c=d;c<l.length;c++)e.deleteBuffer(l[c].buffer);l.length=d}this.isUseIndices()&&(i||o)&&(u||(u=new xo(e.createBuffer()),s.indicesBuffer=u),u.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,u.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var r=this._cache;r.use(e.__uid__);var i=r.get("chunks");if(i)for(var n=0;n<i.length;n++){for(var a=i[n],o=0;o<a.attributeBuffers.length;o++){var s=a.attributeBuffers[o];e.gl.deleteBuffer(s.buffer)}a.indicesBuffer&&e.gl.deleteBuffer(a.indicesBuffer.buffer)}if(this.__vaoCache){var l=e.getGLExtension("OES_vertex_array_object");for(var u in this.__vaoCache){var h=this.__vaoCache[u].vao;h&&l.deleteVertexArrayOES(h)}}this.__vaoCache={},r.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Ot.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Ot.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}})),Ot.STATIC_DRAW=R.STATIC_DRAW,Ot.DYNAMIC_DRAW=R.DYNAMIC_DRAW,Ot.STREAM_DRAW=R.STREAM_DRAW,Ot.AttributeBuffer=yo,Ot.IndicesBuffer=xo,Ot.Attribute=Dr;var nr=Ot,ot=A.create,Lr=A.add,ar=A.set,Rt=nr.Attribute,or=nr.extend(function(){return{attributes:{position:new Rt("position","float",3,"POSITION"),texcoord0:new Rt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new Rt("texcoord1","float",2,"TEXCOORD_1"),normal:new Rt("normal","float",3,"NORMAL"),tangent:new Rt("tangent","float",4,"TANGENT"),color:new Rt("color","float",4,"COLOR"),weight:new Rt("weight","float",3,"WEIGHT"),joint:new Rt("joint","float",4,"JOINT"),barycentric:new Rt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new at);var r=this.attributes.position.value;if(r&&r.length){var i=e.min,n=e.max,a=i.array,o=n.array;A.set(a,r[0],r[1],r[2]),A.set(o,r[0],r[1],r[2]);for(var s=3;s<r.length;){var l=r[s++],u=r[s++],h=r[s++];l<a[0]&&(a[0]=l),u<a[1]&&(a[1]=u),h<a[2]&&(a[2]=h),l>o[0]&&(o[0]=l),u>o[1]&&(o[1]=u),h>o[2]&&(o[2]=h)}i._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,r=this.attributes,i=r.position.value,n=r.normal.value;if(!n||n.length!==i.length)n=r.normal.value=new Me.a.Float32Array(i.length);else for(var a=0;a<n.length;a++)n[a]=0;for(var o=ot(),s=ot(),l=ot(),u=ot(),h=ot(),f=ot(),c=e?e.length:this.vertexCount,d,v,p,m=0;m<c;){e?(d=e[m++],v=e[m++],p=e[m++]):(d=m++,v=m++,p=m++),ar(o,i[d*3],i[d*3+1],i[d*3+2]),ar(s,i[v*3],i[v*3+1],i[v*3+2]),ar(l,i[p*3],i[p*3+1],i[p*3+2]),A.sub(u,o,s),A.sub(h,s,l),A.cross(f,u,h);for(var a=0;a<3;a++)n[d*3+a]=n[d*3+a]+f[a],n[v*3+a]=n[v*3+a]+f[a],n[p*3+a]=n[p*3+a]+f[a]}for(var a=0;a<n.length;)ar(f,n[a],n[a+1],n[a+2]),A.normalize(f,f),n[a++]=f[0],n[a++]=f[1],n[a++]=f[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,r=this.attributes,i=r.position.value,n=r.normal.value,a=ot(),o=ot(),s=ot(),l=ot(),u=ot(),h=ot();n||(n=r.normal.value=new Float32Array(i.length));for(var f=e?e.length:this.vertexCount,c,d,v,p=0;p<f;){e?(c=e[p++],d=e[p++],v=e[p++]):(c=p++,d=p++,v=p++),ar(a,i[c*3],i[c*3+1],i[c*3+2]),ar(o,i[d*3],i[d*3+1],i[d*3+2]),ar(s,i[v*3],i[v*3+1],i[v*3+2]),A.sub(l,a,o),A.sub(u,o,s),A.cross(h,l,u),A.normalize(h,h);for(var m=0;m<3;m++)n[c*3+m]=h[m],n[d*3+m]=h[m],n[v*3+m]=h[m]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,r=this.attributes;r.tangent.value||(r.tangent.value=new Float32Array(e*4));var i=r.texcoord0.value,n=r.position.value,a=r.tangent.value,o=r.normal.value;if(!i){console.warn("Geometry without texcoords can't generate tangents.");return}for(var s=[],l=[],u=0;u<e;u++)s[u]=[0,0,0],l[u]=[0,0,0];for(var h=[0,0,0],f=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,v,p,m,u=0;u<d;){c?(v=c[u++],p=c[u++],m=c[u++]):(v=u++,p=u++,m=u++);var g=i[v*2],_=i[p*2],y=i[m*2],S=i[v*2+1],x=i[p*2+1],E=i[m*2+1],D=n[v*3],L=n[p*3],b=n[m*3],M=n[v*3+1],N=n[p*3+1],C=n[m*3+1],B=n[v*3+2],P=n[p*3+2],j=n[m*3+2],G=L-D,H=b-D,V=N-M,U=C-M,de=P-B,W=j-B,Ee=_-g,fe=y-g,ye=x-S,be=E-S,ae=1/(Ee*be-ye*fe);h[0]=(be*G-ye*H)*ae,h[1]=(be*V-ye*U)*ae,h[2]=(be*de-ye*W)*ae,f[0]=(Ee*H-fe*G)*ae,f[1]=(Ee*U-fe*V)*ae,f[2]=(Ee*W-fe*de)*ae,Lr(s[v],s[v],h),Lr(s[p],s[p],h),Lr(s[m],s[m],h),Lr(l[v],l[v],f),Lr(l[p],l[p],f),Lr(l[m],l[m],f)}for(var et=ot(),Ce=ot(),Oe=ot(),u=0;u<e;u++){Oe[0]=o[u*3],Oe[1]=o[u*3+1],Oe[2]=o[u*3+2];var rt=s[u];A.scale(et,Oe,A.dot(Oe,rt)),A.sub(et,rt,et),A.normalize(et,et),A.cross(Ce,Oe,rt),a[u*4]=et[0],a[u*4+1]=et[1],a[u*4+2]=et[2],a[u*4+3]=A.dot(Ce,l[u])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new Me.a.Uint32Array(this.indices));for(var e=this.attributes,r=this.indices,i=this.getEnabledAttributes(),n={},a=0;a<i.length;a++){var o=i[a];n[o]=e[o].value,e[o].init(this.indices.length)}for(var s=0,l=0;l<r.length;l++){for(var u=r[l],a=0;a<i.length;a++)for(var o=i[a],h=e[o].value,f=e[o].size,c=0;c<f;c++)h[s*f+c]=n[o][u*f+c];r[l]=s,s++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,r=e.barycentric.value,i=this.indices;if(!(r&&r.length===i.length*3)){r=e.barycentric.value=new Float32Array(i.length*3);for(var n=0;n<(i?i.length:this.vertexCount/3);)for(var a=0;a<3;a++){var o=i?i[n++]:n*3+a;r[o*3+a]=1}this.dirty()}}},applyTransform:function(e){var r=this.attributes,i=r.position.value,n=r.normal.value,a=r.tangent.value;e=e.array;var o=I.create();I.invert(o,e),I.transpose(o,o);var s=A.transformMat4,l=A.forEach;l(i,3,0,null,s,e),n&&l(n,3,0,null,s,o),a&&l(a,4,0,null,s,o),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var r=this._cache;r.use(e.__uid__);var i=r.get("chunks");if(i)for(var n=0;n<i.length;n++){for(var a=i[n],o=0;o<a.attributeBuffers.length;o++){var s=a.attributeBuffers[o];e.gl.deleteBuffer(s.buffer)}a.indicesBuffer&&e.gl.deleteBuffer(a.indicesBuffer.buffer)}if(this.__vaoCache){var l=e.getGLExtension("OES_vertex_array_object");for(var u in this.__vaoCache){var h=this.__vaoCache[u].vao;h&&l.deleteVertexArrayOES(h)}}this.__vaoCache={},r.deleteContext(e.__uid__)}});or.STATIC_DRAW=nr.STATIC_DRAW,or.DYNAMIC_DRAW=nr.DYNAMIC_DRAW,or.STREAM_DRAW=nr.STREAM_DRAW,or.AttributeBuffer=nr.AttributeBuffer,or.IndicesBuffer=nr.IndicesBuffer,or.Attribute=Rt;var he=or,ru=`vec3 calcAmbientSHLight(int idx, vec3 N) {
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
}`,Ct="uniform vec3 ",Jr="uniform float ",Cr="@export clay.header.",Mr="@end",Je=":unconfigurable;",iu=[Cr+"directional_light",Ct+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Je,Ct+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Je,Mr,Cr+"ambient_light",Ct+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Je,Mr,Cr+"ambient_sh_light",Ct+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Je,Ct+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Je,ru,Mr,Cr+"ambient_cubemap_light",Ct+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Je,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Je,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Je,Mr,Cr+"point_light",Ct+"pointLightPosition[POINT_LIGHT_COUNT]"+Je,Jr+"pointLightRange[POINT_LIGHT_COUNT]"+Je,Ct+"pointLightColor[POINT_LIGHT_COUNT]"+Je,Mr,Cr+"spot_light",Ct+"spotLightPosition[SPOT_LIGHT_COUNT]"+Je,Ct+"spotLightDirection[SPOT_LIGHT_COUNT]"+Je,Jr+"spotLightRange[SPOT_LIGHT_COUNT]"+Je,Jr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Je,Jr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Je,Jr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Je,Ct+"spotLightColor[SPOT_LIGHT_COUNT]"+Je,Mr].join(`
`);F.import(iu);var nu=Pt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=Pt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),Mt=nu,Oi=function(e,r){this.normal=e||new O(0,1,0),this.distance=r||0};Oi.prototype={constructor:Oi,distanceToPoint:function(e){return A.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,r){r||(r=new O);var i=this.distanceToPoint(e);return A.scaleAndAdd(r.array,e.array,this.normal.array,-i),r._dirty=!0,r},normalize:function(){var e=1/A.len(this.normal.array);A.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var r=e.vertices,i=this.normal.array,n=A.dot(r[0].array,i)>this.distance,a=1;a<8;a++)if(A.dot(r[a].array,i)>this.distance!=n)return!0},intersectLine:function(){var t=A.create();return function(e,r,i){var n=this.distanceToPoint(e),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=e.array;A.sub(t,r.array,e.array),A.normalize(t,t);var u=A.dot(o,t);if(u===0)return null;i||(i=new O);var h=(A.dot(o,l)-s)/u;return A.scaleAndAdd(i.array,l,t,-h),i._dirty=!0,i}}(),applyTransform:function(){var t=I.create(),e=z.create(),r=z.create();return r[3]=1,function(i){i=i.array,A.scale(r,this.normal.array,this.distance),z.transformMat4(r,r,i),this.distance=A.dot(r,this.normal.array),I.invert(t,i),I.transpose(t,t),e[3]=0,A.copy(e,this.normal.array),z.transformMat4(e,e,t),A.copy(this.normal.array,e)}}(),copy:function(e){A.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new Oi;return e.copy(this),e}};var To=Oi,Re=A.set,So=A.copy,Eo=A.transformMat4,Bn=Math.min,Fn=Math.max,wo=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new To);this.boundingBox=new at,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=A.fromValues(0,0,0)};wo.prototype={setFromProjection:function(e){var r=this.planes,i=e.array,n=i[0],a=i[1],o=i[2],s=i[3],l=i[4],u=i[5],h=i[6],f=i[7],c=i[8],d=i[9],v=i[10],p=i[11],m=i[12],g=i[13],_=i[14],y=i[15];Re(r[0].normal.array,s-n,f-l,p-c),r[0].distance=-(y-m),r[0].normalize(),Re(r[1].normal.array,s+n,f+l,p+c),r[1].distance=-(y+m),r[1].normalize(),Re(r[2].normal.array,s+a,f+u,p+d),r[2].distance=-(y+g),r[2].normalize(),Re(r[3].normal.array,s-a,f-u,p-d),r[3].distance=-(y-g),r[3].normalize(),Re(r[4].normal.array,s-o,f-h,p-v),r[4].distance=-(y-_),r[4].normalize(),Re(r[5].normal.array,s+o,f+h,p+v),r[5].distance=-(y+_),r[5].normalize();var S=this.boundingBox,x=this.vertices;if(y===0){var E=u/n,D=-_/(v-1),L=-_/(v+1),b=-L/u,M=-D/u;S.min.set(-b*E,-b,L),S.max.set(b*E,b,D),Re(x[0],-b*E,-b,L),Re(x[1],-b*E,b,L),Re(x[2],b*E,-b,L),Re(x[3],b*E,b,L),Re(x[4],-M*E,-M,D),Re(x[5],-M*E,M,D),Re(x[6],M*E,-M,D),Re(x[7],M*E,M,D)}else{var N=(-1-m)/n,C=(1-m)/n,B=(1-g)/u,P=(-1-g)/u,j=(-1-_)/v,G=(1-_)/v;S.min.set(Math.min(N,C),Math.min(P,B),Math.min(G,j)),S.max.set(Math.max(C,N),Math.max(B,P),Math.max(j,G));var H=S.min.array,V=S.max.array;Re(x[0],H[0],H[1],H[2]),Re(x[1],H[0],V[1],H[2]),Re(x[2],V[0],H[1],H[2]),Re(x[3],V[0],V[1],H[2]),Re(x[4],H[0],H[1],V[2]),Re(x[5],H[0],V[1],V[2]),Re(x[6],V[0],H[1],V[2]),Re(x[7],V[0],V[1],V[2])}},getTransformedBoundingBox:function(){var t=A.create();return function(e,r){var i=this.vertices,n=r.array,a=e.min,o=e.max,s=a.array,l=o.array,u=i[0];Eo(t,u,n),So(s,t),So(l,t);for(var h=1;h<8;h++)u=i[h],Eo(t,u,n),s[0]=Bn(t[0],s[0]),s[1]=Bn(t[1],s[1]),s[2]=Bn(t[2],s[2]),l[0]=Fn(t[0],l[0]),l[1]=Fn(t[1],l[1]),l[2]=Fn(t[2],l[2]);return a._dirty=!0,o._dirty=!0,e}}()};var Un=wo,au=Pt.extend(function(){return{projectionMatrix:new k,invProjectionMatrix:new k,viewMatrix:new k,frustum:new Un}},function(){this.update(!0)},{update:function(e){Pt.prototype.update.call(this,e),k.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),k.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){k.copy(this.viewMatrix,e),k.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){k.copy(this.projectionMatrix,e),k.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var t=z.create();return function(e,r){var i=r!==void 0?r:new Li,n=e.array[0],a=e.array[1];return z.set(t,n,a,-1,1),z.transformMat4(t,t,this.invProjectionMatrix.array),z.transformMat4(t,t,this.worldTransform.array),A.scale(i.origin.array,t,1/t[3]),z.set(t,n,a,1,1),z.transformMat4(t,t,this.invProjectionMatrix.array),z.transformMat4(t,t,this.worldTransform.array),A.scale(t,t,1/t[3]),A.sub(i.direction.array,t,i.origin.array),A.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Pr=au,ou=I.create(),Ao=I.create(),Gn={};function su(t){var e=[],r=Object.keys(t);r.sort();for(var i=0;i<r.length;i++){var n=r[i];e.push(n+" "+t[n])}var a=e.join(`
`);if(Gn[a])return Gn[a];var o=Ke.genGUID();return Gn[a]=o,o}function Bi(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Bi.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0},Bi.prototype.add=function(t,e){e?this.transparent[this._transparentCount++]=t:this.opaque[this._opaqueCount++]=t},Bi.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var lu=Pt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new at,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Va(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Pr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof Mt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var r;e instanceof Pr?(r=this._cameraList.indexOf(e),r>=0&&this._cameraList.splice(r,1)):e instanceof Mt&&(r=this.lights.indexOf(e),r>=0&&this.lights.splice(r,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var r=this._cameraList.indexOf(e);r>=0&&this._cameraList.splice(r,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var r={},i=0;i<e.length;i++){var n=e[i];if(!n.invisible){var a=n.group;r[a]||(r[a]={}),r[a][n.type]=r[a][n.type]||0,r[a][n.type]++}}this._lightNumber=r;for(var o in r)this._lightProgramKeys[o]=su(r[o]);this._updateLightUniforms()},cloneNode:function(e){var r=e.clone(),i={};function n(a,o){i[a.__uid__]=o;for(var s=0;s<a._children.length;s++){var l=a._children[s],u=o._children[s];n(l,u)}}return n(e,r),r.traverse(function(a){a.skeleton&&(a.skeleton=a.skeleton.clone(i)),a.material&&(a.material=a.material.clone())}),r},updateRenderList:function(e,r){var i=e.__uid__,n=this._renderLists.get(i);n||(n=new Bi,this._renderLists.put(i,n)),n.startCount(),r&&(this.viewBoundingBoxLastFrame.min.set(Infinity,Infinity,Infinity),this.viewBoundingBoxLastFrame.max.set(-Infinity,-Infinity,-Infinity));var a=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,a,n,r),n.endCount(),n},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,r,i,n,a){if(!e.invisible)for(var o=0;o<e._children.length;o++){var s=e._children[o];if(s.isRenderable()){var l=s.isSkinnedMesh()?ou:s.worldTransform.array,u=s.geometry;I.multiplyAffine(Ao,r.viewMatrix.array,l),(a&&!u.boundingBox||!this.isFrustumCulled(s,r,Ao))&&n.add(s,s.material.transparent||i)}s._children.length>0&&this._doUpdateRenderList(s,r,i,n,a)}},isFrustumCulled:function(){var t=new at,e=new k;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(e.array=n,t.transformFrom(a,e),r.castShadow&&this.viewBoundingBoxLastFrame.union(t),r.frustumCulling){if(!t.intersectBoundingBox(i.frustum.boundingBox))return!0;e.array=i.projectionMatrix.array,t.max.array[2]>0&&t.min.array[2]<0&&(t.max.array[2]=-1e-20),t.applyProjection(e);var o=t.min.array,s=t.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(uu);var r=this._lightUniforms;for(var i in r)for(var n in r[i])r[i][n].value.length=0;for(var a=0;a<e.length;a++){var o=e[a];if(!o.invisible){var i=o.group;for(var n in o.uniformTemplates){var s=o.uniformTemplates[n],l=s.value(o);if(l!=null){r[i]||(r[i]={}),r[i][n]||(r[i][n]={type:"",value:[]});var u=r[i][n];switch(u.type=s.type+"v",s.type){case"1i":case"1f":case"t":u.value.push(l);break;case"2f":case"3f":case"4f":for(var h=0;h<l.length;h++)u.value.push(l[h]);break;default:console.error("Unkown light uniform type "+s.type)}}}}}},getLightGroups:function(){var e=[];for(var r in this._lightNumber)e.push(r);return e},getNumberChangedLightGroups:function(){var e=[];for(var r in this._lightNumber)this.isLightNumberChanged(r)&&e.push(r);return e},isLightNumberChanged:function(e){var r=this._previousLightNumber,i=this._lightNumber;for(var n in i[e])if(!r[e]||i[e][n]!==r[e][n])return!0;for(var n in r[e])if(!i[e]||i[e][n]!==r[e][n])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function t(e,r,i){for(var n in e){var a=e[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(e,r,i){t(this._lightUniforms[r],e,i),t(this.shadowUniforms,e,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function uu(t,e){if(e.castShadow&&!t.castShadow)return!0}var Zt=lu,hu=Y("1RvN"),Fi=po.isPowerOfTwo,fu=["px","nx","py","ny","pz","nz"],zn=X.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var r=e.gl;r.bindTexture(r.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var i=this.format,n=this.type;r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,this.getAvailableWrapS()),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,this.getAvailableWrapT()),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&r.texParameterf(r.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var o=e.getGLExtension("OES_texture_half_float");o||(n=R.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(r,h,u,s,l,i,n),s/=2,l/=2}else this._updateTextureData(r,this,0,this.width,this.height,i,n),!this.NPOT&&this.useMipmap&&r.generateMipmap(r.TEXTURE_CUBE_MAP);r.bindTexture(r.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,r,i,n,a,o,s){for(var l=0;l<6;l++){var u=fu[l],h=r.image&&r.image[u];h?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+l,i,o,o,s,h):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+l,i,o,n,a,0,o,s,r.pixels&&r.pixels[u])}},generateMipmap:function(e){var r=e.gl;this.useMipmap&&!this.NPOT&&(r.bindTexture(r.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),r.generateMipmap(r.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Fi(this.image.px.width)&&Fi(this.image.px.height):Fi(this.width)&&Fi(this.height)},isRenderable:function(){return this.image.px?Rr(this.image.px)&&Rr(this.image.nx)&&Rr(this.image.py)&&Rr(this.image.ny)&&Rr(this.image.pz)&&Rr(this.image.nz):!!(this.width&&this.height)},load:function(e,r){var i=0,n=this;return Ke.each(e,function(a,o){var s=Me.a.createImage();r&&(s.crossOrigin=r),s.onload=function(){i--,i===0&&(n.dirty(),n.trigger("success",n))},s.onerror=function(){i--},i++,s.src=a,n.image[o]=s}),this}});Object.defineProperty(zn.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}}),Object.defineProperty(zn.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Rr(t){return t.width>0&&t.height>0}var $r=zn,cu=Pr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,r=Math.atan(1/e[5])*2;this.fov=r/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Pr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),ke=cu,Ui="framebuffer",Bt="renderbuffer",bo=Bt+"_width",Do=Bt+"_height",Hn=Bt+"_attached",Vn="depthtexture_attached",sr=R.FRAMEBUFFER,ei=R.RENDERBUFFER,ti=R.DEPTH_ATTACHMENT,Lo=R.COLOR_ATTACHMENT0,ri=nt.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Nn,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var r=e.gl;r.bindFramebuffer(sr,this._getFrameBufferGL(e)),this._boundRenderer=e;var i=this._cache;i.put("viewport",e.viewport);var n=!1,a,o;for(var s in this._textures){n=!0;var l=this._textures[s];l&&(a=l.texture.width,o=l.texture.height,this._doAttach(e,l.texture,s,l.target))}this._width=a,this._height=o,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,a,o,1);var u=i.get("attached_textures");if(u){for(var s in u)if(!this._textures[s]){var h=u[s];this._doDetach(r,s,h)}}if(!i.get(Vn)&&this.depthBuffer){i.miss(Bt)&&i.put(Bt,r.createRenderbuffer());var f=i.get(Bt);(a!==i.get(bo)||o!==i.get(Do))&&(r.bindRenderbuffer(ei,f),r.renderbufferStorage(ei,r.DEPTH_COMPONENT16,a,o),i.put(bo,a),i.put(Do,o),r.bindRenderbuffer(ei,null)),i.get(Hn)||(r.framebufferRenderbuffer(sr,ti,ei,f),i.put(Hn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var r=e.gl;r.bindFramebuffer(sr,null),this._boundRenderer=null,this._cache.use(e.__uid__);var i=this._cache.get("viewport");i&&e.setViewport(i),this.updateMipmap(e)},updateMipmap:function(e){var r=e.gl;for(var i in this._textures){var n=this._textures[i];if(n){var a=n.texture;if(!a.NPOT&&a.useMipmap&&a.minFilter===X.LINEAR_MIPMAP_LINEAR){var o=a.textureType==="textureCube"?R.TEXTURE_CUBE_MAP:R.TEXTURE_2D;r.bindTexture(o,a.getWebGLTexture(e)),r.generateMipmap(o),r.bindTexture(o,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(sr)},_getFrameBufferGL:function(e){var r=this._cache;return r.use(e.__uid__),r.miss(Ui)&&r.put(Ui,e.gl.createFramebuffer()),r.get(Ui)},attach:function(e,r,i){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");r=r||Lo,i=i||R.TEXTURE_2D;var n=this._boundRenderer,a=n&&n.gl,o;if(a){var s=this._cache;s.use(n.__uid__),o=s.get("attached_textures")}var l=this._textures[r];if(!(l&&l.target===i&&l.texture===e&&o&&o[r]!=null)){var u=!0;n&&(u=this._doAttach(n,e,r,i),this.viewport||n.setViewport(0,0,e.width,e.height,1)),u&&(this._textures[r]=this._textures[r]||{},this._textures[r].texture=e,this._textures[r].target=i)}},_doAttach:function(e,r,i,n){var a=e.gl,o=r.getWebGLTexture(e),s=this._cache.get("attached_textures");if(s&&s[i]){var l=s[i];if(l.texture===r&&l.target===n)return}i=+i;var u=!0;if(i===ti||i===R.DEPTH_STENCIL_ATTACHMENT){var h=e.getGLExtension("WEBGL_depth_texture");if(h||(console.error("Depth texture is not supported by the browser"),u=!1),r.format!==R.DEPTH_COMPONENT&&r.format!==R.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),u=!1),u){var f=this._cache.get(Bt);f&&(a.framebufferRenderbuffer(sr,ti,ei,null),a.deleteRenderbuffer(f),this._cache.put(Bt,!1)),this._cache.put(Hn,!1),this._cache.put(Vn,!0)}}return a.framebufferTexture2D(sr,i,n,o,0),s||(s={},this._cache.put("attached_textures",s)),s[i]=s[i]||{},s[i].texture=r,s[i].target=n,u},_doDetach:function(e,r,i){e.framebufferTexture2D(sr,r,i,null,0);var n=this._cache.get("attached_textures");n&&n[r]&&(n[r]=null),(r===ti||r===R.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Vn,!1)},detach:function(e,r){if(this._textures[e]=null,this._boundRenderer){var i=this._cache;i.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,r)}},dispose:function(e){var r=e.gl,i=this._cache;i.use(e.__uid__);var n=i.get(Bt);n&&r.deleteRenderbuffer(n);var a=i.get(Ui);a&&r.deleteFramebuffer(a),i.deleteContext(e.__uid__),this._textures={}}});ri.DEPTH_ATTACHMENT=ti,ri.COLOR_ATTACHMENT0=Lo,ri.STENCIL_ATTACHMENT=R.STENCIL_ATTACHMENT,ri.DEPTH_STENCIL_ATTACHMENT=R.DEPTH_STENCIL_ATTACHMENT;var Xe=ri,du=["px","nx","py","ny","pz","nz"],vu=nt.extend(function(){var t={position:new O,far:1e3,near:.1,texture:null,shadowMapPass:null},e=t._cameras={px:new ke({fov:90}),nx:new ke({fov:90}),py:new ke({fov:90}),ny:new ke({fov:90}),pz:new ke({fov:90}),nz:new ke({fov:90})};return e.px.lookAt(O.POSITIVE_X,O.NEGATIVE_Y),e.nx.lookAt(O.NEGATIVE_X,O.NEGATIVE_Y),e.py.lookAt(O.POSITIVE_Y,O.POSITIVE_Z),e.ny.lookAt(O.NEGATIVE_Y,O.NEGATIVE_Z),e.pz.lookAt(O.POSITIVE_Z,O.NEGATIVE_Y),e.nz.lookAt(O.NEGATIVE_Z,O.NEGATIVE_Y),t._frameBuffer=new Xe,t},{getCamera:function(e){return this._cameras[e]},render:function(e,r,i){var n=e.gl;i||r.update();for(var a=this.texture.width,o=2*Math.atan(a/(a-.5))/Math.PI*180,s=0;s<6;s++){var l=du[s],u=this._cameras[l];if(O.copy(u.position,this.position),u.far=this.far,u.near=this.near,u.fov=o,this.shadowMapPass){u.update();var h=r.getBoundingBox();h.applyTransform(u.viewMatrix),r.viewBoundingBoxLastFrame.copy(h),this.shadowMapPass.render(e,r,u,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+s),this._frameBuffer.bind(e),e.render(r,u,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Wn=vu,pu=he.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,r=this.widthSegments,i=this.attributes,n=[],a=[],o=[],s=[],l=0;l<=e;l++)for(var u=l/e,h=0;h<=r;h++){var f=h/r;if(n.push([2*f-1,2*u-1,0]),a&&a.push([f,u]),o&&o.push([0,0,1]),h<r&&l<e){var c=h+l*(r+1);s.push([c,c+1,c+r+1]),s.push([c+r+1,c+1,c+r+2])}}i.position.fromArray(n),i.texcoord0.fromArray(a),i.normal.fromArray(o),this.initIndicesFromArray(s),this.boundingBox=new at,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),Gi=pu,De=new k,mu=he.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Nr("px",this.depthSegments,this.heightSegments),nx:Nr("nx",this.depthSegments,this.heightSegments),py:Nr("py",this.widthSegments,this.depthSegments),ny:Nr("ny",this.widthSegments,this.depthSegments),pz:Nr("pz",this.widthSegments,this.heightSegments),nz:Nr("nz",this.widthSegments,this.heightSegments)},r=["position","texcoord0","normal"],i=0,n=0;for(var a in e)i+=e[a].vertexCount,n+=e[a].indices.length;for(var o=0;o<r.length;o++)this.attributes[r[o]].init(i);this.indices=new Me.a.Uint16Array(n);var s=0,l=0;for(var a in e){for(var u=e[a],o=0;o<r.length;o++)for(var h=r[o],f=u.attributes[h].value,c=u.attributes[h].size,d=h==="normal",v=0;v<f.length;v++){var p=f[v];this.inside&&d&&(p=-p),this.attributes[h].value[v+c*l]=p}for(var m=u.indices.length,v=0;v<u.indices.length;v++)this.indices[v+s]=l+u.indices[this.inside?m-v-1:v];s+=u.indices.length,l+=u.vertexCount}this.boundingBox=new at,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Nr(t,e,r){De.identity();var i=new Gi({widthSegments:e,heightSegments:r});switch(t){case"px":k.translate(De,De,O.POSITIVE_X),k.rotateY(De,De,Math.PI/2);break;case"nx":k.translate(De,De,O.NEGATIVE_X),k.rotateY(De,De,-Math.PI/2);break;case"py":k.translate(De,De,O.POSITIVE_Y),k.rotateX(De,De,-Math.PI/2);break;case"ny":k.translate(De,De,O.NEGATIVE_Y),k.rotateX(De,De,Math.PI/2);break;case"pz":k.translate(De,De,O.POSITIVE_Z);break;case"nz":k.translate(De,De,O.NEGATIVE_Z),k.rotateY(De,De,Math.PI);break}return i.applyTransform(De),i}var Co=mu,gu=`@export clay.skybox.vertex
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
@end`;F.import(gu);var _u=ir.extend(function(){var t=new F({vertex:F.source("clay.skybox.vertex"),fragment:F.source("clay.skybox.fragment")}),e=new Tt({shader:t,depthMask:!1});return{scene:null,geometry:new Co,material:e,environmentMap:null,culling:!1,_dummyCamera:new ke}},function(){var t=this.scene;t&&this.attachScene(t),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=X.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,r,i){this.renderSkybox(e,i)},renderSkybox:function(e,r){var i=this._dummyCamera;i.aspect=e.getViewportAspect(),i.fov=r.fov||50,i.updateProjectionMatrix(),k.invert(i.invProjectionMatrix,i.projectionMatrix),i.worldTransform.copy(r.worldTransform),i.viewMatrix.copy(r.viewMatrix),this.position.copy(r.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],i)}}),zi=_u,Mo=zi,yu=542327876,kv=1,Xv=2,jv=4,Zv=8,Yv=4096,xu=131072,qv=524288,Kv=8388608,Qv=8,Jv=4194304,$v=4096,Tu=512,ep=1024,tp=2048,rp=4096,ip=8192,np=16384,ap=32768,op=2097152,sp=1,lp=2,Su=4,up=64,hp=512,fp=131072;function kn(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function cp(t){return String.fromCharCode(t&255,t>>8&255,t>>16&255,t>>24&255)}var Eu=31,wu=kn("DXT1"),Au=kn("DXT3"),bu=kn("DXT5"),Du=0,Lu=1,Cu=2,Mu=3,Pu=4,Ru=7,Nu=20,Iu=21,dp=27,Ou=28,vp=29,pp=30,Bu={parse:function(e,r){var i=new Int32Array(e,0,Eu);if(i[Du]!==yu||!i(Nu)&Su)return null;var n=i(Iu),a=i[Pu],o=i[Mu],s=i[Ou]&Tu,l=i[Cu]&xu,u,h;switch(n){case wu:u=8,h=X.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Au:u=16,h=X.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case bu:u=16,h=X.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var f=i[Lu]+4,c=s?6:1,d=1;l&&(d=Math.max(1,i[Ru]));for(var v=[],p=0;p<c;p++){var m=a,g=o;v[p]=new ee({width:m,height:g,format:h});for(var _=[],y=0;y<d;y++){var S=Math.max(4,m)/4*Math.max(4,g)/4*u,x=new Uint8Array(e,f,S);f+=S,m*=.5,g*=.5,_[y]=x}v[p].pixels=_[0],l&&(v[p].mipmaps=_)}if(r)r.width=v[0].width,r.height=v[0].height,r.format=v[0].format,r.pixels=v[0].pixels,r.mipmaps=v[0].mipmaps;else return v[0]}},Fu=Bu,Hi=String.fromCharCode,Uu=8,Gu=32767;function zu(t,e,r,i){if(t[3]>0){var n=Math.pow(2,t[3]-128-8+i);e[r+0]=t[0]*n,e[r+1]=t[1]*n,e[r+2]=t[2]*n}else e[r+0]=0,e[r+1]=0,e[r+2]=0;return e[r+3]=1,e}function Hu(t,e,r){for(var i="",n=e;n<r;n++)i+=Hi(t[n]);return i}function Vu(t,e){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]}function Po(t,e,r,i){for(var n=0,a=0,o=i;o>0;)if(t[a][0]=e[r++],t[a][1]=e[r++],t[a][2]=e[r++],t[a][3]=e[r++],t[a][0]===1&&t[a][1]===1&&t[a][2]===1){for(var s=t[a][3]<<n>>>0;s>0;s--)Vu(t[a-1],t[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function Wu(t,e,r,i){if(i<Uu|i>Gu)return Po(t,e,r,i);var n=e[r++];if(n!=2)return Po(t,e,r-1,i);if(t[0][1]=e[r++],t[0][2]=e[r++],n=e[r++],(t[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=e[r++];if(o>128){o=(o&127)>>>0;for(var s=e[r++];o--;)t[a++][n]=s}else for(;o--;)t[a++][n]=e[r++]}return r}var ku={parseRGBE:function(e,r,i){i==null&&(i=0);var n=new Uint8Array(e),a=n.length;if(Hu(n,0,2)==="#?"){for(var o=2;o<a&&!(Hi(n[o])===`
`&&Hi(n[o+1])===`
`);o++);if(!(o>=a)){o+=2;for(var s="";o<a;o++){var l=Hi(n[o]);if(l===`
`)break;s+=l}var u=s.split(" "),h=parseInt(u[1]),f=parseInt(u[3]);if(!(!f||!h)){for(var c=o+1,d=[],v=0;v<f;v++){d[v]=[];for(var p=0;p<4;p++)d[v][p]=0}for(var m=new Float32Array(f*h*4),g=0,_=0;_<h;_++){var c=Wu(d,n,c,f);if(!c)return null;for(var v=0;v<f;v++)zu(d[v],m,g,i),g+=4}return r||(r=new ee),r.width=f,r.height=h,r.pixels=m,r.type=X.FLOAT,r}}}},parseRGBEFromPNG:function(e){}},Xu=ku,Vi={loadTexture:function(e,r,i,n){var a;if(typeof r=="function"?(i=r,n=i,r={}):r=r||{},typeof e=="string"){if(e.match(/.hdr$/)||r.fileType==="hdr")return a=new ee({width:0,height:0,sRGB:!1}),Vi._fetchTexture(e,function(o){Xu.parseRGBE(o,a,r.exposure),a.dirty(),i&&i(a)},n),a;e.match(/.dds$/)||r.fileType==="dds"?(a=new ee({width:0,height:0}),Vi._fetchTexture(e,function(o){Fu.parse(o,a),a.dirty(),i&&i(a)},n)):(a=new ee,a.load(e),a.success(i),a.error(n))}else typeof e=="object"&&typeof e.px!="undefined"&&(a=new $r,a.load(e),a.success(i),a.error(n));return a},loadPanorama:function(e,r,i,n,a,o){var s=this;typeof n=="function"?(a=n,o=a,n={}):n=n||{},Vi.loadTexture(r,n,function(l){l.flipY=n.flipY||!1,s.panoramaToCubeMap(e,l,i,n),l.dispose(e),a&&a(i)},o)},panoramaToCubeMap:function(e,r,i,n){var a=new Wn,o=new Mo({scene:new Zt});return o.setEnvironmentMap(r),n=n||{},n.encodeRGBM&&o.material.define("fragment","RGBM_ENCODE"),i.sRGB=r.sRGB,a.texture=i,a.render(e,o.scene),a.texture=null,a.dispose(e),i},heightToNormal:function(e,r){var i=document.createElement("canvas"),n=i.width=e.width,a=i.height=e.height,o=i.getContext("2d");o.drawImage(e,0,0,n,a),r=r||!1;for(var s=o.getImageData(0,0,n,a),l=o.createImageData(n,a),u=0;u<s.data.length;u+=4){if(r){var h=s.data[u],f=s.data[u+1],c=s.data[u+2],d=Math.abs(h-f)+Math.abs(f-c);if(d>20)return console.warn("Given image is not a height map"),e}var v,p,m,g;u%(n*4)==0?(v=s.data[u],m=s.data[u+4]):u%(n*4)==(n-1)*4?(v=s.data[u-4],m=s.data[u]):(v=s.data[u-4],m=s.data[u+4]),u<n*4?(p=s.data[u],g=s.data[u+n*4]):u>n*(a-1)*4?(p=s.data[u-n*4],g=s.data[u]):(p=s.data[u-n*4],g=s.data[u+n*4]),l.data[u]=v-m+127,l.data[u+1]=p-g+127,l.data[u+2]=255,l.data[u+3]=255}return o.putImageData(l,0,0),i},isHeightImage:function(e,r,i){if(!e||!e.width||!e.height)return!1;var n=document.createElement("canvas"),a=n.getContext("2d"),o=r||32;i=i||20,n.width=n.height=o,a.drawImage(e,0,0,o,o);for(var s=a.getImageData(0,0,o,o),l=0;l<s.data.length;l+=4){var u=s.data[l],h=s.data[l+1],f=s.data[l+2],c=Math.abs(u-h)+Math.abs(h-f);if(c>i)return!1}return!0},_fetchTexture:function(e,r,i){Me.a.request.get({url:e,responseType:"arraybuffer",onload:r,onerror:i})},createChessboard:function(e,r,i,n){e=e||512,r=r||64,i=i||"black",n=n||"white";var a=Math.ceil(e/r),o=document.createElement("canvas");o.width=e,o.height=e;var s=o.getContext("2d");s.fillStyle=n,s.fillRect(0,0,e,e),s.fillStyle=i;for(var l=0;l<a;l++)for(var u=0;u<a;u++){var h=u%2?l%2:l%2-1;h&&s.fillRect(l*r,u*r,r,r)}var f=new ee({image:o,anisotropic:8});return f},createBlank:function(e){var r=document.createElement("canvas");r.width=1,r.height=1;var i=r.getContext("2d");i.fillStyle=e,i.fillRect(0,0,1,1);var n=new ee({image:r});return n}},lr=Vi,Xn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function jn(t){return"_on"+t}var Zn=function(e){var r=this;this._texture=new ee({anisotropic:32,flipY:!1,surface:this,dispose:function(n){r.dispose(),ee.prototype.dispose.call(this,n)}}),Xn.forEach(function(i){this[jn(i)]=function(n){!n.triangle||this._meshes.forEach(function(a){this.dispatchEvent(i,a,n.triangle,n.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Zn.prototype={constructor:Zn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var r=e.getDom();if(!(r instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),r=document.createElement("canvas");else{var i=this,n=e.getZr(),a=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){a.call(this),i._texture.dirty(),i.onupdate&&i.onupdate()},n.__oldRefreshImmediately=a}this._texture.image=r,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var t=new O,e=new O,r=new O,i=new vt,n=new vt,a=new vt,o=new vt,s=new O;return function(l,u,h,f){var c=u.geometry,d=c.attributes.position,v=c.attributes.texcoord0,p=O.dot,m=O.cross;d.get(h[0],t.array),d.get(h[1],e.array),d.get(h[2],r.array),v.get(h[0],i.array),v.get(h[1],n.array),v.get(h[2],a.array),m(s,e,r);var g=p(t,s),_=p(f,s)/g;m(s,r,t);var y=p(f,s)/g;m(s,t,e);var S=p(f,s)/g;vt.scale(o,i,_),vt.scaleAndAdd(o,o,n,y),vt.scaleAndAdd(o,o,a,S);var x=o.x*this._chart.getWidth(),E=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:x,zrY:E})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Xn.forEach(function(r){e.on(r,this[jn(r)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var r=this._meshes.indexOf(e);r>=0&&this._meshes.splice(r,1),Xn.forEach(function(i){e.off(i,this[jn(i)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var ju=Zn,Zu=Pr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Pr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),Ir=Zu,Yu=`
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
@end`;F.import(Yu);var qu=new Gi,Ro=new ir({geometry:qu,frustumCulling:!1}),Ku=new Ir,Qu=nt.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var t=new F(F.source("clay.compositor.vertex"),this.fragment),e=new Tt({shader:t});e.enableTexturesAll(),this.material=e},{setUniform:function(e,r){this.material.setUniform(e,r)},getUniform:function(e){var r=this.material.uniforms[e];if(r)return r.value},attachOutput:function(e,r){this.outputs||(this.outputs={}),r=r||R.COLOR_ATTACHMENT0,this.outputs[r]=e},detachOutput:function(e){for(var r in this.outputs)this.outputs[r]===e&&(this.outputs[r]=null)},bind:function(e,r){if(this.outputs)for(var i in this.outputs){var n=this.outputs[i];n&&r.attach(n,i)}r&&r.bind(e)},unbind:function(e,r){r.unbind(e)},render:function(e,r){var i=e.gl;if(r){this.bind(e,r);var n=e.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var a=[];for(var o in this.outputs)o=+o,o>=i.COLOR_ATTACHMENT0&&o<=i.COLOR_ATTACHMENT0+8&&a.push(o);n.drawBuffersEXT(a)}}this.trigger("beforerender",this,e);var s=this.clearDepth?i.DEPTH_BUFFER_BIT:0;if(i.depthMask(!0),this.clearColor){s=s|i.COLOR_BUFFER_BIT,i.colorMask(!0,!0,!0,!0);var l=this.clearColor;Array.isArray(l)&&i.clearColor(l[0],l[1],l[2],l[3])}i.clear(s),this.blendWithPrevious?(i.enable(i.BLEND),this.material.transparent=!0):(i.disable(i.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),r&&this.unbind(e,r)},renderQuad:function(e){Ro.material=this.material,e.renderPass([Ro],Ku)},dispose:function(e){}}),Ne=Qu,Ju=`#define SAMPLE_NUMBER 1024
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
`,$u=`#define SHADER_NAME prefilter
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
`,ur={},Yn=["px","nx","py","ny","pz","nz"];ur.prefilterEnvironmentMap=function(t,e,r,i,n){(!n||!i)&&(i=ur.generateNormalDistribution(),n=ur.integrateBRDF(t,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||e.type,l=new $r({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),h=Math.log(u)/Math.log(2)+1,f=new Tt({shader:new F({vertex:F.source("clay.skybox.vertex"),fragment:$u})});f.set("normalDistribution",i),r.encodeRGBM&&f.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&f.define("fragment","RGBM_DECODE");var c=new Zt,d;if(e.textureType==="texture2D"){var v=new $r({width:a,height:o,type:s===X.FLOAT?X.HALF_FLOAT:s});lr.panoramaToCubeMap(t,e,v,{encodeRGBM:r.decodeRGBM}),e=v}d=new zi({scene:c,material:f}),d.material.set("environmentMap",e);var p=new Wn({texture:l});r.encodeRGBM&&(s=l.type=X.UNSIGNED_BYTE);for(var m=new ee({width:a,height:o,type:s}),g=new Xe({depthBuffer:!1}),_=Me.a[s===X.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],y=0;y<h;y++){l.mipmaps[y]={pixels:{}},d.material.set("roughness",y/(h-1));for(var S=m.width,x=2*Math.atan(S/(S-.5))/Math.PI*180,E=0;E<Yn.length;E++){var D=new _(m.width*m.height*4);g.attach(m),g.bind(t);var L=p.getCamera(Yn[E]);L.fov=x,t.render(c,L),t.gl.readPixels(0,0,m.width,m.height,X.RGBA,s,D),g.unbind(t),l.mipmaps[y].pixels[Yn[E]]=D}m.width/=2,m.height/=2,m.dirty()}return g.dispose(t),m.dispose(t),d.dispose(t),i.dispose(t),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:h}},ur.integrateBRDF=function(t,e){e=e||ur.generateNormalDistribution();var r=new Xe({depthBuffer:!1}),i=new Ne({fragment:Ju}),n=new ee({width:512,height:256,type:X.HALF_FLOAT,wrapS:X.CLAMP_TO_EDGE,wrapT:X.CLAMP_TO_EDGE,minFilter:X.NEAREST,magFilter:X.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",e),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(t,r),r.dispose(t),n},ur.generateNormalDistribution=function(t,e){for(var t=t||256,e=e||1024,r=new ee({width:t,height:e,type:X.FLOAT,minFilter:X.NEAREST,magFilter:X.NEAREST,wrapS:X.CLAMP_TO_EDGE,wrapT:X.CLAMP_TO_EDGE,useMipmap:!1}),i=new Float32Array(e*t*4),n=[],a=0;a<t;a++){for(var o=a/t,s=o*o,l=0;l<e;l++){var u=(l<<16|l>>>16)>>>0;u=((u&1431655765)<<1|(u&2863311530)>>>1)>>>0,u=((u&858993459)<<2|(u&3435973836)>>>2)>>>0,u=((u&252645135)<<4|(u&4042322160)>>>4)>>>0,u=(((u&16711935)<<8|(u&4278255360)>>>8)>>>0)/4294967296;var h=Math.sqrt((1-u)/(1+(s*s-1)*u));n[l]=h}for(var l=0;l<e;l++){var f=(l*t+a)*4,h=n[l],c=Math.sqrt(1-h*h),d=l/e,v=2*Math.PI*d;i[f]=c*Math.cos(v),i[f+1]=h,i[f+2]=c*Math.sin(v),i[f+3]=1}}return r.pixels=i,r};var Wi=ur,eh=Mt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,r){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Wi.generateNormalDistribution(),this._brdfLookup=Wi.integrateBRDF(e,this._normalDistribution));var i=this.cubemap;if(!i.__prefiltered){var n=Wi.prefilterEnvironmentMap(e,i,{encodeRGBM:!0,width:r,height:r},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,i.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),th=eh,rh=Mt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new Me.a.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var r=e._coefficientsTmpArr,i=0;i<e.coefficients.length;i++)r[i]=e.coefficients[i];return r}}}}),ih=rh,nh=`uniform samplerCube environmentMap;
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
}`,No={},hr=["px","nx","py","ny","pz","nz"];function mp(t,e){var r=new ee({width:9,height:1,type:X.FLOAT}),i=new Ne({fragment:nh});i.material.define("fragment","TEXTURE_SIZE",e.width),i.setUniform("environmentMap",e);var n=new Xe;n.attach(r),i.render(t,n),n.bind(t);var a=new Me.a.Float32Array(9*4);t.gl.readPixels(0,0,9,1,X.RGBA,X.FLOAT,a);for(var o=new Me.a.Float32Array(9*3),s=0;s<9;s++)o[s*3]=a[s*4],o[s*3+1]=a[s*4+1],o[s*3+2]=a[s*4+2];return n.unbind(t),n.dispose(t),i.dispose(t),o}function ah(t,e){var r=t[0],i=t[1],n=t[2];return e===0?1:e===1?r:e===2?i:e===3?n:e===4?r*n:e===5?i*n:e===6?r*i:e===7?3*n*n-1:r*r-i*i}var oh={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function sh(t,e,r,i){for(var n=new Me.a.Float32Array(9*3),a=A.create(),o=A.create(),s=A.create(),l=0;l<9;l++){for(var u=A.create(),h=0;h<hr.length;h++){for(var f=e[hr[h]],c=A.create(),d=0,v=0,p=oh[hr[h]],m=0;m<i;m++)for(var g=0;g<r;g++){a[0]=g/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,A.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=f[v++]/255,o[1]=f[v++]/255,o[2]=f[v++]/255;var _=f[v++]/255*8.12;o[0]*=_,o[1]*=_,o[2]*=_,A.scaleAndAdd(c,c,o,ah(s,l)*-a[2]),d+=-a[2]}A.scaleAndAdd(u,u,c,1/d)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}No.projectEnvironmentMap=function(t,e,r){r=r||{},r.lod=r.lod||0;var i,n=new Zt,a=64;e.textureType==="texture2D"?i=new Mo({scene:n,environmentMap:e}):(a=e.image&&e.image.px?e.image.px.width:e.width,i=new zi({scene:n,environmentMap:e}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new ee({width:o,height:s}),u=new Xe;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new Wn({texture:l}),f={},c=0;c<hr.length;c++){f[hr[c]]=new Uint8Array(o*s*4);var d=h.getCamera(hr[c]);d.fov=90,u.attach(l),u.bind(t),t.render(n,d),t.gl.readPixels(0,0,o,s,X.RGBA,X.UNSIGNED_BYTE,f[hr[c]]),u.unbind(t)}return i.dispose(t),u.dispose(t),l.dispose(t),sh(t,f,o,s)};var lh=No,uh={firstNotNull:function(){for(var e=0,r=arguments.length;e<r;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,r){if(r.dataIndexInside!=null)return r.dataIndexInside;if(r.dataIndex!=null)return w.y.isArray(r.dataIndex)?w.y.map(r.dataIndex,function(i){return e.indexOfRawIndex(i)}):e.indexOfRawIndex(r.dataIndex);if(r.name!=null)return w.y.isArray(r.name)?w.y.map(r.name,function(i){return e.indexOfName(i)}):e.indexOfName(r.name)}},re=uh,hh=he.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,r=this.widthSegments,i=this.attributes.position,n=this.attributes.texcoord0,a=this.attributes.normal,o=(r+1)*(e+1);i.init(o),n.init(o),a.init(o);var s=o>65535?Uint32Array:Uint16Array,l=this.indices=new s(r*e*6),u,h,f,c,d,v,p,m=this.radius,g=this.phiStart,_=this.phiLength,y=this.thetaStart,S=this.thetaLength,m=this.radius,x=[],E=[],D=0,L=1/m;for(p=0;p<=e;p++)for(v=0;v<=r;v++)c=v/r,d=p/e,u=-m*Math.cos(g+c*_)*Math.sin(y+d*S),h=m*Math.cos(y+d*S),f=m*Math.sin(g+c*_)*Math.sin(y+d*S),x[0]=u,x[1]=h,x[2]=f,E[0]=c,E[1]=d,i.set(D,x),n.set(D,E),x[0]*=L,x[1]*=L,x[2]*=L,a.set(D,x),D++;var b,M,N,C,B=r+1,P=0;for(p=0;p<e;p++)for(v=0;v<r;v++)M=p*B+v,b=p*B+v+1,C=(p+1)*B+v+1,N=(p+1)*B+v,l[P++]=b,l[P++]=M,l[P++]=C,l[P++]=M,l[P++]=N,l[P++]=C;this.boundingBox=new at,this.boundingBox.max.set(m,m,m),this.boundingBox.min.set(-m,-m,-m)}}),fh=hh,ch=Mt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}}}}),dh=ch,vh=Mt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new O,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}}},clone:function(){var e=Mt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ph=vh,mh=Mt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}}},clone:function(){var e=Mt.prototype.clone.call(this);return e.range=this.range,e}}),gh=mh,_h=Mt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new O,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var r=e.color,i=e.intensity;return[r[0]*i,r[1]*i,r[2]*i]}}},clone:function(){var e=Mt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),yh=_h,le=function(e,r,i,n){e=e||0,r=r||0,i=i||0,n=n||0,this.array=z.fromValues(e,r,i,n),this._dirty=!0};le.prototype={constructor:le,add:function(e){return z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,r,i,n){return this.array[0]=e,this.array[1]=r,this.array[2]=i,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new le(this.x,this.y,this.z,this.w)},copy:function(e){return z.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return z.dist(this.array,e.array)},distance:function(e){return z.distance(this.array,e.array)},div:function(e){return z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return z.dot(this.array,e.array)},len:function(){return z.len(this.array)},length:function(){return z.length(this.array)},lerp:function(e,r,i){return z.lerp(this.array,e.array,r.array,i),this._dirty=!0,this},min:function(e){return z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return z.random(this.array,e),this._dirty=!0,this},scale:function(e){return z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,r){return z.scaleAndAdd(this.array,this.array,e.array,r),this._dirty=!0,this},sqrDist:function(e){return z.sqrDist(this.array,e.array)},squaredDistance:function(e){return z.squaredDistance(this.array,e.array)},sqrLen:function(){return z.sqrLen(this.array)},squaredLength:function(){return z.squaredLength(this.array)},sub:function(e){return z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return z.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ii=Object.defineProperty;if(ii){var ki=le.prototype;ii(ki,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ii(ki,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ii(ki,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),ii(ki,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}le.add=function(t,e,r){return z.add(t.array,e.array,r.array),t._dirty=!0,t},le.set=function(t,e,r,i,n){z.set(t.array,e,r,i,n),t._dirty=!0},le.copy=function(t,e){return z.copy(t.array,e.array),t._dirty=!0,t},le.dist=function(t,e){return z.distance(t.array,e.array)},le.distance=le.dist,le.div=function(t,e,r){return z.divide(t.array,e.array,r.array),t._dirty=!0,t},le.divide=le.div,le.dot=function(t,e){return z.dot(t.array,e.array)},le.len=function(t){return z.length(t.array)},le.lerp=function(t,e,r,i){return z.lerp(t.array,e.array,r.array,i),t._dirty=!0,t},le.min=function(t,e,r){return z.min(t.array,e.array,r.array),t._dirty=!0,t},le.max=function(t,e,r){return z.max(t.array,e.array,r.array),t._dirty=!0,t},le.mul=function(t,e,r){return z.multiply(t.array,e.array,r.array),t._dirty=!0,t},le.multiply=le.mul,le.negate=function(t,e){return z.negate(t.array,e.array),t._dirty=!0,t},le.normalize=function(t,e){return z.normalize(t.array,e.array),t._dirty=!0,t},le.random=function(t,e){return z.random(t.array,e),t._dirty=!0,t},le.scale=function(t,e,r){return z.scale(t.array,e.array,r),t._dirty=!0,t},le.scaleAndAdd=function(t,e,r,i){return z.scaleAndAdd(t.array,e.array,r.array,i),t._dirty=!0,t},le.sqrDist=function(t,e){return z.sqrDist(t.array,e.array)},le.squaredDistance=le.sqrDist,le.sqrLen=function(t){return z.sqrLen(t.array)},le.squaredLength=le.sqrLen,le.sub=function(t,e,r){return z.subtract(t.array,e.array,r.array),t._dirty=!0,t},le.subtract=le.sub,le.transformMat4=function(t,e,r){return z.transformMat4(t.array,e.array,r.array),t._dirty=!0,t},le.transformQuat=function(t,e,r){return z.transformQuat(t.array,e.array,r.array),t._dirty=!0,t};var xh=le,it={};it.create=function(){var t=new Qe(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},it.clone=function(t){var e=new Qe(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},it.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},it.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},it.transpose=function(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t},it.invert=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=r*a-n*i;return o?(o=1/o,t[0]=a*o,t[1]=-i*o,t[2]=-n*o,t[3]=r*o,t):null},it.adjoint=function(t,e){var r=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=r,t},it.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},it.multiply=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=r[0],l=r[1],u=r[2],h=r[3];return t[0]=i*s+a*l,t[1]=n*s+o*l,t[2]=i*u+a*h,t[3]=n*u+o*h,t},it.mul=it.multiply,it.rotate=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=i*l+a*s,t[1]=n*l+o*s,t[2]=i*-s+a*l,t[3]=n*-s+o*l,t},it.scale=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=r[0],l=r[1];return t[0]=i*s,t[1]=n*s,t[2]=a*l,t[3]=o*l,t},it.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},it.LDU=function(t,e,r,i){return t[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-t[2]*r[1],[t,e,r]};var Pe=it,st=function(){this.array=Pe.create(),this._dirty=!0};st.prototype={constructor:st,setArray:function(e){for(var r=0;r<this.array.length;r++)this.array[r]=e[r];return this._dirty=!0,this},clone:function(){return new st().copy(this)},copy:function(e){return Pe.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Pe.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Pe.determinant(this.array)},identity:function(){return Pe.identity(this.array),this._dirty=!0,this},invert:function(){return Pe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Pe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Pe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Pe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Pe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Pe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Pe.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Pe.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},st.adjoint=function(t,e){return Pe.adjoint(t.array,e.array),t._dirty=!0,t},st.copy=function(t,e){return Pe.copy(t.array,e.array),t._dirty=!0,t},st.determinant=function(t){return Pe.determinant(t.array)},st.identity=function(t){return Pe.identity(t.array),t._dirty=!0,t},st.invert=function(t,e){return Pe.invert(t.array,e.array),t._dirty=!0,t},st.mul=function(t,e,r){return Pe.mul(t.array,e.array,r.array),t._dirty=!0,t},st.multiply=st.mul,st.rotate=function(t,e,r){return Pe.rotate(t.array,e.array,r),t._dirty=!0,t},st.scale=function(t,e,r){return Pe.scale(t.array,e.array,r.array),t._dirty=!0,t},st.transpose=function(t,e){return Pe.transpose(t.array,e.array),t._dirty=!0,t};var Th=st,ut={};ut.create=function(){var t=new Qe(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},ut.clone=function(t){var e=new Qe(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},ut.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},ut.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},ut.invert=function(t,e){var r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=r*a-i*n;return l?(l=1/l,t[0]=a*l,t[1]=-i*l,t[2]=-n*l,t[3]=r*l,t[4]=(n*s-a*o)*l,t[5]=(i*o-r*s)*l,t):null},ut.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},ut.multiply=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1],f=r[2],c=r[3],d=r[4],v=r[5];return t[0]=i*u+a*h,t[1]=n*u+o*h,t[2]=i*f+a*c,t[3]=n*f+o*c,t[4]=i*d+a*v+s,t[5]=n*d+o*v+l,t},ut.mul=ut.multiply,ut.rotate=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=Math.sin(r),h=Math.cos(r);return t[0]=i*h+a*u,t[1]=n*h+o*u,t[2]=i*-u+a*h,t[3]=n*-u+o*h,t[4]=s,t[5]=l,t},ut.scale=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1];return t[0]=i*u,t[1]=n*u,t[2]=a*h,t[3]=o*h,t[4]=s,t[5]=l,t},ut.translate=function(t,e,r){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1];return t[0]=i,t[1]=n,t[2]=a,t[3]=o,t[4]=i*u+a*h+s,t[5]=n*u+o*h+l,t},ut.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)};var Be=ut,ht=function(){this.array=Be.create(),this._dirty=!0};ht.prototype={constructor:ht,setArray:function(e){for(var r=0;r<this.array.length;r++)this.array[r]=e[r];return this._dirty=!0,this},clone:function(){return new ht().copy(this)},copy:function(e){return Be.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Be.determinant(this.array)},identity:function(){return Be.identity(this.array),this._dirty=!0,this},invert:function(){return Be.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Be.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Be.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Be.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Be.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Be.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Be.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Be.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},ht.copy=function(t,e){return Be.copy(t.array,e.array),t._dirty=!0,t},ht.determinant=function(t){return Be.determinant(t.array)},ht.identity=function(t){return Be.identity(t.array),t._dirty=!0,t},ht.invert=function(t,e){return Be.invert(t.array,e.array),t._dirty=!0,t},ht.mul=function(t,e,r){return Be.mul(t.array,e.array,r.array),t._dirty=!0,t},ht.multiply=ht.mul,ht.rotate=function(t,e,r){return Be.rotate(t.array,e.array,r),t._dirty=!0,t},ht.scale=function(t,e,r){return Be.scale(t.array,e.array,r.array),t._dirty=!0,t},ht.translate=function(t,e,r){return Be.translate(t.array,e.array,r.array),t._dirty=!0,t};var Sh=ht,Ge=function(){this.array=oe.create(),this._dirty=!0};Ge.prototype={constructor:Ge,setArray:function(e){for(var r=0;r<this.array.length;r++)this.array[r]=e[r];return this._dirty=!0,this},adjoint:function(){return oe.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ge().copy(this)},copy:function(e){return oe.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return oe.determinant(this.array)},fromMat2d:function(e){return oe.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return oe.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return oe.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return oe.identity(this.array),this._dirty=!0,this},invert:function(){return oe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return oe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return oe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return oe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return oe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return oe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return oe.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return oe.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return oe.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return oe.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},Ge.adjoint=function(t,e){return oe.adjoint(t.array,e.array),t._dirty=!0,t},Ge.copy=function(t,e){return oe.copy(t.array,e.array),t._dirty=!0,t},Ge.determinant=function(t){return oe.determinant(t.array)},Ge.identity=function(t){return oe.identity(t.array),t._dirty=!0,t},Ge.invert=function(t,e){return oe.invert(t.array,e.array),t},Ge.mul=function(t,e,r){return oe.mul(t.array,e.array,r.array),t._dirty=!0,t},Ge.multiply=Ge.mul,Ge.fromMat2d=function(t,e){return oe.fromMat2d(t.array,e.array),t._dirty=!0,t},Ge.fromMat4=function(t,e){return oe.fromMat4(t.array,e.array),t._dirty=!0,t},Ge.fromQuat=function(t,e){return oe.fromQuat(t.array,e.array),t._dirty=!0,t},Ge.normalFromMat4=function(t,e){return oe.normalFromMat4(t.array,e.array),t._dirty=!0,t},Ge.rotate=function(t,e,r){return oe.rotate(t.array,e.array,r),t._dirty=!0,t},Ge.scale=function(t,e,r){return oe.scale(t.array,e.array,r.array),t._dirty=!0,t},Ge.transpose=function(t,e){return oe.transpose(t.array,e.array),t._dirty=!0,t},Ge.translate=function(t,e,r){return oe.translate(t.array,e.array,r.array),t._dirty=!0,t};var Eh=Ge,wh=Y("Bq2U"),Ah={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,r){this._animators=this._animators||[];var i=this,n;if(e){for(var a=e.split("."),o=i,s=0,l=a.length;s<l;s++)!o||(o=o[a[s]]);o&&(n=o)}else n=i;if(n==null)throw new Error("Target "+e+" not exists");var u=this._animators,h=new wh.b(n,r),f=this;return h.during(function(){f.__zr&&f.__zr.refresh()}).done(function(){var c=u.indexOf(h);c>=0&&u.splice(c,1)}),u.push(h),this.__zr&&this.__zr.animation.addAnimator(h),h},stopAnimation:function(e){this._animators=this._animators||[];for(var r=this._animators,i=r.length,n=0;n<i;n++)r[n].stop(e);return r.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var r=0;r<this._animators.length;r++)e.animation.addAnimator(this._animators[r])},removeAnimatorsFromZr:function(e){if(this._animators)for(var r=0;r<this._animators.length;r++)e.animation.removeAnimator(this._animators[r])}},bh=Ah,Io=`
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
@end`,Dh=`
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
`,Lh=`@export ecgl.color.vertex

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
@end`,Ch=`/**
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

@end`,Mh=`@export ecgl.realistic.vertex

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

@end`,Ph=`@export ecgl.hatching.vertex

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
`,Rh=`@export ecgl.sm.depth.vertex

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

@end`;Object.assign(Pt.prototype,bh),F.import(Io),F.import(lo),F.import(Dh),F.import(Lh),F.import(Ch),F.import(Mh),F.import(Ph),F.import(Rh);function Nh(t){return!t||t==="none"}function Oo(t){return t instanceof HTMLCanvasElement||t instanceof HTMLImageElement||t instanceof Image}function Ih(t){return t.getZr&&t.setOption}var Oh=Zt.prototype.addToScene,Bh=Zt.prototype.removeFromScene;Zt.prototype.addToScene=function(t){if(Oh.call(this,t),this.__zr){var e=this.__zr;t.traverse(function(r){r.__zr=e,r.addAnimatorsToZr&&r.addAnimatorsToZr(e)})}},Zt.prototype.removeFromScene=function(t){Bh.call(this,t),t.traverse(function(e){var r=e.__zr;e.__zr=null,r&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(r)})},Tt.prototype.setTextureImage=function(t,e,r,i){if(!!this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(t),Nh(e)||(o=Q.loadTexture(e,r,i,function(s){a.enableTexture(t),n&&n.refresh()}),a.set(t,o)),o}};var Q={};Q.Renderer=qr,Q.Node=Pt,Q.Mesh=ir,Q.Shader=F,Q.Material=Tt,Q.Texture=X,Q.Texture2D=ee,Q.Geometry=he,Q.SphereGeometry=fh,Q.PlaneGeometry=Gi,Q.CubeGeometry=Co,Q.AmbientLight=dh,Q.DirectionalLight=ph,Q.PointLight=gh,Q.SpotLight=yh,Q.PerspectiveCamera=ke,Q.OrthographicCamera=Ir,Q.Vector2=vt,Q.Vector3=O,Q.Vector4=xh,Q.Quaternion=vo,Q.Matrix2=Th,Q.Matrix2d=Sh,Q.Matrix3=Eh,Q.Matrix4=k,Q.Plane=To,Q.Ray=Li,Q.BoundingBox=at,Q.Frustum=Un;var Xi=null;function Fh(){return Xi!==null||(Xi=lr.createBlank("rgba(255,255,255,0)").image),Xi}function Bo(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))}function Fo(t){if((t.wrapS===X.REPEAT||t.wrapT===X.REPEAT)&&t.image){var e=Bo(t.width),r=Bo(t.height);if(e!==t.width||r!==t.height){var i=document.createElement("canvas");i.width=e,i.height=r;var n=i.getContext("2d");n.drawImage(t.image,0,0,e,r),t.image=i}}}Q.loadTexture=function(t,e,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=e.__textureCache=e.__textureCache||new hu.a(20);if(Ih(t)){var l=t.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(t),i&&i(u.texture);else{var h=new ju(t);h.onupdate=function(){e.getZr().refresh()},u={texture:h.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=t.__textureid__||"__ecgl_ec__"+u.texture.__uid__,t.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(Oo(t)){var l=t.__textureid__,u=s.get(a+l);if(!u){u={texture:new Q.Texture2D({image:t})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=t.__textureid__||"__ecgl_image__"+u.texture.__uid__,t.__textureid__=l,s.put(a+l,u),Fo(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+t);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(t.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var f=lr.loadTexture(t,{exposure:r.exposure,fileType:"hdr"},function(){f.dirty(),u.callbacks.forEach(function(v){v&&v(f)}),u.callbacks=null});u.texture=f,s.put(a+t,u)}else{for(var f=new Q.Texture2D({image:new Image}),o=0;o<n.length;o++)f[n[o]]=r[n[o]];u={texture:f,callbacks:[i]};var c=f.image;c.onload=function(){f.image=c,Fo(f),f.dirty(),u.callbacks.forEach(function(p){p&&p(f)}),u.callbacks=null},c.crossOrigin="Anonymous",c.src=t,f.image=Fh(),s.put(a+t,u)}return u.texture}},Q.createAmbientCubemap=function(t,e,r,i){t=t||{};var n=t.texture,a=re.firstNotNull(t.exposure,1),o=new th({intensity:re.firstNotNull(t.specularIntensity,1)}),s=new ih({intensity:re.firstNotNull(t.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=Q.loadTexture(n,r,{exposure:a},function(){if(o.cubemap.flipY=!1,!1)var l;if(o.prefilter(e,32),!1)var u;s.coefficients=lh.projectEnvironmentMap(e,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}},Q.createBlankTexture=lr.createBlank,Q.isImage=Oo,Q.additiveBlend=function(t){t.blendEquation(t.FUNC_ADD),t.blendFunc(t.SRC_ALPHA,t.ONE)},Q.parseColor=function(t,e){return t instanceof Array?(e||(e=[]),e[0]=t[0],e[1]=t[1],e[2]=t[2],t.length>3?e[3]=t[3]:e[3]=1,e):(e=w.h.parse(t||"#000",e)||[0,0,0,0],e[0]/=255,e[1]/=255,e[2]/=255,e)},Q.directionFromAlphaBeta=function(t,e){var r=t/180*Math.PI+Math.PI/2,i=-e/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n},Q.getShadowResolution=function(t){var e=1024;switch(t){case"low":e=512;break;case"medium":break;case"high":e=2048;break;case"ultra":e=4096;break}return e},Q.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"],Q.createShader=function(t){t==="ecgl.shadow"&&(t="ecgl.displayShadow");var e=F.source(t+".vertex"),r=F.source(t+".fragment");e||console.error("Vertex shader of '%s' not exits",t),r||console.error("Fragment shader of '%s' not exits",t);var i=new F(e,r);return i.name=t,i},Q.createMaterial=function(t,e){e instanceof Array||(e=[e]);var r=Q.createShader(t),i=new Tt({shader:r});return e.forEach(function(n){typeof n=="string"&&i.define(n)}),i},Q.setMaterialFromModel=function(t,e,r,i){e.autoUpdateTextureStatus=!1;var n=r.getModel(t+"Material"),a=n.get("detailTexture"),o=re.firstNotNull(n.get("textureTiling"),1),s=re.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?Q.Texture.REPEAT:Q.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(t==="realistic"){var h=n.get("roughness"),f=n.get("metalness");f!=null?isNaN(f)&&(e.setTextureImage("metalnessMap",f,i,u),f=re.firstNotNull(n.get("metalnessAdjust"),.5)):f=0,h!=null?isNaN(h)&&(e.setTextureImage("roughnessMap",h,i,u),h=re.firstNotNull(n.get("roughnessAdjust"),.5)):h=.5;var c=n.get("normalTexture");e.setTextureImage("detailMap",a,i,u),e.setTextureImage("normalMap",c,i,u),e.set({roughness:h,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(t==="lambert")e.setTextureImage("detailMap",a,i,u),e.set({detailUvRepeat:o,detailUvOffset:s});else if(t==="color")e.setTextureImage("detailMap",a,i,u),e.set({detailUvRepeat:o,detailUvOffset:s});else if(t==="hatching"){var d=n.get("hatchingTextures")||[];d.length<6;for(var v=0;v<6;v++)e.setTextureImage("hatch"+(v+1),d[v],i,{anisotropic:8,wrapS:Q.Texture.REPEAT,wrapT:Q.Texture.REPEAT});e.set({detailUvRepeat:o,detailUvOffset:s})}},Q.updateVertexAnimation=function(t,e,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&e&&a>0&&e.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<t.length;l++)r.geometry.attributes[t[l][0]].value=e.geometry.attributes[t[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var T=Q,qn=Y("mLcG"),ge=function(e,r){this.id=e,this.zr=r;try{this.renderer=new qr({clearBit:0,devicePixelRatio:r.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(r.painter.getWidth(),r.painter.getHeight())}catch(n){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(n);return}this.onglobalout=this.onglobalout.bind(this),r.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var i=this.dom.style;i.position="absolute",i.left="0",i.top="0",this.views=[],this._picking=new eu({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new w.n.Rect({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};ge.prototype.setUnpainted=function(){},ge.prototype.addView=function(t){if(t.layer!==this){var e=this._viewsToDispose.indexOf(t);e>=0&&this._viewsToDispose.splice(e,1),this.views.push(t),t.layer=this;var r=this.zr;t.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function Uo(t){var e=t.__zr;t.__zr=null,e&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(e)}ge.prototype.removeView=function(t){if(t.layer===this){var e=this.views.indexOf(t);e>=0&&(this.views.splice(e,1),t.scene.traverse(Uo,this),t.layer=null,this._viewsToDispose.push(t))}},ge.prototype.removeViewsAll=function(){this.views.forEach(function(t){t.scene.traverse(Uo,this),t.layer=null,this._viewsToDispose.push(t)},this),this.views.length=0},ge.prototype.resize=function(t,e){var r=this.renderer;r.resize(t,e)},ge.prototype.clear=function(){var t=this.renderer.gl,e=this._backgroundColor||[0,0,0,0];t.clearColor(e[0],e[1],e[2],e[3]),t.depthMask(!0),t.colorMask(!0,!0,!0,!0),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT)},ge.prototype.clearDepth=function(){var t=this.renderer.gl;t.clear(t.DEPTH_BUFFER_BIT)},ge.prototype.clearColor=function(){var t=this.renderer.gl;t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},ge.prototype.needsRefresh=function(){this.zr.refresh()},ge.prototype.refresh=function(t){this._backgroundColor=t?T.parseColor(t):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var e=0;e<this.views.length;e++)this.views[e].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var e=0;e<this._viewsToDispose.length;e++)this._viewsToDispose[e].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()},ge.prototype.renderToCanvas=function(t){this._startAccumulating(!0),t.drawImage(this.dom,0,0,t.canvas.width,t.canvas.height)},ge.prototype._doRender=function(t){this.clear(),this.renderer.saveViewport();for(var e=0;e<this.views.length;e++)this.views[e].render(this.renderer,t);this.renderer.restoreViewport()},ge.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Uh=1;ge.prototype._startAccumulating=function(t){var e=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!e._accumulatingId||a!==e._accumulatingId)){for(var o=!0,s=0;s<e.views.length;s++)o=e.views[s].isAccumulateFinished()&&r;o||(e._doRender(!0),t?n(a):Object(qn.a)(function(){n(a)}))}}this._accumulatingId=Uh++,t?n(e._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(e._accumulatingId)},50)},ge.prototype._trackAndClean=function(){var t=[],e=[];this._textureList&&(ji(this._textureList),ji(this._geometriesList));for(var r=0;r<this.views.length;r++)Gh(this.views[r].scene,t,e);this._textureList&&(Zi(this.renderer,this._textureList),Zi(this.renderer,this._geometriesList)),this._textureList=t,this._geometriesList=e};function ji(t){for(var e=0;e<t.length;e++)t[e].__used__=0}function Zi(t,e){for(var r=0;r<e.length;r++)e[r].__used__||e[r].dispose(t)}function Yi(t,e){t.__used__=t.__used__||0,t.__used__++,t.__used__===1&&e.push(t)}function Gh(t,e,r){var i,n;t.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var f=u[h],c=l.uniforms[f].value;if(!!c){if(c instanceof X)Yi(c,e);else if(c instanceof Array)for(var d=0;d<c.length;d++)c[d]instanceof X&&Yi(c[d],e)}}s!==n&&Yi(s,r),i=l,n=s}});for(var a=0;a<t.lights.length;a++)t.lights[a].cubemap&&Yi(t.lights[a].cubemap,e)}ge.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(ji(this._textureList),ji(this._geometriesList),Zi(this.renderer,this._textureList),Zi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)},ge.prototype.onmousedown=function(t){if(!(t.target&&t.target.__isGLToZRProxy)){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY);e&&(this._dispatchEvent("mousedown",t,e),this._dispatchDataEvent("mousedown",t,e)),this._downX=t.offsetX,this._downY=t.offsetY}},ge.prototype.onmousemove=function(t){if(!(t.target&&t.target.__isGLToZRProxy)){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY),r=e&&e.target,i=this._hovered;this._hovered=e,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",t,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",t,e),e&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",t,e)),this._dispatchDataEvent("mousemove",t,e)}},ge.prototype.onmouseup=function(t){if(!(t.target&&t.target.__isGLToZRProxy)){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY);e&&(this._dispatchEvent("mouseup",t,e),this._dispatchDataEvent("mouseup",t,e)),this._upX=t.offsetX,this._upY=t.offsetY}},ge.prototype.onclick=ge.prototype.dblclick=function(t){if(!(t.target&&t.target.__isGLToZRProxy)){var e=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(e*e+r*r)>20)){t=t.event;var i=this.pickObject(t.offsetX,t.offsetY);i&&(this._dispatchEvent(t.type,t,i),this._dispatchDataEvent(t.type,t,i));var n=this._clickToSetFocusPoint(t);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}},ge.prototype._clickToSetFocusPoint=function(t){for(var e=this.renderer,r=e.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(t.offsetX,t.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,e.viewport=n.viewport;var a=this._picking.pick(t.offsetX,t.offsetY,!0);if(a)return a.view=n,a}}e.viewport=r},ge.prototype.onglobalout=function(t){var e=this._hovered;e&&this._dispatchEvent("mouseout",t,{target:e.target})},ge.prototype.pickObject=function(t,e){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(t,e)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(t,e,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]},ge.prototype._dispatchEvent=function(t,e,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=e,r.type=t,r.offsetX=e.offsetX,r.offsetY=e.offsetY;i&&(i.trigger(t,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(t,r)},ge.prototype._dispatchDataEvent=function(t,e,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=e.offsetX,l.y=e.offsetY,l.update();var u={target:l},h=w.o.getECData(l);t==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",e)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",e)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=n,h.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,t,e),s&&this.zr.handler.dispatchToElement(u,"mouseover",e))},ge.prototype._dispatchToView=function(t,e){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(e.offsetX,e.offsetY)&&this.views[r].trigger(t,e)},Object.assign(ge.prototype,Wt);var Go=ge,zh=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function ni(t,e){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var r=t[e].normal,i=t[e].emphasis;r&&(t[e]=r),i&&(t.emphasis=t.emphasis||{},t.emphasis[e]=i)}}function Hh(t){ni(t,"itemStyle"),ni(t,"lineStyle"),ni(t,"areaStyle"),ni(t,"label")}function qi(t){!t||(t instanceof Array||(t=[t]),w.y.each(t,function(e){if(e.axisLabel){var r=e.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}var Vh=function(t){w.y.each(t.series,function(e){w.y.indexOf(zh,e.type)>=0&&(Hh(e),e.coordinateSystem==="mapbox"&&(e.coordinateSystem="mapbox3D",t.mapbox3D=t.mapbox))}),qi(t.xAxis3D),qi(t.yAxis3D),qi(t.zAxis3D),qi(t.grid3D),ni(t.geo3D)};function Kn(t){this._layers={},this._zr=t}Kn.prototype.update=function(t,e){var r=this,i=e.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new Go("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var f=new w.n.Image({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=f,i.add(f)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();t.eachComponent(function(s,l){if(s!=="series"){var u=e.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var f;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=h.viewGL}var f=h.viewGL,c=n(l);c.addView(f),u.afterRender&&u.afterRender(l,t,e,c),a(u.groupGL,l.get("silent"))}}}),t.eachSeries(function(s){var l=e.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,f=n(s);f.addView(h),l.afterRender&&l.afterRender(s,t,e,f),a(l.groupGL,s.get("silent"))}})},w.u(function(t){var e=t.getZr(),r=e.painter.dispose;e.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof Go&&i.dispose()}),r.call(this)},e.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,h=this;function f(p,m){var g=h._zlevelList;p==null&&(p=-Infinity);for(var _,y=0;y<g.length;y++){var S=g[y],x=h._layers[S];if(!x.__builtin__&&S>p&&S<m){_=x;break}}_&&_.renderToCanvas&&(o.save(),_.renderToCanvas(o),o.restore())}for(var c={ctx:o},d=0;d<s.length;d++){var v=s[d];v.zlevel!==u&&(f(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,c,!0,null,l)}return f(u,Infinity),n}}),w.v(function(t,e){var r=e.getZr(),i=r.__egl=r.__egl||new Kn(r);i.update(t,e)}),w.w(Vh);var gp=Kn,Ki={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Or={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Br={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},Qi=w.c.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});w.y.merge(Qi.prototype,Ki),w.y.merge(Qi.prototype,Or),w.y.merge(Qi.prototype,Br);var Wh=Qi,Ji=Y("eDfh"),ai=re.firstNotNull,zo={left:0,middle:1,right:2};function Ho(t){return t instanceof Array||(t=[t,t]),t}var Vo=nt.extend(function(){return{zr:null,viewGL:null,_center:new O,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-Infinity,maxBeta:Infinity,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new vt,_panVelocity:new vt,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(t){this[t]=this[t].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,r){r=r||{};var i=r.baseDistance||0,n=r.baseOrthoSize||1,a=e.get("projection");a!=="perspective"&&a!=="orthographic"&&a!=="isometric"&&(a="perspective"),this._projection=a,this.viewGL.setProjection(a);var o=e.get("distance")+i,s=e.get("orthographicSize")+n;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-Infinity],["maxBeta",Infinity],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=ai(e.get(d[0]),d[1])},this),this.minDistance+=i,this.maxDistance+=i,this.minOrthographicSize+=n,this.maxOrthographicSize+=n;var l=e.ecModel,u={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){u[d]=ai(e.get(d),l&&l.get(d))});var h=ai(r.alpha,e.get("alpha"))||0,f=ai(r.beta,e.get("beta"))||0,c=ai(r.center,e.get("center"))||[0,0,0];u.animation&&u.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:h,beta:f,center:c,distance:o,orthographicSize:s,easing:u.animationEasingUpdate,duration:u.animationDurationUpdate}):(this.setDistance(o),this.setAlpha(h),this.setBeta(f),this.setCenter(c),this.setOrthographicSize(s)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var r=this.zr,i=this,n={},a={};return e.distance!=null&&(n.distance=this.getDistance(),a.distance=e.distance),e.orthographicSize!=null&&(n.orthographicSize=this.getOrthographicSize(),a.orthographicSize=e.orthographicSize),e.alpha!=null&&(n.alpha=this.getAlpha(),a.alpha=e.alpha),e.beta!=null&&(n.beta=this.getBeta(),a.beta=e.beta),e.center!=null&&(n.center=this.getCenter(),a.center=e.center),this._addAnimator(r.animation.animate(n).when(e.duration||1e3,a).during(function(){n.alpha!=null&&i.setAlpha(n.alpha),n.beta!=null&&i.setBeta(n.beta),n.distance!=null&&i.setDistance(n.distance),n.center!=null&&i.setCenter(n.center),n.orthographicSize!=null&&i.setOrthographicSize(n.orthographicSize),i._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var r=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=r*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),!!this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var r=this._rotateVelocity;this._phi=r.y*e/20+this._phi,this._theta=r.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(r,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var r=this.getCamera(),i=this._orthoSize,n=i/this.viewGL.viewport.height*this.viewGL.viewport.width;r.left=-n/2,r.right=n/2,r.top=i/2,r.bottom=-i/2},_updatePan:function(e){var r=this._panVelocity,i=this._distance,n=this.getCamera(),a=n.worldTransform.y,o=n.worldTransform.x;this._center.scaleAndAdd(o,-r.x*i/200).scaleAndAdd(a,-r.y*i/200),this._vectorDamping(r,0)},_updateTransform:function(){var e=this.getCamera(),r=new O,i=this._theta+Math.PI/2,n=this._phi+Math.PI/2,a=Math.sin(i);r.x=a*Math.cos(n),r.y=-Math.cos(i),r.z=a*Math.sin(n),e.position.copy(this._center).scaleAndAdd(r,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,r=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){r._rotating=!0},e*1e3))},_vectorDamping:function(e,r){var i=e.len();i=i*r,i<1e-4&&(i=0),e.normalize().scale(i)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,r=Math.asin(e.y),i=Math.atan2(e.x,e.z);this._theta=r,this._phi=-i,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var r=e.offsetX,i=e.offsetY;this.viewGL&&!this.viewGL.containPoint(r,i)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===zo[this.rotateMouseButton]?this._mode="rotate":e.event.button===zo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var r=Ho(this.panSensitivity),i=Ho(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*i[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*i[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*r[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*r[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var r=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,r)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,r){if(r!==0){var i=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(i,n))){var a;this._projection==="perspective"?a=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):a=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(r>0?-1:1)*a*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var r=this._animators;return r.push(e),e.done(function(){var i=r.indexOf(e);i>=0&&r.splice(i,1)}),e}});Object.defineProperty(Vo.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var $i=Vo,oi={convertToDynamicArray:function(e){e&&this.resetOffset();var r=this.attributes;for(var i in r)e||!r[i].value?r[i].value=[]:r[i].value=Array.prototype.slice.call(r[i].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var r in e)e[r].value&&e[r].value.length>0?e[r].value=new Float32Array(e[r].value):e[r].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},kh={vec2:Z,vec3:A,vec4:z,mat2:Pe,mat2d:Be,mat3:oe,mat4:I,quat:J},Ie=kh,Qn=Ie.vec3,Wo=[[0,0],[1,1]],ko=he.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new he.Attribute("position","float",3,"POSITION"),positionPrev:new he.Attribute("positionPrev","float",3),positionNext:new he.Attribute("positionNext","float",3),prevPositionPrev:new he.Attribute("prevPositionPrev","float",3),prevPosition:new he.Attribute("prevPosition","float",3),prevPositionNext:new he.Attribute("prevPositionNext","float",3),offset:new he.Attribute("offset","float",1),color:new he.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var r=this.attributes;this.vertexCount!==e&&(r.position.init(e),r.color.init(e),this.useNativeLine||(r.positionPrev.init(e),r.positionNext.init(e),r.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,r,i,n){var a=Qn.dist(e,r)+Qn.dist(i,r)+Qn.dist(n,i),o=1/(a+1)*this.segmentScale;return o},getCubicCurveVertexCount:function(e,r,i,n){var a=this._getCubicCurveApproxStep(e,r,i,n),o=Math.ceil(1/a);return this.useNativeLine?o*2:o*2+2},getCubicCurveTriangleCount:function(e,r,i,n){var a=this._getCubicCurveApproxStep(e,r,i,n),o=Math.ceil(1/a);return this.useNativeLine?0:o*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Wo)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Wo)},getPolylineVertexCount:function(e){var r;if(typeof e=="number")r=e;else{var i=typeof e[0]!="number";r=i?e.length:e.length/3}return this.useNativeLine?(r-1)*2:(r-1)*2+2},getPolylineTriangleCount:function(e){var r;if(typeof e=="number")r=e;else{var i=typeof e[0]!="number";r=i?e.length:e.length/3}return this.useNativeLine?0:Math.max(r-1,0)*2},addCubicCurve:function(e,r,i,n,a,o){o==null&&(o=1);for(var s=e[0],l=e[1],u=e[2],h=r[0],f=r[1],c=r[2],d=i[0],v=i[1],p=i[2],m=n[0],g=n[1],_=n[2],y=this._getCubicCurveApproxStep(e,r,i,n),S=y*y,x=S*y,E=3*y,D=3*S,L=6*S,b=6*x,M=s-h*2+d,N=l-f*2+v,C=u-c*2+p,B=(h-d)*3-s+m,P=(f-v)*3-l+g,j=(c-p)*3-u+_,G=s,H=l,V=u,U=(h-s)*E+M*D+B*x,de=(f-l)*E+N*D+P*x,W=(c-u)*E+C*D+j*x,Ee=M*L+B*b,fe=N*L+P*b,ye=C*L+j*b,be=B*b,ae=P*b,et=j*b,Ce=0,Oe=0,rt=Math.ceil(1/y),Ye=new Float32Array((rt+1)*3),Ye=[],qe=0,Oe=0;Oe<rt+1;Oe++)Ye[qe++]=G,Ye[qe++]=H,Ye[qe++]=V,G+=U,H+=de,V+=W,U+=Ee,de+=fe,W+=ye,Ee+=be,fe+=ae,ye+=et,Ce+=y,Ce>1&&(G=U>0?Math.min(G,m):Math.max(G,m),H=de>0?Math.min(H,g):Math.max(H,g),V=W>0?Math.min(V,_):Math.max(V,_));return this.addPolyline(Ye,a,o)},addLine:function(e,r,i,n){return this.addPolyline([e,r],i,n)},addPolyline:function(e,r,i,n,a){if(!!e.length){var o=typeof e[0]!="number";if(a==null&&(a=o?e.length:e.length/3),!(a<2)){n==null&&(n=0),i==null&&(i=1),this._itemVertexOffsets.push(this._vertexOffset);var o=typeof e[0]!="number",s=o?typeof r[0]!="number":r.length/4===a,l=this.attributes.position,u=this.attributes.positionPrev,h=this.attributes.positionNext,f=this.attributes.color,c=this.attributes.offset,d=this.indices,v=this._vertexOffset,p,m;i=Math.max(i,.01);for(var g=n;g<a;g++){if(o)p=e[g],s?m=r[g]:m=r;else{var _=g*3;if(p=p||[],p[0]=e[_],p[1]=e[_+1],p[2]=e[_+2],s){var y=g*4;m=m||[],m[0]=r[y],m[1]=r[y+1],m[2]=r[y+2],m[3]=r[y+3]}else m=r}if(this.useNativeLine?g>1&&(l.copy(v,v-1),f.copy(v,v-1),v++):(g<a-1&&(u.set(v+2,p),u.set(v+3,p)),g>0&&(h.set(v-2,p),h.set(v-1,p)),l.set(v,p),l.set(v+1,p),f.set(v,m),f.set(v+1,m),c.set(v,i/2),c.set(v+1,-i/2),v+=2),this.useNativeLine)f.set(v,m),l.set(v,p),v++;else if(g>0){var S=this._triangleOffset*3,d=this.indices;d[S]=v-4,d[S+1]=v-3,d[S+2]=v-2,d[S+3]=v-3,d[S+4]=v-1,d[S+5]=v-2,this._triangleOffset+=2}}if(!this.useNativeLine){var x=this._vertexOffset,E=this._vertexOffset+a*2;u.copy(x,x+2),u.copy(x+1,x+3),h.copy(E-1,E-3),h.copy(E-2,E-4)}return this._vertexOffset=v,this._vertexOffset}}},setItemColor:function(e,r){for(var i=this._itemVertexOffsets[e],n=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,a=i;a<n;a++)this.attributes.color.set(a,r);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});w.y.defaults(ko.prototype,oi);var fr=ko;function en(t,e,r,i,n,a,o){this._zr=t,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=e,this.offsetY=r,this.dpr=o,this.gap=a}en.prototype={constructor:en,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,r,i){var n=e.getBoundingRect();r==null&&(r=n.width),i==null&&(i=n.height),r*=this.dpr,i*=this.dpr,this._fitElement(e,r,i);var a=this._x,o=this._y,s=this.width*this.dpr,l=this.height*this.dpr,u=this.gap;if(a+r+u>s&&(a=this._x=0,o+=this._rowHeight+u,this._y=o,this._rowHeight=0),this._x+=r+u,this._rowHeight=Math.max(this._rowHeight,i),o+i+u>l)return null;e.x+=this.offsetX*this.dpr+a,e.y+=this.offsetY*this.dpr+o,this._zr.add(e);var h=[this.offsetX/this.width,this.offsetY/this.height],f=[[a/s+h[0],o/l+h[1]],[(a+r)/s+h[0],(o+i)/l+h[1]]];return f},_fitElement:function(e,r,i){var n=e.getBoundingRect(),a=r/n.width,o=i/n.height;e.x=-n.x*a,e.y=-n.y*o,e.scaleX=a,e.scaleY=o,e.update()}};function Xo(t){t=t||{},t.width=t.width||512,t.height=t.height||512,t.devicePixelRatio=t.devicePixelRatio||1,t.gap=t.gap==null?2:t.gap;var e=document.createElement("canvas");e.width=t.width*t.devicePixelRatio,e.height=t.height*t.devicePixelRatio,this._canvas=e,this._texture=new ee({image:e,flipY:!1});var r=this;this._zr=w.z.init(e);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=t.devicePixelRatio,this._coords={},this.onupdate=t.onupdate,this._gap=t.gap,this._textureAtlasNodes=[new en(this._zr,0,0,t.width,t.height,this._gap,this._dpr)],this._nodeWidth=t.width,this._nodeHeight=t.height,this._currentNodeIdx=0}Xo.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,r=this._textureAtlasNodes,i=r.length,n=i*this._nodeWidth%e,a=Math.floor(i*this._nodeWidth/e)*this._nodeHeight;if(!(a>=e)){var o=(n+this._nodeWidth)*this._dpr,s=(a+this._nodeHeight)*this._dpr;try{this._zr.resize({width:o,height:s})}catch(u){this._canvas.width=o,this._canvas.height=s}var l=new en(this._zr,n,a,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(l),l}},add:function(e,r,i){if(this._coords[e.id])return this._coords[e.id];var n=this._getCurrentNode().add(e,r,i);if(!n){var a=this._expand();if(!a)return;n=a.add(e,r,i)}return this._coords[e.id]=n,n},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};var Jn=Xo;function $n(){}$n.prototype={constructor:$n,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new T.DirectionalLight({shadowBias:.005}),this.ambientLight=new T.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var r=this.mainLight,i=this.ambientLight,n=e.getModel("light"),a=n.getModel("main"),o=n.getModel("ambient");r.intensity=a.get("intensity"),i.intensity=o.get("intensity"),r.color=T.parseColor(a.get("color")).slice(0,3),i.color=T.parseColor(o.get("color")).slice(0,3);var s=a.get("alpha")||0,l=a.get("beta")||0;r.position.setArray(T.directionFromAlphaBeta(s,l)),r.lookAt(T.Vector3.ZERO),r.castShadow=a.get("shadow"),r.shadowResolution=T.getShadowResolution(a.get("shadowQuality"))},updateAmbientCubemap:function(e,r,i){var n=r.getModel("light.ambientCubemap"),a=n.get("texture");if(a){this._cubemapLightsCache=this._cubemapLightsCache||{};var o=this._cubemapLightsCache[a];if(!o){var s=this;o=this._cubemapLightsCache[a]=T.createAmbientCubemap(n.option,e,i,function(){s._isSkyboxFromAmbientCubemap&&s._skybox.setEnvironmentMap(o.specular.cubemap),i.getZr().refresh()})}this._lightRoot.add(o.diffuse),this._lightRoot.add(o.specular),this._currentCubemapLights=o}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,r,i){var n=r.get("environment"),a=this;function o(){return a._skybox=a._skybox||new zi,a._skybox}var s=o();if(n&&n!=="none")if(n==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var l=this._currentCubemapLights.specular.cubemap;s.setEnvironmentMap(l),this._scene&&s.attachScene(this._scene),s.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof n=="object"&&n.colorStops||typeof n=="string"&&w.h.parse(n)){this._isSkyboxFromAmbientCubemap=!1;var u=new T.Texture2D({anisotropic:8,flipY:!1});s.setEnvironmentMap(u);var h=u.image=document.createElement("canvas");h.width=h.height=16;var f=h.getContext("2d"),c=new w.n.Rect({shape:{x:0,y:0,width:16,height:16},style:{fill:n}});w.p(f,c),s.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var u=T.loadTexture(n,i,{anisotropic:8,flipY:!1});s.setEnvironmentMap(u),s.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=r.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&n!=="auto"&&!(n.match&&n.match(/.hdr$/))){var v=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[v]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Fr=$n,cr=Ie.vec3,jo=he.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new he.Attribute("position","float",3,"POSITION"),normal:new he.Attribute("normal","float",3,"NORMAL"),color:new he.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var r=this.attributes,i=this.getQuadVertexCount()*e,n=this.getQuadTriangleCount()*e;this.vertexCount!==i&&(r.position.init(i),r.normal.init(i),r.color.init(i)),this.triangleCount!==n&&(this.indices=i>65535?new Uint32Array(n*3):new Uint16Array(n*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var t=cr.create(),e=cr.create(),r=cr.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;cr.sub(t,n[1],n[0]),cr.sub(e,n[2],n[1]),cr.cross(r,t,e),cr.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});w.y.defaults(jo.prototype,oi);var Xh=jo,ea=re.firstNotNull,jh={x:0,y:2,z:1};function Zh(t,e,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[jh[r.dim]]=a,t.position.setArray(n),t.rotation.identity(),e.distance=-Math.abs(a),e.normal.set(0,0,0),r.dim==="x"?(t.rotation.rotateY(i*Math.PI/2),e.normal.x=-i):r.dim==="z"?(t.rotation.rotateX(-i*Math.PI/2),e.normal.y=-i):(i>0&&t.rotation.rotateY(Math.PI),e.normal.z=-i)}function tn(t,e,r){this.rootNode=new T.Node;var i=new T.Mesh({geometry:new fr({useNativeLine:!1}),material:e,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new T.Mesh({geometry:new Xh,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=t,this.plane=new T.Plane,this.linesMesh=i,this.quadsMesh=n}tn.prototype.update=function(t,e,r){var i=t.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,t,r),this._udpateSplitAreas(o,n,t,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);Zh(this.rootNode,this.plane,s,this.faceInfo[3])},tn.prototype._updateSplitLines=function(t,e,r,i){var n=i.getDevicePixelRatio();e.forEach(function(a,o){var s=a.model,l=e[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),f=h.get("color"),c=ea(h.get("opacity"),1),d=ea(h.get("width"),1);f=w.y.isArray(f)?f:[f];for(var v=a.getTicksCoords({tickModel:u}),p=0,m=0;m<v.length;m++){var g=v[m].coord,_=T.parseColor(f[p%f.length]);_[3]*=c;var y=[0,0,0],S=[0,0,0];y[o]=S[o]=g,y[1-o]=l[0],S[1-o]=l[1],t.addLine(y,S,_,d*n),p++}}}})},tn.prototype._udpateSplitAreas=function(t,e,r,i){e.forEach(function(n,a){var o=n.model,s=e[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),f=ea(u.get("opacity"),1);h=w.y.isArray(h)?h:[h];for(var c=n.getTicksCoords({tickModel:l,clamp:!0}),d=0,v=[0,0,0],p=[0,0,0],m=0;m<c.length;m++){var g=c[m].coord,_=[0,0,0],y=[0,0,0];if(_[a]=y[a]=g,_[1-a]=s[0],y[1-a]=s[1],m===0){v=_,p=y;continue}var S=T.parseColor(h[d%h.length]);S[3]*=f,t.addQuad([v,_,y,p],S),v=_,p=y,d++}}}})};var Yh=tn,Zo=[0,1,2,0,2,3],Yo=he.extend(function(){return{attributes:{position:new he.Attribute("position","float",3,"POSITION"),texcoord:new he.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new he.Attribute("offset","float",2),color:new he.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var r=e*4,i=e*2;this.vertexCount!==r&&(this.attributes.position.init(r),this.attributes.offset.init(r),this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},setSpriteAlign:function(e,r,i,n,a){i==null&&(i="left"),n==null&&(n="top");var o,s,l,u;switch(a=a||0,i){case"left":o=a,l=r[0]+a;break;case"center":case"middle":o=-r[0]/2,l=r[0]/2;break;case"right":o=-r[0]-a,l=-a;break}switch(n){case"bottom":s=a,u=r[1]+a;break;case"middle":s=-r[1]/2,u=r[1]/2;break;case"top":s=-r[1]-a,u=-a;break}var h=e*4,f=this.attributes.offset;f.set(h,[o,u]),f.set(h+1,[l,u]),f.set(h+2,[l,s]),f.set(h+3,[o,s])},addSprite:function(e,r,i,n,a,o){var s=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,r,i,n,a,o);for(var l=0;l<Zo.length;l++)this.indices[this._faceOffset*3+l]=Zo[l]+s;return this._faceOffset+=2,this._vertexOffset+=4,s/4},setSprite:function(e,r,i,n,a,o,s){for(var l=e*4,u=this.attributes,h=0;h<4;h++)u.position.set(l+h,r);var f=u.texcoord;f.set(l,[n[0][0],n[0][1]]),f.set(l+1,[n[1][0],n[0][1]]),f.set(l+2,[n[1][0],n[1][1]]),f.set(l+3,[n[0][0],n[1][1]]),this.setSpriteAlign(e,i,a,o,s)}});w.y.defaults(Yo.prototype,oi);var qh=Yo,Kh=`@export ecgl.labels.vertex

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

@end`;T.Shader.import(Kh);var ta=T.Mesh.extend(function(){var t=new qh({dynamic:!0}),e=new T.Material({shader:T.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:t,material:e,culling:!1,castShadow:!1,ignorePicking:!0}}),dr=re.firstNotNull,vr={x:0,y:2,z:1};function ra(t,e){var r=new T.Mesh({geometry:new fr({useNativeLine:!1}),material:e,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new ta;i.material.depthMask=!1;var n=new T.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=t,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var ia={x:"y",y:"x",z:"y"};ra.prototype.update=function(t,e,r){var i=t.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),u=r.getDevicePixelRatio(),h=s.getModel("axisLine",t.getModel("axisLine")),f=s.getModel("axisTick",t.getModel("axisTick")),c=s.getModel("axisLabel",t.getModel("axisLabel")),d=h.get("lineStyle.color");if(h.get("show")){var v=h.getModel("lineStyle"),p=[0,0,0],m=[0,0,0],g=vr[n.dim];p[g]=l[0],m[g]=l[1],this.axisLineCoords=[p,m];var _=T.parseColor(d),y=dr(v.get("width"),1),S=dr(v.get("opacity"),1);_[3]*=S,a.addLine(p,m,_,y*u)}if(f.get("show")){var x=f.getModel("lineStyle"),E=T.parseColor(dr(x.get("color"),d)),y=dr(x.get("width"),1);E[3]*=dr(x.get("opacity"),1);for(var D=n.getTicksCoords(),L=f.get("length"),b=0;b<D.length;b++){var M=D[b].coord,p=[0,0,0],m=[0,0,0],g=vr[n.dim],N=vr[ia[n.dim]];p[g]=m[g]=M,m[N]=L,a.addLine(p,m,E,y*u)}}this.labelElements=[];var u=r.getDevicePixelRatio();if(c.get("show"))for(var D=n.getTicksCoords(),C=s.get("data"),B=c.get("margin"),P=n.getViewLabels(),b=0;b<P.length;b++){var j=P[b].tickValue,G=P[b].formattedLabel,H=P[b].rawLabel,M=n.dataToCoord(j),V=[0,0,0],g=vr[n.dim],N=vr[ia[n.dim]];V[g]=V[g]=M,V[N]=B;var U=c;C&&C[j]&&C[j].textStyle&&(U=new w.f(C[j].textStyle,c,s.ecModel));var de=dr(U.get("color"),d),W=new w.n.Text({style:Object(Ji.c)(U,{text:G,fill:typeof de=="function"?de(n.type==="category"?H:n.type==="value"?j+"":j,b):de,verticalAlign:"top",align:"left"})}),Ee=e.add(W),fe=W.getBoundingRect();o.addSprite(V,[fe.width*u,fe.height*u],Ee),this.labelElements.push(W)}if(s.get("name")){var ye=s.getModel("nameTextStyle"),V=[0,0,0],g=vr[n.dim],N=vr[ia[n.dim]],be=dr(ye.get("color"),d),ae=ye.get("borderColor"),y=ye.get("borderWidth");V[g]=V[g]=(l[0]+l[1])/2,V[N]=s.get("nameGap");var W=new w.n.Text({style:Object(Ji.c)(ye,{text:s.get("name"),fill:be,stroke:ae,lineWidth:y})}),Ee=e.add(W),fe=W.getBoundingRect();o.addSprite(V,[fe.width*u,fe.height*u],Ee),W.__idx=this.labelElements.length,this.nameLabelElement=W}this.labelsMesh.material.set("textureAtlas",e.getTexture()),this.labelsMesh.material.set("uvScale",e.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()},ra.prototype.setSpriteAlign=function(t,e,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],t,e)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],t,e),n.dirty()}this.textAlign=t,this.textVerticalAlign=e};var Qh=ra,rn=`@export ecgl.lines3D.vertex

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

@end`,qo=re.firstNotNull;T.Shader.import(rn);var pr={x:0,y:2,z:1},Jh=w.d.extend({type:"grid3D",__ecgl__:!0,init:function(e,r){var i=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],n=["x","y","z"],a=new T.Material({shader:T.createShader("ecgl.color"),depthMask:!1,transparent:!0}),o=new T.Material({shader:T.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});a.define("fragment","DOUBLE_SIDED"),a.define("both","VERTEX_COLOR"),this.groupGL=new T.Node,this._control=new $i({zr:r.getZr()}),this._control.init(),this._faces=i.map(function(l){var u=new Yh(l,o,a);return this.groupGL.add(u.rootNode),u},this),this._axes=n.map(function(l){var u=new Qh(l,o);return this.groupGL.add(u.rootNode),u},this);var s=r.getDevicePixelRatio();this._axisLabelSurface=new Jn({width:256,height:256,devicePixelRatio:s}),this._axisLabelSurface.onupdate=function(){r.getZr().refresh()},this._axisPointerLineMesh=new T.Mesh({geometry:new fr({useNativeLine:!1}),material:o,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Jn({width:128,height:128,devicePixelRatio:s}),this._axisPointerLabelsMesh=new ta({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new T.Node,this._sceneHelper=new Fr,this._sceneHelper.initLight(this._lightRoot)},render:function(e,r,i){this._model=e,this._api=i;var n=e.coordinateSystem;n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var a=this._control;a.setViewGL(n.viewGL);var o=e.getModel("viewControl");a.setFromViewControlModel(o,0),this._axisLabelSurface.clear(),a.off("update"),e.get("show")&&(this._faces.forEach(function(s){s.update(e,r,i)},this),this._axes.forEach(function(s){s.update(e,this._axisLabelSurface,i)},this)),a.on("update",this._onCameraChange.bind(this,e,i),this),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(e),n.viewGL.setPostEffect(e.getModel("postEffect"),i),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,r,i,n){var a=n.renderer;this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i)},showAxisPointer:function(e,r,i,n){this._doShowAxisPointer(),this._updateAxisPointer(n.value)},hideAxisPointer:function(e,r,i,n){this._doHideAxisPointer()},_initMouseHandler:function(e){var r=e.coordinateSystem,i=r.viewGL;e.get("show")&&e.get("axisPointer.show")?i.on("mousemove",this._updateAxisPointerOnMousePosition,this):i.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var r=this._model,i=r.coordinateSystem,n=i.viewGL,a=n.castRay(e.offsetX,e.offsetY,new T.Ray),o,s=0;s<this._faces.length;s++){var l=this._faces[s];if(!l.rootNode.invisible){l.plane.normal.dot(n.camera.worldTransform.z)<0&&l.plane.normal.negate();var u=a.intersectPlane(l.plane);if(!!u){var h=i.getAxis(l.faceInfo[0]),f=i.getAxis(l.faceInfo[1]),c=pr[l.faceInfo[0]],d=pr[l.faceInfo[1]];h.contain(u.array[c])&&f.contain(u.array[d])&&(o=u)}}}if(o){var v=i.pointToData(o.array,[],!0);this._updateAxisPointer(v),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,r){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var i=this._control;r.dispatchAction({type:"grid3DChangeCamera",alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),center:i.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),r=new T.Vector3;e.update();for(var i=0;i<this._faces.length/2;i++){for(var n=[],a=0;a<2;a++){var o=this._faces[i*2+a];o.rootNode.getWorldPosition(r),r.transformMat4(e.viewMatrix),n[a]=r.z}var s=n[0]>n[1]?0:1,l=this._faces[i*2+s],u=this._faces[i*2+1-s];l.rootNode.invisible=!0,u.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,r=e.getAxis("x"),i=e.getAxis("y"),n=e.getAxis("z"),a=n.getExtentMax(),o=n.getExtentMin(),s=r.getExtentMin(),l=r.getExtentMax(),u=i.getExtentMax(),h=i.getExtentMin(),f=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,v=this._faces,p=v[4].rootNode.invisible?h:u,m=v[2].rootNode.invisible?a:o,g=v[0].rootNode.invisible?s:l,_=v[2].rootNode.invisible?a:o,y=v[0].rootNode.invisible?l:s,S=v[4].rootNode.invisible?h:u;f.rotation.identity(),c.rotation.identity(),d.rotation.identity(),v[4].rootNode.invisible&&(this._axes[0].flipped=!0,f.rotation.rotateX(Math.PI)),v[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),v[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),f.position.set(0,m,p),c.position.set(g,_,0),d.position.set(y,0,S),f.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),r=[new T.Vector4,new T.Vector4],i=new T.Vector4;this.groupGL.getWorldPosition(i),i.w=1,i.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),i.x/=i.w,i.y/=i.w,this._axes.forEach(function(n){for(var a=n.axisLineCoords,o=n.labelsMesh.geometry,s=0;s<r.length;s++)r[s].setArray(a[s]),r[s].w=1,r[s].transformMat4(n.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r[s].x/=r[s].w,r[s].y/=r[s].w;var l=r[1].x-r[0].x,u=r[1].y-r[0].y,h=(r[1].x+r[0].x)/2,f=(r[1].y+r[0].y)/2,c,d;Math.abs(u/l)<.5?(c="center",d=f>i.y?"bottom":"top"):(d="middle",c=h>i.x?"left":"right"),n.setSpriteAlign(c,d,this._api)},this)},_doShowAxisPointer:function(){!this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var r=this._model.coordinateSystem,i=r.dataToPoint(e),n=this._axisPointerLineMesh,a=n.geometry,o=this._model.getModel("axisPointer"),s=this._api.getDevicePixelRatio();a.convertToDynamicArray(!0);function l(b){return re.firstNotNull(b.model.get("axisPointer.show"),o.get("show"))}function u(b){var M=b.model.getModel("axisPointer",o),N=M.getModel("lineStyle"),C=T.parseColor(N.get("color")),B=qo(N.get("width"),1),P=qo(N.get("opacity"),1);return C[3]*=P,{color:C,lineWidth:B}}for(var h=0;h<this._faces.length;h++){var f=this._faces[h];if(!f.rootNode.invisible){for(var c=f.faceInfo,d=c[3]<0?r.getAxis(c[2]).getExtentMin():r.getAxis(c[2]).getExtentMax(),v=pr[c[2]],p=0;p<2;p++){var m=c[p],g=c[1-p],_=r.getAxis(m),y=r.getAxis(g);if(!!l(_)){var S=[0,0,0],x=[0,0,0],E=pr[m],D=pr[g];S[E]=x[E]=i[E],S[v]=x[v]=d,S[D]=y.getExtentMin(),x[D]=y.getExtentMax();var L=u(_);a.addLine(S,x,L.color,L.lineWidth*s)}}if(l(r.getAxis(c[2]))){var S=i.slice(),x=i.slice();x[v]=d;var L=u(r.getAxis(c[2]));a.addLine(S,x,L.color,L.lineWidth*s)}}}a.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var r=this._model,i=this._axisPointerLabelsMesh,n=this._axisPointerLabelsSurface,a=r.coordinateSystem,o=r.getModel("axisPointer");i.geometry.convertToDynamicArray(!0),n.clear();var s={x:"y",y:"x",z:"y"};this._axes.forEach(function(l,u){var h=a.getAxis(l.dim),f=h.model,c=f.getModel("axisPointer",o),d=c.getModel("label"),v=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var p=e[u],m=d.get("formatter"),g=h.scale.getLabel({value:p});if(m!=null)g=m(g,e);else if(h.scale.type==="interval"||h.scale.type==="log"){var _=w.q.getPrecisionSafe(h.scale.getTicks()[0]);g=p.toFixed(_+2)}var y=d.get("color"),S=new w.n.Text({style:Object(Ji.c)(d,{text:g,fill:y||v,align:"left",verticalAlign:"top"})}),x=n.add(S),E=S.getBoundingRect(),D=this._api.getDevicePixelRatio(),L=l.rootNode.position.toArray(),b=pr[s[l.dim]];L[b]+=(l.flipped?-1:1)*d.get("margin"),L[pr[l.dim]]=h.dataToCoord(e[u]),i.geometry.addSprite(L,[E.width*D,E.height*D],x,l.textAlign,l.textVerticalAlign)}},this),n.getZr().refreshImmediately(),i.material.set("uvScale",n.getCoordsScale()),i.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}}),Ko=Y("z35g");function nn(t){Ko.a.call(this,t),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}nn.prototype={constructor:nn,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,r,i){return r=r||[],r[0]=this.getAxis("x").dataToCoord(e[0],i),r[2]=this.getAxis("y").dataToCoord(e[1],i),r[1]=this.getAxis("z").dataToCoord(e[2],i),r},pointToData:function(e,r,i){return r=r||[],r[0]=this.getAxis("x").coordToData(e[0],i),r[1]=this.getAxis("y").coordToData(e[2],i),r[2]=this.getAxis("z").coordToData(e[1],i),r}},w.y.inherits(nn,Ko.a);var Qo=nn;function an(t,e,r){w.a.call(this,t,e,r)}an.prototype={constructor:an,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}},w.y.inherits(an,w.a);var $h=an,on=Y("+TT/"),na=function(){this._pool={},this._allocatedTextures=[]};na.prototype={constructor:na,get:function(e){var r=$o(e);this._pool.hasOwnProperty(r)||(this._pool[r]=[]);var i=this._pool[r];if(!i.length){var n=new ee(e);return this._allocatedTextures.push(n),n}return i.pop()},put:function(e){var r=$o(e);this._pool.hasOwnProperty(r)||(this._pool[r]=[]);var i=this._pool[r];i.push(e)},clear:function(e){for(var r=0;r<this._allocatedTextures.length;r++)this._allocatedTextures[r].dispose(e);this._pool={},this._allocatedTextures=[]}};var Jo={width:512,height:512,type:R.UNSIGNED_BYTE,format:R.RGBA,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE,minFilter:R.LINEAR_MIPMAP_LINEAR,magFilter:R.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},aa=Object.keys(Jo);function $o(t){Ke.defaultsWithPropList(t,Jo,aa),ef(t);for(var e="",r=0;r<aa.length;r++){var i=aa[r],n=t[i].toString();e+=n}return e}function ef(t){var e=tf(t.width,t.height);t.format===R.DEPTH_COMPONENT&&(t.useMipmap=!1),(!e||!t.useMipmap)&&(t.minFilter==R.NEAREST_MIPMAP_NEAREST||t.minFilter==R.NEAREST_MIPMAP_LINEAR?t.minFilter=R.NEAREST:(t.minFilter==R.LINEAR_MIPMAP_LINEAR||t.minFilter==R.LINEAR_MIPMAP_NEAREST)&&(t.minFilter=R.LINEAR)),e||(t.wrapS=R.CLAMP_TO_EDGE,t.wrapT=R.CLAMP_TO_EDGE)}function tf(t,e){return(t&t-1)==0&&(e&e-1)==0}var es=na,rf=`@export clay.sm.depth.vertex
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
@end`,Yt=["px","nx","py","ny","pz","nz"];F.import(rf);function oa(t,e,r){if(r==="alphaMap")return t.material.get("diffuseMap");if(r==="alphaCutoff"){if(t.material.isDefined("fragment","ALPHA_TEST")&&t.material.get("diffuseMap")){var i=t.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?t.material.get("uvRepeat"):r==="uvOffset"?t.material.get("uvOffset"):e.get(r)}function ts(t,e){var r=t.material,i=e.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var Nt=nt.extend(function(){return{softShadow:Nt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Xe,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new es}},function(){this._gaussianPassH=new Ne({fragment:F.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Ne({fragment:F.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Ne({fragment:F.source("clay.sm.debug_depth")})},{render:function(e,r,i,n){i||(i=r.getMainCamera()),this.trigger("beforerender",this,e,r,i),this._renderShadowPass(e,r,i,n),this.trigger("afterrender",this,e,r,i)},renderDebug:function(e,r){e.saveClear();var i=e.viewport,n=0,a=0,o=r||i.width/4,s=o;this.softShadow===Nt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var l in this._textures){var u=this._textures[l];e.setViewport(n,a,o*u.width/u.height,s),this._outputDepthPass.setUniform("depthMap",u),this._outputDepthPass.render(e),n+=o*u.width/u.height}e.setViewport(i),e.restoreClear()},_updateReceivers:function(e,r){if(r.receiveShadow?(this._receivers.push(r),r.material.set("shadowEnabled",1),r.material.set("pcfKernel",this.kernelPCF)):r.material.set("shadowEnabled",0),this.softShadow===Nt.VSM)r.material.define("fragment","USE_VSM"),r.material.undefine("fragment","PCF_KERNEL_SIZE");else{r.material.undefine("fragment","USE_VSM");var i=this.kernelPCF;i&&i.length?r.material.define("fragment","PCF_KERNEL_SIZE",i.length/2):r.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,r){var i=this;r.traverse(function(o){o.isRenderable()&&i._updateReceivers(e,o)});for(var n=0;n<r.lights.length;n++){var a=r.lights[n];a.castShadow&&!a.invisible&&this._lightsCastShadow.push(a)}},_renderShadowPass:function(e,r,i,n){for(var a in this._shadowMapNumber)this._shadowMapNumber[a]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var o=e.gl;if(n||r.update(),i&&i.update(),r.updateLights(),this._update(e,r),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,o.enable(o.DEPTH_TEST),o.depthMask(!0),o.disable(o.BLEND),o.clearColor(1,1,1,1);for(var s=[],l=[],u=[],h=[],f=[],c=[],d,v=0;v<this._lightsCastShadow.length;v++){var p=this._lightsCastShadow[v];if(p.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(p.shadowCascade>4){console.warn("Support at most 4 cascade");continue}p.shadowCascade>1&&(d=p),this.renderDirectionalLightShadow(e,r,i,p,f,h,u)}else p.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,r,p,l,s):p.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,r,p,c);this._shadowMapNumber[p.type]++}for(var m in this._shadowMapNumber)for(var g=this._shadowMapNumber[m],_=m+"_SHADOWMAP_COUNT",v=0;v<this._receivers.length;v++){var y=this._receivers[v],S=y.material;S.fragmentDefines[_]!==g&&(g>0?S.define("fragment",_,g):S.isDefined("fragment",_)&&S.undefine("fragment",_))}for(var v=0;v<this._receivers.length;v++){var y=this._receivers[v],S=y.material;d?S.define("fragment","SHADOW_CASCADE",d.shadowCascade):S.undefine("fragment","SHADOW_CASCADE")}var x=r.shadowUniforms;function E(N){return N.height}if(u.length>0){var D=u.map(E);if(x.directionalLightShadowMaps={value:u,type:"tv"},x.directionalLightMatrices={value:h,type:"m4v"},x.directionalLightShadowMapSizes={value:D,type:"1fv"},d){var L=f.slice(),b=f.slice();L.pop(),b.shift(),L.reverse(),b.reverse(),h.reverse(),x.shadowCascadeClipsNear={value:L,type:"1fv"},x.shadowCascadeClipsFar={value:b,type:"1fv"}}}if(s.length>0){var M=s.map(E),x=r.shadowUniforms;x.spotLightShadowMaps={value:s,type:"tv"},x.spotLightMatrices={value:l,type:"m4v"},x.spotLightShadowMapSizes={value:M,type:"1fv"}}c.length>0&&(x.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var t=new Un,e=new k,r=new at,i=new k,n=new k,a=new k,o=new k;return function(s,l,u,h,f,c,d){var v=this._getDepthMaterial(h),p={getMaterial:function(ye){return ye.shadowDepthMaterial||v},isMaterialChanged:ts,getUniform:oa,ifRender:function(ye){return ye.castShadow},sortCompare:qr.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var g=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),_=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),y=this._getDirectionalLightCamera(h,l,u),S=a.array;o.copy(y.projectionMatrix),I.invert(n.array,y.worldTransform.array),I.multiply(n.array,n.array,u.worldTransform.array),I.multiply(S,o.array,n.array);for(var x=[],E=u instanceof ke,D=(u.near+u.far)/(u.near-u.far),L=2*u.near*u.far/(u.near-u.far),b=0;b<=h.shadowCascade;b++){var M=_*Math.pow(g/_,b/h.shadowCascade),N=_+(g-_)*b/h.shadowCascade,C=M*h.cascadeSplitLogFactor+N*(1-h.cascadeSplitLogFactor);x.push(C),f.push(-(-C*D+L)/-C)}var B=this._getTexture(h,h.shadowCascade);d.push(B);var P=s.viewport,j=s.gl;this._frameBuffer.attach(B),this._frameBuffer.bind(s),j.clear(j.COLOR_BUFFER_BIT|j.DEPTH_BUFFER_BIT);for(var b=0;b<h.shadowCascade;b++){var G=x[b],H=x[b+1];E?I.perspective(e.array,u.fov/180*Math.PI,u.aspect,G,H):I.ortho(e.array,u.left,u.right,u.bottom,u.top,G,H),t.setFromProjection(e),t.getTransformedBoundingBox(r,n),r.applyProjection(o);var V=r.min.array,U=r.max.array;V[0]=Math.max(V[0],-1),V[1]=Math.max(V[1],-1),U[0]=Math.min(U[0],1),U[1]=Math.min(U[1],1),i.ortho(V[0],U[0],V[1],U[1],1,-1),y.projectionMatrix.multiplyLeft(i);var de=h.shadowResolution||512;s.setViewport((h.shadowCascade-b-1)*de,0,de,de,1);var W=l.updateRenderList(y);s.renderPass(W.opaque,y,p),this.softShadow===Nt.VSM&&this._gaussianFilter(s,B,B.width);var Ee=new k;Ee.copy(y.viewMatrix).multiplyLeft(y.projectionMatrix),c.push(Ee.array),y.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(P)}}(),renderSpotLightShadow:function(e,r,i,n,a){var o=this._getTexture(i),s=this._getSpotLightCamera(i),l=e.gl;this._frameBuffer.attach(o),this._frameBuffer.bind(e),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT);var u=this._getDepthMaterial(i),h={getMaterial:function(v){return v.shadowDepthMaterial||u},isMaterialChanged:ts,getUniform:oa,ifRender:function(v){return v.castShadow},sortCompare:qr.opaqueSortCompare},f=r.updateRenderList(s);e.renderPass(f.opaque,s,h),this._frameBuffer.unbind(e),this.softShadow===Nt.VSM&&this._gaussianFilter(e,o,o.width);var c=new k;c.copy(s.worldTransform).invert().multiplyLeft(s.projectionMatrix),a.push(o),n.push(c.array)},renderPointLightShadow:function(e,r,i,n){var a=this._getTexture(i),o=e.gl;n.push(a);var s=this._getDepthMaterial(i),l={getMaterial:function(S){return S.shadowDepthMaterial||s},getUniform:oa,sortCompare:qr.opaqueSortCompare},u={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},h=new at,f=i.getWorldPosition().array,c=new at,d=i.range;c.min.setArray(f),c.max.setArray(f);var v=new O(d,d,d);c.max.add(v),c.min.sub(v);var p={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};r.traverse(function(y){if(y.isRenderable()&&y.castShadow){var S=y.geometry;if(!S.boundingBox){for(var x=0;x<Yt.length;x++)u[Yt[x]].push(y);return}if(h.transformFrom(S.boundingBox,y.worldTransform),!h.intersectBoundingBox(c))return;h.updateVertices();for(var x=0;x<Yt.length;x++)p[Yt[x]]=!1;for(var x=0;x<8;x++){var E=h.vertices[x],D=E[0]-f[0],L=E[1]-f[1],b=E[2]-f[2],M=Math.abs(D),N=Math.abs(L),C=Math.abs(b);M>N?M>C?p[D>0?"px":"nx"]=!0:p[b>0?"pz":"nz"]=!0:N>C?p[L>0?"py":"ny"]=!0:p[b>0?"pz":"nz"]=!0}for(var x=0;x<Yt.length;x++)p[Yt[x]]&&u[Yt[x]].push(y)}});for(var m=0;m<6;m++){var g=Yt[m],_=this._getPointLightCamera(i,g);this._frameBuffer.attach(a,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+m),this._frameBuffer.bind(e),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),e.renderPass(u[g],_,l)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var r=this._lightMaterials[e.__uid__],i=e.type==="POINT_LIGHT";if(!r){var n=i?"clay.sm.distance.":"clay.sm.depth.";r=new Tt({precision:this.precision,shader:new F(F.source(n+"vertex"),F.source(n+"fragment"))}),this._lightMaterials[e.__uid__]=r}return e.shadowSlopeScale!=null&&r.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&r.setUniform("bias",e.shadowBias),this.softShadow===Nt.VSM?r.define("fragment","USE_VSM"):r.undefine("fragment","USE_VSM"),i&&(r.set("lightPosition",e.getWorldPosition().array),r.set("range",e.range)),r},_gaussianFilter:function(e,r,i){var n={width:i,height:i,type:X.FLOAT},a=this._texturePool.get(n);this._frameBuffer.attach(a),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",r),this._gaussianPassH.setUniform("textureWidth",i),this._gaussianPassH.render(e),this._frameBuffer.attach(r),this._gaussianPassV.setUniform("texture",a),this._gaussianPassV.setUniform("textureHeight",i),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(a)},_getTexture:function(e,r){var i=e.__uid__,n=this._textures[i],a=e.shadowResolution||512;return r=r||1,n||(e.type==="POINT_LIGHT"?n=new $r:n=new ee,n.width=a*r,n.height=a,this.softShadow===Nt.VSM?(n.type=X.FLOAT,n.anisotropic=4):(n.minFilter=R.NEAREST,n.magFilter=R.NEAREST,n.useMipmap=!1),this._textures[i]=n),n},_getPointLightCamera:function(e,r){this._lightCameras.point||(this._lightCameras.point={px:new ke,nx:new ke,py:new ke,ny:new ke,pz:new ke,nz:new ke});var i=this._lightCameras.point[r];switch(i.far=e.range,i.fov=90,i.position.set(0,0,0),r){case"px":i.lookAt(O.POSITIVE_X,O.NEGATIVE_Y);break;case"nx":i.lookAt(O.NEGATIVE_X,O.NEGATIVE_Y);break;case"py":i.lookAt(O.POSITIVE_Y,O.POSITIVE_Z);break;case"ny":i.lookAt(O.NEGATIVE_Y,O.NEGATIVE_Z);break;case"pz":i.lookAt(O.POSITIVE_Z,O.NEGATIVE_Y);break;case"nz":i.lookAt(O.NEGATIVE_Z,O.NEGATIVE_Y);break}return e.getWorldPosition(i.position),i.update(),i},_getDirectionalLightCamera:function(){var t=new k,e=new at,r=new at;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Ir);var o=this._lightCameras.directional;e.copy(n.viewBoundingBoxLastFrame),e.intersection(a.frustum.boundingBox),o.position.copy(e.min).add(e.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),k.invert(t,o.worldTransform),k.multiply(t,t,a.worldTransform),r.copy(e).applyTransform(t);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new ke);var r=this._lightCameras.spot;return r.fov=e.penumbraAngle*2,r.far=e.range,r.worldTransform.copy(e.worldTransform),r.updateProjectionMatrix(),I.invert(r.viewMatrix.array,r.worldTransform.array),r},dispose:function(e){var r=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(r);for(var i in this._textures)this._textures[i].dispose(r);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var a=this._receivers[n];if(a.material){var o=a.material;o.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),o.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),o.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),o.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Nt.VSM=1,Nt.PCF=2;var nf=Nt,af=nt.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,r){var i=this.outputs[e],n=i.parameters,a=i._parametersCopy;if(a||(a=i._parametersCopy={}),n)for(var o in n)o!=="width"&&o!=="height"&&(a[o]=n[o]);var s,l;return n.width instanceof Function?s=n.width.call(this,r):s=n.width,n.height instanceof Function?l=n.height.call(this,r):l=n.height,(a.width!==s||a.height!==l)&&this._outputTextures[e]&&this._outputTextures[e].dispose(r.gl),a.width=s,a.height=l,a},setParameter:function(e,r){},getParameter:function(e){},setParameters:function(e){for(var r in e)this.setParameter(r,e[r])},render:function(){},getOutput:function(e,r){if(r==null)return r=e,this._outputTextures[r];var i=this.outputs[r];if(!!i)return this._rendered?i.outputLastFrame?this._prevOutputTextures[r]:this._outputTextures[r]:this._rendering?(this._prevOutputTextures[r]||(this._prevOutputTextures[r]=this._compositor.allocateTexture(i.parameters||{})),this._prevOutputTextures[r]):(this.render(e),this._outputTextures[r])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var r=this.outputs[e];r.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,r,i){this.inputLinks[e]={node:r,pin:i},r.outputLinks[i]||(r.outputLinks[i]=[]),r.outputLinks[i].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var r in this.inputLinks){var i=this.inputLinks[r];i.node.updateReference(i.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var r=this.outputs[e];r.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),si=af,of=nt.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var r=this.nodes.indexOf(e);r>=0&&(this.nodes.splice(r,1),this._dirty=!0)},getNodeByName:function(e){for(var r=0;r<this.nodes.length;r++)if(this.nodes[r].name===e)return this.nodes[r]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var r=this.nodes[e];if(!!r.inputs){for(var i in r.inputs)if(!!r.inputs[i]){if(r.pass&&!r.pass.material.isUniformEnabled(i)){console.warn("Pin "+r.name+"."+i+" not used.");continue}var n=r.inputs[i],a=this.findPin(n);a?r.link(i,a.node,a.pin):typeof n=="string"?console.warn("Node "+n+" not exist"):console.warn("Pin of "+n.node+"."+n.pin+" not exist")}}}},findPin:function(e){var r;if((typeof e=="string"||e instanceof si)&&(e={node:e}),typeof e.node=="string")for(var i=0;i<this.nodes.length;i++){var n=this.nodes[i];n.name===e.node&&(r=n)}else r=e.node;if(r){var a=e.pin;if(a||r.outputs&&(a=Object.keys(r.outputs)[0]),r.outputs[a])return{node:r,pin:a}}}}),rs=of,sf=rs.extend(function(){return{_outputs:[],_texturePool:new es,_frameBuffer:new Xe({depthBuffer:!1})}},{addNode:function(e){rs.prototype.addNode.call(this,e),e._compositor=this},render:function(e,r){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var i=0;i<this.nodes.length;i++)this.nodes[i].outputs||this._outputs.push(this.nodes[i])}for(var i=0;i<this.nodes.length;i++)this.nodes[i].beforeFrame();for(var i=0;i<this._outputs.length;i++)this._outputs[i].updateReference();for(var i=0;i<this._outputs.length;i++)this._outputs[i].render(e,r);for(var i=0;i<this.nodes.length;i++)this.nodes[i].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),lf=sf,uf=si.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Xe},{render:function(e){this._rendering=!0;var r=e.gl;this.trigger("beforerender");var i;if(!this.outputs)i=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var n=this.frameBuffer;for(var a in this.outputs){var o=this.updateParameter(a,e),s=this.outputs[a],l=this._compositor.allocateTexture(o);this._outputTextures[a]=l;var u=s.attachment||r.COLOR_ATTACHMENT0;typeof u=="string"&&(u=r[u]),n.attach(l,u)}n.bind(e);var h=e.getGLExtension("EXT_draw_buffers");if(h){var f=[];for(var u in this.outputs)u=parseInt(u),u>=r.COLOR_ATTACHMENT0&&u<=r.COLOR_ATTACHMENT0+8&&f.push(u);h.drawBuffersEXT(f)}e.saveClear(),e.clearBit=R.DEPTH_BUFFER_BIT|R.COLOR_BUFFER_BIT,i=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),n.unbind(e)}this.trigger("afterrender",i),this._rendering=!1,this._rendered=!0}}),hf=uf,ff=si.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,r){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),cf=ff,df=si.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var t=new Ne({fragment:this.shader});this.pass=t},{render:function(e,r){this.trigger("beforerender",e),this._rendering=!0;var i=e.gl;for(var n in this.inputLinks){var a=this.inputLinks[n],o=a.node.getOutput(e,a.pin);this.pass.setUniform(n,o)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,r);else{this.pass.outputs={};var s={};for(var l in this.outputs){var u=this.updateParameter(l,e);isNaN(u.width)&&this.updateParameter(l,e);var h=this.outputs[l],f=this._compositor.allocateTexture(u);this._outputTextures[l]=f;var c=h.attachment||i.COLOR_ATTACHMENT0;typeof c=="string"&&(c=i[c]),s[c]=f}this._compositor.getFrameBuffer().bind(e);for(var c in s)this._compositor.getFrameBuffer().attach(s[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var n in this.inputLinks){var a=this.inputLinks[n];a.node.removeReference(a.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,r){var i=this.outputs[e],n=i.parameters,a=i._parametersCopy;if(a||(a=i._parametersCopy={}),n)for(var o in n)o!=="width"&&o!=="height"&&(a[o]=n[o]);var s,l;return typeof n.width=="function"?s=n.width.call(this,r):s=n.width,typeof n.height=="function"?l=n.height.call(this,r):l=n.height,s=Math.ceil(s),l=Math.ceil(l),(a.width!==s||a.height!==l)&&this._outputTextures[e]&&this._outputTextures[e].dispose(r),a.width=s,a.height=l,a},setParameter:function(e,r){this.pass.setUniform(e,r)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var r in e)this.setParameter(r,e[r])},define:function(e,r){this.pass.material.define("fragment",e,r)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var r=this.outputs[e];r.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){si.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),vf=df,pf=`@export clay.compositor.coloradjust
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
@end`,is=`@export clay.compositor.kernel.gaussian_9
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
`,mf=`@export clay.compositor.hdr.log_lum
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
@end`,ns=`
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
@end`,gf=`@export clay.compositor.vignette
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
@end`,as=`@export clay.compositor.output
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
@end`,os=`@export clay.compositor.bright
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
`,ss=`@export clay.compositor.downsample
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
@end`,ls=`
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
@end`,us=`@export clay.compositor.hdr.composite
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
@end`,_f=`@export clay.compositor.lensflare
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
@end`,hs=`@export clay.compositor.blend
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
@end`,fs=`@export clay.compositor.fxaa
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
@end`;function yf(t){t.import(pf),t.import(is),t.import(mf),t.import(ns),t.import(gf),t.import(as),t.import(os),t.import(ss),t.import(ls),t.import(us),t.import(_f),t.import(hs),t.import(fs)}yf(F);var xf=/^#source\((.*?)\)/;function Tf(t,e){var r=new lf;e=e||{};var i={textures:{},parameters:{}},n=function(l,u){for(var h=0;h<t.nodes.length;h++){var f=t.nodes[h],c=Sf(f,i,e);c&&r.addNode(c)}};for(var a in t.parameters){var o=t.parameters[a];i.parameters[a]=sa(o)}return Af(t,i,e,function(s){i.textures=s,n()}),r}function Sf(t,e,r){var i=t.type||"filter",n,a,o;if(i==="filter"){var s=t.shader.trim(),l=xf.exec(s);if(l?n=F.source(l[1].trim()):s.charAt(0)==="#"&&(n=e.shaders[s.substr(1)]),n||(n=s),!n)return}if(t.inputs){a={};for(var u in t.inputs)typeof t.inputs[u]=="string"?a[u]=t.inputs[u]:a[u]={node:t.inputs[u].node,pin:t.inputs[u].pin}}if(t.outputs){o={};for(var u in t.outputs){var h=t.outputs[u];o[u]={},h.attachment!=null&&(o[u].attachment=h.attachment),h.keepLastFrame!=null&&(o[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[u].outputLastFrame=h.outputLastFrame),h.parameters&&(o[u].parameters=sa(h.parameters))}}var f;if(i==="scene"?f=new hf({name:t.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?f=new cf({name:t.name,outputs:o}):f=new vf({name:t.name,shader:n,inputs:a,outputs:o}),f){if(t.parameters)for(var u in t.parameters){var c=t.parameters[u];typeof c=="string"?(c=c.trim(),c.charAt(0)==="#"?c=e.textures[c.substr(1)]:f.on("beforerender",bf(u,cs(c)))):typeof c=="function"&&f.on("beforerender",c),f.setParameter(u,c)}if(t.defines&&f.pass)for(var u in t.defines){var c=t.defines[u];f.pass.material.define("fragment",u,c)}}return f}function Ef(t,e){return t}function wf(t,e){return e}function sa(t){var e={};if(!t)return e;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=t[i];n!=null&&(typeof n=="string"&&(n=X[n]),e[i]=n)});var r=t.scale||1;return["width","height"].forEach(function(i){if(t[i]!=null){var n=t[i];typeof n=="string"?(n=n.trim(),e[i]=Df(i,cs(n),r)):e[i]=n}}),e.width||(e.width=Ef),e.height||(e.height=wf),t.useMipmap!=null&&(e.useMipmap=t.useMipmap),e}function Af(t,e,r,i){if(!t.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;Ke.each(t.textures,function(l,u){var h,f=l.path,c=sa(l.parameters);if(Array.isArray(f)&&f.length===6)s&&(f=f.map(function(d){return Ke.relative2absolute(d,s)})),h=new $r(c);else if(typeof f=="string")s&&(f=Ke.relative2absolute(f,s)),h=new ee(c);else return;h.load(f),a++,h.once("success",function(){n[u]=h,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function bf(t,e){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=e(n,a,i);this.setParameter(t,o)}}function Df(t,e,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return e(a,o,n)}}function cs(t){var e=/^expr\((.*)\)$/.exec(t);if(e)try{var r=new Function("width","height","dpr","return "+e[1]);return r(1,1),r}catch(i){throw new Error("Invalid expression.")}}var Lf=Tf,Cf=Lf;function Mf(t,e){for(var r=0,i=1/e,n=t;n>0;)r=r+i*(n%e),n=Math.floor(n/e),i=i/e;return r}var Ur=Mf,Pf=`@export ecgl.ssao.estimate

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
`;F.import(Pf);function ds(t){for(var e=new Uint8Array(t*t*4),r=0,i=new O,n=0;n<t;n++)for(var a=0;a<t;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),e[r++]=(i.x*.5+.5)*255,e[r++]=(i.y*.5+.5)*255,e[r++]=0,e[r++]=255;return e}function vs(t){return new ee({pixels:ds(t),wrapS:X.REPEAT,wrapT:X.REPEAT,width:t,height:t})}function Rf(t,e,r){var i=new Float32Array(t*3);e=e||0;for(var n=0;n<t;n++){var a=Ur(n+e,2)*(r?1:2)*Math.PI,o=Ur(n+e,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=h}return i}function Ft(t){t=t||{},this._ssaoPass=new Ne({fragment:F.source("ecgl.ssao.estimate")}),this._blurPass=new Ne({fragment:F.source("ecgl.ssao.blur")}),this._framebuffer=new Xe({depthBuffer:!1}),this._ssaoTexture=new ee,this._blurTexture=new ee,this._blurTexture2=new ee,this._depthTex=t.depthTexture,this._normalTex=t.normalTexture,this.setNoiseSize(4),this.setKernelSize(t.kernelSize||12),t.radius!=null&&this.setParameter("radius",t.radius),t.power!=null&&this.setParameter("power",t.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Ft.prototype.setDepthTexture=function(t){this._depthTex=t},Ft.prototype.setNormalTexture=function(t){this._normalTex=t,this._ssaoPass.material[t?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)},Ft.prototype.update=function(t,e,r){var i=t.getWidth(),n=t.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new k;k.transpose(s,e.worldTransform),a.setUniform("projection",e.projectionMatrix.array),a.setUniform("projectionInv",e.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,h.width=i,h.height=n,this._framebuffer.attach(l),this._framebuffer.bind(t),t.gl.clearColor(1,1,1,1),t.gl.clear(t.gl.COLOR_BUFFER_BIT),a.render(t),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",e.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(t),this._framebuffer.attach(h),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(t),this._framebuffer.unbind(t);var f=t.clearColor;t.gl.clearColor(f[0],f[1],f[2],f[3])},Ft.prototype.getTargetTexture=function(){return this._blurTexture2},Ft.prototype.setParameter=function(t,e){t==="noiseTexSize"?this.setNoiseSize(e):t==="kernelSize"?this.setKernelSize(e):t==="intensity"?this._ssaoPass.material.set("intensity",e):this._ssaoPass.setUniform(t,e)},Ft.prototype.setKernelSize=function(t){this._kernelSize=t,this._ssaoPass.material.define("fragment","KERNEL_SIZE",t),this._kernels=this._kernels||[];for(var e=0;e<30;e++)this._kernels[e]=Rf(t,e*t,!!this._normalTex)},Ft.prototype.setNoiseSize=function(t){var e=this._ssaoPass.getUniform("noiseTex");e?(e.data=ds(t),e.width=e.height=t,e.dirty()):(e=vs(t),this._ssaoPass.setUniform("noiseTex",vs(t))),this._ssaoPass.setUniform("noiseTexSize",[t,t])},Ft.prototype.dispose=function(t){this._blurTexture.dispose(t),this._ssaoTexture.dispose(t),this._blurTexture2.dispose(t)};var Nf=Ft,If=`@export ecgl.ssr.main

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

@end`;F.import(If);function Ut(t){t=t||{},this._ssrPass=new Ne({fragment:F.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Ne({fragment:F.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Ne({fragment:F.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Ne({fragment:F.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",t.normalTexture),this._ssrPass.setUniform("gBufferTexture2",t.depthTexture),this._blurPass1.setUniform("gBufferTexture1",t.normalTexture),this._blurPass1.setUniform("gBufferTexture2",t.depthTexture),this._blurPass2.setUniform("gBufferTexture1",t.normalTexture),this._blurPass2.setUniform("gBufferTexture2",t.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ee({type:X.HALF_FLOAT}),this._texture2=new ee({type:X.HALF_FLOAT}),this._texture3=new ee({type:X.HALF_FLOAT}),this._prevTexture=new ee({type:X.HALF_FLOAT}),this._currentTexture=new ee({type:X.HALF_FLOAT}),this._frameBuffer=new Xe({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Ut.prototype.setAmbientCubemap=function(t,e){this._ssrPass.material.set("specularCubemap",t),this._ssrPass.material.set("specularIntensity",e);var r=t&&e;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")},Ut.prototype.update=function(t,e,r,i){var n=t.getWidth(),a=t.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,f=this._blurPass1,c=this._blurPass2,d=this._blendPass,v=new k,p=new k;k.transpose(v,e.worldTransform),k.transpose(p,e.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",e.projectionMatrix.array),h.setUniform("projectionInv",e.invProjectionMatrix.array),h.setUniform("toViewSpace",v.array),h.setUniform("toWorldSpace",p.array),h.setUniform("nearZ",e.near);var m=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",m),h.setUniform("sampleOffset",i*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),c.setUniform("textureSize",[n,a]),c.setUniform("sourceTexture",r),f.setUniform("projection",e.projectionMatrix.array),c.setUniform("projection",e.projectionMatrix.array),u.attach(o),u.bind(t),h.render(t),this._physicallyCorrect&&(u.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),d.render(t)),u.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(t),u.attach(l),c.setUniform("texture",s),c.render(t),u.unbind(t),this._physicallyCorrect){var g=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=g}},Ut.prototype.getTargetTexture=function(){return this._texture3},Ut.prototype.setParameter=function(t,e){t==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",e):this._ssrPass.setUniform(t,e)},Ut.prototype.setPhysicallyCorrect=function(t){t?(this._normalDistribution||(this._normalDistribution=Wi.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=t},Ut.prototype.setSSAOTexture=function(t){var e=this._blurPass2;t?(e.material.enableTexture("ssaoTex"),e.material.set("ssaoTex",t)):e.material.disableTexture("ssaoTex")},Ut.prototype.isFinished=function(t){return this._physicallyCorrect?t>this._totalSamples/this._samplePerFrame:!0},Ut.prototype.dispose=function(t){this._ssrTexture.dispose(t),this._texture2.dispose(t),this._texture3.dispose(t),this._prevTexture.dispose(t),this._currentTexture.dispose(t),this._frameBuffer.dispose(t)};var Of=Ut,ps=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Bf=`@export ecgl.normal.vertex

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
@end`;F.import(Bf);function la(t,e,r,i,n){var a=t.gl;e.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(t):i.unbind(t)}function Ff(t,e,r,i,n){var a,o,s,l,u=t.gl;return function(h,f,c){if(!(l&&l.material===h.material)){var d=h.material,v=h.__program,p=d.get("roughness");p==null&&(p=1);var m=d.get("normalMap")||e,g=d.get("roughnessMap"),_=d.get("bumpMap"),y=d.get("uvRepeat"),S=d.get("uvOffset"),x=d.get("detailUvRepeat"),E=d.get("detailUvOffset"),D=!!_&&d.isTextureEnabled("bumpMap"),L=!!g&&d.isTextureEnabled("roughnessMap"),b=d.isDefined("fragment","DOUBLE_SIDED");_=_||r,g=g||i,c!==f?(f.set("normalMap",m),f.set("bumpMap",_),f.set("roughnessMap",g),f.set("useBumpMap",D),f.set("useRoughnessMap",L),f.set("doubleSide",b),y!=null&&f.set("uvRepeat",y),S!=null&&f.set("uvOffset",S),x!=null&&f.set("detailUvRepeat",x),E!=null&&f.set("detailUvOffset",E),f.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==m&&la(t,v,"normalMap",m,0),o!==_&&_&&la(t,v,"bumpMap",_,1),s!==g&&g&&la(t,v,"roughnessMap",g,2),y!=null&&v.setUniform(u,"2f","uvRepeat",y),S!=null&&v.setUniform(u,"2f","uvOffset",S),x!=null&&v.setUniform(u,"2f","detailUvRepeat",x),E!=null&&v.setUniform(u,"2f","detailUvOffset",E),v.setUniform(u,"1i","useBumpMap",+D),v.setUniform(u,"1i","useRoughnessMap",+L),v.setUniform(u,"1i","doubleSide",+b)),a=m,o=_,s=g,l=h}}}function Gr(t){t=t||{},this._depthTex=new ee({format:X.DEPTH_COMPONENT,type:X.UNSIGNED_INT}),this._normalTex=new ee({type:X.HALF_FLOAT}),this._framebuffer=new Xe,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Xe.DEPTH_ATTACHMENT),this._normalMaterial=new Tt({shader:new F(F.source("ecgl.normal.vertex"),F.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=lr.createBlank("#000"),this._defaultBumpMap=lr.createBlank("#000"),this._defaultRoughessMap=lr.createBlank("#000"),this._debugPass=new Ne({fragment:F.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Gr.prototype.getDepthTexture=function(){return this._depthTex},Gr.prototype.getNormalTexture=function(){return this._normalTex},Gr.prototype.update=function(t,e,r){var i=t.getWidth(),n=t.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=e.getRenderList(r).opaque;this._framebuffer.bind(t),t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.gl.disable(t.gl.BLEND),t.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(h){return h.renderNormal},beforeRender:Ff(t,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:t.opaqueSortCompare}),this._framebuffer.unbind(t)},Gr.prototype.renderDebug=function(t){this._debugPass.render(t)},Gr.prototype.dispose=function(t){this._depthTex.dispose(t),this._normalTex.dispose(t)};var Uf=Gr;function li(t){t=t||{},this._edgePass=new Ne({fragment:F.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",t.normalTexture),this._edgePass.setUniform("depthTexture",t.depthTexture),this._targetTexture=new ee({type:X.HALF_FLOAT}),this._frameBuffer=new Xe,this._frameBuffer.attach(this._targetTexture)}li.prototype.update=function(t,e,r,i){var n=t.getWidth(),a=t.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(t),this._edgePass.setUniform("projectionInv",e.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(t),s.unbind(t)},li.prototype.getTargetTexture=function(){return this._targetTexture},li.prototype.setParameter=function(t,e){this._edgePass.setUniform(t,e)},li.prototype.dispose=function(t){this._targetTexture.dispose(t),this._frameBuffer.dispose(t)};var Gf=li,zf={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Hf=`@export ecgl.dof.coc

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

@end`,Vf=`@export ecgl.edge

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
@end`;F.import(is),F.import(ns),F.import(as),F.import(os),F.import(ss),F.import(ls),F.import(us),F.import(hs),F.import(fs),F.import(Hf),F.import(Vf);function ms(t,e){return{color:{parameters:{width:t,height:e}}}}var ua=["composite","FXAA"];function ne(){this._width,this._height,this._dpr,this._sourceTexture=new ee({type:X.HALF_FLOAT}),this._depthTexture=new ee({format:X.DEPTH_COMPONENT,type:X.UNSIGNED_INT}),this._framebuffer=new Xe,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Xe.DEPTH_ATTACHMENT),this._normalPass=new Uf,this._compositor=Cf(zf);var t=this._compositor.getNodeByName("source");t.texture=this._sourceTexture;var e=this._compositor.getNodeByName("coc");this._sourceNode=t,this._cocNode=e,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ua.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Nf(r),this._ssrPass=new Of(r),this._edgePass=new Gf(r)}ne.prototype.resize=function(t,e,r){r=r||1;var t=t*r,e=e*r,i=this._sourceTexture,n=this._depthTexture;i.width=t,i.height=e,n.width=t,n.height=e;var a={getWidth:function(){return t},getHeight:function(){return e},getDevicePixelRatio:function(){return r}};function o(s,l){if(typeof s[l]=="function"){var u=s[l].__original||s[l];s[l]=function(h){return u.call(this,a)},s[l].__original=u}}this._compositor.nodes.forEach(function(s){for(var l in s.outputs){var u=s.outputs[l].parameters;u&&(o(u,"width"),o(u,"height"))}for(var h in s.parameters)o(s.parameters,h)}),this._width=t,this._height=e,this._dpr=r},ne.prototype.getWidth=function(){return this._width},ne.prototype.getHeight=function(){return this._height},ne.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR},ne.prototype._getPrevNode=function(t){for(var e=ua.indexOf(t.name)-1,r=this._finalNodesChain[e];r&&!this._compositor.getNodeByName(r.name);)e-=1,r=this._finalNodesChain[e];return r},ne.prototype._getNextNode=function(t){for(var e=ua.indexOf(t.name)+1,r=this._finalNodesChain[e];r&&!this._compositor.getNodeByName(r.name);)e+=1,r=this._finalNodesChain[e];return r},ne.prototype._addChainNode=function(t){var e=this._getPrevNode(t),r=this._getNextNode(t);!e||(t.inputs.texture=e.name,r?(t.outputs=ms(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.addNode(t))},ne.prototype._removeChainNode=function(t){var e=this._getPrevNode(t),r=this._getNextNode(t);!e||(r?(e.outputs=ms(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.removeNode(t))},ne.prototype.updateNormal=function(t,e,r,i){this._ifRenderNormalPass()&&this._normalPass.update(t,e,r)},ne.prototype.updateSSAO=function(t,e,r,i){this._ssaoPass.update(t,r,i)},ne.prototype.enableSSAO=function(){this._enableSSAO=!0},ne.prototype.disableSSAO=function(){this._enableSSAO=!1},ne.prototype.enableSSR=function(){this._enableSSR=!0},ne.prototype.disableSSR=function(){this._enableSSR=!1},ne.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()},ne.prototype.getSourceFrameBuffer=function(){return this._framebuffer},ne.prototype.getSourceTexture=function(){return this._sourceTexture},ne.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)},ne.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)},ne.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()},ne.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()},ne.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()},ne.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()},ne.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0},ne.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1},ne.prototype.enableEdge=function(){this._enableEdge=!0},ne.prototype.disableEdge=function(){this._enableEdge=!1},ne.prototype.setBloomIntensity=function(t){this._compositeNode.setParameter("bloomIntensity",t)},ne.prototype.setSSAOParameter=function(t,e){switch(t){case"quality":var r={low:6,medium:12,high:32,ultra:62}[e]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(t,e),this._ssaoPass.setParameter("bias",e/200);break;case"intensity":this._ssaoPass.setParameter(t,e);break;default:}},ne.prototype.setDOFParameter=function(t,e){switch(t){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(t,e);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",e);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[e]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break;default:}},ne.prototype.setSSRParameter=function(t,e){if(e!=null)switch(t){case"quality":var r={low:10,medium:15,high:30,ultra:80}[e]||20,i={low:32,medium:16,high:8,ultra:4}[e]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-e,1),0));break;case"physical":this.setPhysicallyCorrectSSR(e);break;default:console.warn("Unkown SSR parameter "+t)}},ne.prototype.setPhysicallyCorrectSSR=function(t){this._ssrPass.setPhysicallyCorrect(t)},ne.prototype.setEdgeColor=function(t){var e=T.parseColor(t);this._edgePass.setParameter("edgeColor",e)},ne.prototype.setExposure=function(t){this._compositeNode.setParameter("exposure",Math.pow(2,t))},ne.prototype.setColorLookupTexture=function(t,e){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?t:"none",e,{minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST,flipY:!1})},ne.prototype.setColorCorrection=function(t,e){this._compositeNode.setParameter(t,e)},ne.prototype.isSSREnabled=function(){return this._enableSSR},ne.prototype.composite=function(t,e,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(t,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(t,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(ps.length/2/l),h=n%u,f=0;f<l*2;f++)s[f]=ps[f+h*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",n/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(t,i)},ne.prototype.dispose=function(t){this._sourceTexture.dispose(t),this._depthTexture.dispose(t),this._framebuffer.dispose(t),this._compositor.dispose(t),this._normalPass.dispose(t),this._ssaoPass.dispose(t)};var Wf=ne;function ha(t){for(var e=[],r=0;r<30;r++)e.push([Ur(r,2),Ur(r,3)]);this._haltonSequence=e,this._frame=0,this._sourceTex=new ee,this._sourceFb=new Xe,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ee,this._outputTex=new ee;var i=this._blendPass=new Ne({fragment:F.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Xe({depthBuffer:!1}),this._outputPass=new Ne({fragment:F.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}ha.prototype={constructor:ha,jitterProjection:function(e,r){var i=e.viewport,n=i.devicePixelRatio||e.getDevicePixelRatio(),a=i.width*n,o=i.height*n,s=this._haltonSequence[this._frame%this._haltonSequence.length],l=new k;l.array[12]=(s[0]*2-1)/a,l.array[13]=(s[1]*2-1)/o,k.mul(r.projectionMatrix,l,r.projectionMatrix),k.invert(r.invProjectionMatrix,r.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,r){this._prevFrameTex.width=e,this._prevFrameTex.height=r,this._outputTex.width=e,this._outputTex.height=r,this._sourceTex.width=e,this._sourceTex.height=r,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,r,i){var n=this._blendPass;this._frame===0?(n.setUniform("weight1",0),n.setUniform("weight2",1)):(n.setUniform("weight1",.9),n.setUniform("weight2",.1)),n.setUniform("texture1",this._prevFrameTex),n.setUniform("texture2",r||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),n.render(e),this._blendFb.unbind(e),i||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var a=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=a,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};var kf=ha;function Ae(t){t=t||"perspective",this.layer=null,this.scene=new Zt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(t),this._compositor=new Wf,this._temporalSS=new kf,this._shadowMapPass=new nf;for(var e=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(Ur(r,2)*4-2),n.push(Ur(r,3)*4-2),r++;e.push(n)}this._pcfKernels=e,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}Ae.prototype.setProjection=function(t){var e=this.camera;e&&e.update(),t==="perspective"?this.camera instanceof ke||(this.camera=new ke,e&&this.camera.setLocalTransform(e.localTransform)):this.camera instanceof Ir||(this.camera=new Ir,e&&this.camera.setLocalTransform(e.localTransform)),this.camera.near=.1,this.camera.far=2e3},Ae.prototype.setViewport=function(t,e,r,i,n){this.camera instanceof ke&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=t,this.viewport.y=e,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)},Ae.prototype.containPoint=function(t,e){var r=this.viewport,i=this.layer.renderer.getHeight();return e=i-e,t>=r.x&&e>=r.y&&t<=r.x+r.width&&e<=r.y+r.height};var gs=new vt;Ae.prototype.castRay=function(t,e,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(t,e,gs),this.camera.castRay(gs,r),i.viewport=n,r},Ae.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var t=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var e=0;e<t.transparent.length;e++){var r=t.transparent[e],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()},Ae.prototype.render=function(t,e){this._doRender(t,e,this._frame),this._frame++},Ae.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively},Ae.prototype.needsTemporalSS=function(){var t=this._enableTemporalSS;return t==="auto"&&(t=this._enablePostEffect),t},Ae.prototype.hasDOF=function(){return this._enableDOF},Ae.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30},Ae.prototype._doRender=function(t,e,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(t,i,n,r),e||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(t,i,n,!0)),this._updateShadowPCFKernel(r);var a=t.clearColor;if(t.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(t,n),this._compositor.updateNormal(t,i,n,this._temporalSS.getFrame())),this._updateSSAO(t,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(t),t.gl.clear(t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT),t.render(i,n,!0,!0),o.unbind(t),this.needsTemporalSS()&&e?(this._compositor.composite(t,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),t.setViewport(this.viewport),this._temporalSS.render(t)):(t.setViewport(this.viewport),this._compositor.composite(t,i,n,null,0))}else if(this.needsTemporalSS()&&e){var o=this._temporalSS.getSourceFrameBuffer();o.bind(t),t.saveClear(),t.clearBit=t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT,t.render(i,n,!0,!0),t.restoreClear(),o.unbind(t),t.setViewport(this.viewport),this._temporalSS.render(t)}else t.setViewport(this.viewport),t.render(i,n,!0,!0)},Ae.prototype._updateTransparent=function(t,e,r,i){for(var n=new O,a=new k,o=r.getWorldPosition(),s=e.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;k.invert(a,u.worldTransform),O.transformMat4(n,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,i)}},Ae.prototype._updateSSAO=function(t,e,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(t,e,r,this._temporalSS.getFrame());for(var n=e.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}},Ae.prototype._updateShadowPCFKernel=function(t){for(var e=this._pcfKernels[t%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",e),i[n].material.define("fragment","PCF_KERNEL_SIZE",e.length/2))},Ae.prototype.dispose=function(t){this._compositor.dispose(t.gl),this._temporalSS.dispose(t.gl),this._shadowMapPass.dispose(t)},Ae.prototype.setPostEffect=function(t,e){var r=this._compositor;this._enablePostEffect=t.get("enable");var i=t.getModel("bloom"),n=t.getModel("edge"),a=t.getModel("DOF",t.getModel("depthOfField")),o=t.getModel("SSAO",t.getModel("screenSpaceAmbientOcclusion")),s=t.getModel("SSR",t.getModel("screenSpaceReflection")),l=t.getModel("FXAA"),u=t.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),e),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})},Ae.prototype.setDOFFocusOnPoint=function(t){if(this._enablePostEffect)return t>this.camera.far||t<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",t),!0)},Ae.prototype.setTemporalSuperSampling=function(t){this._enableTemporalSS=t.get("enable")},Ae.prototype.isLinearSpace=function(){return this._enablePostEffect},Ae.prototype.setRootNode=function(t){if(this.rootNode!==t){for(var e=this.rootNode.children(),r=0;r<e.length;r++)t.add(e[r]);t!==this.scene&&this.scene.add(t),this.rootNode=t}},Ae.prototype.add=function(t){this.rootNode.add(t)},Ae.prototype.remove=function(t){this.rootNode.remove(t)},Ae.prototype.removeAll=function(t){this.rootNode.removeAll(t)},Object.assign(Ae.prototype,Wt);var qt=Ae;function Xf(t,e){var r=t.getBoxLayoutParams(),i=Object(on.g)(r,{width:e.getWidth(),height:e.getHeight()});i.y=e.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,e.getDevicePixelRatio());var n=t.get("boxWidth"),a=t.get("boxHeight"),o=t.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function jf(t,e){var r={};function i(n,a){r[n]=r[n]||[Infinity,-Infinity],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}t.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){t.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var h=w.o.createScale(r[o]||[Infinity,-Infinity],a);u=new $h(o,h),u.type=a.get("type");var f=u.type==="category";u.onBand=f&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,e)}var Zf={dimensions:Qo.prototype.dimensions,create:function(e,r){var i=[];e.eachComponent("grid3D",function(o){o.__viewGL=o.__viewGL||new qt;var s=new Qo;s.model=o,s.viewGL=o.__viewGL,o.coordinateSystem=s,i.push(s),s.resize=Xf,s.update=jf});var n=["xAxis3D","yAxis3D","zAxis3D"];function a(o,s){return n.map(function(l){var u=o.getReferringComponents(l).models[0];return u==null&&(u=s.getComponent(l)),u})}return e.eachSeries(function(o){if(o.get("coordinateSystem")==="cartesian3D"){var s=o.getReferringComponents("grid3D").models[0];if(s==null){var l=a(o,e),s=l[0].getCoordSysModel();l.forEach(function(f){var c=f.getCoordSysModel()})}var u=s.coordinateSystem;o.coordinateSystem=u}}),i}},Yf=Zf,_s=w.c.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});w.o.mixinAxisModelCommonMethods(_s);var qf=_s,ys={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Kf=w.y.merge({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},ys),fa=w.y.merge({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},ys),Qf=w.y.defaults({scale:!0,min:"dataMin",max:"dataMax"},fa),xs=w.y.defaults({logBase:10},fa);xs.scale=!0;var Jf={categoryAxis3D:Kf,valueAxis3D:fa,timeAxis3D:Qf,logAxis3D:xs},$f=Y("jkPA"),ec=["value","category","time","log"],tc=function(t,e,r,i,n){ec.forEach(function(a){var o=r.extend({type:e+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(l,u){var h=u.getTheme();w.y.merge(l,h.get(a+"Axis3D")),w.y.merge(l,this.getDefaultOption()),l.type=i(e,l)},optionUpdated:function(){var l=this.option;l.type==="category"&&(this.__ordinalMeta=$f.a.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:w.y.merge(w.y.clone(Jf[a+"Axis3D"]),n||{},!0)});t.registerComponentModel(o)}),t.registerSubTypeDefaulter(e+"Axis3D",w.y.curry(i,e))};function rc(t,e){return e.type||(e.data?"category":"value")}function ic(t){t.registerComponentModel(Wh),t.registerComponentView(Jh),t.registerCoordinateSystem("grid3D",Yf),["x","y","z"].forEach(function(e){tc(t,e,qf,rc,{name:e.toUpperCase()});var r=t.ComponentView.extend({type:e+"Axis3D"});t.registerComponentView(r)}),t.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"grid3D",query:e},function(i){i.setView(e)})}),t.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(e,r){}),t.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(e,r){})}Object(w.x)(ic);var zr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},Ts={getFilledRegions:function(e,r){var i=(e||[]).slice(),n;if(typeof r=="string"?(r=w.m(r),n=r&&r.geoJson):r&&r.features&&(n=r),!n)return[];for(var a={},o=n.features,s=0;s<i.length;s++)a[i[s].name]=i[s];for(var s=0;s<o.length;s++){var l=o[s].properties.name;a[l]||i.push({name:l})}return i},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}},Hr=w.c.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var r=w.o.createDimensions(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),i=new w.e(r,this);i.initData(e.regions);var n={};i.each(function(a){var o=i.getName(a),s=i.getItemModel(a);n[o]=s}),this._regionModelMap=n,this._data=i},getData:function(){return this._data},getRegionModel:function(e){var r=this.getData().getName(e);return this._regionModelMap[r]||new w.f(null,this)},getRegionPolygonCoords:function(e){var r=this.getData().getName(e),i=this.coordinateSystem.getRegion(r);return i?i.geometries:[]},getFormattedLabel:function(e,r){var i=this._data.getName(e),n=this.getRegionModel(e),a=n.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);a==null&&(a=n.get(["label","formatter"]));var o={name:i};if(typeof a=="function")return o.status=r,a(o);if(typeof a=="string"){var s=o.seriesName;return a.replace("{a}",s!=null?s:"")}else return i},defaultOption:{regions:[]}});w.y.merge(Hr.prototype,Ts),w.y.merge(Hr.prototype,Ki),w.y.merge(Hr.prototype,Or),w.y.merge(Hr.prototype,Br),w.y.merge(Hr.prototype,zr);var nc=Hr,ac=Ss;function Ss(t,e,r){r=r||2;var i=e&&e.length,n=i?e[0]*r:t.length,a=Es(t,0,n,r,!0),o=[];if(!a)return o;var s,l,u,h,f,c,d;if(i&&(a=hc(t,e,a,r)),t.length>80*r){s=u=t[0],l=h=t[1];for(var v=r;v<n;v+=r)f=t[v],c=t[v+1],f<s&&(s=f),c<l&&(l=c),f>u&&(u=f),c>h&&(h=c);d=Math.max(u-s,h-l)}return hi(a,o,r,s,l,d),o}function Es(t,e,r,i,n){var a,o;if(n===va(t,e,r,i)>0)for(a=e;a<r;a+=i)o=bs(a,t[a],t[a+1],o);else for(a=r-i;a>=e;a-=i)o=bs(a,t[a],t[a+1],o);return o&&mr(o,o.next)&&(ci(o),o=o.next),o}function ui(t,e){if(!t)return t;e||(e=t);var r=t,i;do if(i=!1,!r.steiner&&(mr(r,r.next)||lt(r.prev,r,r.next)===0)){if(ci(r),r=e=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==e);return e}function hi(t,e,r,i,n,a,o){if(!!t){!o&&a&&vc(t,i,n,a);for(var s=t,l,u;t.prev!==t.next;){if(l=t.prev,u=t.next,a?sc(t,i,n,a):oc(t)){e.push(l.i/r),e.push(t.i/r),e.push(u.i/r),ci(t),t=u.next,s=u.next;continue}if(t=u,t===s){o?o===1?(t=lc(t,e,r),hi(t,e,r,i,n,a,2)):o===2&&uc(t,e,r,i,n,a):hi(ui(t),e,r,i,n,a,1);break}}}}function oc(t){var e=t.prev,r=t,i=t.next;if(lt(e,r,i)>=0)return!1;for(var n=t.next.next;n!==t.prev;){if(sn(e.x,e.y,r.x,r.y,i.x,i.y,n.x,n.y)&&lt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function sc(t,e,r,i){var n=t.prev,a=t,o=t.next;if(lt(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,u=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,h=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,f=ca(s,l,e,r,i),c=ca(u,h,e,r,i),d=t.nextZ;d&&d.z<=c;){if(d!==t.prev&&d!==t.next&&sn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&lt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=t.prevZ;d&&d.z>=f;){if(d!==t.prev&&d!==t.next&&sn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&lt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function lc(t,e,r){var i=t;do{var n=i.prev,a=i.next.next;!mr(n,a)&&ws(n,i,i.next,a)&&fi(n,a)&&fi(a,n)&&(e.push(n.i/r),e.push(i.i/r),e.push(a.i/r),ci(i),ci(i.next),i=t=a),i=i.next}while(i!==t);return i}function uc(t,e,r,i,n,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&gc(o,s)){var l=As(o,s);o=ui(o,o.next),l=ui(l,l.next),hi(o,e,r,i,n,a),hi(l,e,r,i,n,a);return}s=s.next}o=o.next}while(o!==t)}function hc(t,e,r,i){var n=[],a,o,s,l,u;for(a=0,o=e.length;a<o;a++)s=e[a]*i,l=a<o-1?e[a+1]*i:t.length,u=Es(t,s,l,i,!1),u===u.next&&(u.steiner=!0),n.push(mc(u));for(n.sort(fc),a=0;a<n.length;a++)cc(n[a],r),r=ui(r,r.next);return r}function fc(t,e){return t.x-e.x}function cc(t,e){if(e=dc(t,e),e){var r=As(e,t);ui(r,r.next)}}function dc(t,e){var r=e,i=t.x,n=t.y,a=-Infinity,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!o)return null;if(i===a)return o.prev;var l=o,u=o.x,h=o.y,f=Infinity,c;for(r=o.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&sn(n<h?i:a,n,u,h,n<h?a:i,n,r.x,r.y)&&(c=Math.abs(n-r.y)/(i-r.x),(c<f||c===f&&r.x>o.x)&&fi(r,t)&&(o=r,f=c)),r=r.next;return o}function vc(t,e,r,i){var n=t;do n.z===null&&(n.z=ca(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,pc(n)}function pc(t){var e,r,i,n,a,o,s,l,u=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,i=r,s=0,e=0;e<u&&(s++,i=i.nextZ,!!i);e++);for(l=u;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:t=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(o>1);return t}function ca(t,e,r,i,n){return t=32767*(t-r)/n,e=32767*(e-i)/n,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function mc(t){var e=t,r=t;do e.x<r.x&&(r=e),e=e.next;while(e!==t);return r}function sn(t,e,r,i,n,a,o,s){return(n-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(i-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function gc(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!_c(t,e)&&fi(t,e)&&fi(e,t)&&yc(t,e)}function lt(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function mr(t,e){return t.x===e.x&&t.y===e.y}function ws(t,e,r,i){return mr(t,e)&&mr(r,i)||mr(t,i)&&mr(r,e)?!0:lt(t,e,r)>0!=lt(t,e,i)>0&&lt(r,i,t)>0!=lt(r,i,e)>0}function _c(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&ws(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function fi(t,e){return lt(t.prev,t,t.next)<0?lt(t,e,t.next)>=0&&lt(t,t.prev,e)>=0:lt(t,e,t.prev)<0||lt(t,t.next,e)<0}function yc(t,e){var r=t,i=!1,n=(t.x+e.x)/2,a=(t.y+e.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t);return i}function As(t,e){var r=new da(t.i,t.x,t.y),i=new da(e.i,e.x,e.y),n=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function bs(t,e,r,i){var n=new da(t,e,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ci(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function da(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ss.deviation=function(t,e,r,i){var n=e&&e.length,a=n?e[0]*r:t.length,o=Math.abs(va(t,0,a,r));if(n)for(var s=0,l=e.length;s<l;s++){var u=e[s]*r,h=s<l-1?e[s+1]*r:t.length;o-=Math.abs(va(t,u,h,r))}var f=0;for(s=0;s<i.length;s+=3){var c=i[s]*r,d=i[s+1]*r,v=i[s+2]*r;f+=Math.abs((t[c]-t[v])*(t[d+1]-t[c+1])-(t[c]-t[d])*(t[v+1]-t[c+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function va(t,e,r,i){for(var n=0,a=e,o=r-i;a<r;a+=i)n+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return n}function pa(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function Ds(t,e,r,i,n){var a=r,o=t[e];pa(t,e,i);for(var s=r;s<i;s++)n(t[s],o)<0&&(pa(t,s,a),a++);return pa(t,i,a),a}function ln(t,e,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Ds(t,n,r,i,e);ln(t,e,r,a-1),ln(t,e,a+1,i)}}function ma(){this._parts=[]}ma.prototype.step=function(t,e,r){var i=t.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Ds(t,a[o].pivot,a[o].left,a[o].right,e);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var h=a.length-1-this._currentSortPartIdx;if(ln(t,e,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}},ma.sort=ln;var un=ma,Vr=Ie.vec3,Ls=Vr.create(),Cs=Vr.create(),Ms=Vr.create(),ga={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,r){var i=this.indices;if(r===0){var n=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new i.constructor(i.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var a=0,o,s=0;s<i.length;){n.get(i[s++],Ls),n.get(i[s++],Cs),n.get(i[s++],Ms);var l=Vr.sqrDist(Ls,e),u=Vr.sqrDist(Cs,e),h=Vr.sqrDist(Ms,e),f=Math.min(l,u);f=Math.min(f,h),s===3?(o=f,f=0):f=f-o,this._triangleZList[a++]=f}}for(var c=this._sortedTriangleIndices,s=0;s<c.length;s++)c[s]=s;if(this.triangleCount<2e4)r===0&&this._simpleSort(!0);else for(var s=0;s<3;s++)this._progressiveQuickSort(r*3+s);for(var d=this._indicesTmp,v=this._triangleZListTmp,p=this._triangleZList,s=0;s<this.triangleCount;s++){var m=c[s]*3,g=s*3;d[g++]=i[m++],d[g++]=i[m++],d[g]=i[m],v[s]=p[c[s]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var r=this._triangleZList,i=this._sortedTriangleIndices;function n(a,o){return r[o]-r[a]}e?Array.prototype.sort.call(i,n):un.sort(i,n,0,i.length-1)},_progressiveQuickSort:function(e){var r=this._triangleZList,i=this._sortedTriangleIndices;this._quickSort=this._quickSort||new un,this._quickSort.step(i,function(n,a){return r[a]-r[n]},e)}};function xc(t){var e=t.getVisual("style");if(e){var r=t.getVisual("drawType");return e[r]}}function Tc(t){var e=t.getVisual("style");return e.opacity}function je(t,e){var r=t.getItemVisual(e,"style");if(r){var i=t.getVisual("drawType");return r[i]}}function Ze(t,e){var r=t.getItemVisual(e,"style");return r&&r.opacity}var Ps=1,Rs=2;function gr(t,e,r){this._labelsMesh=new ta,this._labelTextureSurface=new Jn({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}gr.prototype.getLabelPosition=function(t,e,r){return[0,0,0]},gr.prototype.getLabelDistance=function(t,e,r){return 0},gr.prototype.getMesh=function(){return this._labelsMesh},gr.prototype.updateData=function(t,e,r){e==null&&(e=0),r==null&&(r=t.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-e)&&(this._labelsVisibilitiesBits=new Uint8Array(r-e));for(var i=["label","show"],n=["emphasis","label","show"],a=e;a<r;a++){var o=t.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var u=(s?Ps:0)|(l?Rs:0);this._labelsVisibilitiesBits[a-e]=u}this._start=e,this._end=r,this._data=t},gr.prototype.updateLabels=function(t){if(!!this._data){t=t||[];for(var e=t.length>0,r={},i=0;i<t.length;i++)r[t[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),u=o.getModel(a,l),h={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},c=this._start;c<this._end;c++){var d=!1;e&&r[c]&&(d=!0);var v=this._labelsVisibilitiesBits[c-this._start]&(d?Rs:Ps);if(!!v){var p=s.getItemModel(c),m=p.getModel(d?a:n,d?u:l),g=m.get("distance")||0,_=m.get("position"),y=this._api.getDevicePixelRatio(),S=o.getFormattedLabel(c,d?"emphasis":"normal");if(S==null||S==="")return;var x=new w.n.Text({style:Object(Ji.c)(m,{text:S,fill:m.get("color")||je(s,c)||"#000",align:"left",verticalAlign:"top",opacity:re.firstNotNull(m.get("opacity"),Ze(s,c),1)})}),E=x.getBoundingRect(),D=1.2;E.height*=D;var L=this._labelTextureSurface.add(x),b=h[_]||"center",M=f[_]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(c,_,g),[E.width*y,E.height*y],L,b,M,this.getLabelDistance(c,_,g)*y)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}},gr.prototype.dispose=function(){this._labelTextureSurface.dispose()};var _a=gr,ft=Ie.vec3;T.Shader.import(rn);function ya(t){this.rootNode=new T.Node,this._triangulationResults={},this._shadersMap=T.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=T.createShader("ecgl."+i),r},{}),this._linesShader=T.createShader("ecgl.meshLines3D");var e={};T.COMMON_SHADERS.forEach(function(r){e[r]=new T.Material({shader:T.createShader("ecgl."+r)})}),this._groundMaterials=e,this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new _a(512,512,t),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=t}ya.prototype={constructor:ya,extrudeY:!0,update:function(e,r,i,n,a){var o=e.getData();n==null&&(n=0),a==null&&(a=o.count()),this._startIndex=n,this._endIndex=a-1,this._triangulation(e,n,a);var s=this._getShader(e.get("shading"));this._prepareMesh(e,s,i,n,a),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,i,n,a);var l=e.coordinateSystem;l.type==="geo3D"&&this._updateGroundPlane(e,l,i);var u=this;this._labelsBuilder.updateData(o,n,a),this._labelsBuilder.getLabelPosition=function(h,f,c){var d=o.getName(h),v,p=c;if(l.type==="geo3D"){var m=l.getRegion(d);if(!m)return[NaN,NaN,NaN];v=m.getCenter();var g=l.dataToPoint([v[0],v[1],p]);return g}else var _=u._triangulationResults[h-u._startIndex],v=u.extrudeY?[(_.max[0]+_.min[0])/2,_.max[1]+p,(_.max[2]+_.min[2])/2]:[(_.max[0]+_.min[0])/2,(_.max[1]+_.min[1])/2,_.max[2]+p]},this._data=o,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function r(){var a=new T.Mesh({name:"Polygon",material:new T.Material({shader:e._shadersMap.lambert}),geometry:new T.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(a.geometry,ga),a}var i=r(),n=new T.Mesh({material:new T.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new fr({useNativeLine:!1})});this.rootNode.add(i),this.rootNode.add(n),i.material.define("both","VERTEX_COLOR"),i.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=i,this._linesMesh=n,this.rootNode.add(this._groundMesh)},_getShader:function(e){var r=this._shadersMap[e];return r||(r=this._shadersMap.lambert),r.__shading=e,r},_prepareMesh:function(e,r,i,n,a){for(var o=0,s=0,l=0,u=0,h=n;h<a;h++){var f=this._getRegionPolygonInfo(h),c=this._getRegionLinesInfo(h,e,this._linesMesh.geometry);o+=f.vertexCount,s+=f.triangleCount,l+=c.vertexCount,u+=c.triangleCount}var d=this._polygonMesh,v=d.geometry;["position","normal","texcoord0","color"].forEach(function(p){v.attributes[p].init(o)}),v.indices=o>65535?new Uint32Array(s*3):new Uint16Array(s*3),d.material.shader!==r&&d.material.attachShader(r,!0),T.setMaterialFromModel(r.__shading,d.material,e,i),l>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(l),this._linesMesh.geometry.setTriangleCount(u)),this._dataIndexOfVertex=new Uint32Array(o),this._vertexRangeOfDataIndex=new Uint32Array((a-n)*2)},_updateRegionMesh:function(e,r,i,n){for(var a=e.getData(),o=0,s=0,l=!1,u=this._polygonMesh,h=this._linesMesh,f=i;f<n;f++){var c=e.getRegionModel(f),d=c.getModel("itemStyle"),v=re.firstNotNull(je(a,f),d.get("color"),"#fff"),p=re.firstNotNull(Ze(a,f),d.get("opacity"),1),m=T.parseColor(v),g=T.parseColor(d.get("borderColor"));m[3]*=p,g[3]*=p;var _=m[3]<.99;u.material.set("color",[1,1,1,1]),l=l||_;for(var y=re.firstNotNull(c.get("height",!0),e.get("regionHeight")),S=this._updatePolygonGeometry(e,u.geometry,f,y,o,s,m),x=o;x<S.vertexOffset;x++)this._dataIndexOfVertex[x]=f;this._vertexRangeOfDataIndex[(f-i)*2]=o,this._vertexRangeOfDataIndex[(f-i)*2+1]=S.vertexOffset,o=S.vertexOffset,s=S.triangleOffset;var E=d.get("borderWidth"),D=E>0;D&&(E*=r.getDevicePixelRatio(),this._updateLinesGeometry(h.geometry,e,f,y,E,e.coordinateSystem.transform)),h.invisible=!D,h.material.set({color:g})}var u=this._polygonMesh;u.material.transparent=l,u.material.depthMask=!l,u.geometry.updateBoundingBox(),u.frontFace=this.extrudeY?T.Mesh.CCW:T.Mesh.CW,u.material.get("normalMap")&&u.geometry.generateTangents(),u.seriesIndex=e.seriesIndex,u.on("mousemove",this._onmousemove,this),u.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var r=e.getModel("debug.wireframe");if(r.get("show")){var i=T.parseColor(r.get("lineStyle.color")||"rgba(0,0,0,0.5)"),n=re.firstNotNull(r.get("lineStyle.width"),1),a=this._polygonMesh;a.geometry.generateBarycentric(),a.material.define("both","WIREFRAME_TRIANGLE"),a.material.set("wireframeLineColor",i),a.material.set("wireframeLineWidth",n)}},_onmousemove:function(e){var r=this._dataIndexOfVertex[e.triangle[0]];r==null&&(r=-1),r!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(r),this._labelsBuilder.updateLabels([r])),this._lastHoverDataIndex=r,this._polygonMesh.dataIndex=r},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,r,i){var n=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!n.get("show",!0),!this._groundMesh.invisible){var a=e.get("shading"),o=this._groundMaterials[a];o||(o=this._groundMaterials.lambert),T.setMaterialFromModel(a,o,n,i),o.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=o,this._groundMesh.material.set("color",T.parseColor(n.get("color"))),this._groundMesh.scale.set(r.size[0],r.size[2],1)}},_triangulation:function(e,r,i){this._triangulationResults=[];for(var n=[Infinity,Infinity,Infinity],a=[-Infinity,-Infinity,-Infinity],o=e.coordinateSystem,s=r;s<i;s++){for(var l=[],u=e.getRegionPolygonCoords(s),h=0;h<u.length;h++){var f=u[h].exterior,c=u[h].interiors,d=[],v=[];if(!(f.length<3)){for(var p=0,m=0;m<f.length;m++){var g=f[m];d[p++]=g[0],d[p++]=g[1]}for(var m=0;m<c.length;m++)if(!(c[m].length<3)){for(var _=d.length/2,y=0;y<c[m].length;y++){var g=c[m][y];d.push(g[0]),d.push(g[1])}v.push(_)}for(var S=ac(d,v),x=new Float64Array(d.length/2*3),E=[],D=[Infinity,Infinity,Infinity],L=[-Infinity,-Infinity,-Infinity],b=0,m=0;m<d.length;)ft.set(E,d[m++],0,d[m++]),o&&o.transform&&ft.transformMat4(E,E,o.transform),ft.min(D,D,E),ft.max(L,L,E),x[b++]=E[0],x[b++]=E[1],x[b++]=E[2];ft.min(n,n,D),ft.max(a,a,L),l.push({points:x,indices:S,min:D,max:L})}}this._triangulationResults.push(l)}this._geoBoundingBox=[n,a]},_getRegionPolygonInfo:function(e){for(var r=this._triangulationResults[e-this._startIndex],i=0,n=0,a=0;a<r.length;a++)i+=r[a].points.length/3,n+=r[a].indices.length/3;var o=i*2+i*4,s=n*2+i*2;return{vertexCount:o,triangleCount:s}},_updatePolygonGeometry:function(e,r,i,n,a,o,s){var l=e.get("projectUVOnGround"),u=r.attributes.position,h=r.attributes.normal,f=r.attributes.texcoord0,c=r.attributes.color,d=this._triangulationResults[i-this._startIndex],v=c.value&&s,p=r.indices,m=this.extrudeY?1:2,g=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],y=ft.mul([],this._geoBoundingBox[0],_),S=ft.mul([],this._geoBoundingBox[1],_),x=Math.max(S[0]-y[0],S[2]-y[2]);function E(Oe,rt,Ye){for(var qe=Oe.points,Si=qe.length,_t=[],bt=[],yt=0;yt<Si;yt+=3)_t[0]=qe[yt],_t[m]=rt,_t[g]=qe[yt+2],bt[0]=(qe[yt]*_[0]-y[0])/x,bt[1]=(qe[yt+2]*_[g]-y[2])/x,u.set(a,_t),v&&c.set(a,s),f.set(a++,bt)}function D(Oe,rt,Ye){var qe=a;E(Oe,rt,Ye);for(var Si=Oe.indices.length,_t=0;_t<Si;_t++)p[o*3+_t]=Oe.indices[_t]+qe;o+=Oe.indices.length/3}for(var L=this.extrudeY?[0,1,0]:[0,0,1],b=ft.negate([],L),M=0;M<d.length;M++){var N=a,C=d[M];D(C,0,0),D(C,n,0);for(var B=C.points.length/3,P=0;P<B;P++)h.set(N+P,b),h.set(N+P+B,L);for(var j=[0,3,1,1,3,2],G=[[],[],[],[]],H=[],V=[],U=[],de=[],W=0,P=0;P<B;P++){for(var Ee=(P+1)%B,fe=(C.points[Ee*3]-C.points[P*3])*_[0],ye=(C.points[Ee*3+2]-C.points[P*3+2])*_[g],be=Math.sqrt(fe*fe+ye*ye),ae=0;ae<4;ae++){var et=ae===0||ae===3,Ce=(et?P:Ee)*3;G[ae][0]=C.points[Ce],G[ae][m]=ae>1?n:0,G[ae][g]=C.points[Ce+2],u.set(a+ae,G[ae]),l?(de[0]=(C.points[Ce]*_[0]-y[0])/x,de[1]=(C.points[Ce+2]*_[g]-y[g])/x):(de[0]=(et?W:W+be)/x,de[1]=(G[ae][m]*_[m]-y[m])/x),f.set(a+ae,de)}ft.sub(H,G[1],G[0]),ft.sub(V,G[3],G[0]),ft.cross(U,H,V),ft.normalize(U,U);for(var ae=0;ae<4;ae++)h.set(a+ae,U),v&&c.set(a+ae,s);for(var ae=0;ae<6;ae++)p[o*3+ae]=j[ae]+a;a+=4,o+=2,W+=be}}return r.dirty(),{vertexOffset:a,triangleOffset:o}},_getRegionLinesInfo:function(e,r,i){var n=0,a=0,o=r.getRegionModel(e),s=o.getModel("itemStyle"),l=s.get("borderWidth");if(l>0){var u=r.getRegionPolygonCoords(e);u.forEach(function(h){var f=h.exterior,c=h.interiors;n+=i.getPolylineVertexCount(f),a+=i.getPolylineTriangleCount(f);for(var d=0;d<c.length;d++)n+=i.getPolylineVertexCount(c[d]),a+=i.getPolylineTriangleCount(c[d])},this)}return{vertexCount:n,triangleCount:a}},_updateLinesGeometry:function(e,r,i,n,a,o){function s(h){for(var f=new Float64Array(h.length*3),c=0,d=[],v=0;v<h.length;v++)d[0]=h[v][0],d[1]=n+.1,d[2]=h[v][1],o&&ft.transformMat4(d,d,o),f[c++]=d[0],f[c++]=d[1],f[c++]=d[2];return f}var l=[1,1,1,1],u=r.getRegionPolygonCoords(i);u.forEach(function(h){var f=h.exterior,c=h.interiors;e.addPolyline(s(f),l,a);for(var d=0;d<c.length;d++)e.addPolyline(s(c[d]),l,a)})},highlight:function(e){var r=this._data;if(!!r){var i=r.getItemModel(e),n=i.getModel(["emphasis","itemStyle"]),a=n.get("color"),o=re.firstNotNull(n.get("opacity"),Ze(r,e),1);if(a==null){var s=je(r,e);a=w.h.lift(s,-.4)}o==null&&(o=Ze(r,e));var l=T.parseColor(a);l[3]*=o,this._setColorOfDataIndex(r,e,l)}},downplay:function(e){var r=this._data;if(!!r){var i=r.getItemModel(e),n=re.firstNotNull(je(r,e),i.get(["itemStyle","color"]),"#fff"),a=re.firstNotNull(Ze(r,e),i.get(["itemStyle","opacity"]),1),o=T.parseColor(n);o[3]*=a,this._setColorOfDataIndex(r,e,o)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,r,i){if(!(r<this._startIndex&&r>this._endIndex)){r-=this._startIndex;for(var n=this._vertexRangeOfDataIndex[r*2];n<this._vertexRangeOfDataIndex[r*2+1];n++)this._polygonMesh.geometry.attributes.color.set(n,i);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};var hn=ya,Sc=w.d.extend({type:"geo3D",__ecgl__:!0,init:function(e,r){this._geo3DBuilder=new hn(r),this.groupGL=new T.Node,this._lightRoot=new T.Node,this._sceneHelper=new Fr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new $i({zr:r.getZr()}),this._control.init()},render:function(e,r,i){this.groupGL.add(this._geo3DBuilder.rootNode);var n=e.coordinateSystem;if(!(!n||!n.viewGL)){n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var a=this._control;a.setViewGL(n.viewGL);var o=e.getModel("viewControl");a.setFromViewControlModel(o,0),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(e),n.viewGL.setPostEffect(e.getModel("postEffect"),i),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,r,i,0,e.getData().count());var s=n.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(l){l.material&&l.material[s]("fragment","SRGB_DECODE")}),a.off("update"),a.on("update",function(){i.dispatchAction({type:"geo3DChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance(),center:a.getCenter(),from:this.uid,geo3DId:e.id})}),a.update()}},afterRender:function(e,r,i,n){var a=n.renderer;this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}}),Ec=Y("F5Ls"),wc={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Ac(t,e){if(t==="world"){var r=wc[e.name];if(r){var i=[r[0],r[1]];e.setCenter(i)}}}var bc=Ie.vec3,Wr=Ie.mat4,Dc=[Ec.a,Ac];function xa(t,e,r,i,n){this.name=t,this.map=e,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=Wr.identity(new Float64Array(16)),this.invTransform=Wr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}xa.prototype={constructor:xa,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,r,i){var n=w.r||w.s;try{this.regions=e?n(e):[]}catch(h){throw`Invalid geoJson format
`+h}r=r||{},i=i||{};for(var a=this.regions,o={},s=0;s<a.length;s++){var l=a[s].name;l=i[l]||l,a[s].name=l,o[l]=a[s],this.addGeoCoord(l,a[s].getCenter());var u=r[l];u&&a[s].transformTo(u.left,u.top,u.width,u.height)}this._regionsMap=o,this._geoRect=null,Dc.forEach(function(h){h(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,r=this.regions,i=0;i<r.length;i++){var n=r[i].getBoundingRect();e=e||n.clone(),e.union(n)}return this._geoRect=e||new w.n.BoundingRect(0,0,0,0)},addGeoCoord:function(e,r){this._nameCoordMap[e]=r},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var r=this.regions,i=0;i<r.length;i++)if(r[i].contain(e))return r[i]},setSize:function(e,r,i){this.size=[e,r,i];var n=this.getGeoBoundingRect(),a=e/n.width,o=-i/n.height,s=-e/2-n.x*a,l=i/2-n.y*o,u=this.extrudeY?[s,0,l]:[s,l,0],h=this.extrudeY?[a,1,o]:[a,o,1],f=this.transform;Wr.identity(f),Wr.translate(f,f,u),Wr.scale(f,f,h),Wr.invert(this.invTransform,f)},dataToPoint:function(e,r){r=r||[];var i=this.extrudeY?1:2,n=this.extrudeY?2:1,a=e[2];return isNaN(a)&&(a=0),r[0]=e[0],r[n]=e[1],this.altitudeAxis?r[i]=this.altitudeAxis.dataToCoord(a):r[i]=0,r[i]+=this.regionHeight,bc.transformMat4(r,r,this.transform),r},pointToData:function(e,r){}};var Ns=xa;function Lc(t,e){var r=t.getBoxLayoutParams(),i=Object(on.g)(r,{width:e.getWidth(),height:e.getHeight()});i.y=e.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,e.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(t.get("aspectScale")||.75),o=t.get("boxWidth"),s=t.get("boxDepth"),l=t.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=t.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Cc(t,e){var r=[Infinity,-Infinity];if(t.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=w.o.createScale(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new w.a("altitude",i),this.resize(this.model,e)}}if(!1)var _p;var Is=0,Os={dimensions:Ns.prototype.dimensions,create:function(e,r){var i=[];if(!w.m)throw new Error("geo3D component depends on geo component");function n(a,o){var s=Os.createGeo3D(a);a.__viewGL=a.__viewGL||new qt,s.viewGL=a.__viewGL,a.coordinateSystem=s,s.model=a,i.push(s),s.resize=Lc,s.resize(a,r),s.update=Cc}return e.eachComponent("geo3D",function(a,o){n(a,o)}),e.eachSeriesByType("map3D",function(a,o){var s=a.get("coordinateSystem");s==null&&(s="geo3D"),s==="geo3D"&&n(a,o)}),e.eachSeries(function(a){if(a.get("coordinateSystem")==="geo3D"){if(a.type==="series.map3D")return;var o=a.getReferringComponents("geo3D").models[0];if(o||(o=e.getComponent("geo3D")),!o)throw new Error('geo "'+re.firstNotNull(a.get("geo3DIndex"),a.get("geo3DId"),0)+'" not found');a.coordinateSystem=o.coordinateSystem}}),i},createGeo3D:function(e){var r=e.get("map"),i;return typeof r=="string"?(i=r,r=w.m(r)):r&&r.features&&(r={geoJson:r}),i==null&&(i="GEO_ANONYMOUS_"+Is++),new Ns(i+Is++,i,r&&r.geoJson,r&&r.specialAreas,e.get("nameMap"))}},Bs=Os;function Fs(t){t.registerComponentModel(nc),t.registerComponentView(Sc),t.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"geo3D",query:e},function(i){i.setView(e)})}),t.registerCoordinateSystem("geo3D",Bs)}Object(w.x)(Fs);function Us(t,e){t.id=t.id||t.name||e+""}var _r=w.c.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){_r.superApply(this,"init",arguments),w.y.each(this.option.layers,function(e,r){w.y.merge(e,this.defaultLayerOption),Us(e,r)},this)},mergeOption:function(e){var r=this.option.layers;this.option.layers=null,_r.superApply(this,"mergeOption",arguments);function i(s){return w.y.reduce(s,function(l,u,h){return Us(u,h),l[u.id]=u,l},{})}if(r&&r.length){var n=i(e.layers),a=i(r);for(var o in n)a[o]?w.y.merge(a[o],n[o],!0):r.push(e.layers[o]);this.option.layers=r}w.y.each(this.option.layers,function(s){w.y.merge(s,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,r,i){this.displacementData=e,this.displacementWidth=r,this.displacementHeight=i},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),r=this.get("displacementScale");return(!e||e==="none")&&(r=0),r},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),r=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==r,this._displacementTexture=e,this._displacementScale=r},isDisplacementChanged:function(){return this._displacementChanged}});w.y.merge(_r.prototype,Ki),w.y.merge(_r.prototype,Or),w.y.merge(_r.prototype,Br),w.y.merge(_r.prototype,zr);var Mc=_r,Gs=Math.PI,wt=Math.sin,Gt=Math.cos,zs=Math.tan,Hs=Math.asin,Vs=Math.atan2,yr=Gs/180,Pc=1e3*60*60*24,Rc=2440588,Nc=2451545;function Ic(t){return t.valueOf()/Pc-.5+Rc}function Oc(t){return Ic(t)-Nc}var fn=yr*23.4397;function Bc(t,e){return Vs(wt(t)*Gt(fn)-zs(e)*wt(fn),Gt(t))}function Fc(t,e){return Hs(wt(e)*Gt(fn)+Gt(e)*wt(fn)*wt(t))}function Uc(t,e,r){return Vs(wt(t),Gt(t)*wt(e)-zs(r)*Gt(e))}function Gc(t,e,r){return Hs(wt(e)*wt(r)+Gt(e)*Gt(r)*Gt(t))}function zc(t,e){return yr*(280.16+360.9856235*t)-e}function Hc(t){return yr*(357.5291+.98560028*t)}function Vc(t){var e=yr*(1.9148*wt(t)+.02*wt(2*t)+3e-4*wt(3*t)),r=yr*102.9372;return t+e+r+Gs}function Wc(t){var e=Hc(t),r=Vc(e);return{dec:Fc(r,0),ra:Bc(r,0)}}var Ws={};Ws.getPosition=function(t,e,r){var i=yr*-r,n=yr*e,a=Oc(t),o=Wc(a),s=zc(a,i)-o.ra;return{azimuth:Uc(s,n,o.dec),altitude:Gc(s,n,o.dec)}};var kc=Ws,Xc=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;T.Shader.import(Io),T.Shader.import(Xc);var jc=w.d.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,r){this.groupGL=new T.Node,this._sphereGeometry=new T.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new T.PlaneGeometry,this._earthMesh=new T.Mesh({renderNormal:!0}),this._atmosphereMesh=new T.Mesh,this._atmosphereGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.atmosphere.vertex"),T.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=T.Mesh.CW,this._lightRoot=new T.Node,this._sceneHelper=new Fr,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new $i({zr:r.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,r,i){var n=e.coordinateSystem,a=e.get("shading");n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL),this._sceneHelper.setScene(n.viewGL.scene),n.viewGL.setPostEffect(e.getModel("postEffect"),i),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var o=this._earthMesh;o.geometry=this._sphereGeometry;var s="ecgl."+a;(!o.material||o.material.shader.name!==s)&&(o.material=T.createMaterial(s)),T.setMaterialFromModel(a,o.material,e,i),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var d=o.material.get(c);d&&(d.flipY=!1)}),o.material.set("color",T.parseColor(e.get("baseColor")));var l=n.radius*.99;if(o.scale.set(l,l,l),e.get("atmosphere.show")){o.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),o.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var u=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(l+u,l+u,l+u)}else o.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var h=o.material.setTextureImage("diffuseMap",e.get("baseTexture"),i,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(o);var f=o.material.setTextureImage("bumpMap",e.get("heightTexture"),i,{flipY:!1,anisotropic:8});f&&f.surface&&f.surface.attachToMesh(o),o.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,i),this._displaceVertices(e,i),this._updateViewControl(e,i),this._updateLayers(e,i)},afterRender:function(e,r,i,n){var a=n.renderer;this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i)},_updateLayers:function(e,r){var i=e.coordinateSystem,n=e.get("layers"),a=i.radius,o=[],s=[],l=[],u=[];w.y.each(n,function(v){var p=new w.f(v),m=p.get("type"),g=T.loadTexture(p.get("texture"),r,{flipY:!1,anisotropic:8});if(g.surface&&g.surface.attachToMesh(this._earthMesh),m==="blend"){var _=p.get("blendTo"),y=re.firstNotNull(p.get("intensity"),1);_==="emission"?(l.push(g),u.push(y)):(o.push(g),s.push(y))}else{var S=p.get("id"),x=this._layerMeshes[S];x||(x=this._layerMeshes[S]=new T.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var E=p.get("shading");E==="lambert"?(x.material=x.__lambertMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),x.__lambertMaterial=x.material):(x.material=x.__colorMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.color"),transparent:!0,depthMask:!1}),x.__colorMaterial=x.material),x.material.enableTexture("diffuseMap");var D=p.get("distance"),L=a+(D==null?i.radius/100:D);x.scale.set(L,L,L),a=L;var b=this._blankTexture||(this._blankTexture=T.createBlankTexture("rgba(255, 255, 255, 0)"));x.material.set("diffuseMap",b),T.loadTexture(p.get("texture"),r,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(x),x.material.set("diffuseMap",M),r.getZr().refresh()}),p.get("show")?this.groupGL.add(x):this.groupGL.remove(x)}},this);var h=this._earthMesh.material;h.define("fragment","LAYER_DIFFUSEMAP_COUNT",o.length),h.define("fragment","LAYER_EMISSIVEMAP_COUNT",l.length),h.set("layerDiffuseMap",o),h.set("layerDiffuseIntensity",s),h.set("layerEmissiveMap",l),h.set("layerEmissionIntensity",u);var f=e.getModel("debug.wireframe");if(f.get("show")){h.define("both","WIREFRAME_TRIANGLE");var c=T.parseColor(f.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=re.firstNotNull(f.get("lineStyle.width"),1);h.set("wireframeLineWidth",d),h.set("wireframeLineColor",c)}else h.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,r){var i=e.coordinateSystem,n=e.getModel("viewControl"),a=i.viewGL.camera,o=this;function s(){return{type:"globeChangeCamera",alpha:l.getAlpha(),beta:l.getBeta(),distance:l.getDistance()-i.radius,center:l.getCenter(),from:o.uid,globeId:e.id}}var l=this._control;l.setViewGL(i.viewGL);var u=n.get("targetCoord"),h,f;u!=null&&(f=u[0]+90,h=u[1]),l.setFromViewControlModel(n,{baseDistance:i.radius,alpha:h,beta:f}),l.off("update"),l.on("update",function(){r.dispatchAction(s())})},_displaceVertices:function(e,r){var i=e.get("displacementQuality"),n=e.get("debug.wireframe.show"),a=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&i===this._displacementQuality&&n===this._showDebugWireframe)){this._displacementQuality=i,this._showDebugWireframe=n;var o=this._sphereGeometry,s={low:100,medium:200,high:400,ultra:800}[i]||200,l=s/2;(o.widthSegments!==s||n)&&(o.widthSegments=s,o.heightSegments=l,o.build()),this._doDisplaceVertices(o,a),n&&o.generateBarycentric()}},_doDisplaceVertices:function(e,r){var i=e.attributes.position.value,n=e.attributes.texcoord0.value,a=e.__originalPosition;(!a||a.length!==i.length)&&(a=new Float32Array(i.length),a.set(i),e.__originalPosition=a);for(var o=r.displacementWidth,s=r.displacementHeight,l=r.displacementData,u=0;u<e.vertexCount;u++){var h=u*3,f=u*2,c=a[h+1],d=a[h+2],v=a[h+3],p=n[f++],m=n[f++],g=Math.round(p*(o-1)),_=Math.round(m*(s-1)),y=_*o+g,S=l?l[y]:0;i[h+1]=c+c*S,i[h+2]=d+d*S,i[h+3]=v+v*S}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,r){var i=this._earthMesh;this._sceneHelper.updateLight(e);var n=this._sceneHelper.mainLight,a=e.get("light.main.time")||new Date,o=kc.getPosition(w.q.parseDate(a),0,0),s=Math.cos(o.altitude);n.position.y=-s*Math.cos(o.azimuth),n.position.x=Math.sin(o.altitude),n.position.z=s*Math.sin(o.azimuth),n.lookAt(i.getWorldPosition())},dispose:function(e,r){this.groupGL.removeAll(),this._control.dispose()}}),Zc=Ie.vec3;function Ta(t){this.radius=t,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Ta.prototype={constructor:Ta,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,r,i){this.displacementData=e,this.displacementWidth=r,this.displacementHeight=i},_getDisplacementScale:function(e,r){var i=(e+180)/360*(this.displacementWidth-1),n=(90-r)/180*(this.displacementHeight-1),a=Math.round(i)+Math.round(n)*this.displacementWidth;return this.displacementData[a]},dataToPoint:function(e,r){var i=e[0],n=e[1],a=e[2]||0,o=this.radius;this.displacementData&&(o*=1+this._getDisplacementScale(i,n)),this.altitudeAxis&&(o+=this.altitudeAxis.dataToCoord(a)),i=i*Math.PI/180,n=n*Math.PI/180;var s=Math.cos(n)*o;return r=r||[],r[0]=-s*Math.cos(i+Math.PI),r[1]=Math.sin(n)*o,r[2]=s*Math.sin(i+Math.PI),r},pointToData:function(e,r){var i=e[0],n=e[1],a=e[2],o=Zc.len(e);i/=o,n/=o,a/=o;var s=Math.asin(n),l=Math.atan2(a,-i);l<0&&(l=Math.PI*2+l);var u=s*180/Math.PI,h=l*180/Math.PI-180;return r=r||[],r[0]=h,r[1]=u,r[2]=o-this.radius,this.altitudeAxis&&(r[2]=this.altitudeAxis.coordToData(r[2])),r}};var ks=Ta;function Yc(t,e){var r=document.createElement("canvas"),i=r.getContext("2d"),n=t.width,a=t.height;r.width=n,r.height=a,i.drawImage(t,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*e}return{data:s,width:n,height:a}}function qc(t,e){var r=t.getBoxLayoutParams(),i=Object(on.g)(r,{width:e.getWidth(),height:e.getHeight()});i.y=e.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,e.getDevicePixelRatio()),this.radius=t.get("globeRadius");var n=t.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function Kc(t,e){var r=[Infinity,-Infinity];if(t.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=w.o.createScale(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new w.a("altitude",i),this.resize(this.model,e)}}var Qc={dimensions:ks.prototype.dimensions,create:function(e,r){var i=[];return e.eachComponent("globe",function(n){n.__viewGL=n.__viewGL||new qt;var a=new ks;a.viewGL=n.__viewGL,n.coordinateSystem=a,a.model=n,i.push(a),a.resize=qc,a.resize(n,r),a.update=Kc}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="globe"){var a=n.getReferringComponents("globe").models[0];if(a||(a=e.getComponent("globe")),!a)throw new Error('globe "'+re.firstNotNull(n.get("globe3DIndex"),n.get("globe3DId"),0)+'" not found');var o=a.coordinateSystem;n.coordinateSystem=o}}),e.eachComponent("globe",function(n,a){var o=n.coordinateSystem,s=n.getDisplacementTexture(),l=n.getDisplacemenScale();if(n.isDisplacementChanged()){if(n.hasDisplacement()){var u=!0;T.loadTexture(s,r,function(h){var f=h.image,c=Yc(f,l);n.setDisplacementData(c.data,c.width,c.height),u||r.dispatchAction({type:"globeUpdateDisplacment"})}),u=!1}else o.setDisplacementData(null,0,0);o.setDisplacementData(n.displacementData,n.displacementWidth,n.displacementHeight)}}),i}},Jc=Qc;function $c(t){t.registerComponentModel(Mc),t.registerComponentView(jc),t.registerCoordinateSystem("globe",Jc),t.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"globe",query:e},function(i){i.setView(e)})}),t.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(e,r){})}Object(w.x)($c);var Xs=["zoom","center","pitch","bearing"],Sa=w.c.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return Xs.reduce(function(r,i){return r[i]=e.get(i),r},{})},setMapboxCameraOption:function(e){e!=null&&Xs.forEach(function(r){e[r]!=null&&(this.option[r]=e[r])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});w.y.merge(Sa.prototype,Or),w.y.merge(Sa.prototype,Br);var ed=Sa;function Kt(t,e){if(this.id=t,this.zr=e,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Kt.prototype.setUnpainted=function(){},Kt.prototype.resize=function(){this._mapbox.resize()},Kt.prototype.getMapbox=function(){return this._mapbox},Kt.prototype.clear=function(){},Kt.prototype.refresh=function(){this._mapbox.resize()};var js=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Kt.prototype._initEvents=function(){var t=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(r){return r.preventDefault(),!1}},js.forEach(function(e){this._handlers[e]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t.dispatchEvent(a)},this.zr.dom.addEventListener(e,this._handlers[e])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},Kt.prototype.dispose=function(){js.forEach(function(t){this.zr.dom.removeEventListener(t,this._handlers[t])},this)};var td=Kt,Zs=`
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

@end`;T.Shader.import(Zs);var yp=512,rd=w.d.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,r){var i=r.getZr();this._zrLayer=new td("mapbox3D",i),i.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new Fr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var n=this._zrLayer.getMapbox(),a=this._dispatchInteractAction.bind(this,r,n);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(o){n.on(o,a)}),this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,r,i){var n=this._zrLayer.getMapbox(),a=e.get("style"),o=JSON.stringify(a);o!==this._oldStyleStr&&a&&n.setStyle(a),this._oldStyleStr=o,n.setCenter(e.get("center")),n.setZoom(e.get("zoom")),n.setPitch(e.get("pitch")),n.setBearing(e.get("bearing")),e.setMapbox(n);var s=e.coordinateSystem;s.viewGL.scene.add(this._lightRoot),s.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(s.viewGL.scene),this._sceneHelper.updateLight(e),s.viewGL.setPostEffect(e.getModel("postEffect"),i),s.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,r,i,n){var a=n.renderer;this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i),e.coordinateSystem.viewGL.scene.traverse(function(o){o.material&&(o.material.define("fragment","NORMAL_UP_AXIS",2),o.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,r,i,n){e.coordinateSystem.setCameraOption(n),this._updateGroundMesh(),i.getZr().refresh()},_dispatchInteractAction:function(e,r,i){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:r.getPitch(),zoom:r.getZoom(),center:r.getCenter().toArray(),bearing:r.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,r=e.dataToPoint(e.center);this._groundMesh.position.set(r[0],r[1],-.001);var i=new T.Plane(new T.Vector3(0,0,1),0),n=e.viewGL.camera.castRay(new T.Vector2(-1,-1)),a=e.viewGL.camera.castRay(new T.Vector2(1,1)),o=n.intersectPlane(i),s=a.intersectPlane(i),l=o.dist(s)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(l,l,1)}},dispose:function(e,r){this._zrLayer&&this._zrLayer.dispose(),r.getZr().painter.delLayer(-1e3)}}),Qt=Ie.mat4,di=512,Ea=.6435011087932844,ct=Math.PI,kr=1/10;function wa(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}wa.prototype={constructor:wa,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,di)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(!!this.height){var e=.5/Math.tan(Ea/2)*this.height*kr,r=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,i=Ea/2,n=Math.PI/2+r,a=Math.sin(i)*e/Math.sin(Math.PI-n-i),o=Math.cos(Math.PI/2-r)*a+e,s=o*1.1;this.pitch>50&&(s=1e3);var l=[];Qt.perspective(l,Ea,this.width/this.height,1,s),this.viewGL.camera.projectionMatrix.setArray(l),this.viewGL.camera.decomposeProjectionMatrix();var l=Qt.identity([]),u=this.dataToPoint(this.center);Qt.scale(l,l,[1,-1,1]),Qt.translate(l,l,[0,0,-e]),Qt.rotateX(l,l,r),Qt.rotateZ(l,l,-this.bearing/180*Math.PI),Qt.translate(l,l,[-u[0]*this.getScale()*kr,-u[1]*this.getScale()*kr,0]),this.viewGL.camera.viewMatrix.array=l;var h=[];Qt.invert(h,l),this.viewGL.camera.worldTransform.array=h,this.viewGL.camera.decomposeWorldTransform();var f=di*this.getScale(),c;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];c=this.boxHeight/d*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else c=f/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*kr;this.viewGL.rootNode.scale.set(this.getScale()*kr,this.getScale()*kr,c)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,r){return this.projectOnTileWithScale(e,this.getScale()*di,r)},projectOnTileWithScale:function(e,r,i){var n=e[0],a=e[1],o=n*ct/180,s=a*ct/180,l=r*(o+ct)/(2*ct),u=r*(ct-Math.log(Math.tan(ct/4+s*.5)))/(2*ct);return i=i||[],i[0]=l,i[1]=u,i},unprojectFromTile:function(e,r){return this.unprojectOnTileWithScale(e,this.getScale()*di,r)},unprojectOnTileWithScale:function(e,r,i){var n=e[0],a=e[1],o=n/r*(2*ct)-ct,s=2*(Math.atan(Math.exp(ct-a/r*(2*ct)))-ct/4);return i=i||[],i[0]=o*180/ct,i[1]=s*180/ct,i},dataToPoint:function(e,r){return r=this.projectOnTileWithScale(e,di,r),r[0]-=this._origin[0],r[1]-=this._origin[1],r[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(r[2]=e[2],this.altitudeExtent&&(r[2]-=this.altitudeExtent[0])),r}};var cn=wa;function vi(){cn.apply(this,arguments)}vi.prototype=new cn,vi.prototype.constructor=vi,vi.prototype.type="mapbox3D";var id=vi,Ys=function(t,e,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[Infinity,-Infinity];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var f=u.getDataExtent(h,!0);s[0]=Math.min(s[0],f[0]),s[1]=Math.max(s[1],f[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:e.prototype.dimensions,create:function(o,s){var l=[];return o.eachComponent(t,function(u){var h=u.__viewGL;h||(h=u.__viewGL=new qt,h.setRootNode(new T.Node));var f=new e;f.viewGL=u.__viewGL,f.resize=i,f.resize(u,s),l.push(f),u.coordinateSystem=f,f.model=u,f.update=n}),o.eachSeries(function(u){if(u.get("coordinateSystem")===t){var h=u.getReferringComponents(t).models[0];if(h||(h=o.getComponent(t)),!h)throw new Error(t+' "'+re.firstNotNull(u.get(t+"Index"),u.get(t+"Id"),0)+'" not found');u.coordinateSystem=h.coordinateSystem}}),r&&r(l,o,s),l}}},nd=Ys("mapbox3D",id,function(t){t.forEach(function(e){e.setCameraOption(e.model.getMapboxCameraOption())})}),ad=nd;function od(t){t.registerComponentModel(ed),t.registerComponentView(rd),t.registerCoordinateSystem("mapbox3D",ad),t.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(e,r){r.eachComponent({mainType:"mapbox3D",query:e},function(i){i.setMapboxCameraOption(e)})})}Object(w.x)(od);var qs=["zoom","center","pitch","bearing"],Aa=w.c.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return qs.reduce(function(r,i){return r[i]=e.get(i),r},{})},setMaptalksCameraOption:function(e){e!=null&&qs.forEach(function(r){e[r]!=null&&(this.option[r]=e[r])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});w.y.merge(Aa.prototype,Or),w.y.merge(Aa.prototype,Br);var sd=Aa;function Jt(t,e,r,i){if(this.id=t,this.zr=e,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}Jt.prototype.setUnpainted=function(){},Jt.prototype.resize=function(){this._maptalks.checkSize()},Jt.prototype.getMaptalks=function(){return this._maptalks},Jt.prototype.clear=function(){},Jt.prototype.refresh=function(){this._maptalks.checkSize()};var Ks=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];Jt.prototype._initEvents=function(){var t=this.dom;this._handlers=this._handlers||{contextmenu:function(r){return r.preventDefault(),!1}},Ks.forEach(function(e){this._handlers[e]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e==="mousewheel"||e==="DOMMouseScroll"?t.dispatchEvent(a):t.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(e,this._handlers[e])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},Jt.prototype.dispose=function(){Ks.forEach(function(t){this.zr.dom.removeEventListener(t,this._handlers[t])},this),this._maptalks.remove()};var ld=Jt;T.Shader.import(Zs);var ud=w.d.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,r){this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,r){var i=r.getZr();this._zrLayer=new ld("maptalks3D",i,e.get("center"),e.get("zoom")),i.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new Fr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var n=this._zrLayer.getMaptalks(),a=this._dispatchInteractAction.bind(this,r,n);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(o){n.on(o,a)})},render:function(e,r,i){this._zrLayer||this._initMaptalksLayer(e,i);var n=this._zrLayer.getMaptalks(),a=e.get("urlTemplate"),o=n.getBaseLayer();a!==this._oldUrlTemplate&&(o?o.setOptions({urlTemplate:a,attribution:e.get("attribution")}):(o=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:a,subdomains:["a","b","c"],attribution:e.get("attribution")}),n.setBaseLayer(o))),this._oldUrlTemplate=a,n.setCenter(e.get("center")),n.setZoom(e.get("zoom"),{animation:!1}),n.setPitch(e.get("pitch")),n.setBearing(e.get("bearing")),e.setMaptalks(n);var s=e.coordinateSystem;s.viewGL.scene.add(this._lightRoot),s.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(s.viewGL.scene),this._sceneHelper.updateLight(e),s.viewGL.setPostEffect(e.getModel("postEffect"),i),s.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,r,i,n){var a=n.renderer;this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i),e.coordinateSystem.viewGL.scene.traverse(function(o){o.material&&(o.material.define("fragment","NORMAL_UP_AXIS",2),o.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,r,i,n){e.coordinateSystem.setCameraOption(n),this._updateGroundMesh(),i.getZr().refresh()},_dispatchInteractAction:function(e,r,i){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:r.getPitch(),zoom:fd(r.getResolution())+1,center:r.getCenter().toArray(),bearing:r.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,r=e.dataToPoint(e.center);this._groundMesh.position.set(r[0],r[1],-.001);var i=new T.Plane(new T.Vector3(0,0,1),0),n=e.viewGL.camera.castRay(new T.Vector2(-1,-1)),a=e.viewGL.camera.castRay(new T.Vector2(1,1)),o=n.intersectPlane(i),s=a.intersectPlane(i),l=o.dist(s)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(l,l,1)}},dispose:function(e,r){this._zrLayer&&this._zrLayer.dispose(),r.getZr().painter.delLayer(-1e3)}}),hd=2*6378137*Math.PI/(256*Math.pow(2,20));function fd(t){return 19-Math.log(t/hd)/Math.LN2}function pi(){cn.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}pi.prototype=new cn,pi.prototype.constructor=pi,pi.prototype.type="maptalks3D";var cd=pi,dd=Ys("maptalks3D",cd,function(t){t.forEach(function(e){e.setCameraOption(e.model.getMaptalksCameraOption())})}),vd=dd;function pd(t){t.registerComponentModel(sd),t.registerComponentView(ud),t.registerCoordinateSystem("maptalks3D",vd),t.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(e,r){r.eachComponent({mainType:"maptalks3D",query:e},function(i){i.setMaptalksCameraOption(e)})})}Object(w.x)(pd);var md=Ie.vec3,gd=w.o.dataStack.isDimensionStacked;function _d(t){var e=t[0],r=t[1];return!(e>0&&r>0||e<0&&r<0)}function yd(t,e){var r=t.getData(),i=t.get("barSize");if(i==null){var n=e.size,a,o,s=e.getAxis("x"),l=e.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else w.y.isArray(i)||(i=[i,i]);var u=e.getAxis("z").scale.getExtent(),h=_d(u),f=["x","y","z"].map(function(v){return t.coordDimToDataDim(v)[0]}),c=gd(r,f[2]),d=c?r.getCalculationInfo("stackResultDimension"):f[2];r.each(f,function(v,p,m,g){var _=r.get(d,g),y=c?_-m:h?0:u[0],S=e.dataToPoint([v,p,y]),x=e.dataToPoint([v,p,_]),E=md.dist(S,x),D=[0,x[1]<S[1]?-1:1,0];Math.abs(E)===0&&(E=.1);var L=[i[0],E,i[1]];r.setItemLayout(g,[S,D,L])}),r.setLayout("orient",[1,0,0])}var xd=yd,ba=function(t,e,r){for(var i=t.getDataExtent(e),n=t.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),u=0;u<t.count();u++){var h=t.get(e,u),f=t.get(r,u),c=Math.floor((h-i[0])/a*(s-1)),d=Math.floor((f-n[0])/o*(s-1)),v=d*s+c;l[v]=l[v]||1}for(var p=0,u=0;u<l.length;u++)l[u]&&p++;return p/l.length},Qs=Ie.vec3,Td=w.o.dataStack.isDimensionStacked;function Sd(t,e){var r=t.getData(),i=t.get("minHeight")||0,n=t.get("barSize"),a=["lng","lat","alt"].map(function(u){return t.coordDimToDataDim(u)[0]});if(n==null){var o=e.radius*Math.PI,s=ba(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else w.y.isArray(n)||(n=[n,n]);var l=Da(r,a);r.each(a,function(u,h,f,c){var d=r.get(l.dimension,c),v=l.isStacked?d-f:e.altitudeAxis.scale.getExtent()[0],p=Math.max(e.altitudeAxis.dataToCoord(f),i),m=e.dataToPoint([u,h,v]),g=e.dataToPoint([u,h,d]),_=Qs.sub([],g,m);Qs.normalize(_,_);var y=[n[0],p,n[1]];r.setItemLayout(c,[m,_,y])}),r.setLayout("orient",O.UP.array)}function Ed(t,e){var r=t.getData(),i=t.get("barSize"),n=t.get("minHeight")||0,a=["lng","lat","alt"].map(function(h){return t.coordDimToDataDim(h)[0]});if(i==null){var o=Math.min(e.size[0],e.size[2]),s=ba(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else w.y.isArray(i)||(i=[i,i]);var l=[0,1,0],u=Da(r,a);r.each(a,function(h,f,c,d){var v=r.get(u.dimension,d),p=u.isStacked?v-c:e.altitudeAxis.scale.getExtent()[0],m=Math.max(e.altitudeAxis.dataToCoord(c),n),g=e.dataToPoint([h,f,p]),_=[i[0],m,i[1]];r.setItemLayout(d,[g,l,_])}),r.setLayout("orient",[1,0,0])}function wd(t,e){var r=t.getData(),i=t.coordDimToDataDim("lng")[0],n=t.coordDimToDataDim("lat")[0],a=t.coordDimToDataDim("alt")[0],o=t.get("barSize"),s=t.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),u=r.getDataExtent(n),h=e.dataToPoint([l[0],u[0]]),f=e.dataToPoint([l[1],u[1]]),c=Math.min(Math.abs(h[0]-f[0]),Math.abs(h[1]-f[1]))||1,d=ba(r,i,n);o=[c/Math.sqrt(r.count()/d),c/Math.sqrt(r.count()/d)]}else w.y.isArray(o)||(o=[o,o]),o[0]/=e.getScale()/16,o[1]/=e.getScale()/16;var v=[0,0,1],p=[i,n,a],m=Da(r,p);r.each(p,function(g,_,y,S){var x=r.get(m.dimension,S),E=m.isStacked?x-y:0,D=e.dataToPoint([g,_,E]),L=e.dataToPoint([g,_,x]),b=Math.max(L[2]-D[2],s),M=[o[0],b,o[1]];r.setItemLayout(S,[D,v,M])}),r.setLayout("orient",[1,0,0])}function Da(t,e){var r=Td(t,e[2]);return{dimension:r?t.getCalculationInfo("stackResultDimension"):e[2],isStacked:r}}function Ad(t){t.registerLayout(function(e,r){e.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?Sd(i,n):a==="cartesian3D"?xd(i,n):a==="geo3D"?Ed(i,n):(a==="mapbox3D"||a==="maptalks3D")&&wd(i,n)})})}var La={};La.getFormattedLabel=function(t,e,r,i,n){r=r||"normal";var a=t.getData(i),o=a.getItemModel(e),s=t.getDataParams(e,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=w.k.formatTpl(l,s)),u},La.normalizeToArray=function(t){return t instanceof Array?t:t==null?[]:[t]};var Xr=La;function bd(t,e){var r=[];return w.y.each(t.dimensions,function(i){var n=t.getDimensionInfo(i),a=n.otherDims,o=a[e];o!=null&&o!==!1&&(r[o]=n.name)}),r}var mi=function(t,e,r){function i(f){var c=!0,d=[],v=bd(n,"tooltip");v.length?w.y.each(v,function(m){p(n.get(m,e),m)}):w.y.each(f,p);function p(m,g){var _=n.getDimensionInfo(g);if(!(!_||_.otherDims.tooltip===!1)){var y=_.type,S=(c?"- "+(_.tooltipName||_.name)+": ":"")+(y==="ordinal"?m+"":y==="time"?r?"":w.k.formatTime("yyyy/MM/dd hh:mm:ss",m):w.k.addCommas(m));S&&d.push(w.k.encodeHTML(S))}}return(c?"<br/>":"")+d.join(c?"<br/>":", ")}var n=t.getData(),a=t.getRawValue(e),o=w.y.isArray(a)?i(a):w.k.encodeHTML(w.k.addCommas(a)),s=n.getName(e),l=je(n,e);w.y.isObject(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=w.k.getTooltipMarker(l),h=t.name;return h==="\0-"&&(h=""),h=h?w.k.encodeHTML(h)+(r?": ":"<br/>"):"",r?u+h+o:h+u+(s?w.k.encodeHTML(s)+": "+o:o)},dn=function(t,e,r){r=r||t.getSource();var i=e||w.l(t.get("coordinateSystem"))||["x","y","z"],n=w.o.createDimensions(r,{dimensionsDefine:r.dimensionsDefine||t.get("dimensions"),encodeDefine:r.encodeDefine||t.get("encode"),coordDimensions:i.map(function(s){var l=t.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});t.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=t.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=w.o.dataStack.enableDataStack(t,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new w.e(n,t);return o.setCalculationInfo(a),o.initData(r),o},Js=w.g.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,r){return dn(this)},getFormattedLabel:function(e,r,i,n){var a=Xr.getFormattedLabel(this,e,r,i,n);return a==null&&(a=this.getData().get("z",e)),a},formatTooltip:function(e){return mi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});w.y.merge(Js.prototype,zr);var Dd=Js,Le=Ie.vec3,Ld=Ie.mat3,Ca=he.extend(function(){return{attributes:{position:new he.Attribute("position","float",3,"POSITION"),normal:new he.Attribute("normal","float",3,"NORMAL"),color:new he.Attribute("color","float",4,"COLOR"),prevPosition:new he.Attribute("prevPosition","float",3),prevNormal:new he.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var r=this.enableNormal,i=this.getBarVertexCount()*e,n=this.getBarTriangleCount()*e;this.vertexCount!==i&&(this.attributes.position.init(i),r?this.attributes.normal.init(i):this.attributes.normal.value=null,this.attributes.color.init(i)),this.triangleCount!==n&&(this.indices=i>65535?new Uint32Array(n*3):new Uint16Array(n*3),this._dataIndices=new Uint32Array(i))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var r=e*4+3,i=e*2+1;return(r+1)*i*2+4},setColor:function(e,r){for(var i=this.getBarVertexCount(),n=i*e,a=i*(e+1),o=n;o<a;o++)this.attributes.color.set(o,r);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var t=Le.create,e=Le.scaleAndAdd,r=t(),i=t(),n=t(),a=t(),o=t(),s=t(),l=t(),u=[],h=[],f=0;f<8;f++)u[f]=t();for(var c=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],d=[0,1,2,0,2,3],v=[],f=0;f<c.length;f++)for(var p=c[f],m=0;m<2;m++){for(var g=[],_=0;_<3;_++)g.push(p[d[m*3+_]]);v.push(g)}return function(y,S,x,E,D,L){var b=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(y,S,x,E,this.bevelSize,this.bevelSegments,D);else{Le.copy(n,S),Le.normalize(n,n),Le.cross(a,x,n),Le.normalize(a,a),Le.cross(i,n,a),Le.normalize(a,a),Le.negate(o,i),Le.negate(s,n),Le.negate(l,a),e(u[0],y,i,E[0]/2),e(u[0],u[0],a,E[2]/2),e(u[1],y,i,E[0]/2),e(u[1],u[1],l,E[2]/2),e(u[2],y,o,E[0]/2),e(u[2],u[2],l,E[2]/2),e(u[3],y,o,E[0]/2),e(u[3],u[3],a,E[2]/2),e(r,y,n,E[1]),e(u[4],r,i,E[0]/2),e(u[4],u[4],a,E[2]/2),e(u[5],r,i,E[0]/2),e(u[5],u[5],l,E[2]/2),e(u[6],r,o,E[0]/2),e(u[6],u[6],l,E[2]/2),e(u[7],r,o,E[0]/2),e(u[7],u[7],a,E[2]/2);var M=this.attributes;if(this.enableNormal){h[0]=i,h[1]=o,h[2]=n,h[3]=s,h[4]=a,h[5]=l;for(var N=this._vertexOffset,C=0;C<c.length;C++){for(var B=this._triangleOffset*3,P=0;P<6;P++)this.indices[B++]=N+d[P];N+=4,this._triangleOffset+=2}for(var C=0;C<c.length;C++)for(var j=h[C],P=0;P<4;P++){var G=c[C][P];M.position.set(this._vertexOffset,u[G]),M.normal.set(this._vertexOffset,j),M.color.set(this._vertexOffset++,D)}}else{for(var C=0;C<v.length;C++){for(var B=this._triangleOffset*3,P=0;P<3;P++)this.indices[B+P]=v[C][P]+this._vertexOffset;this._triangleOffset++}for(var C=0;C<u.length;C++)M.position.set(this._vertexOffset,u[C]),M.color.set(this._vertexOffset++,D)}}for(var H=this._vertexOffset,C=b;C<H;C++)this._dataIndices[C]=L}}(),_addBevelBar:function(){var t=Le.create(),e=Le.create(),r=Le.create(),i=Ld.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,h,f,c,d,v){Le.copy(e,u),Le.normalize(e,e),Le.cross(r,h,e),Le.normalize(r,r),Le.cross(t,e,r),Le.normalize(r,r),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=e[0],i[4]=e[1],i[5]=e[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],c=Math.min(f[0],f[2])/2*c;for(var p=0;p<3;p++)n[p]=Math.max(f[p]-c*2,0);for(var m=(f[0]-n[0])/2,g=(f[1]-n[1])/2,_=(f[2]-n[2])/2,y=[],S=[],x=this._vertexOffset,E=[],p=0;p<2;p++){E[p]=E[p]=[];for(var D=0;D<=d;D++)for(var L=0;L<4;L++){(D===0&&p===0||p===1&&D===d)&&E[p].push(x);for(var b=0;b<=d;b++){var M=b/d*Math.PI/2+Math.PI/2*L,N=D/d*Math.PI/2+Math.PI/2*p;S[0]=m*Math.cos(M)*Math.sin(N),S[1]=g*Math.cos(N),S[2]=_*Math.sin(M)*Math.sin(N),y[0]=S[0]+a[L]*n[0]/2,y[1]=S[1]+g+s[p]*n[1]/2,y[2]=S[2]+o[L]*n[2]/2,Math.abs(m-g)<1e-6&&Math.abs(g-_)<1e-6||(S[0]/=m*m,S[1]/=g*g,S[2]/=_*_),Le.normalize(S,S),Le.transformMat3(y,y,i),Le.transformMat3(S,S,i),Le.add(y,y,l),this.attributes.position.set(x,y),this.enableNormal&&this.attributes.normal.set(x,S),this.attributes.color.set(x,v),x++}}}for(var C=d*4+3,B=d*2+1,P=C+1,L=0;L<B;L++)for(var p=0;p<=C;p++){var j=L*P+p+this._vertexOffset,G=L*P+(p+1)%P+this._vertexOffset,H=(L+1)*P+(p+1)%P+this._vertexOffset,V=(L+1)*P+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[H,j,G]),this.setTriangleIndices(this._triangleOffset++,[H,V,j])}this.setTriangleIndices(this._triangleOffset++,[E[0][0],E[0][2],E[0][1]]),this.setTriangleIndices(this._triangleOffset++,[E[0][0],E[0][3],E[0][2]]),this.setTriangleIndices(this._triangleOffset++,[E[1][0],E[1][1],E[1][2]]),this.setTriangleIndices(this._triangleOffset++,[E[1][0],E[1][2],E[1][3]]),this._vertexOffset=x}}()});w.y.defaults(Ca.prototype,oi),w.y.defaults(Ca.prototype,ga);var Cd=Ca,Md=Ie.vec3,Pd=w.b.extend({type:"bar3D",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this._api=r,this._labelsBuilder=new _a(256,256,r);var i=this;this._labelsBuilder.getLabelPosition=function(n,a,o){if(i._data){var s=i._data.getItemLayout(n),l=s[0],u=s[1],h=s[2][1];return Md.scaleAndAdd([],l,u,o+h)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,r,i){var n=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=n,this._barMesh||(this._barMesh=new T.Mesh({geometry:new Cd,shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var a=e.coordinateSystem;if(this._doRender(e,i),a&&a.viewGL){a.viewGL.add(this.groupGL);var o=a.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[o]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,r){var i=e.getData(),n=e.get("shading"),a=n!=="color",o=this,s=this._barMesh,l="ecgl."+n;(!s.material||s.material.shader.name!==l)&&(s.material=T.createMaterial(l,["VERTEX_COLOR"])),T.setMaterialFromModel(n,s.material,e,r),s.geometry.enableNormal=a,s.geometry.resetOffset();var u=e.get("bevelSize"),h=e.get("bevelSmoothness");s.geometry.bevelSegments=h,s.geometry.bevelSize=u;var f=[],c=new Float32Array(i.count()*4),d=0,v=0,p=!1;i.each(function(y){if(!!i.hasValue(y)){var S=je(i,y),x=Ze(i,y);x==null&&(x=1),T.parseColor(S,f),f[3]*=x,c[d++]=f[0],c[d++]=f[1],c[d++]=f[2],c[d++]=f[3],f[3]>0&&(v++,f[3]<.99&&(p=!0))}}),s.geometry.setBarCount(v);var m=i.getLayout("orient"),g=this._barIndexOfData=new Int32Array(i.count()),v=0;i.each(function(y){if(!i.hasValue(y)){g[y]=-1;return}var S=i.getItemLayout(y),x=S[0],E=S[1],D=S[2],L=y*4;f[0]=c[L++],f[1]=c[L++],f[2]=c[L++],f[3]=c[L++],f[3]>0&&(o._barMesh.geometry.addBar(x,E,m,D,f,y),g[y]=v++)}),s.geometry.dirty(),s.geometry.updateBoundingBox();var _=s.material;_.transparent=p,_.depthMask=!p,s.geometry.sortTriangles=p,this._initHandler(e,r)},_initHandler:function(e,r){var i=e.getData(),n=this._barMesh,a=e.coordinateSystem.type==="cartesian3D";n.seriesIndex=e.seriesIndex;var o=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(s){var l=n.geometry.getDataIndexOfVertex(s.triangle[0]);l!==o&&(this._downplay(o),this._highlight(l),this._labelsBuilder.updateLabels([l]),a&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get("x",l),i.get("y",l),i.get("z",l,!0)]})),o=l,n.dataIndex=l},this),n.on("mouseout",function(s){this._downplay(o),this._labelsBuilder.updateLabels(),o=-1,n.dataIndex=-1,a&&r.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var r=this._data;if(!!r){var i=this._barIndexOfData[e];if(!(i<0)){var n=r.getItemModel(e),a=n.getModel("emphasis.itemStyle"),o=a.get("color"),s=a.get("opacity");if(o==null){var l=je(r,e);o=w.h.lift(l,-.4)}s==null&&(s=Ze(r,e));var u=T.parseColor(o);u[3]*=s,this._barMesh.geometry.setColor(i,u),this._api.getZr().refresh()}}},_downplay:function(e){var r=this._data;if(!!r){var i=this._barIndexOfData[e];if(!(i<0)){var n=je(r,e),a=Ze(r,e),o=T.parseColor(n);o[3]*=a,this._barMesh.geometry.setColor(i,o),this._api.getZr().refresh()}}},highlight:function(e,r,i,n){this._toggleStatus("highlight",e,r,i,n)},downplay:function(e,r,i,n){this._toggleStatus("downplay",e,r,i,n)},_toggleStatus:function(e,r,i,n,a){var o=r.getData(),s=re.queryDataIndex(o,a),l=this;s!=null?w.y.each(Xr.normalizeToArray(s),function(u){e==="highlight"?this._highlight(u):this._downplay(u)},this):o.each(function(u){e==="highlight"?l._highlight(u):l._downplay(u)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Rd(t){t.registerChartView(Pd),t.registerSeriesModel(Dd),Ad(t),t.registerProcessor(function(e,r){e.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}Object(w.x)(Rd);var Nd=w.g.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,r){return dn(this)},formatTooltip:function(e){return mi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Id=Nd,Od=Y("loD1"),Bd=Ie.vec3;T.Shader.import(rn);var Fd=w.b.extend({type:"line3D",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this._api=r},render:function(e,r,i){var n=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=n,this._line3DMesh||(this._line3DMesh=new T.Mesh({geometry:new fr({useNativeLine:!1,sortTriangles:!0}),material:new T.Material({shader:T.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var a=e.coordinateSystem;if(a&&a.viewGL){a.viewGL.add(this.groupGL);var o=a.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[o]("fragment","SRGB_DECODE")}this._doRender(e,i),this._data=e.getData(),this._camera=a.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,r){var i=e.getData(),n=this._line3DMesh;n.geometry.resetOffset();var a=i.getLayout("points"),o=[],s=new Float32Array(a.length/3*4),l=0,u=!1;i.each(function(c){var d=je(i,c),v=Ze(i,c);v==null&&(v=1),T.parseColor(d,o),o[3]*=v,s[l++]=o[0],s[l++]=o[1],s[l++]=o[2],s[l++]=o[3],o[3]<.99&&(u=!0)}),n.geometry.setVertexCount(n.geometry.getPolylineVertexCount(a)),n.geometry.setTriangleCount(n.geometry.getPolylineTriangleCount(a)),n.geometry.addPolyline(a,s,re.firstNotNull(e.get("lineStyle.width"),1)),n.geometry.dirty(),n.geometry.updateBoundingBox();var h=n.material;h.transparent=u,h.depthMask=!u;var f=e.getModel("debug.wireframe");f.get("show")?(n.geometry.createAttribute("barycentric","float",3),n.geometry.generateBarycentric(),n.material.set("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",T.parseColor(f.get("lineStyle.color")||"rgba(0,0,0,0.5)")),n.material.set("wireframeLineWidth",re.firstNotNull(f.get("lineStyle.width"),1))):n.material.set("both","WIREFRAME_TRIANGLE"),this._points=a,this._initHandler(e,r)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,r){var i=e.getData(),n=e.coordinateSystem,a=this._line3DMesh,o=-1;a.seriesIndex=e.seriesIndex,a.off("mousemove"),a.off("mouseout"),a.on("mousemove",function(s){var l=n.pointToData(s.point.array),u=i.indicesOfNearest("x",l[0])[0];u!==o&&(r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get("x",u),i.get("y",u),i.get("z",u)]}),a.dataIndex=u),o=u},this),a.on("mouseout",function(s){o=-1,a.dataIndex=-1,r.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new k,r=this._camera;k.multiply(e,r.projectionMatrix,r.viewMatrix);var i=this._positionNDC,n=this._points,a=n.length/3;(!i||i.length/2!==a)&&(i=this._positionNDC=new Float32Array(a*2));for(var o=[],s=0;s<a;s++){var l=s*3,u=s*2;o[0]=n[l],o[1]=n[l+1],o[2]=n[l+2],o[3]=1,Bd.transformMat4(o,o,e.array),i[u]=o[0]/o[3],i[u+1]=o[1]/o[3]}},_pick:function(e,r,i,n,a,o){var s=this._positionNDC,l=this._data.hostModel,u=l.get("lineStyle.width"),h=-1,f=i.viewport.width,c=i.viewport.height,d=f*.5,v=c*.5;e=(e+1)*d,r=(r+1)*v;for(var p=1;p<s.length/2;p++){var m=(s[(p-1)*2]+1)*d,g=(s[(p-1)*2+1]+1)*v,_=(s[p*2]+1)*d,y=(s[p*2+1]+1)*v;if(Od.a(m,g,_,y,u,e,r)){var S=(m-e)*(m-e)+(g-r)*(g-r),x=(_-e)*(_-e)+(y-r)*(y-r);h=S<x?p-1:p}}if(h>=0){var E=h*3,D=new O(this._points[E],this._points[E+1],this._points[E+2]);o.push({dataIndex:h,point:D,pointWorld:D.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(D)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Ud(t){t.registerChartView(Fd),t.registerSeriesModel(Id),t.registerLayout(function(e,r){e.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],u=a.dimensions,h=u.map(function(f){return i.coordDimToDataDim(f)[0]});a&&n.each(h,function(f,c,d,v){s[0]=f,s[1]=c,s[2]=d,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}Object(w.x)(Ud);var Gd=w.g.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,r){return dn(this)},getFormattedLabel:function(e,r,i,n){var a=Xr.getFormattedLabel(this,e,r,i,n);if(a==null){var o=this.getData(),s=o.dimensions[o.dimensions.length-1];a=o.get(s,e)}return a},formatTooltip:function(e){return mi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Ma(t,e,r){var e=e||document.createElement("canvas");e.width=t,e.height=t;var i=e.getContext("2d");return r&&r(i),e}function zd(t,e,r,i){w.y.isArray(e)||(e=[e,e]);var n=Pa.getMarginByStyle(r,i),a=e[0]+n.left+n.right,o=e[1]+n.top+n.bottom,s=w.o.createSymbol(t,0,0,e[0],e[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var u=s.getBoundingRect();return s.x-=u.x,s.y-=u.y,s.setStyle(r),s.update(),s.__size=l,s}function Hd(t,e,r){var i=e.width,n=e.height,a=t.canvas.width,o=t.canvas.height,s=i/a,l=n/o;function u(g){return g<128?1:-1}function h(g,_){var y=Infinity;g=Math.floor(g*s),_=Math.floor(_*l);for(var S=_*i+g,x=e.data[S*4],E=u(x),D=Math.max(_-r,0);D<Math.min(_+r,n);D++)for(var L=Math.max(g-r,0);L<Math.min(g+r,i);L++){var S=D*i+L,b=e.data[S*4],M=u(b),N=L-g,C=D-_;if(E!==M){var B=N*N+C*C;B<y&&(y=B)}}return E*Math.sqrt(y)}for(var f=t.createImageData(a,o),c=0;c<o;c++)for(var d=0;d<a;d++){var v=h(d,c),p=v/r*.5+.5,m=(c*a+d)*4;f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=255}return f}var Pa={getMarginByStyle:function(e){var r=e.minMargin||0,i=0;e.stroke&&e.stroke!=="none"&&(i=e.lineWidth==null?1:e.lineWidth);var n=e.shadowBlur||0,a=e.shadowOffsetX||0,o=e.shadowOffsetY||0,s={};return s.left=Math.max(i/2,-a+n,r),s.right=Math.max(i/2,a+n,r),s.top=Math.max(i/2,-o+n,r),s.bottom=Math.max(i/2,o+n,r),s},createSymbolSprite:function(e,r,i,n){var a=zd(e,r,i),o=Pa.getMarginByStyle(i);return{image:Ma(a.__size,n,function(s){w.p(s,a)}),margin:o}},createSDFFromCanvas:function(e,r,i,n){return Ma(r,n,function(a){var o=e.getContext("2d"),s=o.getImageData(0,0,e.width,e.height);a.putImageData(Hd(a,s,i),0,0)})},createSimpleSprite:function(e,r){return Ma(e,r,function(i){var n=e/2;i.beginPath(),i.arc(n,n,60,0,Math.PI*2,!1),i.closePath();var a=i.createRadialGradient(n,n,0,n,n,n);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),a.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=a,i.fill()})}},$s=Pa,el=Ie.vec3,Vd={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,r){var i=this.indices,n=el.create();if(!i){i=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var a=0;a<i.length;a++)i[a]=a}if(r===0){var o=this.attributes.position,e=e.array,s=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var l,a=0;a<this.vertexCount;a++){o.get(a,n);var u=el.sqrDist(n,e);isNaN(u)&&(u=1e7,s++),a===0?(l=u,u=0):u=u-l,this._zList[a]=u}this._noneCount=s}if(this.vertexCount<2e4)r===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var a=0;a<3;a++)this._progressiveQuickSort(r*3+a);this.dirtyIndices()},_simpleSort:function(e){var r=this._zList,i=this.indices;function n(a,o){return r[o]-r[a]}e?Array.prototype.sort.call(i,n):un.sort(i,n,0,i.length-1)},_progressiveQuickSort:function(e){var r=this._zList,i=this.indices;this._quickSort=this._quickSort||new un,this._quickSort.step(i,function(n,a){return r[a]-r[n]},e)}},Wd=`@export ecgl.sdfSprite.vertex

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
@end`,Ra=Ie.vec4;T.Shader.import(Wd);var kd=T.Mesh.extend(function(){var t=new T.Geometry({dynamic:!0,attributes:{color:new T.Geometry.Attribute("color","float",4,"COLOR"),position:new T.Geometry.Attribute("position","float",3,"POSITION"),size:new T.Geometry.Attribute("size","float",1),prevPosition:new T.Geometry.Attribute("prevPosition","float",3),prevSize:new T.Geometry.Attribute("prevSize","float",1)}});Object.assign(t,Vd);var e=new T.Material({shader:T.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});e.enableTexture("sprite"),e.define("both","VERTEX_COLOR"),e.define("both","VERTEX_SIZE");var r=new T.Texture2D({image:document.createElement("canvas"),flipY:!1});return e.set("sprite",r),t.pick=this._pick.bind(this),{geometry:t,material:e,mode:T.Mesh.POINTS,sizeScale:1}},{_pick:function(e,r,i,n,a,o){var s=this._positionNDC;if(!!s)for(var l=i.viewport,u=2/l.width,h=2/l.height,f=this.geometry.vertexCount-1;f>=0;f--){var c;this.geometry.indices?c=this.geometry.indices[f]:c=f;var d=s[c*2],v=s[c*2+1],p=this.geometry.attributes.size.get(c)/this.sizeScale,m=p/2;if(e>d-m*u&&e<d+m*u&&r>v-m*h&&r<v+m*h){var g=new T.Vector3,_=new T.Vector3;this.geometry.attributes.position.get(c,g.array),T.Vector3.transformMat4(_,g,this.worldTransform),o.push({vertexIndex:c,point:g,pointWorld:_,target:this,distance:_.distance(n.getWorldPosition())})}}},updateNDCPosition:function(e,r,i){var n=this._positionNDC,a=this.geometry;(!n||n.length/2!==a.vertexCount)&&(n=this._positionNDC=new Float32Array(a.vertexCount*2));for(var o=Ra.create(),s=0;s<a.vertexCount;s++)a.attributes.position.get(s,o),o[3]=1,Ra.transformMat4(o,o,e.array),Ra.scale(o,o,1/o[3]),n[s*2]=o[0],n[s*2+1]=o[1]}}),Xd=kd,tl=20,rl=-10;function jd(t,e){return t&&e&&t[0]===e[0]&&t[1]===e[1]}function Na(t,e){this.rootNode=new T.Node,this.is2D=t,this._labelsBuilder=new _a(256,256,e),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=e,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Na.prototype={constructor:Na,highlightOnMouseover:!0,update:function(e,r,i,n,a){var o=this._prevMesh;this._prevMesh=this._mesh,this._mesh=o;var s=e.getData();if(n==null&&(n=0),a==null&&(a=s.count()),this._startDataIndex=n,this._endDataIndex=a-1,!this._mesh){var l=this._prevMesh&&this._prevMesh.material;this._mesh=new Xd({renderOrder:10,frustumCulling:!1}),l&&(this._mesh.material=l)}var l=this._mesh.material,u=this._mesh.geometry,h=u.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var f=this._getSymbolInfo(e,n,a),c=i.getDevicePixelRatio(),d=e.getModel("itemStyle").getItemStyle(),v=e.get("large"),p=1;f.maxSize>2?(p=this._updateSymbolSprite(e,d,f,c),l.enableTexture("sprite")):l.disableTexture("sprite"),h.position.init(a-n);var m=[];if(v){l.undefine("VERTEX_SIZE"),l.undefine("VERTEX_COLOR");var g=xc(s),_=Tc(s);T.parseColor(g,m),m[3]*=_,l.set({color:m,u_Size:f.maxSize*this._sizeScale})}else l.set({color:[1,1,1,1]}),l.define("VERTEX_SIZE"),l.define("VERTEX_COLOR"),h.size.init(a-n),h.color.init(a-n),this._originalOpacity=new Float32Array(a-n);for(var y=s.getLayout("points"),S=h.position.value,x=!1,E=0;E<a-n;E++){var D=E*3,L=E*2;if(this.is2D?(S[D]=y[L],S[D+1]=y[L+1],S[D+2]=rl):(S[D]=y[D],S[D+1]=y[D+1],S[D+2]=y[D+2]),!v){var g=je(s,E),_=Ze(s,E);T.parseColor(g,m),m[3]*=_,h.color.set(E,m),m[3]<.99&&(x=!0);var b=s.getItemVisual(E,"symbolSize");b=b instanceof Array?Math.max(b[0],b[1]):b,isNaN(b)&&(b=0),h.size.value[E]=b*p*this._sizeScale,this._originalOpacity[E]=m[3]}}this._mesh.sizeScale=p,u.updateBoundingBox(),u.dirty(),this._updateMaterial(e,d);var M=e.coordinateSystem;if(M&&M.viewGL){var N=M.viewGL.isLinearSpace()?"define":"undefine";l[N]("fragment","SRGB_DECODE")}v||this._updateLabelBuilder(e,n,a),this._updateHandler(e,r,i),this._updateAnimation(e),this._api=i},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,r,i,n){i.maxSize=Math.min(i.maxSize*2,200);var a=[];return i.aspect>1?(a[0]=i.maxSize,a[1]=i.maxSize/i.aspect):(a[1]=i.maxSize,a[0]=i.maxSize*i.aspect),a[0]=a[0]||1,a[1]=a[1]||1,(this._symbolType!==i.type||!jd(this._symbolSize,a)||this._lineWidth!==r.lineWidth)&&($s.createSymbolSprite(i.type,a,{fill:"#fff",lineWidth:r.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(a[0]/2,10)},this._spriteImageCanvas),$s.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),tl,this._mesh.material.get("sprite").image),this._symbolType=i.type,this._symbolSize=a,this._lineWidth=r.lineWidth),this._spriteImageCanvas.width/i.maxSize*n},_updateMaterial:function(e,r){var i=e.get("blendMode")==="lighter"?T.additiveBlend:null,n=this._mesh.material;n.blend=i,n.set("lineWidth",r.lineWidth/tl);var a=T.parseColor(r.stroke);n.set("strokeColor",a),n.transparent=!0,n.depthMask=!1,n.depthTest=!this.is2D,n.sortVertices=!this.is2D},_updateLabelBuilder:function(e,r,i){var n=e.getData(),a=this._mesh.geometry,o=a.attributes.position.value,r=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(n,r,i),this._labelsBuilder.getLabelPosition=function(l,u,h){var f=(l-r)*3;return[o[f],o[f+1],o[f+2]]},this._labelsBuilder.getLabelDistance=function(l,u,h){var f=a.attributes.size.get(l-r)/s;return f/2+h},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,r,i){var n=e.getData(),a=this._mesh,o=this,s=-1,l=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",u;l&&(u=e.coordinateSystem.model),a.seriesIndex=e.seriesIndex,a.off("mousemove"),a.off("mouseout"),a.on("mousemove",function(h){var f=h.vertexIndex+o._startDataIndex;f!==s&&(this.highlightOnMouseover&&(this.downplay(n,s),this.highlight(n,f),this._labelsBuilder.updateLabels([f])),l&&i.dispatchAction({type:"grid3DShowAxisPointer",value:[n.get(e.coordDimToDataDim("x")[0],f),n.get(e.coordDimToDataDim("y")[0],f),n.get(e.coordDimToDataDim("z")[0],f)],grid3DIndex:u.componentIndex})),a.dataIndex=f,s=f},this),a.on("mouseout",function(h){var f=h.vertexIndex+o._startDataIndex;this.highlightOnMouseover&&(this.downplay(n,f),this._labelsBuilder.updateLabels()),s=-1,a.dataIndex=-1,l&&i.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:u.componentIndex})},this)},updateLayout:function(e,r,i){var n=e.getData();if(!!this._mesh){var a=this._mesh.geometry.attributes.position.value,o=n.getLayout("points");if(this.is2D)for(var s=0;s<o.length/2;s++){var l=s*3,u=s*2;a[l]=o[u],a[l+1]=o[u+1],a[l+2]=rl}else for(var s=0;s<o.length;s++)a[s]=o[s];this._mesh.geometry.dirty(),i.getZr().refresh()}},updateView:function(e){if(!!this._mesh){var r=new k;k.mul(r,e.viewMatrix,this._mesh.worldTransform),k.mul(r,e.projectionMatrix,r),this._mesh.updateNDCPosition(r,this.is2D,this._api)}},highlight:function(e,r){if(!(r>this._endDataIndex||r<this._startDataIndex)){var i=e.getItemModel(r),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=je(e,r);a=w.h.lift(s,-.4)}o==null&&(o=Ze(e,r));var l=T.parseColor(a);l[3]*=o,this._mesh.geometry.attributes.color.set(r-this._startDataIndex,l),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,r){if(!(r>this._endDataIndex||r<this._startDataIndex)){var i=je(e,r),n=Ze(e,r),a=T.parseColor(i);a[3]*=n,this._mesh.geometry.attributes.color.set(r-this._startDataIndex,a),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var r=this._mesh.geometry,i=0;i<r.vertexCount;i++){var n=this._originalOpacity[i]*e;r.attributes.color.value[i*4+3]=n}r.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var r=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",r/this._sizeScale*e);var i=this._mesh.geometry.attributes;if(i.size.value)for(var n=0;n<i.size.value.length;n++)i.size.value[n]=i.size.value[n]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,r){r&&e.material.set("positionTexture",r),e.material[r?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,r,i){if(e.get("large")){var n=re.firstNotNull(e.get("symbolSize"),1),h,o;return n instanceof Array?(h=Math.max(n[0],n[1]),o=n[0]/n[1]):(h=n,o=1),{maxSize:n,type:e.get("symbol"),aspect:o}}for(var a=e.getData(),o,s=!1,l=a.getItemVisual(0,"symbol")||"circle",u=!1,h=0,f=r;f<i;f++){var n=a.getItemVisual(f,"symbolSize"),c=a.getItemVisual(f,"symbol"),d;if(n instanceof Array)d=n[0]/n[1],h=Math.max(Math.max(n[0],n[1]),h);else{if(isNaN(n))continue;d=1,h=Math.max(n,h)}l=c,o=d}return{maxSize:h,type:l,aspect:o}}};var gi=Na,Zd=w.b.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,r,i){if(this.groupGL.removeAll(),!!e.getData().count()){var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL),this._camera=n.viewGL.camera;var a=this._pointsBuilderList[0];a||(a=this._pointsBuilderList[0]=new gi(!1,i)),this._pointsBuilderList.length=1,this.groupGL.add(a.rootNode),a.update(e,r,i),a.updateView(n.viewGL.camera)}}},incrementalPrepareRender:function(e,r,i){var n=e.coordinateSystem;n&&n.viewGL&&(n.viewGL.add(this.groupGL),this._camera=n.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,r,i,n){if(!(e.end<=e.start)){var a=this._pointsBuilderList[this._currentStep];a||(a=new gi(!1,n),this._pointsBuilderList[this._currentStep]=a),this.groupGL.add(a.rootNode),a.update(r,i,n,e.start,e.end),a.updateView(r.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,r,i,n){this._toggleStatus("highlight",e,r,i,n)},downplay:function(e,r,i,n){this._toggleStatus("downplay",e,r,i,n)},_toggleStatus:function(e,r,i,n,a){var o=r.getData(),s=re.queryDataIndex(o,a),l=e==="highlight";s!=null?w.y.each(Xr.normalizeToArray(s),function(u){for(var h=0;h<this._pointsBuilderList.length;h++){var f=this._pointsBuilderList[h];l?f.highlight(o,u):f.downplay(o,u)}},this):o.each(function(u){for(var h=0;h<this._pointsBuilderList.length;h++){var f=this._pointsBuilderList[h];l?f.highlight(o,u):f.downplay(o,u)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Yd(t){t.registerChartView(Zd),t.registerSeriesModel(Gd),t.registerLayout({seriesType:"scatter3D",reset:function(r){var i=r.coordinateSystem;if(i){var n=i.dimensions;if(n.length<3)return;var a=n.map(function(l){return r.coordDimToDataDim(l)[0]}),o=[],s=[];return{progress:function(u,h){for(var f=new Float32Array((u.end-u.start)*3),c=u.start;c<u.end;c++){var d=(c-u.start)*3;o[0]=h.get(a[0],c),o[1]=h.get(a[1],c),o[2]=h.get(a[2],c),i.dataToPoint(o,s),f[d]=s[0],f[d+1]=s[1],f[d+2]=s[2]}h.setLayout("points",f)}}}}})}Object(w.x)(Yd);var ze=Ie.vec3,il=Ie.vec2,zt=ze.normalize,vn=ze.cross,nl=ze.sub,Ia=ze.add,$t=ze.create,er=$t(),At=$t(),tr=$t(),_i=$t(),al=[],ol=[];function qd(t,e){il.copy(al,t[0]),il.copy(ol,t[1]);var r=[],i=r[0]=$t(),n=r[1]=$t(),a=r[2]=$t(),o=r[3]=$t();e.dataToPoint(al,i),e.dataToPoint(ol,o),zt(er,i),nl(At,o,i),zt(At,At),vn(tr,At,er),zt(tr,tr),vn(At,er,tr),Ia(n,er,At),zt(n,n),zt(er,o),nl(At,i,o),zt(At,At),vn(tr,At,er),zt(tr,tr),vn(At,er,tr),Ia(a,er,At),zt(a,a),Ia(_i,i,o),zt(_i,_i);var s=ze.dot(i,_i),l=ze.dot(_i,n),u=(Math.max(ze.len(i),ze.len(o))-s)/l*2;return ze.scaleAndAdd(n,i,n,u),ze.scaleAndAdd(a,o,a,u),r}function Kd(t,e,r){var i=[],n=i[0]=ze.create(),a=i[1]=ze.create(),o=i[2]=ze.create(),s=i[3]=ze.create();e.dataToPoint(t[0],n),e.dataToPoint(t[1],s);var l=ze.dist(n,s);return ze.lerp(a,n,s,.3),ze.lerp(o,n,s,.3),ze.scaleAndAdd(a,a,r,Math.min(l*.1,10)),ze.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function sl(t,e){for(var r=new Float32Array(t.length*3),i=0,n=[],a=0;a<t.length;a++)e.dataToPoint(t[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function ll(t){var e=[];return t.each(function(r){var i=t.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);e.push(n)}),{coordsList:e}}function Qd(t,e){var r=t.getData(),i=t.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=ll(r);r.each(function(a){var o=n.coordsList[a],s=i?sl:qd;r.setItemLayout(a,s(o,e))})}function ul(t,e,r){var i=t.getData(),n=t.get("polyline"),a=ll(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?sl(s,e):Kd(s,e,r);i.setItemLayout(o,l)})}function Jd(t,e){t.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Qd(r,i):i.type==="geo3D"?ul(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&ul(r,i,[0,0,1])})}var $d=w.g.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,r){var i=new w.e(["value"],this);return i.hasItemOption=!1,i.initData(e.data,[],function(n,a,o,s){if(n instanceof Array)return NaN;i.hasItemOption=!0;var l=n.value;if(l!=null)return l instanceof Array?l[s]:l}),i},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),ev=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`,hl=Ie.vec3;function tv(t){return t>0?1:-1}T.Shader.import(ev);var rv=T.Mesh.extend(function(){var t=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.trail2.vertex"),T.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),e=new fr({dynamic:!0});return e.createAttribute("dist","float",1),e.createAttribute("distAll","float",1),e.createAttribute("start","float",1),{geometry:e,material:t,culling:!1,$ignorePicking:!0}},{updateData:function(e,r,i){var n=e.hostModel,a=this.geometry,o=n.getModel("effect"),s=o.get("trailWidth")*r.getDevicePixelRatio(),l=o.get("trailLength"),u=n.get("effect.constantSpeed"),h=n.get("effect.period")*1e3,f=u!=null;f?this.material.set("speed",u/1e3):this.material.set("period",h),this.material[f?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=n.get("polyline");a.trailLength=l,this.material.set("trailLength",l),a.resetOffset(),["position","positionPrev","positionNext"].forEach(function(L){a.attributes[L].value=i.attributes[L].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(L){a.attributes[L].init(a.vertexCount)}),a.indices=i.indices;var v=[],p=o.get("trailColor"),m=o.get("trailOpacity"),g=p!=null,_=m!=null;this.updateWorldTransform();var y=this.worldTransform.x.len(),S=this.worldTransform.y.len(),x=this.worldTransform.z.len(),E=0,D=0;e.each(function(L){var b=e.getItemLayout(L),M=_?m:Ze(e,L),N=je(e,L);M==null&&(M=1),v=T.parseColor(g?p:N,v),v[3]*=M;for(var C=c?i.getPolylineVertexCount(b):i.getCubicCurveVertexCount(b[0],b[1],b[2],b[3]),B=0,P=[],j=[],G=E;G<E+C;G++)a.attributes.position.get(G,P),P[0]*=y,P[1]*=S,P[2]*=x,G>E&&(B+=hl.dist(P,j)),a.attributes.dist.set(G,B),hl.copy(j,P);D=Math.max(D,B);for(var H=Math.random()*(f?B:h),G=E;G<E+C;G++)a.attributes.distAll.set(G,B),a.attributes.start.set(G,H),a.attributes.offset.set(G,tv(i.attributes.offset.get(G))*s/2),a.attributes.color.set(G,v);E+=C}),this.material.set("spotSize",D*.1*l),this.material.set("spotIntensity",o.get("spotIntensity")),a.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});T.Shader.import(rn);function iv(t){return t.radius!=null?t.radius:t.size!=null?Math.max(t.size[0],t.size[1],t.size[2]):100}var nv=w.b.extend({type:"lines3D",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this._meshLinesMaterial=new T.Material({shader:T.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new T.Mesh({geometry:new fr,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new rv},render:function(e,r,i){this.groupGL.add(this._linesMesh);var n=e.coordinateSystem,a=e.getData();if(n&&n.viewGL){var o=n.viewGL;o.add(this.groupGL),this._updateLines(e,r,i);var s=n.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[s]("fragment","SRGB_DECODE"),this._trailMesh.material[s]("fragment","SRGB_DECODE")}var l=this._trailMesh;if(l.stopAnimation(),e.get("effect.show")){this.groupGL.add(l),l.updateData(a,i,this._linesMesh.geometry),l.__time=l.__time||0;var u=3600*1e3;this._curveEffectsAnimator=l.animate("",{loop:!0}).when(u,{__time:u}).during(function(){l.setAnimationTime(l.__time)}).start()}else this.groupGL.remove(l),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?T.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,r,i){var n=e.getData(),a=e.coordinateSystem,o=this._linesMesh.geometry,s=e.get("polyline");o.expandLine=!0;var l=iv(a);o.segmentScale=l/20;var u="lineStyle.width".split("."),h=i.getDevicePixelRatio(),f=0;n.each(function(p){var m=n.getItemModel(p),g=m.get(u);g==null&&(g=1),n.setItemVisual(p,"lineWidth",g),f=Math.max(g,f)}),o.useNativeLine=!1;var c=0,d=0;n.each(function(p){var m=n.getItemLayout(p);s?(c+=o.getPolylineVertexCount(m),d+=o.getPolylineTriangleCount(m)):(c+=o.getCubicCurveVertexCount(m[0],m[1],m[2],m[3]),d+=o.getCubicCurveTriangleCount(m[0],m[1],m[2],m[3]))}),o.setVertexCount(c),o.setTriangleCount(d),o.resetOffset();var v=[];n.each(function(p){var m=n.getItemLayout(p),g=je(n,p),_=Ze(n,p),y=n.getItemVisual(p,"lineWidth")*h;_==null&&(_=1),v=T.parseColor(g,v),v[3]*=_,s?o.addPolyline(m,v,y):o.addCubicCurve(m[0],m[1],m[2],m[3],v,y)}),o.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function av(t){t.registerChartView(nv),t.registerSeriesModel($d),t.registerLayout(Jd),t.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),t.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),t.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}Object(w.x)(av);function fl(t,e){for(var r=[],i=0;i<e.length;i++)r.push(t.dataToPoint(e[i]));return r}var cl=w.g.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var r=this.coordinateSystem,i=this.getData().getItemModel(e),n=i.option instanceof Array?i.option:i.getShallow("coords");i.get("multiPolygon")||(n=[n]);for(var a=[],o=0;o<n.length;o++){for(var s=[],l=1;l<n[o].length;l++)s.push(fl(r,n[o][l]));a.push({exterior:fl(r,n[o][0]),interiors:s})}return a},getInitialData:function(e){var r=new w.e(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});w.y.merge(cl.prototype,zr);var ov=cl,sv=w.b.extend({type:"polygons3D",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,r,i){this.groupGL.removeAll();var n=e.coordinateSystem;n&&n.viewGL&&n.viewGL.add(this.groupGL);var a=this._geo3DBuilderList[0];a||(a=new hn(i),a.extrudeY=n.type!=="mapbox3D"&&n.type!=="maptalks3D",this._geo3DBuilderList[0]=a),this._updateShaderDefines(n,a),a.update(e,r,i),this._geo3DBuilderList.length=1,this.groupGL.add(a.rootNode)},incrementalPrepareRender:function(e,r,i){this.groupGL.removeAll();var n=e.coordinateSystem;n&&n.viewGL&&n.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,r,i,n){var a=this._geo3DBuilderList[this._currentStep],o=r.coordinateSystem;a||(a=new hn(n),a.extrudeY=o.type!=="mapbox3D"&&o.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=a),a.update(r,i,n,e.start,e.end),this.groupGL.add(a.rootNode),this._updateShaderDefines(o,a),this._currentStep++},_updateShaderDefines:function(e,r){var i=e.viewGL.isLinearSpace()?"define":"undefine";r.rootNode.traverse(function(n){n.material&&(n.material[i]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(n.material.define("fragment","NORMAL_UP_AXIS",2),n.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function lv(t){t.registerChartView(sv),t.registerSeriesModel(ov)}Object(w.x)(lv);var dl=w.g.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return mi(this,e)},getInitialData:function(e,r){var i=e.data;function n(V){return!(isNaN(V.min)||isNaN(V.max)||isNaN(V.step))}function a(V){var U=w.q.getPrecisionSafe;return Math.max(U(V.min),U(V.max),U(V.step))+1}if(!i)if(e.parametric){var x=e.parametricEquation||{},E=x.u||{},D=x.v||{};["u","v"].forEach(function(U){!!n(x[U])}),["x","y","z"].forEach(function(U){typeof x[U]=="function"});var L=Math.floor((E.max+E.step-E.min)/E.step),b=Math.floor((D.max+D.step-D.min)/D.step);i=new Float32Array(L*b*5);for(var M=a(E),N=a(D),d=0,v=0;v<b;v++)for(var p=0;p<L;p++){var C=p*E.step+E.min,B=v*D.step+D.min,P=w.q.round(Math.min(C,E.max),M),j=w.q.round(Math.min(B,D.max),N),m=x.x(P,j),g=x.y(P,j),S=x.z(P,j);i[d++]=m,i[d++]=g,i[d++]=S,i[d++]=P,i[d++]=j}}else{var o=e.equation||{},s=o.x||{},l=o.y||{};if(["x","y"].forEach(function(V){!!n(o[V])}),typeof o.z!="function")return;var u=Math.floor((s.max+s.step-s.min)/s.step),h=Math.floor((l.max+l.step-l.min)/l.step);i=new Float32Array(u*h*3);for(var f=a(s),c=a(l),d=0,v=0;v<h;v++)for(var p=0;p<u;p++){var m=p*s.step+s.min,g=v*l.step+l.min,_=w.q.round(Math.min(m,s.max),f),y=w.q.round(Math.min(g,l.max),c),S=o.z(_,y);i[d++]=_,i[d++]=y,i[d++]=S}}var G=["x","y","z"];e.parametric&&G.push("u","v");var H=dn(this,G,i);return H},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});w.y.merge(dl.prototype,zr);var uv=dl,xr=Ie.vec3;function hv(t){return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])}var fv=w.b.extend({type:"surface",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node},render:function(e,r,i){var n=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=n,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var a=e.coordinateSystem,o=e.get("shading"),s=e.getData(),l="ecgl."+o;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==l)&&(this._surfaceMesh.material=T.createMaterial(l,["VERTEX_COLOR","DOUBLE_SIDED"])),T.setMaterialFromModel(o,this._surfaceMesh.material,e,i),a&&a.viewGL){a.viewGL.add(this.groupGL);var u=a.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[u]("fragment","SRGB_DECODE")}var h=e.get("parametric"),f=e.get("dataShape");f||(f=this._getDataShape(s,h));var c=e.getModel("wireframe"),d=c.get("lineStyle.width"),v=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,f,v);var p=this._surfaceMesh.material;v?(p.define("WIREFRAME_QUAD"),p.set("wireframeLineWidth",d),p.set("wireframeLineColor",T.parseColor(c.get("lineStyle.color")))):p.undefine("WIREFRAME_QUAD"),this._initHandler(e,i),this._updateAnimation(e)},_updateAnimation:function(e){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new T.Mesh({geometry:new T.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,ga),e},_initHandler:function(e,r){var i=e.getData(),n=this._surfaceMesh,a=e.coordinateSystem;function o(l,u){for(var h=Infinity,f=-1,c=[],d=0;d<l.length;d++){n.geometry.attributes.position.get(l[d],c);var v=xr.dist(u.array,c);v<h&&(h=v,f=l[d])}return f}n.seriesIndex=e.seriesIndex;var s=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(l){var u=o(l.triangle,l.point);if(u>=0){var h=[];n.geometry.attributes.position.get(u,h);for(var f=a.pointToData(h),c=Infinity,d=-1,v=[],p=0;p<i.count();p++){v[0]=i.get("x",p),v[1]=i.get("y",p),v[2]=i.get("z",p);var m=xr.squaredDistance(v,f);m<c&&(d=p,c=m)}d!==s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:f}),s=d,n.dataIndex=d}else n.dataIndex=-1},this),n.on("mouseout",function(l){s=-1,n.dataIndex=-1,r.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,r,i,n){var a=e.geometry,o=r.getData(),s=o.getLayout("points"),l=0;o.each(function(_t){o.hasValue(_t)||l++});var u=l||n,h=a.attributes.position,f=a.attributes.normal,c=a.attributes.texcoord0,d=a.attributes.barycentric,v=a.attributes.color,p=i[0],m=i[1],g=r.get("shading"),_=g!=="color";if(u){var y=(p-1)*(m-1)*4;h.init(y),n&&d.init(y)}else h.value=new Float32Array(s);v.init(a.vertexCount),c.init(a.vertexCount);var S=[0,3,1,1,3,2],x=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],E=a.indices=new(a.vertexCount>65535?Uint32Array:Uint16Array)((p-1)*(m-1)*6),D=function(bt,yt,Ht){Ht[1]=bt*m+yt,Ht[0]=bt*m+yt+1,Ht[3]=(bt+1)*m+yt+1,Ht[2]=(bt+1)*m+yt},L=!1;if(u){var b=[],M=[],N=0;_?f.init(a.vertexCount):f.value=null;for(var C=[[],[],[]],B=[],P=[],j=xr.create(),G=function(bt,yt,Ht){var Ga=yt*3;return Ht[0]=bt[Ga],Ht[1]=bt[Ga+1],Ht[2]=bt[Ga+2],Ht},H=new Float32Array(s.length),V=new Float32Array(s.length/3*4),U=0;U<o.count();U++)if(o.hasValue(U)){var Ye=T.parseColor(je(o,U)),de=Ze(o,U);de!=null&&(Ye[3]*=de),Ye[3]<.99&&(L=!0);for(var W=0;W<4;W++)V[U*4+W]=Ye[W]}for(var Ee=[1e7,1e7,1e7],U=0;U<p-1;U++)for(var fe=0;fe<m-1;fe++){var ye=U*(m-1)+fe,be=ye*4;D(U,fe,b);for(var ae=!1,W=0;W<4;W++)G(s,b[W],M),hv(M)&&(ae=!0);for(var W=0;W<4;W++)ae?h.set(be+W,Ee):(G(s,b[W],M),h.set(be+W,M)),n&&d.set(be+W,x[W]);for(var W=0;W<6;W++)E[N++]=S[W]+be;if(_&&!ae)for(var W=0;W<2;W++){for(var et=W*3,Ce=0;Ce<3;Ce++){var Oe=b[S[et]+Ce];G(s,Oe,C[Ce])}xr.sub(B,C[0],C[1]),xr.sub(P,C[1],C[2]),xr.cross(j,B,P);for(var Ce=0;Ce<3;Ce++){var rt=b[S[et]+Ce]*3;H[rt]=H[rt]+j[0],H[rt+1]=H[rt+1]+j[1],H[rt+2]=H[rt+2]+j[2]}}}if(_)for(var U=0;U<H.length/3;U++)G(H,U,j),xr.normalize(j,j),H[U*3]=j[0],H[U*3+1]=j[1],H[U*3+2]=j[2];for(var Ye=[],qe=[],U=0;U<p-1;U++)for(var fe=0;fe<m-1;fe++){var ye=U*(m-1)+fe,be=ye*4;D(U,fe,b);for(var W=0;W<4;W++){for(var Ce=0;Ce<4;Ce++)Ye[Ce]=V[b[W]*4+Ce];v.set(be+W,Ye),_&&(G(H,b[W],j),f.set(be+W,j));var Oe=b[W];qe[0]=Oe%m/(m-1),qe[1]=Math.floor(Oe/m)/(p-1),c.set(be+W,qe)}ye++}}else{for(var qe=[],U=0;U<o.count();U++){qe[0]=U%m/(m-1),qe[1]=Math.floor(U/m)/(p-1);var Ye=T.parseColor(je(o,U)),de=Ze(o,U);de!=null&&(Ye[3]*=de),Ye[3]<.99&&(L=!0),v.set(U,Ye),c.set(U,qe)}for(var b=[],Si=0,U=0;U<p-1;U++)for(var fe=0;fe<m-1;fe++){D(U,fe,b);for(var W=0;W<6;W++)E[Si++]=b[S[W]]}_?a.generateVertexNormals():f.value=null}e.material.get("normalMap")&&a.generateTangents(),a.updateBoundingBox(),a.dirty(),e.material.transparent=L,e.material.depthMask=!L},_getDataShape:function(e,r){for(var i=-Infinity,n=0,a=0,o=0,s=!1,l=r?"u":"x",u=e.count(),h=0;h<u;h++){var f=e.get(l,h);f<i&&(o=a,a=0,n++),i=f,a++}if((!n||a===1)&&(s=!0),!s)return[n+1,a];for(var c=Math.floor(Math.sqrt(u));c>0;){if(Math.floor(u/c)===u/c)return[c,u/c];c--}return c=Math.floor(Math.sqrt(u)),[c,c]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function cv(t){t.registerChartView(fv),t.registerSeriesModel(uv),t.registerLayout(function(e,r){e.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type!=="cartesian3D";var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});a.each(u,function(h,f,c,d){var v;a.hasValue(d)?v=n.dataToPoint([h,f,c]):v=s,o[d*3]=v[0],o[d*3+1]=v[1],o[d*3+2]=v[2]})}a.setLayout("points",o)})})}Object(w.x)(cv);function vl(t,e){for(var r=[],i=0;i<e.length;i++)r.push(t.dataToPoint(e[i]));return r}var jr=w.g.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){e=e||{};var r=this.get("coordinateSystem");if(!(r==null||r==="geo3D")){if(!1)var i,n;this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null}},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var r=w.o.createDimensions(e.data,{coordDimensions:["value"]}),i=new w.e(r,this);i.initData(e.data);var n={};return i.each(function(a){var o=i.getName(a),s=i.getItemModel(a);n[o]=s}),this._regionModelMap=n,i},formatTooltip:function(e){return mi(this,e)},getRegionModel:function(e){var r=this.getData().getName(e);return this._regionModelMap[r]||new w.f(null,this)},getRegionPolygonCoords:function(e){var r=this.coordinateSystem,i=this.getData().getName(e);if(r.transform){var n=r.getRegion(i);return n?n.geometries:[]}else{this._geo||(this._geo=Bs.createGeo3D(this));for(var n=this._geo.getRegion(i),a=[],o=0;o<n.geometries.length;o++){var s=n.geometries[o],l=[],u=vl(r,s.exterior);if(l&&l.length)for(var h=0;h<s.interiors.length;h++)l.push(vl(r,l[h]));a.push({interiors:l,exterior:u})}return a}},getFormattedLabel:function(e,r){var i=Xr.getFormattedLabel(this,e,r);return i==null&&(i=this.getData().getName(e)),i},defaultOption:{coordinateSystem:"geo3D",data:null}});w.y.merge(jr.prototype,Ts),w.y.merge(jr.prototype,Ki),w.y.merge(jr.prototype,Or),w.y.merge(jr.prototype,Br),w.y.merge(jr.prototype,zr);var dv=jr,vv=w.b.extend({type:"map3D",__ecgl__:!0,init:function(e,r){this._geo3DBuilder=new hn(r),this.groupGL=new T.Node},render:function(e,r,i){var n=e.coordinateSystem;if(!(!n||!n.viewGL)){this.groupGL.add(this._geo3DBuilder.rootNode),n.viewGL.add(this.groupGL);var a;if(n.type==="geo3D"){a=n,this._sceneHelper||(this._sceneHelper=new Fr,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(e),n.viewGL.setPostEffect(e.getModel("postEffect"),i),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var o=this._control;o||(o=this._control=new $i({zr:i.getZr()}),this._control.init());var s=e.getModel("viewControl");o.setViewGL(n.viewGL),o.setFromViewControlModel(s,0),o.off("update"),o.on("update",function(){i.dispatchAction({type:"map3DChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),a=e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,r,i,0,e.getData().count());var l=n.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(u){u.material&&u.material[l]("fragment","SRGB_DECODE")})}},afterRender:function(e,r,i,n){var a=n.renderer,o=e.coordinateSystem;o&&o.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(a,e,i),this._sceneHelper.updateSkybox(a,e,i))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function pv(t){Fs(t),t.registerChartView(vv),t.registerSeriesModel(dv),t.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"series",subType:"map3D",query:e},function(i){i.setView(e)})})}Object(w.x)(pv);var mv=w.g.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return w.o.createList(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),pl=Y("Fofx"),ml=Y("QBsz");function rr(t){this.viewGL=t}rr.prototype.reset=function(t,e){this._updateCamera(e.getWidth(),e.getHeight(),e.getDevicePixelRatio()),this._viewTransform=pl.create(),this.updateTransform(t,e)},rr.prototype.updateTransform=function(t,e){var r=t.coordinateSystem;r.getRoamTransform&&(pl.invert(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),e.getZr().refresh())},rr.prototype.dataToPoint=function(t,e,r){r=t.dataToPoint(e,null,r);var i=this._viewTransform;i&&ml.applyTransform(r,r,i)},rr.prototype.removeTransformInPoint=function(t){return this._viewTransform&&ml.applyTransform(t,t,this._viewTransform),t},rr.prototype.getZoom=function(){if(this._viewTransform){var t=this._viewTransform;return 1/Math.max(Math.sqrt(t[0]*t[0]+t[1]*t[1]),Math.sqrt(t[2]*t[2]+t[3]*t[3]))}return 1},rr.prototype._setCameraTransform=function(t){var e=this.viewGL.camera;e.position.set(t[4],t[5],0),e.scale.set(Math.sqrt(t[0]*t[0]+t[1]*t[1]),Math.sqrt(t[2]*t[2]+t[3]*t[3]),1)},rr.prototype._updateCamera=function(t,e,r){this.viewGL.setViewport(0,0,t,e,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=e,i.right=t,i.near=0,i.far=100};var gl=rr,gv=w.b.extend({type:"scatterGL",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this.viewGL=new qt("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new gl(this.viewGL)},render:function(e,r,i){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,i),!!e.getData().count()){var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new gi(!0,i)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),n.update(e,r,i),this.viewGL.setPostEffect(e.getModel("postEffect"),i)}},incrementalPrepareRender:function(e,r,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalRender:function(e,r,i,n){if(!(e.end<=e.start)){var a=this._pointsBuilderList[this._currentStep];a||(a=new gi(!0,n),this._pointsBuilderList[this._currentStep]=a),this.groupGL.add(a.rootNode),this._removeTransformInPoints(r.getData().getLayout("points")),a.setSizeScale(this._sizeScale),a.update(r,i,n,e.start,e.end),n.getZr().refresh(),this._currentStep++}},updateTransform:function(e,r,i){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,i);var n=this._glViewHelper.getZoom(),a=Math.max((e.get("zoomScale")||0)*(n-1)+1,0);this._sizeScale=a,this._pointsBuilderList.forEach(function(o){o.setSizeScale(a)})}},_removeTransformInPoints:function(e){if(!!e)for(var r=[],i=0;i<e.length;i+=2)r[0]=e[i],r[1]=e[i+1],this._glViewHelper.removeTransformInPoint(r),e[i]=r[0],e[i+1]=r[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function _v(t){t.registerChartView(gv),t.registerSeriesModel(mv),t.registerLayout({seriesType:"scatterGL",reset:function(r){var i=r.coordinateSystem,n=r.getData(),a;if(i){var o=i.dimensions.map(function(l){return n.mapDimension(l)}).slice(0,2),s=[];o.length===1?a=function(u){for(var h=new Float32Array((u.end-u.start)*2),f=u.start;f<u.end;f++){var c=(f-u.start)*2,d=n.get(o[0],f),v=i.dataToPoint(d);h[c]=v[0],h[c+1]=v[1]}n.setLayout("points",h)}:o.length===2&&(a=function(u){for(var h=new Float32Array((u.end-u.start)*2),f=u.start;f<u.end;f++){var c=(f-u.start)*2,d=n.get(o[0],f),v=n.get(o[1],f);s[0]=d,s[1]=v,s=i.dataToPoint(s),h[c]=s[0],h[c+1]=s[1]}n.setLayout("points",h)})}return{progress:a}}})}Object(w.x)(_v);var yv=Y("c2i1"),xv=Y("ai+a"),Tv=xv.a,Sv=function(t,e,r,i,n){for(var a=new yv.a(i),o=0;o<t.length;o++)a.addNode(re.firstNotNull(t[o].id,t[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<e.length;o++){var h=e[o],f=h.source,c=h.target;a.addEdge(f,c,u)&&(l.push(h),s.push(re.firstNotNull(h.id,f+" > "+c)),u++)}var d,v=w.o.createDimensions(t,{coordDimensions:["value"]});d=new w.e(v,r),d.initData(t);var p=new w.e(["value"],r);return p.initData(l,s),n&&n(d,p),Tv({mainData:d,struct:a,structAttr:"graph",datas:{node:d,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a},yi=w.g.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){yi.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){yi.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,r,i,n){var a=Xr.getFormattedLabel(this,e,r,i,n);if(a==null){var o=this.getData(),s=o.dimensions[o.dimensions.length-1];a=o.get(s,e)}return a},getInitialData:function(e,r){var i=e.edges||e.links||[],n=e.data||e.nodes||[],a=this;if(n&&i)return Sv(n,i,this,!0,o).data;function o(s,l){s.wrapMethod("getItemModel",function(c){var d=a._categoriesModels,v=c.getShallow("category"),p=d[v];return p&&(p.parentModel=c.parentModel,c.parentModel=p),c});var u=r.getModel([]).getModel;function h(c,d){var v=u.call(this,c,d);return v.resolveParentPath=f,v}l.wrapMethod("getItemModel",function(c){return c.resolveParentPath=f,c.getModel=h,c});function f(c){if(c&&(c[0]==="label"||c[1]==="label")){var d=c.slice();return c[0]==="label"?d[0]="edgeLabel":c[1]==="label"&&(d[1]="edgeLabel"),d}return c}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,r,i){if(i==="edge"){var n=this.getData(),a=this.getDataParams(e,i),o=n.graph.getEdgeByIndex(e),s=n.getName(o.node1.dataIndex),l=n.getName(o.node2.dataIndex),u=[];return s!=null&&u.push(s),l!=null&&u.push(l),u=w.k.encodeHTML(u.join(" > ")),a.value&&(u+=" : "+w.k.encodeHTML(a.value)),u}else return yi.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(i){return i.value!=null?i:Object.assign({value:0},i)}),r=new w.e(["value"],this);r.initData(e),this._categoriesData=r,this._categoriesModels=r.mapArray(function(i){return r.getItemModel(i,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var r=0;r<e.length/2;r++){var i=e[r*2],n=e[r*2+1],a=this.getData().getRawDataItem(r);a.x=i,a.y=n}},isAnimationEnabled:function(){return yi.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Ev=yi,He=Ie.vec2,_l=[[0,0],[1,1]],yl=he.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new he.Attribute("position","float",2,"POSITION"),normal:new he.Attribute("normal","float",2),offset:new he.Attribute("offset","float",1),color:new he.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var r=this.attributes;this.vertexCount!==e&&(r.position.init(e),r.color.init(e),this.useNativeLine||(r.offset.init(e),r.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,r,i,n){var a=He.dist(e,r)+He.dist(i,r)+He.dist(n,i),o=1/(a+1)*this.segmentScale;return o},getCubicCurveVertexCount:function(e,r,i,n){var a=this._getCubicCurveApproxStep(e,r,i,n),o=Math.ceil(1/a);return this.useNativeLine?o*2:o*2+2},getCubicCurveTriangleCount:function(e,r,i,n){var a=this._getCubicCurveApproxStep(e,r,i,n),o=Math.ceil(1/a);return this.useNativeLine?0:o*2},getLineVertexCount:function(){return this.getPolylineVertexCount(_l)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(_l)},getPolylineVertexCount:function(e){var r;if(typeof e=="number")r=e;else{var i=typeof e[0]!="number";r=i?e.length:e.length/2}return this.useNativeLine?(r-1)*2:(r-1)*2+2},getPolylineTriangleCount:function(e){var r;if(typeof e=="number")r=e;else{var i=typeof e[0]!="number";r=i?e.length:e.length/2}return this.useNativeLine?0:(r-1)*2},addCubicCurve:function(e,r,i,n,a,o){o==null&&(o=1);for(var s=e[0],l=e[1],u=r[0],h=r[1],f=i[0],c=i[1],d=n[0],v=n[1],p=this._getCubicCurveApproxStep(e,r,i,n),m=p*p,g=m*p,_=3*p,y=3*m,S=6*m,x=6*g,E=s-u*2+f,D=l-h*2+c,L=(u-f)*3-s+d,b=(h-c)*3-l+v,M=s,N=l,C=(u-s)*_+E*y+L*g,B=(h-l)*_+D*y+b*g,P=E*S+L*x,j=D*S+b*x,G=L*x,H=b*x,V=0,U=0,de=Math.ceil(1/p),W=new Float32Array((de+1)*3),W=[],Ee=0,U=0;U<de+1;U++)W[Ee++]=M,W[Ee++]=N,M+=C,N+=B,C+=P,B+=j,P+=G,j+=H,V+=p,V>1&&(M=C>0?Math.min(M,d):Math.max(M,d),N=B>0?Math.min(N,v):Math.max(N,v));this.addPolyline(W,a,o)},addLine:function(e,r,i,n){this.addPolyline([e,r],i,n)},addPolyline:function(){var t=He.create(),e=He.create(),r=He.create(),i=He.create(),n=[],a=[],o=[];return function(s,l,u,h,f){if(!!s.length){var c=typeof s[0]!="number";if(f==null&&(f=c?s.length:s.length/2),!(f<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var d=c?typeof l[0]!="number":l.length/4===f,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,g=this.attributes.normal,_=this.indices,y=this._vertexOffset,S,x=0;x<f;x++){if(c)n=s[x+h],d?S=l[x+h]:S=l;else{var E=x*2+h;if(n=n||[],n[0]=s[E],n[1]=s[E+1],d){var D=x*4+h;S=S||[],S[0]=l[D],S[1]=l[D+1],S[2]=l[D+2],S[3]=l[D+3]}else S=l}if(this.useNativeLine)x>1&&(v.copy(y,y-1),p.copy(y,y-1),y++);else{var L;if(x<f-1){if(c)He.copy(a,s[x+1]);else{var E=(x+1)*2+h;a=a||[],a[0]=s[E],a[1]=s[E+1]}if(x>0){He.sub(t,n,o),He.sub(e,a,n),He.normalize(t,t),He.normalize(e,e),He.add(i,t,e),He.normalize(i,i);var b=u/2*Math.min(1/He.dot(t,i),2);r[0]=-i[1],r[1]=i[0],L=b}else He.sub(t,a,n),He.normalize(t,t),r[0]=-t[1],r[1]=t[0],L=u/2}else He.sub(t,n,o),He.normalize(t,t),r[0]=-t[1],r[1]=t[0],L=u/2;g.set(y,r),g.set(y+1,r),m.set(y,L),m.set(y+1,-L),He.copy(o,n),v.set(y,n),v.set(y+1,n),p.set(y,S),p.set(y+1,S),y+=2}if(this.useNativeLine)p.set(y,S),v.set(y,n),y++;else if(x>0){var M=this._faceOffset*3,_=this.indices;_[M]=y-4,_[M+1]=y-3,_[M+2]=y-2,_[M+3]=y-3,_[M+4]=y-1,_[M+5]=y-2,this._faceOffset+=2}}this._vertexOffset=y}}}}(),setItemColor:function(e,r){for(var i=this._itemVertexOffsets[e],n=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,a=i;a<n;a++)this.attributes.color.set(a,r);this.dirty("color")}});w.y.defaults(yl.prototype,oi);var xl=yl,wv=`@export ecgl.forceAtlas2.updateNodeRepulsion

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
@end`;T.Shader.import(wv);var Oa={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function $e(t){var e={type:T.Texture.FLOAT,minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST};this._positionSourceTex=new T.Texture2D(e),this._positionSourceTex.flipY=!1,this._positionTex=new T.Texture2D(e),this._positionPrevTex=new T.Texture2D(e),this._forceTex=new T.Texture2D(e),this._forcePrevTex=new T.Texture2D(e),this._weightedSumTex=new T.Texture2D(e),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new T.Texture2D(e),this._globalSpeedPrevTex=new T.Texture2D(e),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Ne({fragment:T.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Ne({fragment:T.Shader.source("clay.compositor.output")});var r=function(n){n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ONE)};this._edgeForceMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node1:new T.Geometry.Attribute("node1","float",2),node2:new T.Geometry.Attribute("node2","float",2),weight:new T.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._weightedSumMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._framebuffer=new Xe({depthBuffer:!1}),this._dummyCamera=new T.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}$e.prototype.updateOption=function(t){for(var e in Oa)this[e]=Oa[e];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,t)for(var e in Oa)t[e]!=null&&(this[e]=t[e]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1},$e.prototype._updateGravityCenter=function(t){var e=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[Infinity,Infinity],n=[-Infinity,-Infinity],a=0;a<e.length;a++)i[0]=Math.min(e[a].x,i[0]),i[1]=Math.min(e[a].y,i[1]),n[0]=Math.max(e[a].x,n[0]),n[1]=Math.max(e[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;e[o].degree=(e[o].degree||0)+1,e[s].degree=(e[s].degree||0)+1}},$e.prototype.initData=function(t,e){this._nodes=t,this._edges=e,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(t.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<t.length;o++){var s=t[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,u=e.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var h=[],o=0;o<e.length;o++){var f=l.attributes,c=e[o].weight;c==null&&(c=1),f.node1.set(o,this.getNodeUV(e[o].node1,h)),f.node2.set(o,this.getNodeUV(e[o].node2,h)),f.weight.set(o,c),f.node1.set(o+u,this.getNodeUV(e[o].node2,h)),f.node2.set(o+u,this.getNodeUV(e[o].node1,h)),f.weight.set(o+u,c)}var d=this._weightedSumMesh.geometry;d.attributes.node.init(t.length);for(var o=0;o<t.length;o++)d.attributes.node.set(o,this.getNodeUV(o,h));l.dirty(),d.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",t.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0},$e.prototype.getNodes=function(){return this._nodes},$e.prototype.getEdges=function(){return this._edges},$e.prototype.step=function(t){this._inited||(this._initFromSource(t),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(t);var e=this._nodeRepulsionPass;e.setUniform("strongGravityMode",this.strongGravityMode),e.setUniform("gravity",this.gravity),e.setUniform("gravityCenter",this._gravityCenter),e.setUniform("scaling",this.scaling),e.setUniform("preventOverlap",this.preventOverlap),e.setUniform("positionTex",this._positionPrevTex),e.render(t);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),t.gl.enable(t.gl.BLEND),t.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT),t.gl.enable(t.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),t.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),t.gl.disable(t.gl.BLEND),n.render(t);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(t),this._framebuffer.unbind(t),this._swapTexture()},$e.prototype.update=function(t,e,r){e==null&&(e=1),e=Math.max(e,1);for(var i=0;i<e;i++)this.step(t);r&&r()},$e.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex},$e.prototype.getNodeUV=function(t,e){e=e||[];var r=this._positionTex.width,i=this._positionTex.height;return e[0]=t%r/(r-1),e[1]=Math.floor(t/r)/(i-1)||0,e},$e.prototype.getNodePosition=function(t,e){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(t),this._framebuffer.attach(this._positionPrevTex),t.gl.readPixels(0,0,i,n,t.gl.RGBA,t.gl.FLOAT,r),this._framebuffer.unbind(t),e||(e=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)e[o*2]=r[o*4],e[o*2+1]=r[o*4+1];return e},$e.prototype.getTextureData=function(t,e){var r=this["_"+e+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(t),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return t.gl.readPixels(0,0,i,n,t.gl.RGBA,t.gl.FLOAT,a),this._framebuffer.unbind(t),a},$e.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}},$e.prototype.isFinished=function(t){return this._frame>t},$e.prototype._swapTexture=function(){var t=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=t;var t=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=t;var t=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=t},$e.prototype._initFromSource=function(t){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(t),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(t),t.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(t)},$e.prototype._resize=function(t,e){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=t,this[r].height=e,this[r].dirty()},this)},$e.prototype.dispose=function(t){this._framebuffer.dispose(t),this._copyPass.dispose(t),this._nodeRepulsionPass.dispose(t),this._positionPass.dispose(t),this._globalSpeedPass.dispose(t),this._edgeForceMesh.geometry.dispose(t),this._weightedSumMesh.geometry.dispose(t),this._positionSourceTex.dispose(t),this._positionTex.dispose(t),this._positionPrevTex.dispose(t),this._forceTex.dispose(t),this._forcePrevTex.dispose(t),this._weightedSumTex.dispose(t),this._globalSpeedTex.dispose(t),this._globalSpeedPrevTex.dispose(t)};var Ba=$e;function Av(){var t={create:function(){return new Float32Array(2)},dist:function(u,h){var f=h[0]-u[0],c=h[1]-u[1];return Math.sqrt(f*f+c*c)},len:function(u){var h=u[0],f=u[1];return Math.sqrt(h*h+f*f)},scaleAndAdd:function(u,h,f,c){return u[0]=h[0]+f[0]*c,u[1]=h[1]+f[1]*c,u},scale:function(u,h,f){return u[0]=h[0]*f,u[1]=h[1]*f,u},add:function(u,h,f){return u[0]=h[0]+f[0],u[1]=h[1]+f[1],u},sub:function(u,h,f){return u[0]=h[0]-f[0],u[1]=h[1]-f[1],u},normalize:function(u,h){var f=h[0],c=h[1],d=f*f+c*c;return d>0&&(d=1/Math.sqrt(d),u[0]=h[0]*d,u[1]=h[1]*d),u},negate:function(u,h){return u[0]=-h[0],u[1]=-h[1],u},copy:function(u,h){return u[0]=h[0],u[1]=h[1],u},set:function(u,h,f){return u[0]=h,u[1]=f,u}};function e(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=e.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var h=0;h<this.nSubRegions;h++){var f=this.subRegions[h];if(f.contain(l,u))return f}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,h,f){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=f,this.size=(h-l+f-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new e,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),h=this.bbox;if(!u){var f=(h[0]+h[2])/2,c=(h[1]+h[3])/2,d=(h[2]-h[0])/2,v=(h[3]-h[1])/2,p=l.position[0]>=f?1:0,m=l.position[1]>=c?1:0,u=this._newSubRegion();u.setBBox(p*d+h[0],m*v+h[1],(p+1)*d+h[0],(m+1)*v+h[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,h=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,h+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=h/this.mass};function i(){this.position=new Float32Array(2),this.force=t.create(),this.forcePrev=t.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,u){this.source=l,this.target=u,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new e,this.rootRegion.centerOfMass=t.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,u,h){var f=u.length;this.nodes.length=0;for(var c=typeof h!="undefined",d=0;d<f;d++){var v=new i;v.position[0]=l[d*2],v.position[1]=l[d*2+1],v.mass=u[d],c&&(v.size=h[d]),this.nodes.push(v)}this._massArr=u,this._swingingArr=new Float32Array(f),c&&(this._sizeArr=h)},o.initEdges=function(l,u){var h=l.length/2;this.edges.length=0;for(var f=0;f<h;f++){var c=l[f*2],d=l[f*2+1],v=this.nodes[c],p=this.nodes[d];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);u&&(m.weight=u[f]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var h=this.nodes[u];t.copy(h.forcePrev,h.force),t.set(h.force,0,0)}for(var u=0;u<l;u++){var f=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,f);else for(var c=u+1;c<l;c++){var d=this.nodes[c];this.applyNodeToNodeRepulsion(f,d,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(f):this.applyNodeGravity(f))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var v=0,p=0,m=t.create(),u=0;u<l;u++){var h=this.nodes[u],g=t.dist(h.force,h.forcePrev);v+=g*h.mass,t.add(m,h.force,h.forcePrev);var _=t.len(m)*.5;p+=_*h.mass,this._swingingArr[u]=g}var y=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(y=Math.min(y/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=y;for(var u=0;u<l;u++){var h=this.nodes[u],g=this._swingingArr[u],S=.1*y/(1+y*Math.sqrt(g)),x=t.len(h.force);x>0&&(S=Math.min(x*S,10)/x,t.scaleAndAdd(h.position,h.position,h.force,S))}},o.applyRegionToNodeRepulsion=function(){var l=t.create();return function(h,f){if(h.node)this.applyNodeToNodeRepulsion(h.node,f,!0);else{t.sub(l,f.position,h.centerOfMass);var c=l[0]*l[0]+l[1]*l[1];if(c>this.barnesHutTheta*h.size*h.size){var d=this.scaling*f.mass*h.mass/c;t.scaleAndAdd(f.force,f.force,l,d)}else for(var v=0;v<h.nSubRegions;v++)this.applyRegionToNodeRepulsion(h.subRegions[v],f)}}}(),o.applyNodeToNodeRepulsion=function(){var l=t.create();return function(h,f,c){if(h!=f){t.sub(l,h.position,f.position);var d=l[0]*l[0]+l[1]*l[1];if(d!==0){var v;if(this.preventOverlap){var p=Math.sqrt(d);if(p=p-h.size-f.size,p>0)v=this.scaling*h.mass*f.mass/(p*p);else if(p<0)v=this.scaling*100*h.mass*f.mass;else return}else v=this.scaling*h.mass*f.mass/d;t.scaleAndAdd(h.force,h.force,l,v),t.scaleAndAdd(f.force,f.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=t.create();return function(h){var f=h.source,c=h.target;t.sub(l,f.position,c.position);var d=t.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=h.weight:v=Math.pow(h.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(d=d-f.size-c.size,d<=0)||(this.linLogMode?p=-v*Math.log(d+1)/(d+1):p=-v,t.scaleAndAdd(f.force,f.force,l,p),t.scaleAndAdd(c.force,c.force,l,-p))}}(),o.applyNodeGravity=function(){var l=t.create();return function(u){t.sub(l,this.gravityCenter,u.position);var h=t.len(l);t.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(h+1))}}(),o.applyNodeStrongGravity=function(){var l=t.create();return function(u){t.sub(l,this.gravityCenter,u.position),t.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),o.updateBBox=function(){for(var l=Infinity,u=Infinity,h=-Infinity,f=-Infinity,c=0;c<this.nodes.length;c++){var d=this.nodes[c].position;l=Math.min(l,d[0]),u=Math.min(u,d[1]),h=Math.max(h,d[0]),f=Math.max(f,d[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=f},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var u in l.data.config)s[u]=l.data.config[u];break;case"update":var h=l.data.steps;if(s){for(var f=0;f<h;f++)s.update();for(var c=s.nodes.length,d=new Float32Array(c*2),f=0;f<c;f++){var v=s.nodes[f];d[f*2]=v.position[0],d[f*2+1]=v.position[1]}self.postMessage({buffer:d.buffer,globalSpeed:s.getGlobalSpeed()},[d.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var bv=Av,xi=bv.toString();xi=xi.slice(xi.indexOf("{")+1,xi.lastIndexOf("}"));var Ti={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},gt=function(e){for(var r in Ti)this[r]=Ti[r];if(e)for(var r in e)this[r]=e[r];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new ee({type:X.FLOAT,flipY:!1,minFilter:X.NEAREST,magFilter:X.NEAREST})};gt.prototype.initData=function(t,e){var r=new Blob([xi]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=t,this._edges=e,this._frame=0;for(var n=t.length,a=e.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(a*2),h=new Float32Array(a),f=0;f<t.length;f++){var c=t[f];o[f*2]=c.x,o[f*2+1]=c.y,s[f]=c.mass==null?1:c.mass,l[f]=c.size==null?1:c.size}for(var f=0;f<e.length;f++){var d=e[f],v=d.node1,p=d.node2;u[f*2]=v,u[f*2+1]=p,h[f]=d.weight==null?1:d.weight}var m=Math.ceil(Math.sqrt(t.length)),g=m,_=new Float32Array(m*g*4),y=this._positionTex;y.width=m,y.height=g,y.pixels=_,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=Infinity},gt.prototype.updateOption=function(t){var e={};for(var r in Ti)e[r]=Ti[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?e.jitterTolerence=10:a>5e3?e.jitterTolerence=1:e.jitterTolerence=.1,a>100?e.scaling=2:e.scaling=10,a>1e3?e.barnesHutOptimize=!0:e.barnesHutOptimize=!1,t)for(var r in Ti)t[r]!=null&&(e[r]=t[r]);if(!e.gravityCenter){for(var o=[Infinity,Infinity],s=[-Infinity,-Infinity],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);e.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var u=n[l].node1,h=n[l].node2;i[u].degree=(i[u].degree||0)+1,i[h].degree=(i[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:e})},gt.prototype.update=function(t,e,r){e==null&&(e=1),e=Math.max(e,1),this._frame+=e,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(e)})},gt.prototype._$onupdate=function(t){if(!this._disposed){var e=new Float32Array(t.data.buffer);this._globalSpeed=t.data.globalSpeed,this._positionArr=e,this._updateTexture(e),this._onupdate&&this._onupdate()}},gt.prototype.getNodePositionTexture=function(){return this._positionTex},gt.prototype.getNodeUV=function(t,e){e=e||[];var r=this._positionTex.width,i=this._positionTex.height;return e[0]=t%r/(r-1),e[1]=Math.floor(t/r)/(i-1),e},gt.prototype.getNodes=function(){return this._nodes},gt.prototype.getEdges=function(){return this._edges},gt.prototype.isFinished=function(t){return this._frame>t},gt.prototype.getNodePosition=function(t,e){if(e||(e=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)e[r]=this._positionArr[r];return e},gt.prototype._updateTexture=function(t){for(var e=this._positionTex.pixels,r=0,i=0;i<t.length;)e[r++]=t[i++],e[r++]=t[i++],e[r++]=1,e[r++]=1;this._positionTex.dirty()},gt.prototype.dispose=function(t){this._disposed=!0,this._worker=null};var Tl=gt,Dv=nt.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(!!this._target&&!!this._needsUpdate){var e=this._target,r=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(r,r,r),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var n=this._convertPos(r,i);this._x=n.x,this._y=n.y}}},_convertPos:function(e,r){var i=this.viewGL.camera,n=this.viewGL.viewport;return{x:(e-n.x)/n.width*(i.right-i.left)+i.left,y:(r-n.y)/n.height*(i.bottom-i.top)+i.top}},_mouseMoveHandler:function(e){var r=this._convertPos(e.offsetX,e.offsetY);this._dx+=r.x-this._x,this._dy+=r.y-this._y,this._x=r.x,this._y=r.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var r=e.wheelDelta||-e.detail;if(r!==0){var i=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(i,n))){var a=r>0?1.1:.9,o=Math.max(Math.min(this._zoom*a,this.maxZoom),this.minZoom);a=o/this._zoom;var s=this._convertPos(i,n),l=(s.x-this._dx)*(a-1),u=(s.y-this._dy)*(a-1);this._dx-=l,this._dy-=u,this._zoom=o,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}}),Lv=Dv,Cv=`@export ecgl.lines2D.vertex

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

@end`,pn=Ie.vec2;T.Shader.import(Cv);var Mv=1,Pv=w.b.extend({type:"graphGL",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this.viewGL=new qt("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new gi(!0,r),this._forceEdgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2),color:new T.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:T.Mesh.LINES}),this._edgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new xl({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Lv({zr:r.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,r,i){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=i,this._initLayout(e,r,i),this._pointsBuilder.update(e,r,i),this._forceLayoutInstance instanceof Ba||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,i),this._control.off("update"),this._control.on("update",function(){i.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(re.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var n=this._pointsBuilder.getPointsMesh();if(n.off("mousemove",this._mousemoveHandler),n.off("mouseout",this._mouseOutHandler,this),i.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var a=e.get("focusNodeAdjacencyOn");a==="click"?i.getZr().on("click",this._clickHandler):a==="mouseover"&&(n.on("mousemove",this._mousemoveHandler,this),n.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var r=this._pointsBuilder.getPointsMesh().dataIndex;r>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:r}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var r=this._pointsBuilder.getPointsMesh().dataIndex;r>=0?r!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:r}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=r}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,r){var i=this._forceEdgesMesh.geometry,n=r.getEdgeData(),a=0,o=this._forceLayoutInstance,s=n.count()*2;i.attributes.node.init(s),i.attributes.color.init(s),n.each(function(l){var u=e[l];i.attributes.node.set(a,o.getNodeUV(u.node1)),i.attributes.node.set(a+1,o.getNodeUV(u.node2));var h=je(n,u.dataIndex),f=T.parseColor(h);f[3]*=re.firstNotNull(Ze(n,u.dataIndex),1),i.attributes.color.set(a,f),i.attributes.color.set(a+1,f),a+=2}),i.dirty()},_updateMeshLinesGeometry:function(){var e=this._model.getEdgeData(),r=this._edgesMesh.geometry,e=this._model.getEdgeData(),i=this._model.getData().getLayout("points");r.resetOffset(),r.setVertexCount(e.count()*r.getLineVertexCount()),r.setTriangleCount(e.count()*r.getLineTriangleCount());var n=[],a=[],o=["lineStyle","width"];this._originalEdgeColors=new Float32Array(e.count()*4),this._edgeIndicesMap=new Float32Array(e.count()),e.each(function(s){var l=e.graph.getEdgeByIndex(s),u=l.node1.dataIndex*2,h=l.node2.dataIndex*2;n[0]=i[u],n[1]=i[u+1],a[0]=i[h],a[1]=i[h+1];var f=je(e,l.dataIndex),c=T.parseColor(f);c[3]*=re.firstNotNull(Ze(e,l.dataIndex),1);var d=e.getItemModel(l.dataIndex),v=re.firstNotNull(d.get(o),1)*this._api.getDevicePixelRatio();r.addLine(n,a,c,v);for(var p=0;p<4;p++)this._originalEdgeColors[l.dataIndex*4+p]=c[p];this._edgeIndicesMap[l.dataIndex]=s},this),r.dirty()},_updateForceNodesGeometry:function(e){for(var r=this._pointsBuilder.getPointsMesh(),i=[],n=0;n<e.count();n++)this._forceLayoutInstance.getNodeUV(n,i),r.geometry.attributes.position.set(n,i);r.geometry.dirty("position")},_initLayout:function(e,r,i){var n=e.get("layout"),a=e.getGraph(),o=e.getBoxLayoutParams(),s=Object(on.g)(o,{width:i.getWidth(),height:i.getHeight()});n==="force"&&(n="forceAtlas2"),this.stopLayout(e,r,i,{beforeLayout:!0});var l=e.getData(),u=e.getData();if(n==="forceAtlas2"){var h=e.getModel("forceAtlas2"),f=this._forceLayoutInstance,c=[],d=[],v=l.getDataExtent("value"),p=u.getDataExtent("value"),m=re.firstNotNull(h.get("edgeWeight"),1),g=re.firstNotNull(h.get("nodeWeight"),1);typeof m=="number"&&(m=[m,m]),typeof g=="number"&&(g=[g,g]);var _=0,y={},S=new Float32Array(l.count()*2);if(a.eachNode(function(E){var D=E.dataIndex,L=l.get("value",D),b,M;if(l.hasItemOption){var N=l.getItemModel(D);b=N.get("x"),M=N.get("y")}b==null&&(b=s.x+Math.random()*s.width,M=s.y+Math.random()*s.height),S[_*2]=b,S[_*2+1]=M,y[E.id]=_++;var C=w.q.linearMap(L,v,g);isNaN(C)&&(isNaN(g[0])?C=1:C=g[0]),c.push({x:b,y:M,mass:C,size:l.getItemVisual(D,"symbolSize")})}),l.setLayout("points",S),a.eachEdge(function(E){var D=E.dataIndex,L=l.get("value",D),b=w.q.linearMap(L,p,m);isNaN(b)&&(isNaN(m[0])?b=1:b=m[0]),d.push({node1:y[E.node1.id],node2:y[E.node2.id],weight:b,dataIndex:D})}),!f){var x=h.get("GPU");this._forceLayoutInstance&&(x&&!(this._forceLayoutInstance instanceof Ba)||!x&&!(this._forceLayoutInstance instanceof Tl))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),f=this._forceLayoutInstance=x?new Ba:new Tl}f.initData(c,d),f.updateOption(h.option),this._updateForceEdgesGeometry(f.getEdges(),e),this._updatePositionTexture(),i.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var S=new Float32Array(l.count()*2),_=0;a.eachNode(function(L){var b=L.dataIndex,M,N;if(l.hasItemOption){var C=l.getItemModel(b);M=C.get("x"),N=C.get("y")}S[_++]=M,S[_++]=N}),l.setLayout("points",S),this._updateAfterLayout(e,r,i)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,r,i,n){if(!(n&&n.from!=null&&n.from!==this.uid)){var a=this.viewGL,i=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(!!o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var u=this,h=this._layoutId=Mv++,f=l.getShallow("maxSteps"),c=l.getShallow("steps"),d=0,v=Math.max(c*2,20),p=function m(g){if(g===u._layoutId){if(o.isFinished(f)){i.dispatchAction({type:"graphGLStopLayout",from:u.uid}),i.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:u.uid});return}o.update(a.layer.renderer,c,function(){u._updatePositionTexture(),d+=c,d>=v&&(u._syncNodePosition(e),d=0),i.getZr().refresh(),Object(qn.a)(function(){m(g)})})}};Object(qn.a)(function(){u._forceLayoutInstanceToDispose&&(u._forceLayoutInstanceToDispose.dispose(a.layer.renderer),u._forceLayoutInstanceToDispose=null),p(h)}),this._layouting=!0}}},stopLayout:function(e,r,i,n){n&&n.from!=null&&n.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),!!this._forceLayoutInstance&&(!this.viewGL.layer||(n&&n.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,r,i)),this._api.getZr().refresh(),this._layouting=!1)))},_syncNodePosition:function(e){var r=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",r),e.setNodePosition(r)},_updateAfterLayout:function(e,r,i){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,r,i),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,r,i,n){var a=this._model.getData();this._downplayAll();var o=n.dataIndex,s=a.graph,l=[],u=s.getNodeByIndex(o);l.push(u),u.edges.forEach(function(f){f.dataIndex<0||(f.node1!==u&&l.push(f.node1),f.node2!==u&&l.push(f.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),l.forEach(function(f){this._pointsBuilder.highlight(a,f.dataIndex)},this),this._pointsBuilder.updateLabels(l.map(function(f){return f.dataIndex}));var h=[];u.edges.forEach(function(f){f.dataIndex>=0&&(this._highlightEdge(f.dataIndex),h.push(f))},this),this._focusNodes=l,this._focusEdges=h},unfocusNodeAdjacency:function(e,r,i,n){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var r=this._model.getEdgeData().getItemModel(e),i=T.parseColor(r.get("emphasis.lineStyle.color")||r.get("lineStyle.color")),n=re.firstNotNull(r.get("emphasis.lineStyle.opacity"),r.get("lineStyle.opacity"),1);i[3]*=n,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],i)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var r=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_setEdgeFade:function(){var t=[];return function(e,r){this._getColor(e,t),t[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)}}(),_getColor:function(e,r){for(var i=0;i<4;i++)r[i]=this._originalEdgeColors[e*4+i];return r},_fadeOutEdgesAll:function(e){var r=this._model.getData().graph;r.eachEdge(function(i){this._setEdgeFade(i.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,r){this.viewGL.setViewport(0,0,r.getWidth(),r.getHeight(),r.getDevicePixelRatio());for(var i=this.viewGL.camera,n=e.getData(),a=n.getLayout("points"),o=pn.create(Infinity,Infinity),s=pn.create(-Infinity,-Infinity),l=[],u=0;u<a.length;)l[0]=a[u++],l[1]=a[u++],pn.min(o,o,l),pn.max(s,s,l);var h=(s[1]+o[1])/2,f=(s[0]+o[0])/2;if(!(f>i.left&&f<i.right&&h<i.bottom&&h>i.top)){var c=Math.max(s[0]-o[0],10),d=c/r.getWidth()*r.getHeight();c*=1.4,d*=1.4,o[0]-=c*.2,i.left=o[0],i.top=h-d/2,i.bottom=h+d/2,i.right=c+o[0],i.near=0,i.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function mn(t){return t instanceof Array||(t=[t,t]),t}function Rv(t){t.registerChartView(Pv),t.registerSeriesModel(Ev),t.registerVisual(function(r){var i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var u=a.getName(l);s["ec-"+u]=l;var h=a.getItemModel(l),f=h.getModel("itemStyle").getItemStyle();f.fill||(f.fill=n.getColorFromPalette(u,i)),a.setItemVisual(l,"style",f);for(var c=["symbol","symbolSize","symbolKeepAspect"],d=0;d<c.length;d++){var v=h.getShallow(c[d],!0);v!=null&&a.setItemVisual(l,c[d],v)}}),a.count()&&o.each(function(l){var u=o.getItemModel(l),h=u.getShallow("category");if(h!=null){typeof h=="string"&&(h=s["ec-"+h]);var f=a.getItemVisual(h,"style"),c=o.ensureUniqueItemVisual(l,"style");w.y.extend(c,f);for(var d=["symbol","symbolSize","symbolKeepAspect"],v=0;v<d.length;v++)o.setItemVisual(l,d[v],a.getItemVisual(h,d[v]))}})})}),t.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=mn(i.get("edgeSymbol")),s=mn(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),h=n.getEdgeByIndex(l),f=mn(u.getShallow("symbol",!0)),c=mn(u.getShallow("symbolSize",!0)),d=u.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(w.y.extend(v,d),v.stroke){case"source":{var p=h.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=h.node2.getVisual("style");v.stroke=p&&p.fill;break}}f[0]&&h.setVisual("fromSymbol",f[0]),f[1]&&h.setVisual("toSymbol",f[1]),c[0]&&h.setVisual("fromSymbolSize",c[0]),c[1]&&h.setVisual("toSymbolSize",c[1])})})}),t.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function e(){}t.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},e),t.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},e),t.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},e),t.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},e)}Object(w.x)(Rv);var Nv=w.g.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,r){var i=this.get("coordinateSystem"),n=i==="geo"?["lng","lat"]:w.l(i)||["x","y"];n.push("vx","vy");var a=w.o.createDimensions(this.getSource(),{coordDimensions:n,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),o=new w.e(a,this);return o.initData(this.getSource()),o},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}}),Iv=he.extend(function(){return{dynamic:!0,attributes:{position:new he.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var r=this.attributes,i=4*e,n=2*e;this.vertexCount!==i&&r.position.init(i),this.triangleCount!==n&&(n===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(n*3):new Uint16Array(n*3))},addLine:function(e){var r=this._vertexOffset;this.attributes.position.set(r,[e[0],e[1],1]),this.attributes.position.set(r+1,[e[0],e[1],-1]),this.attributes.position.set(r+2,[e[0],e[1],2]),this.attributes.position.set(r+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[r,r+1,r+2]),this.setTriangleIndices(this._faceOffset++,[r+1,r+2,r+3]),this._vertexOffset+=4}}),Ov=Iv,Bv=`@export ecgl.vfParticle.particle.fragment

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
`;F.import(Bv);function Fv(t){var e=document.createElement("canvas");e.width=e.height=t;var r=e.getContext("2d");return r.fillStyle="#fff",r.arc(t/2,t/2,t/2,0,Math.PI*2),r.fill(),e}var Fa=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new ee({type:X.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};Fa.prototype={constructor:Fa,init:function(){var e={type:X.FLOAT,minFilter:X.NEAREST,magFilter:X.NEAREST,useMipmap:!1};this._spawnTexture=new ee(e),this._particleTexture0=new ee(e),this._particleTexture1=new ee(e),this._frameBuffer=new Xe({depthBuffer:!1}),this._particlePass=new Ne({fragment:F.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Ne({fragment:F.source("clay.compositor.downsample")});var r=new ir({renderOrder:10,material:new Tt({shader:new F(F.source("ecgl.vfParticle.renderPoints.vertex"),F.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:ir.POINTS,geometry:new he({dynamic:!0,mainAttribute:"texcoord0"})}),i=new ir({renderOrder:10,material:new Tt({shader:new F(F.source("ecgl.vfParticle.renderLines.vertex"),F.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Ov,culling:!1}),n=new ir({material:new Tt({shader:new F(F.source("ecgl.color.vertex"),F.source("ecgl.color.fragment"))}),geometry:new Gi});n.material.enableTexture("diffuseMap"),this._particlePointsMesh=r,this._particleLinesMesh=i,this._lastFrameFullQuadMesh=n,this._camera=new Ir,this._thisFrameTexture=new ee,this._lastFrameTexture=new ee},setParticleDensity:function(e,r){for(var i=e*r,n=new Float32Array(i*4),a=0,o=this.particleLife,s=0;s<e;s++)for(var l=0;l<r;l++,a++){n[a*4]=Math.random(),n[a*4+1]=Math.random(),n[a*4+2]=Math.random();var u=(o[1]-o[0])*Math.random()+o[0];n[a*4+3]=u}this._particleType==="line"?this._setLineGeometry(e,r):this._setPointsGeometry(e,r),this._spawnTexture.width=e,this._spawnTexture.height=r,this._spawnTexture.pixels=n,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=r,this._particlePass.setUniform("textureSize",[e,r])},_setPointsGeometry:function(e,r){var i=e*r,n=this._particlePointsMesh.geometry,a=n.attributes;a.texcoord0.init(i);for(var o=0,s=0;s<e;s++)for(var l=0;l<r;l++,o++)a.texcoord0.value[o*2]=s/e,a.texcoord0.value[o*2+1]=l/r;n.dirty()},_setLineGeometry:function(e,r){var i=e*r,n=this._getParticleMesh().geometry;n.setLineCount(i),n.resetOffset();for(var a=0;a<e;a++)for(var o=0;o<r;o++)n.addLine([a/e,o/r]);n.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,r,i,n){var a=this._getParticleMesh(),o=this._frameBuffer,s=this._particlePass;n&&this._updateDownsampleTextures(e,r),a.material.set("size",this._particleSize*this._supersampling),a.material.set("color",this.particleColor),s.setUniform("speedScaling",this.particleSpeedScaling),o.attach(this._particleTexture1),s.setUniform("firstFrameTime",n?(this.particleLife[1]+this.particleLife[0])/2:0),s.setUniform("particleTexture",this._particleTexture0),s.setUniform("deltaTime",i),s.setUniform("elapsedTime",this._elapsedTime),s.render(e,o),a.material.set("particleTexture",this._particleTexture1),a.material.set("prevParticleTexture",this._particleTexture0),o.attach(this._thisFrameTexture),o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var l=this._lastFrameFullQuadMesh;l.material.set("diffuseMap",this._lastFrameTexture),l.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([l,a],this._camera),o.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=i},_downsample:function(e){var r=this._downsampleTextures;if(r.length!==0)for(var i=0,n=this._thisFrameTexture,a=r[i];a;)this._frameBuffer.attach(a),this._downsamplePass.setUniform("texture",n),this._downsamplePass.setUniform("textureSize",[n.width,n.height]),this._downsamplePass.render(e,this._frameBuffer),n=a,a=r[++i]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,r){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=r*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=r*this._supersampling,this._width=e,this._height=r},setParticleSize:function(e){var r=this._getParticleMesh();if(e<=2){r.material.disableTexture("spriteTexture"),r.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new ee),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Fv(e),this._spriteTexture.dirty()),r.material.transparent=!0,r.material.enableTexture("spriteTexture"),r.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var r=this._getParticleMesh().material;r[e?"enableTexture":"disableTexture"]("gradientTexture"),r.setUniform("gradientTexture",e)},setColorTextureImage:function(e,r){var i=this._getParticleMesh().material;i.setTextureImage("colorTexture",e,r,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var r=this._frameBuffer;r.attach(this._lastFrameTexture),r.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),r.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,r){for(var i=this._downsampleTextures,n=Math.max(Math.floor(Math.log(this._supersampling/r.getDevicePixelRatio())/Math.log(2)),0),a=2,o=this._width*this._supersampling,s=this._height*this._supersampling,l=0;l<n;l++)i[l]=i[l]||new ee,i[l].width=o/a,i[l].height=s/a,a*=2;for(;l<i.length;l++)i[l].dispose(e);i.length=n},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(r){r.dispose(e)})}};var Uv=Fa,Gv=w.b.extend({type:"flowGL",__ecgl__:!0,init:function(e,r){this.viewGL=new qt("orthographic"),this.groupGL=new T.Node,this.viewGL.add(this.groupGL),this._particleSurface=new Uv;var i=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.color.vertex"),fragment:T.Shader.source("ecgl.color.fragment")}),transparent:!0})});i.material.enableTexture("diffuseMap"),this.groupGL.add(i),this._planeMesh=i},render:function(e,r,i){var n=this._particleSurface;n.setParticleType(e.get("particleType")),n.setSupersampling(e.get("supersampling")),this._updateData(e,i),this._updateCamera(i.getWidth(),i.getHeight(),i.getDevicePixelRatio());var a=re.firstNotNull(e.get("particleDensity"),128);n.setParticleDensity(a,a);var o=this._planeMesh,s=+new Date,l=this,u=!0;o.__percent=0,o.stopAnimation(),o.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,d=Math.min(c-s,20);s=s+d,l._renderer&&(n.update(l._renderer,i,d/1e3,u),o.material.set("diffuseMap",n.getSurfaceTexture())),u=!1}).start();var h=e.getModel("itemStyle"),f=T.parseColor(h.get("color"));f[3]*=re.firstNotNull(h.get("opacity"),1),o.material.set("color",f),n.setColorTextureImage(e.get("colorTexture"),i),n.setParticleSize(e.get("particleSize")),n.particleSpeedScaling=e.get("particleSpeed"),n.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,r,i){this._updateData(e,i)},afterRender:function(e,r,i,n){var a=n.renderer;this._renderer=a},_updateData:function(e,r){var i=e.coordinateSystem,n=i.dimensions.map(function(y){return e.coordDimToDataDim(y)[0]}),a=e.getData(),o=a.getDataExtent(n[0]),s=a.getDataExtent(n[1]),l=e.get("gridWidth"),u=e.get("gridHeight");if(l==null||l==="auto"){var h=(o[1]-o[0])/(s[1]-s[0]);l=Math.round(Math.sqrt(h*a.count()))}(u==null||u==="auto")&&(u=Math.ceil(a.count()/l));var f=this._particleSurface.vectorFieldTexture,c=f.pixels;if(!c||c.length!==u*l*4)c=f.pixels=new Float32Array(l*u*4);else for(var d=0;d<c.length;d++)c[d]=0;var v=0,p=Infinity,m=new Float32Array(a.count()*2),g=0,_=[[Infinity,Infinity],[-Infinity,-Infinity]];a.each([n[0],n[1],"vx","vy"],function(y,S,x,E){var D=i.dataToPoint([y,S]);m[g++]=D[0],m[g++]=D[1],_[0][0]=Math.min(D[0],_[0][0]),_[0][1]=Math.min(D[1],_[0][1]),_[1][0]=Math.max(D[0],_[1][0]),_[1][1]=Math.max(D[1],_[1][1]);var L=Math.sqrt(x*x+E*E);v=Math.max(v,L),p=Math.min(p,L)}),a.each(["vx","vy"],function(y,S,x){var E=Math.round((m[x*2]-_[0][0])/(_[1][0]-_[0][0])*(l-1)),D=u-1-Math.round((m[x*2+1]-_[0][1])/(_[1][1]-_[0][1])*(u-1)),L=(D*l+E)*4;c[L]=y/v*.5+.5,c[L+1]=S/v*.5+.5,c[L+3]=1}),f.width=l,f.height=u,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(f),f.dirty(),this._updatePlanePosition(_[0],_[1],e,r),this._updateGradientTexture(a.getVisual("visualMeta"),[p,v])},_fillEmptyPixels:function(e){var r=e.pixels,i=e.width,n=e.height;function a(m,g,_){m=Math.max(Math.min(m,i-1),0),g=Math.max(Math.min(g,n-1),0);var y=(g*(i-1)+m)*4;return r[y+3]===0?!1:(_[0]=r[y],_[1]=r[y+1],!0)}function o(m,g,_){_[0]=m[0]+g[0],_[1]=m[1]+g[1]}for(var s=[],l=[],u=[],h=[],f=[],c=0,d=0;d<n;d++)for(var v=0;v<i;v++){var p=(d*(i-1)+v)*4;r[p+3]===0&&(c=s[0]=s[1]=0,a(v-1,d,l)&&(c++,o(l,s,s)),a(v+1,d,u)&&(c++,o(u,s,s)),a(v,d-1,h)&&(c++,o(h,s,s)),a(v,d+1,f)&&(c++,o(f,s,s)),s[0]/=c,s[1]/=c,r[p]=s[0],r[p+1]=s[1]),r[p+3]=1}},_updateGradientTexture:function(e,r){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new T.Texture2D({image:document.createElement("canvas")});var i=this._gradientTexture,n=i.image;n.width=200,n.height=1;var a=n.getContext("2d"),o=a.createLinearGradient(0,.5,n.width,.5);e[0].stops.forEach(function(s){var l;r[1]===r[0]?l=0:(l=s.value/r[1],l=Math.min(Math.max(l,0),1)),o.addColorStop(l,s.color)}),a.fillStyle=o,a.fillRect(0,0,n.width,n.height),i.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,r,i,n){var a=this._limitInViewportAndFullFill(e,r,i,n);e=a.leftTop,r=a.rightBottom,this._particleSurface.setRegion(a.region),this._planeMesh.position.set((e[0]+r[0])/2,n.getHeight()-(e[1]+r[1])/2,0);var o=r[0]-e[0],s=r[1]-e[1];this._planeMesh.scale.set(o/2,s/2,1),this._particleSurface.resize(Math.max(Math.min(o,2048),1),Math.max(Math.min(s,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,r,i,n){var a=[Math.max(e[0],0),Math.max(e[1],0)],o=[Math.min(r[0],n.getWidth()),Math.min(r[1],n.getHeight())];if(i.get("coordinateSystem")==="bmap"){var s=i.getData().getDataExtent(i.coordDimToDataDim("lng")[0]),l=Math.floor(s[1]-s[0])>=359;l&&(a[0]>0&&(a[0]=0),o[0]<n.getWidth()&&(o[0]=n.getWidth()))}var u=r[0]-e[0],h=r[1]-e[1],f=o[0]-a[0],c=o[1]-a[1],d=[(a[0]-e[0])/u,1-c/h-(a[1]-e[1])/h,f/u,c/h];return{leftTop:a,rightBottom:o,region:d}},_updateCamera:function(e,r,i){this.viewGL.setViewport(0,0,e,r,i);var n=this.viewGL.camera;n.left=n.bottom=0,n.top=r,n.right=e,n.near=0,n.far=100,n.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function zv(t){t.registerChartView(Gv),t.registerSeriesModel(Nv)}Object(w.x)(zv);var Sl=Y("bYtY"),Ua=w.g.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var r=this._processFlatCoordsArray(e.data);this._flatCoords=r.flatCoords,this._flatCoordsOffset=r.flatCoordsOffset,r.flatCoords&&(e.data=new Float32Array(r.count)),Ua.superApply(this,"init",arguments)},mergeOption:function(e){var r=this._processFlatCoordsArray(e.data);this._flatCoords=r.flatCoords,this._flatCoordsOffset=r.flatCoordsOffset,r.flatCoords&&(e.data=new Float32Array(r.count)),Ua.superApply(this,"mergeOption",arguments)},appendData:function(e){var r=this._processFlatCoordsArray(e.data);r.flatCoords&&(this._flatCoords?(this._flatCoords=Object(Sl.concatArray)(this._flatCoords,r.flatCoords),this._flatCoordsOffset=Object(Sl.concatArray)(this._flatCoordsOffset,r.flatCoordsOffset)):(this._flatCoords=r.flatCoords,this._flatCoordsOffset=r.flatCoordsOffset),e.data=new Float32Array(r.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");return i},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,r){if(this._flatCoordsOffset){for(var i=this._flatCoordsOffset[e*2],n=this._flatCoordsOffset[e*2+1],a=0;a<n;a++)r[a]=r[a]||[],r[a][0]=this._flatCoords[i+a*2],r[a][1]=this._flatCoords[i+a*2+1];return n}else{for(var o=this._getCoordsFromItemModel(e),a=0;a<o.length;a++)r[a]=r[a]||[],r[a][0]=o[a][0],r[a][1]=o[a][1];return o.length}},_processFlatCoordsArray:function(e){var r=0;if(this._flatCoords&&(r=this._flatCoords.length),typeof e[0]=="number"){for(var i=e.length,n=new Uint32Array(i),a=new Float64Array(i),o=0,s=0,l=0,u=0;u<i;){l++;var h=e[u++];n[s++]=o+r,n[s++]=h;for(var f=0;f<h;f++){var c=e[u++],d=e[u++];a[o++]=c,a[o++]=d,u>i}}return{flatCoordsOffset:new Uint32Array(n.buffer,0,s),flatCoords:a,count:l}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,r){var i=new w.e(["value"],this);return i.hasItemOption=!1,i.initData(e.data,[],function(n,a,o,s){if(n instanceof Array)return NaN;i.hasItemOption=!0;var l=n.value;if(l!=null)return l instanceof Array?l[s]:l}),i},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),Hv=Ua,Vv=w.b.extend({type:"linesGL",__ecgl__:!0,init:function(e,r){this.groupGL=new T.Node,this.viewGL=new qt("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new gl(this.viewGL),this._nativeLinesShader=T.createShader("ecgl.lines3D"),this._meshLinesShader=T.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,r,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i);var n=this._linesMeshes[0];n||(n=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(n),this._updateLinesMesh(e,n,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalPrepareRender:function(e,r,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalRender:function(e,r,i,n){var a=this._linesMeshes[this._currentStep];a||(a=this._createLinesMesh(r),this._linesMeshes[this._currentStep]=a),this._updateLinesMesh(r,a,e.start,e.end),this.groupGL.add(a),n.getZr().refresh(),this._currentStep++},updateTransform:function(e,r,i){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,i)},_createLinesMesh:function(e){var r=new T.Mesh({$ignorePicking:!0,material:new T.Material({shader:T.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new xl({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:T.Mesh.LINES,culling:!1});return r},_updateLinesMesh:function(e,r,i,n){var a=e.getData();r.material.blend=e.get("blendMode")==="lighter"?T.additiveBlend:null;var o=e.get("lineStyle.curveness")||0,s=e.get("polyline"),l=r.geometry,u=e.coordinateSystem,h=re.firstNotNull(e.get("lineStyle.width"),1);h>1?(r.material.shader!==this._meshLinesShader&&r.material.attachShader(this._meshLinesShader),r.mode=T.Mesh.TRIANGLES):(r.material.shader!==this._nativeLinesShader&&r.material.attachShader(this._nativeLinesShader),r.mode=T.Mesh.LINES),i=i||0,n=n||a.count(),l.resetOffset();var f=0,c=0,d=[],v=[],p=[],m=[],g=[],_=.3,y=.7;function S(){v[0]=d[0]*y+m[0]*_-(d[1]-m[1])*o,v[1]=d[1]*y+m[1]*_-(m[0]-d[0])*o,p[0]=d[0]*_+m[0]*y-(d[1]-m[1])*o,p[1]=d[1]*_+m[1]*y-(m[0]-d[0])*o}if(s||o!==0)for(var x=i;x<n;x++)if(s){var E=e.getLineCoordsCount(x);f+=l.getPolylineVertexCount(E),c+=l.getPolylineTriangleCount(E)}else e.getLineCoords(x,g),this._glViewHelper.dataToPoint(u,g[0],d),this._glViewHelper.dataToPoint(u,g[1],m),S(),f+=l.getCubicCurveVertexCount(d,v,p,m),c+=l.getCubicCurveTriangleCount(d,v,p,m);else{var D=n-i;f+=D*l.getLineVertexCount(),c+=D*l.getLineVertexCount()}l.setVertexCount(f),l.setTriangleCount(c);for(var L=i,b=[],x=i;x<n;x++){T.parseColor(je(a,L),b);var M=re.firstNotNull(Ze(a,L),1);b[3]*=M;for(var E=e.getLineCoords(x,g),N=0;N<E;N++)this._glViewHelper.dataToPoint(u,g[N],g[N]);s?l.addPolyline(g,b,h,0,E):o!==0?(d=g[0],m=g[1],S(),l.addCubicCurve(d,v,p,m,b,h)):l.addPolyline(g,b,h,0,2),L++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Wv(t){t.registerChartView(Vv),t.registerSeriesModel(Hv)}Object(w.x)(Wv)},PbkX:function(gn,ve,Y){"use strict";function w(Ve){var tt=new XMLHttpRequest;tt.open("get",Ve.url),tt.responseType=Ve.responseType||"text",Ve.onprogress&&(tt.onprogress=function(xe){if(xe.lengthComputable){var dt=xe.loaded/xe.total;Ve.onprogress(dt,xe.loaded,xe.total)}else Ve.onprogress(null)}),tt.onload=function(xe){tt.status>=400?Ve.onerror&&Ve.onerror():Ve.onload&&Ve.onload(tt.response)},Ve.onerror&&(tt.onerror=Ve.onerror),tt.send(null)}ve.a={get:w}},ProS:function(gn,ve,Y){"use strict";var w=Y("qnTB");Y.d(ve,"a",function(){return w.a}),Y.d(ve,"b",function(){return w.b}),Y.d(ve,"c",function(){return w.c}),Y.d(ve,"d",function(){return w.d}),Y.d(ve,"e",function(){return w.e}),Y.d(ve,"f",function(){return w.f}),Y.d(ve,"g",function(){return w.h}),Y.d(ve,"h",function(){return w.i}),Y.d(ve,"i",function(){return w.q}),Y.d(ve,"j",function(){return w.t}),Y.d(ve,"k",function(){return w.u}),Y.d(ve,"l",function(){return w.v}),Y.d(ve,"m",function(){return w.y}),Y.d(ve,"n",function(){return w.z}),Y.d(ve,"o",function(){return w.A}),Y.d(ve,"p",function(){return w.C}),Y.d(ve,"q",function(){return w.E}),Y.d(ve,"r",function(){return w.F}),Y.d(ve,"s",function(){return w.G}),Y.d(ve,"t",function(){return w.J}),Y.d(ve,"u",function(){return w.N}),Y.d(ve,"v",function(){return w.O}),Y.d(ve,"w",function(){return w.P}),Y.d(ve,"x",function(){return w.Z}),Y.d(ve,"y",function(){return w.ab}),Y.d(ve,"z",function(){return w.eb});var Ve=Y("IrRn"),tt=Y("G+eS"),xe=Y("+V6l"),dt=Y("XoG2"),xt=Y("7ikc");Object(Ve.a)([xe.a,dt.a]);var Vt={init:function(){return tt.l.apply(null,arguments)}};Object(Ve.a)(xt.a)},YgoH:function(gn,ve,Y){"use strict";(function(w){var Ve=Y("PbkX"),tt,xe={};xe.supportWebGL=function(){if(tt==null)try{var xt=document.createElement("canvas"),Vt=xt.getContext("webgl")||xt.getContext("experimental-webgl");if(!Vt)throw new Error}catch(Wt){tt=!1}return tt},xe.Int8Array=typeof Int8Array=="undefined"?Array:Int8Array,xe.Uint8Array=typeof Uint8Array=="undefined"?Array:Uint8Array,xe.Uint16Array=typeof Uint16Array=="undefined"?Array:Uint16Array,xe.Uint32Array=typeof Uint32Array=="undefined"?Array:Uint32Array,xe.Int16Array=typeof Int16Array=="undefined"?Array:Int16Array,xe.Float32Array=typeof Float32Array=="undefined"?Array:Float32Array,xe.Float64Array=typeof Float64Array=="undefined"?Array:Float64Array;var dt={};typeof window!="undefined"?dt=window:typeof w!="undefined"&&(dt=w),xe.requestAnimationFrame=dt.requestAnimationFrame||dt.msRequestAnimationFrame||dt.mozRequestAnimationFrame||dt.webkitRequestAnimationFrame||function(xt){setTimeout(xt,16)},xe.createCanvas=function(){return document.createElement("canvas")},xe.createImage=function(){return new dt.Image},xe.request={get:Ve.a.get},xe.addEventListener=function(xt,Vt,Wt,_n){xt.addEventListener(Vt,Wt,_n)},xe.removeEventListener=function(xt,Vt,Wt){xt.removeEventListener(Vt,Wt)},ve.a=xe}).call(this,Y("IyRk"))}}]);
