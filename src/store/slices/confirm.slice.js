import { createSlice } from '@reduxjs/toolkit';
  
export const confirmSlice = createSlice({
  name: 'confirm',
  initialState: false,
  reducers: {
    setConfirm: (state, actions) => {
      return !state
    }
  }
})
  
export const { setConfirm } = confirmSlice.actions;
export default confirmSlice.reducer;