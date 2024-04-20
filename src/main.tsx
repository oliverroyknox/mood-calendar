import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundaryOutlet } from "@components/error-boundary";
import { CalendarPage } from "@pages/calendar";
import { ErrorPage } from "@pages/error";
import { LandingPage } from "@pages/landing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./main.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryOutlet FallbackComponent={ErrorPage} />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Auth0Provider
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
