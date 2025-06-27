const loveNotes = [
    "Remember when we couldn't stand each other? Now I can't imagine life without you.",
    "From enemies to soulmates — our love story is my favorite plot twist.",
    "You make my heart race faster than our first argument.",
    "We planned to avoid each other, now we're planning a life together.",
    "Every day with you feels like a love letter I never want to end.",
    "You're the reason I smile at my phone like an idiot.",
    "I love you more than I hated you when we first met — and that's saying something!"
];

const memories = [
    "That time we argued over pizza toppings and ended up ordering both.",
    "Our first trip together — and how we got lost but laughed the whole way.",
    "The night we stayed up talking until sunrise.",
    "When we realized we were more than just friends.",
    "That awkward first hug that turned into the best habit ever."
];

const wheelMessages = [
    "You're my favorite notification.",
    "Let's grow old and weird together.",
    "You're the peanut butter to my jelly.",
    "I choose you. Always.",
    "You're my home and adventure all at once."
];

function typeWriter(text, i = 0) {
    const target = document.getElementById("typewriter");
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

function generateLoveNote() {
    const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById("typewriter").innerHTML = "";
    typeWriter(note);
}

function spinWheel() {
    const msg = wheelMessages[Math.floor(Math.random() * wheelMessages.length)];
    document.getElementById("wheelResult").innerText = msg;
}

window.onload = () => {
    const memory = memories[Math.floor(Math.random() * memories.length)];
    document.getElementById("memory").innerText = memory;
};
