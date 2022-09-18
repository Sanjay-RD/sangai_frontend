import {
  INFORMATION_ADD_FAIL,
  INFORMATION_ADD_REQUEST,
  INFORMATION_ADD_RESET,
  INFORMATION_ADD_SUCCESS,
  INFORMATION_DETAILS_FAIL,
  INFORMATION_DETAILS_REQUEST,
  INFORMATION_DETAILS_SUCCESS,
  INFORMATION_LIST_BY_USERID_FAIL,
  INFORMATION_LIST_BY_USERID_REQUEST,
  INFORMATION_LIST_BY_USERID_SUCCESS,
  INFORMATION_UPDATE_FAIL,
  INFORMATION_UPDATE_REQUEST,
  INFORMATION_UPDATE_RESET,
  INFORMATION_UPDATE_SUCCESS,
} from "../constants/informationConstant";

export const listInformationsByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATION_LIST_BY_USERID_REQUEST:
      return {
        loading: true,
      };
    case INFORMATION_LIST_BY_USERID_SUCCESS:
      return {
        loading: false,
        informations: action.payload,
      };

    case INFORMATION_LIST_BY_USERID_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATION_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case INFORMATION_DETAILS_SUCCESS:
      return {
        loading: false,
        information: action.payload,
      };

    case INFORMATION_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const createInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATION_ADD_REQUEST:
      return {
        loading: true,
      };
    case INFORMATION_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        informations: action.payload,
      };

    case INFORMATION_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case INFORMATION_ADD_RESET:
      return {};

    default:
      return state;
  }
};
export const updateInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATION_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case INFORMATION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case INFORMATION_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case INFORMATION_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
