const RainObj = function() {
	this.total = [];
	this.maxRain = 65;
	this.bounceTotal = 0;

	this.x;
	this.y;
	this.dy;
	this.length = 10;
	this.friction = 0.2;

	const getRandomNum = (min, max) => {
		return Math.random() * (max - min) + min;
	}

	this.init = () => {
		if (this.total.length < this.maxRain) {
			this.x = getRandomNum(0, canvas.width);
			this.y = 0;
			this.dy = 1;
			this.total.push({
				x: this.x,
				y: this.y,
				dy: this.dy,
				length: this.length,
				bounce: this.bounceTotal
			});
		}
	}

	this.update = () => {
		for (i = 0; i < this.total.length; i++) {
			if (this.total[i].bounce > 2) {
				this.total.splice(i, 1);
			} else {
				if (this.total[i].y + this.total[i].length >= canvas.height * (11/12)) {
					this.total[i].dy = -this.total[i].dy * this.friction;
					this.total[i].bounce++;
				} else {
					this.total[i].dy += 0.981;
				}
				this.total[i].y += this.total[i].dy;
			}
		}
	}

	this.draw = () => {
		for (i = 0; i < this.total.length; i++) {
			ctx.strokeStyle = '#79C4F2';
			ctx.beginPath();
			ctx.moveTo(this.total[i].x, this.total[i].y);
			ctx.lineWidth = 1;
			ctx.lineCap = "round";
			ctx.lineTo(this.total[i].x, this.total[i].y + this.total[i].length);
			ctx.closePath();
			ctx.stroke();
		}
	}
}