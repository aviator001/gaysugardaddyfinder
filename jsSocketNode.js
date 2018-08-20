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
	var err_img = "assets/avatars/10.png" 
	var err_img1 = 'assets/images/tie.jpg'
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
	var domain='txt.am'
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
(function(){var a,b,c,d,e,f,g,h,i=[].slice,j={}.hasOwnProperty,k=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=function(){},b=function(){function a(){}return a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b),this},a.prototype.emit=function(){var a,b,c,d,e,f;if(d=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],this._callbacks=this._callbacks||{},c=this._callbacks[d])for(e=0,f=c.length;f>e;e++)b=c[e],b.apply(this,a);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(a,b){var c,d,e,f,g;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(d=this._callbacks[a],!d)return this;if(1===arguments.length)return delete this._callbacks[a],this;for(e=f=0,g=d.length;g>f;e=++f)if(c=d[e],c===b){d.splice(e,1);break}return this},a}(),a=function(a){function c(a,b){var e,f,g;if(this.element=a,this.version=c.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(c.instances.push(this),this.element.dropzone=this,e=null!=(g=c.optionsForElement(this.element))?g:{},this.options=d({},this.defaultOptions,e,null!=b?b:{}),this.options.forceFallback||!c.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?c.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:c.getElements(this.options.clickable,"clickable")),this.init()}var d,e;return k(c,a),c.prototype.Emitter=b,c.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],c.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return g},forceFallback:!1,fallback:function(){var a,b,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(b=a,a.className="dz-message");return b||(b=c.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(b)),d=b.getElementsByTagName("span")[0],d&&(d.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:g,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:g,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var b,d,e,f,g,h,i,j,k,l,m,n,o;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(a.previewElement=c.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)b=l[f],b.textContent=a.name;for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)b=m[g],b.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(b){return function(d){return d.preventDefault(),d.stopPropagation(),a.status===c.UPLOADING?c.confirm(b.options.dictCancelUploadConfirmation,function(){return b.removeFile(a)}):b.options.dictRemoveFileConfirmation?c.confirm(b.options.dictRemoveFileConfirmation,function(){return b.removeFile(a)}):b.removeFile(a)}}(this),n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o}},removedfile:function(a){var b;return a.previewElement&&null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f;if(a.previewElement){for(a.previewElement.classList.remove("dz-file-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,c.src=b;return setTimeout(function(){return function(){return a.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(a,b){var c,d,e,f,g;if(a.previewElement){for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g}},errormultiple:g,processing:function(a){return a.previewElement&&(a.previewElement.classList.add("dz-processing"),a._removeLink)?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:g,uploadprogress:function(a,b){var c,d,e,f,g;if(a.previewElement){for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push("PROGRESS"===c.nodeName?c.value=b:c.style.width=""+b+"%");return g}},totaluploadprogress:g,sending:g,sendingmultiple:g,success:function(a){return a.previewElement?a.previewElement.classList.add("dz-success"):void 0},successmultiple:g,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:g,complete:function(a){return a._removeLink&&(a._removeLink.textContent=this.options.dictRemoveFile),a.previewElement?a.previewElement.classList.add("dz-complete"):void 0},completemultiple:g,maxfilesexceeded:g,maxfilesreached:g,queuecomplete:g,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},d=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?i.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},c.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},c.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},c.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},c.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(c.QUEUED)},c.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(c.UPLOADING)},c.prototype.getActiveFiles=function(){var a,b,d,e,f;for(e=this.files,f=[],b=0,d=e.length;d>b;b++)a=e[b],(a.status===c.UPLOADING||a.status===c.QUEUED)&&f.push(a);return f},c.prototype.init=function(){var a,b,d,e,f,g,h;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(a){return function(){return a.hiddenFileInput&&document.body.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.body.appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var b,c,e,f;if(c=a.hiddenFileInput.files,c.length)for(e=0,f=c.length;f>e;e++)b=c[e],a.addFile(b);return d()})}}(this))(),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("canceled",function(a){return function(b){return a.emit("complete",b)}}(this)),this.on("complete",function(a){return function(){return 0===a.getUploadingFiles().length&&0===a.getQueuedFiles().length?setTimeout(function(){return a.emit("queuecomplete")},0):void 0}}(this)),b=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return function(b){return a.emit("dragstart",b)}}(this),dragenter:function(a){return function(c){return b(c),a.emit("dragenter",c)}}(this),dragover:function(a){return function(c){var d;try{d=c.dataTransfer.effectAllowed}catch(e){}return c.dataTransfer.dropEffect="move"===d||"linkMove"===d?"move":"copy",b(c),a.emit("dragover",c)}}(this),dragleave:function(a){return function(b){return a.emit("dragleave",b)}}(this),drop:function(a){return function(c){return b(c),a.drop(c)}}(this),dragend:function(a){return function(b){return a.emit("dragend",b)}}(this)}}],this.clickableElements.forEach(function(a){return function(b){return a.listeners.push({element:b,events:{click:function(d){return b!==a.element||d.target===a.element||c.elementInside(d.target,a.element.querySelector(".dz-message"))?a.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},c.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,c.instances.splice(c.instances.indexOf(this),1)},c.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},c.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},c.prototype.getFallbackForm=function(){var a,b,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',b=c.createElement(d),"FORM"!==this.element.tagName?(e=c.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(b)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:b)},c.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},c.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},c.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},c.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},c.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},c.prototype.filesize=function(a){var b,c,d,e,f,g,h,i;for(g=["TB","GB","MB","KB","b"],d=e=null,c=h=0,i=g.length;i>h;c=++h)if(f=g[c],b=Math.pow(this.options.filesizeBase,4-c)/10,a>=b){d=a/Math.pow(this.options.filesizeBase,4-c),e=f;break}return d=Math.round(10*d)/10,"<strong>"+d+"</strong> "+e},c.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},c.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},c.prototype.paste=function(a){var b,c;if(null!=(null!=a&&null!=(c=a.clipboardData)?c.items:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},c.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},c.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?this.addFile(c.getAsFile()):b.isDirectory?this._addFilesFromDirectory(b,b.name):void 0:null!=c.getAsFile?null==c.kind||"file"===c.kind?this.addFile(c.getAsFile()):void 0:void 0);return f},c.prototype._addFilesFromDirectory=function(a,b){var c,d;return c=a.createReader(),d=function(a){return function(c){var d,e,f;for(e=0,f=c.length;f>e;e++)d=c[e],d.isFile?d.file(function(c){return a.options.ignoreHiddenFiles&&"."===c.name.substring(0,1)?void 0:(c.fullPath=""+b+"/"+c.name,a.addFile(c))}):d.isDirectory&&a._addFilesFromDirectory(d,""+b+"/"+d.name)}}(this),c.readEntries(d,function(a){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(a):void 0})},c.prototype.accept=function(a,b){return a.size>1024*this.options.maxFilesize*1024?b(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):c.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,b):b(this.options.dictInvalidFileType)},c.prototype.addFile=function(a){return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=c.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return function(c){return c?(a.accepted=!1,b._errorProcessing([a],c)):(a.accepted=!0,b.options.autoQueue&&b.enqueueFile(a)),b._updateMaxFilesReachedClass()}}(this))},c.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},c.prototype.enqueueFile=function(a){if(a.status!==c.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=c.QUEUED,this.options.autoProcessQueue?setTimeout(function(a){return function(){return a.processQueue()}}(this),0):void 0},c.prototype._thumbnailQueue=[],c.prototype._processingThumbnail=!1,c.prototype._enqueueThumbnail=function(a){return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(a){return function(){return a._processThumbnailQueue()}}(this),0)):void 0},c.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(a){return function(){return a._processingThumbnail=!1,a._processThumbnailQueue()}}(this)))},c.prototype.removeFile=function(a){return a.status===c.UPLOADING&&this.cancelUpload(a),this.files=h(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},c.prototype.removeAllFiles=function(a){var b,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)b=f[d],(b.status!==c.UPLOADING||a)&&this.removeFile(b);return null},c.prototype.createThumbnail=function(a,b){var c;return c=new FileReader,c.onload=function(d){return function(){var e;return"image/svg+xml"===a.type?(d.emit("thumbnail",a,c.result),void(null!=b&&b())):(e=document.createElement("img"),e.onload=function(){var c,g,h,i,j,k,l,m;return a.width=e.width,a.height=e.height,h=d.options.resize.call(d,a),null==h.trgWidth&&(h.trgWidth=h.optWidth),null==h.trgHeight&&(h.trgHeight=h.optHeight),c=document.createElement("canvas"),g=c.getContext("2d"),c.width=h.trgWidth,c.height=h.trgHeight,f(g,e,null!=(j=h.srcX)?j:0,null!=(k=h.srcY)?k:0,h.srcWidth,h.srcHeight,null!=(l=h.trgX)?l:0,null!=(m=h.trgY)?m:0,h.trgWidth,h.trgHeight),i=c.toDataURL("image/png"),d.emit("thumbnail",a,i),null!=b?b():void 0},e.onerror=b,e.src=c.result)}}(this),c.readAsDataURL(a)},c.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},c.prototype.processFile=function(a){return this.processFiles([a])},c.prototype.processFiles=function(a){var b,d,e;for(d=0,e=a.length;e>d;d++)b=a[d],b.processing=!0,b.status=c.UPLOADING,this.emit("processing",b);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},c.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},c.prototype.cancelUpload=function(a){var b,d,e,f,g,h,i;if(a.status===c.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)b=d[e],b.status=c.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)b=d[f],this.emit("canceled",b);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===c.ADDED||i===c.QUEUED)&&(a.status=c.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},e=function(){var a,b;return b=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],"function"==typeof b?b.apply(this,a):b},c.prototype.uploadFile=function(a){return this.uploadFiles([a])},c.prototype.uploadFiles=function(a){var b,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L;for(w=new XMLHttpRequest,x=0,B=a.length;B>x;x++)b=a[x],b.xhr=w;p=e(this.options.method,a),u=e(this.options.url,a),w.open(p,u,!0),w.withCredentials=!!this.options.withCredentials,s=null,g=function(c){return function(){var d,e,f;for(f=[],d=0,e=a.length;e>d;d++)b=a[d],f.push(c._errorProcessing(a,s||c.options.dictResponseError.replace("{{statusCode}}",w.status),w));return f}}(this),t=function(c){return function(d){var e,f,g,h,i,j,k,l,m;if(null!=d)for(f=100*d.loaded/d.total,g=0,j=a.length;j>g;g++)b=a[g],b.upload={progress:f,total:d.total,bytesSent:d.loaded};else{for(e=!0,f=100,h=0,k=a.length;k>h;h++)b=a[h],(100!==b.upload.progress||b.upload.bytesSent!==b.upload.total)&&(e=!1),b.upload.progress=f,b.upload.bytesSent=b.upload.total;if(e)return}for(m=[],i=0,l=a.length;l>i;i++)b=a[i],m.push(c.emit("uploadprogress",b,f,b.upload.bytesSent));return m}}(this),w.onload=function(b){return function(d){var e;if(a[0].status!==c.CANCELED&&4===w.readyState){if(s=w.responseText,w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))try{s=JSON.parse(s)}catch(f){d=f,s="Invalid JSON response from server."}return t(),200<=(e=w.status)&&300>e?b._finished(a,s,d):g()}}}(this),w.onerror=function(){return function(){return a[0].status!==c.CANCELED?g():void 0}}(this),r=null!=(G=w.upload)?G:w,r.onprogress=t,j={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&d(j,this.options.headers);for(h in j)i=j[h],w.setRequestHeader(h,i);if(f=new FormData,this.options.params){H=this.options.params;for(o in H)v=H[o],f.append(o,v)}for(y=0,C=a.length;C>y;y++)b=a[y],this.emit("sending",b,w,f);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,w,f),"FORM"===this.element.tagName)for(I=this.element.querySelectorAll("input, textarea, select, button"),z=0,D=I.length;D>z;z++)if(l=I[z],m=l.getAttribute("name"),n=l.getAttribute("type"),"SELECT"===l.tagName&&l.hasAttribute("multiple"))for(J=l.options,A=0,E=J.length;E>A;A++)q=J[A],q.selected&&f.append(m,q.value);else(!n||"checkbox"!==(K=n.toLowerCase())&&"radio"!==K||l.checked)&&f.append(m,l.value);for(k=F=0,L=a.length-1;L>=0?L>=F:F>=L;k=L>=0?++F:--F)f.append(this._getParamName(k),a[k],a[k].name);return w.send(f)},c.prototype._finished=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.SUCCESS,this.emit("success",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c.prototype._errorProcessing=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.ERROR,this.emit("error",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c}(b),a.version="4.0.1",a.options={},a.optionsForElement=function(b){return b.getAttribute("id")?a.options[c(b.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},a.autoDiscover=!0,a.discover=function(){var b,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],b=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],f.push(/(^| )dropzone($| )/.test(b.className)?d.push(b):void 0);return f},b(document.getElementsByTagName("div")),b(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.optionsForElement(c)!==!1?new a(c):void 0);return g},a.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],a.isBrowserSupported=function(){var b,c,d,e,f;if(b=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=a.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(b=!1);else b=!1;else b=!1;return b},h=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},c=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},a.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},a.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},a.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},a.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},a.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},a.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(b){return this.each(function(){return new a(this,b)})}),"undefined"!=typeof module&&null!==module?module.exports=a:window.Dropzone=a,a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success",e=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},f=function(a,b,c,d,f,g,h,i,j,k){var l;return l=e(b),a.drawImage(b,c,d,f,g,h,i,j,k/l)},d=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0
},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,void setTimeout(g,50)}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},a._autoDiscoverFunction=function(){return a.autoDiscover?a.discover():void 0},d(window,a._autoDiscoverFunction)}).call(this);	
	function $$(objID) {
		return document.getElementById(objID)
	}
	//Load all JS libraries
	['https://txt.am/assets/js/jquery.js','https://terrawire.com/assets/js/xmalert.js','https://terrawire.com/assets/js/alerts.js','https://terrawire.com/assets/js/mpopup.js','https://terrawire.com/assets/js/bootstrap.js','https://terrawire.com/assets/js/dropzone.js','https://terrawire.com/assets/js/jquery-confirm.js'].forEach(function(src) {
		script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	});	

	//	Load All CSS files
	['https://gaysugardaddyfinder.com/assets/css/effects.css','https://txt.am/assets/css/magic.css','https://txt.am/assets/css/stream.css','https://terrawire.com/assets/css/jquery-confirm.css'].forEach(function(src) {
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
		var h = 'wss://txt.am:'+portIM+'/?login='+a+'&mobile='+b+'&source='+window.location.host+'&fromImg='+getCookie('img')
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
							title:'Imcoming Video call',
							content: 'NEW VIDEO IM REQUEST FROM '+ data.fromUser.toUpperCase(),
							buttons: {
								Accept: {
									text: 'Accept',
									btnClass: 'btn-blue',
									action: function(){
										location.href='https://gaysugardaddyfinder.com/channel?login='+fromUser
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
			}
			if (type=='C') {
				if (login !== data.user) {
					user_on(data.user)
					addUser(data.user, data.mobile)
					if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
				}
			}

			if (type=="D") {
				user_off(data.user)
				removeUser(data.user, data.mobile)
				users.splice(users.indexOf(data.user),1)
				$('#whos_online').html(buildOnlineList(users))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			}

			if (type=="W") {
				user_login(msg.data)
			}

			if (type=="Q") {
				users=data
				console.log(data)
				$('#whos_online').html('')
				$('#whos_online').html(buildOnlineList(data))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').innerHTML=users.length
			}

			if (type=="O") {
				users=data
				$('#whos_online').html('')
				bd=buildOnlineList(data)
				$('#whos_online').html()
				if ($$('w_o')) $$('w_o').innerHTML(bd)
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			}

			if ((type=='M')) {
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
				txt_msg.innerHTML=txtMsg
				//Received a Text Message
				setCookie('chatting_with',to_user)
				var my_pic = "<img style=\"margin-right:0px;width:30px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+fromImg+"\">"
				var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:190px;font-family:Ubuntu Condensed;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:190px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"
				var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
				var end_msg = "</td></tr></table></div>"
				var ele = document.createElement("div")
				mb = document.getElementById('msgBody' + UserID)
				ele.innerHTML = ini_msg + my_pic + pre_msg + txt_msg.innerHTML + end_msg
				mb.appendChild(ele)
				mb.scrollTop = mb.scrollHeight;
			}
			repaint()				
		}
	}	
	$$('notifyUser').innerHTML=''
	$$('notifyUser').style.display='none'	

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
		var url = 'https://sugardaddydays.com/voice/call.php?to=' + to + '&from=' + from + '&message=' +  txt + '&message_type=INDEX_NOTIFY_CODE'
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
		var url = 'https://txt.am/gateway/sms.php?to=' + to_mobile + '&from=19256669444&msg='+getCookie('login')+' has invited you to a Video Chat. Click below to join the call\r\n\1\r\n\1https://txt.am:9001/stream/channel.html\?login='+getCookie('login')
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
		var w_w=screen_dimensions()[0] - 20
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
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;right:' + posWin
				rc=0;
			} else {
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;right:' + posWin
				rc=1;
			}
			jChatWn.innerHTML = 	'<div id="msgContainer" style="overflow:hidden;width:'+mmx+';max-width:'+mmx+';height:100%!Important;border-radius:2px" onclick="setUser(\'' + to_user + '\');">' +
										'<div class="msgHeader" style="width:100%;max-width:100%;height:35px;padding-bottom:10px">' +
											'<div class="row">' +
												'<div class="col-xs-16" style="font-family:Open Sans Condensed;overflow:hidden">' +
														'<table border=0 style="width:100%;background:url(images/xxx_black.jpg);height:50px;background-size:cover">'+
															'<tr>'+
																'<td></td><td><a href="javascript:video_call(\''+to_user+'\')"><img src="assets/images/vcx.png" style="width:25px;margin-left:25px"></a></td>' +
																'<td style="color:#fff; text-transform: uppercase;">' + to_user + '</td>'+
																'<td><img src="images/exit.png" onclick="close_chat(\''+to_user+'\')" style="width:20px;height:20px;padding-right:0;margin=left:10px"></td>'+
																'</tr>'+
														'</table>'+
												'</div>' +
											'</div>' +
										'</div>' +
										'<div id="msgBody' + to_user + '" class="msgBody" style="width:100%;height:100%!Important;overflow:hidden;max-height:100%!Important;color:'+oColor+'"></div>' +
										'<div id=\'dz1\' name=\'dz1\' class=\'dropzone dropzone-previews needsclick dz-clickable\' style=\'display:none;border:none;position:absolute;bottom:0\'></div>'+
										
										'<div id="im_footer' + to_user + '" style="max-width:'+mmx+';width:100%">' +
											'<div onmouseover="this.style.cursor=\'crosshair\'" style="z-index:9999999999999999999999999999999999999;margin:0;width:'+mmt+';position:absolute;bottom:0;border:1px solid silver;padding-top:10px;height:' + 1.5*th + 'px;padding-left:35px;background:#fff;text-shadow:1px 1px 1px #fff;" id="txt' + to_user + '" contentEditable="true"></div>' +	
											'<img src="https://sugardaddydays.com/assets/images/pclip.png" id="pclip'+to_user+'" onclick="javascript:show_attach()" style="position:absolute;width:30px;bottom:10px;z-index:999999999999999;cursor:hand;cursor:pointer">' +
										'<img src="https://sugardaddydays.com/assets/x_green.png" id="btnSend'+to_user+'" onclick="javascript:msg_send()" style="display:none;position:absolute;width:100px;bottom:2px;right:2px;z-index:999999999999999;cursor:hand;cursor:pointer">' +
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
						'cont':	'<table><tr rowspan=2><td><img src="https://txt.am/phone_calling.gif"></td></tr><tr><td colspan=2>Incoming video Call from ' + getCookie('login') + '</td></tr><tr><td><a href="https://txt.am:9001/video/video.html?to='+getCookie('login')+'&from='+getCookie('chatting_with')+'" class="btn btn primary">Accept</a></td><td><input class="btn btn red" value="Decline"></td></tr></table>'
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
		windowObjectReference = window.open("https://txt.am:9001/stream/channel?login="+getCookie('login')+"&action=1", "video chat", strWindowFeatures);
	}			
			var myDropzone
			Dropzone.autoDiscover=false
			function show_attach() {
					$('#dz1').show()
					setCookie('attach_id',guid())
					var url="upload.php"
					if (!myDropzone) {
						myDropzone = new Dropzone("div#dz1", { 
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
					var smem=document.getElementById('dz1').textContent
					smem.className='www_box www_box5'
					document.getElementById('dz1').textContent=''
					$('#dz1').hide()
					var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
					setCookie('chatting_with_login',to_user)
					var my_pic = "<img onerror='this.src=\"http://sugardaddydays.com/assets/no_data.png\"' style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+getCookie('img')+"\">"
					var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:100%;font-family:Economica;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"
					var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
					var end_msg = "</td></tr></table></div>"
					var ele = document.createElement("div")
					var ms='You have a new photo message!     https://gaysugardaddyfginder.com/w/'+getCookie('attach_id') + '.' + file.name.split('.')[1]
					setCookie('sms_message',ms)
					initPhoto(getCookie('chatting_with_login'), getCookie('chatting_with_mobile'))
						if (file.name!=fn) {
							ext=file.name.split('.')[1]
							if((ext=='mp4')||(ext=='wmv')) {
								var link = '<video src=\'https://gaysugardaddyfginder.com/w/' + getCookie('attach_id') + '.mp4' + '\' style=\'width:100px;\' autoplay loop></video>'
							} else {
								var link = '<img  src=\'https://gaysugardaddyfginder.com/w/' + getCookie('attach_id') + '.' + ext + '\' style=\'width:100px;border:10px solid white;border-bottom:30px solid white\' class=\'www_box2 www_box5\'>'
							}
							var db=document.createElement('div')
							db.innerHTML = ini_msg + my_pic + pre_msg + link + end_msg
							db.innerHTML = link
							mb.appendChild(db)
							db=''
							mb.style.width='225px'

							setCookie("accepted_users", to_user)
							fn=file.name
							setCookie('user_input_h', to_user + '|' + 'mobile' + '|' + '15')

							
							to_user=getCookie("chatting_with_login")
							objData={		'toUser'		: 	getCookie('chatting_with_login'),
											'fromUser' 		: 	getCookie('login'),
											'fromImg' 		: 	getCookie('img'),
											'msg' 			: 	link,
											'fromLongCode'	:	getCookie('long_code') 
									}
							jMsg=JSON.stringify({'type':'M','data': objData})
							
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

							
						}	
					});
					$("div#dz1").click()
			}			
			$(document).keyup(function(e) {
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
							var my_pic = "<img  onerror='this.src=\"http://sugardaddydays.com/assets/no_data.png\"'  style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+getCookie('img')+"\">"
							var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:'+mmx+';font-family:Open Sans Condensed;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"						
							var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
							var end_msg = "</td></tr></table></div>"
							var ele = document.createElement("div")
					
							mb.innerHTML += ini_msg + my_pic + pre_msg + e.target.textContent + end_msg
							e.target.textContent=''
							e.target.style.fontSize='16px'
							mb.style.width='225px'
							mb.style.maxHeight='300px'
							setCookie("accepted_users", to_user)
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

	function setCookie(cname,cvalue,exdays)	{
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	 }	

	function getCookie(cname)	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
		  var c = ca[i].trim();
		  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}
	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}

	function sms_to_login(to,from,txt) {
		if (!type_sms) type_sms=''
		var cnf='SMS Sent'
		var url = 'http://txt.am/gateway/sms.php?to=' + to + '&from=' + from + '&message=' +  txt + '&type_sms='+type_sms
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
			imgType[i]='assets/images/'+xType[i]+'.gif'
			imgType[0]='assets/images/010.png'
			nd[i]=document.createElement("div")
			nt[i]=document.createElement("div")
			if (tp=="modal") {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px RGBA(25,20,100,0.3) inset;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:100px;position:absolute;border-radius:4px;opacity:1"
			} else {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:60px;position:absolute;border-radius:4px;opacity:1"
			}
			nd[i].style.background=xCol
			nd[i].style.top=nh+'px'
			nd[i].style.display='block'
			if (tp=="modal") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="https://sugardaddydays.com/assets/images/in_yes.png" style="width:50px;height:50px;margin-top:-12px"></td><td><div id="notify_txt1" style="top:7px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:15px;font-family:Open Sans; font-weight:300">'+str+'</div></td></tr></table>'
			} else if (tp=="blank") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><div id="notify_txt1" style="top:3px;position:absolute;font-size:15px;color:'+xbg+';margin:5px;padding-bottom:10px;font-family:Open Sans; font-weight:300;margin-left:-15px">'+str+'</div></td></tr></table>'											
			} else {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="https://sugardaddydays.com/'+imgType[i]+'" style="width:25px;height:25px;margin-top:-5px"></td><td><div id="notify_txt1" style="top:5px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:12px;font-family:Open Sans; font-weight:300">'+str+'</div></td></tr></table>'					
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
				