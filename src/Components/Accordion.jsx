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

    return (
        <div >
            <Accordion defaultActiveKey="0" >
                {[...Array(3).keys()].map((index) => {
                    const eventKey = `${index}`;
                    return (
                        <div key={index} className='cards'>
                            <div className='d-flex justify-content-between align-items-center card-size'>
                                <CustomToggle as="div" eventKey={eventKey} callback={toggleIcon} className="list-accordion">
                                    <span className='toggle-title'><span className='numb'>0{index+1}</span> Best Architect Awards In 2021</span>
                                    <span className='toggleIcon'>{activeKey === eventKey ?<FaMinus /> : <FaPlus />}</span>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey={eventKey}>
                                <div className='my-2'>
                                    <strong >This is the item #{index + 1}'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
