import { useState } from 'react';
import { Link } from "react-router-dom";
import logowalkietalkie from "/src/images/walkie-talkie.png";
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

                <a className="gmail" href='mailto:losmaitenesairsoft@gmail.com'><img src={logogmail} alt="Logo Gmail" className="contact-icons" /></a>
                <Link className="whatsapp" to='https://api.whatsapp.com/send?phone=56931190012' target='_blank'><img src={logowhatsapp} alt="Logo Whatsapp" className="contact-icons" /></Link>

            </div>
        )};
    </div>
  );
};

export default ContactFloatingButton;