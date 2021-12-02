import React from "react";
import { itemFakeData } from "../item.fakedata";
import ItemCardCommon from "../../../common/item_card.common";
import { useGlobalContext } from "../../../../providers/global_provider/global.context";
import CardLoadingCommon from "../../../common/card_loading.common";

const DisplayItemComponent = () => {
  const { global } = useGlobalContext();

  if (global.online === false) {
    return (
      <React.Fragment>
        <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 lg:justify-items-stretch gap-6">
          <CardLoadingCommon />
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {global.loading === false ? (
        <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-4 lg:justify-items-stretch gap-6">
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
      ) : (
        <React.Fragment>
          <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 lg:justify-items-stretch gap-6">
            <CardLoadingCommon />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DisplayItemComponent;
