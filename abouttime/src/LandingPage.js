import React, { Component } from 'react';
import {Container,NavDropdown,Navbar,Nav,Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

class LandingPage extends Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <Container fluid>
          <Row >
            <div>
              <Navbar bg="light" expand="lg" style={{backgroundColor: '#FAC102', borderBottom: '15px solid #F1BE48'}}>
                <Navbar.Brand href="#home">#AboutTime</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Row>
          <Row>
            <div>
              
            </div>
          </Row>
          <Row>
            <div>

            </div>
          </Row>
          <Row>
            <div>

            </div>
          </Row>
          <Row>
            <div>

            </div>
          </Row>
        </Container>
      </div>
    );
  }

}

export default LandingPage;


