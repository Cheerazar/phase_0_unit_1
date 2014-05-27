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
 *
 * 
 */




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


 
// Reflection:
// Write your reflection here.