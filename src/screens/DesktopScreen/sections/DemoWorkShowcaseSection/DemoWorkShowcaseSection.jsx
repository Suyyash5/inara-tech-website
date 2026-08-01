import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Import optimized WebP images
import vectorImg from "../../../../assets/showcase/vector.webp";
import vector1Img from "../../../../assets/showcase/vector-1.webp";
import vector2Img from "../../../../assets/showcase/vector-2.webp";
import desktop16Img from "../../../../assets/showcase/desktop-16.webp";

const showcaseImages = [
    {
        alt: "Event website preview",
        className:
            "absolute left-[66.736%] top-[11.523%] z-10 h-[76.855%] w-[28.888%] object-cover",
        src: vectorImg,
        width: 416,
        height: 787,
    },
    {
        alt: "Construction website preview",
        className:
            "absolute left-[3.125%] top-[41.602%] z-10 h-[58.398%] w-[28.888%] object-cover",
        src: vector1Img,
        width: 416,
        height: 598,
    },
    {
        alt: "Portfolio website preview",
        className:
            "absolute left-[45.625%] top-0 z-10 h-[63.867%] w-[32.5%] object-cover",
        src: vector2Img,
        width: 469,
        height: 663,
    },
];

const projectDescriptions = [
    {
        className: "absolute left-[27.5%] top-[3.809%] z-20 w-[16.736%] text-right",
        text: "A modern event platform designed to showcase schedules, manage registrations, and keep attendees informed through a seamless digital experience.",
    },
    {
        className: "absolute left-[33.264%] top-[88.574%] z-20 w-[16.736%]",
        text: "A professional business website that highlights construction expertise, completed projects, and services while helping clients connect with confidence.",
    },
];

const projectCards = [
    {
        bubbleSrc: "https://c.animaapp.com/ms067qo1f69sd7/img/bubble.png",
        cardClass: "absolute left-[46.389%] top-0 z-20 h-[15.332%] w-[27.361%]",
        title: "Event Website",
        titleClass: "mt-[17.197%] ml-auto mr-[2.538%] w-[37.31%]",
        viewClass: "mt-auto mb-[8.28%] ml-[3.046%]",
    },
    {
        bubbleSrc: "https://c.animaapp.com/ms067qo1f69sd7/img/bubble-1.png",
        cardClass:
            "absolute left-[3.889%] top-[84.668%] z-20 h-[15.332%] w-[27.361%]",
        title: (
            <>
                Construction
                <br />
                Website
            </>
        ),
        titleClass: "mt-[17.197%] ml-auto mr-[2.538%] w-[55.076%]",
        viewClass: "mt-auto mb-[8.28%] ml-[3.046%]",
    },
    {
        bubbleSrc: "https://c.animaapp.com/ms067qo1f69sd7/img/bubble-2.png",
        cardClass:
            "absolute left-[67.5%] top-[68.262%] z-20 h-[7.324%] w-[27.361%]",
        title: "Portfolio",
        titleClass: "mt-[6.599%] ml-auto mr-[2.538%] w-[37.31%]",
        viewClass: "mt-auto mb-[18.667%] ml-[4.315%]",
    },
];

export const DemoWorkShowcaseSection = () => {
    const getProjectNameString = (title) => {
        if (typeof title === "string") return title;
        return "Construction Website";
    };

    return (
        <section
            aria-label="Demo work showcase"
            className="relative w-full overflow-hidden bg-white [aspect-ratio:45/32]"
            style={{
                backgroundImage: `url(${desktop16Img}), linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
            }}
        >
            {showcaseImages.map((image) => (
                <img
                    key={image.src}
                    className={image.className}
                    alt={image.alt}
                    src={image.src}
                    width={image.width}
                    height={image.height}
                />
            ))}

            <h2 className="absolute left-[3.125%] top-[19.727%] z-20 [font-family:'Inter',Helvetica] text-[17.833vw] font-bold leading-[normal] tracking-[-1.071vw] text-transparent">
                <span className="tracking-[-2.749vw] text-white">D&nbsp;&nbsp; M</span>
                <span className="tracking-[-2.749vw] text-[#3336ff]">O</span>
            </h2>
            <h2 className="absolute left-[39.792%] top-[41.602%] z-20 [font-family:'Inter',Helvetica] text-[17.833vw] font-bold leading-[normal] tracking-[-1.071vw] text-transparent">
                <span className="tracking-[-2.749vw] text-[#3336ff]">WO</span>
                <span className="tracking-[-2.749vw] text-[#a0ee0f]">r</span>
                <span className="tracking-[-2.749vw] text-white">k</span>
            </h2>
            <span className="absolute left-[3.472%] top-[22.949%] z-20 rotate-[-13.31deg] [font-family:'Inter',Helvetica] text-[17.833vw] font-bold leading-[normal] tracking-[-1.071vw] text-[#3336ff]">
                e
            </span>
            {projectDescriptions.map((description) => (
                <p
                    key={description.text}
                    className={`${description.className} [font-family:'Noto_Sans_HK',Helvetica] text-[1.111vw] font-light leading-[normal] tracking-normal text-white`}
                >
                    {description.text}
                </p>
            ))}

            {projectCards.map((project) => (
                <Card
                    key={project.bubbleSrc}
                    className={`${project.cardClass} rounded-2xl border border-black/5 bg-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}
                >
                    <CardContent className="flex h-full p-0">
                        <Button
                            type="button"
                            variant="ghost"
                            className={`${project.viewClass} h-auto w-[20.305%] shrink-0 rounded-none p-0 [font-family:'Noto_Sans_HK',Helvetica] text-[1.389vw] font-light leading-[normal] tracking-normal text-black underline hover:bg-transparent hover:text-black transition-all duration-300 hover:scale-105`}
                            aria-label={`View ${getProjectNameString(project.title)}`}
                        >
                            view site
                        </Button>
                        <img
                            className={`h-[15.287%] w-[6.091%] shrink-0 ${project.title === "Portfolio"
                                ? "mb-[18.667%] ml-[1.777%] mt-auto animate-float-delayed"
                                : "mb-[8.28%] ml-[1.523%] mt-auto animate-float"
                                }`}
                            alt="Bubble"
                            src={project.bubbleSrc}
                            width={12}
                            height={12}
                        />
                        <h3
                            className={`${project.titleClass} [font-family:'Noto_Sans_HK',Helvetica] text-right text-[2.222vw] font-bold leading-[normal] tracking-normal text-black`}
                        >
                            {project.title}
                        </h3>
                    </CardContent>
                </Card>
            ))}

            <img
                className="absolute left-[20.069%] top-[40.137%] z-30 h-[35.156%] w-[54.306%]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/ms067qo1f69sd7/img/vector-29.svg"
                width={782}
                height={360}
            />
        </section>
    );
};
