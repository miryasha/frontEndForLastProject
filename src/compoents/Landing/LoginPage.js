import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';


const LoginPage = () => {
    return (
        
        <Container>
        <br />
            <Row>
                <Col>Login</Col>
                

                <Col>
                <Alert variant='primary'>
                    <Form >
                        <Form.Text className="text-muted" >
                            Welcome Back!
                        </Form.Text>
                        <br />
                        <Form.Group controlId="formBasicEmail"  variant="primary">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <br />
                        <Form.Text className="text-muted" >
                                    Don't have an account!
                        </Form.Text>
                         <Nav.Item>
                            <LinkContainer to="/home/login/register">
                               <Nav.Link >Register</Nav.Link>
                            </LinkContainer>
                         </Nav.Item>
                         <br />
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    </Alert>
                </Col>

                <br />
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}

export default LoginPage
