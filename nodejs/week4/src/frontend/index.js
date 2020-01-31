import "./index.css";

import SPARouter from "@kodnificent/sparouter";

import mealRouterId from "./pages/meal";
import homeRouter from "./pages/home";
import mealsRouter from "./pages/meals";

const options = {
  historyMode: true // set this to true if you use the HTML5 history mode API
};
const router = new SPARouter(options);

router.get("/", homeRouter).setName('home-page');
router.get("/meals", mealsRouter).setName('all-meals-page');
router.get("/meals/{id}", mealRouterId).setName('meals');
router.notFoundHandler(function(){
 
  alert("oops! the page you are looking for does not exist");
  });

router.init();
