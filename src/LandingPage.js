import React, { Component } from 'react';
import {Container, Form, Button, Image, Row, Col} from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import './aboutTeamPage.css';
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
import arrowIcon from './images/arrowIcon.svg';
import ellipseIcon from './images/ellipseIcon.svg';
import starIcon from './images/starIcon.svg';
import curvedRectIcon from './images/curvedRectIcon.svg';

class LandingPage extends Component{
  constructor(){
    super();
  }

  render(){
    return(
        <div style={{position:'relative', backgroundColor:'#FFFFFF', width:'1152px', height:'2502px', margin:'auto'}}>
          {/* Jumbotron */}
          <Container className="" style={{backgroundColor:'#FAC102', position:'absolute', marginTop:'0px', height:'675px', width:'1152px'}} fluid>
            {/* white rectangle */}
            <div style={{backgroundColor:'#FFFFFF', position:'absolute', left:'0%', top:'0%', height:'81px', width:'229px', color:'#FB1242', fontFamily:'Gilroy', fontWeight:'bold', fontSize:'16px'}}>
              <div style={{marginLeft:'61px', marginTop:'27px'}}>
                <Link style={{color:'#FB1242', textDecoration:'none'}} to={{pathname:'./', state:{}}}><Image className="mb-1 mr-3" src={appLogo} height="28px" width="28px" alt="logo"/>#AboutTime</Link>
              </div>
            </div>
            <div>
              <Image className="" src={redlineIcon} style={{position:'absolute', marginTop:'40px', marginLeft:'190px'}} height="2px" width="133px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'29px', marginLeft:'352px'}}>
              <Link style={{textDecoration:'none'}} to={{state:{}}}><p className="topbar" style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>How it works</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'29px', marginLeft:'484px'}}>
              <Link style={{textDecoration:'none'}} exact to='./AboutUs'><p className="topbar" style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>About Us</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'29px', marginLeft:'587px'}}>
              <Link style={{textDecoration:'none'}} to={{state:{}}}><p className="topbar" style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>Careers</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'30px', marginLeft:'869px'}}>
              <Link style={{textDecoration:'none'}} to={{pathname:'./signInPage', state:{}}}><p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FB1242'}}>Sign In</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'18px', marginLeft:'954px'}}>
              <Link style={{textDecoration:'none'}} to={{pathname:'./signUpPage', state:{}}}><Button style={signUpBtn} variant="danger">Sign up</Button></Link>
            </div>            
            <div style={{backgroundColor:'', position:'absolute', marginTop:'137px', marginLeft:'120px', height:'356px', width:'416px'}}>
              <p className="" style={{position:'absolute', marginTop:'0px', fontSize:'14px', fontWeight:'600', fontFamily:'Gilroy', color:'#4F4F4F'}}><Image className="mb-1 mr-2" src={locationLogo} height="21px" width="15px" alt="logo"/>Everywhere</p>
              <p className="" style={{position:'absolute', marginTop:'21px', fontSize:'45px', fontWeight:'bold', fontFamily:'Gilroy', color:'#333333'}}>Best Organic food, delivery food</p>
              <p className="" style={{position:'absolute', marginTop:'171px', fontSize:'16px', fontWeight:'500', fontFamily:'Gilroy', color:'#333333'}}>Time-definite and day definite delivery based on your location.</p>

              <Form className="" style={{position:'absolute', marginTop:'231px', width:'416px'}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control size="lg" type="text" placeholder="Enter your city"/>
                </Form.Group>
                <Button className="mt-2" style={roundBtn2} variant="danger">Find Restaurants</Button>
              </Form>
            </div>
            <div style={{position:'absolute', marginTop:'91px', marginLeft:'679px'}}>
              <Image src={roadLogo} height="413px" width="319px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'218px', marginLeft:'1061px'}}>
              <Image className="" src={barLogo} height="224px" width="41px" alt="logo"/>
            </div>
          </Container>
          <div >
            <Image className="" style={{position:'absolute', marginTop:'654px', marginLeft:'513px'}} src={polygonLogo} height="65px" width="127px" alt="logo"/>
            <Image className="" style={{position:'absolute', marginTop:'675px', marginLeft:'569px'}} src={arrowIcon} height="21px" width="15px" alt="logo"/>
          </div>
          {/* Fast delivery download app */}
          <Container style={{backgroundColor:'#FFFFFF', position:'absolute', marginTop:'757px', marginLeft:'0px', height:'347px', width:'1152px'}} fluid>
            <div style={{backgroundColor:"#f7e8b2", position:'absolute', marginLeft:'-15px', height:'347px', width:'407px'}}>
              <Image style={{position:'absolute', marginTop:'26px', marginLeft:'119px', zIndex:'1'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
              <Image style={{position:'absolute', marginTop:'42px', marginLeft:'192px', zIndex:'2'}} src={iphoneIcon} height="279px" width="138px" alt="logo"/>
            </div>
            <div style={{position:'absolute', marginTop:'75px', marginLeft:'457px'}}>
              <p style={{fontFamily:'gilroy', fontWeight:'bold', fontSize:'28px', color:'#4F4F4F'}}>Fast Delivery everywhere</p>
            </div>
            <div style={{position:'absolute', marginTop:'129px', marginLeft:'457px', width:'466px'}}>
              <p style={{fontFamily:'gilroy', fontWeight:'normal', fontSize:'18px', color:'#4F4F4F'}}>Lorem ipsum dolor sit amet, conse0ctetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginTop:'228px', marginLeft:'457px'}}>
              <Button style={downloadappBtn} className='mr-3' variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} height="25px" width="14px" alt="logo"/>Get on the Appstore</Button>
              <Button style={downloadappBtn} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} height="20px" width="19px" alt="logo"/>Get on the Playstore</Button>
            </div>
          </Container>
          {/* Restaurants */}
          <Container style={{backgroundColor:'#FFFFFF', position:'absolute', marginTop:'1234px', marginLeft:'119px', height:'428px', width:'894px', color:'#4F4F4F'}} fluid>
            <div className="text-center" style={{position:'absolute', marginTop:'0px'}}>
              <p style={{fontFamily:'gilroy', fontSize:'28px', fontWeight:'bold'}}>Our Resturants</p>
              <p style={{fontFamily:'gilroy', fontSize:'18px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{backgroundColor:'', position:'absolute', marginTop:'170px', marginLeft:'-15px', height:'258px', width:'100%'}}>
              <div style={{position:'absolute', marginLeft:'0px', height:'100%', width:"268px"}}>
                <Image src={restaurantIcon} style={{position:'absolute', zIndex:'1'}} height="258px" width="268px" alt="logo"/>
                <Image src={curvedRectIcon} style={{position:'absolute', marginLeft:'0px', marginTop:'209px', zIndex:'2'}} height="49px" width="137px" alt="logo"/>
                <Image src={starIcon} style={{position:'absolute', marginLeft:'229px', marginTop:'21px', zIndex:'3'}} height="8px" width="8px" alt="logo"/>
                <Image src={ellipseIcon} style={{position:'absolute', marginLeft:'225px', marginTop:'10px', zIndex:'2'}} height="30px" width="30px" alt="logo"/>
                <p style={{position:'absolute', fontWeight:'600', fontFamily:'gilroy', fontSize:'10px', color:'#FAC102', marginLeft:'239px', marginTop:'17px', zIndex:'3'}}>9.7</p>
                <p style={{position:'absolute', fontWeight:'bold', fontFamily:'gilroy', fontSize:'14px', color:'#333333', marginLeft:'3px', marginTop:'214px', zIndex:'3'}}>Chicken Republic</p>
                <p style={{position:'absolute', fontWeight:'500', fontFamily:'gilroy', fontSize:'12px', color:'#828282', marginLeft:'3px', marginTop:'238px', zIndex:'3'}}>3, Ayo dele street Lagos.</p>
              </div>
              <div style={{position:'absolute', marginLeft:'313px', width:"268px"}}>
                <Image src={restaurantIcon} style={{position:'absolute', zIndex:'1'}} height="258px" width="268px" alt="logo"/>
                <Image src={curvedRectIcon} style={{position:'absolute', marginLeft:'0px', marginTop:'209px', zIndex:'2'}} height="49px" width="137px" alt="logo"/>
                <Image src={starIcon} style={{position:'absolute', marginLeft:'229px', marginTop:'21px', zIndex:'3'}} height="8px" width="8px" alt="logo"/>
                <Image src={ellipseIcon} style={{position:'absolute', marginLeft:'225px', marginTop:'10px', zIndex:'2'}} height="30px" width="30px" alt="logo"/>
                <p style={{position:'absolute', fontWeight:'600', fontFamily:'gilroy', fontSize:'10px', color:'#FAC102', marginLeft:'239px', marginTop:'17px', zIndex:'3'}}>9.7</p>
                <p style={{position:'absolute', fontWeight:'bold', fontFamily:'gilroy', fontSize:'14px', color:'#333333', marginLeft:'3px', marginTop:'214px', zIndex:'3'}}>Chicken Republic</p>
                <p style={{position:'absolute', fontWeight:'500', fontFamily:'gilroy', fontSize:'12px', color:'#828282', marginLeft:'3px', marginTop:'238px', zIndex:'3'}}>3, Ayo dele street Lagos.</p>
              </div>
              <div style={{position:'absolute', marginLeft:'626px', width:"268px"}}>
                <Image src={restaurantIcon} style={{position:'absolute', zIndex:'1'}} height="258px" width="268px" alt="logo"/>
                <Image src={curvedRectIcon} style={{position:'absolute', marginLeft:'0px', marginTop:'209px', zIndex:'2'}} height="49px" width="137px" alt="logo"/>
                <Image src={starIcon} style={{position:'absolute', marginLeft:'229px', marginTop:'21px', zIndex:'3'}} height="8px" width="8px" alt="logo"/>
                <Image src={ellipseIcon} style={{position:'absolute', marginLeft:'225px', marginTop:'10px', zIndex:'2'}} height="30px" width="30px" alt="logo"/>
                <p style={{position:'absolute', fontWeight:'600', fontFamily:'gilroy', fontSize:'10px', color:'#FAC102', marginLeft:'239px', marginTop:'17px', zIndex:'3'}}>9.7</p>
                <p style={{position:'absolute', fontWeight:'bold', fontFamily:'gilroy', fontSize:'14px', color:'#333333', marginLeft:'3px', marginTop:'214px', zIndex:'3'}}>Chicken Republic</p>
                <p style={{position:'absolute', fontWeight:'500', fontFamily:'gilroy', fontSize:'12px', color:'#828282', marginLeft:'3px', marginTop:'238px', zIndex:'3'}}>3, Ayo dele street Lagos.</p>
              </div>
            </div>
          </Container>
          {/* Get the app */}
          <Container style={{backgroundColor:"#f7e8b2", position:'absolute', marginTop:'1792px', marginLeft:'0px', height:'332px', width:'1152px', color:'#4F4F4F'}} fluid>
            <div style={{position:'absolute', marginTop:'68px', marginLeft:'139px'}}>
              <p style={{pofontFamily:'gilroy', fontSize:'28px', fontWeight:'bold'}}>Get the app and start ordering.</p>
            </div>
            <div style={{position:'absolute', marginTop:'122px', marginLeft:'139px', height:'81px', width:'466px'}}>
              <p style={{fontFamily:'gilroy', fontSize:'18px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginTop:'221px', marginLeft:'139px'}}>
              <Button className='mr-4' style={downloadappBtn} variant="danger"><Image className="mb-1 mr-2" src={appstoreIcon} height="25px" width="14px" alt="logo"/>Get on the Appstore</Button>
              <Button style={downloadappBtn} variant="danger" inline><Image className="mb-1 mr-2" src={playstoreIcon} height="20px" width="19px" alt="logo"/>Get on the Playstore</Button>    
            </div>
            
            <Image style={{position:'absolute', marginTop:'-20px', marginLeft:'910px', zIndex:'1'}} src={yellowdotsIcon} height="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'139px', marginLeft:'675px', zIndex:'1'}} src={yellowdotsIcon} height="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'30px', marginLeft:'763px', zIndex:'3'}} src={iphoneIcon} height="270px" width="133px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'52px', marginLeft:'693px', zIndex:'2'}} src={iphoneIcon} height="226px" width="112px" alt="logo"/>
            <Image style={{position:'absolute', marginTop:'52px', marginLeft:'855px', zIndex:'2'}} src={iphoneIcon} height="226px" width="112px" alt="logo"/>
          </Container>
          {/* Footer */}
          <Container style={{backgroundColor:'#f7f7f7', position:'absolute', marginTop:'2124px', marginLeft:'0px', height:'380px', width:'1152px'}} fluid>
            <p style={{position:'absolute', marginTop:'79px', marginLeft:'139px', fontWeight:'bold', color:'#FB1242', fontSize:'24px'}}><Image className="mb-1 mr-3" src={appLogo} height="45px" width="45px" alt="logo"/>#AboutTime</p>
            <p style={{position:'absolute', marginTop:'134px', marginLeft:'139px', fontWeight:'normal', color:'#4F4F4F', fontSize:'18px', width:'466px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            <div style={{position:'absolute', marginLeft:'620px', marginTop:'84px', width:'180px'}}>
              <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                <li style={{color:'#333333', fontSize:'18px'}}>Our Restaurants</li>
                <li>Chicken Republic</li>
                <li>Mr Biggs</li>
                <li>KFC Chicken</li>
                <li>Magrellos</li>
                <li>Bernadines</li>
              </ul>
            </div>
            <div style={{position:'absolute', marginLeft:'810px', marginTop:'84px', width:'240px'}}>
              <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                <li style={{color:'#333333', fontSize:'18px'}}>Get to know our Team</li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Akana David</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Charles Cookey</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Ikechukwu Imala</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Dwight Ojukwu</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Lucas Chekwa</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Onyeukwu Samuel</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Eniola Olaiwole</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Yisau Sammad</Link></li>
                <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Okemati Lanre</Link></li>
              </ul>
            </div>
          </Container>
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
  width: "179px",
  height: "44px",
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
