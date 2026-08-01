import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Import optimized local WebP images
import a5_1 from "../../../../assets/services/a5-1.webp";
import a5_2 from "../../../../assets/services/a5-2.webp";
import a5_3 from "../../../../assets/services/a5-3.webp";
import mainImg from "../../../../assets/services/main.webp";
import shadowImg from "../../../../assets/services/shadow.webp";
import main1Img from "../../../../assets/services/main-1.webp";
import macbookMockup from "../../../../assets/services/macbook-pro-mockup.webp";
import galaxyMockup from "../../../../assets/services/galaxy-s26-ultra-mockup.webp";

const servicePanels = [
    {
        src: a5_1,
        alt: "Service panel: Scalable digital infrastructure design",
        width: 327,
        height: 445,
    },
    {
        src: a5_2,
        alt: "Service panel: Clean and modern user interface design",
        width: 327,
        height: 445,
    },
    {
        src: a5_3,
        alt: "Service panel: Dedicated support and growth plans",
        width: 327,
        height: 445,
    },
];

export const ServiceOfferingsSection = () => {
    return (
        <section
            aria-labelledby="service-offerings-heading"
            className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:min-h-[938px] lg:py-[68px]"
        >
            <h2
                id="service-offerings-heading"
                className="mx-auto px-6 text-center [font-family:'Noto_Sans_HK',Helvetica] text-3xl font-black leading-[normal] tracking-[0] text-[#141757] sm:text-4xl lg:text-5xl"
            >
                What Can We Take Off Your Plate?
            </h2>
            <Card className="mx-auto mt-10 w-full max-w-[1440px] border-0 bg-transparent shadow-none lg:mt-[62px]">
                <CardContent className="relative min-h-[650px] p-0 sm:min-h-[730px] lg:min-h-[742px]">
                    
                    {/* Top Right AI Icon */}
                    <img
                        className="absolute left-[79.8%] top-[-31px] hidden h-[108px] w-[103px] z-30 lg:block pointer-events-none"
                        alt="Ai mi algorithm"
                        src="https://c.animaapp.com/ms067qo1f69sd7/img/ai-mi-algorithm-svgrepo-com-1.svg"
                        width={103}
                        height={108}
                    />

                    {/* 3 Main Cards Grid - z-20 so Card is ABOVE the laptop */}
                    <div className="relative z-20 mx-auto grid w-full max-w-[978px] grid-cols-1 justify-items-center gap-4 px-5 sm:grid-cols-3 sm:gap-2 lg:mx-0 lg:ml-[206px] lg:grid-cols-3 lg:px-0">
                        {servicePanels.map((panel) => (
                            <img
                                key={panel.src}
                                className="h-auto w-full max-w-[327px] sm:w-[327px] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(51,55,255,0.2)] rounded-2xl cursor-pointer"
                                alt={panel.alt}
                                src={panel.src}
                                width={panel.width}
                                height={panel.height}
                            />
                        ))}
                    </div>

                    {/* Laptop Figure on Left - z-10 so it sits BEHIND the navy Website Card */}
                    <figure 
                        className="absolute left-[2.3%] top-[151px] hidden h-[401px] w-[473px] bg-cover bg-[50%_50%] lg:block z-10 pointer-events-none animate-float"
                        style={{ backgroundImage: `url(${shadowImg})` }}
                    >
                        <img
                            className="absolute left-px top-0 h-[378px] w-[472px] object-cover"
                            alt="Main mockup base"
                            src={mainImg}
                            width={472}
                            height={378}
                        />
                        <img
                            className="absolute left-[7px] top-[5px] h-[274px] w-[332px] object-cover"
                            alt="Macbook pro mockup display"
                            src={macbookMockup}
                            width={332}
                            height={274}
                        />
                    </figure>

                    {/* Phone Mockup - z-30 so it sits ABOVE middle App Card */}
                    <figure 
                        className="absolute left-[43.9%] top-[308px] hidden h-[182px] w-[193px] bg-cover bg-[50%_50%] lg:flex z-30 pointer-events-none animate-float-delayed"
                        style={{ backgroundImage: `url(${main1Img})` }}
                    >
                        <img
                            className="ml-[3px] mt-[2.2px] h-[170.19px] w-[184.52px] object-cover"
                            alt="Galaxy ultra mockup display"
                            src={galaxyMockup}
                            width={184}
                            height={170}
                        />
                    </figure>

                    {/* AI Robot Doodle - z-30 */}
                    <img
                        className="absolute left-[69.9%] top-[288px] hidden h-[206px] w-[206px] lg:block z-30 pointer-events-none animate-float"
                        alt="AI Robot"
                        src="https://c.animaapp.com/ms067qo1f69sd7/img/ai-svgrepo-com-1.svg"
                        width={206}
                        height={206}
                    />

                    {/* Desktop Bottom Text Paragraph */}
                    <p className="absolute left-1/2 top-[506px] hidden w-[593px] -translate-x-1/2 text-center [font-family:'Noto_Sans_HK',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] lg:block z-20">
                        <span className="font-bold text-[#57585f]">Your business is </span>
                        <span className="font-black text-[#3336ff]">
                            Growing.
                            <br />
                        </span>
                        <span className="font-bold text-[#57585f]">
                            Your systems should too.
                            <br />
                        </span>
                        <span className="font-black text-[#3336ff]">We build</span>
                        <span className="font-bold text-[#57585f]"> technology </span>
                        <span className="font-black text-[#3336ff]">
                            that grows with you
                        </span>
                        <span className="font-bold text-[#57585f]">
                            {" "}
                            instead of slowing you down.
                        </span>
                    </p>

                    {/* Badge 1: upscaling */}
                    <span className="absolute left-[53.5%] top-[474px] hidden h-[31px] w-[121px] rotate-[9.08deg] items-center justify-center overflow-hidden rounded-[21.6px] bg-[#a0ee0f] text-center [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-black leading-[normal] tracking-[0] text-black shadow-[-2.16px_2.88px_4.25px_#0000006e] lg:flex z-30">
                        upscaling
                    </span>

                    {/* Badge 2: design with meaning */}
                    <span className="absolute left-[26.2%] top-[543px] hidden h-[23px] w-[164px] rotate-[-4.99deg] items-center justify-center overflow-hidden rounded-[16.32px] bg-[#a0ee0f] text-center [font-family:'Noto_Sans_HK',Helvetica] text-[13.1px] font-black leading-[normal] tracking-[0] text-black shadow-[-1.63px_2.18px_3.21px_#0000006e] lg:flex z-30">
                        design with meaning
                    </span>

                    {/* Mobile Bottom Text Paragraph */}
                    <p className="mx-auto mt-8 w-full max-w-[593px] px-5 text-center [font-family:'Noto_Sans_HK',Helvetica] text-lg font-normal leading-[normal] tracking-[0] lg:hidden z-20">
                        <span className="font-bold text-[#57585f]">Your business is </span>
                        <span className="font-black text-[#3336ff]">
                            Growing.
                            <br />
                        </span>
                        <span className="font-bold text-[#57585f]">
                            Your systems should too.
                            <br />
                        </span>
                        <span className="font-black text-[#3336ff]">We build</span>
                        <span className="font-bold text-[#57585f]"> technology </span>
                        <span className="font-black text-[#3336ff]">
                            that grows with you
                        </span>
                        <span className="font-bold text-[#57585f]">
                            {" "}
                            instead of slowing you down.
                        </span>
                    </p>

                </CardContent>
            </Card>
        </section>
    );
};
