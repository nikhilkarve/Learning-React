import classes from "./Modal.module.css";
import { Fragment } from "react/cjs/react.production.min";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    //   This is without using portal.
    // <Fragment>
    //   <Backdrop />
    //   <ModalOverlay>{props.children}</ModalOverlay>
    // </Fragment>
    // Now with portal
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
