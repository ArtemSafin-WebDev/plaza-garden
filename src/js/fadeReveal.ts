import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function fadeReveal() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-fade-reveal")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.from(element, {
        autoAlpha: 0,
        duration: 1,
      });
    });
  });
}
