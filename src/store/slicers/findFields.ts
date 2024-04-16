import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, } from '@reduxjs/toolkit';
import { TSearchTickets } from '../../types';
const initialState = {
  directionFrom: '',
  directionTo: '',
  directionFromId: '',
  directionToId: '',
  dateFrom: null,
  dateTo: null,
}
export const searchTicketsSlice = createSlice({
  name: 'searchTickets',
  initialState,
  reducers: {
    saveSearch: (state : TSearchTickets, action: PayloadAction<TSearchTickets>) => {
      state.directionFrom = action.payload.directionFrom;
      state.directionTo = action.payload.directionTo;
      state.directionFromId = action.payload.directionFromId;
      state.directionToId = action.payload.directionToId;
      state.dateFrom = action.payload.dateFrom;
      state.dateTo = action.payload.dateTo;
    },
  },
})


export const { saveSearch } = searchTicketsSlice.actions
export default searchTicketsSlice.reducer