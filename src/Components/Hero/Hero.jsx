import "./Hero.scss";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <h2 className="hero-left__title">
              Award-winning custom designs and digital branding solutions
            </h2>
            <p className="hero-left__disc">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
