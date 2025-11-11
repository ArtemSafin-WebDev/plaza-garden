import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function services() {
  const servicesSliders = Array.from(
    document.querySelectorAll<HTMLElement>(".services__modal-gallery")
  );
  console.log("Sldiers", servicesSliders);
  servicesSliders.forEach((slider) => {
    const container = slider.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: slider.querySelector<HTMLButtonElement>(
          ".services__modal-gallery-arrow--prev"
        ),
        nextEl: slider.querySelector<HTMLButtonElement>(
          ".services__modal-gallery-arrow--next"
        ),
      },
    });
  });
}
