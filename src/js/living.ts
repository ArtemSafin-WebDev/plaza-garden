import callAfterResize from "./utils/callAfterResize";

export default function living() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".living")
  );
  elements.forEach((element) => {
    const scrollWrapper = element.querySelector<HTMLElement>(
      ".living__illustration-scroll-wrapper"
    );
    const scrollIndicator = element.querySelector<HTMLElement>(
      ".living__scroll-indicator"
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
