import React from 'react'
import Icon from '../Assets/images/icon-svg.svg'
import icTwo from '../Assets/images/ic-2.png'
import icThree from '../Assets/images/ic-3.png'
import icFour from '../Assets/images/ic-4.png'
import icFive from '../Assets/images/ic-5.png'
import icSix from '../Assets/images/ic-6.png'

import fourth from '../Assets/images/fourth.png'
import Testimonial from './Testimonial'

const Services = () => {
    return (
        <>
            <div className="top-section service">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p' data-aos='fade-left' data-aos-delay='400'>Services</p>
                        <h2 className='' data-aos='fade-right' data-aos-delay='400'>Construct Design <br />
                            that matters.</h2>
                    </div>
                </div>
            </div>
            <div className="service-second">
                <div className="container">
                    <div className="service-sec-title">
                        <p className='sec-p'>services</p>
                        <h2>We do it best.</h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon"  />
                                </div>
                                <h3 className='mb-3'>Space Planning</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='700'>
                                <div className="box-circle-img mb-4">
                                    <img src={icTwo} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Architect design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='1000'>
                                <div className="box-circle-img mb-4">
                                    <img src={icThree} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Planning , Construction</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                <div className="box-circle-img mb-4">
                                    <img src={icFour} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Space Planning</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='700'>
                                <div className="box-circle-img mb-4">
                                    <img src={icFive} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Architect design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='1000'>
                                <div className="box-circle-img mb-4">
                                    <img src={icSix} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Planning , Construction</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-third-sec">
                    <div className="container">
                        <p className='sec-p' data-aos='fade-left' data-aos-delay='400'>About nside</p>
                        <h3 className='third-bg-text' data-aos='fade-right' data-aos-delay='400'>We're innovating the way <br />
                            Of Construction .
                        </h3>
                    </div>
                </div>
                <div className="testimonial">
                <Testimonial/>
                </div>

                <div className="fouth-section">
                    <div className="container">
                        <center>
                            <h2 className='fourth-sec-title' data-aos='fade-up' data-aos-delay='400'>Let us help you build.</h2>
                            <p data-aos='fade-up' data-aos-delay='600'>Over 17 years of experience in creating spaces that positively impact people’s lives</p>
                            <img src={fourth} alt="fourth" loading='lazy' className='img-fluid fourth-img' />
                        </center>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Services