import img1 from "../images/buildingStage-1.jpeg";
import img2 from "../images/buildingStage-2.jpeg";
import img3 from "../images/buildingStage-3.jpeg";
/* import img4 from "../images/buildingStage-4.jpeg"; */
import img5 from "../images/buildingStage-5.jpeg";
import img6 from "../images/buildingStage-6.jpeg";
import img7 from "../images/buildingStage-7.jpeg";
import img8 from "../images/buildingStage-8.jpeg";
/* import img9 from "../images/buildingStage-9.jpeg"; */
import img10 from "../images/buildingStage-10.jpeg";
import img11 from "../images/buildingStage-11.jpeg";


const Gallery = () => {
    return (
        <>
            <h1 className="gallery__title">- Etapa de construcción</h1>
            <div className="gallery">
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img1} alt="" />
                </div>
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img2} alt="" />
                </div>
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img3} alt="" />
                </div>
                {/* <div className="gallery__img__container">
                    <img className="gallery__img" src={img4} alt="" />
                </div> */}
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img5} alt="" />
                </div>
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img6} alt="" />
                </div>
                
                
                {/* <div className="gallery__img__container">
                    <img className="gallery__img" src={img9} alt="" />
                </div> */}
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img10} alt="" />
                </div>
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img11} alt="" />
                </div>
                
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img7} alt="" />
                </div>
                <div className="gallery__img__container">
                    <img className="gallery__img" src={img8} alt="" />
                </div>
            </div>
        </>
    )
}

export default Gallery