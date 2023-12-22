import React from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) =>{
    return (
        <div>
        <div className="backdrop"></div>
        </div>
    )
}

const ModalOverlay = (props) =>{
    return (
        <div className="modal">
            <div>{props.children}</div>
        </div>
    )
}


const Modal = (props) => {

    return (
        <Fragment>
            {createPortal(<Backdrop/>, document.getElementById("overlays"))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlays"))}
        </Fragment>
    )
};

export default Modal;