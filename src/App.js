import React, { useContext } from "react";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import LikedVideos from "./pages/likedVideos/LikedVideos";
import Auth from "./pages/auth/Auth";
import { authContext } from "./context/AuthContextProvider";
import Channel from "./pages/channel/Channel";
import Search from "./pages/search/Search";
import Watch from "./pages/watch/Watch";
import NotFound from "./pages/notFound/NotFound";

const Protected = ({ children }) => {
  const user = useContext(authContext);
  return user ? children : <Navigate to="/auth" />;
};

const App = () => {
  const user = useContext(authContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <Protected>
              <Subscriptions />
            </Protected>
          }
        />
        <Route
          path="/likedVideos"
          element={
            <Protected>
              <LikedVideos />
            </Protected>
          }
        />
        <Route
          path="/channel/:channelId"
          element={
            <Protected>
              <Channel />
            </Protected>
          }
        />
        <Route
          path="/search/:query"
          element={
            <Protected>
              <Search />
            </Protected>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <Protected>
              <Watch />
            </Protected>
          }
        />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
