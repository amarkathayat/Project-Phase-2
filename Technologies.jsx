// src/pages/Technologies.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Technologies() {
  return (
    <>
      <Navbar />

    
      <section className="page-header">
        <div className="container">
          <h1>Renewable Energy Technologies in Nepal</h1>
          <p>
            Many types of renewable energy systems are helping rural communities access cleaner and more reliable sources of power. The technologies below are some of the most widely used across Nepal.
          </p>
        </div>
      </section>

      <main>
        <section className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="tech-grid">
            
            <article className="tech-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpj4XrgtohXwFcT1hvZbyf_qYVYJXX__nqw&s"
                alt="Solar panels in a sunny rural area"
              />
              <div className="tech-content">
                <h3>Solar Home Systems</h3>
                <p>
                  Small solar panels mounted on rooftops that provide lighting and
                  phone charging for individual households.
                </p>
                <ul>
                  <li>Common in remote hill and mountain districts</li>
                  <li>Low maintenance and easy to install</li>
                  <li>Can replace kerosene lamps completely</li>
                </ul>
              </div>
            </article>

            
            <article className="tech-card">
              <img
                src="https://endev-nepal.org/sites/default/files/styles/news_750xx/public/2021-02/negef-traget.jpg?itok=KVWtMmI1"
                alt="Small hydro power plant on a river"
              />
              <div className="tech-content">
                <h3>Micro-Hydro Systems</h3>
                <p>
                  Micro-hydro systems use the natural flow of rivers and streams found in Nepal’s hilly regions. These small-scale plants can produce enough electricity for entire villages.
        
                </p>
                <ul>
                  <li>Community-managed power stations</li>
                  <li>Works well in steep, river-rich areas</li>
                  <li>Can power lights, small machinery and schools</li>
                </ul>
              </div>
            </article>

            
            <article className="tech-card">
              <img
                src="https://tds-images.thedailystar.net/sites/default/files/customphp/photo/2009/09/30/2009-09-30__b502.jpg"
                alt="Diagram of a biogas plant"
              />
              <div className="tech-content">
                <h3>Biogas Technology</h3>
                <p>
                  Biogas systems convert animal waste and organic materials into clean cooking fuel and a useful fertilizer by-product. This technology is especially valuable in rural farming communities.
                  
                </p>
                <ul>
                  <li>Reduces indoor air pollution from wood and charcoal</li>
                  <li>Provides a cleaner, safer cooking option</li>
                  <li>Helps protect surrounding forests</li>
                  <li>Produces organic fertilizer for crops</li>
                  <li>Saves time spent collecting firewood</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
