import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function events() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".events")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      longSwipesRatio: 0.2,
      modules: [Navigation],
      centeredSlides: true,
      loop: true,
      centeredSlidesBounds: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".events__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".events__slider-arrow--next"
        ),
      },
    });
  });
}
