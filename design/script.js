// GSAP Animations for smooth scrolling and entrance effects
window.onload = function() {
    // Hero Section
    gsap.from('.hero-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 1
    });

    gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.5,
        delay: 1.5
    });

    gsap.from('.footer', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2
    });
};

// GSAP Sliding Animation on Banner Load
window.onload = function() {
    // Left Content Slide
    gsap.from('.banner-content', {
        x: '-100%',
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    // Right Image Slide
    gsap.from('.banner-image', {
        x: '100%',
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5 // Delay slightly to sync the animation
    });
};
