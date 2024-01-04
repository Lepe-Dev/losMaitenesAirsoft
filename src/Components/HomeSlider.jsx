import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (
        <Slider {...settings} className='slider-container'>
            <div className="slider-item">
                <img src='https://picsum.photos/500/400' alt='Slide 1' />
                <div className="slider-content">
                    <h2>Slide 1</h2>
                    <p>Some info about the slide 1</p>
                </div>
            </div>
            <div className="slider-item">
                <img src='https://picsum.photos/500/400' alt='Slide 2' />
                <div className="slider-content">
                    <h2>Slide 2</h2>
                    <p>Some info about the slide 2</p>
                </div>
            </div>
            <div className="slider-item">
                <img src='https://picsum.photos/500/400' alt='Slide 3' />
                <div className="slider-content">
                    <h2>Slide 3</h2>
                    <p>Some info about the slide 3</p>
                </div>
            </div>
        </Slider>
    );
};

export default HomeSlider;