import React from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import "./Subscription.scss";

export default function Subscription({ title, broadcasting, amountNewVideos }) {
  const rightElement = broadcasting ? (
    <Icon name="signal" />
  ) : (
    <span>{amountNewVideos}</span>
  );
  return (
    <Menu.Item>
      <div className="subscription">
        <div>
          <Image src="http://via.placeholder.com/28x28" avatar />
          <span>{title}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}
