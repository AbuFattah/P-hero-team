let nav = document.querySelector("nav");
function showNav() {
  nav.classList.add("show-nav");
  nav.classList.remove("hide-nav");
}
function hideNav() {
  nav.classList.add("hide-nav");
}

let arr = [];
document.addEventListener("scroll", (e) => {
  arr.push(window.scrollY);

  if (arr[arr.length - 2] > arr[arr.length - 1]) {
    showNav();
  } else if (arr[arr.length - 2] < arr[arr.length - 1]) {
    hideNav();
  }
});
