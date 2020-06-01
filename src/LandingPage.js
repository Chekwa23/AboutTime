// import React, { Component } from 'react';
// import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "@fortawesome/fontawesome-free/css/all.min.css";
// // import "bootstrap-css-only/css/bootstrap.min.css";
// // import "mdbreact/dist/css/mdb.css";
// // import { MDBBtn } from "mdbreact";
// import locationLogo from './images/locationLogo.svg';
// import appLogo from './images/appLogo.svg';
// import roadLogo from './images/roadLogo.svg';
// import barLogo from './images/barLogo.svg';
// import playstoreIcon from './images/playstoreIcon.svg';
// import appstoreIcon from './images/appstoreIcon.svg';
// import yellowdotsIcon from './images/yellowdotsIcon.svg';
// import iphoneIcon from './images/iphoneIcon.svg';
// import restaurantIcon from './images/restaurantIcon.svg';
// import redlineIcon from './images/redlineIcon.svg';


// class LandingPage extends Component{
//   constructor(){
//     super();

//   }

//   render(){
//     return(
//       <div style={{backgroundColor: '#FFFFFF'}}>
//         <Container className="" style={{backgroundColor: '#FAC102', width:'100%'}} fluid>
//           {/* <Image className="" style={{position:'absolute', left:'20%', top:'10%', zIndex:'5'}} src={redlineIcon} heigth="2px" width="50px" alt="logo"/> */}
//           <Navbar expand="lg" style={{backgroundColor: '#FAC102'}}>
//             <div style={{backgroundColor:'', height:''}}>
//               <Navbar.Brand style={{color:'#FB1242', fontFamily:'Gilroy', fontWeight:'bold'}} href="#home">
//                 <Image className="mb-1 mr-3" src={appLogo} heigth="25px" width="25px" alt="logo"/>#AboutTime
//               </Navbar.Brand>
//             </div>

//             <Nav.Link style={linkText} href="#home">How it works</Nav.Link>
//             <Nav.Link style={linkText} href="#link">Food</Nav.Link>
//             <Nav.Link style={linkText} href="#link">Drinks</Nav.Link>
//             <Nav.Link style={linkText} href="#link">Tracking</Nav.Link>
//             <Nav.Link style={{color:'#FB1242', fontWeight:'600'}} href="#deets">Sign In</Nav.Link>
//             <Nav.Link href="#memes"><Button style={roundBtn} variant="danger">Sign up</Button></Nav.Link>

//           </Navbar>
//         </Container>
//         {/* Jumbotron */}
//         <Container style={{backgroundColor:"#FAC102", paddingBottom:'120px'}} fluid>
//           <Row >
//             <Col className='pl-5' xs={5} md={5} lg ={5} style={row1}>
//               <div className="">
//                 <h6 className="" style={{fontWeight:'600', fontFamily:'Gilroy'}}><Image className="mb-1 mr-2" src={locationLogo} heigth="12px" width="12px" alt="logo"/>Everywhere</h6>
//                 <h1 className="mt-3" style={{fontWeight:'bold', fontFamily:'Gilroy'}}>Best Organic food, delivery food</h1>
//                 <h6 className="mt-3" style={{fontWeight:'500', fontFamily:'Gilroy'}}>Time-definite and day definite delivery based on your location.</h6>

