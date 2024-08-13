import React from 'react'
import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import card1 from '../Assets/images/card-1.png'
import card2 from '../Assets/images/card-2.png'
import card3 from '../Assets/images/card-3.png'


const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <>
            <div className="my-2 slider-top-con">
        <h2>
        TAKE A LOOK AT <br /> OUR SERVICES
        </h2>
        <div className="arrow-button mob-arrow">
            <button><FaArrowLeftLong/></button>
            <button className='r-arrow'><FaArrowRightLong /></button>
        </div>
            </div>

            <Carousel 
             swipeable={true}
             draggable={false}
             showDots={false}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={3000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile"]}
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            
            >
                <div>
                    <div className="card-img" >
                        <img src={card1} alt="slider-img" />
                        <p className="card-text">
                            Commerical Building
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card2} alt="slider-img" />
                        <p className="card-text">
                        Residential Building
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card3} alt="slider-img" />
                        <p className="card-text">
                            Villas
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card1} alt="slider-img" />
                        <p className="card-text">
                        Appratment
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card1} alt="slider-img" />
                        <p className="card-text">
                            Interior Designing
                        </p>
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default Slider