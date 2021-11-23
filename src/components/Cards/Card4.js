import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img7 from '../../Assets/img/7.jpg'
function Card4() {
    return (
        <>
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img7} />
  <Card.Body>
    <Card.Title>Articulated Hauler</Card.Title>
    <Card.Text>
    As with any articulated truck, an articulated hauler has a pivot joint in its build, giving it increased mobility. Because of this joint, it can carry massive loads around tight turns, making it ideal for most structural builds. This dump truck has a control hub where the driver sits and a material pail where loads go to be transported. Almost all articulated haulers are four-wheel drive, giving them access to most sites regardless of condition.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $50,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card4