import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const Productitems = ({data}) => {
  const { _id, image, name, price } = data;

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <div className="pt-3 text-sm pb-1">{name} </div>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
};

export default Productitems;
