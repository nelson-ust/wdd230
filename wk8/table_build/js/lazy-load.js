const images = document.querySelectorAll('.image');
        const options = {
            threshold: 1,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    img.setAttribute('src', src);
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    observer.unobserve(img);
                }
            });
        }, options);
        images.forEach(img => {
            observer.observe(img);
        });