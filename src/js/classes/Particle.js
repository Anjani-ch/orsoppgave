class Particle {
    x;
    y;
    radius;
    color;
    xSpeed = this.getRandomSpeed();
    ySpeed = this.getRandomSpeed();

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    getRandomSpeed() {
        return Math.random() > .5 ? 1 : -1;
    }

    draw(ctx, canvas) {
        this.update();
        this.detectCollision(canvas);

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    updatePos(x, y) {
        if (x) this.xSpeed = x * this.xSpeed;
        if (y) this.ySpeed = y * this.ySpeed;
    }

    detectCollision(canvas) {
        if (this.y <= 0 || this.y + this.radius >= canvas.height) this.updatePos(0, -1);
        if (this.x <= 0 || this.x + this.radius >= canvas.width) this.updatePos(-1, 0);
    }
}

export default Particle;