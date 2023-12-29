import { useState } from 'react';
import logowalkietalkie from "/src/images/walkie-talkie.png";
import logoyoutube from "/src/images/youtube.png";
import logotiktok from "/src/images/tik-tok.png";
import logoinstagram from "/src/images/instagram.png";
import logofacebook from "/src/images/facebook.png";
import logogmail from "/src/images/gmail.png";
import logowhatsapp from "/src/images/whatsapp.png";
const ContactFloatingButton = () => {
    const [ showSocialButtons, setShowSocialButtons ] = useState(false);
    const handleButtonClick = () => {
        setShowSocialButtons(!showSocialButtons);
    };

  return (
    <div className="contact-button-container">
        <button className="contact-button" onClick={handleButtonClick}>
            <img src={logowalkietalkie} alt="Logo Walkie Talkie" className="contact-button-icon" />
            Contacto
        </button>
        
        {showSocialButtons && (
            <div className="social-buttons">
                <button className="gmail"><img src={logogmail} alt="Logo Gmail" className="contact-icons" /></button>
                <button className="whatsapp"><img src={logowhatsapp} alt="Logo Whatsapp" className="contact-icons" /></button>
                <button className="instagram"><img src={logoinstagram} alt="Logo Instagram" className="contact-icons" /></button>
                <button className="tiktok"><img src={logotiktok} alt="Logo Tiktok" className="contact-icons" /></button>
                <button className="facebook"><img src={logofacebook} alt="Logo Facebook" className="contact-icons" /></button>
                <button className="youtube"><img src={logoyoutube} alt="Logo Youtube" className="contact-icons" /></button>
            </div>
        )};
    </div>
  );
};

export default ContactFloatingButton;