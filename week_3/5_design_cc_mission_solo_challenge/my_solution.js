// This is a solo challenge

// Your mission description:
/**
 * Mission Description
 *
 * Move the soldier (colored square) from the left hand side of the map to the 
 * right hand side. On this map you will be restricted to saying on the designated
 * path.
 *  
 */
// Pseudocode
// 
/**
 *	canvas width: 600px, height: 300px 
 * 	each square 30px x 30px, and each movement is the width
 *
 * 	intialize object color1 with properties point1, point2, point3, point4
 *
 *  // Define Player function that stores location, color, and size
 *  // also has move function
 *	define function Player
 * 		this oldSquare = {startX, startY}
 * 		this newSquare = {startX, startY}
 *   	this fillStyle = 'starting hex color'
 *   	this width = starting square width pxs
 *   	this height = starting square height pxs
 *   	this movement = { // movement directions with pixel values
 *   		up : {moveX, moveY},
 *     	down : {moveX, moveY},
 * 			left : {moveX, moveY},
 *      right : {moveX, moveY}
 *
 *			if x = 270 and (y = 60 or y = 180) and this.fillStyle = '#0000AA' {
         if y = 60 {
           this.fillStyle = '#AA00AA'
         }
         else {
           this.fillStyle = '#00AAAA'
         }
    
         this.drawSquare(board)
 * 
 *   	}
 * 	end Player
 *
 * 	Player.prototype 
 *  	constuctor: Player,
 *  	move: function(direction, board) {
 *  		board.context.globalCompositeOperation = 'copy'
 *
 * 			this oldSquare x = this newSquare x
 *    	this oldSquare y = this oldSquare y
 *    	this newSquare x = this movement[direction] x
 *    	this newSquare y = this movement[direction] y
 *	
 *  }
 * 	end Player.prototype
 *
 * 
 *  define function initialize
 *  	if canvas is supported by browser
 *  		set canvas context to '2d'
 *  		translate canvas context to cartesean coord system
 *    	draw 1px outline around canvas perimeter
 *
 * 			draw top course line that starts from (0, 165), (180, 165), (180, 225), (420, 225), (420, 165), (600, 165)
 *    	draw low course line that starts from (0, 135), (180, 135), (180, 75), (420, 75), (420, 135), (600, 135)
 *     	draw and fill 180 by 90 rectangle, start at (210, 105)
 *    	draw and fill 30 by 30 finish square at (570, 135), (570, 165), (600, 165), (600, 135), (570, 135)
 *    	draw and fill 30 by 30 color 1 square at (285, 75), (285, 105), (315, 105), (315, 75), (285, 75)
 *    	draw and fill 30 by 30 color 2 square at (285, 195), (285, 225), (305, 225), (305, 195), (285, 195)
 *     	
 *      save canvas
 * 		else
 * 			Add an H1 to the section informing the user of requirement for a more up to date browser.
 * 		end if
 *  end initialize
 *  
 *	define function move( direction )
 * 		define object movement with four properties up, down, left, right
 * 		and each of those properties has a value of an object with the appropriate x and y coordinate 
 * 		adjustment for the direction
 *
 * 		if movementAllowed(xCoord, yCoord)
 * 			drawSquare square either up, down, left, or right
 * 			return true
 * 		else
 *   		return false
 * 		end if
 * 	end move
 *
 *	function movementAllowed with input arguments xCoord and yCoord
 * 		keep a list of allowable space square can move
 * 		if in allowable space
 * 			update playerSquare xCoord and yCoord
 * 			return true
 * 		else
 * 			return false
 * 		end
 * 	end movement
 *
 * 	function drawSquare(xCoord, yCoord)
 *  	
 *
 * 	end draw
 * 
 * 	document ready
 *  
 *  playerSquare = starting coords
 *  
 *
 *	on click of up, down, left, right 
 *		clear previously displayed messages
 * 		if ( !move(direction) )
 * 			display across screen or board 'Try moving a different direction' 
 *		end if
 * 	end on
 * 
 * 	end
 *
 * 
 */

