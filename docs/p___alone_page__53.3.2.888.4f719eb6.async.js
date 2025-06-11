(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6948,4726,8585,8102],{295244:function(Pu,fu,t){"use strict";t.r(fu),t.d(fu,{App_\u8F85\u52A9\u529F\u80FDHelper:function(){return hu}});var zu=t(838339),h=t(677971),_u=t(686137),j=t(338324),J=t(92909);function Iu(){var g=t(86403);return g}function vu(){var g=t(218585);return g}function ju(){var g=t(116644);return g}function H(){var g=t(447180),x=g.Rubick_Helper____\u6284\u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5;return x}var r=null;function F(){var g=t(95877);return r||t.e(7497).then(t.t.bind(t,977497,23)).then(function(x){var u=x.default;Object.entries(u).length>0&&(r=document.createElement("style"),r.id="smalltalk_styles",r.textContent=x.default,document.head.appendChild(r))}),g}var E=function(){function g(){(0,_u.Z)(this,g)}return(0,j.Z)(g,null,[{key:"get_Window_\u83B7\u53D6\u7A97\u53E3_\u6839\u636E\u573A\u666F",value:function(u){var R=J.E.windows[u].win;return R}},{key:"fix_createDevTools_bug",value:function(u){u.on("ready",function(){g.createDevTools_\u63A7\u5236\u53F0()})}},{key:"bindTray_\u6258\u76D8",value:function(u,R){var p=Iu(),W=p.Tray,uu=p.Menu,lu=R.text,tu=R.iconPath;J.E.tray=new W(tu);var su=uu.buildFromTemplate([{label:"\u9000\u51FA",click:function(){u.destroy()}}]);J.E.tray.setToolTip(lu),J.E.tray.setContextMenu(su),J.E.tray.on("click",function(){var du=u.isVisible();du?(H()._02_browserWindow__\u7A97\u53E3\u72B6\u6001_\u8BBE\u7F6E._\u81EA\u5DF1\u5199\u7684_\u53EA\u662F\u4E3A\u4E86\u62BD\u53D6\u5728\u4E00\u8D77_forceWindowHide__\u9690\u85CF(u),u.setSkipTaskbar(!1)):(H()._02_browserWindow__\u7A97\u53E3\u72B6\u6001_\u8BBE\u7F6E.forceWindowShow__\u663E\u793A(u),u.setSkipTaskbar(!0))})}},{key:"force_maximize_window_\u6700\u5927\u5316",value:function(u){var R=Iu(),p=R.screen,W=J.E.windows[u].win,uu=p.getPrimaryDisplay().workAreaSize,lu=uu.width,tu=uu.height;W.setSize(lu,tu),W.center()}},{key:"openChromePage_byCmd_\u547D\u4EE4\u884C\u6253\u5F00\u7F51\u9875",value:function(u){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",W=R?"--new-window":"",uu='  "'.concat(p,'"  ').concat(W,'  "').concat(u,'"  ');return uu}},{key:"__showHide_win_\u5207\u6362\u7A97\u53E3\u663E\u793A",value:function(u,R){var p=J.E.windows[u].win,W=R||{},uu=W.isShow,lu=uu===void 0?!p.isVisible():uu,tu=W.is_maximize,su=tu===void 0?!0:tu,du=W.cb_whenShow;lu?(H()._02_browserWindow__\u7A97\u53E3\u72B6\u6001_\u8BBE\u7F6E.forceWindowShow__\u663E\u793A(p),su&&g.force_maximize_window_\u6700\u5927\u5316(u),du==null||du()):H()._02_browserWindow__\u7A97\u53E3\u72B6\u6001_\u8BBE\u7F6E._\u81EA\u5DF1\u5199\u7684_\u53EA\u662F\u4E3A\u4E86\u62BD\u53D6\u5728\u4E00\u8D77_forceWindowHide__\u9690\u85CF(p)}},{key:"_mock_\u539F\u751Fprompt",value:function(u){var R=u.title,p=R===void 0?"\u8F93\u5165\u4F60\u7684\u60F3\u6CD5\uFF0C\u4E00\u80A1\u8111\u5B50":R,W=u.content,uu=W===void 0?"\u8F93\u5165":W,lu=u.default_value,tu=lu===void 0?"----":lu,su=F();return new Promise(function(du,Mu){su.prompt(p,uu,tu).then(function(Ou){du(Ou)}).catch(function(){Mu()})})}},{key:"_mock_\u539F\u751Falert",value:function(u){var R=u.title,p=R===void 0?"Error":R,W=u.content,uu=W===void 0?"There was an error!":W;return new Promise(function(lu,tu){var su=F();su.alert(p,uu).then(function(){lu()}).catch(function(){tu()})})}},{key:"_mock_pending\u5EF6\u8FDFdelay\u51E0\u79D2_setTimeOut\u5B9A\u65F6",value:function(u){var R=u.delayMS,p=u.cb,W=p===void 0?function(){}:p;function uu(){return new Promise(function(tu,su){setTimeout(function(){W(),tu()},R)})}function lu(){var tu=t(422397),su=tu.__wait_async_fn_\u539F\u7406\u662FsetTimeout_\u6267\u884C\u65B9\u6CD5_\u4F34\u968F\u7740\u7B49\u5F85\u82E5\u5E72\u79D2;return su(W,{before_wait_ms:R})}return uu()}},{key:"createDevTools_\u63A7\u5236\u53F0",value:function(){var u=vu(),R=u.REACT_DEVELOPER_TOOLS,p=u.REDUX_DEVTOOLS,W=ju();try{W.install(),u(R),u(p)}catch(uu){}}}]),g}(),hu=function(g){(0,zu.Z)(u,g);var x=(0,h.Z)(u);function u(){return(0,_u.Z)(this,u),x.apply(this,arguments)}return(0,j.Z)(u)}(E)},447180:function(Pu,fu,t){"use strict";t.r(fu),t.d(fu,{Rubick_Helper____\u6284\u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5:function(){return H}});var zu=t(379812),h=t(338324),_u=t(686137),j=t(86403),J=t.n(j),Iu=t(216060),vu=t.n(Iu),ju=t(189889).Buffer,H=(0,h.Z)(function r(){(0,_u.Z)(this,r)});H._01_storage_file_session__\u6587\u4EF6\u548C\u7F13\u5B58={getAppCacheDir:function(){var F=j.app.getPath("cache");return F},getApp_userDataDir:function(){j.app.getPath("userData")},getElectron_partitionSession:function(){var F="";j.session.fromPartition(F)}},H._02_browserWindow__\u7A97\u53E3\u72B6\u6001_\u8BBE\u7F6E=(0,zu.Z)({hide_onBlur:function(F){F.on("blur",function(){var E=!0;E&&F.hide()})},set_DesktopSearchBar:function(F){var E=800,hu=60,g=600;F.setSize(E,g+hu),F.setSize(E,hu)},forceWindowShow__\u663E\u793A:function(F,E,hu){F.setAlwaysOnTop(!0),F.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),F.focus(),F.setVisibleOnAllWorkspaces(!1,{visibleOnFullScreen:!0}),E!==void 0&&hu!==void 0&&F.setPosition(E,hu),F.show()},_\u81EA\u5DF1\u5199\u7684_\u53EA\u662F\u4E3A\u4E86\u62BD\u53D6\u5728\u4E00\u8D77_forceWindowHide__\u9690\u85CF:function(F){F.hide()}},{get_BrowserView:function(){var F=new j.BrowserView({}),E=new j.BrowserWindow({});E.setBrowserView(F)}}),H._03_dialog__\u5BF9\u8BDD\u6846={set_electronDialog:function(){}},H._04_devTools__\u63A7\u5236\u53F0_\u5F00\u53D1\u5DE5\u5177={electron_openDevTools_panel:function(F){F.webContents.openDevTools({mode:"undocked"})}},H._05_notification__\u901A\u77E5\u63D0\u793A={electron_notification:function(){var F="";if(j.Notification.isSupported()){var E=new j.Notification({title:"",body:F,icon:""});E.show()}}},H._06_copy__\u590D\u5236\u6587\u672C_\u56FE\u7247={electron_copyImage:function(F){var E=j.nativeImage.createFromDataURL(F.img);j.clipboard.writeImage(E)},electron_copyText:function(F){return j.clipboard.writeText(String(F.text)),!0},electron_copyFile:function(F,E){return F.file&&vu().existsSync(F.file)?(j.clipboard.writeBuffer("NSFilenamesPboardType",ju.from(E.build([F.file]))),!0):!1}},H._07_input__\u6587\u5B57\u8F93\u5165\u4E8B\u4EF6_\u5FEB\u6377\u952E_\u9F20\u6807\u8F93\u5165={electron_sendInputEvent:function(F){var E;(E=F.getBrowserView())===null||E===void 0||E.webContents.sendInputEvent({type:"keyDown",keyCode:""})},electron_Shortcut_HotKey:function(){j.globalShortcut.unregisterAll(),j.globalShortcut.register("\u5FEB\u6377\u952E",function(){})},electron_mouse:function(){var F=j.screen.getCursorScreenPoint(),E=F.x,hu=F.y}},H._08_link__\u94FE\u63A5={electron_openExternal_link:function(){j.shell.openExternal("https://github.com/clouDr-f2e/rubick").then(function(){})}},H._09_app__\u5E94\u7528\u672C\u8EAB={electron_appReboot:function(){j.app.relaunch(),j.app.quit()},electron_autoLogin:function(){j.app.setLoginItemSettings({openAtLogin:!0,openAsHidden:!0})}},H._10_ipc__\u8DE8\u8FDB\u7A0B\u4F20\u9012={_ipcMain:function(){j.ipcMain.on("\u4E00\u4E2A\u4E8B\u4EF6",function(){})},_ipcRenderer:{}},H._11_protocol__\u7CFB\u7EDF\u534F\u8BAE={registerSchemesAsPrivileged:function(){j.protocol.registerSchemesAsPrivileged([{scheme:"app",privileges:{secure:!0,standard:!0}}])}},H._12_tray__\u6258\u76D8_\u56FE\u6807={electron_tray:function(F,E){F.on("click",function(){F.popUpContextMenu(E)}),F.setContextMenu(E)}},H._13_display_monitor__\u663E\u793A_\u5C4F\u5E55={electron_display_monitor:function(F,E){var hu=j.screen.getDisplayNearestPoint({x:F,y:E})}},H._14_\u7B2C\u4E09\u65B9\u5E93={\u7B2C\u4E09\u65B9\u5E93_punchDb:function(){},\u7B2C\u4E09\u65B9\u5E93_fixPath:function(){},\u7B2C\u4E09\u65B9\u5E93_crossSpawn:function(){},\u7B2C\u4E09\u65B9\u5E93_fsExtra:function(){}}},467119:function(Pu,fu,t){"use strict";t.r(fu),t.d(fu,{_:function(){return E0},default:function(){return U0}});var zu=t(331916),h=t(941877),_u=t(195758),j=t(48602),J=t(808117),Iu=t(736302),vu=t(620099),ju=t(302516),H=t(958154),r=t(788397),F=t(379812),E=t(721961),hu=t(108919),g=t(117881),x=t(292878),u=t(556692),R=t(772358),p=t(939878),W=t(944663),uu,lu,tu,su,du,Mu,Ou,Gu,Ku,c0=p.ZP.div(uu||(uu=(0,x.Z)([`
  display   : flex;
  margin    : 40px 20px;
  position  : relative;
  flex-wrap : wrap;
  gap       : 20px; // \u5728flex\u9879\u4E4B\u95F4\u6DFB\u52A0\u95F4\u8DDD
`]))),l0=p.ZP.div(lu||(lu=(0,x.Z)([`
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
`]))),s0=p.ZP.div(tu||(tu=(0,x.Z)([`
  text-align    : center;
  margin-bottom : 20px;
  font-weight   : bold;
`]))),C0=p.ZP.div(su||(su=(0,x.Z)([`
  height     : 4px;
  background : #1890ff;
  width      : 100%;
  & {
    min-width : `,`em; // TIP \u4F18\u5316\u5BBD\u5EA6\u3002
    padding   : 0 10em;
  }
  position   : relative;
`])),function(i){var f;return((f=i.tools)!==null&&f!==void 0?f:[]).length*7.5*1.5}),B0=p.ZP.div(du||(du=(0,x.Z)([`
  position    : relative;
  min-height  : 200px; // \u7ED9\u4E00\u4E2A\u6700\u5C0F\u9AD8\u5EA6\u786E\u4FDD\u89C6\u89C9\u6548\u679C
  & {
    height : `,`px;
  }
  margin      : 40px 0; // \u4E0A\u4E0B\u7559\u51FA\u7A7A\u95F4\u7ED9\u6587\u4EF6\u56FE\u6807
  display     : flex;
  align-items : center; // \u786E\u4FDD\u65F6\u95F4\u8F74\u5728\u5BB9\u5668\u4E2D\u5782\u76F4\u5C45\u4E2D
`])),function(i){return i.max_result_count*65+47});function Ju(i,f){return function(){return Math.min(i/f.length*100,90)}}var D0=p.ZP.div(Mu||(Mu=(0,x.Z)([`
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
`])),function(i){return Ju(i.index,i.tools)()},function(i){return i.index%2==0?"bottom:52px":"top:53px"}),A0=p.ZP.div(Ou||(Ou=(0,x.Z)([`
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
`])),function(i){return Ju(i.toolIndex,i.tools)()},function(i){return i.isTop?"bottom: 50%;":"top: 50%;"},function(i){return i.isTop?"0 0 40px 0":"40px 0 0 0"},function(i){return i.isTop?"bottom: -20px;":"top: -20px;"}),d0=(0,p.ZP)(W.Z)(Gu||(Gu=(0,x.Z)([`
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
`]))),m0=p.ZP.h5(Ku||(Ku=(0,x.Z)([`

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
`]))),n=t(341218),Nu=t(686137),qu=t(338324),p0=function(){function i(f,A){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;(0,Nu.Z)(this,i),this.db=null,this.dbName=f,this.storeName=A,this.version=d}return(0,qu.Z)(i,[{key:"connect",value:function(){var f=(0,r.Z)((0,h.Z)().mark(function d(){var a=this;return(0,h.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!this.db){B.next=2;break}return B.abrupt("return");case 2:return B.abrupt("return",new Promise(function(o,m){var I=indexedDB.open(a.dbName,a.version);I.onerror=function(){return m(I.error)},I.onsuccess=function(){a.db=I.result,o()},I.onupgradeneeded=function(C){var S=C.target.result;S.objectStoreNames.contains(a.storeName)||S.createObjectStore(a.storeName)}}));case 3:case"end":return B.stop()}},d,this)}));function A(){return f.apply(this,arguments)}return A}()},{key:"get",value:function(){var f=(0,r.Z)((0,h.Z)().mark(function d(a){var c=this;return(0,h.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.connect();case 2:return o.abrupt("return",new Promise(function(m,I){var C=c.db.transaction(c.storeName,"readonly"),S=C.objectStore(c.storeName),nu=S.get(a);nu.onerror=function(){return I(nu.error)},nu.onsuccess=function(){return m(nu.result)}}));case 3:case"end":return o.stop()}},d,this)}));function A(d){return f.apply(this,arguments)}return A}()},{key:"set",value:function(){var f=(0,r.Z)((0,h.Z)().mark(function d(a,c){var B=this;return(0,h.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,this.connect();case 2:return m.abrupt("return",new Promise(function(I,C){var S=B.db.transaction(B.storeName,"readwrite"),nu=S.objectStore(B.storeName),T=nu.put(c,a);T.onerror=function(){return C(T.error)},T.onsuccess=function(){return I()}}));case 3:case"end":return m.stop()}},d,this)}));function A(d,a){return f.apply(this,arguments)}return A}()}]),i}(),f0=function(){function i(f){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Form_DBName";(0,Nu.Z)(this,i),this.formKey=f,this.dbName=A,this.dbService=new p0(this.dbName,"forms_StoreName")}return(0,qu.Z)(i,[{key:"loadData_\u7EAFDB",value:function(){var f=(0,r.Z)((0,h.Z)().mark(function d(a){var c;return(0,h.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,this.dbService.get(this.formKey);case 3:if(c=o.sent,!(!c&&a)){o.next=8;break}return o.next=7,this.dbService.set(this.formKey,a);case 7:return o.abrupt("return",a);case 8:return o.abrupt("return",c||{});case 11:return o.prev=11,o.t0=o.catch(0),o.abrupt("return",a||{});case 14:case"end":return o.stop()}},d,this,[[0,11]])}));function A(d){return f.apply(this,arguments)}return A}()},{key:"saveData_\u7EAFDB",value:function(){var f=(0,r.Z)((0,h.Z)().mark(function d(a){var c,B,o,m=arguments;return(0,h.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(c=m.length>1&&m[1]!==void 0?m[1]:"override",C.prev=1,c!=="append"){C.next=9;break}return C.next=5,this.loadData_\u7EAFDB();case 5:o=C.sent,B=(0,F.Z)((0,F.Z)({},o),a),C.next=10;break;case 9:B=(0,F.Z)({},a);case 10:return C.next=12,this.dbService.set(this.formKey,B);case 12:C.next=17;break;case 14:throw C.prev=14,C.t0=C.catch(1),C.t0;case 17:case"end":return C.stop()}},d,this,[[1,14]])}));function A(d){return f.apply(this,arguments)}return A}()},{key:"useAsyncForm_\u517C\u987E\u4E24\u8005",value:function(A){var d=this,a=(0,u.useState)({}),c=(0,E.Z)(a,2),B=c[0],o=c[1],m=(0,u.useState)(!0),I=(0,E.Z)(m,2),C=I[0],S=I[1],nu=(0,u.useState)(null),T=(0,E.Z)(nu,2),Eu=T[0],$=T[1];(0,u.useEffect)(function(){d.loadData_\u7EAFDB(A).then(function(M){o(M),S(!1)}).catch(function(M){$(M),S(!1)})},[]);var iu=function(){var M=(0,r.Z)((0,h.Z)().mark(function K(U){var w;return(0,h.Z)().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return w=(0,F.Z)((0,F.Z)({},B),U),G.next=3,d.saveData_\u7EAFDB(w);case 3:o(w);case 4:case"end":return G.stop()}},K)}));return function(U){return M.apply(this,arguments)}}();return{form:B,loading:C,error:Eu,updateForm_\u5916\u5C42\u6D45\u514B\u9686:iu}}},{key:"demo",value:function(){var A=new i("userForm");function d(){var a=A.useAsyncForm_\u517C\u987E\u4E24\u8005({name:"",email:""}),c=a.form,B=a.loading,o=a.error,m=a.updateForm_\u5916\u5C42\u6D45\u514B\u9686;return B?u.createElement("div",null,"Loading..."):o?u.createElement("div",null,"Error: ",o.message):u.createElement("form",null,u.createElement("input",{value:c.name,onChange:function(){var I=(0,r.Z)((0,h.Z)().mark(function C(S){return(0,h.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,m({name:S.target.value});case 2:case"end":return T.stop()}},C)}));return function(C){return I.apply(this,arguments)}}()}))}}}]),i}(),bu=t(422397),Xu=t(265628),Yu=t(120612),Qu=t(595418),v0=t(773766),h0=`

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

`),u0,k0=p.ZP.img(u0||(u0=(0,x.Z)([`
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

`]))),x0=function(){return u.createElement(u.Fragment,null,u.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.createElement(k0,{src:t(363634)}),u.createElement("pre",null,`
\u300C\u6F0F\u6D1E\u72E9\u730E\u5FC3\u667A\u5F3A\u5316\u4F53\u7CFB\u300D - DeepSeek    https://chat.deepseek.com/a/chat/s/3824d65b-ecc6-4cc9-9c43-ae4431ba8cdb
\u300C\u6F0F\u6D1E\u72E9\u730E\u5FC3\u667A\u5F3A\u5316\u4F53\u7CFB\u300D\u903B\u8F91\u63A8\u5BFC\u6846\u67B6 - DeepSeek    https://chat.deepseek.com/a/chat/s/dcbdbacf-a653-4386-919f-edac4f62b228
        `)))},e0,y0=p.ZP.div(e0||(e0=(0,x.Z)([`
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
`]))),b0=function(f){var A=f._\u7EDF\u8BA1,d=(0,u.useRef)(null),a=(0,u.useRef)(null),c=(0,u.useRef)([]),B=(0,u.useRef)([]),o=(0,u.useState)(window.innerWidth),m=(0,E.Z)(o,2),I=m[0],C=m[1],S=function(){function T(){(0,Nu.Z)(this,T)}return(0,qu.Z)(T,null,[{key:"createConnections_\u57FA\u672C\u6D41\u7EBF",value:function(){if(!(!a.current||c.current.length===0)){for(;a.current.firstChild;)a.current.removeChild(a.current.firstChild);B.current.forEach(function(gu){return clearInterval(gu)}),B.current=[];for(var $=a.current.getBoundingClientRect(),iu=c.current.length,M=0;M<iu-1;M++)if(!!c.current[M]){var K=c.current[M].getBoundingClientRect(),U=c.current[M+1].getBoundingClientRect();if(!(Math.abs(K.top-U.top)>K.height/2)){var w=K.right-$.left,X=U.left-$.left,G=(K.top+K.bottom)/2-$.top,Fu=document.createElement("div");Fu.classList.add("connection-line"),Fu.style.left=w+"px",Fu.style.width=X-w+"px",Fu.style.top=G+"px",Fu.style.animation="pulse 2s infinite",a.current.appendChild(Fu);var Cu=!0,xu=Cu?M:iu-1-M;this.createDataFlow_\u6570\u636E\u6D41\u7C92\u5B50(w,X,G,xu)}}}}},{key:"createDataFlow_\u6570\u636E\u6D41\u7C92\u5B50",value:function($,iu,M,K){var U=window.setInterval(function(){if(!a.current)return;var w=document.createElement("div");w.classList.add("data-particle"),w.style.left="".concat($,"px"),w.style.top="".concat(M-2,"px"),a.current.appendChild(w);var X=iu-$,G=2e3,Fu=null;function Cu(xu){Fu||(Fu=xu);var gu=(xu-Fu)/G;if(gu<1)w.style.left="".concat($+gu*X,"px"),w.style.opacity=gu<.2?"".concat(gu*5):gu>.8?"".concat((1-gu)*5):"1",requestAnimationFrame(Cu);else{var Zu;w==null||(Zu=w.parentNode)===null||Zu===void 0||Zu.removeChild(w)}}requestAnimationFrame(Cu)},300+K*100);B.current.push(U)}},{key:"add3DEffect_\u9F20\u6807\u6D6E\u4E0A\u53BB_\u8FD4\u56DE\u6E05\u9664\u65B9\u6CD5",value:function(){if(I>900&&d.current){var $=function(M){var K=M.clientX,U=M.clientY,w=window.innerWidth,X=window.innerHeight,G=(K-w/2)/(w/2)*5,Fu=(U-X/2)/(X/2)*5,Cu=1;d.current.style.transform="rotateY(".concat(G*Cu,"deg) rotateX(").concat(-Fu*Cu,"deg)")};return document.addEventListener("mousemove",$),function(){document.removeEventListener("mousemove",$)}}else return null}},{key:"animateNumbers____\u6A21\u62DF\u6570\u5B57\u7684\u5B9A\u65F6\u5668\u8DF3\u52A8",value:function(){c.current.forEach(function($,iu){if(!!$){var M=$.querySelector(".number");if(!!M){var K=nu[iu].value,U=0,w=2e3,X=30,G=w/X,Fu=K/G,Cu=window.setInterval(function(){U+=Fu,U>=K&&(U=K,clearInterval(Cu)),M.textContent=Math.floor(U)+""},X);B.current.push(Cu)}}})}}]),T}(),nu=[{value:A.\u6CD5\u4EBA_\u4E3B\u4F53,label:"\u4E2A\u6CD5\u4EBA/\u4E3B\u4F53"},{value:A.\u516C\u53F8,label:"\u4E2A\u516C\u53F8"},{value:A.\u57DF\u540D,label:"\u4E2A\u57DF\u540D"},{value:A.IP,label:"\u4E2AIP"},{value:A.\u7AEF\u53E3,label:"\u4E2A\u7AEF\u53E3"},{value:A.URL,label:"\u4E2AURL"}];return(0,u.useEffect)(function(){S.createConnections_\u57FA\u672C\u6D41\u7EBF();var T=S.add3DEffect_\u9F20\u6807\u6D6E\u4E0A\u53BB_\u8FD4\u56DE\u6E05\u9664\u65B9\u6CD5();return function(){B.current.forEach(function(Eu){clearInterval(Eu)}),T&&T()}},[]),u.createElement(u.Fragment,null,u.createElement(y0,null,u.createElement("div",{className:"body"},u.createElement("div",{className:"grid-lines"}),u.createElement("div",{ref:d,className:"container",id:"container"},u.createElement("div",{ref:a,className:"connection-container",id:"connection-container"}),nu.map(function(T,Eu){return u.createElement("div",{key:Eu,ref:function(iu){c.current[Eu]=iu},className:"item","data-value":T.value},u.createElement("div",{className:"hexagon-bg"}),u.createElement("div",{className:"number"},u.createElement("span",null,T.value),"/",u.createElement("span",null,Math.pow(3,Eu))),u.createElement("div",{className:"label"},T.label),u.createElement("div",{className:"reflection"}))})))))},Ru=t(872952),wu=function(){function i(){(0,Nu.Z)(this,i)}return(0,qu.Z)(i,null,[{key:"_get_\u539Fcfg_\u5E73\u644Atool_arr",value:function(A){var d=A.projects.map(function(a,c){return a.stages.map(function(B,o){return B.tools.map(function(m,I){var C=m;return C.project_name=a.name,C.project_index=c,C.stage_name=B.name,C.stage_index=o,C.tool_index=I,C})})}).flat(9);return d}},{key:"_\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF",value:function(A,d){var a=this._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(d),c=a.map,B=A?c[A]:c,o=JSON.stringify(B,null,2);bu.Download_Helper._download_json(o)}},{key:"_\u7EDF\u8BA1map_\u5404\u9879\u5C55\u677F\u5C55\u793A\u6307\u6807",value:function(A){var d=this._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(A),a=d.map;function c(B){return Object.values(a[B]).flat(9).length}return{\u6CD5\u4EBA_\u4E3B\u4F53:c("\u6240\u6709\u6CD5\u4EBA_\u7532\u65B9"),\u516C\u53F8:c("\u6240\u6709\u516C\u53F8"),\u57DF\u540D:c("\u6240\u6709\u57DF\u540D"),IP:c("\u6240\u6709IP_\u7AEF\u53E3"),\u7AEF\u53E3:c("\u6240\u6709IP_\u7AEF\u53E3"),URL:c("\u6240\u6709\u63A5\u53E3Url_\u53CA_\u4E00\u4E2A\u7F51\u7AD9\u4E0B\u7684\u6811\u5F62_SiteMap")}}},{key:"_\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765",value:function(A){var d=Object.entries(Ru.L.\u7EDF\u8BA1_\u76F8\u5173\u5B57\u6BB5\u540D_map).filter(function(o){var m=(0,E.Z)(o,2),I=m[0],C=m[1];return I!=="\u5168\u90E8\u62A5\u544A"});function a(){}var c=Object.fromEntries(d.map(function(o){var m=(0,E.Z)(o,2),I=m[0],C=m[1];return[I,{}]})),B=this._get_\u539Fcfg_\u5E73\u644Atool_arr(A);return B.forEach(function(o){var m;(m=o.results)===null||m===void 0||m.forEach(function(I){var C;(C=I.excel_arr)===null||C===void 0||C.forEach(function(S){var nu,T=(nu=S.row_arr)===null||nu===void 0?void 0:nu[0];d.forEach(function(Eu){var $=(0,E.Z)(Eu,2),iu=$[0],M=$[1],K=T&&Ru.L.filterJsonByKeys(T,M,!1);if(K){var U,w="".concat(o.name,"____").concat(S.file_name),X=iu;c[X][w]||(c[X][w]=[]),(U=S.row_arr)===null||U===void 0||U.forEach(function(G){var Fu=Ru.L.filterJsonByKeys(G,M,!0),Cu=Fu.is_\u6709\u4EFB\u610F\u4E00\u4E2A\u6709\u6548\u503C,xu=Fu.jsonB;Cu&&c[X][w].push(xu)})}})})})}),{\u7EDF\u8BA1_map_\u53BB\u9664\u4E0D\u4F5C\u7B5B\u9009\u7684\u90A3\u4E2A____entries:d,map:c}}}]),i}(),n0,S0=p.ZP.div(n0||(n0=(0,x.Z)([`
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
`])),t(762816)),w0=function(){return u.createElement(u.Fragment,null,u.createElement(S0,null))},e=t(44253),L=t(939475),ru=n.eV.quick_get_tool,au=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,cu=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap;function F0(i){var f=ru("\u3010\u501F\u52A9AI\u7684\u6DF1\u5165\u6F0F\u6D1E\u7814\u7A76\u3011AI\u7684\u4F7F\u7528\u3001AI\u4F7F\u7528\u7684\u5C0F\u7ECF\u9A8C\u3001AI\u4F7F\u7528\u7684\u75DB\u70B9\uFF08\u548C\u75DB\u70B9\u3001\u96BE\u70B9\u6709\u5173\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["AI\u51FA\u6765\uFF0C\u53EF\u80FD80%\u662F\u6B63\u786E\u7684\u2014\u2014\u2014\u2014\u4F46AI\u4E0D\u80FD\u5957AI\uFF0CAI\u5FC5\u987B\u63A5\u5165\u624B\u52A8\u2014\u2014\u2014\u2014\u4E0D\u7136AI\u5957AI\uFF0C\u5957\u4E86\u82E5\u5E72\u5C42\u4E4B\u540E\u3002\u6B63\u786E\u7387\u5DF2\u7ECF\u4E0B\u964D\u7684\u4E0D\u80FD\u770B\u4E86\uFF1B  \uFF08\u51FF\u7A7F\u6548\u5E94\u3002\uFF09","\u4E0D\u53EF\u8FDE\u7EED\uFF1B\u4E0D\u7136\uFF0C\u6574\u4E2A\u4EBA\uFF0C\u90FD\u662F\u5E7B\u89C9\u3002"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `});switch(i){case"\u5728\u6F0F\u6D1E\u7814\u7A76\u73AF\u5883\uFF0C\u8FDB\u884C\u663E\u793A":return f;case"\u5728\u75DB\u70B9\u96BE\u70B9\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u81EA\u5DF1\u56DE\u8FC7\u5934\u53BB\u770B":return(0,F.Z)((0,F.Z)({},f),{},{name:"\u3010\u526F\u672C\u3011"+f.name,dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u3010\u526F\u672C\u3011\u89C1\u4E0A\u65B9\u6F0F\u6D1E\u7814\u7A76\u4E13\u9879\uFF08\u90A3\u91CC \u7ED3\u5408\u573A\u666F \u8BB2\u7684\u66F4\u900F\u5F7B\uFF09"])))})}}var P0={name:"\u6F0F\u6D1E\u590D\u73B0\u548CPoC_C",stages:[{name:"\u6F0F\u6D1E\u7814\u7A76",tools:[ru("\u5355\u7C7B\u6F0F\u6D1E\u6DF1\u5165\u7814\u7A76\uFF08\u65E7\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Top10\u6F0F\u6D1E","\u6709\u7F16\u53F7\u89C4\u5F8B\u6F0F\u6D1E",`\u591A\u63D0\u51E0\u4E2A\u3010\u4E3A\u4EC0\u4E48\u3011\u95EE\u9898\uFF08    \u6682\u65F6\u4E0D\u63D0  <\u662F\u4EC0\u4E48/\u4E3A\u4EC0\u4E48/\u600E\u4E48\u529E>    \u90A3\u4E2A\u592A\u591A\u4E86    \uFF09    \uFF08\u4E3E\u4F8B\uFF1A\u6F0F\u6D1E\u7684\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F\u4E3A\u4EC0\u4E48\uFF1F
\u51FA\u73B0\u7684\u5730\u65B9\u662F\u4EC0\u4E48\u5462\uFF1F\u4E3A\u4EC0\u4E48\uFF1F
\u65E5\u5E38\u5229\u7528\u7684\u65B9\u5F0F\uFF0C\u662F\u63A5\u53E3url\u5462\uFF1F\u53C2\u6570\u4F20\u53C2\u5462\uFF1F\u8FD8\u662F\u4EC0\u4E48\u5462\uFF1F
\u590D\u73B0\u7684\u6548\u679C\u662F\u4EC0\u4E48\u5462\uFF1F\u6570\u636E\u4F20\u56DE\u6765\uFF1FDnsLog\u53D1\u8FC7\u6765\uFF1F\uFF09`,L.wM+"\u53D8\u79CD1\uFF1A\u4E00\u7BC7\u7EAFPoC\u7684\u89E3\u6790\uFF0CAI\u89E3\u8BFB\uFF08\u6F0F\u6D1E\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\uFF09\u2014\u2014\u2014\u2014\u5F62\u6210\u4E00\u7BC7\u4EBA\u9020\u6587\u5E93\u3002      \uFF08\u66F4\u597D\u7684\u7248\u672C\uFF1A\u4F60\u597D\uFF0C\u6211\u6709\u4EE5\u4E0BPoC\u3002\u8BF7\u4F60\u4E3A\u6211\u53CD\u63A8  \u6F0F\u6D1E\u7684\u539F\u7406\u548C\u3010\u6F0F\u6D1E\u94FE\u6761\u3011\u3001\u3010\u6570\u636E\u6D41\u52A8\u3011\u3002\uFF09",L.wM+"\u53D8\u79CD2.5\uFF1A\u627E\u5230\u4E00\u7BC7\u6F0F\u6D1E\u6587\u5E93\uFF08\u63CF\u8FF0\u3001\u539F\u56E0\u3001\u5371\u5BB3\u65B9\u5F0F\uFF09\uFF0C\u8BA9AI  \u53BB\u5199\u51FAPoC","\u73B0\u6709\u6F0F\u6D1E\u6587\u5E93","\u6F0F\u6D1E\u5927\u7C7B\u3001\u6F0F\u6D1E\u5C0F\u7C7B\u3001cve\u8D77\u540D\u7F16\u53F7\u3001\u53EF\u80FD\u7684\u5229\u7528\u811A\u672C\u3001\u5229\u7528\u5DE5\u5177","\u6839\u672C\u539F\u56E0\u3001\u91CD\u8981\u539F\u56E0\u3001\u76F4\u63A5\u539F\u56E0\u3001\u6BD4\u55BB\u3001\u672C\u8D28\u3001\u6BD4\u55BB\u3001\u6BD4\u55BB\u4E3B\u9898","\u53EF\u4EE5(\u540C\u6B65)\u53BB \u8F93\u51FA\u5B66\u4E60\u6587\u7AE0","\u6570\u5B66\u7684\u8BC1\u660E\uFF0C\u6B63\u8BC1\u6CD5 \u548C \u53CD\u8BC1\u6CD5\uFF08\u53CD\u9762\u8BC1\u4E0D\u4E86\uFF1F  \u90A3\u5C31\u6B63\u9762\u8BC1\u660E\uFF1F\uFF1B\u6211\u53BB\u8BC1\u660E   \u8FD9\u4E2A\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\uFF1F\uFF09","\u591A\u7EF4\u5EA6\uFF08\u975E\u5FC5\u586B\uFF09\uFF08\u8FD9\u662F\u4EC0\u4E48\uFF1F\uFF09","\u5211\u4FA6\uFF08\u4E0D\u4E00\u5B9A\u9760\u8C31\u3001\u53EA\u662F\u8111\u6D1E\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u3010\u5355\u7C7B\u6F0F\u6D1E\u6DF1\u5165\u7814\u7A76\u3011\u56FA\u5B9A\u6761\u76EE\uFF08\u65B0\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(function(){var i=["\u4E3B\u9898\uFF1B","\u627E\u5230\u7684\u6587\u7AE0\uFF1A\u4EBA\u5199\u7684\u8D44\u6599\u3001\u5148\u77E5\u793E\u533A",L.wM+"\u8BA9AI\uFF0C\u5BF9\u3010\u627E\u5230\u7684\u6587\u7AE0\u3011\u8FDB\u884C\u6311\u523A","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014","\u3010\u6700\u4E2D\u95F4\u3011\u4EBA\u5DE5\uFF0C\u8FDB\u884C\u7684\u5BF9\u6BD4\u548C\u603B\u7ED3","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",L.wM+"\u8BA9AI\uFF0C\u5BF9\u3010AI\u6BD4\u55BB\u3011\u68C0\u67E5\uFF0C\u6311\u9519  \uFF08\u8BC4\u5206\uFF09\u3001AI\u7684\u6311\u523A",L.wM+"AI(DeepSeek)\uFF0C\u81EA\u5DF1\u53BB\u5C1D\u8BD5\u6BD4\u55BB(\u548C\u6211\u7684\u662F\u5E76\u884C\u7684)(\u8349\u7A3F)",L.wM+"\u8BA9AI\uFF0C\u5BF9\u3010\u6211\u7684\u6BD4\u55BB\u3011\u68C0\u67E5\uFF0C\u6311\u9519  \uFF08\u8BC4\u5206\uFF09\u3001AI\u7684\u6311\u523A","(\u5148\u770B\u6750\u6599)\u6211\u7684\u60F3\u8C61\u3001\u6211\u7684\u6BD4\u55BB\u3002\u81EA\u5DF1\u53BB\u7406\u89E3\u3001\u81EA\u5DF1\u53BB\u6BD4\u55BB\uFF08\u53D1\u6325\u60F3\u8C61\u529B\uFF0C\u5C3D\u60C5\u7684\u53BB\u8111\u8865\uFF1B\u53BB\u60F3\u8C61\u4E00\u4E2A\u751F\u6001\u3001\u4E00\u4E2A\u865A\u6784\u7684\u95ED\u73AF\u4E16\u754C\uFF09","\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"].concat([L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u601D\u8003\u7248-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u601D\u8003\u7248-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u7814\u7A76-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Grok-\u7814\u7A76-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Gemini-\u7814\u7A76-\u52A0\u5F3A\u7248 1\u8F6E\u5927\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u5982Gemini-\u7814\u7A76-\u52A0\u5F3A\u7248 2\u8F6E\u5C0F\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u817E\u8BAF\u5143\u5B9D-\u516C\u4F17\u53F7\u641C\u7D22 1\u8F6E\u5927\u7C7B",L.wM+"\u5404\u79CD\u5927\u6A21\u578B\u7684\u5B9A\u5236\u3010\u3011\uFF0C\u817E\u8BAF\u5143\u5B9D-\u516C\u4F17\u53F7\u641C\u7D22 2\u8F6E\u5C0F\u7C7B"],["","","",""]);return{"\u5E74\u4EFD\u2014\u2014\u8001\u6D1E":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema((0,_u.Z)(i)),"\u6708\u4EFD\u2014\u2014Nday":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema((0,_u.Z)(i)),"\u65E5\u4EFD\u2014\u20140Day":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema((0,_u.Z)(i))}}()),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),F0("\u5728\u6F0F\u6D1E\u7814\u7A76\u73AF\u5883\uFF0C\u8FDB\u884C\u663E\u793A"),ru("\u7F51\u4E0A\u5E38\u8BF4\u7684\u4E00\u4E9B\u6280\u5DE7\uFF08\u8FD8\u6CA1\u5F52\u7C7B\u533A\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u62FF\u5230\u6E90\u7801\u4E4B\u540E\u7B2C\u4E00\u6B65\u770B\u662F\u6E90\u7801\u662F\u5426\u5168\u9762\uFF0C\u662F\u5426\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\uFF0C\u5982\u679C\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\u5C31\u53EF\u4EE5\u7528\u65AD\u70B9\u8C03\u8BD5\u7684\u65B9\u6CD5\u53BB\u8C03\u8BD5\u4EE3\u7801\uFF0C\u5982\u679C\u4E0D\u80FD\u5C31\u5F97\u624B\u52A8\u53BB\u628A\u4E00\u4E9B\u65B9\u6CD5\u62BD\u8C61\u51FA\u6765\uFF0C\u8FDB\u884C\u8C03\u8BD5\uFF0C\u6211\u8FD9\u6B21\u62FF\u5230\u7684\u6E90\u7801\u4E0D\u591F\u5168\u9762\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u624B\u52A8\u53BB\u8C03\u4E86\u3002\u901A\u5E38\u5BA1\u8BA1java\u4EE3\u7801\u65F6\u4E2A\u4EBA\u6BD4\u8F83\u559C\u6B22\u7528vscode\u9605\u8BFB\u4EE3\u7801+idea\u53CD\u7F16\u8BD1\u4EE3\u7801\u3002","\u8BE5\u6E90\u7801\u4F7F\u7528tomcat\u90E8\u7F72\uFF0C\u62FF\u5230\u6E90\u7801\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u53BB\u770B\u5176\u76EE\u5F55\u4E0B\u7684WEB-INF/web.xml\u6587\u4EF6\uFF0C","\u7F51\u4E0A\u5F00\u6E90CMS\u57FA\u672C\u4E0A\u51FA\u6765\u4E00\u4E2A\u661F\u671F\u5DE6\u53F3\u5C31\u6CA1\u620F\u4E86\uFF0C\u4F46\u662F\u8FD8\u662F\u60F3\u8BD5\u4E00\u8BD5\uFF0C\u968F\u4FBF\u627E\u4E00\u5957\u6E90\u4EE3\u7801\uFF0C\u7B80\u5355\u5BA1\u8BA1\u4E00\u4E0B\uFF0C\u770B\u770B\u6709\u65E0\u6536\u83B7"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u5FC3\u6001\u548C\u751F\u6D3B\u65B9\u5F0F",tools:[ru("\u6D74\u706B\u91CD\u751F\uFF08\u4EE5\u540E\u7686\u662F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u591A\u9E1F\u5728\u6797\uFF0C\u4E0D\u5982\u4E00\u9E1F\u5728\u624B",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u9605\u8BFB\u5668\uFF08\u5C0Fh\u6587\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au({"3\u54081\uFF1A\u5C0Fh\u6587":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u7248\uFF1A\u590D\u76D8+\u5E38\u89C4\u5C0F\u8BF4","\u7B2C\u4E8C\u7248\uFF1A\u3010\u77E5\u8BC6/\u6587\u7AE0\u3011+h\u6587","\u7B2C\u4E09\u7248\uFF1A\u665A\u4E0A\u4E13\u8BFB\u3001(\u957F\u671F\u4E60\u60EF)\u957F\u8DB3\u53D1\u5C55\uFF0C\u3010\u4EE3\u5BA1\u7CBE\u54C1\u5E16\u5B50\u3011+\u3010\u6211\u7684\u590D\u76D8(AI/\u4EBA\u5DE5)\u3011+\u3010\u5A31\u4E50\u8F7B\u5C0F\u8BF4(\u975Eh\uFF0C\u5982\u82F1\u96C4\u65E0\u654C\u3001\u6597\u7834\u82CD\u7A79)\u3011","(h\u6587\u77ED\u671F\u523A\u6FC0\u3001\u66FE\u5C1D\u8BD5\u767D\u5929\u523A\u6FC0)","h\u6587\uFF1A\u7528Notion\u6536\u5F55\u6587\u7AE0\u3001\u5927\u628A\u7684\u5C0F\u9EC4\u6587\uFF1B\u4E00\u4E2A\u5408\u96C6\uFF1B\u653E\u5230\u4E00\u8D77\uFF0C\u7528\u6765\u6DA8\u7CBE\u795E"]),"\u3010\u661F\u7403\u3011\u5B66\u4E60\u65B9\u6CD5":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u9762\u5411\u4E13\u4E1A\u6587\u7AE0(\u661F\u7403\u3001\u5148\u77E5\u793E\u533A)\uFF0C\u65B0\u7684\u60F3\u6CD5\uFF1A\u90A3\u4E9B\u90FD\u592A\u4E13\u4E86   \u661F\u7403\u7FA4\u91CC\u7684\u4E13\u5BB6\uFF1B\u4E0D\u505A\u7B2C\u4E00\u540D\uFF0C\u505A\u7B2C\u4E8C\u540D\u5C31\u597D\uFF1B\uFF08\u751A\u81F3\u591A\u4E2A\u9886\u57DF\u7684\u7B2C\u4E8C\u540D\uFF09","\u642D\u5EFA\u73AF\u5883","\u590D\u73B0\u6F0F\u6D1E","\u770B\u522B\u7684\u5E08\u5085\u4EA7\u751F\u7075\u611F","\u4E00\u4E9B\u7EFC\u5408\u5229\u7528\u6280\u5DE7","\u9A9A\u601D\u8DEF\u3001\u9A9A\u6280\u5DE7","\u6BD4\u8D5BPwn\u7684\u89E3\u9898\u6280\u5DE7\u3002  \u2014\u2014>  \u89E3\u9898\u3001\u5237\u9898","\u5404\u79CD\u673A\u5236\u7814\u7A76","\u5185\u5B58\u9A6C","\u6846\u67B6\u4E2D\u7684\u91CD\u8981\u73AF\u8282  \uFF08\u5C55\u5F00\u89E3\u8BFB\uFF09"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u4E13\u5BB6\u5FC3\u6001\uFF08\u5FAE\u8C03\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u5F53\u7136\u8981\u4E13\u4E1A\uFF0C\u8981\u5E72\u6CD5\uFF1B\u4F46\u3010\u4E0D\u505A\u7B2C\u4E00\u540D\uFF0C\u505A\u7B2C\u4E8C\u540D\u5C31\u597D\u3011\u3002\uFF08\u7075\u611F\u6E90\u4E8E\uFF1A\u7B2C\u4E00\u540D\u592A\u4E13\uFF0C\u8981\u820D\u5F03\u5F88\u591A\uFF1B\u7B2C\u4E00\u540D\uFF0C\u672A\u5FC5\u6709\u770B\u4E0A\u53BB\u90A3\u4E48\u5149\u9C9C\uFF1B\u7B2C\u4E00\u540D\u5BB9\u6613\u88AB\u88F9\u631F\u7740\uFF0C\u65E0\u6CD5\u8DE8\u754C\uFF1B\u76EE\u6807\u7B2C\u4E8C\u540D\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6210\u4E3A\u5F88\u591A\u4E2A\u9886\u57DF\u7684\u7B2C\u4E8C\u540D\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru(L.Q9+"\u624B\u7ED8",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([L.Q9+"\u624B\u7ED8\u5C31\u662F\u5728\u3010\u601D\u3011 \u2014\u2014 \u5B66\u800C\u4E0D\u601D\u5219\u7F54\uFF0C\u601D\u800C\u4E0D\u5B66\u5219\u6B86","\uFF08\u5012\u51FA\uFF0C\u5012\u5230\u7EB8\u4E0A\u3002\uFF09","\uFF08\u7B2C\u4E8C\u65E5\u8BA1\u5212\u3002\u5927\u4EFB\u52A1  \u62C6\u5206\u3002\uFF09\uFF08\u6BCF\u65E5\uFF0C\u5DF2\u6478\u5230\u5927\u81F4\u7684\u5E95\u4E86\u3002\uFF09","\u8D70\u8DEF\u4E00\u5C0F\u65F6\uFF08\u56FE\u4E66\u9986\uFF09\uFF0C\u601D+\u8FD0\u52A8/\u4F11\u606F","\u624B\u7ED8 \u2014\u2014 \u667A\u529B"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u63D0\u524D\u8FC7\u4E0A\u3010\u7687\u5E1D\u822C\uFF08\u4FE1\u606F\u8499\u853D\uFF09\u7684\u751F\u6D3B\u3011\uFF1F",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4FE1\u606F\u8FC7\u591A\uFF08GPT\u5927\u6A21\u578B\uFF09\u3002\u771F\u5047\u83AB\u8FA8\uFF0C\u9AD8\u5EA6\u903C\u771F"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u5916\u90E8\u6539\u53D8\uFF08\u7279\u6307 \u5E74\u4F1A \u7ED9\u624B\u7ED8\u7684\u7075\u611F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u8305\u585E\u987F\u5F00","\u6362\u6362\u8111\u5B50\uFF08\u5916\u754C\u7EC4\u7EC7  \u56E2\u4F53\u6D3B\u52A8<\u5FC3\u4E0D\u5728\u7109>  \uFF09    \uFF1F\uFF08\u65B0\u73AF\u5883\u662F    \u6D88\u8017\u54C1\uFF1F  \uFF09","\u53EF\u9047\u4E0D\u53EF\u6C42\uFF08\u770B\u5730\u65B9\u3002\u770B\u5730\u57DF\uFF09  \u770B\u5468\u56F4\u7684\u670B\u53CB  \u770B\u624B\u5934\u7684\u95F2\u94B1\u3002","\u865A\u65E0\u7F25\u7F08 \u2014\u2014 \u5F97\u5230\u4E86\u5C31\u662F\u6709  \u6CA1\u5F97\u5230\u5C31\u662F\u6CA1\u6709"].concat([])))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u75DB\u70B9\u3001\u96BE\u70B9\uFF08\u65B0\uFF09\uFF08\u4F3C\u4E4E\u5185\u5BB9 \u90FD\u53EF\u6682\u65F6\u653E\u5728 \u6F0F\u6D1E\u7814\u7A76\u8FD9\u4E2A\u677F\u9762\uFF09",tools:[ru("\u53D1\u73B0\u548C\u6CBB\u7597\u6211\u7684\u5F31\u70B9\uFF1A\u8282\u5916\u751F\u679D\u3001\u7EC6\u679D\u672B\u8282\uFF08\u5728\u6709\u65F6\u95F4\u5361\u70B9\u7684\u65F6\u5019\uFF0C\u660E\u663E\u2026\u2026\uFF09\u3001\u5FEB\u5200\u65A9\u4E71\u9EBB",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([""]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),F0("\u5728\u75DB\u70B9\u96BE\u70B9\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u81EA\u5DF1\u56DE\u8FC7\u5934\u53BB\u770B")]},{name:"\u65B0\u7684\u5DE5\u5177\uFF08\u6682\u5B58\uFF09",tools:[ru("Haystack  \uFF08\u7528\u4E8E\u6570\u636E\u6D41\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u9002\u7528\u4E8E\u6570\u636E\u6D41"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("jar-analyzer/jar-analyzer",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u7C7BCodeQL\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("Tabby v2 \u65B0\u4EE3\u5BA1\u5DE5\u5177\uFF08\u66F4\u7C7B\u4F3C\u4E8ECodeQL\uFF09\uFF09\uFF08\u597D\u50CF\u4F7F\u7528\u7684\u4EBA\u5F88\u591A\uFF0C\u6210\u65482024\u5E74\u4E5F\u5F88\u5927\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u7C7BCodeQL\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),ru("\u7B80\u5355Fuzz\u63D2\u4EF6\uFF08\u6587\u4EF6\u4E0A\u4F20\u3001\uFF0C\u7B49\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:au(cu(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u4E2A\uFF0C\u6587\u4EF6\u4E0A\u4F20","\u7B2C2\u4E2A\uFF0C\u6587\u4EF6\u4E0A\u4F20"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]}]},N=n.eV.quick_get_tool,q=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,V=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,Z0={name:"\u516C\u4F17\u53F7\u5199\u4F5C__\u8DEF\u5B502",stages:[{name:"\u524D\u671F\u5FC5\u8981\u51C6\u5907",tools:[N("\u5408\u6CD5\u516C\u4F17\u53F7",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6302\u5728\u5E38\u7528\u53F7\u540D\u4E0B\uFF08\u5E73\u53F0\u53F7 \u6216 \u65B0\u4E2A\u4EBA\u53F7\uFF09","\u5B9E\u540D\u8BA4\u8BC1\uFF08\u4F9B\u5546\u4E1A\u6D3B\u52A8\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u5C3D\u91CF\uFF0C\u5C06\u5B9E\u540D\u7ED1\u5728\u4E00\u8D77\u3002
    \uFF08\u73B0\u5728\u5DF2\u7ECF\u4E0D\u662F \u8EB2\u8EB2\u85CF\u85CF\u7684\u65F6\u4EE3\u4E86\uFF09
                `}),N("\u8349\u7A3F-\u76EE\u524D\u6682\u5B9A\u5199\u5728Notion\uFF08\u7701\u4E8B\u3001\u8BED\u6CD5\u7B80\u5355\u3001\u624B\u719F\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001Notion\u7F16\u5199","2\u3001\u590D\u5236\u5230\u6A21\u677F\uFF08\u4E2D\u95F4\u53EF\u80FD\u8FC7\u4E00\u9053\uFF0C\u590D\u5236\u5230Typora\u3010\u6807\u51C6\u5316\u3011\uFF0C\u518D\u7C98\u8D34\u5230\u6A21\u677F\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u516C\u4F17\u53F7\u6A21\u677F\uFF08\u53CA\u586B\u5145\u624B\u6BB5\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u9009\u578B\uFF1A\u3010doocs/md\u3011\u5DF2\u7ECF\u5F88\u597D\u4E86\uFF0C\u5E76\u4FDD\u5B58\u81EA\u5DF1\u7684\u7EC6\u8282\u914D\u8272\u3002     \uFF08\u5176\u5B83\uFF1A\u58A8\u6EF4MdNice\u3001\uFF09","2\u3001\u7C98\u8D34\u8FDB\u3010\u5B98\u65B9\u516C\u4F17\u53F7\u7F16\u8F91\u5668\u3011\uFF0C\u5FAE\u8C03\u90E8\u5206  \u4E0D\u517C\u5BB9\u7684\u7EC6\u8282  \u3002","3\u3001\u7C98\u8D34\u56FE\u7247  \u3002","4\u3001\u6DFB\u52A0\u53CB\u60C5\u5F15\u7528\u3002    \uFF08\u5185\u94FE\uFF1A\u6587\u5B57\u548C\u5F15\u7528\u8D85\u94FE\u63A5\uFF1B\u5916\u94FE\uFF1A\u5F15\u7528url\u5B57\u7B26\uFF09","5\u3001\uFF08\u68C0\u67E5  \u5DF2\u7ECF\u5728\u540E\u9762\u6B65\u9AA4\u5305\u62EC\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u539F\u59CB\u7D20\u6750",tools:[N("\u6280\u672F\u6D41\u7A0B\u3001\u6280\u672F\u7B14\u8BB0\uFF08\u5982\u679C\u81EA\u52A8 \u7B14\u8BB0 \u8F6C \u81EA\u5A92\u4F53\u6587\u7AE0\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7167\u5E38\u53BB\u5199","\u5F15\u7528\u8D44\u6599\uFF08\u653E\u5728\u6700\u540E\u9762\uFF09","\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898\u548C\u6613\u9519\u7684\u70B9"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u914D\u56FE\u3001\u622A\u56FE",{dataCheck_\u6570\u636E\u68C0\u67E5:q({"\u6D41\u7A0B\u622A\u56FE\uFF08\u64CD\u4F5C\u8FC7\u7A0B\u622A\u56FE\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u53D1\u73B0\u4E0D\u884C\uFF09\u6765\u6E90\uFF1AWayBack/WindRecorder\u81EA\u52A8\u622A\u56FE\uFF08\u64CD\u4F5C\u6D41\u7A0B\u4E2D\u7684\u56FE\uFF09","EV\u5F55\u5C4F\uFF08\u76EE\u524D\u4E8B\u513F\u6700\u5C11\u3001\u7A33\u59A5\u7684\u3001\u8017\u65F6\u4E2D\u7B49\uFF09"]),"\u6210\u54C1\u622A\u56FE\uFF08\u4EA7\u7269\u622A\u56FE\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u793E\u533A\u5927\u4F6C\u7684\u590D\u73B0\u5C55\u793A  \uFF08\u4E0D\u5B9C\u8FC7\u591A\u3002\u8981\u4E25\u683C\u7F72\u540D\uFF09","2.1\u3001\u81EA\u5DF1\u8BBE\u8BA1\u6A21\u677F\uFF08\u5C1D\u8BD5\u4F7F\u7528\u3010same.new\u3011\u53BB\u6252\u3010jevitty\u9996\u9875\u7AD9\u3011\uFF0C\u4F46\u5931\u8D25\u4E86\uFF09","2.2\u3001\u81EA\u5DF1\u8BBE\u8BA1\u6A21\u677F\uFF08\u5C1D\u8BD5\u76F4\u63A5\u751F\u6210\u3010\u82F9\u679C\u3001\u6296\u97F3\u3001\u77E5\u4E4E\u3001\u5C0F\u7EA2\u4E66\u3011\u98CE\u683C\uFF0C\u4F46\u90FD\u5931\u8D25\u4E86\uFF09","2.3\u3001\u540E\u6765\uFF0C\u8FDB\u884C\u5C71\u5BE8\u4F4E\u521B\u9B54\u6539\uFF1A\u91C7\u7528\u3010Claude3.7\u3011\uFF0C\u4E3A\u5927\u4F6C\u6A21\u677F\u6DFB\u52A0\u3010\u53D8\u79CD\u98CE\u683C\u3011  \uFF08\u6210\u529F\uFF0C\u3010Claude3.7\u3011\u505A\u8FD9\u4E2A\u5F88\u5728\u884C\uFF09"]),"\u76F4\u63A5\u6BB5\u843D\u6587\u5B57\u51FA\u56FE\uFF08\u65B0\u79D1\u6280\uFF09":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B2C\u4E00\u6B65\u3001gemini\u603B\u7ED3\u6587\u5B57\u4E3Aprompt","\u7B2C\u4E8C\u6B65\u3001GPT-4o\u81EA\u52A8\u7ED8\u56FE\uFF08\u7ED3\u6784\u6027\u548C\u7EC6\u8282\uFF0C\u975E\u5E38\u5F3A\uFF09  \uFF08\u5B98\u65B9\u514D\u8D39\u8D26\u53F7/\u63D2\u4EF6/PoE\u8D26\u53F7\uFF09"]),\u5C01\u9762\u56FE\u53CA\u5C3A\u5BF8\u5904\u7406:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u539F\u56FE\uFF0C\u8FD8\u662F\u6309\u7167\u3010GPT-4o\u3011\u7684\u914D\uFF08\u53EF\u80FD\u6BD4\u4F8B\u6709\u95EE\u9898\uFF0C  4o\u662F1:1  \uFF0C  \u516C\u4F17\u53F7\u5C01\u9762\u662F  2.35:1\uFF09","2\u3001\u6BD4\u4F8B\u8F6C\u6362  \uFF08\u5C1D\u8BD5\u8981gemini\u751F\u6210prompt\uFF0C\u8BA9\u3010GPT-4o\u3011  \u53D8\u901A\u751F\u6210\u8D85\u5927\u56FE\u6269\u56FE\uFF0C\u518D\u622A\u53D6  \u4F46\u5931\u8D25\u3002  \uFF09","3\u3001\u6269\u56FE\u3010MyEdit\u3011  (\u6210\u529F\uFF0C\u6BCF\u5929\u53EF2\u5F20)"]),\u5355\u6982\u5FF5\u51FA\u8D85\u7F8E\u56FE:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53C2\u8003\u3010\u4E91\u8212\u3011\u7684\u5DE5\u4F5C\u6D41\uFF1A\u300A\u6CA1\u6709\u827A\u672F\u7EC6\u80DE\u4E5F\u60F3\u521B\u4F5C\uFF1F\u4E00\u53E5\u8BDD\u8BA9AI\u79D2\u51FA\u5927\u5E08\u7EA7\u4F5C\u54C1\uFF0C\u9644\u63D0\u793A\u8BCD\u548C\u5582\u996D\u7EA7\u6559\u7A0B\u300B"]),\u6545\u4E8B\u4E66:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53C2\u8003\u3010\u8D5B\u535A\u5C0F\u718A\u732Bloki\u3011\u7684\u6587\u7AE0\uFF1A\u300A\u8C46\u5305\u624D\u662F\u56FD\u4EA7GPT-4o\uFF1F\u4E07\u5B57\u957F\u6587\u6DF1\u5EA6\u6D4B\u8BC4\uFF0C\u5347\u7EA7\u540E\u7684\u8C46\u5305\u6709\u591A\u5F3A\uFF01\uFF08\u5185\u96447000\u5B57\u63D0\u793A\u8BCD\u548C130\u5F20\u56FE\uFF09\u300B"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u65E5\u5E38\u5C0F\u6545\u4E8B",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53D6\u7FA4\u53CB\u7684\u5C0F\u6545\u4E8B\uFF0C\u5373\u53EF\u3002\uFF08\u8FD8\u6709\u7FA4\u53CB\u7684\u622A\u56FE\uFF0C\u8FD9\u4E9B\u90FD\u662F\u7B2C\u4E00\u624B\u7684\uFF09","\u81EA\u5DF1\u9047\u5230\u7684\u6545\u4E8B","\u56DE\u60F3\u8D77\u4EE5\u524D\u7684\u6545\u4E8B\uFF08\u8981\u6709 \u8BB2\u6545\u4E8B\u4EBA \u7684\u98CE\u5473\uFF0C\u6709\u8001\u6545\u4E8B\u7684\u611F\u89C9\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u8BD7\u96C6",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u8042\u9C81\u8FBE\u8BD7\u96C6","\u6CF0\u6208\u5C14\u8BD7\u96C6\uFF08\u662F\u4E0D\u662F \u7565\u5FAE\u6709\u4E9B\u8001\u4E86\uFF1F\uFF09","\u6728\u5FC3 \uFF08\uFF1F\uFF09","\u4E00\u4E9B\u56FD\u4EA7  \u8352\u8BDE\u65E0\u5398\u5934\u77ED\u8BD7  \uFF08\u5982  \u91C7\u94DC  \u63A8\u8350\u7684\u4E00\u4E9B\uFF09","\u4FF3\u53E5\u7F16\u5199\uFF085-7-5  \u975E\u5E38\u53D6\u5DE7\u7684\u65B9\u6CD5\uFF09\uFF08Gemini\u7F16\u5199\u8FD9\u4E2A  \u975E\u5E38\u5728\u884C\uFF01\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u4E00\u4E9B\u3010\u7ECF\u5178\u8457\u4F5C/\u65B0\u4E66\u3011\u7684\u91CD\u8981\u89C2\u70B9",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4F20\u7EDF\u6280\u672F\u65B0\u4E66\uFF1A\u5947\u70B9","\u4F20\u7EDF\u5FC3\u667A\u6210\u957F\u3001\u77E5\u8BC6\u4ED8\u8D39\uFF1A  \u5F15\u7528\u4E00\u4E9B","\u65B0\u4E66\uFF1AAI\u65F6\u4EE3\u7684Xxx","Google DeepReSearch \u53BB\u5BFB\u627E\u4E00\u4E9B\uFF0CAI\u540D\u4EBA\u7684\u6700\u65B0\u770B\u6CD5"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u5F00\u573A\u8BED",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u62BD\u8C61\u8BED\u5F55\uFF08\u4E0B\u65B9 \u5927\u6C34\u6BCD\u8001\u5E08\uFF09","\u674E\u6B63\u8BB2\u53F2\uFF1A  \u4E09\u89C2\u6B63\u76F4\u4E00\u628A\u5C3A\uFF0C\u624E\u624E\u5B9E\u5B9E\u8BB2AI",`\u7FA4\u53CB\uFF1A
(\u30B7_ _)\u30B7
\u4E09\u89C2\u8DDF\u7740\u4E94\u5B98\u8DD1\uFF0CAI \u54EA\u6709\u4E50\u5B50\u597D`]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u4E13\u5BB6\u5706\u684C\u8BA8\u8BBA(\u6A21\u62DF)",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u770B\u4E86\u751F\u6210\u7684\u4E00\u7BC7\u3010\u8D39\u6069\u66FC\u3011\uFF0C\u8FD9\u90E8\u5206\u8FD8\u633A\u4E0D\u9519\u7684\uFF1B\u800C\u4E14  \u53EF\u80FD\u5C31\u8FD9\u4E00\u90E8\u5206 \u5F88\u51FA\u6311.\u5F88\u51FA\u8272"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u9884\u884C\u6587\uFF08\u884C\u6587\u65B9\u6CD5\u8BBA\uFF09",tools:[N("\u884C\u6587\u65B9\u6CD5\u8BBA\uFF08AI\u9884\u5148\u7814\u7A76\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001Google DeepResearch \u7814\u7A76\uFF0C\u52A0\u4E0A Claude 3.7 \u603B\u7ED3\u3002\uFF08\u91CD\u5B9E\u64CD\u6027\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u884C\u6587\u6D41\u7A0B\uFF08\u8BD5\u9A8C\u671F\u2014\u2014\u2014\u2014\u6DF7\u4E71\u4F46\u5B55\u80B2\u51FA\u79E9\u5E8F\uFF09",tools:[N("\u65B9\u6CD5\u8BBA\u66B4\u529B\u521D\u7A3F\uFF08\u7B2C1\u6B21\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u7B80\u5355\u76F4\u63A5All In"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u53CD\u520D\u5F0F \u7B28\u529E\u6CD5\uFF08\u591A\u6B21N\u56DE\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53EF\u4EE5\u5927\u91CF\u7684\u4F7F\u7528Claude\uFF08\u4E00\u6B21\u5BF9\u8BDD\uFF0C\u5927\u91CF\u601D\u8003\uFF09\uFF0C\u53CD\u590D\u53CD\u520D\u3002   \uFF08\u53D1\u73B0Claude\u6781\u5BB9\u6613\u89E6\u53D1\u654F\u611F\u8BCD\u4E2D\u65AD\uFF0C\u9700\u8981\u591A\u8BD5\u5F88\u591A\u6B21\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
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
                `}),N("\u8981AI\uFF0C\u5728\u4E0A\u8FF0\u8FC7\u7A0B\u4E2D\uFF0C\u53CD\u590Dargument\u81EA\u5DF1  \uFF0C\u770B\u770B\u771F\u5B9E\u6027\u7F3A\u4E4F\u54EA\u4E9B\u5185\u5BB9\uFF08\u5E76\u8FDB\u884C\u8865\u5145\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u53EF\u4EE5\u5728\u4E0A\u8FF0\u6B65\u9AA4\u4E2D(\u5185\u542B\u7740)\u505A\uFF1B\u4E5F\u53EF\u4EE5  \u5355\u72EC\u4E00\u4E2A\u6B65\u9AA4  \u53BB\u505A"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u7B2C\u4E00\u4E2A\u5173\u952E\u70B9\uFF0CGemini\u7684\u3010Sota\u3011\u56DE\u7B54\uFF08\u5F88\u6709\u542F\u53D1\u6027\uFF09\u7167\u7740\u8FD9\u4E2A\u505A\uFF0C\u7136\u540E\u524D\u9762\u7684\u53EF\u4EE5\u91CD\u6765\u4E00\u904D\u4E86",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Gemini\u76F4\u63A5\u8F93\u51FA\u4E86\u3010\u8FC7\u7A0B\u3011\uFF0C\u800C\u975E\u7ED3\u679C\uFF1B  \u5305\u62EC\u3010\u603B\u51718\u6B65  \u7684  Sota\u3011\u600E\u4E48\u53BB\u505A"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u9884\u884C\u6587\uFF08\u7B2C\u4E00\u7BC7\u6587\u7AE0\u2014\u2014\u7B80\u5355\u4F46\u6709\u7528\uFF09",tools:[N("\u4F7F\u7528\u884C\u6587\u65B9\u6CD5\u8BBA\uFF0C\u751F\u6210\u82F1\u6587\u6587\u7AE0",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u4E0D\u9650\u8BED\u8A00","2\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u6D4B\u8BD5\u82F1\u6587","3\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u5C1D\u8BD5\u8BA9\u5B83\u81EA\u7531\u53D1\u6325\uFF1A\u6D4B\u8BD5\u4E2D\u6587","4\u3001\u6309\u7167\u3010\u884C\u6587\u65B9\u6CD5\u8BBA\u3011\uFF0C\u9650\u5236\u5B83\u7684\u601D\u8003\u53EA\u80FD\u5728\u601D\u7EF4\u94FE\uFF0C\u8F93\u51FA\u5FC5\u987B\u662F\u6587\u7AE0","5\u3001\u6700\u7EC8\u8BD5\u9A8C\uFF1A\u5F97\u5230\u7684\u82F1\u6587\u6587\u7AE0\uFF0C\u8D28\u91CF\u5F88\u9AD8\u3002"])))}),N("\u82F1\u6587\u6587\u7AE0\uFF0C\u7FFB\u8BD1\u5230\u4E00\u4E2A\u6700\u597D\u7684\u7248\u672C",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001\u5C1D\u8BD5\u5404\u79CD  \u4E0D\u4E0B20\u7EC4  \u5E38\u89C4\u7684\u7FFB\u8BD1\u65B9\u6CD5\u3002\uFF08\u5473\u513F\u90FD\u5DEE\u4E00\u70B9\uFF09","2\u3001\u627E\u5230\u4E00\u7BC7\u3010\u6700\u4F73\u7FFB\u8BD1\u3011\u65B9\u6CD5\u7684\u539F\u6587\u3002","3\u3001\u57FA\u4E8E\u539F\u6587\uFF0C\u4F7F\u7528Gemini\u7FFB\u8BD1\uFF1B\u5E76\u4E0D\u65AD\u6478\u7D22\u3002\uFF08\u63A2\u7D22\u51FA\u3010\u5434\u519B\u3011\u52A0\u3010\u5361\u5B50\u54E5\u3011  \u7684\u98CE\u683C\uFF09"])))})]},{name:"\u6587\u98CE\u63D0\u53D6\u548C\u5E94\u7528",tools:[N("\u7CFB\u7EDF\u5316\u7684\u5206\u6790\u6587\u98CE",{dataCheck_\u6570\u636E\u68C0\u67E5:q({Gemini\u6587\u98CE\u63D0\u53D6:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["Gemini\u64C5\u957F\uFF0C\u4F5C\u5BB6\u6587\u98CE\u7684\u63D0\u53D6","\u76F4\u63A5\u95EE\u4F5C\u5BB6\u7684\u6587\u98CE\uFF1A\u5361\u5C14\u8428\u6839\u3001\u5434\u519B","\u5582\u7ED9\u6587\u7AE0\uFF0C\u62BD\u53D6\u4F5C\u5BB6\u7684\u6587\u98CE\uFF1A\u5361\u795E\u7684\u300A\u8C46\u5305\u54ED\u300B\u3001\u300A\u65E5\u62A5\u6A21\u677F\u300B"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u90E8\u5206\u6613\u5B66\u7684\u5199\u4F5C\u6280\u5DE7-\u91C7\u94DC",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["DeepSeek\uFF0C\u5BF9\u53E4\u8BD7\u6587\uFF0C\u7814\u7A76\u975E\u5E38\u6DF1\u5165\uFF08\u6839\u636E\u91C7\u94DC\u7684\u6587\u7AE0\uFF09","\u6BD4\u5982\uFF0C\u91C7\u94DC\u7684\u5199\u4F5C\u6280\u5DE7\uFF1F","\u6709\u4E09\u7BC7\u6587\u7AE0\u3002\u8FD8\u80FD\u5EF6\u4F38\u5F00  \u53BB\u62C6\u53E4\u6587\u7684\u5199\u4F5C\u6280\u5DE7"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u6DA6\u8272",tools:[N("\u6807\u9898\u7194\u70BC",{dataCheck_\u6570\u636E\u68C0\u67E5:q({\u516C\u4F17\u53F7\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u4ECE\u5361\u5179\u514B\u7684\u6587\u7AE0  \uFF0C\u627E\u89C4\u5F8B  \uFF0C\u751F\u6210\u4E00\u4E2A\u4EAE\u773C\u6807\u9898","\u5176\u5B83\u7684\u6807\u9898\u515A"]),GitHub\u4ED3\u5E93\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["1\u3001prompt\u3010\u8BF7\u5C06\u2026\u2026\u2026\u2026\u8F6C\u53D8\u4E3AGitHub\u4ED3\u5E93\u7684\u4ECB\u7ECD\u7684\u4FCF\u76AE\u7684\u8BDD\u8BED\u3011"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u627E\u4E2AAI  \u6BD4\u5982Grok3   \u3002",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u4E4B\u524D  \u5361\u5179\u514B  \u5199\u8FC7\u4E00\u7BC7\u5C0F\u8BF4\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u591A\u4E2A\u6BD4\u5BF9\u4E00\u4E0B",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u662F\u7684\u3002\u4E5F\u4E0D\u4E00\u5B9A\u8981flowith\uFF1F  \u90A3\u4E2A\u611F\u89C9\u5FEB\u901F  \u5BB9\u6613\u9519\uFF1F"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u7075\u611F",tools:[N("\u6700\u540E\u4E00\u904D\uFF0C\u6DFB\u52A0\u7075\u611F",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\uFF08\u5E94\u8BE5\u6709\u633A\u591A\u7684\uFF1F\uFF09  \u53EF\u80FD\u4E00\u8FB9\u770B\u4E00\u8FB9\u6539  \u8FD8\u4F1A\u8D8A\u6765\u8D8A\u591A","\u5DE5\u4E1A\u5236\u51B0\u673A\uFF1A\u5927\u6C34\u6BCD\u8001\u5E08\u3002  \uFF08\u7B2C\u4E00\uFF1A\u7B80\u4ECB  \u6709\u5F88\u591A\u62BD\u8C61\u8BED\u5F55\u3002  \u7B2C\u4E8C\uFF1A\u6E9C\u51B0(\u8D5B\u535A)\u5BFB\u627E\u7075\u611F\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]},{name:"\u68C0\u67E5",tools:[N("\u4EBA\u8BDD\u3001\u4EBA\u5473\uFF08\u7279\u522B\u662F\u8FC7 \u5FAE\u4FE1\u67E5\u91CD\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["111"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `}),N("\u9519\u8BEF\u4F8B\u5B50\u3001\u865A\u5047\u4E8B\u5B9E\u3001\u9020\u5047\u5F15\u7528",{dataCheck_\u6570\u636E\u68C0\u67E5:q(V(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["111"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001
                `})]}]},z0=n.eV.quick_get_tool,I0=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,T0=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,j0={name:"\u64AD\u5BA2\u5236\u4F5C_\u9AD8\u771F\u5B9E",stages:[{name:"\u524D\u671F\u5FC5\u8981\u51C6\u5907",tools:[z0("\u5408\u6CD5\u516C\u4F17\u53F7",{dataCheck_\u6570\u636E\u68C0\u67E5:I0(T0(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6302\u5728\u5E38\u7528\u53F7\u540D\u4E0B\uFF08\u5E73\u53F0\u53F7 \u6216 \u65B0\u4E2A\u4EBA\u53F7\uFF09","\u5B9E\u540D\u8BA4\u8BC1\uFF08\u4F9B\u5546\u4E1A\u6D3B\u52A8\uFF09"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u5C3D\u91CF\uFF0C\u5C06\u5B9E\u540D\u7ED1\u5728\u4E00\u8D77\u3002
    \uFF08\u73B0\u5728\u5DF2\u7ECF\u4E0D\u662F \u8EB2\u8EB2\u85CF\u85CF\u7684\u65F6\u4EE3\u4E86\uFF09
                `})]}]},t0=n.eV._\u5206\u7C7B\u5FAA\u73AF_\u5185\u5FAA\u73AF,M0=n.eV.quick_get_tool,O0=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,N0=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,q0={name:"CSharp\u9879\u76EE\u7684\u8865\u5145",stages:(0,_u.Z)(t0("",(0,_u.Z)(t0("",[{name:L.wM+"\u5DE8\u578BAI\u661F\u7403\u8868\u9762\uFF08\u65F6\u4EE3\u7EA2\u5229\uFF09",tools:[M0(L.wM+"\u3010AI-1\u6B65\u3011AI\u4ED3\u5E93\u76EE\u5F55\u6811\u5206\u6790",{dataCheck_\u6570\u636E\u68C0\u67E5:O0(N0(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["AI\u94FE\u63A5\uFF08\u8BE2\u95EE\u76EE\u5F55\u6811\u7684\uFF0C\u8BB0\u5F55\u5728\u8FD9\uFF09","\u3010\u6280\u672F\u6846\u67B6\u3011\u548C\u3010\u4E1A\u52A1\u6846\u67B6\u3011\uFF0C\u4F60\u7684\u81EA\u7531\u72C2\u60F3\uFF08\u8111\u6D77\u4E2D\u5148\u81EA\u7531\u5E7B\u60F3\uFF09","\u63D0\u53D6\u51FA\u7684\u3010\u5B89\u5168\u3011\u4FA7\u91CD\u70B9","\u67B6\u6784\u9E1F\u77B0\uFF08\u6280\u672F\u6808\u53CA\u6846\u67B6:Java/Web/\u524D\u7AEF\u6280\u672F/\u6570\u636E\u5E93\uFF09\uFF08\u6A21\u5757\u548C\u529F\u80FD\uFF1ACRM\u5BA2\u6237/OA\u529E\u516C/\u8D22\u52A1/\u8FDB\u9500\u5B58\u5E93\u5B58/\u7528\u6237\u6743\u9650/\u62A5\u8868/\u5DE5\u4F5C\u6D41/\u6587\u4EF6\u7BA1\u7406\uFF09","\u6839\u636E\u63D0\u53D6\uFF0C\u5236\u4F5C\u7684(\u5C0F)\u67B6\u6784\u56FE"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
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
                `})]}]))))},y=n.eV.quick_get_tool,b=n.eV._quick_get_dataCheck_\u6570\u636E\u68C0\u67E5_Fn,z=n.eV._simple_\u534F\u8BAE\u5355Sheet_\u8FD4\u56DEMap,L0=n.eV._\u5206\u7C7B\u5FAA\u73AF_\u5185\u5FAA\u73AF,Wu=n.eV._quick_get__AI_\u63D0\u95EEPrompt,H0={projects:[Z0,j0].concat([q0].concat([L.ns,L.VR]),[P0,{name:"\u9879\u76EEA",stages:[{name:"\u76EE\u6807\u786E\u8BA4(\u6CD5\u4EBA\u786E\u8BA4)",tools:[y("\u57FA\u672C\u4EBA\u5DE5\u540D\u5F55",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u6839\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u5B89\u5353\u5E94\u7528/\u5305\u540D","t_\u8D44\u4EA7_APP"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u5355\u4F4D\u540D\u79F0(\u5982\u56FD\u8D44\u59D4)","t_\u6CD5\u4EBA_\u7532\u65B9")]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u7532\u65B9\u7ED9\u7684\u624B\u518C\u3001\u804A\u5929\u8BB0\u5F55\u3002
2\u3001\uFF08\u7532\u65B9\uFF09\u4E4B\u524D\u7684\u8D44\u4EA7\u6E05\u5355\u3002
3\u3001SRC\u7ED9\u51FA\u7684  \u76F8\u5173\u6CD5\u4EBA\u540D\u5F55\u3002
4\u3001\u901A\u8FC7\u73B0\u573A\u5E38\u8BC6\uFF0C\u63A8\u65AD\u51FA\u7684  \u6CD5\u4EBA\u8303\u56F4\u3001\u6CD5\u4EBA\u5173\u8054\u3002\uFF08\u867D\u7136\uFF0C\u53EF\u80FD\u5728  \u5929\u773C\u67E5  \u7B49\u4E0A\u9762\uFF0C\u6CA1\u6709\u660E\u663E\u6807\u6CE8\uFF1F\uFF09
                `}),y("\u5929\u773C\u67E5\u7ED3\u679C(\u65E0\u8D26\u53F7\u53EF\u964D\u7EA7\u4E3A\uFF1A1\u3001\u516C\u5F00\u67E5\u8BE2\uFF1B2\u3001\u624B\u5DE5\uFF1B3\u3001\u653E\u5F03\uFF1B)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([],["\u5E8F\u53F7","\u88AB\u6295\u8D44\u516C\u53F8\u540D\u79F0","\u88AB\u6295\u8D44\u6CD5\u5B9A\u4EE3\u8868\u4EBA","\u6CE8\u518C\u8D44\u672C","\u6295\u8D44\u5360\u6BD4","\u6CE8\u518C\u65F6\u95F4","\u72B6\u6001"].concat(["\u4EBA\u5458\u89C4\u6A21","\u516C\u53F8\u72B6\u6001","\u516C\u53F8\u7C7B\u578B","\u53C2\u4FDD\u4EBA\u6570",(0,n.y)("\u540D\u79F0","t_\u516C\u53F8"),"\u5730\u5740","\u5B9E\u7F34\u8D44\u672C","\u5DE5\u5546\u6CE8\u518C\u53F7","\u6838\u51C6\u65E5\u671F","\u6CD5\u4EBA\u4EE3\u8868","\u6CE8\u518C\u5730\u5740","\u7535\u8BDD","\u767B\u8BB0\u673A\u5173","\u7B80\u4ECB","\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7","\u7EB3\u7A0E\u4EBA\u8D44\u8D28","\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801","\u7ECF\u8425\u8303\u56F4","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",(0,n.y)("\u7F51\u5740",["t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"]),"\u82F1\u6587\u540D\u79F0","\u8425\u4E1A\u671F\u9650","\u884C\u4E1A","\u90AE\u7BB1"],["\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801"])))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u6765\u6E90\uFF1A
\u514D\u8D39\u7528\u6237\u3002
\u8D2D\u4E70\u5929\u773C\u67E5\u4F1A\u5458\u3001\u8D2D\u4E70\u4F01\u67E5\u67E5\u4F1A\u5458\u3002

2\u3001\u65B9\u5F0F\uFF1A
\u722C\u866B\u6A21\u62DF
API\u67E5\u8BE2
\u7F51\u9875\u7AEF\u6279\u91CF\u67E5\u8BE2\uFF08\u6761\u4EF6\u5355\u4E00\uFF09

              `})]}].concat((0,_u.Z)(L0("\uFF08\u5FAA\u73AF\u7B2C1\u9636\u6BB5\uFF09",[{name:"\u57FA\u4E8E\u6839\u57DF\u540D\uFF0C\u62D3\u5C55",tools:[y("EnScan\u7ED3\u679C/",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),y("AllInOne/OneForAll",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["id","alive","request","resolve",(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),(0,n.y)("subdomain","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),"level","cname",(0,n.y)("ip","t_IP_\u7AEF\u53E3"),"public","cdn",(0,n.y)("port","t_IP_\u7AEF\u53E3"),"status","reason","title",(0,n.y)("banner","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"cidr","asn","org","addr","isp","source"]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u501F\u52A9\u3010Fox\u5DE5\u5177\u7BB1\u3011\u7684\u3010start2.bat\u3011\u5B9E\u73B0\u3002

\u8C03\u597D\u540E\uFF0C\u5C31\u4E00\u952E\u542F\u52A8\u4E86\uFF1A
1\u3001\u9700\u51C6\u5907\u4E00\u4E2A\u3010domains.txt\u3011\u7684\u8F93\u5165\u6587\u4EF6\u3002
                  `}),y("ShuiZe",{dataCheck_\u6570\u636E\u68C0\u67E5:b({GitHub\u654F\u611F\u4FE1\u606F:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]),\u722C\u866B:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u722C\u866B","\u5173\u952E\u5B57",(0,n.y)("\u94FE\u63A5","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u6807\u9898"]),\u8BC1\u4E66:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u5B50\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u8BC1\u4E66\u4FE1\u4EFB\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5")]),\u5B50\u57DF\u540DA\u8BB0\u5F55:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u5B50\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),"A\u8BB0\u5F55IP","CDN"]),Host\u78B0\u649E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("URL","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001\u7801","\u5E26Host\u7684\u6807\u9898","\u4E0D\u5E26Host\u7684\u6807\u9898"]),\u7F51\u7EDC\u7A7A\u95F4\u641C\u7D22\u5F15\u64CE:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]),\u670D\u52A1:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u534F\u8BAE",(0,n.y)("ip","t_IP_\u7AEF\u53E3"),(0,n.y)("port","t_IP_\u7AEF\u53E3")]),IP\u53CD\u67E5\u57DF\u540D:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("ip","t_IP_\u7AEF\u53E3"),(0,n.y)("\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5")]),\u5B58\u6D3B\u7F51\u7AD9\u6807\u9898:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001\u7801","\u6807\u9898",(0,n.y)("ip\u5730\u5740","t_IP_\u7AEF\u53E3"),"\u6846\u67B6\u4FE1\u606F",(0,n.y)("\u540E\u53F0\u8DEF\u5F84","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap")]),\u6F0F\u6D1E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u6F0F\u6D1E\u540D",(0,n.y)("url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"\u72B6\u6001"]),\u76F8\u5173\u57DF\u540D\u548CC\u6BB5:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("\u76F8\u5173\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u76F8\u5173C\u6BB5","t_\u7F51\u6BB5_C\u6BB5_\u65C1\u7AD9_\u7B49\u8FB9\u7F18\u4FE1\u606F"),"\u8BE5C\u6BB5\u51FA\u73B0\u7684\u57DF\u540D\u4E2A\u6570"])}),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
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

                    `,_AI_\u63D0\u95EEPrompt:Wu(`
