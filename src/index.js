import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles.css';
import App from './App';
import Shop from './Shop';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Client from './Components/Client';
import Footer from './Components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Store",
    element: <Shop></Shop>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Client></Client>
    <RouterProvider router={router} />
    <Footer ></Footer>
  </React.StrictMode>
);

reportWebVitals();
