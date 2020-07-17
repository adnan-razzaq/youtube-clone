import React from "react";
import "./VideoGridHeader.scss";

export default function VideoGridHeader({ title }) {
  return (
    <div className="video-grid-header">
      <span className="title">{title}</span>
    </div>
  );
}
