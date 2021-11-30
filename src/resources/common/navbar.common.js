import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { RiMenu3Line } from "react-icons/ri";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";
import AuthService from "../../service/auth.service";

const NavbarCommon = () => {
  let { global, globalDispatch } = useGlobalContext();
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="p-3 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="lg:p-2 text-gray-900 font-bold text-2xl">Ulos</div>
          <div
            className="lg:hidden rounded p-3 hover:bg-gray-200"
            onClick={() =>
              globalDispatch({
                type: GLOBAL_ACTION_TYPE.setToggle,
              })
            }
          >
            <RiMenu3Line size="25px" />
          </div>
        </div>
        {/* For Web */}
        <div className="hidden lg:flex lg:flex-row lg:space-x-5 items-center justify-center">
          {navbarItems.map((item) => {
            if (global.currentUser === null) {
              return (
                <div
                  key={item.id}
                  className="hover:text-gray-500 cursor-pointer"
                  onClick={() => navigate(item.route)}
                >
                  {item.name}
                </div>
              );
            } else {
              if (item.name !== "Login" && item.name !== "Signup") {
                return (
                  <div
                    key={item.id}
                    className="hover:text-gray-500 cursor-pointer"
                    onClick={() => navigate(item.route)}
                  >
                    {item.name}
                  </div>
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarCommon;

export const UserCredentialInfo = () => {
  let { global } = useGlobalContext();
  useEffect(() => console.log(global));
  return (
    <React.Fragment>
      {global.currentUser !== null ? (
        <div className="hidden lg:bg-gray-900 lg:py-2 lg:px-3 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div className="cursor-pointer">
            <p className="text-xs text-gray-400">ULOS RENTING PLATFORM 2021</p>
          </div>
          <div className="flex flex-row items-center justify-end cursor-pointer">
            <p className="text-xs text-gray-400">{global.currentUser?.email}</p>
            <p className="text-xs text-gray-400 px-2">|</p>
            <p
              className="text-xs text-gray-400 hover:text-white"
              onClick={() => {
                AuthService.logout();
              }}
            >
              LOGOUT
            </p>
          </div>
        </div>
      ) : undefined}
    </React.Fragment>
  );
};

export const navbarItems = [
  {
    id: 0,
    name: "Home",
    route: "/home",
  },
  {
    id: 1,
    name: "Browse",
    route: "/browse",
  },
  {
    id: 2,
    name: "Request",
    route: "/request",
  },
  {
    id: 3,
    name: "Login",
    route: "/login",
  },
  {
    id: 4,
    name: "Signup",
    route: "/signup",
  },
];
