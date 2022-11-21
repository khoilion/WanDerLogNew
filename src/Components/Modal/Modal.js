import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";
import { GrFormClose } from "react-icons/gr";

function Portal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  const [element] = useState(document.createElement("div"));

  useEffect(() => {
    modalRoot.appendChild(element);

    return function cleanup() {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  return createPortal(children, element);
}

function Modal({ children, toggle, openLogin, openSignUp }) {
  return (
    <Portal>
      {(openLogin || openSignUp) && (
        <div className="ModalWrapper" onClick={toggle}>
          <div
            className="ModalBody"
            onClick={(event) => event.stopPropagation()}
          >
            <span onClick={toggle}>
              <GrFormClose className="icon-close-ac" />
            </span>
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
}

export default Modal;
