let currentIndex = 0;

function showSlide(index) {
    const inner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;

    inner.style.transform = `translateX(${-currentIndex * 100}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

showSlide(currentIndex);