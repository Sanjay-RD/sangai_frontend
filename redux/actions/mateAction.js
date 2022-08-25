import axios from "axios";
import { API } from "../../config";
import {
  MATE_ADD_FAIL,
  MATE_ADD_REQUEST,
  MATE_ADD_SUCCESS,
} from "../constants/mateConstant";
// import { toast } from "react-toastify";

export const createMate =
  (name, email, address, phone, leaving, going, date, seats) =>
  async (dispatch) => {
    try {
      dispatch({ type: MATE_ADD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API}/mate`,
        { name, email, address, phone, leaving, going, date, seats },
        config
      );
      dispatch({
        type: MATE_ADD_SUCCESS,
        payload: data,
      });
    } catch (err) {
      // toast.error(
      //   err.response && err.response.data.message
      //     ? err.response.data.message
      //     : err.message,
      //   {
      //     autoClose: 700,
      //   }
      // );
      dispatch({
        type: MATE_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
