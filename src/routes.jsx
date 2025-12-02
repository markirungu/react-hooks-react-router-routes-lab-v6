// routes.js - CHANGE THIS:
import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

// Export the ROUTES array (not router):
const routes = [  // <-- Change 'router' to 'routes'
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'movie/:id',
        element: <Movie />
      },
      {
        path: 'directors',
        element: <Directors />
      },
      {
        path: 'actors',
        element: <Actors />
      }
    ]
  }
];

export default routes;  // <-- Export 'routes', not 'router'