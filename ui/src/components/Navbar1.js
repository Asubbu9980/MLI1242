import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

function Navbar1(props) {

  const navigate=useNavigate();

  return (
    <>
    <Navbar bg="light" variant="light" sticky='top' style={{maxWidth:"2000px",height:"80px",backgroundColor:"aliceblue"}}>
        {/* <Container> */}
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
          {props.name&&<Navbar.Text style={{color:"red",textAlign:"center",fontSize:"1.7vw",fontWeight:"bold",margin:"auto",marginLeft:"170px"}}>Welcome To {props.name}</Navbar.Text>}
          <Nav className="ms-auto" style={{marginRight:"30px"}}>
          {/* <Nav.Link href="/admin" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}} data-bs-toggle="tooltip" title="click here to add restaurants">Admin</Nav.Link>
          <Nav.Link href="/admin1" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}} data-bs-toggle="tooltip" title="click here to add Menu items">Admin1</Nav.Link> */}
           
           <NavDropdown title="Admin" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="/admin" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin1" style={{color:"red",fontWeight:"bold"}} data-bs-toggle="tooltip" title="click here to add Menu items">
               Menu
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link href="/cart1"><i className="fa fa-shopping-cart" aria-hidden="true" style={{color:"red",fontSize:"20px",marginLeft:"20px"}}></i></Nav.Link>
            <Nav.Link href="#link" style={{color:"red",fontWeight:"bold",marginLeft:"20px",fontSize:"20px"}}>Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default Navbar1;