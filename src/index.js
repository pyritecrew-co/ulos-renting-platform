import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./resources/styles/main.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import GlobalProvider from "./providers/global_provider/global.context";
// import { firebase } from "./config/firebase.config";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
