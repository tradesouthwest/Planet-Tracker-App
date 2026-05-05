export const PlanetCard = (planet) => `
    <div class="card ${planet.visible ? 'visible' : 'below-horizon'}">
        <h3>${planet.name}</h3>
        <div class="stats">
            <p>Altitude: <strong>${planet.alt}°</strong></p>
            <p>Azimuth: <strong>${planet.az}°</strong></p>
        </div>
        <div class="quality-badge">${planet.quality}</div>
    </div>
`;

export const AppLayout = () => `
    <header>
        <h1>PlanetViewer // ${OBSERVER.name}</h1>
        <p>Optimized for 70mm - 1000mm Focal Lengths</p>
    </header>
    <main id="planet-grid"></main>
`;
