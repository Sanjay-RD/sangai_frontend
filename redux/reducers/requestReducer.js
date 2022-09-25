import {
  REQUEST_ADD_FAIL,
  REQUEST_ADD_REQUEST,
  REQUEST_ADD_RESET,
  REQUEST_ADD_SUCCESS,
} from "../constants/requestConstant";

export const createRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ADD_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      };

    case REQUEST_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case REQUEST_ADD_RESET:
      return {};

    default:
      return state;
  }
};
