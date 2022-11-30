import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const TodoElement = ({todo, onUpdate, onDelete, onComplete}) => {
    const [isEdit,setIsEdit] = useState(false)
    const [newtask, setNewtask] = useState(todo.name)
    const [isDisabled,setIsDisabled] = useState(todo.completed)

    const update = () => {
        onUpdate(todo.id, newtask)
        setIsEdit(false)
    }
    const complete = () =>{
        onComplete(todo.id)
        setIsDisabled(!isDisabled)
    }

    return(
        <Container className='contenedorTodo'>
            { isEdit ? 
                <Row>
                    <Form onSubmit={update}>
                        <Col className='contenedorBotones'>
                            <Form.Control onChange={(e) => setNewtask(e.target.value)} type='text' value={newtask}/>
                            <Button variant='warning' onClick={update}>Update</Button>
                            <Button onClick={() => setIsEdit(false)} variant='danger'>Cancel</Button>
                        </Col>
                    </Form>
                </Row>
                : (
                    <Row>
                        <Col>
                            <p className={`todoNombre ${(todo.completed)? 'isCompleted':''}`}>{todo.name}</p>
                        </Col>
                        <Col className='contenedorBotones'>
                            <Button onClick={() => setIsEdit(true)} disabled={isDisabled}>Edit</Button> 
                            <Button onClick={() => onDelete(todo.id)} variant='danger'>Delete</Button>
                            <Form.Check onClick={complete} className='check' checked={todo.completed}/>
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}
export default TodoElement;