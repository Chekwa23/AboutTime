import React, { Component } from 'react';
import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { MDBBtn } from "mdbreact";
import profilePhotoIcon from './images/profilePhotoIcon.svg';
import appLogo from './images/appLogo.svg';
import playstoreIcon from './images/playstoreIcon.svg';
import appstoreIcon from './images/appstoreIcon.svg';
import yellowdotsIcon from './images/yellowdotsIcon.svg';
import iphoneIcon from './images/iphoneIcon.svg';
import restaurantIcon from './images/restaurantIcon.svg';
import redlineIcon from './images/redlineIcon.svg';
import polygonLogo from './images/polygonLogo.svg';
import arrowIcon from './images/arrowIcon.svg';
import yellowEllipseIcon from './images/yellowEllipseIcon.svg';
import chekwaPic from './images/chekwaPic.svg';
import collageImg from './images/collageImg.svg';

class aboutTeamPage extends Component{
  constructor(){
    super();

  }

  render(){
    return(
        <div style={{position:'relative', backgroundColor:'#FFFFFF', width:'1152px', margin:'auto'}}>
          {/* Jumbotron */}
          <Container className="" style={{backgroundColor:'#FAC102', position:'absolute', marginTop:'0px', height:'533px', width:'1152px'}} fluid>
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
              <Link style={{textDecoration:'none'}} to={{state:{}}}><p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>How it work</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'29px', marginLeft:'484px'}}>
              <Link style={{textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}><p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>About Us</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'29px', marginLeft:'587px'}}>
              <Link style={{textDecoration:'none'}} to={{state:{}}}><p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FFFFFF'}}>Careers</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'30px', marginLeft:'869px'}}>
              <Link style={{textDecoration:'none'}} to={{state:{}}}><p style={{fontFamily:'Gilroy', fontSize:'16px', fontWeight:'600', color:'#FB1242'}}>Sign In</p></Link>
            </div>
            <div style={{position:'absolute', marginTop:'18px', marginLeft:'954px'}}>
              <Link style={{textDecoration:'none'}} to={{state:{}}}><Button style={signUpBtn} variant="danger">Sign up</Button></Link>
            </div>      
            <div style={{backgroundColor:'', position:'absolute', marginTop:'137px', marginLeft:'120px', height:'356px', width:'416px'}}>
              <p className="" style={{fontSize:'14px', fontWeight:'600', fontFamily:'Gilroy', color:'#4F4F4F'}}><Image className="mb-1 mr-2" src={profilePhotoIcon} height="21px" width="17px" alt="logo"/>Our Team</p>
              <p className="" style={{fontSize:'45px', fontWeight:'bold', fontFamily:'Gilroy', color:'#333333'}}>We are the #AboutTime team</p>
              <p className="" style={{fontSize:'16px', fontWeight:'500', fontFamily:'Gilroy', color:'#333333'}}>Let’s show you what how we can make your life better.</p>
            </div>
            <div style={{backgroundColor:'', position:'absolute', marginTop:'95px', marginLeft:'685px', height:'335px', width:'395px'}}>
                <Image className="" src={collageImg} style={{position:'absolute', marginTop:'0px', marginLeft:'0px'}} height="335px" width="395px" alt="logo"/>
            </div>
          </Container>
          {/* Our Team */}
          <Container style={{backgroundColor:'', position:'absolute', marginTop:'650px', marginLeft:'75px', height:'466px', width:'958px'}} fluid>
            <Image className="" style={{position:'absolute', marginTop:'386px', marginLeft:'-15px'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
            <Image className="" style={{position:'absolute', marginTop:'22px', marginLeft:'299px'}} src={yellowdotsIcon} height="80px" width="94px" alt="logo"/>
            <div style={{position:'absolute', marginTop:'65px', marginLeft:'45px', height:'401px', width:'348px'}}>
                <Image className="" style={{position:'absolute', marginTop:'0px', marginLeft:'0px'}} src={chekwaPic} height="401px" width="348px" alt="logo"/>
                <Image className="" style={{position:'absolute', marginTop:'239px', marginLeft:'265px', zIndex:'2'}} src={yellowEllipseIcon} height="50px" width="50px" alt="logo"/>
                <Image className="" style={{position:'absolute', transform:'rotate(-90deg)', marginTop:'255px', marginLeft:'278px', zIndex:'3'}} src={arrowIcon} height="16px" width="28px" alt="logo"/>
                <Image className="" style={{position:'absolute', marginTop:'313px', marginLeft:'265px', zIndex:'2'}} src={yellowEllipseIcon} height="50px" width="50px" alt="logo"/>
                <Image className="" style={{position:'absolute', transform:'rotate(90deg)', marginTop:'329px', marginLeft:'275px', zIndex:'3'}} src={arrowIcon} height="16px" width="28px" alt="logo"/>
            </div>
            <p style={{position:'absolute', fontWeight:'bold', fontSize:'28px', fontFamily:'gilroy', color:'#4F4F4F', marginTop:'0px', marginLeft:'45px'}}>Our Team</p>
            <p style={{position:'absolute', fontWeight:'bold', fontSize:'16px', fontFamily:'gilroy', color:'#FB1242', marginTop:'65px', marginLeft:'438px'}}>Name</p>
            <p style={{position:'absolute', fontWeight:'600', fontSize:'20px', fontFamily:'gilroy', color:'#4F4F4F', marginTop:'100px', marginLeft:'438px'}}>Meet #Chekwa</p>
            <p style={{position:'absolute', fontWeight:'bold', fontSize:'16px', fontFamily:'gilroy', color:'#FB1242', marginTop:'166px', marginLeft:'438px'}}>Stack</p>
            <p style={{position:'absolute', fontWeight:'600', fontSize:'20px', fontFamily:'gilroy', color:'#4F4F4F', marginTop:'201px', marginLeft:'438px'}}>Nigga just wants money</p>
            <p style={{position:'absolute', fontWeight:'bold', fontSize:'16px', fontFamily:'gilroy', color:'#FB1242', marginTop:'267px', marginLeft:'438px'}}>Description</p>
            <p style={{position:'absolute', fontWeight:'600', fontSize:'20px', fontFamily:'gilroy', color:'#4F4F4F', marginTop:'302px', marginLeft:'438px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus lectus sit sit. Ut nunc facilisi senectus ut at risus feugiat lectus. Velit morbi commodo habitant risus ultricies elit. Cursus at nulla dolor ac vulputate. Ultrices.</p>
          </Container>
          {/* Footer */}
          <Container style={{position:'absolute', marginTop:'1274px', marginLeft:'139px', height:'280px', width:'894px'}} fluid>
            <div style={{position:'absolute', marginLeft:'-15px', marginTop:'0px', width:'466px'}}>
              <p style={{fontWeight:'bold', color:'#FB1242', fontSize:'24px'}}><Image className="mb-1 mr-3" src={appLogo} height="45px" width="45px" alt="logo"/>#AboutTime</p>
              <p style={{fontWeight:'normal', color:'#4F4F4F', fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
            </div>
            <div style={{position:'absolute', marginLeft:'480px', marginTop:'5px', width:'180px'}}>
              <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                <li style={{color:'#333333', fontSize:'18px'}}>Our Restaurants</li>
                <li>Chicken Republic</li>
                <li>Mr Biggs</li>
                <li>KFC Chicken</li>
                <li>Magrellos</li>
                <li>Bernadines</li>
              </ul>
            </div>
            <div style={{position:'absolute', marginLeft:'650px', marginTop:'5px', width:'240px'}}>
              <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                <li style={{color:'#333333', fontSize:'18px'}}>Get to know our Team</li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Akana David</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Charles Cookey</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Ikechukwu Imala</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Dwight Ojukwu</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Lucas Chekwa</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Onyeukwu Samuel</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Eniola Olaiwole</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Yisau Sammad</Link></li>
                <li><Link style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Okemati Lanre</Link></li>
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



export default aboutTeamPage;
