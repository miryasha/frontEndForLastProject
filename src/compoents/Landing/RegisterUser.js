import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState , useEffect } from 'react';
import axios from "axios";




const RegisterUser = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    function handleSubmit(e){
         e.preventDefault();

        
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
                       
          }
          console.log(data)
          
          axios.post('http://localhost:8080/???', data).then(res => {
           setData(res.data);
           setFirstName('');
           setLastName('');
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
             <Col>RegisterUser</Col>
                

                <Col>
                     <Alert variant='primary'>
                        <Form>
                             <Form.Text className="text-muted" >
                                Please register
                            </Form.Text>
                            <br />
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"  value={firstName}
                                      onChange={e => setFirstName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" value={lastName}
                                      onChange={e => setLastName(e.target.value)}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email"  value={email}
                              onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                              onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>

                            <br />
                            <Button variant="primary" type="submit"  onClick={handleSubmit}>
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

export default RegisterUser
