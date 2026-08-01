import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import iphone1 from "../../../../assets/1.webp";
import iphone2 from "../../../../assets/2.webp";

const testimonials = [
    {
        name: "Sanyam Saxena, Founder, Technology Startup",
        message:
            "From our very first conversation, the team focused on understanding our business before suggesting solutions. The final product felt intuitive, professional, and aligned perfectly with what we envisioned.",
        rating: "https://c.animaapp.com/ms067qo1f69sd7/img/group-15.png",
        className: "top-[295px] left-[14.1%] w-[26.94%] h-[217px]",
        nameClassName: "whitespace-nowrap",
    },
    {
        name: "Riddhima Sethi, Operations Manager",
        message:
            "What stood out most was the communication. Every milestone was transparent, deadlines were respected, and the team made a complex project feel surprisingly simple.",
        rating: "https://c.animaapp.com/ms067qo1f69sd7/img/group-15-1.png",
        className: "top-[92px] left-[53.26%] w-[26.94%] h-[217px]",
        nameClassName: "whitespace-nowrap",
    },
    {
        name: (
            <>
                Dhananjay Shekhawat, Project Lead
                <br />
                Raikar Constructions and LTD
            </>
        ),
        message:
            "The entire process felt collaborative from start to finish. They listened, challenged our ideas when needed, and delivered a product that exceeded our expectations.",
        rating: "https://c.animaapp.com/ms067qo1f69sd7/img/group-15-2.png",
        className: "top-[512px] left-[57.5%] w-[26.94%] h-[217px]",
        nameClassName: "leading-[normal]",
        ratingClassName: "mt-[7px]",
        messageClassName: "mt-[5px]",
    },
    {
        name: "Lakhanpal Shisodia, Director, Food and Supply Chain- Imports & Exports.",
        message:
            "We weren't looking for just another website. We wanted something that represented our brand, and that's exactly what we received. The attention to detail was exceptional.",
        rating: "https://c.animaapp.com/ms067qo1f69sd7/img/group-15-3.png",
        className: "top-[581px] left-[9.17%] w-[26.94%] h-[217px]",
        nameClassName: "leading-[normal]",
        ratingClassName: "mt-[10px]",
        messageClassName: "mt-[5px]",
    },
];

const floatingFrames = [
    {
        src: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-37.svg",
        className: "top-[66px] left-[76.88%] w-[81px] h-[58px]",
    },
    {
        src: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-36.svg",
        className: "top-[255px] left-[31.04%] w-[83px] h-[58px]",
    },
    {
        src: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-33.svg",
        className: "top-[485px] left-[11.39%] w-[81px] h-[58px]",
    },
    {
        src: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-35.svg",
        className: "top-[703px] left-[63.89%] w-[81px] h-[58px]",
    },
];

const insightCards = [
    {
        title: "Technology should feel invisible",
        description:
            "The best digital products don't make people think harder. They make everyday tasks feel effortless. We believe great technology quietly solves problems instead of creating new ones.",
        gradient:
            "bg-[linear-gradient(180deg,rgba(255,255,145,1)_0%,rgba(255,255,255,1)_100%)]",
        className: "top-[1238px] left-[11.39%] rotate-[9.45deg]",
        descriptionClassName: "mt-[22px]",
    },
    {
        title: "Good design starts with listening.",
        description:
            "Before writing code or drawing wireframes, we spend time understanding people, businesses, and challenges. The better we listen, the better we build.",
        gradient:
            "bg-[linear-gradient(180deg,rgba(207,250,129,1)_0%,rgba(255,255,255,1)_100%)]",
        className: "top-[1190px] left-[32.08%] rotate-[-7.07deg]",
        descriptionClassName: "mt-[22px]",
    },
    {
        title: "Launch isn't the finish line.",
        description:
            "A product grows after it's released. We continue improving, refining, and supporting every solution because long-term success matters more than launch day.",
        gradient:
            "bg-[linear-gradient(180deg,rgba(248,161,222,1)_0%,rgba(255,255,255,1)_100%)]",
        className: "top-[1296px] left-[51.18%] rotate-[6.87deg]",
        descriptionClassName: "mt-[22px]",
    },
    {
        title: "Every click should have a purpose.",
        description:
            "Beautiful interfaces are important, but clarity always comes first. Every screen, button, and interaction should help users move forward with confidence.",
        gradient:
            "bg-[linear-gradient(180deg,rgba(132,134,255,1)_0%,rgba(255,255,255,1)_100%)]",
        className: "top-[1222px] left-[69.03%] rotate-[-10.75deg]",
        descriptionClassName: "mt-[22px]",
    },
];

