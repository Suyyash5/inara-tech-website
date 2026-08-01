import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Import optimized local WebP images
import vectorImg from "../../../../assets/showcase/vector.webp";
import vector1Img from "../../../../assets/showcase/vector-1.webp";
import vector2Img from "../../../../assets/showcase/vector-2.webp";
import desktop16Img from "../../../../assets/showcase/desktop-16.webp";

const projects = [
  {
    id: "event-website",
    title: "Event Website",
    description:
      "A modern event platform designed to showcase schedules, manage registrations, and keep attendees informed through a seamless digital experience.",
    bubbleSrc: "https://c.animaapp.com/ms35rmg5P8kR9y/img/bubble.png",
    cardClassName: "absolute top-0 left-[668px] h-[157px] w-[394px]",
    titleClassName:
      "absolute top-[68px] right-[12px] w-[147px] [font-family:'Noto_Sans_HK',Helvetica] text-right text-[32px] font-bold leading-[normal] tracking-[0] text-black",
    actionClassName: "absolute bottom-[13px] left-3",
    descriptionClassName:
      "absolute top-[39px] left-[396px] w-[241px] [font-family:'Noto_Sans_HK',Helvetica] text-right text-base font-light leading-[normal] tracking-[0] text-white",
  },
  {
    id: "construction-website",
    title: (
      <>
        Construction
        <br />
        Website
      </>
    ),
    description:
      "A professional business website that highlights construction expertise, completed projects, and services while helping clients connect with confidence.",
    bubbleSrc: "https://c.animaapp.com/ms35rmg5P8kR9y/img/bubble-1.png",
    cardClassName:
      "absolute top-[867px] left-[calc(50.00%_-_664px)] h-[157px] w-[394px]",
    titleClassName:
      "absolute top-[68px] right-[12px] w-[217px] [font-family:'Noto_Sans_HK',Helvetica] text-right text-[32px] font-bold leading-[normal] tracking-[0] text-black",
    actionClassName: "absolute bottom-[13px] left-3",
    descriptionClassName:
      "absolute top-[907px] left-[479px] w-[241px] [font-family:'Noto_Sans_HK',Helvetica] text-base font-light leading-[normal] tracking-[0] text-white",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    bubbleSrc: "https://c.animaapp.com/ms35rmg5P8kR9y/img/bubble-2.png",
    cardClassName: "absolute top-[699px] left-[972px] h-[75px] w-[394px]",
    titleClassName:
      "absolute top-[26px] right-[12px] w-[147px] [font-family:'Noto_Sans_HK',Helvetica] text-right text-[32px] font-bold leading-[normal] tracking-[0] text-black",
    actionClassName: "absolute bottom-[13px] left-[17px]",
  },
];

export const DemoWork = () => {
  return (
    <div
      className="relative w-full overflow-hidden py-16 xl:py-0 xl:min-h-[1024px]"
      style={{
        backgroundImage: `url(${desktop16Img}), linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
      data-model-id="80:606"
    >
      {/* Desktop Absolute Graphics Layout (xl: >= 1280px) */}
      <div className="hidden xl:block relative w-[1440px] h-[1024px] mx-auto overflow-hidden">
        <img
          className="absolute top-[118px] left-[961px] h-[787px] w-[416px] object-cover"
          alt="Vector"
          src={vectorImg}
          width={416}
          height={787}
        />
        <img
          className="absolute top-[426px] left-[45px] h-[598px] w-[416px] object-cover"
          alt="Vector"
          src={vector1Img}
          width={416}
          height={598}
        />
        <img
          className="absolute top-0 left-[657px] h-[663px] w-[469px]"
          alt="Vector"
          src={vector2Img}
          width={469}
          height={663}
        />
        <h1 className="absolute top-[202px] left-[45px] [font-family:'Inter',Helvetica] text-[256.8px] font-bold leading-[normal] tracking-[-15.41px] text-transparent select-none">
          <span className="tracking-[-39.58px] text-white">D&nbsp;&nbsp; M</span>
          <span className="tracking-[-39.58px] text-[#3336ff]">O</span>
        </h1>
        <p className="absolute top-[235px] left-52 rotate-[-13.31deg] [font-family:'Inter',Helvetica] text-[256.8px] font-bold leading-[normal] tracking-[-15.41px] text-[#3336ff] select-none">
          e
        </p>
        <p className="absolute top-[426px] left-[573px] [font-family:'Inter',Helvetica] text-[256.8px] font-bold leading-[normal] tracking-[-15.41px] text-transparent select-none">
          <span className="tracking-[-39.58px] text-[#3336ff]">WO</span>
          <span className="tracking-[-39.58px] text-[#a0ee0f]">r</span>
          <span className="tracking-[-39.58px] text-white">k</span>
        </p>
        {projects.map((project) => (
          <section key={project.id} aria-labelledby={`${project.id}-title`}>
            {project.description && (
              <p className={project.descriptionClassName}>
                {project.description}
              </p>
            )}

            <Card
              className={`${project.cardClassName} rounded-2xl border border-black/5 bg-white p-0 text-black shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}
            >
              <CardContent className="relative h-full p-0">
                <h2 id={`${project.id}-title`} className={project.titleClassName}>
                  {project.title}
                </h2>
                <Button
                  type="button"
                  variant="ghost"
                  className={`${project.actionClassName} h-auto gap-1.5 rounded-none p-0 [font-family:'Noto_Sans_HK',Helvetica] text-xl font-light leading-[normal] tracking-[0] text-black underline hover:bg-transparent hover:text-black transition-all duration-300 hover:scale-105`}
                  aria-label={`View ${project.id.replace("-", " ")}`}
                >
                  <span>view site</span>
                  <img className="h-6 w-6 animate-float" alt="Bubble" src={project.bubbleSrc} width={24} height={24} />
                </Button>
              </CardContent>
            </Card>
          </section>
        ))}

        <img
          className="absolute top-[411px] left-[289px] h-[360px] w-[782px]"
          alt="Vector"
          src="https://c.animaapp.com/ms35rmg5P8kR9y/img/vector-29.svg"
          width={782}
          height={360}
        />
      </div>

      {/* Mobile & Tablet Responsive Layout (< xl) */}
      <div className="xl:hidden w-full max-w-5xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#a0ee0f] font-mono text-sm tracking-widest uppercase font-bold">Featured Showcase</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            Demo <span className="text-[#3336ff]">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between border-0">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                {project.description && (
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  className="p-0 text-black font-semibold underline flex items-center gap-2 hover:bg-transparent"
                  aria-label={`View ${project.id.replace("-", " ")}`}
                >
                  <span>view site</span>
                  <img className="h-5 w-5" alt="Bubble" src={project.bubbleSrc} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
