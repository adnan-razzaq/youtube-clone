import React from "react";
import "./RelatedVideo.scss";
import VideoPreview from "../../VideoPreview";
import NextUpVideo from "./NextUpVideo/NextUpVideo";

export default function RelatedVideo() {
  return (
    <div className="related-videos">
      <NextUpVideo />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
    </div>
  );
}
