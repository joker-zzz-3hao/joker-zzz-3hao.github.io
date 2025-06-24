(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6948,4726],{629102:function(xu,du,r){"use strict";r.d(du,{q:function(){return k}});var G=r(203182),uu=r(329192),ou=r(868135);function Cu(){return Zu.apply(this,arguments)}function Zu(){return Zu=(0,G.Z)(function*(){var S=yield Promise.resolve().then(r.bind(r,56144));return S}),Zu.apply(this,arguments)}class k{static _easy_cmdExec(){var F=arguments;return(0,G.Z)(function*(){return(yield Cu()).Cmd____Ipc_Renderer____Helper.scenes\u5404\u79CD\u573A\u666F_Map.Windows_\u4E00\u822C\u672C\u5730\u6307\u4EE4.renderer\u7528\u6237\u7F51\u9875.send\u540C\u6B65\u53EF\u76F4\u63A5\u5F97\u5230\u7ED3\u679C(...F)})()}static _escape_in_powershell(F){return F.replaceAll('"','""""').replaceAll("'","''")}static _get_cmd_Run_PowerShell_\u6267\u884C\u547D\u4EE4(F){return'PowerShell -Command "'.concat(this._escape_in_powershell(F),'"')}static _set_changeScreenBrightness_\u6539\u53D8\u5C4F\u5E55\u4EAE\u5EA6(F,i){var X=this;return(0,G.Z)(function*(){var q=20,N=!1;function u(Y){return ru.apply(this,arguments)}function ru(){return ru=(0,G.Z)(function*(Y){var x=k._get_cmd_Run_PowerShell_\u6267\u884C\u547D\u4EE4("(Get-WmiObject -Namespace root/WMI -Class WmiMonitorBrightnessMethods).WmiSetBrightness( ".concat(q," , ").concat(Y," )")),C=k._easy_cmdExec(x);return N?k.bright_state.pre_bright=Y:k.bright_state.pre_bright=F,C}),ru.apply(this,arguments)}return X.bright_state.pre_bright===F||X.bright_state.pre_is_changing?Promise.resolve("\u548C\u4E4B\u524D\u7684\u4EAE\u5EA6\u503C\uFF0C\u6CA1\u6709\u6539\u53D8"):new Promise(function(){var Y=(0,G.Z)(function*(x,C){var m="\u672A\u521D\u59CB\u5316",z=i===1,c=F!==100&&F!==1;if(z||c){m=yield u(F),x(m);return}else yield*function*(){var P,L;switch(L=Math.floor(100/i),F){case 100:{P=0,L*=1;break}case 1:{P=100,L*=-1;break}default:throw new Error("\u5176\u4ED6\u503C\uFF0C\u5E94\u8BE5\u4E25\u683C\u610F\u4E49\u4E0A\u4E0D\u5B58\u5728")}k.bright_state.pre_is_changing=!0,P+=L;do yield(0,uu.__wait_async_fn_\u539F\u7406\u662FsetTimeout_\u6267\u884C\u65B9\u6CD5_\u4F34\u968F\u7740\u7B49\u5F85\u82E5\u5E72\u79D2)((0,G.Z)(function*(){m=yield u(P)}),{after_wait_ms:1e3}),P+=L;while(0<=P&&P<=100);k.bright_state.pre_is_changing=!1,x(m)}()});return function(x,C){return Y.apply(this,arguments)}}())})()}static _closeScreen(){var F=this;return(0,G.Z)(function*(){var i=yield F._easy_cmdExec(F._get_cmd_Run_PowerShell_\u6267\u884C\u547D\u4EE4(`(Add-Type '[DllImport("user32.dll")]public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2)`));return i})()}static _speaker__Beep\u53D1\u51FA\u8F7B\u54CD(F){return(0,G.Z)(function*(){var i=F._volume_\u97F3\u91CF_0\u5230100,X={_\u9891\u7387:140,_\u65F6\u95F4:1e3},q="[System.Console]::Beep(".concat(X._\u9891\u7387,", ").concat(X._\u65F6\u95F4,")"),N="rundll32.exe Kernel32.dll,Beep 750,300",u="rundll32.exe cmdext.dll,MessageBeepStub",ru="rundll32 user32.dll,MessageBeep",Y="echo \x07 ",x={hello:"Hello China"},C=`mshta "javascript:code(close((V=(v=new ActiveXObject('SAPI.SpVoice')).GetVoices()).count&&v.Speak('`.concat(x.hello,`')))"`),m="  \u201C InpOut32\u201C\u662F\u4E00\u4E2A\u5F00\u6E90 Windows DLL \u548C\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE\u786C\u4EF6\u7AEF\u53E3\u201D  ";function z(){return c.apply(this,arguments)}function c(){return c=(0,G.Z)(function*(){var P=i,L=yield k._set_audio_volume_level_\u8BBE\u7F6E\u97F3\u91CF________\u4F3C\u4E4E_\u65E0\u6CD5\u83B7\u53D6\u97F3\u91CF\u5927\u5C0F({_volume_\u97F3\u91CF_0\u5230100:P,_method_\u53D8\u5316\u65B9\u5F0F:"\u53D8\u5316\u76F8\u5BF9\u503C"}),Eu=yield k._easy_cmdExec(k._get_cmd_Run_PowerShell_\u6267\u884C\u547D\u4EE4(q));setTimeout((0,G.Z)(function*(){var Iu=yield k._set_audio_volume_level_\u8BBE\u7F6E\u97F3\u91CF________\u4F3C\u4E4E_\u65E0\u6CD5\u83B7\u53D6\u97F3\u91CF\u5927\u5C0F({_volume_\u97F3\u91CF_0\u5230100:P*-1,_method_\u53D8\u5316\u65B9\u5F0F:"\u53D8\u5316\u76F8\u5BF9\u503C"})}),0)}),c.apply(this,arguments)}yield z()})()}static _set_audio_volume_level_\u8BBE\u7F6E\u97F3\u91CF________\u4F3C\u4E4E_\u65E0\u6CD5\u83B7\u53D6\u97F3\u91CF\u5927\u5C0F(F){return(0,G.Z)(function*(){var i=F._volume_\u97F3\u91CF_0\u5230100,X=F._method_\u53D8\u5316\u65B9\u5F0F;function q(){}function N(){return u.apply(this,arguments)}function u(){return u=(0,G.Z)(function*(){var ru="".concat(ou.E,"   setsysvolume        ").concat(65535*i/100),Y="".concat(ou.E,"   changesysvolume     ").concat(65535*i/100),x="".concat(ou.E,"   mutesysvolume   1"),C="".concat(ou.E,"   mutesysvolume   0");switch(X){case"\u76F4\u8BBE\u7EDD\u5BF9\u503C":var m=yield k._easy_cmdExec(C),z=yield k._easy_cmdExec(ru);break;case"\u53D8\u5316\u76F8\u5BF9\u503C":var c=yield k._easy_cmdExec(C),P=yield k._easy_cmdExec(Y);break;case"\u9759\u97F3":var L=yield k._easy_cmdExec(x);break;default:throw new Error("\u672A\u4F20\u503C")}}),u.apply(this,arguments)}yield N()})()}static _\u65F6\u95F4____Time\u8BBE\u7F6E\u65F6\u5206\u79D2(F){var i=this;return(0,G.Z)(function*(){var X="time ".concat(F);yield i._easy_cmdExec(X)})()}static _\u65F6\u95F4____Date\u8BBE\u7F6E\u5E74\u6708\u65E5____\u683C\u5F0F\u9519\u8BEF\u4F1A\u5BFC\u81F4Blocking\u963B\u585E(F){var i=this;return(0,G.Z)(function*(){var X="date ".concat(F);yield i._easy_cmdExec(X)})()}static _\u65F6\u95F4____Resync\u540C\u6B65\u65F6\u95F4(){var F=this;return(0,G.Z)(function*(){var i="w32tm  /resync";yield F._easy_cmdExec(i)})()}static _Open_AdobeAcrobat_PDF_\u67D0\u4E00\u9875Page(F){var i=arguments,X=this;return(0,G.Z)(function*(){var q=i.length>1&&i[1]!==void 0?i[1]:1,N="D:\\Program_Files\\Adobe_Acrobat_PDF\\Acrobat\\Acrobat.exe",u={\u4EBA\u7C7B_\u793E\u4F1A:"D:\\Users\\Administrator\\Downloads\\Documents\\\u300A\u4E2D\u56FD\u5C11\u5E74\u513F\u7AE5\u767E\u79D1\u5168\u4E66 \u4EBA\u7C7B\xB7\u793E\u4F1A\u300B.pdf"},ru="    ".concat(N,'    /A  "page=').concat(q,'"    "').concat(u[F],'"    ');return yield X._easy_cmdExec(ru)})()}}k._Admin_\u60C5\u51B5={____\u5904\u7406_\u4E00\u4E2A\u81F4\u547D\u7684\u95EE\u9898_CMD\u6267\u884C\u65B0\u7A97\u53E3_\u603B\u662F\u4E00\u95EA\u800C\u8FC7_\u54EA\u6015\u7528EV\u5F55\u5C4F\u9010\u5E27_\u4E5F\u770B\u4E0D\u6E05\u695A________\u540E\u6765\u53D1\u73B0_\u53EF\u4EE5\u5C06\u6240\u6709out\u8F93\u51FA_\u91CD\u5B9A\u5411\u5230\u6587\u4EF6________\u6210\u529F_\u53EF\u7528(S){return"".concat(S,"    > a.txt    2>&1    ")},____\u8FD9\u4E2A\u547D\u4EE4_\u7528bat\u6267\u884C\u4F1A\u62A5\u9519____\u7528cmd\u76F4\u63A5\u6267\u884C\u4E0D\u4F1A\u62A5\u9519____________(){var S=k._Admin_\u60C5\u51B5._get_cmd_inAdmin_____\u901A\u8FC7PowerShell\u591A\u91CD\u5D4C\u5957\u7684\u65B9\u5F0F________\u6210\u529F_\u53EF\u7528("python a.py")},____Electron\u53BB\u6267\u884C_\u62A5\u6743\u9650\u62D2\u7EDD\u7684\u9519\u8BEF____________\u666E\u901Acmd\u53BB\u6267\u884C_\u4E5F\u62A5\u6743\u9650\u62D2\u7EDD\u7684\u9519\u8BEF____________Admin\u6743\u9650\u7684cmd\u53BB\u6267\u884C_\u4E5F\u8FD8\u662F\u62A5\u6743\u9650\u62D2\u7EDD\u7684\u9519\u8BEF____________(){var S=k._Admin_\u60C5\u51B5._get_cmd_inAdmin_____\u901A\u8FC7PowerShell\u591A\u91CD\u5D4C\u5957\u7684\u65B9\u5F0F________\u6210\u529F_\u53EF\u7528("python a.py")},_get_cmd_inAdmin_____\u901A\u8FC7PowerShell\u591A\u91CD\u5D4C\u5957\u7684\u65B9\u5F0F________\u6210\u529F_\u53EF\u7528(S){var F="Start-Process cmd -Verb RunAs -ArgumentList '/c  ".concat(k._escape_in_powershell(S),"  && command -argument'");return'powershell -Command "'.concat(F,'"')},_\u8FD8\u672A\u5C1D\u8BD5\u7684_\u4F7F\u7528\u7B2C3\u65B9\u5DE5\u5177____Admin\u7684NodeJS\u5E93_\u8C03\u7528(S){var F=r(822467),i={name:"Electron",icns:"/Applications/Electron.app/Contents/Resources/Electron.icns"};F.exec(S,i,function(X,q,N){if(X)throw X})}},k.bright_state={pre_bright:100,pre_is_changing:!1}},779228:function(xu,du,r){"use strict";r.d(du,{U:function(){return F}});var G=r(194657),uu=r(203182),ou=r(311849),Cu=r(667294),Zu=r(309923),k=r(485333),S=r(613903),F;(function(i){function X(){var Y="s2-test-container";function x(){var L=(0,ou.Z)((0,ou.Z)({},Zu.R),{},{meta:[{field:"number",name:"\u6570\u91CF"},{field:"province",name:"\u7701\u4EFD"},{field:"city",name:"\u57CE\u5E02"},{field:"type",name:"\u5546\u54C1\u7C7B\u522B"},{field:"sub_type",name:"\u5B50\u7C7B\u522B"}]}),Eu={width:600,height:480,cornerExtraFieldText:"\u81EA\u5B9A\u4E49",interaction:{copy:{enable:!0,withFormat:!0,withHeader:!0}},frozen:{}};return{s2DataConfig:L,s2Options:Eu}}var C=x(),m=C.s2DataConfig,z=C.s2Options;function c(){return P.apply(this,arguments)}function P(){return P=(0,uu.Z)(function*(){var L=document.getElementById(Y),Eu=new k.T(L,m,z);yield Eu.render()}),P.apply(this,arguments)}return{dom:Cu.createElement("div",{id:Y}),_DOM\u539F\u59CB\u65B9\u5F0F:c}}function q(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return(0,ou.Z)((0,ou.Z)({},{hierarchyType:"grid"}),{},{cornerExtraFieldText:"\u81EA\u5B9A\u4E49",interaction:{copy:{enable:!0,withFormat:!0,withHeader:!0}},seriesNumber:{enable:!0,text:"NO."},frozen:{rowHeader:!0},placeholder:{empty:{icon:"Empty",description:"\u6682\u65E0\u6570\u636E"}}})}function N(Y,x){var C=Object.entries(x).reduce((m,z)=>{var c=(0,G.Z)(z,2),P=c[0],L=c[1];return L.forEach(Eu=>{m[Eu]=Number(P)}),m},{});return{colCell:{width:Y,widthByField:(0,ou.Z)({},C)}}}i._getStyle_quickWidth_\u884C\u5217\u5BBD\u9AD8=N;class u{static simple_\u751F\u6210(x,C,m){var z=this._\u900F\u89C6\u56FE\u4EA4\u53C9\u8868_transformToS2Data(C,m),c=(0,ou.Z)({},q);return{dataCfg:z,optionCfg:c,type:"pivot"}}static _getMeta(x,C){var m=C;m||(m=Object.fromEntries(x.map(c=>[c,"".concat(c)])));var z=x.map(c=>({field:c,name:m[c]||c}));return z}static _\u900F\u89C6\u56FE\u4EA4\u53C9\u8868_transformToS2Data(x,C){var m=C.rows,z=C.columns,c=C.values,P=C.valueInCols,L=C.describe,Eu=L===void 0?"":L,Iu=C.fieldMapping,wu=[...m,...z,...c],Mu=this._getMeta(wu,Iu);return{describe:Eu,fields:{rows:m,columns:z,values:c,valueInCols:P},meta:Mu,data:x.data}}}i._\u900F\u89C6\u56FE\u4EA4\u53C9\u8868=u;class ru{static simple_\u751F\u6210_cfg(x,C,m){var z=this.getData(C,m),c=(0,ou.Z)((0,ou.Z)({width:600*2,height:480*2},q),m.option\u589E\u52A0\u9009\u9879);return{dataCfg:z,optionCfg:c,type:"table"}}static simple_\u751F\u6210_cp(x,C,m){var z=F._\u660E\u7EC6\u56FE\u666E\u901A\u8868.simple_\u751F\u6210_cfg(x,C,m),c=z.dataCfg,P=z.optionCfg,L=z.type;return Cu.createElement(S.dZ,{sheetType:L,dataCfg:c,options:P,onMounted:Eu=>{},onUpdate:Eu=>Eu,onUpdateAfterRender:Eu=>{}})}static getData(x,C){var m=C.describe,z=C.fieldMapping,c=[...new Set(x.data.map(L=>Object.keys(L)).flat(9))],P=u._getMeta(c,z);return{describe:m,fields:{columns:c},meta:P,data:x.data}}}i._\u660E\u7EC6\u56FE\u666E\u901A\u8868=ru})(F||(F={}))},309923:function(xu,du,r){"use strict";r.d(du,{R:function(){return G},P:function(){return uu}});var G={describe:"\u6807\u51C6\u4EA4\u53C9\u8868\u6570\u636E\u3002",fields:{rows:["province","city"],columns:["type","sub_type"],values:["number"],valueInCols:!0},meta:[{field:"number",name:"\u6570\u91CF"},{field:"province",name:"\u7701\u4EFD"},{field:"city",name:"\u57CE\u5E02"},{field:"type",name:"\u7C7B\u522B"},{field:"sub_type",name:"\u5B50\u7C7B\u522B"}],data:[{number:7789,province:"\u6D59\u6C5F\u7701",city:"\u676D\u5DDE\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:2367,province:"\u6D59\u6C5F\u7701",city:"\u7ECD\u5174\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:3877,province:"\u6D59\u6C5F\u7701",city:"\u5B81\u6CE2\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:4342,province:"\u6D59\u6C5F\u7701",city:"\u821F\u5C71\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:5343,province:"\u6D59\u6C5F\u7701",city:"\u676D\u5DDE\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:632,province:"\u6D59\u6C5F\u7701",city:"\u7ECD\u5174\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:7234,province:"\u6D59\u6C5F\u7701",city:"\u5B81\u6CE2\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:834,province:"\u6D59\u6C5F\u7701",city:"\u821F\u5C71\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:945,province:"\u6D59\u6C5F\u7701",city:"\u676D\u5DDE\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:1304,province:"\u6D59\u6C5F\u7701",city:"\u7ECD\u5174\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:1145,province:"\u6D59\u6C5F\u7701",city:"\u5B81\u6CE2\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:1432,province:"\u6D59\u6C5F\u7701",city:"\u821F\u5C71\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:1343,province:"\u6D59\u6C5F\u7701",city:"\u676D\u5DDE\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:1354,province:"\u6D59\u6C5F\u7701",city:"\u7ECD\u5174\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:1523,province:"\u6D59\u6C5F\u7701",city:"\u5B81\u6CE2\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:1634,province:"\u6D59\u6C5F\u7701",city:"\u821F\u5C71\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:1723,province:"\u56DB\u5DDD\u7701",city:"\u6210\u90FD\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:1822,province:"\u56DB\u5DDD\u7701",city:"\u7EF5\u9633\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:1943,province:"\u56DB\u5DDD\u7701",city:"\u5357\u5145\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:2330,province:"\u56DB\u5DDD\u7701",city:"\u4E50\u5C71\u5E02",type:"\u5BB6\u5177",sub_type:"\u684C\u5B50"},{number:2451,province:"\u56DB\u5DDD\u7701",city:"\u6210\u90FD\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:2244,province:"\u56DB\u5DDD\u7701",city:"\u7EF5\u9633\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:2333,province:"\u56DB\u5DDD\u7701",city:"\u5357\u5145\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:2445,province:"\u56DB\u5DDD\u7701",city:"\u4E50\u5C71\u5E02",type:"\u5BB6\u5177",sub_type:"\u6C99\u53D1"},{number:2335,province:"\u56DB\u5DDD\u7701",city:"\u6210\u90FD\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:245,province:"\u56DB\u5DDD\u7701",city:"\u7EF5\u9633\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:2457,province:"\u56DB\u5DDD\u7701",city:"\u5357\u5145\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:2458,province:"\u56DB\u5DDD\u7701",city:"\u4E50\u5C71\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7B14"},{number:4004,province:"\u56DB\u5DDD\u7701",city:"\u6210\u90FD\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:3077,province:"\u56DB\u5DDD\u7701",city:"\u7EF5\u9633\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:3551,province:"\u56DB\u5DDD\u7701",city:"\u5357\u5145\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"},{number:352,province:"\u56DB\u5DDD\u7701",city:"\u4E50\u5C71\u5E02",type:"\u529E\u516C\u7528\u54C1",sub_type:"\u7EB8\u5F20"}]},uu={data:[{province:"\u6D59\u6C5F",city:"\u676D\u5DDE",type:"\u7B14",price:1},{province:"\u6D59\u6C5F",city:"\u676D\u5DDE",type:"\u7EB8\u5F20",price:2},{province:"\u6D59\u6C5F",city:"\u821F\u5C71",type:"\u7B14",price:17},{province:"\u6D59\u6C5F",city:"\u821F\u5C71",type:"\u7EB8\u5F20",price:6},{province:"\u5409\u6797",city:"\u957F\u6625",type:"\u7B14",price:8},{province:"\u5409\u6797",city:"\u767D\u5C71",type:"\u7B14",price:12},{province:"\u5409\u6797",city:"\u957F\u6625",type:"\u7EB8\u5F20",price:3},{province:"\u5409\u6797",city:"\u767D\u5C71",type:"\u7EB8\u5F20",price:25},{province:"\u6D59\u6C5F",city:"\u676D\u5DDE",type:"\u7B14",price:20},{province:"\u6D59\u6C5F",city:"\u676D\u5DDE",type:"\u7EB8\u5F20",price:10},{province:"\u6D59\u6C5F",city:"\u821F\u5C71",type:"\u7B14",price:15},{province:"\u6D59\u6C5F",city:"\u821F\u5C71",type:"\u7EB8\u5F20",price:2},{province:"\u5409\u6797",city:"\u957F\u6625",type:"\u7B14",price:15},{province:"\u5409\u6797",city:"\u767D\u5C71",type:"\u7B14",price:30},{province:"\u5409\u6797",city:"\u957F\u6625",type:"\u7EB8\u5F20",price:40},{province:"\u5409\u6797",city:"\u767D\u5C71",type:"\u7EB8\u5F20",price:50}],fields:{columns:["province","city","type","price"]},meta:[{field:"province",name:"\u7701\u4EFD"},{field:"city",name:"\u57CE\u5E02"},{field:"type",name:"\u7C7B\u578B"},{field:"price",name:"\u4EF7\u683C"}]}},750735:function(xu,du,r){"use strict";r.r(du),r.d(du,{_:function(){return _0},default:function(){return W0}});var G=r(613753),uu=r(748429),ou=r(126780),Cu=r(986444),Zu=r(677111),k=r(949194),S=r(203182),F=r(311849),i=r(194657),X=r(84786),q=r(920087),N=r(720310),u=r(667294),ru=r(28991),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},x=Y,C=r(127029),m=function(t,_){return u.createElement(C.Z,(0,ru.Z)((0,ru.Z)({},t),{},{ref:_,icon:x}))};m.displayName="ToolOutlined";var z=u.forwardRef(m),c=r(398951),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"}}]},name:"file-excel",theme:"outlined"},L=P,Eu=function(t,_){return u.createElement(C.Z,(0,ru.Z)((0,ru.Z)({},t),{},{ref:_,icon:L}))};Eu.displayName="FileExcelOutlined";var Iu=u.forwardRef(Eu),wu,Mu,Uu,Vu,Hu,Wu,$u,Ju,Ku,l0=c.ZP.div(wu||(wu=(0,N.Z)([`
  display   : flex;
  margin    : 40px 20px;
  position  : relative;
  flex-wrap : wrap;
  gap       : 20px; // \u5728flex\u9879\u4E4B\u95F4\u6DFB\u52A0\u95F4\u8DDD
`]))),s0=c.ZP.div(Mu||(Mu=(0,N.Z)([`
  min-width      : 200px;
  // max-width: 400px;               // TIP \u4E3A\u4E86\u663E\u793A\u7684\u66F4\u5BBD\u655E\u4E00\u70B9\uFF0C\u6D88\u9664\u6700\u5927\u5BBD\u5EA6\u7684\u9650\u5236\u3002
  flex-grow      : 1;
  // padding        : 20px;
  position       : relative;
  display        : flex;
  flex-direction : column;

  &:not(:last-child)::after {
    content    : '';
    position   : absolute;
    right      : 0;
    top        : 0;
    bottom     : 0;
    width      : 2px;
    background : #e8e8e8;
  }
`]))),B0=c.ZP.div(Uu||(Uu=(0,N.Z)([`
  text-align    : center;
  margin-bottom : 20px;
  font-weight   : bold;
`]))),C0=c.ZP.div(Vu||(Vu=(0,N.Z)([`
  height     : 4px;
  background : #1890ff;
  width      : 100%;
  & {
    min-width : `,`em; // TIP \u4F18\u5316\u5BBD\u5EA6\u3002
    padding   : 0 10em;
  }
  position   : relative;
`])),s=>{var t;return((t=s.tools)!==null&&t!==void 0?t:[]).length*7.5*1.5}),D0=c.ZP.div(Hu||(Hu=(0,N.Z)([`
  position    : relative;
  min-height  : 200px; // \u7ED9\u4E00\u4E2A\u6700\u5C0F\u9AD8\u5EA6\u786E\u4FDD\u89C6\u89C9\u6548\u679C
  & {
    height : `,`px;
  }
  margin      : 40px 0; // \u4E0A\u4E0B\u7559\u51FA\u7A7A\u95F4\u7ED9\u6587\u4EF6\u56FE\u6807
  display     : flex;
  align-items : center; // \u786E\u4FDD\u65F6\u95F4\u8F74\u5728\u5BB9\u5668\u4E2D\u5782\u76F4\u5C45\u4E2D
`])),s=>s.max_result_count*65+47);function Xu(s,t){return()=>Math.min(s/t.length*100,90)}var d0=c.ZP.div(Wu||(Wu=(0,N.Z)([`
  position  : absolute;
  left      : `,`%; // TIP \u91CD\u65B0\u8C03\u6574\uFF0C\u4E00\u4E2A\u5408\u7406\u7684\u5BBD\u5EA6\uFF1F
  top       : 50%;
  transform : translate(-50%, -50%);
  z-index   : 2;
  & {
    min-width      : 10em; // TIP \u7565\u5FAE\u8C03\u6574\uFF0C\u6700\u5C0F\u5BBD\u5EA6
    display        : flex;
    flex-direction : column;
    align-items    : flex-end;
  }

  &:last-child {
    .tool-dot {
      background : #52c41a;
    }
  }

  .tool-dot {
    width         : 12px;
    height        : 12px;
    background    : #1890ff;
    border-radius : 50%;
    & {
      margin       : 0 auto;
      //margin-left : 0; // TIP \u8C03\u6574\u7AD9\u4F4D
      margin-right : 0;
    }
  }

  .tool-name {
    position  : absolute;
    & {
      //width      : 100px;
      //text-align : center;
      width      : 100%;
      text-align : right; // TIP \u8C03\u6574\u7AD9\u4F4D
      //left      : 50%;
      left       : 37%;
    }
    transform : translateX(-50%);
    & {
      // \u539F\u672C\u662F  \u4E0A\u65B9\u7684 top:-25px \uFF1B \u4E0B\u65B9\u7684 top:45px \u3002  \u4F46\u53EF\u4EE5\u5408\u7406\u4FEE\u6539\u4E00\u4E0B\u3002
      // top       : /*$*/{(props : any)=>((props.index % 2 === 0 ? -1 : 1) * 35 + 10)}px;
      `,`
    }
    font-size : 12px;

    & {
      cursor : grab;
    }

    /**
     * \u9884\u671F\u662F\u3010\u9F20\u6807\u653E\u5F00\u3011\u51FA\u73B0\u3010\u6587\u4EF6\u4E0A\u4F20\u7A97\u53E3\u3011\uFF0C\u6B64\u65F6\u6D4F\u89C8\u5668\u5361\u987F  \u80FD\u4FDD\u6301\u9009\u4E2D\u6548\u679C\u3002
     *              \u4F46\u540E\u6765\uFF0C\u53D1\u73B0\u5E76\u4E0D\u597D\u5B9E\u73B0\u3002
     */
    & {
      //            // \u53C2\u8003\u8D44\u6599\uFF1A    transition-timing-function - CSS\uFF1A\u5C42\u53E0\u6837\u5F0F\u8868 | MDN    https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#step-start
      //            transition : outline-color 2s /*cubic-bezier(0.6, 0, 0.9, 0.1)*//*!*\u8D77\u6B65\u8D85\u5FEB*! cubic-bezier(0, 1.07, 0, 1.01)*/,
      //            outline-width 2s /*cubic-bezier(0.6, 0, 0.9, 0.1)*//*!*\u8D77\u6B65\u8D85\u5FEB*! cubic-bezier(0, 1.07, 0, 1.01)*/;
      //            outline    : transparent solid 0;
      //            &:active {
      //              outline : #FF7800 solid 1em;
      //            }
    }
  }

  .tool-icon {
    color         : #1890ff;
    font-size     : 16px;
    margin-bottom : 5px;
  }

  /**
   * \u81EA\u8EAB\u662F\u7B2C\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C\u90E8\u5206\u6587\u672C\u53F3\u7F6E\u3002
   */
  &:nth-child(1) {
    .tool-name {
      text-align : left;
      left       : 152%;
    }
  }
`])),s=>Xu(s.index,s.tools)(),s=>s.index%2==0?"bottom:52px":"top:53px"),A0=c.ZP.div($u||($u=(0,N.Z)([`
  position       : absolute;
  & {
      // left           : `,`%;
    //transform      : translateX(-50%);
    transform : translateX(27%);
  }
  `,`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  margin         : `,`;

  &::after {
    content    : '';
    position   : absolute;
    left       : 50%;
    width      : 2px;
    background : #1890ff;
    height     : 20px;
    `,`
  }
`])),s=>Xu(s.toolIndex,s.tools)(),s=>s.isTop?"bottom: 50%;":"top: 50%;",s=>s.isTop?"0 0 40px 0":"40px 0 0 0",s=>s.isTop?"bottom: -20px;":"top: -20px;"),m0=(0,c.ZP)(Iu)(Ju||(Ju=(0,N.Z)([`
  font-size : 24px;
  color     : #52c41a;
  margin    : 5px;

  & {
    // cursor : pointer;
    cursor : zoom-in !important;
  }

  &:hover {
    color : #389e0d;
  }
`]))),p0=c.ZP.h5(Ku||(Ku=(0,N.Z)([`

  padding    : 0 1em;

  /**
   * \u53D1\u73B0zoom\u6CA1\u6709\u52A8\u753B\uFF0C\u800C scale \u6709\u52A8\u753B\u3002
   *            \u7F29\u653E\u95EE\u9898 - Poe    https://poe.com/chat/32gg868tjk4jeqsjoi0
   */
  transform  : scale(0.7);
  transition : transform 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  & {
    // cursor : zoom-in !important;
  }

  &:hover {
    transform : scale(2) !important;
    border    : 1px solid #FF7800;
  }
`]))),n=r(173244);class v0{constructor(t,_){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;this.db=null,this.dbName=t,this.storeName=_,this.version=E}connect(){var t=this;return(0,S.Z)(function*(){if(!t.db)return new Promise((_,E)=>{var o=indexedDB.open(t.dbName,t.version);o.onerror=()=>E(o.error),o.onsuccess=()=>{t.db=o.result,_()},o.onupgradeneeded=D=>{var g=D.target.result;g.objectStoreNames.contains(t.storeName)||g.createObjectStore(t.storeName)}})})()}get(t){var _=this;return(0,S.Z)(function*(){return yield _.connect(),new Promise((E,o)=>{var D=_.db.transaction(_.storeName,"readonly"),g=D.objectStore(_.storeName),p=g.get(t);p.onerror=()=>o(p.error),p.onsuccess=()=>E(p.result)})})()}set(t,_){var E=this;return(0,S.Z)(function*(){return yield E.connect(),new Promise((o,D)=>{var g=E.db.transaction(E.storeName,"readwrite"),p=g.objectStore(E.storeName),H=p.put(_,t);H.onerror=()=>D(H.error),H.onsuccess=()=>o()})})()}}class Ou{constructor(t){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Form_DBName";this.formKey=t,this.dbName=_,this.dbService=new v0(this.dbName,"forms_StoreName")}loadData_\u7EAFDB(t){var _=this;return(0,S.Z)(function*(){try{var E=yield _.dbService.get(_.formKey);return!E&&t?(yield _.dbService.set(_.formKey,t),t):E||{}}catch(o){return t||{}}})()}saveData_\u7EAFDB(t){var _=arguments,E=this;return(0,S.Z)(function*(){var o=_.length>1&&_[1]!==void 0?_[1]:"override";try{var D;if(o==="append"){var g=yield E.loadData_\u7EAFDB();D=(0,F.Z)((0,F.Z)({},g),t)}else D=(0,F.Z)({},t);yield E.dbService.set(E.formKey,D)}catch(p){throw p}})()}useAsyncForm_\u517C\u987E\u4E24\u8005(t){var _=this,E=(0,u.useState)({}),o=(0,i.Z)(E,2),D=o[0],g=o[1],p=(0,u.useState)(!0),H=(0,i.Z)(p,2),U=H[0],W=H[1],Au=(0,u.useState)(null),iu=(0,i.Z)(Au,2),Z=iu[0],J=iu[1];(0,u.useEffect)(()=>{this.loadData_\u7EAFDB(t).then(T=>{g(T),W(!1)}).catch(T=>{J(T),W(!1)})},[]);var V=function(){var T=(0,S.Z)(function*($){var d=(0,F.Z)((0,F.Z)({},D),$);yield _.saveData_\u7EAFDB(d),g(d)});return function(d){return T.apply(this,arguments)}}();return{form:D,loading:U,error:Z,updateForm_\u5916\u5C42\u6D45\u514B\u9686:V}}demo(){var t=new Ou("userForm");function _(){var E=t.useAsyncForm_\u517C\u987E\u4E24\u8005({name:"",email:""}),o=E.form,D=E.loading,g=E.error,p=E.updateForm_\u5916\u5C42\u6D45\u514B\u9686;return D?u.createElement("div",null,"Loading..."):g?u.createElement("div",null,"Error: ",g.message):u.createElement("form",null,u.createElement("input",{value:o.name,onChange:function(){var H=(0,S.Z)(function*(U){yield p({name:U.target.value})});return function(U){return H.apply(this,arguments)}}()}))}}}var pu=r(329192),Yu=r(36898),Qu=r(779228),u0=r(859811),h0=r(540789),f0=`

`.concat(`


-----------------------------------------------------------

\u6211\u4ECE  \u4E4B\u524D\u90A3\u4E2A\u6E17\u900F\u6D4B\u8BD5\u7CFB\u7EDF\uFF0C  \u2014\u2014  \u60F3\u5230\u4E86    \u4E0A\u65B9\u7684\u8BF4\u660E\u548C\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u505A\u8FDB SmartStep\u91CC\u9762\u53BB  \u2014\u2014  \u60F3\u5230\u4E86    SmartStep\u4E4B\u524D\u505A\u8FC7  \u5C0F\u8FEA\u7684  \u4FE1\u606F\u6536\u96C6  \u2014\u2014  \u60F3\u5230\u4E86    \u6E17\u900F\u6D4B\u8BD5\uFF0C\u4ECE\u8FD9\u4E9B\u8BB2\u8BFE\u7684    \u53EF\u4EE5\u6536\u96C6\u5F88\u591ASmartStep\uFF0C    \u76F4\u63A5\u7528\u667A\u80FD\u6B65\u9AA4\uFF0C\u505A\u6E17\u900F\u6D4B\u8BD5  \u2014\u2014  \u60F3\u5230\u4E86  \u6211\u8981\u591A\u770B\u70B9\u8FD9\u4E9B\u8BFE\u7A0B  \u2014\u2014  \u60F3\u5230\u4E86  \u6211\u4E4B\u524D\u5C0F\u8BF4\u90FD\u770B\u7684\u4E9B\u5565\uFF0C\u628A\u8FD9\u4E9B\u8BFE\u7A0B\u653E\u8FDB\u53BB\u4E0D\u597D\u5417\uFF0C    \u628A\u8BFE\u7A0B\u7684\u5B57\u5E55\u90FD\u63D0\u53D6\u51FA\u6765  \u2014\u2014  \u60F3\u5230\u4E86  \u2014\u2014  \u60F3\u5230\u4E86  \u2014\u2014  \u60F3\u5230\u4E86  \u2014\u2014\xA0



-----------------------------------------------------------


`,`

\u9AD8\u7EA7\u529F\u80FD\uFF1A
\u4F7F\u7528\u5173\u952E\u5B57\uFF0C\u53BB\u6355\u83B7Url\uFF0C\u5E76\u9AD8\u4EAE\uFF1B    \u5728\u5BF9\u5E94Url\u7684\u540E\u9762\uFF0C\u589E\u52A0    \u3010\u4E1A\u52A1\u903B\u8F91  \u6D4B\u8BD5\u7528\u4F8B /  \u5B8C\u6210\u72B6\u6001\u6309\u94AE\u3011



\u4E0D\u8D30\u8FC7\uFF08\u6DFB\u52A0\u5230\u53C2\u8003\u7684\u3002\u53EF\u4EE5\u80E1\u4E71\u5148\u6DFB\u52A0\uFF0C\u4E0D\u7528\u5148\u6574\u7406\u3002    \u5176\u4F18\u5148\u7EA7\u8C03\u6574\u5230\u6B21\u7EA7\uFF0C\u4EE5AI\u4E3A\u4E3B\u7EA7\u3002\uFF09

\u7279\u6B8A\u60C5\u51B5\u3001\u7279\u4F8B\u4E0E\u6C34\u571F\u4E0D\u670D
\u4E2D\u7F8E\u5DEE\u5F02


\u52A0\u5165\uFF0C\u601D\u7EF4\u5BFC\u56FE  \u4ECE\u7F51\u4E0A\u6536\u96C6\u4E00\u4E9B\u601D\u7EF4\u5BFC\u56FE\u2014\u2014\u6574\u5408\u5728\u4E00\u8D77


\uFF08\u8FD9\u6837\uFF0C\u4E5F\u80FD\u628A\u5F88\u591A\u7684\u89C6\u9891\u601D\u8DEF\uFF0C\u7ED9\u6574\u5408\u4E86\uFF09



\u601D\u7EF4\u5BFC\u56FE\u3002  /  \uFF08\u4E4B\u524D\u5DF2\u8BB0\u5F55\uFF09

\u5BF9\u4E8ECTF\uFF0C\u591A\u6253\u6253\u3002

\u7136\u540E  \u5BF9\u4E8E\u505A\u4E0D\u51FA\u6765\u7684\uFF0C\u5C3D\u529B\u4E86\uFF0C\u7B970.2\u5206\uFF1B    \u80FD\u505A\u51FA\u6765\u7684\uFF0C\u5C31\u7B97  1\u5206\u3002\uFF08\u7ED9\u51FA\u8FD9\u6837\u4E00\u4E2A    \u914D\u6BD4\uFF09



`),g0=`

`.concat(`

--

`,`

--
`,`



--

`,`



    \u5173\u4E8E\u8D44\u4EA7
        \u5176\u5B9E\u6709\u5927\u6709\u5C0F

        \u5176\u5B9E

        \u6D4B\u8BC4  \u56FD\u8D44\u59D4\u65D7\u4E0B
        \u5355\u4E2A\u6E17\u900F  \u5355\u4E2A\u5355\u4F4D\u65D7\u4E0B

        \u5206\u5F62\u5B66\u8BF4\uFF0C\u7ED3\u6784\u5176\u5B9E\u4E00\u6837\uFF0C\u53EA\u662F\u4F1A  \u65E0\u9650\u8FED\u4EE3


        \u6211\u9009\u62E9\u4E00\u4E2A\u5C0F\u7684\uFF0C\u5F00\u59CB\u8BD5\uFF0C\u5C31\u597D

        \u5927\u7684\u53EA\u662F\u5C0F\u7684    \u7B80\u5355\u590D\u5236\u548C\u514B\u9686\u3001\u8FED\u4EE3

--

`,`



--

\uFF08\u8FD9\u4E2A\u5565\u610F\u601D\uFF1F\uFF09
    \u589E\u52A0\u4E00\u6761

    \u5728\u591A\u4E2A\u5B57\u6BB5\u4E2D\uFF0C\u6BCF\u4E00\u4E2Asheet name  \u4E2D\u589E\u52A0
    \uFF08\u9ED8\u8BA4\u503C\uFF09
    \uFF08\u5206\u5F97\u66F4\u7EC6\uFF09

--
`,`

--

\u8865\u5145\u4E00\u4E2A\u65B0\u60F3\u6CD5\uFF1A

\u7528Burp Suite\u7684\u722C\u866B\u529F\u80FD\u5BF9\u7F51\u7AD9\u8FDB\u884C\u722C\u53D6\uFF0C\u7136\u540E\u7B5B\u9009\u51FA\u5305\u542B\u7528\u6237\u6807\u8BC6\u53C2\u6570\u7684\u8BF7\u6C42\uFF08\u5982id\u3001uid\uFF09\uFF0C\u5BF9\u7B5B\u9009\u540E\u7684\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u8FDB\u884C\u5206\u6790\uFF0C\u5224\u65AD\u5176\u662F\u5426\u5305\u542B\u654F\u611F\u4FE1\u606F\u3002


\u5C06 \u4E1A\u52A1\u903B\u8F91\u6F0F\u6D1E \u62BD\u53D6\u4E3A\u4E00\u4E2A\u601D\u7EF4\u5BFC\u56FE\u3002
\u7136\u540E\u5728\u4F7F\u7528\u65F6\uFF0C\u601D\u7EF4\u5BFC\u56FE  \u7ED3\u5408  SiteMap
\u8FDB\u884C\u4E00\u4E2A  AI  \u5224\u65AD\uFF0C\u6709\u54EA\u4E9BURL\u503C\u5F97\u6D4B\u4E00\u904D
\uFF08\u5E26ID    \u5E26resetPassword\uFF09



--

--

--

`),e0,y0=c.ZP.img(e0||(e0=(0,N.Z)([`
  & {
    width : 120px;
  }

  //& {
  //  animation : gif-timing 8s steps(/*\u51711\u6B65*/ 1) infinite;
  //  /*
  //  \u63A7\u5236GIF\u64AD\u653E\u901F\u5EA6
  //  \u53C2\u8003\u8D44\u6599\uFF1A
  //            GIF\u64AD\u653E\u901F\u5EA6 - Poe    https://poe.com/chat/35idghxzd28qzjtt95h
  //  */
  //  @keyframes gif-timing {
  //    100% { transform : translateX(0); }
  //  }
  //}

  /*
  WARN \u90FD\u65E0\u6548\uFF0C\u6700\u540E\u91C7\u7528
        Is there a way to slow down a gif as a background in html and css? - Stack Overflow    https://stackoverflow.com/a/41941011
                GIF animation speed changer    https://ezgif.com/speed/ezgif-4be7e51868611.webp
  */

  //& {
  //  animation-timing-function : steps(20, jump-none);
  //}

  /** TIP \u80CC\u666F\u8272\u6E10\u53D8\u52A8\u753B\uFF0C
   *        \u53C2\u8003\u8D44\u6599\uFF1A
   *                \u80CC\u666F\u989C\u8272\u53D8\u5316 - Poe    https://poe.com/chat/35lxatdio1s40wlvbyo
   *                        \u8FED\u4EE3\u7248\u672C\uFF1A
   *                                1\u3001\u6E10\u53D8\u7684\u989C\u8272\u3002
   *                                2\u3001\u6E10\u53D8\u7684\u65F6\u95F4\u3002
   *                                3\u3001\u4E2D\u95F4\u65E0\u7F1D\u3002
   *                                4\u3001\u5FAA\u73AF\u5B8C\u4E00\u6B21\uFF0C\u7A81\u53D8\u7684\u95EE\u9898\u3002
   */
  & {
    & {
      background : linear-gradient(
        90deg,
        red, orange, yellow, green, cyan, blue, purple,
        red, orange, yellow, green, cyan, blue, purple,
        red
      );
      & {
        background-size : 200% 100%; /* \u5173\u952E\u662F\u8FD9\u91CC\u6539\u6210200% */
        //background-size : 500% 100%;            // \u4F46\u662F\uFF0C\u771F\u7684\u4F1A\u95EA\u4E00\u4E0B\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F
      }
      // WARN \u4E3A\u4F55\u4E0D\u80FD\u5728\u3010\u4E2D\u95F4\u3011\u52A0\u5165\u6CE8\u91CA\uFF1F\uFF1F\uFF1F   \u56E0\u4E3A\u3010styled\u3011\u7684\u7279\u6027\u5417\uFF1F
      /* \u6301\u7EED\u65F6\u95F4 */
      /* \u8DF3\u8DC3\u5F0F\u7684\uFF0C\u975E\u6E10\u8FDB steps(8, end)*/
      /*TIP \u6E10\u8FDB\u6E10\u53D8\u7684\u3002  */
      /**
       TIP \u30106s\u3011\u633A\u597D\u7684\uFF0C\u914D\u5408 \u80CC\u666Fsize 200%  \u3002  \u30104s\u3011\u914D\u5408 \u80CC\u666Fsize 500%  \u3002
       */
      animation  : gradientMove 6s linear infinite;
    }

    @keyframes gradientMove {
      0% {
        background-position : 0% 50%;
      }
      //100% {
      //  background-position : 100% 50%;
      //}
      100% {
        background-position : -100% 50%; /* \u79FB\u52A8\u4E00\u534A\u8DDD\u79BB */
      }
      //100% {
      //  background-position : 0% 50%;
      //}
    }

  }

`]))),x0=()=>u.createElement(u.Fragment,null,u.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.createElement(y0,{src:r(469274)}),u.createElement("pre",null,`
\u300C\u6F0F\u6D1E\u72E9\u730E\u5FC3\u667A\u5F3A\u5316\u4F53\u7CFB\u300D - DeepSeek    https://chat.deepseek.com/a/chat/s/3824d65b-ecc6-4cc9-9c43-ae4431ba8cdb
\u300C\u6F0F\u6D1E\u72E9\u730E\u5FC3\u667A\u5F3A\u5316\u4F53\u7CFB\u300D\u903B\u8F91\u63A8\u5BFC\u6846\u67B6 - DeepSeek    https://chat.deepseek.com/a/chat/s/dcbdbacf-a653-4386-919f-edac4f62b228
        `))),n0,k0=c.ZP.div(n0||(n0=(0,N.Z)([`
  * {
    margin      : 0;
    padding     : 0;
    box-sizing  : border-box;
    font-family : 'Arial', sans-serif;
    & {
      user-select : none;
      cursor      : /* \u8D85\u8FC736px\u7684\uFF0C\u6D4F\u89C8\u5668\u4E0A\u65E0\u6CD5\u663E\u793A */ url('../\u5FC3\u6001_\u53CA\u56FE\u7247/\u592A\u6781\u9C7C-\u5343\u5E93\u7F51-\u8C03\u6574\u901F\u5EA6.webp'), crosshair;
    }
  }

  .body {
    background-color : #0a0e29;
    color            : #ffffff;
    display          : flex;
    justify-content  : center;
    align-items      : center;
    // min-height       : 100vh;
    overflow-x       : hidden;
    overflow-y       : hidden;;
    perspective      : 1000px;

  }

  .container {
    display         : flex;
    flex-wrap       : nowrap;
    justify-content : center;
    align-items     : stretch;
    width           : 100%;
    & {
      // max-width : 1200px;
      max-width : 1246px;
    }
    padding         : 20px;
    position        : relative;
    transform-style : preserve-3d;
    transition      : transform 0.5s ease;
  }

  .item {
    flex            : 1;
    margin          : 0 10px;
    padding         : 20px 10px;
    background      : rgba(16, 23, 41, 0.8);
    border-radius   : 8px;
    box-shadow      : 0 0 20px rgba(0, 200, 255, 0.3),
    inset 0 0 15px rgba(0, 200, 255, 0.1);
    transition      : all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align      : center;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    position        : relative;
    overflow        : hidden;
    border          : 1px solid rgba(0, 200, 255, 0.2);
    z-index         : 1;
    min-width       : 120px;
  }

  .item:hover {
    transform  : translateY(-10px) scale(1.05);
    box-shadow : 0 10px 30px rgba(0, 200, 255, 0.5),
    inset 0 0 20px rgba(0, 200, 255, 0.2);
    z-index    : 2;
  }

  .item:before {
    content    : '';
    position   : absolute;
    top        : -100%;
    left       : -100%;
    width      : 300%;
    height     : 300%;
    background : radial-gradient(circle at center,
    rgba(0, 200, 255, 0.1) 0%,
    rgba(128, 0, 255, 0.05) 50%,
    transparent 70%);
    opacity    : 0;
    transition : opacity 0.5s ease;
  }

  .item:hover:before {
    opacity : 1;
  }

  /* \u8FB9\u7F18\u53D1\u5149\u6548\u679C */
  .item:after {
    content       : '';
    position      : absolute;
    top           : -2px;
    left          : -2px;
    right         : -2px;
    bottom        : -2px;
    background    : linear-gradient(45deg,
    #00ccff, #0066ff, #0033ff,
    #0000ff, #3300ff, #6600ff);
    z-index       : -1;
    border-radius : 10px;
    opacity       : 0;
    transition    : opacity 0.3s ease;
  }

  .item:hover:after {
    opacity   : 0.5;
    animation : borderGlow 3s linear infinite;
  }

  @keyframes borderGlow {
    0% { filter : hue-rotate(0deg); }
    100% { filter : hue-rotate(360deg); }
  }

  .number {
    font-size               : 2.8rem;
    font-weight             : bold;
    margin-bottom           : 15px;
    background              : linear-gradient(135deg, #00dbde, #fc00ff);
    -webkit-background-clip : text;
    -webkit-text-fill-color : transparent;
    position                : relative;
    text-shadow             : 0 0 10px rgba(0, 219, 222, 0.5);
    transform-style         : preserve-3d;
    transition              : transform 0.3s ease;
  }

  .item:hover .number {
    transform : translateZ(20px);
  }

  .label {
    font-size      : 0.9rem;
    color          : #64ffda;
    letter-spacing : 1px;
    transform      : translateZ(5px);
    text-shadow    : 0 0 5px rgba(100, 255, 218, 0.5);
  }

  .hexagon-bg {
    position         : absolute;
    top              : 0;
    left             : 0;
    width            : 100%;
    height           : 100%;
    background-image : url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%231259a7' fill-opacity='0.05' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity          : 0.2;
    z-index          : -1;
  }

  .connection-container {
    position       : absolute;
    top            : 0;
    left           : 0;
    width          : 100%;
    height         : 100%;
    pointer-events : none;
    z-index        : 0;
  }

  .connection-line {
    position   : absolute;
    height     : 2px;
    background : linear-gradient(90deg,
    rgba(0, 255, 255, 0.1),
    rgba(0, 255, 255, 0.8),
    rgba(0, 255, 255, 0.1));
    top        : 50%;
    z-index    : 0;
  }

  .data-particle {
    position         : absolute;
    width            : 5px;
    height           : 5px;
    background-color : #00ffff;
    border-radius    : 50%;
    box-shadow       : 0 0 8px #00ffff;
    z-index          : 1;
    opacity          : 0;
  }

  .grid-lines {
    position         : fixed;
    top              : 0;
    left             : 0;
    width            : 100%;
    height           : 100%;
    background-image : linear-gradient(rgba(25, 52, 112, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 52, 112, 0.25) 1px, transparent 1px);
    background-size  : 20px 20px;
    z-index          : -2;
  }

  /* \u6DFB\u52A0\u4E0B\u65B9\u7684\u53CD\u5C04\u6548\u679C */
  .reflection {
    position   : absolute;
    bottom     : -20px;
    left       : 10%;
    width      : 80%;
    height     : 20px;
    background : linear-gradient(to bottom, rgba(0, 200, 255, 0.2), transparent);
    filter     : blur(4px);
    transform  : scaleY(-1);
    opacity    : 0;
    transition : opacity 0.3s ease;
  }

  .item:hover .reflection {
    opacity : 1;
  }

  @keyframes pulse {
    0% { opacity : 0.2; }
    50% { opacity : 0.8; }
    100% { opacity : 0.2; }
  }

  @keyframes dataFlow {
    0% { transform : translateX(0); opacity : 0.8; }
    100% { transform : translateX(100%); opacity : 0; }
  }

  /* \u5C0F\u5C4F\u5E55\u8BBE\u5907\u7684\u6837\u5F0F */
  @media (max-width : 900px) {
    .container {
      flex-wrap : wrap;
      transform : none !important;
    }

    .item {
      margin    : 10px;
      min-width : calc(33.333% - 20px);
      flex      : 0 0 calc(33.333% - 20px);
    }
  }

  @media (max-width : 600px) {
    .container {
      flex-direction : column;
      align-items    : center;
    }

    .item {
      margin    : 10px 0;
      width     : 100%;
      max-width : 300px;
    }

    .connection-container {
      display : none;
    }
  }
`]))),b0=s=>{var t=s._\u7EDF\u8BA1,_=(0,u.useRef)(null),E=(0,u.useRef)(null),o=(0,u.useRef)([]),D=(0,u.useRef)([]),g=(0,u.useState)(window.innerWidth),p=(0,i.Z)(g,2),H=p[0],U=p[1];class W{static createConnections_\u57FA\u672C\u6D41\u7EBF(){if(!(!E.current||o.current.length===0)){for(;E.current.firstChild;)E.current.removeChild(E.current.firstChild);D.current.forEach(lu=>clearInterval(lu)),D.current=[];for(var Z=E.current.getBoundingClientRect(),J=o.current.length,V=0;V<J-1;V++)if(!!o.current[V]){var T=o.current[V].getBoundingClientRect(),$=o.current[V+1].getBoundingClientRect();if(!(Math.abs(T.top-$.top)>T.height/2)){var d=T.right-Z.left,cu=$.left-Z.left,nu=(T.top+T.bottom)/2-Z.top,O=document.createElement("div");O.classList.add("connection-line"),O.style.left=d+"px",O.style.width=cu-d+"px",O.style.top=nu+"px",O.style.animation="pulse 2s infinite",E.current.appendChild(O);var Du=!0,bu=Du?V:J-1-V;this.createDataFlow_\u6570\u636E\u6D41\u7C92\u5B50(d,cu,nu,bu)}}}}static createDataFlow_\u6570\u636E\u6D41\u7C92\u5B50(Z,J,V,T){var $=window.setInterval(()=>{if(!E.current)return;var d=document.createElement("div");d.classList.add("data-particle"),d.style.left="".concat(Z,"px"),d.style.top="".concat(V-2,"px"),E.current.appendChild(d);var cu=J-Z,nu=2e3,O=null;function Du(bu){O||(O=bu);var lu=(bu-O)/nu;if(lu<1)d.style.left="".concat(Z+lu*cu,"px"),d.style.opacity=lu<.2?"".concat(lu*5):lu>.8?"".concat((1-lu)*5):"1",requestAnimationFrame(Du);else{var zu;d==null||(zu=d.parentNode)===null||zu===void 0||zu.removeChild(d)}}requestAnimationFrame(Du)},300+T*100);D.current.push($)}static add3DEffect_\u9F20\u6807\u6D6E\u4E0A\u53BB_\u8FD4\u56DE\u6E05\u9664\u65B9\u6CD5(){if(H>900&&_.current){var Z=J=>{var V=J.clientX,T=J.clientY,$=window.innerWidth,d=window.innerHeight,cu=(V-$/2)/($/2)*5,nu=(T-d/2)/(d/2)*5,O=1;_.current.style.transform="rotateY(".concat(cu*O,"deg) rotateX(").concat(-nu*O,"deg)")};return document.addEventListener("mousemove",Z),()=>{document.removeEventListener("mousemove",Z)}}else return null}static animateNumbers____\u6A21\u62DF\u6570\u5B57\u7684\u5B9A\u65F6\u5668\u8DF3\u52A8(){o.current.forEach((Z,J)=>{if(!!Z){var V=Z.querySelector(".number");if(!!V){var T=Au[J].value,$=0,d=2e3,cu=30,nu=d/cu,O=T/nu,Du=window.setInterval(()=>{$+=O,$>=T&&($=T,clearInterval(Du)),V.textContent=Math.floor($)+""},cu);D.current.push(Du)}}})}}var Au=[{value:t.\u6CD5\u4EBA_\u4E3B\u4F53,label:"\u4E2A\u6CD5\u4EBA/\u4E3B\u4F53"},{value:t.\u516C\u53F8,label:"\u4E2A\u516C\u53F8"},{value:t.\u57DF\u540D,label:"\u4E2A\u57DF\u540D"},{value:t.IP,label:"\u4E2AIP"},{value:t.\u7AEF\u53E3,label:"\u4E2A\u7AEF\u53E3"},{value:t.URL,label:"\u4E2AURL"}];return(0,u.useEffect)(()=>{W.createConnections_\u57FA\u672C\u6D41\u7EBF();var iu=W.add3DEffect_\u9F20\u6807\u6D6E\u4E0A\u53BB_\u8FD4\u56DE\u6E05\u9664\u65B9\u6CD5();return()=>{D.current.forEach(Z=>{clearInterval(Z)}),iu&&iu()}},[]),u.createElement(u.Fragment,null,u.createElement(k0,null,u.createElement("div",{className:"body"},u.createElement("div",{className:"grid-lines"}),u.createElement("div",{ref:_,className:"container",id:"container"},u.createElement("div",{ref:E,className:"connection-container",id:"connection-container"}),Au.map((iu,Z)=>u.createElement("div",{key:Z,ref:J=>{o.current[Z]=J},className:"item","data-value":iu.value},u.createElement("div",{className:"hexagon-bg"}),u.createElement("div",{className:"number"},u.createElement("span",null,iu.value),"/",u.createElement("span",null,Math.pow(3,Z))),u.createElement("div",{className:"label"},iu.label),u.createElement("div",{className:"reflection"})))))))},qu=r(47896);class ku{static _get_\u539Fcfg_\u5E73\u644Atool_arr(t){var _=t.projects.map((E,o)=>E.stages.map((D,g)=>D.tools.map((p,H)=>{var U=p;return U.project_name=E.name,U.project_index=o,U.stage_name=D.name,U.stage_index=g,U.tool_index=H,U}))).flat(9);return _}static _\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF(t,_){var E=this._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(_),o=E.map,D=t?o[t]:o,g=JSON.stringify(D,null,2);pu.Download_Helper._download_json(g)}static _\u7EDF\u8BA1map_\u5404\u9879\u5C55\u677F\u5C55\u793A\u6307\u6807(t){var _=this._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(t),E=_.map;function o(D){return Object.values(E[D]).flat(9).length}return{\u6CD5\u4EBA_\u4E3B\u4F53:o("\u6240\u6709\u6CD5\u4EBA_\u7532\u65B9"),\u516C\u53F8:o("\u6240\u6709\u516C\u53F8"),\u57DF\u540D:o("\u6240\u6709\u57DF\u540D"),IP:o("\u6240\u6709IP_\u7AEF\u53E3"),\u7AEF\u53E3:o("\u6240\u6709IP_\u7AEF\u53E3"),URL:o("\u6240\u6709\u63A5\u53E3Url_\u53CA_\u4E00\u4E2A\u7F51\u7AD9\u4E0B\u7684\u6811\u5F62_SiteMap")}}static _\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(t){var _=Object.entries(qu.L.\u7EDF\u8BA1_\u76F8\u5173\u5B57\u6BB5\u540D_map).filter(g=>{var p=(0,i.Z)(g,2),H=p[0],U=p[1];return H!=="\u5168\u90E8\u62A5\u544A"});function E(){}var o=Object.fromEntries(_.map(g=>{var p=(0,i.Z)(g,2),H=p[0],U=p[1];return[H,{}]})),D=this._get_\u539Fcfg_\u5E73\u644Atool_arr(t);return D.forEach(g=>{var p;(p=g.results)===null||p===void 0||p.forEach(H=>{var U;(U=H.excel_arr)===null||U===void 0||U.forEach(W=>{var Au,iu=(Au=W.row_arr)===null||Au===void 0?void 0:Au[0];_.forEach(Z=>{var J=(0,i.Z)(Z,2),V=J[0],T=J[1],$=iu&&qu.L.filterJsonByKeys(iu,T,!1);if($){var d,cu="".concat(g.name,"____").concat(W.file_name),nu=V;o[nu][cu]||(o[nu][cu]=[]),(d=W.row_arr)===null||d===void 0||d.forEach(O=>{var Du=qu.L.filterJsonByKeys(O,T,!0),bu=Du.is_\u6709\u4EFB\u610F\u4E00\u4E2A\u6709\u6548\u503C,lu=Du.jsonB;bu&&o[nu][cu].push(lu)})}})})})}),{\u7EDF\u8BA1_map_\u53BB\u9664\u4E0D\u4F5C\u7B5B\u9009\u7684\u90A3\u4E2A____entries:_,map:o}}}var F0,S0=c.ZP.div(F0||(F0=(0,N.Z)([`
  position          : absolute;
  top               : 0;
  left              : 0;
  width             : 100%;
  height            : 100%;
  background-image  : url(`,`);
  & {
    background-size : cover;
    //background-size   : contain;
  }
  background-repeat : repeat-y; // \u7EB5\u5411\u65F6\uFF0C\u8FDB\u884C\u91CD\u590D
  & {
    //opacity : 0.1; /* \u900F\u660E\u5EA6\u8BBE\u7F6E\uFF0C0.5\u8868\u793A50%\u900F\u660E */
    opacity : 0.07;
  }
  z-index           : -1; /* \u786E\u4FDD\u80CC\u666F\u5728\u5185\u5BB9\u4E0B\u65B9 */
`])),r(182400)),Z0=()=>u.createElement(u.Fragment,null,u.createElement(S0,null)),e=r(829675),j=r(848149),Fu=n.eV.quick_get_tool,eu=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,_u=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap;function t0(s){var t=Fu("\u3010\u501F\u52A9AI\u7684\u6DF1\u5165\u6F0F\u6D1E\u7814\u7A76\u3011AI\u7684\u4F7F\u7528\u3001AI\u4F7F\u7528\u7684\u5C0F\u7ECF\u9A8C\u3001AI\u4F7F\u7528\u7684\u75DB\u70B9\uFF08\u548C\u75DB\u70B9\u3001\u96BE\u70B9\u6709\u5173\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["AI\u51FA\u6765\uFF0C\u53EF\u80FD80%\u662F\u6B63\u786E\u7684\u2014\u2014\u2014\u2014\u4F46AI\u4E0D\u80FD\u5957AI\uFF0CAI\u5FC5\u987B\u63A5\u5165\u624B\u52A8\u2014\u2014\u2014\u2014\u4E0D\u7136AI\u5957AI\uFF0C\u5957\u4E86\u82E5\u5E72\u5C42\u4E4B\u540E\u3002\u6B63\u786E\u7387\u5DF2\u7ECF\u4E0B\u964D\u7684\u4E0D\u80FD\u770B\u4E86\uFF1B  \uFF08\u51FF\u7A7F\u6548\u5E94\u3002\uFF09","\u4E0D\u53EF\u8FDE\u7EED\uFF1B\u4E0D\u7136\uFF0C\u6574\u4E2A\u4EBA\uFF0C\u90FD\u662F\u5E7B\u89C9\u3002"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `});switch(s){case"\u5728\u6F0F\u6D1E\u7814\u7A76\u73AF\u5883\uFF0C\u8FDB\u884C\u663E\u793A":return t;case"\u5728\u75DB\u70B9\u96BE\u70B9\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u81EA\u5DF1\u56DE\u8FC7\u5934\u53BB\u770B":return(0,F.Z)((0,F.Z)({},t),{},{name:"\u3010\u526F\u672C\u3011"+t.name,dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u3010\u526F\u672C\u3011\u89C1\u4E0A\u65B9\u6F0F\u6D1E\u7814\u7A76\u4E13\u9879\uFF08\u90A3\u91CC \u7ED3\u5408\u573A\u666F \u8BB2\u7684\u66F4\u900F\u5F7B\uFF09"])))})}}var z0={name:"\u6F0F\u6D1E\u590D\u73B0\u548CPoC_C",stages:[{name:"\u6F0F\u6D1E\u7814\u7A76",tools:[Fu("\u5355\u7C7B\u6F0F\u6D1E\u6DF1\u5165\u7814\u7A76\uFF08\u65E7\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Top10\u6F0F\u6D1E","\u6709\u7F16\u53F7\u89C4\u5F8B\u6F0F\u6D1E",`\u591A\u63D0\u51E0\u4E2A\u3010\u4E3A\u4EC0\u4E48\u3011\u95EE\u9898\uFF08    \u6682\u65F6\u4E0D\u63D0  <\u662F\u4EC0\u4E48/\u4E3A\u4EC0\u4E48/\u600E\u4E48\u529E>    \u90A3\u4E2A\u592A\u591A\u4E86    \uFF09    \uFF08\u4E3E\u4F8B\uFF1A\u6F0F\u6D1E\u7684\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F\u4E3A\u4EC0\u4E48\uFF1F
\u51FA\u73B0\u7684\u5730\u65B9\u662F\u4EC0\u4E48\u5462\uFF1F\u4E3A\u4EC0\u4E48\uFF1F
\u65E5\u5E38\u5229\u7528\u7684\u65B9\u5F0F\uFF0C\u662F\u63A5\u53E3url\u5462\uFF1F\u53C2\u6570\u4F20\u53C2\u5462\uFF1F\u8FD8\u662F\u4EC0\u4E48\u5462\uFF1F
\u590D\u73B0\u7684\u6548\u679C\u662F\u4EC0\u4E48\u5462\uFF1F\u6570\u636E\u4F20\u56DE\u6765\uFF1FDnsLog\u53D1\u8FC7\u6765\uFF1F\uFF09`,j.wM+"\u53D8\u79CD1\uFF1A\u4E00\u7BC7\u7EAFPoC\u7684\u89E3\u6790\uFF0CAI\u89E3\u8BFB\uFF08\u6F0F\u6D1E\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\uFF09\u2014\u2014\u2014\u2014\u5F62\u6210\u4E00\u7BC7\u4EBA\u9020\u6587\u5E93\u3002      \uFF08\u66F4\u597D\u7684\u7248\u672C\uFF1A\u4F60\u597D\uFF0C\u6211\u6709\u4EE5\u4E0BPoC\u3002\u8BF7\u4F60\u4E3A\u6211\u53CD\u63A8  \u6F0F\u6D1E\u7684\u539F\u7406\u548C\u3010\u6F0F\u6D1E\u94FE\u6761\u3011\u3001\u3010\u6570\u636E\u6D41\u52A8\u3011\u3002\uFF09",j.wM+"\u53D8\u79CD2.5\uFF1A\u627E\u5230\u4E00\u7BC7\u6F0F\u6D1E\u6587\u5E93\uFF08\u63CF\u8FF0\u3001\u539F\u56E0\u3001\u5371\u5BB3\u65B9\u5F0F\uFF09\uFF0C\u8BA9AI  \u53BB\u5199\u51FAPoC","\u73B0\u6709\u6F0F\u6D1E\u6587\u5E93","\u6F0F\u6D1E\u5927\u7C7B\u3001\u6F0F\u6D1E\u5C0F\u7C7B\u3001cve\u8D77\u540D\u7F16\u53F7\u3001\u53EF\u80FD\u7684\u5229\u7528\u811A\u672C\u3001\u5229\u7528\u5DE5\u5177","\u6839\u672C\u539F\u56E0\u3001\u91CD\u8981\u539F\u56E0\u3001\u76F4\u63A5\u539F\u56E0\u3001\u6BD4\u55BB\u3001\u672C\u8D28\u3001\u6BD4\u55BB\u3001\u6BD4\u55BB\u4E3B\u9898","\u53EF\u4EE5(\u540C\u6B65)\u53BB \u8F93\u51FA\u5B66\u4E60\u6587\u7AE0","\u6570\u5B66\u7684\u8BC1\u660E\uFF0C\u6B63\u8BC1\u6CD5 \u548C \u53CD\u8BC1\u6CD5\uFF08\u53CD\u9762\u8BC1\u4E0D\u4E86\uFF1F  \u90A3\u5C31\u6B63\u9762\u8BC1\u660E\uFF1F\uFF1B\u6211\u53BB\u8BC1\u660E   \u8FD9\u4E2A\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF1F\uFF09","\u591A\u7EF4\u5EA6\uFF08\u975E\u5FC5\u586B\uFF09\uFF08\u8FD9\u662F\u4EC0\u4E48\uFF1F\uFF09","\u5211\u4FA6\uFF08\u4E0D\u4E00\u5B9A\u9760\u8C31\u3001\u53EA\u662F\u8111\u6D1E\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u3010\u5355\u7C7B\u6F0F\u6D1E\u6DF1\u5165\u7814\u7A76\u3011\u56FA\u5B9A\u6761\u76EE\uFF08\u65B0\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu((()=>{var s=["\u4E3B\u9898\uFF1B","\u627E\u5230\u7684\u6587\u7AE0\uFF1A\u4EBA\u5199\u7684\u8D44\u6599\u3001\u5148\u77E5\u793E\u533A",j.wM+"\u8BA9AI\uFF0C\u5BF9\u3010\u627E\u5230\u7684\u6587\u7AE0\u3011\u8FDB\u884C\u6311\u523A","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014","\u3010\u6700\u4E2D\u95F4\u3011\u4EBA\u5DE5\uFF0C\u8FDB\u884C\u7684\u5BF9\u6BD4\u548C\u603B\u7ED3","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",j.wM+"\u8BA9AI\uFF0C\u5BF9\u3010AI\u6BD4\u55BB\u3011\u68C0\u67E5\uFF0C\u6311\u9519  \uFF08\u8BC4\u5206\uFF09\u3001AI\u7684\u6311\u523A",j.wM+"AI(DeepSeek)\uFF0C\u81EA\u5DF1\u53BB\u5C1D\u8BD5\u6BD4\u55BB(\u548C\u6211\u7684\u662F\u5E76\u884C\u7684)(\u8349\u7A3F)",j.wM+"\u8BA9AI\uFF0C\u5BF9\u3010\u6211\u7684\u6BD4\u55BB\u3011\u68C0\u67E5\uFF0C\u6311\u9519  \uFF08\u8BC4\u5206\uFF09\u3001AI\u7684\u6311\u523A","(\u5148\u770B\u6750\u6599)\u6211\u7684\u60F3\u8C61\u3001\u6211\u7684\u6BD4\u55BB\u3002\u81EA\u5DF1\u53BB\u7406\u89E3\u3001\u81EA\u5DF1\u53BB\u6BD4\u55BB\uFF08\u53D1\u6325\u60F3\u8C61\u529B\uFF0C\u5C3D\u60C5\u7684\u53BB\u8111\u8865\uFF1B\u53BB\u60F3\u8C61\u4E00\u4E2A\u751F\u6001\u3001\u4E00\u4E2A\u865A\u6784\u7684\u95ED\u73AF\u4E16\u754C\uFF09","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u601D\u8003\u7248-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u601D\u8003\u7248-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u7814\u7A76-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u7814\u7A76-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Gemini-\u7814\u7A76-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Gemini-\u7814\u7A76-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u817E\u8BAF\u5143\u5B9D-\u516C\u4F17\u53F7\u641C\u7D22 1\u8F6E\u5927\u7C7B",j.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u817E\u8BAF\u5143\u5B9D-\u516C\u4F17\u53F7\u641C\u7D22 2\u8F6E\u5C0F\u7C7B","","","",""];return{"\u5E74\u4EFD\u2014\u2014\u8001\u6D1E":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([...s]),"\u6708\u4EFD\u2014\u2014Nday":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([...s]),"\u65E5\u4EFD\u2014\u20140Day":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([...s])}})()),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),t0("\u5728\u6F0F\u6D1E\u7814\u7A76\u73AF\u5883\uFF0C\u8FDB\u884C\u663E\u793A"),Fu("\u7F51\u4E0A\u5E38\u8BF4\u7684\u4E00\u4E9B\u6280\u5DE7\uFF08\u8FD8\u6CA1\u5F52\u7C7B\u533A\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u62FF\u5230\u6E90\u7801\u4E4B\u540E\u7B2C\u4E00\u6B65\u770B\u662F\u6E90\u7801\u662F\u5426\u5168\u9762\uFF0C\u662F\u5426\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\uFF0C\u5982\u679C\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\u5C31\u53EF\u4EE5\u7528\u65AD\u70B9\u8C03\u8BD5\u7684\u65B9\u6CD5\u53BB\u8C03\u8BD5\u4EE3\u7801\uFF0C\u5982\u679C\u4E0D\u80FD\u5C31\u5F97\u624B\u52A8\u53BB\u628A\u4E00\u4E9B\u65B9\u6CD5\u62BD\u8C61\u51FA\u6765\uFF0C\u8FDB\u884C\u8C03\u8BD5\uFF0C\u6211\u8FD9\u6B21\u62FF\u5230\u7684\u6E90\u7801\u4E0D\u591F\u5168\u9762\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u624B\u52A8\u53BB\u8C03\u4E86\u3002\u901A\u5E38\u5BA1\u8BA1java\u4EE3\u7801\u65F6\u4E2A\u4EBA\u6BD4\u8F83\u559C\u6B22\u7528vscode\u9605\u8BFB\u4EE3\u7801+idea\u53CD\u7F16\u8BD1\u4EE3\u7801\u3002","\u8BE5\u6E90\u7801\u4F7F\u7528tomcat\u90E8\u7F72\uFF0C\u62FF\u5230\u6E90\u7801\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u53BB\u770B\u5176\u76EE\u5F55\u4E0B\u7684WEB-INF/web.xml\u6587\u4EF6\uFF0C","\u7F51\u4E0A\u5F00\u6E90CMS\u57FA\u672C\u4E0A\u51FA\u6765\u4E00\u4E2A\u661F\u671F\u5DE6\u53F3\u5C31\u6CA1\u620F\u4E86\uFF0C\u4F46\u662F\u8FD8\u662F\u60F3\u8BD5\u4E00\u8BD5\uFF0C\u968F\u4FBF\u627E\u4E00\u5957\u6E90\u4EE3\u7801\uFF0C\u7B80\u5355\u5BA1\u8BA1\u4E00\u4E0B\uFF0C\u770B\u770B\u6709\u65E0\u6536\u83B7"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u5FC3\u6001\u548C\u751F\u6D3B\u65B9\u5F0F",tools:[Fu("\u6D74\u706B\u91CD\u751F\uFF08\u4EE5\u540E\u7686\u662F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u591A\u9E1F\u5728\u6797\uFF0C\u4E0D\u5982\u4E00\u9E1F\u5728\u624B",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u9605\u8BFB\u5668\uFF08\u5C0Fh\u6587\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu({"3\u54081\uFF1A\u5C0Fh\u6587":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u7248\uFF1A\u590D\u76D8+\u5E38\u89C4\u5C0F\u8BF4","\u7B2C\u4E8C\u7248\uFF1A\u3010\u77E5\u8BC6/\u6587\u7AE0\u3011+h\u6587","\u7B2C\u4E09\u7248\uFF1A\u665A\u4E0A\u4E13\u8BFB\u3001(\u957F\u671F\u4E60\u60EF)\u957F\u8DB3\u53D1\u5C55\uFF0C\u3010\u4EE3\u5BA1\u7CBE\u54C1\u5E16\u5B50\u3011+\u3010\u6211\u7684\u590D\u76D8(AI/\u4EBA\u5DE5)\u3011+\u3010\u5A31\u4E50\u8F7B\u5C0F\u8BF4(\u975Eh\uFF0C\u5982\u82F1\u96C4\u65E0\u654C\u3001\u6597\u7834\u82CD\u7A79)\u3011","(h\u6587\u77ED\u671F\u523A\u6FC0\u3001\u66FE\u5C1D\u8BD5\u767D\u5929\u523A\u6FC0)","h\u6587\uFF1A\u7528Notion\u6536\u5F55\u6587\u7AE0\u3001\u5927\u628A\u7684\u5C0F\u9EC4\u6587\uFF1B\u4E00\u4E2A\u5408\u96C6\uFF1B\u653E\u5230\u4E00\u8D77\uFF0C\u7528\u6765\u6DA8\u7CBE\u795E"]),"\u3010\u661F\u7403\u3011\u5B66\u4E60\u65B9\u6CD5":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u9762\u5411\u4E13\u4E1A\u6587\u7AE0(\u661F\u7403\u3001\u5148\u77E5\u793E\u533A)\uFF0C\u65B0\u7684\u60F3\u6CD5\uFF1A\u90A3\u4E9B\u90FD\u592A\u4E13\u4E86   \u661F\u7403\u7FA4\u91CC\u7684\u4E13\u5BB6\uFF1B\u4E0D\u505A\u7B2C\u4E00\u540D\uFF0C\u505A\u7B2C\u4E8C\u540D\u5C31\u597D\uFF1B\uFF08\u751A\u81F3\u591A\u4E2A\u9886\u57DF\u7684\u7B2C\u4E8C\u540D\uFF09","\u642D\u5EFA\u73AF\u5883","\u590D\u73B0\u6F0F\u6D1E","\u770B\u522B\u7684\u5E08\u5085\u4EA7\u751F\u7075\u611F","\u4E00\u4E9B\u7EFC\u5408\u5229\u7528\u6280\u5DE7","\u9A9A\u601D\u8DEF\u3001\u9A9A\u6280\u5DE7","\u6BD4\u8D5BPwn\u7684\u89E3\u9898\u6280\u5DE7\u3002  \u2014\u2014>  \u89E3\u9898\u3001\u5237\u9898","\u5404\u79CD\u673A\u5236\u7814\u7A76","\u5185\u5B58\u9A6C","\u6846\u67B6\u4E2D\u7684\u91CD\u8981\u73AF\u8282  \uFF08\u5C55\u5F00\u89E3\u8BFB\uFF09"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u4E13\u5BB6\u5FC3\u6001\uFF08\u5FAE\u8C03\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u5F53\u7136\u8981\u4E13\u4E1A\uFF0C\u8981\u5E72\u6CD5\uFF1B\u4F46\u3010\u4E0D\u505A\u7B2C\u4E00\u540D\uFF0C\u505A\u7B2C\u4E8C\u540D\u5C31\u597D\u3011\u3002\uFF08\u7075\u611F\u6E90\u4E8E\uFF1A\u7B2C\u4E00\u540D\u592A\u4E13\uFF0C\u8981\u820D\u5F03\u5F88\u591A\uFF1B\u7B2C\u4E00\u540D\uFF0C\u672A\u5FC5\u6709\u770B\u4E0A\u53BB\u90A3\u4E48\u5149\u9C9C\uFF1B\u7B2C\u4E00\u540D\u5BB9\u6613\u88AB\u88F9\u631F\u7740\uFF0C\u65E0\u6CD5\u8DE8\u754C\uFF1B\u76EE\u6807\u7B2C\u4E8C\u540D\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6210\u4E3A\u5F88\u591A\u4E2A\u9886\u57DF\u7684\u7B2C\u4E8C\u540D\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu(j.Q9+"\u624B\u7ED8",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([j.Q9+"\u624B\u7ED8\u5C31\u662F\u5728\u3010\u601D\u3011 \u2014\u2014 \u5B66\u800C\u4E0D\u601D\u5219\u7F54\uFF0C\u601D\u800C\u4E0D\u5B66\u5219\u6B86","\uFF08\u5012\u51FA\uFF0C\u5012\u5230\u7EB8\u4E0A\u3002\uFF09","\uFF08\u7B2C\u4E8C\u65E5\u8BA1\u5212\u3002\u5927\u4EFB\u52A1  \u62C6\u5206\u3002\uFF09\uFF08\u6BCF\u65E5\uFF0C\u5DF2\u6478\u5230\u5927\u81F4\u7684\u5E95\u4E86\u3002\uFF09","\u8D70\u8DEF\u4E00\u5C0F\u65F6\uFF08\u56FE\u4E66\u9986\uFF09\uFF0C\u601D+\u8FD0\u52A8/\u4F11\u606F","\u624B\u7ED8 \u2014\u2014 \u667A\u529B"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u63D0\u524D\u8FC7\u4E0A\u3010\u7687\u5E1D\u822C\uFF08\u4FE1\u606F\u8499\u853D\uFF09\u7684\u751F\u6D3B\u3011\uFF1F",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4FE1\u606F\u8FC7\u591A\uFF08GPT\u5927\u6A21\u578B\uFF09\u3002\u771F\u5047\u83AB\u8FA8\uFF0C\u9AD8\u5EA6\u903C\u771F"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u5916\u90E8\u6539\u53D8\uFF08\u7279\u6307 \u5E74\u4F1A \u7ED9\u624B\u7ED8\u7684\u7075\u611F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u8305\u585E\u987F\u5F00","\u6362\u6362\u8111\u5B50\uFF08\u5916\u754C\u7EC4\u7EC7  \u56E2\u4F53\u6D3B\u52A8<\u5FC3\u4E0D\u5728\u7109>  \uFF09    \uFF1F\uFF08\u65B0\u73AF\u5883\u662F    \u6D88\u8017\u54C1\uFF1F  \uFF09","\u53EF\u9047\u4E0D\u53EF\u6C42\uFF08\u770B\u5730\u65B9\u3002\u770B\u5730\u57DF\uFF09  \u770B\u5468\u56F4\u7684\u670B\u53CB  \u770B\u624B\u5934\u7684\u95F2\u94B1\u3002","\u865A\u65E0\u7F25\u7F08 \u2014\u2014 \u5F97\u5230\u4E86\u5C31\u662F\u6709  \u6CA1\u5F97\u5230\u5C31\u662F\u6CA1\u6709"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u75DB\u70B9\u3001\u96BE\u70B9\uFF08\u65B0\uFF09\uFF08\u4F3C\u4E4E\u5185\u5BB9 \u90FD\u53EF\u6682\u65F6\u653E\u5728 \u6F0F\u6D1E\u7814\u7A76\u8FD9\u4E2A\u677F\u9762\uFF09",tools:[Fu("\u53D1\u73B0\u548C\u6CBB\u7597\u6211\u7684\u5F31\u70B9\uFF1A\u8282\u5916\u751F\u679D\u3001\u7EC6\u679D\u672B\u8282\uFF08\u5728\u6709\u65F6\u95F4\u5361\u70B9\u7684\u65F6\u5019\uFF0C\u660E\u663E\u2026\u2026\uFF09\u3001\u5FEB\u5200\u65A9\u4E71\u9EBB",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),t0("\u5728\u75DB\u70B9\u96BE\u70B9\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u81EA\u5DF1\u56DE\u8FC7\u5934\u53BB\u770B")]},{name:"\u65B0\u7684\u5DE5\u5177\uFF08\u6682\u5B58\uFF09",tools:[Fu("Haystack  \uFF08\u7528\u4E8E\u6570\u636E\u6D41\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u9002\u7528\u4E8E\u6570\u636E\u6D41"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("jar-analyzer/jar-analyzer",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u7C7BCodeQL\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("Tabby v2 \u65B0\u4EE3\u5BA1\u5DE5\u5177\uFF08\u66F4\u7C7B\u4F3C\u4E8ECodeQL\uFF09\uFF09\uFF08\u597D\u50CF\u4F7F\u7528\u7684\u4EBA\u5F88\u591A\uFF0C\u6210\u65482024\u5E74\u4E5F\u5F88\u5927\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u7C7BCodeQL\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),Fu("\u7B80\u5355Fuzz\u63D2\u4EF6\uFF08\u6587\u4EF6\u4E0A\u4F20\u3001\uFF0C\u7B49\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:eu(_u(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u4E2A\uFF0C\u6587\u4EF6\u4E0A\u4F20","\u7B2C2\u4E2A\uFF0C\u6587\u4EF6\u4E0A\u4F20"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]}]},I=n.eV.quick_get_tool,w=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,R=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,P0={name:"\u516C\u4F17\u53F7\u5199\u4F5C__\u8DEF\u5B502",stages:[{name:"\u524D\u671F\u5FC5\u8981\u51C6\u5907",tools:[I("\u5408\u6CD5\u516C\u4F17\u53F7",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6302\u5728\u5E38\u7528\u53F7\u540D\u4E0B\uFF08\u5E73\u53F0\u53F7 \u6216 \u65B0\u4E2A\u4EBA\u53F7\uFF09","\u5B9E\u540D\u8BA4\u8BC1\uFF08\u4F9B\u5546\u4E1A\u6D3B\u52A8\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u5C3D\u91CF\uFF0C\u5C06\u5B9E\u540D\u7ED1\u5728\u4E00\u8D77\u3002
    \uFF08\u73B0\u5728\u5DF2\u7ECF\u4E0D\u662F \u8EB2\u8EB2\u85CF\u85CF\u7684\u65F6\u4EE3\u4E86\uFF09
                `}),I("\u8349\u7A3F-\u76EE\u524D\u6682\u5B9A\u5199\u5728Notion\uFF08\u7701\u4E8B\u3001\u8BED\u6CD5\u7B80\u5355\u3001\u624B\u719F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001Notion\u7F16\u5199","2\u3001\u590D\u5236\u5230\u6A21\u677F\uFF08\u4E2D\u95F4\u53EF\u80FD\u8FC7\u4E00\u9053\uFF0C\u590D\u5236\u5230Typora\u3010\u6807\u51C6\u5316\u3011\uFF0C\u518D\u7C98\u8D34\u5230\u6A21\u677F\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u516C\u4F17\u53F7\u6A21\u677F\uFF08\u53CA\u586B\u5145\u624B\u6BB5\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u9009\u578B\uFF1A\u3010doocs/md\u3011\u5DF2\u7ECF\u5F88\u597D\u4E86\uFF0C\u5E76\u4FDD\u5B58\u81EA\u5DF1\u7684\u7EC6\u8282\u914D\u8272\u3002     \uFF08\u5176\u5B83\uFF1A\u58A8\u6EF4MdNice\u3001\uFF09","2\u3001\u7C98\u8D34\u8FDB\u3010\u5B98\u65B9\u516C\u4F17\u53F7\u7F16\u8F91\u5668\u3011\uFF0C\u5FAE\u8C03\u90E8\u5206  \u4E0D\u517C\u5BB9\u7684\u7EC6\u8282  \u3002","3\u3001\u7C98\u8D34\u56FE\u7247  \u3002","4\u3001\u6DFB\u52A0\u53CB\u60C5\u5F15\u7528\u3002    \uFF08\u5185\u94FE\uFF1A\u6587\u5B57\u548C\u5F15\u7528\u8D85\u94FE\u63A5\uFF1B\u5916\u94FE\uFF1A\u5F15\u7528url\u5B57\u7B26\uFF09","5\u3001\uFF08\u68C0\u67E5  \u5DF2\u7ECF\u5728\u540E\u9762\u6B65\u9AA4\u5305\u62EC\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u539F\u59CB\u7D20\u6750",tools:[I("\u6280\u672F\u6D41\u7A0B\u3001\u6280\u672F\u7B14\u8BB0\uFF08\u5982\u679C\u81EA\u52A8 \u7B14\u8BB0 \u8F6C \u81EA\u5A92\u4F53\u6587\u7AE0\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7167\u5E38\u53BB\u5199","\u5F15\u7528\u8D44\u6599\uFF08\u653E\u5728\u6700\u540E\u9762\uFF09","\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898\u548C\u6613\u9519\u7684\u70B9"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u914D\u56FE\u3001\u622A\u56FE",{dataCheck_\u6570\u636E\u68C0\u67E5:w({"\u6D41\u7A0B\u622A\u56FE\uFF08\u64CD\u4F5C\u8FC7\u7A0B\u622A\u56FE\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u53D1\u73B0\u4E0D\u884C\uFF09\u6765\u6E90\uFF1AWayBack/WindRecorder\u81EA\u52A8\u622A\u56FE\uFF08\u64CD\u4F5C\u6D41\u7A0B\u4E2D\u7684\u56FE\uFF09","EV\u5F55\u5C4F\uFF08\u76EE\u524D\u4E8B\u513F\u6700\u5C11\u3001\u7A33\u59A5\u7684\u3001\u8017\u65F6\u4E2D\u7B49\uFF09"]),"\u6210\u54C1\u622A\u56FE\uFF08\u4EA7\u7269\u622A\u56FE\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u793E\u533A\u5927\u4F6C\u7684\u590D\u73B0\u5C55\u793A  \uFF08\u4E0D\u5B9C\u8FC7\u591A\u3002\u8981\u4E25\u683C\u7F72\u540D\uFF09","2.1\u3001\u81EA\u5DF1\u8BBE\u8BA1\u6A21\u677F\uFF08\u5C1D\u8BD5\u4F7F\u7528\u3010same.new\u3011\u53BB\u6252\u3010jevitty\u9996\u9875\u7AD9\u3011\uFF0C\u4F46\u5931\u8D25\u4E86\uFF09","2.2\u3001\u81EA\u5DF1\u8BBE\u8BA1\u6A21\u677F\uFF08\u5C1D\u8BD5\u76F4\u63A5\u751F\u6210\u3010\u82F9\u679C\u3001\u6296\u97F3\u3001\u77E5\u4E4E\u3001\u5C0F\u7EA2\u4E66\u3011\u98CE\u683C\uFF0C\u4F46\u90FD\u5931\u8D25\u4E86\uFF09","2.3\u3001\u540E\u6765\uFF0C\u8FDB\u884C\u5C71\u5BE8\u4F4E\u521B\u9B54\u6539\uFF1A\u91C7\u7528\u3010Claude3.7\u3011\uFF0C\u4E3A\u5927\u4F6C\u6A21\u677F\u6DFB\u52A0\u3010\u53D8\u79CD\u98CE\u683C\u3011  \uFF08\u6210\u529F\uFF0C\u3010Claude3.7\u3011\u505A\u8FD9\u4E2A\u5F88\u5728\u884C\uFF09"]),"\u76F4\u63A5\u6BB5\u843D\u6587\u5B57\u51FA\u56FE\uFF08\u65B0\u79D1\u6280\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u6B65\u3001gemini\u603B\u7ED3\u6587\u5B57\u4E3Aprompt","\u7B2C\u4E8C\u6B65\u3001GPT-4o\u81EA\u52A8\u7ED8\u56FE\uFF08\u7ED3\u6784\u6027\u548C\u7EC6\u8282\uFF0C\u975E\u5E38\u5F3A\uFF09  \uFF08\u5B98\u65B9\u514D\u8D39\u8D26\u53F7/\u63D2\u4EF6/PoE\u8D26\u53F7\uFF09"]),\u5C01\u9762\u56FE\u53CA\u5C3A\u5BF8\u5904\u7406:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u539F\u56FE\uFF0C\u8FD8\u662F\u6309\u7167\u3010GPT-4o\u3011\u7684\u914D\uFF08\u53EF\u80FD\u6BD4\u4F8B\u6709\u95EE\u9898\uFF0C  4o\u662F1:1  \uFF0C  \u516C\u4F17\u53F7\u5C01\u9762\u662F  2.35:1\uFF09","2\u3001\u6BD4\u4F8B\u8F6C\u6362  \uFF08\u5C1D\u8BD5\u8981gemini\u751F\u6210prompt\uFF0C\u8BA9\u3010GPT-4o\u3011  \u53D8\u901A\u751F\u6210\u8D85\u5927\u56FE\u6269\u56FE\uFF0C\u518D\u622A\u53D6  \u4F46\u5931\u8D25\u3002  \uFF09","3\u3001\u6269\u56FE\u3010MyEdit\u3011  (\u6210\u529F\uFF0C\u6BCF\u5929\u53EF2\u5F20)"]),\u5355\u6982\u5FF5\u51FA\u8D85\u7F8E\u56FE:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53C2\u8003\u3010\u4E91\u8212\u3011\u7684\u5DE5\u4F5C\u6D41\uFF1A\u300A\u6CA1\u6709\u827A\u672F\u7EC6\u80DE\u4E5F\u60F3\u521B\u4F5C\uFF1F\u4E00\u53E5\u8BDD\u8BA9AI\u79D2\u51FA\u5927\u5E08\u7EA7\u4F5C\u54C1\uFF0C\u9644\u63D0\u793A\u8BCD\u548C\u5582\u996D\u7EA7\u6559\u7A0B\u300B"]),\u6545\u4E8B\u4E66:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53C2\u8003\u3010\u8D5B\u535A\u5C0F\u718A\u732Bloki\u3011\u7684\u6587\u7AE0\uFF1A\u300A\u8C46\u5305\u624D\u662F\u56FD\u4EA7GPT-4o\uFF1F\u4E07\u5B57\u957F\u6587\u6DF1\u5EA6\u6D4B\u8BC4\uFF0C\u5347\u7EA7\u540E\u7684\u8C46\u5305\u6709\u591A\u5F3A\uFF01\uFF08\u5185\u96447000\u5B57\u63D0\u793A\u8BCD\u548C130\u5F20\u56FE\uFF09\u300B"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u65E5\u5E38\u5C0F\u6545\u4E8B",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53D6\u7FA4\u53CB\u7684\u5C0F\u6545\u4E8B\uFF0C\u5373\u53EF\u3002\uFF08\u8FD8\u6709\u7FA4\u53CB\u7684\u622A\u56FE\uFF0C\u8FD9\u4E9B\u90FD\u662F\u7B2C\u4E00\u624B\u7684\uFF09","\u81EA\u5DF1\u9047\u5230\u7684\u6545\u4E8B","\u56DE\u60F3\u8D77\u4EE5\u524D\u7684\u6545\u4E8B\uFF08\u8981\u6709 \u8BB2\u6545\u4E8B\u4EBA \u7684\u98CE\u5473\uFF0C\u6709\u8001\u6545\u4E8B\u7684\u611F\u89C9\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u8BD7\u96C6",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u8042\u9C81\u8FBE\u8BD7\u96C6","\u6CF0\u6208\u5C14\u8BD7\u96C6\uFF08\u662F\u4E0D\u662F \u7565\u5FAE\u6709\u4E9B\u8001\u4E86\uFF1F\uFF09","\u6728\u5FC3 \uFF08\uFF1F\uFF09","\u4E00\u4E9B\u56FD\u4EA7  \u8352\u8BDE\u65E0\u5398\u5934\u77ED\u8BD7  \uFF08\u5982  \u91C7\u94DC  \u63A8\u8350\u7684\u4E00\u4E9B\uFF09","\u4FF3\u53E5\u7F16\u5199\uFF085-7-5  \u975E\u5E38\u53D6\u5DE7\u7684\u65B9\u6CD5\uFF09\uFF08Gemini\u7F16\u5199\u8FD9\u4E2A  \u975E\u5E38\u5728\u884C\uFF01\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u4E00\u4E9B\u3010\u7ECF\u5178\u8457\u4F5C/\u65B0\u4E66\u3011\u7684\u91CD\u8981\u89C2\u70B9",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4F20\u7EDF\u6280\u672F\u65B0\u4E66\uFF1A\u5947\u70B9","\u4F20\u7EDF\u5FC3\u667A\u6210\u957F\u3001\u77E5\u8BC6\u4ED8\u8D39\uFF1A  \u5F15\u7528\u4E00\u4E9B","\u65B0\u4E66\uFF1AAI\u65F6\u4EE3\u7684Xxx","Google DeepReSearch \u53BB\u5BFB\u627E\u4E00\u4E9B\uFF0CAI\u540D\u4EBA\u7684\u6700\u65B0\u770B\u6CD5"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u5F00\u573A\u8BED",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u62BD\u8C61\u8BED\u5F55\uFF08\u4E0B\u65B9 \u5927\u6C34\u6BCD\u8001\u5E08\uFF09","\u674E\u6B63\u8BB2\u53F2\uFF1A  \u4E09\u89C2\u6B63\u76F4\u4E00\u628A\u5C3A\uFF0C\u624E\u624E\u5B9E\u5B9E\u8BB2AI",`\u7FA4\u53CB\uFF1A
(\u30B7_ _)\u30B7
\u4E09\u89C2\u8DDF\u7740\u4E94\u5B98\u8DD1\uFF0CAI \u54EA\u6709\u4E50\u5B50\u597D`]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u4E13\u5BB6\u5706\u684C\u8BA8\u8BBA(\u6A21\u62DF)",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u770B\u4E86\u751F\u6210\u7684\u4E00\u7BC7\u3010\u8D39\u6069\u66FC\u3011\uFF0C\u8FD9\u90E8\u5206\u8FD8\u633A\u4E0D\u9519\u7684\uFF1B\u800C\u4E14  \u53EF\u80FD\u5C31\u8FD9\u4E00\u90E8\u5206 \u5F88\u51FA\u6311.\u5F88\u51FA\u8272"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u9884\u884C\u6587\uFF08\u884C\u6587\u65B9\u6CD5\u8BBA\uFF09",tools:[I("\u884C\u6587\u65B9\u6CD5\u8BBA\uFF08AI\u9884\u5148\u7814\u7A76\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001Google DeepResearch \u7814\u7A76\uFF0C\u52A0\u4E0A Claude 3.7 \u603B\u7ED3\u3002\uFF08\u91CD\u5B9E\u64CD\u6027\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u884C\u6587\u6D41\u7A0B\uFF08\u8BD5\u9A8C\u671F\u2014\u2014\u2014\u2014\u6DF7\u4E71\u4F46\u5B55\u80B2\u51FA\u79E9\u5E8F\uFF09",tools:[I("\u65B9\u6CD5\u8BBA\u66B4\u529B\u521D\u7A3F\uFF08\u7B2C1\u6B21\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B80\u5355\u76F4\u63A5All In"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u53CD\u520D\u5F0F \u7B28\u529E\u6CD5\uFF08\u591A\u6B21N\u56DE\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53EF\u4EE5\u5927\u91CF\u7684\u4F7F\u7528Claude\uFF08\u4E00\u6B21\u5BF9\u8BDD\uFF0C\u5927\u91CF\u601D\u8003\uFF09\uFF0C\u53CD\u590D\u53CD\u520D\u3002   \uFF08\u53D1\u73B0Claude\u6781\u5BB9\u6613\u89E6\u53D1\u654F\u611F\u8BCD\u4E2D\u65AD\uFF0C\u9700\u8981\u591A\u8BD5\u5F88\u591A\u6B21\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u3010Claude\u3011\u7684prompt\u6A21\u677F\uFF1A
    \u539F\u59CB\u7D20\u6750\uFF1A
        1\u30012\u30013\u30014\u3001
        \uFF08\u7528\u70B9\u5217\u51FA\u6765\u3002\u8BA9AI  \u4E0D\u662F\u4ECE\u6587\u5B57\u957F\u77ED\uFF0C\u5224\u65AD\u91CD\u8981\u6027\uFF09
    \u6211\u60F3\u8981\u53C2\u8003\u7684\u6587\u7AE0\u7684\u6837\u5B50\uFF1A
        \uFF08\u602A\u7269\u9A6C\u620F\u56E2\uFF1F\uFF09
        \uFF08\u90E8\u5206\u5361\u5179\u514B\uFF1F\uFF09
        \uFF08\u91C7\u94DC\uFF1F\uFF09
        \u5176\u5B9E\uFF0C\u53EF\u4EE5\u505A  A\u3001B\u3001C  \u4E09\u4E2A\uFF0C\u624B\u52A8\u70B9\u51FA\u6211\u6B23\u8D4F\u7684\u7279\u70B9\u3002  \u8BA9\u5B83\u81EA\u5DF1\u9009\uFF08\u6709\u4E9B\u5185\u9690\u601D\u8003\uFF09\u3002
    \u6574\u4F53\u6587\u7AE0\u8981\u6C42\uFF1A  \uFF08\u7ED3\u6784\uFF0C\u53EF\u4EE5\u7531\u5B83\u53BB\u60F3\uFF09
        xxxx
                `}),I("\u8981AI\uFF0C\u5728\u4E0A\u8FF0\u8FC7\u7A0B\u4E2D\uFF0C\u53CD\u590Dargument\u81EA\u5DF1  \uFF0C\u770B\u770B\u771F\u5B9E\u6027\u7F3A\u4E4F\u54EA\u4E9B\u5185\u5BB9\uFF08\u5E76\u8FDB\u884C\u8865\u5145\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53EF\u4EE5\u5728\u4E0A\u8FF0\u6B65\u9AA4\u4E2D(\u5185\u542B\u7740)\u505A\uFF1B\u4E5F\u53EF\u4EE5  \u5355\u72EC\u4E00\u4E2A\u6B65\u9AA4  \u53BB\u505A"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u7B2C\u4E00\u4E2A\u5173\u952E\u70B9\uFF0CGemini\u7684\u3010Sota\u3011\u56DE\u7B54\uFF08\u5F88\u6709\u542F\u53D1\u6027\uFF09\u7167\u7740\u8FD9\u4E2A\u505A\uFF0C\u7136\u540E\u524D\u9762\u7684\u53EF\u4EE5\u91CD\u6765\u4E00\u904D\u4E86",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Gemini\u76F4\u63A5\u8F93\u51FA\u4E86\u3010\u8FC7\u7A0B\u3011\uFF0C\u800C\u975E\u7ED3\u679C\uFF1B  \u5305\u62EC\u3010\u603B\u51718\u6B65  \u7684  Sota\u3011\u600E\u4E48\u53BB\u505A"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u9884\u884C\u6587\uFF08\u7B2C\u4E00\u7BC7\u6587\u7AE0\u2014\u2014\u7B80\u5355\u4F46\u6709\u7528\uFF09",tools:[I("\u4F7F\u7528\u884C\u6587\u65B9\u6CD5\u8BBA\uFF0C\u751F\u6210\u82F1\u6587\u6587\u7AE0",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u4E0D\u9650\u8BED\u8A00","2\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u6D4B\u8BD5\u82F1\u6587","3\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u6D4B\u8BD5\u4E2D\u6587","4\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u9650\u5236\u5B83\u7684\u601D\u8003\u53EA\u80FD\u5728\u601D\u7EF4\u94FE\uFF0C\u8F93\u51FA\u5FC5\u987B\u662F\u6587\u7AE0","5\u3001\u6700\u7EC8\u8BD5\u9A8C\uFF1A\u5F97\u5230\u7684\u82F1\u6587\u6587\u7AE0\uFF0C\u8D28\u91CF\u5F88\u9AD8\u3002"])))}),I("\u82F1\u6587\u6587\u7AE0\uFF0C\u7FFB\u8BD1\u5230\u4E00\u4E2A\u6700\u597D\u7684\u7248\u672C",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u5C1D\u8BD5\u5404\u79CD  \u4E0D\u4E0B20\u7EC4  \u5E38\u89C4\u7684\u7FFB\u8BD1\u65B9\u6CD5\u3002\uFF08\u5473\u513F\u90FD\u5DEE\u4E00\u70B9\uFF09","2\u3001\u627E\u5230\u4E00\u7BC7\u3010\u6700\u4F73\u7FFB\u8BD1\u3011\u65B9\u6CD5\u7684\u539F\u6587\u3002","3\u3001\u57FA\u4E8E\u539F\u6587\uFF0C\u4F7F\u7528Gemini\u7FFB\u8BD1\uFF1B\u5E76\u4E0D\u65AD\u6478\u7D22\u3002\uFF08\u63A2\u7D22\u51FA\u3010\u5434\u519B\u3011\u52A0\u3010\u5361\u5B50\u54E5\u3011  \u7684\u98CE\u683C\uFF09"])))})]},{name:"\u6587\u98CE\u63D0\u53D6\u548C\u5E94\u7528",tools:[I("\u7CFB\u7EDF\u5316\u7684\u5206\u6790\u6587\u98CE",{dataCheck_\u6570\u636E\u68C0\u67E5:w({Gemini\u6587\u98CE\u63D0\u53D6:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Gemini\u64C5\u957F\uFF0C\u4F5C\u5BB6\u6587\u98CE\u7684\u63D0\u53D6","\u76F4\u63A5\u95EE\u4F5C\u5BB6\u7684\u6587\u98CE\uFF1A\u5361\u5C14\u8428\u6839\u3001\u5434\u519B","\u5582\u7ED9\u6587\u7AE0\uFF0C\u62BD\u53D6\u4F5C\u5BB6\u7684\u6587\u98CE\uFF1A\u5361\u795E\u7684\u300A\u8C46\u5305\u54ED\u300B\u3001\u300A\u65E5\u62A5\u6A21\u677F\u300B"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u90E8\u5206\u6613\u5B66\u7684\u5199\u4F5C\u6280\u5DE7-\u91C7\u94DC",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["DeepSeek\uFF0C\u5BF9\u53E4\u8BD7\u6587\uFF0C\u7814\u7A76\u975E\u5E38\u6DF1\u5165\uFF08\u6839\u636E\u91C7\u94DC\u7684\u6587\u7AE0\uFF09","\u6BD4\u5982\uFF0C\u91C7\u94DC\u7684\u5199\u4F5C\u6280\u5DE7\uFF1F","\u6709\u4E09\u7BC7\u6587\u7AE0\u3002\u8FD8\u80FD\u5EF6\u4F38\u5F00  \u53BB\u62C6\u53E4\u6587\u7684\u5199\u4F5C\u6280\u5DE7"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u6DA6\u8272",tools:[I("\u6807\u9898\u7194\u70BC",{dataCheck_\u6570\u636E\u68C0\u67E5:w({\u516C\u4F17\u53F7\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4ECE\u5361\u5179\u514B\u7684\u6587\u7AE0  \uFF0C\u627E\u89C4\u5F8B  \uFF0C\u751F\u6210\u4E00\u4E2A\u4EAE\u773C\u6807\u9898","\u5176\u5B83\u7684\u6807\u9898\u515A"]),GitHub\u4ED3\u5E93\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001prompt\u3010\u8BF7\u5C06\u2026\u2026\u2026\u2026\u8F6C\u53D8\u4E3AGitHub\u4ED3\u5E93\u7684\u4ECB\u7ECD\u7684\u4FCF\u76AE\u7684\u8BDD\u8BED\u3011"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u627E\u4E2AAI  \u6BD4\u5982Grok3   \u3002",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u4E4B\u524D  \u5361\u5179\u514B  \u5199\u8FC7\u4E00\u7BC7\u5C0F\u8BF4\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u591A\u4E2A\u6BD4\u5BF9\u4E00\u4E0B",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u662F\u7684\u3002\u4E5F\u4E0D\u4E00\u5B9A\u8981flowith\uFF1F  \u90A3\u4E2A\u611F\u89C9\u5FEB\u901F  \u5BB9\u6613\u9519\uFF1F"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u7075\u611F",tools:[I("\u6700\u540E\u4E00\u904D\uFF0C\u6DFB\u52A0\u7075\u611F",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u5E94\u8BE5\u6709\u633A\u591A\u7684\uFF1F\uFF09  \u53EF\u80FD\u4E00\u8FB9\u770B\u4E00\u8FB9\u6539  \u8FD8\u4F1A\u8D8A\u6765\u8D8A\u591A","\u5DE5\u4E1A\u5236\u51B0\u673A\uFF1A\u5927\u6C34\u6BCD\u8001\u5E08\u3002  \uFF08\u7B2C\u4E00\uFF1A\u7B80\u4ECB  \u6709\u5F88\u591A\u62BD\u8C61\u8BED\u5F55\u3002  \u7B2C\u4E8C\uFF1A\u6E9C\u51B0(\u8D5B\u535A)\u5BFB\u627E\u7075\u611F\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u68C0\u67E5",tools:[I("\u4EBA\u8BDD\u3001\u4EBA\u5473\uFF08\u7279\u522B\u662F\u8FC7 \u5FAE\u4FE1\u67E5\u91CD\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["111"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),I("\u9519\u8BEF\u4F8B\u5B50\u3001\u865A\u5047\u4E8B\u5B9E\u3001\u9020\u5047\u5F15\u7528",{dataCheck_\u6570\u636E\u68C0\u67E5:w(R(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["111"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]}]},I0=n.eV.quick_get_tool,w0=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,M0=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,j0={name:"\u64AD\u5BA2\u5236\u4F5C_\u9AD8\u771F\u5B9E",stages:[{name:"\u524D\u671F\u5FC5\u8981\u51C6\u5907",tools:[I0("\u5408\u6CD5\u516C\u4F17\u53F7",{dataCheck_\u6570\u636E\u68C0\u67E5:w0(M0(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6302\u5728\u5E38\u7528\u53F7\u540D\u4E0B\uFF08\u5E73\u53F0\u53F7 \u6216 \u65B0\u4E2A\u4EBA\u53F7\uFF09","\u5B9E\u540D\u8BA4\u8BC1\uFF08\u4F9B\u5546\u4E1A\u6D3B\u52A8\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u5C3D\u91CF\uFF0C\u5C06\u5B9E\u540D\u7ED1\u5728\u4E00\u8D77\u3002
    \uFF08\u73B0\u5728\u5DF2\u7ECF\u4E0D\u662F \u8EB2\u8EB2\u85CF\u85CF\u7684\u65F6\u4EE3\u4E86\uFF09
                `})]}]},a0=n.eV._\u5206\u7C7B\u5FAA\u73AF_\u5185\u5FAA\u73AF,T0=n.eV.quick_get_tool,O0=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,q0=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,N0={name:"CSharp\u9879\u76EE\u7684\u8865\u5145",stages:[...a0("",[...a0("",[{name:j.wM+"\u5DE8\u578BAI\u661F\u7403\u8868\u9762\uFF08\u65F6\u4EE3\u7EA2\u5229\uFF09",tools:[T0(j.wM+"\u3010AI-1\u6B65\u3011AI\u4ED3\u5E93\u76EE\u5F55\u6811\u5206\u6790",{dataCheck_\u6570\u636E\u68C0\u67E5:O0(q0(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["AI\u94FE\u63A5\uFF08\u8BE2\u95EE\u76EE\u5F55\u6811\u7684\uFF0C\u8BB0\u5F55\u5728\u8FD9\uFF09","\u3010\u6280\u672F\u6846\u67B6\u3011\u548C\u3010\u4E1A\u52A1\u6846\u67B6\u3011\uFF0C\u4F60\u7684\u81EA\u7531\u72C2\u60F3\uFF08\u8111\u6D77\u4E2D\u5148\u81EA\u7531\u5E7B\u60F3\uFF09","\u63D0\u53D6\u51FA\u7684\u3010\u5B89\u5168\u3011\u4FA7\u91CD\u70B9","\u67B6\u6784\u9E1F\u77B0\uFF08\u6280\u672F\u6808\u53CA\u6846\u67B6:Java/Web/\u524D\u7AEF\u6280\u672F/\u6570\u636E\u5E93\uFF09\uFF08\u6A21\u5757\u548C\u529F\u80FD\uFF1ACRM\u5BA2\u6237/OA\u529E\u516C/\u8D22\u52A1/\u8FDB\u9500\u5B58\u5E93\u5B58/\u7528\u6237\u6743\u9650/\u62A5\u8868/\u5DE5\u4F5C\u6D41/\u6587\u4EF6\u7BA1\u7406\uFF09","\u6839\u636E\u63D0\u53D6\uFF0C\u5236\u4F5C\u7684(\u5C0F)\u67B6\u6784\u56FE"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u76EE\u5F55\u6811
    \u8BF7\u89C1\u3010Python\u7528\u6237\u754C\u9762\u3011+\u3010F2 42.20.2\u3011\u3002
2\u3001\u5C0F\u67B6\u6784\u56FE
    \u57FA\u4E8E\u30101\u3001\u76EE\u5F55\u6811\u3011\u8FDB\u884C\u62D3\u5C55\uFF0C\u8BE2\u95EE\u65B9\u5F0F\uFF1A
            \uFF08\u91C7\u7528Claude3.7\u63A8\u7406\u7248 \u7684 \u5355\u6B21\u5BF9\u8BDD\u591A\u4E2A\u5DE5\u4F5C\u6D41\uFF09
                \u8BF7\u4F60\u6309\u7167\uFF0C\u4EE5\u4E0B\u7684\u6B65\u9AA4\u6D41\u7A0B\u4E3A\u6211\u751F\u6210\uFF1A
                1\u3001\u4E3A\u6211\u7528SVG\u5728HTML\u4E2D\u753B\u4E00\u5E45\uFF0C\u6709\u601D\u8003\u6DF1\u5EA6\u3001\u773C\u5149\u6709\u7A7F\u900F\u529B\u3001\u6D1E\u5BDF\u529B\u7684\u67B6\u6784\u56FE\u3002
                2\u3001\u505C\u987F\u4E0B\u6765\uFF0C\u8FDB\u884C\u601D\u8003\uFF1B\u53CD\u601D\u8FD9\u4EFDSVG\u53EF\u4EE5\u8FDB\u4E00\u6B65\u6316\u6398\u7684\u5730\u65B9\u3002
                3\u3001\u786E\u4FDDSVG\u7684\u5F62\u5F0F\u548C\u5185\u5BB9\uFF0C\u5DF2\u7ECF\u7B26\u5408  \u672C\u8D28  \u7684\u9700\u6C42\u3002
                4\u3001\u5728\u4EE5\u4E0A\u6B65\u9AA4\u90FD\u5DF2\u5B8C\u6210\u7684\u524D\u63D0\u4E0B\uFF1A\u4E3A\u5DF2\u6709\u7684SVG\uFF0C\u5728\u5185\u5BB9\u4E0D\u53D8\u7684\u524D\u63D0\u4E0B\uFF0C\u589E\u52A0\u4E00\u70B9 \u79D1\u5E7B\u548C\u8D5B\u535A\u670B\u514B \u98CE\u683C\u3002

3\u3001
                `})]}])])]},h=n.eV.quick_get_tool,f=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,b=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,L0=n.eV._\u5206\u7C7B\u5FAA\u73AF_\u5185\u5FAA\u73AF,Nu=n.eV._quick_get__AI_\u63D0\u95EEPrompt,R0={projects:[P0,j0,N0,j.ns,j.VR,z0,{name:"\u9879\u76EEA",stages:[{name:"\u76EE\u6807\u786E\u8BA4(\u6CD5\u4EBA\u786E\u8BA4)",tools:[h("\u57FA\u672C\u4EBA\u5DE5\u540D\u5F55",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u6839\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u5B89\u5353\u5E94\u7528/\u5305\u540D","t_\u8D44\u4EA7_APP"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u5355\u4F4D\u540D\u79F0(\u5982\u56FD\u8D44\u59D4)","t_\u6CD5\u4EBA_\u7532\u65B9")]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u7532\u65B9\u7ED9\u7684\u624B\u518C\u3001\u804A\u5929\u8BB0\u5F55\u3002
2\u3001\uFF08\u7532\u65B9\uFF09\u4E4B\u524D\u7684\u8D44\u4EA7\u6E05\u5355\u3002
3\u3001SRC\u7ED9\u51FA\u7684  \u76F8\u5173\u6CD5\u4EBA\u540D\u5F55\u3002
4\u3001\u901A\u8FC7\u73B0\u573A\u5E38\u8BC6\uFF0C\u63A8\u65AD\u51FA\u7684  \u6CD5\u4EBA\u8303\u56F4\u3001\u6CD5\u4EBA\u5173\u8054\u3002\uFF08\u867D\u7136\uFF0C\u53EF\u80FD\u5728  \u5929\u773C\u67E5  \u7B49\u4E0A\u9762\uFF0C\u6CA1\u6709\u660E\u663E\u6807\u6CE8\uFF1F\uFF09
                `}),h("\u5929\u773C\u67E5\u7ED3\u679C(\u65E0\u8D26\u53F7\u53EF\u964D\u7EA7\u4E3A\uFF1A1\u3001\u516C\u5F00\u67E5\u8BE2\uFF1B2\u3001\u624B\u5DE5\uFF1B3\u3001\u653E\u5F03\uFF1B)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([],["\u5E8F\u53F7","\u88AB\u6295\u8D44\u516C\u53F8\u540D\u79F0","\u88AB\u6295\u8D44\u6CD5\u5B9A\u4EE3\u8868\u4EBA","\u6CE8\u518C\u8D44\u672C","\u6295\u8D44\u5360\u6BD4","\u6CE8\u518C\u65F6\u95F4","\u72B6\u6001","\u4EBA\u5458\u89C4\u6A21","\u516C\u53F8\u72B6\u6001","\u516C\u53F8\u7C7B\u578B","\u53C2\u4FDD\u4EBA\u6570",(0,n.y)("\u540D\u79F0","t_\u516C\u53F8"),"\u5730\u5740","\u5B9E\u7F34\u8D44\u672C","\u5DE5\u5546\u6CE8\u518C\u53F7","\u6838\u51C6\u65E5\u671F","\u6CD5\u4EBA\u4EE3\u8868","\u6CE8\u518C\u5730\u5740","\u7535\u8BDD","\u767B\u8BB0\u673A\u5173","\u7B80\u4ECB","\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7","\u7EB3\u7A0E\u4EBA\u8D44\u8D28","\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801","\u7ECF\u8425\u8303\u56F4","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",(0,n.y)("\u7F51\u5740",["t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"]),"\u82F1\u6587\u540D\u79F0","\u8425\u4E1A\u671F\u9650","\u884C\u4E1A","\u90AE\u7BB1","\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u6765\u6E90\uFF1A
\u514D\u8D39\u7528\u6237\u3002
\u8D2D\u4E70\u5929\u773C\u67E5\u4F1A\u5458\u3001\u8D2D\u4E70\u4F01\u67E5\u67E5\u4F1A\u5458\u3002

2\u3001\u65B9\u5F0F\uFF1A
\u722C\u866B\u6A21\u62DF
API\u67E5\u8BE2
\u7F51\u9875\u7AEF\u6279\u91CF\u67E5\u8BE2\uFF08\u6761\u4EF6\u5355\u4E00\uFF09

              `})]},...L0("\uFF08\u5FAA\u73AF\u7B2C1\u9636\u6BB5\uFF09",[{name:"\u57FA\u4E8E\u6839\u57DF\u540D\uFF0C\u62D3\u5C55",tools:[h("EnScan\u7ED3\u679C/",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),h("AllInOne/OneForAll",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["id","alive","request","resolve",(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),(0,n.y)("subdomain","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),"level","cname",(0,n.y)("ip","t_IP_\u7AEF\u53E3"),"public","cdn",(0,n.y)("port","t_IP_\u7AEF\u53E3"),"status","reason","title",(0,n.y)("banner","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"cidr","asn","org","addr","isp","source"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u501F\u52A9\u3010Fox\u5DE5\u5177\u7BB1\u3011\u7684\u3010start2.bat\u3011\u5B9E\u73B0\u3002

\u8C03\u597D\u540E\uFF0C\u5C31\u4E00\u952E\u542F\u52A8\u4E86\uFF1A
1\u3001\u9700\u51C6\u5907\u4E00\u4E2A\u3010domains.txt\u3011\u7684\u8F93\u5165\u6587\u4EF6\u3002
                  `}),h("ShuiZe",{dataCheck_\u6570\u636E\u68C0\u67E5:f({GitHub\u654F\u611F\u4FE1\u606F:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]),\u722C\u866B:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u722C\u866B","\u5173\u952E\u5B57",(0,n.y)("\u94FE\u63A5","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u6807\u9898"]),\u8BC1\u4E66:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u5B50\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u8BC1\u4E66\u4FE1\u4EFB\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5")]),\u5B50\u57DF\u540DA\u8BB0\u5F55:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u5B50\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),"A\u8BB0\u5F55IP","CDN"]),Host\u78B0\u649E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("URL","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001\u7801","\u5E26Host\u7684\u6807\u9898","\u4E0D\u5E26Host\u7684\u6807\u9898"]),\u7F51\u7EDC\u7A7A\u95F4\u641C\u7D22\u5F15\u64CE:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]),\u670D\u52A1:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u534F\u8BAE",(0,n.y)("ip","t_IP_\u7AEF\u53E3"),(0,n.y)("port","t_IP_\u7AEF\u53E3")]),IP\u53CD\u67E5\u57DF\u540D:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("ip","t_IP_\u7AEF\u53E3"),(0,n.y)("\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5")]),\u5B58\u6D3B\u7F51\u7AD9\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001\u7801","\u6807\u9898",(0,n.y)("ip\u5730\u5740","t_IP_\u7AEF\u53E3"),"\u6846\u67B6\u4FE1\u606F",(0,n.y)("\u540E\u53F0\u8DEF\u5F84","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap")]),\u6F0F\u6D1E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6F0F\u6D1E\u540D",(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001"]),\u76F8\u5173\u57DF\u540D\u548CC\u6BB5:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u76F8\u5173\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u76F8\u5173C\u6BB5","t_\u7F51\u6BB5_C\u6BB5_\u65C1\u7AD9_\u7B49\u8FB9\u7F18\u4FE1\u606F"),"\u8BE5C\u6BB5\u51FA\u73B0\u7684\u57DF\u540D\u4E2A\u6570"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u5B89\u88C5\u5230VPS\u5185
    \u5B89\u88C5\u6BD4\u8F83\u7B80\u5355\uFF0C\u6559\u7A0B\u89C1\uFF1Ahttps://www.notion.so/ShuiZe-5457c4f777b5402397f25936a8805efb?pvs=4
        (\u90E8\u5206\u9700\u4FEE\u590D)

