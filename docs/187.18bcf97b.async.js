(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{"+jCm":function(I,u,e){"use strict";var A=e("jrin"),m=e("k1fw"),d=e("WHds"),O=e("ysNt"),n=e("q1tI"),f=e.n(n),P=e("4kvD"),B=e("6EgL"),w=P.a.list,x=P.a.create,g=P.a.update,t=P.a.del,c=function(i){var $=i.projectList,v=i.hideFieldsSearch,_=i.listFilter,L=i.useStoreList,s=i.addReloadFn_toMap,r=i.hidePagination,b=i.hideToolbar,T=i.headerTitle;return f.a.createElement(d.a,{addReloadFn_toMap:s,hideFieldsSearch:v,hidePagination:r,hideToolbar:b,headerTitle:T,handleList:function(M){if(L){var G=B.a.getStore().getState(),H=G.listAndserver.list;return Promise.resolve(Object(d.b)(H))}else return w(M).then(function(o){return Object(d.b)(_?o.filter(_):o)})},handleAdd:x,handleUpdate:g,handleRemove:t,columns:[{title:"\u552F\u4E00ID",dataIndex:"id",valueType:"text",fieldProps:Object(m.a)({},O.l.fieldProps.example("disabled"))},{title:"\u9879\u76EEID",dataIndex:"projectId",valueEnum:$.reduce(function(p,M){return Object(m.a)(Object(m.a)({},p),{},Object(A.a)({},M.id,{text:M.name,status:"Success"}))},{})},{title:"CMS\u7CFB\u7EDF\u4FE1\u606F",dataIndex:"cmsSystemInfo",valueType:"textarea",render:O.l.get_pRenderFn()},{title:"CDN\u8BE6\u60C5\u4FE1\u606F",dataIndex:"cdnDetail",valueType:"textarea",render:O.l.get_pRenderFn()},{title:"\u5404\u79CD\u8BC1\u4E66\u8BE6\u60C5\u4FE1\u606F",dataIndex:"certDetail",valueType:"textarea",render:O.l.get_pRenderFn()},{title:"DNS\u5BFC\u5411\u8BB0\u5F55",dataIndex:"dnsRecords",valueType:"textarea",render:O.l.get_pRenderFn()},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateTime",hideInForm:!0},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updatedAt",valueType:"dateTime",hideInForm:!0}]})};u.a=c},"15/o":function(I,u,e){},"6bGq":function(I,u,e){"use strict";e.r(u);var A=e("/zsF"),m=e("PArb"),d=e("oBTY"),O=e("q1tI"),n=e.n(O),f=e("tMyG"),P=e("9kvl"),B=e("ysNt"),w=e("+jCm"),x=B.l.tutorial,g=x.descLinks,t=x.descTexts,c=x.genUtilUI,W=x.genLinkUI,i=B.l.singleATag_blank,$=[{keywords:"\u3010CMS - Wappalyzer\u3011\u68C0\u67E5\u7F51\u7AD9\u7684\u5404\u9879\u6846\u67B6",desc:t(["\u5B89\u88C5\u65B9\u5F0F\uFF1A\u901A\u8FC7 Chrome\u63D2\u4EF6 \u5B89\u88C5","\u4F7F\u7528\uFF1A","	 1.\u5E73\u65F6\uFF0C\u5C31\u5F00\u7740\u63D2\u4EF6\u5C31\u597D\uFF1B\u4F1A\u81EA\u52A8\u663E\u793A\u3010\u68C0\u6D4B\u6570\u91CF\u3011\u3002"])},{keywords:"\u3010CMS - WPscan\u3011\u7528\u4E8EWordPress\u6F0F\u6D1E\u68C0\u67E5",desc:t(["\u5E38\u89C1\u3010WordPress\u3011\u7279\u5F81\uFF1A","	1.\u3010colorlib\u3011\uFF0C\u4F9D\u8D56\u4E8E WordPress"," "," ",n.a.createElement(n.a.Fragment,null,"\u901A\u8FC7\u6CE8\u518C\uFF0C\u83B7\u5F97\u66F4\u591AAPI\u5206\u6790\u4FE1\u606F\uFF1A \uFF08",i("\u7F51\u7AD9","https://wpscan.com/profile"),"\uFF09"),"	\u6BCF\u65E5\u989D\u5EA6\uFF0C\u6709\u7684\u5730\u65B9\u519950\uFF0C\u6709\u7684\u5730\u65B9\u519925 \uFF08\u8BC1\u5B9E50\uFF09","	","wpscan --update \uFF08\u66F4\u65B0\uFF09","wpscan --url \u76EE\u6807\u5730\u5740 \uFF08\u57FA\u672C\u67E5\u8BE2\uFF09","wpscan --url \u76EE\u6807\u5730\u5740 -o <\u8F93\u51FA\u6587\u4EF6>","	\u3010-o\u3011 \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84 \uFF08\u6CE8\u610F\uFF0C\u542F\u7528\u540E \u5C06\u4E0D\u518D\u663E\u793A\u63A7\u5236\u53F0\u8F93\u51FA\uFF09","wpscan --url \u76EE\u6807\u5730\u5740 --api-token <\u4F60\u7684API TOKEN> -o <\u8F93\u51FA\u6587\u4EF6>","	9OVyOl40Kre1itKqscYNcIlteUY1hcCnB8YstL2UdbE",n.a.createElement(n.a.Fragment,null,"	","\u53EF\u4EE5\u4FDD\u5B58\u5728\u3010~/.wpscan/scan.yml\u3011\uFF08",i("\u8BF4\u660E","https://github.com/wpscanteam/wpscan#save-api-token-in-a-file"),"\uFF09"),"wpscan --url <\u76EE\u6807url\u3001IP> --wp-content-dir <wp-content\u88AB\u8FC1\u79FB\u540E\u5730\u5740> -o <\u8F93\u51FA\u6587\u4EF6>","	\u3010--wp-content-dir\u3011 \u624B\u52A8\u8F93\u5165\uFF0C\u8F85\u52A9wpscan\u66F4\u597D\u7684\u786E\u5B9AWP\u7ED3\u6784\u3002",n.a.createElement(n.a.Fragment,null,"\u6210\u529F\u4F8B\u5B50\uFF1A\uFF08",i("30\u7AD9\u6536\u96C6","https://colorlib.com/wp/most-popular-websites-powered-by-wordpress/"),"\uFF09"),"	\u3010time.com\u3011\uFF08api.time.com/wp-content\uFF09","	\u3010techcrunch.com\u3011","	\u3010007.com\u3011\uFF0C\u6709694\u4E2A"])},{keywords:"\u3010DNS\u5E38\u89C1\u63A2\u67E5\u6B65\u9AA4\u3011",desc:t(["fierce \uFF08\u8FDB\u884C\u521D\u6B65\u7684\u786E\u8BA4\uFF0C\u6240\u6709\u53EF\u80FD\u7684\u76EE\u6807\uFF09","	fierce --domain \u57DF\u540D  >  \u8F93\u51FA\u6587\u4EF6","	fierce -range <192.168.1.0> --dns-servers <114.114.114.114>","		\u6839\u636E\u3010IP\u5730\u5740\u3011\uFF0C\u5728\u6307\u5B9A\u3010DNS\u670D\u52A1\u5668\u3011\uFF0C\u53CD\u67E5\u57DF\u540D",n.a.createElement(n.a.Fragment,null,"		","\u8BF4\u660E\u8D44\u6599\uFF08",i("\u94FE\u63A5","https://blog.csdn.net/hou09tian/article/details/106992013"),"\uFF09"),n.a.createElement(n.a.Fragment,null,"	","\u7ED3\u679C\u5206\u6790\u8BE6\u89E3\uFF08",i("\u94FE\u63A5","https://digi.ninja/projects/zonetransferme.php"),"\uFF09"),"dnsrecon \uFF08\u5F88\u53EF\u9760\uFF0C\u7ED3\u679C\u5F88\u5BB9\u6613\u7406\u89E3\u3002\u800C\u4E14\u6570\u636E\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u5230 metasploit\uFF09","	dnsrecon -t std -d <\u57DF\u540D>","	DNSSEC\uFF0CDNS\u5B89\u5168\u62D3\u5C55","	SOA\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u6570\u636E\u7248\u672C\u3001\u66F4\u65B0\u65F6\u95F4\u3002","	NS\uFF0C\u540D\u79F0\u670D\u52A1\u5668","	MX\uFF0C\u90AE\u7BB1\u4EA4\u6362\u673A","\u5176\u5B83\u7684\u4EA4\u53C9\u9A8C\u8BC1\uFF08\u7528\u522B\u7684\u8F6F\u4EF6\uFF0C\u6BD4\u5982 dnsenum \uFF0C\u7136\u540E\u53D6\u4EA4\u96C6\u7684\u7ED3\u679C\u4F1A\u5F88\u51C6\u786E\uFF09","	1."])}],v=[{keywords:"\u3010\u7EFC\u5408\u67E5\u8BE2\u7F51\u7AD9\u3011",desc:[].concat(Object(d.a)(g([{href:"https://www.shodan.io/",name:"Shodan - \u5728\u7EBF\u7F51\u7EDC\u8BBE\u5907\uFF0C\u641C\u7D22\u5F15\u64CE",rate:"\u9AD8\u4EF7\u503C\uFF0C\u641C\u7D22\u7F51\u7EDC\u8BBE\u5907\u7684\u9996\u9009"}])),Object(d.a)(t(["		\u641C\u7D22\u6761\u4EF6\uFF1A",'			\u56FD\u5BB6  \u3010country:"\u56FD\u5BB6\u7F29\u5199\uFF0C\u5982CN"\u3011',"			\u7AEF\u53E3  \u3010port:\u7AEF\u53E3\u53F7\u6570\u5B57\u3011","		\u5E38\u89C1\u8BBE\u5907\uFF1A","			NVR webserver","			jaws/1.1 \uFF08\u7F51\u7EDC\u6444\u50CF\u5934\uFF09","		\u4F18\u70B9\uFF1A","			","		\u7F3A\u70B9\uFF1A","			\u4E0D\u652F\u6301\u3010\u7279\u5F81url\u3011\u641C\u7D22\uFF0C\u6BD4\u5982\u3010/cgi/maincgi.cgi\u3011"," "])),Object(d.a)(g([{href:"https://www.zoomeye.org/",name:"ZoomEye\u949F\u9997\u4E4B\u773C - \u77E5\u9053\u521B\u5B87",rate:"\u9AD8\u4EF7\u503C\uFF0C\u548C\u3010shodan\u3011\u662F\u540C\u4E00\u6027\u8D28\uFF0C\u4E13\u6CE8\u4E8E\u56FD\u5185"}])),Object(d.a)(t(["		\u641C\u7D22\u6761\u4EF6\uFF1A","		\u5E38\u89C1Url\uFF1A","			/cgi/maincgi.cgi","		\u4F18\u70B9\uFF1A","			\u652F\u6301\u3010\u7279\u5F81url\u3011\u641C\u7D22","		\u7F3A\u70B9\uFF1A","			"])),Object(d.a)(g([{href:"https://fofa.so/",name:"\u7F51\u7EDC\u7A7A\u95F4\u641C\u7D22 - FOFA\u7F51\u7EDC\u7A7A\u95F4\u6D4B\u7ED8\u7CFB\u7EDF",rate:"\u9AD8\u4EF7\u503C\uFF0C\u548C\u3010ZoomEye\u3011\u662F\u540C\u4E00\u6027\u8D28\uFF0C\u4E13\u6CE8\u4E8E\u56FD\u5185"}])),Object(d.a)(t(["	\u641C\u7D22\u6761\u4EF6\uFF1A","	\u5E38\u89C1Url\uFF1A","		/cgi/maincgi.cgi","	\u4F18\u70B9\uFF1A","		\u652F\u6301\u3010\u7279\u5F81url\u3011\u641C\u7D22","	\u7F3A\u70B9\uFF1A","		"])),Object(d.a)(g([{href:"https://www.virustotal.com/gui/",name:"VirusTotal \u98DE\u5FEB\u7EFC\u5408\u67E5\u8BE2",rate:"\u9AD8\u4EF7\u503C\uFF0C\u4FE1\u606F\u5F88\u4E30\u5BCC\uFF0C\u65E0\u9650\u5236\u3002\u6709\u4E24\u79CD\u4E0D\u540C\u65B9\u5F0F\uFF1A\u57DF\u540D\u67E5\u8BE2\u3010baidu.com\u3011\uFF0C\u7F51\u7AD9\u67E5\u8BE2\u3010www.baidu.com\u3011"},{href:"https://censys.io/domain",name:"Censys \u5168\u7403 - \u7C7B\u4F3C\u4E8EShodan\u7684\u67E5\u8BE2\u7F51\u7AD9",rate:"\u4E2D\u4EF7\u503C\uFF0C\u4FE1\u606F\u76F8\u5BF9\u800C\u8A00\u6CA1\u6709 shodan \u90A3\u4E48\u4E30\u5BCC"},{href:"https://x.threatbook.cn/api",name:"\u5FAE\u6B65\u5728\u7EBF - \u7F51\u7EDC\u8D44\u4EA7API\u67E5\u8BE2",rate:"\u4E2D\u4EF7\u503C\uFF0C\u9700\u8981\u4ED8\u8D39\uFF0C\u53EF\u4EE5\u7533\u8BF7\u8BD5\u7528"},{href:"https://www.yunsee.cn/",name:"\u4E91\u6089\u4E92\u8054\u7F51\u8D44\u4EA7 | CMS\u3001\u6307\u7EB9\u8BC6\u522B",rate:"\u4F4E\u4EF7\u503C\uFF0C\u6CE8\u518C\u9EBB\u70E6\uFF0C\u67E5\u8BE2\u53D7\u9650\u3002\u539F\u672C\u53EF\u4EE5\u901A\u8FC7\u7279\u5F81\u5339\u914D\uFF0C\u83B7\u53D6\u5927\u91CF\u7F51\u7AD9\u6307\u7EB9\u4FE1\u606F web\u4FE1\u606F\u3001\u6846\u67B6\u4FE1\u606F\u3001\u670D\u52A1\u5668\u4FE1\u606F\u3001\u57DF\u540D\u4FE1\u606F\u3001IP\u4FE1\u606F\u3001\u5B50\u57DF\u540D\u4FE1\u606F\u3002\u4F46\u73B0\u5728\u4E0D\u884C\u4E86",opt:{outdated:!0}}])))},{keywords:"\u3010DNS\u5BFC\u5411\u8BB0\u5F55\u3011\u53CAIP\u89E3\u6790\u8BB0\u5F55",desc:Object(d.a)(g([{href:"https://dnsdumpster.com/",name:"DNSdumpster.com - DNS\u4FA6\u67E5\u548C\u7814\u7A76\uFF0C\u67E5\u627E\u548C\u67E5\u627EDNS\u8BB0\u5F55",rate:"\u9AD8\u4EF7\u503C\uFF0C\u4FE1\u606F\u591F\u8BE6\u7EC6\uFF0C\u82F1\u6587\u7F51\u7AD9"},{href:"https://dnsdumpster.com/",name:"ip138 - IP\u89E3\u6790\u8BB0\u5F55\u67E5\u8BE2",rate:"\u4E2D\u4EF7\u503C\uFF0C\u4E3B\u8981\u662F\u9488\u5BF9\u56FD\u5185"},{href:"https://www.dnsstuff.com/",name:"DNSstuff - \u73B0\u5DF2\u5931\u6548",rate:"\u65E0\u4EF7\u503C\uFF0C\u53EF\u80FD\u5DF2\u8F6C\u578B\uFF0C\u6CA1\u6709\u63D0\u4F9BDNS\u67E5\u8BE2",opt:{outdated:!0}}]))},{keywords:"\u3010\u7B7E\u540D\u8BC1\u4E66\u67E5\u8BE2\u3011",desc:g([{href:"https://dnsdumpster.com/",name:"crt.sh | \u7F51\u7AD9\u8BC1\u4E66\u641C\u7D22",rate:"\u9AD8\u4EF7\u503C\uFF0C\u4FE1\u606F\u8BE6\u7EC6\u800C\u51C6\u786E\uFF0C\u82F1\u6587\u7F51\u7AD9"}])},{keywords:"\u3010CMS\u7C7B\u578B\u67E5\u8BE2\u3011",desc:g([{href:"http://dns.bugscaner.com/",name:"\u540CIP\u7F51\u7AD9\u67E5\u8BE2 - IP\u53CD\u67E5\u57DF\u540D - CMS\u7C7B\u578B\u63A2\u6D4B",rate:"\u4E2D\u4EF7\u503C\uFF0C\u80FD\u591F\u67E5\u5230\u3002\u4F46\u4FE1\u606F\u6BD4\u8F83\u7B80\u7565"}])}],_=[{keywords:"\u3010SFS\u5B66\u52A1\u7CFB\u7EDF\u3011",desc:Object(d.a)(t(["\u4FE1\u606F\u5730\u5740\uFF1A/include/sfsinfo/program_info.php"," ",n.a.createElement(n.a.Fragment,null,"\u90E8\u7F72\u4F7F\u7528\u3001\u5E38\u89C1\u914D\u7F6E\uFF1A",i("96\u5E74SFS\u5B78\u52D9\u7CFB\u7D71\u7BA1\u7406\u8005\u7814\u7FD2\u8B1B\u7FA9","http://webcache.googleusercontent.com/search?q=cache:NkFd3Z0KO2AJ:elesson.tc.edu.tw/md221/mod/resource/view.php%3Fid%3D1257+&cd=15&hl=zh-CN&ct=clnk&gl=us"))," ",n.a.createElement(n.a.Fragment,null,"Sql\u6CE8\u5C04\u6F0F\u6D1E\uFF1A",i("SFS\u5B66\u52A1\u7BA1\u7406\u7CFB\u7EDF\u5B58\u5728Sql\u6CE8\u5C04\u6F0F\u6D1E\uFF08\u81FA\u7063\u5730\u5340\uFF09","https://www.onebug.org/wooyundata/67913.html"))]))},{keywords:"\u3010WordPress\u3011",desc:Object(d.a)(t(["\u8BD5\u9A8C\u7530\u5730\uFF1A","	1.\u3010HTB\u9776\u673A\u3011Shield\uFF0C\u5730\u5740\u301010.10.10.29\u3011\u3002","		1.\u6709\u4E00\u4E2A\u5B8C\u6574\u7684\u3010WordPress\u3011\u540E\u53F0\uFF0C\u4F9B\u4F60\u73A9\u800D\u3001\u719F\u7EC3\u3002","\u5E38\u89C1\u8DEF\u5F84","	1.\u3010./wp-login.php\u3011","	1.\u3010./wp-admin.php\u3011"]))}],L=function(r){var b=r.dispatch,T=r.listAndproject.list,p=function(){b({type:"listAndproject/fetch",payload:{}})};return Object(O.useEffect)(function(){p()},[]),n.a.createElement(f.a,{content:n.a.createElement("div",{style:{whiteSpace:"pre-line"}},`
          \u7F51\u7AD9\u6307\u7EB9\u8BC6\u522B

         \u3010CMS\u3011Content-Manage-System\uFF0C\u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u6709\u4E00\u7CFB\u5217\u7684\u53EF\u7528\u4E4B\u5904
         \u3010CDN\u3011\u8BE6\u60C5
         \u3010\u8BC1\u4E66\u3011\uFF0CHTTP/HTTPS\u8BC1\u4E66\uFF0C\u7B49\u3002\u80FD\u63D0\u4F9B\u6240\u6709\u4EBA\u76F8\u5173\u3002
         \u3010DNS\u3011IP\u89E3\u6790\u3001\u5BFC\u5411\u7684\u8BB0\u5F55\u3002\u80FD\u591F\u8FFD\u67E5IP\u4FE1\u606F\u3002
          `,n.a.createElement(m.a,{type:"horizontal"}),n.a.createElement("h1",null,"\u7F51\u7AD9"),n.a.createElement("div",null,v.map(W)),n.a.createElement(m.a,{type:"horizontal"}),n.a.createElement("h1",null,"\u5DE5\u5177"),n.a.createElement("div",null,$.map(c)),n.a.createElement(m.a,{type:"horizontal"}),n.a.createElement("h1",null,"CMS\u6536\u96C6"),n.a.createElement("div",null,_.map(c)),n.a.createElement(m.a,{type:"horizontal"}))},n.a.createElement(w.a,{projectList:T}))};u.default=Object(P.c)(function(s){var r=s.listAndsiteMain,b=s.listAndproject,T=s.loading;return{listAndsiteMain:r,listAndproject:b,loading:T.models.listAndserver}})(L)},AOa7:function(I,u,e){},DnfT:function(I,u,e){},FRQA:function(I,u,e){"use strict";var A=e("GNNt"),m=e("wEI+"),d=e("DnfT"),O=e.n(d),n=e("q1tI"),f=e.n(n),P=e("TSYQ"),B=e.n(P),w=e("jYQm"),x=function(t){var c=Object(n.useContext)(w.a),W=t.children,i=t.contentWidth,$=t.className,v=t.style,_=Object(n.useContext)(m.a.ConfigContext),L=_.getPrefixCls,s=t.prefixCls||L("pro"),r=i||c.contentWidth,b="".concat(s,"-grid-content");return f.a.createElement("div",{className:B()(b,$,{wide:r==="Fixed"}),style:v},f.a.createElement("div",{className:"".concat(s,"-grid-content-children")},W))};u.a=x},"YV/h":function(I,u,e){},jRje:function(I,u,e){"use strict";var A=e("wx14"),m=e("VTBJ"),d=e("GNNt"),O=e("wEI+"),n=e("Ff2n"),f=e("q1tI"),P=e.n(f),B=e("TSYQ"),w=e.n(B),x=e("BGR+"),g=e("rsCp"),t=e.n(g),c=e("jYQm"),W=["children","className","extra","style","renderContent"],i=function(v){var _=v.children,L=v.className,s=v.extra,r=v.style,b=v.renderContent,T=Object(n.a)(v,W),p=Object(f.useContext)(O.a.ConfigContext),M=p.getPrefixCls,G=v.prefixCls||M("pro"),H="".concat(G,"-footer-bar"),o=Object(f.useContext)(c.a),q=Object(f.useMemo)(function(){var N=o.hasSiderMenu,te=o.isMobile,ee=o.siderWidth;if(!!N)return ee?te?"100%":"calc(100% - ".concat(ee,"px)"):"100%"},[o.collapsed,o.hasSiderMenu,o.isMobile,o.siderWidth]),V=P.a.createElement(P.a.Fragment,null,P.a.createElement("div",{className:"".concat(H,"-left")},s),P.a.createElement("div",{className:"".concat(H,"-right")},_));return Object(f.useEffect)(function(){return!o||!(o==null?void 0:o.setHasFooterToolbar)?function(){}:(o==null||o.setHasFooterToolbar(!0),function(){var N;o==null||(N=o.setHasFooterToolbar)===null||N===void 0||N.call(o,!1)})},[]),P.a.createElement("div",Object(A.a)({className:w()(L,"".concat(H)),style:Object(m.a)({width:q},r)},Object(x.a)(T,["prefixCls"])),b?b(Object(m.a)(Object(m.a)(Object(m.a)({},v),o),{},{leftWidth:q}),V):V)};u.a=i},jYQm:function(I,u,e){"use strict";var A=e("q1tI"),m=e.n(A),d=Object(A.createContext)({});u.a=d},rsCp:function(I,u,e){},tMyG:function(I,u,e){"use strict";var A=e("EFp3"),m=e("15/o"),d=e("VNzZ"),O=e("rePB"),n=e("GNNt"),f=e("wEI+"),P=e("YV/h"),B=e("AOa7"),w=e("lUTK"),x=e("qVdP"),g=e("Telt"),t=e("bf48"),c=e("VTBJ"),W=e("Ff2n"),i=e("bE4q"),$=e("Znn+"),v=e("ZTPi"),_=e("wx14"),L=e("U8pU"),s=e("q1tI"),r=e.n(s),b=e("TSYQ"),T=e.n(b),p=e("jYQm"),M=e("FRQA"),G=e("jRje"),H=e("u/V1"),o=e("95SA"),q=e("yxHc"),V=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],N=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function te(U){return Object(L.a)(U)==="object"?U:{spinning:U}}var ee=function(a){var l=a.tabList,E=a.tabActiveKey,y=a.onTabChange,z=a.tabBarExtraContent,F=a.tabProps,Y=a.prefixedClassName;return Array.isArray(l)||z?r.a.createElement(v.a,Object(_.a)({className:"".concat(Y,"-tabs"),activeKey:E,onChange:function(R){y&&y(R)},tabBarExtraContent:z},F),l==null?void 0:l.map(function(j,R){return r.a.createElement(v.a.TabPane,Object(_.a)({},j,{tab:j.tab,key:j.key||R}))})):null},re=function(a,l,E){return!a&&!l?null:r.a.createElement("div",{className:"".concat(E,"-detail")},r.a.createElement("div",{className:"".concat(E,"-main")},r.a.createElement("div",{className:"".concat(E,"-row")},a&&r.a.createElement("div",{className:"".concat(E,"-content")},a),l&&r.a.createElement("div",{className:"".concat(E,"-extraContent")},l))))},ce=function(a){var l=Object(s.useContext)(p.a);return r.a.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},r.a.createElement(i.a,Object(_.a)({},l==null?void 0:l.breadcrumb,l==null?void 0:l.breadcrumbProps,a)))},oe=function(a){var l,E=Object(s.useContext)(p.a),y=a.title,z=a.content,F=a.pageHeaderRender,Y=a.header,j=a.prefixedClassName,R=a.extraContent,se=a.style,ae=a.prefixCls,K=a.breadcrumbRender,Q=Object(W.a)(a,V),S=Object(s.useMemo)(function(){if(!!K)return K},[K]);if(F===!1)return null;if(F)return r.a.createElement(r.a.Fragment,null," ",F(Object(c.a)(Object(c.a)({},a),E)));var C=y;!y&&y!==!1&&(C=E.title);var D=Object(c.a)(Object(c.a)(Object(c.a)({},E),{},{title:C},Q),{},{footer:ee(Object(c.a)(Object(c.a)({},Q),{},{breadcrumbRender:K,prefixedClassName:j}))},Y),h=D.breadcrumb,J=(!h||!(h==null?void 0:h.itemRender)&&!(h==null||(l=h.routes)===null||l===void 0?void 0:l.length))&&!K;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(Z){return!D[Z]})&&J&&!z&&!R?null:r.a.createElement("div",{className:"".concat(j,"-warp")},r.a.createElement(t.a,Object(_.a)({},D,{breadcrumb:K===!1?void 0:Object(c.a)(Object(c.a)({},D.breadcrumb),E.breadcrumbProps),breadcrumbRender:S,prefixCls:ae}),(Y==null?void 0:Y.children)||re(z,R,j)))},le=function(a){var l,E,y=a.children,z=a.loading,F=z===void 0?!1:z,Y=a.className,j=a.style,R=a.footer,se=a.affixProps,ae=a.ghost,K=a.fixedHeader,Q=a.breadcrumbRender,S=Object(W.a)(a,N),C=Object(s.useContext)(p.a),D=Object(s.useContext)(f.a.ConfigContext),h=D.getPrefixCls,J=a.prefixCls||h("pro"),Z="".concat(J,"-page-container"),me=T()(Z,Y,(l={},Object(O.a)(l,"".concat(J,"-page-container-ghost"),ae),Object(O.a)(l,"".concat(J,"-page-container-with-footer"),R),l)),ie=Object(s.useMemo)(function(){return y?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(Z,"-children-content")},y),C.hasFooterToolbar&&r.a.createElement("div",{style:{height:48,marginTop:24}})):null},[y,Z,C.hasFooterToolbar]),ve=Object(s.useMemo)(function(){var k;return Q==!1?!1:Q||(S==null||(k=S.header)===null||k===void 0?void 0:k.breadcrumbRender)},[Q,S==null||(E=S.header)===null||E===void 0?void 0:E.breadcrumbRender]),ne=r.a.createElement(oe,Object(_.a)({},S,{breadcrumbRender:ve,ghost:ae,prefixCls:void 0,prefixedClassName:Z})),X=Object(s.useMemo)(function(){if(r.a.isValidElement(F))return F;if(typeof F=="boolean"&&!F)return null;var k=te(F);return r.a.createElement(o.a,k)},[F]),de=Object(s.useMemo)(function(){var k=X||ie;return a.waterMarkProps||C.waterMarkProps?r.a.createElement(q.a,a.waterMarkProps||C.waterMarkProps,k):k},[a.waterMarkProps,C.waterMarkProps,X,ie]);return r.a.createElement("div",{style:j,className:me},K&&ne?r.a.createElement(d.a,Object(_.a)({offsetTop:C.hasHeader&&C.fixedHeader?C.headerHeight:0},se),ne):ne,de&&r.a.createElement(M.a,null,de),R&&r.a.createElement(G.a,{prefixCls:J},R))},ue=u.a=le},"u/V1":function(I,u,e){},yxHc:function(I,u,e){"use strict";var A=e("VTBJ"),m=e("ODXe"),d=e("GNNt"),O=e("wEI+"),n=e("q1tI"),f=e.n(n),P=e("TSYQ"),B=e.n(P),w=function(t){if(!t)return 1;var c=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/c},x=function(t){var c=t.children,W=t.style,i=t.className,$=t.markStyle,v=t.markClassName,_=t.zIndex,L=_===void 0?9:_,s=t.gapX,r=s===void 0?212:s,b=t.gapY,T=b===void 0?222:b,p=t.width,M=p===void 0?120:p,G=t.height,H=G===void 0?64:G,o=t.rotate,q=o===void 0?-22:o,V=t.image,N=t.content,te=t.offsetLeft,ee=t.offsetTop,re=t.fontStyle,ce=re===void 0?"normal":re,oe=t.fontWeight,le=oe===void 0?"normal":oe,ue=t.fontColor,U=ue===void 0?"rgba(0,0,0,.15)":ue,a=t.fontSize,l=a===void 0?16:a,E=t.fontFamily,y=E===void 0?"sans-serif":E,z=t.prefixCls,F=Object(n.useContext)(O.a.ConfigContext),Y=F.getPrefixCls,j=Y("pro-layout-watermark",z),R=B()("".concat(j,"-wrapper"),i),se=B()(j,v),ae=Object(n.useState)(""),K=Object(m.a)(ae,2),Q=K[0],S=K[1];return Object(n.useEffect)(function(){var C=document.createElement("canvas"),D=C.getContext("2d"),h=w(D),J="".concat((r+M)*h,"px"),Z="".concat((T+H)*h,"px"),me=te||r/2,ie=ee||T/2;if(C.setAttribute("width",J),C.setAttribute("height",Z),D){D.translate(me*h,ie*h),D.rotate(Math.PI/180*Number(q));var ve=M*h,ne=H*h;if(V){var X=new Image;X.crossOrigin="anonymous",X.referrerPolicy="no-referrer",X.src=V,X.onload=function(){D.drawImage(X,0,0,ve,ne),S(C.toDataURL())}}else if(N){var de=Number(l)*h;D.font="".concat(ce," normal ").concat(le," ").concat(de,"px/").concat(ne,"px ").concat(y),D.fillStyle=U,D.fillText(N,0,0),S(C.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[r,T,te,ee,q,ce,le,M,H,y,U,V,N,l]),f.a.createElement("div",{style:Object(A.a)({position:"relative"},W),className:R},c,f.a.createElement("div",{className:se,style:Object(A.a)({zIndex:L,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(r+M,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Q,"')")},$)}))};u.a=x}}]);