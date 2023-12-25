

const motivationalLines = [
    "Coding is the journey to turn your imagination into reality.",
    "Every line of code is a step towards innovation.",
    "Programmers build the future, one line at a time.",
    "Coding: Where creativity meets logic.",
    "Debugging is like detective work, solving mysteries.",
    "Coding is the key to unlock your potential.",
    "The best error message is the one that never shows up.",
    "Code like you're writing a story, create a masterpiece.",
    "In the world of coding, possibilities are endless.",
    "Coding is the language of possibility."
];

function getRandomMotivationalLine() {
    const randomIndex = Math.floor(Math.random() * motivationalLines.length);
    return motivationalLines[randomIndex];
}

function updateMotivationalLine() {
    const motivationalLineElement = document.querySelector('.motivational-line');
    const randomAnimation = Math.floor(Math.random() * 5) + 1;
    motivationalLineElement.style.animationName = `anim-${randomAnimation}`;
    motivationalLineElement.textContent = getRandomMotivationalLine();
}

// Update the motivational line every 5 seconds
setInterval(updateMotivationalLine, 5000);
