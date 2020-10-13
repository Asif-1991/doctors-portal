import React from 'react';
import cavity from '../../../images/cavity.png';
import flouride from '../../../images/flouride.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from './ServiceDetail';


const servicesData = [
    {
        name: 'Flouride Treatment ',
        img: flouride
    },
    {
        name: 'Cavity Filling ',
        img: cavity
    },
    {
        name: 'Teeth whitening ',
        img: whitening
    },
]

const Services = () => {
    return (

        <section className="pt-5 pb-5">
            <div className="text-center ">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row pt-3">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;