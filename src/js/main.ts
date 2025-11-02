import "virtual:svg-icons-register";
import "../scss/style.scss";
import infrastructure from "./infrastructure";
import special from "./special";
import events from "./events";

document.addEventListener("DOMContentLoaded", () => {
  infrastructure();
  special();
  events();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
