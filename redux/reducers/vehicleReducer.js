import {
  VEHICLE_ADD_FAIL,
  VEHICLE_ADD_REQUEST,
  VEHICLE_ADD_RESET,
  VEHICLE_ADD_SUCCESS,
  VEHICLE_DETAILS_FAIL,
  VEHICLE_DETAILS_REQUEST,
  VEHICLE_DETAILS_SUCCESS,
  VEHICLE_LIST_BY_USERID_FAIL,
  VEHICLE_LIST_BY_USERID_REQUEST,
  VEHICLE_LIST_BY_USERID_SUCCESS,
  VEHICLE_UPDATE_FAIL,
  VEHICLE_UPDATE_REQUEST,
  VEHICLE_UPDATE_RESET,
  VEHICLE_UPDATE_SUCCESS,
} from "../constants/vehicleConstant";

export const listVehicleByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case VEHICLE_LIST_BY_USERID_REQUEST:
      return {
        loading: true,
      };
    case VEHICLE_LIST_BY_USERID_SUCCESS:
      return {
        loading: false,
        vehicle: action.payload,
      };

    case VEHICLE_LIST_BY_USERID_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listVehicleReducer = (state = {}, action) => {
  switch (action.type) {
    case VEHICLE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case VEHICLE_DETAILS_SUCCESS:
      return {
        loading: false,
        vehicle: action.payload,
      };

    case VEHICLE_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const createVehicleReducer = (state = {}, action) => {
  switch (action.type) {
    case VEHICLE_ADD_REQUEST:
      return {
        loading: true,
      };
    case VEHICLE_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        vehicle: action.payload,
      };

    case VEHICLE_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case VEHICLE_ADD_RESET:
      return {};

    default:
      return state;
  }
};
export const updateVehicleReducer = (state = {}, action) => {
  switch (action.type) {
    case VEHICLE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case VEHICLE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case VEHICLE_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case VEHICLE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
