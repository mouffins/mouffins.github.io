// Array to store the slide index for each carousel
let slideIndexes = [];

document.addEventListener("DOMContentLoaded", function() {
    // Initialize slide indexes for each carousel
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel, index) => {
        slideIndexes[index] = 0; // Initialize each carousel's slide index
        showSlides(0, index); // Show the first slide for each carousel
    });
});

function nextSlide(carouselIndex) {
    showSlides(slideIndexes[carouselIndex] += 1, carouselIndex);
}

function prevSlide(carouselIndex) {
    showSlides(slideIndexes[carouselIndex] -= 1, carouselIndex);
}

function showSlides(index, carouselIndex) {
    const carousels = document.querySelectorAll('.carousel');
    const slides = carousels[carouselIndex].querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndexes[carouselIndex] = 0;
    } else if (index < 0) {
        slideIndexes[carouselIndex] = totalSlides - 1;
    } else {
        slideIndexes[carouselIndex] = index;
    }

    const offset = -slideIndexes[carouselIndex] * 100;
    carousels[carouselIndex].querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
