// ==UserScript==
// @name         Randle Auto Mobile
// @namespace    https://randle.lixx.kr/
// @version      1.0.6
// @description  iOS Safari에서 Randle 자동 진행과 인간 인증을 처리합니다.
// @match        https://randle.lixx.kr/*
// @inject-into  page
// @run-at       document-idle
// @noframes
// @grant        none
// @updateURL    https://raw.githubusercontent.com/pigeo-on2/randle-mobile-installer/main/randle-mobile.meta.js
// @downloadURL  https://raw.githubusercontent.com/pigeo-on2/randle-mobile-installer/main/randle-mobile.user.js
// ==/UserScript==

// Bundled protobuf.js 7.6.6; see mobile/vendor/protobuf.min.js for the vendored source.
/*!
 * protobuf.js v7.6.6 (c) 2016, daniel wirtz
 * compiled thu, 27 aug 2026 10:13:19 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
!function(rt){"use strict";var r,e,i;r={1:[function(t,i,n){i.exports=function(t,i){var n=Array(arguments.length-1),s=0,r=2,o=!0;for(;r<arguments.length;)n[s++]=arguments[r++];return new Promise(function(r,e){n[s]=function(t){if(o)if(o=!1,t)e(t);else{for(var i=Array(arguments.length-1),n=0;n<i.length;)i[n++]=arguments[n];r.apply(null,i)}};try{t.apply(i||null,n)}catch(t){o&&(o=!1,e(t))}})}},{}],2:[function(t,i,n){n.length=function(t){var i=t.length;if(!i)return 0;for(var n=0;1<--i%4&&"="==(t[0|i]||"");)++n;return Math.ceil(3*t.length)/4-n};for(var h=Array(64),f=Array(123),r=0;r<64;)f[h[r]=r<26?r+65:r<52?r+71:r<62?r-4:r-59|43]=r++;n.encode=function(t,i,n){for(var r,e=null,s=[],o=0,u=0;i<n;){var f=t[i++];switch(u){case 0:s[o++]=h[f>>2],r=(3&f)<<4,u=1;break;case 1:s[o++]=h[r|f>>4],r=(15&f)<<2,u=2;break;case 2:s[o++]=h[r|f>>6],s[o++]=h[63&f],u=0}8191<o&&((e=e||[]).push(String.fromCharCode.apply(String,s)),o=0)}return u&&(s[o++]=h[r],s[o++]=61,1===u&&(s[o++]=61)),e?(o&&e.push(String.fromCharCode.apply(String,s.slice(0,o))),e.join("")):String.fromCharCode.apply(String,s.slice(0,o))};var a="invalid encoding";n.decode=function(t,i,n){for(var r,e=n,s=0,o=0;o<t.length;){var u=t.charCodeAt(o++);if(61==u&&1<s)break;if((u=f[u])===rt)throw Error(a);switch(s){case 0:r=u,s=1;break;case 1:i[n++]=r<<2|(48&u)>>4,r=u,s=2;break;case 2:i[n++]=(15&r)<<4|(60&u)>>2,r=u,s=3;break;case 3:i[n++]=(3&r)<<6|u,s=0}}if(1===s)throw Error(a);return n-e},n.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},{}],3:[function(t,i,n){i.exports=c;var r=/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;function c(i,n){"string"==typeof i&&(n=i,i=rt);var f=[];function h(t){if("string"!=typeof t){var i=a();if(c.verbose&&console.log("codegen: "+i),i="return "+i,t){for(var n=Object.keys(t),r=Array(n.length+1),e=Array(n.length),s=0;s<n.length;)r[s]=n[s],e[s]=t[n[s++]];return r[s]=i,Function.apply(null,r).apply(null,e)}return Function(i)()}for(var o=Array(arguments.length-1),u=0;u<o.length;)o[u]=arguments[++u];if(u=0,t=t.replace(/%([%dfijs])/g,function(t,i){var n=o[u++];switch(i){case"d":case"f":return""+ +(""+n);case"i":return""+Math.floor(n);case"j":return JSON.stringify(n);case"s":return""+n}return"%"}),u!==o.length)throw Error("parameter count mismatch");return f.push(t),h}function a(t){return"function "+function(t){if(!t)return"";if(!(t=(""+t).replace(/[^\w$]/g,"")))return"";/^\d/.test(t)&&(t="_"+t);return r.test(t)?t+"_":t}(t||n)+"("+(i&&i.join(",")||"")+"){\n  "+f.join("\n  ")+"\n}"}return h.toString=a,h}c.verbose=!1},{}],4:[function(t,i,n){function r(){this.i=Object.create(null)}(i.exports=r).prototype.on=function(t,i,n){return(this.i[t]||(this.i[t]=[])).push({fn:i,ctx:n||this}),this},r.prototype.off=function(t,i){if(t===rt)this.i=Object.create(null);else if(i===rt)this.i[t]=[];else{var n=this.i[t];if(!n)return this;for(var r=0;r<n.length;)n[r].fn===i?n.splice(r,1):++r}return this},r.prototype.emit=function(t){var i=this.i[t];if(i){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<i.length;)i[r].fn.apply(i[r++].ctx,n)}return this}},{}],5:[function(t,i,n){i.exports=u;var s=t(1),o=t(6);function u(n,r,e){return r="function"==typeof r?(e=r,{}):r||{},e?!r.xhr&&o&&o.readFile?o.readFile(n,function(t,i){return t&&"undefined"!=typeof XMLHttpRequest?u.xhr(n,r,e):t?e(t):e(null,r.binary?i:i.toString("utf8"))}):u.xhr(n,r,e):s(u,this,n,r)}u.xhr=function(t,n,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4!==e.readyState)return rt;if(0!==e.status&&200!==e.status)return r(Error("status "+e.status));if(n.binary){if(!(t=e.response))for(var t=[],i=0;i<e.responseText.length;++i)t.push(255&e.responseText.charCodeAt(i));return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(t):t)}return r(null,e.responseText)},n.binary&&("overrideMimeType"in e&&e.overrideMimeType("text/plain; charset=x-user-defined"),e.responseType="arraybuffer"),e.open("GET",t),e.send()}},{1:1,6:6}],6:[function(t,i,n){var r=null;try{(r=t(11))&&r.readFile&&r.readFileSync||(r=null)}catch(t){}i.exports=r},{11:11}],7:[function(t,i,n){function r(t){function i(t,i,n,r){var e=i<0?1:0;t(0===(i=e?-i:i)?0<1/i?0:2147483648:isNaN(i)?2143289344:34028234663852886e22<i?(e<<31|2139095040)>>>0:i<11754943508222875e-54?(e<<31|Math.round(i/1401298464324817e-60))>>>0:(e<<31|127+(t=Math.floor(Math.log(i)/Math.LN2))<<23|8388607&Math.round(i*Math.pow(2,-t)*8388608))>>>0,n,r)}function n(t,i,n){t=t(i,n),i=2*(t>>31)+1,n=t>>>23&255,t&=8388607;return 255==n?t?NaN:1/0*i:0==n?1401298464324817e-60*i*t:i*Math.pow(2,n-150)*(8388608+t)}function r(t,i,n){u[0]=t,i[n]=f[0],i[n+1]=f[1],i[n+2]=f[2],i[n+3]=f[3]}function e(t,i,n){u[0]=t,i[n]=f[3],i[n+1]=f[2],i[n+2]=f[1],i[n+3]=f[0]}function s(t,i){return f[0]=t[i],f[1]=t[i+1],f[2]=t[i+2],f[3]=t[i+3],u[0]}function o(t,i){return f[3]=t[i],f[2]=t[i+1],f[1]=t[i+2],f[0]=t[i+3],u[0]}var u,f,h,a,c;function l(t,i,n,r,e,s){var o,u=r<0?1:0;0===(r=u?-r:r)?(t(0,e,s+i),t(0<1/r?0:2147483648,e,s+n)):isNaN(r)?(t(0,e,s+i),t(2146959360,e,s+n)):17976931348623157e292<r?(t(0,e,s+i),t((u<<31|2146435072)>>>0,e,s+n)):r<22250738585072014e-324?(t((o=r/5e-324)>>>0,e,s+i),t((u<<31|o/4294967296)>>>0,e,s+n)):(t(4503599627370496*(o=r*Math.pow(2,-(r=1024===(r=Math.floor(Math.log(r)/Math.LN2))?1023:r)))>>>0,e,s+i),t((u<<31|r+1023<<20|1048576*o&1048575)>>>0,e,s+n))}function d(t,i,n,r,e){i=t(r,e+i),t=t(r,e+n),r=2*(t>>31)+1,e=t>>>20&2047,n=4294967296*(1048575&t)+i;return 2047==e?n?NaN:1/0*r:0==e?5e-324*r*n:r*Math.pow(2,e-1075)*(n+4503599627370496)}function p(t,i,n){h[0]=t,i[n]=a[0],i[n+1]=a[1],i[n+2]=a[2],i[n+3]=a[3],i[n+4]=a[4],i[n+5]=a[5],i[n+6]=a[6],i[n+7]=a[7]}function v(t,i,n){h[0]=t,i[n]=a[7],i[n+1]=a[6],i[n+2]=a[5],i[n+3]=a[4],i[n+4]=a[3],i[n+5]=a[2],i[n+6]=a[1],i[n+7]=a[0]}function b(t,i){return a[0]=t[i],a[1]=t[i+1],a[2]=t[i+2],a[3]=t[i+3],a[4]=t[i+4],a[5]=t[i+5],a[6]=t[i+6],a[7]=t[i+7],h[0]}function w(t,i){return a[7]=t[i],a[6]=t[i+1],a[5]=t[i+2],a[4]=t[i+3],a[3]=t[i+4],a[2]=t[i+5],a[1]=t[i+6],a[0]=t[i+7],h[0]}return"undefined"!=typeof Float32Array?(u=new Float32Array([-0]),f=new Uint8Array(u.buffer),c=128===f[3],t.writeFloatLE=c?r:e,t.writeFloatBE=c?e:r,t.readFloatLE=c?s:o,t.readFloatBE=c?o:s):(t.writeFloatLE=i.bind(null,m),t.writeFloatBE=i.bind(null,y),t.readFloatLE=n.bind(null,g),t.readFloatBE=n.bind(null,j)),"undefined"!=typeof Float64Array?(h=new Float64Array([-0]),a=new Uint8Array(h.buffer),c=128===a[7],t.writeDoubleLE=c?p:v,t.writeDoubleBE=c?v:p,t.readDoubleLE=c?b:w,t.readDoubleBE=c?w:b):(t.writeDoubleLE=l.bind(null,m,0,4),t.writeDoubleBE=l.bind(null,y,4,0),t.readDoubleLE=d.bind(null,g,0,4),t.readDoubleBE=d.bind(null,j,4,0)),t}function m(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}function y(t,i,n){i[n]=t>>>24,i[n+1]=t>>>16&255,i[n+2]=t>>>8&255,i[n+3]=255&t}function g(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16|t[i+3]<<24)>>>0}function j(t,i){return(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3])>>>0}i.exports=r(r)},{}],8:[function(t,i,n){var e=n.isAbsolute=function(t){return/^(?:\/|\w+:)/.test(t)},r=n.normalize=function(t){var i=(t=t.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=e(t),t="";n&&(t=i.shift()+"/");for(var r=0;r<i.length;)".."===i[r]?0<r&&".."!==i[r-1]?i.splice(--r,2):n?i.splice(r,1):++r:"."===i[r]?i.splice(r,1):++r;return t+i.join("/")};n.resolve=function(t,i,n){return n||(i=r(i)),!e(i)&&(t=(t=n?t:r(t)).replace(/(?:\/|^)[^/]+$/,"")).length?r(t+"/"+i):i}},{}],9:[function(t,i,n){i.exports=function(i,n,t){var r=t||8192,e=r>>>1,s=null,o=r;return function(t){if(t<1||e<t)return i(t);r<o+t&&(s=i(r),o=0);t=n.call(s,o,o+=t);return 7&o&&(o=1+(7|o)),t}}},{}],10:[function(t,i,n){n.length=function(t){for(var i,n=0,r=0;r<t.length;++r)(i=t.charCodeAt(r))<128?n+=1:i<2048?n+=2:55296==(64512&i)&&56320==(64512&t.charCodeAt(r+1))?(++r,n+=4):n+=3;return n},n.read=function(t,i,n){if(n-i<1)return"";for(var r="",e=i;e<n;){var s,o=t[e++];o<=127?r+=String.fromCharCode(o):192<=o&&o<224?r+=128<=(s=(31&o)<<6|63&t[e++])?String.fromCharCode(s):"�":224<=o&&o<240?r+=2048<=(s=(15&o)<<12|(63&t[e++])<<6|63&t[e++])?String.fromCharCode(s):"�":240<=o&&((o=(7&o)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])<65536||1114111<o?r+="�":r=r+String.fromCharCode(55296+((o-=65536)>>10))+String.fromCharCode(56320+(1023&o)))}return r},n.write=function(t,i,n){for(var r,e,s=n,o=0;o<t.length;++o)(r=t.charCodeAt(o))<128?i[n++]=r:(r<2048?i[n++]=r>>6|192:(55296==(64512&r)&&56320==(64512&(e=t.charCodeAt(o+1)))?(++o,i[n++]=(r=65536+((1023&r)<<10)+(1023&e))>>18|240,i[n++]=r>>12&63|128):i[n++]=r>>12|224,i[n++]=r>>6&63|128),i[n++]=63&r|128);return n-s}},{}],11:[function(t,i,n){},{}],12:[function(t,i,n){i.exports=e;var r=/\/|\./;function e(t,i){r.test(t)||(t="google/protobuf/"+t+".proto",i={nested:{google:{nested:{protobuf:{nested:i}}}}}),e[t]=i}e("any",{Any:{fields:{type_url:{type:"string",id:1},value:{type:"bytes",id:2}}}}),e("duration",{Duration:i={fields:{seconds:{type:"int64",id:1},nanos:{type:"int32",id:2}}}}),e("timestamp",{Timestamp:i}),e("empty",{Empty:{fields:{}}}),e("struct",{Struct:{fields:{fields:{keyType:"string",type:"Value",id:1}}},Value:{oneofs:{kind:{oneof:["nullValue","numberValue","stringValue","boolValue","structValue","listValue"]}},fields:{nullValue:{type:"NullValue",id:1},numberValue:{type:"double",id:2},stringValue:{type:"string",id:3},boolValue:{type:"bool",id:4},structValue:{type:"Struct",id:5},listValue:{type:"ListValue",id:6}}},NullValue:{values:{NULL_VALUE:0}},ListValue:{fields:{values:{rule:"repeated",type:"Value",id:1}}}}),e("wrappers",{DoubleValue:{fields:{value:{type:"double",id:1}}},FloatValue:{fields:{value:{type:"float",id:1}}},Int64Value:{fields:{value:{type:"int64",id:1}}},UInt64Value:{fields:{value:{type:"uint64",id:1}}},Int32Value:{fields:{value:{type:"int32",id:1}}},UInt32Value:{fields:{value:{type:"uint32",id:1}}},BoolValue:{fields:{value:{type:"bool",id:1}}},StringValue:{fields:{value:{type:"string",id:1}}},BytesValue:{fields:{value:{type:"bytes",id:1}}}}),e("field_mask",{FieldMask:{fields:{paths:{rule:"repeated",type:"string",id:1}}}}),e.get=function(t){return e[t]||null}},{}],13:[function(t,i,n){var l=t(16),d=t(38);function o(t,i,n,r){var e=!1;if(i.resolvedType)if(i.resolvedType instanceof l){t("switch(d%s){",r);for(var s=i.resolvedType.values,o=Object.keys(s),u=0;u<o.length;++u)s[o[u]]!==i.typeDefault||e||(t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}',r,r,r),i.repeated||t("break"),e=!0),t("case%j:",o[u])("case %i:",s[o[u]])("m%s=%j",r,s[o[u]])("break");t("}")}else t("if(!util.isObject(d%s))",r)("throw TypeError(%j)",i.fullName+": object expected")("m%s=types[%i].fromObject(d%s,n+1)",r,n,r);else{var f=!1;switch(i.type){case"double":case"float":t("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":t("m%s=d%s>>>0",r,r);break;case"int32":case"sint32":case"sfixed32":t("m%s=d%s|0",r,r);break;case"uint64":case"fixed64":f=!0;case"int64":case"sint64":case"sfixed64":t("if(util.Long)")("m%s=util.Long.fromValue(d%s,%j)",r,r,f)('else if(typeof d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof d%s==="object")',r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,f?"true":"");break;case"bytes":t('if(typeof d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length >= 0)",r)("m%s=d%s",r,r);break;case"string":t("m%s=String(d%s)",r,r);break;case"bool":t("m%s=Boolean(d%s)",r,r)}}return t}function p(t,i,n,r){if(i.resolvedType)i.resolvedType instanceof l?t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",r,n,r,r,n,r,r):t("d%s=types[%i].toObject(m%s,o,q+1)",r,n,r);else{var e=!1;switch(i.type){case"double":case"float":t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,r,r,r);break;case"uint64":case"fixed64":e=!0;case"int64":case"sint64":case"sfixed64":t('if(typeof BigInt!=="undefined"&&o.longs===BigInt)')('d%s=typeof m%s==="number"?BigInt(m%s):util.Long.fromBits(m%s.low>>>0,m%s.high>>>0,%j).toBigInt()',r,r,r,r,r,e)('else if(typeof m%s==="number")',r)("d%s=o.longs===String?String(m%s):m%s",r,r,r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",r,r,r,r,e?"true":"",r);break;case"bytes":t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,r,r,r,r);break;default:t("d%s=m%s",r,r)}}return t}n.fromObject=function(t){var i=t.fieldsArray,n=d.codegen(["d","n"],t.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!i.length)return n("return new this.ctor");n("if(!util.isObject(d))")("throw TypeError(%j)",t.fullName+": object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")'),n("var m=new this.ctor");for(var r=0;r<i.length;++r){var e=i[r].resolve(),s=d.safeProp(e.name);e.map?(n("if(d%s){",s)("if(!util.isObject(d%s))",s)("throw TypeError(%j)",e.fullName+": object expected")("m%s={}",s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",s),n('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])",s),o(n,e,r,s+"[ks[i]]")("}")("}")):e.repeated?(n("if(d%s){",s)("if(!Array.isArray(d%s))",s)("throw TypeError(%j)",e.fullName+": array expected")("m%s=[]",s)("for(var i=0;i<d%s.length;++i){",s),o(n,e,r,s+"[i]")("}")("}")):(e.resolvedType instanceof l||n("if(d%s!=null){",s),o(n,e,r,s),e.resolvedType instanceof l||n("}"))}return n("return m")},n.toObject=function(t){var i=t.fieldsArray.slice().sort(d.compareFieldsById);if(!i.length)return d.codegen()("return {}");for(var n=d.codegen(["m","o","q"],t.name+"$toObject")("if(!o)")("o={}")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")')("var d={}"),r=[],e=[],s=[],o=0;o<i.length;++o)i[o].partOf||(i[o].resolve().repeated?r:i[o].map?e:s).push(i[o]);if(r.length){for(n("if(o.arrays||o.defaults){"),o=0;o<r.length;++o)n("d%s=[]",d.safeProp(r[o].name));n("}")}if(e.length){for(n("if(o.objects||o.defaults){"),o=0;o<e.length;++o)n("d%s={}",d.safeProp(e[o].name));n("}")}if(s.length){for(n("if(o.defaults){"),o=0;o<s.length;++o){var u,f=s[o],h=d.safeProp(f.name);f.resolvedType instanceof l?n("d%s=o.enums===String?%j:%j",h,f.resolvedType.valuesById[f.typeDefault],f.typeDefault):f.long?n("if(util.Long){")("var n=new util.Long(%i,%i,%j)",f.typeDefault.low,f.typeDefault.high,f.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof BigInt!=="undefined"&&o.longs===BigInt?n.toBigInt():n',h)("}else")('d%s=o.longs===String?%j:typeof BigInt!=="undefined"&&o.longs===BigInt?BigInt(%j):%i',h,f.typeDefault.toString(),f.typeDefault.toString(),f.typeDefault.toNumber()):f.bytes?(u=Array.prototype.slice.call(f.typeDefault),n("if(o.bytes===String)d%s=%j",h,String.fromCharCode.apply(String,f.typeDefault))("else{")("d%s=%j",h,u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",h,h)("}")):n("d%s=%j",h,f.typeDefault)}n("}")}for(var a=!1,o=0;o<i.length;++o){var f=i[o],c=t.e.indexOf(f),h=d.safeProp(f.name);f.map?(a||(a=!0,n("var ks2")),n("if(m%s&&(ks2=Object.keys(m%s)).length){",h,h)("d%s={}",h)("for(var j=0;j<ks2.length;++j){"),n('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])",h),p(n,f,c,h+"[ks2[j]]")("}")):f.repeated?(n("if(m%s&&m%s.length){",h,h)("d%s=[]",h)("for(var j=0;j<m%s.length;++j){",h),p(n,f,c,h+"[j]")("}")):(n("if(m%s!=null&&Object.hasOwnProperty.call(m,%j)){",h,f.name),p(n,f,c,h),f.partOf&&n("if(o.oneofs)")("d%s=%j",d.safeProp(f.partOf.name),f.name)),n("}")}return n("return d")}},{16:16,38:38}],14:[function(t,i,n){i.exports=function(t){for(var i=h.codegen(["r","l","e","n"],t.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c,m"+(t.fieldsArray.filter(function(t){return t.map}).length?",k,value":""))("if(l===undefined)")("c=r.len")("else{")("c=r.pos+l")("if(c>r.len)")('throw RangeError("index out of range")')("l=r.len")("r.len=c")("}")("m=new this.ctor")("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"),n=0;n<t.fieldsArray.length;++n){var r=t.e[n].resolve(),e=r.resolvedType instanceof u?"int32":r.type,s="m"+h.safeProp(r.name);i("case %i: {",r.id),r.map?(i("if(%s===util.emptyObject)",s)("%s={}",s)("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2"),f.defaults[r.keyType]!==rt?i("k=%j",f.defaults[r.keyType]):i("k=null"),f.defaults[e]!==rt?i("value=%j",f.defaults[e]):i("value=null"),i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",r.keyType)("case 2:"),f.basic[e]===rt?i("value=types[%i].decode(r,r.uint32(),undefined,n+1)",n):i("value=r.%s()",e),i("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}")("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c"),f.long[r.keyType]!==rt?i('%s[typeof k==="object"?util.longToHash(k):k]=value',s):("string"===r.keyType&&i('if(k==="__proto__")')("util.makeProp(%s,k)",s),i("%s[k]=value",s))):r.repeated?(i("if(!(%s&&%s.length))",s,s)("%s=[]",s),f.packed[e]!==rt&&i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2")("while(r.pos<c2)")("%s.push(r.%s())",s,e)("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c")("}else"),f.basic[e]===rt?i(r.delimited?"%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))":"%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))",s,n):i("%s.push(r.%s())",s,e)):f.basic[e]===rt?i(r.delimited?"%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)":"%s=types[%i].decode(r,r.uint32(),undefined,n+1)",s,n):i("%s=r.%s()",s,e),i("break")("}")}for(i("default:")("r.skipType(t&7,n)")("break")("}")("}"),i("if(l!==undefined){")("if(r.pos!==c)")('throw RangeError("index out of range")')("r.len=l")("}"),n=0;n<t.e.length;++n){var o=t.e[n];o.required&&i("if(!Object.hasOwnProperty.call(m,%j))",o.name)("throw util.ProtocolError(%j,{instance:m})","missing required '"+o.name+"'")}return i("return m")};var u=t(16),f=t(37),h=t(38)},{16:16,37:37,38:38}],15:[function(t,i,n){i.exports=function(t){for(var i,n=c.codegen(["m","w","q"],t.name+"$encode")("if(!w)")("w=Writer.create()")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")'),r=t.fieldsArray.slice().sort(c.compareFieldsById),e=0;e<r.length;++e){var s=r[e].resolve(),o=t.e.indexOf(s),u=s.resolvedType instanceof h?"int32":s.type,f=a.basic[u];i="m"+c.safeProp(s.name),s.map?(n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",i,s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(s.id<<3|2)>>>0,8|a.mapKey[s.keyType],s.keyType),f===rt?n("types[%i].encode(%s[ks[i]],w.uint32(18).fork(),q+1).ldelim().ldelim()",o,i):n(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|f,u,i),n("}")("}")):s.repeated?(n("if(%s!=null&&%s.length){",i,i),s.packed&&a.packed[u]!==rt?n("w.uint32(%i).fork()",(s.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",i)("w.%s(%s[i])",u,i)("w.ldelim()"):(n("for(var i=0;i<%s.length;++i)",i),f===rt?l(n,s,o,i+"[i]"):n("w.uint32(%i).%s(%s[i])",(s.id<<3|f)>>>0,u,i)),n("}")):(s.optional&&n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",i,s.name),f===rt?l(n,s,o,i):n("w.uint32(%i).%s(%s)",(s.id<<3|f)>>>0,u,i))}return n("return w")};var h=t(16),a=t(37),c=t(38);function l(t,i,n,r){i.delimited?t("types[%i].encode(%s,w.uint32(%i),q+1).uint32(%i)",n,r,(i.id<<3|3)>>>0,(i.id<<3|4)>>>0):t("types[%i].encode(%s,w.uint32(%i).fork(),q+1).ldelim()",n,r,(i.id<<3|2)>>>0)}},{16:16,37:37,38:38}],16:[function(t,i,n){i.exports=s;var f=t(25),r=(((s.prototype=Object.create(f.prototype)).constructor=s).className="Enum",t(24)),e=t(38);function s(t,i,n,r,e,s){if(f.call(this,t,n),i&&"object"!=typeof i)throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=r,this.comments=e||{},this.valuesOptions=s,this.s={},this.reserved=rt,i)for(var o=Object.keys(i),u=0;u<o.length;++u)"__proto__"!==o[u]&&"number"==typeof i[o[u]]&&(this.valuesById[this.values[o[u]]=i[o[u]]]=o[u])}s.prototype.o=function(t){return t=this.u||t,f.prototype.o.call(this,t),Object.keys(this.values).forEach(t=>{var i=e.merge({},this.f);this.s[t]=e.merge(i,this.valuesOptions&&this.valuesOptions[t]&&this.valuesOptions[t].features||{})}),this},s.fromJSON=function(t,i){t=new s(t,i.values,i.options,i.comment,i.comments);return t.reserved=i.reserved,i.edition&&(t.u=i.edition),t.h="proto3",t},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return e.toObject(["edition",this.a(),"options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:rt,"comment",t?this.comment:rt,"comments",t?this.comments:rt])},s.prototype.add=function(t,i,n,r){if(!e.isString(t))throw TypeError("name must be a string");if(!e.isInteger(i))throw TypeError("id must be an integer");if("__proto__"!==t){if(this.values[t]!==rt)throw Error("duplicate name '"+t+"' in "+this);if(this.isReservedId(i))throw Error("id "+i+" is reserved in "+this);if(this.isReservedName(t))throw Error("name '"+t+"' is reserved in "+this);if(this.valuesById[i]!==rt){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+i+" in "+this);this.values[t]=i}else this.valuesById[this.values[t]=i]=t;r&&(this.valuesOptions===rt&&(this.valuesOptions={}),this.valuesOptions[t]=r||null),this.comments[t]=n||null}return this},s.prototype.remove=function(t){if(!e.isString(t))throw TypeError("name must be a string");var i=this.values[t];if(null==i)throw Error("name '"+t+"' does not exist in "+this);return delete this.valuesById[i],delete this.values[t],delete this.comments[t],this.valuesOptions&&delete this.valuesOptions[t],this},s.prototype.isReservedId=function(t){return r.isReservedId(this.reserved,t)},s.prototype.isReservedName=function(t){return r.isReservedName(this.reserved,t)}},{24:24,25:25,38:38}],17:[function(t,i,n){i.exports=o;var r,u=t(25),e=(((o.prototype=Object.create(u.prototype)).constructor=o).className="Field",t(16)),f=t(37),h=t(38),a=/^required|optional|repeated$/;function o(t,i,n,r,e,s,o){if(h.isObject(r)?(o=e,s=r,r=e=rt):h.isObject(e)&&(o=s,s=e,e=rt),u.call(this,t,s),!h.isInteger(i)||i<0)throw TypeError("id must be a non-negative integer");if(!h.isString(n))throw TypeError("type must be a string");if(r!==rt&&!a.test(r=r.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(e!==rt&&!h.isString(e))throw TypeError("extend must be a string");this.rule=(r="proto3_optional"===r?"optional":r)&&"optional"!==r?r:rt,this.type=n,this.id=i,this.extend=e||rt,this.repeated="repeated"===r,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!h.Long&&f.long[n]!==rt,this.bytes="bytes"===n,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this.comment=o}o.fromJSON=function(t,i){t=new o(t,i.id,i.type,i.rule,i.extend,i.options,i.comment);return i.edition&&(t.u=i.edition),t.h="proto3",t},Object.defineProperty(o.prototype,"required",{get:function(){return"LEGACY_REQUIRED"===this.f.field_presence}}),Object.defineProperty(o.prototype,"optional",{get:function(){return!this.required}}),Object.defineProperty(o.prototype,"delimited",{get:function(){return this.resolvedType instanceof r&&"DELIMITED"===this.f.message_encoding}}),Object.defineProperty(o.prototype,"packed",{get:function(){return"PACKED"===this.f.repeated_field_encoding}}),Object.defineProperty(o.prototype,"hasPresence",{get:function(){return!this.repeated&&!this.map&&(this.partOf||this.declaringField||this.extensionField||"IMPLICIT"!==this.f.field_presence)}}),o.prototype.setOption=function(t,i,n){return u.prototype.setOption.call(this,t,i,n)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return h.toObject(["edition",this.a(),"rule","optional"!==this.rule&&this.rule||rt,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:rt])},o.prototype.resolve=function(){var t;return this.resolved?this:((this.typeDefault=f.defaults[this.type])===rt?(this.resolvedType=(this.declaringField||this).parent.lookupTypeOrEnum(this.type),this.resolvedType instanceof r?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof e&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(this.options.packed===rt||!this.resolvedType||this.resolvedType instanceof e||delete this.options.packed,Object.keys(this.options).length||(this.options=rt)),this.long?(this.typeDefault=h.Long.fromNumber(this.typeDefault,"uint64"===this.type||"fixed64"===this.type),Object.freeze&&Object.freeze(this.typeDefault)):this.bytes&&"string"==typeof this.typeDefault&&(h.base64.test(this.typeDefault)?h.base64.decode(this.typeDefault,t=h.newBuffer(h.base64.length(this.typeDefault)),0):h.utf8.write(this.typeDefault,t=h.newBuffer(h.utf8.length(this.typeDefault)),0),this.typeDefault=t),this.map?this.defaultValue=h.emptyObject:this.repeated?this.defaultValue=h.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof r&&(this.parent.ctor.prototype[this.name]=this.defaultValue),u.prototype.resolve.call(this))},o.prototype.c=function(t){var i;return"proto2"!==t&&"proto3"!==t?{}:(t={},"required"===this.rule&&(t.field_presence="LEGACY_REQUIRED"),this.parent&&f.defaults[this.type]===rt&&(i=this.parent.get(this.type.split(".").pop()))&&i instanceof r&&i.group&&(t.message_encoding="DELIMITED"),!0===this.getOption("packed")?t.repeated_field_encoding="PACKED":!1===this.getOption("packed")&&(t.repeated_field_encoding="EXPANDED"),t)},o.prototype.o=function(t){return u.prototype.o.call(this,this.u||t)},o.d=function(n,r,e,s){return"function"==typeof r?r=h.decorateType(r).name:r&&"object"==typeof r&&(r=h.decorateEnum(r).name),function(t,i){h.decorateType(t.constructor).add(new o(i,n,r,e,{default:s}))}},o.l=function(t){r=t}},{16:16,25:25,37:37,38:38}],18:[function(t,i,n){var r=i.exports=t(19);r.build="light",r.load=function(t,i,n){return(i="function"==typeof i?(n=i,new r.Root):i||new r.Root).load(t,n)},r.loadSync=function(t,i){return(i=i||new r.Root).loadSync(t)},r.encoder=t(15),r.decoder=t(14),r.verifier=t(43),r.converter=t(13),r.ReflectionObject=t(25),r.Namespace=t(24),r.Root=t(30),r.Enum=t(16),r.Type=t(36),r.Field=t(17),r.OneOf=t(26),r.MapField=t(21),r.Service=t(34),r.Method=t(23),r.Message=t(22),r.wrappers=t(44),r.types=t(37),r.util=t(38),r.ReflectionObject.l(r.Root),r.Namespace.l(r.Type,r.Service,r.Enum),r.Root.l(r.Type),r.Field.l(r.Type)},{13:13,14:14,15:15,16:16,17:17,19:19,21:21,22:22,23:23,24:24,25:25,26:26,30:30,34:34,36:36,37:37,38:38,43:43,44:44}],19:[function(t,i,n){var r=n;function e(){r.util.l(),r.Writer.l(r.BufferWriter),r.Reader.l(r.BufferReader)}r.build="minimal",r.Writer=t(45),r.BufferWriter=t(46),r.Reader=t(28),r.BufferReader=t(29),r.util=t(41),r.rpc=t(32),r.roots=t(31),r.configure=e,e()},{28:28,29:29,31:31,32:32,41:41,45:45,46:46}],20:[function(t,i,n){i=i.exports=t(18);i.build="full",i.tokenize=t(35),i.parse=t(27),i.common=t(12),i.Root.l(i.Type,i.parse,i.common)},{12:12,18:18,27:27,35:35}],21:[function(t,i,n){i.exports=s;var o=t(17),r=(((s.prototype=Object.create(o.prototype)).constructor=s).className="MapField",t(37)),u=t(38);function s(t,i,n,r,e,s){if(o.call(this,t,i,r,rt,rt,e,s),!u.isString(n))throw TypeError("keyType must be a string");this.keyType=n,this.resolvedKeyType=null,this.map=!0}s.fromJSON=function(t,i){return new s(t,i.id,i.keyType,i.type,i.options,i.comment)},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return u.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:rt])},s.prototype.resolve=function(){if(this.resolved)return this;if(r.mapKey[this.keyType]===rt)throw Error("invalid key type: "+this.keyType);return o.prototype.resolve.call(this)},s.d=function(n,r,e){return"function"==typeof e?e=u.decorateType(e).name:e&&"object"==typeof e&&(e=u.decorateEnum(e).name),function(t,i){u.decorateType(t.constructor).add(new s(i,n,r,e))}}},{17:17,37:37,38:38}],22:[function(t,i,n){i.exports=e;var r=t(41);function e(t){if(t)for(var i=Object.keys(t),n=0;n<i.length;++n){var r=i[n];"__proto__"!==r&&(this[r]=t[r])}}e.create=function(t){return this.$type.create(t)},e.encode=function(t,i){return this.$type.encode(t,i)},e.encodeDelimited=function(t,i){return this.$type.encodeDelimited(t,i)},e.decode=function(t){return this.$type.decode(t)},e.decodeDelimited=function(t){return this.$type.decodeDelimited(t)},e.verify=function(t){return this.$type.verify(t)},e.fromObject=function(t){return this.$type.fromObject(t)},e.toObject=function(t,i){return this.$type.toObject(t,i)},e.prototype.toJSON=function(){return this.$type.toObject(this,r.toJSONOptions)}},{41:41}],23:[function(t,i,n){i.exports=r;var h=t(25),a=(((r.prototype=Object.create(h.prototype)).constructor=r).className="Method",t(38));function r(t,i,n,r,e,s,o,u,f){if(a.isObject(e)?(o=e,e=s=rt):a.isObject(s)&&(o=s,s=rt),i!==rt&&!a.isString(i))throw TypeError("type must be a string");if(!a.isString(n))throw TypeError("requestType must be a string");if(!a.isString(r))throw TypeError("responseType must be a string");h.call(this,t,o),this.type=i||"rpc",this.requestType=n,this.requestStream=!!e||rt,this.responseType=r,this.responseStream=!!s||rt,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=u,this.parsedOptions=f}r.fromJSON=function(t,i){return new r(t,i.type,i.requestType,i.responseType,i.requestStream,i.responseStream,i.options,i.comment,i.parsedOptions)},r.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return a.toObject(["type","rpc"!==this.type&&this.type||rt,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",t?this.comment:rt,"parsedOptions",this.parsedOptions])},r.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),h.prototype.resolve.call(this))}},{25:25,38:38}],24:[function(t,i,n){i.exports=c;var s,o,u,r=t(25),f=(((c.prototype=Object.create(r.prototype)).constructor=c).className="Namespace",t(17)),h=t(38),a=t(26);function e(t,i){if(!t||!t.length)return rt;for(var n={},r=0;r<t.length;++r)n[t[r].name]=t[r].toJSON(i);return n}function c(t,i){r.call(this,t,i),this.nested=rt,this.p=null,this.v=Object.create(null),this.b=!0,this.w=!0}function l(t){t.p=null,t.v=Object.create(null);for(var i=t;i=i.parent;)i.v=Object.create(null);return t}c.fromJSON=function(t,i,n){return n=h.checkDepth(n),new c(t,i.options).addJSON(i.nested,n)},c.arrayToJSON=e,c.isReservedId=function(t,i){if(t)for(var n=0;n<t.length;++n)if("string"!=typeof t[n]&&t[n][0]<=i&&t[n][1]>i)return!0;return!1},c.isReservedName=function(t,i){if(t)for(var n=0;n<t.length;++n)if(t[n]===i)return!0;return!1},Object.defineProperty(c.prototype,"nestedArray",{get:function(){return this.p||(this.p=h.toArray(this.nested))}}),c.prototype.toJSON=function(t){return h.toObject(["options",this.options,"nested",e(this.nestedArray,t)])},c.prototype.addJSON=function(t,i){i=h.checkDepth(i);if(t)for(var n,r=Object.keys(t),e=0;e<r.length;++e)n=t[r[e]],this.add((n.fields!==rt?s:n.values!==rt?u:n.methods!==rt?o:n.id!==rt?f:c).fromJSON(r[e],n,i+1));return this},c.prototype.get=function(t){return this.nested&&Object.prototype.hasOwnProperty.call(this.nested,t)?this.nested[t]:null},c.prototype.getEnum=function(t){if(this.nested&&Object.prototype.hasOwnProperty.call(this.nested,t)&&this.nested[t]instanceof u)return this.nested[t].values;throw Error("no such enum: "+t)},c.prototype.add=function(t){if(!(t instanceof f&&t.extend!==rt||t instanceof s||t instanceof a||t instanceof u||t instanceof o||t instanceof c))throw TypeError("object must be a valid nested object");if("__proto__"===t.name)return this;if(this.nested){var i=this.get(t.name);if(i){if(!(i instanceof c&&t instanceof c)||i instanceof s||i instanceof o)throw Error("duplicate name '"+t.name+"' in "+this);for(var n=i.nestedArray,r=0;r<n.length;++r)t.add(n[r]);this.remove(i),this.nested||(this.nested={}),t.setOptions(i.options,!0)}}else this.nested={};this.nested[t.name]=t,this instanceof s||this instanceof o||this instanceof u||this instanceof f||t.u||(t.u=t.h),this.b=!0,this.w=!0;for(var e=this;e=e.parent;)e.b=!0,e.w=!0;return t.onAdd(this),l(this)},c.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("object must be a ReflectionObject");if(t.parent!==this)throw Error(t+" is not a member of "+this);return delete this.nested[t.name],Object.keys(this.nested).length||(this.nested=rt),t.onRemove(this),l(this)},c.prototype.define=function(t,i){if(h.isString(t))t=t.split(".");else if(!Array.isArray(t))throw TypeError("illegal path");if(t&&t.length&&""===t[0])throw Error("path must be relative");if(t.length>h.recursionLimit)throw Error("max depth exceeded");for(var n=this;0<t.length;){var r=t.shift();if(n.nested&&n.nested[r]){if(!((n=n.nested[r])instanceof c))throw Error("path conflicts with non-namespace objects")}else n.add(n=new c(r))}return i&&n.addJSON(i),n},c.prototype.resolveAll=function(){if(this.w){this.m(this.u);var t=this.nestedArray,i=0;for(this.resolve();i<t.length;)t[i]instanceof c?t[i++].resolveAll():t[i++].resolve();this.w=!1}return this},c.prototype.m=function(i){return this.b&&(this.b=!1,i=this.u||i,r.prototype.m.call(this,i),this.nestedArray.forEach(t=>{t.m(i)})),this},c.prototype.lookup=function(t,i,n){if("boolean"==typeof i?(n=i,i=rt):i&&!Array.isArray(i)&&(i=[i]),h.isString(t)&&t.length){if("."===t)return this.root;t=t.split(".")}else if(!t.length)return this;var r=t.join(".");if(""===t[0])return this.root.lookup(t.slice(1),i);var e=this.root.y&&this.root.y["."+r];if(e&&(!i||~i.indexOf(e.constructor)))return e;if((e=this.g(t,r))&&(!i||~i.indexOf(e.constructor)))return e;if(!n)for(var s=this;s.parent;){if((e=s.parent.g(t,r))&&(!i||~i.indexOf(e.constructor)))return e;s=s.parent}return null},c.prototype.g=function(t,i){if(Object.prototype.hasOwnProperty.call(this.v,i))return this.v[i];var n=this.get(t[0]),r=null;if(n)1===t.length?r=n:n instanceof c&&(t=t.slice(1),r=n.g(t,t.join(".")));else for(var e=0;e<this.nestedArray.length;++e)if(this.p[e]instanceof c&&(n=this.p[e].g(t,i))){r=n;break}return this.v[i]=r},c.prototype.lookupType=function(t){var i=this.lookup(t,[s]);if(i)return i;throw Error("no such type: "+t)},c.prototype.lookupEnum=function(t){var i=this.lookup(t,[u]);if(i)return i;throw Error("no such Enum '"+t+"' in "+this)},c.prototype.lookupTypeOrEnum=function(t){var i=this.lookup(t,[s,u]);if(i)return i;throw Error("no such Type or Enum '"+t+"' in "+this)},c.prototype.lookupService=function(t){var i=this.lookup(t,[o]);if(i)return i;throw Error("no such Service '"+t+"' in "+this)},c.l=function(t,i,n){s=t,o=i,u=n}},{17:17,25:25,26:26,38:38}],25:[function(t,i,n){(i.exports=h).className="ReflectionObject";const r=t(26);var e,o=t(38),s={enum_type:"OPEN",field_presence:"EXPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY"},u={enum_type:"CLOSED",field_presence:"EXPLICIT",json_format:"LEGACY_BEST_EFFORT",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"EXPANDED",utf8_validation:"NONE"},f={enum_type:"OPEN",field_presence:"IMPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY"};function h(t,i){if(!o.isString(t))throw TypeError("name must be a string");if(i&&!o.isObject(i))throw TypeError("options must be an object");this.options=i,this.parsedOptions=null,this.name=t,this.u=null,this.h="proto2",this.f={},this.j=!1,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}Object.defineProperties(h.prototype,{root:{get:function(){for(var t=this;null!==t.parent;)t=t.parent;return t}},fullName:{get:function(){for(var t=[this.name],i=this.parent;i;)t.unshift(i.name),i=i.parent;return t.join(".")}}}),h.prototype.toJSON=function(){throw Error()},h.prototype.onAdd=function(t){this.parent&&this.parent!==t&&this.parent.remove(this),this.parent=t,this.resolved=!1;t=t.root;t instanceof e&&t.k(this)},h.prototype.onRemove=function(t){t=t.root;t instanceof e&&t.O(this),this.parent=null,this.resolved=!1},h.prototype.resolve=function(){return this.resolved||this.root instanceof e&&(this.resolved=!0),this},h.prototype.m=function(t){return this.o(this.u||t)},h.prototype.o=function(t){if(!this.j){var i={};if(!t)throw Error("Unknown edition for "+this.fullName);var n=o.merge({},this.options&&this.options.features,this.c(t));if(this.u){if("proto2"===t)i=Object.assign({},u);else if("proto3"===t)i=Object.assign({},f);else{if("2023"!==t)throw Error("Unknown edition: "+t);i=Object.assign({},s)}this.f=o.merge(i,n)}else{if(this.partOf instanceof r){t=o.merge({},this.partOf.f);this.f=o.merge(t,n)}else if(!this.declaringField){if(!this.parent)throw Error("Unable to find a parent for "+this.fullName);i=o.merge({},this.parent.f);this.f=o.merge(i,n)}this.extensionField&&(this.extensionField.f=this.f)}this.j=!0}},h.prototype.c=function(){return{}},h.prototype.getOption=function(t){return this.options?this.options[t]:rt},h.prototype.setOption=function(t,i,n){return"__proto__"!==t&&(this.options||(this.options={}),/^features\./.test(t)?o.setProperty(this.options,t,i,n):n&&this.options[t]!==rt||(this.getOption(t)!==i&&(this.resolved=!1),this.options[t]=i)),this},h.prototype.setParsedOption=function(i,t,n){var r,e,s;return"__proto__"!==i&&(this.parsedOptions||(this.parsedOptions=[]),r=this.parsedOptions,n?(e=r.find(function(t){return Object.prototype.hasOwnProperty.call(t,i)}))?(s=e[i],o.setProperty(s,n,t)):((e={})[i]=o.setProperty({},n,t),r.push(e)):((s={})[i]=t,r.push(s))),this},h.prototype.setOptions=function(t,i){if(t)for(var n=Object.keys(t),r=0;r<n.length;++r)this.setOption(n[r],t[n[r]],i);return this},h.prototype.toString=function(){var t=this.constructor.className,i=this.fullName;return i.length?t+" "+i:t},h.prototype.a=function(){return this.u&&"proto3"!==this.u?this.u:rt},h.l=function(t){e=t}},{26:26,38:38}],26:[function(t,i,n){i.exports=o;var e=t(25),r=(((o.prototype=Object.create(e.prototype)).constructor=o).className="OneOf",t(17)),s=t(38);function o(t,i,n,r){if(Array.isArray(i)||(n=i,i=rt),e.call(this,t,n),i!==rt&&!Array.isArray(i))throw TypeError("fieldNames must be an Array");this.oneof=i||[],this.fieldsArray=[],this.comment=r}function u(t){if(t.parent)for(var i=0;i<t.fieldsArray.length;++i)t.fieldsArray[i].parent||t.parent.add(t.fieldsArray[i])}o.fromJSON=function(t,i){return new o(t,i.oneof,i.options,i.comment)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return s.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:rt])},o.prototype.add=function(t){if(t instanceof r)return t.parent&&t.parent!==this.parent&&t.parent.remove(t),this.oneof.push(t.name),this.fieldsArray.push(t),u(t.partOf=this),this;throw TypeError("field must be a Field")},o.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("field must be a Field");var i=this.fieldsArray.indexOf(t);if(i<0)throw Error(t+" is not a member of "+this);return this.fieldsArray.splice(i,1),-1<(i=this.oneof.indexOf(t.name))&&this.oneof.splice(i,1),t.partOf=null,this},o.prototype.onAdd=function(t){e.prototype.onAdd.call(this,t);for(var i=0;i<this.oneof.length;++i){var n=t.get(this.oneof[i]);n&&!n.partOf&&(n.partOf=this).fieldsArray.push(n)}u(this)},o.prototype.onRemove=function(t){for(var i,n=0;n<this.fieldsArray.length;++n)(i=this.fieldsArray[n]).parent&&i.parent.remove(i);e.prototype.onRemove.call(this,t)},Object.defineProperty(o.prototype,"isProto3Optional",{get:function(){var t;return null!=this.fieldsArray&&1===this.fieldsArray.length&&(null!=(t=this.fieldsArray[0]).options&&!0===t.options.proto3_optional)}}),o.d=function(){for(var n=Array(arguments.length),t=0;t<arguments.length;)n[t]=arguments[t++];return function(t,i){s.decorateType(t.constructor).add(new o(i,n)),Object.defineProperty(t,i,{get:s.oneOfGetter(n),set:s.oneOfSetter(n)})}}},{17:17,25:25,38:38}],27:[function(t,i,n){(i.exports=nt).filename=null,nt.defaults={keepCase:!1};var $=t(35),M=t(30),P=t(36),F=t(17),q=t(21),U=t(26),B=t(16),D=t(34),C=t(23),z=t(25),X=t(37),Z=t(38),G=/^[1-9][0-9]*$/,H=/^-?[1-9][0-9]*$/,W=/^0[x][0-9a-fA-F]+$/,Y=/^-?0[x][0-9a-fA-F]+$/,K=/^0[0-7]+$/,J=/^-?0[0-7]+$/,Q=Z.patterns.numberRe,tt=/^[a-zA-Z_][a-zA-Z_0-9]*$/,it=Z.patterns.typeRefRe;function nt(t,i,n){i instanceof M||(n=i,i=new M);var r,e,s,a,o,u,f=(n=n||nt.defaults).preferTrailingComment||!1,h=$(t,n.alternateCommentMode||!1),l=h.next,c=h.push,d=h.peek,p=h.skip,v=h.cmnt,b=!0,w="proto2",m=i,y=[],g={},j=n.keepCase?function(t){return t}:Z.camelCase;function E(t,i,n){var r=nt.filename;return n||(nt.filename=null),Error("illegal "+(i||"token")+" '"+t+"' ("+(r?r+", ":"")+"line "+h.line+")")}function k(){var t,i=[];do{if('"'!==(t=l())&&"'"!==t)throw E(t)}while(i.push(l()),p(t),'"'===(t=d())||"'"===t);return i.join("")}function O(i){var n=l();switch(n){case"'":case'"':return c(n),k();case"true":case"TRUE":return!0;case"false":case"FALSE":return!1}try{var t=n,r=!0,e=1;switch("-"==(t[0]||"")&&(e=-1,t=t.substring(1)),t){case"inf":case"INF":case"Inf":return e*(1/0);case"nan":case"NAN":case"Nan":case"NaN":return NaN;case"0":return 0}if(G.test(t))return e*parseInt(t,10);if(W.test(t))return e*parseInt(t,16);if(K.test(t))return e*parseInt(t,8);if(Q.test(t))return e*parseFloat(t);throw E(t,"number",r)}catch(t){if(i&&it.test(n))return n;throw E(n,"value")}}function _(i,n){var t;do{if(!n||'"'!==(r=d())&&"'"!==r)try{i.push([t=x(l()),p("to",!0)?x(l()):t])}catch(t){if(!(n&&it.test(r)&&2023<=w))throw t;i.push(r)}else{var r=k();if(i.push(r),2023<=w)throw E(r,"id")}}while(p(",",!0));var e={options:rt,setOption:function(t,i){this.options===rt&&(this.options={}),this.options[t]=i}};T(e,function(t){if("option"!==t)throw E(t);L(e,t),p(";")},function(){R(e)})}function x(t,i){switch(t){case"max":case"MAX":case"Max":return 536870911;case"0":return 0}if(i||"-"!=(t[0]||"")){if(H.test(t))return parseInt(t,10);if(Y.test(t))return parseInt(t,16);if(J.test(t))return parseInt(t,8)}throw E(t,"id")}function A(t,i,n){switch(n===rt&&(n=0),i){case"option":return L(t,i),p(";"),1;case"message":return I(t,0,n+1),1;case"enum":return N(t),1;case"service":var h,r=t,e=i,a=n+1;if((a=a===rt?0:a)>Z.recursionLimit)throw Error("max depth exceeded");if(tt.test(e=l()))return T(h=new D(e),function(t){if(!A(h,t,a)){if("rpc"!==t)throw E(t);var i=h,n=v(),r=t;if(!tt.test(t=l()))throw E(t,"name");var e,s,o,u=t;if(p("("),p("stream",!0)&&(s=!0),!it.test(t=l()))throw E(t);if(e=t,p(")"),p("returns"),p("("),p("stream",!0)&&(o=!0),!it.test(t=l()))throw E(t);t=t,p(")");var f=new C(u,r,e,t,s,o);f.comment=n,T(f,function(t){if("option"!==t)throw E(t);L(f,t),p(";")}),i.add(f)}}),r.add(h),r===m&&y.push(h),1;throw E(e,"service name");case"extend":var s,o=t,r=i,u=n;if(it.test(r=l()))return s=r,T(null,function(t){switch(t){case"required":case"repeated":S(o,t,s,u+1);break;case"optional":S(o,"proto3"===w?"proto3_optional":"optional",s,u+1);break;default:if("proto2"===w||!it.test(t))throw E(t);c(t),S(o,"optional",s,u+1)}}),1;throw E(r,"reference")}}function T(t,i,n){var r,e=h.line;if(t&&("string"!=typeof t.comment&&(t.comment=v()),t.filename=nt.filename),p("{",!0)){for(;"}"!==(r=l());)i(r);p(";",!0)}else n&&n(),p(";"),t&&("string"!=typeof t.comment||f)&&(t.comment=v(e)||t.comment)}function I(t,i,f){if((f=f===rt?0:f)>Z.nestingLimit)throw Error("max depth exceeded");if(!tt.test(i=l()))throw E(i,"type name");var h=new P(i);T(h,function(t){if(!A(h,t,f))switch(t){case"map":var i=h,n=(p("<"),l());if(X.mapKey[n]===rt)throw E(n,"type");p(",");var r=l();if(!it.test(r))throw E(r,"type");p(">");var e=l();if(!tt.test(e))throw E(e,"name");p("=");var s=new q(j(e),x(l()),n,r);T(s,function(t){if("option"!==t)throw E(t);L(s,t),p(";")},function(){R(s)}),i.add(s);break;case"required":if("proto2"!==w)throw E(t);case"repeated":S(h,t,rt,f+1);break;case"optional":if("proto3"===w)S(h,"proto3_optional",rt,f+1);else{if("proto2"!==w)throw E(t);S(h,"optional",rt,f+1)}break;case"oneof":var e=h,n=t,o=f+1;if(!tt.test(n=l()))throw E(n,"name");var u=new U(j(n));T(u,function(t){"option"===t?(L(u,t),p(";")):(c(t),S(u,"optional",rt,o))}),e.add(u);break;case"extensions":_(h.extensions||(h.extensions=[]));break;case"reserved":_(h.reserved||(h.reserved=[]),!0);break;default:if("proto2"===w||!it.test(t))throw E(t);c(t),S(h,"optional",rt,f+1)}}),t.add(h),t===m&&y.push(h)}function S(t,i,n,r){var e=l();if("group"===e){var s=t,o=i,u=r;if((u=u===rt?0:u)>Z.nestingLimit)throw Error("max depth exceeded");if(2023<=w)throw E("group");var f,h,r=l();if(tt.test(r))return h=Z.lcFirst(r),r===h&&(r=Z.ucFirst(r)),p("="),a=x(l()),(f=new P(r)).group=!0,(h=new F(h,a,r,o)).filename=nt.filename,T(f,function(t){switch(t){case"option":L(f,t),p(";");break;case"required":case"repeated":S(f,t,rt,u+1);break;case"optional":S(f,"proto3"===w?"proto3_optional":"optional",rt,u+1);break;case"message":I(f,0,u+1);break;case"enum":N(f);break;case"reserved":_(f.reserved||(f.reserved=[]),!0);break;default:throw E(t)}}),void s.add(f).add(h);throw E(r,"name")}for(;e.endsWith(".")||d().startsWith(".");)e+=l();if(!it.test(e))throw E(e,"type");var a=l();if(!tt.test(a))throw E(a,"name");a=j(a),p("=");var c=new F(a,x(l()),e,i,n);T(c,function(t){if("option"!==t)throw E(t);L(c,t),p(";")},function(){R(c)}),"proto3_optional"===i?(o=new U("_"+a),c.setOption("proto3_optional",!0),o.add(c),t.add(o)):t.add(c),t===m&&y.push(c)}function N(t,i){if(!tt.test(i=l()))throw E(i,"name");var s=new B(i);T(s,function(t){switch(t){case"option":L(s,t),p(";");break;case"reserved":_(s.reserved||(s.reserved=[]),!0),s.reserved===rt&&(s.reserved=[]);break;default:var i=s,n=t;if(!tt.test(n))throw E(n,"name");p("=");var r=x(l(),!0),e={options:rt,getOption:function(t){return this.options[t]},setOption:function(t,i){z.prototype.setOption.call(e,t,i)},setParsedOption:function(){return rt}};return T(e,function(t){if("option"!==t)throw E(t);L(e,t),p(";")},function(){R(e)}),void i.add(n,r,e.comment,e.parsedOptions||e.options)}}),t.add(s),t===m&&y.push(s)}function L(t,i){var n=!0;for("option"===i&&(i=l());"="!==i;){if(null===i)throw E(i,"end of input");if("("===i&&(r=l(),p(")"),i="("+r+")"),n){if(n=!1,i.includes(".")&&!i.includes("(")){var r=i.split("."),e=r[0]+".";i=r[1];continue}e=i}else f=f?f+i:i;i=l()}var s,o,u=f?e.concat(f):e,u=function t(i,n,r){r===rt&&(r=0);if(r>Z.recursionLimit)throw Error("max depth exceeded");if(p("{",!0)){for(var e={};!p("}",!0);){if(!tt.test(a=l()))throw E(a,"name");if(null===a)throw E(a,"end of input");var s,o,u=a;if(p(":",!0),"{"===d())s=t(i,n+"."+a,r+1);else if("["===d()){if(s=[],p("[",!0)){for(;o=O(!0),s.push(o),p(",",!0););p("]"),void 0!==o&&V(i,n+"."+a,o)}}else s=O(!0),V(i,n+"."+a,s);var f=e[u];f&&(s=[].concat(f).concat(s)),"__proto__"!==u&&(e[u]=s),p(",",!0),p(";",!0)}return e}var h=O(!0);V(i,n,h);return h}(t,u),f=f&&"."===f[0]?f.slice(1):f;e=e&&"."===e[e.length-1]?e.slice(0,-1):e,s=e,u=u,o=f,(t=t).setParsedOption&&t.setParsedOption(s,u,o)}function V(t,i,n){m===t&&/^features\./.test(i)?g[i]=n:t.setOption&&t.setOption(i,n)}function R(t){if(p("[",!0)){for(;L(t,"option"),p(",",!0););p("]")}}for(;null!==(a=l());)switch(a){case"package":if(!b)throw E(a);if(r!==rt)throw E("package");if(r=l(),!it.test(r))throw E(r,"name");m=m.define(r),p(";");break;case"import":if(!b)throw E(a);switch(u=o=void 0,d()){case"weak":u=s=s||[],l();break;case"public":l();default:u=e=e||[]}o=k(),p(";"),u.push(o);break;case"syntax":if(!b)throw E(a);if(p("="),(w=k())<2023)throw E(w,"syntax");p(";");break;case"edition":if(!b)throw E(a);if(p("="),w=k(),!["2023"].includes(w))throw E(w,"edition");p(";");break;case"option":L(m,a),p(";",!0);break;default:if(A(m,a,0)){b=!1;continue}throw E(a)}return y.forEach(i=>{i.u=w,Object.keys(g).forEach(t=>{i.getOption(t)===rt&&i.setOption(t,g[t],!0)})}),nt.filename=null,{package:r,imports:e,weakImports:s,root:i}}},{16:16,17:17,21:21,23:23,25:25,26:26,30:30,34:34,35:35,36:36,37:37,38:38}],28:[function(t,i,n){i.exports=f;var r,e=t(41),s=e.LongBits,o=e.utf8;function u(t,i){return RangeError("index out of range: "+t.pos+" + "+(i||1)+" > "+t.len)}function f(t){this.buf=t,this.pos=0,this.len=t.length}function h(){return e.Buffer?function(t){return(f.create=function(t){return e.Buffer.isBuffer(t)?new r(t):c(t)})(t)}:c}var a,c="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new f(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new f(t);throw Error("illegal buffer")};function l(){var t=new s(0,0),i=0;if(!(4<this.len-this.pos)){for(;i<3;++i){if(this.pos>=this.len)throw u(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*i)>>>0,t}for(;i<4;++i)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(i=0,4<this.len-this.pos){for(;i<5;++i)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}else for(;i<5;++i){if(this.pos>=this.len)throw u(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function d(t,i){return(t[i-4]|t[i-3]<<8|t[i-2]<<16|t[i-1]<<24)>>>0}function p(){if(this.pos+8>this.len)throw u(this,8);return new s(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))}f.create=h(),f.prototype._=e.Array.prototype.subarray||e.Array.prototype.slice,f.prototype.uint32=(a=4294967295,function(){if(this.len-this.pos<5){if(this.pos>=this.len)throw u(this);if(128<=this.buf[this.pos]){var t=this;for(var i=0,n=0;n<4;++n){if(t.pos>=t.len)throw u(t);var r=t.buf[t.pos++],i=(i|(127&r)<<7*n)>>>0;if(r<128)return i}throw u(t);return}}if(a=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128||(a=(a|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128||!((this.pos+=5)>this.len))))))return a;throw this.pos=this.len,u(this,10)}),f.prototype.int32=function(){return 0|this.uint32()},f.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},f.prototype.bool=function(){return 0!==this.uint32()},f.prototype.fixed32=function(){if(this.pos+4>this.len)throw u(this,4);return d(this.buf,this.pos+=4)},f.prototype.sfixed32=function(){if(this.pos+4>this.len)throw u(this,4);return 0|d(this.buf,this.pos+=4)},f.prototype.float=function(){if(this.pos+4>this.len)throw u(this,4);var t=e.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},f.prototype.double=function(){if(this.pos+8>this.len)throw u(this,4);var t=e.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},f.prototype.bytes=function(){var t=this.uint32(),i=this.pos,n=this.pos+t;if(n>this.len)throw u(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(i,n):i===n?(t=e.Buffer)?t.alloc(0):new this.buf.constructor(0):this._.call(this.buf,i,n)},f.prototype.string=function(){var t=this.bytes();return o.read(t,0,t.length)},f.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw u(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw u(this)}while(128&this.buf[this.pos++]);return this},f.recursionLimit=e.recursionLimit,f.prototype.skipType=function(t,i){if(f.recursionLimit<(i=i===rt?0:i))throw Error("maximum nesting depth exceeded");switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t,i+1);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},f.l=function(t){r=t,f.create=h(),r.l();var i=e.Long?"toLong":"toNumber";e.merge(f.prototype,{int64:function(){return l.call(this)[i](!1)},uint64:function(){return l.call(this)[i](!0)},sint64:function(){return l.call(this).zzDecode()[i](!1)},fixed64:function(){return p.call(this)[i](!0)},sfixed64:function(){return p.call(this)[i](!1)}})}},{41:41}],29:[function(t,i,n){i.exports=s;var r=t(28),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(41));function s(t){r.call(this,t)}s.l=function(){e.Buffer&&(s.prototype._=e.Buffer.prototype.slice)},s.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))},s.l()},{28:28,41:41}],30:[function(t,i,n){i.exports=f;var r,p,v,e=t(24),s=(((f.prototype=Object.create(e.prototype)).constructor=f).className="Root",t(17)),o=t(16),u=t(26),b=t(38);function f(t){e.call(this,"",t),this.deferred=[],this.files=[],this.u="proto2",this.y={}}function w(){}f.fromJSON=function(t,i,n){return n=b.checkDepth(n),i=i||new f,t.options&&i.setOptions(t.options),i.addJSON(t.nested,n).resolveAll()},f.prototype.resolvePath=b.path.resolve,f.prototype.fetch=b.fetch,f.prototype.load=function t(i,o,s){"function"==typeof o&&(s=o,o=rt);var u=this;if(!s)return b.asPromise(t,u,i,o);var f=s===w;function h(t,i){if(s){if(f)throw t;i&&i.resolveAll();var n=s;s=null,n(t,i)}}function a(t){var i=t.lastIndexOf("google/protobuf/");if(-1<i){t=t.substring(i);if(t in v)return t}return null}function c(t,i,n){n===rt&&(n=0);try{if(n>b.recursionLimit)throw Error("max depth exceeded");if(b.isString(i)&&"{"==(i[0]||"")&&(i=JSON.parse(i)),b.isString(i)){p.filename=t;var r,e=p(i,u,o),s=0;if(e.imports)for(;s<e.imports.length;++s)(r=a(e.imports[s])||u.resolvePath(t,e.imports[s]))&&l(r,!1,n+1);if(e.weakImports)for(s=0;s<e.weakImports.length;++s)(r=a(e.weakImports[s])||u.resolvePath(t,e.weakImports[s]))&&l(r,!0,n+1)}else u.setOptions(i.options).addJSON(i.nested)}catch(t){h(t)}f||d||h(null,u)}function l(n,r,e){if(e===rt&&(e=0),n=a(n)||n,!~u.files.indexOf(n))if(u.files.push(n),n in v)f?c(n,v[n],e):(++d,setTimeout(function(){--d,c(n,v[n],e)}));else if(f){var t;try{t=b.fs.readFileSync(n).toString("utf8")}catch(t){return void(r||h(t))}c(n,t,e)}else++d,u.fetch(n,function(t,i){--d,s&&(t?r?d||h(null,u):h(t):c(n,i,e))})}var d=0;b.isString(i)&&(i=[i]);for(var n,r=0;r<i.length;++r)(n=u.resolvePath("",i[r]))&&l(n);return f?u.resolveAll():d||h(null,u),u},f.prototype.loadSync=function(t,i){if(b.isNode)return this.load(t,i,w);throw Error("not supported")},f.prototype.resolveAll=function(){if(!this.w)return this;if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(t){return"'extend "+t.extend+"' in "+t.parent.fullName}).join(", "));return e.prototype.resolveAll.call(this)};var h=/^[A-Z]/;function a(t,i){var n,r=i.parent.lookup(i.extend);if(r)return n=new s(i.fullName,i.id,i.type,i.rule,rt,i.options),r.get(n.name)||((n.declaringField=i).extensionField=n,r.add(n)),1}f.prototype.k=function(t){if(t instanceof s)t.extend===rt||t.extensionField||a(0,t)||this.deferred.push(t);else if(t instanceof o)h.test(t.name)&&(t.parent[t.name]=t.values);else if(!(t instanceof u)){if(t instanceof r)for(var i=0;i<this.deferred.length;)a(0,this.deferred[i])?this.deferred.splice(i,1):++i;for(var n=0;n<t.nestedArray.length;++n)this.k(t.p[n]);h.test(t.name)&&(t.parent[t.name]=t)}(t instanceof r||t instanceof o||t instanceof s)&&(this.y[t.fullName]=t)},f.prototype.O=function(t){var i;if(t instanceof s)t.extend!==rt&&(t.extensionField?(t.extensionField.parent.remove(t.extensionField),t.extensionField=null):-1<(i=this.deferred.indexOf(t))&&this.deferred.splice(i,1));else if(t instanceof o)h.test(t.name)&&delete t.parent[t.name];else if(t instanceof e){for(var n=0;n<t.nestedArray.length;++n)this.O(t.p[n]);h.test(t.name)&&delete t.parent[t.name]}delete this.y[t.fullName]},f.l=function(t,i,n){r=t,p=i,v=n}},{16:16,17:17,24:24,26:26,38:38}],31:[function(t,i,n){i.exports=Object.create(null)},{}],32:[function(t,i,n){n.Service=t(33)},{33:33}],33:[function(t,i,n){i.exports=r;var u=t(41);function r(t,i,n){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");u.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=!!i,this.responseDelimited=!!n}((r.prototype=Object.create(u.EventEmitter.prototype)).constructor=r).prototype.rpcCall=function t(n,i,r,e,s){if(!e)throw TypeError("request must be specified");var o=this;if(!s)return u.asPromise(t,o,n,i,r,e);if(!o.rpcImpl)return setTimeout(function(){s(Error("already ended"))},0),rt;try{return o.rpcImpl(n,i[o.requestDelimited?"encodeDelimited":"encode"](e).finish(),function(t,i){if(t)return o.emit("error",t,n),s(t);if(null===i)return o.end(!0),rt;if(!(i instanceof r))try{i=r[o.responseDelimited?"decodeDelimited":"decode"](i)}catch(t){return o.emit("error",t,n),s(t)}return o.emit("data",i,n),s(null,i)})}catch(t){return o.emit("error",t,n),setTimeout(function(){s(t)},0),rt}},r.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},{41:41}],34:[function(t,i,n){i.exports=h;var r=t(24),o=(((h.prototype=Object.create(r.prototype)).constructor=h).className="Service",t(23)),u=t(38),f=t(32);function h(t,i){r.call(this,t,i),this.methods={},this.x=null}function e(t){return t.x=null,t}h.fromJSON=function(t,i,n){n=u.checkDepth(n);var r=new h(t,i.options);if(i.methods)for(var e=Object.keys(i.methods),s=0;s<e.length;++s)r.add(o.fromJSON(e[s],i.methods[e[s]]));return i.nested&&r.addJSON(i.nested,n),i.edition&&(r.u=i.edition),r.comment=i.comment,r.h="proto3",r},h.prototype.toJSON=function(t){var i=r.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return u.toObject(["edition",this.a(),"options",i&&i.options||rt,"methods",r.arrayToJSON(this.methodsArray,t)||{},"nested",i&&i.nested||rt,"comment",n?this.comment:rt])},Object.defineProperty(h.prototype,"methodsArray",{get:function(){return this.x||(this.x=u.toArray(this.methods))}}),h.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.methods,t)?this.methods[t]:r.prototype.get.call(this,t)},h.prototype.resolveAll=function(){if(this.w){r.prototype.resolve.call(this);for(var t=this.methodsArray,i=0;i<t.length;++i)t[i].resolve()}return this},h.prototype.m=function(i){return this.b&&(i=this.u||i,r.prototype.m.call(this,i),this.methodsArray.forEach(t=>{t.m(i)})),this},h.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);return t instanceof o?"__proto__"===t.name?this:e((this.methods[t.name]=t).parent=this):r.prototype.add.call(this,t)},h.prototype.remove=function(t){if(t instanceof o){if(this.methods[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.methods[t.name],t.parent=null,e(this)}return r.prototype.remove.call(this,t)},h.prototype.create=function(t,i,n){for(var r,e=new f.Service(t,i,n),s=0;s<this.methodsArray.length;++s)e[u.lcFirst((r=this.x[s]).resolve().name).replace(/[^$\w_]/g,"")]=function(n,r,e){return function(t,i){return f.Service.prototype.rpcCall.call(this,n,r,e,t,i)}}(r,r.resolvedRequestType.ctor,r.resolvedResponseType.ctor);return e}},{23:23,24:24,32:32,38:38}],35:[function(t,i,n){i.exports=s;var k=/[\s{}=;:[\],'"()<>]/g,O=/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,_=/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,x=/^ *[*/]+ */,A=/^\s*\*?\/*/,T=/\n/g,I=/\s/,r=/\\(.?)/g,e={0:"\0",r:"\r",n:"\n",t:"\t"};function S(t){return t.replace(r,function(t,i){switch(i){case"\\":case"":return i;default:return e[i]||""}})}function s(h,a){h=h.toString();var c=0,l=h.length,d=1,f=0,p={},v=[],b=null;function w(t){return Error("illegal "+t+" (line "+d+")")}function m(t){return h[0|t]||""}function y(t,i,n){var r,e={type:h[0|t++]||"",lineEmpty:!1,leading:n},n=a?2:3,s=t-n;do{if(--s<0||"\n"==(r=h[0|s]||"")){e.lineEmpty=!0;break}}while(" "===r||"\t"===r);for(var o=h.substring(t,i).split(T),u=0;u<o.length;++u)o[u]=o[u].replace(a?A:x,"").trim();e.text=o.join("\n").trim(),p[d]=e,f=d}function g(t){var i=j(t),t=h.substring(t,i);return/^\s*\/\//.test(t)}function j(t){for(var i=t;i<l&&"\n"!==m(i);)i++;return i}function r(){if(0<v.length)return v.shift();if(b){var t="'"===b?_:O,i=(t.lastIndex=c-1,t.exec(h));if(i)return c=t.lastIndex,E(b),b=null,S(i[1]);throw w("string")}var n,r,e,s,o,u=0===c;do{if(c===l)return null;for(n=!1;I.test(e=m(c));)if("\n"===e&&(u=!0,++d),++c===l)return null;if("/"===m(c)){if(++c===l)throw w("comment");if("/"===m(c))if(a){if(o=!1,g((s=c)-1))for(o=!0;(c=j(c))!==l&&(c++,u&&g(c)););else c=Math.min(l,j(c)+1);o&&(y(s,c,u),u=!0),d++}else{for(o="/"===m(s=c+1);"\n"!==m(++c);)if(c===l)return null;++c,o&&(y(s,c-1,u),u=!0),++d}else{if("*"!==(e=m(c)))return"/";s=c+1,o=a||"*"===m(s);do{if("\n"===e&&++d,++c===l)throw w("comment")}while(r=e,e=m(c),"*"!==r||"/"!==e);++c,o&&(y(s,c-2,u),u=!0)}n=!0}}while(n);var f=c;if(k.lastIndex=0,!k.test(m(f++)))for(;f<l&&!k.test(m(f));)++f;t=h.substring(c,c=f);return'"'!=t&&"'"!=t||(b=t),t}function E(t){v.push(t)}function e(){if(!v.length){var t=r();if(null===t)return null;E(t)}return v[0]}return Object.defineProperty({next:r,peek:e,push:E,skip:function(t,i){var n=e();if(n===t)return r(),!0;if(i)return!1;throw w("token '"+n+"', '"+t+"' expected")},cmnt:function(t){var i,n=null;return t===rt?(i=p[d-1],delete p[d-1],i&&(a||"*"===i.type||i.lineEmpty)&&(n=i.leading?i.text:null)):(f<t&&e(),i=p[t],delete p[t],!i||i.lineEmpty||!a&&"/"!==i.type||(n=i.leading?null:i.text)),n}},"line",{get:function(){return d}})}s.unescape=S},{}],36:[function(t,i,n){i.exports=y;var u=t(24),f=(((y.prototype=Object.create(u.prototype)).constructor=y).className="Type",t(16)),h=t(26),a=t(17),c=t(21),l=t(34),e=t(22),s=t(28),o=t(45),d=t(38),p=t(15),v=t(14),b=t(43),w=t(13),m=t(44);function y(t,i){t=t.replace(/\W/g,""),u.call(this,t,i),this.fields={},this.oneofs=rt,this.extensions=rt,this.reserved=rt,this.group=rt,this.A=null,this.e=null,this.T=null,this.I=null}function r(t){return t.A=t.e=t.T=null,delete t.encode,delete t.decode,delete t.verify,t}Object.defineProperties(y.prototype,{fieldsById:{get:function(){if(!this.A){this.A={};for(var t=Object.keys(this.fields),i=0;i<t.length;++i){var n=this.fields[t[i]],r=n.id;if(this.A[r])throw Error("duplicate id "+r+" in "+this);this.A[r]=n}}return this.A}},fieldsArray:{get:function(){return this.e||(this.e=d.toArray(this.fields))}},oneofsArray:{get:function(){return this.T||(this.T=d.toArray(this.oneofs))}},ctor:{get:function(){return this.I||(this.ctor=y.generateConstructor(this)())},set:function(t){for(var i=t.prototype,n=(i instanceof e||((t.prototype=new e).constructor=t,d.merge(t.prototype,i)),t.$type=t.prototype.$type=this,d.merge(t,e,!0),this.I=t,0);n<this.fieldsArray.length;++n)this.e[n].resolve();for(var r={},n=0;n<this.oneofsArray.length;++n)r[this.T[n].resolve().name]={get:d.oneOfGetter(this.T[n].oneof),set:d.oneOfSetter(this.T[n].oneof)};n&&Object.defineProperties(t.prototype,r)}}}),y.generateConstructor=function(t){for(var i,n=d.codegen(["p"],t.name),r=0;r<t.fieldsArray.length;++r)(i=t.e[r]).map?n("this%s={}",d.safeProp(i.name)):i.repeated&&n("this%s=[]",d.safeProp(i.name));return n('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]")},y.fromJSON=function(t,i,n){if((n=n===rt?0:n)>d.nestingLimit)throw Error("max depth exceeded");for(var r=new y(t,i.options),e=(r.extensions=i.extensions,r.reserved=i.reserved,Object.keys(i.fields)),s=0;s<e.length;++s)r.add((void 0!==i.fields[e[s]].keyType?c:a).fromJSON(e[s],i.fields[e[s]]));if(i.oneofs)for(e=Object.keys(i.oneofs),s=0;s<e.length;++s)r.add(h.fromJSON(e[s],i.oneofs[e[s]]));if(i.nested)for(e=Object.keys(i.nested),s=0;s<e.length;++s){var o=i.nested[e[s]];r.add((o.id!==rt?a:o.fields!==rt?y:o.values!==rt?f:o.methods!==rt?l:u).fromJSON(e[s],o,n+1))}return i.extensions&&i.extensions.length&&(r.extensions=i.extensions),i.reserved&&i.reserved.length&&(r.reserved=i.reserved),i.group&&(r.group=!0),i.comment&&(r.comment=i.comment),i.edition&&(r.u=i.edition),r.h="proto3",r},y.prototype.toJSON=function(t){var i=u.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return d.toObject(["edition",this.a(),"options",i&&i.options||rt,"oneofs",u.arrayToJSON(this.oneofsArray,t),"fields",u.arrayToJSON(this.fieldsArray.filter(function(t){return!t.declaringField}),t)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:rt,"reserved",this.reserved&&this.reserved.length?this.reserved:rt,"group",this.group||rt,"nested",i&&i.nested||rt,"comment",n?this.comment:rt])},y.prototype.resolveAll=function(){if(this.w){u.prototype.resolveAll.call(this);for(var t=this.oneofsArray,i=0;i<t.length;)t[i++].resolve();for(var n=this.fieldsArray,i=0;i<n.length;)n[i++].resolve()}return this},y.prototype.m=function(i){return this.b&&(i=this.u||i,u.prototype.m.call(this,i),this.oneofsArray.forEach(t=>{t.o(i)}),this.fieldsArray.forEach(t=>{t.o(i)})),this},y.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.fields,t)?this.fields[t]:this.oneofs&&Object.prototype.hasOwnProperty.call(this.oneofs,t)?this.oneofs[t]:this.nested&&Object.prototype.hasOwnProperty.call(this.nested,t)?this.nested[t]:null},y.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);if(t instanceof a&&t.extend===rt){if((this.A||this.fieldsById)[t.id])throw Error("duplicate id "+t.id+" in "+this);if(this.isReservedId(t.id))throw Error("id "+t.id+" is reserved in "+this);if(this.isReservedName(t.name)||"$"==(t.name[0]||""))throw Error("name '"+t.name+"' is reserved in "+this);return"__proto__"===t.name?this:(t.parent&&t.parent.remove(t),(this.fields[t.name]=t).message=this,t.onAdd(this),r(this))}if(t instanceof h){if("$"==(t.name[0]||""))throw Error("name '"+t.name+"' is reserved in "+this);return"__proto__"===t.name?this:(this.oneofs||(this.oneofs={}),(this.oneofs[t.name]=t).onAdd(this),r(this))}return u.prototype.add.call(this,t)},y.prototype.remove=function(t){if(t instanceof a&&t.extend===rt){if(this.fields&&this.fields[t.name]===t)return delete this.fields[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}if(t instanceof h){if(this.oneofs&&this.oneofs[t.name]===t)return delete this.oneofs[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}return u.prototype.remove.call(this,t)},y.prototype.isReservedId=function(t){return u.isReservedId(this.reserved,t)},y.prototype.isReservedName=function(t){return u.isReservedName(this.reserved,t)},y.prototype.create=function(t){return new this.ctor(t)},y.prototype.setup=function(){for(var t=this.fullName,i=[],n=0;n<this.fieldsArray.length;++n)i.push(this.e[n].resolve().resolvedType);this.encode=p(this)({Writer:o,types:i,util:d}),this.decode=v(this)({Reader:s,types:i,util:d}),this.verify=b(this)({types:i,util:d}),this.fromObject=w.fromObject(this)({types:i,util:d}),this.toObject=w.toObject(this)({types:i,util:d});var r,t=m[t];return t&&((r=Object.create(this)).fromObject=this.fromObject,this.fromObject=t.fromObject.bind(r),r.toObject=this.toObject,this.toObject=t.toObject.bind(r)),this},y.prototype.encode=function(t,i){return this.setup().encode.apply(this,arguments)},y.prototype.encodeDelimited=function(t,i){return this.encode(t,i&&i.len?i.fork():i).ldelim()},y.prototype.decode=function(t,i,n,r){return this.setup().decode(t,i,n,r)},y.prototype.decodeDelimited=function(t){return t instanceof s||(t=s.create(t)),this.decode(t,t.uint32())},y.prototype.verify=function(t,i){return this.setup().verify(t,i)},y.prototype.fromObject=function(t,i){return this.setup().fromObject(t,i)},y.prototype.toObject=function(t,i){return this.setup().toObject.apply(this,arguments)},y.d=function(i){return function(t){d.decorateType(t,i)}}},{13:13,14:14,15:15,16:16,17:17,21:21,22:22,24:24,26:26,28:28,34:34,38:38,43:43,44:44,45:45}],37:[function(t,i,n){var t=t(38),e=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function r(t,i){var n=0,r=Object.create(null);for(i|=0;n<t.length;)r[e[n+i]]=t[n++];return r}n.basic=r([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),n.defaults=r([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",t.emptyArray,null]),n.long=r([0,0,0,1,1],7),n.mapKey=r([0,0,0,5,5,0,0,0,1,1,0,2],2),n.packed=r([1,5,0,0,0,5,5,0,0,0,1,1,0])},{38:38}],38:[function(n,t,i){var r,e,o=t.exports=n(41),s=n(31),u=(o.codegen=n(3),o.fetch=n(5),o.path=n(8),o.patterns=n(42),o.patterns.reservedRe),f=(o.fs=n(39),o.checkDepth=function(t){if((t=t===rt?0:t)>o.recursionLimit)throw Error("max depth exceeded");return t},o.toArray=function(t){if(t){for(var i=Object.keys(t),n=Array(i.length),r=0;r<i.length;)n[r]=t[i[r++]];return n}return[]},o.toObject=function(t){for(var i={},n=0;n<t.length;){var r=t[n++],e=t[n++];e!==rt&&(i[r]=e)}return i},o.isReserved=function(t){return u.test(t)},o.safeProp=function(t){return!/^[$\w_]+$/.test(t)||u.test(t)?"["+JSON.stringify(t)+"]":"."+t},o.ucFirst=function(t){return(t[0]||"").toUpperCase()+t.substring(1)},/_([a-z])/g),h=(o.camelCase=function(t){return t.substring(0,1)+t.substring(1).replace(f,function(t,i){return i.toUpperCase()})},o.compareFieldsById=function(t,i){return t.id-i.id},o.decorateType=function(t,i){return t.$type?(i&&t.$type.name!==i&&(o.decorateRoot.remove(t.$type),t.$type.name=i,o.decorateRoot.add(t.$type)),t.$type):(i=new(r=r||n(36))(i||t.name),o.decorateRoot.add(i),i.ctor=t,Object.defineProperty(t,"$type",{value:i,enumerable:!1}),Object.defineProperty(t.prototype,"$type",{value:i,enumerable:!1}),i)},0);o.decorateEnum=function(t){var i;return t.$type||(i=new(e=e||n(16))("Enum"+h++,t),o.decorateRoot.add(i),Object.defineProperty(t,"$type",{value:i,enumerable:!1}),i)},o.setProperty=function(t,i,n,s){if("object"!=typeof t)throw TypeError("dst must be an object");if(!i)throw TypeError("path must be specified");if((i=i.split(".")).length>o.recursionLimit)throw Error("max depth exceeded");return function t(i,n,r){var e=n.shift();if(!o.isUnsafeProperty(e))if(0<n.length)i[e]=t(i[e]||{},n,r);else{if((n=i[e])&&s)return i;n&&(r=[].concat(n).concat(r)),i[e]=r}return i}(t,i,n)},Object.defineProperty(o,"decorateRoot",{get:function(){return s.decorated||(s.decorated=new(n(30)))}})},{16:16,3:3,30:30,31:31,36:36,39:39,41:41,42:42,5:5,8:8}],39:[function(t,i,n){var r=null;try{(r=t(11))&&r.readFile&&r.readFileSync||(r=null)}catch(t){}i.exports=r},{11:11}],40:[function(t,i,n){i.exports=e;var r=t(41);function e(t,i){this.lo=t>>>0,this.hi=i>>>0}var s=e.zero=new e(0,0),o=(s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1},e.zeroHash="\0\0\0\0\0\0\0\0",e.fromNumber=function(t){var i,n;return 0===t?s:(n=(t=(i=t<0)?-t:t)>>>0,t=(t-n)/4294967296>>>0,i&&(t=~t>>>0,n=~n>>>0,4294967295<++n&&(n=0,4294967295<++t&&(t=0))),new e(n,t))},e.from=function(t){if("number"==typeof t)return e.fromNumber(t);if(r.isString(t)){if(!r.Long)return e.fromNumber(parseInt(t,10));t=r.Long.fromString(t)}return t.low||t.high?new e(t.low>>>0,t.high>>>0):s},e.prototype.toNumber=function(t){var i;return!t&&this.hi>>>31?(t=1+~this.lo>>>0,i=~this.hi>>>0,-(t+4294967296*(i=t?i:i+1>>>0))):this.lo+4294967296*this.hi},e.prototype.toLong=function(t){return r.Long?new r.Long(0|this.lo,0|this.hi,!!t):{low:0|this.lo,high:0|this.hi,unsigned:!!t}},String.prototype.charCodeAt);e.fromHash=function(t){return"\0\0\0\0\0\0\0\0"===t?s:new e((o.call(t,0)|o.call(t,1)<<8|o.call(t,2)<<16|o.call(t,3)<<24)>>>0,(o.call(t,4)|o.call(t,5)<<8|o.call(t,6)<<16|o.call(t,7)<<24)>>>0)},e.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},e.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},e.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},e.prototype.length=function(){var t=this.lo,i=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0==n?0==i?t<16384?t<128?1:2:t<2097152?3:4:i<16384?i<128?5:6:i<2097152?7:8:n<128?9:10}},{41:41}],41:[function(i,t,n){var r=n;function u(t){return"__proto__"===t||"prototype"===t||"constructor"===t}function e(t){for(var i=(n="boolean"==typeof arguments[arguments.length-1])?arguments.length-1:arguments.length,n=n&&arguments[arguments.length-1],r=1;r<i;++r){var e=arguments[r];if(e)for(var s=Object.keys(e),o=0;o<s.length;++o)u(s[o])||t[s[o]]!==rt&&n||(t[s[o]]=e[s[o]])}return t}function s(t){function n(t,i){if(!(this instanceof n))return new n(t,i);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:Error().stack||""}),i&&e(this,i)}return n.prototype=Object.create(Error.prototype,{constructor:{value:n,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return t},set:rt,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),n}r.asPromise=i(1),r.base64=i(2),r.EventEmitter=i(4),r.float=i(7),r.utf8=i(10),r.pool=i(9),r.LongBits=i(40),r.isUnsafeProperty=u,r.isNode=!!("undefined"!=typeof global&&global&&global.process&&global.process.versions&&global.process.versions.node),r.global=r.isNode&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||this,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},r.isString=function(t){return"string"==typeof t||t instanceof String},r.isObject=function(t){return t&&"object"==typeof t},r.isset=r.isSet=function(t,i){var n=t[i];return!(null==n||!Object.hasOwnProperty.call(t,i))&&("object"!=typeof n||0<(Array.isArray(n)?n:Object.keys(n)).length)},r.Buffer=function(){try{var t=r.global.Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),r.S=null,r.N=null,r.newBuffer=function(t){return"number"==typeof t?r.Buffer?r.N(t):new r.Array(t):r.Buffer?r.S(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},r.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||function(){try{var t=i("long");return t&&t.isLong?t:null}catch(t){return null}}(),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(t){return t?r.LongBits.from(t).toHash():r.LongBits.zeroHash},r.longFromHash=function(t,i){t=r.LongBits.fromHash(t);return r.Long?r.Long.fromBits(t.lo,t.hi,i):t.toNumber(!!i)},r.merge=e,r.nestingLimit=32,r.recursionLimit=100,r.makeProp=function(t,i){Object.defineProperty(t,i,{enumerable:!0,configurable:!0,writable:!0})},r.lcFirst=function(t){return(t[0]||"").toLowerCase()+t.substring(1)},r.newError=s,r.ProtocolError=s("ProtocolError"),r.oneOfGetter=function(t){for(var n={},i=0;i<t.length;++i)n[t[i]]=1;return function(){for(var t=Object.keys(this),i=t.length-1;-1<i;--i)if(1===n[t[i]]&&this[t[i]]!==rt&&null!==this[t[i]])return t[i]}},r.oneOfSetter=function(n){return function(t){for(var i=0;i<n.length;++i)n[i]!==t&&delete this[n[i]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r.l=function(){var n=r.Buffer;n?(r.S=n.from!==Uint8Array.from&&n.from||function(t,i){return new n(t,i)},r.N=n.allocUnsafe||function(t){return new n(t)}):r.S=r.N=null}},{1:1,10:10,2:2,4:4,40:40,7:7,9:9,long:"long"}],42:[function(t,i,n){n.numberRe=/^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,n.typeRefRe=/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,n.reservedRe=/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/},{}],43:[function(t,i,n){i.exports=function(t){var i=f.codegen(["m","n"],t.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j","maximum nesting depth exceeded"),n=t.oneofsArray,r={};n.length&&i("var p={}");for(var e=0;e<t.fieldsArray.length;++e){var s,o=t.e[e].resolve(),u="m"+f.safeProp(o.name);o.optional&&i("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",u,o.name),o.map?(i("if(!util.isObject(%s))",u)("return%j",h(o,"object"))("var k=Object.keys(%s)",u)("for(var i=0;i<k.length;++i){"),function(t,i,n){switch(i.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.key32Re.test(%s))",n)("return%j",h(i,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.key64Re.test(%s))",n)("return%j",h(i,"integer|Long key"));break;case"bool":t("if(!util.key2Re.test(%s))",n)("return%j",h(i,"boolean key"))}}(i,o,"k[i]"),a(i,o,e,u+"[k[i]]")("}")):o.repeated?(i("if(!Array.isArray(%s))",u)("return%j",h(o,"array"))("for(var i=0;i<%s.length;++i){",u),a(i,o,e,u+"[i]")("}")):(o.partOf&&(s=f.safeProp(o.partOf.name),1===r[o.partOf.name]&&i("if(p%s===1)",s)("return%j",o.partOf.name+": multiple values"),r[o.partOf.name]=1,i("p%s=1",s)),a(i,o,e,u)),o.optional&&i("}")}return i("return null")};var o=t(16),f=t(38);function h(t,i){return t.name+": "+i+(t.repeated&&"array"!==i?"[]":t.map&&"object"!==i?"{k:"+t.keyType+"}":"")+" expected"}function a(t,i,n,r){if(i.resolvedType)if(i.resolvedType instanceof o){t("switch(%s){",r)("default:")("return%j",h(i,"enum value"));for(var e=Object.keys(i.resolvedType.values),s=0;s<e.length;++s)t("case %i:",i.resolvedType.values[e[s]]);t("break")("}")}else t("{")("var e=types[%i].verify(%s,n+1);",n,r)("if(e)")("return%j+e",i.name+".")("}");else switch(i.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.isInteger(%s))",r)("return%j",h(i,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",r,r,r,r)("return%j",h(i,"integer|Long"));break;case"float":case"double":t('if(typeof %s!=="number")',r)("return%j",h(i,"number"));break;case"bool":t('if(typeof %s!=="boolean")',r)("return%j",h(i,"boolean"));break;case"string":t("if(!util.isString(%s))",r)("return%j",h(i,"string"));break;case"bytes":t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',r,r,r)("return%j",h(i,"buffer"))}return t}},{16:16,38:38}],44:[function(t,i,n){var u=t(22),f=t(41);n[".google.protobuf.Any"]={fromObject:function(t,i){if((i=i===rt?0:i)>f.recursionLimit)throw Error("max depth exceeded");if(t&&t["@type"]){var n,r=t["@type"].substring(1+t["@type"].lastIndexOf("/")),r=this.lookup(r);if(r)return~(n="."==(t["@type"][0]||"")?t["@type"].slice(1):t["@type"]).indexOf("/")||(n="/"+n),this.create({type_url:n,value:r.encode(r.fromObject(t,i+1)).finish()})}return this.fromObject(t,i)},toObject:function(t,i,n){if((n=n===rt?0:n)>f.recursionLimit)throw Error("max depth exceeded");var r,e,s="",o="";return i&&i.json&&t.type_url&&t.value&&(o=t.type_url.substring(1+t.type_url.lastIndexOf("/")),s=t.type_url.substring(0,1+t.type_url.lastIndexOf("/")),(r=this.lookup(o))&&(t=r.decode(t.value,rt,rt,n+1))),!(t instanceof this.ctor)&&t instanceof u?(r=t.$type.toObject(t,i,n+1),e="."===t.$type.fullName[0]?t.$type.fullName.slice(1):t.$type.fullName,r["@type"]=o=(s=""===s?"type.googleapis.com/":s)+e,r):this.toObject(t,i,n)}}},{22:22,41:41}],45:[function(t,i,n){i.exports=c;var r,e=t(41),s=e.LongBits,o=e.base64,u=e.utf8;function f(t,i,n){this.fn=t,this.len=i,this.next=rt,this.val=n}function h(){}function a(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new f(h,0,0),this.tail=this.head,this.states=null}function l(){return e.Buffer?function(){return(c.create=function(){return new r})()}:function(){return new c}}function d(t,i,n){i[n]=255&t}function p(t,i){this.len=t,this.next=rt,this.val=i}function v(t,i,n){for(var r=t.lo,e=t.hi;e;)i[n++]=127&r|128,r=(r>>>7|e<<25)>>>0,e>>>=7;for(;127<r;)i[n++]=127&r|128,r>>>=7;i[n++]=r}function b(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}c.create=l(),c.alloc=function(t){return new e.Array(t)},e.Array!==Array&&(c.alloc=e.pool(c.alloc,e.Array.prototype.subarray)),c.prototype.L=function(t,i,n){return this.tail=this.tail.next=new f(t,i,n),this.len+=i,this},(p.prototype=Object.create(f.prototype)).fn=function(t,i,n){for(;127<t;)i[n++]=127&t|128,t>>>=7;i[n]=t},c.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new p((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},c.prototype.int32=function(t){return(t|=0)<0?this.L(v,10,s.fromNumber(t)):this.uint32(t)},c.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},c.prototype.int64=c.prototype.uint64=function(t){t=s.from(t);return this.L(v,t.length(),t)},c.prototype.sint64=function(t){t=s.from(t).zzEncode();return this.L(v,t.length(),t)},c.prototype.bool=function(t){return this.L(d,1,t?1:0)},c.prototype.sfixed32=c.prototype.fixed32=function(t){return this.L(b,4,t>>>0)},c.prototype.sfixed64=c.prototype.fixed64=function(t){t=s.from(t);return this.L(b,4,t.lo).L(b,4,t.hi)},c.prototype.float=function(t){return this.L(e.float.writeFloatLE,4,t)},c.prototype.double=function(t){return this.L(e.float.writeDoubleLE,8,t)};var w=e.Array.prototype.set?function(t,i,n){i.set(t,n)}:function(t,i,n){for(var r=0;r<t.length;++r)i[n+r]=t[r]};c.prototype.bytes=function(t){var i,n=t.length>>>0;return n?(e.isString(t)&&(i=c.alloc(n=o.length(t)),o.decode(t,i,0),t=i),this.uint32(n).L(w,n,t)):this.L(d,1,0)},c.prototype.string=function(t){var i=u.length(t);return i?this.uint32(i).L(u.write,i,t):this.L(d,1,0)},c.prototype.fork=function(){return this.states=new a(this),this.head=this.tail=new f(h,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new f(h,0,0),this.len=0),this},c.prototype.ldelim=function(){var t=this.head,i=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=t.next,this.tail=i,this.len+=n),this},c.prototype.finish=function(){for(var t=this.head.next,i=this.constructor.alloc(this.len),n=0;t;)t.fn(t.val,i,n),n+=t.len,t=t.next;return i},c.l=function(t){r=t,c.create=l(),r.l()}},{41:41}],46:[function(t,i,n){i.exports=s;var r=t(45),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(41));function s(){r.call(this)}function o(t,i,n){t.length<40?e.utf8.write(t,i,n):i.utf8Write?i.utf8Write(t,n):i.write(t,n)}s.l=function(){s.alloc=e.N,s.writeBytesBuffer=e.Buffer&&e.Buffer.prototype instanceof Uint8Array&&"set"===e.Buffer.prototype.set.name?function(t,i,n){i.set(t,n)}:function(t,i,n){if(t.copy)t.copy(i,n,0,t.length);else for(var r=0;r<t.length;)i[n++]=t[r++]}},s.prototype.bytes=function(t){var i=(t=e.isString(t)?e.S(t,"base64"):t).length>>>0;return this.uint32(i),i&&this.L(s.writeBytesBuffer,i,t),this},s.prototype.string=function(t){var i=e.Buffer.byteLength(t);return this.uint32(i),i&&this.L(o,i,t),this},s.l()},{41:41,45:45}]},e={},(i=function t(i){var n=e[i];return n||r[i][0].call(n=e[i]={exports:{}},t,n,n.exports),n.exports}([20][0])).util.global.protobuf=i,"function"==typeof define&&define.amd&&define(["long"],function(t){return t&&t.isLong&&(i.util.Long=t,i.configure()),i}),"object"==typeof module&&module&&module.exports&&(module.exports=i)}();
(() => {
  'use strict';

  const APP_VERSION = '1.0.6';
  if (window.__randleAutoMobile) return;
  const runtimeStatus = { version: APP_VERSION, humanAuto: true };
  window.__randleAutoMobile = runtimeStatus;
  if (!globalThis.protobuf) {
    console.error('[Randle Auto Mobile] protobuf.js를 불러오지 못했습니다.');
    return;
  }

  const ACTION = Object.freeze({
    SYNC: 0,
    START: 1,
    PRESENT: 2,
    REVEAL: 3,
    REROLL: 4,
    CONFIRM: 5,
    FINISH: 6,
    CHALLENGE: 7,
    ANSWER: 8,
  });

  const schema = String.raw`
syntax = "proto3";
package randle;
enum Action { SYNC = 0; START = 1; PRESENT = 2; REVEAL = 3; REROLL = 4; CONFIRM = 5; FINISH = 6; CHALLENGE = 7; ANSWER = 8; }
message HumanAnswer { string id = 1; uint32 revision = 2; string choice = 3; }
message ClientMessage {
  string request_id = 1; Action action = 2; string round_id = 3; uint32 revision = 4;
  repeated uint32 positions = 5; HumanAnswer human = 6; bool restart = 7;
}
message Rarity { string id = 1; string name = 2; string color = 3; }
message Result { string raw_value = 1; string score = 5; Rarity theme = 12; }
message Round {
  string id = 1; uint32 revision = 2; string status = 3; repeated uint32 digits = 4;
  repeated double reveal_at = 5; repeated uint32 positions = 6; double deadline = 7;
  double wait_until = 8; Result result = 9; bool reroll_disabled = 14;
}
message Drag { string mode = 1; uint32 target = 2; uint32 cell = 3; uint32 blank = 4; }
message HumanPoint { double x = 1; double y = 2; }
message HumanArea { double x = 1; double y = 2; double width = 3; double height = 4; }
message HumanCheck {
  bool required = 1; string phase = 2; double ready_at = 3; uint32 version = 4;
  string kind = 5; string name = 6; string instruction = 7; string id = 8;
  uint32 revision = 9; uint32 progress = 10; uint32 total = 11; double expires_at = 12;
  string image = 13; uint32 width = 14; uint32 height = 15; uint32 columns = 16;
  uint32 rows = 17; repeated string choices = 18; repeated string labels = 19; Drag drag = 20;
  string reference = 21; uint32 reference_width = 22; uint32 reference_height = 23;
  string presentation = 24; string scene = 25; repeated uint32 disabled_choices = 26;
  repeated uint32 selected_choices = 27; repeated string tray_labels = 28;
  repeated HumanPoint hotspots = 29; repeated HumanArea fold_areas = 30;
}
message Season { bool unlimited = 7; string phase = 8; }
message State {
  double server_time = 1; bool guest = 2; string season_id = 3; string rp = 4;
  uint32 completed = 5; Round round = 7; bool can_start = 8; double retry_at = 9;
  HumanCheck human = 10; Season season = 15; bool play_disabled = 16;
}
message Error { uint32 code = 1; string message = 2; }
message ServerMessage { string request_id = 1; State state = 2; Error error = 3; }
`;

  const root = globalThis.protobuf.parse(schema, { keepCase: true }).root;
  const ClientMessage = root.lookupType('randle.ClientMessage');
  const ServerMessage = root.lookupType('randle.ServerMessage');

  function encodeClient(message) {
    const validationError = ClientMessage.verify(message);
    if (validationError) throw new TypeError(`Invalid client message: ${validationError}`);
    return ClientMessage.encode(ClientMessage.create(message)).finish();
  }

  function decodeServer(buffer) {
    return ServerMessage.toObject(ServerMessage.decode(new Uint8Array(buffer)), { defaults: true });
  }

  function requestId() {
    if (crypto.randomUUID) return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = [...bytes].map((value) => value.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  class GameResponseError extends Error {
    constructor(error) {
      super(error?.message || '게임 요청에 실패했습니다.');
      this.name = 'GameResponseError';
      this.code = Number(error?.code || 0);
      this.syncedState = null;
    }
  }

  class BrowserRandleClient {
    constructor({ logger = console, requestTimeoutMs = 30_000, maxReconnects = 8 } = {}) {
      this.logger = logger;
      this.requestTimeoutMs = requestTimeoutMs;
      this.maxReconnects = maxReconnects;
      this.socket = null;
      this.state = null;
      this.pending = new Map();
      this.stateListeners = new Set();
      this.connectPromise = null;
      this.reconnectTimer = null;
      this.reconnectAttempts = 0;
      this.recoverySyncRequired = false;
      this.recoveryRequestId = null;
      this.stopped = true;
    }

    get connected() {
      return this.socket?.readyState === WebSocket.OPEN;
    }

    onState(listener) {
      this.stateListeners.add(listener);
      return () => this.stateListeners.delete(listener);
    }

    async start() {
      this.stopped = false;
      await this.connect();
      const response = await this.request(ACTION.SYNC);
      return response.state || this.state;
    }

    async connect() {
      if (this.connected) return;
      if (this.connectPromise) return this.connectPromise;
      this.connectPromise = new Promise((resolve, reject) => {
        const socketUrl = new URL('/game', window.location.href);
        socketUrl.protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const socket = new WebSocket(socketUrl.href);
        socket.binaryType = 'arraybuffer';
        this.socket = socket;
        const timer = setTimeout(() => {
          socket.close();
          reject(new Error('게임 연결 시간이 초과됐습니다.'));
        }, 10_000);

        socket.addEventListener('open', () => {
          clearTimeout(timer);
          if (this.recoverySyncRequired) this.sendRecoverySync();
          else for (const entry of this.pending.values()) this.sendBuffer(entry.buffer);
          resolve();
        }, { once: true });
        socket.addEventListener('message', (event) => this.handleMessage(event.data));
        socket.addEventListener('error', () => {
          if (socket.readyState !== WebSocket.OPEN) {
            clearTimeout(timer);
            reject(new Error('게임 WebSocket 연결에 실패했습니다.'));
          }
        }, { once: true });
        socket.addEventListener('close', (event) => {
          clearTimeout(timer);
          if (this.socket === socket) this.socket = null;
          if (this.stopped) return;
          const policyRejected = event.code === 1008;
          if (policyRejected || this.recoveryRequestId) this.recoverySyncRequired = true;
          this.recoveryRequestId = null;
          this.scheduleReconnect(policyRejected ? 2_000 : 0);
        }, { once: true });
      }).finally(() => {
        this.connectPromise = null;
      });
      return this.connectPromise;
    }

    async request(action, fields = {}) {
      if (!this.connected) await this.connect();
      const request_id = requestId();
      const buffer = encodeClient({ request_id, action, ...fields });
      const response = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          this.pending.delete(request_id);
          reject(new Error(`게임 요청 시간이 초과됐습니다. (${action})`));
        }, this.requestTimeoutMs);
        this.pending.set(request_id, {
          buffer,
          resolve: (value) => {
            clearTimeout(timer);
            resolve(value);
          },
          reject: (error) => {
            clearTimeout(timer);
            reject(error);
          },
        });
      });
      this.sendBuffer(buffer);
      return response;
    }

    async sync() {
      const response = await this.request(ACTION.SYNC);
      if (response.error?.message) throw new GameResponseError(response.error);
      return response.state || this.state;
    }

    sendBuffer(buffer) {
      if (this.connected) this.socket.send(buffer);
    }

    handleMessage(data) {
      let response;
      try {
        response = decodeServer(data);
      } catch (error) {
        this.logger.error(`프로토콜 오류: ${error.message}`);
        this.socket?.close();
        return;
      }
      if (this.reconnectAttempts > 0) this.reconnectAttempts = 0;
      if (response.state) {
        this.state = response.state;
        for (const listener of this.stateListeners) listener(response.state);
      }
      if (response.request_id === this.recoveryRequestId) {
        this.recoveryRequestId = null;
        this.recoverySyncRequired = false;
        this.reconnectAttempts = 0;
        if (response.error?.message) {
          this.rejectPending(new GameResponseError(response.error));
          return;
        }
        if (response.state?.human?.required) {
          for (const [requestIdValue, entry] of this.pending) {
            this.pending.delete(requestIdValue);
            entry.resolve(response);
          }
          return;
        }
        for (const entry of this.pending.values()) this.sendBuffer(entry.buffer);
        return;
      }
      const pending = this.pending.get(response.request_id);
      if (pending) {
        this.pending.delete(response.request_id);
        pending.resolve(response);
      }
    }

    scheduleReconnect(minimumDelay = 0) {
      if (this.stopped || this.reconnectTimer || this.connectPromise) return;
      if (this.reconnectAttempts >= this.maxReconnects) {
        this.rejectPending(new Error('재연결 한도에 도달했습니다.'));
        this.stopped = true;
        return;
      }
      const delay = Math.max(minimumDelay, Math.min(10_000, 500 * (2 ** this.reconnectAttempts)));
      this.reconnectAttempts += 1;
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect().catch(() => this.scheduleReconnect(minimumDelay));
      }, delay);
    }

    sendRecoverySync() {
      this.recoveryRequestId = requestId();
      this.sendBuffer(encodeClient({ request_id: this.recoveryRequestId, action: ACTION.SYNC }));
    }

    rejectPending(error) {
      for (const pending of this.pending.values()) pending.reject(error);
      this.pending.clear();
    }

    close() {
      this.stopped = true;
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
      this.recoverySyncRequired = false;
      this.recoveryRequestId = null;
      if (this.socket && this.socket.readyState < WebSocket.CLOSING) this.socket.close(1000);
      this.rejectPending(new Error('연결이 종료됐습니다.'));
    }
  }

  const DIGIT_LENGTH_SCORES = Object.freeze({ 4: 9_559_559, 5: 462_462, 6: 22_422, 7: 1_081, 8: 161 });

  function runs(digits) {
    const result = [];
    for (const digit of digits) {
      const last = result[result.length - 1];
      if (last?.digit === digit) last.length += 1;
      else result.push({ digit, length: 1 });
    }
    return result;
  }

  function hasStraight(digits, step, length = 5) {
    for (let start = 0; start <= digits.length - length; start += 1) {
      let matches = true;
      for (let offset = 1; offset < length; offset += 1) {
        if (digits[start + offset] - digits[start + offset - 1] !== step) {
          matches = false;
          break;
        }
      }
      if (matches) return true;
    }
    return false;
  }

  function hasTwoDigitStraight(digits) {
    for (let start = 0; start <= 2; start += 1) {
      const values = [0, 2, 4].map((offset) => digits[start + offset] * 10 + digits[start + offset + 1]);
      if ((values[1] - values[0] === 1 && values[2] - values[1] === 1)
        || (values[1] - values[0] === -1 && values[2] - values[1] === -1)) return true;
    }
    return false;
  }

  function hasParityRhyme(digits, parity) {
    const selected = [parity, parity + 2, parity + 4, parity + 6];
    const digit = digits[selected[0]];
    return selected.every((index) => digits[index] === digit)
      && digits.every((value, index) => index % 2 === parity || value !== digit);
  }

  function proxyScore(digits, initialDigits, allRerolled) {
    let score = 0;
    let leadingZeroes = 0;
    while (leadingZeroes < digits.length - 1 && digits[leadingZeroes] === 0) leadingZeroes += 1;
    const digitLength = digits.length - leadingZeroes;
    score += DIGIT_LENGTH_SCORES[digitLength] || (digitLength < 4 ? 65_766_756 : 0);

    const groups = runs(digits);
    const pairDigits = new Set(groups.filter((group) => group.length >= 2).map((group) => group.digit));
    const tripleDigits = new Set(groups.filter((group) => group.length >= 3).map((group) => group.digit));
    if (pairDigits.size) score += 181;
    if (tripleDigits.size) score += 1_051;
    if (groups.some((group) => group.length >= 4)) score += 22_022;
    if (pairDigits.size >= 2) score += 282;
    if (pairDigits.size >= 3) score += 20_102;
    const fullHouse = [...tripleDigits].some((triple) => [...pairDigits].some((pair) => pair !== triple));
    if (fullHouse) score += 19_519;

    const pairSums = [0, 1, 2, 3].map((index) => digits[index] + digits[7 - index]);
    if (pairSums.every((sum) => sum === 9)) score += 8_958_598;
    if (pairSums.every((sum) => sum === pairSums[0])) score += 498_894;
    if (digits.every((digit, index) => digit === digits[7 - index])) {
      score += 2_172_172;
      if (new Set(digits.slice(0, 4)).size === 4) score += 10_611_601;
    }
    if (hasStraight(digits, 1) || hasStraight(digits, -1)) score += 450_054;
    if (hasStraight(digits, 2) || hasStraight(digits, -2)) score += 2_252_522;
    if (hasTwoDigitStraight(digits)) score += 412_412;
    if (hasParityRhyme(digits, 0)) score += 413_314;
    if (hasParityRhyme(digits, 1)) score += 400_004;
    if (digits.every((digit) => digit <= 3)) score += 25_252;

    const frequency = Array(10).fill(0);
    for (const digit of digits) frequency[digit] += 1;
    for (let digit = 0; digit <= 9; digit += 1) {
      if (frequency[digit] >= 5) score += digit === 0 ? 509_509 : 113_311;
    }

    if (allRerolled) {
      const initialGroups = runs(initialDigits);
      const initialPairs = new Set(initialGroups.filter((group) => group.length >= 2).map((group) => group.digit));
      const initialTriples = new Set(initialGroups.filter((group) => group.length >= 3).map((group) => group.digit));
      const initialFullHouse = [...initialTriples].some((triple) => [...initialPairs].some((pair) => pair !== triple));
      if (initialFullHouse && fullHouse) score += 470_470_470;
    }
    return score;
  }

  function positionsFromMask(mask) {
    const positions = [];
    for (let index = 0; index < 8; index += 1) if (mask & (1 << index)) positions.push(index);
    return positions;
  }

  function nextRandom(seed) {
    let value = seed | 0;
    value ^= value << 13;
    value ^= value >>> 17;
    value ^= value << 5;
    return value | 0;
  }

  function expectedProxyScore(digits, positions, initialDigits, sampledOutcomes) {
    const outcome = [...digits];
    const allRerolled = positions.length === 8;
    if (positions.length <= 4) {
      let total = 0;
      let outcomes = 0;
      const visit = (depth) => {
        if (depth === positions.length) {
          total += proxyScore(outcome, initialDigits, allRerolled);
          outcomes += 1;
          return;
        }
        const position = positions[depth];
        for (let digit = 0; digit <= 9; digit += 1) {
          outcome[position] = digit;
          visit(depth + 1);
        }
      };
      visit(0);
      return total / outcomes;
    }

    let total = 0;
    const baseSeed = digits.reduce((seed, digit, index) => seed * 31 + digit * (index + 1), 17);
    for (let sample = 0; sample < sampledOutcomes; sample += 1) {
      let randomState = nextRandom(baseSeed ^ ((sample + 1) * 1_000_003) ^ (positions.length * 131));
      for (const position of positions) {
        randomState = nextRandom(randomState ^ (position * 9_176));
        outcome[position] = Math.abs(randomState % 10);
      }
      total += proxyScore(outcome, initialDigits, allRerolled);
    }
    return total / sampledOutcomes;
  }

  function numericScore(round, fallback) {
    const raw = round?.result?.score;
    if (typeof raw !== 'string' || !/^\d+$/.test(raw)) return fallback;
    const value = Number(raw);
    return Number.isFinite(value) && value >= 0 ? value : fallback;
  }

  function boundedOption(value, fallback, min, max, integer = false) {
    const numeric = Number(value ?? fallback);
    const finite = Number.isFinite(numeric) ? numeric : fallback;
    const normalized = integer ? Math.trunc(finite) : finite;
    return Math.max(min, Math.min(max, normalized));
  }

  function planReroll(round, strategy = 'duplicates', options = {}) {
    const unavailable = !round || round.status !== 'choosing' || round.reroll_disabled || round.positions.length;
    if (unavailable || strategy === 'confirm') return { positions: [], currentScore: null, expectedScore: null };
    const digits = round.digits.map(Number);
    if (strategy === 'duplicates') {
      const frequency = new Map();
      for (const digit of digits) frequency.set(digit, (frequency.get(digit) || 0) + 1);
      const singletons = digits.map((digit, index) => ({ digit, index }))
        .filter(({ digit }) => frequency.get(digit) === 1).map(({ index }) => index);
      const positions = singletons.length === digits.length ? singletons.slice(-4) : singletons.slice(0, 4);
      return { positions, currentScore: null, expectedScore: null };
    }
    if (digits.length !== 8 || digits.some((digit) => !Number.isInteger(digit) || digit < 0 || digit > 9)) {
      return { positions: [], currentScore: null, expectedScore: null };
    }
    const proxyCurrent = proxyScore(digits, digits, false);
    const currentScore = numericScore(round, proxyCurrent);
    const minExpectedGainPercent = boundedOption(options.minExpectedGainPercent, 2, 0, 100);
    const sampledOutcomes = boundedOption(options.sampledOutcomes, 256, 64, 8_192, true);
    const maxRerollPositions = boundedOption(options.maxRerollPositions, 8, 1, 8, true);
    let best = { positions: [], currentScore, expectedScore: currentScore };
    for (let mask = 1; mask < 256; mask += 1) {
      const positions = positionsFromMask(mask);
      if (positions.length > maxRerollPositions) continue;
      const expectedScore = expectedProxyScore(digits, positions, digits, sampledOutcomes);
      if (expectedScore > best.expectedScore
        || (expectedScore === best.expectedScore && positions.length < best.positions.length)) {
        best = { positions, currentScore, expectedScore };
      }
    }
    if (best.expectedScore < currentScore * (1 + minExpectedGainPercent / 100)) {
      return { positions: [], currentScore, expectedScore: currentScore };
    }
    return best;
  }

  function solverChallenge(human) {
    return {
      challengeKey: String(human.id || ''),
      kind: human.kind,
      phase: human.phase,
      progress: human.progress,
      total: human.total,
      image: human.image,
      reference: human.reference,
      scene: human.scene,
      labels: [...(human.labels || [])],
      trayLabels: [...(human.tray_labels || [])],
      choiceCount: (human.choices || []).length,
      disabledChoices: [...(human.disabled_choices || [])],
      selectedChoices: [...(human.selected_choices || [])],
    };
  }

  function loadChallengeImage(source) {
    if (typeof source !== 'string' || !source) return Promise.reject(new Error('인간 인증 이미지가 없습니다.'));
    let url = source;
    if (!source.startsWith('data:')) {
      const parsed = new URL(source, window.location.origin);
      if (parsed.origin !== window.location.origin) return Promise.reject(new Error('허용되지 않은 이미지 주소입니다.'));
      url = parsed.href;
    }
    return new Promise((resolve, reject) => {
      const image = new Image();
      const timer = setTimeout(() => reject(new Error('인간 인증 이미지 로딩 시간이 초과됐습니다.')), 5_000);
      image.addEventListener('load', () => {
        clearTimeout(timer);
        resolve(image);
      }, { once: true });
      image.addEventListener('error', () => {
        clearTimeout(timer);
        reject(new Error('인간 인증 이미지를 불러오지 못했습니다.'));
      }, { once: true });
      image.src = url;
    });
  }

  const rawImageCache = new Map();

  async function rawImage(source, resize = null) {
    const cacheKey = `${resize?.width || 'natural'}x${resize?.height || 'natural'}:${source}`;
    if (rawImageCache.has(cacheKey)) return rawImageCache.get(cacheKey);
    const image = await loadChallengeImage(source);
    const width = resize?.width || image.naturalWidth;
    const height = resize?.height || image.naturalHeight;
    if (!width || !height) throw new Error('인간 인증 이미지 크기가 올바르지 않습니다.');
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) throw new Error('이미지 판독 기능을 사용할 수 없습니다.');
    context.drawImage(image, 0, 0, width, height);
    const result = { data: context.getImageData(0, 0, width, height).data, width, height };
    rawImageCache.set(cacheKey, result);
    if (rawImageCache.size > 8) rawImageCache.delete(rawImageCache.keys().next().value);
    return result;
  }

  function pixel(image, x, y) {
    const offset = (y * image.width + x) * 4;
    return [image.data[offset], image.data[offset + 1], image.data[offset + 2]];
  }

  function colorDistance(left, right) {
    return Math.sqrt(left.reduce((sum, value, index) => sum + ((value - right[index]) ** 2), 0));
  }

  function averageColor(image, centerX, centerY, radius) {
    const samples = [];
    for (let y = Math.max(0, centerY - radius); y <= Math.min(image.height - 1, centerY + radius); y += 1) {
      for (let x = Math.max(0, centerX - radius); x <= Math.min(image.width - 1, centerX + radius); x += 1) {
        const rgb = pixel(image, x, y);
        const brightness = rgb.reduce((sum, value) => sum + value, 0) / 3;
        if (Math.max(...rgb) - Math.min(...rgb) > 18 && brightness > 75 && brightness < 235) samples.push(rgb);
      }
    }
    if (!samples.length) throw new Error('색상 정보를 찾지 못했습니다.');
    return [0, 1, 2].map((channel) => samples.reduce((sum, rgb) => sum + rgb[channel], 0) / samples.length);
  }

  async function bridgeChoice(challenge) {
    const current = await rawImage(challenge.image);
    const scene = await rawImage(challenge.scene, current);
    const yMin = Math.round(current.height * 92 / 180);
    const yMax = Math.min(current.height, Math.round(current.height * 170 / 180));
    const radius = Math.max(8, Math.round(current.width * 30 / 360));
    for (let index = 0; index < challenge.choiceCount; index += 1) {
      const center = Math.round(current.width * (50 + (64 * index)) / 360);
      const points = [];
      for (let y = yMin; y < yMax; y += 1) {
        for (let x = Math.max(0, center - radius); x <= Math.min(current.width - 1, center + radius); x += 1) {
          const left = pixel(current, x, y);
          const right = pixel(scene, x, y);
          if (Math.max(...left.map((value, channel) => Math.abs(value - right[channel]))) > 65) points.push([x, y]);
        }
      }
      if (!points.length) continue;
      const xs = points.map(([x]) => x);
      const ys = points.map(([, y]) => y);
      const boundsWidth = Math.max(...xs) - Math.min(...xs) + 1;
      const boundsHeight = Math.max(...ys) - Math.min(...ys) + 1;
      if (boundsHeight > boundsWidth * 1.3 && !challenge.disabledChoices.includes(index)) return index;
    }
    return null;
  }

  async function paletteChoice(challenge) {
    if (challenge.choiceCount < 4) return null;
    const [current, reference] = await Promise.all([rawImage(challenge.image), rawImage(challenge.reference)]);
    const paints = [
      averageColor(current, Math.round(current.width / 4), Math.round(current.height * 0.28), Math.max(8, Math.round(current.width / 14))),
      averageColor(current, Math.round(current.width * 3 / 4), Math.round(current.height * 0.28), Math.max(8, Math.round(current.width / 14))),
    ];
    const targets = [
      averageColor(reference, Math.round(reference.width / 4), Math.round(reference.height / 2), Math.max(8, Math.round(reference.width / 14))),
      averageColor(reference, Math.round(reference.width * 3 / 4), Math.round(reference.height / 2), Math.max(8, Math.round(reference.width / 14))),
    ];
    const plan = targets.map((target, targetIndex) => ({
      paint: colorDistance(target, paints[0]) <= colorDistance(target, paints[1]) ? 0 : 1,
      target: targetIndex + 2,
    }));
    const step = plan[Math.min(Number(challenge.progress || 0), plan.length - 1)];
    return challenge.selectedChoices.includes(step.paint) ? step.target : step.paint;
  }

  async function differenceChoice(challenge) {
    if (challenge.choiceCount < 2 || !challenge.reference) return null;
    const current = await rawImage(challenge.image);
    const reference = await rawImage(challenge.reference, current);
    const scores = Array.from({ length: challenge.choiceCount }, () => 0);
    const counts = Array.from({ length: challenge.choiceCount }, () => 0);
    for (let y = 0; y < current.height; y += 1) {
      for (let x = 0; x < current.width; x += 1) {
        const section = Math.min(challenge.choiceCount - 1, Math.floor(x * challenge.choiceCount / current.width));
        const left = pixel(current, x, y);
        const right = pixel(reference, x, y);
        scores[section] += left.reduce((sum, value, channel) => sum + Math.abs(value - right[channel]), 0);
        counts[section] += 3;
      }
    }
    const averages = scores.map((score, index) => score / Math.max(1, counts[index]));
    return averages.indexOf(Math.max(...averages));
  }

  function regionFeatures(image, xMin, xMax, yMin = 0, yMax = image.height) {
    const features = { pixels: 0, saturated: 0, dark: 0, orange: 0, pink: 0, green: 0 };
    for (let y = Math.max(0, yMin); y < Math.min(image.height, yMax); y += 1) {
      for (let x = Math.max(0, xMin); x < Math.min(image.width, xMax); x += 1) {
        const [red, green, blue] = pixel(image, x, y);
        const maximum = Math.max(red, green, blue);
        const minimum = Math.min(red, green, blue);
        const average = (red + green + blue) / 3;
        features.pixels += 1;
        if (maximum - minimum <= 25 || maximum >= 250) continue;
        features.saturated += 1;
        if (average < 125) features.dark += 1;
        if (red > green + 20 && green > blue + 12 && red > 130) features.orange += 1;
        if (red > green + 20 && blue > green + 3 && red > 140) features.pink += 1;
        if (green > red + 3 && green > blue + 3 && green > 90) features.green += 1;
      }
    }
    return features;
  }

  function featureRatio(features, name) {
    return features[name] / Math.max(1, features.pixels);
  }

  function decorationKind(features) {
    if (featureRatio(features, 'orange') > 0.04) return 'moon';
    if (featureRatio(features, 'pink') > 0.12) return 'star';
    return 'bat';
  }

  async function lockChoice(challenge) {
    if (challenge.choiceCount < 4 || !challenge.reference) return null;
    const [current, reference] = await Promise.all([rawImage(challenge.image), rawImage(challenge.reference)]);
    const decorations = Math.min(3, challenge.choiceCount - 1);
    for (let index = 0; index < decorations; index += 1) {
      const currentKind = decorationKind(regionFeatures(current,
        Math.floor(index * current.width / decorations), Math.floor((index + 1) * current.width / decorations)));
      const targetKind = decorationKind(regionFeatures(reference,
        Math.floor(index * reference.width / decorations), Math.floor((index + 1) * reference.width / decorations)));
      if (currentKind !== targetKind) return index;
    }
    const confirm = challenge.labels.findIndex((label) => String(label).includes('확인'));
    return confirm >= 0 ? confirm : challenge.choiceCount - 1;
  }

  function snackKind(features, reference = false) {
    if (featureRatio(features, 'green') > 0.0015) return 'milk';
    if (featureRatio(features, 'orange') > (reference ? 0.075 : 0.04)) return 'moon';
    if (featureRatio(features, 'dark') > 0.022) return 'candy';
    return 'star';
  }

  async function recipeChoice(challenge) {
    if (challenge.choiceCount < 3 || !challenge.reference) return null;
    const [current, reference] = await Promise.all([rawImage(challenge.image), rawImage(challenge.reference)]);
    const snackCount = challenge.choiceCount - 1;
    const currentKinds = Array.from({ length: snackCount }, (_, index) => snackKind(regionFeatures(current,
      Math.floor(index * current.width / snackCount), Math.floor((index + 1) * current.width / snackCount))));
    const targetKinds = Array.from({ length: 2 }, (_, index) => snackKind(regionFeatures(reference,
      Math.floor(index * reference.width / 2), Math.floor((index + 1) * reference.width / 2)), true));
    const targetIndexes = targetKinds.map((kind) => currentKinds.indexOf(kind));
    if (targetIndexes.some((index) => index < 0) || new Set(targetIndexes).size !== targetIndexes.length) return null;
    const next = targetIndexes.find((index) => !challenge.selectedChoices.includes(index));
    if (Number.isInteger(next)) return next;
    const confirm = challenge.labels.findIndex((label) => String(label).includes('확인'));
    return confirm >= 0 ? confirm : challenge.choiceCount - 1;
  }

  async function towerChoice(challenge) {
    if (challenge.choiceCount < 3 || challenge.trayLabels.length !== challenge.choiceCount) return null;
    const goal = challenge.trayLabels.findIndex((label) => String(label).includes('도착'));
    if (goal < 0) return null;
    const current = await rawImage(challenge.image);
    const scores = Array.from({ length: challenge.choiceCount }, (_, index) => regionFeatures(current,
      Math.floor(index * current.width / challenge.choiceCount), Math.floor((index + 1) * current.width / challenge.choiceCount),
      Math.floor(current.height * 0.08), Math.floor(current.height * 0.58)).saturated);
    const big = scores.indexOf(Math.max(...scores));
    const remaining = scores.map((score, index) => ({ score, index }))
      .filter(({ index }) => index !== big).sort((left, right) => right.score - left.score);
    const threshold = Math.max(current.width * current.height * 0.002, scores[big] * 0.08);
    const small = remaining[0]?.score > threshold ? remaining[0].index : big;
    const spare = (excluded) => scores.findIndex((_, index) => !excluded.includes(index));
    let move = null;
    if (big !== goal && (small === big || small === goal)) move = { source: small, destination: spare([big, goal]) };
    else if (big !== goal) move = { source: big, destination: goal };
    else if (small !== goal) move = { source: small, destination: goal };
    if (!move || move.destination < 0) return null;
    return challenge.selectedChoices.length ? move.destination : move.source;
  }

  function strongestRow(histogram, radius) {
    const smoothed = histogram.map((_, index) => histogram.slice(Math.max(0, index - radius), index + radius + 1)
      .reduce((sum, value) => sum + value, 0));
    const score = Math.max(...smoothed);
    return { row: smoothed.indexOf(score), score };
  }

  async function scaleChoice(challenge) {
    if (challenge.choiceCount < 3 || !challenge.scene) return null;
    const current = await rawImage(challenge.image);
    const scene = await rawImage(challenge.scene, current);
    const yMin = Math.floor(current.height * 0.23);
    const yMax = Math.floor(current.height * 0.44);
    const rows = [[0.22, 0.44], [0.635, 0.825]].map(([start, end]) => {
      const histogram = Array.from({ length: current.height }, () => 0);
      for (let y = yMin; y < yMax; y += 1) {
        for (let x = Math.floor(current.width * start); x < Math.floor(current.width * end); x += 1) {
          const rgb = pixel(current, x, y);
          const base = pixel(scene, x, y);
          const changed = Math.max(...rgb.map((value, channel) => Math.abs(value - base[channel])));
          const [red, green, blue] = rgb;
          if (changed > 45 && red > 85 && red > green * 1.05 && green > blue * 1.12 && red - blue > 40) histogram[y] += 1;
        }
      }
      return strongestRow(histogram, Math.max(2, Math.round(current.height * 0.01)));
    });
    if (rows.some(({ score }) => score < current.width * 0.25)) return null;
    const remove = challenge.labels.findIndex((label) => String(label).includes('빼기'));
    const add = challenge.labels.findIndex((label) => String(label).includes('더하기'));
    const confirm = challenge.labels.findIndex((label) => String(label).includes('확인'));
    if ([remove, add, confirm].some((index) => index < 0)) return null;
    const difference = rows[0].row - rows[1].row;
    if (difference > Math.max(3, current.height * 0.012)) return add;
    if (difference < -Math.max(3, current.height * 0.012)) return remove;
    return confirm;
  }

  function humanStateSignature(challenge) {
    return [challenge.challengeKey, challenge.kind, challenge.phase, challenge.progress, challenge.choiceCount,
      challenge.disabledChoices.join(','), challenge.selectedChoices.join(','), challenge.labels.join(','),
      challenge.trayLabels.join(',')].join('|');
  }

  function oracleChoice(challenge, attemptedByState) {
    const disabled = new Set(challenge.disabledChoices);
    const selected = new Set(challenge.selectedChoices);
    const order = Array.from({ length: challenge.choiceCount }, (_, index) => index)
      .filter((index) => !disabled.has(index) && !selected.has(index))
      .concat(Array.from(selected).filter((index) => !disabled.has(index)));
    const signature = humanStateSignature(challenge);
    const attempted = attemptedByState.get(signature) || new Set();
    attemptedByState.set(signature, attempted);
    const index = order.find((candidate) => !attempted.has(candidate));
    if (index === undefined) return { restart: true, strategy: 'progress-oracle' };
    attempted.add(index);
    return { index, strategy: 'progress-oracle' };
  }

  function createMobileHumanSolver({ maxAttempts = 80, logger = () => {} } = {}) {
    const attemptedByState = new Map();
    let attempts = 0;
    return {
      async solve(human) {
        if (attempts >= maxAttempts) {
          attempts = 0;
          attemptedByState.clear();
          return { restart: true, strategy: 'attempt-budget' };
        }
        const challenge = solverChallenge(human);
        logger(`인간 인증 자동 풀이 시작 (${challenge.kind || 'unknown'})`);
        let index = null;
        let strategy = null;
        try {
          if (challenge.kind === 'bridge') { index = await bridgeChoice(challenge); strategy = 'bridge-image-diff'; }
          else if (challenge.kind === 'palette') { index = await paletteChoice(challenge); strategy = 'palette-color-match'; }
          else if (challenge.kind === 'difference') { index = await differenceChoice(challenge); strategy = 'difference-image-diff'; }
          else if (challenge.kind === 'lock') { index = await lockChoice(challenge); strategy = 'lock-reference-match'; }
          else if (challenge.kind === 'recipe') { index = await recipeChoice(challenge); strategy = 'recipe-reference-match'; }
          else if (challenge.kind === 'tower') { index = await towerChoice(challenge); strategy = 'tower-move-plan'; }
          else if (challenge.kind === 'scale') { index = await scaleChoice(challenge); strategy = 'scale-beam-angle'; }
        } catch {
          logger(`${challenge.kind} 이미지 판독 실패, 진행 상태 탐색으로 전환`);
        }
        const decision = Number.isInteger(index) ? { index, strategy } : oracleChoice(challenge, attemptedByState);
        if (Number.isInteger(decision.index)) {
          attempts += 1;
          logger(`인간 인증 자동 선택 ${decision.index + 1}/${challenge.choiceCount} (${challenge.kind}, ${decision.strategy})`);
        } else if (decision.restart) {
          attempts = 0;
          attemptedByState.clear();
        }
        return decision;
      },
    };
  }

  function stoppedError() {
    const error = new Error('실행이 중지됐습니다.');
    error.name = 'AbortError';
    return error;
  }

  function throwIfStopped(signal) {
    if (signal?.aborted) throw stoppedError();
  }

  const sleep = (milliseconds, signal) => new Promise((resolve, reject) => {
    throwIfStopped(signal);
    const timer = setTimeout(done, milliseconds);
    function done() {
      signal?.removeEventListener('abort', aborted);
      resolve();
    }
    function aborted() {
      clearTimeout(timer);
      reject(stoppedError());
    }
    signal?.addEventListener('abort', aborted, { once: true });
  });

  function roundFields(state, extra = {}) {
    return { round_id: state.round?.id || '', revision: state.round?.revision || 0, ...extra };
  }

  async function sendAction(client, action, state, extra = {}) {
    const response = await client.request(action, roundFields(state, extra));
    if (response.error?.message) {
      const syncedState = response.state || await client.sync();
      if (syncedState?.human?.required || Number(response.error.code) === 409) return syncedState;
      const error = new GameResponseError(response.error);
      error.syncedState = syncedState;
      throw error;
    }
    return response.state || client.sync();
  }

  async function waitForGate(state, maxWaitMs, signal) {
    const waitMs = Math.max(0, Number(state?.round?.wait_until || 0) - Number(state?.server_time || 0)) + 80;
    if (waitMs > maxWaitMs) throw new Error(`서버 대기가 설정 한도보다 깁니다. (${Math.ceil(waitMs / 1000)}초)`);
    if (waitMs > 0) await sleep(waitMs, signal);
  }

  async function resolveHumanCheck(client, state, solveHuman, logger, signal) {
    if (!state.human?.required) return state;
    while (state.human?.required) {
      throwIfStopped(signal);
      const human = state.human;
      if (human.phase === 'cooldown') {
        const waitMs = Math.max(0, Number(human.ready_at || 0) - Number(state.server_time || 0)) + 80;
        logger(`인간 인증 재시도까지 ${Math.ceil(waitMs / 1000)}초 대기`);
        await sleep(waitMs, signal);
        state = await sendAction(client, ACTION.CHALLENGE, state, { restart: true });
        continue;
      }
      if (!human.id || !human.choices.length) {
        state = await sendAction(client, ACTION.CHALLENGE, state);
        if (state.human?.required && state.human.revision === human.revision) await sleep(250, signal);
        continue;
      }
      const decision = await solveHuman(human, signal);
      throwIfStopped(signal);
      if (decision && typeof decision === 'object' && decision.restart === true) {
        logger(`인간 인증 새 문제 요청 (${human.kind})`);
        state = await sendAction(client, ACTION.CHALLENGE, state, { restart: true });
        continue;
      }
      const index = Number.isInteger(decision) ? decision : decision?.index;
      if (!Number.isInteger(index) || index < 0 || index >= human.choices.length) throw new Error('올바른 인간 인증 선택지가 아닙니다.');
      if (human.disabled_choices.includes(index)) throw new Error('비활성화된 인간 인증 선택지입니다.');
      logger(`인간 인증 ${human.progress + 1}/${human.total || '?'} 답변 전송`);
      try {
        state = await sendAction(client, ACTION.ANSWER, state, {
          human: { id: human.id, revision: human.revision, choice: human.choices[index] },
        });
      } catch (error) {
        if (!(error instanceof GameResponseError)) throw error;
        logger('인간 인증 답변이 만료되어 최신 상태를 불러옵니다.');
        state = error.syncedState || await client.sync();
      }
    }
    return state;
  }

  async function runBot({
    client,
    rounds,
    strategy,
    maxWaitMs,
    roundDelayMs,
    stopScore,
    strategyOptions,
    solveHuman,
    onProgress,
    logger,
    signal,
  }) {
    throwIfStopped(signal);
    let state = await client.start();
    throwIfStopped(signal);
    if (!state) throw new Error('서버가 게임 상태를 보내지 않았습니다.');

    let roundsCompleted = 0;
    let activeRoundId = state.round && state.round.status !== 'confirmed' ? state.round.id : null;
    while (roundsCompleted < rounds) {
      throwIfStopped(signal);
      state = await resolveHumanCheck(client, state, solveHuman, logger, signal);
      if (activeRoundId && state.round?.id === activeRoundId && state.round.status === 'confirmed') {
        activeRoundId = null;
        roundsCompleted += 1;
        const score = /^\d+$/.test(state.round.result?.score || '') ? state.round.result.score : null;
        onProgress({ roundsCompleted, rounds, score });
        logger(`${roundsCompleted}/${rounds} 라운드 확정`);
        if (stopScore && score && BigInt(score) >= BigInt(stopScore)) {
          logger('목표 RP에 도달했습니다.');
          break;
        }
        if (roundsCompleted >= rounds) break;
        if (roundDelayMs > 0) await sleep(roundDelayMs, signal);
      }

      const status = state.round?.status || 'none';
      if (status === 'none' || status === 'confirmed') {
        if (state.play_disabled) throw new Error('서버가 플레이를 제한했습니다.');
        if (!state.can_start) {
          const waitMs = Math.max(0, Number(state.retry_at || 0) - Number(state.server_time || 0)) + 80;
          if (waitMs <= 80) throw new Error('서버가 새 라운드를 허용하지 않습니다.');
          if (waitMs > maxWaitMs) throw new Error(`다음 라운드 대기가 설정 한도보다 깁니다. (${Math.ceil(waitMs / 1000)}초)`);
          logger(`다음 라운드까지 ${Math.ceil(waitMs / 1000)}초 대기`);
          await sleep(waitMs, signal);
          state = await client.sync();
          continue;
        }
        logger(`${roundsCompleted + 1}/${rounds} 라운드 시작`);
        state = await sendAction(client, ACTION.START, { ...state, round: null });
        if (state.round?.id && state.round.status !== 'confirmed') activeRoundId = state.round.id;
        continue;
      }
      if (status === 'presenting') {
        await waitForGate(state, maxWaitMs, signal);
        state = await sendAction(client, ACTION.REVEAL, state);
        continue;
      }
      if (status === 'revealing') {
        await waitForGate(state, maxWaitMs, signal);
        state = await sendAction(client, ACTION.PRESENT, state);
        continue;
      }
      if (status === 'finalizing') {
        await waitForGate(state, maxWaitMs, signal);
        state = await sendAction(client, ACTION.FINISH, state);
        continue;
      }
      if (status === 'choosing') {
        const decision = planReroll(state.round, strategy, strategyOptions);
        if (strategy === 'rp' && decision.currentScore !== null) {
          logger(decision.positions.length
            ? `RP 예상 ${Math.round(decision.currentScore)} → ${Math.round(decision.expectedScore)}`
            : `현재 RP 예상값 유지: ${Math.round(decision.currentScore)}`);
        }
        if (decision.positions.length) {
          logger(`${decision.positions.length}자리 리롤`);
          state = await sendAction(client, ACTION.REROLL, state, { positions: decision.positions });
        } else {
          state = await sendAction(client, ACTION.CONFIRM, state);
        }
        continue;
      }
      state = await client.sync();
    }
    return { roundsCompleted, state };
  }

  const host = document.createElement('div');
  host.id = 'randle-auto-mobile-host';
  document.documentElement.append(host);
  const shadow = host.attachShadow({ mode: 'open' });
  shadow.innerHTML = `
    <style>
      :host { all: initial; position: fixed !important; z-index: 2147483647 !important; inset: 0 !important; pointer-events: none !important; color-scheme: dark; }
      *, *::before, *::after { box-sizing: border-box; }
      button, input, select { font: inherit; }
      #ram-toggle {
        position: fixed; right: max(14px, env(safe-area-inset-right)); bottom: max(18px, env(safe-area-inset-bottom));
        z-index: 1; width: 54px; height: 54px; border: 1px solid rgba(255,255,255,.22); pointer-events: auto;
        border-radius: 18px; color: #120a20; background: linear-gradient(135deg,#d4c1ff,#9a70ff);
        box-shadow: 0 12px 36px rgba(0,0,0,.45); font: 900 18px/1 system-ui,sans-serif;
      }
      #ram-toggle[data-running="true"]::after {
        position: absolute; top: 7px; right: 7px; width: 9px; height: 9px; border-radius: 50%;
        background: #6ff0b5; content: ""; box-shadow: 0 0 0 3px rgba(111,240,181,.18);
      }
      #ram-panel {
        position: fixed; z-index: 2; inset: max(8px,env(safe-area-inset-top)) max(8px,env(safe-area-inset-right)) max(8px,env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-left)); pointer-events: auto;
        display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(190,157,255,.3);
        border-radius: 22px; color: #f7f3ff; background: #120f1b; box-shadow: 0 24px 70px rgba(0,0,0,.62);
        font: 14px/1.45 -apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo",system-ui,sans-serif;
      }
      #ram-panel[hidden], [hidden] { display: none !important; }
      .ram-header { display: flex; align-items: center; justify-content: space-between; padding: 15px 16px; border-bottom: 1px solid rgba(255,255,255,.08); }
      .ram-title { display: grid; gap: 2px; }
      .ram-title strong { font-size: 18px; }
      .ram-title span { color: #a99fba; font-size: 11px; letter-spacing: .12em; }
      .ram-icon { width: 38px; height: 38px; padding: 0; border: 0; border-radius: 12px; color: #dcd4e8; background: rgba(255,255,255,.08); }
      .ram-scroll { flex: 1; overflow: auto; padding: 14px 14px 28px; overscroll-behavior: contain; }
      .ram-status { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 12px; }
      .ram-stat { min-width: 0; padding: 10px; border: 1px solid rgba(255,255,255,.08); border-radius: 13px; background: rgba(255,255,255,.035); }
      .ram-stat span { display: block; color: #a99fba; font-size: 11px; }
      .ram-stat strong { display: block; overflow: hidden; margin-top: 4px; font-size: 13px; text-overflow: ellipsis; white-space: nowrap; }
      .ram-card { margin-top: 10px; padding: 14px; border: 1px solid rgba(185,152,255,.18); border-radius: 16px; background: rgba(255,255,255,.025); }
      .ram-card h3 { margin: 0; font-size: 15px; }
      .ram-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      label { display: grid; gap: 6px; color: #cfc6dc; font-size: 12px; }
      .ram-check { display: flex; align-items: center; gap: 9px; margin-top: 12px; }
      .ram-check input { width: 18px; height: 18px; margin: 0; accent-color: #ad8aff; }
      input, select { width: 100%; min-width: 0; padding: 10px 11px; border: 1px solid rgba(255,255,255,.12); border-radius: 10px; color: #f7f3ff; background: #0c0912; }
      .ram-actions { display: flex; gap: 9px; margin-top: 13px; }
      .ram-actions button, .ram-choice { min-height: 44px; border: 0; border-radius: 11px; font-weight: 750; }
      #ram-start { flex: 1; color: #150c24; background: linear-gradient(135deg,#ccb5ff,#9c75f7); }
      #ram-stop { color: #eee7f8; background: rgba(255,255,255,.1); }
      button:disabled { opacity: .42; }
      #ram-message { min-height: 20px; margin: 9px 0 0; color: #ff9cad; font-size: 12px; white-space: pre-wrap; }
      #ram-human {
        position: fixed; z-index: 3;
        inset: max(8px,env(safe-area-inset-top)) max(8px,env(safe-area-inset-right)) max(8px,env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-left));
        overflow: auto; margin: 0; padding: 16px; border-color: rgba(255,211,130,.5); border-radius: 20px;
        background: #120f1b; box-shadow: 0 28px 80px rgba(0,0,0,.7); pointer-events: auto;
      }
      .ram-human-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .ram-human-head h3 { margin: 0; }
      #ram-human-instruction { margin: 0 0 12px; color: #f5edf9; white-space: pre-wrap; }
      .ram-image { display: block; width: 100%; max-height: 38vh; border: 1px solid rgba(255,255,255,.1); border-radius: 12px; object-fit: contain; background: #f5efe5; }
      #ram-reference { margin-top: 8px; max-height: 20vh; }
      #ram-choices { display: grid; grid-template-columns: repeat(var(--ram-columns,3),minmax(0,1fr)); gap: 8px; margin-top: 10px; }
      .ram-choice { display: grid; place-items: center; gap: 2px; min-width: 0; padding: 8px 5px; color: #f5effc; border: 1px solid rgba(185,152,255,.4); background: #2b2044; }
      .ram-choice span:first-child { font-size: 14px; }
      .ram-choice span:last-child { overflow-wrap: anywhere; color: #d5c9e2; font-size: 11px; }
      .ram-choice[data-selected="true"] { color: #180e27; background: #b99aff; }
      .ram-choice[data-selected="true"] span:last-child { color: #2a183e; }
      @media (min-width: 700px) {
        #ram-panel { left: auto; width: min(430px,calc(100vw - 16px)); }
      }
      @media (max-width: 390px) {
        .ram-grid { grid-template-columns: 1fr; }
        #ram-choices { grid-template-columns: repeat(auto-fit,minmax(82px,1fr)); }
      }
    </style>
    <button id="ram-toggle" type="button" aria-label="Randle Auto 열기">R</button>
    <section id="ram-panel" hidden>
      <header class="ram-header">
        <div class="ram-title"><span>PURE iOS · v${APP_VERSION}</span><strong>Randle Auto</strong></div>
        <button id="ram-close" class="ram-icon" type="button" aria-label="닫기">✕</button>
      </header>
      <div class="ram-scroll">
        <div class="ram-status">
          <div class="ram-stat"><span>상태</span><strong id="ram-phase">대기</strong></div>
          <div class="ram-stat"><span>라운드</span><strong id="ram-rounds">0</strong></div>
          <div class="ram-stat"><span>현재 RP</span><strong id="ram-score">—</strong></div>
        </div>
        <form id="ram-form" class="ram-card">
          <div class="ram-grid">
            <label>라운드 수<input name="rounds" type="number" min="1" max="10000" value="1" required></label>
            <label>전략<select name="strategy"><option value="rp">RP 기대값</option><option value="duplicates">중복 유지</option><option value="confirm">즉시 확정</option></select></label>
          </div>
          <label class="ram-check"><input name="humanAuto" type="checkbox" checked>인간 인증 자동 풀이</label>
          <div class="ram-actions"><button id="ram-start" type="submit">시작</button><button id="ram-stop" type="button" disabled>중지</button></div>
          <p id="ram-message"></p>
        </form>
        <section id="ram-human" class="ram-card" hidden>
          <div class="ram-human-head"><h3>인간 인증</h3><strong id="ram-human-progress">—</strong></div>
          <p id="ram-human-instruction"></p>
          <img id="ram-human-image" class="ram-image" alt="인간 인증 문제" hidden>
          <img id="ram-reference" class="ram-image" alt="참조 이미지" hidden>
          <div id="ram-choices"></div>
        </section>
      </div>
    </section>
  `;

  const $ = (selector) => shadow.querySelector(selector);
  const elements = {
    toggle: $('#ram-toggle'), panel: $('#ram-panel'), close: $('#ram-close'), form: $('#ram-form'),
    start: $('#ram-start'), stop: $('#ram-stop'), message: $('#ram-message'), phase: $('#ram-phase'),
    rounds: $('#ram-rounds'), score: $('#ram-score'), human: $('#ram-human'),
    humanProgress: $('#ram-human-progress'), humanInstruction: $('#ram-human-instruction'),
    humanImage: $('#ram-human-image'), reference: $('#ram-reference'), choices: $('#ram-choices'),
  };

  const SETTINGS_KEY = 'randle-auto-mobile-settings-v2';
  let runningClient = null;
  let runningController = null;
  let humanPending = null;
  let roundsCompleted = 0;
  let roundsTarget = 0;

  function openPanel() { elements.panel.hidden = false; }
  function closePanel() { elements.panel.hidden = true; }
  elements.toggle.addEventListener('click', openPanel);
  elements.close.addEventListener('click', closePanel);

  function log(message) {
    console.info('[Randle Auto Mobile]', String(message));
  }

  function setRunning(running) {
    elements.toggle.dataset.running = String(running);
    elements.start.disabled = running;
    elements.stop.disabled = !running;
    for (const field of Array.from(elements.form.elements)) {
      if (field !== elements.stop && field !== elements.start) field.disabled = running;
    }
  }

  function setImage(element, value) {
    const safe = typeof value === 'string' && /^data:image\/(?:png|jpeg|webp|gif);base64,/i.test(value);
    element.hidden = !safe;
    if (safe) element.src = value;
    else element.removeAttribute('src');
  }

  function renderState(state) {
    const status = state?.human?.required
      ? (runtimeStatus.humanAuto ? '인증 자동 풀이' : '인증 답변 대기')
      : state?.round?.status || (state?.can_start ? '시작 가능' : '연결됨');
    elements.phase.textContent = status;
    const score = /^\d+$/.test(state?.round?.result?.score || '') ? state.round.result.score : state?.rp || '—';
    elements.score.textContent = score;
  }

  function clearHumanPrompt() {
    elements.human.hidden = true;
    elements.choices.replaceChildren();
    setImage(elements.humanImage, null);
    setImage(elements.reference, null);
  }

  function promptHuman(human, signal) {
    if (humanPending) return Promise.reject(new Error('이미 인간 인증 답변을 기다리고 있습니다.'));
    openPanel();
    elements.phase.textContent = '인증 진행 중';
    elements.human.hidden = false;
    elements.humanProgress.textContent = human.total ? `${human.progress + 1} / ${human.total}` : String(human.progress + 1);
    elements.humanInstruction.textContent = human.instruction || '올바른 답을 선택하세요.';
    setImage(elements.humanImage, human.image);
    setImage(elements.reference, human.reference);
    const columns = human.columns > 0 && human.columns <= 8 ? human.columns : Math.min(3, human.choices.length);
    elements.choices.style.setProperty('--ram-columns', String(Math.max(1, columns)));

    return new Promise((resolve, reject) => {
      const finish = (index) => {
        signal?.removeEventListener('abort', abort);
        humanPending = null;
        clearHumanPrompt();
        resolve(index);
      };
      const abort = () => {
        humanPending = null;
        clearHumanPrompt();
        reject(stoppedError());
      };
      humanPending = { reject: abort };
      signal?.addEventListener('abort', abort, { once: true });
      elements.choices.replaceChildren(...human.choices.map((choice, index) => {
        const button = document.createElement('button');
        const number = document.createElement('span');
        const name = document.createElement('span');
        const label = human.labels[index] || human.tray_labels[index] || '';
        button.type = 'button';
        button.className = 'ram-choice';
        button.disabled = human.disabled_choices.includes(index);
        button.dataset.selected = String(human.selected_choices.includes(index));
        number.textContent = String(index + 1);
        name.textContent = label;
        button.append(number, name);
        button.setAttribute('aria-label', label ? `${index + 1}. ${label}` : `${index + 1}번 선택`);
        button.addEventListener('click', () => finish(index), { once: true });
        return button;
      }));
    });
  }

  function readSettings() {
    const data = new FormData(elements.form);
    const settings = {
      rounds: Number(data.get('rounds')),
      strategy: String(data.get('strategy')),
      humanAuto: Boolean(elements.form.elements.namedItem('humanAuto')?.checked),
    };
    if (!Number.isInteger(settings.rounds) || settings.rounds < 1 || settings.rounds > 10_000) throw new Error('라운드 수는 1~10,000이어야 합니다.');
    if (!['rp', 'duplicates', 'confirm'].includes(settings.strategy)) throw new Error('올바른 전략을 선택하세요.');
    return settings;
  }

  function restoreSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null');
      if (!saved) return;
      for (const [name, value] of Object.entries(saved)) {
        const field = elements.form.elements.namedItem(name);
        if (field?.type === 'checkbox' && value !== undefined) field.checked = Boolean(value);
        else if (field && value !== undefined) field.value = value;
      }
    } catch {
      // Ignore invalid local preferences.
    }
  }

  elements.form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (runningClient) return;
    elements.message.textContent = '';
    let settings;
    try {
      settings = readSettings();
    } catch (error) {
      elements.message.textContent = error.message;
      return;
    }
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    runtimeStatus.humanAuto = settings.humanAuto;
    roundsCompleted = 0;
    roundsTarget = settings.rounds;
    elements.rounds.textContent = `0 / ${roundsTarget}`;
    elements.phase.textContent = '연결 중';
    setRunning(true);
    const controller = new AbortController();
    const client = new BrowserRandleClient({ logger: { error: log }, requestTimeoutMs: 30_000, maxReconnects: 8 });
    const automaticHumanSolver = createMobileHumanSolver({ logger: log });
    runningController = controller;
    runningClient = client;
    const removeStateListener = client.onState(renderState);
    try {
      const result = await runBot({
        client,
        rounds: settings.rounds,
        strategy: settings.strategy,
        maxWaitMs: 3_600_000,
        roundDelayMs: 0,
        stopScore: null,
        strategyOptions: {
          minExpectedGainPercent: 2,
          sampledOutcomes: 256,
          maxRerollPositions: 8,
        },
        solveHuman: settings.humanAuto ? (human) => automaticHumanSolver.solve(human) : promptHuman,
        onProgress: ({ roundsCompleted: completed, score }) => {
          roundsCompleted = completed;
          elements.rounds.textContent = `${completed} / ${roundsTarget}`;
          if (score) elements.score.textContent = score;
        },
        logger: log,
        signal: controller.signal,
      });
      elements.phase.textContent = '완료';
      elements.rounds.textContent = `${result.roundsCompleted} / ${roundsTarget}`;
      log(`실행 완료: ${result.roundsCompleted}라운드`);
    } catch (error) {
      if (error.name === 'AbortError' || controller.signal.aborted) {
        elements.phase.textContent = '중지됨';
        log('사용자가 실행을 중지했습니다.');
      } else {
        elements.phase.textContent = '오류';
        elements.message.textContent = error.message;
        log(`오류: ${error.message}`);
      }
    } finally {
      removeStateListener();
      client.close();
      runningClient = null;
      runningController = null;
      humanPending = null;
      clearHumanPrompt();
      setRunning(false);
    }
  });

  elements.stop.addEventListener('click', () => {
    runningController?.abort();
    runningClient?.close();
  });

  restoreSettings();
  setRunning(false);
  log(`v${APP_VERSION} Safari 세션 준비 완료. 인간 인증 자동 풀이가 기본 활성화됐습니다.`);
  log('쿠키 값은 읽거나 표시하지 않습니다.');
})();
