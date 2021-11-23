import React from 'react'
import {Card,Button} from 'react-bootstrap'
import img6 from '../../Assets/img/6.jpg'
function Card3() {
    return (
        <>
            <Card style={{ width: '25rem' }}>
  <Card.Img variant="bottom" src={img6} />
  <Card.Body>
    <Card.Title>Harvester</Card.Title>
    <Card.Text>
    The harvester, or combine, is used to gather grain and other similar crops. This machine combines reaping, threshing and winnowing into one process, making it efficient for agriculture projects. It helps separate straw from the crop itself, minimizing manual work for a farmer. A massive vortex roller sucks in the crop, and discards stems through a chute.
    </Card.Text>
    <Button variant="primary">For Rent</Button>
    <h3> Price - $40,000</h3>
  </Card.Body>
</Card>
        </>
    )
}
export default Card3