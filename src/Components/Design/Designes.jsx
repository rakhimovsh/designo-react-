import "./Designes.scss";

function Designes() {
  return (
    <section className="designs-section">
      <div className="container designs-section-container">
        <button className="designs">
          <span className="designs__center">
            <span className="designs__title">WEB DESIGN</span>
            <span className="designs__disc">VIEW PROJECTS</span>
          </span>
        </button>
        <div className="designs-right">
          <button className="designs designs--app">
            <span className="designs__center">
              <span className="designs__title">APP DESIGN</span>
              <span className="designs__disc">VIEW PROJECTS</span>
            </span>
          </button>
          <button className="designs designs--graphic">
            <span className="designs__center">
              <span className="designs__title">GRAPHIC DESIGN</span>
              <span className="designs__disc">VIEW PROJECTS</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Designes;
