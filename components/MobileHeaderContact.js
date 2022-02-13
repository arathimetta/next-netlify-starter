import React from 'react';

const MobileHeaderContact = () => {
    return (
        <div className="row text-center" style={{ marginTop: "16px" }}>
            <div>
                <ul style={{ listStyle: "none", paddingLeft: "0px", marginBottom: "0" }}>
                    <li><i className="fa fa-phone" aria-hidden="true" style={{ marginRight: "8px" }}></i>224 407-5039</li>
                    <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true" style={{ marginRight: "6px" }}></i>info@tekservs.com</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileHeaderContact;