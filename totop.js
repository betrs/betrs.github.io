(function($) {
	$("#totop").hide();
	$(window).scorll(function(){
		var top = $(document).scrollTop();
		if(top > 300){
			$("#totop").fadeIn(300);
		}else{
			$("#totop").fadeOut(300);
		};
	});

   $("#totop").click(function(){
		$("body").animate({
			scrollTop:0		
		},300);
   });
})(jQuery);