import React from 'react'
import sliderOne from '../Assets/images/slider-1.png'
import sliderTwo from '../Assets/images/slider-2.png'
import sliderThree from '../Assets/images/slider-3.png'
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css'

const CarouselProject = () => {
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
            {/* <div className="my-2 slider-top-con">
        <h2>
        TAKE A LOOK AT <br /> OUR SERVICES
        </h2>
        <div className="arrow-button">
            <button><FaArrowLeftLong/></button>
            <button className='r-arrow'><FaArrowRightLong /></button>
        </div>
            </div> */}

            <Carousel responsive={responsive} >
                <div>
                    <div className="card-img">
                        <img src={sliderOne} alt="slider-img" />
                        {/* <p className="card-text">
                            Interior Designing
                        </p> */}
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={sliderTwo} alt="slider-img" />
                        {/* <p className="card-text">
                            Interior Designing
                        </p> */}
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={sliderThree} alt="slider-img" />
                        {/* <p className="card-text">
                            Interior Designing
                        </p> */}
                    </div>
                </div>
                <div>
                    <div className="card-img">
                        <img src={sliderOne} alt="slider-img" />
                        {/* <p className="card-text">
                            Interior Designing
                        </p> */}
                    </div>
                </div>

            </Carousel>
        </>
  )
}

export default CarouselProject