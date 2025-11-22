import Swiper from "swiper";
import { Controller, EffectFade, Navigation } from "swiper/modules";
import gsap from "gsap/all";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/controller";

export default function history() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".history__modal")
  );

  const initSlider = (element: HTMLElement) => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const navigationLinks = Array.from(
      element.querySelectorAll<HTMLLinkElement>(
        ".history__modal-navigation-link"
      )
    );
    const textSliderContainer = element.querySelector<HTMLElement>(
      ".history__modal-text-slider .swiper"
    );
    const imagesSliderContainer = element.querySelector<HTMLElement>(
      ".history__modal-images-slider .swiper"
    );

    if (!textSliderContainer || !imagesSliderContainer) return null;

    const setActiveLink = (swiper: Swiper) => {
      navigationLinks.forEach((link) => link.classList.remove("active"));
      navigationLinks[swiper.activeIndex]?.classList.add("active");
    };

    const setOddClass = (swiper: Swiper) => {
      if (swiper.realIndex % 2 === 0) {
        element.classList.remove("odd-index");
      } else {
        element.classList.add("odd-index");
      }
    };

    const textSlider = new Swiper(textSliderContainer, {
      slidesPerView: 1,
      speed: 600,
      effect: "fade",
      autoHeight: true,
      fadeEffect: {
        crossFade: true,
      },
      modules: [EffectFade, Navigation, Controller],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".history__modal-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".history__modal-arrow--next"
        ),
      },
      init: false,
      on: {
        init: (swiper) => {
          setActiveLink(swiper);
          setOddClass(swiper);
        },
        slideChange: (swiper) => {
          setActiveLink(swiper);
          setOddClass(swiper);
        },
      },
    });

    const imagesSlider = new Swiper(imagesSliderContainer, {
      modules: [Controller, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      allowTouchMove: false,
    });

    textSlider.init();

    textSlider.controller.control = imagesSlider;

    navigationLinks.forEach((link, linkIndex) => {
      link.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          textSlider.slideTo(linkIndex);
        },
        {
          signal,
        }
      );
    });

    return () => {
      textSlider.destroy(true);
      imagesSlider.destroy(true);
      navigationLinks.forEach((link) => link.classList.remove("active"));
      element.classList.remove("odd-index");
      navigationLinks[0].classList.add("active");
      abortController.abort();
    };
  };

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const slider = initSlider(element);
      return () => {
        if (slider) slider();
      };
    });
  });
}
