import Swiper from "swiper";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function profile() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".profile-banner")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(
      ".profile-banner__swiper"
    );
    const pagination = element.querySelector<HTMLElement>(
      ".profile-banner__pagination"
    );

    if (!container || !pagination) return;

    new Swiper(container, {
      modules: [EffectFade, Pagination],
      autoHeight: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  });
}
