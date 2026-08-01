import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

const services = [
    {
        category: "Website Development",
        title: "Design & Development",
        description:
            "Your website is often your first impression. We design and develop fast, responsive websites that build trust, communicate your brand, and turn visitors into customers.",
        image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-42.png",
        arrow: "https://c.animaapp.com/ms067qo1f69sd7/img/arrow-outward.png",
        color: "bg-black",
        borderColor: "border-black",
        titleMargin: "pt-2.5",
        descriptionMargin: "mt-[13px]",
        arrowMargin: "mt-[27px]",
    },
    {
        category: "Business Automation",
        title: "Automation",
        description:
            "Reduce repetitive tasks, streamline operations, and free up valuable time with smart automation tailored to the way your business works.",
        image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-43.png",
        arrow: "https://c.animaapp.com/ms067qo1f69sd7/img/arrow-outward-1.png",
        color: "bg-[#692f0a]",
        borderColor: "border-[#692f0a]",
        titleMargin: "pt-[26px]",
        descriptionMargin: "mt-[7px]",
        arrowMargin: "mt-[-5px]",
    },
    {
        category: "Startup MVP Development",
        title: "Startup Live",
        description:
            "Bring your idea to life with a Minimum Viable Product that helps you validate, launch, and grow without wasting time or resources.",
        image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-44.png",
        arrow: "https://c.animaapp.com/ms067qo1f69sd7/img/arrow-outward-2.png",
        color: "bg-[#0048ac]",
        borderColor: "border-[#0048ac]",
        titleMargin: "pt-[26px]",
        descriptionMargin: "mt-[7px]",
        arrowMargin: "mt-[-5px]",
    },
    {
        category: "Cloud Infrastructure",
        title: "Infrastructure",
        description:
            "Build on a secure and scalable foundation with cloud solutions that keep your business connected, reliable, and ready to grow.",
        image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-45.png",
        arrow: "https://c.animaapp.com/ms067qo1f69sd7/img/arrow-outward-3.png",
        color: "bg-[#232c3b]",
        borderColor: "border-[#232c3b]",
        titleMargin: "pt-[31px]",
        descriptionMargin: "mt-[7px]",
        arrowMargin: "mt-[-5px]",
    },
];

export const ServicePortfolioSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12">
                <header className="mx-auto flex max-w-[592px] flex-col items-center px-4 text-center">
                    <h2 className="[font-family:'Noto_Sans_HK',Helvetica] text-3xl sm:text-4xl lg:text-5xl font-black leading-[normal] tracking-[0] text-[#141757]">
                        Here&apos;s what we can build for you.
                    </h2>
                    <p className="mt-4 [font-family:'Noto_Sans_HK',Helvetica] text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#57585f]">
                        Whether you&apos;re starting from scratch or improving what&apos;s
                        already there, we build products that are simple to use, scalable, and
                        ready for real-world growth.
                    </p>
                </header>
                <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
                    {services.map((service, index) => {
                        const headingId = `service-portfolio-heading-${index}`;

                        return (
                            <article key={service.category} className="min-w-0 flex flex-col">
                                <h3 className="mb-3 [font-family:'Inter',Helvetica] text-xl lg:text-[24px] font-bold leading-tight tracking-tight text-slate-900">
                                    {service.category}
                                </h3>
                                <Card
                                    aria-labelledby={headingId}
                                    className={`h-[480px] sm:h-[510px] flex flex-col overflow-hidden rounded-2xl border-4 ${service.borderColor} bg-transparent shadow-lg hover:shadow-2xl transition-shadow`}
                                >
                                    {/* Top Image portion */}
                                    <div 
                                        className="w-full flex-1 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                    
                                    {/* Bottom Text portion */}
                                    <CardFooter
                                        className={`p-5 flex flex-col justify-between ${service.color}`}
                                    >
                                        <h4
                                            id={headingId}
                                            className="[font-family:'Inter',Helvetica] text-lg lg:text-xl font-bold text-white w-full mb-2"
                                        >
                                            {service.title}
                                        </h4>
                                        <div className="flex items-end justify-between w-full gap-3 mt-auto">
                                            <p className="[font-family:'Inter',Helvetica] text-xs lg:text-sm font-medium leading-normal text-slate-200">
                                                {service.description}
                                            </p>
                                            <button
                                                type="button"
                                                aria-label={`Learn more about ${service.category}`}
                                                className="ml-auto shrink-0 transition-transform hover:scale-110 active:scale-95 p-1"
                                            >
                                                <img
                                                    className="h-10 w-10 sm:h-12 sm:w-12"
                                                    alt="Arrow outward"
                                                    src={service.arrow}
                                                />
                                            </button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
