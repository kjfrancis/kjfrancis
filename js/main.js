// When the user mouse over the #projects tab
	// Show subNav
$('#projects').mouseenter(showDropDown);

$('.dropdown-wrapper').mouseleave(hideDropDown);

function showDropDown () {
	$('#subNav').fadeIn(100);
}
	
function hideDropDown () {
	$('#subNav').fadeOut(500);
}


// When the user clicks on .thumbNails img
	// The selected image will show on the right without moving the thumbnail
	$('.thumbNails img').on('click', function (e) {
		e.preventDefault();

	// Get the src attr from 'this' and store in var imageSrc
		var imageSrc = $(this).attr('src');
	// Find the element with the id cuurentImage and replace the src with imageSrc
		console.log(imageSrc);
		$('#currentImage').attr('src', imageSrc);
	});



