import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { countCart } from "../features/EcomSlice";

const ProductsInfo = () => {
  const { id } = useParams();
  const [InfoProduct, setInfoProduct] = useState();
  const [disable, setDisable] = useState(false);
  const [toast, setToast] = useState(false)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Ecom.cart);

  // const handleCart = () => {
  //   dispatch(options());
  // };
  const handleCart = (InfoProduct) => {
    const exist = cartItems.find((element) => element.id == InfoProduct.id);
    if(exist){
      setDisable(true);
      setToast(true)
    }
    else{dispatch(countCart(InfoProduct))}
  };

  useEffect(() => {
    setLoading(true);
    const Info = async () => {
      const responses = await fetch(`http://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((response2) => {
          return response2;
        })
        .catch((error) => {
        });
      setLoading(false);

      setInfoProduct(responses);
    };
    Info();
  }, []);

  return (
    <div>
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <div>
          {InfoProduct && (
            <div className="flex w-screen mt-10">
              <div className="w-1/2 m-32 border-2 p-10">
                <img
                  className="h-96"
                  src={InfoProduct.image}
                  alt="product image"
                />
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
                  <div className="text-3xl">
                    Rating: {InfoProduct.rating.rate}
                  </div>
                </div>
                <button
                  className="border-2 text-white font-semibold rounded-md px-4 py-2 bg-red-700"
                  disabled={disable}
                  onClick={() => handleCart(InfoProduct)}
                >
                  Add to Cart
                </button>
              </div>
              {toast  && (setTimeout(() => {
                  setToast(false)
                
              }, 5000))
               }
               {toast && <div className="h-auto w-1/6 right-1 py-5 px-5 bottom-1  bg-green-600 text-white fixed">
                            item already on the cart
                                </div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsInfo;
