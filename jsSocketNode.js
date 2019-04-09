	if (getCookie('login')) var login=getCookie('login')
		else var login = generateRandomString(8)
		
	if (getCookie('memberID')) {
		var memberID=getCookie('memberID')
		var mid=getCookie('memberID')
	}
	if (getCookie('mid')) {
		var memberID=getCookie('mid')
		var mid=getCookie('mid')
	}
	if (getCookie('mobile')) var mobile=getCookie('mobile')
	if (getCookie('img')) var img=getCookie('img')

	setTimeout('xconnect()',1)
		
	var op1=1
	var operand1=-1
	var op2=0
	var operand2=1
	var fr1='fr1'
	var fr2='fr2'
	var biggy = 'biggy'
	var pointer, ajax_req, page_url, xsum=1
	var mid 
	var running=0; 
	var u=0, ut, mr=0
	var preview_count = []
	var coming_soon = "Coming Soon!"
	var promptly="Please enter a password with which we will encrypt your photo!";
	var seperator = "|"
	var toClientID, to_clientid, to_user, to_mid, my_mid,from_user
	var to_login
	var err_img = "https://gaysugardaddyfinder.com/assets/avatars/10.png" 
	var err_img1 = 'https://gaysugardaddyfinder.com/assets/images/tie.jpg'
	var UserID
	var toLogin
	var frmLogin
	var terms
	var socket
	var host
	var port=7002
	var chatSuccess
	var now2
	var now1
	var now3 = 0
	var html = document.documentElement;
	var jChatWn
	var	msgContainer
	var	msgHeader
	var	msgBody
	var	msgInputBox
	var Server;
	var enter = '0'
	var msg=''
	var uOnline=''  	
	var to_user
	var oColor = 'grey';
	var winCount=25
	var openWin = []
	var ctr = 0
	var mid=getCookie('mid')
	var my_login=getCookie('login')
	var arr_login=[]
	var arr_mid=[]
	var arr_cid=[]
	var arr_ip=[]
	var cid=1
	var msg_out = ''
	var labCol 
	var cData
	var x_login
	var pic_err = 'assets/avatars/a7.png'
	var err_img = 'assets/avatars/a7.png'
	var msg_out
	var old_msg_out=''
	var msg_id 
	var msg_no=0
	var showWin=[]
	var posWin=25
	var actWin=0
	var txt_msg, msg, img_src, msg_attach, img_attach, div_attach, preview_count=[]
	var msg_evt
	var final_msg
	var t
	var stream = []
	var UserID
	var who, asked=[], asked2 = []
	var a = [], a2 = [], sent_to
	var xsum=1000
	var payload, msg_type, clientID, frmLogin, txtMsg		 
	var ctrx=0
	var img
	var fmx
	var fmy
	var a3=''
	var allowed="0";
	var out_img1
	var in_img1
	var btn1
	var webcam
	var running=0
	var video_camera
	var rc=1;
	var to_login
	var dx, dy, dz
	var toMID
	var UserID
	var who
	var x_msg
	var mb,UserID, str, i, ob,cls='www_box2 uo'
	var mob
	var to
	var files
	var myDropzone
	var fn
	var fn
	var from, m, n 
	var strR=''
	var m, n
	var nh=25
	var i=0
	var nd=[]
	var nt=[]
	var old_str
	var mb
	var vd
	var vid
	var vrooms = [ ]
	var mob
	var to
	var ext
	var files
	var myDropzone 
	var fn
	var lc
	var long_code
	var users=[]
	var mobiles=[]
	var j
	var ul 
	var type
	var xuser=[ ]
	var xhost=[ ]
	var x
	var domain='gaysugardaddyfinder.com'
	var ttx
	var x=[],base
	var portIM=7001
	var t1=document.createElement('div')
	var t2=document.createElement('div')
	var wo=document.createElement('div')
	var windowObjectReference;
	var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=600";
	var logins=[]
	var mobiles=[]
	var usersOnline,uoHeader,sc,users=[];
	var cntR=0;
	var userData=[]
	var msg,data,type,stx=''
	var script
	var ls
	var x=[],base
	var bd
