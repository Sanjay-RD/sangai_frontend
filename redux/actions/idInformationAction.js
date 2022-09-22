import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  ID_INFORMATION_ADD_FAIL,
  ID_INFORMATION_ADD_REQUEST,
  ID_INFORMATION_ADD_SUCCESS,
  ID_INFORMATION_DETAILS_FAIL,
  ID_INFORMATION_DETAILS_REQUEST,
  ID_INFORMATION_DETAILS_SUCCESS,
  ID_INFORMATION_LIST_BY_USERID_FAIL,
  ID_INFORMATION_LIST_BY_USERID_REQUEST,
  ID_INFORMATION_LIST_BY_USERID_SUCCESS,
  ID_INFORMATION_UPDATE_FAIL,
  ID_INFORMATION_UPDATE_REQUEST,
  ID_INFORMATION_UPDATE_SUCCESS,
} from "../constants/idInformationConstant";
import { getCookie } from "../utils";

export const getIdInformationsByUserId = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: ID_INFORMATION_LIST_BY_USERID_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.get(
      `${API}/idinformation/user/${uuid}`,
      config
    );
    dispatch({
      type: ID_INFORMATION_LIST_BY_USERID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ID_INFORMATION_LIST_BY_USERID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getIdInformation = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: ID_INFORMATION_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/idinformation/${uuid}`, config);
    dispatch({
      type: ID_INFORMATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ID_INFORMATION_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createIdInformation =
  (id_information, userId) => async (dispatch, getState) => {
    try {
      dispatch({ type: ID_INFORMATION_ADD_REQUEST });
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
        `${API}/idinformation`,
        {
          id_information,
          userId,
        },
        config
      );
      toast.info("ID Information Published", {
        autoClose: 700,
      });
      dispatch({
        type: ID_INFORMATION_ADD_SUCCESS,
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
        type: ID_INFORMATION_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateIdInformation =
  (id_information, uuid) => async (dispatch) => {
    try {
      dispatch({ type: ID_INFORMATION_UPDATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.put(
        `${API}/idinformation/${uuid}`,
        {
          id_information,
        },
        config
      );
      dispatch({
        type: ID_INFORMATION_UPDATE_SUCCESS,
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
        type: ID_INFORMATION_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
