
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>,
  },
]);

createRoot(document.getElementById("root")).render(
);


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
     {/* <Home></Home> */}
     {/* <LoginPage></LoginPage> */}
     {/* <SignupPage></SignupPage> */}
     <RouterProvider router={router} />

    </div>
  );
}

export default App;
