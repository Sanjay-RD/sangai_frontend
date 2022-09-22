import {
  LICENSE_ADD_FAIL,
  LICENSE_ADD_REQUEST,
  LICENSE_ADD_RESET,
  LICENSE_ADD_SUCCESS,
  LICENSE_DETAILS_FAIL,
  LICENSE_DETAILS_REQUEST,
  LICENSE_DETAILS_SUCCESS,
  LICENSE_LIST_BY_USERID_FAIL,
  LICENSE_LIST_BY_USERID_REQUEST,
  LICENSE_LIST_BY_USERID_SUCCESS,
  LICENSE_UPDATE_FAIL,
  LICENSE_UPDATE_REQUEST,
  LICENSE_UPDATE_RESET,
  LICENSE_UPDATE_SUCCESS,
} from "../constants/licenseConstant";

export const listLicenseByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case LICENSE_LIST_BY_USERID_REQUEST:
      return {
        loading: true,
      };
    case LICENSE_LIST_BY_USERID_SUCCESS:
      return {
        loading: false,
        license: action.payload,
      };

    case LICENSE_LIST_BY_USERID_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listLicenseReducer = (state = {}, action) => {
  switch (action.type) {
    case LICENSE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case LICENSE_DETAILS_SUCCESS:
      return {
        loading: false,
        license: action.payload,
      };

    case LICENSE_DETAILS_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const createLicenseReducer = (state = {}, action) => {
  switch (action.type) {
    case LICENSE_ADD_REQUEST:
      return {
        loading: true,
      };
    case LICENSE_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        license: action.payload,
      };

    case LICENSE_ADD_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case LICENSE_ADD_RESET:
      return {};

    default:
      return state;
  }
};
export const updateLicenseReducer = (state = {}, action) => {
  switch (action.type) {
    case LICENSE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case LICENSE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case LICENSE_UPDATE_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    case LICENSE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
