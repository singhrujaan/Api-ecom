import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const myCart = useSelector((state) => state.Ecom.cart)
    console.log("mycart",myCart)
    const navComponents =[
       { name:'Home',link:'/'},
       { name:'Categories',link:'/'},
       { name:'About',link:'/'},

    ];
    console.log(navComponents,myCart,'mynavandcart')

  return (
    <div className='relative'>
    <div className='h-20 bg-cyan-600 flex space-x-20 justify-center items-center'>
        {
            navComponents.map((item,index)=>{
                return(
                    <div key={index} className='text-amber-100 font-semibold text-xl hover:text-stone-900 hover:cursor-pointer'>
                        <Link to={item.link}>{item.name}</Link>
                    </div>
                )
            })
        }
    </div>
        <Link to='/cart'><span className='absolute top-7 text-2xl text-white font-semibold right-72'>Go to Cart</span></Link>
        <span className='absolute top-7 text-2xl text-white font-semibold right-32'>cart({myCart.length})</span>
    </div>
  )
}

export default Navbar