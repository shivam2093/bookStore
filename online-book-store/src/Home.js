import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="img-fluid"
                        src="img/4.jpg"
                        
                        width="40%"
                        height="40%"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="img-fluid"
      src="img/6.jpg"
                        alt="Second slide"
                        width="40%"
                        height="20%"
                        
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid"
      src="img/7.jpg"
                        alt="Third slide"
                        width="40%"
                        height="20%"
    />

  </Carousel.Item>
            </Carousel>
           
              
                 <div className="food">
                    <h1 id="food"> Book type &nbsp; </h1> <h1 id="word"> </h1>
          <p style={{float:'right', fontSize:20, fontFamily:'bold', marginRight:10}}>Next Page </p>        
          <Link to='/MainPage'>
          <button size="5em" style={{ float: 'right', marginRight: 10 }} > <ArrowForwardIosIcon /> </button>
          </Link>
        </div>
        
    
        </div>
    )
}

export default Home
