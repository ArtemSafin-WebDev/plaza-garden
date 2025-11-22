import businessBlock from "./pages-data/business-block";
import clubBlock from "./pages-data/club-block";
import home from "./pages-data/home";
import restaurant from "./pages-data/restaurant";
import restaurants from "./pages-data/restaurants";
import room from "./pages-data/room";
import services from "./pages-data/services";
import special from "./pages-data/special";
import specialDetail from "./pages-data/special-detail";
import events from "./pages-data/events";
import hall from "./pages-data/hall";
import hotel from "./pages-data/hotel";
import documents from "./pages-data/documents";
import document from "./pages-data/document";
import wedding from "./pages-data/wedding";
import contacts from "./pages-data/contacts";

const pagesConfig = {
  ...home,
  ...businessBlock,
  ...clubBlock,
  ...room,
  ...services,
  ...restaurants,
  ...restaurant,
  ...special,
  ...specialDetail,
  ...events,
  ...hall,
  ...hotel,
  ...documents,
  ...document,
  ...wedding,
  ...contacts,
};

export default pagesConfig;
