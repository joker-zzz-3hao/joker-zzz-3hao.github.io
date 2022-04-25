(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"3dVZ":function(N,C,t){},"5Jxu":function(N,C,t){N.exports={container:"container___3fpzw"}},"8Skl":function(N,C,t){"use strict";var f=t("VTBJ"),d=t("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},v=l,D=t("6VBw"),P=function(e,U){return d.createElement(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:U,icon:v}))};P.displayName="DownOutlined";var O=C.a=d.forwardRef(P)},CFjU:function(N,C,t){"use strict";t.r(C);var f=t("IzEo"),d=t("bx4M"),l=t("fu2T"),v=t("gK9i"),D=t("14J3"),P=t("BMrR"),O=t("oBTY"),L=t("q1tI"),e=t.n(L),U=t("tMyG"),A=t("9kvl"),R=t("bz3d"),z=t("ysNt"),X=t("5Jxu"),te=t.n(X),G=t("VTBJ"),Y={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},ae=Y,Z=t("6VBw"),q=function(u,r){return L.createElement(Z.a,Object(G.a)(Object(G.a)({},u),{},{ref:r,icon:ae}))};q.displayName="CaretRightOutlined";var _=L.forwardRef(q),W=t("m3uQ"),ne=R.a.list,ie=R.a.create,me=R.a.update,ce=R.a.del,M=z.c.tutorial,H=M.descLinks,re=M.descTexts,de=M.genUtilUI,ue=M.genLinkUI,pe=[{keywords:"\u3010\u5B50\u57DF\u540D\u3001\u65C1\u7AD9\u3001C\u6BB5\uFF0C\u7EFC\u5408\u67E5\u8BE2\u3011",desc:[].concat(Object(O.a)(re([])),Object(O.a)(H([])))}],se=[{keywords:"\u3010\u793E\u5DE5\u5E93\u67E5\u8BE2\u3011",desc:H([{href:"http://site3.sjk.space/sgk1.php",name:"\u793E\u5DE5\u5E93\u514D\u8D39\u67E5\u8BE2",rate:"\u4F4E\u4EF7\u503C\uFF0C\u8BD5\u9A8C\u6027\u4F5C\u54C1\u3002\u4E0D\u6307\u671B\u80FD\u67E5\u51FA \u771F\u6B63\u6709\u4EF7\u503C\u7684\u4E1C\u897F \uFF0C\u53EA\u662F\u4E00\u4E2A\u5C55\u793A",opt:{outdated:!0}}])}],ee=function(u){var r=u.dispatch,o=u.listAndvulnsDetail.list,c=u.isLoading;return e.a.createElement(U.a,{content:void 0},e.a.createElement("div",{className:te.a.container},e.a.createElement(d.a,{title:"\u6F0F\u6D1E\u8BE6\u60C5",size:"small"},e.a.createElement(P.a,{align:"middle",style:{marginLeft:"42px",marginBottom:"3em"}},e.a.createElement("div",{style:{marginTop:"6px"}},e.a.createElement(W.a,{vuln_level:"high"})),e.a.createElement("div",{style:{marginLeft:"0.5em",fontSize:"24px",fontWeight:"bold"}},"SQL \u6CE8\u5165")),e.a.createElement("ol",null,e.a.createElement("pre",null,"URL\uFF1A          http://testphp.vulnweb.com/search.php"),e.a.createElement("pre",null,"Parameter:     test")),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement(v.a,{bordered:!1,defaultActiveKey:["1"],expandIcon:function(s){var m=s.isActive;return e.a.createElement(_,{rotate:m?90:0})}},e.a.createElement(v.a.Panel,{header:"\u653B\u51FB\u8BE6\u60C5",key:"1",style:{}},e.a.createElement("pre",null,`URL encoded GET input test was set to 1089334'"538568`),e.a.createElement("pre",null,"Proof of Exploit (AcuSensor)"),e.a.createElement("pre",null,"Source file: /hj/var/www//search.php line: 60"),e.a.createElement("h3",null,"Additional details:"),e.a.createElement("pre",null,`SQL query: SELECT * FROM guestbook WHERE sender='1089334'"538568';`),e.a.createElement("pre",null,'"mysql_query" was called.')),e.a.createElement(v.a.Panel,{header:"\u6F0F\u6D1E\u63CF\u8FF0",key:"2",style:{}},e.a.createElement("pre",null,"SQL injection (SQLi) refers to an injection attack wherein an attacker can execute malicious SQL statements that control a web application's database server."),e.a.createElement("pre",null,"Discovered by SQL Injection ")),e.a.createElement(v.a.Panel,{header:"HTTP\u8BF7\u6C42",key:"3",style:{}},e.a.createElement("pre",{style:{}},`
POST /search.php?test=1089334'"538568 HTTP/1.1
Acunetix-Aspect: enabled
Acunetix-Aspect-Password: 082119f75623eb7abd7bf357698ff66c
Acunetix-Aspect-ScanID: 8787269341669118774
Content-Type: application/x-www-form-urlencoded
Referer: http://testphp.vulnweb.com/
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate
Content-Length: 25
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4512.0 Safari/537.36
Host: testphp.vulnweb.com
Connection: Keep-alive
goButton=go&searchFor=the
                    `)),e.a.createElement(v.a.Panel,{header:"HTTP\u54CD\u5E94",key:"4",style:{}},e.a.createElement("pre",null,`
HTTP/1.1 200 OK
Server: nginx/1.19.0
Date: Wed, 27 Oct 2021 09:09:55 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
X-Powered-By: PHP/5.6.40-38+ubuntu20.04.1+deb.sury.org+1
Original-Content-Encoding: gzip
Content-Length: 5665

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html><!-- InstanceBegin template="/Templates/main_dynamic_template.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-2'>

<!-- InstanceBeginEditable name="document_title_rgn" -->
<title>search</title>
<!-- InstanceEndEditable -->
<link rel='stylesheet' href='style.css' type='text/css'>
<!-- InstanceBeginEditable name="headers_rgn" -->
<!-- here goes headers headers -->
<!-- InstanceEndEditable -->
<script language='JavaScript' type='text/JavaScript'>
<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->
</script>

</head>
<body>
<div id='mainLayer' style='position:absolute; width:700px; z-index:1'>
<div id='masthead'>
  <h1 id='siteName'><a href='https://www.acunetix.com/'><img src='images/logo.gif' width='306' height='38' border='0' alt='Acunetix website security'></a></h1>
  <h6 id='siteInfo'>TEST and Demonstration site for <a href='https://www.acunetix.com/vulnerability-scanner/'>Acunetix Web Vulnerability Scanner</a></h6>
  <div id='globalNav'>
      	<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr>
	<td align='left'>
		<a href='index.php'>home</a> | <a href='categories.php'>categories</a> | <a href='artists.php'>artists
		</a> | <a href='disclaimer.php'>disclaimer</a> | <a href='cart.php'>your cart</a> |
		<a href='guestbook.php'>guestbook</a> |
		<a href='AJAX/index.php'>AJAX Demo</a>
	</td>
	<td align='right'>
		</td>
	</tr></table>
  </div>
</div>
<!-- end masthead -->

<!-- begin content -->
<!-- InstanceBeginEditable name="content_rgn" -->
<div id='content'>
	<b>Warning</b>: mysql_fetch_array() expects parameter 1 to be resource, boolean given in <b>/hj/var/www//search.php</b> on line <b>53</b><br />
<h2 id='pageName'>searched for: the</h2><div class='story'><p><a href='showimage.php?file=./pictures/1.jpg' target='_blank'><img style='cursor:pointer' border='0' align='center' src='showimage.php?file=./pictures/1.jpg&size=160' width='160' height='100'></a><a href='product.php?pic=1'>The shore</a>, by: <a href='artists.php?artist=1'>r4w8173</a>; from category <a href='listproducts.php?cat=1'>Posters</a></div><div class='story'><p><a href='showimage.php?file=./pictures/3.jpg' target='_blank'><img style='cursor:pointer' border='0' align='center' src='showimage.php?file=./pictures/3.jpg&size=160' width='160' height='100'></a><a href='product.php?pic=3'>The universe</a>, by: <a href='artists.php?artist=1'>r4w8173</a>; from category <a href='listproducts.php?cat=1'>Posters</a></div></div>
<!-- InstanceEndEditable -->
<!--end content -->

<div id='navBar'>
  <div id='search'>
    <form action='search.php?test=query' method='post'>
      <label>search art</label>
      <input name='searchFor' type='text' size='10'>
      <input name='goButton' type='submit' value='go'>
    </form>
  </div>
  <div id='sectionLinks'>
    <ul>
      <li><a href='categories.php'>Browse categories</a></li>
      <li><a href='artists.php'>Browse artists</a></li>
      <li><a href='cart.php'>Your cart</a></li>
      <li><a href='login.php'>Signup</a></li>
	  <li><a href='userinfo.php'>Your profile</a></li>
	  <li><a href='guestbook.php'>Our guestbook</a></li>
		<li><a href='AJAX/index.php'>AJAX Demo</a></li>
	  </li>
    </ul>
  </div>
  <div class='relatedLinks'>
    <h3>Links</h3>
    <ul>
      <li><a href='http://www.acunetix.com'>Security art</a></li>
	  <li><a href='https://www.acunetix.com/vulnerability-scanner/php-security-scanner/'>PHP scanner</a></li>
	  <li><a href='https://www.acunetix.com/blog/articles/prevent-sql-injection-vulnerabilities-in-php-applications/'>PHP vuln help</a></li>
	  <li><a href='http://www.eclectasy.com/Fractal-Explorer/index.html'>Fractal Explorer</a></li>
    </ul>
  </div>
  <div id='advert'>
    <p>
      <object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='107' height='66'>
        <param name='movie' value='Flash/add.swf'>
        <param name='quality' value='high'>
        <embed src='Flash/add.swf' quality='high' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='107' height='66'></embed>
      </object>
    </p>
  </div>
</div>

<!--end navbar -->
<div id='siteInfo'>  <a href='http://www.acunetix.com'>About Us</a> | <a href='privacy.php'>Privacy Policy</a> | <a href='mailto:wvs@acunetix.com'>Contact Us</a> | &copy;2019
  Acunetix Ltd
</div>
<br>
<div style='background-color:lightgray;width:100%;text-align:center;font-size:12px;padding:1px'>
<p style='padding-left:5%;padding-right:5%'><b>Warning</b>: This is not a real shop. This is an example PHP application, which is intentionally vulnerable to web attacks. It is intended to help you test Acunetix. It also helps you understand how developer errors and bad configuration may let someone break into your website. You can use it to test other tools and your manual hacking skills as well. Tip: Look for potential SQL Injections, Cross-site Scripting (XSS), and Cross-site Request Forgery (CSRF), and more.</p>
</div>
</div>
</body>
<!-- InstanceEnd --></html>
`)),e.a.createElement(v.a.Panel,{header:"\u6F0F\u6D1E\u5F71\u54CD\u9762",key:"5",style:{}},e.a.createElement("p",null,"An attacker can use SQL injection to bypass a web application's authentication and authorization mechanisms and retrieve the contents of an entire database. SQLi can also be used to add, modify and delete records in a database, affecting data integrity. Under the right circumstances, SQLi can also be used by an attacker to execute OS commands, which may then be used to escalate an attack even further.")),e.a.createElement(v.a.Panel,{header:"\u4FEE\u590D\u5EFA\u8BAE",key:"6",style:{}},e.a.createElement("p",null,"Use parameterized queries when dealing with SQL queries that contain user input. Parameterized queries allow the database to understand which parts of the SQL query should be considered as user input, therefore solving SQL injection.")),e.a.createElement(v.a.Panel,{header:"\u57FA\u672C\u5206\u7C7B",key:"7",style:{}},e.a.createElement("pre",null,`
CWE                 CWE-89

CVSS
                    Base Score: 10 - CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:N
                    Attack Vector: Network
                    Attack Complexity: Low
                    Privileges Required: None
                    User Interaction: None
                    Scope: Changed
                    Confidentiality: High
                    Integrity: High
                    Availability: None
                      `)),e.a.createElement(v.a.Panel,{header:"\u8BE6\u60C5\u4FE1\u606F",key:"8",style:{}},e.a.createElement("pre",{style:{whiteSpace:"break-spaces"}},`
In order for an SQL injection attack to take place, the vulnerable website needs to directly include user input within an SQL statement. An attacker can then insert a payload that will be included as part of the SQL query and run against the database server.

The following server-side pseudo-code is used to authenticate users to the web application.

# Define POST variables
uname = request.POST['username']
passwd = request.POST['password']

# SQL query vulnerable to SQLi
sql = "SELECT id FROM users WHERE username='" + uname + "' AND password='" + passwd + "'"

# Execute the SQL statement
database.execute(sql)

The above script is a simple example of authenticating a user with a username and a password against a database with a table named users, and a username and password column.

The above script is vulnerable to SQL injection because an attacker could submit malicious input in such a way that would alter the SQL statement being executed by the database server.

A simple example of an SQL injection payload could be something as simple as setting the password field to password' OR 1=1.

This would result in the following SQL query being run against the database server.

SELECT id FROM users WHERE username='username' AND password='password' OR 1=1'

An attacker can also comment out the rest of the SQL statement to control the execution of the SQL query further.

-- MySQL, MSSQL, Oracle, PostgreSQL, SQLite
' OR '1'='1' --
' OR '1'='1' /*
-- MySQL
' OR '1'='1' #
-- Access (using null characters)
' OR '1'='1' %00
' OR '1'='1' %16

Once the query executes, the result is returned to the application to be processed, resulting in an authentication bypass. In the event of authentication bypass being possible, the application will most likely log the attacker in with the first account from the query result \u2014 the first account in a database is usually of an administrative user.

What's the worst an attacker can do with SQL?
SQL is a programming language designed for managing data stored in an RDBMS, therefore SQL can be used to access, modify and delete data. Furthermore, in specific cases, an RDBMS could also run commands on the operating system from an SQL statement.

Keeping the above in mind, when considering the following, it's easier to understand how lucrative a successful SQL injection attack can be for an attacker.

    An attacker can use SQL injection to bypass authentication or even impersonate specific users.
    One of SQL's primary functions is to select data based on a query and output the result of that query. An SQL injection vulnerability could allow the complete disclosure of data residing on a database server.
    Since web applications use SQL to alter data within a database, an attacker could use SQL injection to alter data stored in a database. Altering data affects data integrity and could cause repudiation issues, for instance, issues such as voiding transactions, altering balances and other records.
    SQL is used to delete records from a database. An attacker could use an SQL injection vulnerability to delete data from a database. Even if an appropriate backup strategy is employed, deletion of data could affect an application's availability until the database is restored.
    Some database servers are configured (intentional or otherwise) to allow arbitrary execution of operating system commands on the database server. Given the right conditions, an attacker could use SQL injection as the initial vector in an attack of an internal network that sits behind a firewall.


Preventing SQL injection using parameterized queries
SQL injection is one of the most widely spread and most damaging web application vulnerabilities. Fortunately, both the programming languages, as well as the RDBMSs themselves have evolved to provide web application developers with a way to safely query the database \u2014 parameterized SQL queries.

Parameterized queries are simple to write and understand while forcing a developer to define the entire SQL statement before hand, using placeholders for the actual variables within that statement. A developer would then pass in each parameter to the query after the SQL statement is defined, allowing the database to be able to distinguish between the SQL command and data inputted by a user. If SQL commands are inputted by an attacker, the parameterized query would treat the input as a string as opposed to an SQL command.

Application developers should avoid sanitizing their input by means of escaping or removing special characters (several encoding tricks an attacker could leverage to bypass such protections) and stick to using parameterized queries in order to avoid SQL injection vulnerabilities.
                  `)),e.a.createElement(v.a.Panel,{header:"\u5728\u7EBF\u53C2\u8003\u8D44\u6599",key:"9",style:{}},e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"https://www.acunetix.com/websitesecurity/sql-injection/"},"SQL Injection (SQLi) - Acunetix"))),e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"https://www.acunetix.com/websitesecurity/sql-injection2/"},"Types of SQL Injection (SQLi) - Acunetix"))),e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"https://www.acunetix.com/blog/articles/prevent-sql-injection-vulnerabilities-in-php-applications/"},"Prevent SQL injection vulnerabilities in PHP applications and fix them - Acunetix"))),e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"https://www.owasp.org/index.php/SQL_Injection"},"SQL Injection - OWASP"))),e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"https://bobby-tables.com/"},"Bobby Tables: A guide to preventing SQL injection"))),e.a.createElement("li",null,e.a.createElement("span",null,e.a.createElement("a",{target:"_blank",href:"http://pentestmonkey.net/category/cheat-sheet/sql-injection"},"SQL Injection Cheet Sheets - Pentestmonkey")))))))))))},he=C.default=Object(A.c)(function(V){var u=V.listAndvulnsDetail,r=V.loading;return{listAndvulnsDetail:u,loading:r.models.listAndserver}})(ee)},fu2T:function(N,C,t){"use strict";var f=t("EFp3"),d=t.n(f),l=t("3dVZ"),v=t.n(l)},gK9i:function(N,C,t){"use strict";var f=t("wx14"),d=t("rePB"),l=t("q1tI"),v=t("KQm4"),D=t("1OyB"),P=t("vuIU"),O=t("Ji7U"),L=t("LK+K"),e=t("U8pU"),U=t("TSYQ"),A=t.n(U),R=t("Gytx"),z=t.n(R),X=t("Zm9Q"),te=t("8XRh"),G=t("ODXe"),Y=l.forwardRef(function(u,r){var o,c=u.prefixCls,a=u.forceRender,s=u.className,m=u.style,n=u.children,i=u.isActive,p=u.role,g=l.useState(i||a),h=Object(G.a)(g,2),y=h[0],j=h[1];return l.useEffect(function(){(a||i)&&j(!0)},[a,i]),y?l.createElement("div",{ref:r,className:A()("".concat(c,"-content"),(o={},Object(d.a)(o,"".concat(c,"-content-active"),i),Object(d.a)(o,"".concat(c,"-content-inactive"),!i),o),s),style:m,role:p},l.createElement("div",{className:"".concat(c,"-content-box")},n)):null});Y.displayName="PanelContent";var ae=Y,Z=function(u){Object(O.a)(o,u);var r=Object(L.a)(o);function o(){var c;Object(D.a)(this,o);for(var a=arguments.length,s=new Array(a),m=0;m<a;m++)s[m]=arguments[m];return c=r.call.apply(r,[this].concat(s)),c.handleItemClick=function(){var n=c.props,i=n.onItemClick,p=n.panelKey;typeof i=="function"&&i(p)},c.handleKeyPress=function(n){(n.key==="Enter"||n.keyCode===13||n.which===13)&&c.handleItemClick()},c}return Object(P.a)(o,[{key:"shouldComponentUpdate",value:function(a){return!z()(this.props,a)}},{key:"render",value:function(){var a,s,m=this,n=this.props,i=n.className,p=n.id,g=n.style,h=n.prefixCls,y=n.header,j=n.headerClass,B=n.children,Q=n.isActive,F=n.showArrow,J=n.destroyInactivePanel,I=n.accordion,S=n.forceRender,x=n.openMotion,b=n.expandIcon,E=n.extra,w=n.collapsible,T=w==="disabled",k=A()("".concat(h,"-header"),(a={},Object(d.a)(a,j,j),Object(d.a)(a,"".concat(h,"-header-collapsible-only"),w==="header"),a)),$=A()((s={},Object(d.a)(s,"".concat(h,"-item"),!0),Object(d.a)(s,"".concat(h,"-item-active"),Q),Object(d.a)(s,"".concat(h,"-item-disabled"),T),s),i),K=l.createElement("i",{className:"arrow"});F&&typeof b=="function"&&(K=b(this.props));var le=E!=null&&typeof E!="boolean";return l.createElement("div",{className:$,style:g,id:p},l.createElement("div",{className:k,onClick:function(){return w!=="header"&&m.handleItemClick()},role:I?"tab":"button",tabIndex:T?-1:0,"aria-expanded":Q,onKeyPress:this.handleKeyPress},F&&K,w==="header"?l.createElement("span",{onClick:this.handleItemClick,className:"".concat(h,"-header-text")},y):y,le&&l.createElement("div",{className:"".concat(h,"-extra")},E)),l.createElement(te.b,Object(f.a)({visible:Q,leavedClassName:"".concat(h,"-content-hidden")},x,{forceRender:S,removeOnLeave:J}),function(oe,ve){var fe=oe.className,ge=oe.style;return l.createElement(ae,{ref:ve,prefixCls:h,className:fe,style:ge,isActive:Q,forceRender:S,role:I?"tabpanel":null},B)}))}}]),o}(l.Component);Z.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var q=Z;function _(u){var r=u;if(!Array.isArray(r)){var o=Object(e.a)(r);r=o==="number"||o==="string"?[r]:[]}return r.map(function(c){return String(c)})}var W=function(u){Object(O.a)(o,u);var r=Object(L.a)(o);function o(c){var a;Object(D.a)(this,o),a=r.call(this,c),a.onClickItem=function(i){var p=a.state.activeKey;if(a.props.accordion)p=p[0]===i?[]:[i];else{p=Object(v.a)(p);var g=p.indexOf(i),h=g>-1;h?p.splice(g,1):p.push(i)}a.setActiveKey(p)},a.getNewChild=function(i,p){if(!i)return null;var g=a.state.activeKey,h=a.props,y=h.prefixCls,j=h.openMotion,B=h.accordion,Q=h.destroyInactivePanel,F=h.expandIcon,J=h.collapsible,I=i.key||String(p),S=i.props,x=S.header,b=S.headerClass,E=S.destroyInactivePanel,w=S.collapsible,T=!1;B?T=g[0]===I:T=g.indexOf(I)>-1;var k=w!=null?w:J,$={key:I,panelKey:I,header:x,headerClass:b,isActive:T,prefixCls:y,destroyInactivePanel:E!=null?E:Q,openMotion:j,accordion:B,children:i.props.children,onItemClick:k==="disabled"?null:a.onClickItem,expandIcon:F,collapsible:k};return typeof i.type=="string"?i:l.cloneElement(i,$)},a.getItems=function(){var i=a.props.children;return Object(X.a)(i).map(a.getNewChild)},a.setActiveKey=function(i){"activeKey"in a.props||a.setState({activeKey:i}),a.props.onChange(a.props.accordion?i[0]:i)};var s=c.activeKey,m=c.defaultActiveKey,n=m;return"activeKey"in c&&(n=s),a.state={activeKey:_(n)},a}return Object(P.a)(o,[{key:"shouldComponentUpdate",value:function(a,s){return!z()(this.props,a)||!z()(this.state,s)}},{key:"render",value:function(){var a,s=this.props,m=s.prefixCls,n=s.className,i=s.style,p=s.accordion,g=A()((a={},Object(d.a)(a,m,!0),Object(d.a)(a,n,!!n),a));return l.createElement("div",{className:g,style:i,role:p?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(a){var s={};return"activeKey"in a&&(s.activeKey=_(a.activeKey)),s}}]),o}(l.Component);W.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},W.Panel=q;var ne=W,ie=ne,me=ne.Panel,ce=t("UESt"),M=t("bT9E"),H=t("H84U"),re=t("uaoM"),de=function(r){Object(re.a)(!("disabled"in r),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=l.useContext(H.b),c=o.getPrefixCls,a=r.prefixCls,s=r.className,m=s===void 0?"":s,n=r.showArrow,i=n===void 0?!0:n,p=c("collapse",a),g=A()(Object(d.a)({},"".concat(p,"-no-arrow"),!i),m);return l.createElement(ie.Panel,Object(f.a)({},r,{prefixCls:p,className:g}))},ue=de,pe=t("EXcs"),se=t("0n0R"),ee=function(r){var o,c=l.useContext(H.b),a=c.getPrefixCls,s=c.direction,m=r.prefixCls,n=r.className,i=n===void 0?"":n,p=r.bordered,g=p===void 0?!0:p,h=r.ghost,y=a("collapse",m),j=function(){var x=r.expandIconPosition;return x!==void 0?x:s==="rtl"?"right":"left"},B=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=r.expandIcon,E=b?b(x):l.createElement(ce.a,{rotate:x.isActive?90:void 0});return l.createElement("div",null,Object(se.a)(E,function(){return{className:A()(E.props.className,"".concat(y,"-arrow"))}}))},Q=j(),F=A()((o={},Object(d.a)(o,"".concat(y,"-borderless"),!g),Object(d.a)(o,"".concat(y,"-icon-position-").concat(Q),!0),Object(d.a)(o,"".concat(y,"-rtl"),s==="rtl"),Object(d.a)(o,"".concat(y,"-ghost"),!!h),o),i),J=Object(f.a)(Object(f.a)({},pe.a),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")}),I=function(){var x=r.children;return Object(X.a)(x).map(function(b,E){var w;if((w=b.props)===null||w===void 0?void 0:w.disabled){var T=b.key||String(E),k=b.props,$=k.disabled,K=k.collapsible,le=Object(f.a)(Object(f.a)({},Object(M.a)(b.props,["disabled"])),{key:T,collapsible:K!=null?K:$?"disabled":void 0});return Object(se.a)(b,le)}return b})};return l.createElement(ie,Object(f.a)({openMotion:J},r,{expandIcon:B,prefixCls:y,className:F}),I())};ee.Panel=ue;var he=ee,V=C.a=he},m3uQ:function(N,C,t){"use strict";t.d(C,"a",function(){return P});var f=t("q1tI"),d=t.n(f),l=t("7mwJ"),v=t("fyZN");function D(O){switch(O){case"high":return"#E74B51";case"medium":return"#FBB85B";case"low":return"#4FC5EA";case"info":return"#52B86A";default:return""}}var P=function(L){var e=L.vuln_level;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{style:{minWidth:"5em",color:D(e||"")}},d.a.createElement(l.a,{style:{fontSize:"16px"}}),d.a.createElement("div",{style:{fontSize:"12px"}},v.a.capitalizeFirstLetter(e||""))))}}}]);
