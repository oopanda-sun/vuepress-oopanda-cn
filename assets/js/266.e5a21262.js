(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{837:function(a,s,t){"use strict";t.r(s);var e=t(17),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"出现情景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#出现情景"}},[a._v("#")]),a._v(" 出现情景")]),a._v(" "),t("p",[a._v("在flutter开发的过程中经常会遇到以下错误")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v(" Waiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" another flutter "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" to release the startup lock\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),a._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因:")]),a._v(" "),t("p",[a._v("由另外一个flutter命令在持有启动锁,导致我们当前的命令无法执行")]),a._v(" "),t("h2",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法:")]),a._v(" "),t("h3",{attrs:{id:"方式一-杀死dart进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一-杀死dart进程"}},[a._v("#")]),a._v(" 方式一.杀死dart进程")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#mac linux")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("killall")]),a._v(" -9 dart\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#windows")]),a._v("\ntaskkill /F /IM dart.exe\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("当然也可以在活动监视器中杀掉进程")]),a._v(" "),t("p",[a._v("这种方式需要重启编译器")]),a._v(" "),t("h3",{attrs:{id:"方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[a._v("#")]),a._v(" 方式二")]),a._v(" "),t("p",[a._v("进入到flutter sdk目录中，找到bin/cache/lockfile文件，删除它即可")])])}),[],!1,null,null,null);s.default=r.exports}}]);