import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routes/about';
import Dashboard from './routes/dashboard';
import Home from './routes/home';
import Sites from './routes/sites';
import SitePages from './routes/site-pages';
import SitePage from './routes/site-page';
import './index.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'sites',
        element: <Sites />,
      },
      {
        path: ':siteId/pages',
        element: <SitePages />,
        children: [
          {
            path: ':siteId/pages/:pageId',
            element: <SitePage />,
          }
        ],
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
