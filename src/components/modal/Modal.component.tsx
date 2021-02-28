import React from "react";
import { ModalProps } from "../../types/components.types";

import style from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({ children, isOpen, onCrossClick }) => {
  if (!isOpen) return <></>;
  return (
    <div className={style["modal-container"]}>
      <div className={style.content}>
        <span onClick={onCrossClick} className={style.cross}>
          X
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
