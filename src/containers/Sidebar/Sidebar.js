import React from "react";
import { Menu, Divider } from "semantic-ui-react";
import "./Sidebar.scss";
import SideBarItem from "./SidebarItem/SideBarItem";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import Subscriptions from "./Subscriptions/Subscriptions";
import SideBarFooter from "./SideBarFooter/SideBarFooter";

export default function Sidebar() {
  return (
    <Menu borderless vertical fixed="left" stackable className="side-nav">
      <SideBarItem highlight="true" label="Home" icon="home" />
      <SideBarItem label="Trending" icon="fire" />
      <SideBarItem label="Followers" icon="spy" />
      <Divider />
      <SideBarHeader title="Library" />
      <SideBarItem label="History" icon="history" />
      <SideBarItem label="Watch later" icon="clock" />
      <SideBarItem label="Liked Videos" icon="thumbs up" />
      <Divider />
      <SideBarHeader title="Subscriptions" />
      <Subscriptions />
      <Divider />
      <SideBarHeader title="More from Youtube" />
      <SideBarItem label="Movie and shows" icon="film" />
      <Divider />
      <SideBarItem label="Report History" icon="flag" />
      <SideBarItem label="Help" icon="circle" />
      <SideBarItem label="Send feedback" icon="comment" />
      <SideBarFooter />
    </Menu>
  );
}
