import React from 'react'
import{Carousel} from 'react-bootstrap'
import img2 from '../../Assets/img/2.jpg'
import img3 from '../../Assets/img/3.jpg'
import img4 from '../../Assets/img/4.jpg'



function Slides1() {
    return (
        <>


         <Carousel>
       
          
  <Carousel.Item>
    <img src={img2} className='img-fluid' height="400px" width="800px" alt="Machine"  /> 
    <div class="container-fluid"></div>
    {/* <Carousel.Caption>
    
      <h2>Telehandler</h2>
      <h3> Price - $18,000</h3>
      <Button variant="primary">For Rent</Button>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img src={img3} className='img-fluid' height="400px" width="800px" alt="Machine"/>
    <div class="container-fluid"></div>
    {/* <Carousel.Caption>

      <h2>Bulldozer</h2>
      <h3> Price - $20,000</h3>
      <Button variant="primary">For Rent</Button>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img src={img4} className='img-fluid' height="400px" width="800px" alt="Machine" />
    
   {/* { <Carousel.Caption>

      <h2>Backhoe Loader</h2>
      <h3> Price - $25,000</h3>
      <Button variant="primary">For Rent</Button>
    </Carousel.Caption> } */}
  </Carousel.Item>
   
</Carousel> 



   
        </>
    )
}

export default Slides1
