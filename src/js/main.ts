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
import otherHalls from "./other-halls";
import hallAdvantages from "./hall-advantages";
import features from "./features";
import hotelAbout from "./hotel-about";
import formats from "./formats";
import contacts from "./contacts";
import history from "./history";
import restaurants from "./restaurants";
import cookies from "./cookies";
import promoPopup from "./promo-popup";
import smoothScrolling from "./smoothScrolling";
import animatedHeading from "./animatedHeading";
import introParallax from "./introParallax";
import bgParallax from "./bgParallax";
import fadeReveal from "./fadeReveal";
import instantFadeReveal from "./instantFadeReveal";
import loader from "./loader";
import delay from "./utils/delay";
import promisifyWindowLoad from "./utils/promisifyWindowLoadEvent";
import validation from "./validation";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
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
  otherHalls();
  hallAdvantages();
  features();
  hotelAbout();
  formats();
  contacts();
  history();
  restaurants();
  cookies();
  promoPopup();
  introParallax();
  bgParallax();
  fadeReveal();
  instantFadeReveal();
  validation();

  setTimeout(() => {
    Promise.race([delay(4000), promisifyWindowLoad()])
      .then(() => {
        loader();
      })
      .catch((err) => {
        const loader = document.querySelector<HTMLElement>(".loader");
        loader?.remove();
        console.error(err);
      });
  }, 200);
});

document.fonts.ready.then(() => {
  animatedHeading();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
