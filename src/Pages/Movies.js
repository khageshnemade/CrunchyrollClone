import React from "react";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import Button from "../Component/Button";
import Footer from "../Component/Footer";
import MyNavigationLinks from "./MyNavigationLinks";
function Movies() {
  return (
    <>
     <MyNavigationLinks/>
      <Card />
      <Button />
      <Footer />
    </>
  );
}

export default Movies;
