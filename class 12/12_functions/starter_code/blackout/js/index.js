$(document).ready (function() {
	//setting up a variable to store whether the lights are on or off
	var lightsOn === 'true';

	$('#light_switch').click(toggleLights;
	
	function toggleLights(){
		//test to see if the lights are on
		if(lightsOn === 'true'){

			//if yes, change background color to black
			$('body').css('background', 'black');

			//update current state to 'the lights are off'
			lightsOn = 'false';
		}
			//test to see if lights are off
		else {
			//if they are, change the background to white
			$('body').css('background', 'white');
			//updating the state to 'the lights are on'
			lightsOn = 'true';
		}	
	}
)};

