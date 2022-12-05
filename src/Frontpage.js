import react, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';


export default function Frontpage() {
    const [todos, setTodos] = useState([]); //Current ToDos

    function removeToDo(index) { //Removes a ToDo
        setTodos(
            todos.filter((item, i) => i !== index) //Everything except the deleted ToDo
        );
    }

    const [text, setText] = useState([]); //Text of ToDo from input field

    function addToDo() { //Adds ToDo
        const newTodo = {
            name: text,
        };

        if (text.trim().length !== 0) { //Ensure no empty ToDos is added
            setText(""); //Empty the text input
            setTodos((oldArray) => [...oldArray, newTodo]); //Append another object to the ToDo array
        }
    }

    //Uses ListGroup to display ToDos together with an icon from FontAwesome
    return (
        <div>
            <Container>
                <h1 className="title" >My ToDo List</h1>
                <ListGroup as="ol" numbered>
                    {todos.map((todo, index) => (
                        <ListGroup.Item className="todo" as="li">{todo.name}
                            <FontAwesomeIcon className="icon" onClick={() => removeToDo(index)} icon={faTrash} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
            <Container>
                <Form.Label className="text" >ToDo</Form.Label>
                <Form.Control className="input" type="text" placeholder="Enter ToDo" value={text} onChange={(e) => setText(e.target.value)} />
                <Button className="button" default variant="primary" type="submit" onClick={addToDo}>Add ToDo</Button>
                <p className="text" >Click the button to submit the ToDo - Click the trashcan to remove the ToDo</p>
            </Container>
        </div>
    );
}