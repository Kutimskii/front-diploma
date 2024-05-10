import { configureStore } from '@reduxjs/toolkit';
import { getTicketsSlice } from './slicers/tickets';
import { searchTicketsSlice } from './slicers/findFields';
import { currentTrain } from './slicers/currentTrain';
import { ticketsArgsSlice } from './slicers/tickets'; 
import { passengers } from './slicers/passengers';
import { passengersData } from './slicers/passengersData';
import { paySlice } from './slicers/payer';
import { getSeatsSlice } from './slicers/seats';
export const store = configureStore({
  reducer: {
  [getTicketsSlice.reducerPath]:getTicketsSlice.reducer,
  [getSeatsSlice.reducerPath]:getSeatsSlice.reducer,
  searchTickets: searchTicketsSlice.reducer,
  saveArgs: ticketsArgsSlice.reducer,
  saveTrain: currentTrain.reducer,
  savePassengers: passengers.reducer,
  addPassenger: passengersData.reducer,
  addPayerData: paySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getTicketsSlice.middleware, getSeatsSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch