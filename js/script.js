let unlock = true;
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".header__menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".header__menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".header__menu");
	iconMenu.classList.remove("active");
	menuBody.classList.remove("active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
let scr_body = document.querySelector('body');

//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('.anchor');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
			iconMenu.classList.remove("active");
			menuBody.classList.remove("active");
			scr_body.classList.remove("_lock");
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = 'header';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
    if (typeof define === 'function' && define.amd) { 
     // AMD. Register as an anonymous module. 
     define(['jquery'], factory); 
     } else if (typeof exports === 'object') { 
     // Node/CommonJS 
     factory(require('jquery')); 
     } else { 
     // Browser globals 
     factory(window.jQuery || window.Zepto); 
     } 
     }(function($) { 
    
    /*>>core*/
    /**
     * 
     * Magnific Popup Core JS file
     * 
     */
    
    
    /**
     * Private static constants
     */
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    
    
    /**
     * Private vars 
     */
    /*jshint -W079 */
    var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
        MagnificPopup = function(){},
        _isJQ = !!(window.jQuery),
        _prevStatus,
        _window = $(window),
        _document,
        _prevContentType,
        _wrapClasses,
        _currPopupType;
    
    
    /**
     * Private functions
     */
    var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
        _getEl = function(className, appendTo, html, raw) {
            var el = document.createElement('div');
            el.className = 'mfp-'+className;
            if(html) {
                el.innerHTML = html;
            }
            if(!raw) {
                el = $(el);
                if(appendTo) {
                    el.appendTo(appendTo);
                }
            } else if(appendTo) {
                appendTo.appendChild(el);
            }
            return el;
        },
        _mfpTrigger = function(e, data) {
            mfp.ev.triggerHandler(NS + e, data);
    
            if(mfp.st.callbacks) {
                // converts "mfpEventName" to "eventName" callback and triggers it if it's present
                e = e.charAt(0).toLowerCase() + e.slice(1);
                if(mfp.st.callbacks[e]) {
                    mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                }
            }
        },
        _getCloseBtn = function(type) {
            if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
                _currPopupType = type;
            }
            return mfp.currTemplate.closeBtn;
        },
        // Initialize Magnific Popup only when called at least once
        _checkInstance = function() {
            if(!$.magnificPopup.instance) {
                /*jshint -W020 */
                mfp = new MagnificPopup();
                mfp.init();
                $.magnificPopup.instance = mfp;
            }
        },
        // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
        supportsTransitions = function() {
            var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
                v = ['ms','O','Moz','Webkit']; // 'v' for vendor
    
            if( s['transition'] !== undefined ) {
                return true; 
            }
                
            while( v.length ) {
                if( v.pop() + 'Transition' in s ) {
                    return true;
                }
            }
                    
            return false;
        };
    
    
    
    /**
     * Public functions
     */
    MagnificPopup.prototype = {
    
        constructor: MagnificPopup,
    
        /**
         * Initializes Magnific Popup plugin. 
         * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
         */
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
    
            // We disable fixed positioned lightbox on devices that don't handle it nicely.
            // If you know a better way of detecting this - let me know.
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
            _document = $(document);
    
            mfp.popupsCache = {};
        },
    
        /**
         * Opens popup
         * @param  data [description]
         */
        open: function(data) {
    
            var i;
    
            if(data.isObj === false) { 
                // convert jQuery collection to array to avoid conflicts later
                mfp.items = data.items.toArray();
    
                mfp.index = 0;
                var items = data.items,
                    item;
                for(i = 0; i < items.length; i++) {
                    item = items[i];
                    if(item.parsed) {
                        item = item.el[0];
                    }
                    if(item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
    
            // if popup is already opened - we just update the content
            if(mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            
            mfp.types = []; 
            _wrapClasses = '';
            if(data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
    
            if(data.key) {
                if(!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
    
    
    
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
    
            if(mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            
    
            // Building markup
            // main containers are created only once
            if(!mfp.bgOverlay) {
    
                // Dark overlay
                mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
                    mfp.close();
                });
    
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
                    if(mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
    
                mfp.container = _getEl('container', mfp.wrap);
            }
    
            mfp.contentContainer = _getEl('content');
            if(mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
    
    
            // Initializing modules
            var modules = $.magnificPopup.modules;
            for(i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init'+n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
    
    
            if(mfp.st.showCloseBtn) {
                // Close button
                if(!mfp.st.closeBtnInside) {
                    mfp.wrap.append( _getCloseBtn() );
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
    
            if(mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
    
        
    
            if(mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({ 
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
    
            
    
            if(mfp.st.enableEscapeKey) {
                // Close on ESC key
                _document.on('keyup' + EVENT_NS, function(e) {
                    if(e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
    
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
    
    
            if(!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            
            if(_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
    
    
            // this triggers recalculation of layout, so we get it once to not to trigger twice
            var windowHeight = mfp.wH = _window.height();
    
            
            var windowStyles = {};
    
            if( mfp.fixedContentPos ) {
                if(mfp._hasScrollBar(windowHeight)){
                    var s = mfp._getScrollbarSize();
                    if(s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
    
            if(mfp.fixedContentPos) {
                if(!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    // ie7 double-scroll bug
                    $('body, html').css('overflow', 'hidden');
                }
            }
    
            
            
            var classesToadd = mfp.st.mainClass;
            if(mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if(classesToadd) {
                mfp._addClassToMFP( classesToadd );
            }
    
            // add content
            mfp.updateItemHTML();
    
            _mfpTrigger('BuildControls');
    
            // remove scrollbar, add margin e.t.c
            $('html').css(windowStyles);
            
            // add everything to DOM
            mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );
    
            // Save last focused element
            mfp._lastFocusedEl = document.activeElement;
            
            // Wait for next cycle to allow CSS transition
            setTimeout(function() {
                
                if(mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    // if content is not defined (not loaded e.t.c) we add class only for BG
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                
                // Trap the focus in popup
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
    
            }, 16);
    
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
    
            return data;
        },
    
        /**
         * Closes the popup
         */
        close: function() {
            if(!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
    
            mfp.isOpen = false;
            // for CSS3 animation
            if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
    
        /**
         * Helper for close() function
         */
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
    
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
    
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
    
            if(mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
    
            mfp._removeClassFromMFP(classesToRemove);
    
            if(mfp.fixedContentPos) {
                var windowStyles = {marginRight: ''};
                if(mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
    
            // clean up DOM elements that aren't removed
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
    
            // remove close button from target element
            if(mfp.st.showCloseBtn &&
            (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if(mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
    
    
            if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus(); // put tab focus back
            }
            mfp.currItem = null;	
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
    
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        
        updateSize: function(winHeight) {
    
            if(mfp.isIOS) {
                // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            // Fixes #84: popup incorrectly positioned with position:relative on body
            if(!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
    
            _mfpTrigger('Resize');
    
        },
    
        /**
         * Set content of popup based on current index
         */
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
    
            // Detach and perform modifications
            mfp.contentContainer.detach();
    
            if(mfp.content)
                mfp.content.detach();
    
            if(!item.parsed) {
                item = mfp.parseEl( mfp.index );
            }
    
            var type = item.type;
    
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            // BeforeChange event works like so:
            // _mfpOn('BeforeChange', function(e, prevType, newType) { });
    
            mfp.currItem = item;
    
            if(!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
    
                // allows to modify markup
                _mfpTrigger('FirstMarkupParse', markup);
    
                if(markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    // if there is no markup found we just define that template is parsed
                    mfp.currTemplate[type] = true;
                }
            }
    
            if(_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
            }
    
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
    
            item.preloaded = true;
    
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
    
            // Append container back after its content changed
            mfp.container.prepend(mfp.contentContainer);
    
            _mfpTrigger('AfterChange');
        },
    
    
        /**
         * Set HTML content of popup
         */
        appendContent: function(newContent, type) {
            mfp.content = newContent;
    
            if(newContent) {
                if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
                    mfp.currTemplate[type] === true) {
                    // if there is no markup, we just append close button element inside
                    if(!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
    
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-'+type+'-holder');
    
            mfp.contentContainer.append(mfp.content);
        },
    
    
        /**
         * Creates Magnific Popup data object based on given data
         * @param  {int} index Index of item to parse
         */
        parseEl: function(index) {
            var item = mfp.items[index],
                type;
    
            if(item.tagName) {
                item = { el: $(item) };
            } else {
                type = item.type;
                item = { data: item, src: item.src };
            }
    
            if(item.el) {
                var types = mfp.types;
    
                // check for 'mfp-TYPE' class
                for(var i = 0; i < types.length; i++) {
                    if( item.el.hasClass('mfp-'+types[i]) ) {
                        type = types[i];
                        break;
                    }
                }
    
                item.src = item.el.attr('data-mfp-src');
                if(!item.src) {
                    item.src = item.el.attr('href');
                }
            }
    
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
    
            return mfp.items[index];
        },
    
    
        /**
         * Initializes single popup or a group of popups
         */
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
    
            if(!options) {
                options = {};
            }
    
            var eName = 'click.magnificPopup';
            options.mainEl = el;
    
            if(options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if(options.delegate) {
                    el.off(eName).on(eName, options.delegate , eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
    
    
            if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
                return;
            }
    
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
    
            if(disableOn) {
                if($.isFunction(disableOn)) {
                    if( !disableOn.call(mfp) ) {
                        return true;
                    }
                } else { // else it's number
                    if( _window.width() < disableOn ) {
                        return true;
                    }
                }
            }
    
            if(e.type) {
                e.preventDefault();
    
                // This will prevent popup from closing if element is inside and popup is already opened
                if(mfp.isOpen) {
                    e.stopPropagation();
                }
            }
    
            options.el = $(e.mfpEl);
            if(options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
    
    
        /**
         * Updates text on preloader
         */
        updateStatus: function(status, text) {
    
            if(mfp.preloader) {
                if(_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-'+_prevStatus);
                }
    
                if(!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
    
                var data = {
                    status: status,
                    text: text
                };
                // allows to modify status
                _mfpTrigger('UpdateStatus', data);
    
                status = data.status;
                text = data.text;
    
                mfp.preloader.html(text);
    
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
    
                mfp.container.addClass('mfp-s-'+status);
                _prevStatus = status;
            }
        },
    
    
        /*
            "Private" helpers that aren't private at all
         */
        // Check to close popup or not
        // "target" is an element that was clicked
        _checkIfClose: function(target) {
    
            if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
    
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
    
            if(closeOnContent && closeOnBg) {
                return true;
            } else {
    
                // We close the popup if click is on close button or on preloader. Or if there is no content.
                if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
                    return true;
                }
    
                // if click is outside the content
                if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
                    if(closeOnBg) {
                        // last check, if the clicked element is in DOM, (in case it's removed onclick)
                        if( $.contains(document, target) ) {
                            return true;
                        }
                    }
                } else if(closeOnContent) {
                    return true;
                }
    
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if(item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );
    
            $.each(values, function(key, value) {
                if(value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if(arr.length > 1) {
                    var el = template.find(EVENT_NS + '-'+arr[0]);
    
                    if(el.length > 0) {
                        var attr = arr[1];
                        if(attr === 'replaceWith') {
                            if(el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if(attr === 'img') {
                            if(el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
    
                } else {
                    template.find(EVENT_NS + '-'+key).html(value);
                }
            });
        },
    
        _getScrollbarSize: function() {
            // thx David
            if(mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    
    }; /* MagnificPopup core prototype end */
    
    
    
    
    /**
     * Public static functions
     */
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
    
        open: function(options, index) {
            _checkInstance();
    
            if(!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
    
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
    
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
    
        registerModule: function(name, module) {
            if(module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
    
        defaults: {
    
            // Info about options is in docs:
            // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
    
            disableOn: 0,
    
            key: null,
    
            midClick: false,
    
            mainClass: '',
    
            preloader: true,
    
            focus: '', // CSS selector of input to focus after popup is opened
    
            closeOnContentClick: false,
    
            closeOnBgClick: true,
    
            closeBtnInside: true,
    
            showCloseBtn: true,
    
            enableEscapeKey: true,
    
            modal: false,
    
            alignTop: false,
    
            removalDelay: 0,
    
            prependTo: null,
    
            fixedContentPos: 'auto',
    
            fixedBgPos: 'auto',
    
            overflowY: 'auto',
    
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
    
            tClose: 'Close (Esc)',
    
            tLoading: 'Loading...',
    
            autoFocusLast: true
    
        }
    };
    
    
    
    $.fn.magnificPopup = function(options) {
        _checkInstance();
    
        var jqEl = $(this);
    
        // We call some API method of first param is a string
        if (typeof options === "string" ) {
    
            if(options === 'open') {
                var items,
                    itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;
    
                if(itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if(itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq( index );
                }
                mfp._openClick({mfpEl:items}, jqEl, itemOpts);
            } else {
                if(mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
    
        } else {
            // clone options obj
            options = $.extend(true, {}, options);
    
            /*
             * As Zepto doesn't support .data() method for objects
             * and it works only in normal browsers
             * we assign "options" object directly to the DOM element. FTW!
             */
            if(_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
    
            mfp.addGroup(jqEl, options);
    
        }
        return jqEl;
    };
    
    /*>>core*/
    
    /*>>inline*/
    
    var INLINE_NS = 'inline',
        _hiddenClass,
        _inlinePlaceholder,
        _lastInlineElement,
        _putInlineElementsBack = function() {
            if(_lastInlineElement) {
                _inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
                _lastInlineElement = null;
            }
        };
    
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide', // will be appended with `mfp-` prefix
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
    
            initInline: function() {
                mfp.types.push(INLINE_NS);
    
                _mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
    
            getInline: function(item, template) {
    
                _putInlineElementsBack();
    
                if(item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);
    
                    if(el.length) {
    
                        // If target element has parent - we replace it with placeholder and put it back after popup is closed
                        var parent = el[0].parentNode;
                        if(parent && parent.tagName) {
                            if(!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-'+_hiddenClass;
                            }
                            // replace target inline element with placeholder
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
    
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
    
                    item.inlineElement = el;
                    return el;
                }
    
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    
    /*>>inline*/
    
    /*>>ajax*/
    var AJAX_NS = 'ajax',
        _ajaxCur,
        _removeAjaxCursor = function() {
            if(_ajaxCur) {
                $(document.body).removeClass(_ajaxCur);
            }
        },
        _destroyAjaxRequest = function() {
            _removeAjaxCursor();
            if(mfp.req) {
                mfp.req.abort();
            }
        };
    
    $.magnificPopup.registerModule(AJAX_NS, {
    
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
    
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
    
                _mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
    
                if(_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
    
                mfp.updateStatus('loading');
    
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data:data,
                            xhr:jqXHR
                        };
    
                        _mfpTrigger('ParseAjax', temp);
    
                        mfp.appendContent( $(temp.data), AJAX_NS );
    
                        item.finished = true;
    
                        _removeAjaxCursor();
    
                        mfp._setFocus();
    
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
    
                        mfp.updateStatus('ready');
    
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
    
                mfp.req = $.ajax(opts);
    
                return '';
            }
        }
    });
    
    /*>>ajax*/
    
    
    
    /*>>zoom*/
    var hasMozTransform,
        getHasMozTransform = function() {
            if(hasMozTransform === undefined) {
                hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
            }
            return hasMozTransform;
        };
    
    $.magnificPopup.registerModule('zoom', {
    
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
    
        proto: {
    
            initZoom: function() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;
    
                if(!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
    
                var duration = zoomSt.duration,
                    getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
                            cssObj = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            },
                            t = 'transition';
    
                        cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;
    
                        newImg.css(cssObj);
                        return newImg;
                    },
                    showMainContent = function() {
                        mfp.content.css('visibility', 'visible');
                    },
                    openTimeout,
                    animatedImg;
    
                _mfpOn('BuildControls'+ns, function() {
                    if(mfp._allowZoom()) {
    
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
    
                        // Basically, all code below does is clones existing image, puts in on top of the current one and animated it
    
                        image = mfp._getItemToZoom();
    
                        if(!image) {
                            showMainContent();
                            return;
                        }
    
                        animatedImg = getElToAnimate(image);
    
                        animatedImg.css( mfp._getOffset() );
    
                        mfp.wrap.append(animatedImg);
    
                        openTimeout = setTimeout(function() {
                            animatedImg.css( mfp._getOffset( true ) );
                            openTimeout = setTimeout(function() {
    
                                showMainContent();
    
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16); // avoid blink when switching images
    
                            }, duration); // this timeout equals animation duration
    
                        }, 16); // by adding this timeout we avoid short glitch at the beginning of animation
    
    
                        // Lots of timeouts...
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
                    if(mfp._allowZoom()) {
    
                        clearTimeout(openTimeout);
    
                        mfp.st.removalDelay = duration;
    
                        if(!image) {
                            image = mfp._getItemToZoom();
                            if(!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
    
                        animatedImg.css( mfp._getOffset(true) );
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
    
                        setTimeout(function() {
                            animatedImg.css( mfp._getOffset() );
                        }, 16);
                    }
    
                });
    
                _mfpOn(CLOSE_EVENT+ns, function() {
                    if(mfp._allowZoom()) {
                        showMainContent();
                        if(animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },
    
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
    
            _getItemToZoom: function() {
                if(mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
    
            // Get element postion relative to viewport
            _getOffset: function(isLarge) {
                var el;
                if(isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
    
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'),10);
                var paddingBottom = parseInt(el.css('padding-bottom'),10);
                offset.top -= ( $(window).scrollTop() - paddingTop );
    
    
                /*
    
                Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
    
                 */
                var obj = {
                    width: el.width(),
                    // fix Zepto height+padding issue
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
    
                // I hate to do this, but there is no another option
                if( getHasMozTransform() ) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
    
        }
    });
    
    
    
    /*>>zoom*/
    
    
    
    
    
    
     _checkInstance(); }));

     $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $(function () {
        $('.popup-modal-2').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    const cookieEl = document.querySelector('.coockies-bunner');
    const okEl = document.querySelector('.ok-button');
    
    okEl.addEventListener('click', () => {
      cookieEl.style.display = 'none';
    });
    
    let cookies = () => {
      if (!Cookies.get('hide-cookie')) {
        setTimeout(() => {
          cookieEl.style.display = 'block';
        }, 1000);
      }
    
      Cookies.set('hide-cookie', 'true', {
        expires: 30
      });
    }
    
    
    cookies();
    
document.querySelector('.try-input').addEventListener('change', function(){
    document.querySelector('.form-email').value = this.value;
});
    

