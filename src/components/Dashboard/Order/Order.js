import React from "react";
import "./Order.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = ({userInfo}) => {
    const{email, displayName} = userInfo;
    const {title} = useParams();
    let [success, setSuccess] = useState("");
    let [emptyService, setEmptyService] = useState("");
    const [orderDetails, setOrderDetails] = useState({
      customerName: displayName,
      email: email,
      service: title,
      status: "pending",
    });
    // console.log(orderDetails);
    
    const updateOrder = e => {
      const name = e.target.name;
      const value = e.target.value;
      const newOrder = {...orderDetails};
      newOrder[name] = value;
      setOrderDetails(newOrder);
      setSuccess("");
    };
    
    const submitOrder = () =>{
      if (orderDetails.service === undefined) {
        setEmptyService("Please, go back and select a service.")
      }
      else if (orderDetails.description === undefined) {
        const newOrder = {...orderDetails};
        newOrder.description = "";
        setOrderDetails(newOrder);
      }
      else if (orderDetails.service !== undefined) {
        console.log(orderDetails);
        // fetch('https://blooming-headland-33626.herokuapp.com/addOrder',{
        fetch('http://localhost:5000/addOrder',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(orderDetails),
        })
        .then(res => res.json())
        .then(data => {
          data.insertedCount > 0 
          && setSuccess("Order placed successfully...!!")
          && setEmptyService("")
        })   
      }
    }

  return (
    <div>
      <div className="orderDiv-headings px-5 pb-4">
        <h3>Order</h3>
        <h4>{displayName}</h4>
      </div>
      <div className="inputGroup">
        <p style={{color:"green", textAlign: "center"}}>{success}</p>
        <p style={{color:"red", textAlign: "center"}}>{emptyService}</p>
        <br/>
      <div className="row">
      <div className="col-sm-10 col-md-8 col-lg-8">
      <Form className="p-5">
        <Form.Control name="customerName" value={displayName} readOnly /> <br/>
        <Form.Control name="email" type="email" value={email} readOnly /> <br/>
        <Form.Control name="service" type="text" value={title} id="titleField" readOnly /> <br/>
        <Form.Control name="description" as="textarea" rows="3" onBlur={updateOrder} placeholder="Project Details" /> <br/>
        <Form.Row>
            <Col sm={12} md={6}>          
                <Form.Control type="number" name="price" onBlur={updateOrder} placeholder="price"  />
            </Col>
            <Col sm={12} md={6}>          
                <input type="file" name="image"className="fileUpload-box" id="fileUpload" placeholder= ""  />
            </Col>
          </Form.Row>
      </Form>
      <Button variant="dark" onClick={submitOrder} className="px-5 py-2 mx-5">Order</Button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Order;
