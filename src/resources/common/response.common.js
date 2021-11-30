import React from "react";

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
