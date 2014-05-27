// I paired [by myself, with:] on this challenge.

// __________________________________________
// Write your code below.

// initialize secretNumber to 7

var secretNumber = 7;

// initialize password to 'just open the door'

var password = 'just open the door';

// initialize allowedIn to false

var allowedIn = false;

// initialize array members with John as first element and Mary as fourth
var members = ['John', undefined, undefined, 'Mary'];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
/**
 * What parts of your strategy worked? What problems did you face?
 * 
 * All parts of my strategy worked. I laid out the pseudocode and then translated that into
 * JavaScript. I didn't face any problems in this challegne. 
 * 
 * What questions did you have while coding? What resources did you find to help you answer them?
 *
 * I didn't have any questions, nor did I need any extra resources during this challenge.
 * 
 * 
 * What concepts are you having trouble with, or did you just figure something out? If so, what?
 *
 * This challenge didn't have any concepts that were unfamiliar to me.
 * 
 * 
 * Did you learn any new skills or tricks?
 *
 * I didn't learn any skills or tricks for this particular challenge.
 * 
 * 
 * How confident are you with each of the Learning Competencies?
 *
 * I am very confident that I understand all of the Learning Compentencies in this challenge.
 * 
 * 
 * Which parts of the challenge did you enjoy?
 * 
 * Even though this particular challenge was relatively easy for me, I still enjoyed getting the 
 * correct output from node.
 * 
 * Which parts of the challenge did you find tedious?
 *
 * No parts of the challenge were tedious. 
 * 
 */

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

