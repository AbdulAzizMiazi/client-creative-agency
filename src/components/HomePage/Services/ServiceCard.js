import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServiceCard = ({serviceInfo}) => {
    const {title, description, image} = serviceInfo;
    const goTo = `/dashboard/${title}`;
    return (
        <Link to={goTo} style={{textDecoration: "none"}} className="col-sm-12 col-md-6 col-lg-4">
            <div className="serviceCard">
                <img src={`data:image/png;base64,${image.img}`} width="100px" alt="service" />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;