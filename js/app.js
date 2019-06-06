const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');
var rain;

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
	cover.style.display = 'none';
	game.style.display = 'block';
	rain = new RainObj();
	play();
});

const drawBackground = () => {
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, "#204959");
	gradient.addColorStop(1, "#0B1F26");
	return gradient;
}

const play = () => {
	// recommence the loop
	window.requestAnimationFrame(play);

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// object manipulation
	rain.init();
	rain.update();
	rain.draw();
}