!function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},f=[],p="1.10.2",d=f.concat,h=f.push,g=f.slice,m=f.indexOf,y=c.toString,v=c.hasOwnProperty,b=p.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};function M(e){var t=e.length,n=x.type(e);return!x.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))}x.fn=x.prototype={jquery:p,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e))||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if((o=a.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);l<u;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],s!==(r=o[i])&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(!0===e?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,!0!==e&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(t){return e.JSON&&e.JSON.parse?e.JSON.parse(t):null===t?t:"string"==typeof t&&(t=x.trim(t))&&E.test(t.replace(A,"@").replace(j,"]").replace(S,""))?new Function("return "+t)():void x.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):((r=new ActiveXObject("Microsoft.XMLDOM")).async="false",r.loadXML(n))}catch(e){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=M(e);if(n){if(o)for(;r<i&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;r<i&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:b&&!b.call("\ufeff ")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;o<r;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r=[],i=0,o=e.length;for(n=!!n;i<o;i++)n!==!!t(e[i],i)&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,a=[];if(M(e))for(;i<o;i++)null!=(r=t(e[i],i,n))&&(a[a.length]=r);else for(i in e)null!=(r=t(e[i],i,n))&&(a[a.length]=r);return d.apply([],a)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),(i=function(){return e.apply(n||this,r.concat(g.call(arguments)))}).guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;l<u;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(e){}r&&r.doScroll&&function e(){if(!x.isReady){try{r.doScroll("left")}catch(t){return setTimeout(e,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()}),r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,f,p,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=ae(),k=ae(),E=ae(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=new RegExp("^"+P+"*,"+P+"*"),U=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=new RegExp(P+"*[+~]"),Y=new RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=new RegExp(I),G=new RegExp("^"+W+"$"),Q={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R.replace("w","w*")+")"),ATTR:new RegExp("^"+$),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+B+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/^(?:input|select|textarea|button)$/i,te=/^h\d$/i,ne=/'|\\/g,re=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ie=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(e){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,n,i){var a,s,u,c,d,m,y,x,T,C;if((t?t.ownerDocument||t:w)!==p&&f(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(c=t.nodeType)&&9!==c)return[];if(h&&!i){if(a=Z.exec(e))if(u=a[1]){if(9===c){if(!(s=t.getElementById(u))||!s.parentNode)return n;if(s.id===u)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&v(t,s)&&s.id===u)return n.push(s),n}else{if(a[2])return M.apply(n,t.getElementsByTagName(e)),n;if((u=a[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(u)),n}if(r.qsa&&(!g||!g.test(e))){if(x=y=b,T=t,C=9===c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(m=ge(e),(y=t.getAttribute("id"))?x=y.replace(ne,"\\$&"):t.setAttribute("id",x),x="[id='"+x+"'] ",d=m.length;d--;)m[d]=x+me(m[d]);T=V.test(e)&&t.parentNode||t,C=m.join(",")}if(C)try{return M.apply(n,T.querySelectorAll(C)),n}catch(e){}finally{y||t.removeAttribute("id")}}}return function(e,t,n,i){var a,s,u,c,f,p=ge(e);if(!i&&1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(!(t=(o.find.ID(u.matches[0].replace(re,ie),t)||[])[0]))return n;e=e.slice(s.shift().value.length)}for(a=Q.needsContext.test(e)?0:s.length;a--&&(u=s[a],!o.relative[c=u.type]);)if((f=o.find[c])&&(i=f(u.matches[0].replace(re,ie),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),!(e=i.length&&me(s)))return M.apply(n,i),n;break}}return l(e,p)(i,t,!h,n,V.test(e)),n}(e.replace(z,"$1"),t,n,i)}function ae(){var e=[];return function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}}function se(e){return e[b]=!0,e}function le(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),r=e.length;r--;)o.attrHandle[n[r]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},r=oe.support={},f=oe.setDocument=function(e){var t=e?e.ownerDocument||e:w,n=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,d=t.documentElement,h=!s(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){f()}),r.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=le(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=le(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=le(function(e){return d.appendChild(e).id=b,!t.getElementsByName||!t.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(re,ie);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(re,ie);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==j)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==j&&h)return t.getElementsByClassName(e)},m=[],g=[],(r.qsa=K.test(t.querySelectorAll))&&(le(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),le(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&le(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,n){if(e===n)return S=!0,0;var i=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return i?1&i||!r.sortDetached&&n.compareDocumentPosition(e)===i?e===t||v(w,e)?-1:n===t||v(w,n)?1:c?F.call(c,e)-F.call(c,n):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,s=[e],l=[n];if(e===n)return S=!0,0;if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:c?F.call(c,e)-F.call(c,n):0;if(o===a)return ce(e,n);for(r=e;r=r.parentNode;)s.unshift(r);for(r=n;r=r.parentNode;)l.unshift(r);for(;s[i]===l[i];)i++;return i?ce(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},t):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(Y,"='$1']"),r.matchesSelector&&h&&(!m||!m.test(t))&&(!g||!g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),v(e,t)},oe.attr=function(e,n){(e.ownerDocument||e)!==p&&f(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return e},a=oe.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},(o=oe.selectors={cacheLength:50,createPseudo:se,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(re,ie),e[3]=(e[4]||e[5]||"").replace(re,ie),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=ge(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(re,ie).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(d=(u=(c=m[b]||(m[b]={}))[e]||[])[0]===T&&u[1],p=u[0]===T&&u[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[T,d,p];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)p=u[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[b]||(f[b]={}))[e]=[T,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=F.call(e,o[a])]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:se(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:se(function(e){return G.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(re,ie).toLowerCase(),function(t){var n;do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return te.test(e.nodeName)},input:function(e){return ee.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=fe(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=pe(n);function he(){}function ge(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=o.preFilter;s;){n&&!(r=X.exec(s))||(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,l).slice(0)}function me(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ye(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,f=T+" "+a;if(s){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if((u=(c=t[b]||(t[b]={}))[r])&&u[0]===f){if(!0===(l=u[1])||l===i)return!0===l}else if((u=c[r]=[f])[1]=e(t,n,s)||i,!0===u[1])return!0}}function ve(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),se(function(o,a,s,l){var u,c,f,p=[],d=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:be(g,p,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r)for(u=be(y,d),r(u,[],s,l),c=u.length;c--;)(f=u[c])&&(y[d[c]]=!(m[d[c]]=f));if(o){if(i||e){if(i){for(u=[],c=y.length;c--;)(f=y[c])&&u.push(m[c]=f);i(null,y=[],u,l)}for(c=y.length;c--;)(f=y[c])&&(u=i?F.call(o,f):p[c])>-1&&(o[u]=!(a[u]=f))}}else y=be(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function we(e){for(var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=ye(function(e){return e===t},s,!0),f=ye(function(e){return F.call(t,e)>-1},s,!0),p=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];l<i;l++)if(n=o.relative[e[l].type])p=[ye(ve(p),n)];else{if((n=o.filter[e[l].type].apply(null,e[l].matches))[b]){for(r=++l;r<i&&!o.relative[e[r].type];r++);return xe(l>1&&ve(p),l>1&&me(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,l<r&&we(e.slice(l,r)),r<i&&we(e=e.slice(r)),r<i&&me(e))}p.push(n)}return ve(p)}he.prototype=o.filters=o.pseudos,o.setFilters=new he,l=oe.compile=function(e,t){var n,r,a,s,l,c,f,d=[],h=[],g=E[e+" "];if(!g){for(t||(t=ge(e)),n=t.length;n--;)(g=we(t[n]))[b]?d.push(g):h.push(g);g=E(e,(r=h,s=0,l=(a=d).length>0,c=r.length>0,f=function(e,t,n,f,d){var h,g,m,y=[],v=0,b="0",x=e&&[],w=null!=d,C=u,N=e||c&&o.find.TAG("*",d&&t.parentNode||t),k=T+=null==C?1:Math.random()||.1;for(w&&(u=t!==p&&t,i=s);null!=(h=N[b]);b++){if(c&&h){for(g=0;m=r[g++];)if(m(h,t,n)){f.push(h);break}w&&(T=k,i=++s)}l&&((h=!m&&h)&&v--,e&&x.push(h))}if(v+=b,l&&b!==v){for(g=0;m=a[g++];)m(x,y,t,n);if(e){if(v>0)for(;b--;)x[b]||y[b]||(y[b]=q.call(f));y=be(y)}M.apply(f,y),w&&!e&&y.length>0&&v+a.length>1&&oe.uniqueSort(f)}return w&&(T=k,u=C),x},l?se(f):f))}return g},r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,f(),r.sortDetached=le(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),r.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(B,function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&r.specified?r.value:!0===e[t]?t.toLowerCase():null}),x.find=oe,x.expr=oe.selectors,x.expr[":"]=x.expr.pseudos,x.unique=oe.uniqueSort,x.text=oe.getText,x.isXMLDoc=oe.isXML,x.contains=oe.contains}(e);var O={};x.Callbacks=function(e){var n,r,i,o,a,s,l,u,c=[],f=!(e="string"==typeof e?O[e]||(r=O[n=e]={},x.each(n.match(T)||[],function(e,t){r[t]=!0}),r):x.extend({},e)).once&&[],p=function(t){for(o=e.memory&&t,a=!0,l=u||0,u=0,s=c.length,i=!0;c&&l<s;l++)if(!1===c[l].apply(t[0],t[1])&&e.stopOnFalse){o=!1;break}i=!1,c&&(f?f.length&&p(f.shift()):o?c=[]:d.disable())},d={add:function(){if(c){var t=c.length;!function t(n){x.each(n,function(n,r){var i=x.type(r);"function"===i?e.unique&&d.has(r)||c.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),i?s=c.length:o&&(u=t,p(o))}return this},remove:function(){return c&&x.each(arguments,function(e,t){for(var n;(n=x.inArray(t,c,n))>-1;)c.splice(n,1),i&&(n<=s&&s--,n<=l&&l--)}),this},has:function(e){return e?x.inArray(e,c)>-1:!(!c||!c.length)},empty:function(){return c=[],s=0,this},disable:function(){return c=f=o=t,this},disabled:function(){return!c},lock:function(){return f=t,o||d.disable(),this},locked:function(){return!f},fireWith:function(e,t){return!c||a&&!f||(t=[e,(t=t||[]).slice?t.slice():t],i?f.push(t):p(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!a}};return d},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=g.call(arguments),a=o.length,s=1!==a||e&&x.isFunction(e.promise)?a:0,l=1===s?e:x.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?g.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&x.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,f,p,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],!(r=d.getElementsByTagName("a")[0])||!r.style||!n.length)return t;u=(s=a.createElement("select")).appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(e){t.deleteExpando=!1}(o=a.createElement("input")).setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),(l=a.createDocumentFragment()).appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(p in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+p,"t"),t[p+"Bubbles"]=c in e||!1===d.attributes[c].expando;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(p in x(t))break;return t.ownLast="0"!==p,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&((n=a.createElement("div")).style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(o=d.getElementsByTagName("td"))[0].style.cssText="padding:0;margin:0;border:0;display:none",f=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=f&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,(r=d.appendChild(a.createElement("div"))).style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t}({});var F=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=f.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),"object"!=typeof n&&"function"!=typeof n||(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?null==(o=a[n])&&(o=a[x.camelCase(n)]):o=a,o}}function R(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=x.isArray(t)?t.concat(x.map(t,x.camelCase)):t in r?[t]:(t=x.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!$(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,$(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if("string"==typeof(r=e.getAttribute(i))){try{r="true"===r||"false"!==r&&("null"===r?null:+r+""===r?+r:F.test(r)?x.parseJSON(r):r)}catch(e){}x.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?x.cache[e[x.expando]]:e[x.expando])&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;a<r.length;a++)0===(i=r[a].name).indexOf("data-")&&W(s,i=x.camelCase(i.slice(5)),o[i]);x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?W(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}}),x.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=x._data(e,t),n&&(!r||x.isArray(n)?r=x._data(e,t,x.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){x.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx&&x.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)(r=x._data(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var I,z,X=/[\t\r\n\f]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected)$/i,G=x.support.getSetAttribute,Q=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(e){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];a<s;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];a<s;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,o=x(this),a=e.match(T)||[];t=a[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else n!==i&&"boolean"!==n||(this.className&&x._data(this,"__className__",this.className),this.className=this.className||!1===e?"":x._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];return arguments.length?(i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?e.call(this,n,x(this).val()):e)?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),(r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))})):o?(r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()])&&"get"in r&&(n=r.get(o,"value"))!==t?n:"string"==typeof(n=o.value)?n.replace(U,""):null==n?"":n:void 0}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,l=i<0?s:o?i:0;l<s;l++)if(((n=r[l]).selected||l===i)&&(x.support.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=x.makeArray(t),a=i.length;a--;)((r=i[a]).selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?z:I)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:null==(a=x.find.attr(e,n))?t:a:null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):void x.removeAttr(e,n))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)for(;n=o[i++];)r=x.propFix[n]||n,x.expr.match.bool.test(n)?Q&&G||!J.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(G?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{for:"htmlFor",class:"className"},prop:function(e,n,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return(1!==a||!x.isXMLDoc(e))&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:-1}}}}),z={set:function(e,t,n){return!1===t?x.removeAttr(e,n):Q&&G||!J.test(n)?e.setAttribute(!G&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=Q&&G||!J.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),Q&&G||(x.attrHooks.value={set:function(e,t,n){if(!x.nodeName(e,"input"))return I&&I.set(e,t,n);e.defaultValue=t}}),G||(I={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:I.set},x.attrHooks.contenteditable={set:function(e,t,n){I.set(e,""!==t&&t,n)}},x.each(["width","height"],function(e,t){x.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){if(x.isArray(t))return e.checked=x.inArray(x(e).val(),t)>=0}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var K=/^(?:input|select|textarea)$/i,Z=/^key/,ee=/^(?:mouse|contextmenu)|click/,te=/^(?:focusinfocus|focusoutblur)$/,ne=/^([^.]*)(?:\.(.+)|)$/;function re(){return!0}function ie(){return!1}function oe(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,f,p,d,h,g,m,y,v=x._data(e);if(v){for(r.handler&&(r=(c=r).handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(p=v.handle)||((p=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(p.elem,arguments)}).elem=e),u=(n=(n||"").match(T)||[""]).length;u--;)g=y=(s=ne.exec(n[u])||[])[1],m=(s[2]||"").split(".").sort(),g&&(f=x.event.special[g]||{},g=(a?f.delegateType:f.bindType)||g,f=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||((h=l[g]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,o,m,p)||(e.addEventListener?e.addEventListener(g,p,!1):e.attachEvent&&e.attachEvent("on"+g,p))),f.add&&(f.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){for(u=(t=(t||"").match(T)||[""]).length;u--;)if(d=g=(s=ne.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=x.event.special[d]||{},p=c[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));l&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,f,p,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=p=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!te.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(g=(m=g.split(".")).shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n)).isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),f=x.event.special[g]||{},o||!f.trigger||!1!==f.trigger.apply(i,r))){if(!o&&!f.noBubble&&!x.isWindow(i)){for(c=f.delegateType||g,te.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),p=u;p===(i.ownerDocument||a)&&h.push(p.defaultView||p.parentWindow||e)}for(d=0;(u=h[d++])&&!n.isPropagationStopped();)n.type=d>1?c:f.bindType||g,(s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"))&&s.apply(u,r),(s=l&&u[l])&&x.acceptData(u)&&s.apply&&!1===s.apply(u,r)&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!f._default||!1===f._default.apply(h.pop(),r))&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){(p=i[l])&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(e){}x.event.triggered=t,p&&(i[l]=p)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s,l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=x.event.handlers.call(this,e,u),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,(r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l))!==t&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(o=[],a=0;a<l;a++)o[r=(i=n[a]).selector+" "]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return l<n.length&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=ee.test(i)?this.mouseHooks:Z.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(o=(i=e.target.ownerDocument||a).documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==oe()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===oe()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(x.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,t){if(!(this instanceof x.Event))return new x.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?re:ie):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0},x.Event.prototype={isDefaultPrevented:ie,isPropagationStopped:ie,isImmediatePropagationStopped:ie,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=re,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=re,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=re,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||x.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){if(x.nodeName(this,"form"))return!1;x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(x.nodeName(this,"form"))return!1;x.event.remove(this,"._submit")}}),x.support.changeBubbles||(x.event.special.change={setup:function(){if(K.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1;x.event.add(this,"beforeactivate._change",function(e){var t=e.target;K.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return x.event.remove(this,"._change"),!K.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0==n++&&a.addEventListener(e,r,!0)},teardown:function(){0==--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),!1===i)i=ie;else if(!i)return this;return 1===o&&(s=i,(i=function(e){return x().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return!1!==n&&"function"!=typeof n||(r=n,n=t),!1===r&&(r=ie),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return x.event.trigger(e,t,n,!0)}});var ae=/^.[^:#\[\.,]*$/,se=/^(?:parents|prev(?:Until|All))/,le=x.expr.match.needsContext,ue={children:!0,contents:!0,next:!0,prev:!0};function ce(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function fe(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ae.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function pe(e){var t=de.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;t<i;t++)if(x.contains(r[t],this))return!0}));for(t=0;t<i;t++)x.find(e,r[t],n);return(n=this.pushStack(i>1?x.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(fe(this,e||[],!0))},filter:function(e){return this.pushStack(fe(this,e||[],!1))},is:function(e){return!!fe(this,"string"==typeof e&&le.test(e)?x(e):e||[],!1).length},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=le.test(e)||"string"!=typeof e?x(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return ce(e,"nextSibling")},prev:function(e){return ce(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ue[e]||(i=x.unique(i)),se.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var de="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",he=/ jQuery\d+="(?:null|\d+)"/g,ge=new RegExp("<(?:"+de+")[\\s/>]","i"),me=/^\s+/,ye=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ve=/<([\w:]+)/,be=/<tbody/i,xe=/<|&#?\w+;/,we=/<(?:script|style|link)/i,Te=/^(?:checkbox|radio)$/i,Ce=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^$|\/(?:java|ecma)script/i,ke=/^true\/(.*)/,Ee=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Se={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ae=pe(a).appendChild(a.createElement("div"));function je(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function Le(e){var t=ke.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function He(e,t){for(var n,r=0;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function qe(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function _e(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,Le(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Te.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function Me(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Me(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Oe(e){Te.test(e.type)&&(e.defaultChecked=e.checked)}Se.optgroup=Se.option,Se.tbody=Se.tfoot=Se.colgroup=Se.caption=Se.thead,Se.th=Se.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?x.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Me(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&He(Me(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&x.cleanData(Me(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(he,""):t;if("string"==typeof e&&!we.test(e)&&(x.support.htmlSerialize||!ge.test(e))&&(x.support.leadingWhitespace||!me.test(e))&&!Se[(ve.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ye,"<$1></$2>");try{for(;r<i;r++)1===(n=this[r]||{}).nodeType&&(x.cleanData(Me(n,!1)),n.innerHTML=e);n=0}catch(e){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,f=this,p=c-1,h=e[0],g=x.isFunction(h);if(g||!(c<=1||"string"!=typeof h||x.support.checkClone)&&Ce.test(h))return this.each(function(r){var i=f.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this)).firstChild,1===l.childNodes.length&&(l=r),r)){for(o=(a=x.map(Me(l,"script"),De)).length;u<c;u++)i=l,u!==p&&(i=x.clone(i,!0,!0),o&&x.merge(a,Me(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,Le),u=0;u<o;u++)i=a[u],Ne.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Ee,"")));l=r=null}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){for(var n,r=0,i=[],o=x(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}}),x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!ge.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Ae.innerHTML=e.outerHTML,Ae.removeChild(o=Ae.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Me(o),s=Me(e),a=0;null!=(i=s[a]);++a)r[a]&&_e(i,r[a]);if(t)if(n)for(s=s||Me(e),r=r||Me(o),a=0;null!=(i=s[a]);a++)qe(i,r[a]);else qe(e,o);return(r=Me(o,"script")).length>0&&He(r,!l&&Me(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,f=e.length,p=pe(t),d=[],h=0;h<f;h++)if((o=e[h])||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(xe.test(o)){for(s=s||p.appendChild(t.createElement("div")),l=(ve.exec(o)||["",""])[1].toLowerCase(),c=Se[l]||Se._default,s.innerHTML=c[1]+o.replace(ye,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!x.support.leadingWhitespace&&me.test(o)&&d.push(t.createTextNode(me.exec(o)[0])),!x.support.tbody)for(i=(o="table"!==l||be.test(o)?"<table>"!==c[1]||be.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(x.merge(d,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=p.lastChild}else d.push(t.createTextNode(o));for(s&&p.removeChild(s),x.support.appendChecked||x.grep(Me(d,"input"),Oe),h=0;o=d[h++];)if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Me(p.appendChild(o),"script"),a&&He(s),n))for(i=0;o=s[i++];)Ne.test(o.type||"")&&n.push(o);return s=null,p},cleanData:function(e,t){for(var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,p=x.event.special;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(a=(o=n[l])&&u[o])){if(a.events)for(r in a.events)p[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,f.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Fe,Be,Pe,Re=/alpha\([^)]*\)/i,We=/opacity\s*=\s*([^)]*)/,$e=/^(top|right|bottom|left)$/,Ie=/^(none|table(?!-c[ea]).+)/,ze=/^margin/,Xe=new RegExp("^("+w+")(.*)$","i"),Ue=new RegExp("^("+w+")(?!px)[a-z%]+$","i"),Ve=new RegExp("^([+-])=("+w+")","i"),Ye={BODY:"block"},Je={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:0,fontWeight:400},Qe=["Top","Right","Bottom","Left"],Ke=["Webkit","O","Moz","ms"];function Ze(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Ke.length;i--;)if((t=Ke[i]+n)in e)return t;return r}function et(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function tt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&et(r)&&(o[a]=x._data(r,"olddisplay",ot(r.nodeName)))):o[a]||(i=et(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function nt(e,t,n){var r=Xe.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function rt(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=x.css(e,n+Qe[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Qe[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Qe[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Qe[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Qe[o]+"Width",!0,i)));return a}function it(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Be(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=Pe(e,t,o))<0||null==i)&&(i=e.style[t]),Ue.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+rt(e,t,n||(a?"border":"content"),r,o)+"px"}function ot(e){var t=a,n=Ye[e];return n||("none"!==(n=at(e,t))&&n||((t=((Fe=(Fe||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),n=at(e,t),Fe.detach()),Ye[e]=n),n}function at(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Be(e),i=n.length;s<i;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return tt(this,!0)},hide:function(){return tt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){et(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Pe(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=Ze(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(!("string"===(a=typeof r)&&(o=Ve.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(e){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=Ze(e.style,l)),(s=x.cssHooks[n]||x.cssHooks[l])&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Pe(e,n,i)),"normal"===a&&n in Ge&&(a=Ge[n]),""===r||r?(o=parseFloat(a),!0===r||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Be=function(t){return e.getComputedStyle(t,null)},Pe=function(e,n,r){var i,o,a,s=r||Be(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Ue.test(l)&&ze.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Be=function(e){return e.currentStyle},Pe=function(e,n,r){var i,o,a,s=r||Be(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Ue.test(l)&&!$e.test(n)&&(i=u.left,(a=(o=e.runtimeStyle)&&o.left)&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l}),x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){if(n)return 0===e.offsetWidth&&Ie.test(x.css(e,"display"))?x.swap(e,Je,function(){return it(e,t,r)}):it(e,t,r)},set:function(e,n,r){var i=r&&Be(e);return nt(0,n,r?rt(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return We.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace(Re,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Re.test(o)?o.replace(Re,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){if(t)return x.swap(e,{display:"inline-block"},Pe,[e,"marginRight"])}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){if(n)return n=Pe(e,t),Ue.test(n)?x(e).position()[t]+"px":n}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Qe[r]+t]=o[r]||o[r-2]||o[0];return i}},ze.test(e)||(x.cssHooks[e+t].set=nt)});var st=/%20/g,lt=/\[\]$/,ut=/\r?\n/g,ct=/^(?:submit|button|image|reset|file)$/i,ft=/^(?:input|select|textarea|keygen)/i;function pt(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||lt.test(e)?r(e,i):pt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)pt(e+"["+i+"]",t[i],n,r)}x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&ft.test(this.nodeName)&&!ct.test(e)&&(this.checked||!Te.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(ut,"\r\n")}}):{name:t.name,value:n.replace(ut,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)pt(r,e[r],n,o);return i.join("&").replace(st,"+")},x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var dt,ht,gt=x.now(),mt=/\?/,yt=/#.*$/,vt=/([?&])_=[^&]*/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,xt=/^(?:GET|HEAD)$/,wt=/^\/\//,Tt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ct=x.fn.load,Nt={},kt={},Et="*/".concat("*");try{ht=o.href}catch(e){(ht=a.createElement("a")).href="",ht=ht.href}function St(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function At(e,t,n,r){var i={},o=e===kt;function a(s){var l;return i[s]=!0,x.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||o||i[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function jt(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}dt=Tt.exec(ht.toLowerCase())||[],x.fn.load=function(e,n,r){if("string"!=typeof e&&Ct)return Ct.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ht,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Et,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?jt(jt(e,x.ajaxSettings),t):jt(x.ajaxSettings,e)},ajaxPrefilter:St(Nt),ajaxTransport:St(kt),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,f=x.ajaxSetup({},n),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=f.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=bt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),N(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,f.url=((e||f.url||ht)+"").replace(yt,"").replace(wt,dt[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=x.trim(f.dataType||"*").toLowerCase().match(T)||[""],null==f.crossDomain&&(r=Tt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===dt[1]&&r[2]===dt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(dt[3]||("http:"===dt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=x.param(f.data,f.traditional)),At(Nt,f,n,C),2===b)return C;(l=f.global)&&0==x.active++&&x.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!xt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(mt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=vt.test(o)?o.replace(vt,"$1_="+gt++):o+(mt.test(o)?"&":"?")+"_="+gt++)),f.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Et+"; q=0.01":""):f.accepts["*"]);for(i in f.headers)C.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(p,C,f)||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](f[i]);if(u=At(kt,f,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},f.timeout));try{b=1,u.send(y,N)}catch(e){if(!(b<2))throw e;N(-1,e)}}else N(-1,"No Transport");function N(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&e<300||304===e,r&&(w=function(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;for(;"*"===u[0];)u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}if(a)return a!==u[0]&&u.unshift(a),r[a]}(f,C,r)),w=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();for(;o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(f,w,C,c),c?(f.ifModified&&((T=C.getResponseHeader("Last-Modified"))&&(x.lastModified[o]=T),(T=C.getResponseHeader("etag"))&&(x.etag[o]=T)),204===e||"HEAD"===f.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,c=!(v=w.error))):(v=N,!e&&N||(N="error",e<0&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(p,[y,N,C]):h.rejectWith(p,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,f,c?y:v]),g.fireWith(p,[C,N]),l&&(d.trigger("ajaxComplete",[C,f]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){(n=a.createElement("script")).async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Dt=[],Lt=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Dt.pop()||x.expando+"_"+gt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=!1!==n.jsonp&&(Lt.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Lt.test(n.data)&&"data");if(l||"jsonp"===n.dataTypes[0])return o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Lt,"$1"+o):!1!==n.jsonp&&(n.url+=(mt.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Dt.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"});var Ht,qt,_t=0,Mt=e.ActiveXObject&&function(){var e;for(e in Ht)Ht[e](t,!0)};function Ot(){try{return new e.XMLHttpRequest}catch(e){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Ot()||function(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:Ot,qt=x.ajaxSettings.xhr(),x.support.cors=!!qt&&"withCredentials"in qt,(qt=x.support.ajax=!!qt)&&x.ajaxTransport(function(n){var r;if(!n.crossDomain||x.support.cors)return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(e){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,f;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,Mt&&delete Ht[a]),i)4!==l.readyState&&l.abort();else{f={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(f.text=l.responseText);try{c=l.statusText}catch(e){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(e){i||o(-1,e)}f&&o(s,c,f,u)},n.async?4===l.readyState?setTimeout(r):(a=++_t,Mt&&(Ht||(Ht={},x(e).unload(Mt)),Ht[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}});var Ft,Bt,Pt=/^(?:toggle|show|hide)$/,Rt=new RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Wt=/queueHooks$/,$t=[function(e,t,n){var r,i,o,a,s,l,u=this,c={},f=e.style,p=e.nodeType&&et(e),d=x._data(e,"fxshow");n.queue||(null==(s=x._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})}));1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ot(e.nodeName)?f.zoom=1:f.display="inline-block"));n.overflow&&(f.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Pt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(p=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!p),p?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Xt(p?d[r]:0,r,u),r in d||(d[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}],It={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Rt.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Rt.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do{a/=s=s||".5",x.style(n.elem,e,a+o)}while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function zt(){return setTimeout(function(){Ft=t}),Ft=x.now()}function Xt(e,t,n){for(var r,i=(It[t]||[]).concat(It["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function Ut(e,t,n){var r,i,o=0,a=$t.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Ft||zt(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;o<a;o++)u.tweens[o].run(r);return s.notifyWith(e,[u,r,n]),r<1&&a?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ft||zt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=x.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}(c,u.opts.specialEasing);o<a;o++)if(r=$t[o].call(u,e,c,u.opts))return r;return x.map(c,Xt,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function Vt(e,t,n,r,i){return new Vt.prototype.init(e,t,n,r,i)}function Yt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=Qe[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function Jt(e){return x.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}x.Animation=x.extend(Ut,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],It[n]=It[n]||[],It[n].unshift(t)},prefilter:function(e,t){t?$t.unshift(e):$t.push(e)}}),x.Tween=Vt,Vt.prototype={constructor:Vt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Vt.propHooks[this.prop];return e&&e.get?e.get(this):Vt.propHooks._default.get(this)},run:function(e){var t,n=Vt.propHooks[this.prop];return this.options.duration?this.pos=t=x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Vt.propHooks._default.set(this),this}},Vt.prototype.init.prototype=Vt.prototype,Vt.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Vt.propHooks.scrollTop=Vt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Yt(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(et).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=Ut(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Wt.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));!t&&r||x.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),x.each({slideDown:Yt("show"),slideUp:Yt("hide"),slideToggle:Yt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Vt.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Ft=x.now();r<n.length;r++)(e=n[r])()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Ft=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Bt||(Bt=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Bt),Bt=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;return s?(n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=Jt(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o):void 0},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=x(e),s=a.offset(),l=x.css(e,"top"),u=x.css(e,"left"),c={},f={};("absolute"===r||"fixed"===r)&&x.inArray("auto",[l,u])>-1?(i=(f=a.position()).top,o=f.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(c.top=t.top-s.top+i),null!=t.left&&(c.left=t.left-s.left+o),"using"in t?t.using.call(e,c):a.css(c)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||s;e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position");)e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=Jt(e);if(o===t)return a?n in a?a[n]:a.document.documentElement[i]:e[i];a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o},e,i,arguments.length,null)}}),x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(!0===i||!0===o?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))}(window);
(function(){var a,b,c,d,e,f,g,h,i=[].slice,j={}.hasOwnProperty,k=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=function(){},b=function(){function a(){}return a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b),this},a.prototype.emit=function(){var a,b,c,d,e,f;if(d=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],this._callbacks=this._callbacks||{},c=this._callbacks[d])for(e=0,f=c.length;f>e;e++)b=c[e],b.apply(this,a);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(a,b){var c,d,e,f,g;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(d=this._callbacks[a],!d)return this;if(1===arguments.length)return delete this._callbacks[a],this;for(e=f=0,g=d.length;g>f;e=++f)if(c=d[e],c===b){d.splice(e,1);break}return this},a}(),a=function(a){function c(a,b){var e,f,g;if(this.element=a,this.version=c.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(c.instances.push(this),this.element.dropzone=this,e=null!=(g=c.optionsForElement(this.element))?g:{},this.options=d({},this.defaultOptions,e,null!=b?b:{}),this.options.forceFallback||!c.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?c.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:c.getElements(this.options.clickable,"clickable")),this.init()}var d,e;return k(c,a),c.prototype.Emitter=b,c.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],c.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return g},forceFallback:!1,fallback:function(){var a,b,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(b=a,a.className="dz-message");return b||(b=c.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(b)),d=b.getElementsByTagName("span")[0],d&&(d.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:g,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:g,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var b,d,e,f,g,h,i,j,k,l,m,n,o;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(a.previewElement=c.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)b=l[f],b.textContent=a.name;for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)b=m[g],b.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(b){return function(d){return d.preventDefault(),d.stopPropagation(),a.status===c.UPLOADING?c.confirm(b.options.dictCancelUploadConfirmation,function(){return b.removeFile(a)}):b.options.dictRemoveFileConfirmation?c.confirm(b.options.dictRemoveFileConfirmation,function(){return b.removeFile(a)}):b.removeFile(a)}}(this),n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o}},removedfile:function(a){var b;return a.previewElement&&null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f;if(a.previewElement){for(a.previewElement.classList.remove("dz-file-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,c.src=b;return setTimeout(function(){return function(){return a.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(a,b){var c,d,e,f,g;if(a.previewElement){for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g}},errormultiple:g,processing:function(a){return a.previewElement&&(a.previewElement.classList.add("dz-processing"),a._removeLink)?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:g,uploadprogress:function(a,b){var c,d,e,f,g;if(a.previewElement){for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push("PROGRESS"===c.nodeName?c.value=b:c.style.width=""+b+"%");return g}},totaluploadprogress:g,sending:g,sendingmultiple:g,success:function(a){return a.previewElement?a.previewElement.classList.add("dz-success"):void 0},successmultiple:g,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:g,complete:function(a){return a._removeLink&&(a._removeLink.textContent=this.options.dictRemoveFile),a.previewElement?a.previewElement.classList.add("dz-complete"):void 0},completemultiple:g,maxfilesexceeded:g,maxfilesreached:g,queuecomplete:g,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},d=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?i.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},c.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},c.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},c.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},c.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(c.QUEUED)},c.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(c.UPLOADING)},c.prototype.getActiveFiles=function(){var a,b,d,e,f;for(e=this.files,f=[],b=0,d=e.length;d>b;b++)a=e[b],(a.status===c.UPLOADING||a.status===c.QUEUED)&&f.push(a);return f},c.prototype.init=function(){var a,b,d,e,f,g,h;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(a){return function(){return a.hiddenFileInput&&document.body.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.body.appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var b,c,e,f;if(c=a.hiddenFileInput.files,c.length)for(e=0,f=c.length;f>e;e++)b=c[e],a.addFile(b);return d()})}}(this))(),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("canceled",function(a){return function(b){return a.emit("complete",b)}}(this)),this.on("complete",function(a){return function(){return 0===a.getUploadingFiles().length&&0===a.getQueuedFiles().length?setTimeout(function(){return a.emit("queuecomplete")},0):void 0}}(this)),b=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return function(b){return a.emit("dragstart",b)}}(this),dragenter:function(a){return function(c){return b(c),a.emit("dragenter",c)}}(this),dragover:function(a){return function(c){var d;try{d=c.dataTransfer.effectAllowed}catch(e){}return c.dataTransfer.dropEffect="move"===d||"linkMove"===d?"move":"copy",b(c),a.emit("dragover",c)}}(this),dragleave:function(a){return function(b){return a.emit("dragleave",b)}}(this),drop:function(a){return function(c){return b(c),a.drop(c)}}(this),dragend:function(a){return function(b){return a.emit("dragend",b)}}(this)}}],this.clickableElements.forEach(function(a){return function(b){return a.listeners.push({element:b,events:{click:function(d){return b!==a.element||d.target===a.element||c.elementInside(d.target,a.element.querySelector(".dz-message"))?a.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},c.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,c.instances.splice(c.instances.indexOf(this),1)},c.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},c.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},c.prototype.getFallbackForm=function(){var a,b,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',b=c.createElement(d),"FORM"!==this.element.tagName?(e=c.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(b)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:b)},c.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},c.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},c.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},c.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},c.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},c.prototype.filesize=function(a){var b,c,d,e,f,g,h,i;for(g=["TB","GB","MB","KB","b"],d=e=null,c=h=0,i=g.length;i>h;c=++h)if(f=g[c],b=Math.pow(this.options.filesizeBase,4-c)/10,a>=b){d=a/Math.pow(this.options.filesizeBase,4-c),e=f;break}return d=Math.round(10*d)/10,"<strong>"+d+"</strong> "+e},c.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},c.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},c.prototype.paste=function(a){var b,c;if(null!=(null!=a&&null!=(c=a.clipboardData)?c.items:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},c.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},c.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?this.addFile(c.getAsFile()):b.isDirectory?this._addFilesFromDirectory(b,b.name):void 0:null!=c.getAsFile?null==c.kind||"file"===c.kind?this.addFile(c.getAsFile()):void 0:void 0);return f},c.prototype._addFilesFromDirectory=function(a,b){var c,d;return c=a.createReader(),d=function(a){return function(c){var d,e,f;for(e=0,f=c.length;f>e;e++)d=c[e],d.isFile?d.file(function(c){return a.options.ignoreHiddenFiles&&"."===c.name.substring(0,1)?void 0:(c.fullPath=""+b+"/"+c.name,a.addFile(c))}):d.isDirectory&&a._addFilesFromDirectory(d,""+b+"/"+d.name)}}(this),c.readEntries(d,function(a){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(a):void 0})},c.prototype.accept=function(a,b){return a.size>1024*this.options.maxFilesize*1024?b(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):c.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,b):b(this.options.dictInvalidFileType)},c.prototype.addFile=function(a){return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=c.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return function(c){return c?(a.accepted=!1,b._errorProcessing([a],c)):(a.accepted=!0,b.options.autoQueue&&b.enqueueFile(a)),b._updateMaxFilesReachedClass()}}(this))},c.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},c.prototype.enqueueFile=function(a){if(a.status!==c.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=c.QUEUED,this.options.autoProcessQueue?setTimeout(function(a){return function(){return a.processQueue()}}(this),0):void 0},c.prototype._thumbnailQueue=[],c.prototype._processingThumbnail=!1,c.prototype._enqueueThumbnail=function(a){return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(a){return function(){return a._processThumbnailQueue()}}(this),0)):void 0},c.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(a){return function(){return a._processingThumbnail=!1,a._processThumbnailQueue()}}(this)))},c.prototype.removeFile=function(a){return a.status===c.UPLOADING&&this.cancelUpload(a),this.files=h(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},c.prototype.removeAllFiles=function(a){var b,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)b=f[d],(b.status!==c.UPLOADING||a)&&this.removeFile(b);return null},c.prototype.createThumbnail=function(a,b){var c;return c=new FileReader,c.onload=function(d){return function(){var e;return"image/svg+xml"===a.type?(d.emit("thumbnail",a,c.result),void(null!=b&&b())):(e=document.createElement("img"),e.onload=function(){var c,g,h,i,j,k,l,m;return a.width=e.width,a.height=e.height,h=d.options.resize.call(d,a),null==h.trgWidth&&(h.trgWidth=h.optWidth),null==h.trgHeight&&(h.trgHeight=h.optHeight),c=document.createElement("canvas"),g=c.getContext("2d"),c.width=h.trgWidth,c.height=h.trgHeight,f(g,e,null!=(j=h.srcX)?j:0,null!=(k=h.srcY)?k:0,h.srcWidth,h.srcHeight,null!=(l=h.trgX)?l:0,null!=(m=h.trgY)?m:0,h.trgWidth,h.trgHeight),i=c.toDataURL("image/png"),d.emit("thumbnail",a,i),null!=b?b():void 0},e.onerror=b,e.src=c.result)}}(this),c.readAsDataURL(a)},c.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},c.prototype.processFile=function(a){return this.processFiles([a])},c.prototype.processFiles=function(a){var b,d,e;for(d=0,e=a.length;e>d;d++)b=a[d],b.processing=!0,b.status=c.UPLOADING,this.emit("processing",b);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},c.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},c.prototype.cancelUpload=function(a){var b,d,e,f,g,h,i;if(a.status===c.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)b=d[e],b.status=c.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)b=d[f],this.emit("canceled",b);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===c.ADDED||i===c.QUEUED)&&(a.status=c.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},e=function(){var a,b;return b=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],"function"==typeof b?b.apply(this,a):b},c.prototype.uploadFile=function(a){return this.uploadFiles([a])},c.prototype.uploadFiles=function(a){var b,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L;for(w=new XMLHttpRequest,x=0,B=a.length;B>x;x++)b=a[x],b.xhr=w;p=e(this.options.method,a),u=e(this.options.url,a),w.open(p,u,!0),w.withCredentials=!!this.options.withCredentials,s=null,g=function(c){return function(){var d,e,f;for(f=[],d=0,e=a.length;e>d;d++)b=a[d],f.push(c._errorProcessing(a,s||c.options.dictResponseError.replace("{{statusCode}}",w.status),w));return f}}(this),t=function(c){return function(d){var e,f,g,h,i,j,k,l,m;if(null!=d)for(f=100*d.loaded/d.total,g=0,j=a.length;j>g;g++)b=a[g],b.upload={progress:f,total:d.total,bytesSent:d.loaded};else{for(e=!0,f=100,h=0,k=a.length;k>h;h++)b=a[h],(100!==b.upload.progress||b.upload.bytesSent!==b.upload.total)&&(e=!1),b.upload.progress=f,b.upload.bytesSent=b.upload.total;if(e)return}for(m=[],i=0,l=a.length;l>i;i++)b=a[i],m.push(c.emit("uploadprogress",b,f,b.upload.bytesSent));return m}}(this),w.onload=function(b){return function(d){var e;if(a[0].status!==c.CANCELED&&4===w.readyState){if(s=w.responseText,w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))try{s=JSON.parse(s)}catch(f){d=f,s="Invalid JSON response from server."}return t(),200<=(e=w.status)&&300>e?b._finished(a,s,d):g()}}}(this),w.onerror=function(){return function(){return a[0].status!==c.CANCELED?g():void 0}}(this),r=null!=(G=w.upload)?G:w,r.onprogress=t,j={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&d(j,this.options.headers);for(h in j)i=j[h],w.setRequestHeader(h,i);if(f=new FormData,this.options.params){H=this.options.params;for(o in H)v=H[o],f.append(o,v)}for(y=0,C=a.length;C>y;y++)b=a[y],this.emit("sending",b,w,f);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,w,f),"FORM"===this.element.tagName)for(I=this.element.querySelectorAll("input, textarea, select, button"),z=0,D=I.length;D>z;z++)if(l=I[z],m=l.getAttribute("name"),n=l.getAttribute("type"),"SELECT"===l.tagName&&l.hasAttribute("multiple"))for(J=l.options,A=0,E=J.length;E>A;A++)q=J[A],q.selected&&f.append(m,q.value);else(!n||"checkbox"!==(K=n.toLowerCase())&&"radio"!==K||l.checked)&&f.append(m,l.value);for(k=F=0,L=a.length-1;L>=0?L>=F:F>=L;k=L>=0?++F:--F)f.append(this._getParamName(k),a[k],a[k].name);return w.send(f)},c.prototype._finished=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.SUCCESS,this.emit("success",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c.prototype._errorProcessing=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.ERROR,this.emit("error",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c}(b),a.version="4.0.1",a.options={},a.optionsForElement=function(b){return b.getAttribute("id")?a.options[c(b.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},a.autoDiscover=!0,a.discover=function(){var b,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],b=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],f.push(/(^| )dropzone($| )/.test(b.className)?d.push(b):void 0);return f},b(document.getElementsByTagName("div")),b(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.optionsForElement(c)!==!1?new a(c):void 0);return g},a.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],a.isBrowserSupported=function(){var b,c,d,e,f;if(b=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=a.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(b=!1);else b=!1;else b=!1;return b},h=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},c=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},a.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},a.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},a.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},a.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},a.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},a.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(b){return this.each(function(){return new a(this,b)})}),"undefined"!=typeof module&&null!==module?module.exports=a:window.Dropzone=a,a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success",e=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},f=function(a,b,c,d,f,g,h,i,j,k){var l;return l=e(b),a.drawImage(b,c,d,f,g,h,i,j,k/l)},d=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0
},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,void setTimeout(g,50)}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},a._autoDiscoverFunction=function(){return a.autoDiscover?a.discover():void 0},d(window,a._autoDiscoverFunction)}).call(this);	
	function $$(objID) {
		return document.getElementById(objID)
	}
	//Load all JS libraries
	['https://gaysugardaddyfinder.com/assets/js/jquery.js','https://terrawire.com/assets/js/xmalert.js','https://terrawire.com/assets/js/alerts.js','https://terrawire.com/assets/js/mpopup.js','https://terrawire.com/assets/js/bootstrap.js','https://terrawire.com/assets/js/dropzone.js','https://terrawire.com/assets/js/jquery-confirm.js'].forEach(function(src) {
		script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	});	

	//	Load All CSS files
	['https://gaysugardaddyfinder.com/assets/css/effects.css','https://gaysugardaddyfinder.com/assets/css/magic.css','https://gaysugardaddyfinder.com/assets/css/stream.css','https://terrawire.com/assets/css/jquery-confirm.css'].forEach(function(src) {
		cb(src)
	});	
	
	function cb(src) {
		var l = document.createElement('link'); l.rel = 'stylesheet';
		l.href = src;
		var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	};

	//Generate page HTML
	// t1.id='title1'
	// t2.id='title2'
	// wo.id='whos_online'
	// t1.style.cssText='background:gold;margin-top:10px;position:absolute;top:0;right:0;width:250px;color:#333;font-size:10px;font-weight:300;font-family:Open Sans;padding:5px'
	// t2.style.cssText='display:none;height:30px;width:100%;position:absolute;top:30px;left:0;background:cyan;font-family:Open Sans;padding-top:5px;text-align:center'
	// wo.style.cssText='overflow:hidden;margin-top:40px;position:absolute;top:0;right:0;width:250px;display:none'
	// t1.className='www_box2'
	// document.documentElement.appendChild(t1)
	// document.documentElement.appendChild(t2)
	// document.documentElement.appendChild(wo)
	// t1.innerHTML='<table style="cursor:hand;cursor:pointer;width:100%" onclick="toggle_users()"><tr><td style="width:50%"><span style="color:#fff;padding:3px;border-radius:2px;background:red;font-size:12px!Important" class="www_box5">'+login.toUpperCase()+'</span></td><td><span style="padding:1px;border-radius:2px;background:#fff;font-size:12px!Important" id="swo" class="www_box5">SHOW WHOS ON</span></td><td><img src="https://terrawire.com/images/chevron-right.png" style="height:10px;;font-size:12px!Important" id="iswo"></td></tr></table>'
	// $$('whos_online').style.cssTextr='font-size:12px!Important'
	//Show-Hide whos online
	function toggle_users() {
		// $$('swo').style.cssText='font-size:12px!Important!'
		// if ($$('swo').textContent=='SHOW WHOS ON') { 
			// $$('swo').innerHTML='<span style="font-size:12px!Important">HIDE WHOS ON</span>'
			// $$('iswo').src='https://terrawire.com/images/chevron-down.png'
			// $('#whos_online').show()
		// } else {
			// $$('swo').innerHTML='<span style="font-size:12px!Important">SHOW WHOS ON</span>'
			// $$('iswo').src='https://terrawire.com/images/chevron-right.png'
			// $('#whos_online').hide()
		// }
	}

	function msg() {
				mObj = [{	'msg'			: msg,
							'toUser'		: toUser, 
							'fromImg'		: fromImg,
							'fromUser'		: fromUser,
							'fromLongCode'	: fromLongCode}];			
	}
	
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function toggleUO() {
		if (document.getElementById('sc').style.display=='none') {
			document.getElementById('sc').style.display='block'
		} else {
			document.getElementById('sc').style.display='none'
		}
	}
	
	function whos() {
		socket.send(JSON.stringify({'type':'Q', 'data': 1}))
	}
	
	function user_on(login) {
		clearTimeout(ttx)
		if (getCookie('logged').indexOf(login)>=0) return false
		setCookie('logged',getCookie('logged') + '|' + login)
//		ntfy(login+ ' just signed in!')
	}
	
	function user_off(login) {
		ttx=setTimeout(function(){
//			ntfy(login+ ' just left')
		},1000)
	}	

	function addUser(userLogin,userMobile) {
		if (logins.indexOf(userLogin)<0) {
			logins.push(userLogin)
			mobiles.push(userMobile)
			userData=[]
		}
		for (var i=0; i < logins.length; i++) {
			userData[i] = ({'user': logins[i], 'mobile' : mobiles[i] })
		}
		$('#whos_online').html(buildOnlineList(userData))
	}
	
	function removeUser(userLogin,userMobile) {
	//	console.clear()
		console.log('BEFORE')
		console.log(logins)
		console.log(users)
		console.log(userData)
		logins.splice(logins.indexOf(userLogin),1)
		mobiles.splice(logins.indexOf(userLogin),1)
		userData=[]
		for (var i=0; i < logins.length; i++) {
			userData[i] = ({'user': logins[i], 'mobile' : mobiles[i] })
		}
		$('#whos_online').html(buildOnlineList(userData))
		console.log('AFTER')
		console.log(logins)
		console.log(users)
		console.log(userData)
	}
	var fromUser
	function xconnect(a,b,c) {
		if (!a) var a = login
		if (!b) var b = mobile
		if (!c) var c = getCookie('img')
		var h = 'wss://terrawire.com:7002/?login='+a+'&mobile='+b+'&source='+window.location.host+'&fromImg='+getCookie('img')
		console.log(h)
		socket = new WebSocket(h);
		socket.onerror = function(msg) {
			//location.reload()
		};
		socket.onopen = function(msg) {
			socket.send(JSON.stringify({'type':'Q'}))
		};
		socket.onmessage = function(ms) {
			msg=JSON.parse(ms.data)
			console.log(msg)
			data=msg.data
			type=msg.type
			console.log(type)
			if (type=='NEW_VIDEO') {
						notify_user(data)
						fromUser=data.fromUser
						$.confirm({
							theme: 'modern',
							title:'Imcoming Video callw',
							content: 'NEW VIDEO IM REQUEST FROM '+ data.fromUser.toUpperCase(),
							buttons: {
								Accept: {
									text: 'Accept',
									btnClass: 'btn-blue',
									action: function(){
										location.href='https://gaysugardaddyfinder.com:9001/demos/?login='+fromUser
									}
								},
								Reject: {
									text: 'Reject',
									btnClass: 'btn-red'
								}
							}
						});

						return				
			} else if (type=='NEW_PHOTO') {
						notify_user(data)
						fromUser=data.fromUser
						$.confirm({
							theme: 'modern',
							title:'Imcoming Photo',
							content: 'NEW PHOTO FROM '+ data.fromUser.toUpperCase(),
							buttons: {
								Accept: {
									text: 'Accept',
									btnClass: 'btn-blue',
									action: function(){
										location.href=data.link
									}
								},
								Reject: {
									text: 'Reject',
									btnClass: 'btn-red'
								}
							}
						});

						return				
			} else if (type=='NEW_MAIL') {
				notify_user(data.msg)
				return				
			} else if (type=='C') {
				if (login !== data.user) {
					user_on(data.user)
					addUser(data.user, data.mobile)
					if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
				}
			} else if (type=="D") {
				user_off(data.user)
				removeUser(data.user, data.mobile)
				users.splice(users.indexOf(data.user),1)
				if (document.getElementById('whos_online')) $('#whos_online').html(buildOnlineList(users))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			} else if (type=="W") {
				user_login(msg.data)
			} else if (type=="Q") {
				users=data
				console.log(data)
				if (document.getElementById('whos_online')) $('#whos_online').html('')
				if (document.getElementById('whos_online')) $('#whos_online').html(buildOnlineList(data))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').innerHTML=users.length
			} else if (type=="O") {
				users=data
				$('#whos_online').html('')
				bd=buildOnlineList(data)
				if (document.getElementById('whos_online')) $('#whos_online').html()
				if ($$('w_o')) $$('w_o').innerHTML(bd)
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			} else if ((type=='M')) {
				ntfy('New Message from ' + data.fromUser,0)
				data=(data[0]===undefined)?data:data[0];
				var fromLongCode=data.fromLongCode
				to_user=data.fromUser
				setCookie('chatting_with_login',to_user)
				var fromImg=data.fromImg
				UserID=to_user
				var txtMsg=data.msg
				if (msg.data.msg !==undefined) {
					if (msg.data.msg.type=='V'){

					}
				}
				if (openWin) {
					if (openWin.indexOf(to_user+'') < 0) {
						initMsg(to_user)
					}
				} else {
					if (document.getElementById('msgOuterBox'+to_user)) {
						document.getElementById('msgOuterBox'+to_user).style.display='block'
						showWin[to_user] = 'block'
					}	
				}

				if (txtMsg === undefined) return false
				txt_msg = document.createElement('div')
				txt_msg.innerHTML="<div style='padding:5px;border:1px solid silver;text-align:right;border-radius:10px 0px 10px 10px;background:aliceblue;padding:5px;margin:5px;font-size:15px;'>"+txtMsg+"</div>"
				//Received a Text Message
				setCookie('chatting_with',to_user)
				// var my_pic = "<img style=\"margin-right:0px;width:30px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+fromImg+"\">"
				// var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:100%;font-family:Ubuntu Condensed;font-size:16px;background:none;color:#000;text-align:left'><table align=right border=0 style='width:100%;background:none' cellspacing=0 cellpadding=0><tr>"
				// var pre_msg = "<td align=right style='background:none;text-align:right;padding-left:10px;word-wrap:break-word'>"
				// var end_msg = "</td><td align=left style='width:40px;max-width:40px;padding:0;margin:0'><img style=\"margin-right:0px;width:30px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+fromImg+"\"></td></tr></table></div>"
				// var ele = document.createElement("div")
				// ele.style.paddingLeft='100px'
				mb = document.getElementById('msgBody' + UserID)
				// ele.innerHTML = ini_msg + pre_msg + txt_msg.innerHTML + end_msg
	
				var my_pic = "<img  onerror='this.src=\"http://gaysugardaddyfinder.com/assets/no_data.png\"'  style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\"sb/"+getCookie('img')+"\">"
				var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;font-family:Open Sans Condensed;font-size:16px;background:none;color:#000;text-align:right;width:100%'><table align=right style=\"width:100%;text-align:right\" cellspacing=0 cellpadding=0><tr>"						
				var pre_msg = "</td><td align=right style='background:none;text-align:right;padding-left:10px;word-wrap:break-word'><table align=right><tr><td><div style='padding:5px;border:1px solid silver;text-align:right;border-radius:10px 0px 10px 10px;background:aliceblue;padding:5px;margin:5px;font-size:15px;'>"
				var end_msg = "</div></td></tr></table></td><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"+my_pic+"</tr></table></div>"
				var ele = document.createElement("div")
				
				ele.innerHTML = ini_msg + pre_msg + txt_msg.textContent + end_msg
				document.getElementById('txt'+to_user).textContent=''
				document.getElementById('txt'+to_user).style.fontSize='16px'
				mb.style.width='100%'
				mb.style.maxHeight='300px'
		
				mb.appendChild(ele)
				mb.scrollTop = mb.scrollHeight;
			}
			repaint()				
		}
	}	
	// $$('notifyUser').innerHTML=''
	// $$('notifyUser').style.display='none'	

	function notify_user(msg) {
		setTimeout('getMail()',1)
		$$('notifyUser').style.display='block'
		$$('notifyUser').innerHTML=msg
		setTimeout(function(){
			$$('notifyUser').innerHTML=''
			$$('notifyUser').style.display='none'
		},10000)
	}

	function getMail() {
	console.log('https://gaysugardaddyfinder.com/x_view_message.php?xid='+qs('xid'))
		var request = $.ajax({
			url: 'https://gaysugardaddyfinder.com/x_view_message.php?xid='+qs('xid'),
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				if ($$('inbox')) {
					$$('inbox').innerHTML=msg
					$('html, body').animate({scrollTop:$(document).height()}, 'slow');
					setTimeout('getMail()',1000)

				}
			}
		})
	}
	
	var bg='lavenderblush'
	function buildOnlineList(urs) {
		users=urs
		var ul=document.createElement('div')
		for (var k=0;k<urs.length;k++) {
			var li=document.createElement('div')
			// alert(urs[k].user)
			if (logins) {
				if (logins.indexOf(urs[k].user)<0) {
					logins.push(urs[k].user)
					mobiles.push(urs[k].mobile)
				}
			} else {
				logins.push(urs[k].user)
				mobiles.push(urs[k].mobile)
			}
			userData[k] = ({'user': logins[k], 'mobile' : mobiles[k] })
			li.id=urs[k].user
			li.style='vertical-align:middle;cursor:hand;cursor:pointer;height:30px;padding-left:5px;margin:0;background:transparent;font-size:12px!Important;font-family:Open Sans;background:'+bg
			var ss='<table><tr><td><span style="font-size:0.8em!Important;font-family:Open Sans!Important;color:#000!Important"><img src="https://terrawire.com/images/a43.png" style="border-radius:25px;width:25px;margin-top:2px" onclick="javascript:initMsg(\''+users+'\',\''+users[k].mobile+'\')"></span></td>'
			ss=ss+'<td style="min-width:100px;max-width:100px"><span style="margin-left:5px;margin:10px;margin-top:2px;font-size:14px!Important;font-family:Open Sans!Important;color:#000!Important" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')">'+users[k].user.substring(0,10).toUpperCase()+'</span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:cyan" class="www_box2">IM</span></span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initVideo(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:#333;color:#fff" class="www_box2">VIDEO</span></span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:red;color:#fff" class="www_box2">SMS</span></span></td></tr></table>'
			li.innerHTML=ss
			ul.append(li)
			bg=(bg=='lavenderblush')?'lightcyan':'#f0f0f0'
		}
		return ul
	}

	var jMsg
	function msg_send_sms(to_user) {
		initMsg(from_user)
		var request = $.ajax({
			url: 'https://smsgone.com:7799/sms/'+to_user+'/'+from_user, 
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				
			}
			
		})
	}

	function voice(to,from,txt) {
		if (!cnf) var cnf='SMS Sent'
		var url = 'https://gaysugardaddyfinder.com/voice/call.php?to=' + to + '&from=' + from + '&message=' +  txt + '&message_type=INDEX_NOTIFY_CODE'
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
			}
		})
	}	

	function sms(mobile,to_mobile) {
		var url = 'https://gaysugardaddyfinder.com/gateway/sms.php?to=' + to_mobile + '&from=19256669444&msg='+getCookie('login')+' has invited you to a Video Chat. Click below to join the call\r\n\1\r\n\1https://gaysugardaddyfinder.com:9001/demos\?login='+getCookie('login')
		console.log(url)
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				
			}
		})
	}	

	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
			setTimeout('ww()',100);
			function ww() {
				setCookie('w_w',window_width())
			}
			var rc,posWin,actWin=0
	
	function setUser(to_user) {
		setCookie('chatting_with_login', to_user)
	}
	function initSMS(toLogin) {
		setCookie('chatting_with_login', toLogin)
		$('#sms_holder').show()
		$('#jModal').show()
		
	}
	function cancel_demo_sms(toLogin) {
		$('#sms_holder').hide()
		$('#jModal').hide()
		$('#j_modal_text').val('')
		
	}
	function initVideo(toLogin, toMobile) {
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		video_call(toLogin)
	}
	function initPhoto(toLogin, toMobile) {
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		photo_call(toLogin)
	}
	var mmx, mmy, mmt, mmh
	function initMsg(toLogin, toMobile) {
			var tw='100%'
			var th=30
			var mw='100%'
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		to_user=toLogin
		UserID=to_user
		to_login=toLogin
		var w_h=screen_dimensions()[1] - 180
		var w_w=screen_dimensions()[0] - 10
		if ((openWin) && (openWin.indexOf('' + UserID) < 0)) {
			if (toLogin) showWin[UserID] = 'block'
			x_login=my_login
			jChatWn = document.createElement('div')
			var noOpen = 'msgBody' + UserID + ''
			openWin[ctr] = '' + UserID
			jChatWn.id = 'msgOuterBox' + UserID
			html.appendChild(jChatWn)
			if (getCookie('isMobile')=='mobile') {
				jChatWn.className = "www_box2 msgOuterCont"
				jChatWn.style.maxWidth='100%'
				jChatWn.style.width='100%!Important'
				jChatWn.style.minHeight='100%'
				jChatWn.style.height='100%'
				jChatWn.style.margin='20px!Important'
				mmx='100%'
				mmy='100%'
				mmt='100%'
				mmh='70px'
			} else {
				jChatWn.className = "www_box2 msgOuterCont"
				jChatWn.style.maxWidth='300px'
				jChatWn.style.width='300px!Important'
				jChatWn.style.maxHeight='500px'
				jChatWn.style.minHeight=w_h+'px'
				jChatWn.style.margin='20px!Important'
				mmx='300px'
				mmy='500px'
				mmt='100%'
				mmh='70px'				
			}
			posWin=0
			if (rc == '1')	{
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;margin:-10px;margin-bottom:5px;right:' + posWin
				rc=0;
			} else {
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;margin:-10px;margin-bottom:5px;right:' + posWin
				rc=1;
			}
			jChatWn.innerHTML = 	'<div id="msgContainer" style="overflow:hidden;width:'+mmx+';max-width:'+mmx+';height:100%!Important;border-radius:2px" onclick="setUser(\'' + to_user + '\');">' +
										'<div class="msgHeader" style="width:100%;max-width:100%;height:35px;padding-bottom:10px">' +
											'<div class="row">' +
												'<div class="col-xs-16" style="font-family:Open Sans Condensed;overflow:hidden">' +
														'<table border=0 style="width:100%;background:url(https://gaysugardaddyfinder.com/images/xxx_black.jpg);height:50px;background-size:cover">'+
															'<tr>'+
																'<td></td><td><a href="javascript:video_call(\''+to_user+'\')"><img src="https://gaysugardaddyfinder.com/assets/images/vcx.png" style="width:25px;margin-left:25px"></a></td>' +
																'<td style="color:#fff; text-transform: uppercase;">' + to_user + '</td>'+
																'<td><img src="https://gaysugardaddyfinder.com/images/exit.png" onclick="close_chat(\''+to_user+'\')" style="width:20px;height:20px;padding-right:0;margin=left:10px"></td>'+
																'</tr>'+
														'</table>'+
												'</div>' +
											'</div>' +
										'</div>' +
										'<div id="msgBody' + to_user + '" class="msgBody" style="margin-top:10px;width:100%;height:100%!Important;overflow:hidden;max-height:100%!Important;color:'+oColor+'"></div>' +
										'<div id=\'dz1\' name=\'dz1\' class=\'dropzone dropzone-previews needsclick dz-clickable\' style=\'display:none;border:none;position:absolute;bottom:0\'></div>'+
										
										'<div id="im_footer' + to_user + '" style="max-width:'+mmx+';width:100%;position:absolute;bottom:0">' +
										'<div onmouseover="this.style.cursor=\'crosshair\'" style="z-index:9999999999999999999999999999999999999;margin:0;width:'+mmt+';position:absolute;bottom:0;border:1px solid silver;padding-top:10px;height:60px;padding-left:60px;padding-right:60px;background:#fff;text-shadow:1px 1px 1px #fff;" id="txt' + to_user + '" contentEditable="true"></div>' +	
										'<div id="btnSend" onclick="send_msg(\''+to_user+'\')" style="text-align:center;margin-left:5px;border-radius:4px;margin-top:5px;background:#75DFAF;color:#fff;height:50px!Important;width:50px!Important;position:fixed;right:5px;padding-top:10px;bottom:10px;z-index:9999999999999999"><i style="font-size:2.4em" class="fa fa-paper-plane"></i></div>'+
										'<div id="pclip'+to_user+'" onclick="javascript:show_attach()" style="text-align:center;margin-left:5px;border-radius:4px;margin-top:0px;background:silver;color:#fff;height:50px!Important;width:50px!Important;position:fixed;left:0px;padding-top:10px;bottom:10px;z-index:9999999999999999"><i style="font-size:2.4em" class="fa fa-paperclip"></i></div>'+
										'</div>' +
									'</div>'									
			document.getElementById('txt'+to_user).style.width = '100%'
			document.getElementById('txt'+to_user).style.fontFamily='Open Sans Condensed'
			document.getElementById('txt'+to_user).style.fontSize='16px'
			document.getElementById('txt'+to_user).className='www_box2'
			
			document.getElementById(noOpen).innerHTML = ' '
			document.getElementById(noOpen).style.zIndex = '10000'
			jChatWn.style.display="block"
			ctr++
			actWin++
		} else  {
			if (document.getElementById('msgOuterBox'+to_user)) {
				if (document.getElementById('msgOuterBox'+to_user).style.display=='none') {
					document.getElementById('msgOuterBox'+to_user).style.display='block'
					actWin++
				}
			}		
		}
		repaint()
	}
	function send_msg(to_user,msg) {
		if (!msg) var msg=document.getElementById('txt'+to_user).textContent
		setCookie("chatting_with_login", to_user)
		objData = {	msg					: 	msg,
					toUser				: 	to_user,
					fromImg				: 	"sb/" + getCookie('img'),
					fromUser			: 	my_login,
					fromLongCode		: 	getCookie('long_code')
		}
		jMsg=JSON.stringify({'type':'M','data': objData})
		if (socket.readyState==1) {
			try {
				socket.send(jMsg)
			} catch (e){
				if (iErr < 10) {
					setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		} else {
			if (iErr < 10) {
				setTimeout('restart_chat()',500)
				iErr++;
			} else {
				alert('I tried 10 times and I give up. Ok to refresh the page?')
			}
		}
		var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
		var my_pic = "<img  onerror='this.src=\"http://gaysugardaddyfinder.com/assets/no_data.png\"'  style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\"sb/"+getCookie('img')+"\">"
		var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;font-family:Open Sans Condensed;font-size:16px;background:none;color:#000;text-align:left;width:100%'><table cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"						
		var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'><div style='padding:5px;border:1px solid silver;text-align:left;border-radius:0px 10px 10px 10px;background:lavenderblush;padding:5px;margin:5px;font-size:15px;'>"
		var end_msg = "</div></td></tr></table></div>"
		var ele = document.createElement("div")

		ele.innerHTML = ini_msg + my_pic + pre_msg + document.getElementById('txt'+to_user).textContent + end_msg
		document.getElementById('txt'+to_user).textContent=''
		document.getElementById('txt'+to_user).style.fontSize='16px'
		mb.appendChild(ele)
		mb.style.width='100%'
		mb.style.maxHeight='300px'
		if (getCookie("accepted_users")) {
			var acs=getCookie("accepted_users")
			acs=acs+"|"+(to_user)
			setCookie("accepted_users", acs)
		} else {
			setCookie("accepted_users", to_user)
		}
	}

		function scan() {
			alert('hello');
		}

		function close_chat(obj) {
		document.getElementById('msgOuterBox'+obj).style.display='none'
		posWin=posWin - 240
		var index=openWin.indexOf(obj)
		openWin.splice(index,1)
		showWin[obj]
		ctr--
		actWin--				
		
		repaint()
	}

	function repaint() {
		
		if (openWin) {
		posWin=10
		for (var n=0;n<openWin.length;n++) {
			if (showWin[openWin[n]] == 'block') {
				if (document.getElementById('msgOuterBox'+openWin[n])) document.getElementById('msgOuterBox'+openWin[n]).style.right = posWin+'px'
				posWin=posWin + 240
			}
		}
		}
	}

	function deduct() {
		document.getElementById('cr').textContent = 160 - document.getElementById('message_text').textContent.length*1
		if ((160 - document.getElementById('message_text').textContent.length*1)<1) {
			document.getElementById('message_text').contentEditable='false'
			document.getElementById('message_text').textContent=mc
		} else {
			mc=document.getElementById('message_text').textContent
		}
	}

	function generateRandomString(j){
		if (!j) j=16
		var op=''
		var arr=new Array('a','b','c','d','e','f','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,0,0,1,2,3,4,5,6,7,8,9,0)
		for (k=0;k<j;k++) {
			var inx=randomIntFromInterval(0,arr.length-1)
			op += arr[inx]
		}
		return op;
	}

	function guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + '-' + s4();
	}
			
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function video_call(to_login) {
		setCookie('to', getCookie('chatting_with_login'))
		sms(getCookie('chatting_with_login'),getCookie('login'))
		setCookie("accepted_users", to_user)
		setCookie('user_input_h', to_user + '|' + 'mobile' + '|' + '15')

		var vmsg={		'type':	'V',
						'cont':	'<table><tr rowspan=2><td><img src="https://gaysugardaddyfinder.com/phone_calling.gif"></td></tr><tr><td colspan=2>Incoming video Call from ' + getCookie('login') + '</td></tr><tr><td><a href="https://gaysugardaddyfinder.com:9001/video/video.html?to='+getCookie('login')+'&from='+getCookie('chatting_with')+'" class="btn btn primary">Accept</a></td><td><input class="btn btn red" value="Decline"></td></tr></table>'
				}
		to_user=getCookie("chatting_with_login")
		objData={		'toUser'		: 	getCookie('chatting_with_login'),
						'fromUser' 		: 	getCookie('login'),
						'fromImg' 		: 	getCookie('img'),
						'msg' 			: 	vmsg,
						'fromLongCode'	:	getCookie('long_code')
				}
		jMsg=JSON.stringify({'type':'M','data': objData})
		console.log(jMsg)
		if (socket.readyState==1) {
			try {
					socket.send(jMsg)
				}
			catch (e){
				if (iErr < 10) {
					setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		} else {
			if (socket.readyState==0) {
				if (iErr < 10) {
					setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		}	
		//Now, we generate a link to send to the user we want to invite - so that they can click this link and join the video call directly, without having to deal with any confirmations etc.
		//We can bypass confirmations by setting the value of 'active' cookie to equal the login name of the member who they are inviting to the video call
		windowObjectReference = window.open("https://gaysugardaddyfinder.com:9001/?login="+getCookie('login')+"&action=1", "video chat", strWindowFeatures);
	}			
			var myDropzone
			Dropzone.autoDiscover=false
			
	function photo_call(to_login,link) {
		//photo_invite_sms(to_login,getCookie('login'))
		objData={
					data				: 	'<span id="toaster"><img style="height:25px;position:fixed;left:5px;padding-bottom:5px" src="https://gaysugardaddyfinder.com/assets/images/new_video_msg.png"><span style="margin-left:40px;font-family:Open Sans; font-weight:300">NEW VIDEO CALL FROM '+ to_login + '</span><a href="inbox#'+getCookie('mid')+'"><img onclick="START VIEDEO IM" style="cursor:hand;cursor:pointer;height:27px;position:fixed;right:35px;padding-bottom:5px" src="https://gaysugardaddyfinder.com/assets/images/open_email.png"></a><img onclick="closeToaster()" src="https://gaysugardaddyfinder.com/assets/images/close_email.png" style="cursor:hand;cursor:pointer;height:27px;position:fixed;right:5px;padding-bottom:5px"><span>',
					toUser				: 	to_login,
					link				: 	link,
					type				: 	'NEW_PHOTO',
					fromUser			: 	getCookie('login'),
					fromLongCode		: 	getCookie('long_code')
		}
		socket.send(JSON.stringify({type:'NEW_PHOTO', data: objData}))
	}
	
	var jc,itype,file_name,poses=[],filenames=[],fn
	Dropzone.autoDiscover = false;
	var myDropzone	
	var to_member_id=qs('to_member_id')
	var attach_id
	var msg=''
	
	function attach_to_new_message(elemID,store_folder) {
		attach_id=attID()
		setCookie('attach_id', attach_id)
		setCookie('chatting_with',to_member_id)
		if (myDropzone) {
			myDropzone.destroy()
		}
		var someParameter=[]
		myDropzone = new Dropzone("div#"+elemID, { maxFiles:5,url: "new_mail_upload.php", dictDefaultMessage:'Click here to upload Email Attachment'});
		myDropzone.on('sending', function(file, xhr, formData){
			var ext=file.name.split('.')[1]
			file_name=guid() + '.' + ext
			formData.append('attach_id', attach_id);
			formData.append('file_name', file_name);
			formData.append('mid', getCookie('mid'));
			formData.append('to_member_id', to_member_id);
			formData.append('store_folder', store_folder);
			filenames.push(file_name)
			setCookie('filenames', JSON.stringify(filenames))
			msg += '<img src=\'https://gaysugardaddyfinder.com/w/' + file_name + '\' style=\'width:100px;border:10px solid white;border-bottom:30px solid white\' class=\'col-xs-4 col-md-2 col-lg-1 www_box2 www_box5\'>'
			files++
		});
		myDropzone.on('complete', function(file){
			var im=document.createElement("img")
			im.src='https://gaysugardaddyfinder.com/w/'+file_name
			im.className='col-xs-4'
			im.style.width='100%'
			im.style.display='block'
			im.style.border='5px solid white'
			$$(elemID).appendChild(im)
			files--
			if (files==0) {
				attach_id=''
				setCookie('attach_id','')
				send_message(to_member_id,msg)
			}
		})
	}
	function send_message(to_member_id,msg) {
		if ($$('mail_pad').value.trim()=='' && !uploads) return false
		var message=document.getElementById('mail_pad').value
		message=message.replace(/\&/g,'\&amp;')
		message=message.replace(/'/g,"\'")
		message=message.replace(/"/g,'\"')
		message=message.replace(/\//g,'\/')

		var from_u=getCookie('mid')
		var url = encodeURI('https://gaysugardaddyfinder.com/x_send_mail.php?to=' + to_member_id + '&from=' + from_u + '&message=\'<div class="container"><div class="row"><div class="col-md-4">' + message + '</div><div class="col-md-4">' + msg + '</div></div></div>\'')
		console.log(url)
		jwait('sending')
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(data) {
				$$('dz').style.display='none'
				$$('mail_pad').value=''
				$$('attachments').style.display='none'
				socket.send(JSON.stringify({'type':'NEW_MAIL', 'data': {'fromUser':getCookie('login'),'toUser':getCookie('chatting_with_login'),'msg':'<span id="toaster"><img style="height:25px;position:fixed;left:5px;padding-bottom:5px" src="assets/images/new_mail_msg.png"><span style="margin-left:40px;font-family:Open Sans; font-weight:300">NEW MAIL FROM '+ getCookie('login').toUpperCase() + '</span><img onclick="viewMessageDetail('+getCookie('mid')+',\'' + getCookie('login') + '\')" style="cursor:hand;cursor:pointer;height:27px;position:fixed;right:35px;padding-bottom:5px" src="assets/images/open_email.png"><img onclick="closeToaster()" src="assets/images/close_email.png" style="cursor:hand;cursor:pointer;height:27px;position:fixed;right:5px;padding-bottom:5px"><span>'}}))
				location.href='viewMessage?xid='+to_member_id
			}
			
		})
	}

	function guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	function attID() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + s4() + '-' + s4() + s4() + s4();
	}


	function show_attach(elemID) {
		if (!elemID) var elemID='dz1'
		$('#'+elemID).show()
		setCookie('attach_id',guid())
		var url="upload.php"
		if (!myDropzone) {
			myDropzone = new Dropzone("div#"+elemID, { 
				url: url,
				maxFilesize: 5000
			});
		}
		myDropzone.on("addedfile", function(file) {
			//$('.dz-details').hide()
			files++
			if (file.type.indexOf('png')>=0) ext='png'
			if (file.type.indexOf('jpg')>=0) ext='jpg'
			if (file.type.indexOf('gif')>=0) ext='gif'
			if (file.type.indexOf('tif')>=0) ext='tif'
			if (file.type.indexOf('bmp')>=0) ext='bmp'
			if (file.type.indexOf('psd')>=0) ext='psd'
			if (file.type.indexOf('eps')>=0) ext='eps' 
			if (file.type.indexOf('jpeg')>=0) ext='jpg'
			if((file.type=='video/x-ms-wmv')||(file.type=='video/avi')) {
				alert('Only .mpg .mpeg and .mp4 files allowed for now')
				return false
			} else {
				files++
			}
		});
		myDropzone.on("totaluploadprogress", function(progress) {
			
		})
		
		myDropzone.on("complete", function(file) {
		var smem=document.getElementById(elemID).textContent
		smem.className='www_box www_box5'
		document.getElementById(elemID).textContent=''
		$('#'+elemID).hide()
		var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
		setCookie('chatting_with_login',to_user)
		var my_pic = "<img onerror='this.src=\"http://gaysugardaddyfinder.com/assets/no_data.png\"' style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+getCookie('img')+"\">"
		var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:100%;font-family:Economica;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"
		var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
		var end_msg = "</td></tr></table></div>"
		var ele = document.createElement("div")
		var ms='You have a new photo message!'
		setCookie('sms_message',ms)
		photo_call(getCookie('chatting_with_login'), 'https://gaysugardaddyfinder.com/w/index.php?id='+getCookie('attach_id'))

			if (file.name!=fn) {
				ext=file.name.split('.')[1]
				if((ext=='mp4')||(ext=='wmv')) {
					var link = '<video src=\'https://gaysugardaddyfinder.com/w/' + getCookie('attach_id') + '.mp4' + '\' style=\'width:100px;\' autoplay loop></video>'
				} else {
					var link = '<img  src=\'https://gaysugardaddyfinder.com/w/' + getCookie('attach_id') + '.' + ext + '\' style=\'width:100px;border:10px solid white;border-bottom:30px solid white\' class=\'www_box2 www_box5\'>'
				}
				var db=document.createElement('div')
				db.innerHTML = ini_msg + my_pic + pre_msg + link + end_msg
				mb.appendChild(db)
				db=''
				mb.style.width='225px'
				setCookie("accepted_users", to_user)
				fn=file.name
				setCookie('user_input_h', to_user + '|' + 'mobile' + '|' + '15')
			}	
		});
		$("div#"+elemID).click()
	}

	
			$(document).keypress(function(e) {
				if ((e.target) && (e.target.textContent !='')) {
						if ( e.keyCode == 13 ) {
							e.preventDefault()
							to_user=getCookie("chatting_with_login")
							objData = {	msg					: 	e.target.textContent,
										toUser				: 	getCookie("chatting_with_login"),
										fromImg				: 	getCookie('img'),
										fromUser			: 	my_login,
										fromLongCode		: 	getCookie('long_code')
							}
							jMsg=JSON.stringify({'type':'M','data': objData})
							if (socket.readyState==1) {
								try {
									socket.send(jMsg)
								} catch (e){
									if (iErr < 10) {
										setTimeout('restart_chat()',500)
										iErr++;
									} else {
										alert('I tried 10 times and I give up. Ok to refresh the page?')
									}
								}
							} else {
								if (iErr < 10) {
									setTimeout('restart_chat()',500)
									iErr++;
								} else {
									alert('I tried 10 times and I give up. Ok to refresh the page?')
								}
							}
							var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
							var my_pic = "<img  onerror='this.src=\"http://gaysugardaddyfinder.com/assets/no_data.png\"'  style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\"sb/"+getCookie('img')+"\">"
							var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:'+mmx+';font-family:Open Sans Condensed;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"						
							var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
							var end_msg = "</td></tr></table></div>"
							var ele = document.createElement("div")

							mb.innerHTML += ini_msg + my_pic + pre_msg + document.getElementById('txt'+to_user).textContent + end_msg
							document.getElementById('txt'+to_user).textContent=''
							document.getElementById('txt'+to_user).target.style.fontSize='16px'
							mb.style.width='225px'
							mb.style.maxHeight='300px'
							if (getCookie("accepted_users")) {
								var acs=getCookie("accepted_users")
								acs=acs+"|"+(to_user)
								setCookie("accepted_users", acs)
							} else {
								setCookie("accepted_users", to_user)
							}
						}
					}
				});

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var vb=''

	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	function generateRandomString(j){
		if (!j) j=16
		var op=''
		var arr=new Array('a','b','c','d','e','f','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,0,0,1,2,3,4,5,6,7,8,9,0)
		for (k=0;k<j;k++) {
			var inx=randomIntFromInterval(0,arr.length-1)
			op += arr[inx]
		}
		return op;
	}
	var wl = window.location.href;
	var mob = (window.location.href.indexOf('file://')>=0);

	function setCookie(cname,cvalue)	{
		if (mob===true) {
			window.localStorage.setItem(cname, cvalue);
		} else {
			var d = new Date(); 
			d.setTime(d.getTime()+(1*24*60*60*1000)); 
			var expires = "expires="+d.toGMTString(); 
			document.cookie = cname + "=" + cvalue + "; " + expires; 
		}
	} 

	function getCookie(cname)	{ 
		if (mob===true) {
			var cvalue = window.localStorage.getItem(cname);
			return cvalue
		} else {
			var name = cname + "="; 
			var ca = document.cookie.split(';'); 
			for(var i=0; i<ca.length; i++) { 
			  var c = ca[i].trim(); 
			  if (c.indexOf(name)==0) return c.substring(name.length,c.length); 
			} 
			return ""; 
		}
	} 

	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}

	function sms_to_login(to,from,txt) {
		if (!type_sms) type_sms=''
		var cnf='SMS Sent'
		var url = 'http://gaysugardaddyfinder.com/gateway/sms.php?to=' + to + '&from=' + from + '&message=' +  txt + '&type_sms='+type_sms
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				ntfy(cnf)
			}
		})
	}	
	
	function screen_dimensions() {
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		return new Array(w, h)
	}
	
	var winH, winW

	function window_height() {
		if (document.body) {
		 winH = document.body.offsetHeight;
		}

		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetHeight ) {
			winH = document.documentElement.offsetHeight;
			return winH
		}

		if (window.innerHeight && window.innerHeight) {
			 winH = window.innerHeight;
			 return winH;
		}
	}		
		
	function window_width() {
		if (document.body) {
		 winW = document.body.offsetWidth;
		}

		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetWidth ) {
			winW = document.documentElement.offsetWidth;
			return winW
		}

		if (window.innerWidth && window.innerWidth) {
			 winW = window.innerWidth;
			 return winW;
		}
	}		
					
	function ntfy(str,title) {
		$('#title2').show()
		$('#title2').html(str)
		$$('title2').className='magictime puffIn'
		setTimeout(function(){
			$$('title2').className='magictime puffOut'
			setTimeout(function(){
				$('#title2').hide()
			},1000)
		},3000)
	}
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function user_login(x) {
		if (qs('login')=='complete') {
				$('body').xmalert({ 
				x: 'right',
				y: 'top',
				xOffset: 30,
				yOffset: 30,
				alertSpacing: 40,
				lifetime: 6000,
				fadeDelay: 0.3,
				template: 'item',
				title: '<b>Login Successful</b>',
				timestamp: x,
				imgSrc: 'favicon.png'
			});
		}
	}
	
	function clearCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime());
		var expires = "expires="+d.toGMTString()-1;
		document.cookie = cname + "=" + "" + "; " + expires;
		var d = new Date();
		d.setDate(d.getDate() - 1);
		var expires = ";expires="+d;
		var name=cname;
		//alert(name);
		var value="";
		document.cookie = name + "=" + value + expires + "; path=/";   			
	}	

	
	function newMailNotify(from_img,from_login) {
		var str='<table><tr><td><img src="'+from_img+'" style="width:40px;border-radius:50px"></td><td><h4 style=";margin-left:5px;font-family:Open Sans; font-weight:300!Important;color:#333;font-size:20px">You have new mail from ' + from_login + '. <a href="inbox">Read?</a></td></tr></table>'
		ntfy(str,'blank')
	}		
	var xType=[]
	var nd=[]
	var nt=[]
	var nh=0
	var i = 0
	var old_str=''
	var imgType=[]
	var xType=[]
	function ntfy(str,type,xCol,xbg) {
		var tp=type
		if (type=="modal") {
			var mld=document.createElement("div")
			mld.id="f_modal"
			mld.style.cssText='position:fixed;width:100%;height:100%left:0;right:0;top:0;bottom:0;background:#000;opacity:0.8;z-index:999999999999999999'
			html.appendChild(mld)
			mld.style.display='block'
		}
		if (!type) type='0'
		if(!xCol) xCol='#fff'
		if(!xbg) xbg='#000'
		if (str != old_str) {
			if (type=='fail') type=5
			if (type=='failure') type=5
			if (type=='error') type=5
			if (type=='done') type=4
			if (type=='success') type=4
			if (type=='succeed') type=4
			if (type=='exit') type=10
			if (type=='info') type=11
			if (type=='modal') type=4
			xType[i]=type
			imgType[i]='https://gaysugardaddyfinder.com/assets/images/'+xType[i]+'.gif'
			imgType[0]='https://gaysugardaddyfinder.com/assets/images/010.png'
			nd[i]=document.createElement("div")
			nt[i]=document.createElement("div")
			if (tp=="modal") {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px RGBA(25,20,100,0.3) inset;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:50px;position:absolute;border-radius:4px;opacity:1"
			} else {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:70px;position:absolute;border-radius:4px;opacity:1"
			}
			nd[i].style.background=xCol
			nd[i].style.top=nh+'px'
			nd[i].style.display='block'
			if (tp=="modal") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="https://gaysugardaddyfinder.com/assets/images/in_yes.png" style="width:50px;height:50px;margin-top:-12px"></td><td><div id="notify_txt1" style="top:7px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:0px;font-family:Open Sans; font-weight:300">'+str+'</div></td></tr></table>'
			} else if (tp=="blank") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><div id="notify_txt1" style="top:3px;position:absolute;font-size:15px;color:'+xbg+';margin:5px;padding-bottom:0px;font-family:Open Sans; font-weight:300;margin-left:-15px">'+str+'</div></td></tr></table>'											
			} else {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="'+imgType[i]+'" style="width:25px;height:25px;margin-top:5px"></td><td><div id="notify_txt1" style="top:5px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:0px;font-family:Open Sans; font-weight:300;margin-bottom:-5px;padding-top:15px">'+str+'</div></td></tr></table>'					
			}
			nd[i].appendChild(nt[i])
			if (tp=="modal") {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',5000)
			} else if (tp=="blank") {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',20000)
			} else {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',5000)
			}
			nh=nh+50 
			i++
		}
		old_str=str
	}
			
	function hide_ntfy(i) {
		nh=0
		nd[i].style.display='none'
		nt[i].innerHTML=''
	}	
				