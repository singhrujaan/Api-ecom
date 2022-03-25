import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    const myCart = useSelector((state) => state.Ecom.cart)
    console.log(myCart)
    const navComponents =['Home','Categories','About'];

  return (
    <div className='relative'>
    <div className='h-20 bg-cyan-600 flex space-x-20 justify-center items-center'>
        {
            navComponents.map((item,index)=>{
                return(
                    <div key={index} className='text-amber-100 font-semibold text-xl hover:text-stone-900 hover:cursor-pointer'>
                        {item}
                    </div>
                )
            })
        }
    </div>
        <span className='absolute top-7 text-2xl text-white font-semibold right-32'>cart({myCart})</span>
    </div>
  )
}

export default Navbar