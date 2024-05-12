import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPassengersState } from '../../types';
const initialState = JSON.parse(localStorage.getItem('passengersSeats')!) || {
  passengers:{
    adult: 0,
    child: 0,
    toddler: 0
  },
  seats:[],
  facilities: 0,
  resultPrice: 0
}
export const passengers = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    savePassengers: (state, action:PayloadAction<TPassengersState> ) => {
      for (let key in action.payload) {
        (state[key as keyof TPassengersState] as string | null | number) =
          action.payload[key as keyof TPassengersState] as string | null | number;
      }
      localStorage.setItem(
        'passengersSeats',
        JSON.stringify(state))
      return state;
    },
  },
});
export const { savePassengers } = passengers.actions
export default passengers.reducer