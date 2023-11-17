// let currentSlide = 0;
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     function showSlide(index) {
//         if (index < 0) {
//             currentSlide = totalSlides - 1;
//         } else if (index >= totalSlides) {
//             currentSlide = 0;
//         } else {
//             currentSlide = index;
//         }

//         const transformValue = -currentSlide * 100 + '%';
//         slides.style.transform = `translateX(${transformValue})`;
//     }

//     function nextSlide() {
//         showSlide(currentSlide + 1);
//     }
    
//     function nextSlide() {
//         showSlide(currentSlide + 1);
//     }

//     function prevSlide() {
//         showSlide(currentSlide - 1);
//     }

//     // Optional: Automatic slideshow
//     setInterval(nextSlide, 15000); // Change slide every 3 seconds
