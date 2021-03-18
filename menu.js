const menu = document.getElementById("menu"),
  nav = document.getElementById("nav"),
  author = document.getElementById("author"),
  navContainer = document.getElementById("navContainer");

menu.addEventListener("click", function (e) {
  let aside = menu.parentElement.parentElement;
  aside.classList.toggle("h-screen");
  navContainer.classList.toggle("h-full");
  navContainer.classList.toggle("pt-8");
  setTimeout(() => {
    nav.classList.toggle("hidden");
    author.classList.toggle("hidden");
  }, 150);
});
