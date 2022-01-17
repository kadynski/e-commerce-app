import React from "react";

const Contact =()=>{
    return (
        <div>
        <div className="contact text-center">
            Company Name<br/>
            Any City<br/>
            Street 123<br/>
            Phone number: <a href="tel:123-456-789" className="contact-link">123-456-789</a><br/>
            <a href="mailto:example@abc.com" className="contact-link">example@abc.com</a>
        </div>
        </div>
    )
};

export default Contact;