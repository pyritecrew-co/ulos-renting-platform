import React from "react";
import { Outlet } from "react-router";
import FooterCommon from "../common/footer.common";
import NavbarCommon, { UserCredentialInfo } from "../common/navbar.common";
import SidebarCommon from "../common/sidebar.common";

const Layout = () => {
  return (
    <React.Fragment>
      <UserCredentialInfo />
      <div className="lg:w-3/4 m-auto">
        <NavbarCommon />
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
