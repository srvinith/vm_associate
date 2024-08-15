import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function CustomToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        callback && callback(eventKey);
    });

    return (
        <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function AccordionWithIcons() {
    const [activeKey, setActiveKey] = useState('0');

    const toggleIcon = (key) => {
        if (activeKey === key) {
            setActiveKey(null); // Collapse the currently active accordion item
        } else {
            setActiveKey(key); // Expand the new accordion item
        }
    };

    const data=[
        {
            id:1,
            title:"What types of construction projects does your company specialize in?",
            desc:"Our company specializes in a diverse range of construction projects, including residential, commercial, and industrial developments. We are committed to delivering high-quality craftsmanship tailored to meet the unique needs of each sector."
        },
        {
            id:2,
            title:"What sets your company apart from others in the industry?",
            desc:"Our company stands out in the industry due to our unwavering commitment to quality, innovation, and customer satisfaction. We combine cutting-edge technology with experienced craftsmanship to deliver projects that exceed expectations."
        },
        {
            id:3,
            title:"What is your approach to sustainability in construction?",
            desc:"Our approach to sustainability in construction focuses on using eco-friendly materials and energy-efficient practices, ensuring minimal environmental impact while delivering high-performance buildings. We prioritize long-term sustainability by integrating green technologies and promoting responsible resource management."
        },
    ]

    return (
        <div >
            <Accordion defaultActiveKey="0" >
                {data.map((item) => {
                    const eventKey = `${item.id}`;
                    return (
                        <div key={item.id} className='cards' data-aos='fade-up' data-aos-delay='400'>
                            <div className='d-flex justify-content-between align-items-center card-size'>
                                <CustomToggle as="div" eventKey={eventKey} callback={toggleIcon} className="list-accordion">
                                    <span className='toggle-title'><span className='numb mx-1'>0{item.id+1}</span>{item.title}</span>
                                    <span className='toggleIcon'>{activeKey === eventKey ?<FaMinus /> : <FaPlus />}</span>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey={eventKey}>
                                <div className='my-2 text-[10px]'>
                                    {item.desc}
                                </div>
                            </Accordion.Collapse>
                            
                        </div>
                    );
                })}
            </Accordion>
        </div>
    );
}

export default AccordionWithIcons;
