import Home from "./Pages/home.jsx";
import Shop from "./Pages/shop.jsx";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  }

];

export default routes;