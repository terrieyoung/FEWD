//Implement the red light using jQuery. Don't forget to add the script tags
$(document).ready(function() {

	function illuminateStopLightRed() {
		clearLights();
		$('#stopLight').css('background-color', 'red');
	}

	function illuminateSlowLightYellow() {
		clearLights();
		$('#slowLight').css('background-color', 'yellow');
	}

	function illuminateGoLightGreen() {
		clearLights();
		$('#goLight').css('background-color', 'green');
	}

	function clearLights() {
		$('.bulb').css('background-color', 'black');
	}

	// Code goes here!
	$('#stopButton').click(illuminateStopLightRed);

	$('#slowButton').click(illuminateSlowLightYellow);

	$('#goButton').click(illuminateGoLightGreen);



});