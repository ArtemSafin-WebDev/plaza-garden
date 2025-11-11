import "virtual:svg-icons-register";
import "../scss/style.scss";
import infrastructure from "./infrastructure";
import special from "./special";
import events from "./events";
import blocks from "./blocks";
import living from "./living";
import faq from "./faq";
import about from "./about";
import block from "./block";
import menu from "./menu";
import modals from "./modals";
import services from "./services";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  infrastructure();
  special();
  events();
  blocks();
  living();
  faq();
  about();
  block();
  modals();
  services();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
