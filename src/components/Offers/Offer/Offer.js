import "./Offer.css";

function Offer({ offer }) {
  return (
    <div className="square">
      {offer.name} {offer.isNew && "(nowość)"}
      {offer.isNew && <div className="over-box-circle"></div>}
    </div>
  );
}

export default Offer;
