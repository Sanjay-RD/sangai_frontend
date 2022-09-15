import { API } from "../../config";
import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/userConstant";
import {
  removeLocalStorage,
  setCookies,
  setLocalStorage,
  removeCookie,
  getCookie,
} from "../utils";

export const userLogin = (profile, credential) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${API}/user`,
      {
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
        token: credential,
      },
      config
    );

    toast.info("Login Successfully", {
      autoClose: 700,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    setCookies("token", data.token);
    setLocalStorage("userInfo", data);
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
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
// export const userRegister =
//   (name, phone, email, password) => async (dispatch) => {
//     try {
//       dispatch({ type: USER_REGISTER_REQUEST });
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       await axios.post(`${API}/user`, { name, phone, email, password }, config);

//       toast.info("Register Successfully", {
//         autoClose: 700,
//       });
//       dispatch({
//         type: USER_REGISTER_SUCCESS,
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
//         type: USER_REGISTER_FAIL,
//         payload:
//           err.response && err.response.data.message
//             ? err.response.data.message
//             : err.message,
//       });
//     }
//   };

export const logout = () => async (dispatch) => {
  removeCookie("token");
  removeLocalStorage("userInfo");
  dispatch({ type: USER_LOGOUT });
};
