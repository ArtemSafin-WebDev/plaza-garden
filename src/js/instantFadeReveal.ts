import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function instantFadeReveal() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-instant-fade-reveal")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
        },
      });
      tl.from(element, {
        autoAlpha: 0,
        duration: 0.8,
      });
    });
  });
}
