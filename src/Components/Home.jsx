import React, { useRef } from 'react'
import secondImg from '../Assets/images/second-bg.png'
import sec1 from '../Assets/images/sec-1.png'
import sec2 from '../Assets/images/sec-2.png'
import Slider from './Slider'
import AccordionWithIcons from './Accordion'
import prj1 from '../Assets/images/prj-1.png'
import prj2 from '../Assets/images/prj-2.png'
import prj3 from '../Assets/images/prj-3.png'
import prjb1 from '../Assets/images/prjb-1.png'
import prjb2 from '../Assets/images/prjb-2.png'
import prep1 from '../Assets/images/prep-1.png'
import prep2 from '../Assets/images/prep-2.png'
import thumb from '../Assets/images/video-thumb.png'
import listimg from '../Assets/images/list-img.png'

const Home = () => {
  const videoRef = useRef(null);
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <div className="hero-sections">
        <div className="top-section home">
          <div className="center-text">
            <small className='mb-2 '>REALIYSIC / WHERE YOU FILL SAFE</small>
            <h1 className='mb-2 '>VM ASSOCIATES</h1>
            <p className='fs-3'>From cozy apartments to spacious family homes, we <br />
              unde. Sounds good? Start
            </p>
          </div>
        </div>
        <div className="second-hero-section">
          <img src={secondImg} alt="home-img" />
        </div>
      </div>
      {/* ----------------torquee text---------- */}
      <marquee className="torque-Text ">

        <h2 >EXTERIOR  CONSULTING  AND  CONSTRUCTION</h2>
      </marquee>


      {/* ---------------total projects count ------------------- */}
      <div className="project-count-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="counter-con">
                <h2 className='count-num'>15+</h2>
                <h6 className='count-text'>Years of Experience</h6>
              </div>

            </div>
            <div className=" col-md-4">
              <div className="counter-con">
                <h2 className='count-num'>100+</h2>
                <h6 className='count-text'>Projects</h6>
              </div>

            </div>
            <div className="col-md-4">
              <div className="counter-con">
                <h2 className='count-num'>60+</h2>
                <h6 className='count-text'>Teams</h6>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div className="container">
        <Slider />


        {/* ------------------arichtech--------------- */}
        <h2 className='arcitech-text'>Architectural design </h2>

        <section>
          <div className="row">
            <div className="col-md-6 px-5">
              <img src={sec1} alt="sec-img" className='img-fluid' />
            </div>
            <div className="col-md-6 px-5">
              <div className="section-title">
                MEET THE TEAM  <br />BEHIND OUR FIRM
              </div>
              <p>Adipiscing felis ut turpis quis sed ut habitant semper eget sed at ipsum eget enim amet  nunc libero id neque iaculis consequat porttitor eu  eu porttitor sed
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="row">

            <div className="col-md-6 px-5">
              <div className="section-title">
                MEET THE TEAM  <br />BEHIND OUR FIRM
              </div>
              <p>Adipiscing felis ut turpis quis sed ut habitant semper eget sed at ipsum eget enim amet  nunc libero id neque iaculis consequat porttitor eu  eu porttitor sed
              </p>
            </div>
            <div className="col-md-6 px-5">
              <img src={sec2} alt="sec-img" className='img-fluid' />
            </div>
          </div>
        </section>
        <section>
          <div className="section-title why-us">WHY US</div>
          <div className="section-title my-5">

            WE DESIGN UNIQUE PLACES <br /> THAT TELL A STORY

          </div>
        </section>
      </div>
      <div className="banner-section">
        <div className="banner-center-text">
          <h6>Architecture</h6>
          <p>Yet remarkably appearance get him his projection. <br /> Diverted endeavor bed peculiar</p>
        </div>

      </div>

      <div className="container">
        <h2 className='section-title text-center w-100 my-5 '>
          AWARDS  & RECOGNITION <br />
          Acknowledging Our Work in Architecture

        </h2>


        <AccordionWithIcons />

        <section className='project-section'>
          <div className="projects-title">ON GOING PROJECTS</div>
          <div className="section-title mt-3 mb-5">

            WE DESIGN UNIQUE PLACES <br /> THAT TELL A STORY
          </div>

          <div className="img-boxes">
            <div className="row mt-5">
              <div className="col-md-6">
                <img src={prj1} alt="prj1" className='img-fluid' />
              </div>
              <div className="col-md-6">
                <img src={prj2} alt="prj2" className='img-fluid mb-4 mob-img' />
                <img src={prj3} alt="prj3" className='img-fluid' />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="projects-title">OUR PORTFOLIO</div>
          <div className="section-title mt-3 mb-5">
            WE DESIGN UNIQUE PLACES <br /> THAT TELL A STORY
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={prjb1} alt="prjb1" className='img-fluid' />
            </div>
            <div className="col-md-6">
              <img src={prjb2} alt="prjb1" className='img-fluid mob-img' />
            </div>
          </div>
        </section>

        <section>
          <div className="section-title chg">
            WE DESIGN UNIQUE PLACES <br /> THAT TELL A STORY
          </div>
          <div className="date-sec d-flex items-center mt-4 mb-2">
            <div className="">
              <p>DATE</p>
              <p>AUG 2023</p>
            </div>
            <div className="mx-5">
              <p>LOCATION</p>
              <p>Los Angels</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={prep1} alt="prep1" className='img-fluid p-3' />
            </div>
            <div className="col-md-6">
              <img src={prep2} alt="prep2" className='img-fluid p-3' />
            </div>
          </div>
          <div className="d-flex items-center justify-content-between check-mob">
            <div className="section-title chg">
              WE DESIGN UNIQUE  <br /> PLACES THAT TELL A STORY
            </div>
            <div className="date-sec d-flex items-center mt-4 mb-2">
              <div className="">
                <p>DATE</p>
                <p>AUG 2023</p>
              </div>
              <div className="mx-5">
                <p>LOCATION</p>
                <p>Los Angels</p>
              </div>
            </div>
          </div>
        </section>

        <section className=''>
          <div className="mt-5">
            <div className="projects-title">Happy Customers</div>
            <div className="section-title mt-3 mb-5">
              WE DESIGN UNIQUE PLACES THAT<br />  TELL A STORY
            </div>
          </div>
          <video
            ref={videoRef}
            className="full-page-video"
            poster={thumb}
            onClick={togglePlay}
            controls
          >
            <source src="https://www.youtube.com/watch?v=9qQbgyz20YM" type="video" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6">
             <div className="main-list p-5">
             <div className="">
              <small>34 West Menlo — SF, CA</small>
              <p className='fs-5 fw-semibold'>Lorem ipsum dolor sit amet tellus <br />
                consectetur. Non ut sem tellus velit <br />
                tempus curabitur integer </p>
              </div>
              <div className="">
                <small>PHONE / EMAIL</small>
                <p className='fs-5 fw-semibold'>+3 2393 4393 9032</p>
                <p className='fs-5 fw-semibold'>sales@vmassociates.com</p>
              </div>
             </div>
            </div>
            <div className="col-md-6">
              <img src={listimg} alt="listimg" className='img-fluid p-5'/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home