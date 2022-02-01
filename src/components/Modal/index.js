import { Fragment } from "react";
import reactDom from "react-dom";
import classes from "./modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const MODAL_CONTAINER = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop />, MODAL_CONTAINER)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        MODAL_CONTAINER
      )}
    </Fragment>
  );
}

export default Modal;
