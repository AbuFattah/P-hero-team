let nav = document.querySelector("nav");
function showNav() {
  nav.classList.add("show-nav");
  nav.classList.remove("hide-nav");
}
function hideNav() {
  nav.classList.add("hide-nav");
}
let arr = [];

function isScrollDown() {
  return arr[arr.length - 2] < arr[arr.length - 1];
}

function isScrollUp() {
  return arr[arr.length - 2] > arr[arr.length - 1];
}

document.addEventListener("scroll", (e) => {
  arr.push(window.scrollY);

  if (isScrollUp()) {
    showNav();
  } else if (isScrollDown()) {
    hideNav();
  }
});
