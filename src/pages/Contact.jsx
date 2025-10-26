import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Get in Touch with Us</h2>
      <p className="lead text-center mb-5">
        We'd love to hear from you! Whether you have a question about our menu, need to place a custom order, or just want to say hello, feel free to reach out.
      </p>

      <div className="row">
        {/* Contact Information Column */}
        <div className="col-md-5 mb-4">
          <h3 className="mb-3">Our Details</h3>
          
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-envelope-fill me-2"></i> Email Address</h5>
              <p className="card-text">
                <a href="mailto:bakery@example.com" className="text-decoration-none">bakery@example.com</a>
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-telephone-fill me-2"></i> Phone Number</h5>
              <p className="card-text">
                <a href="tel:9999999999" className="text-decoration-none">999-999-9999</a>
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-geo-alt-fill me-2"></i> Address</h5>
              <p className="card-text">
                123 Sweet Treat Lane, Baking City, BC 90210
              </p>
              <a href="https://maps.app.goo.gl/YourMapLinkHere" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">View on Map</a>
            </div>
          </div>
          
          <h3 className="mt-4 mb-3">Business Hours</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Monday - Friday
              <span className="badge bg-success">8:00 AM - 6:00 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Saturday
              <span className="badge bg-warning text-dark">9:00 AM - 4:00 PM</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sunday
              <span className="badge bg-danger">Closed</span>
            </li>
          </ul>

        </div>
        
        {/* Contact Form Column */}
        <div className="col-md-7 mb-4">
          <h3 className="mb-3">Send Us a Message</h3>
          <form className="p-4 border rounded shadow-lg">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit Message</button>
          </form>
        </div>
      </div>
      
      {/* Note: Icons (like bi-envelope-fill) assume you have Bootstrap Icons included in your project. */}
      
    </div>
  );
}