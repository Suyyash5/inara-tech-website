import { useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const contactFields = [
  {
    id: "name",
    label: "Your Name",
    placeholder: "your full name",
    className: "xl:w-[237px]",
  },
  {
    id: "contact",
    label: "Number/Mail",
    placeholder: "Drop your number or mail",
    className: "xl:w-[267px]",
  },
];

  export const ContactSection = () => {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div
      id="contact"
      className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-white py-12 px-6 sm:px-12 lg:px-16"
      data-model-id="80:765"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 xl:flex-row xl:justify-between xl:items-start">
        {/* Left Column: Title & CTA */}
        <article className="xl:w-1/2 space-y-6">
          <h1 className="[font-family:'Inter',Helvetica] text-[42px] sm:text-[60px] xl:text-[76px] font-bold leading-[1.05] tracking-tight text-slate-950">
            Have an Idea? <br />
            Let&apos;s Bring It to <span className="text-[#a0ee0f]">Life.</span>
          </h1>
          <p className="max-w-[460px] [font-family:'Noto_Sans_HK',Helvetica] text-base sm:text-xl font-bold leading-relaxed text-slate-800">
            Every successful product starts with a conversation. Share your
            vision, your challenge, or even a rough sketch. We&apos;ll help you
            shape it into a solution that works.
          </p>
          <Button
            type="button"
            onClick={scrollToContactForm}
            className="h-[48px] w-[220px] rounded-[30px] bg-[#a0ee0f] [font-family:'Noto_Sans_HK',Helvetica] text-lg font-extrabold text-slate-950 shadow-md hover:bg-[#a0ee0f]/90 transition-transform hover:scale-105"
          >
            Lets Talk
          </Button>
        </article>

        {/* Right Column: Contact Form */}
        <section className="xl:w-1/2 max-w-xl">
          <h2 className="w-full [font-family:'Inter',Helvetica] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-snug tracking-tight text-[#3336ff] mb-8">
            or write to us and let us get back to you...
          </h2>
          <form
            ref={contactFormRef}
            className="space-y-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label
                    htmlFor={field.id}
                    className="whitespace-nowrap [font-family:'Noto_Sans_HK',Helvetica] text-lg font-bold text-slate-900"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="h-[52px] w-full rounded-xl border border-transparent bg-[#f1f2f6] px-4 [font-family:'Noto_Sans_HK',Helvetica] text-base text-slate-900 placeholder:text-[#cbcbcc] focus-visible:ring-2 focus-visible:ring-[#3336ff] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="whitespace-nowrap [font-family:'Noto_Sans_HK',Helvetica] text-lg font-bold text-slate-900"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your idea, your business, or the challenge you're trying to solve. The more details you share, the better we can understand your vision."
                className="h-[180px] w-full resize-none rounded-xl border border-transparent bg-[#f1f2f6] p-4 [font-family:'Noto_Sans_HK',Helvetica] text-base text-slate-900 placeholder:text-[#cbcbcc] focus-visible:ring-2 focus-visible:ring-[#3336ff] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
              />
            </div>
            <Button
              type="submit"
              className="h-[48px] w-full rounded-[30px] bg-[#3336ff] [font-family:'Noto_Sans_HK',Helvetica] text-lg font-bold text-white shadow-lg hover:bg-[#3336ff]/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(51,54,255,0.35)] active:scale-95"
            >
              Submit
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};
