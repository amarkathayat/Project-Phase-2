import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import NewsletterSignup from "../components/NewsletterSignup.jsx";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Powering Rural Nepal Through Clean Energy</h2>
            <p>
              Renewable technologies are helping remote communities gain reliable, affordable, and sustainable access to electricity.
            </p>
            <Link to="/technologies" className="cta-button">
              Learn More
            </Link>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <h2>Why Renewable Energy Matters in Rural Nepal?</h2>
            <div className="content-grid">
              <div className="text-content">
                <p>
                  In many remote regions of Nepal, access to consistent and affordable electricity remains a challenge. Families often rely on kerosene lamps, firewood, and other traditional sources that are costly, inefficient, and harmful to health.
            
                </p>
                <p>
                  Renewable energy provides a practical and sustainable alternative. Solar, micro-hydro, and biogas systems are helping communities improve daily life, support education, and reduce environmental impact.
                </p>
                <p className="personal-note">
                  A visit to a rural village showed me how even a single solar installation can make a meaningful difference. This website aims to share the positive impact of renewable technologies and raise awareness about their role in Nepal’s development.
                </p>
              </div>

              <div className="image-content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0VjRHZogrnb6SFCMtO9ODxEt-lD_fdhq7A&s"
                  alt="Nepalese village"
                />
                <p className="image-caption">
                  Typical rural village in Nepal where renewable energy is making
                  a difference
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-facts">
          <div className="container">
            <h2>Quick Facts</h2>
            <div className="facts-grid">
              <div className="fact-card">
                <h3>85%</h3>
                <p>Many rural households now use at least one form of renewable energy.</p>
              </div>
              <div className="fact-card">
                <h3>2,000+</h3>
                <p>Micro-hydro systems have been installed across Nepal’s hilly regions.</p>
              </div>
              <div className="fact-card">
                <h3>1.2M</h3>
                <p>Biogas plants are helping reduce indoor air pollution and firewood use.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsletterSignup title="Get updates about renewable energy in Nepal" />
      <Footer />
    </>
  );
}
