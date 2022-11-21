import React from "react";
import "./signup.css";
import useToggle from "../../Modal/useToggle";
import ModalSignup from "../../Modal/ModalSignup";
const Signup = ({ openSignUp, setOpenLogin, setOpenSignUp }) => {
  // const [open, setOpen] = useToggle(false);
  return (
    <div>
      <div>
        <button className="btn-elm-account2" onClick={() => setOpenSignUp()}>
          Sign up
        </button>
      </div>

      <div>
        <ModalSignup
          openSignUp={openSignUp}
          setOpenSignUp={setOpenSignUp}
          setOpenLogin={setOpenLogin}
        />
      </div>
    </div>
  );
};

export default Signup;
