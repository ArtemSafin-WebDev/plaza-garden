import callAfterResize from "./utils/callAfterResize";

export default function contacts() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts")
  );
  elements.forEach((element) => {
    const scrollWrapper = element.querySelector<HTMLElement>(
      ".contacts__map-scroll-wrapper"
    );
    const scrollIndicator = element.querySelector<HTMLElement>(
      ".contacts__map-scroll-indicator"
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

    const tabBtns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(
        ".contacts__how-to-get-nav-link"
      )
    );
    const tabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".contacts__how-to-get-tabs-item")
    );
    const setActiveTab = (index: number) => {
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      tabBtns[index]?.classList.add("active");
      tabItems[index]?.classList.add("active");
    };
    setActiveTab(0);

    tabBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });
  });
}
