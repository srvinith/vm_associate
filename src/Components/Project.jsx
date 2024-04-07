import React from 'react'
import cardOne from '../Assets/images/project-card-1.png'
import cardTwo from '../Assets/images/project-card-2.png'
import cardThree from '../Assets/images/project-card-3.png'
import cardFour from '../Assets/images/project-card-4.png'
import cardImgSecond from '../Assets/images/project-second-img.png'
import projImgOne from '../Assets/images/proj-1.png'
import projImgTwo from '../Assets/images/proj-2.png'

const Project = () => {
    return (
        <>
            <div className="top-section project">
                <div className="container">
                    <div className="service-main-text">
                        <p className='sec-p'>Projects</p>
                        <h2 className=''>Construct Design <br />
                            that matters.</h2>
                    </div>
                </div>
            </div>
            <div className="service-second">
                <div className="container">
                    <div className="service-sec-title">
                        <p className='sec-p'>Projects</p>
                        <h2>We do it best.</h2>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-3">
                            <ul className='project-showcase'>
                                <li className='active-card'>All</li>
                                <li>Commercial</li>
                                <li>Residential</li>
                                <li>Other</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="wrapper-card">
                                <a className="cardss" href='projectindu'>
                                    <img src={cardOne} alt="card-img" className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Wildstone Infra Hotel</h6>
                                        <p>2715 Ash Dr. San Jose, South Dakota</p>
                                    </div>
                                </a>
                                <div className="cardss">
                                    <img src={cardTwo} alt="card-img" className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Wish Stone Building</h6>
                                        <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
                                    </div>
                                </div>
                                <div className="cardss">
                                    <img src={cardThree} alt="card-img" className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Mr. Parkinston’s House</h6>
                                        <p>3517 W. Gray St. Utica, Pennsylvania</p>
                                    </div>
                                </div>
                                <div className="cardss">
                                    <img src={cardFour} alt="card-img" className='img-fluid' />
                                    <div className="bot-card">
                                        <h6>Oregano Height</h6>
                                        <p>2464 Royal Ln. Mesa, New Jersey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row my-5">

                        <div className="col-md-5">
                            <img src={cardImgSecond} alt="cardImg" className='card-second-img' />
                        </div>
                        <div className="col-md-7">
                            <div className="p-4 list-para">
                                <div className="">
                                    <h2 className='project-title-section'>The type of work <br /> we do</h2>
                                    <p className='project-sec-para'>
                                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum  repeat predefined.
                                    </p>
                                    <hr />
                                </div>
                                <div className="">
                                    <hr />
                                    <h2 className='project-title-section2'>Finest Quality</h2>
                                    <p className='project-sec-para'>
                                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum  repeat predefined.
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
                        <p className='sec-p'>Projects</p>
                        <h2>Up Coming </h2>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-6">
                            <img src={projImgOne} alt="proj-img" className='img-fluid mob-img' />
                        </div>
                        <div className="col-md-6">
                            <img src={projImgTwo} alt="proj-img" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="proj-banner">
                    <div className="container">
                        <div className="project-banner-sec">
                            <h2>Free consultation with exceptional quality</h2>
                            <button>Get your consultation</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project