import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  LICENSE_ADD_FAIL,
  LICENSE_ADD_REQUEST,
  LICENSE_ADD_SUCCESS,
  LICENSE_DETAILS_FAIL,
  LICENSE_DETAILS_REQUEST,
  LICENSE_DETAILS_SUCCESS,
  LICENSE_LIST_BY_USERID_FAIL,
  LICENSE_LIST_BY_USERID_REQUEST,
  LICENSE_LIST_BY_USERID_SUCCESS,
  LICENSE_UPDATE_FAIL,
  LICENSE_UPDATE_REQUEST,
  LICENSE_UPDATE_SUCCESS,
} from "../constants/licenseConstant";
import { getCookie } from "../utils";

export const getLicenseByUserId = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: LICENSE_LIST_BY_USERID_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.get(`${API}/license/user/${uuid}`, config);
    dispatch({
      type: LICENSE_LIST_BY_USERID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LICENSE_LIST_BY_USERID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getLicense = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: LICENSE_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/license/${uuid}`, config);
    dispatch({
      type: LICENSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LICENSE_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createLicense =
  (license_number, license_front_image, license_back_image, userId) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: LICENSE_ADD_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.post(
        `${API}/license`,
        {
          license_number,
          license_front_image,
          license_back_image,
          userId,
        },
        config
      );
      toast.info("Driver License Published", {
        autoClose: 700,
      });
      dispatch({
        type: LICENSE_ADD_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
        {
          autoClose: 700,
        }
      );
      dispatch({
        type: LICENSE_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateLicense =
  (license_number, license_front_image, license_back_image, uuid) =>
  async (dispatch) => {
    try {
      dispatch({ type: LICENSE_UPDATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.put(
        `${API}/license/${uuid}`,
        {
          license_number,
          license_front_image,
          license_back_image,
        },
        config
      );
      toast.info("Driver License Update", {
        autoClose: 700,
      });
      dispatch({
        type: LICENSE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
        {
          autoClose: 700,
        }
      );
      dispatch({
        type: LICENSE_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
