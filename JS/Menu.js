(function ($) {
    $.fn.superfish = function (op) {
        var sf = $.fn.superfish,
            c = sf.c,
            $arrow = $(['<span class="', c.arrowClass, '"> &#187;</span>'].join('')),
            over = function () {
                var $$ = $(this),
                    menu = getMenu($$);
                clearTimeout(menu.sfTimer);
                $$.showSuperfishUl().siblings().hideSuperfishUl()
            },
            out = function () {
                var $$ = $(this),
                    menu = getMenu($$),
                    o = sf.op;
                clearTimeout(menu.sfTimer);
                menu.sfTimer = setTimeout(function () {
                    o.retainPath = ($.inArray($$[0], o.$path) > -1);
                    $$.hideSuperfishUl();
                    if (o.$path.length && $$.parents(['li.', o.hoverClass].join('')).length < 1) {
                        over.call(o.$path)
                    }
                }, o.delay)
            },
            getMenu = function ($menu) {
                var menu = $menu.parents(['ul.', c.menuClass, ':first'].join(''))[0];
                sf.op = sf.o[menu.serial];
                return menu
            },
            addArrow = function ($a) {
                $a.addClass(c.anchorClass).append($arrow.clone())
            };
        return this.each(function () {
            var s = this.serial = sf.o.length;
            var o = $.extend({}, sf.defaults, op);
            o.$path = $('li.' + o.pathClass, this).slice(0, o.pathLevels).each(function () {
                $(this).addClass([o.hoverClass, c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass)
            });
            sf.o[s] = sf.op = o;
            $('li:has(ul)', this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over, out).each(function () {
                if (o.autoArrows) addArrow($('>a:first-child', this))
            }).not('.' + c.bcClass).hideSuperfishUl();
            var $a = $('a', this);
            $a.each(function (i) {
                var $li = $a.eq(i).parents('li');
                $a.eq(i).focus(function () {
                    over.call($li)
                }).blur(function () {
                    out.call($li)
                })
            });
            o.onInit.call(this)
        }).each(function () {
            var menuClasses = [c.menuClass];
            if (sf.op.dropShadows && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
            $(this).addClass(menuClasses.join(' '))
        })
    };
    var sf = $.fn.superfish;
    sf.o = [];
    sf.op = {};
    sf.IE7fix = function () {
        var o = sf.op;
        if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity != undefined) this.toggleClass(sf.c.shadowClass + '-off')
    };
    sf.c = {
        bcClass: 'sf-breadcrumb',
        menuClass: 'sf-js-enabled',
        anchorClass: 'sf-with-ul',
        arrowClass: 'sf-sub-indicator',
        shadowClass: 'sf-shadow'
    };
    sf.defaults = {
        hoverClass: 'sfHover',
        pathClass: 'overideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        speed: 'normal',
        autoArrows: true,
        dropShadows: true,
        disableHI: false,
        onInit: function () {},
        onBeforeShow: function () {},
        onShow: function () {},
        onHide: function () {}
    };
    $.fn.extend({
        hideSuperfishUl: function () {
            var o = sf.op,
                not = (o.retainPath === true) ? o.$path : '';
            o.retainPath = false;
            var $ul = $(['li.', o.hoverClass].join(''), this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility', 'hidden');
            o.onHide.call($ul);
            return this
        },
        showSuperfishUl: function () {
            var o = sf.op,
                sh = sf.c.shadowClass + '-off',
                $ul = this.addClass(o.hoverClass).find('>ul:hidden').css('visibility', 'visible');
            sf.IE7fix.call($ul);
            o.onBeforeShow.call($ul);
            $ul.animate(o.animation, o.speed, function () {
                sf.IE7fix.call($ul);
                o.onShow.call($ul)
            });
            return this
        }
    })
})(jQuery);;

jQuery(document).ready(function ($) {
    if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
        $j("ul.sf-menu").superfish({
            delay: 400,
            animation: {
                height: "show"
            },
            speed: 275
        })
    } else {
        $j("ul.sf-menu").supersubs({
            minWidth: 12,
            maxWidth: 27,
            extraWidth: 0
        }).superfish({
            delay: 400,
            animation: {
                height: "show"
            },
            speed: 275
        })
    }
    jQuery('a[href$="#popup"]').addClass("zoom iframe").each(function () {
        jQuery(this).attr("href", this.href.replace("#popup", ""))
    });
    jQuery('a[href$="#login"]').addClass("login").each(function () {
        theHref = jQuery(this).attr("href");
        if (theHref == "#login") {
            theHref = themePath + "login.html"
        }
        jQuery(this).attr("href", theHref.replace("#login", ""))
    });
    jQuery("a.zoom[href*='http://www.youtube.com/watch?']").each(function () {
        jQuery(this).addClass("fancyYouTube").removeClass("zoom").removeClass("iframe")
    });
    jQuery("a.zoom[href*='http://www.vimeo.com/'], a.zoom[href*='http://vimeo.com/']").each(function () {
        jQuery(this).addClass("fancyVimeo").removeClass("zoom").removeClass("iframe")
    });
    var overlayColor = jQuery("#fancybox-overlay").css("background-color") || "#2c2c2c";
    jQuery("a.zoom").fancybox({
        padding: 12,
        overlayOpacity: 0.2,
        overlayColor: overlayColor,
        onComplete: modalStart
    });
    jQuery("a.login").fancybox({
        padding: 12,
        overlayOpacity: 0.2,
        overlayColor: overlayColor,
        showCloseButton: false,
        frameWidth: 400,
        frameHeight: 208,
        scrolling: "no",
        titleShow: false,
        hideOnContentClick: false,
        callbackOnShow: modalStart
    });
    jQuery("a.fancyYouTube").click(function () {
        jQuery.fancybox({
            padding: 12,
            overlayOpacity: 0.2,
            overlayColor: overlayColor,
            onComplete: modalStart,
            title: this.title,
            href: this.href.replace(new RegExp("watch\\?v=", "i"), "v/"),
            type: "swf",
            swf: {
                wmode: "transparent",
                allowfullscreen: "true"
            }
        });
        return false
    });
    jQuery("a.fancyVimeo").click(function () {
        jQuery.fancybox({
            padding: 12,
            overlayOpacity: 0.2,
            overlayColor: overlayColor,
            onComplete: modalStart,
            title: this.title,
            href: this.href.replace(new RegExp("([0-9])", "i"), "moogaloop.swf?clip_id=$1"),
            type: "swf"
        });
        return false
    });
    $j('.topReveal, a[href$="#topReveal"]').click(function () {
        $j("#ContentPanel").slideToggle(800, "easeOutQuart");
        $j.scrollTo("#ContentPanel");
        return false
    });
    $j("a.img").hover(function () {
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) <= 8) {
            $j(this).stop(false, true).toggleClass("imgHover")
        } else {
            $j(this).stop(false, true).toggleClass("imgHover", 200)
        }
    });
    $j("input[type='text']:not(.noStyle), input[type='password']:not(.noStyle)").each(function () {
        $j(this).addClass("textInput")
    });
    if ($(".portfolio-description").length > 0) {
        var pi = $(".portfolio-description");
        pi.each(function (i, val) {
            if (pi[i].scrollHeight > 120) {
                pi.css("height", pi[i].scrollHeight + "px");
                return false
            }
        })
    }
    $j("label.overlabel").overlabel();
    searchInputEffect();
    buttonStyles();
    if (!jQuery.browser.msie) {
        $j("a.img, div.img, .pagination a, .textInput, input[type='text'], input[type='password'], textarea").addClass("rounded");
        roundCorners()
    }
});
