const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const playPause = document.getElementById("playPause");
const counter = document.getElementById("counter");
const dotsContainer = document.getElementById("dots");

let current = 0;
let playing = true;
let interval;

// Create dots
slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
        restartSlideShow();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    if (index >= slides.length) current = 0;
    if (index < 0) current = slides.length - 1;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[current].style.display = "block";
    dots[current].classList.add("active");

    counter.textContent = `${current + 1} / ${slides.length}`;
}

function nextSlide() {
    current++;
    showSlide(current);
}

function prevSlide() {
    current--;
    showSlide(current);
}

function startSlideShow() {
    interval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopSlideShow() {
    clearInterval(interval);
}

function restartSlideShow() {
    if (playing) {
        stopSlideShow();
        startSlideShow();
    }
}

next.addEventListener("click", () => {
    nextSlide();
    restartSlideShow();
});

prev.addEventListener("click", () => {
    prevSlide();
    restartSlideShow();
});

playPause.addEventListener("click", () => {

    if (playing) {
        stopSlideShow();
        playPause.textContent = "Play";
    } else {
        startSlideShow();
        playPause.textContent = "Pause";
    }

    playing = !playing;
});

// Keyboard controls
document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        nextSlide();
        restartSlideShow();
    }

    if (e.key === "ArrowLeft") {
        prevSlide();
        restartSlideShow();
    }

});

// Swipe support for mobile
let startX = 0;

document.querySelector(".slideshow").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".slideshow").addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextSlide();
        restartSlideShow();
    }

    if (endX - startX > 50) {
        prevSlide();
        restartSlideShow();
    }

});

// Initialize
showSlide(current);
startSlideShow();