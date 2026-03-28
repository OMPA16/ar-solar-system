function planetHandler(planetName) {
    document.getElementById("contentContainer").style.display = 'flex'

    let bgURL = "planets/";
    let topText;
    let bottomText;

    switch (planetName) {
        case "mercury":
            topText = `Distance from Sun: 57.91 million km <br/> Diameter: 4,880 km <br/>
            Average Temperature: -173 °C to 427 °C <br/>
            Volume: 6.083×10^10 km³ <br/>
            Mass: 3.3022×10^23 kg <br/>
            Equatorial Surface Gravity: 3.7 m/s² <br/>
            Moons: None <br/>`;
            bottomText = `Mercury has been known since ancient Greek times, when it was named after the messenger god Hermes. In the 20th century, spacecraft made it possible to observe and study Mercury up close. Mercury is the closest planet to the Sun and the smallest planet in the solar system.`;
            bgURL += "mercury.png";
                break;
        case "venus":
            topText = `Distance from Sun: 108.2 million km <br/>
            Diameter: 12,104 km <br/>
            Average Temperature: 462 °C <br/>
            Moons: None <br/>
            Fun Fact: Venus is the hottest planet in our solar system due to its thick carbon dioxide atmosphere that traps heat. <br/>`;
            bottomText = "Venus has been known since ancient times and was named after the Roman goddess of love and beauty. In the 20th century, spacecraft were sent to study Venus's atmosphere and surface.";
            bgURL += "venus.png";
            break;
        case "earth":
            topText = `Distance from Sun: 149.6 million km <br/>
            Diameter: 12,742 km <br/>
            Average Temperature: 14 °C <br/>
            Moons: 1 (The Moon) <br/>
            Fun Fact: Earth is the only known planet in our solar system that supports life. <br/>`;
            bottomText = "Earth has been known to us since the beginning of human existence. However, it was only in the 20th century that it began to be studied in depth using scientific methods.";
            bgURL += "earth.png";
            break;
        case "mars":
            topText = `Distance from Sun: 227.9 million km <br/>
            Diameter: 6,779 km <br/>
            Average Temperature: -87 °C to -5 °C <br/>
            Moons: 2 (Phobos and Deimos) <br/>
            Fun Fact: Mars is home to the tallest volcano in the solar system, Olympus Mons, as well as the deepest canyon, Valles Marineris. <br/>`;
            bottomText = "Mars has been known to humanity for thousands of years and was named after the Roman god of war. In the 20th century, spacecraft were sent to Mars to study its surface, atmosphere, and signs of past and present life.";
            bgURL += "mars.png";
            break;
        case "jupiter":
            topText = `Distance from Sun: 778.5 million km <br/>
            Diameter: 139,822 km <br/>
            Average Temperature: -145 °C <br/>
            Moons: 79 (including the four large Galilean moons: Io, Europa, Ganymede, Callisto) <br/>
            Fun Fact: Jupiter is the largest planet in our solar system and has a powerful magnetic field that captures solar wind particles, creating intense radiation belts. <br/>`;
            bottomText = "Jupiter has been known since ancient times and was named after the king of the gods in Roman mythology. In the 20th century, spacecraft were sent to study Jupiter's atmosphere, magnetic field, and moons.";
            bgURL += "jupiter.png";
            break;
        case "saturn":
            topText = `Distance from Sun: 1.43 billion km <br/>
            Diameter: 116,460 km <br/>
            Average Temperature: -178 °C <br/>
            Moons: 82 (the largest being Titan) <br/>
            Fun Fact: Saturn is famous for its spectacular rings made of ice and debris. <br/>`;
            bottomText = "Saturn has been known to humanity since ancient times and was named after the Roman god of agriculture. In the 20th century, spacecraft were sent to study Saturn's rings, atmosphere, and moons.";
            bgURL += "saturn.png";
            break;
        case "uranus":
            topText = `Distance from Sun: 2.87 billion km <br/>
            Diameter: 50,724 km <br/>
            Average Temperature: -197 °C <br/>
            Moons: 27 <br/>
            Fun Fact: Uranus rotates on its side, likely due to a collision with a large body early in its history. <br/>`;
            bottomText = "Uranus was discovered in 1781 by British astronomer William Herschel. It was the first planet discovered using a telescope. In the 20th century, spacecraft were sent to Uranus to study its atmosphere and moons.";
            bgURL += "uranus.png";
            break;
        case "neptune":
            topText = `Distance from Sun: 4.5 billion km <br/>
            Diameter: 49,244 km <br/>
            Average Temperature: -201 °C <br/>
            Moons: 14 (the largest being Triton) <br/>
            Fun Fact: Neptune is the windiest planet in our solar system, with wind speeds reaching up to 2,100 km/h. <br/>`;
            bottomText = "Neptune was discovered in 1846 by French mathematician Urbain Le Verrier and British astronomer John Couch Adams. It was the first planet discovered through mathematical calculations rather than observation. In the 20th century, spacecraft were sent to Neptune to study its atmosphere and moons.";
            bgURL += "neptune.png";
            break;
    }
    document.getElementById("topText").innerHTML = topText;
    document.getElementById("bottomText").innerHTML = bottomText;
    document.getElementById("pictureDiv").style.backgroundImage = `url("${bgURL}")`;
}

function clearPlanets() {
    document.getElementById("contentContainer").style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    var camera = document.querySelector('a-entity[camera]');
    var currentPosition = camera.getAttribute('position');
    if (event.key === ' ') {
        camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y + 5,
            z: currentPosition.z
        });
    }
    if(event.key === 'c') {
        camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y - 5,
            z: currentPosition.z
        });
    }
    if(event.key === 't') {
        camera.setAttribute('position', {
            x: -550,
            y: 150,
            z: -15,
        });
    }
    if(event.key === 'y') {
        camera.setAttribute('position', {
            x: 0,
            y: 10,
            z: 0,
        });
    }
});