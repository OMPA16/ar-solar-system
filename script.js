/* ── Planet Data ──────────────────────────── */
const planetData = {
    mercury: {
        stats: [
            { label: "Distance from Sun", value: "57.91 million km" },
            { label: "Diameter", value: "4,880 km" },
            { label: "Temperature", value: "-173 °C to 427 °C" },
            { label: "Volume", value: "6.083×10¹⁰ km³" },
            { label: "Mass", value: "3.302×10²³ kg" },
            { label: "Surface Gravity", value: "3.7 m/s²" },
            { label: "Moons", value: "None" }
        ],
        description: "Mercury has been known since ancient Greek times, when it was named after the messenger god Hermes. In the 20th century, spacecraft made it possible to observe and study Mercury up close. Mercury is the closest planet to the Sun and the smallest planet in the solar system.",
        image: "mercury.png"
    },
    venus: {
        stats: [
            { label: "Distance from Sun", value: "108.2 million km" },
            { label: "Diameter", value: "12,104 km" },
            { label: "Temperature", value: "462 °C" },
            { label: "Moons", value: "None" },
            { label: "Fun Fact", value: "Hottest planet due to thick CO₂ atmosphere" }
        ],
        description: "Venus has been known since ancient times and was named after the Roman goddess of love and beauty. In the 20th century, spacecraft were sent to study Venus's atmosphere and surface.",
        image: "venus.png"
    },
    earth: {
        stats: [
            { label: "Distance from Sun", value: "149.6 million km" },
            { label: "Diameter", value: "12,742 km" },
            { label: "Temperature", value: "14 °C (avg)" },
            { label: "Moons", value: "1 (The Moon)" },
            { label: "Fun Fact", value: "Only known planet to support life" }
        ],
        description: "Earth has been known to us since the beginning of human existence. However, it was only in the 20th century that it began to be studied in depth using scientific methods.",
        image: "earth.png"
    },
    mars: {
        stats: [
            { label: "Distance from Sun", value: "227.9 million km" },
            { label: "Diameter", value: "6,779 km" },
            { label: "Temperature", value: "-87 °C to -5 °C" },
            { label: "Moons", value: "2 (Phobos & Deimos)" },
            { label: "Fun Fact", value: "Home to Olympus Mons & Valles Marineris" }
        ],
        description: "Mars has been known to humanity for thousands of years and was named after the Roman god of war. In the 20th century, spacecraft were sent to Mars to study its surface, atmosphere, and signs of past and present life.",
        image: "mars.png"
    },
    jupiter: {
        stats: [
            { label: "Distance from Sun", value: "778.5 million km" },
            { label: "Diameter", value: "139,822 km" },
            { label: "Temperature", value: "-145 °C" },
            { label: "Moons", value: "79 (incl. Io, Europa, Ganymede, Callisto)" },
            { label: "Fun Fact", value: "Largest planet with intense radiation belts" }
        ],
        description: "Jupiter has been known since ancient times and was named after the king of the gods in Roman mythology. In the 20th century, spacecraft were sent to study Jupiter's atmosphere, magnetic field, and moons.",
        image: "jupiter.png"
    },
    saturn: {
        stats: [
            { label: "Distance from Sun", value: "1.43 billion km" },
            { label: "Diameter", value: "116,460 km" },
            { label: "Temperature", value: "-178 °C" },
            { label: "Moons", value: "82 (largest: Titan)" },
            { label: "Fun Fact", value: "Famous for its spectacular ice & debris rings" }
        ],
        description: "Saturn has been known to humanity since ancient times and was named after the Roman god of agriculture. In the 20th century, spacecraft were sent to study Saturn's rings, atmosphere, and moons.",
        image: "saturn.png"
    },
    uranus: {
        stats: [
            { label: "Distance from Sun", value: "2.87 billion km" },
            { label: "Diameter", value: "50,724 km" },
            { label: "Temperature", value: "-197 °C" },
            { label: "Moons", value: "27" },
            { label: "Fun Fact", value: "Rotates on its side due to ancient collision" }
        ],
        description: "Uranus was discovered in 1781 by British astronomer William Herschel. It was the first planet discovered using a telescope. In the 20th century, spacecraft were sent to Uranus to study its atmosphere and moons.",
        image: "uranus.png"
    },
    neptune: {
        stats: [
            { label: "Distance from Sun", value: "4.5 billion km" },
            { label: "Diameter", value: "49,244 km" },
            { label: "Temperature", value: "-201 °C" },
            { label: "Moons", value: "14 (largest: Triton)" },
            { label: "Fun Fact", value: "Windiest planet — up to 2,100 km/h" }
        ],
        description: "Neptune was discovered in 1846 by French mathematician Urbain Le Verrier and British astronomer John Couch Adams. It was the first planet discovered through mathematical calculations rather than observation. In the 20th century, spacecraft were sent to Neptune to study its atmosphere and moons.",
        image: "neptune.png"
    }
};

/* ── Active nav tracking ─────────────────── */
let activePlanet = null;

function setActiveNav(planetName) {
    // Remove previous active
    document.querySelectorAll('.navItem').forEach(item => item.classList.remove('active'));
    // Set new active
    if (planetName) {
        const navItem = document.getElementById(`nav-${planetName}`);
        if (navItem) navItem.classList.add('active');
    }
    // Set planet accent colour via data attribute
    document.body.setAttribute('data-planet', planetName || '');
}

/* ── Build stat rows HTML ────────────────── */
function buildStatsHTML(stats) {
    return stats.map(s =>
        `<div class="stat-line">
            <span class="stat-label">${s.label}</span>
            <span class="stat-value">${s.value}</span>
        </div>`
    ).join('');
}

/* ── Planet handler ──────────────────────── */
function planetHandler(planetName) {
    const data = planetData[planetName];
    if (!data) return;

    activePlanet = planetName;
    setActiveNav(planetName);

    // Build top text (stats card)
    const topHTML = `
        <div class="card-title">${planetName.charAt(0).toUpperCase() + planetName.slice(1)} — Quick Stats</div>
        ${buildStatsHTML(data.stats)}
    `;

    // Build bottom text (description card)
    const bottomHTML = `
        <div class="card-title">About ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}</div>
        <p>${data.description}</p>
    `;

    document.getElementById("topText").innerHTML = topHTML;
    document.getElementById("bottomText").innerHTML = bottomHTML;
    document.getElementById("pictureDiv").style.backgroundImage = `url("planets/${data.image}")`;
    document.getElementById("contentContainer").style.display = 'flex';
    document.getElementById("closeBtn").style.display = 'flex';

    // Close mobile menu if open
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.checked = false;
}

function clearPlanets() {
    activePlanet = null;
    setActiveNav(null);
    document.getElementById("contentContainer").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'none';

    // Close mobile menu if open
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.checked = false;
}

/* ── Keyboard controls ───────────────────── */
document.addEventListener('keydown', function (event) {
    const camera = document.querySelector('a-entity[camera]');
    if (!camera) return;
    const pos = camera.getAttribute('position');

    switch (event.key) {
        case ' ':
            event.preventDefault();
            camera.setAttribute('position', { x: pos.x, y: pos.y + 5, z: pos.z });
            break;
        case 'c':
            camera.setAttribute('position', { x: pos.x, y: pos.y - 5, z: pos.z });
            break;
        case 't':
            camera.setAttribute('position', { x: -550, y: 150, z: -15 });
            break;
        case 'y':
            camera.setAttribute('position', { x: 0, y: 10, z: 0 });
            break;
        case 'Escape':
            clearPlanets();
            break;
    }
});