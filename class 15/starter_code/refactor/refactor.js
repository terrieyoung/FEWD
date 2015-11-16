//Use variables example
$("body").append("<img src='images/William.png' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");

//VS
var name = 'William';
var bio = 'The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.';
$("body").append("<img src='images/" + name + ".png' alt='" + name + "'s picture'><p>" + bio + "</p>");


//Use functions example
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS
function prependListItem(foodItem){
$"#container>ol").prepend("<li>" + foodItem + "</li>")
}
prependListItem("Milk");
prependListItem("Cookies");
prependListItem("Sugar");
prependListItem("Bananas");
prependListItem("Gatorage");

//Use Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS
var foodItems = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

foodItems.forEach (function(nextFoodItem){
	prependListItem(nextFoodItem);
	$("#container>ol").prepend("<li>" + nextFoodItem + "</li>");
});

/*OR*/
foodItems.forEach(prependListItem);
});

/*OR*/
for (var i =  0; i < foodItems.length; i++) {
	$("#container>ol").prepend("<li>" + foodItems[i] + "</li>");
}




//Combine jQuery selectors
$("#container").css("width","960px");
$("#main").css("width","960px");

//VS
$("#container, #main").css("width", "960px");





//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

//VS

$("#container,#main").css({
	width: "960px",
	background: "red",
	color: "purple"
});




//Chain jQuery function calls
$("input").css("width","200px");
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

//VS--chaining


/****FROM JACOB***/
//Use variables example
$("body").append("<img src='images/William.png' alt='William\'s picture'><p></p>");

//VS
var name = 'William';
var bio = 'The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.';

$('body').append("<img src='images/" + name + ".png' alt='" + name + "'s picture'><p>" + bio + "</p>");

//Use functions example
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS

function prependListItem(foodItem) {
    $("#container>ol").prepend("<li>" + foodItem + "</li>");
}
prependListItem("Milk");
prependListItem("Cookies");
prependListItem("Sugar");
prependListItem("Bananas");
prependListItem("Gatorade");


//Use Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS

function prependListItem(foodItem) {
    $("#container>ol").prepend("<li>" + foodItem + "</li>");
}

var foodItems = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

// Option 1
foodItems.forEach(prependListItem);

// This is how the forEach loop works
function forEach(myArray, forEachHandler) {
    for (var i = 0; i < myArray.length; i++) {
        forEachHandler(myArray[i]);
    }
}

// Option 2
for (var i = 0; i < foodItems.length; i++) {
    prependListItem(foodItems[i]);
}


//Combine jQuery selectors
$("#container").css("width","960px");
$("#main").css("width","960px");

//VS

$("#container, #main").css("width","960px");


//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

//VS
$("#container,#main").css({
    "width": "960px",
    backgroundColor: "red",
    color: "purple"
});


//Chain jQuery function calls
$("input").css("width","200px");
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

//VS

$("input").css("width","200px")
    .attr("placeholder","My placeholder")
    .before("<label>My input</label>");