import React from 'react'
import projectcard1 from '../Assets/image/comp-1.png'
import projectcard2 from '../Assets/image/compl-2.png'
import projectcard3 from '../Assets/image/compl-3.png'
import projectcard4 from '../Assets/images/project-card-4.png'
import projectsec from '../Assets/image/side-img.png'
import proj1 from '../Assets/image/ongoing-2.jpg'
import proj2 from '../Assets/image/ongoing-22.png'


const Project = () => {
    return (
        <>
            <div className="top-section project">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p' data-aos='fade-up' data-aos-delay='400'>Projects</p>
                        <h2 className='' data-aos='fade-down' data-aos-delay='400'>Construct Design <br />
                            that matters.</h2>
                    </div>
                </div>
            </div>
            <div className="service-second">
                <div className="container">
                    <div className="service-sec-title">
                        <p className='sec-p' data-aos='fade-up' data-aos-delay='400'>Projects</p>
                        <h2 data-aos='fade-down' data-aos-delay='500'>We do it best.</h2>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-3">
                            <ul className='project-showcase'>
                                <li className='active-card'>All</li>
                                {/* <li>Commercial</li>
                                <li>Residential</li>
                                <li>Other</li> */}
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="wrapper-card">
                                <a className="cardss" data-aos='fade-up' data-aos-delay='400' href='projectindu'>
                                    <img src={projectcard1} alt="card-img" loading='lazy' className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>CSV Hostel</h6>
                                        <p>Coimbatore</p>
                                    </div>
                                </a>
                                <div className="cardss " data-aos='fade-up' data-aos-delay='600'>
                                    <img src={projectcard2} alt="card-img" loading='lazy' className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Wish Stone Building</h6>
                                        <p>Coimbatore </p>
                                    </div>
                                </div>
                                <div className="cardss" data-aos='fade-up' data-aos-delay='400'>
                                    <img src={projectcard3} alt="card-img" loading='lazy' className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Mr. Parkinston’s House</h6>
                                        <p>Coimbatore</p>
                                    </div>
                                </div>
                                <div className="cardss" data-aos='fade-up' data-aos-delay='600'> 
                                    <img src={projectcard4} alt="card-img" loading='lazy' className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Oregano Height</h6>
                                        <p>Coimbatore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row my-5">

                        <div className="col-md-5">
                            <img src={projectsec} alt="cardImg" loading='lazy' className='card-second-img' data-aos='fade-left' data-aos-delay='400'/>
                        </div>
                        <div className="col-md-7">
                            <div className="p-4 list-para">
                                <div className="">
                                    <h2 className='project-title-section' data-aos='fade-up' data-aos-delay='400'>The type of work <br /> we do</h2>
                                    <p className='project-sec-para' data-aos='fade-up' data-aos-delay='400'>
                                    Our work encompasses a diverse range of projects, spanning from residential and commercial construction to real estate development and renovation.With a focus on innovation and quality, we deliver exceptional results tailored to meet the unique needs of each client.
                                    </p>
                                    <hr />
                                </div>
                                <div className="">
                                    <hr />
                                    <h2 className='project-title-section2' data-aos='fade-up' data-aos-delay='500'>Finest Quality</h2>
                                    <p className='project-sec-para' data-aos='fade-up' data-aos-delay='400'>
                                    Our commitment to delivering the finest quality is unwavering, ensuring every project meets the highest standards of excellence and craftsmanship.
                                    </p>
                                    <hr />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="service-sec-title">
                        <p className='sec-p' data-aos='fade-up' data-aos-delay='400'>Projects</p>
                        <h2 data-aos='fade-up' data-aos-delay='400'>Up Coming </h2>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-6">
                            <img src={proj1} alt="proj-img" loading='lazy' className='img-fluid mob-img'  />
                        </div>
                        <div className="col-md-6" >
                            <img src={proj2} alt="proj-img" loading='lazy' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="proj-banner">
                    <div className="container">
                        <div className="project-banner-sec">
                            <h2 data-aos='fade-up' data-aos-delay='400'>Free consultation with exceptional quality</h2>
                           <a href="tel:+919788220868"><button data-aos='fade-up' data-aos-delay='400'>Get your consultation</button></a> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project