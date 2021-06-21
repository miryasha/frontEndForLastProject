import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const RegisterForm = () => {


    
    return (
        <Container>
        <br />
            <Row>
             <Col></Col>
                

                <Col>
                     <Alert variant='primary'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email"/>
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <br />
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    
                    </Alert>
                </Col>

            <br />
             <Col></Col>
            </Row>
        </Container>
    )
}

export default RegisterForm
