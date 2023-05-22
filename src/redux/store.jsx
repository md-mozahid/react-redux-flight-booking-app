import { createStore } from "redux";
import FlightReducer from "./FlightReducer";

const store = createStore(FlightReducer);

export default store;
