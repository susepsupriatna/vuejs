(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1639:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),o=n.n(r),s={},i=o.a.create(s);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},a["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[n("i",{staticClass:"fa fa-home"}),t._v(" Home ")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("Dropdown")]),n("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")])]),n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")])]),n("li",[n("hr",{staticClass:"dropdown-divider"})]),n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Disabled")])])]),n("form",{staticClass:"d-flex"},[n("input",{staticClass:"form-control mr-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),n("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Search")])])])])])])}],u=(n("1639"),{}),d=u,p=n("2877"),f=Object(p["a"])(d,l,c,!1,null,null,null),v=f.exports,b=n("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("b-alert",{attrs:{show:""}},[t._v("Default Alert")])],1)},m=[],w={},C=Object(p["a"])(w,g,m,!1,null,null,null),_=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],j={},O=Object(p["a"])(j,y,x,!1,null,null,null),k=O.exports;a["a"].use(h["a"]);var P=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:k}],S=new h["a"]({routes:P}),A=S;n("f9e3"),n("4989");a["a"].config.productionTip=!1,new a["a"]({router:A,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.e5049157.js.map