import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { favourites,deleteFavourites } from "../features/FavSlice";
import { useSelector } from "react-redux";

const ProductCard = ({ item,footer }) => {

  const favItems = useSelector((state)=>state.Fav.favItems);
  const allProducts = useSelector((state)=>state.Ecom.allProducts);

  const [iconClicked, setIconClicked] = useState(false);
  const dispatch = useDispatch();
console.log("favouritetoy",favItems);

useEffect(()=>{
  console.log("favguy",favItems);
  

},[])


  const handleIconClick=(item)=>{
    
    const exist = favItems.some(element=>element.id == item.id);
    console.log("exist",favItems,iconClicked,item);
 
    if (!exist){
       console.log("clicked");
 
      dispatch(favourites(item));
    
 
    }else{
 
      console.log("unclicked");
    
      dispatch(deleteFavourites(item))
    }
     setIconClicked(!iconClicked); 
    

    // favourites
  }


  return (
    <div className="flex flex-col items-center w-96 my-10 mx-10 h-[600px] border-2 relative">
      <div className="">
        <img className="h-64 w-64" src={item.image} alt="" />
      </div>
      <div className="flex flex-col flex-wrap w-1/2">
        <span className="text-2xl">{item.title}</span>
        <span className="text-2xl">price: {item.price}$</span>



        {!footer && 
        <div className="">
          <button className=" h-10 mt-10  absolute left-5 bottom-10  py-2 px-9">
            {console.log("clickable",iconClicked)}
            <IoMdHeart className={`${iconClicked && "fill-red-600"} fill-slate-200 h-8 w-10 hover:fill-red-600`} onClick={()=>handleIconClick(item)}/>
          </button>
          <Link to={`products/${item.id}`}>
            <button className="border-2 mt-10 hover:bg-cyan-600 hover:text-white absolute bottom-10 ml-10 py-2 px-9">
              Buy now
            </button>
          </Link>
        </div>
        }
      </div>
    </div>
  );
};

export default ProductCard;