const resourceLinks = [
    {
        label: "Connect with us on Instagram",
        href: "https://www.instagram.com/inara_tech2025/",
        value: "@inara_tech2025",
        valueClassName: "text-[#d804e0]",
    },
    {
        label: "For insights and Blogs on medium",
        href: "https://medium.com/@akshaymohpal.07",
        value: "https://medium.com/@akshaymohpal.07",
        valueClassName: "text-black",
    },
    {
        label: "For development direction follow",
        href: "https://substack.com/@akshaymohpal",
        value: "https://substack.com/@akshaymohpal",
        valueClassName: "text-[#3336ff]",
    },
];

export const ClientTestimonialSection = () => {
    return (
        <section
            aria-label="Client testimonials and why businesses choose INARA"
            className="relative w-full overflow-hidden bg-white py-12 xl:py-0 xl:min-h-[1712px]"
        >
            {/* Desktop Absolute Layout (xl: >= 1280px) */}
            <div className="hidden xl:block relative w-[1440px] h-[1712px] mx-auto top-[19px]">
                <img
                    className="absolute top-[1174px] -left-6 h-[120px] w-[1527px]"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/vector-27.svg"
                />
                <div
                    className="pointer-events-none absolute -top-[14px] left-[274px] [font-family:'Lucida_Sans_Unicode-Regular',Helvetica] text-[586.4px] font-normal leading-[normal] tracking-[-35.18px] text-[#e1e2ff]"
                    aria-hidden="true"
                >
                    “
                </div>
                <div
                    className="pointer-events-none absolute top-[9px] left-[290px] [font-family:'Lucida_Sans_Unicode-Regular',Helvetica] text-[570.4px] font-normal leading-[normal] tracking-[-34.22px] text-black"
                    aria-hidden="true"
                >
                    “
                </div>
                {/* Back-facing iPhone */}
                <img
                    className="absolute select-none pointer-events-none z-10"
                    alt="iPhone Back"
                    src={iphone2}
                    style={{ left: "37.72%", right: "36.63%", top: "5.9%", bottom: "53.17%" }}
                />
                
                {/* Front-facing iPhone */}
                <img
                    className="absolute select-none pointer-events-none z-[15]"
                    alt="iPhone Front"
                    src={iphone1}
                    style={{ left: "32.43%", right: "40.74%", top: "5.92%", bottom: "48.93%" }}
                />
                {testimonials.map((testimonial) => (
                    <Card
                        key={
                            typeof testimonial.name === "string"
                                ? testimonial.name
                                : "Dhananjay Shekhawat"
                        }
                        className={`absolute overflow-hidden rounded-[30px] border border-black/5 bg-[#f8f8f8] shadow-[-4px_7px_23.5px_#00000094,inset_4px_4px_7.4px_#ffffff,inset_-6px_-6px_1.5px_#00000036] z-20 ${testimonial.className} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[-4px_12px_30px_rgba(0,0,0,0.6)] hover:border-black/10 hover:z-30 cursor-pointer`}
                    >
                        <CardContent className="flex h-full flex-col p-0">
                            <h3
                                className={`ml-[22px] mt-[25px] w-[calc(100%-44px)] [font-family:'Noto_Sans_HK',Helvetica] text-base font-medium tracking-[0] text-black ${testimonial.nameClassName}`}
                            >
                                {testimonial.name}
                            </h3>
                            <img
                                className={`ml-[22px] mt-[5px] h-[21px] w-[136px] object-contain object-left ${testimonial.ratingClassName || ""}`}
                                alt="Rating"
                                src={testimonial.rating}
                                width={136}
                                height={21}
                            />
                            <p
                                className={`ml-[22px] mr-[20px] mt-[4px] [font-family:'Noto_Sans_HK',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-[#757575] ${testimonial.messageClassName || ""}`}
                            >
                                {testimonial.message}
                            </p>
                        </CardContent>
                    </Card>
                ))}

                {floatingFrames.map((frame, i) => (
                    <img
                        key={frame.src}
                        className={`absolute z-30 ${frame.className} ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                        alt=""
                        aria-hidden="true"
                        src={frame.src}
                    />
                ))}

                <Button
                    type="button"
                    className="absolute left-[59.44%] top-[291px] h-[48px] w-[131px] rounded-[30px] bg-[#24cc48] p-0 [font-family:'Noto_Sans_HK',Helvetica] text-xl font-medium text-white shadow-[inset_2px_-3px_3.1px_#0000005e,-2px_3px_6.1px_#00000082] hover:bg-[#24cc48]/90 z-20"
                >
                    Connect
                </Button>
                <Button
                    type="button"
                    className="absolute left-[81.39%] top-[529px] h-[48px] w-[131px] rounded-[30px] bg-[#3336ff] p-0 [font-family:'Noto_Sans_HK',Helvetica] text-xl font-medium text-white shadow-[inset_2px_-3px_3.1px_#0000005e,-2px_3px_6.1px_#00000082] hover:bg-[#3336ff]/90 z-20"
                >
                    Join
                </Button>
                <img
                    className="absolute left-[411px] top-[785px] h-[70px] w-[70px] z-20"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/captive-portal.png"
                />
                <div className="absolute left-[326px] top-[923px] h-[58px] w-[791px]">
                    <div className="absolute left-[427px] top-1.5 h-[46px] w-[328px] bg-[#f9f92b]" />
                    <h2 className="relative flex h-full items-center justify-center whitespace-nowrap [font-family:'Noto_Sans_HK',Helvetica] text-5xl font-black leading-[normal] tracking-[0] text-[#141757]">
                        &quot;Why Businesses Choose INARA&quot;
                    </h2>
                </div>
                <nav
                    aria-label="INARA resources"
                    className="absolute left-1/2 top-[987px] flex -translate-x-1/2 flex-col items-center gap-[13px] whitespace-nowrap [font-family:'Noto_Sans_HK',Helvetica] text-xl font-medium leading-[normal] tracking-[0] z-20"
                >
                    {resourceLinks.map((link) => (
                        <p key={link.href} className="m-0 text-center">
                            <span className="text-[#57585f]">{link.label}</span>{" "}
                            <a
                                className={`underline ${link.valueClassName} transition-all duration-300 hover:text-[#3337FF] hover:scale-105 inline-block`}
                                href={link.href}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {link.value}
                            </a>
                        </p>
                    ))}
                </nav>
                {insightCards.map((insight) => (
                    <Card
                        key={insight.title}
                        className={`absolute flex h-[340px] w-[270px] items-start justify-center overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[-1px_7px_29.3px_#00000040] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:z-30 cursor-pointer ${insight.className}`}
                    >
                        <CardContent
                            className={`mt-[70px] h-[223px] w-[242px] p-0 ${insight.gradient}`}
                        >
                            <article className="px-[17px] pt-[26px]">
                                <h3 className="w-[207px] [font-family:'Inter',Helvetica] text-[24.4px] font-bold leading-[normal] tracking-[-1.47px] text-black">
                                    {insight.title}
                                </h3>
                                <p
                                    className={`w-[198px] [font-family:'Inter',Helvetica] text-[13.6px] font-medium leading-[normal] tracking-[0] text-black ${insight.descriptionClassName}`}
                                >
                                    {insight.description}
                                </p>
                            </article>
                        </CardContent>
                    </Card>
                ))}

                <img
                    className="absolute left-96 top-[1174px] h-[151px] w-[151px] object-cover animate-float"
                    alt="Thumb tack plain"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/thumb-tack-2-plain-2.png"
                />
                <img
                    className="absolute left-[862px] top-[1241px] h-[151px] w-[151px] object-cover animate-float-delayed"
                    alt="Thumb tack plain"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/thumb-tack-2-plain-2.png"
                />
            </div>

            {/* Mobile / Tablet Responsive Layout (< xl) */}
            <div className="xl:hidden w-full max-w-5xl mx-auto px-6 space-y-16">
                
                {/* 1. Mobile Testimonials Header */}
                <div className="text-center space-y-3">
                    <span className="text-[#3337FF] font-mono text-sm tracking-widest uppercase font-bold">Client Reviews</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141757]">
                        What Clients Say About Us
                    </h2>
                </div>

                {/* 2. Mobile Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <div 
                            key={typeof t.name === "string" ? t.name : "dhananjay"}
                            className="bg-[#f8f8f8] p-6 rounded-[24px] shadow-lg border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                        >
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{t.name}</h3>
                                <img src={t.rating} alt="Rating" className="h-5 object-contain mb-4" width={100} height={20} />
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Mobile "Why Businesses Choose INARA" Section */}
                <div className="pt-10 border-t border-slate-200">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#141757]">
                            &quot;Why Businesses Choose INARA&quot;
                        </h2>
                    </div>

                    {/* Resources Nav */}
                    <div className="flex flex-col items-center gap-3 text-center text-sm sm:text-base mb-12">
                        {resourceLinks.map((link) => (
                            <p key={link.href} className="m-0">
                                <span className="text-slate-700">{link.label}</span>{" "}
                                <a
                                    className={`underline font-semibold ${link.valueClassName} transition-all duration-300 hover:text-[#3337FF] hover:scale-105 inline-block`}
                                    href={link.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {link.value}
                                </a>
                            </p>
                        ))}
                    </div>

                    {/* Mobile Insight Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {insightCards.map((insight) => (
                            <div 
                                key={insight.title}
                                className={`p-6 rounded-[24px] shadow-md border border-slate-100 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg cursor-pointer ${insight.gradient}`}
                            >
                                <h3 className="text-xl font-bold text-slate-950 mb-3">{insight.title}</h3>
                                <p className="text-slate-800 text-sm leading-relaxed">{insight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
