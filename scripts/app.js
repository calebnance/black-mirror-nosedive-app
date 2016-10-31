angular.module('nosedive', []);

// init
var height = $(window).height();
var width = $(window).width();
$('.nosedive').height(height);
// $('.stars').width($(window).width());

// set rating grid array
var ratingGrid = [];
var ratioRatin = width / 5;
for(var i=1; i <= 5; i++) {
	ratingGrid.push(ratioRatin * (i - 1));
}

console.log(ratingGrid);

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

// on star click
$('[data-rate]').on('click', function(e){
	updateRating($(this).attr('data-rate'));
});

// swipe all the things!!1
$('.nosedive').swipe({
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction === 'right') {
			var rating = 0;
			for(var r=0; r < 5; r++) {
				if(ratingGrid[r] <= distance) {
					rating = r + 1;
				}
			}
			updateRating(rating);
		}

		if(direction === 'left') {
			$('.fa-star').removeClass('star-rated');
		}
	},
	threshold: 2,
	fingers: 'all'
});

// functions
function updateRating(rating) {
	console.log(rating);
	$('.fa-star').removeClass('star-rated');
	for(var s=1; s <= rating; s++) {
		$('[data-rate="' + s + '"]').addClass('star-rated');
	}
}
