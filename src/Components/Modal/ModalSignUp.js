import React, { useState } from "react";
import Modal from "./Modal";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../config/firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function OpenModal({ openSignUp, setOpenSignUp, setOpenLogin, toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerLoginEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerLogin = () => {
    setOpenLogin();
    setOpenSignUp(false);
  };

  const onSubmit = () => {
    if (!validateData()) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user, "user");
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

  return (
    <div>
      {openSignUp && (
        <Modal openSignUp={openSignUp} toggle={setOpenSignUp}>
          <div className="">
            <p className="title-ac pt-4">
              Sign up to take your trip planning to the next level
            </p>
            <div className="form-icon-login">
              <button className="btn-facebook">
                <div>
                  <CiFacebook className="icon-facebook" />
                </div>
                <div className="ps-4">Log in with Facebook</div>
              </button>
            </div>
            <div className="form-icon-login">
              <button className="bg-white text-dark btn-gg-elm">
                <div>
                  <FcGoogle className="icon-facebook" />
                </div>
                <div className="ps-4">Log in with Google</div>
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
                  id="exampleInputEmail1"
                  value={email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={handlerLoginEmail}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handlerLoginPassword}
                />
              </div>
              <div className="pt-3 text-center">
                <button type="button" className="btn" onClick={onSubmit}>
                  Sign up with email
                </button>
              </div>
              <div>
                <div
                  className="d-flex justify-content-center text-decoration-none dont-account"
                  onClick={handlerLogin}
                >
                  Already have an account?
                  <strong>Log in</strong>
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
