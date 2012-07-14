/*
/*	Dynamic design functions and onLoad events
/*	----------------------------------------------------------------------
/* 	Creates added dynamic functions and initializes loading. 
/*	For editing, use source file located in "js/source" folder.
*/
jQuery(document).ready(function ($) {
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    $j("ul.sfmenu").superfish({
      delay: 400,
      animation: {
        height: "show"
      },
      speed: 275
    })
  } else {
    $j("ul.sfmenu").supersubs({
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
  $j("label.overlabel").overlabel();
  searchInputEffect();
  buttonStyles();
  if (!jQuery.browser.msie) {
    $j("a.img, div.img, .pagination a, .textInput, input[type='text'], input[type='password'], textarea").addClass("rounded");
    roundCorners()
  }
});
function searchInputEffect() {
  searchFocus = false, searchHover = false, searchCtnr = $j("#Search"), searchInput = $j("#SearchInput"), searchSubmit = $j("#SearchSubmit");
  if (searchCtnr.length > 0) {
    searchCtnr.hover(function () {
      if (!searchFocus) {
        $j(this).addClass("searchHover")
      }
      searchHover = true
    }, function () {
      if (!searchFocus) {
        $j(this).removeClass("searchHover")
      }
      searchHover = false
    }).mousedown(function () {
      if (!searchFocus) {
        $j(this).removeClass("searchHover").addClass("searchActive")
      }
    }).mouseup(function () {
      searchInput.focus();
      searchSubmit.show();
      searchFocus = true
    });
    searchInput.blur(function () {
      if (!searchHover) {
        searchCtnr.removeClass("searchActive");
        searchSubmit.hide();
        searchFocus = false
      }
    })
  }
}
function buttonStyles() {
  jQuery("button:not(:has(span),.noStyle), input[type='submit']:not(.noStyle), input[type='button']:not(.noStyle)").each(function () {
    var b = jQuery(this),
      tt = b.html() || b.val();
    if (!b.html()) {
      b = (jQuery(this).attr("type") == "submit") ? jQuery('<button type="submit">') : jQuery("<button>");
      b.insertAfter(this).addClass(this.className).attr("id", this.id);
      jQuery(this).remove()
    }
    b.text("").addClass("btn").append(jQuery("<span>").html(tt))
  });
  var styledButtons = jQuery(".btn");
  styledButtons.hover(function () {
    jQuery(this).addClass("submitBtnHover")
  }, function () {
    jQuery(this).removeClass("submitBtnHover")
  })
}
function roundCorners() {
  jQuery(".rounded, .ui-corner-all").css({
    "-moz-border-radius": "4px",
    "-webkit-border-radius": "4px",
    "border-radius": "4px"
  })
};