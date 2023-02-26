import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import App from "./App";
import Register from "./routes/login-and-registration/register";
import Login from "./routes/login-and-registration/login";
import ProtectedAuth from "./routes/protected";

import store from "./redux/store";
import { Provider } from "react-redux";
import ProfileDashboard from "./routes/profile/profile-dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <h1 className="text-white text-xl">dashboard</h1>,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "auth",
    element: <ProtectedAuth />,
    children: [
      {
        path: "dashboard",
        element: <ProfileDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
