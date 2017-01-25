$(document).ready(function(){

	//Mobile menu 
	$('.menu-icon').on('click', function(e) {
         $('.trigger').toggleClass('hoverTouch').css('background-color', 'white');
         $('.menu-icon').toggleClass("icon-active");
    });
	//end of mobile menu

	if ($('.nav-programs a').hasClass('active')) {
		$('.nav-programs a').css('border-top', 'none');
	} else {
		$('.nav-programs a').css({
			'background-color': 'white',
			'border-top': '5px solid white'
		});
	}
	$('#programsNavItem').mouseenter(function() {
		$('#programsNav').slideDown();
		$('.nav-programs a').css({
			'background-color': '#F8F8F7',
			'border-top': '5px solid rgb(248, 248, 247)'
		});
		if ($('.nav-programs a').hasClass('active')) {
			$('.nav-programs a').css('border-top', 'none');
		}
	});

	$('.trigger ul li:not(#programsNavItem)').mouseenter(function() {
		slideUpNav();
	});

	$('#programsNav').mouseleave(function() {
		slideUpNav();
	});

	$(window).scroll(function(){ 
		slideUpNav();
	});

	var slideUpNav = function() {
		$('#programsNav').slideUp();
		$('.nav-programs a').css({
			'background-color': 'white',
			'border-top': '5px solid white'
		});
		if ($('.nav-programs a').hasClass('active')) {
			$('.nav-programs a').css('border-top', 'none');
		}
	}
});