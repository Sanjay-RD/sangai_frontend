import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../config";
import {
  REQUEST_ADD_FAIL,
  REQUEST_ADD_REQUEST,
  REQUEST_ADD_SUCCESS,
} from "../constants/requestConstant";
import { getCookie } from "../utils";

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
// export const updateInformation =
//   (first_name, last_name, date_of_birth, email, uuid) => async (dispatch) => {
//     try {
//       dispatch({ type: INFORMATION_UPDATE_REQUEST });

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getCookie("token")}`,
//         },
//       };
//       const { data } = await axios.put(
//         `${API}/driverInfo/${uuid}`,
//         {
//           first_name,
//           last_name,
//           date_of_birth,
//           email,
//         },
//         config
//       );
//       toast.info("Driver Information Update", {
//         autoClose: 700,
//       });
//       dispatch({
//         type: INFORMATION_UPDATE_SUCCESS,
//         payload: data,
//       });
//     } catch (err) {
//       toast.error(
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : err.message,
//         {
//           autoClose: 700,
//         }
//       );
//       dispatch({
//         type: INFORMATION_UPDATE_FAIL,
//         payload:
//           err.response && err.response.data.message
//             ? err.response.data.message
//             : err.message,
//       });
//     }
//   };
