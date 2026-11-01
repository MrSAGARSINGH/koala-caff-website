
import "./Footer.scss";

import logo from "../../../assets/logos/logo.webp";

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* ===========================
                TOP CTA
        =========================== */}

        <div className="footer__cta">
          <h2>Ready to Visit Koala Caff?</h2>

          <p>
            Reserve your table today and enjoy handcrafted coffee, delicious
            food and a cozy ambience.
          </p>

          <div className="footer__buttons">
            <a href="#contact" className="footer__primary">
              Book a Table
            </a>

            <a
              href="https://www.google.com/maps/place/KOALA+CAFF/@27.459817,73.2890615,7z/data=!4m10!1m2!2m1!1skoala+cafe!3m6!1s0x396dc970f6b25dcf:0x5b62344db75de96!8m2!3d26.8043098!4d75.8103023!15sCgprb2FsYSBjYWZlWgwiCmtvYWxhIGNhZmWSAQRjYWZl4AEA!16s%2Fg%2F11zcnxwdb0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__secondary"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* ===========================
                GRID
        =========================== */}

        <div className="footer__grid">
          {/* COLUMN 1 */}

          <div className="footer__column">
            <img
              src={logo}
              alt="Koala Caff"
              className="footer__logo"
            />

            <p className="footer__description">
              Experience handcrafted coffee, delicious food and unforgettable
              moments at Koala Caff.
            </p>

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/koalacaff/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>

              <a
                href="https://www.google.com/maps/place/KOALA+CAFF/@27.459817,73.2890615,7z/data=!4m10!1m2!2m1!1skoala+cafe!3m6!1s0x396dc970f6b25dcf:0x5b62344db75de96!8m2!3d26.8043098!4d75.8103023!15sCgprb2FsYSBjYWZlWgwiCmtvYWxhIGNhZmWSAQRjYWZl4AEA!16s%2Fg%2F11zcnxwdb0?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Google Maps"
              >
                <FaMapMarkerAlt aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}

          <div className="footer__column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>

          {/* COLUMN 3 */}

          <div className="footer__column">
            <h3>Opening Hours</h3>

            <p>Monday – Sunday</p>

            <p>10:30 AM – 10:30 PM</p>

            <br />

            <h3>Location</h3>

            <p>
              R.H.B, 68/105, Haldighati Marg,
              <br />
              Sanganer, Pratap Nagar,
              <br />
              Jaipur, Rajasthan 302033
            </p>
          </div>

          {/* COLUMN 4 */}

          <div className="footer__column">
            <h3>Contact Us</h3>

            <a href="tel:+919145908951">
              <FaPhoneAlt />
              <span>+91 9145908951</span>
            </a>

            <a href="mailto:Caffkoala@gmail.com">
              <FaEnvelope />
              <span>Caffkoala@gmail.com</span>
            </a>

            <a
              href="https://www.google.com/maps/place/KOALA+CAFF/@27.459817,73.2890615,7z/data=!4m10!1m2!2m1!1skoala+cafe!3m6!1s0x396dc970f6b25dcf:0x5b62344db75de96!8m2!3d26.8043098!4d75.8103023!15sCgprb2FsYSBjYWZlWgwiCmtvYWxhIGNhZmWSAQRjYWZl4AEA!16s%2Fg%2F11zcnxwdb0?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* ===========================
                BOTTOM
        =========================== */}

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Koala Caff. All Rights Reserved.
          </p>

          <p>Crafted with ❤️ in Jaipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
