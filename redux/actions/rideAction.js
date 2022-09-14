import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  RIDE_ADD_FAIL,
  RIDE_ADD_REQUEST,
  RIDE_ADD_SUCCESS,
  RIDE_DELETE_FAIL,
  RIDE_DELETE_REQUEST,
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
  RIDE_UPDATE_SUCCESS,
} from "../constants/rideConstant";
import { getCookie } from "../utils";

export const getRides = () => async (dispatch) => {
  try {
    dispatch({ type: RIDE_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/ride`, config);
    dispatch({
      type: RIDE_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RIDE_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const getRidesByUserId = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: RIDE_LIST_BY_USERID_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.get(`${API}/ride/user/${uuid}`, config);
    dispatch({
      type: RIDE_LIST_BY_USERID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RIDE_LIST_BY_USERID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getRide = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: RIDE_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/ride/${uuid}`, config);
    dispatch({
      type: RIDE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RIDE_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createRide =
  (slug, leaving, heading, date, price, seat, time, book_instantly, userId) =>
  async (dispatch) => {
    try {
      dispatch({ type: RIDE_ADD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API}/ride`,
        {
          slug,
          leaving,
          heading,
          date,
          price,
          seat,
          time,
          book_instantly,
          userId,
        },
        config
      );
      toast.info("Ride Published", {
        autoClose: 700,
      });
      dispatch({
        type: RIDE_ADD_SUCCESS,
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
        type: RIDE_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateRide =
  (slug, leaving, heading, date, price, seat, time, book_instantly, userId) =>
  async (dispatch) => {
    try {
      dispatch({ type: RIDE_UPDATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.put(
        `${API}/ride/${uuid}`,
        {
          slug,
          leaving,
          heading,
          date,
          price,
          seat,
          time,
          book_instantly,
          userId,
        },
        config
      );
      dispatch({
        type: RIDE_UPDATE_SUCCESS,
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
        type: RIDE_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const deleteRide = (uuid, userId) => async (dispatch) => {
  try {
    dispatch({ type: RIDE_DELETE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.delete(
      `${API}/ride/${uuid}/${userId}`,
      config
    );
    dispatch({
      type: RIDE_DELETE_SUCCESS,
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
      type: RIDE_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
