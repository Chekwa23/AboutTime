import React, { Component } from 'react';
import {Container, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { MDBBtn } from "mdbreact";
import locationLogo from './images/locationLogo.png';
import appLogo from './images/appLogo.png';
import roadLogo from './images/roadLogo.png';
import barLogo from './images/barLogo.png';


class LandingPage extends Component{
  constructor(){
    super();

  }

  render(){
    return(
        <div>
            {/* Top Navbar */}
            <div>
                <Row>
                    <Col xs={3} md={5}>
                        <Image className="mb-1 mr-3" src={appLogo} heigth="25px" width="25px" alt="logo"/>#AboutTime
                    </Col>
                    <Col xs={3} md={5}>
                        <Nav.Link style={linkText} href="#home">How it works</Nav.Link>
                        <Nav.Link style={linkText} href="#link">Food</Nav.Link>
                        <Nav.Link style={linkText} href="#link">Drinks</Nav.Link>
                        <Nav.Link style={linkText} href="#link">Tracking</Nav.Link>
                    </Col>
                    <Col xs={3} md={5}>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }

}

const roundBtn = {
  backgroundColor: "#FB1242",
  border: "none",
  color: "white",
  width: "100px",
  height: "35px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Gilroy",
  cursor: "pointer",
  borderRadius: "20px"
}

const roundBtn2 = {
  backgroundColor: "#FB1242",
  border: "none",
  color: "white",
  width: "170px",
  height: "35px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Gilroy",
  cursor: "pointer",
  borderRadius: "20px"
}

const linkText = {
  color: '#4F4F4F',
  fontWeight: '600',
  fontSize: '12px'
}

export default LandingPage;