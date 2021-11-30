import React from "react";
import { useGlobalContext } from "../providers/global_provider/global.context";
import { DisplayLoadingCommon } from "../resources/common/response.common";
import MainRouter from "./router";

function App() {
  let { global } = useGlobalContext();
  return (
    <React.Fragment>
      {global.loading && <DisplayLoadingCommon />}
      <MainRouter />
    </React.Fragment>
  );
}

export default App;
