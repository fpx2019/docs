(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{360:function(t,a,s){"use strict";s.r(a);var r=s(43),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_16-我是如何在-github-上提交-pr-的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-我是如何在-github-上提交-pr-的"}},[t._v("#")]),t._v(" 16. 我是如何在 GitHub 上提交 PR 的")]),t._v(" "),s("p",[t._v("GitHub 大家都知道，很多公司的开源项目都会放在这个地方。")]),t._v(" "),s("p",[t._v("看到那些大牛的代码，你是否也想过？")]),t._v(" "),s("ul",[s("li",[t._v("我能不能学习他们")]),t._v(" "),s("li",[t._v("我能不能提交一些自己的代码")]),t._v(" "),s("li",[t._v("我的代码能不能满足要求")]),t._v(" "),s("li",[t._v("我能不能得到他们的认可")])]),t._v(" "),s("p",[t._v("本篇将分享这段时间自己提交 PR 的一些经验，也是记录自己踩过的坑。\n"),s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/16/16-1.png?raw=true",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("默许阅读人群了解 GitHub ，了解基本 git 命令。")])]),t._v(" "),s("p",[t._v("这里以 "),s("a",{attrs:{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design"),s("OutboundLink")],1),t._v(" 为例。")]),t._v(" "),s("h2",{attrs:{id:"_1-准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备"}},[t._v("#")]),t._v(" 1. 准备")]),t._v(" "),s("h3",{attrs:{id:"_1-1-fork-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-fork-项目"}},[t._v("#")]),t._v(" 1.1 Fork 项目")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/16/16-2.png?raw=true",alt:""}}),t._v("\n点击 Fork 后，会自动生成以自己名称命名的项目，如图：\n"),s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/16/16-4.png?raw=true",alt:""}}),t._v("\n因为我这个是很早之前的，所以可以看到我项目的 master 已经拉下原项目的 master 152个 commits 了。不用担心，后面会教你怎么处理。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-clone-到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-clone-到本地"}},[t._v("#")]),t._v(" 1.2 Clone 到本地")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/16/16-3.png?raw=true",alt:""}})]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在你想存放项目的文件夹下执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/xrkffgg/ant-design.git\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ant-design\n")])])]),s("h3",{attrs:{id:"_1-3-设置-remote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-设置-remote"}},[t._v("#")]),t._v(" 1.3 设置 remote")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你这是一次性，并且很快就提交了，可以忽略此步，但不建议。")])]),t._v(" "),s("ul",[s("li",[t._v("添加")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" ant https://github.com/ant-design/ant-design.git\n")])])]),s("ul",[s("li",[t._v("查看")])]),t._v(" "),s("p",[t._v("如果操作正确，执行 "),s("code",[t._v("git remote -v")]),t._v("，你将看到")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ant\thttps://github.com/ant-design/ant-design.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nant\thttps://github.com/ant-design/ant-design.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin\thttps://github.com/xrkffgg/ant-design.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin\thttps://github.com/xrkffgg/ant-design.git "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-4-安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安装依赖"}},[t._v("#")]),t._v(" 1.4 安装依赖")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i \n")])])]),s("h3",{attrs:{id:"_1-5-启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-启动项目"}},[t._v("#")]),t._v(" 1.5 启动项目")]),t._v(" "),s("p",[t._v("有的项目命令不一定是 "),s("code",[t._v("start")]),t._v(" ，具体可以去 "),s("code",[t._v("package.json")]),t._v(" 中查看。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" start\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),s("h2",{attrs:{id:"_2-开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-开发"}},[t._v("#")]),t._v(" 2. 开发")]),t._v(" "),s("p",[t._v("这里就是尽情的来 Coding。")]),t._v(" "),s("p",[t._v("很多项目都有一些开发规范，建议开发前可以去阅读以下，更规范的代码有助于 PR 的通过。")]),t._v(" "),s("p",[t._v("同时在开发完成后，建议运行 项目中的 test 来检查是否满足要求（避免 PR 中 test 失败）")]),t._v(" "),s("h3",{attrs:{id:"_2-1-提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-提交"}},[t._v("#")]),t._v(" 2.1 提交")]),t._v(" "),s("p",[t._v("这里列出几个自己的风格。")]),t._v(" "),s("ul",[s("li",[t._v("先新建远程，再直接提交")])]),t._v(" "),s("blockquote",[s("p",[t._v("GitHub 新建分支的操作为：在某个分支下，点击 Branch，输入你想新建的名称，比如 test，之后会自动以你所在分支为基准新建分支。")])]),t._v(" "),s("p",[t._v("本地分支直接使用 test 分支开发，这样避免 master 被污染。")]),t._v(" "),s("ul",[s("li",[t._v("本地开发完成，推送到远端其他分支")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master:test\n")])])]),s("p",[t._v("这样会导致自己的本地 master 多了 commit 。")]),t._v(" "),s("p",[t._v("add commit 的操作建议使用工具（IDE 集成或插件）来执行，这样可以检查一下提交的代码。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-提交规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-提交规范"}},[t._v("#")]),t._v(" 2.2 提交规范")]),t._v(" "),s("p",[t._v("commit 信息一定要写的规范。可参考 "),s("a",{attrs:{href:"https://xrkffgg.github.io/Knotes/standard/#_1-2-git-commit-%E8%A7%84%E8%8C%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("commit 规范"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_3-pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-pr"}},[t._v("#")]),t._v(" 3. PR")]),t._v(" "),s("h3",{attrs:{id:"_3-1-新建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-新建"}},[t._v("#")]),t._v(" 3.1 新建")]),t._v(" "),s("p",[t._v("当你提交到远程时，点开你的 项目主页，会自动显示出一个 Pull Request 的按钮。")]),t._v(" "),s("p",[t._v("如果由于网络原因没刷新出来，可自己直接点击 分支旁的 "),s("code",[t._v("New pull request")]),t._v("，或去源项目新建 PR。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-填写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-填写"}},[t._v("#")]),t._v(" 3.2 填写")]),t._v(" "),s("p",[t._v("每个项目都会对自己的 PR，有一定的要求，请仔细阅读规范填写。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-后续"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-后续"}},[t._v("#")]),t._v(" 3.3 后续")]),t._v(" "),s("p",[t._v("当你做完这些操作后，就可以等着项目维护人员来进行代码审核和 PR 操作啦。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果 PR merge 后，会给出一个 删除你项目中分支的操作，可直接点击。")])]),t._v(" "),s("h2",{attrs:{id:"_4-情景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-情景"}},[t._v("#")]),t._v(" 4. 情景")]),t._v(" "),s("p",[t._v("这里列出一些我遇到的情景和解决办法。")]),t._v(" "),s("h3",{attrs:{id:"_4-1-clone-指定分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-clone-指定分支"}},[t._v("#")]),t._v(" 4.1 clone 指定分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone - b v1.0 http://xxx.git\n")])])]),s("h3",{attrs:{id:"_4-2-更新-fork-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-更新-fork-工程"}},[t._v("#")]),t._v(" 4.2 更新 fork 工程")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 添加源分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xxx git@github.com:author/repos.git\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v 查看\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. fetch 源仓库代码的最新版本到本地")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 合并两个版本的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge xxx/master\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase xxx/master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 更新到GitHub的fork上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("h3",{attrs:{id:"_4-3-恢复远端-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-恢复远端-commit"}},[t._v("#")]),t._v(" 4.3 恢复远端 commit")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 查看 commit 历史")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 恢复到指定 commit ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. commit 处理")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. push 远端")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master --force\n")])])]),s("h3",{attrs:{id:"_4-4-pr-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-pr-rebase"}},[t._v("#")]),t._v(" 4.4 PR rebase")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. master 更新到最新")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. rebase")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. push")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force\n")])])]),s("h3",{attrs:{id:"_4-5-远程新建分支如何开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-远程新建分支如何开发"}},[t._v("#")]),t._v(" 4.5 远程新建分支如何开发")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -t origin/xxx\n")])])]),s("h2",{attrs:{id:"_5-后-记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-后-记"}},[t._v("#")]),t._v(" 5 后 记")]),t._v(" "),s("p",[s("strong",[t._v("感谢支持。")])]),t._v(" "),s("p",[s("strong",[t._v("若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),s("p",[s("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家 ʚ💖ɞ")])]),t._v(" "),s("p",[s("strong",[t._v("欢迎关注。")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘 金"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("简 书"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_5-1-原文地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-原文地址"}},[t._v("#")]),t._v(" 5.1 原文地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xrkffgg.github.io/Knotes/blog/16.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xrkffgg.github.io/Knotes/blog/16.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);