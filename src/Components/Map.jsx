/* import React, { useState } from 'react';
 */const Map = () => {

   /*  const [location, setLocation] = useState('YOUR_EMBEDDED_MAP_URL'); */
    return (
        <div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3355.0875265382574!2d-71.439073!3d-32.763411999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ1JzQ4LjMiUyA3McKwMjYnMjAuNyJX!5e0!3m2!1ses!2scl!4v1703340779258!5m2!1ses!2scl"  allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map