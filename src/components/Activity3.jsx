import pic1 from "../assets/activity3/pic1.png";
import pic2 from "../assets/activity3/pic2.png";


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
            Device
            <span> Anatomy</span>
          </h1>


          <p>
            Disassembling a computer mouse to identify its internal
            components, materials and environmental impact.
          </p>

        </div>


        <div className="activity-big-number">
          03
        </div>

      </div>



      <section className="activity-content section-container">


        <div className="activity-meta-grid">

          <div className="meta-box">

            <span>
              DEVICE
            </span>

            <strong>
              Computer Mouse
            </strong>

          </div>


          <div className="meta-box">

            <span>
              TYPE
            </span>

            <strong>
              Device Anatomy
            </strong>

          </div>


          <div className="meta-box">

            <span>
              PROCESS
            </span>

            <strong>
              Disassembly & Analysis
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



        <div className="activity-detail-grid">

          <div>

            <p className="section-label">
              01 / ACTIVITY DESCRIPTION
            </p>


            <h2>
              Looking inside
              <span> technology.</span>
            </h2>


            <p className="detail-text">

              In this activity, I disassembled a computer mouse
              and examined its internal structure. The individual
              components were extracted and analysed to understand
              their purpose, material composition, environmental
              impact and potential value during e-waste recycling.

            </p>

          </div>


          <div className="highlight-box">

            <span>
              ANALYSIS
            </span>

            <h3>
              Components
              <br />
              Materials
              <br />
              Environmental Impact
            </h3>

          </div>

        </div>



        {/* COMPONENT ANALYSIS */}

        <div className="component-analysis">

          <p className="section-label">
            COMPONENT ANALYSIS
          </p>


          <div className="component-grid">

            <div className="component-card">

              <span>
                01
              </span>

              <h3>
                Plastic
              </h3>

              <p>
                Used for the outer body of the mouse. Improper
                disposal can contribute to long-term plastic waste.
              </p>

            </div>


            <div className="component-card">

              <span>
                02
              </span>

              <h3>
                PCB
              </h3>

              <p>
                Contains electronic components and conductive
                materials that require responsible recycling.
              </p>

            </div>


            <div className="component-card">

              <span>
                03
              </span>

              <h3>
                Metal Components
              </h3>

              <p>
                Certain metals can be recovered and reused through
                appropriate recycling processes.
              </p>

            </div>

          </div>

        </div>



        {/* IMAGES */}

        <div className="evidence-section">

          <div className="evidence-heading">

            <div>

              <p className="section-label">
                02 / PROOF
              </p>

              <h2>
                Anatomy <span>Evidence</span>
              </h2>

            </div>


            <p>
              Photographs documenting the disassembly and
              component analysis process.
            </p>

          </div>


          <div className="evidence-grid two-images">

            <div className="evidence-card">

              <img
                src={pic1}
                alt="Mouse disassembly"
              />

              <span>
                Mouse Disassembly
              </span>

            </div>


            <div className="evidence-card">

              <img
                src={pic2}
                alt="Mouse components"
              />

              <span>
                Extracted Components
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

              This activity helped me understand that even a small
              electronic device contains several different materials
              and components. I learned how disassembly allows
              valuable materials to be identified and recovered,
              while also helping us recognize components that may
              be harmful to the environment if disposed of
              incorrectly.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity3;