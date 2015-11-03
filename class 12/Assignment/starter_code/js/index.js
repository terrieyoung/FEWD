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
// Set up city variables in arrays for multiple selections of each city
  var nyc = ["nyc", "New York", "New York City", "NYC"];
  var la = ["LAX", "LA", "Los Angeles"];
  var austin = ["Austin", "ATX"];
  var sanFran = ["San Fransisco", "SF", "san fran", "Bay Area"];
  var sydney = ["Sydney", "SYD"];
  
  // Establish that the button will do something on click while changing a background image
  // Within same function, match city variables to background images representative of each city; i.e. sanFran = $('.wrapper').css('background-image', 'url("your_url_here")');

 // $('.button').on("click", function(){
 //   $('.wrapper').css('background-image', 'url("http://i.huffpost.com/gen/2364914/images/o-GRUMPY-CAT-facebook.jpg")')
  })
  
  // Make sure all strings passed through input are collected
  // Make sure all collected strings are lowercase for ease-of-coding
  // Match now-converted lowercase strings to array of city variables-- WHILE loop
  //$('input').on('click', function(){
    choice = $(input).val();
    choice.toLowercase();
    
    while (nyc = true) {
      // change background-image code here
        $('body').css('background-image', 'url("images/nyc.jpg")')
        });
   }
    
    while (la = true) {
      // change background-image code here
       $('body').css('background-image', 'url("images/la.jpg")')
        })  
    }
    
    while (austin = true) {
      // change background-image code here
      $('body').css('background-image', 'url("../images/austin.jpg")')
    })
}
    
    while (sanFran = true) {
      // change background-image code here
         $('body').css('background-image', 'url("../images/sanFran.jpg")')
        })
    }
    
    while (sydney = true) {
           $('body').css('background-image', 'url("../images/sydney.jpg")')
        })
      // change background-image code here
    }
    
  });
  
  // Extra Credit
  // In case the inputed string isn't part of your variables, make an alert box pop up that tells the user they need to get better at spelling
  // HINT : If / else loop
  


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
	
