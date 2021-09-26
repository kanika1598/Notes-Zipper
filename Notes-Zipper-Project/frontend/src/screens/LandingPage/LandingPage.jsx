import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {

    //setting the history hook
    const history = useHistory()
    //checking whether there is user info present in the local storage and if present send the user directly to notes page
    useEffect(() => {
        const userInfo = window.localStorage.getItem('user');
        if (userInfo) {
            history.push('/my-notes')
        }
    }, [])

    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome To</h1>
                            <h1 className="title">💙Notes Zipper💙</h1>
                            <p className="subtitle">One Safe place for all your NOTES!😎</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/login">
                                <Button size="lg" className="landingButton">LOGIN</Button>
                            </Link>
                            <Link to="/register">
                                <Button size="lg" className="landingButton" variant="outline-primary">REGISTER</Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage