import { configureStore } from '@reduxjs/toolkit'
import meatupReducer from './slicers/meatupSlice'

export const store = configureStore({
  reducer: {
    meatUps: meatupReducer,
  }
})