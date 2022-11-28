import { createSlice } from '@reduxjs/toolkit';
  
export const pasarMarcaionSlice = createSlice({
  name: 'pasarMarcacion',
  initialState: [],
  reducers: {
    setPasarMarcacion: (state, actions) => {
      const a = [...state, actions.payload];
      return a
    }
  }
})
  
export const { setPasarMarcacion } = pasarMarcaionSlice.actions;
export default pasarMarcaionSlice.reducer;