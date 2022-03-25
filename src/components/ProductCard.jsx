import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-96 my-10 mx-10 h-[600px] border-2 relative">
      <div className="">
        <img className="h-64 w-64" src={item.image} alt="" />
      </div>
      <div className="flex flex-col flex-wrap w-1/2">
        <span className="text-2xl">{item.title}</span>
        <span className="text-2xl">price: {item.price}$</span>
        <Link to={`products/${item.id}`}>
          <button className="border-2 mt-10 hover:bg-cyan-600 hover:text-white absolute bottom-10 ml-10 py-2 px-9">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
