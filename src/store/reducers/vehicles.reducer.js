import { createReducer } from "@reduxjs/toolkit";
import { setMakes, setModels, setVehicles } from "../actions/vehicles.actions";

const initialState = {
  makes: [],
  models: [],
  vehicles: [],
};

export default createReducer(initialState, {
  [setMakes]: (state, action) => {
    state.makes = action.payload;
  },
  [setModels]: (state, action) => {
    state.models = action.payload;
  },
  [setVehicles]: (state, action) => {
    state.vehicles = action.payload;
  },
});
