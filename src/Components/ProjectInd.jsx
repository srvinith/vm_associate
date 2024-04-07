import React from 'react'
import projiduImg from '../Assets/images/projindu-img.png'
import CarouselDemo from './CarouselProject'

const ProjectInd = () => {
    return (
        <>

            <div className="top-section projectindu">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p'>Projects</p>
                        <h2 className=''>Authentic Villa <br />
                            House</h2>
                    </div>
                </div>
            </div>
            <div className=" projindu-section">
                <div className="container">
                    <div className="row my-5 ">
                        <div className="col-md-6">
                            <img src={projiduImg} alt="projectindu" className='img-fluid' />
                        </div>
                        <div className="col-md-6">

                          <div className="projindu-part">
                          <p style={{color:'#767676'}} className='fs-5'>
                            When Creative was first practiced, it was a movement with moral, philosophical, and aesthetic underpinnings. Immediately after pioneering modernist architects sought to develop a completely new style appropriate for a new post-war social and economic order walls to support the roof.
                            </p>

                            <ul className='mob-list'>
                                <li>
                                    <p className='highlight'>Category :</p>
                                    <p className='shadow-text'>Construction</p>
                                </li>
                                <li>
                                    <p className='highlight'>Client :</p>
                                    <p className='shadow-text'>John Durairaj</p>
                                </li>
                                <li>
                                    <p className='highlight'>Date :</p>
                                    <p className='shadow-text'>25 November  2021</p>
                                </li>
                                <li>
                                    <p className='highlight'>Location :</p>
                                    <p className='shadow-text'>Coimbatore</p>
                                </li>
                            </ul>
                          </div>

                        </div>
                    </div>

                    <div className="service-sec-title py-4">
                        <p className='sec-p'>Interior of Authentic Villa</p>
                        <h2>Gallery</h2>
                    </div>

                    <CarouselDemo/>
                    
                </div>

                <div className="banner-proj-indu">
                    <div className="banner-box">
                        <h2>Authentic Villa</h2>
                        <p>3 Bhk House , Coimbatore India </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInd