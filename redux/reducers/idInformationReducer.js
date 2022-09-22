import {
  ID_INFORMATION_ADD_FAIL,
  ID_INFORMATION_ADD_REQUEST,
  ID_INFORMATION_ADD_RESET,
  ID_INFORMATION_ADD_SUCCESS,
  ID_INFORMATION_DETAILS_FAIL,
  ID_INFORMATION_DETAILS_REQUEST,
  ID_INFORMATION_DETAILS_SUCCESS,
  ID_INFORMATION_LIST_BY_USERID_FAIL,
  ID_INFORMATION_LIST_BY_USERID_REQUEST,
  ID_INFORMATION_LIST_BY_USERID_SUCCESS,
  ID_INFORMATION_UPDATE_FAIL,
  ID_INFORMATION_UPDATE_REQUEST,
  ID_INFORMATION_UPDATE_RESET,
  ID_INFORMATION_UPDATE_SUCCESS,
} from "../constants/idInformationConstant";

export const listIdInformationsByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case ID_INFORMATION_LIST_BY_USERID_REQUEST:
      return {
        loading: true,
      };
    case ID_INFORMATION_LIST_BY_USERID_SUCCESS:
      return {
        loading: false,
        informations: action.payload,
      };

    case ID_INFORMATION_LIST_BY_USERID_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listIdInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case ID_INFORMATION_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ID_INFORMATION_DETAILS_SUCCESS:
      return {
        loading: false,
        information: action.payload,
      };

    case ID_INFORMATION_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const createIdInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case ID_INFORMATION_ADD_REQUEST:
      return {
        loading: true,
      };
    case ID_INFORMATION_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        informations: action.payload,
      };

    case ID_INFORMATION_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case ID_INFORMATION_ADD_RESET:
      return {};

    default:
      return state;
  }
};
export const updateIdInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case ID_INFORMATION_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case ID_INFORMATION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ID_INFORMATION_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case ID_INFORMATION_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
