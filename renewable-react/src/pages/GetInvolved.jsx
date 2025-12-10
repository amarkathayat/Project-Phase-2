import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeader from "../components/PageHeader.jsx";
import NewsletterSignup from "../components/NewsletterSignup.jsx";

export default function GetInvolved() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("idle");
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/get-involved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, area, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setArea("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <main className="get-involved">
        <PageHeader
          title="Get Involved"
          subtitle="Support renewable energy projects in rural Nepal."
        />

        <section>
          <div className="container get-involved-grid">
            
            <div className="info-column">
              <h2>Ways You Can Help</h2>
              <ul>
                <li>Volunteer with NGOs working on solar and micro-hydro projects.</li>
                <li>Support crowdfunding campaigns for village electrification.</li>
                <li>Share stories about successful renewable energy projects.</li>
                <li>Study renewable energy or community development.</li>
              </ul>

              <h3 style={{ marginTop: "2rem" }}>My Personal Connection</h3>
              <p>
                During a visit to a rural village, I witnessed how access to renewable energy can transform everyday life. A single solar panel enabled children to study after dark and reduced reliance on kerosene lamps. This website aims to highlight the meaningful impact that clean energy can bring to communities across Nepal.
              </p>
            </div>

            
            <div className="form-column">
              <h2>Interested in getting involved?</h2>
              <p>Fill out this form and imagine it sends your interest to a project coordinator.</p>

              <form className="interest-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label>
                  Area of Interest
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="solar">Solar home systems</option>
                    <option value="micro-hydro">Micro-hydro projects</option>
                    <option value="biogas">Biogas and clean cooking</option>
                    <option value="education">Energy education and awareness</option>
                  </select>
                </label>

                <label>
                  Message
                  <textarea
                    placeholder="Tell us why renewable energy in Nepal matters to you..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>

                <button type="submit" className="cta-button">
                  Submit Interest
                </button>
              </form>

              {status === "success" && (
                <p className="success-message">
                  Thank you for your interest! Your message has been recorded.
                </p>
              )}

              {status === "error" && (
                <p className="error-message">{error}</p>
              )}
            </div>
          </div>
        </section>

        <NewsletterSignup title="Want to support projects like these?" />
      </main>
      <Footer />
    </>
  );
}
