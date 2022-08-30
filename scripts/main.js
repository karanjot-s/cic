const nav = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");
const navLinks = document.querySelectorAll(".nav-list a");
const navShownClass = "nav-shown";

navBtn.onclick = () => {
  if (nav.classList.contains(navShownClass)) {
    nav.classList.remove(navShownClass);
  } else {
    nav.classList.add(navShownClass);
  }
};

navLinks.forEach((navLink) => {
  navLink.onclick = () => {
    nav.classList.remove(navShownClass);
  };
});

const background = document.getElementById("background");

if (window.innerWidth > 900) {
  window.onscroll = () => {
    var scroll = document.documentElement.scrollTop;
    var zoom = scroll / 20;

    if (scroll < 500) {
      background.style.transform = `scale(${100 + zoom}%)`;
    }
  };
}

function addObserver(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        return;
      }

      entry.target.classList.remove(className);
    });
  });

  elements.forEach((elem) => {
    observer.observe(elem);
  });
}

addObserver(document.querySelectorAll(".card"), "animate-card");
addObserver(document.querySelectorAll(".fcard"), "animate-card");
addObserver(document.querySelectorAll("#about .main"), "animate-about-main");
// addObserver(document.querySelectorAll("#middle .main"), "animate-middle-main");
addObserver(document.querySelectorAll("#social *"), "animate-zoom");
// addObserver(document.querySelectorAll("footer div div"), "animate-footer");
