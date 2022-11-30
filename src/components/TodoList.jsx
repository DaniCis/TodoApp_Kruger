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
            completed:false,
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
    const completeTodo = (id) =>{
        const temp = [...todos]
        const todo = temp.find(x => x.id === id)
        todo.completed = !todo.completed
        setTodos(temp)
    }

    return(
        <Container className="contenedorPrincipal">
            <Row>
                <Col xs={{span:6,offset:3}} md={{ span: 4, offset: 6 }} lg={{span:4, offset:5}}>
                    <p className="todoTitle">TO-DO APP</p>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={agregarTodo}>
                    <Col className="contenedorBotones" 
                        xs={{span:10,offset:1}} md={{ span: 8, offset: 3 }} lg={{span:4, offset:4}}>
                        <Form.Control onChange={(e) => (setTask(e.target.value))} type="text" value={task} />
                        <Button  onClick={agregarTodo} variant="success" type='submit'>Create</Button>
                    </Col>
                </Form>
            </Row>
            <Container className="contenedorTodos">
                {todos.map(todo => (
                    <Row key={todo.id}>
                        <Col xs={{span:10,offset:1}} md={{ span: 8, offset: 3 }} lg={{span:4, offset:4}}>
                            <TodoElement todo={todo} key={todo.id} onUpdate={updateTodo} onDelete={deleteTodo} onComplete={completeTodo} /> 
                        </Col>
                    </Row>
                ))}
            </Container>
        </Container>
    )
}

export default TodoList;