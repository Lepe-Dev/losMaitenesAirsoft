import '../App.css';
const Map = () => {

   /*  const [location, setLocation] = useState('YOUR_EMBEDDED_MAP_URL'); */
    return (
        <section className='about__text-container map__container'>
            <h2 className="subtitle header__map-subtitle">Encuéntranos acá:</h2> 
            <div className="map__container">
                <h2 className='map__subtitle'>Sugerimos tomar Ruta: Lo Colmo - Puchuncaví {'('}Ruta 64 - Ruta 190 - Ruta 180{')'}</h2>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3355.0875265382574!2d-71.439073!3d-32.763411999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ1JzQ4LjMiUyA3McKwMjYnMjAuNyJX!5e0!3m2!1ses!2scl!4v1703340779258!5m2!1ses!2scl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Map