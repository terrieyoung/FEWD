$(document).ready(function() {

// store city input as variable
 	var nyc = ["nyc", "New York", "New York City", "NYC"];
	var la = ["LAX", "LA", "Los Angeles"];
	var austin = ["Austin", "ATX"];
	var sanFran = ["San Fransisco", "SF", "san fran", "Bay Area"];
	var sydney = ["Sydney", "SYD"];

//on click compare the city to the background 
 $('#submit-btn').click(changeBackground);

 function changeBackground = $('#city-type').val();
 	event.preventDefault();

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