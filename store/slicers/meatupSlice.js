import { createSlice } from '@reduxjs/toolkit'



const meatUpSlice = createSlice({
  name: 'meatUps',
  initialState: [],
  reducers: {
    meatupsSetted(state, action) {
      return action.payload
    },
  },
})


export const meatupLocations = state => state.meatUps
export const favoriteCount = state =>
  state.meatUps.reduce((total, item) => (total += item.favorite ? 1 : 0), 0);

export const { meatupAdded, meatupDeleted, meatupFavorized, getMeatupById, meatupsSetted } = meatUpSlice.actions

export default meatUpSlice.reducer