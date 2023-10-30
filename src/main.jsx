import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="bg-[#f6f9fc] dark:bg-gray-900">
        <div className="max-w-[1500px] mx-auto">
          <RouterProvider router={router} />
        </div>
        </div>
      </QueryClientProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
