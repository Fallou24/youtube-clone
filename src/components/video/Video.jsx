import React from "react";

const Video = () => {
  return (
    <div className="video">
      <p className="video__img">
        <img src="/img.jpg" alt="" />
        <span>4:18</span>
      </p>
      <div className="video__bottom">
        <p className="channel__img">
          <img src="/img.jpg" alt="" />
        </p>
        <div>
          <p className="video__title">Lorem ipsum dolor sit amet consectetur, modi.</p>
          <p className="channel__name">Lorem, ipsum.</p>
          <p className="video__stats">
            <span>24 K vues</span>
            <span className="dot"></span>
            <span className="video__date">Il y a 1 jour</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
