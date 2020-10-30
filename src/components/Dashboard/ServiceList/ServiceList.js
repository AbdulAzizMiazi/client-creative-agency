import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceListCard from './ServiceListCard';
import './ServiceList.css';

const ServiceList = ({email}) => {
    const [allServices, setAllServices] = useState([]);
    console.log(allServices);
    useEffect(()=>{
        fetch(`https://blooming-headland-33626.herokuapp.com/userServicesList?email=${email}`)
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return (
        <div>
            <h3 className="pl-5">Order</h3>
            {
                allServices.length !== 0 && 
                <div className="serviceList-div">
                <div className="row">
                {
                    allServices.map(eachService => {
                        return <ServiceListCard 
                            key={eachService._id}
                            serviceStatus={eachService}
                        />
                    })
                }
            </div>
            </div>
            }
        </div>
    );
};

export default ServiceList;