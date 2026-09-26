import pledgeImage from "../assets/activity1/pic1.png";


function Activity1({ goHome }) {

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
            ACTIVITY 01
          </p>


          <h1>
            E-Waste
            <span> Pledge</span>
          </h1>


          <p>
            Taking a pledge to promote responsible e-waste
            management and contribute towards a cleaner and
            more sustainable environment.
          </p>

        </div>


        <div className="activity-big-number">
          01
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
              E-Waste Pledge
            </strong>

          </div>


          <div className="meta-box">

            <span>
              TYPE
            </span>

            <strong>
              Awareness Activity
            </strong>

          </div>


          <div className="meta-box">

            <span>
              SUBJECT
            </span>

            <strong>
              E-Waste Management
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
              A pledge towards
              <span> responsibility.</span>
            </h2>


            <p className="detail-text">

              As part of the E-Waste Management subject, I
              participated in an e-waste awareness pledge.
              The activity focused on developing a sense of
              responsibility towards electronic waste and
              encouraging sustainable disposal practices.

            </p>

          </div>


          <div className="highlight-box">

            <span>
              KEY MESSAGE
            </span>

            <h3>
              Reduce
              <br />
              Reuse
              <br />
              Recycle
            </h3>

          </div>

        </div>



        {/* IMAGE */}

        <div className="evidence-section">

          <div className="evidence-heading">

            <div>

              <p className="section-label">
                02 / PROOF
              </p>

              <h2>
                Activity <span>Evidence</span>
              </h2>

            </div>


            <p>
              Photograph documenting participation in the
              e-waste pledge activity.
            </p>

          </div>


          <div className="single-evidence-grid">

            <div className="large-evidence-card">

              <img
                src={pledgeImage}
                alt="E-waste pledge activity"
              />

              <div className="evidence-caption">
                E-Waste Pledge Activity
              </div>

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

              Through this activity, I understood that managing
              e-waste is not only the responsibility of recycling
              facilities but also of every individual. The pledge
              helped me become more aware of the importance of
              responsible disposal and sustainable electronic
              consumption.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity1;