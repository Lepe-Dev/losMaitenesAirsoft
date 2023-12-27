import logoyoutube from "/src/images/youtube.png";
import logotiktok from "/src/images/tik-tok.png";
import logoinstagram from "/src/images/instagram.png";
import logofacebook from "/src/images/facebook.png";


const SocialMediaIcons = () => {
  return (
    <ul className="social-media-list">
      <li>
        <a href="https://www.instagram.com/losmaitenesairsoft"  target="_blank" rel="noopener noreferrer">
          <img className="logo-instagram" src={logoinstagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@losmaitenesairsoft"  target="_blank" rel="noopener noreferrer">
          <img className="logo-tiktok" src={logotiktok} alt="TikTok" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61554488474975&mibextid=YMEMSu"  target="_blank" rel="noopener noreferrer">
          <img className="logo-facebook" src={logofacebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://youtube.com/@losmaitenes"  target="_blank" rel="noopener noreferrer">
          <img className="logo-youtube" src={logoyoutube} alt="Youtube" />
        </a></li>
    </ul>
  )
}

export default SocialMediaIcons