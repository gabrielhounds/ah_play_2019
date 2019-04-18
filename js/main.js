$(document).ready(function(){
	init();
});
function init() {
	var log = console.log;
	log('init');

	function isTouchDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

	if (isTouchDevice()) {
		//$('.game').css({height:window.innerHeight - headerOffset});
	}

	var t = TweenMax;

	var hamburger = $('#hamburger');

	var _height = window.innerHeight;

	var ga_top = $('#getAirheaded').offset().top;
	var fa_top = $('#floatAway').offset().top;
	var headerOffset = $('#header').height();

	//log('FA TOP = ',  fa_top - headerOffset );

	var cabArrowBounce = TweenMax.to( $('#cab_arrow'), 0.6, { y:6, ease:Back.easeOut, repeat:-1, yoyo:true } );
	var faArrowBounce  = TweenMax.to( $('#fa_arrow'),  0.6, { y:6, ease:Back.easeOut, repeat:-1, yoyo:true, paused:true} );

	t.set($('#fa_arrow'), {opacity:0});

	$(hamburger).click(function(){
		if( $('.header').hasClass('open') ) {
			//$('.header').removeClass('open');
			//$('.navItem').removeClass('open');
			t.to($('.navItem'), 0.1, {visibility:'hidden', opacity:0, ease:Power3.easeOut, onComplete:function(){
				$('.header').removeClass('open');
				$('.navItem').removeClass('open');
			}});
			t.to('#burger1', 0.3, {rotation:'0deg', y:'0px', ease:Power2.easeOut});
			t.to('#burger2', 0.3, {opacity:1, ease:Power2.easeOut});
			t.to('#burger3', 0.3, {rotation:'0deg',y:'0px',  ease:Power2.easeOut});
		} else {
			$('.header').addClass('open');
			$('.navItem').addClass('open');
			t.to($('.navItem'), 0.3, {visibility:'visible', opacity:1, ease:Power2.easeOut});
			t.to('#burger1', 0.3, {rotation:'45deg', y:'9px', ease:Power2.easeOut});
			t.to('#burger2', 0.3, {opacity:0, ease:Power2.easeOut});
			t.to('#burger3', 0.3, {rotation:'-45deg',y:'-9px',  ease:Power2.easeOut});
		}
	});

	if (!isTouchDevice()) {
		$('.cta').mouseover(function(){
			t.to( 	$(this), 0.2, {scale:1.1, ease:Power2.easeOut});
		  	t.to( 	$('p', this), 0.2, {y:20, opacity:0, ease:Power3.easeOut});
		  	t.set( 	$('p', this), {y:-20, delay:0.2});
		  	t.to( 	$('p', this), 0.2, {y:0, opacity:1, ease:Power3.easeOut, delay:0.21});
		}).mouseout(function(){
			t.to( 	$(this), 0.6, {scale:1.0, ease:Elastic.easeOut});
		})

		$('.arrow').mouseover(function(){
			cabArrowBounce.pause();
			cabArrowBounce.seek(0);

			//faArrowBounce.pause();
			//faArrowBounce.seek(0);

			t.to( $(this), 0.2, {backgroundPosition : 'center 70%', ease:Power2.easeOut});
		}).mouseout(function(){
			t.to( $(this), 0.4, {backgroundPosition : 'center center', ease:Bounce.easeOut, onComplete:function() { cabArrowBounce.play(); } });
		})

		$('.gameLogo').mouseover(function(){
			//log('over')
			//t.to( 	$('.top', this), 0.2, {scale:1.1, ease:Power2.easeOut});
			//t.to( 	$('.bottom', this), 0.2, {scale:1.15, ease:Power2.easeOut});
			t.to( 	$(this), 0.2, {scale:1.1, ease:Power2.easeOut});
		}).mouseout(function(){
			t.to( 	$(this), 0.2, {scale:1.0, ease:Back.easeOut});
			//t.to( 	$('.top', this), 0.2, {scale:1.0, ease:Power2.easeOut});
			//t.to( 	$('.bottom', this), 0.2, {scale:1.0, ease:Power2.easeOut});
		})

	}

	window.addEventListener('scroll', function(e) {
		//log(window.scrollY);

		if(window.scrollY >= fa_top - headerOffset) {
			t.to($('#fa_arrow'), 0.2, {opacity:1});
			t.to($('#cab_arrow'), 0.2, {opacity:0});
			faArrowBounce.play();

			cabArrowBounce.pause();
			cabArrowBounce.seek(0);
		}

		if(window.scrollY < fa_top - headerOffset) {

			t.to($('#fa_arrow'), 0.2, {opacity:0});
			t.to($('#cab_arrow'), 0.2, {opacity:1});

			cabArrowBounce.play();

			faArrowBounce.pause();
			faArrowBounce.seek(0);
		}

	})

	$('#cab_arrow').click(function(){
		t.to(window, 0.5, {scrollTo:fa_top - headerOffset, ease:Power2.easeOut});
	});

	$('#fa_arrow').click(function(){
		t.to(window, 0.5, {scrollTo:ga_top - headerOffset, ease:Power2.easeOut});
	});






	function reset() {
		_height = window.innerHeight;
		 ga_top = $('#getAirheaded').offset().top;
		 fa_top = $('#floatAway').offset().top;
		 headerOffset = $('#header').height();

		 if (isTouchDevice()) {
		 	$('.game').css({height:window.innerHeight - headerOffset});
		}
	}

	$( window ).resize(function() {
		//reset();
	});

	//window.addEventListener("orientationchange", reset() );

}