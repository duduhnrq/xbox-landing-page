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

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".menu",
  ".menu li",
);
mobileNavbar.init();