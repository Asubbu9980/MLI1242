import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './Cards';
import Navbar1 from './Navbar1';
import Footer from './Footer';

function Home() {

    const [food,setFood]=useState();

    

    useEffect(()=>{
        fetch("http://localhost:8000/rest")
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
        
  return (
    <>

      {/* <Navbar bg="light" variant="light" style={{maxWidth:"2000px",height:"80px",backgroundColor:"aliceblue"}}>
        
          <Navbar.Brand href="#home"  >
            <img
              alt=""
              src={require("./tomato.png")}
              width="40%"
              height="40%"
              className="d-inline-block align-top"
             style={{paddingLeft:"0px"}}
            />{' '}
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">cart</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
       
      </Navbar> */}
<Navbar1 />
      <section className="items mt-5 container">
    <h2 style={{marginBottom:40}}>Restaurants in Hyderabad open now</h2>
    <div className="row mt-2 d-flex justify-content-around align-items-center ">

    {/* <div className="card-container"> */}
        {food&&food.map(card => {
          
       
          return  <Cards key={card.id} food={card} />
})}
      </div>
     

    </section>
    <Footer />
    </>
  )
}

export default Home