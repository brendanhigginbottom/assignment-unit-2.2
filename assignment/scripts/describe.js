// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declared a variable called name and gave it a string of 'Dane' as its value
// We check if name is equal to 'Mary'. If that is true, we log 'Hi, Mary!' to the console.
// Then, if name is not equal to 'Mary', we log 'How do you do?' to the console instead.
// Expected output is that we log the string 'How do you do?' to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare the variable secret with no value. Then we declare variable code with a value of 123.
// We check if variable code is equal to 123. If it is, variable secret is given a value of 'super' and we multiply the value of code
// by 2.
// Then we check whether the value of variable code is greater than 250. If it is, the value of variable secret is given the value 'duper'.
// Then we log the value of variable secret, which by the end of the program is assigned a value of 'super' as the second if statement evaluates
// to false.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable isStudent and give it a value of the boolean true. Then we declare variables age and zip with values of 34 and 55407.
// Then we check whether variable isStudent is true AND if variable zip is greater than 8000. If it is, we log 'You're a student on the West Coast!'
// to the console.
// If the previous if statement evauluates false, we check whether variable isStudent is false OR whether variable age is less then 30. If it is,
// we console log the string 'What are your hobbies?'
//If the previous statement evaulautes false, we check whether the variable isStudent is true. If it is, we log 'Welcome to Prime!' to the console.
//If the previous statement evaluates false, we log 'How about the weather?' to the console. 
// The expected output in this case is that we log the string 'Welcome to Prime!' to the console. 


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// Variables colorOne and colorTwo are swapped. colorOne should be declared with a value of 'blue' and colorTwo should be declared with
// a value of 'red', like:
// let colorOne = 'blue';
// let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Instead of using the AND (&&) boolean we have used OR (||) in the if statement. 
// The if statement evaluates the same, but the logic is incorrect as written. 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//The if statement technically performs the same fuction as the instructions, but noting that we get to the same truthy value by swapping what 
// we check against what, whether minAge <= age instead of age >= minAge.
if(minAge <= age) {
// What we log to the console is incorrect. The instructions asked to log 'enter' if the statement evaluates true, but this code logs 'no entry'
// instead.
  console.log('no entry');
} else {
  console.log('enter');
}
*/

