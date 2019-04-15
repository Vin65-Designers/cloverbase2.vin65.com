var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.mainMenuHover();
			v65.global.misc();
			v65.global.mobileMenu();
			v65.global.header();
			v65.global.pageBanners();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		continueShopping : function(){
			if(v65.cookies.readCookie("continueShoppingURL") !== null){
				$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
			}
		},
		mainMenuHover : function(){
			$(".mainMenu ul li ul li").hover(function(){
				$(this).parent().parent().children("a").toggleClass("hover");
			});
		},
		header : function(){
			// Add login icon
			$('.v65-login a, .v65-editProfile a').prepend('<span class="icon-person" aria-hidden="true"></span>');

			// Move cart position
			if($(window).width() < 950){
				$('.user-tools.cartNav #v65-modalCart').prependTo($('.topUserTools')).removeClass('cartNav');
			}

			$(window).resize(function(){
				if($('.cartNav').css('display') == 'none') {
					$('.user-tools.cartNav #v65-modalCart').prependTo($('.topUserTools')).addClass('topCart');
				}else{
					$('.topUserTools #v65-modalCart').prependTo($('.user-tools.cartNav')).removeClass('topCart');
				}
			});
		},
		misc : function(){
			// // Subscribe
			$('#v65-subscribeWidget button span').prepend('<span class="icon-email" aria-hidden="true"></span>');

			// Add class to product drilldown content
			if($('.v65-productWrapper').length > 0){
			    $('section.content').addClass('productDrilldownContent');
			}
		},
		mobileMenu : function(){
			$(".icon-menu").click(function(){
				$('body').toggleClass('mobileBody');
				$('.mainMenu').toggleClass('menuOpen');
				return false;	
			});

			// Close cart when opening menu
			$('.icon-mobile').click(function(){
			  if(!$('.mainMenu').hasClass('menuOpen') && $('#v65-modalCartDropdown:visible')){
			   	vin65.cart.hideCart();
				}
			});
			// Close menu when opening cart
			$('body').click(function(e){
				if($(e.target).attr('id') === "v65-toggleModalCart"){
			    if($('.mainMenu').hasClass('menuOpen')){
			   		$('body').toggleClass('mobileBody');
			      $('.mainMenu').removeClass('menuOpen');
					}
				}
			});
		},
		pageBanners : function(){
			$(window).scroll(function () {
				if($(window).width() > 900){
					$('.pageBanner').css({'background-position':'center    calc(50% + '+(-$(this).scrollTop()*.3)+'px)'});    
				} 
			});
		}
	},
	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	home : {
		init: function() {
			v65.home.initPhotoGallery();
		},
		initPhotoGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryId : "6BB95E0B-F4D5-CCEF-33C2-3E4EC092408C" //Your own homepage gallery ID
				});
			}
		},
		homepageGallery : function(){
			if($('.homepageGallery img').length > 1){
				$('.homepageGallery').slick({
					autoplay: false //disable autoplay by default.
				});
			}	
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
			v65.page.productGroupRowClear();
			v65.page.scrollToBottom();
			v65.page.scrollToTop();
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					galleryHeight : null, // This value is translated to the set height of the gallery and will change the photogallery height
					galleryWidth : null, // This value is translated to the set width of the gallery and will change the photogallery width
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.
						arrows: true, //Show the arrow navigation
						autoplay: false, //Does the carousel autoplay or not
						autoplaySpeed: 3000,, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: false, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: '50px', //Side padding when in center mode (px or %)
						dots: true, //Show the dot navigation for each image
						fade: false, //Add a fade effect between image transitions
            slidesToShow: 1, //How may slides to show at once
						slidesToScroll: 1 //How many slides to scroll at once
					*/
				});
			}
		},
		productGroupRowClear : function(){
			if($(".v65-productGroup").length){
				for(var i = 1; i <= $(".v65-productGroup-product").length; i++){
					if(i % 2 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-2Up-rowClear"></div>');
					} else if (i % 3 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-3Up-rowClear"></div>');
					}
				}
			}
		},
		scrollToBottom : function(){
			$('.downButton').click(function() {
				$("html, body").animate({ scrollTop: ($("a[name='homeContent']").offset().top - 20) }, 1000);
				return false;
			});
		},
		scrollToTop : function(){
			$(window).scroll(function() {
				if($(document).scrollTop() > 150 && $(window).width() < 767){
					$(".backToTop").css("display", "block");
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
					$("footer").css("margin-bottom", $('.v65-productAddToCart-drilldownActivate').outerHeight())

				} else{
					$(".backToTop").css("display", "none");
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
					$("footer").removeAttr('style');
				}
			});

			$('.backToTop').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	},
	documentReady : {
		init : function(){
			v65.documentReady.equalizeHeight();
			v65.documentReady.homepageMisc();
			v65.documentReady.modals();
			v65.documentReady.eventsPages();
			v65.documentReady.productPage();
			v65.documentReady.recipesPage();
			v65.documentReady.misc();
			v65.documentReady.videoFormatting();
		},
		equalizeHeight : function(){
			$('.homepageSection').matchHeight();
			$('.v65-productGroup-product').matchHeight();
			$('.v65-product-title.v65-title').matchHeight();
			$('.v65-product-teaser').matchHeight();
			$('.v65-club').matchHeight();
			$('.footerSection').matchHeight();
		},
		homepageMisc : function(){
			$('.homepageEvents .v65-event-upcoming-event').each(function(){
				var date = $(this).find('.v65-event-upcoming-event-time');
				$(this).find('.v65-title').after(date);

				$(this).append('<div class="event-arrow"><a href="#"><span class="icon-arrow-right" aria-hidden="true"></span></a></div>');
			    var eventLink = $(this).find('.v65-event-upcoming-event-title a').attr('href');
			    $(this).find('.event-arrow a').attr('href', eventLink);  
			});

			if($('.subscribeContent .v65-pod').length === 0){
			      $('div#v65-subscribeWidget').parent().parent().hide();
			}

			if($(window).width() > 990){
				$('.homepageHeader').css('height', $('.galleryContent').innerHeight());
			}else{
				$('.homepageHeader').css('height', 'initial');
			}
			
			$('.galleryContent').addClass('fadeIn').one('webkitAnimationEnd...', function(){$(this).removeClass('fadeIn')});

			// Firefox
			$(window).load(function(){
			    setTimeout(function(){
			        $('.galleryContent').removeClass('fadeIn')
			    }, 2500);
			});
		},
		modals : function(){
			if($(window).width() > 581){
				$('a.modalLinkAltBtn span').each(function(){
				    if($(this).text().trim() == "Close"){
				        $(this).text("").prepend('<span class="icon-cross" aria-hidden="true"></span>').parent().addClass('modalClose');
				    }
				}) 
			} 

			$('.v65-quickView-close a').text("").prepend('<span class="icon-cross" aria-hidden="true"></span>').parent().addClass('modalClose');

		},
		eventsPages : function(){
			$('#v65-CalendarWrapper a').each(function(){
			   if($(this).text().trim() === "Next »"){
			        $(this).text("").prepend('<span class="icon-arrow-right" aria-hidden="true"></span>'); 
			   }

			   if($(this).text().trim() === "« Previous"){
			        $(this).text("").prepend('<span class="icon-arrow-left" aria-hidden="true"></spanb>'); 
			   }
			});

			$('#v65-CalendarEventTable').wrap("<div class='eventDrilldownWrapper' />");
			$('.eventDrilldownWrapper').parent().addClass('eventWrapper v65-group');
			$('.eventDrilldownWrapper').before('<h5 class="eventTitle">Event Details</h5>');

			$('.eventWrapper').prepend('<a class="backLink" href="#"><span class="icon-arrow-left" aria-hidden="true"></span><span class="eventsBackButton">Back</span></a>');

			$(".backLink").click(function(event) {
			    event.preventDefault();
			    history.back(1);
			});

			$(".eventDrilldownWrapper ~ *").wrapAll("<div class='event-description'></div>");		
		},
		productPage : function(){
			// Add search icon to quickview
			$('.v65-product-quickView').prepend('<i class="icon-search"></i>');

			$('.wineSpecs').prepend($('.wineSpecs .v65-title'));
			$('.wineSpecs .v65-title').attr('aria-expanded','false').attr('aria-controls','wine-spec-id').attr('role', 'link').attr('tabindex','0')	;
			$('.wineProfile').prepend($('.wineProfile .v65-title'));

			$('.wineSpecs').click(function(){
			     if($(this).hasClass('opened')){
			     	$(this).find('.v65-wine-specs').slideUp();
			     	$(this).removeClass('opened');
			     	$(this).find('.v65-title').attr('aria-expanded','false');
			     }else{
			     	$(this).find('.v65-wine-specs').slideDown();
			     	$(this).addClass('opened');
			     	$(this).find('.v65-title').attr('aria-expanded','true');
			     }
			});



			if($('.wineSpecs').text().trim().length === 0){
			     $('.wineSpecs').css({padding: 0, border: 0});
			}

			$('.wineProfile').click(function(){
			     if($(this).hasClass('opened')){
			     	$(this).find('.v65-wine-profile').slideUp();
			     	$(this).removeClass('opened');
			     	$(this).attr('aria-expanded','false');
			     }else{
			     	$(this).find('.v65-wine-profile').slideDown();
			     	$(this).addClass('opened');
			     	$(this).attr('aria-expanded','true');
			     }
			});

			if($('.wineProfile').text().trim().length === 0){
			     $('.wineProfile').css({padding: 0, border: 0});
			}

/*ADDED SCRIPT TO ALLOW USE OF "ENTER" FOR USE OF WINE SPEC AND WINE PROFILE ELEMENTS*/

			$('.wineSpecs').keydown(function(e){
					if(e.which === 13){
						$(".wineSpecs").click();
					}
				})

			$('.wineProfile').keydown(function(e){
					if(e.which === 13){
						$(".wineProfile").click();
					}
				})
		},
		recipesPage : function(){
			$('.v65-recipe').each(function(){
				 // Rearrange title and date
				 $(this).find('.v65-recipe-date').after($(this).find($('.v65-recipe-title')));
			});
		},
		misc : function(){
			if($('.telephoneNumber a').text().trim() == ""){
			   $('.telephoneNumber').css('display', 'none');
			}

			if($('.subSubMenu ul li').length === 0){
			     $('.subSubMenu').css('border-top', '0');
			};
		},
		videoFormatting : function(){
			$('iframe').each(function(){
				if($("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com']")){
					$(this).wrap('<div class="videoWrapper"></div>');
				}
			});
		}
	}
}

