import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favItems: [],
};



export const FavSlice = createSlice({
  name: 'Fav',
  initialState,
  reducers: {
    favourites:(state,action)=>{
        state.favItems=[...state.favItems,{...action.payload,isFav:"true"}];
        localStorage.setItem('fav Items',state.favItems)
    },
    deleteFavourites:(state,action)=>{
        // console.log("deletefav",action.payload)
        state.favItems = [...state.favItems,{...action.payload,isFav:false}]
        // state.favItems= state.favItems.filter((item)=>item.fav===true)
        state.favItems= state.favItems.filter((item)=>item.id !== action.payload.id)
    }
  }
});

export const { favourites, deleteFavourites} = FavSlice.actions;



export default FavSlice.reducer;
