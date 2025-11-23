export default function cookies() {
  const cookies = document.querySelector(".cookies");
  if (!cookies) return;

  const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "Y";

  if (!cookiesAccepted) {
    cookies.classList.add("shown");
  }
  const acceptBtns = Array.from(cookies.querySelectorAll("button"));
  acceptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "Y");
      cookies.classList.remove("shown");
    });
  });

  cookies.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target === cookies) {
      localStorage.setItem("cookiesAccepted", "Y");
      cookies.classList.remove("shown");
    }
  });
}
