import pic1 from "../assets/activity4/pic1.png";
import pic2 from "../assets/activity4/pic2.png";
import pic3 from "../assets/activity4/pic3.png";


function Activity4({ goHome }) {

  return (

    <main className="activity-page">

      <div className="activity-hero">

        <div className="activity-hero-content">

          <button
            className="back-button"
            onClick={goHome}
          >
            ← Back to Home
          </button>


          <p className="activity-label">
            ACTIVITY 04
          </p>


          <h1>
            Global E-Waste
            <span> Data Analysis</span>
          </h1>


          <p>
            Analysing e-waste generation across different countries
            and presenting insights through data.
          </p>

        </div>


        <div className="activity-big-number">
          04
        </div>

      </div>



      <section className="activity-content section-container">


        {/* META */}

        <div className="activity-meta-grid">

          <div className="meta-box">

            <span>
              ACTIVITY
            </span>

            <strong>
              E-Waste Data Analysis
            </strong>

          </div>


          <div className="meta-box">

            <span>
              TYPE
            </span>

            <strong>
              Data Analysis
            </strong>

          </div>


          <div className="meta-box">

            <span>
              FOCUS
            </span>

            <strong>
              Global E-Waste Generation
            </strong>

          </div>


          <div className="meta-box">

            <span>
              STATUS
            </span>

            <strong className="status">
              ✓ Completed
            </strong>

          </div>

        </div>



        {/* DESCRIPTION */}

        <div className="activity-detail-grid">

          <div>

            <p className="section-label">
              01 / ACTIVITY DESCRIPTION
            </p>


            <h2>
              Understanding e-waste
              <span> through data.</span>
            </h2>


            <p className="detail-text">

              In this activity, I analysed data related to
              electronic waste generation across different
              countries. The objective was to understand global
              patterns, compare countries and identify the
              increasing scale of electronic waste generation.

            </p>

          </div>


          <div className="highlight-box">

            <span>
              ANALYSIS FOCUS
            </span>

            <h3>
              Countries
              <br />
              Generation
              <br />
              Comparison
            </h3>

          </div>

        </div>



        {/* PROJECT LINK */}

        <div className="project-link-section">

          <div className="project-link-icon">
            ↗
          </div>


          <div className="project-link-content">

            <p className="section-label">
              MY WORK
            </p>


            <h2>
              WASTE//ATLAS
            </h2>


            <p>
              Explore my interactive global e-waste intelligence
              project containing the data analysis and visualisation.
            </p>


            <a
              href="https://chic-alfajores-ef4e82.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              Open WASTE//ATLAS
              <span>↗</span>
            </a>

          </div>

        </div>



        {/* DATA IMAGES */}

        <div className="evidence-section">

          <div className="evidence-heading">

            <div>

              <p className="section-label">
                02 / PROOF
              </p>


              <h2>
                Data <span>Evidence</span>
              </h2>

            </div>


            <p>
              Visual evidence of the data analysis and
              observations performed during the activity.
            </p>

          </div>


          <div className="evidence-grid">

            <div className="evidence-card">

              <img
                src={pic1}
                alt="E-waste data analysis"
              />

              <span>
                Global E-Waste Data
              </span>

            </div>


            <div className="evidence-card">

              <img
                src={pic2}
                alt="Country comparison"
              />

              <span>
                Country Comparison
              </span>

            </div>


            <div className="evidence-card">

              <img
                src={pic3}
                alt="E-waste visualization"
              />

              <span>
                Data Visualization
              </span>

            </div>

          </div>

        </div>



        {/* LEARNING */}

        <div className="learning-section">

          <p className="section-label">
            03 / LEARNING
          </p>


          <h2>
            What I <span>Learned</span>
          </h2>


          <div className="reflection-card">

            <div className="quote-mark">
              “
            </div>


            <p>

              This activity helped me understand the scale of the
              global e-waste problem through actual data. I learned
              how data analysis can be used to compare e-waste
              generation between countries and identify patterns
              that are difficult to understand through observations
              alone.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity4;