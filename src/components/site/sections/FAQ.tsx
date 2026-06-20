import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/structured-data";

export function FAQ() {
  return (
    <section id="faq" className="bg-cream" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow">
            <span className="eyebrow-line" /> FAQ
          </p>
          <h2 id="faq-heading" className="mt-4 text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Common questions about Zegora and Zegora Foreign Private Employment Agent at
            zegoraagency.com.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
