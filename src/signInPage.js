import React, {Component} from 'react';
import {Form, Button, Image} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import appLogo from './images/appLogo.svg';
import truckIcon from './images/truckIcon.svg'
import './signInPage.css'

class signInPage extends Component {
  render() {
    return(
        <div className= "container">
          <div className = "signInDetails">
            <div className= "topBar">
            <Image className="mb-1 mr-3" src={appLogo} height="28px" width="28px" alt="logo"/>
            <p>#AboutTime</p>
            </div>

            <div className= "leftMiddle">
              <p className = "signInFree">Sign In, free access!</p>
              <p className = "registeredAccount">Log in to your registered account</p>
            </div>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="formLabel">E-mail</Form.Label>
                <Form.Control className="formPlaceholder" type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="formLabel">Password</Form.Label>
                <Form.Control className="formPlaceholder" type="password" placeholder="Enter your password" />
              </Form.Group>
              
              <Button className = "formButton" variant="danger" type="submit">
                Sign In
              </Button>
            </Form>
          </div>

          <div className = "signInPicture">
              <p className="gotAccount">Don't have an account? <span><Link className = "link" to = "./signUp" style={{ textDecoration: 'none' }}>Sign Up</Link></span></p>

              <Image className="truckImage" src={truckIcon} alt="truck"/>
              <p className = "deliverWithTrucks">We deliver with trucks</p>
              <p className = "loremIpsum"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
          </div>
          
        </div>



    );
  }
}

export default signInPage;