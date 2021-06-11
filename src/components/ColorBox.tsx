import React, { useState, useEffect } from "react";
import './ColorBox.css';

export interface ColorBoxProps {
    colorCode: string;
    idolName: string;
  }

const ColorBox: React.FC<ColorBoxProps> = props => {
    return(
        <li className="color-box-li">
            <div className="color-box-color" style={{backgroundColor: props.colorCode}}></div>
            <span>{props.idolName}</span>
        </li>
    )
}

export default ColorBox