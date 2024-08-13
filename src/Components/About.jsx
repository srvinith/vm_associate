import React, { useRef, useState } from 'react'
// import TextAnimation from './TextAnimation'
import about2 from '../Assets/images/about-2.png'
import aboutthird from '../Assets/images/about-third.png'
import star from '../Assets/images/Star-1.svg'

import emailjs from "@emailjs/browser";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";



const About = () => {
    const[open,setOpen] =useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijkesce",
        "template_ry8sfm8",
        form.current,
        "DU0saxAy8N6bOVz8q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


    return (
        <>
              <div className="top-section About">
                    <div className="container">
                        <div className="service-main-text">
                            <p className='sec-p' data-aos='fade-up' data-aos-delay='400'>About us</p>
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

                                V M Associates stands out as a premier construction and real estate firm, renowned for its expertise in building high-quality apartment complexes. With a remarkable 15-year track record in Coimbatore, we have earned a reputation for excellence and reliability in the industry. Our commitment to delivering top-notch construction and real estate services is unparalleled, backed by years of experience and dedication. <br /> <br />
                                
                                 From conceptualization to completion, we ensure each project reflects our unwavering standards of craftsmanship and attention to detail. Our portfolio boasts some of the finest residential developments, characterized by innovative design, superior quality, and customer satisfaction. As a trusted name in the region, we prioritize customer needs, striving to exceed expectations and create lasting value for our clients. With V M Associates, you can trust in our proven ability to bring your vision to life and create enduring spaces that enrich lives and communities.

                                   
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src={about2} alt="abouttwo" loading="lazy" className='img-fluid' data-aos='fade-down' data-aos-delay='600' />
                            </div>
                        </div>

                        <div className="row py-5">
                            <div className="col-md-5">
                                <img src={aboutthird} alt="about-img" loading="lazy" className='img-fluid mb-4 md:mb-0' data-aos='fade-down' data-aos-delay='800' onDurationChange='2s' />
                            </div>
                            <div className="col-md-7">

                                <div className="about-third">
                                    <h2 className='about-third-title' >How we started</h2>
                                    <p >V M Associates began with a vision to revolutionize the construction and real estate sector in Coimbatore, driven by a passion for excellence and innovation. Over the years, we've achieved excellence through meticulous planning, unwavering dedication, and a commitment to delivering superior quality in every project.  </p>
                                </div>

                                <div className="about-third">
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='300'><p><img src={star} alt="star"  loading='lazy'/></p>
                                        <p className='px-2'>Recognition for Sustainable Practices.</p>
                                    </div>
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='500'><p><img src={star} alt="star" loading='lazy'/></p>
                                        <p className='px-2'>Architectural Excellence.</p>
                                    </div>
                                    <div className='d-flex py-3' data-aos='fade-up' data-aos-delay='700'><p><img src={star} alt="star" loading='lazy'/></p>
                                        <p className='px-2'>Client Satisfaction and Trust.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="about-bann">
                        <div className="banner-box" data-aos='fade-down' data-aos-delay='900'>
                            <h2>Get in Touch With Us</h2>
                            <button onClick={()=>setOpen(!open)}>CONTACT</button>
                        </div>
                    </div>

                </div>


                {open &&   <div className="contactform">
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail} className="form-box">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <div className="close-btn"onClick={()=>setOpen(false)}><IoCloseSharp/></div>
      </form>
    </StyledContactForm>
      </div>}

                {/* <TextAnimation /> */}
        </>
    )
}

export default About


const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;