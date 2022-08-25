import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createMateReducer } from "./reducers/mateReducer";
import { createPilotReducer } from "./reducers/pilotReducer";

const reducer = combineReducers({
  createMate: createMateReducer,
  createPilot: createPilotReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
