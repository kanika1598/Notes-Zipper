import React, { useEffect, useState } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'

function Header() {

    const history = useHistory()


    //handling logout functionality
    function logoutHandler() {
        window.localStorage.removeItem('user')
        history.push('/')
    }
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">NOTES❤ZIPPER</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <NavLink to="/my-notes">MY NOTES</NavLink>
                        </Nav.Link>
                        <NavDropdown title="kb" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">MY PROFILE</NavDropdown.Item>
                            <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header