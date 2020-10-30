import React, { useState } from "react";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './MakeAdmin.css';
import { Form } from "react-bootstrap";

const MakeAdmin = ({name}) => {
    const [newAdmin, setNewAdmin] = useState({});
    let [success, setSuccess] = useState("");
    let [wrong, setWrong] = useState("");
    console.log(success);
    const adminEmail = e => {
        const name = e.target.name;
        const value = e.target.value;
        const email = {...newAdmin};
        email[name] = value;
        setNewAdmin(email);
        setSuccess("");
    }
    const addAmin = () => {
      const isValid = /\S+@\S+\.\S+/.test(newAdmin.email);
      if(isValid === true && newAdmin.email !== undefined) {
        fetch("https://blooming-headland-33626.herokuapp.com/addAdmin",{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => data.insertedCount > 0 
          && setSuccess("Admin added successfully...!!")
          && setWrong("")
        )
      }
      else if (isValid === false) {
        return setWrong("Please, enter a valid email address.")
      }
    }
  return (
    <div>
      <div className="addAdminDiv-headings mt-5">

        <h4 className="mb-4 ml-3 font-weight-bold">Add A New Admin</h4>
        <h5>{name.userName}</h5>
      </div>
      <div className="inputGroup" style={{padding: '20px 20px 40vh 20px'}}>
        <div className="mainForm-Part">
        <p style={{color:"green", marginLeft:"15px"}}>{success}</p>
        <h4>Email</h4>
        <p><small>{wrong}</small></p>
        <div className="Row">     
            <Form inline className="col-sm-12 col-md-10 col-lg-8">
                <FormControl
                    placeholder="jon@gmail.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name = "admin"
                    className="w-75 mr-3"
                    onBlur={adminEmail}
                />
                <Button variant="success" onClick={addAmin}>Submit</Button>
            </Form>
        </div>
        </div>
        </div>
    </div>
  );
};

export default MakeAdmin;
