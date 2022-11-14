import react from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


export default function About(){
    return (
        <div>
            <Container>
                <h1>About page</h1>
                <p>This is an simple TODO app, which contains functionality for adding TODOs and removing TODOs</p>
                <h2>Contact information</h2>
                <p>Email: nicol20@student.sdu.dk</p>
                <Button variant="primary">Contact</Button>{' '}
            </Container>
        </div>
    );
}