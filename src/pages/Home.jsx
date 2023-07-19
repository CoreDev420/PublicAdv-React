import React from "react";
import Nav from "../component/Nav";
import "../CSS/icofont.min.css";
import HeaderHomePage from "../component/HeaderHomePage";
import SectionHomePageCategorias from "../component/SectionHomePageCategorias";
import SectionHomePageAnnouncements from "../component/SectionHomePageAnnouncements";
const Home = () => {
  return (
    <>
      <div>
        <Nav />
        <HeaderHomePage />
        <SectionHomePageCategorias/>
        <SectionHomePageAnnouncements/>
      </div>
    </>
  );
};

export default Home;
