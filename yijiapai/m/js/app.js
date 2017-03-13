// Zepto 1.1.6 (generated with Zepto Builder) - zepto event ajax form ie callbacks data deferred fx fx_methods selector touch - zeptojs.com/license 
var Zepto=function(){function t(t){return null==t?String(t):B[Y.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?j.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[c(t)]?e:e+"px"}function h(t){var e,n;return Z[t]||(e=M.createElement(t),M.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),Z[t]=n),Z[t]}function p(t){return"children"in t?D.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function m(t,e,n){for(T in e)n&&(o(e[T])||Q(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),Q(e[T])&&!Q(t[T])&&(t[T]=[]),m(t[T],e[T],n)):e[T]!==E&&(t[T]=e[T])}function g(t,e){return null==e?j(t):j(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",i=n&&n.baseVal!==E;return e===E?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?j.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)b(t.childNodes[n],e)}var E,T,j,C,S,N,P=[],O=P.concat,A=P.filter,D=P.slice,M=window.document,Z={},L={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,F=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,z=/^(?:body|html)$/i,q=/([A-Z])/g,_=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],W=M.createElement("table"),H=M.createElement("tr"),U={tr:M.createElement("tbody"),tbody:W,thead:W,tfoot:W,td:H,th:H,"*":M.createElement("div")},X=/complete|loaded|interactive/,V=/^[\w-]*$/,B={},Y=B.toString,J={},G=M.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~J.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var i,r,a;return F.test(t)&&(i=j(M.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===E&&(e=$.test(t)&&RegExp.$1),e in U||(e="*"),a=U[e],a.innerHTML=""+t,i=j.each(D.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=j(i),j.each(n,function(t,e){_.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},J.Z=function(t,e){return new d(t,e)},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&$.test(t))i=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);i=J.qsa(M,t)}else{if(e(t))return j(M).ready(t);if(J.isZ(t))return t;if(Q(t))i=s(t);else if(r(t))i=[t],t=null;else if($.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);i=J.qsa(M,t)}}return J.Z(i,t)},j=function(t,e){return J.init(t,e)},j.extend=function(t){var e,n=D.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},J.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=V.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:D.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=M.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Q,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},j.camelCase=S,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.noop=function(){},j.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},j.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},j.grep=function(t,e){return A.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),j.fn={constructor:J.Z,length:0,forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,splice:P.splice,indexOf:P.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=J.isZ(e)?e.toArray():e;return O.apply(J.isZ(this)?this.toArray():this,n)},map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(D.apply(this,arguments))},ready:function(t){return X.test(M.readyState)&&M.body?t(j):M.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===E?D.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(A.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return j(N(this.concat(j(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?D.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return r(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:j(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?j(t).filter(function(){var t=this;return P.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):j()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=j(t));n&&!(r?r.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(N(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||D.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)y(this,T,t[T]);else y(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(q,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!j.contains(M.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[S(e)]||i.getPropertyValue(e);if(Q(e)){var o={};return j.each(e,function(t,e){o[e]=r.style[S(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=x(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||C.push(t)},this),C.length&&x(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return x(this,"");C=x(this),v(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),x(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=j(this),r=v(this,t,n,x(this));r.split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!z.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(r){var o,a=this[0];return r===E?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=j(this),a.css(t,v(this,r,e,a[t]()))})}}),I.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,r,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=j.contains(M.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return j(t).remove();r.insertBefore(t,e),s&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),J.Z.prototype=d.prototype=j.fn,J.uniq=N,J.deserializeValue=w,j.zepto=J,j}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==E?"json":w.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?d(e,u,i,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",T="text/html",j=/^\s*$/,C=y.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r,u=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===u[m]&&(u[m]=t.ajaxSettings[m]);i(u),u.crossDomain||(n=y.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(r=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,r)),h(u);var d=u.dataType,v=/\?.+=\?/.test(u.url);if(v&&(d="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==d)return v||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,p);var x,w=u.accepts[d],b={},E=function(t,e){b[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,S=u.xhr(),N=S.setRequestHeader;if(p&&p.promise(S),u.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",w||"*/*"),(w=u.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(w)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&E("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)E(g,u.headers[g]);if(S.setRequestHeader=E,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=c,clearTimeout(x);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==T){d=d||l(u.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==d?(1,eval)(e):"xml"==d?e=S.responseXML:"json"==d&&(e=j.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?s(n,"parsererror",S,u,p):a(e,S,u,p)}else s(S.statusText||null,S.status?"error":"abort",S,u,p)}},o(S,u)===!1)return S.abort(),s(null,"abort",S,u,p),S;if(u.xhrFields)for(g in u.xhrFields)S[g]=u.xhrFields[g];var P="async"in u?u.async:!0;S.open(u.type,u.url,P,u.username,u.password);for(g in b)N.apply(S,b[g]);return u.timeout>0&&(x=setTimeout(function(){S.onreadystatechange=c,S.abort(),s(null,"timeout",S,u,p)},u.timeout)),S.send(u.data?u.data:null),S},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(x,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,a,s,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,i=!0,s=o||0,o=0,a=u.length,r=!0;u&&a>s;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var i=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),r?a=u.length:n&&(o=i,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(a>=i&&--a,s>=i&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||i&&!c||(e=e||[],e=[t,e.slice?e.slice():e],r?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}};return f}}(Zepto),function(t){function e(e,i){var u=e[s],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=a(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[a(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0 in this?e(this[0],i):void 0:this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var s=t.isFunction(n[i])&&n[i];a[r[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,a=s?[n]:arguments;e[r[0]+"With"](i,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(i,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){r=s},i[1^t][2].disable,i[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(i){var r,o,a,s=n.call(arguments),u=s.length,c=0,l=1!==u||i&&t.isFunction(i.promise)?u:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(u>1)for(r=new Array(u),o=new Array(u),a=new Array(u);u>c;++c)s[c]&&t.isFunction(s[c].promise)?s[c].promise().done(h(c,a,s)).fail(f.reject).progress(h(c,o,r)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(r===f||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},g=document.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(m,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",y[a=d+"transition-property"]=y[s=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:r===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,g){var x,w,b,E={},T="",j=this,C=t.fx.transitionEnd,S=!1;if(r===e&&(r=t.fx.speeds._default/1e3),g===e&&(g=0),t.fx.off&&(r=0),"string"==typeof i)E[l]=i,E[f]=r+"s",E[p]=g+"s",E[h]=d||"linear",C=t.fx.animationEnd;else{w=[];for(x in i)v.test(x)?T+=x+"("+i[x]+") ":(E[x]=i[x],w.push(n(x)));T&&(E[o]=T,w.push(o)),r>0&&"object"==typeof i&&(E[a]=w.join(", "),E[s]=r+"s",E[c]=g+"s",E[u]=d||"linear")}return b=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,b)}else t(this).unbind(C,b);S=!0,t(this).css(y),m&&m.call(this)},r>0&&(this.bind(C,b),setTimeout(function(){S||b.call(j)},1e3*(r+g)+25)),this.size()&&this.get(0).clientLeft,this.css(E),0>=r&&setTimeout(function(){j.each(function(){b.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function i(e,i,r,o){return n(e,i,0,r,function(){a.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")
}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=r(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return!(e&&!o(t,e)||n&&n.call(t,null,i)!==t)})}}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,g,v,y=0,x=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(v=a(e,"down"))||o(e))&&(g=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in g.target?g.target:g.target.parentNode),s&&clearTimeout(s),h.x1=g.pageX,h.y1=g.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(v=a(t,"move"))||o(t))&&(g=v?t:t.touches[0],i(),h.x2=g.pageX,h.y2=g.pageY,y+=Math.abs(h.x1-h.x2),x+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(v=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>x?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=x=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);
(function($){
	var e = {
	    nextAll: function(s) {
	        var $els = $(), $el = this.next()
	        while( $el.length ) {
	            if(typeof s === 'undefined' || $el.is(s)) $els = $els.add($el)
	            $el = $el.next()
	        }
	        return $els
	    },
	    prevAll: function(s) {
	        var $els = $(), $el = this.prev()
	        while( $el.length ) {
	            if(typeof s === 'undefined' || $el.is(s)) $els = $els.add($el)
	            $el = $el.prev()
	        }
	        return $els
	    }
	}
	$.extend( $.fn, e )
})(Zepto);
/*!
 * Lazy Load - jQuery/Zepto plugin for lazy loading images
 * Copyright (c) 2007-2015 Mika Tuupola
 * Licensed under the MIT license:http://www.opensource.org/licenses/mit-license.php
 * Project home:http://www.appelsiini.net/projects/lazyload
 * Version:  1.9.5
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 100,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            center          : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            callbak         : function(){}
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
            	return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            // $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                                /*center img*/
                                if(settings.center && !$self.hasClass('nocenter')){
                                	var $parent = $self.parent().css('overflow','hidden');
                                	var width = self.width,
                                		height = self.height,
                                		parentWidth = $parent.width(),
                                		parentHeight = $parent.height(),
                                		ratio = width / height,
                                		parentRatio = parentWidth / parentHeight;
                                	if(ratio > parentRatio){
                                	  $self.css({
                                	  	height:'100%',
                                	  	width:'auto',
                                	  	marginLeft:parseInt((parentWidth - parentHeight*ratio)/2)
                                	  });
                                	}else{
                                		$self.css({
                                			width:'100%',
                                			height:'auto',
                                			marginTop:parseInt((parentHeight - parentWidth/ratio)/2)
                                		});
                                	}
                                }
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            if(settings.effect){
	                            $self[settings.effect](settings.effect_speed);
                            }
                            if(typeof settings.callbak === 'function'){
                            	settings.callbak($self);
                            }
                            

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})($, window, document);

;(function(global) {
    var mapping = {}, cached = {};
    global.define = function(id, func) {
    	if(mapping[id]) {
    		throw new Error('[ "' + id + '" ] already exists, don\'t repeat the definition');
    	}
        mapping[id] = func;
    };
    global.require = function(id) {
        if(cached[id]) {
        	return cached[id];
        } else {
        	cached[id] = {};
            mapping[id](cached[id]);
            return cached[id];
        }
    };
})(this);

define('/ui',function(exports){
	var $body = $('body');
	exports.pop = function(content,fn){
		$body.addClass('open-pop');
		this.html = this.html ? this.html : $('<div class="pop">'+
					(content?content:'')+
		'</div>');
		return this.html.appendTo('body').fadeIn(300,function(){
			var $this = $(this);
			$this.off('tap').on('tap', function(e){
				if($(e.target).is('.pop-select')){
					return false;
				}else if(!$(e.target).closest('.pop-body').length){
					if(fn && (typeof fn == 'function')){
						fn(e);
					}
					$this.fadeOut(400, function(){
						$body.removeClass('open-pop');
						$this.remove();
					});
				}
			}).find('.pop-close,.pop-no,.pop-ok').off('tap').on('tap',function(e){
				if(fn && (typeof fn == 'function')){
					fn($(this).is('.pop-ok'));
				}
				$this.fadeOut(400, function(){
					$body.removeClass('open-pop');
					$this.remove();
				});
			});
		});		
	};
	exports.alert = function(content,fn){
		this.html = $('<div class="pop">'+
						'<div class="c-858484 pop-body">'+
							'<div class="pop-content">'+
								(content?content:'')+
							'</div>'+
							'<div class="pop-btn"><a class="c-858484 pop-ok" href="javascript:;">确定</a></div>'+
						'</div>'+
					'</div>');
		return exports.pop(content,fn);
	};
	exports.confirm = function(content,fn){
		this.html = $('<div class="pop">'+
						'<div class="c-858484 pop-body">'+
							'<div class="pop-content">'+
								(content?content:'')+
							'</div>'+
							'<div class="pop-btn">'+
							'<a class="c-858484 pop-close" href="javascript:;">取消</a>'+
							'<a class="c-858484 pop-ok" href="javascript:;">确定</a>'+
							'</div>'+
						'</div>'+
					'</div>');
		return exports.pop(content,fn);
	};
	exports.modal = function(modal){
		if(modal){
			$body.addClass('open-pop');
			modal && modal.fadeIn(300,function(){
				var $this = $(this);
				$this.on('tap', function(e){
					if(!$(e.target).closest('.pop-body').length){
						$this.fadeOut(400, function(){
							$body.removeClass('open-pop');
						});
					}
				}).on('tap','.pop-close',function(e){
					$this.fadeOut(400, function(){
						$body.removeClass('open-pop');
					});
				});
			});
		}
	};
	exports.destroy = function(fn){
		this.html.trigger('tap');
		if(fn && (typeof fn == 'function')){
			fn();
		}
	}
});
//导航hover
define('/navhover',function(exports){
	exports.navhover = function(container){
		// var navContainer = $('#navHover');
		var lis = container.children('li');
		var line = $('<li class="underline"></li>').appendTo(container);
		var left = container.find('li.active').position().left;
		var width = container.find('li.active').width();
		var timer;
		line.css({
			width: width,
			left: left
		});
		lis.hover(function() {
			clearTimeout(timer);
			var left = $(this).position().left;
			var width = $(this).width();
			timer = setTimeout(function(){
				line.animate({
					left: left,
					width: width
				},200);
			},100)
		},
		function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				line.animate({
					left: left,
					width: width
				},200);
			},1000)
		});
	}
});
//图片居中
define('/center',function(exports){
	exports.center = function(container){
		var container = container || $('body');
		var imgs = container.find('.center');
		imgs.each(function(index, el) {
			el = $(el);
			var img = new Image();
			var src = el.data('original');
			img.src = src;
			img.onload = function(){
				var width = this.width,
					height = this.height,
					parentWidth = el.parent().width(),
					parentHeight = el.parent().height(),
					ratio = width / height,
					parentRatio = parentWidth / parentHeight;
				if(ratio > parentRatio){
				  el.css({
				  	height:'100%',
				  	width:'auto',
				  	marginLeft:parseInt((parentWidth - parentHeight*ratio)/2)
				  });
				}else{
					el.css({
						width:'100%',
						height:'auto',
						marginTop:parseInt((parentHeight - parentWidth/ratio)/2)
					});
				}
				el.attr("src",src).css('opacity',1).parent().css('overflow','hidden');
			}
		});
	};
	exports.contain = function(container){
		var container = container || $('body');
		var imgs = container.find('.contain');
		imgs.each(function(index, el) {
			el = $(el);
			var img = new Image();
			var src = el.data('original');
			img.src = src;
			img.onload = function(){
				var width = this.width,
					height = this.height,
					parentWidth = el.parent().width(),
					parentHeight = el.parent().height(),
					ratio = width / height,
					parentRatio = parentWidth / parentHeight;
				if(ratio > parentRatio){
				  el.css({
				  	width:'100%',
				  	height:'auto',
				  	marginTop:parseInt((parentHeight - parentWidth/ratio)/2)
				  });
				}else{
					el.css({
						width:'auto',
						height:'100%',
						marginLeft:parseInt((parentWidth - parentHeight*ratio)/2)
					});
				}
				el.attr("src",src).css('opacity',1).parent().css('overflow','hidden');
			}
		});
	}
});
define('/uploadImg',function(exports){
	exports.upload = function(el,url,cb){
		// el = el[0];
		var files = el.files;
		if(el.value && files.length > 0){
			if(files.length > 20){
				cb && cb.tips('最多上传10张哦');
				return false;
			}
			var formData = new FormData();
			for (var i = files.length - 1; i >= 0; i--) {
				if(files[i].size / 1024 > 5120 || !/(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF)$/.test(files[i].type)){
					cb && cb.tips('上传失败，可能是图片太大，只支持png/jpg/gif格式的图片哦');
					return false;
				}
				formData.append('file'+i, files[i]);
			};
			$.ajax({
			    url: url,
			    type: 'POST',
			    dataType:'json',
			    beforeSend: cb && cb.before,
			    success: function(data){
			    	cb && cb.success(data);
			    },
			    error: cb && cb.tips,
			    complete:cb && cb.complete,
			    data: formData,
			    cache: false,
			    contentType: false,
			    processData: false
			});
		}
		var _document = $('<div></div>');
		_document.append($(el).clone());
		$(el).replaceWith(_document.html());
		_document = null;
	}
});
define('/verify',function(exports){
	exports.filter = function(value){
		var params = {
			phone:['phone','mobile'],
			verifycode:['verifycode','verify'],
			// checknull:['username','birthday','sex','address'],
			select:['types','region_id','region_city_id','region_county_id','region_quanx_id'],
			password:['password','passwd','set_passwd'],
			repassword:['repeat_password'],
			// address:['address'],
			zipcode:['zipcode']
		}
		for(var key in params){
			if(params[key].indexOf(value) > -1){
				return exports.verify[key];
			}
		}
		return exports.verify['checknull'];
	};
	exports.verify = {
		// tips:'',
		// account:function(value){
		// 	value = $.trim(value);
		// 	if(value == ''){
		// 		this.tips = '请输入账号';
		// 		return false;
		// 	}else{
		// 		return true;
		// 	}
		// },
		select:function(value){
			if(value == 0){
				return false;
			}
			return true;
		},
		password:function(value){
			value = $.trim(value);
			if(value == ''){
				// this.tips = '请输入密码';
				return false;
			}else if(value.length < 6 || value.length > 25){
				// this.tips = '密码长度大于6位小于25位';
				return 0;
			}
			this.pwd = value;
			return true;
		},
		phone:function(value){
			value = $.trim(value);
			if(value == ''){
				// this.tips = '请输入手机号';
				return false;
			}else if(!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)){
				// this.tips = '请输入正确手机号';
				return 0;
			}
			return true;
		},
		repassword:function(value){
			value = $.trim(value);
			if(value == ''){
				return false;
			}else{
				if(value != this.pwd){
					// this.tips = '确认密码不相同';
					return 0;
				}
			};
			return true;
		},
		verifycode:function(value){
			value = $.trim(value);
			if(value == ''){
				// this.tips = '请输入验证码';
				return false;
			}else if(!/^\d{6}$/.test(value)){
				// this.tips = '验证码必须是6位数字';
				return 0;
			}else{
				return true;
			}
		},
		zipcode:function(value){
			value = $.trim(value);
			if(value == ''){
				// this.tips = '请填写邮政编码';
				return false;
			}else if(!/^[0-9]{6}$/.test(value)){
				// this.tips = '请填写正确邮政编码';
				return 0;
			}else{
				return true;
			}
		},
		address:function(value){
			value = $.trim(value);
			if(value == ''){
				// this.tips = '请填写详细地址';
				return false;
			}else if(value.length < 5 || value.length > 100){
				// this.tips = '请填写有效的详细地址';
				return 0;
			}else{
				return true;
			}
		},
		// username:function(value){
		// 	value = $.trim(value);
		// 	if(value == ''){
		// 		this.tips = '请填写姓名';
		// 		return false;
		// 	}else{
		// 		return true;
		// 	}
		// },
		checknull:function(value){
			value = $.trim(value);
			if(value == ''){
				return false;
			}else{
				return true;
			}
		}
	};
});
define('/storage',function(exports){
	var getStorage = function() {
		var _localStorage;
		try{
			/* 在Android 4.0下，如果webview没有打开localStorage支持，在读取localStorage对象的时候会导致js运行出错，所以要放在try{}catch{}中 */
			_localStorage = window['localStorage'];
		} catch(e){}
		return _localStorage;
	};
	exports.Storage = function(key, value) {
		var storage = getStorage();
		if (storage) {
			if ('undefined' === typeof value) {
				value = storage.getItem(key);
				return value && JSON.parse(value);
			} else {
				storage.setItem(key, JSON.stringify(value));
			}
		}
	};
	/**
	 * 清除本地存贮数据
	 * @param {String} prefix 可选，如果包含此参数，则只删除包含此前缀的项，否则清除全部缓存
	 */
	exports.clear = function(prefix) {
		var storage = getStorage();
		if (storage) {
			if (prefix) {
				for (var key in storage) {
					if (0 === key.indexOf(prefix)) {
						storage.removeItem(key);
					}
				}
			} else {
				storage.clear();
			}
		}
	};
});
$(function(){
	var App = {
		init:function(){
			this.tabContainer = $('#tabContainer');
			this.slideTab = $('#slideTab');
			this.ui = require('/ui');
			require('/center').center();
			// App.slideNav();
			App.bindEvent();
			$(".lazy").lazyload();
		},
		bindEvent:function(){
			var $body = $('body');
			$body.on('tap','.pop-select',function(e){
				$(this).toggleClass('active');
			});
			// 焦点图视差滚动
			// var $focusWrap = $('.index-focus');
			var $navBtn = $('#navBtn');
			// $(window).on('scroll',function(e){
			//     // var scrollTop = $('body').scrollTop() || $(document).scrollTop();
			//     var scrollLeft = $('body').scrollLeft() || $(document).scrollLeft();
			//     if($navBtn.length){

			//     	if(scrollLeft > 0){
			//     		$body.removeClass('aside');
			//     	}
			//     }
			// });
			//$(window).on('orientationchange',function(e){
            //    require('/center').center();
            //});

			//select选项
			$('.select select').on('change',function(e){
				$(this).siblings('span').html($(this).children('option[value="'+$(this).val()+'"]').html());
			}).trigger('change');
			// input Date选项...
			
			//input focus
			// $('.section-label').on('focus','input[type=text]',function(e){
			// 	var val = $(this).val();
			// 	$(this).val(val).focus();【
			// });
            // aside侧滑
            $navBtn.on('tap',function(e){
            	// setTimeout(function(){
            		$body.toggleClass('aside');
            	// 	clearTimeout(timer);
            	// },200)
            })
            
            $body.on('tap','.nav',function(e){
            	if(!$(e.target).is('a')){
        			setTimeout(function(){
        		    	$body.removeClass('aside');
        				// clearTimeout(timer);
        			},300);
        			// alert('a');
            	}
            }).on('swipeLeft',function(e){
            	$body.removeClass('aside');
            });

			// item
			var $section = $('#section');
			$section.on('tap','.section-item',function(e){
				$(this).toggleClass('active').next('.section-content').toggle(400);
			});
			
			//喜欢
			$('.show-like').on('tap',function(e){
				var $this = $(this);
				var userid = $(this).data('userid');
				var atlasid = $(this).data('atlasid');
				if(!userid){
					App.ui.modal($('.pop-login'));
					return false;
				}
				$.post('/like','user_id='+userid+'&atlas_id='+atlasid,function(data){
					if(data.code == 200){
						$this.toggleClass('active');
						$this.find('span').html(data.data);
					}else{
						App.ui.alert(data.message);
					}
				},'json').fail(function(error){
					App.ui.alert(error);
				})
				
			});
		}
	}
	App.init();
})