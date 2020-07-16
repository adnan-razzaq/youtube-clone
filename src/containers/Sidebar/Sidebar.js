import React from "react";
import { Menu } from "semantic-ui-react";
import "./Sidebar.scss";
import SideBarItem from "./SidebarItem/SideBarItem";

export default function Sidebar() {
  return (
    <Menu vertical fixed="left" stackable className="side-nav">
      <SideBarItem highlight="true" label="Home" icon="home" />
      <SideBarItem label="Trending" icon="fire" />
      <SideBarItem label="Followers" icon="spy" />
      <SideBarItem label="History" icon="history" />
      <SideBarItem label="Watch later" icon="clock" />
      <SideBarItem label="Liked Videos" icon="thumbs up" />
      <SideBarItem label="Movie and shows" icon="film" />
      <SideBarItem label="Reoprt History" icon="flag" />
      <SideBarItem label="Help" icon="circle" />
      <SideBarItem label="Sed feedback" icon="comment" />
    </Menu>
  );
}
