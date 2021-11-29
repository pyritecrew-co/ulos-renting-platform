import React from "react";
import { Outlet } from "react-router";
import FooterCommon from "../common/footer.common";
import NavbarCommon from "../common/navbar.common";
import SidebarCommon from "../common/sidebar.common";

const Layout = () => {
  return (
    <React.Fragment>
      <NavbarCommon />
      <SidebarCommon />
      <Outlet />
      <FooterCommon />
    </React.Fragment>
  );
};

export default Layout;
