import ParticleSystem from './particles/ParticleSystem.js';
import Particle from './particles/Particle.js';

const particleCanvas = document.querySelector('#particle-canvas');

if (particleCanvas) {
    const PARTICLE_SYSTEM_WIDTH = window.innerWidth;
    const PARTICLE_SYSTEM_HEIGHT = window.innerHeight;

    const particles = [];

    const createParticles = array => {
        const NUMBER_OF_PARTICLES = 40;

        for(let i = 0; i < NUMBER_OF_PARTICLES; i++) {
            const PARTICLE_RADIUS = 4;
            const PARTICLE_COLOR = '#BFB9FA';

            const x = Math.round(Math.random() * PARTICLE_SYSTEM_WIDTH);
            const y = Math.round(Math.random() * PARTICLE_SYSTEM_HEIGHT);

            const particle = new Particle(x, y, PARTICLE_RADIUS, PARTICLE_COLOR);

            array.push(particle);
        }
    };

    createParticles(particles);

    const particleSystem = new ParticleSystem(PARTICLE_SYSTEM_WIDTH, PARTICLE_SYSTEM_HEIGHT, particles, particleCanvas);

    particleSystem.run();
}