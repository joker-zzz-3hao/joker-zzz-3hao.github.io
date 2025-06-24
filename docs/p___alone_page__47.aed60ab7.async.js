(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3985],{42270:function(L){L.exports={container:"container___1v034",containerWra:"containerWra___1kVOk",textBox:"textBox___2jXnH"}},390091:function(L){L.exports={my_inputWra:"my_inputWra___2wK-6"}},28433:function(L,Z,v){"use strict";v.d(Z,{d:function(){return B}});var h=v(667294),M=v(42270),t=v.n(M),B=U=>{var W=U.mainText,i=U.hideFooter,r=i===void 0?!0:i;return h.createElement(h.Fragment,null,h.createElement("div",{className:t().containerWra},h.createElement("div",{className:t().container},h.createElement("div",{className:t().textBox},h.createElement("h1",null,W),h.createElement("h1",null,W)),!r&&h.createElement("p",null,"THANK YOU",h.createElement("span",null,":)")))))}},568431:function(L,Z,v){"use strict";v.d(Z,{s:function(){return M}});var h=v(690772).ZP;class M{}M.CP=h},436033:function(L,Z,v){"use strict";v.r(Z),v.d(Z,{_\u7EDD\u5883_\u7948\u7977_\u8131\u9669:function(){return x},default:function(){return R}});var h=v(311849),M=v(194657),t=v(667294),B=v(431614),U=v.n(B);class W{}W.VerificationInput=U();var i=v(390091),r=v.n(i),d=v(568431),m=v(406066),s=v(36898),n=v(228990),g=v(28433),u=new m.f("\u7EDD\u5883\u7948\u7977__"),l=s.k.get_format();function S(c){return Array.from({length:c},(D,w)=>w+1)}var O=c=>{var D=c.count,w=c.base_size,F=w===void 0?95:w;return t.createElement(t.Fragment,null,t.createElement(d.s.CP,{height:F,width:F/1,color:"green",play:!0,duration:.2,perspective:900,numbers:D}))},x=c=>{var D,w,F=c.scale_ratio,Q=F===void 0?1:F,e=c.margin_ratio,o=e===void 0?1:e,a=(0,t.useState)(u.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A()),f=(0,M.Z)(a,2),y=f[0],_=f[1],I=(0,t.useState)(""),A=(0,M.Z)(I,2),b=A[0],C=A[1],P=(0,n.U9)({wait_ts:200}),N=(D=(w=y.count_map)===null||w===void 0?void 0:w[l])!==null&&D!==void 0?D:0,z=3;function K(j){C(j),j.length===z&&(j==="bbd"&&V(),C(""))}function V(){var j=N+1;u.simple_set_and_save("count_map",{target:{value:(0,h.Z)((0,h.Z)({},y.count_map),{},{[l]:j})}},y,_)}function H(j){return" calc ( ".concat(j," * ").concat(o," )")}return t.createElement("div",{style:{}},t.createElement("div",{style:(0,h.Z)((0,h.Z)((0,h.Z)({},{display:"flex",flexDirection:"column",alignItems:"center"}),{position:"relative"}),{transform:"scale(".concat(Q,")")})},t.createElement("div",{style:(0,h.Z)({},{marginTop:H("2em"),marginBottom:H("6em")})},(()=>t.createElement(O,{count:"".concat(N)}))()),t.createElement("div",{className:r().my_inputWra},t.createElement(W.VerificationInput,{ref:P,classNames:{},autoFocus:!0,validChars:"bbd",length:z,placeholder:"\u7948\u7977\u8131\u9669",value:b,onChange:K})),t.createElement("div",{style:{marginTop:H("6em")}},(()=>{var j=`
      \u7ED9\u6211\u4FE1\u5FC3\u548C\u52C7\u6C14\uFF0C\u5E76\u7ED9\u4E88\u4E00\u70B9\u70B9\u5C0F\u5C0F\u7684\u63D0\u793A \u2014\u2014\u2014\u2014> \u7ED9\u6211\u5B9E\u9645\u7684\u5E2E\u52A9 \u2014\u2014\u2014\u2014> \u5E2E\u6211\u505A
      `,$=!1;return $?t.createElement("pre",null,j):t.createElement(t.Fragment,null,t.createElement(g.d,{mainText:j.trim()}))})())),t.createElement("div",{style:{position:"fixed",right:0,top:0}},(()=>{var j=S(N),$=j.reduce((Y,q,X)=>Y+1*Math.pow(1.01,X),0);return t.createElement(O,{count:$.toFixed(6/2),base_size:30})})()))},R=x},431614:function(L,Z,v){/*! For license information please see index.js.LICENSE.txt */(function(){var h={184:function(r,d){var m;(function(){"use strict";var s={}.hasOwnProperty;function n(){for(var g=[],u=0;u<arguments.length;u++){var l=arguments[u];if(l){var S=typeof l;if(S==="string"||S==="number")g.push(l);else if(Array.isArray(l)){if(l.length){var O=n.apply(null,l);O&&g.push(O)}}else if(S==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){g.push(l.toString());continue}for(var x in l)s.call(l,x)&&l[x]&&g.push(x)}}}return g.join(" ")}r.exports?(n.default=n,r.exports=n):(m=function(){return n}.apply(d,[]))===void 0||(r.exports=m)})()},28:function(r,d,m){"use strict";m.d(d,{Z:function(){return l}});var s=m(81),n=m.n(s),g=m(645),u=m.n(g)()(n());u.push([r.id,`/* :where() gives the styles specificity 0, which makes them overridable */
:where(.vi__wrapper) {
  position: relative;
  width: min-content;
}

.vi {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  color: transparent;
  background: transparent;
  caret-color: transparent;
  outline: none;
  border: 0 none transparent;
}

.vi::-ms-reveal,
.vi::-ms-clear {
  display: none;
}

.vi::selection {
  background: transparent;
}

:where(.vi__container) {
  display: flex;
  gap: 8px;
  height: 50px;
  width: 300px;
}

:where(.vi__character) {
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  color: black;
  background-color: white;
  border: 1px solid black;
  cursor: default;
  user-select: none;
  box-sizing: border-box;
}

:where(.vi__character--inactive) {
  color: dimgray;
  background-color: lightgray;
}

:where(.vi__character--selected) {
  outline: 2px solid cornflowerblue;
  color: cornflowerblue;
}
`,""]);var l=u},645:function(r){"use strict";r.exports=function(d){var m=[];return m.toString=function(){return this.map(function(s){var n="",g=s[5]!==void 0;return s[4]&&(n+="@supports (".concat(s[4],") {")),s[2]&&(n+="@media ".concat(s[2]," {")),g&&(n+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),n+=d(s),g&&(n+="}"),s[2]&&(n+="}"),s[4]&&(n+="}"),n}).join("")},m.i=function(s,n,g,u,l){typeof s=="string"&&(s=[[null,s,void 0]]);var S={};if(g)for(var O=0;O<this.length;O++){var x=this[O][0];x!=null&&(S[x]=!0)}for(var R=0;R<s.length;R++){var c=[].concat(s[R]);g&&S[c[0]]||(l!==void 0&&(c[5]===void 0||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=l),n&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=n),u&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=u):c[4]="".concat(u)),m.push(c))}},m}},81:function(r){"use strict";r.exports=function(d){return d[1]}},703:function(r,d,m){"use strict";var s=m(414);function n(){}function g(){}g.resetWarningCache=n,r.exports=function(){function u(O,x,R,c,D,w){if(w!==s){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}function l(){return u}u.isRequired=u;var S={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:l,element:u,elementType:u,instanceOf:l,node:u,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:g,resetWarningCache:n};return S.PropTypes=S,S}},697:function(r,d,m){r.exports=m(703)()},414:function(r){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},M={};function t(i){var r=M[i];if(r!==void 0)return r.exports;var d=M[i]={id:i,exports:{}};return h[i](d,d.exports,t),d.exports}t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,{a:r}),r},t.d=function(i,r){for(var d in r)t.o(r,d)&&!t.o(i,d)&&Object.defineProperty(i,d,{enumerable:!0,get:r[d]})},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var B={};(function(){"use strict";t.r(B),t.d(B,{default:function(){return Q}});var i=v(667294),r=t.n(i),d=t(184),m=t.n(d),s=t(697),n=t.n(s),g=t(28);function u(e){return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},u(e)}var l=["className","type"],S=["className"];function O(e,o,a){return(o=function(f){var y=function(_,I){if(u(_)!=="object"||_===null)return _;var A=_[Symbol.toPrimitive];if(A!==void 0){var b=A.call(_,"string");if(u(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(f);return u(y)==="symbol"?y:String(y)}(o))in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(e[f]=a[f])}return e},x.apply(this,arguments)}function R(e,o){if(e==null)return{};var a,f,y=function(I,A){if(I==null)return{};var b,C,P={},N=Object.keys(I);for(C=0;C<N.length;C++)b=N[C],A.indexOf(b)>=0||(P[b]=I[b]);return P}(e,o);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(f=0;f<_.length;f++)a=_[f],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(y[a]=e[a])}return y}function c(e,o){return function(a){if(Array.isArray(a))return a}(e)||function(a,f){var y=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(y!=null){var _,I,A,b,C=[],P=!0,N=!1;try{if(A=(y=y.call(a)).next,f===0){if(Object(y)!==y)return;P=!1}else for(;!(P=(_=A.call(y)).done)&&(C.push(_.value),C.length!==f);P=!0);}catch(z){N=!0,I=z}finally{try{if(!P&&y.return!=null&&(b=y.return(),Object(b)!==b))return}finally{if(N)throw I}}return C}}(e,o)||D(e,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function D(e,o){if(e){if(typeof e=="string")return w(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,o):void 0}}function w(e,o){(o==null||o>e.length)&&(o=e.length);for(var a=0,f=new Array(o);a<o;a++)f[a]=e[a];return f}var F=(0,i.forwardRef)(function(e,o){var a=e.value,f=e.length,y=e.validChars,_=e.placeholder,I=e.autoFocus,A=e.passwordMode,b=e.inputProps,C=e.containerProps,P=e.classNames,N=e.onChange,z=e.onFocus,K=e.onBlur,V=e.onComplete,H=c((0,i.useState)(""),2),j=H[0],$=H[1],Y=c((0,i.useState)(!1),2),q=Y[0],X=Y[1],G=(0,i.useRef)(null);(0,i.useEffect)(function(){I&&G.current.focus()},[I]);var J,ee=function(){G.current.focus()},k=function(){return a!=null?a:j},ne=b.className,te=b.type,re=R(b,l),oe=C.className,ae=R(C,S);return r().createElement("div",{className:"vi__wrapper"},r().createElement("input",x({"aria-label":"verification input",spellCheck:!1,value:k(),onChange:function(p){var T=p.target.value.replace(/\s/g,"");RegExp("^[".concat(y,"]{0,").concat(f,"}$")).test(T)&&(N&&(N==null||N(T)),$(T),T.length===f&&(V==null||V(T)))},ref:function(p){G.current=p,typeof o=="function"?o(p):o&&(o.current=p)},className:m()("vi",ne),onKeyDown:function(p){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(p.key)&&p.preventDefault()},onFocus:function(){X(!0),z==null||z()},onBlur:function(){X(!1),K==null||K()},onSelect:function(p){var T=p.target.value;p.target.setSelectionRange(T.length,T.length)},type:A?"password":te},re)),r().createElement("div",x({"data-testid":"container",className:m()("vi__container",P.container,oe),onClick:function(){return G.current.focus()}},ae),(J=Array(f),function(E){if(Array.isArray(E))return w(E)}(J)||function(E){if(typeof Symbol!="undefined"&&E[Symbol.iterator]!=null||E["@@iterator"]!=null)return Array.from(E)}(J)||D(J)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()).map(function(E,p){var T;return r().createElement("div",{className:m()("vi__character",P.character,(T={"vi__character--selected":(k().length===p||k().length===p+1&&f===p+1)&&q},O(T,P.characterSelected,(k().length===p||k().length===p+1&&f===p+1)&&q),O(T,"vi__character--inactive",k().length<p),O(T,P.characterInactive,k().length<p),T)),onClick:ee,id:"field-".concat(p),"data-testid":"character-".concat(p),key:p},A&&k()[p]?"*":k()[p]||_)})),r().createElement("style",{dangerouslySetInnerHTML:{__html:g.Z}}))});F.displayName="VerificationInput",F.propTypes={value:n().string,length:n().number,validChars:n().string,placeholder:n().string,autoFocus:n().bool,passwordMode:n().bool,inputProps:n().object,containerProps:n().object,classNames:n().shape({container:n().string,character:n().string,characterInactive:n().string,characterSelected:n().string}),onChange:n().func,onFocus:n().func,onBlur:n().func,onComplete:n().func},F.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"\xB7",autoFocus:!1,inputProps:{},containerProps:{},classNames:{}};var Q=F})();var U=Z;for(var W in B)U[W]=B[W];B.__esModule&&Object.defineProperty(U,"__esModule",{value:!0})})()}}]);
