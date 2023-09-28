import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import 'cdbreact';

function NavbarComp() {
    return (
        <Navbar expand="lg" className="navbar-custom" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/sort">AlgoWiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <Nav.Link href="/sort">Merge</Nav.Link>
                        <Nav.Link href="/sort/quick">Quick</Nav.Link>
                        <Nav.Link href="/sort/bubble">Bubble</Nav.Link>
                        <Nav.Link href="/sort/insert">Insertion</Nav.Link>
                        <Nav.Link href="/sort/select">Selection</Nav.Link>
                        <Nav.Link href="/graphs">Graphs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
