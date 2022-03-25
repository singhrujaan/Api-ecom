import React from 'react';
import { useEffect,useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const categories = ["All","men's clothing","women's clothing", "jewelery","electronics"];
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data)
    
    const filterHandler = (item)=>{
        if (filteredData.length>0){
            if(item!== "All"){     const result =  data.filter((value)=>value.category===item);
                setFilteredData(result)
                console.log("saad",result,item,data); }
                else{
                    setFilteredData(data)
                }
   
    }
      
      
    }
    
    useEffect(() => {
      
        const fetchedData = async () =>{
            const response = await fetch("http://fakestoreapi.com/products/").then((result1)=>result1.json()).then(result=>{
                console.log("result",result)
                return result;
            }).catch(error=>{
                console.log("error",error)
            })
            setData(response)
            setFilteredData(response)
           
        }
        fetchedData();
    }, [])
    console.log("response",data);

  return (
      <>
      <div className='flex space-x-10 mt-10 justify-center'>
          {console.log("cateogories",categories)}
        {categories.map((item,index)=>{
            {console.log("item",item)}
            return(
                <div key={index}>
                   <button className='border-2 p-2 font-semibold rounded-md hover:bg-slate-100' onClick={()=>filterHandler(item)}>{item}</button>
                </div>
            )
        })}
    </div>
      <hr className='w-screen mt-5'/>
    <div className='flex flex-wrap '>
        {filteredData.map((item,index)=>{
            return(
                <div  key={index}>
                    <ProductCard item={item}/>
                </div>    
            )
        })}
    </div>
    </>
  )
}

export default Products