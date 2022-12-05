import React from "react";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Videos from "../../components/videos/Videos";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__container">
        <Sidebar />
        <div className="home__right">
          <Categories />
          <Videos/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
