import React from 'react'
import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css'
import card1 from '../Assets/images/card-1.png'
import card2 from '../Assets/images/card-2.png'
import card3 from '../Assets/images/card-3.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


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

            <Carousel responsive={responsive} >
                <div>
                    <div className="card-img">
                        <img src={card1} alt="slider-img" />
                        <p className="card-text">
                            Interior Designing
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card2} alt="slider-img" />
                        <p className="card-text">
                            Interior Designing
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={card3} alt="slider-img" />
                        <p className="card-text">
                            Interior Designing
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