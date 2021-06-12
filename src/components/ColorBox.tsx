import React, { useState } from "react";
import Modal from 'react-modal';
import './ColorBox.css';

const customStyles = {
    content : {
        width                 : '60%',
        height: '100px',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
}

export interface ColorBoxProps {
    colorCode: string;
    idolName: string;
}

Modal.setAppElement('#root')

const ColorBox: React.FC<ColorBoxProps> = props => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return(
        <>
            <li className="color-box-li" onClick={openModal}>
                <div className="color-box-color" style={{backgroundColor: props.colorCode}}></div>
                <span>{props.idolName}</span>
            </li>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                >
                <div className="modal-check-content">
                    ペンライトの色を<span style={{color: props.colorCode}}>{props.idolName}</span>に変更します
                </div>
                <div className="btn-box">
                    <button className="btn cancel" onClick={closeModal}>キャンセル</button>
                    <button className="btn ok" onClick={closeModal}>決定</button>
                </div>
            </Modal>
        </>
    )
}

export default ColorBox