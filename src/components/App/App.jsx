import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout";

const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
