import React, { useState, useEffect } from "react";

interface ColorBoxProps {
    colorCode: string;
    idolName: string;
  }

const ColorBox: React.FC<ColorBoxProps> = props => {
    return(
        <div>
            <p>{props.colorCode}</p>
            <p>{props.idolName}</p>
        </div>
    )
}

export default ColorBox