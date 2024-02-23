import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorElement from "./Pages/ErrorElement";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Orders from "./Pages/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      {
        path: "/productcategory/:productCategory",
        element: <Product></Product>,
      },
      { path: "mycart", element: <Cart></Cart> },
      {path: "myorders", element: <Orders></Orders>},
      { path: "products/:productID", element: <ProductDetail></ProductDetail> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
    ],
  },
]);
