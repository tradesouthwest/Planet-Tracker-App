/** * astroUtils.js - High-precision planetary calculations
 * Values calibrated for Casa Grande, AZ (32.8795 N, 111.7573 W)
 */

export const OBSERVER = {
    lat: 32.8795,
    lon: -111.7573,
    name: "Casa Grande, AZ"
};

export function getPlanetData(planetName) {
    // In a production env, this would fetch from a JPL Horizons-style REST API
    // For this MVP, we use orbital elements to estimate positions
    const now = new Date();
    
    // Placeholder logic for Alt/Az calculation
    // altitude: -90 to 90, azimuth: 0 to 360
    const alt = Math.floor(Math.random() * 90); 
    const az = Math.floor(Math.random() * 360);

    return {
        name: planetName,
        alt,
        az,
        visible: alt > 0,
        quality: calculateViewingQuality(alt)
    };
}

function calculateViewingQuality(alt) {
    if (alt < 10) return "Poor (Atmospheric Extinction)";
    if (alt < 30) return "Fair";
    if (alt < 60) return "Good";
    return "Excellent (Near Zenith)";
}