//                 <Form className="mt-3">
//                   <Form.Group controlId="formBasicEmail">
//                     <Form.Control size="lg" type="text" placeholder="Enter your city"/>
//                   </Form.Group>
//                   <Button style={roundBtn2} variant="danger">Find Restaurants</Button>
//                 </Form>
//               </div>
//             </Col>
//             <Col xs={3} md={6} lg ={6} style={row1}>
//               <div>
//                 <Image src={roadLogo} heigth="413px" width="319px" alt="logo"/>
//               </div>
//             </Col>
//             <Col xs={4} md={1} lg ={1} style={row1}>
//               <div>
//                 <Image className="mt-5" src={barLogo} heigth="224px" width="41px" alt="logo"/>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         {/* Fast delivery download app */}
//         <Container style={{marginTop:'100px'}} fluid>
//           <Row style={{height:'300px', backgroundColor:"#f7e8b2"}}>
//             <Col xs={4} md={4} lg ={4} style={{ height:'300px', width:'350%'}}>
//               <Image style={{position:'absolute', top:'10%', left:'30%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} heigth="80px" width="94px" alt="logo"/>
//               <Image style={{position:'absolute', top:'15%', left:'50%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} heigth="2400px" width="110px" alt="logo"/>
//             </Col>
//             <Col xs={8} md={8} lg ={8} style={row2}>
//               <div style={{marginTop:'70px'}}>
//                 <h2>Fast Delivery everywhere</h2>
//                 <p>Lorem ipsum dolor sit amet, conse0ctetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
//                 <div>
//                   <Button className='mr-4' style={roundBtn3} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} heigth="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
//                   <Button style={roundBtn3} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} heigth="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         {/* Restaurants */}
//         <Container style={{marginTop:'100px', fontFamily:'gilroy'}} fluid>
//           <div className="text-center">
//             <h2 style={{fontWeight:'bold'}}>Our Resturants</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
//           </div>
//           <Container>
//             <Row style={{height:'300px'}}>
//               <Image className="ml-4 mr-3" src={restaurantIcon} heigth="240px" width="30%" alt="logo"/>
//               <Image className="mr-3" src={restaurantIcon} heigth="240px" width="30%" alt="logo"/>
//               <Image className="mr-3" src={restaurantIcon} heigth="240px" width="30%" alt="logo"/>
//             </Row>
//           </Container>
//         </Container>
//         {/* Get the app */}
//         <Container style={{marginTop:'100px', fontFamily:'gilroy'}} fluid>
//           <Row style={{height:'300px', backgroundColor:"#f7e8b2"}}>
//             <Col xs={7} md={8} lg ={7} style={{ height:'300px', width:'350%'}}>
//               <div style={{position:'absolute', marginTop:'15%', marginLeft:'15%'}}>
//                 <h2 style={{fontWeight:'bold'}}>Get the app and start ordering.</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
//                 <div>
//                   <Button className='mr-4' style={roundBtn3} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} heigth="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
//                   <Button style={roundBtn3} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} heigth="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={5} md={4} lg ={5}>
//               <Image style={{position:'absolute', top:'10%', left:'60%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} heigth="80px" width="94px" alt="logo"/>
//               <Image style={{position:'absolute', top:'60%', left:'12%', right:'', bottom:'', zIndex:'1'}} src={yellowdotsIcon} heigth="80px" width="94px" alt="logo"/>
//               <Image style={{position:'absolute', top:'10%', left:'30%', right:'', bottom:'', zIndex:'3'}} src={iphoneIcon} heigth="240px" width="110px" alt="logo"/>
//               <Image style={{position:'absolute', top:'15%', left:'50%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} heigth="210px" width="95px" alt="logo"/>
//               <Image style={{position:'absolute', top:'15%', left:'15%', right:'', bottom:'', zIndex:'2'}} src={iphoneIcon} heigth="210px" width="95px" alt="logo"/>
//             </Col>
//           </Row>
//         </Container>
//         <Container style={{backgroundColor: '#FFFFFF', fontFamily:'gilroy'}} fluid>
//           <Row style={{marginTop:'15%'}}>
//             <Col xs={5} md={5} lg={6}>
//               <div style={{position:'absolute', marginLeft:'10%'}}>
//                 <h4 style={{fontWeight:'bold', color:'#FB1242'}}><Image className="mb-1 mr-3" src={appLogo} heigth="35px" width="35px" alt="logo"/>#AboutTime</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
//               </div>
//             </Col>
//             <Col xs={3} md={3} lg ={3}>
//               <ul style={{listStyle:'none'}}>
//                 <li style={{fontWeight:'600'}}>Our Restaurants</li>
//                 <li>Chicken Republic</li>
//                 <li>Mr Biggs</li>
//                 <li>KFC Chicken</li>
//                 <li>Magrellos</li>
//                 <li>Bernadines</li>
//               </ul>
//             </Col>
//             <Col xs={4} md={4} lg ={3}>
//               <ul style={{listStyle:'none'}}>
//                 <li style={{fontWeight:'600'}}>Get to know our Team</li>
//                 <li>Akana David</li>
//                 <li>Charles Cookey</li>
//                 <li>Ikechukwu Imala</li>
//                 <li>Dwight Ojukwu</li>
//                 <li>Lucas Chekwa</li>
//                 <li>Onyeukwu Samuel</li>
//                 <li>Eniola Olaiwole</li>
//                 <li>Yisau Sammad</li>
//                 <li>Okemati Lanre</li>
//               </ul>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }

// }

// const roundBtn = {
//   backgroundColor: "#FB1242",
//   border: "none",
//   color: "white",
//   width: "100px",
//   height: "35px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "14px",
//   fontWeight: "600",
//   fontFamily: "Gilroy",
//   cursor: "pointer",
//   borderRadius: "20px"
// }

// const row1 = {
//   display: 'flex', 
//   alignItems: 'center', 
//   justifyContent: 'center', 
//   backgroundColor: '#FAC102'
// }

