import React, { ReactNode } from "react";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
