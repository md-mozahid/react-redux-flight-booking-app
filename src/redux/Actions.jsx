import { ADD_BOOKING, REMOVE_BOOKING } from "./ActionTypes";

export const AddBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking,
  };
};
export const RemoveBooking = (bookingId) => {
  return {
    type: REMOVE_BOOKING,
    payload: bookingId,
  };
};
