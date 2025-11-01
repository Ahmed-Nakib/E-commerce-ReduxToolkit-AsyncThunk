import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes, useLocation } from "react-router-dom"
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Home from "./pages/Home.jsx";
import AddProduct from "./component/dashboard/AddProduct.jsx";
import ManageProducts from "./component/dashboard/ManageProducts.jsx";
import AddBanner from "./component/dashboard/AddBanner.jsx";
import ManageBanners from "./component/dashboard/ManageBanners.jsx";
const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/me");

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* Dashboard nested routes */}
        <Route path="/me" element={<DashboardLayout />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="add-banner" element={<AddBanner />} />
          <Route path="manage-banners" element={<ManageBanners />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

