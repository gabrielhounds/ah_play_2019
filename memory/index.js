$(document).ready(function(){
	setUp();
});

function setUp() {
  $.when(
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.1/TweenMax.min.js" ),
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.12/howler.min.js" ),
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
	//log('init');

  	//ad.addCustomEvent('GAME STARTED');
  	//ad.addCustomEvent('GAME ENDED');
  	//ad.addCustomEvent('GAME REPLAYED');

  	//alert(window.innerWidth);
  	
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

	var t = TweenMax;

	var introTl 	= new TimelineMax({ paused : false });
	var endTl 		= new TimelineMax({ paused : false });
  	var endOutTl 	= new TimelineMax({ paused : false });
	var padTl 		= new TimelineMax({ paused : true });
	var padBgTl 	= new TimelineMax({ paused : true });

  	//var container = $('.resized.desktop #container');
  	//var container = $('body');
  	var container = $('#gameContainer');

	var main  = $('<div>', {id : 'main'	}).css({}).appendTo(container);
	var left  = $('<div>', {id : 'left'	}).css({}).appendTo(main);

	var cta   = $('<div id="cta" class="cta"><p></p></div>').appendTo(left);
	$('#cta p').html('Play now');

	var ah_logo   = $('<div>', {id : 'ah_logo' }).css({}).appendTo(left);
	var instructions   = $('<div>', {id : 'instructions' }).css({}).appendTo(left);
	$(instructions).html('See if you can remember the pattern.');

	var candy = $('<div>', {id : 'candy'}).css({}).appendTo(main);

	var pads = $('<div>', {id : 'pads'	}).css({}).appendTo(main);

	var pad1Bg = $('<div>', {id : 'pad1Bg' , class : 'padBg' }).css({}).appendTo(pads);
	var pad1 = $('<div>', {id : 'pad1' , class : 'pad' }).css({}).appendTo(pads);

	var pad2Bg = $('<div>', {id : 'pad2Bg' , class : 'padBg' }).css({}).appendTo(pads);
	var pad2 = $('<div>', {id : 'pad2' , class : 'pad' }).css({}).appendTo(pads);

	var pad3Bg = $('<div>', {id : 'pad3Bg' , class : 'padBg' }).css({}).appendTo(pads);
	var pad3 = $('<div>', {id : 'pad3' , class : 'pad' }).css({}).appendTo(pads);

	var pad4Bg = $('<div>', {id : 'pad4Bg' , class : 'padBg' }).css({}).appendTo(pads);
	var pad4 = $('<div>', {id : 'pad4' , class : 'pad' }).css({}).appendTo(pads);

  	var alertText = $('<div>', {id : 'alertText' }).css({}).appendTo(pads);
  	//$(alertText).html('nice job!');

	var logo  = $('<div>', {id : 'logo' }).css({}).appendTo(pads);

	var endFrame = $('<div>', {id : 'endFrame' }).css({}).appendTo(main);
  	$('#endframe_bg_hitarea').css({ width : '100%', height : '100%', top : 0, left : 0, 'z-index' : 0}).appendTo(endFrame);

  	var endFrame_logo = $('<div>', {id : 'endFrame_logo' }).css({}).appendTo(endFrame);
	var scoreText = $('<div>', {id : 'scoreText' }).css({}).appendTo(endFrame);
	var subHead = $('<div>', {id : 'subHead' }).css({}).appendTo(endFrame);

  	var endCta1 = $('<div id="endCta1" class="cta"><p></p></div>').css({}).appendTo(endFrame);
  	var endCta2 = $('<div id="endCta2" class="cta"><p></p></div>').css({}).appendTo(endFrame);
  	$('#endCta1 p').html('Play again');
  	$('#endCta2 p').html('Find near you');

  	$('#cta_findNearYou_endFrame').css({ width : '100%', height : '100%', top : 0, left : 0 }).appendTo(endCta2);
  	$('#intro_bg_hitarea').css({ width : '100%', height : '100%', top : 0, left : 0 }).appendTo(left);

	var ahLogo_endFrame = $('<div>', {id : 'ahLogo_endFrame' }).css({}).appendTo(endFrame);

	t.set(endFrame, {autoAlpha:0});

	var padClick = [];

  	//var alerts = ['Doing great!', 'Fantastic!', 'Great job!', 'Excellent!', 'Perfect!', 'Outstanding!'];
  	var alerts = ['alert_00.png', 'alert_01.png', 'alert_02.png', 'alert_03.png'];


	function initAudio() {
        beep1 = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/beep_1.mp3'],
            volume: .5
        });
        beep2 = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/beep_2.mp3'],
            volume: .5
        });
        beep3 = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/beep_3.mp3'],
            volume: .5
        });
        beep4 = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/beep_4.mp3'],
            volume: .5
        });
        loseSound = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/lose_beep.mp3'],
            volume: .5
        });
        overSound = new Howl({
            src: ['https://ops-cdn.undertone.com/clients/Airheads/sounds/over-sound.mp3'],
            volume: .5
        });

        var audioCount = 0;

        function updateAudioProgress() {
            audioCount += 1;

            if (audioCount === 5) {
              	//log('AUDIO LOADED');
                setTimeout(function() { }, 500);
            }
        }

        beep1.once("load", updateAudioProgress());
        beep2.once("load", updateAudioProgress());
        beep3.once("load", updateAudioProgress());
        beep4.once("load", updateAudioProgress());
        loseSound.once("load", updateAudioProgress());
    }

    introTl.add('begin')
    .staggerFrom('.padBg', 0.4, {x:'+=100', opacity:0, ease:Expo.easeInOut, stagger:{amount:0.3, from:4}})
    .from(candy, 0.2, {y:'-=20', x:'-=20', opacity:0, ease:Circ.easeOut}, '-=0.3')
    .from(logo, 0.6, {scale:0, y:60, ease:Elastic.easeOut}, '-=0.1')
    .from(ah_logo, 0.6, {scale:0, y:60, opacity:0, ease:Elastic.easeOut}, '-=0.5')
    .from(cta, 0.6, {scale:0, y:'+=20', opacity:0, ease:Elastic.easeOut}, '-=0.55')
    .from(instructions, 0.6, {scale:0, y:'+=20', opacity:0, ease:Elastic.easeOut}, '-=0.55')

	for (var i = 0; i < 99; i++) {

		padClick.push( $( '#pad' + Math.ceil(random(0, 4)) ) );

      	if ( i > 0  && i < 10 ) {
        	//log(padClick[i][0]);
        	//log(padClick[i-1][0]);



			// THIS IS A LITTLE TEST TO ATTEMPT TO PREVENT REPETITION
          	if ( padClick[i][0] === padClick[i-1][0] ) {
              	//log( padClick[i-1][0].id.substring(3,4) );

              	/*if ( padClick[i-1][0].id.substring(3,4) === 1 ) {
                  padClick[i] = $( '#pad2' );
                } else if ( padClick[i-1][0].id.substring(3,4) === 2 ) {
                  padClick[i] = $( '#pad3' );
                } else if ( padClick[i-1][0].id.substring(3,4) === 3 ) {
                  padClick[i] = $( '#pad4' );
                } else if ( padClick[i-1][0].id.substring(3,4) === 4 ) {
                  padClick[i] = $( '#pad1' );
                }*/
            	//log('TWO IN A ROW');
              	padClick[i] = $( '#pad' + Math.ceil(random(0, 4)) );
            }
        }
      	//log(padClick[i]);
	}

	var j = 0;
	var z = 1;

	var score = 0;

	var clicked;
	var nextPad;

  	var unPlayed = true;
  	var playable = false;

	function initGame() {
		$('.pad').click( function(e) {

			// Just keep people from clicking too early.
			if (playable === true) {

				clicked = e.target.id.toString();
				nextPad = padClick[j][0].id;

				t.to(e.target, 0.2, {opacity:1});
				t.to(e.target, 0.2, {opacity:0, delay:0.2});

				t.to($(this).prev(), 0.2, {webkitFilter: 'brightness(1.25)', filter: 'brightness(1.25)'});
				t.to($(this).prev(), 0.2, {webkitFilter: 'brightness(1.0)', filter: 'brightness(1.0)', delay:0.2});

				if ( clicked === nextPad ) {
					if (j === z - 1) {
						if (z === padClick.length) {
							// THEY BEAT THE GAME!!! This user is exceptional.
							$('.pad').off( 'click' );
							score += 1;
							setTimeout( function() {
								handleGameOver();
								overSound.play();
							}, 500);
						} else {
							// they got the sequence right. Show a affirming message, update the score and play the next sequence.
							//$(alertText).html( alerts[ Math.round( random(0, 5) ) ] );
							$(alertText).css({ 'background-image' : 'url(' + alerts[ Math.round(random(0, 3)) ] + ')' });
							t.set(alertText, {opacity:1});
							t.from(alertText, 0.8, {opacity:0, y:'-=10', scale:0, ease:Elastic.easeOut, delay:0.2});
							t.to(alertText, 0.3, {opacity:0, y:'+=40', ease:Power3.easeOut, delay:1.25});
							t.set(alertText, {y:'-=40', delay:2});

							playable = false;

							setTimeout( function() {   playNext(); }, 1500);
							z += 1;
							j = 0;
							score += 1;
						}
					} else {
						// Advance to the next block in the sequence.
						j += 1;
					}

					// Handle the beeps.
					if ( clicked === 'pad1' ) {
						beep1.play();
					} else if ( clicked === 'pad2' ) {
						beep2.play();
					} else if ( clicked === 'pad3' ) {
						beep3.play();
					} else if ( clicked === 'pad4' ) {
						beep4.play();
					}

				} else {
					// they made a mistake - the game is over.
					loseSound.play();
					$('.pad').off( 'click' );
					padTl.stop();
					padBgTl.stop();
					playable = false;
					setTimeout( function() {
						handleGameOver();
						overSound.play();
					}, 500);

				}
			} else {
				//log('CANNOT CLICK NOW')
			}
		});
	}

	function playNext() {
    	for (var i = 0; i < z; i++ ) {

			// The autoplaying is handeled by a GSAP timeline

          	padTl.staggerTo( $(padClick[i]), 0.2, {opacity:1, onStart:handleBeep, onStartParams:[padClick[i][0].id]}, 0.5)
			.to( $(padClick[i]), 0.2, {opacity:0})
          	.addCallback( function() { playable = true; })

          	padBgTl.staggerTo( $(padClick[i]).prev(), 0.2, {webkitFilter: 'brightness(1.35)', filter: 'brightness(1.35)'}, 0.5)
			.to( $(padClick[i]).prev(), 0.2, {webkitFilter: 'brightness(1.0)', filter: 'brightness(1.0)'});
		}

		padTl.play();
		padBgTl.play();

		// autoplaying beeps
		function handleBeep(p) {
			switch (p) {
				case 'pad1':
					beep1.play();
					break;
				case 'pad2':
					beep2.play();
					break;
				case 'pad3':
					beep3.play();
					break;
				case 'pad4':
					beep4.play();
					break;
			}
		}
	}

	$(cta).mouseover(function(){

		t.to(cta, 0.2, {scale:1.1, ease:Power2.easeOut});
      	t.to($('#cta p'), 0.2, {y:'-20%', opacity:0, ease:Power3.easeOut});
      	t.set($('#cta p'), {y:'-100%', delay:0.2});
      	t.to($('#cta p'), 0.2, {y:'-50%', opacity:1, ease:Power3.easeOut, delay:0.21});

	}).mouseout(function(){
		t.to(cta, 0.6, {scale:1.0, ease:Elastic.easeOut});
	}).click(function(){
        if (unPlayed === true) {
			//ad.customEvent('GAME STARTED', true);
			initAudio();
			initGame();
			t.to($(logo), 0.3, {autoAlpha:0, y:'+=20', ease:Power3.easeOut});
			//$(alertText).html('Ready?');
			//setTimeout( function() { $(alertText).html('Go!'); }, 900);
			t.set(alertText, {opacity:1});
			t.from(alertText, 0.8, {opacity:0, y:'-=10', scale:0, ease:Elastic.easeOut, delay:0.2});
			t.to(alertText, 0.3, {opacity:0, y:'+=40', ease:Power2.easeOut, delay:1.3});
			t.set(alertText, {y:'-=40', delay:1.5});
			setTimeout( function() {
				playNext();
				t.to( $('#cta p'), 0.2, {opacity:0, y:'+=10', ease:Power3.easeOut});
				t.set( $('#cta p'), {opacity:0, y:'-=20', delay:0.2, onComplete: function() { $('#cta p').html('Find near you'); }});
				t.to( $('#cta p'), 0.2, {opacity:1, y:0, ease:Power2.easeOut, delay:0.21});
				$('#cta_findNearYou_intro').css({ width : '100%', height : '100%', top : 0, left : 0 }).appendTo(cta);
					unPlayed = false;
			}, 1500);
		} else {
			//log('FIND NEAR YOU');
			window.open("https://airheads.com/product-locator","_self");
			e.preventDefault();
		}
	});

	function handleGameOver() {
      	//ad.customEvent('GAME ENDED', true);
		t.set(endFrame, {autoAlpha:1});
		$(scoreText).html('Your score: ' + score);
		endTl.add('begin')
		.from(endFrame, 0.4, {y:-500, ease:Power3.easeOut})
		.from(endFrame_logo, 0.6, {y:-20, opacity:0, scale:0, ease:Elastic.easeOut})
		.from(ahLogo_endFrame, 0.6, {opacity:0, scale:0, ease:Elastic.easeOut}, '-=0.5')
		.from(scoreText, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.5')
		.from(subHead, 0.4, {opacity:0, y:'+=20', ease:Power3.easeOut}, '-=0.35')
        .from(endCta1, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.35')
        .from(endCta2, 0.5, {opacity:0, scale:0.5, ease:Elastic.easeOut}, '-=0.35')
        .add('end');
	}

  	function handleReplay() {

      	//ad.customEvent('GAME REPLAYED', true);

    	padClick = [];

      	/*for (var i = 0; i < 99; i++) {
			padClick.push( $( '#pad' + Math.ceil(random(0, 4)) ) );
		}*/

      	for (var i = 0; i < 99; i++) {

			padClick.push( $( '#pad' + Math.ceil(random(0, 4)) ) );

            if ( i > 0  && i < 10 ) {
                //log(padClick[i][0]);
                //log(padClick[i-1][0]);

                if ( padClick[i][0] === padClick[i-1][0] ) {
                    //log('TWO IN A ROW');
                    padClick[i] = $( '#pad' + Math.ceil(random(0, 4)) );
                }
            }
		}

      	j = 0;
		z = 1;

      	score = 0;
      	//t.set(endFrame, {autoAlpha : 0});
      	endOutTl.add('begin')
        .to(endCta1, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut})
        .to(endCta2, 0.3, 			{opacity:0,   scale:0, 			ease:Power2.easeOut},  '-=0.30')
        .to(endFrame_logo, 0.3, 	{opacity:0,   scale:0, y:-20, 	ease:Elastic.easeOut}, '-=0.25')
		.to(ahLogo_endFrame, 0.3, 	{opacity:0,   scale:0,  		ease:Elastic.easeOut}, '-=0.25')
		.to(scoreText, 0.4, 		{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.25')
		.to(subHead, 0.4, 			{opacity:0,   y:'-=100', 		ease:Power3.easeOut},  '-=0.35')
        .to(endFrame, 0.4, 			{autoAlpha:0, y:-500,   		ease:Power3.easeOut},  '-=0.20')
        .set(endFrame_logo, 		{opacity:1,   scale:1, y:0})
      	.set(ahLogo_endFrame, 		{opacity:1,   scale:1})
        .set(scoreText, 			{opacity:1,   y:'+=100'})
        .set(subHead, 				{opacity:1,   y:'+=100'})
        .set(endFrame, 				{autoAlpha:0, y:0})
        .set(endCta1, 				{opacity:1,   scale:1})
        .set(endCta2, 				{opacity:1,   scale:1})
      	.add('end');

      	padTl 		= new TimelineMax({ paused : true });
		padBgTl 	= new TimelineMax({ paused : true });
      	initGame();

      	//$(alertText).html('Ready?');
      	//setTimeout( function() { $(alertText).html('Go!'); }, 1000);
      	$(alertText).css({ 'background-image' : 'url(alert_ready.png)' });
        t.set(alertText, {opacity:1});
        t.from(alertText, 0.8, {opacity:0, y:'-=10', scale:0, ease:Elastic.easeOut, delay:0.4});
		t.to(alertText, 0.3, {opacity:0, y:'+=40', ease:Power2.easeOut, delay:1.9});
        t.set(alertText, {y:'-=40', delay:2.3});

      	setTimeout( function() {
        	playNext();
        }, 2500);
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
		window.open("https://airheads.com/product-locator","_self");
      	e.preventDefault();      	
    });

	$( window ).resize(function() {
		//$(left).children().removeAttr('style');
		$('#left div').removeAttr('style');
		$('#endFrame div').removeAttr('style');
		if (unPlayed === true) {
			$(logo).removeAttr('style');
		}
		//t.set(cta, {scale:1});


		//$(main).children().removeAttr('style');
		//t.set(endFrame, {autoAlpha:0});
	});


	window.addEventListener( 'orientationchange', function() {
		//$(left).children().removeAttr('style');
		$('#left div').removeAttr('style');
		$('#endFrame div').removeAttr('style');
		if (unPlayed === true) {
			$(logo).removeAttr('style');
		}
		//t.set(cta, {scale:1});

   		//$(main).children().removeAttr('style');
   		//t.set(endFrame, {autoAlpha:0});
	}, false);

  	$(document).on('adStateChange', function () {

      //nsole.log("document.on adStateChange fired");
      //nsole.log("adStateChange is: " + mraid.getState());

      if (mraid.getState() === 'default') {
      	if (unPlayed === false) {
          	Howler.volume(0.0);
          	$('.pad').off( 'click' );
            padTl.stop();
          	padBgTl.stop();
          	handleGameOver()
      	}
      }

      if (mraid.getState() === 'resized') {
       	Howler.volume(0.5);
      	if(unPlayed === false) {
        	//handleReplay();
          	//handleGameOver()
      	}
      }
    });

  	//mraid.setAutoClose(15 * 1000);
}