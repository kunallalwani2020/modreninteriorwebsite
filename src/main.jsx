import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Component/pages/Shop.jsx";
import About from "./Component/pages/About.jsx";
import Service from "./Component/pages/Service.jsx";
import Blog from "./Component/pages/Blog.jsx";
import Contact from "./Component/pages/Contact.jsx";
import Cart from "./Component/pages/Cart.jsx";
import { Provider } from "react-redux";
import cartStore from "./Component/Services/CartStore.jsx";
import CheckOut from "./Component/pages/CheckOut.jsx";
import Thankyou from "./Component/pages/Thankyou.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <Shop /> },
  { path: "/about", element: <About /> },
  {
    path: "/services",
    element: <Service />,
  },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckOut /> },
  { path: "/thankyou", element: <Thankyou /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={cartStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
