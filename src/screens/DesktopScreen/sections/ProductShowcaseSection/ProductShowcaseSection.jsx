import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productRows = [
    [
        {
            title: "Job Portal Platform",
            image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-61.png",
            cardClass: "h-[364px]",
            contentClass: "mt-[258px] h-[75px] px-[13px] pt-5",
            titleClass: "w-[309px] whitespace-nowrap",
            actionClass: "mt-[14px]",
        },
        {
            title: "Customer Admin Panel",
            image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-62.png",
            cardClass: "h-[364px]",
            contentClass: "mt-[246px] h-[88px] px-3 pt-1.5",
            titleClass: "w-[244px]",
            actionClass: "mt-[34px]",
        },
    ],
    [
        {
            title: "Business Automation Tools",
            image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-63.png",
            cardClass: "h-[364px]",
            contentClass: "mt-[214px] h-[126px] px-3 pt-1.5",
            titleClass: "w-[244px]",
            actionClass: "mt-[14px] self-end",
        },
        {
            title: "Digital Payment Platform",
            image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-64.png",
            cardClass: "h-[364px]",
            contentClass: "mt-[261px] h-[75px] px-[13px] pt-5",
            titleClass: "w-[398px] whitespace-nowrap",
            actionClass: "mt-[14px]",
        },
    ],
];

const ecommerceProduct = {
    title: "E-Commerce Management Platform",
    image: "https://c.animaapp.com/ms067qo1f69sd7/img/frame-65.png",
};

const ProductCard = ({ product }) => {
    return (
        <Card
            className={`overflow-hidden rounded-[22.62px] border-0 bg-cover bg-center shadow-[inset_-5.72px_3.81px_7.63px_#0000003d,inset_5.72px_-3.81px_3.81px_#ffffff,-0.95px_2.86px_13.26px_#0000006e] ${product.cardClass}`}
            style={{ backgroundImage: `url(${product.image})` }}
        >
            <CardContent
                className={`flex w-full justify-between bg-white p-0 [font-family:'Noto_Sans_HK',Helvetica] ${product.contentClass}`}
            >
                <h3
                    className={`text-[32px] font-bold leading-[normal] tracking-[0] text-black ${product.titleClass}`}
                >
                    {product.title}
                </h3>
                <Button
                    type="button"
                    variant="link"
                    className={`h-auto w-[122px] p-0 text-right text-xl font-light leading-[normal] tracking-[0] text-black underline underline-offset-0 hover:text-black ${product.actionClass}`}
                >
                    view projects
                </Button>
            </CardContent>
        </Card>
    );
};

export const ProductShowcaseSection = () => {
    return (
        <section
            aria-labelledby="showcase-products-heading"
            className="w-full bg-white py-16 [font-family:'Noto_Sans_HK',Helvetica]"
        >
            <div className="mx-auto w-full max-w-[1192px] px-5 lg:px-0">
                <h2
                    id="showcase-products-heading"
                    className="flex h-[58px] items-center justify-center text-center text-5xl font-black leading-[normal] tracking-[0] text-[#141757]"
                >
                    Products We&apos;re Building
                </h2>
                <div className="mt-[73px] space-y-8">
                    <div
                        className="grid gap-[30px] max-md:grid-cols-1"
                        style={{ gridTemplateColumns: "719fr 443fr" }}
                    >
                        {productRows[0].map((product) => (
                            <ProductCard key={product.title} product={product} />
                        ))}
                    </div>
                    <div
                        className="grid gap-[30px] max-md:grid-cols-1"
                        style={{ gridTemplateColumns: "353fr 809fr" }}
                    >
                        {productRows[1].map((product) => (
                            <ProductCard key={product.title} product={product} />
                        ))}
                    </div>
                    <div
                        className="grid gap-[51px] max-md:grid-cols-1"
                        style={{ gridTemplateColumns: "545fr 596fr" }}
                    >
                        <Card
                            className="h-[364px] overflow-hidden rounded-[22.62px] border-0 bg-cover bg-center shadow-[inset_-5.72px_3.81px_7.63px_#0000003d,inset_5.72px_-3.81px_3.81px_#ffffff,-0.95px_2.86px_13.26px_#0000006e]"
                            style={{ backgroundImage: `url(${ecommerceProduct.image})` }}
                        >
                            <CardContent className="mt-[187px] flex h-[138px] w-full justify-between bg-white px-[19px] pt-3 [font-family:'Noto_Sans_HK',Helvetica]">
                                <h3 className="w-[346px] text-[32px] font-bold leading-[normal] tracking-[0] text-black">
                                    {ecommerceProduct.title}
                                </h3>
                                <Button
                                    type="button"
                                    variant="link"
                                    className="mt-[84px] h-auto w-[122px] p-0 text-right text-xl font-light leading-[normal] tracking-[0] text-black underline underline-offset-0 hover:text-black"
                                >
                                    view projects
                                </Button>
                            </CardContent>
                        </Card>
                        <div className="pt-[146px] max-md:pt-0">
                            <p className="max-w-[560px] text-xl font-medium leading-[normal] tracking-[0] text-black">
                                From internal business tools to customer-facing platforms, we
                                create digital products that help organizations work smarter,
                                grow faster, and stay ready for what&apos;s next.
                            </p>
                            <Button
                                type="button"
                                variant="link"
                                className="mt-[122px] flex h-auto items-center gap-[9px] p-0 text-xl font-bold leading-[normal] tracking-[0] text-[#3336ff] underline underline-offset-0 hover:text-[#3336ff] max-md:mt-10"
                            >
                                Discuss Custom Product Building
                                <img
                                    className="h-6 w-6"
                                    alt="Arrow forward"
                                    src="https://c.animaapp.com/ms067qo1f69sd7/img/arrow-forward.png"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
