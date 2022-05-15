import React from 'react'
// import { Nav,Navbar, Container,Link} from 'react-bootstrap';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav,Container,InputGroup } from 'react-bootstrap'
import './MainNav.css'
 function MainNav() {
  return (
   
    <Container>
      
  <Navbar fixed="top"ss expand="xxl" variant="light" bg="light">
 <div className='secondNavbar'>
    <ul className='list'>
   <li><a href="">SAVE MORE ON APP</a></li>
   <li><a href="">SELL ON DARAZ</a></li>
   <li><a href="">CUSTOMER CARE</a></li>
   <li><a href="">TRACK MY ORDER</a></li>
   <li><a href="">SIGNUP/LOGIN</a></li>
   <li><a href="">DARAZ AFFLICATE PROGRAM</a></li>
   </ul>
   </div>
    <Container>
      <Navbar.Brand href="">DARAZ</Navbar.Brand>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2"></InputGroup.Text>
  </InputGroup>
    </Container>
    
  </Navbar>
  
</Container>

  )
}
export default MainNav