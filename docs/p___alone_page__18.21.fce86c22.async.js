(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5949],{647997:function(i,F,E){"use strict";E.r(F),E.d(F,{_:function(){return c}});var p=E(370187),_=E(614545),D=E(686137),C=E(338324),u=E(556692),m=E(422397),o=E(664373),e=function(){function t(){(0,D.Z)(this,t)}return(0,C.Z)(t,null,[{key:"_\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR",value:function(n){var r=(0,o.qO)(n.join(" OR ")),a=n.join(`
`),s=`
`.concat(a,`

`).concat(r,`
    `).trim();return r}},{key:"_AND",value:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(0,o.qO)(r.join(" AND "))}},{key:"_NOT",value:function(n){return(0,o.qO)("NOT ".concat(n))}},{key:"query_url\u5730\u5740",value:function(n){var r=n.replaceAll("/","\\/"),a="url:(*".concat(r,"*)");return(0,o.qO)([a].join("OR"))}},{key:"query_body\u8FD4\u56DE\u4F53",value:function(n){var r=n.replaceAll("/","\\/"),a='rsp_body:("*'.concat(r,'*")'),s='rsp_body:("'.concat(r,'")');return(0,o.qO)([a,s].join(" OR "))}}]),t}(),d=[e.query_body\u8FD4\u56DE\u4F53("/build/ecodesdk/static/js/lib.js"),e.query_url\u5730\u5740("/build/ecodesdk"),e.query_url\u5730\u5740("/build/passportweb")],y=[e.query_url\u5730\u5740("/services/BlogService"),e.query_body\u8FD4\u56DE\u4F53("/services/BlogService")],B=e._AND(e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR([e.query_url\u5730\u5740("nacos"),e.query_body\u8FD4\u56DE\u4F53("nacos")]),e._NOT(e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR([e.query_url\u5730\u5740("img/nacos.png"),e.query_url\u5730\u5740("nacos/v1/console/server/state"),e.query_url\u5730\u5740("ybbi.crbeverage.com/bi")]))),A=e._AND(e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR([e.query_url\u5730\u5740("landray")]),e._NOT(e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR([e.query_url\u5730\u5740("4gfly.999.com.cn"),e.query_url\u5730\u5740("bamp-js.999.com.cn"),e.query_url\u5730\u5740("fly.999.com.cn"),e.query_url\u5730\u5740("ns.999ninestar.com")]))),c=function(){return u.createElement(u.Fragment,null,u.createElement("h1",null,"Excel\u5BFC\u51FA\u548C\u64CD\u4F5C\u6280\u5DE7"),u.createElement(_.Z,{defaultActiveKey:[],onChange:function(){}},u.createElement(_.Z.Panel,{header:u.createElement("h4",null,"\u5220\u9664\u5DF2\u770B\u5B8C\u7684Url\uFF0C\u540C\u65F6\u66F4\u65B0\u3010\u6D41\u91CF\u6761\u76EE\u3011\u8868"),key:"1"},u.createElement("h1",null,"\u516C\u5F0F"),function(){var l="Sheet2!$A:$A",n="I10",r="=IF(OR(ISNUMBER(SEARCH(IF(".concat(l,'<>"",').concat(l,',"\u4E0D\u5B58\u5728\u7684\u4E00\u4E2A\u503C"),').concat(n,'))),"\u6709","\u6CA1\u6709")');return(0,m.TableHelper_QuickCopy_Fn____Cp)(r)}())),u.createElement("h1",null,"\u6DF1\u4FE1\u670DSIP"),u.createElement(_.Z,{defaultActiveKey:[],onChange:function(){}},u.createElement(_.Z.Panel,{header:u.createElement("h4",null,"\u5B9E\u6218"),key:"1"},u.createElement("h1",null,"EC10\u6307\u7EB9"),u.createElement("pre",null,e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR(d)),u.createElement("h1",null,"\u6CDB\u5FAESQL\u6CE8\u5165\u6307\u7EB9"),u.createElement("pre",null,e._\u591A\u4E2A\u72EC\u7ACB\u6761\u4EF6_\u62FC\u63A5OR(y)),u.createElement("h1",null,"Nacos\u6307\u7EB9"),u.createElement("pre",null,B),u.createElement("h1",null,"\u84DD\u51CC\u6307\u7EB9"),u.createElement("pre",null,A)),u.createElement(_.Z.Panel,{header:u.createElement("h4",null,"\u5E38\u89C4\u8BED\u53E5\u5C55\u793A\uFF08\u5DF2\u5E2E\u52A9\u6784\u5EFA\u4E86\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u9000\u5C45\u5386\u53F2\u4E8C\u7EBF\u4E86\uFF09"),key:"2"},u.createElement("h1",null,"Bug\u6D4B\u8BD5\u7ED3\u679C\u2014\u2014\u6D4B\u8BD5\u7528\u4F8B\u2014\u2014\u3010url\u7BC7\u3011"),u.createElement("pre",null,`
\u6700\u8FD17\u5929
url:(*"nacos"*)                         \u2014\u2014\u2014\u20142606416842\u6761    \u5341\u4F4D\u6570
url:("*nacos*")                         \u2014\u2014\u2014\u20140\u6761
url:("nacos")                           \u2014\u2014\u2014\u20140\u6761
url:(*nacos*)                           \u2014\u2014\u2014\u201412821664\u6761    \uFF08\u8FD9\u4E2A\u62BD\u67E5\u4E86\u4E00\u4E0B\uFF0C\u90FD\u662F\u5BF9\u7684\u3002\uFF09

        `),u.createElement("h1",null,"Bug\u6D4B\u8BD5\u7ED3\u679C\u2014\u2014\u6D4B\u8BD5\u7528\u4F8B\u2014\u2014\u3010body\u7BC7\u3011"),u.createElement("pre",null,`
\u6700\u8FD17\u5929\uFF0C\u5E26\u7A7A\u683C
rsp_body:(*"Powered by \u5E06\u8F6F"*)            \u2014\u2014\u2014\u20142562332008\u6761    \u5341\u4F4D\u6570
rsp_body:("*Powered by \u5E06\u8F6F*")            \u2014\u2014\u2014\u2014173\u6761
rsp_body:("Powered by \u5E06\u8F6F")              \u2014\u2014\u2014\u2014173\u6761
rsp_body:(*Powered by \u5E06\u8F6F*)              \u2014\u2014\u2014\u201415724498\u6761

\u6700\u8FD17\u5929\uFF0C\u65E0\u7A7A\u683C
rsp_body:*"nacos"*                      \u2014\u2014\u2014\u201420351576243\u6761    \u5341\u4E00\u4F4D\u6570
rsp_body:"*nacos*"                      \u2014\u2014\u2014\u201475984\u6761
rsp_body:"nacos"                        \u2014\u2014\u2014\u201475984\u6761
rsp_body:*nacos*                        \u2014\u2014\u2014\u201480153\u6761


\u6700\u8FD17\u5929\uFF0C\u65E0\u7A7A\u683C\uFF0C\u8F6C\u4E49\u6D4B\u8BD5
rsp_body:"\\/js\\/"                     \u2014\u2014\u2014\u201450773849\u6761     \u62BD\u67E5\u4E86\u51E0\u6761\uFF0C\u5168\u90E8\u90FD\u3010\u5B8C\u7F8E\u5339\u914D\u3011
rsp_body:"/js/"                         \u2014\u2014\u2014\u20142268565\u6761      \u62BD\u67E5\u4E86\u51E0\u6761\uFF0C\u597D\u51E0\u4E2A\u90FD\u6CA1\u5339\u914D\u4E2D\u3010/js/\u3011\u53EF\u80FD\u53EA\u5339\u914D\u3010js\u3011\u3002  \u6570\u76EE\u66F4\u5C11

        `),u.createElement("h1",null,"Url\uFF0C\u652F\u63012\u79CD\uFF0C\u4E0D\u652F\u6301\u3010uri\u3011\u3002\u8FD8\u5C5E\u4E8E\u6B63\u5E38"),u.createElement("pre",null,`
domain_url:*nacos*
url:*nacos*

domain_url:*\\/decision\\/*
url:*\\/decision\\/*
        `),u.createElement("h1",null,"Body\uFF0C\u8FD9\u91CC\u8BED\u6CD5\u5F02\u5E38\uFF0C\u7565\u6709Bug"),u.createElement("pre",null,`
// \u3010\u5B8C\u7F8E\u547D\u4E2D\u3011\uFF1BBug\u6765\u4E86\uFF1F
rsp_body:("*Powered by \u5E06\u8F6F*")
// \u3010\u547D\u4E2D\u3011\uFF0C\u548C\u4E0A\u9762\u8FD9\u4E2A\uFF0C\u7ED3\u679C\u4E00\u6A21\u4E00\u6837\uFF1BBug\u6765\u4E86\uFF1F
rsp_body:("Powered by \u5E06\u8F6F")


\u53C8\u6D4B\u8BD5\u4E86\uFF0C\u4EE5\u4E0B\u4E24\u4E2A\uFF0C\u7ED3\u679C\u6570\u91CF\u4E00\u6A21\u4E00\u6837
rsp_body:("seeyon")
rsp_body:("*seeyon*")

\u56E0\u4E3ABug\u800C\u4E0D\u652F\u6301\u7684\uFF0C\u672C\u8BE5\u662F\u6B63\u786E\u7684\u8BED\u6CD5\u3010  rsp_body:(*"seeyon"*)  \u3011    \uFF08\u641C\u51FA\u6765\uFF0C\u662F\u5168\u91CF\u7684\uFF1B\u7B49\u4E8E\u6CA1\u52A0\u9650\u5236\u6761\u4EF6\uFF09


        `),u.createElement("h1",null,"\u793A\u4F8B\u8BED\u6CD5\uFF1ANacos \uFF08\u5DF2\u88AB\u6DD8\u6C70\uFF09"),u.createElement("pre",null,`
rsp_body:*nacos* OR responseBody:*nacos*
OR  (
  domain_url:"*nacos*"
  AND   -domain_url:"*img/nacos.png*"
  AND   -domain_url:"*nacos/v1/console/server/state*"
)
OR  (
  url:"*nacos*"
  AND   -url:"*img/nacos.png*"
  AND   -url:"*nacos/v1/console/server/state*"
)
OR  (
  uri:"*nacos*"
  AND   -uri:"*img/nacos.png*"
  AND   -uri:"*nacos/v1/console/server/state*"
)

        `),u.createElement("h1",null,"\u793A\u4F8B\u8BED\u6CD5\uFF1A\u84DD\u51CC \uFF08\u5DF2\u88AB\u6DD8\u6C70\uFF09"),u.createElement("pre",null,`
url:(*landray*)
AND (NOT url:(*4gfly.999.com.cn*) )
AND (NOT url:(*bamp-js.999.com.cn*) )
AND (NOT url:(*fly.999.com.cn*) )
AND (NOT url:(*ns.999ninestar.com*) )
        `),u.createElement("pre",null,""))),u.createElement("h1",null,"\u5929\u773C"),u.createElement(_.Z,{defaultActiveKey:[],onChange:function(){}},u.createElement(_.Z.Panel,{header:u.createElement("h4",null,"\u5E38\u89C4\u8BED\u53E5\u5C55\u793A"),key:"1"},u.createElement("pre",null,`
\u67E5\u627EURL
(
uri:(*nacos*)
OR   uri:(*seeyon*)
OR   uri:(*ufida_nc*)
)
AND -status:("Forbidden")

\u67E5\u627E\u4E3B\u673A\u540D
host:(*nacos*) AND (  NOT sip:(10.*)  )

`))))};F.default=c}}]);
