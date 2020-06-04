(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_14-tabindex-用法说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-tabindex-用法说明"}},[t._v("#")]),t._v(" 14. tabindex 用法说明")]),t._v(" "),s("h2",{attrs:{id:"_1-前-言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tabindex")]),t._v(" 指示其元素是否可以聚焦，以及它是否/在何处参与顺序键盘导航。")])]),t._v(" "),s("p",[t._v("本篇将介绍 "),s("code",[t._v("tabindex")]),t._v(" 的一些用法。通常使用 "),s("code",[t._v("tab")]),t._v(" 键移动焦点，使用空格键激活焦点。")]),t._v(" "),s("h2",{attrs:{id:"_2-规范-兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-规范-兼容"}},[t._v("#")]),t._v(" 2 规范 && 兼容")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("HTML 4")]),t._v(" "),s("td",[t._v("Only supported on "),s("code",[t._v("<a>、<area>、 <button>、 <object>、 <select>、 <textarea>")])])]),t._v(" "),s("tr",[s("td",[t._v("HTML 5")]),t._v(" "),s("td",[t._v("All elements")])])])]),t._v(" "),s("ul",[s("li",[t._v("兼容目前所有 "),s("strong",[t._v("PC浏览器")]),t._v(" 和 "),s("strong",[t._v("手机浏览器")])])]),t._v(" "),s("h2",{attrs:{id:"_3-定-义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定-义"}},[t._v("#")]),t._v(" 3 定 义")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('tabindex="-1"')]),t._v(" ：表示元素是可聚焦的，但是不能通过 "),s("code",[t._v("tab")]),t._v(" 导航来访问到该元素，可以通过js获取。")]),t._v(" "),s("li",[s("code",[t._v('tabindex="0"')]),t._v(" ：表示元素是可聚焦的，可以通过 "),s("code",[t._v("tab")]),t._v(" 导航来聚焦到该元素，它的相对顺序是当前处于的DOM结构来决定的。若一个元素没有设置 "),s("code",[t._v("tabindex")]),t._v("，默认值为 0。")]),t._v(" "),s("li",[s("code",[t._v("tabindex")]),t._v(" 大于 0 ：表示元素是可聚焦的，可以通过 "),s("code",[t._v("tab")]),t._v(" 导航来访问到该元素；它的相对顺序按照 "),s("code",[t._v("tabindex")]),t._v(" 的数值递增而滞后获焦（先获取值小的）。如果多个元素拥有相同的 "),s("code",[t._v("tabindex")]),t._v("，它们的相对顺序按照他们在当前DOM中的先后顺序决定。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注："),s("code",[t._v("tabindex")]),t._v(" 的最大值不应超过 32767")])]),t._v(" "),s("h2",{attrs:{id:"_4-使-用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使-用"}},[t._v("#")]),t._v(" 4 使 用")]),t._v(" "),s("h3",{attrs:{id:"_4-1-获取焦点-activeelement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-获取焦点-activeelement"}},[t._v("#")]),t._v(" 4.1 获取焦点 "),s("code",[t._v("activeElement")])]),t._v(" "),s("ul",[s("li",[t._v("返回当前页面中获得焦点的元素，该属性是只读的。")]),t._v(" "),s("li",[t._v("页面加载中，"),s("code",[t._v("document.activeElement")]),t._v(" 为 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("li",[t._v("页面刚刚加载完成，"),s("code",[t._v("document.activeElement")]),t._v(" 为 "),s("code",[t._v("body")]),t._v(" 元素的引用。")]),t._v(" "),s("li",[t._v("不支持 IE。")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-设置焦点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-设置焦点"}},[t._v("#")]),t._v(" 4.2 设置焦点")]),t._v(" "),s("h4",{attrs:{id:"_4-2-1-tab-键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-tab-键"}},[t._v("#")]),t._v(" 4.2.1 tab 键")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("tab")]),t._v(" 键来根据 "),s("code",[t._v("tabindex")]),t._v(" 的定义来切换焦点")]),t._v(" "),s("h4",{attrs:{id:"_4-2-2-focus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-focus"}},[t._v("#")]),t._v(" 4.2.2 focus()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("preventScroll"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("preventScroll")]),t._v(" 默认为 "),s("code",[t._v("false")]),t._v("，表示当触发时，浏览器会将元素滚动到视图中。")]),t._v(" "),s("li",[s("code",[t._v("preventScroll")]),t._v(" 为 "),s("code",[t._v("true")]),t._v("，则不发生滚动。")]),t._v(" "),s("li",[t._v("非表单元素，须设置 "),s("code",[t._v('tanindex="-1"')]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"_4-2-3-autofocus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-autofocus"}},[t._v("#")]),t._v(" 4.2.3 autofocus")]),t._v(" "),s("ul",[s("li",[t._v("该属性会使元素在页面加载时会自动获得焦点，除非用户覆盖它。")]),t._v(" "),s("li",[t._v("如果设置多个，则会将第一个拥有该属性的元素设为初始焦点。")]),t._v(" "),s("li",[t._v("该属性只能用于表单元素。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mySelect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autofocus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Option 1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Option 2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个 Boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if the autofocus attribute on the <select>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hasAutofocus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mySelect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autofocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-3-判断焦点-hasfocus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-判断焦点-hasfocus"}},[t._v("#")]),t._v(" 4.3 判断焦点 "),s("code",[t._v("hasFocus()")])]),t._v(" "),s("p",[t._v("如果当前页面的活动元素获得了焦点，"),s("code",[t._v("Document.hasFocus()")]),t._v(" 返回 "),s("code",[t._v("true")]),t._v("，否则为 "),s("code",[t._v("false")]),t._v("。可以用来判断用户是否正在与该页面进行交互。")]),t._v(" "),s("h3",{attrs:{id:"_4-4-取消焦点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-取消焦点"}},[t._v("#")]),t._v(" 4.4 取消焦点")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("blur")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("blur()")]),t._v(" 会将焦点从元素中移走，并不是转移到其他特定元素上。")]),t._v(" "),s("h3",{attrs:{id:"_4-5-焦点事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-焦点事件"}},[t._v("#")]),t._v(" 4.5 焦点事件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onfocus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onblur")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onfocusin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onfocusout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focus"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blur"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("focus")]),t._v(" ：在元素获取焦点时触发，不支持冒泡")]),t._v(" "),s("li",[s("code",[t._v("focusin")]),t._v(" ：在元素获取焦点时触发，支持冒泡")]),t._v(" "),s("li",[s("code",[t._v("blur")]),t._v(" ：在元素失去焦点时触发，不支持冒泡")]),t._v(" "),s("li",[s("code",[t._v("focusout")]),t._v(" ：在元素失去焦点时触发，支持冒泡")])]),t._v(" "),s("h2",{attrs:{id:"_5-后-记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-后-记"}},[t._v("#")]),t._v(" 5 后 记")]),t._v(" "),s("p",[s("strong",[t._v("感谢支持。")])]),t._v(" "),s("p",[s("strong",[t._v("若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),s("p",[s("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家 ʚ💖ɞ")])]),t._v(" "),s("p",[s("strong",[t._v("欢迎关注。")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘 金"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("简 书"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_5-1-原文地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-原文地址"}},[t._v("#")]),t._v(" 5.1 原文地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xrkffgg.github.io/Knotes/blog/14.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xrkffgg.github.io/Knotes/blog/14.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);