import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img1 from '../../Assets/img/1.jpg'
function Card1() {
    return (
        <>

          
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img1} />
  <Card.Body>
    <Card.Title>Excavator</Card.Title>
    <Card.Text>
    An excavator is a heavy piece of machinery used to dig and crush material on a site. It consists of a hydraulic crane-like boom with a metal shovel that has sharp prongs on the end. The driver’s cab is set on a rotating platform, making the machine more maneuverable. The machine is mobile due to an undercarriage consisting of heavy-duty tracks. Although sometimes called a “power shovel,” an excavator and a power shovel have their differences.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $20,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card1
