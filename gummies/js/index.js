$(document).ready(function(){
	setUp();
});
function setUp() {
  $.when(
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.1/TweenMax.min.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
	).done(function(){
		console.log('SCRIPTS LOADED');
		//place your code here, the scripts are all loaded
		setTimeout( function() { init(); }, 500);
	});
}

function init() {
	var log = console.log;
	
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

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.random() * (max - min) + min;
	}

	function shuffle(a) {
    	var j, x, i;
			for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
    		}
		return a;
	}

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.random() * (max - min) + min;
	}

	var t = TweenMax;
	var introTl = new TimelineMax({});
	var endTl   = new TimelineMax({});
	var endOutTl = new TimelineMax({});

	//var container = $('.resized.desktop #container');
  	var container = $('body');
  	var container = $('#gameContainer');
  	//var main  = $('<div>', {id : 'main'	}).css({}).appendTo(container);
  	var main  = $('<div>', {id : 'main'	}).css({}).prependTo(container);
  	
  	var gameInner = $('<div>', {id : 'gameInner'}).css({}).appendTo(main);
  	
  	var pack = $('<div>', {id : 'pack'}).css({}).appendTo(main);
  	var cta = $('<div id="cta" class="cta"><p></p></div>').appendTo(main);
	$('#cta p').html('Play now');
	var logo 		= $('<div>', {id : 'logo', 		class : 'logo'}).css({}).appendTo(main);
	var logoMix 	= $('<div>', {id : 'logoMix', 	class : 'logo'}).css({}).appendTo(logo);
	var logoMatch 	= $('<div>', {id : 'logoMatch', class : 'logo'}).css({}).appendTo(logo);
	var logoChew 	= $('<div>', {id : 'logoChew', 	class : 'logo'}).css({}).appendTo(logo);
	var timer = $('<div>', {id : 'timer', 	class : 'timer'}).css({}).appendTo(main);
	var timerIcon = $('<div>', {id : 'timerIcon', 	class : 'timer'}).css({}).appendTo(timer);
	var timerText = $('<div>', {id : 'timerText', 	class : 'timer'}).css({}).appendTo(timer);
	var timerIconSvg = '<svg version="1.1" id="timerIconSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 168 168" style="enable-background:new 0 0 168 168;" xml:space="preserve"> <circle id="innerCircle" style="fill:none;stroke:rgba(255, 255, 255, 0.5);stroke-width:8;stroke-miterlimit:10;" cx="84" cy="84" r="80"/> <circle id="circle" style="fill:none;stroke:#FFFFFF;stroke-width:8;stroke-miterlimit:10;" cx="84" cy="84" r="80"/></svg>';

	var gameTxt = $('<div>', {id : 'gameTxt'}).css({}).appendTo(main);

	var endFrame = $('<div>', {id : 'endFrame'}).css({}).appendTo(main);
	var endFrame_logo = $('<div>', {id : 'endFrame_logo'}).css({}).appendTo(endFrame);
	var scoreText = $('<div>', {id : 'scoreText'}).css({}).appendTo(endFrame);
	var subHead = $('<div>', {id : 'subHead'}).css({}).appendTo(endFrame);
	var endCta1 = $('<div id="endCta1" class="cta"><p></p></div>').css({}).appendTo(endFrame);
	var endCta2 = $('<div id="endCta2" class="cta"><p></p></div>').css({}).appendTo(endFrame);
	$('#endCta1 p').html('Play again');
	$('#endCta2 p').html('Find a pack');

	t.set(endFrame, {y:-5000});

  	var clickNum = 0;
  	var clickedCards = [];
  	var score = 0;
  	var matched = 0;
  	var cardHolder = [];
  	var frontCards = [];
  	var backCards  = [];
  	var cardFace0 = [];
  	//var cardFace1 = [0, 1, 2, 3, 4];
  	//var cardFace2 = [0, 1, 2, 3, 4];
  	var cardFace1 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];
  	var cardFace2 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];

  	//TIMER STUFF

  	var time = 30;

	var circTime = 0;
	var circRatio = 100 / time;
	var count, circ, timerInit, activeCard;
	//$(timerText).html(':' + time);
	$(timerText).html(':00');
	$(timerIcon).html(timerIconSvg);
	t.set($('#circle'), {drawSVG:'0%'});
	t.set(timerIcon, {rotation:'-90deg'});
	t.set(timer, {autoAlpha:0, scale:0});

  	shuffle(cardFace1);
  	shuffle(cardFace2);

  	for (var i = 0; i<5; i++) {
	  	cardFace0.push(cardFace1[i]);
  	}
  	for (var i = 0; i<5; i++) {
	  	cardFace0.push(cardFace2[i]);
  	}
  	shuffle(cardFace0);
  	//log(cardFace0);

	function timerCount() {
		timeTime += 1;
		$(timerText).html(':' + timeTime );
		if (timeTime >= time ) {
			timeTime = time;
			clearInterval(timerInit);
			handleTimer();
		}
	}

  	$(cta).mouseover(function(){
		t.to(cta, 0.2, {scale:1.1, ease:Power2.easeOut});
      	t.to($('#cta p'), 0.2, {y:'-20%', opacity:0, ease:Power3.easeOut});
      	t.set($('#cta p'), {y:'-100%', delay:0.2});
      	t.to($('#cta p'), 0.2, {y:'-50%', opacity:1, ease:Power3.easeOut, delay:0.21});
	}).mouseout(function(){
		t.to(cta, 0.6, {scale:1.0, ease:Elastic.easeOut});
	}).click(function(e) {
	  	t.to(this, 0.2, {autoAlpha:0, scale:0, ease:Power2.easeOut});
  		t.to(logo, 0.2, {autoAlpha:0, scale:0});
  		t.to(timer, 0.3, {autoAlpha:1, scale:1, ease:Circ.easeOut});
  		t.to(gameTxt, 0.3, {opacity:1, ease:Power2.easeOut})

  		timeTime = 0;
  		timerInit = setInterval(timerCount, 10);

  		t.from($('#innerCircle'), 0.95, {drawSVG:'0%', ease: Power2.easeOut});
  		t.staggerTo($('.cardHolder'), 0.5, {rotationY : '360deg', ease:Power3.easeOut, stagger:{amount:0.2, from:'center'} })

  		$('.cardHolder').on('click', handleCardClick );

  	});

  	for (var i = 0; i < 10; i++) {
	  	cardHolder[i] = $('<div>', {id : 'cardHolder' + i, class: 'cardHolder'}).appendTo(gameInner);
	  	frontCards[i] = $('<div>', {id : 'cardFront'  + i, class: 'cardFront' }).appendTo(cardHolder[i]);
	  	backCards[i]  = $('<div>', {id : 'cardBack'   + i, class: 'cardBack'  }).appendTo(cardHolder[i]);
	  	$(cardFace0[i]).appendTo($(backCards[i]));
  	}
	$('.cardHolder .cardFront').mouseover( function(e) {
		if (!$(this).hasClass('matched')) {
			t.set($(this), { filter : 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.5) )'});
			t.to($(this), 0.3, {scale:1.03, ease:Power3.easeOut});
		}
	}).mouseout( function(e) {
		t.set($(this), { filter : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0.0) )'});
		t.to($(this), 0.6, {scale:1.0, ease:Elastic.easeOut});
	});


	function handleCardClick(e) {

		if (!$(this).hasClass('matched')) {
			$(this).addClass('matched');
			t.to($(this).children('.cardFront'), 0.6, { 'transform' :  'rotateY(180deg)', ease:Back.easeOut});
			t.to($(this).children('.cardBack'),  0.6, { 'transform' :  'rotateY(0deg)',   ease:Back.easeOut});

			checkCards( $(this) );
		}
	}

	var gummies;
	var tl0 = new TimelineMax();
	var tl1 = new TimelineMax();

	function handleBounce(theCards) {

		tl0.to(theCards[0], 0.4, {rotation:'+='+random(-5, 5) + 'deg', scale:1.2, filter : 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8) )', zIndex:900, ease:Power3.easeOut}, '+=0.3')
		   .to(theCards[0], 0.6, {rotation:0, scale:1.0, filter : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0.0) )', 'z-index':0, ease:Elastic.easeOut});

		tl1.to(theCards[1], 0.4, {rotation:'+='+random(-5, 5) + 'deg', scale:1.2, filter : 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8) )', zIndex:900, ease:Power3.easeOut}, '+=0.35')
		   .to(theCards[1], 0.6, {rotation:0, scale:1.0, filter : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0.0) )', 'z-index':0, ease:Elastic.easeOut});

	}


	function checkCards(activeCard) {

		clickedCards.push(activeCard);
		clickNum += 1;

		log(clickedCards[0].width())

		if (clickNum === 2) {
			clickNum = 0;
			//log('CHECK FOR MATCH');
			if (  clickedCards[0].children('.cardBack').html() ===  clickedCards[1].children('.cardBack').html() ) {

				handleBounce(clickedCards);

				$(gameTxt).css({'background-image' : 'url(gameTxt_03.png)' });

				//log('MATCH!');
				score += 1;
				matched += 1;
				//clickedCards[0].addClass('matched');
				//clickedCards[1].addClass('matched');
				clickedCards = [];
				clickedCards.length = 0;
				//clickNum = 0;

				if (matched === 5) {
					log('RESET THE CARDS!');
					clearInterval(count);

					setTimeout( function() {
						handleGameOver();
						clickedCards = [];
						clickedCards.length = 0;
					}, 1500 );
				}
			} else {
				//log('BUMMER - RESET CARDS');
				$(gameTxt).css({'background-image' : 'url(gameTxt_02.png)' });
				$( '.cardHolder' ).off( 'click' );
				clickedCards[0].removeClass('matched');
				clickedCards[1].removeClass('matched');
				//clickNum = 0;
				setTimeout( function() {
					t.to( clickedCards[0].children('.cardFront'), 0.3, { 'transform' :  'rotateY(0deg)'});
					t.to( clickedCards[0].children('.cardBack'),  0.3, { 'transform' :  'rotateY(180deg)'});
					t.to( clickedCards[1].children('.cardFront'), 0.3, { 'transform' :  'rotateY(0deg)'});
					t.to( clickedCards[1].children('.cardBack'),  0.3, { 'transform' :  'rotateY(180deg)'});
					clickedCards = [];
					clickedCards.length = 0;

					$('.cardHolder').on('click', handleCardClick );
				}, 1000);
			}
		}
	}

	function handleReset() {

		shuffle(cardFace0);
		matched = 0;

		clickedCards = [];
		clickNum = 0;

		clickedCards.length = 0;

		$('.cardBack').html('');
		$('.cardHolder').removeClass('matched');
		t.staggerTo($('.cardHolder').children('.cardFront'), 0.6, { 'transform' :  'rotateY(0deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );
		t.staggerTo($('.cardHolder').children('.cardBack'),  0.6, { 'transform' :  'rotateY(180deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );

		for (var i = 0; i < 10; i++) {
	  		$(cardFace0[i]).appendTo($(backCards[i]));
  		}
	}

	function handleGameOver() {
		log('GAME OVER');

		$(scoreText).html('Your score: ' + score);

		endTl.add('begin')
		.to(endFrame, 0.3, {y:0, ease:Power3.easeOut})
		.from(endFrame_logo, 0.6, {y:-20, opacity:0, scale:0, ease:Elastic.easeOut}, '+=0.3')
		.from(scoreText, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.3')
		.from(subHead, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.2')
        .from(endCta1, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.1')
        .from(endCta2, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.35')
        .add('end');

	}

	function handleReplay() {
		log('REPLAY');

		endOutTl.add('begin')
        .to(endCta1, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut})
        .to(endCta2, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut},  '-=0.30')
        .to(endFrame_logo, 0.3, 	{opacity:0,   scale:0, y:-20, 	ease:Elastic.easeOut}, '-=0.25')
		.to(scoreText, 0.4, 		{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.25')
		.to(subHead, 0.4, 			{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.35')
        .to(endFrame, 0.4, 			{autoAlpha:0, y:-500,   		ease:Power3.easeOut},  '-=0.20')
		//
        .set(endFrame_logo, 		{opacity:1,   scale:1, y:0})
        .set(scoreText, 			{opacity:1,   y:'+=100'})
        .set(subHead, 				{opacity:1,   y:'+=100'})
        .set(endFrame, 				{y:-500, autoAlpha:1})
        .set(endCta1, 				{opacity:1,   scale:1})
        .set(endCta2, 				{opacity:1,   scale:1})
      	.add('end');

      	timeTime = 0;
  		time = 30;
  		circTime = 0;
  		score = 0;
  		shuffle(cardFace0);
		matched = 0;
		clickedCards = [];
		clickNum = 0;

		clickedCards.length = 0;

  		t.to($('#circle'), 0.95, {drawSVG:'0%', ease: Power2.easeOut});

		$('.cardBack').html('');
		$('.cardHolder').removeClass('matched');
		t.staggerTo($('.cardHolder').children('.cardFront'), 0.6, { 'transform' :  'rotateY(0deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );
		t.staggerTo($('.cardHolder').children('.cardBack'),  0.6, { 'transform' :  'rotateY(180deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );

		for (var i = 0; i < 10; i++) {
	  		$(cardFace0[i]).appendTo($(backCards[i]));
  		}

  		setTimeout( function() { timerInit = setInterval(timerCount, 10); }, 1000);

	}

	$(endCta1).mouseover(function(){
		t.to(endCta1, 0.2, {scale:1.1, ease:Power2.easeOut});
      	t.to($('#endCta1 p'), 0.2, {y:'-20%', opacity:0, ease:Power3.easeOut});
      	t.set($('#endCta1 p'), {y:'-100%', delay:0.2});
      	t.to($('#endCta1 p'), 0.2, {y:'-50%', opacity:1, ease:Power3.easeOut, delay:0.21});
	}).mouseout(function(){
		t.to(endCta1, 0.6, {scale:1.0, ease:Elastic.easeOut});
	}).click(function(){
        handleReplay();
    });

  	$(endCta2).mouseover(function(){
		t.to(endCta2, 0.2, {scale:1.1, ease:Power2.easeOut});
      	t.to($('#endCta2 p'), 0.2, {y:'-20%', opacity:0, ease:Power3.easeOut});
      	t.set($('#endCta2 p'), {y:'-100%', delay:0.2});
      	t.to($('#endCta2 p'), 0.2, {y:'-50%', opacity:1, ease:Power3.easeOut, delay:0.21});
	}).mouseout(function(){
		t.to(endCta2, 0.6, {scale:1.0, ease:Elastic.easeOut});
	}).click(function(e){
      	e.preventDefault();
    });

	function handleTimer() {
		count = setInterval(countDown, 1000);
		function countDown() {
			time -= 1;
			circTime += 1;
			circ = circRatio * circTime;
			t.set($('#circle'), {drawSVG:circ + '%'});
			if (time >= 10) {
				$(timerText).html(':' + time );
			} else {
				$(timerText).html(':0' + time );
			}
			//log(time);
			if (time <= 0) {
				clearInterval(count);
				//time = 30;
				//circTime = 0;
				handleGameOver();
			}
		}
	}

	introTl.add('begin')
	.staggerFrom($('.cardHolder'), 1.2, {rotationY : '-=270deg', scale:1.0, x:'+=10', opacity:1, ease:Power3.easeOut, stagger:{amount:0.3, from:'end'} }, '+=0.3')
	.from(pack, 0.3, {x:'-=100', opacity:0, ease:Back.easeOut}, '-=1.15')
	.from(logo, 0.6, {scale:0, opacity:0, ease:Elastic.easeOut}, '-=0.25')
	.from(cta, 0.6, {scale:0, opacity:0, ease:Elastic.easeOut}, '-=0.5')
	.add('end');
}
































