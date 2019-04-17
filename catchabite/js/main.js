$(document).ready(function(){
	//init();
	handleHeader();
});


function handleHeader() {


	var hamburger = $('#hamburger');

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
}