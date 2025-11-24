import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function bgParallax() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-bg-parallax")
  );
  elements.forEach((element) => {
    const image = element.querySelector<HTMLImageElement>(
      ".js-bg-parallax-image"
    );
    if (!image) return;

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
      tl.to(image, {
        yPercent: 10,
        ease: "none",
      });
    });
  });
}
