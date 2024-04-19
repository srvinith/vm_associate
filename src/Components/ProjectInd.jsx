import React from 'react'
import projiduImg from '../Assets/images/projindu-img.png'
import CarouselDemo from './CarouselProject'

const ProjectInd = () => {
    return (
        <>

            <div className="top-section projectindu">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p' data-aos='fade-left' data-aos-delay='400'>Projects</p>
                        <h2 className='' data-aos='fade-right' data-aos-delay='400'>Authentic Villa <br />
                            House</h2>
                    </div>
                </div>
            </div>
            <div className=" projindu-section">
                <div className="container">
                    <div className="row my-5 ">
                        <div className="col-md-6" data-aos='fade-down' data-aos-delay='600'>
                            <img src={projiduImg} alt="projectindu" className='img-fluid' />
                        </div>
                        <div className="col-md-6">

                          <div className="projindu-part">
                          <p style={{color:'#767676'}} className='fs-6 md:fs-5' data-aos='fade-up' data-aos-delay='400'>
                            When Creative was first practiced, it was a movement with moral, philosophical, and aesthetic underpinnings. Immediately after pioneering modernist architects sought to develop a completely new style appropriate for a new post-war social and economic order walls to support the roof.
                            </p>

                            <ul className='mob-list'>
                                <li>
                                    <p className='highlight' data-aos='fade-up' data-aos-delay='500'>Category :</p>
                                    <p className='shadow-text' data-aos='fade-up' data-aos-delay='500'>Construction</p>
                                </li>
                                <li>
                                    <p className='highlight' data-aos='fade-up' data-aos-delay='500'>Client :</p>
                                    <p className='shadow-text' data-aos='fade-up' data-aos-delay='500'>John Durairaj</p>
                                </li>
                                <li>
                                    <p className='highlight' data-aos='fade-up' data-aos-delay='500'>Date :</p>
                                    <p className='shadow-text' data-aos='fade-up' data-aos-delay='500'>25 November  2021</p>
                                </li>
                                <li>
                                    <p className='highlight' data-aos='fade-up' data-aos-delay='500'>Location :</p>
                                    <p className='shadow-text' data-aos='fade-up' data-aos-delay='500'>Coimbatore</p>
                                </li>
                            </ul>
                          </div>

                        </div>
                    </div>

                    <div className="service-sec-title py-4">
                        <p className='sec-p mob-sec-p' data-aos='fade-up' data-aos-delay='500'>Interior of Authentic Villa</p>
                        <h2 data-aos='fade-up' data-aos-delay='500'>Gallery</h2>
                    </div>

                    <CarouselDemo/>
                    
                </div>

                <div className="banner-proj-indu">
                    <div className="banner-box" data-aos='fade-up' data-aos-delay='500'>
                        <h2>Authentic Villa</h2>
                        <p>3 Bhk House , Coimbatore India </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInd