import React from "react";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__container">
        <Sidebar />
        <Categories />
      </div>
    </>
  );
};

export default Home;
