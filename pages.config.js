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
};

export default pagesConfig;
