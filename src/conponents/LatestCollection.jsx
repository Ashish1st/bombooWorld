import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Productitems from "./Productitems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    setlatestProduct(products.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <h1 className="uppercase font-[prata] my-6">Latest Collection</h1>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo
          ipsam similique! Maxime blanditiis eveniet sint pariatur delectus!
          Adipisci perspiciatis numquam assumenda.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((items, indx) => (
          <Productitems key={indx} data={items} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
