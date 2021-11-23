import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img9 from '../../Assets/img/9.jpg'
function Card6() {
    return (
        <>
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img9} />
  <Card.Body>
    <Card.Title>Asphalt Paver</Card.Title>
    <Card.Text>
    Machines used to lay asphalt are called asphalt pavers. Asphalt is loaded into the paver by a dump truck, and then distributed onto the desired area before being semi-packed down — then they are completely flattened by a roller. The paver is typically towed by a dump truck holding asphalt.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $70,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card6