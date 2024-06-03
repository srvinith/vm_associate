// import React, { useEffect, useRef, useState } from 'react';

// const Counter = () => {
//   const countDigitRef = useRef([]);
//   const [counterLoaded, setCounterLoaded] = useState(false);

//   const visible = (element) => {
//     if (!element) return false;
//     const rect = element.getBoundingClientRect();
//     const viewHeight = window.innerHeight || document.documentElement.clientHeight;
//     const above = rect.top <= viewHeight;
//     const below = rect.bottom >= 0;
//     return above && below && element.offsetParent !== null; // Checks if element is visible
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       if (countDigitRef.current.every((el) => visible(el))) {
//         if (counterLoaded) return;
//         setCounterLoaded(true);
//         countDigitRef.current.forEach((el, index) => {
//           let start = 0;
//           const end = parseInt(el.textContent, 10);
//           const duration = 5000;
//           const stepTime = Math.abs(Math.floor(duration / end));
//           const timer = setInterval(() => {
//             start += 1;
//             el.textContent = start;
//             if (start === end) {
//               clearInterval(timer);
//             }
//           }, stepTime);
//         });
//       }
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [counterLoaded]);

//   return (

//     <div className="project-count-container">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="counter-con" >
//             <h2 className='count-num' data-aos='fade-down' data-aos-delay='500'>15+</h2>
//             <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Years of Experience</h6>
//           </div>

//         </div>
//         <div className=" col-md-4">
//           <div className="counter-con">
//             <h2 className='count-num' data-aos='fade-down' data-aos-delay='400'>100+</h2>
//             <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Projects</h6>
//           </div>

//         </div>
//         <div className="col-md-4">
//           <div className="counter-con">
//             <h2 className='count-num' data-aos='fade-down' data-aos-delay='400'>60+</h2>
//             <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>Teams</h6>
//           </div>

//         </div>

//       </div>
//     </div>

//   </div>


//   );
// };

// export default Counter;


import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
    const countDigitRefs = useRef([]);
    const [counterLoaded, setCounterLoaded] = useState(false);

    const visible = (element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= viewHeight && rect.bottom >= 0 && element.offsetParent !== null;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (countDigitRefs.current.every((el) => visible(el))) {
                if (counterLoaded) return;
                setCounterLoaded(true);
                countDigitRefs.current.forEach((el) => {
                    const endValue = parseInt(el.textContent, 10);
                    const duration = 5000;
                    let startValue = 0;
                    const stepTime = Math.abs(Math.floor(duration / endValue));

                    const timer = setInterval(() => {
                        startValue += 1;
                        el.textContent = startValue;
                        if (startValue === endValue) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [counterLoaded]);
    const counts=[
        {
            id:1,
            name:"Years of Expertise",
            countNum:'15'
        },
        {
            id:2,
            name:"Tasks",
            countNum:'100'
        },
        {
            id:1,
            name:"Crews",
            countNum:'60'
        }

    ]
    
    

    return (
        <div>
            <div className="project-count-container" data-diff="100">
                <div className="container">
                    <div className="row">
                        {counts.map((count) => (
                            <div className="col-sm-6 col-md-4" key={count.id}>
                                <div className="counter-con">
                                    <h2 className='count-num' data-aos='fade-down' data-aos-delay='400' ref={(el) => (countDigitRefs.current[count.id] = el)}>{count.countNum}+</h2>    
                                    <h6 className='count-text' data-aos='fade-up' data-aos-delay='400'>{count.name}</h6>
                              
                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
