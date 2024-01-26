import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apropos from "./A_propos";
import Error from "./Error";
import Appt from "./Appt";

/* router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  { path: "/Logement", element: <div>Logement</div> },
  {
    path: "/A_propos",
    element: (
      <div>
        <Apropos />
      </div>
    ),
  },
  {
    path: "Appt_page",
    element: (
      <div>
        <Appt />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
