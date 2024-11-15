import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout";

const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
