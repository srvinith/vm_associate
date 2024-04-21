import React from 'react'
import aboutTwo from '../Assets/images/about-2.png'
import aboutthrid from '../Assets/images/about-third.png'
import star from '../Assets/images/Star-1.svg'
// import TextAnimation from './TextAnimation'

const About = () => {

    return (
        <>
              <div className="top-section About">
                    <div className="container">
                        <div className="service-main-text">
                            <p className='sec-p' data-aos='fade-left' data-aos-delay='400'>About us</p>
                            <h2 className=''  >Our  Construction
                                Studio</h2>
                        </div>
                    </div>
                </div>
                <div className=" projindu-section">
                    <div className="container">
                        <div className="row py-2 md:py-5">
                            <div className="col-md-7">
                                <p className='top-small-shadow'>04/06</p>
                                <h2 className='new-sec-title' data-aos='fade-up' data-aos-delay='600'>About our VM associates</h2>

                                <p className='new-list-paras'>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. <br /> <br />

                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src={aboutTwo} alt="" loading="lazy" className='img-fluid' data-aos='fade-down' data-aos-delay='600' />
                            </div>
                        </div>

                        <div className="row py-5">
                            <div className="col-md-5">
                                <img src={aboutthrid} alt="about-img" loading="lazy" className='img-fluid mb-4 md:mb-0' data-aos='fade-down' data-aos-delay='800' onDurationChange='2s' />
                            </div>
                            <div className="col-md-7">

                                <div className="about-third">
                                    <h2 className='about-third-title' >How we started</h2>
                                    <p >If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend </p>
                                </div>

                                <div className="about-third">
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='300'><p><img src={star} alt="star"  loading='lazy'/></p>
                                        <p className='px-2'>If you are going to use a passage of Lorem
                                            you need to beanything embarrassing.</p>
                                    </div>
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='500'><p><img src={star} alt="star" loading='lazy'/></p>
                                        <p className='px-2'> Passage of Lorem, you need to beanything embarrassing.</p>
                                    </div>
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='700'><p><img src={star} alt="star" loading='lazy'/></p>
                                        <p className='px-2'> Are going to use a passage Lorem Ipsum, you need to beanything embarrassing.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="about-bann">
                        <div className="banner-box" data-aos='fade-down' data-aos-delay='900'>
                            <h2>Get in Touch With Us</h2>
                            <button>CONTACT</button>
                        </div>
                    </div>

                </div>

                {/* <TextAnimation /> */}
        </>
    )
}

export default About