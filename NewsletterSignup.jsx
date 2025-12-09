import { useState } from "react";

export default function NewsletterSignup({ title = "Stay updated" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      const response = await fetch("http://localhost:4000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), 
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      
      setStatus("success");
      setEmail(""); // clear input
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <h2>{title}</h2>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="newsletter-message">
            <span>✔</span>
            Thank you for subscribing! We’ll keep you updated with new information soon.
          </p>
        )}

        {status === "error" && (
          <p className="newsletter-message">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </section>
  );
}
