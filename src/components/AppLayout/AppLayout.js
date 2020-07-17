import React from "react";
import HeaderNav from "../../containers/HeaderNav/HeaderNav";
import "./AppLayout.scss";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <HeaderNav />
      {children}
    </div>
  );
}
