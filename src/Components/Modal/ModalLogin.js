import React, { useState } from "react";
import Modal from "./Modal";
import { CiFacebook } from "react-icons/ci";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { auth } from "../../config/firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useConnection } from "../../config/redux/connection/index";

function OpenModal({ openLogin, setOpenLogin, setOpenSignUp, toggle }) {
  const { setUserInfoAction } = useConnection();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlerLoginEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerSignUp = () => {
    setOpenSignUp();
    setOpenLogin(false);
  };

  const onLoginWithEmailAndPass = () => {
    if (!validateData()) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserInfoAction(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const validateData = () => {
    if (email === "" || password === "") {
      return alert("Please fill in all fields");
    }
    if (!validateEmail(email)) {
      return alert("Please enter a valid email");
    }
    return true;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //facebook

  const onLoginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setUserInfoAction(user);

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //google
  const onLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token, "token");
        // The signed-in user info.
        const user = result.user;
        setUserInfoAction(user);
        // ...
        // navigate("/guides");
        navigate("/LoginToHome");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div>
      {openLogin && (
        <Modal openLogin={openLogin} toggle={setOpenLogin}>
          <div>
            <p className="title-ac mt-4">Log in to Wanderlog</p>
            <div className="form-icon-login">
              <button className="btn-facebook">
                <div>
                  <CiFacebook className="icon-facebook" />
                </div>
                <div onClick={onLoginWithFacebook} className="ps-4">
                  Log in with Facebook
                </div>
              </button>
            </div>
            <div className="form-icon-login">
              <button className="bg-white text-dark btn-gg-elm">
                <div>
                  <FcGoogle className="icon-facebook" />
                </div>
                <div onClick={onLoginWithGoogle} className="ps-4">
                  Log in with Google
                </div>
              </button>
            </div>
            <div className="form-icon-login">
              <button className="bg-white text-dark btn-gg-elm">
                <div>
                  <AiOutlineApple className="icon-facebook" />
                </div>
                <div className="ps-4">Log in with Apple</div>
              </button>
            </div>
            <div className="line">
              <span className="text-line">or</span>
            </div>
            <form className="form-login">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={handlerLoginEmail}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handlerLoginPassword}
                />
              </div>
              <div className="text-center">
                <button type="button" className="btn">
                  forgot password
                </button>
              </div>
              <div className="pt-3 text-center">
                <button
                  type="button"
                  className="btn"
                  onClick={onLoginWithEmailAndPass}
                >
                  Login
                </button>
              </div>
              <div>
                <div
                  className="d-flex justify-content-center text-decoration-none dont-account"
                  onClick={handlerSignUp}
                >
                  Dont't have an account yet?
                  <strong>Sign up</strong>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default OpenModal;
