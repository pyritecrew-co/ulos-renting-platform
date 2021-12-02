import React from "react";
import { useScrollTopHelper } from "../../../helpers/custom_hooks/use_scroll_top.helper";
import HeroComponent from "./components/hero.component";

const HomePage = () => {
  useScrollTopHelper();
  return (
    <React.Fragment>
      <HeroComponent />
    </React.Fragment>
  );
};

export default HomePage;
