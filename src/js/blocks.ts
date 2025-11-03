import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function blocks() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".blocks")
  );

  elements.forEach((element) => {
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".blocks__slider")
    );

    const navBtns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".blocks__nav-link")
    );
    const topTabsItems = Array.from(
      element.querySelectorAll<HTMLElement>(".blocks__top-tabs-item")
    );
    const bottomTabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".blocks__bottom-tab")
    );

    const setActiveTab = (index: number) => {
      navBtns.forEach((btn) => btn.classList.remove("active"));
      topTabsItems.forEach((item) => item.classList.remove("active"));
      bottomTabItems.forEach((item) => item.classList.remove("active"));
      navBtns[index]?.classList.add("active");
      topTabsItems[index]?.classList.add("active");
      bottomTabItems[index]?.classList.add("active");
      ScrollTrigger.refresh();
    };

    setActiveTab(0);

    navBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });

    sliders.forEach((slider) => {
      const container = slider.querySelector<HTMLElement>(".swiper");
      if (!container) return;

      const checkLimits = (swiper: Swiper) => {
        if (swiper.isBeginning) {
          slider.classList.add("is-beginning");
        } else {
          slider.classList.remove("is-beginning");
        }

        if (swiper.isEnd) {
          slider.classList.add("is-end");
        } else {
          slider.classList.remove("is-end");
        }
      };

      const instance = new Swiper(container, {
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
        init: false,
        on: {
          init: checkLimits,
          fromEdge: checkLimits,
          toEdge: checkLimits,
        },
      });

      instance.init();
    });
  });
}
