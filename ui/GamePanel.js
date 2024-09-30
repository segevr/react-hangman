'use client';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import LettersGrid from './LettersGrid';
import WordStage from './WordStage';
import GameMeta from './GameMeta';

export default function GamePanel() {
    const [guesses, setGuesses] = useState(0);
    const [wordBank] = useState(words);
    const [currentWord, setCurrentWord] = useState("");
    const [wordMask, setWordMask] = useState("");

    useEffect(() => {
        const newWord = chooseNewWord(wordBank);
        setCurrentWord(newWord);
        setWordMask(newWord.split('').map((char) => (char === ' ' || char === '-' ? char : '_')).join(''));
    }, [wordBank]);

    let clickTimeout = null;

    function handleClick(clickedLetter) {
        if(clickTimeout) return;

        clickTimeout = setTimeout(() => {
            clickTimeout = null;
        }, 300);

        let isGoodGuess = false;
        // check letter

        let newWordMask = wordMask.split('');
        let wordChars = currentWord.split('');
        wordChars.forEach((_, i) => {
            if (wordChars[i] == clickedLetter) {
                newWordMask[i] = clickedLetter;
                isGoodGuess = true;
            }
        });

        let currentMask = newWordMask.join('');
        setWordMask(currentMask);

        const updatedGuesses = isGoodGuess ? guesses : guesses + 1;
        if (!isGoodGuess) {
            setGuesses(updatedGuesses);
        }

        // check if won
        if (currentMask.indexOf('_') === -1) {
            console.log("redirect to won!");
            window.location.replace(window.location.origin + "/won");
        }

        // check if lost
        if (updatedGuesses >= 6) {
            // lose logic
            console.log("redirect to lost!");
            window.location.replace(window.location.origin + "/lost");
        }
    }

    return (
        <div className="main-panel mx-auto my-4" style={{ maxWidth: '600px' }}>
            <Container>
                <GameMeta guesses={guesses} />
                <WordStage word={wordMask} />
                <hr className='mt-12 mb-12' />
                <LettersGrid onLetterClick={handleClick} />
            </Container>
        </div>
    );
}

function chooseNewWord(wordBank) {
    const rand = GenerateRandomNumber(0, 9);
    return wordBank[rand];
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const words = ["HELLO", "GOODBYE", "WHATEVER", "MONEY", "SPORTS", "HIGH-LOW", "LETS GO", "MOVIES", "ARMCHAIR", "NOTEBOOK"];