// Initial Code

<html>
<head>
	<title></title>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript">
			function Player () {
			  this.oldSquare = { x : 0, y : 120 };
			  this.newSquare = { x : 0, y : 120 }; 
			  this.fillStyle = '#0000AA';
			  this.width = 30;
			  this.height = 30;
			  this.square;
			  this.movement = {
			    up : { x : 0, y : -30 },
			    down : { x : 0, y : 30 },
			    left : { x : -30, y : 0 },
			    right : { x : 30, y : 0 }
			  };
			}

			Player.prototype = {
			  constructor: Player,
			  move: function (dir, board) {
			    // old position for square
			    board.oldBackground = board.background;
			    this.oldSquare.x = this.newSquare.x;
			    this.oldSquare.y = this.newSquare.y; 

			    // write over the old square befoer getting new square info
			    board.ctx.putImageData(board.oldBackground, this.oldSquare.x, this.oldSquare.y);

			    // new position for square
			    this.newSquare.x += this.movement[dir].x;
			    this.newSquare.y += this.movement[dir].y;

			    if ((this.newSquare.x >= 0 && this.newSquare.x <= 180 && this.newSquare.y === 120) || 
			        ((this.newSquare.x === 180 || this.newSquare.x === 360) && this.newSquare.y >= 60 && this.newSquare.y <= 180) ||
			        (this.newSquare.x >= 210 && this.newSquare.x <=360 && (this.newSquare.y === 60 || this.newSquare.y == 180)) ||
			        (this.newSquare.x >= 360 && this.newSquare.x <= 540 && this.newSquare.y === 120)) {

			 /*
			 
			     The logic used here will get implented another time. 
			     This is for changing the color of the square once it lands on the two colored squares
			     
			      if (this.newSquare.x === 270 && (this.newSquare.y == 60 || this.newSquare.y === 180) && this.fillStyle === '#0000AA') {
			        if (this.newSquare.y === 60) {
			          this.fillStyle = '#AA00AA';
			        }
			        else {
			          this.fillStyle = '#00AAAA';
			        }
			        this.drawSquare(board);
			      }         

			*/

			      board.background = board.ctx.getImageData(this.newSquare.x, this.newSquare.y, this.width, this.height);
			      board.ctx.putImageData(this.square, this.newSquare.x, this.newSquare.y);      
			    } 
			    else {
			      board.background = board.oldBackground;
			      this.newSquare.x = this.oldSquare.x;
			      this.newSquare.y = this.oldSquare.y;
			      board.background = board.ctx.getImageData(this.newSquare.x, this.newSquare.y, this.width, this.height);
			      board.ctx.putImageData(this.square, this.newSquare.x, this.newSquare.y);
			    }

			    /*
			        if x = 540
			        and disable all buttons
			        add h1 element to section element and indicate that you've won the game
			      */
			      
			      if (this.newSquare.x === 540) {
			        $('#up, #down, #left, #right').prop('disabled', true);
			        $('#right').after('<h1>Congratulations! You\'ve finished the level!</h1>');
			      }
			    
			    
			  },
			  drawSquare: function (board) {
			    board.ctx.fillStyle = this.fillStyle;
			    
			    board.ctx.fillRect(this.newSquare.x, this.newSquare.y, this.width, this.height);
			    this.square = board.ctx.getImageData(this.oldSquare.x, this.oldSquare.y, this.width, this.height);
			  }
			}

			function GameBoard () {
			  this.canvas = document.getElementById('tutorial');
			  this.ctx = this.canvas.getContext('2d');
			  this.width = 570;
			  this.height = 270;
			  this.background;
			  this.oldBackground;
			}

			GameBoard.prototype = {
			  constructor: GameBoard,
			  initialize: function () {
			    var canvas = this.canvas;
			  if (this.canvas.getContext){
			    var ctx = this.ctx;
			      
			    // upper path boundary
			    ctx.beginPath();
			    ctx.moveTo(0, 150);
			    ctx.lineTo(180, 150);
			    ctx.lineTo(180, 210);
			    ctx.lineTo(390, 210);
			    ctx.lineTo(390, 150);
			    ctx.lineTo(570, 150);
			    ctx.stroke();

			    // lower path boundary
			    ctx.beginPath();
			    ctx.moveTo(0, 120);
			    ctx.lineTo(180, 120);
			    ctx.lineTo(180, 60);
			    ctx.lineTo(390, 60);
			    ctx.lineTo(390, 120);
			    ctx.lineTo(570, 120);
			    ctx.stroke();

			    //border around center rectangle
			    ctx.strokeRect(210, 90, 150, 90); 

			    // center path rectangle
			    ctx.fillStyle = "#AACC22";
			    ctx.fillRect(210, 90, 150, 90);
			    
			    /*
			    // upper colored color
			    ctx.fillStyle = "#AA0000";
			    ctx.fillRect(270, 60, 30, 30);

			    // bottom colored square
			    ctx.fillStyle = "#00AA00";
			    ctx.fillRect(270, 180, 30, 30);

			*/    
			    // finish square
			    // This will have to be implemented later, for now it will be a simple path game
			    // ctx.fillStyle = "#AA00AA";
			    ctx.fillStyle = '#0000AA'; 
			    ctx.fillRect(540, 120, 30, 30);

			    this.background = ctx.getImageData(0, 120, 30, 30);
			  } 
			    else {
			      // update with something better
			      console.log('To experience this website you must use a more up to date web browser.')
			    }
			  }
			}
			  
			$(document).ready(function() {
			  var player = new Player();
			  var board = new GameBoard();
			  board.initialize();
			  player.drawSquare(board);
			  $('#tutorial').append('<h1>Move the blue square from the left hand side of the level to the other side.</h1>');
			  $('#up, #down, #left, #right').on('click', function(elem) {
			    player.move(this.id, board);
			  });
			});

	</script>
	<style type="text/css">
		#tutorial {
		  padding: 0px 0px;
		  margin: 30px 30px;
		  border: 1px solid black; 
		}


	</style>
