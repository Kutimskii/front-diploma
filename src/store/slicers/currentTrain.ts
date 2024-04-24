import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TSeatsArgs } from '../../types';
const initialState = {
  _id:''
}
export const currentTrain = createSlice({
  name: 'currentTrain',
  initialState,
  reducers: {
    saveTrain: (state: TSeatsArgs, action: PayloadAction<TSeatsArgs>) => {
      for (let key in action.payload) {
        (state[key as keyof TSeatsArgs] as string | boolean) =
          action.payload[key as keyof TSeatsArgs] as string | boolean;
      }
      return state;
    },
  },
});
export const { saveTrain } = currentTrain.actions
export default currentTrain.reducer