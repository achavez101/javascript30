// /* Variables & Data Types */

// //Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
// //Note: Arrays and Objects are not primitive data-types
// Answer: number, bigint, undefined, boolean, NaN, null, string, symbol

// //Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?
// Answer: dynamically typed 

// //Question 3: Variable Scoping
// // Part 1 - What 2 types of scope can variables declared with the "var" keyword have?
// Answer: globally and function scoped variables

// //Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
// //How are let and const variables scoped?
// Answer: let and const are block scoped while variable declarations are globally or function scoped

// //Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment
// Answer: The variable "const" cannot be reassigned another value. The variable "let" can be reassigned. 


// //Question 4:

// //Part 1: Read the code written below. What is wrong with the code?

// var carBrandOne = "Ford";
// let carBrandOne = "Mercedes";

// Answer: the variables are named the same thing but with different types.

// // comment out the code above and write a correction to the code below this  line

// //Part 2: Read the code written below. What is wrong with the code?
// Answer: The code needs dot notation and bracket notation. 

// const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
// myConstant = 10;
// // comment out the code above and write a correction to the code below this line
// Answer: id is causing an issue

// // Part 3: Read the code written below. What will happen? Will this throw an error?
// Answer: will not throw an error 

// const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"}
// myConstant2["name"] = "James"

// //Part 4: Read the code written below. Look at the function call below the defined function,
// // Will declaring a let variables with the same name throw an error in this case? Why or why not?
// Answer: There will be no error. 
// // What will the function return?
// Answer: Return "the given number is larger than 10".

// function variablesExample(number){
//     let returnMessage = '';
//     if(number > 10){
//         let message = "the given number is larger than 10";
//         returnMessage = message;
//     }else if(number === 10){
//         let message = "the given number is equivalent to 10";
//         returnMessage = message;
//     }else{
//         let message = "the given number is less than 10";
//         returnMessage = message;

//     }
//     console.log(returnMessage);
//     return returnMessage;
// }
// variablesExample(15);

// //Question 5: 

// // Part-1: What are acceptable characters that you can use to start variable names?
// Answer: letters, dollar sign, underscore

// //Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
// Answer: start lower case and can do upper case after to separate words. camel case


// /* END OF VARIABLES AND STRINGS SECTION */

// /* Strings */

// // Given the string below,
// // Part 1 - Write code that will return the 8th character of the string
// Answer: let result = coolString[7];
// // Part 2 - Then write code that will return (or console.log) "is a"
// Answer: console.log("is a" + result);
// // Note - don't convert this string to an array
// Answer: let coolString = "Hello World is a tradition";

// //Part 3
// // How would you return the 4th from the last character from the coolString without just hard coding the index of that character?
// // You would return this character by 
// Answer: console.log(coolString.length-4);

// //Part 4
// // Look at the variables below that have been initialized with string data.  
// //What are the 2 ways you can concatenate these strings together?
// Answer: 2 ways to concatenate are by using the "+" operating and using the concat() method.

// let aString = "Back to "
// let bString = "The Future"

// //Write the 2 ways of concatenating the strings below this line.  Declare a new variable for the results.
// let answer = aString + bString;
// let answer2 = aString.concat(bString);

// /*For Loops */
// // You are provided an array of strings below
// // an example of a console.log is also provided

// let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
// console.log(namesArray["The first name is: ", 0]);

// /*directly below this comment, 
// write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i]);
// }

// //write a for loop that iterates over the namesArray from the END to the BEGINnING of the array and logs the names to the console
// for (let i=namesArray.length, i>0; i--) {
//     console.log(namesArray("The first name is: ", [i]);
// }

// //write a for loop that iterates over the namesArray BUT only logs every other name to the console
// for (let i = 0; i <= namesArray.length; i += 2) {
//     console.log(namesArray[i]) 
// }

// /*While Loops*/

// // Inside the function below, Write a while loop that will console.log("Hello World") "number" times.  Use continueBoolean in your while loop's specified condition

// function whileLoopQuestion1(number){
//     let continueBoolean = true;
//     let counter = 0;
//     while(continueBoolean) {
//         console.log("Hello World");
//         counter++;
//         if(count===number){
//             continueBoolean = false;
//         }
//     }
// }
// whileLoopQuestion1(20);



// /* Array Methods */

// //What does the Array.prototype.push() method do? What does it return?
// Answer: Push adds to the back of the array and returns undefined

// //What does the Array.prototype.unshift() method do? What does it return?
// Answer: Unshift adds to the back of the array and returns length of the array

// //What does the Array.prototype.pop() method do? What does it return?
// Answer: Pop removes the last element and returns the removed element.

// //What does the Array.prototype.shift() method do? What does it return?
// Answer: Shift removes the first element and returns the removed element. 

// // What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
// Answer: Join unites 2 different things together and returns all elements combined. 

// //What does the Array.prototype.slice() method do? What will it return?
// Answer: Slice takes out a piece and returns what it took. 

// //What does the Array.prototype.splice() method do? What will it return?
// Answer: Splice adds a new element or changes a previous element and returns the removed items from the array. 

// //Look at the Array Below
// let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
// //How many dimensions does this array have?
// Answer: 3

// //How would you access the value 11?
// Answer: nestedArray[3][0][1];

// // how would you access the value 5?
// Answer: nestedArray[1][1];

// // How would you access the last element in the array without knowing the array's length?
// Answer: nestedArray[nestedArray.length-1];

// // How would you access the 3rd element in the array?  What will that element's value be?
// Answer: Access through bracket notation and the elements value will be [7,8,9]. 
// Example: nestedArray[2];


// /* Functions */

// /* Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// write a function named convertCtoF.
// The function should take 1 argument.
// The parameter should be named celsius.

// Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// convertCtoF(30); should return 86;

// */
// Answer: 
// function convertCtoF(celsius){
//     let fahrenheit = celsius * (9/5) + 32;
//     return fahrenheit;
// }