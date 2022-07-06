import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import groupBy from 'lodash/groupBy';

import './style.css';

const groupByType = groupBy(
  [
    { type: 'services', name: 'service 1', id: 1 },
    { type: 'services', name: 'service 1', id: 2 },
    { type: 'products', name: 'product 1', id: 3 },
    { type: 'products', name: 'product 1', id: 5 },
    { type: 'contact', name: 'Contact Us', id: 4 },
  ],
  'type'
);

const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Object.entries(groupByType).map(([key, values]) =>
                values.length > 1 ? (
                  <NavDropdown title={key} id="basic-nav-dropdown">
                    {values.map(({ name, id }) => (
                      <NavDropdown.Item key={id}>{name}</NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link href={key}>{values[0].name}</Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container></Container>
    </>
  );
};

export default App;
