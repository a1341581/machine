import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar1 } from '../../components/Navbar'

function Contact() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Navbar1/>
                    </Col>
                </Row>


                   <Row>
                   <Col>
                   <div className="my-5">
                            <h1 className="text-center">Contact Us</h1>
                        </div>
                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                FullName
                                            </label>
                                            <input type="text"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter Your Name">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                Phone
                                            </label>
                                            <input type="number"
                                                class="form-control"
                                                id=""
                                                placeholder="Mobile Number">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">
                                                Email address
                                            </label>
                                            <input type="email"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="name@example.com">
                                            </input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">
                                                Message
                                            </label>
                                            <textarea class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="3">
                                            </textarea>

                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   
                   </Col>

                   </Row>
                 


                
            </Container>
        </>
    )
}

export default Contact
