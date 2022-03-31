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
      state.cart = [...state.cart, payload];
      console.log(state.cart, "state of cart")
      localStorage.setItem('Items in Cart', state.cart)
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    qtyCart: (state, action) => {
      console.log("stater",action.payload)
    //   let qty = 1;

    //   state.cart = state.cart.splice(action.payload, 1, 
    //  "hello"
    //   )
    //    console.log("state",state.cart)
      // const exist = state.cart.find((element)=>element.id === action.payload)
      // if(exist){
      //   state.cart = [...state.cart,{...state.cart,qty:state.cart.qty+1}]

      // }
      // console.log(state.cart,'staeofcart')
    }
  }
});

export const {
  countCart,
  storeProducts,
  deleteCart,
  qtyCart
} = EcomSlice.actions;



export default EcomSlice.reducer;