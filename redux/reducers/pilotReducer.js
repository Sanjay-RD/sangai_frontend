import {
  PILOT_ADD_FAIL,
  PILOT_ADD_REQUEST,
  PILOT_ADD_RESET,
  PILOT_ADD_SUCCESS,
} from "../constants/pilotConstant";

export const createPilotReducer = (state = {}, action) => {
  switch (action.type) {
    case PILOT_ADD_REQUEST:
      return {
        loading: true,
      };
    case PILOT_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        pilot: action.payload,
      };

    case PILOT_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case PILOT_ADD_RESET:
      return {};

    default:
      return state;
  }
};
