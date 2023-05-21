import { configureStore } from '@reduxjs/toolkit'
import meatupReducer from './slicers/meatupSlice'
// import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    meatUps: meatupReducer,
  },
  // middleware: [thunk]
})