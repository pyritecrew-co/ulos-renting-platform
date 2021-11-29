import React from "react";
import GlobalProvider from "../providers/global_provider/global.context";
import MainRouter from "./router";

function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
        <div className="lg:w-3/4 m-auto">
          <MainRouter />
        </div>
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
