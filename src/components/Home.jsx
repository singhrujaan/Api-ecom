import React from 'react'
import Products from './Products'

const Home = () => {
    const categories = ["All","Men's Clothing","Women's Cothing", "Jewellery","Electronics"];
    
  return (
      <div>
    <div className='flex space-x-10 mt-10 justify-center'>
        {categories.map((item,index)=>{
            return(
                <div key={index}>
                   <button className='border-2 p-2 font-semibold rounded-md hover:bg-slate-100' >{item}</button>
                </div>
            )
        })}
    </div>
        <hr className='w-screen mt-5'/>
        <Products/>
    </div>
  )
}

export default Home