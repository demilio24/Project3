const sliderWrapper = document.querySelector(".slider-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;
const slideWidth = sliderWrapper.clientWidth;
const slides = sliderWrapper.children;
const totalSlides = slides.length;

sliderWrapper.style.width = slideWidth * totalSlides + "px";

function showSlides() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex--;
  }
  showSlides();
}

function nextSlide() {
  if (slideIndex === totalSlides - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlides();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

showSlides();
