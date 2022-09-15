import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createMateReducer } from "./reducers/mateReducer";
import { createPilotReducer } from "./reducers/pilotReducer";
import { userLoginReducer, userUpdateReducer } from "./reducers/userReducer";
import {
  listRidesReducer,
  listRideReducer,
  listRidesByUserIdReducer,
  createRideReducer,
  updateRideReducer,
  deleteRideReducer,
} from "./reducers/rideReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  listRides: listRidesReducer,
  listRide: listRideReducer,
  listRidesByUserId: listRidesByUserIdReducer,
  createRide: createRideReducer,
  updateRide: updateRideReducer,
  deleteRide: deleteRideReducer,
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
