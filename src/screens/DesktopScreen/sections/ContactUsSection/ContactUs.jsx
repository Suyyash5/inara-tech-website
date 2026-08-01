import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const companyLinks = ["About Us", "Our Work", "Demos", "Services"];

const buildLinks = [
  "Web Development and Designing",
  "Business Automation",
  "Explore all",
];

const contactDetails = [
  {
    alt: "Distance",
    icon: "https://c.animaapp.com/ms7q4ygmkQkF2B/img/distance.png",
    text: "Dhangadhi, Nepal",
    width: 14,
    height: 20,
  },
  {
    alt: "Call",
    icon: "https://c.animaapp.com/ms7q4ygmkQkF2B/img/call.png",
    text: "WhatsApp: +9779864320452",
    width: 20,
    height: 20,
  },
  {
    alt: "Drafts",
    icon: "https://c.animaapp.com/ms7q4ygmkQkF2B/img/drafts.png",
    text: "inaratech2025@gmail.com",
    width: 20,
    height: 20,
  },
];

export const ContactUs = ({ onOpenContact }) => {
  const [isSliding, setIsSliding] = useState(false);

  const handleStartProjectClick = () => {
    setIsSliding(true);
    setTimeout(() => {
      if (onOpenContact) {
        onOpenContact("Footer Start a Project");
      }
      setTimeout(() => {
        setIsSliding(false);
      }, 600);
    }, 300);
  };

  return (
    <footer
      className="relative flex w-full flex-col overflow-hidden bg-[#050818] text-white pt-16 pb-8"
      data-model-id="80:719"
    >
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        alt="Abstract global"
        src="https://c.animaapp.com/ms7q4ygmkQkF2B/img/abstract-global-network-connection-on-technology-background-worl.png"
        width={1440}
        height={400}
      />
      
      {/* Footer Main Links Grid */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Col 1: Introduction */}
        <section className="space-y-4" aria-label="Inara Tech introduction">
          <h3 className="font-sans font-black text-2xl tracking-tight text-[#a0ee0f]">INARA TECH</h3>
          <p className="[font-family:'Noto_Sans_HK',Helvetica] text-base lg:text-lg font-medium leading-relaxed text-slate-300">
            Building digital infrastructure for modern businesses in Nepal.
            Launch fast, automate operations, and grow.
          </p>
        </section>

        {/* Col 2: Company Links */}
        <nav aria-labelledby="company-heading" className="space-y-4">
          <h4
            id="company-heading"
            className="[font-family:'Noto_Sans_HK',Helvetica] text-lg lg:text-xl font-bold tracking-tight text-white"
          >
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((link) => (
              <li key={link}>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Noto_Sans_HK',Helvetica] text-base lg:text-lg font-normal text-slate-300 hover:text-white hover:bg-transparent transition-all duration-300 hover:scale-105 hover:translate-x-1"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3: What We Build */}
        <nav aria-labelledby="build-heading" className="space-y-4">
          <h4
            id="build-heading"
            className="[font-family:'Noto_Sans_HK',Helvetica] text-lg lg:text-xl font-bold tracking-tight text-white"
          >
            What We Build
          </h4>
          <ul className="flex flex-col gap-2.5">
            {buildLinks.map((link) => (
              <li key={link}>
                <Button
                  type="button"
                  variant="ghost"
                  className={`h-auto p-0 [font-family:'Noto_Sans_HK',Helvetica] text-base lg:text-lg leading-[normal] tracking-[0] hover:bg-transparent transition-all duration-300 hover:scale-105 hover:translate-x-1 ${
                    link === "Explore all"
                      ? "font-semibold text-[#a0ee0f] underline hover:text-[#a0ee0f]"
                      : "font-normal text-slate-300 hover:text-white"
                  }`}
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 4: Contact Info & CTA */}
        <section aria-labelledby="contact-heading" className="space-y-4">
          <h4
            id="contact-heading"
            className="[font-family:'Noto_Sans_HK',Helvetica] text-lg lg:text-xl font-bold tracking-tight text-white"
          >
            Contact
          </h4>
          <ul className="flex flex-col gap-3">
            {contactDetails.map((detail) => (
              <li key={detail.text} className="flex items-center gap-3 group cursor-pointer">
                <img
                  className="h-5 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-110"
                  alt={detail.alt}
                  src={detail.icon}
                  width={detail.width}
                  height={detail.height}
                />
                <span className="[font-family:'Noto_Sans_HK',Helvetica] text-sm lg:text-base font-normal text-slate-300 transition-colors duration-300 group-hover:text-white">
                  {detail.text}
                </span>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={handleStartProjectClick}
            className="relative mt-4 h-[40px] w-[180px] justify-start overflow-hidden rounded-[22px] bg-white p-0 text-[#050818] shadow-md hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] group"
          >
            <span 
              aria-hidden="true"
              className="absolute top-0 bottom-0 flex w-[45px] items-center justify-center rounded-[22px] bg-[#a0ee0f] transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                left: isSliding ? 'calc(100% - 45px)' : '0px',
              }}
            >
              <span className="flex gap-[2px]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-3 w-1 rounded-full bg-slate-900"
                  />
                ))}
              </span>
            </span>
            <span 
              className="absolute top-0 bottom-0 flex items-center justify-center px-3 [font-family:'Noto_Sans_HK',Helvetica] text-sm font-bold text-[#050818] transition-all duration-300 ease-in-out"
              style={{
                left: isSliding ? '0px' : '45px',
                right: isSliding ? '45px' : '0px',
              }}
            >
              Start a project
            </span>
          </Button>
        </section>
      </div>

      {/* Social Media Graphic Section */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 mt-12 mb-6">
        <img
          className="h-auto max-w-[280px] sm:max-w-[320px] object-contain transition-all duration-300 hover:scale-105 hover:opacity-90 rounded-xl cursor-pointer"
          alt="Social Links"
          src="https://c.animaapp.com/ms7q4ygmkQkF2B/img/group-36.png"
          width={320}
          height={60}
        />
      </div>

      {/* Hero Typography Branding Block */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 my-6">
        <p className="text-sm sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-300">
          Illuminating Ideas with Technology
        </p>
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[160px] font-black tracking-tighter text-white uppercase leading-none mt-1">
          INARA TECH
        </h2>
      </div>

      {/* Legal Footer Bottom Row */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex gap-8" aria-label="Legal">
          <Button
            type="button"
            variant="ghost"
            className="h-auto p-0 [font-family:'Noto_Sans_HK',Helvetica] text-sm sm:text-base font-semibold text-slate-400 hover:text-white hover:bg-transparent transition-all duration-300 hover:scale-105"
          >
            Terms
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-auto p-0 [font-family:'Noto_Sans_HK',Helvetica] text-sm sm:text-base font-semibold text-slate-400 hover:text-white hover:bg-transparent transition-all duration-300 hover:scale-105"
          >
            Privacy
          </Button>
        </nav>
        <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xs sm:text-sm font-medium text-slate-400">
          © 2025 Inara Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
