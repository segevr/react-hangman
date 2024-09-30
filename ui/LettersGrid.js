'use client';

import '../ui/styles/lettersgrid.css';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import LetterBox from "./LetterBox";


export default function LettersGrid({ onLetterClick }) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // Array of letters
    const rows = []; // Array to store the rows of letter buttons

    // Group letters into rows of 7
    for (let i = 0; i < letters.length; i += 7) {
        rows.push(letters.slice(i, i + 7));
    }

    return (
        <Container>
            {rows.map((row, rowIndex) => (
                <Row key={rowIndex} className="letter-row mt-4">
                    {row.map((letter, colIndex) => (
                        <Col key={colIndex} className="d-flex justify-content-center align-items-center">
                            <LetterBox
                                letter={letter}
                                onLetterClick={() => {
                                    onLetterClick(letter);
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}