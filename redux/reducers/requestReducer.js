import {
  REQUEST_ADD_FAIL,
  REQUEST_ADD_REQUEST,
  REQUEST_ADD_RESET,
  REQUEST_ADD_SUCCESS,
  REQUEST_DELETE_FAIL,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_RESET,
  REQUEST_DELETE_SUCCESS,
  REQUEST_LIST_BY_RIDE_ID_FAIL,
  REQUEST_LIST_BY_RIDE_ID_REQUEST,
  REQUEST_LIST_BY_RIDE_ID_SUCCESS,
  REQUEST_UPDATE_FAIL,
  REQUEST_UPDATE_REQUEST,
  REQUEST_UPDATE_RESET,
  REQUEST_UPDATE_SUCCESS,
  REQUEST_UPDATE_TO_ACCEPT_FAIL,
  REQUEST_UPDATE_TO_ACCEPT_REQUEST,
  REQUEST_UPDATE_TO_ACCEPT_RESET,
  REQUEST_UPDATE_TO_ACCEPT_SUCCESS,
  REQUEST_UPDATE_TO_PAY_FAIL,
  REQUEST_UPDATE_TO_PAY_REQUEST,
  REQUEST_UPDATE_TO_PAY_RESET,
  REQUEST_UPDATE_TO_PAY_SUCCESS,
} from "../constants/requestConstant";

export const listRequestByRideIdReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LIST_BY_RIDE_ID_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_LIST_BY_RIDE_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      };

    case REQUEST_LIST_BY_RIDE_ID_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
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
export const updateRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      };

    case REQUEST_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case REQUEST_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
export const updateRequestToAcceptReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_TO_ACCEPT_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_UPDATE_TO_ACCEPT_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      };

    case REQUEST_UPDATE_TO_ACCEPT_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case REQUEST_UPDATE_TO_ACCEPT_RESET:
      return {};

    default:
      return state;
  }
};
export const updateRequestToPayReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_TO_PAY_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_UPDATE_TO_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      };

    case REQUEST_UPDATE_TO_PAY_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case REQUEST_UPDATE_TO_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const deleteRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DELETE_REQUEST:
      return {
        loading: true,
      };
    case REQUEST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case REQUEST_DELETE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case REQUEST_DELETE_RESET:
      return {};

    default:
      return state;
  }
};
