$(document).ready(function(){
	init();
});

function init() {
	var log = console.log;
	log('init');

	var t = TweenMax;
	var hamburger = $('.hamburger');

	$(hamburger).click(function(){

		if( $('.header').hasClass('open') ) {

			$('.header').removeClass('open');
			$('.navItem').removeClass('open');

			//t.to($('.navItem'), 0.2, {opacity:0, ease:Power2.easeOut, onComplete:function(){ $('.navItem').removeClass('open'); } });

			t.to('#burger1', 0.3, {rotation:'0deg', y:'0px', ease:Power2.easeOut});
			t.to('#burger2', 0.3, {opacity:1, ease:Power2.easeOut});
			t.to('#burger3', 0.3, {rotation:'0deg',y:'0px',  ease:Power2.easeOut});

		} else {
			$('.header').addClass('open');
			$('.navItem').addClass('open');

			//t.to($('.navItem'), 0.2, {opacity:1, ease:Power2.easeOut, onComplete:function(){ $('.navItem').addClass('open'); } });

			t.to('#burger1', 0.3, {rotation:'45deg', y:'9px', ease:Power2.easeOut});
			t.to('#burger2', 0.3, {opacity:0, ease:Power2.easeOut});
			t.to('#burger3', 0.3, {rotation:'-45deg',y:'-9px',  ease:Power2.easeOut});
		}

		log('ham click');

	});

	$('#cab_arrow').click(function(){
		window.scrollTo({
			top: 570,
			behavior : 'smooth'
		});
	});

	$('#fa_arrow').click(function(){
		window.scrollTo({
			top: 1140,
			behavior : 'smooth'
		});
	});


}