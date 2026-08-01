import { Card, CardContent } from "../../../../components/ui/card";

const processSteps = [
    {
        number: "1",
        description:
            "Understanding your business, your users, and the challenges worth solving.",
        color: "#3336ff",
        direction: "right",
        leftVisual: { type: "dot", color: "#3336ff" },
        rightVisual: {
            type: "image",
            alt: "Partner heart",
            src: "https://c.animaapp.com/ms067qo1f69sd7/img/partner-heart.png",
        },
        textAlign: "text-left",
    },
    {
        number: "2",
        description:
            "Turning ideas into intuitive experiences through thoughtful design and rapid prototyping.",
        color: "#7273aa",
        direction: "left",
        leftVisual: {
            type: "image",
            alt: "Network intelligence",
            src: "https://c.animaapp.com/ms067qo1f69sd7/img/network-intelligence.png",
        },
        rightVisual: { type: "dot", color: "#afb1d8" },
        textAlign: "text-right",
    },
    {
        number: "3",
        description:
            "Building reliable, scalable digital products with clean code and modern technology.",
        color: "#40417a",
        direction: "right",
        leftVisual: { type: "dot", color: "#5a5d9c" },
        rightVisual: {
            type: "image",
            alt: "Code blocks",
            src: "https://c.animaapp.com/ms067qo1f69sd7/img/code-blocks.png",
        },
        textAlign: "text-left",
    },
    {
        number: "4",
        description:
            "Testing, deploying, and continuously improving your product for long-term success.",
        color: "#141757",
        direction: "left",
        leftVisual: {
            type: "image",
            alt: "Rocket launch",
            src: "https://c.animaapp.com/ms067qo1f69sd7/img/rocket-launch.png",
        },
        rightVisual: null,
        textAlign: "text-right",
    },
];

const ProcessVisual = ({ visual }) => {
    if (!visual) {
        return <span aria-hidden="true" className="h-[50px] w-[50px]" />;
    }

    if (visual.type === "dot") {
        return (
            <span
                aria-hidden="true"
                className="h-[50px] w-[50px] rounded-full"
                style={{ backgroundColor: visual.color }}
            />
        );
    }

    return (
        <img
            className="h-[50px] w-[50px] object-contain"
            alt={visual.alt}
            src={visual.src}
        />
    );
};

