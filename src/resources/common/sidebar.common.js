import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";
import AuthService from "../../service/auth.service";
import { navbarItems } from "./navbar.common";

const SidebarCommon = () => {
  const { global, globalDispatch } = useGlobalContext();
  let navigate = useNavigate();

  const onLogout = () => {
    AuthService.logout();
    navigate("/home");
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setToggle,
    });
  };
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
                  <span
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() =>
                      globalDispatch({
                        type: GLOBAL_ACTION_TYPE.setToggle,
                      })
                    }
                  >
                    <RiCloseFill size="20px" />
                  </span>
                </div>

                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex flex-col justify-between">
                      {global.currentUser !== null && (
                        <div>
                          <div>
                            <p className="p-4">{global.currentUser?.email}</p>
                          </div>
                          <hr />
                        </div>
                      )}
                      <div>
                        <ul className="">
                          {navbarItems.map((item) => {
                            if (global.currentUser !== null) {
                              if (
                                item.name !== "Login" &&
                                item.name !== "Signup"
                              ) {
                                return (
                                  <li
                                    className="p-3 hover:bg-gray-200"
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
                              }
                            } else {
                              return (
                                <li
                                  className="p-3 hover:bg-gray-200"
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
                            }
                            return null;
                          })}
                        </ul>
                      </div>
                      <div>
                        {global.currentUser !== null && (
                          <ul>
                            <li
                              className="p-3 hover:bg-gray-200"
                              onClick={() => onLogout()}
                            >
                              Logout
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
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