2\u3001\u7ED3\u679C
    (\u5982\u679C\u9700\u8981\u4ECEdocker\u5BFC\u51FA)
        docker cp nuclei b61f0d34ba4f:/ShuiZe_0x727/Plugins/Vul/Nuclei
    1
        \u65B0\u7684\u57DF\u540D\uFF1A['douban.com', 'douban.fm']
        C\u6BB5IP\uFF1A[]
        \u8D44\u4EA7\u4FE1\u606F\u4FDD\u5B58\u8DEF\u5F84\uFF1A/ShuiZe_0x727/result/e2568392c851/douban.com.xlsx
        Github\u4FE1\u606F\u4FDD\u5B58\u8DEF\u5F84\uFF1A/ShuiZe_0x727/result/e2568392c851/douban.com_github.txt
        \u8BF7\u4F7F\u7528-c\u529F\u80FD\u8DD1C\u6BB5\u8D44\u4EA7

                    `,_AI_\u63D0\u95EEPrompt:Nu(`
\u4EE5\u4E0B\u662F\u6211\u7684\u3010\u6C34\u6CFDShuiZe\u3011\u5DE5\u5177\u7684\u626B\u63CF\u7ED3\u679C\u3002

\u5305\u542B\u4E86
GitHub\u654F\u611F\u4FE1\u606F\u3001\u722C\u866B\u3001\u8BC1\u4E66\u3001\u5B50\u57DF\u540DA\u8BB0\u5F55\u3001Host\u78B0\u649E\u3001\u7F51\u7EDC\u7A7A\u95F4\u641C\u7D22\u5F15\u64CE\u3001\u670D\u52A1\u3001IP\u53CD\u67E5\u57DF\u540D\u3001\u5B58\u6D3B\u7F51\u7AD9\u6807\u9898\u3001\u6F0F\u6D1E\u3001\u76F8\u5173\u57DF\u540D\u548CC\u6BB5\u3001

