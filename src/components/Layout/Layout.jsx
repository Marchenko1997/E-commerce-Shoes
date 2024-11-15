
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.pageContainer}>
      <AppBar />
      <main className={css.mainContainer}>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