</head>
<body>
		<section>
		  <canvas id="tutorial" width="570" height="270"></canvas>
		  <button id="up">Up</button>
		  <button id="down">Down</button>
		  <button id="left">Left</button>
		  <button id="right">Right</button>
		</section>
</body>
</html>


	

// Refactored Code
/**
 *
 * 
 */

<html>
<head>
	<title></title>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript">
			function Player () {
			  this.oldSquare = { x : 0, y : 120 };
			  this.newSquare = { x : 0, y : 120 }; 
			  this.fillStyle = '#4F2CB2';
			  this.width = 30;
			  this.height = 30;
			  this.square;
			  this.movement = {
			    up : { x : 0, y : -30 },
			    down : { x : 0, y : 30 },
			    left : { x : -30, y : 0 },
			    right : { x : 30, y : 0 }
			  };
			}

			Player.prototype = {
			  constructor: Player,
			  move: function (dir, board) {
			    // old position for square
			    board.oldBackground = board.background;
			    this.oldSquare.x = this.newSquare.x;
			    this.oldSquare.y = this.newSquare.y; 

			    // write over the old square befoer getting new square info
			    board.ctx.putImageData(board.oldBackground, this.oldSquare.x, this.oldSquare.y);

			    // new position for square
			    this.newSquare.x += this.movement[dir].x;
			    this.newSquare.y += this.movement[dir].y;

			    if ((this.newSquare.x >= 0 && this.newSquare.x <= 180 && this.newSquare.y === 120) || 
			        ((this.newSquare.x === 180 || this.newSquare.x === 360) && this.newSquare.y >= 60 && this.newSquare.y <= 180) ||
			        (this.newSquare.x >= 210 && this.newSquare.x <=360 && (this.newSquare.y === 60 || this.newSquare.y == 180)) ||
			        (this.newSquare.x >= 360 && this.newSquare.x <= 540 && this.newSquare.y === 120)) {

			      board.background = board.ctx.getImageData(this.newSquare.x, this.newSquare.y, this.width, this.height);
			      board.ctx.putImageData(this.square, this.newSquare.x, this.newSquare.y);      
			    } 
			    else {
			      board.background = board.oldBackground;
			      this.newSquare.x = this.oldSquare.x;
			      this.newSquare.y = this.oldSquare.y;
			      board.background = board.ctx.getImageData(this.newSquare.x, this.newSquare.y, this.width, this.height);
			      board.ctx.putImageData(this.square, this.newSquare.x, this.newSquare.y);
			    }
			      if (this.newSquare.x === 540) {
			        $('.direction').prop('disabled', true);
			        $('#right').after('<h1 class="message">Congratulations! You\'ve finished the level!</h1>');
			      }			    
			  },
			  drawSquare: function (board) {
			    board.ctx.fillStyle = this.fillStyle;
			    
			    board.ctx.fillRect(this.newSquare.x, this.newSquare.y, this.width, this.height);
			    this.square = board.ctx.getImageData(this.oldSquare.x, this.oldSquare.y, this.width, this.height);
			  }
			}

			function GameBoard () {
			  this.canvas = document.getElementById('tutorial');
			  this.ctx = this.canvas.getContext('2d');
			  this.width = 570;
			  this.height = 270;
			  this.background;
			  this.oldBackground;
			}

			GameBoard.prototype = {
			  constructor: GameBoard,
			  initialize: function () {
			    var canvas = this.canvas;
			  if (this.canvas.getContext){
			    var ctx = this.ctx;
			      
			    // upper path boundary
			    ctx.beginPath();
			    ctx.moveTo(0, 150);
			    ctx.lineTo(180, 150);
			    ctx.lineTo(180, 210);
			    ctx.lineTo(390, 210);
			    ctx.lineTo(390, 150);
			    ctx.lineTo(570, 150);
			    ctx.stroke();

			    // lower path boundary
			    ctx.beginPath();
			    ctx.moveTo(0, 120);
			    ctx.lineTo(180, 120);
			    ctx.lineTo(180, 60);
			    ctx.lineTo(390, 60);
			    ctx.lineTo(390, 120);
			    ctx.lineTo(570, 120);
			    ctx.stroke();

			    //border around center rectangle
			    ctx.strokeRect(210, 90, 150, 90); 

			    // center path rectangle
			    ctx.fillStyle = "#32CC3E";
			    ctx.fillRect(210, 90, 150, 90);
			    
			    ctx.fillStyle = '#4F2CB2'; 
			    ctx.fillRect(540, 120, 30, 30);

			    this.background = ctx.getImageData(0, 120, 30, 30);
			  } 
			    else {
			      // update with something better
			      console.log('To experience this website you must use a more up to date web browser.')
			    }
			  }
			}
			  
			$(document).ready(function() {
			  var player = new Player();
			  var board = new GameBoard();
			  board.initialize();
			  player.drawSquare(board);
			  $('#game').append('<h1 class="message">Move the blue square from the left hand side of the level to the other side.</h1>');
			  $('.direction').on('click', function() {
			  	$('.message').fadeOut('slow');
			    player.move(this.id, board);
			  });
			});

	</script>
	<style type="text/css">
		body { background-color: #8358FF; }

		#tutorial {
		  padding: 0px 0px;
		  margin: 30px 30px;
		  border: 1px solid black; 
		}

		section { 
			width: 960px;
			margin: auto;
			background-color: #35B23F;
		}

	</style>
