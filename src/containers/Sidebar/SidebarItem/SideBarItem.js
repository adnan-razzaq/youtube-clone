import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./SidebarItem.scss";

export default function SideBarItem({ highlight, icon, label }) {
  const selected = highlight ? "highlight" : null;
  return (
    <Menu.Item className={`sidebar-item ${selected}`}>
      <div className="sidebar-alignment-container">
        <span>
          <Icon className="icon" size="large" name={icon} />
        </span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  );
}
