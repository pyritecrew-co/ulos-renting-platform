import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";
import { navbarItems } from "./navbar.common";

const SidebarCommon = () => {
  const { global, globalDispatch } = useGlobalContext();
  let navigate = useNavigate();
  return (
    <React.Fragment>
      {global.toggleSidebar && (
        <div
          className="fixed inset-0 overflow-hidden"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() =>
                      globalDispatch({
                        type: GLOBAL_ACTION_TYPE.setToggle,
                      })
                    }
                  >
                    <RiCloseFill size="20px" />
                  </button>
                </div>

                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <ul className="">
                      {navbarItems.map((item) => {
                        return (
                          <li
                            className="p-3 hover:bg-green-100"
                            key={item.id}
                            onClick={() => {
                              navigate(item.route);
                              globalDispatch({
                                type: GLOBAL_ACTION_TYPE.setToggle,
                              });
                            }}
                          >
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarCommon;
