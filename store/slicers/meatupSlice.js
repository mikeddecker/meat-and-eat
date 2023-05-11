import { createSlice } from '@reduxjs/toolkit'
import MeatUpPlaces from '../../src/global/MeatUpPlaces'
import uuid from 'uuid'


const meatUpSlice = createSlice({
  name: 'meatUps',
  initialState: MeatUpPlaces,
  reducers: {
    meatupAdded(state, action) {
        location = action.payload
        location.favorite = false
        state.push(location)
        location.id = uuid.v4()
        return state
    },
    meatupDeleted(state, action) {
        const idToDelete = action.payload.id;
      
        return state.filter(item => item.id !== idToDelete);
    },
    meatupFavorized(state, action) {
        for (let i in state) {
            if (state[i].id === action.payload.id) {
                state[i].favorite = !action.payload.favorite
            } 
        }
        
        return state
    },
  }
})

export const totalFavorite = (state) => {
    let amount = 0

    for (let i in state.meatUps) {
        if (state.meatUps[i].favorite) {
            amount++
        }
    }

    return amount
}

export const { meatupAdded, meatupDeleted, meatupFavorized, getMeatupById } = meatUpSlice.actions
// Selector function
export const selectMeatupById = (state, itemId) => {
  state.find(meatup => meatup.id === itemId)
}
export const selectMeatups = state => state.meatUps
export default meatUpSlice.reducer