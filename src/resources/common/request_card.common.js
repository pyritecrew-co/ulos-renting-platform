import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const RequestCardCommon = ({
  user,
  rentalProduct,
  description,
  priceFrom,
  priceTo,
  location,
}) => {
  return (
    <React.Fragment>
      <div>
        <div className="transition delay-200 transform hover:-translate-y-2 border p-10 shadow-xl">
          <p className="text-3xl font-bold">User{user}</p>
          <p>
            is looking for <strong>{rentalProduct}</strong>
          </p>
          <br />
          <p>Description: {description}</p>

          <p>
            Price range:{" "}
            <strong>
              {priceFrom} - {priceTo}
            </strong>
          </p>

          <p>
            Location: <strong>{location}</strong>
          </p>

          <br />
          <button className="rounded-full w-12 h-12 flex items-center justify-center">
            <AiOutlineSearch size="20px" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequestCardCommon;
