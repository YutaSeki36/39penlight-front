import React from "react";
import './ColorBox.css';

export interface ColorBoxProps {
    colorCode: string;
    idolName: string;
    setIsOpen: (colorCode: string, idolName: string) => void;
}

const ColorBox: React.FC<ColorBoxProps> = props => {

    return(
        <>
            <li className="color-box-li" onClick={() => props.setIsOpen(props.colorCode,props.idolName)}>
                <div className="color-box-color" style={{backgroundColor: props.colorCode}}></div>
                <span>{props.idolName}</span>
            </li>
        </>
    )
}

export default ColorBox