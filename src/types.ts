import { Dayjs } from "dayjs"
export type TDirectionProps = {
  directFrom: string
  directTo: string
  directToFocus:boolean
  directFromFocus: boolean
  directFromId:string
  directToId:string
  setDirectFrom: React.Dispatch<React.SetStateAction<string>>
  setDirectFromFocus: React.Dispatch<React.SetStateAction<boolean>>
  setDirectToFocus: React.Dispatch<React.SetStateAction<boolean>>
  setDirectTo: React.Dispatch<React.SetStateAction<string>>
  saveDirect: (a:string, b: string) => void
  setDirectFromId: React.Dispatch<React.SetStateAction<string>>
  setDirectToId: React.Dispatch<React.SetStateAction<string>>

}
export type TDirectionsDateProps = {
  dateFrom: Dayjs | null
  dateTo: Dayjs | null
  setDateFrom: (date: Dayjs | null) => void
  setDateTo: (date: Dayjs | null) => void
}
export type TCities = {
  _id:string,
  name: string
}
export type TTickets = {
  total_count: number,
  items: [],
}
export type TSortObj = {
  date : string,
  price_min: string,
  duration: string
}
export type TArgsTickets = {
  from_city_id?: string
  to_city_id?: string
  date_start?: string | null
  date_end?: string | null
  date_start_arrival?: string| null
  date_end_arrival?: string | null
  have_first_class?: boolean
  have_second_class?: boolean
  have_third_class?: boolean
  have_fourth_class?: boolean
  have_wifi?: boolean
  have_air_conditioning?: boolean
  have_express?: boolean
  price_from?: number
  price_to?: number
  start_departure_hour_from?: number
  start_departure_hour_to?: number
  start_arrival_hour_from?: number
  start_arrival_hour_to?: number
  end_departure_hour_from?: number
  end_departure_hour_to?: number
  end_arrival_hour_from?: number
  end_arrival_hour_to?: number
  limit?: number
  offset?: number
  sort?: string
}
export type TTicket = {
available_seats: number
available_seats_info: {
  first?: number
  second?: number
  fourth?: number
  third?: number
}
departure: {
  available_seats: number 
  available_seats_info: {
    first?: number
    second?: number
    fourth?: number
    third?: number
  }
  duration: number
  from: {
    city: {
      name: string
      _id: string
    }
    datetime: number
    railway_station_name: string
  }
  have_air_conditioning: boolean
  have_first_class: boolean
  have_fourth_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_wifi: boolean
  is_express: boolean
  min_price: number
  price_info: {
    first: {
      bottom_price: number
      price: number
      top_price: number
    }
    second:{
      bottom_price: number
      price: number
      top_price: number
    }
    third: {
      bottom_price: number
      side_price: number
      top_price: number
    }
    fourth: {
      bottom_price: number
      top_price: number
    }
    }
    to: {
      city: {      
        name: string
        _id: string
      }
      datetime: number
      railway_station_name: string
    }
    train: {
      _id: string
      name: string
    }
    _id: string
}
have_air_conditioning: boolean
  have_first_class: boolean
  have_fourth_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_wifi: boolean
  is_express: boolean
  min_price: number
}
