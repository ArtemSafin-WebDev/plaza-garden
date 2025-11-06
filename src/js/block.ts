import Swiper from "swiper";
import "swiper/css";

export default function block() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".block"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
    });
  });
}
