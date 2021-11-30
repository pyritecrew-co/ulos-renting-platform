import React from "react";
import { useGlobalContext } from "../providers/global_provider/global.context";
import {
  DisplayErrorCommon,
  DisplayLoadingCommon,
  DisplaySuccessCommon,
} from "../resources/common/response.common";
import MainRouter from "./router";

function App() {
  let { global } = useGlobalContext();
  return (
    <React.Fragment>
      {global.loading && <DisplayLoadingCommon />}
      {global.error && <DisplayErrorCommon />}
      {global.success && <DisplaySuccessCommon />}

      <MainRouter />
    </React.Fragment>
  );
}

export default App;
