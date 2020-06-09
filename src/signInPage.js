import React, { Component } from 'react';
import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutTeamPage.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { MDBBtn } from "mdbreact";
import profilePhotoIcon from './images/profilePhotoIcon.svg';
import appLogo from './images/appLogo.svg';
import bikeManIcon from './images/bikeManIcon.svg';
import dotsIcon from './images/dotsIcon.svg';
import yellowdotsIcon from './images/yellowdotsIcon.svg';
import iphoneIcon from './images/iphoneIcon.svg';
import restaurantIcon from './images/restaurantIcon.svg';
import redlineIcon from './images/redlineIcon.svg';
import polygonLogo from './images/polygonLogo.svg';
import arrowIcon from './images/arrowIcon.svg';
import yellowEllipseIcon from './images/yellowEllipseIcon.svg';
import chekwaPic from './images/chekwaPic.svg';
import collageImg from './images/collageImg.svg';

class signInPage extends Component{
  constructor(){
    super();

  }

//   render(){
//     return(
//         <div style={{height:'100vh'}}>
//             <Container fluid>
//             <Row>
//                 <Col>
//                     <Container style={{backgroundColor:'#FFFFFF', height:'100vh', width:'50vw', float:'left'}}>
//                         <div style={{width:'', margin:'auto'}}>
//                             <Link style={{color:'#FB1242', textDecoration:'none'}} to={{pathname:'./', state:{}}}><Image className="mb-1 mr-3" src={appLogo} height="28px" width="28px" alt="logo"/>#AboutTime</Link>
//                             <h1>Sign up, it’s free!</h1>
//                             <h4>Create a new registed account</h4>
//                             <Form>
//                                 <Form.Group controlId="formBasicEmail">
//                                     <Form.Label>E-mail</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter your e-mail" />
//                                 </Form.Group>
//                                 <Form.Group controlId="formBasicPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control type="password" placeholder="Enter your password" />
//                                 </Form.Group>
//                                 <Form.Group controlId="formBasicPassword">
//                                     <Form.Label>Confirm Password</Form.Label>
//                                     <Form.Control type="password" placeholder="Enter your password" />
//                                 </Form.Group>
//                                 <Button variant="primary" type="submit">Sign up</Button>
//                             </Form>
//                         </div>
//                     </Container>
//                 </Col>
//                 <Col>
//                     <Container style={{backgroundColor:'#FAC102', height:'100vh', width:'50vw', float:'right'}}>
//                         <div style={{margin:'auto'}}>

//                         </div>
//                     </Container>
//                 </Col>
//             </Row>
//             </Container>
//         </div>
//     );
//   }

    render(){
        return(
                <div style={{position:'absolute', height:'700px', width:'1152px', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
                    <Container style={{position:'absolute', backgroundColor:'#FFFFFF', position:'absolute', marginLeft:'0px', marginTop:'0px', height:'100%', width:'50%'}}>
                        <div style={{position:'absolute',  backgroundColor:'blue', marginLeft:'119px', marginTop:'40px', width:'378px'}}>
                            <Link style={{position:'absolute', marginLeft:'0px', marginTop:'0px', color:'#FB1242', textDecoration:'none', fontFamily:'gilroy', fontWeight:'bold', color:'#FB1242', fontSize:'16px'}} to={{pathname:'./', state:{}}}><Image className="mb-1 mr-3" src={appLogo} height="28px" width="28px" alt="logo"/>#AboutTime</Link>
                            <p style={{position:'absolute', marginLeft:'0px', marginTop:'89px', fontFamily:'gilroy', fontWeight:'bold', color:'#4F4F4F', fontSize:'24px'}}>Sign in!</p>
                            <p style={{position:'absolute', marginLeft:'0px', marginTop:'131px', fontFamily:'gilroy', fontWeight:'500', color:'#828282', fontSize:'18px'}}>Login to your account</p>
                            <Form style={{position:'absolute', marginLeft:'0px', marginTop:'182px', width:'378px'}}>
                                <Form.Group controlId="formBasicEmail" style={{position:'absolute', marginLeft:'0px', marginTop:'0px', width:'378px'}}>
                                    <Form.Label style={{fontFamily:'gilroy', fontWeight:'600', color:'#828282', fontSize:'18px'}}>E-mail</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Enter your e-mail" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" style={{position:'absolute', marginLeft:'0px', marginTop:'114px', width:'378px'}}>
                                    <Form.Label style={{fontFamily:'gilroy', fontWeight:'600', color:'#828282', fontSize:'18px'}}>Password</Form.Label>
                                    <Form.Control size="lg" type="password" placeholder="Enter your password" />
                                </Form.Group>
                                <Form.Group style={{position:'absolute', marginLeft:'0px', marginTop:'228px'}}>
                                    <Button className="" style={signInBtn} variant="danger">Sign In</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Container>
                    <Container style={{position:'absolute', backgroundColor:'#FAC102', position:'absolute', marginLeft:'50%', marginTop:'0px', height:'100%', width:'50%'}}>
                        <p style={{position:'absolute', marginLeft:'312px', marginTop:'34px', fontFamily:'gilroy', fontWeight:'600', color:'#828282', fontSize:'16px'}}>Don’t have an accont? <span><Link style={{textDecoration:'none', color:'#FB1242'}} to={{pathname:'./signUpPage', state:{}}}>Sign up</Link></span></p>
                        <Image className="" style={{position:'absolute', marginLeft:'200.5px', marginTop:'160px'}} src={bikeManIcon} height="200px" width="185px" alt="bikeManIcon"/>
                        <p style={{position:'absolute', marginLeft:'142px', marginTop:'366px', textAlign:'center', fontFamily:'gilroy', fontWeight:'bold', color:'#4F4F4F', fontSize:'28px'}}>We deliver with trucks</p>
                        <p style={{position:'absolute', marginLeft:'50px', marginTop:'420px', width:'466px', textAlign:'center', fontFamily:'gilroy', fontWeight:'500', color:'#828282', fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
                        <Image className="" style={{position:'absolute', marginLeft:'265px', marginTop:'525px'}} src={dotsIcon} height="6px" width="38px" alt="bikeManIcon"/>
                    </Container>
                </div>
        );
    }

}

const signInBtn = {
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
    borderRadius: "20px",
  }



export default signInPage;
