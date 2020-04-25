(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("sponsor-cb-sidebar"),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#define-a-module"}},[t._v("Define a module")])]),e("li",[e("a",{attrs:{href:"#use-in-store"}},[t._v("Use in store")])]),e("li",[e("a",{attrs:{href:"#access-state"}},[t._v("Access State")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"define-a-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-a-module"}},[t._v("#")]),t._v(" Define a module")]),t._v(" "),e("p",[t._v("To define a module, create a class that extends from "),e("code",[t._v("VuexModule")]),t._v("\nand "),e("strong",[t._v("must be")]),t._v(" decorated with "),e("code",[t._v("Module")]),t._v(" decorator")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eg. /app/store/mymodule.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VuexModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex-module-decorators'")]),t._v("\n\n@Module\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VuexModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  someField"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somedata'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("CAREFUL")]),t._v(" "),e("p",[t._v("There is a "),e("code",[t._v("Module")]),t._v(" class in the "),e("code",[t._v("vuex")]),t._v(" package too, which is "),e("strong",[t._v("not")]),t._v(" a\ndecorator. Make sure you import correct Module decorator from from\n"),e("code",[t._v("vuex-module-decorators")])]),t._v(" "),e("p",[t._v("❌ "),e("code",[t._v("import {Module} from 'vuex'")]),e("br"),t._v("\n✔️ "),e("code",[t._v("import {Module} from 'vuex-module-decorators'")])])]),t._v(" "),e("h2",{attrs:{id:"use-in-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-in-store"}},[t._v("#")]),t._v(" Use in store")]),t._v(" "),e("p",[t._v("In your store, you use the "),e("code",[t._v("MyModule")]),t._v(" class itself as a module.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyModule "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/store/mymodule'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myMod"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyModule\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The way we use the MyModule class is different from classical object-oriented programming\nand similar to how "),e("a",{attrs:{href:"https://npmjs.com/vue-class-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-class-component"),e("OutboundLink")],1),t._v(" works.\nWe use the class itself as module, not an object "),e("em",[t._v("constructed")]),t._v(" by the class")]),t._v(" "),e("p",[e("code",[t._v("new MyModule()")]),t._v(" ❌")])]),t._v(" "),e("h2",{attrs:{id:"access-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-state"}},[t._v("#")]),t._v(" Access State")]),t._v(" "),e("p",[t._v("All the usual ways of accessing the module works -")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Import The store")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/store'")]),t._v("\n\nstore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Use "),e("code",[t._v("this.$store")]),t._v(" if in component")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myMod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField\n")])])])])]),t._v(" "),e("p",[t._v("In addition to that, for a much more typesafe access, we can use "),e("code",[t._v("getModule()")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Use "),e("code",[t._v("getModule()")]),t._v(" to create type-safe accessor")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" VuexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex-module-decorators'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/store'")]),t._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dynamic"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mymod'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VuexModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  someField"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myMod "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmyMod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someField "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//works")]),t._v("\nmyMod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someOtherField "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Typescript will error, as field doesn't exist")]),t._v("\n")])])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);