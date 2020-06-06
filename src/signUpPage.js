import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import appLogo from './images/appLogo.svg';
import truckIcon from './images/truckIcon.svg'
import './signUpPage.css'

class signUpPage extends Component {
  render() {
    return(
        <div className= "container">
          <div className = "signUpDetails">
            <div className= "topBar">
            <Image className="mb-1 mr-3" src={appLogo} height="28px" width="28px" alt="logo"/>
            <p>#AboutTime</p>
            </div>

            <div className= "leftMiddle">
              <p className = "signUpFree">Sign up, it's free!</p>
              <p className = "registeredAccount">Create a new registered account</p>
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

              <Form.Group controlId="formConfirmPassword">
                <Form.Label className="formLabel">Confirm Password</Form.Label>
                <Form.Control className="formPlaceholder" type="password" placeholder="Enter your password" />
              </Form.Group>
              
              <Button className = "formButton" variant="danger" type="submit">
                Sign up
              </Button>
            </Form>
          </div>

          <div className = "signUpPicture">
              <p className="gotAccount">Already have an account? <span><Link className = "link" to = "./signIn" style={{ textDecoration: 'none' }}>Sign In</Link></span></p>

              <Image className="truckImage" src={truckIcon} alt="truck"/>
              <p className = "deliverWithTrucks">We deliver with trucks</p>
              <p className = "loremIpsum"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sapien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
          </div>
          
        </div>



    );
  }
}

export default signUpPage;