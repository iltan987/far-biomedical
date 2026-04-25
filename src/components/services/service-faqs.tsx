import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQData = {
  _id: string;
  question: string;
  answer: string;
  questionAttr?: string;
  answerAttr?: string;
};

export function ServiceFAQs({ faqs }: { faqs: FAQData[] }) {
  return (
    <Accordion className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq._id} value={`item-${index}`}>
          <AccordionTrigger className="text-left" data-sanity={faq.questionAttr}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-muted-foreground"
            data-sanity={faq.answerAttr}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
