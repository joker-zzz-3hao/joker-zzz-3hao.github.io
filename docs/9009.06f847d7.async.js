(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9009],{749009:function(sn,Y,x){"use strict";x.d(Y,{t:function(){return d},r:function(){return X}});var B=x(311849),_=x(194657),K=x(720310),e=x(667294),U=x(398951),I,d={\u55E8\u76AE\u4F4D:l=>"".concat(l,"\u4E2A"),\u55E8\u76AE\u5907\u6CE8:`\u4EF0\u5934\uFF0C\u540C\u65F6\u5BFB\u627E\u767D\u566A\u97F3
\u653E\u677E\uFF08\u4E3A\u4E4B\u540E\u7684\u7761\u505A\u51C6\u5907\uFF09\u3001
\uFF08\u5927\u8111\u653E\u7A7A\u3002\u56DE\u5230\u5B87\u5B99\uFF09
\u770B\u624B\u673A\u65F6\uFF0C\u4FA7\u5934(\u65E0\u538B)\u3001\u800C\u4E0D\u4F4E\u5934(\u9519\u8BEF\u4FDD\u6301\u538B\u529B)
\uFF08\u5982\u679C\u8981\u66F4\u8212\u670D\u7684\uFF1A\u5DE6\u817F\u4FA7\u523030\u5EA6\uFF0C\u524D\u811A\u638C\u7740\u5730\u540E\u811A\u8DDF\u7ACB\u8D77\uFF0C\u53F3\u811A\u7AD9\u7ACB\uFF09
`.trim(),\u55E8\u76AE\u91CD\u8981\u5907\u6CE8:"\u82CF\u9192\u548C\u590D\u6D3B",\u7761\u4F4D:"* 10\u4E0B"},H=U.ZP.div(I||(I=(0,K.Z)([`
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
`]))),V=l=>{var E=l.active,h=(0,e.useRef)(null),f=(0,e.useState)([]),b=(0,_.Z)(f,2),M=b[0],C=b[1];return(0,e.useEffect)(()=>{if(!(!E||!h.current)){var s=h.current,p=s.getContext("2d");s.width=window.innerWidth,s.height=window.innerHeight;var R=()=>{for(var c=[],i=["#FF00FF","#00FFFF","#FF003C","#FFFF00","#00FF9F"],k=0;k<150;k++)c.push({x:Math.random()*s.width,y:Math.random()*s.height-s.height,size:Math.random()*15+5,color:i[Math.floor(Math.random()*i.length)],speed:Math.random()*3+2,rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*2,opacity:1});return c};C(R());var y=()=>{p.clearRect(0,0,s.width,s.height),C(c=>c.map(i=>(i.y+=i.speed,i.rotation+=i.rotationSpeed,i.opacity-=.005,p.save(),p.translate(i.x,i.y),p.rotate(i.rotation*Math.PI/180),p.globalAlpha=i.opacity,p.fillStyle=i.color,p.fillRect(-i.size/2,-i.size/4,i.size,i.size/2),p.restore(),i)).filter(i=>i.opacity>0&&i.y<s.height)),M.length>0&&requestAnimationFrame(y)},S=requestAnimationFrame(y);return()=>cancelAnimationFrame(S)}},[E,M.length]),E?e.createElement("canvas",{ref:h,className:"confetti-canvas"}):null},X=()=>{var l=(0,e.useRef)(null),E=(0,e.useState)(0),h=(0,_.Z)(E,2),f=h[0],b=h[1],M=(0,e.useState)(!1),C=(0,_.Z)(M,2),s=C[0],p=C[1],R=(0,e.useState)(null),y=(0,_.Z)(R,2),S=y[0],c=y[1],i=(0,e.useState)(!1),k=(0,_.Z)(i,2),J=k[0],j=k[1],Q=["#FF003C","#00FFFF","#8400FF","#FF9000","#00FF9F","#FFFF00","#FF00FF","#0062FF"],Fn=[{name:"\u7761\u4E09\u5206\u949F\uFF0C\u6E9C\u8FBE\u4E03\u5206\u949F",weight:5},{name:"\u55E8\u76AE\u4E09\u5206\u949F\uFF0C\u7761\u4E03\u5206\u949F",weight:5},{name:"\u7761\u5341\u5206\u949F",weight:5},{name:"\u77619\u5206\u949F",weight:5},{name:"\u77618\u5206\u949F",weight:5},{name:"\u77617\u5206\u949F",weight:5},{name:"\u77616\u5206\u949F",weight:5},{name:"\u77615\u5206\u949F",weight:5}],v=[{name:"\u55E8\u76AE\u56DB\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(4),"\uFF0C\u7761 \u516D ").concat(d.\u7761\u4F4D),weight:5*3},{name:"\u55E8\u76AE\u4E09\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(3),"\uFF0C\u7761 \u4E03 ").concat(d.\u7761\u4F4D),weight:15/3},{name:"\u55E8\u76AE\u4E8C\u5206\u949F ".concat(d.\u55E8\u76AE\u4F4D(2),"\uFF0C\u7761 \u516B ").concat(d.\u7761\u4F4D),weight:5}].map((o,n)=>(0,B.Z)((0,B.Z)({},o),{},{color:Q[n],textColor:n%2==0?"#FFFFFF":"#000000"})),O=()=>{var o=v.reduce((a,t)=>a+t.weight,0),n=0;return v.map(a=>{var t=a.weight/o*360,r=n;return n+=t,(0,B.Z)((0,B.Z)({},a),{},{startAngle:r,endAngle:n,angle:t})})},$=O(),T=()=>{var o=l.current;if(!!o){var n=o.getContext("2d"),a=o.width/2,t=o.height/2,r=Math.min(a,t)-10;n.clearRect(0,0,o.width,o.height),n.save();var m=n.createRadialGradient(a,t,0,a,t,r*1.2);m.addColorStop(0,"rgba(50, 30, 100, 0.3)"),m.addColorStop(1,"rgba(10, 5, 20, 0)"),n.fillStyle=m,n.fillRect(0,0,o.width,o.height),n.restore(),$.forEach(F=>{var A=(F.startAngle+f)*Math.PI/180,P=(F.endAngle+f)*Math.PI/180;n.save(),n.beginPath(),n.moveTo(a,t),n.arc(a,t,r,A,P),n.closePath();var w=n.createRadialGradient(a,t,r*.5,a,t,r);w.addColorStop(0,F.color),w.addColorStop(1,Z(F.color,-30)),n.fillStyle=w,n.fill(),n.lineWidth=2,n.strokeStyle=Z(F.color,50),n.shadowColor=F.color,n.shadowBlur=15,n.stroke(),n.restore(),n.save(),n.translate(a,t),n.rotate(A+(P-A)/2),n.textAlign="right",n.fillStyle=F.textColor,n.font='bold 16px "Orbitron", sans-serif',n.shadowColor="rgba(0, 0, 0, 0.8)",n.shadowBlur=4,n.fillText(F.name,r-15,5),n.restore(),n.save(),n.globalAlpha=.1,n.beginPath();for(var D=0;D<F.angle;D+=5){var z=(F.startAngle+D+f)*Math.PI/180;n.moveTo(a,t),n.lineTo(a+Math.cos(z)*r,t+Math.sin(z)*r)}n.strokeStyle="#FFFFFF",n.lineWidth=.5,n.stroke(),n.restore()}),n.save(),n.beginPath(),n.arc(a,t,r*.1,0,Math.PI*2);var g=n.createRadialGradient(a,t,0,a,t,r*.1);g.addColorStop(0,"#00FFFF"),g.addColorStop(1,"#0062FF"),n.fillStyle=g,n.shadowColor="#00FFFF",n.shadowBlur=15,n.fill(),n.lineWidth=2,n.strokeStyle="#FFFFFF",n.stroke(),n.restore(),n.save(),n.beginPath(),n.arc(a,t,r+5,0,Math.PI*2),n.lineWidth=8;var u=n.createLinearGradient(a-r,t-r,a+r,t+r);u.addColorStop(0,"#FF003C"),u.addColorStop(.33,"#00FFFF"),u.addColorStop(.66,"#FF00FF"),u.addColorStop(1,"#FF003C"),n.strokeStyle=u,n.shadowColor="#FF003C",n.shadowBlur=15,n.stroke(),n.restore(),n.save(),n.beginPath(),n.moveTo(a,t-r-15),n.lineTo(a-10,t-r+10),n.lineTo(a+10,t-r+10),n.closePath(),n.fillStyle="#FF003C",n.shadowColor="#FF003C",n.shadowBlur=15,n.fill(),n.restore()}};function Z(o,n){var a=parseInt(o.substring(1,3),16),t=parseInt(o.substring(3,5),16),r=parseInt(o.substring(5,7),16);a=parseInt(String(a*(100+n)/100)),t=parseInt(String(t*(100+n)/100)),r=parseInt(String(r*(100+n)/100)),a=a<255?a:255,t=t<255?t:255,r=r<255?r:255;var m=a.toString(16).length===1?"0"+a.toString(16):a.toString(16),g=t.toString(16).length===1?"0"+t.toString(16):t.toString(16),u=r.toString(16).length===1?"0"+r.toString(16):r.toString(16);return"#"+m+g+u}var q=()=>{if(!s){p(!0),c(null),j(!1);for(var o=v.reduce((W,N)=>W+N.weight,0),n=Math.random()*o,a=0,t=0,r=0;r<v.length;r++)if(a+=v[r].weight,n<=a){t=r;break}var m=v[t],g=5,u=360*g,F=O(),A=F[t].startAngle+F[t].angle/2,P=0+Math.random()*1,w=F[t].angle*P,D=Math.random()*w-w/2,z=u+(270-A)+D,nn=0,en=Date.now(),G=5e3;b(0);var L=()=>{var W=Date.now(),N=W-en;if(N<G){var tn=on=>1-Math.pow(1-on,3),an=tn(N/G),rn=nn+z*an;b(rn%360),requestAnimationFrame(L)}else b(z%360),p(!1),c(m.name),j(!0)};requestAnimationFrame(L)}};return(0,e.useEffect)(()=>{T()},[f]),(0,e.useEffect)(()=>{var o=()=>{l.current&&(l.current.width=l.current.offsetWidth,l.current.height=l.current.offsetHeight,T())};return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[]),e.createElement(H,null,e.createElement("div",{className:"body"},e.createElement("div",{className:"lucky-wheel-container"},e.createElement("div",{className:"glitch-title"},e.createElement("span",null,"\u8D5B\u535A\u670B\u514B\u62BD\u5956\u8F6C\u76D8")),e.createElement("div",{className:"wheel-container"},e.createElement("canvas",{ref:l,className:"wheel-canvas"})),e.createElement("button",{className:"spin-button ".concat(s?"disabled":""),onClick:q,disabled:s},e.createElement("span",{className:"button-text"},s?"\u65CB\u8F6C\u4E2D...":"\u5F00\u59CB\u62BD\u5956"),e.createElement("span",{className:"button-glitch"})),S&&e.createElement("div",{className:"winner-modal"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("div",{className:"cyber-line"}),e.createElement("h2",{className:"glitch-prize-title"},"\u4E2D\u5956\u7ED3\u679C"),e.createElement("div",{className:"cyber-line"})),e.createElement("div",{className:"prize-hologram"},e.createElement("div",{className:"hologram-circle"}),e.createElement("div",{className:"prize-name"},S)),e.createElement("div",{className:"prize-message"},e.createElement("span",{className:"blink-text"},"\u606D\u559C\u60A8"),e.createElement("span",{className:"cyber-text"},"\u6210\u529F\u83B7\u5F97"),e.createElement("span",{className:"highlight-text"},S),e.createElement("span",{className:"cyber-text"},d.\u55E8\u76AE\u91CD\u8981\u5907\u6CE8),e.createElement("span",{className:"blink-text"},e.createElement("pre",null,d.\u55E8\u76AE\u5907\u6CE8))),e.createElement("button",{className:"close-button",onClick:()=>c(null)},e.createElement("span",{className:"btn-text"},"\u786E\u8BA4"),e.createElement("span",{className:"btn-glow"})),e.createElement("div",{className:"circuit-decoration left"}),e.createElement("div",{className:"circuit-decoration right"}))),e.createElement(V,{active:J}))))}}}]);