// const row2 = {
//   backgroundColor: "#FFFFFF",
//   justifyContent: 'center',
//   height: '100%'
// }

// const roundBtn2 = {
//   backgroundColor: "#FB1242",
//   border: "none",
//   color: "white",
//   width: "170px",
//   height: "35px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "14px",
//   fontWeight: "600",
//   fontFamily: "Gilroy",
//   cursor: "pointer",
//   borderRadius: "20px"
// }

// const roundBtn3 = {
//   backgroundColor: "#FB1242",
//   border: "none",
//   color: "white",
//   height: "35px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "14px",
//   fontWeight: "600",
//   fontFamily: "Gilroy",
//   cursor: "pointer",
//   borderRadius: "20px"
// }

// const linkText = {
//   color: '#4F4F4F',
//   fontWeight: '600',
//   fontSize: '12px'
// }



// export default LandingPage;

import React, { Component } from 'react';
import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
// import Link from 'react-router-dom/Link';
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
import polygonLogo from './images/polygonLogo.svg';

class LandingPage extends Component{
  constructor(){
    super();

  }

  render(){
    return(
        <div style={{position:'relative', backgroundColor:'#FFFFFF', width:'1152px', margin:'auto'}}>
          {/* Jumbotron */}
          <Container className="" style={{backgroundColor:'#FAC102', position:'absolute', marginTop:'0px', height:'675px', width:'1152px'}} fluid>
            {/* white rectangle */}
            <div style={{backgroundColor:'#FFFFFF', position:'absolute', left:'0%', top:'0%', height:'81px', width:'229px', color:'#FB1242', fontFamily:'Gilroy', fontWeight:'bold', fontSize:'16px'}}>
              <div style={{marginLeft:'61px', marginTop:'27px'}}>
                <Image className="mb-1 mr-3" src={appLogo} heigth="28px" width="28px" alt="logo"/>#AboutTime
              </div>
            </div>
            <div>
              <Image className="" src={redlineIcon} style={{position:'absolute', marginTop:'40px', marginLeft:'190px'}} heigth="2px" width="90px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'18px', marginLeft:'954px'}}>
              <Button style={signUpBtn} variant="danger">Sign up</Button>
            </div>
            <div style={{position:'absolute', marginTop:'30px', marginLeft:'869px'}}>
              <p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FB1242'}}>Sign In</p>
            </div>
            <div style={{backgroundColor:'', position:'absolute', marginTop:'137px', marginLeft:'120px', height:'356px', width:'416px'}}>
              <p className="" style={{position:'absolute', marginTop:'0px', fontSize:'14px', fontWeight:'600', fontFamily:'Gilroy'}}><Image className="mb-1 mr-2" src={locationLogo} heigth="21px" width="15px" alt="logo"/>Everywhere</p>
              <p className="" style={{position:'absolute', marginTop:'21px', fontSize:'45px', fontWeight:'bold', fontFamily:'Gilroy'}}>Best Organic food, delivery food</p>
              <p className="" style={{position:'absolute', marginTop:'171px', fontSize:'16px', fontWeight:'500', fontFamily:'Gilroy'}}>Time-definite and day definite delivery based on your location.</p>

              <Form className="" style={{position:'absolute', marginTop:'210px'}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control size="lg" type="text" placeholder="Enter your city"/>
                </Form.Group>
                <Button style={roundBtn2} variant="danger">Find Restaurants</Button>
              </Form>
            </div>
            <div style={{position:'absolute', marginTop:'91px', marginLeft:'679px'}}>
              <Image src={roadLogo} heigth="413px" width="319px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'218px', marginLeft:'1061px'}}>
              <Image className="" src={barLogo} heigth="224px" width="41px" alt="logo"/>
            </div>
          </Container>
          <div>
            <Image className="" style={{position:'absolute', marginTop:'654px', marginLeft:'513px'}} src={polygonLogo} heigth="65px" width="127px" alt="logo"/>
          </div>
          {/* Fast delivery download app */}
          <Container style={{ position:'absolute', marginTop:'757px', marginLeft:'0px', height:'347px', width:'1152px'}} fluid>
            <div style={{backgroundColor:"#f7e8b2", position:'absolute', marginLeft:'-15px', height:'347px', width:'407px'}}>
              <Image style={{position:'absolute', marginTop:'26px', marginLeft:'119px', zIndex:'1'}} src={yellowdotsIcon} heigth="80px" width="94px" alt="logo"/>
              <Image style={{position:'absolute', marginTop:'42px', marginLeft:'192px', zIndex:'2'}} src={iphoneIcon} heigth="279px" width="138px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'75px', marginLeft:'457px'}}>
              <p style={{fontFamily:'gilroy', fontWeight:'bold', fontSize:'28px'}}>Fast Delivery everywhere</p>
            </div>
            <div style={{position:'absolute', marginTop:'129px', marginLeft:'457px', width:'466px'}}>
              <p style={{fontFamily:'gilroy', fontWeight:'normal', fontSize:'18px'}}>Lorem ipsum dolor sit amet, conse0ctetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginTop:'228px', marginLeft:'457px'}}>
              <Button style={downloadappBtn} className='mr-3' variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} heigth="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
              <Button style={downloadappBtn} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} heigth="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
            </div>
          </Container>
          {/* Restaurants */}
          <Container style={{position:'absolute', marginTop:'1234px', marginLeft:'119px', height:'428px', width:'894px'}} fluid>
            <div className="text-center" style={{position:'absolute', marginTop:'0px'}}>
              <p style={{fontFamily:'gilroy', fontSize:'28px', fontWeight:'bold'}}>Our Resturants</p>
              <p style={{fontFamily:'gilroy', fontSize:'18px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginTop:'170px', height:'258px'}}>
              <Image src={restaurantIcon} style={{position:'absolute', marginLeft:'0px'}} heigth="258px" width="268px" alt="logo"/>
              <Image src={restaurantIcon} style={{position:'absolute', marginLeft:'313px'}} heigth="258px" width="268px" alt="logo"/>
              <Image src={restaurantIcon} style={{position:'absolute', marginLeft:'626px'}} heigth="258px" width="268px" alt="logo"/>
            </div>
          </Container>
          {/* Get the app */}
          <Container style={{backgroundColor:"#f7e8b2", position:'absolute', marginTop:'1792px', marginLeft:'0px', height:'332px', width:'1152px'}} fluid>
            <div style={{position:'absolute', marginTop:'68px', marginLeft:'139px'}}>
              <p style={{pofontFamily:'gilroy', fontSize:'28px', fontWeight:'bold'}}>Get the app and start ordering.</p>
            </div>
            <div style={{position:'absolute', marginTop:'122px', marginLeft:'139px', height:'81px', width:'466px'}}>
              <p style={{pofontFamily:'gilroy', fontSize:'18px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginTop:'221px', marginLeft:'139px'}}>
              <Button className='mr-4' style={downloadappBtn} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} heigth="12px" width="12px" alt="logo"/>Get on the Appstore</Button>
              <Button style={downloadappBtn} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} heigth="20px" width="19px" alt="logo"/>Get on the Playstore</Button>    
            </div>
            
            <Image style={{position:'absolute', marginTop:'43px', marginLeft:'910px', zIndex:'1'}} src={yellowdotsIcon} heigth="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'208px', marginLeft:'672px', zIndex:'1'}} src={yellowdotsIcon} heigth="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'30px', marginLeft:'763px', zIndex:'3'}} src={iphoneIcon} heigth="270px" width="133px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'52px', marginLeft:'693px', zIndex:'2'}} src={iphoneIcon} heigth="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'52px', marginLeft:'855px', zIndex:'2'}} src={iphoneIcon} heigth="226px" width="112px" alt="logo"/>
          </Container>
          {/* Footer */}
          <Container style={{position:'absolute', marginTop:'2224px', marginLeft:'139px', height:'280px', width:'894px'}} fluid>
            <Row>
              <Col xs={5} md={5} lg={5}>
                <div style={{position:'absolute'}}>
                  <p style={{fontWeight:'bold', color:'#FB1242', fontSize:'24px'}}><Image className="mb-1 mr-3" src={appLogo} heigth="45px" width="45px" alt="logo"/>#AboutTime</p>
                  <p style={{fontWeight:'normal', color:'#4F4F4F', fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
                </div>
              </Col>
              <Col xs={3} md={3} lg ={3}>
                <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                  <li style={{color:'#333333', fontSize:'18px'}}>Our Restaurants</li>
                  <li>Chicken Republic</li>
                  <li>Mr Biggs</li>
                  <li>KFC Chicken</li>
                  <li>Magrellos</li>
                  <li>Bernadines</li>
                </ul>
              </Col>
              <Col xs={4} md={4} lg ={4}>
                <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                  <li style={{color:'#333333', fontSize:'18px'}}>Get to know our Team</li>
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
          </Container> */}
        </div>
    );
  }

}

const signUpBtn = {
  backgroundColor: "#FB1242",
  border: "none",
  color: "white",
  width: "145px",
  height: "44px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
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
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "Gilroy",
  cursor: "pointer",
  borderRadius: "24px"
}

const downloadappBtn = {
  backgroundColor: "#FB1242",
  border: "none",
  color: "white",
  height: "44px",
  width: "218px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
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
