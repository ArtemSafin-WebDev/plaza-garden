import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function formats() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".formats")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".formats__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".formats__slider-arrow--next"
        ),
      },
    });
  });
}
