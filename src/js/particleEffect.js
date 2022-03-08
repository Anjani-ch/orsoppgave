import ParticleSystem from './classes/ParticleSystem.js';
import Particle from './classes/Particle.js';
import hasScrollbar from './utilities/hasScrollbar.js';

const particleCanvas = document.querySelector('#particle-canvas');

const getParticleColor = _ => {
    // TODO: return bg-primary css variable color

    // TEMP:
    const THEME_STORAGE_KEY = 'theme';

    const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);

    let result;

    if (themeInStorage === 'light' || !themeInStorage) result = '#f98181';
    else if (themeInStorage === 'dark') result = '#777777';

    return result;
}

if (particleCanvas) {
    let scrollbarWidth = hasScrollbar() ? 17 : 0;

    const PARTICLE_SYSTEM_WIDTH = window.innerWidth - scrollbarWidth;
    const PARTICLE_SYSTEM_HEIGHT = window.innerHeight;

    const PARTICLE_COLOR = getParticleColor();

    const particles = [];

    const createParticles = array => {
        const NUMBER_OF_PARTICLES = 80;

        for(let i = 0; i < NUMBER_OF_PARTICLES; i++) {
            const PARTICLE_RADIUS = 2;

            const x = Math.round(Math.random() * PARTICLE_SYSTEM_WIDTH);
            const y = Math.round(Math.random() * PARTICLE_SYSTEM_HEIGHT);

            const particle = new Particle(x, y, PARTICLE_RADIUS, PARTICLE_COLOR);

            array.push(particle);
        }
    };

    createParticles(particles);

    const particleSystem = new ParticleSystem(PARTICLE_SYSTEM_WIDTH, PARTICLE_SYSTEM_HEIGHT, particles, particleCanvas);

    particleSystem.run();

    // TODO: handle particle effect on resize
}