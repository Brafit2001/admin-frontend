import React from "react";

const modal = {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
};

const close = {
    position: "absolute",
    top: 15,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer"
};

const modalContent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "100%",
    margin: "auto"
};

export const Modal = ({ onOpen, children }) => {
    return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
    return (
        <div style={modal} onClick={onClose}>
            <div style={modalContent}>{children}</div>
        </div>
    );
};
