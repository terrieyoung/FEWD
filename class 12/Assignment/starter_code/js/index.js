
$(document).ready (function() {
//Call ```$.val()``` on inputs to get the string value of your user's input
//- Store user input in ```var city```
 

//identify variables
  var nyc = ["nyc", "New York", "New York City", "NYC"];
  var la = ["LAX", "LA", "Los Angeles"];
  var austin = ["Austin", "ATX"];
  var sanfran = ["San Fransisco", "SF", "san fran", "Bay Area"];
  var sydney = ["Sydney", "SYD"];

//- Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
  $('#submit-btn').on('click', function{
  city = $(input).val();
   city.toLowercase();
      event.preventDefault();
  });

//- Create ```if / else if / else``` conditionals to control the flow of your application
  if ('#city-type') = nyc {
      // change background-image code here
        $('body').css('background-image', 'url("images/nyc.jpg")')
        });
     }
      
     else if ('#city-type') = sanfran {
        // change background-image code here
          $('body').css('background-image', 'url("images/sanfraN.jpg")')
          });
     }
      
      else if ('#city-type') = la {
      // change background-image code here
        $('body').css('background-image', 'url("images/la.jpg")')
        });

    else if ('#city-type') = austin {
      // change background-image code here
        $('body').css('background-image', 'url("images/nyc.jpg")')
        });
   }
    
    else ('#city-type') = sydney {
      // change background-image code here
        $('body').css('background-image', 'url("images/nyc.jpg")')
        });
      }
 });
