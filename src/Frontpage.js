import react, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';


export default function Frontpage() {
    const [todos, setTodos] = useState([]); //Current TODOs

    function removeToDo(index) { //Removes a TODO
        setTodos(
            todos.filter((item, i) => i !== index)
        );
    }

    const [text, setText] = useState([]); //Text of TODO from input field

    function addToDo() { //Adds TODO
        const newItem = {
            name: text,
        };

        if (text.trim().length !== 0) { //Ensure no empty TODOs is added
            setText(""); //Empty the text input
            setTodos((oldArray) => [...oldArray, newItem]); //Append another object to the TODO array
        }
    }
    
    //Uses ListGroup to display TODOs together with an icon from FontAwesome
    return (
        <div>
            <Container>
                <h1 className="title" >My TODOs</h1>
                <ListGroup as="ol" numbered>
                    {todos.map((item, index) => (
                        <ListGroup.Item className="item" as="li">{item.name}
                            <FontAwesomeIcon className="icon" onClick={() => removeToDo(index)} icon={faTrash} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
            <Container>
                <Form.Label className="text" >TODO</Form.Label>
                <Form.Control className="input" type="text" placeholder="Enter TODO" value={text} onChange={(e) => setText(e.target.value)} />
                <Button className="button" default variant="primary" type="submit" onClick={addToDo}>Add TODO</Button>
                <p className="text" >Click the button to submit the TODO - Click the trashcan to remove the TODO</p>
            </Container>
        </div>
    );
}