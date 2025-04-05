import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is CNG conversion safe for my vehicle?",
    answer: "Yes, CNG conversion is safe when done by certified professionals using approved kits. Our CNG Conversion Centre follows strict safety protocols and uses only government-approved equipment to ensure optimal performance and safety",
    value: "item-1",
  },
  {
    question: "How do I know if the lubricants used are of high quality?",
    answer: "We use only premium-grade lubricants from trusted brands that meet or exceed industry standards. Each product is rigorously tested to ensure it delivers maximum engine protection and efficiency.",
    value: "item-2",
  },
  {
    question: "How often should I get wheel balancing and alignment done?",
    answer: "We recommend checking your wheel balancing and alignment every 2,000 to 4,000 kilometers or if you notice uneven tire wear, vibration, or your car pulling to one side. Proper alignment ensures safer driving and better fuel economy.",
    value: "item-3",
  },
  {
    question: "What safety measures are in place at your fueling stations?",
    answer: "Our fueling stations are equipped with advanced safety systems, fire suppression technology, and are operated by trained personnel to ensure a safe and smooth refueling experience for all customers.",
    value: "item-4",
  },
  {
    question: "Do you offer warranties or guarantees on car services and repairs?",
    answer: "Yes, our car service centre provides service warranties on parts and labor. We stand by the quality of our work and aim to deliver reliable, transparent, and trusted service every time.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-16 sm:py-18"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
