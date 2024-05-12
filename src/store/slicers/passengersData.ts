import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPassengersDataState, TPassengersData } from '../../types';
const initialState = {
  passengersData: JSON.parse(localStorage.getItem('passengersStorage')!) || [] as any [],
}
console.log(JSON.parse(localStorage.getItem('passengersStorage')!))
export const passengersData = createSlice({
  name: 'passengersData',
  initialState,
  reducers: {
    addPassenger: (state:TPassengersDataState, action:PayloadAction<TPassengersData> ) => {
      const { number, data } = action.payload;
      if (state.passengersData.filter((el:TPassengersData) => el.number === number).length > 0) {
        state.passengersData = state.passengersData.map((el:TPassengersData) =>
          el.number === number ? data : el
        );
        localStorage.setItem(
          'passengersStorage',
          JSON.stringify(state.passengersData)
        );
      } else {
        state.passengersData.push(action.payload);
      }
      localStorage.setItem('passengersStorage', JSON.stringify(state.passengersData));
    },
    removePassenger: (state:TPassengersDataState, action:PayloadAction<number>) => {
          state.passengersData = state.passengersData.filter(el => el.number !== action.payload)
          localStorage.setItem(
            'passengersStorage',
            JSON.stringify(state.passengersData)
          );
        localStorage.setItem('passengersStorage', JSON.stringify(state.passengersData));
    },
  },
});
export const { addPassenger,removePassenger } = passengersData.actions
export default passengersData.reducer