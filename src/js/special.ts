import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import gsap from "gsap/all";

import "swiper/css";

export default function special() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".special")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1024px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        modules: [Navigation],
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".special__slider-arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".special__slider-arrow--next"
          ),
        },
      });
      return () => {
        instance.destroy();
      };
    });
  });
}
