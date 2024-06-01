import React from "react";
import bro from "../assets/hallstatt-austria.jpg";
import "../styles/Contact.css";

function Contact() {
  
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${bro})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" id="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" id="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            id="message"
            required
          ></textarea>
          <button type="submit" onClick={test}> Send Message</button>
        </form>
      </div>
    </div>
    
  );
  
}

function test(){
  
  var name = document.getElementById("name")
  alert("thanks "+name.value+" for your message")

}

export default Contact;