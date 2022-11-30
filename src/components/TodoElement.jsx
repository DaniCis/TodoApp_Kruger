import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const TodoElement = ({todo, onUpdate, onDelete}) => {
    const [edit,setEdit] = useState(false)
    const [newtask, setNewtask] = useState(todo.name)

    const update = () => {
        onUpdate(todo.id, newtask)
        setEdit(false)
    }

    return(
        <Container className='contenedorTodo'>
            { edit ? 
                <Row>
                    <Form onSubmit={update}>
                        <Col className='contenedorBotones'>
                            <Form.Control onChange={(e) => setNewtask(e.target.value)} type='text' value={newtask}/>
                            <Button variant='warning' onClick={update}>Update</Button>
                        </Col>
                    </Form>
                </Row>
                : (
                    <Row>
                        <Col>
                            <p className='todoNombre'>{todo.name}</p>
                        </Col>
                        <Col className='contenedorBotones'>
                            <Button onClick={() => setEdit(true)}>Edit</Button>
                            <Button onClick={() => (onDelete(todo.id))} variant='danger'>Delete</Button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}
export default TodoElement;