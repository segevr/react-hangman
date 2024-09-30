'use-client';

import '../ui/styles/wordstage.css';
import { useState, useEffect } from "react";

export default function WordStage({word}){
    const [revealedWord, setRevealedWord] = useState(word); 

    useEffect(() => {
        setRevealedWord(word);
    }, [word]);
    return (
        <div className="word-stage">
            { 
                revealedWord.split('').map((char, index) => (
                    <span key={index} className={`stage-letter ${char !== '_' ? 'revealed' : ''}`}>
                        {char}
                    </span>
                ))
            }
        </div>
    );
}