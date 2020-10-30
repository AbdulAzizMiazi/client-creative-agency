import React from "react";
import "./Footer.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className="home-footer">
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
            <h3>Let US Handle Your <br/>
            project, professionally.
            </h3>
            <br/>
            <p style={{width: "80%"}}>With well written codes, we build amazing apps for all platform and web apps in general.</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="p-sm-2 p-md-4 p-lg-4">
            <Form>
                <Form.Control type="email" size="lg" placeholder="Your Email Address" />
                <br/>
                <Form.Control type="text" size="lg" placeholder="Your Name / Company Name" />
                <br/>
                <Form.Control name="description" as="textarea" rows="6" placeholder="Your Message" />
                <br/>
            </Form>
                <Button variant="dark" type="submit" className="px-5 py-2"> Send </Button>
          </div>
        </div>
      </div>
    </div>
        <p style={{textAlign: "center"}} className="pt-5"><small>Copyright orange labs 2020</small></p>
    </div>
  );
};

export default Footer;
