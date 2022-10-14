import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { isAuth, setLocalStorage } from "../redux/utils";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userAction";

const login = () => {
  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const router = useRouter();
  const handleCredentialResponse = async (res) => {
    let credential = res.credential;
    const profile = jwtDecode(credential);
    // console.log("Encoded JWT ID token: " + res.credential);
    if (credential) {
      dispatch(userLogin(profile, credential));
    }
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "5136112858-qievu47pe0cii1uve6dh8gjbcjfb7bvs.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    // google.accounts.id.prompt();

    if (isAuth()) {
      router.push("/");
    }
  }, [userInfo]);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="mt-10">
          <h1 className=" text-2xl sm:text-4xl text-center font-bold mb-8">
            Login/Register With Sangai
          </h1>
          <div className="m-auto w-[400px] space-y-5">
            <div className="buttonDiv" id="buttonDiv">
              Google Login
            </div>
            <div className="border rounded-md border-[#dedede]">
              <h1 className="px-3 py-2 text-center">
                Login with Mobile Number
              </h1>
            </div>
            {/* <div className="flex space-x-2">
              <h1>New Member?</h1>
              <Link href="/login">
                <a>Create Account</a>
              </Link>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default login;
