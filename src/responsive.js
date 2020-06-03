import React, { Component } from 'react';
import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { MDBBtn } from "mdbreact";
import locationLogo from './images/locationLogo.svg';
import appLogo from './images/appLogo.svg';
import roadLogo from './images/roadLogo.svg';
import barLogo from './images/barLogo.svg';
import playstoreIcon from './images/playstoreIcon.svg';
import appstoreIcon from './images/appstoreIcon.svg';
import yellowdotsIcon from './images/yellowdotsIcon.svg';
import iphoneIcon from './images/iphoneIcon.svg';
import restaurantIcon from './images/restaurantIcon.svg';
import redlineIcon from './images/redlineIcon.svg';


class LandingPage extends Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div style={{backgroundColor: '#FFFFFF'}}>
        <Container className="" style={{backgroundColor: '#FAC102', width:'100%'}} fluid>
          {/* <Image className="" style={{position:'absolute', left:'20%', top:'10%', zIndex:'5'}} src={redlineIcon} height="2px" width="50px" alt="logo"/> */}
          <Navbar expand="lg" style={{backgroundColor: '#FAC102'}}>
            <div style={{backgroundColor:'', height:''}}>
              <Navbar.Brand style={{color:'#FB1242', fontFamily:'Gilroy', fontWeight:'bold'}} href="#home">
                <Image className="mb-1 mr-3" src={appLogo} height="25px" width="25px" alt="logo"/>#AboutTime
              </Navbar.Brand>
            </div>

            <Nav.Link style={linkText} href="#home">How it works</Nav.Link>
            <Nav.Link style={linkText} href="#link">Food</Nav.Link>
            <Nav.Link style={linkText} href="#link">Drinks</Nav.Link>
            <Nav.Link style={linkText} href="#link">Tracking</Nav.Link>
            <Nav.Link style={{color:'#FB1242', fontWeight:'600'}} href="#deets">Sign In</Nav.Link>
            <Nav.Link href="#memes"><Button style={roundBtn} variant="danger">Sign up</Button></Nav.Link>

          </Navbar>
        </Container>
        {/* Jumbotron */}
        <Container style={{backgroundColor:"#FAC102", paddingBottom:'120px'}} fluid>
          <Row >
            <Col className='pl-5' xs={5} md={5} lg ={5} style={row1}>
              <div className="">
                <h6 className="" style={{fontWeight:'600', fontFamily:'Gilroy'}}><Image className="mb-1 mr-2" src={locationLogo} height="12px" width="12px" alt="logo"/>Everywhere</h6>
                <h1 className="mt-3" style={{fontWeight:'bold', fontFamily:'Gilroy'}}>Best Organic food, delivery food</h1>
                <h6 className="mt-3" style={{fontWeight:'500', fontFamily:'Gilroy'}}>Time-definite and day definite delivery based on your location.</h6>

                <Form className="mt-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control size="lg" type="text" placeholder="Enter your city"/>
                  </Form.Group>
                  <Button style={roundBtn2} variant="danger">Find Restaurants</Button>
                </Form>
              </div>
            </Col>
            <Col xs={3} md={6} lg ={6} style={row1}>
              <div>
                <Image src={roadLogo} height="413px" width="319px" alt="logo"/>
              </div>
            </Col>
            <Col xs={4} md={1} lg ={1} style={row1}>
              <div>
                <Image className="mt-5" src={barLogo} height="224px" width="41px" alt="logo"/>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Fast delivery download app */}
        <Container style={{marginTop:'100px'}} fluid>
          <Row style={{height:'300px', backgroundColor:"#f7e8b2"}}>
            <Col xs={4} md={4} lg ={4} style={{ height:'300px', width:'350%'}}>
              <Image style={{position:'absolute', top:'10%', left:'30%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
              <Image style={{position:'absolute', top:'15%', left:'50%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} height="2400px" width="110px" alt="logo"/>
            </Col>
            <Col xs={8} md={8} lg ={8} style={row2}>
              <div style={{marginTop:'70px'}}>
                <h2>Fast Delivery everywhere</h2>
                <p>Lorem ipsum dolor sit amet, conse0ctetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
                <div>
                  <Button className='mr-4' style={roundBtn3} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} height="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
                  <Button style={roundBtn3} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} height="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Restaurants */}
        <Container style={{marginTop:'100px', fontFamily:'gilroy'}} fluid>
          <div className="text-center">
            <h2 style={{fontWeight:'bold'}}>Our Resturants</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
          </div>
          <Container>
            <Row style={{height:'300px'}}>
              <Image className="ml-4 mr-3" src={restaurantIcon} height="240px" width="30%" alt="logo"/>
              <Image className="mr-3" src={restaurantIcon} height="240px" width="30%" alt="logo"/>
              <Image className="mr-3" src={restaurantIcon} height="240px" width="30%" alt="logo"/>
            </Row>
          </Container>
        </Container>
        {/* Get the app */}
        <Container style={{marginTop:'100px', fontFamily:'gilroy'}} fluid>
          <Row style={{height:'300px', backgroundColor:"#f7e8b2"}}>
            <Col xs={7} md={8} lg ={7} style={{ height:'300px', width:'350%'}}>
              <div style={{position:'absolute', marginTop:'15%', marginLeft:'15%'}}>
                <h2 style={{fontWeight:'bold'}}>Get the app and start ordering.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
                <div>
                  <Button className='mr-4' style={roundBtn3} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} height="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
                  <Button style={roundBtn3} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} height="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
                </div>
              </div>
            </Col>
            <Col xs={5} md={4} lg ={5}>
              <Image style={{position:'absolute', top:'10%', left:'60%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
              <Image style={{position:'absolute', top:'60%', left:'12%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
              <Image style={{position:'absolute', top:'10%', left:'30%', right:'', bottom:'', zIndex:'3'}} src={iphoneIcon} height="240px" width="110px" alt="logo"/>
              <Image style={{position:'absolute', top:'15%', left:'50%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} height="210px" width="95px" alt="logo"/>
              <Image style={{position:'absolute', top:'15%', left:'15%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} height="210px" width="95px" alt="logo"/>
            </Col>
          </Row>
        </Container>
        <Container style={{backgroundColor: '#FFFFFF', fontFamily:'gilroy'}} fluid>
          <Row style={{marginTop:'15%'}}>
            <Col xs={5} md={5} lg={6}>
              <div style={{position:'absolute', marginLeft:'10%'}}>
                <h4 style={{fontWeight:'bold', color:'#FB1242'}}><Image className="mb-1 mr-3" src={appLogo} height="35px" width="35px" alt="logo"/>#AboutTime</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
              </div>
            </Col>
            <Col xs={3} md={3} lg ={3}>
              <ul style={{listStyle:'none'}}>
                <li style={{fontWeight:'600'}}>Our Restaurants</li>
                <li>Chicken Republic</li>
                <li>Mr Biggs</li>
                <li>KFC Chicken</li>
                <li>Magrellos</li>
                <li>Bernadines</li>
              </ul>
            </Col>
            <Col xs={4} md={4} lg ={3}>
              <ul style={{listStyle:'none'}}>
                <li style={{fontWeight:'600'}}>Get to know our Team</li>
                <li>Akana David</li>
                <li>Charles Cookey</li>
                <li>Ikechukwu Imala</li>
                <li>Dwight Ojukwu</li>
                <li>Lucas Chekwa</li>
                <li>Onyeukwu Samuel</li>
                <li>Eniola Olaiwole</li>
                <li>Yisau Sammad</li>
                <li>Okemati Lanre</li>
              </ul>
            </Col>
          </Row>
        </Container>
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

const row1 = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#FAC102'
}

const row2 = {
  backgroundColor: "#FFFFFF",
  justifyContent: 'center',
  height: '100%'
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

const roundBtn3 = {
  backgroundColor: "#FB1242",
  border: "none",
  color: "white",
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