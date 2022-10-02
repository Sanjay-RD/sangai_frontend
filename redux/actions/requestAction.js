import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  REQUEST_ADD_FAIL,
  REQUEST_ADD_REQUEST,
  REQUEST_ADD_SUCCESS,
  REQUEST_DELETE_FAIL,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_SUCCESS,
  REQUEST_LIST_BY_RIDE_ID_FAIL,
  REQUEST_LIST_BY_RIDE_ID_REQUEST,
  REQUEST_LIST_BY_RIDE_ID_SUCCESS,
  REQUEST_UPDATE_FAIL,
  REQUEST_UPDATE_REQUEST,
  REQUEST_UPDATE_SUCCESS,
  REQUEST_UPDATE_TO_ACCEPT_FAIL,
  REQUEST_UPDATE_TO_ACCEPT_REQUEST,
  REQUEST_UPDATE_TO_ACCEPT_SUCCESS,
  REQUEST_UPDATE_TO_PAY_FAIL,
  REQUEST_UPDATE_TO_PAY_REQUEST,
  REQUEST_UPDATE_TO_PAY_SUCCESS,
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
export const updateRequest = (seat, uuid) => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.put(
      `${API}/request/${uuid}`,
      {
        seat,
      },
      config
    );
    toast.info("Request Update and Sent to Rider", {
      autoClose: 700,
    });
    dispatch({
      type: REQUEST_UPDATE_SUCCESS,
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
      type: REQUEST_UPDATE_FAIL,
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
export const updateRequestToPay = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_UPDATE_TO_PAY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.put(`${API}/request/${uuid}/pay`, config);
    toast.info("Ride Payed", {
      autoClose: 700,
    });
    dispatch({
      type: REQUEST_UPDATE_TO_PAY_SUCCESS,
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
      type: REQUEST_UPDATE_TO_PAY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteRequest = (uuid, userId) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_DELETE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.delete(
      `${API}/request/${uuid}/${userId}`,
      config
    );
    toast.info("Request Cancle", {
      autoClose: 700,
    });
    dispatch({
      type: REQUEST_DELETE_SUCCESS,
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
      type: REQUEST_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
