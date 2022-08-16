const hamBurger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar-list");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navbarList.classList.toggle("active");
});
