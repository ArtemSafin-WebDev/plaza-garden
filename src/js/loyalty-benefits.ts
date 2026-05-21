import Swiper from "swiper";
import "swiper/css";

export default function loyaltyBenefits() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".loyalty-benefits")
  );
  const mobileQuery = window.matchMedia("(max-width: 576px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    let slider: Swiper | null = null;

    const updateSlider = () => {
      if (mobileQuery.matches && !slider) {
        slider = new Swiper(container, {
          slidesPerView: "auto",
          spaceBetween: 8,
          speed: 600,
        });
      }

      if (!mobileQuery.matches && slider) {
        slider.destroy(true, true);
        slider = null;
      }
    };

    updateSlider();
    mobileQuery.addEventListener("change", updateSlider);
  });
}
