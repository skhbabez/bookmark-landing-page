import type { ComponentPropsWithRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "../../Components/Accordion/Accordion";
import Button from "../../Components/Button/Button";
import Divider from "../../Components/Divider/Divider";
import clsx from "clsx";

const Faq = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section className={clsx("max-w-135 space-y-14", className)} {...props}>
      <div className="space-y-4 text-center">
        <h2 className="text-1-mobile md:text-2 text-blue-950">
          Frequently Asked Questions
        </h2>
        <p className="prose">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="space-y-4">
        <Accordion name="faq">
          <AccordionTrigger>What is Bookmark?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </AccordionContent>
        </Accordion>
        <Divider />
        <Accordion name="faq">
          <AccordionTrigger>How can I request a new browser?</AccordionTrigger>
          <AccordionContent>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </AccordionContent>
        </Accordion>
        <Divider />
        <Accordion name="faq">
          <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
          <AccordionContent>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </AccordionContent>
        </Accordion>
        <Divider />
        <Accordion name="faq">
          <AccordionTrigger>
            What about other Chromium browsers?
          </AccordionTrigger>
          <AccordionContent>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </AccordionContent>
        </Accordion>
        <Divider />
      </div>
      <Button type="button" className="block mx-auto px-6">
        More Info
      </Button>
    </section>
  );
};

export default Faq;
