import React from "react";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { IoCloseSharp } from "react-icons/io5";
import useResponseHelper from "../../helpers/custom_hooks/use_response.helper";

export const DisplayLoadingCommon = () => {
  return (
    <React.Fragment>
      <div className="loading-container">
        <div className="lds-circle">
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const DisplayErrorCommon = () => {
  let { global } = useGlobalContext();
  let { renderTimeoutCancel } = useResponseHelper();
  return (
    <React.Fragment>
      <div className="succ-err-res bg-red-500 w-80 z-20 px-5 py-4 flex flex-col rounded fixed bottom-5 min-h-20 right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:right-5">
        <p className="text-white font-bold text-lg">{global.response?.title}</p>
        <IoCloseSharp
          className="transition delay-200 text-xl text-white hover:opacity-70 absolute top-3 right-3"
          onClick={() => renderTimeoutCancel()}
        />
        <p className="text-white">{global.response?.message}</p>
      </div>
    </React.Fragment>
  );
};

export const DisplaySuccessCommon = () => {
  let { global } = useGlobalContext();
  let { renderTimeoutCancel } = useResponseHelper();
  return (
    <React.Fragment>
      <div className="succ-err-res bg-green-500 w-80 z-20 px-5 py-4 flex flex-col rounded fixed bottom-5 min-h-20 right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:right-5">
        <p className="text-white font-bold text-lg">{global.response?.title}</p>
        <IoCloseSharp
          className="transition delay-200 text-xl text-white hover:opacity-70 absolute top-3 right-3"
          onClick={() => renderTimeoutCancel()}
        />
        <p className="text-white">{global.response?.message}</p>
      </div>
    </React.Fragment>
  );
};
