// constant declaration for html elements
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// setting the canvas dimensions to the screen dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// constant declarations for html elements
const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');

// variable declarations (booleans, objects)
var animation = null;
var rain;
var initGen = false;

// begin of event listeners
window.addEventListener('resize', () => { // triggers on browser resize
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}); // end of 1st event listener

window.addEventListener('keydown', e => { // triggers when the user presses a key
	switch(e.code) { // start of switch conditional (grabs the key code of the key that the user pressed)
		case 'Enter':
			gameBtn.click(); // runs when the user presses enter
		break;
	} // end of switch conditional
});
// end of event listeners

gameBtn.addEventListener('click', () => { // adds event listener to html button that triggers when clicked
	if (initGen == false) { // start if statement; checks if the rain has been generated yet
		// displays the proper html elements
		cover.style.display = 'none';
		game.style.display = 'block';

		rain = new RainObj(); // sets predefined rain variable to rain object (in rain.js)
		play(); // calls play function
		initGen = true; // sets boolean generated to true
	} else if (initGen == true) { // if the rain has already been generated
		window.cancelAnimationFrame(animation); // cancels the animation (pausing)
		delete rain; // deletes / recycles object
		// displays the respective html elements
		cover.style.display = 'flex';
		game.style.display = 'none';
		initGen = false; // sets boolean generated to false
	} // end of if statement
}); // end of gameBtn event listener

const drawBackground = () => { // start drawBackground function
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height); // local variable declared for the background
	// for the createLinearGradient function. Start/end points of the gradient
	gradient.addColorStop(0, "#0B1F26");
	gradient.addColorStop(1, "#263238");
	return gradient; // returns the gradient
}

const play = () => { // start play function
	animation = window.requestAnimationFrame(play); // recommence the loop

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// object manipulation updates every frame
	rain.init();
	rain.update();
	rain.draw();
} // end of play function