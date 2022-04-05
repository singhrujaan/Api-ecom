import {
  createSlice,
  current
} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  allProducts: []
};



export const EcomSlice = createSlice({
  name: 'Ecom',
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      state.allProducts = action.payload
      console.log(state.allProducts, "allproducts")
    },
    countCart: (state, {
      payload
    }) => {
      console.log("pay",payload.id)
     
      // if(state.cart.some(item=>item.id===payload.id)){
      //   state.cart = state.cart.map(item => item.id === payload.id ?
      //     { ...item, qty: 1}
      //     : item)
      // }
       state.cart = [...state.cart, { ...payload, qty: 1, totalPrice:state.cart.price*1}];
        
        
      console.log(state.cart, "state of cart")
      localStorage.setItem('Items in Cart', state.cart)
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    qtyAddCart: (state, action) => {
      // const item = state.cart.filter((item)=>item === action.payload)
      if (state.cart.some(item => item.id === action.payload.id)) {
        state.cart = state.cart.map(item => item.id === action.payload.id ?
          { ...item, qty: item.qty + 1,totalPrice:item.price*(item.qty) }
          : item)
        }
        console.log("myitemsincart",state.cart)
      },
      qtyMinusCart: (state, action) => {
        // const item = state.cart.filter((item)=>item === action.payload)
        
        if (state.cart.some(item => item.id === action.payload.id)) {
          state.cart = state.cart.map(item => item.id === action.payload.id && item.qty>1? 
            { ...item, qty: item.qty - 1,totalPrice:item.price*(item.qty) }
            :item)
          }
          console.log("myitemsincart",state.cart)
      // if (state.cart.some(item => item.id === action.payload.id)) {
      //  state.cart = state.cart.find((item)=>item.qty>0)  
      // }
    }

  }
});

export const {
  countCart,
  storeProducts,
  deleteCart,
  qtyAddCart,
  qtyMinusCart
} = EcomSlice.actions;



export default EcomSlice.reducer;