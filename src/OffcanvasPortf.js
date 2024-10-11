import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'

const MyOffcanvas = () => {

  const [isShow, setisShow] = useState(false)
  
  const onShow = () => setisShow(true)
  const onHide = () => setisShow(false)
  return (
    <div>
      <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
        <Container>
          <Navbar.Brand>
            <FaBars onClick={() => onShow()} size={22} />Foods<MdFastfood/>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Offcanvas show={isShow} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Nav className='flex-column'>
            <Nav.Link onClick={() => onHide()}>
              <Link className='mlink' to={'/'}> Home </Link>
            </Nav.Link>
            <Nav.Link onClick={() => onHide()}>
              <Link className='mlink' to={'/services'}> Services </Link>
            </Nav.Link>
            <Nav.Link onClick={() => onHide()}>
                <Link className='mlink' to={'/skills'}> Skills </Link>
            </Nav.Link>
            <Nav.Link onClick={() => onHide()}>
              <Link className='mlink' to={'/portfolio'}> Portfolio </Link>
            </Nav.Link>
            <Nav.Link onClick={() => onHide()}>
              <Link className='mlink' to={'/resume'}> Resume </Link>
            </Nav.Link>
            <Nav.Link onClick={() => onHide()}>
              <Link className='mlink' to={'/contact'}> Contact </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default MyOffcanvas
