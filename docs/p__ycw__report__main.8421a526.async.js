(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4963,8327],{9083:function(Z){Z.exports={myProTable:"myProTable___1OKUQ",myProTable_recordList:"myProTable_recordList___8qLOa",myProTable_modalForm:"myProTable_modalForm___tQbs8"}},330714:function(Z,M,e){"use strict";e.d(M,{Z:function(){return c},w:function(){return l}});var G=e(242048),O=e(583206),J=e(14643),F=e(492909),n=e(613753),D=e(748429),U=e(126780),a=e(986444),B=e(203182),g=e(677111),A=e(949194),E=e(194657),t=e(667294),x=e(556377),y=e(149101),C=e(713931),S=u=>{var m=u.modalVisible,o=u.type,h=u.onCancel;return t.createElement(a.Z,{destroyOnClose:!0,title:{create:"\u65B0\u5EFA",update:"\u7F16\u8F91"}[o],width:"50%",visible:m,onCancel:()=>h(),footer:null},u.children)},d=S,s=e(9083),r=e.n(s);function l(u){return{data:u,success:!0,total:u.length}}var i=u=>{var m=u.handleList,o=u.handleAdd,h=u.handleUpdate,I=u.handleRemove,V=u.columns,v=u.hideFieldsSearch,R=u.addReloadFn_toMap,K=u.hidePagination,Y=u.hideToolbar,j=u.toolbar_showCreate,q=u.headerTitle,X=u.hideDefaultRowAction,P=X===void 0?!0:X,oe=u.rowSelection,re=u.expandable,se=u.rowKey,Ee=u.actionRef,z=u.toolBarRender,de=(0,t.useState)("create"),ee=(0,E.Z)(de,2),k=ee[0],ie=ee[1],Fe=(0,t.useState)(!1),ue=(0,E.Z)(Fe,2),ce=ue[0],w=ue[1],me=(0,t.useState)({}),te=(0,E.Z)(me,2),_e=te[0],$=te[1],Be=(0,t.useState)(),ne=(0,E.Z)(Be,2),b=ne[0],ae=ne[1],f=(0,t.useRef)();f=Ee||f,(0,t.useEffect)(()=>{R==null||R(()=>{var p,_;(p=f)===null||p===void 0||(_=p.current)===null||_===void 0||_.reload()})},[]);var N=[...V,...P===!0?[]:[{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",width:"140px",render:(p,_)=>{var L=P.hideConf,T=P.hideDescription,W=P.hideRemove,le=W===void 0?!0:W;return t.createElement(t.Fragment,null,!L&&t.createElement("a",{onClick:()=>{ie("update"),$(_),w(!0)}},"\u914D\u7F6E"),!T&&t.createElement(t.Fragment,null,t.createElement(A.Z,{type:"vertical"}),t.createElement("a",{onClick:()=>{ae(_)}},"\u8BE6\u60C5")),!le&&t.createElement(t.Fragment,null,t.createElement(A.Z,{type:"vertical"}),t.createElement("a",{onClick:(0,B.Z)(function*(){a.Z.confirm({title:"\u8B66\u544A",content:"\u8BF7\u95EE\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6761\u76EE\u5417\uFF1F",onOk(){return(0,B.Z)(function*(){var H,Q;yield I==null?void 0:I(_),(H=f.current)===null||H===void 0||(Q=H.reloadAndRest)===null||Q===void 0||Q.call(H)})()}})})},"\u5220\u9664")))}}]];return t.createElement(t.Fragment,null,t.createElement(x.ZP,{tableClassName:r().myProTable_recordList,headerTitle:q||"\u67E5\u8BE2\u8868\u683C",actionRef:f,rowKey:se||"id",pagination:K?!1:void 0,search:v?!1:{labelWidth:120},toolBarRender:Y?!1:()=>[...(z==null?void 0:z())||[],...j?[t.createElement(D.Z,{type:"primary",onClick:()=>{w(!0)}},t.createElement(y.Z,null)," \u65B0\u5EFA")]:[]],request:m,columns:N,rowSelection:oe,expandable:re}),t.createElement(d,{modalVisible:ce,type:k,onCancel:()=>{w(!1);var p=k==="create";p||$({})}},t.createElement(x.ZP,{className:r().myProTable_modalForm,onSubmit:function(){var p=(0,B.Z)(function*(_){var L,T=k==="create",W=F.default.loading(T?"\u6B63\u5728\u6DFB\u52A0":"\u6B63\u5728\u7F16\u8F91");try{T?L=yield o==null?void 0:o(_):L=yield h==null?void 0:h(_),W(),F.default.success(T?"\u6DFB\u52A0\u6210\u529F":"\u7F16\u8F91\u6210\u529F"),L&&(w(!1),f.current&&f.current.reload(),T||$({}))}catch(le){W(),F.default.error("".concat(T?"\u6DFB\u52A0":"\u7F16\u8F91","\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"))}});return function(_){return p.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:_e||{}},columns:N})),t.createElement(O.Z,{width:1e3,visible:!!b,onClose:()=>{ae(void 0)},closable:!1},b&&t.createElement(C.Z,{column:2,title:b.name||"\u6807\u9898",request:function(){var p=(0,B.Z)(function*(_){return{data:b||{}}});return function(_){return p.apply(this,arguments)}}(),params:{id:b.name||"\u6682\u4E0D\u5B58\u5728"},columns:N})))},c=i},676122:function(Z,M,e){"use strict";e.d(M,{H:function(){return S}});var G=e(612399),O=e(882404),J=e(613753),F=e(748429),n=e(868137),D=e(450532),U=e(194657),a=e(667294),B=e(406066),g=e(329192);class A{}A.XSS={\u5371\u5BB3:["\u2460\u76D7\u53D6\u7528\u6237Cookie\u3002","\u2461\u4FEE\u6539\u7F51\u9875\u5185\u5BB9\u3002","\u2462\u7F51\u7AD9\u6302\u9A6C\u3002","\u2463\u5229\u7528\u7F51\u7AD9\u91CD\u5B9A\u5411\u3002","\u2464XSS\u8815\u866B\u3002"],\u4FEE\u590D\u5EFA\u8BAE:`
\u53CD\u5C04\u578BXSS

1. \u8F93\u5165\u8FC7\u6EE4\uFF1A

   1. \u6839\u636E\u3010\u8F93\u5165\u6846\u3011\u7684\u7C7B\u578B\uFF0C\u5982 \u90AE\u7BB1\u3001\u7535\u8BDD\u53F7\u7801\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801 \uFF0C\u8FDB\u884C\u3010\u683C\u5F0F\u6807\u51C6\u3011\u7684\u8FC7\u6EE4\u3002

2. \u8F93\u5165\u7F16\u7801\u8F6C\u4E49

   1. \u601D\u8DEF\uFF1A

      1. \u4F7F\u7528HTML\u5B9E\u4F53\u7F16\u7801\u5BF9\u4EE5\u4E0B\u5B57\u7B26\u7F16\u7801\u3002

         1. \`\`\`
            & --> &amp;
             < --> &lt;
             > --> &gt;
             " --> &quot;
             ' --> &#x27;
             / --> &#x2F;
            \`\`\`

         2. owasp\u5B98\u65B9\u7ED9\u51FA\u7684\u4FEE\u590D\u793A\u4F8B\uFF1A

            1. \`\`\`java
               String parameter = request.getParameter("xss");
               parameter = ESAPI.encoder().encodeForHTML(parameter);//owasp\u5B98\u65B9api\u8FDB\u884Chtml\u5B9E\u4F53\u7F16\u7801
               response.getWriter().write("<body>"+parameter+"</body>");
               \`\`\`

   2. \u5BA2\u6237\u7AEF\uFF1A

      1. \u4F7F\u7528\u76F8\u5173\u7684\u3010xss-filter\u3011\u5E93\uFF0C\u6765\u5728\u524D\u7AEF\uFF0C\u5BF9\u3010\u5371\u9669xss\u4EE3\u7801\u3011\uFF0C\u8FDB\u884C\u8F6C\u4E49\u3002

      2. \u6216\u8005\uFF0C\u81EA\u5DF1\u6709\u8DB3\u591F\u80FD\u529B\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5199\u7C7B\u4F3C\u4E8E\u3010html_encode\u3011\u7684\u65B9\u6CD5\uFF0C\u8FDB\u884C\u624B\u52A8\u8FC7\u6EE4\u3002

         1. \u4E3E\u4F8B\uFF08\u4EC5\u4EC5\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF09\uFF1A

            1. \`\`\`js
                  // \u9488\u5BF9\uFF0C\u5982 xss =?xss=<img src ="null" onerror="alert(1)"<button onclick="alert('\u70B9\u6211')">\u70B9\u6211</button>

                   function html_encode( str ){
                       var s = '';
                       if(str && str.length == 0) return '';
                       s = str.replace(/&/g, '&');
                       s = s.replace(/</g, '<');
                       s = s.replace(/>/g, '>');
                       s = s.replace(/\\s/g, ' ');
                       s = s.replace(/\\'/g, ''');
                       s = s.replace(/\\"/g, '"');
                       s = s.replace(/\\n/g, '<br>');
                       return s;
                   }
               \`\`\`

            2. _

   3. \u670D\u52A1\u7AEF\uFF1A

      1. httpOnly
         1. \u5728cookie\u4E2D\u8BBE\u7F6EHttponly\u540E\uFF0Cjs\u811A\u672C\u65E0\u6CD5\u8BFB\u53D6cookie\u7684\u4FE1\u606F
      2. \u6846\u67B6\uFF1A
         1. \u5982\u5F00\u542F\uFF0C Java SpringBoot \u7684\u3010XSS\u62E6\u622A\u5668\u3011\u4E2D\u95F4\u4EF6\u3002
      3. Waf\uFF1A
         1. \u4F7F\u7528\u9AD8\u7B49\u7EA7\u7684\u3010WAF\u5B89\u5168\u5DE5\u5177\u3011\uFF0C\u5C06\u62E6\u622A  99% \u4EE5\u4E0A\u7684\u5404\u7C7B\u5B89\u5168\u653B\u51FB\u3002

3. \u767D\u540D\u5355\u8FC7\u6EE4

   1. \u8BBE\u7F6E\u3010\u5B89\u5168\u5B57\u7B26\u767D\u540D\u5355\u3011\u3002
      1. \u8FD9\u79CD\u60C5\u51B5\uFF0C\u9002\u7528\u4E8E\u3010\u5BCC\u6587\u672C\u3011\u7684\u590D\u6742\u60C5\u51B5\u3002

4. \u9ED1\u540D\u5355\u62E6\u622A

   1. \u5982\u679C\u4E0D\u4F7F\u7528\u5BCC\u6587\u672C\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F18\u5148\uFF0C\u8BBE\u7F6E\u3010\u5371\u9669\u5B57\u7B26\u9ED1\u540D\u5355\u3011
      1. \u4F46\u662F\uFF0C\u5BF9\u4E8E\u3010\u5BCC\u6587\u672C\u3011\u7684\u60C5\u51B5\uFF0C\u9ED1\u540D\u5355\u5BB9\u6613\u8BEF\u6740\u3002
`};class E{static get_title(s){return"\u3010".concat(s,"\u3011\u767B\u5F55\u5904\uFF0C\u5B58\u5728\u53CD\u5C04\u578BXSS")}static get_desc(s){return"".concat(this.get_title(s),`\u3002

\u5371\u5BB3\uFF1A
`).concat(t(A.XSS.\u5371\u5BB3.map(r=>"        ".concat(r)),0),`
`)}static get_duration(){}static get_typora_template(s,r,l,i,c){var u=this.get_title(s);return`
### 2.2. `.concat(u,`

> 1. **\u6F0F\u6D1E\u6807\u9898\uFF1A**`).concat(u,`
>
> 2. **\u6F0F\u6D1E\u7B49\u7EA7\uFF1A**\u4F4E
>
> 3. **\u6F0F\u6D1E\u7B80\u8FF0\uFF1A**
>
>    1. \u3010`).concat(s,`\u3011\u767B\u5F55\u5904\uFF0C\u5B58\u5728\u53CD\u5C04\u578BXSS\u3002
>    2. \u5371\u5BB3\uFF1A
`).concat(x(A.XSS.\u5371\u5BB3,3),`
>
> 4. **\u6F0F\u6D1Eurl/\u4F4D\u7F6E\uFF1A**
>
>    1. \`\`\`http
>       `).concat(r,`
>       \`\`\`
>    2. _
>
> 5. **\u6F0F\u6D1EPOC\u8BF7\u6C42\u5305\uFF1A**
>
>    1. \`\`\`http
`).concat(t(l,3),`
>       \`\`\`
>    2. _
>
> 6. **\u590D\u73B0\u6B65\u9AA4**
>
>    1. \u8BBF\u95EE\uFF1A
>       1. \u7F51\u5740\uFF1A`).concat(r,`
>    2. \u53D1\u73B0\uFF1A
>       1. \u5B58\u5728XSS\u6F0F\u6D1E\uFF0C\u5E76\u4E14\u7ED5\u8FC7\u4E86WAF
>    3. \u64CD\u4F5C\u8FC7\u7A0B\uFF1A
>       1. \u4F7F\u7528\u6211\u81EA\u5DF1\u7684\u6D4B\u8BD5\u8D26\u53F7\u3010`).concat(i,"/").concat(c,`\u3011\uFF0C\u8FDB\u884C\u767B\u5F55
>          1. ![image-20210707185657748](md-img/image-20210707185657748.png)
>       2. \u767B\u5F55\u6210\u529F\u540E\uFF0C\u5F39\u51FA\u4E86\u3010print\u6253\u5370\u65B9\u6CD5\u3011\u7684\u754C\u9762\uFF1A
>          1. ![image-20210707185737624](https://gitee.com/gelamogen/typora_images/raw/master/image-20210707185737624.png)
>    4. \u7ED3\u679C\uFF1A
>       1. \u8BC1\u5B9E\uFF0C\u786E\u5B9E\u5B58\u5728 \u53CD\u5C04\u578BXSS\u6F0F\u6D1E \u3002
>
> 7. **\u4FEE\u590D\u5EFA\u8BAE\uFF1A**
>
>    1. 123

`)}static copy_and_notify(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"\u3010Typora\u7247\u6BB5\u3011\u590D\u5236\u6210\u529F\uFF01";(0,g.TableHelper_QuickCopy_Fn)(s,{title:r})}}function t(d,s){var r="",l="> ",i=">    ",c=">       ",u="";switch(s){case 0:{u=r;break}case 1:{u=l;break}case 2:{u=i;break}case 3:{u=c;break}default:throw new Error("\u8FD9\u91CC\u51FA\u9519\u4E86\uFF01")}return d==null?void 0:d.map(m=>"".concat(u).concat(m)).join(`
`)}function x(d,s){var r=d.map((l,i)=>"".concat(i+1,". ").concat(l));return t(r,s)}var y={marginBottom:"1em"},C=new B.f("VulnBox"),S=()=>{var d=C.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A(),s=(0,a.useState)(d),r=(0,U.Z)(s,2),l=r[0],i=r[1],c={marginTop:"0.5em",display:"flex",flexDirection:"row-reverse"},u={website_name_zh(o){C.simple_set_and_save("website_name_zh",o,l,i)},payload_url(o){C.simple_set_and_save("payload_url",o,l,i)},poc_request(o){C.simple_set_and_save("poc_request",o,l,i)},test_uname(o){C.simple_set_and_save("test_uname",o,l,i)},test_pwd(o){C.simple_set_and_save("test_pwd",o,l,i)}},m={copy_typora_template(){var o,h=E.get_typora_template(l.website_name_zh,l.payload_url,(o=l.poc_request)===null||o===void 0?void 0:o.split(`
`),l.test_uname,l.test_pwd);E.copy_and_notify(h)},copy_title(){var o=E.get_title(l.website_name_zh);E.copy_and_notify(o)},copy_desc(){var o=E.get_desc(l.website_name_zh);E.copy_and_notify(o)},copy_duration(){E.copy_and_notify("","\u5EFA\u8BAE\u624B\u52A8\u4FEE\u6539\u8FD9\u4E2A\uFF01")},copy_fix_method(){E.copy_and_notify(A.XSS.\u4FEE\u590D\u5EFA\u8BAE)}};return a.createElement(a.Fragment,null,a.createElement("h2",null,"7.\u3010\u6F0F\u6D1E\u76D2\u5B50\u3011\u62A5\u544A\uFF0C\u81EA\u52A8\u751F\u6210"),a.createElement(O.Z,{title:"",size:"default",extra:a.createElement("a",{href:"#"},"More"),style:{}},a.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u7F51\u7AD9\u4E2D\u6587\u540D",a.createElement(D.Z,{value:l.website_name_zh,placeholder:"\u7F51\u7AD9\u4E2D\u6587\u540D",onChange:u.website_name_zh,style:y}),"Payload Url",a.createElement(D.Z,{value:l.payload_url,placeholder:"Payload Url",onChange:u.payload_url,style:y}),"POC\u8BF7\u6C42",a.createElement(D.Z.TextArea,{value:l.poc_request,placeholder:"POC\u8BF7\u6C42",onChange:u.poc_request,style:y}),"\u6D4B\u8BD5\u7528\u6237\u540D",a.createElement(D.Z,{value:l.test_uname,placeholder:"\u6D4B\u8BD5\u7528\u6237\u540D",onChange:u.test_uname,style:y}),"\u6D4B\u8BD5\u5BC6\u7801",a.createElement(D.Z,{value:l.test_pwd,placeholder:"\u6D4B\u8BD5\u5BC6\u7801",onChange:u.test_pwd,style:y}),a.createElement("div",{style:c},a.createElement(F.Z,{type:"primary",onClick:m.copy_typora_template},"\u5BFC\u51FATypora\u7247\u6BB5")),a.createElement("div",{style:c},a.createElement(F.Z,{type:"primary",onClick:m.copy_title},"\u5BFC\u51FA\u3010\u6807\u9898\u3011")),a.createElement("div",{style:c},a.createElement(F.Z,{type:"primary",onClick:m.copy_desc},"\u5BFC\u51FA\u3010\u7B80\u8FF0\u3011")),a.createElement("div",{style:c},a.createElement(F.Z,{type:"primary",onClick:m.copy_duration},"\u5BFC\u51FA\u3010\u6B65\u9AA4\u3011")),a.createElement("div",{style:c},a.createElement(F.Z,{type:"primary",onClick:m.copy_fix_method},"\u5BFC\u51FA\u3010\u4FEE\u590D\u65B9\u6848\u3011")))))}},648641:function(Z,M,e){"use strict";e.r(M);var G=e(677111),O=e(949194),J=e(449826),F=e(275745),n=e(667294),D=e(551824),U=e(848391),a=e(330714),B=e(537475),g=e(329192),A=e(676122),E=e(570946),t=e(928995),x=B.y.list,y=B.y.create,C=B.y.update,S=B.y.del,d=g.Table_Helper.tutorial,s=d.descLinks,r=d.descTexts,l=d.genUtilUI,i=d.genLinkUI,c=g.Table_Helper.singleAHrefTag_blank,u=g.Table_Helper.get_markdownNote_online,m="4",o="14",h=[{keywords:"\u3010md\u6587\u4EF6 \u8F6C Word\u6587\u4EF6\u3011",desc:[...r([n.createElement("ol",null,n.createElement("li",null,"\u4F7F\u7528\u547D\u4EE4\u3010","pandoc -s <md\u6E90\u6587\u4EF6> -o <Word\u6587\u6863\u5BFC\u51FA> --reference-doc <\u6A21\u677Fdocx\u6587\u4EF6>","\u3011\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8F6C\u5316"),n.createElement("li",null,"\u4E3B\u8981\u662F\uFF0C\u6A21\u677F\u6587\u4EF6\u7684\u4E66\u5199\uFF1A",n.createElement("ol",null,n.createElement("li",null,u("Markdown!md \xB7 (3) Markdown\u6587\u4EF6\u8F6C\u5316\uFF0CPDF\u8F6C\u5316\uFF0C\u56FE\u7247\u8F6C\u5316")),n.createElement("li",null,c("\u6211\u4E2A\u4EBA\u6574\u7406\u7684\u6A21\u677F\u3010.docx\u3011\u6587\u4EF6","https://github.com/hanshou101/WangPan/blob/master/%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A-%E5%AF%BC%E5%87%BA%E6%A8%A1%E6%9D%BF/%E3%80%90template%E6%A8%A1%E6%9D%BF%E3%80%91custom-reference.docx")),n.createElement("li",null,c("Word\uFF0C\u6210\u54C1\u793A\u610F\u56FE\u3010.docx\u3011\u6587\u4EF6","https://github.com/hanshou101/WangPan/blob/master/%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A-%E5%AF%BC%E5%87%BA%E6%A8%A1%E6%9D%BF/%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%B0%9D%E8%AF%95%EF%BC%8C%E6%AF%94%E8%BE%83%E5%A4%8D%E6%9D%82%E7%9A%84md%E6%96%87%E6%A1%A3%EF%BC%8C%E5%A4%84%E7%90%86%E5%87%BA%E6%9D%A5%E7%9A%84%E7%BB%93%E6%9E%9C/%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A-Word%E7%89%88.docx")))))]),...s([])]},{keywords:"\u3010\u6F0F\u6D1E\u76D2\u5B50\u3011\u62A5\u544A\u5FEB\u901F\u751F\u6210",desc:[...r([n.createElement("ol",null,n.createElement("li",null,"\u5B9E\u7528\u5DE5\u5177",n.createElement("ol",null,n.createElement("li",null,n.createElement(F.Z,{style:{maxWidth:"800px"},defaultActiveKey:[...E.P.devEnv.isEnv_developmentDebugMode_\u5F00\u53D1\u8005\u6A21\u5F0F()?[]:[m]],onChange:v=>{},expandIconPosition:"right"},n.createElement(F.Z.Panel,{header:"7.\u3010\u6F0F\u6D1E\u76D2\u5B50\u3011\u62A5\u544A\uFF0C\u81EA\u52A8\u751F\u6210",key:m},n.createElement(A.H,null)))))))])]},{keywords:"md\u6587\u4EF6 \u8F6C \u601D\u7EF4\u5BFC\u56FE",desc:[...r([n.createElement("ol",null,n.createElement("li",null,"\u5B9E\u7528\u5DE5\u5177",n.createElement("ol",null,n.createElement("li",null,n.createElement(F.Z,{style:{maxWidth:"70vw"},defaultActiveKey:[...E.P.devEnv.isEnv_developmentDebugMode_\u5F00\u53D1\u8005\u6A21\u5F0F()?[]:[o]],onChange:v=>{},expandIconPosition:"right"},n.createElement(F.Z.Panel,{header:"md\u6587\u4EF6 \u8F6C \u601D\u7EF4\u5BFC\u56FE",key:o},n.createElement(t.m,null)))))))])]}],I=[{keywords:"\u3010\u793E\u5DE5\u5E93\u67E5\u8BE2\u3011",desc:s([{href:"http://site3.sjk.space/sgk1.php",name:"\u793E\u5DE5\u5E93\u514D\u8D39\u67E5\u8BE2",rate:"\u4F4E\u4EF7\u503C\uFF0C\u8BD5\u9A8C\u6027\u4F5C\u54C1\u3002\u4E0D\u6307\u671B\u80FD\u67E5\u51FA \u771F\u6B63\u6709\u4EF7\u503C\u7684\u4E1C\u897F \uFF0C\u53EA\u662F\u4E00\u4E2A\u5C55\u793A",opt:{outdated:!0}}])}],V=v=>{var R=v.dispatch,K=v.listAndreport_main.list,Y=v.isLoading;return n.createElement(D.ZP,{content:n.createElement("div",{style:{whiteSpace:"pre-line"}},`
         \u670D\u52A1\u5668\u57FA\u672C\u4FE1\u606F\u626B\u63CF

         \u3010\u771F\u5B9EIP\u3011
         \u3010\u7CFB\u7EDF\u7C7B\u578B\u3011\u3001\u3010\u7CFB\u7EDF\u7248\u672C\u3011
         \u3010\u5F00\u653E\u7AEF\u53E3\u3011
         \u3010WAF\u9632\u706B\u5899\u3011Web Application Firewall
         `,n.createElement(O.Z,{type:"horizontal"}),n.createElement("h1",null,"\u5DE5\u5177"),n.createElement("div",null,h.map(l)),n.createElement(O.Z,{type:"horizontal"}),n.createElement("h1",null,"\u7F51\u7AD9"),n.createElement("div",null,I.map(i)))},n.createElement(a.Z,{handleAdd:y,handleUpdate:C,handleRemove:S,handleList:(j,q,X)=>x(j).then(P=>({data:P,success:!0,total:P.length})),columns:[{title:"\u552F\u4E00ID",dataIndex:"id",valueType:"text",fieldProps:{disabled:!0},width:"150px"},{title:"\u9879\u76EEID",dataIndex:"projectId",valueEnum:{0:{text:"\u5173\u95ED",status:"Default"},1:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},2:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},3:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u771F\u5B9EIP",dataIndex:"trueIP",valueType:"text"},{title:"\u7CFB\u7EDF\u7C7B\u578B",dataIndex:"systemType",valueType:"textarea",render:g.Table_Helper.get_pRenderFn()},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateTime",hideInForm:!0},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updatedAt",valueType:"dateTime",hideInForm:!0}]}))};M.default=(0,U.$j)(v=>{var R=v.listAndreport_main,K=v.loading;return{listAndreport_main:R,loading:K.models.listAndserver}})(V)}}]);
