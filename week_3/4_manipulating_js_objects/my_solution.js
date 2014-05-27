
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.
/**
 * Pseudocode
 * initialize adam to empty object
 * add name property to adam and set to string Adam
 * add spouse property to terah and set to adam object
 * set terah weight property to 125
 * remove terah eyeColor property
 * add spouse property to adam and set to terah object
 * add children property to terah object and set to empty object
 * add carson property to terah children property and set to 
 * object with name property set to string Carson
 * add carter property to terah children property and set to 
 * object with name property set to string Carter
 * add colton property to terah children property and set to 
 * object with name property set to string Colton
 * set adam children property to terah children property
 */


var adam = {};
adam['name'] = 'Adam';
terah['spouse'] = adam;
terah['weight'] = 125;
delete terah['eyeColor'];
adam['spouse'] = terah;
terah['children'] = {};
terah.children['carson'] = {'name': 'Carson'};
terah.children['carter'] = {name: 'Carter'};
terah.children['colton'] = {name: 'Colton'};
adam['children'] = terah.children;





// __________________________________________
// Reflection: Use the reflection guidelines
/**
 *
 * What parts of your strategy worked? What problems did you face?
 *
 * All parts of my strategy worked. The one problem I ran into during this challenge
 * occured when I didn't read step 7 thoroughly enough. I tried to add a 'carson'
 * property to terah.children and set it to 'Carson'. I missed the fact that carson
 * was a property that would be set to an object. Easily fixed once I realized it though.
 * 
 * 
 * What questions did you have while coding? What resources did you find to help you answer them?
 *
 * I couldn't remember the exact syntax to delete a property from an object, so I looked it up 
 * to get it right and I found the syntax guide on stackoverflow.
 * 
 * 
 * What concepts are you having trouble with, or did you just figure something out? If so, what?
 * 
 * I didn't have any trouble with any of the concepts in this challenge.
 * 
 * 
 * Did you learn any new skills or tricks?
 *
 * I was refreshed on how to delete an object property, which is quite useful.
 *
 * 
 * How confident are you with each of the Learning Competencies?
 *
 * I am very confident in the learning competencies in this challegne.
 * 
 * 
 * Which parts of the challenge did you enjoy?
 *
 * All parts of this challenge were enjoyable. JavaScript is a great language and I really
 * enjoy programming in it when the opportunity arises.
 * 
 * 
 * Which parts of the challenge did you find tedious?
 *
 * No parts of this challenge were tedious. It was an excellent reminder to carefully read the 
 * instructions and also a great refresh on some basic JavaScript syntax.
 *
 * 
 */

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)