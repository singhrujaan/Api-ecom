import { createSlice,current  } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};



export const EcomSlice = createSlice({
  name: 'Ecom',
  initialState,
  reducers: {
    countCart: (state,{payload}) => {
      
  state.cart.push(payload)
  console.log("yo",current(state.cart))
      
    },
  }
});

export const { countCart } = EcomSlice.actions;



export default EcomSlice.reducer;
