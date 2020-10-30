import React from 'react'; 
import './NotFound.css'; 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import img from '../../resources/404_v2.webp';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row not-found-page-container">
                <div className="col-sm-12 col-md-8 col-lg-6">
                    <img src={img} alt="" className="not-found img-fluid" />
                    <br/>
                    <Link to="/" className="not-found-btn"> 
                        <Button variant="danger">back to home</Button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;