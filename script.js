// JavaScript Code to Handle Independent Automatic Sliders and UI interactions
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HERO CAROUSEL LOGIC (Sliding Independently every 4 seconds)
    const heroSlides = document.querySelectorAll(".hero-slide");
    let currentHeroIndex = 0;

    function nextHeroSlide() {
        if (heroSlides.length === 0) return;
        
        // Hide current slide
        heroSlides[currentHeroIndex].classList.remove("opacity-100");
        heroSlides[currentHeroIndex].classList.add("opacity-0");
        
        // Move to next index
        currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
        
        // Show next slide
        heroSlides[currentHeroIndex].classList.remove("opacity-0");
        heroSlides[currentHeroIndex].classList.add("opacity-100");
    }
    
    // Start Hero Automatic Interval
    setInterval(nextHeroSlide, 4000);


    // 2. FEATURED COURTS CAROUSEL LOGIC (2 images sliding inside cards)
    const cardCarousels = document.querySelectorAll(".card-carousel");

    cardCarousels.forEach((carousel, carouselIndex) => {
        const slides = carousel.querySelectorAll(".card-slide");
        let currentSlideIndex = 0;

        function nextCardSlide() {
            if (slides.length === 0) return;

            // Hide current slide
            slides[currentSlideIndex].classList.remove("opacity-100");
            slides[currentSlideIndex].classList.add("opacity-0");

            // Move to next index
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;

            // Show next slide
            slides[currentSlideIndex].classList.remove("opacity-0");
            slides[currentSlideIndex].classList.add("opacity-100");
        }

        // Interval slightly offset using carousel index to prevent all cards from sliding at the exact same millisecond
        setInterval(nextCardSlide, 3000 + (carouselIndex * 300));
    });

});
