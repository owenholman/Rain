const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const play = () => {
	window.requestAnimationFrame(play);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

gameBtn.addEventListener('click', () => {
	cover.style.display = 'none';
	game.style.display = 'block';
	window.requestAnimationFrame(play);
});