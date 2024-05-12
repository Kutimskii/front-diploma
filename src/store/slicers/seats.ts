import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTicket } from "../../types";
import { TCoach } from "../../types";

export const getSeatsSlice = createApi({
  reducerPath:'getSeats',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}),
  endpoints: (builder) => ({
    getSeats: builder.query<TCoach[], TTicket>({
      query: ({
        departure,
        // have_first_class,
        // have_fourth_class,
        // have_second_class,
        // have_third_class,
        // have_wifi,
        // have_air_conditioning
      }) => `/routes/${departure._id}/seats?`
      // ${have_first_class ? `&have_first_class=${have_first_class}` : ''}
      // ${have_second_class ? `&have_second_class=${have_second_class}` : ''}
      // ${have_third_class ? `&have_third_class=${have_third_class}` : ''}
      // ${have_fourth_class ? `&have_fourth_class=${have_fourth_class}` : ''}
      // ${have_wifi ? `&have_wifi=${have_wifi}` : ''}
      // ${have_air_conditioning ? `&have_air_conditioning=${have_air_conditioning}` : ''}`})
    })
  }),
})

export const { useGetSeatsQuery } = getSeatsSlice