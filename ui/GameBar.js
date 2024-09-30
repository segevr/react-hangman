'use client';

import '../ui/styles/gamebar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


export default function GameBar(){
    return (
        <Navbar className="gamebar">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="34"
                        height="34"
                        className="d-inline-block align-top"
                    />{' '}
                    Hangman Game
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}