import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import spiralImage from "../../../../assets/Group-9.webp";
import netreshworFrame16 from "../../../../assets/Frame-16.webp";
import netreshworFrame17 from "../../../../assets/Frame-17.webp";
import vector19 from "../../../../assets/vector-19.webp";
import agroFrame16 from "../../../../assets/pulses.webp";
import agroFrame17 from "../../../../assets/Frame-17-1.webp";
import vector20 from "../../../../assets/vector-20.webp";
import wheatSack from "../../../../assets/wheat-sack.webp";
import wheatPile from "../../../../assets/wheat.webp";
import jayDurgaFrame17 from "../../../../assets/Frame-17-2.webp";
import jayDurgaFrame16 from "../../../../assets/Frame-16-1.webp";
import unsplashJayDurgaCosmetics from "../../../../assets/unsplash_p3O5f4u95Lo.webp";
import unsplashJayDurgaSkincare from "../../../../assets/unsplash_tWng4d9Njxo.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 9 Hole Y-positions grouped into 3 clusters
const holePositions = [
    // Top Cluster
    161, 213, 265,
    // Middle Cluster
    448, 500, 552,
    // Bottom Cluster
    738, 790, 842
];

// Page 1 Tags (Asian Peace Academy)
const page1Tags = [
    {
        label: "Learning Platform",
        className: "absolute top-[538.43px] left-[347.65px] w-[178.87px] h-[30.96px] rotate-[-5.41deg] z-30",
    },
    {
        label: "Global Community",
        className: "absolute top-[481px] left-[459px] w-[178.87px] h-[30.96px] rotate-[8.21deg] z-30",
    },
    {
        label: "Peace Building",
        className: "absolute top-[428.36px] left-[395.17px] w-[178.87px] h-[30.96px] rotate-[-5.99deg] z-30",
    },
];

// Page 2 Tags (Netreshwor Enterprises)
const page2Tags = [
    {
        label: "Product Showcase",
        className: "absolute top-[599px] left-[398px] w-[178.87px] h-[30.96px] rotate-[-5.41deg] z-30",
    },
    {
        label: "Corporate Website",
        className: "absolute top-[470px] left-[420px] w-[178.87px] h-[30.96px] rotate-[-5.99deg] z-30",
    },
    {
        label: "Business Portfolio",
        className: "absolute top-[422.96px] left-[448.16px] w-[178.87px] h-[30.96px] rotate-[4.71deg] z-30",
    },
    {
        label: "Inquiry System",
        className: "absolute top-[537.6px] left-[453.99px] w-[153.62px] h-[30.96px] rotate-[8.21deg] z-30",
    },
];

// Page 3 Tags (Sheetal Agro Industries)
const page3Tags = [
    {
        label: "Agro Industry",
        className: "absolute top-[538.43px] left-[347.65px] w-[178.87px] h-[30.96px] rotate-[-5.41deg] z-30",
    },
    {
        label: "Digital Presence",
        className: "absolute top-[481px] left-[459px] w-[178.87px] h-[30.96px] rotate-[8.21deg] z-30",
    },
    {
        label: "Responsive Design",
        className: "absolute top-[428.36px] left-[395.17px] w-[178.87px] h-[30.96px] rotate-[-5.99deg] z-30",
    },
];

// Page 4 Tags (Jay Durga Trade International)
const page4Tags = [
    {
        label: "Digital Branding",
        className: "absolute top-[410px] left-[228px] w-[178.87px] h-[30.96px] rotate-[-5.41deg] z-30",
    },
    {
        label: "Professional UI",
        className: "absolute top-[418px] left-[425px] w-[178.87px] h-[30.96px] rotate-[8.21deg] z-30",
    },
    {
        label: "Wholesale",
        className: "absolute top-[361px] left-[357px] w-[117.3px] h-[30.96px] rotate-[-5.99deg] z-30",
    },
    {
        label: "Beauty",
        className: "absolute top-[324.97px] left-[441.2px] w-[117.3px] h-[30.96px] rotate-[7.51deg] z-30",
    },
];

