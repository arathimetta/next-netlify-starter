import React from "react";
import ServiceBlocks from "./ServiceBlocks";

export default function Services() {
    return (
        <div className="box-container" id="services">
            <h1 className="text-center">Services</h1>
            <img src='https://idctechnologies.com/images/services/banner.jpg' />
            <div className="margin32px">
                <p>At TEKSERVS, we understand the evolving business needs when it comes to IT. With our years of experience, we help you with bespoke solutions under managed IT services, IT staffing and recruiting.</p>
            </div>
            <ServiceBlocks />
        </div>
    );
}
