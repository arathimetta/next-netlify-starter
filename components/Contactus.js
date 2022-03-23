import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import MapLocation from './MapLocation';

export default function Contactus() {
    const styles = {
        "marginBottom": "16px"
    }
    const [formSubmitted, setformSubmitted] = useState(false);
    // const showContactusForm = () => {
    //     setformSubmitted(false);
    // }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wcfc8ls', 'template_pd3xe8n', e.target, 'WcMD_bpnrmAFTGkWD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setformSubmitted(true)
    }
    return (
        <>

            <div className="box-container" id="contactus">
                <h1 className="text-center">Contact Us</h1>
                <img src='/contact_us.jpg' alt="banner" />

                {formSubmitted ? <>
                    <div className="box-container contactusform" id="contactus-thankyou">
                        <div className="margin32px text-center">
                            <h2 style={{ color: '#0095d3' }}>THANKS FOR REACHING OUT</h2>
                            <h4>We'll be in touch soon.</h4>
                            {/* <Button variant="contained" onClick={showContactusForm}>Submit</Button> */}
                            <MapLocation />
                        </div>
                    </div>
                </> :
                    <>
                        <div className="margin32px contactusform">
                            <p>Feel Free to Contact us</p>
                            <form onSubmit={sendEmail}>
                                <input type="text" name="full_name" id="contact_full_name" placeholder="Full Name*" className="form-text required form-control" style={styles} required></input>
                                <input type="number" name="phone_number" id="contact_phone_number" placeholder="Phone Number*" className="form-text required form-control" style={styles} required></input>
                                <input type="email" name="email" id="contact_email" placeholder="Email*" className="form-text required form-control" style={styles} required></input>
                                <textarea id="contact_message" name="message" rows="5" cols="60" placeholder="Message*" className="form-textarea form-control resize-vertical" style={styles} required></textarea>
                                <Button variant="contained" type="submit">Submit</Button>
                            </form>

                            <MapLocation />
                        </div>
                    </>
                }
            </div>

        </>
    );
}
