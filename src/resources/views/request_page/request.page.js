import React from "react";
import RequestCardCommon from "../../common/request_card.common";
import { requestFakeData } from "./request.fakedata";

const RequestPage = () => {
  return (
    <React.Fragment>
      <div className="m-6">
        <h1>REQUEST CATALOG</h1>
        <br />
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 lg:justify-items-stretch gap-6">
          {requestFakeData.map((item) => {
            let {
              user_id,
              price_from,
              price_to,
              descryption,
              location,
              rental_product,
            } = item;
            return (
              <RequestCardCommon
                user={user_id}
                rentalProduct={rental_product}
                description={descryption}
                priceFrom={price_from}
                priceTo={price_to}
                location={location}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequestPage;
