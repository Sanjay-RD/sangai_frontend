import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  VEHICLE_ADD_FAIL,
  VEHICLE_ADD_REQUEST,
  VEHICLE_ADD_SUCCESS,
  VEHICLE_DETAILS_FAIL,
  VEHICLE_DETAILS_REQUEST,
  VEHICLE_DETAILS_SUCCESS,
  VEHICLE_LIST_BY_USERID_FAIL,
  VEHICLE_LIST_BY_USERID_REQUEST,
  VEHICLE_LIST_BY_USERID_SUCCESS,
  VEHICLE_UPDATE_FAIL,
  VEHICLE_UPDATE_REQUEST,
  VEHICLE_UPDATE_SUCCESS,
} from "../constants/vehicleConstant";
import { getCookie } from "../utils";

export const getVehicleByUserId = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: VEHICLE_LIST_BY_USERID_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
    const { data } = await axios.get(`${API}/vehicle/user/${uuid}`, config);
    dispatch({
      type: VEHICLE_LIST_BY_USERID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: VEHICLE_LIST_BY_USERID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getVehicle = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: VEHICLE_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/vehicle/${uuid}`, config);
    dispatch({
      type: VEHICLE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: VEHICLE_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const createVehicle =
  (
    select_vehicle,
    vehicle_image,
    billbook_image,
    number_plate,
    vehicle_mileage,
    userId
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: VEHICLE_ADD_REQUEST });
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
        `${API}/vehicle`,
        {
          select_vehicle,
          vehicle_image,
          billbook_image,
          number_plate,
          vehicle_mileage,
          userId,
        },
        config
      );
      toast.info("Vehicle Information Published", {
        autoClose: 700,
      });
      dispatch({
        type: VEHICLE_ADD_SUCCESS,
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
        type: VEHICLE_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
export const updateVehicle =
  (
    select_vehicle,
    vehicle_image,
    billbook_image,
    number_plate,
    vehicle_mileage,
    uuid
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: VEHICLE_UPDATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      };
      const { data } = await axios.put(
        `${API}/vehicle/${uuid}`,
        {
          select_vehicle,
          vehicle_image,
          billbook_image,
          number_plate,
          vehicle_mileage,
        },
        config
      );
      dispatch({
        type: VEHICLE_UPDATE_SUCCESS,
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
        type: VEHICLE_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
