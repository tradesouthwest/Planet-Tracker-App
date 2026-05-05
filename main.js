import './style.css';
import { getPlanetData } from './astroUtils.js';
import { AppLayout, PlanetCard } from './uiComponents.js';

const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function init() {
    document.querySelector('#app').innerHTML = AppLayout();
    render();
}

function render() {
    const grid = document.querySelector('#planet-grid');
    grid.innerHTML = planets
        .map(p => getPlanetData(p))
        .map(data => PlanetCard(data))
        .join('');
}

// Simple Hash Routing listener
window.addEventListener('hashchange', render);
init();
