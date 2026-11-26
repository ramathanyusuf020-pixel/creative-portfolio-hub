
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className="section-tag">GET IN TOUCH</span>
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind? Send me a message.
          I'd love to hear from you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
