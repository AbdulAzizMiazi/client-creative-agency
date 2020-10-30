import React from 'react';

const ServiceListCard = ({serviceStatus}) => {
    const {_id, title, description, orderStatus, image} = serviceStatus;
    return (
        <div className="col-sm-11 col-md-6 col-lg-5">
           <div className="serviceList-card">
                <div className="card-head">
                    <img src={`data:image/png;base64,${image.img}`} alt={`${title}`} />
                    {
                        orderStatus === 'pending' && <button className="pending-btn myBtn">{orderStatus}</button>
                    }
                    {
                        orderStatus === 'on going' && <button className="on-going-btn myBtn">{orderStatus}</button>
                    }
                    {
                        orderStatus === 'done' && <button className="done-btn myBtn">{orderStatus}</button>
                    }
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div> 
        </div>
    );
};

export default ServiceListCard;