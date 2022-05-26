import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NavBer from "./Pages/Sheared/NavBer";
import Footer from "./Pages/Sheared/Footer";
import Login from "./Pages/Sheared/Login/Login";
import SignUp from "./Pages/Sheared/Login/SignUp";
import MyOrders from "./Pages/MyOrders/MyOrders";
import RequireAuth from "./Pages/Sheared/Login/RequireAuth";
import PartsDetail from "./Pages/PartsDetail/PartsDetail";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import Purchase from "./Pages/Purchase/Purchase";
import Blogs from "./Pages/Blogs/Blogs";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import NotFound from "./Pages/ManageProducts/NotFound/NotFound";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ChackOut from "./Pages/ChackOut/ChackOut";
import MyPortfolio from "./Pages/ChackOut/Protfolio/MyProtfolio";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";

function App() {
  return (
    <div>
      <NavBer></NavBer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>

        <Route
          path="/purchase/:id"
          element={<PartsDetail></PartsDetail>}
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="protfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="manageall"
            element={<ManageAllOrder></ManageAllOrder>}
          ></Route>

          <Route
            path="manageproducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
        </Route>

        <Route path="/chackout" element={<ChackOut></ChackOut>}></Route>

        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path="/order" element={<MyOrder></MyOrder>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
