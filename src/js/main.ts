import "virtual:svg-icons-register";
import "../scss/style.scss";
import infrastructure from "./infrastructure";
import special from "./special";
import events from "./events";
import blocks from "./blocks";
import living from "./living";

document.addEventListener("DOMContentLoaded", () => {
  infrastructure();
  special();
  events();
  blocks();
  living();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
