/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1: " + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */
myArr = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];







/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */
myArr[1];

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */
console.log(myArr.length);

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */
 var arrayLength = myArr.length;
 var lastItem = arrayLength - 1;
 console.log(myArr[lastItem]);
