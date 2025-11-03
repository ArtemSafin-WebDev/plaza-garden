import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function about() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".about"));

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
          ".about__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".about__slider-arrow--next"
        ),
      },
    });
  });
}
