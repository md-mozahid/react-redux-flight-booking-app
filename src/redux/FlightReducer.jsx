import { ADD_BOOKING, REMOVE_BOOKING } from "./ActionTypes";

const initialState = {
  bookings: [
    {
      id: 1,
      destinationFrom: "Dhaka",
      destinationTo: "Bogura",
      journeyDate: "2023-12-12",
      Adults: 2,
      ticketClass: "Business",
    },
  ],
};

const nextId = 2;
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
      };
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default FlightReducer;
