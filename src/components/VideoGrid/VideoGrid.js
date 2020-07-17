import React from "react";
import VideoPreview from "../VideoPreview";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import VideoGridHeader from "./VideoGridHeader/VideoGridHeader";

export default function VideoGrid({ hideDivider, title }) {
  const divider = hideDivider ? null : <Divider />;
  return (
    <>
      <VideoGridHeader title={title} />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </>
  );
}
