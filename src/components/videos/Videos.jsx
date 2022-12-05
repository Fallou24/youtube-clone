import React from "react";
import Video from "../video/Video";
import  "./videos.scss"

const Videos = () => {
  return (
    <div className="videos">
      <div className="videos__container">
        <Video />
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
};

export default Videos;
