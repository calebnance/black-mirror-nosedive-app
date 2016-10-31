angular.module('nosedive', []);

// init
$('.nosedive').height($(window).height()).width($(window).width());
$('.stars').width($(window).width());

// set rating grid array

// turn off touch when swiping with finger
window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function(e) {
	if ($('.rating-area').is(':hidden')) {
		blockMenuHeaderScroll = true;
	}
});

$(window).on('touchend', function(e) {
	blockMenuHeaderScroll = false;
});

$(window).on('touchmove', function(e) {
	if (blockMenuHeaderScroll) {
		e.preventDefault();
	}
});

// swipe all the things!!1
$('.nosedive').swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			console.log('direction');
			console.log(direction);
			console.log('distance');
			console.log(distance);
			console.log('duration');
			console.log(duration);
			console.log('fingerCount');
			console.log(fingerCount);
			console.log('fingerData');
			console.log(fingerData);

			if(direction === 'right') {
				console.log('right');
				$('.fa-star').addClass('star-rated');
			}

			if(direction === 'left') {
				$('.fa-star').removeClass('star-rated');
			}
		},
		threshold: 2,
		fingers: 'all'
	});
