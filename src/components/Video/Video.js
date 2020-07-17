import React from "react";
import "./Video.scss";

export default function Video({ id }) {
  if (!id) {
    return null;
  }
  const urlid = id;
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${urlid}/* ?autoplay=1 */`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
