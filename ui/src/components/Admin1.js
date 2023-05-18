import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Admin1() {

    const [name,setName]=useState();
    const [imgsrc,setimagesrc]=useState();
    const [rating,setRating]=useState();
    const [cost,setCost]=useState();
    const [symbol,setSymbol]=useState();
    const [desc,setDesc]=useState();
    const [menu,setMenu]=useState();
const navigate=useNavigate();

 


         const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(name,imgsrc,rating,cost,symbol,desc,menu);
            let values={name:name,imgsrc:imgsrc,rating:rating,cost:cost,symbol:symbol,desc:desc}
            console.log(values);
            
            if(menu=="starters"){
            fetch("http://localhost:8000/rest/postmenu",{
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


        if(menu=="maincourse"){
            fetch("http://localhost:8000/rest/maincourse1",{
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

        if(menu=="desserts"){
            fetch("http://localhost:8000/rest/desserts1",{
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


        if(menu=="beverages"){
            fetch("http://localhost:8000/rest/beverages1",{
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
            
            }




  return (
   <>
    <Navbar bg="light" variant="light" sticky='top' style={{maxWidth:"2000px",height:"80px",backgroundColor:"aliceblue"}}>
      
      <Navbar.Brand href="#home"  >
        <img
          alt=""
          src={require("./tomato.png")}
          width="40%"
          height="40%"
          className="d-inline-block align-top"
        
         onClick={()=>navigate("/")}
        />{' '}
     
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" style={{marginRight:"20px"}}>
      
      <Nav.Link href="/admin" style={{color:"red",fontWeight:"bold",marginLeft:"20px"}}>Admin</Nav.Link>
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
<h4 style={{marginTop:"20px",marginLeft:"-20px"}}>FILL MENU DETAILS</h4>

<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"red"}}>Type of menu</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={menu}
        onChange={(e)=>setMenu(e.target.value)}
      >
        <FormControlLabel value="starters" control={<Radio />} label="Starters" />
        <FormControlLabel value="maincourse" control={<Radio />} label="Maincourse" />
        <FormControlLabel value="desserts" control={<Radio />} label="Desserts" />
        <FormControlLabel value="beverages" control={<Radio />} label="Beverages" />
       
      </RadioGroup>
    </FormControl>


<TextField id="filled-basic" name="name" label="NAME" onChange={(e)=>setName(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />
<TextField id="filled-basic" name="imgsrc" label="IMAGE ADDRESS" onChange={(e)=>setimagesrc(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />

{/* <TextField id="filled-basic" name="rating" label="RATING" variant="filled" onChange={(e)=>setRating(e.target.value)} InputLabelProps={{style: { color: 'red' }}}/> */}
<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"red"}}>RATING</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
      >
        <FormControlLabel value="⭐" control={<Radio />} label="⭐" />
        <FormControlLabel value="⭐⭐" control={<Radio />} label="⭐⭐" />
        <FormControlLabel value="⭐⭐⭐" control={<Radio />} label="⭐⭐⭐" />
        <FormControlLabel value="⭐⭐⭐⭐" control={<Radio />} label="⭐⭐⭐⭐" />
        <FormControlLabel value="⭐⭐⭐⭐⭐" control={<Radio />} label="⭐⭐⭐⭐⭐" />
      </RadioGroup>
    </FormControl>

<TextField id="filled-basic" name='cost' label="COST" variant="filled" onChange={(e)=>setCost(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
{/* <TextField id="filled-basic" name="symbol"  onChange={(e)=>setSymbol(e.target.value)} label="symbol" variant="filled" InputLabelProps={{style: { color: 'red' }}}  /> */}

<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"red"}}>SYMBOL</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={symbol}
        onChange={(e)=>setSymbol(e.target.value)}
      >
        <FormControlLabel value="🌱" control={<Radio />} label="🌱" />
        <FormControlLabel value="🍗" control={<Radio />} label="🍗" />
      </RadioGroup>
    </FormControl>

<TextField id="filled-basic" name="desc" label="DESCRIPTION" onChange={(e)=>setDesc(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />

<Button variant="outlined" type='submit' style={{margin:"auto"}}>Submit</Button><br></br>
<Button variant="outlined" style={{margin:"auto"}} onClick={()=>navigate("/")}>Go to home</Button>
</Box>
</div>
</>
  )
}

export default Admin1;
