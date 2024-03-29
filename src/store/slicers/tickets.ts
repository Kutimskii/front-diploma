import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCities, TArgsTickets, TTickets } from "../../types";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: TArgsTickets = {
}

export const ticketsArgsSlice = createSlice({
  name: 'ticketsArgs',
  initialState,
  reducers: {
    saveArgs: (state : TArgsTickets, action: PayloadAction<TArgsTickets>) => {
      state = action.payload
      return state
    },
  },
})

export const getTicketsSlice = createApi({
  reducerPath:'getTickets',
  baseQuery: fetchBaseQuery({baseUrl:import.meta.env.VITE_API_URL}),
  endpoints: (builder) => ({
    getCities: builder.query<TCities[], string>({
      query: (name) => `/routes/cities?name=${name}`,
    }),
    getTickets: builder.query<TTickets, TArgsTickets>({
      query: ({ 
        from_city_id ,
        to_city_id ,
        date_start,
        date_end,
        date_start_arrival,
        date_end_arrival,
        have_first_class,
        have_second_class,
        have_third_class,
        have_fourth_class,
        have_wifi,
        have_air_conditioning,
        have_express,
        price_from,
        price_to,
        start_departure_hour_from,
        start_departure_hour_to,
        start_arrival_hour_from,
        start_arrival_hour_to,
        end_departure_hour_from,
        end_departure_hour_to,
        end_arrival_hour_from,
        end_arrival_hour_to,
        limit,
        offset,
        sort,}) => {
       return `/routes?from_city_id=${from_city_id}
&to_city_id=${to_city_id}
${date_start ? `&date_start=${date_start}` : ''}
${date_end ? `&date_end=${date_end}` : ''}
${date_start_arrival ? `&date_start_arrival=${date_start_arrival}` : ''}
${date_end_arrival ? `&date_end_arrival=${date_end_arrival}` : ''}
${have_first_class ? `&have_first_class=${have_first_class}` : ''}
${have_second_class ? `&have_second_class=${have_second_class}` : ''}
${have_third_class ? `&have_third_class=${have_third_class}` : ''}
${have_fourth_class ? `&have_fourth_class=${have_fourth_class}` : ''}
${have_wifi ? `&have_wifi=${have_wifi}` : ''}
${have_air_conditioning ? `&have_air_conditioning=${have_air_conditioning}` : ''}
${have_express ? `&have_express=${have_express}` : ''}
${price_from ? `&price_from=${price_from}` : ''}
${price_to ? `&price_to=${price_to}` : ''}
${start_departure_hour_from ? `&start_departure_hour_from=${start_departure_hour_from}` : ''}
${start_departure_hour_to ? `&start_departure_hour_to=${start_departure_hour_to}` : ''}
${start_arrival_hour_from ? `&start_arrival_hour_from=${start_arrival_hour_from}` : ''}
${start_arrival_hour_to ? `&start_arrival_hour_to=${start_arrival_hour_to}` : ''}
${end_departure_hour_from ? `&end_departure_hour_from=${end_departure_hour_from}` : ''}
${end_departure_hour_to ? `&end_departure_hour_to=${end_departure_hour_to}` : ''}
${end_arrival_hour_from ? `&end_arrival_hour_from=${end_arrival_hour_from}` : ''}
${end_arrival_hour_to ? `&end_arrival_hour_to=${end_arrival_hour_to}` : ''}
${limit ? `&limit=${limit}` : ''}
${offset ? `&offset=${offset}` : ''}
${sort ? `&sort=${sort}` : ''}`}
    }),
  }),
});
export const { saveArgs } = ticketsArgsSlice.actions
export const {
  useGetCitiesQuery,
  useGetTicketsQuery
 } = getTicketsSlice;