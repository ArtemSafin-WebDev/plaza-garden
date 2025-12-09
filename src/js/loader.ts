import gsap from "gsap";
import {DrawSVGPlugin, SplitText} from "gsap/all";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

export default function loader() {
    const loader = document.querySelector<HTMLElement>(".loader");
    if (!loader) return;

    const headingsAfterLoad = Array.from(
        document.querySelectorAll<HTMLElement>(".js-animated-heading-after-load")
    );

    const splits = headingsAfterLoad.map((heading) =>
        SplitText.create(heading, {
            type: "words, chars",
            linesClass: "line",
            charsClass: "char",
            wordsClass: "word",
            mask: "words",
        })
    );

    const tl = gsap.timeline();


    gsap.set(".loader .loader__pattern path", {
        autoAlpha: 1
    })
    tl.from(".loader .loader__pattern path", {
        duration: 1.5, drawSVG: 0,
        ease: "power2.out"
    })

    tl.to(".loader", {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
    })
        .addLabel("loader-hidden")
        .call(() => {
            loader.remove();
        });
    if (document.fonts.status !== "loaded") return;
    splits.forEach((split) => {
        tl.from(
            split.chars,
            {
                duration: 0.5,
                yPercent: 100,
                autoAlpha: 0,
                stagger: 0.05,
            },
            "loader-hidden+=0.2"
        );
    });
}
