import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

function Navbar1(props) {

  const navigate=useNavigate();

  return (
    <>
    {/* <Navbar bg="light" variant="light" sticky='top' style={{maxWidth:"2000px",height:"80px",backgroundColor:"aliceblue"}} expand="lg"> */}
    {/* <Navbar bg="light" variant="light" sticky='top' style={{height:"20%",backgroundColor:"aliceblue"}} expand="lg">
        
          <Navbar.Brand href="#home"  >
            <img
              alt=""
              src={require("./tomato.png")}
              width="40%"
              height="40%"
              className="d-inline-block align-top"
            style={{marginLeft:"30px"}}
             onClick={()=>navigate("/")}
            />{' '}
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {props.name&&<Navbar.Text style={{color:"red",textAlign:"center",fontSize:"1.7vw",fontWeight:"bold",margin:"auto",marginLeft:"17%"}}>Welcome To {props.name}</Navbar.Text>}
          <Nav className="ms-auto" style={{marginRight:"2%"}}>
          {/* <Nav.Link href="/admin" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}} data-bs-toggle="tooltip" title="click here to add restaurants">Admin</Nav.Link>
          <Nav.Link href="/admin1" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}} data-bs-toggle="tooltip" title="click here to add Menu items">Admin1</Nav.Link> */}
           
           {/* <NavDropdown title="Admin" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="/admin" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin1" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add Menu items">
               Menu
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/cart1"><i className="fa fa-shopping-cart" aria-hidden="true" style={{color:"red",fontSize:"20px",marginLeft:"2%"}}></i></Nav.Link>
            <Nav.Link href="#link" style={{color:"red",fontWeight:"bold",marginLeft:"2%",fontSize:"20px"}}>Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>  */}



<Navbar collapseOnSelect expand="lg" bg="light" variant="danger" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src={require("./tomato2.png")}
              width="120px"
              height="45px"
              
          style={{backgroundColor:"red"}}
             onClick={()=>navigate("/")}
            />  

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {props.name&&<Navbar.Text style={{color:"red",textAlign:"center",fontSize:"1.7vw",fontWeight:"bold",margin:"auto",marginLeft:"25%"}}>Welcome To {props.name}</Navbar.Text>}
          <Nav className="ms-auto">
          <NavDropdown title="Admin" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="/admin" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin1" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add Menu items">
               Menu
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/cart1"><i className="fa fa-shopping-cart" aria-hidden="true" style={{color:"red",fontSize:"20px",marginLeft:"2%"}}></i></Nav.Link>
            <Nav.Link href="#link" style={{color:"red",fontWeight:"bold",marginLeft:"2%",fontSize:"20px"}}>Login</Nav.Link>
          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbar1;