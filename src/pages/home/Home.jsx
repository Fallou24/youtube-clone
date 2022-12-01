import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header setOpenMenu={setOpenMenu} />
      <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </>
  );
};

export default Home;
