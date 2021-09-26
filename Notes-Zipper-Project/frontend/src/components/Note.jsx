import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'

function Note(props) {
    return (
        <Accordion>
            <Card className="m-2">
                <Card.Header style={{ display: 'flex' }}>
                    <span style={{
                        flex: 1,
                        textDecoration: 'none',
                        fontSize: 18,
                        alignSelf: 'center',
                        cursor: 'pointer'
                    }}>
                        <Accordion.Toggle eventKey="0" as={Card.Text} variant="link">{props.title} </Accordion.Toggle>
                    </span>
                    <div>
                        <Link to={`/note/${props.id}`}>
                            <Button variant="outline-primary" className="mx-2">EDIT</Button>
                        </Link>
                        <Button onClick={props.onDelete} variant="outline-danger" className="mx-2">DELETE</Button>
                    </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h4>
                            <Badge variant="success">Category - {props.category}</Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                            <p>{props.content}</p>
                            <footer className="blockquote-footer">
                                Created At: - 10/08/2021
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Note