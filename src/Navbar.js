import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function NavigationBar() {
  return (
    <Navbar bg="light"  expand="lg">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Product" id="basic-nav-dropdown" >
          <div>
      
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Item 1</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Content for item 1</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Item 2</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Content for item 2</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default NavigationBar;
