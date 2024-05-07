import React, { useRef, useEffect} from 'react'
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
import Marquee from 'react-fast-marquee'
import gsap from 'gsap/all'
// import Splitting from 'splitting';
// import '../../node_modules/splitting/dist/splitting.css';
// import ScrollOut from 'scroll-out';


const Home = () => {

  // useEffect(() => {
  //   // Initialize Splitting and ScrollOut
  //   // eslint-disable-next-line no-unused-vars
  //   const splittingInstance = Splitting();
  //   // eslint-disable-next-line no-unused-vars
  //   const scrollOutInstance = ScrollOut({
  //     targets: ".word",
  //     scrollingElement: ".page"
  //   });

  //   // Cleanup function if necessary
  //   return () => {
  //     scrollOutInstance.teardown(); // If the ScrollOut library supports a teardown method
  //   };
  // }, []);


   useEffect(()=>{
    const t1 =gsap.timeline();
    t1.from(".gsap-text",{
      y:200,
      ease:"power4.out",
      delay:1,
      duration:1.8,
      stagger:{
        amount:0.4,
      },
    })
   })


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
        <div className="home">
          <div className="center-text page">
            <small className='mb-2' data-aos='fade-up' data-aos-delay='400'>BUILDING DREAMS , SHAPING FUTURE</small>
            <h1 className='mb-2 px-1 md:px-0'>VM ASSOCIATES</h1>
            <p className=' fs-4 md:fs-3 px-2 md:px-0 word'  >We envision spaces that tells sensational stories by revamping <br /> cozy spaces into exceptional havens.
            </p>
          </div>
        </div>
        <div className="second-hero-section">
          <img src={secondImg} alt="home-img"  loading="lazy"/>
        </div>
      </div>

      {/* ----------------torquee text---------- */}

      <Marquee className="torque-Text ">

        <h2 >EXTERIOR  CONSULTING  AND  CONSTRUCTION</h2>
      </Marquee>


      {/* ---------------total projects count ------------------- */}
      <div className="project-count-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="counter-con" >
                <h2 className='count-num' data-aos='fade-down' data-aos-delay='500'>15+</h2>
                <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Years of Experience</h6>
              </div>

            </div>
            <div className=" col-md-4">
              <div className="counter-con">
                <h2 className='count-num' data-aos='fade-down' data-aos-delay='400'>100+</h2>
                <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Projects</h6>
              </div>

            </div>
            <div className="col-md-4">
              <div className="counter-con">
                <h2 className='count-num' data-aos='fade-down' data-aos-delay='400'>60+</h2>
                <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Teams</h6>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div className="container">
        <Slider />


        {/* ------------------arichtech--------------- */}
        <h2 className='arcitech-text' data-aos='fade-up' data-aos-delay='400'>Architectural design </h2>

        <section>
          <div className="row">
            <div className="col-md-6 md:px-5 mb-2 md:mb-0">
              <img src={sec1} alt="sec-img" className='img-fluid' loading="lazy" />
            </div>
            <div className="col-md-6 px-3 md:px-5">
              <div className="section-title" data-aos='fade-up' data-aos-delay='400'>

                Explore the experts behind our firm


              </div>
              <p data-aos='fade-up' data-aos-delay='600' className='pt-3'>Our creations are crafted with fully provisioned designs by our Professional and Experienced Engineers. With years of experience in the industry, our Engineers possess the knowledge and skills to bring your vision to life. Driven by an intense commitment to creativity and unwavering pursuit of excellence, our engineers tailor exceptional environment , mirroring our clients' distinct personalities and lifestyles.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="row">

            <div className="col-md-6 px-3 md:px-5 ">
              <div className="section-title" data-aos='fade-up' data-aos-delay='400' >
              Address the designs
              </div>
              <p data-aos='fade-up' data-aos-delay='600' className='pt-3'>Immerse yourself in pinnacle of Quality and Luxury in our premium designs.A harmonious blend of style and functionality is the hallmark of our design service. We don't just build structures, we create enduring legacies through exceptional design.
              </p>
            </div>
            <div className="col-md-6 px-1 md:px-5 mt-2 md:mt-0">
              <img src={sec2} alt="sec-img" className='img-fluid' loading="lazy"/>
            </div>
          </div>
        </section>
        <section>
          <div className="section-title why-us" data-aos='fade-up' data-aos-delay='400'>WHY US</div>
          <div className="section-title my-5" data-aos='fade-up' data-aos-delay='600'>

          We enrich the lives of our clients and <br /> inspire them to live their best life.

          </div>
        </section>
      </div>
      <div className="banner-section">
        <div className="banner-center-text">
          <h6 data-aos='fade-up' data-aos-delay='400'>Architecture</h6>
          <p data-aos='fade-up' data-aos-delay='600' className=''>“The greatest designs are not just functional ,They  <br /> evoke emotion and inspire awe.”</p>
          
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
                <img src={prj1} alt="prj1" className='img-fluid' loading="lazy"/>
              </div>
              <div className="col-md-6">
                <img src={prj2} alt="prj2" className='img-fluid mb-4 mob-img' loading="lazy" />
                <img src={prj3} alt="prj3" className='img-fluid' loading="lazy"/>
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className="projects-title">OUR PORTFOLIO</div>
          <div className="section-title mt-3 mb-5 gsap-text">
            WE DESIGN UNIQUE PLACES <br /> THAT TELL A STORY
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={prjb1} alt="prjb1" className='img-fluid' loading="lazy"/>
            </div>
            <div className="col-md-6">
              <img src={prjb2} alt="prjb1" className='img-fluid mob-img' loading="lazy"/>
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
              <img src={prep1} alt="prep1" className='img-fluid p-3' loading="lazy"/>
            </div>
            <div className="col-md-6">
              <img src={prep2} alt="prep2" className='img-fluid p-3' loading="lazy"/>
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
              <div className="main-list p-2 md:p-5">
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
              <img src={listimg} alt="listimg" className='img-fluid p-0 md:p-5' loading="lazy"/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home