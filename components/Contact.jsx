"use client";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="container px-4 mx-auto pt-24">
      <p className="uppercase">Get in touch</p>
      <h2 className="mb-10">Contact me.</h2>
      <div className="flex flex-col-reverse gap-20 lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <InlineWidget
            url="https://calendly.com/khalid-hosein/get-to-know-me"
            styles={{
              height: "1200px",
              minHeight: "1200px", // Adjust the height to prevent content overflow
            }}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-xl leading-8">
            <span className="text-5xl">Let's Connect!</span> I'm excited to hear
            from you. Whether you have a project in mind, a question about web
            development, or just want to chat about the latest tech trends, I'm
            all ears! Feel free to reach out and let's start a conversation. The
            digital world is full of possibilities, and I can't wait to explore
            them together. Don't hesitate to drop me a message using the contact
            form or through the provided social links. Looking forward to
            connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
