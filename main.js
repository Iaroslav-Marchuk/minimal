document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openMenuBtn: document.querySelector("[open-menu]"),
    closeMenuBtn: document.querySelector("[menu-close]"),
    menu: document.querySelector("[menu]"),
    navLinks: document.querySelectorAll(".mobile-menu-link"), // Всі посилання у мобільному меню
  };

  // Відкрити/закрити меню
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Закривати меню при кліку на посилання
  refs.navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      refs.menu.classList.remove("is-open");
    })
  );

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
});