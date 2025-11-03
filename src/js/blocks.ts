import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function blocks() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".blocks")
  );

  elements.forEach((element) => {
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".blocks__slider")
    );
    sliders.forEach((slider) => {
      const container = slider.querySelector<HTMLElement>(".swiper");
      if (!container) return;

      new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        longSwipesRatio: 0.2,
        modules: [Navigation],

        navigation: {
          prevEl: slider.querySelector<HTMLButtonElement>(
            ".blocks__slider-arrow--prev"
          ),
          nextEl: slider.querySelector<HTMLButtonElement>(
            ".blocks__slider-arrow--next"
          ),
        },
      });
    });
  });
}
