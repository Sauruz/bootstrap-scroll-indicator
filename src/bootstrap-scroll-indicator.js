var Scrollindicator = function (options) {
    var that = this;
    
    $('.scroll-indicator-bar').html('<div class="scroll-indicator-bar-container"><div class="scroll-indicator"></div></div>');

    var defaults = {
        colorBar: '#E5E5E5',
        colorIndicator: '#66BB6A',
        height: 5
    };
    var actual = $.extend({}, defaults, options || {});

    $('.scroll-indicator-bar-container').css({
        'background-color': actual.colorBar,
        'height': actual.height + 'px',
        'bottom': (0 - (actual.height + 1)) + 'px'
    });

    $('.scroll-indicator').css({
        'background-color': actual.colorIndicator,
    });

    that.isScrolling = function () {
        var scroll = $(document).scrollTop();
        var bodyheight = $(document).height() - $(window).height();
        var perc = Math.round((scroll / bodyheight) * 100);
        if (!isNaN(perc)) {
            $('.scroll-indicator').css('width', perc + '%');
        }
    };

    $(window).scroll(function (event) {
        that.isScrolling();
    });

    $(window).resize(function () {
        that.isScrolling();
    });

    that.isScrolling();
};

