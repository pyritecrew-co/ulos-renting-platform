import React from "react";
import { useNavigate } from "react-router";
import { RiMenu3Line } from "react-icons/ri";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";

const NavbarCommon = () => {
  let { globalDispatch } = useGlobalContext();
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="p-3 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="lg:p-3 text-green-600 font-bold text-3xl">Ulos</div>
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
        <div className="hidden lg:flex lg:flex-row lg:space-x-5">
          {navbarItems.map((item) => {
            return (
              <div
                key={item.id}
                className="hover:text-green-600 cursor-pointer"
                onClick={() => navigate(item.route)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarCommon;

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
