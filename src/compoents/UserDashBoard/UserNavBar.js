import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';

const UserNavBar = () => {
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
                        <LinkContainer to="/userdash/Profile">
                            <Nav.Link >Profile</Nav.Link>
                        </LinkContainer>
                        <br />

                      <LinkContainer to="/userdash/listOfClasses">
                        <Nav.Link >List of classes</Nav.Link>
                      </LinkContainer>
                        <br />

                      <LinkContainer to="/userdash/calendar">
                        <Nav.Link >Calendar</Nav.Link>
                      </LinkContainer>
                        <br />

                      
                        <br />

                    </Nav>

                      
                 
                </Navbar>
            </Row>
        </Container>
    )
}

export default UserNavBar
