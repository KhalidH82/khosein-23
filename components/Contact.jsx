"use client";
import React, { useEffect } from "react";

import { InlineWidget } from "react-calendly";
import { prompt, josefin } from "../app/fonts";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="container px-4 mx-auto py-5">
      <p className={`uppercase text-right ${josefin.className}`}>
        Get in Touch
      </p>
      <h2 className={`mb-5 font-bold text-right ${prompt.className}`}>
        Let's Connect.
      </h2>

      <div className="flex flex-col-reverse gap-5 lg:flex-row items-center">
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
          <div className="flex items-end">
            <div className="avatar online h-10 lg:h-20 mt-2">
              <div className="hover:ring-4 relative">
                <img
                  className="rounded-full"
                  src="/images/khavatar.webp"
                  alt="Khalid Hosein"
                />
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble bg-ship-cove-500">
                <p
                  className={`leading-1 px-1 py-3 text-ship-cove-100 ${josefin.className}`}
                >
                  I'm excited to hear from you. Whether you have a project in
                  mind, a question about web development, or just want to chat
                  about the latest tech trends, I'm all ears! Feel free to reach
                  out and let's start a conversation. The digital world is full
                  of possibilities, and I can't wait to explore them together.
                  Don't hesitate to drop me a message using the contact form or
                  through the provided social links. Looking forward to
                  connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
