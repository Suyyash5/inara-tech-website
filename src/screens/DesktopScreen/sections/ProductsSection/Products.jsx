import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    title: (
      <>
        Business
        <br />
        Automation Tools
      </>
    ),
    image: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/frame-63.png",
    bubble: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/bubble.png",
    panelClassName: "bg-white text-black",
    titleClassName: "w-[183px] ml-[5px]",
  },
  {
    title: (
      <>
        Job Portal
        <br />
        Platforms
      </>
    ),
    image: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/frame-64.png",
    bubble: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/bubble-2.png",
    panelClassName: "bg-black text-white",
    titleClassName: "w-[102px] ml-1.5",
  },
  {
    title: (
      <>
        E-Commerce
        <br />
        Platforms
      </>
    ),
    image: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/frame-66.png",
    bubble: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/bubble-3.png",
    panelClassName: "bg-black text-white",
    titleClassName: "w-[126px] ml-1.5",
  },
  {
    title: (
      <>
        Enterprise
        <br />
        Resource Plan
      </>
    ),
    image: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/frame-65.png",
    bubble: "https://c.animaapp.com/ms7sjw5cnIiWCU/img/bubble-1.png",
    panelClassName: "bg-white text-black",
    titleClassName: "w-[183px] ml-[5px]",
  },
];

const indicatorIndexes = [0, 1, 2];
const keypadBars = [0, 1, 2, 3, 4];

export const Products = ({ onOpenContact }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleBuildProjectClick = () => {
    setIsSliding(true);
    setTimeout(() => {
      if (onOpenContact) {
        onOpenContact("Build Your Custom Project");
      }
      setTimeout(() => {
        setIsSliding(false);
      }, 600);
    }, 300);
  };

  return (
    <main
      className="relative min-h-[1002px] overflow-hidden bg-white"
      data-model-id="80:634"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 py-[70px] lg:grid-cols-[560px_731px] lg:gap-[54px] lg:px-[53px]">
        <section
          className="flex flex-col pt-0 lg:pt-[103px]"
          aria-labelledby="products-heading"
        >
          <h1
            id="products-heading"
            className="[font-family:'Inter',Helvetica] text-[58px] font-bold leading-[0.99] tracking-[-3.48px] sm:text-[72px] lg:text-[90.7px] lg:tracking-[-4.94px]"
          >
            <span className="text-[#141757]">
              Products
              <br />
              We&apos;re{" "}
            </span>
            <span className="text-[#3336ff]">Building</span>
          </h1>
          <p className="mt-12 max-w-[405px] [font-family:'Noto_Sans_HK',Helvetica] text-[22.7px] font-medium leading-[normal] tracking-[0] text-[#141757] lg:mt-[54px]">
            From internal business tools to customer-facing platforms,
            <span className="text-black"> we create </span>
            digital products that help organizations work smarter, grow faster,
            and
            <span className="text-black">
              {" "}
              stay ready for what&apos;s next.
            </span>
          </p>
          <Button
            type="button"
            onClick={handleBuildProjectClick}
            className="relative mt-16 h-[61px] w-full max-w-[426px] justify-start overflow-hidden rounded-[40.83px] bg-white p-0 text-inherit shadow-[inset_5.44px_8.17px_10.07px_#40491c,inset_0px_2.72px_2.59px_#181d01,-1.36px_4.08px_2.86px_-1.36px_#868893,inset_0px_-1.36px_1.77px_#00000040,1.36px_-1.36px_5.58px_#354355] hover:bg-white lg:mt-[123px]"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 flex w-[134.5px] items-center justify-center gap-[5px] rounded-[40.83px] bg-[#a0ee0f] shadow-[inset_2.72px_2.72px_1.63px_#ffffff,inset_0px_-1.36px_0px_#ffffff,1.36px_5.44px_9.94px_#000000,-1.36px_-1.36px_1.77px_#000000] transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                left: isSliding ? 'calc(100% - 134.5px)' : '0px',
              }}
            >
              {keypadBars.map((bar) => (
                <span
                  key={bar}
                  className="h-[25.75px] w-[9.48px] rounded-[6.81px] bg-[#a0ee0f] shadow-[inset_-1.36px_0px_5.44px_#00000061,inset_0px_0.68px_1.22px_#ffffff,inset_0px_-0.68px_1.22px_#000000ba]"
                />
              ))}
            </span>
            <span 
              className="absolute top-0 bottom-0 flex items-center justify-center px-3 [font-family:'Noto_Sans_HK',Helvetica] text-[17px] font-medium leading-[normal] tracking-[0] text-[#3336ff] underline transition-all duration-300 ease-in-out"
              style={{
                left: isSliding ? '0px' : '134.5px',
                right: isSliding ? '134.5px' : '0px',
              }}
            >
              Build Your Custom Project
            </span>
          </Button>
        </section>
        <section
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          aria-label="Products being built"
        >
          {productCards.map((product) => (
            <article key={product.image}>
              <Card
                className="h-[364px] w-full overflow-hidden rounded-[22.62px] border-0 bg-cover bg-center shadow-[inset_-5.72px_3.81px_7.63px_#0000003d,inset_2px_-1px_9.4px_#ffffff] sm:w-[353px]"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <CardContent className="flex h-full p-0 pt-[262px]">
                  <div
                    className={`flex h-[84px] w-[226px] items-center overflow-hidden rounded-r-[30px] ${product.panelClassName}`}
                  >
                    <div
                      className={`h-12 self-center [font-family:'Noto_Sans_HK',Helvetica] text-xl font-bold leading-[normal] tracking-[0] ${product.titleClassName}`}
                    >
                      {product.title}
                    </div>
                    <img
                      className="ml-auto mr-[7px] h-[30px] w-[30px] shrink-0"
                      alt="Bubble"
                      src={product.bubble}
                    />
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}

          <nav
            className="col-span-full mt-[25px] flex justify-center gap-[30px]"
            aria-label="Product carousel pages"
          >
            {indicatorIndexes.map((index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show product page ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-[25px] w-[25px] rounded-full transition-colors ${
                  activeSlide === index ? "bg-[#3336ff]" : "bg-[#d9d9d9]"
                }`}
              />
            ))}
          </nav>
        </section>
      </div>
      <img
        className="absolute left-[1049px] top-[1327px] h-6 w-6"
        alt="Arrow forward"
        src="https://c.animaapp.com/ms7sjw5cnIiWCU/img/arrow-forward.png"
      />
    </main>
  );
};
