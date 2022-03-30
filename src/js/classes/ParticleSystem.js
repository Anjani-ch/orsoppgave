class ParticleSystem {
    width;
    height;
    particles;
    canvas;
    ctx;

    constructor(width, height, particles, canvas) {
        this.width = width;
        this.height = height;
        this.particles = particles;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;
    }

    run() {
        this.clear();
        this.drawParticles();
        this.connectParticles();

        requestAnimationFrame(() => this.run());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawParticles() {
        this.particles.forEach(particle => particle.draw(this.ctx, this.canvas));
    }

    connectParticles() {
        for(let i = 0; i < this.particles.length; i++) {
            for(let j = i; j < this.particles.length; j++) {
                const distance = ((this.particles[i].x - this.particles[j].x) * (this.particles[i].x - this.particles[j].x)) + ((this.particles[i].y - this.particles[j].y) * (this.particles[i].y - this.particles[j].y));

                if(distance < (this.canvas.width / 10) * (this.canvas.height / 30)) {
                    this.ctx.strokeStyle = this.particles[i].color;
                    this.ctx.lineWidth = 1;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

export default ParticleSystem;