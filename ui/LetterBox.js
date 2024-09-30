'use client';

import '../ui/styles/letterbox.css';
import { useState } from "react";

export default function LetterBox({letter, onLetterClick}){
    const [isDisabled, setIsDisabled] = useState(false);

    function handleClick(){
        if(!isDisabled)
        {
            onLetterClick(letter);
            setIsDisabled(true);
        }
    }

    return (
        <div className={`letterbox ${isDisabled ? "disabled" : ""}`}>
            <h1 className="letter" onClick={handleClick}>{letter}</h1>
    </div>
    );
}