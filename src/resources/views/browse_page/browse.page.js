import React from "react";
import ItemCardCommon from "../../common/item_card.common";
import { itemFakeData } from "./item.fakedata";

const BrowsePage = () => {
  return (
    <React.Fragment>
      <div className="mx-3 flex flex-col items-center lg:items-start lg:mx-0 my-6">
        <h1>ALL PRODUCTS</h1>
        <br />
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 lg:justify-items-stretch gap-6">
          {itemFakeData.map((item, key) => {
            let { product, stars, price, img } = item;
            return (
              <ItemCardCommon
                key={key}
                product={product}
                stars={stars}
                price={price}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrowsePage;
