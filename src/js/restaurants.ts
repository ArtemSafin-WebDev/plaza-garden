import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function restaurants() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".restaurants")
  );
  elements.forEach((element) => {
    const navLinks = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".restaurants__nav-link")
    );
    const imagesSlides = Array.from(
      element.querySelectorAll<HTMLElement>(".restaurants__images-slide")
    );
    const cardSliderContainer = element.querySelector<HTMLElement>(
      ".restaurants__card-slider .swiper"
    );
    if (!cardSliderContainer) return;

    const update = (swiper: Swiper) => {
      imagesSlides.forEach((slide) => slide.classList.remove("active"));
      navLinks.forEach((link) => link.classList.remove("active"));
      imagesSlides[swiper.activeIndex]?.classList.add("active");
      navLinks[swiper.activeIndex]?.classList.add("active");
    };

    const slider = new Swiper(cardSliderContainer, {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [EffectFade],
      allowTouchMove: false,
      speed: 600,
      on: {
        init: update,
        slideChange: update,
      },
      init: false,
    });

    slider.init();

    navLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        if (link.classList.contains("active")) return;
        console.log("Clicked", link.classList.contains("active"));
        event.preventDefault();
        slider.slideTo(index);
      });
    });
  });
}
