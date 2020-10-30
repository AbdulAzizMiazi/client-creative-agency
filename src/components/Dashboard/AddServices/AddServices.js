import React from 'react';
import './AddServices.css';
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import { useState } from 'react';

const AddServices = () => {
    let [newServiceData, setNewServiceData] = useState({});
    const [file, setFile] = useState(null);
    let [success, setSuccess] = useState("");

    const updateNewServiceData = e => {
      const name = e.target.name;
      const value = e.target.value;
      const updatedServiceData = {...newServiceData};
      updatedServiceData[name] = value;
      setNewServiceData(updatedServiceData);
      setSuccess("");
    }
    const takeFile = e => {
      const newFile = e.target.files[0];
      setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append("serviceTitle", newServiceData.serviceTitle);
        formData.append("description", newServiceData.description);

        fetch("https://blooming-headland-33626.herokuapp.com/addServices", {
          method: "POST",
          body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.insertedCount > 0) {
              setSuccess("Service added successfully...!!");
              setNewServiceData({});
              setFile(null);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
    return (
        <div className="ml-3 pt-3">

      <h4 className="mb-4 ml-3 font-weight-bold">Add Service</h4>
      {/* <p style={{color:"green"}}>{success}</p> */}

      <div className="myTable p-4 px-2 shadow-lg">
        <Form>
                <p style={{color:"green", textAlign: "center"}}>
                    {success}<br/>
                </p>
          <Form.Row>
            <Col sm={12} md={6}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Service Title</Form.Label>
                <Form.Control type="text" name="serviceTitle" onBlur={updateNewServiceData} placeholder="Enter Title" />
            </Form.Group>
            </Col>

            <Col sm={12} md={6}>
            <Form.Group as={Col} controlId="formGridPassword">
                <br/>
                <input type="file" name="icon" onChange={takeFile} placeholder="upload image" className="fileUpload-box" id="fileUpload"/>
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
        </Form>
        <Button variant="primary" type="submit" onClick={handleSubmit}> Submit </Button>


      </div>
    </div>
    );
};

export default AddServices;