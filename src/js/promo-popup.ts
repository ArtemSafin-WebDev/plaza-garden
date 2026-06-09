import Swiper from "swiper";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function promoPopup() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".promo-popup")
  );

  function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl // ttl in milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key); // Cleanup expired data
      return null;
    }

    return item.value;
  }

  const popupClosed = getWithExpiry("popupClosed");

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
      setWithExpiry("popupClosed", "Y", 1000*60*10);//10 min
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
