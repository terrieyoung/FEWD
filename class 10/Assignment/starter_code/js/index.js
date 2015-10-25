$(document).ready(function() {

// Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
// If a user clicks "Read More" on the primary column:
  
$('.readmore').click(slideDownText)
$('.readmore').click(showReadLess)
$('.readmore').click(hideReadMore)
  
function slideDownText() {
  $('#show-this-on-click').slideDown();
}
function showReadLess() {
  $('.readless').show();
}
function hideReadMore() {
  $('.readmore').hide();
}

	//have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
	//hide the "Read More" link using ```$.hide()```

// If a user clicks "Read Less" on the primary column:
	//have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
	//show the "Read More" link using ```$.show()```
$('.readless').click(slideUpText)
$('.readless').click(showReadMore)
$('.readless').click(hideReadLess)
  
function slideUpText() {
  $('#show-this-on-click').slideUp();
}
function showReadMore() {
  $('.readmore').show();
}
function hideReadLess() {
  $('.readless').hide();
}
// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```
$('.learnmore').click(hideLearnMore)
$('.learnmore').click(slideDownLearnMoreText)

  
function slideDownLearnMoreText() {
  $('#learnmoretext').slideDown();
}
function hideLearnMore() {
  $('.learnmore').hide();
}

});