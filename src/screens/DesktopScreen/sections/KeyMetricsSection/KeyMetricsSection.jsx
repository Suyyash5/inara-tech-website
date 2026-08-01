import React, { useState, useEffect, useRef } from "react";
import metricsBg from "../../../../assets/desktop-18.webp";

const CountUpNumber = ({ target, suffix = "", duration = 1500, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) {
            setCount(0);
            return;
        }
        let start = 0;
        const end = target;
        const totalFrames = Math.round(duration / 16);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = 1 - Math.pow(1 - frame / totalFrames, 2);
            setCount(Math.floor(progress * end));

            if (frame >= totalFrames) {
                setCount(end);
                clearInterval(counter);
            }
        }, 16);

        return () => clearInterval(counter);
    }, [trigger, target, duration]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
};

export const KeyMetricsSection = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                } else {
                    setHasAnimated(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = () => {
        setHasAnimated(false);
        setTimeout(() => {
            setHasAnimated(true);
        }, 50);
    };

    return (
        <section 
            ref={sectionRef}
            id="metrics" 
            aria-label="Key metrics" 
            className="relative w-full min-h-[500px] lg:min-h-[850px] bg-white text-slate-900 overflow-hidden py-12 lg:py-20 flex flex-col justify-between"
            onMouseEnter={handleMouseEnter}
        >
            {/* Background template */}
            <div 
                className="absolute inset-0 bg-cover bg-bottom pointer-events-none z-0 opacity-15 lg:opacity-30"
                style={{ backgroundImage: `url('${metricsBg}')` }}
            />

            {/* Fluid Responsive Metrics Container */}
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Big Hero Metric */}
                    <div className="lg:col-span-6 flex flex-col items-start justify-center">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center">
                                <svg className="w-10 sm:w-14 lg:w-16 h-28 sm:h-36 lg:h-44 text-[#141757]" viewBox="0 0 60 160" fill="none">
                                    <path d="M30 160V15M30 15L8 37M30 15L52 37" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-7xl sm:text-9xl lg:text-[140px] xl:text-[180px] font-black text-[#141757] tracking-tight leading-none">
                                <CountUpNumber target={80} suffix="+" trigger={hasAnimated} />
                            </h2>
                        </div>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] leading-tight tracking-tight mt-4 pl-2 sm:pl-4 max-w-md">
                            Projects launched<br />
                            into the real world
                        </p>
                    </div>

                    {/* Right Column: 3 Stacked Metrics */}
                    <div className="lg:col-span-6 flex flex-col space-y-10 lg:pl-10">
                        <div className="border-l-4 border-[#3337FF] pl-6">
                            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3337FF] block">
                                <CountUpNumber target={98} suffix="%" trigger={hasAnimated} />
                            </span>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f172a] mt-1 tracking-tight">
                                Clients who chose to<br />work with us again
                            </p>
                        </div>

                        <div className="border-l-4 border-[#A0EF0F] pl-6">
                            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#A0EF0F] block drop-shadow-sm">
                                <CountUpNumber target={10} suffix="+" trigger={hasAnimated} />
                            </span>
                            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#3337FF] font-semibold mt-1 tracking-tight">
                                Countries where our ideas<br />are making an impact
                            </p>
                        </div>

                        <div className="border-l-4 border-[#3337FF] pl-6">
                            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3337FF] block">
                                <CountUpNumber target={1000} suffix="+" duration={2000} trigger={hasAnimated} />
                            </span>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f172a] mt-1 tracking-tight">
                                Hours spent solving real<br />business problems
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};