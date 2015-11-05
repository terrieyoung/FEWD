/***********
//When a suer hits the submit button, we get the city that the user entered and test to see what city it is. If city is New York update the backgroiund to the nyc image. If the city is San Francdiso update the background to the sanfran image...
*********/
$(document).ready(function() {
  var city;

$('#submit-btn').click(changeBackground);
  
  function changeBackground(event){
    event.preventDefault();
// store city input as variable
  city = $('#city-type').val();
  if ( city === 'New York' || city === 'NYC' || city === 'New York City'){
      $('body').attr('class', 'nyc');{

      } else if (city === 'LA' || city === 'Los Angeles' || 'LAX'){
      	$('body').attr('class', 'la');{

      } else if (city === 'San Fran' || city === 'Frisco' || 'San Francisco'){
      	$('body').attr('class', 'sanfran');{
      		
      }else if (city === 'Austin' || city === 'Texas'){
      	$('body').attr('class', 'austin');{
      		
      }else if (city === 'Sydney' || city === 'SYD'){
      	$('body').attr('class', 'sydney');
      		
      }

  }

 }
  
});