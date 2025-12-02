import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="container contact-grid">
        
        {/* Left Column: Contact Info */}
        <div className="contact-info-col">
          <h2>Get in touch</h2>
          <p className="contact-subheading">
            Ready to master your campus logistics? Our team is here to design a 
            predictive mobility system tailored specifically to your institution.
          </p>
          <div className="contact-details">
            <p>
              <i className="icon-mail"></i> {/* Placeholder for icon */}
              <a href="mailto:connect@shuttlesmart.org">connect@shuttlesmart.org</a>
            </p>
            <p>
              <i className="icon-phone"></i> {/* Placeholder for icon */}
              <a href="tel:+233201323030">+233 201 323 030</a>
            </p>
            <p>
              <i className="icon-location"></i> {/* Placeholder for icon */}
              ShuttleSmartHQ, Accra, Ghana
            </p>
          </div>
        </div>
        
        {/* Right Column: Form */}
        <div className="contact-form-col">
          <form className="contact-form">
            <div className="form-group-inline">
              <input type="text" placeholder="First name" name="firstName" required />
              <input type="text" placeholder="Last name" name="lastName" required />
            </div>
            <div className="form-group-inline">
              <input type="email" placeholder="Email" name="email" required />
              <input type="tel" placeholder="Phone number" name="phone" />
            </div>

            <label>What brings you here?</label>
            <select name="reason">
              <option value="">Select one</option>
              <option value="demo">Book a Demo</option>
              <option value="support">Technical Support</option>
              <option value="inquire">General Inquiry</option>
            </select>

            <label>What is your role?</label>
            <div className="radio-group">
              <label><input type="radio" name="role" value="logistics" /> Logistics manager</label>
              <label><input type="radio" name="role" value="admin" /> School administrator</label>
              <label><input type="radio" name="role" value="operations" /> Operations Manager</label>
              <label><input type="radio" name="role" value="it" /> IT decision maker</label>
              <label><input type="radio" name="role" value="finance" /> Finance officer</label>
              <label><input type="radio" name="role" value="other" /> Other</label>
            </div>

            <label>Message</label>
            <textarea placeholder="Discuss your current challenges and goals" name="message"></textarea>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="agree" required />
                I agree to the privacy policy
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary btn-submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;