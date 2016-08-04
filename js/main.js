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