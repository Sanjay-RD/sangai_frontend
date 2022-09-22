import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  INFORMATION_ADD_FAIL,
  INFORMATION_ADD_REQUEST,
  INFORMATION_ADD_SUCCESS,
  INFORMATION_DETAILS_FAIL,
  INFORMATION_DETAILS_REQUEST,
  INFORMATION_DETAILS_SUCCESS,
  INFORMATION_LIST_BY_USERID_FAIL,
  INFORMATION_LIST_BY_USERID_REQUEST,
  INFORMATION_LIST_BY_USERID_SUCCESS,
  INFORMATION_UPDATE_FAIL,
  INFORMATION_UPDATE_REQUEST,
  INFORMATION_UPDATE_SUCCESS,
} from "../constants/informationConstant";
import { getCookie } from "../utils";

export const getInformationsByUserId = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: INFORMATION_LIST_BY_USERID_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.get(`${API}/driverInfo/user/${uuid}`, config);
    dispatch({
      type: INFORMATION_LIST_BY_USERID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: INFORMATION_LIST_BY_USERID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getInformation = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: INFORMATION_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/driverInfo/${uuid}`, config);
    dispatch({
      type: INFORMATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: INFORMATION_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createInformation =
  (first_name, last_name, date_of_birth, email, userId) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: INFORMATION_ADD_REQUEST });
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
        `${API}/driverInfo`,
        {
          first_name,
          last_name,
          date_of_birth,
          email,
          userId,
        },
        config
      );
      toast.info("Driver Information Published", {
        autoClose: 700,
      });
      dispatch({
        type: INFORMATION_ADD_SUCCESS,
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
        type: INFORMATION_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateInformation =
  (first_name, last_name, date_of_birth, email, uuid) => async (dispatch) => {
    try {
      dispatch({ type: INFORMATION_UPDATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.put(
        `${API}/driverInfo/${uuid}`,
        {
          first_name,
          last_name,
          date_of_birth,
          email,
        },
        config
      );
      toast.info("Driver Information Update", {
        autoClose: 700,
      });
      dispatch({
        type: INFORMATION_UPDATE_SUCCESS,
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
        type: INFORMATION_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
