import { useState, useEffect } from 'react';
import scrollImage from "../images/gunShooting.png";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="scroll-container">
            <button
                className={`scroll-up-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <span className='scroll-arrow'>&#8593;</span>
                <img src={scrollImage} alt="Pistola disparando hacia arriba" className="scroll-image" />
            </button>
        </div>
    );
};

export default ScrollButton;