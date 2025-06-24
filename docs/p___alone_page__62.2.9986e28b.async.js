(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8761],{506604:function(m,r,t){"use strict";t.d(r,{t:function(){return E},A:function(){return g}});var a=t(194657),e=t(720310),n=t(667294),l=t(273855),i,E=function(u){return u._\u8BBA\u8BED="_lunyu",u._\u9F99\u65CF\u524D\u4F20_\u54C0\u60BC\u4E4B\u7FFC="_lungzu_qianzhuan_aidaozhiyi",u._\u6563\u88C5h="_\u6563\u88C5h",u._\u9053\u8BE1\u5F02\u4ED9="_daoguiyixian",u._\u82F1\u96C4\u65E0\u654C\u4E4B\u6781\u54C1\u9886\u4E3B="_yingixongwudi_zhi_jipinlingzhu",u}({}),p=l.ZP.div(i||(i=(0,e.Z)([`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap');

  .lunyu-wrapper {
    display         : flex;
    justify-content : center;
    align-items     : center;
    padding         : 20px;
  }

  .lunyu-container {
    font-family      : 'Noto Serif SC', serif;
    max-width        : 500px;
    width            : 100%;
    background-color : #f8f0e0;
    position         : relative;
    border           : 1px solid #d2c2a4;
    box-shadow       : 0 5px 20px rgba(0, 0, 0, 0.15);
    display          : flex;
    flex-direction   : column;
    align-items      : center;
    /* \u4EFF\u53E4\u7EB8\u7EB9\u7406 */
    background-image : radial-gradient(rgba(139, 69, 19, 0.02) 1px, transparent 1px);
    background-size  : 8px 8px;
    border-radius    : 3px;
    overflow         : hidden;
  }

  /* \u5377\u8F74\u9876\u90E8 */
  .scroll-top {
    height           : 20px;
    width            : 100%;
    background-color : #c9b18c;
    background-image : linear-gradient(90deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 25%,
    rgba(0, 0, 0, 0.05) 75%,
    rgba(0, 0, 0, 0.1) 100%);
  }

  /* \u5377\u8F74\u5E95\u90E8 */
  .scroll-bottom {
    height           : 20px;
    width            : 100%;
    background-color : #c9b18c;
    background-image : linear-gradient(90deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 25%,
    rgba(0, 0, 0, 0.05) 75%,
    rgba(0, 0, 0, 0.1) 100%);
  }

  /* \u6807\u9898 */
  .title {
    font-size      : 1.5rem;
    color          : #732F02;
    text-align     : center;
    margin         : 1.5rem 0 1rem;
    font-weight    : 700;
    letter-spacing : 4px;
    position       : relative;
  }

  .title::after {
    content          : "";
    display          : block;
    width            : 80px;
    height           : 2px;
    background-color : rgba(139, 69, 19, 0.3);
    margin           : 10px auto 0;
  }

  /* \u5370\u7AE0\u6548\u679C */
  .stamp {
    position         : absolute;
    top              : 70px;
    right            : 30px;
    width            : 50px;
    height           : 50px;
    background-color : rgba(202, 57, 57, 0.8);
    transform        : rotate(15deg);
    display          : flex;
    justify-content  : center;
    align-items      : center;
    font-family      : "SimSun", "\u5B8B\u4F53", serif;
    font-size        : 28px;
    border-radius    : 3px;
    z-index          : 1;
  }

  .stamp::before {
    content : "\u5B50";
    color   : white;
  }

  .stamp::after {
    content  : "";
    position : absolute;
    top      : 5px;
    right    : 5px;
    bottom   : 5px;
    left     : 5px;
    border   : 1px solid rgba(255, 255, 255, 0.5);
  }

  .quote-content {
    text-align      : center;
    transition      : opacity 0.5s ease;
    min-height      : 220px;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    padding         : 20px 40px 30px;
    width           : 100%;
  }

  .fade-in {
    opacity : 1;
  }

  .fade-out {
    opacity : 0;
  }

  .quote-text {
    font-size     : 1.8rem;
    color         : #732F02;
    margin-bottom : 1.5rem;
    line-height   : 1.5;
    font-weight   : 700;
  }

  .quote-translation {
    font-size     : 1.1rem;
    color         : #5D4037;
    margin-bottom : 1.2rem;
    line-height   : 1.6;
    font-weight   : 300;
  }

  .quote-source {
    font-size  : 0.9rem;
    color      : #8D6E63;
    text-align : right;
    font-style : italic;
    align-self : flex-end;
    margin-top : 0.5rem;
  }

  .quote-navigation {
    display         : flex;
    justify-content : space-between;
    align-items     : center;
    width           : 100%;
    padding         : 0 40px 20px;
  }

  .nav-button {
    background-color : rgba(139, 69, 19, 0.8);
    color            : #f8f0e0;
    border           : none;
    width            : 40px;
    height           : 40px;
    display          : flex;
    justify-content  : center;
    align-items      : center;
    font-size        : 1.2rem;
    cursor           : pointer;
    transition       : all 0.3s ease;
    border-radius    : 50%;
  }

  .nav-button:hover {
    background-color : rgba(139, 69, 19, 1);
    transform        : scale(1.05);
  }

  .quote-counter {
    display     : flex;
    align-items : baseline;
  }

  .current {
    font-size   : 1.1rem;
    color       : #732F02;
    font-weight : 700;
  }

  .total {
    font-size   : 0.9rem;
    color       : #8D6E63;
    margin-left : 2px;
  }

  @media (max-width : 600px) {
    .lunyu-container {
      max-width : 95%;
    }

    .quote-content {
      padding    : 15px 25px 20px;
      min-height : 200px;
    }

    .quote-text {
      font-size : 1.5rem;
    }

    .quote-translation {
      font-size : 0.95rem;
    }

    .stamp {
      width     : 40px;
      height    : 40px;
      font-size : 22px;
      top       : 60px;
      right     : 20px;
    }

    .title {
      font-size : 1.3rem;
      margin    : 1.2rem 0 0.8rem;
    }

    .quote-navigation {
      padding : 0 25px 15px;
    }
  }
`]))),g=u=>{var o=u.quotes,c=u.need_autoPlay,_=c===void 0?!1:c,b=(0,n.useState)(0),f=(0,a.Z)(b,2),x=f[0],F=f[1],B=(0,n.useState)(!0),h=(0,a.Z)(B,2),C=h[0],s=h[1];(0,n.useEffect)(()=>{if(_){var d=setInterval(()=>{s(!1),setTimeout(()=>{F(y=>(y+1)%o.length),s(!0)},500)},1e4);return()=>clearInterval(d)}else return},[o.length]);var D=()=>{s(!1),setTimeout(()=>{F(d=>(d+1)%o.length),s(!0)},500)},v=()=>{s(!1),setTimeout(()=>{F(d=>(d-1+o.length)%o.length),s(!0)},500)};return n.createElement(p,null,n.createElement("div",{className:"lunyu-wrapper"},n.createElement("div",{className:"lunyu-container"},n.createElement("div",{className:"scroll-top"}),n.createElement("div",{className:"title"},"\u8BBA\u8BED\u7CBE\u534E"),n.createElement("div",{className:"stamp"}),n.createElement("div",{className:"quote-content ".concat(C?"fade-in":"fade-out")},n.createElement("h2",{className:"quote-text"},o[x].text),n.createElement("p",{className:"quote-translation"},o[x].translation),n.createElement("p",{className:"quote-source"},"\u2014\u2014\u300A\u8BBA\u8BED\u300B")),n.createElement("div",{className:"quote-navigation"},n.createElement("button",{className:"nav-button prev",onClick:v},"\u3008"),n.createElement("div",{className:"quote-counter"},n.createElement("span",{className:"current"},x+1),n.createElement("span",{className:"total"},"/ ",o.length)),n.createElement("button",{className:"nav-button next",onClick:D},"\u3009")),n.createElement("div",{className:"scroll-bottom"}))))}},69321:function(m,r,t){"use strict";t.d(r,{O:function(){return a}});var a={\u8BBA\u8BED_\u7FFB\u9875:[],\u8BBA\u8BED_\u975E\u7FFB\u9875:["\u5B50\u66F0\uFF1A\u201C\u4E09\u4EBA\u884C\uFF0C\u5FC5\u6709\u6211\u5E08\u7109\uFF1A\u62E9\u5176\u5584\u8005\u800C\u4ECE\u4E4B\uFF0C\u5176\u4E0D\u5584\u8005\u800C\u6539\u4E4B\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u5B66\u800C\u4E0D\u601D\uFF0C\u5219\u7F54\uFF1B\u601D\u800C\u4E0D\u5B66\uFF0C\u5219\u6B86\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u5FB7\u4E0D\u5B64\uFF0C\u5FC5\u6709\u90BB\u3002\u201D","\u5B66\u800C\u65F6\u4E60\u4E4B\uFF0C\u4E0D\u4EA6\u8BF4\u4E4E\uFF1F\u6709\u670B\u81EA\u8FDC\u65B9\u6765\uFF0C\u4E0D\u4EA6\u4E50\u4E4E\uFF1F\u4EBA\u4E0D\u77E5\u800C\u4E0D\u6120\uFF0C\u4E0D\u4EA6\u541B\u5B50\u4E4E\uFF1F","\u5B50\u66F0\uFF1A\u201C\u9053\u4E0D\u884C\uFF0C\u4E58\u6874\u6D6E\u4E8E\u6D77\u3002\u4ECE\u6211\u8005\uFF0C\u5176\u7531\u4E0E\uFF1F\u201D","\u5B50\u66F0\uFF1A\u201C\u671D\u95FB\u9053\uFF0C\u5915\u6B7B\u53EF\u77E3\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u89C1\u8D24\u601D\u9F50\u7109\uFF0C\u89C1\u4E0D\u8D24\u800C\u5185\u81EA\u7701\u4E5F\u3002\u201D","\u5189\u6C42\u66F0\uFF1A\u201C\u975E\u4E0D\u8BF4\u5B50\u4E4B\u9053\uFF0C\u529B\u4E0D\u8DB3\u4E5F\u3002\u201D\u5B50\u66F0\uFF1A\u201C\u529B\u4E0D\u8DB3\u8005\uFF0C\u4E2D\u9053\u800C\u5E9F\uFF0C\u4ECA\u5973\u753B\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u77E5\u4E4B\u8005\uFF0C\u4E0D\u5982\u597D\u4E4B\u8005\uFF1B\u597D\u4E4B\u8005\uFF0C\u4E0D\u5982\u4E50\u4E4B\u8005\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u4E2D\u4EBA\u4EE5\u4E0A\uFF0C\u53EF\u4EE5\u8BED\u4E0A\u4E5F\uFF1B\u4E2D\u4EBA\u4EE5\u4E0B\uFF0C\u4E0D\u53EF\u4EE5\u8BED\u4E0A\u4E5F\u3002\u201D","\u5B50\u66F0\uFF1A\u201C\u4E0D\u6124\u4E0D\u542F\uFF0C\u4E0D\u60B1\u4E0D\u53D1\uFF0C\u4E3E\u4E00\u9685\u4E0D\u4EE5\u4E09\u9685\u53CD\uFF0C\u5219\u4E0D\u590D\u4E5F\u3002\u201D"].map(e=>({text:e,chapter:"\u300A\u5B66\u800C\u300B"}))}},396196:function(m,r,t){"use strict";var a=t(720310),e=t(667294),n=t(273855),l,i=n.ZP.div(l||(l=(0,a.Z)([`
  /* LunYuQuotes.css */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap');

  body {
    margin           : 0;
    padding          : 20px;
    background-color : #f9f7f1;
    font-family      : 'Noto Serif SC', serif;
  }

  .lunyu-container {
    max-width        : 60vw;
    margin           : 0 auto;
    padding          : 30px;
    background-color : #f4eee2;
    box-shadow       : 0 10px 30px rgba(0, 0, 0, 0.1);
    border           : 1px solid #d3c7b1;
    position         : relative;
    background-image : url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d3c7b1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .lunyu-header {
    text-align    : center;
    margin-bottom : 40px;
    position      : relative;
  }

  .lunyu-header h1 {
    color          : #774f38;
    font-size      : 3rem;
    letter-spacing : 12px;
    font-weight    : 700;
    margin         : 0 0 20px 0;
    text-shadow    : 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .decorative-line {
    height           : 2px;
    background-color : #d3c7b1;
    width            : 80%;
    margin           : 0 auto;
    position         : relative;
  }

  .decorative-line::before, .decorative-line::after {
    content          : '';
    position         : absolute;
    width            : 10px;
    height           : 10px;
    background-color : #d3c7b1;
    border-radius    : 50%;
    top              : -4px;
  }

  .decorative-line::before {
    left : 0;
  }

  .decorative-line::after {
    right : 0;
  }

  .red-seal {
    position         : absolute;
    right            : 30px;
    top              : 0;
    width            : 70px;
    height           : 70px;
    background-color : #c94c4c;
    color            : white;
    display          : flex;
    align-items      : center;
    justify-content  : center;
    font-size        : 1.8rem;
    font-weight      : bold;
    transform        : rotate(15deg);
    box-shadow       : 3px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius    : 5px;
  }

  .quotes-wrapper {
    display               : grid;
    grid-template-columns : repeat(auto-fill, minmax(300px, 1fr));
    gap                   : 25px;
    padding               : 20px 0;
  }

  .quote-card {
    background-color : #fff;
    border           : 1px solid #d3c7b1;
    box-shadow       : 0 4px 8px rgba(0, 0, 0, 0.05);
    padding          : 20px;
    border-radius    : 5px;
    transition       : transform 0.3s ease, box-shadow 0.3s ease;
    position         : relative;
  }

  .quote-card:hover {
    //transform  : translateY(-5px);                // \u5F71\u54CD\u9605\u8BFB
    box-shadow : 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .quote-card::before {
    content     : '\u300C';
    position    : absolute;
    top         : 5px;
    left        : 10px;
    font-size   : 2rem;
    color       : #d3c7b1;
    line-height : 1;
  }

  .quote-card::after {
    content     : '\u300D';
    position    : absolute;
    bottom      : 5px;
    right       : 10px;
    font-size   : 2rem;
    color       : #d3c7b1;
    line-height : 1;
  }

  .quote-content {
    display        : flex;
    flex-direction : column;
    height         : 100%;
  }

  .quote-text {
    font-size     : 1.25rem;
    line-height   : 1.8;
    color         : #333;
    margin-bottom : 15px;
    flex-grow     : 1;
  }

  .quote-chapter {
    text-align : right;
    color      : #997a62;
    font-style : italic;
    font-size  : 0.9rem;
    margin-top : auto;
  }

  .lunyu-footer {
    margin-top : 40px;
    text-align : center;
  }

  .lunyu-footer p {
    color          : #774f38;
    font-size      : 1.2rem;
    letter-spacing : 3px;
    margin         : 20px 0 0 0;
  }

  @media screen and (max-width : 768px) {
    .lunyu-container {
      padding : 20px 15px;
    }

    .lunyu-header h1 {
      font-size      : 2.2rem;
      letter-spacing : 8px;
    }

    .red-seal {
      width     : 50px;
      height    : 50px;
      font-size : 1.4rem;
      right     : 15px;
    }

    .quotes-wrapper {
      grid-template-columns : 1fr;
      gap                   : 20px;
    }
  }
`]))),E=p=>{var g=p.quotes,u=p.style,o=u===void 0?{}:u;return e.createElement(i,{style:o},e.createElement("div",{className:"lunyu-container"},e.createElement("div",{className:"lunyu-header"},e.createElement("h1",null,"\u8BBA\u8BED\u7CBE\u534E"),e.createElement("div",{className:"decorative-line"}),e.createElement("div",{className:"red-seal"},"\u5B54\u5B50")),e.createElement("div",{className:"quotes-wrapper"},g.map((c,_)=>e.createElement("div",{className:"quote-card",key:_},e.createElement("div",{className:"quote-content"},e.createElement("div",{className:"quote-text"},c.text),e.createElement("div",{className:"quote-chapter"},c.chapter))))),e.createElement("div",{className:"lunyu-footer"},e.createElement("div",{className:"decorative-line"}),e.createElement("p",null,"\u6E29\u6545\u800C\u77E5\u65B0"))))};r.Z=E},787138:function(m,r,t){"use strict";t.r(r),t.d(r,{_:function(){return i}});var a=t(667294),e=t(506604),n=t(69321),l=t(396196),i=()=>a.createElement(a.Fragment,null,a.createElement(e.A,{quotes:n.O.\u8BBA\u8BED_\u7FFB\u9875}),a.createElement(l.Z,{quotes:n.O.\u8BBA\u8BED_\u975E\u7FFB\u9875}));r.default=i}}]);
