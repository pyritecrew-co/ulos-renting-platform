import React from "react";
import { useScrollTopHelper } from "../../../helpers/custom_hooks/use_scroll_top.helper";
import RequestProvider from "../../../providers/request_provider/request.context";
import DisplayRequestsComponent from "./components/display_requests.component";

const RequestPage = () => {
  useScrollTopHelper();
  return (
    <React.Fragment>
      <RequestProvider>
        <div className="mx-3 flex flex-col items-center lg:items-start lg:mx-0 my-6">
          <h1>REQUEST CATALOG</h1>
          <br />
          <DisplayRequestsComponent />
        </div>
      </RequestProvider>
    </React.Fragment>
  );
};

export default RequestPage;
