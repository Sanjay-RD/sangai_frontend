import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  REQUEST_ADD_FAIL,
  REQUEST_ADD_REQUEST,
  REQUEST_ADD_SUCCESS,
  REQUEST_LIST_BY_RIDE_ID_FAIL,
  REQUEST_LIST_BY_RIDE_ID_REQUEST,
  REQUEST_LIST_BY_RIDE_ID_SUCCESS,
  REQUEST_UPDATE_TO_ACCEPT_FAIL,
  REQUEST_UPDATE_TO_ACCEPT_REQUEST,
  REQUEST_UPDATE_TO_ACCEPT_SUCCESS,
} from "../constants/requestConstant";
import { getCookie } from "../utils";

export const getAllRequestByRideId = (rideId) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_LIST_BY_RIDE_ID_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${API}/request/ride/${rideId}`,

      config
    );
    dispatch({
      type: REQUEST_LIST_BY_RIDE_ID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: REQUEST_LIST_BY_RIDE_ID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createRequest =
  (userId, rideId, riderId, seat) => async (dispatch, getState) => {
    try {
      dispatch({ type: REQUEST_ADD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.post(
        `${API}/request`,
        {
          userId,
          rideId,
          riderId,
          seat,
        },
        config
      );
      toast.info("Request Sent to Rider", {
        autoClose: 700,
      });
      dispatch({
        type: REQUEST_ADD_SUCCESS,
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
        type: REQUEST_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateRequestToAccept = (isAccept, uuid) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_UPDATE_TO_ACCEPT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.put(
      `${API}/request/accept/${uuid}`,
      {
        isAccept,
      },
      config
    );
    toast.info("Request Accepted", {
      autoClose: 700,
    });
    dispatch({
      type: REQUEST_UPDATE_TO_ACCEPT_SUCCESS,
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
      type: REQUEST_UPDATE_TO_ACCEPT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
