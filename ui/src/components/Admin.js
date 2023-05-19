import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Admin() {
  const navigate=useNavigate();
  const [rname,setRname]=useState();
  const [imgdata,setImgdata]=useState();
  const [address,setAddress]=useState();
  const [delimg,setDelimg]=useState("https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp");
  const [somedata,setSomedata]=useState();
  const [price,setPrice]=useState();
  const [rating,setRating]=useState();
  const [arrimg,setArrimg]=useState("https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp");

  const handlelogout=async()=>{
    const result=await(await fetch("http://localhost:8000/rest/logout",{
      method:"POST",
     
    })).json()
    
    console.log(result);
 
     }

const handleSubmit=(e)=>{
e.preventDefault();
console.log(rname,imgdata,address,delimg,somedata,price,rating,arrimg);
let values={rname:rname,imgdata:imgdata,address:address,delimg:delimg,somedata:somedata,price:price,rating:rating,arrimg:arrimg}
console.log(values);

fetch("http://localhost:8000/rest/postrest",{
  method:"POST",
  body:JSON.stringify(values),
  headers:{
    "content-Type":"application/json"
  }
})
.then(res=>res.text())
.then(res=>alert(res));
navigate("/admin1")


}

  return (
    
    <>

       <Navbar bg="light" variant="light" sticky='top' style={{maxWidth:"2000px",height:"80px",backgroundColor:"aliceblue"}}>
      
          <Navbar.Brand href="#home"  >
            <img
              alt=""
              src={require("./tomato2.png")}
              width="40%"
              height="40%"
              className="d-inline-block align-top"
            
             onClick={()=>navigate("/")}
            />{' '}
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{marginRight:"20px"}}>
          
          <Nav.Link href="/admin1" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}}>Admin1</Nav.Link>
            <Nav.Link href="#home"><i className="fa fa-shopping-cart" aria-hidden="true" style={{color:"red",fontSize:"20px"}}></i></Nav.Link>
            <Nav.Link href="#link" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}}>Login</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

<div className='container'>

    <Box
      component="form"
      sx={{
        // m: "auto", width: '45ch',p:"15px" ,
        '& > :not(style)': { display:"flex",justifyContent:"center",marginBottom:"30px",color:"red"},
        
      }}
      onSubmit={handleSubmit}
      noValidate
      // autoComplete="off"
    >
     <h4>FILL RESTAURANT DETAILS</h4>
      <TextField id="filled-basic" name="rname" label="RESTAURANT NAME" onChange={(e)=>setRname(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="imgdata" label="IMAGE ADDRESS" onChange={(e)=>setImgdata(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="address" label="TAG" variant="filled" onChange={(e)=>setAddress(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="delimg" label="DELIMG" onChange={(e)=>setDelimg(e.target.value)} value="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" variant="filled" InputLabelProps={{style: { color: 'red' }}} disabled/>
      <TextField id="filled-basic" name="somedata" label="ORDERS PLACED TEXT" onChange={(e)=>setSomedata(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name='price' label="PRICE" variant="filled" onChange={(e)=>setPrice(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="rating" label="RATING" variant="filled" onChange={(e)=>setRating(e.target.value)} InputLabelProps={{style: { color: 'red' }}}/>
      <TextField id="filled-basic" name="arrimg" value="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp" onChange={(e)=>setArrimg(e.target.value)} label="ARRIMG" variant="filled" InputLabelProps={{style: { color: 'red' }}} disabled />
      <Button variant="outlined" type='submit' style={{margin:"auto"}}>Submit</Button>
    </Box>
    </div>
    </>
  )
}

export default Admin;

