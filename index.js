$(document).ready(function () {
	$('#five').click(function (e) {
		e.preventDefault();
		$('#response').html(randNo(5));
	});
	$('#ten').click(function (e) {
		e.preventDefault();
		$('#response').html(randNo(10));
	});
	$('#fifteen').click(function (e) {
		e.preventDefault();
		$('#response').html(randNo(15));
	});
});

function randNo(max) {
	return Math.floor((Math.random() * max) + 1);
}