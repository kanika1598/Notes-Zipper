import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from '../../components/MainScreen'
import './RegisterScreen.css'
import axios from 'axios';
import AlertMessage from '../../components/AlertMessage';
import Loader from '../../components/Spinner';

function RegisterScreen() {

    const history = useHistory()

    //managing state for registering user details
    const [registerUserDeatails, setRegisterUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    })

    //managing error state
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    // //managing loading state
    const [loading, setLoading] = useState(false)

    //handling input change
    function handleRegisterUserChange(event) {
        const { name, value } = event.target
        setRegisterUserDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    //handling the submission of registeration form
    async function registerFormSubmitHandler(event) {
        event.preventDefault()
        setLoading(true)

        //sending details to the server  
        try {
            const data = await axios.post('/api/users', registerUserDeatails)
            console.log(data.data)

            setMessage("Successfully Registered!")
            setLoading(false)
            setTimeout(() => {
                history.push('/login')
            }, 3000)
        }
        catch (error) {
            setError(error.response.data)
            setLoading(false)
        }
    }

    return (
        <MainScreen title="REGISTER">
            <div className="regsiterContainer">
                {loading && <Loader />}
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
                {message ? <AlertMessage variant="success">{message}</AlertMessage> :
                    <Form onSubmit={registerFormSubmitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                onChange={handleRegisterUserChange}
                                value={registerUserDeatails.name}
                                name="name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={handleRegisterUserChange}
                                value={registerUserDeatails.email}
                                name="email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handleRegisterUserChange}
                                value={registerUserDeatails.password}
                                name="password"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="pic">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.File
                                id="custom-file"
                                type="image/png"
                                label="Upload Profile Picture"
                                custom
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>}
                <Row className="py-3">
                    <Col>
                        Already Registered ? <Link to="/login">LOGIN HERE</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}


export default RegisterScreen