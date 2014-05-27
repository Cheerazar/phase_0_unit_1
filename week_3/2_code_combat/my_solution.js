// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
// Mission: Rescue Mission
/**
 * Pseudocode
 * move down x2
 * move right
 * move up x2
 * move right x2
 * move down
 * attack!
 */

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();



// Mission: Grab the Mushroom 
/**
 * Pseudocode
 * move up
 * move right
 * move left
 * move up
 * attack!
 */

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 


// Mission: Drink Me
/**
 * Pseudocode
 * attack!
 * move right
 * move down
 * move up
 * move right
 * attack!
 */

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 


// Mission: Taunt the Guards
/**
 * Pseudocode
 * more right
 * taunt guard
 * move left x2
 * command ally to attack
 * move right 
 * command ally to follow
 * move right x2
 * move up
 * move right
 * taunt guards
 * move down
 * move right 
 * move up
 * move right 
 */

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say('Hey there!');
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

 

// Mission: It's a Trap
/**
 * Pseudocode
 * move down x2
 * taunt guard
 * move up x2
 * command allies to attack
 */

this.moveDown();
this.moveDown();
this.say('Hey there!');
this.moveUp();
this.moveUp();
this.say('Attack!');



// Mission: Break the Prison
/**
 * Pseudocode
 * friends = ['William', 'Lucas', 'Marcus', 'Robert', 'Gordon'];
 * if name is friend return true else false
 * if name is enemy return false
 * 
 */

return  ['William', 'Lucas', 'Marcus', 'Robert', 'Gordon'].indexOf(name) > -1 ? true : false;

// Mission: Taunt
/**
 * Pseudocode
 * say insult and target ogre x4
 */

this.say("Hey!");
this.say('Your mother was a human!', {target: 'enemy'});
this.say('You smell like lavendar!', {target: 'enemy'});
this.say('I see a smaller ogre carrying a bigger axe!', {target: 'enemy'});
this.say('I can beat you in one on one combat!', {target: 'enemy'});



// Mission: Cowardly Taunt
/**
 * Pseudocode
 * move within range to taunt ogres
 * taunt ogres
 * move to safe spot to allow archers to kill orgres
 * 
 */

this.moveXY(56, 33);
this.say('Your mother was a human!', {target: 'enemy'});
this.moveXY(70, 10);



// Mission: Commanding Followers
/**
 * Pseudocode
 * Move within range to followers
 * recruit followers using the word follow
 * move close enough to command attack
 * command followers to attack
 * 
 */

this.moveXY(75, 63);
this.say('Hail, friends! Follow me!');
this.moveXY(66, 42);
this.say('Attack!');



// Mission: Mobile Artillery
/**
 * Pseudocode
 * cannon has a 30 meter range
 *
 * move cannon within range
 * attack
 * move artillery within range of top right group
 * attack x2 to kill large ogre
 * move within range of top left group
 * attack x2 to kill large ogre
 */

this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(56, 29);
this.attackXY(68, 56);
this.attackXY(63, 46);
this.moveXY(51, 38);
this.attackXY(51, 67);
this.attackXY(48, 53);



// Release 3: Answer the following questions
/**
 * When you are finished with all of the campaigns, answer the following questions. You may want to look at some resources on JavaScript before answering.
 * What is this referring to? Think programming-wise rather than in the terms of the game.
 * 
 * The this object can have different meanings depending on the context of where it is used. 
 * If it used outside of a function invocation, it will refer to the global object. If it is used within a function
 * closure, it will refer to the object that caused the function invocation. 
 *
 *
  * What does the () do in JavaScript?
 * 
 * The () after a function in JavaScript is a function invocation, in other words they cause the function to be executed.
 * 
 * 
  * What is the point of the semicolons?
 * 
 * Semicolons are used to separate statements in JavaScript. It can clarify code by showing where one 
 * statement ends and the next begins. They are not required between lines to separate two statements, 
 * yet sometimes it is easier to have them there to create a clear differentiation of statements.
 *
 * 
 */



// Reflection:
// Write your reflection here.
/**
 * What parts of your strategy worked? What problems did you face?
 *
 * My strategies worked for all of the problems. The only issues I faced early on in the Code Combat
 * problems, was figuring out how many spaces I needed to move on the board. After I figured out 
 * each of those things it was relatively quick and fun to solve the problems. 
 *
 * 
 * What questions did you have while coding? What resources did you find to help you answer them?
 *
 * I didn't have any questions in this particular challenge. 
 * 
 * 
 * What concepts are you having trouble with, or did you just figure something out? If so, what?
 *
 * This challenge didn't have any concepts that I wasn't familiar with already. I have spent some 
 * amount of time studying JavaScript, so these challenges were nice refreshers for certain aspects
 * of the language.
 *
 * 
 * Did you learn any new skills or tricks?
 *
 * This challenge didn't reward me with any new skills or tricks.
 *
 * 
 * How confident are you with each of the Learning Competencies?
 *
 * I am very confident in the learning competencies for this particular challenge.
 *
 * 
 * Which parts of the challenge did you enjoy?
 *
 * The code comabat problems were fun to work on to learn some pieces of JavaScript. 
 *
 * 
 * Which parts of the challenge did you find tedious?
 *
 * There were some pieces of the Code Combat problems that were tedious. In the early problems that 
 * didn't allow you to use the moveXY command, there were some maps that didn't clearly have board 
 * movement mapped out that took a few minutes to puzzle out. On the whole they weren't that bad,
 * as they just ended up being a bunch of trial and error. 
 * 
 */