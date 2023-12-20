import SocialMediaIcons from "./SocialMediaIcons"
const Home = () => {
  return (
    <div className="home-container">
        <div className="logo-container">
            <img src="../../public/images/LosMaitenesChile.png" alt="Logo Los Maitenes Airsoft" />
        </div>
        <div className="home-information">
            <div className="home-information-text">
                <h1 className="home-title">Bienvenidos a Los Maitenes</h1>
                <h2 className="home-subtitle">Una experiencia única de Airsoft</h2>
            </div>
            <SocialMediaIcons />
        </div>
    </div>
  )
}

export default Home