import { useState } from "react";
import { Button } from "./ui/button";
import { TextArea } from "./ui/input";

export const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Reach out to {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            US
          </span>
          {" "}and we will get back to you
        </h3>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-8 md:gap-4 mt-8"
          onSubmit={handleSubmit}
        >
          <TextArea
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            rows={5}
            placeholder="Your message"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="text"
          />
          <Button
            onClick={() => {
              open(`mailto:ankoki3@gmail.com?subject=Customer Reach&body=${message}`)
            }}
          >Email Us</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
