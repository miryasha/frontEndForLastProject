import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import { useState , useEffect } from 'react';
import axios from "axios";

const LoginSensei = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    function handleSubmit(e){
         e.preventDefault();

        
        const data = {
            email: email,
            password: password
           
          }
          console.log(data)
          
          axios.post('http://localhost:8080/???', data).then(res => {
           setData(res.data);
           setEmail('');
           setPassword('');
           
      }).catch(err => {
        console.log(err)
      });
    }

    return (
        
        <Container>
        <br />
            <Row>
                <Col></Col>
                

                <Col>
                <Alert variant='primary'>
                    <Form >
                        <Form.Text className="text-muted" >
                            Welcome Sensei!
                        </Form.Text>
                        <br />
                        <Form.Group controlId="formBasicEmail"  variant="primary">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}
                              onChange={e => setEmail(e.target.value)}/>
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                              onChange={e => setPassword(e.target.value)}/>
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
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Login
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

export default LoginSensei
