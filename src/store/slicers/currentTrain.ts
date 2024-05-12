import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TTicket } from '../../types';
const initialState: TTicket = JSON.parse(localStorage.getItem('currentTrain')!) || {
  _id:''
}
export const currentTrain = createSlice({
  name: 'currentTrain',
  initialState,
  reducers: {
    saveTrain: (state: TTicket, action: PayloadAction<TTicket>) => {
      state = action.payload
      localStorage.setItem(
        'currentTrain',
        JSON.stringify(state))
      return state;
    },
  },
});
export const { saveTrain } = currentTrain.actions
export default currentTrain.reducer