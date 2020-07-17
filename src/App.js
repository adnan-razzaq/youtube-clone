import React from "react";
import HeaderNav from "./containers/HeaderNav/HeaderNav";
import Sidebar from "./containers/Sidebar/Sidebar";
import Home from "./containers/Home/Home";

export default function App() {
  return (
    <>
      <HeaderNav />
      <Sidebar />
      <Home />
    </>
  );
}
