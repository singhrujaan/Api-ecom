import React from 'react';
import { useEffect,useState } from 'react';
import ProductCard from './ProductCard';
import {  useDispatch,useSelector } from "react-redux";
import { storeProducts } from "../features/EcomSlice";
import Footer from './Footer';


const Products = () => {
    const categories = ["All","men's clothing","women's clothing", "jewelery","electronics"];
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();



    const filterHandler = (item)=>{
        if (filteredData && filteredData.length>0){
            if(item!== "All"){     const result =  data.filter((value)=>value.category===item);
                setFilteredData(result)
                ; }
                else{
                    setFilteredData(data)
                }
   
    }
    }
    useEffect(()=>{

    },[])


    
    useEffect(() => {
      
        const fetchedData = async () =>{
            setLoading(true)
            const response = await fetch("http://fakestoreapi.com/products/").then((result1)=>result1.json()).then(result=>{
                
                return result;
            }).catch(error=>{
            })
            setLoading(false)
            setData(response)
            setFilteredData(response)
            dispatch(storeProducts(data))
        }
        fetchedData();
    }, [])

  return (
      <>
      {loading===true?<p>Loading</p>:
      <div>
      <div className='flex space-x-10 mt-10 justify-center'>
        {categories.length>0 && categories.map((item,index)=>{
            return(
                <div key={index}>
                   <button className='border-2 p-2 font-semibold rounded-md hover:bg-slate-100' onClick={()=>filterHandler(item)}>{item}</button>
                </div>
            )
        })}
    </div>
      <hr className='w-screen mt-5'/>
    <div className='flex flex-wrap '>
        {filteredData.length>0 && filteredData.map((item,index)=>{
            return(
                <div  key={index}>
                    <ProductCard item={item} />
                </div>    
            )
        })}
    
    </div>
    <Footer/>
    </div>}
    </>
  )
}

export default Products