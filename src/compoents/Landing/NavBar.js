import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { LinkContainer } from 'react-router-bootstrap';



const NavBar = () => {


    return (
        <Container>
            <Row>
            
                <Navbar expand="sm" bg="primary" variant="dark">

                   <LinkContainer to="/">
                     <Navbar.Brand >
                        <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
                        SENSEI
                      </Navbar.Brand>
                   </LinkContainer>
               

                    <Nav>
                      <LinkContainer to="/home/listOfClasses">
                        <Nav.Link >Classes</Nav.Link>
                      </LinkContainer>
                        <br />
                      <LinkContainer to="/home/about">
                        <Nav.Link >About</Nav.Link>
                      </LinkContainer>
                        <br />
                      <LinkContainer to="/home/contact">
                        <Nav.Link >Contact</Nav.Link>
                      </LinkContainer>
                        <br />
                    </Nav>

                      <Nav className="justify-content-end">
                        <Dropdown >
                            <Dropdown.Toggle id="dropdown-basic">
                                Login
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                            <LinkContainer to="/home/login/user">
                                <Dropdown.Item>User</Dropdown.Item>   
                            </LinkContainer>

                            <LinkContainer to="/home/login/sensei">
                                <Dropdown.Item>Sensei</Dropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/home/login/registerUser">
                                <Dropdown.Item >User Register</Dropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/home/login/registerSensei">
                                <Dropdown.Item >Sensei Register</Dropdown.Item>
                            </LinkContainer>

                            </Dropdown.Menu>
                        </Dropdown>
                      </Nav>
                 
                </Navbar>
            </Row>
        </Container>
        
        
    )
}

export default NavBar;
