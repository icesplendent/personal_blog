(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/personal_blog/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var v=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0186":function(t,e,a){t.exports=a.p+"img/ice.d535fa5a.png"},"09ff":function(t,e,a){},"25ad":function(t,e,a){"use strict";a("f9ea")},"4fb8":function(t,e,a){"use strict";a("09ff")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header-mobile"),a("app-header-PC",{staticClass:"d-none d-md-block"}),a("app-content")],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{app:"","hide-on-scroll":"",elevation:"0"}},[i("div",{staticClass:"d-inline",staticStyle:{width:"3vw"}}),i("v-app-bar-nav-icon",{on:{click:function(e){return t.showappbar()}}}),i("v-btn",{attrs:{plain:""}},[i("v-icon",{attrs:{left:"",color:"blue ligthen-1"}},[t._v(" mdi-hexagon-slice-6 ")]),i("span",[t._v("ICESPLENDENT")])],1),i("v-spacer"),i("v-spacer"),i("v-btn",{attrs:{icon:"",href:"https://www.youtube.com/channel/UCOU6w20nYKaPCteaDjc8rXg"}},[i("v-icon",{attrs:{color:"red darken-2"}},[t._v(" mdi-youtube ")])],1),i("v-btn",{attrs:{icon:"",href:"https://www.facebook.com/profile.php?id=100004327542414"}},[i("v-icon",{attrs:{color:"blue darken-3"}},[t._v(" mdi-facebook ")])],1),i("v-btn",{attrs:{icon:"",href:"https://www.instagram.com/ice_splendent_123/"}},[i("v-icon",{attrs:{color:"pink darken-1"}},[t._v(" mdi-instagram ")])],1),i("div",{staticClass:"d-inline",staticStyle:{width:"3vw"}})],1),i("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.showAppBar,callback:function(e){t.showAppBar=e},expression:"showAppBar"}},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:a("0186")}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("ICESPLEDNENT")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{nav:""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-chevron-right ")])],1),i("v-list-item-title",[t._v("ABOUT")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-chevron-right ")])],1),i("v-list-item-title",[t._v("BLOG")])],1)],1)],1)],1)},s=[],c={data:function(){return{showAppBar:!1,About:[{title:"ABOUT"},{title:"SKILL"},{title:"ACTIVITY"}]}},methods:{showappbar:function(){this.showAppBar=!this.showAppBar}}},l=c,v=(a("25ad"),a("2877")),p=a("6544"),d=a.n(p),u=a("40dc"),f=a("5bc1"),m=a("8336"),b=a("ce7e"),h=a("132d"),w=a("adda"),g=a("8860"),_=a("da13"),V=a("8270"),y=a("5d23"),C=a("34c3"),I=a("f774"),x=a("2fa4"),k=Object(v["a"])(l,o,s,!1,null,"2da2c070",null),A=k.exports;d()(k,{VAppBar:u["a"],VAppBarNavIcon:f["a"],VBtn:m["a"],VDivider:b["a"],VIcon:h["a"],VImg:w["a"],VList:g["a"],VListItem:_["a"],VListItemAvatar:V["a"],VListItemContent:y["a"],VListItemIcon:C["a"],VListItemTitle:y["b"],VNavigationDrawer:I["a"],VSpacer:x["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"","hide-on-scroll":"",elevation:"0"}},[a("div",{staticClass:"d-inline",staticStyle:{width:"3vw"}}),a("v-btn",{attrs:{plain:""}},[a("v-icon",{attrs:{left:"",color:"blue ligthen-1"}},[t._v(" mdi-hexagon-slice-6 ")]),a("span",[t._v("ICESPLENDENT")])],1),a("v-spacer"),a("v-menu",{staticClass:"scroll",attrs:{"offset-y":"","open-on-hover":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{plain:""}},i),[a("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-down ")]),a("span",[t._v("About")])],1)]}}])},[a("v-list",t._l(t.About,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),a("div",{staticClass:"d-inline",staticStyle:{width:"6vw"}}),a("v-btn",{attrs:{plain:""}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-down ")]),a("span",[t._v("BLOG")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://www.youtube.com/channel/UCOU6w20nYKaPCteaDjc8rXg"}},[a("v-icon",{attrs:{color:"red darken-2"}},[t._v(" mdi-youtube ")])],1),a("v-btn",{attrs:{icon:"",href:"https://www.facebook.com/profile.php?id=100004327542414"}},[a("v-icon",{attrs:{color:"blue darken-3"}},[t._v(" mdi-facebook ")])],1),a("v-btn",{attrs:{icon:"",href:"https://www.instagram.com/ice_splendent_123/"}},[a("v-icon",{attrs:{color:"pink darken-1"}},[t._v(" mdi-instagram ")])],1),a("div",{staticClass:"d-inline",staticStyle:{width:"3vw"}})],1)},O=[],S={data:function(){return{About:[{title:"ABOUT"},{title:"SKILL"},{title:"ACTIVITY"}]}}},j=S,T=(a("a7d5"),a("e449")),B=Object(v["a"])(j,L,O,!1,null,"5ee847a1",null),P=B.exports;d()(B,{VAppBar:u["a"],VBtn:m["a"],VIcon:h["a"],VList:g["a"],VListItem:_["a"],VListItemTitle:y["b"],VMenu:T["a"],VSpacer:x["a"]});var E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{about:"",elevation:"0",color:"rgb(255,255,255,0.8)"}},[i("v-card-title",{staticClass:"font-weight-bold"},[t._v(" About ")]),i("v-list",{attrs:{color:"rgb(255,255,255,0.8)"}},[i("v-container",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"3"}},[i("v-img",{attrs:{src:a("b0df")}})],1),i("v-col",{attrs:{cols:"9"}},[i("v-card-text",{staticClass:"pt-0",attrs:{color:"rgb(255,255,255,0.8)"}},[t._v(" 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 ")])],1)],1)],1)],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-divider"),i("v-card",{attrs:{skill:"",elevation:"0",color:"rgb(255,255,255,0.8)"}},[i("v-card-title",{staticClass:"font-weight-bold"},[t._v(" Skill ")]),i("v-list",{attrs:{color:"rgb(255,255,255,0.8)"}},t._l(t.items,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-divider"),i("v-card",{attrs:{activity:"",elevation:"0",color:"rgb(255,255,255,0.8)"}},[i("v-card-title",{staticClass:"font-weight-bold"},[t._v(" Activity ")]),i("v-list",{staticClass:"pa-4 ",attrs:{color:"rgb(255,255,255,0.8)"}},[t._v(" 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。 ")])],1)],1)],1)],1)],1)},D=[],N={data:function(){return{items:[{text:"C",icon:"mdi-alpha-c"},{text:"Verilog",icon:"mdi-alpha-v"},{text:"CSS",icon:"mdi-language-css3"},{text:"Javascript",icon:"mdi-language-javascript"},{text:"Vue",icon:"mdi-vuejs"}]}}},U=N,M=a("b0af"),$=a("99d9"),K=a("62ad"),Y=a("a523"),J=a("f6c4"),G=a("0fd9"),X=Object(v["a"])(U,E,D,!1,null,"01f6ee94",null),R=X.exports;d()(X,{VCard:M["a"],VCardText:$["a"],VCardTitle:$["b"],VCol:K["a"],VContainer:Y["a"],VDivider:b["a"],VIcon:h["a"],VImg:w["a"],VList:g["a"],VListItem:_["a"],VListItemIcon:C["a"],VListItemTitle:y["b"],VMain:J["a"],VRow:G["a"]});var q={name:"App",components:{"app-header-mobile":A,"app-header-PC":P,"app-content":R},data:function(){return{}}},z=q,F=(a("4fb8"),a("7496")),H=Object(v["a"])(z,n,r,!1,null,"7d322e7e",null),Q=H.exports;d()(H,{VApp:F["a"]});var W=a("f309");i["a"].use(W["a"]);var Z=new W["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:Z,render:function(t){return t(Q)}}).$mount("#app")},"8cdf":function(t,e,a){},a7d5:function(t,e,a){"use strict";a("8cdf")},b0df:function(t,e,a){t.exports=a.p+"img/me.a9947dce.jpg"},f9ea:function(t,e,a){}});
//# sourceMappingURL=app.6a5c0523.js.map