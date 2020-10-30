import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../resources/logos/logo.png';
import AddServices from '../AddServices/AddServices';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './Dashboard.css';

const Dashboard = () => {
    let [showToCustomers, setShowToCustomers] = useState("");
    let [showToAdmin,  setShowToAdmin] = useState("");
    let [isAdmin, setIsAdmin] = useState(null);
    const [userInfo] = useContext(userContext);

    useEffect(()=> {
        fetch(`https://blooming-headland-33626.herokuapp.com/isAdmin?email=${userInfo.email}`)
        .then(res => res.json())
        .then(data => {
            if (data === true) {
                setIsAdmin(true);
                setShowToAdmin("allOrders");
            }
            else if (data === false) {
                setIsAdmin(false);
                setShowToCustomers("order");
            }
        })
    },[])

    return (
        <div className="dashboardDiv mx-sm-2 mx-md-3 mx-5">
            <Row style={{marginLeft: "0px"}}>

                <Col sm={12} md={2} className="sideBar">
                    <Link to="/">
                    <img
                        alt=""
                        src={logo}
                        width="220px"
                        className="d-inline-block align-top mt-3 mb-5"
                    />
                    </Link>
                    {
                        isAdmin !== null &&
                        <div>
                            {
                                isAdmin === false && 
                                <div>
                                    <p onClick={()=>setShowToCustomers("order")}>Order</p>
                                    <p onClick={()=>setShowToCustomers("serviceList")}>Service list</p>
                                    <p onClick={()=>setShowToCustomers("review")}>Review</p>
                                </div>
                            }
                            {
                                isAdmin === true && 
                                <div>
                                    <p onClick={()=>setShowToAdmin("allOrders")}>Service List</p>
                                    <p onClick={()=>setShowToAdmin("addService")}>Add Service</p>
                                    <p onClick={()=>setShowToAdmin("makeAdmin")}>Make Admin</p>
                                </div>
                            }
                        </div>
                    }
                </Col>

                <Col sm={12} md={10} className="mt-4">

                    {   showToCustomers === 'order' && <Order userInfo={userInfo} /> }
                    {   showToCustomers === 'serviceList' && <ServiceList email={userInfo.email} /> }
                    {   showToCustomers === 'review' && <Review userInfo={{email: userInfo.email, name: userInfo.displayName, image: userInfo.photoURL}} /> }
                   
                    {   showToAdmin === 'allOrders' &&  <AllOrders /> }
                    {   showToAdmin === 'addService' && <AddServices /> }
                    {   showToAdmin === 'makeAdmin' &&  <MakeAdmin name={{userName: userInfo.displayName}} /> }
                
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;