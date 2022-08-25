import {
  MATE_ADD_FAIL,
  MATE_ADD_REQUEST,
  MATE_ADD_RESET,
  MATE_ADD_SUCCESS,
} from "../constants/mateConstant";

export const createMateReducer = (state = {}, action) => {
  switch (action.type) {
    case MATE_ADD_REQUEST:
      return {
        loading: true,
      };
    case MATE_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        mate: action.payload,
      };

    case MATE_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case MATE_ADD_RESET:
      return {};

    default:
      return state;
  }
};
