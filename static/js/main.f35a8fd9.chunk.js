(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,r){e.exports=r(38)},35:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),o=r(21),c=r.n(o),i=(r(33),r(35),r(19)),l=r(0),s=r(8),u=r(1),m=r(22),f=r(16);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function f(){}function h(){}var d={};i(d,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(x([])));g&&g!==t&&r.call(g,a)&&(d=g);var b=h.prototype=m.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function c(){return new t(function(n,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,i)})}i(l.arg)}(a,o,n,c)})}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,i(b,"constructor",h),i(h,"constructor",f),f.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(b),i(b,c,"Generator"),i(b,a,function(){return this}),i(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var h=Object(m.a)({apiKey:"AIzaSyDKOuLhQL-PyOPPV-42qeOSCbh4h4xfltI",authDomain:"movie-app-54f5f.firebaseapp.com",projectId:"movie-app-54f5f",storageBucket:"movie-app-54f5f.appspot.com",messagingSenderId:"326858529242",appId:"1:326858529242:web:2e9bf127ec56c2515508e3"}),d=Object(f.c)(h),v=function(){var e=Object(u.a)(p().mark(function e(t,r,n,a){var o;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.prev=1,e.next=4,Object(f.b)(d,t,r);case 4:o=e.sent,console.log(o),a("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.message);case 12:return e.next=14,Object(f.h)(d.currentUser,{displayName:n});case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),alert("The email address is already in use by another account!");case 19:case"end":return e.stop()}},e,null,[[0,16],[1,9]])}));return function(t,r,n,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(p().mark(function e(t,r,n){var a;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.e)(d,t,r);case 3:a=e.sent,console.log(a),n("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,r,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(p().mark(function e(t){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(d,function(e){t(e||null)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=new f.a;e.setCustomParameters({prompt:"select_account"}),Object(f.f)(d,e)},E=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(),r=Object(s.a)(t,2),o=r[0],c=r[1];return Object(n.useEffect)(function(){b(c)},[]),a.a.createElement(E.Provider,{value:{curentUser:o}},e.children)},N=function(e){var t,r=e.title,o=e.poster_path,c=e.overview,i=e.vote_average,l=Object(n.useContext)(E).curentUser;return a.a.createElement("div",{className:"movie"},a.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280"+o,alt:"movie poster"}),a.a.createElement("div",{className:"movie-info"},a.a.createElement("h3",null,r),l?a.a.createElement("span",{className:"tag ".concat((t=i,t>=8?"green":t>=6?"orange":"red"))},i):null),l?a.a.createElement("div",{className:"movie-over"},a.a.createElement("h2",null,"Overview"),a.a.createElement("p",null,c)):null)},O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],m=Object(n.useContext)(E).curentUser;Object(n.useEffect)(function(){f("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")},[]);var f=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){return o(e.results)})};return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&m?(f("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+l),u("")):alert("Please login to search movie...")}},a.a.createElement("input",{type:"search",className:"search-input",placeholder:"Search a movie...",onChange:function(e){return u(e.target.value)}})),a.a.createElement("div",{className:"movie-container"},r.map(function(e){return a.a.createElement(N,Object.assign({key:e.id},e))})))},j=function(){var e=Object(l.f)(),t=Object(n.useContext)(E).curentUser;return console.log(t),a.a.createElement("div",null,a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("a",{className:"navbar-brand",href:"/",style:{color:"white"}},"React Movie App"),a.a.createElement("div",{className:"buttons"},t?a.a.createElement("h3",null,t.displayName):a.a.createElement("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e("/login")}},"Login"),t?a.a.createElement("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){Object(f.g)(d)}},"Logout"):a.a.createElement("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e("/register")}},"Register")))))},x=function(){var e=Object(l.f)(),t=Object(n.useState)(""),r=Object(s.a)(t,2),o=r[0],c=r[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),d=h[0],g=h[1],b=Object(n.useState)(""),E=Object(s.a)(b,2),w=E[0],N=E[1];return a.a.createElement("div",{className:"register"},a.a.createElement("div",{className:"form-image"},a.a.createElement("img",{className:"background-image",src:"https://picsum.photos/1200/900",alt:"sample"})),a.a.createElement("div",{className:"register-form"},a.a.createElement("h1",{className:"form-title display-3"},"Register"),a.a.createElement("form",{id:"login"},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"first-name",className:"form-label display-4"},"First name"),a.a.createElement("input",{type:"first-name",className:"form-control",id:"first-name",placeholder:"Enter your Firstname...",onChange:function(e){return c(e.target.value)},required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"last-name",className:"form-label display-4"},"Last name"),a.a.createElement("input",{type:"last-name",className:"form-control",id:"last-name",placeholder:"Enter your Last name...",onChange:function(e){return f(e.target.value)},required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"email",className:"form-label display-4"},"Email"),a.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return g(e.target.value)},required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"password",className:"form-label display-4"},"Password"),a.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return N(e.target.value)},required:!0})),a.a.createElement("input",{type:"button",className:"btn btn-primary form-control",value:"Register",onClick:function(){var t;"".concat(o)&&"".concat(m)?(t="".concat(o," ").concat(m),v(d,w,t,e)):alert("Please enter firstname and lastname")}})),a.a.createElement("button",{className:"btn btn-primary form-control",onClick:function(){y(),e("/")}},"Contunie With Google")))},L=function(){var e=Object(l.f)(),t=Object(n.useState)(""),r=Object(s.a)(t,2),o=r[0],c=r[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1];return a.a.createElement("div",{className:"register"},a.a.createElement("div",{className:"register-form"},a.a.createElement("h1",{className:"form-title display-3"},"Login"),a.a.createElement("form",{id:"login"},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"email",className:"form-label display-4"},"Email"),a.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return c(e.target.value)}})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"password",className:"form-label display-4"},"Password"),a.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return f(e.target.value)}})),a.a.createElement("input",{type:"button",className:"btn btn-primary form-control",value:"Login",onClick:function(){g(o,m,e)}})),a.a.createElement("button",{className:"btn btn-primary form-control",onClick:function(){y(),e("/")}},"Contunie With Google")),a.a.createElement("div",{className:"form-image"},a.a.createElement("img",{className:"background-image",src:"https://picsum.photos/1200/900",alt:"sample"})))},k=function(){return a.a.createElement(i.a,null,a.a.createElement(j,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/register",element:a.a.createElement(x,null)}),a.a.createElement(l.a,{path:"/login",element:a.a.createElement(L,null)}),a.a.createElement(l.a,{path:"/",element:a.a.createElement(O,null)})))};var C=function(){return a.a.createElement(w,null,a.a.createElement(k,null))},S=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,39)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null))),S()}},[[24,3,2]]]);
//# sourceMappingURL=main.f35a8fd9.chunk.js.map