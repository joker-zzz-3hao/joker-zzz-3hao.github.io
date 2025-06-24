(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2306],{339799:function(Y,C,l){"use strict";l.r(C),l.d(C,{_:function(){return P}});var m=l(667294),x=l(749009),P=()=>m.createElement(m.Fragment,null,m.createElement(x.r,null));C.default=P},749009:function(Y,C,l){"use strict";l.d(C,{t:function(){return d},r:function(){return J}});var m=l(311849),x=l(194657),P=l(720310),e=l(667294),H=l(273855),j,d={\u55E8\u76AE\u4F4D:p=>"".concat(p,"\u4E2A"),\u55E8\u76AE\u5907\u6CE8:`\u4EF0\u5934\uFF0C\u540C\u65F6\u5BFB\u627E\u767D\u566A\u97F3
\u653E\u677E\uFF08\u4E3A\u4E4B\u540E\u7684\u7761\u505A\u51C6\u5907\uFF09\u3001
\uFF08\u5927\u8111\u653E\u7A7A\u3002\u56DE\u5230\u5B87\u5B99\uFF09
\u770B\u624B\u673A\u65F6\uFF0C\u4FA7\u5934(\u65E0\u538B)\u3001\u800C\u4E0D\u4F4E\u5934(\u9519\u8BEF\u4FDD\u6301\u538B\u529B)
\uFF08\u5982\u679C\u8981\u66F4\u8212\u670D\u7684\uFF1A\u5DE6\u817F\u4FA7\u523030\u5EA6\uFF0C\u524D\u811A\u638C\u7740\u5730\u540E\u811A\u8DDF\u7ACB\u8D77\uFF0C\u53F3\u811A\u7AD9\u7ACB\uFF09
`.trim(),\u55E8\u76AE\u91CD\u8981\u5907\u6CE8:"\u82CF\u9192\u548C\u590D\u6D3B",\u7761\u4F4D:"* 10\u4E0B"},V=H.ZP.div(j||(j=(0,P.Z)([`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  * {
    box-sizing : border-box;
    margin     : 0;
    padding    : 0;
  }

  .body {
    font-family         : 'Orbitron', sans-serif;
    background-color    : #0D0221;
    color               : #FFFFFF;
    overflow            : hidden;
    background-image    : linear-gradient(45deg, rgba(33, 5, 71, 0.5) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(33, 5, 71, 0.5) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(33, 5, 71, 0.5) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(33, 5, 71, 0.5) 75%);
    background-size     : 20px 20px;
    background-position : 0 0, 0 10px, 10px -10px, -10px 0px;
  }

  .lucky-wheel-container {
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
    min-height      : 100vh;
    padding         : 20px;
    position        : relative;
  }

  .glitch-title {
    font-size      : 2.5rem;
    font-weight    : bold;
    color          : #00FFFF;
    text-shadow    : 0 0 5px #00FFFF,
    0 0 10px #00FFFF,
    0 0 20px #00FFFF,
    0 0 40px #0066FF,
    0 0 80px #0066FF;
    letter-spacing : 2px;
    margin-bottom  : 40px;
    position       : relative;
    animation      : glitch 2s infinite;
  }

  @keyframes glitch {
    0% {
      transform   : translate(0);
      text-shadow : 0 0 5px #00FFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
    2% {
      transform   : translate(3px, -5px);
      text-shadow : 0 0 5px #FF003C,
      0 0 10px #FF003C,
      0 0 20px #FF003C;
    }
    4% {
      transform   : translate(-3px, 5px);
      text-shadow : 0 0 5px #FF00FF,
      0 0 10px #FF00FF,
      0 0 20px #FF00FF;
    }
    6% {
      transform   : translate(0);
      text-shadow : 0 0 5px #00FFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
    100% {
      transform   : translate(0);
      text-shadow : 0 0 5px #00FFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
  }

  .wheel-container {
    position      : relative;
    width         : 80vmin;
    height        : 80vmin;
    max-width     : 500px;
    max-height    : 500px;
    margin-bottom : 30px;
  }

  .wheel-canvas {
    width         : 100%;
    height        : 100%;
    border-radius : 50%;
    box-shadow    : 0 0 15px #00FFFF,
    0 0 30px #0066FF,
    inset 0 0 15px rgba(0, 255, 255, 0.5);
  }

  .confetti-canvas {
    position       : fixed;
    top            : 0;
    left           : 0;
    width          : 100%;
    height         : 100%;
    pointer-events : none;
    z-index        : 1000;
  }

  .spin-button {
    position       : relative;
    font-family    : 'Orbitron', sans-serif;
    font-size      : 1.2rem;
    font-weight    : bold;
    background     : linear-gradient(45deg, #FF003C, #FF00FF);
    color          : white;
    border         : none;
    padding        : 12px 30px;
    border-radius  : 5px;
    cursor         : pointer;
    outline        : none;
    transition     : all 0.3s;
    overflow       : hidden;
    z-index        : 1;
    text-transform : uppercase;
    letter-spacing : 2px;
    box-shadow     : 0 0 10px #FF003C,
    0 0 20px rgba(255, 0, 60, 0.5);
  }

  .spin-button:before {
    content    : '';
    position   : absolute;
    top        : 0;
    left       : -100%;
    width      : 100%;
    height     : 100%;
    background : linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation  : shine 2s infinite;
    z-index    : -1;
  }

  @keyframes shine {
    0% {
      left : -100%;
    }
    20% {
      left : 100%;
    }
    100% {
      left : 100%;
    }
  }

  .spin-button:hover {
    transform  : translateY(-2px);
    box-shadow : 0 0 15px #FF003C,
    0 0 30px rgba(255, 0, 60, 0.7);
  }

  .spin-button:active {
    transform : translateY(1px);
  }

  .spin-button.disabled {
    opacity   : 0.7;
    cursor    : not-allowed;
    animation : pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow : 0 0 10px #FF003C, 0 0 20px rgba(255, 0, 60, 0.5);
    }
    50% {
      box-shadow : 0 0 20px #FF003C, 0 0 40px rgba(255, 0, 60, 0.7);
    }
    100% {
      box-shadow : 0 0 10px #FF003C, 0 0 20px rgba(255, 0, 60, 0.5);
    }
  }

  .winner-display {
    margin-top       : 30px;
    padding          : 20px;
    background-color : rgba(13, 2, 33, 0.7);
    border           : 2px solid #FF00FF;
    border-radius    : 10px;
    box-shadow       : 0 0 15px #FF00FF,
    inset 0 0 10px #FF00FF;
    animation        : winner-appear 0.5s ease-out;
  }

  @keyframes winner-appear {
    0% {
      opacity   : 0;
      transform : scale(0.5);
    }
    70% {
      opacity   : 1;
      transform : scale(1.1);
    }
    100% {
      transform : scale(1);
    }
  }

  .neon-text {
    font-size   : 1.5rem;
    color       : #FFFFFF;
    text-shadow : 0 0 5px #FFFFFF,
    0 0 10px #FF00FF,
    0 0 20px #FF00FF,
    0 0 40px #FF00FF,
    0 0 80px #FF00FF;
    animation   : neon-flicker 2s infinite;
  }

  @keyframes neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #FF00FF,
      0 0 20px #FF00FF,
      0 0 40px #FF00FF,
      0 0 80px #FF00FF;
    }
    20%, 24%, 55% {
      text-shadow : none;
    }
  }

  /* \u8D5B\u535A\u670B\u514B\u80CC\u666F\u5143\u7D20 */
  .lucky-wheel-container::before {
    content        : '';
    position       : fixed;
    top            : 0;
    left           : 0;
    width          : 100%;
    height         : 100%;
    background     : repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      rgba(0, 255, 255, 0.03) 20px,
      rgba(0, 255, 255, 0.03) 21px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(255, 0, 60, 0.03) 20px,
      rgba(255, 0, 60, 0.03) 21px
    );
    pointer-events : none;
    z-index        : -1;
  }

  /* \u54CD\u5E94\u5F0F\u8C03\u6574 */
  @media (max-width : 768px) {
    .glitch-title {
      font-size : 1.8rem;
    }

    .wheel-container {
      width  : 90vmin;
      height : 90vmin;
    }

    .spin-button {
      font-size : 1rem;
      padding   : 10px 20px;
    }

    .neon-text {
      font-size : 1.2rem;
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  /* \u4E2D\u5956\u7ED3\u679C\u6A21\u6001\u7A97\u53E3 */
  .winner-modal {
    position         : fixed;
    top              : 0;
    left             : 0;
    width            : 100%;
    height           : 100%;
    background-color : rgba(0, 0, 0, 0.8);
    display          : flex;
    justify-content  : center;
    align-items      : center;
    z-index          : 2000;
    animation        : modal-appear 0.5s forwards;
    backdrop-filter  : blur(5px);
  }

  @keyframes modal-appear {
    0% {
      opacity : 0;
    }
    100% {
      opacity : 1;
    }
  }

  .modal-content {
    background    : linear-gradient(135deg, #1a0033 0%, #0d001a 100%);
    border        : 2px solid #FF00FF;
    border-radius : 10px;
    width         : 90%;
    max-width     : 500px;
    padding       : 30px;
    position      : relative;
    box-shadow    : 0 0 20px #FF00FF,
    0 0 40px rgba(255, 0, 255, 0.5),
    inset 0 0 15px rgba(0, 255, 255, 0.3);
    animation     : pulse-border 2s infinite;
    overflow      : hidden;
  }

  @keyframes pulse-border {
    0% {
      box-shadow : 0 0 20px #FF00FF,
      0 0 40px rgba(255, 0, 255, 0.5),
      inset 0 0 15px rgba(0, 255, 255, 0.3);
    }
    50% {
      box-shadow : 0 0 30px #FF00FF,
      0 0 60px rgba(255, 0, 255, 0.7),
      inset 0 0 25px rgba(0, 255, 255, 0.5);
    }
    100% {
      box-shadow : 0 0 20px #FF00FF,
      0 0 40px rgba(255, 0, 255, 0.5),
      inset 0 0 15px rgba(0, 255, 255, 0.3);
    }
  }

  .modal-header {
    display         : flex;
    align-items     : center;
    justify-content : center;
    margin-bottom   : 25px;
  }

  .cyber-line {
    height     : 2px;
    flex-grow  : 1;
    background : linear-gradient(90deg, transparent, #00FFFF, transparent);
    margin     : 0 15px;
  }

  .glitch-prize-title {
    color          : #FFFFFF;
    font-size      : 1.8rem;
    text-transform : uppercase;
    letter-spacing : 3px;
    text-shadow    : 0 0 5px #FFFFFF,
    0 0 10px #00FFFF,
    0 0 20px #00FFFF;
    position       : relative;
    animation      : title-glitch 3s infinite;
  }

  @keyframes title-glitch {
    0%, 90%, 100% {
      transform   : translate(0);
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
    92% {
      transform   : translate(-5px, 3px);
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #FF003C,
      0 0 20px #FF003C;
    }
    94% {
      transform   : translate(5px, -3px);
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
    96% {
      transform   : translate(-5px, -3px);
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #FF00FF,
      0 0 20px #FF00FF;
    }
    98% {
      transform   : translate(5px, 3px);
      text-shadow : 0 0 5px #FFFFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
    }
  }

  .prize-hologram {
    display         : flex;
    justify-content : center;
    align-items     : center;
    position        : relative;
    height          : 140px;
    margin          : 30px 0;
  }

  .hologram-circle {
    width         : 120px;
    height        : 120px;
    border-radius : 50%;
    border        : 2px solid #00FFFF;
    background    : radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
    position      : absolute;
    animation     : rotate 10s linear infinite, pulse 3s ease-in-out infinite;
    box-shadow    : 0 0 30px #00FFFF;
  }

  @keyframes rotate {
    0% {
      transform : rotate(0deg);
    }
    100% {
      transform : rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity    : 0.7;
      box-shadow : 0 0 30px #00FFFF;
    }
    50% {
      opacity    : 1;
      box-shadow : 0 0 50px #00FFFF;
    }
  }

  .prize-name {
    font-size   : 2.2rem;
    font-weight : bold;
    color       : #FFFFFF;
    text-shadow : 0 0 10px #00FFFF,
    0 0 20px #00FFFF,
    0 0 30px #00FFFF;
    z-index     : 1;
    animation   : float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform : translateY(0);
    }
    50% {
      transform : translateY(-10px);
    }
  }

  .prize-message {
    text-align     : center;
    margin-bottom  : 30px;
    font-size      : 1.3rem;
    display        : flex;
    flex-direction : column;
    gap            : 10px;

    span {
      pre {
        white-space : pre-wrap;
      }
    }

  }

  .blink-text {
    animation   : blink 1.5s infinite;
    color       : #FFFFFF;
    white-space : pre-wrap;
  }

  @keyframes blink {
    0%, 49% {
      opacity : 1;
    }
    50%, 100% {
      opacity : 0.5;
    }
  }

  .cyber-text {
    color       : #00FFFF;
    text-shadow : 0 0 5px #00FFFF;
  }

  .highlight-text {
    color       : #FF003C;
    font-size   : 1.8rem;
    font-weight : bold;
    text-shadow : 0 0 5px #FF003C,
    0 0 10px #FF003C;
    animation   : size-pulse 2s infinite;
  }

  @keyframes size-pulse {
    0%, 100% {
      transform : scale(1);
    }
    50% {
      transform : scale(1.1);
    }
  }

  .close-button {
    font-family    : 'Orbitron', sans-serif;
    background     : linear-gradient(45deg, #00FFFF, #0066FF);
    color          : white;
    border         : none;
    padding        : 12px 30px;
    font-size      : 1rem;
    font-weight    : bold;
    border-radius  : 5px;
    cursor         : pointer;
    position       : relative;
    overflow       : hidden;
    display        : block;
    margin         : 0 auto;
    letter-spacing : 1px;
    text-transform : uppercase;
    box-shadow     : 0 0 15px rgba(0, 255, 255, 0.5);
    transition     : all 0.3s;
  }

  .close-button:hover {
    transform  : translateY(-3px);
    box-shadow : 0 0 20px rgba(0, 255, 255, 0.8);
  }

  .btn-glow {
    position   : absolute;
    top        : -50%;
    left       : -50%;
    width      : 200%;
    height     : 200%;
    background : radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%);
    opacity    : 0;
    animation  : btn-glow 2s infinite;
  }

  @keyframes btn-glow {
    0%, 100% {
      opacity   : 0;
      transform : scale(0.5);
    }
    50% {
      opacity   : 0.3;
      transform : scale(1);
    }
  }

  .circuit-decoration {
    position            : absolute;
    width               : 120px;
    height              : 200px;
    background-image    : linear-gradient(90deg, transparent 0%, transparent 45%, #00FFFF 45%, #00FFFF 55%, transparent 55%, transparent 100%),
    linear-gradient(0deg, transparent 0%, transparent 45%, #00FFFF 45%, #00FFFF 55%, transparent 55%, transparent 100%),
    linear-gradient(90deg, transparent 0%, transparent 45%, #FF003C 45%, #FF003C 55%, transparent 55%, transparent 100%),
    linear-gradient(0deg, transparent 0%, transparent 45%, #FF003C 45%, #FF003C 55%, transparent 55%, transparent 100%);
    background-size     : 20px 20px, 20px 20px, 40px 40px, 40px 40px;
    background-position : 0 0, 0 0, 10px 10px, 10px 10px;
    opacity             : 0.1;
    pointer-events      : none;
  }

  .circuit-decoration.left {
    top       : 20px;
    left      : -40px;
    transform : rotate(-30deg);
  }

  .circuit-decoration.right {
    bottom    : 20px;
    right     : -40px;
    transform : rotate(150deg);
  }

  /* \u54CD\u5E94\u5F0F\u8C03\u6574 */
  @media (max-width : 600px) {
    .modal-content {
      padding : 20px;
    }

    .glitch-prize-title {
      font-size : 1.5rem;
    }

    .prize-name {
      font-size : 1.8rem;
    }

    .prize-message {
      font-size : 1.1rem;
    }

    .highlight-text {
      font-size : 1.4rem;
    }
  }
`]))),X=p=>{var y=p.active,b=(0,e.useRef)(null),v=(0,e.useState)([]),w=(0,x.Z)(v,2),N=w[0],S=w[1];return(0,e.useEffect)(()=>{if(!(!y||!b.current)){var s=b.current,u=s.getContext("2d");s.width=window.innerWidth,s.height=window.innerHeight;var I=()=>{for(var g=[],i=["#FF00FF","#00FFFF","#FF003C","#FFFF00","#00FF9F"],D=0;D<150;D++)g.push({x:Math.random()*s.width,y:Math.random()*s.height-s.height,size:Math.random()*15+5,color:i[Math.floor(Math.random()*i.length)],speed:Math.random()*3+2,rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*2,opacity:1});return g};S(I());var A=()=>{u.clearRect(0,0,s.width,s.height),S(g=>g.map(i=>(i.y+=i.speed,i.rotation+=i.rotationSpeed,i.opacity-=.005,u.save(),u.translate(i.x,i.y),u.rotate(i.rotation*Math.PI/180),u.globalAlpha=i.opacity,u.fillStyle=i.color,u.fillRect(-i.size/2,-i.size/4,i.size,i.size/2),u.restore(),i)).filter(i=>i.opacity>0&&i.y<s.height)),N.length>0&&requestAnimationFrame(A)},k=requestAnimationFrame(A);return()=>cancelAnimationFrame(k)}},[y,N.length]),y?e.createElement("canvas",{ref:b,className:"confetti-canvas"}):null},J=()=>{var p=(0,e.useRef)(null),y=(0,e.useState)(0),b=(0,x.Z)(y,2),v=b[0],w=b[1],N=(0,e.useState)(!1),S=(0,x.Z)(N,2),s=S[0],u=S[1],I=(0,e.useState)(null),A=(0,x.Z)(I,2),k=A[0],g=A[1],i=(0,e.useState)(!1),D=(0,x.Z)(i,2),Q=D[0],T=D[1],$=["#FF003C","#00FFFF","#8400FF","#FF9000","#00FF9F","#FFFF00","#FF00FF","#0062FF"],Fn=[{name:"\u7761\u4E09\u5206\u949F\uFF0C\u6E9C\u8FBE\u4E03\u5206\u949F",weight:5},{name:"\u55E8\u76AE\u4E09\u5206\u949F\uFF0C\u7761\u4E03\u5206\u949F",weight:5},{name:"\u7761\u5341\u5206\u949F",weight:5},{name:"\u77619\u5206\u949F",weight:5},{name:"\u77618\u5206\u949F",weight:5},{name:"\u77617\u5206\u949F",weight:5},{name:"\u77616\u5206\u949F",weight:5},{name:"\u77615\u5206\u949F",weight:5}],_=[{name:"\u55E8\u76AE\u56DB\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(4),"\uFF0C\u7761 \u516D ").concat(d.\u7761\u4F4D),weight:5*3},{name:"\u55E8\u76AE\u4E09\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(3),"\uFF0C\u7761 \u4E03 ").concat(d.\u7761\u4F4D),weight:15/3},{name:"\u55E8\u76AE\u4E8C\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(2),"\uFF0C\u7761 \u516B ").concat(d.\u7761\u4F4D),weight:5}].map((o,n)=>(0,m.Z)((0,m.Z)({},o),{},{color:$[n],textColor:n%2==0?"#FFFFFF":"#000000"})),L=()=>{var o=_.reduce((a,t)=>a+t.weight,0),n=0;return _.map(a=>{var t=a.weight/o*360,r=n;return n+=t,(0,m.Z)((0,m.Z)({},a),{},{startAngle:r,endAngle:n,angle:t})})},q=L(),Z=()=>{var o=p.current;if(!!o){var n=o.getContext("2d"),a=o.width/2,t=o.height/2,r=Math.min(a,t)-10;n.clearRect(0,0,o.width,o.height),n.save();var h=n.createRadialGradient(a,t,0,a,t,r*1.2);h.addColorStop(0,"rgba(50, 30, 100, 0.3)"),h.addColorStop(1,"rgba(10, 5, 20, 0)"),n.fillStyle=h,n.fillRect(0,0,o.width,o.height),n.restore(),q.forEach(F=>{var z=(F.startAngle+v)*Math.PI/180,R=(F.endAngle+v)*Math.PI/180;n.save(),n.beginPath(),n.moveTo(a,t),n.arc(a,t,r,z,R),n.closePath();var E=n.createRadialGradient(a,t,r*.5,a,t,r);E.addColorStop(0,F.color),E.addColorStop(1,G(F.color,-30)),n.fillStyle=E,n.fill(),n.lineWidth=2,n.strokeStyle=G(F.color,50),n.shadowColor=F.color,n.shadowBlur=15,n.stroke(),n.restore(),n.save(),n.translate(a,t),n.rotate(z+(R-z)/2),n.textAlign="right",n.fillStyle=F.textColor,n.font='bold 16px "Orbitron", sans-serif',n.shadowColor="rgba(0, 0, 0, 0.8)",n.shadowBlur=4,n.fillText(F.name,r-15,5),n.restore(),n.save(),n.globalAlpha=.1,n.beginPath();for(var B=0;B<F.angle;B+=5){var M=(F.startAngle+B+v)*Math.PI/180;n.moveTo(a,t),n.lineTo(a+Math.cos(M)*r,t+Math.sin(M)*r)}n.strokeStyle="#FFFFFF",n.lineWidth=.5,n.stroke(),n.restore()}),n.save(),n.beginPath(),n.arc(a,t,r*.1,0,Math.PI*2);var f=n.createRadialGradient(a,t,0,a,t,r*.1);f.addColorStop(0,"#00FFFF"),f.addColorStop(1,"#0062FF"),n.fillStyle=f,n.shadowColor="#00FFFF",n.shadowBlur=15,n.fill(),n.lineWidth=2,n.strokeStyle="#FFFFFF",n.stroke(),n.restore(),n.save(),n.beginPath(),n.arc(a,t,r+5,0,Math.PI*2),n.lineWidth=8;var c=n.createLinearGradient(a-r,t-r,a+r,t+r);c.addColorStop(0,"#FF003C"),c.addColorStop(.33,"#00FFFF"),c.addColorStop(.66,"#FF00FF"),c.addColorStop(1,"#FF003C"),n.strokeStyle=c,n.shadowColor="#FF003C",n.shadowBlur=15,n.stroke(),n.restore(),n.save(),n.beginPath(),n.moveTo(a,t-r-15),n.lineTo(a-10,t-r+10),n.lineTo(a+10,t-r+10),n.closePath(),n.fillStyle="#FF003C",n.shadowColor="#FF003C",n.shadowBlur=15,n.fill(),n.restore()}};function G(o,n){var a=parseInt(o.substring(1,3),16),t=parseInt(o.substring(3,5),16),r=parseInt(o.substring(5,7),16);a=parseInt(String(a*(100+n)/100)),t=parseInt(String(t*(100+n)/100)),r=parseInt(String(r*(100+n)/100)),a=a<255?a:255,t=t<255?t:255,r=r<255?r:255;var h=a.toString(16).length===1?"0"+a.toString(16):a.toString(16),f=t.toString(16).length===1?"0"+t.toString(16):t.toString(16),c=r.toString(16).length===1?"0"+r.toString(16):r.toString(16);return"#"+h+f+c}var nn=()=>{if(!s){u(!0),g(null),T(!1);for(var o=_.reduce((O,W)=>O+W.weight,0),n=Math.random()*o,a=0,t=0,r=0;r<_.length;r++)if(a+=_[r].weight,n<=a){t=r;break}var h=_[t],f=5,c=360*f,F=L(),z=F[t].startAngle+F[t].angle/2,R=0+Math.random()*1,E=F[t].angle*R,B=Math.random()*E-E/2,M=c+(270-z)+B,en=0,tn=Date.now(),K=5e3;w(0);var U=()=>{var O=Date.now(),W=O-tn;if(W<K){var an=sn=>1-Math.pow(1-sn,3),rn=an(W/K),on=en+M*rn;w(on%360),requestAnimationFrame(U)}else w(M%360),u(!1),g(h.name),T(!0)};requestAnimationFrame(U)}};return(0,e.useEffect)(()=>{Z()},[v]),(0,e.useEffect)(()=>{var o=()=>{p.current&&(p.current.width=p.current.offsetWidth,p.current.height=p.current.offsetHeight,Z())};return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[]),e.createElement(V,null,e.createElement("div",{className:"body"},e.createElement("div",{className:"lucky-wheel-container"},e.createElement("div",{className:"glitch-title"},e.createElement("span",null,"\u8D5B\u535A\u670B\u514B\u62BD\u5956\u8F6C\u76D8")),e.createElement("div",{className:"wheel-container"},e.createElement("canvas",{ref:p,className:"wheel-canvas"})),e.createElement("button",{className:"spin-button ".concat(s?"disabled":""),onClick:nn,disabled:s},e.createElement("span",{className:"button-text"},s?"\u65CB\u8F6C\u4E2D...":"\u5F00\u59CB\u62BD\u5956"),e.createElement("span",{className:"button-glitch"})),k&&e.createElement("div",{className:"winner-modal"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("div",{className:"cyber-line"}),e.createElement("h2",{className:"glitch-prize-title"},"\u4E2D\u5956\u7ED3\u679C"),e.createElement("div",{className:"cyber-line"})),e.createElement("div",{className:"prize-hologram"},e.createElement("div",{className:"hologram-circle"}),e.createElement("div",{className:"prize-name"},k)),e.createElement("div",{className:"prize-message"},e.createElement("span",{className:"blink-text"},"\u606D\u559C\u60A8"),e.createElement("span",{className:"cyber-text"},"\u6210\u529F\u83B7\u5F97"),e.createElement("span",{className:"highlight-text"},k),e.createElement("span",{className:"cyber-text"},d.\u55E8\u76AE\u91CD\u8981\u5907\u6CE8),e.createElement("span",{className:"blink-text"},e.createElement("pre",null,d.\u55E8\u76AE\u5907\u6CE8))),e.createElement("button",{className:"close-button",onClick:()=>g(null)},e.createElement("span",{className:"btn-text"},"\u786E\u8BA4"),e.createElement("span",{className:"btn-glow"})),e.createElement("div",{className:"circuit-decoration left"}),e.createElement("div",{className:"circuit-decoration right"}))),e.createElement(X,{active:Q}))))}}}]);
