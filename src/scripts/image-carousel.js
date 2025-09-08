const imageCarousel = (() => {
    const slides = document.querySelectorAll('.slide');

    function changeSlide(index) {
        showSlide((slideIndex += index));
        generateDot();
    }

    function currentSlide(index) {
        showSlide((slideIndex = index));
        generateDot();
    }

    function showSlide(index) {
        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }

        for (const slide of slides) {
            slide.style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';
    }

    function generateDot() {
        const dotsElmt = document.querySelector('.dots');
        dotsElmt.textContent = '';

        for (let index = 0; index < slides.length; index++) {
            let dot = document.createElement('div');

            dot.classList.toggle('dot');
            dot.setAttribute('data-index', index + 1);

            if (index == slideIndex - 1) {
                dot.style.backgroundColor = 'light-dark(black, white)';
            }

            dot.addEventListener('click', () => {
                currentSlide(dot.dataset.index);
            });

            dotsElmt.appendChild(dot);
        }
    }

    let slideIndex = 1;

    function setUp() {
        showSlide(slideIndex);
        generateDot();

        setInterval(changeSlide, 1 * 1000, 1);

        document.querySelector('.previous').addEventListener('click', () => {
            changeSlide(-1);
        });

        document.querySelector('.next').addEventListener('click', () => {
            changeSlide(1);
        });
    }

    return { setUp };
})();

export { imageCarousel };
