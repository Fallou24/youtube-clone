import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import LikedVideos from "./pages/likedVideos/LikedVideos";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
