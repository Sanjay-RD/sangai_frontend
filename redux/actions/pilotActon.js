import axios from "axios";
import { API } from "../../config";
import {
  PILOT_ADD_FAIL,
  PILOT_ADD_REQUEST,
  PILOT_ADD_SUCCESS,
} from "../constants/pilotConstant";
import { toast } from "react-toastify";

export const createPilot =
  (
    name,
    email,
    address,
    phone,
    leaving,
    going,
    date,
    seats,
    vehicle_type,
    vehicle_color,
    vehicle_number
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: PILOT_ADD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API}/pilot`,
        {
          name,
          email,
          address,
          phone,
          leaving,
          going,
          date,
          seats,
          vehicle_type,
          vehicle_color,
          vehicle_number,
        },
        config
      );
      dispatch({
        type: PILOT_ADD_SUCCESS,
        payload: data,
      });
      toast.info("Information Added", {
        autoClose: 700,
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
        type: PILOT_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
