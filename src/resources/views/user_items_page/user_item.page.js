import React from "react";
import { useNavigate } from "react-router";
import { useScrollTopHelper } from "../../../helpers/custom_hooks/use_scroll_top.helper";
import UserItemProvider from "../../../providers/user_item_provider/user_item.context";
import CardLoadingCommon from "../../common/card_loading.common";
import { FORM_TYPE } from "../form_page/form_selector.page";
import UserRequestsComponent from "./components/user_requests.component";

const UserItemPage = () => {
  useScrollTopHelper();
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <UserItemProvider>
        <div className="mx-3 flex flex-col items-center lg:items-start lg:mx-0 my-6">
          <div className="w-full flex flex-row justify-between">
            <h1 className="truncate">Your Items for Rent</h1>
            <div>
              <button
                className="px-5"
                onClick={() => navigate("/form/" + FORM_TYPE.rental)}
              >
                Add New
              </button>
            </div>
          </div>
          <br />
          <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 lg:justify-items-stretch gap-6">
            <CardLoadingCommon />
          </div>
        </div>
        <br />
        <div className="mx-3 flex flex-col items-center lg:items-start lg:mx-0 my-6">
          <div className="w-full flex flex-row justify-between">
            <h1 className="truncate">Your Requests</h1>
            <div>
              <button
                className="px-5"
                onClick={() => navigate("/form/" + FORM_TYPE.request)}
              >
                Add New
              </button>
            </div>
          </div>

          <br />
          <UserRequestsComponent />
        </div>
      </UserItemProvider>
    </React.Fragment>
  );
};

export default UserItemPage;
