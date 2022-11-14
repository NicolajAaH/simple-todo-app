import react, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


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
                {todos.map((item, index) => (
                    <Alert onClose={() => removeToDo(index)} dismissible>{item.name}</Alert>
                ))}
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