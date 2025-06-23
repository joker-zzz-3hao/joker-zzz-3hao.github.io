(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2471],{314118:function(A){A.exports={testTableWra:"testTableWra___2pYAT",collapseWra:"collapseWra___3cr6r",collapsePanel:"collapsePanel___cmlXW",oneInterview:"oneInterview___1WDve",card_withSubPage_Wra:"card_withSubPage_Wra___2eJZ8"}},502223:function(A,C,t){"use strict";t.d(C,{D:function(){return B}});var N=t(575195),B=N.X.crudApi_\u4E00\u6B21\u6027\u6DFB\u52A0\u589E\u5220\u6539\u67E5_\u6240\u6709\u8DEF\u7531____\u4E00\u53E5\u8BDDUrl\u548C\u6CDB\u578B\u5373\u53EF("/notComplete_dayTask")},280622:function(A,C,t){"use strict";t.r(C),t.d(C,{__\u672A\u5B8C\u6210_\u6BCF\u65E5\u4EFB\u52A1_\u9875\u9762_CP:function(){return S},default:function(){return ae}});var N=t(755939),B=t(552154),I=t(203182),e=t(667294),Z=t(677175),k=t(159642),P=t(632445),D=t(194657),z=t(615985),W=t(9770),L=t(735510),O=t.n(L),H=t(297238),w="product";function ue(){return{\u65F6\u95F4\u8F74:[w,"2012","2013","2014","2015","2016","2017"],\u997C\u56FE\u6570\u636E:[["Milk Tea",56.5,82.1,88.7,70.1,53.4,85.1],["Matcha Latte",51.1,51.4,55.1,53.3,73.8,68.7],["Cheese Cocoa",40.1,62.2,69.5,36.4,45.2,32.5],["Walnut Brownie",25.2,37.1,41.2,18,33.9,49.1]]}}var R=E=>{var d=E.my_custom_store.\u672A\u5B8C\u6210_\u6BCF\u65E5\u4EFB\u52A1,c=E.need_\u603B\u8BA1,l=(0,e.useRef)(null),o=(0,e.useState)({}),r=(0,D.Z)(o,2),m=r[0],b=r[1];(0,e.useEffect)(()=>{var n=[],u=Object.entries(d).sort((i,p)=>{var x=(0,D.Z)(i,2),g=x[0],v=x[1],F=(0,D.Z)(p,2),h=F[0],le=F[1],re=new Date(g).valueOf()-new Date(h).valueOf();return re-0}).map(i=>{var p=(0,D.Z)(i,2),x=p[0],g=p[1],v={};return g.forEach(F=>{var h=F.unique_key;n.includes(h)||n.push(h),v[h]===void 0&&(v[h]=0),v[h]+=1}),{date:x,taskCount_map:v}}),a=u.map(i=>i.date),s=[w,...a],f=[...n.map(i=>{var p=u.map(x=>{var g=x.taskCount_map[i]||0;return g});return[i,...p]})];c&&f.push(["\u603B",...a.map((i,p)=>{var x=p+1,g=f.map(v=>v[x]);return g.reduce((v,F)=>v+F,0)})]),b(y(s,f))},[d]);function y(n,u){var a=(0,H.getDateStr_10\u4F4D)(),s=u.length,f={legend:{},tooltip:{trigger:"axis",showContent:!1},dataset:{source:[n,...u]},xAxis:{type:"category"},yAxis:{gridIndex:0},grid:{top:"55%"},series:[...(()=>{var i=[{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}}],p=new Array(s).fill({type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}});return p})(),{type:"pie",id:"pie",radius:"30%",center:["50%","25%"],emphasis:{focus:"self"},label:{formatter:"{b}: {@".concat(a,"} ({d}%)")},encode:{itemName:w,value:a,tooltip:a}}]};return f}var _=Object.entries(d).length;return _===0?e.createElement("mark",null,`
\u6B64\u5904\uFF0C\u53EF\u80FD\u662F\u7F51\u9875\u7248\u7684\u6570\u636E\u548CElectron\u4E0D\u4E92\u901A\u3002\uFF08\u6709\u4E00\u4E2A\u53D8\u901A\u65B9\u6CD5\uFF1A\u4ECEElectron\u4E2D\u70B9\u51FB\uFF0C\u8D70Url\u7684query\u8FC7\u6765\uFF1B\u4F46\u662F\u4E0D\u81EA\u52A8\u5316\u3001\u4E0D\u592A\u65B9\u4FBF\u3002\uFF09
\u5C1D\u8BD5\u901A\u8FC7\u3010http://localhost:12144/#/alone-page/1024.2\u3011\uFF0C\u8FDB\u884C\u624B\u52A8\u7684\u3010\u8DE8\u7AEF\u6570\u636E\u540C\u6B65\u3011\uFF0C\u7ED3\u679C\u63D0\u793A\u3010IPC\u672A\u5B9A\u4E49\u3011\u2014\u2014\u2014\u2014\u660E\u767D\u4E86\uFF0C\u8FD9\u79CD\u8DEF\u5B50\u5C31\u4E0D\u901A\u4E86\u3002
`):e.createElement(e.Fragment,null,e.createElement(W.default,{ref:l,className:O()(),style:{width:"80vw",height:"150vh"},opts:{},option:m,onEvents:{updateAxisPointer(n){var u=n.axesInfo[0];if(u){var a,s=u.value+1;(a=l.current)===null||a===void 0||a.getEchartsInstance().setOption({series:{id:"pie",label:{formatter:"{b}: {@["+s+"]} ({d}%)"},encode:{value:s,tooltip:s}}})}}}}))},j=P.PG.getInstance(R,z.Z),U=t(502223),Y=t(993690),G=t(6135),X=t(314118),K=t.n(X),J=t(36898),Q=t(656051),V=t.n(Q),T=t(311849),$=t(720310),q=t(273855),M,ee=q.ZP.div(M||(M=(0,$.Z)([`
  .body {
    font-family      : 'Microsoft YaHei', sans-serif;
    display          : flex;
    flex-direction   : column;
    justify-content  : center;
    align-items      : center;
    & {
      // min-height       : 100vh;
    }
    margin           : 0;
    background-color : #f7f9fc;
    padding          : 20px;

    & * {
      box-sizing : content-box;
    }

  }

  .chart-container {
    position      : relative;
    width         : 100%;
    max-width     : 800px;
    border-radius : 12px;
    box-shadow    : 0 15px 35px rgba(0, 0, 0, 0.1);
    overflow      : hidden;
  }

  .coordinate-table {
    width           : 100%;
    border-collapse : collapse;
  }

  .coordinate-table td {
    position   : relative;
    width      : 50%;
    height     : 250px;
    padding    : 25px;
    box-sizing : border-box;
  }

  .quadrant-1 {
    background    : linear-gradient(135deg, #c9f5d9, #a8e6f3);
    border-bottom : 1px solid rgba(0, 0, 0, 0.2);
    border-right  : 1px solid rgba(0, 0, 0, 0.2);
  }

  .quadrant-2 {
    background    : linear-gradient(135deg, #a8e6f3, #ffd8ba);
    border-bottom : 1px solid rgba(0, 0, 0, 0.2);
  }

  .quadrant-3 {
    background   : linear-gradient(135deg, #f3c9c9, #d4c9f3);
    border-right : 1px solid rgba(0, 0, 0, 0.2);
  }

  .quadrant-4 {
    background : linear-gradient(135deg, #d4c9f3, #ffd8ba);
  }

  .event {
    position         : absolute;
    background-color : rgba(255, 255, 255, 0.9);
    padding          : 14px 18px;
    border-radius    : 8px;
    box-shadow       : 0 5px 15px rgba(0, 0, 0, 0.08);
    max-width        : 160px;
    text-align       : center;
    transition       : all 0.3s ease;
    font-size        : 14px;
    line-height      : 1.5;
    z-index          : 5;
  }

  .event:hover {
    transform  : translateY(-5px) scale(1.05);
    box-shadow : 0 12px 24px rgba(0, 0, 0, 0.12);
    z-index    : 10;
  }

  .axis-label {
    position         : absolute;
    font-weight      : bold;
    color            : #333;
    z-index          : 5;
    background-color : rgba(255, 255, 255, 0.85);
    padding          : 6px 12px;
    border-radius    : 20px;
    box-shadow       : 0 3px 8px rgba(0, 0, 0, 0.05);
  }

  .top-label {
    top       : 10px;
    left      : 50%;
    transform : translateX(-50%);
  }

  .bottom-label {
    bottom    : 10px;
    left      : 50%;
    transform : translateX(-50%);
  }

  .right-label {
    right     : 15px;
    top       : 50%;
    transform : translateY(-50%);
  }

  .median-line {
    position         : absolute;
    left             : 0;
    width            : 100%;
    height           : 1px;
    background-color : rgba(0, 0, 0, 0.3);
    top              : 50%;
    z-index          : 4;
  }

  .median-label {
    position         : absolute;
    left             : 15px;
    top              : 50%;
    transform        : translateY(-50%);
    font-weight      : bold;
    z-index          : 6;
    background-color : rgba(255, 255, 255, 0.9);
    padding          : 5px 12px;
    border-radius    : 20px;
    box-shadow       : 0 3px 8px rgba(0, 0, 0, 0.05);
  }

  /* \u54CD\u5E94\u5F0F\u8C03\u6574 */
  @media (max-width : 600px) {
    .coordinate-table td {
      height  : 200px;
      padding : 15px;
    }

    .event {
      font-size : 12px;
      padding   : 10px;
      max-width : 120px;
    }

    .axis-label {
      font-size : 12px;
      padding   : 4px 8px;
    }
  }
`]))),te=()=>{var E=(()=>{var l=[{text:"\u83B7\u5F97\u611F",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:3,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-2}},{text:"\u4E34\u65F6\u5927\u4E8B-\u77AC\u95F4\u6210\u5C31\u611F",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:6,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-2}},{text:"\u5DE5\u4F5C\u9879\u76EE\u4E0A\uFF0C\u534A\u5929\u8981\u4EA4\u4E1C\u897F",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-3,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-3}},{text:"\u634F\u624B\u6307",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-3,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-2}},{text:"\u54AC\u7259\u5E2E",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-4,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-2}},{text:"\u6BCF\u4E2A\u6708\u8FD8\u7F51\u8D37\u7684\u538B\u529B\uFF08\u5C42\u5C42\u53E0\u53E0,\u4E0D\u65AD\u7D2F\u52A0\uFF1B\u771F\u7684\u4F1A\u628A\u4EBA\u538B\u5676\uFF09",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-7,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:-1}},{text:"\u6BCF\u6B21\u56DE\u5BB6\u524D\uFF0C\u8D2D\u4E70\u8F66\u7968",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-1,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:1}},{text:"\u6EF4\u8840",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-9,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:3}},{text:"\u548C\u8EAB\u8FB9\u4F18\u79C0\u7684\u4EBA\u7684\u6BD4\u8F83",position:{\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B:-4,\u6A2A\u8F74_\u4ECE0\u5F00\u59CB:3}}];return l.map(o=>{var r,m=o.position,b=m.\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B,y=m.\u6A2A\u8F74_\u4ECE0\u5F00\u59CB;return b>0?y>0?r=2:r=1:y>0?r=4:r=3,(0,T.Z)((0,T.Z)({},o),{},{quadrant:r})})})(),d={x:1.25*Math.max(...E.map(l=>Math.abs(l.position.\u6A2A\u8F74_\u4ECE0\u5F00\u59CB))),y:1.25*Math.max(...E.map(l=>Math.abs(l.position.\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B)))};function c(l){return e.createElement("td",{className:"quadrant-".concat(l)},E.filter(o=>o.quadrant===l).map(o=>{var r=o.position.\u7AD6\u8F74_\u6B63\u4E0A\u8D1F\u4E0B/d.y*100,m=o.position.\u6A2A\u8F74_\u4ECE0\u5F00\u59CB/d.x*100;return e.createElement("div",{className:"event",style:{[r>0?"bottom":"top"]:"".concat(Math.max(Math.abs(r),.1),"%"),[m>0?"left":"right"]:"".concat(Math.max(Math.abs(m),.1),"%")}},o.text)}))}return e.createElement(e.Fragment,null,e.createElement(ee,null,e.createElement("div",{className:"body"},e.createElement("div",{className:"chart-container"},e.createElement("table",{className:"coordinate-table"},e.createElement("tr",null,c(1),c(2)),e.createElement("tr",null,c(3),c(4))),e.createElement("div",{className:"axis-label top-label"},"\u5F00\u5FC3\u7684\u7A0B\u5EA6 \u2191"),e.createElement("div",{className:"axis-label bottom-label"},"\u75DB\u82E6\u7684\u7A0B\u5EA6 \u2193"),e.createElement("div",{className:"axis-label right-label"},"\u7206\u53D1\u7684\u65F6\u95F4 \u2192"),e.createElement("div",{className:"median-line"}),e.createElement("div",{className:"median-label"},"\u4E2D\u503C")),e.createElement("h1",null,"\u538B\u529B\u91CF\u7EA7\u8868"))))},ne=E=>{var d,c,l=E.lifeTasks_list_NS,o=l.async_data._7\u5929_\u6BCF\u5929\u5206\u6570_\u6C47\u603B_arr,r=l.async_data.\u57FA\u4E8E_\u5E73\u5747\u6570_\u548C_\u6307\u6570_\u4FEE\u6B63\u503C,m=b((d=(c=o[0])===null||c===void 0?void 0:c.day)!==null&&d!==void 0?d:"");function b(n){return J.k.get_week_day_hour(V()(n)).week_in_year}function y(){return _.apply(this,arguments)}function _(){return _=(0,I.Z)(function*(){var n=!0,u=null;if(n){var a=yield U.D.list_\u53EF\u4F20\u53C2\u67E5\u8BE2();u=a.record}else{var s,f=(s=k.m8.location.query)!==null&&s!==void 0?s:{},i=f.newData;i&&(u=Z.Y.parseStr(i))}u!==null&&Y.K.getStore().dispatch_effect\u5F02\u6B65Promise_reducers\u540C\u6B65({type:"my_custom_store/sync_\u8BBE\u7F6E\u8986\u76D6\u5168\u90E8_\u672A\u5B8C\u6210_\u6BCF\u65E5\u4EFB\u52A1",payload:u})}),_.apply(this,arguments)}return(0,e.useEffect)(()=>{y()},[]),e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("div",{className:K().testTableWra},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u5E8F\u53F7"),e.createElement("th",null,"\u65E5\u671F"),e.createElement("th",null,"\u5468"),e.createElement("th",null,"\u5F97\u5206"),e.createElement("th",null,"\u5C1A\u5DEE\u5206\u503C"),e.createElement("th",null,"\u6240\u5C5E\u5206\u7EC4\u603B\u5206\uFF08\u7406\u8BBA\u6240\u5C5E\u4E00\u7EC4\u4EFB\u52A1_\u603B\u5206\u3002 \u6BD4\u5982\uFF0C\u6709\u4E00\u4E2A8\u5C0F\u65F6\u4EFB\u52A1\u3001\u4E00\u4E2A14\u5C0F\u65F6\u4EFB\u52A1\uFF0C\u603B\u5206\u5373\u662F\u3010\u4E24\u8005\u7406\u8BBA\u6EE1\u5206\u65F6\u52A0\u603B\u3011\uFF09"))),e.createElement("tbody",null,o.map((n,u)=>{var a=b(n.day),s=n.score_n/r;return e.createElement("tr",{style:{border:a===m?"2px solid #FF7800":""}},e.createElement("td",null,e.createElement("pre",null,u+1)),e.createElement("td",null,e.createElement("pre",{style:{padding:"1em"}},n.day)),e.createElement("td",null,e.createElement("pre",{style:{padding:"1em"}},a)),e.createElement("td",null,e.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},e.createElement("pre",null,"  ".concat(n.score_n," / ").concat(r,"  ")),e.createElement(B.Z,{type:"circle",strokeColor:{"0%":"#108ee9","100%":"#87d068"},style:{zoom:"0.48"},percent:parseInt(s*100+"")}))),e.createElement("td",{style:{border:a===m?"8px solid #FF7800":""}},e.createElement("pre",{style:{}},r-n.score_n)),e.createElement("td",null,e.createElement("pre",null,n.total_n)))})))),e.createElement(te,null),e.createElement(j,{need_\u603B\u8BA1:!0})))},S=P.PG.getInstance(ne,G.default),ae=S}}]);
