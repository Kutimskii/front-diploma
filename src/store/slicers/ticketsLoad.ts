import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, } from '@reduxjs/toolkit'
type TTicketsLoading = {
  loading:boolean
}
const initialState = {
  loading:false
}
export const ticketsLoadSlice = createSlice({
  name: 'searchTickets',
  initialState,
  reducers: {
    changeLoad: (state : TTicketsLoading, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
})


export const { changeLoad } = ticketsLoadSlice.actions

export default ticketsLoadSlice.reducer