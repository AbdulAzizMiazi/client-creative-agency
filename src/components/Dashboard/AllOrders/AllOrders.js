import React, { useEffect, useState } from 'react';
import './AllOrders.css';

const AllOrders = () => {
    let [allOrders, setAllOrders] = useState([]);
    console.log(allOrders);
    useEffect(()=> {
        fetch("https://blooming-headland-33626.herokuapp.com/allOrders")
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    return (
        <div className="ml-3 pt-3">

      <h4 className="mb-4 ml-3 font-weight-bold">All Orders</h4>
      <div className="table-container">
      <div className="myTable pt-3 pb-5 px-2 shadow-lg data-table">
        <table className="table table-borderless table-hover" >
          <thead className="bg-light">
            <tr className="text-secondary">
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Service</th>
              <th scope="col">Volunteer List</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                allOrders.map(eachEvent => {
                    const {_id, customerName, email, service, description, status} = eachEvent;
                    return<tr key={_id}>
                        <td>{customerName}</td>
                        <td>{email}</td>
                        <td>{service}</td>
                        <td>{description}</td>
                        <td>
                            <button className={`myBtn ${status}`}>
                                {status}
                            </button>
                        </td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
      </div>
    </div>
    );
};

export default AllOrders;