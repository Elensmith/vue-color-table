(function(e){function t(t){for(var r,c,a=t[0],s=t[1],i=t[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],r=!0,a=1;a<o.length;a++){var s=o[a];0!==n[s]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},l=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"40d0":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Popup",{attrs:{mainColor:e.mainColor,numbers:e.numbers},on:{"change-color":e.changeColor}}),o("Table",{attrs:{numbers:e.numbers,mainColor:e.mainColor}})],1)},l=[],c=(o("a630"),o("3ca3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",{staticClass:"table"},[o("tbody",e._l(e.numbers,(function(t,r){return o("tr",{key:r},[o("td",{key:r,staticClass:"table__cell",style:{backgroundColor:t.color}},[e._v(" "+e._s(t.id)+" ")])])})),0)])}),a=[],s={props:["numbers"]},i=s,u=(o("b131"),o("2877")),f=Object(u["a"])(i,c,a,!1,null,"776cee81",null),p=f.exports,d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.$emit("change-color",e.color,e.selected)}}},[o("h3",{staticClass:"form__header"},[e._v(" Change color ")]),o("strong",[e._v("choose color:")]),o("div",{staticClass:"form__body form__input"},[o("v-swatches",{attrs:{swatches:e.swatches,"show-fallback":"",inline:"","fallback-input-type":"color","popover-x":"left"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1),o("div",{staticClass:"form__select"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form__select-options",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("choose cell")]),e._l(e.numbers,(function(t,r){return o("option",{key:r},[e._v(" "+e._s(t.id)+" ")])}))],2)]),o("button",{staticClass:"form__button",attrs:{type:"submit"}},[e._v("Change color")])])},b=[],m=o("7f75"),v=o.n(m),h=(o("b3a4"),{props:["mainColor","numbers"],components:{VSwatches:v.a},data:function(){return{color:this.mainColor,swatches:"text-advanced",selected:""}}}),_=h,y=(o("cd67"),Object(u["a"])(_,d,b,!1,null,"44e995d4",null)),g=y.exports,C={name:"App",data:function(){return{mainColor:"#A463BF",numbers:[{id:"1",color:""},{id:"2",color:""},{id:"3",color:""},{id:"4",color:""},{id:"5",color:""},{id:"6",color:""},{id:"7",color:""},{id:"8",color:""},{id:"9",color:""},{id:"10",color:""},{id:"11",color:""},{id:"12",color:""}]}},components:{Popup:g,Table:p},methods:{changeColor:function(e,t){this.mainColor=e,Array.from(this.numbers)[t-1].color=e}}},w=C,O=(o("034f"),Object(u["a"])(w,n,l,!1,null,null,null)),x=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,o){},"8a30":function(e,t,o){},b131:function(e,t,o){"use strict";o("8a30")},cd67:function(e,t,o){"use strict";o("40d0")}});
//# sourceMappingURL=app.733e1837.js.map