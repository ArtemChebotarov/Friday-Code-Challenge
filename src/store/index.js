import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import vehiclesReducer from "./reducers/vehicles.reducer";

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
