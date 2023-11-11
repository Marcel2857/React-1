import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-container footer-container">
        <h2 className="end-credits">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </h2>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
