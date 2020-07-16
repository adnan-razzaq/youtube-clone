import React from "react";
import Subscription from "./Subscription/Subscription";

export default function Subscriptions() {
  return (
    <>
      <Subscription title="MusicChannel" broadcasting />
      <Subscription title="Coursea" amountNewVideos={10} />
      <Subscription title="TEDx Talks" amountNewVideos={23} />
      <Subscription title="Stanford iOS" amountNewVideos={4} />
      <Subscription title="Udacity" amountNewVideos={114} />
    </>
  );
}
