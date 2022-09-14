import {
  RIDE_ADD_FAIL,
  RIDE_ADD_REQUEST,
  RIDE_ADD_RESET,
  RIDE_ADD_SUCCESS,
  RIDE_DELETE_FAIL,
  RIDE_DELETE_REQUEST,
  RIDE_DELETE_RESET,
  RIDE_DELETE_SUCCESS,
  RIDE_DETAILS_FAIL,
  RIDE_DETAILS_REQUEST,
  RIDE_DETAILS_SUCCESS,
  RIDE_LIST_BY_USERID_FAIL,
  RIDE_LIST_BY_USERID_REQUEST,
  RIDE_LIST_BY_USERID_SUCCESS,
  RIDE_LIST_FAIL,
  RIDE_LIST_REQUEST,
  RIDE_LIST_SUCCESS,
  RIDE_UPDATE_FAIL,
  RIDE_UPDATE_REQUEST,
  RIDE_UPDATE_RESET,
  RIDE_UPDATE_SUCCESS,
} from "../constants/rideConstant";

export const listRidesReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_LIST_REQUEST:
      return {
        loading: true,
      };
    case RIDE_LIST_SUCCESS:
      return {
        loading: false,
        rides: action.payload,
      };

    case RIDE_LIST_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listRidesByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_LIST_BY_USERID_REQUEST:
      return {
        loading: true,
      };
    case RIDE_LIST_BY_USERID_SUCCESS:
      return {
        loading: false,
        rides: action.payload,
      };

    case RIDE_LIST_BY_USERID_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listRideReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case RIDE_DETAILS_SUCCESS:
      return {
        loading: false,
        ride: action.payload,
      };

    case RIDE_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const createRideReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_ADD_REQUEST:
      return {
        loading: true,
      };
    case RIDE_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        rides: action.payload,
      };

    case RIDE_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case RIDE_ADD_RESET:
      return {};

    default:
      return state;
  }
};
export const updateRideReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case RIDE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case RIDE_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case RIDE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
export const deleteRideReducer = (state = {}, action) => {
  switch (action.type) {
    case RIDE_DELETE_REQUEST:
      return {
        loading: true,
      };
    case RIDE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case RIDE_DELETE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case RIDE_DELETE_RESET:
      return {};

    default:
      return state;
  }
};
