export default function About() {
    return (
        <div className="box-container" id="aboutus">
            <div className="row text-center" style={{ marginTop: '16px' }}>
                <div>
                    <ul style={{ listStyle: 'none', paddingLeft: '0px', marginBottom: '0' }}>
                        <li><i className="fa fa-phone" aria-hidden="true" style={{ marginRight: '8px' }}></i>224 407-5039</li>
                        <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true" style={{ marginRight: '6px' }}></i>info@tekservs.com</a></li>
                    </ul>
                </div>
            </div>
            <h1 className="text-center">ABOUT TEKSERVS</h1>
            <img src='/welcome.jpg' alt="banner" />
            <div className="margin32px">
                <p>Here at TEKSERVS, our mission goes beyond providing technology solutions. We help our clients achieve the highest level of operational excellence so they can focus on what matters - their core business. Through our comprehensive range of services, we ensure our clients stay ahead in the ever-changing technology landscape and maximize their overall success.</p>
                <p>We, at TEKSERVS, would like to your preferred partner and advisor in overcoming your recruitment challenges. The scale of benefits we can offer include the tangible and measurable value in providing quality talent that can meet your exacting needs.</p>
            </div>
        </div>
    );
}
