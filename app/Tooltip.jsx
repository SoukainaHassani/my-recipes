"use client"

import React, { useState } from "react";
import './Tooltip.css';

function Tooltip({ text, tooltipText }) {
    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <span className="tooltip-container">
            {text}
            <span
            className="tooltip-icon"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                ?
            </span>
            {isHovered && (
                <span className="tooltip-box">
                    {tooltipText}
                </span>
            )}
        </span>
    );
}

export default Tooltip;
