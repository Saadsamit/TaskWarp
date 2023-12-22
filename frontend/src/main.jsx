import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Toaster/>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
