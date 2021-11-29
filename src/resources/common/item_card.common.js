import React from "react";
import { AiFillStar } from "react-icons/ai";

const ItemCardCommon = ({ product, stars, price, img }) => {
  return (
    <React.Fragment>
      <div className="transition delay-200 transform hover:-translate-y-2 rounded">
        <div className="w-72 h-96 ">
          <img
            className="object-cover h-full rounded"
            src={img}
            alt={product}
          />
        </div>
        <h2 className="font-bold py-1">{product}</h2>
        <div className="flex flex-row items-center">
          <StarCounter startCount={stars} />
          <p className="pl-2">({stars})</p>
        </div>
        <p className="font-bold">&#36; {price}</p>
      </div>
    </React.Fragment>
  );
};

export default ItemCardCommon;

const StarCounter = ({ startCount }) => {
  let array = [1, 2, 3, 4, 5];
  return (
    <React.Fragment>
      <div className="flex flex-row items-center">
        {[...Array(array[startCount - 1])].map((item, key) => {
          return <AiFillStar key={key} className="text-yellow-500" />;
        })}
      </div>
    </React.Fragment>
  );
};
