import callAfterResize from "./utils/callAfterResize";

export default function infrastructure() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".infrastructure")
  );
  elements.forEach((element) => {
    const scrollWrapper = element.querySelector<HTMLElement>(
      ".infrastructure__map-scroll-wrapper"
    );
    const scrollIndicator = element.querySelector<HTMLElement>(
      ".infrastructure__map-scroll-indicator"
    );
    if (scrollWrapper && scrollIndicator) {
      const setScrollProgress = () => {
        const progress =
          ((scrollWrapper.offsetWidth + scrollWrapper.scrollLeft) /
            scrollWrapper.scrollWidth -
            0.5) *
          2;

        scrollIndicator.style.setProperty(
          "--progress",
          progress.toFixed(2).toString()
        );
      };

      setScrollProgress();

      scrollWrapper.addEventListener("scroll", setScrollProgress, {
        passive: true,
      });

      callAfterResize(setScrollProgress);
    }
  });
}
