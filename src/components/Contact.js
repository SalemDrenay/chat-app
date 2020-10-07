import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/women/31.jpg"></img>
        <div>
          <h4>Kay Richards</h4>
          <div className="status">
              <div className="status-online"></div>
              <div className="status-text">Online</div>
          </div>
        </div>
      </div>
    );
}
  
export default Contact;