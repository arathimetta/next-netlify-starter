import React, { useState } from "react";
import MobileHeaderContact from "./MobileHeaderContact";


export default function Header() {
  const style1 = {
    display: "flex",
    padding: "24px 24px 0",
    backgroundColor: "white",
    boxShadow: "0px 1px #888888"
  }
  const style2 = {
    marginLeft: "16px",
    marginTop: "2px"
  }


  const [style3, setStyle3] = useState("displaynone");

  const openMenu = () => {

    if (style3 == "displaynone") {
      setStyle3("displayinlinegrid")
    }
    else { setStyle3("displaynone") }
  }
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <nav className="navbar navbar-inverse navbar-fixed-top show-desktop" style={{ fontFamily: '"Muller",sans-serif' }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">TEKSERVS</a>
          </div>
          <ul className="nav navbar-nav" style={{ float: "right" }}>
            <li className="active" ><a href="#" >Home</a></li>
            <li><a href="#aboutus" >About Us</a></li>
            <li><a href="#careers" >Careers</a></li>
            <li><a href="#contactus" >Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <div className="show-mobile fullwidth">
        <div className="hamburgerIcon" style={style1}>
          <div onClick={openMenu}>
            <svg viewBox="0 0 100 80" width="25" height="25">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </div>
          <p style={style2}><strong>TEKSERVS</strong></p>
        </div>
        <div id="mobileHeader" className={style3} style={{ padding: "16px", fontFamily: "'Merienda One', cursive" }}>
          <a className="active" href="#" style={{ height: "24px" }}><span> Home</span></a>
          <a href="#aboutus" style={{ height: "24px" }}><span> About Us</span></a>
          <a href="#careers" style={{ height: "24px" }}><span> Careers</span></a>
          <a href="#services" style={{ height: "24px" }}><span> Services</span></a>
          <a href="#contactus" style={{ height: "24px" }}><span> Contact Us</span></a>
        </div>
      </div>
    </>
  );
}
