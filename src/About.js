import react from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import './styles.css';


export default function About() {

    function sendMail() { //Alert when hitting the Contact button
        alert('Send email to: nicol20@student.sdu.dk');
    }

    return (
        <div>
            <Container>
                <h1 className="title" >About page</h1>
                <p className="text" >This is a simple ToDo app, which contains functionality for adding a ToDo and removing a ToDo</p>
                <h2 className="text" >Contact information</h2>
                <p className="text" >Email: nicol20@student.sdu.dk</p>
                <Button className="button" onClick={sendMail} variant="primary">Contact</Button>{' '}
            </Container>
        </div>
    );
}