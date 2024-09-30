'use client';
import '../ui/styles/gamemeta.css';

export default function GameMeta({guesses}){
    const isDanger = guesses > 4;
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className={`game-meta ${isDanger ? "danger-box" : ""}`}>
                <span className={`guesses-label ${isDanger ? "danger-text" : ""}`}>Guesses:</span> 
                <span className={`guesses-value ${isDanger ? "danger-text" : ""}`}>{guesses}</span>
            </div>
        </div>
    );
}