(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{EdlB:function(f,y,c){f.exports={area_code:"area_code___2LS8F",phone_number:"phone_number___1PO0T"}},KWSo:function(f,y,c){f.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},O4pj:function(f,y,c){"use strict";c.r(y);var me=c("lUTK"),S=c("BvKs"),b=c("fWQN"),E=c("mtLc"),O=c("yKVA"),j=c("879j"),g=c("q1tI"),e=c.n(g),n=c("9kvl"),F=c("FRQA"),ge=c("y8nQ"),v=c("Vl3Y"),ve=c("5NDa"),M=c("5rEg"),pe=c("miYZ"),P=c("tsqr"),fe=c("DZo9"),D=c("8z0m"),he=c("+L6B"),N=c("2/Rp"),ye=c("OaEy"),C=c("2fM7"),z=c("z7Xi"),be=c("T2oS"),K=c("W9HT"),x=c("/MKj"),G=c("zPRt"),I=c.n(G),B=C.a.Option,V={label:"",value:"",key:""},W=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(){var i;Object(b.a)(this,r);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return i=d.call.apply(d,[this].concat(s)),i.componentDidMount=function(){var o=i.props.dispatch;o&&o({type:"accountAndsettings/fetchProvince"})},i.getCityOption=function(){var o=i.props.city;return o?i.getOption(o):[]},i.getOption=function(o){return!o||o.length<1?e.a.createElement(B,{key:0,value:0},"\u6CA1\u6709\u627E\u5230\u9009\u9879"):o.map(function(l){return e.a.createElement(B,{key:l.id,value:l.id},l.name)})},i.selectProvinceItem=function(o){var l=i.props,h=l.dispatch,m=l.onChange;h&&h({type:"accountAndsettings/fetchCity",payload:o.key}),m&&m({province:o,city:V})},i.selectCityItem=function(o){var l=i.props,h=l.value,m=l.onChange;h&&m&&m({province:h.province,city:o})},i}return Object(E.a)(r,[{key:"componentDidUpdate",value:function(t){var s=this.props,a=s.dispatch,o=s.value;!t.value&&!!o&&!!o.province&&a&&a({type:"accountAndsettings/fetchCity",payload:o.province.key})}},{key:"getProvinceOption",value:function(){var t=this.props.province;return t?this.getOption(t):[]}},{key:"conversionObject",value:function(){var t=this.props.value;if(!t)return{province:V,city:V};var s=t.province,a=t.city;return{province:s||V,city:a||V}}},{key:"render",value:function(){var t=this.conversionObject(),s=t.province,a=t.city,o=this.props.loading;return e.a.createElement(K.a,{spinning:o,wrapperClassName:I.a.row},e.a.createElement(C.a,{className:I.a.item,value:s,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),e.a.createElement(C.a,{className:I.a.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),r}(g.Component),L=Object(x.connect)(function(u){var d=u.accountAndsettings,r=u.loading,i=d.province,t=d.city;return{province:i,city:t,loading:r.models.accountAndsettings}})(W),R=c("EdlB"),U=c.n(R),T=function(d){var r=d.value,i=d.onChange,t=["",""];return r&&(t=r.split("-")),e.a.createElement(e.a.Fragment,null,e.a.createElement(M.a,{className:U.a.area_code,value:t[0],onChange:function(s){function a(o){return s.apply(this,arguments)}return a.toString=function(){return s.toString()},a}(function(s){i&&i("".concat(s.target.value,"-").concat(t[1]))})}),e.a.createElement(M.a,{className:U.a.phone_number,onChange:function(s){function a(o){return s.apply(this,arguments)}return a.toString=function(){return s.toString()},a}(function(s){i&&i("".concat(t[0],"-").concat(s.target.value))}),value:t[1]}))},$=T,Y=c("YHME"),w=c.n(Y),J=C.a.Option,H=function(d){var r=d.avatar;return e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:w.a.avatar_title},e.a.createElement(n.a,{id:"accountandsettings.basic.avatar",defaultMessage:"Avatar"})),e.a.createElement("div",{className:w.a.avatar},e.a.createElement("img",{src:r,alt:"avatar"})),e.a.createElement(D.a,{showUploadList:!1},e.a.createElement("div",{className:w.a.button_view},e.a.createElement(N.a,null,e.a.createElement(z.a,null),e.a.createElement(n.a,{id:"accountandsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},Q=function(d,r,i){var t=r.province,s=r.city;t.key||i("Please input your province!"),s.key||i("Please input your city!"),i()},X=function(d,r,i){var t=r.split("-");t[0]||i("Please input your area code!"),t[1]||i("Please input your phone number!"),i()},Z=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(){var i;Object(b.a)(this,r);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return i=d.call.apply(d,[this].concat(s)),i.view=void 0,i.getViewDom=function(o){i.view=o},i.handleFinish=function(){P.default.success(Object(n.d)({id:"accountandsettings.basic.update.success"}))},i}return Object(E.a)(r,[{key:"getAvatarURL",value:function(){var t=this.props.currentUser;if(t){if(t.avatar)return t.avatar;var s="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return s}return""}},{key:"render",value:function(){var t=this.props.currentUser;return e.a.createElement("div",{className:w.a.baseView,ref:this.getViewDom},e.a.createElement("div",{className:w.a.left},e.a.createElement(v.a,{layout:"vertical",onFinish:this.handleFinish,initialValues:t,hideRequiredMark:!0},e.a.createElement(v.a.Item,{name:"email",label:Object(n.d)({id:"accountandsettings.basic.email"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.email-message"},{})}]},e.a.createElement(M.a,null)),e.a.createElement(v.a.Item,{name:"name",label:Object(n.d)({id:"accountandsettings.basic.nickname"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.nickname-message"},{})}]},e.a.createElement(M.a,null)),e.a.createElement(v.a.Item,{name:"profile",label:Object(n.d)({id:"accountandsettings.basic.profile"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.profile-message"},{})}]},e.a.createElement(M.a.TextArea,{placeholder:Object(n.d)({id:"accountandsettings.basic.profile-placeholder"}),rows:4})),e.a.createElement(v.a.Item,{name:"country",label:Object(n.d)({id:"accountandsettings.basic.country"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.country-message"},{})}]},e.a.createElement(C.a,{style:{maxWidth:220}},e.a.createElement(J,{value:"China"},"\u4E2D\u56FD"))),e.a.createElement(v.a.Item,{name:"geographic",label:Object(n.d)({id:"accountandsettings.basic.geographic"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.geographic-message"},{})},{validator:Q}]},e.a.createElement(L,null)),e.a.createElement(v.a.Item,{name:"address",label:Object(n.d)({id:"accountandsettings.basic.address"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.address-message"},{})}]},e.a.createElement(M.a,null)),e.a.createElement(v.a.Item,{name:"phone",label:Object(n.d)({id:"accountandsettings.basic.phone"}),rules:[{required:!0,message:Object(n.d)({id:"accountandsettings.basic.phone-message"},{})},{validator:X}]},e.a.createElement($,null)),e.a.createElement(v.a.Item,null,e.a.createElement(N.a,{htmlType:"submit",type:"primary"},e.a.createElement(n.a,{id:"accountandsettings.basic.update",defaultMessage:"Update Information"}))))),e.a.createElement("div",{className:w.a.right},e.a.createElement(H,{avatar:this.getAvatarURL()})))}}]),r}(g.Component),k=Object(n.c)(function(u){var d=u.accountAndsettings;return{currentUser:d.currentUser}})(Z),Ee=c("Mwp2"),p=c("VXEj"),q=c("/wp/"),_=c("a1tJ"),ee=c("UBYk"),te=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(){var i;Object(b.a)(this,r);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return i=d.call.apply(d,[this].concat(s)),i.getData=function(){return[{title:Object(n.d)({id:"accountandsettings.binding.taobao"},{}),description:Object(n.d)({id:"accountandsettings.binding.taobao-description"},{}),actions:[e.a.createElement("a",{key:"Bind"},e.a.createElement(n.a,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.a.createElement(q.a,{className:"taobao"})},{title:Object(n.d)({id:"accountandsettings.binding.alipay"},{}),description:Object(n.d)({id:"accountandsettings.binding.alipay-description"},{}),actions:[e.a.createElement("a",{key:"Bind"},e.a.createElement(n.a,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.a.createElement(_.a,{className:"alipay"})},{title:Object(n.d)({id:"accountandsettings.binding.dingding"},{}),description:Object(n.d)({id:"accountandsettings.binding.dingding-description"},{}),actions:[e.a.createElement("a",{key:"Bind"},e.a.createElement(n.a,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.a.createElement(ee.a,{className:"dingding"})}]},i}return Object(E.a)(r,[{key:"render",value:function(){return e.a.createElement(g.Fragment,null,e.a.createElement(p.b,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(s){return e.a.createElement(p.b.Item,{actions:s.actions},e.a.createElement(p.b.Item.Meta,{avatar:s.avatar,title:s.title,description:s.description}))}}))}}]),r}(g.Component),ae=te,Oe=c("BoS7"),ne=c("Sdc0"),ie=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(){var i;Object(b.a)(this,r);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return i=d.call.apply(d,[this].concat(s)),i.getData=function(){var o=e.a.createElement(ne.a,{checkedChildren:Object(n.d)({id:"accountandsettings.settings.open"}),unCheckedChildren:Object(n.d)({id:"accountandsettings.settings.close"}),defaultChecked:!0});return[{title:Object(n.d)({id:"accountandsettings.notification.password"},{}),description:Object(n.d)({id:"accountandsettings.notification.password-description"},{}),actions:[o]},{title:Object(n.d)({id:"accountandsettings.notification.messages"},{}),description:Object(n.d)({id:"accountandsettings.notification.messages-description"},{}),actions:[o]},{title:Object(n.d)({id:"accountandsettings.notification.todo"},{}),description:Object(n.d)({id:"accountandsettings.notification.todo-description"},{}),actions:[o]}]},i}return Object(E.a)(r,[{key:"render",value:function(){var t=this.getData();return e.a.createElement(g.Fragment,null,e.a.createElement(p.b,{itemLayout:"horizontal",dataSource:t,renderItem:function(a){return e.a.createElement(p.b.Item,{actions:a.actions},e.a.createElement(p.b.Item.Meta,{title:a.title,description:a.description}))}}))}}]),r}(g.Component),re=ie,ce={strong:e.a.createElement("span",{className:"strong"},e.a.createElement(n.a,{id:"accountandsettings.security.strong",defaultMessage:"Strong"})),medium:e.a.createElement("span",{className:"medium"},e.a.createElement(n.a,{id:"accountandsettings.security.medium",defaultMessage:"Medium"})),weak:e.a.createElement("span",{className:"weak"},e.a.createElement(n.a,{id:"accountandsettings.security.weak",defaultMessage:"Weak"}),"Weak")},se=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(){var i;Object(b.a)(this,r);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return i=d.call.apply(d,[this].concat(s)),i.getData=function(){return[{title:Object(n.d)({id:"accountandsettings.security.password"},{}),description:e.a.createElement(e.a.Fragment,null,Object(n.d)({id:"accountandsettings.security.password-description"}),"\uFF1A",ce.strong),actions:[e.a.createElement("a",{key:"Modify"},e.a.createElement(n.a,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(n.d)({id:"accountandsettings.security.phone"},{}),description:"".concat(Object(n.d)({id:"accountandsettings.security.phone-description"},{}),"\uFF1A138****8293"),actions:[e.a.createElement("a",{key:"Modify"},e.a.createElement(n.a,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(n.d)({id:"accountandsettings.security.question"},{}),description:Object(n.d)({id:"accountandsettings.security.question-description"},{}),actions:[e.a.createElement("a",{key:"Set"},e.a.createElement(n.a,{id:"accountandsettings.security.set",defaultMessage:"Set"}))]},{title:Object(n.d)({id:"accountandsettings.security.email"},{}),description:"".concat(Object(n.d)({id:"accountandsettings.security.email-description"},{}),"\uFF1Aant***sign.com"),actions:[e.a.createElement("a",{key:"Modify"},e.a.createElement(n.a,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(n.d)({id:"accountandsettings.security.mfa"},{}),description:Object(n.d)({id:"accountandsettings.security.mfa-description"},{}),actions:[e.a.createElement("a",{key:"bind"},e.a.createElement(n.a,{id:"accountandsettings.security.bind",defaultMessage:"Bind"}))]}]},i}return Object(E.a)(r,[{key:"render",value:function(){var t=this.getData();return e.a.createElement(e.a.Fragment,null,e.a.createElement(p.b,{itemLayout:"horizontal",dataSource:t,renderItem:function(a){return e.a.createElement(p.b.Item,{actions:a.actions},e.a.createElement(p.b.Item.Meta,{title:a.title,description:a.description}))}}))}}]),r}(g.Component),oe=se,de=c("KWSo"),A=c.n(de),ue=function(u){Object(O.a)(r,u);var d=Object(j.a)(r);function r(i){var t;Object(b.a)(this,r),t=d.call(this,i),t.main=void 0,t.getMenu=function(){var a=t.state.menuMap;return Object.keys(a).map(function(o){return e.a.createElement(S.a.Item,{key:o},a[o])})},t.getRightTitle=function(){var a=t.state,o=a.selectKey,l=a.menuMap;return l[o]},t.selectKey=function(a){t.setState({selectKey:a})},t.resize=function(){!t.main||requestAnimationFrame(function(){if(!!t.main){var a="inline",o=t.main.offsetWidth;t.main.offsetWidth<641&&o>400&&(a="horizontal"),window.innerWidth<768&&o>400&&(a="horizontal"),t.setState({mode:a})}})},t.renderChildren=function(){var a=t.state.selectKey;switch(a){case"base":return e.a.createElement(k,null);case"security":return e.a.createElement(oe,null);case"binding":return e.a.createElement(ae,null);case"notification":return e.a.createElement(re,null);default:break}return null};var s={base:e.a.createElement(n.a,{id:"accountandsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:e.a.createElement(n.a,{id:"accountandsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:e.a.createElement(n.a,{id:"accountandsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:e.a.createElement(n.a,{id:"accountandsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return t.state={mode:"inline",menuMap:s,selectKey:"base"},t}return Object(E.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;t({type:"accountAndsettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var t=this,s=this.props.currentUser;if(!s.userid)return"";var a=this.state,o=a.mode,l=a.selectKey;return e.a.createElement(F.a,null,e.a.createElement("div",{className:A.a.main,ref:function(m){m&&(t.main=m)}},e.a.createElement("div",{className:A.a.leftMenu},e.a.createElement(S.a,{mode:o,selectedKeys:[l],onClick:function(m){var le=m.key;return t.selectKey(le)}},this.getMenu())),e.a.createElement("div",{className:A.a.right},e.a.createElement("div",{className:A.a.title},this.getRightTitle()),this.renderChildren())))}}]),r}(g.Component),je=y.default=Object(n.c)(function(u){var d=u.accountAndsettings;return{currentUser:d.currentUser}})(ue)},YHME:function(f,y,c){f.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF"}},zPRt:function(f,y,c){f.exports={row:"row___J_FI0",item:"item___2gpD9"}}}]);