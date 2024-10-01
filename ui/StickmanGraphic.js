'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function StickmanGraphic({ guesses }) {
    const [personStyle, setPersonStyle] = useState({});

    useEffect(() => {
        setPersonStyle({
            transform: `translateX(${guesses * 60}px)`,
            transition: 'transform 2s ease-out'
        });
    }, [guesses]);

    return (
        <Container className="mb-4">
            <Row>
                <Col xs={8} style={{ overflow: 'hidden'}}>
                    <div style={personStyle}>
                        <Image
                            alt="person icon"
                            src="/person-walking.png"
                            width="60"
                            height="60"
                        />
                    </div>
                </Col>
                <Col>
                    <Image
                        alt="noose icon"
                        src="/noose.png"
                        width="80"
                        height="80"
                    />
                </Col>
            </Row>
        </Container>
    );
}