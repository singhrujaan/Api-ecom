import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { countCart } from "../features/EcomSlice";

const ProductsInfo = () => {
  const { id } = useParams();
  const array=[];
  const [InfoProduct, setInfoProduct] = useState();
  const dispatch = useDispatch();

  // const handleCart = () => {
  //   dispatch(options());
  // };
  const handleCart=(product)=>{
    console.log("product",product)
    array.push(product);
  console.log("ARRAY1",array)
  dispatch(countCart(product))
  }

  useEffect(() => {
    const Info = async () => {
      const responses = await fetch(`http://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((response2) => {
          return response2;
        })
        .catch((error) => {
          console.log(error);
        });
      setInfoProduct(responses);
    };
    Info();
  }, []);
  console.log("infropdt", InfoProduct);

  return (
    <div>
      {InfoProduct && (
        <div className="flex w-screen mt-10">
          <div className="w-1/2 m-32 border-2 p-10">
            <img className="h-96" src={InfoProduct.image} alt="product image" />
          </div>
          <div className="mt-16 space-y-12">
            <div className="text-5xl font-bold">{InfoProduct.title}</div>
            <div>
              <h1 className="text-3xl font-bold">
                category : {InfoProduct.category}
              </h1>
            </div>
            <div className="text-xl">{InfoProduct.description}</div>
            <div className="flex justify-evenly">
              <div className="text-3xl">Price: {InfoProduct.price}$</div>
              <div className="text-3xl">Rating: {InfoProduct.rating.rate}</div>
            </div>
            <button
              className="border-2 text-white font-semibold rounded-md px-4 py-2 bg-red-700"
              onClick={()=>handleCart(InfoProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsInfo;
