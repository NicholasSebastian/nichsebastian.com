import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <section id="contact">
        <h2>Contact Me</h2>
        <form 
          name="Contact" 
          method="POST" 
          data-netlify="true">
          <input 
            type="hidden" 
            name="Contact" />
          <label>
            Name
            <input 
              type="text" 
              name="Name"
              placeholder="John Doe" />
          </label>
          <label>
            Email
            <input 
              type="email" 
              name="Email"
              placeholder="johndoe@abc.com" />
          </label>
          <label>
            Title
            <input 
              type="text" 
              name="Title"
              placeholder="Make me a website" />
          </label>
          <label>
            Message
            <textarea 
              rows={12} 
              name="Message"
              placeholder="For my coffee shop..." />
          </label>
          <div>
            <Link to="/">
              <button type="button">Back</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
