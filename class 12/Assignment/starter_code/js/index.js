/***********- 

Call ```$.val()``` on inputs to get the string value of your user's input
- Store user input in ```var city```
- Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
- Create ```if / else if / else``` conditionals to control the flow of your application
- Write at least six different lines of pseudocode and display them inline as JavaScript comments
- Prevent a form submission using the ```event.preventDefault()``` function
- Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
- Get the first element from an attribute name using ```$.attr()```
- Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
- If a user submits:

  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
  - "Austin" or "ATX" make the background of the page austin.jpg
  - "Sydney" or "SYD" make the background of the page sydney.jpg

Take a look at what your final product should look like before and after:
*********/
$(document).ready (function() {

  var city = 'nyc';
         
  var city === 'true';

  $('#submit-btn').click(toggleCity);

  function toggleCity(){
    if (city === 'true'){
      $('body').css('background', 'url(../images/nyc.jpg');

      city === 'false'){

      $('body').css('background', 'default');

      city === 'true';
    }
  }
});




/************$(document).function() {

	var city1 === 'nyc';
	var city2 === 'austin';
	var city3 === 'la';
	var city4 === 'sf';
	var city5 === 'sydney';
$()



/**************

function changeImage() {
	if (city1 === "nyc || New York || New York City" ) {
	  document.images = "images/nyc.jpg";
	  document.images.alt = "NYC";
    
	else (city2 === "austin");
		document.images = "images/austin.jpg";
		document.images.alt = "Austin";

	else (city3 === "la" || "Los Angeles");
		document.images = "images/la.jpg";
		document.images.alt = "Los Angeles";
	else (city4 === "sf" || "San Francisco");
		document.images = "images/sf.jpg";
		document.images.alt = "San Francisco";
	else (city5 === "sydney");
		document.images = "images/sydney.jpg";
		document.images = "Sydney";)
    }
  });
	
