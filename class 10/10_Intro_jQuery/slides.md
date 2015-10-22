![GeneralAssemb.ly](../img/icons/FEWD_Logo.png)

#FEWD - jQuery Intro
##Objectives
- Differentiate between jQuery and JavaScript, describe benefits of using them.

- Recognize jQuery syntax

- Use selectors and jQuery functions to effectively manipulate the DOM.

---

##Agenda

* Intro To Programming Reivew
* Intro To jQuery
* jQuery Basics
  * Script Tags  
  * Syntax
* Adding Interactivity  

---

##Intro To Programming Review

Let's take another look at our [Traffic Light](http://codepen.io/laurenwburton/pen/wKpjRG).

---

##A Programming Note

**Yes** we are glazing over much of the syntax of JavaScript. The goal: get hands dirty, learn syntax/basics along the way.

---

##Problems with JavaScript

wait, what?

--

###It's powerful! 
####but verbose :(

What if we want a DOM Node `p` inside a class of `.my-class`?

- In CSS:
```
.my-class p {
    ...
}
```

- In JavaScript:
``` 
document.getElementsByClassName('my-class')[0].getElementsByTagName('p');
```

--

###It Runs Everywhere! 
####but not (exactly) the same :(

- Most Major Browsers (Chrome, Firefox, etc):
```
document.getElementById("header").style.cssFloat = "left";
```
- IE (<=8):
```
document.getElementById("header").style.styleFloat = "left";
```

<img src="img/ie.jpg" style="max-width:300px; margin-bottom: 20px;">

---

##Enter: jQuery

Say what?

---

##jQuery

jQuery __is__ JavaScript.

It's what we call a "library".

One big "cookbook" of "recipes".

---

![GeneralAssemb.ly](../img/icons/code_along.png)

##[jQuery Traffic Light](http://codepen.io/laurenwburton/pen/wKpjRG)

---

##jQuery

jQuery is a cross-browser JavaScript library designed to simplify "client-side" scripting.

---

##jQuery

* [jquery.com](http://jquery.com) - A JavaScript library that makes DOM manipulation simple.

* "Cross browser" - works the same in all* browsers. 

* Allows:
  * Document traversal
  * CSS Manipulation
  * Event Handling
  * Animation
  * and more!

---

##JS/jQuery Basics

---


##Script Tags

--

##jQuery

Adding jQuery to your website

- Add it to your project:
<br/>
&lt;script src="js/jquery-1.8.3.min.js">&lt;/script>

- Add it from the internet:
<br/>
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">&lt;/script>

---


##Syntax

__Syntax:__ Spelling and grammar rules of a programming language. 


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.


--

##JavaScript Syntax Examples

* Semicolon - end of a statement
* Quotation Marks - a String (of characters)

--

##JavaScript Syntax - Comments

  ```//Single Line Comments```

  ```/* Multi line comments */```

---

##jQuery Syntax

###$

```
var listItems = jQuery( 'li' );

var listItems = $( 'li' );
```

```$``` is a shorter, more convenient name for the ```jQuery``` function

--

##jQuery Selectors
Finding elements on a page, use selectors with the $ function:

```
$('#top');  // select the element with an ID of 'top'
$('li');    // select all list items
$('ul li'); // select all unordered list items
$('.hero'); // select all elements with a class of 'hero'
```

Returns HTML elements you have selected.

--

##jQuery Selectors

Selectors are just like CSS

```
document.getElementById('myElement');
// WITH JQUERY BECOMES
$('#myElement');
```

---

##jQuery Click Event

###.click()

```
document.getElementById('myElement').onclick = clickHandler;
// WITH JQUERY BECOMES
$('#myElement').click(clickHandler);
```

---

##jQuery

###Some available jQuery functions

```
.click()
.css()
.slideToggle()
.hide()
.show()
.slideUp() 
.slideDown()
.children()
.attr()
```

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##[Syntax Drill](http://codepen.io/laurenwburton/pen/avEKJM)

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##jQuery Traffic Light

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##[jQuery FAQ List](http://codepen.io/laurenwburton/pen/avEKJM)

---

##Homework

* Finish the [Relaxr interactive homework assignment](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_05_Intro_Programming/Assignment)

--

##Exit Survey 

Class 10 Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
