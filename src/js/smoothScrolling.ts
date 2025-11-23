import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import isTouch from "./utils/isTouch";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function smoothScrolling() {
  let lenis: Lenis | null = null;

  if (!isTouch()) {
    lenis = new Lenis({
      smoothWheel: true,
    });
    gsap.ticker.add((time) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    });

    gsap.ticker.lagSmoothing(0);
  }
}
