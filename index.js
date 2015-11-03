$(document).ready(function () {
	$('#five').click(function () {
		$('#response').html(randNo(5));
	});
	$('#ten').click(function () {
		$('#response').html(randNo(10));
	});
	$('#fifteen').click(function () {
		$('#response').html(randNo(15));
	});
});

function randNo(max) {
	return Math.floor((Math.random() * max) + 1);
}