import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function restaurantGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".restaurant-gallery")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
    slides.forEach((slide) => {
      wrapper?.appendChild(slide.cloneNode(true));
    });

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
          ".restaurant-gallery__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".restaurant-gallery__slider-arrow--next"
        ),
      },
    });
  });
}
