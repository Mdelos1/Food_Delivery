import { configureStore } from '@reduxjs/toolkit'
import pasarMarcacionSlice from './slices/pasarMarcacion.slice'  
import confirmSlice from './slices/confirm.slice'
import priceOrderSlice from './slices/priceOrder.slice'

export default configureStore({
  reducer: {
    pasarMarcacion: pasarMarcacionSlice,
    confirm: confirmSlice,
    priceOrder: priceOrderSlice,
  }
})