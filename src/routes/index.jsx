import { createBrowserRouter } from "react-router";
import App from "../App";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";

// BrowserRouter - links path with elements:
export const router = createBrowserRouter(
  [
    {
      // Main route that share app layout.
      path: "/",
      element: <App />,
      children: [
        {
          // Home
          index: true,
          element: <Home />,
        },
        {
          // Product details with id from URL.
          path: "products/:id",
          element: <ProductDetails />,
        },
        {
          // Cart page.
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      // Wildcard /404: not found
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    // Basename for vite deployment to gh-pages
    basename: "/REACT---Butikkoppgave",
  },
);
