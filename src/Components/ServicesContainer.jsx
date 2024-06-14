import React, { useState } from 'react'
import dplan from '../Assets/images/3dplan.png'
import consulnt from '../Assets/images/cons.jpg'
import inov from '../Assets/images/inov.jpg'

const ServicesContainer = () => {
    const [activeSection, setActiveSection] = useState('construction');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };
    return (
        <>
            <div className="container">
                <div className="service-nav">
                    <p
                        className={`ser-nav ${activeSection === 'construction' ? 'active-ser' : ''}`}
                        onClick={() => handleNavClick('construction')}
                    >
                        Civil Construction
                    </p>


                    <p
                        className={`ser-nav ${activeSection === 'interior' ? 'active-ser' : ''}`}
                        onClick={() => handleNavClick('interior')}
                    >
                        Interior Works
                    </p>
                    <p
                        className={`ser-nav ${activeSection === 'facade' ? 'active-ser' : ''}`}
                        onClick={() => handleNavClick('facade')}
                    >
                        Facade/Exterior Work
                    </p>
                </div>
                {
                    activeSection === 'construction' && (
                        <div className="construction">
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                            2D & 3D Planing
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={consulnt} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                            Consulting
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-5">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={inov} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                            Innovation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    activeSection === 'interior' && (
                        <div className="interior">
                            <div className="construction">
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                            Handrail glazing
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                                SS Works
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                               MS Works
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                            Modulation Kitchen
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                            Wardrobe
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                               TV Unit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                            Pooja Unit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                            Aluminium Partition Works
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-4 mt-5">
                                        <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                            <div className="box-center-ser-img">
                                                <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                            </div>
                                            <div className="bottom-box-ser">
                                               TV Unit
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    )
                }


                {
                    activeSection === 'facade' && (
                        <div className="facade">
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                            ACP
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                        Structural Glazing
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-5">
                                    <div className="box-service" data-aos='fade-up' data-aos-delay='400'>
                                        <div className="box-center-ser-img">
                                            <img src={dplan} alt="2d & 3d plan" className='img-fluid' />
                                        </div>
                                        <div className="bottom-box-ser">
                                            Skylights
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>

        </>
    )
}

export default ServicesContainer