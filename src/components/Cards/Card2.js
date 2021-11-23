import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img5 from '../../Assets/img/5.jpg'
function Card2() {
    return (
        <>
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img5} />
  <Card.Body>
    <Card.Title>Wheel Tractor-Scraper</Card.Title>
    <Card.Text>
    Wheel tractor-scrapers are also used in earthmoving operations. This piece of heavy equipment consists of a rear hopper which can move vertically, with a sharp edge for flattening a surface. The front end hosts a sharp edge to cut soil and a carpenter’s plane for cutting wood. The two tools work together to fill the hopper and transport whatever material was removed from a cleared area.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $30,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card2