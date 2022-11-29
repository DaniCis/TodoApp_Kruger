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
        <Container>
            { edit ? 
                <Row>
                    <Form onSubmit={update}>
                        <Col>
                            <Form.Control onChange={(e) => setNewtask(e.target.value)} type='text' value={newtask}/>
                            <Button onClick={update}>Update</Button>
                        </Col>
                    </Form>
                </Row>
                : (
                    <Row>
                        <Col>{todo.name}
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