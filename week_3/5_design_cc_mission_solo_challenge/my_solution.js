// This is a solo challenge

// Your mission description:
/**
 * Mission Description
 *
 * Move the colored square from the start to the finish.
 * Along the way you'll need to change the color of your square to 
 * match the color of the square at the finish. You change the 
 * color of your square by moving it on top of another square and 
 * combinging the colors to get a new color. Once your square matches
 * the color of the finish square, you'll need to move it there to
 * finish the level
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




	

// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 