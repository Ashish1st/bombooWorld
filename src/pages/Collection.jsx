import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Productitems from "../conponents/Productitems";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [filter, setfilter] = useState(false);
  const [sortType, setSortType] = useState("");

  // Handle sorting based on user's selection from the radio buttons
  const handleSort = (type) => {
    setSortType(type);
  };

  // Sort products based on sortType
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "lowToHigh") {
      return a.price - b.price;
    }
    if (sortType === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t">
      {/* items filter section */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-1" onClick={()=> setfilter(!filter)}>
          FILTER
            <i className={`sm:hidden ${filter ? "ri-arrow-drop-down-line" : "ri-arrow-drop-right-line"}`}></i>
        </p>
        {/* categories  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm capitalize font-semibold">Price</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 items-center justify-start">
              <button
                className="border border-gray-700 w-3 h-3 rounded-full "
                onClick={(e) => handleSort("lowToHigh")}
                style={{
                  backgroundColor:
                    sortType === "lowToHigh" ? "blue" : "initial",
                  color: sortType === "lowToHigh" ? "white" : "black",
                }}
              ></button>
              <span>Low to High</span>
            </p>
            <p className="flex gap-2 items-center justify-start">
              <button
                className="border border-gray-700 w-3 h-3 rounded-full "
                onClick={(e) => handleSort("highToLow")}
                style={{
                  backgroundColor:
                    sortType === "highToLow" ? "blue" : "transparent",
                  color: sortType === "highToLow" ? "white" : "black",
                }}
              ></button>
              <span>High to Low</span>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {sortedProducts.map((items, indx) => (
          <Productitems data={items} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
