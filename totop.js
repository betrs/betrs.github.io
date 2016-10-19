(function($) {
    var upperLimit = 300;

    var scrollElem = $('#totop');

    var scrollSpeed = 500;

    scrollElem.hide();
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if ( scrollTop > upperLimit ) {
            $(scrollElem).fadeIn(300, 1);
        }else{
            $(scrollElem).fadeOut(300, 0);
        }
    });

    $(scrollElem).click(function(){
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
    });
	console.log(0)
})(jQuery);