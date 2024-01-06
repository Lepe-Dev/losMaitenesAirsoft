import Image1 from "../images/workwithus.jpg"

const WorkWithUs = () => {

    

    return (
            <div className="workWithUs-container">
                <h1 className="title workWithUs-title">Los Maitenes Airsoft - Únete a Nuestro Equipo</h1>
                <p className="paragraph">Bienvenido a Los Maitenes Airsoft, donde la pasión por el airsoft se encuentra con la profesionalidad y la camaradería. Como una empresa próspera de airsoft, estamos siempre en la búsqueda de individuos dedicados que compartan nuestro entusiasmo por el deporte y nuestro compromiso con la excelencia. Únete a nosotros en esta emocionante travesía de crear experiencias inolvidables de airsoft y fomentar una comunidad de entusiastas con intereses similares.</p>
                <img className="about__img" src={Image1} alt="" style={{ width: "100%" }} />
                <h2 className="subtitle">Nuestra Cultura:</h2>
                <p className="paragraph">En Los Maitenes Airsoft, nos enorgullece fomentar una cultura de inclusión, trabajo en equipo y respeto. Nuestro equipo es un grupo diverso de individuos unidos por la pasión común por el airsoft. Creemos en crear un entorno donde cada miembro del equipo se sienta valorado y tenga la oportunidad de aportar sus habilidades y perspectivas únicas.</p>
{/*                 <img className="about__img" src={Image1} alt="" />
 */}            
                <h2 style={{color: "white", fontSize: "3rem", marginTop: "10rem"}}>¿Por Qué Trabajar con Los Maitenes Airsoft?</h2>
                <h2 className="subtitle">1. Comunidad Apasionada:</h2>
                <p className="paragraph">Forma parte de una comunidad apasionada y unida que comparte tu amor por el airsoft. Trabajar con nosotros significa estar rodeado de personas tan dedicadas al deporte como tú.</p>
{/*                 <img className="about__img" src={Image1} alt="" />
 */}                <h2 className="subtitle">2. Crecimiento Profesional:</h2>
                <p className="paragraph">Estamos comprometidos con el desarrollo profesional de nuestros miembros del equipo. Ya sea a través del aprendizaje en el trabajo o de capacitación especializada, ofrecemos oportunidades de crecimiento y avance.</p>
{/*                 <img className="about__img" src={Image1} alt="" />
 */}                <h2 className="subtitle">3. Eventos de Construcción de Equipo:</h2>
                <p className="paragraph">Fortalece vínculos con tus colegas a través de eventos y actividades de construcción de equipo. Desde partidas amistosas de airsoft hasta reuniones sociales, creemos en fomentar un sentido de camaradería entre nuestro equipo.</p>
{/*                 <img className="about__img" src={Image1} alt="" />
 */}                <h2 className="subtitle">Cómo Aplicar:</h2>
                <p className="paragraph">Tan solo debes hacer click en el botón de contacto y seleccionar la opción de correo. Adjunta tu currículum vitae e indicanos tus pretenciones de renta. Nosotros nos pondremos en contacto contigo una vez revisemos tu postulación. <br /><br />
                En Los Maitenes Airsoft, creemos que la clave de nuestro éxito radica en la dedicación y el talento de nuestro equipo. Únete a nosotros y continuemos redefiniendo el mundo del airsoft juntos. Juntos, jugamos con intensidad, apuntamos con precisión y construimos una comunidad que celebra el espíritu del airsoft.
                </p>
{/*                 <img className="about__img" src={Image1} alt="" />
 */}                {/* <p className="paragraph"></p> */}
            </div>
    )
}

export default WorkWithUs