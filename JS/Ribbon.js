(function ($) {
    $.fn.ribbonPosition = function () {
        var element = this;
        changePosition();
        $(window).bind("scroll", function () {
            changePosition();
        });

        function changePosition() {
            var t = $(window).scrollTop();
            var h = $(window).height();
            var offset = $(window).height() / 25;
            var zoneSize = $(window).height() / 3;
            var zoneOne = t + zoneSize + offset;
            var zoneTwo = t + zoneSize * 2 - offset;
            return $(element).each(function () {
                var obj = $(this);
                var objH = obj.height();
                var offset = obj.offset();
                if (offset.top + objH <= zoneOne) {
                    return $(this).css('background-position', '0 0');
                } else if (offset.top >= zoneTwo) {
                    return $(this).css('background-position', '0 -104px');
                } else {
                    return $(this).css('background-position', '0 -52px');
                }
            });
        }
    };
})(jQuery);
jQuery(document).ready(function ($) {
    $(".ribbon .wrapAround").ribbonPosition();
});;
