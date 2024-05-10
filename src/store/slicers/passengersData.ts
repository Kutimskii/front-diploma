import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export type TPassengersData = {
  number: number, 
  data: {
    number:number
    type:string
    surname:string
    name:string
    lastname:string
    sex: string
    birth: string
    series: string
    document: string
  }
 
}
type TPassengersDataState = {
  passengersData: Array<TPassengersData> | any[]
}
const initialState = {
  passengersData: JSON.parse(localStorage.getItem('passengersStorage')!) || [] as any [],
}
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
    },
  },
);
export const { addPassenger } = passengersData.actions
export default passengersData.reducer