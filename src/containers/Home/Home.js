import React from "react";
import "./Home.scss";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

export default function Home() {
  return (
    <div className="home">
      <div className="responsive-video-grid-container">
        <VideoGrid title="Trending" />
        <VideoGrid title="Autos and Vehicles" hideDivider={true} />
      </div>
    </div>
  );
}
