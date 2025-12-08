// script.js

const btn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

btn.addEventListener("click", () => {
  const isOpen = mobileNav.classList.contains("open");

  if (!isOpen) {
    mobileNav.classList.add("open");
    mobileNav.style.maxHeight = mobileNav.scrollHeight + "px"; // плавное открытие
    btn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
  } else {
    mobileNav.style.maxHeight = "0px"; // плавное закрытие
    mobileNav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  }
});
