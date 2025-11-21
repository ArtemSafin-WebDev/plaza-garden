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
import otherRestaurants from "./other-restaurants";
import restaurantGallery from "./restaurant-gallery";
import otherSpecial from "./other-special";
import selects from "./selects";
import forms from "./forms";
import otherHalls from "./other-halls";
import hallAdvantages from "./hall-advantages";
import features from "./features";
import hotelAbout from "./hotel-about";

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
  otherRestaurants();
  restaurantGallery();
  otherSpecial();
  selects();
  forms();
  otherHalls();
  hallAdvantages();
  features();
  hotelAbout();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
