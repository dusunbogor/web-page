// JavaScript for scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that have the 'animate-on-scroll' class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Options for the Intersection Observer API
    const observerOptions = {
        root: null, // The viewport is used as the root for observation
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // The callback will be executed when 10% of the target element is visible
    };

    // Callback function executed when observed elements intersect with the root
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is currently visible in the viewport, add the 'is-visible' class
                // This class triggers the CSS transition for opacity and transform
                entry.target.classList.add('is-visible');
                // Stop observing the element once it has animated to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer instance with the defined callback and options
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Loop through each element selected and start observing it
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
