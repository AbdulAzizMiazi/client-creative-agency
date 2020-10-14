import React from 'react';
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import { useState } from 'react';

const AddServices = () => {
    const [newServiceData, setNewServiceData] = useState({});
    const [file, setFile] = useState(null);
    console.log(file);
    console.log(newServiceData);

    const updateNewServiceData = e => {
        const name = e.target.name;
        const value = e.target.value;
        const updatedServiceData = {...newServiceData};
        updatedServiceData[name] = value;
        setNewServiceData(updatedServiceData);
        // setSuccess(success = "");
    }
    const takeFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e  => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append("serviceTitle", newServiceData.serviceTitle);
        formData.append("description", newServiceData.description);
        console.log(formData);
        console.log(file);
        // console.log(newServiceData);
    
        fetch("http://localhost:5000/addServices", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(newServiceData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    return (
        <div className="ml-3 pt-3">

      <h4 className="mb-4 ml-3 font-weight-bold">Add Event</h4>
      {/* <p style={{color:"green"}}>{success}</p> */}

      <div className="myTable p-4 px-2 shadow-lg">
        <Form onSubmit = {handleSubmit} >
          <Form.Row>
            <Col sm={12} md={6}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Service Title</Form.Label>
                <Form.Control type="text" name="serviceTitle" onBlur={updateNewServiceData} placeholder="Enter Title" />
                {/* <small style={{color:"red", float: "left"}}>
                    {titleWarning}<br/>
                </small> */}
            </Form.Group>
            </Col>

            <Col sm={12} md={6}>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Icon</Form.Label>
                <br/>
                <input type="file" name="icon" onChange={takeFile} placeholder="upload image" id=""/>
            </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={12} md={6}>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" onBlur={updateNewServiceData} name="description"  />
            </Form.Group>
            </Col>
          </Form.Row>
        <Button variant="primary" type="submit"> Submit </Button>
        </Form>


      </div>
    </div>
    );
};

export default AddServices;