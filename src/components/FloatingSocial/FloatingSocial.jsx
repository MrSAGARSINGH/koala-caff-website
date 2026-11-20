
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./FloatingSocial.scss";

const FloatingSocial = () => {
  const phoneNumber = "919145908951";

  const instagramUrl = "https://www.instagram.com/koalacaff/";

  const whatsappMessage = encodeURIComponent(
    "Hello Koala Caff, I would like to know more about your cafe."
  );

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: instagramUrl,
      className: "instagram",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      className: "whatsapp",
    },
    {
      name: "Call",
      icon: <FaPhoneAlt />,
      url: `tel:+${phoneNumber}`,
      className: "phone",
    },
  ];

  return (
    <div className="floating-social" aria-label="Contact Koala Caff">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={`floating-social__link ${social.className}`}
          aria-label={`${social.name} - Koala Caff`}
          title={social.name}
          target={social.name === "Call" ? undefined : "_blank"}
          rel={
            social.name === "Call"
              ? undefined
              : "noopener noreferrer"
          }
        >
          <span className="floating-social__icon">
            {social.icon}
          </span>
          <span className="floating-social__tooltip">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocial;
