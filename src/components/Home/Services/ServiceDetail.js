import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center text-white pt-5 pb-5" >
            <img style={{height: '60px'}} src={service.img} alt="" />
            <h5 className="pt-2 pb-2">{service.name} </h5>
            <p className="text-secondary">Lorem ipsum dolor consent it's a free open source content sharing platform</p>
        </div>
    );
};

export default ServiceDetail;