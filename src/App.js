import Navbar from "./admin/Navbar";
import "./admin/Navbar.css";
import SbDashboard from "./admin/sidebar/SbDashboard";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import SbCategory from "./admin/sidebar/SbCategory";
import SbProduct from "./admin/sidebar/SbProducts";
import SbSlideshow from "./admin/sidebar/SbSlideshow";
import Sborders from "./admin/sidebar/SbOrder";
import SbPayment from "./admin/sidebar/SbPayment";
import SbUsers from "./admin/sidebar/SbUsers";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Sidebar />}></Route>
          <Route path="/admin/dashboard" element={<SbDashboard />}></Route>
          <Route path="/admin/category" element={<SbCategory />}></Route>
          <Route path="/admin/products" element={<SbProduct />}></Route>
          <Route path="/admin/slideshow" element={<SbSlideshow />}></Route>
          <Route path="/admin/orders" element={<Sborders />}></Route>
          <Route path="/admin/payment" element={<SbPayment />}></Route>
          <Route path="/admin/users" element={<SbUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
