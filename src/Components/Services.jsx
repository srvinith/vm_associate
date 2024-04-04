import React from 'react'
import Icon from '../Assets/images/icon-svg.svg'
import client from '../Assets/images/clients.png'
import fourth from '../Assets/images/fourth.png'

const Services = () => {
    return (
        <>
            <div className="top-section service">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p'>Services</p>
                        <h2 className=''>Construct Design <br />
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
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Space Planning</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Architect design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
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
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Space Planning</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
                                </div>
                                <h3 className='mb-3'>Architect design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mauris accumsan urna eu
                                    pharetra elementum.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="box-service">
                                <div className="box-circle-img mb-4">
                                    <img src={Icon} alt="icon" />
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
                        <p className='sec-p'>About nside</p>
                        <h3 className='third-bg-text'>We're innovating the way <br />
                            Of Construction .
                        </h3>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testi-box-con">
                        <center><h2 className='fw-bold'>Few Words From Our Clients</h2></center>

                        <div className="testi-content">
                            
                               <p className='quote-mark'> “</p> 
                               <p>
                               We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.
                               </p>

                             
                            
                        </div>
                        <img src={client} alt="client"  className='img-fluid'/>

                    </div>
                </div>

                <div className="fouth-section">
                    <div className="container">
                        <center>
                            <h2 className='fourth-sec-title'>Let us help you build.</h2>
                            <p>Over 17 years of experience in creating spaces that positively impact people’s lives</p>
                            <img src={fourth} alt="fourth" className='img-fluid fourth-img' />
                        </center>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Services