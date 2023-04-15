import React from "react";
import ReactDOM from "react-dom";
import './modal.css';

function Modal({ children, setCloseModal }) {
    const btnCerrar = () => {
        { setCloseModal(prevState => !prevState) }
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="boxModal">
                {children}
                <div className="btnCerrar" onClick={btnCerrar} hidden>
                    Cerrar
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };