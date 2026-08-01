import React, { useState } from "react";
import { Navbar } from "./Navbar";
import heroBg from "../assets/wireframe-1.webp";

export const HeroSection = ({ onOpenContact }) => {
    const [isSliding, setIsSliding] = useState(false);

    const handleStartProjectClick = () => {
        setIsSliding(true);
        setTimeout(() => {
            onOpenContact("Start a project");
            setTimeout(() => {
                setIsSliding(false);
            }, 600);
        }, 300);
    };
    return (
        <section
            id="home"
            className="relative w-full min-h-screen bg-[#020718] text-white rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[160px] overflow-hidden shadow-2xl flex flex-col justify-between pt-24 lg:pt-32 pb-10"
        >
            {/* Background Image & Ambient Lighting Overlays */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen pointer-events-none animate-float"
                style={{ backgroundImage: `url('${heroBg}')` }}
            />

            {/* Lighting Glow Effects */}
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-float" />
            <div className="absolute bottom-10 left-0 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-blue-600/30 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none animate-float-delayed" />

            {/* Top Navigation Bar */}
            <Navbar onOpenContact={onOpenContact} />

            {/* Responsive Hero Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between my-auto">
                
                {/* 1. Top Right Script Paragraph & Green Quote */}
                <div className="flex justify-end pt-2 sm:pt-4 mb-4 sm:mb-8">
                    <div className="relative flex items-start gap-2 max-w-md sm:max-w-lg lg:max-w-xl text-right">
                        <p className="font-serif italic text-xs sm:text-base lg:text-lg xl:text-[20px] text-slate-300 leading-relaxed tracking-wide opacity-90">
                            we bridge your first handshake , the<br />
                            first impression , and sometimes the<br />
                            only chance you'll get. We build<br />
                            digital experiences that earn trust,<br />
                            drive growth, and make people stay.
                        </p>
                        <span className="text-[#A0EF0F] text-4xl sm:text-6xl lg:text-7xl font-serif leading-none select-none font-black -mt-2">
                            ”
                        </span>
                    </div>
                </div>

                {/* 2. Main Title Block */}
                <div className="text-center md:text-right my-4 sm:my-6 pr-0 md:pr-6 lg:pr-12">
                    <p className="text-white text-sm sm:text-xl lg:text-2xl font-bold tracking-tight mb-1 opacity-95">
                        Illuminating Ideas with Technology
                    </p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px] font-sans font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
                        INARA TECH
                    </h1>
                </div>

                {/* 3. Bottom Grid: Left Pitch Statement + Right Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end my-4 sm:my-8">
                    
                    {/* Left Pitch Statement */}
                    <div className="md:col-span-7 lg:col-span-8 relative pl-8 sm:pl-12">
                        <span className="absolute left-0 -top-6 text-[#3337FF] text-5xl sm:text-7xl lg:text-8xl font-serif leading-none select-none font-black">
                            “
                        </span>
                        <div>
                            <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-[38px] font-bold text-white leading-tight tracking-tight">
                                Helping businesses grow through<br />
                                thoughtful{' '}
                                <span className="text-[#A0EF0F] font-sans font-extrabold">
                                    Technology
                                </span>{' '}
                                and
                            </h2>
                            <p className="font-serif italic text-2xl sm:text-4xl lg:text-[44px] text-[#A0EF0F] mt-1 font-normal leading-none tracking-wide">
                                purposeful design.
                            </p>
                        </div>
                    </div>

                    {/* Right Action Buttons Stack */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end gap-4">
                        {/* Upper Metallic/Gray Get in Touch Button */}
                        <button
                            onClick={() => onOpenContact("Hero Get In Touch")}
                            className="w-48 sm:w-56 py-3 px-6 rounded-full bg-[#C4C4C4] hover:bg-white text-slate-950 font-bold text-sm sm:text-base lg:text-lg shadow-[1px_4px_7.3px_#000000,-1px_-1px_1.3px_#000000] border border-white/60 transition-all duration-300 hover:scale-105 active:scale-95 text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]"
                        >
                            Get in Touch
                        </button>

                        {/* Lower Dual Capsule Pill - Start a Project */}
                        <button
                            onClick={handleStartProjectClick}
                            className="group flex items-center bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20 hover:border-[#A0EF0F]/60 transition-all shadow-xl hover:scale-105 active:scale-95 overflow-hidden"
                        >
                            {/* Green Slotted Grip Pill */}
                            <div 
                                className="bg-[#A0EF0F] px-3.5 py-2 rounded-full flex items-center gap-1 shadow-[0_0_12px_rgba(160,239,15,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(160,239,15,0.85)] group-hover:scale-105"
                                style={{
                                    transform: isSliding ? 'translateX(144px)' : 'none',
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <span className="w-0.5 h-3.5 bg-black/70 rounded-full" />
                                <span className="w-0.5 h-3.5 bg-black/70 rounded-full" />
                                <span className="w-0.5 h-3.5 bg-black/70 rounded-full" />
                                <span className="w-0.5 h-3.5 bg-black/70 rounded-full" />
                                <span className="w-0.5 h-3.5 bg-black/70 rounded-full" />
                            </div>
                            {/* White Text Capsule */}
                            <span 
                                className="bg-white text-slate-950 font-extrabold text-sm sm:text-base lg:text-lg px-5 py-1.5 rounded-full ml-1 transition-all duration-300 group-hover:bg-[#A0EF0F] group-hover:text-black"
                                style={{
                                    transform: isSliding ? 'translateX(-54px)' : 'none',
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                Start a project
                            </span>
                        </button>
                    </div>

                </div>

                {/* 4. Bottom Hashtags Bar */}
                <div className="pt-6 mt-4 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs sm:text-sm lg:text-base font-mono text-[#A0EF0F] tracking-widest">
                    <span className="hover:text-white transition-colors cursor-pointer">#scalable software</span>
                    <span className="hover:text-white transition-colors cursor-pointer">#AI solutions</span>
                    <span className="hover:text-white transition-colors cursor-pointer">#web platforms</span>
                    <span className="hover:text-white transition-colors cursor-pointer">#digital products</span>
                </div>

            </div>
        </section>
    );
};