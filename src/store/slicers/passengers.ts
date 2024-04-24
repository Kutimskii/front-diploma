import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
type TPassengersState= {
  passengers?:{
    adult:null | number,
    child:null | number,
    toddler: null | number
  },
  seats?:{index: number, price: number}[],
  facilities?: null | number
}
const initialState = {
  passengers:{
    adult: 0,
    child: 0,
    toddler: 0
  },
  seats:[],
  facilities: null
}
export const passengers = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    savePassengers: (state, action:PayloadAction<TPassengersState> ) => {
      for (let key in action.payload) {
        (state[key as keyof TPassengersState] as string | null) =
          action.payload[key as keyof TPassengersState] as string | null;
      }
      return state;
    },
  },
});
export const { savePassengers } = passengers.actions
export default passengers.reducer