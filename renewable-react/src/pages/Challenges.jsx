import PageHeader from "../components/PageHeader.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Challenges() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Challenges in Implementing Renewable Energy"
        subtitle="Key obstacles that rural communities continue to face."
      />

      <main className="container">
        <section className="challenges-list">

          <div className="challenge-item">
            <h3>High Installation Cost</h3>
            <p>Many families cannot afford initial system installation.</p>
          </div>

          <div className="challenge-item">
            <h3>Technical Maintenance</h3>
            <p>Lack of trained technicians in remote villages.</p>
          </div>

          <div className="challenge-item">
            <h3>Geographical Barriers</h3>
            <p>Nepal's terrain makes transport and installation difficult.</p>
          </div>

        </section>

        <section className="solutions">
          <h2>Possible Solutions</h2>
          <div className="solutions-grid">

            <div className="solution">
              <h4>Government Subsidies</h4>
              <p>Reduce upfront cost for low-income households.</p>
            </div>

            <div className="solution">
              <h4>Local Training Programs</h4>
              <p>Empower villagers to maintain systems themselves.</p>
            </div>

            <div className="solution">
              <h4>Improved Transport Support</h4>
              <p>Help NGOs bring equipment to remote areas.</p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
