import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img8 from '../../Assets/img/8.jpg'
function Card5() {
    return (
        <>
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img8} />
  <Card.Body>
    <Card.Title>Drum Roller</Card.Title>
    <Card.Text>
    In order to press asphalt, soil and other loose materials, drum rollers are used. This machine is typically found at road construction sites. There are two types of drum rollers: smooth rollers and padfoot rollers.

Smooth rollers provide static pressure and use vibration to compact loose materials. Padfoot rollers, also known as Sheepsfoot rollers, also provide static pressure and vibration; however, they also generate manipulative force, allowing for uniform compaction.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $60,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card5