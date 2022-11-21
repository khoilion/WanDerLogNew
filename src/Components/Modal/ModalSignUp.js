import React, { useState } from "react";
import Modal from "./Modal";
import { IoCloseSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";
// import useToggle from '../useToggle'
// import '../styles.css'
function OpenModal({ openSignUp, setOpenSignUp, setOpenLogin, toggle }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handlerLogin = () => {
    setOpenLogin();
    setOpenSignUp(false);
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
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="pt-3 text-center">
                <button type="submit" className="btn">
                  <Link className="box-login" to="/">
                    Sign up with email
                  </Link>
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
