import React, { useEffect, useState } from "react";

import ReactModal from "react-modal";

interface ModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  setIsOpen,
}: ModalProps) => {
  const [moStatus, setMoStatus] = useState(isOpen);

  useEffect(() => {
    setMoStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={moStatus}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "5px 5px 15px #242424",
          background: "#d8f1ec",
          color: "#000000",
          borderRadius: "60px",
          width: "90%",
          maxWidth: "636px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#2f8876e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
