import React from "react";
import HeaderNav from "./containers/HeaderNav/HeaderNav";
import Sidebar from "./containers/Sidebar/Sidebar";
import Home from "./containers/Home/Home";
import AppLayout from "./components/AppLayout/AppLayout";
import { Switch, Route } from "react-router-dom";
import Watch from "./containers/Watch/Watch";

export default function App() {
  return (
    <>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/watch" component={Watch} />
        </Switch>
      </AppLayout>
    </>
  );
}
