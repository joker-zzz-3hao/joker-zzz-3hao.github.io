(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"5rEg":function(d,g,e){"use strict";var r=e("mh/l"),c=e("rePB"),o=e("q1tI"),I=e("TSYQ"),v=e.n(I),O=e("H84U"),D=function(_){return o.createElement(O.a,null,function(p){var i,C=p.getPrefixCls,u=p.direction,S=_.prefixCls,b=_.className,x=b===void 0?"":b,l=C("input-group",S),m=v()(l,(i={},Object(c.a)(i,"".concat(l,"-lg"),_.size==="large"),Object(c.a)(i,"".concat(l,"-sm"),_.size==="small"),Object(c.a)(i,"".concat(l,"-compact"),_.compact),Object(c.a)(i,"".concat(l,"-rtl"),u==="rtl"),i),x);return o.createElement("span",{className:m,style:_.style,onMouseEnter:_.onMouseEnter,onMouseLeave:_.onMouseLeave,onFocus:_.onFocus,onBlur:_.onBlur},_.children)})},A=D,a=e("wx14"),w=e("c+Xe"),N=e("l+S1"),J=e("2/Rp"),R=e("3Nzz"),F=e("0n0R"),L=function(t,_){var p={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&_.indexOf(i)<0&&(p[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,i=Object.getOwnPropertySymbols(t);C<i.length;C++)_.indexOf(i[C])<0&&Object.prototype.propertyIsEnumerable.call(t,i[C])&&(p[i[C]]=t[i[C]]);return p},z=o.forwardRef(function(t,_){var p,i=t.prefixCls,C=t.inputPrefixCls,u=t.className,S=t.size,b=t.suffix,x=t.enterButton,l=x===void 0?!1:x,m=t.addonAfter,h=t.loading,y=t.disabled,s=t.onSearch,j=t.onChange,f=L(t,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),E=o.useContext(O.b),B=E.getPrefixCls,$=E.direction,G=o.useContext(R.b),W=S||G,q=o.useRef(null),Y=function(P){P&&P.target&&P.type==="click"&&s&&s(P.target.value,P),j&&j(P)},re=function(P){var T;document.activeElement===((T=q.current)===null||T===void 0?void 0:T.input)&&P.preventDefault()},ne=function(P){var T;s&&s((T=q.current)===null||T===void 0?void 0:T.input.value,P)},ee=B("input-search",i),se=B("input",C),de=typeof l=="boolean"?o.createElement(N.a,null):null,ue="".concat(ee,"-button"),te,K=l||{},le=K.type&&K.type.__ANT_BUTTON===!0;le||K.type==="button"?te=Object(F.a)(K,Object(a.a)({onMouseDown:re,onClick:function(P){var T,ce;(ce=(T=K==null?void 0:K.props)===null||T===void 0?void 0:T.onClick)===null||ce===void 0||ce.call(T,P),ne(P)},key:"enterButton"},le?{className:ue,size:W}:{})):te=o.createElement(J.a,{className:ue,type:l?"primary":void 0,size:W,disabled:y,key:"enterButton",onMouseDown:re,onClick:ne,loading:h,icon:de},l),m&&(te=[te,Object(F.a)(m,{key:"addonAfter"})]);var me=v()(ee,(p={},Object(c.a)(p,"".concat(ee,"-rtl"),$==="rtl"),Object(c.a)(p,"".concat(ee,"-").concat(W),!!W),Object(c.a)(p,"".concat(ee,"-with-button"),!!l),p),u);return o.createElement(r.a,Object(a.a)({ref:Object(w.a)(q,_),onPressEnter:ne},f,{size:W,prefixCls:se,addonAfter:te,suffix:b,onChange:Y,className:me,disabled:y}))});z.displayName="Search";var H=z,Q=e("whJP"),U=e("ODXe"),k=e("bT9E"),M=e("9BLJ"),ae=e("fHMl"),oe=function(t,_){var p={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&_.indexOf(i)<0&&(p[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,i=Object.getOwnPropertySymbols(t);C<i.length;C++)_.indexOf(i[C])<0&&Object.prototype.propertyIsEnumerable.call(t,i[C])&&(p[i[C]]=t[i[C]]);return p},ie={click:"onClick",hover:"onMouseOver"},Z=o.forwardRef(function(t,_){var p=Object(o.useState)(!1),i=Object(U.a)(p,2),C=i[0],u=i[1],S=function(){var m=t.disabled;m||u(!C)},b=function(m){var h,y=t.action,s=t.iconRender,j=s===void 0?function(){return null}:s,f=ie[y]||"",E=j(C),B=(h={},Object(c.a)(h,f,S),Object(c.a)(h,"className","".concat(m,"-icon")),Object(c.a)(h,"key","passwordIcon"),Object(c.a)(h,"onMouseDown",function(G){G.preventDefault()}),Object(c.a)(h,"onMouseUp",function(G){G.preventDefault()}),h);return o.cloneElement(o.isValidElement(E)?E:o.createElement("span",null,E),B)},x=function(m){var h=m.getPrefixCls,y=t.className,s=t.prefixCls,j=t.inputPrefixCls,f=t.size,E=t.visibilityToggle,B=oe(t,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),$=h("input",j),G=h("input-password",s),W=E&&b(G),q=v()(G,y,Object(c.a)({},"".concat(G,"-").concat(f),!!f)),Y=Object(a.a)(Object(a.a)({},Object(k.a)(B,["suffix","iconRender"])),{type:C?"text":"password",className:q,prefixCls:$,suffix:W});return f&&(Y.size=f),o.createElement(r.a,Object(a.a)({ref:_},Y))};return o.createElement(O.a,null,x)});Z.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(_){return _?o.createElement(M.a,null):o.createElement(ae.a,null)}},Z.displayName="Password";var V=Z;r.a.Group=A,r.a.Search=H,r.a.TextArea=Q.a,r.a.Password=V;var X=g.a=r.a},"9BLJ":function(d,g,e){"use strict";var r=e("VTBJ"),c=e("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},I=o,v=e("6VBw"),O=function(a,w){return c.createElement(v.a,Object(r.a)(Object(r.a)({},a),{},{ref:w,icon:I}))};O.displayName="EyeOutlined";var D=g.a=c.forwardRef(O)},Bnag:function(d,g){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d.exports=e,d.exports.__esModule=!0,d.exports.default=d.exports},EbDI:function(d,g){function e(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}d.exports=e,d.exports.__esModule=!0,d.exports.default=d.exports},Ijbi:function(d,g,e){var r=e("WkPL");function c(o){if(Array.isArray(o))return r(o)}d.exports=c,d.exports.__esModule=!0,d.exports.default=d.exports},RIqP:function(d,g,e){var r=e("Ijbi"),c=e("EbDI"),o=e("ZhPi"),I=e("Bnag");function v(O){return r(O)||c(O)||o(O)||I()}d.exports=v,d.exports.__esModule=!0,d.exports.default=d.exports},dSd2:function(d,g,e){"use strict";e.r(g);var r=e("0Owb"),c=e("5NDa"),o=e("5rEg"),I=e("+L6B"),v=e("2/Rp"),O=e("jrin"),D=e("tJVT"),A=e("q1tI"),a=e.n(A),w=e("9kvl"),N=e("nNyA"),J=e("g6Jz"),R=e.n(J),F=e("TSYQ"),L=e.n(F),z=e("fWQN"),H=e("mtLc"),Q=function(){function u(){Object(z.a)(this,u)}return Object(H.a)(u,null,[{key:"go_search",value:function(b){var x=b.cx,l=b.kw,m=b.gsc_sort,h=m===void 0?"":m,y={"gsc.q":l,"gsc.sort":h,"gsc.tab":0},s=Object.entries(y).map(function(j){var f=Object(D.a)(j,2),E=f[0],B=f[1];return E+"="+B}).join("&");window.open("https://cse.google.com/cse?cx=".concat(x,"#").concat(s))}}]),u}(),U=e("oBTY"),k=e("k1fw"),M;(function(u){var S;(function(b){var x=function(){function m(){Object(z.a)(this,m)}return Object(H.a)(m,null,[{key:"\u751F\u6210\u6587\u672C",value:function(y){var s=function(){var j=y.Ban_\u90E8\u5206\u5B50Url_________\u9700\u8981\u624B\u52A8_\u6DFB\u52A0\u5230\u8C37\u6B4CCSE,f=j===void 0?[]:j,E=f.map(function(B){return'a[href="'.concat(B.domain,'"]')}).join(",");return`
! \u5BF9\u3010Google CSE \u65E0\u6CD5\u8FC7\u6EE4Bug\u3011\u7684\u524D\u7AEF\u4FEE\u590D
cse.google.com##.gsc-webResult.gsc-result:has(`.concat(E,`)
! \u8FD9\u4E2A\u63D2\u4EF6\u4E5F\u975E\u5E38tm\u8822\u7684\u4E00\u70B9\uFF0C\u4E0D\u652F\u6301\u57DF\u540D\u901A\u914D\u7B26
cse.google.com.hk##.gsc-webResult.gsc-result:has(`).concat(E,`)
      `)}();console.log("ublock_ogrin_\u63D2\u4EF6\u6587\u672C",s)}}]),m}();b.Google_CSE\u641C\u7D22\u5F15\u64CE_\u5C4F\u853D\u90E8\u5206\u65E0\u6548\u7ED3\u679C____Helper=x;var l=function m(){Object(z.a)(this,m)};b.\u77E5\u4E4E_\u5C4F\u853D\u8BCD____Helper=l})(S||(S=u.UBlock_\u6587\u672C\u62E6\u622A\u5668||(u.UBlock_\u6587\u672C\u62E6\u622A\u5668={})))})(M||(M={}));function ae(u){var S=Object.values(u).flat(1),b=[],x=["org.cn","com","net","org","io","sh","pm","pro","cc","cn","ci","wiki","me","in","mk"],l=["cnsrc","360","aliyun","zone","silic","github","microsoft"];function m(s){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(b.includes(s)===!1)b.push(s);else if(j())throw new Error("\u6B64\u5904\uFF0C\u91CD\u590D\u4E86\uFF1A".concat(s))}function h(){S.forEach(function(s){var j=s.domain.split(".");j.forEach(function(f,E,B){var $=E===B.length-1;$?m(f,function(){return!x.includes(f)}):m(f)})})}function y(){var s=new RegExp("\\.(".concat(x.join("|"),")$"));console.log("reg",s),S.forEach(function(j){for(var f=j.domain;f.match(s);)f=f.replace(s,"");var E=f.split(".");E.forEach(function(B){m(B,function(){return l.includes(B)===!1})})})}return y(),u}function oe(u){var S=Object.entries(u).map(function(b){var x=Object(D.a)(b,2),l=x[0],m=x[1];return[l,m.filter(function(h){var y=Object.values(h.\u88ABban_option\u9009\u9879||{}).find(function(s){return!!s});return!y})]});return S.reduce(function(b,x){var l=Object(D.a)(x,2),m=l[0],h=l[1];return Object(k.a)(Object(k.a)({},b),{},Object(O.a)({},m,h))},{})}var ie=function(){function u(){Object(z.a)(this,u)}return Object(H.a)(u,null,[{key:"\u6253\u5370\u67E5\u770B\u8303\u56F4",value:function(){var b=function(){var l=[{domain:"hacking8.com",type:"\u7F51\u7AD9"},{domain:"bbs.pediy.com",type:"\u793E\u533A"},{domain:"t00ls.com",type:"\u793E\u533A"},{domain:"freebuf.com",type:"\u7F51\u7AD9"},{domain:"tttang.com",type:"\u535A\u5BA2"},{domain:"github.com",type:"\u5E73\u53F0"},{domain:"exploitalert.com",type:"\u5E73\u53F0"},{domain:"cxsecurity.com",type:"\u7F51\u7AD9"},{domain:"sec-wiki.com",type:"\u7F51\u7AD9"},{domain:"medium.com",type:"\u793E\u533A"},{domain:"zsxq.com",type:"\u793E\u533A"},{domain:"infosecwriteups.com",type:"\u7F51\u7AD9"},{domain:"mitre.org",type:"\u5E73\u53F0"},{domain:"hahwul.com",type:"\u535A\u5BA2"},{domain:"arstechnica.com",type:"\u7F51\u7AD9"},{domain:"blackhillsinfosec.com",type:"\u7F51\u7AD9"},{domain:"portswigger.net",type:"\u793E\u533A"},{domain:"packetstormsecurity.com",type:"\u7F51\u7AD9"},{domain:"gitbooks.io",type:"\u624B\u518C"},{domain:"anquanke.com",type:"\u7F51\u7AD9"},{domain:"unsafe.sh",type:"\u7F51\u7AD9"},{domain:"buaq.net",type:"\u7F51\u7AD9"},{domain:"f5.pm",type:"\u7F51\u7AD9"}].concat(Object(U.a)([{domain:"cn-sec.com",type:"\u7F51\u7AD9"},{domain:"modb.pro",type:"\u7F51\u7AD9"},{domain:"iculture.cc",type:"\u535A\u5BA2"},{domain:"cnsrc.org.cn",type:"\u5E73\u53F0"},{domain:"cnsrc.org",type:"\u5E73\u53F0"},{domain:"wangan.com",type:"\u7F51\u7AD9"},{domain:"codeantenna.com",type:"\u7F51\u7AD9"},{domain:"aqniu.com",type:"\u7F51\u7AD9"},{domain:"xz.aliyun.com",type:"\u793E\u533A"},{domain:"danielw.top",type:"\u535A\u5BA2"},{domain:"hackdig.com",type:"\u793E\u533A"},{domain:"butian.net",type:"\u793E\u533A"},{domain:"moonsec.com",type:"\u535A\u5BA2"},{domain:"aabyss.cn",type:"\u535A\u5BA2"},{domain:"planet.vulbox.com",type:"\u793E\u533A"},{domain:"mianhuage.com",type:"\u535A\u5BA2"},{domain:"ddosi.org",type:"\u535A\u5BA2"},{domain:"lmboke.com",type:"\u535A\u5BA2"}]),Object(U.a)([{domain:"ihonker.com",type:"\u793E\u4EA4"}])),m=[{domain:"youtube.com",type:"\u5E73\u53F0"},{domain:"twitter.com",type:"\u793E\u4EA4"},{domain:"360.cn",type:"\u7F51\u7AD9"},{domain:"360.com",type:"\u7F51\u7AD9"},{domain:"360.net",type:"\u7F51\u7AD9"}],h=[{domain:"yuque.com",type:"\u79C1\u57DF\u7B14\u8BB0"},{domain:"note.youdao.com",type:"\u79C1\u57DF\u7B14\u8BB0"},{domain:"app.yinxiang.com",type:"\u79C1\u57DF\u7B14\u8BB0"},{domain:"mywiz.cn",type:"\u79C1\u57DF\u7B14\u8BB0",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"fromwiz.com",type:"\u79C1\u57DF\u7B14\u8BB0",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}}],y=[{domain:"2022\u5E7410\u67081x\u65E522:07:24",type:"\u7F51\u7AD9"}].concat(Object(U.a)([{domain:"ichunqiu.com",type:"\u535A\u5BA2"},{domain:"cnhonkerarmy.com",type:"\u535A\u5BA2"},{domain:"xianzhi.aliyun.com",type:"\u535A\u5BA2"},{domain:"cnsec.org",type:"\u535A\u5BA2"},{domain:"pd521.com",type:"\u535A\u5BA2"},{domain:"xctf.org.cn",type:"\u535A\u5BA2"},{domain:"easyaq.com",type:"\u535A\u5BA2"},{domain:"4hou.com",type:"\u535A\u5BA2"},{domain:"seebug.org",type:"\u535A\u5BA2"},{domain:"https://start.me/p/X20Apn",type:"\u535A\u5BA2",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"xssed.com",type:"\u535A\u5BA2"},{domain:"caidaome.com",type:"\u535A\u5BA2"},{domain:"vulsee.com",type:"\u535A\u5BA2"},{domain:"wy.zone.ci",type:"\u535A\u5BA2"},{domain:"drop.zone.ci",type:"\u535A\u5BA2"},{domain:"zone.ci",type:"\u535A\u5BA2"},{domain:"sitedirsec.com",type:"\u535A\u5BA2",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"ctf-wiki.org",type:"\u535A\u5BA2"},{domain:"ctftime.org",type:"\u535A\u5BA2"},{domain:"bugku.com",type:"\u535A\u5BA2"}]),[{domain:"v2ex.com",type:"\u535A\u5BA2"},{domain:"hacksec.cn",type:"\u535A\u5BA2"},{domain:"2cto.com",type:"\u535A\u5BA2"},{domain:"secpulse.com",type:"\u535A\u5BA2"},{domain:"52pojie.cn",type:"\u535A\u5BA2"},{domain:"leavesongs.com",type:"\u535A\u5BA2"},{domain:"webshell.cc",type:"\u535A\u5BA2"},{domain:"03sec.com",type:"\u535A\u5BA2"},{domain:"secfree.com",type:"\u535A\u5BA2"},{domain:"77169.net",type:"\u535A\u5BA2"},{domain:"hackernews.cc",type:"\u535A\u5BA2"},{domain:"ijiandao.com",type:"\u535A\u5BA2"},{domain:"cnetsec.com",type:"\u535A\u5BA2"},{domain:"secist.com",type:"\u535A\u5BA2"},{domain:"secrss.com",type:"\u535A\u5BA2"},{domain:"sec-un.org",type:"\u535A\u5BA2",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"anzerclub.com",type:"\u535A\u5BA2",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"hetianlab.com",type:"\u535A\u5BA2"},{domain:"silic.wiki",type:"\u535A\u5BA2"},{domain:"wiki.silic.wiki",type:"\u535A\u5BA2"},{domain:"90sec.com",type:"\u535A\u5BA2"},{domain:"lijiejie.com",type:"\u535A\u5BA2"},{domain:"hackerone.com",type:"\u535A\u5BA2"},{domain:"he.net",type:"\u535A\u5BA2"},{domain:"youxia.org",type:"\u535A\u5BA2"},{domain:"myhack58.com",type:"\u535A\u5BA2"},{domain:"hackbase.net",type:"\u535A\u5BA2"},{domain:"chinapyg.com",type:"\u535A\u5BA2"},{domain:"govuln.com",type:"\u535A\u5BA2"},{domain:"html5sec.com",type:"\u535A\u5BA2"},{domain:"blackhat.com",type:"\u535A\u5BA2"},{domain:"defcon.org",type:"\u535A\u5BA2"},{domain:"knownsec.com",type:"\u535A\u5BA2"},{domain:"powerofcommunity.net",type:"\u535A\u5BA2"},{domain:"alienvault.com",type:"\u535A\u5BA2"},{domain:"kafan.cn",type:"\u535A\u5BA2"},{domain:"altervista.org",type:"\u535A\u5BA2"},{domain:"readthedocs.io",type:"\u535A\u5BA2"},{domain:"offensive-security.com",type:"\u535A\u5BA2"},{domain:"chybeta.github.io",type:"\u535A\u5BA2"},{domain:"github.io",type:"\u535A\u5BA2"},{domain:"pentester.land",type:"\u535A\u5BA2"},{domain:"peiqi.tech",type:"\u535A\u5BA2"},{domain:"wgpsec.org",type:"\u535A\u5BA2"},{domain:"bylibrary.cn",type:"\u535A\u5BA2"},{domain:"websec.ca",type:"\u535A\u5BA2"},{domain:"processon.com",type:"\u535A\u5BA2"},{domain:"netspi.com",type:"\u535A\u5BA2"},{domain:"nosec.org",type:"\u535A\u5BA2"},{domain:"sec-in.com",type:"\u535A\u5BA2"},{domain:"hake.cc",type:"\u535A\u5BA2"},{domain:"vipread.com",type:"\u535A\u5BA2"},{domain:"kanxue.com",type:"\u535A\u5BA2"},{domain:"gitbook.io",type:"\u535A\u5BA2"},{domain:"haax.fr",type:"\u535A\u5BA2"},{domain:"hacktricks.xyz",type:"\u535A\u5BA2"},{domain:"hackingarticles.in",type:"\u535A\u5BA2"},{domain:"vulnspy.com",type:"\u535A\u5BA2"},{domain:"nccgroup.com",type:"\u535A\u5BA2"},{domain:"expku.com",type:"\u535A\u5BA2"},{domain:"antichat.com",type:"\u535A\u5BA2"},{domain:"thehackernews.com",type:"\u535A\u5BA2",\u88ABban_option\u9009\u9879:{\u505A\u4E86SEO__\u800C\u5168\u7BC7\u65E0\u5173\u952E\u5B57\u5185\u5BB9:!0}},{domain:"2022\u5E7410\u670820\u65E522:07:57",type:"\u7F51\u7AD9"},{domain:"tuisec.win",type:"\u7F51\u7AD9"},{domain:"williamlong.info",type:"\u7F51\u7AD9"},{domain:"zhihu.com",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u6709\u5927\u91CF\u975E\u5B89\u5168\u7684\u751F\u6D3B\u5185\u5BB9_\u6781\u5BB9\u6613\u5F04\u6DF7:!0}},{domain:"hackfun.org",type:"\u7F51\u7AD9"},{domain:"lofter.com",type:"\u7F51\u7AD9"},{domain:"cnblogs.com",type:"\u7F51\u7AD9"},{domain:"cloudflare.com",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"securelist.com",type:"\u7F51\u7AD9"},{domain:"infosecurity-magazine.com",type:"\u7F51\u7AD9"},{domain:"leiphone.com",type:"\u7F51\u7AD9"},{domain:"tiejiang.org",type:"\u7F51\u7AD9"},{domain:"0kami.cn",type:"\u7F51\u7AD9"},{domain:"nmd5.com",type:"\u7F51\u7AD9"},{domain:"0-sec.org",type:"\u7F51\u7AD9"},{domain:"tencent.com",type:"\u7F51\u7AD9"},{domain:"inbreak.net",type:"\u7F51\u7AD9"},{domain:"sina.com.cn",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"sohu.com",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u6709\u5927\u91CF\u975E\u5B89\u5168\u7684\u751F\u6D3B\u5185\u5BB9_\u6781\u5BB9\u6613\u5F04\u6DF7:!0}},{domain:"nmap.cc",type:"\u7F51\u7AD9"},{domain:"aq.mk",type:"\u7F51\u7AD9"},{domain:"riusksk.me",type:"\u7F51\u7AD9"},{domain:"vuln.cn",type:"\u7F51\u7AD9"},{domain:"evi1cg.me",type:"\u7F51\u7AD9"},{domain:"laolisafe.com",type:"\u7F51\u7AD9"},{domain:"k8gege.org",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"exploit.in",type:"\u7F51\u7AD9"},{domain:"securityaffairs.co",type:"\u7F51\u7AD9"},{domain:"0day5.com",type:"\u7F51\u7AD9"},{domain:"chabug.org",type:"\u7F51\u7AD9"},{domain:"hone.cool",type:"\u7F51\u7AD9"},{domain:"52bug.cn",type:"\u7F51\u7AD9"},{domain:"96.mk",type:"\u7F51\u7AD9"},{domain:"teamssix.com",type:"\u7F51\u7AD9"},{domain:"iosre.com",type:"\u7F51\u7AD9"},{domain:"hackforums.net",type:"\u7F51\u7AD9"},{domain:"0x00sec.org",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"syue.com",type:"\u7F51\u7AD9",\u88ABban_option\u9009\u9879:{\u88AB\u9650\u5236_\u65E0\u6CD5\u641C\u5230:!0}},{domain:"2022\u5E7410\u670821\u65E507:01:42",type:"\u7F51\u7AD9"}]),s=[{domain:"2022\u5E7410\u670823\u65E500:49:34",type:"\u7F51\u7AD9"},{domain:"csdn.net",type:"\u7F51\u7AD9"},{domain:"stackoverflow.com",type:"\u7F51\u7AD9"},{domain:"iteye.com",type:"\u7F51\u7AD9"},{domain:"oschina.net",type:"\u7F51\u7AD9"},{domain:"51cto.com",type:"\u7F51\u7AD9"},{domain:"msdn.microsoft.com",type:"\u7F51\u7AD9"},{domain:"microsoft.com",type:"\u7F51\u7AD9"},{domain:"chinaunix.net",type:"\u7F51\u7AD9"},{domain:"phpchina.com",type:"\u7F51\u7AD9"},{domain:"cocoachina.com",type:"\u7F51\u7AD9"},{domain:"infoq.com",type:"\u7F51\u7AD9"},{domain:"proginn.com",type:"\u7F51\u7AD9"},{domain:"juejin.im",type:"\u7F51\u7AD9"},{domain:"ycombinator.com",type:"\u7F51\u7AD9"}],j={Ban_\u6574\u4E2A\u57DF\u540D________\u76F4\u63A5\u5728\u539Fitem\u4E0A\u64CD\u4F5C:[{domain:"sohu.com",type:"\u7F51\u7AD9"},{domain:"zhihu.com",type:"\u7F51\u7AD9"},{domain:"thehackernews.com",type:"\u7F51\u7AD9"}],Ban_\u90E8\u5206\u5B50Url_________\u9700\u8981\u624B\u52A8_\u6DFB\u52A0\u5230\u8C37\u6B4CCSE:[{domain:"https://hackforums.net/",type:"\u7F51\u7AD9"},{domain:"https://www.t00ls.com/",type:"\u7F51\u7AD9"},{domain:"https://www.freebuf.com/",type:"\u7F51\u7AD9"},{domain:"https://www.freebuf.com/advertise/",type:"\u7F51\u7AD9"},{domain:"https://www.freebuf.com/dis/",type:"\u7F51\u7AD9"},{domain:"https://arstechnica.com/",type:"\u7F51\u7AD9"}].map(function(f){var E=!1;return Object(k.a)(Object(k.a)({},f),E?{domain:f.domain.replace(/^http(s)?:\/\//,"")}:{})})};return M.UBlock_\u6587\u672C\u62E6\u622A\u5668.Google_CSE\u641C\u7D22\u5F15\u64CE_\u5C4F\u853D\u90E8\u5206\u65E0\u6548\u7ED3\u679C____Helper.\u751F\u6210\u6587\u672C(j),oe(ae({\u5FC5\u9009:l,\u53EF\u9009\u53EF\u4E0D\u9009:m,\u7B14\u8BB0\u533A:h,\u4ECE__\u5404\u5927\u5BFC\u822A\u7AD9__\u6536\u96C6:y,\u4E00\u4E9B\u7528\u4E8E\u5F00\u53D1_\u7684\u7AD9\u70B9____\u6709\u65F6\u5019\u7814\u7A76\u539F\u7406\u4F1A\u6709\u7528:s}))}(),x=Object.values(b).flat(1).map(function(l){return"*.".concat(l.domain,"/*")}).join(`
`);console.log("\u5F85\u590D\u5236\u6587\u672C",`
`.concat(x,`
    `))}}]),u}(),Z=e("wQla"),V={full_width:"100%",gap:"0%",google_width:"68%",thunder_scrollbar_width:"72px"},X;(function(u){u.Google="Google",u.Baidu="Baidu"})(X||(X={}));var t=function(){var u=30;return{google:"num=".concat(u),baidu:"rn=".concat(u),num:u}}(),_=!0;function p(u){return encodeURIComponent(u)}var i=function(S){var b=S.route;console.log("props",S,"route",b);var x=w.f.location.query||{},l=x.s,m=Object(A.useState)(l||""),h=Object(D.a)(m,2),y=h[0],s=h[1];Z.a.\u7B2C\u4E09\u79CD\u65B9\u5F0F_useQueryParam("s",function(n){s(n),Y(n)});var j=Object(A.useState)(y),f=Object(D.a)(j,2),E=f[0],B=f[1],$=Object(A.useState)(X.Google),G=Object(D.a)($,2),W=G[0],q=G[1];function Y(n){B(n)}function re(n){return Object(O.a)({},R.a.to_dark,_&&W!==n)}function ne(n){return{onMouseMove:function(){ee(n)}}}function ee(n){W!==n&&q(n)}function se(){var n={cx:"f65f868b7daeb4484",kw:p(y)};Q.go_search(n)}function de(){var n=p(y);window.open("https://neeva.com/search?c=All&page=5&q=".concat(n))}function ue(){var n=p(y);window.open("https://www.hong.ke/search?query=".concat(n,"&page=1"))}function te(){var n=p(y),P={search_request:n,search_type:1,search_in_text:"on",category:-1,platform:-1,price_from:0,price_to:999999999,author_login:"",cve:""},T=Object.entries(P).map(function(ce){var pe=Object(D.a)(ce,2),ye=pe[0],fe=pe[1];return"".concat(ye,"=").concat(fe)}).join("&");window.open("https://0day.today/search?".concat(T))}function K(){var n=p(y);window.open("https://kaifa.baidu.com/searchPage?wd=".concat(n,"&module=SEARCH"))}function le(){var n=p(y);window.open("https://beta.sayhello.so/search?q=".concat(n)),window.open("https://searchcode.com/?q=".concat(n)),window.open("https://you.com/search?q=".concat(n,"&fromSearchBar=true&tbm=youcode"))}function me(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";ie.\u6253\u5370\u67E5\u770B\u8303\u56F4();var P={cx:"036e82f60a77c401d",kw:p(y),gsc_sort:n};Q.go_search(P)}return a.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},a.a.createElement(N.a,{props_\u5E26route:S,prefix:""+E+"\u3010\u6BCF\u9875".concat(t.num,"\u4E2A/1\u6B21\u770B\u5B8C\u3011")}),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(v.a,{type:"primary",onClick:se},"\u77E5\u4E4E+\u8C46\u74E3"),a.a.createElement(v.a,{type:"primary",onClick:function(){de()}},"Neeva"),a.a.createElement(v.a,{type:"primary",onClick:function(){me("date")}},"\uFF08\u6700\u70ED\u4E4E\u65F6\u6548\u6027\u4F18\u5148\uFF09\u7F51\u7EDC\u5B89\u5168\u9635\u5730"),a.a.createElement(v.a,{type:"primary",onClick:function(){me("")}},"\uFF08\u9AD8\u76F8\u5173\u6027\u4F18\u5148\uFF09\u7F51\u7EDC\u5B89\u5168\u9635\u5730"),a.a.createElement(v.a,{type:"primary",onClick:function(){ue()}},"\u56FD\u5185\u7EA2\u5BA2\u641C\u7D22"),a.a.createElement(v.a,{type:"primary",onClick:function(){te()}},"0day\u641C\u7D22"),a.a.createElement(v.a,{type:"primary",onClick:function(){K()}},"\u5F00\u53D1\u8005\u641C\u7D22(\u56FD\u5185)"),a.a.createElement(v.a,{type:"primary",onClick:function(){le()}},"\u5F00\u53D1\u8005\u641C\u7D22(\u6D77\u5916)"),a.a.createElement(o.a,{value:y,onChange:function(P){s(P.target.value)},onPressEnter:function(){Y(y)}}),a.a.createElement(v.a,{onClick:function(){Y(y)}},"\u641C\u7D22")),E&&a.a.createElement("div",{style:{flex:"1 0 0",display:"flex",alignItems:"stretch"}},a.a.createElement("iframe",Object(r.a)({src:"https://www.google.com/search?q=".concat(p(E),"&").concat(t.google),id:"iframe1",height:"100%",className:L()(R.a.IFrame_google,re(X.Google)),frameBorder:"0",style:{width:"calc( ".concat(V.google_width," )")}},ne(X.Google))),a.a.createElement("iframe",Object(r.a)({src:"https://www.baidu.com/s?wd=".concat(p(E),"&").concat(t.baidu),id:"iframe2",height:"100%",className:L()(R.a.IFrame_baidu,re(X.Baidu)),frameBorder:"0",style:{width:"calc( ".concat(V.full_width," - ").concat(V.gap," - ").concat(V.google_width," + ").concat(V.thunder_scrollbar_width," )")}},ne(X.Baidu)))))},C=g.default=i},fHMl:function(d,g,e){"use strict";var r=e("VTBJ"),c=e("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},I=o,v=e("6VBw"),O=function(a,w){return c.createElement(v.a,Object(r.a)(Object(r.a)({},a),{},{ref:w,icon:I}))};O.displayName="EyeInvisibleOutlined";var D=g.a=c.forwardRef(O)},g6Jz:function(d,g,e){d.exports={to_dark:"to_dark___UnVeN",to_bright:"to_bright___cwPqJ",IFrame_google:"IFrame_google___2sS6z",IFrame_baidu:"IFrame_baidu___1FrLw"}},"l+S1":function(d,g,e){"use strict";var r=e("VTBJ"),c=e("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},I=o,v=e("6VBw"),O=function(a,w){return c.createElement(v.a,Object(r.a)(Object(r.a)({},a),{},{ref:w,icon:I}))};O.displayName="SearchOutlined";var D=g.a=c.forwardRef(O)},nNyA:function(d,g,e){"use strict";e.d(g,"a",function(){return N});var r=e("k1fw"),c=e("q1tI"),o=e.n(c),I=e("rid2"),v=e("ysNt"),O=e("qHXO"),D=e.n(O),A=e("WHYC"),a=e("FfOG"),w=e("Qv07"),N=function(R){var F,L=R.props_\u5E26route,z=R.prefix;console.log("props_\u5E26route",L);var H=v.c.get_route_\u5305\u542Btitle\u7B49____\u6CA1\u6D4B\u8BD5_\u662F\u5426\u54CD\u5E94\u5F0F\u7684(L);if(!H)throw new Error("\u4F20\u5165\u7684props\u5E76\u4E0D\u5E26route\uFF01\uFF01\uFF01");function Q(){var M=Object(A.k)();console.log("useLocation\u7684location",M),console.log("umi\u7684history",a.b),console.log("Auto_SetTitle_FromRoute\u7684props",L);var ae=H.routes,oe=ae===void 0?[]:ae,ie=Object(w.a)(oe),Z=ie.breadcrumb,V=D()(Object(r.a)({pathname:M.pathname,breadcrumb:Z},L));return{\u7F3A\u7701\u7684_\u7B2C\u4E8C\u6807\u9898_title:V}}var U=Q(),k=U.\u7F3A\u7701\u7684_\u7B2C\u4E8C\u6807\u9898_title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.b,null,o.a.createElement(I.a,null,o.a.createElement("title",null," ",z?"".concat(z,"  -  "):""," ",(F=H.title)!==null&&F!==void 0?F:k))))}},qHXO:function(d,g,e){"use strict";var r=e("TqRt");Object.defineProperty(g,"__esModule",{value:!0}),g.matchParamsPath=g.getPageTitleInfo=g.default=void 0;var c=r(e("RIqP")),o=r(e("vRGJ")),I=function(a,w,N){if(N){var J=(0,c.default)(N.keys()).find(function(F){return(0,o.default)(F).test(a)});if(J)return N.get(J)}if(w){var R=Object.keys(w).find(function(F){return(0,o.default)(F).test(a)});if(R)return w[R]}return{path:""}};g.matchParamsPath=I;var v=function(a,w){var N=a.pathname,J=N===void 0?"/":N,R=a.breadcrumb,F=a.breadcrumbMap,L=a.formatMessage,z=a.title,H=a.menu,Q=H===void 0?{locale:!1}:H,U=w?"":z||"",k=I(J,R,F);if(!k)return{title:U,id:"",pageName:U};var M=k.name;return Q.locale!==!1&&k.locale&&L&&(M=L({id:k.locale||"",defaultMessage:k.name})),M?w||!z?{title:M,id:k.locale||"",pageName:M}:{title:"".concat(M," - ").concat(z),id:k.locale||"",pageName:M}:{title:U,id:k.locale||"",pageName:U}};g.getPageTitleInfo=v;var O=function(a,w){return v(a,w).title},D=O;g.default=D}}]);