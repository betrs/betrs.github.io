(function($) {
    var upperLimit = 1000;

    var scrollElem = $('#totop');

    var scrollSpeed = 1600;

    scrollElem.hide();
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeIn(300);
        }else{
            $(scrollElem).stop().fadeOut(300);
        }
    });

    $(scrollElem).click(function(){
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
    });
})(jQuery);