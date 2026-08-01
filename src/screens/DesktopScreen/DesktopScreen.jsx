import React, { useState, lazy, Suspense } from "react";
import { HeroSection } from "../../components/HeroSection";
import { GetInTouchModal } from "../../components/GetInTouchModal";
import { KeyMetricsSection } from "./sections/KeyMetricsSection/KeyMetricsSection";
import { ServiceOfferingsSection } from "./sections/ServiceOfferingsSection/ServiceOfferingsSection";

// Optimized local gallery images
import frame1 from "../../assets/gallery/frame-1.webp";
import frame2 from "../../assets/gallery/frame-2.webp";
import frame3 from "../../assets/gallery/frame-3.webp";
import frame4 from "../../assets/gallery/frame-4.webp";
import frame5 from "../../assets/gallery/frame-5.webp";
import frame6 from "../../assets/gallery/frame-6.webp";
import frame7 from "../../assets/gallery/frame-7.webp";
import frame8 from "../../assets/gallery/frame-8.webp";
import frame9 from "../../assets/gallery/frame-9.webp";

// Lazy load off-screen sections to drastically boost initial load performance & Lighthouse score
const AcademyCaseStudySection = lazy(() => import("./sections/AcademyCaseStudySection/AcademyCaseStudySection").then(m => ({ default: m.AcademyCaseStudySection })));
const ClientTestimonialSection = lazy(() => import("./sections/ClientTestimonialSection/ClientTestimonialSection").then(m => ({ default: m.ClientTestimonialSection })));
const ServicePortfolioSection = lazy(() => import("./sections/ServicePortfolioSection/ServicePortfolioSection").then(m => ({ default: m.ServicePortfolioSection })));
const DevelopmentProcessSection = lazy(() => import("./sections/DevelopmentProcessSection/DevelopmentProcessSection").then(m => ({ default: m.DevelopmentProcessSection })));
const DemoWork = lazy(() => import("./sections/DemoWorkSection/DemoWork").then(m => ({ default: m.DemoWork })));
const Products = lazy(() => import("./sections/ProductsSection/Products").then(m => ({ default: m.Products })));
const Technology = lazy(() => import("./sections/TechnologySection/Technology").then(m => ({ default: m.Technology })));
const ContactSection = lazy(() => import("./sections/ContactSection/ContactSection").then(m => ({ default: m.ContactSection })));
const ContactUs = lazy(() => import("./sections/ContactUsSection/ContactUs").then(m => ({ default: m.ContactUs })));

const galleryFrames = [
    {
        className:
            "absolute -top-24 left-[50px] h-[408px] w-[437px] bg-cover bg-center",
        src: frame1,
    },
    {
        className:
            "absolute -top-[238px] left-[501px] h-[408px] w-[438px] bg-cover bg-center",
        src: frame4,
    },
    {
        className:
            "absolute -top-[34px] left-[953px] h-[408px] w-[437px] bg-cover bg-center",
        src: frame7,
    },
    {
        className:
            "absolute top-[328px] left-[50px] h-[411px] w-[437px] bg-cover bg-center",
        src: frame2,
    },
    {
        className:
            "absolute top-[186px] left-[501px] h-[411px] w-[438px] bg-cover bg-center",
        src: frame5,
    },
    {
        className:
            "absolute top-[390px] left-[953px] h-[411px] w-[437px] bg-cover bg-center",
        src: frame8,
    },
    {
        className:
            "absolute top-[755px] left-[50px] h-[411px] w-[437px] bg-cover bg-center",
        src: frame3,
    },
    {
        className:
            "absolute top-[613px] left-[501px] h-[411px] w-[438px] bg-cover bg-center",
        src: frame6,
    },
    {
        className:
            "absolute top-[817px] left-[953px] h-[411px] w-[437px] bg-cover bg-center",
        src: frame9,
    },
];

export const DesktopScreen = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactTopic, setContactTopic] = useState("General Inquiry");

    const handleOpenContact = (topic = "General Inquiry") => {
        setContactTopic(topic);
        setIsContactModalOpen(true);
    };

    return (
        <main
            className="w-full min-w-[320px] overflow-x-hidden bg-slate-950 font-sans text-slate-100"
            data-model-id="1:4"
        >
            <div className="bg-white w-full">
                <HeroSection onOpenContact={handleOpenContact} />
            </div>

            {/* Key Metrics */}
            <KeyMetricsSection />

            {/* Gallery Frames Grid */}
            <section
                className="relative py-12 lg:py-0 lg:h-[1024px] w-full overflow-hidden bg-[#141757]"
                aria-label="Project gallery"
            >
                {/* Desktop Absolute Layout (lg+) */}
                <div className="hidden lg:block relative w-full max-w-[1440px] h-full mx-auto overflow-hidden">
                    {galleryFrames.map((frame) => (
                        <div
                            key={frame.src}
                            className={`${frame.className} rounded-2xl border border-white/5 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 hover:z-30 cursor-pointer`}
                            style={{ backgroundImage: `url(${frame.src})` }}
                        />
                    ))}
                </div>

                {/* Mobile / Tablet Responsive Grid (< lg) */}
                <div className="lg:hidden w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
                    {galleryFrames.map((frame, index) => (
                        <div
                            key={frame.src}
                            className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl shadow-xl border border-white/10 transform hover:scale-105 transition-transform"
                            style={{ backgroundImage: `url(${frame.src})` }}
                        />
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <div id="services" className="scroll-mt-10">
                <ServiceOfferingsSection />
            </div>

            <Suspense fallback={null}>
                {/* Solutions & Academy Case Study */}
                <div id="solutions" className="scroll-mt-10">
                    <AcademyCaseStudySection />
                </div>

                {/* Blog & Testimonials */}
                <div id="blog" className="scroll-mt-10">
                    <ClientTestimonialSection />
                </div>

                {/* Our Work & Showcase */}
                <div id="our-work" className="scroll-mt-10">
                    <ServicePortfolioSection />
                </div>

                {/* Development Process */}
                <div id="process" className="scroll-mt-10">
                    <DevelopmentProcessSection />
                </div>

                <DemoWork />
                <Products onOpenContact={handleOpenContact} />
                <Technology />

                {/* Contact */}
                <ContactSection />

                {/* Contact Us */}
                <ContactUs onOpenContact={handleOpenContact} />
            </Suspense>

            {/* Interactive Contact / Inquiry Modal */}
            <GetInTouchModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                defaultTopic={contactTopic}
            />
        </main>
    );
};
