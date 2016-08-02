// When the user mouse over the #projects tab
	// Show subNav
$('#projects').mouseenter(showDropDown);

$('#subNav').mouseleave(hideDropDown);

function showDropDown () {
	$('#subNav').fadeIn(100);
}
	
function hideDropDown () {
	$('#subNav').fadeOut(500);
}