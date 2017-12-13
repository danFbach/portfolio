// Write your JavaScript code.
$(document).ready(function($) {
	var h = $(window).height() / 1.5;
	eachRow();
	$(document	).on('scroll', function(event) {
		$("#scrollBox").text(scrollY);
		eachRow();
	});
	function eachRow(){
		$(".row").each(function(index, el) {
			var off = $(this).offset();
			if(off.top < (scrollY + h)){
				$(this).css('opacity', '100');
			}
		});	
	}
	$('.navStack').click(function(){
		$('nav').removeClass('preload');
		$('.navStack span').toggleClass('active');
		$('.navbar-ul').toggleClass('active');
	});
});