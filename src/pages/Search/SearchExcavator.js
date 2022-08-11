import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card1 } from '../../components/Cards'
import { Navbar1 } from '../../components/Navbar'




function SearchExcavator() {
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
        <Card1/>
        </Col>
      </Row>
      <br/>
      

      </Container>
    </>
  )
}

export default SearchExcavator



      