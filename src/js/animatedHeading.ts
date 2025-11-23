import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function animatedHeading() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-animated-heading")
  );
  elements.forEach((element) => {
    const parentSection = element.closest("section");
    if (!parentSection) return;

    SplitText.create(element, {
      type: "words, chars",
      linesClass: "line",
      charsClass: "char",
      wordsClass: "word",
      mask: "words",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
            markers: false,
          },
        });

        tl.from(self.chars, {
          duration: element.hasAttribute("data-duration")
            ? Number(element.getAttribute("data-duration"))
            : 0.5,
          yPercent: 100,
          autoAlpha: 0,
          stagger: element.hasAttribute("data-stagger")
            ? Number(element.getAttribute("data-stagger"))
            : 0.05,
        });

        return tl;
      },
    });
  });
}
