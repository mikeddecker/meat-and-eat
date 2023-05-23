// import { createSlice } from '@reduxjs/toolkit'
// import MeatUpPlaces from '../../src/global/MeatUpPlaces'
// import uuid from 'uuid'
// import { collection, getDocs } from 'firebase/firestore';



// const meatUpSlice = createSlice({
//   name: 'meatUps',
//   initialState: [],
//   reducers: {
//     setMeatups(state, action) {
//       return action.payload
//     },
//     meatupAdded(state, action) {
//         location = action.payload
//         location.favorite = false
//         location.id = uuid.v4()
//         state.push(location)
//         return state
//     },
//     meatupDeleted(state, action) {
//         const idToDelete = action.payload.id;
      
//         return state.filter(item => item.id !== idToDelete);
//     },
//     meatupFavorized(state, action) {
//         console.debug('state is', state, action)
//         return state
//         return state.map(meatup => {
//             if (meatup.id === action.payload.id) {
//               return {
//                 ...meatup,
//                 favorite: !meatup.favorite
//               };
//             }
//             return meatup;
//         });
//     },
//   },
// })

// export const totalFavorite = (state) => {
//     let amount = 0

//     for (let i in state.meatUps) {
//         if (state.meatUps[i].favorite) {
//             amount++
//         }
//     }

//     return amount
// }

// export const meatupLocations = state => state.meatUps

// export const { meatupAdded, meatupDeleted, meatupFavorized, getMeatupById } = meatUpSlice.actions

// export default meatUpSlice.reducer