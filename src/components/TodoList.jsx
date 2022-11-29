import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoElement from "./TodoElement";

const TodoList = () => {
    const [task,setTask] = useState('') 
    const [todos,setTodos] = useState([])

    const agregarTodo = (e) =>{
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            name: task,
        }
        setTodos([...todos,newTodo])
        setTask('')
    }
    const updateTodo = (id,name) =>{
        const temp = [...todos]
        const todo = temp.find(x => x.id === id)
        todo.name = name
        setTodos(temp)
    }
    const deleteTodo = (id) =>{
        const nuevo = todos.filter( x => x.id !== id)
        setTodos(nuevo)
    }

    return(
        <Container>
            <Row>
                <Form onSubmit={agregarTodo}>
                    <Col>
                        <Form.Control onChange={(e) => (setTask(e.target.value))} type="text" value={task} />
                        <Button onClick={agregarTodo} variant="success" type='submit'>Create Todo</Button>
                    </Col>
                </Form>
            </Row>
            {todos.map(todo => (
                <Row>
                    <TodoElement todo={todo} key={todo.id} onUpdate={updateTodo} onDelete={deleteTodo} /> 
                </Row>
            ))}
        </Container>
    )
}

export default TodoList;