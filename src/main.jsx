import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/index.jsx";
import CartProvider from "./context/CartContext.jsx";
import SearchProvider from "./context/SearchProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
);
