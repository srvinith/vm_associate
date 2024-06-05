import React from 'react'
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
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/icon-svg.svg" alt="icon"  />
                                </div>
                                <h3 className='mb-3'>Space Planning</h3>
                                <p>
                                We offer innovative and comprehensive architecture design solutions, ensuring functional and aesthetic excellence in every project.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='700'>
                                <div className="box-circle-img mb-4">
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/ic-2.png" alt="icon" />
                                </div>
                                <h3 className='mb-3'>Architect design</h3>
                                <p>
                                We provide innovative and comprehensive architecture design solutions, ensuring functional and aesthetic excellence in every project.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='1000'>
                                <div className="box-circle-img mb-4">
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/ic-3.png" alt="icon" />
                                </div>
                                <h3 className='mb-3'>Planning , Construction</h3>
                                <p>
                                We specialize in meticulous planning and expert construction services, ensuring projects are delivered on time and to the highest standards of quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                <div className="box-circle-img mb-4">
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/ic-4.png" alt="icon" />
                                </div>
                                <h3 className='mb-3'>Pre-Design</h3>
                                <p>
                                Our Pre-Design services encompass thorough research and analysis, laying the groundwork for innovative and tailored architectural solutions. We prioritize client needs and project feasibility, ensuring a solid foundation for successful designs.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='700'>
                                <div className="box-circle-img mb-4">
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/ic-5.png" alt="icon" />
                                </div>
                                <h3 className='mb-3'>Schematic Design</h3>
                                <p>
                                Our Schematic Design phase entails creative exploration and conceptualization, translating ideas into preliminary architectural solutions. We focus on capturing client vision and functional requirements, shaping the initial framework for the project.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service" data-aos='fade-up' data-aos-delay='1000'>
                                <div className="box-circle-img mb-4">
                                    <img src="https://vmassociatescbe.com/vm%20associates/images/ic-6.png" alt="icon" />
                                </div>
                                <h3 className='mb-3'>Post-Occupancy,</h3>
                                <p>
                                    We evaluate project performance and user satisfaction, refining designs based on feedback to enhance functionality and efficiency. Our comprehensive assessment ensures continued client satisfaction and optimal building operation</p>
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
                            <img src="https://vmassociatescbe.com/vm%20associates/images/fourth.png" alt="fourth" loading='lazy' className='img-fluid fourth-img' />
                        </center>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Services