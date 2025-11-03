import "virtual:svg-icons-register";
import "../scss/style.scss";
import infrastructure from "./infrastructure";
import special from "./special";
import events from "./events";
import blocks from "./blocks";
import living from "./living";
import faq from "./faq";
import about from "./about";

document.addEventListener("DOMContentLoaded", () => {
  infrastructure();
  special();
  events();
  blocks();
  living();
  faq();
  about();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
