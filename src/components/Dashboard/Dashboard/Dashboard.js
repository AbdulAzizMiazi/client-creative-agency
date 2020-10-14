import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../resources/logos/logo.png';
import AddServices from '../AddServices/AddServices';
import './Dashboard.css';

const Dashboard = () => {
    let [showToCustomers, setShowToCustomers] = useState();

    return (
        <div className="adminDiv mx-sm-2 mx-md-3 mx-5">
            <Row style={{marginLeft: "0px"}}>
                <Col sm={12} md={2}>
                    <Link to="/">
                    <img
                        alt=""
                        src={logo}
                        width="220px"
                        className="d-inline-block align-top mt-3 mb-5"
                    />
                    </Link>
                    <p onClick={()=>setShowToCustomers(showToCustomers = true)}>
                        {
                            showToCustomers
                            ?<span 
                                className="adminOption" 
                                style={{color: "rgb(57, 169, 235)"}}>
                                    Volunteer Register List
                            </span>
                            :<span className="adminOption">Volunteer Register List</span>
                        }
                    </p>
                    <p onClick={()=>setShowToCustomers(showToCustomers = false)} >
                        {
                            showToCustomers
                            ?<span className="adminOption">Add Event</span>
                            :<span 
                                className="adminOption" 
                                style={{color: "rgb(57, 169, 235)"}}>
                                    Add Event
                            </span>
                        }
                    </p>

                </Col>
                <Col sm={12} md={10} className="mt-4">
                    {/* {
                        showToCustomers
                        ?<VolunteerList />
                        :<AddEvent />
                    } */}
                    <AddServices></AddServices>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;