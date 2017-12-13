// Write your JavaScript code.
$(document).ready(function($) {
	var firstRow = true;
	var windowHeight = $(window).height();
	var _offset =  windowHeight * 0.66;
	$(window).resize(function() {
		windowHeight = $(window).height();
		_offset =  windowHeight * 0.66;
	});
	runRow(_offset);
	$(document).on('scroll', function() {
		runRow(_offset);
	});
	$('#contactTrigger').click(function() {
		$('.sub-navbar-ul').toggleClass('active');
		$('.navStack').toggleClass('contactSub');
	});
	$('.navStack').click(function(){
		if($(this).hasClass('contactSub')){
			$('.sub-navbar-ul').toggleClass('active');
			$('.navStack').toggleClass('contactSub');			
		}
		else{
			$('nav').removeClass('preload');
			$('.navStack span').toggleClass('active');
			$('.navbar-ul').toggleClass('active');
		}
	});
	$('h2.subh2').click(function(){
		if($(this).hasClass('hl')){
			$('.slider').slideUp();
			$('h2.subh2').removeClass('hl');			
		}
		else{
			$('.slider').slideUp();
			$('h2.subh2').removeClass('hl');
			$(this).toggleClass('hl');
			$(this).next().slideToggle(250);
			 slideTo(this);
		}
	})

	// TO FIX CURRENT VIEW TO TOP OF PAGE ON SCROLL
	// $('.navStack').click(function(){
	// 	$('body').removeClass('preload');
	// 	$('.navBurger span').toggleClass('active');
	// });
	// function subh2Sticky(element){
	// 	if(scrollY>= $(element).offset().top){
	// 		$(element).css({
	// 			position: 'fixed',
	// 			top: '50',
	// 			z-index: '10'
	// 		});
	// 	}
	// }
	function setOffset(){		
		var windowHeight = $(window).height();
		return windowHeight * 0.66;
	}
	function slide(element){
		$(element).addClass('active');
	}
	function slideTo(element){
		setTimeout( function(){ $('html, body').animate({scrollTop: ($(element).offset().top - 50)}, 200); } , 400);
	}
	function runRow(_offset){
		eachRow(_offset);
	}
	function eachRow(_offset){
		$('.row').each(function() {
			var scrollPos = scrollY + _offset;
			var divTopPos = $(this).offset().top;
			console.log('div:' + divTopPos + ' < scroll:' + scrollPos)
			if(firstRow == true){
				$(this).addClass('active');
				firstRow = false;
			}
			else if(divTopPos < scrollPos){
				if(this == 'visible'){
					$(this).addClass('visible');
				}
				else{
					$(this).addClass('active');
				}
				var cols = $(this).children();
				cols.each(function() {
					slide(this);
				});
			}
			
		});	
	}
});