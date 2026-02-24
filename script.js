let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
let toggle = true;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].classList.add("active");

    // Background transition
    const nextImg = slides[slideIndex - 1].src;

    if (toggle) {
        bg2.style.backgroundImage = `url('${nextImg}')`;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
    } else {
        bg1.style.backgroundImage = `url('${nextImg}')`;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
    }

    toggle = !toggle;

    setTimeout(showSlides, 5000);
}

showSlides();

// Time display
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
