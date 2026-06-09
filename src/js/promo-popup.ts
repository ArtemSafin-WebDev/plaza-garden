import Swiper from "swiper";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function promoPopup() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".promo-popup")
  );

  const popupClosed = localStorage.getItem("popupClosed") === "Y";

  elements.forEach((element) => {
    if (popupClosed) {
      element.classList.add("promo-popup--hidden");
    }

    const container = element.querySelector<HTMLElement>(".swiper");
    const pagination = element.querySelector<HTMLElement>(
      ".promo-popup__pagination"
    );
    const closeBtn = element.querySelector<HTMLButtonElement>(
      ".promo-popup__close"
    );

    if (container) {
      new Swiper(container, {
        modules: [EffectFade, Pagination],
        slidesPerView: 1,
        speed: 500,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
      });
    }

    closeBtn?.addEventListener("click", () => {
      element.classList.add("promo-popup--hidden");
      localStorage.setItem("popupClosed", "Y");
      element.addEventListener(
        "transitionend",
        () => {
          element.remove();
        },
        { once: true }
      );
    });
  });
}
