import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='Home'>Navbar</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='Home'>Home</Nav.Link>
        <Nav.Link href='MyLog'>My Log</Nav.Link>
        <Nav.Link href='CommunityLog'>Community Log</Nav.Link>
      </Nav>
    </Navbar>
  )
}

  export default NavigationBar;