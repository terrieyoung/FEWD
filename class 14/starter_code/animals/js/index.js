//Scroll through the images when user clicks on next or back. Stop at the end.
//need to know order of images, which one we are currently on to go forward or backward
$(document).ready(function(){

	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	var i = 0;
//events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

//define reactions to events

	function goToNextAnimal() {
	i++;
		console.log('index : ' + i);

		var nextAnimal = animals[i];
		console.log('animal: ' + nextAnimal);

//reaction to the event

		$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);

	}

	function goToNextAnimal() {
		i--;
		console.log('index : ' + i);

		var previousAnimal = animals[i];
		console.log('animal: ' + previousAnimal);

//reaction to the event

		$('#image-to-vote-on').attr('src', 'images/' - previousAnimal);

	}
	

});