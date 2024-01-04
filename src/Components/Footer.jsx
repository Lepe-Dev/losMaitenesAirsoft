
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-section section1">
                    <h2>Contáctanos</h2>
                    <p>Correo: losmaitenesairsoft@gmail.com</p>
                    <p>celular: +56 9 1234 5678</p>
                </div>

                <div className="footer-section section2">
                    <h2>Síguenos en: (here to include the social media or sth again.)</h2>
                    <div className="social-icons">
                        {/* Include social icons or links here */}
                        {/* Example: <a href="#" className="social-icon">Icon</a> */}
                    </div>
                </div>

                <div className="footer-bottom section3">
                <p>&copy; 2024 Los Maitenes Airsoft. Derechos reservados.</p>
            </div>
            </div>

            
        </footer>
    );
};

export default Footer;
