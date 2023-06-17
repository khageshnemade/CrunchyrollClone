import React from "react";
import Navbar from "../Component/Navbar";
import Carasouls from "../Component/Carasouls";
import Alert from "../Component/Alert";
import Footer from "../Component/Footer";
import MyNavigationLinks from "./MyNavigationLinks";
function HomePage() {
  return (
    <>

  <MyNavigationLinks/>
      <Carasouls />
      <Alert />
      <Footer />
    </>
  );
}

export default HomePage;
