import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/index.jsx";
import CartProvider from "./context/CartContext.jsx";
import SearchProvider from "./context/SearchProvider.jsx";
import "./styles/global.css";

// TanStack query client used to manage data and cache.
const queryClient = new QueryClient();

// React application and provice shared contex and routes.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* TanStack query to the application as whole */}
    <QueryClientProvider client={queryClient}>
      {/* Cart state and cart functions shared to application */}
      <CartProvider>
        {/* Product search state shared to application. */}
        <SearchProvider>
          {/* Routing and render of current route. */}
          <RouterProvider router={router} />
        </SearchProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
);
