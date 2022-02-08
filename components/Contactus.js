export default function Contactus() {
    const styles = {
        "margin-bottom": "16px"
    }
    return (
        <div className="box-container" id="contactus">
            <h1 className="text-center">Contact Us</h1>
            <img src='https://www.apexsystems.com/sites/default/files/media-images/ContactUs_Hero.jpg' />
            <p>Feel Free to Contact us</p>
            <input type="text" name="full_name" id="contact_full_name" placeholder="Full Name *" className="form-text required form-control" style={styles}></input>
            <input type="text" name="phone_number" id="contact_phone_number" placeholder="Phone Number" className="form-text required form-control" style={styles}></input>
            <textarea id="contact_message" name="message" rows="5" cols="60" placeholder="Message" className="form-textarea form-control resize-vertical" style={styles}></textarea>
            <input type="button" value="Submit" style={styles} />
        </div>
    );
}
