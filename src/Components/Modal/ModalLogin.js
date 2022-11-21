import React, { useState } from "react";
import Modal from "./Modal";
import { CiFacebook } from "react-icons/ci";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";

function OpenModal({ openLogin, setOpenLogin, setOpenSignUp, toggle }) {
  const [open, setOpen] = useState(false);

  const handlerSignUp = () => {
    setOpenSignUp();
    setOpenLogin(false);
  };

  return (
    <div>
      {openLogin && (
        <Modal openLogin={openLogin} toggle={setOpenLogin}>
          <div>
            <p className="title-ac mt-4">Log in to Wanderlog</p>
            {/* <div>
                         <IoCloseSharp
                           className="icon-close-modal"
                           onClick={()=>setOpenLogin()}
                         />
                       </div> */}
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
              <div className="text-center">
                <Link className="forgot-password" to="/">
                  Forgot password
                </Link>
              </div>
              <div className="pt-3 text-center">
                <button type="submit" className="btn">
                  <Link className="box-login " to="/">
                    Login
                  </Link>
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
