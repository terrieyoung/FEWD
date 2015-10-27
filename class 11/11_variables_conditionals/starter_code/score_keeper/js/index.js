$(document). ready(function() {
//storing the total value
	var total = 0;

	//setup listeners to check for b utton clicks

	$('#zero').click(setTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subtractOne);

	//setup functions

	function setTotalToZero () {
		total = 0;
		$('#result').text(total);
	//	$('#result').text(total);
	}

	function addFive () {
		total = total + 5;
		$('#result').text(total);
	//	$('#result').text(total);
	}
	
	function addTen () {
		total = total + 10;
		$('#result').text(total);
	//	$('#result').text(total);
	}
	
	function subtractOne () {
		total = total + -1;
		$('#result').text(total);
	//	$('#result').text(total);
	}
	
	function printTotalResult(){
		$('#result').text(total);
	}
});