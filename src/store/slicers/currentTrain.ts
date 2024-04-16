import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, } from '@reduxjs/toolkit';
import { TSeatsArgs } from '../../types';

const initialState = {
  _id:''
}
export const currentTrainSlice = createSlice({
  name: 'currentTrain',
  initialState,
  reducers: {
    saveTrain: (state : TSeatsArgs, action: PayloadAction<TSeatsArgs>) => {
      for (let key in action.payload){
        (state[key as keyof TSeatsArgs ] as string | boolean ) = 
        action.payload[key as keyof TSeatsArgs] as string | boolean
      }
      return state
      // state._id = action.payload._id
      // state.have_first_class = action.payload.have_first_class;
      // state.have_fourth_class = action.payload.have_fourth_class;
      // state.have_third_class = action.payload.have_third_class;
      // state.have_wifi = action.payload.have_wifi;
      // state.have_air_conditioning = action.payload.have_air_conditioning;
      // state.timeDepart = action.payload.timeDepart
      // state.timeArriv = action.payload.timeArriv
      // state.cityFrom = action.payload.cityFrom
      // state.cityTo = action.payload.cityTo
    },
  },
})


export const { saveTrain } = currentTrainSlice.actions

export default currentTrainSlice.reducer