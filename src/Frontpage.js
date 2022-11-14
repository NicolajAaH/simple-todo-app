import react, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Frontpage(){
    const [todos, setTodos] = useState([]);

    function removeToDo(index){
        setTodos(
            todos.filter((item, i) => i !== index)
        );
    }

    const [text, setText] = useState([]);

    function addToDo(){
        const newItem = {
            name: text,
        };

        if (text.trim().length !== 0) { //Ensure no empty ToDos is added
            setText("");
            setTodos((oldArray) => [...oldArray, newItem]); //Append another object to the ToDo array
        }
    }

    return (
        <div>
            <Container>
            <h1>My TODOs</h1>
            <ListGroup as="ol" numbered>
                {todos.map((item, index) => (
                    <ListGroup.Item as="li">{item.name} &nbsp; &nbsp;
                            <FontAwesomeIcon onClick={() => removeToDo(index)} icon={faTrash}/>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Container>
            <Container>
                <Form.Label>TODO</Form.Label>
                <Form.Control type="text" placeholder="Enter TODO" value={text} onChange={(e) => setText(e.target.value)}/>
                <p>Click the button to submit the TODO</p>
                <Button default variant="primary" type="submit" onClick={addToDo}>Add TODO</Button>
            </Container>
        </div>
    );
}