export const DevelopmentProcessSection = () => {
    return (
        <section
            aria-labelledby="development-process-title"
            className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 xl:px-0 xl:py-16 xl:min-h-[1127px]"
        >
            {/* Mobile / Tablet Responsive Layout (< xl) */}
            <div className="xl:hidden">
                <header className="mx-auto flex max-w-[592px] flex-col items-center px-5 text-center">
                    <h2
                        id="development-process-title-mobile"
                        className="[font-family:'Noto_Sans_HK',Helvetica] text-3xl sm:text-4xl md:text-5xl font-black leading-[normal] tracking-[0] text-[#141757]"
                    >
                        How We Bring Ideas to Life
                    </h2>
                    <p className="mt-4 [font-family:'Noto_Sans_HK',Helvetica] text-base sm:text-lg font-normal leading-relaxed text-[#57585f]">
                        Every successful product starts with understanding the problem. Our
                        process keeps you involved at every stage, turning ideas into reliable
                        digital solutions with clarity, collaboration, and confidence.
                    </p>
                </header>
                <div className="relative mx-auto mt-12 grid max-w-[913px] grid-rows-[110px_92px_110px_92px_110px_92px_110px] overflow-visible">
                    <img
                        className="pointer-events-none col-start-1 col-end-2 row-start-1 row-end-8 z-0 h-[965px] w-[813px] max-w-none justify-self-center self-start object-contain"
                        alt=""
                        aria-hidden="true"
                        src="https://c.animaapp.com/ms067qo1f69sd7/img/vector-28.svg"
                    />
                    {processSteps.map((step, index) => {
                        const rowStart = index * 2 + 1;
                        const isRight = step.direction === "right";

                        return (
                            <article
                                key={step.number}
                                className="col-start-1 col-end-2 grid h-[110px] w-full grid-cols-[50px_19px_minmax(0,455px)_17px_50px] grid-rows-[110px] justify-self-center sm:max-w-[591px]"
                                style={{ gridRowStart: rowStart }}
                            >
                                <div className="col-start-3 row-start-1 z-10 flex -translate-y-[14px] justify-center">
                                    <span
                                        aria-hidden="true"
                                        className="h-[7px] w-[58.5%] max-w-[266px] rounded-[10px]"
                                        style={{ backgroundColor: step.color }}
                                    />
                                </div>
                                <div className="col-start-1 row-start-1 z-20 flex items-center">
                                    <ProcessVisual visual={step.leftVisual} />
                                </div>
                                <div className="col-start-3 row-start-1 z-10 grid items-center">
                                    <div
                                        className={`col-start-1 row-start-1 flex h-[94px] w-[94.5%] max-w-[430px] items-center rounded-[50px] ${isRight
                                                ? "translate-x-[29.1%] justify-end pr-11"
                                                : "-translate-x-[23.3%] justify-start pl-11"
                                            }`}
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="[font-family:'Noto_Sans_HK',Helvetica] text-5xl font-medium leading-[normal] tracking-[0] text-white">
                                            {step.number}
                                        </span>
                                    </div>
                                    <Card className="col-start-1 row-start-1 z-10 h-[110px] w-full rounded-[66.4px] border-0 bg-white shadow-[inset_-4px_-4px_5.2px_#0000005c,inset_6px_3px_5.1px_#ededed,7px_22px_46.2px_#0000002b]">
                                        <CardContent
                                            className={`flex h-full items-center p-0 px-7 [font-family:'Noto_Sans_HK',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-black sm:text-lg ${step.textAlign}`}
                                        >
                                            <p>{step.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="col-start-5 row-start-1 z-20 flex items-center">
                                    <ProcessVisual visual={step.rightVisual} />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Desktop Pixel-Perfect Layout (xl: >= 1280px) */}
            <div className="hidden xl:block relative w-[1440px] h-[1127px] mx-auto">
                {/* Header */}
                <h2 id="development-process-title" className="absolute w-[642px] h-[58px] left-[399px] top-[36px] [font-family:'Noto_Sans_HK',Helvetica] text-[48px] font-black leading-[58px] text-center text-[#141757]">
                    How We Bring Ideas to Life
                </h2>
                <p className="absolute w-[592px] h-[96px] left-[424px] top-[115px] [font-family:'Noto_Sans_HK',Helvetica] text-[20px] font-normal leading-[24px] text-center text-[#57585f]">
                    Every successful product starts with understanding the problem. Our process keeps you involved at every stage, turning ideas into reliable digital solutions with clarity, collaboration, and confidence.
                </p>

                {/* Background Vector */}
                <img
                    className="absolute w-[812.96px] h-[964.71px] left-[265.99px] top-[285.79px] pointer-events-none object-contain z-0"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/vector-28.svg"
                />

                {/* Step 1 */}
                <div className="absolute w-[266px] h-[7px] left-[538px] top-[248px] rounded-[10px] bg-[#3337FF] z-10" />
                <div className="absolute w-[50px] h-[50px] left-[374px] top-[286px] rounded-full bg-[#3337FF] z-20" />
                <img
                    className="absolute w-[50px] h-[50px] left-[915px] top-[220px] object-contain z-20"
                    alt="Partner heart"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/partner-heart.png"
                />
                <div className="absolute w-[430px] h-[94px] left-[568px] top-[270px] rounded-[50px] bg-[#3337FF] z-10 flex items-center justify-end pr-12">
                    <span className="[font-family:'Noto_Sans_HK',Helvetica] text-[48px] font-medium leading-[58px] text-white select-none">
                        1
                    </span>
                </div>
                <Card className="absolute w-[455px] h-[110px] left-[443px] top-[262px] rounded-[66.4px] border-0 bg-white shadow-[inset_-4px_-4px_5.2px_#0000005c,inset_6px_3px_5.1px_#ededed,7px_22px_46.2px_#0000002b] z-20 flex items-center pl-[28px] pr-[49px]">
                    <CardContent className="p-0 text-left [font-family:'Noto_Sans_HK',Helvetica] text-[18px] font-normal leading-[22px] text-black">
                        Understanding your business, your users, and the challenges worth solving.
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <div className="absolute w-[266px] h-[7px] left-[538px] top-[450px] rounded-[10px] bg-[#7374AB] z-10" />
                <img
                    className="absolute w-[50px] h-[50px] left-[376px] top-[419px] object-contain z-20"
                    alt="Network intelligence"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/network-intelligence.png"
                />
                <div className="absolute w-[50px] h-[50px] left-[940px] top-[515px] rounded-full bg-[#B0B2D9] z-20" />
                <div className="absolute w-[430px] h-[94px] left-[343px] top-[472px] rounded-[50px] bg-[#7374AB] z-10 flex items-center justify-start pl-12">
                    <span className="[font-family:'Noto_Sans_HK',Helvetica] text-[48px] font-medium leading-[58px] text-white select-none">
                        2
                    </span>
                </div>
                <Card className="absolute w-[455px] h-[110px] left-[443px] top-[464px] rounded-[66.4px] border-0 bg-white shadow-[inset_-4px_-4px_5.2px_#0000005c,inset_6px_3px_5.1px_#ededed,7px_22px_46.2px_#0000002b] z-20 flex items-center pl-[27px] pr-[27px]">
                    <CardContent className="p-0 text-right [font-family:'Noto_Sans_HK',Helvetica] text-[18px] font-normal leading-[22px] text-black w-full">
                        Turning ideas into intuitive experiences through thoughtful design and rapid prototyping.
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <div className="absolute w-[266px] h-[7px] left-[538px] top-[652px] rounded-[10px] bg-[#41427B] z-10" />
                <div className="absolute w-[50px] h-[50px] left-[376px] top-[715px] rounded-full bg-[#5A5D9C] z-20" />
                <img
                    className="absolute w-[50px] h-[50px] left-[915px] top-[624px] object-contain z-20"
                    alt="Code blocks"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/code-blocks.png"
                />
                <div className="absolute w-[430px] h-[94px] left-[568px] top-[674px] rounded-[50px] bg-[#41427B] z-10 flex items-center justify-end pr-12">
                    <span className="[font-family:'Noto_Sans_HK',Helvetica] text-[48px] font-medium leading-[58px] text-white select-none">
                        3
                    </span>
                </div>
                <Card className="absolute w-[455px] h-[110px] left-[443px] top-[666px] rounded-[66.4px] border-0 bg-white shadow-[inset_-4px_-4px_5.2px_#0000005c,inset_6px_3px_5.1px_#ededed,7px_22px_46.2px_#0000002b] z-20 flex items-center pl-[27px] pr-[27px]">
                    <CardContent className="p-0 text-left [font-family:'Noto_Sans_HK',Helvetica] text-[18px] font-normal leading-[22px] text-black">
                        Building reliable, scalable digital products with clean code and modern technology.
                    </CardContent>
                </Card>

                {/* Step 4 */}
                <div className="absolute w-[266px] h-[7px] left-[538px] top-[854px] rounded-[10px] bg-[#141757] z-10" />
                <img
                    className="absolute w-[50px] h-[50px] left-[376px] top-[826px] object-contain z-20"
                    alt="Rocket launch"
                    src="https://c.animaapp.com/ms067qo1f69sd7/img/rocket-launch.png"
                />
                <div className="absolute w-[430px] h-[94px] left-[343px] top-[876px] rounded-[50px] bg-[#141757] z-10 flex items-center justify-start pl-12">
                    <span className="[font-family:'Noto_Sans_HK',Helvetica] text-[48px] font-medium leading-[58px] text-white select-none">
                        4
                    </span>
                </div>
                <Card className="absolute w-[455px] h-[110px] left-[443px] top-[868px] rounded-[66.4px] border-0 bg-white shadow-[inset_-4px_-4px_5.2px_#0000005c,inset_6px_3px_5.1px_#ededed,7px_22px_46.2px_#0000002b] z-20 flex items-center pl-[27px] pr-[27px]">
                    <CardContent className="p-0 text-right [font-family:'Noto_Sans_HK',Helvetica] text-[18px] font-normal leading-[22px] text-black w-full">
                        Testing, deploying, and continuously improving your product for long-term success.
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
