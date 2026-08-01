import React, { useState, useEffect } from "react";
import logoImage from "../assets/group-2.webp";
import { Menu, X } from "lucide-react";

export const Navbar = ({ onOpenContact }) => {
    const [activeNav, setActiveNav] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSliding, setIsSliding] = useState(false);

    const handleGetInTouchClick = () => {
        setIsSliding(true);
        setTimeout(() => {
            onOpenContact("Navbar Get In Touch");
            setTimeout(() => {
                setIsSliding(false);
            }, 600);
        }, 300);
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Solutions", href: "#solutions" },
        { name: "Our Work", href: "#our-work" },
        { name: "Services", href: "#services" },
        { name: "Blog", href: "#blog" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.replace('#', ''));
            const scrollPos = window.scrollY + 250;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPos) {
                    setActiveNav(navItems[i].name);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, item) => {
        e.preventDefault();
        setActiveNav(item.name);
        setIsMobileMenuOpen(false);
        const targetId = item.href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="w-full py-4 px-4 sm:px-8 lg:px-12 lg:absolute lg:top-0 lg:left-0 lg:w-full z-50 relative">
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
                {/* Left Brand Logo */}
                <a 
                    href="#home" 
                    onClick={(e) => handleNavClick(e, { name: "Home", href: "#home" })} 
                    className="w-[60px] sm:w-[72.39px] h-[65px] sm:h-[79.22px] block relative flex-shrink-0 origin-left z-50 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                    <img src={logoImage} alt="Inara Tech Logo" className="w-full h-full object-contain" />
                </a>

                {/* Middle Nav Links (Tablet 768px - 1023px & Desktop >= 1024px) */}
                <div className="hidden md:flex items-center gap-5 lg:gap-10 xl:gap-12">
                    {navItems.map((item) => {
                        const isActive = activeNav === item.name;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`group relative text-base lg:text-lg xl:text-xl font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                                    isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                                }`}
                                style={{ fontFamily: "'Noto Sans HK', sans-serif" }}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#7cdb00] rounded-full transition-all duration-300 origin-center ${
                                    isActive ? "opacity-100 scale-x-100 shadow-[0_0_8px_#7cdb00]" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                                }`} />
                            </a>
                        );
                    })}
                </div>

                {/* Right CTA Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    {/* Get In Touch CTA Button */}
                    <button
                        onClick={handleGetInTouchClick}
                        className="group w-[160px] sm:w-[200px] lg:w-[220px] h-[48px] rounded-[30px] transition-all hover:scale-105 active:scale-95 relative flex-shrink-0 overflow-hidden"
                        style={{
                            background: '#A0EF0F',
                            boxShadow: '1px -1px 4.1px #354456, -1px 3px 2.1px -1px #868893, inset 0px -1px 1.3px rgba(0, 0, 0, 0.25), inset 0px 2px 1.9px #181E01, inset 4px 6px 7.4px #40491C',
                        }}
                        aria-label="Get in touch"
                    >
                        <div 
                            className="transition-all duration-300 ease-in-out"
                            style={{
                                position: 'absolute',
                                left: isSliding ? '67.73%' : '0%',
                                right: isSliding ? '0%' : '67.73%',
                                top: '0%',
                                bottom: '0%',
                                background: '#C4C4C4',
                                boxShadow: '-1px -1px 1.3px #000000, 1px 4px 7.3px #000000, inset 0px -1px 0px #FFFFFF, inset 2px 2px 1.2px #FFFFFF',
                                borderRadius: '30px',
                            }}
                        />

                        {/* 5 Vertical Accent Slats */}
                        {[8.64, 11.82, 15, 18.18, 21.36].map((leftPct, i) => (
                            <div 
                                key={i}
                                className="transition-all duration-300 ease-in-out group-hover:scale-y-115 group-hover:brightness-125"
                                style={{
                                    position: 'absolute',
                                    left: isSliding ? `${leftPct + 67.73}%` : `${leftPct}%`,
                                    right: isSliding ? `${30 - leftPct}%` : `${97.73 - leftPct}%`,
                                    top: '28.89%',
                                    bottom: '28.89%',
                                    background: '#D9D9D9',
                                    boxShadow: 'inset 0px -0.5px 0.9px rgba(0, 0, 0, 0.73), inset 0px 0.5px 0.9px #FFFFFF, inset -1px 0px 4px rgba(0, 0, 0, 0.38)',
                                    borderRadius: '5px',
                                }}
                            />
                        ))}

                        <span 
                            className="text-xs sm:text-base lg:text-[18px] xl:text-[20px] transition-all duration-300 ease-in-out"
                            style={{
                                position: 'absolute',
                                left: isSliding ? '5%' : '35%',
                                right: isSliding ? '35%' : '5%',
                                top: '20%',
                                bottom: '20%',
                                fontFamily: "'Noto Sans HK', sans-serif",
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#050818',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Get in touch
                        </span>
                    </button>

                    {/* Mobile Hamburger Menu Toggle Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg bg-[#0e122b] text-white hover:bg-[#1a2046] transition-colors z-50 border border-slate-800"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer Overlay (< 768px) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[70px] bg-slate-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200 border-t border-slate-800">
                    <div className="flex flex-col gap-5 mt-4">
                        {navItems.map((item) => {
                            const isActive = activeNav === item.name;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`text-xl font-medium py-3 px-4 rounded-xl transition-all ${
                                        isActive 
                                            ? "bg-[#A0EF0F]/15 text-[#A0EF0F] border border-[#A0EF0F]/30 font-semibold" 
                                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};
