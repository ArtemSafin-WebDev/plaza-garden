import businessBlock from "./pages-data/business-block";
import clubBlock from "./pages-data/club-block";
import home from "./pages-data/home";
import room from "./pages-data/room";

const pagesConfig = {
  ...home,
  ...businessBlock,
  ...clubBlock,
  ...room,
};

export default pagesConfig;
