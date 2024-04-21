import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function TextAnimation() {
    const textRef = useRef(null);
    const dayRef = useRef(null);
    const timeline = useRef();

    useEffect(() => {
        // Declare variables at the beginning of useEffect
        let mySplitText, daySplit;

        if (textRef.current && dayRef.current) {
            mySplitText = new SplitText(textRef.current, { type: "words,chars" });
            daySplit = new SplitText(dayRef.current, { type: "words,chars" });

            timeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top center",
                    end: "bottom top",
                    toggleActions: "restart none none none"
                }
            })
            .staggerFrom(mySplitText.chars, 0.7, { opacity: 0, scale: 0, left: 250, ease: "circ.easeInOut" }, 0.1)
            .staggerFrom(daySplit.chars, 0.7, { opacity: 0, scale: 0, left: 250, ease: "circ.easeInOut" }, 0.1);
        }

        return () => {
            // Clean up the split instances
            if (mySplitText) mySplitText.revert();
            if (daySplit) daySplit.revert();
        };
    }, []);

    return (
        <div>
            <div ref={textRef} id="million">Million</div>
            <div ref={dayRef} id="day">Day</div>
            <button onClick={() => timeline.current.restart()}>Animate</button>
        </div>
    );
}

export default TextAnimation;
