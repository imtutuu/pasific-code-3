!function(e,o,t){o(window).scroll(function(){var e=o(window).scrollTop();o(".hero-section").outerHeight();e>=o(".site-header").outerHeight()?o(".site-header").addClass("shrink"):o(".site-header").removeClass("shrink")}),o(".front-page-4 .wp-video").append('<button class="hide-video">×</button>'),o(".front-page-4 .wp-video").prepend('<div class="before"></div>'),o(".show-video").on("click",function(){o(".widget_media_video").toggleClass("visible")}),o(".hide-video, .before").on("click",function(){o(".front-page-4 .widget_media_video").toggleClass("visible")}),o(".footer-widgets .enews form").append('<i class="fa fa-send-o"></i>'),o(".site-footer > .wrap").append('<a href="#top" class="back-to-top"></a>'),o("html").attr("id","top"),o('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href*="#tab-"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=o(this.hash);(t=t.length?t:o("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),o("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=o(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})}(document,jQuery);