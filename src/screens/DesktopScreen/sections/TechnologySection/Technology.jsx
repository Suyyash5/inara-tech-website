import { Card, CardContent } from "../../../../components/ui/card";

const technologies = [
  {
    alt: "Next.js",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-71.svg",
  },
  {
    alt: "Node.js",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-72.svg",
  },
  {
    alt: "Firebase",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-73.svg",
  },
  {
    alt: "React",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-74.svg",
  },
  {
    alt: "Cloudflare",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-75.svg",
  },
  {
    alt: "Tailwind CSS",
    src: "https://c.animaapp.com/ms7rxyiyNhIp3S/img/frame-76.svg",
  },
];

export const Technology = () => {
  return (
    <section
      className="min-h-[848px] w-full overflow-hidden bg-white px-6 pt-[45px] sm:px-12 lg:px-[97px]"
      data-model-id="80:668"
      aria-labelledby="technologies-heading"
    >
      <header className="text-center">
        <h1
          id="technologies-heading"
          className="[font-family:'Inter',Helvetica] text-[44px] font-bold leading-[normal] tracking-[-2.64px] sm:text-[60px] sm:tracking-[-3.6px] lg:text-[80px] lg:tracking-[-4.8px]"
        >
          <span className="text-[#3336ff] tracking-[-2.11px] sm:tracking-[-2.88px] lg:tracking-[-3.84px]">
            Power
          </span>
          <span className="text-[#141757] tracking-[-2.11px] sm:tracking-[-2.88px] lg:tracking-[-3.84px]">
            ed by Modern{" "}
          </span>
          <span className="text-[#3336ff] tracking-[-2.11px] sm:tracking-[-2.88px] lg:tracking-[-3.84px]">
            Technologies
          </span>
        </h1>
      </header>
      <div className="mx-auto mt-[54px] grid max-w-[1246px] grid-cols-1 gap-x-[53px] gap-y-3 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-3 lg:gap-y-[23px]">
        {technologies.map((technology) => (
          <Card
            key={technology.src}
            className="rounded-[30px] border border-white/5 bg-transparent shadow-none transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A0EF0F]/10 hover:border-white/10 cursor-pointer"
          >
            <CardContent className="p-0">
              <figure>
                <img
                  className="h-auto w-full"
                  src={technology.src}
                  alt={technology.alt}
                  width={380}
                  height={240}
                />
              </figure>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mx-auto mt-[42px] max-w-[650px] pb-10 text-center [font-family:'Noto_Sans_HK',Helvetica] text-base font-bold leading-[normal] tracking-[0] text-[#4b4d7a] sm:text-xl lg:mt-[42px]">
        We use trusted technologies and modern frameworks to build secure,
        scalable, and high-performing digital products that are ready for
        today&apos;s challenges and tomorrow&apos;s growth.
      </p>
    </section>
  );
};
