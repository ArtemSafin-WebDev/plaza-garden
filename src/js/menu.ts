export default function menu() {
  const menu = document.querySelector<HTMLElement>(".menu");
  if (!menu) return;
  const menuOpenBtn =
    document.querySelector<HTMLButtonElement>(".js-menu-open");
  const menuCloseBtn =
    document.querySelector<HTMLButtonElement>(".js-menu-close");

  menuOpenBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("menu-open");
  });
  menuCloseBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
  });

  menu.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target === menu) {
      document.body.classList.remove("menu-open");
    }
  });

  const linksWithSubmenu = Array.from(
    menu.querySelectorAll<HTMLLinkElement>(".menu__nav-link:not(.back)")
  );
  linksWithSubmenu.forEach((link) => {
    const hasSubmenu = link.nextElementSibling?.matches(".menu__nav-list");
    if (!hasSubmenu) return;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      link.parentElement?.classList.add("open");
    });
  });
  const backLinks = Array.from(
    menu.querySelectorAll<HTMLLinkElement>(".menu__nav-link.back")
  );

  backLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const item = link
        .closest(".menu__nav-list-item")
        ?.parentElement?.closest(".menu__nav-list-item");

      item?.classList.remove("open");
    });
  });

  const language = menu.querySelector<HTMLElement>(".menu__language");

  const languageBtn = menu.querySelector<HTMLButtonElement>(
    ".menu__language-btn"
  );
  languageBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    language?.classList.toggle("active");
  });

  menu.addEventListener("click", (event) => {
    if (!language) return;
    const target = event.target as HTMLElement;
    if (!language.contains(target)) {
      language.classList.remove("active");
    }
  });
}
