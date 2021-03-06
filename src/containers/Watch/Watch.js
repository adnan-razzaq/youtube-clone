import React from "react";
import Video from "../../components/Video/Video";
import RelatedVideo from "../../components/VideoGrid/RelatedVideo/RelatedVideo";
import "./Watch.scss";

export default function Watch() {
  return (
    <>
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <div
          className="metadata"
          style={{ width: "100%", height: "100px", background: "#F91112" }}
        >
          Metadata
        </div>
        <div
          className="video-info-box"
          style={{ width: "100%", height: "100px", background: "#BD10E0" }}
        >
          Video Info box
        </div>
        <div
          className="comments"
          style={{ width: "100%", height: "100px", background: "#9013FE" }}
        >
          comments
        </div>
        <RelatedVideo className="relatedVideos" />
      </div>
    </>
  );
}
