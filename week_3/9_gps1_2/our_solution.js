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
