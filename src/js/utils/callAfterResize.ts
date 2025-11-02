import gsap from "gsap";

function callAfterResize(func: () => void, delay: number = 0.2) {
  let dc = gsap.delayedCall(delay, func).pause(),
    handler = () => dc.restart(true);
  window.addEventListener("resize", handler);
  return handler; // in case you want to window.removeEventListener() later
}

export default callAfterResize;
