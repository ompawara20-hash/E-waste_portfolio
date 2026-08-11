function Activity3({ goHome }) {

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
            ACTIVITY 03
          </p>

          <h1>
            Survey &
            <span> Reflection</span>
          </h1>

          <p>
            A documentation and reflection activity focused on
            observations, findings and the understanding developed
            through the E-Waste Management subject.
          </p>

        </div>

        <div className="activity-big-number">
          03
        </div>

      </div>


      <section className="activity-content section-container">

        <div className="activity-meta-grid">

          <div className="meta-box">
            <span>DATE</span>
            <strong>Add Date</strong>
          </div>

          <div className="meta-box">
            <span>LOCATION</span>
            <strong>VIT Mumbai</strong>
          </div>

          <div className="meta-box">
            <span>TYPE</span>
            <strong>Survey / Academic</strong>
          </div>

          <div className="meta-box">
            <span>STATUS</span>
            <strong className="status">
              ✓ Completed
            </strong>
          </div>

        </div>


        <div className="activity-detail-grid">

          <div>

            <p className="section-label">
              01 / OBJECTIVE
            </p>

            <h2>
              Observe.
              <br />
              Analyse.
              <br />
              <span>Learn.</span>
            </h2>

            <p className="detail-text">
              The objective of this activity was to gather
              observations, understand existing e-waste practices
              and reflect upon the importance of sustainable
              electronic waste management.
            </p>

          </div>


          <div className="highlight-box">

            <span>KEY FOCUS</span>

            <h3>
              Research
              <br />
              Observation
              <br />
              Reflection
            </h3>

          </div>

        </div>


        <div className="activity-description">

          <p className="section-label">
            02 / ACTIVITY DESCRIPTION
          </p>

          <h2>
            Research & <span>Findings</span>
          </h2>

          <p>
            Add the actual description of Activity 3 here. Include
            details about the survey, questions asked, participants,
            observations and major findings.
          </p>

        </div>


        <div className="contribution-section">

          <p className="section-label">
            03 / MY CONTRIBUTION
          </p>

          <div className="contribution-grid">

            <div>
              <span>01</span>
              <h3>Research</h3>
              <p>
                Collected information and researched important
                aspects of e-waste management.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Analysis</h3>
              <p>
                Analysed the information and identified important
                observations from the activity.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Reflection</h3>
              <p>
                Reflected on the findings and connected them with
                responsible environmental practices.
              </p>
            </div>

          </div>

        </div>


        <div className="evidence-section">

          <div className="evidence-heading">

            <div>

              <p className="section-label">
                04 / PROOF
              </p>

              <h2>
                Activity <span>Evidence</span>
              </h2>

            </div>

            <p>
              Add survey screenshots, photographs, reports,
              presentation slides or certificates here.
            </p>

          </div>


          <div className="evidence-grid">

            <div className="evidence-card">
              <div className="evidence-placeholder">
                PHOTO 01
              </div>
              <span>Activity Photograph</span>
            </div>

            <div className="evidence-card">
              <div className="evidence-placeholder">
                SURVEY
              </div>
              <span>Survey / Questionnaire</span>
            </div>

            <div className="evidence-card">
              <div className="evidence-placeholder">
                REPORT
              </div>
              <span>Activity Report</span>
            </div>

          </div>

        </div>


        <div className="learning-section">

          <p className="section-label">
            05 / REFLECTION
          </p>

          <h2>
            Final <span>Reflection</span>
          </h2>

          <div className="reflection-card">

            <div className="quote-mark">
              “
            </div>

            <p>
              Add your final reflection here. Explain what you
              learned from the activity, what surprised you and
              how the experience influenced your understanding
              of e-waste and sustainability.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity3;