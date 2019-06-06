const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');
var animation = null;
var rain;
var initGen = false;

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

window.addEventListener('keydown', e => {
	switch(e.code) {
		case 'Enter':
			gameBtn.click();
		break;
	}
})

gameBtn.addEventListener('click', () => {
	if (initGen == false) {
		cover.style.display = 'none';
		game.style.display = 'block';
		rain = new RainObj();
		play();
		initGen = true;
	} else if (initGen == true) {
		window.cancelAnimationFrame(animation);
		delete rain;
		cover.style.display = 'flex';
		game.style.display = 'none';
		initGen = false;
	}
});

const drawBackground = () => {
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, "#0B1F26");
	gradient.addColorStop(1, "#263238");
	return gradient;
}

const play = () => {
	// recommence the loop
	animation = window.requestAnimationFrame(play);

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// object manipulation
	rain.init();
	rain.update();
	rain.draw();
}