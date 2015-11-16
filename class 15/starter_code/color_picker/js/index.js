$(document).ready(function){

	$('#grayButton').click(switchGray);
	$('#whiteButton').click(switchWhite);
	$('#blueButton').click(switchBlue);
	$('#yellowButton').click(switchYellow);

		function switchGray() {
		  $('body').attr('class', 'gray');
		}

		function switchWhite() {
		  $('body').attr('class', 'white');
		}

		function switchBlue() {
		  $('body').attr('class', 'blue');
		}

		function switchYellow() {
		  $('body').attr('class', 'yellow');
	});
});

/*new code*/
$(document).ready(function){
	$('li').click(function(){
		var buttonClassName = $(this).css('class'); /*what is the background color?*/
		$('body').attr('class', buttonClassName);
	});
});