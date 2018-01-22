(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={sa:!0},ea={};try{ea.__proto__=da;ca=ea.sa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function pa(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function qa(){}
function ra(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function sa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==sa(a)}
function ta(a){var b=sa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==sa(a)}
function va(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var wa="closure_uid_"+(1E9*Math.random()>>>0),xa=0;function ya(a,b,c){return a.call.apply(a.bind,arguments)}
function za(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=ya:x=za;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Va=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var Ba=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Da=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Ea(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Fa(a,b){var c=Ba(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ga(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ha(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ja(a){if(!Ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(La,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Qa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ra,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Sa,"&#0;"));return a}
var La=/&/g,Ma=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=/\x00/g,Ka=/[\x00&<>"']/;function Ta(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ua;a:{var Va=p.navigator;if(Va){var Wa=Va.userAgent;if(Wa){Ua=Wa;break a}}Ua=""}function D(a){return-1!=Ua.indexOf(a)}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a,b){var c=ta(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Za(a){var b=$a,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ab(a){for(var b in a)return!1;return!0}
function bb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function cb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var fb=D("Opera"),gb=D("Trident")||D("MSIE"),hb=D("Edge"),ib=D("Gecko")&&!(-1!=Ua.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),jb=-1!=Ua.toLowerCase().indexOf("webkit")&&!D("Edge");function kb(){var a=p.document;return a?a.documentMode:void 0}
var lb;a:{var mb="",nb=function(){var a=Ua;if(ib)return/rv:([^\);]+)(\)|;)/.exec(a);if(hb)return/Edge\/([\d\.]+)/.exec(a);if(gb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(fb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nb&&(mb=nb?nb[1]:"");if(gb){var ob=kb();if(null!=ob&&ob>parseFloat(mb)){lb=String(ob);break a}}lb=mb}var qb=lb,rb;var sb=p.document;rb=sb&&gb?kb()||("CSS1Compat"==sb.compatMode?parseInt(qb,10):5):void 0;var tb=!gb||9<=Number(rb);function ub(){this.b="";this.g=vb}
ub.prototype.W=!0;ub.prototype.J=function(){return this.b};
function wb(a){return a instanceof ub&&a.constructor===ub&&a.g===vb?a.b:"type_error:TrustedResourceUrl"}
var vb={};function E(){this.b="";this.g=xb}
E.prototype.W=!0;E.prototype.J=function(){return this.b};
function yb(a){return a instanceof E&&a.constructor===E&&a.g===xb?a.b:"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof E)return a;a=a.W?a.J():String(a);zb.test(a)||(a="about:invalid#zClosurez");return Bb(a)}
var xb={};function Bb(a){var b=new E;b.b=a;return b}
Bb("about:blank");function Cb(){this.b=""}
Cb.prototype.W=!0;Cb.prototype.J=function(){return this.b};
function Db(a){var b=new Cb;b.b=a;return b}
Db("<!DOCTYPE html>");Db("");Db("<br>");function Eb(a,b){var c=b instanceof E?b:Ab(b);a.href=yb(c)}
function Fb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?wb(b):b instanceof ub?wb(b):b instanceof E?yb(b):Ab(b).J()}
function Gb(a,b){a.src=wb(b)}
;function Hb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
Hb.prototype.equals=function(a){return a instanceof Hb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
Hb.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Hb.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Hb.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ib(a,b){this.width=a;this.height=b}
l=Ib.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Jb(a){var b=document;return r(a)?b.getElementById(a):a}
function Kb(a,b){Xa(b,function(b,d){b&&b.W&&(b=b.J());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Lb.hasOwnProperty(d)?a.setAttribute(Lb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Lb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Mb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!tb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ja(g.name),'"');if(g.type){f.push(' type="',Ja(g.type),'"');var h={};eb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Kb(f,g));2<d.length&&Nb(e,f,d);return f}
function Nb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!ta(f)||va(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(va(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ua(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ga(f):f,d)}}}
function Ob(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pb(a){Qb();var b=new ub;b.b=a;return b}
var Qb=qa;var Rb=document,F=window;function Sb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tb=(new Date).getTime();function Ub(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Vb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,u;a();return{reset:a,update:c,digest:d,ua:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Wb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Xb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Xb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xb(a){var b=Vb();b.update(a);return b.ua().toLowerCase()}
;function Yb(a){this.b=a||{cookie:""}}
l=Yb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ia(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ia(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Zb=new Yb("undefined"==typeof document?null:document);Zb.g=3950;function $b(){var a=[],b=Ub(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Yb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Yb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Wb(Ub(d),b,a||null)].join(" "):null}return null}
;function ac(a,b){this.f=a;this.h=b;this.g=0;this.b=null}
ac.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function bc(a,b){a.h(b);100>a.g&&(a.g++,b.next=a.b,a.b=b)}
;function cc(a){p.setTimeout(function(){throw a;},0)}
var dc;
function ec(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ia;c.ia=null;a()}};
return function(a){d.next={ia:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function fc(){this.g=this.b=null}
var hc=new ac(function(){return new gc},function(a){a.reset()});
fc.prototype.add=function(a,b){var c=hc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
fc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function gc(){this.next=this.scope=this.b=null}
gc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
gc.prototype.reset=function(){this.next=this.scope=this.b=null};function ic(a,b){jc||kc();lc||(jc(),lc=!0);mc.add(a,b)}
var jc;function kc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);jc=function(){a.then(nc)}}else jc=function(){var a=nc;
!ua(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(dc||(dc=ec()),dc(a)):p.setImmediate(a)}}
var lc=!1,mc=new fc;function nc(){for(var a;a=mc.remove();){try{a.b.call(a.scope)}catch(b){cc(b)}bc(hc,a)}lc=!1}
;function G(){this.g=this.g;this.B=this.B}
G.prototype.g=!1;G.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function oc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function pc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function qc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ta(d)?qc.apply(null,d):pc(d)}}
;function rc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function sc(a,b){if(a.classList)var c=a.classList.contains(b);else c=rc(a),c=0<=Ba(c,b);return c}
function tc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):sc(a,"inverted-hdpi")&&(a.className=Ca(rc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var uc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function vc(){}
vc.prototype.next=function(){throw uc;};
vc.prototype.T=function(){return this};
function wc(a){if(a instanceof vc)return a;if("function"==typeof a.T)return a.T(!1);if(ta(a)){var b=0,c=new vc;c.next=function(){for(;;){if(b>=a.length)throw uc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function xc(a,b){if(ta(a))try{C(a,b,void 0)}catch(c){if(c!==uc)throw c;}else{a=wc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==uc)throw c;}}}
function yc(a){if(ta(a))return Ga(a);a=wc(a);var b=[];xc(a,function(a){b.push(a)});
return b}
;(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",qa,b);p.removeEventListener("test",qa,b);return a})();function zc(a){var b=[];Ac(new Bc,a,b);return b.join("")}
function Bc(){}
function Ac(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ac(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Cc(d,c),c.push(":"),Ac(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Cc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Dc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ec=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Cc(a,b){b.push('"',a.replace(Ec,function(a){var b=Dc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Dc[a]=b);return b}),'"')}
;function Fc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Gc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=qa)try{var c=this;a.call(b,function(a){Hc(c,2,a)},function(a){Hc(c,3,a)})}catch(d){Hc(this,3,d)}}
function Ic(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Ic.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Jc=new ac(function(){return new Ic},function(a){a.reset()});
function Kc(a,b,c){var d=Jc.get();d.h=a;d.g=b;d.context=c;return d}
function Lc(a){return new H(function(b,c){c(a)})}
function Mc(a,b,c){Nc(a,b,c,null)||ic(y(b,a))}
function Oc(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Mc(e,b,c)})}
function Pc(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Z:!0,value:f}:{Z:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Mc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return Qc(this,ua(a)?a:null,ua(b)?b:null,c)};
Fc(H);function Rc(a,b){var c=Kc(b,b,void 0);c.f=!0;Sc(a,c);return a}
function Tc(a,b){return Qc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&ic(function(){var b=new Uc(a);Vc(this,b)},this)};
function Vc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Vc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Wc(c),Xc(c,e,3,b)))}a.f=null}else Hc(a,3,b)}
function Sc(a,b){a.g||2!=a.b&&3!=a.b||Yc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Qc(a,b,c,d){var e=Kc(null,null,null);e.b=new H(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Uc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Sc(a,e);return e.b}
H.prototype.o=function(a){this.b=0;Hc(this,2,a)};
H.prototype.w=function(a){this.b=0;Hc(this,3,a)};
function Hc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Nc(c,a.o,a.w,a)||(a.m=c,a.b=b,a.f=null,Yc(a),3!=b||c instanceof Uc||Zc(a,c)))}
function Nc(a,b,c,d){if(a instanceof H)return Sc(a,Kc(b||qa,c||null,d)),!0;if(Gc(a))return a.then(b,c,d),!0;if(va(a))try{var e=a.then;if(ua(e))return $c(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function $c(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Yc(a){a.j||(a.j=!0,ic(a.B,a))}
function Wc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
H.prototype.B=function(){for(var a;a=Wc(this);)Xc(this,a,this.b,this.m);this.j=!1};
function Xc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,ad(b,c,d);else try{b.f?b.h.call(b.context):ad(b,c,d)}catch(e){bd.call(null,e)}bc(Jc,b)}
function ad(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Zc(a,b){a.i=!0;ic(function(){a.i&&bd.call(null,b)})}
var bd=cc;function Uc(a){B.call(this,a)}
A(Uc,B);Uc.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(I,G);l=I.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function cd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ea(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.H(b)}}
l.H=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=qa):(c&&Fa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];dd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.H(c)}}return 0!=e}return!1};
function dd(a,b,c){ic(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.H,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){I.u.l.call(this);this.clear();this.h.length=0};function ed(a){this.b=a}
ed.prototype.set=function(a,b){q(b)?this.b.set(a,zc(b)):this.b.remove(a)};
ed.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ed.prototype.remove=function(a){this.b.remove(a)};function fd(a){this.b=a}
A(fd,ed);function gd(a){this.data=a}
function hd(a){return!q(a)||a instanceof gd?a:new gd(a)}
fd.prototype.set=function(a,b){fd.u.set.call(this,a,hd(b))};
fd.prototype.g=function(a){a=fd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
fd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function id(a){this.b=a}
A(id,fd);id.prototype.set=function(a,b,c){if(b=hd(b)){if(c){if(c<z()){id.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}id.u.set.call(this,a,b)};
id.prototype.g=function(a){var b=id.u.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())id.prototype.remove.call(this,a);else return b}};function jd(a){this.b=a}
A(jd,id);function kd(){}
;function ld(){}
A(ld,kd);ld.prototype.clear=function(){var a=yc(this.T(!0)),b=this;C(a,function(a){b.remove(a)})};function md(a){this.b=a}
A(md,ld);l=md.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.T=function(a){var b=0,c=this.b,d=new vc;d.next=function(){if(b>=c.length)throw uc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function nd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(nd,md);function od(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(od,md);function pd(a){if(!ua(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function qd(){var a=null;return Tc(new H(function(b,c){a=pd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var rd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(rd)}
function sd(a){return a?decodeURI(a):a}
function td(a,b,c){if(w(b))for(var d=0;d<b.length;d++)td(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ud(a){var b=[],c;for(c in a)td(c,a[c],b);return b.join("&")}
function vd(a,b){var c=ud(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var wd=!1,xd="";function yd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(wd=!0,a.description)){xd=yd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){wd=!0;xd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],wd=!(!a||!a.enabledPlugin))){xd=yd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");wd=!0;xd=yd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");wd=!0;xd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),wd=!0,xd=yd(b.GetVariable("$version"))}catch(c){}})();
var zd=wd,Ad=xd;function Bd(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");Fb(d,b,"preload");c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)}
;var Dd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ed=/\.(cn|com\.bi|do|sl)$/;function Fd(a){return Dd.test(a)&&!Ed.test(a)}
var Gd=p;function Hd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];L[3]>=z()&&b.push("adsid="+encodeURIComponent(L[1]));return a+"?"+b.join("&")}
var L,M;function Id(){Gd=p;L=Gd.googleToken=Gd.googleToken||{};var a=z();L[1]&&L[3]>a&&0<L[2]||(L[1]="",L[2]=-1,L[3]=-1,L[4]="",L[6]="");M=Gd.googleIMState=Gd.googleIMState||{};Fd(M[1])||(M[1]=".google.com");w(M[5])||(M[5]=[]);"boolean"==typeof M[6]||(M[6]=!1);w(M[7])||(M[7]=[]);pa(M[8])||(M[8]=0)}
function Jd(){Id();return L[1]}
var N={ka:function(){return 0<M[8]},
Ja:function(){M[8]++},
Ka:function(){0<M[8]&&M[8]--},
La:function(){M[8]=0},
shouldRetry:function(){return!1},
ja:function(){return M[5]},
ha:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
fa:function(){if(!N.ka()){var a=p.document,b=function(b){var c=Hd(b);Bd(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
c=Pb(c);Gb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),N.Ja()}catch(g){}},c=M[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Kd(a){Id();var b=Gd.googleToken[5]||0;a&&(0!=b||L[3]>=z()?N.ha(a):(N.ja().push(a),N.fa()));L[3]>=z()&&L[2]>=z()||N.fa()}
function Ld(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),k=b["1p_jar"]||"";b=b.pucrd||"";Id();1==e?N.La():N.Ka();if(!f&&N.shouldRetry())Fd(".google.com")&&(M[1]=".google.com"),N.fa();else{var m=Gd.googleToken=Gd.googleToken||{},u=0==e&&f&&r(f)&&pa(g)&&0<g&&pa(h)&&0<h&&r(k),K=!(L[3]>=z())&&0!=e;if(u||K){K=z();g=K+1E3*g;h=K+1E3*h;if(1E-5>Math.random()){K=
"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e;p.google_image_requests||(p.google_image_requests=[]);var pb=p.document.createElement("img");pb.src=K;p.google_image_requests.push(pb)}m[5]=e;m[1]=f;m[2]=g;m[3]=h;m[4]=k;m[6]=b;Id()}if(u||!N.ka()){e=N.ja();for(f=0;f<e.length;f++)N.ha(e[f]);e.length=0}}};
Kd(a)}
;function Md(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Nd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Nd,void 0);function P(a){Md(Nd,arguments)}
function Q(a,b){return a in Nd?Nd[a]:b}
function Od(a){return Q(a,void 0)}
function Pd(){return Q("PLAYER_CONFIG",{})}
;function Qd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function Rd(a){R(a,"WARNING",void 0,void 0,void 0)}
;function T(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function Sd(a){a&&(a.dataset?a.dataset[Td("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ud(a,b){return a?a.dataset?a.dataset[Td(b)]:a.getAttribute("data-"+b):null}
var Vd={};function Td(a){return Vd[a]||(Vd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){ua(a)&&(a=Qd(a));return window.setTimeout(a,b)}
function Wd(a){window.clearTimeout(a)}
;var Xd=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.H;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",Xd,void 0);var Yd=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Yd,void 0);var Zd=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Zd,void 0);var $d=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",$d,void 0);
function ae(a,b){var c=be();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Yd[d]&&b.apply(window,c)};
try{$d[a]?f():U(f,0)}catch(g){R(g)}},void 0);
Yd[d]=!0;Zd[a]||(Zd[a]=[]);Zd[a].push(d);return d}return 0}
function ce(a){var b=be();b&&(pa(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Yd[a]}))}
function de(a,b){var c=be();c&&c.publish.apply(c,arguments)}
function ee(a){var b=be();if(b)if(b.clear(a),a)fe(a);else for(var c in Zd)fe(c)}
function be(){return v("ytPubsubPubsubInstance")}
function fe(a){Zd[a]&&(a=Zd[a],C(a,function(a){Yd[a]&&delete Yd[a]}),a.length=0)}
;var ge=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,he=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ie(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ge,""),c=c.replace(he,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else je(a,b)}
function je(a,b){var c=ke(a),d=document.getElementById(c),e=d&&Ud(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=ae(c,b);var g=""+(b[wa]||(b[wa]=++xa));le[g]=e}f||(d=me(a,c,function(){Ud(d,"loaded")||(Sd(d),de(c),U(y(ee,c),0))}))}}
function me(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Gb(d,Pb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ne(a){a=ke(a);var b=document.getElementById(a);b&&(ee(a),b.parentNode.removeChild(b))}
function oe(a,b){if(a&&b){var c=""+(b[wa]||(b[wa]=++xa));(c=le[c])&&ce(c)}}
function ke(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ta(a)}
var le={};var pe=null;function qe(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?ie(b,function(){window.botguard?re(c):(ne(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?re(c):R(Error("Unable to load Botguard from JS"),"WARNING"))}
function re(a){pe=new window.botguard.bg(a);T("botguard_periodic_refresh")&&O()}
function se(){return null!=pe}
function te(){return pe?pe.invoke():null}
;z();var ue=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ve(){if(!ue)return null;var a=ue();return"open"in a?a:null}
function we(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function xe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ha(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var ye={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ze=!1;
function Ae(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=sd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?sd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in ye){if((e=d=Q(ye[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=sd(J(a)[3]||null);e=h?(g=g[h])?0<=Ba(g,e):!1:!0}e&&(b[f]=d)}return b}
function Be(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ce(a,b);var d=De(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Wd(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.C&&b.C.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.la&&0<b.timeout&&(f=U(function(){e||(e=!0,Wd(f),b.la.call(b.context||p))},b.timeout))}else Ee(a,b)}
function Ee(a,b){var c=b.format||"JSON";a=Ce(a,b);var d=De(a,b),e=!1,f,g=Fe(a,function(a){if(!e){e=!0;f&&Wd(f);var d=we(a),g=null;if(d||400<=a.status&&500>a.status)g=Ge(c,a,b.Xa);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.C&&b.C.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ea&&b.ea.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.K&&0<b.timeout&&(f=U(function(){e||(e=!0,g.abort(),Wd(f),b.K.call(b.context||p,g))},b.timeout))}
function Ce(a,b){b.za&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Ua;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=xe(f[1]||"");for(var g in d)f[g]=d[g];a=vd(c,f)+e}return a}
function De(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=Od("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Ya||sd(J(a)[3]||null)&&!b.withCredentials&&sd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=xe(e),eb(e,f),e=b.ma&&"JSON"==b.ma?JSON.stringify(e):ud(e));f=e||f&&!ab(f);!ze&&f&&"POST"!=b.method&&(ze=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ge(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?He(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ie(a)})}c&&Je(d);
return d}
function Je(a){if(va(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b]);a[c]=d}else Je(a[b])}}
function He(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ie(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ke(a,b){b.method="POST";b.A||(b.A={});Ee(a,b)}
function Fe(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qd(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ve();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=Ae(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Le={},Me=0;function Ne(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ua,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Mb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?Fe(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Fe(a,b,"GET","",d):Oe(a,b))}
function Oe(a,b){var c=new Image,d=""+Me++;Le[d]=c;c.onload=c.onerror=function(){b&&Le[d]&&b();delete Le[d]};
c.src=a}
;var Pe={},Qe=0;
function Re(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Qe)){e=a.stacktrace;c=a.columnNumber;d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(K){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(K){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Pe[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Ua:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},A:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.A.stack=k);for(var m in f)h.A["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Ee("/error_204",h);Pe[a.message]=!0;Qe++}}}
;var Se=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Se,void 0);function Te(a){Md(Se,arguments)}
;function Ue(){}
function Ve(a,b){return We(a,1,b)}
;function Xe(){}
n(Xe,Ue);function We(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Ye(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Wd(a)}}
Xe.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Xe.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
ra(Xe);Xe.getInstance();var Ze=[],$e=!1;function af(){if("1"!=Ya(Pd(),"args","privembed")||!T("do_not_set_cookies_for_ads_on_youtube_nocookie")){var a=function(){$e=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
ie("//static.doubleclick.net/instream/ad_status.js",a);Ze.push(Ve(function(){$e||"google_ad_status"in window||(oe("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function bf(){return parseInt(Q("DCLKSTAT",0),10)}
;var cf=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++cf},void 0);var df={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ef(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in df||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.b=a.pageX;this.g=a.pageY}}
function ff(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
ef.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ef.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ef.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $a=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",$a,void 0);var gf=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",gf,void 0);function hf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Za(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hf(a,b,c,d);if(e)return e;e=++gf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new ef(d);if(!Ob(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ef(b);
b.currentTarget=a;return c.call(a,b)};
g=Qd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);$a[e]=[a,b,c,g,d];return e}
function jf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in $a){var b=$a[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete $a[a]}}))}
;function kf(a){this.o=a;this.b=null;this.i=0;this.m=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.D=V(window,"mousemove",x(this.F,this));a=x(this.w,this);ua(a)&&(a=Qd(a));this.G=window.setInterval(a,25)}
A(kf,G);kf.prototype.F=function(a){q(a.b)||ff(a);var b=a.b;q(a.g)||ff(a);this.b=new Hb(b,a.g)};
kf.prototype.w=function(){if(this.b){var a=O();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
kf.prototype.l=function(){window.clearInterval(this.G);jf(this.D)};var lf={};
function mf(a){if(null==v("_lact",window)){var b=parseInt(Q("LACT"),10);b=isFinite(b)?z()-Math.max(b,0):-1;t("_lact",b,window);t("_fact",b,window);-1==b&&W();V(document,"keydown",W);V(document,"keyup",W);V(document,"mousedown",W);V(document,"mouseup",W);T("lact_local_listeners")||a?(V(window,"resize",function(){nf("resize",200)}),V(window,"scroll",function(){nf("scroll",200)}),new kf(function(){nf("mouse",100)}),V(document,"touchstart",W),V(document,"touchend",W)):(ae("page-mouse",W),ae("page-scroll",W),
ae("page-resize",W))}}
function nf(a,b){lf[a]||(lf[a]=!0,Ve(function(){W();lf[a]=!1},b))}
function W(){null==v("_lact",window)&&mf();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function of(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function pf(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
function qf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=qf(a.b));return b}
var rf=1;function sf(){if(!tf&&!uf||!window.JSON)return null;try{var a=tf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=uf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var uf,vf=new nd;uf=vf.isAvailable()?new jd(vf):null;var tf,wf=new od;tf=wf.isAvailable()?new jd(wf):null;function xf(){var a=Q("ROOT_VE_TYPE",void 0);return a?new pf(void 0,a,void 0):null}
function yf(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
;function zf(a,b,c){Zb.set(""+a,b,c,"/","youtube.com",!1)}
;function Af(a){if(a){a=a.itct||a.ved;var b=v("yt.logging.screen.storeParentElement");a&&b&&b(new pf(a))}}
;function Bf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=sd(J(window.location.href)[3]||null);f&&e.push(f);f=sd(J(d)[3]||null);if(0<=Ba(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
yf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ta(d).toString(36),e=b?ud(b):"",zf(d,e,h||5),Af(b))}else h="ST-"+Ta(d).toString(36),d=b?ud(b):"",zf(h,d,5),Af(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=vd(a,k)+m;a=a instanceof E?a:Ab(a);c.href=yb(a)}return!0}
;t("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||se,void 0);t("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||te,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||bf,void 0);t("yt.player.exports.navigate",v("yt.player.exports.navigate")||Bf,void 0);t("yt.util.activity.init",v("yt.util.activity.init")||mf,void 0);t("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||of,void 0);
t("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||W,void 0);var Cf={log_event:"events",log_interaction:"interactions"},Df=Object.create(null);Df.log_event="GENERIC_EVENT_LOGGING";Df.log_interaction="INTERACTION_LOGGING";var Ef={},Ff={},Gf=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",X,void 0);var Hf=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Hf,void 0);var If=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",If,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Jf(a,b){Ff[a.endpoint]=b;if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Hf[a.V.token]=d;c=Kf(a.endpoint,a.V.token)}else c=Kf(a.endpoint);c.push(a.payload);c.length>=(Number(T("web_logging_max_batch")||0)||20)?Lf():Mf()}
function Lf(){Wd(Gf);if(!ab(X)){for(var a in X){var b=Ef[a];if(!b){var c=Ff[a];if(!c)continue;b=new c;Ef[a]=b}c=void 0;var d=a,e=b,f=Cf[d],g=If[d]||{};If[d]=g;b=Math.round(O());for(c in X[d]){var h=e.b;h={client:{hl:h.Ca,gl:h.Ba,clientName:h.Aa,clientVersion:h.innertubeContextClientVersion}};Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=Kf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;
var k=Hf[c];if(k)a:{var m=h,u=c;if(k.videoId)var K="VIDEO";else if(k.playlistId)K="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:K}]}delete Hf[c];Nf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}ab(X)||Mf()}}
function Mf(){Wd(Gf);Gf=U(Lf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function Kf(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Of(a,b,c,d){var e=Pf,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:of())};Jf({endpoint:"log_event",payload:f,V:d},e)}
;function Qf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Pf(a){this.b=a||{innertubeApiKey:Od("INNERTUBE_API_KEY"),innertubeApiVersion:Od("INNERTUBE_API_VERSION"),Aa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Od("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ca:Od("INNERTUBE_CONTEXT_HL"),Ba:Od("INNERTUBE_CONTEXT_GL"),Da:Od("INNERTUBE_HOST_OVERRIDE")||""}}
function Nf(a,b,c){var d={};!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":Q("VISITOR_DATA","")},method:"POST",A:c,ma:"JSON",K:function(){d.K()},
la:d.K,C:function(a,b){d.C&&d.C(b)},
ab:function(a){d.C&&d.C(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Za:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=$b();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));var g="",h=a.b.Da;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);a=""+g+Qf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;try{T("use_fetch_for_op_xhr")?Be(a,e):Ke(a,e)}catch(k){if("InvalidAccessError"==k)R(Error("An extension is blocking network request."),"WARNING");else throw k;}}
;function Rf(a,b,c){Sf({attachChild:{csn:a,parentVisualElement:qf(b),visualElements:[qf(c)]}})}
function Sf(a){var b=Pf;a.eventTimeMs=Math.round(O());a.lactMs=of();Jf({endpoint:"log_interaction",payload:a},b)}
;function Tf(a){a=a||{};this.url=a.url||"";this.args=a.args||cb(Uf);this.assets=a.assets||{};this.attrs=a.attrs||cb(Vf);this.params=a.params||cb(Wf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Uf={enablejsapi:1},Vf={},Wf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Xf(a){var b=new Tf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==sa(d)?cb(d):d}return b}
;function Yf(){G.call(this);this.b=[]}
n(Yf,G);Yf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Wa)}G.prototype.l.call(this)};var Zf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $f(a){a=a||"";if(window.spf){var b=a.match(Zf);spf.style.load(a,b?b[1]:"",void 0)}else ag(a)}
function ag(a){var b=bg(a),c=document.getElementById(b),d=c&&Ud(c,"loaded");d||c&&!d||(c=cg(a,b,function(){Ud(c,"loaded")||(Sd(c),de(b),U(y(ee,b),0))}))}
function cg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pb(a);Fb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bg(a){var b=document.createElement("A");a=Bb(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ta(b)}
;var dg=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",dg,void 0);var eg=0;function fg(a){dg[a]=dg[a]||{count:0};var b=dg[a];b.count++;b.time=O();eg||(eg=We(gg,0,5E3));return 10<b.count?(11==b.count&&Re(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function gg(){var a=O(),b;for(b in dg)6E4<a-dg[b].time&&delete dg[b];eg=0}
;function hg(a,b){this.version=a;this.args=b}
;function ig(a){this.topic=a}
ig.prototype.toString=function(){return this.topic};var jg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.H;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",jg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function kg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function lg(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function mg(){var a=lg(),b;for(b in a)Ye(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function ng(a,b){hg.call(this,1,arguments)}
n(ng,hg);function og(a,b){hg.call(this,1,arguments)}
n(og,hg);var pg=new ig("aft-recorded"),qg=new ig("timing-sent");var rg=z().toString();var sg={vc:!0},tg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},ug="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),xg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),yg=!1;
function zg(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}b=Ag();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=lg();if(c=b[a])Ye(c),b[a]=0;Bg()["tick_"+a]=void 0;O();T("csi_on_gel")?(b=Cg(),"_start"==a?fg("baseline_"+b)||Of("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):fg("tick_"+a+"_"+b)||Of("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=
Od("TIMING_ACTION"),a=Ag(),v("ytglobal.timingready_")&&b&&a._start&&(b=Dg()))){T("tighter_critical_section")&&!yg&&(kg(pg,new ng(Math.round(b-a._start),void 0)),yg=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Eg()}}
function Fg(){var a=Gg().info.yt_lt="hot_bg";Bg().info_yt_lt=a;if(T("csi_on_gel"))if("yt_lt"in tg){var b={},c=tg.yt_lt;0<=Ba(xg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Cg();c=Object.keys(b).join("");fg("info_"+c+"_"+a)||(b.clientActionNonce=a,Of("latencyActionInfo",b,void 0,void 0))}else 0<=Ba(ug,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Dg(){var a=Ag();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Eg(){mg();if(!T("csi_on_gel")){var a=Ag(),b=Gg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in sg){var f=Da(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Hg(f,e),Ig(),Jg(),Kg(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:Q("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+v("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Dg();Lg()&&"youtube"==g&&(Fg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=O();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Hg(f,e,void 0);kg(qg,new og(b.aft+(h||0),void 0))}}}
var Jg=x(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||qa,Y);
function Hg(a,b,c){if(T("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ne(a,void 0,void 0,void 0,f)}catch(g){Ne(a,void 0,void 0,void 0,f)}}else Ne(a);Kg(!0,c)}
function Cg(){var a=Gg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(rg)for(b=1,c=0;c<rg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^rg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Gg().nonce=a}return a}
function Ag(){return Gg().tick}
function Bg(){var a=Gg();"gel"in a||(a.gel={});return a.gel}
function Gg(){return v("ytcsi.data_")||Ig()}
function Ig(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Kg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Lg(){var a=Ag(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Gg().info.yt_pvis}
;function Mg(a,b){G.call(this);this.m=this.R=a;this.G=b;this.o=!1;this.f={};this.O=this.F=null;this.w=new I;oc(this,y(pc,this.w));this.i={};this.M=this.P=this.h=this.Y=this.b=null;this.L=!1;this.j=this.D=null;this.S={};this.qa=["onReady"];this.X=null;this.ga=NaN;this.N={};Ng(this);this.U("WATCH_LATER_VIDEO_ADDED",this.Fa.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ga.bind(this));this.U("onAdAnnounce",this.ta.bind(this));this.ra=new Yf(this);oc(this,y(pc,this.ra))}
n(Mg,G);l=Mg.prototype;
l.da=function(a){if(!this.g){a instanceof Tf||(a=new Tf(a));this.Y=a;this.b=Xf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.P||(this.P=Og(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.m.style.width=Sb(Number(a)||a);if(a=this.b.attrs.height)this.m.style.height=Sb(Number(a)||
a);Pg(this);this.o&&Qg(this)}};
l.wa=function(){return this.Y};
function Qg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Rg(a){var b=!0,c=Sg(a);c&&a.b&&(a=a.b,b=Ud(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Pg(a){if(!a.g&&!a.L){var b=Rg(a);if(b&&"html5"==(Sg(a)?"html5":null))a.M="html5",a.o||Tg(a);else if(Ug(a),a.M="html5",b&&a.j)a.R.appendChild(a.j),Tg(a);else{a.b.loaded=!0;var c=!1;a.D=function(){c=!0;var b=Xf(a.b);v("yt.player.Application.create")(a.R,b);Tg(a)};
a.L=!0;b?a.D():(ie(a.b.assets.js,a.D),$f(a.b.assets.css),Vg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Sg(a){var b=Jb(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function Tg(a){if(!a.g){var b=Sg(a),c=!1;try{b&&b.getApiInterface&&b.getApiInterface()&&(c=!0)}catch(d){Rd(Error("Error calling getApiInterface: "+d))}c?(a.L=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Wg(a)):a.ga=U(function(){Tg(a)},50)}}
function Wg(a){Ng(a);a.o=!0;var b=Sg(a);b.addEventListener&&(a.F=Xg(a,b,"addEventListener"));b.removeEventListener&&(a.O=Xg(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=Xg(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);Qg(a);a.P&&a.P(a.f);a.w.I("onReady",a.f)}
function Xg(a,b,c){var d=b[c];return function(){try{return a.X=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.X=e,Rd(e))}}}
function Ng(a){a.o=!1;if(a.O)for(var b in a.i)a.O(b,a.i[b]);for(var c in a.N)Wd(parseInt(c,10));a.N={};a.F=null;a.O=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ma.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.xa.bind(a);a.f.getPlayerType=a.ya.bind(a);a.f.getCurrentVideoConfig=a.wa.bind(a);a.f.loadNewVideoConfig=a.da.bind(a);a.f.isReady=a.Ea.bind(a)}
l.Ea=function(){return this.o};
l.U=function(a,b){var c=this,d=Og(this,b);if(d){if(!(0<=Ba(this.qa,a)||this.i[a])){var e=Yg(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&U(function(){d(c.f)},0)}};
l.Ma=function(a,b){if(!this.g){var c=Og(this,b);c&&cd(this.w,a,c)}};
function Og(a,b){var c=b;if("string"==typeof b){if(a.S[b])return a.S[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.S[b]=c}return c?c:null}
function Yg(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=U(function(){if(!a.g){a.w.I(b,c);var d=a.N,e=String(f);e in d&&delete d[e]}},0);
bb(a.N,String(f))}};
return c}
l.ta=function(a){de("a11y-announce",a)};
l.Fa=function(a){de("WATCH_LATER_VIDEO_ADDED",a)};
l.Ga=function(a){de("WATCH_LATER_VIDEO_REMOVED",a)};
l.ya=function(){return this.M||(Sg(this)?"html5":null)};
l.xa=function(){return this.X};
function Ug(a){zg("dcp");a.cancel();Ng(a);a.M=null;a.b&&(a.b.loaded=!1);var b=Sg(a);b&&(Rg(a)||!Vg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.R;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.D&&oe(this.b.assets.js,this.D);Wd(this.ga);this.L=!1};
l.l=function(){Ug(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){R(Error("Error destroying player: "+b))}this.S=null;for(var a in this.i)p[this.i[a]]=null;this.Y=this.b=this.f=null;delete this.R;delete this.m;G.prototype.l.call(this)};
function Vg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Zg={},$g="player_uid_"+(1E9*Math.random()>>>0);function ah(a){var b="player";b=r(b)?Jb(b):b;var c=$g+"_"+(b[wa]||(b[wa]=++xa)),d=Zg[c];if(d)return d.da(a),d.f;d=new Mg(b,c);Zg[c]=d;de("player-added",d.f);oc(d,y(bh,d));U(function(){d.da(a)},0);
return d.f}
function bh(a){delete Zg[a.G]}
;function ch(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function dh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return eh(a)}
function eh(a,b,c){if(va(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function fh(a,b,c,d){if(va(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function gh(a){var b=a.video_id||a.videoId;if(r(b)){var c=sf()||{},d=sf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=uf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function hh(a){G.call(this);this.b=a;this.b.subscribe("command",this.na,this);this.f={};this.i=!1}
A(hh,G);l=hh.prototype;l.start=function(){this.i||this.g||(this.i=!0,ih(this.b,"RECEIVING"))};
l.na=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Oa,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&jh(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=kh(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=lh(a,c))&&this.i&&!this.g&&ih(this.b,a,c))}}};
l.Oa=function(a,b){this.i&&!this.g&&ih(this.b,a,this.aa(a,b))};
l.aa=function(a,b){if(null!=b)return{value:b}};
function jh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
l.l=function(){var a=this.b;a.g||cd(a.b,"command",this.na,this);this.b=null;for(var b in this.f)jh(this,b);hh.u.l.call(this)};function mh(a,b){hh.call(this,b);this.h=a;this.start()}
A(mh,hh);mh.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
mh.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function kh(a,b){switch(a){case "loadVideoById":return b=eh(b),gh(b),[b];case "cueVideoById":return b=eh(b),gh(b),[b];case "loadVideoByPlayerVars":return gh(b),[b];case "cueVideoByPlayerVars":return gh(b),[b];case "loadPlaylist":return b=fh(b),gh(b),[b];case "cuePlaylist":return b=fh(b),gh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function lh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
mh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mh.u.aa.call(this,a,b)};
mh.prototype.l=function(){mh.u.l.call(this);delete this.h};function nh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.w,this);window.addEventListener("message",this.m)}
n(nh,G);nh.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ba(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
nh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=zc(a);c.postMessage(d,this.o)}catch(e){R(e,"WARNING")}}};
nh.prototype.l=function(){window.removeEventListener("message",this.m);G.prototype.l.call(this)};function oh(a,b,c){nh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(oh,nh);function ph(){var a=this.g=new oh(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Ia,this);a.i=b;a.j=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=ph.prototype;l.Ia=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,qh(this,a)),this.i[a]=!0)):this.pa(a,b,c)};
l.pa=function(){};
function qh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.va=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");C(this.h,this.oa,this);this.h=[]};
l.ba=function(){return null};
function rh(a,b){a.sendMessage("infoDelivery",b)}
l.oa=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.oa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function sh(a){ph.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ha,this));this.addEventListener("onVideoProgress",x(this.Sa,this));this.addEventListener("onVolumeChange",x(this.Ta,this));this.addEventListener("onApiChange",x(this.Na,this));this.addEventListener("onPlaybackQualityChange",x(this.Pa,this));this.addEventListener("onPlaybackRateChange",x(this.Qa,this));this.addEventListener("onStateChange",x(this.Ra,this))}
A(sh,ph);l=sh.prototype;l.pa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&ch(a)){var d=b;if(va(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=eh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=dh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=fh.apply(window,d)}d=e}gh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);ch(a)&&rh(this,this.ba())}};
l.Ha=function(){var a=x(this.va,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Fa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Ra=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());rh(this,a)};
l.Pa=function(a){rh(this,{playbackQuality:a})};
l.Qa=function(a){rh(this,{playbackRate:a})};
l.Na=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Ta=function(){rh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Sa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());rh(this,a)};
l.dispose=function(){sh.u.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function th(){G.call(this);this.b=new I;oc(this,y(pc,this.b))}
A(th,G);th.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
th.prototype.H=function(a){return this.g?!1:this.b.H(a)};
th.prototype.j=function(a,b){this.g||this.b.I.apply(this.b,arguments)};function uh(a,b,c){th.call(this);this.f=a;this.h=b;this.i=c}
A(uh,th);function ih(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(zc(a),d.h))}}
uh.prototype.l=function(){this.h=this.f=null;uh.u.l.call(this)};function vh(a,b,c){G.call(this);this.b=a;this.h=c;this.i=V(window,"message",x(this.j,this));this.f=new uh(this,a,b);oc(this,y(pc,this.f))}
A(vh,G);vh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.j("command",b.command,b.data,a.origin))}};
vh.prototype.l=function(){jf(this.i);this.b=null;vh.u.l.call(this)};function wh(){var a=xh()?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=cb(yh);return new H(function(c,d){b.C=function(a){we(a)?c(a):d(new zh("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new zh("Unknown request error","net.unknown",a))};
b.K=function(a){d(new zh("Request timed out","net.timeout",a))};
Ee(a,b)})}
function zh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(zh,B);function Ah(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
Ah.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Gc(a)?a:Bh(a)):2===this.g&&b?(a=b.call(c,this.b),Gc(a)?a:Ch(a)):this};
Ah.prototype.getValue=function(){return this.b};
Fc(Ah);function Ch(a){var b=new Ah;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function Bh(a){var b=new Ah;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function Dh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Eh;this.isTimeout=a instanceof zh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Uc}
n(Dh,B);Dh.prototype.name="BiscottiError";function Eh(){B.call(this,"Biscotti ID is missing from server")}
n(Eh,B);Eh.prototype.name="BiscottiMissingError";var yh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Fh=null;function Gh(){if("1"===Ya(Pd(),"args","privembed"))return Lc(Error("Biscotti ID is not available in private embed mode"));Fh||(Fh=Tc(wh().then(Hh),function(a){return Ih(2,a)}));
return Fh}
function xh(){var a;(a=!!Ya(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie"))||(a=!!Q("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1));return a||!!T("html5_serverside_pagead_id_sets_cookie")}
function Hh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Eh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Eh;a=a.id;Jh(a);Fh=Bh(a);Kh(18E5,2);return a}
function Ih(a,b){var c=new Dh(b);Jh("");Fh=Ch(c);0<a&&Kh(12E4,a-1);throw c;}
function Kh(a,b){U(function(){Tc(wh().then(Hh,function(a){return Ih(b,a)}),qa)},a)}
function Jh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Lh(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Gh()}catch(b){return Lc(b)}}
;function Mh(a){B.apply(this,arguments)}
n(Mh,B);Mh.prototype.name="MutsuError";function Nh(){var a=new Mh("ID is missing"),b=new Mh("Timeout"),c=null,d=!1;Ld(function(){c=Jd();d=!0});
if(d)return c?Bh(c):Ch(a);var e=new H(function(b,c){Ld(function(){var d=Jd();d?b(d):c(a)})}),f=qd().then(function(){return Lc(b)});
return Rc(Oc([e,f]),function(){return f.cancel()})}
;function Oh(a){if("1"!==Ya(Pd(),"args","privembed")){a&&!v("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Gh,void 0);try{var b=Lh();if(T("enable_mutsu")){v("yt.ads.mutsu.getId_")||t("yt.ads.mutsu.getId_",Nh,void 0);try{var c=v("yt.ads.mutsu.getId_")()}catch(d){c=Lc(d)}}else c=Lc(new Mh("unimplemented"));Pc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Z||a.Z){b=b.value;a=a.value;var c={};c.dt=Tb;c.flash=Ad||"0";a:{try{var d=window.top.location.href}catch(Oa){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var k=h.history.length}catch(Oa){k=0}d.u_his=k;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type=zd?"flash":"image";if(T("enable_server_side_search_pyv")||T("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var u=k.screenY}catch(Oa){}try{var K=k.outerWidth;var pb=k.outerHeight}catch(Oa){}try{var vg=k.innerWidth;var wg=k.innerHeight}catch(Oa){}m=[k.screenLeft,k.screenTop,m,u,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,K,pb,vg,wg];u=window.top;try{var S=(u||window).document,Na="CSS1Compat"==S.compatMode?S.documentElement:
S.body;var Aa=(new Ib(Na.clientWidth,Na.clientHeight)).round()}catch(Oa){Aa=new Ib(-12245933,-12245933)}S={};Na=0;p.SVGElement&&p.document.createElementNS&&(Na|=1);S.bc=Na;S.bih=Aa.height;S.biw=Aa.width;S.brdim=m.join();Aa=(S.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Rb.webkitVisibilityState||Rb.mozVisibilityState||Rb.visibilityState||""]||0,S.wgl=!!F.WebGLRenderingContext,S);for(var Cd in Aa)d[Cd]=Aa[Cd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Ph++;Ke("//www.youtube.com/ad_data_204",
{za:!1,A:d})}});
U(Oh,18E5)}catch(d){R(d)}}}
var Ph=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Qh(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Zb.get(""+this.b,void 0)){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
l=Qh.prototype;l.get=function(a,b){Rh(a);Sh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
l.set=function(a,b){Rh(a);Sh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
l.remove=function(a){Rh(a);Sh(a);delete Z[a]};
l.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));zf(a,b.join("&"),63072E3)};
l.clear=function(){for(var a in Z)delete Z[a]};
function Sh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Rh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Th(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ra(Qh);var Uh=null,Vh=null,Wh=null,Xh={};function Yh(a){Of(a.payload_name,a.payload,void 0,void 0)}
function Zh(a){var b=a.id;a=a.ve_type;var c=rf++;a=new pf(void 0,a,c,void 0,void 0);Xh[b]=a;b=yf();c=xf();b&&c&&Rf(b,c,a)}
function $h(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(P("client-screen-nonce",b),P("ROOT_VE_TYPE",a),a=xf()))for(var c in Xh){var d=Xh[c];d&&Rf(b,a,d)}}
function ai(a){Xh[a.id]=new pf(a.tracking_params)}
function bi(a){var b=yf();a=Xh[a.id];b&&a&&(T("interaction_click_on_gel_web")?Of("visualElementGestured",{csn:b,ve:qf(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):Sf({click:{csn:b,visualElement:qf(a)}}))}
function ci(a){a=a.ids;var b=yf();if(b)for(var c=0;c<a.length;c++){var d=Xh[a[c]];d&&Of("visualElementShown",{csn:b,ve:qf(d),eventType:1})}}
function di(){var a=Uh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",P,void 0);t("yt.config.set",P,void 0);t("yt.setMsg",Te,void 0);t("yt.msgs.set",Te,void 0);t("yt.logging.errors.log",Re,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Oh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&gh(a.args);Uh=a=ah(a);a.addEventListener("onScreenChanged",$h);a.addEventListener("onLogClientVeCreated",Zh);a.addEventListener("onLogServerVeCreated",ai);a.addEventListener("onLogToGel",Yh);
a.addEventListener("onLogVeClicked",bi);a.addEventListener("onLogVesShown",ci);a.addEventListener("onReady",di);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Wh=new sh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(Vh=new vh(window.parent,b,c),Wh=new mh(a,Vh.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&qe();af()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Ne(a+"mac_204?action_fcts=1");return!0},void 0);
var ei=Qd(function(){zg("ol");var a=Qh.getInstance(),b=!!((Th("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&sc(document.body,"exp-invert-logo"))if(c&&!sc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):sc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&sc(document.body,"inverted-hdpi")&&tc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Th(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),fi=Qd(function(){var a=Uh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(pe=null);a=0;for(var b=Ze.length;a<b;a++)Ye(Ze[a]);Ze.length=0;ne("//static.doubleclick.net/instream/ad_status.js");$e=!1;P("DCLKSTAT",0);qc(Wh,Vh);if(a=Uh)a.removeEventListener("onScreenChanged",$h),a.removeEventListener("onLogClientVeCreated",Zh),a.removeEventListener("onLogServerVeCreated",ai),a.removeEventListener("onLogToGel",Yh),a.removeEventListener("onLogVeClicked",bi),a.removeEventListener("onLogVesShown",ci),a.removeEventListener("onReady",
di),a.destroy();Xh={}});
window.addEventListener?(window.addEventListener("load",ei),window.addEventListener("unload",fi)):window.attachEvent&&(window.attachEvent("onload",ei),window.attachEvent("onunload",fi));}).call(this);
