import React from "react";
import GlobalProvider from "../providers/global_provider/global.context";
import MainRouter from "./router";

function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
        <MainRouter />
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
