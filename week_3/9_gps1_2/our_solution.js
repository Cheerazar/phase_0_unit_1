// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Xang Thao
//  2. Gunnari Auvinen


// 0. "YOU SIGNED... WHO?!"

var wilWeaton = {
  name: 'Wil Weaton',
  age: 38,
  quote: 'Aye, aye!'
}

var chrisTucker = {
  name: 'Chris Tucker',
  age: 35,
  quote:  'Do you understand the words that are coming out of my mouth?'
}

// 1. "Here they Come!"
function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var adamSandler = new Client('Adam Sandler', 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client('Kristen Bell', 33, 'Do you wanna build a snowman?');
var jimCarrey = new Client('Jim Carrey', 52, '...So you\'re telling me there\'s a chance? YEAH!');


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var clients = [wilWeaton, chrisTucker, adamSandler, kristenBell, jimCarrey];

function displayClient(clientList) {
  for (var i = 0; i < clientList.length; i++) {
    console.log('Name: ' + clientList[i].name + '\nAge: ' + clientList[i].age + '\nQuote: "' + clientList[i].quote + '"');
  }
}

displayClient(clients);

// 4. "But wait, there's more!"
        chrisTucker.showQuote = function(){
            console.log(chrisTucker.quote);
        };
        


// 5.  ** BONUS **
function Client(name, age, quote,lastSalary) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.lastSalary = lastSalary;
}

Client.prototype = {
  constructor: Client,
  lastCom: function () {
    console.log("$ " +  this.lastSalary * .15);
    
  }
}
var jimCarrey = new Client('Jim Carrey', 52, '...So you\'re telling me there\'s a chance? YEAH!', 10000000);
jimCarrey.lastCom();

//  6.  Your Reflection:
/**
 * What parts of your strategy worked? What problems did you face?
 * 
 * All parts of our strategy worked. Here and there we faced some syntax issues, but they were quickly resolved.
 * 
 * 
 * 
 * What questions did you have while coding? What resources did you find to help you answer them?
 *
 * I had a few quetions when coding the prototype extension that we used in the bonus. I used some of my own 
 * code that I had used earlier that day to remind myself of the structure of the extension. 
 * 
 * 
 * 
 * What concepts are you having trouble with, or did you just figure something out? If so, what?
 *
 * This challenge didn't have any troubling concepts. The use of a constructor and then extending a prototype 
 * were both nice exercises. Getting more familiar with JavaScript and programming concepts in general are
 * great exercises.
 * 
 *
 * 
 * Did you learn any new skills or tricks?
 *
 * I didn't learn any new tricks in this challenge, but I did get the chance to work with my understanding
 * of JavaScript constructors and prototypes. They are both concepts I'm familiar with, yet they aren't
 * something that I use every day. 
 *
 *
 * 
 * How confident are you with each of the Learning Competencies?
 *
 * I am very confident with the learning competencies for this challenge. 
 *
 * 
 * Which parts of the challenge did you enjoy?
 *
 * All parts of this challenge were enjoyable. It was another coding learning experience, which is very
 * welcome with me.
 *
 * 
 * Which parts of the challenge did you find tedious?
 *
 * The tedious part of the challenge was typing in the object literals for clients 3-5. It was an excellent exercise 
 * though, as it demonstrated that doing that all the time would drive you up a wall. Thus instead of 
 * defining an object literal each time, you would instead lean towards a constructor to make things easier.
 * 
 */