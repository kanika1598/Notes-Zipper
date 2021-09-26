import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './MainScreen.css'

function MainScreen(props) {
    return (
        <div className="mainBack">
            <Container>
                <Row>
                    <div className="page">
                        {props.title &&
                            <React.Fragment>
                                <h1 className="heading">{props.title}</h1>
                                <hr />
                            </React.Fragment>
                        }
                        {props.children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MainScreen