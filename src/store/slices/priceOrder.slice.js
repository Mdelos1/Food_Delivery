import { createSlice } from '@reduxjs/toolkit';
  
export const priceOrderSlice = createSlice({
  name: 'priceOrder',
  initialState: [],
  reducers: {
    setPriceOrder: (state, actions) => {
      state = actions.payload
      return state
    }
  }
})
  
export const { setPriceOrder } = priceOrderSlice.actions;
export default priceOrderSlice.reducer;