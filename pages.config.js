import businessBlock from "./pages-data/business-block";
import clubBlock from "./pages-data/club-block";
import home from "./pages-data/home";
import restaurants from "./pages-data/restaurants";
import room from "./pages-data/room";
import services from "./pages-data/services";

const pagesConfig = {
  ...home,
  ...businessBlock,
  ...clubBlock,
  ...room,
  ...services,
  ...restaurants,
};

export default pagesConfig;
