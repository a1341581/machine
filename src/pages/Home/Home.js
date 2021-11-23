import React from 'react'
import { Col, Container, Placeholder, Row } from 'react-bootstrap'
import { Card1 } from '../../components/Cards'
import Card2 from '../../components/Cards/Card2'
import Card3 from '../../components/Cards/Card3'
import Card4 from '../../components/Cards/Card4'
import Card5 from '../../components/Cards/Card5'
import Card6 from '../../components/Cards/Card6'
import { Navbar1 } from '../../components/Navbar'
import { Slides1 } from '../../components/Slides'



function Home() {
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
        <Slides1/> <Placeholder/>
        </Col>
      </Row>
      
      <br/>
     <Row>
        <Col>
        <Card1/>
        </Col>
        <Col>
        <Card2/>
        </Col>
        <Col>
        <Card3/>
        </Col>
        <Col>
        <Card4/>
        </Col>
        <Col>
        <Card5/>
        </Col>
        <Col>
        <Card6/>
        </Col>
      </Row>
         <br/>
         <Row>
        <Col>
        
        </Col>
      </Row>
      
      

      </Container>
    </>
  )
}

export default Home



      