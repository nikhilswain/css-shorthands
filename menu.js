const menu = document.getElementById("menu"),
  nav = document.getElementById("nav"),
  author = document.getElementById("author"),
  navContainer = document.getElementById("navContainer"),
  aside = menu.parentElement.parentElement;

menu.addEventListener("click", function () {
  toggle();
});

// list click display hidden
const lists = document.getElementsByTagName("a");
for (let list of lists) {
  list.addEventListener("click", function () {
    toggle();
  });
}

function toggle() {
  aside.classList.toggle("h-screen");
  navContainer.classList.toggle("h-full");
  navContainer.classList.toggle("pt-8");
  setTimeout(() => {
    nav.classList.toggle("hidden");
    author.classList.toggle("hidden");
  }, 150);
}
