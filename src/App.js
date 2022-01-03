import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/MainAbout/About";
import Home from "./Pages/Home/MainHome/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./Pages/Contexts/AuthProvider/AuthProvider";
import Services from "./Pages/Services/MainService/Services";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import ProductExplore from "./Pages/ProductExplore/ProductExplore";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import Contact from "./Pages/Contact/MianContact/Contact";
import Career from "./Pages/Career/Career";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route
            path="/productExplore"
            element={
              <PrivateRoute>
                <ProductExplore />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path="/details/:productId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="addAProduct"
              element={
                <AdminRoute>
                  <AddAProduct />
                </AdminRoute>
              }
            />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
    //
  );
}

export default App;
