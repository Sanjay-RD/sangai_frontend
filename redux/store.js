import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createMateReducer } from "./reducers/mateReducer";
import { createPilotReducer } from "./reducers/pilotReducer";
import {
  listRidesReducer,
  listRideReducer,
  listRidesByUserIdReducer,
  createRideReducer,
  updateRideReducer,
  deleteRideReducer,
} from "./reducers/rideReducer";

const reducer = combineReducers({
  listRides: listRidesReducer,
  listRide: listRideReducer,
  listRidesByUserId: listRidesByUserIdReducer,
  createRide: createRideReducer,
  updateRide: updateRideReducer,
  deleteRide: deleteRideReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
