import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "../resources/common/404.common";
import AuthPage, { AUTH_TYPE } from "../resources/views/auth_page/auth.page";
import BrowsePage from "../resources/views/browse_page/browse.page";
import HomePage from "../resources/views/home_page/home.page";
import Layout from "../resources/views/layout";
import RequestPage from "../resources/views/request_page/request.page";

const MainRouter = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route
              path="/signup"
              element={<AuthPage type={AUTH_TYPE.register} />}
            />
            <Route
              path="/login"
              element={<AuthPage type={AUTH_TYPE.login} />}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default MainRouter;
