import React from "react";
import { useScrollTopHelper } from "../../../helpers/custom_hooks/use_scroll_top.helper";
import DisplayItemComponent from "./components/display_item.component";

const BrowsePage = () => {
  useScrollTopHelper();
  return (
    <React.Fragment>
      <div className="mx-3 flex flex-col items-center lg:items-start lg:mx-0 my-6">
        <h1>ALL PRODUCTS</h1>
        <br />
        <DisplayItemComponent />
      </div>
    </React.Fragment>
  );
};

export default BrowsePage;
