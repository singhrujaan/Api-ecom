import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../features/EcomSlice";
import { BiPlusMedical } from "react-icons/bi";
import { TiMinus } from "react-icons/ti";
import { qtyAddCart,qtyMinusCart } from "../features/EcomSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const items = useSelector((state) => state.Ecom.cart);
  const [filteredCart, setFilteredCart] = useState(items);
  const [totalSum, setTotalSum] = useState(0);
  // const[count,setCount]=useState(0)
  // const [counter, setCounter] = useState(1);
  useEffect(() => {
    let sum = 0;
    items.map((item)=>{
      sum= sum+item.price*item.qty
    })
    setTotalSum(sum)
  }, [items,totalSum])
  
  const totalCart = items.map((item)=>{
    let count = 0
    return(
      count+=item.totalPrice
    )
  })
  let sum = 0;
  for (let num of totalCart){
    sum=sum+num;
  }
  

  
  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };



  useEffect(() => {
    setFilteredCart(items);
  }, [items]);

  useEffect(() => {
    const results = items.filter((item) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    setFilteredCart(results);
  }, [search]);

  // if(counter===0){
  //   handleDelete()
  // }
  const handlePlus = (item) => {

    dispatch(qtyAddCart(item));
  };
  const handleMinus = (item) => {
    
    dispatch(qtyMinusCart(item))
  };
  return (
    <div>
      <input
        className="border-2 px-4 py-2 rounded-md mt-5"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="search items"
      />
      {(filteredCart.length>0 ) ? (
        filteredCart.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col ">
              <div className=""></div>
              <div className="flex justify-around border-2 mt-5 space-y-5">
                <div className="flex space-x-24 ">
                  <img src={item.image} width="200px" alt={item.title} />
                  <div className="flex mt-20 space-x-10">
                    <BiPlusMedical
                      className="h-7 w-7 cursor-pointer"
                      onClick={() => handlePlus(item)}
                    />
                    <TiMinus
                      className="h-7 w-7 cursor-pointer"
                      onClick={() => handleMinus(item)}
                    />
                  </div>
                </div>
                <div className="space-y-10 font-semibold">
                  <div className="flex font-bold text-2xl">
                    {item.title} X {item.qty}
                  </div>
                  <div className="flex space-x-8">
                    {/* <div>rating: {item.rating.rate}</div> */}
                    <div className="text-xl">price: {item.price} $</div>
                    <div className="text-xl">
                      Total price: {item.price} X {item.qty} ={" "}
                      {item.price * item.qty} $
                      {/* {item.totalPrice} */}
                    </div>
                  </div>
                  <div>
                    <button
                      className="border-2 px-3 rounded-md bg-red-500 text-white font-semibold hover:bg-red-700 py-1"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete From Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        
      ) : (
        <div className="font-bold text-3xl flex justify-center items-center mt-32">
          No items found on the Cart
        </div>
      )}
      <span className="text-5xl font-semibold "> 
      Total Price:&nbsp;{totalSum} $
      </span>
    </div>
  );
};

export default CartItems;
