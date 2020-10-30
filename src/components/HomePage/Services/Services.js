import React, { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(()=> {
    fetch("https://blooming-headland-33626.herokuapp.com/allServices")
    .then(res => res.json())
    .then(data => setAllServices(data))
  },[])

  return (
    <div className="container services-container my-5">
      
      {
        allServices.length !== 0 && 
          <h2 className="service-heading mb-5">
            Provide awesome
          <span style={{ color: "rgba(122,178,89,1)" }}> services</span>
        </h2>
      }
      <div className="row">
      {
        allServices.map(eachService => <ServiceCard serviceInfo={eachService} key={eachService._id} />)
      }
      </div>
    </div>
  );
};

export default Services;