\u4EE5\u4E0B\u662F\u6211\u7684\u3010\u6C34\u6CFDShuiZe\u3011\u5DE5\u5177\u7684\u626B\u63CF\u7ED3\u679C\u3002

\u5305\u542B\u4E86
GitHub\u654F\u611F\u4FE1\u606F\u3001\u722C\u866B\u3001\u8BC1\u4E66\u3001\u5B50\u57DF\u540DA\u8BB0\u5F55\u3001Host\u78B0\u649E\u3001\u7F51\u7EDC\u7A7A\u95F4\u641C\u7D22\u5F15\u64CE\u3001\u670D\u52A1\u3001IP\u53CD\u67E5\u57DF\u540D\u3001\u5B58\u6D3B\u7F51\u7AD9\u6807\u9898\u3001\u6F0F\u6D1E\u3001\u76F8\u5173\u57DF\u540D\u548CC\u6BB5\u3001

\u8FD9\u4E9B\u7EF4\u5EA6\u7684\u4FE1\u606F\u6536\u96C6\u7ED3\u679C\u7684\u4FE1\u606F\u3002

\u8BF7\u4F60\u4E3A\u6211\u5206\u6790\u3002
                    `)}),y("\u706F\u5854ARL",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]},{name:"\u7F51\u7AD9\u8BBF\u95EE\u3001\u4EBA\u5DE5\u722C\u866B\u3001\u673A\u5668\u722C\u866B",tools:[y("FireFox\u8FC7\u6EE4+Burp\u53CC\u5F00+Top10",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),y("DomainHunterPro\uFF0C\u5355\u72EC\u6355\u6349\u6839\u57DF\u540D",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u4ECE\u8D85\u94FE\u63A5\u3001JS\u6587\u672C\u7B49\uFF0C\u63D0\u53D6\u51FA\u3010\u53EF\u80FD\u548C\u539F\u6839\u57DF\u540D \u76F8\u5173\u7684 \u65B0\u6839\u57DF\u540D\u3011\u3002
        \u5B9E\u73B0\u3010\u4E1A\u52A1\u903B\u8F91\u3011\u5C42\u9762\u7684\u63D0\u53D6\u3002
                    `}),y("\u7F51\u7AD9SiteMap",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u76F4\u63A5\u4ECEBurp\u63D0\u53D6\u3002
    \u6240\u6709\u7684\u5B50Url\uFF0C\u90FD\u5728\u3002
                    `})]},{name:"\u7EFC\u5408\u626B\u63CF\u73AF\u8282",tools:[y("TScan-\u8D44\u4EA7\u6D4B\u7ED8=CyberSearch",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("URL","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u57DF\u540D","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("\u7AEF\u53E3","t_IP_\u7AEF\u53E3"),"\u534F\u8BAE","\u6807\u9898",(0,n.y)("\u6307\u7EB9","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u5E94\u7528","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Whois","\u5907\u6848","ISP","OS","\u5730\u533A","\u66F4\u65B0","\u6765\u6E90"])))}),y("TScan-IP\u5730\u5740=IpScan",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),"Proto","Target","Banner","Code","Title","Area"])))}),y("TScan-\u57DF\u540D\u626B\u63CF=SubDomain",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("MainDoamin","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("SubDomain","t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5"),(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),"Title","Banner","Area","From"])))}),y("TScan-URL\u5730\u5740=UrlScan",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["ID",(0,n.y)("Url","t_\u63A5\u53E3Url_\u53CA_\u6811\u5F62SiteMap"),"Code","Len","Title","Banner","Mid",(0,n.y)("Waf","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Area"])))}),y("Goby\u7EA2\u961F\u7248-Web\u7F51\u7AD9-\u5C31\u53EBgoby",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("Port","t_IP_\u7AEF\u53E3"),(0,n.y)("Server","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),"Title"])))}),y("Goby\u7EA2\u961F\u7248-\u5404\u79CD\u8D44\u4EA7-asset",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([(0,n.y)("IP","t_IP_\u7AEF\u53E3"),(0,n.y)("\u7AEF\u53E3","t_IP_\u7AEF\u53E3"),"\u534F\u8BAE","Mac",(0,n.y)("Host",["t_\u57DF\u540D_\u53EF\u80FD\u76F8\u5173_\u53EF\u80FDC\u6BB5","t_IP_\u7AEF\u53E3"]),(0,n.y)("\u5E94\u7528\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u652F\u6491\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u670D\u52A1\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u7CFB\u7EDF\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF"),(0,n.y)("\u786C\u4EF6\u5C42","t_\u4E2D\u95F4\u4EF6_\u6307\u7EB9_\u8BBE\u5907_\u7CFB\u7EDF")])))}),y("Nuclei\u76F8\u5173\u626B\u63CF(\u6216\u8BB8\u7EC4\u5408\u6307\u7EB9fingers AllInOne)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),y("\u6307\u7EB9fingers AllInOne\uFF08\u542BEhole\u7B49\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]}])),[{name:"\u573A\u666F/\u529F\u80FD\u70B9",tools:[y("\u6D4B\u8BD5\u7528\u4F8B\u4F53\u7CFB(\u4EA4\u53C9:\u5F31\u53E3\u4EE4)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u300A\u4E1A\u52A1\u5B89\u5168\u903B\u8F91\u6F0F\u6D1E\u300B\u4E00\u4E66\u7684Xmind\u601D\u7EF4\u5BFC\u56FE\u3002\u5F88\u6E05\u6670\u4E86\u3002

\u4E0D\u8FC7\uFF0C\u4E5F\u53EF\u4EE5\u5217\u4E00\u4E2A  Excel  \uFF1B\u6B63\u597D\u517C\u5BB9\u7684\u3002

\u7136\u540E\uFF0C\u4E0A\u4F20\u4E00\u4E9B\uFF0C    \u5DF2\u7ECF\u6D4B\u8BD5\u8FC7\u7684\u8BB0\u5F55  \u70B9\u3002

                `}),y("\u4E0D\u540C\u654F\u611F\u5EA6/\u4E5D\u54C1\u4E2D\u6B63\u5236",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
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

                `})]},{name:"\u91CD\u70B9\u7A81\u7834\u53E3",tools:[y("URL\u6316\u6398\uFF08URLFinder/PackerFuzzer/\u9A9A\u5957\u8DEF\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),y("\u5F31\u53E3\u4EE4\u7206\u7834\uFF08ffuf+SecDictionary\uFF09(\u7A81\u7834)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u5F88\u597D\u7528\u7684 \u4E2D\u56FD\u5B9D\u5B9D\u5B57\u5178\u3002
                `}),y("XScan\u626B\u63CF\uFF08\u5927\u91CFXSS\u53EF\u4EE5\u5237\u65B0\u5728\u5730\u56FE\u4E0A\uFF09",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
\u542C\u8BF4\uFF0C\u548C\u817E\u8BAFSRC\u699C\u4E00\uFF0C\u6709\u5173\uFF1F
                `})]},{name:"\u590D\u76D8",tools:[y("\u3010NBLM\u3011\u57FA\u7840\u901A\u7528\u56FA\u5B9A(5\u7EF4\u5EA6)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))}),y("\u5173\u952E\u5B57\u8BB0\u5F55\u4E0E\u6355\u6349(\u53EF\u4EE5\u4ECE\u3010RuoYi\u3011\u6279\u91CF\u63D0)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([])))})]},{name:"\u540C\u884C\u8D44\u6599\u53C2\u8003",tools:[y("\u5386\u53F2\u6F0F\u6D1E\u3001\u540C\u4E8B\u6F0F\u6D1E(\u542B\u6240\u6709\u6DF1\u5733\u6D4B\u8BC4WP)",{dataCheck_\u6570\u636E\u68C0\u67E5:b({"1\u6708\u4EFD":e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u63D0\u4EA4\u8005",(0,n.y)("\u7B49\u7EA7\uFF1A \u7EFF\u8272\uFF1A\u5DF2\u901A\u8FC7 \u7EA2\u8272:\u91CD\u590D\u63D0\u4EA4/\u5FFD\u7565","t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E"),"\u7B49\u7EA7","\u6F0F\u6D1E\u63D0\u4EA4\u65F6\u95F4","\u5DF2\u5F97\u5206","\u5408\u8BA1","\u5907\u6CE8"]),\u9884\u5B58\u6F0F\u6D1E:e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u63D0\u4EA4\u8005",(0,n.y)("\u4EE5\u4E0B\u6F0F\u6D1E\u6682\u4E0D\u63D0\u4EA4\uFF0C\u505A\u9884\u5B58","t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E"),"\u6F0F\u6D1E\u65F6\u95F4","\u5907\u6CE8"])}),_AI_\u63D0\u95EEPrompt:Wu(`
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
                `)}),y("\u3010NBLM\u3011\u57FA\u4E8E\u5DF2\u6709WP\uFF0C\u8FDB\u4E00\u6B65\u5206\u6790(AI\u6316\u6398)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([`\u95EE\u98981\uFF1A
\u6362\u884C1`,`\u95EE\u98982\uFF1A
\u6362\u884C2`,`\u95EE\u98983\uFF1A
\u6362\u884C3`,`\u95EE\u98984\uFF1A
\u6362\u884C4`,`\u95EE\u98985\uFF1A
\u6362\u884C5`,`\u95EE\u98986\uFF1A
\u6362\u884C6`,`\u95EE\u98987\uFF1A
\u6362\u884C7`,`\u95EE\u98989\uFF1A
\u6362\u884C8`,`\u95EE\u98989\uFF1A
\u6362\u884C9`,`\u95EE\u989810\uFF1A
\u6362\u884C10`])))})]},{name:"\u89E3\u7532\u5F52\u7530/\u6253\u5206",tools:[y("\u6253\u5206\u8868(\u505A\u51FA\u67651\u5206;\u505A\u4E0D\u51FA\u6765\u5C3D\u529B\u4E860.2\u5206)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema(["\u91CD\u70B9\u9879\u76EE\u6295\u5165\u76EE\u6807","\u63CF\u8FF0","\u7CFB\u6570","\u6253\u5206"])))})]},{name:"\u5916\u90E8\u8865\u5145\u6750\u6599(\u7EA0\u6B63)",tools:[y("\u601D\u7EF4\u5BFC\u56FE(\u76F8\u5BF9\u56FA\u5B9A)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema((0,_u.Z)(["\u5C42\u7EA7\u4E00","\u5C42\u7EA7\u4E8C","\u5C42\u7EA7\u4E09","\u5C42\u7EA7\u56DB","\u5C42\u7EA7\u4E94","\u5C42\u7EA7\u516D","\u5C42\u7EA7\u4E03","\u5C42\u7EA7\u516B","\u5C42\u7EA7\u4E5D","\u5C42\u7EA7\u5341","\u5C42\u7EA7\u5341\u4E00"].map(function(i){return(0,n.y)(i,"t_NBLM_\u4F3C\u4E4E\u5E94\u8BE5\u662F\u4E8C\u9636\u6570\u636E")}))))),_AI_\u63D0\u95EEPrompt:Wu(`
\u4EE5\u4E0B\u662F\u6211\u7684\uFF08\u4E2D\u56FD\u56FD\u5185\uFF09\u300A\u653B\u51FB\u961F\u7EA2\u961F\uFF08\u5916\u56F4\u6253\u70B9\u4EE5\u6C42\u7A81\u7834\uFF09-\u601D\u7EF4\u5BFC\u56FE\u300B\u3002

\u8BF7\u4F60\u4E3A\u6211\uFF1A
1\u3001\u6DF1\u5165\u5206\u6790\u601D\u8DEF
2\u3001\u5E94\u7528\u4E8E\u5177\u4F53\u7684\u7F51\u7EDC\u653B\u9632\u6F14\u4E60

                `)}),y("\u4E2D\u7F8E\u5DEE\u5F02(\u76F8\u5BF9\u56FA\u5B9A)",{dataCheck_\u6570\u636E\u68C0\u67E5:b(z(e.kp._quick_zod_\u4ECEstring\u5B57\u7B26\u4E32\u6570\u7EC4_\u751F\u6210Excel\u7684Schema([]))),desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9:`
1\u3001\u76EE\u524D\uFF0C\u3010DeepSeek+\u817E\u8BAF\u5143\u5B9D\u3011\uFF0C\u505A\u7684\u8FD8\u7B97  \u6BD4\u8F83\u597D\u7684\u4E86\u3002
                `})]}])}])},R0=t(946508),a0,W0=new f0("\u534A\u81EA\u52A8AI-\u6E17\u900F\u6D4B\u8BD5"),V0=(0,p.ZP)(g.Z)(a0||(a0=(0,x.Z)([`
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

`])),function(i){return i.tab_number*(3+2)}),r0=new R0.f("ProjectTimeline_SaveLoad"),$0=function(f){var A,d,a=f.base_cfgJson,c=(0,u.useState)(!1),B=(0,E.Z)(c,2),o=B[0],m=B[1],I=(0,u.useState)(null),C=(0,E.Z)(I,2),S=C[0],nu=C[1],T=(0,u.useState)(!1),Eu=(0,E.Z)(T,2),$=Eu[0],iu=Eu[1],M=(0,u.useState)(null),K=(0,E.Z)(M,2),U=K[0],w=K[1],X=W0.useAsyncForm_\u517C\u987E\u4E24\u8005({}),G=X.form,Fu=X.loading,Cu=X.error,xu=X.updateForm_\u5916\u5C42\u6D45\u514B\u9686,gu=(0,u.useState)(a),Zu=(0,E.Z)(gu,2),Tu=Zu[0],G0=Zu[1],K0=(0,u.useState)(""),i0=(0,E.Z)(K0,2),J0=i0[0],X0=i0[1],Y0=(0,u.useState)(r0.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A({tab_select_key_projectName:(A=(d=Tu.projects[0])===null||d===void 0?void 0:d.name)!==null&&A!==void 0?A:""})),o0=(0,E.Z)(Y0,2),Lu=o0[0],Q0=o0[1],Hu=(0,u.useRef)(null);function ue(){var k=Object.entries(G).map(function(D){var Z,l=(0,E.Z)(D,2),s=l[0],_=l[1];return(Z=_==null?void 0:_.excel_arr)!==null&&Z!==void 0?Z:[]}).flat(9);return k}(0,u.useEffect)(function(){var k=wu._get_\u539Fcfg_\u5E73\u644Atool_arr(a),D=ue();function Z(l){var s={desc:"\u56FA\u5B9A\u4E00\u4E2A\u5143\u7D20\uFF0C\u5176\u5B9E\u662F\u5197\u4F59\u7684\u4E2D\u95F4\u4E00\u5C42\u3002",excel_arr:[]};l.results||(l.results=[s]);var _=!0;_&&(l.results=[s])}k.forEach(function(l){Z(l);var s=l.results[0];s.excel_arr=[],D.forEach(function(_){_.project_name===l.project_name&&_.tool_name===l.name&&s.excel_arr.push(_)})}),G0((0,F.Z)({},Tu))},[G]);var ee=function(D){nu(D),m(!0)};function ne(k){return Vu.apply(this,arguments)}function Vu(){return Vu=(0,r.Z)((0,h.Z)().mark(function k(D){var Z;return(0,h.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return Z=Object.entries(G).map(function(_){var P,eu=(0,E.Z)(_,2),O=eu[0],v=eu[1];return(P=v==null?void 0:v.excel_arr)!==null&&P!==void 0?P:[]}),Z.forEach(function(_){_.includes(D)&&bu.xXNew_SArray_Helper.removeItem_onOrigin_and_rtnOrigin(_,D)}),s.next=4,xu((0,F.Z)({},G));case 4:case"end":return s.stop()}},k)})),Vu.apply(this,arguments)}function Fe(k,D,Z){return $u.apply(this,arguments)}function $u(){return $u=(0,r.Z)((0,h.Z)().mark(function k(D,Z,l){var s,_,P,eu,O;return(0,h.Z)().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return P=l.project,eu=l.tool,O=eu.name,Y.next=4,xu((0,zu.Z)({},O,(0,F.Z)((0,F.Z)({},G[O]),{},{excel_arr:[].concat((0,_u.Z)((s=(_=G[O])===null||_===void 0?void 0:_.excel_arr)!==null&&s!==void 0?s:[]),[(0,F.Z)((0,F.Z)({file_name:D.name,file_desc:"\u6587\u4EF6\u5185\u5BB9"},{project_name:P.name,file_time_count:Xu.k.get_format(void 0,Xu.d["YYYY-MM-DD HH:mm:ss"]),tool_name:eu.name}),{},{row_arr:Object.entries(Z).map(function(Q,Bu,mu){var Du=(0,E.Z)(Q,2),pu=Du[0],ou=Du[1],yu=mu.length===1;return ou.map(function(ku){return yu?ku:(0,F.Z)({\u5B50\u8868:pu},ku)})}).flat(9)})])})));case 4:case"end":return Y.stop()}},k)})),$u.apply(this,arguments)}var te=u.createElement("pre",null,`
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
      `),ae=u.createElement("pre",{style:{whiteSpace:"pre-wrap"}},h0,u.createElement(H.Z,null),g0),Uu=window.innerWidth*.9,re=u.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-end",gap:"0.2em 0.1em"}},u.createElement("div",{style:{border:"lightgray dotted 1px"}},function(){var k=function(){var l=u.createElement(J.Z,{type:"primary",onClick:function(){var P=JSON.stringify(Tu,null,2);vu.Z.confirm((0,F.Z)((0,F.Z)({title:"\u5BFC\u51FA\u6570\u636E",content:u.createElement("div",null,"1\u5230\u65E0\u7A77\u5927")},{okText:"\u786E\u8BA4",onOk:function(){bu.Download_Helper._download_json(P)}}),{},{cancelText:"\u53D6\u6D88"}))}},"\u5BFC\u51FA\u6570\u636E\uFF08\u5168\u90E8\u62A5\u544A\uFF0CJSON\uFF09\uFF08\u5F85  \u538B\u7F29\u4F53\u79EF\uFF09"),s=u.createElement(J.Z,{type:"primary",onClick:function(){wu._\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF(void 0,a)}},"\u5BFC\u51FA\u6570\u636E\uFF08\u6240\u6709\u7B5B\u9009\u9879\uFF0C\u5206\u5F00\uFF0CZip\uFF09");return u.createElement(u.Fragment,null,l,s)}(),D=wu._\u8BA1\u7B97\u4E00\u4E2Amap_\u5206\u522B\u8BA1\u7B97\u51FA\u6765(a),Z=D.\u7EDF\u8BA1_map_\u53BB\u9664\u4E0D\u4F5C\u7B5B\u9009\u7684\u90A3\u4E2A____entries;return u.createElement(u.Fragment,null,k,Z.map(function(l){var s=(0,E.Z)(l,2),_=s[0],P=s[1],eu=_;return u.createElement(J.Z,{type:"dashed",onClick:function(){wu._\u4E0B\u8F7Dmap_\u4E0D\u4F20key\u5219\u4E3A\u5168\u91CF(eu,a)}},"\u5BFC\u51FA\u6570\u636E\uFF08".concat(eu,"\uFF09"))}))}()),u.createElement(J.Z,{type:"primary",onClick:(0,r.Z)((0,h.Z)().mark(function k(){var D,Z,l;return(0,h.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return D=wu._get_\u539Fcfg_\u5E73\u644Atool_arr(a).filter(function(P){return P.project_name===Lu.tab_select_key_projectName}),Z=!0,l=D.map(function(P){var eu="".concat(P.project_index,"\u3001").concat(P.project_name),O="".concat(P.stage_index,"\u3001").concat(P.stage_name),v="".concat(P.tool_index,"\u3001").concat(P.name),Y=[{type:"directory",filepath_arr:[eu,O+"____"+v,"\u539F\u59CB\u4EA7\u7269"]},{type:"directory",filepath_arr:[eu,O+"____"+v,"\u91CD\u65B0\u624B\u52A8\u6574\u5408\u540E\u4EA7\u7269"]}];if(Z){var Q;return[{type:"file",filepath_arr:[eu,O+"____"+v,"ReadMe.md"],content:(Q=P.desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9)!==null&&Q!==void 0?Q:"\u6682\u65E0\uFF0C\u987E\u540D\u601D\u4E49"}].concat(Y)}else return{type:"directory",filepath_arr:[eu,O+"____"+v]}}).flat(9),_.next=5,bu.Zip_Helper.zip_\u591A\u76EE\u5F55\u591A\u6587\u4EF6_Download((0,_u.Z)(l));case 5:case"end":return _.stop()}},k)}))},"\u5BFC\u51FA\u6574\u4E2A\u9879\u76EE\u7A7A\u767D\u7ED3\u6784(\u521D\u59CB\u5316)-Zip\u5305"),u.createElement(J.Z,{type:"primary",onClick:(0,r.Z)((0,h.Z)().mark(function k(){var D,Z;return(0,h.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:D=wu._get_\u539Fcfg_\u5E73\u644Atool_arr(a).filter(function(_){return _.project_name===Lu.tab_select_key_projectName}),Z="\u8FD9\u91CC\u4E00\u4E2A\u5F85\u590D\u5236\u7684\u5143\u7D20",vu.Z.confirm({title:"111",content:u.createElement("div",null,u.createElement("div",{id:Z},D.map(function(_,P){return(0,L.Z$)(_,"".concat(P+1,".").concat(P+1))})),u.createElement(L.gM,{_toCopy_element_fn:function(){return document.getElementById(Z)}})),onOk:function(P){}});case 3:case"end":return s.stop()}},k)}))},"\u5BFC\u51FA\u6574\u4E2A\u9879\u76EE\u7A7A\u767D\u7ED3\u6784(\u521D\u59CB\u5316)-Notion\u6587\u6863(\u542BTable)"));return u.createElement(u.Fragment,null,u.createElement("div",null,u.createElement(b0,{_\u7EDF\u8BA1:wu._\u7EDF\u8BA1map_\u5404\u9879\u5C55\u677F\u5C55\u793A\u6307\u6807(a)})),u.createElement("div",null,u.createElement(V0,{activeKey:Lu.tab_select_key_projectName,onChange:function(D){r0.simple_set_and_save("tab_select_key_projectName",{target:{value:D}},Lu,Q0)},tabBarExtraContent:re,tab_number:Tu.projects.length},Tu.projects.map(function(k,D){var Z;return u.createElement(g.Z.TabPane,{tab:k.name,key:k.name,style:{position:"relative"}},u.createElement(w0,null),u.createElement(c0,null,(Z=k.stages)===null||Z===void 0?void 0:Z.map(function(l,s){return u.createElement(l0,{key:s},u.createElement(s0,null,l.name),function(){var _,P,eu=Math.max.apply(Math,(0,_u.Z)(((_=l.tools)!==null&&_!==void 0?_:[]).map(function(O){var v;return((v=O.results)!==null&&v!==void 0?v:[]).map(function(Y){var Q;return((Q=Y.excel_arr)!==null&&Q!==void 0?Q:[]).length})}).flat(9)));return u.createElement(B0,{className:"TimelineWrapper",max_result_count:eu},u.createElement(C0,{className:"TimelineLine",tools:l.tools},(P=l.tools)===null||P===void 0?void 0:P.map(function(O,v){var Y,Q="fileInput-".concat(O.name),Bu=v%2==0,mu=v===0;return u.createElement(D0,{className:"ToolNode",key:v,index:v,tools:l.tools},u.createElement("div",{className:"tool-icon"},u.createElement(R.Z,null)),u.createElement("div",{className:"tool-dot"}),u.createElement("div",{className:"tool-name",style:(0,F.Z)({},J0===Q?(0,F.Z)((0,F.Z)({},{}),{boxShadow:" inset 0 0.5em 0 0 #FF7800,    /* \u4E0A\u8FB9 */ inset -1em 0 0 0 #FF7800/* \u53F3\u8FB9 */"}):{}),onClick:function(){iu(!0),X0(Q),w({project:k,tool:O})}},O.name),(Y=O.results)===null||Y===void 0?void 0:Y.map(function(Du,pu){var ou;return u.createElement(A0,{key:pu,isTop:Bu,toolIndex:v,tools:l.tools},(ou=Du.excel_arr)===null||ou===void 0?void 0:ou.map(function(yu,ku){return u.createElement("div",{style:{position:"relative"},onClick:function(){ee(yu)}},u.createElement(d0,{key:ku}),u.createElement(m0,{style:(0,F.Z)((0,F.Z)({position:"absolute",fontSize:"8px"},mu?{right:"71%",width:"13em",transformOrigin:"right center"}:{left:"83%",width:"15em",transformOrigin:"left center"}),{},{top:"25%"})},yu.file_name))}))}))})))}())})))})),function(){var k=u.createElement("div",null,"Excel Data \u300A",S==null?void 0:S.file_name,"\u300B ",u.createElement(J.Z,{onClick:function(){vu.Z.confirm((0,F.Z)({title:"\u64CD\u4F5C\u786E\u8BA4",content:"\u70B9\u51FB\u4E86\u5220\u9664"},{okText:"\u786E\u8BA4\u5220\u9664",onOk:function(){return(0,r.Z)((0,h.Z)().mark(function l(){return(0,h.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return alert("\u70B9\u51FB\u4E86\u5220\u9664"),_.next=3,ne(S);case 3:case"end":return _.stop()}},l)}))()}}))}},"\u5220\u9664"));return u.createElement(vu.Z,{title:k,visible:o,onCancel:function(){return m(!1)},footer:null,width:Uu},u.createElement("div",{style:{display:"flex",flexDirection:"column"}},function(){function D(){var l,s=Yu.U._\u660E\u7EC6\u56FE\u666E\u901A\u8868.simple_\u751F\u6210_cp("\u666E\u901A\u8868",{data:(l=S==null?void 0:S.row_arr)!==null&&l!==void 0?l:[]},{option\u589E\u52A0\u9009\u9879:{width:Uu*.9,height:690,style:Yu.U._getStyle_quickWidth_\u884C\u5217\u5BBD\u9AD8(85,{60:["\u5E8F\u53F7"],80:["\u5B50\u8868"],150:["\u5C42\u7EA7\u4E00","\u5C42\u7EA7\u4E8C","\u5C42\u7EA7\u4E09","\u5C42\u7EA7\u56DB","\u5C42\u7EA7\u4E94","\u5C42\u7EA7\u516D","\u5C42\u7EA7\u4E03","\u5C42\u7EA7\u516B","\u5C42\u7EA7\u4E5D","\u5C42\u7EA7\u5341","\u5C42\u7EA7\u5341\u4E00"],183:["\u6839\u57DF\u540D"],201:["\u8C03\u7814\u5BF9\u8C61","\u95EE\u9898","\u8C03\u7814\u7ED3\u679C","\u76EE\u7684","\u89E3\u51B3\u65B9\u6848"]})}});return s}function Z(){var l;return S==null||(l=S.row_arr)===null||l===void 0?void 0:l.map(function(s){return u.createElement(u.Fragment,null,u.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.createElement("p",null,"\u65F6\u95F4: ",s.timestamp),u.createElement("p",null,"\u76EE\u6807: ",s.primary_target),u.createElement("p",null,"IP: ",s.secondary_target),u.createElement("p",null,"\u7C7B\u578B: ",s.info_type),u.createElement("p",null,"\u5185\u5BB9: ",s.info_content),u.createElement("p",null,"\u65B9\u6CD5: ",s.detection_method),u.createElement("p",null,"\u53EF\u4FE1\u5EA6: ",s.confidence),u.createElement("p",null,"\u5143\u6570\u636E: ",s.metadata)),u.createElement("div",null,JSON.stringify(s)),u.createElement(H.Z,null))})}return D()}()))}(),function(){if(U){var k,D=U.tool,Z=U.project,l="fileInput-".concat(D.name),s=(0,n.Ye)(D),_=s.\u7B80\u5316\u7248____record_arr___\u53EF\u80FD\u591A\u4E2Asheet,P=s.\u7B80\u5316\u7248____demo_data_map_Map\u5957\u4E00\u7EF4\u6570\u7EC4,eu=u.createElement("div",null,"Tool",u.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},u.createElement("label",{htmlFor:l},u.createElement("input",{type:"file",accept:".xlsx,.xls,.csv",id:l,ref:Hu,onClick:function(){},onChange:function(){var O=(0,r.Z)((0,h.Z)().mark(function v(Y){var Q,Bu,mu,Du;return(0,h.Z)().wrap(function(ou){for(;;)switch(ou.prev=ou.next){case 0:return ou.next=2,bu.xxNew_CSV_Excel_Helper.handleFileUpload_\u5B8C\u5584\u7248({event:Y});case 2:if(Q=ou.sent,Bu=Q.result,mu=Q.file,Du=Object.entries(Bu).every(function(yu,ku){var Au=(0,E.Z)(yu,2),Su=Au[0],Ee=Au[1],_0=D.dataCheck_\u6570\u636E\u68C0\u67E5(Ee,ku,!1).checkFn();return _0||alert("\u3010".concat(Su,"\u3011\u683C\u5F0F\u9519\u8BEF\uFF01")),_0}),!Du){ou.next=12;break}return ou.next=9,Fe(mu,Bu,{project:Z,tool:D});case 9:alert("\u4E0A\u4F20\u6210\u529F\uFF01"),ou.next=13;break;case 12:alert("\u683C\u5F0F\u9519\u8BEF\uFF01");case 13:(function(){Hu.current&&(Hu.current.value="")})();case 14:case"end":return ou.stop()}},v)}));return function(v){return O.apply(this,arguments)}}(),style:{display:"none"}}),u.createElement(J.Z,{style:{whiteSpace:"pre-wrap"},onClick:function(){var v;(v=Hu.current)===null||v===void 0||v.click()}},"\u4E0A\u4F20\u3010",u.createElement("span",{style:{color:"hotpink"}},D.name),"\u3011")),u.createElement(J.Z,{onClick:function(){var v="\u3010".concat(D.name,"\u3011\u6A21\u677F");function Y(){if(_.length===1){let ku=function(Au){var Su=Au;return Su.includes(`
`)&&(Su='"'.concat(Su,'"')),Su};var Bu=_[0],mu=Bu[0],Du=Object.keys(mu),pu=Du.map(function(Au){return ku(Au)}).join(","),ou=Du.map(function(Au,Su){return Su+1+""}).join(",");bu.Download_Helper._download_csv(pu+`
`+ou,{filename_\u65E0\u540E\u7F00\u540D:v})}else{var yu=_.map(function(ku){var Au;return(Au=ku[0])===null||Au===void 0?void 0:Au.\u5B50\u8868});alert("\u5B58\u5728\u591A\u4E2ASheet\uFF0C".concat(yu.join("\u3001"),"\u3002"))}}function Q(){bu.xxNew_CSV_Excel_Helper.downloadExcel_\u76F4\u63A5\u5728\u6D4F\u89C8\u5668_JSON\u8F6CExcel(P,v+".xlsx")}Q()}},"\u4E0B\u8F7D\u3010\u6A21\u677F\u3011"),u.createElement(J.Z,{onClick:function(){var v,Y=D==null||(v=D.results)===null||v===void 0?void 0:v[0];Y&&vu.Z.error({title:"AI\u63D0\u95EE",content:u.createElement(u.Fragment,null,function(){return u.createElement(J.Z,{onClick:(0,r.Z)((0,h.Z)().mark(function Q(){var Bu,mu;return(0,h.Z)().wrap(function(pu){for(;;)switch(pu.prev=pu.next){case 0:return mu=D._AI_\u63D0\u95EEPrompt((Bu=Y==null?void 0:Y.excel_arr)!==null&&Bu!==void 0?Bu:[]),pu.next=3,(0,Qu.zz)({text_content:`
`.concat((0,bu._get_mdText_chunk)(v0.P._\u601D\u7EF4\u94FEchain_\u7528\u4E8EClaude\u7684\u9B54\u6539),`

`).concat(mu,`
                              `),\u9009\u62E9\u7279\u5B9A\u6A21\u578B_\u8FDB\u884C\u67E5\u8BE2:Qu.Ly._PoE._PoE__Claude37_Sonnet_\u63A8\u7406\u7248});case 3:case"end":return pu.stop()}},Q)}))},"\u70B9\u51FB\u524D\u5F80AI")}())})}},"AI\u63D0\u95EE"),u.createElement("div",{style:{margin:"0 5em"}}),u.createElement(J.Z,{onClick:function(){alert("\u5BFC\u51FA")}},"\u5BFC\u51FA\u3010\u5B50Excel\u3011")));return $&&u.createElement(vu.Z,{title:eu,visible:$,onCancel:function(){return iu(!1)},footer:null,width:Uu},u.createElement("div",null,u.createElement("pre",null,(k=D.desc_\u5907\u5FD8\u548C\u4E34\u65F6\u6613\u9519\u70B9)!==null&&k!==void 0?k:"\u6682\u65E0\uFF0C\u987E\u540D\u601D\u4E49")),u.createElement("div",{style:{border:"1px solid #FF7800  ",padding:"3px  0.3em  3em"}},u.createElement(L.gM,null),(0,L.Z$)(D)))}else return}()),function(){var k={whiteSpace:"pre-wrap"};return u.createElement("div",null,u.createElement("div",{style:k},te),u.createElement("div",{style:k},ae))}())},E0=function(){return u.createElement(u.Fragment,null,u.createElement(g.Z,{type:"card",size:"large"},u.createElement(g.Z.TabPane,{tab:"\u9519\u9898\u672C",key:"1"},"\u8DF3\u8F6C\u3010\u7591\u96BE\u6742\u75C7\u3011\u5373\u53EF\u3002 \u987A\u4FBF\u4E5F\u4E3ACTF\u8BB0\u5F55\u601D\u8DEF\u3002\uFF08\u4E0D\u4F1A\u7684\u9898\u591A\u8D8A\u6765\u8D8A\u5C11\u3001\u4E0D\u4F1A\u505A\u7684\u9776\u573A\u8D8A\u6765\u8D8A\u5C11\uFF0C\u662F\u597D\u4E8B\uFF1B\u4F46\u4E0D\u4F1A\u505A\u7684\u9776\u573A\u8D8A\u6765\u8D8A\u591A\uFF0C\u4E5F\u662F\u4E00\u4EF6\u597D\u4E8B(\u610F\u5473\u7740\uFF0C\u6709\u66F4\u591A\u7684\u4F18\u8D28\u8D44\u6E90)\uFF09"),u.createElement(g.Z.TabPane,{tab:"\u5404\u73AF\u8282\u601D\u7EF4\u5BFC\u56FE",key:"2"},"\u5404\u79CD\u601D\u8DEF\u5BFC\u56FE\uFF0C\u90FD\u53EF\u4EE5\u62FF\u8FC7\u6765\uFF08\u8F6C\u4E00\u4E0B\u5F62\u5F0F\uFF0C\u5373\u53EF\uFF1B \u5927\u90E8\u5206\u975E\u3010\u8054\u7CFBLink\u3011\uFF09\u8BED\u6CD5 \u90FD\u53EF\u4EE5\u652F\u6301\uFF09"),u.createElement(g.Z.TabPane,{tab:"\u7279\u6B8A\u60C5\u51B5  \u4E2D/\u7F8E  \u7F51\u5B89\u98CE\u4FD7",key:"3"},"\u62A4\u7F51\u3001\u7B49\u3002 \u4E3AAI\u63D0\u4F9B\u4E00\u4E2A\u53C2\u8003\u3002 \uFF08\u957F\u671F\u7EF4\u62A4\uFF09 -- \u9632\u5B88\u65B9\u7684\u60C5\u51B5\uFF1A \u6DFB\u52A0\u6211\u5F85\u8FC7\u7684\u9632\u5B88\u65B9\u7684\u60C5\u51B5\uFF1A \u5728\u534E\u6DA6 \u5176\u5B9E\u6709\u4E00\u4E2A \u4EBA\u5458\u8868\u3001 \u6392\u73ED\u8868 \uFF08\u6240\u6709\u7684\u4EBA\u5458\u4F53\u7CFB\uFF09 --"),u.createElement(g.Z.TabPane,{tab:"\u73B0\u5B9E\u6F0F\u6D1E\u5206\u6790-5\u4E2A\u95EE\u9898",key:"4"},"1\u3001\u9700\u8981\u4FEE\u590D\u95EE\u9898 2\u3001\u9700\u8981\u51C6\u5907 \u51E0\u7BC7 \u4F5C\u4E3A\u5404\u65B9\u9762\u6A21\u677F"),u.createElement(g.Z.TabPane,{tab:"\u6700\u540E\u8BA1\u5206\u4E0E\u603B\u7ED3",key:"5"},"\u5728\u4E0B\u9762\u52A0\u4E86\u4E00\u4E2Atool\uFF0C\u53EF\u4EE5\u653E\u7F6E\u4E00\u4E2A\u8868\u683C\u3002")),u.createElement(g.Z,{type:"card",size:"large"},u.createElement(g.Z.TabPane,{tab:"\u5FC3\u6001\u5927\u5EFA\u8BBE",key:"1"},u.createElement(x0,null)),u.createElement(g.Z.TabPane,{tab:"Url\u62BD\u53D6",key:"2"}),u.createElement(g.Z.TabPane,{tab:"\u7EC4\u7EC7GPT-AI\u95EE\u7B54",key:"3"})),u.createElement($0,{base_cfgJson:H0}))},U0=E0},363634:function(Pu,fu,t){Pu.exports=t.p+"static/\u592A\u6781\u9C7C-\u5343\u5E93\u7F51-\u8C03\u6574\u901F\u5EA6.267d5c75.webp"},762816:function(Pu,fu,t){Pu.exports=t.p+"static/\u82F1\u96C4\u65E0\u654C-\u88C5\u5907-\u56FE2.f5be5057.png"},216060:function(){},680950:function(){},446601:function(){},989214:function(){},308623:function(){},507748:function(){},277317:function(){},608534:function(){},449222:function(){},148102:function(){},85568:function(){},282535:function(){},943710:function(){},356619:function(){},973731:function(){},77108:function(){},752361:function(){},394616:function(){},865186:function(){},900015:function(){},119893:function(){}}]);
