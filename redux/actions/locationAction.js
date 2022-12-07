import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  LOCATION_LIST_FAIL,
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
} from "../constants/locationConstant";

export const getLocations = () => async (dispatch) => {
  try {
    dispatch({ type: LOCATION_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${API}/location`, config);
    dispatch({
      type: LOCATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOCATION_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
