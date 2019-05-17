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
  
  	//log(window.innerWidth);
  	
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

  	//ad.addCustomEvent('GAME STARTED');
  	//ad.addCustomEvent('GAME ENDED');
  	//ad.addCustomEvent('GAME REPLAYED');

	var t = TweenMax;
	var introTl = new TimelineMax({});
	var endTl   = new TimelineMax({});
	var endOutTl = new TimelineMax({});

	//var container = $('.resized.desktop #container');
  	//var container = $('body');
  	var container = $('#gameContainer');
  	//var main  = $('<div>', {id : 'main'	}).css({}).appendTo(container);
  	//var main  = $('<div>', {id : 'main'	}).css({}).appendTo('body');
  	var main  = $('<div>', {id : 'main'	}).css({}).prependTo(container);

  	//$('#bg_hitarea').css({ width : '100%', height : '100%', top : 0, left : 0  }).appendTo(main);

  	//var gameHolder = $('<div>', {id : 'gameHolder'}).css({}).appendTo(main);
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

  	//$('#endframe_bg_hitarea').css({ width : '100%', height : '100%', top : 0, left : 0  }).appendTo(endFrame);

  	//

	var endFrame_logo = $('<div>', {id : 'endFrame_logo'}).css({}).appendTo(endFrame);
  	var endLogo1 = $('<div>', {id : 'endLogo1'}).css({}).appendTo(endFrame_logo);
  	var endLogo2 = $('<div>', {id : 'endLogo2'}).css({}).appendTo(endFrame_logo);
 	var endLogo3 = $('<div>', {id : 'endLogo3'}).css({}).appendTo(endFrame_logo);

	var scoreText = $('<div>', {id : 'scoreText'}).css({}).appendTo(endFrame);
	var subHead = $('<div>', {id : 'subHead'}).css({}).appendTo(endFrame);
	var endCta1 = $('<div id="endCta1" class="cta"><p></p></div>').css({}).appendTo(endFrame);
	var endCta2 = $('<div id="endCta2" class="cta"><p></p></div>').css({}).appendTo(endFrame);
	$('#endCta1 p').html('Play again');
	$('#endCta2 p').html('Find a pack');

  	//$('#cta_findAPack').css({ width : '100%', height : '100%', top : 0, left : 0  }).appendTo(endCta2);
  
  
  	var rotateOverlay = $('<div>', {id:'rotateOverlay'}).css({ width : '100%', height : '100%', 'background-color' : '#00adff', 'background-image' : 'url(rotate_img.png)', 'background-size' : 'cover', 'background-position' : 'center center' ,'z-index' : 200}).appendTo('body');
  
  	//var rotateAlert = $('<div id="rotateAlert">Please rotate your device.</div>').css({   }).appendTo(rotateOverlay);
  
  


	t.set(endFrame, {y:-1500});
    //t.set(main, {opacity:0});
  
  	var c1, c2;
  
  	var mq  = window.matchMedia( '( orientation : portrait )  and ( max-device-width : 767px )' );
	var mql = window.matchMedia( '( min-device-width : 414px ) and ( max-device-width : 896px ) and ( orientation : landscape )' );
  
  	var cardFace1;
  	var cardFace2;
  
  	var playCount = 0;
  
  	
	if( mq.matches ) {
		c1 = 4;
		c2 = 8;
      	//cardFace1 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >'];
      	//cardFace2 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >'];
	} else {
		c1 = 5;
		c2 = 10;
      	//cardFace1 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];
      	//cardFace2 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];
		//c1 = 4;
		//c2 = 8;
	}
  
  	cardFace1 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];
    cardFace2 = ['<img src="img00.jpg" >', '<img src="img01.jpg" >', '<img src="img02.jpg" >', '<img src="img03.jpg" >', '<img src="img04.jpg" >'];
  

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
  	

  	//TIMER STUFF
  	var time = 30;
	var circTime = 0;
	var circRatio = 100 / time;
	var count, circ, timerInit, activeCard;

  	var firstClick = true;

	//$(timerText).html(':' + time);
	$(timerText).html(':00');
	$(timerIcon).html(timerIconSvg);
	t.set($('#circle'), {drawSVG:'0%'});
	t.set(timerIcon, {rotation:'-90deg'});
	t.set(timer, {autoAlpha:0});

  	//shuffle(cardFace1);
  	//shuffle(cardFace2);

  	for (var i = 0; i<c1; i++) {
	  	cardFace0.push(cardFace1[i]);
  	}
  	for (var i = 0; i<c1; i++) {
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

  	function handleGameInit() {
      
      	log(cardFace0);
      
      	//$(gameHolder).off('click');
      	//ad.customEvent('GAME STARTED', true);
      	firstClick = false;
      
     	t.to(cta, 0.2, {autoAlpha:0, scale:0, ease:Power2.easeOut});
  		t.to(logo, 0.2, {autoAlpha:0, scale:0});
  		t.to(timer, 0.3, {autoAlpha:1, ease:Circ.easeOut});
  		t.to(gameTxt, 0.3, {opacity:1, ease:Power2.easeOut})
  		timeTime = 0;
  		timerInit = setInterval(timerCount, 10);
  		t.from($('#innerCircle'), 0.95, {drawSVG:'0%', ease: Power2.easeOut});
  		t.staggerTo($('.cardHolder'), 0.5, {rotationY : '360deg', ease:Power3.easeOut, stagger:{amount:0.2, from:'center'} })
  		
        //$('.cardHolder').on('click', handleCardClick );
    }

  	$(cta).mouseover(function(){
		t.to(cta, 0.2, {scale:1.1, ease:Power2.easeOut});
      	t.to($('#cta p'), 0.2, {y:'-20%', opacity:0, ease:Power3.easeOut});
      	t.set($('#cta p'), {y:'-100%', delay:0.2});
      	t.to($('#cta p'), 0.2, {y:'-50%', opacity:1, ease:Power3.easeOut, delay:0.21});
	}).mouseout(function(){
		t.to(cta, 0.6, {scale:1.0, ease:Elastic.easeOut});
	}).click(function(e) {
		handleGameInit();
  	});

  	//$(gameHolder).on('click', handleGameInit);



  	for (var i = 0; i < c2; i++) {
	  	cardHolder[i] = $('<div>', {id : 'cardHolder' + i, class: 'cardHolder'}).appendTo(gameInner);
	  	frontCards[i] = $('<div>', {id : 'cardFront'  + i, class: 'cardFront' }).appendTo(cardHolder[i]);
	  	backCards[i]  = $('<div>', {id : 'cardBack'   + i, class: 'cardBack'  }).appendTo(cardHolder[i]);
	  	$(cardFace0[i]).appendTo($(backCards[i]));
  	}
	$('.cardHolder .cardFront').mouseover( function(e) {
		if (!$(this).hasClass('matched')) {
			//t.set($(this), { filter : 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.5) )'});
			//t.to($(this), 0.3, {scale:1.03, ease:Power3.easeOut});
		}
	}).mouseout( function(e) {
		//t.set($(this), { filter : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0.0) )'});
		//t.to($(this), 0.6, {scale:1.0, ease:Elastic.easeOut});
	});


	function handleCardClick(e) {

      	if (firstClick === true) {
          //ad.customEvent('GAME STARTED', true);
          t.to(cta, 0.2, {autoAlpha:0, scale:0, ease:Power2.easeOut});
          t.to(logo, 0.2, {autoAlpha:0, scale:0});
          t.to(timer, 0.3, {autoAlpha:1, ease:Circ.easeOut});
          t.to(gameTxt, 0.3, {opacity:1, ease:Power2.easeOut})
          timeTime = 0;
          timerInit = setInterval(timerCount, 10);
          t.from($('#innerCircle'), 0.95, {drawSVG:'0%', ease: Power2.easeOut});
      	  firstClick = false;
        }



		if (!$(this).hasClass('matched')) {
			$(this).addClass('matched');
			t.to($(this).children('.cardFront'), 0.6, { 'transform' :  'rotateY(180deg)', ease:Power2.easeOut});
			t.to($(this).children('.cardBack'),  0.6, { 'transform' :  'rotateY(0deg)',   ease:Power2.easeOut});

			checkCards( $(this) );
		}
	}

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

				if (matched === c1) {
					log('RESET THE CARDS!');


				 	setTimeout( function() { handleReset(); }, 1500 );

					/*
                  	clearInterval(count);
                    setTimeout( function() {
                        handleGameOver();
                        clickedCards = [];
                        clickedCards.length = 0;
                    }, 1500 );
                    */
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
      	if( mq.matches ) {
          if (playCount === 0) {
        	for (var i = 0; i < c2; i++) {
            	if ( cardFace0[i] ===  '<img src="img00.jpg" >') {
                	cardFace0[i] = '<img src="img04.jpg" >'
              	}
          	 
            }
          }
          
         if (playCount === 1) {
           for (var i = 0; i < c2; i++) {
              	if ( cardFace0[i] === '<img src="img04.jpg" >') {
                	cardFace0[i] = '<img src="img00.jpg" >'
              	}
           }
         }
          
        }

		shuffle(cardFace0);
		matched = 0;

		clickedCards = [];
		clickNum = 0;

		clickedCards.length = 0;

		t.staggerTo($('.cardHolder').children('.cardFront'), 0.6, { 'transform' :  'rotateY(0deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );
		t.staggerTo($('.cardHolder').children('.cardBack'),  0.6, { 'transform' :  'rotateY(180deg)', ease:Back.easeOut, stagger:{amount:0.4, from:'end'}} );

      	setTimeout( function() {
      		$('.cardBack').html('');
			$('.cardHolder').removeClass('matched');
			for (var i = 0; i < c2; i++) {
	  			$(cardFace0[i]).appendTo($(backCards[i]));
  			}
          
          	
          
          
        }, 800);
          
        playCount = 1;
	}

	function handleGameOver() {
		log('GAME OVER');

      	//ad.customEvent('GAME ENDED', true);

		$(scoreText).html('Your score: ' + score);

      	if (score === 0) {
			$(subHead).html("Nice try.");
        } else if (score > 0 && score < 5) {
          	$(subHead).html("Well played!");
        } else {
          	$(subHead).html("You're a pro!");
        }

		endTl.add('begin')
		.to(endFrame, 0.3, {y:0, ease:Power3.easeOut})
		//.from(endFrame_logo, 0.6, {y:-20, opacity:0, scale:0, ease:Elastic.easeOut}, '+=0.3')
        .from(endLogo1, 0.6, 			{opacity:0,   scale:0, y:-20, 	ease:Elastic.easeOut}, '+=0.30')
        .from(endLogo2, 0.6, 			{opacity:0,   scale:0, y:-20, 	ease:Elastic.easeOut}, '-=0.45')
        .from(endLogo3, 0.6, 			{opacity:0,   scale:0, y:-20, 	ease:Elastic.easeOut}, '-=0.45')
		.from(scoreText, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.3')
		.from(subHead, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.2')
        .from(endCta1, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.1')
        .from(endCta2, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.35')
        .add('end');

      	setTimeout( function() {

      		//$('#endframe_bg_hitarea').css({ width : '100%', height : '100%', top : 0, left : 0  }).appendTo(endFrame);

        }, 500 );

	}

	function handleReplay() {
		log('REPLAY');

      	//ad.customEvent('GAME REPLAYED', true);

		endOutTl.add('begin')
        .to(endCta1, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut})
        .to(endCta2, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut},  '-=0.30')
        .to(endFrame_logo, 0.3, 	{opacity:0,   scale:0, y:-20, 	ease:Power2.easeOut}, '-=0.25')
		.to(scoreText, 0.4, 		{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.25')
		.to(subHead, 0.4, 			{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.35')
        .to(endFrame, 0.4, 			{autoAlpha:0, y:-500,   		ease:Power3.easeOut},  '-=0.20')
		//
        .set(endFrame_logo, 		{opacity:1,   scale:1, y:0})
        .set(scoreText, 			{opacity:1,   y:'+=100'})
        .set(subHead, 				{opacity:1,   y:'+=100'})
        .set(endFrame, 				{y:-1500, autoAlpha:1})
        .set(endCta1, 				{opacity:1,   scale:1})
        .set(endCta2, 				{opacity:1,   scale:1})
      	.add('end');
      
		if( mq.matches || mql.matches ) {
        	for (var i = 0; i < c2; i++) {
              
              if ( cardFace0[i] ===  '<img src="img00.jpg" >') {
                
                cardFace0[i] = '<img src="img04.jpg" >'
               }
              
            }
        }      
      	
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

		for (var i = 0; i < c2; i++) {
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

  	$('.cardHolder').on('click', handleCardClick);


	introTl.add('begin')
    //.set(main, {opacity:1})
	.staggerFrom($('.cardHolder'), 1.2, {rotationY : '-=270deg', scale:1.0, x:'+=10', opacity:1, ease:Power3.easeOut, stagger:{amount:0.3, from:'end'} }, '+=0.0')
	.from(pack, 0.3, {x:'-=100', opacity:0, ease:Back.easeOut}, '-=0.15')
	.from(logo, 0.6, {scale:0, opacity:0, ease:Elastic.easeOut}, '-=0.25')
	.from(cta, 0.6, {scale:0, opacity:0, ease:Elastic.easeOut}, '-=0.5')
	.add('end');
	
	var rotateElements = $( "div[id*='rotate']" );
	
	TweenMax.set(rotateElements, {autoAlpha:0});
	
	function isTouchDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};
  
	log( isTouchDevice() )
  
	var rotateYourDevice = (function(){
		
		//console.log(Object.values(rotateElements));
	
      function rotate(){
          //console.log(isMobile);
          if (isTouchDevice() === true ) {
          if (Math.abs(window.orientation) === 90) {
              //console.log('MOBILE LANDSCAPE');
              //alert('MOBILE');
              //alert('Landscape');
              //$(rotateElements).css( { display : 'block' } );
              TweenMax.set(rotateElements, {autoAlpha:1});
          } else {
              //console.log('NOT MOBILE  or  MOBILE in PORTRAIT');
              //alert('portrait');
              //$(rotateElements).css( { display : 'none' } );
              TweenMax.set(rotateElements, {autoAlpha:0});
              //$(pack).removeAttr('style');
        	  //$(logo).removeAttr('style');
 			  //$(cta).removeAttr('style');
              //$('.cardHolder').removeAttr('style');
          }
      }
      }
      //window.onorientationchange = rotate;
      window.addEventListener('orientationchange', function() {
          rotate();
          
      });
      return {
          rotate : rotate
      }
	})();
	
	rotateYourDevice.rotate();

    

  	
  
}