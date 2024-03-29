import { configureStore } from '@reduxjs/toolkit';
import { getTicketsSlice } from './slicers/tickets';
import { searchTicketsSlice } from './slicers/findFields';
import { ticketsArgsSlice } from './slicers/tickets'; 
export const store = configureStore({
  reducer: {
  [getTicketsSlice.reducerPath]:getTicketsSlice.reducer,
  searchTickets: searchTicketsSlice.reducer,
  saveArgs: ticketsArgsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getTicketsSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch