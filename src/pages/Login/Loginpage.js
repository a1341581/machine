import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
import { Navbar1 } from '../../components/Navbar'


function Loginpage() {
  return (
    <>
       <Container>
         <Row>
         <Col>
         <Navbar1/>
         </Col>   
         </Row> 

<br/>

<Row>

        <Col>
         
        </Col>
         <h1 className="shadow-sm text-Dark mt-3 p-3 text-center">Admin Login</h1>
          
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="btn btn-outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col> 
         </Row> 
           


        </Container>  
    </>
  )
}

export default Loginpage
