import axios from "axios";

import { constants } from "../helpers/constants";

export const getMakes = () => {
  return axios.get(`${constants.API_BASE}/api/makes`);
};

export const getModels = (make) => {
  return axios.get(`${constants.API_BASE}/api/models?make=${make}`);
};

export const getVehicles = (make, model) => {
  return axios.get(
    `${constants.API_BASE}/api/vehicles?make=${make}&model=${model}`
  );
};
