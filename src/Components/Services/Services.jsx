import "./Services.scss";
import PassionateImg from "../../Assets/Images/passionate.jpg";
import ResourcefulImg from "../../Assets/Images/resourceful.jpg";
import FriendlyImg from "../../Assets/Images/friendly.jpg";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <ul className="services__list">
          <li className="services__item">
            <img
              className="services__img"
              src={PassionateImg}
              alt=""
              width={202}
              height={202}
            />
            <div className="services__bottom">
              <h3 className="services__title">PASSIONATE</h3>
              <p className="services__disc">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </li>
          <li className="services__item">
            <img
              className="services__img"
              src={ResourcefulImg}
              alt=""
              width={202}
              height={202}
            />
            <div className="services__bottom">
              <h3 className="services__title">RESOURCEFUL</h3>
              <p className="services__disc">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </li>
          <li className="services__item">
            <img
              className="services__img"
              src={FriendlyImg}
              alt=""
              width={202}
              height={202}
            />
            <div className="services__bottom">
              <h3 className="services__title">FRIENDLY</h3>
              <p className="services__disc">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Services;
