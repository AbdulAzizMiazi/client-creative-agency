import React from "react";
import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../resources/logos/logo.png';
import frame from '../../../resources/logos/Frame.png';
import slack from '../../../resources/logos/slack.png';
import google from '../../../resources/logos/google.png';
import uber from '../../../resources/logos/uber.png';
import netflix from '../../../resources/logos/netflix.png';
import airbnb from '../../../resources/logos/airbnb.png';


const Header = () => {

    const brandsImg = [slack, google, uber, netflix, airbnb];
  return (
    <div>
        <div className="header-div">
        <div className="container">
            <Navbar className="bg-transparent" expand="lg">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="220px"
                        className="d-inline-block align-top"
                    /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-3">Home</Nav.Link>
                        <Nav.Link className="mr-3">Our Portfolio</Nav.Link>
                        <Nav.Link className="mr-3">Our Team</Nav.Link>
                        <Nav.Link className="mr-3">Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="dark" className="px-5 py-2">LogIn</Button>
                </Navbar.Collapse>
            </Navbar>

            <header>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-5 pt-4">
                        <h1 className="headerText pt-5" >
                        Let’s Grow Your <br/>
                        Brand To The <br/>
                        Next Level
                        </h1>
                        <p className="mr-5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem perspiciatis, aliquam temporibus maiores.</p>
                        <Button variant="dark" className="px-5 py-2 mt-4">Hire us</Button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <img src={frame} alt="" className="img-fluid" />
                    </div>
                </div>
            </header>
        </div>
        </div>
            <section className="brands container mt-sm-2 pt-sm-2 mt-lg-5 pt-lg-5">
                {
                    brandsImg.map((eachBrandImg, index) => <img src={eachBrandImg} key={`ebi${index+1}`} alt=""/> )
                }
            </section>
    </div>
  );
};

export default Header;