export const AcademyCaseStudySection = () => {
    const [currentPage, setCurrentPage] = useState(3); // 1, 2, 3, or 4
    const [isTurning, setIsTurning] = useState(false);
    const [turnDirection, setTurnDirection] = useState("next");

    const handleTurnPage = (targetPage) => {
        if (targetPage === currentPage || isTurning) return;
        setIsTurning(true);
        setTurnDirection(targetPage > currentPage ? "next" : "prev");

        // Halfway through smooth 900ms page flip (450ms), swap active page content underneath
        setTimeout(() => {
            setCurrentPage(targetPage);
        }, 450);

        // Reset turning state after full animation duration (900ms)
        setTimeout(() => {
            setIsTurning(false);
        }, 900);
    };

    const targetUrl = currentPage === 1
        ? "https://asianpeaceacademy.org"
        : currentPage === 2
            ? "https://netreshwor.com"
            : currentPage === 3
                ? "https://sheetalagro.com"
                : "https://jaydurgatrade.com";

    const getCoverBgColor = (page) => {
        if (page === 1) return "bg-[#d8d6cd]";
        if (page === 2) return "bg-[#635c4b]";
        if (page === 3) return "bg-[#2f7a42]";
        return "bg-[#3337FF]"; // Vibrant Blue for Page 4
    };

    const getPageTitle = (page) => {
        if (page === 1) return "Asian Peace Academy";
        if (page === 2) return "Netreshwor Enterprises";
        if (page === 3) return "Sheetal Agro Industries";
        return "Jay Durga Trade International";
    };

    return (
        <div className="w-full overflow-hidden py-4 sm:py-8 lg:py-12 bg-slate-950 flex justify-center items-center">
            <section className="relative min-h-[1024px] w-[1440px] max-w-[1440px] mx-auto overflow-hidden bg-white shadow-2xl perspective-2000 select-none flex-shrink-0 origin-center scale-[0.24] min-[375px]:scale-[0.27] min-[425px]:scale-[0.31] sm:scale-[0.52] md:scale-[0.68] lg:scale-[0.88] xl:scale-100 my-[-380px] min-[375px]:my-[-360px] min-[425px]:my-[-340px] sm:my-[-240px] md:my-[-150px] lg:my-[-60px] xl:my-0 transition-transform">

            {/* Top Navigation / Section Header */}
            <div className="absolute top-[35px] left-1/2 -translate-x-1/2 flex flex-col items-center z-40">
                <div className="flex h-[46px] w-[446px] items-center justify-center rounded-[30px] bg-black shadow-[-1px_6px_8.7px_#00000073]">
                    <h2 className="[font-family:'Inter',Helvetica] text-center text-2xl font-medium leading-[normal] tracking-[8.64px] text-white pl-[8.64px]">
                        FEATURED PROJECTS
                    </h2>
                </div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1.5 mt-3">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Top Right Tab: Website Development / Website Design & Development */}
            <div 
                className={`absolute top-0 flex h-[60px] items-center justify-center bg-white shadow-[inset_1px_-7px_5.8px_rgba(0,0,0,0.19),-3px_4px_5.6px_rgba(0,0,0,0.52)] rounded-b-[30px] z-40 px-4 ${
                    currentPage === 3 ? "left-[1134px] w-[306px]" : "left-[1206px] w-[234px]"
                }`}
            >
                {currentPage === 3 ? (
                    <div className="w-[260px] h-[32px] flex items-center justify-center border-[0.5px] border-[#3337FF]">
                        <p className="[font-family:'Give_You_Glory'] text-[20px] font-normal leading-[32px] text-center text-[#3337FF] whitespace-nowrap">
                            Website Design & Development
                        </p>
                    </div>
                ) : currentPage === 2 ? (
                    <div className="w-[178px] h-[32px] flex items-center justify-center border-[0.5px] border-[#3337FF]">
                        <p className="[font-family:'Give_You_Glory'] text-[20px] font-normal leading-[32px] text-center text-[#3337FF] whitespace-nowrap">
                            Website Development
                        </p>
                    </div>
                ) : (
                    <p className="[font-family:'Give_You_Glory'] text-[20px] font-normal leading-[32px] text-center text-[#141757] whitespace-nowrap">
                        Website Development
                    </p>
                )}
            </div>

            {/* Page Flip Control Buttons (Page 01 | Page 02 | Page 03) */}
            {/* Previous Arrow */}
<button
    onClick={() => handleTurnPage(currentPage - 1)}
    disabled={currentPage === 1 || isTurning}
    aria-label="Previous page"
    className="absolute left-[25px] top-1/2 -translate-y-1/2 z-50
               w-14 h-14 rounded-full
               bg-black/80 hover:bg-black
               text-white
               flex items-center justify-center
               shadow-2xl
               transition-all duration-300
               hover:scale-110
               disabled:opacity-0
               disabled:pointer-events-none"
>
    <ChevronLeft size={34} strokeWidth={2.5} />
</button>

{/* Next Arrow */}
<button
    onClick={() => handleTurnPage(currentPage + 1)}
    disabled={currentPage === 4 || isTurning}
    aria-label="Next page"
    className="absolute right-[25px] top-1/2 -translate-y-1/2 z-50
               w-14 h-14 rounded-full
               bg-black/80 hover:bg-black
               text-white
               flex items-center justify-center
               shadow-2xl
               transition-all duration-300
               hover:scale-110
               disabled:opacity-0
               disabled:pointer-events-none"
>
    <ChevronRight size={34} strokeWidth={2.5} />
</button>

            {/* Glowing Lime Green Link Circle Button */}
            <button
                onClick={() => window.open(targetUrl, '_blank')}
                className="absolute top-[498px] left-[651px] h-[138px] w-[138px] z-40 group transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_25px_rgba(160,239,15,0.45)] rounded-full drop-shadow-2xl"
                aria-label="View Site"
            >
                <img
                    className="h-full w-full object-contain"
                    alt="View Site Icon"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/group-11.png"
                />
            </button>

            {/* "view site" Blue Text Link Positioned Underneath Right Bottom Corner of Green Button */}
            <Button
                type="button"
                variant="link"
                className="absolute top-[635px] left-[742px] w-[72px] h-[21px] p-0 [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[21px] text-[#3337FF] underline underline-offset-0 hover:text-[#3337FF] z-40 transition-all duration-300 hover:scale-105 hover:translate-x-1"
                onClick={() => window.open(targetUrl, '_blank')}
            >
                view site
            </Button>

            {/* Smooth 3D Page Turn Sheet Layer with Color-Matched Front and Back Covers */}
            {isTurning && (
                <div
                    className={`absolute top-0 left-[131px] w-[calc(100%-131px)] h-full z-50 preserve-3d pointer-events-none ${turnDirection === "next" ? "animate-page-turn-next" : "animate-page-turn-prev"
                        }`}
                >
                    {/* Front Face of Turning Page Sheet (Matches Current Page Color) */}
                    <div
                        className={`absolute inset-0 w-full h-full backface-hidden flex flex-col justify-between p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-l border-black/10 ${getCoverBgColor(currentPage)}`}
                    >
                        <div className="opacity-35">
                            <h3 className="text-4xl font-extrabold uppercase text-white tracking-tight">
                                {getPageTitle(currentPage)}
                            </h3>
                        </div>
                        <div className="w-full h-full bg-gradient-to-r from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>

                    {/* Back Face of Turning Page Sheet (Matches Target Page Color) */}
                    <div
                        className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-r border-black/10 ${getCoverBgColor(turnDirection === "next" ? currentPage + 1 : currentPage - 1)}`}
                    >
                        <div className="opacity-35">
                            <h3 className="text-4xl font-extrabold uppercase text-white tracking-tight">
                                {getPageTitle(turnDirection === "next" ? currentPage + 1 : currentPage - 1)}
                            </h3>
                        </div>
                        <div className="w-full h-full bg-gradient-to-l from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>
                </div>
            )}

            {/* Main Notebook Content - Rendered according to active page (01, 02, or 03) */}
            {currentPage === 1 ? (
                /* PAGE 01: ASIAN PEACE ACADEMY */
                <div className="grid min-h-[1024px] grid-cols-2 relative overflow-visible">

                    {/* Giant Headline Text */}
                    <h1 className="absolute top-[161px] left-[203px] [font-family:'Inter',Helvetica] text-[128px] font-bold leading-[155px] tracking-[-0.06em] text-black uppercase z-30 pointer-events-none whitespace-nowrap">
                        ASIAN PEACE<br />ACADEMY
                    </h1>

                    {/* Left Notebook Cover Column (Warm Grey Background #D4D0C6) */}
                    <article className="relative bg-[#D4D0C6] min-h-[1024px] z-10">
                        <div className="absolute left-[213px] top-[457px] w-[313px] h-[288px]">
                            <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xl font-normal leading-[24px] text-black">
                                From research publications and learning resources to event registrations and secure member access, we designed a digital home that makes knowledge easier to discover, manage, and share.
                            </p>
                            <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xl font-normal leading-[24px] text-black mt-[48px]">
                                Kathmandu, Nepal Education • Research • Non-Profit
                            </p>
                        </div>
                        <p className="absolute left-[213px] top-[947px] w-[48px] h-[48px] [font-family:'Inter',Helvetica] text-[40px] font-bold leading-[48px] text-[#898A91]">
                            01
                        </p>
                    </article>

                    {/* Right Side: Showcase Cards & Photography */}
                    <Card className="relative min-h-[1024px] rounded-none border-0 bg-white shadow-[-5px_2px_10px_rgba(0,0,0,0.25)] z-10">
                        <CardContent className="relative h-full min-h-[1024px] p-0 overflow-hidden">
                            <div className="absolute top-[736px] left-0 h-[288px] w-full bg-[#3337FF] z-0" />

                            <div className="absolute top-[313px] left-[438px] w-[5px] h-[223.5px] bg-[#3337FF] z-30" />
                            <p className="absolute top-[288px] left-[456px] w-[182px] h-[21px] [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[21px] text-[#3337FF] text-center z-30">
                                1756 visitors upscaled
                            </p>
                            <div className="absolute top-[284px] left-[426px] h-[24px] w-[24px] rounded-full bg-[#3337FF]/34 z-30" />
                            <div className="absolute top-[288px] left-[430px] h-[16px] w-[16px] rounded-full bg-[#3337FF] z-30" />

                            {page1Tags.map((tag) => (
                                <Badge
                                    key={tag.label}
                                    className={`${tag.className} flex justify-center rounded-[21.6px] border-0 bg-[#a0ee0f] px-0 py-0 [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[normal] tracking-[0] text-black shadow-[-2.16px_2.88px_4.25px_#0000006e] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[-2px_5px_8px_rgba(0,0,0,0.4)] cursor-pointer`}
                                >
                                    {tag.label}
                                </Badge>
                            ))}

                            <div
                                className="absolute top-[399px] left-[177px] h-[325px] w-[247px] bg-cover bg-center shadow-xl z-20"
                                style={{
                                    backgroundImage:
                                        "url(https://c.animaapp.com/ms067qo1f69sd7/img/frame-16.svg)",
                                }}
                            />

                            <div
                                className="absolute top-[670px] left-[337px] h-[325px] w-[351px] bg-cover bg-center shadow-xl z-20"
                                style={{
                                    backgroundImage:
                                        "url(https://c.animaapp.com/ms067qo1f69sd7/img/frame-17.svg)",
                                }}
                            />
                        </CardContent>
                    </Card>

                    {/* Stack of Books Overlay Image */}
                    <img
                        className="absolute top-[710px] left-[calc(50%_-_228px)] h-[314px] w-[476px] object-cover z-30 pointer-events-none"
                        alt="Stack of Books"
                        src="https://c.animaapp.com/ms067qo1f69sd7/img/unsplash-s3nuoqdmuvc.png"
                    />
                </div>
            ) : currentPage === 2 ? (
                /* PAGE 02: NETRESHWOR ENTERPRISES */
                <div className="grid min-h-[1024px] grid-cols-2 relative overflow-visible">

                    {/* Giant Headline Text - Page 2 Title Case */}
                    <h1 className="absolute top-[161px] left-[203px] [font-family:'Inter',Helvetica] text-[128px] font-bold leading-[155px] tracking-[-0.06em] text-black z-30 pointer-events-none whitespace-nowrap">
                        Netreshwor<br />Enterprises
                    </h1>

                    {/* Left Notebook Cover Column (Olive Background #7C7158) */}
                    <article className="relative bg-[#7C7158] min-h-[1024px] text-white z-10">
                        <div className="absolute left-[213px] top-[468px] w-[313px] h-[240px]">
                            <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xl font-normal leading-[24px] text-white opacity-95">
                                A thoughtfully designed digital showroom that brings premium tiles and sanitary solutions together in one seamless experience. From exploring collections to making inquiries, every interaction was crafted to help customers discover products with confidence and make better decisions, faster.
                            </p>
                        </div>
                        <p className="absolute left-[213px] top-[947px] w-[53px] h-[48px] [font-family:'Inter',Helvetica] text-[40px] font-bold leading-[48px] text-white">
                            02
                        </p>
                    </article>

                    {/* Right Side: Showcase Cards & Photography for Netreshwor */}
                    <Card className="relative min-h-[1024px] rounded-none border-0 bg-white shadow-[-5px_2px_10px_rgba(0,0,0,0.25)] z-10">
                        <CardContent className="relative h-full min-h-[1024px] p-0 overflow-hidden">
                            <div className="absolute top-[736px] left-0 h-72 w-full bg-black z-0" />

                            <div className="absolute top-[251px] left-[438px] w-[24px] h-[24px] rounded-full bg-[#3337FF]/34 z-30" />
                            <div className="absolute top-[255px] left-[442px] w-[16px] h-[16px] rounded-full bg-[#3337FF] z-30" />
                            <p className="absolute top-[252px] left-[472px] w-[166px] h-[21px] [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[21px] text-[#3337FF] text-center z-30">
                                88% increased sales
                            </p>

                            <img 
                                className="absolute z-30 pointer-events-none" 
                                style={{ left: "299px", top: "283px", width: "159px", height: "187.5px" }} 
                                src={vector19}
                                alt=""
                            />

                            {page2Tags.map((tag) => (
                                <Badge
                                    key={tag.label}
                                    className={`${tag.className} flex justify-center rounded-[21.6px] border-0 bg-[#a0ee0f] px-0 py-0 [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[normal] tracking-[0] text-black shadow-[-2.16px_2.88px_4.25px_#0000006e] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[-2px_5px_8px_rgba(0,0,0,0.4)] cursor-pointer`}
                                >
                                    {tag.label}
                                </Badge>
                            ))}

                            {/* Photo 1: Tile Showroom Display */}
                            <div
                                className="absolute top-[470px] left-[79px] h-[325px] w-[380px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${netreshworFrame16}')`,
                                }}
                            />

                            {/* Photo 2: Roof Tiles Texture */}
                            <div
                                className="absolute top-[647px] left-[289px] h-[325px] w-[351px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${netreshworFrame17}')`,
                                }}
                            />

                        </CardContent>
                    </Card>

                </div>
            ) : currentPage === 3 ? (
                /* PAGE 03: SHEETAL AGRO INDUSTRIES */
                <div className="grid min-h-[1024px] grid-cols-2 relative overflow-visible">

                    {/* Giant Headline Text - Page 3 Sheetal Agro Industries */}
                    <h1 className="absolute top-[161px] left-[203px] [font-family:'Inter',Helvetica] text-[128px] font-bold leading-[155px] tracking-[-0.06em] text-black z-30 pointer-events-none whitespace-nowrap">
                        Sheetal Agro<br />Industries
                    </h1>

                    {/* Left Notebook Cover Column (Forest Green Background #377D46) */}
                    <article className="relative bg-[#377D46] min-h-[1024px] text-white z-10">
                        <div className="absolute left-[213px] top-[457px] w-[313px] h-[264px]">
                            <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xl font-normal leading-[24px] text-white opacity-95">
                                Built to reflect the company's vision, values, and products, this corporate website combines clean design with purposeful functionality. From showcasing agricultural solutions to strengthening business credibility, every page was designed to help the brand connect with customers and partners more effectively.
                            </p>
                        </div>
                        <p className="absolute left-[213px] top-[947px] w-[54px] h-[48px] [font-family:'Inter',Helvetica] text-[40px] font-bold leading-[48px] text-white">
                            03
                        </p>
                    </article>

                    {/* Right Side: Showcase Cards & Photography for Sheetal Agro */}
                    <Card className="relative min-h-[1024px] rounded-none border-0 bg-white shadow-[-5px_2px_10px_rgba(0,0,0,0.25)] z-10">
                        <CardContent className="relative h-full min-h-[1024px] p-0 overflow-hidden">
                            <div className="absolute top-[736px] left-0 h-[288px] w-full bg-[#141757] z-0" />

                            {page3Tags.map((tag) => (
                                <Badge
                                    key={tag.label}
                                    className={`${tag.className} flex justify-center rounded-[21.6px] border-0 bg-[#a0ee0f] px-0 py-0 [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[normal] tracking-[0] text-black shadow-[-2.16px_2.88px_4.25px_#0000006e] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[-2px_5px_8px_rgba(0,0,0,0.4)] cursor-pointer`}
                                >
                                    {tag.label}
                                </Badge>
                            ))}

                            {/* Photo 1: Agro Product Grid Display */}
                            <div
                                className="absolute top-[399px] left-[117px] h-[325px] w-[342px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${agroFrame16}')`,
                                }}
                            />

                            {/* Photo 2: Agro Crop Closeup Display */}
                            <div
                                className="absolute top-[670px] left-[337px] h-[325px] w-[351px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${agroFrame17}')`,
                                }}
                            />

                        </CardContent>
                    </Card>

                    {/* Green Diagonal Vector Chart Line (Crossing the page seam) */}
                    <img 
                        className="absolute z-40 pointer-events-none object-contain" 
                        style={{ left: "538px", top: "323px", width: "475px", height: "94px" }} 
                        src={vector20}
                        alt="Growth indicator diagonal line"
                        width={237}
                        height={106}
                    />

                    {/* Client Acquisition Indicators */}
                    <div className="absolute top-[323px] left-[1013px] w-[24px] h-[24px] rounded-full bg-[#3337FF]/34 z-40" />
                    <div className="absolute top-[327px] left-[1017px] w-[16px] h-[16px] rounded-full bg-[#3337FF] z-40" />
                    <p className="absolute top-[324px] left-[1045px] w-[230px] h-[21px] [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[21px] text-[#3337FF] text-left z-40 select-none">
                        Growth in Client Acquisition
                    </p>

                    {/* Wheat Sacks Overlay Image (Photo 2 - wheat-sack.png) */}
                    <img
                        className="absolute top-[736px] left-[490px] h-[288px] w-[570px] object-cover z-30 pointer-events-none"
                        alt="Harvested Grain Sacks"
                        src={wheatSack}
                        onError={(e) => { e.currentTarget.src = "/wheat-sack.png"; }}
                    />

                    {/* Loose Grain Pile Overlay Image (Photo 3 - wheat.png) */}
                    <img
                        className="absolute top-[685px] left-[315px] h-[340px] w-[340px] object-contain z-40 pointer-events-none drop-shadow-2xl"
                        alt="Loose Grain Pile"
                        src={wheatPile}
                        onError={(e) => { e.currentTarget.src = "/wheat.png"; }}
                    />
                </div>
            ) : (
                /* PAGE 04: JAY DURGA TRADE INTERNATIONAL */
                <div className="grid min-h-[1024px] grid-cols-2 relative overflow-visible">
                    {/* Giant Headline Text - Page 4 Title Case */}
                    <h1 className="absolute top-[161px] left-[203px] [font-family:'Inter',Helvetica] text-[128px] font-bold leading-[155px] tracking-[-0.06em] text-black z-30 pointer-events-none whitespace-nowrap">
                        Jay Durga Trade<br />International
                    </h1>

                    {/* Left Notebook Cover Column (Blue Background #3337FF) */}
                    <article className="relative bg-[#3337FF] min-h-[1024px] text-white z-10">
                        <div className="absolute left-[213px] top-[457px] w-[313px] h-[240px]">
                            <p className="[font-family:'Noto_Sans_HK',Helvetica] text-xl font-normal leading-[24px] text-white opacity-95">
                                Designed to represent a growing trading company, the website brings together a refined brand identity, organized product showcases, and a smooth user experience. Every detail was crafted to help visitors quickly find information, explore offerings, and build confidence in the business.
                            </p>
                        </div>
                        <p className="absolute left-[213px] top-[947px] w-[55px] h-[48px] [font-family:'Inter',Helvetica] text-[40px] font-bold leading-[48px] text-white">
                            04
                        </p>
                    </article>

                    {/* Right Side: Showcase Cards & Photography */}
                    <Card className="relative min-h-[1024px] rounded-none border-0 bg-white shadow-[-5px_2px_10px_rgba(0,0,0,0.25)] z-10">
                        <CardContent className="relative h-full min-h-[1024px] p-0 overflow-hidden">
                            <div className="absolute top-[736px] left-0 h-72 w-full bg-[#000000] z-0" />

                            {page4Tags.map((tag) => (
                                <Badge
                                    key={tag.label}
                                    className={`${tag.className} flex justify-center rounded-[21.6px] border-0 bg-[#a0ee0f] px-0 py-0 [font-family:'Noto_Sans_HK',Helvetica] text-[17.3px] font-medium leading-[normal] tracking-[0] text-black shadow-[-2.16px_2.88px_4.25px_#0000006e] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[-2px_5px_8px_rgba(0,0,0,0.4)] cursor-pointer`}
                                >
                                    {tag.label}
                                </Badge>
                            ))}

                            {/* Photo 1: Cosmetics Flatlay */}
                            <div
                                className="absolute top-[458px] left-[210px] h-[422px] w-[455.76px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${jayDurgaFrame17}')`,
                                }}
                            />

                            {/* Photo 2: Cosmetics Display Table */}
                            <div
                                className="absolute top-[697px] left-[464px] h-[327px] w-[465px] bg-cover bg-center shadow-xl z-20 rounded-md border border-black/10"
                                style={{
                                    backgroundImage: `url('${jayDurgaFrame16}')`,
                                }}
                            />

                        </CardContent>
                    </Card>

                    {/* Skincare display bottles Overlay Image */}
                    <img
                        className="absolute top-[687px] left-[929px] w-[518px] h-[345.33px] object-contain z-40 pointer-events-none"
                        alt="Skincare Display"
                        src={unsplashJayDurgaSkincare}
                    />

                    {/* Skincare flatlay Overlay Image */}
                    <img
                        className="absolute top-[440px] left-[679px] w-[500px] h-[749.9px] object-contain z-40 pointer-events-none"
                        alt="Cosmetics flatlay"
                        src={unsplashJayDurgaCosmetics}
                    />
                </div>
            )}

            {/* Far Left Black Binder Margin Strip */}
            <aside className="absolute top-0 left-[44px] h-[1024px] w-[54px] bg-black z-30 overflow-hidden">
                <p className="absolute left-[15px] top-[978px] w-[110px] h-[24px] [font-family:'Inter',Helvetica] text-xl font-medium leading-[24px] text-white select-none origin-top-left -rotate-90 whitespace-nowrap">
                    @inaratech
                </p>
            </aside>

            {/* 9 Punch Holes on Notebook Margin */}
            {holePositions.map((yPos, idx) => (
                <div
                    key={idx}
                    className="absolute left-[131px] h-[23px] w-6 rounded-[12px/11.5px] bg-black shadow-[0px_4px_4px_#00000040,inset_-3px_0px_2px_#ffffff] z-20"
                    style={{ top: `${yPos}px` }}
                />
            ))}

            {/* Spiral Rings - Rendered from assets/Group 9.png */}
            <img
                className="absolute left-[30px] top-[102px] w-[135.51px] h-[243.51px] z-30 pointer-events-none"
                alt=""
                src={spiralImage}
            />
            <img
                className="absolute left-[30px] top-[390.51px] w-[135.51px] h-[243.51px] z-30 pointer-events-none"
                alt=""
                src={spiralImage}
            />
        </section>
        </div>
    );
};