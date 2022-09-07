/*! For license information please see scripts.js.LICENSE.txt */
(()=>{"use strict";function t(t,r){var e="http://localhost:9090";return"POST"===t?fetch(e,{body:r,method:t}):"GET"===t?fetch("".concat(e,"?").concat(r)):void 0}function r(t){var r=document.querySelector('[data-mrb="errorBox"]'),e=document.querySelector('[data-mrb="errorText"]');r.classList.remove("hidden"),e.textContent=t,setTimeout((function(){r.classList.add("hidden")}),5e3)}function e(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.user=r,this.mrb=document.querySelector('[data-mrb="mrb"]'),this.userNameBox=this.mrb.querySelector('[data-mrb="userName"]'),this.userAvatar=this.mrb.querySelector('[data-mrb="userSettings"]'),this.settings=this.mrb.querySelector('[data-mrb="userSettings"]'),this.startMRB()}var r,n,o;return r=t,(n=[{key:"startMRB",value:function(){console.log("mrb is starting"),this.userNameBox.textContent=this.user.name}}])&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new W(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function d(){}function y(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==r&&e.call(g,a)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function n(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=y,s(w,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function e(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.user=null,this.mrbWrapper=document.querySelector('[data-mrb="mrbWrapper"]'),this.loginWindow=this.mrbWrapper.querySelector('[data-loginWindow="loginWindow"]'),this.login=this.mrbWrapper.querySelector('[data-loginWindow="loginInput"]'),this.password=this.mrbWrapper.querySelector('[data-loginWindow="passInput"]'),this.enterBtn=this.mrbWrapper.querySelector('[data-loginWindow="enterBtn"]'),this.regBtn=this.mrbWrapper.querySelector('[data-loginWindow="regBtn"]'),this.errorBox=this.mrbWrapper.querySelector('[data-mrb="errorBox"]'),this.error=this.mrbWrapper.querySelector('[data-mrb="errorText"]'),this.logOrReg()}var o,a,s;return o=e,a=[{key:"logOrReg",value:function(){var e=this;this.enterBtn.addEventListener("click",(function(){if(e.loginFormValidator()){var o=new URLSearchParams;o.set("email",e.login.value),o.set("pass",e.password.value),o.set("loggedIn","checkUser"),t("GET",o).then(function(){var o=c(i().mark((function o(a){var u,s;return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.t0=JSON,o.next=3,a.text();case 3:o.t1=o.sent,(u=o.t0.parse.call(o.t0,o.t1)).status?(e.user=u.user,e.loginWindow.remove(),(s=new URLSearchParams).set("getWindow","appWindow"),t("GET",s).then(function(){var t=c(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.mrbWrapper,t.next=3,r.text();case 3:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),new n(e.user);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())):r(u.text);case 6:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}())}})),this.regBtn.addEventListener("click",(function(){e.loginWindow.remove();var r=new URLSearchParams;r.set("getWindow","regWindow"),t("GET",r).then(function(){var t=c(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,r.text();case 3:t.t1=t.sent,t.t0.log.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())}))}},{key:"loginFormValidator",value:function(){return 0!==this.login.value.length&&0!==this.password.value.length||(r("Заполните все поля."),!1)}}],a&&u(o.prototype,a),s&&u(o,s),Object.defineProperty(o,"prototype",{writable:!1}),e}())})();