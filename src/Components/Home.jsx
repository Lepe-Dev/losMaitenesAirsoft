import SocialMediaIcons from "./SocialMediaIcons"

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img className="logo" src="/images/LosMaitenesChile.png" alt="Logo Los Maitenes Airsoft" />
        <div className="home-information-text">
            <h1 className="home-title">Bienvenidos a Los Maitenes</h1>
            <h2 className="home-subtitle">Una experiencia única de Airsoft</h2>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  )
}

export default Home