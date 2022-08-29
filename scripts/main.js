const nav = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");
const navShownClass = "nav-shown";

navBtn.onclick = () => {
  if (nav.classList.contains(navShownClass)) {
    nav.classList.remove(navShownClass);
  } else {
    nav.classList.add(navShownClass);
  }
};

const background = document.getElementById("background");

window.onscroll = () => {
  var scroll = document.documentElement.scrollTop;
  var zoom = scroll / 20;

  background.style.transform = `scale(${100 + zoom}%)`;
};
