import React from 'react'
import {Navbar,Nav,Container,Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar.css';
import {Dropdown} from 'react-bootstrap'
import SearchBar from './SearchBar';
import machineData from './Data.json';

function Navbar1() {
    return (
        <>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            
  <Container className="general">
    <Navbar.Brand href="#machine for rent">MACHINE FOR RENT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={""}>HOME</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>CONTACT</Nav.Link>
        <Nav.Link as={Link} to={"/login"}>LOGIN</Nav.Link>
       
      </Nav>
      <Form className="App">
    <SearchBar placeholder="Search..." data={machineData}/>
    {/* <Button variant="secondary" id="button-addon2">
      Search
    </Button> */}
      </Form>    
     <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Category
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="http://localhost:3000/searchexcavator">Excavator</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/SearchWheelTractorScraper">Wheel Tractor-Scraper</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/searchharvester">Harvester</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/SearchArticulatedHauler">Articulated Hauler</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/SearchDrumRoller">Drum Roller</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/SearchAsphaltPaver">Asphalt Paver</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> 
    </Navbar.Collapse>
  </Container>
</Navbar>

      
        </>
    )
}

export default Navbar1
