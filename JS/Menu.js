/* JavaScript includes combined into a single file for better performance */
/* From:  jquery.easing.1.3.min.js */
/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
Uses the built in easing capabilities added In jQuery 1.1 to offer multiple easing options
TERMS OF USE - jQuery Easing
Open source under the BSD License. Copyright Â© 2008 George McGinley Smith, All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIY OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
  }
}); /* From: hoverIntent.min.js */
/** hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+ <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 * @param  f  onMouseOver function || An object with configuration options, @param  g  onMouseOut function  || Nothing (use configuration options object), @author    Brian Cherne <brian@cherne.net>
 */
(function ($) {
  $.fn.hoverIntent = function (f, g) {
    var cfg = {
      sensitivity: 7,
      interval: 100,
      timeout: 0
    };
    cfg = $.extend(cfg, g ? {
      over: f,
      out: g
    } : f);
    var cX, cY, pX, pY;
    var track = function (ev) {
        cX = ev.pageX;
        cY = ev.pageY;
      };
    var compare = function (ev, ob) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
        if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
          $(ob).unbind("mousemove", track);
          ob.hoverIntent_s = 1;
          return cfg.over.apply(ob, [ev]);
        } else {
          pX = cX;
          pY = cY;
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
        }
      };
    var delay = function (ev, ob) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
        ob.hoverIntent_s = 0;
        return cfg.out.apply(ob, [ev]);
      };
    var handleHover = function (e) {
        var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
        while (p && p != this) {
          try {
            p = p.parentNode;
          } catch (e) {
            p = this;
          }
        }
        if (p == this) {
          return false;
        }
        var ev = jQuery.extend({}, e);
        var ob = this;
        if (ob.hoverIntent_t) {
          ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
        }
        if (e.type == "mouseover") {
          pX = ev.pageX;
          pY = ev.pageY;
          $(ob).bind("mousemove", track);
          if (ob.hoverIntent_s != 1) {
            ob.hoverIntent_t = setTimeout(function () {
              compare(ev, ob);
            }, cfg.interval);
          }
        } else {
          $(ob).unbind("mousemove", track);
          if (ob.hoverIntent_s == 1) {
            ob.hoverIntent_t = setTimeout(function () {
              delay(ev, ob);
            }, cfg.timeout);
          }
        }
      };
    return this.mouseover(handleHover).mouseout(handleHover);
  };
})(jQuery); /* From: superfish.min.js */
/* Superfish v1.4.8 - jQuery menu widget. Copyright (c) 2008 Joel Birch
 * Dual licensed under the MIT and GPL licenses:	http://www.opensource.org/licenses/mit-license.php, http://www.gnu.org/licenses/gpl.html */
;
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
})(jQuery); /* From: supersubs.min.js */
/* Supersubs v0.2b - jQuery plugin. Copyright (c) 2008 Joel Birch
 * Dual licensed under the MIT and GPL licenses:	http://www.opensource.org/licenses/mit-license.php, http://www.gnu.org/licenses/gpl.html */
;
(function ($) {
  $.fn.supersubs = function (options) {
    var opts = $.extend({}, $.fn.supersubs.defaults, options);
    return this.each(function () {
      var $$ = $(this);
      var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
      var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
        'padding': 0,
        'position': 'absolute',
        'top': '-999em',
        'width': 'auto'
      }).appendTo($$).width();
      $('#menu-fontsize').remove();
      $ULs = $$.find('ul');
      $ULs.each(function (i) {
        var $ul = $ULs.eq(i);
        var $LIs = $ul.children();
        var $As = $LIs.children('a');
        var liFloat = $LIs.css('white-space', 'nowrap').css('float');
        var emWidth = $ul.add($LIs).add($As).css({
          'float': 'none',
          'width': 'auto'
        }).end().end()[0].clientWidth / fontsize;
        emWidth += o.extraWidth;
        if (emWidth > o.maxWidth) {
          emWidth = o.maxWidth
        } else if (emWidth < o.minWidth) {
          emWidth = o.minWidth
        }
        emWidth += 'em';
        $ul.css('width', emWidth);
        $LIs.css({
          'float': liFloat,
          'width': '100%',
          'white-space': 'normal'
        }).each(function () {
          var $childUl = $('>ul', this);
          var offsetDirection = $childUl.css('left') !== undefined ? 'left' : 'right';
          $childUl.css(offsetDirection, emWidth)
        })
      })
    })
  };
  $.fn.supersubs.defaults = {
    minWidth: 9,
    maxWidth: 25,
    extraWidth: 0
  }
})(jQuery);