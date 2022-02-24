import ParticleSystem from './particles/ParticleSystem.js';
import Particle from './particles/Particle.js';

const particleCanvas = document.querySelector('#particle-canvas');

const hasScrollbar = () => {
    // rootElem for quirksmode
    const rootElem = document.documentElement || document.body;

    const contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;

    let overflowShown;
    let alwaysShowScroll;
    let overflowStyle;
    let overflowYStyle;

    if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;
  
    if (typeof rootElem.currentStyle !== 'undefined') overflowStyle = rootElem.currentStyle.overflow;
  
    if (typeof rootElem.currentStyle !== 'undefined') overflowYStyle = rootElem.currentStyle.overflowY;

    // Check overflow style property on body for fauxscrollbars
    overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow;
  
    // Check the Y axis overflow
    overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;

    overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);

    alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

    return (contentOverflows && overflowShown) || (alwaysShowScroll)
};

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