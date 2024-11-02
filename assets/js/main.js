/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*Menu Show*/
/* validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*Menu Hidden*/
/* validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll("nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //remove "show-menu" class when click on nav__link
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Header BG

const scrollHeader = () => {
  const header = document.getElementById("header");
};

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50vh, add the blur-header class to te header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350vh, add the show-scroll class to the a tag with the scrollup classs
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass?.classList.add('active-link');
        } else {
            sectionClass?.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top', 
  distance: '60px',
  duration: 3000, 
  delay: 400,
  //reset: true // Animations repeat
})

// Correction des guillemets sur cette ligne
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})
