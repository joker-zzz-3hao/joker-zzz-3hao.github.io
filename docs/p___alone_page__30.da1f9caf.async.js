(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{EoIm:function(T,y,e){"use strict";e.r(y);var R=e("5NDa"),E=e("5rEg"),O=e("tJVT"),f=e("k1fw"),h=e("q1tI"),s=e.n(h),C=e("fWQN"),i=e("mtLc"),Z=e("jzzL"),F=e("4sH1"),w=function(){function _(){Object(C.a)(this,_)}return Object(i.a)(_,null,[{key:"yaml_to_json____\u6709\u95EE\u9898",value:function(a){return Z.a.parse(a)}},{key:"json_to_yaml____\u6709\u95EE\u9898",value:function(a){return Z.a.stringify(a)}},{key:"yaml_to_json____\u597D\u4E00\u70B9\u70B9",value:function(a){return F.load(a)}},{key:"json_to_yaml____\u597D\u4E00\u70B9\u70B9",value:function(a){return F.dump(a)}}]),_}(),t=e("fJ35").default,d=e("ysNt"),u=e("FW8I"),x=e("RTXy"),W=e("be4S"),A=e("oBTY"),I=e("T5Tr"),U;(function(_){})(U||(U={}));function D(_,r,a){var n=a!=null?a:{},l=n.color,b=l===void 0?"gray":l,g=n.engine,p=g===void 0?"nfa":g,m=n.loaded,o=m===void 0?!0:m,c=n.scope,v=c===void 0?"any":c,z=n.sensitive,j=z===void 0?!1:z;return{color:b,engine:p,loaded:o,name:_,regex:r.source,scope:v,sensitive:j}}var M=I.a.\u589E\u52A0\u7684\u90E8\u5206,k={rules:[].concat(Object(A.a)(function(){function _(a){return D(a,Object(I.b)(M.\u4E2A\u4EBA[a]))}var r=[{type:"\u4F60\u7684",rule:[_("\u6E90\u7801\u6CC4\u9732"),_("\u5BC6\u7801\u660E\u6587\u4F20\u8F93")]}];return r}()),Object(A.a)(function(){function _(n){var l=n.split(".").pop();if(!l)throw new Error("\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5E94\u8BE5\u4E0D\u5B58\u5728\uFF01");return D(l,Object(I.b)(Object(d.p)(M.HaE,n)))}function r(n){var l=M.HaE[n];return Object.entries(l).map(function(b){var g=Object(O.a)(b,2),p=g[0],m=g[1],o=m;return D(p,Object(I.b)(o))})}var a=[{type:"Fingerprint",rule:Object(A.a)(r("CMS\u6307\u7EB9"))},{type:"Basic Information",rule:Object(A.a)(r("\u57FA\u672C\u4FE1\u606F"))},{type:"Maybe Vulnerability",rule:Object(A.a)(r("\u53EF\u80FD\u6F0F\u6D1E"))},{type:"Sensitive Information",rule:Object(A.a)(r("\u654F\u611F\u4FE1\u606F"))},{type:"Other",rule:Object(A.a)(r("\u5176\u5B83"))}];return a}()))},B=w.json_to_yaml____\u597D\u4E00\u70B9\u70B9(k),P=new W.a("HaE\u914D\u7F6E");function H(_){var r=!1,a=!1,n=_.lastIndexOf("."),l=_.slice(0,n),b=_.slice(n),g=r?"(http(s?)://)":"",p=x.a.escapeRegex(_),m=a?"/":"",o=!1,c=o?"^":"",v=new RegExp("".concat(c).concat(g,"(\\w+\\.)*").concat(p).concat(m));return{reg:v,source_str:v.source}}var N={yaml\u5305:w.json_to_yaml____\u6709\u95EE\u9898(function(){var _=Object(f.a)({},t);return _.rules.forEach(function(r){r.rule.forEach(function(a){var n=new RegExp(a.regex).toString();n=u.a.unescape_regex____\u5230\u6B63\u5219\u5B57\u9762\u91CF_\u6CA1\u90A3\u4E48\u53CC\u91CD\u8F6C\u4E49____\u4ECD\u7136\u6709\u5F88\u5927\u7684\u95EE\u9898\u95EE\u9898\u95EE\u9898\u95EE\u9898\u95EE\u9898(u.a.unescape_regex____\u5230\u6B63\u5219\u5B57\u9762\u91CF_\u6CA1\u90A3\u4E48\u53CC\u91CD\u8F6C\u4E49____\u4ECD\u7136\u6709\u5F88\u5927\u7684\u95EE\u9898\u95EE\u9898\u95EE\u9898\u95EE\u9898\u95EE\u9898(n)),n=n.replaceAll(/\/(.*)\/(.*)/g,"$1"),a.regex=n})}),_}()),js_yaml\u5305:w.json_to_yaml____\u597D\u4E00\u70B9\u70B9(t)},J=function(){var r=`
`,a=Object(h.useState)(P.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A({domain_arr_str:["wappalyzer.com"].concat(["mozilla.org","mozilla.com","mozilla.net","firefox.com","firefox.com.cn","www.baidu.com","ug.baidu.com","hectorstatic.baidu.com","stripe.network","www.google-analytics.com","ajax.googleapis.com","www.googletagmanager.com","client.crisp.chat","js.stripe.com","api.uptimerobot.com"]).join(r),fileUrl_arr_str:function(){var o=[u.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_\u81F3\u5C111\u4E2A____\u7A7A\u767D____\u6BD4\u5982\u7A7A\u683C\u6362\u884C(["chunk-libs.",/\S+/,".js"],{\u95F4\u9694_min:0,\u95F4\u9694_max:0}),u.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_\u81F3\u5C111\u4E2A____\u7A7A\u767D____\u6BD4\u5982\u7A7A\u683C\u6362\u884C(["chunk-elementUI.",/\S+/,".js"],{\u95F4\u9694_min:0,\u95F4\u9694_max:0}),/jquery.min.js/],c=!1,v=o.map(function(z){var j=c?"$":"";return z.source+j});return v.join(r)}()})),n=Object(O.a)(a,2),l=n[0],b=n[1];function g(o,c){var v,z=(v=o==null?void 0:o.split(r).filter(function(S){return S.trim().length>0}).map(function(S){return c(S)}))!==null&&v!==void 0?v:[],j=u.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762(z.map(function(S){return S.reg})),K=j.source;return{arr:z,reg_Arr_in_One:j,reg_source_Arr_in_One:K}}var p=g(l.domain_arr_str,H),m=g(l.fileUrl_arr_str,function(o){return{reg:new RegExp(o),source_str:o}});return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a.TextArea,{autoSize:{minRows:10},value:l.domain_arr_str,onChange:function(c){P.simple_set_and_save("domain_arr_str",c,l,b)}}),s.a.createElement(E.a.TextArea,{autoSize:{minRows:10},value:l.fileUrl_arr_str,onChange:function(c){P.simple_set_and_save("fileUrl_arr_str",c,l,b)}}),s.a.createElement("pre",null,`
\u5305\u542BScope\uFF1A
.*
`),s.a.createElement("pre",null,`
\u6392\u9664Scope\uFF1A
`.concat(p.arr.map(function(o){return o.source_str}).join(`
`),`
`).concat(p.reg_Arr_in_One,`
`),s.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){Object(d.h)(p.reg_source_Arr_in_One)}},p.reg_source_Arr_in_One)),s.a.createElement("pre",null,`
\u6392\u9664\u6587\u4EF6\uFF1A
`.concat(m.arr.map(function(o){return o.source_str}).join(`
`),`
`).concat(m.reg_Arr_in_One,`
`),s.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){Object(d.h)(m.reg_source_Arr_in_One)}},m.reg_source_Arr_in_One)),!1,Object(d.l)(s.a.createElement(s.a.Fragment,null,s.a.createElement("pre",null,`
HaE\u63D2\u4EF6
\u3010\u914D\u7F6E\u3011
    `),s.a.createElement("h2",null,"\u9ED8\u8BA4\u5173\u95ED\uFF1A\u3010\u94F6\u884C\u5361\u53F7\u3011")),B))},L=y.default=J},T5Tr:function(T,y,e){"use strict";e.d(y,"b",function(){return Z}),e.d(y,"a",function(){return F});var R=e("k1fw"),E=e("tJVT"),O=e("oBTY"),f=e("FW8I");function h(t,d){return Array.isArray(t)?d.push.apply(d,Object(O.a)(t)):Object.entries(t).forEach(function(u){var x=Object(E.a)(u,2),W=x[0],A=x[1];h(A,d)}),d}function s(t){return f.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762([f.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_0\u4E2A\u548C\u4EE5\u4E0A____\u975E\u7A7A\u767D____\u6BD4\u5982\u5B57\u6BCD\u6570\u5B57\u7B26\u53F7(["",t,""])])}function C(t){return f.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762([f.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_0\u4E2A\u548C\u4EE5\u4E0A____\u975E\u7A7A\u767D____\u6BD4\u5982\u5B57\u6BCD\u6570\u5B57\u7B26\u53F7(["",t])])}function i(t){return f.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762([f.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_0\u4E2A\u548C\u4EE5\u4E0A____\u975E\u7A7A\u767D____\u6BD4\u5982\u5B57\u6BCD\u6570\u5B57\u7B26\u53F7([t,""])])}function Z(t){var d=h(t,[]),u=f.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762(d),x=!1;return x&&(u=s(u)),u}var F={\u53BB\u9664\u7684\u90E8\u5206:[],\u589E\u52A0\u7684\u90E8\u5206:{\u4E2A\u4EBA:Object(R.a)({},function(){var t={CMS:["Jenkins","Nginx"],\u6E90\u7801\u6CC4\u9732:["webpack"],Password\u76F8\u5173:["PasswordAuthentication","Authentication","Auth"],\u5BC6\u7801\u660E\u6587\u4F20\u8F93:[/(.{0,20}admin123.{0,20})/gim]};return t}()),HaE:Object(R.a)({},function(){var t={CMS\u6307\u7EB9:{Shiro:[/(=deleteMe|rememberMe=)/],JWT:[/(eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9._-]{10,}|eyJ[A-Za-z0-9_\/+-]{10,}\.[A-Za-z0-9._\/+-]{10,})/],SwaggerUI:[/((swagger-ui.html)|(\"swagger\":)|(Swagger UI)|(swaggerUi))/],UEditor:[/(ueditor\.(config|all)\.js)/]},\u57FA\u672C\u4FE1\u606F:{\u90AE\u7BB1:[/(([a-z0-9][_|\.])*[a-z0-9]+@([a-z0-9][-|_|\.])*[a-z0-9]+\.((?!js|css|jpg|jpeg|png|ico)[a-z]{2,}))/],\u8EAB\u4EFD\u8BC1_\u4E2D\u56FD:[/[^0-9]((\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)))[^0-9]/],\u624B\u673A\u53F7\u7801_\u4E2D\u56FD:[/[^\w]((?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8})[^\w]/],\u5185\u7F51IP:[s("192.168."),s(/[^0-9]((127\.0\.0\.1)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3}))/)],Mac\u5730\u5740:[/(^([a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5})|[^a-zA-Z0-9]([a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}))/],\u94F6\u884C\u5361\u53F7_\u4E2D\u56FD____\u4E0D\u8FC7\u592A\u8FC7\u4E8E\u5BBD\u6CDB\u4E86_\u4E00\u822C\u4E0D\u9009:[s(/[^0-9]([1-9]\d{12,18})[^0-9]/)]},\u53EF\u80FD\u6F0F\u6D1E:{RCE\u53C2\u6570:[i("ip="),i(/((cmd=)|(exec=)|(command=)|(execute=)|(ping=)|(query=)|(jump=)|(code=)|(reg=)|(do=)|(func=)|(arg=)|(option=)|(load=)|(process=)|(step=)|(read=)|(function=)|(feature=)|(exe=)|(module=)|(payload=)|(run=)|(daemon=)|(upload=)|(dir=)|(download=)|(log=)|(ip=)|(cli=))/)],Java\u53CD\u5E8F\u5217\u5316:[/(javax\.faces\.ViewState)/],Debug\u903B\u8F91\u53C2\u6570:[i(/((access=)|(adm=)|(admin=)|(alter=)|(cfg=)|(clone=)|(config=)|(create=)|(dbg=)|(debug=)|(delete=)|(disable=)|(edit=)|(enable=)|(exec=)|(execute=)|(grant=)|(load=)|(make=)|(modify=)|(rename=)|(reset=)|(root=)|(shell=)|(test=)|(toggl=))/)],Url\u4F5C\u4E3A\u53D8\u91CF\u503C:[C(/(=(https?:\/\/.*|https?%3(a|A)%2(f|F)%2(f|F).*))/)],UploadForm_\u8868\u5355:[/(type=\"file\")/],Dos\u53C2\u6570:[i(/((size=)|(page=)|(num=))/)],Jsonp_\u8FD4\u56DE:[/(^(\w.*?)\()/]},\u654F\u611F\u4FE1\u606F:{OSS_key\u7B49\u76F8\u5173:[/([A|a]ccess[K|k]ey[I|i][d|D]|[A|a]ccess[K|k]ey[S|s]ecret)/],Amazon_AWS:{URL:[/(((([a-zA-Z0-9._-]+\.s3|s3)(\.|\-)+[a-zA-Z0-9._-]+|[a-zA-Z0-9._-]+\.s3|s3)\.amazonaws\.com)|(s3:\/\/[a-zA-Z0-9-\.\_]+)|(s3.console.aws.amazon.com\/s3\/buckets\/[a-zA-Z0-9-\.\_]+)|(amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(ec2-[0-9-]+.cd-[a-z0-9-]+.compute.amazonaws.com)|(us[_-]?east[_-]?1[_-]?elb[_-]?amazonaws[_-]?com))/],AccessKey_ID:[/[^0-9]((aws(.{0,20})?['\"][0-9a-zA-Z\/+]{40}['\"])|((A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[a-zA-Z0-9]{16}))[^0-9]/].concat(),Region:[/((us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\d)/]},SSH:{PrivateKey_\u5BC6\u94A5:[/([-]+BEGIN [^\s]+ PRIVATE KEY[-])/]},Windows_File_Dir_\u8DEF\u5F84:[/[^\w](([a-zA-Z]:\\(?:\w+\\?)*)|([a-zA-Z]:\\(?:\w+\\)*\w+\.\w+))/],Password\u5B57\u6BB5:["pwd","pass","passwd","password",/((|'|")([p](ass|wd|asswd|assword))(|'|")(:|=)( |)('|")(.*?)('|")(|,))/],Username\u5B57\u6BB5:["uname","username",s(/((|'|")([u](ser|name|ame|sername))(|'|")(:|=)( |)('|")(.*?)('|")(|,))/)],WeCom_Key:[/([c|C]or[p|P]id|[c|C]orp[s|S]ecret)/],JDBC_Connection:[/(jdbc:[a-z:]+:\/\/[a-z0-9\.\-_:;=/@?,&]+)/],Auth_Header:[/((basic [a-z0-9=:_\+\/-]{5,100})|(bearer [a-z0-9_.=:_\+\/-]{5,100}))/],Github:{Access_Token:[/([a-z0-9_-]*:[a-z0-9_\-]+@github\.com*)/]},Microsoft_Webhook:{Teams:[/(https:\/\/outlook\.office\.com\/webhook\/[a-z0-9@-]+\/IncomingWebhook\/[a-z0-9-]+\/[a-z0-9-]+)/]},Zoho_Webhook:[/(https:\/\/creator\.zoho\.com\/api\/[a-z0-9/_.-]+\?authtoken=[a-z0-9]+)/],SonarQube_Token:[/(sonar.{0,50}(?:"|\'|`)?[0-9a-f]{40}(?:"|\'|`)?)/]},\u5176\u5B83:{LinkFinder_\u8DEF\u5F84\u5BFB\u627E:[/(?:"|')(((?:[a-zA-Z]{1,10}:\/\/|\/\/)[^"'\/]{1,}\.[a-zA-Z]{2,}[^"']{0,})|((?:\/|\.\.\/|\.\/)[^"'><,;|*()(%%$^\/\\\[\]][^"'><,;|()]{1,})|([a-zA-Z0-9_\-\/]{1,}\/[a-zA-Z0-9_\-\/]{1,}\.(?:[a-zA-Z]{1,4}|action)(?:[\?|#][^"|']{0,}|))|([a-zA-Z0-9_\-\/]{1,}\/[a-zA-Z0-9_\-/]{3,}(?:[\?|#][^"|']{0,}|))|([a-zA-Z0-9_\-]{1,}\.(?:php|asp|aspx|jsp|json|action|html|js|txt|xml)(?:[\?|#][^"|']{0,}|)))(?:"|')/],SourceMap_\u6E90\u7801:["sourceMappingURL=","js.map",/(\.js\.map)/],Html\u6CE8\u91CA:[i(/(<!--[\s\S]*?-->)/)],JS\u6CE8\u91CA:[i("//"),i("/*"),C("*/"),i("/**")],ScriptCreate_\u8BED\u53E5:[i(/(createElement\(\"script\"\))/)]}};return t}())}};function w(){var t=f.c.combine_ManyRegexpOrStr__\u5C06\u591A\u4E2A\u539F\u6709\u6B63\u5219\u5408\u5E76\u6210\u4E00\u4E2A__\u6CE8\u610F\u4F1A\u5148\u64E6\u9664\u539F\u6709\u6B63\u5219flag____\u53CD\u5411\u6B63\u5219\u7EC4\u6C38\u8FDC\u4F1A\u653E\u6700\u524D\u9762([/(<!--[\s\S]*?-->)/])}w()},fJ35:function(T,y,e){"use strict";e.r(y),y.default={rules:[{rule:[{color:"green",engine:"dfa",loaded:!1,name:"Shiro",regex:"(=deleteMe|rememberMe=)",scope:"any",sensitive:!0},{color:"green",engine:"dfa",loaded:!1,name:"JSON Web Token",regex:"(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9._-]{10,}|eyJ[A-Za-z0-9_\\/+-]{10,}\\.[A-Za-z0-9._\\/+-]{10,})",scope:"any",sensitive:!0},{color:"green",engine:"dfa",loaded:!1,name:"Swagger UI",regex:'((swagger-ui.html)|(\\"swagger\\":)|(Swagger UI)|(swaggerUi))',scope:"response body",sensitive:!0},{color:"green",engine:"dfa",loaded:!1,name:"Ueditor",regex:"(ueditor\\.(config|all)\\.js)",scope:"response body",sensitive:!0}],type:"Fingerprint"},{rule:[{color:"yellow",engine:"nfa",loaded:!1,name:"Email",regex:"(([a-z0-9][_|\\.])*[a-z0-9]+@([a-z0-9][-|_|\\.])*[a-z0-9]+\\.((?!js|css|jpg|jpeg|png|ico)[a-z]{2,}))",scope:"response",sensitive:!1},{color:"orange",engine:"nfa",loaded:!1,name:"Chinese IDCard",regex:"[^0-9]((\\d{8}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}$)|(\\d{6}(18|19|20)\\d{2}(0[1-9]|10|11|12)([0-2]\\d|30|31)\\d{3}(\\d|X|x)))[^0-9]",scope:"response body",sensitive:!0},{color:"orange",engine:"nfa",loaded:!1,name:"Chinese Mobile Number",regex:"[^\\w]((?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[189]))\\d{8})[^\\w]",scope:"response body",sensitive:!0},{color:"cyan",engine:"nfa",loaded:!1,name:"Internal IP Address",regex:"[^0-9]((127\\.0\\.0\\.1)|(10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(172\\.((1[6-9])|(2\\d)|(3[01]))\\.\\d{1,3}\\.\\d{1,3})|(192\\.168\\.\\d{1,3}\\.\\d{1,3}))",scope:"response",sensitive:!0},{color:"green",engine:"nfa",loaded:!1,name:"MAC Address",regex:"(^([a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5})|[^a-zA-Z0-9]([a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}))",scope:"response",sensitive:!0},{color:"orange",engine:"nfa",loaded:!1,name:"Chinese Bank Card ID",regex:"[^0-9]([1-9]\\d{12,18})[^0-9]",scope:"response",sensitive:!0}],type:"Basic Information"},{rule:[{color:"cyan",engine:"dfa",loaded:!1,name:"RCE Paramters",regex:"((cmd=)|(exec=)|(command=)|(execute=)|(ping=)|(query=)|(jump=)|(code=)|(reg=)|(do=)|(func=)|(arg=)|(option=)|(load=)|(process=)|(step=)|(read=)|(function=)|(feature=)|(exe=)|(module=)|(payload=)|(run=)|(daemon=)|(upload=)|(dir=)|(download=)|(log=)|(ip=)|(cli=))",scope:"request",sensitive:!0},{color:"yellow",engine:"dfa",loaded:!1,name:"Java Deserialization",regex:"(javax\\.faces\\.ViewState)",scope:"response",sensitive:!0},{color:"cyan",engine:"dfa",loaded:!1,name:"Debug Logic Parameters",regex:"((access=)|(adm=)|(admin=)|(alter=)|(cfg=)|(clone=)|(config=)|(create=)|(dbg=)|(debug=)|(delete=)|(disable=)|(edit=)|(enable=)|(exec=)|(execute=)|(grant=)|(load=)|(make=)|(modify=)|(rename=)|(reset=)|(root=)|(shell=)|(test=)|(toggl=))",scope:"request",sensitive:!0},{color:"cyan",engine:"nfa",loaded:!1,name:"URL As A Value",regex:"(=(https?://.*|https?%3(a|A)%2(f|F)%2(f|F).*))",scope:"request",sensitive:!0},{color:"yellow",engine:"dfa",loaded:!1,name:"Upload Form",regex:'(type=\\"file\\")',scope:"response body",sensitive:!0},{color:"cyan",engine:"nfa",loaded:!1,name:"DoS Paramters",regex:"((size=)|(page=)|(num=))",scope:"request",sensitive:!1},{color:"yellow",engine:"nfa",loaded:!1,name:"JSONP Response",regex:"(^(\\w.*?)\\()",scope:"response body",sensitive:!1}],type:"Maybe Vulnerability"},{rule:[{color:"yellow",engine:"dfa",loaded:!1,name:"OSS",regex:"([A|a]ccess[K|k]ey[I|i][d|D]|[A|a]ccess[K|k]ey[S|s]ecret)",scope:"any",sensitive:!0},{color:"green",engine:"nfa",loaded:!1,name:"Amazon AWS URL",regex:"(((([a-zA-Z0-9._-]+\\.s3|s3)(\\.|\\-)+[a-zA-Z0-9._-]+|[a-zA-Z0-9._-]+\\.s3|s3)\\.amazonaws\\.com)|(s3:\\/\\/[a-zA-Z0-9-\\.\\_]+)|(s3.console.aws.amazon.com\\/s3\\/buckets\\/[a-zA-Z0-9-\\.\\_]+)|(amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(ec2-[0-9-]+.cd-[a-z0-9-]+.compute.amazonaws.com)|(us[_-]?east[_-]?1[_-]?elb[_-]?amazonaws[_-]?com))",scope:"response body",sensitive:!0},{color:"green",engine:"nfa",loaded:!1,name:"Amazon AWS AccessKey ID",scope:"response body",sensitive:!0},{color:"green",engine:"nfa",loaded:!1,name:"Amazon AWS Region",regex:"((us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\\d)",scope:"response body",sensitive:!0},{color:"blue",engine:"nfa",loaded:!1,name:"SSH Private Key",regex:"([-]+BEGIN [^\\s]+ PRIVATE KEY[-])",scope:"response body",sensitive:!0},{color:"green",engine:"nfa",loaded:!1,name:"Windows File/Dir Path",regex:"[^\\w](([a-zA-Z]:\\\\(?:\\w+\\\\?)*)|([a-zA-Z]:\\\\(?:\\w+\\\\)*\\w+\\.\\w+))",scope:"response",sensitive:!0},{color:"yellow",engine:"nfa",loaded:!1,name:"Password Field",regex:`((|'|")([p](ass|wd|asswd|assword))(|'|")(:|=)( |)('|")(.*?)('|")(|,))`,scope:"response body",sensitive:!1},{color:"green",engine:"nfa",loaded:!1,name:"Username Field",regex:`((|'|")([u](ser|name|ame|sername))(|'|")(:|=)( |)('|")(.*?)('|")(|,))`,scope:"response body",sensitive:!1},{color:"green",engine:"dfa",loaded:!1,name:"WeCom Key",regex:"([c|C]or[p|P]id|[c|C]orp[s|S]ecret)",scope:"response body",sensitive:!0},{color:"yellow",engine:"nfa",loaded:!1,name:"JDBC Connection",regex:"(jdbc:[a-z:]+://[a-z0-9\\.\\-_:;=/@?,&]+)",scope:"any",sensitive:!1},{color:"yellow",engine:"nfa",loaded:!1,name:"Authorization Header",regex:"((basic [a-z0-9=:_\\+\\/-]{5,100})|(bearer [a-z0-9_.=:_\\+\\/-]{5,100}))",scope:"response body",sensitive:!1},{color:"green",engine:"nfa",loaded:!1,name:"Github Access Token",regex:"([a-z0-9_-]*:[a-z0-9_\\-]+@github\\.com*)",scope:"response body",sensitive:!1},{color:"cyan",engine:"nfa",loaded:!1,name:"Microsoft Teams Webhook",regex:"(https://outlook\\.office\\.com/webhook/[a-z0-9@-]+/IncomingWebhook/[a-z0-9-]+/[a-z0-9-]+)",scope:"response body",sensitive:!1},{color:"cyan",engine:"nfa",loaded:!1,name:"Zoho Webhook",regex:"(https://creator\\.zoho\\.com/api/[a-z0-9/_.-]+\\?authtoken=[a-z0-9]+)",scope:"response body",sensitive:!1},{color:"cyan",engine:"nfa",loaded:!1,name:"Sonarqube Token",regex:"(sonar.{0,50}(?:\"|\\'|`)?[0-9a-f]{40}(?:\"|\\'|`)?)",scope:"response body",sensitive:!1}],type:"Sensitive Information"},{rule:[{color:"gray",engine:"nfa",loaded:!0,name:"New Name",regex:"(New Regex)",scope:"any",sensitive:!1}],type:"Ycw"},{rule:[{color:"gray",engine:"nfa",loaded:!1,name:"Linkfinder",regex:`(?:"|')(((?:[a-zA-Z]{1,10}://|//)[^"'/]{1,}\\.[a-zA-Z]{2,}[^"']{0,})|((?:/|\\.\\./|\\./)[^"'><,;|*()(%%$^/\\\\\\[\\]][^"'><,;|()]{1,})|([a-zA-Z0-9_\\-/]{1,}/[a-zA-Z0-9_\\-/]{1,}\\.(?:[a-zA-Z]{1,4}|action)(?:[\\?|#][^"|']{0,}|))|([a-zA-Z0-9_\\-/]{1,}/[a-zA-Z0-9_\\-/]{3,}(?:[\\?|#][^"|']{0,}|))|([a-zA-Z0-9_\\-]{1,}\\.(?:php|asp|aspx|jsp|json|action|html|js|txt|xml)(?:[\\?|#][^"|']{0,}|)))(?:"|')`,scope:"response body",sensitive:!0},{color:"pink",engine:"dfa",loaded:!1,name:"Source Map",regex:"(\\.js\\.map)",scope:"response body",sensitive:!0},{color:"magenta",engine:"nfa",loaded:!1,name:"HTML Notes",regex:"(<!--[\\s\\S]*?-->)",scope:"response body",sensitive:!0},{color:"green",engine:"dfa",loaded:!1,name:"Create Script",regex:'(createElement\\(\\"script\\"\\))',scope:"response body",sensitive:!0}],type:"Other"}]}}}]);