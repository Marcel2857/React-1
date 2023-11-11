import Offer from "./Offer/Offer";
import offers from "../../data/offers";

function Offers() {
  return (
    <section className="offer" id="offer">
      <div className="main-container">
        <h2 className="question">Czym zajmuje się nasza firma?</h2>
        <div className="offers">
          {offers.map((offer, index) => (
            <Offer offer={offer} key={index}></Offer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
