import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createMateReducer } from "./reducers/mateReducer";
import { createPilotReducer } from "./reducers/pilotReducer";
import { userLoginReducer, userDetailReducer } from "./reducers/userReducer";
import {
  listRidesReducer,
  listRideReducer,
  listRidesByUserIdReducer,
  createRideReducer,
  updateRideReducer,
  deleteRideReducer,
} from "./reducers/rideReducer";

import {
  listInformationsByUserIdReducer,
  listInformationReducer,
  createInformationReducer,
  updateInformationReducer,
} from "./reducers/informationReducer";

import {
  listLicenseByUserIdReducer,
  listLicenseReducer,
  createLicenseReducer,
  updateLicenseReducer,
} from "./reducers/licenseReducer";

import {
  listIdInformationsByUserIdReducer,
  listIdInformationReducer,
  createIdInformationReducer,
  updateIdInformationReducer,
} from "./reducers/idInformationReducer";

import {
  listVehicleByUserIdReducer,
  listVehicleReducer,
  createVehicleReducer,
  updateVehicleReducer,
} from "./reducers/vehicleReducer";

import { createRequestReducer } from "./reducers/requestReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetail: userDetailReducer,
  listRides: listRidesReducer,
  listRide: listRideReducer,
  listRidesByUserId: listRidesByUserIdReducer,
  createRide: createRideReducer,
  updateRide: updateRideReducer,
  deleteRide: deleteRideReducer,
  listInformationsByUserId: listInformationsByUserIdReducer,
  listInformation: listInformationReducer,
  createInformation: createInformationReducer,
  updateInformation: updateInformationReducer,
  listLicenseByUserId: listLicenseByUserIdReducer,
  listLicense: listLicenseReducer,
  createLicense: createLicenseReducer,
  updateLicense: updateLicenseReducer,
  listIdInformationsByUserId: listIdInformationsByUserIdReducer,
  listIdInformation: listIdInformationReducer,
  createIdInformation: createIdInformationReducer,
  updateIdInformation: updateIdInformationReducer,
  listVehicleByUserId: listVehicleByUserIdReducer,
  listVehicle: listVehicleReducer,
  createVehicle: createVehicleReducer,
  updateVehicle: updateVehicleReducer,
  createRequest: createRequestReducer,
});

const adminInfoFromStrorage =
  process.browser && localStorage.getItem("userInfo")
    ? process.browser && JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
  userLogin: { userInfo: adminInfoFromStrorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
