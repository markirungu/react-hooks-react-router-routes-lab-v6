// src/routes.js
import App from './App'; // Import the App component
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />, // This wraps ALL child routes
    errorElement: <ErrorPage />,
    children: [ // These are nested inside App
      {
        index: true, // Same as path: "/"
        element: <Home />
      },
      {
        path: "directors", // Note: no leading "/"
        element: <Directors />
      },
      {
        path: "actors", // Note: no leading "/"
        element: <Actors />
      },
      {
        path: "movie/:id", // Note: no leading "/"
        element: <Movie />
      }
    ]
  }
];

export default routes;