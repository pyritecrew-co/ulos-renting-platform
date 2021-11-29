import React from "react";
import HeroComponent from "./components/hero.component";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="m-5">
        <HeroComponent />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
