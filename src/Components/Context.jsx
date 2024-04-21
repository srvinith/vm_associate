// import React, { createContext, useContext, useRef, useEffect } from "react";
// import gsap from "gsap";
// import SplitText from "gsap-trial/dist/SplitText";
// import { ScrollTrigger } from "gsap/all";

// const AnimationContext = createContext();

// export const useAnimation = () => useContext(AnimationContext);

// export const AnimationProvider = ({ children }) => {
//     gsap.registerPlugin(ScrollTrigger, SplitText);

//     // Multiple refs can be managed here
//     const ref1 = useRef(null);
//     const ref2 = useRef(null);

//     useEffect(() => {
//         const splits = [ref1, ref2].map(ref => {
//             if(ref.current){
//                 const split = new SplitText(ref.current, { type: 'chars, words' });
//                 gsap.set(split.chars, { opacity: 0, y: 20 });
//                 ScrollTrigger.batch(split.chars, {
//                     onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
//                     onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
//                     onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
//                     onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
//                     start: 'top bottom',
//                     end: 'bottom top'
//                 });

//                 return () => split.revert();
//             }
//         });

//         // Cleanup function
//         return () => {
//             splits.forEach(split => split && split.revert());
//         };
//     }, []);

//     return (
//         <AnimationContext.Provider value={{ ref1, ref2 }}>
//             {children}
//         </AnimationContext.Provider>
//     );
// };