\u8FD9\u4E9B\u7EF4\u5EA6\u7684\u4FE1\u606F\u6536\u96C6\u7ED3\u679C\u7684\u4FE1\u606F\u3002

\u8BF7\u4F60\u4E3A\u6211\u5206\u6790\u3002
                    `)}),h("\u706F\u5854ARL",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]},{name:"\u7F51\u7AD9\u8BBF\u95EE\u3001\u4EBA\u5DE5\u722C\u866B\u3001\u673A\u5668\u722C\u866B",tools:[h("FireFox\u8FC7\u6EE4+Burp\u53CC\u5F00+Top10",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),h("DomainHunterPro\uFF0C\u5355\u72EC\u6355\u6349\u6839\u57DF\u540D",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u4ECE\u8D85\u94FE\u63A5\u3001JS\u6587\u672C\u7B49\uFF0C\u63D0\u53D6\u51FA\u3010\u53EF\u80FD\u548C\u539F\u6839\u57DF\u540D \u76F8\u5173\u7684 \u65B0\u6839\u57DF\u540D\u3011\u3002
        \u5B9E\u73B0\u3010\u4E1A\u52A1\u903B\u8F91\u3011\u5C42\u9762\u7684\u63D0\u53D6\u3002
                    `}),h("\u7F51\u7AD9SiteMap",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u76F4\u63A5\u4ECEBurp\u63D0\u53D6\u3002
    \u6240\u6709\u7684\u5B50Url\uFF0C\u90FD\u5728\u3002
                    `})]},{name:"\u7EFC\u5408\u626B\u63CF\u73AF\u8282",tools:[h("TScan-\u8D44\u4EA7\u6D4B\u7ED8=CyberSearch",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("URL","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u7AEF\u53E3","t_IP_\u7AEF\u53E3"),"\u534F\u8BAE","\u6807\u9898",(0,n.y)("\u6307\u7EB9","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u5E94\u7528","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Whois","\u5907\u6848","ISP","OS","\u5730\u533A","\u66F4\u65B0","\u6765\u6E90"])))}),h("TScan-IP\u5730\u5740=IpScan",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),"Proto","Target","Banner","Code","Title","Area"])))}),h("TScan-\u57DF\u540D\u626B\u63CF=SubDomain",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("MainDoamin","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("SubDomain","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),"Title","Banner","Area","From"])))}),h("TScan-URL\u5730\u5740=UrlScan",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("Url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"Code","Len","Title","Banner","Mid",(0,n.y)("Waf","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Area"])))}),h("Goby\u7EA2\u961F\u7248-Web\u7F51\u7AD9-\u5C31\u53EBgoby",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),(0,n.y)("Server","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Title"])))}),h("Goby\u7EA2\u961F\u7248-\u5404\u79CD\u8D44\u4EA7-asset",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u7AEF\u53E3","t_IP_\u7AEF\u53E3"),"\u534F\u8BAE","Mac",(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("\u5E94\u7528\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u652F\u6491\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u670D\u52A1\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u7CFB\u7EDF\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u786C\u4EF6\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF")])))}),h("Nuclei\u76F8\u5173\u626B\u63CF(\u6216\u8BB8\u7EC4\u5408\u6307\u7EB9fingers AllInOne)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),h("\u6307\u7EB9fingers AllInOne\uFF08\u542BEhole\u7B49\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]}]),{name:"\u573A\u666F/\u529F\u80FD\u70B9",tools:[h("\u6D4B\u8BD5\u7528\u4F8B\u4F53\u7CFB(\u4EA4\u53C9:\u5F31\u53E3\u4EE4)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u300A\u4E1A\u52A1\u5B89\u5168\u903B\u8F91\u6F0F\u6D1E\u300B\u4E00\u4E66\u7684Xmind\u601D\u7EF4\u5BFC\u56FE\u3002\u5F88\u6E05\u6670\u4E86\u3002

\u4E0D\u8FC7\uFF0C\u4E5F\u53EF\u4EE5\u5217\u4E00\u4E2A  Excel  \uFF1B\u6B63\u597D\u517C\u5BB9\u7684\u3002

\u7136\u540E\uFF0C\u4E0A\u4F20\u4E00\u4E9B\uFF0C    \u5DF2\u7ECF\u6D4B\u8BD5\u8FC7\u7684\u8BB0\u5F55  \u70B9\u3002

                `}),h("\u4E0D\u540C\u654F\u611F\u5EA6/\u4E5D\u54C1\u4E2D\u6B63\u5236",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u4E3E\u4F8B\uFF1A
        \u4E0D\u540C\u654F\u611F\u5EA6\u7684\u9700\u8981\u6CE8\u610F\u7684
        \u9AD8\u9AD8
            admin\u540E\u53F0
        \u9AD8\u4E2D
            \u4E0A\u4F20\u70B9
        \u9AD8\u4F4E
            \u53EF\u793E\u4F1A\u6CE8\u518C\u7CFB\u7EDF
        \u4E2D\u9AD8
            \u767B\u5F55\u53E3\u3001\u627E\u56DE\u5BC6\u7801\u53E3
            \u8BF7\u6C42\u5934\u4F2A\u9020\u3001CSP\u4F2A\u9020\uFF08\u524D\u7AEF\u7ED5\u8FC7\uFF09
        \u4F4E\u9AD8
            \uFF08\u6DF1\u5733\u7EDF\u4E00\u767B\u5F55\uFF0C\u53EF\u4EE5\u8FC7\uFF09

                `})]},{name:"\u91CD\u70B9\u7A81\u7834\u53E3",tools:[h("URL\u6316\u6398\uFF08URLFinder/PackerFuzzer/\u9A9A\u5957\u8DEF\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),h("\u5F31\u53E3\u4EE4\u7206\u7834\uFF08ffuf+SecDictionary\uFF09(\u7A81\u7834)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u5F88\u597D\u7528\u7684 \u4E2D\u56FD\u5B9D\u5B9D\u5B57\u5178\u3002
                `}),h("XScan\u626B\u63CF\uFF08\u5927\u91CFXSS\u53EF\u4EE5\u5237\u65B0\u5728\u5730\u56FE\u4E0A\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u542C\u8BF4\uFF0C\u548C\u817E\u8BAFSRC\u699C\u4E00\uFF0C\u6709\u5173\uFF1F
                `})]},{name:"\u590D\u76D8",tools:[h("\u3010NBLM\u3011\u57FA\u7840\u901A\u7528\u56FA\u5B9A(5\u7EF4\u5EA6)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),h("\u5173\u952E\u5B57\u8BB0\u5F55\u4E0E\u6355\u6349(\u53EF\u4EE5\u4ECE\u3010RuoYi\u3011\u6279\u91CF\u63D0)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]},{name:"\u540C\u884C\u8D44\u6599\u53C2\u8003",tools:[h("\u5386\u53F2\u6F0F\u6D1E\u3001\u540C\u4E8B\u6F0F\u6D1E(\u542B\u6240\u6709\u6DF1\u5733\u6D4B\u8BC4WP)",{dataCheck_\u6570\u636E\u68C0\u67E5:f({"1\u6708\u4EFD":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u63D0\u4EA4\u8005",(0,n.y)("\u7B49\u7EA7\uFF1A \u7EFF\u8272\uFF1A\u5DF2\u901A\u8FC7 \u7EA2\u8272:\u91CD\u590D\u63D0\u4EA4/\u5FFD\u7565","t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E"),"\u7B49\u7EA7","\u6F0F\u6D1E\u63D0\u4EA4\u65F6\u95F4","\u5DF2\u5F97\u5206","\u5408\u8BA1","\u5907\u6CE8"]),\u9884\u5B58\u6F0F\u6D1E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u63D0\u4EA4\u8005",(0,n.y)("\u4EE5\u4E0B\u6F0F\u6D1E\u6682\u4E0D\u63D0\u4EA4\uFF0C\u505A\u9884\u5B58","t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E"),"\u6F0F\u6D1E\u65F6\u95F4","\u5907\u6CE8"])}),_AI_\u63D0\u95EEPrompt:Nu(`
\u4EE5\u4E0B\u662F\u6211\u7684\u300A\u5386\u53F2\u6F0F\u6D1E\u3001\u540C\u4E8B\u6F0F\u6D1E\u300B\u3002
\u8BF7\u4F60\u4E3A\u6211\uFF1A
    1\u3001\u62BD\u53D6\u4E3A\u6811\u72B6\u56FE\uFF0C\u5C55\u73B0 \u6D89\u53CA\u5355\u4F4D\u3001\u6D89\u53CA\u6F0F\u6D1E\u5355\u4F4D \u7684\u6570\u636E\u900F\u89C6\u6548\u679C\u3002
        1.1\u3001\u9700\u8981\u5E26\u76F8\u5173\u7684\u6570\u91CF\u7EDF\u8BA1\u663E\u793A\u3002
        1.2\u3001\u9700\u8981\u9644\u5E26\u76F8\u5173\u91CD\u8981\u7684\u7EDF\u8BA1\u6307\u6807\u3002
        1.3\u3001\u5982\u679C\u4F60\u504F\u597D\u7528html\u7ED8\u5236\uFF0C\u8BF7\u7528<html>\u6807\u7B7E\u505A\u6700\u5916\u5C42\u5305\u88F9\u3002

    2\u3001\u6DF1\u5165\u6316\u6398\uFF08\u4E4B\u524D\u7C7B\u4F3C\u9879\u76EE\u5DF2\u7ECF\u51FA\u73B0\u8FC7\u7684\uFF09\u5EFA\u8BAE\u6027\u95EE\u9898\uFF1A
        1. \u7CFB\u7EDF\u6027\u95EE\u9898\uFF1A
        - \u5404\u5355\u4F4D\u662F\u5426\u4F7F\u7528\u76F8\u540C\u7684\u5F00\u53D1\u6846\u67B6\u6216\u7EC4\u4EF6\uFF1F\u8FD9\u4E9B\u7EC4\u4EF6\u662F\u5426\u90FD\u5B58\u5728\u7C7B\u4F3C\u6F0F\u6D1E\uFF1F
        - \u662F\u5426\u5B58\u5728\u7EDF\u4E00\u91C7\u8D2D\u7684\u7CFB\u7EDF\u5E73\u53F0\uFF1F\u8FD9\u4E9B\u5E73\u53F0\u662F\u5426\u90FD\u5B58\u5728\u5171\u540C\u95EE\u9898\uFF1F

        2. \u6F0F\u6D1E\u5173\u8054\uFF1A
        - \u5DF2\u53D1\u73B0\u7684webpack\u6E90\u7801\u6CC4\u9732\u662F\u5426\u80FD\u8FDB\u4E00\u6B65\u5BFC\u81F4\u5176\u4ED6\u6F0F\u6D1E\uFF1F
        - API\u672A\u6388\u6743\u8BBF\u95EE\u662F\u5426\u80FD\u94FE\u5F0F\u5229\u7528\u83B7\u53D6\u66F4\u591A\u6743\u9650\uFF1F

        3. \u653B\u51FB\u9762\u6269\u5C55\uFF1A
        - \u53D1\u73B0\u7684\u5185\u7F51IP\u6CC4\u9732\u662F\u5426\u80FD\u7528\u4E8E\u8FDB\u4E00\u6B65\u7684\u5185\u7F51\u6E17\u900F\uFF1F
        - \u5404\u7C7B\u4FE1\u606F\u6CC4\u9732\u662F\u5426\u80FD\u7528\u4E8E\u6784\u5EFA\u5B8C\u6574\u7684\u653B\u51FB\u94FE\uFF1F

        4. \u6DF1\u5165\u63A2\u7D22\u65B9\u5411\uFF1A
        - \u662F\u5426\u5B58\u5728\u6279\u91CF\u5316\u53D1\u73B0\u7279\u5B9A\u6F0F\u6D1E\u7684\u65B9\u6CD5\uFF1F
        - \u5982\u4F55\u5C06\u5355\u4E2A\u6F0F\u6D1E\u6269\u5C55\u5230\u76F8\u4F3C\u7CFB\u7EDF\uFF1F
        - \u6F0F\u6D1E\u4E4B\u95F4\u662F\u5426\u5B58\u5728\u7EC4\u5408\u5229\u7528\u7684\u53EF\u80FD\uFF1F

    3\u3001\u4E3A\u6211\u63D0\u51FA\uFF0C\u6709\u6F5C\u529B\uFF08\u7EE7\u7EED\u6316\u6398\u6F0F\u6D1E\u3001\u6269\u5927\u6218\u679C\uFF09\u7684  \u6D89\u53CA\u5355\u4F4D  \u7684\u5EFA\u8BAE\u3002

    4\u3001\u5E76\u4E3A\u6211\uFF0C\u7ED9\u51FA\u51E0\u4E2A\u53EF\u4F9B\u53C2\u8003\u7684\uFF08\u65B0\u7684\uFF09\u3010\u6709\u6D1E\u5BDF\u529B\u7684\u95EE\u9898\u3011\uFF0C\u4EE5\u5907\u6211\u6DF1\u5165\u6316\u6398\u3001\u6DF1\u5165\u601D\u8003
                `)}),h("\u3010NBLM\u3011\u57FA\u4E8E\u5DF2\u6709WP\uFF0C\u8FDB\u4E00\u6B65\u5206\u6790(AI\u6316\u6398)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([`\u95EE\u98981\uFF1A
\u6362\u884C1`,`\u95EE\u98982\uFF1A
\u6362\u884C2`,`\u95EE\u98983\uFF1A
\u6362\u884C3`,`\u95EE\u98984\uFF1A
\u6362\u884C4`,`\u95EE\u98985\uFF1A
\u6362\u884C5`,`\u95EE\u98986\uFF1A
\u6362\u884C6`,`\u95EE\u98987\uFF1A
\u6362\u884C7`,`\u95EE\u98989\uFF1A
\u6362\u884C8`,`\u95EE\u98989\uFF1A
\u6362\u884C9`,`\u95EE\u989810\uFF1A
\u6362\u884C10`])))})]},{name:"\u89E3\u7532\u5F52\u7530/\u6253\u5206",tools:[h("\u6253\u5206\u8868(\u505A\u51FA\u67651\u5206;\u505A\u4E0D\u51FA\u6765\u5C3D\u529B\u4E860.2\u5206)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u91CD\u70B9\u9879\u76EE\u6295\u5165\u76EE\u6807","\u63CF\u8FF0","\u7CFB\u6570","\u6253\u5206"])))})]},{name:"\u5916\u90E8\u8865\u5145\u6750\u6599(\u7EA0\u6B63)",tools:[h("\u601D\u7EF4\u5BFC\u56FE(\u76F8\u5BF9\u56FA\u5B9A)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([...["\u5C42\u7EA7\u4E00","\u5C42\u7EA7\u4E8C","\u5C42\u7EA7\u4E09","\u5C42\u7EA7\u56DB","\u5C42\u7EA7\u4E94","\u5C42\u7EA7\u516D","\u5C42\u7EA7\u4E03","\u5C42\u7EA7\u516B","\u5C42\u7EA7\u4E5D","\u5C42\u7EA7\u5341","\u5C42\u7EA7\u5341\u4E00"].map(s=>(0,n.y)(s,"t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E"))]))),_AI_\u63D0\u95EEPrompt:Nu(`
\u4EE5\u4E0B\u662F\u6211\u7684\uFF08\u4E2D\u56FD\u56FD\u5185\uFF09\u300A\u653B\u51FB\u961F\u7EA2\u961F\uFF08\u5916\u56F4\u6253\u70B9\u4EE5\u6C42\u7A81\u7834\uFF09-\u601D\u7EF4\u5BFC\u56FE\u300B\u3002

\u8BF7\u4F60\u4E3A\u6211\uFF1A
1\u3001\u6DF1\u5165\u5206\u6790\u601D\u8DEF
2\u3001\u5E94\u7528\u4E8E\u5177\u4F53\u7684\u7F51\u7EDC\u653B\u9632\u6F14\u4E60

                `)}),h("\u4E2D\u7F8E\u5DEE\u5F02(\u76F8\u5BF9\u56FA\u5B9A)",{dataCheck_\u6570\u636E\u68C0\u67E5:f(b(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u76EE\u524D\uFF0C\u3010DeepSeek+\u817E\u8BAF\u5143\u5B9D\u3011\uFF0C\u505A\u7684\u8FD8\u7B97  \u6BD4\u8F83\u597D\u7684\u4E86\u3002
                `})]}]}]},G0=r(406066),r0,U0=new Ou("\u534A\u81EA\u52A8AI-\u6E17\u900F\u6D4B\u8BD5"),V0=(0,c.ZP)(q.Z)(r0||(r0=(0,N.Z)([`
  .ant-tabs-extra-content {
    flex : auto !important;
  }

  .ant-tabs-nav-wrap {
    min-width   : `,`em !important;
    white-space : pre-line !important;

    .ant-tabs-tab {
      min-width : 3em !important;
    }
  }

`])),s=>s.tab_number*(3+2)),E0=new G0.f("ProjectTimeline_SaveLoad"),H0=s=>{var t,_,E=s.base_cfgJson,o=(0,u.useState)(!1),D=(0,i.Z)(o,2),g=D[0],p=D[1],H=(0,u.useState)(null),U=(0,i.Z)(H,2),W=U[0],Au=U[1],iu=(0,u.useState)(!1),Z=(0,i.Z)(iu,2),J=Z[0],V=Z[1],T=(0,u.useState)(null),$=(0,i.Z)(T,2),d=$[0],cu=$[1],nu=U0.useAsyncForm_\u517C\u987E\u4E24\u8005({}),O=nu.form,Du=nu.loading,bu=nu.error,lu=nu.updateForm_\u5916\u5C42\u6D45\u514B\u9686,zu=(0,u.useState)(E),i0=(0,i.Z)(zu,2),Pu=i0[0],$0=i0[1],J0=(0,u.useState)(""),c0=(0,i.Z)(J0,2),K0=c0[0],X0=c0[1],Y0=(0,u.useState)(E0.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A({tab_select_key_projectName:(t=(_=Pu.projects[0])===null||_===void 0?void 0:_.name)!==null&&t!==void 0?t:""})),o0=(0,i.Z)(Y0,2),ju=o0[0],Q0=o0[1],Tu=(0,u.useRef)(null);function ue(){var B=Object.entries(O).map(A=>{var v,a=(0,i.Z)(A,2),l=a[0],y=a[1];return(v=y==null?void 0:y.excel_arr)!==null&&v!==void 0?v:[]}).flat(9);return B}(0,u.useEffect)(()=>{var B=ku._get_\u539Fcfg_\u5E73\u644Atool_arr(E),A=ue();function v(a){var l={desc:"\u56FA\u5B9A\u4E00\u4E2A\u5143\u7D20\uFF0C\u5176\u5B9E\u662F\u5197\u4F59\u7684\u4E2D\u95F4\u4E00\u5C42\u3002",excel_arr:[]};a.results||(a.results=[l]);var y=!0;y&&(a.results=[l])}B.forEach(a=>{v(a);var l=a.results[0];l.excel_arr=[],A.forEach(y=>{y.project_name===a.project_name&&y.tool_name===a.name&&l.excel_arr.push(y)})}),$0((0,F.Z)({},Pu))},[O]);var ee=B=>{Au(B),p(!0)};function ne(B){return Lu.apply(this,arguments)}function Lu(){return Lu=(0,S.Z)(function*(B){var A=Object.entries(O).map(v=>{var a,l=(0,i.Z)(v,2),y=l[0],Q=l[1];return(a=Q==null?void 0:Q.excel_arr)!==null&&a!==void 0?a:[]});A.forEach(v=>{v.includes(B)&&pu.xXNew_SArray_Helper.removeItem_onOrigin_and_rtnOrigin(v,B)}),yield lu((0,F.Z)({},O))}),Lu.apply(this,arguments)}function Fe(B,A,v){return Ru.apply(this,arguments)}function Ru(){return Ru=(0,S.Z)(function*(B,A,v){var a,l,y=v.project,Q=v.tool,su=Q.name;yield lu({[su]:(0,F.Z)((0,F.Z)({},O[su]),{},{excel_arr:[...(a=(l=O[su])===null||l===void 0?void 0:l.excel_arr)!==null&&a!==void 0?a:[],(0,F.Z)((0,F.Z)({file_name:B.name,file_desc:"\u6587\u4EF6\u5185\u5BB9"},{project_name:y.name,file_time_count:Yu.k.get_format(void 0,Yu.d["YYYY-MM-DD HH:mm:ss"]),tool_name:Q.name}),{},{row_arr:Object.entries(A).map((M,K,tu)=>{var au=(0,i.Z)(M,2),Su=au[0],vu=au[1],hu=tu.length===1;return vu.map(fu=>hu?fu:(0,F.Z)({\u5B50\u8868:Su},fu))}).flat(9)})]})})}),Ru.apply(this,arguments)}var te=u.createElement("pre",null,`
\u540E\u7EED\u53EF\u4EE5\u8DDF\u8FDB\u7684\uFF1A
    AI\u6E17\u900F\u7CFB\u7EDF - Poe    https://poe.com/chat/30bc0pqsuom1x06wgu4

\u5F85\u505A\u4E8B\u9879\uFF1A
    1\u3001\u4E4B\u524D\u5728\u7EB8\u4E0A\u9762\uFF0C\u5199\u4E86\u4E2A  \u4E00\u4E9B\u8BBE\u8BA1\u56FE\u3002
    2\u3001\u6211\u7684\u5144\u5F1FBro\uFF0C    \u7CBE\u8BDA\u6240\u81F3\u3001\u91D1\u77F3\u4E3A\u5F00
    3\u3001\u589E\u52A0\u4E00\u4E9BAI\u7684\u5904\u7406\u65B9\u5F0F\uFF08API\u6216Prompt\uFF09
        \u7B14\u8BB0\u4E2D\u6709\u4E00\u4E9B
    4\u3001  12\u670829\u65E5\u4E4B\u540E\uFF0C\u4E00\u4E9B\u7B14\u8BB0
    5\u3001  \u8BBE\u8BA1
            \u4E00\u4E9B\u73AF\u8282
                1\u67084\u65E5
                \u8865\u5145\u7684\u4E00\u4E9B\u5C0F\u70B9\u3002
    6\u3001\u7532\u65B9\u60C5\u51B5    \uFF08\u5C0F\u767D\u7248\uFF09
        1\u67084\u65E5
    7\u3001
    8\u3001
      `),ae=u.createElement("pre",{style:{whiteSpace:"pre-wrap"}},f0,u.createElement(k.Z,null),g0),Gu=window.innerWidth*.9,re=u.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-end",gap:"0.2em 0.1em"}},u.createElement("div",{style:{border:"lightgray dotted 1px"}},(()=>{var B=function(){var a=u.createElement(uu.Z,{type:"primary",onClick:()=>{var y=JSON.stringify(Pu,null,2);Cu.Z.confirm((0,F.Z)((0,F.Z)({title:"\u5BFC\u51FA\u6570\u636E",content:u.createElement("div",null,"1\u5230\u65E0\u7A77\u5927")},{okText:"\u786E\u8BA4",onOk(){pu.Download_Helper._download_json(y)}}),{},{cancelText:"\u53D6\u6D88"}))}},"\u5BFC\u51FA\u6570\u636E\uFF08\u5168\u90E8\u62A5\u544A\uFF0CJSON\uFF09\uFF08\u5F85  \u538B\u7F29\u4F53\u79EF\uFF09"),l=u.createElement(uu.Z,{type:"primary",onClick:()=>{ku._\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF(void 0,E)}},"\u5BFC\u51FA\u6570\u636E\uFF08\u6240\u6709\u7B5B\u9009\u9879\uFF0C\u5206\u5F00\uFF0CZip\uFF09");return u.createElement(u.Fragment,null,a,l)}(),A=ku._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(E),v=A.\u7EDF\u8BA1_map_\u53BB\u9664\u4E0D\u4F5C\u7B5B\u9009\u7684\u90A3\u4E2A____entries;return u.createElement(u.Fragment,null,B,v.map(a=>{var l=(0,i.Z)(a,2),y=l[0],Q=l[1],su=y;return u.createElement(uu.Z,{type:"dashed",onClick:()=>{ku._\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF(su,E)}},"\u5BFC\u51FA\u6570\u636E\uFF08".concat(su,"\uFF09"))}))})()),u.createElement(uu.Z,{type:"primary",onClick:(0,S.Z)(function*(){var B=ku._get_\u539Fcfg_\u5E73\u644Atool_arr(E).filter(a=>a.project_name===ju.tab_select_key_projectName),A=!0,v=B.map(a=>{var l="".concat(a.project_index,"\u3001").concat(a.project_name),y="".concat(a.stage_index,"\u3001").concat(a.stage_name),Q="".concat(a.tool_index,"\u3001").concat(a.name),su=[{type:"directory",filepath_arr:[l,y+"____"+Q,"\u539F\u59CB\u4EA7\u7269"]},{type:"directory",filepath_arr:[l,y+"____"+Q,"\u91CD\u65B0\u624B\u52A8\u6574\u5408\u540E\u4EA7\u7269"]}];if(A){var M;return[{type:"file",filepath_arr:[l,y+"____"+Q,"ReadMe.md"],content:(M=a.desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9)!==null&&M!==void 0?M:"\u6682\u65E0\uFF0C\u987E\u540D\u601D\u4E49"},...su]}else return{type:"directory",filepath_arr:[l,y+"____"+Q]}}).flat(9);yield pu.Zip_Helper.zip_\u591A\u76EE\u5F55\u591A\u6587\u4EF6_Download([...v])})},"\u5BFC\u51FA\u6574\u4E2A\u9879\u76EE\u7A7A\u767D\u7ED3\u6784(\u521D\u59CB\u5316)-Zip\u5305"),u.createElement(uu.Z,{type:"primary",onClick:(0,S.Z)(function*(){var B=ku._get_\u539Fcfg_\u5E73\u644Atool_arr(E).filter(v=>v.project_name===ju.tab_select_key_projectName),A="\u8FD9\u91CC\u4E00\u4E2A\u5F85\u590D\u5236\u7684\u5143\u7D20";Cu.Z.confirm({title:"111",content:u.createElement("div",null,u.createElement("div",{id:A},B.map((v,a)=>(0,j.Z$)(v,"".concat(a+1,".").concat(a+1)))),u.createElement(j.gM,{_toCopy_element_fn:()=>document.getElementById(A)})),onOk(v){}})})},"\u5BFC\u51FA\u6574\u4E2A\u9879\u76EE\u7A7A\u767D\u7ED3\u6784(\u521D\u59CB\u5316)-Notion\u6587\u6863(\u542BTable)"));return u.createElement(u.Fragment,null,u.createElement("div",null,u.createElement(b0,{_\u7EDF\u8BA1:ku._\u7EDF\u8BA1map_\u5404\u9879\u5C55\u677F\u5C55\u793A\u6307\u6807(E)})),u.createElement("div",null,u.createElement(V0,{activeKey:ju.tab_select_key_projectName,onChange:B=>{E0.simple_set_and_save("tab_select_key_projectName",{target:{value:B}},ju,Q0)},tabBarExtraContent:re,tab_number:Pu.projects.length},Pu.projects.map((B,A)=>{var v;return u.createElement(q.Z.TabPane,{tab:B.name,key:B.name,style:{position:"relative"}},u.createElement(Z0,null),u.createElement(l0,null,(v=B.stages)===null||v===void 0?void 0:v.map((a,l)=>u.createElement(s0,{key:l},u.createElement(B0,null,a.name),(()=>{var y,Q,su=Math.max(...((y=a.tools)!==null&&y!==void 0?y:[]).map(M=>{var K;return((K=M.results)!==null&&K!==void 0?K:[]).map(tu=>{var au;return((au=tu.excel_arr)!==null&&au!==void 0?au:[]).length})}).flat(9));return u.createElement(D0,{className:"TimelineWrapper",max_result_count:su},u.createElement(C0,{className:"TimelineLine",tools:a.tools},(Q=a.tools)===null||Q===void 0?void 0:Q.map((M,K)=>{var tu,au="fileInput-".concat(M.name),Su=K%2==0,vu=K===0;return u.createElement(d0,{className:"ToolNode",key:K,index:K,tools:a.tools},u.createElement("div",{className:"tool-icon"},u.createElement(z,null)),u.createElement("div",{className:"tool-dot"}),u.createElement("div",{className:"tool-name",style:(0,F.Z)({},K0===au?(0,F.Z)((0,F.Z)({},{}),{boxShadow:" inset 0 0.5em 0 0 #FF7800,    /* \u4E0A\u8FB9 */ inset -1em 0 0 0 #FF7800/* \u53F3\u8FB9 */"}):{}),onClick:()=>{V(!0),X0(au),cu({project:B,tool:M})}},M.name),(tu=M.results)===null||tu===void 0?void 0:tu.map((hu,fu)=>{var gu;return u.createElement(A0,{key:fu,isTop:Su,toolIndex:K,tools:a.tools},(gu=hu.excel_arr)===null||gu===void 0?void 0:gu.map((yu,Bu)=>u.createElement("div",{style:{position:"relative"},onClick:()=>{ee(yu)}},u.createElement(m0,{key:Bu}),u.createElement(p0,{style:(0,F.Z)((0,F.Z)({position:"absolute",fontSize:"8px"},vu?{right:"71%",width:"13em",transformOrigin:"right center"}:{left:"83%",width:"15em",transformOrigin:"left center"}),{},{top:"25%"})},yu.file_name))))}))})))})()))))})),(()=>{var B=u.createElement("div",null,"Excel Data \u300A",W==null?void 0:W.file_name,"\u300B ",u.createElement(uu.Z,{onClick:()=>{Cu.Z.confirm((0,F.Z)({title:"\u64CD\u4F5C\u786E\u8BA4",content:"\u70B9\u51FB\u4E86\u5220\u9664"},{okText:"\u786E\u8BA4\u5220\u9664",onOk(){return(0,S.Z)(function*(){alert("\u70B9\u51FB\u4E86\u5220\u9664"),yield ne(W)})()}}))}},"\u5220\u9664"));return u.createElement(Cu.Z,{title:B,visible:g,onCancel:()=>p(!1),footer:null,width:Gu},u.createElement("div",{style:{display:"flex",flexDirection:"column"}},(()=>{function A(){var a,l=Qu.U._\u660E\u7EC6\u56FE\u666E\u901A\u8868.simple_\u751F\u6210_cp("\u666E\u901A\u8868",{data:(a=W==null?void 0:W.row_arr)!==null&&a!==void 0?a:[]},{option\u589E\u52A0\u9009\u9879:{width:Gu*.9,height:690,style:Qu.U._getStyle_quickWidth_\u884C\u5217\u5BBD\u9AD8(85,{60:["\u5E8F\u53F7"],80:["\u5B50\u8868"],150:["\u5C42\u7EA7\u4E00","\u5C42\u7EA7\u4E8C","\u5C42\u7EA7\u4E09","\u5C42\u7EA7\u56DB","\u5C42\u7EA7\u4E94","\u5C42\u7EA7\u516D","\u5C42\u7EA7\u4E03","\u5C42\u7EA7\u516B","\u5C42\u7EA7\u4E5D","\u5C42\u7EA7\u5341","\u5C42\u7EA7\u5341\u4E00"],183:["\u6839\u57DF\u540D"],201:["\u8C03\u7814\u5BF9\u8C61","\u95EE\u9898","\u8C03\u7814\u7ED3\u679C","\u76EE\u7684","\u89E3\u51B3\u65B9\u6848"]})}});return l}function v(){var a;return W==null||(a=W.row_arr)===null||a===void 0?void 0:a.map(l=>u.createElement(u.Fragment,null,u.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.createElement("p",null,"\u65F6\u95F4: ",l.timestamp),u.createElement("p",null,"\u76EE\u6807: ",l.primary_target),u.createElement("p",null,"IP: ",l.secondary_target),u.createElement("p",null,"\u7C7B\u578B: ",l.info_type),u.createElement("p",null,"\u5185\u5BB9: ",l.info_content),u.createElement("p",null,"\u65B9\u6CD5: ",l.detection_method),u.createElement("p",null,"\u53EF\u4FE1\u5EA6: ",l.confidence),u.createElement("p",null,"\u5143\u6570\u636E: ",l.metadata)),u.createElement("div",null,JSON.stringify(l)),u.createElement(k.Z,null)))}return A()})()))})(),(()=>{if(d){var B,A=d.tool,v=d.project,a="fileInput-".concat(A.name),l=(0,n.Ye)(A),y=l.\u7B80\u5316\u7248____record_arr___\u53EF\u80FD\u591A\u4E2Asheet,Q=l.\u7B80\u5316\u7248____demo_data_map_Map\u5957\u4E00\u7EF4\u6570\u7EC4,su=u.createElement("div",null,"Tool",u.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},u.createElement("label",{htmlFor:a},u.createElement("input",{type:"file",accept:".xlsx,.xls,.csv",id:a,ref:Tu,onClick:function(){},onChange:function(){var M=(0,S.Z)(function*(K){var tu=yield pu.xxNew_CSV_Excel_Helper.handleFileUpload_\u5B8C\u5584\u7248({event:K}),au=tu.result,Su=tu.file,vu=Object.entries(au).every((hu,fu)=>{var gu=(0,i.Z)(hu,2),yu=gu[0],Bu=gu[1],mu=A.dataCheck_\u6570\u636E\u68C0\u67E5(Bu,fu,!1).checkFn();return mu||alert("\u3010".concat(yu,"\u3011\u683C\u5F0F\u9519\u8BEF\uFF01")),mu});vu?(yield Fe(Su,au,{project:v,tool:A}),alert("\u4E0A\u4F20\u6210\u529F\uFF01")):alert("\u683C\u5F0F\u9519\u8BEF\uFF01"),function(){Tu.current&&(Tu.current.value="")}()});return function(K){return M.apply(this,arguments)}}(),style:{display:"none"}}),u.createElement(uu.Z,{style:{whiteSpace:"pre-wrap"},onClick:()=>{var M;(M=Tu.current)===null||M===void 0||M.click()}},"\u4E0A\u4F20\u3010",u.createElement("span",{style:{color:"hotpink"}},A.name),"\u3011")),u.createElement(uu.Z,{onClick:()=>{var M="\u3010".concat(A.name,"\u3011\u6A21\u677F");function K(){if(y.length===1){let yu=function(Bu){var mu=Bu;return mu.includes(`
`)&&(mu='"'.concat(mu,'"')),mu};var au=y[0],Su=au[0],vu=Object.keys(Su),hu=vu.map(Bu=>yu(Bu)).join(","),fu=vu.map((Bu,mu)=>mu+1+"").join(",");pu.Download_Helper._download_csv(hu+`
`+fu,{filename_\u65E0\u540E\u7F00\u540D:M})}else{var gu=y.map(yu=>{var Bu;return(Bu=yu[0])===null||Bu===void 0?void 0:Bu.\u5B50\u8868});alert("\u5B58\u5728\u591A\u4E2ASheet\uFF0C".concat(gu.join("\u3001"),"\u3002"))}}function tu(){pu.xxNew_CSV_Excel_Helper.downloadExcel_\u76F4\u63A5\u5728\u6D4F\u89C8\u5668_JSON\u8F6CExcel(Q,M+".xlsx")}tu()}},"\u4E0B\u8F7D\u3010\u6A21\u677F\u3011"),u.createElement(uu.Z,{onClick:()=>{var M,K=A==null||(M=A.results)===null||M===void 0?void 0:M[0];K&&Cu.Z.error({title:"AI\u63D0\u95EE",content:u.createElement(u.Fragment,null,(()=>u.createElement(uu.Z,{onClick:(0,S.Z)(function*(){var tu,au=A._AI_\u63D0\u95EEPrompt((tu=K==null?void 0:K.excel_arr)!==null&&tu!==void 0?tu:[]);yield(0,u0.zz)({text_content:`
`.concat((0,pu._get_mdText_chunk)(h0.P._\u601D\u7EF4\u94FEchain_\u7528\u4E8EClaude\u7684\u9B54\u6539),`

`).concat(au,`
                              `),\u9009\u62E9\u7279\u5B9A\u6A21\u578B_\u8FDB\u884C\u67E5\u8BE2:u0.Ly._PoE._PoE__Claude37_Sonnet_\u63A8\u7406\u7248})})},"\u70B9\u51FB\u524D\u5F80AI"))())})}},"AI\u63D0\u95EE"),u.createElement("div",{style:{margin:"0 5em"}}),u.createElement(uu.Z,{onClick:()=>{alert("\u5BFC\u51FA")}},"\u5BFC\u51FA\u3010\u5B50Excel\u3011")));return J&&u.createElement(Cu.Z,{title:su,visible:J,onCancel:()=>V(!1),footer:null,width:Gu},u.createElement("div",null,u.createElement("pre",null,(B=A.desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9)!==null&&B!==void 0?B:"\u6682\u65E0\uFF0C\u987E\u540D\u601D\u4E49")),u.createElement("div",{style:{border:"1px solid #FF7800  ",padding:"3px  0.3em  3em"}},u.createElement(j.gM,null),(0,j.Z$)(A)))}else return})()),(()=>{var B={whiteSpace:"pre-wrap"};return u.createElement("div",null,u.createElement("div",{style:B},te),u.createElement("div",{style:B},ae))})())},_0=()=>u.createElement(u.Fragment,null,u.createElement(q.Z,{type:"card",size:"large"},u.createElement(q.Z.TabPane,{tab:"\u9519\u9898\u672C",key:"1"},"\u8DF3\u8F6C\u3010\u7591\u96BE\u6742\u75C7\u3011\u5373\u53EF\u3002 \u987A\u4FBF\u4E5F\u4E3ACTF\u8BB0\u5F55\u601D\u8DEF\u3002\uFF08\u4E0D\u4F1A\u7684\u9898\u591A\u8D8A\u6765\u8D8A\u5C11\u3001\u4E0D\u4F1A\u505A\u7684\u9776\u573A\u8D8A\u6765\u8D8A\u5C11\uFF0C\u662F\u597D\u4E8B\uFF1B\u4F46\u4E0D\u4F1A\u505A\u7684\u9776\u573A\u8D8A\u6765\u8D8A\u591A\uFF0C\u4E5F\u662F\u4E00\u4EF6\u597D\u4E8B(\u610F\u5473\u7740\uFF0C\u6709\u66F4\u591A\u7684\u4F18\u8D28\u8D44\u6E90)\uFF09"),u.createElement(q.Z.TabPane,{tab:"\u5404\u73AF\u8282\u601D\u7EF4\u5BFC\u56FE",key:"2"},"\u5404\u79CD\u601D\u8DEF\u5BFC\u56FE\uFF0C\u90FD\u53EF\u4EE5\u62FF\u8FC7\u6765\uFF08\u8F6C\u4E00\u4E0B\u5F62\u5F0F\uFF0C\u5373\u53EF\uFF1B \u5927\u90E8\u5206\u975E\u3010\u8054\u7CFBLink\u3011\uFF09\u8BED\u6CD5 \u90FD\u53EF\u4EE5\u652F\u6301\uFF09"),u.createElement(q.Z.TabPane,{tab:"\u7279\u6B8A\u60C5\u51B5  \u4E2D/\u7F8E  \u7F51\u5B89\u98CE\u4FD7",key:"3"},"\u62A4\u7F51\u3001\u7B49\u3002 \u4E3AAI\u63D0\u4F9B\u4E00\u4E2A\u53C2\u8003\u3002 \uFF08\u957F\u671F\u7EF4\u62A4\uFF09 -- \u9632\u5B88\u65B9\u7684\u60C5\u51B5\uFF1A \u6DFB\u52A0\u6211\u5F85\u8FC7\u7684\u9632\u5B88\u65B9\u7684\u60C5\u51B5\uFF1A \u5728\u534E\u6DA6 \u5176\u5B9E\u6709\u4E00\u4E2A \u4EBA\u5458\u8868\u3001 \u6392\u73ED\u8868 \uFF08\u6240\u6709\u7684\u4EBA\u5458\u4F53\u7CFB\uFF09 --"),u.createElement(q.Z.TabPane,{tab:"\u73B0\u5B9E\u6F0F\u6D1E\u5206\u6790-5\u4E2A\u95EE\u9898",key:"4"},"1\u3001\u9700\u8981\u4FEE\u590D\u95EE\u9898 2\u3001\u9700\u8981\u51C6\u5907 \u51E0\u7BC7 \u4F5C\u4E3A\u5404\u65B9\u9762\u6A21\u677F"),u.createElement(q.Z.TabPane,{tab:"\u6700\u540E\u8BA1\u5206\u4E0E\u603B\u7ED3",key:"5"},"\u5728\u4E0B\u9762\u52A0\u4E86\u4E00\u4E2Atool\uFF0C\u53EF\u4EE5\u653E\u7F6E\u4E00\u4E2A\u8868\u683C\u3002")),u.createElement(q.Z,{type:"card",size:"large"},u.createElement(q.Z.TabPane,{tab:"\u5FC3\u6001\u5927\u5EFA\u8BBE",key:"1"},u.createElement(x0,null)),u.createElement(q.Z.TabPane,{tab:"Url\u62BD\u53D6",key:"2"}),u.createElement(q.Z.TabPane,{tab:"\u7EC4\u7EC7GPT-AI\u95EE\u7B54",key:"3"})),u.createElement(H0,{base_cfgJson:R0})),W0=_0},469274:function(xu,du,r){xu.exports=r.p+"static/\u592A\u6781\u9C7C-\u5343\u5E93\u7F51-\u8C03\u6574\u901F\u5EA6.267d5c75.webp"},182400:function(xu,du,r){xu.exports=r.p+"static/\u82F1\u96C4\u65E0\u654C-\u88C5\u5907-\u56FE2.f5be5057.png"},680950:function(){},446601:function(){},989214:function(){},308623:function(){},507748:function(){},85568:function(){},356619:function(){},77108:function(){},752361:function(){},394616:function(){},865186:function(){},900015:function(){}}]);
