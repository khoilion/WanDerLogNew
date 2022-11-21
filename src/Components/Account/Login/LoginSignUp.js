import React from "react";
import "./login.css";
import ModalLogin from "../../Modal/ModalLogin";
import ModalSignUp from "../../Modal/ModalSignUp";
import useToggle from "../../Modal/useToggle";

const LoginSignUp = () => {
  const [openLogin, setOpenLogin] = useToggle(false);
  const [openSignUp, setOpenSignUp] = useToggle(false);

  const handelOpenSign = () => {
    setOpenLogin();
  };
  const handelOpenSignUp = () => {
    setOpenSignUp();
  };
  return (
    <div className="position-relative d-flex align-items-center">
      <div>
        <button className="btn-elm-account" onClick={handelOpenSign}>
          Login
        </button>
      </div>
      <div>
        <button className="btn-elm-account" onClick={handelOpenSignUp}>
          Sign up
        </button>
      </div>
      <div>
        <ModalLogin
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
        />
        <ModalSignUp
          openSignUp={openSignUp}
          setOpenSignUp={setOpenSignUp}
          setOpenLogin={setOpenLogin}
        />
      </div>
    </div>
  );
};
export default LoginSignUp;
