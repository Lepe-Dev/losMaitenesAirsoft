import SocialMediaIcons from "./SocialMediaIcons"
import losmaitenesimg from "../images/LosMaitenesChile.png"
import HomeSlider from "./HomeSlider"
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="logo-container">
          <img className="logo" src={losmaitenesimg} alt="Logo Los Maitenes Airsoft" />
        </div>
        <div className="home-information-text">
          <h1 className="home-title">Bienvenidos a Los Maitenes</h1>
          <h2 className="home-subtitle">Una experiencia única de Airsoft</h2>
        </div>
        <div className="icons-container">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="separator"></div>
      <HomeSlider />   
    </>
  )
}

export default Home