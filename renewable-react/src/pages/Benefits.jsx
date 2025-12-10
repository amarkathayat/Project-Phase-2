import PageHeader from "../components/PageHeader.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import NewsletterSignup from "../components/NewsletterSignup.jsx";


export default function Benefits() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Benefits of Renewable Energy in Rural Nepal"
        subtitle="Renewable energy plays a vital role in improving living standards, protecting the environment, and supporting long-term development across rural Nepal. Below are some of the key benefits for communities, households, and the country as a whole."
      />

      <main className="container">
        <section className="benefits-grid">

          <div className="benefit-item">
            <div className="benefit-icon">🌱</div>
            <h3>Environmental Protection</h3>
            <p>Reduces reliance on firewood and protects forests.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💡</div>
            <h3>Reliable Lighting</h3>
            <p>Electricity improves productivity and education.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💰</div>
            <h3>Economic Growth</h3>
            <p>Small businesses thrive with reliable energy.</p>
          </div>

        </section>

        <section className="personal-story">
          <h2>A Personal Story</h2>
          <div className="story-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8uWIML7XmvGS006JIrHYckCYcA6QgZl6zA&s" />
            <p className="handwritten">
              “Renewable energy gave this village hope. Children can now study at
              night and families feel safer.”
            </p>
          </div>
        </section>
      </main>
      <NewsletterSignup title="Want to support projects like these?" />
      <Footer />
    </>
  );
}