</head>
<body>
		<article>
			<section id="game">
			  <canvas id="tutorial" width="570" height="270"></canvas>
			  <button id="up" class="direction">Up</button>
			  <button id="down" class="direction">Down</button>
			  <button id="left" class="direction">Left</button>
			  <button id="right" class="direction">Right</button>
			</section>
		<article>
</body>
</html>

// Reflection
/**
 *
 * What parts of your strategy worked? What problems did you face?
 *
 * There are pieces of my beginning strategy that worked from beginning to end. There are
 * also other pieces that did not function the way that I had anticpated. I faced many problems
 * while I was finishing this challenge. I managed to get the board set up quickly, but after that
 * there were many different little problems that occured after that. 
 * 
 * Getting the square to move from one spot to the next was difficult. I had to figure out how to 
 * transition a piece of the board without leaving a trail behind; how to have it move and actually 
 * move the color from one spot to the next, without leaving no trace behind; how to not have half 
 * of my square suddenly not render against the edges; the fact that my pseudocode did most of what 
 * I wanted, but not all of it, so I ended up experimenting to figure it out instead of writing
 * additional pseudocode. 
 *
 * While experimentation did work in this case, I think that in the future it might make more
 * sense to re-examine my pseudocode and attempt to work out the programming or logic inconsistencies
 * there. Then once that was completed to recode the section that was giving me trouble and try again.
 * There is also a chance that using TDD, might have sped things up for me. I've never used that 
 * particular approach, and I didn't even think of it until right this moment. f
 *
 *
 * 
 * What questions did you have while coding? What resources did you find to help you answer them?
 *
 * There were many questions throughout my coding challenge. How to use the canvas element? How
 * do you draw shapes with the canvas element? How do you move a shape around on the canvas? I 
 * mostly used the canvas tutorial on MDN to help me sort through my various stumblings. 
 *
 * 
 * 
 * What concepts are you having trouble with, or did you just figure something out? If so, what?
 * Did you learn any new skills or tricks?
 *
 * Yes, I learned a lot of tricks in this challenge. Most of them have to deal with manipulating 
 * HTML5 canvas elements. I still have a long way to go using them, but I am much more familiar with
 * them now. 
 *
 * 
 * 
 * How confident are you with each of the Learning Competencies?
 *
 * I am very confident in the Learning Competencies for this challenge.
 *
 * 
 * 
 * Which parts of the challenge did you enjoy?
 *
 * This challenge was terrific. It really let me stretch my skills a bit. When I started it I had 
 * a different plan for myself, but I realized as I went along that I had bitten off more than 
 * I could chew. I toned down my original ambitions and ended up making something that I am happy
 * with right now. 
 * 
 * This challenge helped me deal with some of my learning and studying shortcomings. Open ended
 * challenges like this are terrifying to me. There is no exact goal that needs to be accomplished,
 * just a hint of a direction to go in, at which point you need to decide for yourself where to go.
 * Normally this would cause a panic to course through me, but I made sure to read through the 
 * problem and then to map out what I would like to do. From there I used that idea and I sketched out
 * how long I would like the problem to take me. I ended up over-estimating how easy this would be 
 * for me to implement, but I did make sure to keep myself somewhat restricted on overflow time. In the
 * end I did exceed my time budget, yet I stuck more closely to it than I think I would have otherwise.
 * By mapping out the problem at the beginning, setting goals, both technical and time related, I was
 * able to learn a wonderful amount of material, as well as create something new and challenging. After
 * last weeks open-ended challenge shortcoming, this was an excellent way to rebound, as well as to
 * put the methods I have been working on all week to the test. 
 *
 *
 * 
 * Which parts of the challenge did you find tedious?
 *
 * When I couldn't get my Player square to move as I thought I had it coded up was frustrating, and the 
 * hour or so I spent troubleshooting it seemed tedious for a while. Once I made a breakthrough though
 * it was a terrific sensation. There were tedious moments, but overall this challenge was extremely 
 * rewarding. 
 *
 */