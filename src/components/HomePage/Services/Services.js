import React from "react";
import "./Services.css";

const Services = () => {
  const test = {
    name: "testing",
    purpose: "testing",
  };
  const handleSubmit = (event) => {
    // const files = event.target.files;
    // const formData = new FormData();
    // formData.append("myFile", files[0]);

    // fetch("http://localhost:5000/addServices", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // fetch("http://localhost:5000/addServices", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(test),
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    };
  return (
    <div className="container services-container">
      <h2 className="service-heading">
        Provide awesome
        <span style={{ color: "rgba(122,178,89,1)" }}>services</span>
      </h2>
      <button onClick={handleSubmit}>Add Services</button>
    </div>
  );
};

export default Services;