$(".v65-wine-specs-title").append(" <span class='wine-spec-arrows' aria-hidden='true'></span>");
$(".v65-wine-profile-title").append(" <span class='wine-profile-arrows' aria-hidden='true'></span>");
$(".wineProfile").attr('role', 'link').attr('tabindex','0');

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : null,
			galleryWidth : null,
			timestamp : "&timestamp="+ new Date().getTime()
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var slides = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption'),
						title = $(this).attr('title'),
						url = $(this).attr('link');
						if (url === undefined) {
						var	image = '<img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/>';
						} else{
						var	image = '<a href="'+url+'"><img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/></a>';
						}
						slides += image;
				});
				gallery.append(slides);
			},
			complete: function(){
	   			gallery.slick({
						arrows: settings.arrows, //Show the arrow navigation
						autoplay: settings.autoplay, //Does the carousel autoplay or not
						autoplaySpeed: settings.autoplaySpeed, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: settings.centerMode, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: settings.centerPadding, //Side padding when in center mode (px or %)
						dots: settings.dots, //Show the dot navigation for each image
						fade: settings.fade, //Add a fade effect between image transitions
            slidesToShow: settings.slidesToShow, //How may slides to show at once
						slidesToScroll: settings.slidesToScroll //How many slides to scroll at once
				});
				$('#pagePhotoGallery .slick-slide img').each(function(){ 
					if ($(this).attr('title')){
						var slideCaption = $(this).attr('title');
						$(this).parent('div').addClass('has-caption').append('<div class="slidecaption">' + slideCaption + '</div>');
					}
				});
	   		}
	   	});
	}
})(jQuery);

/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);

v65.global.init();
v65.page.init();
v65.home.init();

//Image PreLoader Plugin
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

function galleryParallax(content) {
	scrollPos = $(this).scrollTop();
	$(content).css({
		'margin-top': (scrollPos/20)+"px",
		'opacity': 1-(scrollPos/250)
	});
};

$('body').imagesLoaded().done(function() {
	$('.imagePreloader').addClass('imageVisible');
});

$(window).load(function(){
	$('.imagePreloader').addClass('imageVisible');
	$('.mainMenu ul ul').addClass('transition');
})

$(document).ready(function(){
	v65.documentReady.init();
	v65.home.homepageGallery();

	if($(window).width() > 990){
		$(window).scroll(function() {
			var headerHeight = $('header').height();
			var galleryPadding = parseFloat($('.galleryContent').css('padding-top'));
				
			if(($('.galleryContent').innerHeight() - galleryPadding) + headerHeight > $(window).height()){
			    $('.galleryContent').removeClass('galleryFixed');		    
			}else{
			    $('.galleryContent').addClass('galleryFixed');
			    galleryParallax('.galleryContent');
			}
		});
	}
});

$(document).ajaxComplete(function(){
	v65.documentReady.modals();
	v65.documentReady.eventsPages();
});
