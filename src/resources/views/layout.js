import React from "react";
import { Outlet } from "react-router";
import FooterCommon from "../common/footer.common";
import NavbarCommon from "../common/navbar.common";
import SidebarCommon from "../common/sidebar.common";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="lg:w-3/4 m-auto">
        <NavbarCommon />
      </div>
      <div className="lg:w-3/4 m-auto">
        <Outlet />
      </div>

      <SidebarCommon />
      <br />
      <br />

      <FooterCommon />
    </React.Fragment>
  );
};

export default Layout;
