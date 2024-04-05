import React, { useState } from 'react'
import testiOne from '../Assets/images/testi-1.png'
import testiTwo from '../Assets/images/testi-2.png'
import testiThree from '../Assets/images/testi-3.png'
import testiFour from '../Assets/images/testi-4.png'
import testiFive from '../Assets/images/testi-5.png'


const Testimonial = () => {
    const testi = [
        {
            id: 1,
            desc: '   We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. 1',
            img: testiOne,
            name: 'Jane Cooper',
            desgination: 'CEO, ABC Corporation'
        },
        {
            id: 2,
            desc: '   We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. 2',
            img: testiTwo,
            name: 'Jane Cooper',
            desgination: 'CEO, ABC Corporation'
        },
        {
            id: 3,
            desc: '   We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level t. 3',
            img: testiThree,
            name: 'Jane Cooper',
            desgination: 'CEO, ABC Corporation'
        },
        {
            id: 4,
            desc: '   We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. 4',
            img: testiFour,
            name: 'Jane Cooper',
            desgination: 'CEO, ABC Corporation'
        },
        {
            id: 5,
            desc: ' We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product ',
            img: testiFive,
            name: 'Jane Cooper',
            desgination: 'CEO, ABC Corporation'
        }
    ]

    const [activeTestiId, setActiveTestiId] = useState(testi[0].id);

    // Function to update the active testimonial ID
    const testiOnes = (id) => {
        setActiveTestiId(id);
    };

    // Find the active testimonial based on activeTestiId
    const activeTesti = testi.find(item => item.id === activeTestiId);


    return (
        <>
            <div className="testi-box-con">
                <center><h2 className='fw-bold'>Few Words From Our Clients</h2></center>

                <div className="testi-content">
                    <p className='quote-mark'> “</p>
                    <p>
                        {activeTesti.desc} {/* Display the description of the active testimonial */}
                    </p>
                </div>

                <div className="testi-profile">
                    {testi.map((item) => (
                        <div className="inner-testi" key={item.id}>
                            <img src={item.img} alt='testi-img' className='img-fluid' onClick={() => testiOnes(item.id)} />
                            {activeTestiId === item.id && ( // Only display name and title for the active testimonial
                                <div className="name-desc">
                                    <p className='name'>{item.name}</p>
                                    <h6>{item.desgination}</h6>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testimonial