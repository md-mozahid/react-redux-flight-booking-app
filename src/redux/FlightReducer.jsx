import { ADD_BOOKING, REMOVE_BOOKING } from './ActionTypes'

const initialState = {
  bookings: [
    {
      id: 1,
      from: 'Saidpur',
      to: 'Bogura',
      date: '2025-12-12',
      adults: 2,
      ticketClass: 'Business',
    },
  ],
}

let nextId = 2

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [
          ...state.bookings,
          {
            id: nextId++,
            ...action.payload,
          },
        ],
      }
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default FlightReducer
