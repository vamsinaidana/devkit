import React from 'react'
import  { useState } from "react";

const Getintouch = () => {
   const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    const subject = "DevKit Resource Request";
    const body = `Hello DevKit,

I would like to get developer resources.

My email: ${email}

Please share the relevant resources with me.

Thank you.`;

    window.location.href =
      `mailto:vamsinaidhana24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
     <section className="devkit-newsletter py-3 py-md-4 bottom-animation">
      <div className="container">

        <div className="newsletter-box">

          {/* Left Content */}
          <div className="newsletter-content">

            <div className="newsletter-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <div>
              <h5 className="newsletter-title">
                Need a Developer Resource?
              </h5>

              <p className="newsletter-text">
                Get in touch for developer tools, documentation,
                roadmaps, cheat sheets and learning resources.
              </p>
            </div>

          </div>


          {/* Email Form */}
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >

            <div className="newsletter-input-wrapper">

              <i className="fa-regular fa-envelope newsletter-input-icon"></i>

              <input
                type="email"
                className="form-control newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="newsletter-send-btn"
            >
              <span>Send</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>

          </form>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Getintouch
