import React from "react";
import { Menu, Image, Form, Input, Icon } from "semantic-ui-react";
import logo from "../../assests/images/logo.jpg";
import "./HeaderNav.scss";
import { Link } from "react-router-dom";
export default function HeaderNav() {
  return (
    <Menu borderless color="teal" className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link to="/">
          {" "}
          <Image src={logo} size="tiny" />
        </Link>
      </Menu.Item>
      <Menu.Menu className="nav-container">
        <Menu.Item>
          <Form>
            <Form.Field>
              <Input placeholder="Search" size="small" action="Go" />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon className="header-icon" name="video camera" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="chat" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large" />
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src="http://via.placeholder.com/80x80" avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
}
