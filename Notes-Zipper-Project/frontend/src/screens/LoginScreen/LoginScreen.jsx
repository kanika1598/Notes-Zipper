import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../../components/Spinner';
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';
import MainScreen from '../../components/MainScreen'
import AlertMessage from '../../components/AlertMessage';
import './LoginScreen.css'

function LoginScreen() {

    //setting the history prop
    const history = useHistory()


    //managing input state
    const [userLoginDetails, setUserLoginDetails] = useState({
        email: '',
        password: ''
    })


    //managing error state
    const [error, setError] = useState(null)

    //managing message state
    const [message, setMessage] = useState(null)

    // //managing loading state
    const [loading, setLoading] = useState(false)

    //function to handle input change
    function handleUserInputChange(event) {
        const { name, value } = event.target
        setUserLoginDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    //handling submission of form
    async function loginFormSubmitHandler(event) {
        event.preventDefault()
        setLoading(true)
        try {
            const data = await axios.post('/login', userLoginDetails)
            console.log(data.data)
            window.localStorage.setItem('user', JSON.stringify(data.data))
            setMessage("Logged In Successfully!")

            setTimeout(() => {
                history.push('/my-notes')
            }, 2000)
            setLoading(false)
        }
        catch (error) {
            console.log(error.response.data.message)
            setError(error.response.data)
            setLoading(false)
        }

    }

    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {loading && <Loader />}
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
                {message ? <AlertMessage variant="success">{message}</AlertMessage> :
                    <Form onSubmit={loginFormSubmitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={userLoginDetails.email}
                                placeholder="Enter email"
                                onChange={handleUserInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={userLoginDetails.password}
                                placeholder="Password"
                                onChange={handleUserInputChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </Form>}
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">REGISTER HERE</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}


export default LoginScreen