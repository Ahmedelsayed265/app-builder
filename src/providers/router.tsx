import { createBrowserRouter } from "react-router";

import RootLayout from "@/RootLayout";
import Error from "@/routes/Error";

import ThemeCustomizer from "@/routes/ThemeCustomizer";
import Login from "@/routes/Login";
import VerifyOtp from "@/routes/VerifyOtp";
import ChooseStoreType from "@/routes/ChooseStoreType";
import ChooseStoreTheme from "@/routes/ChooseStoreTheme";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ThemeCustomizer />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/choose-store-type",
    element: <ChooseStoreType />,
  },
  {
    path: "/choose-store-theme",
    element: <ChooseStoreTheme />,
  },
]);
