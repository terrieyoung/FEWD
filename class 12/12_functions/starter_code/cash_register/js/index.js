$(document).ready(function(){

	//variable to capture the current total
	var total = 0;

	//listen for user to submit a new price
	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(){
		event.preventDefault();
		//get
		var entryNew = $('#newEntry').val();
		console.log('entryNew value: ' + entryNew);

		var entryNewNum = parseFloat(entryNew);
		console.log('entryNewNum value: ' + entryNewNum);
		//change the number of the new entry into currency
		var entryNewCurrency = currencyFormat(entryNewNum);
		console.log('entryNewCurrency value: ' + entryNewCurrency);

		//creating placeholder for totalCurrency
		var totalCurrency; 

		//updating the current total
		total = total + entryNewNum;
		//total += entryNewNum;

		//turning the total into a currency and storing it for later
		totalCurrency = currencyFormat(total);
		console.log('totalCurrency: ' + totalCurrency);

		//find the id entries in the html and creating new table row with the value of the variable of the input as a currency.
		$('#entries').append('<tr><td>'+entryNewCurrency+'</td></tr>');

		//find the id total in html and updating the text to the value of the total as a currency.
		$('#total').text(totalCurrency);


	}
	//change number to current with 2 decimals
	function currencyFormat(numberToConvert){
		//number to convert will be whatever number is passed to the function in parenthesis. Thiswill either be the number a user inputs or the total.

		//take the number that was passed to the currencyFormat function and make sure that it has two decimal places
		var currency = numberToConvert.toFixed(2);

		//add $ sign in front of decimal number we just created above. Converts the number to a 'string'
		var currencyWithDollar = '$' + currency;

		//gives the final output as currency with dollar sign
		return currencyWithDollar;


	}
});