/*const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".slide-menu");
  const close = document.querySelector(".close");

  menu.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
  });

  close.addEventListener("click", () => {
    nav.classList.toggle("menu-deactive");
  });
};

navSlide();*/

const menu = document.querySelector('.menu');
const slidemenu = document.querySelector('.slide-menu');
const slideclose = document.querySelector('.close');


menu.addEventListener('click', function () {
  slidemenu.classList.add('menu-active');
});

slideclose.addEventListener('click', function () {
  slidemenu.classList.remove('menu-active');
});

