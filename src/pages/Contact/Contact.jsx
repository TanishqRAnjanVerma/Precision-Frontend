import React from 'react'
import '../Contact/contact.css'

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-sec1">
                <h3>
                    Get in Touch with us
                </h3>
                <p>
                    Connect with us for a world of superior products and personalized care at Precision. Reach out to experience the beauty of comfort and confidence.
                </p>
                <br />
                <h6><b>Customer Care:</b> +91-9934569443</h6>

                <h6><b>Email Id:</b> precisionmercentile@.com</h6>

                <h6><b>Head Office:</b> 3rd Floor, Digha Ghat, <br />
                    Saguna More, Patna</h6>

                <h6><b>Corporate Office:</b> 3rd Floor, Yadav Bhawan,<br />
                    Rohini Sector 68, New Delhi</h6>
            </div>
            <div className="contact-sec2">
                <form action="" className='contact-form'>
                    <div class="form-group">
                        <input className="input-field" type="text" id="name" name="name" placeholder="Full Name" required />
                    </div>
                    <div class="form-group">
                        <input className="input-field" type="text" id="name" name="name" placeholder="Mobile No." required />
                    </div>
                    <div class="form-group">
                        <textarea className="input-field" id="message" name="message" rows="4" placeholder="What can we help you with?" required></textarea>
                    </div>
                    <div class="form-group">
                        <button className='submit-btn'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
