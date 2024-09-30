import Image from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default async function Page() {

    return (
        <div className="main-panel mx-auto my-4" style={{ maxWidth: '600px' }}>
            <Container>
                <h1 className="page-header">YOU WON!</h1>
                <Image 
                    className="hero-image"
                    alt="winning-image"
                    src="/win-hang.webp"
                    width="1024"
                    height="1024"
                />
                <hr className='mt-12 mb-12' />
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        <a className="button-link" href="http://localhost:3000">Play again?</a>
                    </Button>

                </div>
            </Container>
        </div>
    );
}
